# unwrap

`unwrap` 메서드는 대상 요소에서 외부에 둘러싸인 요소를 제거하는 데 사용됩니다.

다음은 예시입니다.

<html-viewer>

```
<!-- ofa.js 프로젝트에 가져오기 -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<style> div{border: #aaa solid 1px; margin:8px; padding:8px;} </style>
<div style="color:red;border-color:red;">
    <div id="target">I am target</div>
</div>

<script>
    setTimeout(()=>{
        $('#target').unwrap();
    }, 500);
</script>
```

</html-viewer>

## 주의 사항

대상 요소는 반드시 부모 노드를 가져야하며, 그렇지 않으면 래핑 작업이 실패합니다.

```javascript
const $el = $(`
<div>
    <div id="target"></div>
</div>
`);

$el.unwrap(); // ❌ 에러, 부모 요소가 없어서 unwrap할 수 없음
$el.$('#target').unwrap(); // ✅ 정상, 둘러싸인 요소를 제거
```

형제 요소가 있는 경우 unwrap를 실행할 수 없습니다.

```javascript
const $el = $(`
<div>
    <div id="target"></div>
    <div>저는 형제입니다</div>
</div>
`);

$el.$('#target').unwrap(); // ❌ 오류, 다른 이웃 노드를 가지고 있기 때문에
```

**템플릿 구문을 가진 요소에서는 요소를 조작하지 마세요.**