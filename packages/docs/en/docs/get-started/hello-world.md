# First Case

The following is an example where the text is changed to "Hello World" after clicking the button:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>hello-world</title>
    <script src="../ofa.js"></script>
  </head>
  <body>
    <div id="desk">Please click the button</div>
    <br />
    <button id="btn">I am Button</button>
    <script>
      $("#btn").on("click", () => {
        $("#desk").html = "<b>Hello World</b>";
      });
    </script>
  </body>
</html>
```

After clicking the button, the text "Hello World" will be displayed in bold.

Now, let's explain the basic concepts in detail.

## Selector

After importing `ofa.js`, the `$` symbol will be registered in the global scope. Use `$('xxx')` to select the **first** element that meets the conditions, where `xxx` is a standard [CSS Selector](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors) content. You can click the link to view specific selector contents.

Here is an example:

```html
<p>I am P tag</p>
<div id="desk">I am desk</div>
<div class="logger">I am logger</div>
<script>
    setTimeout(() => {
        $("p").text = "change P tag";
        $("#desk").text = "change #desk";
        $(".logger").text = "change .logger";
    }, 1000);
</script>
```

In the above example, after opening the page for one second, the text content of **p tags**, **#desk**, and **.logger** will be changed respectively.

## Event Binding

After successfully selecting an element, you can bind events to the element. Just like in the "Hello World" example mentioned before, we bound a click event to the element with id "btn". When the button is clicked, the bound function will be executed.

You can click to go to the [Event Examples](./example-event.md) section to learn about some examples of event binding.

For a complete list of available events, you can refer to [Web Events](https://developer.mozilla.org/en-US/docs/Web/Events).

## Properties

In the above two examples, we demonstrated the use of the `html` and `text` properties respectively.

You can also use the `html` or `text` properties to retrieve the content of an element, as shown below:

```html
<div id="t1">
    <span style="color: red">I am text</span>
</div>
<div id="t2"></div>
<br />
<div id="t3"></div>
<br />
<script>
    $("#t2").text = $("#t1").html;
    $("#t3").html = $("#t1").html;
</script>
```

In this example, we assigned the HTML content of the #t1 element to the #t2 and #t3 elements.

