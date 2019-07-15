(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[33],{1213:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(192),l=n(198),i=n(11),o=n(1214),s=n.n(o),u=n(1215),d=n.n(u),m=Object(i.b)(s.a,d.a),f=[{name:"1-base",title:Object(i.b)("基本用法 \n 基础的进度条","Base \n Basic progress bar"),component:n(1216).default,rawText:n(1217)},{name:"2-type",title:Object(i.b)("样式 \n 内置了四种样式，通过 type 来调用","Type \n There are 4 built-in style."),component:n(1218).default,rawText:n(1219)},{name:"3-color",title:Object(i.b)(" \n 通过 color 使用自定义颜色","Color \n Use custom colors."),component:n(1220).default,rawText:n(1221)},{name:"4-circle",title:Object(i.b)("圆形 \n 设置 shape 为 'circle'，显示为环形进度条","Circle \n Set the shape property to circle to display circular progress bar."),component:n(1222).default,rawText:n(1223)},{name:"5-size",title:Object(i.b)("大小 \n 通过 size 或 style 来控制大小 \n 通过 strokeWidth 属性来控制线框宽度","Size \n Set size(circle) or style(line) property to change the size."),component:n(1224).default,rawText:n(1225)},{name:"6-animation",title:Object(i.b)("动态示例 \n value 变更时动画效果演示","Animation \n The animation for changing value."),component:n(1226).default,rawText:n(1227)}];t.default=Object(c.a)(function(e){return r.a.createElement(l.b,Object.assign({},e,{codes:void 0,source:m,examples:f}))})},1214:function(e,t){e.exports="# Progress *进度条*\n\n<example />\n\n## API \n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| background | string | '#e9ecef' | 背景色 |\n| className | string | - | 扩展className |\n| children | string \\| ReactElement | - | 附加内容 |\n| color | string | primary | 前景色 |\n| shape | string | 'line' | 样式，可选值为 \\['line', 'circle'] |\n| size | number | 100 | 进度条大小，仅对 circle 有效 |\n| strokeWidth | number | 8 | 线框宽度 |\n| style | object | 无 | 最外层扩展样式 |\n| type | string | 无 | 内置配色，可选值为，\\['success', 'info', 'warning', 'danger'] |\n| value | number | 0 | 百分比值，0 <= value <= 100 |"},1215:function(e,t){e.exports="# Progress\n\n<example />\n\n## API \n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| background | string | '#e9ecef' | Background color |\n| className | string | - | Extend className |\n| children | string \\| ReactElement | - | Content |\n| color | string | primary | Foreground color |\n| shape | string | 'line' | Options:  \\['line', 'circle'] |\n| size | number | 100 | The width and height of 'circle' shape. |\n| strokeWidth | number | 8 | The width of the stroke |\n| style | object | - | Container element style |\n| type | string | - | Built-in color, options: \\['success', 'info', 'warning', 'danger'] |\n| value | number | 0 | Percentage, 0 <= value <= 100 |"},1216:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(266);t.default=function(){return r.a.createElement("div",{style:{width:400}},r.a.createElement(c.a,{value:50}),r.a.createElement("br",null),r.a.createElement(c.a,{value:50},"50%"))}},1217:function(e,t){e.exports="/**\n * cn - 基本用法\n *    -- 基础的进度条\n * en - Base\n *    -- Basic progress bar\n */\nimport React from 'react'\nimport { Progress } from 'shineout'\n\nexport default function() {\n  return (\n    <div style={{ width: 400 }}>\n      <Progress value={50} />\n      <br />\n      <Progress value={50}>50%</Progress>\n    </div>\n  )\n}\n"},1218:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(266);t.default=function(){return r.a.createElement("div",{style:{width:400}},r.a.createElement(c.a,{value:100,type:"success"}),r.a.createElement("br",null),r.a.createElement(c.a,{value:90,type:"info"}),r.a.createElement("br",null),r.a.createElement(c.a,{value:80,type:"warning"}),r.a.createElement("br",null),r.a.createElement(c.a,{value:70,type:"danger"}))}},1219:function(e,t){e.exports='/**\n * cn - 样式\n *    -- 内置了四种样式，通过 type 来调用\n * en - Type\n *    -- There are 4 built-in style.\n */\nimport React from \'react\'\nimport { Progress } from \'shineout\'\n\nexport default function() {\n  return (\n    <div style={{ width: 400 }}>\n      <Progress value={100} type="success" />\n      <br />\n      <Progress value={90} type="info" />\n      <br />\n      <Progress value={80} type="warning" />\n      <br />\n      <Progress value={70} type="danger" />\n    </div>\n  )\n}\n'},1220:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(266);t.default=function(){return r.a.createElement("div",{style:{width:400}},r.a.createElement(c.a,{value:60,color:"#531dab"}),r.a.createElement("br",null),r.a.createElement(c.a,{value:50,color:"linear-gradient(45deg, #ffadd2 25%, #eb2f96 25%, #eb2f96 50%, #ffadd2 50%, #ffadd2 75%, #eb2f96 75%, #eb2f96)"}))}},1221:function(e,t){e.exports="/**\n * cn -\n *    -- 通过 color 使用自定义颜色\n * en - Color\n *    -- Use custom colors.\n */\nimport React from 'react'\nimport { Progress } from 'shineout'\n\nexport default function() {\n  return (\n    <div style={{ width: 400 }}>\n      <Progress value={60} color=\"#531dab\" />\n      <br />\n      <Progress\n        value={50}\n        color=\"linear-gradient(45deg, #ffadd2 25%, #eb2f96 25%, #eb2f96 50%, #ffadd2 50%, #ffadd2 75%, #eb2f96 75%, #eb2f96)\"\n      />\n    </div>\n  )\n}\n"},1222:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(266);t.default=function(){return r.a.createElement("div",null,r.a.createElement(c.a,{shape:"circle",style:{marginRight:20},value:30}),r.a.createElement(c.a,{shape:"circle",style:{marginRight:20},value:70},"70%"),r.a.createElement(c.a,{shape:"circle",type:"success",style:{marginRight:20},value:100},"Success"),r.a.createElement(c.a,{shape:"circle",strokeLinecap:"butt",color:"#531dab",value:70}))}},1223:function(e,t){e.exports='/**\n * cn - 圆形\n *    -- 设置 shape 为 \'circle\'，显示为环形进度条\n * en - Circle\n *    -- Set the shape property to circle to display circular progress bar.\n */\nimport React from \'react\'\nimport { Progress } from \'shineout\'\n\nexport default function() {\n  return (\n    <div>\n      <Progress shape="circle" style={{ marginRight: 20 }} value={30} />\n\n      <Progress shape="circle" style={{ marginRight: 20 }} value={70}>\n        70%\n      </Progress>\n\n      <Progress shape="circle" type="success" style={{ marginRight: 20 }} value={100}>\n        Success\n      </Progress>\n\n      <Progress shape="circle" strokeLinecap="butt" color="#531dab" value={70} />\n    </div>\n  )\n}\n'},1224:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(266);t.default=function(){return r.a.createElement("div",null,r.a.createElement(c.a,{style:{width:120},strokeWidth:3,value:30}),r.a.createElement("br",null),r.a.createElement(c.a,{shape:"circle",size:50,strokeWidth:6,style:{marginRight:20},value:70}),r.a.createElement(c.a,{shape:"circle",type:"warning",style:{marginRight:20,width:70,height:70},value:70},"70%"),r.a.createElement(c.a,{shape:"circle",type:"success",value:100},"Success"))}},1225:function(e,t){e.exports='/**\n * cn - 大小\n *    -- 通过 size 或 style 来控制大小\n *    -- 通过 strokeWidth 属性来控制线框宽度\n * en - Size\n *    -- Set size(circle) or style(line) property to change the size.\n */\nimport React from \'react\'\nimport { Progress } from \'shineout\'\n\nexport default function() {\n  return (\n    <div>\n      <Progress style={{ width: 120 }} strokeWidth={3} value={30} />\n\n      <br />\n\n      <Progress shape="circle" size={50} strokeWidth={6} style={{ marginRight: 20 }} value={70} />\n\n      <Progress shape="circle" type="warning" style={{ marginRight: 20, width: 70, height: 70 }} value={70}>\n        70%\n      </Progress>\n\n      <Progress shape="circle" type="success" value={100}>\n        Success\n      </Progress>\n    </div>\n  )\n}\n'},1226:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return m});var a=n(7),r=n(8),c=n(10),l=n(2),i=n(9),o=n(0),s=n.n(o),u=n(266),d=n(62),m=function(e){function n(e){var t;return Object(a.a)(this,n),(t=Object(c.a)(this,Object(l.a)(n).call(this,e))).handleClick=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:t.state.value;100<=(e+=12*Math.random())?(e=100,t.setState({value:e})):t.setState({value:e},function(){setTimeout(t.handleClick,320)})},t.state={value:0},t}return Object(i.a)(n,e),Object(r.a)(n,[{key:"render",value:function(){var e=this.state.value;return s.a.createElement("div",null,s.a.createElement(u.a,{style:{width:400},value:e},s.a.createElement("div",{style:{width:50}},e.toFixed(0))),s.a.createElement("br",null),s.a.createElement(u.a,{shape:"circle",type:"success",value:e},e.toFixed(0),"%"),s.a.createElement(d.a,{style:{marginLeft:80},onClick:this.handleClick.bind(this,0)},"Start"))}}]),n}(o.Component)},1227:function(e,t){e.exports="/**\n * cn - 动态示例\n *    -- value 变更时动画效果演示\n * en - Animation\n *    -- The animation for changing value.\n */\nimport React, { Component } from 'react'\nimport { Button, Progress } from 'shineout'\n\nexport default class extends Component {\n  constructor(props) {\n    super(props)\n    this.state = { value: 0 }\n  }\n\n  handleClick = (value = this.state.value) => {\n    value += Math.random() * 12\n    if (value >= 100) {\n      value = 100\n      this.setState({ value })\n    } else {\n      this.setState({ value }, () => {\n        setTimeout(this.handleClick, 320)\n      })\n    }\n  }\n\n  render() {\n    const { value } = this.state\n\n    return (\n      <div>\n        <Progress style={{ width: 400 }} value={value}>\n          <div style={{ width: 50 }}>{value.toFixed(0)}</div>\n        </Progress>\n\n        <br />\n\n        <Progress shape=\"circle\" type=\"success\" value={value}>\n          {value.toFixed(0)}%\n        </Progress>\n\n        <Button style={{ marginLeft: 80 }} onClick={this.handleClick.bind(this, 0)}>\n          Start\n        </Button>\n      </div>\n    )\n  }\n}\n"},192:function(e,t,n){"use strict";var d=n(20),m=n(0),f=n.n(m),h=n(230),p=n(36),v=n(14);t.a=function(u){return function(e){var t=Object(m.useState)(""),n=Object(d.a)(t,2),a=n[0],r=n[1],c=Object(m.useState)([]),l=Object(d.a)(c,1)[0],i=e.location.hash,o=Object(m.useCallback)(function(e){e.forEach(function(e){l.push(e)})},[]),s=Object(m.useCallback)(function(){if(i){var e=document.querySelector(i);e&&setTimeout(function(){e.scrollIntoView()},50)}},[i]);Object(m.useEffect)(function(){s();var e=function(){var n=document.documentElement.scrollTop,e=l.filter(function(e){return 3===e.level&&e.children[0]});if(0!==e.length){var a=e[0].id;e.forEach(function(e){var t=document.querySelector("#".concat(e.id));t&&t.offsetTop<=n&&(a=e.id)}),r(a)}};return document.addEventListener("scroll",e),e(),function(){document.removeEventListener("scroll",e)}},[]);return f.a.createElement("div",{className:Object(v.f)("_")},f.a.createElement(u,{onHeadingSetted:o}),!e.noNav&&f.a.createElement(h.a,{className:Object(v.f)("sticky"),top:50},f.a.createElement("div",{className:Object(v.f)("nav")},l.map(function(e,t){var n=e.children.filter(function(e){return"string"==typeof e});return f.a.createElement("a",{key:t,className:Object(v.f)("level-".concat(e.level),a===e.id&&"active"),onClick:function(e){if(0===p.a.location.search.indexOf("?example="))p.a.push("".concat(p.a.location.pathname,"?example=").concat(e.replace("heading-","")));else{var t=document.getElementById(e);t&&t.scrollIntoView()}}.bind(null,e.id)},n)}))))}}},198:function(e,t,n){"use strict";var S=n(0),N=n.n(S),u=n(30),C=n(20),a=n(233),d=n.n(a),m=n(31),f=n(50),T=n(14),h=n(11),r=n(12),l=n.n(r),c=n(234),i=n.n(c),R=(n(235),function(e){var t=e.language,n=void 0===t?"lang-jsx":t,a=e.onHighLight,r=e.value,c=Object(S.useRef)(null);return Object(S.useEffect)(function(){var e=c.current;i.a.highlightElement(e,!1,function(){a&&a(e.offsetHeight)})},[]),N.a.createElement("pre",{ref:c,className:l()(n||"lang-jsx",Object(T.a)("pre"))},N.a.createElement("code",null,r))}),z=n(217),o=n(45),s=n(7),p=n(8),v=n(10),b=n(2),g=n(9),y=n(34),E=n(205),W=function(e){function n(e){var t;return Object(s.a)(this,n),(t=Object(v.a)(this,Object(b.a)(n).call(this,e))).state={ready:!1},t.placeholderRef=function(e){t.placeholder=e},t}return Object(g.a)(n,e),Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.lazyId=Object(E.a)({element:this.placeholder,render:function(){return e.setState({ready:!0})}})}},{key:"componentWillUnmount",value:function(){Object(E.b)(this.lazyId)}},{key:"render",value:function(){var e=this.state.ready,t=this.props,n=t.children,a=t.placeholder;return e?n:N.a.createElement("span",{ref:this.placeholderRef},a)}}]),n}(y.b),B=n(59),L=n(36),I=N.a.createElement("div",{className:Object(T.a)("placeholder")},N.a.createElement(o.a,null));function j(e){var t=e.component,n=e.id,a=e.name,r=e.rawText,c=e.title,l=Object(S.useRef)(null),i=Object(S.useState)(!1),o=Object(C.a)(i,2),s=o[0],u=o[1],d=Object(S.useState)(),m=Object(C.a)(d,2),f=m[0],h=m[1],p=Object(S.useState)(),v=Object(C.a)(p,1)[0],b=function e(t,n,a){l.current.style.height="".concat(t*(n-1),"px"),1<n&&setTimeout(function(){e(t,n-1,a)},16),a&&(document.documentElement.scrollTop-=t)};Object(S.useEffect)(function(){if(l.current)if(s)l.current.style.height="".concat(f,"px");else{var e=f%15;0<e&&b(e,1,v),b((f-e)/15,15,v)}},[s]);var g=function(e){u(!s),v=e},y=function(e){return N.a.createElement("a",{href:"javascript:;",className:Object(T.a)("toggle"),onClick:g.bind(null,e)},N.a.createElement(B.a,{name:s?"code-close":"code"}))},E=r.replace(/(^|\n|\r)\s*\/\*[\s\S]*?\*\/\s*(?:\r|\n|$)/,"").trim(),j=L.a.location.search,O="?example=";if(0===j.indexOf(O)&&(j=j.replace(O,""),a.indexOf(j)<0))return null;var k=c.split("\n"),x=Object(z.a)(k),P=x[0],w=x.slice(1);return P&&(P=P.trim()),N.a.createElement(S.Fragment,null,P&&N.a.createElement("h3",{key:"0",id:n},P),N.a.createElement(W,{placeholder:I},N.a.createElement("div",{className:Object(T.a)("_",s&&"showcode")},N.a.createElement("div",{className:Object(T.a)("body")},Object(S.createElement)(t)),0<c.length&&N.a.createElement("div",{className:Object(T.a)("desc")},w.map(function(e,t){return N.a.createElement("div",{key:t,dangerouslySetInnerHTML:{__html:e}})}),y(!1)),N.a.createElement("div",{ref:l,className:Object(T.a)("code")},N.a.createElement(R,{onHighLight:function(e){h(e)},onClose:g,value:E}),y(!0)))))}j.defaultProps={rawText:""};var O=function(e){var t=e.children,n=Object(S.useState)(!1),a=Object(C.a)(n,2),r=a[0],c=a[1],l=t.map(function(e){return e.replace(/"fn#fn/g,"").replace(/fn#fn"/g,"").replace(/\\n/g,"\n")}),i=r?"pre":"div";return N.a.createElement("div",{onClick:function(){c(!r)},className:Object(T.e)("console")},N.a.createElement(i,null,l))};O.defaultProps={children:[]};var k=O;function x(e){var t=e.children,n=Object(u.a)(t[1].props.children);try{n.sort(function(e,t){return e.props.children[0].props.children[0].localeCompare(t.props.children[0].props.children[0])})}catch(e){console.log("sort fail...")}return N.a.createElement("div",{style:{overflow:"auto"}},N.a.createElement("table",{className:"doc-api-table"},t[0],N.a.cloneElement(t[1],{children:n})))}x.defaultProps={};var P=x,w=/^<code name="([\w|-]+)" /,H=/^<example name="([\w|-]+)"/;function D(e){var t=e.onHeadingSetted,c=e.codes,l=e.examples,n=e.source,a=Object(S.useState)([]),r=Object(C.a)(a,1)[0],i=Object(S.useState)({}),o=Object(C.a)(i,1)[0];Object(S.useEffect)(function(){t&&t(r)},[]);var s=function(e){r.push(e)};return r=[],N.a.createElement(d.a,{className:Object(T.e)("_"),source:n,renderers:{code:R,heading:function(e){var t,n,a=e.level,r=e.children,c="".concat(a,"-").concat(r[0]),l="h".concat(a);if("object"==typeof r[0])return N.a.createElement(l,null,r);if(!o[c]){var i="heading-".concat((t=a,n=r[0],4===t?Object(f.b)():"".concat(t,"-").concat((n||"").replace(/[\W|-]/g,"-"))));2!==a&&3!==a||s({id:i,level:a,children:r}),o[c]=N.a.createElement(l,{id:i},r)}return o[c]},html:function(e){if("<example />"===e.value)return function(){if(o.examples)return o.examples;if(!l)return N.a.createElement("div",null);var e=Object(h.b)("示例","Example"),t="heading-example-h";return s({id:t,level:2,children:[e]}),o.examples=[N.a.createElement("h2",{key:"h",id:t},e)].concat(Object(u.a)(l.map(function(e,t){if(/\d+-/.test(e.name)){var n="heading-".concat(e.name),a=e.title.split("\n"),r=Object(C.a)(a,1)[0];return s({id:n,level:3,children:[r]}),N.a.createElement(j,Object.assign({key:t,id:n},e,{lazy:2<t}))}}))),o.examples}();var t=e.value.match(H);if(t)return function(t){var e="example-".concat(t);if(!o[e]){var n=(l||[]).find(function(e){return e.name===t});o[e]=n?N.a.createElement(j,n):null}return o[e]}(t[1],e.value.indexOf("noExpand"));if("<br>"===e.value||"<br />"===e.value)return N.a.createElement("br",null);var n,a,r=e.value.match(w);return r?(n=r[1],(a=c[n])?[N.a.createElement(R,{key:"cb",value:a.text})].concat(Object(u.a)(a.log.map(function(e,t){return N.a.createElement(k,{key:t},e)}))):(console.error("Code ".concat(n," not existed")),null)):null},table:P,link:function(e){var t=0===e.href.indexOf("http")?"_blank":void 0;return t?N.a.createElement("a",{href:e.href,target:t},e.children):N.a.createElement(m.a,{to:e.href,target:t},e.children)}}})}D.defaultProps={children:null,examples:null,onHeadingSetted:void 0};var F=n(60),M=n(192);n.d(t,"a",function(){return U});var _,A=((_=function(e){var t=Object(S.useState)(e.source),n=Object(C.a)(t,2),a=n[0],r=n[1];return Object(S.useEffect)(function(){e.loader&&e.loader().then(function(e){r(e.default)})},[]),a?N.a.createElement(D,Object.assign({},e,{source:a})):N.a.createElement(F.a,{style:{minHeight:200}})}).defaultProps={loader:void 0,source:void 0},Object(S.memo)(_));t.b=A;function U(t,n){return Object(M.a)(function(e){return N.a.createElement(A,Object.assign({},e,{noNav:n,loader:t}))})}},205:function(e,t,n){"use strict";n.d(t,"a",function(){return u}),n.d(t,"b",function(){return d});var a=n(216),r=n(50),c=n(44),l={},i=null,o=!1,s=c.b.height;function u(e){var t=e.element.getBoundingClientRect();if(t.bottom<0||t.top>s){var n=Object(r.b)();return l[n]=e,n}return e.render(),null}function d(e){e&&delete l[e]}document.addEventListener("scroll",function(){i&&clearTimeout(i),i=setTimeout(function(){o||(o=!0,Object.keys(l).forEach(function(e){var t=l[e],n=t.element,a=t.render,r=n.getBoundingClientRect();r.bottom<0||r.top>s||(delete l[e],a())}),o=!1),i=null},80)},a.a)},266:function(e,t,n){"use strict";var a=n(0),h=n.n(a),r=n(12),p=n.n(r),v=n(5);function c(e){var t=e.children,n=e.strokeWidth,a=e.type,r=e.value,c=e.color,l=e.style,i=e.background,o=p()(Object(v.u)("line",a),e.className),s={background:c,backgroundSize:"1em 1em",width:"".concat(r/100*100,"%"),borderRadius:n/2};return h.a.createElement("div",{className:o,style:l},h.a.createElement("div",{className:Object(v.u)("background"),style:{height:n,background:i,borderRadius:n/2}},h.a.createElement("div",{className:Object(v.u)("front"),style:s})),void 0!==t&&h.a.createElement("div",{className:Object(v.u)("content")},t))}c.defaultProps={strokeWidth:8};var l=c;function i(e){var t=e.children,n=e.strokeWidth,a=e.type,r=e.color,c=e.size,l=e.value,i=e.background,o=e.strokeLinecap,s=p()(Object(v.u)("circle",a),e.className),u=100-Math.ceil(2*n/c*100),d=2*Math.PI*u,m=[d*(l/100),d*(1-l/100)],f=Object.assign({width:c,height:c},e.style);return h.a.createElement("div",{className:s,style:f},h.a.createElement("svg",{viewBox:"0 0 200 200"},h.a.createElement("circle",{className:Object(v.u)("background"),cx:"100",cy:"100",r:u,strokeWidth:2*n,fill:"transparent",style:{stroke:i}}),0<l&&h.a.createElement("circle",{className:Object(v.u)("front"),cx:"100",cy:"100",r:u,fill:"transparent",style:{stroke:r},strokeDasharray:m,strokeLinecap:o,strokeWidth:2*n})),t&&h.a.createElement("div",{className:Object(v.u)("content")},t))}i.defaultProps={strokeLinecap:"round",strokeWidth:8,size:100};var o=i;function s(e){switch(e.shape){case"circle":return h.a.createElement(o,e);default:return h.a.createElement(l,e)}}s.defaultProps={shape:"line"},s.displayName="ShineoutProgress";t.a=s}}]);