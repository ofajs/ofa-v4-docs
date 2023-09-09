# Compartir datos

ofa.js, a diferencia de otros frameworks de terceros, no adopta el modelo de gestión de estado tradicional. El autor considera que las actualizaciones de estado deberían ser imperceptibles, es decir, los cambios en los datos deberían provocar automáticamente una actualización de los mismos.

ofa.js tiene innata la capacidad de compartir datos de forma excelente, su instancia se ha desarrollado en base a la librería de compartición de datos [Stanz](https://github.com/kirakiray/stanz). Los objetos en la instancia son sincronizables. Si se desea compartir datos, solo es necesario crear un objeto Stanz independiente y luego hacer que todos los componentes lo referencien directamente.

A continuación, se muestra un ejemplo de cómo compartir datos:

```javascript
// data.mjs
export const data = $.stanz({
  val: "Comparto datos",
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

En el ejemplo anterior, dos componentes escriben datos en sí mismos durante el ciclo de vida 'attached'. Luego, el objeto 'obj' del componente se convierte en datos compartidos. Después del ciclo de vida 'detached', se establecen los datos compartidos previos como 'null' para asegurar que los datos se recojan. 

## Consideraciones

Dado que los datos son compartidos, es importante asegurarse de recolectar los datos en el momento adecuado para evitar fugas de memoria.

```html
<template componente>
  comp1 =>
  <input type="text" sync:value="obj.val" />
  <script>
    export const tag = "comp-three";

    export default async function ({ load }) {
      const { data } = await load("./data.mjs");

      return {
        data: {
        //   obj: data // ❌ This operation is incorrect, directly setting data cannot be garbage collected
          obj: {},
        },
        ready() {
          this.obj = data; // ❌ Setting in the ready lifecycle, it is uncertain when it will be cleared and may cause memory leaks. The safest method is to set it in the attached lifecycle and remove it after detached
        },
      };
    }
  </script>
</template>
```

