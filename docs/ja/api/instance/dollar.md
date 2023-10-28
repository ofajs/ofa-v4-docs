# $

`$`メソッドは`ofa.js`の中心的な関数で、DOM要素のインスタンスを操作するために使用されます。以下では、`$`の主な役割について紹介します。

## 要素のインスタンスを取得する

メソッドを使うと、[cssセレクタ](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors)にマッチするページ上の要素の最初のインスタンスを取得し、それを操作することができます。 以下はその例です：

<html-viewer>

```
<!-- ofa.js プロジェクトにインポートする -->
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

上記の例では、`$`記号を使用して、idが「target1」の要素インスタンスを選択し、`text`属性を設定してそのテキスト内容を変更しました。

## 子要素の検索の例

インスタンスも `$` メソッドを持っており、インスタンス上の `$` メソッドを使用して、要素インスタンスの最初の条件に一致する子要素のインスタンスを取得できます。

<html-viewer>

```
<!-- ofa.js プロジェクトにインポートする -->
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

## 元素インスタンスの特性

元素インスタンスを直接他の場所に挿入しないでください。この操作は元の要素に影響を与える可能性があります。コピーを作成する必要がある場合は、[clone](./clone.md)メソッドを使用してください。

<html-viewer>

```
<!-- ofa.js プロジェクトにインポートする -->
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

## 影子ノードの内部にある子要素を取得する。

[shadow](./shadow.md)プロパティを使用してインスタンスを取得し、`$`メソッドを使用して必要な要素を取得できます。

```javascript
$('my-component').shadow.$("selector").method(xxx)
```
## 直接インスタンス化要素

あなたは以下の方法で、ネイティブ要素を`$`インスタンスオブジェクトとして初期化することができます。

```javascript
const ele = document.createElement('div');
const $ele = $(ele);
```

```javascript
const ele = document.querySelector('#target');
const $ele = $(ele);
```

このように、既存のHTML要素を `$` インスタンスに変換し、`$` が提供する機能を使用して操作や処理を行うことができます。

## 元素インスタンスの生成

新たな要素インスタンスを作成し、ページに追加するために、`$` は既存の要素インスタンスを取得する以外にも使用することができます。

### 文字列から生成

`$` 関数を使用して、文字列から新しい要素インスタンスを作成することができます。以下のようになります：

<html-viewer>

```
<!-- ofa.js プロジェクトにインポートする -->
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

この例では、指定されたスタイルとテキストの内容を持つ新しい要素インスタンスを作成し、それを既存の要素インスタンスである "target1" のidを持つ要素に追加するために `$` 関数を使用しました。

### オブジェクトを通して生成される

あなたは`$`関数を使用して、オブジェクトを介して新しい要素のインスタンスを生成することもできます。以下はその例です。

<html-viewer>

```
<!-- ofa.js プロジェクトにインポートする -->
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

この例では、オブジェクトの形式で`$`関数を使用して新しい要素インスタンスを定義しました。これにはタグのタイプ、テキストの内容、スタイルの属性が含まれており、それを既存の要素インスタンスである`id`が "target1"であるものに追加しています。