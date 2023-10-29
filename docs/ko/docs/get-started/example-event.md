# 이벤트 예시

## 클릭 이벤트 (click)

버튼을 클릭하면 콘솔에 메시지가 출력됩니다.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Example of a click event</title>
    <script src="../ofa.js"></script>
  </head>
  <body>
    <button id="btn">Open the console and click on me</button>
    <script>
      $("#btn").on("click", () => {
        console.log("The button was clicked!");
      });
    </script>
  </body>
</html>
```


## 마우스 이벤트 (mouseenter)

문서 영역에 마우스를 가져가면 텍스트의 색상이 빨강으로 변경됩니다.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Mouseover event example</title>
    <script src="../ofa.js"></script>
    <style>
      #text-area {
        font-size: 18px;
        color: black;
      }
    </style>
  </head>
  <body>
    <div id="text-area">Hover over here.</div>
    <script>
      $("#text-area").on("mouseenter", () => {
        $("#text-area").css.color = 'red';
      });

      $("#text-area").on("mouseleave", () => {
        $("#text-area").css.color = 'black';
      });
    </script>
  </body>
</html>
```


## 키보드 키 이벤트 (keydown)

이 경우에는 어떤 키를 누르면 입력 상자 내에서 해당 키에 대한 정보가 콘솔에 출력됩니다.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>keydown</title>
    <script src="../ofa.js"></script>
  </head>
  <body>
    <h3>Viewing printouts after opening the console</h3>
    <input type="text" id="input-box" placeholder="Press any key" />
    <script>
      $("#input-box").on("keydown", (event) => {
        console.log("keydown:", event.key);
      });
    </script>
  </body>
</html>
```

이 예제들은 각각의 클릭 이벤트, 마우스 호버 이벤트, 키보드 이벤트를 보여줍니다. 이 코드들을 HTML 파일에 복사하고 브라우저에서 실행하여 효과를 확인해 볼 수 있습니다.

모든 사용 가능한 이벤트는 [Web Events](https://developer.mozilla.org/en-US/docs/Web/Events)에서 전체 이벤트 목록을 확인할 수 있습니다.