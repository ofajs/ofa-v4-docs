# formData

`formData` 메소드는 폼 요소와 바인딩된 개체 데이터를 생성하여 폼 요소의 처리를 더 간단하고 효율적으로 만들어줍니다. 이 메소드는 대상 요소 내의 모든 폼 요소의 값을 포함하는 개체를 생성하며, 이 개체는 폼 요소의 변경 사항을 실시간으로 반영합니다.

아래 예시에서는 `formData` 메서드를 사용하여 양식 요소와 바인딩된 객체 데이터를 생성하는 방법을 보여줍니다.

<html-viewer>

```html
<!-- 프로젝트에 ofa.js 가져오기 -->
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

이 예제에서는 텍스트 입력 상자, 라디오 버튼 및 텍스트 영역이 포함된 양식을 생성하고 `formData` 메서드를 사용하여 이러한 양식 요소의 값을 포함하는 `data` 객체를 만듭니다. 우리는 또한 `watch` 메서드를 사용하여 데이터의 변경을 모니터링하고 데이터를 실시간으로 페이지에 표시합니다. 사용자가 양식 요소의 값을 수정할 때 `data` 객체가 업데이트되어 데이터 처리가 매우 간단하고 효율적이게 됩니다.

## 양방향 데이터 바인딩

생성 된 객체 데이터는 역으로 바인딩할 수 ​​있습니다. 이는 객체의 속성을 수정 할 때 관련 양식 요소 값도 자동으로 업데이트됨을 의미합니다. 이것은 양식 데이터를 처리 할 때 매우 유용하며 쉽게 양방향 데이터 바인딩을 구현할 수 있습니다.

아래의 예제에서는 `formData` 메소드로 생성된 객체 데이터를 사용하는 방법과 양방향 데이터 바인딩을 하는 방법을 보여줍니다.

<html-viewer>

```html
<!-- 프로젝트에 ofa.js 가져오기 -->
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

이 예제에서는 먼저 텍스트 입력 상자, 라디오 버튼 및 텍스트 영역이 포함된 폼을 만들었고, `formData` 메서드를 사용하여 데이터 객체 `data`를 생성했습니다. 그런 다음 `data` 객체의 속성을 수정함으로써 양방향 데이터 바인딩, 즉 폼 요소의 값이 객체의 속성 변경과 자동으로 업데이트되는 기능을 구현했습니다. 이러한 양방향 데이터 바인딩 기능은 폼 데이터와의 상호 작용을 더 편리하게 만듭니다.

## 특정 폼 모니터링

`formData()` 메서드는 기본적으로 대상 요소 내의 모든 `input`、`select` 및 `textarea` 요소를 감지합니다. 그러나 특정한 폼 요소만 감지하려면 [CSS 선택자](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors)를 전달하여 구현할 수 있습니다.

이 아래 예제에서는 CSS 선택기를 전달하여 특정한 양식 요소를 감시하는 방법을 보여줍니다.

<html-viewer>

```html
<!-- 프로젝트에 ofa.js 가져오기 -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<form id="myForm">
  <input type="text" name="username" value="John Doe" class="use-it" />
  <div>
    sex:
    <label>
      man
      <input type="radio" name="sex" value="man" class="use-it" />
    </label>
    <label>
      woman
      <input type="radio" name="sex" value="woman" class="use-it" />
    </label>
  </div>
  <textarea name="message">이 양식 요소는 바인딩되지 않습니다.</textarea>
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

여기 예시에서는 "class"가 "use-it"인 양식 요소만 감시하도록 하려고 하기 때문에 `".use-it"`을 `formData()` 메소드에 매개변수로 전달합니다. 이렇게 하면 해당 클래스 이름이 있는 양식 요소만 감시되고 생성된 데이터 객체에 포함됩니다. 이는 양식 요소를 선택적으로 감시하여 양식 데이터를 더 정확하게 관리하는 데 매우 유용합니다.

## 사용자 정의 양식

사용자 정의 폼 컴포넌트를 사용하려면 사용자 정의 컴포넌트에 **value 속성**을 추가하고 **name 특성**을 설정하기만 하면 됩니다.

아래 예시에서는 "custom-input"이라는 사용자 정의 폼 컴포넌트를 생성합니다. 이 컴포넌트는 편집 가능한 텍스트 상자로, 텍스트가 변경될 때 마다 `value` 속성을 실시간으로 업데이트합니다.

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

사용자 정의 양식 컴포넌트를 사용할 때는 해당 컴포넌트를 양식에 추가하고 필요한 'name' 속성을 설정하기만 하면됩니다.

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

이전 예제에서는 `<custom-input>` 요소를 추가하고 `name` 속성을 설정하여 사용자 지정 폼 컴포넌트를 사용했습니다. 그런 다음 `formData()` 메서드를 사용하여 입력 요소와 사용자 지정 컴포넌트의 값을 모니터링하여 실시간으로 양식 데이터를 가져오고 처리합니다. 이 방법을 사용하면 사용자 지정 폼 컴포넌트를 포함하여 양식을 쉽게 확장하여 특정 요구 사항을 충족할 수 있습니다.

## 컴포넌트나 페이지 내에서 양식 데이터 사용하기

가끔은 컴포넌트나 페이지에서 양식 데이터를 사용해야하며, 'ready' 주기 수명이 생성되어 컴포넌트에 바인딩되어야합니다.

아래 예제에서는 사용자 정의 컴포넌트 내에서 양식 데이터를 사용하는 방법을 보여줍니다. 이 컴포넌트에는 텍스트 입력 상자가 포함되어 있으며, 내용을 입력할 때마다 데이터가 로그에 실시간으로 업데이트됩니다.

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

`ready` 라이프사이클 주기를 통해 컴포넌트가 준비되면 `this.shadow.formData()` 메서드를 사용하여 폼 데이터 객체 `fdata`를 생성했습니다. 그런 다음 `fdata`의 변경 사항을 감시하기 위해 `watch`를 사용하여 데이터가 변경될 때 JSON 문자열로 변환하고 `logtext`를 업데이트하여 폼 데이터를 실시간으로 표시하는 기능을 구현했습니다.