(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[8],{1324:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(192),o=n(198),s=n(11),c=n(1325),l=n.n(c),u=n(1326),d=n.n(u),h=Object(s.b)(l.a,d.a),m=[{name:"1-base",title:Object(s.b)("基本用法 \n 组件调用通过 json 数据配置","Base \n The basic usage."),component:n(1327).default,rawText:n(1328)},{name:"2-separator",title:Object(s.b)("分隔符 \n 默认的分隔符为 '/'，可以通过 separator 属性自定义","separator \n The default separator is '/'."),component:n(1329).default,rawText:n(1330)},{name:"3-icon",title:Object(s.b)("图标 \n 带图标的面包屑","icon \n Breadcrumbs with icons"),component:n(1331).default,rawText:n(1332)}];t.default=Object(i.a)(function(e){return r.a.createElement(o.b,Object.assign({},e,{codes:void 0,source:h,examples:m}))})},1325:function(e,t){e.exports="# Breadcrumb  *面包屑*\n\n<example />\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | ---|\n| data | Array | [] | 面包屑对象数组，见 data |\n| separator | String\\|ReactNode | \"/\" | 面包屑分隔符,可以是字符串或自定义的元素|\n| keygen | string \\| function(obj):string \\| true | 必填 | 生成每一项key的辅助方法<br />为 true 时，以数据项本身作为key，相当于 (d => d)<br />为函数时，使用此函数返回值<br />为string时，使用这个string对应的数据值。如 'id'，相当于 (d => d.id) |\n\n### data\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | ---|\n| title | string\\|ReactElement | 无 | 显示内容 |\n| url | string | 无 | 链接地址，onClick 属性二选一 |\n| onClick | function | 无 | 点击事件 |"},1326:function(e,t){e.exports="# Breadcrumb\n\n<example />\n\n## API\n\n| Property | Type | Default | Description |\n| --- | --- | --- | ---|\n| data | Array | [] | The array of breadcrumb objects, see data |\n| separator | String\\|ReactNode | \"/\" | A breadcrumb separator which can be strings or custom elements |\n| keygen | string \\| function(obj):string \\| true | required | Key generator<br />When it is true, the data itself is used as the key equivalent to (d => d)<br />When it is a function, use its return value.<br />When it is a string，ues the value of the string.For example, 'id' is the same thing as (d) => d.id. |\n\n### data\n\n| Property | Type | Default | Description |\n| --- | --- | --- | ---|\n| title | string\\|ReactElement | - | Displayed content |\n| url | string | - | Link address |\n| onClick | function | - | The click event |"},1327:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(265),o=n(1363),s=[[{title:"Home",url:"#/"},{title:"aaa",url:"#/"},{title:"bbb",url:"#/"}],{title:r.a.createElement("a",{href:"/components/Button"},"Button")},{title:"Self",onClick:function(){return i.a.show("Clicked self")}}];t.default=function(){return r.a.createElement(o.a,{data:s})}},1328:function(e,t){e.exports="/**\n * cn - 基本用法\n *    -- 组件调用通过 json 数据配置\n * en - Base\n *    -- The basic usage.\n */\n\nimport React from 'react'\nimport { Breadcrumb, Message } from 'shineout'\n\nconst data = [\n  [{ title: 'Home', url: '#/' }, { title: 'aaa', url: '#/' }, { title: 'bbb', url: '#/' }],\n  { title: <a href=\"/components/Button\">Button</a> },\n  { title: 'Self', onClick: () => Message.show('Clicked self') },\n]\n\nexport default function() {\n  return <Breadcrumb data={data} />\n}\n"},1329:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(1363);function o(){return r.a.createElement("span",null,"~")}var s=[{title:"Home",url:"/"},{title:"Self"}];t.default=function(){return r.a.createElement("div",null,r.a.createElement(i.a,{data:s,separator:"|"}),r.a.createElement(i.a,{data:s,separator:r.a.createElement(o,null)}))}},1330:function(e,t){e.exports="/**\n * cn - 分隔符\n *    -- 默认的分隔符为 '/'，可以通过 separator 属性自定义\n * en - separator\n *    -- The default separator is '/'.\n */\n\nimport React from 'react'\nimport { Breadcrumb } from 'shineout'\n\nfunction Separator() {\n  return <span>~</span>\n}\n\nconst data = [{ title: 'Home', url: '/' }, { title: 'Self' }]\n\nexport default function() {\n  return (\n    <div>\n      <Breadcrumb data={data} separator=\"|\" />\n      <Breadcrumb data={data} separator={<Separator />} />\n    </div>\n  )\n}\n"},1331:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(1363),o=n(54),s=[{icon:r.a.createElement(o.a,{name:"home"}),title:"Home",url:"#/"},{title:"Menu"},{title:"Self",url:"/components/Breadcrumb"}];t.default=function(){return r.a.createElement(i.a,{data:s})}},1332:function(e,t){e.exports="/**\n * cn - 图标\n *    -- 带图标的面包屑\n * en - icon\n *    -- Breadcrumbs with icons\n */\n\nimport React from 'react'\nimport { Breadcrumb } from 'shineout'\nimport FontAwesome from '../Icon/FontAwesome'\n\nconst data = [\n  { icon: <FontAwesome name=\"home\" />, title: 'Home', url: '#/' },\n  { title: 'Menu' },\n  { title: 'Self', url: '/components/Breadcrumb' },\n]\n\nexport default function() {\n  return <Breadcrumb data={data} />\n}\n"},1363:function(e,t,n){"use strict";var a=n(15),r=n(7),i=n(8),o=n(10),s=n(2),c=n(9),l=n(0),u=n.n(l),d=n(12),h=n.n(d),m=n(380),p=n(17),f=n(5),b=n(50),v=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(i.a)(t,[{key:"renderArray",value:function(e){var n=this,t=e[0];return[u.a.createElement("span",{key:"first"},this.renderItem(t)),u.a.createElement("span",{key:"down"},u.a.createElement(m.a,{position:"bottom"},e.slice(1).map(function(e,t){return u.a.createElement("div",{className:Object(f.b)("dropdown-item"),key:t},n.renderItem(e))})),u.a.createElement("span",{className:Object(f.b)("down")}))]}},{key:"renderItem",value:function(e){var t=this.props.renderItem,n=e.title;return u.a.isValidElement(n)||(n=e.onClick||e.url?u.a.createElement("a",{onClick:e.onClick,href:e.url?e.url:"javascript:;"},e.icon," ",e.title):u.a.createElement("b",null,e.title)),t?t(e):n}},{key:"render",value:function(){var n=this,e=this.props,a=e.data,r=e.separator,i=e.keygen,t=h()(Object(f.b)("_"),this.props.className);return u.a.createElement("div",{className:t,style:this.props.style},a.map(function(e,t){return u.a.createElement("span",{key:i?Object(b.a)(e,i,t):t},Array.isArray(e)?n.renderArray(e):n.renderItem(e),t!==a.length-1?u.a.createElement("span",{className:Object(f.b)("separator")},r):null)}))}}]),t}(u.a.PureComponent);v.defaultProps=Object(a.a)({},p.a,{data:[],separator:"/"}),v.displayName="ShineoutBreadcrumb",t.a=v},197:function(e,t,n){"use strict";function a(e){return"string"!=typeof e&&console.error(new Error("str should be a string")),e&&e[0].toUpperCase()+e.slice(1)}function r(e,n){if("string"==typeof e)return e.indexOf("{")<0?e:e.replace(/\\?\{([^{}]+)\}/g,function(e,t){return"\\"===e.charAt(0)?e.slice(1):null===n[t]||void 0===n[t]?"":n[t]});if("function"!=typeof e)return"";var t=e(n);return t===n&&"object"==typeof t&&(t=Object.assign({},n)),t}n.d(t,"a",function(){return a}),n.d(t,"b",function(){return r})},213:function(e,t,n){"use strict";n.d(t,"a",function(){return c}),n.d(t,"b",function(){return l});var a=n(0),r=n.n(a),i=n(52),o=n.n(i)()(),s=o.Consumer,c=o.Provider,l=function(n){return function(t){return r.a.createElement(s,null,function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return r.a.createElement(n,Object.assign({},t,{scrollElement:e.element,scrollLeft:e.left,scrollTop:e.top}))})}}},240:function(e,t,n){"use strict";var a=n(15),r=n(7),i=n(8),o=n(10),s=n(2),c=n(9),l=n(3),u=n(0),d=n.n(u),h=n(34),m=n(197),p=n(17),f=n(5),b=n(195),v=function(e){function n(e){var t;return Object(r.a)(this,n),(t=Object(o.a)(this,Object(s.a)(n).call(this,e))).state={dismiss:0},t.bindRef=t.bindRef.bind(Object(l.a)(Object(l.a)(t))),t.dismiss=t.dismiss.bind(Object(l.a)(Object(l.a)(t))),t.handleClose=t.handleClose.bind(Object(l.a)(Object(l.a)(t))),t}return Object(c.a)(n,e),Object(i.a)(n,[{key:"componentDidUpdate",value:function(e){this.props.dismiss!==e.dismiss&&this.props.dismiss&&this.handleClose()}},{key:"bindRef",value:function(e){this.element=e}},{key:"dismiss",value:function(){var e=this.props.onClose;this.setState({dismiss:2}),"function"==typeof e&&e()}},{key:"handleClose",value:function(){var e=this;if(!(0<this.state.dismiss)){var t=this.props.duration;0<t?this.setState({dismiss:1},function(){setTimeout(e.dismiss,t)}):this.dismiss()}}},{key:"renderIcon",value:function(){var e=this.props.icon,t=this.props,n=t.type,a=t.iconSize;if("boolean"==typeof e&&(e=b.a[Object(m.a)(n)]),!e)return null;var r={width:a,height:a,marginRight:a/2};return d.a.createElement("div",{className:Object(f.a)("icon"),style:r},e)}},{key:"render",value:function(){var e=this.state.dismiss;if(2===e)return null;var t=this.props,n=t.children,a=t.className,r=t.type,i=t.onClose,o=this.renderIcon(),s=this.props.style,c=Object(f.a)("_",r,1===e&&"dismissed",i&&"with-close",o&&"with-icon");return a&&(c+=" ".concat(a)),d.a.createElement("div",{ref:this.bindRef,className:c,style:s},i&&d.a.createElement("a",{href:"javascript:;",className:Object(f.a)("close"),onClick:this.handleClose},b.a.Close),o,d.a.createElement("div",{className:Object(f.a)("content")},n))}}]),n}(h.b);v.defaultProps=Object(a.a)({},p.a,{duration:216,iconSize:14,type:"warning"}),v.displayName="ShineoutAlert",t.a=v},258:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var s=n(43),a=function(e,t){var n,a,r=t.getBoundingClientRect(),i=s.a.top,o=s.a.left;switch(e){case"top-left":n=o+r.left,a=i+r.top;break;case"top":n=o+r.left+r.width/2,a=i+r.top;break;case"top-right":n=o+r.left+r.width,a=i+r.top;break;case"left-top":n=o+r.left,a=i+r.top;break;case"left":n=o+r.left,a=i+r.top+r.height/2;break;case"left-bottom":n=o+r.left,a=i+r.bottom;break;case"right-top":n=o+r.left+r.width,a=i+r.top;break;case"right":n=o+r.left+r.width,a=i+r.top+r.height/2;break;case"right-bottom":n=o+r.left+r.width,a=i+r.bottom;break;case"bottom-left":n=o+r.left,a=i+r.top+r.height;break;case"bottom":n=o+r.left+r.width/2,a=i+r.top+r.height;break;case"bottom-right":n=o+r.left+r.width,a=i+r.top+r.height}return{left:Math.round(n),top:Math.round(a)}}},265:function(e,t,n){"use strict";var a=n(0),s=n.n(a),r=n(57),i=n.n(r),c=n(5),o=n(7),l=n(8),u=n(10),d=n(2),h=n(9),m=n(51),p=n(34),f=n(240),b=n(50),v=function(e){function n(e){var t;return Object(o.a)(this,n),(t=Object(u.a)(this,Object(d.a)(n).call(this,e))).state={messages:[]},t}return Object(h.a)(n,e),Object(l.a)(n,[{key:"addMessage",value:function(t){var e=this,n=Object(b.b)();this.setState(Object(m.a)(function(e){e.messages.push(Object.assign({id:n},t))})),0<t.duration&&setTimeout(function(){e.setState(Object(m.a)(function(e){e.messages.forEach(function(e){e.id===n&&(e.dismiss=!0)})}))},1e3*t.duration)}},{key:"removeMessage",value:function(t){var n,e=this.state.messages.filter(function(e){return e.id!==t||(e.onClose&&(n=e.onClose),!1)});0===e.length?this.props.onDestory():this.setState({messages:e}),n&&n()}},{key:"closeEvent",value:function(e,t){if(0===t)return this.removeMessage.bind(this,e)}},{key:"render",value:function(){var o=this;return[this.state.messages.map(function(e){var t=e.id,n=e.type,a=e.content,r=e.dismiss,i=e.title;return s.a.createElement("div",{key:t,className:Object(c.q)("item")},s.a.createElement(f.a,{className:Object(c.q)("msg"),dismiss:r,onClose:o.removeMessage.bind(o,t),icon:!0,iconSize:i?20:14,type:n},i&&s.a.createElement("h3",null,i),a))})]}}]),n}(p.b);v.displayName="ShineoutMessage";var y=v,g={},j={};function k(e){g[e]&&(i.a.unmountComponentAtNode(g[e]),document.body.removeChild(g[e]),delete g[e]),j[e]&&delete j[e]}function O(r){return new Promise(function(t){var e,n,a=j[r];a?t(a):i.a.render(s.a.createElement(y,{ref:function(e){j[r]=e,t(e)},onDestory:k.bind(null,r)}),(e=r,(n=document.createElement("div")).className=Object(c.q)("_",e),document.body.appendChild(n),g[e]=n))})}var E=function(s){return function(t){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:3,e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},a=e.onClose,r=e.position,i=void 0===r?"top":r,o=e.title;O(i).then(function(e){e.addMessage({content:t,duration:n,type:s,onClose:a,title:o})})}};t.a={show:E("default"),success:E("success"),info:E("info"),warn:E("warning"),warning:E("warning"),danger:E("danger"),error:E("danger"),close:function(e){e?k(e):["top","middle","top-left","top-right","bottom-left","bottom-right"].forEach(function(e){k(e)})}}},273:function(e,t,n){"use strict";var a=n(7),r=n(8),l=n(10),u=n(2),d=n(9),h=n(3),m=n(0),p=n.n(m),f=n(213),b=n(50),v=n(258);t.a=function(e){var i=e.show,o=e.hide,s=e.move,c=e.isCurrent,t=function(e){function n(e){var t;return Object(a.a)(this,n),(t=Object(l.a)(this,Object(u.a)(n).call(this,e))).handleShow=t.handleShow.bind(Object(h.a)(Object(h.a)(t))),t.tryHide=t.tryHide.bind(Object(h.a)(Object(h.a)(t))),t.elementRef=t.elementRef.bind(Object(h.a)(Object(h.a)(t))),t.id=Object(b.b)(),t}return Object(d.a)(n,e),Object(r.a)(n,[{key:"componentDidUpdate",value:function(e){if(s&&c(this.id)){var t=this.props,n=t.scrollLeft,a=t.scrollTop;if(e.scrollLeft!==n||e.scrollTop!==a){var r=this.getPosition(),i=r.left,o=r.top;s(this.id,i,o),this.tryHide()}}}},{key:"componentWillUnmount",value:function(){o()}},{key:"getElement",value:function(){return this.placeholderElement.nextSibling}},{key:"getPosition",value:function(){var e=this.props.position,t=this.getElement();return Object(v.a)(e,t)}},{key:"elementRef",value:function(e){this.placeholderElement=e}},{key:"tryHide",value:function(){var e=this.props.scrollElement,t=this.getElement().getBoundingClientRect(),n=e?e.getBoundingClientRect():{};(t.bottom<n.top||t.top>n.bottom||t.right<n.left||t.left>n.right)&&o(0)}},{key:"handleShow",value:function(){var r=this;this.showTimer&&clearTimeout(this.showTimer),this.showTimer=setTimeout(function(){var e=r.getPosition(),t=e.left,n=e.top,a=Object.assign({},r.props,{style:{left:"".concat(t,"px"),top:"".concat(n,"px")}});i(a,r.id,r.props.style)},this.props.delay)}},{key:"render",value:function(){var t=this,e=this.props,n=e.children,a=e.trigger;if(!Object(m.isValidElement)(n))return console.error(new Error("Tooltip children expect a single ReactElement.")),null;var r={key:"el"};return"hover"===a?(r.onMouseEnter=this.handleShow,r.onMouseLeave=function(){return o()}):r.onClick=function(e){e&&e.stopPropagation(),setTimeout(t.handleShow,10),n.props.onClick&&n.props.onClick()},[p.a.createElement("noscript",{ref:this.elementRef,key:"ns"}),Object(m.cloneElement)(n,r)]}}]),n}(m.PureComponent);return t.defaultProps={animation:!0,delay:0,position:"top",trigger:"hover"},Object(f.b)(t)}},274:function(e,t,n){"use strict";t.a=function(e){e&&("loading"!==document.readyState?e():document.addEventListener("DOMContentLoaded",e))}},380:function(e,t,n){"use strict";var a={};n.r(a),n.d(a,"hide",function(){return c}),n.d(a,"show",function(){return l}),n.d(a,"move",function(){return u}),n.d(a,"isCurrent",function(){return k});var r=n(0),d=n.n(r),i=n(273),o=n(57),h=n.n(o),m=n(5),s=n(274),p=document.createElement("div");p.style.display="none",Object(s.a)(function(){document.body.appendChild(p)});var f=document.createElement("div");f.className=Object(m.t)("arrow"),p.appendChild(f);var b=document.createElement("div");b.className=Object(m.t)("content"),p.appendChild(b);var v,y=null;function c(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:500;y=setTimeout(function(){p.style.display="none",p.className="",v=void 0},e)}var g=c.bind(null,0);function j(e){p.contains(e.target)||(c(0),document.removeEventListener("click",j))}function l(e,t){var n=e.position,a=e.style,r=e.content,i=e.background,o=e.border,s=e.noArrow,c=e.type;v=t,y&&clearTimeout(y),p.style.cssText="display: none",Object.keys(a).forEach(function(e){p.style[e]=a[e]}),p.setAttribute("raw-left",a.left),p.setAttribute("raw-top",a.top),p.style.background=i||"",b.style.background=i||"",f.style.background=i||"",p.style.borderColor=o||"",f.style.borderColor=o||"";var l=Object(m.t)("_",n,c);f.style.display=s?"none":"block",setTimeout(function(){p.style.display="block",p.className=l},0);var u="function"==typeof r?r(g):r;h.a.render(u,b),document.addEventListener("click",j)}function u(e,t,n){e===v&&(p.style.left="".concat(t,"px"),p.style.top="".concat(n,"px"))}function k(e){return e===v}p.addEventListener("mouseenter",function(){y&&(clearTimeout(y),document.addEventListener("click",j))});var O=n(7),E=n(8),w=n(10),C=n(2),S=n(21),T=n(9),R=n(3),N=n(34),x=n(258),A=n(4),B=n(43),L=function(e){return e.stopPropagation()},P=function(e){function n(e){var t;return Object(O.a)(this,n),(t=Object(w.a)(this,Object(C.a)(n).call(this,e))).state={show:!1},t.isRendered=!1,t.placeholderRef=t.placeholderRef.bind(Object(R.a)(Object(R.a)(t))),t.clickAway=t.clickAway.bind(Object(R.a)(Object(R.a)(t))),t.handleShow=t.handleShow.bind(Object(R.a)(Object(R.a)(t))),t.handleHide0=t.handleHide.bind(Object(R.a)(Object(R.a)(t)),0),t.handleHide500=t.handleHide.bind(Object(R.a)(Object(R.a)(t)),500),t.element=document.createElement("div"),t}return Object(T.a)(n,e),Object(E.a)(n,[{key:"componentDidMount",value:function(){Object(S.a)(Object(C.a)(n.prototype),"componentDidMount",this).call(this),this.parentElement=this.placeholder.parentElement,"hover"===this.props.trigger?(this.parentElement.addEventListener("mouseenter",this.handleShow),this.parentElement.addEventListener("mouseleave",this.handleHide500),this.element.addEventListener("mouseenter",this.handleShow),this.element.addEventListener("mouseleave",this.handleHide500)):this.parentElement.addEventListener("click",this.handleShow),document.body.appendChild(this.element)}},{key:"componentWillUnmount",value:function(){Object(S.a)(Object(C.a)(n.prototype),"componentWillUnmount",this).call(this),this.parentElement.removeEventListener("mouseenter",this.handleShow),this.parentElement.removeEventListener("mouseleave",this.handleHide500),this.parentElement.removeEventListener("click",this.handleShow),document.removeEventListener("click",this.clickAway),document.body.removeChild(this.element)}},{key:"getPositionStr",value:function(){var e=this.props.position;if(e)return e;var t=this.parentElement.getBoundingClientRect(),n=B.b.height,a=B.b.width;return e=t.top+t.height/2>n/2?"top":"bottom",t.left<100?e+="-right":t.right>a-100&&(e+="-left"),e}},{key:"placeholderRef",value:function(e){this.placeholder=e}},{key:"clickAway",value:function(e){this.parentElement.contains(e.target)||this.element.contains(e.target)||this.handleHide(0)}},{key:"handleShow",value:function(){this.closeTimer&&clearTimeout(this.closeTimer),this.state.show||(document.addEventListener("mousedown",this.clickAway),this.setState({show:!0}),this.props.onOpen&&this.props.onOpen())}},{key:"handleHide",value:function(){var e=this,t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:500;this.closeTimer=setTimeout(function(){document.removeEventListener("mousedown",e.clickAway),e.setState({show:!1}),e.props.onClose&&e.props.onClose()},t)}},{key:"toggle",value:function(e){this.closeTimer&&clearTimeout(this.closeTimer),this.setState({show:e})}},{key:"render",value:function(){var e=this.props,t=e.background,n=e.border,a=e.children,r=e.type,i=this.state.show;if(!i&&!this.isRendered)return d.a.createElement("noscript",{ref:this.placeholderRef});this.isRendered=!0;var o={background:t,borderColor:n},s=Object.assign({},this.props.style,{background:t}),c=this.getPositionStr(),l=Object(x.a)(c,this.parentElement);this.element.className=Object(m.t)("_",c,r);var u=this.element.style;return u.left="".concat(l.left,"px"),u.top="".concat(l.top,"px"),u.display=i?"block":"none",t&&(u.background=t),n&&(u.borderColor=n),h.a.createPortal([d.a.createElement("div",{key:"arrow",className:Object(m.t)("arrow"),style:o}),d.a.createElement("div",{key:"content",onClick:L,className:Object(m.t)("content"),style:s},Object(A.e)(a)?a(this.handleHide0):a)],this.element)}}]),n}(N.b);P.defaultProps={background:"",trigger:"hover"};var H=P,M=Object(i.a)(a);function D(e){return e.content?d.a.createElement(M,e):d.a.createElement(H,e)}D.displayName="ShineoutPopover";t.a=D}}]);