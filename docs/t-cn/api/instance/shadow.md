# shadow

使用 `shadow` 屬性，你可以獲取元素的影子根節點實例。

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

需要注意的是，避免在具有模板語法的元素內直接修改影子節點內的元素，以確保操作的一致性和可維護性。

## 從外部獲取組件影子元素內的元素實例

您還可以從外部獲取自定義元素實例，然後通過 `shadow` 屬性訪問影子節點內的元素，如下所示：

```javascript
$("test-shadow").shadow.$('selector').method(xxx);
```