# ofa.js - 不需要打包的 JavaScript 框架

<!-- desc: ofa.jsは、ユーザーインターフェイスを構築するための新しいフレームワークで、使いやすく、ビルドの手間なく直接参照できる。 npm、Node.js、webpackへの依存を捨て、jQuery時代の利便性を取り戻した。 -->

<simp-block>

<punch-logo>
    <img src="../publics/logo.svg" width="100" logo alt="ofa.js" />
    <h2>ofa.js</h2>
    <img src="../publics/npm-logo.png" slot="fly" height="40" alt="npm" />
    <img src="../publics/nodejs-logo.png" slot="fly" height="40" alt="nodejs" />
    <img src="../publics/webpack-logo.png" slot="fly" height="40" alt="webpack" />
</punch-logo>

## パッケージ化されたJavaScriptフレームワークは必要ない

### 煩雑な学習は不要で、npm、Node.js、Webpackも必要ありません。すぐに始めることができます。

[例題チュートリアル](./cases/index.md)

```html
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

</simp-block>

<simp-block>

## 基于 Web Components

### ofa.js 基于 Web Components 开发。以下是支持的平台和时间，你可以立即体验

<support-platforms></support-platforms>

<a href="../publics/download/ofajs-start.zip" target="_blank">ダウンロード初期化プロジェクト</a>
<a href="../publics/download/ofajs-start/index.html" target="_blank">オンラインで初期化プロジェクトを表示する</a>

</simp-block>

<simp-block>

## 极低使用门槛

他のフロントエンドフレームワークとは異なり、ofa.jsベースのコンポーネントを使用する場合は、複雑な入門ガイドを読む必要はありません。すぐにHTMLファイルを作成して、「一拳でロゴを飛ばす」コンポーネントを体験してください。

<html-viewer style="width:100%;">

```
<!-- ofa.jsをプロジェクトにインポート -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
<!-- 開発済みのpunch-logoコンポーネントをロードする -->
<l-m src="https://kirakiray.github.io/ofa-v4-docs/docs/publics/comps/punch-logo.html"></l-m>
```

```html
<!-- punch-logoコンポーネントの使用 -->
<punch-logo style="margin:50px 0 0 100px;">
    <img src="https://kirakiray.github.io/ofa-v4-docs/docs/publics/logo.svg" logo height="90" />
    <h2>不加班了</h2>
    <p slot="fly">下班给我</p>
    <p slot="fly">迟点下班</p>
    <p slot="fly">周末加班</p>
</punch-logo>
```

</html-viewer>

</simp-block>

<simp-block>

## 一つのステップでコンポーネントを包装し、煩雑な手続きから解放されます

HTML5 の Web コンポーネントは以前は煩雑な学習が必要でしたが、今では単一のファイルだけで済みます。

<comp-viewer comp-name="my-switch" max-height="500" style="width:100%;">

```html
<template component>
  <style>
    .switch {
      position: relative;
      display: inline-block;
      width: 60px;
      height: 34px;
      background-color: #ccc;
      transition: background-color 0.4s;
      border-radius: 34px;
      cursor: pointer;
    }

    .slider {
      position: absolute;
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      transition: transform 0.4s;
      border-radius: 50%;
    }

    .switch.checked {
      background-color: #2196f3;
    }

    .switch.checked .slider {
      transform: translateX(26px);
    }
  </style>
  <div class="switch" class:checked="checked" on:click="checked = !checked">
    <span class="slider"></span>
  </div>
  <script>
    export default {
      tag: "my-switch",
      data: {
        checked: true,
      },
    };
  </script>
</template>
```

</comp-viewer>

</simp-block>


<simp-block>

## 提供多样便捷的模板语法

<case-switch>

<comp-viewer switch-name="Render Text" comp-name="text-demo" max-height="500" style="width:100%;">

```html
<template component>
  <div>レンダリングテキスト：{{txt}}</div>
  <script>
    export default {
      tag: "text-demo",
      data: {
        txt:"我是txt"
      },
    };
  </script>
</template>
```

</comp-viewer>

<comp-viewer switch-name="Set Properties" comp-name="prop-demo" max-height="500" style="width:100%;">

```html
<template component>
  <div :text="txt1"></div>
  <div :html="txt2"></div>
  <script>
    export default {
      tag: "prop-demo",
      data: {
        txt1:"<b>我是txt1</b>",
        txt2:"<b>我是txt2</b>",
      },
    };
  </script>
</template>
```

</comp-viewer>


<comp-viewer switch-name="Sync Data" comp-name="sync-demo" max-height="500" style="width:100%;">

```html
<template component>
  <div>{{txt}}</div>
  <input type="text" sync:value="txt" />
  <script>
    export default {
      tag: "sync-demo",
      data: {
        txt:"I am txt",
      },
    };
  </script>
</template>
```

</comp-viewer>

<comp-viewer switch-name="Bind Event" comp-name="event-demo" max-height="500" style="width:100%;">

```html
<template component>
  <div>count: {{count}}</div>
  <button on:click="count++">count++</button>
  <script>
    export default {
      tag: "event-demo",
      data: {
        count: 0
      },
    };
  </script>
</template>
```

</comp-viewer>

<comp-viewer switch-name="Use If" comp-name="if-demo" max-height="500" style="width:100%;">

```html
<template component>
  <x-if :value="count % 2">
    <div style="color:red">{{count}}</div>
  </x-if>
  <x-else>
    <div style="color:blue">{{count}}</div>
  </x-else>
  <button on:click="count++">count++</button>
  <script>
    export default {
      tag: "if-demo",
      data: {
        count: 0
      },
    };
  </script>
</template>
```

</comp-viewer>


<comp-viewer switch-name="Use Fill" comp-name="fill-demo" max-height="500" style="width:100%;">

```html
<template component>
  <ul>
  <x-fill :value="lists">
    <li>{{$index}} - {{$data.name}}</li>
  </x-fill>
  </ul>
  <script>
    export default {
      tag: "fill-demo",
      data: {
        lists:[{name:"One"}, {name:"Two"}, {name:"Three"}]
      },
    };
  </script>
</template>
```

</comp-viewer>

</case-switch>

</simp-block>

<simp-block>

## 可替代 jQuery 的选择

### jQueryと似たAPIを持っており、同じ便利さを感じることができます。

<split-code>

```javascript
// jQuery コード
$("#target").html("いくつかのHTMLコードを設定します"); // HTMLを設定
$("#target").text("テキストを設定します"); // テキストを設定
var ele_text = $("#target").text(); // テキストを取得
var parents = $("#target").parents(); // すべての親要素を配列で取得
var child = $("#target").children()[0]; // 最初の子要素を取得
```

```javascript
// ofa.js Code
$("#target").html = "some html code";  // HTML を設定する
$("#target").text = "set text"; // テキストを設定する
var ele_text = $("#target").text; // テキストを取得する
var parents = $("#target").parents; // すべての親要素を取得する配列を取得する
var child = $("#target")[0]; // 最初の子要素を取得する
```

</split-code>

</simp-block>

<simp-block>

## 使用案例

<a href="https://obook.ofajs.com/">obook 最もシンプルなドキュメント作成ツール</a>

</simp-block>

<l-m src="https://cdn.jsdelivr.net/npm/obook/blocks/simp-block.html"></l-m>
<l-m src="../publics/comps/punch-logo.html"></l-m>
<l-m src="../publics/comps/support-platforms.html"></l-m>
<l-m src="../publics/comps/case-switch.html"></l-m>
<l-m src="../publics/comps/split-code.html"></l-m>