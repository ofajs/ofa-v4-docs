# Event Example

## Click Event

In this case, when the button is clicked, a message will be output to the console.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Example of a click event</title>
    <script src="../ofa.js"></script>
  </head>
  <body>
    <button id="btn">Open the console and click on me</button>
    <script>
      $("#btn").on("click", () => {
        console.log("The button was clicked!");
      });
    </script>
  </body>
</html>
```


Mouseenter event

In this case, when the mouse enters the text area, the text color will change to red.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Mouseover event example</title>
    <script src="../ofa.js"></script>
    <style>
      #text-area {
        font-size: 18px;
        color: black;
      }
    </style>
  </head>
  <body>
    <div id="text-area">Hover over here.</div>
    <script>
      $("#text-area").on("mouseenter", () => {
        $("#text-area").css.color = 'red';
      });

      $("#text-area").on("mouseleave", () => {
        $("#text-area").css.color = 'black';
      });
    </script>
  </body>
</html>
```


## Keyboard Key Events (keydown)

In this case, when any key is pressed in the input box, the information of the pressed key will be output to the console.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>keydown</title>
    <script src="../ofa.js"></script>
  </head>
  <body>
    <h3>Viewing printouts after opening the console</h3>
    <input type="text" id="input-box" placeholder="Press any key" />
    <script>
      $("#input-box").on("keydown", (event) => {
        console.log("keydown:", event.key);
      });
    </script>
  </body>
</html>
```

These examples demonstrate the usage of click events, mouse hover events, and keyboard key events. You can try copying these codes into an HTML file and running it in a browser to see the result.

Refer to [Web Events](https://developer.mozilla.org/en-US/docs/Web/Events) for a complete list of all available events.