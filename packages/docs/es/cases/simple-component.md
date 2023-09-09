# Component creation and usage

Una vez que se complete la carga de ofa.js, se registrará globalmente un componente llamado `load-module`, que se puede referenciar utilizando la abreviatura `l-m`. Su uso es similar a la etiqueta `script`, mediante el uso del atributo `src` para referenciar la dirección de tu componente desarrollado.

Now, let's start creating our own component. Firstly, create an HTML file with a name that matches the component name.

En el archivo del componente, primero agregue un elemento `template` y agregue el atributo `component`. Coloque el contenido que el componente necesita renderizar dentro de este elemento `template`. Finalmente, este contenido se renderizará en el Shadow DOM del componente, el cual está aislado del entorno externo para evitar contaminar el entorno externo.

Next, simply use the 'l-m' component to reference your developed component. On the page, directly use the component tag that you have defined.

It is important to note that the registered component name can only use lowercase letters and the hyphen '-' symbol, and must contain at least one '-'. This naming rule must be followed.

Through this example, you can learn how to create a component named 'my-comp' and use it on another page. You can also use an external CSS file to style the component.

<a href="../../publics/examples/simple-component/demo.html" preview demo></a>
<a href="../../publics/examples/simple-component/my-comp.html" main demo></a>
<a href="../../publics/examples/simple-component/public.css" demo></a>

