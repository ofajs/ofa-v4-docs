# prev

Using the `prev` attribute, you can get the previous adjacent element instance of an element.

<html-viewer>

```
<!-- Import ofa.js into the project -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<ul>
    <li id="first">I am 1</li>
    <li id="target">I am target</li>
    <li>I am 3</li>
</ul>

<script>
    setTimeout(()=>{
       $('#target').prev.text = "change target prev element";
    },500);

    console.log($('#first') === $('#target').prev); // => true
</script>
```

</html-viewer>