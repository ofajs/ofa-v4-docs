# extend

extend es un método de alto nivel que se utiliza para extender las propiedades o métodos de una instancia;

<html-viewer>

```html
<!-- Importa ofa.js a tu proyecto -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<ul>
    <li>I am 1</li>
    <li id="target">I am target</li>
    <li>I am 3</li>
</ul>
<div id="logger">logger</div>

<script>
  const target = $("#target");
  
  target.extend({
    get good(){
      return "ofa.js is good";
    },
    say(){
      return 'mother fxxker';
    }
  });
   
  setTimeout(() => {
    const target = $("#target");
    $("#logger").html = `
    good : ${target.good} <br>
    say() : ${target.say()}
    `;
  }, 500);
</script>
```

</html-viewer>

## Ampliación de la subcapa $

Similar a jQuery, también puedes ampliar las propiedades o métodos de la instancia subyacente a través de fn.extend; las propiedades o métodos extendidos desde fn se aplicarán a todas las instancias;

<html-viewer>

```html
<!-- Importa ofa.js a tu proyecto -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<ul>
    <li>I am 1</li>
    <li id="target">I am target</li>
    <li>I am 3</li>
</ul>
<div id="logger">logger</div>

<script>
  const target = $("#target");
  
  $.fn.extend({
    get good(){
      return "ofa.js is good";
    },
    say(){
      return 'mother fxxker';
    }
  });
   
  setTimeout(() => {
    $("#logger").html = `
    target good : ${$("#target").good} <br>
    logger say() : ${$("#logger").say()}
    `;
  }, 500);
</script>
```

</html-viewer>

## Expansión de la sintaxis de las plantillas

A través de la extensión de propiedades o funciones mediante `extend`, se puede mejorar la funcionalidad de la sintaxis del modelo e incluso proporcionar azúcar sintáctica exclusiva para componentes. Sin embargo, es importante tener en cuenta que se debe evitar el uso de sintaxis de modelo no oficial, ya que esto puede generar un costo de aprendizaje para los usuarios y un deterioro en la experiencia de desarrollo.

### Propiedades de extensión

Puedes configurar una extensión en la plantilla usando `:`. A continuación, vamos a crear una extensión llamada `red`, que cambiará el color de la fuente a rojo cuando `red` sea igual a `true`.

```javascript
$.fn.extend({
  set red(bool){
    if(bool){
      this.css.color = "red";
    }else{
      this.css.color = '';
    }
  }
});
```

<comp-viewer comp-name="temp-one">

```
<script>
$.fn.extend({
  set red(bool){
    if(bool){
      this.css.color = "red";
    }else{
      this.css.color = '';
    }
  }
});
</script>
<temp-one></temp-one>
```

```html
<template component>
  <button on:click="addCount">Add Count</button>
  <div :red="count % 3">{{count}}</div>
  <script>
    export default {
      tag: "temp-one",
      data: {
        count: 0
      },
      proto:{
        addCount(){
          this.count++;
        },
      }
    };
  </script>
</template>
```

</comp-viewer>

En este ejemplo, hemos agregado un atributo `red` a la sintaxis de la plantilla, y cuando `count % 3` no es igual a 0, el color de fuente se pondrá rojo.

### Métodos ampliados

Puedes extender el método 'extend' para hacerlo disponible en la sintaxis de la plantilla. El nombre del método es la parte antes de los dos puntos. Aquí estamos extendiendo la sintaxis de la plantilla 'color', y los argumentos seguidos después se pasarán al método de extensión definido.

Este lugar tiene el atributo 'always' establecido en 'true', lo que significa que cada vez que el componente necesita refrescar la interfaz, se llamará a este método definido. Si no se establece 'always', entonces esta función de sintaxis de plantilla solo se ejecutará una vez.

Entre ellos, `options` proporciona más parámetros que pueden ayudarte a desarrollar una sintaxis de plantilla más personalizada.

```javascript
$.fn.extend({
  color(color, func, options){
    const bool = func();
    // console.log(bool,options);
    if(bool){
      this.css.color = color;
    }else{
      this.css.color = '';
    }
  }
});

$.fn.color.always = true;
```

<comp-viewer comp-name="temp-two">

```
<script>
$.fn.extend({
  color(color, func, options){
    const bool = func();
    console.log(bool,options);
    if(bool){
      this.css.color = color;
    }else{
      this.css.color = '';
    }
  }
}); 

$.fn.color.always = true;
</script>
<temp-two></temp-two>
```

```html
<template component>
  <button on:click="addCount" color:blue="count % 3">Add Count</button>
  <div color:red="!(count % 3)">{{count}}</div>
  <script>
    export default {
      tag: "temp-two",
      data: {
        count: 0
      },
      proto:{
        addCount(){
          this.count++;
        },
      }
    };
  </script>
</template>
```

</comp-viewer>

## Principios de sintaxis de plantillas

Hasta ahora, deberías poder entender que muchas de las sintaxis de plantillas en ofa.js se extienden mediante `extend`:

- Los métodos `class` y `attr` se ejecutan cada vez que se actualiza la vista.
- Las funciones de enlace `on` y `one` solo se ejecutan una vez.

Puedes echar un vistazo a los ejemplos siguientes para comprender mejor el principio de renderizado de plantillas en ofa.js.

<comp-viewer comp-name="temp-three">

```html
<template component>
  <div>class always => {{classalways}}</div>
  <div>attr always => {{attralways}}</div>
  <div>on always => {{onalways}}</div>
  <script>
    export default {
      tag: "temp-three",
      data: {
        classalways:"",
        attralways:"",
        onalways:""
      },
      ready(){
        this.classalways = $.fn.class.always;
        this.attralways = $.fn.attr.always;
        this.onalways = !!$.fn.on.always;
      }
    };
  </script>
</template>
```

</comp-viewer>