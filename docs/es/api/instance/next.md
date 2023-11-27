# next

Utilizando el atributo `next`, puedes obtener la siguiente instancia del elemento adyacente.

<html-viewer>

```
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.40/dist/ofa.min.js"></script>
```

```html
<ul>
    <li id="first">I am 1</li>
    <li id="target">I am target</li>
    <li>I am 3</li>
</ul>

<script>
    setTimeout(()=>{
       $('#target').next.text = "change target next element";
    },500);

    console.log($('#first') === $('#target').next); // => true
</script>
```

</html-viewer>