webpackJsonpShineoutDoc([13],{378:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(0),a=t.n(i),r=t(73),o=t(72),l=t(44),s=t(379),c=t.n(s),u=t(380),h=t.n(u),m=Object(l.a)(c.a,h.a),p=[{name:"01-base",title:Object(l.a)("基本用法 \n 图片设置宽高后即使图片未加载，仍然会先占位","Base \n The most basic image."),component:t(381).default,rawText:t(382)},{name:"02-shape",title:Object(l.a)("形状 \n 内置了三种图片样式，rounded, cricle, thumbnail","Shape \n There are three built-in styles, rounded, cricle, thumbnail."),component:t(383).default,rawText:t(384)},{name:"03-fit",title:Object(l.a)("适应 \n 内置了 4 种适应容器的方式，填充、居中、原图、拉伸","Fit \n There are four built ways that fit the container, fill, center, original, stretch."),component:t(385).default,rawText:t(386)},{name:"04-alt",title:Object(l.a)("备用地址 \n 在 src 获取失败的情况下，自动使用 alt 属性设置的地址","Alt \n If the src address fails to load, use the alt property instead."),component:t(387).default,rawText:t(388)},{name:"05-error",title:Object(l.a)("错误处理 \n alt 属性失效或没有 alt 属性时，会显示 title 属性","Title \n The title property is displayed when the alt property is invalid or there is no alt property."),component:t(389).default,rawText:t(390)},{name:"06-target",title:Object(l.a)("原始图片 \n 提供了 4 种方式展示原始图片，弹出层、新窗口打开、当前窗口打开、下载","Target \n There are 4 ways to display the original image, pop-up layer, new window open, current window open, download."),component:t(391).default,rawText:t(392)},{name:"07-group",title:Object(l.a)("图片组 \n 一组图片可以放在 Image.Group 中","Group \n A group of images can be placed in the Image.Group ."),component:t(393).default,rawText:t(394)},{name:"08-group",title:Object(l.a)(" \n 设置 pile 属性可以把缩略图堆叠展示"," \n Set the pile property to show the image stack."),component:t(395).default,rawText:t(396)},{name:"09-lazy",title:Object(l.a)("延迟加载 \n lazy 属性为 true 时，图片会在进入屏幕可视区域后加载","Lazy load \n When the lazy property is true, the image will load when it enter the visual area of the screen."),component:t(397).default,rawText:t(398)}];n.default=Object(r.a)(function(e){return a.a.createElement(o.b,Object.assign({},e,{codes:void 0,source:m,examples:p}))})},379:function(e,n){e.exports="# Image *图片*\n\n图片组件用来处理指定尺寸的图片，实现占位，异常处理，拉伸、填充，延时加载等功能。\n\n<example />\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| className | string | 无 | 扩展className |\n| height | string \\| number | '100%' | 图片高度(值为百分比时，对比值为图片宽度) |\n| href | string | 无 | 原始图片地址 |\n| lazy | bool | false | 是否延迟加载 |\n| src | string | 必填 | 图片地址 |\n| style | object | 无 | 最外层扩展样式 |\n| target | string | '_modal' | 可选值为 \\['_modal', '_blank', '_self', '_download'] |\n| width | string \\| number | '100%' | 图片宽度 |\n\n### Image.Group\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| height | string \\| number | '100%' | 单个图片高度(值为百分比时，对比值为图片宽度) |\n| lazy | bool | false | 是否延迟加载 |\n| pile | bool | false | 是否堆叠 |\n| target | string | '_modal' | 可选值为 \\['_modal', '_blank', '_self'] |\n| width | string \\| number | '100%' | 单个图片宽度 |"},380:function(e,n){e.exports="# Image\n\n<example />\n\n## API\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| className | string | none | extend className |\n| height | string \\| number | '100%' | the height of the image(When the value is percentage, the ratio is the width of the image) |\n| href | string | none | original picture address |\n| lazy | bool | false | whether to delay loading |\n| src | string | required | the picture address |\n| style | object | - | Container element style |\n| target | string | '_modal' | options: \\['_modal', '_blank', '_self', '_download'] |\n| width | string \\| number | '100%' | the width of the image |\n\n### Image.Group\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| height | string \\| number | '100%' | the height of single image(When the value is percentage, the ratio is the width of the image) |\n| lazy | bool | false | whether to delay loading |\n| pile | bool | false | whether to stack |\n| target | string | '_modal' | options: \\['_modal', '_blank', '_self'] |\n| width | string \\| number | '100%' | the width of single picture |"},381:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(0),a=t.n(i),r=t(26);n.default=function(){return a.a.createElement(r.n,{width:200,height:125,src:"../images/1_b.jpg"})}},382:function(e,n){e.exports="/**\n * cn - 基本用法\n *    -- 图片设置宽高后即使图片未加载，仍然会先占位\n * en - Base\n *    -- The most basic image.\n */\nimport React from 'react'\nimport { Image } from 'shineout'\n\nexport default function () {\n  return (\n    <Image width={200} height={125} src=\"../images/1_b.jpg\" />\n  )\n}\n"},383:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(0),a=t.n(i),r=t(26);n.default=function(){return a.a.createElement("div",null,a.a.createElement(r.n,{width:150,height:150,shape:"rounded",title:"rounded"}),a.a.createElement(r.n,{width:150,height:150,shape:"circle",title:"circle"}),a.a.createElement(r.n,{width:150,height:150,shape:"thumbnail",title:"thumbnail"}))}},384:function(e,n){e.exports='/**\n * cn - 形状\n *    -- 内置了三种图片样式，rounded, cricle, thumbnail\n * en - Shape\n *    -- There are three built-in styles, rounded, cricle, thumbnail.\n */\nimport React from \'react\'\nimport { Image } from \'shineout\'\n\nexport default function () {\n  return (\n    <div>\n      <Image width={150} height={150} shape="rounded" title="rounded" />\n      <Image width={150} height={150} shape="circle" title="circle" />\n      <Image width={150} height={150} shape="thumbnail" title="thumbnail" />\n    </div>\n  )\n}\n'},385:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(0),a=t.n(i),r=t(26);n.default=function(){return a.a.createElement("div",null,["fill","center","fit","stretch"].map(function(e){return a.a.createElement("div",{key:e,style:{width:"25%",padding:4,display:"inline-block"}},a.a.createElement(r.n,{width:"100%",height:"75%",src:"../images/1_b.jpg",shape:"thumbnail",fit:e}),a.a.createElement("div",{style:{textAlign:"center",paddingTop:4}},e))}))}},386:function(e,n){e.exports="/**\n * cn - 适应\n *    -- 内置了 4 种适应容器的方式，填充、居中、原图、拉伸\n * en - Fit\n *    -- There are four built ways that fit the container, fill, center, original, stretch.\n */\nimport React from 'react'\nimport { Image } from 'shineout'\n\nconst src = '../images/1_b.jpg'\n\nexport default function () {\n  return (\n    <div>\n      {\n        (['fill', 'center', 'fit', 'stretch']).map(fit => (\n          <div key={fit} style={{ width: '25%', padding: 4, display: 'inline-block' }}>\n            <Image width=\"100%\" height=\"75%\" src={src} shape=\"thumbnail\" fit={fit} />\n            <div style={{ textAlign: 'center', paddingTop: 4 }}>{fit}</div>\n          </div>\n        ))\n      }\n    </div>\n  )\n}\n"},387:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(0),a=t.n(i),r=t(26);n.default=function(){return a.a.createElement(r.n,{width:200,height:125,src:"notfound",alt:"../images/1_b.jpg"})}},388:function(e,n){e.exports="/**\n * cn - 备用地址\n *    -- 在 src 获取失败的情况下，自动使用 alt 属性设置的地址\n * en - Alt\n *    -- If the src address fails to load, use the alt property instead.\n */\nimport React from 'react'\nimport { Image } from 'shineout'\n\nexport default function () {\n  return (\n    <Image width={200} height={125} src=\"notfound\" alt=\"../images/1_b.jpg\" />\n  )\n}\n"},389:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(0),a=t.n(i),r=t(26);n.default=function(){return a.a.createElement(r.n,{width:200,height:125,src:"notfound",title:"Image not exist"})}},390:function(e,n){e.exports="/**\n * cn - 错误处理\n *    -- alt 属性失效或没有 alt 属性时，会显示 title 属性\n * en - Title\n *    -- The title property is displayed when the alt property is invalid or there is no alt property.\n */\nimport React from 'react'\nimport { Image } from 'shineout'\n\nexport default function () {\n  return (\n    <Image width={200} height={125} src=\"notfound\" title=\"Image not exist\" />\n  )\n}\n"},391:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(0),a=t.n(i),r=t(26);n.default=function(){return a.a.createElement("div",null,["_modal","_blank","_self","_download"].map(function(e){return a.a.createElement("div",{key:e,style:{display:"inline-block",marginRight:12,textAlign:"center"}},a.a.createElement(r.n,{width:80,height:80,target:e,shape:"thumbnail",fit:"fill",src:"../images/1_s.jpg",href:"../images/1_b.jpg"}),a.a.createElement("br",null),e)}))}},392:function(e,n){e.exports="/**\n * cn - 原始图片\n *    -- 提供了 4 种方式展示原始图片，弹出层、新窗口打开、当前窗口打开、下载\n * en - Target\n *    -- There are 4 ways to display the original image, pop-up layer, new window open, current window open, download.\n */\nimport React from 'react'\nimport { Image } from 'shineout'\n\nexport default function () {\n  return (\n    <div>\n      {\n        (['_modal', '_blank', '_self', '_download']).map(target => (\n          <div key={target} style={{ display: 'inline-block', marginRight: 12, textAlign: 'center' }}>\n            <Image\n              width={80}\n              height={80}\n              target={target}\n              shape=\"thumbnail\"\n              fit=\"fill\"\n              src=\"../images/1_s.jpg\"\n              href=\"../images/1_b.jpg\"\n            />\n            <br />\n            {target}\n          </div>\n        ))\n      }\n    </div>\n  )\n}\n"},393:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(0),a=t.n(i),r=t(26);n.default=function(){return a.a.createElement(r.n.Group,null,[1,2,3,4].map(function(e){return a.a.createElement(r.n,{key:e,width:80,height:80,fit:"fill",shape:"thumbnail",src:"../images/".concat(e,"_s.jpg"),href:"../images/".concat(e,"_b.jpg")})}))}},394:function(e,n){e.exports="/**\n * cn - 图片组\n *    -- 一组图片可以放在 Image.Group 中\n * en - Group\n *    -- A group of images can be placed in the Image.Group .\n */\nimport React from 'react'\nimport { Image } from 'shineout'\n\nexport default function () {\n  return (\n    <Image.Group>\n      {\n        ([1, 2, 3, 4]).map(i => (\n          <Image\n            key={i}\n            width={80}\n            height={80}\n            fit=\"fill\"\n            shape=\"thumbnail\"\n            src={`../images/${i}_s.jpg`}\n            href={`../images/${i}_b.jpg`}\n          />\n        ))\n      }\n    </Image.Group>\n  )\n}\n"},395:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(0),a=t.n(i),r=t(26);n.default=function(){return a.a.createElement(r.n.Group,{pile:!0},[1,2,3,4].map(function(e){return a.a.createElement(r.n,{key:e,width:80,height:80,fit:"fill",shape:"thumbnail",src:"../images/".concat(e,"_s.jpg"),href:"../images/".concat(e,"_b.jpg")})}))}},396:function(e,n){e.exports="/**\n * cn -\n *    -- 设置 pile 属性可以把缩略图堆叠展示\n * en -\n *    -- Set the pile property to show the image stack.\n */\nimport React from 'react'\nimport { Image } from 'shineout'\n\nexport default function () {\n  return (\n    <Image.Group pile>\n      {\n        ([1, 2, 3, 4]).map(i => (\n          <Image\n            key={i}\n            width={80}\n            height={80}\n            fit=\"fill\"\n            shape=\"thumbnail\"\n            src={`../images/${i}_s.jpg`}\n            href={`../images/${i}_b.jpg`}\n          />\n        ))\n      }\n    </Image.Group>\n  )\n}\n"},397:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(0),a=t.n(i),r=t(26),o=[1,2,3,4].map(function(e){return"../images/".concat(e,"_b.jpg")});n.default=function(){return a.a.createElement("div",null,o.map(function(e,n){return a.a.createElement(r.n,{lazy:!0,key:n,fit:"fill",height:"66%",src:e})}))}},398:function(e,n){e.exports="/**\n * cn - 延迟加载\n *    -- lazy 属性为 true 时，图片会在进入屏幕可视区域后加载\n * en - Lazy load\n *    -- When the lazy property is true, the image will load when it enter the visual area of the screen.\n */\nimport React from 'react'\nimport { Image } from 'shineout'\n\nconst data = ([1, 2, 3, 4]).map(i => `../images/${i}_b.jpg`)\n\nexport default function () {\n  return (\n    <div>\n      { data.map((img, i) => <Image lazy key={i} fit=\"fill\" height=\"66%\" src={img} />) }\n    </div>\n  )\n}\n"}});