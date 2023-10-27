# formData

`formData`メソッドは、フォーム要素とバインドされたオブジェクトデータを生成し、フォーム要素の処理を簡単かつ効率的に行うためのものです。このメソッドは、対象要素内のすべてのフォーム要素の値を含むオブジェクトを生成し、そのオブジェクトはフォーム要素の更をリアルタイムに反映します。

下記の例では、`formData`メソッドを使用してフォーム要素にバインドされたオブジェクトデータを生成する方法を示しています。

<html-viewer>

```html
<!-- ofa.js をプロジェクトに追加する -->
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

この例では、テキスト入力ボックス、ラジオボタン、テキストエリアを含むフォームを作成し、 `formData` メソッドを使用してこれらのフォーム要素の値を持つ `data` オブジェクトを作成しました。また、データの変更を監視し、データをリアルタイムに表示するために `watch` メソッドも使用しています。ユーザーがフォーム要素の値を変更すると、 `data` オブジェクトが適切に更新され、データ処理が非常に簡単かつ効率的になります。

## 反向データバインディング

生成されたオブジェクトデータも逆方向のバインディング能力を持っており、つまり、オブジェクトのプロパティを変更すると、関連するフォーム要素の値も自動的に更新されます。これはフォームデータを処理する際に非常に便利であり、双方向データバインディング簡単に実現することができます。

以下是示例，演示了如何使用 `formData` 方法生成的对象数据，以及如何进行反向数据绑定：

<html-viewer>

```html
<!-- ofa.js をプロジェクトに追加する -->
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

この例では、まずテキストボックス、ラジオボタン、テキストエリアを含むフォームを作成し、`formData`関数を使用してデータオブジェクト`data`を生成します。次に、`data`オブジェクトのプロパティを変更することで、双方向のデータバインディングを実現し、フォーム要素の値がオブジェクトのプロパティの変更とともに自動的に更新されるようにします。この双方向のデータバインディング機能により、フォームデータとのやり取りがより便利になります。

## 特定のフォームを監視する。

デフォルトでは、`formData()` メソッドはターゲット要素内のすべての `input`、`select`、`textarea` 要素を監視します。ただし、特定のフォーム要素のみを監視したい場合は、[CSS セレクタ](https://developer.mozilla.org/ja/docs/Web/CSS/CSS_selectors) を渡すことで実現できます。

在下面的示例中，我们演示了如何通过传递 CSS 选择器来监听特定的表单元素：

<html-viewer>

```html
<!-- ofa.js をプロジェクトに追加する -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<form id="myForm">
  <input type="text" name="username" value="John Doe" class="use-it" />
  <div>
    sex:
    <label>
      男
      <input type="radio" name="sex" value="man" class="use-it" />
    </label>
    <label>
      女
      <input type="radio" name="sex" value="woman" class="use-it" />
    </label>
  </div>
  <textarea name="message">这个表单元素没有被绑定</textarea>
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

在此示例中，我们只希望监听具有 `class` 为 "use-it" 的表单元素，因此我们传递了 `".use-it"` 作为参数给 `formData()` 方法。这样，只有带有該クラス名のフォーム要素を監視し、生成されたデータオブジェクトに含まれることになります。これはフォーム要素を選択的に監視し、フォームデータをより正確に管理するために非常に便利です。

## カスタムフォーム

カスタムフォームコンポーネントの使用は非常に簡単で、カスタムコンポーネントに **valueプロパティ** を追加し、 **name属性** を設定するだけです。

下記の例では、「custom-input」という名前のカスタムフォームコンポーネントを作成しています。このコンポーネントは編集可能なテキストボックスであり、テキストが変更されると即座に `value` 属性が更新されます。

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

カスタムフォームコンポーネントを使用する場合、それをフォームに追加し、必要な `name` 属性を設定するだけです。

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

在上述示例中，我们通过添加<custom-input>元素并设置name属性来使用自定义表单组件。随后，我们使用formData()方法监听输入元素和自定义组件的值，以便实时获取和处理表单数据。这种方法可以让你非常方便地扩展你的表单，以包括自定义的表单组件，从而满足你的特定需求。

## アセンブリやページでフォームデータを使う

時には、コンポーネントやページ内でフォームデータを使用し、`ready` ライフサイクル期間でデータを生成し、コンポーネントにバインドする必要があるかもしれません。

例では、フォームデータを使用してカスタムコンポーネント内でどのように動作するかを示しています。このコンポーネントにはテキスト入力フィールドが含まれており、コンテンツを入力すると、データがリアルタイムでログに更新されます。

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

在 `ready` 周期生命周期中，コンポーネントが準備完了した後、`this.shadow.formData()` メソッドを使用してフォームデータオブジェクト `fdata` を生成しました。その後、`fdata` の変化を監視するために `watch` を使用し、データが変化した場合には JSON 文字列に変換して `logtext` を更新し、フォームデータのリアルタイム表示機能を実現しています。