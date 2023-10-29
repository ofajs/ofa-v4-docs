# 소개

제외하고도, `ofa.js`는 구성 요소를 개발하는 것뿐만 아니라 완전한 기능의 응용 프로그램을 개발하는 데에도 사용될 수 있습니다.

`ofa.js`는 애플리케이션을 `o-app` 구성 요소로 통합하며, 이 태그를 직접 사용하여 애플리케이션을 빠르게 만들 수 있습니다. 이 방법을 통해 애플리케이션의 생성이 간단하고 효율적으로 이루어집니다.

또한, `ofa.js` 공식로 **라우팅** 및 **SSG(정적 페이지 생성)** 솔루션을 제공하여 개발자가 더 견고한 응용 프로그램을 구축하는 데 도움을 줍니다. 이러한 기능은 개발 프로세스를 가속화하고 응용 프로그램의 로직과 사용자 경험에 집중할 수 있도록 하며, 하부 세부 사항을 너무 많이 걱정하지 않도록 합니다.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>app test demo</title>
    <script src=".././../ofa.js"></script>
    <style>
      html,
      body {
        margin: 0;
        padding: 0;
      }

      o-app {
        display: block;
        height: 100%;
      }
    </style>
  </head>
  <body>
    <o-app>
      <o-page src="./pages/hello.html"></o-page>
    </o-app>
  </body>
</html>
```

위에는 간단한 애플리케이션 튜토리얼 코드 예제입니다. 애플리케이션 개발 과정을 차근차근 설명하겠습니다.