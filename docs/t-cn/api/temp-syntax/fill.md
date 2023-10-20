# x-fill

使用 `x-fill` 組件來進行列表渲染；設置 `value` 屬性來填充數組數據。

在 `x-fill` 內部，可以使用特殊變量 `$index` 代表當前列表項的索引，以及 `$data` 代表列表項本身的數據。

下面是一個示例，演示了如何使用 `x-fill` 渲染一個數組：

<comp-viewer comp-name="text-render">

```html
<template component>
  <ul>
    <x-fill :value="arr">
      <li>{{$index}} - {{$data}}</li>
    </x-fill>
  </ul>
  <script>
    export default {
      tag: "text-render",
      data: {
        arr: ["pen", "apple", "pineapple"],
      },
    };
  </script>
</template>
```

</comp-viewer>

在這個示例中，我們將 `x-fill` 組件用於渲染數組 `arr`，並在每個列表項中顯示索引和數據。

## 模板列表渲染

你可以使用模板元素`template`並添加 `name` 屬性，來定制組件內的臨時模板。在 `x-fill` 使用時，使用 `name` 屬性指定要填充的模板名。

下面是一個示例，演示了如何使用模板列表渲染：

<comp-viewer comp-name="text-render">

```html
<template component>
  <ul>
    <x-fill :value="arr" name="easyLi"></x-fill>
  </ul>
  <template name="easyLi">
    <li>{{$index}} - {{$data}}</li>
  </template>
  <script>
    export default {
      tag: "text-render",
      data: {
        arr: [{ name: "apple" }, { name: "pen" }, { name: "pineapple" }],
      },
    };
  </script>
</template>
```

</comp-viewer>

在這個示例中，我們創建了一個名為 "easyLi" 的模板，然後使用 `x-fill` 填充了數組 `arr` 的數據，並在每個列表項中顯示索引和數據的名稱。

## 嵌套列表渲染

在進行嵌套列表渲染時，從第二層開始，必須使用模板來填充。這樣的設計是為了避免多層嵌套的列表渲染代碼變得復雜。

下面是一個示例，演示了如何進行嵌套列表渲染：

<comp-viewer comp-name="fill-three">

```html
<template component>
  <ul>
    <x-fill :value="arr">
      <li>{{$index}} - {{$data.name}}</li>
      <x-if :value="$data.childs">
        <ol>
            <x-fill :value="$data.childs" name="easyLi"></x-fill>
        </ol>
      </x-if>
    </x-fill>
  </ul>
  <template name="easyLi">
    <li>{{$data}}</li>
  </template>
  <script>
    export default {
      tag: "fill-three",
      data: {
        arr: [
          {
            name: "apple",
          },
          {
            name: "pen",
            childs: [
              { name: "pencil" },
              {
                name: "ballpoint pen",
              },
            ],
          },
        ],
      },
    };
  </script>
</template>
```

</comp-viewer>

在這個示例中，我們有一個數組 `arr`，其中包含了兩個對象。每個對象都有一個 `name` 屬性，以及一個可能包含嵌套子項的 `childs` 屬性。我們使用 `x-fill` 來填充列表，並使用模板 `"easyLi"` 渲染子項。如果某項具有子項，我們使用 `x-if` 來檢查並創建嵌套的列表。

## 遞歸列表渲染

模板渲染還可以進行遞歸渲染，這對於構建樹形結構的列表非常有用。

下面是一個演示如何進行遞歸列表渲染的示例：

<comp-viewer comp-name="fill-four">

```html
<template component>
  <ul>
    <x-fill :value="arr" name="easyLi"></x-fill>
  </ul>
  <template name="easyLi">
    <li>
      {{$index}} - {{$data.name}}
      <ul>
        <x-fill :value="$data.childs" name="easyLi"></x-fill>
      </ul>
    </li>
  </template>
  <script>
    export default {
      tag: "fill-four",
      data: {
        arr: [
          {
            name: "apple",
          },
          {
            name: "pen",
            childs: [
              { name: "pencil" },
              {
                name: "ballpoint pen",
              },
            ],
          },
        ],
      },
    };
  </script>
</template>
```

</comp-viewer>

在這個示例中，我們有一個數組 `arr`，其中包含了兩個對象。每個對象都有一個 `name` 屬性，以及一個可能包含嵌套子項的 `childs` 屬性。我們使用 `x-fill` 來填充列表，並使用模板 `"easyLi"` 渲染子項。如果某項具有子項，我們使用 `x-fill` 來遞歸渲染子列表，實現了遞歸列表渲染。