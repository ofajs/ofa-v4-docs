# unwrap

The `unwrap` method is used to remove one layer of external wrapping elements from the target element.

Below is an example: 

<html-viewer>

```
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.40/dist/ofa.min.js"></script>
```

```html
<style> div{border: #aaa solid 1px; margin:8px; padding:8px;} </style>
<div style="color:red;border-color:red;">
    <div id="target">I am target</div>
</div>

<script>
    setTimeout(()=>{
        $('#target').unwrap();
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

$el.unwrap(); // ❌ Error, cannot unwrap without a parent element
$el.$('#target').unwrap(); // ✅ Correct, unwrap the wrapped element
```

When there are other sibling elements, unwrap cannot be executed.

```javascript
const $el = $(`
<div>
    <div id="target"></div>
    <div>I am siblings</div>
</div>
`);

$el.$('#target').unwrap(); // ❌ Error, because it has other adjacent nodes
```

**Please note, do not manipulate elements with template syntax.**