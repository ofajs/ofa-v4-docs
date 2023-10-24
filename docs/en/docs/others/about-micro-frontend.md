# About Micro Frontends

Micro frontend is a frontend architectural pattern aimed at helping teams build and maintain large, complex frontend applications more effectively. It draws inspiration from the microservices architecture by breaking down the frontend application into smaller, independent parts that can be developed, tested, and deployed by different teams.

During the process of continuously expanding traditional monolithic front-end applications, they may become difficult to maintain and scale. The goal of micro frontends is to split the application into smaller and more manageable modules, enabling development teams to independently develop and deploy these modules, thereby improving team efficiency and application maintainability.

**ofa.js** has inherent micro front-end features. The key difference between it and other frameworks is that components, pages, and applications developed with **ofa.js** do not require pre-compilation. In comparison to frameworks like React, Vue, and Angular, which require a build step in a Node.js environment to generate client-side code, **ofa.js** allows development code to be directly hosted on a static server without additional build steps. This enables real-time viewing, usage, and execution.

ofa.js conforms to the characteristics of micro frontends:

1. Independent Deployment: Each component and page can be developed, tested, and deployed independently, enabling teams to release new features and resolve issues more quickly.

2. Integration: Applications developed based on ofa.js can combine different modules together. This can be achieved through sharing compositions via applications, pages, components, etc.

3. Independent Teams: Each frontend module (component/page/application) can be developed and maintained by an independent team, encouraging autonomy and innovation within teams.

4. Shared Resources: In the ofa.js project, there are usually shared resources such as styles, components, and pages to ensure consistency and efficiency.

5. On-demand Loading: Applications in ofa.js can load modules as needed, enhancing application performance and loading speed.

Although **ofa.js** cannot directly develop components using frameworks such as Vue and React, components developed based on **ofa.js** can be used by Vue and React. This provides developers with different technology stacks with greater flexibility and extensibility.

**Using Web Components in Vue:**
- [Vue Web Component Wrapper](https://github.com/vuejs/vue-web-component-wrapper)
- [Integrating Vue with Web Components](https://vuejs.org/v2/cookbook/packaging-sfc-for-npm.html#Using-with-vue-custom-element)
- [How to Use Web Components in Vue](https://www.robinwieruch.de/vue-web-components)

**Using Web Components in React:**
- [Using Web Components with React](https://reactjs.org/docs/web-components.html)
- [Using Web Components in React](https://alligator.io/react/using-web-components-in-react/)
- [Integrating Web Components into React](https://blog.bitsrc.io/integrating-web-components-in-react-17a52a6a28e4)