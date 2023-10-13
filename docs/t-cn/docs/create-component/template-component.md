# 模板渲染組件

除了能夠使用模板語法，ofa.js 還提供了專用於模板內部的渲染組件，包括條件渲染組件和填充渲染組件。

## 條件渲染組件

### x-if 組件

`x-if` 組件是用來根據條件動態渲染內容的組件。它接受一個 `value` 屬性，根據該屬性的值來判斷是否渲染其子元素。如果 `value` 為 `true`，則渲染子元素，否則不渲染。

以下是一個使用 `x-if` 的示例，用於根據條件渲染不同的內容：

```html
<div id="condition-container">
  <x-if :value="showContent">
    <div>I am rendered because showContent is true.</div>
  </x-if>
</div>
```

```javascript
// MyComponent.js
export const type = $.COMP;

export const data = {
  showContent: true,
};
```

### x-else 組件

`x-if` 可以與 `x-else` 配合使用，實現條件切換渲染。

以下是一個使用 `x-if` 和 `x-else` 的示例，根據不同的條件切換渲染的內容：

```html
<div id="condition-container">
  <x-if :value="showContent">
    <div>I am rendered because showContent is true.</div>
  </x-if>
  <x-else>
    <div>I am rendered because showContent is false.</div>
  </x-else>
</div>
```

```javascript
// MyComponent.js
export const type = $.COMP;

export const data = {
  showContent: false,
};
```

### x-if + x-else-if + x-else 組件

`x-if` 還可以與 `x-else-if` 和 `x-else` 組合使用，實現多條件的渲染。

以下是一個使用 `x-if`、`x-else-if` 和 `x-else` 的示例，根據多個條件切換渲染的內容：

```html
<div id="condition-container">
  <x-if :value="condition === 'A'">
    <div>I am rendered for condition A.</div>
  </x-if>
  <x-else-if :value="condition === 'B'">
    <div>I am rendered for condition B.</div>
  </x-else-if>
  <x-else>
    <div>I am rendered for other conditions.</div>
  </x-else>
</div>
```

```javascript
// MyComponent.js
export const type = $.COMP;

export const data = {
  condition: 'B',
};
```

在上述示例中，根據 `condition` 的不同值，會渲染不同的內容，實現了多條件切換渲染的效果。

## 模板組件之：x-fill 

`x-fill` 組件允許你在模板中動態填充內容，可以根據宿主組件的屬性值來生成不同的內容。`x-fill` 組件使用 `name` 屬性來指定要使用的填充模板，並通過 `value` 屬性傳遞數據給填充模板。

### x-fill 填充數組字符串的示例

以下是一個使用 `x-fill` 填充數組字符串的示例，通過循環填充不同的字符串內容：

```html
<div id="fill-container" style="padding: 16px; background-color: #eee">
  <x-fill name="fillTemplate" :value="['Item 1', 'Item 2', 'Item 3']"></x-fill>
</div>
<template name="fillTemplate">
  <div class="fill-item" style="margin: 10px; padding: 10px; border: red solid 1px">
    {{ $data }}
  </div>
</template>
```

在上述示例中，`x-fill` 使用名為 `fillTemplate` 的填充模板，並傳遞一個數組給它。填充模板中使用了 `{{ $data }}` 來渲染數組中的每個元素，從而實現了循環填充不同的字符串內容。

### x-fill 填充對象並且能自舉填充的示例

`x-fill` 還可以填充包含更復雜結構的對象，並且支持自嵌套填充。

以下是一個使用 `x-fill` 填充對象並且能自嵌套填充的示例，展示了如何生成嵌套的內容：

```html
<div id="fill-container" style="padding: 16px; background-color: #eee">
  <x-fill name="nestedFillTemplate" :value="nestedData"></x-fill>
</div>
<template name="nestedFillTemplate">
  <div class="nested-item" style="margin: 10px; padding: 10px; border: red solid 1px">
    {{ $data.title }}
    <x-fill name="nestedFillTemplate" :value="$data.children"></x-fill>
  </div>
</template>
```

```javascript
// MyComponent.js
export const type = $.COMP;

export const data = {
  nestedData: {
    title: "Parent",
    children: [
      {
        title: "Child 1",
        children: [
          { title: "Grandchild 1" },
          { title: "Grandchild 2" },
        ],
      },
      {
        title: "Child 2",
        children: [{ title: "Grandchild 3" }],
      },
    ],
  },
};
```

在上述示例中，`x-fill` 使用名為 `nestedFillTemplate` 的填充模板，並傳遞一個復雜的嵌套對象給它。填充模板中使用了 `{{ $data.title }}` 來渲染對象的標題，同時又使用了嵌套的 `x-fill` 來填充子項的內容，實現了嵌套的內容生成。

### $data、$ele、$host 在模板內的含義

在填充模板內，你可以使用特殊的標識符來訪問不同的數據：

- `{{ $data }}`：表示傳遞給填充模板的數據，即 `value` 屬性的值。
- `{{ $ele }}`：表示當前填充模板所在的元素，可以用於訪問元素的屬性和樣式。
- `{{ $host }}`：表示宿主組件的實例，可以用於訪問宿主組件的屬性和方法。

這些特殊標識符可以幫助你在填充模板內動態地訪問和渲染不同的數據。在示例中，你可以看到如何使用 `{{ $data.title }}` 來訪問傳遞的數據的標題，以及如何使用 `{{ $host.num }}` 來訪問宿主組件的屬性。