(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[7],{1154:function(e,n,t){"use strict";t.r(n);var o=t(0),i=t.n(o),s=t(441),r=t(447),a=t(17),c=t(1155),l=t.n(c),u=t(1156),p=t.n(u),d=Object(a.b)(l.a,p.a),h=[{name:"1-base",title:Object(a.b)("基本用法 \n 基本的使用","Base \n Basic usage"),component:t(1157).default,rawText:t(1158)},{name:"2-type",title:Object(a.b)("类型 \n 内置了 4 种类型（样式），[success, info, warning, danger]，默认为 warning","type \n There are four built-in types (styles), [success, info, warning, danger], the default value is warning."),component:t(1159).default,rawText:t(1160)},{name:"3-close",title:Object(a.b)("关闭 \n 设置 onClose 属性时，显示关闭按钮 \n onClose 为 true 时，只关闭提示，不处理 \n onClose 为函数时，关闭后调用此函数","onClose \n When the onClose property is set, the close button is displayed. \n When the onClose property is true, only hide the component. \n When the onClose is a function, call this function after hiding it."),component:t(1161).default,rawText:t(1162)},{name:"4-icon",title:Object(a.b)("内置图标 \n 设置 icon 属性可以显示内置的图标，不同类型的图标见示例","Icon \n Set the icon property to display the built-in icon."),component:t(1163).default,rawText:t(1164)}];n.default=Object(s.a)(function(e){return i.a.createElement(r.b,Object.assign({},e,{codes:void 0,source:d,examples:h}))})},1155:function(e,n){e.exports="# Alert *提示框*\n\n<example />\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| children | any | 无 | 内容，文字或react组件 |\n| className | string | 无 | 扩展className |\n| icon | ReactElement \\| boolean | 无 | 为true时，根据type属性显示状态图标。如果需要显示自定义图标，传入ReactElement。 |\n| iconSize | number | 14 | icon 的尺寸 |\n| onClose | func \\| boolean | 无 | 当 onClose 为空时，不显示关闭。如果需要关闭又不需要处理回调，设置为true即可 |\n| style | object | 无 | 最外层扩展样式 |\n| type | string | *warning* |  4 选 1，\\[*success*, *info*, *warning*, *danger(error)*] |"},1156:function(e,n){e.exports="# Alert\n\n<example />\n\n## API\n\n| Property | Type | Default | Description |\n| -------- | ---- | ------- | ----------- |\n| children | any  | - | Content, text or react component |\n| className | string | - | Extend className |\n| icon | ReactElement \\| boolean | - | When the type is true, the status icon is displayed according to the type property. If you need to display a custom icon, pass in ReactElement. |\n| iconSize | number | 14 | The size for icon |\n| onClose | func \\| boolean | - | When onClose is empty, no close is displayed. If you need to close and do not need to handle callbacks, set it true. |\n| style | object | - | Container element style |\n| type | string | *warning* | options: \\[*success*, *info*, *warning*, *danger(error)*] |"},1157:function(e,n,t){"use strict";t.r(n);var o=t(0),i=t.n(o),s=t(488);n.default=function(){return i.a.createElement(s.a,null,i.a.createElement("h3",null,"Title"),"Some content.")}},1158:function(e,n){e.exports="/**\n * cn - 基本用法\n *    -- 基本的使用\n * en - Base\n *    -- Basic usage\n */\nimport React from 'react'\nimport { Alert } from 'shineout'\n\nexport default function() {\n  return (\n    <Alert>\n      <h3>Title</h3>\n      Some content.\n    </Alert>\n  )\n}\n"},1159:function(e,n,t){"use strict";t.r(n);var o=t(0),i=t.n(o),s=t(488);n.default=function(){return i.a.createElement("div",null,i.a.createElement(s.a,{type:"success"},"Success Type."),i.a.createElement(s.a,{type:"info"},"Info Type."),i.a.createElement(s.a,{type:"warning"},"Warning Type."),i.a.createElement(s.a,{type:"danger"},"Danger Type."))}},1160:function(e,n){e.exports='/**\n * cn - 类型\n *    -- 内置了 4 种类型（样式），[success, info, warning, danger]，默认为 warning\n * en - type\n *    -- There are four built-in types (styles), [success, info, warning, danger], the default value is warning.\n */\nimport React from \'react\'\nimport { Alert } from \'shineout\'\n\nexport default function() {\n  return (\n    <div>\n      <Alert type="success">Success Type.</Alert>\n      <Alert type="info">Info Type.</Alert>\n      <Alert type="warning">Warning Type.</Alert>\n      <Alert type="danger">Danger Type.</Alert>\n    </div>\n  )\n}\n'},1161:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return d});var o=t(8),i=t(9),s=t(11),r=t(5),a=t(10),c=t(3),l=t(0),u=t.n(l),p=t(488),d=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(r.a)(t).call(this,e))).state={placeholder:""},n.handleClose=n.handleClose.bind(Object(c.a)(Object(c.a)(n))),n}return Object(a.a)(t,e),Object(i.a)(t,[{key:"handleClose",value:function(){this.setState({placeholder:"Alert was dismissed."})}},{key:"render",value:function(){var e=this.state.placeholder;return u.a.createElement("div",null,u.a.createElement(p.a,{onClose:!0},"Alert onClose=true"),u.a.createElement(p.a,{onClose:this.handleClose},"Alert onClose=function"),e&&u.a.createElement(p.a,{type:"info"},e))}}]),t}(l.PureComponent)},1162:function(e,n){e.exports="/**\n * cn - 关闭\n *    -- 设置 onClose 属性时，显示关闭按钮\n *    -- onClose 为 true 时，只关闭提示，不处理\n *    -- onClose 为函数时，关闭后调用此函数\n * en - onClose\n *    -- When the onClose property is set, the close button is displayed.\n *    -- When the onClose property is true, only hide the component.\n *    -- When the onClose is a function, call this function after hiding it.\n */\nimport React, { PureComponent } from 'react'\nimport { Alert } from 'shineout'\n\nexport default class extends PureComponent {\n  constructor(props) {\n    super(props)\n\n    this.state = {\n      placeholder: '',\n    }\n\n    this.handleClose = this.handleClose.bind(this)\n  }\n\n  handleClose() {\n    this.setState({\n      placeholder: 'Alert was dismissed.',\n    })\n  }\n\n  render() {\n    const { placeholder } = this.state\n    return (\n      <div>\n        <Alert onClose>Alert onClose=true</Alert>\n\n        <Alert onClose={this.handleClose}>Alert onClose=function</Alert>\n\n        {placeholder && <Alert type=\"info\">{placeholder}</Alert>}\n      </div>\n    )\n  }\n}\n"},1163:function(e,n,t){"use strict";t.r(n);var o=t(0),i=t.n(o),s=t(488);n.default=function(){return i.a.createElement("div",null,i.a.createElement(s.a,{type:"success",icon:!0},"Success Type."),i.a.createElement(s.a,{type:"info",icon:!0},"Info Type."),i.a.createElement(s.a,{type:"warning",icon:!0},"Warning Type."),i.a.createElement(s.a,{type:"danger",icon:!0},"Danger Type."),i.a.createElement(s.a,{icon:!0,iconSize:24,style:{padding:20}},i.a.createElement("h3",null,"Set iconSize"),"iconSize=24"))}},1164:function(e,n){e.exports='/**\n * cn - 内置图标\n *    -- 设置 icon 属性可以显示内置的图标，不同类型的图标见示例\n * en - Icon\n *    -- Set the icon property to display the built-in icon.\n */\nimport React from \'react\'\nimport { Alert } from \'shineout\'\n\nexport default function() {\n  return (\n    <div>\n      <Alert type="success" icon>\n        Success Type.\n      </Alert>\n      <Alert type="info" icon>\n        Info Type.\n      </Alert>\n      <Alert type="warning" icon>\n        Warning Type.\n      </Alert>\n      <Alert type="danger" icon>\n        Danger Type.\n      </Alert>\n\n      <Alert icon iconSize={24} style={{ padding: 20 }}>\n        <h3>Set iconSize</h3>\n        iconSize=24\n      </Alert>\n    </div>\n  )\n}\n'},446:function(e,n,t){"use strict";function o(e){return"string"!=typeof e&&console.error(new Error("str should be a string")),e&&e[0].toUpperCase()+e.slice(1)}function i(e,t){if("string"==typeof e)return e.indexOf("{")<0?e:e.replace(/\\?\{([^{}]+)\}/g,function(e,n){return"\\"===e.charAt(0)?e.slice(1):null===t[n]||void 0===t[n]?"":t[n]});if("function"!=typeof e)return"";var n=e(t);return n===t&&"object"==typeof n&&(n=Object.assign({},t)),n}t.d(n,"a",function(){return o}),t.d(n,"b",function(){return i})},488:function(e,n,t){"use strict";var o=t(22),i=t(8),s=t(9),r=t(11),a=t(5),c=t(10),l=t(3),u=t(0),p=t.n(u),d=t(40),h=t(446),f=t(25),m=t(6),y=t(444),b=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(r.a)(this,Object(a.a)(t).call(this,e))).state={dismiss:0},n.bindRef=n.bindRef.bind(Object(l.a)(Object(l.a)(n))),n.dismiss=n.dismiss.bind(Object(l.a)(Object(l.a)(n))),n.handleClose=n.handleClose.bind(Object(l.a)(Object(l.a)(n))),n}return Object(c.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.dismiss!==e.dismiss&&this.props.dismiss&&this.handleClose()}},{key:"bindRef",value:function(e){this.element=e}},{key:"dismiss",value:function(){var e=this.props.onClose;this.setState({dismiss:2}),"function"==typeof e&&e()}},{key:"handleClose",value:function(){var e=this;if(!(0<this.state.dismiss)){var n=this.props.duration;0<n?this.setState({dismiss:1},function(){setTimeout(e.dismiss,n)}):this.dismiss()}}},{key:"renderIcon",value:function(){var e=this.props.icon,n=this.props,t=n.type,o=n.iconSize;if("boolean"==typeof e&&(e=y.a[Object(h.a)(t)]),!e)return null;var i={width:o,height:o,marginRight:o/2};return p.a.createElement("div",{className:Object(m.a)("icon"),style:i},e)}},{key:"render",value:function(){var e=this.state.dismiss;if(2===e)return null;var n=this.props,t=n.children,o=n.className,i=n.type,s=n.onClose,r=this.renderIcon(),a=this.props.style,c=Object(m.a)("_",i,1===e&&"dismissed",s&&"with-close",r&&"with-icon");return o&&(c+=" ".concat(o)),p.a.createElement("div",{ref:this.bindRef,className:c,style:a},s&&p.a.createElement("a",{href:"javascript:;",className:Object(m.a)("close"),onClick:this.handleClose},y.a.Close),r,p.a.createElement("div",{className:Object(m.a)("content")},t))}}]),t}(d.b);b.defaultProps=Object(o.a)({},f.a,{duration:216,iconSize:14,type:"warning"}),b.displayName="ShineoutAlert",n.a=b}}]);