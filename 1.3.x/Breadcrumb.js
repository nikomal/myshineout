(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[8],{1334:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(441),s=n(447),o=n(17),c=n(1335),u=n.n(c),l=n(1336),d=n.n(l),m=Object(o.b)(u.a,d.a),f=[{name:"1-base",title:Object(o.b)("基本用法 \n 组件调用通过 json 数据配置","Base \n The basic usage."),component:n(1337).default,rawText:n(1338)},{name:"2-separator",title:Object(o.b)("分隔符 \n 默认的分隔符为 '/'，可以通过 separator 属性自定义","separator \n The default separator is '/'."),component:n(1339).default,rawText:n(1340)},{name:"3-icon",title:Object(o.b)("图标 \n 带图标的面包屑","icon \n Breadcrumbs with icons"),component:n(1341).default,rawText:n(1342)}];t.default=Object(i.a)(function(e){return r.a.createElement(s.b,Object.assign({},e,{codes:void 0,source:m,examples:f}))})},1335:function(e,t){e.exports="# Breadcrumb  *面包屑*\n\n<example />\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | ---|\n| data | Array | [] | 面包屑对象数组，见 data |\n| separator | String\\|ReactNode | \"/\" | 面包屑分隔符,可以是字符串或自定义的元素|\n| keygen | string \\| function(obj):string \\| true | 必填 | 生成每一项key的辅助方法<br />为 true 时，以数据项本身作为key，相当于 (d => d)<br />为函数时，使用此函数返回值<br />为string时，使用这个string对应的数据值。如 'id'，相当于 (d => d.id) |\n\n### data\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | ---|\n| title | string\\|ReactElement | 无 | 显示内容 |\n| url | string | 无 | 链接地址，onClick 属性二选一 |\n| onClick | function | 无 | 点击事件 |"},1336:function(e,t){e.exports="# Breadcrumb\n\n<example />\n\n## API\n\n| Property | Type | Default | Description |\n| --- | --- | --- | ---|\n| data | Array | [] | The array of breadcrumb objects, see data |\n| separator | String\\|ReactNode | \"/\" | A breadcrumb separator which can be strings or custom elements |\n| keygen | string \\| function(obj):string \\| true | required | Key generator<br />When it is true, the data itself is used as the key equivalent to (d => d)<br />When it is a function, use its return value.<br />When it is a string，ues the value of the string.For example, 'id' is the same thing as (d) => d.id. |\n\n### data\n\n| Property | Type | Default | Description |\n| --- | --- | --- | ---|\n| title | string\\|ReactElement | - | Displayed content |\n| url | string | - | Link address |\n| onClick | function | - | The click event |"},1337:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(502),s=n(1373),o=[[{title:"Home",url:"#home"},{title:"aaa",url:"#aaa"},{title:"bbb",url:"#bbb"}],{title:r.a.createElement("a",{href:"/components/Button"},"Button")},{title:"Self",onClick:function(){return i.a.show("Clicked self")}}];t.default=function(){return r.a.createElement(s.a,{data:o})}},1338:function(e,t){e.exports="/**\n * cn - 基本用法\n *    -- 组件调用通过 json 数据配置\n * en - Base\n *    -- The basic usage.\n */\n\nimport React from 'react'\nimport { Breadcrumb, Message } from 'shineout'\n\nconst data = [\n  [{ title: 'Home', url: '#home' }, { title: 'aaa', url: '#aaa' }, { title: 'bbb', url: '#bbb' }],\n  { title: <a href=\"/components/Button\">Button</a> },\n  { title: 'Self', onClick: () => Message.show('Clicked self') },\n]\n\nexport default function() {\n  return <Breadcrumb data={data} />\n}\n"},1339:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(1373);function s(){return r.a.createElement("span",null,"~")}var o=[{title:"Home",url:"/"},{title:"Self"}];t.default=function(){return r.a.createElement("div",null,r.a.createElement(i.a,{data:o,separator:"|"}),r.a.createElement(i.a,{data:o,separator:r.a.createElement(s,null)}))}},1340:function(e,t){e.exports="/**\n * cn - 分隔符\n *    -- 默认的分隔符为 '/'，可以通过 separator 属性自定义\n * en - separator\n *    -- The default separator is '/'.\n */\n\nimport React from 'react'\nimport { Breadcrumb } from 'shineout'\n\nfunction Separator() {\n  return <span>~</span>\n}\n\nconst data = [{ title: 'Home', url: '/' }, { title: 'Self' }]\n\nexport default function() {\n  return (\n    <div>\n      <Breadcrumb data={data} separator=\"|\" />\n      <Breadcrumb data={data} separator={<Separator />} />\n    </div>\n  )\n}\n"},1341:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(1373),s=n(102),o=[{icon:r.a.createElement(s.a,{name:"home"}),title:"Home",url:"#home"},{title:"Menu"},{title:"Self",url:"/components/Breadcrumb"}];t.default=function(){return r.a.createElement(i.a,{data:o})}},1342:function(e,t){e.exports="/**\n * cn - 图标\n *    -- 带图标的面包屑\n * en - icon\n *    -- Breadcrumbs with icons\n */\n\nimport React from 'react'\nimport { Breadcrumb } from 'shineout'\nimport FontAwesome from '../Icon/FontAwesome'\n\nconst data = [\n  { icon: <FontAwesome name=\"home\" />, title: 'Home', url: '#home' },\n  { title: 'Menu' },\n  { title: 'Self', url: '/components/Breadcrumb' },\n]\n\nexport default function() {\n  return <Breadcrumb data={data} />\n}\n"},1373:function(e,t,n){"use strict";var a=n(22),r=n(8),i=n(9),s=n(11),o=n(5),c=n(10),u=n(0),l=n.n(u),d=n(15),m=n.n(d),f=n(437),p=n(25),b=n(6),h=n(54),v=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(i.a)(t,[{key:"renderArray",value:function(e){var n=this,t=e[0];return[l.a.createElement("span",{key:"first"},this.renderItem(t)),l.a.createElement("span",{key:"down"},l.a.createElement(f.a,{position:"bottom"},e.slice(1).map(function(e,t){return l.a.createElement("div",{className:Object(b.b)("dropdown-item"),key:t},n.renderItem(e))})),l.a.createElement("span",{className:Object(b.b)("down")}))]}},{key:"renderItem",value:function(e){var t=this.props.renderItem,n=e.title;return l.a.isValidElement(n)||(n=e.onClick||e.url?l.a.createElement("a",{onClick:e.onClick,href:e.url?e.url:"javascript:;"},e.icon," ",e.title):l.a.createElement("b",null,e.title)),t?t(e):n}},{key:"render",value:function(){var n=this,e=this.props,a=e.data,r=e.separator,i=e.keygen,t=m()(Object(b.b)("_"),this.props.className);return l.a.createElement("div",{className:t,style:this.props.style},a.map(function(e,t){return l.a.createElement("span",{key:i?Object(h.a)(e,i,t):t},Array.isArray(e)?n.renderArray(e):n.renderItem(e),t!==a.length-1?l.a.createElement("span",{className:Object(b.b)("separator")},r):null)}))}}]),t}(l.a.PureComponent);v.defaultProps=Object(a.a)({},p.a,{data:[],separator:"/"}),v.displayName="ShineoutBreadcrumb",t.a=v},446:function(e,t,n){"use strict";function a(e){return"string"!=typeof e&&console.error(new Error("str should be a string")),e&&e[0].toUpperCase()+e.slice(1)}function r(e,n){if("string"==typeof e)return e.indexOf("{")<0?e:e.replace(/\\?\{([^{}]+)\}/g,function(e,t){return"\\"===e.charAt(0)?e.slice(1):null===n[t]||void 0===n[t]?"":n[t]});if("function"!=typeof e)return"";var t=e(n);return t===n&&"object"==typeof t&&(t=Object.assign({},n)),t}n.d(t,"a",function(){return a}),n.d(t,"b",function(){return r})},488:function(e,t,n){"use strict";var a=n(22),r=n(8),i=n(9),s=n(11),o=n(5),c=n(10),u=n(3),l=n(0),d=n.n(l),m=n(40),f=n(446),p=n(25),b=n(6),h=n(444),v=function(e){function n(e){var t;return Object(r.a)(this,n),(t=Object(s.a)(this,Object(o.a)(n).call(this,e))).state={dismiss:0},t.bindRef=t.bindRef.bind(Object(u.a)(Object(u.a)(t))),t.dismiss=t.dismiss.bind(Object(u.a)(Object(u.a)(t))),t.handleClose=t.handleClose.bind(Object(u.a)(Object(u.a)(t))),t}return Object(c.a)(n,e),Object(i.a)(n,[{key:"componentDidUpdate",value:function(e){this.props.dismiss!==e.dismiss&&this.props.dismiss&&this.handleClose()}},{key:"bindRef",value:function(e){this.element=e}},{key:"dismiss",value:function(){var e=this.props.onClose;this.setState({dismiss:2}),"function"==typeof e&&e()}},{key:"handleClose",value:function(){var e=this;if(!(0<this.state.dismiss)){var t=this.props.duration;0<t?this.setState({dismiss:1},function(){setTimeout(e.dismiss,t)}):this.dismiss()}}},{key:"renderIcon",value:function(){var e=this.props.icon,t=this.props,n=t.type,a=t.iconSize;if("boolean"==typeof e&&(e=h.a[Object(f.a)(n)]),!e)return null;var r={width:a,height:a,marginRight:a/2};return d.a.createElement("div",{className:Object(b.a)("icon"),style:r},e)}},{key:"render",value:function(){var e=this.state.dismiss;if(2===e)return null;var t=this.props,n=t.children,a=t.className,r=t.type,i=t.onClose,s=this.renderIcon(),o=this.props.style,c=Object(b.a)("_",r,1===e&&"dismissed",i&&"with-close",s&&"with-icon");return a&&(c+=" ".concat(a)),d.a.createElement("div",{ref:this.bindRef,className:c,style:o},i&&d.a.createElement("a",{href:"javascript:;",className:Object(b.a)("close"),onClick:this.handleClose},h.a.Close),s,d.a.createElement("div",{className:Object(b.a)("content")},n))}}]),n}(m.b);v.defaultProps=Object(a.a)({},p.a,{duration:216,iconSize:14,type:"warning"}),v.displayName="ShineoutAlert",t.a=v},502:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(41),i=n.n(r),c=n(6),s=n(8),u=n(9),l=n(11),d=n(5),m=n(10),f=n(100),p=n(40),b=n(488),h=n(54),v=function(e){function n(e){var t;return Object(s.a)(this,n),(t=Object(l.a)(this,Object(d.a)(n).call(this,e))).state={messages:[]},t}return Object(m.a)(n,e),Object(u.a)(n,[{key:"addMessage",value:function(t){var e=this,n=Object(h.b)();this.setState(Object(f.a)(function(e){e.messages.push(Object.assign({id:n},t))})),0<t.duration&&setTimeout(function(){e.setState(Object(f.a)(function(e){e.messages.forEach(function(e){e.id===n&&(e.dismiss=!0)})}))},1e3*t.duration)}},{key:"removeMessage",value:function(t){var n,e=this.state.messages.filter(function(e){return e.id!==t||(e.onClose&&(n=e.onClose),!1)});0===e.length?this.props.onDestory():this.setState({messages:e}),n&&n()}},{key:"closeEvent",value:function(e,t){if(0===t)return this.removeMessage.bind(this,e)}},{key:"render",value:function(){var s=this;return[this.state.messages.map(function(e){var t=e.id,n=e.type,a=e.content,r=e.dismiss,i=e.title;return o.a.createElement("div",{key:t,className:Object(c.q)("item")},o.a.createElement(b.a,{className:Object(c.q)("msg"),dismiss:r,onClose:s.removeMessage.bind(s,t),icon:!0,iconSize:i?20:14,type:n},i&&o.a.createElement("h3",null,i),a))})]}}]),n}(p.b);v.displayName="ShineoutMessage";var y=v,g={},j={};function O(e){g[e]&&(i.a.unmountComponentAtNode(g[e]),document.body.removeChild(g[e]),delete g[e]),j[e]&&delete j[e]}function k(r){return new Promise(function(t){var e,n,a=j[r];a?t(a):i.a.render(o.a.createElement(y,{ref:function(e){j[r]=e,t(e)},onDestory:O.bind(null,r)}),(e=r,(n=document.createElement("div")).className=Object(c.q)("_",e),document.body.appendChild(n),g[e]=n))})}var E=function(o){return function(t){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:3,e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},a=e.onClose,r=e.position,i=void 0===r?"top":r,s=e.title;k(i).then(function(e){e.addMessage({content:t,duration:n,type:o,onClose:a,title:s})})}};t.a={show:E("default"),success:E("success"),info:E("info"),warn:E("warning"),warning:E("warning"),danger:E("danger"),error:E("danger"),close:function(e){e?O(e):["top","middle","top-left","top-right","bottom-left","bottom-right"].forEach(function(e){O(e)})}}}}]);