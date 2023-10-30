# all

`all` 메소드를 사용하면 [CSS 선택자](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors)와 일치하는 페이지의 모든 요소를 가져와 해당 요소를 포함하는 배열을 반환할 수 있습니다.

<html-viewer>

```
<!-- ofa.js 프로젝트에 가져오기 -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<ul>
    <li>I am 1</li>
    <li>I am 2</li>
    <li>I am 3</li>
</ul>

<script>
    setTimeout(()=>{
        $.all("li").forEach((item,index)=>{
            item.text = `change item ${index}`;
        });
    },500);
</script>
```

</html-viewer>

## 하위 요소 가져오기

실례 instance는 "all" 메소드도 가지고 있으며, 해당 메소드를 통해 하위 요소를 선택하고 가져올 수 있습니다.

<html-viewer>

```
<!-- ofa.js 프로젝트에 가져오기 -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div id="target1">
  <ul>
    <li>I am 1</li>
    <li>I am 2</li>
    <li>I am 3</li>
  </ul>
</div>

<script>
  const tar = $("#target1");
  tar.all("li").forEach((item,index)=>{
    item.text = `change item ${index}`;
  });
</script>
```

</html-viewer>