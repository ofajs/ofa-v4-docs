# 封裝和組件化：組件化常規知識

ofa.js 是一個基於 Web Components 技術的封裝庫，旨在簡化和加速組件開發過程。它通過將復雜的技術細節隱藏在背後，讓開發者能夠更專注地構建高質量的組件和應用。

為了更好地開發組件，有必要學習一些 Web Components 的知識。下面介紹的知識點不僅可以在 ofa.js 中應用，還可以讓你在其他使用 Web Components 的框架上同樣受益。

## Shadow DOM 容器

在 Web Components 中，Shadow DOM 提供了一種隔離的容器，用於封裝組件內部的樣式和結構。這意味著組件內部的樣式和 DOM 結構不會與外部的樣式和結構相互幹擾，從而確保組件的可預測性和可維護性。

在 ofa.js 中，每個組件都有一個 Shadow DOM 容器，用於隔離組件的內部內容。模板內容就是被渲染到這個容器內。通過 `$` 獲取的組件實例，也可以使用 `shadow` 屬性訪問組件內部的 Shadow DOM 容器，從而實現對組件內部元素的操作和訪問。

```javascript
const myComponent = $("my-component"); // 獲取組件實例
const shadowContainer = myComponent.shadow; // 獲取組件的 Shadow DOM 容器

$("my-component").shadow.$("h1").css.color = 'red' // 將 Shadow DOM 的 h1 改為紅色
```

## Web Components 中的常用 CSS 選擇器

Web Components 提供了一些特殊的 CSS 選擇器，用於選擇和樣式化組件內部的不同部分。以下是一些常用的選擇器：

### :host 選擇器

`:host` 選擇器用於選擇組件自身的外部容器。可以通過這個選擇器來定義組件的樣式。

```css
:host {
  display: block;
  border: 1px solid black;
  padding: 10px;
}
```

### ::slotted() 選擇器

`::slotted()` 選擇器用於選擇被插槽內容包裹的元素。可以在組件內部的樣式中使用這個選擇器來樣式化被插槽的內容。

```css
::slotted(p) {
  font-size: 18px;
  color: blue;
}
```

## 插槽（Slot）的使用

插槽是 Web Components 中用於在組件內部嵌入外部內容的機制。插槽允許開發者將自定義的內容傳遞到組件內部，實現更靈活的組件結構。

### 單個插槽

在組件模板中，可以使用 `<slot>` 元素來定義插槽。外部傳入的內容會被插入到插槽內部。

```html
<!-- MyComponent.html -->
<div>
  <h2><slot></slot></h2>
</div>
```

```html
<!-- 使用 MyComponent -->
<my-component>
  <p>This is a slot content.</p>
</my-component>
```

### 多個命名插槽

除了默認插槽外，還可以定義多個命名插槽。命名插槽允許開發者將不同的內容插入到不同的插槽位置。

```html
<!-- MyComponent.html -->
<div>
    <header><slot name="header"></slot></header>
    <main><slot></slot></main>
    <footer><slot name="footer"></slot></footer>
</div>
```

```html
<!-- 使用 MyComponent -->
<my-component>
  <div slot="header">Header Content</div>
  <p>This is main content.</p>
  <div slot="footer">Footer Content</div>
</my-component>
```

## slotchange 事件的使用

`slotchange` 事件在插槽內容變化時觸發。可以通過監聽這個事件來執行一些與插槽內容相關的操作。

```javascript
// custom-component.mjs
export const type = $.COMP;

export default {
  data: {
    count: 0,
  },
  ready() {
    this.shadow.$("slot").on("slotchange", () => {
      console.log("Slot content has changed");
    });
  },
};
```