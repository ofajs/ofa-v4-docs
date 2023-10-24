# `o-page` component

`o-page` is one of the core components in `ofa.js`, representing an independent page or page module. The following are some key properties and methods of `o-page`:

## `src` attribute

`src` attribute is used to specify the specific address of a page module. This is a crucial attribute that specifies the content and behavior of a page, telling the application where to load the content of a specific page from.

```javascript
// Sample code: Get the current page address
// const page = $("o-app").current;
...
ready(){
  // Within the lifecycle of the page module, 'this' refers to the current page module itself;
  const page = this;
}
...
```

## `goto` method

`goto` method is used to navigate from the current page to another page. Unlike the `goto` method of `app`, the `goto` method of `page` can navigate to other pages using relative addresses.

```javascript
// Sample code: Navigate to another page within the current page module
page.goto("./page2.html");
```

## `replace` method

The `replace` method is used to replace the current page with another page. This is similar to the `replace` method of `app`, but it performs the replacement operation within the page.

```javascript
// Example code: Replace the current page with another page within the current page module
page.replace("./new-page.html");
```

## `back` method

The `back` method is used to go back to the previous page. This navigates the user back to the previous page, similar to the browser's back operation.

```javascript
// Sample code: Go back to the previous page
page.back();
```