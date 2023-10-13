# 表單功能

`$` 實例提供了一些便捷的表單功能，使得處理表單元素更加簡單和高效。

## 通過 formData 生成對象

`formData` 方法用於生成包含目標元素內所有表單元素值的對象。該對象會實時反映表單元素的改動。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Form Data</title>
  <script src="../ofa.js"></script>
</head>
<body>
  <form id="myForm">
    <input type="text" name="username" value="John Doe">
    <input type="email" name="email" value="johndoe@example.com">
    <textarea name="message">Hello World!</textarea>
  </form>
  <script>
    const data = $("#myForm").formData();
    console.log(data);
    // Output: { username: "John Doe", email: "johndoe@example.com", message: "Hello World!" }

    // Watch for changes in form data
    data.watch(() => {
      console.log("Form data changed!", data);
    });
  </script>
</body>
</html>
```

## 監聽特定表單元素

默認情況下，`formData()` 監聽目標元素內的所有 `input`、`select` 和 `textarea` 元素。你可以通過傳遞選擇器來監聽特定的表單元素。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Custom Form Data</title>
  <script src="../ofa.js"></script>
</head>
<body>
  <form id="myForm">
    <input type="text" name="username" value="John Doe">
    <input type="email" name="email" value="johndoe@example.com">
    <input type="checkbox" name="accept" checked>
  </form>
  <script>
    const data = $("#myForm").formData('input[type="text"], input[type="email"]');
    console.log(data);
    // Output: { username: "John Doe", email: "johndoe@example.com" }
  </script>
</body>
</html>
```

## Stanz 對象

`formData()` 方法返回的對象被稱為 Stanz 對象。Stanz 是 `$` 擴展庫的一部分，提供了對表單數據的高效處理和監聽功能。

你可以通過訪問 [https://github.com/kirakiray/stanz](https://github.com/kirakiray/stanz) 來詳細了解 Stanz 的使用教程和功能。

通過以上的表單功能，你可以輕松地處理表單元素的值和變化，從而提高表單操作的便捷性和效率。