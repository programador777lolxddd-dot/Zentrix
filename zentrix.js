/*!
 * Zentrix — JavaScript-inspired experimental language
 * Copyright (c) 2026 ChatGPT
 * MIT License; see LICENSE.
 * Experimental AI-generated project, not official Zenit work.
 */
(function (root) {
  "use strict";
  const VERSION = "0.1.0-experimental";

  function traducir(source) {
    return String(source ?? "")
      .replace(/\bimprimir\s*\(/g, "console.log(")
      .replace(/\bfuncion\s+([A-Za-z_$][\w$]*)\s*\(/g, "function $1(")
      .replace(/\bsi\s*\(/g, "if (")
      .replace(/\bsino\s*\{/g, "else {")
      .replace(/\bmientras\s*\(/g, "while (")
      .replace(/\bretornar\b/g, "return")
      .replace(/\bverdadero\b/g, "true")
      .replace(/\bfalso\b/g, "false")
      .replace(/\bnulo\b/g, "null");
  }

  function ejecutar(source, options = {}) {
    const js = traducir(source);
    const output = options.output || console.log;
    const safeConsole = Object.freeze({
      log: (...args) => output(...args),
      warn: (...args) => (options.warn || console.warn)(...args),
      error: (...args) => (options.error || console.error)(...args)
    });
    // NOT a security sandbox. Never run untrusted code.
    return new Function("console", '"use strict";\n' + js + "\n")(safeConsole);
  }

  const Zentrix = Object.freeze({ version: VERSION, traducir, ejecutar });
  if (typeof module !== "undefined" && module.exports) module.exports = Zentrix;
  else root.Zentrix = Zentrix;
})(typeof globalThis !== "undefined" ? globalThis : this);
