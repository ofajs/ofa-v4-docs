# 第一のケース
以下はサンプルケースです。ボタンをクリックすると、テキストが「こんにちは世界」と変わります：

<html-viewer>

```
<!-- ofa.js をプロジェクトに読み込む -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div id="desk">Please click the button</div>
<br />
<button id="btn">I am Button</button>
<script>
  $("#btn").on("click", () => {
    $("#desk").html = "<b>Hello World</b>";
  });
</script>
```

</html-viewer>

ボタンをクリックすると、「Hello World」という太字のテキストが表示されます。

今、基本的な概念について詳しく説明しましょう。

セレクター

'ofa.js' を引用すると、'$' 記号がグローバルスコープに登録されます。条件に合致する**最初の**要素を `$('xxx')` で選択します。ここで `xxx` は標準の [CSS セレクタ](https://developer.mozilla.org/ja/docs/Web/CSS/CSS_selectors) の内容です。具体的なセレクタの内容はリンクをクリックして確認できます。

以下は例です：

<html-viewer>

```
<!-- ofa.js をプロジェクトに読み込む -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<p>I am P tag</p>
<div id="desk">I am desk</div>
<div class="logger">I am logger</div>
<script>
    setTimeout(() => {
        $("p").text = "change P tag";
        $("#desk").text = "change #desk";
        $(".logger").text = "change .logger";
    }, 1000);
</script>
```

</html-viewer>

;Ignore bugs;
上記の例では、ページが1秒後に開かれると、**pタグ**、**#desk**、**.logger**のテキストコンテンツがそれぞれ変更されます。

## イベントバインディング

要素を選択した後、要素にイベントをバインドすることができます。以前紹介した「Hello World」の例では、idが「btn」の要素にクリックイベントをバインドしました。ボタンを��リックすると、バインドされた関数が実行されます。

[イベントの例](./example-event.md) のセクションをクリックして、イベントバインディングの例をいくつか見ることができます。

すべての利用可能なイベントについては、[Web Events](https://developer.mozilla.org/ja/docs/Web/Events) を参照して完全なイベントリストを確認できます。

## 属性

在上面的两个案例中，我们分别展示了 `html` 和 `text` 属性的使用。

あなたは`html`または`text`属性を使用して、要素の内容を取得することもできます。以下に示すように：

<html-viewer>

```
<!-- ofa.js をプロジェクトに読み込む -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div id="t1">
    <span style="color: red">I am text</span>
</div>
<div id="t2"></div>
<br />
<div id="t3"></div>
<br />
<script>
    $("#t2").text = $("#t1").html;
    $("#t3").html = $("#t1").html;
</script>
```

</html-viewer>

这个例子中，我们将 #t1 元素内的 HTML 内容赋值给了 #t2 和 #t3 元素。
