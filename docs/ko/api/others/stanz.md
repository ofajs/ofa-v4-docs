# 실례 데이터 특징

`$`로 가져오거나 생성한 인스턴스 객체는 [stanz](https://github.com/kirakiray/stanz)의 데이터 특성을 완벽하게 가지고 있으며 `$` 인스턴스는 [stanz](https://github.com/kirakiray/stanz)에서 상속됩니다. 이는 `stanz`가 제공하는 데이터 조작 방법과 특성을 활용하여 인스턴스 객체의 데이터를 조작하고 모니터링할 수 있다는 것을 의미합니다.

> 아래는 일반 요소를 사용한 예제입니다. 일반적으로 사용자 정의 컴포넌트는 이미 등록된 데이터를 가지고 있기 때문에 일반 요소는 보통 태그 정보만 포함하고 있어서 데모에 더 적합합니다.

## watch

사례는 `watch` 메서드를 통해 값의 변경을 감시 할 수 있습니다. 객체의 하위 객체의 값을 변경하더라도 객체의 `watch` 메서드에서 변경 사항을 감지 할 수 있습니다.

아래는 `$` 인스턴스와 `watch` 메소드를 사용하는 방법을 보여주는 예제입니다.

<html-viewer>

```
<!-- ofa.js 프로젝트에 가져오기 -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div id="target"></div>
<br />
<div id="logger" style="border: #aaa solid 1px; padding: 8px"></div>

<script>
  const target = $("#target");
  $("#logger").text = target;
  target.watch(() => {
    $("#logger").text = target;
  });

  setTimeout(() => {
    target.aaa = "I am aaa";
  }, 600);
  setTimeout(() => {
    target.bbb = {
      child: {
        val: "I am bbb child val",
      },
    };
  }, 1200);
  setTimeout(() => {
    target.bbb.child.val = "change bbb child val";
  }, 1800);
</script>
```

</html-viewer>

이 예제에서는 먼저 `$` 인스턴스 객체 `target`을 생성한 다음 `watch` 메소드를 사용하여 해당 객체의 변경 사항을 감시합니다. 예를 들어 `target.bbb.child.val`의 값을 변경하더라도 `watch` 메소드에서 이러한 변경 사항을 감시하고 `logger` 요소의 내용을 업데이트합니다. 이는 `$` 인스턴스 객체의 강력한 기능을 보여주며 객체의 변경 사항을 쉽게 모니터링 할 수 있도록합니다.

## watchTick

`watchTick`와 `watch` 메서드는 기능적으로 유사하지만, `watchTick`은 내부적으로 스로틀링 작업을 수행하여 단일 스레드에서 한번 실행되므로, 일부 성능 요구사항이 더 높은 경우 데이터 변경을 더 효과적으로 감시할 수 있습니다.

아래는 `$` 인스턴스의 `watchTick` 메서드를 사용하는 방법을 보여주는 예제입니다.

<html-viewer>

```
<!-- ofa.js 프로젝트에 가져오기 -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div id="target"></div>
<br />
<div id="logger1" style="border: blue solid 1px; margin: 8px"></div>
<div id="logger2" style="border: red solid 1px; margin: 8px"></div>

<script>
  const target = $("#target");
  let count1 = 0;
  target.watch(() => {
    count1++;
    $("#logger1").text = 'watch 리스너가 실행된 횟수입니다:' + count1;
  });

  let count2 = 0;
  target.watchTick(()=>{
    count2++;
    $("#logger2").text = 'watchTick 리스너가 실행된 횟수입니다:' + count2;
  });

  setTimeout(() => {
    target.aaa = "I am aaa";
    target.bbb = "I am bbb";
    target.ccc = "I am ccc";
  }, 1000);
</script>
```

</html-viewer>

이 예제에서 우리는 먼저 `$` 인스턴스 객체 `target`을 생성합니다. 그런 다음 `watch` 메서드와 `watchTick` 메서드를 사용하여 객체의 변경 사항을 모니터링합니다. `watch` 메서드는 데이터가 변경될 때 즉시 실행되고, `watchTick` 메서드는 단일 스레드에서 한 번 실행되므로 모니터링 작업의 빈도를 제한할 수 있습니다. 데이터의 변경 사항을 모니터링하기 위해 `watch` 또는 `watchTick` 메서드를 선택할 수 있습니다.

## unwatch

`unwatch` 메서드는 데이터의 감시를 취소하는 데 사용됩니다. 이전에 등록된 `watch` 또는 `watchTick` 감시를 취소할 수 있습니다.

아래는 `$` 인스턴스의 `unwatch` 메서드를 사용하는 방법을 보여주는 예제입니다.

<html-viewer>

```
<!-- ofa.js 프로젝트에 가져오기 -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div id="target"></div>
<br />
<div id="logger1" style="border: blue solid 1px; margin: 8px"></div>
<div id="logger2" style="border: red solid 1px; margin: 8px"></div>

<script>
  const target = $("#target");
  const tid1 = target.watch(() => {
    $("#logger1").text = JSON.stringify(target);
  });

  const tid2 = target.watchTick(()=>{
    $("#logger2").text = JSON.stringify(target);
  });

  setTimeout(() => {
    target.aaa = "I am aaa";
    // 듣기 비활성화
    target.unwatch(tid1);
    target.unwatch(tid2);
  }, 500);
  setTimeout(() => {
    target.bbb = "I am aaa"; // 위에 등록된 기능은 비활성화되었으므로 트리거되지 않습니다.
  }, 1000);
</script>
```

</html-viewer>

이 예시에서는 먼저 `$` 인스턴스 오브젝트 `target`을 생성한 다음 `watch` 메소드와 `watchTick` 메소드를 사용하여 두 개의 리스너를 등록합니다. 그런 다음 `unwatch` 메소드를 사용하여 이전에 저장한 리스너 ID `tid1`과 `tid2`를 전달하여 이 두 개의 리스너를 해제합니다. 이는 첫 번째 `setTimeout`에서의 속성 변경이 리스너를 트리거하지 않음을 의미합니다. 왜냐하면 리스너가 해제되었기 때문입니다.

## 감시되지 않는 값

`$` 인스턴스에서는 `_`로 시작하는 속성 이름은 `watch` 또는 `watchTick` 메서드에 의해 감시되지 않을 것임을 나타냅니다. 일부 임시 또는 개인 속성에 대한 이러한 속성은 감시를 트리거하지 않고 자유롭게 변경할 수 있습니다.

아래는 어떻게 밑줄로 시작하는 속성 값을 사용하여 감시되지 않는지 보여주는 예제입니다.

<html-viewer>

```
<!-- ofa.js 프로젝트에 가져오기 -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div id="target"></div>
<br />
<div id="logger" style="border: #aaa solid 1px; padding: 8px"></div>

<script>
  const target = $("#target");
  $("#logger").text = target;

  // watch 메서드를 사용하여 속성 값 변경을 수신합니다.
  target.watch(() => {
    $("#logger").text = target;
  });

  setTimeout(() => {
    // 이 속성의 값은 리스너를 트리거하지 않습니다.
    target._aaa = "I am aaa";
  }, 600);

  setTimeout(() => {
    // _aaa 속성 값을 변경해도 리스너는 여전히 트리거되지 않습니다.
    target._aaa = "change aaa";
  }, 1200);
</script>
```

</html-viewer>

이 예제에서는 `$` 인스턴스 객체 `target`을 만들고, `watch` 메소드를 사용하여 속성 값의 변경을 감시합니다. `setTimeout` 내에서 `_aaa` 속성 값을 변경하려고 시도하지만, 이 변경은 감시를 트리거하지 않습니다. 이는 감시를 트리거하지 않고 속성 값을 업데이트해야하는 경우에 매우 유용합니다.

## 기본 기능

인스턴스에 설정된 객체 데이터는 Stanz 인스턴스로 변환되며, 이러한 Stanz 인스턴스는 감지 할 수 있습니다.

```javascript
const obj = {
  val: "I am obj"
};

$("#target").obj = obj;
console.log($("#target").obj.val === obj.val); // => true
console.log($("#target").obj === obj); // => false
```

우리는 `$.stanz`를 사용하여 인스턴스에 바인딩되지 않은 Stanz 데이터를 생성할 수도 있습니다.

```javascript
const data = $.stanz({
  val: "I am val"
});

data.watch(() => {
  console.log(data.val); // => change val
});

data.val = "change val";
```

이 예제는 객체 데이터를 Stanz 인스턴스로 설정하여 듣기 위한 기본적인 특징을 보여줍니다.

자세한 기능은 [stanz] (https://github.com/kirakiray/stanz)을 참조하십시오.