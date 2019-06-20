(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[20],{468:function(e,n,t){"use strict";var u=t(22),m=t(0),d=t.n(m),f=t(476),h=t(66),b=t(15);n.a=function(p){return function(e){var n=Object(m.useState)(""),t=Object(u.a)(n,2),r=t[0],a=t[1],s=Object(m.useState)([]),c=Object(u.a)(s,1)[0],o=e.location.hash,i=Object(m.useCallback)(function(e){e.forEach(function(e){c.push(e)})},[]),l=Object(m.useCallback)(function(){if(o){var e=document.querySelector(o);e&&setTimeout(function(){e.scrollIntoView()},50)}},[o]);Object(m.useEffect)(function(){l();var e=function(){var t=document.documentElement.scrollTop,e=c.filter(function(e){return 3===e.level&&e.children[0]});if(0!==e.length){var r=e[0].id;e.forEach(function(e){var n=document.querySelector("#".concat(e.id));n&&n.offsetTop<=t&&(r=e.id)}),a(r)}};return document.addEventListener("scroll",e),e(),function(){document.removeEventListener("scroll",e)}},[]);return d.a.createElement("div",{className:Object(b.f)("_")},d.a.createElement(p,{onHeadingSetted:i}),!e.noNav&&d.a.createElement(f.a,{className:Object(b.f)("sticky"),top:50},d.a.createElement("div",{className:Object(b.f)("nav")},c.map(function(e,n){var t=e.children.filter(function(e){return"string"==typeof e});return d.a.createElement("a",{key:n,className:Object(b.f)("level-".concat(e.level),r===e.id&&"active"),onClick:function(e){if(0===h.a.location.search.indexOf("?example="))h.a.push("".concat(h.a.location.pathname,"?example=").concat(e.replace("heading-","")));else{var n=document.getElementById(e);n&&n.scrollIntoView()}}.bind(null,e.id)},t)}))))}}},469:function(e,n,t){"use strict";var S=t(0),N=t.n(S),p=t(23),D=t(22),r=t(479),u=t.n(r),m=t(77),d=t(32),L=t(15),f=t(33),a=t(13),c=t.n(a),s=t(480),o=t.n(s),A=(t(481),function(e){var n=e.language,t=void 0===n?"lang-jsx":n,r=e.onHighLight,a=e.value,s=Object(S.useRef)(null);return Object(S.useEffect)(function(){var e=s.current;o.a.highlightElement(e,!1,function(){r&&r(e.offsetHeight)})},[]),N.a.createElement("pre",{ref:s,className:c()(t||"lang-jsx",Object(L.a)("pre"))},N.a.createElement("code",null,a))}),M=t(137),i=t(112),l=t(4),h=t(5),b=t(7),g=t(3),y=t(6),v=t(20),j=t(470),I=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(b.a)(this,Object(g.a)(t).call(this,e))).state={ready:!1},n.placeholderRef=function(e){n.placeholder=e},n}return Object(y.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.lazyId=Object(j.a)({element:this.placeholder,render:function(){return e.setState({ready:!0})}})}},{key:"componentWillUnmount",value:function(){Object(j.b)(this.lazyId)}},{key:"render",value:function(){var e=this.state.ready,n=this.props,t=n.children,r=n.placeholder;return e?t:N.a.createElement("span",{ref:this.placeholderRef},r)}}]),t}(v.b),T=t(135),$=t(66),R=N.a.createElement("div",{className:Object(L.a)("placeholder")},N.a.createElement(i.a,null));function O(e){var n=e.component,t=e.id,r=e.name,a=e.rawText,s=e.title,c=Object(S.useRef)(null),o=Object(S.useState)(!1),i=Object(D.a)(o,2),l=i[0],p=i[1],u=Object(S.useState)(),m=Object(D.a)(u,2),d=m[0],f=m[1],h=Object(S.useState)(),b=Object(D.a)(h,1)[0],g=function e(n,t,r){c.current.style.height="".concat(n*(t-1),"px"),1<t&&setTimeout(function(){e(n,t-1,r)},16),r&&(document.documentElement.scrollTop-=n)};Object(S.useEffect)(function(){if(c.current)if(l)c.current.style.height="".concat(d,"px");else{var e=d%15;0<e&&g(e,1,b),g((d-e)/15,15,b)}},[l]);var y=function(e){p(!l),b=e},v=function(e){return N.a.createElement("a",{href:"javascript:;",className:Object(L.a)("toggle"),onClick:y.bind(null,e)},N.a.createElement(T.a,{name:l?"code-close":"code"}))},j=a.replace(/(^|\n|\r)\s*\/\*[\s\S]*?\*\/\s*(?:\r|\n|$)/,"").trim(),O=$.a.location.search,w="?example=";if(0===O.indexOf(w)&&(O=O.replace(w,""),r.indexOf(O)<0))return null;var k=s.split("\n"),E=Object(M.a)(k),x=E[0],C=E.slice(1);return x&&(x=x.trim()),N.a.createElement(S.Fragment,null,x&&N.a.createElement("h3",{key:"0",id:t},x),N.a.createElement(I,{placeholder:R},N.a.createElement("div",{className:Object(L.a)("_",l&&"showcode")},N.a.createElement("div",{className:Object(L.a)("body")},Object(S.createElement)(n)),0<s.length&&N.a.createElement("div",{className:Object(L.a)("desc")},C.map(function(e,n){return N.a.createElement("div",{key:n,dangerouslySetInnerHTML:{__html:e}})}),v(!1)),N.a.createElement("div",{ref:c,className:Object(L.a)("code")},N.a.createElement(A,{onHighLight:function(e){f(e)},onClose:y,value:j}),v(!0)))))}O.defaultProps={rawText:""};var w=function(e){var n=e.children,t=Object(S.useState)(!1),r=Object(D.a)(t,2),a=r[0],s=r[1],c=n.map(function(e){return e.replace(/"fn#fn/g,"").replace(/fn#fn"/g,"").replace(/\\n/g,"\n")}),o=a?"pre":"div";return N.a.createElement("div",{onClick:function(){s(!a)},className:Object(L.e)("console")},N.a.createElement(o,null,c))};w.defaultProps={children:[]};var k=w;function E(e){var n=e.children,t=Object(p.a)(n[1].props.children);try{t.sort(function(e,n){return e.props.children[0].props.children[0].localeCompare(n.props.children[0].props.children[0])})}catch(e){console.log("sort fail...")}return N.a.createElement("div",{style:{overflow:"auto"}},N.a.createElement("table",{className:"doc-api-table"},n[0],N.a.cloneElement(n[1],{children:t})))}E.defaultProps={};var x=E,C=/^<code name="([\w|-]+)" /,B=/^<example name="([\w|-]+)"/;function U(e){var n=e.onHeadingSetted,s=e.codes,c=e.examples,t=e.source,r=Object(S.useState)([]),a=Object(D.a)(r,1)[0],o=Object(S.useState)({}),i=Object(D.a)(o,1)[0];Object(S.useEffect)(function(){n&&n(a)},[]);var l=function(e){a.push(e)};return a=[],N.a.createElement(u.a,{className:Object(L.e)("_"),source:t,renderers:{code:A,heading:function(e){var n,t,r=e.level,a=e.children,s="".concat(r,"-").concat(a[0]),c="h".concat(r);if("object"==typeof a[0])return N.a.createElement(c,null,a);if(!i[s]){var o="heading-".concat((n=r,t=a[0],4===n?Object(d.b)():"".concat(n,"-").concat((t||"").replace(/[\W|-]/g,"-"))));2!==r&&3!==r||l({id:o,level:r,children:a}),i[s]=N.a.createElement(c,{id:o},a)}return i[s]},html:function(e){if("<example />"===e.value)return function(){if(i.examples)return i.examples;if(!c)return N.a.createElement("div",null);var e=Object(f.b)("示例","Example"),n="heading-example-h";return l({id:n,level:2,children:[e]}),i.examples=[N.a.createElement("h2",{key:"h",id:n},e)].concat(Object(p.a)(c.map(function(e,n){if(/\d+-/.test(e.name)){var t="heading-".concat(e.name),r=e.title.split("\n"),a=Object(D.a)(r,1)[0];return l({id:t,level:3,children:[a]}),N.a.createElement(O,Object.assign({key:n,id:t},e,{lazy:2<n}))}}))),i.examples}();var n=e.value.match(B);if(n)return function(n){var e="example-".concat(n);if(!i[e]){var t=(c||[]).find(function(e){return e.name===n});i[e]=t?N.a.createElement(O,t):null}return i[e]}(n[1],e.value.indexOf("noExpand"));if("<br>"===e.value||"<br />"===e.value)return N.a.createElement("br",null);var t,r,a=e.value.match(C);return a?(t=a[1],(r=s[t])?[N.a.createElement(A,{key:"cb",value:r.text})].concat(Object(p.a)(r.log.map(function(e,n){return N.a.createElement(k,{key:n},e)}))):(console.error("Code ".concat(t," not existed")),null)):null},table:x,link:function(e){var n=0===e.href.indexOf("http")?"_blank":void 0;return n?N.a.createElement("a",{href:e.href,target:n},e.children):N.a.createElement(m.a,{to:e.href,target:n},e.children)}}})}U.defaultProps={children:null,examples:null,onHeadingSetted:void 0};var P=t(136),J=t(468);t.d(n,"a",function(){return z});var V,_=((V=function(e){var n=Object(S.useState)(e.source),t=Object(D.a)(n,2),r=t[0],a=t[1];return Object(S.useEffect)(function(){e.loader&&e.loader().then(function(e){a(e.default)})},[]),r?N.a.createElement(U,Object.assign({},e,{source:r})):N.a.createElement(P.a,{style:{minHeight:200}})}).defaultProps={loader:void 0,source:void 0},Object(S.memo)(V));n.b=_;function z(n,t){return Object(J.a)(function(e){return N.a.createElement(_,Object.assign({},e,{noNav:t,loader:n}))})}},470:function(e,n,t){"use strict";t.d(n,"a",function(){return p}),t.d(n,"b",function(){return u});var r=t(472),a=t(32),s=t(35),c={},o=null,i=!1,l=s.b.height;function p(e){var n=e.element.getBoundingClientRect();if(n.bottom<0||n.top>l){var t=Object(a.b)();return c[t]=e,t}return e.render(),null}function u(e){e&&delete c[e]}document.addEventListener("scroll",function(){o&&clearTimeout(o),o=setTimeout(function(){i||(i=!0,Object.keys(c).forEach(function(e){var n=c[e],t=n.element,r=n.render,a=t.getBoundingClientRect();a.bottom<0||a.top>l||(delete c[e],r())}),i=!1),o=null},80)},r.a)},632:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),s=t(468),c=t(469),o=t(33),i=t(633),l=t.n(i),p=t(634),u=t.n(p),m=Object(o.b)(l.a,u.a),d=[{name:"locale",title:Object(o.b)("",""),component:t(635).default,rawText:t(636)}];n.default=Object(s.a)(function(e){return a.a.createElement(c.b,Object.assign({},e,{codes:void 0,source:m,examples:d}))})},633:function(e,n){e.exports='## 安装\n\n通过 npm 安装\n```\n$ npm install shineout\n```\n\n通过 CDN 引用\n```\n<script crossorigin src="https://unpkg.com/shineout/dist/shineout.min.js"><\/script>\n<link rel="stylesheet" href="https://unpkg.com/shineout/dist/theme.default.css" />\n```\n\n## 使用\n``` lang-jsx\nimport { Table } from \'shineout\'\n\n<Table />\n```\n\n## 配置\n\n### webpack\n\nnpm 安装的组件有三个目录，\'es/\'，\'lib/\'，\'css/\'，默认的目录是 \'lib/\'。\n\n- *es* - 目录下是 es6 版本代码，需要调试的开发者可以使用这个版本，需要自行配置 webpack 的 babel-loader 和 less-loader。\n\n- *lib* - 目录下js文件为 es5 版本代码，样式文件保留为 less，需要切换主题的用户可以选择这个版本，需要自行配置 webpack 的 less-loader。\n\n- *css* - 目录下 js 文件为 es5 版本代码，样式文件为 css 格式，不需要配置 webpack。\n\n可以使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import#readme) 按需加载。\n\n\n### theme 主题\n\n目前内置支持了两套主题，default，和兼容 ant-design 的主题 \'antd\'（方便两个组件库混用的场景，只是配色接近，交互和接口参数不同）。\n\nnpm 安装的方式可以通过修改 webpack 的 less-loader 配置来切换主题。\n```\n{\n  loader: \'less-loader\',\n  options: {\n    modifyVars: {\n      \'so-theme\': \'antd\'\n    }\n  }\n}\n```\n\nCDN 引用的方式，可以修改引用路径\n```\n<link rel="stylesheet" href="https://unpkg.com/shineout/dist/theme.default.css" />\n// or\n<link rel="stylesheet" href="https://unpkg.com/shineout/dist/theme.antd.css" />\n```\n\n\n### CSS 前缀\n\n默认通过前缀来隔离 css 代码，默认的前缀是 \'so\'。通常情况下，不需要修改。如果想修改这个值，修改 webpack 的 less-loader 配置\n```\n{\n  loader: \'less-loader\',\n  options: {\n    modifyVars: {\n      \'so-prefix\': \'your-prefix\'\n    }\n  }\n}\n``` \n\n在项目内设置 config\n\n```\nimport config from \'shineout/config\'\nconfig.setConfig({\n  prefix: \'your-prefix\'\n})\n```\n```\n// 或者修改webpack 的 process.env\nplugins: [\n  new webpack.DefinePlugin({\n    \'process.env\': {\n      SO_PREFIX: JSON.stringify(\'your-prefix\'),\n    },\n  }),\n],\n```\n\n### CSS Module\n\n如果需要使用 CSS Module，首先修改 webpack 的 css-loader 配置\n```\n{\n  loader: \'css-loader\',\n  options: {\n    modules: true,\n    localIdentName: \'[local]--[hash:base64:5]\'\n  }\n}\n```\n\n在应用入口设置 config.cssModule 为 true\n```\nimport config from \'shineout/config\'\nconfig.setConfig({\n  cssModule: true\n})\n\n```\n```\n// 或者修改 webpack 的 process.env\nplugins: [\n  new webpack.DefinePlugin({\n    \'process.env\': {\n      CSS_MODULE: true\n    },\n  }),\n],\n```\n\n## 在 Create-React-App 中使用\n\n<br />\n\n[create-react-app](https://facebook.github.io/create-react-app/) 是由 Facebook 官方提供的 React 应用构建工具。\n\n### 安装及构建\n\n使用 create-react-app，需先在全局 npm 中安装：\n\n```\n$ npm i -g create-react-app\n```\n\n构建一个 React 环境的工程：\n\n```\n$ create-react-app first-shineout-demo\n```\n\n期间 create-react-app 会自动将相关依赖帮你安装好，无需执行 npm。\n\n进入目录，并运行：\n```\n$ cd first-shineout-demo\n$ npm start\n```\n\n此时浏览器会自动访问 http://localhost:3000/。\n\n\n### 引入 shineout\n\n现在安装并引入 shineout：\n\n```\n$ npm i shineout\n```\n\n修改 `src/App.js`，引入 shineout 中的 `<Button />` 组件。\n\n```\nimport React, { Component } from \'react\';\nimport \'./App.css\';\n+ import { Button } from \'shineout\'\n\nclass App extends Component {\n  render() {\n    return (\n      <div className="App">\n        + <Button type="success">成功按钮</Button>\n      </div>\n    );\n  }\n}\n\nexport default App;\n```\n\n修改 `src/App.css`，在文件顶部引入 `shineout/dist/theme.default.css`。\n\n```\n+ @import \'~shineout/dist/theme.default.css\';\n\n.App {\n  text-align: center;\n}\n\n...\n```\n\n同时该项目兼容 `antd` 的样式，引入方式如下：\n\n```\n- @import \'~shineout/dist/theme.default.css\';\n+ @import \'~shineout/dist/theme.antd.css\';\n\n.App {\n  text-align: center;\n}\n\n...\n```\n\n### 高级配置\n\n此时，项目中已经包含了 shineout 组件库的相关组件，但距离实际开发还存在一定的隐患，因为刚刚在 `src/App.css` 中引入了所有组件的所需的样式。但在实际开发中我们可能只使用一少部分组件，因此，针对 `create-react-app` 的配置进行一些调整。\n\n引入 [rescripts](https://github.com/harrysolovay/rescripts) 并修改 package.json（ rescripts 社区提供的 create-react-app 配置解决方案之一）。\n\n```\n$ npm i @rescripts/cli\n```\n\n修改 `package.json` 文件：\n\n```\n...\n"scripts": {\n-   "start": "react-scripts start",\n+   "start": "rescripts start",\n-   "build": "react-scripts build",\n+   "build": "rescripts build",\n-   "test": "react-scripts test",\n+   "test": "rescripts test",\n-   "eject": "react-scripts eject"\n}\n...\n```\n\n然后在项目根目录创建一个 `.rescriptsrc.js` 用于修改默认配置。\n\n```\nmodule.exports = [];\n```\n\n### 使用 babel-plugin-import\n\n[babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 是由 antd 团队提供实现按需加载的 Babel 插件。\n\n```\n$ npm i babel-plugin-import @rescripts/rescript-use-babel-config\n```\n\n修改 .rescriptsrc.js 文件，添加 Babel 相关配置：\n\n```\nmodule.exports = [\n+  [\'use-babel-config\', \'.babelrc\']\n];\n```\n\n创建 .babelrc 文件：\n\n```\n{\n  "presets": ["react-app"],\n  "plugins": [\n    [\n      "import", \n      { \n        "libraryName": "shineout", \n        "libraryDirectory": "css", // 引入 css \n        "style": false,\n        "camel2DashComponentName": false,\n        "camel2UnderlineComponentName": false\n      }\n    ]\n  ]\n}\n```\n\n`libraryDirectory` 设置为 css，css 目录结构下为 less 和 jsx 编译后的文件夹。\n\n### 修改主题\n\n因为修改主题需要编译 less ，因此需引入重写 less 相关的内容。\n\n1. 修改 .babelrc 文件\n\n```\n{\n  "presets": ["react-app"],\n  "plugins": [\n    [\n      "import", \n      { \n        "libraryName": "shineout", \n-       "libraryDirectory": "css", // 引入 css \n+       "libraryDirectory": "lib", // 引入 lib \n        "style": false,\n        "camel2DashComponentName": false,\n        "camel2UnderlineComponentName": false\n      }\n    ]\n  ]\n}\n```\n2. 引入 `rescript-use-rewire` 和 `react-app-rewire-less`\n   \n```\n$ npm i @rescripts/rescript-use-rewire react-app-rewire-less\n```\n3. 修改 `.rescriptsrc.js` 文件\n\n```\n+ const rewireLess = require(\'react-app-rewire-less\');\n\nmodule.exports = [\n  [\'use-babel-config\', \'.babelrc\'],\n+ [ \n+   \'use-rewire\',\n+   rewireLess.withLoaderOptions({ \n+     modifyVars: { \'so-theme\': \'antd\' }, // 主题修改为 antd\n+     javascriptEnabled: true\n+   })\n+ ]\n];\n```\n\n4. 重新执行 `npm start` 即可\n\n\n## I18N\n\n组件库中部分组件（Datepicker，Select，Modal等）内置了部分文字，暂时为简体中文（zh-CN）和英文（en-US）两组。默认为英文（en-US），可以通过 webpack 的 process.env 切换\n```\nplugins: [\n  new webpack.DefinePlugin({\n    \'process.env\': {\n      LOCALE: JSON.stringify(\'zh-CN\'),\n    },\n  }),\n],\n```\n\nCDN 引用的版本可以调用 locale 的 setLocale 方法\n\n```\nimport { setLocale } from \'shineout\'\nsetLocale(\'zh-CN\')\n```\n\n其他语言或者部分设置，可以传入一个 Json 数据\n\n```\nsetLocale({ ok: \'yes\' })\n```\n\n当前 locale 内容如下:\n\n<example name="locale" />\n'},634:function(e,n){e.exports='## Install\n\ninstall from npm\n```\n$ npm install shineout\n```\n\nuse tag from a CDN\n```\n<script crossorigin src="https://unpkg.com/shineout/dist/shineout.min.js"><\/script>\n<link rel="stylesheet" href="https://unpkg.com/shineout/dist/theme.default.css" />\n```\n\n\n## Usage\n``` js\nimport { Table } from \'shineout\'\n\n<Table />\n```\n\n## Configuration\n\n### theme\n\nCurrently,there are two sets of theme built in, default and the theme \'antd\' that is compatible with ant-design(Convenient for the mixing of two component libraries and just the color matching is close, the interaction and interface parameters are different.)\n\nYou can switch topics by modifying the webpack\'s less-loader configuration.\n```\n{\n  loader: \'less-loader\',\n  options: {\n    modifyVars: {\n      \'so-theme\': \'antd\'\n    }\n  }\n}\n```\n\n### The prefix of css\n\nBy default, the css code is isolated by prefix. The default prefix is \'so\' and does not need to modified normally. If you wang to modify this value, modify the less-loader configuration of the webpack.\n```\n{\n  loader: \'less-loader\',\n  options: {\n    modifyVars: {\n      \'so-prefix\': \'your-prefix\'\n    }\n  }\n}\n``` \n\nSet config in the project.\n\n```\nimport config from \'shineout/config\'\nconfig.setConfig({\n  prefix: \'your-prefix\'\n})\n```\n```\n// or modify the process.env of webpack\nplugins: [\n  new webpack.DefinePlugin({\n    \'process.env\': {\n      SO_PREFIX: JSON.stringify(\'your-prefix\'),\n    },\n  }),\n],\n```\n\n### CSS Module\n\nIf you need to use the CSS Module, modify the css-loader configuration of the webpack firstly.\n```\n{\n  loader: \'css-loader\',\n  options: {\n    modules: true,\n    localIdentName: \'[local]--[hash:base64:5]\'\n  }\n}\n```\n\nSet the config.cssmodule to true at the application entrance\n```\nimport config from \'shineout/config\'\nconfig.setConfig({\n  cssModule: true\n})\n\n```\n```\n// or modify the process.env of webpack\nplugins: [\n  new webpack.DefinePlugin({\n    \'process.env\': {\n      CSS_MODULE: true\n    },\n  }),\n],\n```\n\n\n## Use Shineout In Create React App\n\n<br />\n\n[create-react-app](https://facebook.github.io/create-react-app/)  is the official React app build tool from Facebook.\n\n### Installation and Building\n\nYou need to install create-react-app with npm:\n\n```\n$ npm i -g create-react-app\n```\n\nCreate a new React project：\n\n```\n$ create-react-app first-shineout-demo\n```\n\nDuring the create-react-app will automatically help you to install dependencies without npm.\n\nThen we go inside first-shineout-demo and start it:\n\n```\n$ cd first-shineout-demo\n$ npm start\n```\n\nAt this point, the browser will automatically open http://localhost:3000/.\n\n\n### Import shineout\n\nVia npm install:\n\n```\n$ npm i shineout\n```\n\nModify `src/App.js`, import `<Button />` from shineout.\n\n```\nimport React, { Component } from \'react\';\nimport \'./App.css\';\n+ import { Button } from \'shineout\'\n\nclass App extends Component {\n  render() {\n    return (\n      <div className="App">\n        + <Button type="success">Success Button</Button>\n      </div>\n    );\n  }\n}\n\nexport default App;\n```\n\nModify `src/App.css`, add `shineout/dist/theme.default.css` at the top of the file.\n\n```\n+ @import \'~shineout/dist/theme.default.css\';\n\n.App {\n  text-align: center;\n}\n\n...\n```\n\nYou can also import the style of antd:\n\n```\n- @import \'~shineout/dist/theme.default.css\';\n+ @import \'~shineout/dist/theme.antd.css\';\n\n.App {\n  text-align: center;\n}\n\n...\n```\n\nVisit other workflows of [create-react-app](https://facebook.github.io/create-react-app/) at its User Guide.\n\n### Advanced configuration\n\nThe relevant components of the shineout component library are already included in the project, but there are some hidden dangers from the actual development, because the required styles of all components have just been introduced in `src/App.css`. However, in actual development we may only use one components, so some adjustments are made to the configuration of `create-react-app`.\n\nImport [rescripts](https://github.com/harrysolovay/rescripts) and Modify package.json.\n\n```\n$ npm i @rescripts/cli\n```\n\nModify `package.json`:\n\n```\n...\n"scripts": {\n-   "start": "react-scripts start",\n+   "start": "rescripts start",\n-   "build": "react-scripts build",\n+   "build": "rescripts build",\n-   "test": "react-scripts test",\n+   "test": "rescripts test",\n-   "eject": "react-scripts eject"\n}\n...\n```\n\nCreate a `.rescriptsrc.js` in root directory.\n\n```\nmodule.exports = [];\n```\n\n### Use babel-plugin-import\n\n[babel-plugin-import](https://github.com/ant-design/babel-plugin-import) create by antd and is a babel plugin.\n\n```\n$ npm i babel-plugin-import @rescripts/rescript-use-babel-config\n```\n\nModify .rescriptsrc.js file, add Babel configuration:\n\n```\nmodule.exports = [\n+   [\'use-babel-config\', \'.babelrc\']\n];\n```\n\ncreate .babelrc file:\n\n```\n{\n  "presets": ["react-app"],\n  "plugins": [\n    [\n      "import", \n      { \n        "libraryName": "shineout", \n        "libraryDirectory": "css", // import css \n        "style": false,\n        "camel2DashComponentName": false,\n        "camel2UnderlineComponentName": false\n      }\n    ]\n  ]\n}\n```\n\n`libraryDirectory` set css, because the compiled folder for less and jsx under the css directory structure.\n\n### Modify Theme\n\nModifying the theme requires compiling less , it is necessary to introduce rewrite less related content.\n\n1. Modify .babelrc file\n\n```\n{\n  "presets": ["react-app"],\n  "plugins": [\n    [\n      "import", \n      { \n        "libraryName": "shineout", \n-       "libraryDirectory": "css", // import css \n+       "libraryDirectory": "lib", // import lib \n        "style": false,\n        "camel2DashComponentName": false,\n        "camel2UnderlineComponentName": false\n      }\n    ]\n  ]\n}\n```\n1. \bInstall `rescript-use-rewire` and `react-app-rewire-less`.\n   \n```\n$ npm i @rescripts/rescript-use-rewire react-app-rewire-less\n```\n3. Modify `.rescript.js` file\n\n```\n+ const rewireLess = require(\'react-app-rewire-less\');\n\nmodule.exports = [\n  [\'use-babel-config\', \'.babelrc\'],\n+ [ \n+   \'use-rewire\',\n+   rewireLess.withLoaderOptions({ \n+     modifyVars: { \'so-theme\': \'antd\' }, // change theme to antd\n+     javascriptEnabled: true\n+   })\n+ ]\n];\n```\n\n4. Re-run `npm start`.\n\n## I18N\n\nSome components (Datepicker, Select, Model, etc..) has build in text, default pack is \'es-US\', set the webpack process.env to \'zh-CN\' changes the language pack to Chinese.\n```\nplugins: [\n  new webpack.DefinePlugin({\n    \'process.env\': {\n      LOCALE: JSON.stringify(\'zh-CN\'),\n    },\n  }),\n],\n```\n\nIf you use Shineout form a CDN, you can call the setLocale method of locale.\n\n```\nimport { setLocale } from \'shineout\'\nsetLocale(\'zh-CN\')\n```\n\nOther language or part of the set can be passed in a Json data.\n\n```\nsetLocale({ ok: \'yes\' })\n```\n\nThe current locale content is as follows:\n\n<example name="locale" />'},635:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),s=t(38);n.default=function(){return a.a.createElement("pre",null,JSON.stringify(Object(s.a)(),null,2))}},636:function(e,n){e.exports="import React from 'react'\nimport { getLocale } from 'shineout/locale'\n\nexport default function() {\n  return <pre>{JSON.stringify(getLocale(), null, 2)}</pre>\n}\n"}}]);