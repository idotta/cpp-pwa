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
})({"node_modules/asm-dom/cpp/domRecycler.js":[function(require,module,exports) {
'use strict';

exports.__esModule = true;
var recycler = {
  create: function create(name) {
    name = name.toUpperCase();
    var list = recycler.nodes[name];
    return list !== undefined && list.pop() || document.createElement(name);
  },
  createNS: function createNS(name, ns) {
    name = name.toUpperCase();
    var list = recycler.nodes[name + ns];
    var node = list !== undefined && list.pop() || document.createElementNS(ns, name);
    node.asmDomNS = ns;
    return node;
  },
  createText: function createText(text) {
    var list = recycler.nodes['#text'];
    if (list !== undefined) {
      var node = list.pop();
      if (node !== undefined) {
        node.nodeValue = text;
        return node;
      }
    }
    return document.createTextNode(text);
  },
  createComment: function createComment(comment) {
    var list = recycler.nodes['#comment'];
    if (list !== undefined) {
      var node = list.pop();
      if (node !== undefined) {
        node.nodeValue = comment;
        return node;
      }
    }
    return document.createComment(comment);
  },
  collect: function collect(node) {
    // clean
    var i = void 0;

    // eslint-disable-next-line
    while (i = node.lastChild) {
      node.removeChild(i);
      recycler.collect(i);
    }
    i = node.attributes !== undefined ? node.attributes.length : 0;
    while (i--) {
      node.removeAttribute(node.attributes[i].name);
    }node.asmDomVNode = undefined;
    if (node.asmDomRaws !== undefined) {
      node.asmDomRaws.forEach(function (raw) {
        node[raw] = undefined;
      });
      node.asmDomRaws = undefined;
    }
    if (node.asmDomEvents !== undefined) {
      Object.keys(node.asmDomEvents).forEach(function (event) {
        node.removeEventListener(event, node.asmDomEvents[event], false);
      });
      node.asmDomEvents = undefined;
    }
    if (node.nodeValue !== null && node.nodeValue !== '') {
      node.nodeValue = '';
    }
    Object.keys(node).forEach(function (key) {
      if (key[0] !== 'a' || key[1] !== 's' || key[2] !== 'm' || key[3] !== 'D' || key[4] !== 'o' || key[5] !== 'm') {
        node[key] = undefined;
      }
    });

    // collect
    var name = node.nodeName;
    if (node.asmDomNS !== undefined) name += node.namespaceURI;
    var list = recycler.nodes[name];
    if (list !== undefined) list.push(node);else recycler.nodes[name] = [node];
  },

  nodes: {}
};

exports['default'] = recycler;

},{}],"node_modules/asm-dom/cpp/domApi.js":[function(require,module,exports) {
'use strict';

exports.__esModule = true;
exports.nodes = undefined;

var _domRecycler = require('./domRecycler');

var _domRecycler2 = _interopRequireDefault(_domRecycler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var nodes = exports.nodes = { 0: null };
var lastPtr = 0;

var addPtr = function addPtr(node) {
  if (node === null) return 0;
  if (node.asmDomPtr !== undefined) return node.asmDomPtr;
  nodes[++lastPtr] = node;
  // eslint-disable-next-line
  return node.asmDomPtr = lastPtr;
};

exports['default'] = {
  'addNode': function addNode(node) {
    addPtr(node.parentNode);
    addPtr(node.nextSibling);
    return addPtr(node);
  },
  'createElement': function createElement(tagName) {
    return addPtr(_domRecycler2['default'].create(tagName));
  },
  'createElementNS': function createElementNS(namespaceURI, qualifiedName) {
    return addPtr(_domRecycler2['default'].createNS(qualifiedName, namespaceURI));
  },
  'createTextNode': function createTextNode(text) {
    return addPtr(_domRecycler2['default'].createText(text));
  },
  'createComment': function createComment(text) {
    return addPtr(_domRecycler2['default'].createComment(text));
  },
  'createDocumentFragment': function createDocumentFragment() {
    return addPtr(document.createDocumentFragment());
  },
  'insertBefore': function insertBefore(parentNodePtr, newNodePtr, referenceNodePtr) {
    nodes[parentNodePtr].insertBefore(nodes[newNodePtr], nodes[referenceNodePtr]);
  },
  'removeChild': function removeChild(childPtr) {
    var node = nodes[childPtr];
    if (node === null || node === undefined) return;
    var parent = node.parentNode;
    if (parent !== null) parent.removeChild(node);
    _domRecycler2['default'].collect(node);
  },
  'appendChild': function appendChild(parentPtr, childPtr) {
    nodes[parentPtr].appendChild(nodes[childPtr]);
  },
  'removeAttribute': function removeAttribute(nodePtr, attr) {
    nodes[nodePtr].removeAttribute(attr);
  },
  'setAttribute': function setAttribute(nodePtr, attr, value) {
    // xChar = 120
    // colonChar = 58
    if (attr.charCodeAt(0) !== 120) {
      nodes[nodePtr].setAttribute(attr, value);
    } else if (attr.charCodeAt(3) === 58) {
      // Assume xml namespace
      nodes[nodePtr].setAttributeNS('http://www.w3.org/XML/1998/namespace', attr, value);
    } else if (attr.charCodeAt(5) === 58) {
      // Assume xlink namespace
      nodes[nodePtr].setAttributeNS('http://www.w3.org/1999/xlink', attr, value);
    } else {
      nodes[nodePtr].setAttribute(attr, value);
    }
  },

  // eslint-disable-next-line
  'parentNode': function parentNode(nodePtr) {
    var node = nodes[nodePtr];
    return node !== null && node !== undefined && node.parentNode !== null ? node.parentNode.asmDomPtr : 0;
  },
  // eslint-disable-next-line
  'nextSibling': function nextSibling(nodePtr) {
    var node = nodes[nodePtr];
    return node !== null && node !== undefined && node.nextSibling !== null ? node.nextSibling.asmDomPtr : 0;
  },
  'setNodeValue': function setNodeValue(nodePtr, text) {
    nodes[nodePtr].nodeValue = text;
  }
};

},{"./domRecycler":"node_modules/asm-dom/cpp/domRecycler.js"}],"node_modules/asm-dom/cpp/index.js":[function(require,module,exports) {
var global = arguments[3];
'use strict';

var _domApi = require('./domApi');

var _domApi2 = _interopRequireDefault(_domApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

if (typeof global !== 'undefined' && global.window === undefined) global.window = {};

if (window.asmDomHelpers === undefined) window.asmDomHelpers = {};
window.asmDomHelpers.domApi = _domApi2['default'];
window.asmDomHelpers.nodes = _domApi.nodes;

},{"./domApi":"node_modules/asm-dom/cpp/domApi.js"}],"node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"src/assets/index.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"node_modules/parcel-bundler/src/builtins/bundle-loader.js":[function(require,module,exports) {
var getBundleURL = require('./bundle-url').getBundleURL;

function loadBundlesLazy(bundles) {
  if (!Array.isArray(bundles)) {
    bundles = [bundles];
  }

  var id = bundles[bundles.length - 1];

  try {
    return Promise.resolve(require(id));
  } catch (err) {
    if (err.code === 'MODULE_NOT_FOUND') {
      return new LazyPromise(function (resolve, reject) {
        loadBundles(bundles.slice(0, -1)).then(function () {
          return require(id);
        }).then(resolve, reject);
      });
    }

    throw err;
  }
}

function loadBundles(bundles) {
  return Promise.all(bundles.map(loadBundle));
}

var bundleLoaders = {};

function registerBundleLoader(type, loader) {
  bundleLoaders[type] = loader;
}

module.exports = exports = loadBundlesLazy;
exports.load = loadBundles;
exports.register = registerBundleLoader;
var bundles = {};

function loadBundle(bundle) {
  var id;

  if (Array.isArray(bundle)) {
    id = bundle[1];
    bundle = bundle[0];
  }

  if (bundles[bundle]) {
    return bundles[bundle];
  }

  var type = (bundle.substring(bundle.lastIndexOf('.') + 1, bundle.length) || bundle).toLowerCase();
  var bundleLoader = bundleLoaders[type];

  if (bundleLoader) {
    return bundles[bundle] = bundleLoader(getBundleURL() + bundle).then(function (resolved) {
      if (resolved) {
        module.bundle.register(id, resolved);
      }

      return resolved;
    });
  }
}

function LazyPromise(executor) {
  this.executor = executor;
  this.promise = null;
}

LazyPromise.prototype.then = function (onSuccess, onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.then(onSuccess, onError);
};

LazyPromise.prototype.catch = function (onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.catch(onError);
};
},{"./bundle-url":"node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"glue/load.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(config) {
  var isWebAssemblySupported = 'WebAssembly' in window;
  var loader = isWebAssemblySupported ? require("_bundle_loader")(require.resolve('../dist/wasm/app.js')) : require("_bundle_loader")(require.resolve('../dist/asmjs/app.asm.js'));

  config.locateFile = function (url) {
    return "".concat(isWebAssemblySupported ? 'wasm' : 'asmjs', "/").concat(url);
  };

  return loader.then(function (Module) {
    var app = Module(config);
    delete app.then;
    return app;
  });
}; // Parcel right now doesn't support --reload
// and its HMR is not working on with asm-node, hence hard-reload


exports.default = _default;

if (module.hot) {
  module.hot.accept(function () {
    window.location.reload();
  });
}
},{"_bundle_loader":"node_modules/parcel-bundler/src/builtins/bundle-loader.js","../dist/wasm/app.js":[["app.4c3ab62f.js","dist/wasm/app.js"],"app.4c3ab62f.map","dist/wasm/app.js"],"../dist/asmjs/app.asm.js":[["app.asm.b720e44e.js","dist/asmjs/app.asm.js"],"app.asm.b720e44e.map","dist/asmjs/app.asm.js"]}],"src/index.js":[function(require,module,exports) {
"use strict";

require("asm-dom/cpp/");

require("./assets/index.css");

var _load = _interopRequireDefault(require("../glue/load"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Module config
var config = {};
(0, _load.default)(config);
},{"asm-dom/cpp/":"node_modules/asm-dom/cpp/index.js","./assets/index.css":"src/assets/index.css","../glue/load":"glue/load.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
},{}],"node_modules/parcel-bundler/src/builtins/loaders/browser/js-loader.js":[function(require,module,exports) {
module.exports = function loadJSBundle(bundle) {
  return new Promise(function (resolve, reject) {
    var script = document.createElement('script');
    script.async = true;
    script.type = 'text/javascript';
    script.charset = 'utf-8';
    script.src = bundle;

    script.onerror = function (e) {
      script.onerror = script.onload = null;
      reject(e);
    };

    script.onload = function () {
      script.onerror = script.onload = null;
      resolve();
    };

    document.getElementsByTagName('head')[0].appendChild(script);
  });
};
},{}],0:[function(require,module,exports) {
var b=require("node_modules/parcel-bundler/src/builtins/bundle-loader.js");b.register("js",require("node_modules/parcel-bundler/src/builtins/loaders/browser/js-loader.js"));
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js",0,"src/index.js"], null)
//# sourceMappingURL=/src.a2b27638.map