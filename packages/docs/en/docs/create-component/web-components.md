# Encapsulation and Componentization: Basic Knowledge of Componentization

ofa.js is a wrapping library based on Web Components technology, aiming to simplify and accelerate the component development process. By hiding the complex technical details behind, it enables developers to focus more on building high-quality components and applications.

To better develop components, it is necessary to learn some knowledge of Web Components. The knowledge points introduced below can not only be applied in ofa.js, but also benefit you in other frameworks that use Web Components.

## Shadow DOM Container

In Web Components, the Shadow DOM provides an isolated container for encapsulating the internal styles and structure of a component. This means that the internal styles and DOM structure of a component will not interfere with the external styles and structure, ensuring the predictability and maintainability of the component.

In ofa.js, each component has a Shadow DOM container for isolating the internal content of the component. The template content is rendered into this container. The component instance obtained through `$` can also access the internal Shadow DOM container through the `shadow` property, thus achieving operations and access to the internal elements of the component.

```javascript
const myComponent = $("my-component"); // Get the component instance
const shadowContainer = myComponent.shadow; // Get the Shadow DOM container of the component

$("my-component").shadow.$("h1").css.color = 'red' // Change the h1 in the Shadow DOM to red
```

## Common CSS Selectors in Web Components

Web Components provide some special CSS selectors for selecting and styling different parts within the component. Here are some common selectors:

### :host Selector

`:host` selector is used to select the outer container of the component itself. This selector can be used to define the style of the component.

```css
:host {
  display: block;
  border: 1px solid black;
  padding: 10px;
}
```

### ::slotted() Selector

`::slotted()` selector is used to select the elements wrapped by slotted content. This selector can be used in internal styles of the component to style the slotted content.

```css
::slotted(p) {
  font-size: 18px;
  color: blue;
}
```

## Usage of Slots

Slots are mechanisms in Web Components used to embed external content within the component. Slots allow developers to pass custom content into the component, enabling more flexible component structures.

### Single Slot

In the component template, the `<slot>` element can be used to define a slot. The content provided from outside will be inserted into the slot.

```html
<!-- MyComponent.html -->
<div>
  <h2><slot></slot></h2>
</div>
```

```html
<!-- Using MyComponent -->
<my-component>
  <p>This is a slot content.</p>
</my-component>
```

### Multiple Named Slots

In addition to the default slot, multiple named slots can also be defined. Named slots allow developers to insert different contents into different slot positions.

```html
<!-- MyComponent.html -->
<div>
    <header><slot name="header"></slot></header>
    <main><slot></slot></main>
    <footer><slot name="footer"></slot></footer>
</div>
```

```html
<!-- Using MyComponent -->
<my-component>
  <div slot="header">Header Content</div>
  <p>This is main content.</p>
  <div slot="footer">Footer Content</div>
</my-component>
```

## Usage of slotchange event

The `slotchange` event is triggered when the content of a slot changes. This event can be listened to in order to perform actions related to the slot content.

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

