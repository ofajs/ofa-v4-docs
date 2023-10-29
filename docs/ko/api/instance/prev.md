# prev

이 텍스트는 번역할 수 없습니다.

<html-viewer>

```
<!-- ofa.js 프로젝트에 가져오기 -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<ul>
    <li id="first">I am 1</li>
    <li id="target">I am target</li>
    <li>I am 3</li>
</ul>

<script>
    setTimeout(()=>{
       $('#target').prev.text = "change target prev element";
    },500);

    console.log($('#first') === $('#target').prev); // => true
</script>
```

</html-viewer>