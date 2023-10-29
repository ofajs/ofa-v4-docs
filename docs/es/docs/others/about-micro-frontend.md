# Sobre Micro Frontends

La microfrontend es un patrón de arquitectura frontend que tiene como objetivo ayudar a los equipos a construir y mantener aplicaciones frontend grandes y complejas. Se basa en la idea de la arquitectura de microservicios, descomponiendo la aplicación frontend en partes más pequeñas e independientes que pueden ser desarrolladas, probadas y desplegadas por diferentes equipos.

Durante el proceso de expansión de las aplicaciones front-end monolíticas tradicionales, puede volverse difícil mantener y ampliarlas. El objetivo de micro frontends es dividir la aplicación en módulos más pequeños y manejables, permitiendo que los equipos de desarrollo puedan desarrollar e implementar estos módulos de manera independiente, mejorando así la eficiencia del equipo y la mantenibilidad de la aplicación.

**ofa.js** tiene características nativas de microfrontend, y se diferencia de otros marcos en que los componentes, páginas y aplicaciones desarrollados con **ofa.js** no requieren compilación previa. En comparación con marcos como React, Vue y Angular, que necesitan ser construidos una vez en un entorno Node.js para generar el código del cliente, el código de desarrollo de **ofa.js** se puede colocar directamente en un servidor estático y se puede ver, usar y ejecutar en tiempo real sin pasos de construcción adicionales.

**ofa.js** se ajusta a las características del microfrontend:

1. **Implementación individual**: Cada componente y página se pueden desarrollar, probar e implementar de forma independiente, lo que permite al equipo lanzar nuevas funciones y solucionar problemas más rápidamente.

2. **Integración**: Las aplicaciones desarrolladas con **ofa.js** pueden combinar diferentes módulos. Esto se puede lograr compartiendo combinaciones a través de aplicaciones, páginas, componentes, etc.

3. **Equipos independientes**: Cada módulo frontend (componente/página/aplicación) puede ser desarrollado y mantenido por equipos independientes, fomentando así la autonomía y la innovación del equipo.

4. **Recursos compartidos**: En el proyecto **ofa.js**, generalmente hay recursos compartidos como estilos, componentes, páginas, etc., para garantizar la consistencia y la eficiencia.

5. **Carga a pedido**: Las aplicaciones de **ofa.js** pueden cargar módulos según sea necesario, lo que mejora el rendimiento y la velocidad de carga de la aplicación.

Aunque **ofa.js** no puede utilizar directamente componentes desarrollados con frameworks como Vue y React, los componentes desarrollados con **ofa.js** pueden ser utilizados por Vue y React, lo que brinda una mayor flexibilidad y escalabilidad para desarrolladores de diferentes tecnologías.

**Usando Componentes Web en Vue:**
- [Wrapper de Componentes Web para Vue](https://github.com/vuejs/vue-web-component-wrapper)
- [Integración de Vue con Componentes Web](https://vuejs.org/v2/cookbook/packaging-sfc-for-npm.html#Using-with-vue-custom-element)
- [Cómo usar Componentes Web en Vue](https://www.robinwieruch.de/vue-web-components)

En React utilice Web Components:
- [Usar Web Components junto con React](https://reactjs.org/docs/web-components.html)
- [Usar Web Components en React](https://alligator.io/react/using-web-components-in-react/)
- [Integrar Web Components en React](https://blog.bitsrc.io/integrating-web-components-in-react-17a52a6a28e4)