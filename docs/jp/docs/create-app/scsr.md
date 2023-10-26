# 静的クライアントサイドレンダリング (SCSR)

## 什么是 SCSR？

SCSRのフルネームはStatic Client-Side Renderingであり、静的クライアントサイドレンダリングと呼ばれます。静的クライアントサイドレンダリング（SCSR）は、CSR（クライアントサイドレンダリング）の一種であり、CSRのユーザーエクスペリエンスを維持しながら、ページを静的��状態でクローラーに取得させることができます。

## SCSRの使用方法

SCSRライブラリを引用する方法は以下の通りです：

```html
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.25/libs/scsr/dist/scsr.min.js"></script>
```

## SCSR 的工作原理

SCSRは、`o-page`タグを使用せずに、単一ファイルモードでページモジュールを直接実行することで、ページ上でのレンダリングを実現するためのページモジュールです。具体的には、ページモジュールのテンプレートコードを`o-app`内に直接配置することです。

以下は、ページ上でページモジュールのコンテンツを直接レンダリングする方法を示す SCSR の例です: 

```html
<!-- home.html --><!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Home</title>
    <link rel="stylesheet" href="./public.css" />
    <script src="../../ofa.js"></script>
    <script src="./scsr.min.js"></script>
  </head>
  <body>
    <o-app src="./app.mjs">
      <template page>
        <div class="container">
          <h1 class="title">Hello, World!</h1>
          <p class="subtitle">Welcome to my ofa.js page.</p>
          <div>count => {{count}}</div>
          <a href="./pages/help.html" olink>GO TO HELP</a>
        </div>

        <script>
          export default async ({ query }) => {
            return {
              data: { count: query.count || 0 },
            };
          };
        </script>
      </template>
    </o-app>
  </body>
</html>
```

通过 SCSR，`template` 标签内的内容会被直接渲染到页面上，而这部分内容实际上就是单文件模式的页面模块。

前述の`home.html`ページを例に、`help`ページを作成します。

```html
<!-- pages/help.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Help</title>
    <link rel="stylesheet" href="../public.css" />
    <script src="../../../ofa.js"></script>
    <script src="../scsr.min.js"></script>
  </head>
  <body>
    <o-app src="../app.mjs">
      <template page>
        <div class="container">
          <h1 class="title">Help Page</h1>
          <button on:click="back()">GO Back</button>
        </div>

        <script>
          export default async ({ query }) => {
            return {
              proto: {},
            };
          };
        </script>
      </template>
    </o-app>
  </body>
</html>

```

在 `home.html` 页面中点击 "GO TO HELP" 后，将平滑跳转到 `help.html` 页面，实现了客户端渲染的平滑跳转效果。

注意事項

所有采用 SCSR 方案的页面，除页面描述性的内容（如 title、meta:description、keywords）和页面模板内容外，其他引用资源必须保持一致，以确保在页面跳转和刷新后的体验一致。

## SSRプランについて
現在のSCSRソリューションは実際にはSSG（Static Site Generation）ソリューションにより類似しています。これは、ページを事前に静的コンテンツとしてレンダリングし、クライアントで対話的に使用することを可能にします。ofa.jsは、独立したコンポーネントのエンカプセレ��ションソリューションを提供し、フロントエンド開発者はコンポーネントをエンカプセレーションし、既存のバックエンドレンダリングソリューション（Node.js、Go、Java、PHPなどの言語のウェブサイトレンダリングフレームワーク）と組み合わせて、高品質なウェブページを構築するためにこれらのエンカプセレーションされたコンポーネントを迅速に使用することができます。

未来、完全なSSR（Server-Side Rendering）ソリューションを提供する予定です。このソリューションの原理は、まず次のページの要素の内容を取得し、現在のページのタグの内容と比較して、動的に属性値の追加、削除、変更などを行うことです。ただし、このSSRのソリューシ��ンは時間がかかる可能性があります。なぜなら、このプロセスには複雑な要素の比較と変更操作が関わっているからです。

ofa.jsは新興のフレームワークであり、作者の余暇も限られているため、まだSSRソリューションを完全に開発していません。しかし、将来的にofa.jsがより多くのユーザーに使用され、SSRソリューションへの強い需要が現れる場合、作者はこのソリューションを改善し、開発���続けるでしょう。現時点では、作者はフレームワークの安定性と機能拡張に集中し、また、ユーザーからのフィードバックと提案を歓迎しています。これにより、将来的により良いユーザーニーズを満たすことができます。