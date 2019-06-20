(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[24],{468:function(e,t,n){"use strict";var h=n(22),d=n(0),m=n.n(d),p=n(476),f=n(66),g=n(15);t.a=function(u){return function(e){var t=Object(d.useState)(""),n=Object(h.a)(t,2),a=n[0],r=n[1],i=Object(d.useState)([]),l=Object(h.a)(i,1)[0],c=e.location.hash,o=Object(d.useCallback)(function(e){e.forEach(function(e){l.push(e)})},[]),s=Object(d.useCallback)(function(){if(c){var e=document.querySelector(c);e&&setTimeout(function(){e.scrollIntoView()},50)}},[c]);Object(d.useEffect)(function(){s();var e=function(){var n=document.documentElement.scrollTop,e=l.filter(function(e){return 3===e.level&&e.children[0]});if(0!==e.length){var a=e[0].id;e.forEach(function(e){var t=document.querySelector("#".concat(e.id));t&&t.offsetTop<=n&&(a=e.id)}),r(a)}};return document.addEventListener("scroll",e),e(),function(){document.removeEventListener("scroll",e)}},[]);return m.a.createElement("div",{className:Object(g.f)("_")},m.a.createElement(u,{onHeadingSetted:o}),!e.noNav&&m.a.createElement(p.a,{className:Object(g.f)("sticky"),top:50},m.a.createElement("div",{className:Object(g.f)("nav")},l.map(function(e,t){var n=e.children.filter(function(e){return"string"==typeof e});return m.a.createElement("a",{key:t,className:Object(g.f)("level-".concat(e.level),a===e.id&&"active"),onClick:function(e){if(0===f.a.location.search.indexOf("?example="))f.a.push("".concat(f.a.location.pathname,"?example=").concat(e.replace("heading-","")));else{var t=document.getElementById(e);t&&t.scrollIntoView()}}.bind(null,e.id)},n)}))))}}},469:function(e,t,n){"use strict";var I=n(0),T=n.n(I),u=n(23),S=n(22),a=n(479),h=n.n(a),d=n(77),m=n(32),C=n(15),p=n(33),r=n(13),l=n.n(r),i=n(480),c=n.n(i),N=(n(481),function(e){var t=e.language,n=void 0===t?"lang-jsx":t,a=e.onHighLight,r=e.value,i=Object(I.useRef)(null);return Object(I.useEffect)(function(){var e=i.current;c.a.highlightElement(e,!1,function(){a&&a(e.offsetHeight)})},[]),T.a.createElement("pre",{ref:i,className:l()(n||"lang-jsx",Object(C.a)("pre"))},T.a.createElement("code",null,r))}),R=n(137),o=n(112),s=n(4),f=n(5),g=n(7),b=n(3),v=n(6),y=n(20),j=n(470),z=function(e){function n(e){var t;return Object(s.a)(this,n),(t=Object(g.a)(this,Object(b.a)(n).call(this,e))).state={ready:!1},t.placeholderRef=function(e){t.placeholder=e},t}return Object(v.a)(n,e),Object(f.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.lazyId=Object(j.a)({element:this.placeholder,render:function(){return e.setState({ready:!0})}})}},{key:"componentWillUnmount",value:function(){Object(j.b)(this.lazyId)}},{key:"render",value:function(){var e=this.state.ready,t=this.props,n=t.children,a=t.placeholder;return e?n:T.a.createElement("span",{ref:this.placeholderRef},a)}}]),n}(y.b),A=n(135),W=n(66),D=T.a.createElement("div",{className:Object(C.a)("placeholder")},T.a.createElement(o.a,null));function O(e){var t=e.component,n=e.id,a=e.name,r=e.rawText,i=e.title,l=Object(I.useRef)(null),c=Object(I.useState)(!1),o=Object(S.a)(c,2),s=o[0],u=o[1],h=Object(I.useState)(),d=Object(S.a)(h,2),m=d[0],p=d[1],f=Object(I.useState)(),g=Object(S.a)(f,1)[0],b=function e(t,n,a){l.current.style.height="".concat(t*(n-1),"px"),1<n&&setTimeout(function(){e(t,n-1,a)},16),a&&(document.documentElement.scrollTop-=t)};Object(I.useEffect)(function(){if(l.current)if(s)l.current.style.height="".concat(m,"px");else{var e=m%15;0<e&&b(e,1,g),b((m-e)/15,15,g)}},[s]);var v=function(e){u(!s),g=e},y=function(e){return T.a.createElement("a",{href:"javascript:;",className:Object(C.a)("toggle"),onClick:v.bind(null,e)},T.a.createElement(A.a,{name:s?"code-close":"code"}))},j=r.replace(/(^|\n|\r)\s*\/\*[\s\S]*?\*\/\s*(?:\r|\n|$)/,"").trim(),O=W.a.location.search,w="?example=";if(0===O.indexOf(w)&&(O=O.replace(w,""),a.indexOf(O)<0))return null;var E=i.split("\n"),k=Object(R.a)(E),x=k[0],_=k.slice(1);return x&&(x=x.trim()),T.a.createElement(I.Fragment,null,x&&T.a.createElement("h3",{key:"0",id:n},x),T.a.createElement(z,{placeholder:D},T.a.createElement("div",{className:Object(C.a)("_",s&&"showcode")},T.a.createElement("div",{className:Object(C.a)("body")},Object(I.createElement)(t)),0<i.length&&T.a.createElement("div",{className:Object(C.a)("desc")},_.map(function(e,t){return T.a.createElement("div",{key:t,dangerouslySetInnerHTML:{__html:e}})}),y(!1)),T.a.createElement("div",{ref:l,className:Object(C.a)("code")},T.a.createElement(N,{onHighLight:function(e){p(e)},onClose:v,value:j}),y(!0)))))}O.defaultProps={rawText:""};var w=function(e){var t=e.children,n=Object(I.useState)(!1),a=Object(S.a)(n,2),r=a[0],i=a[1],l=t.map(function(e){return e.replace(/"fn#fn/g,"").replace(/fn#fn"/g,"").replace(/\\n/g,"\n")}),c=r?"pre":"div";return T.a.createElement("div",{onClick:function(){i(!r)},className:Object(C.e)("console")},T.a.createElement(c,null,l))};w.defaultProps={children:[]};var E=w;function k(e){var t=e.children,n=Object(u.a)(t[1].props.children);try{n.sort(function(e,t){return e.props.children[0].props.children[0].localeCompare(t.props.children[0].props.children[0])})}catch(e){console.log("sort fail...")}return T.a.createElement("div",{style:{overflow:"auto"}},T.a.createElement("table",{className:"doc-api-table"},t[0],T.a.cloneElement(t[1],{children:n})))}k.defaultProps={};var x=k,_=/^<code name="([\w|-]+)" /,H=/^<example name="([\w|-]+)"/;function G(e){var t=e.onHeadingSetted,i=e.codes,l=e.examples,n=e.source,a=Object(I.useState)([]),r=Object(S.a)(a,1)[0],c=Object(I.useState)({}),o=Object(S.a)(c,1)[0];Object(I.useEffect)(function(){t&&t(r)},[]);var s=function(e){r.push(e)};return r=[],T.a.createElement(h.a,{className:Object(C.e)("_"),source:n,renderers:{code:N,heading:function(e){var t,n,a=e.level,r=e.children,i="".concat(a,"-").concat(r[0]),l="h".concat(a);if("object"==typeof r[0])return T.a.createElement(l,null,r);if(!o[i]){var c="heading-".concat((t=a,n=r[0],4===t?Object(m.b)():"".concat(t,"-").concat((n||"").replace(/[\W|-]/g,"-"))));2!==a&&3!==a||s({id:c,level:a,children:r}),o[i]=T.a.createElement(l,{id:c},r)}return o[i]},html:function(e){if("<example />"===e.value)return function(){if(o.examples)return o.examples;if(!l)return T.a.createElement("div",null);var e=Object(p.b)("示例","Example"),t="heading-example-h";return s({id:t,level:2,children:[e]}),o.examples=[T.a.createElement("h2",{key:"h",id:t},e)].concat(Object(u.a)(l.map(function(e,t){if(/\d+-/.test(e.name)){var n="heading-".concat(e.name),a=e.title.split("\n"),r=Object(S.a)(a,1)[0];return s({id:n,level:3,children:[r]}),T.a.createElement(O,Object.assign({key:t,id:n},e,{lazy:2<t}))}}))),o.examples}();var t=e.value.match(H);if(t)return function(t){var e="example-".concat(t);if(!o[e]){var n=(l||[]).find(function(e){return e.name===t});o[e]=n?T.a.createElement(O,n):null}return o[e]}(t[1],e.value.indexOf("noExpand"));if("<br>"===e.value||"<br />"===e.value)return T.a.createElement("br",null);var n,a,r=e.value.match(_);return r?(n=r[1],(a=i[n])?[T.a.createElement(N,{key:"cb",value:a.text})].concat(Object(u.a)(a.log.map(function(e,t){return T.a.createElement(E,{key:t},e)}))):(console.error("Code ".concat(n," not existed")),null)):null},table:x,link:function(e){var t=0===e.href.indexOf("http")?"_blank":void 0;return t?T.a.createElement("a",{href:e.href,target:t},e.children):T.a.createElement(d.a,{to:e.href,target:t},e.children)}}})}G.defaultProps={children:null,examples:null,onHeadingSetted:void 0};var X=n(136),L=n(468);n.d(t,"a",function(){return B});var M,P=((M=function(e){var t=Object(I.useState)(e.source),n=Object(S.a)(t,2),a=n[0],r=n[1];return Object(I.useEffect)(function(){e.loader&&e.loader().then(function(e){r(e.default)})},[]),a?T.a.createElement(G,Object.assign({},e,{source:a})):T.a.createElement(X.a,{style:{minHeight:200}})}).defaultProps={loader:void 0,source:void 0},Object(I.memo)(M));t.b=P;function B(t,n){return Object(L.a)(function(e){return T.a.createElement(P,Object.assign({},e,{noNav:n,loader:t}))})}},470:function(e,t,n){"use strict";n.d(t,"a",function(){return u}),n.d(t,"b",function(){return h});var a=n(472),r=n(32),i=n(35),l={},c=null,o=!1,s=i.b.height;function u(e){var t=e.element.getBoundingClientRect();if(t.bottom<0||t.top>s){var n=Object(r.b)();return l[n]=e,n}return e.render(),null}function h(e){e&&delete l[e]}document.addEventListener("scroll",function(){c&&clearTimeout(c),c=setTimeout(function(){o||(o=!0,Object.keys(l).forEach(function(e){var t=l[e],n=t.element,a=t.render,r=n.getBoundingClientRect();r.bottom<0||r.top>s||(delete l[e],a())}),o=!1),c=null},80)},a.a)},486:function(e,t,n){"use strict";t.a=function(e){var t=0,n=0,a=0,r=0;return"detail"in e&&(n=e.detail),"wheelDelta"in e&&(n=-e.wheelDelta/120),"wheelDeltaY"in e&&(n=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(t=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(t=n,n=0),a=10*t,r=10*n,"deltaY"in e&&(r=e.deltaY),"deltaX"in e&&(a=e.deltaX),(a||r)&&e.deltaMode&&(1===e.deltaMode?(a*=40,r*=40):(a*=800,r*=800)),a&&!t&&(t=a<1?-1:1),r&&!n&&(n=r<1?-1:1),{spinX:t,spinY:n,pixelX:a,pixelY:r}}},508:function(e,t,n){"use strict";var a=n(4),r=n(5),i=n(7),l=n(3),c=n(21),o=n(6),s=n(1),u=n(0),h=n.n(u),d=n(13),m=n.n(d),p=n(20),f=n(470),g=n(2),b=n(39),v=n.n(b),y=n(45),j=n(486),O=n(58),w=function(e){function n(e){var t;return Object(a.a)(this,n),(t=Object(i.a)(this,Object(l.a)(n).call(this,e))).state={status:0,style:{maxHeight:e.maxHeight,maxWidth:e.maxWidth}},t.handleMove=t.handleMove.bind(Object(s.a)(Object(s.a)(t))),t.handleResize=t.handleResize.bind(Object(s.a)(Object(s.a)(t))),t}return Object(o.a)(n,e),Object(r.a)(n,[{key:"componentDidUpdate",value:function(e){e.src!==this.props.src&&1===this.state.status&&(this.setState({status:0,style:{maxHeight:this.props.maxHeight,maxWidth:this.props.maxWidth}}),this.props.lockScroll(!1))}},{key:"move",value:function(e,t){var n=this.element.getBoundingClientRect(),a=this.element.querySelector("img"),r=n.width-100,i=n.height-100,l=(e-n.left-50)/r,c=(t-n.top-50)/i;this.element.scrollTop=(a.offsetHeight-i)*c,this.element.scrollLeft=(a.offsetWidth-r)*l}},{key:"handleMove",value:function(e){this.move(e.clientX,e.clientY)}},{key:"handleResize",value:function(e){var t=this,n=this.props,a=n.maxHeight,r=n.maxWidth;if("center"===n.position){var i=1===this.state.status?0:1,l=e.clientX,c=e.clientY;this.setState(Object(y.a)(function(e){e.status=i,e.style=0===i?{maxHeight:a,maxWidth:r}:void 0}),function(){0!==i&&t.move(l,c)}),this.props.lockScroll(1===i)}}},{key:"render",value:function(){var t=this,e=this.props,n=e.maxHeight,a=e.maxWidth,r=e.src,i=this.state.status,l={maxHeight:n,maxWidth:a,cursor:"center"===this.props.position?1===i?"zoom-out":"zoom-in":"pointer"};1===i&&(l.overflow="scroll",l.borderRightWidth=0,l.borderBottomWidth=0);var c=1===i?this.handleMove:void 0;return h.a.createElement("div",{onClick:this.handleResize,onMouseMove:c,ref:function(e){t.element=e},style:l},h.a.createElement("img",{src:r,alt:"",style:this.state.style}))}}]),n}(p.b),E=n(35),k=function(e){function n(e){var t;return Object(a.a)(this,n),(t=Object(i.a)(this,Object(l.a)(n).call(this,e))).state={current:e.current,direction:"init"},t.handleScroll=t.handleScroll.bind(Object(s.a)(Object(s.a)(t))),t.lockScroll=t.lockScroll.bind(Object(s.a)(Object(s.a)(t))),t.scrollX=0,t.rawScroll=!1,t}return Object(o.a)(n,e),Object(r.a)(n,[{key:"componentDidMount",value:function(){Object(c.a)(Object(l.a)(n.prototype),"componentDidMount",this).call(this),document.addEventListener("wheel",this.handleScroll,{passive:!1})}},{key:"componentWillUnmount",value:function(){Object(c.a)(Object(l.a)(n.prototype),"componentWillUnmount",this).call(this),document.removeEventListener("wheel",this.handleScroll,{passive:!1})}},{key:"lockScroll",value:function(e){this.rawScroll=e}},{key:"handleClick",value:function(t){var e=this,n=this.props.images.length;this.setState(Object(y.a)(function(e){e.current+=t,e.current<0?e.current=0:e.current>=n?e.current=n-1:e.direction=1===t?"forward":"backward"}),function(){setTimeout(function(){e.setState({direction:"init"})},400)})}},{key:"handleScroll",value:function(e){var t=this;if(!this.rawScroll&&(e.preventDefault(),0===this.scrollX)){var n=Object(j.a)(e);this.scrollX+=n.spinX,this.scrollX<0&&this.handleClick(-1),0<this.scrollX&&this.handleClick(1),this.scrollTimer=setTimeout(function(){t.scrollX=0},1e3)}}},{key:"renderImage",value:function(e,t){var n,a=E.b.height,r=E.b.width;return"center"!==t&&(n=this.handleClick.bind(this,"left"===t?-1:1)),h.a.createElement("div",{key:e.key,className:Object(g.m)(t,this.state.direction),onClick:n},h.a.createElement("a",{href:"javascript:;",onClick:this.props.onClose,className:Object(g.m)("close")},O.a.Close),h.a.createElement(w,{maxWidth:r-400,maxHeight:a-160,position:t,src:e.src,lockScroll:this.lockScroll}))}},{key:"render",value:function(){var e=this.state.current,t=this.props,n=t.images,a=t.onClose,r=n[e],i=[];return i.push(h.a.createElement("div",{key:"overlay",className:Object(g.m)("overlay"),onClick:a})),i.push(this.renderImage(r,"center")),n[e-1]&&i.push(this.renderImage(n[e-1],"left")),n[e+1]&&i.push(this.renderImage(n[e+1],"right")),i}}]),n}(p.b);k.defaultProps={current:0};var x,_=k;function I(){document.removeEventListener("keydown",T),v.a.unmountComponentAtNode(x),document.body.removeChild(x),x=null}function T(e){27===e.keyCode&&I()}var S=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0;Array.isArray(e)||(e=[e]);var n=x||(x=document.createElement("div"),document.body.appendChild(x),x.className=Object(g.m)("gallery"),x);document.addEventListener("keydown",T),v.a.render(h.a.createElement(_,{onClose:I,current:t,images:e}),n)},C=n(38),N=function(e){function n(e){var t;return Object(a.a)(this,n),(t=Object(i.a)(this,Object(l.a)(n).call(this,e))).state={status:0},t.bindElement=t.bindElement.bind(Object(s.a)(Object(s.a)(t))),t.markToRender=t.markToRender.bind(Object(s.a)(Object(s.a)(t))),t.handleAlt=t.handleAlt.bind(Object(s.a)(Object(s.a)(t))),t.handleClick=t.handleClick.bind(Object(s.a)(Object(s.a)(t))),t}return Object(o.a)(n,e),Object(r.a)(n,[{key:"componentDidMount",value:function(){Object(c.a)(Object(l.a)(n.prototype),"componentDidMount",this).call(this),this.props.lazy?this.lazyId=Object(f.a)({element:this.element,render:this.markToRender}):this.markToRender()}},{key:"componentWillUnmount",value:function(){Object(c.a)(Object(l.a)(n.prototype),"componentWillUnmount",this).call(this),Object(f.b)(this.lazyId),delete this.image}},{key:"bindElement",value:function(e){this.element=e}},{key:"markToRender",value:function(){var e=this;if(this.props.src){delete this.image;var t=new window.Image;t.onload=function(){return e.setState({status:1})},t.onerror=this.handleAlt,t.src=this.props.src,this.image=t}else this.handleAlt()}},{key:"handleAlt",value:function(){var e=this,t=this.props.alt;if(t){var n=new window.Image;n.onload=function(){return e.setState({status:2})},n.onerror=function(){return e.setState({status:3})},n.src=t}else this.setState({status:3})}},{key:"handleClick",value:function(e){e.preventDefault();var t=this.props,n=t.onClick,a=t.src,r=t.href;n?n():S({thumb:a,src:r||a,key:"key"})}},{key:"renderType",value:function(e){var t=this.props,n=t.title,a=t.fit;return"fill"===a||"fit"===a?h.a.createElement("div",{className:Object(g.m)("inner"),title:n,style:{backgroundImage:'url("'.concat(e,'")')}}):h.a.createElement("div",{className:Object(g.m)("inner"),title:n},h.a.createElement("img",{alt:"",src:e}))}},{key:"renderPlaceholder",value:function(){var e=this.props,t=e.placeholder,n=e.title;return h.a.isValidElement(t)?h.a.createElement("div",{className:Object(g.m)("inner")},t):h.a.createElement("div",{className:Object(g.m)("inner","mask")},h.a.createElement("div",null,n," ",h.a.createElement("span",{className:Object(g.m)("placeholder")},t||Object(C.a)("loading"))))}},{key:"renderImage",value:function(){var e=this.state.status,t=this.props,n=t.alt,a=t.src,r=t.title;switch(e){case 0:return this.renderPlaceholder();case 1:return this.renderType(a);case 2:return this.renderType(n);case 3:return h.a.createElement("div",{className:Object(g.m)("inner","mask")},h.a.createElement("div",null,r||"no found"));default:return null}}},{key:"render",value:function(){var e=this.props,t=e.href,n=e.height,a=e.style,r=e.shape,i=e.fit,l=e.width,c=e.target,o=m()(Object(g.m)("_",r,i),this.props.className),s=t?"a":"div";return h.a.createElement(s,{ref:this.bindElement,href:t&&"_modal"===c?"javascript:;":t,onClick:t&&"_modal"===c?this.handleClick:void 0,target:"_download"===c?"_self":c,download:"_download"===c,className:o,style:Object.assign({},a,{width:l,paddingBottom:n})},this.renderImage())}}]),n}(p.b);N.defaultProps={lazy:!1,target:"_modal",width:"100%",height:"100%"};var R={};N.symbolType=R;var z=N,A=n(17),W=n(16),D=function(e){function t(){return Object(a.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"handleClick",value:function(i){var e=this.props.children,l=[],c=0;u.Children.toArray(e).forEach(function(e,t){if(e&&e.type&&e.type.symbolType===R){i===t&&(c=l.length);var n=e.props,a=n.src,r=n.href;l.push({thumb:a,src:r||a,key:t})}}),S(l,c)}},{key:"render",value:function(){var n=this,e=this.props,t=(e.children,e.pile),a=e.style,r=Object(W.a)(e,["children","pile","style"]);return h.a.createElement("div",{className:Object(g.m)("group",t&&"pile"),style:a},u.Children.toArray(this.props.children).map(function(e,t){return Object(u.cloneElement)(e,Object(A.a)({},r,{onClick:n.handleClick.bind(n,t)}))}))}}]),t}(u.PureComponent);z.Group=D,z.displayName="ShineoutImage",z.Group.displayName="ShineoutImageGroup";t.a=z},680:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(468),l=n(469),c=n(33),o=n(681),s=n.n(o),u=n(682),h=n.n(u),d=Object(c.b)(s.a,h.a),m=[{name:"01-base",title:Object(c.b)("基本用法 \n 图片设置宽高后即使图片未加载，仍然会先占位","Base \n The most basic image."),component:n(683).default,rawText:n(684)},{name:"02-shape",title:Object(c.b)("形状 \n 内置了三种图片样式，rounded, cricle, thumbnail","Shape \n There are three built-in styles, rounded, cricle, thumbnail."),component:n(685).default,rawText:n(686)},{name:"03-fit",title:Object(c.b)("适应 \n 内置了 4 种适应容器的方式，填充、居中、原图、拉伸","Fit \n There are four built ways that fit the container, fill, center, original, stretch."),component:n(687).default,rawText:n(688)},{name:"04-alt",title:Object(c.b)("备用地址 \n 在 src 获取失败的情况下，自动使用 alt 属性设置的地址","Alt \n If the src address fails to load, use the alt property instead."),component:n(689).default,rawText:n(690)},{name:"05-error",title:Object(c.b)("错误处理 \n alt 属性失效或没有 alt 属性时，会显示 title 属性","Title \n The title property is displayed when the alt property is invalid or there is no alt property."),component:n(691).default,rawText:n(692)},{name:"06-target",title:Object(c.b)("原始图片 \n 提供了 4 种方式展示原始图片，弹出层、新窗口打开、当前窗口打开、下载","Target \n There are 4 ways to display the original image, pop-up layer, new window open, current window open, download."),component:n(693).default,rawText:n(694)},{name:"07-group",title:Object(c.b)("图片组 \n 一组图片可以放在 Image.Group 中","Group \n A group of images can be placed in the Image.Group ."),component:n(695).default,rawText:n(696)},{name:"08-group",title:Object(c.b)(" \n 设置 pile 属性可以把缩略图堆叠展示"," \n Set the pile property to show the image stack."),component:n(697).default,rawText:n(698)},{name:"09-lazy",title:Object(c.b)("延迟加载 \n lazy 属性为 true 时，图片会在进入屏幕可视区域后加载","Lazy load \n When the lazy property is true, the image will load when it enter the visual area of the screen."),component:n(699).default,rawText:n(700)}];t.default=Object(i.a)(function(e){return r.a.createElement(l.b,Object.assign({},e,{codes:void 0,source:d,examples:m}))})},681:function(e,t){e.exports="# Image *图片*\n\n图片组件用来处理指定尺寸的图片，实现占位，异常处理，拉伸、填充，延时加载等功能。\n\n<example />\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| className | string | 无 | 扩展className |\n| height | string \\| number | '100%' | 图片高度(值为百分比时，对比值为图片宽度) |\n| href | string | 无 | 原始图片地址 |\n| lazy | bool | false | 是否延迟加载 |\n| src | string | 必填 | 图片地址 |\n| style | object | 无 | 最外层扩展样式 |\n| target | string | '_modal' | 可选值为 \\['_modal', '_blank', '_self', '_download'] |\n| width | string \\| number | '100%' | 图片宽度 |\n| placeholder | ReactElement \\| string | '加载中' | 图片加载中占位内容 |\n \n### Image.Group\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| height | string \\| number | '100%' | 单个图片高度(值为百分比时，对比值为图片宽度) |\n| lazy | bool | false | 是否延迟加载 |\n| pile | bool | false | 是否堆叠 |\n| target | string | '_modal' | 可选值为 \\['_modal', '_blank', '_self'] |\n| width | string \\| number | '100%' | 单个图片宽度 |\n"},682:function(e,t){e.exports="# Image\n\n<example />\n\n## API\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| className | string | none | extend className |\n| height | string \\| number | '100%' | the height of the image(When the value is percentage, the ratio is the width of the image) |\n| href | string | none | original picture address |\n| lazy | bool | false | whether to delay loading |\n| src | string | required | the picture address |\n| style | object | - | Container element style |\n| target | string | '_modal' | options: \\['_modal', '_blank', '_self', '_download'] |\n| width | string \\| number | '100%' | the width of the image |\n| placeholder | ReactElement \\| string | 'loading' | loading image placeholder content |\n\n### Image.Group\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| height | string \\| number | '100%' | the height of single image(When the value is percentage, the ratio is the width of the image) |\n| lazy | bool | false | whether to delay loading |\n| pile | bool | false | whether to stack |\n| target | string | '_modal' | options: \\['_modal', '_blank', '_self'] |\n| width | string \\| number | '100%' | the width of single picture |\n"},683:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(508);t.default=function(){return r.a.createElement(i.a,{width:200,height:125,src:"../../../images/1_b.jpg"})}},684:function(e,t){e.exports="/**\n * cn - 基本用法\n *    -- 图片设置宽高后即使图片未加载，仍然会先占位\n * en - Base\n *    -- The most basic image.\n */\nimport React from 'react'\nimport { Image } from 'shineout'\n\nexport default function() {\n  return <Image width={200} height={125} src=\"../../../images/1_b.jpg\" />\n}\n"},685:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(508);t.default=function(){return r.a.createElement("div",null,r.a.createElement(i.a,{width:150,height:150,shape:"rounded",title:"rounded"}),r.a.createElement(i.a,{width:150,height:150,shape:"circle",title:"circle"}),r.a.createElement(i.a,{width:150,height:150,shape:"thumbnail",title:"thumbnail"}))}},686:function(e,t){e.exports='/**\n * cn - 形状\n *    -- 内置了三种图片样式，rounded, cricle, thumbnail\n * en - Shape\n *    -- There are three built-in styles, rounded, cricle, thumbnail.\n */\nimport React from \'react\'\nimport { Image } from \'shineout\'\n\nexport default function() {\n  return (\n    <div>\n      <Image width={150} height={150} shape="rounded" title="rounded" />\n      <Image width={150} height={150} shape="circle" title="circle" />\n      <Image width={150} height={150} shape="thumbnail" title="thumbnail" />\n    </div>\n  )\n}\n'},687:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(508);t.default=function(){return r.a.createElement("div",null,["fill","center","fit","stretch"].map(function(e){return r.a.createElement("div",{key:e,style:{width:"25%",padding:4,display:"inline-block"}},r.a.createElement(i.a,{width:"100%",height:"75%",src:"../../../images/1_b.jpg",shape:"thumbnail",fit:e}),r.a.createElement("div",{style:{textAlign:"center",paddingTop:4}},e))}))}},688:function(e,t){e.exports="/**\n * cn - 适应\n *    -- 内置了 4 种适应容器的方式，填充、居中、原图、拉伸\n * en - Fit\n *    -- There are four built ways that fit the container, fill, center, original, stretch.\n */\nimport React from 'react'\nimport { Image } from 'shineout'\n\nconst src = '../../../images/1_b.jpg'\n\nexport default function() {\n  return (\n    <div>\n      {['fill', 'center', 'fit', 'stretch'].map(fit => (\n        <div key={fit} style={{ width: '25%', padding: 4, display: 'inline-block' }}>\n          <Image width=\"100%\" height=\"75%\" src={src} shape=\"thumbnail\" fit={fit} />\n          <div style={{ textAlign: 'center', paddingTop: 4 }}>{fit}</div>\n        </div>\n      ))}\n    </div>\n  )\n}\n"},689:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(508);t.default=function(){return r.a.createElement(i.a,{width:200,height:125,src:"notfound",alt:"../../../images/1_b.jpg"})}},690:function(e,t){e.exports="/**\n * cn - 备用地址\n *    -- 在 src 获取失败的情况下，自动使用 alt 属性设置的地址\n * en - Alt\n *    -- If the src address fails to load, use the alt property instead.\n */\nimport React from 'react'\nimport { Image } from 'shineout'\n\nexport default function() {\n  return <Image width={200} height={125} src=\"notfound\" alt=\"../../../images/1_b.jpg\" />\n}\n"},691:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(508);t.default=function(){return r.a.createElement(i.a,{width:200,height:125,src:"notfound",title:"Image not exist"})}},692:function(e,t){e.exports="/**\n * cn - 错误处理\n *    -- alt 属性失效或没有 alt 属性时，会显示 title 属性\n * en - Title\n *    -- The title property is displayed when the alt property is invalid or there is no alt property.\n */\nimport React from 'react'\nimport { Image } from 'shineout'\n\nexport default function() {\n  return <Image width={200} height={125} src=\"notfound\" title=\"Image not exist\" />\n}\n"},693:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(508);t.default=function(){return r.a.createElement("div",null,["_modal","_blank","_self","_download"].map(function(e){return r.a.createElement("div",{key:e,style:{display:"inline-block",marginRight:12,textAlign:"center"}},r.a.createElement(i.a,{width:80,height:80,target:e,shape:"thumbnail",fit:"fill",src:"../../../images/1_s.jpg",href:"../../../images/1_b.jpg"}),r.a.createElement("br",null),e)}))}},694:function(e,t){e.exports="/**\n * cn - 原始图片\n *    -- 提供了 4 种方式展示原始图片，弹出层、新窗口打开、当前窗口打开、下载\n * en - Target\n *    -- There are 4 ways to display the original image, pop-up layer, new window open, current window open, download.\n */\nimport React from 'react'\nimport { Image } from 'shineout'\n\nexport default function() {\n  return (\n    <div>\n      {['_modal', '_blank', '_self', '_download'].map(target => (\n        <div key={target} style={{ display: 'inline-block', marginRight: 12, textAlign: 'center' }}>\n          <Image\n            width={80}\n            height={80}\n            target={target}\n            shape=\"thumbnail\"\n            fit=\"fill\"\n            src=\"../../../images/1_s.jpg\"\n            href=\"../../../images/1_b.jpg\"\n          />\n          <br />\n          {target}\n        </div>\n      ))}\n    </div>\n  )\n}\n"},695:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(508);t.default=function(){return r.a.createElement(i.a.Group,null,[1,2,3,4].map(function(e){return r.a.createElement(i.a,{key:e,width:80,height:80,fit:"fill",shape:"thumbnail",src:"../../../images/".concat(e,"_s.jpg"),href:"../../../images/".concat(e,"_b.jpg")})}))}},696:function(e,t){e.exports="/**\n * cn - 图片组\n *    -- 一组图片可以放在 Image.Group 中\n * en - Group\n *    -- A group of images can be placed in the Image.Group .\n */\nimport React from 'react'\nimport { Image } from 'shineout'\n\nexport default function() {\n  return (\n    <Image.Group>\n      {[1, 2, 3, 4].map(i => (\n        <Image\n          key={i}\n          width={80}\n          height={80}\n          fit=\"fill\"\n          shape=\"thumbnail\"\n          src={`../../../images/${i}_s.jpg`}\n          href={`../../../images/${i}_b.jpg`}\n        />\n      ))}\n    </Image.Group>\n  )\n}\n"},697:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(508);t.default=function(){return r.a.createElement(i.a.Group,{pile:!0},[1,2,3,4].map(function(e){return r.a.createElement(i.a,{key:e,width:80,height:80,fit:"fill",shape:"thumbnail",src:"../../../images/".concat(e,"_s.jpg"),href:"../../../images/".concat(e,"_b.jpg")})}))}},698:function(e,t){e.exports="/**\n * cn -\n *    -- 设置 pile 属性可以把缩略图堆叠展示\n * en -\n *    -- Set the pile property to show the image stack.\n */\nimport React from 'react'\nimport { Image } from 'shineout'\n\nexport default function() {\n  return (\n    <Image.Group pile>\n      {[1, 2, 3, 4].map(i => (\n        <Image\n          key={i}\n          width={80}\n          height={80}\n          fit=\"fill\"\n          shape=\"thumbnail\"\n          src={`../../../images/${i}_s.jpg`}\n          href={`../../../images/${i}_b.jpg`}\n        />\n      ))}\n    </Image.Group>\n  )\n}\n"},699:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(508),l=[1,2,3,4].map(function(e){return"../../../images/".concat(e,"_b.jpg")});t.default=function(){return r.a.createElement("div",null,l.map(function(e,t){return r.a.createElement(i.a,{lazy:!0,key:t,fit:"fill",height:"66%",src:e})}))}},700:function(e,t){e.exports="/**\n * cn - 延迟加载\n *    -- lazy 属性为 true 时，图片会在进入屏幕可视区域后加载\n * en - Lazy load\n *    -- When the lazy property is true, the image will load when it enter the visual area of the screen.\n */\nimport React from 'react'\nimport { Image } from 'shineout'\n\nconst data = [1, 2, 3, 4].map(i => `../../../images/${i}_b.jpg`)\n\nexport default function() {\n  return (\n    <div>\n      {data.map((img, i) => (\n        <Image lazy key={i} fit=\"fill\" height=\"66%\" src={img} />\n      ))}\n    </div>\n  )\n}\n"}}]);