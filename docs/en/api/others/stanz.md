# Instance Data Features

The instance objects obtained or created through `$` have complete [stanz](https://github.com/kirakiray/stanz) data features because the `$` instance inherits from [stanz](https://github.com/kirakiray/stanz). This means that you can use the data manipulation methods and features provided by `stanz` to manipulate and listen to the data of the instance objects.

The following examples use regular elements because custom components typically come with pre-registered data, while regular elements usually only contain tag information, so they are more suitable for demonstration purposes.

## watch

Instances can be monitored for value changes using the `watch` method. Even if the values of the object's child objects are modified, the changes can still be detected through the object's `watch` method.

Here is an example demonstrating how to use the `$` instance and `watch` method:

<html-viewer>

```
<!-- Import ofa.js into the project -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div id="target"></div>
<br />
<div id="logger" style="border: #aaa solid 1px; padding: 8px"></div>

<script>
  const target = $("#target");
  $("#logger").text = target;
  target.watch(() => {
    $("#logger").text = target;
  });

  setTimeout(() => {
    target.aaa = "I am aaa";
  }, 600);
  setTimeout(() => {
    target.bbb = {
      child: {
        val: "I am bbb child val",
      },
    };
  }, 1200);
  setTimeout(() => {
    target.bbb.child.val = "change bbb child val";
  }, 1800);
</script>
```

</html-viewer>

In this example, we first create a `$` instance object called `target`, and then use the `watch` method to listen for changes in it. Even if we modify the value of a sub-object of the object, such as `target.bbb.child.val`, these changes can be detected and the content of the `logger` element will be updated in the `watch` method. This demonstrates the powerful features of the `$` instance object, allowing you to easily monitor changes in objects.

## watchTick

`watchTick` is similar to the `watch` method, but it includes throttling internally. It executes only once on a single thread, so it can be more effective in listening for data changes in scenarios with higher performance requirements.

Here is an example demonstrating how to use the `watchTick` method of the `$` instance:

<html-viewer>

```
<!-- Import ofa.js into the project -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div id="target"></div>
<br />
<div id="logger1" style="border: blue solid 1px; margin: 8px"></div>
<div id="logger2" style="border: red solid 1px; margin: 8px"></div>

<script>
  const target = $("#target");
  let count1 = 0;
  target.watch(() => {
    count1++;
    $("#logger1").text = 'watch execution count: ' + count1;
  });

  let count2 = 0;
  target.watchTick(()=>{
    count2++;
    $("#logger2").text = 'watchTick execution count: ' + count2;
  });

  setTimeout(() => {
    target.aaa = "I am aaa";
    target.bbb = "I am bbb";
    target.ccc = "I am ccc";
  }, 1000);
</script>
```

</html-viewer>

In this example, we first create a `$` instance object called `target`. Then, we use the `watch` method and the `watchTick` method to listen for changes in the object. The `watch` method runs immediately when the data changes, while the `watchTick` method only executes once in a single thread, limiting the frequency of listening operations. You can choose to use either the `watch` or `watchTick` method depending on your needs to monitor data changes.

## unwatch

The `unwatch` function is used to cancel the monitoring of data, and can revoke the previously registered `watch` or `watchTick` monitoring.

Below is an example demonstrating how to use the `unwatch` method of the `$` instance:

<html-viewer>

```
<!-- Import ofa.js into the project -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```
<div id="target"></div>
<br />
<div id="logger1" style="border: blue solid 1px; margin: 8px"></div>
<div id="logger2" style="border: red solid 1px; margin: 8px"></div>

<script>
  const target = $("#target");
  const tid1 = target.watch(() => {
    $("#logger1").text = JSON.stringify(target);
  });

  const tid2 = target.watchTick(()=>{
    $("#logger2").text = JSON.stringify(target);
  });

  setTimeout(() => {
    target.aaa = "I am aaa";
    // Undo the listening
    target.unwatch(tid1);
    target.unwatch(tid2);
  }, 500);
  setTimeout(() => {
    target.bbb = "I am aaa"; // Will not trigger the registered functions above, because the listening has been revoked
  }, 1000);
</script>
```

</html-viewer>

In this example, we first create a `$` instance object called `target`, and then register two listeners using the `watch` method and `watchTick` method respectively. Afterwards, we use the `unwatch` method to revoke these two listeners by passing in the saved return values `tid1` and `tid2`. This means that the property changes in the first `setTimeout` will not trigger any listeners because they have been revoked.

## Values that cannot be monitored

In the `$` instance, using property names starting with the underscore `_` means that these values will not be watched by the `watch` or `watchTick` methods. This is useful for some temporary or private properties, as you can freely change them without triggering the listeners.

Here is an example demonstrating how to use underscore-prefixed attribute values to avoid being monitored:

<html-viewer>

```
<!-- Import ofa.js into the project -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div id="target"></div>
<br />
<div id="logger" style="border: #aaa solid 1px; padding: 8px"></div>

<script>
  const target = $("#target");
  $("#logger").text = target;

  // Use the watch method to listen for property value changes
  target.watch(() => {
    $("#logger").text = target;
  });

  setTimeout(() => {
    // This property value will not trigger the listener
    target._aaa = "I am aaa";
  }, 600);

  setTimeout(() => {
    // Even if the _aaa property value is changed, it still won't trigger the listener
    target._aaa = "change aaa";
  }, 1200);
</script>
```

</html-viewer>

In this example, we create a `$` instance object called `target`, and then use the `watch` method to listen for changes in the property values. In the `setTimeout`, we attempt to change the `_aaa` property value, but this change will not trigger the listener. This is very useful for situations where you need to update property values without triggering the listener.

## Basic Features

The object data set on the instance will be converted to a Stanz instance, which allows for monitoring.

```javascript
const obj = {
  val: "I am obj"
};

$("#target").obj = obj;
console.log($("#target").obj.val === obj.val); // => true
console.log($("#target").obj === obj); // => false
```


We can also use `$.stanz` to create a Stanz data without being bound to an instance.

```javascript
const data = $.stanz({
  val: "I am val"
});

data.watch(() => {
  console.log(data.val); // => change val
});

data.val = "change val";
```

These examples demonstrate the basic features of setting object data as a Stanz instance for monitoring.

For more complete features, please refer to [stanz](https://github.com/kirakiray/stanz);