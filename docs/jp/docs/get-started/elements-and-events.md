# 获取元素和事件相关

このセクションでは、前のセクションの内容を強化するため、要素の選択とイベントバインドについて学びます。

## 选择元素

在之前的章节中，我们已经了解了通过 $ 符号从全局获取某个元素的方法。接下来，我们将介绍其他获取元素的方法。

### 从元素内查找某个元素

#### `$("xxx").$('xxxx')` の方法を使用する

`$("xxx").$('xxxx')` は、まず親要素を選択し、その内部で条件に一致する子要素を検索する方法です。ここで、「$("xxx")」は親要素を選択し、「$('xxxx')」はその親要素内で条件に���致する子要素を検索します。

#### 示例

<html-viewer>

```
<!-- ofa.js をプロジェクトに読み込む -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div class="親">
  <p>Hello World</p>
  <div class="子">
    <span>これは子要素です</span>
  </div>
</div>
<script>
  // 親要素を選択し、子要素を検索する
  const 親要素 = $(".親");
  const 子要素 = 親要素.$(".子");

  // 子要素のテキスト内容を変更する
  子要素.text = "変更さ��た子要素";
</script>
```

</html-viewer>

在上面的示例中，首先通过 `$(".parent")` 选择了具有 `parent` 类的父元素，然后使用 `$(".child")` 在该父元素内查找具有 `child` 类的子元素。然后修改了子元素的文本内容为 "Modified child element"。

### `$('xxx xxxx')` の使用方法

`$('xxx xxxx')` 是通过在全局范围内查找符合第二个选择器条件的元素，然后在这些元素内部查找符合第一个选择器条件的元素。这种方式可以直接一步到位地查找到符合条件的子元素。

#### 示例

<html-viewer>

```
<!-- ofa.js をプロジェクトに読み込む -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div class="parent">
  <p>Hello World</p>
  <div class="child">
    <span>This is a child element</span>
  </div>
</div>
<script>
  // 条件に一致する子要素を直接検索します
  const childElement = $('div .child');

  // 子要素のテキスト内容を変更します
  childElement.text = "変更された子要素";
</script>
```

</html-viewer>

上記の例では、`$('div .child')`という直接的な方法で、`child`クラスを持つ子要素を検索し、子要素のテキスト内容を「変更された子要素」という値に変更しました。

### 複数の要素の選択

#### `$.all('xxx')`を使用してグローバルの要素を検索します

`$.all('xxx')` メソッドは、セレクタ条件を満たすページ内のすべての要素を検索し、それらを要素のコレクションとして返します。これにより、複数の要素を選択して一括操作を行うことができます。

#### 示例

<html-viewer>

```
<!-- ofa.js をプロジェクトに読み込む -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<p>段落1</p>
<p>段落2</p>
<p>段落3</p>
<script>
  // すべての p タグ要素を検索する
  const allParagraphs = $.all("p");

  // すべての p タグ要素のテキストコンテンツを変更する
  allParagraphs.forEach((paragraph, index) => {
    paragraph.text = `変更された段落 ${index + 1}`;
  });
</script>
```

</html-viewer>

上記の例では、`$.all("p")` を使用して、ページ内のすべての `p` タグ要素を検索し、一括で操作しました。テキスト内容を "Modified Paragraph 1"、"Modified Paragraph 2"、および "Modified Paragraph 3" に変更しました。

### 条件を満たす要素を要素内からすべて検索する

要素をグローバル範囲で検索するだけでなく、特定の要素内から条件に合致するすべての子要素を検索することもできます。使用方法は次のようになります：`$('xxx').all('xxxx')`。

#### 示例

<html-viewer>

```
<!-- ofa.js をプロジェクトに読み込む -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div class="container">
  <p>Hello World</p>
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
</div>
<script>
  // 从容器内查找所有带有 "item" 类的子元素
  const container = $(".container");
  const items = container.all(".item");

  // 修改所有子元素的文本内容
  items.forEach((item, index) => {
    item.text = `Modified Item ${index + 1}`;
  });
</script>
```

</html-viewer>

在上面的例子中，首先使用 `$(".container")` 查找具有 `container` 类的元素，然后使用 `.all(".item")` 在该容器内查找所有带有 `item` 类的子元素，然后对它们进行批量操作，将文本内容修改为 "Modified Item 1"、"Modified Item 2" 和 "Modified Item 3"。

## イベント
前面已经讲过 `on` 绑定事件的使用方法，后面介绍几个和事件相关的方法；

### off メソッドの使用ドキュメント

`off` メソッドは、`on` メソッドでバインドされたイベント処理関数を削除するために使用されます。特定のイベントの処理関数が不要になった場合は、`off` メソッドを使ってそ��を要素から削除することで、重複実行やメモリリークを避けることができます。

#### 文法

```javascript
$(selector).off(eventName, eventHandler);
```

- `selector`: イベントハンドラを削除する要素を選択します。
- `eventName`: 削除するイベントの名前です。
- `eventHandler`: 削除するイベントハンドラです。

#### 示例

<html-viewer>

```
<!-- ofa.js をプロジェクトに読み込む -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<button id="btn">Click Me</button>
<script>
  const handleClick = () => {
    alert("Button clicked!");
  };

  // 绑定点击事件处理函数
  $("#btn").on("click", handleClick);

  // 5秒后移除点击事件处理函数
  setTimeout(() => {
    $("#btn").off("click", handleClick);
  }, 5000);
</script>
```
</html-viewer>

上記の例では、ボタンがクリックされると「Button clicked!」というダイアログが表示されます。しかし、5秒後に`off`メソッドでクリックイベントのハンドラが削除されるため、ボタンを再度クリックしてもダイアログが表示されません。

### one メソッドの使用文書

`one` 方法用于绑定事件处理函数，但该处理函数只会在第一次触发事件时执行一次。在执行一次后，事件处理函数会被自动移除，避免重复触发。

#### 文法

```javascript
$(selector).one(eventName, eventHandler);
```

- `selector`: イベント処理関数をバインドする要素を選択します。
- `eventName`: バインドするイベント名です。
- `eventHandler`: 実行するイベント処理関数です。


#### 示例

<html-viewer>

```
<!-- ofa.js をプロジェクトに読み込む -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<button id="btn">Click Me Once</button>
<script>
  // 绑定点击事件处理函数，但只会执行一次
  $("#btn").one("click", () => {
    alert("Button clicked once!");
  });
</script>
```
</html-viewer>

上記の例では、ボタンがクリックされると「Button clicked once!」というダイアログが表示されます。しかし、最初のクリック後、イベントハンドラは削除されるため、���降のボタンクリックではダイアログが表示されません。

### emit メソッドの使用方法のドキュメント

`emit` メソッドは、要素にバインドされている特定のイベントを手動でトリガーするために使用されます。`emit` メソッドを使用すると、実際の操作を行わずにイベント処理���数を実行することができます。

#### 文法

```javascript
$(selector).emit(eventName);
```
 
- `selector`: イベントをトリガーする要素を選択します。
- `eventName`: トリガーするイベントの名前。

#### 示例

```html
<button id="btn">クリックしてください</button>
<script>
  // クリックイベントの処理関数をバインドする
  $("#btn").on("click", () => {
    alert("ボタンがクリックさ���ました！");
  });

  // emitメソッドを使ってボタンのクリックイベントをトリガーする
  $("#btn").emit("click");
</script>
```

;Ignore bugs;
上記の例では、 `emit` メソッドを使用してボタンのクリックイベントを手動でトリガーしました。結果として、ボタンが実際にクリックされていなくても、"Button clicked!"というダイアログが表示されます。

注意：`emit`メソッドを使用してもマウスクリックやその他の実際のイベントはシミュレートされません。その代わり、既にバインドされているイベントハンドラが直接呼び出さ���ます。したがって、特定の状況でイベントをトリガーしたい場合は、`emit`メソッドを使用することができます。


イベントをバインドした後、イベントのさらなる伝播（バブリング）を防止したり、イベントのデフォルトの動作をキャンセルしたりすることがあります。以下に、イベントの���ブリングを禁止したり、デフォルトのイベントをキャンセルしたりする方法を紹介します。

;Ignore bugs;
禁止イベントバブリング

;Ignore bugs;
事件バブリングとは、要素上でイベントがトリガされた時に、DOMツリーを上に向かってバブルアップして、親要素の同じタイプのイベントが順番にトリガされることを指します。特定の要素でイベントを処理した後に、バブリングを続行させないようにするに��、`event.stopPropagation()` メソッドを使用できます。

サンプルコード：

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Stop Event Bubbling</title>
  <script src="../ofa.js"></script>
</head>
<body>
  <div id="outer">
    <div id="inner">
      <button id="btn">Click Me</button>
    </div>
  </div>

  <script>
    const btn = $('#btn');
    const innerDiv = $('#inner');

    btn.on('click', (event) => {
      alert('Button Clicked!');
      event.stopPropagation(); // 阻止事件冒泡
    });

    innerDiv.on('click', () => {
      alert('Inner Div Clicked!');
    });

    $('#outer').on('click', () => {
      alert('Outer Div Clicked!');
    });
  </script>
</body>
</html>
```

上記の例では、「Click Me」というボタンをクリックすると、「Button Clicked!」と表示されますが、「Inner Div Clicked!」および「Outer Div Clicked!」はトリガーされません。これは���ボタンのクリックイベントハンドラで`event.stopPropagation()`を呼び出しているため、イベントのさらなる伝播が阻止されているためです。

### 取消事件的默认行为

一部の要素では、イベントがトリガーされた際にデフォルトの動作があります。たとえば、[送信]ボタンをクリックするとフォームが送信され、リンクをクリックす���とリンク先に移動します。イベントのデフォルトの動作を阻止したい場合は、`event.preventDefault()` メソッドを使用できます。

サンプルコード：

```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>デフォルトのイベントを防止</title>
  <script src="../ofa.js"></script>
</head>
<body>
  <form id="myForm">
    <label for="name">名前：</label>
    <input type="text" id="name" />
    <button id="submitBtn">送信</button>
  </form>

  <script>
    const form = $('#myForm');
    const submitBtn = $('#submitBtn');

    submitBtn.on('click', (event) => {
      event.preventDefault(); // イベントのデフォルト動作をキャンセル
      const name = $('#name').value;
      alert(`こんにちは、${name}さん！ フォームの送信が防止されました。`);
    });

    form.on('submit', () => {
      alert('フォームが送信されました！');
    });
  </script>
</body>
</html>
```

在上面的示例中，当你点击提交按钮 "Submit" 后，它会显示 "Hello, {name}! Form submission prevented."，但不会触发 "Form Submitted!" 的警报。这是因为我们在提交按钮的点击事件处理程序中调用了 `event.preventDefault()`，阻止了表单的提交默认行为。