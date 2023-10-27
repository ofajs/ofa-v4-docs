# 介绍

機能豊富なアプリケーションの開発に加えて、`ofa.js` はコンポーネントの開発にも利用できます。

`ofa.js` はアプリケーションを `o-app` コンポーネントとして統合するためのものであり、このタグを直接使用することで、アプリケーションを簡単かつ効率的に作成することができます。この方法により、アプリケーションの作成が簡単で効率的になります。

また、`ofa.js`公式は完全な**ルーティング**と**SSG（静的サイト生成）**のソリューションも提供しており、開発者がより健全なアプリケーションを構築するのを助けます。これらの機能により、開発プロセスを加速し、アプリケーションのロジックとユーザーエクスペリエ���スにより集中することができ、下層の詳細に過度に心配する必要はありません。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>app test demo</title>
    <script src=".././../ofa.js"></script>
    <style>
      html,
      body {
        margin: 0;
        padding: 0;
      }

      o-app {
        display: block;
        height: 100%;
      }
    </style>
  </head>
  <body>
    <o-app>
      <o-page src="./pages/hello.html"></o-page>
    </o-app>
  </body>
</html>
```

上記は、簡単なアプリケーションチュートリアルのコード例です。次に、アプリの開発プロセスを逐次説明します。