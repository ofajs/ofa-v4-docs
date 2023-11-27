# Basic Concepts of Instances

The `$` instance encapsulates elements on the page and can be used to select existing elements as well as to create and manipulate new elements. In this chapter, we will introduce how to create new elements and perform some operations on the `$` instance.

## Create New Elements

Through `$` examples, we can directly create new elements and manipulate them, for example: 

<html-viewer>

```
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.40/dist/ofa.min.js"></script>
```

```html
<script>
  const $ele = $('<div style="color:red">I am text</div>');
  $('body').push($ele);
</script>
```

</html-viewer>

In the example above, we created a new `div` element using `$('<div style="color:red">I am text</div>')` and added it to the `body`.

## Getting Child Elements

For instances obtained through `$`, they do not have the `children` property like DOM elements. However, we can access the direct child elements of an instance through array indexing.

<html-viewer>

```
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.40/dist/ofa.min.js"></script>
```

```html
<div>
  <p>First Paragraph</p>
  <p>Second Paragraph</p>
</div>
<script>
  const $div = $('div');
  console.log($div[0]); // Output: <p>First Paragraph</p>
  console.log($div[1]); // Output: <p>Second Paragraph</p>
  console.log($div.length); // Output: 2
</script>
```

</html-viewer>

In the above example, we obtained the `div` element and accessed the first and second `p` elements using indexing. At the same time, we also used `$div.length` to get the number of child elements.

## Operating on Subelements

Through the `$` instance, we can also directly use array methods to manipulate child elements, such as `push` and `pop`:


<html-viewer>

```
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.40/dist/ofa.min.js"></script>
```

```html
<div>
  <p>First Paragraph</p>
</div>
<script>
  const $paragraphs = $('p');
  
  // Add a new div element as a child element
  const $newDiv = $('<div>New Div</div>');
  $paragraphs.push($newDiv);

  setTimeout(()=>{
    // Remove the last child element
    $paragraphs.pop();

    console.log($paragraphs);
  },1000)
</script>
```

</html-viewer>

In the above example, we obtained instances of all `p` elements using `$` and added a new `div` element as a child element using the `push` method. Then, we removed the last child element using the `pop` method.

Through the examples above, you can understand some basic operations of the `$` instance, including creating new elements and accessing and manipulating child elements. The `$` instance provides a convenient way to manipulate elements on the page.