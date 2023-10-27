<template is="exm-article">
<a href="../../publics/examples/use-scsr/page1.html" main demo preview></a>
<a href="../../publics/examples/use-scsr/page2.html"></a>
<a href="../../publics/examples/use-scsr/public.css"></a>
<a href="../../publics/examples/use-scsr/app-config.mjs"></a>
</template>

# 使用 SCSR 方案

この例では、<span style='font-family: "iconfont"'>&#xe7cb;</span> ボタンをクリックして、新しいページで開いて試してください。

SCSRの完全な名前はStatic Client-Side Renderingです。これは、CSR（Client-Side Rendering）の一種であり、CSRのユーザー体験を維持しながら、ページを静的な状態で検索エンジンにクロールさせることができます。

現在のウェブサイトは、SCSRプランで構築されています。

SCSRは、単一ファイルモードのページモジュールを直接実行し、`o-page`タグを使用せずにページ上でのレンダリングを実現します。具体的には、ページモジュールのテンプレートコードを`o-app`内に直接ネストします。

## 注意事項

すべてのSCSRプランを採用しているページについて、タイトル、メタディスクリプション、キーワードなどのページの説明的なコンテンツとページテンプレート以外の参照されるリソースは一貫している必要があります。これにより、ページの遷移や更新後のユーザーエクペリエンスが一貫したものになります。