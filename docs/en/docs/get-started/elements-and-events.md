# Get Elements and Events Related

This chapter aims to enhance understanding of the previous chapter, including selecting elements and event binding.

## Selecting Elements

In the previous chapters, we have learned how to access a specific element from the global scope using the $ symbol. Next, we will introduce other methods of accessing elements.

### Look for an element within an element

#### Using `$("xxx").$('xxxx')` method

`$("xxx").$('xxxx')` is a way to select a parent element first and then find the child element that meets the condition inside it. In this example, `$("xxx")` selects a parent element, and then uses `$('xxxx')` to find the child element that meets the condition within that parent element.

#### Example

<html-viewer>

```
<!-- Import ofa.js into the project -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div class="parent">
  <p>Hello World</p>
  <div class="child">
    <span>This is a child element</span>
  </div>
</div>
<script>
  // Select the parent element and find the child element
  const parentElement = $(".parent");
  const childElement = parentElement.$(".child");

  // Modify the text content of the child element
  childElement.text = "Modified child element";
</script>
```

</html-viewer>

In the example above, first select the parent element with the `parent` class using `$(".parent")`, and then use `$(".child")` to search for the child element with the `child` class within this parent element. Then modify the text content of the child element to "Modified child element".

### Using `$('xxx xxxx')` method

`$('xxx xxxx')` is used to find elements that match the second selector condition within the global scope, and then search for elements that match the first selector condition within these elements. This approach allows for directly finding the desired child elements in one step.

#### Example

<html-viewer>

```
<!-- Import ofa.js into the project -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div class="parent">
  <p>Hello World</p>
  <div class="child">
    <span>This is a child element</span>
  </div>
</div>
<script>
  // Find the child element that meets the criteria directly
  const childElement = $('div .child');

  // Modify the text content of the child element
  childElement.text = "Modified child element";
</script>
```

</html-viewer>

In the above example, you directly use `$('div .child')` to find the child elements with the `child` class and modify their text content to "Modified child element".

### Selecting Multiple Elements

#### Use `$.all('xxx')` to search for global elements.

The `$.all('xxx')` method is used to find all elements on the page that meet the selector condition and return them as a collection of elements. This allows for batch operations on multiple elements in the page.

#### Example

<html-viewer>

```
<!-- Import ofa.js into the project -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<p>Paragraph 1</p>
<p>Paragraph 2</p>
<p>Paragraph 3</p>
<script>
  // Find all p tag elements
  const allParagraphs = $.all("p");

  // Modify the text content of all p tag elements
  allParagraphs.forEach((paragraph, index) => {
    paragraph.text = `Modified Paragraph ${index + 1}`;
  });
</script>
```

</html-viewer>

In the example above, `$.all("p")` is used to find all the `p` tag elements on the page and perform a batch operation on them, modifying their text content to "Modified Paragraph 1", "Modified Paragraph 2", and "Modified Paragraph 3".

### Finding all elements that meet the conditions within an element

In addition to searching for elements globally, you can also search for all matching child elements within a specific element using the following syntax: `$('xxx').all('xxxx')`.

#### Example

<html-viewer>

```
<!-- Import ofa.js into the project -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div class="container">
  <p>Hello World</p>
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
</div>
<script>
  // Find all child elements with the "item" class from the container
  const container = $(".container");
  const items = container.all(".item");

  // Modify the text content of all child elements
  items.forEach((item, index) => {
    item.text = `Modified Item ${index + 1}`;
  });
</script>
```

</html-viewer>

In the above example, first use `$(".container")` to find elements with the class `container`, then use `.all(".item")` to find all child elements with the class `item` within that container, and perform batch operations on them, modifying their text content to "Modified Item 1", "Modified Item 2", and "Modified Item 3".

## Events

We have already discussed the usage of `on` to bind events. Now let's introduce a few methods related to events.

### Usage documentation for the `off` method

The `off` method is used to remove event handlers that have been bound using the `on` method. When a handler for a certain event is no longer needed, the `off` method can be used to remove it from the element, preventing it from being executed repeatedly or causing memory leaks.

#### Syntax

```javascript
$(selector).off(eventName, eventHandler);
```

- `selector`: Select the element to remove the event handler from.
- `eventName`: The name of the event to be removed.
- `eventHandler`: The event handler to be removed.

#### Example

<html-viewer>

```
<!-- Import ofa.js into the project -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<button id="btn">Click Me</button>
<script>
  const handleClick = () => {
    alert("Button clicked!");
  };

  // Bind click event handler
  $("#btn").on("click", handleClick);

  // Remove click event handler after 5 seconds
  setTimeout(() => {
    $("#btn").off("click", handleClick);
  }, 5000);
</script>
```
</html-viewer>

In the above example, when the button is clicked, a dialog displaying "Button clicked!" will pop up. However, after 5 seconds, the click event handler is removed using the `off` method, so the dialog will not pop up again when the button is clicked.

### Documentation for the use of the one method

`one` method is used to bind event handlers, but this handler will only be executed once when the event is triggered for the first time. After being executed once, the event handler will be automatically removed to avoid repetitive triggering.

#### Syntax

```javascript
$(selector).one(eventName, eventHandler);
```

- `selector`: Element to bind event handler to.
- `eventName`: Event name to bind.
- `eventHandler`: Event handling function to be executed.


#### Example

<html-viewer>

```
<!-- Import ofa.js into the project -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<button id="btn">Click Me Once</button>
<script>
  // Bind a click event handler, but only execute it once
  $("#btn").one("click", () => {
    alert("Button clicked once!");
  });
</script>
```
</html-viewer>

In the above example, when the button is clicked, a dialog box will appear displaying "Button clicked once!". However, after the first click, the event handler will be removed, so subsequent button clicks will not trigger the dialog box.

### Documentation for the emit method

`emit` method is used to manually trigger a specific event bound to an element. By using the `emit` method, we can trigger the execution of event handling functions without performing any actual operations.

#### Syntax

```javascript
$(selector).emit(eventName);
```
 
- `selector`: Select the element to trigger the event.
- `eventName`: The name of the event to trigger.

#### Example

```html
<button id="btn">Click Me</button>
<script>
  // Bind click event handler
  $("#btn").on("click", () => {
    alert("Button clicked!");
  });

  // Trigger the click event of the button using the emit method
  $("#btn").emit("click");
</script>
```

In the example above, the `emit` method is used to manually trigger the button's click event. As a result, a dialog box will appear displaying "Button clicked!" even though the button was not actually clicked.

Note: Using the `emit` method does not simulate mouse clicks or other actual events. It simply directly calls the bound event handling function. Therefore, if you want to trigger the execution of an event under specific circumstances, you can use the `emit` method.


When you bind an event, sometimes you may want to stop the event from further propagation (bubbling) or cancel the default behavior of the event. Below, we will introduce how to prevent event propagation and cancel default events after the event is triggered.

### Stop Event Bubbling

Event bubbling refers to the propagation of an event along the DOM tree when it is triggered on an element, sequentially triggering the same type of event on parent elements. If you want to stop the event from further bubbling after handling it on a specific element, you can use the `event.stopPropagation()` method.

Example code: 

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Stop Event Bubbling</title>
  <script src="../ofa.js"></script>
</head>
<body>
  <div id="outer">
    <div id="inner">
      <button id="btn">Click Me</button>
    </div>
  </div>

  <script>
    const btn = $('#btn');
    const innerDiv = $('#inner');

    btn.on('click', (event) => {
      alert('Button Clicked!');
      event.stopPropagation(); // 阻止事件冒泡
    });

    innerDiv.on('click', () => {
      alert('Inner Div Clicked!');
    });

    $('#outer').on('click', () => {
      alert('Outer Div Clicked!');
    });
  </script>
</body>
</html>
```


In the example above, when you click the button "Click Me", it will display "Button Clicked!" but not trigger "Inner Div Clicked!" and "Outer Div Clicked!". This is because we called `event.stopPropagation()` in the button's click event handler, which prevents the event from further propagation.

### Cancel Default Behavior of an Event

Some events on certain elements have default behaviors when triggered. For example, clicking a submit button will cause the form to be submitted, clicking a link will navigate to the link's address, and so on. If you want to prevent the default behavior of an event, you can use the `event.preventDefault()` method.

Example code: 

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Prevent Default Event</title>
  <script src="../ofa.js"></script>
</head>
<body>
  <form id="myForm">
    <label for="name">Name:</label>
    <input type="text" id="name" />
    <button id="submitBtn">Submit</button>
  </form>

  <script>
    const form = $('#myForm');
    const submitBtn = $('#submitBtn');

    submitBtn.on('click', (event) => {
      event.preventDefault(); // Cancel the default behavior of the event
      const name = $('#name').value;
      alert(`Hello, ${name}! Form submission prevented.`);
    });

    form.on('submit', () => {
      alert('Form Submitted!');
    });
  </script>
</body>
</html>
```

In the example above, when you click the "Submit" button, it will display "Hello, {name}! Form submission prevented.", but it will not trigger the "Form Submitted!" alert. This is because we called `event.preventDefault()` in the event handler for the submit button, preventing the form's default submission behavior.