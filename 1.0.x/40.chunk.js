webpackJsonp([40],{1173:function(s,e){s.exports="# Classname\n\n默认设置下，使用 **'prefix-moduleName-className'** 的规则来隔离css代码。为了同时支持 CSS Module，组件内部所有的 className 都是通过 utils/classname 来处理。\n\n```\nexport default (style, module, prefix = config.prefix) => (...args) => {\n  // 使用 classnames 预处理一下\n  const className = classnames(...args)\n  if (!className) return ''\n\n  const ns = `${prefix}${module ? `-${module}` : '-'}`\n\n  // '_' 会被忽略，返回 'prefix-module'\n  let list = className.split(' ').map(c => (c === '_' ? ns : `${ns}-${c}`))\n\n  // 当 cssModule 为 true 时，从 style 内获取 css-loader 处理过的 className\n  if (config.cssModule) {\n    list = list.map(c => style[c])\n  }\n  return list.join(' ')\n}\n```\n\n这个模块只有一个函数，返回一个新的函数来给 className 添加 prefix 和 moduleName。\n\n```\nimport genaration from 'src/utils/classname'\nconst alertClass = genaration(require('src/styles/alert.less'), 'alert', 'shineout')\n\nisShow = true\nalertClass('_', 'success', isShow ? 'show' : 'hide') \n// 未使用 CSS Module\n>>> 'shineout-alert shineout-alert-success shine-alert-show'\n// 使用 CSS Module, localIdentName = '[local]-[hash:base64:5]'\n>>> 'shineout-alert-xxxxx shineout-alert-success-xxxxx shine-alert-show-xxxxx'\n```\n\n为了方便管理，所有的 class 放在了 src/styles/index.js 文件内，需要的时候引用即可\n```\nimport { alertClass, dropdownClass } from 'src/styles'\n```"}});