# 組件的注冊參數詳解

在 ofa.js 中，你可以在組件模塊中定義一些特定的注冊參數，以便更靈活地配置組件。下面詳細說明了每個注冊參數，並附帶了相應的示例演示。

## 基礎參數

基礎參數是注冊組件的最基本配置，包含以下幾個屬性：

### 組件標識

組件模塊必須帶有 `export const type = $.COMP`，用於標識該模塊為組件模塊。

示例：

```javascript
// button-component.mjs
export const type = $.COMP;
```

### tag

`tag` 代表注冊的組件名。當沒有定義 `tag` 屬性時，注冊的組件名與文件名保持一致。

示例：

```javascript
// button-component.mjs
export const type = $.COMP;
export const tag = "my-button"; // 將組件名注冊為 'my-button'
```

### temp

`temp` 是字符串類型的屬性，用於定義組件模板的地址。當沒有定義 `temp` 時，默認載入和當前模塊同目錄下與組件同名的 HTML 文件。

示例：

```javascript
// button-component.mjs
export const type = $.COMP;
export const temp = "./my-button-template.html"; // 指定組件模板的地址為 './my-button-template.html'
```

### data

`data` 是對象類型屬性，用於生成組件後，默認添加的自定義數據。

示例：

```javascript
// button-component.mjs
export const type = $.COMP;
export const data = {
  count: 0,
};
```

### attrs

`attrs` 是對象類型屬性，也屬於 `data`，但是這個數據會反映到 element 的 attributes 上，attributes 上的改動也會動態改動到組件的 `data` 上。當出現大寫的 key 時，反應到組件 attribute 會變成 `-` 駝峰的命名。

示例：

```javascript
// button-component.mjs
export const type = $.COMP;
export const attrs = {
  buttonText: "Click Me",
};
```

### proto

在組件的注冊參數中，你可以添加一個 `proto` 對象，用於定義需要添加到組件原型上的方法。這樣，在創建組件的實例時，這些屬性和方法就會被添加到實例的原型上，從而所有實例都可以訪問和共享這些方法。

```javascript
// MyComponent.js
export const type = $.COMP;

export const data = {
  count: 0,
};

export const proto = {
  sayHello() {
    alert('Hello Count:'+ this.count);
  },
};
```

### watch

`watch` 是對象類型屬性，用於監聽 `data` 變化的監聽函數放在這裏。注冊成功後，監聽的值會被立刻執行一次。

- `watch` 注冊的函數在單次線程改動中，只會被觸發一次。因此，在一次線程中，即使多次修改這個監聽的值，也只會被觸發一次。
- 第一個參數為當前值。
- 第二個參數是對象，會帶有 `watchers` 數據集，一般情況下 `watchers` 上只會有一個對象，可以從這個對象上獲取到 `oldValue`。當單次線程的這個被監聽的值被改動過多次，這個數據集會記錄多次的變化。

示例：

```javascript
// button-component.mjs
export const type = $.COMP;
export const data = {
  count: 0,
};
export const watch = {
  count(newValue, { watchers }) {
    let oldValue;
    if (watchers) {
      oldValue = watchers[0].oldValue;
    }
    console.log(`count changed from ${oldValue} to ${newValue}`);
  },
};
```

## 示例代碼

以下為一個完整的示例代碼，包括基礎參數的定義和組件模板。

```javascript
// button-component.mjs
export const type = $.COMP;
export const tag = "my-button";
export const temp = "./my-button-template.html";

export const attrs = {
  buttonText: "Click Me",
};

export const data = {
  count: 0,
};

export const watch = {
  count(newValue, { watchers }) {
    let oldValue;
    if (watchers) {
      oldValue = watchers[0].oldValue;
    }
    console.log(`count changed from ${oldValue} to ${newValue}`);
  },
};

export const proto = {
  sayHello() {
    alert("Hello Count:" + this.count);
  },
};
```

```html
<!-- my-button-template.html -->
<style>
  .shadow-button {
    background-color: #6b47fb;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 10px;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
</style>

<!-- 使用模板渲染語法，將組件數據渲染成文本 -->
<button class="shadow-button">{{buttonText}} - count:{{count}}</button>
```

```html
<!-- demo.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>my-button</title>
    <script src="../ofa.js"></script>
    <l-m src="./button-component.mjs"></l-m>
  </head>
  <body>
    <my-button button-text="My Button"></my-button>
    <script>
      $("my-button").on("click", () => {
        $("my-button").count++;
      });

      setTimeout(() => {
        $("my-button").sayHello();
      }, 1000);
    </script>
  </body>
</html>

```

### default

你還可以使用異步函數來定義 `default` 數據，以便動態地返回組件的注冊參數。

函數的 `function` 會帶來一個對象，包含

 `load`、`url` 和 `query`：

- `load` 方法是異步加載函數，使用方法和異步 `import` 加載一致，可以通過 `const data = await load(xxx)` 加載異步模塊。
- 通過 `load` 加載的模塊，會有和 `load-module` 加載一樣的效果。`load` 方法相當於 `load-module` 組件的函數版，具體使用方法可以查閱[https://github.com/kirakiray/drill.js](https://github.com/kirakiray/drill.js)的文檔。
- `url` 是當前模塊的文件名。
- `query` 是加載這個模塊時的 URL 參數轉成的對象。

以下是使用 `default` 的示例：

```javascript
// button-component.mjs
export const type = $.COMP; // 這個必須優先定義，不能作為動態參數
export const tag = "my-button";
export const temp = "./my-button-template.html";

export default async function ({ load, url, query }) {
  console.log("url:", url); // 輸出當前模塊的文件名
  console.log("query:", query); // 輸出當前模塊的 URL 參數轉成的對象

  const asyncData = await load("./async-data.mjs"); // 使用 load 異步加載模塊
  console.log("asyncData:", asyncData); // 輸出異步加載的模塊數據

  return {
    data: {
      count: 0,
    },
    attrs: {
      buttonText: "Click Me",
    },
    watch: {
      count(newValue, { watchers }) {
        let oldValue;
        if (watchers) {
          oldValue = watchers[0].oldValue;
        }
        console.log(`count changed from ${oldValue} to ${newValue}`);
      },
    },
    proto: {
      sayHello() {
        alert("Hello Count:" + this.count);
      },
    },
  };
}
```

在這個示例中，我們演示了如何使用 ofa.js 的注冊參數來定制化組件的行為。通過合理地配置這些參數，你可以更好地適應不同的組件需求，實現更靈活的組件開發。

寫一下 組件的注冊參數 的 proto 使用文檔

