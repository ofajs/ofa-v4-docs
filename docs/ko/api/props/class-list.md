# classList

[classList](https://developer.mozilla.org/ko/docs/Web/API/Element/classList) 속성은 네이티브와 일치합니다.

아래는 `classList`를 사용하는 방법을 보여주는 예제입니다.

<html-viewer>

```
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.40/dist/ofa.min.js"></script>
```

```html
<style>
    .t-red{
        color: red;
        font-size: 14px;
    }
    .t-blue{
        color: blue;
        font-weight:bold;
        font-size:20px;
    }
</style>
<div id="target" class="t-red">origin text</div>

<script>
    setTimeout(()=> {
        $("#target").classList.remove('t-red');
        setTimeout(()=>{
            $("#target").classList.add('t-blue');
        },1000);
    }, 1000);
</script>
```

</html-viewer>

`classList` 속성은 요소의 스타일을 동적으로 변경하기 위해 클래스 이름을 쉽게 추가, 제거 및 전환할 수 있게 해줍니다. 자세한 조작 방법은 [classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)를 참조하세요.