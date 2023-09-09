# Component creation and usage

Once the loading of ofa.js has been completed, a component named 'load-module' will be registered globally, which can be referenced using the abbreviation 'l-m'. Its usage is similar to the '<script>' tag, by using the 'src' attribute to reference the address of the developed component.

Now, let's start creating our own component. Firstly, create an HTML file with a name that matches the component name.

In the component file, first add a '<template component></template>' element. Place the content that needs to be rendered by the component inside this 'template' element. Ultimately, this content will be rendered into the component's Shadow DOM, which is isolated from the external environment to prevent contamination.

Next, simply use the 'l-m' component to reference your developed component. On the page, directly use the component tag that you have defined.

It is important to note that the registered component name can only use lowercase letters and the hyphen '-' symbol, and must contain at least one '-'. This naming rule must be followed.

Through this example, you can learn how to create a component named 'my-comp' and use it on another page. You can also use an external CSS file to style the component.

<a href="../../publics/examples/simple-component/demo.html" preview demo></a>
<a href="../../publics/examples/simple-component/my-comp.html" main demo></a>
<a href="../../publics/examples/simple-component/public.css" demo></a>

