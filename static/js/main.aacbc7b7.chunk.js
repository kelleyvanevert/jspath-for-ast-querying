(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,n,t){e.exports=t(52)},26:function(e,n,t){},52:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(5),c=(t(26),t(3)),l=t(2),i=t(1),u=t(7),d=t(16),s=t(8),m=(t(28),t(29),t(30),t(17)),f=function(e){try{return Object(m.parse)(e)}catch(n){return null}};function b(e,n){var t=Object(r.useState)(e),a=Object(l.a)(t,2),o=a[0],c=a[1];return Object(r.useEffect)(function(){var t=setTimeout(function(){c(e)},n);return function(){clearTimeout(t)}},[e]),o}function p(){var e=Object(c.a)(["\n            cursor: pointer;\n            > .loc {\n              display: none;\n            }\n            :hover {\n              > .loc {\n                display: inline;\n              }\n            }\n          "]);return p=function(){return e},e}function h(){var e=Object(c.a)(["\n        font-size: 0.8em;\n        color: #999;\n        background: #f5f5f5;\n        padding: 0.1em;\n        cursor: pointer;\n      "]);return h=function(){return e},e}var g=i.a.span.withConfig({displayName:"TreeNode__NodeType",componentId:"sc-1xl6jt1-0"})(["color:black;text-decoration:underline;"]),j=i.a.span.withConfig({displayName:"TreeNode__Key",componentId:"sc-1xl6jt1-1"})(["font-style:italic;color:#999;"]),y=i.a.span.withConfig({displayName:"TreeNode__String",componentId:"sc-1xl6jt1-2"})(["font-weight:bold;color:#4caf50;"]),v=i.a.span.withConfig({displayName:"TreeNode__Number",componentId:"sc-1xl6jt1-3"})(["font-weight:bold;color:red;"]);function O(e){var n=e.node,t=e.mark,o=Object(r.useState)(!0),c=Object(l.a)(o,2),i=c[0],u=c[1];return null===n?a.a.createElement("span",null,"null"):"string"===typeof n?a.a.createElement(y,null,'"',n,'"'):"number"===typeof n?a.a.createElement(v,null,'"',n,'"'):a.a.createElement("span",null,a.a.createElement(k,null,a.a.createElement(g,{style:i?{fontWeight:"bold",textDecoration:"none"}:{},onClick:function(e){return e.preventDefault(),u(!i),!1},onMouseOver:function(){return t&&t(n.loc)}},n.type)," ","{"," ","loc"in n?function(e,n){return a.a.createElement(E,{className:"loc",onClick:n?function(){return n(e)}:function(){}},e.start.line,":",e.start.column," - ",e.end.line,":",e.end.column)}(n.loc,t):null),a.a.createElement("span",{style:{display:i?"inline":"none"}},Object.entries(n).map(function(e){var n=Object(l.a)(e,2),r=n[0],o=n[1];return["type","start","end","loc"].includes(r)?null:"object"===typeof o&&null!==o&&o.type||"string"===typeof o||"number"===typeof o?a.a.createElement("div",{key:r,style:{paddingLeft:"1rem",borderLeft:"1px solid #ddd"}},a.a.createElement(j,null,r,":")," ",a.a.createElement(O,{node:o,mark:t})):"object"===typeof o&&null!==o&&o.forEach&&o.length>0?a.a.createElement("div",{key:r,style:{paddingLeft:"1rem",borderLeft:"1px solid #ddd"}},a.a.createElement("div",null,a.a.createElement(j,null,r,":")," ["),o.map(function(e,n){return a.a.createElement("div",{key:n,style:{paddingLeft:"1rem",borderLeft:"1px solid #ddd"}},a.a.createElement(O,{node:e,mark:t}))})):null})))}var E=Object(i.a)("span")(h()),k=Object(i.a)("span")(p());function x(){var e=Object(c.a)(["\n            flex-grow: 1;\n            overflow-y: auto;\n            padding: 1rem;\n          "]);return x=function(){return e},e}function w(){var e=Object(c.a)(["\n            width: 40%;\n\n            .react-codemirror2,\n            .CodeMirror {\n              height: 100%;\n            }\n\n            .query-selected {\n              background: rgba(33, 150, 243, 0.3);\n            }\n\n            .marked-text {\n              background: rgba(233, 30, 99, 0.4);\n            }\n          "]);return w=function(){return e},e}function C(){var e=Object(c.a)(["\n          height: calc(100% - 6.2rem);\n\n          display: flex;\n          flex-grow: 1;\n        "]);return C=function(){return e},e}function N(){var e=Object(c.a)(["\n            position: absolute;\n            top: 0.6rem;\n            right: 0.6rem;\n            background: #2196f3;\n            color: white;\n            z-index: 10;\n            padding: 0.3rem 0.4rem;\n            font-weight: bold;\n            border-radius: 0.3rem;\n            box-shadow: 0.05rem 0.05rem 0.4rem rgba(0, 0, 0, 0.2);\n          "]);return N=function(){return e},e}function T(){var e=Object(c.a)(["\n          height: 6.2rem;\n          box-sizing: border-box;\n          border-bottom: 1px solid #aaa;\n          position: relative;\n\n          .react-codemirror2,\n          .CodeMirror {\n            height: 100%;\n          }\n        "]);return T=function(){return e},e}function S(){var e=Object(c.a)(["\n        display: flex;\n        width: 100%;\n        height: 100%;\n        max-height: 100%;\n        flex-direction: column;\n      "]);return S=function(){return e},e}var I={mode:"plain",lineNumbers:!0,smartIndent:!0,tabSize:2,indentWithTabs:!1},M={mode:"text/typescript",theme:"material",lineNumbers:!0,smartIndent:!0,tabSize:2,indentWithTabs:!1},_=Object(u.a)("query"),L=Object(u.a)("code"),z='\n..{ .type === "ClassMethod" && .key.name === "total" }\n..{ .type === "MemberExpression" && .property.name === "reduce" } \n',B="\n// The aim of this sketch is to be able to\n//  play around with JSPath as a way of selecting\n//  nodes of a Babel-parsed JavaScript code AST.\n\n// For more info, see e.g.:\n// - https://www.npmjs.com/package/jspath\n// - https://astexplorer.net/\n\nconst num = (n => n + 2)(40);\n\nclass Cart {\n  constructor () {\n    this.items = [];\n  }\n  getItems () {\n    return this.items;\n  }\n  addItem (item) {\n  \tthis.items.push(item);\n  }\n  total () {\n    return this.items.reduce((a, b) => a + b, 0);\n  }\n}\n\n// Make by Kelley [klve.nl]\n// Using: React, CodeMirror, JSPath, Babel\n";var D=function(e){return e}(function(){var e=Object(r.useRef)({sel:[]}),n=L(B),t=Object(l.a)(n,2),o=t[0],c=t[1],i=Object(r.useState)(null),u=Object(l.a)(i,2),m=u[0],p=u[1],h=_(z),g=Object(l.a)(h,2),j=g[0],y=g[1],v=Object(r.useState)(null),E=Object(l.a)(v,2),k=E[0],x=E[1],w=b(o,200);Object(r.useEffect)(function(){p(f(w))},[w]);var C=b(j,50);Object(r.useEffect)(function(){if(m)try{x(Object(d.apply)(C,m))}catch(e){x(null)}},[C,m]);var N=Object(r.useCallback)(function(n){(n||null===n)&&e.current.marker&&e.current.marker.clear(),n&&e.current.editor&&(e.current.marker=e.current.editor.getDoc().markText({line:n.start.line-1,ch:n.start.column},{line:n.end.line-1,ch:n.end.column},{className:"marked-text"}))},[]);return Object(r.useEffect)(function(){if(e.current.editor){var n=e.current.editor.getDoc();e.current.sel.forEach(function(e){return e.clear()}),e.current.sel=(k||[]).map(function(e){return e&&e.loc?n.markText({line:e.loc.start.line-1,ch:e.loc.start.column},{line:e.loc.end.line-1,ch:e.loc.end.column},{className:"query-selected"}):null}).filter(function(e){return!!e})}},[k]),a.a.createElement(J,null,a.a.createElement(q,null,a.a.createElement(s.Controlled,{value:j,options:I,onBeforeChange:function(e,n,t){y(t)}}),a.a.createElement(W,null,k?"".concat(k.length," match").concat(1===k.length?"":"es"):"query parse error")),a.a.createElement(K,null,a.a.createElement(P,null,a.a.createElement(s.Controlled,{value:o,options:M,onBeforeChange:function(e,n,t){c(t)},editorDidMount:function(n){return e.current.editor=n}})),a.a.createElement(R,{onMouseLeave:function(){return N(null)}},a.a.createElement(O,{node:m,mark:N}))))}),J=Object(i.a)("div")(S()),q=Object(i.a)("div")(T()),W=Object(i.a)("div")(N()),K=Object(i.a)("div")(C()),P=Object(i.a)("div")(w()),R=Object(i.a)("div")(x());Object(o.render)(a.a.createElement(D,null),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.aacbc7b7.chunk.js.map