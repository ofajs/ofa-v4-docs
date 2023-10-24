# PATH

`PATH` 屬性通常用於自定義組件或頁面組件上，用於獲取該組件的注冊組件的文件地址。這在開發過程中可以幫助你了解組件的來源，特別是當你需要引用或加載其他資源文件時，可以使用 `PATH` 屬性來構建文件路徑。

下面是一個簡單示例，演示如何在自定義組件中使用 `PATH` 屬性：

```html
<my-comp id="myCustomComponent">
  <!-- 這裏是你的自定義組件的內容 -->
</my-comp>
<script>
  // 獲取自定義組件的文件路徑
  const componentPath = $("#myCustomComponent").PATH;

  // 在此處可以使用 componentPath 來構建文件路徑，加載其他資源文件等
</script>
```

在這個示例中，我們選擇了一個具有 `id` 為 "myCustomComponent" 的 `my-comp` 元素，然後通過 `PATH` 屬性獲取了該自定義組件的文件路徑。你可以根據需要在腳本部分使用 `componentPath` 變量，例如，用它來構建其他資源文件的路徑或進行其他操作。