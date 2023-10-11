# Commonly Used Methods

## attr

`attr` method allows you to get or set the attributes of an element.

```html
<div id="example" name="i am hello word">Hello World</div>
<script>
    const $div = $('#example');
    console.log($div.attr('name')); // Output: "i am hello word"
    $div.attr('title', "change title");
</script>
```

In the above example, we first selected a `div` element with an `id` of "example". Then, we used the `attr` method to get the `name` attribute of this element and print it to the console. Next, we used the `attr` method to set the `title` attribute of this element to "change title".

