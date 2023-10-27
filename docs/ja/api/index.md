# APIの紹介

以下はofa.js APIの概要です。必要な場合に備えて最初に一度ご覧いただき、詳細なドキュメントを参照する際に再度ご確認ください。

## 实例相关

- [$](./instance/dollar.md)：インスタンスを取得するためのメソッド
- [all](./instance/all.md)：関連するすべてのインスタンスを取得する
- [prev](./instance/prev.md)：対象要素の前のインスタンスを取得する
- [prevs](./instance/prevs.md)：対象要素の前のすべてのインスタンスを取得する
- [next](./instance/next.md)：対象要素の後ろのインスタンスを取得する
- [nexts](./instance/nexts.md)：対象要素の後ろのすべてのインスタンスを取得する
- [siblings](./instance/siblings.md)：対象要素のすべての隣接する要素のインスタンスを取得する
- [parent](./instance/parent.md)：親要素のインスタンスを取得する
- [parents](./instance/parents.md)：すべての親要素のインスタンスの集合を取得する
- [clone](./instance/clone.md)：インスタンスをクローンするためのメソッド
- [ele](./instance/ele.md)：インスタンスの実際のネイティブ要素を取得する
- [shadow](./instance/shadow.md)：カスタムコンポーネントの影のルートノードを取得する
- [root](./instance/root.md)：対象インスタンスのルートノードを取得する
- [子元素](./instance/children.md)：数字で子要素を直接取得する
- [host](./instance/host.md)：対象の app 要素のインスタンスを取得する

## ノード操作

- [子ノードの追加または削除](./operation/array-like.md)
- [before](./operation/before.md)：ターゲットインスタンスの前に要素を追加する
- [after](./operation/after.md)：ターゲットインスタンスの後ろに要素を追加する
- [remove](./operation/remove.md)：ターゲット要素を削除する
- [wrap](./operation/wrap.md)：ターゲット要素を要素で包む
- [unwrap](./operation/unwrap.md)：ターゲット要素から包んでいる要素を取り除く

## プロパティ操作

- [text](./props/text.md)：ターゲット要素のテキストを取得または設定します
- [html](./props/html.md)：ターゲット要素のHTMLコードを取得または設定します
- [attr](./props/attr.md)：ターゲット要素の[attributes](https://developer.mozilla.org/en-US/docs/Web/API/Element/attributes)を取得または設定しま��
- [css](./props/css.md)：ターゲット要素のスタイルを取得または設定します
- [style](./props/style.md)：ターゲット要素のネイティブスタイルを取得します
- [classList](./props/class-list.md)：ターゲット要素のネイティブclassリストを取得します
- [data](./props/data.md)：ターゲット要素のネイティブデータセットを取得します

## イベントに関連する

- [on](./event/on.md)：イベントをターゲット要素にバインドする
- [one](./event/one.md)：ターゲット要素に一度だけイベントをバインドする
- [emit](./event/emit.md)：イベントを自発的にトリガーする
- [off](./event/off.md)：バインドされているイベントを解除する

## テンプレート構文

- [テキストのレンダリング](./temp-syntax/text-render.md)：テンプレートファイルでテキストを素早くレンダリングします。
- [クラス](./temp-syntax/class.md)：テンプレートファイルでクラス名を素早くレンダリングします。
- [同期](./temp-syntax/sync.md)：データをテンプレートファイ���に素早く同期します。
- [条件付きレンダリング](./temp-syntax/condition.md)：テンプレートファイルで必要な場合にコンテンツをレンダリングします。
- [リストのレンダリング](./temp-syntax/fill.md)：テンプレートファイルで配列データを素早くレンダリングします

## 生命周期
- [created](./life-cycle/created.md)：コンポーネントが作成され、コンテンツがレンダリングされていない状態でトリガーされます。
- [ready](./life-cycle/ready.md)：コンポーネントが作成され、コンテンツがレンダリングされた後にトリガーされます。
- [watch](./life-cycle/watch.md)：コ��ポーネントの初期化が完了し、値が変更された後にトリガーされます。
- [loaded](./life-cycle/loaded.md)：コンポーネントの埋め込みリソースがロードされた後にトリガーされます。
- [attached](./life-cycle/attached.md)：コンポーネントがドキュメントに追加された後にトリガーされます。
- [detached](./life-cycle/detached.md)：コンポーネントがドキュメントから削除された後にトリガーされます。
- [routerChange](./life-cycle/router-change.md)：アプリケーションのルートが変更された時に、内包された親ページでトリガーされます。

## 其他

- [ボックスモデル](./others/box.md)：ターゲット要素のすべてのサイズに関連するデータを取得します
- [formData](./others/form-data.md)：フォームデータを簡単にバインドおよび取得します
- [タグ](./others/tag.md)：ターゲットのタグ名を取得します
- [index](./others/index.md)：ターゲッ���要素の親要素内での順序を取得します
- [is](./others/is.md)：ターゲット要素がCSSセレクタ式に一致するかどうかを判断します
- [refresh](./others/refresh.md)：コンポーネントのインターフェースを手動でリフレッシュします
- [PATH](./others/path.md)：コンポーネントまたはページの登録ファイルのアドレスを取得します
- [extend](./others/extend.md)：インスタンスのデータやメソッドを拡張します；ofa.jsのデータやメソッドを拡張します；
- [インスタンスデータの特徴](./others/stanz.md)：インスタンスデータのサブオブジェクトデータの特性を説明し、データの変更を監視する方法