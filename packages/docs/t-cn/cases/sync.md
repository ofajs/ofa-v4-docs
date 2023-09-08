# 雙向數據綁定

通過使用 `sync` 語法，您可以在用戶界面的交互元素（例如輸入框或自定義組件）與數據模型之間建立實時的雙向關聯。

以下示例演示了如何在組件中使用 `sync` 屬性來實現輸入框與數據模型之間的雙向數據綁定：

- 在 `data` 參數中，我們定義了名為 `testText` 的數據，並為其設置初始值為 "I am testText"。
- 使用 `sync:value="testText"` 表示輸入框的值與 `testText` 數據之間建立了雙向數據綁定。因此，當用戶在輸入框中輸入內容時，`testText` 數據會實時更新，反之亦然。
- 同樣，使用 `sync:txt="testText"` 表示自定義組件的 `txt` 屬性與 `testText` 數據之間建立了雙向數據綁定。組件的 `txt` 屬性發生變化時，`testText` 數據會實時更新，反之亦然。

通過雙向數據綁定，您可以輕松地在用戶界面和數據模型之間建立聯系，使得數據的變化能夠自動反映在界面上，同時用戶在界面上的輸入也能立即影響到數據模型。

值得注意的是，數據同步只能傳遞 **字符串** 或 **數字**，無法傳遞其他數據類型。

<a href="../../publics/examples/sync/demo.html" preview demo></a>
<a href="../../publics/examples/sync/test-demo.html" main demo></a>
<a href="../../publics/examples/sync/custom-input.html" demo></a>

