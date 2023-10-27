<template is="exm-article">
<a href="../../publics/examples/nested-page/demo.html" preview></a>
<a href="../../publics/examples/nested-page/page1.html"></a>
<a href="../../publics/examples/nested-page/page2.html"></a>
<a href="../../publics/examples/nested-page/layout.html" main></a>
</template>

# 嵌套ページ

複数のアプリケーションのUIは、階層化された複数のページで構成されています。例えば、共通のトップやサイドのナビゲーションが含まれます。現在のページの親ページを示すために、`parent`属性を使用することができます。

親ページの制作方法はコンポーネント開発に似ています。全体のフレームワークレイアウトを含むページを作成し、それから内部のサブページを`slot`に配置します。

この例では、`page1.html`と`page2.html`が子ページであり、`layout.html`が親ページであるネストページの作成方法を示しています。親ページの`layout.html`にはフレームワーク全体のレイアウトが含まれており、子ページは`parent`属性を使用して親ページを指し示し、親ページにネス���されるべきことを示しています。

ページを切り替えると、 `routerChange` イベントが発生します。ページの初期化およびページの切り替え時には、`app.current` プロパティを使用して現在のページのアドレスを取得し、ページ内でタブのアクティブ状態を修正することができます。