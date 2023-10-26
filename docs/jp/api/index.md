# APIの紹介

以下是ofa.js API的概览，あなたは最初に参照用に一度閲覧することができますが、詳細なドキュメントを必要とする場合は後で参照してください。

## 实例相关

- [$](./instance/dollar.md)：インスタンスを取得するためのメソッドです
- [all](./instance/all.md)：関連するすべてのインスタンスを取得します
- [prev](./instance/prev.md)：対象要素の前の��ンスタンスを取得します
- [prevs](./instance/prevs.md)：対象要素の前のすべてのインスタンスを取得します
- [next](./instance/next.md)：対象要素の後のインスタンスを取得します
- [nexts](./instance/nexts.md)：対象要素の後のすべてのインスタンスを取得します
- [siblings](./instance/siblings.md)：対象要素のすべての隣接する要素のインスタンスを取得します
- [parent](./instance/parent.md)：親要素のインスタンスを取得します
- [parents](./instance/parents.md)：すべての親要素のインスタンスの集まりを取得します
- [clone](./instance/clone.md)：インスタンスを複製するメソッドです
- [ele](./instance/ele.md)：実際のネイティブ要素を取得します
- [shadow](./instance/shadow.md)：カスタムコンポーネントの影のルートノードを取得します
- [root](./instance/root.md)：対象インスタンスのルートノードを取得します
- [子元素](./instance/children.md)：数字で直接子要素を取得します
- [host](./instance/host.md)：対象の app 要素のインスタンスを取得します

## ノード操作

- [子ノードの追加または削除](./operation/array-like.md)
- [before](./operation/before.md)：ターゲットインスタンスの前に要素を追加する
- [after](./operation/after.md)：ターゲットインスタンスの後ろに要素を追加する
- [remove](./operation/remove.md)：ターゲット要素を削除する
- [wrap](./operation/wrap.md)：ターゲット要素を囲む要素を追加する
- [unwrap](./operation/unwrap.md)：ターゲット要素の包まれた要素を取り除く

## 属性操作

- [text](./props/text.md)：ターゲット要素のテキストを取得または設定します
- [html](./props/html.md)：ターゲット要素のHTMLコードを取得または設定します
- [attr](./props/attr.md)：ターゲット要素の[attributes](https://developer.mozilla.org/en-US/docs/Web/API/Element/attributes)を取得または設定しま��
- [css](./props/css.md)：ターゲット要素のスタイルを取得または設定します
- [style](./props/style.md)：ターゲット要素のネイティブスタイルを取得します
- [classList](./props/class-list.md)：ターゲット要素のネイティブクラスリストを取得します
- [data](./props/data.md)：ターゲット要素のネイティブデータセットを取得します

## イベント関連

- [on](./event/on.md)：イベントを対象要素にバインドします
- [one](./event/one.md)：一度だけ対象要素にイベントをバインドします
- [emit](./event/emit.md)：イベントをアクティブにトリガします
- [off](./event/off.md)：バインドされたイベントを解除します

## テンプレートの構文

- [テキストのレンダリング](./temp-syntax/text-render.md)：テンプレートファイルでテキストを素早くレンダリングする
- [class](./temp-syntax/class.md)：テンプレートファイルでクラス名を素早くレンダリングする
- [sync](./temp-syntax/sync.md)：データをテンプレートファイルに素早く同期する
- [条件付きレンダリング](./temp-syntax/condition.md)：テンプレートファイルで必要に応じてコンテンツをレンダリングする
- [リストのレンダリング](./temp-syntax/fill.md)：テンプレートファイルで配列データを素早くレンダリングする

## 生命周期
- [created](./life-cycle/created.md)：コンポーネントが作成され、内容がレンダリングされなかった場合に発生します。
- [ready](./life-cycle/ready.md)：コンポーネントが作成され、内容がレンダリングされた後に発生します。
- [watch](./life-cycle/watch.md)：コンポーネントが初期化され��値が変更された後に発生します。
- [loaded](./life-cycle/loaded.md)：コンポーネント内の埋め込みリソースがロードされた後に発生します。
- [attached](./life-cycle/attached.md)：コンポーネントがドキュメントに追加された後に発生します。
- [detached](./life-cycle/detached.md)：コンポーネントがドキュメントから削除された後に発生します。
- [routerChange](./life-cycle/router-change.md)：内部の親ページがアプリのルートが変更された時に発生します。

## その他

- [ボックスモデル](./others/box.md)：ターゲット要素のサイズ関連のデータを取得します
- [formData](./others/form-data.md)：フォームデータのバインドと取得を簡単に行います
- [tag](./others/tag.md)：ターゲットのタグ名を取得します
- [index](./others/index.md)：ターゲット要素の親要素���での順序を取得します
- [is](./others/is.md)：ターゲット要素がCSSセレクタ式と一致するかどうかを判定します
- [refresh](./others/refresh.md)：コンポーネントのインターフェースを手動でリフレッシュします
- [PATH](./others/path.md)：コンポーネントまたはページの登録ファイルのアドレスを取得します
- [extend](./others/extend.md)：インスタンスのデータまたはメソッドを拡張します；ofa.jsのデータやメソッドを拡張します；
- [インスタンスデータの特徴](./others/stanz.md)：インスタンスデータのサブオブジェクトデータの特性と、データの変化を監視する方法を紹介します