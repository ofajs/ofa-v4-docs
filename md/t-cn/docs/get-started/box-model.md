# 盒模型

在前端開發中，經常會用到一些表示元素尺寸的屬性。這些屬性包括 width、height、clientWidth、clientHeight、offsetWidth、offsetHeight、outerWidth 和 outerHeight。了解它們的含義和用法對於開發響應式和動態布局非常重要。下面讓我們一一解釋它們，並通過一個示例來演示。

- width：表示元素的內容區域的寬度，不包括內邊距、邊框和外邊距。
- height：表示元素的內容區域的高度，不包括內邊距、邊框和外邊距。
- clientWidth：表示元素的可見內容區域的寬度，包括內邊距，但不包括邊框和外邊距。
- clientHeight：表示元素的可見內容區域的高度，包括內邊距，但不包括邊框和外邊距。
- offsetWidth：表示元素的整體寬度，包括內容區域、內邊距、邊框和外邊距。
- offsetHeight：表示元素的整體高度，包括內容區域、內邊距、邊框和外邊距。
- outerWidth：表示元素的整體寬度，包括內容區域、內邊距、邊框、外邊距，但不包括滾動條的寬度。
- outerHeight：表示元素的整體高度，包括內容區域、內邊距、邊框、外邊距，但不包括滾動條的高度。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Element box model Demo</title>
  <style>
    body {
      margin: 0;
      padding: 0;
    }
    #box {
      width: 200px;
      height: 150px;
      background-color: #f0f0f0;
      border: 2px solid #333;
      padding: 20px;
      margin: 30px;
    }
  </style>
  <script src="../ofa.js"></script>
</head>
<body>
  <div id="box">I am a div element.</div>

  <script>
    const box = $('#box');

    console.log(`width: ${box.width}px`); // => width: 200px
    console.log(`height: ${box.height}px`); // => height: 150px
    console.log(`clientWidth: ${box.clientWidth}px`); // => clientWidth: 240px
    console.log(`clientHeight: ${box.clientHeight}px`); // => clientHeight: 190px
    console.log(`offsetWidth: ${box.offsetWidth}px`); // => offsetWidth: 244px
    console.log(`offsetHeight: ${box.offsetHeight}px`); // => offsetHeight: 194px
    console.log(`outerWidth: ${box.outerWidth}px`); // => outerWidth: 304px
    console.log(`outerHeight: ${box.outerHeight}px`); // => outerHeight: 254px
  </script>
</body>
</html>

```

