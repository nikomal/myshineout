webpackJsonpShineoutDoc([17],{1059:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(0),r=t.n(a),o=t(73),l=t(72),s=t(44),c=t(1060),i=t.n(c),b=t(1061),d=t.n(b),f=Object(s.a)(i.a,d.a),u=[{name:"1-base",title:Object(s.a)("基本用法 \n 默认标签样式","Base \n Basic usage."),component:t(1062).default,rawText:t(1063)},{name:"2-color",title:Object(s.a)("自定义颜色 \n 自定义每个标签的字体颜色、边框颜色和背景色","Color \n Set the font color, border color, and background color for each label."),component:t(1064).default,rawText:t(1065)},{name:"3-scroll",title:Object(s.a)("滚动 \n 超出长度时，会自动出现滚动按钮","Scroll \n The slide button is displayed when the Tabs length exceeds the parent container"),component:t(1066).default,rawText:t(1067)},{name:"4-active",title:Object(s.a)("受控 \n 通过 active 和 onChange 可以控制标签状态","Controlled \n Set active and onChange property to control active state."),component:t(1068).default,rawText:t(1069)},{name:"5-shape-line",title:Object(s.a)("样式 \n 设置 shape 为 'line'，标签显示为线条","Shape (line) \n The line type tabs."),component:t(1070).default,rawText:t(1071)},{name:"6-shape-button",title:Object(s.a)(" \n 设置 shape 为 'button'，标签显示为按钮","Shape (button) \n The button type tabs."),component:t(1072).default,rawText:t(1073)},{name:"7-align",title:Object(s.a)('右对齐 \n 设置 align="right" 使标签右对齐',"Align \n set align to 'right' to align labels to the right"),component:t(1074).default,rawText:t(1075)}];n.default=Object(o.a)(function(e){return r.a.createElement(l.b,Object.assign({},e,{codes:void 0,source:f,examples:u}))})},1060:function(e,n){e.exports="# Tabs *标签*\n\n<example />\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| active | string \\| int | 0 | 当前选中标签页（受控） |\n| align | string | 无 | 设置标签对齐方式，可选值 \\['left', 'right'] |\n| background | string | '#fff' | 选中标签背景色 |\n| border | string | '#ddd' | 边框颜色 |\n| className | string | - | 扩展className |\n| defaultActive | string \\| int | 0 | 默认选中标签页（非受控） |\n| inactiveBackground | string | 'transparent' | 未选中标签背景色 |\n| onChange | function(key) | - | 标签选中时触发回调事件 |\n| shape | string | - | 可选值为 \\['line', 'button']，shape 不为空时，background 等颜色参数将会无效 |\n| style | object | - | 最外层扩展样式 |\n\n<br />\n\n### Panel\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| className | string | - | 扩展className |\n| background | string | - | 背景色，会覆盖 Tabs 的background |\n| border | string | - | 边框颜色，会覆盖 Tabs 的border |\n| id | string \\| number | - | 选填，默认为 index |\n| style | object | - | 内容样式 |\n| tab | string \\| ReactElement | 必填 | 标签标题内容 |"},1061:function(e,n){e.exports="# Tabs\n\n<example />\n\n## API\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| active | string \\| int | 0 | Current active tab id or index |\n| background | string | '#fff' | Active background color |\n| border | string | '#ddd' | Border color |\n| className | string | - | Extend className |\n| defaultActive | string \\| int | 0 | Default active tab id or index |\n| inactiveBackground | string | 'transparent' | Inactive background color |\n| onChange | function(key) | - | Change callback |\n| shape | string | - | Options: \\['line', 'button']. If shape is not null, the style properties such as background, border will lose effect |\n| style | object | - | Container element style |\n\n<br />\n\n### Panel\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| className | string | - | Extend className |\n| background | string | - | Background color, override the Tab's background |\n| border | string | - | Border color, override the Tab's border |\n| id | string \\| number | - | The default is index |\n| style | object | - | Content style |\n| tab | string \\| ReactElement | required | Tab content |"},1062:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(0),r=t.n(a),o=t(26),l=t(265),s={padding:"12px 0"};n.default=function(){return r.a.createElement(o.C,{defaultActive:1},r.a.createElement(o.C.Panel,{style:s,tab:"Home"},Object(l.a)(5)),r.a.createElement(o.C.Panel,{style:s,tab:"Profile"},Object(l.a)(6)),r.a.createElement(o.C.Panel,{style:s,tab:"Contact"},Object(l.a)(4)))}},1063:function(e,n){e.exports="/**\n * cn - 基本用法\n *    -- 默认标签样式\n * en - Base\n *    -- Basic usage.\n */\nimport React from 'react'\nimport { Tabs } from 'shineout'\nimport lorem from 'doc/utils/faker/lorem'\n\nconst panelStyle = { padding: '12px 0' }\n\nexport default function () {\n  return (\n    <Tabs defaultActive={1}>\n      <Tabs.Panel style={panelStyle} tab=\"Home\">\n        {lorem(5)}\n      </Tabs.Panel>\n      <Tabs.Panel style={panelStyle} tab=\"Profile\">\n        {lorem(6)}\n      </Tabs.Panel>\n      <Tabs.Panel style={panelStyle} tab=\"Contact\">\n        {lorem(4)}\n      </Tabs.Panel>\n    </Tabs>\n  )\n}\n\n"},1064:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(0),r=t.n(a),o=t(26),l=t(265),s=t(253),c={padding:15},i=r.a.createElement("span",null,r.a.createElement(s.a,{name:"user"})," Contact");n.default=function(){return r.a.createElement(o.C,null,r.a.createElement(o.C.Panel,{border:"transparent",background:"#ffe7ba",style:c,tab:"Home"},Object(l.a)(5)),r.a.createElement(o.C.Panel,{border:"transparent",background:"#ffc069",style:c,tab:"Profile"},Object(l.a)(5)),r.a.createElement(o.C.Panel,{border:"transparent",color:"#fff",background:"#d46b08",style:c,tab:i},Object(l.a)(5)),r.a.createElement(o.C.Panel,{border:"transparent",color:"#fff",background:"#873800",style:c,tab:"Setting"},Object(l.a)(5)),r.a.createElement(o.C.Panel,{border:"#b7eb8f",background:"#f6ffed",style:c,tab:"Message"},Object(l.a)(5)))}},1065:function(e,n){e.exports='/**\n * cn - 自定义颜色\n *    -- 自定义每个标签的字体颜色、边框颜色和背景色\n * en - Color\n *    -- Set the font color, border color, and background color for each label.\n */\nimport React from \'react\'\nimport { Tabs } from \'shineout\'\nimport lorem from \'doc/utils/faker/lorem\'\nimport FontAwsome from \'../Icon/FontAwesome\'\n\nconst panelStyle = { padding: 15 }\nconst contact = <span><FontAwsome name="user" /> Contact</span>\n\nexport default function () {\n  return (\n    <Tabs>\n      <Tabs.Panel border="transparent" background="#ffe7ba" style={panelStyle} tab="Home">\n        {lorem(5)}\n      </Tabs.Panel>\n      <Tabs.Panel border="transparent" background="#ffc069" style={panelStyle} tab="Profile">\n        {lorem(5)}\n      </Tabs.Panel>\n      <Tabs.Panel border="transparent" color="#fff" background="#d46b08" style={panelStyle} tab={contact}>\n        {lorem(5)}\n      </Tabs.Panel>\n      <Tabs.Panel border="transparent" color="#fff" background="#873800" style={panelStyle} tab="Setting">\n        {lorem(5)}\n      </Tabs.Panel>\n      <Tabs.Panel border="#b7eb8f" background="#f6ffed" style={panelStyle} tab="Message">\n        {lorem(5)}\n      </Tabs.Panel>\n    </Tabs>\n  )\n}\n\n'},1066:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(0),r=t.n(a),o=t(26),l=t(265),s={padding:"12px 0"};n.default=function(){return r.a.createElement(o.C,{inactiveBackground:"#f2f2f2"},Array.from({length:20}).map(function(e,n){return r.a.createElement(o.C.Panel,{key:n,style:s,tab:"Tab ".concat(n)},Object(l.a)(5))}))}},1067:function(e,n){e.exports="/**\n * cn - 滚动\n *    -- 超出长度时，会自动出现滚动按钮\n * en - Scroll\n *    -- The slide button is displayed when the Tabs length exceeds the parent container\n */\nimport React from 'react'\nimport { Tabs } from 'shineout'\nimport lorem from 'doc/utils/faker/lorem'\n\nconst panelStyle = { padding: '12px 0' }\n\nexport default function () {\n  return (\n    <Tabs inactiveBackground=\"#f2f2f2\">\n      {\n        Array.from({ length: 20 }).map((_, i) => (\n          <Tabs.Panel key={i} style={panelStyle} tab={`Tab ${i}`}>{lorem(5)}</Tabs.Panel>\n        ))\n      }\n    </Tabs>\n  )\n}\n\n"},1068:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),t.d(n,"default",function(){return m});var a=t(1),r=t(3),o=t(4),l=t(2),s=t(5),c=t(0),i=t.n(c),b=t(26),d=t(265),f=t(253),u={padding:15},p=i.a.createElement("span",null,i.a.createElement(f.a,{name:"user"})," Contact"),m=function(e){function n(e){var t;return Object(a.a)(this,n),(t=Object(o.a)(this,Object(l.a)(n).call(this,e))).handleActiveChange=function(e){return t.setState({active:e})},t.hideMessage=function(e){e.stopPropagation(),t.setState({tabs:["home","profile","contact","setting"],showMessage:!1,active:"home"})},t.state={tabs:["home","profile","contact","setting","message"],active:"profile",showMessage:!0},t}return Object(s.a)(n,e),Object(r.a)(n,[{key:"render",value:function(){var e=this.state.active,n=i.a.createElement("span",null,"Message",i.a.createElement("a",{href:"javascript:;",style:{color:"#999",marginLeft:10},onClick:this.hideMessage},i.a.createElement(f.a,{name:"close"})));return i.a.createElement("div",null,i.a.createElement(b.v.Group,{data:this.state.tabs,keygen:!0,value:e,onChange:this.handleActiveChange}),i.a.createElement("br",null),i.a.createElement(b.C,{active:e,onChange:this.handleActiveChange},i.a.createElement(b.C.Panel,{id:"home",border:"transparent",background:"#ffe7ba",style:u,tab:"Home"},Object(d.a)(5)),i.a.createElement(b.C.Panel,{id:"profile",border:"transparent",background:"#ffc069",style:u,tab:"Profile"},Object(d.a)(5)),i.a.createElement(b.C.Panel,{id:"contact",border:"transparent",color:"#fff",background:"#d46b08",style:u,tab:p},Object(d.a)(5)),i.a.createElement(b.C.Panel,{id:"setting",border:"transparent",color:"#fff",background:"#873800",style:u,tab:"Setting"},Object(d.a)(5)),this.state.showMessage&&i.a.createElement(b.C.Panel,{id:"message",border:"#b7eb8f",background:"#f6ffed",style:u,tab:n},Object(d.a)(5))))}}]),n}(c.Component)},1069:function(e,n){e.exports='/**\n * cn - 受控\n *    -- 通过 active 和 onChange 可以控制标签状态\n * en - Controlled\n *    -- Set active and onChange property to control active state.\n */\nimport React, { Component } from \'react\'\nimport { Radio, Tabs } from \'shineout\'\nimport lorem from \'doc/utils/faker/lorem\'\nimport FontAwsome from \'../Icon/FontAwesome\'\n\nconst panelStyle = { padding: 15 }\nconst contact = <span><FontAwsome name="user" /> Contact</span>\n\n\nexport default class extends Component {\n  constructor(props) {\n    super(props)\n    this.state = {\n      tabs: [\'home\', \'profile\', \'contact\', \'setting\', \'message\'],\n      active: \'profile\',\n      showMessage: true,\n    }\n  }\n\n  handleActiveChange = active => this.setState({ active })\n\n  hideMessage = (e) => {\n    e.stopPropagation()\n    this.setState({\n      tabs: [\'home\', \'profile\', \'contact\', \'setting\'],\n      showMessage: false,\n      active: \'home\',\n    })\n  }\n\n  render() {\n    const { active } = this.state\n\n    const message = (\n      <span>\n        Message\n        <a\n          href="javascript:;"\n          style={{ color: \'#999\', marginLeft: 10 }}\n          onClick={this.hideMessage}\n        >\n          <FontAwsome name="close" />\n        </a>\n      </span>\n    )\n\n    return (\n      <div>\n        <Radio.Group\n          data={this.state.tabs}\n          keygen\n          value={active}\n          onChange={this.handleActiveChange}\n        />\n\n        <br />\n\n        <Tabs active={active} onChange={this.handleActiveChange}>\n          <Tabs.Panel id="home" border="transparent" background="#ffe7ba" style={panelStyle} tab="Home">\n            {lorem(5)}\n          </Tabs.Panel>\n          <Tabs.Panel id="profile" border="transparent" background="#ffc069" style={panelStyle} tab="Profile">\n            {lorem(5)}\n          </Tabs.Panel>\n          <Tabs.Panel id="contact" border="transparent" color="#fff" background="#d46b08" style={panelStyle} tab={contact}>\n            {lorem(5)}\n          </Tabs.Panel>\n          <Tabs.Panel id="setting" border="transparent" color="#fff" background="#873800" style={panelStyle} tab="Setting">\n            {lorem(5)}\n          </Tabs.Panel>\n          {\n            this.state.showMessage &&\n            <Tabs.Panel id="message" border="#b7eb8f" background="#f6ffed" style={panelStyle} tab={message}>\n              {lorem(5)}\n            </Tabs.Panel>\n          }\n        </Tabs>\n      </div>\n    )\n  }\n}\n\n'},1070:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(0),r=t.n(a),o=t(26),l=t(265),s={padding:"12px 0"};n.default=function(){return r.a.createElement(o.C,{shape:"line",defaultActive:1},r.a.createElement(o.C.Panel,{style:s,tab:"Home"},Object(l.a)(5)),r.a.createElement(o.C.Panel,{style:s,tab:"Profile"},Object(l.a)(6)),r.a.createElement(o.C.Panel,{style:s,tab:"Contact"},Object(l.a)(4)))}},1071:function(e,n){e.exports="/**\n * cn - 样式\n *    -- 设置 shape 为 'line'，标签显示为线条\n * en - Shape (line)\n *    -- The line type tabs.\n */\nimport React from 'react'\nimport { Tabs } from 'shineout'\nimport lorem from 'doc/utils/faker/lorem'\n\nconst panelStyle = { padding: '12px 0' }\n\nexport default function () {\n  return (\n    <Tabs shape=\"line\" defaultActive={1}>\n      <Tabs.Panel style={panelStyle} tab=\"Home\">\n        {lorem(5)}\n      </Tabs.Panel>\n      <Tabs.Panel style={panelStyle} tab=\"Profile\">\n        {lorem(6)}\n      </Tabs.Panel>\n      <Tabs.Panel style={panelStyle} tab=\"Contact\">\n        {lorem(4)}\n      </Tabs.Panel>\n    </Tabs>\n  )\n}\n\n"},1072:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(0),r=t.n(a),o=t(26),l=t(265),s={padding:"12px 0"};n.default=function(){return r.a.createElement(o.C,{shape:"button",defaultActive:1},r.a.createElement(o.C.Panel,{style:s,tab:"Home"},Object(l.a)(5)),r.a.createElement(o.C.Panel,{style:s,tab:"Profile"},Object(l.a)(6)),r.a.createElement(o.C.Panel,{style:s,tab:"Contact"},Object(l.a)(4)))}},1073:function(e,n){e.exports="/**\n * cn -\n *    -- 设置 shape 为 'button'，标签显示为按钮\n * en - Shape (button)\n *    -- The button type tabs.\n */\nimport React from 'react'\nimport { Tabs } from 'shineout'\nimport lorem from 'doc/utils/faker/lorem'\n\nconst panelStyle = { padding: '12px 0' }\n\nexport default function () {\n  return (\n    <Tabs shape=\"button\" defaultActive={1}>\n      <Tabs.Panel style={panelStyle} tab=\"Home\">\n        {lorem(5)}\n      </Tabs.Panel>\n      <Tabs.Panel style={panelStyle} tab=\"Profile\">\n        {lorem(6)}\n      </Tabs.Panel>\n      <Tabs.Panel style={panelStyle} tab=\"Contact\">\n        {lorem(4)}\n      </Tabs.Panel>\n    </Tabs>\n  )\n}\n\n"},1074:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(0),r=t.n(a),o=t(26),l=t(265),s={padding:"12px 0"};n.default=function(){return r.a.createElement(o.C,{defaultActive:1,align:"right"},r.a.createElement(o.C.Panel,{style:s,tab:"Home"},Object(l.a)(5)),r.a.createElement(o.C.Panel,{style:s,tab:"Profile"},Object(l.a)(6)),r.a.createElement(o.C.Panel,{style:s,tab:"Contact"},Object(l.a)(4)))}},1075:function(e,n){e.exports="/**\n * cn - 右对齐\n *    -- 设置 align=\"right\" 使标签右对齐\n * en - Align\n *    -- set align to 'right' to align labels to the right\n */\nimport React from 'react'\nimport { Tabs } from 'shineout'\nimport lorem from 'doc/utils/faker/lorem'\n\nconst panelStyle = { padding: '12px 0' }\n\nexport default function () {\n  return (\n    <Tabs defaultActive={1} align=\"right\">\n      <Tabs.Panel style={panelStyle} tab=\"Home\">\n        {lorem(5)}\n      </Tabs.Panel>\n      <Tabs.Panel style={panelStyle} tab=\"Profile\">\n        {lorem(6)}\n      </Tabs.Panel>\n      <Tabs.Panel style={panelStyle} tab=\"Contact\">\n        {lorem(4)}\n      </Tabs.Panel>\n    </Tabs>\n  )\n}\n\n"},253:function(e,n,t){"use strict";var a=t(26);n.a=Object(a.m)("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css","FontAwesome","fa")},265:function(e,n,t){"use strict";function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Math.round(Math.random()*(e-n))+n}function r(){var e=a(25);return String.fromCharCode(e+97)}function o(){for(var e=a(9,2),n=[],t=0;t<e;t++)n.push(r());return n.join("")}function l(){for(var e=a(20,4),n=[],t=0;t<e;t++)n.push(o());var r=n.join(" ");return"".concat(r[0].toUpperCase()+r.slice(1),".")}n.a=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=[],t=0;t<e;t++)n.push(l());return n.join(" ")}}});