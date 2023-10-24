# API Introduction

Below is an overview of the ofa.js API. You can have a quick look now and refer to the detailed documentation when needed:


## Related to examples

- [$](./instance/dollar.md): Used primarily to obtain instance methods.
- [all](./instance/all.md): Get all relevant instances.
- [prev](./instance/prev.md): Get the previous instance of the target element.
- [prevs](./instance/prevs.md): Get all instances before the target element.
- [next](./instance/next.md): Get the next instance of the target element.
- [nexts](./instance/nexts.md): Get all instances after the target element.
- [siblings](./instance/siblings.md): Get all adjacent element instances of the target element.
- [parent](./instance/parent.md): Get the parent element instance.
- [parents](./instance/parents.md): Get a collection of all parent element instances.
- [clone](./instance/clone.md): Method to clone an instance.
- [ele](./instance/ele.md): Get the actual native element of an instance.
- [shadow](./instance/shadow.md): Get the shadow root node of a custom component.
- [root](./instance/root.md): Get the root node of the target instance.
- [Children](./instance/children.md): Get child elements directly by their index.
- [host](./instance/host.md): Get the app element instance of the target.

## Node Operations

- [Add or remove child nodes](./operation/array-like.md)
- [before](./operation/before.md): Add elements before the target instance
- [after](./operation/after.md): Add elements after the target instance
- [remove](./operation/remove.md): Remove the target element
- [wrap](./operation/wrap.md): Wrap the target element with another element
- [unwrap](./operation/unwrap.md): Remove the wrapping element from the target element

## Attribute Operations

- [text](./props/text.md): Get or set the text content of the target element
- [html](./props/html.md): Get or set the HTML content of the target element
- [attr](./props/attr.md): Get or set the attributes of the target element, [attributes](https://developer.mozilla.org/en-US/docs/Web/API/Element/attributes)
- [css](./props/css.md): Get or set the style of the target element
- [style](./props/style.md): Get the native style of the target element
- [classList](./props/class-list.md): Get the native class list of the target element
- [data](./props/data.md): Get the native dataset of the target element

## Event-related

- [on](./event/on.md): Bind an event to the target element
- [one](./event/one.md): Bind an event to the target element only once
- [emit](./event/emit.md): Trigger an event manually
- [off](./event/off.md): Unbind the bound event

## Template Syntax

- [Text Rendering](./temp-syntax/text-render.md): Quickly render text on template files
- [Class](./temp-syntax/class.md): Quickly render class names on template files
- [Sync](./temp-syntax/sync.md): Quickly sync data to template files
- [Conditional Rendering](./temp-syntax/condition.md): Render content on template files based on conditions
- [List Rendering](./temp-syntax/fill.md): Quickly render array data on template files

## Lifecycle
- [created](./life-cycle/created.md): Triggered when the component is created but before the content is rendered.
- [ready](./life-cycle/ready.md): Triggered when the component is created and the content has been rendered.
- [watch](./life-cycle/watch.md): Triggered after the component is initialized and when the value is changed.
- [loaded](./life-cycle/loaded.md): Triggered after the embedded resources of the component have finished loading.
- [attached](./life-cycle/attached.md): Triggered after the component is added to the document.
- [detached](./life-cycle/detached.md): Triggered after the component is removed from the document.
- [routerChange](./life-cycle/router-change.md): Triggered when the nested parent page experiences a change in the application route.

## Others

- [Box Model](./others/box.md): Retrieves all size-related data of the target element.
- [formData](./others/form-data.md): Conveniently binds and retrieves form data.
- [tag](./others/tag.md): Retrieves the tag name of the target.
- [index](./others/index.md): Retrieves the position of the target element within its parent element.
- [is](./others/is.md): Checks whether the target element matches a CSS selector expression.
- [refresh](./others/refresh.md): Actively refreshes the component's interface.
- [PATH](./others/path.md): Retrieves the registration file address of a component or page.
- [extend](./others/extend.md): Extends the data or methods of an instance; extends the data or methods of the underlying ofa.js.
- [Instance Data Features](./others/stanz.md): Introduces the characteristics of sub-object data in instance data and how to listen for changes in data.