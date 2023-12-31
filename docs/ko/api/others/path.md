# PATH

`PATH` 속성은 일반적으로 커스텀 컴포넌트나 페이지 컴포넌트에 사용되며 해당 컴포넌트의 등록된 컴포넌트 파일의 주소를 가져오는 데 사용됩니다. 이는 개발 과정에서 컴포넌트의 소스를 파악하는 데 도움이 됩니다. 특히 다른 리소스 파일을 참조하거나 로드해야 할 때 파일 경로를 구축하는 데 `PATH` 속성을 사용할 수 있습니다.

아래의 예는 사용자 정의 컴포넌트에서 `PATH` 속성을 사용하는 방법을 보여줍니다.

```html
<my-comp id="myCustomComponent">
  <!-- 여기는 당신의 커스텀 컴포넌트의 내용입니다 -->
</my-comp>
<script>
  // 커스텀 컴포넌트의 파일 경로를 가져옵니다
  const componentPath = $("#myCustomComponent").PATH;

  // 여기에서 componentPath를 사용하여 파일 경로를 구성하고 다른 리소스 파일을 로드할 수 있습니다
</script>
```

이 예에서는 `id`가 "myCustomComponent"인 `my-comp` 요소를 선택하여, `PATH` 속성을 통해 해당 사용자 정의 구성 요소의 파일 경로를 가져왔습니다. 필요에 따라 스크립트 부분에서 `componentPath` 변수를 사용할 수 있으며, 예를 들어 다른 리소스 파일의 경로를 구축하거나 기타 작업에 사용할 수 있습니다.