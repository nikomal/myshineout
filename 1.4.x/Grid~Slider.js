(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[6],{1423:function(e,t,n){"use strict";var a=n(199),s=n(17),u=n(31),r=n(7),c=n(8),i=n(6),l=n(2),o=n(9),d=n(4),h=n(0),f=n.n(h),v=n(11),m=n.n(v),p=n(5),b=n(37),g=n(35),O=n(53),j=Object(O.b)(function(t){var e=function(e){function n(e){var t;return Object(r.a)(this,n),(t=Object(i.a)(this,Object(l.a)(n).call(this,e))).handleDragStart=t.handleDragStart.bind(Object(d.a)(Object(d.a)(t))),t.handleDrag=t.handleDrag.bind(Object(d.a)(Object(d.a)(t))),t.handleDragEnd=t.handleDragEnd.bind(Object(d.a)(Object(d.a)(t))),t}return Object(o.a)(n,e),Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.client;e&&(this.clientX=e.x,this.clientY=e.y,this.dragging=!0,this.addEvents(),this.props.onDragStart(!0))}},{key:"componentWillUnmount",value:function(){this.removeEvents()}},{key:"addEvents",value:function(){document.addEventListener("mousemove",this.handleDrag),document.addEventListener("mouseup",this.handleDragEnd),document.addEventListener("mouseleave",this.handleDragEnd)}},{key:"removeEvents",value:function(){document.removeEventListener("mousemove",this.handleDrag),document.removeEventListener("mouseup",this.handleDragEnd),document.removeEventListener("mouseleave",this.handleDragEnd)}},{key:"handleDragStart",value:function(e){0===e.button&&(this.clientX=e.clientX,this.clientY=e.clientY,this.dragging=!0,this.addEvents(),this.props.onDragStart(!0))}},{key:"handleDrag",value:function(e){if(this.dragging&&(0!==e.clientX||0!==e.clientY)){var t=e.clientX-this.clientX,n=e.clientY-this.clientY;0===t&&0===n||(this.clientX=e.clientX,this.clientY=e.clientY,this.props.onDrag(t,n,e.clientX,e.clientY))}}},{key:"handleDragEnd",value:function(){this.dragging&&(this.dragging=!1,this.removeEvents(),this.props.onDragEnd(!1))}},{key:"render",value:function(){return f.a.createElement(t,Object.assign({},this.props,{onDragStart:this.handleDragStart}))}}]),n}(h.PureComponent);return e.defaultProps={client:void 0,onDragStart:function(){},onDrag:function(){},onDragEnd:function(){}},e})(function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.disabled?void 0:this.props.onDragStart;return f.a.createElement("div",{onMouseDown:e,className:Object(p.y)("indicator")})}}]),t}(h.PureComponent)),E=n(59);function y(n,e){var t=e.length-1,a=0;if(e.forEach(function(e,t){e<n&&(a=t)}),t<=a)return 1;var r=e[a],c=e[a+1];return(a+(n-r)/(c-r))/t}function k(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:1,a=t.length-1;if(0===n)return t[Math.round(e*a)];if(1<=e)return t[a];var r=Math.floor(e*a),c=t[r],i=(t[r+1]-c)/n,l=(e-r/a)*a;return Object(E.c)(c+Math.round(l*i)*n)}var D=function(e){function n(e){var t;return Object(r.a)(this,n),(t=Object(i.a)(this,Object(l.a)(n).call(this,e))).state={dragging:!1,length:y(e.value,e.scale)},t.bindElement=t.bindElement.bind(Object(d.a)(Object(d.a)(t))),t.handleDrag=t.handleDrag.bind(Object(d.a)(Object(d.a)(t))),t.handleDragEnd=t.handleDragEnd.bind(Object(d.a)(Object(d.a)(t))),t}return Object(o.a)(n,e),Object(c.a)(n,[{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.value,a=t.scale,r=this.state.dragging,c=a.length;(e.value!==n||!r&&e.scale[c-1]!==a[c-1])&&this.setState({length:y(n,a)})}},{key:"bindElement",value:function(e){e&&(this.parentElement=e.parentElement)}},{key:"length2value",value:function(e){var t=this.props;return k(e,t.scale,t.step)}},{key:"handleDrag",value:function(e,t){var n=this.props,a=n.scale,r=n.onDrag,c=n.value,i=n.vertical,l=n.onIncrease,o=i?t/this.parentElement.clientHeight:e/this.parentElement.clientWidth,s=this.state.length,u=this.props.min?y(this.props.min,a):0,d=this.props.max?y(this.props.max,a):1,h=s+(i?-o:o),f=1<h;if(h<u&&(h=u),d<h&&(h=d),f&&l&&l(),this.setState({length:h,dragging:!0}),r){var v=this.length2value(h);v!==c&&r(v)}}},{key:"handleDragEnd",value:function(){var e=this.state.length,t=this.props.scale,n=this.length2value(e);this.setState({length:y(n,t),dragging:!1}),this.props.onChange(this.props.index,n)}},{key:"renderResult",value:function(){var e=this.props,t=e.autoHide,n=e.formatValue;if(!n)return null;var a=this.state.dragging,r=Object(p.y)("result",(!t||a)&&"show"),c=n(this.length2value(this.state.length));return f.a.createElement("div",{className:r},c)}},{key:"render",value:function(){var e=this.props,t=e.index,n=e.disabled,a=e.vertical,r=this.state.length;1===t&&(r=1-r);var c=Object(b.a)({},a?"height":"width","".concat(100*r,"%")),i=Object(p.y)("bar",a&&(1===t?"top":"bottom"),!a&&1===t&&"right");return f.a.createElement("div",{ref:this.bindElement,style:c,className:i},this.renderResult(),f.a.createElement("div",{className:Object(p.y)("bar-bg")}),f.a.createElement(j,{disabled:n,onDrag:this.handleDrag,onDragEnd:this.handleDragEnd}))}}]),n}(g.b);D.defaultProps={formatValue:function(e){return e}};var S=D,x=function(e){function n(e){var t;return Object(r.a)(this,n),(t=Object(i.a)(this,Object(l.a)(n).call(this,e))).state={},t.bindElement=t.bindElement.bind(Object(d.a)(Object(d.a)(t))),t.handleClick=t.handleClick.bind(Object(d.a)(Object(d.a)(t))),t.handleChange=t.handleChange.bind(Object(d.a)(Object(d.a)(t))),t.handleFirstDrag=t.handleDrag.bind(Object(d.a)(Object(d.a)(t)),0),t.handleSecondDrag=t.handleDrag.bind(Object(d.a)(Object(d.a)(t)),1),t}return Object(o.a)(n,e),Object(c.a)(n,[{key:"getValue",value:function(){var e=this.props,t=e.range,n=e.value,a=e.scale[0];if(!t)return n||a;var r=n;return t&&!Array.isArray(n)&&(r=[a,a]),r[0]>r[1]&&(r=[r[1],r[0]]),r}},{key:"bindElement",value:function(e){this.innerElement=e}},{key:"handleClick",value:function(e){if(!(0<=e.target.className.indexOf(Object(p.y)("indicator"))||this.props.disabled)){var t=this.props,n=t.scale,a=t.step,r=t.vertical,c=t.range,i=this.innerElement.getBoundingClientRect(),l=k(r?1-(e.clientY-i.top)/i.height:(e.clientX-i.left)/i.width,n,a);if(c){var o=Object(u.a)(this.getValue());l<o[0]?o[0]=l:o[1]=l,this.props.onChange(o)}else this.props.onChange(l)}}},{key:"handleChange",value:function(e,t){if(this.props.range){var n=Object(u.a)(this.getValue());n[e]=t,this.props.onChange(n)}else this.props.onChange(t)}},{key:"handleDrag",value:function(e,t){this.props.range||this.props.onDrag(t)}},{key:"renderScale",value:function(){var e=this.props,t=e.autoHide,n=e.formatScale,a=e.scale;return n?f.a.createElement("div",{className:Object(p.y)("scale",!t&&"show")},a.map(function(e,t){return f.a.createElement("div",{key:e},f.a.createElement("span",null,n(e,t)))})):null}},{key:"render",value:function(){var e=this.props,t=e.range,n=e.height,a=e.style,r=e.vertical,c=Object(s.a)(e,["range","height","style","vertical"]),i=m()(Object(p.y)("_",r&&"vertical",this.props.disabled&&"disabled"),this.props.className),l=this.getValue();Array.isArray(l)||(l=[0,l]);var o=a;return r&&(o=Object.assign({height:n},a)),f.a.createElement("div",{style:o,className:i},f.a.createElement("div",{className:Object(p.y)("background")}),f.a.createElement("div",{ref:this.bindElement,onClick:this.handleClick,className:Object(p.y)("inner")},t&&f.a.createElement(S,Object.assign({},c,{index:0,max:l[1],onChange:this.handleChange,value:l[0],vertical:r})),f.a.createElement(S,Object.assign({},c,{index:1,min:l[0],onChange:this.handleChange,value:l[1],vertical:r}))),this.renderScale())}}]),n}(h.PureComponent);x.defaultProps={height:200,scale:[0,100],step:1,vertical:!1,formatScale:function(e){return e}};var C=x,N=Object(a.a)(C);N.displayName="ShineoutSlider";t.a=N},196:function(e,t,n){"use strict";var d=n(21),h=n(0),f=n.n(h),v=n(232),m=n(40),p=n(14);t.a=function(u){return function(e){var t=Object(h.useState)(""),n=Object(d.a)(t,2),a=n[0],r=n[1],c=Object(h.useState)([]),i=Object(d.a)(c,1)[0],l=e.location.hash,o=Object(h.useCallback)(function(e){e.forEach(function(e){i.push(e)})},[]),s=Object(h.useCallback)(function(){if(l){var e=document.querySelector(l);e&&setTimeout(function(){e.scrollIntoView()},50)}},[l]);Object(h.useEffect)(function(){s();var e=function(){var n=document.documentElement.scrollTop,e=i.filter(function(e){return 3===e.level&&e.children[0]});if(0!==e.length){var a=e[0].id;e.forEach(function(e){var t=document.querySelector("#".concat(e.id));t&&t.offsetTop<=n&&(a=e.id)}),r(a)}};return document.addEventListener("scroll",e),e(),function(){document.removeEventListener("scroll",e)}},[]);return f.a.createElement("div",{className:Object(p.f)("_")},f.a.createElement(u,{onHeadingSetted:o}),!e.noNav&&f.a.createElement(v.a,{className:Object(p.f)("sticky"),top:50},f.a.createElement("div",{className:Object(p.f)("nav")},i.map(function(e,t){var n=e.children.filter(function(e){return"string"==typeof e});return f.a.createElement("a",{key:t,className:Object(p.f)("level-".concat(e.level),a===e.id&&"active"),onClick:function(e){if(0===m.a.location.search.indexOf("?example="))m.a.push("".concat(m.a.location.pathname,"?example=").concat(e.replace("heading-","")));else{m.a.push("".concat(m.a.location.pathname,"#").concat(e));var t=document.getElementById(e);t&&t.scrollIntoView()}}.bind(null,e.id)},n)}))))}}},200:function(e,t,n){"use strict";var w=n(0),R=n.n(w),u=n(31),L=n(21),a=n(236),d=n.n(a),h=n(32),f=n(36),P=n(14),v=n(12),r=n(11),i=n.n(r),c=n(237),l=n.n(c),H=(n(238),function(e){var t=e.language,n=void 0===t?"lang-jsx":t,a=e.onHighLight,r=e.value,c=Object(w.useRef)(null);return Object(w.useEffect)(function(){var e=c.current;l.a.highlightElement(e,!1,function(){a&&a(e.offsetHeight)})},[]),R.a.createElement("pre",{ref:c,className:i()(n||"lang-jsx",Object(P.a)("pre"))},R.a.createElement("code",null,r))}),T=n(228),o=n(49),s=n(7),m=n(8),p=n(6),b=n(2),g=n(9),O=n(35),j=n(205),X=function(e){function n(e){var t;return Object(s.a)(this,n),(t=Object(p.a)(this,Object(b.a)(n).call(this,e))).state={ready:!1},t.placeholderRef=function(e){t.placeholder=e},t}return Object(g.a)(n,e),Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.lazyId=Object(j.a)({element:this.placeholder,render:function(){return e.setState({ready:!0})}})}},{key:"componentWillUnmount",value:function(){Object(j.b)(this.lazyId)}},{key:"render",value:function(){var e=this.state.ready,t=this.props,n=t.children,a=t.placeholder;return e?n:R.a.createElement("span",{ref:this.placeholderRef},a)}}]),n}(O.b),Y=n(62),M=n(40),V=R.a.createElement("div",{className:Object(P.a)("placeholder")},R.a.createElement(o.a,null));function E(e){var t=e.component,n=e.id,a=e.name,r=e.rawText,c=e.title,i=Object(w.useRef)(null),l=Object(w.useState)(!1),o=Object(L.a)(l,2),s=o[0],u=o[1],d=Object(w.useState)(Object(w.createElement)(t)),h=Object(L.a)(d,1)[0],f=Object(w.useState)(),v=Object(L.a)(f,2),m=v[0],p=v[1],b=Object(w.useState)(),g=Object(L.a)(b,1)[0],O=function e(t,n,a){i.current.style.height="".concat(t*(n-1),"px"),1<n&&setTimeout(function(){e(t,n-1,a)},16),a&&(document.documentElement.scrollTop-=t)};Object(w.useEffect)(function(){if(i.current)if(s)i.current.style.height="".concat(m,"px");else{var e=m%15;0<e&&O(e,1,g),O((m-e)/15,15,g)}},[s]);var j=function(e){u(!s),g=e},E=function(e){return R.a.createElement("a",{href:"javascript:;",className:Object(P.a)("toggle"),onClick:j.bind(null,e)},R.a.createElement(Y.a,{name:s?"code-close":"code"}))},y=r.replace(/(^|\n|\r)\s*\/\*[\s\S]*?\*\/\s*(?:\r|\n|$)/,"").trim(),k=M.a.location.search,D="?example=";if(0===k.indexOf(D)&&(k=k.replace(D,""),a.indexOf(k)<0))return null;var S=c.split("\n"),x=Object(T.a)(S),C=x[0],N=x.slice(1);return C&&(C=C.trim()),R.a.createElement(w.Fragment,null,C&&R.a.createElement("h3",{key:"0",id:n},C),R.a.createElement(X,{placeholder:V},R.a.createElement("div",{className:Object(P.a)("_",s&&"showcode")},R.a.createElement("div",{className:Object(P.a)("body")},h),0<c.length&&R.a.createElement("div",{className:Object(P.a)("desc")},N.map(function(e,t){return R.a.createElement("div",{key:t,dangerouslySetInnerHTML:{__html:e}})}),E(!1)),R.a.createElement("div",{ref:i,className:Object(P.a)("code")},R.a.createElement(H,{onHighLight:function(e){p(e)},onClose:j,value:y}),E(!0)))))}E.defaultProps={rawText:""};var y=function(e){var t=e.children,n=Object(w.useState)(!1),a=Object(L.a)(n,2),r=a[0],c=a[1],i=t.map(function(e){return e.replace(/"fn#fn/g,"").replace(/fn#fn"/g,"").replace(/\\n/g,"\n")}),l=r?"pre":"div";return R.a.createElement("div",{onClick:function(){c(!r)},className:Object(P.e)("console")},R.a.createElement(l,null,i))};y.defaultProps={children:[]};var k=y;function D(e){var t=e.children,n=Object(u.a)(t[1].props.children);try{n.sort(function(e,t){return e.props.children[0].props.children[0].localeCompare(t.props.children[0].props.children[0])})}catch(e){console.log("sort fail...")}return R.a.createElement("div",{style:{overflow:"auto"}},R.a.createElement("table",{className:"doc-api-table"},t[0],R.a.cloneElement(t[1],{children:n})))}D.defaultProps={};var S=D,x=/^<code name="([\w|-]+)" /,C=/^<example name="([\w|-]+)"/;function N(e){var t=e.onHeadingSetted,c=e.codes,i=e.examples,n=e.source,a=Object(w.useState)([]),r=Object(L.a)(a,1)[0],l=Object(w.useState)({}),o=Object(L.a)(l,1)[0];Object(w.useEffect)(function(){t&&t(r)},[]);var s=function(e){r.push(e)};return r=[],R.a.createElement(d.a,{className:Object(P.e)("_"),source:n,renderers:{code:H,heading:function(e){var t,n,a=e.level,r=e.children,c="".concat(a,"-").concat(r[0]),i="h".concat(a);if("object"==typeof r[0])return R.a.createElement(i,null,r);if(!o[c]){var l="heading-".concat((t=a,n=r[0],4===t?Object(f.b)():"".concat(t,"-").concat((n||"").replace(/[\W|-]/g,"-"))));2!==a&&3!==a||s({id:l,level:a,children:r}),o[c]=R.a.createElement(i,{id:l},r)}return o[c]},html:function(e){if("<example />"===e.value)return function(){if(o.examples)return o.examples;if(!i)return R.a.createElement("div",null);var e=Object(v.b)("示例","Example"),t="heading-example-h";return s({id:t,level:2,children:[e]}),o.examples=[R.a.createElement("h2",{key:"h",id:t},e)].concat(Object(u.a)(i.map(function(e,t){if(/\d+-/.test(e.name)){var n="heading-".concat(e.name),a=e.title.split("\n"),r=Object(L.a)(a,1)[0];return s({id:n,level:3,children:[r]}),R.a.createElement(E,Object.assign({key:t,id:n},e,{lazy:2<t}))}}))),o.examples}();var t=e.value.match(C);if(t)return function(t){var e="example-".concat(t);if(!o[e]){var n=(i||[]).find(function(e){return e.name===t});o[e]=n?R.a.createElement(E,n):null}return o[e]}(t[1],e.value.indexOf("noExpand"));if("<br>"===e.value||"<br />"===e.value)return R.a.createElement("br",null);var n,a,r=e.value.match(x);return r?(n=r[1],(a=c[n])?[R.a.createElement(H,{key:"cb",value:a.text})].concat(Object(u.a)(a.log.map(function(e,t){return R.a.createElement(k,{key:t},e)}))):(console.error("Code ".concat(n," not existed")),null)):null},table:S,link:function(e){var t=0===e.href.indexOf("http")?"_blank":void 0;return t?R.a.createElement("a",{href:e.href,target:t},e.children):R.a.createElement(h.a,{to:e.href,target:t},e.children)}}})}N.defaultProps={children:null,examples:null,onHeadingSetted:void 0};var I=n(63),_=n(196);n.d(t,"a",function(){return F});var A,B=((A=function(e){var t=Object(w.useState)(e.source),n=Object(L.a)(t,2),a=n[0],r=n[1];return Object(w.useEffect)(function(){e.loader&&e.loader().then(function(e){r(e.default)})},[]),a?R.a.createElement(N,Object.assign({},e,{source:a})):R.a.createElement(I.a,{style:{minHeight:200}})}).defaultProps={loader:void 0,source:void 0},Object(w.memo)(A));t.b=B;function F(t,n){return Object(_.a)(function(e){return R.a.createElement(B,Object.assign({},e,{noNav:n,loader:t}))})}},205:function(e,t,n){"use strict";n.d(t,"a",function(){return u}),n.d(t,"b",function(){return d});var a=n(214),r=n(36),c=n(19),i={},l=null,o=!1,s=c.b.height;function u(e){var t=e.element.getBoundingClientRect();if(t.bottom<0||t.top>s){var n=Object(r.b)();return i[n]=e,n}return e.render(),null}function d(e){e&&delete i[e]}document.addEventListener("scroll",function(){l&&clearTimeout(l),l=setTimeout(function(){o||(o=!0,Object.keys(i).forEach(function(e){var t=i[e],n=t.element,a=t.render,r=n.getBoundingClientRect();r.bottom<0||r.top>s||(delete i[e],a())}),o=!1),l=null},80)},a.a)},224:function(e,t,n){"use strict";var r=n(2),c=n(57);function i(e,t,n){return(i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()?Reflect.construct:function(e,t,n){var a=[null];a.push.apply(a,t);var r=new(Function.bind.apply(e,a));return n&&Object(c.a)(r,n.prototype),r}).apply(null,arguments)}function l(e){var a="function"==typeof Map?new Map:void 0;return(l=function(e){if(null===e||(t=e,-1===Function.toString.call(t).indexOf("[native code]")))return e;var t;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==a){if(a.has(e))return a.get(e);a.set(e,n)}function n(){return i(e,arguments,Object(r.a)(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),Object(c.a)(n,e)})(e)}n.d(t,"a",function(){return l})}}]);