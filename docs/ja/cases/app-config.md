<template is="exm-article">
  <a href="../../publics/examples/use-config/demo.html" preview></a>
  <a href="../../publics/examples/use-config/app-config.mjs" main></a>
  <a href="../../publics/examples/use-config/page1.html"></a>
  <a href="../../publics/examples/use-config/page2.html"></a>
</template>

# アプリパラメータの設定

o-appタグに外部モジュールを個別に設定することで、アプリのパラメータを設定できます。

これらのパラメータはESモジュールであり、以下のパラメータを設定することができます。

- **home**: アプリのホームページ、つまり初期ロード時に表示されるページ。
- **loading**: アプリのページをクリックして遷移する際、モジュールの読み込みが完了する前に表示されるロード中のコンテンツ。ローディングコンテンツとして文字列を返すことができます。
- **pageAnime**: ページの遷移時のアニメーション効果で、CSSスタイル属性を含むオブジェクトを使用します。
  - **current**: ページが現在のページである場合のスタイルを表します。
  - **next**: ページが入場前のスタイルを表します。
  - **previous**: ページが退出する際のスタイルを表します。

アプリのニーズに応じて、ホームページとローディングスタイル、ページ遷移のアニメーションなどのパラメータをカスタマイズすることで、アプリにより個性的な体験をもたらすことができます。
