# next

리스트에서 `next` 속성을 사용하면 요소의 다음 인접한 요소 인스턴스를 얻을 수 있습니다.

<html-viewer>

```
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.40/dist/ofa.min.js"></script>
```

```html
<ul>
    <li id="first">I am 1</li>
    <li id="target">I am target</li>
    <li>I am 3</li>
</ul>

<script>
    setTimeout(()=>{
       $('#target').next.text = "change target next element";
    },500);

    console.log($('#first') === $('#target').next); // => true
</script>
```

</html-viewer>