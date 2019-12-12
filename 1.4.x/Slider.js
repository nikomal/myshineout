(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[38],{1e3:function(e,t){e.exports="/**\n * cn -\n *    -- 如果要彻底不显示刻度和当前值，设置 formatValue 和 fotmatScale 为 false\n * en -\n *    -- Set formatValue and fotmatScale to false to hide the scale and current values completely.\n */\nimport React from 'react'\nimport { Slider } from 'shineout'\n\nexport default function() {\n  return <Slider defaultValue={4} step={1} formatValue={false} formatScale={false} />\n}\n"},1001:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(1472);t.default=function(){return r.a.createElement(l.a,{range:!0,disabled:!0,defaultValue:[25,75]})}},1002:function(e,t){e.exports="/**\n * cn - 禁用\n *    -- 设置 disabled 属性，禁用组件\n * en - Disabled\n *    -- Set the disabled property to disable the component.\n */\nimport React from 'react'\nimport { Slider } from 'shineout'\n\nexport default function() {\n  return <Slider range disabled defaultValue={[25, 75]} />\n}\n"},1003:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(1472),i=function(e){return"".concat(e,"℃")};t.default=function(){return r.a.createElement("div",null,r.a.createElement(l.a,{vertical:!0,defaultValue:50}),r.a.createElement(l.a,{range:!0,vertical:!0,defaultValue:[12,70]}),r.a.createElement(l.a,{vertical:!0,defaultValue:18,scale:[0,20,40,60,100],formatValue:!1,formatScale:i}),r.a.createElement(l.a,{autoHide:!0,range:!0,vertical:!0,defaultValue:[12,70]}),r.a.createElement(l.a,{disabled:!0,range:!0,vertical:!0,defaultValue:[12,70]}))}},1004:function(e,t){e.exports="/**\n * cn - 垂直\n *    -- 设置 vertical 属性，修改组件为垂直方向\n * en - Vertical\n *    -- Set the vertical property to change the component vertical.\n */\nimport React from 'react'\nimport { Slider } from 'shineout'\n\nconst formatTemp = v => `${v}℃`\n\nexport default function() {\n  return (\n    <div>\n      <Slider vertical defaultValue={50} />\n      <Slider range vertical defaultValue={[12, 70]} />\n      <Slider vertical defaultValue={18} scale={[0, 20, 40, 60, 100]} formatValue={false} formatScale={formatTemp} />\n      <Slider autoHide range vertical defaultValue={[12, 70]} />\n      <Slider disabled range vertical defaultValue={[12, 70]} />\n    </div>\n  )\n}\n"},1005:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return d});var a=n(4),r=n(5),l=n(6),i=n(3),c=n(7),o=n(0),s=n.n(o),u=n(1472),d=function(e){function n(e){var t;return Object(a.a)(this,n),(t=Object(l.a)(this,Object(i.a)(n).call(this,e))).state={scale1:[0,100],scale2:[0,100]},t}return Object(c.a)(n,e),Object(r.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.scale1,a=t.scale2;return s.a.createElement("div",null,s.a.createElement(u.a,{scale:n,defaultValue:50,onIncrease:function(){return e.setState({scale1:[0,n[1]+1]})}}),s.a.createElement(u.a,{range:!0,scale:a,defaultValue:[20,50],onIncrease:function(){return e.setState({scale2:[0,a[1]+5]})}}))}}]),n}(s.a.Component)},1006:function(e,t){e.exports="/**\n * cn - 增长\n *    -- 允许拖动到最右边的时候进行增长\n * en - onIncrease\n *    -- can increase the maximum infinitely while dragging\n */\nimport React from 'react'\nimport { Slider } from 'shineout'\n\nexport default class extends React.Component {\n  constructor(props) {\n    super(props)\n    this.state = {\n      scale1: [0, 100],\n      scale2: [0, 100],\n    }\n  }\n\n  render() {\n    const { scale1, scale2 } = this.state\n    return (\n      <div>\n        <Slider scale={scale1} defaultValue={50} onIncrease={() => this.setState({ scale1: [0, scale1[1] + 1] })} />\n        <Slider\n          range\n          scale={scale2}\n          defaultValue={[20, 50]}\n          onIncrease={() => this.setState({ scale2: [0, scale2[1] + 5] })}\n        />\n      </div>\n    )\n  }\n}\n"},1472:function(e,t,n){"use strict";var a=n(62),s=n(13),u=n(30),r=n(4),l=n(5),i=n(6),c=n(3),o=n(7),d=n(1),h=n(0),f=n.n(h),m=n(15),p=n.n(m),v=n(2),b=n(46),g=n(20),S=n(19),y=Object(S.c)(function(t){var e=function(e){function n(e){var t;return Object(r.a)(this,n),(t=Object(i.a)(this,Object(c.a)(n).call(this,e))).handleDragStart=t.handleDragStart.bind(Object(d.a)(Object(d.a)(t))),t.handleDrag=t.handleDrag.bind(Object(d.a)(Object(d.a)(t))),t.handleDragEnd=t.handleDragEnd.bind(Object(d.a)(Object(d.a)(t))),t}return Object(o.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.client;e&&(this.clientX=e.x,this.clientY=e.y,this.dragging=!0,this.addEvents(),this.props.onDragStart(!0))}},{key:"componentWillUnmount",value:function(){this.removeEvents()}},{key:"addEvents",value:function(){document.addEventListener("mousemove",this.handleDrag),document.addEventListener("mouseup",this.handleDragEnd),document.addEventListener("mouseleave",this.handleDragEnd)}},{key:"removeEvents",value:function(){document.removeEventListener("mousemove",this.handleDrag),document.removeEventListener("mouseup",this.handleDragEnd),document.removeEventListener("mouseleave",this.handleDragEnd)}},{key:"handleDragStart",value:function(e){0===e.button&&(this.clientX=e.clientX,this.clientY=e.clientY,this.dragging=!0,this.addEvents(),this.props.onDragStart(!0))}},{key:"handleDrag",value:function(e){if(this.dragging&&(0!==e.clientX||0!==e.clientY)){var t=e.clientX-this.clientX,n=e.clientY-this.clientY;0===t&&0===n||(this.clientX=e.clientX,this.clientY=e.clientY,this.props.onDrag(t,n,e.clientX,e.clientY))}}},{key:"handleDragEnd",value:function(){this.dragging&&(this.dragging=!1,this.removeEvents(),this.props.onDragEnd(!1))}},{key:"render",value:function(){return f.a.createElement(t,Object.assign({},this.props,{onDragStart:this.handleDragStart}))}}]),n}(h.PureComponent);return e.defaultProps={client:void 0,onDragStart:function(){},onDrag:function(){},onDragEnd:function(){}},e})(function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.disabled?void 0:this.props.onDragStart;return f.a.createElement("div",{onMouseDown:e,className:Object(v.z)("indicator")})}}]),t}(h.PureComponent)),O=n(86);function j(n,e){var t=e.length-1,a=0;if(e.forEach(function(e,t){e<n&&(a=t)}),t<=a)return 1;var r=e[a],l=e[a+1];return(a+(n-r)/(l-r))/t}function E(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:1,a=t.length-1;if(0===n)return t[Math.round(e*a)];if(1<=e)return t[a];var r=Math.floor(e*a),l=t[r],i=(t[r+1]-l)/n,c=(e-r/a)*a;return Object(O.c)(l+Math.round(c*i)*n)}var V=function(e){function n(e){var t;return Object(r.a)(this,n),(t=Object(i.a)(this,Object(c.a)(n).call(this,e))).state={dragging:!1,length:j(e.value,e.scale)},t.bindElement=t.bindElement.bind(Object(d.a)(Object(d.a)(t))),t.handleDrag=t.handleDrag.bind(Object(d.a)(Object(d.a)(t))),t.handleDragEnd=t.handleDragEnd.bind(Object(d.a)(Object(d.a)(t))),t}return Object(o.a)(n,e),Object(l.a)(n,[{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.value,a=t.scale,r=this.state.dragging,l=a.length;(e.value!==n||!r&&e.scale[l-1]!==a[l-1])&&this.setState({length:j(n,a)})}},{key:"bindElement",value:function(e){e&&(this.parentElement=e.parentElement)}},{key:"length2value",value:function(e){var t=this.props;return E(e,t.scale,t.step)}},{key:"handleDrag",value:function(e,t){var n=this.props,a=n.scale,r=n.onDrag,l=n.value,i=n.vertical,c=n.onIncrease,o=i?t/this.parentElement.clientHeight:e/this.parentElement.clientWidth,s=this.state.length,u=this.props.min?j(this.props.min,a):0,d=this.props.max?j(this.props.max,a):1,h=s+(i?-o:o),f=1<h;if(h<u&&(h=u),d<h&&(h=d),f&&c&&c(),this.setState({length:h,dragging:!0}),r){var m=this.length2value(h);m!==l&&r(m)}}},{key:"handleDragEnd",value:function(){var e=this.state.length,t=this.props.scale,n=this.length2value(e);this.setState({length:j(n,t),dragging:!1}),this.props.onChange(this.props.index,n)}},{key:"renderResult",value:function(){var e=this.props,t=e.autoHide,n=e.formatValue;if(!n)return null;var a=this.state.dragging,r=Object(v.z)("result",(!t||a)&&"show"),l=n(this.length2value(this.state.length));return f.a.createElement("div",{className:r},l)}},{key:"render",value:function(){var e=this.props,t=e.index,n=e.disabled,a=e.vertical,r=this.state.length;1===t&&(r=1-r);var l=Object(b.a)({},a?"height":"width","".concat(100*r,"%")),i=Object(v.z)("bar",a&&(1===t?"top":"bottom"),!a&&1===t&&"right");return f.a.createElement("div",{ref:this.bindElement,style:l,className:i},this.renderResult(),f.a.createElement("div",{className:Object(v.z)("bar-bg")}),f.a.createElement(y,{disabled:n,onDrag:this.handleDrag,onDragEnd:this.handleDragEnd}))}}]),n}(g.b);V.defaultProps={formatValue:function(e){return e}};var D=V,x=function(e){function n(e){var t;return Object(r.a)(this,n),(t=Object(i.a)(this,Object(c.a)(n).call(this,e))).state={},t.bindElement=t.bindElement.bind(Object(d.a)(Object(d.a)(t))),t.handleClick=t.handleClick.bind(Object(d.a)(Object(d.a)(t))),t.handleChange=t.handleChange.bind(Object(d.a)(Object(d.a)(t))),t.handleFirstDrag=t.handleDrag.bind(Object(d.a)(Object(d.a)(t)),0),t.handleSecondDrag=t.handleDrag.bind(Object(d.a)(Object(d.a)(t)),1),t}return Object(o.a)(n,e),Object(l.a)(n,[{key:"getValue",value:function(){var e=this.props,t=e.range,n=e.value,a=e.scale[0];if(!t)return n||a;var r=n;return t&&!Array.isArray(n)&&(r=[a,a]),r[0]>r[1]&&(r=[r[1],r[0]]),r}},{key:"bindElement",value:function(e){this.innerElement=e}},{key:"handleClick",value:function(e){if(!(0<=e.target.className.indexOf(Object(v.z)("indicator"))||this.props.disabled)){var t=this.props,n=t.scale,a=t.step,r=t.vertical,l=t.range,i=this.innerElement.getBoundingClientRect(),c=E(r?1-(e.clientY-i.top)/i.height:(e.clientX-i.left)/i.width,n,a);if(l){var o=Object(u.a)(this.getValue());c<o[0]?o[0]=c:o[1]=c,this.props.onChange(o)}else this.props.onChange(c)}}},{key:"handleChange",value:function(e,t){if(this.props.range){var n=Object(u.a)(this.getValue());n[e]=t,this.props.onChange(n)}else this.props.onChange(t)}},{key:"handleDrag",value:function(e,t){this.props.range||this.props.onDrag(t)}},{key:"renderScale",value:function(){var e=this.props,t=e.autoHide,n=e.formatScale,a=e.scale;return n?f.a.createElement("div",{className:Object(v.z)("scale",!t&&"show")},a.map(function(e,t){return f.a.createElement("div",{key:e},f.a.createElement("span",null,n(e,t)))})):null}},{key:"render",value:function(){var e=this.props,t=e.range,n=e.height,a=e.style,r=e.vertical,l=Object(s.a)(e,["range","height","style","vertical"]),i=p()(Object(v.z)("_",r&&"vertical",this.props.disabled&&"disabled"),this.props.className),c=this.getValue();Array.isArray(c)||(c=[0,c]);var o=a;return r&&(o=Object.assign({height:n},a)),f.a.createElement("div",{style:o,className:i},f.a.createElement("div",{className:Object(v.z)("background")}),f.a.createElement("div",{ref:this.bindElement,onClick:this.handleClick,className:Object(v.z)("inner")},t&&f.a.createElement(D,Object.assign({},l,{index:0,max:c[1],onChange:this.handleChange,value:c[0],vertical:r})),f.a.createElement(D,Object.assign({},l,{index:1,min:c[0],onChange:this.handleChange,value:c[1],vertical:r}))),this.renderScale())}}]),n}(h.PureComponent);x.defaultProps={height:200,scale:[0,100],step:1,vertical:!1,formatScale:function(e){return e}};var k=x,w=Object(a.a)(k);w.displayName="ShineoutSlider";t.a=w},982:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(477),i=n(478),c=n(34),o=n(983),s=n.n(o),u=n(984),d=n.n(u),h=Object(c.b)(s.a,d.a),f=[{name:"01-base",title:Object(c.b)("基本用法 \n 最基本的用法","Base \n The basic usage."),component:n(985).default,rawText:n(986)},{name:"02-range",title:Object(c.b)("范围选择 \n 设置 range 属性显示为双滑块，输入(返回)值为长度为 2 的数组","Range \n Set the range property to display double sliders, and value is an array of length 2."),component:n(987).default,rawText:n(988)},{name:"03-scale",title:Object(c.b)("区间 \n 设置 scale 属性可以自定义区间。","Scale \n Set the scale property to customize the interval."),component:n(989).default,rawText:n(990)},{name:"04-format",title:Object(c.b)("格式化 \n 通过 formatScale 属性自定义刻度显示信息 \n 通过 formatValue 属性自定义值显示信息","Format \n Set the formatScale property to customize the display scale. \n Set the formatValue property to customize the display value."),component:n(991).default,rawText:n(992)},{name:"05-step",title:Object(c.b)("步长 \n 设置 step 属性，定义拖动的步长，默认为 1","Step \n Set the step property to define the step size of the drag and the default value is 1."),component:n(993).default,rawText:n(994)},{name:"06-step",title:Object(c.b)(" \n step 设定为 0 时，只能取 scale 内定义的值"," \n When the step is set to 0, only the value defined in scale can be taken."),component:n(995).default,rawText:n(996)},{name:"07-hide",title:Object(c.b)("隐藏信息 \n autoHide 选项为 true 时，自动隐藏当前值和刻度","Hide value \n When then autoHide property is true, automatically hide current values and scales."),component:n(997).default,rawText:n(998)},{name:"08-hide",title:Object(c.b)(" \n 如果要彻底不显示刻度和当前值，设置 formatValue 和 fotmatScale 为 false"," \n Set formatValue and fotmatScale to false to hide the scale and current values completely."),component:n(999).default,rawText:n(1e3)},{name:"09-disabled",title:Object(c.b)("禁用 \n 设置 disabled 属性，禁用组件","Disabled \n Set the disabled property to disable the component."),component:n(1001).default,rawText:n(1002)},{name:"10-vertical",title:Object(c.b)("垂直 \n 设置 vertical 属性，修改组件为垂直方向","Vertical \n Set the vertical property to change the component vertical."),component:n(1003).default,rawText:n(1004)},{name:"11-increase",title:Object(c.b)("增长 \n 允许拖动到最右边的时候进行增长","onIncrease \n can increase the maximum infinitely while dragging"),component:n(1005).default,rawText:n(1006)}];t.default=Object(l.a)(function(e){return r.a.createElement(i.b,Object.assign({},e,{codes:void 0,source:h,examples:f}))})},983:function(e,t){e.exports="# Slider *滑块*\n\n<example />\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| defaultValue | number\\|array\\[number] | 无 | 默认值 |\n| formatScale | function\\|false | v => v | 格式化显示刻度，为false时，不显示刻度 |\n| formatValue | function\\|false | v => v | 格式化显示当前值，为false时，不显示当前值 |\n| height | number | 200 | 高度，仅在 vertical 为 true 情况下有效 |\n| onChange | function | 无 | 值改变时回调函数 |\n| scale | array\\[number] | \\[0, 100] | 取值范围，长度 >= 2 的数组 |\n| step | number | 1 | 步长，必须大于等于0；为0时，只能选取 scale 指定的值 |\n| value | number\\|array\\[number] | 无 | 当前值 |\n| vertical | bool | false | 是否垂直 |\n| autoHide | bool | false | 是否自动隐藏当前值和刻度 |\n| disabled | bool | false | 是否禁用组件 |\n| range | bool | false | 是否显示双滑块 |\n| onIncrease | func | 无 | 拖动超过最大值事件 |\n"},984:function(e,t){e.exports="# Slider\n\n<example />\n\n## API\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| defaultValue | number\\|array\\[number] | - | defaultValue |\n| formatScale | function\\|false | v => v | Format displayed scale. When it is false, the scale is not displayed. |\n| formatValue | function\\|false | v => v | Format displayed current value. When it is false, the current value is not displayed. |\n| height | number | 200 | height. Only effect when vertical is true |\n| onChange | function | - | The callback function when the value is changing. |\n| scale | array\\[number] | \\[0, 100] | Value range. An array whose length is greater than 2. |\n| step | number | 1 | Step size. Must be greater than or equal to 0; When it is 0, only the value specified by scale can be selected. |\n| value | number\\|array\\[number] | - | current value |\n| vertical | bool | false | Whether to be vertical |\n| autoHide | bool | false | Automatically hides the current value and scale |\n| disabled | bool | false | Disable component |\n| range | bool | false | Whether to display double slider |\n| onIncrease | func | - | Drag over the maximum event |\n"},985:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(1472);t.default=function(){return r.a.createElement(l.a,{defaultValue:50})}},986:function(e,t){e.exports="/**\n * cn - 基本用法\n *    -- 最基本的用法\n * en - Base\n *    -- The basic usage.\n */\nimport React from 'react'\nimport { Slider } from 'shineout'\n\nexport default function() {\n  return <Slider defaultValue={50} />\n}\n"},987:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(1472);t.default=function(){return r.a.createElement(l.a,{range:!0,defaultValue:[25,75]})}},988:function(e,t){e.exports="/**\n * cn - 范围选择\n *    -- 设置 range 属性显示为双滑块，输入(返回)值为长度为 2 的数组\n * en - Range\n *    -- Set the range property to display double sliders, and value is an array of length 2.\n */\nimport React from 'react'\nimport { Slider } from 'shineout'\n\nexport default function() {\n  return <Slider range defaultValue={[25, 75]} />\n}\n"},989:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(1472);t.default=function(){return r.a.createElement(l.a,{scale:[0,50,100,250,500,1e3]})}},990:function(e,t){e.exports="/**\n * cn - 区间\n *    -- 设置 scale 属性可以自定义区间。\n * en - Scale\n *    -- Set the scale property to customize the interval.\n */\nimport React from 'react'\nimport { Slider } from 'shineout'\n\nexport default function() {\n  return <Slider scale={[0, 50, 100, 250, 500, 1000]} />\n}\n"},991:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(1472),i=function(e){return e<10?"0".concat(e):e},c=function(e){var t=e+540,n=Math.floor(t/60);return"".concat(i(n),":").concat(i(t-60*n))};t.default=function(){return r.a.createElement(l.a,{range:!0,defaultValue:[33,216],scale:[0,60,120,180,240,300,360,420,480,540],formatScale:c,formatValue:c})}},992:function(e,t){e.exports="/**\n * cn - 格式化\n *    -- 通过 formatScale 属性自定义刻度显示信息\n *    -- 通过 formatValue 属性自定义值显示信息\n * en - Format\n *    -- Set the formatScale property to customize the display scale.\n *    -- Set the formatValue property to customize the display value.\n */\nimport React from 'react'\nimport { Slider } from 'shineout'\n\nconst pad = i => (i < 10 ? `0${i}` : i)\nconst format = v => {\n  const value = v + 540\n  const hours = Math.floor(value / 60)\n  return `${pad(hours)}:${pad(value - hours * 60)}`\n}\n\nexport default function() {\n  return (\n    <Slider\n      range\n      defaultValue={[33, 216]}\n      scale={[0, 60, 120, 180, 240, 300, 360, 420, 480, 540]}\n      formatScale={format}\n      formatValue={format}\n    />\n  )\n}\n"},993:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(1472);t.default=function(){return r.a.createElement(l.a,{range:!0,defaultValue:[.05,.25],scale:[0,1],step:.05})}},994:function(e,t){e.exports="/**\n * cn - 步长\n *    -- 设置 step 属性，定义拖动的步长，默认为 1\n * en - Step\n *    -- Set the step property to define the step size of the drag and the default value is 1.\n */\nimport React from 'react'\nimport { Slider } from 'shineout'\n\nexport default function() {\n  return <Slider range defaultValue={[0.05, 0.25]} scale={[0, 1]} step={0.05} />\n}\n"},995:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(1472);t.default=function(){return r.a.createElement(l.a,{formatValue:!1,scale:[.8,1,1.2,1.4,1.7,2,2.4,2.8,3.3,4,4.8,5.6,6.7,8,9.5,11,13,16],step:0})}},996:function(e,t){e.exports="/**\n * cn -\n *    -- step 设定为 0 时，只能取 scale 内定义的值\n * en -\n *    -- When the step is set to 0, only the value defined in scale can be taken.\n */\nimport React from 'react'\nimport { Slider } from 'shineout'\n\nexport default function() {\n  return (\n    <Slider\n      formatValue={false}\n      scale={[0.8, 1, 1.2, 1.4, 1.7, 2, 2.4, 2.8, 3.3, 4, 4.8, 5.6, 6.7, 8, 9.5, 11, 13, 16]}\n      step={0}\n    />\n  )\n}\n"},997:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(1472);t.default=function(){return r.a.createElement(l.a,{autoHide:!0,defaultValue:4,scale:[1,2,3,5,8,13,21,34,55,89,144],step:1})}},998:function(e,t){e.exports="/**\n * cn - 隐藏信息\n *    -- autoHide 选项为 true 时，自动隐藏当前值和刻度\n * en - Hide value\n *    -- When then autoHide property is true, automatically hide current values and scales.\n */\nimport React from 'react'\nimport { Slider } from 'shineout'\n\nexport default function() {\n  return <Slider autoHide defaultValue={4} scale={[1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]} step={1} />\n}\n"},999:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(1472);t.default=function(){return r.a.createElement(l.a,{defaultValue:4,step:1,formatValue:!1,formatScale:!1})}}}]);