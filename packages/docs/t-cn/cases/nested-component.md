# 嵌套組件

全部過多的邏輯放到一個組件上，不是一個明智的選擇；我們可以將邏輯分到另外的組件，在通過 `l-m` 方式導入另一個組件來使用；

案例中通過 `<l-m src="./comp-two.html"></l-m>` 引入了名為 CompTwo 的嵌套組件。

通過 `<comp-two :txt="val"></comp-two>` 使用了嵌套組件，並將當前組件的 val 屬性作為 txt 屬性傳遞給嵌套組件。這樣，嵌套組件可以使用傳遞過來的數據進行渲染。

在 `<comp-two></comp-two>` 中，我們在不傳遞任何屬性的情況下使用了嵌套組件。這裏的使用方式取決於嵌套組件本身的邏輯和設計。

只要一個組件加載成功，無論在何處，都可以使用相應名稱的組件。即使在多個地方多次使用 `l-m` 組件加載相同的組件，也不會導致組件被多次加載。這種機制保證了組件的重用和一致性。

<a href="../../publics/examples/nested-component/demo.html" preview demo></a>
<a href="../../publics/examples/nested-component/comp-one.html" main demo></a>
<a href="../../publics/examples/nested-component/comp-two.html" demo></a>

