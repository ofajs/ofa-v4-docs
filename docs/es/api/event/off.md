# off

使用 `off` 方法可以注销已注册的事件处理程序，以取消对事件的监听。

A continuación se muestra un ejemplo que demuestra cómo usar el método `off` para cancelar la escucha de eventos:

<html-viewer>

```
<!-- Importe ofa.js en su proyecto -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<button id="target">add count</button>
<br>
<br>
<div id="logger" style="border:red solid 1px;padding:8px;">-</div>

<script>
    let count = 0;
    const f = ()=> {
        $("#logger").text = count++;
        if(count === 3){
            $("#target").off("click", f);
        }
    }
    $("#target").on("click", f);
</script>
```

</html-viewer>

En este ejemplo, hemos registrado un controlador de eventos de clic llamado `f`. Cuando se hace clic en el botón, el controlador de eventos muestra el número de clics en `#logger`. Usando el método `off`, cancelamos la escucha del evento cuando el número de clics alcanza 3.