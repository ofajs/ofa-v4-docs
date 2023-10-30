# 静的クライアントサイドレンダリング (SCSR)

## SCSRとは？

SCSRのフルネームは、Static Client-Side Renderingで、静的なクライアントサイドレンダリングと呼ばれます。静的なクライアントサイドレンダリング(SCSR)は、CSR(Client-Side Rendering)の一種であり、CSRのユーザーエクスペリエンスを保ちながら、ページを静的な状態でクローラーが取できるようにすることができます。

## SCSRの使い方

以下の方法で SCSR ライブラリを引用することができます。

```html
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.29/libs/scsr/dist/scsr.min.js"></script>
```

## SCSRの仕組み

SCSRは、`o-page`タグを使わずに直接シングルファイルモードでページモジュールを実行することで、ページのレンダリングを可能にします。 具体的には、ページモジュールのテンプレートコードは `o-app` の中に直接置かれます。

以下は、SCSRの例です。この例では、ページモジュールの内容を直接レンダリングする方法を示しています。

```html
<!-- home.html -->
<!DOCTYPE html>
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

`template` タグ内の内容は、SCSRによって直接ページ上にレンダリングされます。この部分の内容は、実際にはシングルファイルモードのページモジュールです。

以前の `home.html` ページの例に従って、`help` ページを作成します：

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

「home.html」のページで「GO TO HELP」をクリックすると、スムーズに「help.html」のページに遷移し、クライアント側でのレンダリングによるスムーズなページ遷移効果が実現されています。

## 注意

すべてのSCSRスキームを使用したページについて、ページの説明的なコンテンツ（タイトル、メタディスクリプション、キーワードなど）とページテンプレートのコンテンツ以外の参照リソースは、ページの遷移とリロード後の一貫した体験を確保するために一致させる必があります。

## SSRプログラムについて

現在のSCSRの仕組みは実際にはSSG（Static Site Generation）の一種に似ています。なぜなら、ページを静的なコンテンツとして事前にレンダリングし、その後クライアントで相互作用するからです。ofa.jsは、独立したコンポーネントラッピングの仕組みを提供しており、フロンエンド開発者はコンポーネントをラップし、従来のバックエンドページレンダリングの仕組み（Node.js、Go、Java、PHPなどの言語のウェブサイトレンダリングフレームワークなど）と組み合わせることで、バックエンド開発者はこれらのラップされたコンポーネントを使って高品質なウェブページを素早く構築することができます。

我々は将来的に完全なSSR（サーバーサイドレンダリング）ソリューションを提供する予定です。 このソリューションの原理は、まず次のページの要素の内容を取得し、現在のページのタグの内容と比較することで、動的な追加、削除、属性値の変更などを行うことです。 ただし、このSSRのソリューションは時間がかかる可能性があることに注意してください。なぜなら、このプロセスには複雑な要素の比較と変更が関与するからです。

ofa.jsは新興のフレームワークであり、また作者の余暇も限られているため、まだこのSSRのソリューションを完全に開発していません。しかし、将来的にofa.jsがより多くのユーザーに利用され、SSRのソリューションに対する強い需要が生じた場合、作者はこのソリューショを改善し続ける予定です。現時点では、作者はフレームワークの安定性と機能拡張に重点を置き、またユーザーのフィードバックと提案も歓迎します。これにより、将来的にユーザーのニーズにより良く応えることができます。