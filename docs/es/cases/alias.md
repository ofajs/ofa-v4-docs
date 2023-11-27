# alias

Los alias permiten a los usuarios utilizar los recursos compartidos de manera más conveniente, especialmente cuando se trata de componentes compartidos entre dominios para utilizar la misma versión de recursos.

En este ejemplo, hemos configurado un alias a través del método `lm.config`, asignando el alias `@obook` a `https://cdn.jsdelivr.net/npm/obook`. Ahora, cuando utilizamos `@obook` como prefijo, se mapeará automáticamente a la URL especificada.

<html-viewer>

```
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.40/dist/ofa.min.js"></script>
```

```html
<script>
  lm.config({
    alias: {
      "@obook": "https://cdn.jsdelivr.net/npm/obook",
    },
  });
</script>

<l-m src="@obook/blocks/simp-block.html"></l-m>
<simp-block>
  <h2>Test Title</h2>
  <h3>Test h3 desc</h3>
</simp-block>
```

</html-viewer>

Utilizando el alias `@obook`, hemos introducido el recurso `"https://cdn.jsdelivr.net/npm/obook/blocks/simp-block.html"` en la etiqueta `l-m`, lo que permite que los componentes entre diferentes dominios accedan de manera más conveniente a los recursos compartidos sin necesidad de conocer la dirección detallada del recurso. Esto mejora la mantenibilidad del código y la facilidad de compartir recursos entre dominios.

## Nota:

Cuando establezca un alias, tenga en cuenta lo siguiente:

- Los alias de las teclas deben comenzar con `@`, como `@example`.

```javascript
lm.config({
  alias: {
    // "example": "https://example.com/resource", ❌ No comienza con @
    "@example": "https://example.com/resource",
  },
});
```

- No configure duplicar los mismos nombres de alias, de lo contrario esto generará un error.

```javascript
lm.config({
  alias: {
    "@namex": "https://example.com/resource",
  },
});

// ...

lm.config({
  alias: {
    "@namex": "https://example.com/other-resource", // Error, duplicate alias
  },
});
```