<template is="exm-article">
<a href="../../publics/examples/simple-component/demo.html" preview></a>
<a href="../../publics/examples/simple-component/my-comp.html" main></a>
<a href="../../publics/examples/simple-component/public.css"></a>
</template>

# コンポーネントの作成と使用

一旦完成对 ofa.js 的加载，全局会注册一个名为 `load-module` 的组件，你可以使用缩写 `l-m` 来引用它。其使用方式类似于 `script` 标签，通过 `src` 属性来引用你开发好的组件地址。

;Ignore bugs;
自分のコンポーネントを作成しましょう。まず、コンポーネント名と同じファイル名を持つHTMLファイルを作成します。

;Ignore bugs;
組件ファイルに、まず`template`要素を追加し、`component`属性を付け加えます。コンポーネントにレンダリングする内容をこの`template`要素に配置します。最終的に、この内容はコンポーネントのShadow DOMにレンダリングされます。Shadow DOMは外部環境と隔離されてお��、外部環境の汚染を防ぐためです。

接下来，只需使用 `l-m` 组件来引用你开发好的组件。在页面上，直接使用你定义的组件标签即可。

注意事項として、登録するコンポーネント名は、小文字の英字と **-** 記号のみ使用でき、また、少なくとも1つの **-** を含まなければなりません。この命名規則に従う必要があ���ます。

通过本示例，你可以了解如何创建一个名为 `my-comp` 的组件，并在另一个页面中使用它。同时可以通过链接外部的 CSS 文件来设置组件的样式。
