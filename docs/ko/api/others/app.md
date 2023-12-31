# app

`o-app` 는 `ofa.js` 의 핵심 컴포넌트 중 하나로 전체 애플리케이션을 구성하고 관리하기 위해 사용됩니다. 여기에는 앱의 몇 가지 주요 속성과 메서드가 있습니다:

## src

`src` 속성은 애플리케이션의 매개 변수 구성 모듈의 구체적인 주소를 지정하는 데 사용됩니다. 자세한 예제는 [사례](../../cases/app-config.md)를 참조하십시오.

```javascript
const app = $("o-app");
console.log(app.src);
```

## current

`current` 속성은 현재 표시되는 페이지 인스턴스를 가져오는 데 사용됩니다. 이를 통해 현재 표시되는 페이지에 액세스하고 조작할 수 있으며, 예를 들어 내용을 업데이트하거나 특정 작업을 실행할 수 있습니다.

```javascript
// 현재 페이지 예제 가져오기
const currentPage = app.current;
```

## goto

`goto` 메소드는 지정된 페이지로 이동하는 데 사용됩니다. 대상 페이지의 주소를 전달할 수 있고, 앱은 해당 페이지를 로드하고 표시합니다. 이는 앱 내비게이션에서 중요한 메소드입니다.

```javascript
// 특정 페이지로 이동
app.goto("/page2.html");
```

## replace

`replace` 메서드는 `goto`와 유사하지만 현재 페이지를 대체하는 데 사용됩니다. 새 페이지를 스택에 추가하지 않고 페이지를 대체하고자 할 때 사용할 수 있습니다.

```javascript
// 현재 페이지를 새로운 페이지로 바꿉니다
app.replace("/new-page.html");
```

## back

`back` 메소드는 이전 페이지로 돌아가는데 사용됩니다. 이를 통해 사용자는 이전 페이지로 이동할 수 있습니다.

```javascript
// 이전 페이지로 돌아가기
app.back();
```

## routers

`routers` 속성은 애플리케이션의 라우팅 구성 정보를 포함합니다. 이는 애플리케이션의 각 페이지의 라우팅 규칙과 매핑을 정의하는 중요한 속성입니다. 라우팅 구성은 페이지 간 탐색 및 URL 처리 방법을 결정합니다.

```javascript
// 애플리케이션의 라우트 구성 정보에 액세스합니다.
const routeConfig = app.routers;
```