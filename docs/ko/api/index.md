# API 소개

ofa.js API 개요입니다. 필요할 때 자세한 문서를 찾아 보기 위해 먼저 살펴보세요.

## 인스턴스 관련

- [$](./instance/dollar.md)：인스턴스를 가져오는 주요 메소드
- [all](./instance/all.md)：모든 관련 인스턴스를 가져옴
- [prev](./instance/prev.md)：대상 요소의 이전 인스턴스를 가져옴
- [prevs](./instance/prevs.md)：대상 요소 앞에 있는 모든 인스턴스를 가져옴
- [next](./instance/next.md)：대상 요소의 다음 인턴스를 가져옴
- [nexts](./instance/nexts.md)：대상 요소 뒤에 있는 모든 인스턴스를 가져옴
- [siblings](./instance/siblings.md)：대상 요소의 모든 인접 요소 인스턴스를 가져옴
- [parent](./instance/parent.md)：부모 요소 인스턴스를 가져옴
- [parents](./instance/parents.md)：모든 부모 요소의 인스턴스 집합을 가져옴
- [clone](./instance/clone.md)：인스턴스를 복제하는 메소드
- [ele](./instance/ele.md)：인스턴스의 실제 기본 요소를 가져옴
- [shadow](./instance/shadow.md)：사용자 정의 컴포넌트의 그림자 루트 노드를 가져옴
- [root](./instance/root.md)：대상 인스턴스의 루트 노드를 가져옴
- [자식 요소](./instance/children.md)：숫자를 통해 직접 자식 요소를 가져옴
- [host](./instance/host.md)：대상의 앱 요소 인스턴스를 가져옴

## 노드 조작

- [추가 또는 삭제 child 노드](./operation/array-like.md)
- [before](./operation/before.md)：대상 인스턴스의 앞에 요소 추가
- [after](./operation/after.md)：대상 인스턴스의 뒤에 요소 추가
- [remove](./operation/remove.md)：대상 요소 삭제
- [wrap](./operation/wrap.md)：대상 요소 위에 레이어 추가
- [unwrap](./operation/unwrap.md)：대상 요소에 대한 레이어 제거

## 속성 조작

- [text](./props/text.md)：대상 요소의 텍스트를 가져오거나 설정합니다.
- [html](./props/html.md)：대상 요소의 HTML 코드를 가져오거나 설정합니다.
- [attr](./props/attr.md)：대상 요소의 [속성(attributes)](https://developer.mozilla.org/en-US/docs/Web/API/Element/attributes)을 가져오거나 설정합니다.
- [css](./props/css.md)대상 요소의 스타일을 가져오거나 설정합니다.
- [style](./props/style.md)：대상 요소의 기본 스타일을 가져옵니다.
- [classList](./props/class-list.md)：대상 요소의 기본 class 목록을 가져옵니다.
- [data](./props/data.md)：대상 요소의 기본 데이터 집합을 가져옵니다.

## 이벤트 관련

- [on](./event/on.md): 이벤트를 대상 요소에 바인딩합니다.
- [one](./event/one.md): 대상 요소에 일회성 이벤트를 바인딩합니다.
- [emit](./event/emit.md): 이벤트를 강제로 발생시킵니다.
- [off](./event/off.md): 바인딩된 이벤트를 해제합니다.

## 템플릿 문법

- [텍스트 렌더링](./temp-syntax/text-render.md)：템플릿 파일에서 텍스트를 빠르게 렌더링합니다.
- [class](./temp-syntax/class.md)：템플릿 파일에서 클래스 이름을 빠르게 렌더링합니다.
- [sync](./temp-syntax/sync.md)：템플릿 파일로 데이터를 빠르게 동기화합니다.
- [조건부 렌더링](./temp-syntax/condition.md)템플릿 파일에서 필요에 따라 내용을 렌더링합니다.
- [리스트 렌더링](./temp-syntax/fill.md)：템플릿 파일에서 배열 데이터를 빠르게 렌더링합니다.

## 수명 주기
- [created](./life-cycle/created.md)：컴포넌트가 생성되지만 내용이 렌더링되기 전에 발생합니다.
- [ready](./life-cycle/ready.md)：컴포넌트가 생성되고 내용이 렌더링된 후에 발생합니다.
- [watch](./life-cycle/watch.md)：컴포넌트가 초기화되고 값이 변경된 후에 발생합니다.
- [loaded](./life-cycle/loaded.md)：컴포넌트에 포함된 리소스가 로드된 후에 발생합니다.
- [attached](./life-cycle/attached.md)：컴포넌트가 문서에 추가된 후에 발생합니다.
- [detached](./life-cycle/detached.md)：컴포넌트가 문서에서 제거된 후에 발생합니다.
- [routerChange](./life-cycle/router-change.md)：중첩된 부모 페이지가 애플리케이션 라우팅이 변경될 때 발생합니다.

## 기타

- [박스 모델](./others/box.md) : 대상 요소의 모든 크기 관련 데이터를 가져옴
- [formData](./others/form-data.md) : 폼 데이터를 편리하게 바인딩하고 가져옴
- [tag](./others/tag.md) : 대상의 태그 이름을 가져옴
- [index](./others/index.md) : 대상 요소가 부모 요소 내에서의 순서를 가져옴
- [is](./others/is.md) : 대상 요소가 CSS 선택자 표현식과 일치하는지 판단
- [refresh](./others/refresh.md) : 구성 요소의 인터페이스를 수동으로 새로 고침
- [PATH](./others/path.md) : 구성 요소 또는 페이지의 등록 파일 주소를 가져옴
- [extend](./others/extend.md) : 인스턴스 데이터 또는 메서드를 확장; ofa.js의 하위 데이터 또는 메서드를 확장
- [인스턴스 데이터 특성](./others/stanz.md) : 인스턴스 데이터의 하위 객체 데이터 특성을 소개하고 데이터의 변경을 어떻게 감시할지 설명함