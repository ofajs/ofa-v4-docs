# o-app 컴포넌트 사용하기

`o-app` 태그를 사용하면 완전한 응용 프로그램 창을 쉽게 만들 수 있습니다. 아래는 응용 프로그램을 만들고 구성하는 단계입니다.

문자가 약간 지루해 보입니다. [애플리케이션 사용 예시](../../cases/use-app.md) 로 이동하여 실제로 시도해 보기를 권장합니다.

바탕 코드

创建 HTML 파일을 만들어 `o-app` 태그를 애플리케이션 창으로 설정하십시오. `o-app`에 전체 화면 스타일을 설정하여 애플리케이션이 전체 뷰포트를 차지하도록 확인하십시오.

```html
<!-- app.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My App</title>
  <style>
    body, html {
      margin: 0;
      padding: 0;
      height: 100%;
      overflow: hidden;
    }
    o-app {
      width: 100%;
      height: 100%;
      display: block;
    }
  </style>
  <script src="../../ofa.js"></script>
</head>
<body>
  <o-app></o-app>
</body>
</html>
```

역할을 수행할 es 모듈을 생성하여 애플리케이션의 구성 데이터를 설정합니다. 구성 데이터에는 다음 옵션들이 포함됩니다:

   - `home`: 문자열 형식으로, 애플리케이션의 홈페이지 모듈 주소입니다.
   - `loading`: 함수 형식으로, 새로운 페이지를 로드할 때 이 함수가 실행되어 내용이 애플리케이션에 삽입됩니다. 이는 로딩 중인 동안 힌트로 사용되며 페이지 로드가 완료되면 자동으로 해당 로딩 요소가 제거됩니다.
   - `fail`: 함수 형식으로, 애플리케이션이 페이지 로드를 실패한 경우 이 함수가 실행되어 반환된 값이 애플리케이션에 로드 실패 메시지로 표시됩니다. 함수는 로드 실패한 페이지의 `src` 주소와 오류 보고 객체를 포함합니다.
   - `pageAnime`: 페이지 간 전환시에 사용되는 애니메이션 설정입니다.

下面은 애플리케이션의 구성 데이터 예시입니다.

```javascript
// app-config.mjs
export const home = "./pages/home.mjs?count=1";

export const loading = () => {
  const loadingEl = $(`<div style="width:100%;height:100%;display:flex;justify-content:center;align-items:center;word-break:break-all;">Loading</div>`);
  return loadingEl;
};

export const fail = ({ src, error }) => {
  return `<div style="width:100%;height:100%;display:flex;justify-content:center;align-items:center;word-break:break-all;" data-testid="error-container">
    <div style="padding:20px;text-align:center;">
      <h3>Load Fail</h3> 
      <p>${error.stack}</p>
      ${src}
      <div>
        <button on:click="back()">Back</button>
      </div>
    </div>
  </div>`;
};

export const pageAnime = {
  current: {
    opacity: 1,
    transform: "translate(0, 0)",
  },
  next: {
    opacity: 0,
    transform: "translate(30px, 0)",
  },
  previous: {
    opacity: 0,
    transform: "translate(-30px, 0)",
  },
};
```

HTML 파일에서 `o-app` 태그를 사용하고 `src` 속성을 통해 구성 데이터의 ES 모듈을 참조합니다.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My App</title>
  <style>
    body, html {
      margin: 0;
      padding: 0;
      height: 100%;
      overflow: hidden;
    }
    o-app {
      width: 100%;
      height: 100%;
      display: block;
    }
  </style>
  <script src="../../ofa.js"></script>
</head>
<body>
  <o-app src="./app-config.mjs"></o-app>
</body>
</html>
```

위 단계를 통해 'o-app' 컴포넌트를 사용하는 애플리케이션 창을 성공적으로 만들었습니다. 'o-app' 컴포넌트는 구성 데이터의 설정에 따라 페이지를 로드하고 로딩 중 또는 로드 실패에 대한 안내를 표시하며 페이지 전환 애니메이션을 지원합니다. 이렇게 하면 기능이 완벽하고 상호 작용이 가능한 애플리케이션을 빠르게 구축할 수 있습니다.

## 라우팅 전환

"o-app" 앱에서는 한 페이지 모듈에서 다른 페이지 모듈로 쉽게 이동할 수 있습니다. 아래는 라우팅 이동을 수행하는 다양한 방법을 소개합니다.

사용`<a>`태그로 페이지 이동하기

페이지의 HTML에서 `<a>` 태그를 사용하여 라우팅을 구현할 수 있습니다. `href` 속성을 대상 페이지 모듈의 경로로 지정하고 `olink` 속성을 추가하여 `o-app` 구성 요소에 이것이 라우팅 링크임을 알려줘야 합니다.

```html
<a href="./pages/home.mjs?count=2" olink>홈페이지로 이동</a>
```

### goto

페이지 템플릿에서는 `on:click` 속성을 사용하여 클릭 이벤트를 바인딩하고 모듈의 `goto` 메소드를 호출하여 라우팅 이동을 할 수 있습니다.

```html
<template page>
  <div class="container">
    <button on:click="toabout">跳转到关于页面</button>
  </div>

  <script>
    export default async ({ query }) => {
      return {
        proto: {
          toabout() {
            this.goto("./about.mjs");
          },
        },
      };
    };
  </script>
</template>
```

다시는 또는 대상 요소에서 직접 제거하세요.

```html
<button on:click="goto('./pages/about.mjs')">얼려버려</button>
```

替代 분기 및 반환 페이지

`o-app`는 `goto` 메서드 외에도 `replace` 및 `back` 메서드를 지원합니다.

- `replace` 메서드는 이동을 대체하는 데 사용됩니다. 이는 현재 페이지의 경로를 대체하여 새 페이지가 현재 페이지의 경로가되도록합니다.

```html
<button on:click="replace('./pages/settings.mjs')">이동하고 현재 페이지를 대체</button>
```

- `back` 메소드는 이전 페이지로 돌아갑니다.

번역할 수 없음

경고해야 할 점은 앱 내에서 컴포넌트의 라우팅 상태를 유지하지만, 라우팅 데이터가 현재 브라우저 탭에 바인딩되지 않는다는 것입니다. 이렇게하면 애플리케이션에서 페이지 간 이동과 탐색을 쉽게 구현할 수 있습니다.

널널마가로8

전에 언급한 방법을 사용하여 `o-app` 앱에서 유연한 라우팅 전환을 구현할 수 있으며, 사용자가 다양한 페이지 내용을 편리하게 탐색할 수 있습니다.

## 어플리케이션 및 현재 페이지에 접속하기

앱 내의 각 요소(구성 요소 포함)는 **app** 속성을 통해 `o-app` 인스턴스에 액세스할 수 있습니다. 전체 앱과 상호 작용해야 하는 작업에 매우 유용합니다.

앱의 `app.current` 속성을 통해 현재 활성화된 페이지 모듈의 주소를 얻을 수 있습니다.

이 상황의 사용 예시는 다음과 같습니다.

javascript
// MyComponent.mjs
export default () => {
  return {
    attached(){
      const appTag = this.app;

      const currentPage = appTag.current;
      console.log(`현재 활성화된 페이지는 : ${currentPage}`);
    }
  };
}

위의 예에서 `.app` 선택기로 애플리케이션 태그를 가져와 `app.current` 속성을 통해 현재 활성화된 페이지 주소를 얻었습니다.

## 사용 팁: 다음 페이지 캐시 미리 저장하기

사용자가 다음 페이지로 이동 할 것으로 예상되는 경우가 있습니다. 사용자 경험을 향상시키기 위해 다음 페이지의 페이지 모듈을 미리 캐시해두고, 실제로 이동할 때 즉시로드 할 수 있도록하여 사용자의 대기 시간을 줄이고 사용자 경험을 더욱 원활하게 만들 수 있습니다.

현재 페이지의 JavaScript 코드에서 `load` 메소드를 호출하고 다음 페이지의 모듈 경로를 전달하면 해당 모듈이 로드되고 캐시됩니다.

```javascript
// MyComponent.mjs
export default async ({ load }) => {
  //   await load('./pages/next-page.mjs');
  load('./pages/next-page.mjs'); // 이것은 캐시 용도로만 사용되는 모듈입니다. 현재 페이지가 아닌 다른 페이지에서도 필요하지 않으므로 await을 추가할 필요가 없습니다.
};
```