<div align="center">

# ⚡ Zentrix

### Un experimento de lenguaje inspirado en JavaScript

**HECHO POR CHATGPT — NO ES UN PROYECTO OFICIAL DEL CREADOR DE ZENIT.**

![Experimental](https://img.shields.io/badge/estado-experimental-orange)
![Version](https://img.shields.io/badge/version-0.1.0--experimental-blue)
![MIT](https://img.shields.io/badge/licencia-MIT-green)

</div>

---

## ⚠️ Aviso importante: experimento, no proyecto oficial

**Zentrix es un experimento generado por ChatGPT. No es oficial, no representa al creador oficial de Zenit y no debe interpretarse como una crítica a esa persona ni a su trabajo.**

> **Por favor, no utilicen este repositorio para atacar, comparar de forma maliciosa ni criticar al creador oficial de Zenit.** Este proyecto existe únicamente como experimento técnico y educativo. La inspiración en Zenit no implica afiliación, aprobación ni autoría compartida.

Zentrix no es una versión oficial de Zenit ni pretende reemplazarlo. Su código inicial fue escrito por ChatGPT a petición del usuario que solicitó este experimento.

## 🧪 ¿Qué es Zentrix?

Zentrix es una pequeña capa experimental inspirada en JavaScript. Permite escribir JavaScript normal y probar algunos alias en español, como `imprimir`, `funcion`, `si`, `sino` y `retornar`.

No es todavía un lenguaje de propósito general ni un compilador independiente. En esta versión, el código se transforma mediante sustituciones sencillas y se ejecuta como JavaScript.

## 🚀 Inicio rápido

Descarga `zentrix.js` y crea un archivo HTML:

```html
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Mi experimento Zentrix</title>
  <script src="./zentrix.js"></script>
</head>
<body>
  <script>
    Zentrix.ejecutar(`
      var nombre = "Zentrix";
      imprimir("Hola desde " + nombre);

      si (2 > 1) {
        imprimir("¡Funciona!");
      } sino {
        imprimir("Esto no debería mostrarse.");
      }
    `);
  </script>
</body>
</html>
```

Para traducir sin ejecutar:

```javascript
const codigoJS = Zentrix.traducir('imprimir("Hola");');
console.log(codigoJS);
```

## 📚 Palabras disponibles

| Zentrix | JavaScript |
|---|---|
| `imprimir(...)` | `console.log(...)` |
| `funcion nombre(...)` | `function nombre(...)` |
| `si (...)` | `if (...)` |
| `sino { ... }` | `else { ... }` |
| `mientras (...)` | `while (...)` |
| `retornar` | `return` |
| `verdadero` | `true` |
| `falso` | `false` |
| `nulo` | `null` |

También puedes usar `let`, `const`, `var`, funciones flecha, objetos, arreglos y otras características compatibles con JavaScript.

## ⚠️ Limitaciones

- **Experimental:** versión `0.1.0-experimental`.
- **Traducción sencilla:** los alias se reemplazan mediante expresiones regulares; no existe un parser propio y puede fallar con comentarios, cadenas o código complejo.
- **No es un sandbox:** `Zentrix.ejecutar()` usa `new Function`. Ejecuta solo código de confianza; nunca lo uses para código de terceros o no confiable.
- **No es independiente:** necesita un entorno JavaScript, como un navegador moderno o Node.js.
- **No es oficial:** no está afiliado al creador original de Zenit.

## 🗺️ Posibles ideas futuras

- Crear un parser real.
- Mejorar los mensajes de error.
- Añadir pruebas automatizadas.
- Definir y documentar una sintaxis propia.

Estas ideas no son promesas de desarrollo.

## 📄 Licencia

Zentrix se distribuye bajo la licencia **MIT**. Consulta [`LICENSE`](LICENSE).

## 🤝 Respeto y contexto

Este repositorio es un experimento técnico, no una declaración sobre el valor de Zenit ni sobre su creador. Mantén los comentarios centrados en el código y evita ataques personales.

<div align="center">

**Zentrix · Experimento de ChatGPT · 2026**

*Inspirado en JavaScript. Experimental por diseño.*

</div>
