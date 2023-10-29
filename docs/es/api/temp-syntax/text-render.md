# Renderizado de texto

Puede usar la forma de dos llaves envueltas `{{xxx}}` en la plantilla para renderizar el texto, donde `xxx` es una propiedad del componente o de la página en sí. Esto le permite renderizar directamente el valor de la propiedad en la página.

A continuación se muestra un ejemplo que demuestra cómo renderizar texto en una plantilla.

<comp-viewer comp-name="text-render">

```html
<template component>
    render test: {{txt}}
    <script>
        export default {
            tag:"text-render",
            data:{
                txt:"I am txt"
            },
        };
    </script>
</template>
```

</comp-viewer>

En este ejemplo, `{{txt}}` será reemplazado por el valor de la propiedad `txt` y se mostrará en la página.