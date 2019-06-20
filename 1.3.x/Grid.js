(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[21],{1298:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(468),i=n(469),o=n(33),l=n(1299),u=n.n(l),s=n(1300),f=n.n(s),d=Object(o.b)(u.a,f.a),m=[{name:"01-base",title:Object(o.b)("任意等分 \n Grid 的栅格体系是动态生成，可以实现任意等份","Arbitrary \n Grid system is dynamic generated and can be any number."),component:n(1301).default,rawText:n(1302)},{name:"02-offset",title:Object(o.b)("偏移 \n offset 属性可以设置偏移，取值方式和宽度相同","Offset \n The offset property set the offset in the same way as the width."),component:n(1303).default,rawText:n(1304)},{name:"03-nested",title:Object(o.b)("嵌套 \n 嵌套的栅格","Nested \n Nested grids"),component:n(1305).default,rawText:n(1306)},{name:"04-gutter",title:Object(o.b)("间距 \n 通过 gutter 属性设置栅格间距","Gutter \n Set grid spacing through the gutter property."),component:n(1307).default,rawText:n(1308)}];t.default=Object(c.a)(function(e){return a.a.createElement(i.b,Object.assign({},e,{codes:void 0,source:d,examples:m}))})},1299:function(e,t){e.exports="# Grid *栅格*\n\n动态栅格体系，用于某些不适合使用 flex 的地方\n\n<example />\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| className | string | 无 | 扩展className |\n| gutter | number | 无 | 栅格之间间距 |\n| offset | number | 0 | 左偏移百分比，0 <= offset < 1 |\n| style | object | 无 | 最外层扩展样式 |\n| width | number | 1 | 宽度百分比，0 < number <= 1 |\n"},1300:function(e,t){e.exports="# Grid\n\n<example />\n\n# API\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| className | string | none | Extend className |\n| gutter | number | none | Spacing between grids |\n| offset | number | 0 | Left offset percentage, 0 <= offset < 1 |\n| style | object | - | Container element style |\n| width | number | 1 | Percentage of width, 0 < number <= 1 |"},1301:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return d});var r=n(4),a=n(5),c=n(7),i=n(3),o=n(6),l=n(0),u=n.n(l),s=n(465),f=n(1382),d=function(e){function n(e){var t;return Object(r.a)(this,n),(t=Object(c.a)(this,Object(i.a)(n).call(this,e))).handleCountChange=function(e){t.setState({count:e})},t.state={count:5},t}return Object(o.a)(n,e),Object(a.a)(n,[{key:"render",value:function(){var n=this.state.count;return u.a.createElement("div",null,u.a.createElement(s.a,{formatValue:!1,scale:[1,2,3,5,8,13,21,34,55],step:0,value:n,onChange:this.handleCountChange}),u.a.createElement("div",{style:{height:20}}),Array.from({length:n}).map(function(e,t){return u.a.createElement("div",{key:t,style:{background:"#f2f2f2",marginBottom:4,lineHeight:"30px"}},u.a.createElement(f.a,{width:(t+1)/n,style:{color:"#fff",paddingLeft:8,background:"#3399ff"}},t+1,"/",n))}))}}]),n}(l.Component)},1302:function(e,t){e.exports="/**\n * cn - 任意等分\n *    -- Grid 的栅格体系是动态生成，可以实现任意等份\n * en - Arbitrary\n *    -- Grid system is dynamic generated and can be any number.\n */\nimport React, { Component } from 'react'\nimport { Grid, Slider } from 'shineout'\n\nexport default class extends Component {\n  constructor(props) {\n    super(props)\n    this.state = { count: 5 }\n  }\n\n  handleCountChange = count => {\n    this.setState({ count })\n  }\n\n  render() {\n    const { count } = this.state\n\n    return (\n      <div>\n        <Slider\n          formatValue={false}\n          scale={[1, 2, 3, 5, 8, 13, 21, 34, 55]}\n          step={0}\n          value={count}\n          onChange={this.handleCountChange}\n        />\n\n        <div style={{ height: 20 }} />\n\n        {Array.from({ length: count }).map((n, i) => (\n          <div key={i} style={{ background: '#f2f2f2', marginBottom: 4, lineHeight: '30px' }}>\n            <Grid width={(i + 1) / count} style={{ color: '#fff', paddingLeft: 8, background: '#3399ff' }}>\n              {i + 1}/{count}\n            </Grid>\n          </div>\n        ))}\n      </div>\n    )\n  }\n}\n"},1303:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(1382),i={color:"#fff",lineHeight:"60px",textAlign:"center",background:"#3399ff"};t.default=function(){return a.a.createElement("div",{style:{background:"#f2f2f2"}},a.a.createElement(c.a,{width:1/3,offset:1/3,style:i},"With 1/3, Offset 1/3"))}},1304:function(e,t){e.exports="/**\n * cn - 偏移\n *    -- offset 属性可以设置偏移，取值方式和宽度相同\n * en - Offset\n *    -- The offset property set the offset in the same way as the width.\n */\nimport React from 'react'\nimport { Grid } from 'shineout'\n\nconst style = {\n  color: '#fff',\n  lineHeight: '60px',\n  textAlign: 'center',\n  background: '#3399ff',\n}\n\nexport default function() {\n  return (\n    <div style={{ background: '#f2f2f2' }}>\n      <Grid width={1 / 3} offset={1 / 3} style={style}>\n        With 1/3, Offset 1/3\n      </Grid>\n    </div>\n  )\n}\n"},1305:function(e,t,n){"use strict";n.r(t);var r=n(17),a=n(0),c=n.n(a),i=n(1382),o={color:"#fff",lineHeight:"30px",textAlign:"center",background:"#3399ff"};t.default=function(){return c.a.createElement(i.a,{style:{textAlign:"center"}},c.a.createElement(i.a,{width:.5,style:o},"1/2"),c.a.createElement(i.a,{width:.5,style:{lineHeight:"30px"}},c.a.createElement("div",null,"1/2"),c.a.createElement("div",null,c.a.createElement(i.a,{style:o,width:1/3},"1/3"),c.a.createElement(i.a,{style:Object(r.a)({},o,{background:"#f5f5f5",color:"#333"}),width:1/3},"1/3"),c.a.createElement(i.a,{style:o,width:1/3},"1/3"))))}},1306:function(e,t){e.exports="/**\n * cn - 嵌套\n *    -- 嵌套的栅格\n * en - Nested\n *    -- Nested grids\n */\nimport React from 'react'\nimport { Grid } from 'shineout'\n\nconst style = {\n  color: '#fff',\n  lineHeight: '30px',\n  textAlign: 'center',\n  background: '#3399ff',\n}\n\nexport default function() {\n  return (\n    <Grid style={{ textAlign: 'center' }}>\n      <Grid width={1 / 2} style={style}>\n        1/2\n      </Grid>\n\n      <Grid width={1 / 2} style={{ lineHeight: '30px' }}>\n        <div>1/2</div>\n        <div>\n          <Grid style={style} width={1 / 3}>\n            1/3\n          </Grid>\n          <Grid style={{ ...style, background: '#f5f5f5', color: '#333' }} width={1 / 3}>\n            1/3\n          </Grid>\n          <Grid style={style} width={1 / 3}>\n            1/3\n          </Grid>\n        </div>\n      </Grid>\n    </Grid>\n  )\n}\n"},1307:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(1382),i={color:"#fff",lineHeight:"30px",textAlign:"center",background:"#3399ff"};t.default=function(){return a.a.createElement("div",{style:{background:"#f2f2f2"}},a.a.createElement(c.a,{gutter:8},Array.from({length:8}).map(function(e,t){return t+1}).map(function(e){return a.a.createElement(c.a,{key:e,width:1/8},a.a.createElement("div",{style:i},"1/8"))})))}},1308:function(e,t){e.exports="/**\n * cn - 间距\n *    -- 通过 gutter 属性设置栅格间距\n * en - Gutter\n *    -- Set grid spacing through the gutter property.\n */\nimport React from 'react'\nimport { Grid } from 'shineout'\n\nconst style = {\n  color: '#fff',\n  lineHeight: '30px',\n  textAlign: 'center',\n  background: '#3399ff',\n}\n\nexport default function() {\n  return (\n    <div style={{ background: '#f2f2f2' }}>\n      <Grid gutter={8}>\n        {Array.from({ length: 8 })\n          .map((_, i) => i + 1)\n          .map(i => (\n            <Grid key={i} width={1 / 8}>\n              <div style={style}>1/8</div>\n            </Grid>\n          ))}\n      </Grid>\n    </div>\n  )\n}\n"},1382:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var h=n(17),p=n(16),r=n(4),a=n(5),c=n(7),i=n(3),o=n(6),b=n(0),g=n.n(b),l=n(13),v=n.n(l),y=n(139),u=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){var e=this.props,t=e.width,n=void 0===t?1:t,r=e.offset,a=e.responsive,c=e.stretch,i=e.children,o=e.gutter,l=Object(p.a)(e,["width","offset","responsive","stretch","children","gutter"]),u=0,s=0;b.Children.toArray(i).forEach(function(e){e.type&&e.type.isGrid&&(e.props.width?s+=e.props.width:u+=1)});var f=0<u?(1-s)/u:0,d=v()(this.props.className,Object(y.a)({width:n,offset:r,responsive:a})),m=Object.assign({},this.props.style);return o&&0<o&&(m.width="auto",m.display="block",m.marginLeft="".concat(0-o/2,"px"),m.marginRight="".concat(0-o/2,"px")),g.a.createElement("div",Object.assign({},l,{style:m,className:d}),b.Children.toArray(i).map(function(e){if(e.type&&e.type.isGrid){var t={style:Object.assign({},e.props.style)};return e.props.width||(t.width=f),c&&(t.style=Object(h.a)({},t.style,{minHeight:"100%",height:"100%"})),o&&0<o&&(t.style=Object(h.a)({},t.style,{paddingLeft:o/2,paddingRight:o/2})),Object(b.cloneElement)(e,t)}return e}))}}]),t}(b.PureComponent);u.isGrid=!0,u.displayName="ShineoutGrid"},468:function(e,t,n){"use strict";var f=n(22),d=n(0),m=n.n(d),h=n(476),p=n(66),b=n(15);t.a=function(s){return function(e){var t=Object(d.useState)(""),n=Object(f.a)(t,2),r=n[0],a=n[1],c=Object(d.useState)([]),i=Object(f.a)(c,1)[0],o=e.location.hash,l=Object(d.useCallback)(function(e){e.forEach(function(e){i.push(e)})},[]),u=Object(d.useCallback)(function(){if(o){var e=document.querySelector(o);e&&setTimeout(function(){e.scrollIntoView()},50)}},[o]);Object(d.useEffect)(function(){u();var e=function(){var n=document.documentElement.scrollTop,e=i.filter(function(e){return 3===e.level&&e.children[0]});if(0!==e.length){var r=e[0].id;e.forEach(function(e){var t=document.querySelector("#".concat(e.id));t&&t.offsetTop<=n&&(r=e.id)}),a(r)}};return document.addEventListener("scroll",e),e(),function(){document.removeEventListener("scroll",e)}},[]);return m.a.createElement("div",{className:Object(b.f)("_")},m.a.createElement(s,{onHeadingSetted:l}),!e.noNav&&m.a.createElement(h.a,{className:Object(b.f)("sticky"),top:50},m.a.createElement("div",{className:Object(b.f)("nav")},i.map(function(e,t){var n=e.children.filter(function(e){return"string"==typeof e});return m.a.createElement("a",{key:t,className:Object(b.f)("level-".concat(e.level),r===e.id&&"active"),onClick:function(e){if(0===p.a.location.search.indexOf("?example="))p.a.push("".concat(p.a.location.pathname,"?example=").concat(e.replace("heading-","")));else{var t=document.getElementById(e);t&&t.scrollIntoView()}}.bind(null,e.id)},n)}))))}}},469:function(e,t,n){"use strict";var C=n(0),N=n.n(C),s=n(23),S=n(22),r=n(479),f=n.n(r),d=n(77),m=n(32),H=n(15),h=n(33),a=n(13),i=n.n(a),c=n(480),o=n.n(c),A=(n(481),function(e){var t=e.language,n=void 0===t?"lang-jsx":t,r=e.onHighLight,a=e.value,c=Object(C.useRef)(null);return Object(C.useEffect)(function(){var e=c.current;o.a.highlightElement(e,!1,function(){r&&r(e.offsetHeight)})},[]),N.a.createElement("pre",{ref:c,className:i()(n||"lang-jsx",Object(H.a)("pre"))},N.a.createElement("code",null,a))}),T=n(137),l=n(112),u=n(4),p=n(5),b=n(7),g=n(3),v=n(6),y=n(20),O=n(470),R=function(e){function n(e){var t;return Object(u.a)(this,n),(t=Object(b.a)(this,Object(g.a)(n).call(this,e))).state={ready:!1},t.placeholderRef=function(e){t.placeholder=e},t}return Object(v.a)(n,e),Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.lazyId=Object(O.a)({element:this.placeholder,render:function(){return e.setState({ready:!0})}})}},{key:"componentWillUnmount",value:function(){Object(O.b)(this.lazyId)}},{key:"render",value:function(){var e=this.state.ready,t=this.props,n=t.children,r=t.placeholder;return e?n:N.a.createElement("span",{ref:this.placeholderRef},r)}}]),n}(y.b),L=n(135),P=n(66),I=N.a.createElement("div",{className:Object(H.a)("placeholder")},N.a.createElement(l.a,null));function j(e){var t=e.component,n=e.id,r=e.name,a=e.rawText,c=e.title,i=Object(C.useRef)(null),o=Object(C.useState)(!1),l=Object(S.a)(o,2),u=l[0],s=l[1],f=Object(C.useState)(),d=Object(S.a)(f,2),m=d[0],h=d[1],p=Object(C.useState)(),b=Object(S.a)(p,1)[0],g=function e(t,n,r){i.current.style.height="".concat(t*(n-1),"px"),1<n&&setTimeout(function(){e(t,n-1,r)},16),r&&(document.documentElement.scrollTop-=t)};Object(C.useEffect)(function(){if(i.current)if(u)i.current.style.height="".concat(m,"px");else{var e=m%15;0<e&&g(e,1,b),g((m-e)/15,15,b)}},[u]);var v=function(e){s(!u),b=e},y=function(e){return N.a.createElement("a",{href:"javascript:;",className:Object(H.a)("toggle"),onClick:v.bind(null,e)},N.a.createElement(L.a,{name:u?"code-close":"code"}))},O=a.replace(/(^|\n|\r)\s*\/\*[\s\S]*?\*\/\s*(?:\r|\n|$)/,"").trim(),j=P.a.location.search,E="?example=";if(0===j.indexOf(E)&&(j=j.replace(E,""),r.indexOf(j)<0))return null;var x=c.split("\n"),w=Object(T.a)(x),k=w[0],G=w.slice(1);return k&&(k=k.trim()),N.a.createElement(C.Fragment,null,k&&N.a.createElement("h3",{key:"0",id:n},k),N.a.createElement(R,{placeholder:I},N.a.createElement("div",{className:Object(H.a)("_",u&&"showcode")},N.a.createElement("div",{className:Object(H.a)("body")},Object(C.createElement)(t)),0<c.length&&N.a.createElement("div",{className:Object(H.a)("desc")},G.map(function(e,t){return N.a.createElement("div",{key:t,dangerouslySetInnerHTML:{__html:e}})}),y(!1)),N.a.createElement("div",{ref:i,className:Object(H.a)("code")},N.a.createElement(A,{onHighLight:function(e){h(e)},onClose:v,value:O}),y(!0)))))}j.defaultProps={rawText:""};var E=function(e){var t=e.children,n=Object(C.useState)(!1),r=Object(S.a)(n,2),a=r[0],c=r[1],i=t.map(function(e){return e.replace(/"fn#fn/g,"").replace(/fn#fn"/g,"").replace(/\\n/g,"\n")}),o=a?"pre":"div";return N.a.createElement("div",{onClick:function(){c(!a)},className:Object(H.e)("console")},N.a.createElement(o,null,i))};E.defaultProps={children:[]};var x=E;function w(e){var t=e.children,n=Object(s.a)(t[1].props.children);try{n.sort(function(e,t){return e.props.children[0].props.children[0].localeCompare(t.props.children[0].props.children[0])})}catch(e){console.log("sort fail...")}return N.a.createElement("div",{style:{overflow:"auto"}},N.a.createElement("table",{className:"doc-api-table"},t[0],N.a.cloneElement(t[1],{children:n})))}w.defaultProps={};var k=w,G=/^<code name="([\w|-]+)" /,_=/^<example name="([\w|-]+)"/;function B(e){var t=e.onHeadingSetted,c=e.codes,i=e.examples,n=e.source,r=Object(C.useState)([]),a=Object(S.a)(r,1)[0],o=Object(C.useState)({}),l=Object(S.a)(o,1)[0];Object(C.useEffect)(function(){t&&t(a)},[]);var u=function(e){a.push(e)};return a=[],N.a.createElement(f.a,{className:Object(H.e)("_"),source:n,renderers:{code:A,heading:function(e){var t,n,r=e.level,a=e.children,c="".concat(r,"-").concat(a[0]),i="h".concat(r);if("object"==typeof a[0])return N.a.createElement(i,null,a);if(!l[c]){var o="heading-".concat((t=r,n=a[0],4===t?Object(m.b)():"".concat(t,"-").concat((n||"").replace(/[\W|-]/g,"-"))));2!==r&&3!==r||u({id:o,level:r,children:a}),l[c]=N.a.createElement(i,{id:o},a)}return l[c]},html:function(e){if("<example />"===e.value)return function(){if(l.examples)return l.examples;if(!i)return N.a.createElement("div",null);var e=Object(h.b)("示例","Example"),t="heading-example-h";return u({id:t,level:2,children:[e]}),l.examples=[N.a.createElement("h2",{key:"h",id:t},e)].concat(Object(s.a)(i.map(function(e,t){if(/\d+-/.test(e.name)){var n="heading-".concat(e.name),r=e.title.split("\n"),a=Object(S.a)(r,1)[0];return u({id:n,level:3,children:[a]}),N.a.createElement(j,Object.assign({key:t,id:n},e,{lazy:2<t}))}}))),l.examples}();var t=e.value.match(_);if(t)return function(t){var e="example-".concat(t);if(!l[e]){var n=(i||[]).find(function(e){return e.name===t});l[e]=n?N.a.createElement(j,n):null}return l[e]}(t[1],e.value.indexOf("noExpand"));if("<br>"===e.value||"<br />"===e.value)return N.a.createElement("br",null);var n,r,a=e.value.match(G);return a?(n=a[1],(r=c[n])?[N.a.createElement(A,{key:"cb",value:r.text})].concat(Object(s.a)(r.log.map(function(e,t){return N.a.createElement(x,{key:t},e)}))):(console.error("Code ".concat(n," not existed")),null)):null},table:k,link:function(e){var t=0===e.href.indexOf("http")?"_blank":void 0;return t?N.a.createElement("a",{href:e.href,target:t},e.children):N.a.createElement(d.a,{to:e.href,target:t},e.children)}}})}B.defaultProps={children:null,examples:null,onHeadingSetted:void 0};var D=n(136),V=n(468);n.d(t,"a",function(){return q});var W,z=((W=function(e){var t=Object(C.useState)(e.source),n=Object(S.a)(t,2),r=n[0],a=n[1];return Object(C.useEffect)(function(){e.loader&&e.loader().then(function(e){a(e.default)})},[]),r?N.a.createElement(B,Object.assign({},e,{source:r})):N.a.createElement(D.a,{style:{minHeight:200}})}).defaultProps={loader:void 0,source:void 0},Object(C.memo)(W));t.b=z;function q(t,n){return Object(V.a)(function(e){return N.a.createElement(z,Object.assign({},e,{noNav:n,loader:t}))})}},470:function(e,t,n){"use strict";n.d(t,"a",function(){return s}),n.d(t,"b",function(){return f});var r=n(472),a=n(32),c=n(35),i={},o=null,l=!1,u=c.b.height;function s(e){var t=e.element.getBoundingClientRect();if(t.bottom<0||t.top>u){var n=Object(a.b)();return i[n]=e,n}return e.render(),null}function f(e){e&&delete i[e]}document.addEventListener("scroll",function(){o&&clearTimeout(o),o=setTimeout(function(){l||(l=!0,Object.keys(i).forEach(function(e){var t=i[e],n=t.element,r=t.render,a=n.getBoundingClientRect();a.bottom<0||a.top>u||(delete i[e],r())}),l=!1),o=null},80)},r.a)}}]);