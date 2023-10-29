# Métodos populares

## attr

El método `attr` te permite obtener o establecer los atributos de un elemento.

```html
<div id="example" name="i am hello word">Hello World</div>
<script>
    const $div = $('#example');
    console.log($div.attr('name')); // Salida: "i am hello word"
    $div.attr('title', "cambiar título");
</script>
```

En el ejemplo anterior, primero seleccionamos un elemento `div` con `id` "example". Luego, usamos el método `attr` para obtener el atributo `name` de ese elemento y lo imprimimos en la consola. A continuación, utilizamos el método `attr` para establecer el atributo `title` de ese elemento como "change title".