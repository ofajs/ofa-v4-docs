# formData

`formData` メソッドは、フォーム要素と関連付けられたオブジェクトデータを生成して、フォーム要素の処理をより簡単かつ効率的に行います。このメソッドは、目標要素内のすべてのフォーム要素の値を含むオブジェクトを生成し、そのオブジェクトはフォーム要素の変更をリアルタイムに反映します。

以下の例では、 `formData` メソッドを使用して、フォーム要素と関連付けられたオブジェクトデータを生成する方法を示しています：

<html-viewer>

```html
<!-- 将 ofa.js 引入项目 -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<form id="myForm">
  <input type="text" name="username" value="John Doe" />
  <div>
    sex:
    <label>
      man
      <input type="radio" name="sex" value="man" />
    </label>
    <label>
      woman
      <input type="radio" name="sex" value="woman" />
    </label>
  </div>
  <textarea name="message">Hello World!</textarea>
</form>
<br />
<div id="logger"></div>
<script>
  const data = $("#myForm").formData();

  $("#logger").text = data;
  data.watch(() => {
    $("#logger").text = data;
  });
</script>
```

</html-viewer>

この例では、テキスト入力フィールド、ラジオボタン、テキストエリアを含むフォームを作成し、`formData`メソッドを使用してこれらのフォーム要素の値を含む`data`���ブジェクトを作成しました。また、`watch`メソッドを使用してデータの変更を監視し、データをリアルタイムでページに表示するようにしました。ユーザーがフォーム要素の値を変更すると、`data`オブジェクトが適切に更新されるため、データ処理が非常に簡単で効率的になります。

## バインディングの逆転

生成されたオブジェクトデータは、逆のバインディング能力も持っています。つまり、オブジェクトのプロパティを変更すると、関連するフォーム要素の値も自動的に更新されます。これはフォームデータを処理する際に非常に便利であり、双方向のデータバインディン��を簡単に実現することができます。

以下の例では、`formData`メソッドで生成されたオブジェクトデータの使用方法と、逆方向のデータバインディングの方法を示しています。

<html-viewer>

```html
<!-- 将 ofa.js 引入项目 -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<form id="myForm">
  <input type="text" name="username" value="John Doe" />
  <div>
    sex:
    <label>
      man
      <input type="radio" name="sex" value="man" />
    </label>
    <label>
      woman
      <input type="radio" name="sex" value="woman" />
    </label>
  </div>
  <textarea name="message">Hello World!</textarea>
</form>
<br />
<div id="logger"></div>
<script>
  const data = $("#myForm").formData();

  setTimeout(()=>{
    data.username = "Yao";
    data.sex = "man";
    data.message = "ofa.js is good!";
  },1000);
</script>
```

</html-viewer>

在这个示例中，我们首先创建了一个包含文本输入框、单选按钮和文本区域的表单，然后使用 `formData` 方法生成了一个数据对象 `data`。随后，通过修改 `data` 对象的属性，我们实现了反向数据绑定，即表单元素的值会随着对象属性的更改而自动更新。这种双向数据绑定功能使得与表单数据的交互更加便捷。

## 监听特定的表单

デフォルトでは、`formData()` メソッドはターゲット要素内のすべての `input`、`select`、`textarea` 要素を監視します。ただし、特定のフォーム要素のみを監視したい場合は、[CSS セレクタ](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors) を渡して実現することができます。

以下の例では、特定のフォーム要素を監視するためにCSSセレクタを渡す方法を示しています：

<html-viewer>

```html
<!-- 将 ofa.js 引入项目 -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<form id="myForm">
  <input type="text" name="username" value="John Doe" class="use-it" />
  <div>
    性別：
    <label>
      男性
      <input type="radio" name="sex" value="man" class="use-it" />
    </label>
    <label>
      女性
      <input type="radio" name="sex" value="woman" class="use-it" />
    </label>
  </div>
  <textarea name="message">このフォーム要素はバインドされていません</textarea>
</form>
<br />
<div id="logger"></div>
<script>
  const data = $("#myForm").formData(".use-it");

  $("#logger").text = data;
  data.watch(() => {
    $("#logger").text = data;
  });
</script>
```

</html-viewer>

この例では、クラスが"use-it"であるフォーム要素だけを監視したいので、"use-it"をパラメーターとしてformData()メソッドに渡しました。これにより、このクラス名を持つフォーム要素のみが監視され、生成されたデータオブジェクトに含まれます。フォーム要素を選択的に監視するために非常に便利であり、フォームデータをより正確に管理することができます。

## カスタムフォーム

カスタムフォームコンポーネントの使用は非常に簡単です。ただ、カスタムコンポーネントに **value 属性** を追加し、**name 属性** を設定するだけです。

以下の例では、"custom-input"という名前のカスタムフォームコンポーネントを作成します。このコンポーネントは、編集可能なテキストボックスであり、テキストが変更され��たびにその `value` 属性がリアルタイムで更新されます。

<comp-viewer comp-name="custom-input">

```
<div id="myForm">
  <input type="text" name="username" value="John Doe" />
  <custom-input name="message"></custom-input>
  <div id="logger"></div>
</div>
<script>
  const data = $("#myForm").formData("input,custom-input");
  $("#logger").text = data;
  data.watch(() => {
    $("#logger").text = data;
  });
</script>
```

```html
<template component>
  <style>
    :host{
      display: block;
    }
    .editor {
      display: inline-block;
      min-width: 200px;
      line-height: 30px;
      height: 30px;
      border: #aaa solid 1px;
      border-radius: 4px;
      padding: 4px;
      font-size: 14px;
    }
  </style>
  <div
    class="editor"
    contenteditable="plaintext-only"
    :text="value"
    on:input="changeText"
  ></div>
  <script>
    export default {
      tag:"custom-input",
      attrs: {
        name: "",
      },
      data: {
        value: "Default txt",
      },
      proto: {
        changeText(e) {
          this.value = $(e.target).text;
        },
      },
    };
  </script>
</template>
```

</comp-viewer>

;Ignore bugs;
自分でカスタムフォームコンポーネントを使用する場合、それをフォームに追加し、必要な `name` 属性を設定するだけです。

```html
<div id="myForm">
  <input type="text" name="username" value="John Doe" />
  <custom-input name="message"></custom-input>
  <div id="logger"></div>
</div>
<script>
  const data = $("#myForm").formData("input,custom-input");
  $("#logger").text = data;
  data.watch(() => {
    $("#logger").text = data;
  });
</script>
```

在上述示例中，我们通过添加`<custom-input>`元素并设置`name`属性来使用自定义表单组件。随后，我们使用`formData()`方法监听输入元素和自定义组件的值，以便实时获取和处理表单数据。这种方法可以让你非常方便地扩展你的表单，以包括自定义的表单组件，从而满足你的特定需���。

## 在组件或页面内使用表单数据

有时，你可能需要在组件或页面内使用表单数据，并且需要在 `ready` 周期生命周期时生成数据并将其绑定到组件上。

;Ignore bugs;
以下の例では、カスタムコンポーネント内でフォームデータを使用する方法を示しています。このコンポーネントにはテキスト入力フィールドが含まれており、コンテンツを入力すると、それがリアルタイムでログのデータを更新します。

<comp-viewer comp-name="custom-input">

```html
<template component>
  <style>
    :host{
      display: block;
    }
  </style>
  <input type="text" name="username" value="John Doe" />
  <div>{{logtext}}</div>
  <script>
    export default {
      tag:"custom-input",
      data: {
        fdata:{},
        logtext: ""
      },
      watch:{
        fdata(data){
          if(data){
            this.logtext = JSON.stringify(data);
          }
        }
      },
      ready(){
        this.fdata = this.shadow.formData();
      }
    };
  </script>
</template>
```

</comp-viewer>

通过 `ready` 周期生命周期，在组件准备就绪后，我们使用 `this.shadow.formData()` 方法生成了表单数据对象 `fdata`。然后，我们使用 `watch` 监听 `fdata` 的变化，当数据发生变化时，将其转化为 JSON 字符串并更新 `logtext`，以实现实时显示表单数据的功能。