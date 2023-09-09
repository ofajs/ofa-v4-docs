# Primeros pasos
## Cómo usar
### Referencia directa

Puedes agregar el ofa.js directamente a tu página utilizando la dirección del CDN:

```html
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.2.4/dist/ofa.js"></script>
```

### Instalar mediante npm

Primero, instala ofa.js en tu proyecto:

```shell
npm install ofa.js --save
```

Luego, importa el módulo ofa.js en tu proyecto:

```javascript
import "ofa.js"; // esm
// or
require("ofa.js"); // cmd
```

### Uso

Después de agregar los recursos, ofa.js establecerá una propiedad `$` en el ámbito global, todas las funciones estarán disponibles en `$`, y el siguiente tutorial explicará su uso en detalle;

通常情况下，我们建议采用直接引用的方式添加 ofa.js，而使用 npm 的方式则用于与类似 React 和 Vue 等框架进行兼容。

