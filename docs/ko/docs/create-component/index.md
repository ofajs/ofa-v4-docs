#
컴포넌트 제작 및 사용하기

ofa.js는 컴포넌트를 정의하기 위해 기본적인 HTML과 JavaScript 파일을 사용하여, 학습 비용을 줄이기 위해 새로운 파일 유형을 도입하지 않습니다. HTML에 대한 기본적인 이해만 있다면, ofa.js 컴포넌트를 빠르게 개발하고 사용할 수 있습니다.

## 컴포넌트를 생성하기 전에 준비해야 할 단계

在开始创建组件之前，需要注意一些准备工作。由于创建组件涉及到浏览器请求资源的操作，如果你仅仅是双击打开 HTML 文件来查看，会在 "file" 协议下进行查看。在 "file" 协议下，JavaScript 模块的加载可能会报错。因此，你需要准备一个静态服务器来正确查看组件。

만약 당신이 Visual Studio Code 편집기를 사용한다면, 정적 서버를 지원하는 플러그인을 간단히 설치할 수 있습니다. [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) 플러그인을 사용하는 것을 추천합니다.

插件를 설치한 후에는 `demo.html` 파일에서 마우스 오른쪽 버튼을 클릭하고 "Open with Live Server"를 선택하기만하면됩니다. 플러그인은 파일을 정적 서버 모드로 자동으로 엽니다.

만약 다른 편집기를 사용하고 있다면, Nginx 또는 Apache 서버를 생성하여 정적 HTML을 확인할 수 있다면 사용할 수 있습니다. 이렇게 함으로써 컴포넌트를 정상적으로 미리 보기하고 개발할 수 있습니다.

## 버튼 컴포넌트 만들기

아래에서 우리는 간단한 버튼 컴포넌트를 만들어볼 것입니다. 이 컴포넌트는 **simple-button**으로 이름 지어지며 기본 버튼보다 보기 좋은 스타일을 갖추게 될 것입니다.

먼저, `simple-button.html` 이라는 이름의 파일을 생성하고 `template` 태그를 사용하여 컴포넌트로 식별 할 수 있도록`component` 속성을 추가하십시오.

그런 다음 `template` 내에 구성 요소 템플릿 코드를 작성합니다. 그리고 템플릿 내용 아래에 `script` 태그를 추가하여 구성 요소의 JavaScript 코드를 넣습니다.

```html
<!-- simple-button.html -->
<template component>
  <style>
    .shadow-button {
      background-color: #4caf50;
      border: none;
      color: white;
      padding: 15px 32px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      border-radius: 10px;
      box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
      cursor: pointer;
    }
    .shadow-button:hover {
      opacity: 0.8;
    }

    .shadow-button:active {
      transform: translateY(4px);
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    }
  </style>

  <button class="shadow-button">
    <slot></slot>
  </button>

  <script>
    export default {
      tag: 'simple-button' // 등록할 컴포넌트 이름, tag 속성이 정의되어 있지 않으면 파일 이름과 동일한 컴포넌트 이름으로 등록됩니다
    }
  </script>
</template>
```

성공적으로 ofa.js를 도입한 후 `load-module` 구성 요소가 자동으로 등록됩니다. 이는 모듈을 선언적으로 참조하기 위한 구성 요소로, 스크립트 태그와 유사합니다. 이 구성 요소는 지정된 `src` 모듈을 로드하고, 로드해야하는 모듈에 대해 사전 처리합니다. 이 예에서는 템플릿을 로드하고 simple-button 구성 요소를 등록합니다.

`load-module` 구성 요소는 `l-m` 약어를 사용하여 코드 양을 줄일 수도 있습니다.

```html
<!-- demo.html -->
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>simple-button</title>
    <script src="../../ofa.js"></script>
    <!-- <load-module src="./simple-button.html"></load-module> -->
    <!-- l-m 구성 요소는 load-module 구성 요소와 동일하며 코드를 줄일 수 있습니다 -->
    <l-m src="./simple-button.html"></l-m>
  </head>
  <body>
    <simple-button>나는 버튼입니다</simple-button>
  </body>
</html>
```

`load-module` 컴포넌트는 맞춤형 **선언적 로더** 라이브러리로, 다양한 파일 유형을 지원하거나 JavaScript 모듈을 중개 처리하는 강력한 기능을 제공합니다. 이는 독립된 프로젝트로 분리되어 [https://github.com/kirakiray/drill.js](https://github.com/kirakiray/drill.js)에서 구체적인 사용 문서를 확인할 수 있습니다.

### 이중 파일 모드

이중 파일 모드는 '정적 템플릿'과 '로직 코드'를 분리하여 컴포넌트를 더 명확하게 만듭니다.

논리 코드는 js 파일에 위치해야하며이 js에는 `export const type = $.COMP;`라는 표식을 지정하여 페이지에이 컴포넌트 모듈임을 알립니다. 이 분할 모드에서 모듈 코드는 `import`와 같은 ES Module 표준 구문을 사용할 수 있습니다.

버튼 구성 요소는 두 개의 파일로 구성됩니다.

1. **simple-button.html**: 단추 컴포넌트의 HTML 템플릿과 스타일입니다.

```html
<!-- simple-button.html -->
<style>
  .shadow-button {
    background-color: #4caf50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 10px;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
  .shadow-button:hover {
    opacity: 0.8;
  }

  .shadow-button:active {
    transform: translateY(4px);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  }
</style>

<button class="shadow-button">
  <slot></slot>
</button>
```

2. **simple-button.mjs**: 버튼 컴포넌트의 등록 코드입니다.

```javascript
// simple-button.mjs
export const type = $.COMP; // 双文件模块必须带有 `export const type = $.COMP`

// 需要注册的组件名，当没有定义 tag 属性时，注册的组件名与文件名保持一致
// export const tag = 'simple-button';

// 组件模板的地址，当没有定义时，默认载入和当前模块同目录下的和组件同名的 html 文件
// export const temp = './simple-button.html';
```

여기에서 해당 구성 요소를 사용하는 곳은 `l-m`을 사용하여이 모듈을 가져옵니다. 아래는 simple-button을 사용한 예제 페이지 (이중 파일 모드)입니다.

```html
<!-- demo.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>simple-button</title>
    <script src="ofa.js"></script>
    <l-m src="./simple-button.mjs"></l-m> 
  </head>
  <body>
    <simple-button>I am a button</simple-button>
  </body>
</html>
```