(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[9],{192:function(e,t,n){"use strict";var s=n(20),m=n(0),d=n.n(m),p=n(229),f=n(45),y=n(14);t.a=function(i){return function(e){var t=Object(m.useState)(""),n=Object(s.a)(t,2),a=n[0],r=n[1],o=Object(m.useState)([]),l=Object(s.a)(o,1)[0],u=e.location.hash;console.log(l);var c=Object(m.useCallback)(function(e){e.forEach(function(e){l.push(e)})},[]);Object(m.useEffect)(function(){!function(e){if(e){var t=document.querySelector(e);t&&setTimeout(function(){t.scrollIntoView()},50)}}(u);var e=function(){var n=document.documentElement.scrollTop,e=l.filter(function(e){return 3===e.level&&e.children[0]});if(0!==e.length){var a=e[0].id;e.forEach(function(e){var t=document.querySelector("#".concat(e.id));t&&t.offsetTop<=n&&(a=e.id)}),r(a)}};return document.addEventListener("scroll",e),e(),function(){document.removeEventListener("scroll",e)}},[]);return d.a.createElement("div",{className:Object(y.f)("_")},d.a.createElement(i,{onHeadingSetted:c}),d.a.createElement(p.a,{className:Object(y.f)("sticky"),top:50},d.a.createElement("div",{className:Object(y.f)("nav")},l.map(function(e,t){var n=e.children.filter(function(e){return"string"==typeof e});return d.a.createElement("a",{key:t,className:Object(y.f)("level-".concat(e.level),a===e.id&&"active"),onClick:function(e){if(0===f.a.location.search.indexOf("?example="))f.a.push("".concat(f.a.location.pathname,"?example=").concat(e.replace("heading-","")));else{var t=document.getElementById(e);t&&t.scrollIntoView()}}.bind(null,e.id)},n)}))))}}},198:function(e,t,n){"use strict";var k=n(0),w=n.n(k),s=n(30),D=n(20),a=n(232),m=n.n(a),d=n(50),L=n(14),p=n(11),r=n(12),l=n.n(r),o=n(233),u=n.n(o),G=(n(234),function(e){var t=e.language,n=void 0===t?"lang-jsx":t,a=e.onHighLight,r=e.value,o=Object(k.useRef)(null);return Object(k.useEffect)(function(){var e=o.current;u.a.highlightElement(e,!1,function(){a&&a(e.offsetHeight)})},[]),w.a.createElement("pre",{ref:o,className:l()(n||"lang-jsx",Object(L.a)("pre"))},w.a.createElement("code",null,r))}),R=n(217),c=n(44),i=n(7),f=n(8),y=n(10),g=n(2),b=n(9),B=n(34),E=n(205),T=function(e){function n(e){var t;return Object(i.a)(this,n),(t=Object(y.a)(this,Object(g.a)(n).call(this,e))).state={ready:!1},t.placeholderRef=function(e){t.placeholder=e},t}return Object(b.a)(n,e),Object(f.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.lazyId=Object(E.a)({element:this.placeholder,render:function(){return e.setState({ready:!0})}})}},{key:"componentWillUnmount",value:function(){Object(E.b)(this.lazyId)}},{key:"render",value:function(){var e=this.state.ready,t=this.props,n=t.children,a=t.placeholder;return e?n:w.a.createElement("span",{ref:this.placeholderRef},a)}}]),n}(B.b),P=n(60),N=n(45),A=w.a.createElement("div",{className:Object(L.a)("placeholder")},w.a.createElement(c.a,null));function h(e){var t=e.component,n=e.id,a=e.name,r=e.rawText,o=e.title,l=Object(k.useRef)(null),u=Object(k.useState)(!1),c=Object(D.a)(u,2),i=c[0],s=c[1],m=Object(k.useState)(),d=Object(D.a)(m,2),p=d[0],f=d[1],y=Object(k.useState)(),g=Object(D.a)(y,1)[0],b=function e(t,n,a){l.current.style.height="".concat(t*(n-1),"px"),1<n&&setTimeout(function(){e(t,n-1,a)},16),a&&(document.documentElement.scrollTop-=t)};Object(k.useEffect)(function(){if(l.current)if(i)l.current.style.height="".concat(p,"px");else{var e=p%15;0<e&&b(e,1,g),b((p-e)/15,15,g)}},[i]);var B=function(e){s(!i),g=e},E=function(e){return w.a.createElement("a",{href:"javascript:;",className:Object(L.a)("toggle"),onClick:B.bind(null,e)},w.a.createElement(P.a,{name:i?"code-close":"code"}))},h=r.replace(/(^|\n|\r)\s*\/\*[\s\S]*?\*\/\s*(?:\r|\n|$)/,"").trim(),v=N.a.location.search,O="?example=";if(0===v.indexOf(O)&&(v=v.replace(O,""),a.indexOf(v)<0))return null;var j=o.split("\n"),x=Object(R.a)(j),z=x[0],S=x.slice(1);return z&&(z=z.trim()),w.a.createElement(k.Fragment,null,z&&w.a.createElement("h3",{key:"0",id:n},z),w.a.createElement(T,{placeholder:A},w.a.createElement("div",{className:Object(L.a)("_",i&&"showcode")},w.a.createElement("div",{className:Object(L.a)("body")},Object(k.createElement)(t)),0<o.length&&w.a.createElement("div",{className:Object(L.a)("desc")},S.map(function(e,t){return w.a.createElement("div",{key:t,dangerouslySetInnerHTML:{__html:e}})}),E(!1)),w.a.createElement("div",{ref:l,className:Object(L.a)("code")},w.a.createElement(G,{onHighLight:function(e){f(e)},onClose:B,value:h}),E(!0)))))}h.defaultProps={rawText:""};var v=function(e){var t=e.children,n=Object(k.useState)(!1),a=Object(D.a)(n,2),r=a[0],o=a[1],l=t.map(function(e){return e.replace(/"fn#fn/g,"").replace(/fn#fn"/g,"").replace(/\\n/g,"\n")}),u=r?"pre":"div";return w.a.createElement("div",{onClick:function(){o(!r)},className:Object(L.e)("console")},w.a.createElement(u,null,l))};v.defaultProps={children:[]};var O=v;function j(e){var t=e.children;return w.a.createElement("table",{className:"doc-api-table"},t)}j.defaultProps={};var x=j,z=/^<code name="([\w|-]+)" /,S=/^<example name="([\w|-]+)"/;function C(e){var t=e.onHeadingSetted,o=e.codes,l=e.examples,n=e.source,a=Object(k.useState)([]),r=Object(D.a)(a,1)[0],u=Object(k.useState)({}),c=Object(D.a)(u,1)[0];Object(k.useEffect)(function(){t&&t(r)},[]);var i=function(e){r.push(e)};return r=[],w.a.createElement(m.a,{className:Object(L.e)("_"),source:n,renderers:{code:G,heading:function(e){var t,n,a=e.level,r=e.children,o="".concat(a,"-").concat(r[0]),l="h".concat(a);if("object"==typeof r[0])return w.a.createElement(l,null,r);if(!c[o]){var u="heading-".concat((t=a,n=r[0],4===t?Object(d.b)():"".concat(t,"-").concat((n||"").replace(/[\W|-]/g,"-"))));2!==a&&3!==a||i({id:u,level:a,children:r}),c[o]=w.a.createElement(l,{id:u},r)}return c[o]},html:function(e){if("<example />"===e.value)return function(){if(c.examples)return c.examples;if(!l)return w.a.createElement("div",null);var e=Object(p.b)("示例","Example"),t="heading-example-h";return i({id:t,level:2,children:[e]}),c.examples=[w.a.createElement("h2",{key:"h",id:t},e)].concat(Object(s.a)(l.map(function(e,t){if(/\d+-/.test(e.name)){var n="heading-".concat(e.name),a=e.title.split("\n"),r=Object(D.a)(a,1)[0];return i({id:n,level:3,children:[r]}),w.a.createElement(h,Object.assign({key:t,id:n},e,{lazy:2<t}))}}))),c.examples}();var t=e.value.match(S);if(t)return function(t){var e="example-".concat(t);if(!c[e]){var n=(l||[]).find(function(e){return e.name===t});c[e]=n?w.a.createElement(h,n):null}return c[e]}(t[1],e.value.indexOf("noExpand"));if("<br>"===e.value||"<br />"===e.value)return w.a.createElement("br",null);var n,a,r=e.value.match(z);return r?(n=r[1],(a=o[n])?[w.a.createElement(G,{key:"cb",value:a.text})].concat(Object(s.a)(a.log.map(function(e,t){return w.a.createElement(O,{key:t},e)}))):(console.error("Code ".concat(n," not existed")),null)):null},table:x,link:function(e){var t=e.href.indexOf(!1)?"_blank":void 0;return w.a.createElement("a",{href:e.href,target:t},e.children)}}})}C.defaultProps={children:null,examples:null,onHeadingSetted:void 0};var I=n(59),W=n(192);n.d(t,"a",function(){return _});var F,H=((F=function(e){var t=Object(k.useState)(e.source),n=Object(D.a)(t,2),a=n[0],r=n[1];return Object(k.useEffect)(function(){e.loader&&e.loader().then(function(e){r(e.default)})},[]),a?w.a.createElement(C,Object.assign({},e,{source:a})):w.a.createElement(I.a,{style:{minHeight:200}})}).defaultProps={loader:void 0,source:void 0},Object(k.memo)(F));t.b=H;function _(t){return Object(W.a)(function(e){return w.a.createElement(H,Object.assign({},e,{loader:t}))})}},205:function(e,t,n){"use strict";n.d(t,"a",function(){return s}),n.d(t,"b",function(){return m});var a=n(216),r=n(50),o=n(43),l={},u=null,c=!1,i=o.b.height;function s(e){var t=e.element.getBoundingClientRect();if(t.bottom<0||t.top>i){var n=Object(r.b)();return l[n]=e,n}return e.render(),null}function m(e){e&&delete l[e]}document.addEventListener("scroll",function(){u&&clearTimeout(u),u=setTimeout(function(){c||(c=!0,Object.keys(l).forEach(function(e){var t=l[e],n=t.element,a=t.render,r=n.getBoundingClientRect();r.bottom<0||r.top>i||(delete l[e],a())}),c=!1),u=null},80)},a.a)},464:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(192),l=n(198),u=n(11),c=n(465),i=n.n(c),s=n(466),m=n.n(s),d=Object(u.b)(i.a,m.a),p=[{name:"1-base",title:Object(u.b)("基本用法 \n Button 内置了几种常用的样式，通过 type 来使用","Base \n Button has several built-in styles, used by type."),component:n(467).default,rawText:n(468)},{name:"2-outline",title:Object(u.b)("透明背景 \n 添加 outline 属性可以设置为透明背景，type 不能为 default 和 link。","Outline \n Adding outline property can set background to transparent. Outline type can not be default and link."),component:n(469).default,rawText:n(470)},{name:"3-disabled",title:Object(u.b)("不可用 \n 添加 disabled 属性可以禁用按钮。","Disabled \n Adding disabled property can disable the button."),component:n(471).default,rawText:n(472)},{name:"4-size",title:Object(u.b)("大小 \n 一共有三种尺寸，['small', 'default', 'large']，默认为 'default'","Size \n There are three sizes, ['small', 'default', 'large'], default value is 'default'."),component:n(473).default,rawText:n(474)},{name:"5-loading",title:Object(u.b)("加载中 \n 设定 loading 属性，可以让按钮变成加载中状态","Loading \n Set loading property can add a loading indicator to button."),component:n(475).default,rawText:n(476)},{name:"6-href",title:Object(u.b)("链接 \n 设置 href 属性，按钮会渲染为 a 标签，同时可以设置 target 属性","Link \n Set the href attribute, the button will be rendered as <a> tag and you can also set the target property."),component:n(477).default,rawText:n(478)},{name:"7-icon",title:Object(u.b)("图标 \n 需要图标可以在内容中自行加入","Icon \n If you need a icon, you can add it to the content by yourself."),component:n(479).default,rawText:n(480)},{name:"8-group",title:Object(u.b)("组合 \n 一组 Button 可以用 Button.Group 容器中，按钮样式通过 Button.Gorup 的 size, type, outline 属性设置","Group \n A series of buttons can group by Button.Group, set styles by Button.Group's size, type, and outline property."),component:n(481).default,rawText:n(482)}];t.default=Object(o.a)(function(e){return r.a.createElement(l.b,Object.assign({},e,{codes:void 0,source:d,examples:p}))})},465:function(e,t){e.exports="# Button *按钮*\n\n<example />\n\n## API\n\n### Button\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| children | string \\| ReactElement | 必填 |  |\n| className | string | 无 | 扩展className |\n| disabled | bool | false | 禁用 |\n| href | string | 无 | 如果设置了 href 属性，将会用 &lt;a> 代替 &lt;button> |\n| outline | boolean | false | outline 为 true 时，显示透明背景的按钮 |\n| size | string | 'default' | 可选值 \\['large', 'default', 'small'] |\n| style | object | 无 | 最外层扩展样式 |\n| type | string | 'default' | 可选值 \\['default', 'primary', 'secondary', 'success', 'warning', 'danger', 'link'] |\n\n### Button.Group\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| children | \\[Button] | 必填 | 由 Button 组成的 array |\n| size | string | 无 | 同 Button；如果 Button 和 Group 同时设置 size，以 Group 为准 |\n| outline | boolean | 无 | 同 Button；如果 Button 未设置，使用此值 |\n| type | string | 无 | 同 Button；如果 Button 和 Group 同时设置 type，以 Group 为准 |"},466:function(e,t){e.exports="# Button\n\n<example />\n\n## API\n\n### Button\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| children | string \\| ReactElement | required |  |\n| className | string | - | extend className |\n| disabled | bool | false | Specifies the button should be disabled |\n| href | string | - | If the href attribute is set, &lt;a> will be used instead of &lt;button>. |\n| outline | boolean | false | When outline is true, the background is transparent. |\n| size | string | 'default' | optional value \\['large', 'default', 'small'] |\n| style | object | - | Container element style |\n| type | string | 'default' | optional value \\['default', 'primary', 'secondary', 'success', 'warning', 'danger', 'link'] |\n\n### Button.Group\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| children | \\[Button] | required | array of Button |\n| size | string | - | same as Button |\n| outline | boolean | - | same as Button |\n| type | string | - | same as Button |"},467:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(62);t.default=function(){return r.a.createElement("div",null,r.a.createElement(o.a,null,"Default"),r.a.createElement(o.a,{type:"primary"},"Primary"),r.a.createElement(o.a,{type:"secondary"},"Secondary"),r.a.createElement(o.a,{type:"success"},"Success"),r.a.createElement(o.a,{type:"warning"},"Warning"),r.a.createElement(o.a,{type:"danger"},"Danger"),r.a.createElement(o.a,{type:"link"},"Link"))}},468:function(e,t){e.exports='/**\n * cn - 基本用法\n *    -- Button 内置了几种常用的样式，通过 type 来使用\n * en - Base\n *    -- Button has several built-in styles, used by type.\n */\nimport React from \'react\'\nimport { Button } from \'shineout\'\n\nexport default function() {\n  return (\n    <div>\n      <Button>Default</Button>\n      <Button type="primary">Primary</Button>\n      <Button type="secondary">Secondary</Button>\n      <Button type="success">Success</Button>\n      <Button type="warning">Warning</Button>\n      <Button type="danger">Danger</Button>\n      <Button type="link">Link</Button>\n    </div>\n  )\n}\n'},469:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(62);t.default=function(){return r.a.createElement("div",null,r.a.createElement(o.a,{outline:!0,type:"primary"},"Primary"),r.a.createElement(o.a,{outline:!0,type:"secondary"},"Secondary"),r.a.createElement(o.a,{outline:!0,type:"success"},"Success"),r.a.createElement(o.a,{outline:!0,type:"warning"},"Warning"),r.a.createElement(o.a,{outline:!0,type:"danger"},"Danger"))}},470:function(e,t){e.exports='/**\n * cn - 透明背景\n *    -- 添加 outline 属性可以设置为透明背景，type 不能为 default 和 link。\n * en - Outline\n *    -- Adding outline property can set background to transparent. Outline type can not be default and link.\n */\nimport React from \'react\'\nimport { Button } from \'shineout\'\n\nexport default function() {\n  return (\n    <div>\n      <Button outline type="primary">\n        Primary\n      </Button>\n      <Button outline type="secondary">\n        Secondary\n      </Button>\n      <Button outline type="success">\n        Success\n      </Button>\n      <Button outline type="warning">\n        Warning\n      </Button>\n      <Button outline type="danger">\n        Danger\n      </Button>\n    </div>\n  )\n}\n'},471:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(62);t.default=function(){return r.a.createElement("div",null,r.a.createElement(o.a,{disabled:!0},"Default"),r.a.createElement(o.a,{disabled:!0,type:"primary"},"Primary"),r.a.createElement(o.a,{disabled:!0,type:"secondary"},"Secondary"),r.a.createElement(o.a,{disabled:!0,type:"success"},"Success"),r.a.createElement(o.a,{disabled:!0,type:"warning"},"Warning"),r.a.createElement(o.a,{disabled:!0,type:"danger"},"Danger"),r.a.createElement(o.a,{disabled:!0,type:"link"},"Link"))}},472:function(e,t){e.exports='/**\n * cn - 不可用\n *    -- 添加 disabled 属性可以禁用按钮。\n * en - Disabled\n *    -- Adding disabled property can disable the button.\n */\nimport React from \'react\'\nimport { Button } from \'shineout\'\n\nexport default function() {\n  return (\n    <div>\n      <Button disabled>Default</Button>\n      <Button disabled type="primary">\n        Primary\n      </Button>\n      <Button disabled type="secondary">\n        Secondary\n      </Button>\n      <Button disabled type="success">\n        Success\n      </Button>\n      <Button disabled type="warning">\n        Warning\n      </Button>\n      <Button disabled type="danger">\n        Danger\n      </Button>\n      <Button disabled type="link">\n        Link\n      </Button>\n    </div>\n  )\n}\n'},473:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(62);t.default=function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(o.a,{size:"small"},"Default"),r.a.createElement(o.a,{size:"small",type:"primary"},"Primary"),r.a.createElement(o.a,{size:"small",type:"secondary"},"Secondary"),r.a.createElement(o.a,{size:"small",type:"success"},"Success"),r.a.createElement(o.a,{size:"small",type:"warning"},"Warning"),r.a.createElement(o.a,{size:"small",type:"danger"},"Danger"),r.a.createElement(o.a,{size:"small",type:"link"},"Link")),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(o.a,null,"Default"),r.a.createElement(o.a,{type:"primary"},"Primary"),r.a.createElement(o.a,{type:"secondary"},"Secondary"),r.a.createElement(o.a,{type:"success"},"Success"),r.a.createElement(o.a,{type:"warning"},"Warning"),r.a.createElement(o.a,{type:"danger"},"Danger"),r.a.createElement(o.a,{type:"link"},"Link")),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(o.a,{size:"large"},"Default"),r.a.createElement(o.a,{size:"large",type:"primary"},"Primary"),r.a.createElement(o.a,{size:"large",type:"secondary"},"Secondary"),r.a.createElement(o.a,{size:"large",type:"success"},"Success"),r.a.createElement(o.a,{size:"large",type:"warning"},"Warning"),r.a.createElement(o.a,{size:"large",type:"danger"},"Danger"),r.a.createElement(o.a,{size:"large",type:"link"},"Link")))}},474:function(e,t){e.exports='/**\n * cn - 大小\n *    -- 一共有三种尺寸，[\'small\', \'default\', \'large\']，默认为 \'default\'\n * en - Size\n *    -- There are three sizes, [\'small\', \'default\', \'large\'], default value is \'default\'.\n */\nimport React from \'react\'\nimport { Button } from \'shineout\'\n\nexport default function() {\n  return (\n    <div>\n      <div>\n        <Button size="small">Default</Button>\n        <Button size="small" type="primary">\n          Primary\n        </Button>\n        <Button size="small" type="secondary">\n          Secondary\n        </Button>\n        <Button size="small" type="success">\n          Success\n        </Button>\n        <Button size="small" type="warning">\n          Warning\n        </Button>\n        <Button size="small" type="danger">\n          Danger\n        </Button>\n        <Button size="small" type="link">\n          Link\n        </Button>\n      </div>\n      <br />\n      <div>\n        <Button>Default</Button>\n        <Button type="primary">Primary</Button>\n        <Button type="secondary">Secondary</Button>\n        <Button type="success">Success</Button>\n        <Button type="warning">Warning</Button>\n        <Button type="danger">Danger</Button>\n        <Button type="link">Link</Button>\n      </div>\n      <br />\n      <div>\n        <Button size="large">Default</Button>\n        <Button size="large" type="primary">\n          Primary\n        </Button>\n        <Button size="large" type="secondary">\n          Secondary\n        </Button>\n        <Button size="large" type="success">\n          Success\n        </Button>\n        <Button size="large" type="warning">\n          Warning\n        </Button>\n        <Button size="large" type="danger">\n          Danger\n        </Button>\n        <Button size="large" type="link">\n          Link\n        </Button>\n      </div>\n    </div>\n  )\n}\n'},475:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(62);t.default=function(){return r.a.createElement("div",null,r.a.createElement(o.a,{loading:!0,size:"small",type:"primary"},"Small"),r.a.createElement(o.a,{loading:!0,type:"primary"},"Default"),r.a.createElement(o.a,{loading:!0,size:"large",type:"primary"},"Large"))}},476:function(e,t){e.exports='/**\n * cn - 加载中\n *    -- 设定 loading 属性，可以让按钮变成加载中状态\n * en - Loading\n *    -- Set loading property can add a loading indicator to button.\n */\nimport React from \'react\'\nimport { Button } from \'shineout\'\n\nexport default function() {\n  return (\n    <div>\n      <Button loading size="small" type="primary">\n        Small\n      </Button>\n      <Button loading type="primary">\n        Default\n      </Button>\n      <Button loading size="large" type="primary">\n        Large\n      </Button>\n    </div>\n  )\n}\n'},477:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(62);t.default=function(){return r.a.createElement(o.a,{href:"#/",target:"_blank",type:"primary"},"Home")}},478:function(e,t){e.exports='/**\n * cn - 链接\n *    -- 设置 href 属性，按钮会渲染为 a 标签，同时可以设置 target 属性\n * en - Link\n *    -- Set the href attribute, the button will be rendered as <a> tag and you can also set the target property.\n */\nimport React from \'react\'\nimport { Button } from \'shineout\'\n\nexport default function() {\n  return (\n    <Button href="#/" target="_blank" type="primary">\n      Home\n    </Button>\n  )\n}\n'},479:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(62),l=n(54);t.default=function(){return r.a.createElement("div",null,r.a.createElement(o.a,{size:"small",type:"primary"},r.a.createElement(l.a,{name:"home"})," Small"),r.a.createElement(o.a,{type:"primary"},"Default ",r.a.createElement(l.a,{name:"home"})),r.a.createElement(o.a,{size:"large",type:"primary"},r.a.createElement(l.a,{name:"home"})," Large"))}},480:function(e,t){e.exports='/**\n * cn - 图标\n *    -- 需要图标可以在内容中自行加入\n * en - Icon\n *    -- If you need a icon, you can add it to the content by yourself.\n */\nimport React from \'react\'\nimport { Button } from \'shineout\'\nimport FontAwesome from \'../Icon/FontAwesome\'\n\nexport default function() {\n  return (\n    <div>\n      <Button size="small" type="primary">\n        <FontAwesome name="home" /> Small\n      </Button>\n      <Button type="primary">\n        Default <FontAwesome name="home" />\n      </Button>\n      <Button size="large" type="primary">\n        <FontAwesome name="home" /> Large\n      </Button>\n    </div>\n  )\n}\n'},481:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(62),l=n(54);t.default=function(){return r.a.createElement("div",null,r.a.createElement(o.a.Group,null,r.a.createElement(o.a,null,"Left"),r.a.createElement(o.a,null,"Center"),r.a.createElement(o.a,null,"Right")),r.a.createElement("br",null),r.a.createElement(o.a.Group,{outline:!0,type:"primary"},r.a.createElement(o.a,null,"Left"),r.a.createElement(o.a,null,"Center"),r.a.createElement(o.a,null,"Right")),r.a.createElement("br",null),r.a.createElement(o.a.Group,{type:"primary"},r.a.createElement(o.a,null,r.a.createElement(l.a,{name:"angle-left"}),"  Left"),r.a.createElement(o.a,null,"Center"),r.a.createElement(o.a,null,"Right  ",r.a.createElement(l.a,{name:"angle-right"}))),r.a.createElement("br",null),r.a.createElement(o.a.Group,{size:"large"},r.a.createElement(o.a,null,"Left"),r.a.createElement(o.a,null,"Center"),r.a.createElement(o.a,null,"Right")))}},482:function(e,t){e.exports='/**\n * cn - 组合\n *    -- 一组 Button 可以用 Button.Group 容器中，按钮样式通过 Button.Gorup 的 size, type, outline 属性设置\n * en - Group\n *    -- A series of buttons can group by Button.Group, set styles by Button.Group\'s size, type, and outline property.\n */\nimport React from \'react\'\nimport { Button } from \'shineout\'\nimport FontAwesome from \'../Icon/FontAwesome\'\n\nexport default function() {\n  return (\n    <div>\n      <Button.Group>\n        <Button>Left</Button>\n        <Button>Center</Button>\n        <Button>Right</Button>\n      </Button.Group>\n\n      <br />\n\n      <Button.Group outline type="primary">\n        <Button>Left</Button>\n        <Button>Center</Button>\n        <Button>Right</Button>\n      </Button.Group>\n\n      <br />\n\n      <Button.Group type="primary">\n        <Button>\n          <FontAwesome name="angle-left" />\n          &nbsp; Left\n        </Button>\n        <Button>Center</Button>\n        <Button>\n          Right &nbsp;\n          <FontAwesome name="angle-right" />\n        </Button>\n      </Button.Group>\n\n      <br />\n\n      <Button.Group size="large">\n        <Button>Left</Button>\n        <Button>Center</Button>\n        <Button>Right</Button>\n      </Button.Group>\n    </div>\n  )\n}\n'}}]);