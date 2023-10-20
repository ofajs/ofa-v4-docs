# API 介紹

以下是 ofa.js API 的概覽：

## 實例相關

- [$](./instance/dollar.md)：主要用於獲取實例的方法
- [all](./instance/all.md)：獲取所有相關實例
- [prev](./instance/prev.md)：獲取目標元素的前一個實例
- [prevs](./instance/prevs.md)：獲取目標元素前面的所有實例
- [next](./instance/next.md)：獲取目標元素的後一個實例
- [nexts](./instance/nexts.md)：獲取目標元素後面的所有實例
- [siblings](./instance/siblings.md)：獲取目標元素的所有相鄰元素實例
- [parent](./instance/parent.md)：獲取父元素實例
- [parents](./instance/parents.md)：獲取所有父元素的實例集
- [clone](./instance/clone.md)：克隆實例的方法
- [ele](./instance/ele.md)：獲取實例的實際原生元素
- [shadow](./instance/shadow.md)：獲取自定義組件的影子根節點
- [root](./instance/root.md)：獲取目標實例的根節點
- [子元素](./instance/children.md)：通過數字直接獲取子元素
- [host](./instance/host.md)：獲取目標的 app 元素實例

## 節點操作

- [添加或刪除子節點](./operation/array-like.md)
- [before](./operation/before.md)：在目標實例的前面添加元素
- [after](./operation/after.md)：在目標實例的後面添加元素
- [remove](./operation/remove.md)：刪除目標元素
- [wrap](./operation/wrap.md)：將目標元素上包裹一層元素
- [unwrap](./operation/unwrap.md)：將目標元素去除包裹的元素

## 屬性操作

- [text](./props/text.md)：獲取或設置目標元素的文本
- [html](./props/html.md)：獲取或設置目標元素的 HTML 代碼
- [attr](./props/attr.md)：獲取或設置目標元素的 [attributes](https://developer.mozilla.org/en-US/docs/Web/API/Element/attributes)
- [css](./props/css.md)：獲取或設置目標元素的樣式
- [style](./props/style.md)：獲取目標元素的原生樣式
- [classList](./props/class-list.md)：獲取目標元素的原生 class 列表
- [data](./props/data.md)：獲取目標元素的原生數據集

## 事件相關

- [on](./event/on.md)：綁定事件到目標元素
- [one](./event/one.md)：一次性綁定事件到目標元素
- [emit](./event/emit.md)：主動觸發事件
- [off](./event/off.md)：解除綁定的事件

## 模板語法

- [文本渲染](./temp-syntax/text-render.md)：快速在模板文件上渲染文本
- [class](./temp-syntax/class.md)：快速在模板文件上渲染類名
- [sync](./temp-syntax/sync.md)：快速同步數據到模板文件
- [條件渲染](./temp-syntax/condition.md)：按需在模板文件上渲染內容
- [列表渲染](./temp-syntax/fill.md)：在模板文件上快速渲染數組數據

## 其他

- [盒模型](./others/box.md)：獲取目標元素的所有尺寸相關的數據
- [formData](./others/form-data.md)：方便地綁定和獲取表單數據
- [tag](./others/tag.md)：獲取目標的標簽名
- [index](./others/index.md)：獲取目標元素在其父元素下的排序
- [is](./others/is.md)：判斷目標元素是否匹配 CSS 選擇器表達式
- [refresh](./others/refresh.md)：主動刷新組件的界面
- [PATH](./others/path.md)：獲取組件或頁面的注冊文件地址
- [extend](./others/extend.md)：擴展實例的數據或方法；擴展 ofa.js 底層的數據或方法；
- [實例數據特征](./others/stanz.md)：介紹實例數據的子對象數據特性，如何監聽數據的變動