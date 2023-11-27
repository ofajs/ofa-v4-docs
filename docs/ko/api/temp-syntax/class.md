# class

당신은 `class` 구문을 사용하여 템플릿 내의 클래스 이름을 빠르게 변경할 수 있습니다. `class:aaa="bbb"`에서 `bbb` 표현식(또는 컴포넌트 자체의 `bbb` 속성)이 `true`일 때 대상 요소에 `aaa` className이 추가됩니다.

클래스 이름에는 대문자를 포함할 수 없으며, 대신 `-`를 구분 기호로 사용해야합니다.

아래는 템플릿에서 요소의 클래스 이름을 전환하는 방법을 보여주는 예제입니다.

<comp-viewer comp-name="test-class">

```html
<template component>
    <style>
        .color-red{
            color:red;
        }
        .color-blue{
            color:blue;
        }
    </style>
    <div 
      class:color-red="txt == 1" 
      class:color-blue="txt == 2" 
      on:click="switch1">Click Me</div>
    <script>
        export default {
          tag:"test-class",
          data:{
            txt:"1"
          },
          proto:{
            switch1(){
              this.txt = (this.txt == 1) ? 2 : 1;
            }
          }
        };
    </script>
</template>
```

</comp-viewer>

## 직접 class를 사용하기

당신은 `class` 메소드를 사용하여 요소의 className을 직접 조정할 수 있습니다. 아래 예시에서는 `class` 메소드를 사용하여 클래스 이름을 동적으로 추가하고 삭제하는 방법을 보여줍니다.

<html-viewer>

```
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.40/dist/ofa.min.js"></script>
```

```html
<style>
    .color-red{
        color:red;
    }
    .color-blue{
        color:blue;
    }
</style>
<div id="target">I am target</div>

<script>
    setTimeout(()=>{
        $('#target').class('color-red',true);
    },500);
    setTimeout(()=>{
        $('#target').class('color-red',false);
    },1000);
    setTimeout(()=>{
        $('#target').class('color-blue',true);
    },1500);
</script>
```

</html-viewer>


여기 예시에서는 우선 `class` 메소드를 사용하여 요소에 `color-red` 클래스를 추가하고, 1초 후에 제거한 다음, 0.5초 후에 `color-blue` 클래스를 요소에 추가합니다. 이렇게 하면 대상 요소의 스타일이 동적으로 변경됩니다.

우리는 클래스 이름을 조작하는 데 [classList](../props/class-list.md) 속성을 사용하는 것을 권장합니다. 이것은 더 일반적이고 표준적인 방법입니다.