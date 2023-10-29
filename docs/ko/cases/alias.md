# alias

별명을 설정함으로써 사용자는 공유 리소스를 더 편리하게 사용할 수 있으며, 특히 도메인 간 공유 컴포넌트가 동일한 버전의 리소스를 쉽게 공유할 수 있게됩니다.

이 예시에서는 `lm.config` 메서드를 사용하여 `@obook` 별칭을 `https://cdn.jsdelivr.net/npm/obook`로 매핑했습니다. 이제 `@obook`을 접두사로 사용하면 지정한 URL로 자동으로 매핑됩니다.

<html-viewer>

```
<!-- ofa.js 프로젝트에 가져오기 -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<script>
  lm.config({
    alias: {
      "@obook": "https://cdn.jsdelivr.net/npm/obook",
    },
  });
</script>

<l-m src="@obook/blocks/simp-block.html"></l-m>
<simp-block>
  <h2>Test Title</h2>
  <h3>Test h3 desc</h3>
</simp-block>
```

</html-viewer>

같은 도메인의 컴포넌트가 자세한 리소스 주소를 알 필요 없이 공유 리소스에 더 쉽게 액세스 할 수 있도록 @obook 별명을 사용하여 "https://cdn.jsdelivr.net/npm/obook/blocks/simp-block.html" 리소스를 l-m 태그에 도입했습니다. 이는 코드의 유지 관리성과 도메인 간 리소스 공유의 편리함을 향상시킵니다.

주의 사항

이름을 설정할 때, 다음 사항에 유의해주세요.

- 별명의 키는 반드시 `@`로 시작해야 합니다. 예를 들면 `@example`입니다.

```javascript
lm.config({
  alias: {
    // "example": "https://example.com/resource", ❌ @으로 시작하지 않음
    "@example": "https://example.com/resource",
  },
});
```

- 같은 이름의 별명을 중복으로 설정하지 마십시오. 그렇지 않으면 오류가 발생합니다.

lm.config({
  alias: {
    "@namex": "https://example.com/resource",
  },
});

// ...

lm.config({
  alias: {
    "@namex": "https://example.com/other-resource", // 오류, 중복된 별칭
  },
});