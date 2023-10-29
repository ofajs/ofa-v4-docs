# Comenzando a usar
## 如何使用
### Cita directa

Puedes utilizar la dirección CDN para referenciar directamente ofa.js en tu página:

```html
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.25/dist/ofa.js"></script>
```

### 通过 npm 安装

Primero, instala ofa.js en tu proyecto.

```shell
npm install ofa.js --save
```

Luego, importa el módulo ofa.js en tu proyecto:

```javascript
import "ofa.js"; // esm
// or
require("ofa.js"); // cmd
```

### 使用

Después de importar el recurso, ofa.js establecerá una propiedad `$` en el ámbito global, todas las funciones estarán disponibles en `$`, su uso se explicará detalladamente en el tutorial posteriormente.

En general, recomendamos agregar ofa.js de forma directa utilizando la cita, mientras que la opción de usar npm se utiliza para compatibilidad con frameworks como React y Vue.