# Encapsulation and Componentization: Common Knowledge of Componentization

ofa.js is a wrapper library based on Web Components technology, aiming to simplify and accelerate the component development process. By hiding complex technical details behind the scenes, it allows developers to focus more on building high-quality components and applications.

In order to develop components better, it is necessary to learn some knowledge about Web Components. The knowledge points introduced below can not only be applied in ofa.js, but also benefit you when using other frameworks that use Web Components.

## Shadow DOM Container

In Web Components, Shadow DOM provides an isolated container for encapsulating the styles and structure of a component. This means that the styles and DOM structure inside the component will not interfere with the external styles and structure, ensuring the predictability and maintainability of the component.

In ofa.js, each component has a Shadow DOM container to isolate the internal content of the component. The template content is rendered into this container. The component instance obtained through `$` can also access the Shadow DOM container within the component by using the `shadow` property, thereby achieving manipulation and access to the internal elements of the component.

```javascript
const myComponent = $("my-component"); // Get the component instance
const shadowContainer = myComponent.shadow; // Get the Shadow DOM container of the component

$("my-component").shadow.$("h1").css.color = 'red' // Change the h1 element in the Shadow DOM to red
```

## Common CSS Selectors in Web Components

Web Components provides special CSS selectors for selecting and styling different parts within a component. Here are some commonly used selectors:

### :host Selector

The `:host` selector is used to select the outer container of the component itself. This selector can be used to define the style of the component.

```css
:host {
  display: block;
  border: 1px solid black;
  padding: 10px;
}
```

### ::slotted() Selector

`::slotted()` selector is used to select elements that are wrapped by slotted content. This selector can be used in the styles of a component to style the slotted content.

```css
::slotted(p) {
  font-size: 18px;
  color: blue;
}
```

## How to Use Slots

Slots are the mechanism in Web Components used to embed external content inside a component. Slots allow developers to pass custom content into the component, enabling more flexible component structures.

### Single Slot

In component templates, `<slot>` element can be used to define slots. Contents passed from the outside will be inserted into the slots.

```html
<!-- MyComponent.html -->
<div>
  <h2><slot></slot></h2>
</div>
```

```html
<!-- Use MyComponent -->
<my-component>
  <p>This is a slot content.</p>
</my-component>
```

### Multiple Named Slots

Except for the default slot, multiple named slots can also be defined. Named slots allow developers to insert different content into different slot positions.

```html
<!-- MyComponent.html -->
<div>
    <header><slot name="header"></slot></header>
    <main><slot></slot></main>
    <footer><slot name="footer"></slot></footer>
</div>
```

```html
<!-- Use MyComponent -->
<my-component>
  <div slot="header">Header Content</div>
  <p>This is main content.</p>
  <div slot="footer">Footer Content</div>
</my-component>
```

## Usage of the "slotchange" event

The "slotchange" event is used to detect changes in the assigned nodes within a web component.

The `slotchange` event is triggered when the content of a slot changes. You can listen to this event to perform operations related to the content of the slot.

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