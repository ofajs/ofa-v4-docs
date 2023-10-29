# Características de los datos de muestra

Los objetos de instancia obtenidos o creados a través de `$` tienen todas las características de datos de [stanz](https://github.com/kirakiray/stanz) porque las instancias de `$` heredan de [stanz](https://github.com/kirakiray/stanz). Esto significa que puedes utilizar los métodos y características de manipulación de datos proporcionados por `stanz` para operar y escuchar los datos de los objetos de instancia.

> Los ejemplos a continuación utilizan elementos regulares, ya que los componentes personalizados generalmente vienen con datos registrados, mientras que los elementos regulares generalmente solo contienen información de etiquetas, por lo que son más adecuados para demostraciones.

## watch

Los ejemplos se pueden monitorear los cambios en los valores a través del método `watch`; incluso si se cambian los valores de los subobjetos del objeto, también se puede monitorear el cambio a través del método `watch` del objeto.

下面是一个示例，演示如何使用 `$` 实例和 `watch` 方法：

<html-viewer>

```
<!-- Importe ofa.js en su proyecto -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div id="target"></div>
<br />
<div id="logger" style="border: #aaa solid 1px; padding: 8px"></div>

<script>
  const target = $("#target");
  $("#logger").text = target;
  target.watch(() => {
    $("#logger").text = target;
  });

  setTimeout(() => {
    target.aaa = "I am aaa";
  }, 600);
  setTimeout(() => {
    target.bbb = {
      child: {
        val: "I am bbb child val",
      },
    };
  }, 1200);
  setTimeout(() => {
    target.bbb.child.val = "change bbb child val";
  }, 1800);
</script>
```

</html-viewer>

En este ejemplo, primero creamos una instancia de `$` llamada `target` y luego usamos el método `watch` para escuchar sus cambios. Incluso si modificamos el valor de un subobjeto del objeto, como `target.bbb.child.val`, el método `watch` puede detectar estos cambios y actualizar el contenido del elemento `logger`. Esto demuestra las poderosas características de la instancia de `$`, que te permiten monitorear fácilmente los cambios en un objeto.

## watchTick

`watchTick` es similar a la función `watch`, pero tiene una operación de throttling interna. Se ejecuta una vez en un solo hilo, por lo que puede ser más efectivo para escuchar cambios en los datos en escenarios con requisitos de rendimiento más altos.

A continuación se muestra un ejemplo que muestra cómo usar el método `watchTick` de la instancia `$`:

<html-viewer>

```
<!-- Importe ofa.js en su proyecto -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div id="target"></div>
<br />
<div id="logger1" style="border: blue solid 1px; margin: 8px"></div>
<div id="logger2" style="border: red solid 1px; margin: 8px"></div>

<script>
  const target = $("#target");
  let count1 = 0;
  target.watch(() => {
    count1++;
    $("#logger1").text = 'El número de carreras del reloj:' + count1;
  });

  let count2 = 0;
  target.watchTick(()=>{
    count2++;
    $("#logger2").text = 'El número de veces que se ha ejecutado watchTick:' + count2;
  });

  setTimeout(() => {
    target.aaa = "I am aaa";
    target.bbb = "I am bbb";
    target.ccc = "I am ccc";
  }, 1000);
</script>
```

</html-viewer>

En este ejemplo, primero creamos una instancia del objeto `$` llamada `target`. Luego, utilizamos los métodos `watch` y `watchTick` para monitorear los cambios en el objeto. El método `watch` se ejecuta inmediatamente cuando los datos cambian, mientras que el método `watchTick` se ejecuta una vez en un solo hilo, lo que limita la frecuencia de las operaciones de monitoreo. Puede elegir usar `watch` o `watchTick` según sus necesidades para monitorear los cambios en los datos.

## unwatch

La función `unwatch` se utiliza para cancelar la escucha de datos y desvincular las escuchas anteriores registradas con `watch` o `watchTick`.

A continuación se muestra un ejemplo que muestra cómo utilizar el método `unwatch` de la instancia de `$`:

<html-viewer>

```
<!-- Importe ofa.js en su proyecto -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div id="target"></div>
<br />
<div id="logger1" style="border: blue solid 1px; margin: 8px"></div>
<div id="logger2" style="border: red solid 1px; margin: 8px"></div>

<script>
  const target = $("#target");
  const tid1 = target.watch(() => {
    $("#logger1").text = JSON.stringify(target);
  });

  const tid2 = target.watchTick(()=>{
    $("#logger2").text = JSON.stringify(target);
  });

  setTimeout(() => {
    target.aaa = "I am aaa";
    // Desactivar la escucha
    target.unwatch(tid1);
    target.unwatch(tid2);
  }, 500);
  setTimeout(() => {
    target.bbb = "I am aaa"; // La función registrada anteriormente no se activará, ya que ha sido desactivada.
  }, 1000);
</script>
```

</html-viewer>

En este ejemplo, primero creamos una instancia del objeto `$` llamada `target`. Luego registramos dos escuchas usando los métodos `watch` y `watchTick`. Después, usamos el método `unwatch` para cancelar las dos escuchas previamente guardadas `tid1` y `tid2`. Esto significa que los cambios en la propiedad dentro del primer `setTimeout` no activarán ninguna escucha porque estas han sido canceladas.

## 不被监听的值

En la aplicación `$`, el nombre de las propiedades que comienzan con guión bajo `_` indica que estos valores no serán monitoreados por los métodos `watch` o `watchTick`. Esto es útil para algunas propiedades temporales o privadas, ya que puedes cambiarlos libremente sin activar el monitoreo.

A continuación se muestra un ejemplo que demuestra cómo usar valores de atributos que comienzan con un guión bajo para evitar ser monitoreados:

<html-viewer>

```
<!-- Importe ofa.js en su proyecto -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div id="target"></div>
<br />
<div id="logger" style="border: #aaa solid 1px; padding: 8px"></div>

<script>
  const target = $("#target");
  $("#logger").text = target;

  // Utiliza el método watch para escuchar cambios en el valor de la propiedad
  target.watch(() => {
    $("#logger").text = target;
  });

  setTimeout(() => {
    // Esta propiedad no activará la escucha
    target._aaa = "Soy aaa";
  }, 600);

  setTimeout(() => {
    // Incluso si se cambia el valor de la propiedad _aaa, aún no se activará la escucha
    target._aaa = "cambia aaa";
  }, 1200);
</script>
```

</html-viewer>

En este ejemplo, creamos una instancia de objeto `$` llamada `target` y luego usamos el método `watch` para monitorear cambios en los valores de las propiedades. En `setTimeout`, intentamos cambiar el valor de la propiedad `_aaa`, pero este cambio no activará la escucha. Esto es muy útil cuando se necesita actualizar el valor de una propiedad sin activar la escucha.

## 基本特征

El objeto de datos en la instancia se convertirá en una instancia de Stanz, lo que permitirá la escucha.

```javascript
const obj = {
  val: "I am obj"
};

$("#target").obj = obj;
console.log($("#target").obj.val === obj.val); // => true
console.log($("#target").obj === obj); // => false
```

Podemos usar `$.stanz` para crear un dato Stanz que no esté vinculado a una instancia.

```javascript
const data = $.stanz({
  val: "I am val"
});

data.watch(() => {
  console.log(data.val); // => change val
});

data.val = "change val";
```

Estos ejemplos muestran las características básicas de establecer datos de objeto como instancia de Stanz para la escucha.

Para obtener más características completas, consulte [stanz](https://github.com/kirakiray/stanz);