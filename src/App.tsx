import "styled-components/macro";
import { hot } from "react-hot-loader";
import React, { useState, useEffect, useRef, useCallback } from "react";
import createPersistedState from "use-persisted-state";
import { apply } from "jspath";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/mode/javascript/javascript";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import parse from "./parse";
import useDebounce from "./useDebounce";
import TreeNode from "./TreeNode";
import Loc from "./Loc";

const QUERY_CM_OPTS = {
  mode: "plain",
  lineNumbers: true,
  smartIndent: true,
  tabSize: 2,
  indentWithTabs: false
};

const JS_CM_OPTS = {
  mode: "text/typescript",
  theme: "material",
  lineNumbers: true,
  smartIndent: true,
  tabSize: 2,
  indentWithTabs: false
};

const useLocalQuery = createPersistedState("query");
const useLocalCode = createPersistedState("code");

const INITIAL_QUERY = `
..{ .type === "ClassMethod" && .key.name === "total" }
..{ .type === "MemberExpression" && .property.name === "reduce" } 
`;

const INITIAL_JS = `
// The aim of this sketch is to be able to
//  play around with JSPath as a way of selecting
//  nodes of a Babel-parsed JavaScript code AST.

// For more info, see e.g.:
// - https://www.npmjs.com/package/jspath
// - https://astexplorer.net/

const num = (n => n + 2)(40);

class Cart {
  constructor () {
    this.items = [];
  }
  getItems () {
    return this.items;
  }
  addItem (item) {
  	this.items.push(item);
  }
  total () {
    return this.items.reduce((a, b) => a + b, 0);
  }
}

// Make by Kelley [klve.nl]
// Using: React, CodeMirror, JSPath, Babel
`;

function App() {
  const instance = useRef<{
    editor?: CodeMirror.Editor;
    marker?: CodeMirror.TextMarker;
    sel: CodeMirror.TextMarker[];
  }>({ sel: [] });
  const [code, setCode] = useLocalCode<string>(INITIAL_JS);
  const [ast, setAst] = useState<null | any>(null);

  const [query, setQuery] = useLocalQuery<string>(INITIAL_QUERY);
  const [sel, setSel] = useState<null | any[]>(null);

  const code_db = useDebounce<string>(code, 200);
  useEffect(() => {
    setAst(parse(code_db));
  }, [code_db]);

  const query_db = useDebounce<string>(query, 50);
  useEffect(() => {
    if (ast) {
      try {
        setSel(apply(query_db, ast));
      } catch {
        setSel(null);
      }
    }
  }, [query_db, ast]);

  const mark = useCallback((loc?: null | Loc) => {
    if ((loc || loc === null) && instance.current.marker) {
      instance.current.marker.clear();
    }
    if (loc) {
      if (instance.current.editor) {
        instance.current.marker = instance.current.editor.getDoc().markText(
          { line: loc.start.line - 1, ch: loc.start.column },
          { line: loc.end.line - 1, ch: loc.end.column },
          {
            className: "marked-text"
          }
        );
      }
    }
  }, []);

  useEffect(() => {
    if (!instance.current.editor) return;
    const doc = instance.current.editor.getDoc();
    instance.current.sel.forEach(mark => mark.clear());
    // @ts-ignore
    instance.current.sel = (sel || [])
      .map(node => {
        if (node && node.loc) {
          return doc.markText(
            { line: node.loc.start.line - 1, ch: node.loc.start.column },
            { line: node.loc.end.line - 1, ch: node.loc.end.column },
            {
              className: "query-selected"
            }
          );
        } else {
          return null;
        }
      })
      .filter(m => !!m);
  }, [sel]);

  return (
    <div
      css={`
        display: flex;
        width: 100%;
        height: 100%;
        max-height: 100%;
        flex-direction: column;
      `}
    >
      <div
        css={`
          height: 6.2rem;
          box-sizing: border-box;
          border-bottom: 1px solid #aaa;
          position: relative;

          .react-codemirror2,
          .CodeMirror {
            height: 100%;
          }
        `}
      >
        <CodeMirror
          value={query}
          options={QUERY_CM_OPTS}
          onBeforeChange={(editor, data, value) => {
            setQuery(value);
          }}
        />
        <div
          css={`
            position: absolute;
            top: 0.6rem;
            right: 0.6rem;
            background: #2196f3;
            color: white;
            z-index: 10;
            padding: 0.3rem 0.4rem;
            font-weight: bold;
            border-radius: 0.3rem;
            box-shadow: 0.05rem 0.05rem 0.4rem rgba(0, 0, 0, 0.2);
          `}
        >
          {sel
            ? `${sel.length} match${sel.length === 1 ? "" : "es"}`
            : "query parse error"}
        </div>
      </div>
      <div
        css={`
          height: calc(100% - 6.2rem);

          display: flex;
          flex-grow: 1;
        `}
      >
        <div
          css={`
            width: 40%;

            .react-codemirror2,
            .CodeMirror {
              height: 100%;
            }

            .query-selected {
              background: rgba(33, 150, 243, 0.3);
            }

            .marked-text {
              background: rgba(233, 30, 99, 0.4);
            }
          `}
        >
          <CodeMirror
            value={code}
            options={JS_CM_OPTS}
            onBeforeChange={(editor, data, value) => {
              setCode(value);
            }}
            editorDidMount={editor => (instance.current.editor = editor)}
          />
        </div>
        <div
          onMouseLeave={() => mark(null)}
          css={`
            flex-grow: 1;
            overflow-y: auto;
            padding: 1rem;
          `}
        >
          <TreeNode node={ast} mark={mark} />
        </div>
      </div>
    </div>
  );
}

const wrap =
  process.env.NODE_ENV === "development" ? hot(module) : (x: any) => x;

export default wrap(App);
