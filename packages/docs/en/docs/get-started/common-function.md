# Common Methods

## attr

The `attr` method allows you to get or set the attribute of an element.

```html
<div id="example" name="i am hello word">Hello World</div>
<script>
    const $div = $('#example');
    console.log($div.attr('name')); // Output: "i am hello word"
    $div.attr('title', "change title");
</script>
```

In the above example, we first select a `div` element with an `id` of "example". Then, we use the `attr` method to get the `name` attribute of the element and print it to the console. Next, we use the `attr` method to set the `title` attribute of the element to "change title".

