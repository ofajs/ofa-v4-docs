# Ciclo de vida de los componentes

En ofa.js, el ciclo de vida de los componentes se activa mediante funciones de enganche en momentos específicos. Estas funciones de enganche te permiten controlar e interactuar de forma más precisa. ofa.js tiene cinco funciones de enganche clave en su ciclo de vida: `created`, `ready`, `watch`, `loaded`, `attached` y `detached`, que se activan en diferentes momentos.

## Hooks de ciclo de vida

### created

`created` El gancho de ciclo de vida se activa cuando se crea el componente. En esta etapa, los datos del componente aún no se han inicializado y el contenido de la plantilla no se ha renderizado. Puedes realizar algunas operaciones de inicialización en esta etapa, o preparar datos que se utilizarán en etapas posteriores.

### ready

El gancho de ciclo de vida `ready` se disparará después de que los datos y la plantilla del componente hayan sido inicializados, lo cual indica que el componente está listo. Durante esta etapa, puedes acceder a los datos del componente y la plantilla ya ha sido renderizada, por lo que puedes realizar algunas operaciones relacionadas con la interacción de la interfaz.

Si la plantilla de componente depende de otros componentes, esta etapa no esperará a que se carguen las dependencias. Por lo tanto, esta etapa es adecuada para agregar estilos de carga a los componentes, pero ten en cuenta que debes esperar a que las dependencias se carguen antes de ejecutar las operaciones relacionadas.

### watch

Una vez que se complete la etapa "ready", se activará la función de escucha en el objeto "watch" asociado una vez. Luego, cuando ocurra un cambio en algún valor de los datos, se volverá a activar la función de escucha correspondiente a la clave (key) respectiva.

### loaded

`loaded` es un gancho de ciclo de vida que se activa después de que se hayan cargado todas las dependencias en la plantilla del componente. Esta etapa garantiza que todas las dependencias se hayan cargado antes de renderizar el componente. En este momento, es apropiado eliminar los estilos de carga añadidos en la etapa `ready`.

### attached

El gancho de ciclo de vida `attached` se activa cuando el componente se agrega al documento. En esta etapa, es adecuado obtener información relacionada con el tamaño de los elementos internos del componente, realizar la vinculación de datos y las operaciones de eventos globales.

### detached

El gancho de vida `detached` se activa cuando el componente es removido del documento. En esta etapa, puedes realizar algunas operaciones de limpieza, como cancelar eventos o liberar recursos para evitar fugas de memoria.

## Demostración de ejemplo

以下是一个示例，展示了如何使用这些生命周期钩子：

```javascript
export default {
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
```

## Diagrama del ciclo de vida

<img src="../../../publics/life-cycle.png" width="512" />
