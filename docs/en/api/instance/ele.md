# `ele` Property

Through the `ele` property, you can access the actual element of the instance and use native properties or methods.

<html-viewer>

```
<!-- Import ofa.js into the project -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<ul>
    <li id="target">I am target</li>
</ul>
<div id="logger" style="color:red;"></div>

<script>
    setTimeout(()=>{
       var ele = $("#target").ele;
       ele.innerHTML = '<b>change target</b>';
       $("#logger").text = ele.tagName;
    },500);
</script>
```

</html-viewer>

In the example above, we used the `ele` property to access an element and modified its inner HTML content, as well as the [tagName](https://developer.mozilla.org/en-US/docs/Web/API/Element/tagName) of the element for recording purposes. This allows you to perform more complex operations on elements using native JavaScript methods.