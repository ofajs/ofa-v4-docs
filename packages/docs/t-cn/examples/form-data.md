# 表單數據

在許多應用中，處理表單數據是一項常見的任務。為了簡化這個過程，ofa.js 對表單數據的處理進行了二次抽象，提供了 `formData` 方法。通過這個方法，您可以輕松地將表單元素的值映射到一個對象上，並且在表單元素的值發生變化時，自動更新這個對象的數據，反之亦然。

通過使用 `shadow` 屬性，您可以獲取到組件的 Shadow DOM 根節點的內容。這可以讓您在組件內部訪問和操作 Shadow DOM 中的元素和樣式。

在這個示例中，我們可以看到如何利用 `formData` 方法將表單數據自動映射到對象 `fdata` 上。這使得您可以通過操作 `fdata` 對象來獲取或修改表單元素的值，而這些變動也會自動同步到對應的表單元素上。

<a href="../../publics/examples/form-data/demo.html" preview demo></a>
<a href="../../publics/examples/form-data/test-demo.html" main demo></a>

