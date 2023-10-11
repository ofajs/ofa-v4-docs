# Getting Started
## How to Use
### Direct Reference

You can directly reference ofa.js to your page using CDN like this:

```html
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.25/dist/ofa.js"></script>
```

### Installation via npm

First, install ofa.js in your project:

```shell
npm install ofa.js --save
```

Then import the ofa.js module in your project:

```javascript
import "ofa.js"; // esm
// or
require("ofa.js"); // cmd
```

### Usage

After referencing the resource, ofa.js will set a `$` property on the global scope. All the functionalities will be available on `$`. The following tutorials will explain its usage in detail.

Under normal circumstances, we recommend using the direct reference method to add ofa.js, while the use of npm is used to be compatible with frameworks like React and Vue.

