# 組件插槽

通過在模板中添加 `<slot></slot>` 標簽，可以在使用組件時，將內容放置在對應組件標簽內的插槽中。

自定義的組件在默認情況下沒有定義 `display` 屬性，因此需要手動為組件定義。在組件的樣式中，可以使用 `:host` 選擇器來添加組件自身的樣式。

這個示例展示了如何創建一個名為 `simple-btn` 的組件。組件的模板中包含一個插槽，可以將內容插入到組件中。通過為組件的樣式添加 `:host` 選擇器，為組件添加樣式。在另一個頁面中，使用 `l-m` 組件引用 `simple-btn` 組件，並在其中插入內容。

<a href="../../publics/examples/simple-btn/demo.html" preview demo></a>
<a href="../../publics/examples/simple-btn/simple-btn.html" main demo></a>

