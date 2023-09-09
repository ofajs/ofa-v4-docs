# Componente de Renderización de Plantilla

Además de poder utilizar la sintaxis de plantillas, ofa.js también proporciona componentes de renderización dedicados para su uso dentro de las plantillas, incluyendo componentes de renderización condicional y de rellenado.

## Componentes de Renderización Condicional

### Componente x-if

El componente `x-if` se utiliza para renderizar contenido de forma dinámica según condiciones. Acepta una propiedad `value` que determina si se renderizan sus elementos hijos o no. Si `value` es `true`, los elementos hijos se renderizan, de lo contrario no se renderizan.

A continuación se muestra un ejemplo de uso de `x-if` para renderizar diferentes contenidos según una condición:

```html
<div id="condition-container">
  <x-if :value="showContent">
    <div>Se renderiza porque showContent es verdadero.</div>
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

### Componente x-else

`x-if` se puede utilizar junto con `x-else` para alternar la renderización de condiciones.

A continuación se muestra un ejemplo de uso de `x-if` y `x-else` para alternar la renderización de contenido según diferentes condiciones:

```html
<div id="condition-container">
  <x-if :value="showContent">
    <div>Se renderiza porque showContent es verdadero.</div>
  </x-if>
  <x-else>
    <div>Se renderiza porque showContent es falso.</div>
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

### x-if + x-else-if + x-else 组件

`x-if` aún puede combinarse con `x-else-if` y `x-else` para lograr una representación condicional múltiple.

A continuación se muestra un ejemplo de uso de `x-if`, `x-else-if` y `x-else` para alternar el contenido de acuerdo a múltiples condiciones:

```html
<div id="condition-container">
  <x-if :value="condition === 'A'">
    <div>Se renderiza cuando la condición es A.</div>
  </x-if>
  <x-else-if :value="condition === 'B'">
    <div>Se renderiza cuando la condición es B.</div>
  </x-else-if>
  <x-else>
    <div>Se renderiza para otras condiciones.</div>
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

En el ejemplo anterior, se renderiza contenido diferente según el valor de `condition`, logrando así un cambio de representación condicional múltiple.

## Componente de plantilla: x-fill

El componente `x-fill` te permite llenar dinámicamente contenido en una plantilla, y puede generar contenido diferente según los valores de las propiedades del componente anfitrión. El componente `x-fill` utiliza la propiedad `name` para especificar la plantilla de llenado que se va a utilizar, y pasa los datos a la plantilla de llenado a través de la propiedad `value`.

### Ejemplo de llenado de cadenas de un arreglo con x-fill

A continuación se muestra un ejemplo de llenado de cadenas de un arreglo utilizando `x-fill`, y se llena contenido diferente mediante un bucle:

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

En el ejemplo anterior, `x-fill` utiliza una plantilla de relleno llamada `fillTemplate` y le pasa un objeto. En la plantilla de relleno se utiliza `{{ $data }}` para renderizar cada elemento del objeto, logrando así un relleno cíclico de diferentes contenidos de cadenas.

### Ejemplo de rellenado de `x-fill` con capacidad de autocompletado

`x-fill` también puede rellenar objetos con estructuras más complejas y es compatible con el relleno anidado.

A continuación se muestra un ejemplo de cómo utilizar `x-fill` para rellenar un objeto con capacidad de relleno anidado, mostrando cómo generar contenido anidado:

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

En el ejemplo anterior, `x-fill` utiliza una plantilla de llenado llamada `nestedFillTemplate` y pasa un objeto anidado complejo a ella. La plantilla de llenado utiliza `{{ $data.title }}` para renderizar el título del objeto, y también utiliza `x-fill` anidado para llenar el contenido de los elementos secundarios, logrando así una generación de contenido anidado.

### $data, $ele, $host en el significado de la plantilla

Dentro de la plantilla de llenado, puedes utilizar identificadores especiales para acceder a diferentes datos:

- `{{ $data }}`: representa los datos pasados a la plantilla de llenado, es decir, el valor del atributo `value`.
- `{{ $ele }}`: representa el elemento en el que se encuentra la plantilla de llenado y se utiliza para acceder a los atributos y estilos del elemento.
- `{{ $host }}`: representa la instancia del componente principal y se utiliza para acceder a los atributos y métodos del componente principal.

Estos identificadores especiales te ayudan a acceder y renderizar diferentes datos dinámicamente dentro de la plantilla de llenado. En el ejemplo, puedes ver cómo se utiliza `{{ $data.title }}` para acceder al título de los datos pasados y cómo se utiliza `{{ $host.num }}` para acceder a los atributos del componente principal.

