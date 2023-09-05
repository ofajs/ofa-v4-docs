# 自定義表單組件

使用 `ofa.js`，您可以輕松地開發自定義的表單元素組件，使其具有標準的表單特性。只需要為自定義組件添加 `value` 屬性並設置 `name` 特性，您的自制組件就能夠作為標準表單元素來使用。通過更新組件的 `value` 屬性，您就能實現與表單元素的交互。

初始化 `formData` 時，需要將自定義組件的選擇器特征添加到參數中（盡管 `formData` 方法默認的參數為 `"input,select,textarea"`）。這樣，`formData` 就能夠與自定義組件進行聯動。

在這個示例中，我們通過自定義組件 `custom-input` 來實現一個可編輯的文本輸入框。該組件被用作表單元素，並使用 `value` 屬性進行數據交互。使用 `formData` 方法時，我們將 `"input,custom-input"` 添加為參數，以便正確地初始化表單數據。

<a href="../../publics/examples/custom-form-element/demo.html" preview demo></a>
<a href="../../publics/examples/custom-form-element/test-demo.html" main demo></a>
<a href="../../publics/examples/custom-form-element/custom-input.html" demo></a>

