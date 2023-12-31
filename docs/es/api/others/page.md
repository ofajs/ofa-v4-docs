# Componente `o-page`

`o-page` es uno de los componentes principales de `ofa.js`, que representa una página o módulo de página independiente. A continuación se muestran algunas propiedades y métodos clave de `o-page`:

## Atributos `src

El atributo `src` se utiliza para especificar la dirección específica de un módulo de página. Este es un atributo clave que especifica el contenido y el comportamiento de una página, y le indica a la aplicación de dónde cargar el contenido específico de la página.

```javascript
// Código de ejemplo: obtener la dirección de la página actual
// const page = $("o-app").current;
...
ready(){
  // Durante la vida de un módulo de página, es el módulo de página actual;
  const page = this;
}
...
```

## Método `goto`

El método "goto" se utiliza para saltar de la página actual a otra página. En comparación con el método "goto" de "app", el método "goto" de "page" permite utilizar direcciones relativas para navegar a otras páginas.

```javascript
// Ejemplo de código: Navegar a otra página dentro del módulo de la página actual
page.goto("./page2.html");
```

## Método `replace`

El método `replace` se utiliza para reemplazar la página actual por otra página. Esto es similar al método `replace` de `app`, pero se realiza dentro de la página.

```javascript
// Código de ejemplo: en el módulo de la página actual sustituirá la página actual por otra página
page.replace("./new-page.html");
```

## Método `back

El método `back` se utiliza para volver a la página anterior. Esto llevará al usuario a la página anterior, similar a la función de retroceso de un navegador.

```javascript
// Ejemplo de código: volver a la página anterior
page.back();
```