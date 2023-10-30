# インスタンスデータの特徴

`$` を通じて取得または作成されたインスタンスオブジェクトは、完全な [stanz](https://github.com/kirakiray/stanz) のデータ特性を持っています。なぜなら、`$` インスタンスは [stanz](https://github.com/kirakiray/stanz) から継承されているからです。つまり、`stanz` が提供するデータ操作方や特性を利用して、インスタンスオブジェクトのデータを操作したり監視したりすることができます。

> 以下の例は、一般的な要素を使用しています。これは、カスタムコンポーネントが通常既に登録されたデータを持っているため、一般的な要素は通常タグ情報のみを含んでいるため、デモにはより適しています。

## watch

実例は、`watch`メソッドを使用して値の変更を監視できます。オブジェクトの子オブジェクトの値を変更しても、オブジェクトの`watch`メソッドで変更を監視できます。

以下は、`$` インスタンスと `watch` メソッドの使用方法をデモンストレーションする例です。

<html-viewer>

```
<!-- ofa.js プロジェクトにインポートする -->
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

この例では、まず`$`インスタンスオブジェクト`target`を作成し、`watch`メソッドを使用してその変更を監視します。オブジェクトのサブオブジェクトの値（`target.bbb.child.val`など）を変更しても、`watch`メソッドはこれらの変更を検知し、`logger`要素の内容を更新します。これより、`$`インスタンスオブジェクトがオブジェクトの変更を簡単に監視できる強力な機能を示しています。

## watchTick

`watchTick` と `watch` メソッドは機能が似ていますが、`watchTick` の内部にはスロットル処理があり、単一のスレッドで一度だけ実行されるため、一部のパフォーマンス要件の高いシーンでデータの変更をより効率的に監視することができます。

以下は、`$` インスタンスの `watchTick` メソッドの使い方の例である：

<html-viewer>

```
<!-- ofa.js プロジェクトにインポートする -->
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
    $("#logger1").text = 'watch の走行回数：' + count1;
  });

  let count2 = 0;
  target.watchTick(()=>{
    count2++;
    $("#logger2").text = 'watchTick の走行回数：' + count2;
  });

  setTimeout(() => {
    target.aaa = "I am aaa";
    target.bbb = "I am bbb";
    target.ccc = "I am ccc";
  }, 1000);
</script>
```

</html-viewer>

この例では、まず `$` インスタンスオブジェクト `target` を作成します。次に、`watch` メソッドと `watchTick` メソッドを使用してオブジェクトの変更を監視します。`watch` メソッドはデータの変更があるたびに即座に実行され、`watchTick` メソッドは単一スレッドで一度だけ実行されるため、監視操作の頻度を制限することができます。データの変化を監視するために `watch` メソッドまたは `watchTick` メソッドを選択することができます。

## unwatch

`unwatch` メソッドは、データの監視をキャンセルするために使用され、以前に登録された `watch` または `watchTick` のリスナーを取り消すことができます。

下記は、`$` の `unwatch` メソッドを使用する方法の例です：

<html-viewer>

```
<!-- ofa.js プロジェクトにインポートする -->
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
    // 監視を取り消す
    target.unwatch(tid1);
    target.unwatch(tid2);
  }, 500);
  setTimeout(() => {
    target.bbb = "I am aaa"; // 上記で登録した関数は実行されない、監視が取り消されているため
  }, 1000);
</script>
```

</html-viewer>

この例では、まず `$` インスタンスオブジェクト `target` を作成し、`watch` メソッドと `watchTick` メソッドを使用して2つのリスナーを登録します。その後、`unwatch` メソッドを使用して以前保存したリスナーの戻り値 `tid1` と `tid2` を渡すことで、これらのリスナーを取り消しす。これにより、最初の `setTimeout` 内のプロパティの変更は、リスナーが取り消されているためにトリガーされません。

## 監視されない値

インスタンスでは、アンダースコア `_` で始まるプロパティ名は、その値が `watch` メソッドや `watchTick` メソッドによってリッスンされないことを示す。 これは、一時的なプロパティやプライベートなプロパティで、リスナーをトリガーすることなく自由に変更できる場合に便利です。

以下は、下線で始まる属性値を使用して盗聴を回避する方法を示す例です。

<html-viewer>

```
<!-- ofa.js プロジェクトにインポートする -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div id="target"></div>
<br />
<div id="logger" style="border: #aaa solid 1px; padding: 8px"></div>

<script>
  const target = $("#target");
  $("#logger").text = target;

  // ウォッチ・メソッドを使用して、プロパティ値の変更をリッスンする
  target.watch(() => {
    $("#logger").text = target;
  });

  setTimeout(() => {
    // この属性値は盗聴のトリガーにはならない。
    target._aaa = "I am aaa";
  }, 600);

  setTimeout(() => {
    // _aaa属性の値が変更されても、リスニングはトリガーされない。
    target._aaa = "change aaa";
  }, 1200);
</script>
```

</html-viewer>

この例では、`$` インスタンスオブジェクト `target` を作成し、`watch` メソッドを使用してプロパティの値の変更を監視します。`setTimeout` の中で、`_aaa` プロパティの値を変更しようとしますが、この変更は監視をトリガーしません。これは、監視をトリガーせずにプロパテの値を更新する必要がある場合に非常に便利です。

## 基本特徴

インスタンスに設定されたオブジェクトデータは、Stanzインスタンスに変換され、このStanzインスタンスを監視できるようになります。

```javascript
const obj = {
  val: "I am obj"
};

$("#target").obj = obj;
console.log($("#target").obj.val === obj.val); // => true
console.log($("#target").obj === obj); // => false
```

私たちは`$.stanz`を使って、インスタンスにバインドされていないStanzデータを作成することもできます。

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

詳細な機能については、[stanz](https://github.com/kirakiray/stanz)を参照してください。