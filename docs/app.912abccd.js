parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"I7/F":[function(require,module,exports) {
var define;
var n;function e(n){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}var r=function(){var n="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0;return function(r){var t;r=r||{},t||(t=void 0!==r?r:{});var o,i={};for(o in t)t.hasOwnProperty(o)&&(i[o]=t[o]);var a="./this.program";function u(n,e){throw e}var f="";document.currentScript&&(f=document.currentScript.src),n&&(f=n),f=0!==f.indexOf("blob:")?f.substr(0,f.lastIndexOf("/")+1):"";var c,l,s=t.print||console.log.bind(console),p=t.printErr||console.warn.bind(console);for(o in i)i.hasOwnProperty(o)&&(t[o]=i[o]);function d(n,e){return e||(e=16),Math.ceil(n/e)*e}i=null,t.thisProgram&&(a=t.thisProgram),t.quit&&(u=t.quit),t.wasmBinary&&(c=t.wasmBinary),t.noExitRuntime&&(l=t.noExitRuntime),"object"!==("undefined"==typeof WebAssembly?"undefined":e(WebAssembly))&&p("no native wasm support detected");var m,v,y,h,g,w,b,T,A,_,C=new WebAssembly.Table({initial:76,maximum:76,element:"anyfunc"}),E=!1,S="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function P(n,e,r){var t=e+r;for(r=e;n[r]&&!(r>=t);)++r;if(16<r-e&&n.subarray&&S)return S.decode(n.subarray(e,r));for(t="";e<r;){var o=n[e++];if(128&o){var i=63&n[e++];if(192==(224&o))t+=String.fromCharCode((31&o)<<6|i);else{var a=63&n[e++];65536>(o=224==(240&o)?(15&o)<<12|i<<6|a:(7&o)<<18|i<<12|a<<6|63&n[e++])?t+=String.fromCharCode(o):(o-=65536,t+=String.fromCharCode(55296|o>>10,56320|1023&o))}}else t+=String.fromCharCode(o)}return t}function F(n,e){return n?P(h,n,e):""}function W(n){return 0<n%65536&&(n+=65536-n%65536),n}function k(n){v=n,t.HEAP8=y=new Int8Array(n),t.HEAP16=g=new Int16Array(n),t.HEAP32=b=new Int32Array(n),t.HEAPU8=h=new Uint8Array(n),t.HEAPU16=w=new Uint16Array(n),t.HEAPU32=T=new Uint32Array(n),t.HEAPF32=A=new Float32Array(n),t.HEAPF64=_=new Float64Array(n)}"undefined"!=typeof TextDecoder&&new TextDecoder("utf-16le");var x=t.TOTAL_MEMORY||16777216;function U(n){for(;0<n.length;){var e=n.shift();if("function"==typeof e)e();else{var r=e.oa;"number"==typeof r?void 0===e.ha?t.dynCall_v(r):t.dynCall_vi(r,e.ha):r(void 0===e.ha?null:e.ha)}}}(m=t.wasmMemory?t.wasmMemory:new WebAssembly.Memory({initial:x/65536}))&&(v=m.buffer),x=v.byteLength,k(v),b[2800]=5254256;var D=[],R=[],I=[],H=[];function O(){var n=t.preRun.shift();D.unshift(n)}var N=0,j=null,B=null;function M(n){throw t.onAbort&&t.onAbort(n),s(n),p(n),E=!0,new WebAssembly.RuntimeError("abort("+n+"). Build with -s ASSERTIONS=1 for more info.")}function L(){var n=V;return String.prototype.startsWith?n.startsWith("data:application/octet-stream;base64,"):0===n.indexOf("data:application/octet-stream;base64,")}t.preloadedImages={},t.preloadedAudios={};var V="app.wasm";if(!L()){var z=V;V=t.locateFile?t.locateFile(z,f):f+z}function q(){try{if(c)return new Uint8Array(c);throw"both async and sync fetching of the wasm failed"}catch(n){M(n)}}var $={1378:function(n,e){t.removeAttribute(n,t.UTF8ToString(e))},1480:function(n,e,r){t.setAttribute(n,t.UTF8ToString(e),t.UTF8ToString(r))},1597:function(n){t.ga[n].asmDomRaws=[]},1706:function(n,e){t.ga[n].asmDomRaws.push(t.UTF8ToString(e))},2091:function(n,e){e=t.UTF8ToString(e).replace(/^on/,""),(n=t.ga[n]).removeEventListener(e,t.ia,!1),delete n.asmDomEvents[e]},2279:function(n,e){(n=t.ga[n]).la=e,void 0===n.asmDomEvents&&(n.asmDomEvents={})},2940:function(n,e){e=t.UTF8ToString(e).replace(/^on/,""),(n=t.ga[n]).addEventListener(e,t.ia,!1),n.asmDomEvents[e]=t.ia},3130:function(n,e){return 0===e?t.createElement(t.UTF8ToString(n)):t.createElementNS(t.UTF8ToString(e),t.UTF8ToString(n))},3290:function(n){return t.createTextNode(t.UTF8ToString(n))},3356:function(){return t.createDocumentFragment()},3401:function(n){return t.createComment(t.UTF8ToString(n))},3464:function(n,e){t.appendChild(n,e)},3499:function(n,e,r){t.insertBefore(n,e,r)},3539:function(n){t.removeChild(n)},3567:function(n,e,r){t.insertBefore(n,e,t.nextSibling(r))},3626:function(n,e,r){t.insertBefore(n,e,r)},3663:function(n,e){t.sa(n,t.UTF8ToString(e))},3722:function(n,e){var r=t.parentNode(e);0!==r&&(t.insertBefore(r,n,t.nextSibling(e)),t.removeChild(e))},3867:function(){window.asmDomHelpers.eventProxy=function(n){return t.functionCallback(this.la,n.type,n)},t.ta=window.asmDomHelpers.domApi.addNode,t.createElement=window.asmDomHelpers.domApi.createElement,t.createElementNS=window.asmDomHelpers.domApi.createElementNS,t.createTextNode=window.asmDomHelpers.domApi.createTextNode,t.createComment=window.asmDomHelpers.domApi.createComment,t.createDocumentFragment=window.asmDomHelpers.domApi.createDocumentFragment,t.insertBefore=window.asmDomHelpers.domApi.insertBefore,t.removeChild=window.asmDomHelpers.domApi.removeChild,t.appendChild=window.asmDomHelpers.domApi.appendChild,t.removeAttribute=window.asmDomHelpers.domApi.removeAttribute,t.setAttribute=window.asmDomHelpers.domApi.setAttribute,t.parentNode=window.asmDomHelpers.domApi.parentNode,t.nextSibling=window.asmDomHelpers.domApi.nextSibling,t.sa=window.asmDomHelpers.domApi.setNodeValue,t.ga=window.asmDomHelpers.nodes,t.ia=window.asmDomHelpers.eventProxy}},G=[];R.push({oa:function(){Nn()}});var Z=[null,[],[]],J=0;function Y(){return b[(J+=4)-4>>2]}var K={};function Q(n){switch(n){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+n)}}var X=void 0;function nn(n){for(var e="";h[n];)e+=X[h[n++]];return e}var en={},rn={},tn={};function on(n){if(void 0===n)return"_unknown";var e=(n=n.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return 48<=e&&57>=e?"_"+n:n}function an(n,e){return n=on(n),new Function("body","return function "+n+'() {\n    "use strict";    return body.apply(this, arguments);\n};\n')(e)}function un(n){var e=Error,r=an(n,function(e){this.name=n,this.message=e,void 0!==(e=Error(e).stack)&&(this.stack=this.toString()+"\n"+e.replace(/^Error(:[^\n]*)?\n/,""))});return r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message},r}var fn=void 0;function cn(n){throw new fn(n)}var ln=void 0;function sn(n,e,r){if(r=r||{},!("argPackAdvance"in e))throw new TypeError("registerType registeredInstance requires argPackAdvance");var t=e.name;if(n||cn('type "'+t+'" must have a positive integer typeid pointer'),rn.hasOwnProperty(n)){if(r.pa)return;cn("Cannot register type '"+t+"' twice")}rn[n]=e,delete tn[n],en.hasOwnProperty(n)&&(e=en[n],delete en[n],e.forEach(function(n){n()}))}var pn=[],dn=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function mn(n){4<n&&0==--dn[n].ja&&(dn[n]=void 0,pn.push(n))}function vn(n){switch(n){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var e=pn.length?pn.pop():dn.length;return dn[e]={ja:1,value:n},e}}function yn(n){return this.fromWireType(T[n>>2])}function hn(n){if(null===n)return"null";var r=e(n);return"object"===r||"array"===r||"function"===r?n.toString():""+n}function gn(n,e){switch(e){case 2:return function(n){return this.fromWireType(A[n>>2])};case 3:return function(n){return this.fromWireType(_[n>>3])};default:throw new TypeError("Unknown float type: "+n)}}function wn(n){var r=Function;if(!(r instanceof Function))throw new TypeError("new_ called with constructor type "+e(r)+" which is not a function");var t=an(r.name||"unknownFunctionName",function(){});return t.prototype=r.prototype,t=new t,(n=r.apply(t,n))instanceof Object?n:t}function bn(n){for(;n.length;){var e=n.pop();n.pop()(e)}}function Tn(n,e,r){t.hasOwnProperty(n)?((void 0===r||void 0!==t[n].ea&&void 0!==t[n].ea[r])&&cn("Cannot register public name '"+n+"' twice"),function(n,e){var r=t;if(void 0===r[n].ea){var o=r[n];r[n]=function(){return r[n].ea.hasOwnProperty(arguments.length)||cn("Function '"+e+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+r[n].ea+")!"),r[n].ea[arguments.length].apply(this,arguments)},r[n].ea=[],r[n].ea[o.ka]=o}}(n,n),t.hasOwnProperty(r)&&cn("Cannot register multiple overloads of a function with the same number of arguments ("+r+")!"),t[n].ea[r]=e):(t[n]=e,void 0!==r&&(t[n].Ba=r))}var An=void 0;function _n(n){var e=nn(n=Vn(n));return Ln(n),e}function Cn(n,e,r){switch(e){case 0:return r?function(n){return y[n]}:function(n){return h[n]};case 1:return r?function(n){return g[n>>1]}:function(n){return w[n>>1]};case 2:return r?function(n){return b[n>>2]}:function(n){return T[n>>2]};default:throw new TypeError("Unknown integer type: "+n)}}function En(n){return n||cn("Cannot use deleted val. handle = "+n),dn[n].value}function Sn(n,e){var r=rn[n];return void 0===r&&cn(e+" has unknown type "+_n(n)),r}var Pn={};function Fn(n){var e=Pn[n];return void 0===e?nn(n):e}var Wn=[];function kn(){return"object"===("undefined"==typeof globalThis?"undefined":e(globalThis))?globalThis:Function("return this")()}var xn={};function Un(){if(!Dn){var n,r={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"===("undefined"==typeof navigator?"undefined":e(navigator))&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:a};for(n in xn)r[n]=xn[n];var t=[];for(n in r)t.push(n+"="+r[n]);Dn=t}return Dn}for(var Dn,Rn=Array(256),In=0;256>In;++In)Rn[In]=String.fromCharCode(In);X=Rn,fn=t.BindingError=un("BindingError"),ln=t.InternalError=un("InternalError"),t.count_emval_handles=function(){for(var n=0,e=5;e<dn.length;++e)void 0!==dn[e]&&++n;return n},t.get_first_emval=function(){for(var n=5;n<dn.length;++n)if(void 0!==dn[n])return dn[n];return null},An=t.UnboundTypeError=un("UnboundTypeError");var Hn={k:function(n){return jn(n)},j:function(n){throw"uncaught_exception"in Mn?Mn.ma++:Mn.ma=1,n},H:function(){},E:function(){return t.___errno_location&&(b[t.___errno_location()>>2]=63),-1},D:function(n,e){J=e;try{var r=Y(),t=Y();if(-1===r||0===t)var o=-28;else{var i=K.ra[r];if(i&&t===i.ya){var a=(void 0).xa(i.wa);K.va(r,a,t,i.flags),(void 0).Aa(a),K.ra[r]=null,i.ua&&Ln(i.za)}o=0}return o}catch(u){return M(u),-u.na}},q:function(){},B:function(n,e,r,t,o){var i=Q(r);sn(n,{name:e=nn(e),fromWireType:function(n){return!!n},toWireType:function(n,e){return e?t:o},argPackAdvance:8,readValueFromPointer:function(n){if(1===r)var t=y;else if(2===r)t=g;else{if(4!==r)throw new TypeError("Unknown boolean type size: "+e);t=b}return this.fromWireType(t[n>>i])},fa:null})},z:function(n,e){sn(n,{name:e=nn(e),fromWireType:function(n){var e=dn[n].value;return mn(n),e},toWireType:function(n,e){return vn(e)},argPackAdvance:8,readValueFromPointer:yn,fa:null})},o:function(n,e,r){r=Q(r),sn(n,{name:e=nn(e),fromWireType:function(n){return n},toWireType:function(n,e){if("number"!=typeof e&&"boolean"!=typeof e)throw new TypeError('Cannot convert "'+hn(e)+'" to '+this.name);return e},argPackAdvance:8,readValueFromPointer:gn(e,r),fa:null})},K:function(n,e,r,o,i,a){var u=function(n,e){for(var r=[],t=0;t<n;t++)r.push(b[(e>>2)+t]);return r}(e,r);n=nn(n),i=function(n,e){if(n=nn(n),void 0!==t["FUNCTION_TABLE_"+n])var r=t["FUNCTION_TABLE_"+n][e];else if("undefined"!=typeof FUNCTION_TABLE)r=FUNCTION_TABLE[e];else{void 0===(r=t["dynCall_"+n])&&void 0===(r=t["dynCall_"+n.replace(/f/g,"d")])&&cn("No dynCall invoker for signature: "+n);for(var o=[],i=1;i<n.length;++i)o.push("a"+i);i="return function dynCall_"+n+"_"+e+"("+o.join(", ")+") {\n",i+="    return dynCall(rawFunction"+(o.length?", ":"")+o.join(", ")+");\n",r=new Function("dynCall","rawFunction",i+"};\n")(r,e)}return"function"!=typeof r&&cn("unknown function pointer with signature "+n+": "+e),r}(o,i),Tn(n,function(){!function(n,e){var r=[],t={};throw e.forEach(function n(e){t[e]||rn[e]||(tn[e]?tn[e].forEach(n):(r.push(e),t[e]=!0))}),new An(n+": "+r.map(_n).join([", "]))}("Cannot call "+n+" due to unbound types",u)},e-1),function(n,e){function r(n){if((n=e(n)).length!==t.length)throw new ln("Mismatched type converter count");for(var r=0;r<t.length;++r)sn(t[r],n[r])}var t=[];t.forEach(function(e){tn[e]=n});var o=Array(n.length),i=[],a=0;n.forEach(function(n,e){rn.hasOwnProperty(n)?o[e]=rn[n]:(i.push(n),en.hasOwnProperty(n)||(en[n]=[]),en[n].push(function(){o[e]=rn[n],++a===i.length&&r(o)}))}),0===i.length&&r(o)}(u,function(r){var o=n,u=n;r=[r[0],null].concat(r.slice(1));var f=i,c=r.length;2>c&&cn("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var l=null!==r[1]&&!1,s=!1,p=1;p<r.length;++p)if(null!==r[p]&&void 0===r[p].fa){s=!0;break}var d="void"!==r[0].name,m="",v="";for(p=0;p<c-2;++p)m+=(0!==p?", ":"")+"arg"+p,v+=(0!==p?", ":"")+"arg"+p+"Wired";u="return function "+on(u)+"("+m+") {\nif (arguments.length !== "+(c-2)+") {\nthrowBindingError('function "+u+" called with ' + arguments.length + ' arguments, expected "+(c-2)+" args!');\n}\n",s&&(u+="var destructors = [];\n");var y=s?"destructors":"null";for(m="throwBindingError invoker fn runDestructors retType classParam".split(" "),f=[cn,f,a,bn,r[0],r[1]],l&&(u+="var thisWired = classParam.toWireType("+y+", this);\n"),p=0;p<c-2;++p)u+="var arg"+p+"Wired = argType"+p+".toWireType("+y+", arg"+p+"); // "+r[p+2].name+"\n",m.push("argType"+p),f.push(r[p+2]);if(l&&(v="thisWired"+(0<v.length?", ":"")+v),u+=(d?"var rv = ":"")+"invoker(fn"+(0<v.length?", ":"")+v+");\n",s)u+="runDestructors(destructors);\n";else for(p=l?1:2;p<r.length;++p)c=1===p?"thisWired":"arg"+(p-2)+"Wired",null!==r[p].fa&&(u+=c+"_dtor("+c+"); // "+r[p].name+"\n",m.push(c+"_dtor"),f.push(r[p].fa));if(d&&(u+="var ret = retType.fromWireType(rv);\nreturn ret;\n"),m.push(u+"}\n"),r=wn(m).apply(null,f),p=e-1,!t.hasOwnProperty(o))throw new ln("Replacing nonexistant public symbol");return void 0!==t[o].ea&&void 0!==p?t[o].ea[p]=r:(t[o]=r,t[o].ka=p),[]})},g:function(n,e,r,t,o){function i(n){return n}e=nn(e),-1===o&&(o=4294967295);var a=Q(r);if(0===t){var u=32-8*r;i=function(n){return n<<u>>>u}}var f=-1!=e.indexOf("unsigned");sn(n,{name:e,fromWireType:i,toWireType:function(n,r){if("number"!=typeof r&&"boolean"!=typeof r)throw new TypeError('Cannot convert "'+hn(r)+'" to '+this.name);if(r<t||r>o)throw new TypeError('Passing a number "'+hn(r)+'" from JS side to C/C++ side to an argument of type "'+e+'", which is outside the valid range ['+t+", "+o+"]!");return f?r>>>0:0|r},argPackAdvance:8,readValueFromPointer:Cn(e,a,0!==t),fa:null})},e:function(n,e,r){function t(n){n>>=2;var e=T;return new o(e.buffer,e[n+1],e[n])}var o=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][e];sn(n,{name:r=nn(r),fromWireType:t,argPackAdvance:8,readValueFromPointer:t},{pa:!0})},p:function(n,e){var r="std::string"===(e=nn(e));sn(n,{name:e,fromWireType:function(n){var e=T[n>>2];if(r){var t=h[n+4+e],o=0;0!=t&&(o=t,h[n+4+e]=0);var i=n+4;for(t=0;t<=e;++t){var a=n+4+t;if(0==h[a]){if(i=F(i),void 0===u)var u=i;else u+=String.fromCharCode(0),u+=i;i=a+1}}0!=o&&(h[n+4+e]=o)}else{for(u=Array(e),t=0;t<e;++t)u[t]=String.fromCharCode(h[n+4+t]);u=u.join("")}return Ln(n),u},toWireType:function(n,e){e instanceof ArrayBuffer&&(e=new Uint8Array(e));var t="string"==typeof e;t||e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Int8Array||cn("Cannot pass non-string to std::string");var o=(r&&t?function(){for(var n=0,r=0;r<e.length;++r){var t=e.charCodeAt(r);55296<=t&&57343>=t&&(t=65536+((1023&t)<<10)|1023&e.charCodeAt(++r)),127>=t?++n:n=2047>=t?n+2:65535>=t?n+3:n+4}return n}:function(){return e.length})(),i=jn(4+o+1);if(T[i>>2]=o,r&&t)!function(n,e,r){var t=h;if(0<r){r=e+r-1;for(var o=0;o<n.length;++o){var i=n.charCodeAt(o);if(55296<=i&&57343>=i&&(i=65536+((1023&i)<<10)|1023&n.charCodeAt(++o)),127>=i){if(e>=r)break;t[e++]=i}else{if(2047>=i){if(e+1>=r)break;t[e++]=192|i>>6}else{if(65535>=i){if(e+2>=r)break;t[e++]=224|i>>12}else{if(e+3>=r)break;t[e++]=240|i>>18,t[e++]=128|i>>12&63}t[e++]=128|i>>6&63}t[e++]=128|63&i}}t[e]=0}}(e,i+4,o+1);else if(t)for(t=0;t<o;++t){var a=e.charCodeAt(t);255<a&&(Ln(i),cn("String has UTF-16 code units that do not fit in 8 bits")),h[i+4+t]=a}else for(t=0;t<o;++t)h[i+4+t]=e[t];return null!==n&&n.push(Ln,i),i},argPackAdvance:8,readValueFromPointer:yn,fa:function(n){Ln(n)}})},A:function(n,e,r){if(r=nn(r),2===e)var t=function(){return w},o=1;else 4===e&&(t=function(){return T},o=2);sn(n,{name:r,fromWireType:function(n){for(var e=t(),r=T[n>>2],i=Array(r),a=n+4>>o,u=0;u<r;++u)i[u]=String.fromCharCode(e[a+u]);return Ln(n),i.join("")},toWireType:function(n,r){var i=r.length,a=jn(4+i*e),u=t();T[a>>2]=i;for(var f=a+4>>o,c=0;c<i;++c)u[f+c]=r.charCodeAt(c);return null!==n&&n.push(Ln,a),a},argPackAdvance:8,readValueFromPointer:yn,fa:function(n){Ln(n)}})},C:function(n,e){sn(n,{qa:!0,name:e=nn(e),argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},h:function(n,e,r){n=En(n),e=Sn(e,"emval::as");var t=[],o=vn(t);return b[r>>2]=o,e.toWireType(t,n)},t:function(n,e,r,t,o){n=Wn[n],e=En(e),r=Fn(r);var i=[];return b[t>>2]=vn(i),n(e,r,i,o)},a:mn,m:function(n){return 0===n?vn(kn()):(n=Fn(n),vn(kn()[n]))},u:function(n,e){for(var r=(e=function(n,e){for(var r=Array(n),t=0;t<n;++t)r[t]=Sn(b[(e>>2)+t],"parameter "+t);return r}(n,e))[0],t=r.name+"_$"+e.slice(1).map(function(n){return n.name}).join("_")+"$",o=["retType"],i=[r],a="",u=0;u<n-1;++u)a+=(0!==u?", ":"")+"arg"+u,o.push("argType"+u),i.push(e[1+u]);t="return function "+on("methodCaller_"+t)+"(handle, name, destructors, args) {\n";var f=0;for(u=0;u<n-1;++u)t+="    var arg"+u+" = argType"+u+".readValueFromPointer(args"+(f?"+"+f:"")+");\n",f+=e[u+1].argPackAdvance;for(t+="    var rv = handle[name]("+a+");\n",u=0;u<n-1;++u)e[u+1].deleteObject&&(t+="    argType"+u+".deleteObject(arg"+u+");\n");return r.qa||(t+="    return retType.toWireType(destructors, rv);\n"),o.push(t+"};\n"),function(n){var e=Wn.length;return Wn.push(n),e}(n=wn(o).apply(null,i))},b:function(n,e){return vn((n=En(n))[e=En(e)])},l:function(n){4<n&&(dn[n].ja+=1)},c:function(n){return vn(Fn(n))},f:function(n){bn(dn[n].value),mn(n)},s:function(n,e,r){n=En(n),e=En(e),r=En(r),n[e]=r},r:function(n,e){return(n=En(n))===(e=En(e))},i:function(n,e){return vn(n=(n=Sn(n,"_emval_take_value")).readValueFromPointer(e))},n:function(){M()},d:function(n,e,r){n:for(G.length=0;;){var t=h[e++];if(!t){e=G;break n}100===t||102===t?(r=d(r,8),G.push(_[r>>3]),r+=8):105===t&&(r=d(r,4),G.push(b[r>>2]),r+=4)}return $[n].apply(null,e)},x:function(n,e,r){h.set(h.subarray(e,e+r),n)},y:function(n){if(2147418112<n)return!1;for(var e=Math.max(y.length,16777216);e<n;)e=536870912>=e?W(2*e):Math.min(W((3*e+2147483648)/4),2147418112);n:{try{m.grow(e-v.byteLength+65535>>16),k(m.buffer);var r=1;break n}catch(t){}r=void 0}return!!r},F:function(n,e){var r=0;return Un().forEach(function(t,o){var i=e+r;for(o=b[n+4*o>>2]=i,i=0;i<t.length;++i)y[o++>>0]=t.charCodeAt(i);y[o>>0]=0,r+=t.length+1}),0},G:function(n,e){var r=Un();b[n>>2]=r.length;var t=0;return r.forEach(function(n){t+=n.length+1}),b[e>>2]=t,0},J:function(){return 0},v:function(){return 0},I:function(n,e,r,t){try{for(var o=0,i=0;i<r;i++){for(var a=b[e+8*i>>2],u=b[e+(8*i+4)>>2],f=0;f<u;f++){var c=h[a+f],l=Z[n];0===c||10===c?((1===n?s:p)(P(l,0)),l.length=0):l.push(c)}o+=u}return b[t>>2]=o,0}catch(d){return M(d),d.na}},memory:m,w:function(){},table:C},On=function(){function n(n){t.asm=n.exports,N--,t.monitorRunDependencies&&t.monitorRunDependencies(N),0==N&&(null!==j&&(clearInterval(j),j=null),B&&(n=B,B=null,n()))}function e(e){n(e.instance)}function r(n){return(c||"function"!=typeof fetch?new Promise(function(n){n(q())}):fetch(V,{credentials:"same-origin"}).then(function(n){if(!n.ok)throw"failed to load wasm binary file at '"+V+"'";return n.arrayBuffer()}).catch(function(){return q()})).then(function(n){return WebAssembly.instantiate(n,o)}).then(n,function(n){p("failed to asynchronously prepare wasm: "+n),M(n)})}var o={env:Hn,wasi_unstable:Hn};if(N++,t.monitorRunDependencies&&t.monitorRunDependencies(N),t.instantiateWasm)try{return t.instantiateWasm(o,n)}catch(i){return p("Module.instantiateWasm callback failed with error: "+i),!1}return function(){if(c||"function"!=typeof WebAssembly.instantiateStreaming||L()||"function"!=typeof fetch)return r(e);fetch(V,{credentials:"same-origin"}).then(function(n){return WebAssembly.instantiateStreaming(n,o).then(e,function(n){p("wasm streaming compile failed: "+n),p("falling back to ArrayBuffer instantiation"),r(e)})})}(),{}}();t.asm=On;var Nn=t.___wasm_call_ctors=function(){return t.asm.L.apply(null,arguments)},jn=t._malloc=function(){return t.asm.M.apply(null,arguments)};t._main=function(){return t.asm.N.apply(null,arguments)};var Bn,Mn=t.__ZSt18uncaught_exceptionv=function(){return t.asm.O.apply(null,arguments)},Ln=t._free=function(){return t.asm.P.apply(null,arguments)},Vn=t.___getTypeName=function(){return t.asm.Q.apply(null,arguments)};function zn(n){this.name="ExitStatus",this.message="Program terminated with exit("+n+")",this.status=n}function qn(){function n(){if(!Bn&&(Bn=!0,!E)){if(U(R),U(I),t.onRuntimeInitialized&&t.onRuntimeInitialized(),$n){var n=t._main;try{var r=n(0,0);l&&0===r||(!l&&(E=!0,t.onExit)&&t.onExit(r),u(r,new zn(r)))}catch(o){o instanceof zn||("SimulateInfiniteLoop"==o?l=!0:((n=o)&&"object"===e(o)&&o.stack&&(n=[o,o.stack]),p("exception thrown: "+n),u(1,o)))}}if(t.postRun)for("function"==typeof t.postRun&&(t.postRun=[t.postRun]);t.postRun.length;)n=t.postRun.shift(),H.unshift(n);U(H)}}if(!(0<N)){if(t.preRun)for("function"==typeof t.preRun&&(t.preRun=[t.preRun]);t.preRun.length;)O();U(D),0<N||(t.setStatus?(t.setStatus("Running..."),setTimeout(function(){setTimeout(function(){t.setStatus("")},1),n()},1)):n())}}if(t.___embind_register_native_and_builtin_types=function(){return t.asm.R.apply(null,arguments)},t.dynCall_iii=function(){return t.asm.S.apply(null,arguments)},t.dynCall_ii=function(){return t.asm.T.apply(null,arguments)},t.dynCall_vi=function(){return t.asm.U.apply(null,arguments)},t.dynCall_iiiii=function(){return t.asm.V.apply(null,arguments)},t.dynCall_viiii=function(){return t.asm.W.apply(null,arguments)},t.dynCall_iiiiiiiii=function(){return t.asm.X.apply(null,arguments)},t.dynCall_iiiiii=function(){return t.asm.Y.apply(null,arguments)},t.dynCall_iiii=function(){return t.asm.Z.apply(null,arguments)},t.dynCall_jiji=function(){return t.asm._.apply(null,arguments)},t.dynCall_iidiiii=function(){return t.asm.$.apply(null,arguments)},t.dynCall_vii=function(){return t.asm.aa.apply(null,arguments)},t.dynCall_v=function(){return t.asm.ba.apply(null,arguments)},t.dynCall_viiiiii=function(){return t.asm.ca.apply(null,arguments)},t.dynCall_viiiii=function(){return t.asm.da.apply(null,arguments)},t.asm=On,t.UTF8ToString=F,t.then=function(n){if(Bn)n(t);else{var e=t.onRuntimeInitialized;t.onRuntimeInitialized=function(){e&&e(),n(t)}}return t},B=function n(){Bn||qn(),Bn||(B=n)},t.run=qn,t.preInit)for("function"==typeof t.preInit&&(t.preInit=[t.preInit]);0<t.preInit.length;)t.preInit.pop()();var $n=!0;return t.noInitialRun&&($n=!1),l=!0,qn(),r}}();"object"===("undefined"==typeof exports?"undefined":e(exports))&&"object"===("undefined"==typeof module?"undefined":e(module))?module.exports=r:"function"==typeof n&&n.amd?n([],function(){return r}):"object"===("undefined"==typeof exports?"undefined":e(exports))&&(exports.Module=r);
},{}]},{},["I7/F"], null)
//# sourceMappingURL=/app.912abccd.map