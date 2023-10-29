# Compartir datos

ofa.js difiere de otros marcos de terceros al no utilizar un modelo de gestión de estado tradicional. El autor considera que las actualizaciones de estado deben ser imperceptibles, es decir, que los cambios en los datos deben desencadenar automáticamente actualizaciones de datos.

La librería ofa.js tiene una excelente capacidad para compartir datos. Sus instancias se desarrollan utilizando la biblioteca de intercambio de datos [Stanz](https://github.com/kirakiray/stanz). Los objetos en las instancias son sincronizables. Para lograr el intercambio de datos, simplemente crea un objeto Stanz independiente y haz que todos los componentes lo referencien directamente.

El siguiente ejemplo muestra cómo compartir datos:

```javascript
// data.mjs
export const data = $.stanz({
  val: "I am shared data",
});
```

```html
<!-- comp1.html -->
<template component>
  <style>
    :host {
      display: block;
      padding: 10px;
      margin: 10px;
      border: red solid 1px;
    }
  </style>
  <div>
    {{obj}}
    <br />
    comp1 =>
    <input type="text" sync:value="obj.val" />
  </div>
  <script>
    export const tag = "comp-one";

    export default async function ({ load }) {
      const { data } = await load("./data.mjs");

      return {
        data: {
          obj: {},
        },
        attached() {
          this.obj = data;
        },
        detached() {
          this.obj = null;
        },
      };
    }
  </script>
</template>
```

```html
<!-- comp2.html -->
<template component>
  <style>
    :host {
      display: block;
      padding: 10px;
      margin: 5px;
      border: green solid 1px;
    }
  </style>
  <div>
    <span style="color: #5e5c5c; font-size: 12px;">comp2</span>=> {{obj.val}}
  </div>
  <script>
    export const tag = "comp-two";

    export default async function ({ load }) {
      const { data } = await load("./data.mjs");

      return {
        data: {
          obj: {},
        },
        attached() {
          this.obj = data;
        },
        detached() {
          this.obj = null;
        },
      };
    }
  </script>
</template>
```

```html
<!-- demo.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>data sharing</title>
    <script src="ofa.js"></script>
    <l-m src="./comp1.html"></l-m>
    <l-m src="./comp2.html"></l-m>
  </head>
  <body>
    <comp-one></comp-one>
    <comp-two></comp-two>
    <comp-two></comp-two>
  </body>
</html>
```

En el ejemplo anterior, los dos componentes escriben datos en sí mismos durante el ciclo de vida `attached`. Luego, el `objeto` del componente se convierte en datos compartidos. Después del ciclo de vida `detached`, los datos compartidos anteriores se establecen como `null` para garantizar que se recuperen los datos.

## Nota:

Dado que los datos se comparten, asegúrate de liberar los datos en el momento adecuado para evitar pérdidas de memoria.

```html
<template component>
  comp1 =>
  <input type="text" sync:value="obj.val" />
  <script>
    export const tag = "comp-three";

    export default async function ({ load }) {
      const { data } = await load("./data.mjs");

      return {
        data: {
        //   obj: data // ❌ Esta operación es incorrecta, establece los datos directamente y no puede recuperar la memoria provocando fugas
          obj: {},
        },
        ready() {
          this.obj = data; // ❌ Establecerlo durante el ciclo de vida listo hace que sea imposible determinar cuándo se borrará, y puede dar lugar a fugas de memoria. La forma más segura de hacer esto es establecerlo durante el ciclo de vida adjunto y eliminarlo después de desacoplado.
        },
      };
    }
  </script>
</template>
```