off

By using the `off` method, you can unregister the registered event handler to stop listening for the event.

Here is an example demonstrating how to use the `off` method to remove event listeners:

<html-viewer>

```
<!-- Import ofa.js into the project -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<button id="target">add count</button>
<br>
<br>
<div id="logger" style="border:red solid 1px;padding:8px;">-</div>

<script>
    let count = 0;
    const f = ()=> {
        $("#logger").text = count++;
        if(count === 3){
            $("#target").off("click", f);
        }
    }
    $("#target").on("click", f);
</script>
```

</html-viewer>

In this example, we registered a click event handler `f`. When the button is clicked, the event handler will display the click count in `#logger`. Using the `off` method, we cancelled the event listener when the click count reaches 3.