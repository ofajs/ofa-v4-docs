# $

`$` メソッドは `ofa.js` 内のコア関数であり、DOM 要素のインスタンスを操作するために使用されます。以下では、`$` の主な役割について説明します。

## 获取元素实例

`$`メソッドを使用すると、[CSSセレクタ](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors)に一致するページ上の最初の要素インスタンスを取得し、それに操作を行うことができます。以下は例です：

<html-viewer>

```
<!-- ofa.js をプロジェクトに読み込む -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div id="target1">target 1 text</div>

<script>
  setTimeout(()=>{
    $("#target1").text = 'change target 1';
  },500);
</script>
```

</html-viewer>

在上面的示例中，我们使用 `$` 符号选择了具有 `id` 为 "target1" 的元素实例，并通过设置 `text` 属性来修改其文本内容。

## 子要素の検索の例

インスタンスでも `$` メソッドを持っており、インスタンス上の `$` メソッドを使用して、要素インスタンスの最初の条件に一致する子要素インスタンスを取得できます。

<html-viewer>

```
<!-- ofa.js をプロジェクトに読み込む -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div id="target1">
  <h3>target</h3>
  <p>I am target1</p>
</div>

<script>
  const tar = $("#target1");
  tar.$('h3').text = 'change target title';
</script>
```

</html-viewer>

## 要素のインスタンスの特性

请不要将获取的元素实例直接插入到其他地方，这样的操作会导致原来的元素受到影响。如果需要创建一份副本，您可以使用 [clone](./clone.md) 方法。

<html-viewer>

```
<!-- ofa.js をプロジェクトに読み込む -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div id="pos1" style="border:red solid 1px;">
  <h3>position 1</h3>
  <p id="target1" style="color:green">I am target1</p>
</div>

<div id="pos2" style="border:blue solid 1px;margin:8px;">
  <h3>position 2</h3>
</div>

<script>
  setTimeout(()=>{
    const tar = $("#target1");
    $("#pos2").push(tar);
  },500);
</script>
```

</html-viewer>

## 影のノード内のサブ要素を取得する

インスタンスを取得するために[shadow](./shadow.md)属性を使用し、その後`$`メソッドを使用して必要な要素を取得できます;

```javascript
$('my-component').shadow.$("selector").method(xxx)
```
## 要素の直接インスタンス化

以下の方法で、生の要素を `$` インスタンスオブジェクトとして直接初期化することができます：

```javascript
const ele = document.createElement('div');
const $ele = $(ele);
```

```javascript
const ele = document.querySelector('#target');
const $ele = $(ele);
```

このようにして、既存のHTML要素を `$` インスタンスに変換して、`$` の提供する機能で操作や処理を行うことが簡単にできます。

元素のインスタンスを生成する

除了获取现有的元素实例，`$` 还可以用于创建新的元素实例，并将其添加到页面中。

### 通过字符串生成

你可以使用 `$` 函数通过字符串创建新元素实例，如下所示：

<html-viewer>

```
<!-- ofa.js をプロジェクトに読み込む -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div id="target1">
  <b>target1:</b>
</div>

<script>
  const newEl = $(`<div style="color:red">add target 1 text</div>`);
  $('#target1').push(newEl);
</script>
```

</html-viewer>

在这个示例中，我们使用 `$` 函数创建了一个具有指定样式和文本内容的新元素实例，并将其添加到具有 `id` 为 "target1" 的现有元素实例内。

### オブジェクトから生成する

あなたは `$` 関数を使用して、オブジェクトの方法で新しい要素インスタンスを生成することもできます。次のように示されています：

<html-viewer>

```
<!-- ofa.js をプロジェクトに読み込む -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div id="target1">
  <b>target1:</b>
</div>

<script>
  const newEl = $({
    tag: "div",
    text: "add target 1 text",
    css: {
      color: "red"
    }
  });

  $('#target1').push(newEl);
</script>
```

</html-viewer>

この例では、オブジェクトを使用して`$`関数を使用して、新しい要素インスタンスを定義しました。これには、タグの種類、テキストの内容、およびスタイル属性���含まれており、それを既存の要素インスタンスである"id"が "target1"であるものに追加しました。