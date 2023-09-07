# Basic Concepts of Instances

The `$` instance is an encapsulation of elements on a page. In addition to selecting existing elements, it can also create new elements and manipulate them. In this chapter, we will introduce how to create new elements and perform some operations on the `$` instance.

## Creating New Elements

Through the `$` instance, we can directly create new elements and manipulate them. For example:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Create New Element</title>
  <script src="../ofa.js"></script>
</head>
<body>
  <script>
    const $ele = $('<div style="color:red">I am text</div>');
    $('body').push($ele);
  </script>
</body>
</html>
```

In the above example, we created a new div element using `$('<div style="color:red">I am text</div>')` and added it to the body.

## Accessing Child Elements

The instances retrieved using `$` do not have a `children` property like DOM elements. However, we can access the direct child elements of an instance using array indexes:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Access Child Elements</title>
  <script src="../ofa.js"></script>
</head>
<body>
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
</body>
</html>
```

In the above example, we retrieved the div element and accessed the first and second p elements using indexes. We also used `$div.length` to get the number of child elements.

## Manipulating Child Elements

Using the `$` instance, we can directly use array methods to manipulate child elements, such as `push` and `pop`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Manipulate Child Elements</title>
  <script src="../ofa.js"></script>
</head>
<body>
  <div>
    <p>First Paragraph</p>
  </div>
  <script>
    const $paragraphs = $('p');
    
    // Add a new div element as a child
    const $newDiv = $('<div>New Div</div>');
    $paragraphs.push($newDiv);

    setTimeout(()=>{
      // Remove the last child
      $paragraphs.pop();

      console.log($paragraphs);
    },1000)

  </script>
</body>
</html>
```

In the above example, we obtained instances of '$' for all 'p' elements and used the 'push' method to add a new 'div' element as a child element, and then used the 'pop' method to remove the last child element.

Through the above example, you can understand some basic operations of the '$' instance, including creating new elements and accessing and manipulating child elements. The '$' instance provides convenient methods for manipulating elements on the page.

