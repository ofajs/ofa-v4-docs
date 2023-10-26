# インスタンスの基本的な概念

`$`インスタンスは、ページ上の要素のカプセル化です。既存の要素を選択するためだけでなく、新しい要素の作成と操作も行うことができます。この章では、新しい要素の作成方法と `$` インスタンスの操作について説明します。

## 新しい要素の作成

`$`のインスタンスを通して、私たちは直接新しい要素を作成し、操作を行うことができます。例えば：

<html-viewer>

```
<!-- ofa.js をプロジェクトに読み込む -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<script>
  const $ele = $('<div style="color:red">I am text</div>');
  $('body').push($ele);
</script>
```

</html-viewer>

在上面的例子中，我们通过 `$('<div style="color:red">I am text</div>')` 创建了一个新的 `div` 元素，并将其添加到了 `body` 中。

## 子要素の取得

`$`で取得したインスタンスには、DOM要素のように`children`プロパティはありません。しかし、配列インデックスを使用してインスタンスの直接の子要素にアクセスすることが��きます：

<html-viewer>

```
<!-- ofa.js をプロジェクトに読み込む -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div>
  <p>First Paragraph</p>
  <p>Second Paragraph</p>
</div>
<script>
  const $div = $('div');
  console.log($div[0]); // Output: <p>First Paragraph</p>
  console.log($div[1]); // Output: <p>Second Paragraph</p>
  console.log($div.length); // Output: 2
</script>
```

</html-viewer>

上記の例では、`div`要素を取得し、インデックスを使用して最初と2番目の`p`要素にアクセスしました。また、`$div.length`を使用して子要素の数も取得しました。

## サブエレメントの操作

`$` を使用することで、配列のメソッドを直接利用して子要素を操作することもできます。例えば `push` と `pop` です：


<html-viewer>

```
<!-- ofa.js をプロジェクトに読み込む -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div>
  <p>First Paragraph</p>
</div>
<script>
  const $paragraphs = $('p');
  
  // 添加新的 div 元素作为子元素
  const $newDiv = $('<div>New Div</div>');
  $paragraphs.push($newDiv);

  setTimeout(()=>{
    // 删除最后一个子元素
    $paragraphs.pop();

    console.log($paragraphs);
  },1000)
</script>
```

</html-viewer>

在上面的例子中，我们获取了所有 `p` 元素的 `$` 实例，并使用 `push` 方法添加了一个新的 `div` 元素作为子元素，然后使用 `pop` 方法移除了最后一个子元素。

上記の例を通じて、`$` のインスタンスについて、新しい要素の作成やサブ要素へのアクセスと操作など、いくつかの基本的な操作を理解することができます。`$` のインスタ���スは、ページ上の要素を操作するための簡単な方法を提供します。