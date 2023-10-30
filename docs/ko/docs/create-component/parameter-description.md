# 컴포넌트 등록 매개변수에 대해 상세히 설명합니다.

ofa.js에서는 컴포넌트 모듈에서 특정한 등록 매개변수를 정의하여 컴포넌트의 설정을 더 유연하게 구성할 수 있습니다. 각 등록 매개변수에 대해 자세히 설명하고 해당하는 예제를 제시합니다.

## 주요 매개 변수

기본 매개 변수는 구성 요소의 기본 구성으로, 다음과 같은 속성을 포함합니다.

### tag

`tag`는 등록된 컴포넌트의 이름을 나타냅니다. `tag` 속성이 정의되지 않은 경우, 등록된 컴포넌트의 이름은 파일 이름과 동일합니다.

예시:

```javascript
export const tag = "my-button"; // 컴포넌트 이름을 'my-button'으로 등록합니다.
```

### data

`data`는 컴포넌트가 생성될 때 기본으로 추가되는 사용자 정의 데이터를 생성하는 데 사용되는 객체 타입 속성입니다.

예시:

```javascript
export const data = {
  count: 0,
};
```

### attrs

`attrs`는 객체 타입의 속성으로, `data`에 속하지만이 데이터는 요소의 속성에 반영되며, 속성의 변경사항은 동적으로 컴포넌트의 `data`에도 반영됩니다. 대문자 키가 나타날 때, 컴포넌트 속성에 반영되는 것은 `-`를 낙타 표기법으로 변환됩니다.

예시:

```javascript
export const attrs = {
  buttonText: "Click Me",
};
```

### proto

구성 요소의 등록 매개 변수에서 'proto' 객체를 추가하여 구성 요소 원형에 추가해야하는 메서드를 정의할 수 있습니다. 이렇게하면 구성 요소 인스턴스를 생성할 때 이러한 속성 및 메서드가 인스턴스의 원형에 추가되므로 모든 인스턴스에서 이러한 메서드에 액세스하고 공유할 수 있습니다.

```javascript

export const data = {
  count: 0,
};

export const proto = {
  sayHello() {
    alert('Hello Count:'+ this.count);
  },
};
```

### watch

`watch`은 `data`의 변화를 감시하는 객체 타입 속성으로, 감시 함수가 여기에 위치합니다. 등록이 성공한 후, 감시하는 값은 즉시 한 번 실행됩니다.

watch 한 번의 스레드 변경에서 등록된 함수는 한 번만 트리거됩니다. 따라서 한 번의 스레드에서이 리스닝 값이 여러 번 수정되더라도 한 번만 트리거됩니다.
- 첫 번째 매개 변수는 현재 값입니다.
- 두 번째 매개 변수는 "watchers" 데이터 세트가있는 객체입니다. 일반적으로 "watchers"에는 한 개의 객체만 있으며 이 객체에서 "oldValue"를 가져올 수 있습니다. 한 번의 스레드에서 이 리스닝 값이 여러 번 변경되면이 데이터 세트에 여러 번의 변경 내용이 기록됩니다.

예시:

```javascript
export const data = {
  count: 0,
};
export const watch = {
  count(newValue, { watchers }) {
    let oldValue;
    if (watchers) {
      oldValue = watchers[0].oldValue;
    }
    console.log(`count changed from ${oldValue} to ${newValue}`);
  },
};
```

### temp

일반적으로 이 변수를 설정할 필요는 없으며, 주로 분리 모드에서 사용되며 컴포넌트 템플릿의 주소를 지정하는 데 사용됩니다. `temp` 가 정의되지 않은 경우, 기본적으로 현재 모듈과 동일한 이름을 가진 HTML 파일을 로드합니다. 해당 파일은 동일한 디렉토리에 있어야 합니다.

## default로 변수 병합

default에 모든 내보낼 변수를 작성하면 더 편리합니다.

```javascript
export default {
  tag: "my-button",
  data: {
    count: 0,
  },
  attrs: {
    buttonText: "Click Me",
  },
  watch: {
    count(newValue, { watchers }) {
      let oldValue;
      if (watchers) {
        oldValue = watchers[0].oldValue;
      }
      console.log(`count changed from ${oldValue} to ${newValue}`);
    },
  },
  proto: {
    sayHello() {
      alert("Hello Count:" + this.count);
    },
  },
};
```

## 예제 코드

아래는 기본 매개변수와 구성 요소 템플릿이 포함 된 완전한 예제 코드입니다.

<comp-viewer comp-name="my-button">

```
<my-button button-text="My Button"></my-button>
<!-- <script>
  $("my-button").on("click", () => {
    $("my-button").count++;
  });

  setTimeout(() => {
    $("my-button").sayHello();
  }, 1000);
</script> -->
```

```html
<template component>
  <style>
    .shadow-button {
      background-color: #6b47fb;
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
  </style>

  <!-- 템플릿 렌더링 구문을 사용하여 컴포넌트 데이터를 텍스트로 렌더링하기 -->
  <button class="shadow-button" on:click="count++">{{buttonText}} - count:{{count}}</button>

  <script>
    export default {
      tag: "my-button",
      data: {
        count: 0,
      },
      attrs: {
        buttonText: "Click Me",
      },
      watch: {
        count(newValue, { watchers }) {
          let oldValue;
          if (watchers) {
            oldValue = watchers[0].oldValue;
          }
          console.log(`count changed from ${oldValue} to ${newValue}`);
        },
      },
      proto: {
        sayHello() {
          // alert("Hello Count:" + this.count);
        },
      },
    };
  </script>
</template>
```

</comp-viewer>

### default

또한 동적으로 컴포넌트의 등록 매개변수를 반환하기 위해 `default` 데이터를 정의하는 비동기 함수를 사용할 수 있습니다.

함수의 `function`은 `load`, `url` 및 `query`를 포함하는 개체를 가져옵니다.

- `load` 메소드는 비동기적으로 함수를 로드하는 방법이다. 비동기 `import`와 비슷한 방법을 사용하며, `const data = await load(xxx)`를 통해 비동기 모듈을 로드할 수 있다.
- `load`로 로드한 모듈은 `load-module`과 동일한 효과를 갖는다. `load` 메소드는 함수 버전의 `load-module` 컴포넌트와 같으며, 자세한 사용 방법은 [https://github.com/kirakiray/drill.js](https://github.com/kirakiray/drill.js) 문서를 확인하면 된다.
- `url`은 현재 모듈의 파일명이다.
- `query`는 이 모듈을 로드할 때의 URL 매개변수를 객체로 변환한 것이다.

다음은 `default`를 사용한 예시입니다.

```javascript
// button-component.mjs
export const tag = "my-button";
export const temp = "./my-button-template.html";

export default async function ({ load, url, query }) {
  console.log("url:", url); // 현재 모듈의 파일명을 출력합니다.
  console.log("query:", query); // 현재 모듈의 URL 매개변수에서 변환된 객체를 출력합니다.

  const asyncData = await load("./async-data.mjs"); // 로드를 사용하여 비동기적으로 모듈 로드
  console.log("asyncData:", asyncData); // 비동기식으로 로드된 모듈 데이터 출력

  return {
    data: {
      count: 0,
    },
    attrs: {
      buttonText: "Click Me",
    },
    watch: {
      count(newValue, { watchers }) {
        let oldValue;
        if (watchers) {
          oldValue = watchers[0].oldValue;
        }
        console.log(`count changed from ${oldValue} to ${newValue}`);
      },
    },
    proto: {
      sayHello() {
        alert("Hello Count:" + this.count);
      },
    },
  };
}
```

%