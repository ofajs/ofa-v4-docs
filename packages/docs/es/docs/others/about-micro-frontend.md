# 关于微前端

Micro front-end is a front-end architectural pattern designed to help teams build and maintain large, complex front-end applications. It draws on the ideas of microservices architecture and divides front-end applications into smaller independent parts, each of which can be developed, tested, and deployed by different teams.

En el proceso de expansión continua de las aplicaciones tradicionales de frontend monolíticas, puede volverse difícil de mantener y expandir. El objetivo de la microfrontend es dividir la aplicación en módulos más pequeños y más manejables, lo que permite que los equipos de desarrollo puedan desarrollar y implementar estos módulos de manera independiente, mejorando así la eficiencia del equipo y la mantenibilidad de la aplicación.

**ofa.js** tiene las características innatas de la microfrontend. A diferencia de otros frameworks, los componentes, páginas y aplicaciones desarrollados con **ofa.js** no requieren precompilación. En contraste, frameworks como React, Vue y Angular requieren una compilación previa en el entorno de Node.js para generar el código cliente. Sin embargo, el código de desarrollo de **ofa.js** se puede colocar directamente en un servidor estático sin necesidad de pasos de compilación adicionales, lo que permite ver, utilizar y ejecutar los cambios en tiempo real.

**ofa.js** cumple con los cinco aspectos clave de la microfrontend:

1. **Implementación independiente**: cada componente y página se puede desarrollar, probar e implementar de forma independiente, lo que permite al equipo lanzar nuevas funcionalidades y solucionar problemas más rápidamente.

2. **Integración**: las aplicaciones desarrolladas con **ofa.js** pueden combinar diferentes módulos en una sola aplicación. Esto se puede lograr compartiendo aplicaciones, páginas, componentes, entre otros.

3. **Equipos separados**: cada módulo frontend (componente/página/aplicación) puede ser desarrollado y mantenido por equipos separados, lo que fomenta la autonomía y la innovación del equipo.

4. **Recursos compartidos**: en un proyecto con **ofa.js**, generalmente existen recursos compartidos como estilos, componentes y páginas, para garantizar la coherencia y la eficiencia.

5. **Carga bajo demanda**: las aplicaciones desarrolladas con **ofa.js** pueden cargar módulos según sea necesario, lo que mejora el rendimiento y la velocidad de carga de la aplicación.

Aunque **ofa.js** no puede utilizar directamente componentes desarrollados con frameworks como Vue y React, los componentes desarrollados con **ofa.js** pueden ser utilizados por Vue y React, lo que brinda a los desarrolladores de diferentes tecnologías más flexibilidad y capacidad de extensión.

**Cómo usar Web Components en Vue:**
- [Envoltura de Componente Web de Vue](https://github.com/vuejs/vue-web-component-wrapper)
- [Integración de Vue con Web Components](https://vuejs.org/v2/cookbook/packaging-sfc-for-npm.html#Using-with-vue-custom-element)
- [Cómo usar Web Components en Vue](https://www.robinwieruch.de/vue-web-components)

**En React, usando Web Components:**
- [Usar Web Components con React](https://reactjs.org/docs/web-components.html)
- [Usar Web Components en React](https://alligator.io/react/using-web-components-in-react/)
- [Integrar Web Components en React](https://blog.bitsrc.io/integrating-web-components-in-react-17a52a6a28e4)

