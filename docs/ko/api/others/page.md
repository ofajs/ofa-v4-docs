# `o-page` 컴포넌트

`o-page` 는 `ofa.js` 에서 중요한 구성요소 중 하나로, 독립된 페이지나 페이지 모듈을 나타냅니다. 다음은 `o-page` 의 몇 가지 주요 속성과 메서드입니다:

## `src` 속성

`src` 속성은 페이지 모듈의 구체적인 주소를 지정하는 데 사용됩니다. 이는 페이지의 내용과 동작을 지정하는 중요한 속성으로, 특정 페이지의 내용을 어디서 로드할지 애플리케이션에 알려줍니다.

구글번역 서비스를 사용하여 번역한 결과입니다. 번역의 정확성을 보장할 수 없으니 참고 바랍니다.```javascript
// 예제 코드 : 현재 페이지 주소 가져오기
// const page = $("o-app").current;
...
ready(){
  // 페이지 모듈의 라이프사이클 내에서, this는 현재 페이지 모듈 자체입니다.
  const page = this;
}
...
```

## 메서드 `%{code}goto%`는 프로그램의 특정 위치로 제어를 전달하는 데 사용됩니다.

goto 메서드는 현재 페이지에서 다른 페이지로 이동하는 데 사용됩니다. `app`의 goto 메서드에 비해, `page`의 goto 메서드는 다른 페이지로의 상대 경로를 사용하여 탐색할 수 있습니다.

```javascript
// 예제 코드: 현재 페이지 모듈에서 다른 페이지로 이동하기
page.goto("./page2.html");
```

## `replace` 메서드

`replace` 메서드는 현재 페이지를 다른 페이지로 대체하는 데 사용됩니다. 이는 `app`의 `replace` 메서드와 유사하지만 페이지 내에서 대체 작업을 수행합니다.

```javascript
// 예시 코드: 현재 페이지 모듈 내에서 현재 페이지를 다른 페이지로 대체합니다.
page.replace("./new-page.html");
```

## `뒤로가기` 메서드

뒤로 가기(back) 메소드는 이전 페이지로 돌아가는 데 사용됩니다. 이는 사용자를 이전 페이지로 이동시키며, 웹 브라우저의 뒤로 가기 기능과 유사합니다.

```javascript
// 예제 코드: 이전 페이지로 돌아가기
page.back();
```