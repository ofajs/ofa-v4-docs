# refresh

Actualizar la vista de renderización del componente para actualizar los datos en ocasiones en las que no se han actualizado los datos en el componente.

<comp-viewer comp-name="custom-comp">

```html
<template component>
  <!-- Los cambios en los datos privados que comienzan con "_" no activarán la actualización de la página -->
  <div>{{_count}}</div>
  <button on:click="refresh()">Refrescar</button>
  <script>
    export default {
      tag: "custom-comp",
      data: {
        _count: 0,
      },
      attached() {
        this._timer = setInterval(() => {
          this._count++;
        }, 200);
      },
    };
  </script>
</template>
```

</comp-viewer>