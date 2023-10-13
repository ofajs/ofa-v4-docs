# 模板語法

`ofa.js` 提供了一系列強大的模板語法，使你能夠更靈活地操作組件的界面元素和數據。這些模板語法能夠幫助你實現豐富的界面效果和交互體驗。

## 渲染文本語法

通過使用 `{{key}}` 的渲染文本語法，你可以將數據渲染為文本內容，並將其嵌入到組件的模板中。當數據發生變化時，對應的文本內容也會自動更新。

以下是一個使用文本渲染語法的示例：

```html
<!-- template.html -->
<div>
    <p>Welcome, {{username}}!</p>
</div>
```

```javascript
// MyComponent.js
export const type = $.COMP;

export const data = {
  username: "JohnDoe",
};
```

在上述示例中，`{{username}}` 將會被組件的 `data` 中的 `username` 屬性值所替代，從而在界面上顯示出 "Welcome, JohnDoe!"。

## 屬性綁定語法

使用 `:xxx='yyy'` 的屬性綁定語法，你可以將組件的屬性綁定到模板內元素的屬性上。這種綁定是單向的，屬性的變化會影響到模板內元素的屬性，但不會反過來影響組件的屬性。

以下是一些常見的屬性綁定示例：

```html
<!-- template.html -->
<l-m src="custom-component.mjs"></l-m>  <!-- 加載 custom-component 組件 -->
<div>
    <p :text="greeting"></p>
    <input :value="inputValue" />
    <custom-component :custom-prop="customValue"></custom-component>
</div>
```

```javascript
// MyComponent.js
export const type = $.COMP;

export const data = {
  greeting: "Hello, World!",
  inputValue: "",
  customValue: "Custom Value",
};
```

在上述示例中，`:text="greeting"` 將組件的 `data` 中的 `greeting` 屬性值綁定到 `<p>` 元素的文本內容上。`:value="inputValue"` 將組件的 `data` 中的 `inputValue` 屬性值綁定到 `<input>` 元素的 `value` 屬性上。對於自定義組件，`custom-prop` 是自定義組件的屬性名，它將組件的 `data` 中的 `customValue` 屬性值傳遞給自定義組件。

## 事件綁定

使用 `on:click="yyy"` 的形式，你可以將目標元素的指定事件（例如 `click`）綁定到宿主組件的屬性 `yyy` 上。這樣，當目標元素觸發指定事件時，會調用宿主組件中相應的屬性方法。

以下是一個示例：

```html
<!-- template.html -->
<button on:click="increaseCount">Increase Count</button>
```

```javascript
// MyComponent.js
export const type = $.COMP;

export const data = {
  count: 0,
};

export const proto = {
  increaseCount() {
    this.count++;
  },
};
```

在上述示例中，當按鈕被點擊時，會調用宿主組件的 `increaseCount` 方法，從而增加 `count` 屬性的值。

## attributes 綁定

通過 `attr:xxx="yyy"` 的形式，你可以將目標元素的指定屬性 `xxx` 綁定到宿主組件的屬性 `yyy` 上。這樣，目標元素的屬性會隨著宿主組件的屬性變化而變化。

```html
<!-- template.html -->
<style>
[fontcolor="red"]{
    color: red;
}
</style>

<div attr:fontcolor="val">
 I am text
</div>
```

```javascript
// MyComponent.js
export const type = $.COMP;

export const data = {
  val: "red",
};
```

在上述示例中，`attr:fontcolor="val"` 會將宿主組件的 `val` 屬性綁定到 `<div>` 元素的 `fontcolor` attribute上。

## 動態類名綁定

使用 `class:xxx="yyy"` 的形式，你可以根據宿主組件的屬性值來動態地為目標元素添加或移除類名。當宿主組件的 `yyy` 屬性為 `true` 時，目標元素會添加類名 `xxx`；否則，會移除該類名。

```html
<!-- template.html -->
<style>
  button.active{
    background-color: red;
  }
</style>
<button class:active="isActive">Active Button</button>
```

```javascript
// MyComponent.js
export const type = $.COMP;

export const data = {
  isActive: false,
};
```

在上述示例中，如果 `isActive` 屬性為 `true`，則按鈕會添加 `active` 類名，從而應用特定的樣式。

## 雙向數據綁定

通過 `sync:xxx='yyy'` 的形式，你可以實現雙向數據綁定。這使得目標元素的屬性 `xxx` 和宿主組件的屬性 `yyy` 保持同步，即目標屬性的變化會反映到宿主屬性上，宿主屬性的變化也會同步到目標屬性上。

以下是一個示例：

```html
<!-- template.html -->
<input sync:value="inputValue" />
```

```javascript
// MyComponent.js
export const type = $.COMP;

export const data = {
  inputValue: "Initial Value",
};
```

在上述示例中，`sync:value="inputValue"` 實現了一個雙向數據綁定，當輸入框的值發生變化時，`inputValue` 會自動更新；反之，當 `inputValue` 發生變化時，輸入框的值也會隨之變化。