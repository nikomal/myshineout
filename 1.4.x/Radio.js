(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[35],{212:function(e,n,t){"use strict";var a=t(209);n.a=Object(a.a)("radio")},215:function(e,n,t){"use strict";t.d(n,"a",function(){return u}),t.d(n,"b",function(){return l});var a=t(0),o=t.n(a),r=t(39),i=t.n(r)()(),u=i.Provider,l=function(t){return function(n){return o.a.createElement(i.Consumer,null,function(e){return o.a.createElement(t,Object.assign({},n,e))})}}},224:function(e,n,t){"use strict";var o=t(2),r=t(57);function i(e,n,t){return(i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()?Reflect.construct:function(e,n,t){var a=[null];a.push.apply(a,n);var o=new(Function.bind.apply(e,a));return t&&Object(r.a)(o,t.prototype),o}).apply(null,arguments)}function u(e){var a="function"==typeof Map?new Map:void 0;return(u=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==a){if(a.has(e))return a.get(e);a.set(e,t)}function t(){return i(e,arguments,Object(o.a)(this).constructor)}return t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),Object(r.a)(t,e)})(e)}t.d(n,"a",function(){return u})},300:function(e,n,t){"use strict";var a=t(53),o=t(199),r=t(210),l=t(215),i=t(7),u=t(8),d=t(6),c=t(2),s=t(24),f=t(9),p=t(4),b=t(0),m=t.n(b),h=t(11),y=t.n(h),g=t(35),v=t(36),k=t(197),R=t(5),w=t(212),x=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(d.a)(this,Object(c.a)(t).call(this,e))).handleClick=n.handleClick.bind(Object(p.a)(Object(p.a)(n))),n.handleUpdate=n.forceUpdate.bind(Object(p.a)(Object(p.a)(n))),n.handleRawChange=n.handleRawChange.bind(Object(p.a)(Object(p.a)(n))),n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){Object(s.a)(Object(c.a)(t.prototype),"componentDidMount",this).call(this),this.props.datum.subscribe(k.a,this.handleUpdate)}},{key:"componentWillUnmount",value:function(){Object(s.a)(Object(c.a)(t.prototype),"componentWillUnmount",this).call(this),this.props.datum.unsubscribe(k.a,this.handleUpdate)}},{key:"getContent",value:function(e){var n=this.props.renderItem;return"string"==typeof n?e[n]:"function"==typeof n?n(e):""}},{key:"handleClick",value:function(e,n,t){var a=this.props,o=a.data;a.datum.set(o[t])}},{key:"handleRawChange",value:function(e){this.props.datum.set(e)}},{key:"render",value:function(){var t=this,e=this.props,n=e.block,a=e.data,o=e.datum,r=e.keygen,i=e.children,u=y()(Object(R.g)("group",n&&"block"),this.props.className);return void 0===a?m.a.createElement("div",{className:u},m.a.createElement(l.a,{value:{onRawChange:this.handleRawChange,checked:o.check.bind(o)}},i)):m.a.createElement("div",{className:u},a.map(function(e,n){return m.a.createElement(w.a,{checked:o.check(e),disabled:o.disabled(e),key:Object(v.a)(e,r,n),htmlValue:n,index:n,onChange:t.handleClick},t.getContent(e))}),i)}}]),t}(g.b);x.defaultProps={renderItem:function(e){return e}};var j=x,O=Object(l.b)(w.a);O.Group=Object(a.a)(o.a,r.a.hoc({limit:1,bindProps:["disabled","format","prediction"]}))(j),O.displayName="ShineoutRadio",O.Group.displayName="ShineoutRadioGroup";n.a=O},871:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(196),i=t(200),u=t(12),l=t(872),d=t.n(l),c=t(873),s=t.n(c),f=Object(u.b)(d.a,s.a),p=[{name:"1-base",title:Object(u.b)("基本用法 \n Radio.Group 通过数据来生成一组单选框。","Base \n Radio.Group generate a group of radios from an array."),component:t(874).default,rawText:t(875)},{name:"2-group",title:Object(u.b)(" \n 将一组 Radio 放在 Radio.Group 中，以 React 组件方式调用。"," \n A series of radios group by Radio.Group."),component:t(876).default,rawText:t(877)},{name:"3-format",title:Object(u.b)("复杂数据 \n 复杂的数据可以使用 format 处理 value","Complex data \n Complex data can use format to process value."),component:t(878).default,rawText:t(879)},{name:"5-block",title:Object(u.b)("垂直布局 \n 默认为水平布局，设置 block 属性可以改为垂直布局","Vertical layout \n The default is horizontal layout and setting the block property can changed it to be vertical layout."),component:t(880).default,rawText:t(881)},{name:"6-disabled",title:Object(u.b)("禁用 \n 设置 disabled 为 true 时，禁用所有选项","Disabled \n Set disabled property is set to true, all the options is disabled."),component:t(882).default,rawText:t(883)},{name:"7-disabled",title:Object(u.b)(" \n disabled 为函数时，根据函数返回结果实现有条件禁用"," \n When the disabled is a function, disbale the option that the function to return true."),component:t(884).default,rawText:t(885)}];n.default=Object(r.a)(function(e){return o.a.createElement(i.b,Object.assign({},e,{codes:void 0,source:f,examples:p}))})},872:function(e,n){e.exports="# Radio *单选框*\n\n<example />\n\n## API\n\nRadio 不能单独使用\n\n### Radio\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| checked | bool \\| 'indeterminate' | 无 | checked 传入时为受控组件 |\n| disabled | bool | false | 是否禁用 |\n| htmlValue | any | true | 选中时返回值 |\n\n### Radio.Group\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| defaultValue | any | | 默认值，设置 value 时，会覆盖 defaultValue |\n| data | array | 必填 | 数据项 |\n| disabled | bool \\| function | false | 是否禁用 |\n| format | string \\| function | d => d | 格式化 value<br />默认值，返回原始数据<br />为string时，会作为key从原始数据中获取值，相当于 (d) => d[format]<br /> 为函数时，以函数返回结果作为 value |\n| keygen | string \\| function(obj):string \\| true | 必填 | 生成每一项key的辅助方法<br />为 true 时，以数据项本身作为key，相当于 (d => d)<br />为函数时，使用此函数返回值<br />为string时，使用这个string对应的数据值。如 'id'，相当于 (d => d.id) |\n| name | string | 无 | Form 存取数据的名称 |\n| onChange | function(value) | 无 | value 为 datum.getValue() |\n| prediction | function | (val, d) => val===format(d) | 默认使用 format 函数执行的结果来比较是否匹配，在某些情况下（例如返回原始数据的对象，更新数据时，生成了一个值相同，非同一个对象的选项），需要借助 prediction 函数来判断是否匹配 |\n| renderItem | string \\| function(d) | 必填 | 为 string 时，返回 d\\[string]<br />为 function 时，返回函数结果 |\n| value | any | | 在Form中，value会被表单接管，value无效 |"},873:function(e,n){e.exports="# Radio\n\n<example />\n\n## API\n\nRadio cannot be used alone.\n\n### Radio\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| checked | bool \\| 'indeterminate' | - | if not set, use (value === htmlValue). |\n| disabled | bool | false | disable checkbox |\n| htmlValue | any | true | Specifies the result |\n\n### Radio.Group\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| defaultValue | any | | default value. |\n| data | array | required | the data items |\n| disabled | bool \\| function | false | When the value is true, disabled all checkboxes; When the value is function, disable the checkbox that this function returns true. |\n| format | string \\| function | d => d | Format value<br />Default value, return original data. <br />When it is a string, it will get the value from the original data as a key .The same as (d) => d[format]<br />When it is a function, the result returned by the function will be the value. |\n| keygen | string \\| function(obj):string \\| true | required | Key generator<br />When it is true, the data itself is used as the key equivalent to (d => d)<br />When it is a function, use its return value.<br />When it is a string，ues the value of the string.For example, 'id' is the same thing as (d) => d.id. |\n| name | string | none | The name of a Form that accesses data |\n| onChange | function(value) | none | value is the datum.getValue() |\n| prediction | function | (val, d) => val===format(d) | By default, the result of the format function is used to compare whether it matches. In some cases (for example, whe an object that returns the original data is updated, an different option with the same value  is generated), the prediction function used to determine whether match. |\n| renderItem | string \\| function(d) | required | When it is a string, return d\\[string]<br />When it is a function, return the result of the function. |\n| value | any | | In the Form, value is taken over by the Form and the value will be invalid. |"},874:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(300),i=["red","orange","yellow","green","cyan","blue","violet"];function u(e){var n={borderBottom:"solid 1px ".concat(e),paddingBottom:2};return o.a.createElement("span",{style:n},e)}n.default=function(){return o.a.createElement(r.a.Group,{keygen:!0,data:i,defaultValue:"blue",renderItem:u})}},875:function(e,n){e.exports="/**\n * cn - 基本用法\n *    -- Radio.Group 通过数据来生成一组单选框。\n * en - Base\n *    -- Radio.Group generate a group of radios from an array.\n */\nimport React from 'react'\nimport { Radio } from 'shineout'\n\nconst data = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'violet']\n\nfunction renderItem(color) {\n  const style = { borderBottom: `solid 1px ${color}`, paddingBottom: 2 }\n  return <span style={style}>{color}</span>\n}\n\nexport default function() {\n  return <Radio.Group keygen data={data} defaultValue=\"blue\" renderItem={renderItem} />\n}\n"},876:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(300),i=["red","orange","yellow","green","cyan","blue","violet"];n.default=function(){return o.a.createElement(r.a.Group,{keygen:!0,defaultValue:"yellow"},i.map(function(e){return o.a.createElement(r.a,{key:e,htmlValue:e},e)}))}},877:function(e,n){e.exports="/**\n * cn -\n *    -- 将一组 Radio 放在 Radio.Group 中，以 React 组件方式调用。\n * en -\n *    -- A series of radios group by Radio.Group.\n */\nimport React from 'react'\nimport { Radio } from 'shineout'\n\nconst data = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'violet']\n\nexport default function() {\n  return (\n    <Radio.Group keygen defaultValue=\"yellow\">\n      {data.map(d => (\n        <Radio key={d} htmlValue={d}>\n          {d}\n        </Radio>\n      ))}\n    </Radio.Group>\n  )\n}\n"},878:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(300),i=[{id:1,color:"red"},{id:2,color:"orange"},{id:3,color:"yellow"},{id:4,color:"green"},{id:5,color:"cyan"},{id:6,color:"blue"},{id:7,color:"violet"}];n.default=function(){return o.a.createElement(r.a.Group,{keygen:"id",data:i,format:"color",defaultValue:"blue",renderItem:"color"})}},879:function(e,n){e.exports="/**\n * cn - 复杂数据\n *    -- 复杂的数据可以使用 format 处理 value\n * en - Complex data\n *    -- Complex data can use format to process value.\n */\nimport React from 'react'\nimport { Radio } from 'shineout'\n\nconst data = [\n  { id: 1, color: 'red' },\n  { id: 2, color: 'orange' },\n  { id: 3, color: 'yellow' },\n  { id: 4, color: 'green' },\n  { id: 5, color: 'cyan' },\n  { id: 6, color: 'blue' },\n  { id: 7, color: 'violet' },\n]\n\nexport default function() {\n  return <Radio.Group keygen=\"id\" data={data} format=\"color\" defaultValue=\"blue\" renderItem=\"color\" />\n}\n"},880:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(300),i=[{id:1,color:"red"},{id:2,color:"orange"},{id:3,color:"yellow"},{id:4,color:"green"},{id:5,color:"cyan"},{id:6,color:"blue"},{id:7,color:"violet"}];n.default=function(){return o.a.createElement(r.a.Group,{keygen:"id",block:!0,data:i,datum:{format:"id"},defaultValue:3,renderItem:"color"})}},881:function(e,n){e.exports="/**\n * cn - 垂直布局\n *    -- 默认为水平布局，设置 block 属性可以改为垂直布局\n * en - Vertical layout\n *    -- The default is horizontal layout and setting the block property can changed it to be vertical layout.\n */\nimport React from 'react'\nimport { Radio } from 'shineout'\n\nconst data = [\n  { id: 1, color: 'red' },\n  { id: 2, color: 'orange' },\n  { id: 3, color: 'yellow' },\n  { id: 4, color: 'green' },\n  { id: 5, color: 'cyan' },\n  { id: 6, color: 'blue' },\n  { id: 7, color: 'violet' },\n]\n\nexport default function() {\n  return <Radio.Group keygen=\"id\" block data={data} datum={{ format: 'id' }} defaultValue={3} renderItem=\"color\" />\n}\n"},882:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(300),i=["red","orange","yellow","green","cyan","blue","violet"];n.default=function(){return o.a.createElement("div",null,o.a.createElement(r.a.Group,{keygen:!0,disabled:!0,data:i,defaultValue:"blue",renderItem:function(e){return e}}))}},883:function(e,n){e.exports="/**\n * cn - 禁用\n *    -- 设置 disabled 为 true 时，禁用所有选项\n * en - Disabled\n *    -- Set disabled property is set to true, all the options is disabled.\n */\nimport React from 'react'\nimport { Radio } from 'shineout'\n\nconst data = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'violet']\n\nexport default function() {\n  return (\n    <div>\n      <Radio.Group keygen disabled data={data} defaultValue=\"blue\" renderItem={d => d} />\n    </div>\n  )\n}\n"},884:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(300),i=["red","orange","yellow","green","cyan","blue","violet"];n.default=function(){return o.a.createElement("div",null,o.a.createElement(r.a.Group,{keygen:!0,data:i,disabled:function(e){return"yellow"===e},defaultValue:"blue",renderItem:function(e){return e}}))}},885:function(e,n){e.exports="/**\n * cn -\n *    -- disabled 为函数时，根据函数返回结果实现有条件禁用\n * en -\n *    -- When the disabled is a function, disbale the option that the function to return true.\n */\nimport React from 'react'\nimport { Radio } from 'shineout'\n\nconst data = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'violet']\n\nexport default function() {\n  return (\n    <div>\n      <Radio.Group keygen data={data} disabled={d => d === 'yellow'} defaultValue=\"blue\" renderItem={d => d} />\n    </div>\n  )\n}\n"}}]);