# Métodos comunes

## attr

`attr` método le permite obtener o establecer los atributos de un elemento.

```html
<div id="ejemplo" name="soy hola mundo">Hola Mundo</div>
<script>
    const $div = $('#ejemplo');
    console.log($div.attr('name')); // Salida: "soy hola mundo"
    $div.attr('title', "cambiar título");
</script>
```

En el ejemplo anterior, primero seleccionamos un elemento `div` con `id` "ejemplo". Luego, usamos el método `attr` para obtener el atributo `name` de ese elemento y lo imprimimos en la consola. A continuación, usamos el método `attr` para establecer el atributo `title` de ese elemento como "cambiar título".

