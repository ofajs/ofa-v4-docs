# jQuery와 함께 사용하기

만약에 이번에 oca.js(≥4.3.40)를 사용한다면, 동시에 jQuery와 함께 사용할 수 있습니다. 주로 두 가지 선택지를 가집니다:

## 1. 사용 `noConflict`

jQuery를 가져온 후에 [noConflict](https://api.jquery.com/jQuery.noConflict/) 메소드를 호출하여 `$` 변수를 해제하여 충돌을 피할 수 있습니다.

```html
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
<script src="https://code.jquery.com/jquery-3.7.1.js"></script>
<script>
  $.noConflict();
  // 이제 jQuery.ajax()와 같은 전체 이름을 사용하여 jQuery를 호출할 수 있습니다.
</script>
```

## 2. 라이브러리를 순서대로 가져오기

다른 방법은 라이브러리를 순차적으로 가져오는 것이며, 더 늦게 가져온 라이브러리는 `$` 변수를 사용할 수 있습니다. 이 경우 전역 변수 `ofa`를 사용하여 원래의 `$`를 대체할 수 있습니다.

```html
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
<script src="https://code.jquery.com/jquery-3.7.1.js"></script>
<!-- 이제 $는 jQuery의 별칭입니다. $ 대신 ofa를 사용하여 ofa.js 관련 함수를 호출할 수 있습니다. -->
```

ofa.js와 jQuery가 충돌하지 않고 동일한 페이지에서 함께 사용될 수 있도록 하려면 이 두 가지 방법 중 하나를 사용할 수 있습니다.