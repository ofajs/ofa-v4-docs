# インスタンスの基本的な概念

`$` インスタンスは、ページ上の要素をカプセル化するためのものであり、既存の要素を選択するためだけでなく、新しい要素を直接作成して操作することもできます。この章では、新しい要素の作成方法と `$` インスタンスの操作について説明します。

## 新しい要素を作成する

インスタンス `$` を使えば、例えば、新しい要素を直接作成したり、それを操作したりすることができる：

<html-viewer>

```
<!-- ofa.js プロジェクトにインポートする -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<script>
  const $ele = $('<div style="color:red">I am text</div>');
  $('body').push($ele);
</script>
```

</html-viewer>

上記の例では、`$('<div style="color:red">I am text</div>')`を使用して新しい`div`要素を作成し、`body`に追加しました。

## 子要素の取得

インスタンスは、`$`を介して取得された場合、DOM要素とは異なり、 `children`属性を持ちません。ただし、配列インデックスを使用してインスタンスの直接の子要素にアクセスすることができます。

<html-viewer>

```
<!-- ofa.js プロジェクトにインポートする -->
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

上記の例では、`div`要素を取得し、インデックスを使用して最初の2つの`p`要素にアクセスしました。同時に、`$div.length`を使用して子要素の数を取得しました。

## 操作子要素

例を通じて、私たちは`$`インスタンスを使用して、直接配列のメソッドを使用してサブ要素を操作することもできます。例えば、`push`や`pop`です。


<html-viewer>

```
<!-- ofa.js プロジェクトにインポートする -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div>
  <p>First Paragraph</p>
</div>
<script>
  const $paragraphs = $('p');
  
  // 新しいdiv要素を子として追加する
  const $newDiv = $('<div>New Div</div>');
  $paragraphs.push($newDiv);

  setTimeout(()=>{
    // 最後の子要素を削除する
    $paragraphs.pop();

    console.log($paragraphs);
  },1000)
</script>
```

</html-viewer>

上記の例では、すべての `p` 要素の `$` インスタンスを取得し、`push` メソッドを使用して新しい `div` 要素を子要素として追加し、そして `pop` メソッドを使用して最後の子要素を削除しました。

上記の例を通じて、`$` のインスタンスの基本的な操作、新しい要素の作成、子要素のアクセスと操作を理解することができます。`$` のインスタンスは、ページ上の要素を操作するための便利な方法を提供しています。