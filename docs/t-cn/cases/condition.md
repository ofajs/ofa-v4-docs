<template is="exm-article">
<a href="../../publics/examples/condition/demo.html" preview></a>
<a href="../../publics/examples/condition/test-demo.html" main></a>
</template>

# 條件渲染

模板內除了有模板語法，也有模板組件；

> **模板組件** 是專門為了模板而設計的組件，這類組件只能在模板內使用；

條件渲染允許您在特定條件下，動態地在組件中插入不同的內容。以下是一個演示如何在組件內使用條件渲染的示例。

在這個示例中，我們創建了一個名為 `test-demo` 的組件。組件內包含一個按鈕，點擊按鈕會使 `count` 屬性自增。通過 `x-if`、`x-else-if` 和 `x-else` 標簽，我們實現了條件渲染的邏輯。

- `x-if` 標簽接受一個 `value` 屬性，用於定義條件。如果 `value` 的值為 `true`，則渲染 `x-if` 內部的內容。在這個示例中，如果 `count` 為偶數，將顯示紅色文本。
- `x-else-if` 標簽也接受一個 `value` 屬性，用於定義條件。如果前面的條件不滿足且 `value` 的值為 `true`，則渲染 `x-else-if` 內部的內容。在這個示例中，如果 `count` 為 3 的倍數，將顯示藍色文本。
- `x-else` 標簽不需要 `value` 屬性，它會在前面的條件都不滿足時渲染其內部的內容。在這個示例中，如果 `count` 既不是偶數也不是 3 的倍數，將顯示綠色文本。使用 `x-else` 時也可以緊跟在 `x-if` 後面；

通過這種方式，您可以根據不同的條件動態地渲染不同的內容，實現靈活的交互和展示效果。

