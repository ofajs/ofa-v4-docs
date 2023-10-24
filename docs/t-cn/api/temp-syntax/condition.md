# 條件渲染

條件渲染是通過三個條件組件來實現的：

## x-if

`x-if` 是主要的判斷組件，需要設置 `value` 值。如果 `value` 的條件滿足，它會顯示包裹的內容。

## x-if-else

`x-if-else` 可以跟在 `x-if` 或 `x-if-else` 後面，需要設置 `value` 值。如果前面的條件組件不滿足，且自身的 `value` 為 true，它會顯示包裹的內容。

## x-else

`x-else` 可以跟在 `x-if` 或 `x-if-else` 後面，放在最後。如果前面的條件都不滿足，它會顯示自身包裹的內容。不需要設置 `value` 值。

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

在示例中，使用了這些條件渲染組件來根據 `count` 的值選擇要顯示的內容。當 `count` 能被 3 整除時，`x-if` 條件滿足，顯示紅色的文本；當 `(count + 1)` 能被 3 整除時，`x-if-else` 條件滿足，顯示綠色的文本；否則，顯示藍色的文本。

