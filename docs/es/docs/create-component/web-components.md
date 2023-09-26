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

## Selectores CSS comunes en componentes web

Web Components proporciona algunos selectores CSS especiales para seleccionar y dar estilo a diferentes partes del interior del componente. Estos son algunos de los selectores más utilizados:

### :host recogedor

El selector `:host` se utiliza para seleccionar el contenedor externo del propio componente. El estilo del componente puede definirse a través de este selector.

```css
:host {
  display: block;
  border: 1px solid black;
  padding: 10px;
}
```

### Selector ::slotted()

El selector `::slotted()` se utiliza para seleccionar el elemento envuelto por el contenido ranurado. Se puede aplicar estilo al contenido con este selector en los estilos internos del componente.

```css
::slotted(p) {
  font-size: 18px;
  color: blue;
}
```

## Uso de las ranuras

Las ranuras son el mecanismo utilizado en Web Components para incrustar contenido externo dentro de un componente. Las ranuras permiten a los desarrolladores pasar contenido personalizado dentro de los componentes, lo que posibilita una estructura de componentes más flexible.

### Ranura única

Las ranuras pueden definirse en plantillas de componentes utilizando el elemento `<slot>`. El contenido entrante externo se inserta dentro de la ranura.

```html
<!-- MyComponent.html -->
<div>
  <h2><slot></slot></h2>
</div>
```

```html
<!-- use MyComponent -->
<my-component>
  <p>This is a slot content.</p>
</my-component>
```

### Varias ranuras con nombre

Además de los espacios predeterminados, pueden definirse varios espacios con nombre. Las ranuras con nombre permiten a los desarrolladores insertar contenidos diferentes en las distintas ubicaciones de las ranuras.

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

