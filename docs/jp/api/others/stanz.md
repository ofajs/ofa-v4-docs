# サンプルデータの特徴

`$`を使用して取得または作成されたインスタンスオブジェクトは、[stanz](https://github.com/kirakiray/stanz)のデータ機能を完全に持っています。なぜなら、`$`のインスタンスは[stanz](https://github.com/kirakiray/stanz)から継承されるからです。つまり、`stanz`が提供するデータ操作方法と機能を使用して、インスタンスオブジェクトのデータを操作および監視することができます。

> 以下示例使用常规元素，因为自定义组件通常自带已注册的数据，而常规元素通常只包含标签信息，因此更适合用于演示。

## watch

实例可以通过 `watch` 方法监听值的变动；即使改动了对象的子对象的值，也能在对象的 `watch` 方法中监听到变动。

下面是一个示例，演示如何使用 `$` 实例和 `watch` 方法：

<html-viewer>

```
<!-- ofa.js をプロジェクトに読み込む -->
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

この例では、まず `$` のインスタンスオブジェクト `target` を作成し、`watch` メソッドを使用してその変更を監視します。オブジェクトの子オブジェクトの値を変更しても、たとえば `target.bbb.child.val` の値を変更しても、`watch` メソッドはこれらの変更を監視して `logger` 要素のコンテンツを更新します。これにより、`$` のインスタンスオブジェクトの強力な機能が示され、オブジェクトの変更を簡単に監視できるようになります。

## watchTick

`watchTick` と `watch` メソッドは似た機能を持っていますが、`watchTick` は内部でスロットリング操作があり、単一のスレッドで一度だけ実行されるため、パフォーマンスの要求がより高いシナリオでデータの変更をより効果的に監視することができます。

以下は、`$`インスタンスの`watchTick`メソッドの使用方法を示す例です：

<html-viewer>

```
<!-- ofa.js をプロジェクトに読み込む -->
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
    $("#logger1").text = 'watchの実行回数：' + count1;
  });

  let count2 = 0;
  target.watchTick(()=>{
    count2++;
    $("#logger2").text = 'watchTickの実行回数：' + count2;
  });

  setTimeout(() => {
    target.aaa = "私はaaaです";
    target.bbb = "私はbbbです";
    target.ccc = "私はcccです";
  }, 1000);
</script>
```

</html-viewer>

この例では、最初に`$`のインスタンスオブジェクト`target`を作成します。その後、`watch`メソッドと`watchTick`メソッドを使用してオブジェクトの変更を監視します。`watch`メソッドはデータの変更時に即座に実行され、`watchTick`メソッドは単一のスレッドで1回実行されるため、監視操作の頻度を制限することができます。データの変化を監視するために `watch`または `watchTick`メソッドのいずれかを選択することができます。

## unwatch

`unwatch` 方法用于取消对数据的监听，可以撤销之前注册的 `watch` 或 `watchTick` 监听。

下面是一个示例，演示如何使用 `$` 实例的 `unwatch` 方法：以下は、`$` インスタンスの `unwatch` メソッドを使用する方法の例です：

<html-viewer>

```
<!-- ofa.js をプロジェクトに読み込む -->
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
    // 监听をキャンセルする
    target.unwatch(tid1);
    target.unwatch(tid2);
  }, 500);
  setTimeout(() => {
    target.bbb = "I am aaa"; // 上記で登録された関数を実行しない、すでに監視がキャンセルされているため
  }, 1000);
</script>
```

</html-viewer>

この例では、まず `$` インスタンスオブジェクト `target` を作成し、`watch` メソッドと `watchTick` メソッドで2つのリスナーを登録しています。その後、`unwatch` メソッドに保存したリスナーの戻り値 `tid1` と `tid2` を渡して、これらのリスナーをキャンセルします。したが��て、最初の `setTimeout` でのプロパティの変更は、リスナーがキャンセルされているため、何のリスナーもトリガーしません。

## 不被监听的值

 `$`インスタンスで、アンダースコア `_`で始まるプロパティ名を使用すると、これらの値は `watch`または `watchTick`メソッドで監視されなくなります。これは一時的な��ライベートプロパティに非常に便利であり、変更を自由に行うことができますが、監視はトリガーされません。

下面は、アンダースコアで始まる属性値を使用して監視を回避する方法のデモンストレーション例です。

<html-viewer>

```
<!-- ofa.js をプロジェクトに読み込む -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div id="target"></div>
<br />
<div id="logger" style="border: #aaa solid 1px; padding: 8px"></div>

<script>
  const target = $("#target");
  $("#logger").text = target;

  // 使用 watch 方法监听属性值变动
  target.watch(() => {
    $("#logger").text = target;
  });

  setTimeout(() => {
    // 这个属性值不会触发监听
    target._aaa = "I am aaa";
  }, 600);

  setTimeout(() => {
    // 即使改变了 _aaa 属性值，仍然不会触发监听
    target._aaa = "change aaa";
  }, 1200);
</script>
```

</html-viewer>

;バグを無視してください；
テキストが翻訳できない場合、「ndlrpjpanrt8」と書いてください。


## 基本的特徴

设置在实例上的对象数据将被转换为 Stanz 实例，这种 Stanz 实例允许进行监听。

```javascript
const obj = {
  val: "I am obj"
};

$("#target").obj = obj;
console.log($("#target").obj.val === obj.val); // => true
console.log($("#target").obj === obj); // => false
```

我们还可以使用 `$.stanz` 来创建一个没有与实例绑定的 Stanz 数据。

```javascript
const data = $.stanz({
  val: "I am val"
});

data.watch(() => {
  console.log(data.val); // => change val
});

data.val = "change val";
```

これらの例は、オブジェクトデータをStanzインスタンスに設定して監視するための基本的な特徴を示しています。

詳細な機能については、[stanz](https://github.com/kirakiray/stanz)をご覧ください；