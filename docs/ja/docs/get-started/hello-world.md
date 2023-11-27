# 最初のケース

以下は、クリックするとテキストが "Hello World "に変わるボタンの例である：

<html-viewer>

```
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.40/dist/ofa.min.js"></script>
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

「Hello World」という太字のテキストが表示されます。

今、私たちは基本的な概念を詳しく説明します。

## 選択器

'ofa.js'を使用すると、`$`シンボルはグローバルスコープに登録されます。`$('xxx')`を使用して、条件に一致する**最初の**要素を選択します。ここで、`xxx`は標準の[CSSセレクター](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors)の内容です。具体的なセレクターの内容を確認るには、リンクをクリックしてください。

以下は例です。

<html-viewer>

```
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.40/dist/ofa.min.js"></script>
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

上記の場合、ページが開いてから1秒後に、**pタグ**、**#デスク**、**.ロガー**のテキスト内容がそれぞれ変更される。

## イベントバインディング

選択した要素に成功した後、要素にイベントをバインドすることができます。先述の「Hello World」の例では、idが「btn」の要素にクリックイベントをバインドしました。ボタンをクリックすると、バインドされた関数が実行されます。

[イベントの例](./example-event.md) セクションをクリックして、イベントバインディングのいくつかの例を見ることができます。

すべての利用可能なイベントについては、「[Web Events](https://developer.mozilla.org/en-US/docs/Web/Events)」を参照して、完全なイベントリストを確認してください。

## 属性

上記の2つのケースでは、 `html` と `text` の使用方法をそれぞれ示しました。

`html`または`text`属性を使用して、要素の内容を取得することもできます。以下に示すように：

<html-viewer>

```
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.40/dist/ofa.min.js"></script>
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

この例では、#t1の要素内のHTMLコンテンツが #t2 と #t3 の要素に割り当てられています。
