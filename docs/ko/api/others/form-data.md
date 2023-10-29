# formData

`formData` 메소드는 폼 요소와 바인딩된 개체 데이터를 생성하여 폼 요소의 처리를 더 간단하고 효율적으로 만들어줍니다. 이 메소드는 대상 요소 내의 모든 폼 요소의 값을 포함하는 개체를 생성하며, 이 개체는 폼 요소의 변경 사항을 실시간으로 반영합니다.

아래 예시에서는 `formData` 메서드를 사용하여 양식 요소와 바인딩된 객체 데이터를 생성하는 방법을 보여줍니다.

<html-viewer>

기재된 텍스트는 한국어로 번역할 수 없습니다.

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

기재된 텍스트는 한국어로 번역할 수 없습니다.

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

## 监听特定的表单

`formData()` 메서드는 기본적으로 대상 요소 내의 모든 `input`、`select` 및 `textarea` 요소를 감지합니다. 그러나 특정한 폼 요소만 감지하려면 [CSS 선택자](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors)를 전달하여 구현할 수 있습니다.

이 아래 예제에서는 CSS 선택기를 전달하여 특정한 양식 요소를 감시하는 방법을 보여줍니다.

<html-viewer>

기재된 텍스트는 한국어로 번역할 수 없습니다.

길을 걷다가
걷다가는 나를 만나요
너무 예뻐서 하늘을 날아요
나는 수줍어서
숨겨버렸어요
설레이는 가슴 고칠 수 없어요
너 하나 때문에 다 바뀌었어요
사랑 같은 꿈을 꾸게 해요
맨날 웃고 있는 나였어
하루에도 수백 번은 웃겠어
좋게만 생각해요 난
서로 마주치쟈
날이 좋아질 것 같애
널 사랑한다 말하고 싶은데
겁이나요
멍하니 서 있는 그때
창 밖은 어둡게 져 있어요
이런 모습 보인다면 어떡하지
안녕하세요 ?
안녕하세요 너를 처음 본 듯한
기뻐서 웃죠
나도 가끔 웃죠 이런 내 맘을 난 몰라요
하루에도 수백 번은 웃겠어요
좋게만 생각해요 난
웃게 만들었어
사랑을 느낄 수 있도록
내 맘을 전할래요
이세상 오로라는 한곳에 있을까요
달빛이 모인 밤하늘은 아름다워요
누가 봐도 슬픔 없는 거짓말
이 순간이 계속 돼요
좋아요 빛날 수 있는 내가 좋아요
뮤지컬 같은 노래를 들려줘요
내 맘을 느낄 수 있도록
사랑을 전할래요
달이 떠오르는 저 멀리까지공중에 마법 깐 상자 열어
수많은 세상 모두 환하게 불태워
돌아가지 말고 아무도 막지 말고한 숨결처럼 불어와
날아 오르는 멋진 날개로
푸른 어둠에 불붙여 언제나 같은 맘
세상을 향해 불붙여 날마다 날마다 불타오르게 하나보단 둘이 더 좋아요
아프진 않지만 예쁘지만 사랑인 걸 알아요
좋아요 빛날 수 있는내가 좋아요
뮤지컬 같은 노래를들려줘요
내 맘을 느낄 수 있도록사랑을 전할래요
수많은 세상 모두 환하게 불태워
돌아가지 말고아무도 막지 말고한 숨결처럼 불어와
날아 오르는 멋진 날개로
푸른 어둠에 불붙여날마다 날마다 불타오르게 하나보단 둘이 더 좋아요
아프진 않지만 예쁘지만 사랑인 걸 알아요
살짝만 스치는 니가 준 따스한 그 마음이내 삶을 바꿨어-사랑해요

</html-viewer>

여기 예시에서는 "class"가 "use-it"인 양식 요소만 감시하도록 하려고 하기 때문에 `".use-it"`을 `formData()` 메소드에 매개변수로 전달합니다. 이렇게 하면 해당 클래스 이름이 있는 양식 요소만 감시되고 생성된 데이터 객체에 포함됩니다. 이는 양식 요소를 선택적으로 감시하여 양식 데이터를 더 정확하게 관리하는 데 매우 유용합니다.

## 사용자 정의 양식

답변은 다음과 같습니다: 
커스텀 폼 컴포넌트의 사용법은 매우 간단합니다. 커스텀 컴포넌트에 **value 속성**을 추가하고 **name 특성**을 설정하기만 하면 됩니다.

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

通过 `ready` 周期生命周期，在组件准备就绪后，我们使用 `this.shadow.formData()` 方法生成了表单数据对象 `fdata`。然后，我们使用 `watch` 监听 `fdata` 的变化，当数据发生变化时，将其转化为 JSON 字符串并更新 `logtext`，以实现实时显示表单数据的功能。