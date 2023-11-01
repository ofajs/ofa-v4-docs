# extend

extend는 인스턴스의 속성이나 메서드를 확장하는 고차 함수입니다.

<html-viewer>

```html
<!-- ofa.js를 프로젝트에 추가하십시오 -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<ul>
    <li>I am 1</li>
    <li id="target">I am target</li>
    <li>I am 3</li>
</ul>
<div id="logger">logger</div>

<script>
  const target = $("#target");
  
  target.extend({
    get good(){
      return "ofa.js is good";
    },
    say(){
      return 'mother fxxker';
    }
  });
   
  setTimeout(() => {
    const target = $("#target");
    $("#logger").html = `
    good : ${target.good} <br>
    say() : ${target.say()}
    `;
  }, 500);
</script>
```

</html-viewer>

## $ 하위 항목 확장

fn.extend를 통해 jQuery와 유사하게 기본 인스턴스의 속성이나 메소드를 확장할 수 있습니다. fn에서 확장한 속성이나 메소드는 모든 인스턴스에 적용됩니다.

<html-viewer>

```html
<!-- ofa.js를 프로젝트에 추가하십시오 -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<ul>
    <li>I am 1</li>
    <li id="target">I am target</li>
    <li>I am 3</li>
</ul>
<div id="logger">logger</div>

<script>
  const target = $("#target");
  
  $.fn.extend({
    get good(){
      return "ofa.js is good";
    },
    say(){
      return 'mother fxxker';
    }
  });
   
  setTimeout(() => {
    $("#logger").html = `
    target good : ${$("#target").good} <br>
    logger say() : ${$("#logger").say()}
    `;
  }, 500);
</script>
```

</html-viewer>

## 확장 템플릿 구문

확장으로 속성이나 기능을 추가하여 템플릿 문법을 향상시키고, 구성 요소에 전용 템플릿 문법을 제공할 수 있습니다. 그러나 주의할 점은 비공식적인 템플릿 문법을 사용하지 않는 것이 좋습니다. 왜냐하면 그들은 사용자에게 학습 비용을 지우기 때문이며, 많은 비공식 템플릿 문법은 개발 경험을 낮출 수 있습니다.

### 확장 속성

확장 속성을 통해 템플릿에서 `:`를 사용하여 설정할 수 있습니다. 아래에서는 `red` 속성을 확장하고 `red`가 `true`인 경우 폰트 색상이 빨간색으로 변경됩니다.

```javascript
$.fn.extend({
  set red(bool){
    if(bool){
      this.css.color = "red";
    }else{
      this.css.color = '';
    }
  }
});
```

<comp-viewer comp-name="temp-one">

```
<script>
$.fn.extend({
  set red(bool){
    if(bool){
      this.css.color = "red";
    }else{
      this.css.color = '';
    }
  }
});
</script>
<temp-one></temp-one>
```

```html
<template component>
  <button on:click="addCount">Add Count</button>
  <div :red="count % 3">{{count}}</div>
  <script>
    export default {
      tag: "temp-one",
      data: {
        count: 0
      },
      proto:{
        addCount(){
          this.count++;
        },
      }
    };
  </script>
</template>
```

</comp-viewer>

이 예에서는 템플릿 구문에 'red' 속성을 추가했습니다. 'count % 3'이 0이 아닐 때 글꼴 색상이 빨간색으로 변경됩니다.

### 확장 방법

확장 메서드 `extend`를 사용하여 템플릿 구문에서 사용할 수 있도록 할 수도 있습니다. 메서드 이름은 콜론 앞의 부분입니다. 여기에서는 `color` 템플릿 구문을 확장하고, 뒤에 오는 매개변수는 정의된 확장 메서드로 전달됩니다.

이곳에서 `always` 속성을 `true`로 설정했으며, 이는 컴포넌트가 화면을 새로 고칠 때마다이 정의 된 메소드를 호출함을 의미합니다. `always`를 설정하지 않으면이 템플릿 구문 함수는 한 번만 실행됩니다.

여기서 'options'은 더 많은 매개변수를 제공하여 보다 맞춤화된 템플릿 문법 개발을 도와줍니다.

```javascript
$.fn.extend({
  color(color, func, options){
    const bool = func();
    // console.log(bool,options);
    if(bool){
      this.css.color = color;
    }else{
      this.css.color = '';
    }
  }
});

$.fn.color.always = true;
```

<comp-viewer comp-name="temp-two">

```
<script>
$.fn.extend({
  color(color, func, options){
    const bool = func();
    console.log(bool,options);
    if(bool){
      this.css.color = color;
    }else{
      this.css.color = '';
    }
  }
}); 

$.fn.color.always = true;
</script>
<temp-two></temp-two>
```

```html
<template component>
  <button on:click="addCount" color:blue="count % 3">Add Count</button>
  <div color:red="!(count % 3)">{{count}}</div>
  <script>
    export default {
      tag: "temp-two",
      data: {
        count: 0
      },
      proto:{
        addCount(){
          this.count++;
        },
      }
    };
  </script>
</template>
```

</comp-viewer>

## 템플릿 구문의 원리

지금까지 당신은 이미 이해할 수 있다는 것을 알 수 있어야 합니다. ofa.js의 많은 템플릿 문법은 실제로 `extend`를 통해 확장되었습니다.

- `class`、`attr` 메서드는 뷰를 새로 고칠 때마다 실행됩니다.
- `on`、`one`과 같은 함수 바인딩은 한 번만 실행됩니다.

아래는 이해를 돕기 위해 볼 수 있는 ofa.js 템플릿 렌더링 원칙의 예시입니다.

<comp-viewer comp-name="temp-three">

```html
<template component>
  <div>class always => {{classalways}}</div>
  <div>attr always => {{attralways}}</div>
  <div>on always => {{onalways}}</div>
  <script>
    export default {
      tag: "temp-three",
      data: {
        classalways:"",
        attralways:"",
        onalways:""
      },
      ready(){
        this.classalways = $.fn.class.always;
        this.attralways = $.fn.attr.always;
        this.onalways = !!$.fn.on.always;
      }
    };
  </script>
</template>
```

</comp-viewer>