# 事件示例

## 點擊事件（click）

在這個案例中，當點擊按鈕時，會在控制台輸出一條消息。

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


## 鼠標移入事件（mouseenter）

在這個案例中，當鼠標移入文本區域時，文本顏色會變為紅色。

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


## 鍵盤按鍵事件（keydown）

在這個案例中，當在輸入框內按下任意鍵時，會在控制台輸出按下的鍵的信息。

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

這些示例分別演示了點擊事件、鼠標移入事件和鍵盤按鍵事件的使用。你可以嘗試將這些代碼復制到一個 HTML 文件中，並在瀏覽器中運行，以查看效果。

所有可用的事件，可以參考 [Web Events](https://developer.mozilla.org/en-US/docs/Web/Events) 來了解完整的事件列表。