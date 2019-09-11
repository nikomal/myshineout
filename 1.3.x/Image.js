(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[26],{224:function(e,t,n){"use strict";t.a=function(e){var t=0,n=0,a=0,i=0;return"detail"in e&&(n=e.detail),"wheelDelta"in e&&(n=-e.wheelDelta/120),"wheelDeltaY"in e&&(n=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(t=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(t=n,n=0),a=10*t,i=10*n,"deltaY"in e&&(i=e.deltaY),"deltaX"in e&&(a=e.deltaX),(a||i)&&e.deltaMode&&(1===e.deltaMode?(a*=40,i*=40):(a*=800,i*=800)),a&&!t&&(t=a<1?-1:1),i&&!n&&(n=i<1?-1:1),{spinX:t,spinY:n,pixelX:a,pixelY:i}}},265:function(e,t,n){"use strict";var a=n(7),i=n(8),r=n(10),l=n(2),o=n(21),s=n(9),c=n(3),h=n(0),u=n.n(h),d=n(12),m=n.n(d),p=n(34),f=n(208),g=n(5),b=n(57),y=n.n(b),v=n(51),w=n(224),j=n(195),k=n(45),O=function(e){function n(e){var t;return Object(a.a)(this,n),(t=Object(r.a)(this,Object(l.a)(n).call(this,e))).state={loading:!0,status:0,style:{maxHeight:e.maxHeight,maxWidth:e.maxWidth}},t.handleMove=t.handleMove.bind(Object(c.a)(Object(c.a)(t))),t.handleResize=t.handleResize.bind(Object(c.a)(Object(c.a)(t))),t.handleLoaded=t.handleLoaded.bind(Object(c.a)(Object(c.a)(t))),t}return Object(s.a)(n,e),Object(i.a)(n,[{key:"componentDidUpdate",value:function(e){e.src!==this.props.src&&1===this.state.status&&(this.setState({loading:!0,status:0,style:{maxHeight:this.props.maxHeight,maxWidth:this.props.maxWidth}}),this.props.lockScroll(!1))}},{key:"move",value:function(e,t){var n=this.element.getBoundingClientRect(),a=this.element.querySelector("img"),i=n.width-100,r=n.height-100,l=(e-n.left-50)/i,o=(t-n.top-50)/r;this.element.scrollTop=(a.offsetHeight-r)*o,this.element.scrollLeft=(a.offsetWidth-i)*l}},{key:"handleLoaded",value:function(){this.setState({loading:!1})}},{key:"handleMove",value:function(e){this.move(e.clientX,e.clientY)}},{key:"handleResize",value:function(e){var t=this,n=this.props,a=n.maxHeight,i=n.maxWidth;if("center"===n.position){var r=1===this.state.status?0:1,l=e.clientX,o=e.clientY;this.setState(Object(v.a)(function(e){e.status=r,e.style=0===r?{maxHeight:a,maxWidth:i}:void 0}),function(){0!==r&&t.move(l,o)}),this.props.lockScroll(1===r)}}},{key:"render",value:function(){var t=this,e=this.props,n=e.maxHeight,a=e.maxWidth,i=e.src,r=this.state,l=r.status,o=r.loading,s={maxHeight:n,maxWidth:a,cursor:"center"===this.props.position?1===l?"zoom-out":"zoom-in":"pointer"};1===l&&(s.overflow="scroll",s.borderRightWidth=0,s.borderBottomWidth=0);var c=1===l?this.handleMove:void 0;return u.a.createElement("div",{onClick:this.handleResize,onMouseMove:c,ref:function(e){t.element=e},style:s,className:Object(g.m)("magnify")},u.a.createElement("img",{onLoad:this.handleLoaded,src:i,alt:"",style:this.state.style}),o&&u.a.createElement("div",{className:Object(g.m)("magnify-loading")},u.a.createElement(k.a,{size:30})))}}]),n}(p.b),x=n(44),E=function(e){function n(e){var t;return Object(a.a)(this,n),(t=Object(r.a)(this,Object(l.a)(n).call(this,e))).state={current:e.current,direction:"init"},t.handleScroll=t.handleScroll.bind(Object(c.a)(Object(c.a)(t))),t.lockScroll=t.lockScroll.bind(Object(c.a)(Object(c.a)(t))),t.scrollX=0,t.rawScroll=!1,t}return Object(s.a)(n,e),Object(i.a)(n,[{key:"componentDidMount",value:function(){Object(o.a)(Object(l.a)(n.prototype),"componentDidMount",this).call(this),document.addEventListener("wheel",this.handleScroll,{passive:!1})}},{key:"componentWillUnmount",value:function(){Object(o.a)(Object(l.a)(n.prototype),"componentWillUnmount",this).call(this),document.removeEventListener("wheel",this.handleScroll,{passive:!1})}},{key:"lockScroll",value:function(e){this.rawScroll=e}},{key:"handleClick",value:function(t){var e=this,n=this.props.images.length;this.setState(Object(v.a)(function(e){e.current+=t,e.current<0?e.current=0:e.current>=n?e.current=n-1:e.direction=1===t?"forward":"backward"}),function(){setTimeout(function(){e.setState({direction:"init"})},400)})}},{key:"handleScroll",value:function(e){var t=this;if(!this.rawScroll&&(e.preventDefault(),0===this.scrollX)){var n=Object(w.a)(e);this.scrollX+=n.spinX,this.scrollX<0&&this.handleClick(-1),0<this.scrollX&&this.handleClick(1),this.scrollTimer=setTimeout(function(){t.scrollX=0},1e3)}}},{key:"renderImage",value:function(e,t){var n,a=x.b.height,i=x.b.width;return"center"!==t&&(n=this.handleClick.bind(this,"left"===t?-1:1)),u.a.createElement("div",{key:e.key,className:Object(g.m)(t,this.state.direction),onClick:n},u.a.createElement("a",{href:"javascript:;",onClick:this.props.onClose,className:Object(g.m)("close")},j.a.Close),u.a.createElement(O,{maxWidth:i-400,maxHeight:a-160,position:t,src:e.src,lockScroll:this.lockScroll}))}},{key:"render",value:function(){var e=this.state.current,t=this.props,n=t.images,a=t.onClose,i=n[e],r=[];return r.push(u.a.createElement("div",{key:"overlay",className:Object(g.m)("overlay"),onClick:a})),r.push(this.renderImage(i,"center")),n[e-1]&&r.push(this.renderImage(n[e-1],"left")),n[e+1]&&r.push(this.renderImage(n[e+1],"right")),r}}]),n}(p.b);E.defaultProps={current:0};var _,I=E;function T(){document.removeEventListener("keydown",S),y.a.unmountComponentAtNode(_),document.body.removeChild(_),_=null}function S(e){27===e.keyCode&&T()}var C=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0;Array.isArray(e)||(e=[e]);var n=_||(_=document.createElement("div"),document.body.appendChild(_),_.className=Object(g.m)("gallery"),_);document.addEventListener("keydown",S),y.a.render(u.a.createElement(I,{onClose:T,current:t,images:e}),n)},R=n(125),z=function(e){function n(e){var t;return Object(a.a)(this,n),(t=Object(r.a)(this,Object(l.a)(n).call(this,e))).state={status:0},t.bindElement=t.bindElement.bind(Object(c.a)(Object(c.a)(t))),t.markToRender=t.markToRender.bind(Object(c.a)(Object(c.a)(t))),t.handleAlt=t.handleAlt.bind(Object(c.a)(Object(c.a)(t))),t.handleClick=t.handleClick.bind(Object(c.a)(Object(c.a)(t))),t}return Object(s.a)(n,e),Object(i.a)(n,[{key:"componentDidMount",value:function(){Object(o.a)(Object(l.a)(n.prototype),"componentDidMount",this).call(this),this.props.lazy?this.lazyId=Object(f.a)({element:this.element,render:this.markToRender}):this.markToRender()}},{key:"componentWillUnmount",value:function(){Object(o.a)(Object(l.a)(n.prototype),"componentWillUnmount",this).call(this),Object(f.b)(this.lazyId),delete this.image}},{key:"bindElement",value:function(e){this.element=e}},{key:"markToRender",value:function(){var e=this;if(this.props.src){delete this.image;var t=new window.Image;t.onload=function(){return e.setState({status:1})},t.onerror=this.handleAlt,t.src=this.props.src,this.image=t}else this.handleAlt()}},{key:"handleAlt",value:function(){var e=this,t=this.props.alt;if(t){var n=new window.Image;n.onload=function(){return e.setState({status:2})},n.onerror=function(){return e.setState({status:3})},n.src=t}else this.setState({status:3})}},{key:"handleClick",value:function(e){var t=this.props,n=t.onClick,a=t.target,i=t.src,r=t.href;n?n(e):r&&"_modal"===a&&(e.preventDefault(),C({thumb:i,src:r||i,key:"key"}))}},{key:"renderType",value:function(e){var t=this.props,n=t.title,a=t.fit;return"fill"===a||"fit"===a?u.a.createElement("div",{className:Object(g.m)("inner"),title:n,style:{backgroundImage:'url("'.concat(e,'")')}}):u.a.createElement("div",{className:Object(g.m)("inner"),title:n},u.a.createElement("img",{alt:"",src:e}))}},{key:"renderPlaceholder",value:function(){var e=this.props,t=e.placeholder,n=e.title;return u.a.isValidElement(t)?u.a.createElement("div",{className:Object(g.m)("inner")},t):u.a.createElement("div",{className:Object(g.m)("inner","mask")},u.a.createElement("div",null,n," ",u.a.createElement("span",{className:Object(g.m)("placeholder")},t||Object(R.a)("loading"))))}},{key:"renderImage",value:function(){var e=this.state.status,t=this.props,n=t.alt,a=t.src,i=t.title;switch(e){case 0:return this.renderPlaceholder();case 1:return this.renderType(a);case 2:return this.renderType(n);case 3:return u.a.createElement("div",{className:Object(g.m)("inner","mask")},u.a.createElement("div",null,i||"no found"));default:return null}}},{key:"render",value:function(){var e=this.props,t=e.href,n=e.height,a=e.style,i=e.shape,r=e.fit,l=e.width,o=e.target,s=m()(Object(g.m)("_",i,r),this.props.className),c=t?"a":"div";return u.a.createElement(c,{ref:this.bindElement,href:t&&"_modal"===o?"javascript:;":t,onClick:this.handleClick,target:"_download"===o?"_self":o,download:"_download"===o,className:s,style:Object.assign({},a,{width:l,paddingBottom:n})},this.renderImage())}}]),n}(p.b);z.defaultProps={lazy:!1,target:"_modal",width:"100%",height:"100%"};var N={};z.symbolType=N;var A=z,W=n(15),D=n(25),G=function(e){function t(){return Object(a.a)(this,t),Object(r.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"handleClick",value:function(r){var e=this.props.children,l=[],o=0;h.Children.toArray(e).forEach(function(e,t){if(e&&e.type&&e.type.symbolType===N){r===t&&(o=l.length);var n=e.props,a=n.src,i=n.href;l.push({thumb:a,src:i||a,key:t})}}),C(l,o)}},{key:"render",value:function(){var n=this,e=this.props,t=(e.children,e.pile),a=e.style,i=Object(D.a)(e,["children","pile","style"]);return u.a.createElement("div",{className:Object(g.m)("group",t&&"pile"),style:a},h.Children.toArray(this.props.children).map(function(e,t){return Object(h.cloneElement)(e,Object(W.a)({},i,{onClick:n.handleClick.bind(n,t)}))}))}}]),t}(h.PureComponent);A.Group=G,A.displayName="ShineoutImage",A.Group.displayName="ShineoutImageGroup";t.a=A},509:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(192),l=n(198),o=n(11),s=n(510),c=n.n(s),h=n(511),u=n.n(h),d=Object(o.b)(c.a,u.a),m=[{name:"01-base",title:Object(o.b)("基本用法 \n 图片设置宽高后即使图片未加载，仍然会先占位","Base \n The most basic image."),component:n(512).default,rawText:n(513)},{name:"02-shape",title:Object(o.b)("形状 \n 内置了三种图片样式，rounded, cricle, thumbnail","Shape \n There are three built-in styles, rounded, cricle, thumbnail."),component:n(514).default,rawText:n(515)},{name:"03-fit",title:Object(o.b)("适应 \n 内置了 4 种适应容器的方式，填充、居中、原图、拉伸","Fit \n There are four built ways that fit the container, fill, center, original, stretch."),component:n(516).default,rawText:n(517)},{name:"04-alt",title:Object(o.b)("备用地址 \n 在 src 获取失败的情况下，自动使用 alt 属性设置的地址","Alt \n If the src address fails to load, use the alt property instead."),component:n(518).default,rawText:n(519)},{name:"05-error",title:Object(o.b)("错误处理 \n alt 属性失效或没有 alt 属性时，会显示 title 属性","Title \n The title property is displayed when the alt property is invalid or there is no alt property."),component:n(520).default,rawText:n(521)},{name:"06-target",title:Object(o.b)("原始图片 \n 提供了 4 种方式展示原始图片，弹出层、新窗口打开、当前窗口打开、下载","Target \n There are 4 ways to display the original image, pop-up layer, new window open, current window open, download."),component:n(522).default,rawText:n(523)},{name:"07-group",title:Object(o.b)("图片组 \n 一组图片可以放在 Image.Group 中","Group \n A group of images can be placed in the Image.Group ."),component:n(524).default,rawText:n(525)},{name:"08-group",title:Object(o.b)(" \n 设置 pile 属性可以把缩略图堆叠展示"," \n Set the pile property to show the image stack."),component:n(526).default,rawText:n(527)},{name:"09-lazy",title:Object(o.b)("延迟加载 \n lazy 属性为 true 时，图片会在进入屏幕可视区域后加载","Lazy load \n When the lazy property is true, the image will load when it enter the visual area of the screen."),component:n(528).default,rawText:n(529)}];t.default=Object(r.a)(function(e){return i.a.createElement(l.b,Object.assign({},e,{codes:void 0,source:d,examples:m}))})},510:function(e,t){e.exports="# Image *图片*\n\n图片组件用来处理指定尺寸的图片，实现占位，异常处理，拉伸、填充，延时加载等功能。\n\n<example />\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| className | string | 无 | 扩展className |\n| height | string \\| number | '100%' | 图片高度(值为百分比时，对比值为图片宽度) |\n| href | string | 无 | 原始图片地址 |\n| lazy | bool | false | 是否延迟加载 |\n| src | string | 必填 | 图片地址 |\n| style | object | 无 | 最外层扩展样式 |\n| target | string | '_modal' | 可选值为 \\['_modal', '_blank', '_self', '_download'] |\n| width | string \\| number | '100%' | 图片宽度 |\n| placeholder | ReactElement \\| string | '加载中' | 图片加载中占位内容 |\n \n### Image.Group\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| height | string \\| number | '100%' | 单个图片高度(值为百分比时，对比值为图片宽度) |\n| lazy | bool | false | 是否延迟加载 |\n| pile | bool | false | 是否堆叠 |\n| target | string | '_modal' | 可选值为 \\['_modal', '_blank', '_self'] |\n| width | string \\| number | '100%' | 单个图片宽度 |\n"},511:function(e,t){e.exports="# Image\n\n<example />\n\n## API\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| className | string | none | extend className |\n| height | string \\| number | '100%' | the height of the image(When the value is percentage, the ratio is the width of the image) |\n| href | string | none | original picture address |\n| lazy | bool | false | whether to delay loading |\n| src | string | required | the picture address |\n| style | object | - | Container element style |\n| target | string | '_modal' | options: \\['_modal', '_blank', '_self', '_download'] |\n| width | string \\| number | '100%' | the width of the image |\n| placeholder | ReactElement \\| string | 'loading' | loading image placeholder content |\n\n### Image.Group\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| height | string \\| number | '100%' | the height of single image(When the value is percentage, the ratio is the width of the image) |\n| lazy | bool | false | whether to delay loading |\n| pile | bool | false | whether to stack |\n| target | string | '_modal' | options: \\['_modal', '_blank', '_self'] |\n| width | string \\| number | '100%' | the width of single picture |\n"},512:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(265);t.default=function(){return i.a.createElement(r.a,{width:200,height:125,src:"../../../images/1_b.jpg"})}},513:function(e,t){e.exports="/**\n * cn - 基本用法\n *    -- 图片设置宽高后即使图片未加载，仍然会先占位\n * en - Base\n *    -- The most basic image.\n */\nimport React from 'react'\nimport { Image } from 'shineout'\n\nexport default function() {\n  return <Image width={200} height={125} src=\"../../../images/1_b.jpg\" />\n}\n"},514:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(265);t.default=function(){return i.a.createElement("div",null,i.a.createElement(r.a,{width:150,height:150,shape:"rounded",title:"rounded"}),i.a.createElement(r.a,{width:150,height:150,shape:"circle",title:"circle"}),i.a.createElement(r.a,{width:150,height:150,shape:"thumbnail",title:"thumbnail"}))}},515:function(e,t){e.exports='/**\n * cn - 形状\n *    -- 内置了三种图片样式，rounded, cricle, thumbnail\n * en - Shape\n *    -- There are three built-in styles, rounded, cricle, thumbnail.\n */\nimport React from \'react\'\nimport { Image } from \'shineout\'\n\nexport default function() {\n  return (\n    <div>\n      <Image width={150} height={150} shape="rounded" title="rounded" />\n      <Image width={150} height={150} shape="circle" title="circle" />\n      <Image width={150} height={150} shape="thumbnail" title="thumbnail" />\n    </div>\n  )\n}\n'},516:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(265);t.default=function(){return i.a.createElement("div",null,["fill","center","fit","stretch"].map(function(e){return i.a.createElement("div",{key:e,style:{width:"25%",padding:4,display:"inline-block"}},i.a.createElement(r.a,{width:"100%",height:"75%",src:"../../../images/1_b.jpg",shape:"thumbnail",fit:e}),i.a.createElement("div",{style:{textAlign:"center",paddingTop:4}},e))}))}},517:function(e,t){e.exports="/**\n * cn - 适应\n *    -- 内置了 4 种适应容器的方式，填充、居中、原图、拉伸\n * en - Fit\n *    -- There are four built ways that fit the container, fill, center, original, stretch.\n */\nimport React from 'react'\nimport { Image } from 'shineout'\n\nconst src = '../../../images/1_b.jpg'\n\nexport default function() {\n  return (\n    <div>\n      {['fill', 'center', 'fit', 'stretch'].map(fit => (\n        <div key={fit} style={{ width: '25%', padding: 4, display: 'inline-block' }}>\n          <Image width=\"100%\" height=\"75%\" src={src} shape=\"thumbnail\" fit={fit} />\n          <div style={{ textAlign: 'center', paddingTop: 4 }}>{fit}</div>\n        </div>\n      ))}\n    </div>\n  )\n}\n"},518:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(265);t.default=function(){return i.a.createElement(r.a,{width:200,height:125,src:"notfound",alt:"../../../images/1_b.jpg"})}},519:function(e,t){e.exports="/**\n * cn - 备用地址\n *    -- 在 src 获取失败的情况下，自动使用 alt 属性设置的地址\n * en - Alt\n *    -- If the src address fails to load, use the alt property instead.\n */\nimport React from 'react'\nimport { Image } from 'shineout'\n\nexport default function() {\n  return <Image width={200} height={125} src=\"notfound\" alt=\"../../../images/1_b.jpg\" />\n}\n"},520:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(265);t.default=function(){return i.a.createElement(r.a,{width:200,height:125,src:"notfound",title:"Image not exist"})}},521:function(e,t){e.exports="/**\n * cn - 错误处理\n *    -- alt 属性失效或没有 alt 属性时，会显示 title 属性\n * en - Title\n *    -- The title property is displayed when the alt property is invalid or there is no alt property.\n */\nimport React from 'react'\nimport { Image } from 'shineout'\n\nexport default function() {\n  return <Image width={200} height={125} src=\"notfound\" title=\"Image not exist\" />\n}\n"},522:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(265);t.default=function(){return i.a.createElement("div",null,["_modal","_blank","_self","_download"].map(function(e){return i.a.createElement("div",{key:e,style:{display:"inline-block",marginRight:12,textAlign:"center"}},i.a.createElement(r.a,{width:80,height:80,target:e,shape:"thumbnail",fit:"fill",src:"../../../images/1_s.jpg",href:"../../../images/1_b.jpg"}),i.a.createElement("br",null),e)}))}},523:function(e,t){e.exports="/**\n * cn - 原始图片\n *    -- 提供了 4 种方式展示原始图片，弹出层、新窗口打开、当前窗口打开、下载\n * en - Target\n *    -- There are 4 ways to display the original image, pop-up layer, new window open, current window open, download.\n */\nimport React from 'react'\nimport { Image } from 'shineout'\n\nexport default function() {\n  return (\n    <div>\n      {['_modal', '_blank', '_self', '_download'].map(target => (\n        <div key={target} style={{ display: 'inline-block', marginRight: 12, textAlign: 'center' }}>\n          <Image\n            width={80}\n            height={80}\n            target={target}\n            shape=\"thumbnail\"\n            fit=\"fill\"\n            src=\"../../../images/1_s.jpg\"\n            href=\"../../../images/1_b.jpg\"\n          />\n          <br />\n          {target}\n        </div>\n      ))}\n    </div>\n  )\n}\n"},524:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(265);t.default=function(){return i.a.createElement(r.a.Group,null,[1,2,3,4].map(function(e){return i.a.createElement(r.a,{key:e,width:80,height:80,fit:"fill",shape:"thumbnail",src:"../../../images/".concat(e,"_s.jpg"),href:"../../../images/".concat(e,"_b.jpg")})}))}},525:function(e,t){e.exports="/**\n * cn - 图片组\n *    -- 一组图片可以放在 Image.Group 中\n * en - Group\n *    -- A group of images can be placed in the Image.Group .\n */\nimport React from 'react'\nimport { Image } from 'shineout'\n\nexport default function() {\n  return (\n    <Image.Group>\n      {[1, 2, 3, 4].map(i => (\n        <Image\n          key={i}\n          width={80}\n          height={80}\n          fit=\"fill\"\n          shape=\"thumbnail\"\n          src={`../../../images/${i}_s.jpg`}\n          href={`../../../images/${i}_b.jpg`}\n        />\n      ))}\n    </Image.Group>\n  )\n}\n"},526:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(265);t.default=function(){return i.a.createElement(r.a.Group,{pile:!0},[1,2,3,4].map(function(e){return i.a.createElement(r.a,{key:e,width:80,height:80,fit:"fill",shape:"thumbnail",src:"../../../images/".concat(e,"_s.jpg"),href:"../../../images/".concat(e,"_b.jpg")})}))}},527:function(e,t){e.exports="/**\n * cn -\n *    -- 设置 pile 属性可以把缩略图堆叠展示\n * en -\n *    -- Set the pile property to show the image stack.\n */\nimport React from 'react'\nimport { Image } from 'shineout'\n\nexport default function() {\n  return (\n    <Image.Group pile>\n      {[1, 2, 3, 4].map(i => (\n        <Image\n          key={i}\n          width={80}\n          height={80}\n          fit=\"fill\"\n          shape=\"thumbnail\"\n          src={`../../../images/${i}_s.jpg`}\n          href={`../../../images/${i}_b.jpg`}\n        />\n      ))}\n    </Image.Group>\n  )\n}\n"},528:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(265),l=[1,2,3,4].map(function(e){return"../../../images/".concat(e,"_b.jpg")});t.default=function(){return i.a.createElement("div",null,l.map(function(e,t){return i.a.createElement(r.a,{lazy:!0,key:t,fit:"fill",height:"66%",src:e})}))}},529:function(e,t){e.exports="/**\n * cn - 延迟加载\n *    -- lazy 属性为 true 时，图片会在进入屏幕可视区域后加载\n * en - Lazy load\n *    -- When the lazy property is true, the image will load when it enter the visual area of the screen.\n */\nimport React from 'react'\nimport { Image } from 'shineout'\n\nconst data = [1, 2, 3, 4].map(i => `../../../images/${i}_b.jpg`)\n\nexport default function() {\n  return (\n    <div>\n      {data.map((img, i) => (\n        <Image lazy key={i} fit=\"fill\" height=\"66%\" src={img} />\n      ))}\n    </div>\n  )\n}\n"}}]);