# 자식 요소 추가 또는 제거하기

요소 인스턴스는 배열과 유사한 특성을 가지며 노드를 추가하거나 제거하는 데 필요한 몇 가지 배열 메서드를 사용할 수 있습니다. `push`, `unshift`, `pop`, `shift`, `splice` 메서드를 사용할 때 내부에서 자동으로 [$ 메서드](../instance/dollar.md)의 초기화 작업이 수행되므로 구체적인 요소 문자열이나 개체를 직접 작성할 수 있습니다.

같은 방식으로 `forEach`、`map`、`some` 등의 다른 배열 메소드를 사용할 수도 있습니다.

중요한 것은 템플릿 구문을 가진 요소에는 자식 요소를 추가하거나 삭제하지 않는 것입니다.

## push

끝에 자식 요소를 추가합니다.

<html-viewer>

```
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.40/dist/ofa.min.js"></script>
```

```html
<ul>
    <li>I am 1</li>
    <li>I am 2</li>
    <li>I am 3</li>
</ul>

<script>
    setTimeout(()=>{
        $("ul").push(`<li style="color:red;">new li</li>`);
    }, 500);
</script>
```

</html-viewer>

## unshift

배열의 시작에 하위 요소를 추가합니다. 다음은 예입니다:

<html-viewer>

```
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.40/dist/ofa.min.js"></script>
```

```html
<ul>
    <li>I am 1</li>
    <li>I am 2</li>
    <li>I am 3</li>
</ul>

<script>
    setTimeout(()=>{
        $("ul").unshift(`<li style="color:blue;">new li</li>`);
    }, 500);
</script>
```

</html-viewer>

## pop

바로 앞의 요소를 제거하세요.

<html-viewer>

```
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.40/dist/ofa.min.js"></script>
```

```html
<ul>
    <li>I am 1</li>
    <li>I am 2</li>
    <li>I am 3</li>
</ul>

<script>
    setTimeout(()=>{
        $("ul").pop();
    }, 500);
</script>
```

</html-viewer>

## shift

리스트의 첫 번째 원소를 삭제하십시오.

<html-viewer>

```
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.40/dist/ofa.min.js"></script>
```

```html
<ul>
    <li>I am 1</li>
    <li>I am 2</li>
    <li>I am 3</li>
</ul>

<script>
    setTimeout(()=>{
        $("ul").shift();
    }, 500);
</script>
```

</html-viewer>

## splice

기존 하위 요소를 삭제하거나 대체하거나 새로운 하위 요소를 추가할 수 있습니다. 이는 배열의 `splice` 메소드와 유사한 방식으로 사용됩니다. 다음은 예시입니다.

<html-viewer>

```
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.40/dist/ofa.min.js"></script>
```

```html
<ul>
    <li>I am 1</li>
    <li>I am 2</li>
    <li>I am 3</li>
</ul>

<script>
    setTimeout(()=>{
$("ul").splice(1, 2, `<li style="color:green;">new li 1</li>`, `<li style="color:green;">new li 2</li>`);
    }, 500);
</script>
```

</html-viewer>