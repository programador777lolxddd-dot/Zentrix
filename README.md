<div align="center">

# ⚡ Zentrix

### 🧪 Un experimento de lenguaje inspirado en JavaScript

<p>
  <img src="https://img.shields.io/badge/estado-experimental-orange?style=for-the-badge&logo=flask&logoColor=white" alt="Experimental">
  <img src="https://img.shields.io/badge/versión-0.1.0--experimental-blue?style=for-the-badge&logo=semver&logoColor=white" alt="Versión">
  <img src="https://img.shields.io/badge/licencia-MIT-green?style=for-the-badge&logo=opensourceinitiative&logoColor=white" alt="Licencia">
</p>

<p>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js">
</p>

> *«Escribe JavaScript… pero con un toque en español.»*

</div>

---

<div align="center">

### 🎯 Tabla de contenidos

| 🧭 | Sección |
| :---: | :--- |
| 🧪 | [¿Qué es Zentrix?](#-qué-es-zentrix) |
| ⚠️ | [Aviso de seguridad](#️-aviso-de-seguridad) |
| 🚀 | [Inicio rápido](#-inicio-rápido) |
| 📚 | [Palabras disponibles](#-palabras-disponibles) |
| 🧩 | [API](#-api) |
| 🧱 | [Limitaciones](#-limitaciones) |
| 🗺️ | [Ideas futuras](#️-ideas-futuras) |
| 🤝 | [Contribuir](#-contribuir) |
| 📄 | [Licencia](#-licencia) |

</div>

---

## 🧪 ¿Qué es Zentrix?

<div align="center">

```text
  ╔══════════════════════════════════════════════════╗
  ║   Zentrix = JavaScript + un poco de español      ║
  ╚══════════════════════════════════════════════════╝
```

</div>

Zentrix es una **capa experimental** inspirada en JavaScript. Te permite
escribir JavaScript normal y, al mismo tiempo, usar algunos alias en español
como `imprimir`, `funcion`, `si`, `sino`, `mientras` y `retornar`.

No es un lenguaje de propósito general ni un compilador independiente. En esta
versión, el código se transforma mediante **sustituciones de texto sencillas**
y se ejecuta como JavaScript estándar.

> 💡 **En una frase:** Zentrix no interpreta nada por su cuenta; solo traduce
> unos cuantos alias y delega todo lo demás en el motor de JavaScript del entorno.

---

## ⚠️ Aviso de seguridad

> 🚨 **LEE ESTO ANTES DE USAR `Zentrix.ejecutar()`**

`Zentrix.ejecutar()` usa `new Function`, lo que equivale a ejecutar código
arbitrario en tu entorno.

| | Regla |
| :---: | :--- |
| ✅ | Úsalo **solo con código propio o de total confianza** |
| ❌ | **Nunca** lo alimentes con código de terceros, entradas de usuario o contenido descargado de internet |
| 🔒 | Zentrix **no es un sandbox** ni pretende serlo |

---

## 🚀 Inicio rápido

<div align="center">

```text
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│  1. Descarga│ ──▶ │  2. Crea el │ ──▶ │  3. Ejecuta │
│  zentrix.js │     │   HTML      │     │   en el navegador │
└─────────────┘     └─────────────┘     └─────────────┘
```

</div>

### 📥 Paso 1 — Descarga `zentrix.js`

Coloca el archivo junto a tu página HTML.

### 📝 Paso 2 — Crea un archivo HTML

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

### 🔎 Paso 3 — Traducir sin ejecutar

Si solo quieres ver el JavaScript resultante:

```javascript
const codigoJS = Zentrix.traducir('imprimir("Hola");');
console.log(codigoJS);
// → console.log("Hola");
```

### 🎨 Ejemplo algo más completo

```javascript
Zentrix.ejecutar(`
  funcion saludar(nombre) {
    retornar "Hola, " + nombre;
  }

  var contador = 0;
  mientras (contador < 3) {
    imprimir(saludar("Zentrix #" + contador));
    contador = contador + 1;
  }
`);
```

### 🟩 Uso en Node.js

Zentrix solo necesita un motor de JavaScript. Para usarlo fuera del navegador,
asegúrate de que tu copia de `zentrix.js` exponga el objeto `Zentrix`
(por ejemplo con `module.exports`) y cárgalo como cualquier otro módulo.

```javascript
const Zentrix = require('./zentrix.js');
Zentrix.ejecutar('imprimir("¡Hola desde Node!");');
```

---

## 📚 Palabras disponibles

<div align="center">

| 🟨 Zentrix | 🟦 JavaScript |
| :--- | :--- |
| `imprimir(...)` | `console.log(...)` |
| `funcion nombre()` | `function nombre()` |
| `si (...)` | `if (...)` |
| `sino { ... }` | `else { ... }` |
| `mientras (...)` | `while (...)` |
| `retornar` | `return` |
| `verdadero` | `true` |
| `falso` | `false` |
| `nulo` | `null` |

</div>

> ✨ Además puedes usar sin problemas `let`, `const`, `var`, funciones flecha,
> objetos, arreglos y cualquier otra característica compatible con JavaScript:
> Zentrix no las toca.

---

## 🧩 API

<table>
<tr>
<td width="50%" valign="top">

### ▶️ `Zentrix.ejecutar(codigo)`

Traduce el código Zentrix y lo ejecuta inmediatamente.

- **Parámetro:** `codigo` (`string`) — código fuente en sintaxis Zentrix.
- **Devuelve:** el resultado de la última expresión evaluada (comportamiento de
  `new Function`).

</td>
<td width="50%" valign="top">

### 🔁 `Zentrix.traducir(codigo)`

Traduce el código Zentrix a JavaScript **sin ejecutarlo**.

- **Parámetro:** `codigo` (`string`) — código fuente en sintaxis Zentrix.
- **Devuelve:** `string` con el JavaScript equivalente.

</td>
</tr>
</table>

---

## 🧱 Limitaciones

<div align="center">

```text
  ██╗     ██╗███╗   ███╗██╗████████╗███████╗
  ██║     ██║████╗ ████║██║╚══██╔══╝██╔════╝
  ██║     ██║██╔████╔██║██║   ██║   ███████╗
  ██║     ██║██║╚██╔╝██║██║   ██║   ╚════██║
  ███████╗██║██║ ╚═╝ ██║██║   ██║   ███████║
  ╚══════╝╚═╝╚═╝     ╚═╝╚═╝   ╚═╝   ╚══════╝
```

</div>

- ⚗️ **Experimental:** versión `0.1.0-experimental`. La sintaxis y la API
  pueden cambiar sin previo aviso.
- 🔤 **Traducción por expresiones regulares:** no existe un parser propio, por lo
  que las sustituciones pueden afectar a comentarios, cadenas de texto o código
  complejo (por ejemplo, una cadena que contenga la palabra `si`).
- 🚫 **No es un sandbox:** `Zentrix.ejecutar()` usa `new Function`; ejecuta solo
  código de confianza.
- 🧱 **No es independiente:** requiere un entorno JavaScript, como un navegador
  moderno o Node.js.
- 📜 **No es oficial:** no está afiliado al creador original de Zenit.

---

## 🗺️ Ideas futuras

<div align="center">

| 🛠️ Idea | 💬 Descripción |
| :--- | :--- |
| 🧠 **Parser real** | Sustituir las regex por un analizador sintáctico de verdad |
| 💬 **Errores amigables** | Mensajes claros que señalen línea y columna |
| 🧪 **Pruebas automáticas** | Cobertura para evitar regresiones |
| 📖 **Sintaxis propia** | Definir y documentar un lenguaje completo |
| 📦 **Publicar en npm** | Instalación con un solo comando |

</div>

> 🚧 Estas ideas **no son promesas de desarrollo**, solo posibles direcciones.

---

## 🤝 Contribuir

¿Tienes una idea, un error o una mejora? Las contribuciones son bienvenidas:

```text
1️⃣  Abre un issue describiendo el problema o la propuesta
2️⃣  Haz un fork del repositorio
3️⃣  Crea una rama  →  git checkout -b mi-mejora
4️⃣  Envía un pull request explicando qué cambia y por qué
```

---

## 📄 Licencia

<div align="center">

Zentrix se distribuye bajo la licencia **MIT**.

Consulta [`LICENSE`](LICENSE) para más detalles.

[![MIT License](https://img.shields.io/badge/Licencia-MIT-green?style=for-the-badge)](LICENSE)

</div>

---

<div align="center">

### ⭐ ¿Te gusta el experimento?

Si Zentrix te resultó curioso, ¡deja una estrella en el repo!

<br>

```text
     ⚡
    / \
   /   \
  /  Z  \
 /_______\
```

*Inspirado en JavaScript. Experimental por diseño.*

</div>
