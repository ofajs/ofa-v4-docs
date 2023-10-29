# ofa.js - 不需要打包的 JavaScript 框架

ofa.js 은(는) 사용자 인터페이스를 구축하기 위한 새로운 프레임워크로, 복잡한 구축 과정이 필요하지 않고 직접 참조하여 쉽게 사용할 수 있습니다. 이는 npm, Node.js 및 webpack에 대한 의존성을 버리고 jQuery 시대의 편리함을 되살립니다.

<simp-block>

<punch-logo>
    <img src="../publics/logo.svg" width="100" logo alt="ofa.js" />
    <h2>ofa.js</h2>
    <img src="../publics/npm-logo.png" slot="fly" height="40" alt="npm" />
    <img src="../publics/nodejs-logo.png" slot="fly" height="40" alt="nodejs" />
    <img src="../publics/webpack-logo.png" slot="fly" height="40" alt="webpack" />
</punch-logo>

## 자바스크립트 프레임워크를 패키징 할 필요가 없습니다.

### 无需繁琐学习，无需 npm、nodejs、webpack，即刻上手

[사례 안내서](./cases/index.md)

```html
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

</simp-block>

<simp-block>

## 웹 컴포넌트 기반

### ofa.js 基于 Web Components 开发。以下是支持的平台和时间，你可以立即体验

<support-platforms></support-platforms>

다운로드 초기 프로젝트
온라인에서 초기 프로젝트 찾아보기

</simp-block>

<simp-block>

## 극저 사용 임계값

与其他前端框架不同，使用基于ofa.js开发的组件无需阅读繁杂入门指南。立刻创建一个 HTML 文件，体验一下“一拳撞飞logo”的组件。

<html-viewer style="width:100%;">

```
<!-- ofa.js 프로젝트로 로드 -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
<!-- 개발된 punch-logo 컴포넌트로 로드 -->
<l-m src="https://kirakiray.github.io/ofa-v4-docs/docs/publics/comps/punch-logo.html"></l-m>
```

```html
<!-- 使用 punch-logo 组件 -->
<punch-logo style="margin:50px 0 0 100px;">
    <img src="https://kirakiray.github.io/ofa-v4-docs/docs/publics/logo.svg" logo height="90" />
    <h2>不加班了</h2>
    <p slot="fly">下班给我</p>
    <p slot="fly">迟点下班</p>
    <p slot="fly">周末加班</p>
</punch-logo>
```

</html-viewer>

</simp-block>

<simp-block>

## 一步封装组件，摆脱繁琐流程

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

다양하고 편리한 템플릿 문법 제공

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

대체로 제이쿼리 선택이 가능합니다.

jQuery와 유사한 API를 가지고 있어서 동일한 편리함을 느낄 수 있습니다.

<split-code>

javascript
// jQuery Code
$("#target").html("일부 HTML 코드"); // HTML 설정
$("#target").text("텍스트 설정"); // 텍스트 설정
var ele_text = $("#target").text(); // 텍스트 가져오기
var parents = $("#target").parents(); // 모든 부모 요소 가져오기
var child = $("#target").children()[0]; // 첫 번째 자식 요소 가져오기

jQuery ("#target").html = "일부 html 코드"; // html 설정
jQuery ("#target").text = "텍스트 설정"; // 텍스트 설정
var ele_text = jQuery ("#target").text; // 텍스트 가져 오기
var parents = jQuery ("#target").parents; // 모든 상위 요소 가져 오기 (배열)
var child = jQuery ("#target")[0]; // 첫 번째 자식 요소 가져 오기

</split-code>

</simp-block>

<simp-block>

업무 사례

%[https://obook.ofajs.com/](https://obook.ofajs.com/) obook 최간단한 문서 작성 도구%

</simp-block>

<l-m src="https://cdn.jsdelivr.net/npm/obook/blocks/simp-block.html"></l-m>
<l-m src="../publics/comps/punch-logo.html"></l-m>
<l-m src="../publics/comps/support-platforms.html"></l-m>
<l-m src="../publics/comps/case-switch.html"></l-m>
<l-m src="../publics/comps/split-code.html"></l-m>