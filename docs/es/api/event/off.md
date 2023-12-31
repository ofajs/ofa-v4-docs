# off

El método `off` te permite desregistrar los controladores de eventos registrados para dejar de escuchar eventos.

A continuación se muestra un ejemplo que demuestra cómo usar el método `off` para cancelar la escucha de eventos:

<html-viewer>

```
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.40/dist/ofa.min.js"></script>
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