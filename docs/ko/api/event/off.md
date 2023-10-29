# off

사용하는 "off" 메서드로 등록된 이벤트 핸들러를 해제하고 이벤트의 감지를 취소할 수 있습니다.

아래는 `off` 메서드를 사용하여 이벤트 리스너를 취소하는 방법을 보여주는 예시입니다.

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
    const f = ()=> {
        $("#logger").text = count++;
        if(count === 3){
            $("#target").off("click", f);
        }
    }
    $("#target").on("click", f);
</script>
```

</html-viewer>

이 예제에서는 클릭 이벤트 핸들러 'f'를 등록했습니다. 버튼이 클릭되면 이벤트 핸들러에서는 `#logger`에서 클릭 횟수를 표시합니다. `off` 메서드를 사용하여 클릭 횟수가 3이 되면 이벤트 감지를 취소했습니다.