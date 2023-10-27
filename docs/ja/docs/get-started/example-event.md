# 事件の例

## クリックイベント（click）

このケースでは、ボタンがクリックされると、メッセージがコンソールに出力されます。

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


## 鼠标移入事件（mouseenter）

このケースでは、テキスト領域にマウスを置くと、テキストの色が赤色に変わります。

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


## 键盘按键事件（keydown）

この場合、入力フィールドで任意のキーを押すと、コンソールに押されたキーの情報が表示されます。

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

これらの例は、クリックイベント、マウスオーバーイベント、キーボードキーイベントの使用方法を示しています。これらのコードをHTMLファイルにコピーして、ブラウザで実行して効果を確認してみてください。

すべての利用可能なイベントについては、「[Web Events](https://developer.mozilla.org/en-US/docs/Web/Events)」を参照して、完全なイベントリストを確認してください。