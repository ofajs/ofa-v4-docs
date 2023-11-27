# Coexistencia con jQuery

Puedes coexistir con jQuery mientras usas ofa.js (≥4.3.40). Tienes dos opciones principales:

## 1. Utilice `noConflict`

Puedes llamar al método [noConflict](https://api.jquery.com/jQuery.noConflict/) después de cargar jQuery para liberar la variable `$` y evitar conflictos.

```html
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
<script src="https://code.jquery.com/jquery-3.7.1.js"></script>
<script>
  $.noConflict();
  // Ahora puedes llamar a jQuery utilizando su nombre completo, por ejemplo jQuery.ajax().
</script>
```

## 2. Importar bibliotecas en orden

Otra forma es importar las bibliotecas en secuencia, donde la biblioteca importada posteriormente ocupará la variable `$`. En este caso, puedes utilizar la variable global `ofa` en lugar de la variable original `$`.

```html
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
<script src="https://code.jquery.com/jquery-3.7.1.js"></script>
<!-- Ahora $ es un alias de jQuery, puedes usar ofa en lugar de $ para llamar a las funciones relacionadas con ofa.js -->
```

Al utilizar uno de estos dos métodos, puede asegurarse de que ofa.js y jQuery coexistan en la misma página sin conflictos.