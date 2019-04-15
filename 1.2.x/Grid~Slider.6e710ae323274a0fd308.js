(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[6],{1365:function(e,t,n){"use strict";var a=n(194),s=n(25),u=n(30),r=n(7),c=n(8),i=n(10),l=n(2),o=n(9),d=n(3),h=n(0),f=n.n(h),m=n(12),v=n.n(m),b=n(5),g=n(34),p=n(33),O=n(48),j=Object(O.b)(function(t){var e=function(e){function n(e){var t;return Object(r.a)(this,n),(t=Object(i.a)(this,Object(l.a)(n).call(this,e))).handleDragStart=t.handleDragStart.bind(Object(d.a)(Object(d.a)(t))),t.handleDrag=t.handleDrag.bind(Object(d.a)(Object(d.a)(t))),t.handleDragEnd=t.handleDragEnd.bind(Object(d.a)(Object(d.a)(t))),t}return Object(o.a)(n,e),Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.client;e&&(this.clientX=e.x,this.clientY=e.y,this.dragging=!0,this.addEvents(),this.props.onDragStart(!0))}},{key:"componentWillUnmount",value:function(){this.removeEvents()}},{key:"addEvents",value:function(){document.addEventListener("mousemove",this.handleDrag),document.addEventListener("mouseup",this.handleDragEnd),document.addEventListener("mouseleave",this.handleDragEnd)}},{key:"removeEvents",value:function(){document.removeEventListener("mousemove",this.handleDrag),document.removeEventListener("mouseup",this.handleDragEnd),document.removeEventListener("mouseleave",this.handleDragEnd)}},{key:"handleDragStart",value:function(e){0===e.button&&(this.clientX=e.clientX,this.clientY=e.clientY,this.dragging=!0,this.addEvents(),this.props.onDragStart(!0))}},{key:"handleDrag",value:function(e){if(this.dragging&&(0!==e.clientX||0!==e.clientY)){var t=e.clientX-this.clientX,n=e.clientY-this.clientY;0===t&&0===n||(this.clientX=e.clientX,this.clientY=e.clientY,this.props.onDrag(t,n,e.clientX,e.clientY))}}},{key:"handleDragEnd",value:function(){this.dragging&&(this.dragging=!1,this.removeEvents(),this.props.onDragEnd(!1))}},{key:"render",value:function(){return f.a.createElement(t,Object.assign({},this.props,{onDragStart:this.handleDragStart}))}}]),n}(h.PureComponent);return e.defaultProps={client:void 0,onDragStart:function(){},onDrag:function(){},onDragEnd:function(){}},e})(function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.disabled?void 0:this.props.onDragStart;return f.a.createElement("div",{onMouseDown:e,className:Object(b.y)("indicator")})}}]),t}(h.PureComponent)),E=n(56);function y(n,e){var t=e.length-1,a=0;if(e.forEach(function(e,t){e<n&&(a=t)}),t<=a)return 1;var r=e[a],c=e[a+1];return(a+(n-r)/(c-r))/t}function k(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:1,a=t.length-1;if(0===n)return t[Math.round(e*a)];if(1<=e)return t[a];var r=Math.floor(e*a),c=t[r],i=(t[r+1]-c)/n,l=(e-r/a)*a;return Object(E.c)(c+Math.round(l*i)*n)}var D=function(e){function n(e){var t;return Object(r.a)(this,n),(t=Object(i.a)(this,Object(l.a)(n).call(this,e))).state={dragging:!1,length:y(e.value,e.scale)},t.bindElement=t.bindElement.bind(Object(d.a)(Object(d.a)(t))),t.handleDrag=t.handleDrag.bind(Object(d.a)(Object(d.a)(t))),t.handleDragEnd=t.handleDragEnd.bind(Object(d.a)(Object(d.a)(t))),t}return Object(o.a)(n,e),Object(c.a)(n,[{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.value,a=t.scale,r=this.state.dragging,c=a.length;(e.value!==n||!r&&e.scale[c-1]!==a[c-1])&&this.setState({length:y(n,a)})}},{key:"bindElement",value:function(e){e&&(this.parentElement=e.parentElement)}},{key:"length2value",value:function(e){var t=this.props;return k(e,t.scale,t.step)}},{key:"handleDrag",value:function(e,t){var n=this.props,a=n.scale,r=n.onDrag,c=n.value,i=n.vertical,l=n.onIncrease,o=i?t/this.parentElement.clientHeight:e/this.parentElement.clientWidth,s=this.state.length,u=this.props.min?y(this.props.min,a):0,d=this.props.max?y(this.props.max,a):1,h=s+(i?-o:o),f=1<h;if(h<u&&(h=u),d<h&&(h=d),f&&l&&l(),this.setState({length:h,dragging:!0}),r){var m=this.length2value(h);m!==c&&r(m)}}},{key:"handleDragEnd",value:function(){var e=this.state.length,t=this.props.scale,n=this.length2value(e);this.setState({length:y(n,t),dragging:!1}),this.props.onChange(this.props.index,n)}},{key:"renderResult",value:function(){var e=this.props,t=e.autoHide,n=e.formatValue;if(!n)return null;var a=this.state.dragging,r=Object(b.y)("result",(!t||a)&&"show"),c=n(this.length2value(this.state.length));return f.a.createElement("div",{className:r},c)}},{key:"render",value:function(){var e=this.props,t=e.index,n=e.disabled,a=e.vertical,r=this.state.length;1===t&&(r=1-r);var c=Object(g.a)({},a?"height":"width","".concat(100*r,"%")),i=Object(b.y)("bar",a&&(1===t?"top":"bottom"),!a&&1===t&&"right");return f.a.createElement("div",{ref:this.bindElement,style:c,className:i},this.renderResult(),f.a.createElement("div",{className:Object(b.y)("bar-bg")}),f.a.createElement(j,{disabled:n,onDrag:this.handleDrag,onDragEnd:this.handleDragEnd}))}}]),n}(p.b);D.defaultProps={formatValue:function(e){return e}};var S=D,x=function(e){function n(e){var t;return Object(r.a)(this,n),(t=Object(i.a)(this,Object(l.a)(n).call(this,e))).state={},t.bindElement=t.bindElement.bind(Object(d.a)(Object(d.a)(t))),t.handleClick=t.handleClick.bind(Object(d.a)(Object(d.a)(t))),t.handleChange=t.handleChange.bind(Object(d.a)(Object(d.a)(t))),t.handleFirstDrag=t.handleDrag.bind(Object(d.a)(Object(d.a)(t)),0),t.handleSecondDrag=t.handleDrag.bind(Object(d.a)(Object(d.a)(t)),1),t}return Object(o.a)(n,e),Object(c.a)(n,[{key:"getValue",value:function(){var e=this.props,t=e.range,n=e.value,a=e.scale[0];if(!t)return n||a;var r=n;return t&&!Array.isArray(n)&&(r=[a,a]),r[0]>r[1]&&(r=[r[1],r[0]]),r}},{key:"bindElement",value:function(e){this.innerElement=e}},{key:"handleClick",value:function(e){if(!(0<=e.target.className.indexOf(Object(b.y)("indicator"))||this.props.disabled)){var t=this.props,n=t.scale,a=t.step,r=t.vertical,c=t.range,i=this.innerElement.getBoundingClientRect(),l=k(r?1-(e.clientY-i.top)/i.height:(e.clientX-i.left)/i.width,n,a);if(c){var o=Object(u.a)(this.getValue());l<o[0]?o[0]=l:o[1]=l,this.props.onChange(o)}else this.props.onChange(l)}}},{key:"handleChange",value:function(e,t){if(this.props.range){var n=Object(u.a)(this.getValue());n[e]=t,this.props.onChange(n)}else this.props.onChange(t)}},{key:"handleDrag",value:function(e,t){this.props.range||this.props.onDrag(t)}},{key:"renderScale",value:function(){var e=this.props,t=e.autoHide,n=e.formatScale,a=e.scale;return n?f.a.createElement("div",{className:Object(b.y)("scale",!t&&"show")},a.map(function(e,t){return f.a.createElement("div",{key:e},f.a.createElement("span",null,n(e,t)))})):null}},{key:"render",value:function(){var e=this.props,t=e.range,n=e.height,a=e.style,r=e.vertical,c=Object(s.a)(e,["range","height","style","vertical"]),i=v()(Object(b.y)("_",r&&"vertical",this.props.disabled&&"disabled"),this.props.className),l=this.getValue();Array.isArray(l)||(l=[0,l]);var o=a;return r&&(o=Object.assign({height:n},a)),f.a.createElement("div",{style:o,className:i},f.a.createElement("div",{className:Object(b.y)("background")}),f.a.createElement("div",{ref:this.bindElement,onClick:this.handleClick,className:Object(b.y)("inner")},t&&f.a.createElement(S,Object.assign({},c,{index:0,max:l[1],onChange:this.handleChange,value:l[0],vertical:r})),f.a.createElement(S,Object.assign({},c,{index:1,min:l[0],onChange:this.handleChange,value:l[1],vertical:r}))),this.renderScale())}}]),n}(h.PureComponent);x.defaultProps={height:200,scale:[0,100],step:1,vertical:!1,formatScale:function(e){return e}};var C=x,N=Object(a.a)(C);N.displayName="ShineoutSlider";t.a=N},192:function(e,t,n){"use strict";var u=n(19),d=n(0),h=n.n(d),f=n(229),m=n(53),v=n(14);t.a=function(s){return function(e){var t=Object(d.useState)(""),n=Object(u.a)(t,2),a=n[0],r=n[1],c=Object(d.useState)([]),i=Object(u.a)(c,1)[0],l=e.location.hash,o=Object(d.useCallback)(function(e){e.forEach(function(e){i.push(e)})},[]);Object(d.useEffect)(function(){!function(e){if(e){var t=document.querySelector(e);t&&setTimeout(function(){t.scrollIntoView()},50)}}(l);var e=function(){var n=document.documentElement.scrollTop,e=i.filter(function(e){return 3===e.level&&e.children[0]});if(0!==e.length){var a=e[0].id;e.forEach(function(e){var t=document.querySelector("#".concat(e.id));t&&t.offsetTop<=n&&(a=e.id)}),r(a)}};return document.addEventListener("scroll",e),e(),function(){document.removeEventListener("scroll",e)}},[]);return h.a.createElement("div",{className:Object(v.f)("_")},h.a.createElement(s,{onHeadingSetted:o}),h.a.createElement(f.a,{className:Object(v.f)("sticky"),top:50},h.a.createElement("div",{className:Object(v.f)("nav")},i.map(function(e,t){var n=e.children.filter(function(e){return"string"==typeof e});return h.a.createElement("a",{key:t,className:Object(v.f)("level-".concat(e.level),a===e.id&&"active"),onClick:function(e){if(0===m.a.location.search.indexOf("?example="))m.a.push("".concat(m.a.location.pathname,"?example=").concat(e.replace("heading-","")));else{var t=document.getElementById(e);t&&t.scrollIntoView()}}.bind(null,e.id)},n)}))))}}},198:function(e,t,n){"use strict";var C=n(0),N=n.n(C),u=n(30),w=n(19),a=n(232),d=n.n(a),h=n(49),L=n(14),f=n(11),r=n(12),i=n.n(r),c=n(233),l=n.n(c),H=(n(234),function(e){var t=e.language,n=void 0===t?"lang-jsx":t,a=e.onHighLight,r=e.value,c=Object(C.useRef)(null);return Object(C.useEffect)(function(){var e=c.current;l.a.highlightElement(e,!1,function(){a&&a(e.offsetHeight)})},[]),N.a.createElement("pre",{ref:c,className:i()(n||"lang-jsx",Object(L.a)("pre"))},N.a.createElement("code",null,r))}),P=n(217),o=n(43),s=n(7),m=n(8),v=n(10),b=n(2),g=n(9),p=n(33),O=n(205),T=function(e){function n(e){var t;return Object(s.a)(this,n),(t=Object(v.a)(this,Object(b.a)(n).call(this,e))).state={ready:!1},t.placeholderRef=function(e){t.placeholder=e},t}return Object(g.a)(n,e),Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.lazyId=Object(O.a)({element:this.placeholder,render:function(){return e.setState({ready:!0})}})}},{key:"componentWillUnmount",value:function(){Object(O.b)(this.lazyId)}},{key:"render",value:function(){var e=this.state.ready,t=this.props,n=t.children,a=t.placeholder;return e?n:N.a.createElement("span",{ref:this.placeholderRef},a)}}]),n}(p.b),X=n(60),Y=n(53),R=N.a.createElement("div",{className:Object(L.a)("placeholder")},N.a.createElement(o.a,null));function j(e){var t=e.component,n=e.id,a=e.name,r=e.rawText,c=e.title,i=Object(C.useRef)(null),l=Object(C.useState)(!1),o=Object(w.a)(l,2),s=o[0],u=o[1],d=Object(C.useState)(),h=Object(w.a)(d,2),f=h[0],m=h[1],v=Object(C.useState)(),b=Object(w.a)(v,1)[0],g=function e(t,n,a){i.current.style.height="".concat(t*(n-1),"px"),1<n&&setTimeout(function(){e(t,n-1,a)},16),a&&(document.documentElement.scrollTop-=t)};Object(C.useEffect)(function(){if(i.current)if(s)i.current.style.height="".concat(f,"px");else{var e=f%15;0<e&&g(e,1,b),g((f-e)/15,15,b)}},[s]);var p=function(e){u(!s),b=e},O=function(e){return N.a.createElement("a",{href:"javascript:;",className:Object(L.a)("toggle"),onClick:p.bind(null,e)},N.a.createElement(X.a,{name:s?"code-close":"code"}))},j=r.replace(/(^|\n|\r)\s*\/\*[\s\S]*?\*\/\s*(?:\r|\n|$)/,"").trim(),E=Y.a.location.search,y="?example=";if(0===E.indexOf(y)&&(E=E.replace(y,""),a.indexOf(E)<0))return null;var k=c.split("\n"),D=Object(P.a)(k),S=D[0],x=D.slice(1);return S&&(S=S.trim()),N.a.createElement(C.Fragment,null,S&&N.a.createElement("h3",{key:"0",id:n},S),N.a.createElement(T,{placeholder:R},N.a.createElement("div",{className:Object(L.a)("_",s&&"showcode")},N.a.createElement("div",{className:Object(L.a)("body")},Object(C.createElement)(t)),0<c.length&&N.a.createElement("div",{className:Object(L.a)("desc")},x.map(function(e,t){return N.a.createElement("div",{key:t,dangerouslySetInnerHTML:{__html:e}})}),O(!1)),N.a.createElement("div",{ref:i,className:Object(L.a)("code")},N.a.createElement(H,{onHighLight:function(e){m(e)},onClose:p,value:j}),O(!0)))))}j.defaultProps={rawText:""};var E=function(e){var t=e.children,n=Object(C.useState)(!1),a=Object(w.a)(n,2),r=a[0],c=a[1],i=t.map(function(e){return e.replace(/"fn#fn/g,"").replace(/fn#fn"/g,"").replace(/\\n/g,"\n")}),l=r?"pre":"div";return N.a.createElement("div",{onClick:function(){c(!r)},className:Object(L.e)("console")},N.a.createElement(l,null,i))};E.defaultProps={children:[]};var y=E;function k(e){var t=e.children;return N.a.createElement("table",{className:"doc-api-table"},t)}k.defaultProps={};var D=k,S=/^<code name="([\w|-]+)" /,x=/^<example name="([\w|-]+)"/;function V(e){var t=e.onHeadingSetted,c=e.codes,i=e.examples,n=e.source,a=Object(C.useState)([]),r=Object(w.a)(a,1)[0],l=Object(C.useState)({}),o=Object(w.a)(l,1)[0];Object(C.useEffect)(function(){t&&t(r)},[]);var s=function(e){r.push(e)};return r=[],N.a.createElement(d.a,{className:Object(L.e)("_"),source:n,renderers:{code:H,heading:function(e){var t,n,a=e.level,r=e.children,c="".concat(a,"-").concat(r[0]),i="h".concat(a);if("object"==typeof r[0])return N.a.createElement(i,null,r);if(!o[c]){var l="heading-".concat((t=a,n=r[0],4===t?Object(h.b)():"".concat(t,"-").concat((n||"").replace(/[\W|-]/g,"-"))));2!==a&&3!==a||s({id:l,level:a,children:r}),o[c]=N.a.createElement(i,{id:l},r)}return o[c]},html:function(e){if("<example />"===e.value)return function(){if(o.examples)return o.examples;if(!i)return N.a.createElement("div",null);var e=Object(f.b)("示例","Example"),t="heading-example-h";return s({id:t,level:2,children:[e]}),o.examples=[N.a.createElement("h2",{key:"h",id:t},e)].concat(Object(u.a)(i.map(function(e,t){if(/\d+-/.test(e.name)){var n="heading-".concat(e.name),a=e.title.split("\n"),r=Object(w.a)(a,1)[0];return s({id:n,level:3,children:[r]}),N.a.createElement(j,Object.assign({key:t,id:n},e,{lazy:2<t}))}}))),o.examples}();var t=e.value.match(x);if(t)return function(t){var e="example-".concat(t);if(!o[e]){var n=(i||[]).find(function(e){return e.name===t});o[e]=n?N.a.createElement(j,n):null}return o[e]}(t[1],e.value.indexOf("noExpand"));if("<br>"===e.value||"<br />"===e.value)return N.a.createElement("br",null);var n,a,r=e.value.match(S);return r?(n=r[1],(a=c[n])?[N.a.createElement(H,{key:"cb",value:a.text})].concat(Object(u.a)(a.log.map(function(e,t){return N.a.createElement(y,{key:t},e)}))):(console.error("Code ".concat(n," not existed")),null)):null},table:D,link:function(e){var t=e.href.indexOf(!1)?"_blank":void 0;return N.a.createElement("a",{href:e.href,target:t},e.children)}}})}V.defaultProps={children:null,examples:null,onHeadingSetted:void 0};var I=n(59),M=n(192);n.d(t,"a",function(){return B});var _,A=((_=function(e){var t=Object(C.useState)(e.source),n=Object(w.a)(t,2),a=n[0],r=n[1];return Object(C.useEffect)(function(){e.loader&&e.loader().then(function(e){r(e.default)})},[]),a?N.a.createElement(V,Object.assign({},e,{source:a})):N.a.createElement(I.a,{style:{minHeight:200}})}).defaultProps={loader:void 0,source:void 0},Object(C.memo)(_));t.b=A;function B(t){return Object(M.a)(function(e){return N.a.createElement(A,Object.assign({},e,{loader:t}))})}},205:function(e,t,n){"use strict";n.d(t,"a",function(){return u}),n.d(t,"b",function(){return d});var a=n(216),r=n(49),c=n(42),i={},l=null,o=!1,s=c.b.height;function u(e){var t=e.element.getBoundingClientRect();if(t.bottom<0||t.top>s){var n=Object(r.b)();return i[n]=e,n}return e.render(),null}function d(e){e&&delete i[e]}document.addEventListener("scroll",function(){l&&clearTimeout(l),l=setTimeout(function(){o||(o=!0,Object.keys(i).forEach(function(e){var t=i[e],n=t.element,a=t.render,r=n.getBoundingClientRect();r.bottom<0||r.top>s||(delete i[e],a())}),o=!1),l=null},80)},a.a)}}]);