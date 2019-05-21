import styled from "styled-components/macro";
import React, { useState } from "react";
import Loc from "./Loc";

interface Node {
  type: string;
  loc?: Loc;
}

const NodeType = styled.span`
  color: black;
  text-decoration: underline;
`;

const Key = styled.span`
  font-style: italic;
  color: #999;
`;

const String = styled.span`
  font-weight: bold;
  color: #4caf50;
`;

const Number = styled.span`
  font-weight: bold;
  color: red;
`;

function renderLoc(loc: Loc, mark?: (loc: Loc) => void) {
  return (
    <span
      className="loc"
      css={`
        font-size: 0.8em;
        color: #999;
        background: #f5f5f5;
        padding: 0.1em;
        cursor: pointer;
      `}
      onClick={mark ? () => mark(loc) : () => {}}
    >
      {loc.start.line}:{loc.start.column} - {loc.end.line}:{loc.end.column}
    </span>
  );
}

interface Props {
  node: null | Node;
  mark?: (loc?: null | Loc) => void;
}

export default function TreeNode({ node, mark }: Props) {
  const [expanded, setExpanded] = useState<boolean>(true);

  if (node === null) {
    return <span>null</span>;
  } else if (typeof node === "string") {
    return <String>"{node}"</String>;
  } else if (typeof node === "number") {
    return <Number>"{node}"</Number>;
  } else {
    return (
      <span>
        <span
          css={`
            cursor: pointer;
            > .loc {
              display: none;
            }
            :hover {
              > .loc {
                display: inline;
              }
            }
          `}
        >
          <NodeType
            style={
              expanded ? { fontWeight: "bold", textDecoration: "none" } : {}
            }
            onClick={e => {
              e.preventDefault();
              setExpanded(!expanded);
              return false;
            }}
            onMouseOver={() => mark && mark(node.loc)}
          >
            {node.type}
          </NodeType>{" "}
          {"{"} {"loc" in node ? renderLoc(node.loc!, mark) : null}
        </span>
        <span style={{ display: expanded ? "inline" : "none" }}>
          {Object.entries(node).map(([key, val]) => {
            if (["type", "start", "end", "loc"].includes(key)) {
              return null;
            } else if (
              (typeof val === "object" && val !== null && val.type) ||
              typeof val === "string" ||
              typeof val === "number"
            ) {
              return (
                <div
                  key={key}
                  style={{ paddingLeft: "1rem", borderLeft: "1px solid #ddd" }}
                >
                  <Key>{key}:</Key> <TreeNode node={val} mark={mark} />
                </div>
              );
            } else if (
              typeof val === "object" &&
              val !== null &&
              val.forEach &&
              val.length > 0
            ) {
              return (
                <div
                  key={key}
                  style={{ paddingLeft: "1rem", borderLeft: "1px solid #ddd" }}
                >
                  <div>
                    <Key>{key}:</Key> [
                  </div>
                  {val.map((node: null | Node, i: number) => (
                    <div
                      key={i}
                      style={{
                        paddingLeft: "1rem",
                        borderLeft: "1px solid #ddd"
                      }}
                    >
                      <TreeNode node={node} mark={mark} />
                    </div>
                  ))}
                </div>
              );
            } else {
              return null;
            }
          })}
        </span>
      </span>
    );
  }
}
