# Getting Started
## How to Use
### Direct Quote

You can directly reference ofa.js to your page by using the CDN address: 

```html
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.40/dist/ofa.js"></script>
```

### Install via npm

First, install ofa.js in your project: 

```shell
npm install ofa.js --save
```

Then import the ofa.js module into the project:

```javascript
import "ofa.js"; // esm
// or
require("ofa.js"); // cmd
```

### Use

After referencing the resource, ofa.js will set a `$` property on the global scope, and all functionalities are accessed through `$`. Its usage will be explained in detail in the following tutorials.

Usually, we recommend using the direct injection method to add ofa.js, while the npm method is used for compatibility with frameworks such as React and Vue.