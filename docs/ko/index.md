# ofa.js - 노 빌드 MVVM JavaScript 프레임워크

<!-- 설명: ofa.js는 번거로운 빌드 프로세스 없이 직접 참조하여 사용할 수 있는 사용자 인터페이스를 구축하는 새로운 프레임워크입니다. npm, Node.js 및 webpack에 대한 의존성을 제거하고 jQuery 시대의 편리함으로 돌아갑니다. -->

<simp-block>

<punch-logo>
    <img src="../publics/logo.svg" width="100" logo alt="ofa.js" />
    <h2>ofa.js</h2>
    <img src="../publics/npm-logo.png" slot="fly" height="40" alt="npm" />
    <img src="../publics/nodejs-logo.png" slot="fly" height="40" alt="nodejs" />
    <img src="../publics/webpack-logo.png" slot="fly" height="40" alt="webpack" />
</punch-logo>

## 노 빌드 MVVM JavaScript 프레임워크

### 까다로운 학습 필요 없음, npm, nodejs, webpack 없이 즉시 시작

[사례 안내서](./cases/index.md)

```html
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

</simp-block>

<simp-block>

## 웹 컴포넌트 기반

### ofa.js는 Web Components를 기반으로 개발되었습니다. 지원되는 플랫폼과 릴리스 일정은 다음과 같습니다. 지금 바로 경험해 볼 수 있습니다.

<support-platforms></support-platforms>

<a href="../publics/download/ofajs-start.zip" target="_blank">초기화 프로젝트 다운로드</a>
<a href="../publics/download/ofajs-start/index.html" target="_blank">온라인에서 초기화 프로젝트 보기</a>

</simp-block>

<simp-block>

## 극저 사용 임계값

다른 프런트엔드 프레임워크와 달리 ofa.js를 기반으로 개발된 컴포넌트를 개발하는 데 복잡한 시작 가이드를 읽을 필요가 없습니다. HTML 파일을 즉시 만들어 "로고 펀치 아웃" 컴포넌트를 체험해 보세요.

<html-viewer style="width:100%;">

```Korean
<!-- ofa.js 프로젝트로 임포트 -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
<!-- 개발한 punch-logo 컴포넌트 로드 -->
<l-m src="https://ofajs.github.io/ofa-v4-docs/docs/publics/comps/punch-logo.html"></l-m>
```

```html
<!-- punch-logo 구성 요소 사용 -->
<punch-logo style="margin:50px 0 0 100px;">
    <img src="https://kirakiray.github.io/ofa-v4-docs/docs/publics/logo.svg" logo height="90" />
    <h2>야근하지 않을게요</h2>
    <p slot="fly">퇴근해주세요</p>
    <p slot="fly">나중에 퇴근</p>
    <p slot="fly">주말에 야근</p>
</punch-logo>
```

</html-viewer>

</simp-block>

<simp-block>

## 한 단계로 컴포넌트 패키징 및 복잡한 프로세스 제거

과거의 Web Components의 캡슐화는 복잡한 지식 학습이 필요했지만, 지금은 단 한 개의 파일만으로도 가능합니다.

<comp-viewer comp-name="my-switch" max-height="500" style="width:100%;">

```html
<template component>
  <style>
    .switch {
      position: relative;
      display: inline-block;
      width: 60px;
      height: 34px;
      background-color: #ccc;
      transition: background-color 0.4s;
      border-radius: 34px;
      cursor: pointer;
    }

    .slider {
      position: absolute;
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      transition: transform 0.4s;
      border-radius: 50%;
    }

    .switch.checked {
      background-color: #2196f3;
    }

    .switch.checked .slider {
      transform: translateX(26px);
    }
  </style>
  <div class="switch" class:checked="checked" on:click="checked = !checked">
    <span class="slider"></span>
  </div>
  <script>
    export default {
      tag: "my-switch",
      data: {
        checked: true,
      },
    };
  </script>
</template>
```

</comp-viewer>

</simp-block>


<simp-block>

## 다양하고 편리한 템플릿 문법 제공

<case-switch>

<comp-viewer switch-name="Render Text" comp-name="text-demo" max-height="500" style="width:100%;">

아래 번역 결과를 확인하세요.```html
<template component>
  <div>렌더링 텍스트: {{txt}}</div>
  <script>
    export default {
      tag: "text-demo",
      data: {
        txt:"나는 txt입니다."
      },
    };
  </script>
</template>
```

</comp-viewer>

<comp-viewer switch-name="Set Properties" comp-name="prop-demo" max-height="500" style="width:100%;">

```html
<template component>
  <div :text="txt1"></div>
  <div :html="txt2"></div>
  <script>
    export default {
      tag: "prop-demo",
      data: {
        txt1:"<b>나는 txt1입니다</b>",
        txt2:"<b>나는 txt2입니다</b>",
      },
    };
  </script>
</template>
```

</comp-viewer>


<comp-viewer switch-name="Sync Data" comp-name="sync-demo" max-height="500" style="width:100%;">

```html
<template component>
  <div>{{txt}}</div>
  <input type="text" sync:value="txt" />
  <script>
    export default {
      tag: "sync-demo",
      data: {
        txt:"I am txt",
      },
    };
  </script>
</template>
```

</comp-viewer>

<comp-viewer switch-name="Bind Event" comp-name="event-demo" max-height="500" style="width:100%;">

```html
<template component>
  <div>count: {{count}}</div>
  <button on:click="count++">count++</button>
  <script>
    export default {
      tag: "event-demo",
      data: {
        count: 0
      },
    };
  </script>
</template>
```

</comp-viewer>

<comp-viewer switch-name="Use If" comp-name="if-demo" max-height="500" style="width:100%;">

```html
<template component>
  <x-if :value="count % 2">
    <div style="color:red">{{count}}</div>
  </x-if>
  <x-else>
    <div style="color:blue">{{count}}</div>
  </x-else>
  <button on:click="count++">count++</button>
  <script>
    export default {
      tag: "if-demo",
      data: {
        count: 0
      },
    };
  </script>
</template>
```

</comp-viewer>


<comp-viewer switch-name="Use Fill" comp-name="fill-demo" max-height="500" style="width:100%;">

```html
<template component>
  <ul>
  <x-fill :value="lists">
    <li>{{$index}} - {{$data.name}}</li>
  </x-fill>
  </ul>
  <script>
    export default {
      tag: "fill-demo",
      data: {
        lists:[{name:"One"}, {name:"Two"}, {name:"Three"}]
      },
    };
  </script>
</template>
```

</comp-viewer>

</case-switch>

</simp-block>

<simp-block>

## 대체로 제이쿼리 선택이 가능합니다.

### jQuery와 유사한 API를 가지고 있어서 동일한 편리함을 느낄 수 있습니다.

<split-code>

```javascript
// jQuery Code
$("#target").html("some html code"); // html 설정
$("#target").text("set text"); // 텍스트 설정
var ele_text = $("#target").text(); // 텍스트 가져 오기
var parents = $("#target").parents(); // 모든 상위 요소 가져 오기 (배열)
var child = $("#target").children()[0]; // 첫 번째 자식 요소 가져 오기
```

```javascript
// ofa.js Code
$ =("#target").html = "일부 html 코드"; // html 설정
$("#target").text = "텍스트 설정"; // 텍스트 설정
var ele_text = $("#target").text; // 텍스트 가져 오기
var parents = $("#target").parents; // 모든 상위 요소 가져 오기 (배열)
var child = $("#target")[0]; // 첫 번째 자식 요소 가져 오기
```

</split-code>

</simp-block>

<simp-block>

## 업무 사례

<a href="https://obook.ofajs.com/">obook 가장 간단한 문서 작성기</a>

</simp-block>

<l-m src="https://cdn.jsdelivr.net/npm/obook/blocks/simp-block.html"></l-m>
<l-m src="../publics/comps/punch-logo.html"></l-m>
<l-m src="../publics/comps/support-platforms.html"></l-m>
<l-m src="../publics/comps/case-switch.html"></l-m>
<l-m src="../publics/comps/split-code.html"></l-m>