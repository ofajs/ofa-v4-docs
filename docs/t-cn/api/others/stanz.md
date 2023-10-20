# 實例數據特征

通過 `$` 獲取或創建的實例對象，擁有完整 [stanz](https://github.com/kirakiray/stanz) 數據特性，因為 `$` 實例是從 [stanz](https://github.com/kirakiray/stanz) 繼承而來的。這意味著你可以利用 `stanz` 提供的數據操作方法和特性來操作和監聽實例對象的數據。

> 以下示例使用常規元素，因為自定義組件通常自帶已注冊的數據，而常規元素通常只包含標簽信息，因此更適合用於演示。

## watch

實例可以通過 `watch` 方法監聽值的變動；即使改動了對象的子對象的值，也能在對象的 `watch` 方法中監聽到變動。

下面是一個示例，演示如何使用 `$` 實例和 `watch` 方法：

<html-viewer>

```
<!-- 將 ofa.js 引入項目 -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div id="target"></div>
<br />
<div id="logger" style="border: #aaa solid 1px; padding: 8px"></div>

<script>
  const target = $("#target");
  $("#logger").text = target;
  target.watch(() => {
    $("#logger").text = target;
  });

  setTimeout(() => {
    target.aaa = "I am aaa";
  }, 600);
  setTimeout(() => {
    target.bbb = {
      child: {
        val: "I am bbb child val",
      },
    };
  }, 1200);
  setTimeout(() => {
    target.bbb.child.val = "change bbb child val";
  }, 1800);
</script>
```

</html-viewer>

在這個示例中，我們首先創建了一個 `$` 實例對象 `target`，然後使用 `watch` 方法來監聽它的變動。即使我們改動了對象的子對象的值，例如 `target.bbb.child.val` 的值，在 `watch` 方法中都能監聽到這些變動並更新 `logger` 元素的內容。這展示了 `$` 實例對象的強大特性，使你能夠輕松監控對象的變化。

## watchTick

`watchTick` 和 `watch` 方法功能類似，但 `watchTick` 內部有節流操作，它在單個線程下執行一次，因此在某些性能要求更高的場景下可以更有效地監聽數據變動。

下面是一個示例，演示如何使用 `$` 實例的 `watchTick` 方法：

<html-viewer>

```
<!-- 將 ofa.js 引入項目 -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div id="target"></div>
<br />
<div id="logger1" style="border: blue solid 1px; margin: 8px"></div>
<div id="logger2" style="border: red solid 1px; margin: 8px"></div>

<script>
  const target = $("#target");
  let count1 = 0;
  target.watch(() => {
    count1++;
    $("#logger1").text = 'watch 運行次數：' + count1;
  });

  let count2 = 0;
  target.watchTick(()=>{
    count2++;
    $("#logger2").text = 'watchTick 運行次數：' + count2;
  });

  setTimeout(() => {
    target.aaa = "I am aaa";
    target.bbb = "I am bbb";
    target.ccc = "I am ccc";
  }, 1000);
</script>
```

</html-viewer>

在這個示例中，我們首先創建了一個 `$` 實例對象 `target`。然後，我們使用 `watch` 方法和 `watchTick` 方法來監聽對象的變動。`watch` 方法會在數據變動時立即運行，而 `watchTick` 方法在單個線程下執行一次，因此能夠限制監聽操作的頻率。你可以根據你的需求選擇使用 `watch` 或 `watchTick` 方法來監聽數據的變化。

## unwatch

`unwatch` 方法用於取消對數據的監聽，可以撤銷之前注冊的 `watch` 或 `watchTick` 監聽。

下面是一個示例，演示如何使用 `$` 實例的 `unwatch` 方法：

<html-viewer>

```
<!-- 將 ofa.js 引入項目 -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div id="target"></div>
<br />
<div id="logger1" style="border: blue solid 1px; margin: 8px"></div>
<div id="logger2" style="border: red solid 1px; margin: 8px"></div>

<script>
  const target = $("#target");
  const tid1 = target.watch(() => {
    $("#logger1").text = JSON.stringify(target);
  });

  const tid2 = target.watchTick(()=>{
    $("#logger2").text = JSON.stringify(target);
  });

  setTimeout(() => {
    target.aaa = "I am aaa";
    // 撤銷監聽
    target.unwatch(tid1);
    target.unwatch(tid2);
  }, 500);
  setTimeout(() => {
    target.bbb = "I am aaa"; // 不會觸發上面注冊的函數，因為已經被撤銷監聽
  }, 1000);
</script>
```

</html-viewer>

在這個示例中，我們首先創建了一個 `$` 實例對象 `target`，然後使用 `watch` 方法和 `watchTick` 方法分別注冊了兩個監聽。之後，通過 `unwatch` 方法傳遞之前保存的監聽返回值 `tid1` 和 `tid2` 來撤銷這兩個監聽。這意味著在第一個 `setTimeout` 中的屬性改變不會觸發任何監聽，因為監聽已被撤銷。

## 不被監聽的值

在 `$` 實例中，使用下劃線 `_` 開頭的屬性名表示這些值不會被 `watch` 或 `watchTick` 方法監聽。這對於一些臨時或私有的屬性非常有用，你可以在不觸發監聽的情況下隨意更改它們。

下面是一個示例，演示了如何使用下劃線開頭的屬性值來避免被監聽：

<html-viewer>

```
<!-- 將 ofa.js 引入項目 -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div id="target"></div>
<br />
<div id="logger" style="border: #aaa solid 1px; padding: 8px"></div>

<script>
  const target = $("#target");
  $("#logger").text = target;

  // 使用 watch 方法監聽屬性值變動
  target.watch(() => {
    $("#logger").text = target;
  });

  setTimeout(() => {
    // 這個屬性值不會觸發監聽
    target._aaa = "I am aaa";
  }, 600);

  setTimeout(() => {
    // 即使改變了 _aaa 屬性值，仍然不會觸發監聽
    target._aaa = "change aaa";
  }, 1200);
</script>
```

</html-viewer>

在這個示例中，我們創建了一個 `$` 實例對象 `target`，然後使用 `watch` 方法監聽屬性值的變動。在 `setTimeout` 中，我們嘗試更改 `_aaa` 屬性值，但這個更改不會觸發監聽。這對於需要在不觸發監聽的情況下更新屬性值的情況非常有用。

## 基本特征

設置在實例上的對象數據將被轉換為 Stanz 實例，這種 Stanz 實例允許進行監聽。

```javascript
const obj = {
  val: "I am obj"
};

$("#target").obj = obj;
console.log($("#target").obj.val === obj.val); // => true
console.log($("#target").obj === obj); // => false
```

我們還可以使用 `$.stanz` 來創建一個沒有與實例綁定的 Stanz 數據。

```javascript
const data = $.stanz({
  val: "I am val"
});

data.watch(() => {
  console.log(data.val); // => change val
});

data.val = "change val";
```

這些示例展示了將對象數據設置為 Stanz 實例以進行監聽的基本特征。

更多完整的特性請查閱 [stanz](https://github.com/kirakiray/stanz)；