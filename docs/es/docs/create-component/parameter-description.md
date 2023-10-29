# Explicación detallada de los parámetros de registro del componente

En ofa.js, puedes definir algunos parámetros de registro específicos en los módulos de componentes para configurar los componentes de manera más flexible. A continuación, se detalla cada parámetro de registro con ejemplos correspondientes.

## Parámetros base

El parámetro base son las configuraciones básicas para registrar un componente, que incluyen las siguientes propiedades:

### tag

`tag` representa el nombre del componente registrado. Cuando no se define el atributo `tag`, el nombre del componente registrado será igual al nombre del archivo.

Ejemplo:

```javascript
export const tag = "mi-boton"; // Registrar el nombre del componente como "mi-boton".
```

### data

`data` es un atributo de tipo objeto que se utiliza para generar componentes y agregar datos personalizados de forma predeterminada.

Ejemplo:

```javascript
export const data = {
  count: 0,
};
```

### attrs

`attrs` es un atributo de tipo objeto que también pertenece a `data`, pero estos datos se reflejarán en los atributos del elemento. Los cambios en los atributos también se actualizarán dinámicamente en los datos del componente. Cuando hay claves en mayúsculas, se convierten en nombres de propiedades con guiones en lugar de camelCase.

Ejemplo:

```javascript
export const attrs = {
  buttonText: "Click Me",
};
```

### proto

En los parámetros de registro del componente, puedes agregar un objeto `proto` para definir los métodos que se deben agregar al prototipo del componente. De esta manera, cuando se crea una instancia del componente, estos atributos y métodos se agregarán al prototipo de la instancia, lo que permitirá que todas las instancias accedan y compartan estos métodos.

```javascript

export const data = {
  count: 0,
};

export const proto = {
  sayHello() {
    alert('Hello Count:'+ this.count);
  },
};
```

### watch

El `watch` es un atributo de tipo objeto que se utiliza para escuchar los cambios en `data` y colocar la función de escucha aquí. Después de registrarse correctamente, el valor escuchado se ejecutará inmediatamente una vez.

- La función registrada en `watch` solo se disparará una vez durante un cambio en el hilo. Por lo tanto, aunque se modifique el valor de escucha varias veces en un hilo, solo se activará una vez.
- El primer parámetro es el valor actual.
- El segundo parámetro es un objeto que contiene el conjunto de datos `watchers`. Normalmente, en `watchers` solo habrá un objeto, desde el cual se puede obtener el `oldValue`. Cuando se cambia el valor de escucha varias veces en un solo hilo, este conjunto de datos registrará los cambios múltiples.

Ejemplo:

```javascript
export const data = {
  count: 0,
};
export const watch = {
  count(newValue, { watchers }) {
    let oldValue;
    if (watchers) {
      oldValue = watchers[0].oldValue;
    }
    console.log(`count changed from ${oldValue} to ${newValue}`);
  },
};
```

### temp

La mayoría de las veces, no necesitas establecer esta variable. Se utiliza principalmente en el modo separado para especificar la dirección de la plantilla de componente. Cuando `temp` no está definido, por defecto se cargará el archivo HTML con el mismo nombre que el módulo actual, que debería estar en el mismo directorio.

## Combinar variables por defecto

Puede escribir todas las variables de exportación en "default", esto hace que sea más conveniente escribir;

```javascript
export default {
  tag: "my-button",
  data: {
    count: 0,
  },
  attrs: {
    buttonText: "Click Me",
  },
  watch: {
    count(newValue, { watchers }) {
      let oldValue;
      if (watchers) {
        oldValue = watchers[0].oldValue;
      }
      console.log(`count changed from ${oldValue} to ${newValue}`);
    },
  },
  proto: {
    sayHello() {
      alert("Hello Count:" + this.count);
    },
  },
};
```

## Código de ejemplo

A continuación se muestra un código de ejemplo completo, que incluye la definición de parámetros básicos y plantillas de componentes.

<comp-viewer comp-name="my-button">

```
<my-button button-text="My Button"></my-button>
<!-- <script>
  $("my-button").on("click", () => {
    $("my-button").count++;
  });

  setTimeout(() => {
    $("my-button").sayHello();
  }, 1000);
</script> -->
```

```html
<template componente>
  <style>
    .shadow-button {
      background-color: #6b47fb;
      border: none;
      color: white;
      padding: 15px 32px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      border-radius: 10px;
      box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
      cursor: pointer;
    }
  </style>

  <!-- Utilizando la sintaxis de renderizado de plantillas, renderice los datos del componente en texto -->
  <button class="shadow-button" on:click="count++">{{buttonText}} - cuenta:{{count}}</button>

  <script>
    export default {
      etiqueta: "mi-botón",
      datos: {
        count: 0,
      },
      attrs: {
        buttonText: "Haz clic",
      },
      watch: {
        count(nuevoValor, { watchers }) {
          let viejoValor;
          if (watchers) {
            viejoValor = watchers[0].oldValue;
          }
          console.log(`la cuenta cambió de ${viejoValor} a ${nuevoValor}`);
        },
      },
      proto: {
        sayHello() {
          // alert("Hola cuenta:" + this.count);
        },
      },
    };
  </script>
</template>
```

</comp-viewer>

### default

Puedes usar funciones asíncronas para definir datos `default`, de modo que puedas retornar dinámicamente los parámetros de registro del componente.

Función `function` traerá un objeto que incluye `load`, `url` y `query`:

- El método `load` es una función de carga asíncrona, se utiliza de la misma manera que la carga asincrónica de `import`, y se puede cargar un módulo asincrónico utilizando `const data = await load(xxx)`.
- Los módulos cargados a través de `load` tienen el mismo efecto que los cargados a través de `load-module`. El método `load` es una versión funcional del componente `load-module`, y se puede consultar la documentación en [https://github.com/kirakiray/drill.js](https://github.com/kirakiray/drill.js) para obtener información específica sobre cómo usarlo.
- `url` es el nombre de archivo del módulo actual.
- `query` es un objeto resultante de convertir los parámetros de URL al cargar este módulo.

A continuación se muestra un ejemplo del uso de 'default':

```javascript
// button-component.mjs
export const tag = "my-button";
export const temp = "./my-button-template.html";

export default async function ({ load, url, query }) {
  console.log("url:", url); // Muestra el nombre de archivo del módulo actual
  console.log("query:", query); // Da salida al objeto convertido a partir del parámetro URL del módulo actual.

  const asyncData = await load("./async-data.mjs"); // Carga asíncrona de módulos mediante load
  console.log("asyncData:", asyncData); // Salida de datos de módulos cargados asíncronamente

  return {
    data: {
      count: 0,
    },
    attrs: {
      buttonText: "Click Me",
    },
    watch: {
      count(newValue, { watchers }) {
        let oldValue;
        if (watchers) {
          oldValue = watchers[0].oldValue;
        }
        console.log(`count changed from ${oldValue} to ${newValue}`);
      },
    },
    proto: {
      sayHello() {
        alert("Hello Count:" + this.count);
      },
    },
  };
}
```

En este ejemplo, mostramos cómo utilizar los parámetros de registro de ofa.js para personalizar el comportamiento del componente. Al configurar adecuadamente estos parámetros, puedes adaptarte mejor a las distintas necesidades de los componentes y lograr un desarrollo de componentes más flexible.