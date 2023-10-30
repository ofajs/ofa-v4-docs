# 요소 및 이벤트 가져오기

이 절은 이전 장의 내용을 강화하기 위해 요소 선택과 이벤트 바인딩을 포함합니다.

## 선택 요소

이전 장에서는 전역에서 요소를 얻는 방법으로 $ 기호를 사용하는 방법을 알아보았습니다. 이제 우리는 요소를 얻는 다른 방법을 소개하겠습니다.

### 원소 내에서 특정 원소를 찾습니다.

#### `$("xxx").$('xxxx')` 방식 사용

`$("xxx").$('xxxx')`는 먼저 부모 요소를 선택한 다음 해당 부모 요소 내에서 조건을 충족하는 자식 요소를 찾는 방식입니다. 여기서 `$("xxx")`는 부모 요소를 선택하고, 그 후에 `$('xxxx')`을 사용하여 해당 부모 요소 내에서 조건을 충족하는 자식 요소를 찾습니다.

#### 예시

<html-viewer>

```
<!-- ofa.js 프로젝트에 가져오기 -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div class="parent">
  <p>Hello World</p>
  <div class="child">
    <span>This is a child element</span>
  </div>
</div>
<script>
  // 부모 요소를 선택하고 자식을 찾습니다.
  const parentElement = $(".parent");
  const childElement = parentElement.$(".child");

  // 하위 요소의 텍스트 콘텐츠 수정
  childElement.text = "Modified child element";
</script>
```

</html-viewer>

위의 예제에서는 먼저 `.parent` 클래스를 가진 부모 요소를 선택한 다음, 해당 부모 요소 내에서 `.child` 클래스를 가진 자식 요소를 찾기 위해 `.child`를 사용하였습니다. 그런 다음 자식 요소의 텍스트 내용을 "수정된 자식 요소"로 변경하였습니다.

### `$('xxx xxxx')` 사용하기

`$('xxx xxxx')`은 전역 범위에서 두 번째 선택자 조건에 맞는 요소를 찾은 다음, 이러한 요소 내에서 첫 번째 선택자 조건에 맞는 요소를 찾는 것입니다. 이 방법을 통해 조건에 맞는 하위 요소를 한 번에 찾을 수 있습니다.

#### 예시

<html-viewer>

```
<!-- ofa.js 프로젝트에 가져오기 -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div class="parent">
  <p>Hello World</p>
  <div class="child">
    <span>This is a child element</span>
  </div>
</div>
<script>
  // 조건에 맞는 자식 요소 직접 찾기
  const childElement = $('div .child');

  // 자식 요소의 텍스트 내용 수정하기
  childElement.text = "수정된 자식 요소";
</script>
```

</html-viewer>

위의 예에서는 `$ ('div .child')`를 직접 사용하여 `child` 클래스를 가진 하위 요소를 찾고 하위 요소의 텍스트 내용을 "수정된 자식 요소"로 변경했습니다.

### 여러 요소 선택

#### 전역 요소를 찾기 위해 `$.all('xxx')`를 사용합니다.

`$.all('xxx')` 메서드는 선택자 조건에 해당하는 페이지의 모든 요소를 찾아서 요소의 컬렉션으로 반환합니다. 이렇게 하면 페이지의 여러 요소를 일괄적으로 선택하여 작업할 수 있습니다.

#### 예시

<html-viewer>

```
<!-- ofa.js 프로젝트에 가져오기 -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<p>단락 1</p>
<p>단락 2</p>
<p>단락 3</p>
<script>
  // 모든 p 태그 요소 찾기
  const allParagraphs = $.all("p");

  // 모든 p 태그 요소의 텍스트 내용 수정
  allParagraphs.forEach((paragraph, index) => {
    paragraph.text = `수정된 단락 ${index + 1}`;
  });
</script>
```

</html-viewer>

위의 예제에서는 `$ .all("p")`를 사용하여 페이지에서 모든 `p` 태그 요소를 찾고 일괄 작업을 수행하여 텍스트 내용을 "수정된 단락 1", "수정된 단락 2" 및 "수정된 단락 3"으로 변경했습니다.

### 요소 내에서 조건을 만족하는 모든 요소 찾기

전역 범위를 검색할 뿐만 아니라 특정 요소 내에서 조건에 맞는 모든 하위 요소를 찾을 수도 있습니다. 사용 방법은 다음과 같습니다: `$('xxx').all('xxxx')`.

#### 예시

<html-viewer>

```
<!-- ofa.js 프로젝트에 가져오기 -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div class="container">
  <p>안녕하세요 세계</p>
  <div class="item">품목 1</div>
  <div class="item">품목 2</div>
  <div class="item">품목 3</div>
</div>
<script>
  // "item" 클래스를 가진 컨테이너에서 모든 하위 요소를 찾습니다.
  const container = $(".container");
  const items = container.all(".item");

  // 모든 자식 요소의 텍스트 내용 변경
  items.forEach((item, index) => {
    item.text = `수정된 품목 ${index + 1}`;
  });
</script>
```

</html-viewer>

위의 예제에서는 먼저 `$(".container")`를 사용하여 `container` 클래스를 가진 요소를 찾은 다음, 해당 컨테이너 내에서 `item` 클래스를 가진 모든 자식 요소를 `.all(".item")`을 통해 찾고, 이들에 대해 일괄 작업을 수행하여 텍스트 내용을 "Modified Item 1", "Modified Item 2" 및 "Modified Item 3"으로 수정하였습니다.

## 사건

앞에서 이미 `on` 이벤트 바인딩의 사용법을 설명했으며, 이어서 몇 가지 이벤트 관련 메서드를 소개하겠습니다.

### off 메소드 사용 문서

`off` 메서드는 `on` 메서드로 바인딩된 이벤트 처리 함수를 제거하는 데 사용됩니다. 특정 이벤트의 처리 함수가 더 이상 필요하지 않을 때, 중복 실행 또는 메모리 누수를 방지하기 위해 `off` 메서드를 사용하여 해당 함수를 요소에서 제거할 수 있습니다.

#### 못번역합니다.

```javascript
$(selector).off(eventName, eventHandler);
```

selector: 이벤트 처리 함수를 제거할 요소를 선택합니다.
eventName: 제거할 이벤트 이름을 지정합니다.
eventHandler: 제거할 이벤트 처리 함수를 지정합니다.

#### 예시

<html-viewer>

```
<!-- ofa.js 프로젝트에 가져오기 -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<button id="btn">나를 클릭하세요</button>
<script>
  const handleClick = () => {
    alert("버튼이 클릭되었습니다!");
  };

  // 클릭 이벤트 핸들러를 바인딩합니다.
  $("#btn").on("click", handleClick);

  // 5초 후에 클릭 이벤트 핸들러를 제거합니다.
  setTimeout(() => {
    $("#btn").off("click", handleClick);
  }, 5000);
</script>
```
</html-viewer>

팝업 창에는 "버튼이 클릭되었습니다!"라는 메시지가 표시되지만, `off` 메소드를 사용하여 클릭 이벤트 핸들러가 5초 후에 제거되므로 버튼을 다시 클릭하면 팝업 창이 표시되지 않습니다.

### one 메서드 사용 설명서

`one` 메서드는 이벤트 처리 함수를 바인딩하는 데 사용되지만 해당 처리 함수는 이벤트를 처음으로 트리거할 때만 한 번 실행됩니다. 한 번 실행된 후에는 이벤트 처리 함수가 자동으로 제거되어 중복 트리거를 방지합니다.

#### 못번역합니다.

```javascript
$(selector).one(eventName, eventHandler);
```

- `선택자`: 이벤트 처리 함수를 바인딩할 요소를 선택합니다.
- `이벤트 이름`: 바인딩할 이벤트의 이름입니다.
- `이벤트 핸들러`: 실행할 이벤트 처리 함수입니다.


#### 예시

<html-viewer>

```
<!-- ofa.js 프로젝트에 가져오기 -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<button id="btn">Click Me Once</button>
<script>
  // 클릭 이벤트 처리 함수를 한 번만 실행하지만 바인딩한다.
  $("#btn").one("click", () => {
    alert("버튼을 한 번 클릭했습니다!");
  });
</script>
```
</html-viewer>

위의 예제에서 버튼을 클릭하면 "Button clicked once!"라는 대화 상자가 표시됩니다. 그러나 처음 클릭 한 후에는 이벤트 처리 함수가 제거되므로 이후에 버튼을 클릭해도 대화 상자가 더 이상 표시되지 않습니다.

### emit 메서드 사용 문서

`emit` 메서드는 바인딩된 특정 이벤트를 수동으로 트리거하는 데 사용됩니다. `emit` 메서드를 사용하여 실제 조작 없이 이벤트 처리 함수를 실행할 수 있습니다.

#### 못번역합니다.

```javascript
$(selector).emit(eventName);
```
 
선택한 요소에서 이벤트를 발생시키기 위한 선택자입니다.
- 발생시킬 이벤트의 이름입니다.

#### 예시

```html
<button id="btn">Click Me</button>
<script>
  // 클릭 이벤트 핸들러 바인딩
  $("#btn").on("click", () => {
    alert("Button clicked!");
  });

  // emit 메서드를 통해 버튼 클릭 이벤트 트리거하기
  $("#btn").emit("click");
</script>
```

이전 예제에서 `emit` 메소드를 사용하여 버튼의 클릭 이벤트를 수동으로 트리거했습니다. 이로 인해 "Button clicked!"라는 대화 상자가 나타나지만 실제로 버튼을 클릭하지는 않습니다.

주의 ：`emit` 메서드는 마우스 클릭이나 다른 실제 이벤트를 모방하지 않으며, 바인딩된 이벤트 처리 함수를 직접 호출합니다. 따라서 특정 상황에서 이벤트를 실행하려면 `emit` 메서드를 사용할 수 있습니다.


당신이 이벤트를 바인딩한 후에, 때로는 이벤트의 계속 전파(버블링)를 막거나 이벤트의 기본 동작을 취소하고 싶을 수도 있습니다. 아래에는 이벤트 트리거 후에 버블링을 중단하고 기본 이벤트를 취소하는 방법에 대해 설명되어 있습니다.

### 이벤트 버블링 금지

이벤트 버블링은 요소에서 이벤트가 발생하면 DOM 트리를 따라 위로 버블 형식으로 전파되어 부모 요소의 동일한 종류의 이벤트를 차례로 발생시킵니다. 특정 요소에서 이벤트를 처리하고 이벤트 버블링을 계속 방지하려면 `event.stopPropagation()` 메소드를 사용할 수 있습니다.

예제 코드:

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Stop Event Bubbling</title>
  <script src="../ofa.js"></script>
</head>
<body>
  <div id="outer">
    <div id="inner">
      <button id="btn">Click Me</button>
    </div>
  </div>

  <script>
    const btn = $('#btn');
    const innerDiv = $('#inner');

    btn.on('click', (event) => {
      alert('Button Clicked!');
      event.stopPropagation(); // 이벤트 버블링 중단
    });

    innerDiv.on('click', () => {
      alert('Inner Div Clicked!');
    });

    $('#outer').on('click', () => {
      alert('Outer Div Clicked!');
    });
  </script>
</body>
</html>
```

위의 예에서 "Click Me" 버튼을 클릭하면 "Button Clicked!"이 표시되지만 "Inner Div Clicked!" 및 "Outer Div Clicked!" 이벤트가 트리거되지 않습니다. 이는 버튼 클릭 이벤트 처리기에서 `event.stopPropagation()`을 호출하여 이벤트 전파를 차단했기 때문입니다.

### 기본 동작 취소 이벤트

클릭한 대상에 따라 일부 요소는 기본 동작이 발생합니다. 예를 들어, 제출 버튼을 클릭하면 양식이 제출되고 링크를 클릭하면 해당 링크로 이동합니다. 이벤트의 기본 동작을 중단하려면 `event.preventDefault()` 메서드를 사용할 수 있습니다.

예제 코드:

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>기본 이벤트 방지</title>
  <script src="../ofa.js"></script>
</head>
<body>
  <form id="myForm">
    <label for="name">이름:</label>
    <input type="text" id="name" />
    <button id="submitBtn">전송</button>
  </form>

  <script>
    const form = $('#myForm');
    const submitBtn = $('#submitBtn');

    submitBtn.on('click', (event) => {
      event.preventDefault(); // 이벤트의 기본 동작을 취소
      const name = $('#name').value;
      alert(`안녕하세요, ${name}님! 폼 제출이 방지되었습니다.`);
    });

    form.on('submit', () => {
      alert('폼 제출됨!');
    });
  </script>
</body>
</html>
```

위의 예시에서 "제출" 버튼을 클릭하면 "안녕하세요, {name}! 양식 제출이 방지되었습니다."라는 메시지가 표시되지만 "양식 제출되었습니다!" 경고가 트리거되지 않습니다. 이것은 우리가 제출 버튼의 클릭 이벤트 핸들러에서 `event.preventDefault()`를 호출하여 양식의 기본 제출 동작을 막았기 때문입니다.