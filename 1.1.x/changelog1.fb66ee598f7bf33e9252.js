webpackJsonpShineoutDoc([38],{1106:function(n,e){n.exports="# 更新日志\n\n### 1.1\n\n#### 1.1.6\n- 重写 Form.set，修复使用 Form.Block 时，无法通过 set('a.b.c.d', value) 这种方式触发 change。\n- 重写 Form.validate。\n- 重写 Select.filter，Select.Result，修复 filter 值变化不及时更新等问题。修复 value 和 defaultValue 问题。\n\n#### 1.1.5\n- 修复 Menu 高度不足时，边框长度未到底。\n- Select disabled 支持函数（禁止选项）。\n- 修复 StrictMode warning。\n- Tabs 增加右对齐。\n\n#### 1.1.4\n- 移除 dependencies react, react-dom。\n\n#### 1.1.3\n- 一级组件增加 displayName。\n- Enter 键触发 Form 提交时，先触发 blur，更新数据后再提交。\n- 修复 Modal 在上边和下边弹出未撑满屏幕。\n- 修复 Datepicker.Range type 为 'datetime' 时，出现 'Invalid Date'。\n\n#### 1.1.2\n- Cascader expandTrigger 增加 'hover-only' 选项\n- 优化 Sticky 滚动\n- Form 增加 mode 属性\n\n#### 1.1.1\n- Form.Datum.set 支持 object。\n\n#### 1.1.0\n- 增加 Cascader 组件。\n- 修复 From 自定义 validate 时拿到的 value 为 Datum 对象。\n- Menu mode 为 virticle 时支持内部滚动条。\n- 修复 DatePicker 类型为 datetime 时，未设定日期，时间部分显示错误。\n\n### 1.0\n\n#### 1.0.10\n- Datum.Form 增加 validateClear 方法，清除校验结果。\n- Upload 修复删除文件恢复bug。\n- Modal.confirm 按钮事件支持 Promise。\n\n#### 1.0.9\n- Form.Field 增加bind属性，触发绑定字段校验。\n- Modal 加入position，实现 Drawer 功能。\n- 增加 Input.Password。\n- 修复表单内 Upload 错误时可提交表单。\n\n#### 1.0.8\n- 修复 Table 展开行后行高变化导致滚动条位置问题。\n- ScrollBar 默认宽度从 12px 改为 16px。\n- Table 滚动条高度超出实际高度时，隐藏滚动条超出部分。\n- Table 增加 rowClassName。\n- Table 在空数据时增加提示文字。\n- 修复 Tree 在更新数据时判断是否可选会报 undefined。\n\n#### 1.0.7\n- Modal.Submit 延时提交。\n- Message DOM render 改为ref，ReactDOM.render 某些情况下会返回 null。\n- 修复 Message closeAll 后关闭动画无效。\n- 修复 Table 宽度变化时，某些场景下内容表与表头宽度不一致。\n- 修复 Select 数据源变化时，在某些条件下选中结果未变化。\n- Upload 增加 ext 校验。\n\n#### 1.0.6\n- 修复 Table 浏览器缩放后，如果数据量不满一屏，仍会出现滚动条并可以滚动。\n- 修改 Alert 图标布局为 flex。\n- Message 增加 4 个 position，实现 Notification 功能。 \n- Form.validate 性能优化（提交时不处理状态）。\n- Windows 下表格滚动速度调整。\n- Upload 文件名过长换行。\n\n#### 1.0.5\n- Form.inputable bind 移动到 componentDidMount 中（React 组件修改key时会先创建新组件，再移除旧组件）。\n\n#### 1.0.2\n- Select动态修改数据时，重置滚动条位置。\n\n#### 1.0.1\n- 修复 Table column render 函数丢失 index。"}});