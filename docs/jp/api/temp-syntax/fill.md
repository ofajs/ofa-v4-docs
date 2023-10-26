# x-fill

`x-fill`コンポーネントを使用してリストのレンダリングを行います。配列のデータを埋めるには、`value`属性を設定します。

`x-fill`内では、特殊な変数`$index`を使用して現在のリストアイテムのインデックスを表し、`$data`を使用してリストアイテム自体のデータを表すことができます。

以下は、 `x-fill` を使用して配列をレンダリングする方法の例です：

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

在这个示例中，我们将 `x-fill` 组件用于渲染数组 `arr`，并在每个列表项中显示索引和数据。

## 模板列表渲染

你可以使用模板元素`template`并添加 `name` 属性，来定制组件内的临时模板。在 `x-fill` 使用时，使用 `name` 属性指定要填充的模板名。

以下は、テンプレートリストレンダリングの使用方法を示す例です。

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

在这个示例中，我们创建了一个名为 "easyLi" 的模板，然后使用 `x-fill` 填充了数组 `arr` 的数据，并在每个列表项中显示索引和数据的名称。

## 嵌套列表渲染

ネストされたリストをレンダリングする際には、第2階層からテンプレートを使用して埋める必要があります。この設計は、複数の階層にわたるリストのレンダリ��グコードが複雑になるのを避けるためです。

以下は、ネストされたリストのレンダリング方法の例です：

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

在这个示例中，我们有一个数组 `arr`，其中包含了两个对象。每个对象都有一个 `name` 属性，以及一个可能包含嵌套子项的 `childs` 属性。我们使用 `x-fill` 来填充列表，并使用模板 `"easyLi"` 渲染子项。如果某项具有子项，我们使用 `x-if` 来检查并创建嵌套的列表。

## 递归列表渲染

テンプレートのレンダリングは再帰的なレンダリングも可能であり、それはツリー状のリストを構築するために非常に便利です。

以下は、再帰的なリストレンダリングのデモの例です：

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

この例では、`arr`という配列があります。この配列には2つのオブジェクトが含まれています。それぞれのオブジェクトには`name`属性と、ネストされた子アイテムが含まれる可能���のある`childs`属性があります。リストを`x-fill`で埋め、サブアイテムをテンプレート"easyLi"でレンダリングします。アイテムにサブアイテムがある場合、再帰的にサブリストをレンダリングするために`x-fill`を使用し、リストを再帰的にレンダリングすることができます。

## replace-temp

有时候，当我们尝试列表渲染到 select 或 table 内，浏览器可能会自动移除 `<x-fill>` 元素，导致无法正常进行列表渲染。在这种情况下，可以使用 `replace-temp` 的方式进行渲染。使用 `replace-temp` 的方法是，在一个 `<template>` 标签中设置 `is="replace-temp"`，并将这个模板放在浏览器会自动修正的元素内。

<comp-viewer comp-name="text-render">

```html
<template component>
  <select>
    <template is="replace-temp">
      <x-fill :value="arr">
        <option>{{$data}}</option>
      </x-fill>
    </template>
  </select>
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

