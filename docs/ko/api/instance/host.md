# host

사용 `host` 속성을 통해 요소의 호스트 컴포넌트 인스턴스를 얻을 수 있습니다. 이는 컴포넌트 내에서 호스트 컴포넌트의 데이터와 메서드에 접근하는 데 매우 유용합니다.

아래는 호스트 컴포넌트의 인스턴스를 가져오는 'host' 속성을 사용하는 방법을 보여주는 예제입니다.

<comp-viewer comp-name="host-demo">

```html
<template component>
  <div>tag: {{txt}}</div>
  <div>bool: {{txt2}}</div>
  <script>
    export default {
      tag: "host-demo",
      data: {
        txt: "-",
        txt2: '-'
      },
      ready(){
        const host = this.shadow.$("div").host;
        this.txt = host.tag;
        this.txt2 = host === this;
      }
    };
  </script>
</template>
```

</comp-viewer>

이 예제에서는 `host-demo`라는 사용자 정의 컴포넌트를 생성하고 컴포넌트 내부에서 해당 호스트 컴포넌트 인스턴스에 접근하여 그들이 동일한지 비교합니다.

요소가 컴포넌트 내에 없으면 `host`의 값은 `null`이 됩니다. 예를 들어:

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

<div id="logger" style="border:red solid 1px;padding:8px;">-</div>

<script>
    setTimeout(()=>{
        $("#logger").text = String($("#target").host);
    },500);
</script>
```

</html-viewer>

이 예제에서 `#target` 요소는 body 하위에 있으며 어떠한 컴포넌트나 페이지에도 속하지 않으므로 `$("#target").host`의 값은 `null`입니다.