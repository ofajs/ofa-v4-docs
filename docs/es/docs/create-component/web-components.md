# 组件化常规知识

ofa.js es una biblioteca de encapsulamiento basada en la tecnología de Componentes Web, con el objetivo de simplificar y acelerar el proceso de desarrollo de componentes. Al ocultar los detalles técnicos complejos, permite a los desarrolladores centrarse en la construcción de componentes y aplicaciones de alta calidad.

Para desarrollar componentes de manera más efectiva, es necesario aprender algunos conceptos de Web Components. Los puntos de conocimiento mencionados a continuación no solo se pueden aplicar en ofa.js, sino que también te beneficiarán si estás utilizando otros marcos que utilicen Web Components.

## Shadow DOM 容器

En Web Components, Shadow DOM proporciona un contenedor aislado para encapsular el estilo y la estructura interna del componente. Esto significa que el estilo y la estructura DOM internos del componente no interferirán con el estilo y la estructura externos, lo que garantiza la predictibilidad y mantenibilidad del componente.

En ofa.js, cada componente tiene un contenedor Shadow DOM que sirve para aislar el contenido interno del componente. El contenido de la plantilla se renderiza dentro de este contenedor. Las instancias de componente obtenidas mediante `$` también pueden acceder al contenedor Shadow DOM interno utilizando la propiedad `shadow`, lo cual permite realizar operaciones y acceder a los elementos internos del componente.

```javascript
const myComponent = $("my-component"); // 获取组件实例
const shadowContainer = myComponent.shadow; // 获取组件的 Shadow DOM 容器

$("my-component").shadow.$("h1").css.color = 'red' // 将 Shadow DOM 的 h1 改为红色
```

## Selectores de CSS comunes en Web Components

Web Components proporciona varios selectores CSS especiales para seleccionar y dar estilo a diferentes partes internas del componente. Aquí hay algunos selectores comunes:

### :host 选择器

`selector:host` se utiliza para seleccionar el contenedor externo del componente. Puede usar este selector para definir el estilo del componente.

```css
:host {
  display: block;
  border: 1px solid black;
  padding: 10px;
}
```

### ::slotted() 选择器

`::slotted()` selector se utiliza para seleccionar elementos envueltos por el contenido del slot. Puede usar este selector en estilos internos del componente para aplicar estilos al contenido del slot.

```css
::slotted(p) {
  font-size: 18px;
  color: blue;
}
```

## Uso de ranuras (Slot)

Las ranuras son mecanismos utilizando en componentes web para incrustar contenido externo dentro de un componente. Las ranuras permiten a los desarrolladores pasar contenido personalizado al interior del componente, lo que permite una estructura de componente más flexible.

### 单个插槽

En la plantilla del componente, se puede usar el elemento `<slot>` para definir ranuras. El contenido proporcionado desde el exterior será insertado dentro de las ranuras.

```html
<!-- my-component.html -->
...
<div>
  <h2><slot></slot></h2>
</div>
...
```

```html
<!-- 使用 my-component -->
<my-component>
  <p>This is a slot content.</p>
</my-component>
```

### 多个命名插槽

Además de la ranura predeterminada, también se pueden definir varias ranuras con nombres. Las ranuras con nombres permiten a los desarrolladores insertar contenido diferente en diferentes posiciones de ranura.

```html
<!-- my-component.html -->
...
<div>
    <header><slot name="header"></slot></header>
    <main><slot></slot></main>
    <footer><slot name="footer"></slot></footer>
</div>
...
```

```html
<!-- 使用 my-component -->
<my-component>
  <div slot="header">Header Content</div>
  <p>This is main content.</p>
  <div slot="footer">Footer Content</div>
</my-component>
```

El uso del evento slotchange

El evento `slotchange` se activa cuando cambia el contenido del slot. Puedes utilizar este evento para llevar a cabo algunas operaciones relacionadas con el contenido del slot.

```javascript
export default {
  data: {
    count: 0,
  },
  ready() {
    this.shadow.$("slot").on("slotchange", () => {
      console.log("Slot content has changed");
    });
  },
};
```