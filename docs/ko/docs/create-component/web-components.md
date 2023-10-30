# 컴포넌트 기본 지식

ofa.js는 Web Components 기술을 기반으로한 패키지 라이브러리로, 컴포넌트 개발 과정을 단순화하고 가속화하기 위해 설계되었습니다. 이는 복잡한 기술 세부 정보를 숨김으로써 개발자가 고품질 컴포넌트 및 응용 프로그램을 더 집중적으로 개발할 수 있도록 합니다.

컴포넌트를 더 잘 개발하기 위해서는 Web Components에 대한 지식을 습득하는 것이 필요합니다. 아래에 소개되는 지식은 ofa.js뿐만 아니라 다른 Web Components를 사용하는 프레임워크에서도 동일하게 도움이 될 수 있습니다.

## Shadow DOM 컨테이너

Web Components에서 Shadow DOM은 구성 요소 내부의 스타일과 구조를 캡슐화하기 위해 격리된 컨테이너를 제공합니다. 이는 구성 요소 내부의 스타일과 DOM 구조가 외부의 스타일과 구조와 상호 간섭하지 않으며, 따라서 구성 요소의 예측 가능성과 유지 보수성을 보장합니다.

ofa.js에서 각 구성 요소마다 Shadow DOM 컨테이너가 있으며, 이는 구성 요소의 내부 콘텐츠를 격리하는 데 사용됩니다. 템플릿 콘텐츠는이 컨테이너에 렌더링됩니다. `$`를 사용하여 얻은 구성 요소 인스턴스는 `shadow` 속성을 사용하여 구성 요소 내부의 Shadow DOM 컨테이너에 액세스하여 구성 요소 내부 요소를 조작하고 액세스할 수 있습니다.

```javascript
const myComponent = $("my-component"); // 컴포넌트 인스턴스 가져오기
const shadowContainer = myComponent.shadow; // 컴포넌트의 섀도 DOM 컨테이너 가져오기

$("my-component").shadow.$("h1").css.color = 'red' // 섀도 DOM의 h1을 빨간색으로 변경합니다.
```

## Web Components에서 일반적으로 사용되는 CSS 선택자

Web Components는 구성 요소 내부의 다른 부분을 선택하고 스타일 지정하기 위해 특수한 CSS 선택자를 제공합니다. 다음은 일반적으로 사용되는 선택자들입니다.

### :host 선택자

`:host` 선택자는 컴포넌트 자체의 외부 컨테이너를 선택하는 데 사용됩니다. 이 선택자를 사용하여 컴포넌트의 스타일을 정의할 수 있습니다.

```css
:host {
  display: block;
  border: 1px solid black;
  padding: 10px;
}
```

### ::slotted() 선택자

`::slotted()` 선택자는 슬롯으로 감싸진 요소를 선택하는 데 사용됩니다. 이 선택자를 사용하여 컴포넌트 내부의 스타일에서 슬롯의 내용을 스타일링할 수 있습니다.

```css
::slotted(p) {
  font-size: 18px;
  color: blue;
}
```

## 슬롯(Slot) 사용

슬롯은 웹 컴포넌트에서 컴포넌트 내에 외부 내용을 삽입하는 메커니즘입니다. 슬롯을 사용하면 사용자 정의 내용을 컴포넌트 내부로 전달하여 더 유연한 컴포넌트 구조를 구현할 수 있습니다.

### 단일 슬롯

컴포넌트 템플릿에서는 `<slot>` 요소를 사용하여 슬롯을 정의할 수 있습니다. 외부에서 입력된 내용은 슬롯 안쪽에 삽입됩니다.

```html
<!-- my-component.html -->
...
<div>
  <h2><slot></slot></h2>
</div>
...
```

```html
<!-- my-component를 사용합니다 -->
<my-component>
  <p>이것은 슬롯 콘텐츠입니다.</p>
</my-component>
```

### 여러 개의 네임드 슬롯

기본 슬롯 외에도 여러 개의 이름 지정 슬롯을 정의할 수 있습니다. 이름 지정 슬롯을 사용하면 개발자는 다른 내용을 서로 다른 슬롯 위치에 삽입할 수 있습니다.

```html
<!-- my-component.html -->
...
<div>
    <header><slot name="header"></slot></header>
    <main><slot></slot></main>
    <footer><slot name="footer"></slot></footer>
</div>
...
```

```html
<!-- my-component를 사용합니다-->
<my-component>
  <div slot="header">헤더 컨텐츠</div>
  <p>메인 컨텐츠입니다.</p>
  <div slot="footer">푸터 컨텐츠</div>
</my-component>
```

## slotchange 이벤트의 사용

`slotchange` 이벤트는 슬롯 내용이 변경될 때 발생합니다. 이벤트를 듣고 슬롯 내용과 관련된 작업을 실행할 수 있습니다.

```javascript
export default {
  data: {
    count: 0,
  },
  ready() {
    this.shadow.$("slot").on("slotchange", () => {
      console.log("Slot content has changed");
    });
  },
};
```