# Ejemplo de evento

## Evento de clic (click)

En este ejemplo, cuando se hace clic en el botón, se mostrará un mensaje en la consola.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ejemplo de evento de clic</title>
    <script src="../ofa.js"></script>
  </head>
  <body>
    <button id="btn">Abre la consola y haz clic en mí</button>
    <script>
      $("#btn").on("click", () => {
        console.log("¡Se hizo clic en el botón!");
      });
    </script>
  </body>
</html>
```

## Evento de pasar el cursor sobre (mouseenter)

En este ejemplo, cuando se pasa el cursor sobre el área de texto, el color del texto cambia a rojo.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ejemplo de evento de pasar el cursor sobre</title>
    <script src="../ofa.js"></script>
    <style>
      #text-area {
        font-size: 18px;
        color: black;
      }
    </style>
  </head>
  <body>
    <div id="text-area">Pasa el cursor aquí.</div>
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

## Evento de pulsación de tecla (keydown)

En este ejemplo, cuando se presiona cualquier tecla dentro de un cuadro de texto, se mostrará la información de la tecla pulsada en la consola.

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
    <h3>Viendo las impresiones después de abrir la consola</h3>
    <input type="text" id="input-box" placeholder="Presiona cualquier tecla" />
    <script>
      $("#input-box").on("keydown", (event) => {
        console.log("keydown:", event.key);
      });
    </script>
  </body>
</html>
```

Estos ejemplos muestran cómo usar eventos de clic, eventos de movimiento del mouse y eventos de pulsación de teclas. Puedes copiar este código a un archivo HTML y ejecutarlo en tu navegador para ver los efectos.

Todos los eventos disponibles se pueden encontrar en [Web Events](https://developer.mozilla.org/en-US/docs/Web/Events) para obtener la lista completa de eventos.

