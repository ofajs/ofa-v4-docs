# on

"on" 메서드를 사용하여 대상 요소에 이벤트 핸들러를 등록할 수 있습니다. 이를 통해 사용자의 상호 작용을 쉽게 감지하고 대응할 수 있습니다.

아래는 버튼 요소에 클릭 이벤트 처리기를 등록하는 방법을 보여주는 예제입니다.

<html-viewer>

```
<!-- ofa.js 프로젝트에 가져오기 -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<button id="target">add count</button>
<br>
<br>
<div id="logger" style="border:red solid 1px;padding:8px;">-</div>

<script>
    let count = 0;
    $("#target").on("click", ()=> {
        $("#logger").text = count++;
    });
</script>
```

</html-viewer>

이 예제에서 우리는 `on` 메소드를 사용하여 버튼 요소에 클릭 이벤트 핸들러를 추가했습니다. 사용자가 버튼을 클릭하면 이벤트 처리기가 트리거되고, 카운터가 증가하여 결과가 페이지에 표시됩니다.

## 템플릿 구문의 사용 방법

이미지 알림%markup%

<comp-viewer comp-name="on-demo">

```html
<template component>
  <button on:click="addCount">Add Count</button>
  <div>{{count}}</div>
  <script>
    export default {
      tag: "on-demo",
      data: {
        count: 0
      },
      proto:{
        addCount(){
          this.count++;
        }
      }
    };
  </script>
</template>
```

</comp-viewer>

이 예제에서는 버튼 요소에 `on:click`을 사용하여 `addCount`라는 메서드를 바인딩합니다. 사용자가 버튼을 클릭할 때마다 이 메서드가 호출되고, 카운터 값이 증가되고 페이지에 표시됩니다. 이 방법을 사용하면 이벤트 핸들러를 컴포넌트의 메서드와 연결하여 더 복잡한 상호 작용을 구현할 수 있습니다.

## event

在注册时间后，触发的函数会被带上 [event](https://developer.mozilla.org/en-US/docs/Web/API/Event)，和原生保持一致；

<html-viewer>

```
<!-- ofa.js 프로젝트에 가져오기 -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<button id="target">add count</button>
<br>
<br>
<div id="logger" style="border:red solid 1px;padding:8px;">-</div>

<script>
    let count = 0;
    $("#target").on("click", (event)=> {
        $("#logger").text = event.type;
    });
</script>
```

</html-viewer>