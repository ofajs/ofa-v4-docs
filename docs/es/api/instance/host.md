# host

Usando el atributo `host`, puedes obtener una instancia del componente host del elemento. Esto es útil para acceder a los datos y métodos de su componente host desde el interior del componente.

A continuación se muestra un ejemplo que muestra cómo utilizar la propiedad `host` para obtener la instancia del componente hospedado:

<comp-viewer comp-name="host-demo">

```html
<template component>
  <div>tag: {{txt}}</div>
  <div>bool: {{txt2}}</div>
  <script>
    export default {
      tag: "host-demo",
      data: {
        txt: "-",
        txt2: '-'
      },
      ready(){
        const host = this.shadow.$("div").host;
        this.txt = host.tag;
        this.txt2 = host === this;
      }
    };
  </script>
</template>
```

</comp-viewer>

En este ejemplo, creamos un componente personalizado llamado `host-demo` y accedemos a su instancia del componente anfitrión dentro del componente, luego comparamos si son iguales.

Si el elemento no está dentro del componente, el valor de `host` será `null`. Por ejemplo:

<html-viewer>

```
<!-- Importe ofa.js en su proyecto -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<ul>
    <li id="target">
        I am target
    </li>
</ul>

<div id="logger" style="border:red solid 1px;padding:8px;">-</div>

<script>
    setTimeout(()=>{
        $("#logger").text = String($("#target").host);
    },500);
</script>
```

</html-viewer>

En este ejemplo, el elemento `#target` está fuera de cualquier componente o página dentro del body, por lo que el valor de `$("#target").host` será `null`.