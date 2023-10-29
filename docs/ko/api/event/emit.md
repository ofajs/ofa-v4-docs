# emit

코드 "emit" 메서드를 사용하면 이벤트를 수동으로 트리거 할 수 있으며, 트리거된 이벤트는 버블링 메커니즘을 갖고 있습니다. 버블링 메커니즘은 이벤트가 내부 요소에서 외부 요소로 버블링되며, 내부에서 외부로 이벤트가 계층적으로 트리거됨을 의미합니다.

아래는 `emit` 메소드를 사용하여 사용자 정의 이벤트를 트리거하고 버블링 메커니즘을 사용하여 이벤트를 외부 요소로 전달하는 방법을 보여주는 예시입니다.

<html-viewer>

```
<!-- ofa.js 프로젝트에 가져오기 -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<ul>
    <li id="target">
        I am target
    </li>
</ul>

<div id="logger1" style="border:red solid 1px;padding:8px;">-</div>
<div id="logger2" style="border:blue solid 1px;padding:8px;">-</div>

<script>
    let count = 0;
    $('ul').on('custom-event',()=>{
        count++;
        $("#logger1").text = 'ul is triggered ' + count;
    });
    $('#target').on('custom-event',()=>{
        count++;
        $("#logger2").text = 'target is triggered ' + count;
    });

    setTimeout(()=>{
        $("#target").emit("custom-event",{
            data:"I am data"
        });
    },500);
</script>
```

</html-viewer>

이 예시에서는 `<ul>` 요소와 `<li>` 요소에 대해 동일한 사용자 정의 이벤트인 `custom-event`를 등록했습니다. 이벤트를 발생시킬 때 `emit` 메서드를 사용하면 이벤트가 `<li>` 요소에서 `<ul>` 요소로 버블링되어 두 개의 이벤트 처리기가 트리거됩니다.

## 사용자 지정 데이터

`data` 매개변수를 사용하여 사용자 지정 데이터를 이벤트 처리기로 전달할 수 있습니다.

<html-viewer>

```
<!-- ofa.js 프로젝트에 가져오기 -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<ul>
    <li id="target">
        I am target
    </li>
</ul>

<div id="logger1" style="border:red solid 1px;padding:8px;">-</div>
<div id="logger2" style="border:blue solid 1px;padding:8px;">-</div>

<script>
    $('ul').on('custom-event',(event)=>{
        $("#logger1").text = 'ul is triggered;  =>  ' + event.data;
    });
    $('#target').on('custom-event',(event)=>{
        $("#logger2").text = 'target is triggered;  =>  ' + event.data;
    });

    setTimeout(()=>{
        $("#target").emit("custom-event",{
            data:"I am data"
        });
    },500);
</script>
```

</html-viewer>

이 예제에서 우리는 'data' 매개 변수를 통해 사용자 정의 데이터를 이벤트 핸들러에 전달했습니다. 이벤트 핸들러는 전달된 데이터를 가져오기 위해 'event.data'를 사용할 수 있습니다.

## 버블링 이벤트 트리거 없음

이벤트 버블링을 원치 않는 경우 이벤트를 발생시킬 때 `bubbles: false` 매개변수를 추가할 수 있습니다.

<html-viewer>

```
<!-- ofa.js 프로젝트에 가져오기 -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<ul>
    <li id="target">
        I am target
    </li>
</ul>

<div id="logger1" style="border:red solid 1px;padding:8px;">-</div>
<div id="logger2" style="border:blue solid 1px;padding:8px;">-</div>

<script>
    $('ul').on('custom-event',()=>{
        $("#logger1").text = 'ul is triggered';
    });
    $('#target').on('custom-event',()=>{
        $("#logger2").text = 'target is triggered';
    });

    setTimeout(()=>{
        $("#target").emit("custom-event",{
            bubbles: false
        });
    },500);
</script>
```

</html-viewer>

이 예제에서는 `bubbles: false` 매개변수를 사용하여 사용자 정의 이벤트를 트리거했습니다. 이 이벤트는 상위 요소로 버블링되지 않기 때문에 `<li>` 요소의 이벤트 처리기만 트리거됩니다.

## 투과 루트 노드

기본적으로 이벤트는 사용자 정의 구성요소의 Shadow DOM을 통과하지 않습니다. 그러나 `composed: true`를 설정하여 사용자 정의 이벤트가 루트 노드를 통과하여 루트 노드 외부의 요소를 트리거 할 수 있습니다.

```html
<!-- composed-test 구성 요소를 사용한 코드 -->
<div id="outer-logger"></div>
<div id="wrapper">
    <composed-test></composed-test>
</div>
<script>
    $("#wrapper").on('custom-event',() => {
        $('#outer-logger').text = 'ok';
    });
</script>
```

<comp-viewer comp-name="composed-test">

```
<div id="outer-logger"></div>
<div id="wrapper">
  <composed-test></composed-test>
</div>
<script>
    $("#wrapper").on('custom-event',() => {
        $('#outer-logger').text = 'ok';
    });
</script>
```

```html
<template component>
  <style>
    :host{
        display:block;
        border:red solid 1px;
    }
  </style>  
  <div id="logger">{{loggerText}}</div>
  <div on:custom-event="loggerText = 'custom event is triggered'" id="target"></div>
  <script>
    export default {
      tag: "composed-test",
      data:{
        loggerText: ""
      },
      ready(){
        setTimeout(()=>{
          this.shadow.$("#target").emit("custom-event",{
            composed: true,
          });
        },500);
      }
    };
  </script>
</template>
```

</comp-viewer>

이 예제에서는 `composed-test`라는 사용자 정의 컴포넌트를 만들었습니다. 이 컴포넌트에는 그림자 DOM에 있는 요소와 이벤트를 트리거하는 버튼이 포함되어 있습니다. 기본적으로 이벤트는 그림자 DOM을 통과하지 않고 루트 노드로 이동하지 않습니다. 그러나 이벤트가 트리거 될 때 `composed: true` 매개변수를 사용하여 이벤트가 루트 노드로 통과하여 루트 노드 외부의 요소를 트리거할 수 있게합니다.