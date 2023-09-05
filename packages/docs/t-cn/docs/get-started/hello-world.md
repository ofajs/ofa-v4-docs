# 第一個案例

以下是一個案例，點擊按鈕後將文本更改為 "Hello World"：

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

當點擊按鈕後，將會顯示加粗的 "Hello World" 文本。

現在，讓我們詳細解釋一下基礎概念。

## 選擇器

引用了 `ofa.js` 後，`$` 符號將被注冊到全局作用域中。通過 `$('xxx')` 來選擇符合條件的**第一個** 元素，其中 `xxx` 是標準的 [CSS Selector](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors)  內容。你可以點擊鏈接查看具體的選擇器內容。

以下是一個例子：

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

在上面的案例中，打開頁面一秒後，會分別改變 **p標簽** 、**#desk** 和 **.logger**  的文本內容。

## 事件綁定

選擇元素成功後，你可以為元素綁定事件。就像前面提到的 "Hello World" 案例中，我們給 id 為 "btn" 的元素綁定了點擊事件。當點擊按鈕後，綁定的函數會被執行。

你可以點擊跳轉查看 [事件示例](./example-event.md)  章節，了解一些事件綁定的案例；

所有可用的事件，可以參考 [Web Events](https://developer.mozilla.org/en-US/docs/Web/Events) 來了解完整的事件列表。

## 屬性

在上面的兩個案例中，我們分別展示了 `html` 和 `text` 屬性的使用。

你還可以通過 `html` 或 `text` 屬性來獲取元素的內容，如下所示：

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

這個例子中，我們將 #t1 元素內的 HTML 內容賦值給了 #t2 和 #t3 元素。
