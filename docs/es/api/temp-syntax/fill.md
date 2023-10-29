# x-fill

Utilice el componente `x-fill` para renderizar listas; configure el atributo `value` para completar los datos del array.

En `x-fill`, se pueden usar las variables especiales `$index` para representar el índice del elemento de la lista actual y `$data` para representar los datos del elemento de la lista en sí.

A continuación se muestra un ejemplo que muestra cómo usar `x-fill` para representar una matriz:

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

En este ejemplo, usamos el componente `x-fill` para representar el arreglo `arr` y mostrar el índice y los datos en cada elemento de la lista.

## Lista de plantillas para representar

Puedes usar el elemento de plantilla `template` y agregar el atributo `name` para personalizar las plantillas temporales dentro del componente. Al utilizar `x-fill`, usa el atributo `name` para especificar el nombre de la plantilla que se debe llenar.

A continuación se muestra un ejemplo que demuestra cómo usar la representación de listas de plantillas:

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

En este ejemplo, creamos una plantilla llamada "easyLi" y luego llenamos los datos del arreglo `arr` usando `x-fill`, mostrando el índice y el nombre de los datos en cada elemento de la lista.

## Representación de listas anidadas

Cuando se realiza una representación de listas anidadas, a partir del segundo nivel, se debe usar una plantilla para llenarla. Este diseño se realiza con el fin de evitar que el código de representación de listas anidadas de múltiples niveles se vuelva complejo.

A continuación se muestra un ejemplo que demuestra cómo realizar una representación de listas anidadas:

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

En este ejemplo, tenemos un arreglo `arr` que contiene dos objetos. Cada objeto tiene una propiedad `name` y una propiedad `childs` que puede contener elementos anidados. Utilizamos `x-fill` para llenar la lista y `easyLi` como plantilla para renderizar los elementos. Si un elemento tiene elementos hijos, utilizamos `x-if` para verificar y crear una lista anidada.

## Recursión en la presentación de listas

La renderización de plantillas también puede hacerse de forma recursiva, lo cual es muy útil para construir listas con estructura de árbol.

A continuación se muestra un ejemplo de cómo realizar un renderizado de lista recursiva:

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

En este ejemplo, tenemos un array `arr` que contiene dos objetos. Cada objeto tiene una propiedad `name` y una propiedad `childs` que puede contener elementos anidados. Utilizamos `x-fill` para rellenar la lista y renderizamos los elementos hijos utilizando la plantilla "easyLi". Si un elemento tiene elementos hijos, utilizamos `x-fill` para renderizar de forma recursiva la lista secundaria, logrando así renderizar una lista recursiva.

## replace-temp

A veces, cuando intentamos renderizar listas en un elemento select o una tabla, el navegador puede eliminar automáticamente el elemento `<x-fill>`, lo que impide que se realice correctamente el renderizado de la lista. En este caso, se puede usar el método de `replace-temp` para realizar el renderizado. El método consiste en establecer `is="replace-temp"` en una etiqueta `<template>` y colocar esta plantilla dentro de un elemento que el navegador corrija automáticamente.

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

