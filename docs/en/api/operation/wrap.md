# wrap

`wrap` method is used to wrap an element with another element. Before executing the `wrap` operation, it automatically performs the initialization operation of the `$` method, so you can directly fill in the specific element string or object.

Below is an example: 

<html-viewer>

```
<!-- Import ofa.js into the project -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<style> div{border: #aaa solid 1px; margin:8px; padding:8px;} </style>
<div>
    <div>I am 1</div>
    <div id="target">I am 2</div>
    <div>I am 3</div>
</div>

<script>
    setTimeout(()=>{
        $('#target').wrap(`<div style="border-color:red;">wrap</div>`);
    }, 500);
</script>
```

</html-viewer>

## Caveat

The target element must have a parent node, otherwise the wrapping operation will fail.

```javascript
const $el = $(`
<div>
    <div id="target"></div>
</div>
`);

$el.wrap("<div>new div</div>"); // ❌ Error, no parent element to wrap
$el.$('#target').wrap("<div>new div</div>"); // ✅ Correct, there is a parent element
```

**Please note, do not manipulate elements with template syntax.**