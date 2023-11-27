# 인스턴스의 기본 개념

`$` 인스턴스는 페이지의 요소를 캡슐화합니다. 기존 요소를 선택하는 데 사용되는 것 외에도 새로운 요소를 직접 생성하고 조작할 수 있습니다. 이 장에서는 새로운 요소를 만들고 `$` 인스턴스에 대한 몇 가지 작업을 소개합니다.

## 새로운 요소 만들기

$로 인스턴스를 통해 새로운 요소를 직접 생성하고 조작할 수 있습니다.

<html-viewer>

```
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.40/dist/ofa.min.js"></script>
```

```html
<script>
  const $ele = $('<div style="color:red">I am text</div>');
  $('body').push($ele);
</script>
```

</html-viewer>

위의 예에서 `$('<div style="color:red">I am text</div>')`를 사용하여 새 `div` 요소를 생성하고 `body`에 추가했습니다.

## 하위 요소 가져오기

$로 얻은 인스턴스는 DOM 요소처럼 `children` 속성을 가지지 않습니다. 그러나 우리는 배열 인덱스를 사용하여 인스턴스의 직접적인 자식 요소에 액세스할 수 있습니다.

<html-viewer>

```
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.40/dist/ofa.min.js"></script>
```

```html
<div>
  <p>First Paragraph</p>
  <p>Second Paragraph</p>
</div>
<script>
  const $div = $('div');
  console.log($div[0]); // Output: <p>First Paragraph</p>
  console.log($div[1]); // Output: <p>Second Paragraph</p>
  console.log($div.length); // Output: 2
</script>
```

</html-viewer>

이전 예제에서는 'div' 요소를 얻고 인덱스를 사용하여 첫 번째와 두 번째 'p' 요소에 접근했습니다. 동시에, 우리는 '$div.length'를 사용하여 하위 요소의 수를 얻었습니다.

## 작업자 요소

$를 통해 우리는 배열의 메서드를 직접 사용하여 하위 요소를 조작할 수도 있습니다. 예를 들면 push와 pop입니다.


<html-viewer>

```
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.40/dist/ofa.min.js"></script>
```

```html
<div>
  <p>First Paragraph</p>
</div>
<script>
  const $paragraphs = $('p');
  
  // 새 div 요소를 자식으로 추가합니다.
  const $newDiv = $('<div>New Div</div>');
  $paragraphs.push($newDiv);

  setTimeout(()=>{
    // 마지막 하위 요소 삭제
    $paragraphs.pop();

    console.log($paragraphs);
  },1000)
</script>
```

</html-viewer>

위의 예에서 우리는 모든 `p` 요소의 `$` 인스턴스를 얻었고 `push` 메소드를 사용하여 새로운 `div` 요소를 자식 요소로 추가했으며, 그 후에는 `pop` 메소드를 사용하여 마지막 자식 요소를 제거했습니다.

위의 예에서, 당신은 `$` 인스턴스의 몇 가지 기본 조작, 새 요소 생성 및 하위 요소에 대한 액세스 및 조작을 이해할 수 있습니다. `$` 인스턴스는 페이지의 요소를 조작하기 위한 간편한 방법을 제공합니다.