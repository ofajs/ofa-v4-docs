# one

`one` 메서드를 사용하면 대상 요소에 일회용 이벤트 처리기를 등록할 수 있으며, 이는 이벤트 처리기가 한 번 트리거 된 후 자동으로 바인딩이 해제되어 다시 트리거되지 않음을 의미합니다.

아래는 버튼 요소에 클릭 이벤트 핸들러를 등록하는 방법을 보여주는 예제입니다.

<html-viewer>

```
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.40/dist/ofa.min.js"></script>
```

```html
<button id="target">add count</button>
<br>
<br>
<div id="logger" style="border:red solid 1px;padding:8px;">-</div>

<script>
    let count = 0;
    $("#target").one("click", ()=> {
        $("#logger").text = count++;
    });
</script>
```

</html-viewer>

이 예제에서는 `one` 메서드를 사용하여 버튼 요소에 클릭 이벤트 핸들러를 추가했습니다. 사용자가 버튼을 클릭하면 이벤트 핸들러가 트리거되지만 다시 트리거되지 않습니다. 이는 이벤트 핸들러가 언바인딩되었기 때문입니다.

## 템플릿 구문의 사용 방법

액션을 위해 대상 요소에 일회성 이벤트 핸들러를 바인딩하기 위해 템플릿 구문을 사용할 수도 있습니다. 다음은 예시입니다.

<comp-viewer comp-name="one-demo">

```html
<template component>
  <button one:click="addCount">Add Count</button>
  <div>{{count}}</div>
  <script>
    export default {
      tag: "one-demo",
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

이 예제에서는 'one:click'이라는 이벤트를 버튼 요소에 바인딩하여 'addCount'라는 메서드를 호출합니다. 사용자가 버튼을 클릭하면이 메서드가 호출되지만 다시 트리거되지 않습니다. 이는 일회성 이벤트 처리기입니다.