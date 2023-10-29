# x-fill

x-fill 컴포넌트를 사용하여 리스트 렌더링을 수행합니다. 배열 데이터를 채우기 위해 `value` 속성을 설정하세요.

`x-fill` 내부에서는 특수 변수 `$index`를 사용하여 현재 목록 항목의 인덱스를 대표하고, `$data`를 사용하여 목록 항목 자체의 데이터를 대표할 수 있습니다.

하지만 텍스트를 번역할 수 없습니다.

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

이 예제에서는 `x-fill` 컴포넌트를 사용하여 배열 `arr`을 렌더링하고 각 항목에서 인덱스와 데이터를 표시합니다.

템플릿 리스트 렌더링

你可以使用模板元素`template`并添加 `name` 属性，来定制组件内的临时模板。在 `x-fill` 使用时，使用 `name` 属性指定要填充的模板名。

아래는 템플릿 리스트 렌더링을 사용하는 예제입니다:

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

이 예제에서는 "easyLi"라는 템플릿을 만들고 `x-fill`을 사용하여 배열 `arr`의 데이터를 채우고 각 항목에서 인덱스와 데이터의 이름을 표시합니다.

## 중첩된 목록 렌더링

중첩 목록 렌더링시, 두 번째 계층부터 템플릿을 사용하여 채워야합니다. 이러한 설계는 다층 중첩 목록 렌더링 코드가 복잡해지는 것을 피하기 위한 것입니다.

아래는 중첩된 목록을 렌더링하는 방법을 보여주는 예제입니다.

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

이 예제에서는 배열 'arr'이 있습니다. 이 배열은 두 개의 객체를 포함하고 있습니다. 각 객체는 'name' 속성과 중첩된 하위 항목을 포함할 수 있는 'childs' 속성을 가지고 있습니다. 우리는 'x-fill'을 사용하여 목록을 채우고, 하위 항목을 렌더링하는 템플릿 "easyLi"를 사용합니다. 항목에 하위 항목이 있는 경우 'x-if'를 사용하여 중첩된 목록을 만듭니다.

## 재귀 목록 렌더링

모델 렌더링은 재귀 렌더링도 가능합니다. 이는 트리 구조의 목록을 구축하는 데 매우 유용합니다.

아래는 재귀적으로 목록을 렌더링하는 예제입니다.

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

이 예제에서 우리는 `arr`이라는 배열을 가지고 있습니다. 배열에는 두 개의 객체가 포함되어 있습니다. 각 객체는 `name` 속성과 중첩된 하위 항목을 포함 할 수있는 `childs` 속성이 있습니다. 우리는 리스트를 채우기 위해 `x-fill`을 사용하고, 하위 항목을 렌더링하기 위해 "easyLi" 템플릿을 사용합니다. 항목에 하위 항목이있는 경우 재귀적으로 하위 목록을 렌더링하기 위해 `x-fill`을 사용하여 재귀 목록 렌더링을 구현했습니다.

## replace-temp

때로는 셀렉트 또는 테이블에 목록을 렌더링하려고 할 때 브라우저가 `<x-fill>` 요소를 자동으로 제거하여 목록 렌더링을 제대로 수행할 수 없을 때가 있습니다. 이 경우, `replace-temp`를 사용하여 렌더링할 수 있습니다. `replace-temp`를 사용하는 방법은 `<template>` 태그 내에서 `is="replace-temp"`를 설정하고 이 템플릿을 브라우저가 자동으로 수정하는 요소 내에 배치하는 것입니다.

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

