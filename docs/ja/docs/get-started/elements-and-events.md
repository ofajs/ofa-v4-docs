# エレメントとイベントに関連する情報を取得する。

その章では、前の章の内容を理解するために、要素の選択とイベントのバインディングに焦点を当てることを目的としています。

## 選択要素

在之前的章节中，我们已经了解了通过 $ 符号从全局获取某个元素的方法。接下来，我们将介绍其他获取元素的方法。以前の章では、$記号を使用して要素をグローバルから取得する方法を説明しました。次に、他の要素の取得方法について説明します。

### 要素内の要素を検索する方法

#### 使用 `$("xxx").$('xxxx')` の方法を使用します。

`$("xxx").$('xxxx')` は、最初に親要素を選択し、その中で条件に合う子要素を検索する方法です。ここで、`$("xxx")` は親要素を選択し、その後 `$('xxxx')` を使用してその親要素内で条件に合う子要素を検索します。

#### サンプル

<html-viewer>

```
<!-- ofa.js プロジェクトにインポートする -->
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
  // 选择父元素并查找子元素
  const parentElement = $(".parent");
  const childElement = parentElement.$(".child");

  // 修改子元素的文本内容
  childElement.text = "Modified child element";
</script>
```

</html-viewer>

上記の例では、最初に `$(".parent")` を使用して `parent` クラスを持つ親要素を選択し、次にその親要素内で `$(".child")` を使用して `child` クラスを持つ子要素を検索しました。その後、子要素のテキスト内容を "Modified child element" に変更しました。

### 使用 `$('xxx xxxx')` 的方式

`$('xxx xxxx')` は、第二のセレクタ条件に一致する要素をグローバルスコープ内で検索し、これらの要素内で第一のセレクタ条件に一致する要素を検索します。この方法では、条件に一致する子要素を直接的に取得することができます。

#### サンプル

<html-viewer>

```
<!-- ofa.js プロジェクトにインポートする -->
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
  // 直接查找符合条件的子元素
  const childElement = $('div .child');

  // 修改子元素的文本内容
  childElement.text = "Modified child element";
</script>
```

</html-viewer>

上記の例では、 `$('div .child')` を使用して `child` クラスを持つ子要素を検索し、子要素のテキストコンテンツを "Modified child element" に変更しました。

### 複数の要素を選択することができます。

#### 「$.all('xxx')」を使用して、グローバルの要素を検索します。

`$.all('xxx')`メソッドは、セレクタ条件に一致するページ内のすべての要素を検索し、それらを要素のコレクションとして返します。これにより、複数の要素を一括操作することができます。

#### サンプル

<html-viewer>

```
<!-- ofa.js プロジェクトにインポートする -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<p>Paragraph 1</p>
<p>Paragraph 2</p>
<p>Paragraph 3</p>
<script>
  // 查找所有 p 标签元素
  const allParagraphs = $.all("p");

  // 修改所有 p 标签元素的文本内容
  allParagraphs.forEach((paragraph, index) => {
    paragraph.text = `Modified Paragraph ${index + 1}`;
  });
</script>
```

</html-viewer>

上記の例では、`$.all("p")` を使用してページ内のすべての `p` タグ要素を検索し、一括操作を行い、テキスト内容を "Modified Paragraph 1"、"Modified Paragraph 2"、"Modified Paragraph 3" に変更しました。

### 要素内のすべての条件に一致する要素を見つける。

除了可以在全局范围内查找元素，还可以从某个元素内查找所有符合条件的子元素，使用方式为：`$('xxx').all('xxxx')`。

#### サンプル

<html-viewer>

```
<!-- ofa.js プロジェクトにインポートする -->
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

上記の例では、まず `$(".container")` を使用して `container` クラスを持つ要素を検索し、それからそのコンテナ内で `item` クラスを持つすべての子要素を `.all(".item")` で検索し、それらに対してバルク操作を行い、テキストコンテンツを "Modified Item 1"、"Modified Item 2"、およ��� "Modified Item 3" に変更しました。

## 事件

前面已经讲过 `on` メソッドのイベントバインディングの使用方法については既に説明しましたが、ここではイベントに関連するいくつかのメソッドを紹介します。

### オフメソッドの使用ドキュメント

`off` メソッドは、 `on` メソッドでバインドされたイベントハンドラを削除するために使用されます。特定のイベントのハンドラが不要になった場合には、`off` メソッドを使用して要素から削除し、重複実行やメモリリークを防ぐことができます。

#### 语法

```javascript
$(selector).off(eventName, eventHandler);
```

- `selector`: イベントハンドラを削除する要素を選択します。
- `eventName`: 削除するイベントの名前です。
- `eventHandler`: 削除するイベントハンドラです。

#### サンプル

<html-viewer>

```
<!-- ofa.js プロジェクトにインポートする -->
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

ボタンがクリックされたとき、ダイアログボックスに "Button clicked!" と表示されます。しかし、5秒後に `off` メソッドを使用してクリックイベントハンドラが削除されるため、ボタンを再度クリックしてもダイアログボックスが表示されません。

### one 方法の使用文書

`one` メソッドは、イベント処理関数をバインドするためのものですが、この処理関数はイベントが最初にトリガーされたときにのみ実行されます。一度実行されると、イベント処理関数は自動的に削除され、重複したトリガーを回避します。

#### 语法

```javascript
$(selector).one(eventName, eventHandler);
```

- `selector`: イベントハンドラをバインドする要素を選択します。
- `eventName`: バインドするイベントの名称です。
- `eventHandler`: 実行するイベントハンドラです。


#### サンプル

<html-viewer>

```
<!-- ofa.js プロジェクトにインポートする -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<button id="btn">Click Me Once</button>
<script>
  // クリックイベントハンドラをバインドしますが、一度だけ実行されます
  $("#btn").one("click", () => {
    alert("Button clicked once!");
  });
</script>
```
</html-viewer>

上記の例では、ボタンをクリックすると、「ボタンが1回クリックされました！」というダイアログが表示されます。しかし、最初のクリック後にイベントハンドラが削除されるため、後続のボタンクリックではダイアログが表示されません。

### emit メソッドの使用ドキュメント

`emit`メソッドは、要素にバインドされた特定のイベントを手動でトリガーするために使用されます。`emit`メソッドを使用すると、実際の操作を行わずにイベント処理関数を実行することができます。

#### 语法

```javascript
$(selector).emit(eventName);
```
 
- `selector`: イベントをトリガする要素を選択します。
- `eventName`: トリガするイベントの名前。

#### サンプル

```html
<button id="btn">Click Me</button>
<script>
  // 绑定点击事件处理函数
  $("#btn").on("click", () => {
    alert("Button clicked!");
  });

  // 通过 emit 方法触发按钮的点击事件
  $("#btn").emit("click");
</script>
```

上記の例では、`emit`メソッドを使用してボタンのクリックイベントを手動でトリガーしています。実際にボタンをクリックしていなくても、ダイアログボックスに「ボタンがクリックされました！」と表示されます。

注意：`emit`メソッドを使用してもマウスクリックや他の実際のイベントはシミュレートされません。ただ、すでにバインドされたイベントハンドラを直接呼び出すだけです。したがって、特定の場合にイベントを発生させたい場合は、`emit`メソッドを使用することができ��す。


イベントがバインドされた後、イベントのさらなる伝播（バブリング）を防止したり、イベントのデフォルトの動作をキャンセルしたりすることがあるかもしれません。次に、イベントがトリガーされた後にバブリングを禁止し、デフォルトのイベントをキャンセルする��法について説明します。

### 禁止事件冒泡

事件冒泡は、要素上のイベントが発生した場合、DOMツリーを上方向にバブリングし、親要素の同じタイプのイベントを順番にトリガすることを指します。特定の要素でイベントを処理した後、バブリングを続行させないようにするには、`event.stopPropagation()` メソッドを使用します。

示例代码：

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

上記の例では、「Click Me」というボタンをクリックすると、「Button Clicked!」と表示されますが、「Inner Div Clicked!」と「Outer Div Clicked!」はトリガーされません。これは、ボタンのクリックイベントハンドラーで`event.stopPropagation()`を呼び出して、イベントのさらなる伝播を防��しているためです。

### イベントのデフォルトの動作をキャンセルする

いくつかの要素では、イベントがトリガーされた時にデフォルトの動作があります。たとえば、送信ボタンをクリックするとフォームが送信され、リンクをクリックするとリンク先に移動します。イベントのデフォルトの動作を阻止したい場合は、`event.preventDefault()` メソ���ドを使用することができます。

示例代码：

```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Prevent Default Event</title>
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
      event.preventDefault(); // イベントのデフォルト行動をキャンセル
      const name = $('#name').value;
      alert(`こんにちは、${name}さん！フォームの送信がキャンセルされました。`);
    });

    form.on('submit', () => {
      alert('フォームが送信されました！');
    });
  </script>
</body>
</html>
```

上記の例において、"Submit" ボタンをクリックした後、"Hello, {name}! Form submission prevented." が表示されますが、"Form Submitted!" アラートはトリガーされません。これは、`event.preventDefault()` を呼び出すことで、フォームのデフォルトの送信動作が阻止されているためです。