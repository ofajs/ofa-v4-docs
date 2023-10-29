# shadow

`shadow` 속성을 사용하면 요소의 그림자 루트 노드 인스턴스를 얻을 수 있습니다.

<comp-viewer comp-name="test-shadow">

```html
<template component>
    <ul>
        <li>item 1</li>
        <li id="target">item 2</li>
        <li>item 3</li>
    </ul>
    <script>
        export default {
            tag:"test-shadow",
            ready(){
                setTimeout(()=>{
                    this.shadow.$("#target").text = 'change target';
                },500);
            }
        };
    </script>
</template>
```

</comp-viewer>

주의해야 할 점은 템플릿 구문이 있는 요소에서 그림자 노드 내의 요소를 직접 수정하는 것을 피하여 작업의 일관성과 유지 관리성을 보장하는 것이다.

외부에서 구성 요소의 그림자 요소 내의 요소 인스턴스를 가져옵니다.

다음과 같이 외부에서 사용자 정의 요소 인스턴스를 가져올 수도 있으며, `shadow` 속성을 통해 그림자 노드 내부의 요소에 액세스할 수 있습니다.

```javascript
$("test-shadow").shadow.$('selector').method(xxx);
```