# ofa.js Progressive JavaScript Framework for the new Generation

<simp-block>

<punch-logo>
    <img src="../publics/logo.svg" width="100" logo alt="ofa.js" />
    <h2>ofa.js</h2>
    <img src="../publics/npm-logo.png" slot="fly" height="40" alt="npm" />
    <img src="../publics/nodejs-logo.png" slot="fly" height="40" alt="nodejs" />
    <img src="../publics/webpack-logo.png" slot="fly" height="40" alt="webpack" />
</punch-logo>

## The No Build JavaScript frameworks

### No need for tedious learning, no need for npm, nodejs, webpack, get started immediately

[Case Tutorial](./cases/index.md)

```html
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.25/dist/ofa.min.js"></script>
```

</simp-block>

<simp-block>

## ofa.js Packaged Based on Web Components

### Enter the new generation, Web Components are widely supported. Try ofa.js and see if it suits you.

<support-platforms></support-platforms>

<a href="../publics/download/ofajs-start.zip" target="_blank">Download the initial project</a>
<a href="../publics/download/ofajs-start/index.html" target="_blank">View the initial project online</a>

</simp-block>

<simp-block>

## Extremely easy to use

Unlike other front-end frameworks, using components developed based on ofa.js does not require reading complicated getting started guides. Immediately create an HTML file and experience the component of "punching the logo" component.

<html-viewer style="width:100%;">

```
<!-- Import ofa.js into the project -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.25/dist/ofa.min.js"></script>
<!-- Load the developed punch-logo component -->
<l-m src="https://kirakiray.github.io/ofa-v4-docs/docs/publics/comps/punch-logo.html"></l-m>
```

```html
<!-- Use the punch-logo component -->
<punch-logo style="margin:50px 0 0 100px;">
    <img src="https://kirakiray.github.io/ofa-v4-docs/docs/publics/logo.svg" logo height="90" />
    <h2>No Overtime</h2>
    <p slot="fly">Give me off-duty</p>
    <p slot="fly">Leave work later</p>
    <p slot="fly">Overtime on weekends</p>
</punch-logo>
```

</html-viewer>

</simp-block>

<simp-block>

## One-step encapsulation of components, freeing from cumbersome processes

In the past, encapsulating Web Components involved complex learning, but now, it only requires one file.

<comp-viewer comp-name="my-switch" max-height="500" style="width:100%;">

```html
<template component>
  <style>
    .switch {
      position: relative;
      display: inline-block;
      width: 60px;
      height: 34px;
      background-color: #ccc;
      transition: background-color 0.4s;
      border-radius: 34px;
      cursor: pointer;
    }

    .slider {
      position: absolute;
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      transition: transform 0.4s;
      border-radius: 50%;
    }

    .switch.checked {
      background-color: #2196f3;
    }

    .switch.checked .slider {
      transform: translateX(26px);
    }
  </style>
  <div class="switch" class:checked="checked" on:click="checked = !checked">
    <span class="slider"></span>
  </div>
  <script>
    export default {
      tag: "my-switch",
      data: {
        checked: true,
      },
    };
  </script>
</template>
```

</comp-viewer>

</simp-block>


<simp-block>

## Provides a variety of convenient template syntax.

<case-switch>

<comp-viewer switch-name="Render Text" comp-name="text-demo" max-height="500" style="width:100%;">

```html
<template component>
  <div>Rendered text: {{txt}}</div>
  <script>
    export default {
      tag: "text-demo",
      data: {
        txt:"I am txt"
      },
    };
  </script>
</template>
```

</comp-viewer>

<comp-viewer switch-name="Set Properties" comp-name="prop-demo" max-height="500" style="width:100%;">

```html
<template component>
  <div :text="txt1"></div>
  <div :html="txt2"></div>
  <script>
    export default {
      tag: "prop-demo",
      data: {
        txt1:"<b>I am txt1</b>",
        txt2:"<b>I am txt2</b>",
      },
    };
  </script>
</template>
```

</comp-viewer>


<comp-viewer switch-name="Sync Data" comp-name="sync-demo" max-height="500" style="width:100%;">

```html
<template component>
  <div>{{txt}}</div>
  <input type="text" sync:value="txt" />
  <script>
    export default {
      tag: "sync-demo",
      data: {
        txt:"I am txt",
      },
    };
  </script>
</template>
```

</comp-viewer>

<comp-viewer switch-name="Bind Event" comp-name="event-demo" max-height="500" style="width:100%;">

```html
<template component>
  <div>count: {{count}}</div>
  <button on:click="count++">count++</button>
  <script>
    export default {
      tag: "event-demo",
      data: {
        count: 0
      },
    };
  </script>
</template>
```

</comp-viewer>

<comp-viewer switch-name="Use If" comp-name="if-demo" max-height="500" style="width:100%;">

```html
<template component>
  <x-if :value="count % 2">
    <div style="color:red">{{count}}</div>
  </x-if>
  <x-else>
    <div style="color:blue">{{count}}</div>
  </x-else>
  <button on:click="count++">count++</button>
  <script>
    export default {
      tag: "if-demo",
      data: {
        count: 0
      },
    };
  </script>
</template>
```

</comp-viewer>


<comp-viewer switch-name="Use Fill" comp-name="fill-demo" max-height="500" style="width:100%;">

```html
<template component>
  <ul>
  <x-fill :value="lists">
    <li>{{$index}} - {{$data.name}}</li>
  </x-fill>
  </ul>
  <script>
    export default {
      tag: "fill-demo",
      data: {
        lists:[{name:"One"}, {name:"Two"}, {name:"Three"}]
      },
    };
  </script>
</template>
```

</comp-viewer>

</case-switch>

</simp-block>

<simp-block>

## Alternatives to jQuery for Selection

### With a API similar to jQuery, you can enjoy the same convenience.

<split-code>

```javascript
// jQuery Code
$("#target").html("some html code"); // Set html
$("#target").text("set text"); // Set text
var ele_text = $("#target").text(); // Get text
var parents = $("#target").parents(); // Get an array of all parent layers
var child = $("#target").children()[0]; // Get the first child element
```

```javascript
// ofa.js Code
$("#target").html = "some html code";  // Set html
$("#target").text = "set text"; // Set text
var ele_text = $("#target").text; // Get text
var parents = $("#target").parents; // Get an array of all parent layers
var child = $("#target")[0]; // Get the first child element
```

</split-code>

</simp-block>

<simp-block>

## Use Cases

<a href="https://obook.ofajs.com/">obook The easiest document building tool</a>

</simp-block>

<l-m src="https://cdn.jsdelivr.net/npm/obook@2.1.28/blocks/simp-block.html"></l-m>
<l-m src="../publics/comps/punch-logo.html"></l-m>
<l-m src="../publics/comps/support-platforms.html"></l-m>
<l-m src="../publics/comps/case-switch.html"></l-m>
<l-m src="../publics/comps/split-code.html"></l-m>