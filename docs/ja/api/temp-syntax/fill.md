# x-fill

`x-fill` コンポーネントを使用してリストをレンダリングすることができます。配列データを埋めるために `value` 属性を設定します。

`x-fill`の内部では、特殊変数`$index`は現在のリストアイテムのインデックスを表し、そして`$data`はリストアイテム自体のデータを表します。

下記は、`x-fill` を使用して配列をレンダリングする方法を示す例です：

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

この例では、`x-fill` コンポーネントを使用して配列 `arr` をレンダリングし、各リストアイテムにインデックスとデータを表示します。

## テンプレートリストのレンダリング

あなたは、`template`要素を使ってコンポーネント内の一時的なテンプレートをカスタマイズすることができます。`x-fill`を使う際には、`name`属性を使用して埋め込むテンプレート名を指定します。

以下は、テンプレートリストのレンダリング方法を示す例です：

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

この例では、"easyLi"という名前のテンプレートを作成し、`x-fill`を使用して配列`arr`のデータを埋め込み、各リスト項目にインックスとデータの名前を表示しています。

## 入れ子リストのレンダリング

ネストされたリストのレンダリングを行う場合、2番目の階層からは、テンプレートを使用して埋める必要があります。この設計は、複数階層のネストされたリストのレンダリングコードを複雑にするのを避けるためです。

以下は、ネストされたリストのレンダリング方法を示す例である：

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

この例では、配列 `arr` を持つ2つのオブジェクトがあります。各オブジェクトには `name` プロパティとネストされたサブアイテムを含む可能性がある `childs` プロパティがあります。リストを埋めるために `x-fill` を使用し、サブアイテムをテンプレート "easyLi" でレンダリグします。アイテムにサブアイテムがある場合は、`x-if` を使用してネストされたリストを作成します。

## 再帰的リスト・レンダリング

テンプレートのレンダリングでは、再帰的なレンダリングも行うことができます。これは、ツリー構造のリストを構築する際に非常に有用です。

下記は、再帰的なリストのレンダリングの例のデモです：

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

この例では、`arr`という配列があります。配列には2つのオブジェクトが含まれています。各オブジェクトには`name`プロパティと、ネストされたサブアイテムが含まれている可能性のある`childs`プロパティがあります。リストを埋めるために`x-fill`を使用し、子アイテムをテンプレート"easyLi"でレンダリングしています。アイテムにサブアイテムがある場合、再帰的にサブリストをレンダリングするために`x-fill`を使用しています。これにより、再帰的なリストのレンダリングが実現されています。

## replace-temp

時々、select や table にリストをレンダリングしようとすると、ブラウザが `<x-fill>` 要素を自動的に削除してしまい、リストのレンダリングがうまくいかないことがあります。この場合、`replace-temp` を使用してレンダリングする方法があります。`replace-temp` を使用する方法は、`<template>` タグで `is="replace-temp"` を設定し、このテンプレートをブラウザが自動的に修正する要素内に置くことです。

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

