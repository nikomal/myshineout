webpackJsonp([27],{1413:function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=o(1),s=o.n(t),a=o(119),r=o(118),l=o(78),c=o(718),i=o.n(c),p=o(719),u=o.n(p),f=Object(l.a)(i.a,u.a),d=[{name:"locale",title:Object(l.a)("",""),component:o(720).default,rawText:o(721)}];e.default=Object(a.a)(function(n){return s.a.createElement(r.b,Object.assign({},n,{codes:void 0,source:f,examples:d}))})},718:function(n,e){n.exports="## 安装\n```\n$ npm install shineout\n```\n\n## 使用\n``` js\nimport { Table } from 'shineout'\n\n<Table />\n```\n\n## 配置\n\n### theme 主题\n\n目前内置支持了两套主题，bootstrap（v3版本, 默认），和兼容 ant-design 的主题 'antd'（方便两个组件库混用的场景，只是配色接近，交互和接口参数不同）。\n\n可以通过修改 webpack 的 less-loader 配置来切换主题。\n```\n{\n  loader: 'less-loader',\n  options: {\n    modifyVars: {\n      'so-theme': 'antd'\n    }\n  }\n}\n```\n\n### CSS 前缀\n\n默认通过前缀来隔离 css 代码，默认的前缀是 'so'。通常情况下，不需要修改。如果想修改这个值，修改 webpack 的 less-loader 配置\n```\n{\n  loader: 'less-loader',\n  options: {\n    modifyVars: {\n      'so-prefix': 'your-prefix'\n    }\n  }\n}\n``` \n\n在项目内设置 config\n\n```\nimport config from 'shineout/config'\nconfig.setConfig({\n  prefix: 'your-prefix'\n})\n```\n```\n// 或者修改webpack 的 process.env\nplugins: [\n  new webpack.DefinePlugin({\n    'process.env': {\n      SO_PREFIX: JSON.stringify('your-prefix'),\n    },\n  }),\n],\n```\n\n### CSS Module\n\n如果需要使用 CSS Module，首先修改 webpack 的 css-loader 配置\n```\n{\n  loader: 'css-loader',\n  options: {\n    module: true,\n    localIdentName: '[local]--[hash:base64:5]'\n  }\n}\n```\n\n在应用入口设置 config.cssModule 为 true\n```\nimport config from 'shineout/config'\nconfig.setConfig({\n  cssModule: true\n})\n\n```\n```\n// 或者修改 webpack 的 process.env\nplugins: [\n  new webpack.DefinePlugin({\n    'process.env': {\n      CSS_MODULE: true\n    },\n  }),\n],\n```\n\n\n## I18N\n\n组件库中部分组件（Datepicker，Select，Modal等）内置了部分文字，暂时为简体中文（zh-CN）和英文（en-US）两组。默认为英文（en-US），可以通过 webpack 的 process.env 切换\n```\nplugins: [\n  new webpack.DefinePlugin({\n    'process.env': {\n      LOCALE: JSON.stringify('zh-CN')\n    },\n  }),\n],\n```\n\n或者调用 locale 的 setLocale 方法\n\n```\nimport { setLocale } from 'shineout/locale'\nsetLocale('zh-CN')\n```\n\nsetLocale 也可以传入一个 Json 数据设置部分值\n\n```\nsetLocale({ ok: 'yes' })\n```\n\n当前 locale 内容如下:\n\n<example name=\"locale\" />"},719:function(n,e){n.exports="# Get Start\n\n<example />"},720:function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=o(1),s=o.n(t),a=o(174);e.default=function(){return s.a.createElement("pre",null,JSON.stringify(Object(a.a)(),null,2))}},721:function(n,e){n.exports="import React from 'react'\nimport { getLocale } from 'shineout/locale'\n\nexport default function () {\n  return <pre>{JSON.stringify(getLocale(), null, 2)}</pre>\n}\n"}});