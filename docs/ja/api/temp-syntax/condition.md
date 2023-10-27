# 条件レンダリング

条件レンダリングは、3つの条件コンポーネントによって実現されます：

## x-if

`x-if` は主要な条件文コンポーネントであり、`value` の値を設定する必要があります。`value` の条件が満たされる場合、それに包まれた内容が表示されます。

## x-if-else

`x-if-else` は `x-if` または `x-if-else` の後に続けることができ、`value` 値を設定する必要があります。前の条件のコンポーネントが満たされず、自分自身の `value` が true の場合、包括している内容が表示されます。

## x-else

`x-else` は `x-if` または `x-if-else` の後に続けることができ、最後に配置されます。前の条件がすべて満たされない場合、自身の内容が表示されます。`value` の設定は必要ありません。

## サンプル

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

在示例中，这些条件渲染组件根据 `count` 的值选择要显示的内容。当 `count` 能被 3 整除时，`x-if` 条件满足，显示红色的文本；当 `(count + 1)` 能被 3 整除时，`x-if-else` 条件满足，显示绿色的文本；否则，显示蓝色的文本。

