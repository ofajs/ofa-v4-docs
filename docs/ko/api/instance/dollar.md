# $

`$` 함수는 `ofa.js`의 핵심 함수로서 DOM 요소 인스턴스를 조작하는 데 사용됩니다. 아래에서 `$`의 주요 역할을 소개하겠습니다.

## 요소 인스턴스 얻기

`$` 메서드를 사용하여 페이지에서 [CSS 선택자](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors)와 일치하는 첫 번째 요소 인스턴스를 가져올 수 있으며 해당 요소를 조작할 수 있습니다. 다음은 예제입니다:

<html-viewer>

```
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.40/dist/ofa.min.js"></script>
```

```html
<div id="target1">target 1 text</div>

<script>
  setTimeout(()=>{
    $("#target1").text = 'change target 1';
  },500);
</script>
```

</html-viewer>

위의 예시에서는 `$` 기호를 사용하여 `id`가 "target1"인 요소 인스턴스를 선택하고 `text` 속성을 설정하여 텍스트 내용을 수정했습니다.

## 서브 엘리먼트 검색 예시

실제로도 `$` 메소드를 갖고 있으며, 인스턴스의 `$` 메소드를 통해 조건을 충족하는 첫 번째 자식 요소 인스턴스를 얻을 수 있습니다.

<html-viewer>

```
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.40/dist/ofa.min.js"></script>
```

```html
<div id="target1">
  <h3>target</h3>
  <p>I am target1</p>
</div>

<script>
  const tar = $("#target1");
  tar.$('h3').text = 'change target title';
</script>
```

</html-viewer>

## 변환 실패

요소 인스턴스를 직접 다른 곳에 삽입하지 마십시오. 이 작업은 기존 요소에 영향을 줄 수 있습니다. 복사본을 만들어야 하는 경우 [clone](./clone.md) 메서드를 사용할 수 있습니다.

<html-viewer>

```
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.40/dist/ofa.min.js"></script>
```

```html
<div id="pos1" style="border:red solid 1px;">
  <h3>position 1</h3>
  <p id="target1" style="color:green">I am target1</p>
</div>

<div id="pos2" style="border:blue solid 1px;margin:8px;">
  <h3>position 2</h3>
</div>

<script>
  setTimeout(()=>{
    const tar = $("#target1");
    $("#pos2").push(tar);
  },500);
</script>
```

</html-viewer>

## 얻는 노드에서 자식 요소를 가져옵니다.

[shadow](./shadow.md) 속성을 통해 인스턴스를 얻은 다음 `$` 메소드를 사용하여 원하는 요소를 가져올 수 있습니다.

```javascript
$('my-component').shadow.$("selector").method(xxx)
```
## 직접 요소 인스턴스화

너는 다음의 방법을 통해 원시 요소를 `$` 인스턴스 객체로 직접 초기화할 수 있습니다.

```javascript
const ele = document.createElement('div');
const $ele = $(ele);
```

```javascript
const ele = document.querySelector('#target');
const $ele = $(ele);
```

이렇게하면 `$` 인스턴스를 사용하여 제공되는 기능을 사용하여 기존의 HTML 요소를 쉽게 변환 할 수 있습니다.

## 생성 요소 인스턴스

$를 사용하여 기존 요소 인스턴스를 가져오는 것 외에도 새로운 요소 인스턴스를 만들고 페이지에 추가할 수 있습니다.

### 문자열 생성을 통해

$$$ 함수를 사용하여 문자열을 사용하여 새로운 요소 인스턴스를 만들 수 있습니다. 예를 들어 다음과 같습니다.

<html-viewer>

```
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.40/dist/ofa.min.js"></script>
```

```html
<div id="target1">
  <b>target1:</b>
</div>

<script>
  const newEl = $(`<div style="color:red">add target 1 text</div>`);
  $('#target1').push(newEl);
</script>
```

</html-viewer>

이 예제에서는 `$` 함수를 사용하여 지정된 스타일과 텍스트 내용을 가진 새 요소 인스턴스를 생성하고, "target1"이라는 id를 가진 기존 요소 인스턴스에 추가했습니다.

### 객체 생성을 통해

$$$ 함수를 사용하여 객체 방식으로 새 요소 인스턴스를 생성할 수도 있습니다. 다음과 같이 보여줍니다:

<html-viewer>

```
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.40/dist/ofa.min.js"></script>
```

```html
<div id="target1">
  <b>target1:</b>
</div>

<script>
  const newEl = $({
    tag: "div",
    text: "add target 1 text",
    css: {
      color: "red"
    }
  });

  $('#target1').push(newEl);
</script>
```

</html-viewer>

이 예제에서는 `$` 함수를 사용하여 객체 방식으로 새 요소 인스턴스를 정의하고, 태그 유형, 텍스트 내용 및 스타일 속성을 포함시켜 "target1" ID를 가진 기존 요소 인스턴스에 추가합니다.