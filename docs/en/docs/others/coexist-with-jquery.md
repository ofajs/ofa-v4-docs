# Coexistence with jQuery

If you are using ofa.js (≥4.3.40), you can coexist with jQuery. You have two main choices:

## 1. Use `noConflict`

You can call the [noConflict](https://api.jquery.com/jQuery.noConflict/) method after importing jQuery, which will release the `$` variable to avoid conflicts.

```html
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
<script src="https://code.jquery.com/jquery-3.7.1.js"></script>
<script>
  $.noConflict();
  // Now, you can use the full name of jQuery to call it, for example jQuery.ajax().
</script>
```

## 2. Import libraries in order

Another method is to import the libraries in order, and the library imported later will occupy the "$" variable. In this case, you can use the global variable "ofa" instead of the original "$".

```html
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
<script src="https://code.jquery.com/jquery-3.7.1.js"></script>
<!-- Now $ is an alias for jQuery, you can use ofa instead of $ to invoke functions related to ofa.js -->
```

By using one of these two methods, you can ensure that ofa.js and jQuery coexist on the same page without conflicts.