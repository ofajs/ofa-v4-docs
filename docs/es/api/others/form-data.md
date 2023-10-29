# formData

El método `formData` se utiliza para generar datos de objetos vinculados a elementos de formularios, lo que facilita y agiliza el manejo de los elementos del formulario. Este método generará un objeto que contiene los valores de todos los elementos del formulario dentro del elemento objetivo, y este objeto reflejará en tiempo real los cambios en los elementos del formulario.

En el siguiente ejemplo, mostramos cómo usar el método `formData` para generar datos de objetos vinculados a elementos de formulario:

<html-viewer>

```html
<!-- Importar ofa.js en el proyecto -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<form id="myForm">
  <input type="text" name="username" value="John Doe" />
  <div>
    sex:
    <label>
      man
      <input type="radio" name="sex" value="man" />
    </label>
    <label>
      woman
      <input type="radio" name="sex" value="woman" />
    </label>
  </div>
  <textarea name="message">Hello World!</textarea>
</form>
<br />
<div id="logger"></div>
<script>
  const data = $("#myForm").formData();

  $("#logger").text = data;
  data.watch(() => {
    $("#logger").text = data;
  });
</script>
```

</html-viewer>

En este ejemplo, creamos un formulario que contiene un cuadro de texto, botones de radio y un área de texto, y usamos el método `formData` para crear un objeto `data` que contiene los valores de estos elementos del formulario. También usamos el método `watch` para vigilar los cambios en los datos y mostrarlos en tiempo real en la página. Cuando el usuario modifica los valores de los elementos del formulario, el objeto `data` se actualiza automáticamente, lo que hace que el manejo de los datos sea muy simple y eficiente.

## Enlace de datos bidireccional

La data del objeto generado también tiene la capacidad de vinculación inversa, lo que significa que cuando modificas las propiedades del objeto, los valores de los elementos del formulario relacionados también se actualizarán automáticamente. Esto es muy útil cuando se manejan datos de formularios, ya que puedes lograr fácilmente una vinculación bidireccional de los datos.

En el siguiente ejemplo, demostramos cómo utilizar los datos de objetos generados por el método `formData`, y cómo realizar una vinculación de datos inversa:

<html-viewer>

```html
<!-- Importar ofa.js en el proyecto -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<form id="myForm">
  <input type="text" name="username" value="John Doe" />
  <div>
    sex:
    <label>
      man
      <input type="radio" name="sex" value="man" />
    </label>
    <label>
      woman
      <input type="radio" name="sex" value="woman" />
    </label>
  </div>
  <textarea name="message">Hello World!</textarea>
</form>
<br />
<div id="logger"></div>
<script>
  const data = $("#myForm").formData();

  setTimeout(()=>{
    data.username = "Yao";
    data.sex = "man";
    data.message = "ofa.js is good!";
  },1000);
</script>
```

</html-viewer>

En este ejemplo, primero creamos un formulario que contiene un cuadro de texto, botones de opción y un área de texto. Luego, utilizamos el método `formData` para generar un objeto de datos llamado `data`. A continuación, modificamos las propiedades del objeto `data` para lograr una vinculación de datos bidireccional, lo que significa que el valor de los elementos del formulario se actualizará automáticamente cuando cambien las propiedades del objeto. Esta funcionalidad de vinculación de datos bidireccional hace que la interacción con los datos del formulario sea más fácil y conveniente.

## 监听特定的表单

Por defecto, el método `formData()` escucha todos los elementos `input`, `select` y `textarea` dentro del elemento objetivo. Pero si solo deseas escuchar elementos específicos del formulario, puedes lograrlo pasando un [selector CSS](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Selectors).

En el siguiente ejemplo, mostramos cómo escuchar elementos específicos del formulario pasando un selector CSS:

<html-viewer>

```html
<!-- Importar ofa.js en el proyecto -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<form id="myForm">
  <input type="text" name="username" value="John Doe" class="use-it" />
  <div>
    sex:
    <label>
      man
      <input type="radio" name="sex" value="man" class="use-it" />
    </label>
    <label>
      woman
      <input type="radio" name="sex" value="woman" class="use-it" />
    </label>
  </div>
  <textarea name="message">这个表单元素没有被绑定</textarea>
</form>
<br />
<div id="logger"></div>
<script>
  const data = $("#myForm").formData(".use-it");

  $("#logger").text = data;
  data.watch(() => {
    $("#logger").text = data;
  });
</script>
```

</html-viewer>

En este ejemplo, solo queremos escuchar los elementos de formulario con `class` "use-it", por lo tanto, pasamos `".use-it"` como argumento al método `formData()`. De esta manera, solo los elementos de formulario con este nombre de clase serán escuchados e incluidos en el objeto de datos generado. Esto es útil para escuchar selectivamente elementos de formulario para administrar de manera más precisa tus datos de formulario.

## Formulario personalizado

El uso de componentes de formulario personalizados es muy simple, solo necesitas agregar una **propiedad de valor** al componente personalizado y configurar el **atributo de nombre**.

En el siguiente ejemplo, hemos creado un componente de formulario personalizado llamado "custom-input". Este componente es un cuadro de texto editable que actualiza su atributo `value` en tiempo real cuando el texto cambia.

<comp-viewer comp-name="custom-input">

```
<div id="myForm">
  <input type="text" name="username" value="John Doe" />
  <custom-input name="message"></custom-input>
  <div id="logger"></div>
</div>
<script>
  const data = $("#myForm").formData("input,custom-input");
  $("#logger").text = data;
  data.watch(() => {
    $("#logger").text = data;
  });
</script>
```

```html
<template component>
  <style>
    :host{
      display: block;
    }
    .editor {
      display: inline-block;
      min-width: 200px;
      line-height: 30px;
      height: 30px;
      border: #aaa solid 1px;
      border-radius: 4px;
      padding: 4px;
      font-size: 14px;
    }
  </style>
  <div
    class="editor"
    contenteditable="plaintext-only"
    :text="value"
    on:input="changeText"
  ></div>
  <script>
    export default {
      tag:"custom-input",
      attrs: {
        name: "",
      },
      data: {
        value: "Default txt",
      },
      proto: {
        changeText(e) {
          this.value = $(e.target).text;
        },
      },
    };
  </script>
</template>
```

</comp-viewer>

Al utilizar un componente de formulario personalizado, simplemente tienes que agregarlo a tu formulario y establecer la propiedad `name` requerida:

```html
<div id="myForm">
  <input type="text" name="username" value="John Doe" />
  <custom-input name="message"></custom-input>
  <div id="logger"></div>
</div>
<script>
  const data = $("#myForm").formData("input,custom-input");
  $("#logger").text = data;
  data.watch(() => {
    $("#logger").text = data;
  });
</script>
```

En el ejemplo anterior, utilizamos el elemento `<custom-input>` y establecemos el atributo `name` para utilizar componentes de formulario personalizados. Luego, utilizamos el método `formData()` para escuchar los valores de los elementos de entrada y los componentes personalizados, de modo de obtener y procesar los datos del formulario en tiempo real. Este método te permite ampliar fácilmente tu formulario para incluir componentes personalizados y así satisfacer tus necesidades específicas.

## 在组件或页面内使用表单数据

A veces, es posible que debas usar datos de formularios dentro de un componente o página, y necesites generar esos datos durante el ciclo de vida `ready` y luego vincularlos al componente.

En el siguiente ejemplo, mostramos cómo utilizar datos de formularios dentro de un componente personalizado. Este componente incluye un campo de texto de entrada, que actualiza los datos en el registro en tiempo real cuando se introduce contenido.

<comp-viewer comp-name="custom-input">

```html
<template component>
  <style>
    :host{
      display: block;
    }
  </style>
  <input type="text" name="username" value="John Doe" />
  <div>{{logtext}}</div>
  <script>
    export default {
      tag:"custom-input",
      data: {
        fdata:{},
        logtext: ""
      },
      watch:{
        fdata(data){
          if(data){
            this.logtext = JSON.stringify(data);
          }
        }
      },
      ready(){
        this.fdata = this.shadow.formData();
      }
    };
  </script>
</template>
```

</comp-viewer>

Después del ciclo de vida "ready" en el componente, utilizamos el método `this.shadow.formData()` para generar el objeto de datos del formulario `fdata`. Luego, utilizamos `watch` para detectar cambios en `fdata` y, cuando eso suceda, lo convertimos a una cadena JSON y actualizamos `logtext` para mostrar en tiempo real los datos del formulario.