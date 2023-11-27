# Comenzando a usar
## Cómo usar los
### Cita directa

Puedes utilizar la dirección CDN para referenciar directamente ofa.js en tu página:

```html
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.40/dist/ofa.js"></script>
```

### Instalación vía npm

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

### Use

Después de importar el recurso, ofa.js establecerá una propiedad `$` en el ámbito global, todas las funciones estarán disponibles en `$`, su uso se explicará detalladamente en el tutorial posteriormente.

En general, recomendamos agregar ofa.js de forma directa utilizando la cita, mientras que la opción de usar npm se utiliza para compatibilidad con frameworks como React y Vue.

### modo de depuración

Puedes habilitar el modo de depuración agregando el atributo `debug` a la etiqueta de script que hace referencia a ofa.js. En el modo de depuración, los módulos de componentes o páginas cargados utilizarán la función de sourceMap, lo que te permitirá depurar directamente desde el archivo fuente.

```html
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js" debug></script>
```

Al activar el modo de depuración, podrás rastrear y depurar más fácilmente el código de tus componentes. Esto es muy útil para solucionar errores y depurar código durante el proceso de desarrollo.