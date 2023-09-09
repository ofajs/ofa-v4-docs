# Ciclo de vida del componente

En ofa.js, el ciclo de vida del componente se activa en momentos específicos mediante funciones gancho. Estas funciones gancho te permiten controlar e interactuar de forma más precisa. ofa.js tiene cinco ganchos de ciclo de vida clave: `created`, `ready`, `watch`, `loaded`, `attached` y `detached`, que se activan en diferentes momentos.

## Ganchos de ciclo de vida

### created

El gancho del ciclo de vida `created` se activa cuando se crea el componente. En esta fase, los datos del componente aún no se han inicializado y el contenido de la plantilla no se ha renderizado. Puedes realizar algunas operaciones de inicialización en esta fase o preparar datos para su uso posterior.

### ready

El gancho del ciclo de vida `ready` se activa justo después de que se inicializan los datos y la plantilla del componente, lo que significa que el componente está listo. En esta fase, puedes acceder a los datos del componente y la plantilla ya ha sido renderizada, por lo que puedes realizar operaciones relacionadas con la interacción visual.

Si la plantilla del componente depende de otros componentes, esta fase no esperará a que se carguen las dependencias. Por lo tanto, es adecuado para agregar estilos de carga al componente, pero debes tener en cuenta que debes esperar a que las dependencias se carguen antes de realizar operaciones relacionadas.

### watch

Una vez que se completa la fase `ready`, las funciones de escucha asociadas al objeto `watch` se activan una vez. Luego, cuando cambie el valor de algún dato, se activará nuevamente la función de escucha asociada a la clave correspondiente.

### loaded

El gancho del ciclo de vida `loaded` se activa después de que se carguen todas las dependencias en la plantilla del componente. Esta fase garantiza que todas las dependencias se hayan cargado antes de renderizar el componente. Es el momento adecuado para eliminar los estilos de carga añadidos en la fase `ready`. 

### attached

`attached` lifecycle hook is triggered when the component is added to the document. At this stage, it is suitable for obtaining size-related information of the component's elements, performing data binding, and global event operations.

### detached

`detached` lifecycle hook is triggered when the component is removed from the document. At this stage, you can perform some cleanup operations, such as removing event listeners or releasing resources, to prevent memory leaks.

## Example demonstration

The following is an example that demonstrates how to use these lifecycle hooks:

```javascript
// lifecycle-demo.mjs
export const type = $.COMP;
export const tag = "lifecycle-demo";
export const temp = "./lifecycle-demo-template.html";

export default async function () {
  return {
    data: {
      count: 0,
    },
    watch: {
      count(count) {
        console.log("count: ", count);
      },
    },
    created() {
      console.log("created: Component created, data not initialized.");
    },
    ready() {
      console.log(
        "ready: Component is ready with initialized data and template."
      );

      this.on("click", () => {
        this.count++;
      });
    },
    attached() {
      console.log("attached: Component attached to DOM.");
    },
    detached() {
      console.log("detached: Component detached from DOM.");
    },
  };
}

```

```html
<!-- lifecycle-demo-template.html -->
<l-m src="../simple-button/simple-button.mjs"></l-m>
<simple-button>Click Me ({{count}})</simple-button>
```

```html
<!-- lifecycle-demo.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Lifecycle Demo</title>
    <script src="../ofa.js"></script>
    <l-m src="./lifecycle-demo.mjs"></l-m>
  </head>
  <body>
    <lifecycle-demo></lifecycle-demo>
  </body>
</html>
```

En el ejemplo anterior, hemos definido un componente llamado `lifecycle-demo` y hemos colocado un botón en su plantilla. Con diferentes ganchos de ciclo de vida, podemos observar registros de los distintos momentos en la consola.

## Diagrama de flujo del ciclo de vida

<img src="../../../publics/life-cycle.png" width="512" />
