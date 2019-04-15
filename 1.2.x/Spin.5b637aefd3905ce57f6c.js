(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[38],{1219:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),r=t(192),l=t(198),i=t(11),o=t(1220),u=t.n(o),s=t(1221),m=t.n(s),d=Object(i.b)(u.a,m.a),f=[{name:"01-default",title:Object(i.b)('default \n name="default"','default \n name="default"'),component:t(1222).default,rawText:t(1223)},{name:"02-chasing-dots",title:Object(i.b)('chasing-dots \n name="chasing-dots"','chasing-dots \n name="chasing-dots"'),component:t(1224).default,rawText:t(1225)},{name:"03-cube-grid",title:Object(i.b)('cube-grid \n name="cube-grid"','cube-grid \n name="cube-grid"'),component:t(1226).default,rawText:t(1227)},{name:"04-double-bounce",title:Object(i.b)('double-bounce \n name="double-bounce"','double-bounce \n name="double-bounce"'),component:t(1228).default,rawText:t(1229)},{name:"05-fading-circle",title:Object(i.b)('fading-circle \n name="fading-circle"','fading-circle \n name="fading-circle"'),component:t(1230).default,rawText:t(1231)},{name:"06-four-dots",title:Object(i.b)('four-dots \n name="four-dots"','four-dots \n name="four-dots"'),component:t(1232).default,rawText:t(1233)},{name:"07-plane",title:Object(i.b)('plane \n name="plane"','plane \n name="plane"'),component:t(1234).default,rawText:t(1235)},{name:"08-pulse",title:Object(i.b)('pulse \n name="pulse"','pulse \n name="pulse"'),component:t(1236).default,rawText:t(1237)},{name:"09-ring",title:Object(i.b)('ring \n name="ring"','ring \n name="ring"'),component:t(1238).default,rawText:t(1239)},{name:"10-scale-circle",title:Object(i.b)('scale-circle \n name="scale-circle"','scale-circle \n name="scale-circle"'),component:t(1240).default,rawText:t(1241)},{name:"11-three-bounce",title:Object(i.b)('three-bounce \n name="three-bounce"','three-bounce \n name="three-bounce"'),component:t(1242).default,rawText:t(1243)},{name:"12-wave",title:Object(i.b)('wave \n name="wave"','wave \n name="wave"'),component:t(1244).default,rawText:t(1245)}];n.default=Object(r.a)(function(e){return c.a.createElement(l.b,Object.assign({},e,{codes:void 0,source:d,examples:f}))})},1220:function(e,n){e.exports="# Spin *加载中*\n\n部分样式来源于[SpinKit](https://github.com/tobiasahlin/SpinKit)\n\n<example />\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| color | string | #6c757d | 颜色 |\n| size | number \\| string | 40 | 尺寸 |\n| name | string | 'fading-circle' | 类型，可选值见示例 |"},1221:function(e,n){e.exports="# Spin\n\nPart of the style comes from [SpinKit](https://github.com/tobiasahlin/SpinKit).\n\n<example />\n\n## API\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| color | string | #6c757d | color |\n| size | number \\| string | 40 | size |\n| name | string | 'fading-circle' | type. See the example for optional values. |"},1222:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),r=t(43);n.default=function(){return c.a.createElement("div",{style:{display:"flex"}},c.a.createElement(r.a,{size:18,name:"default",color:"green"}),c.a.createElement(r.a,{name:"default"}),c.a.createElement(r.a,{size:"54px",name:"default",color:"#dc3545"}))}},1223:function(e,n){e.exports='/**\n* cn - default\n     -- name="default"\n* en - default\n     -- name="default"\n*/\nimport React from \'react\'\nimport { Spin } from \'shineout\'\n\nexport default function() {\n  const style = { display: \'flex\' }\n  return (\n    <div style={style}>\n      <Spin size={18} name="default" color="green" />\n      <Spin name="default" />\n      <Spin size="54px" name="default" color="#dc3545" />\n    </div>\n  )\n}\n'},1224:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),r=t(43);n.default=function(){return c.a.createElement("div",{style:{display:"flex"}},c.a.createElement(r.a,{size:18,name:"chasing-dots",color:"green"}),c.a.createElement(r.a,{name:"chasing-dots"}),c.a.createElement(r.a,{size:"54px",name:"chasing-dots",color:"#dc3545"}))}},1225:function(e,n){e.exports='/**\n* cn - chasing-dots\n     -- name="chasing-dots"\n* en - chasing-dots\n     -- name="chasing-dots"\n*/\nimport React from \'react\'\nimport { Spin } from \'shineout\'\n\nexport default function() {\n  const style = { display: \'flex\' }\n  return (\n    <div style={style}>\n      <Spin size={18} name="chasing-dots" color="green" />\n      <Spin name="chasing-dots" />\n      <Spin size="54px" name="chasing-dots" color="#dc3545" />\n    </div>\n  )\n}\n'},1226:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),r=t(43);n.default=function(){return c.a.createElement("div",{style:{display:"flex"}},c.a.createElement(r.a,{size:18,name:"cube-grid",color:"green"}),c.a.createElement(r.a,{name:"cube-grid"}),c.a.createElement(r.a,{size:"54px",name:"cube-grid",color:"#dc3545"}))}},1227:function(e,n){e.exports='/**\n* cn - cube-grid\n     -- name="cube-grid"\n* en - cube-grid\n     -- name="cube-grid"\n*/\nimport React from \'react\'\nimport { Spin } from \'shineout\'\n\nexport default function() {\n  const style = { display: \'flex\' }\n  return (\n    <div style={style}>\n      <Spin size={18} name="cube-grid" color="green" />\n      <Spin name="cube-grid" />\n      <Spin size="54px" name="cube-grid" color="#dc3545" />\n    </div>\n  )\n}\n'},1228:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),r=t(43);n.default=function(){return c.a.createElement("div",{style:{display:"flex"}},c.a.createElement(r.a,{size:18,name:"double-bounce",color:"green"}),c.a.createElement(r.a,{name:"double-bounce"}),c.a.createElement(r.a,{size:"54px",name:"double-bounce",color:"#dc3545"}))}},1229:function(e,n){e.exports='/**\n* cn - double-bounce\n     -- name="double-bounce"\n* en - double-bounce\n     -- name="double-bounce"\n*/\nimport React from \'react\'\nimport { Spin } from \'shineout\'\n\nexport default function() {\n  const style = { display: \'flex\' }\n  return (\n    <div style={style}>\n      <Spin size={18} name="double-bounce" color="green" />\n      <Spin name="double-bounce" />\n      <Spin size="54px" name="double-bounce" color="#dc3545" />\n    </div>\n  )\n}\n'},1230:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),r=t(43);n.default=function(){return c.a.createElement("div",{style:{display:"flex"}},c.a.createElement(r.a,{size:18,name:"fading-circle",color:"green"}),c.a.createElement(r.a,{name:"fading-circle"}),c.a.createElement(r.a,{size:"54px",name:"fading-circle",color:"#dc3545"}))}},1231:function(e,n){e.exports='/**\n* cn - fading-circle\n     -- name="fading-circle"\n* en - fading-circle\n     -- name="fading-circle"\n*/\nimport React from \'react\'\nimport { Spin } from \'shineout\'\n\nexport default function() {\n  const style = { display: \'flex\' }\n  return (\n    <div style={style}>\n      <Spin size={18} name="fading-circle" color="green" />\n      <Spin name="fading-circle" />\n      <Spin size="54px" name="fading-circle" color="#dc3545" />\n    </div>\n  )\n}\n'},1232:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),r=t(43);n.default=function(){return c.a.createElement("div",{style:{display:"flex"}},c.a.createElement(r.a,{size:18,name:"four-dots",color:"green"}),c.a.createElement(r.a,{name:"four-dots"}),c.a.createElement(r.a,{size:"54px",name:"four-dots",color:"#dc3545"}))}},1233:function(e,n){e.exports='/**\n* cn - four-dots\n     -- name="four-dots"\n* en - four-dots\n     -- name="four-dots"\n*/\nimport React from \'react\'\nimport { Spin } from \'shineout\'\n\nexport default function() {\n  const style = { display: \'flex\' }\n  return (\n    <div style={style}>\n      <Spin size={18} name="four-dots" color="green" />\n      <Spin name="four-dots" />\n      <Spin size="54px" name="four-dots" color="#dc3545" />\n    </div>\n  )\n}\n'},1234:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),r=t(43);n.default=function(){return c.a.createElement("div",{style:{display:"flex"}},c.a.createElement(r.a,{size:18,name:"plane",color:"green"}),c.a.createElement(r.a,{name:"plane"}),c.a.createElement(r.a,{size:"54px",name:"plane",color:"#dc3545"}))}},1235:function(e,n){e.exports='/**\n* cn - plane\n     -- name="plane"\n* en - plane\n     -- name="plane"\n*/\nimport React from \'react\'\nimport { Spin } from \'shineout\'\n\nexport default function() {\n  const style = { display: \'flex\' }\n  return (\n    <div style={style}>\n      <Spin size={18} name="plane" color="green" />\n      <Spin name="plane" />\n      <Spin size="54px" name="plane" color="#dc3545" />\n    </div>\n  )\n}\n'},1236:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),r=t(43);n.default=function(){return c.a.createElement("div",{style:{display:"flex"}},c.a.createElement(r.a,{size:18,name:"pulse",color:"green"}),c.a.createElement(r.a,{name:"pulse"}),c.a.createElement(r.a,{size:"54px",name:"pulse",color:"#dc3545"}))}},1237:function(e,n){e.exports='/**\n* cn - pulse\n     -- name="pulse"\n* en - pulse\n     -- name="pulse"\n*/\nimport React from \'react\'\nimport { Spin } from \'shineout\'\n\nexport default function() {\n  const style = { display: \'flex\' }\n  return (\n    <div style={style}>\n      <Spin size={18} name="pulse" color="green" />\n      <Spin name="pulse" />\n      <Spin size="54px" name="pulse" color="#dc3545" />\n    </div>\n  )\n}\n'},1238:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),r=t(43);n.default=function(){return c.a.createElement("div",{style:{display:"flex"}},c.a.createElement(r.a,{size:18,name:"ring",color:"green"}),c.a.createElement(r.a,{name:"ring"}),c.a.createElement(r.a,{size:"54px",name:"ring",color:"#dc3545"}))}},1239:function(e,n){e.exports='/**\n* cn - ring\n     -- name="ring"\n* en - ring\n     -- name="ring"\n*/\nimport React from \'react\'\nimport { Spin } from \'shineout\'\n\nexport default function() {\n  const style = { display: \'flex\' }\n  return (\n    <div style={style}>\n      <Spin size={18} name="ring" color="green" />\n      <Spin name="ring" />\n      <Spin size="54px" name="ring" color="#dc3545" />\n    </div>\n  )\n}\n'},1240:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),r=t(43);n.default=function(){return c.a.createElement("div",{style:{display:"flex"}},c.a.createElement(r.a,{size:18,name:"scale-circle",color:"green"}),c.a.createElement(r.a,{name:"scale-circle"}),c.a.createElement(r.a,{size:"54px",name:"scale-circle",color:"#dc3545"}))}},1241:function(e,n){e.exports='/**\n* cn - scale-circle\n     -- name="scale-circle"\n* en - scale-circle\n     -- name="scale-circle"\n*/\nimport React from \'react\'\nimport { Spin } from \'shineout\'\n\nexport default function() {\n  const style = { display: \'flex\' }\n  return (\n    <div style={style}>\n      <Spin size={18} name="scale-circle" color="green" />\n      <Spin name="scale-circle" />\n      <Spin size="54px" name="scale-circle" color="#dc3545" />\n    </div>\n  )\n}\n'},1242:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),r=t(43);n.default=function(){return c.a.createElement("div",{style:{display:"flex"}},c.a.createElement(r.a,{size:18,name:"three-bounce",color:"green"}),c.a.createElement(r.a,{name:"three-bounce"}),c.a.createElement(r.a,{size:"54px",name:"three-bounce",color:"#dc3545"}))}},1243:function(e,n){e.exports='/**\n* cn - three-bounce\n     -- name="three-bounce"\n* en - three-bounce\n     -- name="three-bounce"\n*/\nimport React from \'react\'\nimport { Spin } from \'shineout\'\n\nexport default function() {\n  const style = { display: \'flex\' }\n  return (\n    <div style={style}>\n      <Spin size={18} name="three-bounce" color="green" />\n      <Spin name="three-bounce" />\n      <Spin size="54px" name="three-bounce" color="#dc3545" />\n    </div>\n  )\n}\n'},1244:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),r=t(43);n.default=function(){return c.a.createElement("div",{style:{display:"flex"}},c.a.createElement(r.a,{size:18,name:"wave",color:"green"}),c.a.createElement(r.a,{name:"wave"}),c.a.createElement(r.a,{size:"54px",name:"wave",color:"#dc3545"}))}},1245:function(e,n){e.exports='/**\n* cn - wave\n     -- name="wave"\n* en - wave\n     -- name="wave"\n*/\nimport React from \'react\'\nimport { Spin } from \'shineout\'\n\nexport default function() {\n  const style = { display: \'flex\' }\n  return (\n    <div style={style}>\n      <Spin size={18} name="wave" color="green" />\n      <Spin name="wave" />\n      <Spin size="54px" name="wave" color="#dc3545" />\n    </div>\n  )\n}\n'},192:function(e,n,t){"use strict";var s=t(19),m=t(0),d=t.n(m),f=t(229),p=t(53),b=t(14);n.a=function(u){return function(e){var n=Object(m.useState)(""),t=Object(s.a)(n,2),a=t[0],c=t[1],r=Object(m.useState)([]),l=Object(s.a)(r,1)[0],i=e.location.hash,o=Object(m.useCallback)(function(e){e.forEach(function(e){l.push(e)})},[]);Object(m.useEffect)(function(){!function(e){if(e){var n=document.querySelector(e);n&&setTimeout(function(){n.scrollIntoView()},50)}}(i);var e=function(){var t=document.documentElement.scrollTop,e=l.filter(function(e){return 3===e.level&&e.children[0]});if(0!==e.length){var a=e[0].id;e.forEach(function(e){var n=document.querySelector("#".concat(e.id));n&&n.offsetTop<=t&&(a=e.id)}),c(a)}};return document.addEventListener("scroll",e),e(),function(){document.removeEventListener("scroll",e)}},[]);return d.a.createElement("div",{className:Object(b.f)("_")},d.a.createElement(u,{onHeadingSetted:o}),d.a.createElement(f.a,{className:Object(b.f)("sticky"),top:50},d.a.createElement("div",{className:Object(b.f)("nav")},l.map(function(e,n){var t=e.children.filter(function(e){return"string"==typeof e});return d.a.createElement("a",{key:n,className:Object(b.f)("level-".concat(e.level),a===e.id&&"active"),onClick:function(e){if(0===p.a.location.search.indexOf("?example="))p.a.push("".concat(p.a.location.pathname,"?example=").concat(e.replace("heading-","")));else{var n=document.getElementById(e);n&&n.scrollIntoView()}}.bind(null,e.id)},t)}))))}}},198:function(e,n,t){"use strict";var T=t(0),k=t.n(T),s=t(30),R=t(19),a=t(232),m=t.n(a),d=t(49),N=t(14),f=t(11),c=t(12),l=t.n(c),r=t(233),i=t.n(r),P=(t(234),function(e){var n=e.language,t=void 0===n?"lang-jsx":n,a=e.onHighLight,c=e.value,r=Object(T.useRef)(null);return Object(T.useEffect)(function(){var e=r.current;i.a.highlightElement(e,!1,function(){a&&a(e.offsetHeight)})},[]),k.a.createElement("pre",{ref:r,className:l()(t||"lang-jsx",Object(N.a)("pre"))},k.a.createElement("code",null,c))}),C=t(217),o=t(43),u=t(7),p=t(8),b=t(10),v=t(2),g=t(9),h=t(33),x=t(205),H=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(b.a)(this,Object(v.a)(t).call(this,e))).state={ready:!1},n.placeholderRef=function(e){n.placeholder=e},n}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.lazyId=Object(x.a)({element:this.placeholder,render:function(){return e.setState({ready:!0})}})}},{key:"componentWillUnmount",value:function(){Object(x.b)(this.lazyId)}},{key:"render",value:function(){var e=this.state.ready,n=this.props,t=n.children,a=n.placeholder;return e?t:k.a.createElement("span",{ref:this.placeholderRef},a)}}]),t}(h.b),I=t(60),L=t(53),_=k.a.createElement("div",{className:Object(N.a)("placeholder")},k.a.createElement(o.a,null));function E(e){var n=e.component,t=e.id,a=e.name,c=e.rawText,r=e.title,l=Object(T.useRef)(null),i=Object(T.useState)(!1),o=Object(R.a)(i,2),u=o[0],s=o[1],m=Object(T.useState)(),d=Object(R.a)(m,2),f=d[0],p=d[1],b=Object(T.useState)(),v=Object(R.a)(b,1)[0],g=function e(n,t,a){l.current.style.height="".concat(n*(t-1),"px"),1<t&&setTimeout(function(){e(n,t-1,a)},16),a&&(document.documentElement.scrollTop-=n)};Object(T.useEffect)(function(){if(l.current)if(u)l.current.style.height="".concat(f,"px");else{var e=f%15;0<e&&g(e,1,v),g((f-e)/15,15,v)}},[u]);var h=function(e){s(!u),v=e},x=function(e){return k.a.createElement("a",{href:"javascript:;",className:Object(N.a)("toggle"),onClick:h.bind(null,e)},k.a.createElement(I.a,{name:u?"code-close":"code"}))},E=c.replace(/(^|\n|\r)\s*\/\*[\s\S]*?\*\/\s*(?:\r|\n|$)/,"").trim(),y=L.a.location.search,O="?example=";if(0===y.indexOf(O)&&(y=y.replace(O,""),a.indexOf(y)<0))return null;var j=r.split("\n"),S=Object(C.a)(j),z=S[0],w=S.slice(1);return z&&(z=z.trim()),k.a.createElement(T.Fragment,null,z&&k.a.createElement("h3",{key:"0",id:t},z),k.a.createElement(H,{placeholder:_},k.a.createElement("div",{className:Object(N.a)("_",u&&"showcode")},k.a.createElement("div",{className:Object(N.a)("body")},Object(T.createElement)(n)),0<r.length&&k.a.createElement("div",{className:Object(N.a)("desc")},w.map(function(e,n){return k.a.createElement("div",{key:n,dangerouslySetInnerHTML:{__html:e}})}),x(!1)),k.a.createElement("div",{ref:l,className:Object(N.a)("code")},k.a.createElement(P,{onHighLight:function(e){p(e)},onClose:h,value:E}),x(!0)))))}E.defaultProps={rawText:""};var y=function(e){var n=e.children,t=Object(T.useState)(!1),a=Object(R.a)(t,2),c=a[0],r=a[1],l=n.map(function(e){return e.replace(/"fn#fn/g,"").replace(/fn#fn"/g,"").replace(/\\n/g,"\n")}),i=c?"pre":"div";return k.a.createElement("div",{onClick:function(){r(!c)},className:Object(N.e)("console")},k.a.createElement(i,null,l))};y.defaultProps={children:[]};var O=y;function j(e){var n=e.children;return k.a.createElement("table",{className:"doc-api-table"},n)}j.defaultProps={};var S=j,z=/^<code name="([\w|-]+)" /,w=/^<example name="([\w|-]+)"/;function D(e){var n=e.onHeadingSetted,r=e.codes,l=e.examples,t=e.source,a=Object(T.useState)([]),c=Object(R.a)(a,1)[0],i=Object(T.useState)({}),o=Object(R.a)(i,1)[0];Object(T.useEffect)(function(){n&&n(c)},[]);var u=function(e){c.push(e)};return c=[],k.a.createElement(m.a,{className:Object(N.e)("_"),source:t,renderers:{code:P,heading:function(e){var n,t,a=e.level,c=e.children,r="".concat(a,"-").concat(c[0]),l="h".concat(a);if("object"==typeof c[0])return k.a.createElement(l,null,c);if(!o[r]){var i="heading-".concat((n=a,t=c[0],4===n?Object(d.b)():"".concat(n,"-").concat((t||"").replace(/[\W|-]/g,"-"))));2!==a&&3!==a||u({id:i,level:a,children:c}),o[r]=k.a.createElement(l,{id:i},c)}return o[r]},html:function(e){if("<example />"===e.value)return function(){if(o.examples)return o.examples;if(!l)return k.a.createElement("div",null);var e=Object(f.b)("示例","Example"),n="heading-example-h";return u({id:n,level:2,children:[e]}),o.examples=[k.a.createElement("h2",{key:"h",id:n},e)].concat(Object(s.a)(l.map(function(e,n){if(/\d+-/.test(e.name)){var t="heading-".concat(e.name),a=e.title.split("\n"),c=Object(R.a)(a,1)[0];return u({id:t,level:3,children:[c]}),k.a.createElement(E,Object.assign({key:n,id:t},e,{lazy:2<n}))}}))),o.examples}();var n=e.value.match(w);if(n)return function(n){var e="example-".concat(n);if(!o[e]){var t=(l||[]).find(function(e){return e.name===n});o[e]=t?k.a.createElement(E,t):null}return o[e]}(n[1],e.value.indexOf("noExpand"));if("<br>"===e.value||"<br />"===e.value)return k.a.createElement("br",null);var t,a,c=e.value.match(z);return c?(t=c[1],(a=r[t])?[k.a.createElement(P,{key:"cb",value:a.text})].concat(Object(s.a)(a.log.map(function(e,n){return k.a.createElement(O,{key:n},e)}))):(console.error("Code ".concat(t," not existed")),null)):null},table:S,link:function(e){var n=e.href.indexOf(!1)?"_blank":void 0;return k.a.createElement("a",{href:e.href,target:n},e.children)}}})}D.defaultProps={children:null,examples:null,onHeadingSetted:void 0};var K=t(59),B=t(192);t.d(n,"a",function(){return J});var q,A=((q=function(e){var n=Object(T.useState)(e.source),t=Object(R.a)(n,2),a=t[0],c=t[1];return Object(T.useEffect)(function(){e.loader&&e.loader().then(function(e){c(e.default)})},[]),a?k.a.createElement(D,Object.assign({},e,{source:a})):k.a.createElement(K.a,{style:{minHeight:200}})}).defaultProps={loader:void 0,source:void 0},Object(T.memo)(q));n.b=A;function J(n){return Object(B.a)(function(e){return k.a.createElement(A,Object.assign({},e,{loader:n}))})}},205:function(e,n,t){"use strict";t.d(n,"a",function(){return s}),t.d(n,"b",function(){return m});var a=t(216),c=t(49),r=t(42),l={},i=null,o=!1,u=r.b.height;function s(e){var n=e.element.getBoundingClientRect();if(n.bottom<0||n.top>u){var t=Object(c.b)();return l[t]=e,t}return e.render(),null}function m(e){e&&delete l[e]}document.addEventListener("scroll",function(){i&&clearTimeout(i),i=setTimeout(function(){o||(o=!0,Object.keys(l).forEach(function(e){var n=l[e],t=n.element,a=n.render,c=t.getBoundingClientRect();c.bottom<0||c.top>u||(delete l[e],a())}),o=!1),i=null},80)},a.a)}}]);