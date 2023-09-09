# Encapsulación y Componentización: Conocimientos generales de la componentización

ofa.js es una biblioteca de encapsulamiento basada en la tecnología de Web Components, con el objetivo de simplificar y acelerar el proceso de desarrollo de componentes. Al ocultar los detalles técnicos complejos, los desarrolladores pueden centrarse más en la construcción de componentes y aplicaciones de alta calidad.

Para desarrollar componentes de manera más efectiva, es necesario aprender algunos conceptos de Web Components. Los puntos mencionados a continuación no solo se pueden aplicar en ofa.js, sino que también podrían beneficiarte al utilizar otros frameworks que empleen Web Components.

## Contenedor Shadow DOM

En Web Components, Shadow DOM proporciona un contenedor aislado para encapsular los estilos y la estructura interna de un componente. Esto significa que los estilos y la estructura DOM internos del componente no interferirán con los estilos y estructuras externas, lo que garantiza la previsibilidad y mantenibilidad del componente.

En ofa.js, cada componente tiene un contenedor Shadow DOM para aislar su contenido interno. El contenido de la plantilla se renderiza en este contenedor. Además, las instancias de componentes obtenidas a través de `$` también tienen acceso al contenedor Shadow DOM interno a través de la propiedad `shadow`, lo que permite operar y acceder a los elementos internos del componente.

```javascript
const myComponent = $("my-component"); // Obtener instancia del componente
const shadowContainer = myComponent.shadow; // Obtener el contenedor Shadow DOM del componente

$("my-component").shadow.$("h1").css.color = 'red' // Cambiar el color de h1 en el Shadow DOM a rojo
```

## Web Components 中的常用 CSS 选择器

Web Components 提供了一些特殊的 CSS 选择器，用于选择和样式化组件内部的不同部分。以下是一些常用的选择器：

### :host 选择器

`:host` 选择器用于选择组件自身的外部容器。可以通过这个选��器来定义组件的样式。

```css
:host {
  display: block;
  border: 1px solid black;
  padding: 10px;
}
```

### ::slotted() 选择器

`::slotted()` 选择器用于选择被插槽内容包裹的元素。可以在组件内部的样式中使用这个选择器来样式化被插槽的内容。

```css
::slotted(p) {
  font-size: 18px;
  color: blue;
}
```

## 插槽（Slot）的使用

插槽是 Web Components 中用于在组件内部嵌入外部内容的机制。插槽允许开发者将自定义的内容传递到组件内部，实现更灵活的组件结构。

### 单个插槽

在组件模板中，可以使用 `<slot>` 元素来定义插槽。外部传入的内容会被插入到插槽内部。

```html
<!-- MyComponent.html -->
<div>
  <h2><slot></slot></h2>
</div>
```

```html
<!-- 使用 MyComponent -->
<my-component>
  <p>This is a slot content.</p>
</my-component>
```

### 多个命名插槽

除了默认插槽外，还可以定义多个命名插槽。命名插槽允许开发者将不同的内容插入到不同的插槽位置。

```html
<!-- MyComponent.html -->
<div>
    <header><slot name="header"></slot></header>
    <main><slot></slot></main>
    <footer><slot name="footer"></slot></footer>
</div>
```

```html
<!-- Utilizando MyComponent -->
<my-component>
  <div slot="header">Contenido de Encabezado</div>
  <p>Este es el contenido principal.</p>
  <div slot="footer">Contenido de Pie de página</div>
</my-component>
```

## Uso del evento slotchange

El evento `slotchange` se activa cuando el contenido del slot cambia. Puedes utilizar este evento para realizar operaciones relacionadas con el contenido del slot.

```javascript
// custom-component.mjs
export const type = $.COMP;

export default {
  data: {
    count: 0,
  },
  ready() {
    this.shadow.$("slot").on("slotchange", () => {
      console.log("El contenido del slot ha cambiado");
    });
  },
};
```

