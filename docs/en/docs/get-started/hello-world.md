# First Case

Here is an example, when the button is clicked, change the text to "Hello World":

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

When you click the button, the bold "Hello World" text will be displayed.

Now, let's explain the basic concepts in detail.

## Selectors

After importing `ofa.js`, the `$` symbol will be registered in the global scope. Use `$('xxx')` to select the **first** element that matches the specified condition, where `xxx` is a standard [CSS Selector](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors). You can click on the link to view the specific selector syntax.

Following is an example: 

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

In the example above, after one second of opening the page, the text content of the **p tag**, **#desk**, and **.logger** will be changed respectively.

## Event Binding

Once you have successfully selected an element, you can bind events to it. As mentioned in the previous "Hello World" example, we bind a click event to the element with the ID "btn". When the button is clicked, the bound function will be executed.

You can click to jump and view [example events](./example-event.md) section to learn some examples of event binding.

Refer to [Web Events](https://developer.mozilla.org/en-US/docs/Web/Events) for a complete list of all available events.

## Attributes

In the above two examples, we have demonstrated the use of the `html` and `text` attributes.

You can also get the content of an element through the `html` or `text` attributes, as shown below:

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

In this example, we assign the HTML content within the #t1 element to the #t2 and #t3 elements.
