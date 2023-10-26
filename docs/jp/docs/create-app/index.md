# 紹介

除了可以开发组件，`ofa.js` 还可以用于开发功能完整的应用程序。

`ofa.js`は、アプリケーションを `o-app` コンポーネントとして統合し、このタグを直接使用することで、アプリケーションを迅速に作成できます。この方法により、アプリケーシ��ンの作成が簡単で効率的になります。

また、`ofa.js`の公式では、完全な**ルーティング**と**SSG（静的ページ生成）**のソリューションも提供されており、開発者がより堅牢なアプリケーションを構築するのに役立ちます。これらの機能により、開発プロセスが加速し、アプリケーションのロジックとユーザ���エクスペリエンスに集中することができます。低レベルの詳細を過度に心配する必要はありません。

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

上記は簡単なアプリケーションチュートリアルのコード例です。次に、アプリの開発プロセスを段階的に説明します。