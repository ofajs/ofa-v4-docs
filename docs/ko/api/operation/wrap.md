# wrap

`wrap` 메서드는 대상 요소의 외부에 한 층의 요소를 감싸는 역할을 합니다. `wrap` 작업을 수행하기 전에 자동으로 [$ 메서드](../instance/dollar.md)의 초기화 작업을 수행하므로 구체적인 요소 문자열 또는 객체를 직접 작성할 수 있습니다.

다음은 예시입니다.

<html-viewer>

```
<!-- ofa.js 프로젝트에 가져오기 -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<style> div{border: #aaa solid 1px; margin:8px; padding:8px;} </style>
<div>
    <div>I am 1</div>
    <div id="target">I am 2</div>
    <div>I am 3</div>
</div>

<script>
    setTimeout(()=>{
        $('#target').wrap(`<div style="border-color:red;">wrap</div>`);
    }, 500);
</script>
```

</html-viewer>

## 주의 사항

대상 요소는 반드시 부모 노드를 가져야하며, 그렇지 않으면 래핑 작업이 실패합니다.

```javascript
var $el = $(`
<div>
    <div id="target"></div>
</div>
`);

$el.wrap("<div>new div</div>"); // ❌ 오류, 부모 요소가 없어 감쌀 수 없음
$el.$('#target').wrap("<div>new div</div>"); // ✅ 정상, 부모 요소가 있음
```

**템플릿 구문을 가진 요소에서는 요소를 조작하지 마세요.**