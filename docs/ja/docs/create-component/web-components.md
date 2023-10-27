# 组件化常规知识

ofa.js は Web Components テクノロジーをベースにしたラッパーライブラリであり、コンポーネント開発プロセスを簡素化し、加速することを目的としています。複雑な技術の詳細を隠蔽することで、開発者が高品質なコンポーネントとアプリケーションの構築に注力できるようになります。

コンポーネントをより効果的に開発するために、Web Components の知識を学ぶ必要があります。以下に紹介されている知識は、ofa.js だけでなく、他の Web Components を使用するフレームワークでも同様に役立ちます。

## Shadow DOM コンテナ

Web Componentsでは、Shadow DOMはコンポーネントの内部のスタイルと構造をカプセル化するための隔離されたコンテナを提供します。これにより、コンポーネントの内部のスタイルとDOMの構造が外部のスタイルと構造と干渉しないため、コンポーネントの予測可能性と保守性が保されます。

ofa.jsでは、各コンポーネントにはShadow DOMコンテナがあり、コンポーネントの内部コンテンツを分離するために使用されます。 このコンテナの中にテンプレートの内容がレンダリングされます。 また、`$`で取得したコンポーネントインスタンスは、`shadow`属性を使ってコンポーネント内部のShadow DOMコンテナにアクセスすることができます。

```javascript
const myComponent = $("my-component"); // コンポーネントのインスタンスを取得
const shadowContainer = myComponent.shadow; // コンポーネントの Shadow DOM コンテナを取得

$("my-component").shadow.$("h1").css.color = 'red' // Shadow DOM の h1 を赤色に変更します
```

## Web Components 中的常用 CSS 选择器

Web Componentsは、コンポーネント内の異なる部分を選択してスタイルを適用するための特別なCSSセレクタを提供します。以下は一部の一般的なセレクタです。

### :host 选择器

:focusのセレクタは、コンポーネント自体の外部コンテナを選択するために使用されます。このセレクタを使用して、コンポーネントのスタイルを定義することができます。

```css
:host {
  display: block;
  border: 1px solid black;
  padding: 10px;
}
```

### ::slotted() 选择器

`::slotted()`セレクタは、スロットされた内容がラップされている要素を選択するために使用されます。このセレクタをコンポーネント内のスタイルで使用して、スロットされたコンテンツにスタイルを適用することができます。

```css
::slotted(p) {
  font-size: 18px;
  color: blue;
}
```

## スロット（Slot）の使用

スロットは、Web Components内でコンポーネント内に外部コンテンツを挿入するためのメカニズムです。スロットを使用すると、開発者はカスタムのコンテンツをコンポーネント内に渡して、より柔軟なコンポーネント構造を実現することができます。

### 単一のスロット

コンポーネントのテンプレートでは、`<slot>` 要素を使用してスロットを定義することができます。外部から渡された内容はスロット内に挿入されます。

```html
<!-- my-component.html -->
...
<div>
  <h2><slot></slot></h2>
</div>
...
```

```html
<!-- my-component を使用する -->
<my-component>
  <p>This is a slot content.</p>
</my-component>
```

### 複数の名前つきスロット

デフォルトのスロット以外にも、複数の名前付きスロットを定義することができます。名前付きスロットを使用すると、異なるコンテンツを異なるスロット位置に挿入することができます。

```html
<!-- my-component.html -->
...
<div>
    <header><slot name="header"></slot></header>
    <main><slot></slot></main>
    <footer><slot name="footer"></slot></footer>
</div>
...
```

```html
<!-- my-component を使用する -->
<my-component>
  <div slot="header">ヘッダーの内容</div>
  <p>これはメインのコンテンツです。</p>
  <div slot="footer">フッターの内容</div>
</my-component>
```

## slotchange イベントの使用

`slotchange`イベントは、スロットの内容が変化した時にトリガされます。このイベントを監視して、スロットの内容に関連する操作を実行することができます。

```javascript
export default {
  data: {
    count: 0,
  },
  ready() {
    this.shadow.$("slot").on("slotchange", () => {
      console.log("Slot content has changed");
    });
  },
};
```