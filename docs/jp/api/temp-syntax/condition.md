# 条件レンダリング

条件レンダリングは、3つの条件コンポーネントを使用して実現されます: 

## x-if

`x-if` は主要な判断コンポーネントであり、`value` の値を設定する必要があります。`value` の条件が満たされると、包括された内容が表示されます。

## x-if-else

`x-if-else` 可以跟在 `x-if` 或 `x-if-else` 后面，需要设置 `value` 值。如果前面的条件组件不满足，且自身的 `value` 为 true，它会显示包裹的内容。

## x-else

`x-else`は`x-if`または`x-if-else`に続けて、最後に配置することができます。前の条件に一致しない場合、その要素の中身が表示されます。`value`の設定は必要ありません。

## 示例

<comp-viewer comp-name="text-render">

```html
<template component>
    <button on:click="count++">Add Count</button>
    <x-if :value="count % 3 === 0">
        <div style="color:red;">if => {{count}}</div>
    </x-if>
    <x-else-if :value="(count + 1) % 3 === 0">
        <div style="color:green;">else-if => {{count}}</div>
    </x-else-if>
    <x-else>
        <div style="color:blue;">else => {{count}}</div>
    </x-else>
    <script>
        export default {
            tag:"text-render",
            data:{
                count:0
            },
        };
    </script>
</template>
```

</comp-viewer>

例では、これらの条件付きレンダリングコンポーネントを使用して、 `count` の値に基づいて表示するコンテンツを選択しています。 `count` が3で割り切れる場合、 `x-if` 条件��真であるため、赤いテキストが表示されます。 `(count + 1)` が3で割り切れる場合、 `x-if-else` 条件が真であるため、緑のテキストが表示されます。それ以外の場合、青いテキストが表示されます。

