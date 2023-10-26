# コンポーネント化の基本知識

ofa.js は、Webコンポーネント技術に基づくラッパーライブラリであり、コンポーネントの開発プロセスを簡素化し、高速化することを目的としています。複雑な技術的な詳細を隠すことで、開発者はより高品質なコンポーネントやアプリケーションの構築により専念するこ���ができます。

为了更好地开发组件，有必要学习一些 Web Components 的知识。下面介绍的知识点不仅可以在 ofa.js 中应用，还可以让你在其他使用 Web Components 的框架上同样受益。

## Shadow DOM 容器

在 Web Components 中，Shadow DOM 提供了一种隔离的容器，用于封装组件内部的样式和结构。这意味着组件内部的样式和 DOM 结构不会与外部的样式和结构相互干扰，从而确保组件的可预测性和可维护性。

ofa.jsでは、それぞれのコンポーネントにはShadow DOMコンテナがあり、コンポーネントの内部コンテンツを隔離します。テンプレートコンテンツはこのコンテナにレンダリングさ���ます。`$`で取得したコンポーネントインスタンスを、コンポーネント内のShadow DOMコンテナにアクセスするために`shadow`プロパティを使用することもできます。これにより、コンポーネント内の要素を操作およびアクセスすることができます。

```javascript
const myComponent = $("my-component"); // コンポーネントのインスタンスを取得する
const shadowContainer = myComponent.shadow; // コンポーネントのShadow DOMコンテナを取得する

$("my-component").shadow.$("h1").css.color = 'red' // Shadow DOMのh1を赤色に変更する
```

## Web Componentsでよく使われるCSSセレクタ

;Ignore bugs;
Web Components には、コンポーネント内の異なる部分を選択してスタイルを適用するための特殊な CSS セレクタがいくつか用意されています。以下は一部の一般的なセレクタです: 

:host セレクタ

`:host` 选择器用于选择组件自身的外部容器。可以通过这个选择器来定义组件的样式。

```css
:host {
  display: block;
  border: 1px solid black;
  padding: 10px;
}
```

### ::slotted() セレクター
`::slotted()` はスリットされた要素を選択するためのセレクタです。このセレクタを使用して、スリットされたコンテンツにスタイルを適用することができます。

```css
::slotted(p) {
  font-size: 18px;
  color: blue;
}
```

## スロット（Slot）の使用

スロットは、Webコンポーネントでコンポーネント内に外部のコンテンツを埋め込むための仕組みです。スロットを使用することで、開発者はカスタムのコンテンツをコンポーネント内に渡すことができ、より柔軟なコンポーネント構造を実現することができます。

### 単一のスロット

コンポーネントテンプレートでは、`<slot>`要素を使用してスロットを定義することができます。外部から渡されたコンテンツはスロットの内部に挿入されます。

```html
<!-- my-component.html -->
...
<div>
  <h2><slot></slot></h2>
</div>
...
```

```html
<!-- my-componentを使用する -->
<my-component>
  <p>This is a slot content.</p>
</my-component>
```

多重な名前つきスロット

命名スロットを除き、複数の名前付きスロットを定義することもできます。名前付きスロットを使用すると、異なるコンテンツを異なるスロット位置に挿入することができます。

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
<!-- 使用 my-component -->
<my-component>
  <div slot="header">Header Content</div>
  <p>This is main content.</p>
  <div slot="footer">Footer Content</div>
</my-component>
```

## slotchange 事件的使用

`slotchange` イベントは、スロットの内容が変化した時に発火します。このイベントを監視して、スロットの内容に関連する操作を実行することができます。

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