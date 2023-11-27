# jQuery との共存

ofa.js（≥4.3.40）を使用する場合、jQueryと共存することができます。主な選択肢は2つあります：

## 1. 「noConflict」を使用する

jQueryの導入後に[noConflict](https://api.jquery.com/jQuery.noConflict/)メソッドを呼び出すことで、`$`変数を解放し、衝突を避けることができます。

```html
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
<script src="https://code.jquery.com/jquery-3.7.1.js"></script>
<script>
  $.noConflict();
  // これで、jQuery.ajax() などの完全名を使用して jQuery を呼び出すことができます。。
</script>
```

## 2. ライブラリを順番にインポートする

もう一つの方法は、順番にライブラリをインポートし、後でインポートされたライブラリが `$` 変数を占有する方法です。この場合、グローバル変数の `ofa` を元の `$` の代わりに使用することができます。

```html
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
<script src="https://code.jquery.com/jquery-3.7.1.js"></script>
<!-- 現在 $ は jQuery の別名です。ofa.js 関連の機能を呼び出すために $ の代わりに ofa を使用することができます -->
```

jQuery と ofa.js が同一のページ上で衝突しないようにするには、次のいずれかの方法を使用します。