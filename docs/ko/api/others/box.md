박스 모델

웹 개발에서 요소의 크기는 중요한 개념이며, 내용 영역, 안쪽 여백, 테두리 및 바깥 여백을 포함합니다. 다음은 요소 크기를 나타내는 관련 속성입니다.

## width

`width`는 요소의 콘텐츠 영역의 너비를 나타내며, 패딩, 테두리 및 마진은 포함하지 않습니다.

## height

`height`는 요소의 콘텐츠 영역의 높이를 나타내며, 패딩, 테두리 및 마진은 포함하지 않습니다.

## clientWidth

`clientWidth`는 내부 여백을 포함하지만 테두리와 바깥 여백은 포함하지 않는 요소의 가시적인 내용 영역의 너비를 나타냅니다.

## clientHeight

clientHeight는 엘리먼트의 보이는 콘텐츠 영역의 높이를 나타내며, 패딩을 포함하지만 테두리와 마진은 포함하지 않습니다.

## offsetWidth

`offsetWidth`는 요소의 전체 너비를 나타내며 내용 영역, 안쪽 여백, 테두리 및 바깥 여백을 포함합니다.

## offsetHeight

`offsetHeight`는 요소의 전체 높이를 나타내며, 내용 영역, 패딩, 테두리 및 마진을 포함합니다.

## outerWidth

`outerWidth`는 요소의 전체 너비를 나타내며, 콘텐츠 영역을 포함합니다.

<html-viewer>

```
<!-- ofa.js 프로젝트에 가져오기 -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<style>
    #box {
      width: 150px;
      height: 100px;
      background-color: #f0f0f0;
      border: 2px solid #333;
      padding: 20px;
      margin: 30px;
    }
</style>
<div id="box">I am a div element.</div>

<div id="logger"></div>
<script>
    const box = $('#box');

    $("#logger").html = `
    width: ${box.width}px <br>
    height: ${box.height}px <br>
    clientWidth: ${box.clientWidth}px <br>
    clientHeight: ${box.clientHeight}px <br>
    offsetWidth: ${box.offsetWidth}px <br>
    offsetHeight: ${box.offsetHeight}px <br>
    outerWidth: ${box.outerWidth}px <br>
    outerHeight: ${box.outerHeight}px
    `;
</script>
```

</html-viewer>