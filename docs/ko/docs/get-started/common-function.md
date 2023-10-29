많이 사용되는 방법

## attr

`attr` 메서드는 요소의 속성을 가져오거나 설정할 수 있습니다.

```html
<div id="example" name="i am hello word">Hello World</div>
<script>
    const $div = $('#example');
    console.log($div.attr('name')); // 输出: "i am hello word"
    $div.attr('title', "change title");
</script>
```

위의 예에서 우리는 먼저 `id`가 "example"인 `div` 요소를 선택합니다. 그런 다음 `attr` 메서드를 사용하여 이 요소의 `name` 속성을 가져와 콘솔에 출력합니다. 그런 다음 `attr` 메서드를 사용하여이 요소의 `title` 속성을 "change title"로 설정합니다.