# formData

`formData` 方法用於生成與表單元素綁定的對象數據，使得處理表單元素更加簡單和高效。這個方法會生成一個對象，包含目標元素內所有表單元素的值，該對象會實時反映表單元素的改動。

在下面的示例中，我們演示了如何使用 `formData` 方法生成與表單元素綁定的對象數據：

<html-viewer>

```html
<!-- 將 ofa.js 引入項目 -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<form id="myForm">
  <input type="text" name="username" value="John Doe" />
  <div>
    sex:
    <label>
      man
      <input type="radio" name="sex" value="man" />
    </label>
    <label>
      woman
      <input type="radio" name="sex" value="woman" />
    </label>
  </div>
  <textarea name="message">Hello World!</textarea>
</form>
<br />
<div id="logger"></div>
<script>
  const data = $("#myForm").formData();

  $("#logger").text = data;
  data.watch(() => {
    $("#logger").text = data;
  });
</script>
```

</html-viewer>

在這個示例中，我們創建了一個包含文本輸入框、單選按鈕和文本區域的表單，並使用 `formData` 方法創建了一個對象 `data`，該對象包含了這些表單元素的值。我們還使用 `watch` 方法來監視數據的變化，以及將數據實時顯示在頁面上。當用戶修改表單元素的值時，`data` 對象會相應地更新，使得數據處理變得非常簡單和高效。

## 反向數據綁定

生成的對象數據同樣具有反向的綁定能力，這意味著當你修改對象的屬性時，相關的表單元素值也會自動更新。這在處理表單數據時非常有用，因為你可以輕松地實現雙向數據綁定。

在下面的示例中，我們演示了如何使用 `formData` 方法生成的對象數據，以及如何進行反向數據綁定：

<html-viewer>

```html
<!-- 將 ofa.js 引入項目 -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<form id="myForm">
  <input type="text" name="username" value="John Doe" />
  <div>
    sex:
    <label>
      man
      <input type="radio" name="sex" value="man" />
    </label>
    <label>
      woman
      <input type="radio" name="sex" value="woman" />
    </label>
  </div>
  <textarea name="message">Hello World!</textarea>
</form>
<br />
<div id="logger"></div>
<script>
  const data = $("#myForm").formData();

  setTimeout(()=>{
    data.username = "Yao";
    data.sex = "man";
    data.message = "ofa.js is good!";
  },1000);
</script>
```

</html-viewer>

在這個示例中，我們首先創建了一個包含文本輸入框、單選按鈕和文本區域的表單，然後使用 `formData` 方法生成了一個數據對象 `data`。隨後，通過修改 `data` 對象的屬性，我們實現了反向數據綁定，即表單元素的值會隨著對象屬性的更改而自動更新。這種雙向數據綁定功能使得與表單數據的交互更加便捷。

## 監聽特定的表單

默認情況下，`formData()` 方法會監聽目標元素內的所有 `input`、`select` 和 `textarea` 元素。但如果你只想監聽特定的表單元素，可以通過傳遞 [CSS 選擇器](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors) 來實現。

在下面的示例中，我們演示了如何通過傳遞 CSS 選擇器來監聽特定的表單元素：

<html-viewer>

```html
<!-- 將 ofa.js 引入項目 -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<form id="myForm">
  <input type="text" name="username" value="John Doe" class="use-it" />
  <div>
    sex:
    <label>
      man
      <input type="radio" name="sex" value="man" class="use-it" />
    </label>
    <label>
      woman
      <input type="radio" name="sex" value="woman" class="use-it" />
    </label>
  </div>
  <textarea name="message">這個表單元素沒有被綁定</textarea>
</form>
<br />
<div id="logger"></div>
<script>
  const data = $("#myForm").formData(".use-it");

  $("#logger").text = data;
  data.watch(() => {
    $("#logger").text = data;
  });
</script>
```

</html-viewer>

在此示例中，我們只希望監聽具有 `class` 為 "use-it" 的表單元素，因此我們傳遞了 `".use-it"` 作為參數給 `formData()` 方法。這樣，只有帶有該類名的表單元素會被監聽和包括在生成的數據對象中。這對於選擇性地監聽表單元素非常有用，以便更精確地管理你的表單數據。

## 自定義表單

自定義表單組件的使用非常簡單，只需要為自定義組件添加一個 **value 屬性** 並設置 **name 特性**。

在下面的示例中，我們創建了一個名為 "custom-input" 的自定義表單組件。這個組件是一個可編輯的文本框，當文本發生變化時，它會實時更新其 `value` 屬性。

<comp-viewer comp-name="custom-input">

```
<div id="myForm">
  <input type="text" name="username" value="John Doe" />
  <custom-input name="message"></custom-input>
  <div id="logger"></div>
</div>
<script>
  const data = $("#myForm").formData("input,custom-input");
  $("#logger").text = data;
  data.watch(() => {
    $("#logger").text = data;
  });
</script>
```

```html
<template component>
  <style>
    :host{
      display: block;
    }
    .editor {
      display: inline-block;
      min-width: 200px;
      line-height: 30px;
      height: 30px;
      border: #aaa solid 1px;
      border-radius: 4px;
      padding: 4px;
      font-size: 14px;
    }
  </style>
  <div
    class="editor"
    contenteditable="plaintext-only"
    :text="value"
    on:input="changeText"
  ></div>
  <script>
    export default {
      tag:"custom-input",
      attrs: {
        name: "",
      },
      data: {
        value: "Default txt",
      },
      proto: {
        changeText(e) {
          this.value = $(e.target).text;
        },
      },
    };
  </script>
</template>
```

</comp-viewer>

在你使用自定義表單組件時，你只需將它添加到你的表單中，並設置所需的 `name` 屬性：

```html
<div id="myForm">
  <input type="text" name="username" value="John Doe" />
  <custom-input name="message"></custom-input>
  <div id="logger"></div>
</div>
<script>
  const data = $("#myForm").formData("input,custom-input");
  $("#logger").text = data;
  data.watch(() => {
    $("#logger").text = data;
  });
</script>
```

在上述示例中，我們通過添加 `<custom-input>` 元素並設置 `name` 屬性來使用自定義表單組件。隨後，我們使用 `formData()` 方法監聽輸入元素和自定義組件的值，以便實時獲取和處理表單數據。這種方法可以讓你非常方便地擴展你的表單，以包括自定義的表單組件，從而滿足你的特定需求。

## 在組件或頁面內使用表單數據

有時，你可能需要在組件或頁面內使用表單數據，並且需要在 `ready` 周期生命周期時生成數據並將其綁定到組件上。

在下面的示例中，我們演示了如何在自定義組件內使用表單數據。這個組件包含一個文本輸入框，當你輸入內容時，它會實時更新日誌中的數據。

<comp-viewer comp-name="custom-input">

```html
<template component>
  <style>
    :host{
      display: block;
    }
  </style>
  <input type="text" name="username" value="John Doe" />
  <div>{{logtext}}</div>
  <script>
    export default {
      tag:"custom-input",
      data: {
        fdata:{},
        logtext: ""
      },
      watch:{
        fdata(data){
          if(data){
            this.logtext = JSON.stringify(data);
          }
        }
      },
      ready(){
        this.fdata = this.shadow.formData();
      }
    };
  </script>
</template>
```

</comp-viewer>

通過 `ready` 周期生命周期，在組件準備就緒後，我們使用 `this.shadow.formData()` 方法生成了表單數據對象 `fdata`。然後，我們使用 `watch` 監聽 `fdata` 的變化，當數據發生變化時，將其轉化為 JSON 字符串並更新 `logtext`，以實現實時顯示表單數據的功能。