# nexts

`nexts` 속성을 사용하면 해당 요소 이후의 모든 인접한 요소 인스턴스를 쉽게 얻을 수 있으며, 이러한 요소들은 배열 형태로 반환됩니다.

<html-viewer>

```
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.40/dist/ofa.min.js"></script>
```

```html
<ul>
    <li>I am 1</li>
    <li id="target">I am target</li>
    <li>I am 3</li>
    <li>I am 4</li>
</ul>

<script>
    setTimeout(()=>{
       $('#target').nexts.forEach(e => e.text = 'change text');
    },500);
</script>
```

</html-viewer>