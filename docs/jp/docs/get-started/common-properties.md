# 一般的な属性またはメソッド

在 `$` 实例中，除了可以通过选择器选择元素外，还提供了一些常用的来方便元素的操作和查找。

可以稍微浏览一下，将来在需要时，可以随时参考 API 文档。

## 常用的属性

- [tag](./others/tag.md)：対象のタグ名を取得します。
- [ele](./instance/ele.md)：インスタンスの実際のネイティブ要素を取得します。
- [index](./others/index.md)：対象の要素が親要素内での順序を取得します。
- [text](../../api/props/text.md)：対象要素のテキストを取得または設定します���
- [html](../../api/props/html.md)：対象要素の HTML コードを取得または設定します。
- [css](../../api/props/css.md)：対象要素のスタイルを取得または設定します。
- [style](../../api/props/style.md)：対象要素のネイティブスタイルを取得します。
- [classList](../../api/props/class-list.md)：対象要素のネイティブクラスリストを取得します。
- [data](../../api/props/data.md)：対象要素のネイティブデータセットを取得します。

### ノード操作

- [before](./operation/before.md)：在目标实例的前面添加元素
- [after](./operation/after.md)：在目标实例的后面添加元素
- [remove](./operation/remove.md)：删除目标元素
- [attr](../../api/props/attr.md)：获取或设置目标元素的 [attributes](https://developer.mozilla.org/en-US/docs/Web/API/Element/attributes)

 重要な特徴

- [フォームデータ](../../api/others/form-data.md)：フォームデータを簡単にバインドおよび取得できます。

もし ofa.js の API についてもっと詳しく知りたい場合は、[API](../../api/index.md) ドキュメントを参照してください；