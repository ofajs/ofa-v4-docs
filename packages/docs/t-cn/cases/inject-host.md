# inject-host 組件

鑒於 Web Components 的隔離性，很難直接修改組件插槽內元素的樣式。為了應對這個問題，ofa.js 提供了一個名為 `inject-host` 的組件；`inject-host` 組件會向宿主層注入樣式，從而更靈活地配置組件的外觀。

需要注意的是，使用此組件可能會影響宿主層的樣式。因此，在侵入樣式時應保持命名的規範性，以避免影響宿主的樣式。

示例中，我們定義了 `comp-two` 組件，內部使用了 `inject-host` 組件來注入樣式。這使得我們可以通過注入的樣式對 `comp-two` 組件內的元素進行樣式設置，而不會影響到其他組件。

同時，以下內容也需要特別注意：

- 通過在 `inject-host` 內添加 `<style>` 標簽，我們可以定義組件內的特定樣式。這些樣式只會影響到當前組件的元素，而不會波及到其他組件。
- 在注入樣式時，應當避免使用過於普通的選擇器，以免影響到其他組件的樣式。需要保持選擇器的唯一性和特定性。
- `inject-host` 也可以注入外部的樣式表文件，通過 `<link rel="stylesheet" href="target/style.css">` 的方式。

在整個示例中，通過使用 `comp-two` 組件內的 `inject-host`，我們可以在不破壞其他組件樣式的情況下，靈活地設置並應用組件內部的樣式。

<a href="../../publics/examples/inject-host/demo.html" preview demo></a>
<a href="../../publics/examples/inject-host/comp-one.html" demo></a>
<a href="../../publics/examples/inject-host/comp-two.html" main demo></a>

