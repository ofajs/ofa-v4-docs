# Component Creation and Usage

Once the loading of ofa.js is completed, a component named 'load-module' will be registered globally, and you can reference it using the abbreviation 'l-m'. Its usage is similar to that of the 'script' tag, where you reference the address of your developed component through the 'src' attribute.

Now, let's start creating our own component. First, create an HTML file with a name that matches the component name.

In the component file, first add a `template` element and add a `component` attribute. Place the content that the component needs to render inside this `template` element. Finally, this content will be rendered into the component's Shadow DOM. Shadow DOM is isolated from the external environment to prevent contamination of the external environment.

Next, simply use the `l-m` component to reference the component you developed. On the page, use the component tag you defined directly.

Note that the registered component name can only use lowercase letters and hyphens (-), and must include at least one hyphen. This naming rule must be followed.

Through this example, you can learn how to create a component named `my-comp` and use it in another page. You can also use an external CSS file to style the component.

<a href="../../publics/examples/simple-component/demo.html" preview demo></a>
<a href="../../publics/examples/simple-component/my-comp.html" main demo></a>
<a href="../../publics/examples/simple-component/public.css" demo></a>

