# shadow

shadow プロパティを使用すると、要素のシャドウルートノードのインスタンスを取得できます。

<comp-viewer comp-name="test-shadow">

```html
<template component>
    <ul>
        <li>item 1</li>
        <li id="target">item 2</li>
        <li>item 3</li>
    </ul>
    <script>
        export default {
            tag:"test-shadow",
            ready(){
                setTimeout(()=>{
                    this.shadow.$("#target").text = 'change target';
                },500);
            }
        };
    </script>
</template>
```

</comp-viewer>

注意すべきは、テンプレートの構文を持つ要素の中で直接影のノード内の要素を変更しないことです。これにより、操作の一貫性とメンテナンス性が保たれます。

## 外部からコンポーネントのシャドウ要素内の要素インスタンスを取得する

あなたはカスタム要素のインスタンスを外部から取得し、`shadow`プロパティを介してシャドウドム内の要素にアクセスすることもできます。以下のようになります：

```javascript
$("test-shadow").shadow.$('selector').method(xxx);
```