# 정적 클라이언트 렌더링(SCSR)

## SCSR란 무엇인가요?

SCSR 전체 이름인 정적 클라이언트 측 렌더링은 정적 클라이언트 측 렌더링으로 알려져 있으며 CSR (클라이언트 측 렌더링)의 변형 중 하나입니다. SCSR은 CSR의 사용자 경험을 유지하면서 페이지가 정적 상태에서도 크롤러에서 검색될 수 있도록 합니다.

## SCSR 사용 방법

SCSR 라이브러리를 인용하는 방법은 다음과 같습니다:

```html
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.40/libs/scsr/dist/scsr.min.js"></script>
```

## SCSR 작동 원리

SCSR 는 페이지 모듈의 파일 단일 실행 모드를 통해 페이지 렌더링을 위해 `o-page` 태그를 사용하지 않고 직접 실행됩니다. 구체적으로는 페이지 모듈의 템플릿 코드를 `o-app` 내에 바로 넣는 것을 의미합니다.

아래는 SCSR 예제입니다. 페이지에 페이지 모듈의 내용을 직접 렌더링하는 방법을 보여줍니다.

```html
<!-- home.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Home</title>
    <link rel="stylesheet" href="./public.css" />
    <script src="../../ofa.js"></script>
    <script src="./scsr.min.js"></script>
  </head>
  <body>
    <o-app src="./app.mjs">
      <template page>
        <div class="container">
          <h1 class="title">Hello, World!</h1>
          <p class="subtitle">Welcome to my ofa.js page.</p>
          <div>count => {{count}}</div>
          <a href="./pages/help.html" olink>GO TO HELP</a>
        </div>

        <script>
          export default async ({ query }) => {
            return {
              data: { count: query.count || 0 },
            };
          };
        </script>
      </template>
    </o-app>
  </body>
</html>
```

SCSR를 통해`template` 태그 내의 내용은 페이지에 직접 렌더링되며, 이 부분의 내용은 실제로 단일 파일 모드의 페이지 모듈입니다.

위에서 언급한 `home.html` 페이지를 기반으로 하여 `help` 페이지를 만듭니다.

```html
<!-- pages/help.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Help</title>
    <link rel="stylesheet" href="../public.css" />
    <script src="../../../ofa.js"></script>
    <script src="../scsr.min.js"></script>
  </head>
  <body>
    <o-app src="../app.mjs">
      <template page>
        <div class="container">
          <h1 class="title">Help Page</h1>
          <button on:click="back()">GO Back</button>
        </div>

        <script>
          export default async ({ query }) => {
            return {
              proto: {},
            };
          };
        </script>
      </template>
    </o-app>
  </body>
</html>

```

홈 화면에서 "도움말로 이동"을 클릭하면 `help.html` 페이지로 부드럽게 전환되어 클라이언트 측 렌더링 전환 효과가 구현되었습니다.

## 주의 사항

모든 SCSR 기반 페이지는 페이지 설명 (예 : 제목, 메타 설명, 키워드)과 페이지 템플릿 내용을 제외한 모든 리소스 참조를 일관되게 유지하여 페이지 전환 및 새로 고침 후의 일관된 사용자 경험을 보장해야합니다.

## SSR 계획에 대해

현재의 SCSR 방안은 사실상 SSG (Static Site Generation) 방안과 유사한데, 이는 페이지를 미리 정적 콘텐츠로 렌더링한 후 클라이언트를 통해 상호작용을 할 수 있게 합니다. ofa.js는 독립적인 컴포넌트 래핑 솔루션을 제공하여 프론트엔드 개발자가 컴포넌트를 패키징하고 전통적인 백엔드 렌더링 페이지 방법(Node.js, Go, Java, PHP 등의 웹 사이트 렌더링 프레임워크)과 결합하여 백엔드 개발자가 이러한 패키징된 컴포넌트를 사용하여 고품질의 웹 페이지를 빠르게 구축할 수 있게 합니다.

우리는 미래에 완전한 SSR(Server-Side Rendering) 솔루션을 제공할 계획입니다. 이 솔루션은 대략적으로 다음 페이지의 요소 내용을 가져와 현재 페이지의 태그 내용과 비교하여 동적으로 속성 추가, 삭제 및 수정 등 작업을 수행합니다. 그러나 이 SSR 솔루션은 시간이 많이 소요될 수 있습니다. 왜냐하면이 과정은 복잡한 요소 비교 및 수정 작업을 포함하기 때문입니다.

ofa.js는 새롭게 등장한 프레임워크이며, 그리고 작성자의 아마추어 시간도 제한되어 있어 아직 이 SSR 솔루션을 완전히 개발하지 못했습니다. 그러나 앞으로 ofa.js가 더 많은 사용자들에게 사용되고 SSR 솔루션에 대한 강한 요구가 출현하면 작성자는 계속해서 이 솔루션을 개선하고 개발할 것입니다. 현재, 작성자는 프레임워크의 안정성과 기능 확장에 집중하고 있으며, 동시에 사용자의 피드백과 제안을 환영하여 앞으로 사용자의 요구를 더욱 잘 만족시킬 수 있도록 노력할 것입니다.