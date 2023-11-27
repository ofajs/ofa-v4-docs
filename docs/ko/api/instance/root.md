# root

root 속성을 사용하여 요소의 루트 노드를 가져옵니다.

페이지에서 일반 요소의 루트 노드는 [document](https://developer.mozilla.org/en-US/docs/Web/API/Document) 인스턴스입니다.

<html-viewer>

```
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.40/dist/ofa.min.js"></script>
```

```html
<ul>
    <li id="target">I am target</li>
</ul>
<div id="logger" style="padding:16px;color:green;"></div>

<script>
    setTimeout(()=>{
        $('#logger').text = $("#target").root.ele === document;
    }, 500);
</script>
```

</html-viewer>

## 그림자 노드 내의 요소

컴포넌트 내 요소들은 외부 환경과 격리되어 있기 때문에, 그림자 노드 내의 요소의 `root` 속성은 그림자 루트 노드입니다.

<comp-viewer comp-name="test-root">

```html
<template component>
    <ul>
        <li>item 1</li>
        <li id="target">item 2</li>
        <li>item 3</li>
    </ul>
    <h3>logger1:</h3>
    <div id="logger1" style="color:red;">{{l1}}</div>
    <h3>logger2:</h3>
    <div id="logger2" style="color:green;">{{l2}}</div>
    <script>
        export default {
            tag:"test-root",
            data:{
                l1:"",
                l2:""
            },
            ready(){
                this.l1 = this.shadow.$("#target").root === this.shadow;
                this.l2 = this.root.ele === document;
            }
        };
    </script>
</template>
```

</comp-viewer>

