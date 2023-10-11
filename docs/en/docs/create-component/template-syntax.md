# Template Syntax

`ofa.js` provides a series of powerful template syntax that allows you to manipulate component's interface elements and data more flexibly. These template syntax can help you achieve rich interface effects and interactive experiences.

## Render Text Syntax

By using the `{{key}}` rendering syntax, you can render data as text content and embed it in the component's template. When the data changes, the corresponding text content will also be automatically updated.

The following is an example using text rendering syntax: 

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

In the above example, `{{username}}` will be replaced by the value of the `username` property in the component's data, thus displaying "Welcome, JohnDoe!" on the interface.

## Attribute Binding Syntax

Using the `:xxx='yyy'` attribute binding syntax, you can bind a component's property to an attribute on an element within the template. This binding is one-way, meaning that changes to the property will affect the element's attribute, but not vice versa.

The following are some common examples of attribute bindings:

```html
<!-- template.html -->
<l-m src="custom-component.mjs"></l-m>  <!-- Load the custom-component component -->
<div>
    <p :text="greeting"></p>
    <input :value="inputValue" />
    <custom-component :custom-prop="customValue"></custom-component>
</div>
```

// MyComponent.js
export const type = $.COMP;

export const data = {
  greeting: "Hello, World!",
  inputValue: "",
  customValue: "Custom Value",
};

In the above example, `:text="greeting"` binds the value of the `greeting` property in the component's `data` to the text content of the `<p>` element. `:value="inputValue"` binds the value of the `inputValue` property in the component's `data` to the `value` attribute of the `<input>` element. For custom components, `custom-prop` is the attribute name for the custom component, and it passes the value of the `customValue` property in the component's `data` to the custom component.

## Event Binding

Using the form `on:click="yyy"`, you can bind the specified event (such as `click`) of the target element to the `yyy` property of the host component. This way, when the target element triggers the specified event, it will call the corresponding property method in the host component.

Following is an example: 

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

In the above example, when the button is clicked, the `increaseCount` method of the host component is called to increase the value of the `count` property.

## attribute binding

By using the `attr:xxx="yyy"` format, you can bind the specified attribute `xxx` of the target element to the property `yyy` of the host component. This way, the attribute of the target element will change along with the property of the host component.

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

In the above example, `attr:fontcolor="val"` will bind the `val` property of the host component to the `fontcolor` attribute of the `<div>` element.

### Dynamic Class Name Binding

Using the format `class:xxx="yyy"`, you can dynamically add or remove class names to the target element based on the value of the host component's property. When the `yyy` property of the host component is `true`, the target element will add the class name `xxx`; otherwise, the class name will be removed.

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

In the above example, if the `isActive` attribute is `true`, the button will add the `active` class name, thus applying specific styles.

## Two-way Data Binding

% Through the `sync:xxx='yyy'` format, you can achieve two-way data binding. This ensures that the target element's attribute `xxx` stays synchronized with the host component's attribute `yyy`. Any changes in the target attribute will be reflected in the host attribute, and changes in the host attribute will be synchronized to the target attribute.

Following is an example: 

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

In the above example, `sync:value="inputValue"` implements a two-way data binding, when the value of the input box changes, `inputValue` will automatically be updated; conversely, when `inputValue` changes, the value of the input box will also change accordingly.

