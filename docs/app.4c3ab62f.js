// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"dist/wasm/app.js":[function(require,module,exports) {
var define;
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var Module = function () {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;

  return function (Module) {
    Module = Module || {};
    var d;
    d || (d = typeof Module !== 'undefined' ? Module : {});
    var m = {},
        n;

    for (n in d) {
      d.hasOwnProperty(n) && (m[n] = d[n]);
    }

    function q(a, b) {
      throw b;
    }

    var r = "";
    document.currentScript && (r = document.currentScript.src);
    _scriptDir && (r = _scriptDir);
    0 !== r.indexOf("blob:") ? r = r.substr(0, r.lastIndexOf("/") + 1) : r = "";
    var aa = d.print || console.log.bind(console),
        v = d.printErr || console.warn.bind(console);

    for (n in m) {
      m.hasOwnProperty(n) && (d[n] = m[n]);
    }

    m = null;
    d.quit && (q = d.quit);

    function ba(a, b) {
      b || (b = 16);
      return Math.ceil(a / b) * b;
    }

    var w;
    d.wasmBinary && (w = d.wasmBinary);
    var x;
    d.noExitRuntime && (x = d.noExitRuntime);
    "object" !== (typeof WebAssembly === "undefined" ? "undefined" : _typeof(WebAssembly)) && v("no native wasm support detected");
    var y,
        ca = new WebAssembly.Table({
      initial: 45,
      maximum: 45,
      element: "anyfunc"
    }),
        z = !1,
        da = "undefined" !== typeof TextDecoder ? new TextDecoder("utf8") : void 0;

    function ea(a, b) {
      if (a) {
        var c = A,
            e = a + b;

        for (b = a; c[b] && !(b >= e);) {
          ++b;
        }

        if (16 < b - a && c.subarray && da) a = da.decode(c.subarray(a, b));else {
          for (e = ""; a < b;) {
            var f = c[a++];

            if (f & 128) {
              var h = c[a++] & 63;
              if (192 == (f & 224)) e += String.fromCharCode((f & 31) << 6 | h);else {
                var l = c[a++] & 63;
                f = 224 == (f & 240) ? (f & 15) << 12 | h << 6 | l : (f & 7) << 18 | h << 12 | l << 6 | c[a++] & 63;
                65536 > f ? e += String.fromCharCode(f) : (f -= 65536, e += String.fromCharCode(55296 | f >> 10, 56320 | f & 1023));
              }
            } else e += String.fromCharCode(f);
          }

          a = e;
        }
      } else a = "";

      return a;
    }

    function fa(a, b, c) {
      var e = A;

      if (0 < c) {
        c = b + c - 1;

        for (var f = 0; f < a.length; ++f) {
          var h = a.charCodeAt(f);

          if (55296 <= h && 57343 >= h) {
            var l = a.charCodeAt(++f);
            h = 65536 + ((h & 1023) << 10) | l & 1023;
          }

          if (127 >= h) {
            if (b >= c) break;
            e[b++] = h;
          } else {
            if (2047 >= h) {
              if (b + 1 >= c) break;
              e[b++] = 192 | h >> 6;
            } else {
              if (65535 >= h) {
                if (b + 2 >= c) break;
                e[b++] = 224 | h >> 12;
              } else {
                if (b + 3 >= c) break;
                e[b++] = 240 | h >> 18;
                e[b++] = 128 | h >> 12 & 63;
              }

              e[b++] = 128 | h >> 6 & 63;
            }

            e[b++] = 128 | h & 63;
          }
        }

        e[b] = 0;
      }
    }

    "undefined" !== typeof TextDecoder && new TextDecoder("utf-16le");

    function ha(a) {
      0 < a % 65536 && (a += 65536 - a % 65536);
      return a;
    }

    var B, C, A, ia, ja, D, E, ka, la;

    function ma(a) {
      B = a;
      d.HEAP8 = C = new Int8Array(a);
      d.HEAP16 = ia = new Int16Array(a);
      d.HEAP32 = D = new Int32Array(a);
      d.HEAPU8 = A = new Uint8Array(a);
      d.HEAPU16 = ja = new Uint16Array(a);
      d.HEAPU32 = E = new Uint32Array(a);
      d.HEAPF32 = ka = new Float32Array(a);
      d.HEAPF64 = la = new Float64Array(a);
    }

    var na = d.TOTAL_MEMORY || 16777216;
    d.wasmMemory ? y = d.wasmMemory : y = new WebAssembly.Memory({
      initial: na / 65536
    });
    y && (B = y.buffer);
    na = B.byteLength;
    ma(B);
    D[2356] = 5252480;

    function F(a) {
      for (; 0 < a.length;) {
        var b = a.shift();
        if ("function" == typeof b) b();else {
          var c = b.aa;
          "number" === typeof c ? void 0 === b.V ? d.dynCall_v(c) : d.dynCall_vi(c, b.V) : c(void 0 === b.V ? null : b.V);
        }
      }
    }

    var oa = [],
        pa = [],
        qa = [],
        ra = [];

    function sa() {
      var a = d.preRun.shift();
      oa.unshift(a);
    }

    var G = 0,
        ua = null,
        I = null;
    d.preloadedImages = {};
    d.preloadedAudios = {};

    function va(a) {
      if (d.onAbort) d.onAbort(a);
      aa(a);
      v(a);
      z = !0;
      throw new WebAssembly.RuntimeError("abort(" + a + "). Build with -s ASSERTIONS=1 for more info.");
    }

    function wa() {
      var a = J;
      return String.prototype.startsWith ? a.startsWith("data:application/octet-stream;base64,") : 0 === a.indexOf("data:application/octet-stream;base64,");
    }

    var J = "app.wasm";

    if (!wa()) {
      var xa = J;
      J = d.locateFile ? d.locateFile(xa, r) : r + xa;
    }

    function ya() {
      try {
        if (w) return new Uint8Array(w);
        throw "both async and sync fetching of the wasm failed";
      } catch (a) {
        va(a);
      }
    }

    function za() {
      return w || "function" !== typeof fetch ? new Promise(function (a) {
        a(ya());
      }) : fetch(J, {
        credentials: "same-origin"
      }).then(function (a) {
        if (!a.ok) throw "failed to load wasm binary file at '" + J + "'";
        return a.arrayBuffer();
      }).catch(function () {
        return ya();
      });
    }

    var Aa = {
      1863: function _(a, b) {
        d.removeAttribute(a, d.UTF8ToString(b));
      },
      1928: function _(a, b, c) {
        d.setAttribute(a, d.UTF8ToString(b), d.UTF8ToString(c));
      },
      2025: function _(a) {
        d.U[a].asmDomRaws = [];
      },
      2068: function _(a, b) {
        d.U[a].asmDomRaws.push(d.UTF8ToString(b));
      },
      2151: function _(a, b) {
        b = d.UTF8ToString(b).replace(/^on/, "");
        a = d.U[a];
        a.removeEventListener(b, d.W, !1);
        delete a.asmDomEvents[b];
      },
      2331: function _(a, b) {
        a = d.U[a];
        a.$ = b;
        void 0 === a.asmDomEvents && (a.asmDomEvents = {});
      },
      2457: function _(a, b) {
        b = d.UTF8ToString(b).replace(/^on/, "");
        a = d.U[a];
        a.addEventListener(b, d.W, !1);
        a.asmDomEvents[b] = d.W;
      },
      2647: function _(a, b) {
        return 0 === b ? d.createElement(d.UTF8ToString(a)) : d.createElementNS(d.UTF8ToString(b), d.UTF8ToString(a));
      },
      2807: function _(a) {
        return d.createTextNode(d.UTF8ToString(a));
      },
      2873: function _() {
        return d.createDocumentFragment();
      },
      2918: function _(a) {
        return d.createComment(d.UTF8ToString(a));
      },
      2981: function _(a, b) {
        d.appendChild(a, b);
      },
      3016: function _(a, b, c) {
        d.insertBefore(a, b, c);
      },
      3056: function _(a) {
        d.removeChild(a);
      },
      3084: function _(a, b, c) {
        d.insertBefore(a, b, d.nextSibling(c));
      },
      3143: function _(a, b, c) {
        d.insertBefore(a, b, c);
      },
      3180: function _(a, b) {
        d.da(a, d.UTF8ToString(b));
      },
      3239: function _(a, b) {
        var c = d.parentNode(b);
        0 !== c && (d.insertBefore(c, a, d.nextSibling(b)), d.removeChild(b));
      },
      3384: function _() {
        window.asmDomHelpers.eventProxy = function (a) {
          return d.functionCallback(this.$, a.type, a);
        };

        d.ea = window.asmDomHelpers.domApi.addNode;
        d.createElement = window.asmDomHelpers.domApi.createElement;
        d.createElementNS = window.asmDomHelpers.domApi.createElementNS;
        d.createTextNode = window.asmDomHelpers.domApi.createTextNode;
        d.createComment = window.asmDomHelpers.domApi.createComment;
        d.createDocumentFragment = window.asmDomHelpers.domApi.createDocumentFragment;
        d.insertBefore = window.asmDomHelpers.domApi.insertBefore;
        d.removeChild = window.asmDomHelpers.domApi.removeChild;
        d.appendChild = window.asmDomHelpers.domApi.appendChild;
        d.removeAttribute = window.asmDomHelpers.domApi.removeAttribute;
        d.setAttribute = window.asmDomHelpers.domApi.setAttribute;
        d.parentNode = window.asmDomHelpers.domApi.parentNode;
        d.nextSibling = window.asmDomHelpers.domApi.nextSibling;
        d.da = window.asmDomHelpers.domApi.setNodeValue;
        d.U = window.asmDomHelpers.nodes;
        d.W = window.asmDomHelpers.eventProxy;
      }
    },
        M = [];
    pa.push({
      aa: function aa() {
        Ba();
      }
    });

    function Ca(a) {
      switch (a) {
        case 1:
          return 0;

        case 2:
          return 1;

        case 4:
          return 2;

        case 8:
          return 3;

        default:
          throw new TypeError("Unknown type size: " + a);
      }
    }

    var Da = void 0;

    function N(a) {
      for (var b = ""; A[a];) {
        b += Da[A[a++]];
      }

      return b;
    }

    var O = {},
        P = {},
        Q = {};

    function Ea(a) {
      if (void 0 === a) return "_unknown";
      a = a.replace(/[^a-zA-Z0-9_]/g, "$");
      var b = a.charCodeAt(0);
      return 48 <= b && 57 >= b ? "_" + a : a;
    }

    function Fa(a, b) {
      a = Ea(a);
      return new Function("body", "return function " + a + '() {\n    "use strict";    return body.apply(this, arguments);\n};\n')(b);
    }

    function Ga(a) {
      var b = Error,
          c = Fa(a, function (b) {
        this.name = a;
        this.message = b;
        b = Error(b).stack;
        void 0 !== b && (this.stack = this.toString() + "\n" + b.replace(/^Error(:[^\n]*)?\n/, ""));
      });
      c.prototype = Object.create(b.prototype);
      c.prototype.constructor = c;

      c.prototype.toString = function () {
        return void 0 === this.message ? this.name : this.name + ": " + this.message;
      };

      return c;
    }

    var Ha = void 0;

    function R(a) {
      throw new Ha(a);
    }

    var Ia = void 0;

    function Ja(a, b) {
      function c(a) {
        a = b(a);
        if (a.length !== e.length) throw new Ia("Mismatched type converter count");

        for (var c = 0; c < e.length; ++c) {
          S(e[c], a[c]);
        }
      }

      var e = [];
      e.forEach(function (b) {
        Q[b] = a;
      });
      var f = Array(a.length),
          h = [],
          l = 0;
      a.forEach(function (a, b) {
        P.hasOwnProperty(a) ? f[b] = P[a] : (h.push(a), O.hasOwnProperty(a) || (O[a] = []), O[a].push(function () {
          f[b] = P[a];
          ++l;
          l === h.length && c(f);
        }));
      });
      0 === h.length && c(f);
    }

    function S(a, b, c) {
      c = c || {};
      if (!("argPackAdvance" in b)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
      var e = b.name;
      a || R('type "' + e + '" must have a positive integer typeid pointer');

      if (P.hasOwnProperty(a)) {
        if (c.ba) return;
        R("Cannot register type '" + e + "' twice");
      }

      P[a] = b;
      delete Q[a];
      O.hasOwnProperty(a) && (b = O[a], delete O[a], b.forEach(function (a) {
        a();
      }));
    }

    var Ka = [],
        T = [{}, {
      value: void 0
    }, {
      value: null
    }, {
      value: !0
    }, {
      value: !1
    }];

    function La(a) {
      4 < a && 0 === --T[a].X && (T[a] = void 0, Ka.push(a));
    }

    function U(a) {
      switch (a) {
        case void 0:
          return 1;

        case null:
          return 2;

        case !0:
          return 3;

        case !1:
          return 4;

        default:
          var b = Ka.length ? Ka.pop() : T.length;
          T[b] = {
            X: 1,
            value: a
          };
          return b;
      }
    }

    function Ma(a) {
      return this.fromWireType(E[a >> 2]);
    }

    function Na(a) {
      if (null === a) return "null";

      var b = _typeof(a);

      return "object" === b || "array" === b || "function" === b ? a.toString() : "" + a;
    }

    function Oa(a, b) {
      switch (b) {
        case 2:
          return function (a) {
            return this.fromWireType(ka[a >> 2]);
          };

        case 3:
          return function (a) {
            return this.fromWireType(la[a >> 3]);
          };

        default:
          throw new TypeError("Unknown float type: " + a);
      }
    }

    function Pa(a) {
      var b = Function;
      if (!(b instanceof Function)) throw new TypeError("new_ called with constructor type " + _typeof(b) + " which is not a function");
      var c = Fa(b.name || "unknownFunctionName", function () {});
      c.prototype = b.prototype;
      c = new c();
      a = b.apply(c, a);
      return a instanceof Object ? a : c;
    }

    function Qa(a) {
      for (; a.length;) {
        var b = a.pop();
        a.pop()(b);
      }
    }

    function Ta(a, b) {
      var c = d;

      if (void 0 === c[a].S) {
        var e = c[a];

        c[a] = function () {
          c[a].S.hasOwnProperty(arguments.length) || R("Function '" + b + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + c[a].S + ")!");
          return c[a].S[arguments.length].apply(this, arguments);
        };

        c[a].S = [];
        c[a].S[e.Z] = e;
      }
    }

    function Ua(a, b, c) {
      d.hasOwnProperty(a) ? ((void 0 === c || void 0 !== d[a].S && void 0 !== d[a].S[c]) && R("Cannot register public name '" + a + "' twice"), Ta(a, a), d.hasOwnProperty(c) && R("Cannot register multiple overloads of a function with the same number of arguments (" + c + ")!"), d[a].S[c] = b) : (d[a] = b, void 0 !== c && (d[a].fa = c));
    }

    function Va(a, b) {
      for (var c = [], e = 0; e < a; e++) {
        c.push(D[(b >> 2) + e]);
      }

      return c;
    }

    function Wa(a, b) {
      a = N(a);
      if (void 0 !== d["FUNCTION_TABLE_" + a]) var c = d["FUNCTION_TABLE_" + a][b];else if ("undefined" !== typeof FUNCTION_TABLE) c = FUNCTION_TABLE[b];else {
        c = d["dynCall_" + a];
        void 0 === c && (c = d["dynCall_" + a.replace(/f/g, "d")], void 0 === c && R("No dynCall invoker for signature: " + a));

        for (var e = [], f = 1; f < a.length; ++f) {
          e.push("a" + f);
        }

        f = "return function " + ("dynCall_" + a + "_" + b) + "(" + e.join(", ") + ") {\n";
        f += "    return dynCall(rawFunction" + (e.length ? ", " : "") + e.join(", ") + ");\n";
        c = new Function("dynCall", "rawFunction", f + "};\n")(c, b);
      }
      "function" !== typeof c && R("unknown function pointer with signature " + a + ": " + b);
      return c;
    }

    var Xa = void 0;

    function Ya(a) {
      a = Za(a);
      var b = N(a);
      V(a);
      return b;
    }

    function $a(a, b) {
      function c(a) {
        f[a] || P[a] || (Q[a] ? Q[a].forEach(c) : (e.push(a), f[a] = !0));
      }

      var e = [],
          f = {};
      b.forEach(c);
      throw new Xa(a + ": " + e.map(Ya).join([", "]));
    }

    function ab(a, b, c) {
      switch (b) {
        case 0:
          return c ? function (a) {
            return C[a];
          } : function (a) {
            return A[a];
          };

        case 1:
          return c ? function (a) {
            return ia[a >> 1];
          } : function (a) {
            return ja[a >> 1];
          };

        case 2:
          return c ? function (a) {
            return D[a >> 2];
          } : function (a) {
            return E[a >> 2];
          };

        default:
          throw new TypeError("Unknown integer type: " + a);
      }
    }

    function W(a) {
      a || R("Cannot use deleted val. handle = " + a);
      return T[a].value;
    }

    function bb(a, b) {
      var c = P[a];
      void 0 === c && R(b + " has unknown type " + Ya(a));
      return c;
    }

    var cb = {};

    function db(a) {
      var b = cb[a];
      return void 0 === b ? N(a) : b;
    }

    var eb = [];

    function fb() {
      return "object" === (typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) ? globalThis : Function("return this")();
    }

    function gb(a) {
      var b = eb.length;
      eb.push(a);
      return b;
    }

    function hb(a, b) {
      for (var c = Array(a), e = 0; e < a; ++e) {
        c[e] = bb(D[(b >> 2) + e], "parameter " + e);
      }

      return c;
    }

    for (var ib = Array(256), Y = 0; 256 > Y; ++Y) {
      ib[Y] = String.fromCharCode(Y);
    }

    Da = ib;
    Ha = d.BindingError = Ga("BindingError");
    Ia = d.InternalError = Ga("InternalError");

    d.count_emval_handles = function () {
      for (var a = 0, b = 5; b < T.length; ++b) {
        void 0 !== T[b] && ++a;
      }

      return a;
    };

    d.get_first_emval = function () {
      for (var a = 5; a < T.length; ++a) {
        if (void 0 !== T[a]) return T[a];
      }

      return null;
    };

    Xa = d.UnboundTypeError = Ga("UnboundTypeError");

    var lb = {
      l: function l(a) {
        return jb(a);
      },
      k: function k(a) {
        "uncaught_exception" in kb ? kb.Y++ : kb.Y = 1;
        throw a;
      },
      y: function y(a, b, c, e, f) {
        var h = Ca(c);
        b = N(b);
        S(a, {
          name: b,
          fromWireType: function fromWireType(a) {
            return !!a;
          },
          toWireType: function toWireType(a, b) {
            return b ? e : f;
          },
          argPackAdvance: 8,
          readValueFromPointer: function readValueFromPointer(a) {
            if (1 === c) var e = C;else if (2 === c) e = ia;else if (4 === c) e = D;else throw new TypeError("Unknown boolean type size: " + b);
            return this.fromWireType(e[a >> h]);
          },
          T: null
        });
      },
      w: function w(a, b) {
        b = N(b);
        S(a, {
          name: b,
          fromWireType: function fromWireType(a) {
            var b = T[a].value;
            La(a);
            return b;
          },
          toWireType: function toWireType(a, b) {
            return U(b);
          },
          argPackAdvance: 8,
          readValueFromPointer: Ma,
          T: null
        });
      },
      p: function p(a, b, c) {
        c = Ca(c);
        b = N(b);
        S(a, {
          name: b,
          fromWireType: function fromWireType(a) {
            return a;
          },
          toWireType: function toWireType(a, b) {
            if ("number" !== typeof b && "boolean" !== typeof b) throw new TypeError('Cannot convert "' + Na(b) + '" to ' + this.name);
            return b;
          },
          argPackAdvance: 8,
          readValueFromPointer: Oa(b, c),
          T: null
        });
      },
      t: function t(a, b, c, e, f, h) {
        var l = Va(b, c);
        a = N(a);
        f = Wa(e, f);
        Ua(a, function () {
          $a("Cannot call " + a + " due to unbound types", l);
        }, b - 1);
        Ja(l, function (c) {
          var e = a,
              g = a;
          c = [c[0], null].concat(c.slice(1));
          var l = f,
              p = c.length;
          2 > p && R("argTypes array size mismatch! Must at least get return value and 'this' types!");

          for (var ta = null !== c[1] && !1, X = !1, k = 1; k < c.length; ++k) {
            if (null !== c[k] && void 0 === c[k].T) {
              X = !0;
              break;
            }
          }

          var Ra = "void" !== c[0].name,
              H = "",
              L = "";

          for (k = 0; k < p - 2; ++k) {
            H += (0 !== k ? ", " : "") + "arg" + k, L += (0 !== k ? ", " : "") + "arg" + k + "Wired";
          }

          g = "return function " + Ea(g) + "(" + H + ") {\nif (arguments.length !== " + (p - 2) + ") {\nthrowBindingError('function " + g + " called with ' + arguments.length + ' arguments, expected " + (p - 2) + " args!');\n}\n";
          X && (g += "var destructors = [];\n");
          var Sa = X ? "destructors" : "null";
          H = "throwBindingError invoker fn runDestructors retType classParam".split(" ");
          l = [R, l, h, Qa, c[0], c[1]];
          ta && (g += "var thisWired = classParam.toWireType(" + Sa + ", this);\n");

          for (k = 0; k < p - 2; ++k) {
            g += "var arg" + k + "Wired = argType" + k + ".toWireType(" + Sa + ", arg" + k + "); // " + c[k + 2].name + "\n", H.push("argType" + k), l.push(c[k + 2]);
          }

          ta && (L = "thisWired" + (0 < L.length ? ", " : "") + L);
          g += (Ra ? "var rv = " : "") + "invoker(fn" + (0 < L.length ? ", " : "") + L + ");\n";
          if (X) g += "runDestructors(destructors);\n";else for (k = ta ? 1 : 2; k < c.length; ++k) {
            p = 1 === k ? "thisWired" : "arg" + (k - 2) + "Wired", null !== c[k].T && (g += p + "_dtor(" + p + "); // " + c[k].name + "\n", H.push(p + "_dtor"), l.push(c[k].T));
          }
          Ra && (g += "var ret = retType.fromWireType(rv);\nreturn ret;\n");
          H.push(g + "}\n");
          c = Pa(H).apply(null, l);
          k = b - 1;
          if (!d.hasOwnProperty(e)) throw new Ia("Replacing nonexistant public symbol");
          void 0 !== d[e].S && void 0 !== k ? d[e].S[k] = c : (d[e] = c, d[e].Z = k);
          return [];
        });
      },
      f: function f(a, b, c, e, _f) {
        function h(a) {
          return a;
        }

        b = N(b);
        -1 === _f && (_f = 4294967295);
        var l = Ca(c);

        if (0 === e) {
          var g = 32 - 8 * c;

          h = function h(a) {
            return a << g >>> g;
          };
        }

        var t = -1 != b.indexOf("unsigned");
        S(a, {
          name: b,
          fromWireType: h,
          toWireType: function toWireType(a, c) {
            if ("number" !== typeof c && "boolean" !== typeof c) throw new TypeError('Cannot convert "' + Na(c) + '" to ' + this.name);
            if (c < e || c > _f) throw new TypeError('Passing a number "' + Na(c) + '" from JS side to C/C++ side to an argument of type "' + b + '", which is outside the valid range [' + e + ", " + _f + "]!");
            return t ? c >>> 0 : c | 0;
          },
          argPackAdvance: 8,
          readValueFromPointer: ab(b, l, 0 !== e),
          T: null
        });
      },
      e: function e(a, b, c) {
        function e(a) {
          a >>= 2;
          var b = E;
          return new f(b.buffer, b[a + 1], b[a]);
        }

        var f = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][b];
        c = N(c);
        S(a, {
          name: c,
          fromWireType: e,
          argPackAdvance: 8,
          readValueFromPointer: e
        }, {
          ba: !0
        });
      },
      q: function q(a, b) {
        b = N(b);
        var c = "std::string" === b;
        S(a, {
          name: b,
          fromWireType: function fromWireType(a) {
            var b = E[a >> 2];

            if (c) {
              var e = A[a + 4 + b],
                  l = 0;
              0 != e && (l = e, A[a + 4 + b] = 0);
              var g = a + 4;

              for (e = 0; e <= b; ++e) {
                var t = a + 4 + e;

                if (0 == A[t]) {
                  g = ea(g);
                  if (void 0 === u) var u = g;else u += String.fromCharCode(0), u += g;
                  g = t + 1;
                }
              }

              0 != l && (A[a + 4 + b] = l);
            } else {
              u = Array(b);

              for (e = 0; e < b; ++e) {
                u[e] = String.fromCharCode(A[a + 4 + e]);
              }

              u = u.join("");
            }

            V(a);
            return u;
          },
          toWireType: function toWireType(a, b) {
            b instanceof ArrayBuffer && (b = new Uint8Array(b));
            var e = "string" === typeof b;
            e || b instanceof Uint8Array || b instanceof Uint8ClampedArray || b instanceof Int8Array || R("Cannot pass non-string to std::string");
            var f = (c && e ? function () {
              for (var a = 0, c = 0; c < b.length; ++c) {
                var e = b.charCodeAt(c);
                55296 <= e && 57343 >= e && (e = 65536 + ((e & 1023) << 10) | b.charCodeAt(++c) & 1023);
                127 >= e ? ++a : a = 2047 >= e ? a + 2 : 65535 >= e ? a + 3 : a + 4;
              }

              return a;
            } : function () {
              return b.length;
            })(),
                g = jb(4 + f + 1);
            E[g >> 2] = f;
            if (c && e) fa(b, g + 4, f + 1);else if (e) for (e = 0; e < f; ++e) {
              var t = b.charCodeAt(e);
              255 < t && (V(g), R("String has UTF-16 code units that do not fit in 8 bits"));
              A[g + 4 + e] = t;
            } else for (e = 0; e < f; ++e) {
              A[g + 4 + e] = b[e];
            }
            null !== a && a.push(V, g);
            return g;
          },
          argPackAdvance: 8,
          readValueFromPointer: Ma,
          T: function T(a) {
            V(a);
          }
        });
      },
      x: function x(a, b, c) {
        c = N(c);

        if (2 === b) {
          var e = function e() {
            return ja;
          };

          var f = 1;
        } else 4 === b && (e = function e() {
          return E;
        }, f = 2);

        S(a, {
          name: c,
          fromWireType: function fromWireType(a) {
            for (var b = e(), c = E[a >> 2], h = Array(c), u = a + 4 >> f, K = 0; K < c; ++K) {
              h[K] = String.fromCharCode(b[u + K]);
            }

            V(a);
            return h.join("");
          },
          toWireType: function toWireType(a, c) {
            var g = c.length,
                h = jb(4 + g * b),
                l = e();
            E[h >> 2] = g;

            for (var K = h + 4 >> f, p = 0; p < g; ++p) {
              l[K + p] = c.charCodeAt(p);
            }

            null !== a && a.push(V, h);
            return h;
          },
          argPackAdvance: 8,
          readValueFromPointer: Ma,
          T: function T(a) {
            V(a);
          }
        });
      },
      z: function z(a, b) {
        b = N(b);
        S(a, {
          ca: !0,
          name: b,
          argPackAdvance: 0,
          fromWireType: function fromWireType() {},
          toWireType: function toWireType() {}
        });
      },
      i: function i(a, b, c) {
        a = W(a);
        b = bb(b, "emval::as");
        var e = [],
            f = U(e);
        D[c >> 2] = f;
        return b.toWireType(e, a);
      },
      n: function n(a, b, c, e, f) {
        a = eb[a];
        b = W(b);
        c = db(c);
        var h = [];
        D[e >> 2] = U(h);
        return a(b, c, h, f);
      },
      a: La,
      m: function m(a) {
        if (0 === a) return U(fb());
        a = db(a);
        return U(fb()[a]);
      },
      o: function o(a, b) {
        b = hb(a, b);

        for (var c = b[0], e = c.name + "_$" + b.slice(1).map(function (a) {
          return a.name;
        }).join("_") + "$", f = ["retType"], h = [c], l = "", g = 0; g < a - 1; ++g) {
          l += (0 !== g ? ", " : "") + "arg" + g, f.push("argType" + g), h.push(b[1 + g]);
        }

        e = "return function " + Ea("methodCaller_" + e) + "(handle, name, destructors, args) {\n";
        var t = 0;

        for (g = 0; g < a - 1; ++g) {
          e += "    var arg" + g + " = argType" + g + ".readValueFromPointer(args" + (t ? "+" + t : "") + ");\n", t += b[g + 1].argPackAdvance;
        }

        e += "    var rv = handle[name](" + l + ");\n";

        for (g = 0; g < a - 1; ++g) {
          b[g + 1].deleteObject && (e += "    argType" + g + ".deleteObject(arg" + g + ");\n");
        }

        c.ca || (e += "    return retType.toWireType(destructors, rv);\n");
        f.push(e + "};\n");
        a = Pa(f).apply(null, h);
        return gb(a);
      },
      b: function b(a, _b) {
        a = W(a);
        _b = W(_b);
        return U(a[_b]);
      },
      j: function j(a) {
        4 < a && (T[a].X += 1);
      },
      c: function c(a) {
        return U(db(a));
      },
      g: function g(a) {
        Qa(T[a].value);
        La(a);
      },
      s: function s(a, b, c) {
        a = W(a);
        b = W(b);
        c = W(c);
        a[b] = c;
      },
      r: function r(a, b) {
        a = W(a);
        b = W(b);
        return a === b;
      },
      h: function h(a, b) {
        a = bb(a, "_emval_take_value");
        a = a.readValueFromPointer(b);
        return U(a);
      },
      A: function A() {
        va();
      },
      d: function d(a, b, c) {
        a: for (M.length = 0;;) {
          var e = A[b++];

          if (!e) {
            b = M;
            break a;
          }

          100 === e || 102 === e ? (c = ba(c, 8), M.push(la[c >> 3]), c += 8) : 105 === e && (c = ba(c, 4), M.push(D[c >> 2]), c += 4);
        }

        return Aa[a].apply(null, b);
      },
      u: function u(a, b, c) {
        A.set(A.subarray(b, b + c), a);
      },
      v: function v(a) {
        if (2147418112 < a) return !1;

        for (var b = Math.max(C.length, 16777216); b < a;) {
          536870912 >= b ? b = ha(2 * b) : b = Math.min(ha((3 * b + 2147483648) / 4), 2147418112);
        }

        a: {
          try {
            y.grow(b - B.byteLength + 65535 >> 16);
            ma(y.buffer);
            var c = 1;
            break a;
          } catch (e) {}

          c = void 0;
        }

        return c ? !0 : !1;
      },
      memory: y,
      table: ca
    },
        mb = function () {
      function a(a) {
        d.asm = a.exports;
        G--;
        d.monitorRunDependencies && d.monitorRunDependencies(G);
        0 == G && (null !== ua && (clearInterval(ua), ua = null), I && (a = I, I = null, a()));
      }

      function b(b) {
        a(b.instance);
      }

      function c(a) {
        return za().then(function (a) {
          return WebAssembly.instantiate(a, e);
        }).then(a, function (a) {
          v("failed to asynchronously prepare wasm: " + a);
          va(a);
        });
      }

      var e = {
        env: lb,
        wasi_unstable: lb
      };
      G++;
      d.monitorRunDependencies && d.monitorRunDependencies(G);
      if (d.instantiateWasm) try {
        return d.instantiateWasm(e, a);
      } catch (f) {
        return v("Module.instantiateWasm callback failed with error: " + f), !1;
      }

      (function () {
        if (w || "function" !== typeof WebAssembly.instantiateStreaming || wa() || "function" !== typeof fetch) return c(b);
        fetch(J, {
          credentials: "same-origin"
        }).then(function (a) {
          return WebAssembly.instantiateStreaming(a, e).then(b, function (a) {
            v("wasm streaming compile failed: " + a);
            v("falling back to ArrayBuffer instantiation");
            c(b);
          });
        });
      })();

      return {};
    }();

    d.asm = mb;

    var Ba = d.___wasm_call_ctors = function () {
      return d.asm.B.apply(null, arguments);
    },
        jb = d._malloc = function () {
      return d.asm.C.apply(null, arguments);
    };

    d._main = function () {
      return d.asm.D.apply(null, arguments);
    };

    var kb = d.__ZSt18uncaught_exceptionv = function () {
      return d.asm.E.apply(null, arguments);
    },
        V = d._free = function () {
      return d.asm.F.apply(null, arguments);
    },
        Za = d.___getTypeName = function () {
      return d.asm.G.apply(null, arguments);
    };

    d.___embind_register_native_and_builtin_types = function () {
      return d.asm.H.apply(null, arguments);
    };

    d.dynCall_iii = function () {
      return d.asm.I.apply(null, arguments);
    };

    d.dynCall_ii = function () {
      return d.asm.J.apply(null, arguments);
    };

    d.dynCall_vi = function () {
      return d.asm.K.apply(null, arguments);
    };

    d.dynCall_iiiii = function () {
      return d.asm.L.apply(null, arguments);
    };

    d.dynCall_viiii = function () {
      return d.asm.M.apply(null, arguments);
    };

    d.dynCall_iidiiii = function () {
      return d.asm.N.apply(null, arguments);
    };

    d.dynCall_vii = function () {
      return d.asm.O.apply(null, arguments);
    };

    d.dynCall_iiii = function () {
      return d.asm.P.apply(null, arguments);
    };

    d.dynCall_viiiiii = function () {
      return d.asm.Q.apply(null, arguments);
    };

    d.dynCall_viiiii = function () {
      return d.asm.R.apply(null, arguments);
    };

    d.asm = mb;
    d.UTF8ToString = ea;
    var Z;

    d.then = function (a) {
      if (Z) a(d);else {
        var b = d.onRuntimeInitialized;

        d.onRuntimeInitialized = function () {
          b && b();
          a(d);
        };
      }
      return d;
    };

    function nb(a) {
      this.name = "ExitStatus";
      this.message = "Program terminated with exit(" + a + ")";
      this.status = a;
    }

    I = function ob() {
      Z || pb();
      Z || (I = ob);
    };

    function pb() {
      function a() {
        if (!Z && (Z = !0, !z)) {
          F(pa);
          F(qa);
          if (d.onRuntimeInitialized) d.onRuntimeInitialized();

          if (qb) {
            var a = d._main;

            try {
              var c = a(0, 0);

              if (!x || 0 !== c) {
                if (!x && (z = !0, d.onExit)) d.onExit(c);
                q(c, new nb(c));
              }
            } catch (e) {
              e instanceof nb || ("SimulateInfiniteLoop" == e ? x = !0 : ((a = e) && "object" === _typeof(e) && e.stack && (a = [e, e.stack]), v("exception thrown: " + a), q(1, e)));
            } finally {}
          }

          if (d.postRun) for ("function" == typeof d.postRun && (d.postRun = [d.postRun]); d.postRun.length;) {
            a = d.postRun.shift(), ra.unshift(a);
          }
          F(ra);
        }
      }

      if (!(0 < G)) {
        if (d.preRun) for ("function" == typeof d.preRun && (d.preRun = [d.preRun]); d.preRun.length;) {
          sa();
        }
        F(oa);
        0 < G || (d.setStatus ? (d.setStatus("Running..."), setTimeout(function () {
          setTimeout(function () {
            d.setStatus("");
          }, 1);
          a();
        }, 1)) : a());
      }
    }

    d.run = pb;
    if (d.preInit) for ("function" == typeof d.preInit && (d.preInit = [d.preInit]); 0 < d.preInit.length;) {
      d.preInit.pop()();
    }
    var qb = !0;
    d.noInitialRun && (qb = !1);
    x = !0;
    pb();
    return Module;
  };
}();

if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object' && (typeof module === "undefined" ? "undefined" : _typeof(module)) === 'object') module.exports = Module;else if (typeof define === 'function' && define['amd']) define([], function () {
  return Module;
});else if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object') exports["Module"] = Module;
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "44877" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","dist/wasm/app.js"], null)
//# sourceMappingURL=/app.4c3ab62f.map