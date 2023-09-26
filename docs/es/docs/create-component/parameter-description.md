# Exploración de los parámetros de registro del componente

En ofa.js, puedes definir algunos parámetros de registro específicos en el módulo de componente para configurar el componente de manera más flexible. A continuación, se explica detalladamente cada parámetro de registro con ejemplos correspondientes.

## Parámetros básicos

Los parámetros básicos son la configuración más básica para registrar un componente e incluyen las siguientes propiedades:

### Identificador del componente

El módulo del componente debe tener `export const type = $.COMP` para identificarlo como un módulo de componente.

Ejemplo:

```javascript
// button-component.mjs
export const type = $.COMP;
```

### tag

`tag` represents the registered component name. When the `tag` attribute is not defined, the registered component name remains the same as the file name.

Ejemplo:

```javascript
// button-component.mjs
export const type = $.COMP;
export const tag = "my-button"; // Register the component name as 'my-button'
```

### temp

`temp` is a string type attribute used to define the address of the component template. When `temp` is not defined, the default is to load the HTML file with the same name as the component in the same directory as the current module.

Ejemplo:

```javascript
// button-component.mjs
export const type = $.COMP;
export const temp = "./my-button-template.html"; // Specify the address of the component template as './my-button-template.html'
```

### data

`data` is an object type attribute used to generate custom data that is automatically added after the component is created.

Ejemplo:

```javascript
// button-component.mjs
export const type = $.COMP;
export const data = {
  count: 0,
};
```

### attrs

`attrs` is an object type attribute, also part of `data`, but this data is reflected in the attributes of the element. Changes to the attributes will also dynamically change the `data` of the component. When there is a capitalized key, it will be converted to `-` camel case in the component attribute.

Ejemplo:

```javascript
// button-component.mjs
export const type = $.COMP;
export const attrs = {
  buttonText: "Click Me",
};
```

### proto

In the registration parameters of the component, you can add a `proto` object to define the methods that need to be added to the component prototype. In this way, when creating instances of the component, these attributes and methods will be added to the prototype of the instance, so that all instances can access and share these methods.

```javascript
// MyComponent.js
export const type = $.COMP;

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

`watch` es una propiedad de tipo objeto que se utiliza para escuchar cambios en `data`. La función de escucha se registra aquí. Una vez registrado con éxito, el valor de escucha se ejecutará inmediatamente una vez.

- Las funciones registradas con `watch` solo se activarán una vez durante un cambio de hilo único. Por lo tanto, incluso si el valor de escucha se modifica varias veces en un hilo único, solo se activará una vez.
- El primer parámetro es el valor actual.
- El segundo parámetro es un objeto que contendrá un conjunto de datos llamado `watchers`. En la mayoría de los casos, solo habrá un objeto en `watchers`, donde se puede obtener el `oldValue` de este objeto. Si el valor de escucha ha sido modificado varias veces en un hilo único, este conjunto de datos registrará varios cambios.

Ejemplo:

```javascript
// button-component.mjs
export const type = $.COMP;
export const data = {
  count: 0,
};
export const watch = {
  count(newValue, { watchers }) {
    let oldValue;
    if (watchers) {
      oldValue = watchers[0].oldValue;
    }
    console.log(`count ha cambiado de ${oldValue} a ${newValue}`);
  },
};
```

## Ejemplo de código

A continuación se muestra un ejemplo de código completo, que incluye la definición de los parámetros básicos y la plantilla del componente.

```javascript
// button-component.mjs
export const type = $.COMP;
export const tag = "my-button";
export const temp = "./my-button-template.html";

export const attrs = {
  buttonText: "Haz clic",
};

export const data = {
  count: 0,
};

export const watch = {
  count(newValue, { watchers }) {
    let oldValue;
    if (watchers) {
      oldValue = watchers[0].oldValue;
    }
    console.log(`count ha cambiado de ${oldValue} a ${newValue}`);
  },
};

export const proto = {
  sayHello() {
    alert("Hola Contador:" + this.count);
  },
};
```

```html
<!-- my-button-template.html -->
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

<!-- Utilizando sintaxis de plantilla para renderear los datos del componente a texto -->
<button class="shadow-button">{{buttonText}} - cuenta:{{count}}</button>
```

```html
<!-- demo.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>my-button</title>
    <script src="../ofa.js"></script>
    <l-m src="./button-component.mjs"></l-m>
  </head>
  <body>
    <my-button button-text="Mi Botón"></my-button>
    <script>
      $("my-button").on("click", () => {
        $("my-button").count++;
      });

      setTimeout(() => {
        $("my-button").sayHello();
      }, 1000);
    </script>
  </body>
</html>

```

### default

Puedes usar una función asíncrona para definir los datos 'default' y así retornar de forma dinámica los parámetros de registro del componente.

La función 'function' traerá un objeto que contiene

las propiedades 'load', 'url' y 'query':

- El método 'load' es una función de carga asíncrona, se utiliza de manera similar a la carga asíncrona 'import', se puede cargar un módulo asíncrono mediante 'const data = await load(xxx)'.
- Los módulos cargados a través de 'load' tienen el mismo efecto que los cargados a través de 'load-module'. El método 'load' es una función del componente 'load-module', se puede consultar el método de uso específico en la documentación de [https://github.com/kirakiray/drill.js](https://github.com/kirakiray/drill.js).
- 'url' es el nombre de archivo del módulo actual.
- 'query' es un objeto que contiene los parámetros de URL al cargar este módulo.

A continuación se muestra un ejemplo de uso de 'default':

```javascript
// button-component.mjs
export const type = $.COMP; // Esto debe definirse primero y no puede ser un parámetro dinámico
export const tag = "my-button";
export const temp = "./my-button-template.html";

export default async function ({ load, url, query }) {
  console.log("url:", url); // Imprime el nombre de archivo del módulo actual
  console.log("query:", query); // Imprime el objeto convertido de los parámetros de URL del módulo actual

  const asyncData = await load("./async-data.mjs"); // Carga de forma asíncrona un módulo usando load
  console.log("asyncData:", asyncData); // Imprime los datos del módulo cargado de forma asíncrona

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

En este ejemplo, demostramos cómo utilizar los parámetros de registro de ofa.js para personalizar el comportamiento de los componentes. Al configurar correctamente estos parámetros, puedes adaptarte mejor a diferentes necesidades de los componentes y lograr un desarrollo de componentes más flexible.

Escribe un documento de uso de proto para los parámetros de registro de componentes.

