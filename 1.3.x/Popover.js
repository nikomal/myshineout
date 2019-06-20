(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[30],{1202:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(468),i=n(469),c=n(33),l=n(1203),s=n.n(l),u=n(1204),d=n.n(u),p=Object(c.b)(s.a,d.a),m=[{name:"1-base",title:Object(c.b)("基本用法 \n Popover 放置在一个组件内部弹出","Base \n The basic usage."),component:n(1205).default,rawText:n(1206)},{name:"2-position",title:Object(c.b)("弹出位置 \n 内置了十二个弹出的位置","Position \n Twelve pop-up positions are built in."),component:n(1207).default,rawText:n(1208)},{name:"3-click",title:Object(c.b)("点击触发 \n 默认是移入组件触发，设置 trigger 为 'click'，可以改为点击触发","Trigger \n Set the trigger property to change the trigger event to 'click'."),component:n(1209).default,rawText:n(1210)},{name:"4-func",title:Object(c.b)("关闭事件 \n content 属性可以为一个函数，会传递 close 函数，用来在弹出面板内部处理关闭事件","Close \n Set the content property to a function, you can handle the close event inside the popup panel."),component:n(1211).default,rawText:n(1212)},{name:"5-type",title:Object(c.b)("样式 \n 内置四种样式","Type \n Four styles are built in."),component:n(1213).default,rawText:n(1214)},{name:"6-type",title:Object(c.b)(" \n 如果内置样式不满足需求，可以通过 background 和 border 自定义样式"," \n Customize the style with background and border."),component:n(1215).default,rawText:n(1216)},{name:"7-old",title:Object(c.b)("旧API \n 旧接口使用 Popover 包在组件外使用，通过 content 传递内容，已不推荐","Old API \n Old API, is out of date."),component:n(1217).default,rawText:n(1218)},{name:"8-event",title:Object(c.b)("事件 \n 提供了onOpen 和 onClose 事件","Events \n provider onOpen and onClose event"),component:n(1219).default,rawText:n(1220)}];t.default=Object(a.a)(function(e){return r.a.createElement(i.b,Object.assign({},e,{codes:void 0,source:p,examples:m}))})},1203:function(e,t){e.exports="# Popover *气泡*\n\n<example />\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| background | string | '#fff' | 弹出层背景色（含箭头） |\n| border | string | '#dee2e6' | 弹出层边框颜色（含箭头） |\n| className | string | 无 | 扩展className |\n| children | ReactElement | 必填 | 弹出显示内容 |\n| onClose | function | 无 | Popover 关闭时回调时间 |\n| onOpen | function | 无 | Popover 弹出回调事件 |\n| position | string | 'top' | 弹出层位置，可选值为 \\['top-left', 'top', 'top-right', 'left-top', 'left', 'left-bottom', 'right-top', 'right', 'right-bottom', 'bottom-left', 'bottom', 'bottom-right'] |\n| style | object | 无 | 最外层扩展样式 |\n| trigger | string | 'hover' | 触发方式，可选值为 \\['click', 'hover'] |\n| type | string | 无 | 可选值为，\\['success', 'info', 'warning', 'danger'] |\n| * content | ReactElement \\| function | | 旧接口，如果content为空，父组件作为触发元素 | "},1204:function(e,t){e.exports="# Popover\n\n<example />\n\n## API\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| background | string | '#fff' | Pop-up background-color(with arrows) |\n| border | string | '#dee2e6' | The color of pop-up border(with arrows) |\n| className | string | - | Extend className |\n| children | ReactElement | required | Pop-up content. |\n| onClose | function | - | Callback event when close. |\n| onOpen | function | - | Callback event when open. |\n| position | string | 'top' | The position of pop-up layer, options:  \\['top-left', 'top', 'top-right', 'left-top', 'left', 'left-bottom', 'right-top', 'right', 'right-bottom', 'bottom-left', 'bottom', 'bottom-right'] |\n| style | object | - | The pop-up container style |\n| trigger | string | 'hover' | options: \\['click', 'hover'] |\n| type | string | none | Options: \\['success', 'info', 'warning', 'danger'] |\n| * content | ReactElement \\| function | | Old API, out of date. | "},1205:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(49),i=n(462);t.default=function(){return r.a.createElement(a.a,null,r.a.createElement(i.a,{style:{width:200,padding:20}},"Some text"),"Hover")}},1206:function(e,t){e.exports="/**\n * cn - 基本用法\n *    -- Popover 放置在一个组件内部弹出\n * en - Base\n *    -- The basic usage.\n */\nimport React from 'react'\nimport { Button, Popover } from 'shineout'\n\nexport default function() {\n  return (\n    <Button>\n      <Popover style={{ width: 200, padding: 20 }}>Some text</Popover>\n      Hover\n    </Button>\n  )\n}\n"},1207:function(e,t,n){"use strict";n.r(t);var o=n(17),r=n(0),a=n.n(r),i=n(462),c=[[null,"bottom-left","bottom","bottom-right",null],["right-top",null,null,null,"left-top"],["right",null,null,null,"left"],["right-bottom",null,null,null,"left-bottom"],[null,"top-left","top","top-right",null]],l={width:100,textAlign:"center",lineHeight:"30px",margin:4,display:"inline-block",border:"solid 1px #eee",cursor:"pointer"};t.default=function(){return c.map(function(e,t){return a.a.createElement("div",{key:t},e.map(function(e,t){return e?a.a.createElement("div",{key:t,style:l},a.a.createElement(i.a,{trigger:"click",position:e},a.a.createElement("div",{style:{width:240,padding:30}},"Some text")),e):a.a.createElement("div",{key:t,style:Object(o.a)({},l,{border:0})})}))})}},1208:function(e,t){e.exports="/**\n * cn - 弹出位置\n *    -- 内置了十二个弹出的位置\n * en - Position\n *    -- Twelve pop-up positions are built in.\n */\nimport React from 'react'\nimport { Popover } from 'shineout'\n\nconst positions = [\n  [null, 'bottom-left', 'bottom', 'bottom-right', null],\n  ['right-top', null, null, null, 'left-top'],\n  ['right', null, null, null, 'left'],\n  ['right-bottom', null, null, null, 'left-bottom'],\n  [null, 'top-left', 'top', 'top-right', null],\n]\n\nconst style = {\n  width: 100,\n  textAlign: 'center',\n  lineHeight: '30px',\n  margin: 4,\n  display: 'inline-block',\n  border: 'solid 1px #eee',\n  cursor: 'pointer',\n}\n\nexport default function() {\n  return positions.map((row, i) => (\n    <div key={i}>\n      {row.map((p, j) =>\n        p ? (\n          <div key={j} style={style}>\n            <Popover trigger=\"click\" position={p}>\n              <div style={{ width: 240, padding: 30 }}>Some text</div>\n            </Popover>\n            {p}\n          </div>\n        ) : (\n          <div key={j} style={{ ...style, border: 0 }} />\n        )\n      )}\n    </div>\n  ))\n}\n"},1209:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(49),i=n(462),c=n(57);t.default=function(){return r.a.createElement(a.a,null,r.a.createElement(i.a,{trigger:"click",style:{marginRight:12}},r.a.createElement(c.a,{style:{width:300,border:0,background:"transparent"}},r.a.createElement(c.a.Header,null,"Header"),r.a.createElement(c.a.Body,{style:{height:80}},"Body"))),"Click me")}},1210:function(e,t){e.exports="/**\n * cn - 点击触发\n *    -- 默认是移入组件触发，设置 trigger 为 'click'，可以改为点击触发\n * en - Trigger\n *    -- Set the trigger property to change the trigger event to 'click'.\n */\nimport React from 'react'\nimport { Button, Popover, Card } from 'shineout'\n\nexport default function() {\n  return (\n    <Button>\n      <Popover trigger=\"click\" style={{ marginRight: 12 }}>\n        <Card style={{ width: 300, border: 0, background: 'transparent' }}>\n          <Card.Header>Header</Card.Header>\n          <Card.Body style={{ height: 80 }}>Body</Card.Body>\n        </Card>\n      </Popover>\n      Click me\n    </Button>\n  )\n}\n"},1211:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(49),i=n(462),c=n(510);t.default=function(){return r.a.createElement(a.a,null,r.a.createElement(i.a,{trigger:"click"},function(e){return r.a.createElement("div",{style:{padding:20}},r.a.createElement("div",null,"Are you sure you want to close this panel?"),r.a.createElement("div",{style:{marginTop:30,textAlign:"right"}},r.a.createElement(a.a,{size:"small",onClick:function(){e(),c.a.success("Popover panel closed.")}},"close")))}),"Click me")}},1212:function(e,t){e.exports="/**\n * cn - 关闭事件\n *    -- content 属性可以为一个函数，会传递 close 函数，用来在弹出面板内部处理关闭事件\n * en - Close\n *    -- Set the content property to a function, you can handle the close event inside the popup panel.\n */\nimport React from 'react'\nimport { Button, Popover, Message } from 'shineout'\n\nexport default function() {\n  return (\n    <Button>\n      <Popover trigger=\"click\">\n        {close => (\n          <div style={{ padding: 20 }}>\n            <div>Are you sure you want to close this panel?</div>\n            <div style={{ marginTop: 30, textAlign: 'right' }}>\n              <Button\n                size=\"small\"\n                onClick={() => {\n                  close()\n                  Message.success('Popover panel closed.')\n                }}\n              >\n                close\n              </Button>\n            </div>\n          </div>\n        )}\n      </Popover>\n      Click me\n    </Button>\n  )\n}\n"},1213:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(462),i=["success","info","warning","danger"],c={width:100,textAlign:"center",lineHeight:"30px",margin:4,display:"inline-block",border:"solid 1px #eee"};t.default=function(){return i.map(function(e,t){return r.a.createElement("div",{style:c,key:t},r.a.createElement(a.a,{type:e,style:{width:200,padding:20}},"Some text"),e)})}},1214:function(e,t){e.exports="/**\n * cn - 样式\n *    -- 内置四种样式\n * en - Type\n *    -- Four styles are built in.\n */\nimport React from 'react'\nimport { Popover } from 'shineout'\n\nconst types = ['success', 'info', 'warning', 'danger']\n\nconst style = {\n  width: 100,\n  textAlign: 'center',\n  lineHeight: '30px',\n  margin: 4,\n  display: 'inline-block',\n  border: 'solid 1px #eee',\n}\n\nexport default function() {\n  return types.map((t, i) => (\n    <div style={style} key={i}>\n      <Popover type={t} style={{ width: 200, padding: 20 }}>\n        Some text\n      </Popover>\n      {t}\n    </div>\n  ))\n}\n"},1215:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(49),i=n(462);t.default=function(){return r.a.createElement(a.a,null,r.a.createElement(i.a,{background:"#555",border:"gold",style:{width:200,padding:20,color:"gold"}},"Some text"),"Hover")}},1216:function(e,t){e.exports="/**\n * cn -\n *    -- 如果内置样式不满足需求，可以通过 background 和 border 自定义样式\n * en -\n *    -- Customize the style with background and border.\n */\nimport React from 'react'\nimport { Button, Popover } from 'shineout'\n\nexport default function() {\n  return (\n    <Button>\n      <Popover background=\"#555\" border=\"gold\" style={{ width: 200, padding: 20, color: 'gold' }}>\n        Some text\n      </Popover>\n      Hover\n    </Button>\n  )\n}\n"},1217:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(462),i=n(49);t.default=function(){var e=r.a.createElement("div",{style:{width:200,padding:20}},"Some text");return r.a.createElement(a.a,{content:e},r.a.createElement(i.a,null,"Hover"))}},1218:function(e,t){e.exports="/**\n * cn - 旧API\n *    -- 旧接口使用 Popover 包在组件外使用，通过 content 传递内容，已不推荐\n * en - Old API\n *    -- Old API, is out of date.\n */\nimport React from 'react'\nimport { Button, Popover } from 'shineout'\n\nexport default function() {\n  const content = <div style={{ width: 200, padding: 20 }}>Some text</div>\n  return (\n    <Popover content={content}>\n      <Button>Hover</Button>\n    </Popover>\n  )\n}\n"},1219:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(49),i=n(462);t.default=function(){return r.a.createElement(a.a,null,r.a.createElement(i.a,{onOpen:function(){return console.log("popover open")},onClose:function(){return console.log("popover close")},trigger:"click",style:{width:200,padding:20}},"Some text"),"Click me.")}},1220:function(e,t){e.exports="/**\n * cn - 事件\n *    -- 提供了onOpen 和 onClose 事件\n * en - Events\n *    -- provider onOpen and onClose event\n */\nimport React from 'react'\nimport { Button, Popover } from 'shineout'\n\nexport default function() {\n  const open = () => console.log('popover open')\n  const close = () => console.log('popover close')\n  return (\n    <Button>\n      <Popover onOpen={open} onClose={close} trigger=\"click\" style={{ width: 200, padding: 20 }}>\n        Some text\n      </Popover>\n      Click me.\n    </Button>\n  )\n}\n"},468:function(e,t,n){"use strict";var d=n(22),p=n(0),m=n.n(p),f=n(476),h=n(66),v=n(15);t.a=function(u){return function(e){var t=Object(p.useState)(""),n=Object(d.a)(t,2),o=n[0],r=n[1],a=Object(p.useState)([]),i=Object(d.a)(a,1)[0],c=e.location.hash,l=Object(p.useCallback)(function(e){e.forEach(function(e){i.push(e)})},[]),s=Object(p.useCallback)(function(){if(c){var e=document.querySelector(c);e&&setTimeout(function(){e.scrollIntoView()},50)}},[c]);Object(p.useEffect)(function(){s();var e=function(){var n=document.documentElement.scrollTop,e=i.filter(function(e){return 3===e.level&&e.children[0]});if(0!==e.length){var o=e[0].id;e.forEach(function(e){var t=document.querySelector("#".concat(e.id));t&&t.offsetTop<=n&&(o=e.id)}),r(o)}};return document.addEventListener("scroll",e),e(),function(){document.removeEventListener("scroll",e)}},[]);return m.a.createElement("div",{className:Object(v.f)("_")},m.a.createElement(u,{onHeadingSetted:l}),!e.noNav&&m.a.createElement(f.a,{className:Object(v.f)("sticky"),top:50},m.a.createElement("div",{className:Object(v.f)("nav")},i.map(function(e,t){var n=e.children.filter(function(e){return"string"==typeof e});return m.a.createElement("a",{key:t,className:Object(v.f)("level-".concat(e.level),o===e.id&&"active"),onClick:function(e){if(0===h.a.location.search.indexOf("?example="))h.a.push("".concat(h.a.location.pathname,"?example=").concat(e.replace("heading-","")));else{var t=document.getElementById(e);t&&t.scrollIntoView()}}.bind(null,e.id)},n)}))))}}},469:function(e,t,n){"use strict";var P=n(0),S=n.n(P),u=n(23),N=n(22),o=n(479),d=n.n(o),p=n(77),m=n(32),T=n(15),f=n(33),r=n(13),i=n.n(r),a=n(480),c=n.n(a),B=(n(481),function(e){var t=e.language,n=void 0===t?"lang-jsx":t,o=e.onHighLight,r=e.value,a=Object(P.useRef)(null);return Object(P.useEffect)(function(){var e=a.current;c.a.highlightElement(e,!1,function(){o&&o(e.offsetHeight)})},[]),S.a.createElement("pre",{ref:a,className:i()(n||"lang-jsx",Object(T.a)("pre"))},S.a.createElement("code",null,r))}),R=n(137),l=n(112),s=n(4),h=n(5),v=n(7),b=n(3),g=n(6),y=n(20),O=n(470),H=function(e){function n(e){var t;return Object(s.a)(this,n),(t=Object(v.a)(this,Object(b.a)(n).call(this,e))).state={ready:!1},t.placeholderRef=function(e){t.placeholder=e},t}return Object(g.a)(n,e),Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.lazyId=Object(O.a)({element:this.placeholder,render:function(){return e.setState({ready:!0})}})}},{key:"componentWillUnmount",value:function(){Object(O.b)(this.lazyId)}},{key:"render",value:function(){var e=this.state.ready,t=this.props,n=t.children,o=t.placeholder;return e?n:S.a.createElement("span",{ref:this.placeholderRef},o)}}]),n}(y.b),A=n(135),I=n(66),z=S.a.createElement("div",{className:Object(T.a)("placeholder")},S.a.createElement(l.a,null));function j(e){var t=e.component,n=e.id,o=e.name,r=e.rawText,a=e.title,i=Object(P.useRef)(null),c=Object(P.useState)(!1),l=Object(N.a)(c,2),s=l[0],u=l[1],d=Object(P.useState)(),p=Object(N.a)(d,2),m=p[0],f=p[1],h=Object(P.useState)(),v=Object(N.a)(h,1)[0],b=function e(t,n,o){i.current.style.height="".concat(t*(n-1),"px"),1<n&&setTimeout(function(){e(t,n-1,o)},16),o&&(document.documentElement.scrollTop-=t)};Object(P.useEffect)(function(){if(i.current)if(s)i.current.style.height="".concat(m,"px");else{var e=m%15;0<e&&b(e,1,v),b((m-e)/15,15,v)}},[s]);var g=function(e){u(!s),v=e},y=function(e){return S.a.createElement("a",{href:"javascript:;",className:Object(T.a)("toggle"),onClick:g.bind(null,e)},S.a.createElement(A.a,{name:s?"code-close":"code"}))},O=r.replace(/(^|\n|\r)\s*\/\*[\s\S]*?\*\/\s*(?:\r|\n|$)/,"").trim(),j=I.a.location.search,E="?example=";if(0===j.indexOf(E)&&(j=j.replace(E,""),o.indexOf(j)<0))return null;var x=a.split("\n"),k=Object(R.a)(x),w=k[0],C=k.slice(1);return w&&(w=w.trim()),S.a.createElement(P.Fragment,null,w&&S.a.createElement("h3",{key:"0",id:n},w),S.a.createElement(H,{placeholder:z},S.a.createElement("div",{className:Object(T.a)("_",s&&"showcode")},S.a.createElement("div",{className:Object(T.a)("body")},Object(P.createElement)(t)),0<a.length&&S.a.createElement("div",{className:Object(T.a)("desc")},C.map(function(e,t){return S.a.createElement("div",{key:t,dangerouslySetInnerHTML:{__html:e}})}),y(!1)),S.a.createElement("div",{ref:i,className:Object(T.a)("code")},S.a.createElement(B,{onHighLight:function(e){f(e)},onClose:g,value:O}),y(!0)))))}j.defaultProps={rawText:""};var E=function(e){var t=e.children,n=Object(P.useState)(!1),o=Object(N.a)(n,2),r=o[0],a=o[1],i=t.map(function(e){return e.replace(/"fn#fn/g,"").replace(/fn#fn"/g,"").replace(/\\n/g,"\n")}),c=r?"pre":"div";return S.a.createElement("div",{onClick:function(){a(!r)},className:Object(T.e)("console")},S.a.createElement(c,null,i))};E.defaultProps={children:[]};var x=E;function k(e){var t=e.children,n=Object(u.a)(t[1].props.children);try{n.sort(function(e,t){return e.props.children[0].props.children[0].localeCompare(t.props.children[0].props.children[0])})}catch(e){console.log("sort fail...")}return S.a.createElement("div",{style:{overflow:"auto"}},S.a.createElement("table",{className:"doc-api-table"},t[0],S.a.cloneElement(t[1],{children:n})))}k.defaultProps={};var w=k,C=/^<code name="([\w|-]+)" /,M=/^<example name="([\w|-]+)"/;function D(e){var t=e.onHeadingSetted,a=e.codes,i=e.examples,n=e.source,o=Object(P.useState)([]),r=Object(N.a)(o,1)[0],c=Object(P.useState)({}),l=Object(N.a)(c,1)[0];Object(P.useEffect)(function(){t&&t(r)},[]);var s=function(e){r.push(e)};return r=[],S.a.createElement(d.a,{className:Object(T.e)("_"),source:n,renderers:{code:B,heading:function(e){var t,n,o=e.level,r=e.children,a="".concat(o,"-").concat(r[0]),i="h".concat(o);if("object"==typeof r[0])return S.a.createElement(i,null,r);if(!l[a]){var c="heading-".concat((t=o,n=r[0],4===t?Object(m.b)():"".concat(t,"-").concat((n||"").replace(/[\W|-]/g,"-"))));2!==o&&3!==o||s({id:c,level:o,children:r}),l[a]=S.a.createElement(i,{id:c},r)}return l[a]},html:function(e){if("<example />"===e.value)return function(){if(l.examples)return l.examples;if(!i)return S.a.createElement("div",null);var e=Object(f.b)("示例","Example"),t="heading-example-h";return s({id:t,level:2,children:[e]}),l.examples=[S.a.createElement("h2",{key:"h",id:t},e)].concat(Object(u.a)(i.map(function(e,t){if(/\d+-/.test(e.name)){var n="heading-".concat(e.name),o=e.title.split("\n"),r=Object(N.a)(o,1)[0];return s({id:n,level:3,children:[r]}),S.a.createElement(j,Object.assign({key:t,id:n},e,{lazy:2<t}))}}))),l.examples}();var t=e.value.match(M);if(t)return function(t){var e="example-".concat(t);if(!l[e]){var n=(i||[]).find(function(e){return e.name===t});l[e]=n?S.a.createElement(j,n):null}return l[e]}(t[1],e.value.indexOf("noExpand"));if("<br>"===e.value||"<br />"===e.value)return S.a.createElement("br",null);var n,o,r=e.value.match(C);return r?(n=r[1],(o=a[n])?[S.a.createElement(B,{key:"cb",value:o.text})].concat(Object(u.a)(o.log.map(function(e,t){return S.a.createElement(x,{key:t},e)}))):(console.error("Code ".concat(n," not existed")),null)):null},table:w,link:function(e){var t=0===e.href.indexOf("http")?"_blank":void 0;return t?S.a.createElement("a",{href:e.href,target:t},e.children):S.a.createElement(p.a,{to:e.href,target:t},e.children)}}})}D.defaultProps={children:null,examples:null,onHeadingSetted:void 0};var _=n(136),q=n(468);n.d(t,"a",function(){return V});var L,F=((L=function(e){var t=Object(P.useState)(e.source),n=Object(N.a)(t,2),o=n[0],r=n[1];return Object(P.useEffect)(function(){e.loader&&e.loader().then(function(e){r(e.default)})},[]),o?S.a.createElement(D,Object.assign({},e,{source:o})):S.a.createElement(_.a,{style:{minHeight:200}})}).defaultProps={loader:void 0,source:void 0},Object(P.memo)(L));t.b=F;function V(t,n){return Object(q.a)(function(e){return S.a.createElement(F,Object.assign({},e,{noNav:n,loader:t}))})}},470:function(e,t,n){"use strict";n.d(t,"a",function(){return u}),n.d(t,"b",function(){return d});var o=n(472),r=n(32),a=n(35),i={},c=null,l=!1,s=a.b.height;function u(e){var t=e.element.getBoundingClientRect();if(t.bottom<0||t.top>s){var n=Object(r.b)();return i[n]=e,n}return e.render(),null}function d(e){e&&delete i[e]}document.addEventListener("scroll",function(){c&&clearTimeout(c),c=setTimeout(function(){l||(l=!0,Object.keys(i).forEach(function(e){var t=i[e],n=t.element,o=t.render,r=n.getBoundingClientRect();r.bottom<0||r.top>s||(delete i[e],o())}),l=!1),c=null},80)},o.a)},487:function(e,t,n){"use strict";var o=n(17),r=n(4),a=n(5),i=n(7),c=n(3),l=n(6),s=n(1),u=n(0),d=n.n(u),p=n(20),m=n(53),f=n(19),h=n(2),v=n(58),b=function(e){function n(e){var t;return Object(r.a)(this,n),(t=Object(i.a)(this,Object(c.a)(n).call(this,e))).state={dismiss:0},t.bindRef=t.bindRef.bind(Object(s.a)(Object(s.a)(t))),t.dismiss=t.dismiss.bind(Object(s.a)(Object(s.a)(t))),t.handleClose=t.handleClose.bind(Object(s.a)(Object(s.a)(t))),t.renderClose=t.renderClose.bind(Object(s.a)(Object(s.a)(t))),t}return Object(l.a)(n,e),Object(a.a)(n,[{key:"componentDidUpdate",value:function(e){this.props.dismiss!==e.dismiss&&this.props.dismiss&&this.handleClose()}},{key:"bindRef",value:function(e){this.element=e}},{key:"dismiss",value:function(){var e=this.props.onClose;this.setState({dismiss:2}),"function"==typeof e&&e()}},{key:"handleClose",value:function(){var e=this;if(!(0<this.state.dismiss)){var t=this.props.duration;0<t?this.setState({dismiss:1},function(){setTimeout(e.dismiss,t)}):this.dismiss()}}},{key:"renderIcon",value:function(){var e=this.props.icon,t=this.props,n=t.type,o=t.iconSize;if("boolean"==typeof e&&e&&(e=v.a[Object(m.a)(n)]),!e)return null;var r={width:o,height:o,marginRight:o/2};return d.a.createElement("div",{className:Object(h.a)("icon"),style:r},e)}},{key:"renderClose",value:function(){var e=this.props.closeItem;return d.a.isValidElement(e)?d.a.cloneElement(e,{onClick:this.handleClose}):d.a.createElement("a",{href:"javascript:;",className:Object(h.a)("close"),onClick:this.handleClose},e||v.a.Close)}},{key:"render",value:function(){var e=this.state.dismiss;if(2===e)return null;var t=this.props,n=t.children,o=t.className,r=t.type,a=t.onClose,i=this.renderIcon(),c=this.props.style,l=Object(h.a)("_",r,1===e&&"dismissed",a&&"with-close",i&&"with-icon");return o&&(l+=" ".concat(o)),d.a.createElement("div",{ref:this.bindRef,className:l,style:c},a&&this.renderClose(),i,d.a.createElement("div",{className:Object(h.a)("content")},n))}}]),n}(p.b);b.defaultProps=Object(o.a)({},f.a,{duration:216,iconSize:14,type:"warning"}),b.displayName="ShineoutAlert",t.a=b},510:function(e,t,n){"use strict";var o=n(0),l=n.n(o),r=n(39),a=n.n(r),s=n(2),i=n(4),c=n(5),u=n(7),d=n(3),p=n(6),m=n(45),f=n(20),h=n(487),v=n(32),b=function(e){function n(e){var t;return Object(i.a)(this,n),(t=Object(u.a)(this,Object(d.a)(n).call(this,e))).state={messages:[]},t}return Object(p.a)(n,e),Object(c.a)(n,[{key:"addMessage",value:function(t){var e=this,n=Object(v.b)();this.setState(Object(m.a)(function(e){e.messages.push(Object.assign({id:n},t))})),0<t.duration&&setTimeout(function(){e.setState(Object(m.a)(function(e){e.messages.forEach(function(e){e.id===n&&(e.dismiss=!0)})}))},1e3*t.duration)}},{key:"removeMessage",value:function(t){var n,e=this.state.messages.filter(function(e){return e.id!==t||(e.onClose&&(n=e.onClose),!1)});0===e.length?this.props.onDestory():this.setState({messages:e}),n&&n()}},{key:"closeEvent",value:function(e,t){if(0===t)return this.removeMessage.bind(this,e)}},{key:"render",value:function(){var c=this;return[this.state.messages.map(function(e){var t=e.id,n=e.type,o=e.content,r=e.dismiss,a=e.title,i=e.className;return l.a.createElement("div",{key:t,className:"".concat(Object(s.q)("item")," ").concat(i)},l.a.createElement(h.a,{className:Object(s.q)("msg"),dismiss:r,onClose:c.removeMessage.bind(c,t),icon:!0,iconSize:a?20:14,type:n},a&&l.a.createElement("h3",null,a),o))})]}}]),n}(f.b);b.displayName="ShineoutMessage";var g=b,y={},O={};function j(e){y[e]&&(a.a.unmountComponentAtNode(y[e]),document.body.removeChild(y[e]),delete y[e]),O[e]&&delete O[e]}function E(r){return new Promise(function(t){var e,n,o=O[r];o?t(o):a.a.render(l.a.createElement(g,{ref:function(e){O[r]=e,t(e)},onDestory:j.bind(null,r)}),(e=r,(n=document.createElement("div")).className=Object(s.q)("_",e),document.body.appendChild(n),y[e]=n))})}var x=function(s){return function(t){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:3,e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},o=e.onClose,r=e.position,a=void 0===r?"top":r,i=e.title,c=e.className,l=void 0===c?"":c;E(a).then(function(e){e.addMessage({content:t,duration:n,type:s,onClose:o,title:i,className:l})})}};t.a={show:x("default"),success:x("success"),info:x("info"),warn:x("warning"),warning:x("warning"),danger:x("danger"),error:x("danger"),close:function(e){e?j(e):["top","middle","top-left","top-right","bottom-left","bottom-right"].forEach(function(e){j(e)})}}}}]);