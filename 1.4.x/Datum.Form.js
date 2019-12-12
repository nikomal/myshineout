(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[17],{1096:function(n,e,t){"use strict";t.r(e);var o=t(0),a=t.n(o),l=t(477),s=t(478),u=t(503),i=t(34),c=t(1097),r=t.n(c),m=t(1098),f=t.n(m),d=Object(i.b)(r.a,f.a),g=[];u.a.start(),u.a.setType("example"),t(1099);var v=u.a.end(),h={example:{text:t(1100),log:v.example}};e.default=Object(l.a)(function(n){return a.a.createElement(s.b,Object.assign({},n,{codes:h,source:d,examples:g}))})},1097:function(n,e){n.exports='# Datum.Form 表单数据处理\n\nForm 表单数据处理辅助类，用来收集和分发数据到输入组件。\n\n## 示例\n\n<code name="example" />\n\n实际使用见 [Form](/components/Form)\n\n## 初始化参数\n\n### removeUndefined *boolean*\n\n是否移除值为 undefined 的数据，默认值为 true。\n\n### onChange *function(data)*\n\n值变化时回调函数。\n\n### value *object*\n\n初始值\n\n## 函数\n\n### getValue *function():object*\n获取当前表单所有对象值。\n\n### setValue *function(object)*\n设置值。新的值会替代当前值。\n\n### set *fuction(name, value)*\n设置数据。\n\n### get *fuction(name)*\n获取单个字段值。\n\n### validateFields *function(names)*\n校验指定字段。names为字段名称数组。\n\n### validateClear *function()*\n清除校验结果。'},1098:function(n,e){n.exports='# Datum.Form\n\nThe auxiliary class of Form that process data for collecting and distributing data to input components.\n\n## Example\n\n<code name="example" />\n\n<br />\n\nSee the example use in [Form](/components/Form)\n\n## Arguments\n\n### removeUndefined *boolean*\n\nWhether to remove the data whose value is undefined. The default value is true.\n\n### onChange *function(data)*\n\nThe callback function when the value is changing.\n\n### value *object*\n\nThe initial value.\n\n## Methods\n\n### getValue *function():object*\nGet all values of the current form.\n\n### setValue *function(object)*\nSet new value, will replace the current value。\n\n### set *fuction(name, value)*\nSet the value specified by name.\n\n### get *fuction(name)*\nGet a single field value.\n\n### validateFields *function(names)*\nVerify specified fields.\n\n### validateClear *function()*\nClear the validate result.'},1099:function(n,e,t){"use strict";t.r(e);var o=new(t(78).a.Form);o.setValue({email:"test@123.com",name:{lastName:"Potter"},favors:["red","yellow"]}),o.set("age",20),o.set("name.firstName","Harry"),console.log(o.get("age")),console.log(o.get("name")),console.log(o.get("name.firstName")),console.log(o.get("name.lastName")),console.log(o.get("favors[1]")),o.set("favors[2]","blue"),console.log(o.get("favors")),console.log(o.getValue())},1100:function(n,e){n.exports="import { Datum } from 'shineout'\n\nconst datum = new Datum.Form()\n\ndatum.setValue({ email: 'test@123.com', name: { lastName: 'Potter' }, favors: ['red', 'yellow'] })\ndatum.set('age', 20)\ndatum.set('name.firstName', 'Harry')\nconsole.log(datum.get('age'))\nconsole.log(datum.get('name'))\nconsole.log(datum.get('name.firstName'))\nconsole.log(datum.get('name.lastName'))\nconsole.log(datum.get('favors[1]'))\ndatum.set('favors[2]', 'blue')\nconsole.log(datum.get('favors'))\nconsole.log(datum.getValue())\n"},503:function(n,e,t){"use strict";var o=t(4),a=t(5),l=window.console,s=function(){function n(){Object(o.a)(this,n),this.logs={default:[]},this.current=this.logs.default}return Object(a.a)(n,[{key:"setType",value:function(n){this.logs[n]||(this.logs[n]=[]),this.current=this.logs[n]}},{key:"log",value:function(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];var o=e.map(function(n){return"".concat((e=n,JSON.stringify(e,function(n,e){return"function"==typeof e?"fn#fn".concat(e.toString(),"fn#fn"):e},2)));var e});this.current.push(o)}}]),n}();e.a={start:function(){window.console=new s},setType:function(n){window.console.setType(n)},end:function(){var n=window.console.logs;return window.console=l,n}}}}]);