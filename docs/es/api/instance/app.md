# app

Si los elementos dentro de `o-app`, incluyendo los elementos dentro del nodo sombra de `o-page` dentro de `o-app`, o los componentes secundarios internos, todos tienen un atributo `app` que apunta a la instancia del elemento `o-app`.

A continuación se muestra un ejemplo que muestra cómo acceder al atributo "app" dentro de un elemento en `o-app`:

<iframe src="../../../publics/test-app/demo.html" style="border:none;width:100%;height:200px;"></iframe>

El código es el siguiente:

```html
<!-- demo.html -->
<style>
    o-app {
    display: block;
    width: 250px;
    height: 150px;
    border: #aaa solid 1px;
    }
</style>
<o-app data-warn="main-app">
    <o-page src="./page1.html?count=100"></o-page>
</o-app>
```

```html
<!-- page1.html -->
<template page>
  <l-m src="./test-comp.html"></l-m>
  <div>txt : {{txt}}</div>
  <test-comp></test-comp>
  <script>
    export default {
      data: {
        txt: "-",
      },
      ready() {
        this.txt = this.app.data.warn;
      },
    };
  </script>
</template>
```

```html
<!-- test-comp.html -->
<template component>
  <style>
    :host {
      display: block;
      padding: 8px;
      margin: 8px;
      border: #aaa solid 1px;
    }
  </style>
  in test-comp shadow:
  <br />
  apptag: {{app.tag}}
  <br />
  appwarn: {{app.data.warn}}
  <script>
    export default {
      data: {},
    };
  </script>
</template>
```

En el ejemplo anterior, el atributo 'app' del elemento 'o-app' contiene elementos dentro del elemento 'o-page' y el componente personalizado 'test-comp'. Esto significa que ambos pueden acceder a los datos y métodos del elemento 'o-app' a través del atributo 'app'.