# class

Puedes cambiar rápidamente el nombre de la clase dentro de la plantilla utilizando la sintaxis de `class`. En `class:aaa="bbb"`, cuando la expresión `bbb` (o la propiedad `bbb` del componente en sí) sea `true`, se agregará la clase `aaa` al elemento objetivo.

Por favor, tenga en cuenta que el className no puede contener letras mayúsculas, por favor use "-" como separador.

A continuación se muestra un ejemplo que demuestra cómo utilizar la sintaxis `class` en una plantilla para cambiar el nombre de clase de un elemento.

<comp-viewer comp-name="test-class">

```html
<template component>
    <style>
        .color-red{
            color:red;
        }
        .color-blue{
            color:blue;
        }
    </style>
    <div 
      class:color-red="txt == 1" 
      class:color-blue="txt == 2" 
      on:click="switch1">Click Me</div>
    <script>
        export default {
          tag:"test-class",
          data:{
            txt:"1"
          },
          proto:{
            switch1(){
              this.txt = (this.txt == 1) ? 2 : 1;
            }
          }
        };
    </script>
</template>
```

</comp-viewer>

## 直接使用 class

Puedes usar el método `class` para ajustar directamente el nombre de clase de un elemento. En el siguiente ejemplo se muestra cómo usar el método `class` para agregar y eliminar nombres de clase dinámicamente:

<html-viewer>

```
<!-- Importe ofa.js en su proyecto -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<style>
    .color-red{
        color:red;
    }
    .color-blue{
        color:blue;
    }
</style>
<div id="target">I am target</div>

<script>
    setTimeout(()=>{
        $('#target').class('color-red',true);
    },500);
    setTimeout(()=>{
        $('#target').class('color-red',false);
    },1000);
    setTimeout(()=>{
        $('#target').class('color-blue',true);
    },1500);
</script>
```

</html-viewer>


En este ejemplo, primero agregamos la clase "color-red" al elemento utilizando el método `class`, luego la eliminamos después de un segundo, y posteriormente añadimos la clase "color-blue" al elemento después de medio segundo. Esto cambiará dinámicamente el estilo del elemento objetivo.

Recomendamos usar la propiedad [classList](../props/class-list.md) para manipular los nombres de clase, ya que es el método más común y estándar.