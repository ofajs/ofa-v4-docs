# 컴포넌트의 생명주기

ofa.js는 컴포넌트의 라이프사이클이 특정 시점에 트리거되는 후크 함수입니다. 이러한 후크 함수를 통해 더 정밀하게 제어하고 상호 작용할 수 있으며, ofa.js에는 `created`, `ready`, `watch`, `loaded`, `attached` 및 `detached`라는 다섯 가지 중요한 라이프사이클 후크가 있습니다. 각각 다른 시기에 트리거됩니다.

## 생명주기 훅

### created

`created` 생명 주기 훅은 컴포넌트가 생성될 때 발생합니다. 이 단계에서는 컴포넌트의 데이터가 초기화되지 않았고, 템플릿 내용도 렌더링되지 않았습니다. 이 단계에서는 초기화 작업을 수행하거나 후속 단계에서 사용할 데이터를 준비할 수 있습니다.

### ready

`ready` 라이프사이클 훅은 컴포넌트의 데이터와 템플릿이 초기화된 직후에 발생하여 컴포넌트가 준비되었음을 나타냅니다. 이 단계에서는 컴포넌트의 데이터에 접근할 수 있으며 템플릿은 이미 렌더링되어 화면과 상호작용하는 일부 작업을 수행할 수 있습니다.

만약 컴포넌트 템플릿이 다른 컴포넌트에 의존성이 있다면, 이 단계에서는 의존성이 로드될 때까지 기다리지 않습니다. 따라서 이 단계는 컴포넌트에 로딩 스타일을 추가하는 데 적합하지만, 의존성 로드 후에 관련 작업을 수행해야합니다.

### watch

일단 `ready` 단계가 완료되면, 해당 `watch` 객체에 연결된 리스너 함수는 한 번 호출됩니다. 그 후, 데이터의 어떤 값이 변경되면 해당 키의 리스너 함수가 다시 호출됩니다.

### loaded

`loaded` 생명주기 훅은 컴포넌트 템플릿 내에서 모든 종속성이 로드된 후 트리거됩니다. 이 단계에서 컴포넌트를 렌더링하기 전에 모든 종속성이 완전히 로드되었는지 확인합니다. 이 시점에서 `ready` 단계에서 추가된 로딩 스타일을 제거하기에 적합합니다.

### attached

`attached` 라이프사이클 훅은 컴포넌트가 문서에 추가될 때 호출됩니다. 이 단계에서 컴포넌트 내부 엘리먼트의 크기 관련 정보를 가져오고 데이터 바인딩 및 전역 이벤트 조작에 적합합니다.

### detached

리소스 릭을 방지하기 위해 'detached' 라이프사이클 훅은 컴포넌트가 문서에서 제거 될 때 트리거됩니다. 이 단계에서 이벤트 리스너를 취소하거나 리소스를 해제하는 등의 정리 작업을 수행 할 수 있습니다.

## 예시 디모

아래는 라이프사이클 훅을 사용하는 방법을 보여주는 예시입니다.

```javascript
export default {
  data: {
    count: 0,
  },
  watch: {
    count(count) {
      console.log("count: ", count);
    },
  },
  created() {
    console.log("created: Component created, data not initialized.");
  },
  ready() {
    console.log(
      "ready: Component is ready with initialized data and template."
    );

    this.on("click", () => {
      this.count++;
    });
  },
  attached() {
    console.log("attached: Component attached to DOM.");
  },
  detached() {
    console.log("detached: Component detached from DOM.");
  },
};
```

## 생명주기 다이어그램

<img src="../../../publics/life-cycle.png" width="512" />
