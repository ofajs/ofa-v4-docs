# 일반적으로 사용되는 속성 또는 메소드

이 `%` 인스턴스에서는 요소를 선택하는 선택자 외에도, 요소의 조작과 찾기를 도와주는 일부 일반적인 기능이 제공됩니다.

조금만 살펴봐주세요. 필요할 때 언제든 API 문서를 참고하실 수 있습니다.

## 열에 대한 자주 사용하는 속성

- [tag](../../api/others/tag.md): 대상의 태그 이름 가져오기
- [ele](../../api/instance/ele.md): 인스턴스의 실제 원시 요소 가져오기
- [index](../../api/others/index.md): 대상 요소가 부모 요소 내에서의 순서 가져오기
- [text](../../api/props/text.md): 대상 요소의 텍스트 가져오기 또는 설정하기
- [html](../../api/props/html.md): 대상 요소의 HTML 코드 가져오기 또는 설정하기
- [css](../../api/props/css.md): 대상 요소의 스타일 가져오기 또는 설정하기
- [style](../../api/props/style.md): 대상 요소의 원시 스타일 가져오기
- [classList](../../api/props/class-list.md): 대상 요소의 원시 class 목록 가져오기
- [data](../../api/props/data.md): 대상 요소의 원시 데이터 집합 가져오기

### 노드 조작

- [before](../../api/operation/before.md)：대상 인스턴스의 앞에 요소 추가
- [after](../../api/operation/after.md)：대상 인스턴스의 뒤에 요소 추가
- [remove](../../api/operation/remove.md)：대상 요소 삭제
- [attr](../../api/props/attr.md)：대상 요소의 [attributes](https://developer.mozilla.org/en-US/docs/Web/API/Element/attributes)를 가져오거나 설정

## 중요한 기능

- [폼 데이터](../../api/others/form-data.md): 폼 데이터를 손쉽게 바인딩하고 가져오는 기능

만약 ofa.js의 api에 대해 더 자세히 알고 싶다면, [API](../../api/index.md) 문서를 참조할 수 있습니다.