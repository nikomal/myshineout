webpackJsonp([19],{1218:function(e,t){e.exports='# Breadcrumb  *面包屑*\n\n<example />\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | ---|\n| data | Array | [] | 面包屑对象数组,对象属性可选值为: <br />title: 面包屑显示文字<br />url: 地址<br />icon: 图标,可以使用Icon组件生成或者自定义图标组件|\n| separator | String\\|ReactNode | "/" | 面包屑分隔符,可以是字符串或自定义的元素|\n| keygen | String \\| Function | "id" | key生成规则,如果为function,参数为单条数据, 并以返回值作为key\n'},1219:function(e,t){e.exports="# Breadcrumb\n\n<example />"},1220:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(583),a=n(1),o=n.n(a),i=[{id:"1",title:"Home",url:"#"},{id:"2",title:"Menu"},{id:"3",title:"Self"}];t.default=function(){return o.a.createElement(r.a,{data:i})}},1221:function(e,t){e.exports="/**\n * cn - 基本用法\n * en - base\n */\n\nimport React from 'react';\nimport { Breadcrumb } from 'shineout';\n\nconst data = [{\n  id: '1',\n  title: 'Home',\n  url: '#',\n}, {\n  id: '2',\n  title: 'Menu',\n}, {\n  id: '3',\n  title: 'Self',\n}]\n\nexport default function () {\n  return (\n    <Breadcrumb data={data} />\n  )\n}\n"},1222:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(583),a=n(1),o=n.n(a);function i(){return o.a.createElement("span",null,"~")}var c=[{title:"Home",url:"#"},{title:"Self",url:"https://www.baidu.com"}];t.default=function(){return o.a.createElement(a.Fragment,null,o.a.createElement(r.a,{keygen:"title",data:c,separator:"|"}),o.a.createElement(r.a,{keygen:function(e){return e.title+"2"},data:c,separator:o.a.createElement(i,null)}))}},1223:function(e,t){e.exports="/**\n * cn - 自定义分隔符(字符串和reactNode)\n * en - separator(string and reactNode)\n */\n\nimport React, { Fragment } from 'react'\nimport { Breadcrumb } from 'shineout'\n\nfunction Separator() {\n  return <span>~</span>\n}\n\nconst data = [{\n  title: 'Home',\n  url: '#',\n}, {\n  title: 'Self',\n  url: 'https://www.baidu.com',\n}]\n\nexport default function () {\n  return (\n    <Fragment>\n      <Breadcrumb keygen=\"title\" data={data} separator=\"|\" />\n      <Breadcrumb keygen={d => (`${d.title}2`)} data={data} separator={<Separator />} />\n    </Fragment>\n  )\n}\n\n"},1224:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(583),a=n(538),o=n(1),i=n.n(o),c=Object(a.a)("//at.alicdn.com/t/font_550076_aqfu50lfa47bke29.css"),u=[{id:"1",icon:i.a.createElement(c,{name:"info"}),url:"#"},{id:"2",title:"Menu"},{id:"3",title:"Self",url:"https://www.baidu.com"}];t.default=function(){return i.a.createElement(r.a,{data:u})}},1225:function(e,t){e.exports="/**\n * cn - 图标\n * en - icon\n */\n\nimport React from 'react'\nimport { Breadcrumb, Icon } from 'shineout'\n\n\nconst MyIcon = Icon('//at.alicdn.com/t/font_550076_aqfu50lfa47bke29.css')\n\nconst data = [{\n  id: '1',\n  icon: <MyIcon name=\"info\" />,\n  url: '#',\n}, {\n  id: '2',\n  title: 'Menu',\n}, {\n  id: '3',\n  title: 'Self',\n  url: 'https://www.baidu.com',\n}]\n\nexport default function () {\n  return (\n    <Breadcrumb data={data} />\n  )\n}\n"},1262:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),a=n.n(r),o=n(119),i=n(118),c=n(78),u=n(1218),l=n.n(u),f=n(1219),s=n.n(f),d=Object(c.a)(l.a,s.a),p=[{title:Object(c.a)("基本用法","base"),component:n(1220).default,rawText:n(1221)},{title:Object(c.a)("自定义分隔符(字符串和reactNode)","separator(string and reactNode)"),component:n(1222).default,rawText:n(1223)},{title:Object(c.a)("图标","icon"),component:n(1224).default,rawText:n(1225)}];t.default=Object(o.a)(function(e){return a.a.createElement(i.b,Object.assign({},e,{codes:void 0,source:d,examples:p}))})},538:function(e,t,n){"use strict";var r=n(1),a=n.n(r),o=(n(4),n(48)),i=n.n(o),c=n(49),u=n(56);function l(e){var t=e.children,n=e.prefix,r=e.type,o=e.name,c=e.fontFamily,l=e.fontSize,f=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["children","prefix","type","name","fontFamily","fontSize"]),s=i()(Object(u.i)("_",r),e.className,n+"-"+o),d=Object.assign({},{fontFamily:c,fontSize:l},e.style);return a.a.createElement("i",Object.assign({},f,{className:s,style:d}),t)}l.defaultProps=Object.assign({},c.a,{prefix:"icon",fontFamily:"iconfont",name:"",type:"default"});var f=l;t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"iconfont",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"icon";if(e||console.warning('you may add a "url" to create a icon '),!Array.from(document.getElementsByTagName("link")).find(function(t){return t.getAttribute("href")===e})){var r=document.createElement("link");r.setAttribute("rel","stylesheet"),r.setAttribute("type","text/css"),r.setAttribute("href",e),document.head.appendChild(r)}return function(e){return a.a.createElement(f,Object.assign({fontFamily:t,prefix:n},e))}}},583:function(e,t,n){"use strict";var r=n(1),a=n.n(r),o=n(4),i=(n.n(o),n(48)),c=n.n(i),u=n(49),l=n(56),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.a.PureComponent),f(t,[{key:"render",value:function(){var e=this.props,t=e.data,n=e.separator,r=e.keygen,o=c()(Object(l.b)("_"),this.props.className);return a.a.createElement("div",{className:o},t.map(function(e,o){return a.a.createElement("span",{key:"string"==typeof r?e[r]:r(e)},a.a.createElement("span",null,a.a.createElement("a",{href:e.url?e.url:"javascript:;"},e.icon,e.title)),o!==t.length-1?a.a.createElement("span",null,n):null)}))}}]),t}();s.defaultProps=Object.assign({},u.a,{dataSource:[],separator:"/",keygen:"id"}),t.a=s}});