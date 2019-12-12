(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[39],{1312:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),c=t(477),r=t(478),o=t(34),l=t(1313),s=t.n(l),u=t(1314),d=t.n(u),m=Object(o.b)(s.a,d.a),p=[{name:"01-default",title:Object(o.b)('default \n name="default"','default \n name="default"'),component:t(1315).default,rawText:t(1316)},{name:"01-wrapper",title:Object(o.b)("包裹容器 \n 直接把内容内嵌到 Spin 中，将现有容器变为加载状态。","Container \n children in Spin"),component:t(1317).default,rawText:t(1318)},{name:"02-chasing-dots",title:Object(o.b)('chasing-dots \n name="chasing-dots"','chasing-dots \n name="chasing-dots"'),component:t(1319).default,rawText:t(1320)},{name:"03-cube-grid",title:Object(o.b)('cube-grid \n name="cube-grid"','cube-grid \n name="cube-grid"'),component:t(1321).default,rawText:t(1322)},{name:"04-double-bounce",title:Object(o.b)('double-bounce \n name="double-bounce"','double-bounce \n name="double-bounce"'),component:t(1323).default,rawText:t(1324)},{name:"05-fading-circle",title:Object(o.b)('fading-circle \n name="fading-circle"','fading-circle \n name="fading-circle"'),component:t(1325).default,rawText:t(1326)},{name:"06-four-dots",title:Object(o.b)('four-dots \n name="four-dots"','four-dots \n name="four-dots"'),component:t(1327).default,rawText:t(1328)},{name:"07-plane",title:Object(o.b)('plane \n name="plane"','plane \n name="plane"'),component:t(1329).default,rawText:t(1330)},{name:"08-pulse",title:Object(o.b)('pulse \n name="pulse"','pulse \n name="pulse"'),component:t(1331).default,rawText:t(1332)},{name:"09-ring",title:Object(o.b)('ring \n name="ring"','ring \n name="ring"'),component:t(1333).default,rawText:t(1334)},{name:"10-scale-circle",title:Object(o.b)('scale-circle \n name="scale-circle"','scale-circle \n name="scale-circle"'),component:t(1335).default,rawText:t(1336)},{name:"11-three-bounce",title:Object(o.b)('three-bounce \n name="three-bounce"','three-bounce \n name="three-bounce"'),component:t(1337).default,rawText:t(1338)},{name:"12-wave",title:Object(o.b)('wave \n name="wave"','wave \n name="wave"'),component:t(1339).default,rawText:t(1340)}];n.default=Object(c.a)(function(e){return i.a.createElement(r.b,Object.assign({},e,{codes:void 0,source:m,examples:p}))})},1313:function(e,n){e.exports="# Spin *加载中*\n\n部分样式来源于[SpinKit](https://github.com/tobiasahlin/SpinKit)\n\n<example />\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| color | string | #6c757d | 颜色 |\n| size | number \\| string | 40 | 尺寸 |\n| name | string | 'fading-circle' | 类型，可选值见示例 |"},1314:function(e,n){e.exports="# Spin\n\nPart of the style comes from [SpinKit](https://github.com/tobiasahlin/SpinKit).\n\n<example />\n\n## API\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| color | string | #6c757d | color |\n| size | number \\| string | 40 | size |\n| name | string | 'fading-circle' | type. See the example for optional values. |"},1315:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),c=t(114);n.default=function(){return i.a.createElement("div",{style:{display:"flex"}},i.a.createElement(c.a,{size:18,name:"default",color:"green"}),i.a.createElement(c.a,{name:"default"}),i.a.createElement(c.a,{size:"54px",name:"default",color:"#dc3545"}))}},1316:function(e,n){e.exports='/**\n* cn - default\n     -- name="default"\n* en - default\n     -- name="default"\n*/\nimport React from \'react\'\nimport { Spin } from \'shineout\'\n\nexport default function() {\n  const style = { display: \'flex\' }\n  return (\n    <div style={style}>\n      <Spin size={18} name="default" color="green" />\n      <Spin name="default" />\n      <Spin size="54px" name="default" color="#dc3545" />\n    </div>\n  )\n}\n'},1317:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return p});var r=t(4),a=t(5),o=t(6),l=t(3),i=t(7),c=t(0),s=t.n(c),u=t(1473),d=t(114),m=t(138),p=function(e){function c(){var e,n;Object(r.a)(this,c);for(var t=arguments.length,a=new Array(t),i=0;i<t;i++)a[i]=arguments[i];return(n=Object(o.a)(this,(e=Object(l.a)(c)).call.apply(e,[this].concat(a)))).state={loading:!0},n.handleChange=function(e){n.setState({loading:e})},n}return Object(i.a)(c,e),Object(a.a)(c,[{key:"render",value:function(){var e=this.state.loading;return s.a.createElement("div",null,s.a.createElement(u.a,{value:e,onChange:this.handleChange,style:{marginBottom:20}}),s.a.createElement(d.a,{loading:e,size:20},s.a.createElement(m.a,{style:{marginBottom:0}},s.a.createElement("h3",null,"This is Title"),"Some Content Here...")))}}]),c}(s.a.Component)},1318:function(e,n){e.exports="/**\n* cn - 包裹容器\n     -- 直接把内容内嵌到 Spin 中，将现有容器变为加载状态。\n* en - Container\n     -- children in Spin\n*/\nimport React from 'react'\nimport { Spin, Alert, Switch } from 'shineout'\n\nexport default class extends React.Component {\n  state = {\n    loading: true,\n  }\n\n  handleChange = v => {\n    this.setState({\n      loading: v,\n    })\n  }\n\n  render() {\n    const { loading } = this.state\n    return (\n      <div>\n        <Switch value={loading} onChange={this.handleChange} style={{ marginBottom: 20 }} />\n        <Spin loading={loading} size={20}>\n          <Alert style={{ marginBottom: 0 }}>\n            <h3>This is Title</h3>\n            Some Content Here...\n          </Alert>\n        </Spin>\n      </div>\n    )\n  }\n}\n"},1319:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),c=t(114);n.default=function(){return i.a.createElement("div",{style:{display:"flex"}},i.a.createElement(c.a,{size:18,name:"chasing-dots",color:"green"}),i.a.createElement(c.a,{name:"chasing-dots"}),i.a.createElement(c.a,{size:"54px",name:"chasing-dots",color:"#dc3545"}))}},1320:function(e,n){e.exports='/**\n* cn - chasing-dots\n     -- name="chasing-dots"\n* en - chasing-dots\n     -- name="chasing-dots"\n*/\nimport React from \'react\'\nimport { Spin } from \'shineout\'\n\nexport default function() {\n  const style = { display: \'flex\' }\n  return (\n    <div style={style}>\n      <Spin size={18} name="chasing-dots" color="green" />\n      <Spin name="chasing-dots" />\n      <Spin size="54px" name="chasing-dots" color="#dc3545" />\n    </div>\n  )\n}\n'},1321:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),c=t(114);n.default=function(){return i.a.createElement("div",{style:{display:"flex"}},i.a.createElement(c.a,{size:18,name:"cube-grid",color:"green"}),i.a.createElement(c.a,{name:"cube-grid"}),i.a.createElement(c.a,{size:"54px",name:"cube-grid",color:"#dc3545"}))}},1322:function(e,n){e.exports='/**\n* cn - cube-grid\n     -- name="cube-grid"\n* en - cube-grid\n     -- name="cube-grid"\n*/\nimport React from \'react\'\nimport { Spin } from \'shineout\'\n\nexport default function() {\n  const style = { display: \'flex\' }\n  return (\n    <div style={style}>\n      <Spin size={18} name="cube-grid" color="green" />\n      <Spin name="cube-grid" />\n      <Spin size="54px" name="cube-grid" color="#dc3545" />\n    </div>\n  )\n}\n'},1323:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),c=t(114);n.default=function(){return i.a.createElement("div",{style:{display:"flex"}},i.a.createElement(c.a,{size:18,name:"double-bounce",color:"green"}),i.a.createElement(c.a,{name:"double-bounce"}),i.a.createElement(c.a,{size:"54px",name:"double-bounce",color:"#dc3545"}))}},1324:function(e,n){e.exports='/**\n* cn - double-bounce\n     -- name="double-bounce"\n* en - double-bounce\n     -- name="double-bounce"\n*/\nimport React from \'react\'\nimport { Spin } from \'shineout\'\n\nexport default function() {\n  const style = { display: \'flex\' }\n  return (\n    <div style={style}>\n      <Spin size={18} name="double-bounce" color="green" />\n      <Spin name="double-bounce" />\n      <Spin size="54px" name="double-bounce" color="#dc3545" />\n    </div>\n  )\n}\n'},1325:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),c=t(114);n.default=function(){return i.a.createElement("div",{style:{display:"flex"}},i.a.createElement(c.a,{size:18,name:"fading-circle",color:"green"}),i.a.createElement(c.a,{name:"fading-circle"}),i.a.createElement(c.a,{size:"54px",name:"fading-circle",color:"#dc3545"}))}},1326:function(e,n){e.exports='/**\n* cn - fading-circle\n     -- name="fading-circle"\n* en - fading-circle\n     -- name="fading-circle"\n*/\nimport React from \'react\'\nimport { Spin } from \'shineout\'\n\nexport default function() {\n  const style = { display: \'flex\' }\n  return (\n    <div style={style}>\n      <Spin size={18} name="fading-circle" color="green" />\n      <Spin name="fading-circle" />\n      <Spin size="54px" name="fading-circle" color="#dc3545" />\n    </div>\n  )\n}\n'},1327:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),c=t(114);n.default=function(){return i.a.createElement("div",{style:{display:"flex"}},i.a.createElement(c.a,{size:18,name:"four-dots",color:"green"}),i.a.createElement(c.a,{name:"four-dots"}),i.a.createElement(c.a,{size:"54px",name:"four-dots",color:"#dc3545"}))}},1328:function(e,n){e.exports='/**\n* cn - four-dots\n     -- name="four-dots"\n* en - four-dots\n     -- name="four-dots"\n*/\nimport React from \'react\'\nimport { Spin } from \'shineout\'\n\nexport default function() {\n  const style = { display: \'flex\' }\n  return (\n    <div style={style}>\n      <Spin size={18} name="four-dots" color="green" />\n      <Spin name="four-dots" />\n      <Spin size="54px" name="four-dots" color="#dc3545" />\n    </div>\n  )\n}\n'},1329:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),c=t(114);n.default=function(){return i.a.createElement("div",{style:{display:"flex"}},i.a.createElement(c.a,{size:18,name:"plane",color:"green"}),i.a.createElement(c.a,{name:"plane"}),i.a.createElement(c.a,{size:"54px",name:"plane",color:"#dc3545"}))}},1330:function(e,n){e.exports='/**\n* cn - plane\n     -- name="plane"\n* en - plane\n     -- name="plane"\n*/\nimport React from \'react\'\nimport { Spin } from \'shineout\'\n\nexport default function() {\n  const style = { display: \'flex\' }\n  return (\n    <div style={style}>\n      <Spin size={18} name="plane" color="green" />\n      <Spin name="plane" />\n      <Spin size="54px" name="plane" color="#dc3545" />\n    </div>\n  )\n}\n'},1331:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),c=t(114);n.default=function(){return i.a.createElement("div",{style:{display:"flex"}},i.a.createElement(c.a,{size:18,name:"pulse",color:"green"}),i.a.createElement(c.a,{name:"pulse"}),i.a.createElement(c.a,{size:"54px",name:"pulse",color:"#dc3545"}))}},1332:function(e,n){e.exports='/**\n* cn - pulse\n     -- name="pulse"\n* en - pulse\n     -- name="pulse"\n*/\nimport React from \'react\'\nimport { Spin } from \'shineout\'\n\nexport default function() {\n  const style = { display: \'flex\' }\n  return (\n    <div style={style}>\n      <Spin size={18} name="pulse" color="green" />\n      <Spin name="pulse" />\n      <Spin size="54px" name="pulse" color="#dc3545" />\n    </div>\n  )\n}\n'},1333:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),c=t(114);n.default=function(){return i.a.createElement("div",{style:{display:"flex"}},i.a.createElement(c.a,{size:18,name:"ring",color:"green"}),i.a.createElement(c.a,{name:"ring"}),i.a.createElement(c.a,{size:"54px",name:"ring",color:"#dc3545"}))}},1334:function(e,n){e.exports='/**\n* cn - ring\n     -- name="ring"\n* en - ring\n     -- name="ring"\n*/\nimport React from \'react\'\nimport { Spin } from \'shineout\'\n\nexport default function() {\n  const style = { display: \'flex\' }\n  return (\n    <div style={style}>\n      <Spin size={18} name="ring" color="green" />\n      <Spin name="ring" />\n      <Spin size="54px" name="ring" color="#dc3545" />\n    </div>\n  )\n}\n'},1335:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),c=t(114);n.default=function(){return i.a.createElement("div",{style:{display:"flex"}},i.a.createElement(c.a,{size:18,name:"scale-circle",color:"green"}),i.a.createElement(c.a,{name:"scale-circle"}),i.a.createElement(c.a,{size:"54px",name:"scale-circle",color:"#dc3545"}))}},1336:function(e,n){e.exports='/**\n* cn - scale-circle\n     -- name="scale-circle"\n* en - scale-circle\n     -- name="scale-circle"\n*/\nimport React from \'react\'\nimport { Spin } from \'shineout\'\n\nexport default function() {\n  const style = { display: \'flex\' }\n  return (\n    <div style={style}>\n      <Spin size={18} name="scale-circle" color="green" />\n      <Spin name="scale-circle" />\n      <Spin size="54px" name="scale-circle" color="#dc3545" />\n    </div>\n  )\n}\n'},1337:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),c=t(114);n.default=function(){return i.a.createElement("div",{style:{display:"flex"}},i.a.createElement(c.a,{size:18,name:"three-bounce",color:"green"}),i.a.createElement(c.a,{name:"three-bounce"}),i.a.createElement(c.a,{size:"54px",name:"three-bounce",color:"#dc3545"}))}},1338:function(e,n){e.exports='/**\n* cn - three-bounce\n     -- name="three-bounce"\n* en - three-bounce\n     -- name="three-bounce"\n*/\nimport React from \'react\'\nimport { Spin } from \'shineout\'\n\nexport default function() {\n  const style = { display: \'flex\' }\n  return (\n    <div style={style}>\n      <Spin size={18} name="three-bounce" color="green" />\n      <Spin name="three-bounce" />\n      <Spin size="54px" name="three-bounce" color="#dc3545" />\n    </div>\n  )\n}\n'},1339:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),c=t(114);n.default=function(){return i.a.createElement("div",{style:{display:"flex"}},i.a.createElement(c.a,{size:18,name:"wave",color:"green"}),i.a.createElement(c.a,{name:"wave"}),i.a.createElement(c.a,{size:"54px",name:"wave",color:"#dc3545"}))}},1340:function(e,n){e.exports='/**\n* cn - wave\n     -- name="wave"\n* en - wave\n     -- name="wave"\n*/\nimport React from \'react\'\nimport { Spin } from \'shineout\'\n\nexport default function() {\n  const style = { display: \'flex\' }\n  return (\n    <div style={style}>\n      <Spin size={18} name="wave" color="green" />\n      <Spin name="wave" />\n      <Spin size="54px" name="wave" color="#dc3545" />\n    </div>\n  )\n}\n'},1473:function(e,n,t){"use strict";var a=t(62),i=t(19),c=t(483),r=Object(c.a)("switch"),o=t(479),l=Object(i.a)(a.a,o.b)(r);l.displayName="ShineoutSwitch",l.Switch=r;n.a=l},479:function(e,n,t){"use strict";t.d(n,"a",function(){return o}),t.d(n,"b",function(){return l});var a=t(0),i=t.n(a),c=t(32),r=t.n(c)()(),o=r.Provider,l=function(t){return function(n){return i.a.createElement(r.Consumer,null,function(e){return i.a.createElement(t,Object.assign({},n,e))})}}},483:function(e,n,t){"use strict";var a=t(17),g=t(22),i=t(4),c=t(5),r=t(6),o=t(3),l=t(7),s=t(1),u=t(0),v=t.n(u),d=t(15),x=t.n(d),m=t(20),p=t(21),f=t(29),h=t(12),y=t(471),S=t(2);n.a=function(b){var e=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(r.a)(this,Object(o.a)(t).call(this,e))).state={checked:e.checked},n.id="cb_".concat(Object(f.b)()),n.input=null,n.el=null,n.handleChange=n.handleChange.bind(Object(s.a)(Object(s.a)(n))),n.handleInputChange=n.handleInputChange.bind(Object(s.a)(Object(s.a)(n))),n.handleEnter=n.handleEnter.bind(Object(s.a)(Object(s.a)(n))),n.bindRef=n.bindRef.bind(Object(s.a)(Object(s.a)(n))),n}return Object(l.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(e){var n=this.props,t=n.checked,a=n.inputable,i=n.value,c=n.htmlValue;e.value!==i&&void 0===t&&this.setState({checked:a?!!i:i===c})}},{key:"getChecked",value:function(){var e=this.props,n=e.checked,t=e.value,a=e.htmlValue;return"function"==typeof n?n(a):void 0!==n?n:void 0===this.state.checked?t===a:this.state.checked}},{key:"getProp",value:function(e){return void 0!==this.props[e]?this.props[e]:this.state[e]}},{key:"bindRef",value:function(e){e&&(this.el=e)}},{key:"handleEnter",value:function(e){Object(h.d)(e)&&this.handleChange({target:{checked:!this.getChecked()}})}},{key:"handleChange",value:function(e){var n=this,t=this.props,a=t.onChange,i=t.onRawChange,c=t.index,r=t.inputable,o=e.target.checked;if(this.setState({checked:o},function(){return n.el.focus()}),"switch"===b&&a)a(o);else{var l=r?this.props.value:this.props.htmlValue;i&&i(l,o),l=o?l:void 0,a&&a(l,o,c)}}},{key:"handleInputChange",value:function(e){var n=this.props,t=n.onChange,a=n.index,i=0<e.length;t&&t(e,i,a)}},{key:"render",value:function(){var e=this.props,n=e.disabled,t=e.style,a=e.content,i=e.size,c=e.children,r=e.inputable,o=e.onClick,l=this.getChecked(),s="switch"===b,u=x()(Object(S.h)("_",n&&"disabled",!0===l&&"checked","indeterminate"===l&&"indeterminate",s&&"switch",{large:"large"===i,small:"small"===i}),this.props.className),d=Object(g.a)(a,2),m=d[0],p=d[1],f=s&&"small"!==i?v.a.createElement("span",{className:Object(S.h)("switch-children")},l?m:p):null,h="string"==typeof this.props.value?this.props.value:"";return v.a.createElement("label",{onKeyDown:this.handleEnter,className:u,style:t,htmlFor:this.id,tabIndex:n?void 0:0,ref:this.bindRef},f,v.a.createElement("input",{id:this.id,disabled:n,tabIndex:-1,type:s?"checkbox":b,onClick:o,onChange:this.handleChange,checked:l}),v.a.createElement("i",{className:Object(S.h)("indicator",b)}),c&&!s&&v.a.createElement("span",null,c),r&&!s&&l&&v.a.createElement(y.a,{className:Object(S.h)("text"),onChange:this.handleInputChange,value:h}),s&&v.a.createElement("span",{className:Object(S.h)("switch-indicator")}))}}]),t}(m.b);return e.defaultProps=Object(a.a)({},p.a,{htmlValue:!0,onClick:void 0,content:[]}),e}}}]);