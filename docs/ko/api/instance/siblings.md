# siblings

siblings 속성을 사용하면 현재 요소의 모든 인접한 요소 인스턴스를 쉽게 얻을 수 있습니다. 이 요소들은 배열 형태로 반환됩니다.

<html-viewer>

```
<!-- ofa.js 프로젝트에 가져오기 -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<ul>
    <li>I am 0</li>
    <li>I am 1</li>
    <li id="target">I am target</li>
    <li>I am 3</li>
    <li>I am 4</li>
</ul>

<script>
    setTimeout(()=>{
       $('#target').siblings.forEach(e => e.text = 'change text');
    },500);
</script>
```

</html-viewer>