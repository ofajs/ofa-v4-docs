# Getting Elements and Events

This section aims to enhance understanding of the previous chapter, including selecting elements and binding events.

## Selecting Elements

In previous chapters, we have learned how to retrieve a specific element from the global scope using the $ symbol. Now, we will introduce other methods for selecting elements.

### Finding an Element Within Another Element

#### Using the `$("xxx").$('xxxx')` syntax

`$("xxx").$('xxxx')` is a way to select a parent element first, then find the child element that matches the given condition within it. Here, `$("xxx")` selects a parent element, and `$('xxxx')` searches for the child element within that parent element.

#### Example

```html
<div class="parent">
  <p>Hello World</p>
  <div class="child">
    <span>This is a child element</span>
  </div>
</div>
<script>
  // Select parent element and find child element
  const parentElement = $(".parent");
  const childElement = parentElement.$(".child");

  // Modify the text content of the child element
  childElement.text = "Modified child element";
</script>
```

In the example above, firstly the parent element with the class `parent` is selected using `$(".parent")`, and then the child element with the class `child` is found within that parent element using `$(".child")`. Then the text content of the child element is modified to "Modified child element".

### Using the `$('xxx xxxx')` approach

`$('xxx xxxx')` searches for elements that match the second selector condition in the global scope, and then finds elements that match the first selector condition within those elements. This allows for directly finding the child element that meets the conditions.

#### Example

```html
<div class="parent">
  <p>Hello World</p>
  <div class="child">
    <span>This is a child element</span>
  </div>
</div>
<script>
  // Directly find the child element that meets the conditions
  const childElement = $('div .child');

  // Modify the text content of the child element
  childElement.text = "Modified child element";
</script>
```

In the example above, the child element with the class `child` is directly found using `$('div .child')`, and then the text content of the child element is modified to "Modified child element".

### Select multiple elements

#### Use `$.all('xxx')` to find global elements

The `$.all('xxx')` method is used to find all elements in the page that match the selector condition and return them as a collection of elements. This allows you to select multiple elements in the page for batch operations.

#### Example

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

In the above example, using `$.all("p")` finds all the `p` tag elements on the page and performs batch operations on them by modifying their text content to "Modified Paragraph 1", "Modified Paragraph 2", and "Modified Paragraph 3".

### Find all elements that meet the condition within an element

In addition to finding elements globally, you can also find all child elements that meet the condition from a specific element using the following method: `$('xxx').all('xxxx')`.

#### Example

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

In the example above, first use `$(".container")` to find elements with the class `container`, then use `.all(".item")` to find all child elements with the class `item` within that container, and perform batch operations on them, modifying the text content to "Modified Item 1", "Modified Item 2", and "Modified Item 3".

## Events

We have already discussed the usage of `on` to bind events. Here are a few other methods related to events;

### Documentation for the use of the `off` method

The `off` method is used to remove event handlers bound using the `on` method. When an event handler is no longer needed, it can be removed from the element using the `off` method to avoid duplicate execution or memory leaks.

#### Syntax

```javascript
$(selector).off(eventName, eventHandler);
```

- `selector`: The element to remove the event handler from.
- `eventName`: The event name to remove.
- `eventHandler`: The event handler to remove.

#### Example

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

In the example above, when the button is clicked, a dialog box displaying "Button clicked!" will appear. However, after 5 seconds, the click event handler is removed using the `off` method, so clicking the button again will not trigger the dialog box.

### Documentation for the use of the `one` method

The `one` method is used to bind event handlers that will only execute once when the event is triggered for the first time. After executing once, the event handler will be automatically removed, preventing duplicate triggers.

#### Syntax

```javascript
$(selector).one(eventName, eventHandler);
```

- `selector`: Selects the element to bind the event handler to.
- `eventName`: The name of the event to bind.
- `eventHandler`: The event handler to execute.

#### Example

```html
<button id="btn">Click Me Once</button>
<script>
  // Bind the click event handler, but only execute it once
  $("#btn").one("click", () => {
    alert("Button clicked once!");
  });
</script>
```

In the above example, when the button is clicked, a dialog box with the message "Button clicked once!" will appear. However, after the first click, the event handler will be removed, so subsequent clicks will not trigger the dialog box.

### Documentation for the `emit` method

The `emit` method is used to manually trigger a specific event bound to an element. It allows for executing event handler functions without performing any actual operations.

#### Syntax

```javascript
$(selector).emit(eventName);
```

- `selector`: Selects the element to trigger the event on.
- `eventName`: The name of the event to trigger.

#### Example

```html
<button id="btn">Click Me</button>
<script>
  // Bind the click event handler
  $("#btn").on("click", () => {
    alert("Button clicked!");
  });

  // Trigger the click event on the button using the emit method
  $("#btn").emit("click");
</script>
```

In the above example, the `emit` method is used to manually trigger the click event on the button. This will result in a dialog box with the message "Button clicked!" even though the button was not actually clicked.

Note: The `emit` method does not simulate a mouse click or any other actual event. It only directly invokes the bound event handler functions. Therefore, if you want to trigger the execution of an event in specific circumstances, you can use the `emit` method.

When you bind an event, sometimes you may want to stop the event from further propagation (bubbling) or cancel the default behavior of the event. Below we will explain how to stop bubbling and cancel default events after the event is triggered.

### Stop Event Bubbling
Event bubbling refers to when an event on an element is triggered, it will bubble up along the DOM tree, triggering the same type of event on parent elements one by one. If you want to stop it from bubbling further after handling the event on a specific element, you can use the `event.stopPropagation()` method.

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
      event.stopPropagation(); // Stop event bubbling
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

In the above example, when you click the "Click Me" button, it will display "Button Clicked!" but will not trigger "Inner Div Clicked!" and "Outer Div Clicked!". This is because we called `event.stopPropagation()` in the button's click event handler, stopping the event from further propagation.

### Prevent Default Event

Some events on elements have default behaviors when triggered. For example, clicking a submit button will submit the form, clicking a link will redirect to the link's address, and so on. If you want to prevent the default behavior of an event, you can use the `event.preventDefault()` method.

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
      event.preventDefault(); // Prevent the default behavior of the event
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

In the above example, when you click the submit button "Submit", it will display "Hello, {name}! Form submission prevented.", but it will not trigger the alert "Form Submitted!". This is because we call `event.preventDefault()` in the click event handler of the submit button to prevent the default submission behavior of the form.

