# Template Syntax

`ofa.js` provides a series of powerful template syntax that allows you to manipulate component's interface elements and data more flexibly. These template syntax can help you achieve rich interface effects and interactive experiences.

## Text Rendering Syntax

By using the rendering text syntax `{{key}}`, you can render data as text content and embed it into the component's template. The corresponding text content will also be automatically updated when the data changes.

Here is an example using text rendering syntax:

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

In the example above, `{{username}}` will be replaced by the value of the `username` property in the component's `data`, thus displaying "Welcome, JohnDoe!" on the interface.

## Attribute Binding Syntax

Using the attribute binding syntax `:xxx='yyy'`, you can bind a component's property to the attribute of an element within the template. This binding is one-way, where changes in the property will affect the attribute of the element but not vice versa.

Here are some common examples of property bindings:

```html
<!-- template.html -->
<l-m src="custom-component.mjs"></l-m>  <!-- load custom-component -->
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

In the example above, `:text="greeting"` binds the value of the `greeting` property in the component's `data` to the text content of the `<p>` element. `:value="inputValue"` binds the value of the `inputValue` property in the component's `data` to the `value` attribute of the `<input>` element. For custom components, `custom-prop` is the name of the property in the custom component that receives the value of the `customValue` property in the component's `data`.

## Event Binding

Using the format `on:click="yyy"`, you can bind a specified event (e.g., `click`) of the target element to a property `yyy` in the host component. This way, when the target element triggers the specified event, it will invoke the corresponding property method in the host component.

Here is an example:

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

In the example above, when the button is clicked, it will call the `increaseCount` method of the host component to increase the value of the `count` property.

## Attribute binding

Using the form `attr:xxx="yyy"`, you can bind the specified attribute `xxx` of the target element to the property `yyy` of the host component. This way, the attribute of the target element will change as the property of the host component changes.

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

In the example above, `attr:fontcolor="val"` will bind the host component's `val` property to the `fontcolor` attribute of the `<div>` element.

## Dynamic class binding

Using the form `class:xxx="yyy"`, you can dynamically add or remove class names to the target element based on the property value of the host component. When the host component's `yyy` property is `true`, the target element will add the class name `xxx`; otherwise, it will remove that class name.

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

In the example above, if the `isActive` property is `true`, the button will add the `active` class name to apply specific styles.

## Two-way Data Binding

By using the form of `sync:xxx='yyy'`, you can achieve two-way data binding. This keeps the attribute `xxx` of the target element in sync with the property `yyy` of the host component, so that changes in the target attribute will be reflected in the host property, and changes in the host property will also be synced to the target attribute.

Here is an example:

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

In the example above, `sync:value="inputValue"` achieves two-way data binding, so when the value of the input box changes, `inputValue` will be automatically updated; conversely, when `inputValue` changes, the value of the input box will also change accordingly.

