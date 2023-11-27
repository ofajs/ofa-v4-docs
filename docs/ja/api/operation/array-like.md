# 子要素の追加または削除

元素のインスタンスは配列のような特性を持っており、ノードの追加や削除は配列の操作メソッドを使用するだけで行うことができます。`push`、`unshift`、`pop`、`shift`、`splice`メソッドを使用する場合、内部で[$メソッド](../instance/dollar.md)の初期化操作が自動的に実行されまので、具体的な要素の文字列やオブジェクトを直接記入することができます。

それと同様に、`forEach`、`map`、`some`など、他の配列メソッドも使用できます。

注意してください。「テンプレート構文がある要素で、子要素を追加または削除しないでください。」

## push

要素の末尾に子要素を追加します。

<html-viewer>

```
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.40/dist/ofa.min.js"></script>
```

```html
<ul>
    <li>I am 1</li>
    <li>I am 2</li>
    <li>I am 3</li>
</ul>

<script>
    setTimeout(()=>{
        $("ul").push(`<li style="color:red;">new li</li>`);
    }, 500);
</script>
```

</html-viewer>

## unshift

配列の先頭に子要素を追加します。以下は例です：

<html-viewer>

```
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.40/dist/ofa.min.js"></script>
```

```html
<ul>
    <li>I am 1</li>
    <li>I am 2</li>
    <li>I am 3</li>
</ul>

<script>
    setTimeout(()=>{
        $("ul").unshift(`<li style="color:blue;">new li</li>`);
    }, 500);
</script>
```

</html-viewer>

## pop

リストから要素を削除します。

<html-viewer>

```
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.40/dist/ofa.min.js"></script>
```

```html
<ul>
    <li>I am 1</li>
    <li>I am 2</li>
    <li>I am 3</li>
</ul>

<script>
    setTimeout(()=>{
        $("ul").pop();
    }, 500);
</script>
```

</html-viewer>

## shift

配列の先頭からサブ要素を削除します。

<html-viewer>

```
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.40/dist/ofa.min.js"></script>
```

```html
<ul>
    <li>I am 1</li>
    <li>I am 2</li>
    <li>I am 3</li>
</ul>

<script>
    setTimeout(()=>{
        $("ul").shift();
    }, 500);
</script>
```

</html-viewer>

## splice

子要素を削除または置換することもできますし、新しい子要素を追加することもできます。これは配列の `splice` メソッドと似たような方法で使用されます。以下は例です。

<html-viewer>

```
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.40/dist/ofa.min.js"></script>
```

```html
<ul>
    <li>I am 1</li>
    <li>I am 2</li>
    <li>I am 3</li>
</ul>

<script>
    setTimeout(()=>{
$("ul").splice(1, 2, `<li style="color:green;">new li 1</li>`, `<li style="color:green;">new li 2</li>`);
    }, 500);
</script>
```

</html-viewer>