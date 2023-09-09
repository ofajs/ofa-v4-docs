# Sintaxis de la plantilla

`ofa.js` proporciona una serie de potentes características de sintaxis de plantillas que te permiten manipular de manera más flexible los elementos e datos de interfaz de los componentes. Estas características de sintaxis de plantillas te ayudan a lograr efectos de interfaz ricos y experiencias de interacción.

## Sintaxis para renderizar texto

Utilizando la sintaxis de rendimiento de texto `{{ key }}`, puedes renderizar datos como contenido de texto y agregarlos a la plantilla del componente. Cuando los datos cambian, el contenido de texto correspondiente se actualizará automáticamente.

A continuación se muestra un ejemplo que utiliza la sintaxis de rendimiento de texto:

```html
<!-- template.html -->
<div>
    <p>Bienvenido, {{username}}!</p>
</div>
```

```javascript
// MyComponent.js
export const type = $.COMP;

export const data = {
  username: "JohnDoe",
};
```

En el ejemplo anterior, `{{username}}` será reemplazado por el valor de la propiedad `username` en los datos del componente, lo que mostrará "Bienvenido, JohnDoe!" en la interfaz.

## Sintaxis de enlace de atributos

Utilizando la sintaxis de enlace de atributos `:xxx='yyy'`, puedes vincular las propiedades del componente a los atributos de los elementos dentro de la plantilla. Este enlace es unidireccional, los cambios en las propiedades afectarán a los atributos de los elementos en la plantilla, pero no al revés.

以下是一些常见的属性绑定示例：

```html
<!-- template.html -->
<l-m src="custom-component.mjs"></l-m>  <!-- 加载 custom-component 组件 -->
<div>
    <p :text="greeting"></p>
    <input :value="inputValue" />
    <custom-component :custom-prop="customValue"></custom-component>
</div>
```

```javascript
// MyComponent.js
export const type = $.COMP;

export const data = {
  greeting: "Hello, World!",
  inputValue: "",
  customValue: "Custom Value",
};
```

En el ejemplo anterior, `:text="greeting"` enlaza el valor de la propiedad `greeting` del `data` del componente al contenido de texto del elemento `<p>`. `:value="inputValue"` enlaza el valor de la propiedad `inputValue` del `data` del componente al atributo `value` del elemento `<input>`. Para componentes personalizados, `custom-prop` es el nombre de la propiedad del componente personalizado, y se pasa el valor de la propiedad `customValue` del `data` del componente al componente personalizado.

## 事件绑定

Usando el formato `on:click="yyy"`, puedes enlazar un evento especificado del elemento objetivo (por ejemplo, `click`) a una propiedad `yyy` del componente anfitrión. De esta manera, cuando se acciona el evento especificado en el elemento objetivo, se llama al método de propiedad respectivo en el componente anfitrión.

A continuación se muestra un ejemplo:

```html
<!-- template.html -->
<button on:click="increaseCount">Increase Count</button>
```

```javascript
// MyComponent.js
export const type = $.COMP;

export const data = {
  count: 0,
};

export const proto = {
  increaseCount() {
    this.count++;
  },
};
```

En el ejemplo anterior, cuando se hace clic en el botón, se llama al método `increaseCount` del componente principal para aumentar el valor del atributo `count`.

## atributos de enlace

Con la forma `attr:xxx="yyy"`, puedes vincular el atributo especificado `xxx` del elemento objetivo al atributo `yyy` del componente principal. De esta manera, el atributo del elemento objetivo cambiará a medida que cambie el atributo del componente principal.

```html
<!-- template.html -->
<style>
[fontcolor="red"]{
    color: red;
}
</style>

<div attr:fontcolor="val">
 Soy texto
</div>
```

```javascript
// MyComponent.js
export const type = $.COMP;

export const data = {
  val: "red",
};
```

En el ejemplo anterior, `attr:fontcolor="val"` vinculará el atributo `val` del componente principal al atributo `fontcolor` del elemento `<div>`.

## Vinculación de nombres de clase dinámicos

Usando la forma `class:xxx="yyy"`, puedes agregar o eliminar dinámicamente el nombre de clase al elemento objetivo según el valor del atributo del componente principal. Cuando el atributo `yyy` del componente principal es `true`, se agregará el nombre de clase `xxx` al elemento objetivo; de lo contrario, se eliminará ese nombre de clase.

```html
<!-- template.html -->
<style>
  button.active{
    background-color: red;
  }
</style>
<button class:active="isActive">Botón activo</button>
```

```javascript
// MyComponent.js
export const type = $.COMP;

export const data = {
  isActive: false,
};
```

En el ejemplo anterior, si el atributo `isActive` es `true`, el botón agregará el nombre de clase `active`, aplicando un estilo específico.

## Doble enlace de datos

A través de `sync:xxx='yyy'`, puedes conseguir el doble enlace de datos. Esto hace que la propiedad `xxx` del elemento objetivo y la propiedad `yyy` del componente anfitrión se mantengan sincronizadas, es decir, los cambios en la propiedad objetivo se reflejarán en la propiedad anfitrión, y los cambios en la propiedad anfitrión también se sincronizarán con la propiedad objetivo.

A continuación se muestra un ejemplo:

```html
<!-- template.html -->
<input sync:value="inputValue" />
```

```javascript
// MyComponent.js
export const type = $.COMP;

export const data = {
  inputValue: "Valor Inicial",
};
```

En el ejemplo anterior, `sync:value="inputValue"` logra un doble enlace de datos, cuando el valor del cuadro de texto cambie, `inputValue` se actualizará automáticamente; por otro lado, cuando `inputValue` cambie, el valor del cuadro de texto también cambiará.

