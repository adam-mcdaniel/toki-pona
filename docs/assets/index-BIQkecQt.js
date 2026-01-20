(function() {
  const i = document.createElement("link").relList;
  if (i && i.supports && i.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) f(o);
  new MutationObserver((o) => {
    for (const h of o) if (h.type === "childList") for (const d of h.addedNodes) d.tagName === "LINK" && d.rel === "modulepreload" && f(d);
  }).observe(document, { childList: true, subtree: true });
  function c(o) {
    const h = {};
    return o.integrity && (h.integrity = o.integrity), o.referrerPolicy && (h.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? h.credentials = "include" : o.crossOrigin === "anonymous" ? h.credentials = "omit" : h.credentials = "same-origin", h;
  }
  function f(o) {
    if (o.ep) return;
    o.ep = true;
    const h = c(o);
    fetch(o.href, h);
  }
})();
function g0(l3) {
  return l3 && l3.__esModule && Object.prototype.hasOwnProperty.call(l3, "default") ? l3.default : l3;
}
function Av(l3) {
  if (Object.prototype.hasOwnProperty.call(l3, "__esModule")) return l3;
  var i = l3.default;
  if (typeof i == "function") {
    var c = function f() {
      var o = false;
      try {
        o = this instanceof f;
      } catch {
      }
      return o ? Reflect.construct(i, arguments, this.constructor) : i.apply(this, arguments);
    };
    c.prototype = i.prototype;
  } else c = {};
  return Object.defineProperty(c, "__esModule", { value: true }), Object.keys(l3).forEach(function(f) {
    var o = Object.getOwnPropertyDescriptor(l3, f);
    Object.defineProperty(c, f, o.get ? o : { enumerable: true, get: function() {
      return l3[f];
    } });
  }), c;
}
var Af = { exports: {} }, kl = {};
var _m;
function xv() {
  if (_m) return kl;
  _m = 1;
  var l3 = /* @__PURE__ */ Symbol.for("react.transitional.element"), i = /* @__PURE__ */ Symbol.for("react.fragment");
  function c(f, o, h) {
    var d = null;
    if (h !== void 0 && (d = "" + h), o.key !== void 0 && (d = "" + o.key), "key" in o) {
      h = {};
      for (var y in o) y !== "key" && (h[y] = o[y]);
    } else h = o;
    return o = h.ref, { $$typeof: l3, type: f, key: d, ref: o !== void 0 ? o : null, props: h };
  }
  return kl.Fragment = i, kl.jsx = c, kl.jsxs = c, kl;
}
var bm;
function Mv() {
  return bm || (bm = 1, Af.exports = xv()), Af.exports;
}
var bt = Mv(), xf = { exports: {} }, ot = {};
var Sm;
function Ov() {
  if (Sm) return ot;
  Sm = 1;
  var l3 = /* @__PURE__ */ Symbol.for("react.transitional.element"), i = /* @__PURE__ */ Symbol.for("react.portal"), c = /* @__PURE__ */ Symbol.for("react.fragment"), f = /* @__PURE__ */ Symbol.for("react.strict_mode"), o = /* @__PURE__ */ Symbol.for("react.profiler"), h = /* @__PURE__ */ Symbol.for("react.consumer"), d = /* @__PURE__ */ Symbol.for("react.context"), y = /* @__PURE__ */ Symbol.for("react.forward_ref"), v = /* @__PURE__ */ Symbol.for("react.suspense"), p = /* @__PURE__ */ Symbol.for("react.memo"), S = /* @__PURE__ */ Symbol.for("react.lazy"), E = /* @__PURE__ */ Symbol.for("react.activity"), z = Symbol.iterator;
  function w(b) {
    return b === null || typeof b != "object" ? null : (b = z && b[z] || b["@@iterator"], typeof b == "function" ? b : null);
  }
  var j = { isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, W = Object.assign, lt = {};
  function Z(b, U, K) {
    this.props = b, this.context = U, this.refs = lt, this.updater = K || j;
  }
  Z.prototype.isReactComponent = {}, Z.prototype.setState = function(b, U) {
    if (typeof b != "object" && typeof b != "function" && b != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, b, U, "setState");
  }, Z.prototype.forceUpdate = function(b) {
    this.updater.enqueueForceUpdate(this, b, "forceUpdate");
  };
  function X() {
  }
  X.prototype = Z.prototype;
  function G(b, U, K) {
    this.props = b, this.context = U, this.refs = lt, this.updater = K || j;
  }
  var $ = G.prototype = new X();
  $.constructor = G, W($, Z.prototype), $.isPureReactComponent = true;
  var L = Array.isArray;
  function V() {
  }
  var R = { H: null, A: null, T: null, S: null }, Y = Object.prototype.hasOwnProperty;
  function tt(b, U, K) {
    var k = K.ref;
    return { $$typeof: l3, type: b, key: U, ref: k !== void 0 ? k : null, props: K };
  }
  function I(b, U) {
    return tt(b.type, U, b.props);
  }
  function rt(b) {
    return typeof b == "object" && b !== null && b.$$typeof === l3;
  }
  function ft(b) {
    var U = { "=": "=0", ":": "=2" };
    return "$" + b.replace(/[=:]/g, function(K) {
      return U[K];
    });
  }
  var wt = /\/+/g;
  function O(b, U) {
    return typeof b == "object" && b !== null && b.key != null ? ft("" + b.key) : U.toString(36);
  }
  function J(b) {
    switch (b.status) {
      case "fulfilled":
        return b.value;
      case "rejected":
        throw b.reason;
      default:
        switch (typeof b.status == "string" ? b.then(V, V) : (b.status = "pending", b.then(function(U) {
          b.status === "pending" && (b.status = "fulfilled", b.value = U);
        }, function(U) {
          b.status === "pending" && (b.status = "rejected", b.reason = U);
        })), b.status) {
          case "fulfilled":
            return b.value;
          case "rejected":
            throw b.reason;
        }
    }
    throw b;
  }
  function g(b, U, K, k, it) {
    var ct = typeof b;
    (ct === "undefined" || ct === "boolean") && (b = null);
    var st = false;
    if (b === null) st = true;
    else switch (ct) {
      case "bigint":
      case "string":
      case "number":
        st = true;
        break;
      case "object":
        switch (b.$$typeof) {
          case l3:
          case i:
            st = true;
            break;
          case S:
            return st = b._init, g(st(b._payload), U, K, k, it);
        }
    }
    if (st) return it = it(b), st = k === "" ? "." + O(b, 0) : k, L(it) ? (K = "", st != null && (K = st.replace(wt, "$&/") + "/"), g(it, U, K, "", function(el) {
      return el;
    })) : it != null && (rt(it) && (it = I(it, K + (it.key == null || b && b.key === it.key ? "" : ("" + it.key).replace(wt, "$&/") + "/") + st)), U.push(it)), 1;
    st = 0;
    var Dt = k === "" ? "." : k + ":";
    if (L(b)) for (var Ct = 0; Ct < b.length; Ct++) k = b[Ct], ct = Dt + O(k, Ct), st += g(k, U, K, ct, it);
    else if (Ct = w(b), typeof Ct == "function") for (b = Ct.call(b), Ct = 0; !(k = b.next()).done; ) k = k.value, ct = Dt + O(k, Ct++), st += g(k, U, K, ct, it);
    else if (ct === "object") {
      if (typeof b.then == "function") return g(J(b), U, K, k, it);
      throw U = String(b), Error("Objects are not valid as a React child (found: " + (U === "[object Object]" ? "object with keys {" + Object.keys(b).join(", ") + "}" : U) + "). If you meant to render a collection of children, use an array instead.");
    }
    return st;
  }
  function D(b, U, K) {
    if (b == null) return b;
    var k = [], it = 0;
    return g(b, k, "", "", function(ct) {
      return U.call(K, ct, it++);
    }), k;
  }
  function Q(b) {
    if (b._status === -1) {
      var U = b._result;
      U = U(), U.then(function(K) {
        (b._status === 0 || b._status === -1) && (b._status = 1, b._result = K);
      }, function(K) {
        (b._status === 0 || b._status === -1) && (b._status = 2, b._result = K);
      }), b._status === -1 && (b._status = 0, b._result = U);
    }
    if (b._status === 1) return b._result.default;
    throw b._result;
  }
  var F = typeof reportError == "function" ? reportError : function(b) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var U = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof b == "object" && b !== null && typeof b.message == "string" ? String(b.message) : String(b), error: b });
      if (!window.dispatchEvent(U)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", b);
      return;
    }
    console.error(b);
  }, P = { map: D, forEach: function(b, U, K) {
    D(b, function() {
      U.apply(this, arguments);
    }, K);
  }, count: function(b) {
    var U = 0;
    return D(b, function() {
      U++;
    }), U;
  }, toArray: function(b) {
    return D(b, function(U) {
      return U;
    }) || [];
  }, only: function(b) {
    if (!rt(b)) throw Error("React.Children.only expected to receive a single React element child.");
    return b;
  } };
  return ot.Activity = E, ot.Children = P, ot.Component = Z, ot.Fragment = c, ot.Profiler = o, ot.PureComponent = G, ot.StrictMode = f, ot.Suspense = v, ot.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = R, ot.__COMPILER_RUNTIME = { __proto__: null, c: function(b) {
    return R.H.useMemoCache(b);
  } }, ot.cache = function(b) {
    return function() {
      return b.apply(null, arguments);
    };
  }, ot.cacheSignal = function() {
    return null;
  }, ot.cloneElement = function(b, U, K) {
    if (b == null) throw Error("The argument must be a React element, but you passed " + b + ".");
    var k = W({}, b.props), it = b.key;
    if (U != null) for (ct in U.key !== void 0 && (it = "" + U.key), U) !Y.call(U, ct) || ct === "key" || ct === "__self" || ct === "__source" || ct === "ref" && U.ref === void 0 || (k[ct] = U[ct]);
    var ct = arguments.length - 2;
    if (ct === 1) k.children = K;
    else if (1 < ct) {
      for (var st = Array(ct), Dt = 0; Dt < ct; Dt++) st[Dt] = arguments[Dt + 2];
      k.children = st;
    }
    return tt(b.type, it, k);
  }, ot.createContext = function(b) {
    return b = { $$typeof: d, _currentValue: b, _currentValue2: b, _threadCount: 0, Provider: null, Consumer: null }, b.Provider = b, b.Consumer = { $$typeof: h, _context: b }, b;
  }, ot.createElement = function(b, U, K) {
    var k, it = {}, ct = null;
    if (U != null) for (k in U.key !== void 0 && (ct = "" + U.key), U) Y.call(U, k) && k !== "key" && k !== "__self" && k !== "__source" && (it[k] = U[k]);
    var st = arguments.length - 2;
    if (st === 1) it.children = K;
    else if (1 < st) {
      for (var Dt = Array(st), Ct = 0; Ct < st; Ct++) Dt[Ct] = arguments[Ct + 2];
      it.children = Dt;
    }
    if (b && b.defaultProps) for (k in st = b.defaultProps, st) it[k] === void 0 && (it[k] = st[k]);
    return tt(b, ct, it);
  }, ot.createRef = function() {
    return { current: null };
  }, ot.forwardRef = function(b) {
    return { $$typeof: y, render: b };
  }, ot.isValidElement = rt, ot.lazy = function(b) {
    return { $$typeof: S, _payload: { _status: -1, _result: b }, _init: Q };
  }, ot.memo = function(b, U) {
    return { $$typeof: p, type: b, compare: U === void 0 ? null : U };
  }, ot.startTransition = function(b) {
    var U = R.T, K = {};
    R.T = K;
    try {
      var k = b(), it = R.S;
      it !== null && it(K, k), typeof k == "object" && k !== null && typeof k.then == "function" && k.then(V, F);
    } catch (ct) {
      F(ct);
    } finally {
      U !== null && K.types !== null && (U.types = K.types), R.T = U;
    }
  }, ot.unstable_useCacheRefresh = function() {
    return R.H.useCacheRefresh();
  }, ot.use = function(b) {
    return R.H.use(b);
  }, ot.useActionState = function(b, U, K) {
    return R.H.useActionState(b, U, K);
  }, ot.useCallback = function(b, U) {
    return R.H.useCallback(b, U);
  }, ot.useContext = function(b) {
    return R.H.useContext(b);
  }, ot.useDebugValue = function() {
  }, ot.useDeferredValue = function(b, U) {
    return R.H.useDeferredValue(b, U);
  }, ot.useEffect = function(b, U) {
    return R.H.useEffect(b, U);
  }, ot.useEffectEvent = function(b) {
    return R.H.useEffectEvent(b);
  }, ot.useId = function() {
    return R.H.useId();
  }, ot.useImperativeHandle = function(b, U, K) {
    return R.H.useImperativeHandle(b, U, K);
  }, ot.useInsertionEffect = function(b, U) {
    return R.H.useInsertionEffect(b, U);
  }, ot.useLayoutEffect = function(b, U) {
    return R.H.useLayoutEffect(b, U);
  }, ot.useMemo = function(b, U) {
    return R.H.useMemo(b, U);
  }, ot.useOptimistic = function(b, U) {
    return R.H.useOptimistic(b, U);
  }, ot.useReducer = function(b, U, K) {
    return R.H.useReducer(b, U, K);
  }, ot.useRef = function(b) {
    return R.H.useRef(b);
  }, ot.useState = function(b) {
    return R.H.useState(b);
  }, ot.useSyncExternalStore = function(b, U, K) {
    return R.H.useSyncExternalStore(b, U, K);
  }, ot.useTransition = function() {
    return R.H.useTransition();
  }, ot.version = "19.2.3", ot;
}
var Tm;
function Ln() {
  return Tm || (Tm = 1, xf.exports = Ov()), xf.exports;
}
var Ve = Ln();
const Vt = g0(Ve);
var Mf = { exports: {} }, Wl = {}, Of = { exports: {} }, Nf = {};
var Em;
function Nv() {
  return Em || (Em = 1, (function(l3) {
    function i(g, D) {
      var Q = g.length;
      g.push(D);
      t: for (; 0 < Q; ) {
        var F = Q - 1 >>> 1, P = g[F];
        if (0 < o(P, D)) g[F] = D, g[Q] = P, Q = F;
        else break t;
      }
    }
    function c(g) {
      return g.length === 0 ? null : g[0];
    }
    function f(g) {
      if (g.length === 0) return null;
      var D = g[0], Q = g.pop();
      if (Q !== D) {
        g[0] = Q;
        t: for (var F = 0, P = g.length, b = P >>> 1; F < b; ) {
          var U = 2 * (F + 1) - 1, K = g[U], k = U + 1, it = g[k];
          if (0 > o(K, Q)) k < P && 0 > o(it, K) ? (g[F] = it, g[k] = Q, F = k) : (g[F] = K, g[U] = Q, F = U);
          else if (k < P && 0 > o(it, Q)) g[F] = it, g[k] = Q, F = k;
          else break t;
        }
      }
      return D;
    }
    function o(g, D) {
      var Q = g.sortIndex - D.sortIndex;
      return Q !== 0 ? Q : g.id - D.id;
    }
    if (l3.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var h = performance;
      l3.unstable_now = function() {
        return h.now();
      };
    } else {
      var d = Date, y = d.now();
      l3.unstable_now = function() {
        return d.now() - y;
      };
    }
    var v = [], p = [], S = 1, E = null, z = 3, w = false, j = false, W = false, lt = false, Z = typeof setTimeout == "function" ? setTimeout : null, X = typeof clearTimeout == "function" ? clearTimeout : null, G = typeof setImmediate < "u" ? setImmediate : null;
    function $(g) {
      for (var D = c(p); D !== null; ) {
        if (D.callback === null) f(p);
        else if (D.startTime <= g) f(p), D.sortIndex = D.expirationTime, i(v, D);
        else break;
        D = c(p);
      }
    }
    function L(g) {
      if (W = false, $(g), !j) if (c(v) !== null) j = true, V || (V = true, ft());
      else {
        var D = c(p);
        D !== null && J(L, D.startTime - g);
      }
    }
    var V = false, R = -1, Y = 5, tt = -1;
    function I() {
      return lt ? true : !(l3.unstable_now() - tt < Y);
    }
    function rt() {
      if (lt = false, V) {
        var g = l3.unstable_now();
        tt = g;
        var D = true;
        try {
          t: {
            j = false, W && (W = false, X(R), R = -1), w = true;
            var Q = z;
            try {
              e: {
                for ($(g), E = c(v); E !== null && !(E.expirationTime > g && I()); ) {
                  var F = E.callback;
                  if (typeof F == "function") {
                    E.callback = null, z = E.priorityLevel;
                    var P = F(E.expirationTime <= g);
                    if (g = l3.unstable_now(), typeof P == "function") {
                      E.callback = P, $(g), D = true;
                      break e;
                    }
                    E === c(v) && f(v), $(g);
                  } else f(v);
                  E = c(v);
                }
                if (E !== null) D = true;
                else {
                  var b = c(p);
                  b !== null && J(L, b.startTime - g), D = false;
                }
              }
              break t;
            } finally {
              E = null, z = Q, w = false;
            }
            D = void 0;
          }
        } finally {
          D ? ft() : V = false;
        }
      }
    }
    var ft;
    if (typeof G == "function") ft = function() {
      G(rt);
    };
    else if (typeof MessageChannel < "u") {
      var wt = new MessageChannel(), O = wt.port2;
      wt.port1.onmessage = rt, ft = function() {
        O.postMessage(null);
      };
    } else ft = function() {
      Z(rt, 0);
    };
    function J(g, D) {
      R = Z(function() {
        g(l3.unstable_now());
      }, D);
    }
    l3.unstable_IdlePriority = 5, l3.unstable_ImmediatePriority = 1, l3.unstable_LowPriority = 4, l3.unstable_NormalPriority = 3, l3.unstable_Profiling = null, l3.unstable_UserBlockingPriority = 2, l3.unstable_cancelCallback = function(g) {
      g.callback = null;
    }, l3.unstable_forceFrameRate = function(g) {
      0 > g || 125 < g ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Y = 0 < g ? Math.floor(1e3 / g) : 5;
    }, l3.unstable_getCurrentPriorityLevel = function() {
      return z;
    }, l3.unstable_next = function(g) {
      switch (z) {
        case 1:
        case 2:
        case 3:
          var D = 3;
          break;
        default:
          D = z;
      }
      var Q = z;
      z = D;
      try {
        return g();
      } finally {
        z = Q;
      }
    }, l3.unstable_requestPaint = function() {
      lt = true;
    }, l3.unstable_runWithPriority = function(g, D) {
      switch (g) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          g = 3;
      }
      var Q = z;
      z = g;
      try {
        return D();
      } finally {
        z = Q;
      }
    }, l3.unstable_scheduleCallback = function(g, D, Q) {
      var F = l3.unstable_now();
      switch (typeof Q == "object" && Q !== null ? (Q = Q.delay, Q = typeof Q == "number" && 0 < Q ? F + Q : F) : Q = F, g) {
        case 1:
          var P = -1;
          break;
        case 2:
          P = 250;
          break;
        case 5:
          P = 1073741823;
          break;
        case 4:
          P = 1e4;
          break;
        default:
          P = 5e3;
      }
      return P = Q + P, g = { id: S++, callback: D, priorityLevel: g, startTime: Q, expirationTime: P, sortIndex: -1 }, Q > F ? (g.sortIndex = Q, i(p, g), c(v) === null && g === c(p) && (W ? (X(R), R = -1) : W = true, J(L, Q - F))) : (g.sortIndex = P, i(v, g), j || w || (j = true, V || (V = true, ft()))), g;
    }, l3.unstable_shouldYield = I, l3.unstable_wrapCallback = function(g) {
      var D = z;
      return function() {
        var Q = z;
        z = D;
        try {
          return g.apply(this, arguments);
        } finally {
          z = Q;
        }
      };
    };
  })(Nf)), Nf;
}
var zm;
function wv() {
  return zm || (zm = 1, Of.exports = Nv()), Of.exports;
}
var wf = { exports: {} }, ee = {};
var Am;
function Dv() {
  if (Am) return ee;
  Am = 1;
  var l3 = Ln();
  function i(v) {
    var p = "https://react.dev/errors/" + v;
    if (1 < arguments.length) {
      p += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var S = 2; S < arguments.length; S++) p += "&args[]=" + encodeURIComponent(arguments[S]);
    }
    return "Minified React error #" + v + "; visit " + p + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function c() {
  }
  var f = { d: { f: c, r: function() {
    throw Error(i(522));
  }, D: c, C: c, L: c, m: c, X: c, S: c, M: c }, p: 0, findDOMNode: null }, o = /* @__PURE__ */ Symbol.for("react.portal");
  function h(v, p, S) {
    var E = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: o, key: E == null ? null : "" + E, children: v, containerInfo: p, implementation: S };
  }
  var d = l3.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function y(v, p) {
    if (v === "font") return "";
    if (typeof p == "string") return p === "use-credentials" ? p : "";
  }
  return ee.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = f, ee.createPortal = function(v, p) {
    var S = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!p || p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11) throw Error(i(299));
    return h(v, p, null, S);
  }, ee.flushSync = function(v) {
    var p = d.T, S = f.p;
    try {
      if (d.T = null, f.p = 2, v) return v();
    } finally {
      d.T = p, f.p = S, f.d.f();
    }
  }, ee.preconnect = function(v, p) {
    typeof v == "string" && (p ? (p = p.crossOrigin, p = typeof p == "string" ? p === "use-credentials" ? p : "" : void 0) : p = null, f.d.C(v, p));
  }, ee.prefetchDNS = function(v) {
    typeof v == "string" && f.d.D(v);
  }, ee.preinit = function(v, p) {
    if (typeof v == "string" && p && typeof p.as == "string") {
      var S = p.as, E = y(S, p.crossOrigin), z = typeof p.integrity == "string" ? p.integrity : void 0, w = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
      S === "style" ? f.d.S(v, typeof p.precedence == "string" ? p.precedence : void 0, { crossOrigin: E, integrity: z, fetchPriority: w }) : S === "script" && f.d.X(v, { crossOrigin: E, integrity: z, fetchPriority: w, nonce: typeof p.nonce == "string" ? p.nonce : void 0 });
    }
  }, ee.preinitModule = function(v, p) {
    if (typeof v == "string") if (typeof p == "object" && p !== null) {
      if (p.as == null || p.as === "script") {
        var S = y(p.as, p.crossOrigin);
        f.d.M(v, { crossOrigin: S, integrity: typeof p.integrity == "string" ? p.integrity : void 0, nonce: typeof p.nonce == "string" ? p.nonce : void 0 });
      }
    } else p == null && f.d.M(v);
  }, ee.preload = function(v, p) {
    if (typeof v == "string" && typeof p == "object" && p !== null && typeof p.as == "string") {
      var S = p.as, E = y(S, p.crossOrigin);
      f.d.L(v, S, { crossOrigin: E, integrity: typeof p.integrity == "string" ? p.integrity : void 0, nonce: typeof p.nonce == "string" ? p.nonce : void 0, type: typeof p.type == "string" ? p.type : void 0, fetchPriority: typeof p.fetchPriority == "string" ? p.fetchPriority : void 0, referrerPolicy: typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0, imageSrcSet: typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0, imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0, media: typeof p.media == "string" ? p.media : void 0 });
    }
  }, ee.preloadModule = function(v, p) {
    if (typeof v == "string") if (p) {
      var S = y(p.as, p.crossOrigin);
      f.d.m(v, { as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0, crossOrigin: S, integrity: typeof p.integrity == "string" ? p.integrity : void 0 });
    } else f.d.m(v);
  }, ee.requestFormReset = function(v) {
    f.d.r(v);
  }, ee.unstable_batchedUpdates = function(v, p) {
    return v(p);
  }, ee.useFormState = function(v, p, S) {
    return d.H.useFormState(v, p, S);
  }, ee.useFormStatus = function() {
    return d.H.useHostTransitionStatus();
  }, ee.version = "19.2.3", ee;
}
var xm;
function _0() {
  if (xm) return wf.exports;
  xm = 1;
  function l3() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l3);
    } catch (i) {
      console.error(i);
    }
  }
  return l3(), wf.exports = Dv(), wf.exports;
}
var Mm;
function Cv() {
  if (Mm) return Wl;
  Mm = 1;
  var l3 = wv(), i = Ln(), c = _0();
  function f(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++) e += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function o(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function h(t) {
    var e = t, n = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do
        e = t, (e.flags & 4098) !== 0 && (n = e.return), t = e.return;
      while (t);
    }
    return e.tag === 3 ? n : null;
  }
  function d(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function y(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function v(t) {
    if (h(t) !== t) throw Error(f(188));
  }
  function p(t) {
    var e = t.alternate;
    if (!e) {
      if (e = h(t), e === null) throw Error(f(188));
      return e !== t ? null : t;
    }
    for (var n = t, a = e; ; ) {
      var u = n.return;
      if (u === null) break;
      var r = u.alternate;
      if (r === null) {
        if (a = u.return, a !== null) {
          n = a;
          continue;
        }
        break;
      }
      if (u.child === r.child) {
        for (r = u.child; r; ) {
          if (r === n) return v(u), t;
          if (r === a) return v(u), e;
          r = r.sibling;
        }
        throw Error(f(188));
      }
      if (n.return !== a.return) n = u, a = r;
      else {
        for (var s = false, m = u.child; m; ) {
          if (m === n) {
            s = true, n = u, a = r;
            break;
          }
          if (m === a) {
            s = true, a = u, n = r;
            break;
          }
          m = m.sibling;
        }
        if (!s) {
          for (m = r.child; m; ) {
            if (m === n) {
              s = true, n = r, a = u;
              break;
            }
            if (m === a) {
              s = true, a = r, n = u;
              break;
            }
            m = m.sibling;
          }
          if (!s) throw Error(f(189));
        }
      }
      if (n.alternate !== a) throw Error(f(190));
    }
    if (n.tag !== 3) throw Error(f(188));
    return n.stateNode.current === n ? t : e;
  }
  function S(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (e = S(t), e !== null) return e;
      t = t.sibling;
    }
    return null;
  }
  var E = Object.assign, z = /* @__PURE__ */ Symbol.for("react.element"), w = /* @__PURE__ */ Symbol.for("react.transitional.element"), j = /* @__PURE__ */ Symbol.for("react.portal"), W = /* @__PURE__ */ Symbol.for("react.fragment"), lt = /* @__PURE__ */ Symbol.for("react.strict_mode"), Z = /* @__PURE__ */ Symbol.for("react.profiler"), X = /* @__PURE__ */ Symbol.for("react.consumer"), G = /* @__PURE__ */ Symbol.for("react.context"), $ = /* @__PURE__ */ Symbol.for("react.forward_ref"), L = /* @__PURE__ */ Symbol.for("react.suspense"), V = /* @__PURE__ */ Symbol.for("react.suspense_list"), R = /* @__PURE__ */ Symbol.for("react.memo"), Y = /* @__PURE__ */ Symbol.for("react.lazy"), tt = /* @__PURE__ */ Symbol.for("react.activity"), I = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), rt = Symbol.iterator;
  function ft(t) {
    return t === null || typeof t != "object" ? null : (t = rt && t[rt] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var wt = /* @__PURE__ */ Symbol.for("react.client.reference");
  function O(t) {
    if (t == null) return null;
    if (typeof t == "function") return t.$$typeof === wt ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case W:
        return "Fragment";
      case Z:
        return "Profiler";
      case lt:
        return "StrictMode";
      case L:
        return "Suspense";
      case V:
        return "SuspenseList";
      case tt:
        return "Activity";
    }
    if (typeof t == "object") switch (t.$$typeof) {
      case j:
        return "Portal";
      case G:
        return t.displayName || "Context";
      case X:
        return (t._context.displayName || "Context") + ".Consumer";
      case $:
        var e = t.render;
        return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
      case R:
        return e = t.displayName || null, e !== null ? e : O(t.type) || "Memo";
      case Y:
        e = t._payload, t = t._init;
        try {
          return O(t(e));
        } catch {
        }
    }
    return null;
  }
  var J = Array.isArray, g = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, D = c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Q = { pending: false, data: null, method: null, action: null }, F = [], P = -1;
  function b(t) {
    return { current: t };
  }
  function U(t) {
    0 > P || (t.current = F[P], F[P] = null, P--);
  }
  function K(t, e) {
    P++, F[P] = t.current, t.current = e;
  }
  var k = b(null), it = b(null), ct = b(null), st = b(null);
  function Dt(t, e) {
    switch (K(ct, e), K(it, t), K(k, null), e.nodeType) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? Xd(t) : 0;
        break;
      default:
        if (t = e.tagName, e = e.namespaceURI) e = Xd(e), t = Qd(e, t);
        else switch (t) {
          case "svg":
            t = 1;
            break;
          case "math":
            t = 2;
            break;
          default:
            t = 0;
        }
    }
    U(k), K(k, t);
  }
  function Ct() {
    U(k), U(it), U(ct);
  }
  function el(t) {
    t.memoizedState !== null && K(st, t);
    var e = k.current, n = Qd(e, t.type);
    e !== n && (K(it, t), K(k, n));
  }
  function si(t) {
    it.current === t && (U(k), U(it)), st.current === t && (U(st), Vl._currentValue = Q);
  }
  var ur, go;
  function Xn(t) {
    if (ur === void 0) try {
      throw Error();
    } catch (n) {
      var e = n.stack.trim().match(/\n( *(at )?)/);
      ur = e && e[1] || "", go = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
    }
    return `
` + ur + t + go;
  }
  var rr = false;
  function cr(t, e) {
    if (!t || rr) return "";
    rr = true;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = { DetermineComponentFrameRoot: function() {
        try {
          if (e) {
            var B = function() {
              throw Error();
            };
            if (Object.defineProperty(B.prototype, "props", { set: function() {
              throw Error();
            } }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(B, []);
              } catch (C) {
                var N = C;
              }
              Reflect.construct(t, [], B);
            } else {
              try {
                B.call();
              } catch (C) {
                N = C;
              }
              t.call(B.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (C) {
              N = C;
            }
            (B = t()) && typeof B.catch == "function" && B.catch(function() {
            });
          }
        } catch (C) {
          if (C && N && typeof C.stack == "string") return [C.stack, N.stack];
        }
        return [null, null];
      } };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, "name");
      u && u.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
      var r = a.DetermineComponentFrameRoot(), s = r[0], m = r[1];
      if (s && m) {
        var _ = s.split(`
`), M = m.split(`
`);
        for (u = a = 0; a < _.length && !_[a].includes("DetermineComponentFrameRoot"); ) a++;
        for (; u < M.length && !M[u].includes("DetermineComponentFrameRoot"); ) u++;
        if (a === _.length || u === M.length) for (a = _.length - 1, u = M.length - 1; 1 <= a && 0 <= u && _[a] !== M[u]; ) u--;
        for (; 1 <= a && 0 <= u; a--, u--) if (_[a] !== M[u]) {
          if (a !== 1 || u !== 1) do
            if (a--, u--, 0 > u || _[a] !== M[u]) {
              var q = `
` + _[a].replace(" at new ", " at ");
              return t.displayName && q.includes("<anonymous>") && (q = q.replace("<anonymous>", t.displayName)), q;
            }
          while (1 <= a && 0 <= u);
          break;
        }
      }
    } finally {
      rr = false, Error.prepareStackTrace = n;
    }
    return (n = t ? t.displayName || t.name : "") ? Xn(n) : "";
  }
  function np(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Xn(t.type);
      case 16:
        return Xn("Lazy");
      case 13:
        return t.child !== e && e !== null ? Xn("Suspense Fallback") : Xn("Suspense");
      case 19:
        return Xn("SuspenseList");
      case 0:
      case 15:
        return cr(t.type, false);
      case 11:
        return cr(t.type.render, false);
      case 1:
        return cr(t.type, true);
      case 31:
        return Xn("Activity");
      default:
        return "";
    }
  }
  function _o(t) {
    try {
      var e = "", n = null;
      do
        e += np(t, n), n = t, t = t.return;
      while (t);
      return e;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var fr = Object.prototype.hasOwnProperty, or = l3.unstable_scheduleCallback, sr = l3.unstable_cancelCallback, ap = l3.unstable_shouldYield, lp = l3.unstable_requestPaint, de = l3.unstable_now, ip = l3.unstable_getCurrentPriorityLevel, bo = l3.unstable_ImmediatePriority, So = l3.unstable_UserBlockingPriority, hi = l3.unstable_NormalPriority, up = l3.unstable_LowPriority, To = l3.unstable_IdlePriority, rp = l3.log, cp = l3.unstable_setDisableYieldValue, nl = null, me = null;
  function pn(t) {
    if (typeof rp == "function" && cp(t), me && typeof me.setStrictMode == "function") try {
      me.setStrictMode(nl, t);
    } catch {
    }
  }
  var pe = Math.clz32 ? Math.clz32 : sp, fp = Math.log, op = Math.LN2;
  function sp(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (fp(t) / op | 0) | 0;
  }
  var di = 256, mi = 262144, pi = 4194304;
  function Qn(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return t & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function yi(t, e, n) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var u = 0, r = t.suspendedLanes, s = t.pingedLanes;
    t = t.warmLanes;
    var m = a & 134217727;
    return m !== 0 ? (a = m & ~r, a !== 0 ? u = Qn(a) : (s &= m, s !== 0 ? u = Qn(s) : n || (n = m & ~t, n !== 0 && (u = Qn(n))))) : (m = a & ~r, m !== 0 ? u = Qn(m) : s !== 0 ? u = Qn(s) : n || (n = a & ~t, n !== 0 && (u = Qn(n)))), u === 0 ? 0 : e !== 0 && e !== u && (e & r) === 0 && (r = u & -u, n = e & -e, r >= n || r === 32 && (n & 4194048) !== 0) ? e : u;
  }
  function al(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function hp(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Eo() {
    var t = pi;
    return pi <<= 1, (pi & 62914560) === 0 && (pi = 4194304), t;
  }
  function hr(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
  }
  function ll(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function dp(t, e, n, a, u, r) {
    var s = t.pendingLanes;
    t.pendingLanes = n, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= n, t.entangledLanes &= n, t.errorRecoveryDisabledLanes &= n, t.shellSuspendCounter = 0;
    var m = t.entanglements, _ = t.expirationTimes, M = t.hiddenUpdates;
    for (n = s & ~n; 0 < n; ) {
      var q = 31 - pe(n), B = 1 << q;
      m[q] = 0, _[q] = -1;
      var N = M[q];
      if (N !== null) for (M[q] = null, q = 0; q < N.length; q++) {
        var C = N[q];
        C !== null && (C.lane &= -536870913);
      }
      n &= ~B;
    }
    a !== 0 && zo(t, a, 0), r !== 0 && u === 0 && t.tag !== 0 && (t.suspendedLanes |= r & ~(s & ~e));
  }
  function zo(t, e, n) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var a = 31 - pe(e);
    t.entangledLanes |= e, t.entanglements[a] = t.entanglements[a] | 1073741824 | n & 261930;
  }
  function Ao(t, e) {
    var n = t.entangledLanes |= e;
    for (t = t.entanglements; n; ) {
      var a = 31 - pe(n), u = 1 << a;
      u & e | t[a] & e && (t[a] |= e), n &= ~u;
    }
  }
  function xo(t, e) {
    var n = e & -e;
    return n = (n & 42) !== 0 ? 1 : dr(n), (n & (t.suspendedLanes | e)) !== 0 ? 0 : n;
  }
  function dr(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function mr(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Mo() {
    var t = D.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : hm(t.type));
  }
  function Oo(t, e) {
    var n = D.p;
    try {
      return D.p = t, e();
    } finally {
      D.p = n;
    }
  }
  var yn = Math.random().toString(36).slice(2), kt = "__reactFiber$" + yn, ie = "__reactProps$" + yn, da = "__reactContainer$" + yn, pr = "__reactEvents$" + yn, mp = "__reactListeners$" + yn, pp = "__reactHandles$" + yn, No = "__reactResources$" + yn, il = "__reactMarker$" + yn;
  function yr(t) {
    delete t[kt], delete t[ie], delete t[pr], delete t[mp], delete t[pp];
  }
  function ma(t) {
    var e = t[kt];
    if (e) return e;
    for (var n = t.parentNode; n; ) {
      if (e = n[da] || n[kt]) {
        if (n = e.alternate, e.child !== null || n !== null && n.child !== null) for (t = $d(t); t !== null; ) {
          if (n = t[kt]) return n;
          t = $d(t);
        }
        return e;
      }
      t = n, n = t.parentNode;
    }
    return null;
  }
  function pa(t) {
    if (t = t[kt] || t[da]) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3) return t;
    }
    return null;
  }
  function ul(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(f(33));
  }
  function ya(t) {
    var e = t[No];
    return e || (e = t[No] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
  }
  function Kt(t) {
    t[il] = true;
  }
  var wo = /* @__PURE__ */ new Set(), Do = {};
  function Vn(t, e) {
    va(t, e), va(t + "Capture", e);
  }
  function va(t, e) {
    for (Do[t] = e, t = 0; t < e.length; t++) wo.add(e[t]);
  }
  var yp = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Co = {}, Ro = {};
  function vp(t) {
    return fr.call(Ro, t) ? true : fr.call(Co, t) ? false : yp.test(t) ? Ro[t] = true : (Co[t] = true, false);
  }
  function vi(t, e, n) {
    if (vp(e)) if (n === null) t.removeAttribute(e);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
          t.removeAttribute(e);
          return;
        case "boolean":
          var a = e.toLowerCase().slice(0, 5);
          if (a !== "data-" && a !== "aria-") {
            t.removeAttribute(e);
            return;
          }
      }
      t.setAttribute(e, "" + n);
    }
  }
  function gi(t, e, n) {
    if (n === null) t.removeAttribute(e);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + n);
    }
  }
  function Je(t, e, n, a) {
    if (a === null) t.removeAttribute(n);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(n);
          return;
      }
      t.setAttributeNS(e, n, "" + a);
    }
  }
  function Ae(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Uo(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function gp(t, e, n) {
    var a = Object.getOwnPropertyDescriptor(t.constructor.prototype, e);
    if (!t.hasOwnProperty(e) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var u = a.get, r = a.set;
      return Object.defineProperty(t, e, { configurable: true, get: function() {
        return u.call(this);
      }, set: function(s) {
        n = "" + s, r.call(this, s);
      } }), Object.defineProperty(t, e, { enumerable: a.enumerable }), { getValue: function() {
        return n;
      }, setValue: function(s) {
        n = "" + s;
      }, stopTracking: function() {
        t._valueTracker = null, delete t[e];
      } };
    }
  }
  function vr(t) {
    if (!t._valueTracker) {
      var e = Uo(t) ? "checked" : "value";
      t._valueTracker = gp(t, e, "" + t[e]);
    }
  }
  function qo(t) {
    if (!t) return false;
    var e = t._valueTracker;
    if (!e) return true;
    var n = e.getValue(), a = "";
    return t && (a = Uo(t) ? t.checked ? "true" : "false" : t.value), t = a, t !== n ? (e.setValue(t), true) : false;
  }
  function _i(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var _p = /[\n"\\]/g;
  function xe(t) {
    return t.replace(_p, function(e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function gr(t, e, n, a, u, r, s, m) {
    t.name = "", s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? t.type = s : t.removeAttribute("type"), e != null ? s === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + Ae(e)) : t.value !== "" + Ae(e) && (t.value = "" + Ae(e)) : s !== "submit" && s !== "reset" || t.removeAttribute("value"), e != null ? _r(t, s, Ae(e)) : n != null ? _r(t, s, Ae(n)) : a != null && t.removeAttribute("value"), u == null && r != null && (t.defaultChecked = !!r), u != null && (t.checked = u && typeof u != "function" && typeof u != "symbol"), m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? t.name = "" + Ae(m) : t.removeAttribute("name");
  }
  function Ho(t, e, n, a, u, r, s, m) {
    if (r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" && (t.type = r), e != null || n != null) {
      if (!(r !== "submit" && r !== "reset" || e != null)) {
        vr(t);
        return;
      }
      n = n != null ? "" + Ae(n) : "", e = e != null ? "" + Ae(e) : n, m || e === t.value || (t.value = e), t.defaultValue = e;
    }
    a = a ?? u, a = typeof a != "function" && typeof a != "symbol" && !!a, t.checked = m ? t.checked : !!a, t.defaultChecked = !!a, s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" && (t.name = s), vr(t);
  }
  function _r(t, e, n) {
    e === "number" && _i(t.ownerDocument) === t || t.defaultValue === "" + n || (t.defaultValue = "" + n);
  }
  function ga(t, e, n, a) {
    if (t = t.options, e) {
      e = {};
      for (var u = 0; u < n.length; u++) e["$" + n[u]] = true;
      for (n = 0; n < t.length; n++) u = e.hasOwnProperty("$" + t[n].value), t[n].selected !== u && (t[n].selected = u), u && a && (t[n].defaultSelected = true);
    } else {
      for (n = "" + Ae(n), e = null, u = 0; u < t.length; u++) {
        if (t[u].value === n) {
          t[u].selected = true, a && (t[u].defaultSelected = true);
          return;
        }
        e !== null || t[u].disabled || (e = t[u]);
      }
      e !== null && (e.selected = true);
    }
  }
  function Bo(t, e, n) {
    if (e != null && (e = "" + Ae(e), e !== t.value && (t.value = e), n == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = n != null ? "" + Ae(n) : "";
  }
  function jo(t, e, n, a) {
    if (e == null) {
      if (a != null) {
        if (n != null) throw Error(f(92));
        if (J(a)) {
          if (1 < a.length) throw Error(f(93));
          a = a[0];
        }
        n = a;
      }
      n == null && (n = ""), e = n;
    }
    n = Ae(e), t.defaultValue = n, a = t.textContent, a === n && a !== "" && a !== null && (t.value = a), vr(t);
  }
  function _a(t, e) {
    if (e) {
      var n = t.firstChild;
      if (n && n === t.lastChild && n.nodeType === 3) {
        n.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var bp = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
  function Yo(t, e, n) {
    var a = e.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? a ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : a ? t.setProperty(e, n) : typeof n != "number" || n === 0 || bp.has(e) ? e === "float" ? t.cssFloat = n : t[e] = ("" + n).trim() : t[e] = n + "px";
  }
  function Go(t, e, n) {
    if (e != null && typeof e != "object") throw Error(f(62));
    if (t = t.style, n != null) {
      for (var a in n) !n.hasOwnProperty(a) || e != null && e.hasOwnProperty(a) || (a.indexOf("--") === 0 ? t.setProperty(a, "") : a === "float" ? t.cssFloat = "" : t[a] = "");
      for (var u in e) a = e[u], e.hasOwnProperty(u) && n[u] !== a && Yo(t, u, a);
    } else for (var r in e) e.hasOwnProperty(r) && Yo(t, r, e[r]);
  }
  function br(t) {
    if (t.indexOf("-") === -1) return false;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return false;
      default:
        return true;
    }
  }
  var Sp = /* @__PURE__ */ new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]]), Tp = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function bi(t) {
    return Tp.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function ke() {
  }
  var Sr = null;
  function Tr(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var ba = null, Sa = null;
  function Lo(t) {
    var e = pa(t);
    if (e && (t = e.stateNode)) {
      var n = t[ie] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (gr(t, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name), e = n.name, n.type === "radio" && e != null) {
            for (n = t; n.parentNode; ) n = n.parentNode;
            for (n = n.querySelectorAll('input[name="' + xe("" + e) + '"][type="radio"]'), e = 0; e < n.length; e++) {
              var a = n[e];
              if (a !== t && a.form === t.form) {
                var u = a[ie] || null;
                if (!u) throw Error(f(90));
                gr(a, u.value, u.defaultValue, u.defaultValue, u.checked, u.defaultChecked, u.type, u.name);
              }
            }
            for (e = 0; e < n.length; e++) a = n[e], a.form === t.form && qo(a);
          }
          break t;
        case "textarea":
          Bo(t, n.value, n.defaultValue);
          break t;
        case "select":
          e = n.value, e != null && ga(t, !!n.multiple, e, false);
      }
    }
  }
  var Er = false;
  function Xo(t, e, n) {
    if (Er) return t(e, n);
    Er = true;
    try {
      var a = t(e);
      return a;
    } finally {
      if (Er = false, (ba !== null || Sa !== null) && (ru(), ba && (e = ba, t = Sa, Sa = ba = null, Lo(e), t))) for (e = 0; e < t.length; e++) Lo(t[e]);
    }
  }
  function rl(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var a = n[ie] || null;
    if (a === null) return null;
    n = a[e];
    t: switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) || (t = t.type, a = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !a;
        break t;
      default:
        t = false;
    }
    if (t) return null;
    if (n && typeof n != "function") throw Error(f(231, e, typeof n));
    return n;
  }
  var We = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), zr = false;
  if (We) try {
    var cl = {};
    Object.defineProperty(cl, "passive", { get: function() {
      zr = true;
    } }), window.addEventListener("test", cl, cl), window.removeEventListener("test", cl, cl);
  } catch {
    zr = false;
  }
  var vn = null, Ar = null, Si = null;
  function Qo() {
    if (Si) return Si;
    var t, e = Ar, n = e.length, a, u = "value" in vn ? vn.value : vn.textContent, r = u.length;
    for (t = 0; t < n && e[t] === u[t]; t++) ;
    var s = n - t;
    for (a = 1; a <= s && e[n - a] === u[r - a]; a++) ;
    return Si = u.slice(t, 1 < a ? 1 - a : void 0);
  }
  function Ti(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function Ei() {
    return true;
  }
  function Vo() {
    return false;
  }
  function ue(t) {
    function e(n, a, u, r, s) {
      this._reactName = n, this._targetInst = u, this.type = a, this.nativeEvent = r, this.target = s, this.currentTarget = null;
      for (var m in t) t.hasOwnProperty(m) && (n = t[m], this[m] = n ? n(r) : r[m]);
      return this.isDefaultPrevented = (r.defaultPrevented != null ? r.defaultPrevented : r.returnValue === false) ? Ei : Vo, this.isPropagationStopped = Vo, this;
    }
    return E(e.prototype, { preventDefault: function() {
      this.defaultPrevented = true;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = false), this.isDefaultPrevented = Ei);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = true), this.isPropagationStopped = Ei);
    }, persist: function() {
    }, isPersistent: Ei }), e;
  }
  var Zn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(t) {
    return t.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, zi = ue(Zn), fl = E({}, Zn, { view: 0, detail: 0 }), Ep = ue(fl), xr, Mr, ol, Ai = E({}, fl, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Nr, button: 0, buttons: 0, relatedTarget: function(t) {
    return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
  }, movementX: function(t) {
    return "movementX" in t ? t.movementX : (t !== ol && (ol && t.type === "mousemove" ? (xr = t.screenX - ol.screenX, Mr = t.screenY - ol.screenY) : Mr = xr = 0, ol = t), xr);
  }, movementY: function(t) {
    return "movementY" in t ? t.movementY : Mr;
  } }), Zo = ue(Ai), zp = E({}, Ai, { dataTransfer: 0 }), Ap = ue(zp), xp = E({}, fl, { relatedTarget: 0 }), Or = ue(xp), Mp = E({}, Zn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Op = ue(Mp), Np = E({}, Zn, { clipboardData: function(t) {
    return "clipboardData" in t ? t.clipboardData : window.clipboardData;
  } }), wp = ue(Np), Dp = E({}, Zn, { data: 0 }), Ko = ue(Dp), Cp = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, Rp = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, Up = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function qp(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = Up[t]) ? !!e[t] : false;
  }
  function Nr() {
    return qp;
  }
  var Hp = E({}, fl, { key: function(t) {
    if (t.key) {
      var e = Cp[t.key] || t.key;
      if (e !== "Unidentified") return e;
    }
    return t.type === "keypress" ? (t = Ti(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? Rp[t.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Nr, charCode: function(t) {
    return t.type === "keypress" ? Ti(t) : 0;
  }, keyCode: function(t) {
    return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
  }, which: function(t) {
    return t.type === "keypress" ? Ti(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
  } }), Bp = ue(Hp), jp = E({}, Ai, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Jo = ue(jp), Yp = E({}, fl, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Nr }), Gp = ue(Yp), Lp = E({}, Zn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xp = ue(Lp), Qp = E({}, Ai, { deltaX: function(t) {
    return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
  }, deltaY: function(t) {
    return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
  }, deltaZ: 0, deltaMode: 0 }), Vp = ue(Qp), Zp = E({}, Zn, { newState: 0, oldState: 0 }), Kp = ue(Zp), Jp = [9, 13, 27, 32], wr = We && "CompositionEvent" in window, sl = null;
  We && "documentMode" in document && (sl = document.documentMode);
  var kp = We && "TextEvent" in window && !sl, ko = We && (!wr || sl && 8 < sl && 11 >= sl), Wo = " ", $o = false;
  function Fo(t, e) {
    switch (t) {
      case "keyup":
        return Jp.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return true;
      default:
        return false;
    }
  }
  function Io(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var Ta = false;
  function Wp(t, e) {
    switch (t) {
      case "compositionend":
        return Io(e);
      case "keypress":
        return e.which !== 32 ? null : ($o = true, Wo);
      case "textInput":
        return t = e.data, t === Wo && $o ? null : t;
      default:
        return null;
    }
  }
  function $p(t, e) {
    if (Ta) return t === "compositionend" || !wr && Fo(t, e) ? (t = Qo(), Si = Ar = vn = null, Ta = false, t) : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return ko && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var Fp = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
  function Po(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!Fp[t.type] : e === "textarea";
  }
  function ts(t, e, n, a) {
    ba ? Sa ? Sa.push(a) : Sa = [a] : ba = a, e = mu(e, "onChange"), 0 < e.length && (n = new zi("onChange", "change", null, n, a), t.push({ event: n, listeners: e }));
  }
  var hl = null, dl = null;
  function Ip(t) {
    Hd(t, 0);
  }
  function xi(t) {
    var e = ul(t);
    if (qo(e)) return t;
  }
  function es(t, e) {
    if (t === "change") return e;
  }
  var ns = false;
  if (We) {
    var Dr;
    if (We) {
      var Cr = "oninput" in document;
      if (!Cr) {
        var as = document.createElement("div");
        as.setAttribute("oninput", "return;"), Cr = typeof as.oninput == "function";
      }
      Dr = Cr;
    } else Dr = false;
    ns = Dr && (!document.documentMode || 9 < document.documentMode);
  }
  function ls() {
    hl && (hl.detachEvent("onpropertychange", is), dl = hl = null);
  }
  function is(t) {
    if (t.propertyName === "value" && xi(dl)) {
      var e = [];
      ts(e, dl, t, Tr(t)), Xo(Ip, e);
    }
  }
  function Pp(t, e, n) {
    t === "focusin" ? (ls(), hl = e, dl = n, hl.attachEvent("onpropertychange", is)) : t === "focusout" && ls();
  }
  function ty(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown") return xi(dl);
  }
  function ey(t, e) {
    if (t === "click") return xi(e);
  }
  function ny(t, e) {
    if (t === "input" || t === "change") return xi(e);
  }
  function ay(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var ye = typeof Object.is == "function" ? Object.is : ay;
  function ml(t, e) {
    if (ye(t, e)) return true;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null) return false;
    var n = Object.keys(t), a = Object.keys(e);
    if (n.length !== a.length) return false;
    for (a = 0; a < n.length; a++) {
      var u = n[a];
      if (!fr.call(e, u) || !ye(t[u], e[u])) return false;
    }
    return true;
  }
  function us(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function rs(t, e) {
    var n = us(t);
    t = 0;
    for (var a; n; ) {
      if (n.nodeType === 3) {
        if (a = t + n.textContent.length, t <= e && a >= e) return { node: n, offset: e - t };
        t = a;
      }
      t: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break t;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = us(n);
    }
  }
  function cs(t, e) {
    return t && e ? t === e ? true : t && t.nodeType === 3 ? false : e && e.nodeType === 3 ? cs(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : false : false;
  }
  function fs(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = _i(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var n = typeof e.contentWindow.location.href == "string";
      } catch {
        n = false;
      }
      if (n) t = e.contentWindow;
      else break;
      e = _i(t.document);
    }
    return e;
  }
  function Rr(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  var ly = We && "documentMode" in document && 11 >= document.documentMode, Ea = null, Ur = null, pl = null, qr = false;
  function os(t, e, n) {
    var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    qr || Ea == null || Ea !== _i(a) || (a = Ea, "selectionStart" in a && Rr(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = { anchorNode: a.anchorNode, anchorOffset: a.anchorOffset, focusNode: a.focusNode, focusOffset: a.focusOffset }), pl && ml(pl, a) || (pl = a, a = mu(Ur, "onSelect"), 0 < a.length && (e = new zi("onSelect", "select", null, e, n), t.push({ event: e, listeners: a }), e.target = Ea)));
  }
  function Kn(t, e) {
    var n = {};
    return n[t.toLowerCase()] = e.toLowerCase(), n["Webkit" + t] = "webkit" + e, n["Moz" + t] = "moz" + e, n;
  }
  var za = { animationend: Kn("Animation", "AnimationEnd"), animationiteration: Kn("Animation", "AnimationIteration"), animationstart: Kn("Animation", "AnimationStart"), transitionrun: Kn("Transition", "TransitionRun"), transitionstart: Kn("Transition", "TransitionStart"), transitioncancel: Kn("Transition", "TransitionCancel"), transitionend: Kn("Transition", "TransitionEnd") }, Hr = {}, ss = {};
  We && (ss = document.createElement("div").style, "AnimationEvent" in window || (delete za.animationend.animation, delete za.animationiteration.animation, delete za.animationstart.animation), "TransitionEvent" in window || delete za.transitionend.transition);
  function Jn(t) {
    if (Hr[t]) return Hr[t];
    if (!za[t]) return t;
    var e = za[t], n;
    for (n in e) if (e.hasOwnProperty(n) && n in ss) return Hr[t] = e[n];
    return t;
  }
  var hs = Jn("animationend"), ds = Jn("animationiteration"), ms = Jn("animationstart"), iy = Jn("transitionrun"), uy = Jn("transitionstart"), ry = Jn("transitioncancel"), ps = Jn("transitionend"), ys = /* @__PURE__ */ new Map(), Br = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  Br.push("scrollEnd");
  function qe(t, e) {
    ys.set(t, e), Vn(e, [t]);
  }
  var Mi = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var e = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t), error: t });
      if (!window.dispatchEvent(e)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  }, Me = [], Aa = 0, jr = 0;
  function Oi() {
    for (var t = Aa, e = jr = Aa = 0; e < t; ) {
      var n = Me[e];
      Me[e++] = null;
      var a = Me[e];
      Me[e++] = null;
      var u = Me[e];
      Me[e++] = null;
      var r = Me[e];
      if (Me[e++] = null, a !== null && u !== null) {
        var s = a.pending;
        s === null ? u.next = u : (u.next = s.next, s.next = u), a.pending = u;
      }
      r !== 0 && vs(n, u, r);
    }
  }
  function Ni(t, e, n, a) {
    Me[Aa++] = t, Me[Aa++] = e, Me[Aa++] = n, Me[Aa++] = a, jr |= a, t.lanes |= a, t = t.alternate, t !== null && (t.lanes |= a);
  }
  function Yr(t, e, n, a) {
    return Ni(t, e, n, a), wi(t);
  }
  function kn(t, e) {
    return Ni(t, null, null, e), wi(t);
  }
  function vs(t, e, n) {
    t.lanes |= n;
    var a = t.alternate;
    a !== null && (a.lanes |= n);
    for (var u = false, r = t.return; r !== null; ) r.childLanes |= n, a = r.alternate, a !== null && (a.childLanes |= n), r.tag === 22 && (t = r.stateNode, t === null || t._visibility & 1 || (u = true)), t = r, r = r.return;
    return t.tag === 3 ? (r = t.stateNode, u && e !== null && (u = 31 - pe(n), t = r.hiddenUpdates, a = t[u], a === null ? t[u] = [e] : a.push(e), e.lane = n | 536870912), r) : null;
  }
  function wi(t) {
    if (50 < Bl) throw Bl = 0, kc = null, Error(f(185));
    for (var e = t.return; e !== null; ) t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var xa = {};
  function cy(t, e, n, a) {
    this.tag = t, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ve(t, e, n, a) {
    return new cy(t, e, n, a);
  }
  function Gr(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function $e(t, e) {
    var n = t.alternate;
    return n === null ? (n = ve(t.tag, e, t.key, t.mode), n.elementType = t.elementType, n.type = t.type, n.stateNode = t.stateNode, n.alternate = t, t.alternate = n) : (n.pendingProps = e, n.type = t.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = t.flags & 65011712, n.childLanes = t.childLanes, n.lanes = t.lanes, n.child = t.child, n.memoizedProps = t.memoizedProps, n.memoizedState = t.memoizedState, n.updateQueue = t.updateQueue, e = t.dependencies, n.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, n.sibling = t.sibling, n.index = t.index, n.ref = t.ref, n.refCleanup = t.refCleanup, n;
  }
  function gs(t, e) {
    t.flags &= 65011714;
    var n = t.alternate;
    return n === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = n.childLanes, t.lanes = n.lanes, t.child = n.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = n.memoizedProps, t.memoizedState = n.memoizedState, t.updateQueue = n.updateQueue, t.type = n.type, e = n.dependencies, t.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), t;
  }
  function Di(t, e, n, a, u, r) {
    var s = 0;
    if (a = t, typeof t == "function") Gr(t) && (s = 1);
    else if (typeof t == "string") s = dv(t, n, k.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else t: switch (t) {
      case tt:
        return t = ve(31, n, e, u), t.elementType = tt, t.lanes = r, t;
      case W:
        return Wn(n.children, u, r, e);
      case lt:
        s = 8, u |= 24;
        break;
      case Z:
        return t = ve(12, n, e, u | 2), t.elementType = Z, t.lanes = r, t;
      case L:
        return t = ve(13, n, e, u), t.elementType = L, t.lanes = r, t;
      case V:
        return t = ve(19, n, e, u), t.elementType = V, t.lanes = r, t;
      default:
        if (typeof t == "object" && t !== null) switch (t.$$typeof) {
          case G:
            s = 10;
            break t;
          case X:
            s = 9;
            break t;
          case $:
            s = 11;
            break t;
          case R:
            s = 14;
            break t;
          case Y:
            s = 16, a = null;
            break t;
        }
        s = 29, n = Error(f(130, t === null ? "null" : typeof t, "")), a = null;
    }
    return e = ve(s, n, e, u), e.elementType = t, e.type = a, e.lanes = r, e;
  }
  function Wn(t, e, n, a) {
    return t = ve(7, t, a, e), t.lanes = n, t;
  }
  function Lr(t, e, n) {
    return t = ve(6, t, null, e), t.lanes = n, t;
  }
  function _s(t) {
    var e = ve(18, null, null, 0);
    return e.stateNode = t, e;
  }
  function Xr(t, e, n) {
    return e = ve(4, t.children !== null ? t.children : [], t.key, e), e.lanes = n, e.stateNode = { containerInfo: t.containerInfo, pendingChildren: null, implementation: t.implementation }, e;
  }
  var bs = /* @__PURE__ */ new WeakMap();
  function Oe(t, e) {
    if (typeof t == "object" && t !== null) {
      var n = bs.get(t);
      return n !== void 0 ? n : (e = { value: t, source: e, stack: _o(e) }, bs.set(t, e), e);
    }
    return { value: t, source: e, stack: _o(e) };
  }
  var Ma = [], Oa = 0, Ci = null, yl = 0, Ne = [], we = 0, gn = null, Ge = 1, Le = "";
  function Fe(t, e) {
    Ma[Oa++] = yl, Ma[Oa++] = Ci, Ci = t, yl = e;
  }
  function Ss(t, e, n) {
    Ne[we++] = Ge, Ne[we++] = Le, Ne[we++] = gn, gn = t;
    var a = Ge;
    t = Le;
    var u = 32 - pe(a) - 1;
    a &= ~(1 << u), n += 1;
    var r = 32 - pe(e) + u;
    if (30 < r) {
      var s = u - u % 5;
      r = (a & (1 << s) - 1).toString(32), a >>= s, u -= s, Ge = 1 << 32 - pe(e) + u | n << u | a, Le = r + t;
    } else Ge = 1 << r | n << u | a, Le = t;
  }
  function Qr(t) {
    t.return !== null && (Fe(t, 1), Ss(t, 1, 0));
  }
  function Vr(t) {
    for (; t === Ci; ) Ci = Ma[--Oa], Ma[Oa] = null, yl = Ma[--Oa], Ma[Oa] = null;
    for (; t === gn; ) gn = Ne[--we], Ne[we] = null, Le = Ne[--we], Ne[we] = null, Ge = Ne[--we], Ne[we] = null;
  }
  function Ts(t, e) {
    Ne[we++] = Ge, Ne[we++] = Le, Ne[we++] = gn, Ge = e.id, Le = e.overflow, gn = t;
  }
  var Wt = null, Rt = null, _t = false, _n = null, De = false, Zr = Error(f(519));
  function bn(t) {
    var e = Error(f(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
    throw vl(Oe(e, t)), Zr;
  }
  function Es(t) {
    var e = t.stateNode, n = t.type, a = t.memoizedProps;
    switch (e[kt] = t, e[ie] = a, n) {
      case "dialog":
        yt("cancel", e), yt("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        yt("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < Yl.length; n++) yt(Yl[n], e);
        break;
      case "source":
        yt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        yt("error", e), yt("load", e);
        break;
      case "details":
        yt("toggle", e);
        break;
      case "input":
        yt("invalid", e), Ho(e, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, true);
        break;
      case "select":
        yt("invalid", e);
        break;
      case "textarea":
        yt("invalid", e), jo(e, a.value, a.defaultValue, a.children);
    }
    n = a.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || e.textContent === "" + n || a.suppressHydrationWarning === true || Gd(e.textContent, n) ? (a.popover != null && (yt("beforetoggle", e), yt("toggle", e)), a.onScroll != null && yt("scroll", e), a.onScrollEnd != null && yt("scrollend", e), a.onClick != null && (e.onclick = ke), e = true) : e = false, e || bn(t, true);
  }
  function zs(t) {
    for (Wt = t.return; Wt; ) switch (Wt.tag) {
      case 5:
      case 31:
      case 13:
        De = false;
        return;
      case 27:
      case 3:
        De = true;
        return;
      default:
        Wt = Wt.return;
    }
  }
  function Na(t) {
    if (t !== Wt) return false;
    if (!_t) return zs(t), _t = true, false;
    var e = t.tag, n;
    if ((n = e !== 3 && e !== 27) && ((n = e === 5) && (n = t.type, n = !(n !== "form" && n !== "button") || of(t.type, t.memoizedProps)), n = !n), n && Rt && bn(t), zs(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(f(317));
      Rt = Wd(t);
    } else if (e === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(f(317));
      Rt = Wd(t);
    } else e === 27 ? (e = Rt, Un(t.type) ? (t = pf, pf = null, Rt = t) : Rt = e) : Rt = Wt ? Re(t.stateNode.nextSibling) : null;
    return true;
  }
  function $n() {
    Rt = Wt = null, _t = false;
  }
  function Kr() {
    var t = _n;
    return t !== null && (oe === null ? oe = t : oe.push.apply(oe, t), _n = null), t;
  }
  function vl(t) {
    _n === null ? _n = [t] : _n.push(t);
  }
  var Jr = b(null), Fn = null, Ie = null;
  function Sn(t, e, n) {
    K(Jr, e._currentValue), e._currentValue = n;
  }
  function Pe(t) {
    t._currentValue = Jr.current, U(Jr);
  }
  function kr(t, e, n) {
    for (; t !== null; ) {
      var a = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, a !== null && (a.childLanes |= e)) : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e), t === n) break;
      t = t.return;
    }
  }
  function Wr(t, e, n, a) {
    var u = t.child;
    for (u !== null && (u.return = t); u !== null; ) {
      var r = u.dependencies;
      if (r !== null) {
        var s = u.child;
        r = r.firstContext;
        t: for (; r !== null; ) {
          var m = r;
          r = u;
          for (var _ = 0; _ < e.length; _++) if (m.context === e[_]) {
            r.lanes |= n, m = r.alternate, m !== null && (m.lanes |= n), kr(r.return, n, t), a || (s = null);
            break t;
          }
          r = m.next;
        }
      } else if (u.tag === 18) {
        if (s = u.return, s === null) throw Error(f(341));
        s.lanes |= n, r = s.alternate, r !== null && (r.lanes |= n), kr(s, n, t), s = null;
      } else s = u.child;
      if (s !== null) s.return = u;
      else for (s = u; s !== null; ) {
        if (s === t) {
          s = null;
          break;
        }
        if (u = s.sibling, u !== null) {
          u.return = s.return, s = u;
          break;
        }
        s = s.return;
      }
      u = s;
    }
  }
  function wa(t, e, n, a) {
    t = null;
    for (var u = e, r = false; u !== null; ) {
      if (!r) {
        if ((u.flags & 524288) !== 0) r = true;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var s = u.alternate;
        if (s === null) throw Error(f(387));
        if (s = s.memoizedProps, s !== null) {
          var m = u.type;
          ye(u.pendingProps.value, s.value) || (t !== null ? t.push(m) : t = [m]);
        }
      } else if (u === st.current) {
        if (s = u.alternate, s === null) throw Error(f(387));
        s.memoizedState.memoizedState !== u.memoizedState.memoizedState && (t !== null ? t.push(Vl) : t = [Vl]);
      }
      u = u.return;
    }
    t !== null && Wr(e, t, n, a), e.flags |= 262144;
  }
  function Ri(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!ye(t.context._currentValue, t.memoizedValue)) return true;
      t = t.next;
    }
    return false;
  }
  function In(t) {
    Fn = t, Ie = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function $t(t) {
    return As(Fn, t);
  }
  function Ui(t, e) {
    return Fn === null && In(t), As(t, e);
  }
  function As(t, e) {
    var n = e._currentValue;
    if (e = { context: e, memoizedValue: n, next: null }, Ie === null) {
      if (t === null) throw Error(f(308));
      Ie = e, t.dependencies = { lanes: 0, firstContext: e }, t.flags |= 524288;
    } else Ie = Ie.next = e;
    return n;
  }
  var fy = typeof AbortController < "u" ? AbortController : function() {
    var t = [], e = this.signal = { aborted: false, addEventListener: function(n, a) {
      t.push(a);
    } };
    this.abort = function() {
      e.aborted = true, t.forEach(function(n) {
        return n();
      });
    };
  }, oy = l3.unstable_scheduleCallback, sy = l3.unstable_NormalPriority, Gt = { $$typeof: G, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
  function $r() {
    return { controller: new fy(), data: /* @__PURE__ */ new Map(), refCount: 0 };
  }
  function gl(t) {
    t.refCount--, t.refCount === 0 && oy(sy, function() {
      t.controller.abort();
    });
  }
  var _l = null, Fr = 0, Da = 0, Ca = null;
  function hy(t, e) {
    if (_l === null) {
      var n = _l = [];
      Fr = 0, Da = tf(), Ca = { status: "pending", value: void 0, then: function(a) {
        n.push(a);
      } };
    }
    return Fr++, e.then(xs, xs), e;
  }
  function xs() {
    if (--Fr === 0 && _l !== null) {
      Ca !== null && (Ca.status = "fulfilled");
      var t = _l;
      _l = null, Da = 0, Ca = null;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function dy(t, e) {
    var n = [], a = { status: "pending", value: null, reason: null, then: function(u) {
      n.push(u);
    } };
    return t.then(function() {
      a.status = "fulfilled", a.value = e;
      for (var u = 0; u < n.length; u++) (0, n[u])(e);
    }, function(u) {
      for (a.status = "rejected", a.reason = u, u = 0; u < n.length; u++) (0, n[u])(void 0);
    }), a;
  }
  var Ms = g.S;
  g.S = function(t, e) {
    od = de(), typeof e == "object" && e !== null && typeof e.then == "function" && hy(t, e), Ms !== null && Ms(t, e);
  };
  var Pn = b(null);
  function Ir() {
    var t = Pn.current;
    return t !== null ? t : Nt.pooledCache;
  }
  function qi(t, e) {
    e === null ? K(Pn, Pn.current) : K(Pn, e.pool);
  }
  function Os() {
    var t = Ir();
    return t === null ? null : { parent: Gt._currentValue, pool: t };
  }
  var Ra = Error(f(460)), Pr = Error(f(474)), Hi = Error(f(542)), Bi = { then: function() {
  } };
  function Ns(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function ws(t, e, n) {
    switch (n = t[n], n === void 0 ? t.push(e) : n !== e && (e.then(ke, ke), e = n), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, Cs(t), t;
      default:
        if (typeof e.status == "string") e.then(ke, ke);
        else {
          if (t = Nt, t !== null && 100 < t.shellSuspendCounter) throw Error(f(482));
          t = e, t.status = "pending", t.then(function(a) {
            if (e.status === "pending") {
              var u = e;
              u.status = "fulfilled", u.value = a;
            }
          }, function(a) {
            if (e.status === "pending") {
              var u = e;
              u.status = "rejected", u.reason = a;
            }
          });
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw t = e.reason, Cs(t), t;
        }
        throw ea = e, Ra;
    }
  }
  function ta(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function" ? (ea = n, Ra) : n;
    }
  }
  var ea = null;
  function Ds() {
    if (ea === null) throw Error(f(459));
    var t = ea;
    return ea = null, t;
  }
  function Cs(t) {
    if (t === Ra || t === Hi) throw Error(f(483));
  }
  var Ua = null, bl = 0;
  function ji(t) {
    var e = bl;
    return bl += 1, Ua === null && (Ua = []), ws(Ua, t, e);
  }
  function Sl(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function Yi(t, e) {
    throw e.$$typeof === z ? Error(f(525)) : (t = Object.prototype.toString.call(e), Error(f(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t)));
  }
  function Rs(t) {
    function e(A, T) {
      if (t) {
        var x = A.deletions;
        x === null ? (A.deletions = [T], A.flags |= 16) : x.push(T);
      }
    }
    function n(A, T) {
      if (!t) return null;
      for (; T !== null; ) e(A, T), T = T.sibling;
      return null;
    }
    function a(A) {
      for (var T = /* @__PURE__ */ new Map(); A !== null; ) A.key !== null ? T.set(A.key, A) : T.set(A.index, A), A = A.sibling;
      return T;
    }
    function u(A, T) {
      return A = $e(A, T), A.index = 0, A.sibling = null, A;
    }
    function r(A, T, x) {
      return A.index = x, t ? (x = A.alternate, x !== null ? (x = x.index, x < T ? (A.flags |= 67108866, T) : x) : (A.flags |= 67108866, T)) : (A.flags |= 1048576, T);
    }
    function s(A) {
      return t && A.alternate === null && (A.flags |= 67108866), A;
    }
    function m(A, T, x, H) {
      return T === null || T.tag !== 6 ? (T = Lr(x, A.mode, H), T.return = A, T) : (T = u(T, x), T.return = A, T);
    }
    function _(A, T, x, H) {
      var at = x.type;
      return at === W ? q(A, T, x.props.children, H, x.key) : T !== null && (T.elementType === at || typeof at == "object" && at !== null && at.$$typeof === Y && ta(at) === T.type) ? (T = u(T, x.props), Sl(T, x), T.return = A, T) : (T = Di(x.type, x.key, x.props, null, A.mode, H), Sl(T, x), T.return = A, T);
    }
    function M(A, T, x, H) {
      return T === null || T.tag !== 4 || T.stateNode.containerInfo !== x.containerInfo || T.stateNode.implementation !== x.implementation ? (T = Xr(x, A.mode, H), T.return = A, T) : (T = u(T, x.children || []), T.return = A, T);
    }
    function q(A, T, x, H, at) {
      return T === null || T.tag !== 7 ? (T = Wn(x, A.mode, H, at), T.return = A, T) : (T = u(T, x), T.return = A, T);
    }
    function B(A, T, x) {
      if (typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint") return T = Lr("" + T, A.mode, x), T.return = A, T;
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case w:
            return x = Di(T.type, T.key, T.props, null, A.mode, x), Sl(x, T), x.return = A, x;
          case j:
            return T = Xr(T, A.mode, x), T.return = A, T;
          case Y:
            return T = ta(T), B(A, T, x);
        }
        if (J(T) || ft(T)) return T = Wn(T, A.mode, x, null), T.return = A, T;
        if (typeof T.then == "function") return B(A, ji(T), x);
        if (T.$$typeof === G) return B(A, Ui(A, T), x);
        Yi(A, T);
      }
      return null;
    }
    function N(A, T, x, H) {
      var at = T !== null ? T.key : null;
      if (typeof x == "string" && x !== "" || typeof x == "number" || typeof x == "bigint") return at !== null ? null : m(A, T, "" + x, H);
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case w:
            return x.key === at ? _(A, T, x, H) : null;
          case j:
            return x.key === at ? M(A, T, x, H) : null;
          case Y:
            return x = ta(x), N(A, T, x, H);
        }
        if (J(x) || ft(x)) return at !== null ? null : q(A, T, x, H, null);
        if (typeof x.then == "function") return N(A, T, ji(x), H);
        if (x.$$typeof === G) return N(A, T, Ui(A, x), H);
        Yi(A, x);
      }
      return null;
    }
    function C(A, T, x, H, at) {
      if (typeof H == "string" && H !== "" || typeof H == "number" || typeof H == "bigint") return A = A.get(x) || null, m(T, A, "" + H, at);
      if (typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case w:
            return A = A.get(H.key === null ? x : H.key) || null, _(T, A, H, at);
          case j:
            return A = A.get(H.key === null ? x : H.key) || null, M(T, A, H, at);
          case Y:
            return H = ta(H), C(A, T, x, H, at);
        }
        if (J(H) || ft(H)) return A = A.get(x) || null, q(T, A, H, at, null);
        if (typeof H.then == "function") return C(A, T, x, ji(H), at);
        if (H.$$typeof === G) return C(A, T, x, Ui(T, H), at);
        Yi(T, H);
      }
      return null;
    }
    function et(A, T, x, H) {
      for (var at = null, St = null, nt = T, dt = T = 0, gt = null; nt !== null && dt < x.length; dt++) {
        nt.index > dt ? (gt = nt, nt = null) : gt = nt.sibling;
        var Tt = N(A, nt, x[dt], H);
        if (Tt === null) {
          nt === null && (nt = gt);
          break;
        }
        t && nt && Tt.alternate === null && e(A, nt), T = r(Tt, T, dt), St === null ? at = Tt : St.sibling = Tt, St = Tt, nt = gt;
      }
      if (dt === x.length) return n(A, nt), _t && Fe(A, dt), at;
      if (nt === null) {
        for (; dt < x.length; dt++) nt = B(A, x[dt], H), nt !== null && (T = r(nt, T, dt), St === null ? at = nt : St.sibling = nt, St = nt);
        return _t && Fe(A, dt), at;
      }
      for (nt = a(nt); dt < x.length; dt++) gt = C(nt, A, dt, x[dt], H), gt !== null && (t && gt.alternate !== null && nt.delete(gt.key === null ? dt : gt.key), T = r(gt, T, dt), St === null ? at = gt : St.sibling = gt, St = gt);
      return t && nt.forEach(function(Yn) {
        return e(A, Yn);
      }), _t && Fe(A, dt), at;
    }
    function ut(A, T, x, H) {
      if (x == null) throw Error(f(151));
      for (var at = null, St = null, nt = T, dt = T = 0, gt = null, Tt = x.next(); nt !== null && !Tt.done; dt++, Tt = x.next()) {
        nt.index > dt ? (gt = nt, nt = null) : gt = nt.sibling;
        var Yn = N(A, nt, Tt.value, H);
        if (Yn === null) {
          nt === null && (nt = gt);
          break;
        }
        t && nt && Yn.alternate === null && e(A, nt), T = r(Yn, T, dt), St === null ? at = Yn : St.sibling = Yn, St = Yn, nt = gt;
      }
      if (Tt.done) return n(A, nt), _t && Fe(A, dt), at;
      if (nt === null) {
        for (; !Tt.done; dt++, Tt = x.next()) Tt = B(A, Tt.value, H), Tt !== null && (T = r(Tt, T, dt), St === null ? at = Tt : St.sibling = Tt, St = Tt);
        return _t && Fe(A, dt), at;
      }
      for (nt = a(nt); !Tt.done; dt++, Tt = x.next()) Tt = C(nt, A, dt, Tt.value, H), Tt !== null && (t && Tt.alternate !== null && nt.delete(Tt.key === null ? dt : Tt.key), T = r(Tt, T, dt), St === null ? at = Tt : St.sibling = Tt, St = Tt);
      return t && nt.forEach(function(zv) {
        return e(A, zv);
      }), _t && Fe(A, dt), at;
    }
    function Ot(A, T, x, H) {
      if (typeof x == "object" && x !== null && x.type === W && x.key === null && (x = x.props.children), typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case w:
            t: {
              for (var at = x.key; T !== null; ) {
                if (T.key === at) {
                  if (at = x.type, at === W) {
                    if (T.tag === 7) {
                      n(A, T.sibling), H = u(T, x.props.children), H.return = A, A = H;
                      break t;
                    }
                  } else if (T.elementType === at || typeof at == "object" && at !== null && at.$$typeof === Y && ta(at) === T.type) {
                    n(A, T.sibling), H = u(T, x.props), Sl(H, x), H.return = A, A = H;
                    break t;
                  }
                  n(A, T);
                  break;
                } else e(A, T);
                T = T.sibling;
              }
              x.type === W ? (H = Wn(x.props.children, A.mode, H, x.key), H.return = A, A = H) : (H = Di(x.type, x.key, x.props, null, A.mode, H), Sl(H, x), H.return = A, A = H);
            }
            return s(A);
          case j:
            t: {
              for (at = x.key; T !== null; ) {
                if (T.key === at) if (T.tag === 4 && T.stateNode.containerInfo === x.containerInfo && T.stateNode.implementation === x.implementation) {
                  n(A, T.sibling), H = u(T, x.children || []), H.return = A, A = H;
                  break t;
                } else {
                  n(A, T);
                  break;
                }
                else e(A, T);
                T = T.sibling;
              }
              H = Xr(x, A.mode, H), H.return = A, A = H;
            }
            return s(A);
          case Y:
            return x = ta(x), Ot(A, T, x, H);
        }
        if (J(x)) return et(A, T, x, H);
        if (ft(x)) {
          if (at = ft(x), typeof at != "function") throw Error(f(150));
          return x = at.call(x), ut(A, T, x, H);
        }
        if (typeof x.then == "function") return Ot(A, T, ji(x), H);
        if (x.$$typeof === G) return Ot(A, T, Ui(A, x), H);
        Yi(A, x);
      }
      return typeof x == "string" && x !== "" || typeof x == "number" || typeof x == "bigint" ? (x = "" + x, T !== null && T.tag === 6 ? (n(A, T.sibling), H = u(T, x), H.return = A, A = H) : (n(A, T), H = Lr(x, A.mode, H), H.return = A, A = H), s(A)) : n(A, T);
    }
    return function(A, T, x, H) {
      try {
        bl = 0;
        var at = Ot(A, T, x, H);
        return Ua = null, at;
      } catch (nt) {
        if (nt === Ra || nt === Hi) throw nt;
        var St = ve(29, nt, null, A.mode);
        return St.lanes = H, St.return = A, St;
      }
    };
  }
  var na = Rs(true), Us = Rs(false), Tn = false;
  function tc(t) {
    t.updateQueue = { baseState: t.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, lanes: 0, hiddenCallbacks: null }, callbacks: null };
  }
  function ec(t, e) {
    t = t.updateQueue, e.updateQueue === t && (e.updateQueue = { baseState: t.baseState, firstBaseUpdate: t.firstBaseUpdate, lastBaseUpdate: t.lastBaseUpdate, shared: t.shared, callbacks: null });
  }
  function En(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function zn(t, e, n) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (Et & 2) !== 0) {
      var u = a.pending;
      return u === null ? e.next = e : (e.next = u.next, u.next = e), a.pending = e, e = wi(t), vs(t, null, n), e;
    }
    return Ni(t, a, e, n), wi(t);
  }
  function Tl(t, e, n) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (n & 4194048) !== 0)) {
      var a = e.lanes;
      a &= t.pendingLanes, n |= a, e.lanes = n, Ao(t, n);
    }
  }
  function nc(t, e) {
    var n = t.updateQueue, a = t.alternate;
    if (a !== null && (a = a.updateQueue, n === a)) {
      var u = null, r = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var s = { lane: n.lane, tag: n.tag, payload: n.payload, callback: null, next: null };
          r === null ? u = r = s : r = r.next = s, n = n.next;
        } while (n !== null);
        r === null ? u = r = e : r = r.next = e;
      } else u = r = e;
      n = { baseState: a.baseState, firstBaseUpdate: u, lastBaseUpdate: r, shared: a.shared, callbacks: a.callbacks }, t.updateQueue = n;
      return;
    }
    t = n.lastBaseUpdate, t === null ? n.firstBaseUpdate = e : t.next = e, n.lastBaseUpdate = e;
  }
  var ac = false;
  function El() {
    if (ac) {
      var t = Ca;
      if (t !== null) throw t;
    }
  }
  function zl(t, e, n, a) {
    ac = false;
    var u = t.updateQueue;
    Tn = false;
    var r = u.firstBaseUpdate, s = u.lastBaseUpdate, m = u.shared.pending;
    if (m !== null) {
      u.shared.pending = null;
      var _ = m, M = _.next;
      _.next = null, s === null ? r = M : s.next = M, s = _;
      var q = t.alternate;
      q !== null && (q = q.updateQueue, m = q.lastBaseUpdate, m !== s && (m === null ? q.firstBaseUpdate = M : m.next = M, q.lastBaseUpdate = _));
    }
    if (r !== null) {
      var B = u.baseState;
      s = 0, q = M = _ = null, m = r;
      do {
        var N = m.lane & -536870913, C = N !== m.lane;
        if (C ? (vt & N) === N : (a & N) === N) {
          N !== 0 && N === Da && (ac = true), q !== null && (q = q.next = { lane: 0, tag: m.tag, payload: m.payload, callback: null, next: null });
          t: {
            var et = t, ut = m;
            N = e;
            var Ot = n;
            switch (ut.tag) {
              case 1:
                if (et = ut.payload, typeof et == "function") {
                  B = et.call(Ot, B, N);
                  break t;
                }
                B = et;
                break t;
              case 3:
                et.flags = et.flags & -65537 | 128;
              case 0:
                if (et = ut.payload, N = typeof et == "function" ? et.call(Ot, B, N) : et, N == null) break t;
                B = E({}, B, N);
                break t;
              case 2:
                Tn = true;
            }
          }
          N = m.callback, N !== null && (t.flags |= 64, C && (t.flags |= 8192), C = u.callbacks, C === null ? u.callbacks = [N] : C.push(N));
        } else C = { lane: N, tag: m.tag, payload: m.payload, callback: m.callback, next: null }, q === null ? (M = q = C, _ = B) : q = q.next = C, s |= N;
        if (m = m.next, m === null) {
          if (m = u.shared.pending, m === null) break;
          C = m, m = C.next, C.next = null, u.lastBaseUpdate = C, u.shared.pending = null;
        }
      } while (true);
      q === null && (_ = B), u.baseState = _, u.firstBaseUpdate = M, u.lastBaseUpdate = q, r === null && (u.shared.lanes = 0), Nn |= s, t.lanes = s, t.memoizedState = B;
    }
  }
  function qs(t, e) {
    if (typeof t != "function") throw Error(f(191, t));
    t.call(e);
  }
  function Hs(t, e) {
    var n = t.callbacks;
    if (n !== null) for (t.callbacks = null, t = 0; t < n.length; t++) qs(n[t], e);
  }
  var qa = b(null), Gi = b(0);
  function Bs(t, e) {
    t = fn, K(Gi, t), K(qa, e), fn = t | e.baseLanes;
  }
  function lc() {
    K(Gi, fn), K(qa, qa.current);
  }
  function ic() {
    fn = Gi.current, U(qa), U(Gi);
  }
  var ge = b(null), Ce = null;
  function An(t) {
    var e = t.alternate;
    K(jt, jt.current & 1), K(ge, t), Ce === null && (e === null || qa.current !== null || e.memoizedState !== null) && (Ce = t);
  }
  function uc(t) {
    K(jt, jt.current), K(ge, t), Ce === null && (Ce = t);
  }
  function js(t) {
    t.tag === 22 ? (K(jt, jt.current), K(ge, t), Ce === null && (Ce = t)) : xn();
  }
  function xn() {
    K(jt, jt.current), K(ge, ge.current);
  }
  function _e(t) {
    U(ge), Ce === t && (Ce = null), U(jt);
  }
  var jt = b(0);
  function Li(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var n = e.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || df(n) || mf(n))) return e;
      } else if (e.tag === 19 && (e.memoizedProps.revealOrder === "forwards" || e.memoizedProps.revealOrder === "backwards" || e.memoizedProps.revealOrder === "unstable_legacy-backwards" || e.memoizedProps.revealOrder === "together")) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    return null;
  }
  var tn = 0, ht = null, xt = null, Lt = null, Xi = false, Ha = false, aa = false, Qi = 0, Al = 0, Ba = null, my = 0;
  function Ht() {
    throw Error(f(321));
  }
  function rc(t, e) {
    if (e === null) return false;
    for (var n = 0; n < e.length && n < t.length; n++) if (!ye(t[n], e[n])) return false;
    return true;
  }
  function cc(t, e, n, a, u, r) {
    return tn = r, ht = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, g.H = t === null || t.memoizedState === null ? Sh : Ec, aa = false, r = n(a, u), aa = false, Ha && (r = Gs(e, n, a, u)), Ys(t), r;
  }
  function Ys(t) {
    g.H = Ol;
    var e = xt !== null && xt.next !== null;
    if (tn = 0, Lt = xt = ht = null, Xi = false, Al = 0, Ba = null, e) throw Error(f(300));
    t === null || Xt || (t = t.dependencies, t !== null && Ri(t) && (Xt = true));
  }
  function Gs(t, e, n, a) {
    ht = t;
    var u = 0;
    do {
      if (Ha && (Ba = null), Al = 0, Ha = false, 25 <= u) throw Error(f(301));
      if (u += 1, Lt = xt = null, t.updateQueue != null) {
        var r = t.updateQueue;
        r.lastEffect = null, r.events = null, r.stores = null, r.memoCache != null && (r.memoCache.index = 0);
      }
      g.H = Th, r = e(n, a);
    } while (Ha);
    return r;
  }
  function py() {
    var t = g.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? xl(e) : e, t = t.useState()[0], (xt !== null ? xt.memoizedState : null) !== t && (ht.flags |= 1024), e;
  }
  function fc() {
    var t = Qi !== 0;
    return Qi = 0, t;
  }
  function oc(t, e, n) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~n;
  }
  function sc(t) {
    if (Xi) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      Xi = false;
    }
    tn = 0, Lt = xt = ht = null, Ha = false, Al = Qi = 0, Ba = null;
  }
  function ne() {
    var t = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Lt === null ? ht.memoizedState = Lt = t : Lt = Lt.next = t, Lt;
  }
  function Yt() {
    if (xt === null) {
      var t = ht.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = xt.next;
    var e = Lt === null ? ht.memoizedState : Lt.next;
    if (e !== null) Lt = e, xt = t;
    else {
      if (t === null) throw ht.alternate === null ? Error(f(467)) : Error(f(310));
      xt = t, t = { memoizedState: xt.memoizedState, baseState: xt.baseState, baseQueue: xt.baseQueue, queue: xt.queue, next: null }, Lt === null ? ht.memoizedState = Lt = t : Lt = Lt.next = t;
    }
    return Lt;
  }
  function Vi() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function xl(t) {
    var e = Al;
    return Al += 1, Ba === null && (Ba = []), t = ws(Ba, t, e), e = ht, (Lt === null ? e.memoizedState : Lt.next) === null && (e = e.alternate, g.H = e === null || e.memoizedState === null ? Sh : Ec), t;
  }
  function Zi(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return xl(t);
      if (t.$$typeof === G) return $t(t);
    }
    throw Error(f(438, String(t)));
  }
  function hc(t) {
    var e = null, n = ht.updateQueue;
    if (n !== null && (e = n.memoCache), e == null) {
      var a = ht.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (e = { data: a.data.map(function(u) {
        return u.slice();
      }), index: 0 })));
    }
    if (e == null && (e = { data: [], index: 0 }), n === null && (n = Vi(), ht.updateQueue = n), n.memoCache = e, n = e.data[e.index], n === void 0) for (n = e.data[e.index] = Array(t), a = 0; a < t; a++) n[a] = I;
    return e.index++, n;
  }
  function en(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function Ki(t) {
    var e = Yt();
    return dc(e, xt, t);
  }
  function dc(t, e, n) {
    var a = t.queue;
    if (a === null) throw Error(f(311));
    a.lastRenderedReducer = n;
    var u = t.baseQueue, r = a.pending;
    if (r !== null) {
      if (u !== null) {
        var s = u.next;
        u.next = r.next, r.next = s;
      }
      e.baseQueue = u = r, a.pending = null;
    }
    if (r = t.baseState, u === null) t.memoizedState = r;
    else {
      e = u.next;
      var m = s = null, _ = null, M = e, q = false;
      do {
        var B = M.lane & -536870913;
        if (B !== M.lane ? (vt & B) === B : (tn & B) === B) {
          var N = M.revertLane;
          if (N === 0) _ !== null && (_ = _.next = { lane: 0, revertLane: 0, gesture: null, action: M.action, hasEagerState: M.hasEagerState, eagerState: M.eagerState, next: null }), B === Da && (q = true);
          else if ((tn & N) === N) {
            M = M.next, N === Da && (q = true);
            continue;
          } else B = { lane: 0, revertLane: M.revertLane, gesture: null, action: M.action, hasEagerState: M.hasEagerState, eagerState: M.eagerState, next: null }, _ === null ? (m = _ = B, s = r) : _ = _.next = B, ht.lanes |= N, Nn |= N;
          B = M.action, aa && n(r, B), r = M.hasEagerState ? M.eagerState : n(r, B);
        } else N = { lane: B, revertLane: M.revertLane, gesture: M.gesture, action: M.action, hasEagerState: M.hasEagerState, eagerState: M.eagerState, next: null }, _ === null ? (m = _ = N, s = r) : _ = _.next = N, ht.lanes |= B, Nn |= B;
        M = M.next;
      } while (M !== null && M !== e);
      if (_ === null ? s = r : _.next = m, !ye(r, t.memoizedState) && (Xt = true, q && (n = Ca, n !== null))) throw n;
      t.memoizedState = r, t.baseState = s, t.baseQueue = _, a.lastRenderedState = r;
    }
    return u === null && (a.lanes = 0), [t.memoizedState, a.dispatch];
  }
  function mc(t) {
    var e = Yt(), n = e.queue;
    if (n === null) throw Error(f(311));
    n.lastRenderedReducer = t;
    var a = n.dispatch, u = n.pending, r = e.memoizedState;
    if (u !== null) {
      n.pending = null;
      var s = u = u.next;
      do
        r = t(r, s.action), s = s.next;
      while (s !== u);
      ye(r, e.memoizedState) || (Xt = true), e.memoizedState = r, e.baseQueue === null && (e.baseState = r), n.lastRenderedState = r;
    }
    return [r, a];
  }
  function Ls(t, e, n) {
    var a = ht, u = Yt(), r = _t;
    if (r) {
      if (n === void 0) throw Error(f(407));
      n = n();
    } else n = e();
    var s = !ye((xt || u).memoizedState, n);
    if (s && (u.memoizedState = n, Xt = true), u = u.queue, vc(Vs.bind(null, a, u, t), [t]), u.getSnapshot !== e || s || Lt !== null && Lt.memoizedState.tag & 1) {
      if (a.flags |= 2048, ja(9, { destroy: void 0 }, Qs.bind(null, a, u, n, e), null), Nt === null) throw Error(f(349));
      r || (tn & 127) !== 0 || Xs(a, e, n);
    }
    return n;
  }
  function Xs(t, e, n) {
    t.flags |= 16384, t = { getSnapshot: e, value: n }, e = ht.updateQueue, e === null ? (e = Vi(), ht.updateQueue = e, e.stores = [t]) : (n = e.stores, n === null ? e.stores = [t] : n.push(t));
  }
  function Qs(t, e, n, a) {
    e.value = n, e.getSnapshot = a, Zs(e) && Ks(t);
  }
  function Vs(t, e, n) {
    return n(function() {
      Zs(e) && Ks(t);
    });
  }
  function Zs(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var n = e();
      return !ye(t, n);
    } catch {
      return true;
    }
  }
  function Ks(t) {
    var e = kn(t, 2);
    e !== null && se(e, t, 2);
  }
  function pc(t) {
    var e = ne();
    if (typeof t == "function") {
      var n = t;
      if (t = n(), aa) {
        pn(true);
        try {
          n();
        } finally {
          pn(false);
        }
      }
    }
    return e.memoizedState = e.baseState = t, e.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: en, lastRenderedState: t }, e;
  }
  function Js(t, e, n, a) {
    return t.baseState = n, dc(t, xt, typeof a == "function" ? a : en);
  }
  function yy(t, e, n, a, u) {
    if (Wi(t)) throw Error(f(485));
    if (t = e.action, t !== null) {
      var r = { payload: u, action: t, next: null, isTransition: true, status: "pending", value: null, reason: null, listeners: [], then: function(s) {
        r.listeners.push(s);
      } };
      g.T !== null ? n(true) : r.isTransition = false, a(r), n = e.pending, n === null ? (r.next = e.pending = r, ks(e, r)) : (r.next = n.next, e.pending = n.next = r);
    }
  }
  function ks(t, e) {
    var n = e.action, a = e.payload, u = t.state;
    if (e.isTransition) {
      var r = g.T, s = {};
      g.T = s;
      try {
        var m = n(u, a), _ = g.S;
        _ !== null && _(s, m), Ws(t, e, m);
      } catch (M) {
        yc(t, e, M);
      } finally {
        r !== null && s.types !== null && (r.types = s.types), g.T = r;
      }
    } else try {
      r = n(u, a), Ws(t, e, r);
    } catch (M) {
      yc(t, e, M);
    }
  }
  function Ws(t, e, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(function(a) {
      $s(t, e, a);
    }, function(a) {
      return yc(t, e, a);
    }) : $s(t, e, n);
  }
  function $s(t, e, n) {
    e.status = "fulfilled", e.value = n, Fs(e), t.state = n, e = t.pending, e !== null && (n = e.next, n === e ? t.pending = null : (n = n.next, e.next = n, ks(t, n)));
  }
  function yc(t, e, n) {
    var a = t.pending;
    if (t.pending = null, a !== null) {
      a = a.next;
      do
        e.status = "rejected", e.reason = n, Fs(e), e = e.next;
      while (e !== a);
    }
    t.action = null;
  }
  function Fs(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function Is(t, e) {
    return e;
  }
  function Ps(t, e) {
    if (_t) {
      var n = Nt.formState;
      if (n !== null) {
        t: {
          var a = ht;
          if (_t) {
            if (Rt) {
              e: {
                for (var u = Rt, r = De; u.nodeType !== 8; ) {
                  if (!r) {
                    u = null;
                    break e;
                  }
                  if (u = Re(u.nextSibling), u === null) {
                    u = null;
                    break e;
                  }
                }
                r = u.data, u = r === "F!" || r === "F" ? u : null;
              }
              if (u) {
                Rt = Re(u.nextSibling), a = u.data === "F!";
                break t;
              }
            }
            bn(a);
          }
          a = false;
        }
        a && (e = n[0]);
      }
    }
    return n = ne(), n.memoizedState = n.baseState = e, a = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Is, lastRenderedState: e }, n.queue = a, n = gh.bind(null, ht, a), a.dispatch = n, a = pc(false), r = Tc.bind(null, ht, false, a.queue), a = ne(), u = { state: e, dispatch: null, action: t, pending: null }, a.queue = u, n = yy.bind(null, ht, u, r, n), u.dispatch = n, a.memoizedState = t, [e, n, false];
  }
  function th(t) {
    var e = Yt();
    return eh(e, xt, t);
  }
  function eh(t, e, n) {
    if (e = dc(t, e, Is)[0], t = Ki(en)[0], typeof e == "object" && e !== null && typeof e.then == "function") try {
      var a = xl(e);
    } catch (s) {
      throw s === Ra ? Hi : s;
    }
    else a = e;
    e = Yt();
    var u = e.queue, r = u.dispatch;
    return n !== e.memoizedState && (ht.flags |= 2048, ja(9, { destroy: void 0 }, vy.bind(null, u, n), null)), [a, r, t];
  }
  function vy(t, e) {
    t.action = e;
  }
  function nh(t) {
    var e = Yt(), n = xt;
    if (n !== null) return eh(e, n, t);
    Yt(), e = e.memoizedState, n = Yt();
    var a = n.queue.dispatch;
    return n.memoizedState = t, [e, a, false];
  }
  function ja(t, e, n, a) {
    return t = { tag: t, create: n, deps: a, inst: e, next: null }, e = ht.updateQueue, e === null && (e = Vi(), ht.updateQueue = e), n = e.lastEffect, n === null ? e.lastEffect = t.next = t : (a = n.next, n.next = t, t.next = a, e.lastEffect = t), t;
  }
  function ah() {
    return Yt().memoizedState;
  }
  function Ji(t, e, n, a) {
    var u = ne();
    ht.flags |= t, u.memoizedState = ja(1 | e, { destroy: void 0 }, n, a === void 0 ? null : a);
  }
  function ki(t, e, n, a) {
    var u = Yt();
    a = a === void 0 ? null : a;
    var r = u.memoizedState.inst;
    xt !== null && a !== null && rc(a, xt.memoizedState.deps) ? u.memoizedState = ja(e, r, n, a) : (ht.flags |= t, u.memoizedState = ja(1 | e, r, n, a));
  }
  function lh(t, e) {
    Ji(8390656, 8, t, e);
  }
  function vc(t, e) {
    ki(2048, 8, t, e);
  }
  function gy(t) {
    ht.flags |= 4;
    var e = ht.updateQueue;
    if (e === null) e = Vi(), ht.updateQueue = e, e.events = [t];
    else {
      var n = e.events;
      n === null ? e.events = [t] : n.push(t);
    }
  }
  function ih(t) {
    var e = Yt().memoizedState;
    return gy({ ref: e, nextImpl: t }), function() {
      if ((Et & 2) !== 0) throw Error(f(440));
      return e.impl.apply(void 0, arguments);
    };
  }
  function uh(t, e) {
    return ki(4, 2, t, e);
  }
  function rh(t, e) {
    return ki(4, 4, t, e);
  }
  function ch(t, e) {
    if (typeof e == "function") {
      t = t();
      var n = e(t);
      return function() {
        typeof n == "function" ? n() : e(null);
      };
    }
    if (e != null) return t = t(), e.current = t, function() {
      e.current = null;
    };
  }
  function fh(t, e, n) {
    n = n != null ? n.concat([t]) : null, ki(4, 4, ch.bind(null, e, t), n);
  }
  function gc() {
  }
  function oh(t, e) {
    var n = Yt();
    e = e === void 0 ? null : e;
    var a = n.memoizedState;
    return e !== null && rc(e, a[1]) ? a[0] : (n.memoizedState = [t, e], t);
  }
  function sh(t, e) {
    var n = Yt();
    e = e === void 0 ? null : e;
    var a = n.memoizedState;
    if (e !== null && rc(e, a[1])) return a[0];
    if (a = t(), aa) {
      pn(true);
      try {
        t();
      } finally {
        pn(false);
      }
    }
    return n.memoizedState = [a, e], a;
  }
  function _c(t, e, n) {
    return n === void 0 || (tn & 1073741824) !== 0 && (vt & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = n, t = hd(), ht.lanes |= t, Nn |= t, n);
  }
  function hh(t, e, n, a) {
    return ye(n, e) ? n : qa.current !== null ? (t = _c(t, n, a), ye(t, e) || (Xt = true), t) : (tn & 42) === 0 || (tn & 1073741824) !== 0 && (vt & 261930) === 0 ? (Xt = true, t.memoizedState = n) : (t = hd(), ht.lanes |= t, Nn |= t, e);
  }
  function dh(t, e, n, a, u) {
    var r = D.p;
    D.p = r !== 0 && 8 > r ? r : 8;
    var s = g.T, m = {};
    g.T = m, Tc(t, false, e, n);
    try {
      var _ = u(), M = g.S;
      if (M !== null && M(m, _), _ !== null && typeof _ == "object" && typeof _.then == "function") {
        var q = dy(_, a);
        Ml(t, e, q, Te(t));
      } else Ml(t, e, a, Te(t));
    } catch (B) {
      Ml(t, e, { then: function() {
      }, status: "rejected", reason: B }, Te());
    } finally {
      D.p = r, s !== null && m.types !== null && (s.types = m.types), g.T = s;
    }
  }
  function _y() {
  }
  function bc(t, e, n, a) {
    if (t.tag !== 5) throw Error(f(476));
    var u = mh(t).queue;
    dh(t, u, e, Q, n === null ? _y : function() {
      return ph(t), n(a);
    });
  }
  function mh(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = { memoizedState: Q, baseState: Q, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: en, lastRenderedState: Q }, next: null };
    var n = {};
    return e.next = { memoizedState: n, baseState: n, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: en, lastRenderedState: n }, next: null }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
  }
  function ph(t) {
    var e = mh(t);
    e.next === null && (e = t.alternate.memoizedState), Ml(t, e.next.queue, {}, Te());
  }
  function Sc() {
    return $t(Vl);
  }
  function yh() {
    return Yt().memoizedState;
  }
  function vh() {
    return Yt().memoizedState;
  }
  function by(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var n = Te();
          t = En(n);
          var a = zn(e, t, n);
          a !== null && (se(a, e, n), Tl(a, e, n)), e = { cache: $r() }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function Sy(t, e, n) {
    var a = Te();
    n = { lane: a, revertLane: 0, gesture: null, action: n, hasEagerState: false, eagerState: null, next: null }, Wi(t) ? _h(e, n) : (n = Yr(t, e, n, a), n !== null && (se(n, t, a), bh(n, e, a)));
  }
  function gh(t, e, n) {
    var a = Te();
    Ml(t, e, n, a);
  }
  function Ml(t, e, n, a) {
    var u = { lane: a, revertLane: 0, gesture: null, action: n, hasEagerState: false, eagerState: null, next: null };
    if (Wi(t)) _h(e, u);
    else {
      var r = t.alternate;
      if (t.lanes === 0 && (r === null || r.lanes === 0) && (r = e.lastRenderedReducer, r !== null)) try {
        var s = e.lastRenderedState, m = r(s, n);
        if (u.hasEagerState = true, u.eagerState = m, ye(m, s)) return Ni(t, e, u, 0), Nt === null && Oi(), false;
      } catch {
      }
      if (n = Yr(t, e, u, a), n !== null) return se(n, t, a), bh(n, e, a), true;
    }
    return false;
  }
  function Tc(t, e, n, a) {
    if (a = { lane: 2, revertLane: tf(), gesture: null, action: a, hasEagerState: false, eagerState: null, next: null }, Wi(t)) {
      if (e) throw Error(f(479));
    } else e = Yr(t, n, a, 2), e !== null && se(e, t, 2);
  }
  function Wi(t) {
    var e = t.alternate;
    return t === ht || e !== null && e === ht;
  }
  function _h(t, e) {
    Ha = Xi = true;
    var n = t.pending;
    n === null ? e.next = e : (e.next = n.next, n.next = e), t.pending = e;
  }
  function bh(t, e, n) {
    if ((n & 4194048) !== 0) {
      var a = e.lanes;
      a &= t.pendingLanes, n |= a, e.lanes = n, Ao(t, n);
    }
  }
  var Ol = { readContext: $t, use: Zi, useCallback: Ht, useContext: Ht, useEffect: Ht, useImperativeHandle: Ht, useLayoutEffect: Ht, useInsertionEffect: Ht, useMemo: Ht, useReducer: Ht, useRef: Ht, useState: Ht, useDebugValue: Ht, useDeferredValue: Ht, useTransition: Ht, useSyncExternalStore: Ht, useId: Ht, useHostTransitionStatus: Ht, useFormState: Ht, useActionState: Ht, useOptimistic: Ht, useMemoCache: Ht, useCacheRefresh: Ht };
  Ol.useEffectEvent = Ht;
  var Sh = { readContext: $t, use: Zi, useCallback: function(t, e) {
    return ne().memoizedState = [t, e === void 0 ? null : e], t;
  }, useContext: $t, useEffect: lh, useImperativeHandle: function(t, e, n) {
    n = n != null ? n.concat([t]) : null, Ji(4194308, 4, ch.bind(null, e, t), n);
  }, useLayoutEffect: function(t, e) {
    return Ji(4194308, 4, t, e);
  }, useInsertionEffect: function(t, e) {
    Ji(4, 2, t, e);
  }, useMemo: function(t, e) {
    var n = ne();
    e = e === void 0 ? null : e;
    var a = t();
    if (aa) {
      pn(true);
      try {
        t();
      } finally {
        pn(false);
      }
    }
    return n.memoizedState = [a, e], a;
  }, useReducer: function(t, e, n) {
    var a = ne();
    if (n !== void 0) {
      var u = n(e);
      if (aa) {
        pn(true);
        try {
          n(e);
        } finally {
          pn(false);
        }
      }
    } else u = e;
    return a.memoizedState = a.baseState = u, t = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: t, lastRenderedState: u }, a.queue = t, t = t.dispatch = Sy.bind(null, ht, t), [a.memoizedState, t];
  }, useRef: function(t) {
    var e = ne();
    return t = { current: t }, e.memoizedState = t;
  }, useState: function(t) {
    t = pc(t);
    var e = t.queue, n = gh.bind(null, ht, e);
    return e.dispatch = n, [t.memoizedState, n];
  }, useDebugValue: gc, useDeferredValue: function(t, e) {
    var n = ne();
    return _c(n, t, e);
  }, useTransition: function() {
    var t = pc(false);
    return t = dh.bind(null, ht, t.queue, true, false), ne().memoizedState = t, [false, t];
  }, useSyncExternalStore: function(t, e, n) {
    var a = ht, u = ne();
    if (_t) {
      if (n === void 0) throw Error(f(407));
      n = n();
    } else {
      if (n = e(), Nt === null) throw Error(f(349));
      (vt & 127) !== 0 || Xs(a, e, n);
    }
    u.memoizedState = n;
    var r = { value: n, getSnapshot: e };
    return u.queue = r, lh(Vs.bind(null, a, r, t), [t]), a.flags |= 2048, ja(9, { destroy: void 0 }, Qs.bind(null, a, r, n, e), null), n;
  }, useId: function() {
    var t = ne(), e = Nt.identifierPrefix;
    if (_t) {
      var n = Le, a = Ge;
      n = (a & ~(1 << 32 - pe(a) - 1)).toString(32) + n, e = "_" + e + "R_" + n, n = Qi++, 0 < n && (e += "H" + n.toString(32)), e += "_";
    } else n = my++, e = "_" + e + "r_" + n.toString(32) + "_";
    return t.memoizedState = e;
  }, useHostTransitionStatus: Sc, useFormState: Ps, useActionState: Ps, useOptimistic: function(t) {
    var e = ne();
    e.memoizedState = e.baseState = t;
    var n = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
    return e.queue = n, e = Tc.bind(null, ht, true, n), n.dispatch = e, [t, e];
  }, useMemoCache: hc, useCacheRefresh: function() {
    return ne().memoizedState = by.bind(null, ht);
  }, useEffectEvent: function(t) {
    var e = ne(), n = { impl: t };
    return e.memoizedState = n, function() {
      if ((Et & 2) !== 0) throw Error(f(440));
      return n.impl.apply(void 0, arguments);
    };
  } }, Ec = { readContext: $t, use: Zi, useCallback: oh, useContext: $t, useEffect: vc, useImperativeHandle: fh, useInsertionEffect: uh, useLayoutEffect: rh, useMemo: sh, useReducer: Ki, useRef: ah, useState: function() {
    return Ki(en);
  }, useDebugValue: gc, useDeferredValue: function(t, e) {
    var n = Yt();
    return hh(n, xt.memoizedState, t, e);
  }, useTransition: function() {
    var t = Ki(en)[0], e = Yt().memoizedState;
    return [typeof t == "boolean" ? t : xl(t), e];
  }, useSyncExternalStore: Ls, useId: yh, useHostTransitionStatus: Sc, useFormState: th, useActionState: th, useOptimistic: function(t, e) {
    var n = Yt();
    return Js(n, xt, t, e);
  }, useMemoCache: hc, useCacheRefresh: vh };
  Ec.useEffectEvent = ih;
  var Th = { readContext: $t, use: Zi, useCallback: oh, useContext: $t, useEffect: vc, useImperativeHandle: fh, useInsertionEffect: uh, useLayoutEffect: rh, useMemo: sh, useReducer: mc, useRef: ah, useState: function() {
    return mc(en);
  }, useDebugValue: gc, useDeferredValue: function(t, e) {
    var n = Yt();
    return xt === null ? _c(n, t, e) : hh(n, xt.memoizedState, t, e);
  }, useTransition: function() {
    var t = mc(en)[0], e = Yt().memoizedState;
    return [typeof t == "boolean" ? t : xl(t), e];
  }, useSyncExternalStore: Ls, useId: yh, useHostTransitionStatus: Sc, useFormState: nh, useActionState: nh, useOptimistic: function(t, e) {
    var n = Yt();
    return xt !== null ? Js(n, xt, t, e) : (n.baseState = t, [t, n.queue.dispatch]);
  }, useMemoCache: hc, useCacheRefresh: vh };
  Th.useEffectEvent = ih;
  function zc(t, e, n, a) {
    e = t.memoizedState, n = n(a, e), n = n == null ? e : E({}, e, n), t.memoizedState = n, t.lanes === 0 && (t.updateQueue.baseState = n);
  }
  var Ac = { enqueueSetState: function(t, e, n) {
    t = t._reactInternals;
    var a = Te(), u = En(a);
    u.payload = e, n != null && (u.callback = n), e = zn(t, u, a), e !== null && (se(e, t, a), Tl(e, t, a));
  }, enqueueReplaceState: function(t, e, n) {
    t = t._reactInternals;
    var a = Te(), u = En(a);
    u.tag = 1, u.payload = e, n != null && (u.callback = n), e = zn(t, u, a), e !== null && (se(e, t, a), Tl(e, t, a));
  }, enqueueForceUpdate: function(t, e) {
    t = t._reactInternals;
    var n = Te(), a = En(n);
    a.tag = 2, e != null && (a.callback = e), e = zn(t, a, n), e !== null && (se(e, t, n), Tl(e, t, n));
  } };
  function Eh(t, e, n, a, u, r, s) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, r, s) : e.prototype && e.prototype.isPureReactComponent ? !ml(n, a) || !ml(u, r) : true;
  }
  function zh(t, e, n, a) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, a), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, a), e.state !== t && Ac.enqueueReplaceState(e, e.state, null);
  }
  function la(t, e) {
    var n = e;
    if ("ref" in e) {
      n = {};
      for (var a in e) a !== "ref" && (n[a] = e[a]);
    }
    if (t = t.defaultProps) {
      n === e && (n = E({}, n));
      for (var u in t) n[u] === void 0 && (n[u] = t[u]);
    }
    return n;
  }
  function Ah(t) {
    Mi(t);
  }
  function xh(t) {
    console.error(t);
  }
  function Mh(t) {
    Mi(t);
  }
  function $i(t, e) {
    try {
      var n = t.onUncaughtError;
      n(e.value, { componentStack: e.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function Oh(t, e, n) {
    try {
      var a = t.onCaughtError;
      a(n.value, { componentStack: n.stack, errorBoundary: e.tag === 1 ? e.stateNode : null });
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  function xc(t, e, n) {
    return n = En(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      $i(t, e);
    }, n;
  }
  function Nh(t) {
    return t = En(t), t.tag = 3, t;
  }
  function wh(t, e, n, a) {
    var u = n.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var r = a.value;
      t.payload = function() {
        return u(r);
      }, t.callback = function() {
        Oh(e, n, a);
      };
    }
    var s = n.stateNode;
    s !== null && typeof s.componentDidCatch == "function" && (t.callback = function() {
      Oh(e, n, a), typeof u != "function" && (wn === null ? wn = /* @__PURE__ */ new Set([this]) : wn.add(this));
      var m = a.stack;
      this.componentDidCatch(a.value, { componentStack: m !== null ? m : "" });
    });
  }
  function Ty(t, e, n, a, u) {
    if (n.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (e = n.alternate, e !== null && wa(e, n, u, true), n = ge.current, n !== null) {
        switch (n.tag) {
          case 31:
          case 13:
            return Ce === null ? cu() : n.alternate === null && Bt === 0 && (Bt = 3), n.flags &= -257, n.flags |= 65536, n.lanes = u, a === Bi ? n.flags |= 16384 : (e = n.updateQueue, e === null ? n.updateQueue = /* @__PURE__ */ new Set([a]) : e.add(a), Fc(t, a, u)), false;
          case 22:
            return n.flags |= 65536, a === Bi ? n.flags |= 16384 : (e = n.updateQueue, e === null ? (e = { transitions: null, markerInstances: null, retryQueue: /* @__PURE__ */ new Set([a]) }, n.updateQueue = e) : (n = e.retryQueue, n === null ? e.retryQueue = /* @__PURE__ */ new Set([a]) : n.add(a)), Fc(t, a, u)), false;
        }
        throw Error(f(435, n.tag));
      }
      return Fc(t, a, u), cu(), false;
    }
    if (_t) return e = ge.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = u, a !== Zr && (t = Error(f(422), { cause: a }), vl(Oe(t, n)))) : (a !== Zr && (e = Error(f(423), { cause: a }), vl(Oe(e, n))), t = t.current.alternate, t.flags |= 65536, u &= -u, t.lanes |= u, a = Oe(a, n), u = xc(t.stateNode, a, u), nc(t, u), Bt !== 4 && (Bt = 2)), false;
    var r = Error(f(520), { cause: a });
    if (r = Oe(r, n), Hl === null ? Hl = [r] : Hl.push(r), Bt !== 4 && (Bt = 2), e === null) return true;
    a = Oe(a, n), n = e;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, t = u & -u, n.lanes |= t, t = xc(n.stateNode, a, t), nc(n, t), false;
        case 1:
          if (e = n.type, r = n.stateNode, (n.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || r !== null && typeof r.componentDidCatch == "function" && (wn === null || !wn.has(r)))) return n.flags |= 65536, u &= -u, n.lanes |= u, u = Nh(u), wh(u, t, n, a), nc(n, u), false;
      }
      n = n.return;
    } while (n !== null);
    return false;
  }
  var Mc = Error(f(461)), Xt = false;
  function Ft(t, e, n, a) {
    e.child = t === null ? Us(e, null, n, a) : na(e, t.child, n, a);
  }
  function Dh(t, e, n, a, u) {
    n = n.render;
    var r = e.ref;
    if ("ref" in a) {
      var s = {};
      for (var m in a) m !== "ref" && (s[m] = a[m]);
    } else s = a;
    return In(e), a = cc(t, e, n, s, r, u), m = fc(), t !== null && !Xt ? (oc(t, e, u), nn(t, e, u)) : (_t && m && Qr(e), e.flags |= 1, Ft(t, e, a, u), e.child);
  }
  function Ch(t, e, n, a, u) {
    if (t === null) {
      var r = n.type;
      return typeof r == "function" && !Gr(r) && r.defaultProps === void 0 && n.compare === null ? (e.tag = 15, e.type = r, Rh(t, e, r, a, u)) : (t = Di(n.type, null, a, e, e.mode, u), t.ref = e.ref, t.return = e, e.child = t);
    }
    if (r = t.child, !qc(t, u)) {
      var s = r.memoizedProps;
      if (n = n.compare, n = n !== null ? n : ml, n(s, a) && t.ref === e.ref) return nn(t, e, u);
    }
    return e.flags |= 1, t = $e(r, a), t.ref = e.ref, t.return = e, e.child = t;
  }
  function Rh(t, e, n, a, u) {
    if (t !== null) {
      var r = t.memoizedProps;
      if (ml(r, a) && t.ref === e.ref) if (Xt = false, e.pendingProps = a = r, qc(t, u)) (t.flags & 131072) !== 0 && (Xt = true);
      else return e.lanes = t.lanes, nn(t, e, u);
    }
    return Oc(t, e, n, a, u);
  }
  function Uh(t, e, n, a) {
    var u = a.children, r = t !== null ? t.memoizedState : null;
    if (t === null && e.stateNode === null && (e.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), a.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (r = r !== null ? r.baseLanes | n : n, t !== null) {
          for (a = e.child = t.child, u = 0; a !== null; ) u = u | a.lanes | a.childLanes, a = a.sibling;
          a = u & ~r;
        } else a = 0, e.child = null;
        return qh(t, e, r, n, a);
      }
      if ((n & 536870912) !== 0) e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && qi(e, r !== null ? r.cachePool : null), r !== null ? Bs(e, r) : lc(), js(e);
      else return a = e.lanes = 536870912, qh(t, e, r !== null ? r.baseLanes | n : n, n, a);
    } else r !== null ? (qi(e, r.cachePool), Bs(e, r), xn(), e.memoizedState = null) : (t !== null && qi(e, null), lc(), xn());
    return Ft(t, e, u, n), e.child;
  }
  function Nl(t, e) {
    return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), e.sibling;
  }
  function qh(t, e, n, a, u) {
    var r = Ir();
    return r = r === null ? null : { parent: Gt._currentValue, pool: r }, e.memoizedState = { baseLanes: n, cachePool: r }, t !== null && qi(e, null), lc(), js(e), t !== null && wa(t, e, a, true), e.childLanes = u, null;
  }
  function Fi(t, e) {
    return e = Pi({ mode: e.mode, children: e.children }, t.mode), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function Hh(t, e, n) {
    return na(e, t.child, null, n), t = Fi(e, e.pendingProps), t.flags |= 2, _e(e), e.memoizedState = null, t;
  }
  function Ey(t, e, n) {
    var a = e.pendingProps, u = (e.flags & 128) !== 0;
    if (e.flags &= -129, t === null) {
      if (_t) {
        if (a.mode === "hidden") return t = Fi(e, a), e.lanes = 536870912, Nl(null, t);
        if (uc(e), (t = Rt) ? (t = kd(t, De), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = { dehydrated: t, treeContext: gn !== null ? { id: Ge, overflow: Le } : null, retryLane: 536870912, hydrationErrors: null }, n = _s(t), n.return = e, e.child = n, Wt = e, Rt = null)) : t = null, t === null) throw bn(e);
        return e.lanes = 536870912, null;
      }
      return Fi(e, a);
    }
    var r = t.memoizedState;
    if (r !== null) {
      var s = r.dehydrated;
      if (uc(e), u) if (e.flags & 256) e.flags &= -257, e = Hh(t, e, n);
      else if (e.memoizedState !== null) e.child = t.child, e.flags |= 128, e = null;
      else throw Error(f(558));
      else if (Xt || wa(t, e, n, false), u = (n & t.childLanes) !== 0, Xt || u) {
        if (a = Nt, a !== null && (s = xo(a, n), s !== 0 && s !== r.retryLane)) throw r.retryLane = s, kn(t, s), se(a, t, s), Mc;
        cu(), e = Hh(t, e, n);
      } else t = r.treeContext, Rt = Re(s.nextSibling), Wt = e, _t = true, _n = null, De = false, t !== null && Ts(e, t), e = Fi(e, a), e.flags |= 4096;
      return e;
    }
    return t = $e(t.child, { mode: a.mode, children: a.children }), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Ii(t, e) {
    var n = e.ref;
    if (n === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object") throw Error(f(284));
      (t === null || t.ref !== n) && (e.flags |= 4194816);
    }
  }
  function Oc(t, e, n, a, u) {
    return In(e), n = cc(t, e, n, a, void 0, u), a = fc(), t !== null && !Xt ? (oc(t, e, u), nn(t, e, u)) : (_t && a && Qr(e), e.flags |= 1, Ft(t, e, n, u), e.child);
  }
  function Bh(t, e, n, a, u, r) {
    return In(e), e.updateQueue = null, n = Gs(e, a, n, u), Ys(t), a = fc(), t !== null && !Xt ? (oc(t, e, r), nn(t, e, r)) : (_t && a && Qr(e), e.flags |= 1, Ft(t, e, n, r), e.child);
  }
  function jh(t, e, n, a, u) {
    if (In(e), e.stateNode === null) {
      var r = xa, s = n.contextType;
      typeof s == "object" && s !== null && (r = $t(s)), r = new n(a, r), e.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Ac, e.stateNode = r, r._reactInternals = e, r = e.stateNode, r.props = a, r.state = e.memoizedState, r.refs = {}, tc(e), s = n.contextType, r.context = typeof s == "object" && s !== null ? $t(s) : xa, r.state = e.memoizedState, s = n.getDerivedStateFromProps, typeof s == "function" && (zc(e, n, s, a), r.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof r.getSnapshotBeforeUpdate == "function" || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (s = r.state, typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(), s !== r.state && Ac.enqueueReplaceState(r, r.state, null), zl(e, a, r, u), El(), r.state = e.memoizedState), typeof r.componentDidMount == "function" && (e.flags |= 4194308), a = true;
    } else if (t === null) {
      r = e.stateNode;
      var m = e.memoizedProps, _ = la(n, m);
      r.props = _;
      var M = r.context, q = n.contextType;
      s = xa, typeof q == "object" && q !== null && (s = $t(q));
      var B = n.getDerivedStateFromProps;
      q = typeof B == "function" || typeof r.getSnapshotBeforeUpdate == "function", m = e.pendingProps !== m, q || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (m || M !== s) && zh(e, r, a, s), Tn = false;
      var N = e.memoizedState;
      r.state = N, zl(e, a, r, u), El(), M = e.memoizedState, m || N !== M || Tn ? (typeof B == "function" && (zc(e, n, B, a), M = e.memoizedState), (_ = Tn || Eh(e, n, _, a, N, M, s)) ? (q || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount()), typeof r.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof r.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = a, e.memoizedState = M), r.props = a, r.state = M, r.context = s, a = _) : (typeof r.componentDidMount == "function" && (e.flags |= 4194308), a = false);
    } else {
      r = e.stateNode, ec(t, e), s = e.memoizedProps, q = la(n, s), r.props = q, B = e.pendingProps, N = r.context, M = n.contextType, _ = xa, typeof M == "object" && M !== null && (_ = $t(M)), m = n.getDerivedStateFromProps, (M = typeof m == "function" || typeof r.getSnapshotBeforeUpdate == "function") || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (s !== B || N !== _) && zh(e, r, a, _), Tn = false, N = e.memoizedState, r.state = N, zl(e, a, r, u), El();
      var C = e.memoizedState;
      s !== B || N !== C || Tn || t !== null && t.dependencies !== null && Ri(t.dependencies) ? (typeof m == "function" && (zc(e, n, m, a), C = e.memoizedState), (q = Tn || Eh(e, n, q, a, N, C, _) || t !== null && t.dependencies !== null && Ri(t.dependencies)) ? (M || typeof r.UNSAFE_componentWillUpdate != "function" && typeof r.componentWillUpdate != "function" || (typeof r.componentWillUpdate == "function" && r.componentWillUpdate(a, C, _), typeof r.UNSAFE_componentWillUpdate == "function" && r.UNSAFE_componentWillUpdate(a, C, _)), typeof r.componentDidUpdate == "function" && (e.flags |= 4), typeof r.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof r.componentDidUpdate != "function" || s === t.memoizedProps && N === t.memoizedState || (e.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || s === t.memoizedProps && N === t.memoizedState || (e.flags |= 1024), e.memoizedProps = a, e.memoizedState = C), r.props = a, r.state = C, r.context = _, a = q) : (typeof r.componentDidUpdate != "function" || s === t.memoizedProps && N === t.memoizedState || (e.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || s === t.memoizedProps && N === t.memoizedState || (e.flags |= 1024), a = false);
    }
    return r = a, Ii(t, e), a = (e.flags & 128) !== 0, r || a ? (r = e.stateNode, n = a && typeof n.getDerivedStateFromError != "function" ? null : r.render(), e.flags |= 1, t !== null && a ? (e.child = na(e, t.child, null, u), e.child = na(e, null, n, u)) : Ft(t, e, n, u), e.memoizedState = r.state, t = e.child) : t = nn(t, e, u), t;
  }
  function Yh(t, e, n, a) {
    return $n(), e.flags |= 256, Ft(t, e, n, a), e.child;
  }
  var Nc = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
  function wc(t) {
    return { baseLanes: t, cachePool: Os() };
  }
  function Dc(t, e, n) {
    return t = t !== null ? t.childLanes & ~n : 0, e && (t |= Se), t;
  }
  function Gh(t, e, n) {
    var a = e.pendingProps, u = false, r = (e.flags & 128) !== 0, s;
    if ((s = r) || (s = t !== null && t.memoizedState === null ? false : (jt.current & 2) !== 0), s && (u = true, e.flags &= -129), s = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (_t) {
        if (u ? An(e) : xn(), (t = Rt) ? (t = kd(t, De), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = { dehydrated: t, treeContext: gn !== null ? { id: Ge, overflow: Le } : null, retryLane: 536870912, hydrationErrors: null }, n = _s(t), n.return = e, e.child = n, Wt = e, Rt = null)) : t = null, t === null) throw bn(e);
        return mf(t) ? e.lanes = 32 : e.lanes = 536870912, null;
      }
      var m = a.children;
      return a = a.fallback, u ? (xn(), u = e.mode, m = Pi({ mode: "hidden", children: m }, u), a = Wn(a, u, n, null), m.return = e, a.return = e, m.sibling = a, e.child = m, a = e.child, a.memoizedState = wc(n), a.childLanes = Dc(t, s, n), e.memoizedState = Nc, Nl(null, a)) : (An(e), Cc(e, m));
    }
    var _ = t.memoizedState;
    if (_ !== null && (m = _.dehydrated, m !== null)) {
      if (r) e.flags & 256 ? (An(e), e.flags &= -257, e = Rc(t, e, n)) : e.memoizedState !== null ? (xn(), e.child = t.child, e.flags |= 128, e = null) : (xn(), m = a.fallback, u = e.mode, a = Pi({ mode: "visible", children: a.children }, u), m = Wn(m, u, n, null), m.flags |= 2, a.return = e, m.return = e, a.sibling = m, e.child = a, na(e, t.child, null, n), a = e.child, a.memoizedState = wc(n), a.childLanes = Dc(t, s, n), e.memoizedState = Nc, e = Nl(null, a));
      else if (An(e), mf(m)) {
        if (s = m.nextSibling && m.nextSibling.dataset, s) var M = s.dgst;
        s = M, a = Error(f(419)), a.stack = "", a.digest = s, vl({ value: a, source: null, stack: null }), e = Rc(t, e, n);
      } else if (Xt || wa(t, e, n, false), s = (n & t.childLanes) !== 0, Xt || s) {
        if (s = Nt, s !== null && (a = xo(s, n), a !== 0 && a !== _.retryLane)) throw _.retryLane = a, kn(t, a), se(s, t, a), Mc;
        df(m) || cu(), e = Rc(t, e, n);
      } else df(m) ? (e.flags |= 192, e.child = t.child, e = null) : (t = _.treeContext, Rt = Re(m.nextSibling), Wt = e, _t = true, _n = null, De = false, t !== null && Ts(e, t), e = Cc(e, a.children), e.flags |= 4096);
      return e;
    }
    return u ? (xn(), m = a.fallback, u = e.mode, _ = t.child, M = _.sibling, a = $e(_, { mode: "hidden", children: a.children }), a.subtreeFlags = _.subtreeFlags & 65011712, M !== null ? m = $e(M, m) : (m = Wn(m, u, n, null), m.flags |= 2), m.return = e, a.return = e, a.sibling = m, e.child = a, Nl(null, a), a = e.child, m = t.child.memoizedState, m === null ? m = wc(n) : (u = m.cachePool, u !== null ? (_ = Gt._currentValue, u = u.parent !== _ ? { parent: _, pool: _ } : u) : u = Os(), m = { baseLanes: m.baseLanes | n, cachePool: u }), a.memoizedState = m, a.childLanes = Dc(t, s, n), e.memoizedState = Nc, Nl(t.child, a)) : (An(e), n = t.child, t = n.sibling, n = $e(n, { mode: "visible", children: a.children }), n.return = e, n.sibling = null, t !== null && (s = e.deletions, s === null ? (e.deletions = [t], e.flags |= 16) : s.push(t)), e.child = n, e.memoizedState = null, n);
  }
  function Cc(t, e) {
    return e = Pi({ mode: "visible", children: e }, t.mode), e.return = t, t.child = e;
  }
  function Pi(t, e) {
    return t = ve(22, t, null, e), t.lanes = 0, t;
  }
  function Rc(t, e, n) {
    return na(e, t.child, null, n), t = Cc(e, e.pendingProps.children), t.flags |= 2, e.memoizedState = null, t;
  }
  function Lh(t, e, n) {
    t.lanes |= e;
    var a = t.alternate;
    a !== null && (a.lanes |= e), kr(t.return, e, n);
  }
  function Uc(t, e, n, a, u, r) {
    var s = t.memoizedState;
    s === null ? t.memoizedState = { isBackwards: e, rendering: null, renderingStartTime: 0, last: a, tail: n, tailMode: u, treeForkCount: r } : (s.isBackwards = e, s.rendering = null, s.renderingStartTime = 0, s.last = a, s.tail = n, s.tailMode = u, s.treeForkCount = r);
  }
  function Xh(t, e, n) {
    var a = e.pendingProps, u = a.revealOrder, r = a.tail;
    a = a.children;
    var s = jt.current, m = (s & 2) !== 0;
    if (m ? (s = s & 1 | 2, e.flags |= 128) : s &= 1, K(jt, s), Ft(t, e, a, n), a = _t ? yl : 0, !m && t !== null && (t.flags & 128) !== 0) t: for (t = e.child; t !== null; ) {
      if (t.tag === 13) t.memoizedState !== null && Lh(t, n, e);
      else if (t.tag === 19) Lh(t, n, e);
      else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break t;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) break t;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    switch (u) {
      case "forwards":
        for (n = e.child, u = null; n !== null; ) t = n.alternate, t !== null && Li(t) === null && (u = n), n = n.sibling;
        n = u, n === null ? (u = e.child, e.child = null) : (u = n.sibling, n.sibling = null), Uc(e, false, u, n, r, a);
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (n = null, u = e.child, e.child = null; u !== null; ) {
          if (t = u.alternate, t !== null && Li(t) === null) {
            e.child = u;
            break;
          }
          t = u.sibling, u.sibling = n, n = u, u = t;
        }
        Uc(e, true, n, null, r, a);
        break;
      case "together":
        Uc(e, false, null, null, void 0, a);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function nn(t, e, n) {
    if (t !== null && (e.dependencies = t.dependencies), Nn |= e.lanes, (n & e.childLanes) === 0) if (t !== null) {
      if (wa(t, e, n, false), (n & e.childLanes) === 0) return null;
    } else return null;
    if (t !== null && e.child !== t.child) throw Error(f(153));
    if (e.child !== null) {
      for (t = e.child, n = $e(t, t.pendingProps), e.child = n, n.return = e; t.sibling !== null; ) t = t.sibling, n = n.sibling = $e(t, t.pendingProps), n.return = e;
      n.sibling = null;
    }
    return e.child;
  }
  function qc(t, e) {
    return (t.lanes & e) !== 0 ? true : (t = t.dependencies, !!(t !== null && Ri(t)));
  }
  function zy(t, e, n) {
    switch (e.tag) {
      case 3:
        Dt(e, e.stateNode.containerInfo), Sn(e, Gt, t.memoizedState.cache), $n();
        break;
      case 27:
      case 5:
        el(e);
        break;
      case 4:
        Dt(e, e.stateNode.containerInfo);
        break;
      case 10:
        Sn(e, e.type, e.memoizedProps.value);
        break;
      case 31:
        if (e.memoizedState !== null) return e.flags |= 128, uc(e), null;
        break;
      case 13:
        var a = e.memoizedState;
        if (a !== null) return a.dehydrated !== null ? (An(e), e.flags |= 128, null) : (n & e.child.childLanes) !== 0 ? Gh(t, e, n) : (An(e), t = nn(t, e, n), t !== null ? t.sibling : null);
        An(e);
        break;
      case 19:
        var u = (t.flags & 128) !== 0;
        if (a = (n & e.childLanes) !== 0, a || (wa(t, e, n, false), a = (n & e.childLanes) !== 0), u) {
          if (a) return Xh(t, e, n);
          e.flags |= 128;
        }
        if (u = e.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), K(jt, jt.current), a) break;
        return null;
      case 22:
        return e.lanes = 0, Uh(t, e, n, e.pendingProps);
      case 24:
        Sn(e, Gt, t.memoizedState.cache);
    }
    return nn(t, e, n);
  }
  function Qh(t, e, n) {
    if (t !== null) if (t.memoizedProps !== e.pendingProps) Xt = true;
    else {
      if (!qc(t, n) && (e.flags & 128) === 0) return Xt = false, zy(t, e, n);
      Xt = (t.flags & 131072) !== 0;
    }
    else Xt = false, _t && (e.flags & 1048576) !== 0 && Ss(e, yl, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          var a = e.pendingProps;
          if (t = ta(e.elementType), e.type = t, typeof t == "function") Gr(t) ? (a = la(t, a), e.tag = 1, e = jh(null, e, t, a, n)) : (e.tag = 0, e = Oc(null, e, t, a, n));
          else {
            if (t != null) {
              var u = t.$$typeof;
              if (u === $) {
                e.tag = 11, e = Dh(null, e, t, a, n);
                break t;
              } else if (u === R) {
                e.tag = 14, e = Ch(null, e, t, a, n);
                break t;
              }
            }
            throw e = O(t) || t, Error(f(306, e, ""));
          }
        }
        return e;
      case 0:
        return Oc(t, e, e.type, e.pendingProps, n);
      case 1:
        return a = e.type, u = la(a, e.pendingProps), jh(t, e, a, u, n);
      case 3:
        t: {
          if (Dt(e, e.stateNode.containerInfo), t === null) throw Error(f(387));
          a = e.pendingProps;
          var r = e.memoizedState;
          u = r.element, ec(t, e), zl(e, a, null, n);
          var s = e.memoizedState;
          if (a = s.cache, Sn(e, Gt, a), a !== r.cache && Wr(e, [Gt], n, true), El(), a = s.element, r.isDehydrated) if (r = { element: a, isDehydrated: false, cache: s.cache }, e.updateQueue.baseState = r, e.memoizedState = r, e.flags & 256) {
            e = Yh(t, e, a, n);
            break t;
          } else if (a !== u) {
            u = Oe(Error(f(424)), e), vl(u), e = Yh(t, e, a, n);
            break t;
          } else for (t = e.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, Rt = Re(t.firstChild), Wt = e, _t = true, _n = null, De = true, n = Us(e, null, a, n), e.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if ($n(), a === u) {
              e = nn(t, e, n);
              break t;
            }
            Ft(t, e, a, n);
          }
          e = e.child;
        }
        return e;
      case 26:
        return Ii(t, e), t === null ? (n = tm(e.type, null, e.pendingProps, null)) ? e.memoizedState = n : _t || (n = e.type, t = e.pendingProps, a = pu(ct.current).createElement(n), a[kt] = e, a[ie] = t, It(a, n, t), Kt(a), e.stateNode = a) : e.memoizedState = tm(e.type, t.memoizedProps, e.pendingProps, t.memoizedState), null;
      case 27:
        return el(e), t === null && _t && (a = e.stateNode = Fd(e.type, e.pendingProps, ct.current), Wt = e, De = true, u = Rt, Un(e.type) ? (pf = u, Rt = Re(a.firstChild)) : Rt = u), Ft(t, e, e.pendingProps.children, n), Ii(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && _t && ((u = a = Rt) && (a = tv(a, e.type, e.pendingProps, De), a !== null ? (e.stateNode = a, Wt = e, Rt = Re(a.firstChild), De = false, u = true) : u = false), u || bn(e)), el(e), u = e.type, r = e.pendingProps, s = t !== null ? t.memoizedProps : null, a = r.children, of(u, r) ? a = null : s !== null && of(u, s) && (e.flags |= 32), e.memoizedState !== null && (u = cc(t, e, py, null, null, n), Vl._currentValue = u), Ii(t, e), Ft(t, e, a, n), e.child;
      case 6:
        return t === null && _t && ((t = n = Rt) && (n = ev(n, e.pendingProps, De), n !== null ? (e.stateNode = n, Wt = e, Rt = null, t = true) : t = false), t || bn(e)), null;
      case 13:
        return Gh(t, e, n);
      case 4:
        return Dt(e, e.stateNode.containerInfo), a = e.pendingProps, t === null ? e.child = na(e, null, a, n) : Ft(t, e, a, n), e.child;
      case 11:
        return Dh(t, e, e.type, e.pendingProps, n);
      case 7:
        return Ft(t, e, e.pendingProps, n), e.child;
      case 8:
        return Ft(t, e, e.pendingProps.children, n), e.child;
      case 12:
        return Ft(t, e, e.pendingProps.children, n), e.child;
      case 10:
        return a = e.pendingProps, Sn(e, e.type, a.value), Ft(t, e, a.children, n), e.child;
      case 9:
        return u = e.type._context, a = e.pendingProps.children, In(e), u = $t(u), a = a(u), e.flags |= 1, Ft(t, e, a, n), e.child;
      case 14:
        return Ch(t, e, e.type, e.pendingProps, n);
      case 15:
        return Rh(t, e, e.type, e.pendingProps, n);
      case 19:
        return Xh(t, e, n);
      case 31:
        return Ey(t, e, n);
      case 22:
        return Uh(t, e, n, e.pendingProps);
      case 24:
        return In(e), a = $t(Gt), t === null ? (u = Ir(), u === null && (u = Nt, r = $r(), u.pooledCache = r, r.refCount++, r !== null && (u.pooledCacheLanes |= n), u = r), e.memoizedState = { parent: a, cache: u }, tc(e), Sn(e, Gt, u)) : ((t.lanes & n) !== 0 && (ec(t, e), zl(e, null, null, n), El()), u = t.memoizedState, r = e.memoizedState, u.parent !== a ? (u = { parent: a, cache: a }, e.memoizedState = u, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = u), Sn(e, Gt, a)) : (a = r.cache, Sn(e, Gt, a), a !== u.cache && Wr(e, [Gt], n, true))), Ft(t, e, e.pendingProps.children, n), e.child;
      case 29:
        throw e.pendingProps;
    }
    throw Error(f(156, e.tag));
  }
  function an(t) {
    t.flags |= 4;
  }
  function Hc(t, e, n, a, u) {
    if ((e = (t.mode & 32) !== 0) && (e = false), e) {
      if (t.flags |= 16777216, (u & 335544128) === u) if (t.stateNode.complete) t.flags |= 8192;
      else if (yd()) t.flags |= 8192;
      else throw ea = Bi, Pr;
    } else t.flags &= -16777217;
  }
  function Vh(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0) t.flags &= -16777217;
    else if (t.flags |= 16777216, !im(e)) if (yd()) t.flags |= 8192;
    else throw ea = Bi, Pr;
  }
  function tu(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? Eo() : 536870912, t.lanes |= e, Xa |= e);
  }
  function wl(t, e) {
    if (!_t) switch (t.tailMode) {
      case "hidden":
        e = t.tail;
        for (var n = null; e !== null; ) e.alternate !== null && (n = e), e = e.sibling;
        n === null ? t.tail = null : n.sibling = null;
        break;
      case "collapsed":
        n = t.tail;
        for (var a = null; n !== null; ) n.alternate !== null && (a = n), n = n.sibling;
        a === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : a.sibling = null;
    }
  }
  function Ut(t) {
    var e = t.alternate !== null && t.alternate.child === t.child, n = 0, a = 0;
    if (e) for (var u = t.child; u !== null; ) n |= u.lanes | u.childLanes, a |= u.subtreeFlags & 65011712, a |= u.flags & 65011712, u.return = t, u = u.sibling;
    else for (u = t.child; u !== null; ) n |= u.lanes | u.childLanes, a |= u.subtreeFlags, a |= u.flags, u.return = t, u = u.sibling;
    return t.subtreeFlags |= a, t.childLanes = n, e;
  }
  function Ay(t, e, n) {
    var a = e.pendingProps;
    switch (Vr(e), e.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ut(e), null;
      case 1:
        return Ut(e), null;
      case 3:
        return n = e.stateNode, a = null, t !== null && (a = t.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), Pe(Gt), Ct(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (t === null || t.child === null) && (Na(e) ? an(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, Kr())), Ut(e), null;
      case 26:
        var u = e.type, r = e.memoizedState;
        return t === null ? (an(e), r !== null ? (Ut(e), Vh(e, r)) : (Ut(e), Hc(e, u, null, a, n))) : r ? r !== t.memoizedState ? (an(e), Ut(e), Vh(e, r)) : (Ut(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== a && an(e), Ut(e), Hc(e, u, t, a, n)), null;
      case 27:
        if (si(e), n = ct.current, u = e.type, t !== null && e.stateNode != null) t.memoizedProps !== a && an(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(f(166));
            return Ut(e), null;
          }
          t = k.current, Na(e) ? Es(e) : (t = Fd(u, a, n), e.stateNode = t, an(e));
        }
        return Ut(e), null;
      case 5:
        if (si(e), u = e.type, t !== null && e.stateNode != null) t.memoizedProps !== a && an(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(f(166));
            return Ut(e), null;
          }
          if (r = k.current, Na(e)) Es(e);
          else {
            var s = pu(ct.current);
            switch (r) {
              case 1:
                r = s.createElementNS("http://www.w3.org/2000/svg", u);
                break;
              case 2:
                r = s.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                break;
              default:
                switch (u) {
                  case "svg":
                    r = s.createElementNS("http://www.w3.org/2000/svg", u);
                    break;
                  case "math":
                    r = s.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                    break;
                  case "script":
                    r = s.createElement("div"), r.innerHTML = "<script><\/script>", r = r.removeChild(r.firstChild);
                    break;
                  case "select":
                    r = typeof a.is == "string" ? s.createElement("select", { is: a.is }) : s.createElement("select"), a.multiple ? r.multiple = true : a.size && (r.size = a.size);
                    break;
                  default:
                    r = typeof a.is == "string" ? s.createElement(u, { is: a.is }) : s.createElement(u);
                }
            }
            r[kt] = e, r[ie] = a;
            t: for (s = e.child; s !== null; ) {
              if (s.tag === 5 || s.tag === 6) r.appendChild(s.stateNode);
              else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                s.child.return = s, s = s.child;
                continue;
              }
              if (s === e) break t;
              for (; s.sibling === null; ) {
                if (s.return === null || s.return === e) break t;
                s = s.return;
              }
              s.sibling.return = s.return, s = s.sibling;
            }
            e.stateNode = r;
            t: switch (It(r, u, a), u) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break t;
              case "img":
                a = true;
                break t;
              default:
                a = false;
            }
            a && an(e);
          }
        }
        return Ut(e), Hc(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, n), null;
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== a && an(e);
        else {
          if (typeof a != "string" && e.stateNode === null) throw Error(f(166));
          if (t = ct.current, Na(e)) {
            if (t = e.stateNode, n = e.memoizedProps, a = null, u = Wt, u !== null) switch (u.tag) {
              case 27:
              case 5:
                a = u.memoizedProps;
            }
            t[kt] = e, t = !!(t.nodeValue === n || a !== null && a.suppressHydrationWarning === true || Gd(t.nodeValue, n)), t || bn(e, true);
          } else t = pu(t).createTextNode(a), t[kt] = e, e.stateNode = t;
        }
        return Ut(e), null;
      case 31:
        if (n = e.memoizedState, t === null || t.memoizedState !== null) {
          if (a = Na(e), n !== null) {
            if (t === null) {
              if (!a) throw Error(f(318));
              if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(f(557));
              t[kt] = e;
            } else $n(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            Ut(e), t = false;
          } else n = Kr(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n), t = true;
          if (!t) return e.flags & 256 ? (_e(e), e) : (_e(e), null);
          if ((e.flags & 128) !== 0) throw Error(f(558));
        }
        return Ut(e), null;
      case 13:
        if (a = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (u = Na(e), a !== null && a.dehydrated !== null) {
            if (t === null) {
              if (!u) throw Error(f(318));
              if (u = e.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(f(317));
              u[kt] = e;
            } else $n(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            Ut(e), u = false;
          } else u = Kr(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = u), u = true;
          if (!u) return e.flags & 256 ? (_e(e), e) : (_e(e), null);
        }
        return _e(e), (e.flags & 128) !== 0 ? (e.lanes = n, e) : (n = a !== null, t = t !== null && t.memoizedState !== null, n && (a = e.child, u = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (u = a.alternate.memoizedState.cachePool.pool), r = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (r = a.memoizedState.cachePool.pool), r !== u && (a.flags |= 2048)), n !== t && n && (e.child.flags |= 8192), tu(e, e.updateQueue), Ut(e), null);
      case 4:
        return Ct(), t === null && lf(e.stateNode.containerInfo), Ut(e), null;
      case 10:
        return Pe(e.type), Ut(e), null;
      case 19:
        if (U(jt), a = e.memoizedState, a === null) return Ut(e), null;
        if (u = (e.flags & 128) !== 0, r = a.rendering, r === null) if (u) wl(a, false);
        else {
          if (Bt !== 0 || t !== null && (t.flags & 128) !== 0) for (t = e.child; t !== null; ) {
            if (r = Li(t), r !== null) {
              for (e.flags |= 128, wl(a, false), t = r.updateQueue, e.updateQueue = t, tu(e, t), e.subtreeFlags = 0, t = n, n = e.child; n !== null; ) gs(n, t), n = n.sibling;
              return K(jt, jt.current & 1 | 2), _t && Fe(e, a.treeForkCount), e.child;
            }
            t = t.sibling;
          }
          a.tail !== null && de() > iu && (e.flags |= 128, u = true, wl(a, false), e.lanes = 4194304);
        }
        else {
          if (!u) if (t = Li(r), t !== null) {
            if (e.flags |= 128, u = true, t = t.updateQueue, e.updateQueue = t, tu(e, t), wl(a, true), a.tail === null && a.tailMode === "hidden" && !r.alternate && !_t) return Ut(e), null;
          } else 2 * de() - a.renderingStartTime > iu && n !== 536870912 && (e.flags |= 128, u = true, wl(a, false), e.lanes = 4194304);
          a.isBackwards ? (r.sibling = e.child, e.child = r) : (t = a.last, t !== null ? t.sibling = r : e.child = r, a.last = r);
        }
        return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = de(), t.sibling = null, n = jt.current, K(jt, u ? n & 1 | 2 : n & 1), _t && Fe(e, a.treeForkCount), t) : (Ut(e), null);
      case 22:
      case 23:
        return _e(e), ic(), a = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== a && (e.flags |= 8192) : a && (e.flags |= 8192), a ? (n & 536870912) !== 0 && (e.flags & 128) === 0 && (Ut(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : Ut(e), n = e.updateQueue, n !== null && tu(e, n.retryQueue), n = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), a = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), a !== n && (e.flags |= 2048), t !== null && U(Pn), null;
      case 24:
        return n = null, t !== null && (n = t.memoizedState.cache), e.memoizedState.cache !== n && (e.flags |= 2048), Pe(Gt), Ut(e), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(f(156, e.tag));
  }
  function xy(t, e) {
    switch (Vr(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return Pe(Gt), Ct(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return si(e), null;
      case 31:
        if (e.memoizedState !== null) {
          if (_e(e), e.alternate === null) throw Error(f(340));
          $n();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 13:
        if (_e(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null) throw Error(f(340));
          $n();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return U(jt), null;
      case 4:
        return Ct(), null;
      case 10:
        return Pe(e.type), null;
      case 22:
      case 23:
        return _e(e), ic(), t !== null && U(Pn), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return Pe(Gt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Zh(t, e) {
    switch (Vr(e), e.tag) {
      case 3:
        Pe(Gt), Ct();
        break;
      case 26:
      case 27:
      case 5:
        si(e);
        break;
      case 4:
        Ct();
        break;
      case 31:
        e.memoizedState !== null && _e(e);
        break;
      case 13:
        _e(e);
        break;
      case 19:
        U(jt);
        break;
      case 10:
        Pe(e.type);
        break;
      case 22:
      case 23:
        _e(e), ic(), t !== null && U(Pn);
        break;
      case 24:
        Pe(Gt);
    }
  }
  function Dl(t, e) {
    try {
      var n = e.updateQueue, a = n !== null ? n.lastEffect : null;
      if (a !== null) {
        var u = a.next;
        n = u;
        do {
          if ((n.tag & t) === t) {
            a = void 0;
            var r = n.create, s = n.inst;
            a = r(), s.destroy = a;
          }
          n = n.next;
        } while (n !== u);
      }
    } catch (m) {
      At(e, e.return, m);
    }
  }
  function Mn(t, e, n) {
    try {
      var a = e.updateQueue, u = a !== null ? a.lastEffect : null;
      if (u !== null) {
        var r = u.next;
        a = r;
        do {
          if ((a.tag & t) === t) {
            var s = a.inst, m = s.destroy;
            if (m !== void 0) {
              s.destroy = void 0, u = e;
              var _ = n, M = m;
              try {
                M();
              } catch (q) {
                At(u, _, q);
              }
            }
          }
          a = a.next;
        } while (a !== r);
      }
    } catch (q) {
      At(e, e.return, q);
    }
  }
  function Kh(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var n = t.stateNode;
      try {
        Hs(e, n);
      } catch (a) {
        At(t, t.return, a);
      }
    }
  }
  function Jh(t, e, n) {
    n.props = la(t.type, t.memoizedProps), n.state = t.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (a) {
      At(t, e, a);
    }
  }
  function Cl(t, e) {
    try {
      var n = t.ref;
      if (n !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var a = t.stateNode;
            break;
          case 30:
            a = t.stateNode;
            break;
          default:
            a = t.stateNode;
        }
        typeof n == "function" ? t.refCleanup = n(a) : n.current = a;
      }
    } catch (u) {
      At(t, e, u);
    }
  }
  function Xe(t, e) {
    var n = t.ref, a = t.refCleanup;
    if (n !== null) if (typeof a == "function") try {
      a();
    } catch (u) {
      At(t, e, u);
    } finally {
      t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
    }
    else if (typeof n == "function") try {
      n(null);
    } catch (u) {
      At(t, e, u);
    }
    else n.current = null;
  }
  function kh(t) {
    var e = t.type, n = t.memoizedProps, a = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && a.focus();
          break t;
        case "img":
          n.src ? a.src = n.src : n.srcSet && (a.srcset = n.srcSet);
      }
    } catch (u) {
      At(t, t.return, u);
    }
  }
  function Bc(t, e, n) {
    try {
      var a = t.stateNode;
      ky(a, t.type, n, e), a[ie] = e;
    } catch (u) {
      At(t, t.return, u);
    }
  }
  function Wh(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Un(t.type) || t.tag === 4;
  }
  function jc(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || Wh(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && Un(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Yc(t, e, n) {
    var a = t.tag;
    if (a === 5 || a === 6) t = t.stateNode, e ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(t, e) : (e = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, e.appendChild(t), n = n._reactRootContainer, n != null || e.onclick !== null || (e.onclick = ke));
    else if (a !== 4 && (a === 27 && Un(t.type) && (n = t.stateNode, e = null), t = t.child, t !== null)) for (Yc(t, e, n), t = t.sibling; t !== null; ) Yc(t, e, n), t = t.sibling;
  }
  function eu(t, e, n) {
    var a = t.tag;
    if (a === 5 || a === 6) t = t.stateNode, e ? n.insertBefore(t, e) : n.appendChild(t);
    else if (a !== 4 && (a === 27 && Un(t.type) && (n = t.stateNode), t = t.child, t !== null)) for (eu(t, e, n), t = t.sibling; t !== null; ) eu(t, e, n), t = t.sibling;
  }
  function $h(t) {
    var e = t.stateNode, n = t.memoizedProps;
    try {
      for (var a = t.type, u = e.attributes; u.length; ) e.removeAttributeNode(u[0]);
      It(e, a, n), e[kt] = t, e[ie] = n;
    } catch (r) {
      At(t, t.return, r);
    }
  }
  var ln = false, Qt = false, Gc = false, Fh = typeof WeakSet == "function" ? WeakSet : Set, Jt = null;
  function My(t, e) {
    if (t = t.containerInfo, cf = Tu, t = fs(t), Rr(t)) {
      if ("selectionStart" in t) var n = { start: t.selectionStart, end: t.selectionEnd };
      else t: {
        n = (n = t.ownerDocument) && n.defaultView || window;
        var a = n.getSelection && n.getSelection();
        if (a && a.rangeCount !== 0) {
          n = a.anchorNode;
          var u = a.anchorOffset, r = a.focusNode;
          a = a.focusOffset;
          try {
            n.nodeType, r.nodeType;
          } catch {
            n = null;
            break t;
          }
          var s = 0, m = -1, _ = -1, M = 0, q = 0, B = t, N = null;
          e: for (; ; ) {
            for (var C; B !== n || u !== 0 && B.nodeType !== 3 || (m = s + u), B !== r || a !== 0 && B.nodeType !== 3 || (_ = s + a), B.nodeType === 3 && (s += B.nodeValue.length), (C = B.firstChild) !== null; ) N = B, B = C;
            for (; ; ) {
              if (B === t) break e;
              if (N === n && ++M === u && (m = s), N === r && ++q === a && (_ = s), (C = B.nextSibling) !== null) break;
              B = N, N = B.parentNode;
            }
            B = C;
          }
          n = m === -1 || _ === -1 ? null : { start: m, end: _ };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (ff = { focusedElem: t, selectionRange: n }, Tu = false, Jt = e; Jt !== null; ) if (e = Jt, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null) t.return = e, Jt = t;
    else for (; Jt !== null; ) {
      switch (e = Jt, r = e.alternate, t = e.flags, e.tag) {
        case 0:
          if ((t & 4) !== 0 && (t = e.updateQueue, t = t !== null ? t.events : null, t !== null)) for (n = 0; n < t.length; n++) u = t[n], u.ref.impl = u.nextImpl;
          break;
        case 11:
        case 15:
          break;
        case 1:
          if ((t & 1024) !== 0 && r !== null) {
            t = void 0, n = e, u = r.memoizedProps, r = r.memoizedState, a = n.stateNode;
            try {
              var et = la(n.type, u);
              t = a.getSnapshotBeforeUpdate(et, r), a.__reactInternalSnapshotBeforeUpdate = t;
            } catch (ut) {
              At(n, n.return, ut);
            }
          }
          break;
        case 3:
          if ((t & 1024) !== 0) {
            if (t = e.stateNode.containerInfo, n = t.nodeType, n === 9) hf(t);
            else if (n === 1) switch (t.nodeName) {
              case "HEAD":
              case "HTML":
              case "BODY":
                hf(t);
                break;
              default:
                t.textContent = "";
            }
          }
          break;
        case 5:
        case 26:
        case 27:
        case 6:
        case 4:
        case 17:
          break;
        default:
          if ((t & 1024) !== 0) throw Error(f(163));
      }
      if (t = e.sibling, t !== null) {
        t.return = e.return, Jt = t;
        break;
      }
      Jt = e.return;
    }
  }
  function Ih(t, e, n) {
    var a = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        rn(t, n), a & 4 && Dl(5, n);
        break;
      case 1:
        if (rn(t, n), a & 4) if (t = n.stateNode, e === null) try {
          t.componentDidMount();
        } catch (s) {
          At(n, n.return, s);
        }
        else {
          var u = la(n.type, e.memoizedProps);
          e = e.memoizedState;
          try {
            t.componentDidUpdate(u, e, t.__reactInternalSnapshotBeforeUpdate);
          } catch (s) {
            At(n, n.return, s);
          }
        }
        a & 64 && Kh(n), a & 512 && Cl(n, n.return);
        break;
      case 3:
        if (rn(t, n), a & 64 && (t = n.updateQueue, t !== null)) {
          if (e = null, n.child !== null) switch (n.child.tag) {
            case 27:
            case 5:
              e = n.child.stateNode;
              break;
            case 1:
              e = n.child.stateNode;
          }
          try {
            Hs(t, e);
          } catch (s) {
            At(n, n.return, s);
          }
        }
        break;
      case 27:
        e === null && a & 4 && $h(n);
      case 26:
      case 5:
        rn(t, n), e === null && a & 4 && kh(n), a & 512 && Cl(n, n.return);
        break;
      case 12:
        rn(t, n);
        break;
      case 31:
        rn(t, n), a & 4 && ed(t, n);
        break;
      case 13:
        rn(t, n), a & 4 && nd(t, n), a & 64 && (t = n.memoizedState, t !== null && (t = t.dehydrated, t !== null && (n = Hy.bind(null, n), nv(t, n))));
        break;
      case 22:
        if (a = n.memoizedState !== null || ln, !a) {
          e = e !== null && e.memoizedState !== null || Qt, u = ln;
          var r = Qt;
          ln = a, (Qt = e) && !r ? cn(t, n, (n.subtreeFlags & 8772) !== 0) : rn(t, n), ln = u, Qt = r;
        }
        break;
      case 30:
        break;
      default:
        rn(t, n);
    }
  }
  function Ph(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, Ph(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && yr(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var qt = null, re = false;
  function un(t, e, n) {
    for (n = n.child; n !== null; ) td(t, e, n), n = n.sibling;
  }
  function td(t, e, n) {
    if (me && typeof me.onCommitFiberUnmount == "function") try {
      me.onCommitFiberUnmount(nl, n);
    } catch {
    }
    switch (n.tag) {
      case 26:
        Qt || Xe(n, e), un(t, e, n), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        Qt || Xe(n, e);
        var a = qt, u = re;
        Un(n.type) && (qt = n.stateNode, re = false), un(t, e, n), Ll(n.stateNode), qt = a, re = u;
        break;
      case 5:
        Qt || Xe(n, e);
      case 6:
        if (a = qt, u = re, qt = null, un(t, e, n), qt = a, re = u, qt !== null) if (re) try {
          (qt.nodeType === 9 ? qt.body : qt.nodeName === "HTML" ? qt.ownerDocument.body : qt).removeChild(n.stateNode);
        } catch (r) {
          At(n, e, r);
        }
        else try {
          qt.removeChild(n.stateNode);
        } catch (r) {
          At(n, e, r);
        }
        break;
      case 18:
        qt !== null && (re ? (t = qt, Kd(t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, n.stateNode), $a(t)) : Kd(qt, n.stateNode));
        break;
      case 4:
        a = qt, u = re, qt = n.stateNode.containerInfo, re = true, un(t, e, n), qt = a, re = u;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Mn(2, n, e), Qt || Mn(4, n, e), un(t, e, n);
        break;
      case 1:
        Qt || (Xe(n, e), a = n.stateNode, typeof a.componentWillUnmount == "function" && Jh(n, e, a)), un(t, e, n);
        break;
      case 21:
        un(t, e, n);
        break;
      case 22:
        Qt = (a = Qt) || n.memoizedState !== null, un(t, e, n), Qt = a;
        break;
      default:
        un(t, e, n);
    }
  }
  function ed(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        $a(t);
      } catch (n) {
        At(e, e.return, n);
      }
    }
  }
  function nd(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null)))) try {
      $a(t);
    } catch (n) {
      At(e, e.return, n);
    }
  }
  function Oy(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new Fh()), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new Fh()), e;
      default:
        throw Error(f(435, t.tag));
    }
  }
  function nu(t, e) {
    var n = Oy(t);
    e.forEach(function(a) {
      if (!n.has(a)) {
        n.add(a);
        var u = By.bind(null, t, a);
        a.then(u, u);
      }
    });
  }
  function ce(t, e) {
    var n = e.deletions;
    if (n !== null) for (var a = 0; a < n.length; a++) {
      var u = n[a], r = t, s = e, m = s;
      t: for (; m !== null; ) {
        switch (m.tag) {
          case 27:
            if (Un(m.type)) {
              qt = m.stateNode, re = false;
              break t;
            }
            break;
          case 5:
            qt = m.stateNode, re = false;
            break t;
          case 3:
          case 4:
            qt = m.stateNode.containerInfo, re = true;
            break t;
        }
        m = m.return;
      }
      if (qt === null) throw Error(f(160));
      td(r, s, u), qt = null, re = false, r = u.alternate, r !== null && (r.return = null), u.return = null;
    }
    if (e.subtreeFlags & 13886) for (e = e.child; e !== null; ) ad(e, t), e = e.sibling;
  }
  var He = null;
  function ad(t, e) {
    var n = t.alternate, a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ce(e, t), fe(t), a & 4 && (Mn(3, t, t.return), Dl(3, t), Mn(5, t, t.return));
        break;
      case 1:
        ce(e, t), fe(t), a & 512 && (Qt || n === null || Xe(n, n.return)), a & 64 && ln && (t = t.updateQueue, t !== null && (a = t.callbacks, a !== null && (n = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = n === null ? a : n.concat(a))));
        break;
      case 26:
        var u = He;
        if (ce(e, t), fe(t), a & 512 && (Qt || n === null || Xe(n, n.return)), a & 4) {
          var r = n !== null ? n.memoizedState : null;
          if (a = t.memoizedState, n === null) if (a === null) if (t.stateNode === null) {
            t: {
              a = t.type, n = t.memoizedProps, u = u.ownerDocument || u;
              e: switch (a) {
                case "title":
                  r = u.getElementsByTagName("title")[0], (!r || r[il] || r[kt] || r.namespaceURI === "http://www.w3.org/2000/svg" || r.hasAttribute("itemprop")) && (r = u.createElement(a), u.head.insertBefore(r, u.querySelector("head > title"))), It(r, a, n), r[kt] = t, Kt(r), a = r;
                  break t;
                case "link":
                  var s = am("link", "href", u).get(a + (n.href || ""));
                  if (s) {
                    for (var m = 0; m < s.length; m++) if (r = s[m], r.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && r.getAttribute("rel") === (n.rel == null ? null : n.rel) && r.getAttribute("title") === (n.title == null ? null : n.title) && r.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                      s.splice(m, 1);
                      break e;
                    }
                  }
                  r = u.createElement(a), It(r, a, n), u.head.appendChild(r);
                  break;
                case "meta":
                  if (s = am("meta", "content", u).get(a + (n.content || ""))) {
                    for (m = 0; m < s.length; m++) if (r = s[m], r.getAttribute("content") === (n.content == null ? null : "" + n.content) && r.getAttribute("name") === (n.name == null ? null : n.name) && r.getAttribute("property") === (n.property == null ? null : n.property) && r.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && r.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                      s.splice(m, 1);
                      break e;
                    }
                  }
                  r = u.createElement(a), It(r, a, n), u.head.appendChild(r);
                  break;
                default:
                  throw Error(f(468, a));
              }
              r[kt] = t, Kt(r), a = r;
            }
            t.stateNode = a;
          } else lm(u, t.type, t.stateNode);
          else t.stateNode = nm(u, a, t.memoizedProps);
          else r !== a ? (r === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : r.count--, a === null ? lm(u, t.type, t.stateNode) : nm(u, a, t.memoizedProps)) : a === null && t.stateNode !== null && Bc(t, t.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        ce(e, t), fe(t), a & 512 && (Qt || n === null || Xe(n, n.return)), n !== null && a & 4 && Bc(t, t.memoizedProps, n.memoizedProps);
        break;
      case 5:
        if (ce(e, t), fe(t), a & 512 && (Qt || n === null || Xe(n, n.return)), t.flags & 32) {
          u = t.stateNode;
          try {
            _a(u, "");
          } catch (et) {
            At(t, t.return, et);
          }
        }
        a & 4 && t.stateNode != null && (u = t.memoizedProps, Bc(t, u, n !== null ? n.memoizedProps : u)), a & 1024 && (Gc = true);
        break;
      case 6:
        if (ce(e, t), fe(t), a & 4) {
          if (t.stateNode === null) throw Error(f(162));
          a = t.memoizedProps, n = t.stateNode;
          try {
            n.nodeValue = a;
          } catch (et) {
            At(t, t.return, et);
          }
        }
        break;
      case 3:
        if (gu = null, u = He, He = yu(e.containerInfo), ce(e, t), He = u, fe(t), a & 4 && n !== null && n.memoizedState.isDehydrated) try {
          $a(e.containerInfo);
        } catch (et) {
          At(t, t.return, et);
        }
        Gc && (Gc = false, ld(t));
        break;
      case 4:
        a = He, He = yu(t.stateNode.containerInfo), ce(e, t), fe(t), He = a;
        break;
      case 12:
        ce(e, t), fe(t);
        break;
      case 31:
        ce(e, t), fe(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, nu(t, a)));
        break;
      case 13:
        ce(e, t), fe(t), t.child.flags & 8192 && t.memoizedState !== null != (n !== null && n.memoizedState !== null) && (lu = de()), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, nu(t, a)));
        break;
      case 22:
        u = t.memoizedState !== null;
        var _ = n !== null && n.memoizedState !== null, M = ln, q = Qt;
        if (ln = M || u, Qt = q || _, ce(e, t), Qt = q, ln = M, fe(t), a & 8192) t: for (e = t.stateNode, e._visibility = u ? e._visibility & -2 : e._visibility | 1, u && (n === null || _ || ln || Qt || ia(t)), n = null, e = t; ; ) {
          if (e.tag === 5 || e.tag === 26) {
            if (n === null) {
              _ = n = e;
              try {
                if (r = _.stateNode, u) s = r.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none";
                else {
                  m = _.stateNode;
                  var B = _.memoizedProps.style, N = B != null && B.hasOwnProperty("display") ? B.display : null;
                  m.style.display = N == null || typeof N == "boolean" ? "" : ("" + N).trim();
                }
              } catch (et) {
                At(_, _.return, et);
              }
            }
          } else if (e.tag === 6) {
            if (n === null) {
              _ = e;
              try {
                _.stateNode.nodeValue = u ? "" : _.memoizedProps;
              } catch (et) {
                At(_, _.return, et);
              }
            }
          } else if (e.tag === 18) {
            if (n === null) {
              _ = e;
              try {
                var C = _.stateNode;
                u ? Jd(C, true) : Jd(_.stateNode, false);
              } catch (et) {
                At(_, _.return, et);
              }
            }
          } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
            e.child.return = e, e = e.child;
            continue;
          }
          if (e === t) break t;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break t;
            n === e && (n = null), e = e.return;
          }
          n === e && (n = null), e.sibling.return = e.return, e = e.sibling;
        }
        a & 4 && (a = t.updateQueue, a !== null && (n = a.retryQueue, n !== null && (a.retryQueue = null, nu(t, n))));
        break;
      case 19:
        ce(e, t), fe(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, nu(t, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        ce(e, t), fe(t);
    }
  }
  function fe(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var n, a = t.return; a !== null; ) {
          if (Wh(a)) {
            n = a;
            break;
          }
          a = a.return;
        }
        if (n == null) throw Error(f(160));
        switch (n.tag) {
          case 27:
            var u = n.stateNode, r = jc(t);
            eu(t, r, u);
            break;
          case 5:
            var s = n.stateNode;
            n.flags & 32 && (_a(s, ""), n.flags &= -33);
            var m = jc(t);
            eu(t, m, s);
            break;
          case 3:
          case 4:
            var _ = n.stateNode.containerInfo, M = jc(t);
            Yc(t, M, _);
            break;
          default:
            throw Error(f(161));
        }
      } catch (q) {
        At(t, t.return, q);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function ld(t) {
    if (t.subtreeFlags & 1024) for (t = t.child; t !== null; ) {
      var e = t;
      ld(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling;
    }
  }
  function rn(t, e) {
    if (e.subtreeFlags & 8772) for (e = e.child; e !== null; ) Ih(t, e.alternate, e), e = e.sibling;
  }
  function ia(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Mn(4, e, e.return), ia(e);
          break;
        case 1:
          Xe(e, e.return);
          var n = e.stateNode;
          typeof n.componentWillUnmount == "function" && Jh(e, e.return, n), ia(e);
          break;
        case 27:
          Ll(e.stateNode);
        case 26:
        case 5:
          Xe(e, e.return), ia(e);
          break;
        case 22:
          e.memoizedState === null && ia(e);
          break;
        case 30:
          ia(e);
          break;
        default:
          ia(e);
      }
      t = t.sibling;
    }
  }
  function cn(t, e, n) {
    for (n = n && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var a = e.alternate, u = t, r = e, s = r.flags;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          cn(u, r, n), Dl(4, r);
          break;
        case 1:
          if (cn(u, r, n), a = r, u = a.stateNode, typeof u.componentDidMount == "function") try {
            u.componentDidMount();
          } catch (M) {
            At(a, a.return, M);
          }
          if (a = r, u = a.updateQueue, u !== null) {
            var m = a.stateNode;
            try {
              var _ = u.shared.hiddenCallbacks;
              if (_ !== null) for (u.shared.hiddenCallbacks = null, u = 0; u < _.length; u++) qs(_[u], m);
            } catch (M) {
              At(a, a.return, M);
            }
          }
          n && s & 64 && Kh(r), Cl(r, r.return);
          break;
        case 27:
          $h(r);
        case 26:
        case 5:
          cn(u, r, n), n && a === null && s & 4 && kh(r), Cl(r, r.return);
          break;
        case 12:
          cn(u, r, n);
          break;
        case 31:
          cn(u, r, n), n && s & 4 && ed(u, r);
          break;
        case 13:
          cn(u, r, n), n && s & 4 && nd(u, r);
          break;
        case 22:
          r.memoizedState === null && cn(u, r, n), Cl(r, r.return);
          break;
        case 30:
          break;
        default:
          cn(u, r, n);
      }
      e = e.sibling;
    }
  }
  function Lc(t, e) {
    var n = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== n && (t != null && t.refCount++, n != null && gl(n));
  }
  function Xc(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && gl(t));
  }
  function Be(t, e, n, a) {
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) id(t, e, n, a), e = e.sibling;
  }
  function id(t, e, n, a) {
    var u = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Be(t, e, n, a), u & 2048 && Dl(9, e);
        break;
      case 1:
        Be(t, e, n, a);
        break;
      case 3:
        Be(t, e, n, a), u & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && gl(t)));
        break;
      case 12:
        if (u & 2048) {
          Be(t, e, n, a), t = e.stateNode;
          try {
            var r = e.memoizedProps, s = r.id, m = r.onPostCommit;
            typeof m == "function" && m(s, e.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0);
          } catch (_) {
            At(e, e.return, _);
          }
        } else Be(t, e, n, a);
        break;
      case 31:
        Be(t, e, n, a);
        break;
      case 13:
        Be(t, e, n, a);
        break;
      case 23:
        break;
      case 22:
        r = e.stateNode, s = e.alternate, e.memoizedState !== null ? r._visibility & 2 ? Be(t, e, n, a) : Rl(t, e) : r._visibility & 2 ? Be(t, e, n, a) : (r._visibility |= 2, Ya(t, e, n, a, (e.subtreeFlags & 10256) !== 0 || false)), u & 2048 && Lc(s, e);
        break;
      case 24:
        Be(t, e, n, a), u & 2048 && Xc(e.alternate, e);
        break;
      default:
        Be(t, e, n, a);
    }
  }
  function Ya(t, e, n, a, u) {
    for (u = u && ((e.subtreeFlags & 10256) !== 0 || false), e = e.child; e !== null; ) {
      var r = t, s = e, m = n, _ = a, M = s.flags;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          Ya(r, s, m, _, u), Dl(8, s);
          break;
        case 23:
          break;
        case 22:
          var q = s.stateNode;
          s.memoizedState !== null ? q._visibility & 2 ? Ya(r, s, m, _, u) : Rl(r, s) : (q._visibility |= 2, Ya(r, s, m, _, u)), u && M & 2048 && Lc(s.alternate, s);
          break;
        case 24:
          Ya(r, s, m, _, u), u && M & 2048 && Xc(s.alternate, s);
          break;
        default:
          Ya(r, s, m, _, u);
      }
      e = e.sibling;
    }
  }
  function Rl(t, e) {
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) {
      var n = t, a = e, u = a.flags;
      switch (a.tag) {
        case 22:
          Rl(n, a), u & 2048 && Lc(a.alternate, a);
          break;
        case 24:
          Rl(n, a), u & 2048 && Xc(a.alternate, a);
          break;
        default:
          Rl(n, a);
      }
      e = e.sibling;
    }
  }
  var Ul = 8192;
  function Ga(t, e, n) {
    if (t.subtreeFlags & Ul) for (t = t.child; t !== null; ) ud(t, e, n), t = t.sibling;
  }
  function ud(t, e, n) {
    switch (t.tag) {
      case 26:
        Ga(t, e, n), t.flags & Ul && t.memoizedState !== null && mv(n, He, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        Ga(t, e, n);
        break;
      case 3:
      case 4:
        var a = He;
        He = yu(t.stateNode.containerInfo), Ga(t, e, n), He = a;
        break;
      case 22:
        t.memoizedState === null && (a = t.alternate, a !== null && a.memoizedState !== null ? (a = Ul, Ul = 16777216, Ga(t, e, n), Ul = a) : Ga(t, e, n));
        break;
      default:
        Ga(t, e, n);
    }
  }
  function rd(t) {
    var e = t.alternate;
    if (e !== null && (t = e.child, t !== null)) {
      e.child = null;
      do
        e = t.sibling, t.sibling = null, t = e;
      while (t !== null);
    }
  }
  function ql(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null) for (var n = 0; n < e.length; n++) {
        var a = e[n];
        Jt = a, fd(a, t);
      }
      rd(t);
    }
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) cd(t), t = t.sibling;
  }
  function cd(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        ql(t), t.flags & 2048 && Mn(9, t, t.return);
        break;
      case 3:
        ql(t);
        break;
      case 12:
        ql(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, au(t)) : ql(t);
        break;
      default:
        ql(t);
    }
  }
  function au(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null) for (var n = 0; n < e.length; n++) {
        var a = e[n];
        Jt = a, fd(a, t);
      }
      rd(t);
    }
    for (t = t.child; t !== null; ) {
      switch (e = t, e.tag) {
        case 0:
        case 11:
        case 15:
          Mn(8, e, e.return), au(e);
          break;
        case 22:
          n = e.stateNode, n._visibility & 2 && (n._visibility &= -3, au(e));
          break;
        default:
          au(e);
      }
      t = t.sibling;
    }
  }
  function fd(t, e) {
    for (; Jt !== null; ) {
      var n = Jt;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Mn(8, n, e);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var a = n.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          gl(n.memoizedState.cache);
      }
      if (a = n.child, a !== null) a.return = n, Jt = a;
      else t: for (n = t; Jt !== null; ) {
        a = Jt;
        var u = a.sibling, r = a.return;
        if (Ph(a), a === n) {
          Jt = null;
          break t;
        }
        if (u !== null) {
          u.return = r, Jt = u;
          break t;
        }
        Jt = r;
      }
    }
  }
  var Ny = { getCacheForType: function(t) {
    var e = $t(Gt), n = e.data.get(t);
    return n === void 0 && (n = t(), e.data.set(t, n)), n;
  }, cacheSignal: function() {
    return $t(Gt).controller.signal;
  } }, wy = typeof WeakMap == "function" ? WeakMap : Map, Et = 0, Nt = null, pt = null, vt = 0, zt = 0, be = null, On = false, La = false, Qc = false, fn = 0, Bt = 0, Nn = 0, ua = 0, Vc = 0, Se = 0, Xa = 0, Hl = null, oe = null, Zc = false, lu = 0, od = 0, iu = 1 / 0, uu = null, wn = null, Zt = 0, Dn = null, Qa = null, on = 0, Kc = 0, Jc = null, sd = null, Bl = 0, kc = null;
  function Te() {
    return (Et & 2) !== 0 && vt !== 0 ? vt & -vt : g.T !== null ? tf() : Mo();
  }
  function hd() {
    if (Se === 0) if ((vt & 536870912) === 0 || _t) {
      var t = mi;
      mi <<= 1, (mi & 3932160) === 0 && (mi = 262144), Se = t;
    } else Se = 536870912;
    return t = ge.current, t !== null && (t.flags |= 32), Se;
  }
  function se(t, e, n) {
    (t === Nt && (zt === 2 || zt === 9) || t.cancelPendingCommit !== null) && (Va(t, 0), Cn(t, vt, Se, false)), ll(t, n), ((Et & 2) === 0 || t !== Nt) && (t === Nt && ((Et & 2) === 0 && (ua |= n), Bt === 4 && Cn(t, vt, Se, false)), Qe(t));
  }
  function dd(t, e, n) {
    if ((Et & 6) !== 0) throw Error(f(327));
    var a = !n && (e & 127) === 0 && (e & t.expiredLanes) === 0 || al(t, e), u = a ? Ry(t, e) : $c(t, e, true), r = a;
    do {
      if (u === 0) {
        La && !a && Cn(t, e, 0, false);
        break;
      } else {
        if (n = t.current.alternate, r && !Dy(n)) {
          u = $c(t, e, false), r = false;
          continue;
        }
        if (u === 2) {
          if (r = e, t.errorRecoveryDisabledLanes & r) var s = 0;
          else s = t.pendingLanes & -536870913, s = s !== 0 ? s : s & 536870912 ? 536870912 : 0;
          if (s !== 0) {
            e = s;
            t: {
              var m = t;
              u = Hl;
              var _ = m.current.memoizedState.isDehydrated;
              if (_ && (Va(m, s).flags |= 256), s = $c(m, s, false), s !== 2) {
                if (Qc && !_) {
                  m.errorRecoveryDisabledLanes |= r, ua |= r, u = 4;
                  break t;
                }
                r = oe, oe = u, r !== null && (oe === null ? oe = r : oe.push.apply(oe, r));
              }
              u = s;
            }
            if (r = false, u !== 2) continue;
          }
        }
        if (u === 1) {
          Va(t, 0), Cn(t, e, 0, true);
          break;
        }
        t: {
          switch (a = t, r = u, r) {
            case 0:
            case 1:
              throw Error(f(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              Cn(a, e, Se, !On);
              break t;
            case 2:
              oe = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(f(329));
          }
          if ((e & 62914560) === e && (u = lu + 300 - de(), 10 < u)) {
            if (Cn(a, e, Se, !On), yi(a, 0, true) !== 0) break t;
            on = e, a.timeoutHandle = Vd(md.bind(null, a, n, oe, uu, Zc, e, Se, ua, Xa, On, r, "Throttled", -0, 0), u);
            break t;
          }
          md(a, n, oe, uu, Zc, e, Se, ua, Xa, On, r, null, -0, 0);
        }
      }
      break;
    } while (true);
    Qe(t);
  }
  function md(t, e, n, a, u, r, s, m, _, M, q, B, N, C) {
    if (t.timeoutHandle = -1, B = e.subtreeFlags, B & 8192 || (B & 16785408) === 16785408) {
      B = { stylesheets: null, count: 0, imgCount: 0, imgBytes: 0, suspenseyImages: [], waitingForImages: true, waitingForViewTransition: false, unsuspend: ke }, ud(e, r, B);
      var et = (r & 62914560) === r ? lu - de() : (r & 4194048) === r ? od - de() : 0;
      if (et = pv(B, et), et !== null) {
        on = r, t.cancelPendingCommit = et(Td.bind(null, t, e, r, n, a, u, s, m, _, q, B, null, N, C)), Cn(t, r, s, !M);
        return;
      }
    }
    Td(t, e, r, n, a, u, s, m, _);
  }
  function Dy(t) {
    for (var e = t; ; ) {
      var n = e.tag;
      if ((n === 0 || n === 11 || n === 15) && e.flags & 16384 && (n = e.updateQueue, n !== null && (n = n.stores, n !== null))) for (var a = 0; a < n.length; a++) {
        var u = n[a], r = u.getSnapshot;
        u = u.value;
        try {
          if (!ye(r(), u)) return false;
        } catch {
          return false;
        }
      }
      if (n = e.child, e.subtreeFlags & 16384 && n !== null) n.return = e, e = n;
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return true;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    }
    return true;
  }
  function Cn(t, e, n, a) {
    e &= ~Vc, e &= ~ua, t.suspendedLanes |= e, t.pingedLanes &= ~e, a && (t.warmLanes |= e), a = t.expirationTimes;
    for (var u = e; 0 < u; ) {
      var r = 31 - pe(u), s = 1 << r;
      a[r] = -1, u &= ~s;
    }
    n !== 0 && zo(t, n, e);
  }
  function ru() {
    return (Et & 6) === 0 ? (jl(0), false) : true;
  }
  function Wc() {
    if (pt !== null) {
      if (zt === 0) var t = pt.return;
      else t = pt, Ie = Fn = null, sc(t), Ua = null, bl = 0, t = pt;
      for (; t !== null; ) Zh(t.alternate, t), t = t.return;
      pt = null;
    }
  }
  function Va(t, e) {
    var n = t.timeoutHandle;
    n !== -1 && (t.timeoutHandle = -1, Fy(n)), n = t.cancelPendingCommit, n !== null && (t.cancelPendingCommit = null, n()), on = 0, Wc(), Nt = t, pt = n = $e(t.current, null), vt = e, zt = 0, be = null, On = false, La = al(t, e), Qc = false, Xa = Se = Vc = ua = Nn = Bt = 0, oe = Hl = null, Zc = false, (e & 8) !== 0 && (e |= e & 32);
    var a = t.entangledLanes;
    if (a !== 0) for (t = t.entanglements, a &= e; 0 < a; ) {
      var u = 31 - pe(a), r = 1 << u;
      e |= t[u], a &= ~r;
    }
    return fn = e, Oi(), n;
  }
  function pd(t, e) {
    ht = null, g.H = Ol, e === Ra || e === Hi ? (e = Ds(), zt = 3) : e === Pr ? (e = Ds(), zt = 4) : zt = e === Mc ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, be = e, pt === null && (Bt = 1, $i(t, Oe(e, t.current)));
  }
  function yd() {
    var t = ge.current;
    return t === null ? true : (vt & 4194048) === vt ? Ce === null : (vt & 62914560) === vt || (vt & 536870912) !== 0 ? t === Ce : false;
  }
  function vd() {
    var t = g.H;
    return g.H = Ol, t === null ? Ol : t;
  }
  function gd() {
    var t = g.A;
    return g.A = Ny, t;
  }
  function cu() {
    Bt = 4, On || (vt & 4194048) !== vt && ge.current !== null || (La = true), (Nn & 134217727) === 0 && (ua & 134217727) === 0 || Nt === null || Cn(Nt, vt, Se, false);
  }
  function $c(t, e, n) {
    var a = Et;
    Et |= 2;
    var u = vd(), r = gd();
    (Nt !== t || vt !== e) && (uu = null, Va(t, e)), e = false;
    var s = Bt;
    t: do
      try {
        if (zt !== 0 && pt !== null) {
          var m = pt, _ = be;
          switch (zt) {
            case 8:
              Wc(), s = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              ge.current === null && (e = true);
              var M = zt;
              if (zt = 0, be = null, Za(t, m, _, M), n && La) {
                s = 0;
                break t;
              }
              break;
            default:
              M = zt, zt = 0, be = null, Za(t, m, _, M);
          }
        }
        Cy(), s = Bt;
        break;
      } catch (q) {
        pd(t, q);
      }
    while (true);
    return e && t.shellSuspendCounter++, Ie = Fn = null, Et = a, g.H = u, g.A = r, pt === null && (Nt = null, vt = 0, Oi()), s;
  }
  function Cy() {
    for (; pt !== null; ) _d(pt);
  }
  function Ry(t, e) {
    var n = Et;
    Et |= 2;
    var a = vd(), u = gd();
    Nt !== t || vt !== e ? (uu = null, iu = de() + 500, Va(t, e)) : La = al(t, e);
    t: do
      try {
        if (zt !== 0 && pt !== null) {
          e = pt;
          var r = be;
          e: switch (zt) {
            case 1:
              zt = 0, be = null, Za(t, e, r, 1);
              break;
            case 2:
            case 9:
              if (Ns(r)) {
                zt = 0, be = null, bd(e);
                break;
              }
              e = function() {
                zt !== 2 && zt !== 9 || Nt !== t || (zt = 7), Qe(t);
              }, r.then(e, e);
              break t;
            case 3:
              zt = 7;
              break t;
            case 4:
              zt = 5;
              break t;
            case 7:
              Ns(r) ? (zt = 0, be = null, bd(e)) : (zt = 0, be = null, Za(t, e, r, 7));
              break;
            case 5:
              var s = null;
              switch (pt.tag) {
                case 26:
                  s = pt.memoizedState;
                case 5:
                case 27:
                  var m = pt;
                  if (s ? im(s) : m.stateNode.complete) {
                    zt = 0, be = null;
                    var _ = m.sibling;
                    if (_ !== null) pt = _;
                    else {
                      var M = m.return;
                      M !== null ? (pt = M, fu(M)) : pt = null;
                    }
                    break e;
                  }
              }
              zt = 0, be = null, Za(t, e, r, 5);
              break;
            case 6:
              zt = 0, be = null, Za(t, e, r, 6);
              break;
            case 8:
              Wc(), Bt = 6;
              break t;
            default:
              throw Error(f(462));
          }
        }
        Uy();
        break;
      } catch (q) {
        pd(t, q);
      }
    while (true);
    return Ie = Fn = null, g.H = a, g.A = u, Et = n, pt !== null ? 0 : (Nt = null, vt = 0, Oi(), Bt);
  }
  function Uy() {
    for (; pt !== null && !ap(); ) _d(pt);
  }
  function _d(t) {
    var e = Qh(t.alternate, t, fn);
    t.memoizedProps = t.pendingProps, e === null ? fu(t) : pt = e;
  }
  function bd(t) {
    var e = t, n = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = Bh(n, e, e.pendingProps, e.type, void 0, vt);
        break;
      case 11:
        e = Bh(n, e, e.pendingProps, e.type.render, e.ref, vt);
        break;
      case 5:
        sc(e);
      default:
        Zh(n, e), e = pt = gs(e, fn), e = Qh(n, e, fn);
    }
    t.memoizedProps = t.pendingProps, e === null ? fu(t) : pt = e;
  }
  function Za(t, e, n, a) {
    Ie = Fn = null, sc(e), Ua = null, bl = 0;
    var u = e.return;
    try {
      if (Ty(t, u, e, n, vt)) {
        Bt = 1, $i(t, Oe(n, t.current)), pt = null;
        return;
      }
    } catch (r) {
      if (u !== null) throw pt = u, r;
      Bt = 1, $i(t, Oe(n, t.current)), pt = null;
      return;
    }
    e.flags & 32768 ? (_t || a === 1 ? t = true : La || (vt & 536870912) !== 0 ? t = false : (On = t = true, (a === 2 || a === 9 || a === 3 || a === 6) && (a = ge.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Sd(e, t)) : fu(e);
  }
  function fu(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        Sd(e, On);
        return;
      }
      t = e.return;
      var n = Ay(e.alternate, e, fn);
      if (n !== null) {
        pt = n;
        return;
      }
      if (e = e.sibling, e !== null) {
        pt = e;
        return;
      }
      pt = e = t;
    } while (e !== null);
    Bt === 0 && (Bt = 5);
  }
  function Sd(t, e) {
    do {
      var n = xy(t.alternate, t);
      if (n !== null) {
        n.flags &= 32767, pt = n;
        return;
      }
      if (n = t.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !e && (t = t.sibling, t !== null)) {
        pt = t;
        return;
      }
      pt = t = n;
    } while (t !== null);
    Bt = 6, pt = null;
  }
  function Td(t, e, n, a, u, r, s, m, _) {
    t.cancelPendingCommit = null;
    do
      ou();
    while (Zt !== 0);
    if ((Et & 6) !== 0) throw Error(f(327));
    if (e !== null) {
      if (e === t.current) throw Error(f(177));
      if (r = e.lanes | e.childLanes, r |= jr, dp(t, n, r, s, m, _), t === Nt && (pt = Nt = null, vt = 0), Qa = e, Dn = t, on = n, Kc = r, Jc = u, sd = a, (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, jy(hi, function() {
        return Md(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), a = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || a) {
        a = g.T, g.T = null, u = D.p, D.p = 2, s = Et, Et |= 4;
        try {
          My(t, e, n);
        } finally {
          Et = s, D.p = u, g.T = a;
        }
      }
      Zt = 1, Ed(), zd(), Ad();
    }
  }
  function Ed() {
    if (Zt === 1) {
      Zt = 0;
      var t = Dn, e = Qa, n = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || n) {
        n = g.T, g.T = null;
        var a = D.p;
        D.p = 2;
        var u = Et;
        Et |= 4;
        try {
          ad(e, t);
          var r = ff, s = fs(t.containerInfo), m = r.focusedElem, _ = r.selectionRange;
          if (s !== m && m && m.ownerDocument && cs(m.ownerDocument.documentElement, m)) {
            if (_ !== null && Rr(m)) {
              var M = _.start, q = _.end;
              if (q === void 0 && (q = M), "selectionStart" in m) m.selectionStart = M, m.selectionEnd = Math.min(q, m.value.length);
              else {
                var B = m.ownerDocument || document, N = B && B.defaultView || window;
                if (N.getSelection) {
                  var C = N.getSelection(), et = m.textContent.length, ut = Math.min(_.start, et), Ot = _.end === void 0 ? ut : Math.min(_.end, et);
                  !C.extend && ut > Ot && (s = Ot, Ot = ut, ut = s);
                  var A = rs(m, ut), T = rs(m, Ot);
                  if (A && T && (C.rangeCount !== 1 || C.anchorNode !== A.node || C.anchorOffset !== A.offset || C.focusNode !== T.node || C.focusOffset !== T.offset)) {
                    var x = B.createRange();
                    x.setStart(A.node, A.offset), C.removeAllRanges(), ut > Ot ? (C.addRange(x), C.extend(T.node, T.offset)) : (x.setEnd(T.node, T.offset), C.addRange(x));
                  }
                }
              }
            }
            for (B = [], C = m; C = C.parentNode; ) C.nodeType === 1 && B.push({ element: C, left: C.scrollLeft, top: C.scrollTop });
            for (typeof m.focus == "function" && m.focus(), m = 0; m < B.length; m++) {
              var H = B[m];
              H.element.scrollLeft = H.left, H.element.scrollTop = H.top;
            }
          }
          Tu = !!cf, ff = cf = null;
        } finally {
          Et = u, D.p = a, g.T = n;
        }
      }
      t.current = e, Zt = 2;
    }
  }
  function zd() {
    if (Zt === 2) {
      Zt = 0;
      var t = Dn, e = Qa, n = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || n) {
        n = g.T, g.T = null;
        var a = D.p;
        D.p = 2;
        var u = Et;
        Et |= 4;
        try {
          Ih(t, e.alternate, e);
        } finally {
          Et = u, D.p = a, g.T = n;
        }
      }
      Zt = 3;
    }
  }
  function Ad() {
    if (Zt === 4 || Zt === 3) {
      Zt = 0, lp();
      var t = Dn, e = Qa, n = on, a = sd;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? Zt = 5 : (Zt = 0, Qa = Dn = null, xd(t, t.pendingLanes));
      var u = t.pendingLanes;
      if (u === 0 && (wn = null), mr(n), e = e.stateNode, me && typeof me.onCommitFiberRoot == "function") try {
        me.onCommitFiberRoot(nl, e, void 0, (e.current.flags & 128) === 128);
      } catch {
      }
      if (a !== null) {
        e = g.T, u = D.p, D.p = 2, g.T = null;
        try {
          for (var r = t.onRecoverableError, s = 0; s < a.length; s++) {
            var m = a[s];
            r(m.value, { componentStack: m.stack });
          }
        } finally {
          g.T = e, D.p = u;
        }
      }
      (on & 3) !== 0 && ou(), Qe(t), u = t.pendingLanes, (n & 261930) !== 0 && (u & 42) !== 0 ? t === kc ? Bl++ : (Bl = 0, kc = t) : Bl = 0, jl(0);
    }
  }
  function xd(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, gl(e)));
  }
  function ou() {
    return Ed(), zd(), Ad(), Md();
  }
  function Md() {
    if (Zt !== 5) return false;
    var t = Dn, e = Kc;
    Kc = 0;
    var n = mr(on), a = g.T, u = D.p;
    try {
      D.p = 32 > n ? 32 : n, g.T = null, n = Jc, Jc = null;
      var r = Dn, s = on;
      if (Zt = 0, Qa = Dn = null, on = 0, (Et & 6) !== 0) throw Error(f(331));
      var m = Et;
      if (Et |= 4, cd(r.current), id(r, r.current, s, n), Et = m, jl(0, false), me && typeof me.onPostCommitFiberRoot == "function") try {
        me.onPostCommitFiberRoot(nl, r);
      } catch {
      }
      return true;
    } finally {
      D.p = u, g.T = a, xd(t, e);
    }
  }
  function Od(t, e, n) {
    e = Oe(n, e), e = xc(t.stateNode, e, 2), t = zn(t, e, 2), t !== null && (ll(t, 2), Qe(t));
  }
  function At(t, e, n) {
    if (t.tag === 3) Od(t, t, n);
    else for (; e !== null; ) {
      if (e.tag === 3) {
        Od(e, t, n);
        break;
      } else if (e.tag === 1) {
        var a = e.stateNode;
        if (typeof e.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (wn === null || !wn.has(a))) {
          t = Oe(n, t), n = Nh(2), a = zn(e, n, 2), a !== null && (wh(n, a, e, t), ll(a, 2), Qe(a));
          break;
        }
      }
      e = e.return;
    }
  }
  function Fc(t, e, n) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new wy();
      var u = /* @__PURE__ */ new Set();
      a.set(e, u);
    } else u = a.get(e), u === void 0 && (u = /* @__PURE__ */ new Set(), a.set(e, u));
    u.has(n) || (Qc = true, u.add(n), t = qy.bind(null, t, e, n), e.then(t, t));
  }
  function qy(t, e, n) {
    var a = t.pingCache;
    a !== null && a.delete(e), t.pingedLanes |= t.suspendedLanes & n, t.warmLanes &= ~n, Nt === t && (vt & n) === n && (Bt === 4 || Bt === 3 && (vt & 62914560) === vt && 300 > de() - lu ? (Et & 2) === 0 && Va(t, 0) : Vc |= n, Xa === vt && (Xa = 0)), Qe(t);
  }
  function Nd(t, e) {
    e === 0 && (e = Eo()), t = kn(t, e), t !== null && (ll(t, e), Qe(t));
  }
  function Hy(t) {
    var e = t.memoizedState, n = 0;
    e !== null && (n = e.retryLane), Nd(t, n);
  }
  function By(t, e) {
    var n = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var a = t.stateNode, u = t.memoizedState;
        u !== null && (n = u.retryLane);
        break;
      case 19:
        a = t.stateNode;
        break;
      case 22:
        a = t.stateNode._retryCache;
        break;
      default:
        throw Error(f(314));
    }
    a !== null && a.delete(e), Nd(t, n);
  }
  function jy(t, e) {
    return or(t, e);
  }
  var su = null, Ka = null, Ic = false, hu = false, Pc = false, Rn = 0;
  function Qe(t) {
    t !== Ka && t.next === null && (Ka === null ? su = Ka = t : Ka = Ka.next = t), hu = true, Ic || (Ic = true, Gy());
  }
  function jl(t, e) {
    if (!Pc && hu) {
      Pc = true;
      do
        for (var n = false, a = su; a !== null; ) {
          if (t !== 0) {
            var u = a.pendingLanes;
            if (u === 0) var r = 0;
            else {
              var s = a.suspendedLanes, m = a.pingedLanes;
              r = (1 << 31 - pe(42 | t) + 1) - 1, r &= u & ~(s & ~m), r = r & 201326741 ? r & 201326741 | 1 : r ? r | 2 : 0;
            }
            r !== 0 && (n = true, Rd(a, r));
          } else r = vt, r = yi(a, a === Nt ? r : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1), (r & 3) === 0 || al(a, r) || (n = true, Rd(a, r));
          a = a.next;
        }
      while (n);
      Pc = false;
    }
  }
  function Yy() {
    wd();
  }
  function wd() {
    hu = Ic = false;
    var t = 0;
    Rn !== 0 && $y() && (t = Rn);
    for (var e = de(), n = null, a = su; a !== null; ) {
      var u = a.next, r = Dd(a, e);
      r === 0 ? (a.next = null, n === null ? su = u : n.next = u, u === null && (Ka = n)) : (n = a, (t !== 0 || (r & 3) !== 0) && (hu = true)), a = u;
    }
    Zt !== 0 && Zt !== 5 || jl(t), Rn !== 0 && (Rn = 0);
  }
  function Dd(t, e) {
    for (var n = t.suspendedLanes, a = t.pingedLanes, u = t.expirationTimes, r = t.pendingLanes & -62914561; 0 < r; ) {
      var s = 31 - pe(r), m = 1 << s, _ = u[s];
      _ === -1 ? ((m & n) === 0 || (m & a) !== 0) && (u[s] = hp(m, e)) : _ <= e && (t.expiredLanes |= m), r &= ~m;
    }
    if (e = Nt, n = vt, n = yi(t, t === e ? n : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), a = t.callbackNode, n === 0 || t === e && (zt === 2 || zt === 9) || t.cancelPendingCommit !== null) return a !== null && a !== null && sr(a), t.callbackNode = null, t.callbackPriority = 0;
    if ((n & 3) === 0 || al(t, n)) {
      if (e = n & -n, e === t.callbackPriority) return e;
      switch (a !== null && sr(a), mr(n)) {
        case 2:
        case 8:
          n = So;
          break;
        case 32:
          n = hi;
          break;
        case 268435456:
          n = To;
          break;
        default:
          n = hi;
      }
      return a = Cd.bind(null, t), n = or(n, a), t.callbackPriority = e, t.callbackNode = n, e;
    }
    return a !== null && a !== null && sr(a), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function Cd(t, e) {
    if (Zt !== 0 && Zt !== 5) return t.callbackNode = null, t.callbackPriority = 0, null;
    var n = t.callbackNode;
    if (ou() && t.callbackNode !== n) return null;
    var a = vt;
    return a = yi(t, t === Nt ? a : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), a === 0 ? null : (dd(t, a, e), Dd(t, de()), t.callbackNode != null && t.callbackNode === n ? Cd.bind(null, t) : null);
  }
  function Rd(t, e) {
    if (ou()) return null;
    dd(t, e, true);
  }
  function Gy() {
    Iy(function() {
      (Et & 6) !== 0 ? or(bo, Yy) : wd();
    });
  }
  function tf() {
    if (Rn === 0) {
      var t = Da;
      t === 0 && (t = di, di <<= 1, (di & 261888) === 0 && (di = 256)), Rn = t;
    }
    return Rn;
  }
  function Ud(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : bi("" + t);
  }
  function qd(t, e) {
    var n = e.ownerDocument.createElement("input");
    return n.name = e.name, n.value = e.value, t.id && n.setAttribute("form", t.id), e.parentNode.insertBefore(n, e), t = new FormData(t), n.parentNode.removeChild(n), t;
  }
  function Ly(t, e, n, a, u) {
    if (e === "submit" && n && n.stateNode === u) {
      var r = Ud((u[ie] || null).action), s = a.submitter;
      s && (e = (e = s[ie] || null) ? Ud(e.formAction) : s.getAttribute("formAction"), e !== null && (r = e, s = null));
      var m = new zi("action", "action", null, a, u);
      t.push({ event: m, listeners: [{ instance: null, listener: function() {
        if (a.defaultPrevented) {
          if (Rn !== 0) {
            var _ = s ? qd(u, s) : new FormData(u);
            bc(n, { pending: true, data: _, method: u.method, action: r }, null, _);
          }
        } else typeof r == "function" && (m.preventDefault(), _ = s ? qd(u, s) : new FormData(u), bc(n, { pending: true, data: _, method: u.method, action: r }, r, _));
      }, currentTarget: u }] });
    }
  }
  for (var ef = 0; ef < Br.length; ef++) {
    var nf = Br[ef], Xy = nf.toLowerCase(), Qy = nf[0].toUpperCase() + nf.slice(1);
    qe(Xy, "on" + Qy);
  }
  qe(hs, "onAnimationEnd"), qe(ds, "onAnimationIteration"), qe(ms, "onAnimationStart"), qe("dblclick", "onDoubleClick"), qe("focusin", "onFocus"), qe("focusout", "onBlur"), qe(iy, "onTransitionRun"), qe(uy, "onTransitionStart"), qe(ry, "onTransitionCancel"), qe(ps, "onTransitionEnd"), va("onMouseEnter", ["mouseout", "mouseover"]), va("onMouseLeave", ["mouseout", "mouseover"]), va("onPointerEnter", ["pointerout", "pointerover"]), va("onPointerLeave", ["pointerout", "pointerover"]), Vn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Vn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Vn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Vn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Vn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Vn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Yl = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Vy = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Yl));
  function Hd(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
      var a = t[n], u = a.event;
      a = a.listeners;
      t: {
        var r = void 0;
        if (e) for (var s = a.length - 1; 0 <= s; s--) {
          var m = a[s], _ = m.instance, M = m.currentTarget;
          if (m = m.listener, _ !== r && u.isPropagationStopped()) break t;
          r = m, u.currentTarget = M;
          try {
            r(u);
          } catch (q) {
            Mi(q);
          }
          u.currentTarget = null, r = _;
        }
        else for (s = 0; s < a.length; s++) {
          if (m = a[s], _ = m.instance, M = m.currentTarget, m = m.listener, _ !== r && u.isPropagationStopped()) break t;
          r = m, u.currentTarget = M;
          try {
            r(u);
          } catch (q) {
            Mi(q);
          }
          u.currentTarget = null, r = _;
        }
      }
    }
  }
  function yt(t, e) {
    var n = e[pr];
    n === void 0 && (n = e[pr] = /* @__PURE__ */ new Set());
    var a = t + "__bubble";
    n.has(a) || (Bd(e, t, 2, false), n.add(a));
  }
  function af(t, e, n) {
    var a = 0;
    e && (a |= 4), Bd(n, t, a, e);
  }
  var du = "_reactListening" + Math.random().toString(36).slice(2);
  function lf(t) {
    if (!t[du]) {
      t[du] = true, wo.forEach(function(n) {
        n !== "selectionchange" && (Vy.has(n) || af(n, false, t), af(n, true, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[du] || (e[du] = true, af("selectionchange", false, e));
    }
  }
  function Bd(t, e, n, a) {
    switch (hm(e)) {
      case 2:
        var u = gv;
        break;
      case 8:
        u = _v;
        break;
      default:
        u = bf;
    }
    n = u.bind(null, e, n, t), u = void 0, !zr || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (u = true), a ? u !== void 0 ? t.addEventListener(e, n, { capture: true, passive: u }) : t.addEventListener(e, n, true) : u !== void 0 ? t.addEventListener(e, n, { passive: u }) : t.addEventListener(e, n, false);
  }
  function uf(t, e, n, a, u) {
    var r = a;
    if ((e & 1) === 0 && (e & 2) === 0 && a !== null) t: for (; ; ) {
      if (a === null) return;
      var s = a.tag;
      if (s === 3 || s === 4) {
        var m = a.stateNode.containerInfo;
        if (m === u) break;
        if (s === 4) for (s = a.return; s !== null; ) {
          var _ = s.tag;
          if ((_ === 3 || _ === 4) && s.stateNode.containerInfo === u) return;
          s = s.return;
        }
        for (; m !== null; ) {
          if (s = ma(m), s === null) return;
          if (_ = s.tag, _ === 5 || _ === 6 || _ === 26 || _ === 27) {
            a = r = s;
            continue t;
          }
          m = m.parentNode;
        }
      }
      a = a.return;
    }
    Xo(function() {
      var M = r, q = Tr(n), B = [];
      t: {
        var N = ys.get(t);
        if (N !== void 0) {
          var C = zi, et = t;
          switch (t) {
            case "keypress":
              if (Ti(n) === 0) break t;
            case "keydown":
            case "keyup":
              C = Bp;
              break;
            case "focusin":
              et = "focus", C = Or;
              break;
            case "focusout":
              et = "blur", C = Or;
              break;
            case "beforeblur":
            case "afterblur":
              C = Or;
              break;
            case "click":
              if (n.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              C = Zo;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              C = Ap;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              C = Gp;
              break;
            case hs:
            case ds:
            case ms:
              C = Op;
              break;
            case ps:
              C = Xp;
              break;
            case "scroll":
            case "scrollend":
              C = Ep;
              break;
            case "wheel":
              C = Vp;
              break;
            case "copy":
            case "cut":
            case "paste":
              C = wp;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              C = Jo;
              break;
            case "toggle":
            case "beforetoggle":
              C = Kp;
          }
          var ut = (e & 4) !== 0, Ot = !ut && (t === "scroll" || t === "scrollend"), A = ut ? N !== null ? N + "Capture" : null : N;
          ut = [];
          for (var T = M, x; T !== null; ) {
            var H = T;
            if (x = H.stateNode, H = H.tag, H !== 5 && H !== 26 && H !== 27 || x === null || A === null || (H = rl(T, A), H != null && ut.push(Gl(T, H, x))), Ot) break;
            T = T.return;
          }
          0 < ut.length && (N = new C(N, et, null, n, q), B.push({ event: N, listeners: ut }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (N = t === "mouseover" || t === "pointerover", C = t === "mouseout" || t === "pointerout", N && n !== Sr && (et = n.relatedTarget || n.fromElement) && (ma(et) || et[da])) break t;
          if ((C || N) && (N = q.window === q ? q : (N = q.ownerDocument) ? N.defaultView || N.parentWindow : window, C ? (et = n.relatedTarget || n.toElement, C = M, et = et ? ma(et) : null, et !== null && (Ot = h(et), ut = et.tag, et !== Ot || ut !== 5 && ut !== 27 && ut !== 6) && (et = null)) : (C = null, et = M), C !== et)) {
            if (ut = Zo, H = "onMouseLeave", A = "onMouseEnter", T = "mouse", (t === "pointerout" || t === "pointerover") && (ut = Jo, H = "onPointerLeave", A = "onPointerEnter", T = "pointer"), Ot = C == null ? N : ul(C), x = et == null ? N : ul(et), N = new ut(H, T + "leave", C, n, q), N.target = Ot, N.relatedTarget = x, H = null, ma(q) === M && (ut = new ut(A, T + "enter", et, n, q), ut.target = x, ut.relatedTarget = Ot, H = ut), Ot = H, C && et) e: {
              for (ut = Zy, A = C, T = et, x = 0, H = A; H; H = ut(H)) x++;
              H = 0;
              for (var at = T; at; at = ut(at)) H++;
              for (; 0 < x - H; ) A = ut(A), x--;
              for (; 0 < H - x; ) T = ut(T), H--;
              for (; x--; ) {
                if (A === T || T !== null && A === T.alternate) {
                  ut = A;
                  break e;
                }
                A = ut(A), T = ut(T);
              }
              ut = null;
            }
            else ut = null;
            C !== null && jd(B, N, C, ut, false), et !== null && Ot !== null && jd(B, Ot, et, ut, true);
          }
        }
        t: {
          if (N = M ? ul(M) : window, C = N.nodeName && N.nodeName.toLowerCase(), C === "select" || C === "input" && N.type === "file") var St = es;
          else if (Po(N)) if (ns) St = ny;
          else {
            St = ty;
            var nt = Pp;
          }
          else C = N.nodeName, !C || C.toLowerCase() !== "input" || N.type !== "checkbox" && N.type !== "radio" ? M && br(M.elementType) && (St = es) : St = ey;
          if (St && (St = St(t, M))) {
            ts(B, St, n, q);
            break t;
          }
          nt && nt(t, N, M), t === "focusout" && M && N.type === "number" && M.memoizedProps.value != null && _r(N, "number", N.value);
        }
        switch (nt = M ? ul(M) : window, t) {
          case "focusin":
            (Po(nt) || nt.contentEditable === "true") && (Ea = nt, Ur = M, pl = null);
            break;
          case "focusout":
            pl = Ur = Ea = null;
            break;
          case "mousedown":
            qr = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            qr = false, os(B, n, q);
            break;
          case "selectionchange":
            if (ly) break;
          case "keydown":
          case "keyup":
            os(B, n, q);
        }
        var dt;
        if (wr) t: {
          switch (t) {
            case "compositionstart":
              var gt = "onCompositionStart";
              break t;
            case "compositionend":
              gt = "onCompositionEnd";
              break t;
            case "compositionupdate":
              gt = "onCompositionUpdate";
              break t;
          }
          gt = void 0;
        }
        else Ta ? Fo(t, n) && (gt = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && (gt = "onCompositionStart");
        gt && (ko && n.locale !== "ko" && (Ta || gt !== "onCompositionStart" ? gt === "onCompositionEnd" && Ta && (dt = Qo()) : (vn = q, Ar = "value" in vn ? vn.value : vn.textContent, Ta = true)), nt = mu(M, gt), 0 < nt.length && (gt = new Ko(gt, t, null, n, q), B.push({ event: gt, listeners: nt }), dt ? gt.data = dt : (dt = Io(n), dt !== null && (gt.data = dt)))), (dt = kp ? Wp(t, n) : $p(t, n)) && (gt = mu(M, "onBeforeInput"), 0 < gt.length && (nt = new Ko("onBeforeInput", "beforeinput", null, n, q), B.push({ event: nt, listeners: gt }), nt.data = dt)), Ly(B, t, M, n, q);
      }
      Hd(B, e);
    });
  }
  function Gl(t, e, n) {
    return { instance: t, listener: e, currentTarget: n };
  }
  function mu(t, e) {
    for (var n = e + "Capture", a = []; t !== null; ) {
      var u = t, r = u.stateNode;
      if (u = u.tag, u !== 5 && u !== 26 && u !== 27 || r === null || (u = rl(t, n), u != null && a.unshift(Gl(t, u, r)), u = rl(t, e), u != null && a.push(Gl(t, u, r))), t.tag === 3) return a;
      t = t.return;
    }
    return [];
  }
  function Zy(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function jd(t, e, n, a, u) {
    for (var r = e._reactName, s = []; n !== null && n !== a; ) {
      var m = n, _ = m.alternate, M = m.stateNode;
      if (m = m.tag, _ !== null && _ === a) break;
      m !== 5 && m !== 26 && m !== 27 || M === null || (_ = M, u ? (M = rl(n, r), M != null && s.unshift(Gl(n, M, _))) : u || (M = rl(n, r), M != null && s.push(Gl(n, M, _)))), n = n.return;
    }
    s.length !== 0 && t.push({ event: e, listeners: s });
  }
  var Ky = /\r\n?/g, Jy = /\u0000|\uFFFD/g;
  function Yd(t) {
    return (typeof t == "string" ? t : "" + t).replace(Ky, `
`).replace(Jy, "");
  }
  function Gd(t, e) {
    return e = Yd(e), Yd(t) === e;
  }
  function Mt(t, e, n, a, u, r) {
    switch (n) {
      case "children":
        typeof a == "string" ? e === "body" || e === "textarea" && a === "" || _a(t, a) : (typeof a == "number" || typeof a == "bigint") && e !== "body" && _a(t, "" + a);
        break;
      case "className":
        gi(t, "class", a);
        break;
      case "tabIndex":
        gi(t, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        gi(t, n, a);
        break;
      case "style":
        Go(t, a, r);
        break;
      case "data":
        if (e !== "object") {
          gi(t, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (e !== "a" || n !== "href")) {
          t.removeAttribute(n);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(n);
          break;
        }
        a = bi("" + a), t.setAttribute(n, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          t.setAttribute(n, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
          break;
        } else typeof r == "function" && (n === "formAction" ? (e !== "input" && Mt(t, e, "name", u.name, u, null), Mt(t, e, "formEncType", u.formEncType, u, null), Mt(t, e, "formMethod", u.formMethod, u, null), Mt(t, e, "formTarget", u.formTarget, u, null)) : (Mt(t, e, "encType", u.encType, u, null), Mt(t, e, "method", u.method, u, null), Mt(t, e, "target", u.target, u, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(n);
          break;
        }
        a = bi("" + a), t.setAttribute(n, a);
        break;
      case "onClick":
        a != null && (t.onclick = ke);
        break;
      case "onScroll":
        a != null && yt("scroll", t);
        break;
      case "onScrollEnd":
        a != null && yt("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(f(61));
          if (n = a.__html, n != null) {
            if (u.children != null) throw Error(f(60));
            t.innerHTML = n;
          }
        }
        break;
      case "multiple":
        t.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        t.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
          t.removeAttribute("xlink:href");
          break;
        }
        n = bi("" + a), t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(n, "" + a) : t.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(n, "") : t.removeAttribute(n);
        break;
      case "capture":
      case "download":
        a === true ? t.setAttribute(n, "") : a !== false && a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(n, a) : t.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? t.setAttribute(n, a) : t.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? t.removeAttribute(n) : t.setAttribute(n, a);
        break;
      case "popover":
        yt("beforetoggle", t), yt("toggle", t), vi(t, "popover", a);
        break;
      case "xlinkActuate":
        Je(t, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        Je(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        Je(t, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        Je(t, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        Je(t, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        Je(t, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        Je(t, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        Je(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        Je(t, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        vi(t, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = Sp.get(n) || n, vi(t, n, a));
    }
  }
  function rf(t, e, n, a, u, r) {
    switch (n) {
      case "style":
        Go(t, a, r);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(f(61));
          if (n = a.__html, n != null) {
            if (u.children != null) throw Error(f(60));
            t.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof a == "string" ? _a(t, a) : (typeof a == "number" || typeof a == "bigint") && _a(t, "" + a);
        break;
      case "onScroll":
        a != null && yt("scroll", t);
        break;
      case "onScrollEnd":
        a != null && yt("scrollend", t);
        break;
      case "onClick":
        a != null && (t.onclick = ke);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Do.hasOwnProperty(n)) t: {
          if (n[0] === "o" && n[1] === "n" && (u = n.endsWith("Capture"), e = n.slice(2, u ? n.length - 7 : void 0), r = t[ie] || null, r = r != null ? r[n] : null, typeof r == "function" && t.removeEventListener(e, r, u), typeof a == "function")) {
            typeof r != "function" && r !== null && (n in t ? t[n] = null : t.hasAttribute(n) && t.removeAttribute(n)), t.addEventListener(e, a, u);
            break t;
          }
          n in t ? t[n] = a : a === true ? t.setAttribute(n, "") : vi(t, n, a);
        }
    }
  }
  function It(t, e, n) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        yt("error", t), yt("load", t);
        var a = false, u = false, r;
        for (r in n) if (n.hasOwnProperty(r)) {
          var s = n[r];
          if (s != null) switch (r) {
            case "src":
              a = true;
              break;
            case "srcSet":
              u = true;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(f(137, e));
            default:
              Mt(t, e, r, s, n, null);
          }
        }
        u && Mt(t, e, "srcSet", n.srcSet, n, null), a && Mt(t, e, "src", n.src, n, null);
        return;
      case "input":
        yt("invalid", t);
        var m = r = s = u = null, _ = null, M = null;
        for (a in n) if (n.hasOwnProperty(a)) {
          var q = n[a];
          if (q != null) switch (a) {
            case "name":
              u = q;
              break;
            case "type":
              s = q;
              break;
            case "checked":
              _ = q;
              break;
            case "defaultChecked":
              M = q;
              break;
            case "value":
              r = q;
              break;
            case "defaultValue":
              m = q;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (q != null) throw Error(f(137, e));
              break;
            default:
              Mt(t, e, a, q, n, null);
          }
        }
        Ho(t, r, m, _, M, s, u, false);
        return;
      case "select":
        yt("invalid", t), a = s = r = null;
        for (u in n) if (n.hasOwnProperty(u) && (m = n[u], m != null)) switch (u) {
          case "value":
            r = m;
            break;
          case "defaultValue":
            s = m;
            break;
          case "multiple":
            a = m;
          default:
            Mt(t, e, u, m, n, null);
        }
        e = r, n = s, t.multiple = !!a, e != null ? ga(t, !!a, e, false) : n != null && ga(t, !!a, n, true);
        return;
      case "textarea":
        yt("invalid", t), r = u = a = null;
        for (s in n) if (n.hasOwnProperty(s) && (m = n[s], m != null)) switch (s) {
          case "value":
            a = m;
            break;
          case "defaultValue":
            u = m;
            break;
          case "children":
            r = m;
            break;
          case "dangerouslySetInnerHTML":
            if (m != null) throw Error(f(91));
            break;
          default:
            Mt(t, e, s, m, n, null);
        }
        jo(t, a, u, r);
        return;
      case "option":
        for (_ in n) n.hasOwnProperty(_) && (a = n[_], a != null) && (_ === "selected" ? t.selected = a && typeof a != "function" && typeof a != "symbol" : Mt(t, e, _, a, n, null));
        return;
      case "dialog":
        yt("beforetoggle", t), yt("toggle", t), yt("cancel", t), yt("close", t);
        break;
      case "iframe":
      case "object":
        yt("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Yl.length; a++) yt(Yl[a], t);
        break;
      case "image":
        yt("error", t), yt("load", t);
        break;
      case "details":
        yt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        yt("error", t), yt("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (M in n) if (n.hasOwnProperty(M) && (a = n[M], a != null)) switch (M) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(f(137, e));
          default:
            Mt(t, e, M, a, n, null);
        }
        return;
      default:
        if (br(e)) {
          for (q in n) n.hasOwnProperty(q) && (a = n[q], a !== void 0 && rf(t, e, q, a, n, void 0));
          return;
        }
    }
    for (m in n) n.hasOwnProperty(m) && (a = n[m], a != null && Mt(t, e, m, a, n, null));
  }
  function ky(t, e, n, a) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var u = null, r = null, s = null, m = null, _ = null, M = null, q = null;
        for (C in n) {
          var B = n[C];
          if (n.hasOwnProperty(C) && B != null) switch (C) {
            case "checked":
              break;
            case "value":
              break;
            case "defaultValue":
              _ = B;
            default:
              a.hasOwnProperty(C) || Mt(t, e, C, null, a, B);
          }
        }
        for (var N in a) {
          var C = a[N];
          if (B = n[N], a.hasOwnProperty(N) && (C != null || B != null)) switch (N) {
            case "type":
              r = C;
              break;
            case "name":
              u = C;
              break;
            case "checked":
              M = C;
              break;
            case "defaultChecked":
              q = C;
              break;
            case "value":
              s = C;
              break;
            case "defaultValue":
              m = C;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (C != null) throw Error(f(137, e));
              break;
            default:
              C !== B && Mt(t, e, N, C, a, B);
          }
        }
        gr(t, s, m, _, M, q, r, u);
        return;
      case "select":
        C = s = m = N = null;
        for (r in n) if (_ = n[r], n.hasOwnProperty(r) && _ != null) switch (r) {
          case "value":
            break;
          case "multiple":
            C = _;
          default:
            a.hasOwnProperty(r) || Mt(t, e, r, null, a, _);
        }
        for (u in a) if (r = a[u], _ = n[u], a.hasOwnProperty(u) && (r != null || _ != null)) switch (u) {
          case "value":
            N = r;
            break;
          case "defaultValue":
            m = r;
            break;
          case "multiple":
            s = r;
          default:
            r !== _ && Mt(t, e, u, r, a, _);
        }
        e = m, n = s, a = C, N != null ? ga(t, !!n, N, false) : !!a != !!n && (e != null ? ga(t, !!n, e, true) : ga(t, !!n, n ? [] : "", false));
        return;
      case "textarea":
        C = N = null;
        for (m in n) if (u = n[m], n.hasOwnProperty(m) && u != null && !a.hasOwnProperty(m)) switch (m) {
          case "value":
            break;
          case "children":
            break;
          default:
            Mt(t, e, m, null, a, u);
        }
        for (s in a) if (u = a[s], r = n[s], a.hasOwnProperty(s) && (u != null || r != null)) switch (s) {
          case "value":
            N = u;
            break;
          case "defaultValue":
            C = u;
            break;
          case "children":
            break;
          case "dangerouslySetInnerHTML":
            if (u != null) throw Error(f(91));
            break;
          default:
            u !== r && Mt(t, e, s, u, a, r);
        }
        Bo(t, N, C);
        return;
      case "option":
        for (var et in n) N = n[et], n.hasOwnProperty(et) && N != null && !a.hasOwnProperty(et) && (et === "selected" ? t.selected = false : Mt(t, e, et, null, a, N));
        for (_ in a) N = a[_], C = n[_], a.hasOwnProperty(_) && N !== C && (N != null || C != null) && (_ === "selected" ? t.selected = N && typeof N != "function" && typeof N != "symbol" : Mt(t, e, _, N, a, C));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var ut in n) N = n[ut], n.hasOwnProperty(ut) && N != null && !a.hasOwnProperty(ut) && Mt(t, e, ut, null, a, N);
        for (M in a) if (N = a[M], C = n[M], a.hasOwnProperty(M) && N !== C && (N != null || C != null)) switch (M) {
          case "children":
          case "dangerouslySetInnerHTML":
            if (N != null) throw Error(f(137, e));
            break;
          default:
            Mt(t, e, M, N, a, C);
        }
        return;
      default:
        if (br(e)) {
          for (var Ot in n) N = n[Ot], n.hasOwnProperty(Ot) && N !== void 0 && !a.hasOwnProperty(Ot) && rf(t, e, Ot, void 0, a, N);
          for (q in a) N = a[q], C = n[q], !a.hasOwnProperty(q) || N === C || N === void 0 && C === void 0 || rf(t, e, q, N, a, C);
          return;
        }
    }
    for (var A in n) N = n[A], n.hasOwnProperty(A) && N != null && !a.hasOwnProperty(A) && Mt(t, e, A, null, a, N);
    for (B in a) N = a[B], C = n[B], !a.hasOwnProperty(B) || N === C || N == null && C == null || Mt(t, e, B, N, a, C);
  }
  function Ld(t) {
    switch (t) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return true;
      default:
        return false;
    }
  }
  function Wy() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, e = 0, n = performance.getEntriesByType("resource"), a = 0; a < n.length; a++) {
        var u = n[a], r = u.transferSize, s = u.initiatorType, m = u.duration;
        if (r && m && Ld(s)) {
          for (s = 0, m = u.responseEnd, a += 1; a < n.length; a++) {
            var _ = n[a], M = _.startTime;
            if (M > m) break;
            var q = _.transferSize, B = _.initiatorType;
            q && Ld(B) && (_ = _.responseEnd, s += q * (_ < m ? 1 : (m - M) / (_ - M)));
          }
          if (--a, e += 8 * (r + s) / (u.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var cf = null, ff = null;
  function pu(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Xd(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Qd(t, e) {
    if (t === 0) switch (e) {
      case "svg":
        return 1;
      case "math":
        return 2;
      default:
        return 0;
    }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function of(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var sf = null;
  function $y() {
    var t = window.event;
    return t && t.type === "popstate" ? t === sf ? false : (sf = t, true) : (sf = null, false);
  }
  var Vd = typeof setTimeout == "function" ? setTimeout : void 0, Fy = typeof clearTimeout == "function" ? clearTimeout : void 0, Zd = typeof Promise == "function" ? Promise : void 0, Iy = typeof queueMicrotask == "function" ? queueMicrotask : typeof Zd < "u" ? function(t) {
    return Zd.resolve(null).then(t).catch(Py);
  } : Vd;
  function Py(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function Un(t) {
    return t === "head";
  }
  function Kd(t, e) {
    var n = e, a = 0;
    do {
      var u = n.nextSibling;
      if (t.removeChild(n), u && u.nodeType === 8) if (n = u.data, n === "/$" || n === "/&") {
        if (a === 0) {
          t.removeChild(u), $a(e);
          return;
        }
        a--;
      } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&") a++;
      else if (n === "html") Ll(t.ownerDocument.documentElement);
      else if (n === "head") {
        n = t.ownerDocument.head, Ll(n);
        for (var r = n.firstChild; r; ) {
          var s = r.nextSibling, m = r.nodeName;
          r[il] || m === "SCRIPT" || m === "STYLE" || m === "LINK" && r.rel.toLowerCase() === "stylesheet" || n.removeChild(r), r = s;
        }
      } else n === "body" && Ll(t.ownerDocument.body);
      n = u;
    } while (n);
    $a(e);
  }
  function Jd(t, e) {
    var n = t;
    t = 0;
    do {
      var a = n.nextSibling;
      if (n.nodeType === 1 ? e ? (n._stashedDisplay = n.style.display, n.style.display = "none") : (n.style.display = n._stashedDisplay || "", n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (e ? (n._stashedText = n.nodeValue, n.nodeValue = "") : n.nodeValue = n._stashedText || ""), a && a.nodeType === 8) if (n = a.data, n === "/$") {
        if (t === 0) break;
        t--;
      } else n !== "$" && n !== "$?" && n !== "$~" && n !== "$!" || t++;
      n = a;
    } while (n);
  }
  function hf(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var n = e;
      switch (e = e.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          hf(n), yr(n);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(n);
    }
  }
  function tv(t, e, n, a) {
    for (; t.nodeType === 1; ) {
      var u = n;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (a) {
        if (!t[il]) switch (e) {
          case "meta":
            if (!t.hasAttribute("itemprop")) break;
            return t;
          case "link":
            if (r = t.getAttribute("rel"), r === "stylesheet" && t.hasAttribute("data-precedence")) break;
            if (r !== u.rel || t.getAttribute("href") !== (u.href == null || u.href === "" ? null : u.href) || t.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin) || t.getAttribute("title") !== (u.title == null ? null : u.title)) break;
            return t;
          case "style":
            if (t.hasAttribute("data-precedence")) break;
            return t;
          case "script":
            if (r = t.getAttribute("src"), (r !== (u.src == null ? null : u.src) || t.getAttribute("type") !== (u.type == null ? null : u.type) || t.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin)) && r && t.hasAttribute("async") && !t.hasAttribute("itemprop")) break;
            return t;
          default:
            return t;
        }
      } else if (e === "input" && t.type === "hidden") {
        var r = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && t.getAttribute("name") === r) return t;
      } else return t;
      if (t = Re(t.nextSibling), t === null) break;
    }
    return null;
  }
  function ev(t, e, n) {
    if (e === "") return null;
    for (; t.nodeType !== 3; ) if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !n || (t = Re(t.nextSibling), t === null)) return null;
    return t;
  }
  function kd(t, e) {
    for (; t.nodeType !== 8; ) if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = Re(t.nextSibling), t === null)) return null;
    return t;
  }
  function df(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function mf(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function nv(t, e) {
    var n = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = e;
    else if (t.data !== "$?" || n.readyState !== "loading") e();
    else {
      var a = function() {
        e(), n.removeEventListener("DOMContentLoaded", a);
      };
      n.addEventListener("DOMContentLoaded", a), t._reactRetry = a;
    }
  }
  function Re(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (e = t.data, e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&" || e === "F!" || e === "F") break;
        if (e === "/$" || e === "/&") return null;
      }
    }
    return t;
  }
  var pf = null;
  function Wd(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "/$" || n === "/&") {
          if (e === 0) return Re(t.nextSibling);
          e--;
        } else n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function $d(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
          if (e === 0) return t;
          e--;
        } else n !== "/$" && n !== "/&" || e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function Fd(t, e, n) {
    switch (e = pu(n), t) {
      case "html":
        if (t = e.documentElement, !t) throw Error(f(452));
        return t;
      case "head":
        if (t = e.head, !t) throw Error(f(453));
        return t;
      case "body":
        if (t = e.body, !t) throw Error(f(454));
        return t;
      default:
        throw Error(f(451));
    }
  }
  function Ll(t) {
    for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
    yr(t);
  }
  var Ue = /* @__PURE__ */ new Map(), Id = /* @__PURE__ */ new Set();
  function yu(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var sn = D.d;
  D.d = { f: av, r: lv, D: iv, C: uv, L: rv, m: cv, X: ov, S: fv, M: sv };
  function av() {
    var t = sn.f(), e = ru();
    return t || e;
  }
  function lv(t) {
    var e = pa(t);
    e !== null && e.tag === 5 && e.type === "form" ? ph(e) : sn.r(t);
  }
  var Ja = typeof document > "u" ? null : document;
  function Pd(t, e, n) {
    var a = Ja;
    if (a && typeof e == "string" && e) {
      var u = xe(e);
      u = 'link[rel="' + t + '"][href="' + u + '"]', typeof n == "string" && (u += '[crossorigin="' + n + '"]'), Id.has(u) || (Id.add(u), t = { rel: t, crossOrigin: n, href: e }, a.querySelector(u) === null && (e = a.createElement("link"), It(e, "link", t), Kt(e), a.head.appendChild(e)));
    }
  }
  function iv(t) {
    sn.D(t), Pd("dns-prefetch", t, null);
  }
  function uv(t, e) {
    sn.C(t, e), Pd("preconnect", t, e);
  }
  function rv(t, e, n) {
    sn.L(t, e, n);
    var a = Ja;
    if (a && t && e) {
      var u = 'link[rel="preload"][as="' + xe(e) + '"]';
      e === "image" && n && n.imageSrcSet ? (u += '[imagesrcset="' + xe(n.imageSrcSet) + '"]', typeof n.imageSizes == "string" && (u += '[imagesizes="' + xe(n.imageSizes) + '"]')) : u += '[href="' + xe(t) + '"]';
      var r = u;
      switch (e) {
        case "style":
          r = ka(t);
          break;
        case "script":
          r = Wa(t);
      }
      Ue.has(r) || (t = E({ rel: "preload", href: e === "image" && n && n.imageSrcSet ? void 0 : t, as: e }, n), Ue.set(r, t), a.querySelector(u) !== null || e === "style" && a.querySelector(Xl(r)) || e === "script" && a.querySelector(Ql(r)) || (e = a.createElement("link"), It(e, "link", t), Kt(e), a.head.appendChild(e)));
    }
  }
  function cv(t, e) {
    sn.m(t, e);
    var n = Ja;
    if (n && t) {
      var a = e && typeof e.as == "string" ? e.as : "script", u = 'link[rel="modulepreload"][as="' + xe(a) + '"][href="' + xe(t) + '"]', r = u;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          r = Wa(t);
      }
      if (!Ue.has(r) && (t = E({ rel: "modulepreload", href: t }, e), Ue.set(r, t), n.querySelector(u) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(Ql(r))) return;
        }
        a = n.createElement("link"), It(a, "link", t), Kt(a), n.head.appendChild(a);
      }
    }
  }
  function fv(t, e, n) {
    sn.S(t, e, n);
    var a = Ja;
    if (a && t) {
      var u = ya(a).hoistableStyles, r = ka(t);
      e = e || "default";
      var s = u.get(r);
      if (!s) {
        var m = { loading: 0, preload: null };
        if (s = a.querySelector(Xl(r))) m.loading = 5;
        else {
          t = E({ rel: "stylesheet", href: t, "data-precedence": e }, n), (n = Ue.get(r)) && yf(t, n);
          var _ = s = a.createElement("link");
          Kt(_), It(_, "link", t), _._p = new Promise(function(M, q) {
            _.onload = M, _.onerror = q;
          }), _.addEventListener("load", function() {
            m.loading |= 1;
          }), _.addEventListener("error", function() {
            m.loading |= 2;
          }), m.loading |= 4, vu(s, e, a);
        }
        s = { type: "stylesheet", instance: s, count: 1, state: m }, u.set(r, s);
      }
    }
  }
  function ov(t, e) {
    sn.X(t, e);
    var n = Ja;
    if (n && t) {
      var a = ya(n).hoistableScripts, u = Wa(t), r = a.get(u);
      r || (r = n.querySelector(Ql(u)), r || (t = E({ src: t, async: true }, e), (e = Ue.get(u)) && vf(t, e), r = n.createElement("script"), Kt(r), It(r, "link", t), n.head.appendChild(r)), r = { type: "script", instance: r, count: 1, state: null }, a.set(u, r));
    }
  }
  function sv(t, e) {
    sn.M(t, e);
    var n = Ja;
    if (n && t) {
      var a = ya(n).hoistableScripts, u = Wa(t), r = a.get(u);
      r || (r = n.querySelector(Ql(u)), r || (t = E({ src: t, async: true, type: "module" }, e), (e = Ue.get(u)) && vf(t, e), r = n.createElement("script"), Kt(r), It(r, "link", t), n.head.appendChild(r)), r = { type: "script", instance: r, count: 1, state: null }, a.set(u, r));
    }
  }
  function tm(t, e, n, a) {
    var u = (u = ct.current) ? yu(u) : null;
    if (!u) throw Error(f(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (e = ka(n.href), n = ya(u).hoistableStyles, a = n.get(e), a || (a = { type: "style", instance: null, count: 0, state: null }, n.set(e, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          t = ka(n.href);
          var r = ya(u).hoistableStyles, s = r.get(t);
          if (s || (u = u.ownerDocument || u, s = { type: "stylesheet", instance: null, count: 0, state: { loading: 0, preload: null } }, r.set(t, s), (r = u.querySelector(Xl(t))) && !r._p && (s.instance = r, s.state.loading = 5), Ue.has(t) || (n = { rel: "preload", as: "style", href: n.href, crossOrigin: n.crossOrigin, integrity: n.integrity, media: n.media, hrefLang: n.hrefLang, referrerPolicy: n.referrerPolicy }, Ue.set(t, n), r || hv(u, t, n, s.state))), e && a === null) throw Error(f(528, ""));
          return s;
        }
        if (e && a !== null) throw Error(f(529, ""));
        return null;
      case "script":
        return e = n.async, n = n.src, typeof n == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = Wa(n), n = ya(u).hoistableScripts, a = n.get(e), a || (a = { type: "script", instance: null, count: 0, state: null }, n.set(e, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(f(444, t));
    }
  }
  function ka(t) {
    return 'href="' + xe(t) + '"';
  }
  function Xl(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function em(t) {
    return E({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function hv(t, e, n, a) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? a.loading = 1 : (e = t.createElement("link"), a.preload = e, e.addEventListener("load", function() {
      return a.loading |= 1;
    }), e.addEventListener("error", function() {
      return a.loading |= 2;
    }), It(e, "link", n), Kt(e), t.head.appendChild(e));
  }
  function Wa(t) {
    return '[src="' + xe(t) + '"]';
  }
  function Ql(t) {
    return "script[async]" + t;
  }
  function nm(t, e, n) {
    if (e.count++, e.instance === null) switch (e.type) {
      case "style":
        var a = t.querySelector('style[data-href~="' + xe(n.href) + '"]');
        if (a) return e.instance = a, Kt(a), a;
        var u = E({}, n, { "data-href": n.href, "data-precedence": n.precedence, href: null, precedence: null });
        return a = (t.ownerDocument || t).createElement("style"), Kt(a), It(a, "style", u), vu(a, n.precedence, t), e.instance = a;
      case "stylesheet":
        u = ka(n.href);
        var r = t.querySelector(Xl(u));
        if (r) return e.state.loading |= 4, e.instance = r, Kt(r), r;
        a = em(n), (u = Ue.get(u)) && yf(a, u), r = (t.ownerDocument || t).createElement("link"), Kt(r);
        var s = r;
        return s._p = new Promise(function(m, _) {
          s.onload = m, s.onerror = _;
        }), It(r, "link", a), e.state.loading |= 4, vu(r, n.precedence, t), e.instance = r;
      case "script":
        return r = Wa(n.src), (u = t.querySelector(Ql(r))) ? (e.instance = u, Kt(u), u) : (a = n, (u = Ue.get(r)) && (a = E({}, n), vf(a, u)), t = t.ownerDocument || t, u = t.createElement("script"), Kt(u), It(u, "link", a), t.head.appendChild(u), e.instance = u);
      case "void":
        return null;
      default:
        throw Error(f(443, e.type));
    }
    else e.type === "stylesheet" && (e.state.loading & 4) === 0 && (a = e.instance, e.state.loading |= 4, vu(a, n.precedence, t));
    return e.instance;
  }
  function vu(t, e, n) {
    for (var a = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), u = a.length ? a[a.length - 1] : null, r = u, s = 0; s < a.length; s++) {
      var m = a[s];
      if (m.dataset.precedence === e) r = m;
      else if (r !== u) break;
    }
    r ? r.parentNode.insertBefore(t, r.nextSibling) : (e = n.nodeType === 9 ? n.head : n, e.insertBefore(t, e.firstChild));
  }
  function yf(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function vf(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
  }
  var gu = null;
  function am(t, e, n) {
    if (gu === null) {
      var a = /* @__PURE__ */ new Map(), u = gu = /* @__PURE__ */ new Map();
      u.set(n, a);
    } else u = gu, a = u.get(n), a || (a = /* @__PURE__ */ new Map(), u.set(n, a));
    if (a.has(t)) return a;
    for (a.set(t, null), n = n.getElementsByTagName(t), u = 0; u < n.length; u++) {
      var r = n[u];
      if (!(r[il] || r[kt] || t === "link" && r.getAttribute("rel") === "stylesheet") && r.namespaceURI !== "http://www.w3.org/2000/svg") {
        var s = r.getAttribute(e) || "";
        s = t + s;
        var m = a.get(s);
        m ? m.push(r) : a.set(s, [r]);
      }
    }
    return a;
  }
  function lm(t, e, n) {
    t = t.ownerDocument || t, t.head.insertBefore(n, e === "title" ? t.querySelector("head > title") : null);
  }
  function dv(t, e, n) {
    if (n === 1 || e.itemProp != null) return false;
    switch (t) {
      case "meta":
      case "title":
        return true;
      case "style":
        if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "") break;
        return true;
      case "link":
        if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError) break;
        return e.rel === "stylesheet" ? (t = e.disabled, typeof e.precedence == "string" && t == null) : true;
      case "script":
        if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string") return true;
    }
    return false;
  }
  function im(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function mv(t, e, n, a) {
    if (n.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== false) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var u = ka(a.href), r = e.querySelector(Xl(u));
        if (r) {
          e = r._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = _u.bind(t), e.then(t, t)), n.state.loading |= 4, n.instance = r, Kt(r);
          return;
        }
        r = e.ownerDocument || e, a = em(a), (u = Ue.get(u)) && yf(a, u), r = r.createElement("link"), Kt(r);
        var s = r;
        s._p = new Promise(function(m, _) {
          s.onload = m, s.onerror = _;
        }), It(r, "link", a), n.instance = r;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(n, e), (e = n.state.preload) && (n.state.loading & 3) === 0 && (t.count++, n = _u.bind(t), e.addEventListener("load", n), e.addEventListener("error", n));
    }
  }
  var gf = 0;
  function pv(t, e) {
    return t.stylesheets && t.count === 0 && Su(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(n) {
      var a = setTimeout(function() {
        if (t.stylesheets && Su(t, t.stylesheets), t.unsuspend) {
          var r = t.unsuspend;
          t.unsuspend = null, r();
        }
      }, 6e4 + e);
      0 < t.imgBytes && gf === 0 && (gf = 62500 * Wy());
      var u = setTimeout(function() {
        if (t.waitingForImages = false, t.count === 0 && (t.stylesheets && Su(t, t.stylesheets), t.unsuspend)) {
          var r = t.unsuspend;
          t.unsuspend = null, r();
        }
      }, (t.imgBytes > gf ? 50 : 800) + e);
      return t.unsuspend = n, function() {
        t.unsuspend = null, clearTimeout(a), clearTimeout(u);
      };
    } : null;
  }
  function _u() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Su(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null, t();
      }
    }
  }
  var bu = null;
  function Su(t, e) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, bu = /* @__PURE__ */ new Map(), e.forEach(yv, t), bu = null, _u.call(t));
  }
  function yv(t, e) {
    if (!(e.state.loading & 4)) {
      var n = bu.get(t);
      if (n) var a = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), bu.set(t, n);
        for (var u = t.querySelectorAll("link[data-precedence],style[data-precedence]"), r = 0; r < u.length; r++) {
          var s = u[r];
          (s.nodeName === "LINK" || s.getAttribute("media") !== "not all") && (n.set(s.dataset.precedence, s), a = s);
        }
        a && n.set(null, a);
      }
      u = e.instance, s = u.getAttribute("data-precedence"), r = n.get(s) || a, r === a && n.set(null, u), n.set(s, u), this.count++, a = _u.bind(this), u.addEventListener("load", a), u.addEventListener("error", a), r ? r.parentNode.insertBefore(u, r.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(u, t.firstChild)), e.state.loading |= 4;
    }
  }
  var Vl = { $$typeof: G, Provider: null, Consumer: null, _currentValue: Q, _currentValue2: Q, _threadCount: 0 };
  function vv(t, e, n, a, u, r, s, m, _) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = hr(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = hr(0), this.hiddenUpdates = hr(null), this.identifierPrefix = a, this.onUncaughtError = u, this.onCaughtError = r, this.onRecoverableError = s, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = _, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function um(t, e, n, a, u, r, s, m, _, M, q, B) {
    return t = new vv(t, e, n, s, _, M, q, B, m), e = 1, r === true && (e |= 24), r = ve(3, null, null, e), t.current = r, r.stateNode = t, e = $r(), e.refCount++, t.pooledCache = e, e.refCount++, r.memoizedState = { element: a, isDehydrated: n, cache: e }, tc(r), t;
  }
  function rm(t) {
    return t ? (t = xa, t) : xa;
  }
  function cm(t, e, n, a, u, r) {
    u = rm(u), a.context === null ? a.context = u : a.pendingContext = u, a = En(e), a.payload = { element: n }, r = r === void 0 ? null : r, r !== null && (a.callback = r), n = zn(t, a, e), n !== null && (se(n, t, e), Tl(n, t, e));
  }
  function fm(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e;
    }
  }
  function _f(t, e) {
    fm(t, e), (t = t.alternate) && fm(t, e);
  }
  function om(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = kn(t, 67108864);
      e !== null && se(e, t, 67108864), _f(t, 67108864);
    }
  }
  function sm(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Te();
      e = dr(e);
      var n = kn(t, e);
      n !== null && se(n, t, e), _f(t, e);
    }
  }
  var Tu = true;
  function gv(t, e, n, a) {
    var u = g.T;
    g.T = null;
    var r = D.p;
    try {
      D.p = 2, bf(t, e, n, a);
    } finally {
      D.p = r, g.T = u;
    }
  }
  function _v(t, e, n, a) {
    var u = g.T;
    g.T = null;
    var r = D.p;
    try {
      D.p = 8, bf(t, e, n, a);
    } finally {
      D.p = r, g.T = u;
    }
  }
  function bf(t, e, n, a) {
    if (Tu) {
      var u = Sf(a);
      if (u === null) uf(t, e, a, Eu, n), dm(t, a);
      else if (Sv(u, t, e, n, a)) a.stopPropagation();
      else if (dm(t, a), e & 4 && -1 < bv.indexOf(t)) {
        for (; u !== null; ) {
          var r = pa(u);
          if (r !== null) switch (r.tag) {
            case 3:
              if (r = r.stateNode, r.current.memoizedState.isDehydrated) {
                var s = Qn(r.pendingLanes);
                if (s !== 0) {
                  var m = r;
                  for (m.pendingLanes |= 2, m.entangledLanes |= 2; s; ) {
                    var _ = 1 << 31 - pe(s);
                    m.entanglements[1] |= _, s &= ~_;
                  }
                  Qe(r), (Et & 6) === 0 && (iu = de() + 500, jl(0));
                }
              }
              break;
            case 31:
            case 13:
              m = kn(r, 2), m !== null && se(m, r, 2), ru(), _f(r, 2);
          }
          if (r = Sf(a), r === null && uf(t, e, a, Eu, n), r === u) break;
          u = r;
        }
        u !== null && a.stopPropagation();
      } else uf(t, e, a, null, n);
    }
  }
  function Sf(t) {
    return t = Tr(t), Tf(t);
  }
  var Eu = null;
  function Tf(t) {
    if (Eu = null, t = ma(t), t !== null) {
      var e = h(t);
      if (e === null) t = null;
      else {
        var n = e.tag;
        if (n === 13) {
          if (t = d(e), t !== null) return t;
          t = null;
        } else if (n === 31) {
          if (t = y(e), t !== null) return t;
          t = null;
        } else if (n === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated) return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return Eu = t, null;
  }
  function hm(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (ip()) {
          case bo:
            return 2;
          case So:
            return 8;
          case hi:
          case up:
            return 32;
          case To:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Ef = false, qn = null, Hn = null, Bn = null, Zl = /* @__PURE__ */ new Map(), Kl = /* @__PURE__ */ new Map(), jn = [], bv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
  function dm(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        qn = null;
        break;
      case "dragenter":
      case "dragleave":
        Hn = null;
        break;
      case "mouseover":
      case "mouseout":
        Bn = null;
        break;
      case "pointerover":
      case "pointerout":
        Zl.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Kl.delete(e.pointerId);
    }
  }
  function Jl(t, e, n, a, u, r) {
    return t === null || t.nativeEvent !== r ? (t = { blockedOn: e, domEventName: n, eventSystemFlags: a, nativeEvent: r, targetContainers: [u] }, e !== null && (e = pa(e), e !== null && om(e)), t) : (t.eventSystemFlags |= a, e = t.targetContainers, u !== null && e.indexOf(u) === -1 && e.push(u), t);
  }
  function Sv(t, e, n, a, u) {
    switch (e) {
      case "focusin":
        return qn = Jl(qn, t, e, n, a, u), true;
      case "dragenter":
        return Hn = Jl(Hn, t, e, n, a, u), true;
      case "mouseover":
        return Bn = Jl(Bn, t, e, n, a, u), true;
      case "pointerover":
        var r = u.pointerId;
        return Zl.set(r, Jl(Zl.get(r) || null, t, e, n, a, u)), true;
      case "gotpointercapture":
        return r = u.pointerId, Kl.set(r, Jl(Kl.get(r) || null, t, e, n, a, u)), true;
    }
    return false;
  }
  function mm(t) {
    var e = ma(t.target);
    if (e !== null) {
      var n = h(e);
      if (n !== null) {
        if (e = n.tag, e === 13) {
          if (e = d(n), e !== null) {
            t.blockedOn = e, Oo(t.priority, function() {
              sm(n);
            });
            return;
          }
        } else if (e === 31) {
          if (e = y(n), e !== null) {
            t.blockedOn = e, Oo(t.priority, function() {
              sm(n);
            });
            return;
          }
        } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function zu(t) {
    if (t.blockedOn !== null) return false;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var n = Sf(t.nativeEvent);
      if (n === null) {
        n = t.nativeEvent;
        var a = new n.constructor(n.type, n);
        Sr = a, n.target.dispatchEvent(a), Sr = null;
      } else return e = pa(n), e !== null && om(e), t.blockedOn = n, false;
      e.shift();
    }
    return true;
  }
  function pm(t, e, n) {
    zu(t) && n.delete(e);
  }
  function Tv() {
    Ef = false, qn !== null && zu(qn) && (qn = null), Hn !== null && zu(Hn) && (Hn = null), Bn !== null && zu(Bn) && (Bn = null), Zl.forEach(pm), Kl.forEach(pm);
  }
  function Au(t, e) {
    t.blockedOn === e && (t.blockedOn = null, Ef || (Ef = true, l3.unstable_scheduleCallback(l3.unstable_NormalPriority, Tv)));
  }
  var xu = null;
  function ym(t) {
    xu !== t && (xu = t, l3.unstable_scheduleCallback(l3.unstable_NormalPriority, function() {
      xu === t && (xu = null);
      for (var e = 0; e < t.length; e += 3) {
        var n = t[e], a = t[e + 1], u = t[e + 2];
        if (typeof a != "function") {
          if (Tf(a || n) === null) continue;
          break;
        }
        var r = pa(n);
        r !== null && (t.splice(e, 3), e -= 3, bc(r, { pending: true, data: u, method: n.method, action: a }, a, u));
      }
    }));
  }
  function $a(t) {
    function e(_) {
      return Au(_, t);
    }
    qn !== null && Au(qn, t), Hn !== null && Au(Hn, t), Bn !== null && Au(Bn, t), Zl.forEach(e), Kl.forEach(e);
    for (var n = 0; n < jn.length; n++) {
      var a = jn[n];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < jn.length && (n = jn[0], n.blockedOn === null); ) mm(n), n.blockedOn === null && jn.shift();
    if (n = (t.ownerDocument || t).$$reactFormReplay, n != null) for (a = 0; a < n.length; a += 3) {
      var u = n[a], r = n[a + 1], s = u[ie] || null;
      if (typeof r == "function") s || ym(n);
      else if (s) {
        var m = null;
        if (r && r.hasAttribute("formAction")) {
          if (u = r, s = r[ie] || null) m = s.formAction;
          else if (Tf(u) !== null) continue;
        } else m = s.action;
        typeof m == "function" ? n[a + 1] = m : (n.splice(a, 3), a -= 3), ym(n);
      }
    }
  }
  function vm() {
    function t(r) {
      r.canIntercept && r.info === "react-transition" && r.intercept({ handler: function() {
        return new Promise(function(s) {
          return u = s;
        });
      }, focusReset: "manual", scroll: "manual" });
    }
    function e() {
      u !== null && (u(), u = null), a || setTimeout(n, 20);
    }
    function n() {
      if (!a && !navigation.transition) {
        var r = navigation.currentEntry;
        r && r.url != null && navigation.navigate(r.url, { state: r.getState(), info: "react-transition", history: "replace" });
      }
    }
    if (typeof navigation == "object") {
      var a = false, u = null;
      return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", e), navigation.addEventListener("navigateerror", e), setTimeout(n, 100), function() {
        a = true, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", e), navigation.removeEventListener("navigateerror", e), u !== null && (u(), u = null);
      };
    }
  }
  function zf(t) {
    this._internalRoot = t;
  }
  Mu.prototype.render = zf.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(f(409));
    var n = e.current, a = Te();
    cm(n, a, t, e, null, null);
  }, Mu.prototype.unmount = zf.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      cm(t.current, 2, null, t, null, null), ru(), e[da] = null;
    }
  };
  function Mu(t) {
    this._internalRoot = t;
  }
  Mu.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = Mo();
      t = { blockedOn: null, target: t, priority: e };
      for (var n = 0; n < jn.length && e !== 0 && e < jn[n].priority; n++) ;
      jn.splice(n, 0, t), n === 0 && mm(t);
    }
  };
  var gm = i.version;
  if (gm !== "19.2.3") throw Error(f(527, gm, "19.2.3"));
  D.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0) throw typeof t.render == "function" ? Error(f(188)) : (t = Object.keys(t).join(","), Error(f(268, t)));
    return t = p(e), t = t !== null ? S(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var Ev = { bundleType: 0, version: "19.2.3", rendererPackageName: "react-dom", currentDispatcherRef: g, reconcilerVersion: "19.2.3" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ou = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ou.isDisabled && Ou.supportsFiber) try {
      nl = Ou.inject(Ev), me = Ou;
    } catch {
    }
  }
  return Wl.createRoot = function(t, e) {
    if (!o(t)) throw Error(f(299));
    var n = false, a = "", u = Ah, r = xh, s = Mh;
    return e != null && (e.unstable_strictMode === true && (n = true), e.identifierPrefix !== void 0 && (a = e.identifierPrefix), e.onUncaughtError !== void 0 && (u = e.onUncaughtError), e.onCaughtError !== void 0 && (r = e.onCaughtError), e.onRecoverableError !== void 0 && (s = e.onRecoverableError)), e = um(t, 1, false, null, null, n, a, null, u, r, s, vm), t[da] = e.current, lf(t), new zf(e);
  }, Wl.hydrateRoot = function(t, e, n) {
    if (!o(t)) throw Error(f(299));
    var a = false, u = "", r = Ah, s = xh, m = Mh, _ = null;
    return n != null && (n.unstable_strictMode === true && (a = true), n.identifierPrefix !== void 0 && (u = n.identifierPrefix), n.onUncaughtError !== void 0 && (r = n.onUncaughtError), n.onCaughtError !== void 0 && (s = n.onCaughtError), n.onRecoverableError !== void 0 && (m = n.onRecoverableError), n.formState !== void 0 && (_ = n.formState)), e = um(t, 1, true, e, n ?? null, a, u, _, r, s, m, vm), e.context = rm(null), n = e.current, a = Te(), a = dr(a), u = En(a), u.callback = null, zn(n, u, a), n = a, e.current.lanes = n, ll(e, n), Qe(e), t[da] = e.current, lf(t), new Mu(e);
  }, Wl.version = "19.2.3", Wl;
}
var Om;
function Rv() {
  if (Om) return Mf.exports;
  Om = 1;
  function l3() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l3);
    } catch (i) {
      console.error(i);
    }
  }
  return l3(), Mf.exports = Cv(), Mf.exports;
}
var Uv = Rv();
function qv(l3) {
  const i = b0(l3, te.__wbindgen_malloc, te.__wbindgen_realloc), c = ku, f = te.parse_to_tree(i, c);
  if (f[2]) throw wm(f[1]);
  return wm(f[0]);
}
function Hv() {
  return { __proto__: null, "./toki_pona_wasm_bg.js": { __proto__: null, __wbg___wbindgen_throw_be289d5034ed271b: function(i, c) {
    throw new Error(Df(i, c));
  }, __wbg_error_7534b8e9a36f1ab4: function(i, c) {
    let f, o;
    try {
      f = i, o = c, console.error(Df(i, c));
    } finally {
      te.__wbindgen_free(f, o, 1);
    }
  }, __wbg_new_361308b2356cecd0: function() {
    return new Object();
  }, __wbg_new_3eb36ae241fe6f44: function() {
    return new Array();
  }, __wbg_new_8a6f238a6ece86ea: function() {
    return new Error();
  }, __wbg_set_3fda3bac07393de4: function(i, c, f) {
    i[c] = f;
  }, __wbg_set_f43e577aea94465b: function(i, c, f) {
    i[c >>> 0] = f;
  }, __wbg_stack_0ed75d68575b0f3c: function(i, c) {
    const f = c.stack, o = b0(f, te.__wbindgen_malloc, te.__wbindgen_realloc), h = ku;
    Nm().setInt32(i + 4, h, true), Nm().setInt32(i + 0, o, true);
  }, __wbindgen_cast_0000000000000001: function(i, c) {
    return Df(i, c);
  }, __wbindgen_init_externref_table: function() {
    const i = te.__wbindgen_externrefs, c = i.grow(4);
    i.set(0, void 0), i.set(c + 0, void 0), i.set(c + 1, null), i.set(c + 2, true), i.set(c + 3, false);
  } } };
}
let ca = null;
function Nm() {
  return (ca === null || ca.buffer.detached === true || ca.buffer.detached === void 0 && ca.buffer !== te.memory.buffer) && (ca = new DataView(te.memory.buffer)), ca;
}
function Df(l3, i) {
  return l3 = l3 >>> 0, jv(l3, i);
}
let Pl = null;
function Lu() {
  return (Pl === null || Pl.byteLength === 0) && (Pl = new Uint8Array(te.memory.buffer)), Pl;
}
function b0(l3, i, c) {
  if (c === void 0) {
    const y = ni.encode(l3), v = i(y.length, 1) >>> 0;
    return Lu().subarray(v, v + y.length).set(y), ku = y.length, v;
  }
  let f = l3.length, o = i(f, 1) >>> 0;
  const h = Lu();
  let d = 0;
  for (; d < f; d++) {
    const y = l3.charCodeAt(d);
    if (y > 127) break;
    h[o + d] = y;
  }
  if (d !== f) {
    d !== 0 && (l3 = l3.slice(d)), o = c(o, f, f = d + l3.length * 3, 1) >>> 0;
    const y = Lu().subarray(o + d, o + f), v = ni.encodeInto(l3, y);
    d += v.written, o = c(o, f, d, 1) >>> 0;
  }
  return ku = d, o;
}
function wm(l3) {
  const i = te.__wbindgen_externrefs.get(l3);
  return te.__externref_table_dealloc(l3), i;
}
let Xu = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
Xu.decode();
const Bv = 2146435072;
let Cf = 0;
function jv(l3, i) {
  return Cf += i, Cf >= Bv && (Xu = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }), Xu.decode(), Cf = i), Xu.decode(Lu().subarray(l3, l3 + i));
}
const ni = new TextEncoder();
"encodeInto" in ni || (ni.encodeInto = function(l3, i) {
  const c = ni.encode(l3);
  return i.set(c), { read: l3.length, written: c.length };
});
let ku = 0, te;
function Yv(l3, i) {
  return te = l3.exports, ca = null, Pl = null, te.__wbindgen_start(), te;
}
async function Gv(l3, i) {
  if (typeof Response == "function" && l3 instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function") try {
      return await WebAssembly.instantiateStreaming(l3, i);
    } catch (o) {
      if (l3.ok && c(l3.type) && l3.headers.get("Content-Type") !== "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", o);
      else throw o;
    }
    const f = await l3.arrayBuffer();
    return await WebAssembly.instantiate(f, i);
  } else {
    const f = await WebAssembly.instantiate(l3, i);
    return f instanceof WebAssembly.Instance ? { instance: f, module: l3 } : f;
  }
  function c(f) {
    switch (f) {
      case "basic":
      case "cors":
      case "default":
        return true;
    }
    return false;
  }
}
async function Lv(l3) {
  if (te !== void 0) return te;
  l3 !== void 0 && (Object.getPrototypeOf(l3) === Object.prototype ? { module_or_path: l3 } = l3 : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), l3 === void 0 && (l3 = new URL("" + new URL("toki_pona_wasm_bg-CMdIp0yF.wasm", import.meta.url).href, import.meta.url));
  const i = Hv();
  (typeof l3 == "string" || typeof Request == "function" && l3 instanceof Request || typeof URL == "function" && l3 instanceof URL) && (l3 = fetch(l3));
  const { instance: c, module: f } = await Gv(await l3, i);
  return Yv(c);
}
function Xv(l3) {
  var i = 0, c = l3.children, f = c && c.length;
  if (!f) i = 1;
  else for (; --f >= 0; ) i += c[f].value;
  l3.value = i;
}
function Qv() {
  return this.eachAfter(Xv);
}
function Vv(l3) {
  var i = this, c, f = [i], o, h, d;
  do
    for (c = f.reverse(), f = []; i = c.pop(); ) if (l3(i), o = i.children, o) for (h = 0, d = o.length; h < d; ++h) f.push(o[h]);
  while (f.length);
  return this;
}
function Zv(l3) {
  for (var i = this, c = [i], f, o; i = c.pop(); ) if (l3(i), f = i.children, f) for (o = f.length - 1; o >= 0; --o) c.push(f[o]);
  return this;
}
function Kv(l3) {
  for (var i = this, c = [i], f = [], o, h, d; i = c.pop(); ) if (f.push(i), o = i.children, o) for (h = 0, d = o.length; h < d; ++h) c.push(o[h]);
  for (; i = f.pop(); ) l3(i);
  return this;
}
function Jv(l3) {
  return this.eachAfter(function(i) {
    for (var c = +l3(i.data) || 0, f = i.children, o = f && f.length; --o >= 0; ) c += f[o].value;
    i.value = c;
  });
}
function kv(l3) {
  return this.eachBefore(function(i) {
    i.children && i.children.sort(l3);
  });
}
function Wv(l3) {
  for (var i = this, c = $v(i, l3), f = [i]; i !== c; ) i = i.parent, f.push(i);
  for (var o = f.length; l3 !== c; ) f.splice(o, 0, l3), l3 = l3.parent;
  return f;
}
function $v(l3, i) {
  if (l3 === i) return l3;
  var c = l3.ancestors(), f = i.ancestors(), o = null;
  for (l3 = c.pop(), i = f.pop(); l3 === i; ) o = l3, l3 = c.pop(), i = f.pop();
  return o;
}
function Fv() {
  for (var l3 = this, i = [l3]; l3 = l3.parent; ) i.push(l3);
  return i;
}
function Iv() {
  var l3 = [];
  return this.each(function(i) {
    l3.push(i);
  }), l3;
}
function Pv() {
  var l3 = [];
  return this.eachBefore(function(i) {
    i.children || l3.push(i);
  }), l3;
}
function tg() {
  var l3 = this, i = [];
  return l3.each(function(c) {
    c !== l3 && i.push({ source: c.parent, target: c });
  }), i;
}
function co(l3, i) {
  var c = new li(l3), f = +l3.value && (c.value = l3.value), o, h = [c], d, y, v, p;
  for (i == null && (i = ng); o = h.pop(); ) if (f && (o.value = +o.data.value), (y = i(o.data)) && (p = y.length)) for (o.children = new Array(p), v = p - 1; v >= 0; --v) h.push(d = o.children[v] = new li(y[v])), d.parent = o, d.depth = o.depth + 1;
  return c.eachBefore(lg);
}
function eg() {
  return co(this).eachBefore(ag);
}
function ng(l3) {
  return l3.children;
}
function ag(l3) {
  l3.data = l3.data.data;
}
function lg(l3) {
  var i = 0;
  do
    l3.height = i;
  while ((l3 = l3.parent) && l3.height < ++i);
}
function li(l3) {
  this.data = l3, this.depth = this.height = 0, this.parent = null;
}
li.prototype = co.prototype = { constructor: li, count: Qv, each: Vv, eachAfter: Kv, eachBefore: Zv, sum: Jv, sort: kv, path: Wv, ancestors: Fv, descendants: Iv, leaves: Pv, links: tg, copy: eg };
function ig(l3, i) {
  return l3.parent === i.parent ? 1 : 2;
}
function Rf(l3) {
  var i = l3.children;
  return i ? i[0] : l3.t;
}
function Uf(l3) {
  var i = l3.children;
  return i ? i[i.length - 1] : l3.t;
}
function ug(l3, i, c) {
  var f = c / (i.i - l3.i);
  i.c -= f, i.s += c, l3.c += f, i.z += c, i.m += c;
}
function rg(l3) {
  for (var i = 0, c = 0, f = l3.children, o = f.length, h; --o >= 0; ) h = f[o], h.z += i, h.m += i, i += h.s + (c += h.c);
}
function cg(l3, i, c) {
  return l3.a.parent === i.parent ? l3.a : c;
}
function Qu(l3, i) {
  this._ = l3, this.parent = null, this.children = null, this.A = null, this.a = this, this.z = 0, this.m = 0, this.c = 0, this.s = 0, this.t = null, this.i = i;
}
Qu.prototype = Object.create(li.prototype);
function fg(l3) {
  for (var i = new Qu(l3, 0), c, f = [i], o, h, d, y; c = f.pop(); ) if (h = c._.children) for (c.children = new Array(y = h.length), d = y - 1; d >= 0; --d) f.push(o = c.children[d] = new Qu(h[d], d)), o.parent = c;
  return (i.parent = new Qu(null, 0)).children = [i], i;
}
function og() {
  var l3 = ig, i = 1, c = 1, f = null;
  function o(p) {
    var S = fg(p);
    if (S.eachAfter(h), S.parent.m = -S.z, S.eachBefore(d), f) p.eachBefore(v);
    else {
      var E = p, z = p, w = p;
      p.eachBefore(function(X) {
        X.x < E.x && (E = X), X.x > z.x && (z = X), X.depth > w.depth && (w = X);
      });
      var j = E === z ? 1 : l3(E, z) / 2, W = j - E.x, lt = i / (z.x + j + W), Z = c / (w.depth || 1);
      p.eachBefore(function(X) {
        X.x = (X.x + W) * lt, X.y = X.depth * Z;
      });
    }
    return p;
  }
  function h(p) {
    var S = p.children, E = p.parent.children, z = p.i ? E[p.i - 1] : null;
    if (S) {
      rg(p);
      var w = (S[0].z + S[S.length - 1].z) / 2;
      z ? (p.z = z.z + l3(p._, z._), p.m = p.z - w) : p.z = w;
    } else z && (p.z = z.z + l3(p._, z._));
    p.parent.A = y(p, z, p.parent.A || E[0]);
  }
  function d(p) {
    p._.x = p.z + p.parent.m, p.m += p.parent.m;
  }
  function y(p, S, E) {
    if (S) {
      for (var z = p, w = p, j = S, W = z.parent.children[0], lt = z.m, Z = w.m, X = j.m, G = W.m, $; j = Uf(j), z = Rf(z), j && z; ) W = Rf(W), w = Uf(w), w.a = p, $ = j.z + X - z.z - lt + l3(j._, z._), $ > 0 && (ug(cg(j, p, E), p, $), lt += $, Z += $), X += j.m, lt += z.m, G += W.m, Z += w.m;
      j && !Uf(w) && (w.t = j, w.m += X - Z), z && !Rf(W) && (W.t = z, W.m += lt - G, E = p);
    }
    return E;
  }
  function v(p) {
    p.x *= i, p.y = p.depth * c;
  }
  return o.separation = function(p) {
    return arguments.length ? (l3 = p, o) : l3;
  }, o.size = function(p) {
    return arguments.length ? (f = false, i = +p[0], c = +p[1], o) : f ? null : [i, c];
  }, o.nodeSize = function(p) {
    return arguments.length ? (f = true, i = +p[0], c = +p[1], o) : f ? [i, c] : null;
  }, o;
}
var $f = "http://www.w3.org/1999/xhtml";
const Dm = { svg: "http://www.w3.org/2000/svg", xhtml: $f, xlink: "http://www.w3.org/1999/xlink", xml: "http://www.w3.org/XML/1998/namespace", xmlns: "http://www.w3.org/2000/xmlns/" };
function nr(l3) {
  var i = l3 += "", c = i.indexOf(":");
  return c >= 0 && (i = l3.slice(0, c)) !== "xmlns" && (l3 = l3.slice(c + 1)), Dm.hasOwnProperty(i) ? { space: Dm[i], local: l3 } : l3;
}
function sg(l3) {
  return function() {
    var i = this.ownerDocument, c = this.namespaceURI;
    return c === $f && i.documentElement.namespaceURI === $f ? i.createElement(l3) : i.createElementNS(c, l3);
  };
}
function hg(l3) {
  return function() {
    return this.ownerDocument.createElementNS(l3.space, l3.local);
  };
}
function S0(l3) {
  var i = nr(l3);
  return (i.local ? hg : sg)(i);
}
function dg() {
}
function fo(l3) {
  return l3 == null ? dg : function() {
    return this.querySelector(l3);
  };
}
function mg(l3) {
  typeof l3 != "function" && (l3 = fo(l3));
  for (var i = this._groups, c = i.length, f = new Array(c), o = 0; o < c; ++o) for (var h = i[o], d = h.length, y = f[o] = new Array(d), v, p, S = 0; S < d; ++S) (v = h[S]) && (p = l3.call(v, v.__data__, S, h)) && ("__data__" in v && (p.__data__ = v.__data__), y[S] = p);
  return new ze(f, this._parents);
}
function pg(l3) {
  return l3 == null ? [] : Array.isArray(l3) ? l3 : Array.from(l3);
}
function yg() {
  return [];
}
function T0(l3) {
  return l3 == null ? yg : function() {
    return this.querySelectorAll(l3);
  };
}
function vg(l3) {
  return function() {
    return pg(l3.apply(this, arguments));
  };
}
function gg(l3) {
  typeof l3 == "function" ? l3 = vg(l3) : l3 = T0(l3);
  for (var i = this._groups, c = i.length, f = [], o = [], h = 0; h < c; ++h) for (var d = i[h], y = d.length, v, p = 0; p < y; ++p) (v = d[p]) && (f.push(l3.call(v, v.__data__, p, d)), o.push(v));
  return new ze(f, o);
}
function E0(l3) {
  return function() {
    return this.matches(l3);
  };
}
function z0(l3) {
  return function(i) {
    return i.matches(l3);
  };
}
var _g = Array.prototype.find;
function bg(l3) {
  return function() {
    return _g.call(this.children, l3);
  };
}
function Sg() {
  return this.firstElementChild;
}
function Tg(l3) {
  return this.select(l3 == null ? Sg : bg(typeof l3 == "function" ? l3 : z0(l3)));
}
var Eg = Array.prototype.filter;
function zg() {
  return Array.from(this.children);
}
function Ag(l3) {
  return function() {
    return Eg.call(this.children, l3);
  };
}
function xg(l3) {
  return this.selectAll(l3 == null ? zg : Ag(typeof l3 == "function" ? l3 : z0(l3)));
}
function Mg(l3) {
  typeof l3 != "function" && (l3 = E0(l3));
  for (var i = this._groups, c = i.length, f = new Array(c), o = 0; o < c; ++o) for (var h = i[o], d = h.length, y = f[o] = [], v, p = 0; p < d; ++p) (v = h[p]) && l3.call(v, v.__data__, p, h) && y.push(v);
  return new ze(f, this._parents);
}
function A0(l3) {
  return new Array(l3.length);
}
function Og() {
  return new ze(this._enter || this._groups.map(A0), this._parents);
}
function Wu(l3, i) {
  this.ownerDocument = l3.ownerDocument, this.namespaceURI = l3.namespaceURI, this._next = null, this._parent = l3, this.__data__ = i;
}
Wu.prototype = { constructor: Wu, appendChild: function(l3) {
  return this._parent.insertBefore(l3, this._next);
}, insertBefore: function(l3, i) {
  return this._parent.insertBefore(l3, i);
}, querySelector: function(l3) {
  return this._parent.querySelector(l3);
}, querySelectorAll: function(l3) {
  return this._parent.querySelectorAll(l3);
} };
function Ng(l3) {
  return function() {
    return l3;
  };
}
function wg(l3, i, c, f, o, h) {
  for (var d = 0, y, v = i.length, p = h.length; d < p; ++d) (y = i[d]) ? (y.__data__ = h[d], f[d] = y) : c[d] = new Wu(l3, h[d]);
  for (; d < v; ++d) (y = i[d]) && (o[d] = y);
}
function Dg(l3, i, c, f, o, h, d) {
  var y, v, p = /* @__PURE__ */ new Map(), S = i.length, E = h.length, z = new Array(S), w;
  for (y = 0; y < S; ++y) (v = i[y]) && (z[y] = w = d.call(v, v.__data__, y, i) + "", p.has(w) ? o[y] = v : p.set(w, v));
  for (y = 0; y < E; ++y) w = d.call(l3, h[y], y, h) + "", (v = p.get(w)) ? (f[y] = v, v.__data__ = h[y], p.delete(w)) : c[y] = new Wu(l3, h[y]);
  for (y = 0; y < S; ++y) (v = i[y]) && p.get(z[y]) === v && (o[y] = v);
}
function Cg(l3) {
  return l3.__data__;
}
function Rg(l3, i) {
  if (!arguments.length) return Array.from(this, Cg);
  var c = i ? Dg : wg, f = this._parents, o = this._groups;
  typeof l3 != "function" && (l3 = Ng(l3));
  for (var h = o.length, d = new Array(h), y = new Array(h), v = new Array(h), p = 0; p < h; ++p) {
    var S = f[p], E = o[p], z = E.length, w = Ug(l3.call(S, S && S.__data__, p, f)), j = w.length, W = y[p] = new Array(j), lt = d[p] = new Array(j), Z = v[p] = new Array(z);
    c(S, E, W, lt, Z, w, i);
    for (var X = 0, G = 0, $, L; X < j; ++X) if ($ = W[X]) {
      for (X >= G && (G = X + 1); !(L = lt[G]) && ++G < j; ) ;
      $._next = L || null;
    }
  }
  return d = new ze(d, f), d._enter = y, d._exit = v, d;
}
function Ug(l3) {
  return typeof l3 == "object" && "length" in l3 ? l3 : Array.from(l3);
}
function qg() {
  return new ze(this._exit || this._groups.map(A0), this._parents);
}
function Hg(l3, i, c) {
  var f = this.enter(), o = this, h = this.exit();
  return typeof l3 == "function" ? (f = l3(f), f && (f = f.selection())) : f = f.append(l3 + ""), i != null && (o = i(o), o && (o = o.selection())), c == null ? h.remove() : c(h), f && o ? f.merge(o).order() : o;
}
function Bg(l3) {
  for (var i = l3.selection ? l3.selection() : l3, c = this._groups, f = i._groups, o = c.length, h = f.length, d = Math.min(o, h), y = new Array(o), v = 0; v < d; ++v) for (var p = c[v], S = f[v], E = p.length, z = y[v] = new Array(E), w, j = 0; j < E; ++j) (w = p[j] || S[j]) && (z[j] = w);
  for (; v < o; ++v) y[v] = c[v];
  return new ze(y, this._parents);
}
function jg() {
  for (var l3 = this._groups, i = -1, c = l3.length; ++i < c; ) for (var f = l3[i], o = f.length - 1, h = f[o], d; --o >= 0; ) (d = f[o]) && (h && d.compareDocumentPosition(h) ^ 4 && h.parentNode.insertBefore(d, h), h = d);
  return this;
}
function Yg(l3) {
  l3 || (l3 = Gg);
  function i(E, z) {
    return E && z ? l3(E.__data__, z.__data__) : !E - !z;
  }
  for (var c = this._groups, f = c.length, o = new Array(f), h = 0; h < f; ++h) {
    for (var d = c[h], y = d.length, v = o[h] = new Array(y), p, S = 0; S < y; ++S) (p = d[S]) && (v[S] = p);
    v.sort(i);
  }
  return new ze(o, this._parents).order();
}
function Gg(l3, i) {
  return l3 < i ? -1 : l3 > i ? 1 : l3 >= i ? 0 : NaN;
}
function Lg() {
  var l3 = arguments[0];
  return arguments[0] = this, l3.apply(null, arguments), this;
}
function Xg() {
  return Array.from(this);
}
function Qg() {
  for (var l3 = this._groups, i = 0, c = l3.length; i < c; ++i) for (var f = l3[i], o = 0, h = f.length; o < h; ++o) {
    var d = f[o];
    if (d) return d;
  }
  return null;
}
function Vg() {
  let l3 = 0;
  for (const i of this) ++l3;
  return l3;
}
function Zg() {
  return !this.node();
}
function Kg(l3) {
  for (var i = this._groups, c = 0, f = i.length; c < f; ++c) for (var o = i[c], h = 0, d = o.length, y; h < d; ++h) (y = o[h]) && l3.call(y, y.__data__, h, o);
  return this;
}
function Jg(l3) {
  return function() {
    this.removeAttribute(l3);
  };
}
function kg(l3) {
  return function() {
    this.removeAttributeNS(l3.space, l3.local);
  };
}
function Wg(l3, i) {
  return function() {
    this.setAttribute(l3, i);
  };
}
function $g(l3, i) {
  return function() {
    this.setAttributeNS(l3.space, l3.local, i);
  };
}
function Fg(l3, i) {
  return function() {
    var c = i.apply(this, arguments);
    c == null ? this.removeAttribute(l3) : this.setAttribute(l3, c);
  };
}
function Ig(l3, i) {
  return function() {
    var c = i.apply(this, arguments);
    c == null ? this.removeAttributeNS(l3.space, l3.local) : this.setAttributeNS(l3.space, l3.local, c);
  };
}
function Pg(l3, i) {
  var c = nr(l3);
  if (arguments.length < 2) {
    var f = this.node();
    return c.local ? f.getAttributeNS(c.space, c.local) : f.getAttribute(c);
  }
  return this.each((i == null ? c.local ? kg : Jg : typeof i == "function" ? c.local ? Ig : Fg : c.local ? $g : Wg)(c, i));
}
function x0(l3) {
  return l3.ownerDocument && l3.ownerDocument.defaultView || l3.document && l3 || l3.defaultView;
}
function t1(l3) {
  return function() {
    this.style.removeProperty(l3);
  };
}
function e1(l3, i, c) {
  return function() {
    this.style.setProperty(l3, i, c);
  };
}
function n1(l3, i, c) {
  return function() {
    var f = i.apply(this, arguments);
    f == null ? this.style.removeProperty(l3) : this.style.setProperty(l3, f, c);
  };
}
function a1(l3, i, c) {
  return arguments.length > 1 ? this.each((i == null ? t1 : typeof i == "function" ? n1 : e1)(l3, i, c ?? "")) : Pa(this.node(), l3);
}
function Pa(l3, i) {
  return l3.style.getPropertyValue(i) || x0(l3).getComputedStyle(l3, null).getPropertyValue(i);
}
function l1(l3) {
  return function() {
    delete this[l3];
  };
}
function i1(l3, i) {
  return function() {
    this[l3] = i;
  };
}
function u1(l3, i) {
  return function() {
    var c = i.apply(this, arguments);
    c == null ? delete this[l3] : this[l3] = c;
  };
}
function r1(l3, i) {
  return arguments.length > 1 ? this.each((i == null ? l1 : typeof i == "function" ? u1 : i1)(l3, i)) : this.node()[l3];
}
function M0(l3) {
  return l3.trim().split(/^|\s+/);
}
function oo(l3) {
  return l3.classList || new O0(l3);
}
function O0(l3) {
  this._node = l3, this._names = M0(l3.getAttribute("class") || "");
}
O0.prototype = { add: function(l3) {
  var i = this._names.indexOf(l3);
  i < 0 && (this._names.push(l3), this._node.setAttribute("class", this._names.join(" ")));
}, remove: function(l3) {
  var i = this._names.indexOf(l3);
  i >= 0 && (this._names.splice(i, 1), this._node.setAttribute("class", this._names.join(" ")));
}, contains: function(l3) {
  return this._names.indexOf(l3) >= 0;
} };
function N0(l3, i) {
  for (var c = oo(l3), f = -1, o = i.length; ++f < o; ) c.add(i[f]);
}
function w0(l3, i) {
  for (var c = oo(l3), f = -1, o = i.length; ++f < o; ) c.remove(i[f]);
}
function c1(l3) {
  return function() {
    N0(this, l3);
  };
}
function f1(l3) {
  return function() {
    w0(this, l3);
  };
}
function o1(l3, i) {
  return function() {
    (i.apply(this, arguments) ? N0 : w0)(this, l3);
  };
}
function s1(l3, i) {
  var c = M0(l3 + "");
  if (arguments.length < 2) {
    for (var f = oo(this.node()), o = -1, h = c.length; ++o < h; ) if (!f.contains(c[o])) return false;
    return true;
  }
  return this.each((typeof i == "function" ? o1 : i ? c1 : f1)(c, i));
}
function h1() {
  this.textContent = "";
}
function d1(l3) {
  return function() {
    this.textContent = l3;
  };
}
function m1(l3) {
  return function() {
    var i = l3.apply(this, arguments);
    this.textContent = i ?? "";
  };
}
function p1(l3) {
  return arguments.length ? this.each(l3 == null ? h1 : (typeof l3 == "function" ? m1 : d1)(l3)) : this.node().textContent;
}
function y1() {
  this.innerHTML = "";
}
function v1(l3) {
  return function() {
    this.innerHTML = l3;
  };
}
function g1(l3) {
  return function() {
    var i = l3.apply(this, arguments);
    this.innerHTML = i ?? "";
  };
}
function _1(l3) {
  return arguments.length ? this.each(l3 == null ? y1 : (typeof l3 == "function" ? g1 : v1)(l3)) : this.node().innerHTML;
}
function b1() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function S1() {
  return this.each(b1);
}
function T1() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function E1() {
  return this.each(T1);
}
function z1(l3) {
  var i = typeof l3 == "function" ? l3 : S0(l3);
  return this.select(function() {
    return this.appendChild(i.apply(this, arguments));
  });
}
function A1() {
  return null;
}
function x1(l3, i) {
  var c = typeof l3 == "function" ? l3 : S0(l3), f = i == null ? A1 : typeof i == "function" ? i : fo(i);
  return this.select(function() {
    return this.insertBefore(c.apply(this, arguments), f.apply(this, arguments) || null);
  });
}
function M1() {
  var l3 = this.parentNode;
  l3 && l3.removeChild(this);
}
function O1() {
  return this.each(M1);
}
function N1() {
  var l3 = this.cloneNode(false), i = this.parentNode;
  return i ? i.insertBefore(l3, this.nextSibling) : l3;
}
function w1() {
  var l3 = this.cloneNode(true), i = this.parentNode;
  return i ? i.insertBefore(l3, this.nextSibling) : l3;
}
function D1(l3) {
  return this.select(l3 ? w1 : N1);
}
function C1(l3) {
  return arguments.length ? this.property("__data__", l3) : this.node().__data__;
}
function R1(l3) {
  return function(i) {
    l3.call(this, i, this.__data__);
  };
}
function U1(l3) {
  return l3.trim().split(/^|\s+/).map(function(i) {
    var c = "", f = i.indexOf(".");
    return f >= 0 && (c = i.slice(f + 1), i = i.slice(0, f)), { type: i, name: c };
  });
}
function q1(l3) {
  return function() {
    var i = this.__on;
    if (i) {
      for (var c = 0, f = -1, o = i.length, h; c < o; ++c) h = i[c], (!l3.type || h.type === l3.type) && h.name === l3.name ? this.removeEventListener(h.type, h.listener, h.options) : i[++f] = h;
      ++f ? i.length = f : delete this.__on;
    }
  };
}
function H1(l3, i, c) {
  return function() {
    var f = this.__on, o, h = R1(i);
    if (f) {
      for (var d = 0, y = f.length; d < y; ++d) if ((o = f[d]).type === l3.type && o.name === l3.name) {
        this.removeEventListener(o.type, o.listener, o.options), this.addEventListener(o.type, o.listener = h, o.options = c), o.value = i;
        return;
      }
    }
    this.addEventListener(l3.type, h, c), o = { type: l3.type, name: l3.name, value: i, listener: h, options: c }, f ? f.push(o) : this.__on = [o];
  };
}
function B1(l3, i, c) {
  var f = U1(l3 + ""), o, h = f.length, d;
  if (arguments.length < 2) {
    var y = this.node().__on;
    if (y) {
      for (var v = 0, p = y.length, S; v < p; ++v) for (o = 0, S = y[v]; o < h; ++o) if ((d = f[o]).type === S.type && d.name === S.name) return S.value;
    }
    return;
  }
  for (y = i ? H1 : q1, o = 0; o < h; ++o) this.each(y(f[o], i, c));
  return this;
}
function D0(l3, i, c) {
  var f = x0(l3), o = f.CustomEvent;
  typeof o == "function" ? o = new o(i, c) : (o = f.document.createEvent("Event"), c ? (o.initEvent(i, c.bubbles, c.cancelable), o.detail = c.detail) : o.initEvent(i, false, false)), l3.dispatchEvent(o);
}
function j1(l3, i) {
  return function() {
    return D0(this, l3, i);
  };
}
function Y1(l3, i) {
  return function() {
    return D0(this, l3, i.apply(this, arguments));
  };
}
function G1(l3, i) {
  return this.each((typeof i == "function" ? Y1 : j1)(l3, i));
}
function* L1() {
  for (var l3 = this._groups, i = 0, c = l3.length; i < c; ++i) for (var f = l3[i], o = 0, h = f.length, d; o < h; ++o) (d = f[o]) && (yield d);
}
var C0 = [null];
function ze(l3, i) {
  this._groups = l3, this._parents = i;
}
function fi() {
  return new ze([[document.documentElement]], C0);
}
function X1() {
  return this;
}
ze.prototype = fi.prototype = { constructor: ze, select: mg, selectAll: gg, selectChild: Tg, selectChildren: xg, filter: Mg, data: Rg, enter: Og, exit: qg, join: Hg, merge: Bg, selection: X1, order: jg, sort: Yg, call: Lg, nodes: Xg, node: Qg, size: Vg, empty: Zg, each: Kg, attr: Pg, style: a1, property: r1, classed: s1, text: p1, html: _1, raise: S1, lower: E1, append: z1, insert: x1, remove: O1, clone: D1, datum: C1, on: B1, dispatch: G1, [Symbol.iterator]: L1 };
function le(l3) {
  return typeof l3 == "string" ? new ze([[document.querySelector(l3)]], [document.documentElement]) : new ze([[l3]], C0);
}
function Q1(l3) {
  let i;
  for (; i = l3.sourceEvent; ) l3 = i;
  return l3;
}
function ra(l3, i) {
  if (l3 = Q1(l3), i === void 0 && (i = l3.currentTarget), i) {
    var c = i.ownerSVGElement || i;
    if (c.createSVGPoint) {
      var f = c.createSVGPoint();
      return f.x = l3.clientX, f.y = l3.clientY, f = f.matrixTransform(i.getScreenCTM().inverse()), [f.x, f.y];
    }
    if (i.getBoundingClientRect) {
      var o = i.getBoundingClientRect();
      return [l3.clientX - o.left - i.clientLeft, l3.clientY - o.top - i.clientTop];
    }
  }
  return [l3.pageX, l3.pageY];
}
var V1 = { value: () => {
} };
function so() {
  for (var l3 = 0, i = arguments.length, c = {}, f; l3 < i; ++l3) {
    if (!(f = arguments[l3] + "") || f in c || /[\s.]/.test(f)) throw new Error("illegal type: " + f);
    c[f] = [];
  }
  return new Vu(c);
}
function Vu(l3) {
  this._ = l3;
}
function Z1(l3, i) {
  return l3.trim().split(/^|\s+/).map(function(c) {
    var f = "", o = c.indexOf(".");
    if (o >= 0 && (f = c.slice(o + 1), c = c.slice(0, o)), c && !i.hasOwnProperty(c)) throw new Error("unknown type: " + c);
    return { type: c, name: f };
  });
}
Vu.prototype = so.prototype = { constructor: Vu, on: function(l3, i) {
  var c = this._, f = Z1(l3 + "", c), o, h = -1, d = f.length;
  if (arguments.length < 2) {
    for (; ++h < d; ) if ((o = (l3 = f[h]).type) && (o = K1(c[o], l3.name))) return o;
    return;
  }
  if (i != null && typeof i != "function") throw new Error("invalid callback: " + i);
  for (; ++h < d; ) if (o = (l3 = f[h]).type) c[o] = Cm(c[o], l3.name, i);
  else if (i == null) for (o in c) c[o] = Cm(c[o], l3.name, null);
  return this;
}, copy: function() {
  var l3 = {}, i = this._;
  for (var c in i) l3[c] = i[c].slice();
  return new Vu(l3);
}, call: function(l3, i) {
  if ((o = arguments.length - 2) > 0) for (var c = new Array(o), f = 0, o, h; f < o; ++f) c[f] = arguments[f + 2];
  if (!this._.hasOwnProperty(l3)) throw new Error("unknown type: " + l3);
  for (h = this._[l3], f = 0, o = h.length; f < o; ++f) h[f].value.apply(i, c);
}, apply: function(l3, i, c) {
  if (!this._.hasOwnProperty(l3)) throw new Error("unknown type: " + l3);
  for (var f = this._[l3], o = 0, h = f.length; o < h; ++o) f[o].value.apply(i, c);
} };
function K1(l3, i) {
  for (var c = 0, f = l3.length, o; c < f; ++c) if ((o = l3[c]).name === i) return o.value;
}
function Cm(l3, i, c) {
  for (var f = 0, o = l3.length; f < o; ++f) if (l3[f].name === i) {
    l3[f] = V1, l3 = l3.slice(0, f).concat(l3.slice(f + 1));
    break;
  }
  return c != null && l3.push({ name: i, value: c }), l3;
}
const Ff = { capture: true, passive: false };
function If(l3) {
  l3.preventDefault(), l3.stopImmediatePropagation();
}
function J1(l3) {
  var i = l3.document.documentElement, c = le(l3).on("dragstart.drag", If, Ff);
  "onselectstart" in i ? c.on("selectstart.drag", If, Ff) : (i.__noselect = i.style.MozUserSelect, i.style.MozUserSelect = "none");
}
function k1(l3, i) {
  var c = l3.document.documentElement, f = le(l3).on("dragstart.drag", null);
  i && (f.on("click.drag", If, Ff), setTimeout(function() {
    f.on("click.drag", null);
  }, 0)), "onselectstart" in c ? f.on("selectstart.drag", null) : (c.style.MozUserSelect = c.__noselect, delete c.__noselect);
}
function ho(l3, i, c) {
  l3.prototype = i.prototype = c, c.constructor = l3;
}
function R0(l3, i) {
  var c = Object.create(l3.prototype);
  for (var f in i) c[f] = i[f];
  return c;
}
function oi() {
}
var ii = 0.7, $u = 1 / ii, Ia = "\\s*([+-]?\\d+)\\s*", ui = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Ze = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", W1 = /^#([0-9a-f]{3,8})$/, $1 = new RegExp(`^rgb\\(${Ia},${Ia},${Ia}\\)$`), F1 = new RegExp(`^rgb\\(${Ze},${Ze},${Ze}\\)$`), I1 = new RegExp(`^rgba\\(${Ia},${Ia},${Ia},${ui}\\)$`), P1 = new RegExp(`^rgba\\(${Ze},${Ze},${Ze},${ui}\\)$`), t_ = new RegExp(`^hsl\\(${ui},${Ze},${Ze}\\)$`), e_ = new RegExp(`^hsla\\(${ui},${Ze},${Ze},${ui}\\)$`), Rm = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 };
ho(oi, ri, { copy(l3) {
  return Object.assign(new this.constructor(), this, l3);
}, displayable() {
  return this.rgb().displayable();
}, hex: Um, formatHex: Um, formatHex8: n_, formatHsl: a_, formatRgb: qm, toString: qm });
function Um() {
  return this.rgb().formatHex();
}
function n_() {
  return this.rgb().formatHex8();
}
function a_() {
  return U0(this).formatHsl();
}
function qm() {
  return this.rgb().formatRgb();
}
function ri(l3) {
  var i, c;
  return l3 = (l3 + "").trim().toLowerCase(), (i = W1.exec(l3)) ? (c = i[1].length, i = parseInt(i[1], 16), c === 6 ? Hm(i) : c === 3 ? new he(i >> 8 & 15 | i >> 4 & 240, i >> 4 & 15 | i & 240, (i & 15) << 4 | i & 15, 1) : c === 8 ? Nu(i >> 24 & 255, i >> 16 & 255, i >> 8 & 255, (i & 255) / 255) : c === 4 ? Nu(i >> 12 & 15 | i >> 8 & 240, i >> 8 & 15 | i >> 4 & 240, i >> 4 & 15 | i & 240, ((i & 15) << 4 | i & 15) / 255) : null) : (i = $1.exec(l3)) ? new he(i[1], i[2], i[3], 1) : (i = F1.exec(l3)) ? new he(i[1] * 255 / 100, i[2] * 255 / 100, i[3] * 255 / 100, 1) : (i = I1.exec(l3)) ? Nu(i[1], i[2], i[3], i[4]) : (i = P1.exec(l3)) ? Nu(i[1] * 255 / 100, i[2] * 255 / 100, i[3] * 255 / 100, i[4]) : (i = t_.exec(l3)) ? Ym(i[1], i[2] / 100, i[3] / 100, 1) : (i = e_.exec(l3)) ? Ym(i[1], i[2] / 100, i[3] / 100, i[4]) : Rm.hasOwnProperty(l3) ? Hm(Rm[l3]) : l3 === "transparent" ? new he(NaN, NaN, NaN, 0) : null;
}
function Hm(l3) {
  return new he(l3 >> 16 & 255, l3 >> 8 & 255, l3 & 255, 1);
}
function Nu(l3, i, c, f) {
  return f <= 0 && (l3 = i = c = NaN), new he(l3, i, c, f);
}
function l_(l3) {
  return l3 instanceof oi || (l3 = ri(l3)), l3 ? (l3 = l3.rgb(), new he(l3.r, l3.g, l3.b, l3.opacity)) : new he();
}
function Pf(l3, i, c, f) {
  return arguments.length === 1 ? l_(l3) : new he(l3, i, c, f ?? 1);
}
function he(l3, i, c, f) {
  this.r = +l3, this.g = +i, this.b = +c, this.opacity = +f;
}
ho(he, Pf, R0(oi, { brighter(l3) {
  return l3 = l3 == null ? $u : Math.pow($u, l3), new he(this.r * l3, this.g * l3, this.b * l3, this.opacity);
}, darker(l3) {
  return l3 = l3 == null ? ii : Math.pow(ii, l3), new he(this.r * l3, this.g * l3, this.b * l3, this.opacity);
}, rgb() {
  return this;
}, clamp() {
  return new he(sa(this.r), sa(this.g), sa(this.b), Fu(this.opacity));
}, displayable() {
  return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
}, hex: Bm, formatHex: Bm, formatHex8: i_, formatRgb: jm, toString: jm }));
function Bm() {
  return `#${oa(this.r)}${oa(this.g)}${oa(this.b)}`;
}
function i_() {
  return `#${oa(this.r)}${oa(this.g)}${oa(this.b)}${oa((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function jm() {
  const l3 = Fu(this.opacity);
  return `${l3 === 1 ? "rgb(" : "rgba("}${sa(this.r)}, ${sa(this.g)}, ${sa(this.b)}${l3 === 1 ? ")" : `, ${l3})`}`;
}
function Fu(l3) {
  return isNaN(l3) ? 1 : Math.max(0, Math.min(1, l3));
}
function sa(l3) {
  return Math.max(0, Math.min(255, Math.round(l3) || 0));
}
function oa(l3) {
  return l3 = sa(l3), (l3 < 16 ? "0" : "") + l3.toString(16);
}
function Ym(l3, i, c, f) {
  return f <= 0 ? l3 = i = c = NaN : c <= 0 || c >= 1 ? l3 = i = NaN : i <= 0 && (l3 = NaN), new je(l3, i, c, f);
}
function U0(l3) {
  if (l3 instanceof je) return new je(l3.h, l3.s, l3.l, l3.opacity);
  if (l3 instanceof oi || (l3 = ri(l3)), !l3) return new je();
  if (l3 instanceof je) return l3;
  l3 = l3.rgb();
  var i = l3.r / 255, c = l3.g / 255, f = l3.b / 255, o = Math.min(i, c, f), h = Math.max(i, c, f), d = NaN, y = h - o, v = (h + o) / 2;
  return y ? (i === h ? d = (c - f) / y + (c < f) * 6 : c === h ? d = (f - i) / y + 2 : d = (i - c) / y + 4, y /= v < 0.5 ? h + o : 2 - h - o, d *= 60) : y = v > 0 && v < 1 ? 0 : d, new je(d, y, v, l3.opacity);
}
function u_(l3, i, c, f) {
  return arguments.length === 1 ? U0(l3) : new je(l3, i, c, f ?? 1);
}
function je(l3, i, c, f) {
  this.h = +l3, this.s = +i, this.l = +c, this.opacity = +f;
}
ho(je, u_, R0(oi, { brighter(l3) {
  return l3 = l3 == null ? $u : Math.pow($u, l3), new je(this.h, this.s, this.l * l3, this.opacity);
}, darker(l3) {
  return l3 = l3 == null ? ii : Math.pow(ii, l3), new je(this.h, this.s, this.l * l3, this.opacity);
}, rgb() {
  var l3 = this.h % 360 + (this.h < 0) * 360, i = isNaN(l3) || isNaN(this.s) ? 0 : this.s, c = this.l, f = c + (c < 0.5 ? c : 1 - c) * i, o = 2 * c - f;
  return new he(qf(l3 >= 240 ? l3 - 240 : l3 + 120, o, f), qf(l3, o, f), qf(l3 < 120 ? l3 + 240 : l3 - 120, o, f), this.opacity);
}, clamp() {
  return new je(Gm(this.h), wu(this.s), wu(this.l), Fu(this.opacity));
}, displayable() {
  return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
}, formatHsl() {
  const l3 = Fu(this.opacity);
  return `${l3 === 1 ? "hsl(" : "hsla("}${Gm(this.h)}, ${wu(this.s) * 100}%, ${wu(this.l) * 100}%${l3 === 1 ? ")" : `, ${l3})`}`;
} }));
function Gm(l3) {
  return l3 = (l3 || 0) % 360, l3 < 0 ? l3 + 360 : l3;
}
function wu(l3) {
  return Math.max(0, Math.min(1, l3 || 0));
}
function qf(l3, i, c) {
  return (l3 < 60 ? i + (c - i) * l3 / 60 : l3 < 180 ? c : l3 < 240 ? i + (c - i) * (240 - l3) / 60 : i) * 255;
}
const q0 = (l3) => () => l3;
function r_(l3, i) {
  return function(c) {
    return l3 + c * i;
  };
}
function c_(l3, i, c) {
  return l3 = Math.pow(l3, c), i = Math.pow(i, c) - l3, c = 1 / c, function(f) {
    return Math.pow(l3 + f * i, c);
  };
}
function f_(l3) {
  return (l3 = +l3) == 1 ? H0 : function(i, c) {
    return c - i ? c_(i, c, l3) : q0(isNaN(i) ? c : i);
  };
}
function H0(l3, i) {
  var c = i - l3;
  return c ? r_(l3, c) : q0(isNaN(l3) ? i : l3);
}
const Lm = (function l(i) {
  var c = f_(i);
  function f(o, h) {
    var d = c((o = Pf(o)).r, (h = Pf(h)).r), y = c(o.g, h.g), v = c(o.b, h.b), p = H0(o.opacity, h.opacity);
    return function(S) {
      return o.r = d(S), o.g = y(S), o.b = v(S), o.opacity = p(S), o + "";
    };
  }
  return f.gamma = l, f;
})(1);
function Gn(l3, i) {
  return l3 = +l3, i = +i, function(c) {
    return l3 * (1 - c) + i * c;
  };
}
var to = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Hf = new RegExp(to.source, "g");
function o_(l3) {
  return function() {
    return l3;
  };
}
function s_(l3) {
  return function(i) {
    return l3(i) + "";
  };
}
function h_(l3, i) {
  var c = to.lastIndex = Hf.lastIndex = 0, f, o, h, d = -1, y = [], v = [];
  for (l3 = l3 + "", i = i + ""; (f = to.exec(l3)) && (o = Hf.exec(i)); ) (h = o.index) > c && (h = i.slice(c, h), y[d] ? y[d] += h : y[++d] = h), (f = f[0]) === (o = o[0]) ? y[d] ? y[d] += o : y[++d] = o : (y[++d] = null, v.push({ i: d, x: Gn(f, o) })), c = Hf.lastIndex;
  return c < i.length && (h = i.slice(c), y[d] ? y[d] += h : y[++d] = h), y.length < 2 ? v[0] ? s_(v[0].x) : o_(i) : (i = v.length, function(p) {
    for (var S = 0, E; S < i; ++S) y[(E = v[S]).i] = E.x(p);
    return y.join("");
  });
}
var Xm = 180 / Math.PI, eo = { translateX: 0, translateY: 0, rotate: 0, skewX: 0, scaleX: 1, scaleY: 1 };
function B0(l3, i, c, f, o, h) {
  var d, y, v;
  return (d = Math.sqrt(l3 * l3 + i * i)) && (l3 /= d, i /= d), (v = l3 * c + i * f) && (c -= l3 * v, f -= i * v), (y = Math.sqrt(c * c + f * f)) && (c /= y, f /= y, v /= y), l3 * f < i * c && (l3 = -l3, i = -i, v = -v, d = -d), { translateX: o, translateY: h, rotate: Math.atan2(i, l3) * Xm, skewX: Math.atan(v) * Xm, scaleX: d, scaleY: y };
}
var Du;
function d_(l3) {
  const i = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(l3 + "");
  return i.isIdentity ? eo : B0(i.a, i.b, i.c, i.d, i.e, i.f);
}
function m_(l3) {
  return l3 == null || (Du || (Du = document.createElementNS("http://www.w3.org/2000/svg", "g")), Du.setAttribute("transform", l3), !(l3 = Du.transform.baseVal.consolidate())) ? eo : (l3 = l3.matrix, B0(l3.a, l3.b, l3.c, l3.d, l3.e, l3.f));
}
function j0(l3, i, c, f) {
  function o(p) {
    return p.length ? p.pop() + " " : "";
  }
  function h(p, S, E, z, w, j) {
    if (p !== E || S !== z) {
      var W = w.push("translate(", null, i, null, c);
      j.push({ i: W - 4, x: Gn(p, E) }, { i: W - 2, x: Gn(S, z) });
    } else (E || z) && w.push("translate(" + E + i + z + c);
  }
  function d(p, S, E, z) {
    p !== S ? (p - S > 180 ? S += 360 : S - p > 180 && (p += 360), z.push({ i: E.push(o(E) + "rotate(", null, f) - 2, x: Gn(p, S) })) : S && E.push(o(E) + "rotate(" + S + f);
  }
  function y(p, S, E, z) {
    p !== S ? z.push({ i: E.push(o(E) + "skewX(", null, f) - 2, x: Gn(p, S) }) : S && E.push(o(E) + "skewX(" + S + f);
  }
  function v(p, S, E, z, w, j) {
    if (p !== E || S !== z) {
      var W = w.push(o(w) + "scale(", null, ",", null, ")");
      j.push({ i: W - 4, x: Gn(p, E) }, { i: W - 2, x: Gn(S, z) });
    } else (E !== 1 || z !== 1) && w.push(o(w) + "scale(" + E + "," + z + ")");
  }
  return function(p, S) {
    var E = [], z = [];
    return p = l3(p), S = l3(S), h(p.translateX, p.translateY, S.translateX, S.translateY, E, z), d(p.rotate, S.rotate, E, z), y(p.skewX, S.skewX, E, z), v(p.scaleX, p.scaleY, S.scaleX, S.scaleY, E, z), p = S = null, function(w) {
      for (var j = -1, W = z.length, lt; ++j < W; ) E[(lt = z[j]).i] = lt.x(w);
      return E.join("");
    };
  };
}
var p_ = j0(d_, "px, ", "px)", "deg)"), y_ = j0(m_, ", ", ")", ")"), v_ = 1e-12;
function Qm(l3) {
  return ((l3 = Math.exp(l3)) + 1 / l3) / 2;
}
function g_(l3) {
  return ((l3 = Math.exp(l3)) - 1 / l3) / 2;
}
function __(l3) {
  return ((l3 = Math.exp(2 * l3)) - 1) / (l3 + 1);
}
const b_ = (function l2(i, c, f) {
  function o(h, d) {
    var y = h[0], v = h[1], p = h[2], S = d[0], E = d[1], z = d[2], w = S - y, j = E - v, W = w * w + j * j, lt, Z;
    if (W < v_) Z = Math.log(z / p) / i, lt = function(R) {
      return [y + R * w, v + R * j, p * Math.exp(i * R * Z)];
    };
    else {
      var X = Math.sqrt(W), G = (z * z - p * p + f * W) / (2 * p * c * X), $ = (z * z - p * p - f * W) / (2 * z * c * X), L = Math.log(Math.sqrt(G * G + 1) - G), V = Math.log(Math.sqrt($ * $ + 1) - $);
      Z = (V - L) / i, lt = function(R) {
        var Y = R * Z, tt = Qm(L), I = p / (c * X) * (tt * __(i * Y + L) - g_(L));
        return [y + I * w, v + I * j, p * tt / Qm(i * Y + L)];
      };
    }
    return lt.duration = Z * 1e3 * i / Math.SQRT2, lt;
  }
  return o.rho = function(h) {
    var d = Math.max(1e-3, +h), y = d * d, v = y * y;
    return l2(d, y, v);
  }, o;
})(Math.SQRT2, 2, 4);
var tl = 0, ti = 0, $l = 0, Y0 = 1e3, Iu, ei, Pu = 0, ha = 0, ar = 0, ci = typeof performance == "object" && performance.now ? performance : Date, G0 = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(l3) {
  setTimeout(l3, 17);
};
function mo() {
  return ha || (G0(S_), ha = ci.now() + ar);
}
function S_() {
  ha = 0;
}
function tr() {
  this._call = this._time = this._next = null;
}
tr.prototype = L0.prototype = { constructor: tr, restart: function(l3, i, c) {
  if (typeof l3 != "function") throw new TypeError("callback is not a function");
  c = (c == null ? mo() : +c) + (i == null ? 0 : +i), !this._next && ei !== this && (ei ? ei._next = this : Iu = this, ei = this), this._call = l3, this._time = c, no();
}, stop: function() {
  this._call && (this._call = null, this._time = 1 / 0, no());
} };
function L0(l3, i, c) {
  var f = new tr();
  return f.restart(l3, i, c), f;
}
function T_() {
  mo(), ++tl;
  for (var l3 = Iu, i; l3; ) (i = ha - l3._time) >= 0 && l3._call.call(void 0, i), l3 = l3._next;
  --tl;
}
function Vm() {
  ha = (Pu = ci.now()) + ar, tl = ti = 0;
  try {
    T_();
  } finally {
    tl = 0, z_(), ha = 0;
  }
}
function E_() {
  var l3 = ci.now(), i = l3 - Pu;
  i > Y0 && (ar -= i, Pu = l3);
}
function z_() {
  for (var l3, i = Iu, c, f = 1 / 0; i; ) i._call ? (f > i._time && (f = i._time), l3 = i, i = i._next) : (c = i._next, i._next = null, i = l3 ? l3._next = c : Iu = c);
  ei = l3, no(f);
}
function no(l3) {
  if (!tl) {
    ti && (ti = clearTimeout(ti));
    var i = l3 - ha;
    i > 24 ? (l3 < 1 / 0 && (ti = setTimeout(Vm, l3 - ci.now() - ar)), $l && ($l = clearInterval($l))) : ($l || (Pu = ci.now(), $l = setInterval(E_, Y0)), tl = 1, G0(Vm));
  }
}
function Zm(l3, i, c) {
  var f = new tr();
  return i = i == null ? 0 : +i, f.restart((o) => {
    f.stop(), l3(o + i);
  }, i, c), f;
}
var A_ = so("start", "end", "cancel", "interrupt"), x_ = [], X0 = 0, Km = 1, ao = 2, Zu = 3, Jm = 4, lo = 5, Ku = 6;
function lr(l3, i, c, f, o, h) {
  var d = l3.__transition;
  if (!d) l3.__transition = {};
  else if (c in d) return;
  M_(l3, c, { name: i, index: f, group: o, on: A_, tween: x_, time: h.time, delay: h.delay, duration: h.duration, ease: h.ease, timer: null, state: X0 });
}
function po(l3, i) {
  var c = Ye(l3, i);
  if (c.state > X0) throw new Error("too late; already scheduled");
  return c;
}
function Ke(l3, i) {
  var c = Ye(l3, i);
  if (c.state > Zu) throw new Error("too late; already running");
  return c;
}
function Ye(l3, i) {
  var c = l3.__transition;
  if (!c || !(c = c[i])) throw new Error("transition not found");
  return c;
}
function M_(l3, i, c) {
  var f = l3.__transition, o;
  f[i] = c, c.timer = L0(h, 0, c.time);
  function h(p) {
    c.state = Km, c.timer.restart(d, c.delay, c.time), c.delay <= p && d(p - c.delay);
  }
  function d(p) {
    var S, E, z, w;
    if (c.state !== Km) return v();
    for (S in f) if (w = f[S], w.name === c.name) {
      if (w.state === Zu) return Zm(d);
      w.state === Jm ? (w.state = Ku, w.timer.stop(), w.on.call("interrupt", l3, l3.__data__, w.index, w.group), delete f[S]) : +S < i && (w.state = Ku, w.timer.stop(), w.on.call("cancel", l3, l3.__data__, w.index, w.group), delete f[S]);
    }
    if (Zm(function() {
      c.state === Zu && (c.state = Jm, c.timer.restart(y, c.delay, c.time), y(p));
    }), c.state = ao, c.on.call("start", l3, l3.__data__, c.index, c.group), c.state === ao) {
      for (c.state = Zu, o = new Array(z = c.tween.length), S = 0, E = -1; S < z; ++S) (w = c.tween[S].value.call(l3, l3.__data__, c.index, c.group)) && (o[++E] = w);
      o.length = E + 1;
    }
  }
  function y(p) {
    for (var S = p < c.duration ? c.ease.call(null, p / c.duration) : (c.timer.restart(v), c.state = lo, 1), E = -1, z = o.length; ++E < z; ) o[E].call(l3, S);
    c.state === lo && (c.on.call("end", l3, l3.__data__, c.index, c.group), v());
  }
  function v() {
    c.state = Ku, c.timer.stop(), delete f[i];
    for (var p in f) return;
    delete l3.__transition;
  }
}
function Ju(l3, i) {
  var c = l3.__transition, f, o, h = true, d;
  if (c) {
    i = i == null ? null : i + "";
    for (d in c) {
      if ((f = c[d]).name !== i) {
        h = false;
        continue;
      }
      o = f.state > ao && f.state < lo, f.state = Ku, f.timer.stop(), f.on.call(o ? "interrupt" : "cancel", l3, l3.__data__, f.index, f.group), delete c[d];
    }
    h && delete l3.__transition;
  }
}
function O_(l3) {
  return this.each(function() {
    Ju(this, l3);
  });
}
function N_(l3, i) {
  var c, f;
  return function() {
    var o = Ke(this, l3), h = o.tween;
    if (h !== c) {
      f = c = h;
      for (var d = 0, y = f.length; d < y; ++d) if (f[d].name === i) {
        f = f.slice(), f.splice(d, 1);
        break;
      }
    }
    o.tween = f;
  };
}
function w_(l3, i, c) {
  var f, o;
  if (typeof c != "function") throw new Error();
  return function() {
    var h = Ke(this, l3), d = h.tween;
    if (d !== f) {
      o = (f = d).slice();
      for (var y = { name: i, value: c }, v = 0, p = o.length; v < p; ++v) if (o[v].name === i) {
        o[v] = y;
        break;
      }
      v === p && o.push(y);
    }
    h.tween = o;
  };
}
function D_(l3, i) {
  var c = this._id;
  if (l3 += "", arguments.length < 2) {
    for (var f = Ye(this.node(), c).tween, o = 0, h = f.length, d; o < h; ++o) if ((d = f[o]).name === l3) return d.value;
    return null;
  }
  return this.each((i == null ? N_ : w_)(c, l3, i));
}
function yo(l3, i, c) {
  var f = l3._id;
  return l3.each(function() {
    var o = Ke(this, f);
    (o.value || (o.value = {}))[i] = c.apply(this, arguments);
  }), function(o) {
    return Ye(o, f).value[i];
  };
}
function Q0(l3, i) {
  var c;
  return (typeof i == "number" ? Gn : i instanceof ri ? Lm : (c = ri(i)) ? (i = c, Lm) : h_)(l3, i);
}
function C_(l3) {
  return function() {
    this.removeAttribute(l3);
  };
}
function R_(l3) {
  return function() {
    this.removeAttributeNS(l3.space, l3.local);
  };
}
function U_(l3, i, c) {
  var f, o = c + "", h;
  return function() {
    var d = this.getAttribute(l3);
    return d === o ? null : d === f ? h : h = i(f = d, c);
  };
}
function q_(l3, i, c) {
  var f, o = c + "", h;
  return function() {
    var d = this.getAttributeNS(l3.space, l3.local);
    return d === o ? null : d === f ? h : h = i(f = d, c);
  };
}
function H_(l3, i, c) {
  var f, o, h;
  return function() {
    var d, y = c(this), v;
    return y == null ? void this.removeAttribute(l3) : (d = this.getAttribute(l3), v = y + "", d === v ? null : d === f && v === o ? h : (o = v, h = i(f = d, y)));
  };
}
function B_(l3, i, c) {
  var f, o, h;
  return function() {
    var d, y = c(this), v;
    return y == null ? void this.removeAttributeNS(l3.space, l3.local) : (d = this.getAttributeNS(l3.space, l3.local), v = y + "", d === v ? null : d === f && v === o ? h : (o = v, h = i(f = d, y)));
  };
}
function j_(l3, i) {
  var c = nr(l3), f = c === "transform" ? y_ : Q0;
  return this.attrTween(l3, typeof i == "function" ? (c.local ? B_ : H_)(c, f, yo(this, "attr." + l3, i)) : i == null ? (c.local ? R_ : C_)(c) : (c.local ? q_ : U_)(c, f, i));
}
function Y_(l3, i) {
  return function(c) {
    this.setAttribute(l3, i.call(this, c));
  };
}
function G_(l3, i) {
  return function(c) {
    this.setAttributeNS(l3.space, l3.local, i.call(this, c));
  };
}
function L_(l3, i) {
  var c, f;
  function o() {
    var h = i.apply(this, arguments);
    return h !== f && (c = (f = h) && G_(l3, h)), c;
  }
  return o._value = i, o;
}
function X_(l3, i) {
  var c, f;
  function o() {
    var h = i.apply(this, arguments);
    return h !== f && (c = (f = h) && Y_(l3, h)), c;
  }
  return o._value = i, o;
}
function Q_(l3, i) {
  var c = "attr." + l3;
  if (arguments.length < 2) return (c = this.tween(c)) && c._value;
  if (i == null) return this.tween(c, null);
  if (typeof i != "function") throw new Error();
  var f = nr(l3);
  return this.tween(c, (f.local ? L_ : X_)(f, i));
}
function V_(l3, i) {
  return function() {
    po(this, l3).delay = +i.apply(this, arguments);
  };
}
function Z_(l3, i) {
  return i = +i, function() {
    po(this, l3).delay = i;
  };
}
function K_(l3) {
  var i = this._id;
  return arguments.length ? this.each((typeof l3 == "function" ? V_ : Z_)(i, l3)) : Ye(this.node(), i).delay;
}
function J_(l3, i) {
  return function() {
    Ke(this, l3).duration = +i.apply(this, arguments);
  };
}
function k_(l3, i) {
  return i = +i, function() {
    Ke(this, l3).duration = i;
  };
}
function W_(l3) {
  var i = this._id;
  return arguments.length ? this.each((typeof l3 == "function" ? J_ : k_)(i, l3)) : Ye(this.node(), i).duration;
}
function $_(l3, i) {
  if (typeof i != "function") throw new Error();
  return function() {
    Ke(this, l3).ease = i;
  };
}
function F_(l3) {
  var i = this._id;
  return arguments.length ? this.each($_(i, l3)) : Ye(this.node(), i).ease;
}
function I_(l3, i) {
  return function() {
    var c = i.apply(this, arguments);
    if (typeof c != "function") throw new Error();
    Ke(this, l3).ease = c;
  };
}
function P_(l3) {
  if (typeof l3 != "function") throw new Error();
  return this.each(I_(this._id, l3));
}
function tb(l3) {
  typeof l3 != "function" && (l3 = E0(l3));
  for (var i = this._groups, c = i.length, f = new Array(c), o = 0; o < c; ++o) for (var h = i[o], d = h.length, y = f[o] = [], v, p = 0; p < d; ++p) (v = h[p]) && l3.call(v, v.__data__, p, h) && y.push(v);
  return new mn(f, this._parents, this._name, this._id);
}
function eb(l3) {
  if (l3._id !== this._id) throw new Error();
  for (var i = this._groups, c = l3._groups, f = i.length, o = c.length, h = Math.min(f, o), d = new Array(f), y = 0; y < h; ++y) for (var v = i[y], p = c[y], S = v.length, E = d[y] = new Array(S), z, w = 0; w < S; ++w) (z = v[w] || p[w]) && (E[w] = z);
  for (; y < f; ++y) d[y] = i[y];
  return new mn(d, this._parents, this._name, this._id);
}
function nb(l3) {
  return (l3 + "").trim().split(/^|\s+/).every(function(i) {
    var c = i.indexOf(".");
    return c >= 0 && (i = i.slice(0, c)), !i || i === "start";
  });
}
function ab(l3, i, c) {
  var f, o, h = nb(i) ? po : Ke;
  return function() {
    var d = h(this, l3), y = d.on;
    y !== f && (o = (f = y).copy()).on(i, c), d.on = o;
  };
}
function lb(l3, i) {
  var c = this._id;
  return arguments.length < 2 ? Ye(this.node(), c).on.on(l3) : this.each(ab(c, l3, i));
}
function ib(l3) {
  return function() {
    var i = this.parentNode;
    for (var c in this.__transition) if (+c !== l3) return;
    i && i.removeChild(this);
  };
}
function ub() {
  return this.on("end.remove", ib(this._id));
}
function rb(l3) {
  var i = this._name, c = this._id;
  typeof l3 != "function" && (l3 = fo(l3));
  for (var f = this._groups, o = f.length, h = new Array(o), d = 0; d < o; ++d) for (var y = f[d], v = y.length, p = h[d] = new Array(v), S, E, z = 0; z < v; ++z) (S = y[z]) && (E = l3.call(S, S.__data__, z, y)) && ("__data__" in S && (E.__data__ = S.__data__), p[z] = E, lr(p[z], i, c, z, p, Ye(S, c)));
  return new mn(h, this._parents, i, c);
}
function cb(l3) {
  var i = this._name, c = this._id;
  typeof l3 != "function" && (l3 = T0(l3));
  for (var f = this._groups, o = f.length, h = [], d = [], y = 0; y < o; ++y) for (var v = f[y], p = v.length, S, E = 0; E < p; ++E) if (S = v[E]) {
    for (var z = l3.call(S, S.__data__, E, v), w, j = Ye(S, c), W = 0, lt = z.length; W < lt; ++W) (w = z[W]) && lr(w, i, c, W, z, j);
    h.push(z), d.push(S);
  }
  return new mn(h, d, i, c);
}
var fb = fi.prototype.constructor;
function ob() {
  return new fb(this._groups, this._parents);
}
function sb(l3, i) {
  var c, f, o;
  return function() {
    var h = Pa(this, l3), d = (this.style.removeProperty(l3), Pa(this, l3));
    return h === d ? null : h === c && d === f ? o : o = i(c = h, f = d);
  };
}
function V0(l3) {
  return function() {
    this.style.removeProperty(l3);
  };
}
function hb(l3, i, c) {
  var f, o = c + "", h;
  return function() {
    var d = Pa(this, l3);
    return d === o ? null : d === f ? h : h = i(f = d, c);
  };
}
function db(l3, i, c) {
  var f, o, h;
  return function() {
    var d = Pa(this, l3), y = c(this), v = y + "";
    return y == null && (v = y = (this.style.removeProperty(l3), Pa(this, l3))), d === v ? null : d === f && v === o ? h : (o = v, h = i(f = d, y));
  };
}
function mb(l3, i) {
  var c, f, o, h = "style." + i, d = "end." + h, y;
  return function() {
    var v = Ke(this, l3), p = v.on, S = v.value[h] == null ? y || (y = V0(i)) : void 0;
    (p !== c || o !== S) && (f = (c = p).copy()).on(d, o = S), v.on = f;
  };
}
function pb(l3, i, c) {
  var f = (l3 += "") == "transform" ? p_ : Q0;
  return i == null ? this.styleTween(l3, sb(l3, f)).on("end.style." + l3, V0(l3)) : typeof i == "function" ? this.styleTween(l3, db(l3, f, yo(this, "style." + l3, i))).each(mb(this._id, l3)) : this.styleTween(l3, hb(l3, f, i), c).on("end.style." + l3, null);
}
function yb(l3, i, c) {
  return function(f) {
    this.style.setProperty(l3, i.call(this, f), c);
  };
}
function vb(l3, i, c) {
  var f, o;
  function h() {
    var d = i.apply(this, arguments);
    return d !== o && (f = (o = d) && yb(l3, d, c)), f;
  }
  return h._value = i, h;
}
function gb(l3, i, c) {
  var f = "style." + (l3 += "");
  if (arguments.length < 2) return (f = this.tween(f)) && f._value;
  if (i == null) return this.tween(f, null);
  if (typeof i != "function") throw new Error();
  return this.tween(f, vb(l3, i, c ?? ""));
}
function _b(l3) {
  return function() {
    this.textContent = l3;
  };
}
function bb(l3) {
  return function() {
    var i = l3(this);
    this.textContent = i ?? "";
  };
}
function Sb(l3) {
  return this.tween("text", typeof l3 == "function" ? bb(yo(this, "text", l3)) : _b(l3 == null ? "" : l3 + ""));
}
function Tb(l3) {
  return function(i) {
    this.textContent = l3.call(this, i);
  };
}
function Eb(l3) {
  var i, c;
  function f() {
    var o = l3.apply(this, arguments);
    return o !== c && (i = (c = o) && Tb(o)), i;
  }
  return f._value = l3, f;
}
function zb(l3) {
  var i = "text";
  if (arguments.length < 1) return (i = this.tween(i)) && i._value;
  if (l3 == null) return this.tween(i, null);
  if (typeof l3 != "function") throw new Error();
  return this.tween(i, Eb(l3));
}
function Ab() {
  for (var l3 = this._name, i = this._id, c = Z0(), f = this._groups, o = f.length, h = 0; h < o; ++h) for (var d = f[h], y = d.length, v, p = 0; p < y; ++p) if (v = d[p]) {
    var S = Ye(v, i);
    lr(v, l3, c, p, d, { time: S.time + S.delay + S.duration, delay: 0, duration: S.duration, ease: S.ease });
  }
  return new mn(f, this._parents, l3, c);
}
function xb() {
  var l3, i, c = this, f = c._id, o = c.size();
  return new Promise(function(h, d) {
    var y = { value: d }, v = { value: function() {
      --o === 0 && h();
    } };
    c.each(function() {
      var p = Ke(this, f), S = p.on;
      S !== l3 && (i = (l3 = S).copy(), i._.cancel.push(y), i._.interrupt.push(y), i._.end.push(v)), p.on = i;
    }), o === 0 && h();
  });
}
var Mb = 0;
function mn(l3, i, c, f) {
  this._groups = l3, this._parents = i, this._name = c, this._id = f;
}
function Z0() {
  return ++Mb;
}
var hn = fi.prototype;
mn.prototype = { constructor: mn, select: rb, selectAll: cb, selectChild: hn.selectChild, selectChildren: hn.selectChildren, filter: tb, merge: eb, selection: ob, transition: Ab, call: hn.call, nodes: hn.nodes, node: hn.node, size: hn.size, empty: hn.empty, each: hn.each, on: lb, attr: j_, attrTween: Q_, style: pb, styleTween: gb, text: Sb, textTween: zb, remove: ub, tween: D_, delay: K_, duration: W_, ease: F_, easeVarying: P_, end: xb, [Symbol.iterator]: hn[Symbol.iterator] };
function Ob(l3) {
  return ((l3 *= 2) <= 1 ? l3 * l3 * l3 : (l3 -= 2) * l3 * l3 + 2) / 2;
}
var Nb = { time: null, delay: 0, duration: 250, ease: Ob };
function wb(l3, i) {
  for (var c; !(c = l3.__transition) || !(c = c[i]); ) if (!(l3 = l3.parentNode)) throw new Error(`transition ${i} not found`);
  return c;
}
function Db(l3) {
  var i, c;
  l3 instanceof mn ? (i = l3._id, l3 = l3._name) : (i = Z0(), (c = Nb).time = mo(), l3 = l3 == null ? null : l3 + "");
  for (var f = this._groups, o = f.length, h = 0; h < o; ++h) for (var d = f[h], y = d.length, v, p = 0; p < y; ++p) (v = d[p]) && lr(v, l3, i, p, d, c || wb(v, i));
  return new mn(f, this._parents, l3, i);
}
fi.prototype.interrupt = O_;
fi.prototype.transition = Db;
const Cu = (l3) => () => l3;
function Cb(l3, { sourceEvent: i, target: c, transform: f, dispatch: o }) {
  Object.defineProperties(this, { type: { value: l3, enumerable: true, configurable: true }, sourceEvent: { value: i, enumerable: true, configurable: true }, target: { value: c, enumerable: true, configurable: true }, transform: { value: f, enumerable: true, configurable: true }, _: { value: o } });
}
function dn(l3, i, c) {
  this.k = l3, this.x = i, this.y = c;
}
dn.prototype = { constructor: dn, scale: function(l3) {
  return l3 === 1 ? this : new dn(this.k * l3, this.x, this.y);
}, translate: function(l3, i) {
  return l3 === 0 & i === 0 ? this : new dn(this.k, this.x + this.k * l3, this.y + this.k * i);
}, apply: function(l3) {
  return [l3[0] * this.k + this.x, l3[1] * this.k + this.y];
}, applyX: function(l3) {
  return l3 * this.k + this.x;
}, applyY: function(l3) {
  return l3 * this.k + this.y;
}, invert: function(l3) {
  return [(l3[0] - this.x) / this.k, (l3[1] - this.y) / this.k];
}, invertX: function(l3) {
  return (l3 - this.x) / this.k;
}, invertY: function(l3) {
  return (l3 - this.y) / this.k;
}, rescaleX: function(l3) {
  return l3.copy().domain(l3.range().map(this.invertX, this).map(l3.invert, l3));
}, rescaleY: function(l3) {
  return l3.copy().domain(l3.range().map(this.invertY, this).map(l3.invert, l3));
}, toString: function() {
  return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
} };
var er = new dn(1, 0, 0);
dn.prototype;
function Bf(l3) {
  l3.stopImmediatePropagation();
}
function Fl(l3) {
  l3.preventDefault(), l3.stopImmediatePropagation();
}
function Rb(l3) {
  return (!l3.ctrlKey || l3.type === "wheel") && !l3.button;
}
function Ub() {
  var l3 = this;
  return l3 instanceof SVGElement ? (l3 = l3.ownerSVGElement || l3, l3.hasAttribute("viewBox") ? (l3 = l3.viewBox.baseVal, [[l3.x, l3.y], [l3.x + l3.width, l3.y + l3.height]]) : [[0, 0], [l3.width.baseVal.value, l3.height.baseVal.value]]) : [[0, 0], [l3.clientWidth, l3.clientHeight]];
}
function km() {
  return this.__zoom || er;
}
function qb(l3) {
  return -l3.deltaY * (l3.deltaMode === 1 ? 0.05 : l3.deltaMode ? 1 : 2e-3) * (l3.ctrlKey ? 10 : 1);
}
function Hb() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Bb(l3, i, c) {
  var f = l3.invertX(i[0][0]) - c[0][0], o = l3.invertX(i[1][0]) - c[1][0], h = l3.invertY(i[0][1]) - c[0][1], d = l3.invertY(i[1][1]) - c[1][1];
  return l3.translate(o > f ? (f + o) / 2 : Math.min(0, f) || Math.max(0, o), d > h ? (h + d) / 2 : Math.min(0, h) || Math.max(0, d));
}
function jf() {
  var l3 = Rb, i = Ub, c = Bb, f = qb, o = Hb, h = [0, 1 / 0], d = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], y = 250, v = b_, p = so("start", "zoom", "end"), S, E, z, w = 500, j = 150, W = 0, lt = 10;
  function Z(O) {
    O.property("__zoom", km).on("wheel.zoom", Y, { passive: false }).on("mousedown.zoom", tt).on("dblclick.zoom", I).filter(o).on("touchstart.zoom", rt).on("touchmove.zoom", ft).on("touchend.zoom touchcancel.zoom", wt).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  Z.transform = function(O, J, g, D) {
    var Q = O.selection ? O.selection() : O;
    Q.property("__zoom", km), O !== Q ? L(O, J, g, D) : Q.interrupt().each(function() {
      V(this, arguments).event(D).start().zoom(null, typeof J == "function" ? J.apply(this, arguments) : J).end();
    });
  }, Z.scaleBy = function(O, J, g, D) {
    Z.scaleTo(O, function() {
      var Q = this.__zoom.k, F = typeof J == "function" ? J.apply(this, arguments) : J;
      return Q * F;
    }, g, D);
  }, Z.scaleTo = function(O, J, g, D) {
    Z.transform(O, function() {
      var Q = i.apply(this, arguments), F = this.__zoom, P = g == null ? $(Q) : typeof g == "function" ? g.apply(this, arguments) : g, b = F.invert(P), U = typeof J == "function" ? J.apply(this, arguments) : J;
      return c(G(X(F, U), P, b), Q, d);
    }, g, D);
  }, Z.translateBy = function(O, J, g, D) {
    Z.transform(O, function() {
      return c(this.__zoom.translate(typeof J == "function" ? J.apply(this, arguments) : J, typeof g == "function" ? g.apply(this, arguments) : g), i.apply(this, arguments), d);
    }, null, D);
  }, Z.translateTo = function(O, J, g, D, Q) {
    Z.transform(O, function() {
      var F = i.apply(this, arguments), P = this.__zoom, b = D == null ? $(F) : typeof D == "function" ? D.apply(this, arguments) : D;
      return c(er.translate(b[0], b[1]).scale(P.k).translate(typeof J == "function" ? -J.apply(this, arguments) : -J, typeof g == "function" ? -g.apply(this, arguments) : -g), F, d);
    }, D, Q);
  };
  function X(O, J) {
    return J = Math.max(h[0], Math.min(h[1], J)), J === O.k ? O : new dn(J, O.x, O.y);
  }
  function G(O, J, g) {
    var D = J[0] - g[0] * O.k, Q = J[1] - g[1] * O.k;
    return D === O.x && Q === O.y ? O : new dn(O.k, D, Q);
  }
  function $(O) {
    return [(+O[0][0] + +O[1][0]) / 2, (+O[0][1] + +O[1][1]) / 2];
  }
  function L(O, J, g, D) {
    O.on("start.zoom", function() {
      V(this, arguments).event(D).start();
    }).on("interrupt.zoom end.zoom", function() {
      V(this, arguments).event(D).end();
    }).tween("zoom", function() {
      var Q = this, F = arguments, P = V(Q, F).event(D), b = i.apply(Q, F), U = g == null ? $(b) : typeof g == "function" ? g.apply(Q, F) : g, K = Math.max(b[1][0] - b[0][0], b[1][1] - b[0][1]), k = Q.__zoom, it = typeof J == "function" ? J.apply(Q, F) : J, ct = v(k.invert(U).concat(K / k.k), it.invert(U).concat(K / it.k));
      return function(st) {
        if (st === 1) st = it;
        else {
          var Dt = ct(st), Ct = K / Dt[2];
          st = new dn(Ct, U[0] - Dt[0] * Ct, U[1] - Dt[1] * Ct);
        }
        P.zoom(null, st);
      };
    });
  }
  function V(O, J, g) {
    return !g && O.__zooming || new R(O, J);
  }
  function R(O, J) {
    this.that = O, this.args = J, this.active = 0, this.sourceEvent = null, this.extent = i.apply(O, J), this.taps = 0;
  }
  R.prototype = { event: function(O) {
    return O && (this.sourceEvent = O), this;
  }, start: function() {
    return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
  }, zoom: function(O, J) {
    return this.mouse && O !== "mouse" && (this.mouse[1] = J.invert(this.mouse[0])), this.touch0 && O !== "touch" && (this.touch0[1] = J.invert(this.touch0[0])), this.touch1 && O !== "touch" && (this.touch1[1] = J.invert(this.touch1[0])), this.that.__zoom = J, this.emit("zoom"), this;
  }, end: function() {
    return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
  }, emit: function(O) {
    var J = le(this.that).datum();
    p.call(O, this.that, new Cb(O, { sourceEvent: this.sourceEvent, target: Z, transform: this.that.__zoom, dispatch: p }), J);
  } };
  function Y(O, ...J) {
    if (!l3.apply(this, arguments)) return;
    var g = V(this, J).event(O), D = this.__zoom, Q = Math.max(h[0], Math.min(h[1], D.k * Math.pow(2, f.apply(this, arguments)))), F = ra(O);
    if (g.wheel) (g.mouse[0][0] !== F[0] || g.mouse[0][1] !== F[1]) && (g.mouse[1] = D.invert(g.mouse[0] = F)), clearTimeout(g.wheel);
    else {
      if (D.k === Q) return;
      g.mouse = [F, D.invert(F)], Ju(this), g.start();
    }
    Fl(O), g.wheel = setTimeout(P, j), g.zoom("mouse", c(G(X(D, Q), g.mouse[0], g.mouse[1]), g.extent, d));
    function P() {
      g.wheel = null, g.end();
    }
  }
  function tt(O, ...J) {
    if (z || !l3.apply(this, arguments)) return;
    var g = O.currentTarget, D = V(this, J, true).event(O), Q = le(O.view).on("mousemove.zoom", U, true).on("mouseup.zoom", K, true), F = ra(O, g), P = O.clientX, b = O.clientY;
    J1(O.view), Bf(O), D.mouse = [F, this.__zoom.invert(F)], Ju(this), D.start();
    function U(k) {
      if (Fl(k), !D.moved) {
        var it = k.clientX - P, ct = k.clientY - b;
        D.moved = it * it + ct * ct > W;
      }
      D.event(k).zoom("mouse", c(G(D.that.__zoom, D.mouse[0] = ra(k, g), D.mouse[1]), D.extent, d));
    }
    function K(k) {
      Q.on("mousemove.zoom mouseup.zoom", null), k1(k.view, D.moved), Fl(k), D.event(k).end();
    }
  }
  function I(O, ...J) {
    if (l3.apply(this, arguments)) {
      var g = this.__zoom, D = ra(O.changedTouches ? O.changedTouches[0] : O, this), Q = g.invert(D), F = g.k * (O.shiftKey ? 0.5 : 2), P = c(G(X(g, F), D, Q), i.apply(this, J), d);
      Fl(O), y > 0 ? le(this).transition().duration(y).call(L, P, D, O) : le(this).call(Z.transform, P, D, O);
    }
  }
  function rt(O, ...J) {
    if (l3.apply(this, arguments)) {
      var g = O.touches, D = g.length, Q = V(this, J, O.changedTouches.length === D).event(O), F, P, b, U;
      for (Bf(O), P = 0; P < D; ++P) b = g[P], U = ra(b, this), U = [U, this.__zoom.invert(U), b.identifier], Q.touch0 ? !Q.touch1 && Q.touch0[2] !== U[2] && (Q.touch1 = U, Q.taps = 0) : (Q.touch0 = U, F = true, Q.taps = 1 + !!S);
      S && (S = clearTimeout(S)), F && (Q.taps < 2 && (E = U[0], S = setTimeout(function() {
        S = null;
      }, w)), Ju(this), Q.start());
    }
  }
  function ft(O, ...J) {
    if (this.__zooming) {
      var g = V(this, J).event(O), D = O.changedTouches, Q = D.length, F, P, b, U;
      for (Fl(O), F = 0; F < Q; ++F) P = D[F], b = ra(P, this), g.touch0 && g.touch0[2] === P.identifier ? g.touch0[0] = b : g.touch1 && g.touch1[2] === P.identifier && (g.touch1[0] = b);
      if (P = g.that.__zoom, g.touch1) {
        var K = g.touch0[0], k = g.touch0[1], it = g.touch1[0], ct = g.touch1[1], st = (st = it[0] - K[0]) * st + (st = it[1] - K[1]) * st, Dt = (Dt = ct[0] - k[0]) * Dt + (Dt = ct[1] - k[1]) * Dt;
        P = X(P, Math.sqrt(st / Dt)), b = [(K[0] + it[0]) / 2, (K[1] + it[1]) / 2], U = [(k[0] + ct[0]) / 2, (k[1] + ct[1]) / 2];
      } else if (g.touch0) b = g.touch0[0], U = g.touch0[1];
      else return;
      g.zoom("touch", c(G(P, b, U), g.extent, d));
    }
  }
  function wt(O, ...J) {
    if (this.__zooming) {
      var g = V(this, J).event(O), D = O.changedTouches, Q = D.length, F, P;
      for (Bf(O), z && clearTimeout(z), z = setTimeout(function() {
        z = null;
      }, w), F = 0; F < Q; ++F) P = D[F], g.touch0 && g.touch0[2] === P.identifier ? delete g.touch0 : g.touch1 && g.touch1[2] === P.identifier && delete g.touch1;
      if (g.touch1 && !g.touch0 && (g.touch0 = g.touch1, delete g.touch1), g.touch0) g.touch0[1] = this.__zoom.invert(g.touch0[0]);
      else if (g.end(), g.taps === 2 && (P = ra(P, this), Math.hypot(E[0] - P[0], E[1] - P[1]) < lt)) {
        var b = le(this).on("dblclick.zoom");
        b && b.apply(this, arguments);
      }
    }
  }
  return Z.wheelDelta = function(O) {
    return arguments.length ? (f = typeof O == "function" ? O : Cu(+O), Z) : f;
  }, Z.filter = function(O) {
    return arguments.length ? (l3 = typeof O == "function" ? O : Cu(!!O), Z) : l3;
  }, Z.touchable = function(O) {
    return arguments.length ? (o = typeof O == "function" ? O : Cu(!!O), Z) : o;
  }, Z.extent = function(O) {
    return arguments.length ? (i = typeof O == "function" ? O : Cu([[+O[0][0], +O[0][1]], [+O[1][0], +O[1][1]]]), Z) : i;
  }, Z.scaleExtent = function(O) {
    return arguments.length ? (h[0] = +O[0], h[1] = +O[1], Z) : [h[0], h[1]];
  }, Z.translateExtent = function(O) {
    return arguments.length ? (d[0][0] = +O[0][0], d[1][0] = +O[1][0], d[0][1] = +O[0][1], d[1][1] = +O[1][1], Z) : [[d[0][0], d[0][1]], [d[1][0], d[1][1]]];
  }, Z.constrain = function(O) {
    return arguments.length ? (c = O, Z) : c;
  }, Z.duration = function(O) {
    return arguments.length ? (y = +O, Z) : y;
  }, Z.interpolate = function(O) {
    return arguments.length ? (v = O, Z) : v;
  }, Z.on = function() {
    var O = p.on.apply(p, arguments);
    return O === p ? Z : O;
  }, Z.clickDistance = function(O) {
    return arguments.length ? (W = (O = +O) * O, Z) : Math.sqrt(W);
  }, Z.tapDistance = function(O) {
    return arguments.length ? (lt = +O, Z) : lt;
  }, Z;
}
var Wm = Object.prototype.hasOwnProperty;
function ai(l3, i) {
  var c, f;
  if (l3 === i) return true;
  if (l3 && i && (c = l3.constructor) === i.constructor) {
    if (c === Date) return l3.getTime() === i.getTime();
    if (c === RegExp) return l3.toString() === i.toString();
    if (c === Array) {
      if ((f = l3.length) === i.length) for (; f-- && ai(l3[f], i[f]); ) ;
      return f === -1;
    }
    if (!c || typeof l3 == "object") {
      f = 0;
      for (c in l3) if (Wm.call(l3, c) && ++f && !Wm.call(i, c) || !(c in i) || !ai(l3[c], i[c])) return false;
      return Object.keys(i).length === f;
    }
  }
  return l3 !== l3 && i !== i;
}
var Yf = { exports: {} }, $m;
function jb() {
  return $m || ($m = 1, (function(l3) {
    var i = (function() {
      function c(z, w) {
        return w != null && z instanceof w;
      }
      var f;
      try {
        f = Map;
      } catch {
        f = function() {
        };
      }
      var o;
      try {
        o = Set;
      } catch {
        o = function() {
        };
      }
      var h;
      try {
        h = Promise;
      } catch {
        h = function() {
        };
      }
      function d(z, w, j, W, lt) {
        typeof w == "object" && (j = w.depth, W = w.prototype, lt = w.includeNonEnumerable, w = w.circular);
        var Z = [], X = [], G = typeof Buffer < "u";
        typeof w > "u" && (w = true), typeof j > "u" && (j = 1 / 0);
        function $(L, V) {
          if (L === null) return null;
          if (V === 0) return L;
          var R, Y;
          if (typeof L != "object") return L;
          if (c(L, f)) R = new f();
          else if (c(L, o)) R = new o();
          else if (c(L, h)) R = new h(function(D, Q) {
            L.then(function(F) {
              D($(F, V - 1));
            }, function(F) {
              Q($(F, V - 1));
            });
          });
          else if (d.__isArray(L)) R = [];
          else if (d.__isRegExp(L)) R = new RegExp(L.source, E(L)), L.lastIndex && (R.lastIndex = L.lastIndex);
          else if (d.__isDate(L)) R = new Date(L.getTime());
          else {
            if (G && Buffer.isBuffer(L)) return Buffer.allocUnsafe ? R = Buffer.allocUnsafe(L.length) : R = new Buffer(L.length), L.copy(R), R;
            c(L, Error) ? R = Object.create(L) : typeof W > "u" ? (Y = Object.getPrototypeOf(L), R = Object.create(Y)) : (R = Object.create(W), Y = W);
          }
          if (w) {
            var tt = Z.indexOf(L);
            if (tt != -1) return X[tt];
            Z.push(L), X.push(R);
          }
          c(L, f) && L.forEach(function(D, Q) {
            var F = $(Q, V - 1), P = $(D, V - 1);
            R.set(F, P);
          }), c(L, o) && L.forEach(function(D) {
            var Q = $(D, V - 1);
            R.add(Q);
          });
          for (var I in L) {
            var rt;
            Y && (rt = Object.getOwnPropertyDescriptor(Y, I)), !(rt && rt.set == null) && (R[I] = $(L[I], V - 1));
          }
          if (Object.getOwnPropertySymbols) for (var ft = Object.getOwnPropertySymbols(L), I = 0; I < ft.length; I++) {
            var wt = ft[I], O = Object.getOwnPropertyDescriptor(L, wt);
            O && !O.enumerable && !lt || (R[wt] = $(L[wt], V - 1), O.enumerable || Object.defineProperty(R, wt, { enumerable: false }));
          }
          if (lt) for (var J = Object.getOwnPropertyNames(L), I = 0; I < J.length; I++) {
            var g = J[I], O = Object.getOwnPropertyDescriptor(L, g);
            O && O.enumerable || (R[g] = $(L[g], V - 1), Object.defineProperty(R, g, { enumerable: false }));
          }
          return R;
        }
        return $(z, j);
      }
      d.clonePrototype = function(w) {
        if (w === null) return null;
        var j = function() {
        };
        return j.prototype = w, new j();
      };
      function y(z) {
        return Object.prototype.toString.call(z);
      }
      d.__objToStr = y;
      function v(z) {
        return typeof z == "object" && y(z) === "[object Date]";
      }
      d.__isDate = v;
      function p(z) {
        return typeof z == "object" && y(z) === "[object Array]";
      }
      d.__isArray = p;
      function S(z) {
        return typeof z == "object" && y(z) === "[object RegExp]";
      }
      d.__isRegExp = S;
      function E(z) {
        var w = "";
        return z.global && (w += "g"), z.ignoreCase && (w += "i"), z.multiline && (w += "m"), w;
      }
      return d.__getRegExpFlags = E, d;
    })();
    l3.exports && (l3.exports = i);
  })(Yf)), Yf.exports;
}
var Yb = jb();
const ae = g0(Yb);
var Ru, Gb = new Uint8Array(16);
function Lb() {
  if (!Ru && (Ru = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto < "u" && typeof msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto), !Ru)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Ru(Gb);
}
const Xb = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
function Qb(l3) {
  return typeof l3 == "string" && Xb.test(l3);
}
var Pt = [];
for (var Gf = 0; Gf < 256; ++Gf) Pt.push((Gf + 256).toString(16).substr(1));
function Vb(l3) {
  var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, c = (Pt[l3[i + 0]] + Pt[l3[i + 1]] + Pt[l3[i + 2]] + Pt[l3[i + 3]] + "-" + Pt[l3[i + 4]] + Pt[l3[i + 5]] + "-" + Pt[l3[i + 6]] + Pt[l3[i + 7]] + "-" + Pt[l3[i + 8]] + Pt[l3[i + 9]] + "-" + Pt[l3[i + 10]] + Pt[l3[i + 11]] + Pt[l3[i + 12]] + Pt[l3[i + 13]] + Pt[l3[i + 14]] + Pt[l3[i + 15]]).toLowerCase();
  if (!Qb(c)) throw TypeError("Stringified UUID is invalid");
  return c;
}
function Lf(l3, i, c) {
  l3 = l3 || {};
  var f = l3.random || (l3.rng || Lb)();
  return f[6] = f[6] & 15 | 64, f[8] = f[8] & 63 | 128, Vb(f);
}
var Uu = { exports: {} }, Xf = { exports: {} }, Qf, Fm;
function Zb() {
  if (Fm) return Qf;
  Fm = 1;
  var l3 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Qf = l3, Qf;
}
var Vf, Im;
function Kb() {
  if (Im) return Vf;
  Im = 1;
  var l3 = Zb();
  function i() {
  }
  function c() {
  }
  return c.resetWarningCache = i, Vf = function() {
    function f(d, y, v, p, S, E) {
      if (E !== l3) {
        var z = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
        throw z.name = "Invariant Violation", z;
      }
    }
    f.isRequired = f;
    function o() {
      return f;
    }
    var h = { array: f, bigint: f, bool: f, func: f, number: f, object: f, string: f, symbol: f, any: f, arrayOf: o, element: f, elementType: f, instanceOf: o, node: f, objectOf: o, oneOf: o, oneOfType: o, shape: o, exact: o, checkPropTypes: c, resetWarningCache: i };
    return h.PropTypes = h, h;
  }, Vf;
}
var Pm;
function ir() {
  return Pm || (Pm = 1, Xf.exports = Kb()()), Xf.exports;
}
var qu = { exports: {} }, Zf, t0;
function Jb() {
  return t0 || (t0 = 1, Zf = function() {
    for (var i = arguments.length, c = [], f = 0; f < i; f++) c[f] = arguments[f];
    if (c = c.filter(function(o) {
      return o != null;
    }), c.length !== 0) return c.length === 1 ? c[0] : c.reduce(function(o, h) {
      return function() {
        o.apply(this, arguments), h.apply(this, arguments);
      };
    });
  }), Zf;
}
var Kf, e0;
function kb() {
  if (e0) return Kf;
  e0 = 1;
  var l3 = function() {
  };
  return Kf = l3, Kf;
}
function K0() {
  var l3 = this.constructor.getDerivedStateFromProps(this.props, this.state);
  l3 != null && this.setState(l3);
}
function J0(l3) {
  function i(c) {
    var f = this.constructor.getDerivedStateFromProps(l3, c);
    return f ?? null;
  }
  this.setState(i.bind(this));
}
function k0(l3, i) {
  try {
    var c = this.props, f = this.state;
    this.props = l3, this.state = i, this.__reactInternalSnapshotFlag = true, this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(c, f);
  } finally {
    this.props = c, this.state = f;
  }
}
K0.__suppressDeprecationWarning = true;
J0.__suppressDeprecationWarning = true;
k0.__suppressDeprecationWarning = true;
function Wb(l3) {
  var i = l3.prototype;
  if (!i || !i.isReactComponent) throw new Error("Can only polyfill class components");
  if (typeof l3.getDerivedStateFromProps != "function" && typeof i.getSnapshotBeforeUpdate != "function") return l3;
  var c = null, f = null, o = null;
  if (typeof i.componentWillMount == "function" ? c = "componentWillMount" : typeof i.UNSAFE_componentWillMount == "function" && (c = "UNSAFE_componentWillMount"), typeof i.componentWillReceiveProps == "function" ? f = "componentWillReceiveProps" : typeof i.UNSAFE_componentWillReceiveProps == "function" && (f = "UNSAFE_componentWillReceiveProps"), typeof i.componentWillUpdate == "function" ? o = "componentWillUpdate" : typeof i.UNSAFE_componentWillUpdate == "function" && (o = "UNSAFE_componentWillUpdate"), c !== null || f !== null || o !== null) {
    var h = l3.displayName || l3.name, d = typeof l3.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
    throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

` + h + " uses " + d + " but also contains the following legacy lifecycles:" + (c !== null ? `
  ` + c : "") + (f !== null ? `
  ` + f : "") + (o !== null ? `
  ` + o : "") + `

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`);
  }
  if (typeof l3.getDerivedStateFromProps == "function" && (i.componentWillMount = K0, i.componentWillReceiveProps = J0), typeof i.getSnapshotBeforeUpdate == "function") {
    if (typeof i.componentDidUpdate != "function") throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");
    i.componentWillUpdate = k0;
    var y = i.componentDidUpdate;
    i.componentDidUpdate = function(p, S, E) {
      var z = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : E;
      y.call(this, p, S, z);
    };
  }
  return l3;
}
const $b = Object.freeze(Object.defineProperty({ __proto__: null, polyfill: Wb }, Symbol.toStringTag, { value: "Module" })), Fb = Av($b);
var Il = {}, n0;
function Ib() {
  if (n0) return Il;
  n0 = 1, Il.__esModule = true, Il.getChildMapping = i, Il.mergeChildMappings = c;
  var l3 = Ln();
  function i(f) {
    if (!f) return f;
    var o = {};
    return l3.Children.map(f, function(h) {
      return h;
    }).forEach(function(h) {
      o[h.key] = h;
    }), o;
  }
  function c(f, o) {
    f = f || {}, o = o || {};
    function h(w) {
      return o.hasOwnProperty(w) ? o[w] : f[w];
    }
    var d = {}, y = [];
    for (var v in f) o.hasOwnProperty(v) ? y.length && (d[v] = y, y = []) : y.push(v);
    var p = void 0, S = {};
    for (var E in o) {
      if (d.hasOwnProperty(E)) for (p = 0; p < d[E].length; p++) {
        var z = d[E][p];
        S[d[E][p]] = h(z);
      }
      S[E] = h(E);
    }
    for (p = 0; p < y.length; p++) S[y[p]] = h(y[p]);
    return S;
  }
  return Il;
}
var a0;
function W0() {
  return a0 || (a0 = 1, (function(l3, i) {
    i.__esModule = true;
    var c = Object.assign || function(X) {
      for (var G = 1; G < arguments.length; G++) {
        var $ = arguments[G];
        for (var L in $) Object.prototype.hasOwnProperty.call($, L) && (X[L] = $[L]);
      }
      return X;
    }, f = Jb(), o = z(f), h = Ln(), d = z(h), y = ir(), v = z(y), p = kb();
    z(p);
    var S = Fb, E = Ib();
    function z(X) {
      return X && X.__esModule ? X : { default: X };
    }
    function w(X, G) {
      if (!(X instanceof G)) throw new TypeError("Cannot call a class as a function");
    }
    function j(X, G) {
      if (!X) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return G && (typeof G == "object" || typeof G == "function") ? G : X;
    }
    function W(X, G) {
      if (typeof G != "function" && G !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof G);
      X.prototype = Object.create(G && G.prototype, { constructor: { value: X, enumerable: false, writable: true, configurable: true } }), G && (Object.setPrototypeOf ? Object.setPrototypeOf(X, G) : X.__proto__ = G);
    }
    v.default.any, v.default.func, v.default.node;
    var lt = { component: "span", childFactory: function(G) {
      return G;
    } }, Z = (function(X) {
      W(G, X);
      function G($, L) {
        w(this, G);
        var V = j(this, X.call(this, $, L));
        return V.performAppear = function(R, Y) {
          V.currentlyTransitioningKeys[R] = true, Y.componentWillAppear ? Y.componentWillAppear(V._handleDoneAppearing.bind(V, R, Y)) : V._handleDoneAppearing(R, Y);
        }, V._handleDoneAppearing = function(R, Y) {
          Y && Y.componentDidAppear && Y.componentDidAppear(), delete V.currentlyTransitioningKeys[R];
          var tt = (0, E.getChildMapping)(V.props.children);
          (!tt || !tt.hasOwnProperty(R)) && V.performLeave(R, Y);
        }, V.performEnter = function(R, Y) {
          V.currentlyTransitioningKeys[R] = true, Y.componentWillEnter ? Y.componentWillEnter(V._handleDoneEntering.bind(V, R, Y)) : V._handleDoneEntering(R, Y);
        }, V._handleDoneEntering = function(R, Y) {
          Y && Y.componentDidEnter && Y.componentDidEnter(), delete V.currentlyTransitioningKeys[R];
          var tt = (0, E.getChildMapping)(V.props.children);
          (!tt || !tt.hasOwnProperty(R)) && V.performLeave(R, Y);
        }, V.performLeave = function(R, Y) {
          V.currentlyTransitioningKeys[R] = true, Y && Y.componentWillLeave ? Y.componentWillLeave(V._handleDoneLeaving.bind(V, R, Y)) : V._handleDoneLeaving(R, Y);
        }, V._handleDoneLeaving = function(R, Y) {
          Y && Y.componentDidLeave && Y.componentDidLeave(), delete V.currentlyTransitioningKeys[R];
          var tt = (0, E.getChildMapping)(V.props.children);
          tt && tt.hasOwnProperty(R) ? V.keysToEnter.push(R) : V.setState(function(I) {
            var rt = c({}, I.children);
            return delete rt[R], { children: rt };
          });
        }, V.childRefs = /* @__PURE__ */ Object.create(null), V.currentlyTransitioningKeys = {}, V.keysToEnter = [], V.keysToLeave = [], V.state = { children: (0, E.getChildMapping)($.children) }, V;
      }
      return G.prototype.componentDidMount = function() {
        var L = this.state.children;
        for (var V in L) L[V] && this.performAppear(V, this.childRefs[V]);
      }, G.getDerivedStateFromProps = function(L, V) {
        var R = (0, E.getChildMapping)(L.children), Y = V.children;
        return { children: (0, E.mergeChildMappings)(Y, R) };
      }, G.prototype.componentDidUpdate = function(L, V) {
        var R = this, Y = (0, E.getChildMapping)(this.props.children), tt = V.children;
        for (var I in Y) {
          var rt = tt && tt.hasOwnProperty(I);
          Y[I] && !rt && !this.currentlyTransitioningKeys[I] && this.keysToEnter.push(I);
        }
        for (var ft in tt) {
          var wt = Y && Y.hasOwnProperty(ft);
          tt[ft] && !wt && !this.currentlyTransitioningKeys[ft] && this.keysToLeave.push(ft);
        }
        var O = this.keysToEnter;
        this.keysToEnter = [], O.forEach(function(g) {
          return R.performEnter(g, R.childRefs[g]);
        });
        var J = this.keysToLeave;
        this.keysToLeave = [], J.forEach(function(g) {
          return R.performLeave(g, R.childRefs[g]);
        });
      }, G.prototype.render = function() {
        var L = this, V = [], R = function(rt) {
          var ft = L.state.children[rt];
          if (ft) {
            var wt = typeof ft.ref != "string", O = L.props.childFactory(ft), J = function(D) {
              L.childRefs[rt] = D;
            };
            O === ft && wt && (J = (0, o.default)(ft.ref, J)), V.push(d.default.cloneElement(O, { key: rt, ref: J }));
          }
        };
        for (var Y in this.state.children) R(Y);
        var tt = c({}, this.props);
        return delete tt.transitionLeave, delete tt.transitionName, delete tt.transitionAppear, delete tt.transitionEnter, delete tt.childFactory, delete tt.transitionLeaveTimeout, delete tt.transitionEnterTimeout, delete tt.transitionAppearTimeout, delete tt.component, d.default.createElement(this.props.component, tt, V);
      }, G;
    })(d.default.Component);
    Z.displayName = "TransitionGroup", Z.propTypes = {}, Z.defaultProps = lt, i.default = (0, S.polyfill)(Z), l3.exports = i.default;
  })(qu, qu.exports)), qu.exports;
}
var Hu = { exports: {} }, Bu = { exports: {} }, Jf = { exports: {} }, l0;
function vo() {
  return l0 || (l0 = 1, (function(l3) {
    function i(c) {
      return c && c.__esModule ? c : { default: c };
    }
    l3.exports = i, l3.exports.__esModule = true, l3.exports.default = l3.exports;
  })(Jf)), Jf.exports;
}
var ju = { exports: {} }, i0;
function Pb() {
  return i0 || (i0 = 1, (function(l3, i) {
    i.__esModule = true, i.default = c;
    function c(f, o) {
      return f.classList ? !!o && f.classList.contains(o) : (" " + (f.className.baseVal || f.className) + " ").indexOf(" " + o + " ") !== -1;
    }
    l3.exports = i.default;
  })(ju, ju.exports)), ju.exports;
}
var u0;
function tS() {
  return u0 || (u0 = 1, (function(l3, i) {
    var c = vo();
    i.__esModule = true, i.default = o;
    var f = c(Pb());
    function o(h, d) {
      h.classList ? h.classList.add(d) : (0, f.default)(h, d) || (typeof h.className == "string" ? h.className = h.className + " " + d : h.setAttribute("class", (h.className && h.className.baseVal || "") + " " + d));
    }
    l3.exports = i.default;
  })(Bu, Bu.exports)), Bu.exports;
}
var kf, r0;
function eS() {
  if (r0) return kf;
  r0 = 1;
  function l3(i, c) {
    return i.replace(new RegExp("(^|\\s)" + c + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
  }
  return kf = function(c, f) {
    c.classList ? c.classList.remove(f) : typeof c.className == "string" ? c.className = l3(c.className, f) : c.setAttribute("class", l3(c.className && c.className.baseVal || "", f));
  }, kf;
}
var Yu = { exports: {} }, Gu = { exports: {} }, c0;
function $0() {
  return c0 || (c0 = 1, (function(l3, i) {
    i.__esModule = true, i.default = void 0;
    var c = !!(typeof window < "u" && window.document && window.document.createElement);
    i.default = c, l3.exports = i.default;
  })(Gu, Gu.exports)), Gu.exports;
}
var f0;
function nS() {
  return f0 || (f0 = 1, (function(l3, i) {
    var c = vo();
    i.__esModule = true, i.default = void 0;
    var f = c($0()), o = ["", "webkit", "moz", "o", "ms"], h = "clearTimeout", d = S, y, v = function(w, j) {
      return w + (w ? j[0].toUpperCase() + j.substr(1) : j) + "AnimationFrame";
    };
    f.default && o.some(function(z) {
      var w = v(z, "request");
      if (w in window) return h = v(z, "cancel"), d = function(W) {
        return window[w](W);
      };
    });
    var p = (/* @__PURE__ */ new Date()).getTime();
    function S(z) {
      var w = (/* @__PURE__ */ new Date()).getTime(), j = Math.max(0, 16 - (w - p)), W = setTimeout(z, j);
      return p = w, W;
    }
    y = function(w) {
      return d(w);
    }, y.cancel = function(z) {
      window[h] && typeof window[h] == "function" && window[h](z);
    };
    var E = y;
    i.default = E, l3.exports = i.default;
  })(Yu, Yu.exports)), Yu.exports;
}
var mt = {}, o0;
function aS() {
  if (o0) return mt;
  o0 = 1;
  var l3 = vo();
  mt.__esModule = true, mt.default = mt.animationEnd = mt.animationDelay = mt.animationTiming = mt.animationDuration = mt.animationName = mt.transitionEnd = mt.transitionDuration = mt.transitionDelay = mt.transitionTiming = mt.transitionProperty = mt.transform = void 0;
  var i = l3($0()), c = "transform";
  mt.transform = c;
  var f, o, h;
  mt.animationEnd = h, mt.transitionEnd = o;
  var d, y, v, p;
  mt.transitionDelay = p, mt.transitionTiming = v, mt.transitionDuration = y, mt.transitionProperty = d;
  var S, E, z, w;
  if (mt.animationDelay = w, mt.animationTiming = z, mt.animationDuration = E, mt.animationName = S, i.default) {
    var j = lt();
    f = j.prefix, mt.transitionEnd = o = j.transitionEnd, mt.animationEnd = h = j.animationEnd, mt.transform = c = f + "-" + c, mt.transitionProperty = d = f + "-transition-property", mt.transitionDuration = y = f + "-transition-duration", mt.transitionDelay = p = f + "-transition-delay", mt.transitionTiming = v = f + "-transition-timing-function", mt.animationName = S = f + "-animation-name", mt.animationDuration = E = f + "-animation-duration", mt.animationTiming = z = f + "-animation-delay", mt.animationDelay = w = f + "-animation-timing-function";
  }
  var W = { transform: c, end: o, property: d, timing: v, delay: p, duration: y };
  mt.default = W;
  function lt() {
    for (var Z = document.createElement("div").style, X = { O: function(I) {
      return "o" + I.toLowerCase();
    }, Moz: function(I) {
      return I.toLowerCase();
    }, Webkit: function(I) {
      return "webkit" + I;
    }, ms: function(I) {
      return "MS" + I;
    } }, G = Object.keys(X), $, L, V = "", R = 0; R < G.length; R++) {
      var Y = G[R];
      if (Y + "TransitionProperty" in Z) {
        V = "-" + Y.toLowerCase(), $ = X[Y]("TransitionEnd"), L = X[Y]("AnimationEnd");
        break;
      }
    }
    return !$ && "transitionProperty" in Z && ($ = "transitionend"), !L && "animationName" in Z && (L = "animationend"), Z = null, { animationEnd: L, transitionEnd: $, prefix: V };
  }
  return mt;
}
var Fa = {}, s0;
function F0() {
  if (s0) return Fa;
  s0 = 1, Fa.__esModule = true, Fa.nameShape = void 0, Fa.transitionTimeout = o;
  var l3 = Ln();
  f(l3);
  var i = ir(), c = f(i);
  function f(h) {
    return h && h.__esModule ? h : { default: h };
  }
  function o(h) {
    var d = "transition" + h + "Timeout", y = "transition" + h;
    return function(v) {
      if (v[y]) {
        if (v[d] == null) return new Error(d + " wasn't supplied to CSSTransitionGroup: this can cause unreliable animations and won't be supported in a future version of React. See https://fb.me/react-animation-transition-group-timeout for more information.");
        if (typeof v[d] != "number") return new Error(d + " must be a number (in milliseconds)");
      }
      return null;
    };
  }
  return Fa.nameShape = c.default.oneOfType([c.default.string, c.default.shape({ enter: c.default.string, leave: c.default.string, active: c.default.string }), c.default.shape({ enter: c.default.string, enterActive: c.default.string, leave: c.default.string, leaveActive: c.default.string, appear: c.default.string, appearActive: c.default.string })]), Fa;
}
var h0;
function lS() {
  return h0 || (h0 = 1, (function(l3, i) {
    i.__esModule = true;
    var c = Object.assign || function(R) {
      for (var Y = 1; Y < arguments.length; Y++) {
        var tt = arguments[Y];
        for (var I in tt) Object.prototype.hasOwnProperty.call(tt, I) && (R[I] = tt[I]);
      }
      return R;
    }, f = tS(), o = lt(f), h = eS(), d = lt(h), y = nS(), v = lt(y), p = aS(), S = Ln(), E = lt(S), z = ir(), w = lt(z), j = _0(), W = F0();
    function lt(R) {
      return R && R.__esModule ? R : { default: R };
    }
    function Z(R, Y) {
      if (!(R instanceof Y)) throw new TypeError("Cannot call a class as a function");
    }
    function X(R, Y) {
      if (!R) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return Y && (typeof Y == "object" || typeof Y == "function") ? Y : R;
    }
    function G(R, Y) {
      if (typeof Y != "function" && Y !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof Y);
      R.prototype = Object.create(Y && Y.prototype, { constructor: { value: R, enumerable: false, writable: true, configurable: true } }), Y && (Object.setPrototypeOf ? Object.setPrototypeOf(R, Y) : R.__proto__ = Y);
    }
    var $ = [];
    p.transitionEnd && $.push(p.transitionEnd), p.animationEnd && $.push(p.animationEnd);
    function L(R, Y) {
      return $.length ? $.forEach(function(tt) {
        return R.addEventListener(tt, Y, false);
      }) : setTimeout(Y, 0), function() {
        $.length && $.forEach(function(tt) {
          return R.removeEventListener(tt, Y, false);
        });
      };
    }
    w.default.node, W.nameShape.isRequired, w.default.bool, w.default.bool, w.default.bool, w.default.number, w.default.number, w.default.number;
    var V = (function(R) {
      G(Y, R);
      function Y(tt, I) {
        Z(this, Y);
        var rt = X(this, R.call(this, tt, I));
        return rt.componentWillAppear = function(ft) {
          rt.props.appear ? rt.transition("appear", ft, rt.props.appearTimeout) : ft();
        }, rt.componentWillEnter = function(ft) {
          rt.props.enter ? rt.transition("enter", ft, rt.props.enterTimeout) : ft();
        }, rt.componentWillLeave = function(ft) {
          rt.props.leave ? rt.transition("leave", ft, rt.props.leaveTimeout) : ft();
        }, rt.classNameAndNodeQueue = [], rt.transitionTimeouts = [], rt;
      }
      return Y.prototype.componentWillUnmount = function() {
        this.unmounted = true, this.timeout && clearTimeout(this.timeout), this.transitionTimeouts.forEach(function(I) {
          clearTimeout(I);
        }), this.classNameAndNodeQueue.length = 0;
      }, Y.prototype.transition = function(I, rt, ft) {
        var wt = (0, j.findDOMNode)(this);
        if (!wt) {
          rt && rt();
          return;
        }
        var O = this.props.name[I] || this.props.name + "-" + I, J = this.props.name[I + "Active"] || O + "-active", g = null, D = void 0;
        (0, o.default)(wt, O), this.queueClassAndNode(J, wt);
        var Q = function(P) {
          P && P.target !== wt || (clearTimeout(g), D && D(), (0, d.default)(wt, O), (0, d.default)(wt, J), D && D(), rt && rt());
        };
        ft ? (g = setTimeout(Q, ft), this.transitionTimeouts.push(g)) : p.transitionEnd && (D = L(wt, Q));
      }, Y.prototype.queueClassAndNode = function(I, rt) {
        var ft = this;
        this.classNameAndNodeQueue.push({ className: I, node: rt }), this.rafHandle || (this.rafHandle = (0, v.default)(function() {
          return ft.flushClassNameAndNodeQueue();
        }));
      }, Y.prototype.flushClassNameAndNodeQueue = function() {
        this.unmounted || this.classNameAndNodeQueue.forEach(function(I) {
          I.node.scrollTop, (0, o.default)(I.node, I.className);
        }), this.classNameAndNodeQueue.length = 0, this.rafHandle = null;
      }, Y.prototype.render = function() {
        var I = c({}, this.props);
        return delete I.name, delete I.appear, delete I.enter, delete I.leave, delete I.appearTimeout, delete I.enterTimeout, delete I.leaveTimeout, delete I.children, E.default.cloneElement(E.default.Children.only(this.props.children), I);
      }, Y;
    })(E.default.Component);
    V.displayName = "CSSTransitionGroupChild", V.propTypes = {}, i.default = V, l3.exports = i.default;
  })(Hu, Hu.exports)), Hu.exports;
}
var d0;
function iS() {
  return d0 || (d0 = 1, (function(l3, i) {
    i.__esModule = true;
    var c = Object.assign || function(X) {
      for (var G = 1; G < arguments.length; G++) {
        var $ = arguments[G];
        for (var L in $) Object.prototype.hasOwnProperty.call($, L) && (X[L] = $[L]);
      }
      return X;
    }, f = Ln(), o = z(f), h = ir(), d = z(h), y = W0(), v = z(y), p = lS(), S = z(p), E = F0();
    function z(X) {
      return X && X.__esModule ? X : { default: X };
    }
    function w(X, G) {
      if (!(X instanceof G)) throw new TypeError("Cannot call a class as a function");
    }
    function j(X, G) {
      if (!X) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return G && (typeof G == "object" || typeof G == "function") ? G : X;
    }
    function W(X, G) {
      if (typeof G != "function" && G !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof G);
      X.prototype = Object.create(G && G.prototype, { constructor: { value: X, enumerable: false, writable: true, configurable: true } }), G && (Object.setPrototypeOf ? Object.setPrototypeOf(X, G) : X.__proto__ = G);
    }
    E.nameShape.isRequired, d.default.bool, d.default.bool, d.default.bool, (0, E.transitionTimeout)("Appear"), (0, E.transitionTimeout)("Enter"), (0, E.transitionTimeout)("Leave");
    var lt = { transitionAppear: false, transitionEnter: true, transitionLeave: true }, Z = (function(X) {
      W(G, X);
      function G() {
        var $, L, V;
        w(this, G);
        for (var R = arguments.length, Y = Array(R), tt = 0; tt < R; tt++) Y[tt] = arguments[tt];
        return V = ($ = (L = j(this, X.call.apply(X, [this].concat(Y))), L), L._wrapChild = function(I) {
          return o.default.createElement(S.default, { name: L.props.transitionName, appear: L.props.transitionAppear, enter: L.props.transitionEnter, leave: L.props.transitionLeave, appearTimeout: L.props.transitionAppearTimeout, enterTimeout: L.props.transitionEnterTimeout, leaveTimeout: L.props.transitionLeaveTimeout }, I);
        }, $), j(L, V);
      }
      return G.prototype.render = function() {
        return o.default.createElement(v.default, c({}, this.props, { childFactory: this._wrapChild }));
      }, G;
    })(o.default.Component);
    Z.displayName = "CSSTransitionGroup", Z.propTypes = {}, Z.defaultProps = lt, i.default = Z, l3.exports = i.default;
  })(Uu, Uu.exports)), Uu.exports;
}
var Wf, m0;
function uS() {
  if (m0) return Wf;
  m0 = 1;
  var l3 = iS(), i = o(l3), c = W0(), f = o(c);
  function o(h) {
    return h && h.__esModule ? h : { default: h };
  }
  return Wf = { TransitionGroup: f.default, CSSTransitionGroup: i.default }, Wf;
}
var rS = uS();
const cS = (l3) => l3.enableLegacyTransitions ? Vt.createElement(rS.TransitionGroup, { component: l3.component, className: l3.className, transform: l3.transform }, l3.children) : Vt.createElement("g", { className: l3.className, transform: l3.transform }, l3.children), fS = 15, p0 = { title: { textAnchor: "start", x: 40 }, attribute: { x: 40, dy: "1.2em" } }, oS = ({ nodeDatum: l3, toggleNode: i, onNodeClick: c, onNodeMouseOver: f, onNodeMouseOut: o }) => Vt.createElement(Vt.Fragment, null, Vt.createElement("circle", { r: fS, onClick: (h) => {
  i(), c(h);
}, onMouseOver: f, onMouseOut: o }), Vt.createElement("g", { className: "rd3t-label" }, Vt.createElement("text", Object.assign({ className: "rd3t-label__title" }, p0.title), l3.name), Vt.createElement("text", { className: "rd3t-label__attributes" }, l3.attributes && Object.entries(l3.attributes).map(([h, d], y) => Vt.createElement("tspan", Object.assign({ key: `${h}-${y}` }, p0.attribute), h, ": ", typeof d == "boolean" ? d.toString() : d)))));
class sS extends Vt.Component {
  constructor() {
    super(...arguments), this.nodeRef = null, this.state = { transform: this.setTransform(this.props.position, this.props.parent, this.props.orientation, true), initialStyle: { opacity: 0 }, wasClicked: false }, this.shouldNodeTransform = (i, c, f, o) => c.subscriptions !== i.subscriptions || c.position.x !== i.position.x || c.position.y !== i.position.y || c.orientation !== i.orientation || o.wasClicked !== f.wasClicked, this.renderNodeElement = () => {
      const { data: i, hierarchyPointNode: c, renderCustomNodeElement: f } = this.props, o = typeof f == "function" ? f : oS, h = { hierarchyPointNode: c, nodeDatum: i, toggleNode: this.handleNodeToggle, onNodeClick: this.handleOnClick, onNodeMouseOver: this.handleOnMouseOver, onNodeMouseOut: this.handleOnMouseOut, addChildren: this.handleAddChildren };
      return o(h);
    }, this.handleNodeToggle = () => {
      this.setState({ wasClicked: true }), this.props.onNodeToggle(this.props.data.__rd3t.id);
    }, this.handleOnClick = (i) => {
      this.setState({ wasClicked: true }), this.props.onNodeClick(this.props.hierarchyPointNode, i);
    }, this.handleOnMouseOver = (i) => {
      this.props.onNodeMouseOver(this.props.hierarchyPointNode, i);
    }, this.handleOnMouseOut = (i) => {
      this.props.onNodeMouseOut(this.props.hierarchyPointNode, i);
    }, this.handleAddChildren = (i) => {
      this.props.handleAddChildrenToNode(this.props.data.__rd3t.id, i);
    };
  }
  componentDidMount() {
    this.commitTransform();
  }
  componentDidUpdate() {
    this.state.wasClicked && (this.props.centerNode(this.props.hierarchyPointNode), this.setState({ wasClicked: false })), this.commitTransform();
  }
  shouldComponentUpdate(i, c) {
    return this.shouldNodeTransform(this.props, i, this.state, c);
  }
  setTransform(i, c, f, o = false) {
    if (o) {
      const h = c != null, d = h ? c.x : 0, y = h ? c.y : 0;
      return f === "horizontal" ? `translate(${y},${d})` : `translate(${d},${y})`;
    }
    return f === "horizontal" ? `translate(${i.y},${i.x})` : `translate(${i.x},${i.y})`;
  }
  applyTransform(i, c, f = 1, o = () => {
  }) {
    this.props.enableLegacyTransitions ? le(this.nodeRef).transition().duration(c).attr("transform", i).style("opacity", f).on("end", o) : (le(this.nodeRef).attr("transform", i).style("opacity", f), o());
  }
  commitTransform() {
    const { orientation: i, transitionDuration: c, position: f, parent: o } = this.props, h = this.setTransform(f, o, i);
    this.applyTransform(h, c);
  }
  componentWillLeave(i) {
    const { orientation: c, transitionDuration: f, position: o, parent: h } = this.props, d = this.setTransform(o, h, c, true);
    this.applyTransform(d, f, 0, i);
  }
  render() {
    const { data: i, nodeClassName: c } = this.props;
    return Vt.createElement("g", { id: i.__rd3t.id, ref: (f) => {
      this.nodeRef = f;
    }, style: this.state.initialStyle, className: [i.children && i.children.length > 0 ? "rd3t-node" : "rd3t-leaf-node", c].join(" ").trim(), transform: this.state.transform }, this.renderNodeElement());
  }
}
var io = Math.PI, uo = 2 * io, fa = 1e-6, hS = uo - fa;
function ro() {
  this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "";
}
function I0() {
  return new ro();
}
ro.prototype = I0.prototype = { constructor: ro, moveTo: function(l3, i) {
  this._ += "M" + (this._x0 = this._x1 = +l3) + "," + (this._y0 = this._y1 = +i);
}, closePath: function() {
  this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z");
}, lineTo: function(l3, i) {
  this._ += "L" + (this._x1 = +l3) + "," + (this._y1 = +i);
}, quadraticCurveTo: function(l3, i, c, f) {
  this._ += "Q" + +l3 + "," + +i + "," + (this._x1 = +c) + "," + (this._y1 = +f);
}, bezierCurveTo: function(l3, i, c, f, o, h) {
  this._ += "C" + +l3 + "," + +i + "," + +c + "," + +f + "," + (this._x1 = +o) + "," + (this._y1 = +h);
}, arcTo: function(l3, i, c, f, o) {
  l3 = +l3, i = +i, c = +c, f = +f, o = +o;
  var h = this._x1, d = this._y1, y = c - l3, v = f - i, p = h - l3, S = d - i, E = p * p + S * S;
  if (o < 0) throw new Error("negative radius: " + o);
  if (this._x1 === null) this._ += "M" + (this._x1 = l3) + "," + (this._y1 = i);
  else if (E > fa) if (!(Math.abs(S * y - v * p) > fa) || !o) this._ += "L" + (this._x1 = l3) + "," + (this._y1 = i);
  else {
    var z = c - h, w = f - d, j = y * y + v * v, W = z * z + w * w, lt = Math.sqrt(j), Z = Math.sqrt(E), X = o * Math.tan((io - Math.acos((j + E - W) / (2 * lt * Z))) / 2), G = X / Z, $ = X / lt;
    Math.abs(G - 1) > fa && (this._ += "L" + (l3 + G * p) + "," + (i + G * S)), this._ += "A" + o + "," + o + ",0,0," + +(S * z > p * w) + "," + (this._x1 = l3 + $ * y) + "," + (this._y1 = i + $ * v);
  }
}, arc: function(l3, i, c, f, o, h) {
  l3 = +l3, i = +i, c = +c, h = !!h;
  var d = c * Math.cos(f), y = c * Math.sin(f), v = l3 + d, p = i + y, S = 1 ^ h, E = h ? f - o : o - f;
  if (c < 0) throw new Error("negative radius: " + c);
  this._x1 === null ? this._ += "M" + v + "," + p : (Math.abs(this._x1 - v) > fa || Math.abs(this._y1 - p) > fa) && (this._ += "L" + v + "," + p), c && (E < 0 && (E = E % uo + uo), E > hS ? this._ += "A" + c + "," + c + ",0,1," + S + "," + (l3 - d) + "," + (i - y) + "A" + c + "," + c + ",0,1," + S + "," + (this._x1 = v) + "," + (this._y1 = p) : E > fa && (this._ += "A" + c + "," + c + ",0," + +(E >= io) + "," + S + "," + (this._x1 = l3 + c * Math.cos(o)) + "," + (this._y1 = i + c * Math.sin(o))));
}, rect: function(l3, i, c, f) {
  this._ += "M" + (this._x0 = this._x1 = +l3) + "," + (this._y0 = this._y1 = +i) + "h" + +c + "v" + +f + "h" + -c + "Z";
}, toString: function() {
  return this._;
} };
function y0(l3) {
  return function() {
    return l3;
  };
}
function dS(l3) {
  return l3[0];
}
function mS(l3) {
  return l3[1];
}
var pS = Array.prototype.slice;
function yS(l3) {
  return l3.source;
}
function vS(l3) {
  return l3.target;
}
function P0(l3) {
  var i = yS, c = vS, f = dS, o = mS, h = null;
  function d() {
    var y, v = pS.call(arguments), p = i.apply(this, v), S = c.apply(this, v);
    if (h || (h = y = I0()), l3(h, +f.apply(this, (v[0] = p, v)), +o.apply(this, v), +f.apply(this, (v[0] = S, v)), +o.apply(this, v)), y) return h = null, y + "" || null;
  }
  return d.source = function(y) {
    return arguments.length ? (i = y, d) : i;
  }, d.target = function(y) {
    return arguments.length ? (c = y, d) : c;
  }, d.x = function(y) {
    return arguments.length ? (f = typeof y == "function" ? y : y0(+y), d) : f;
  }, d.y = function(y) {
    return arguments.length ? (o = typeof y == "function" ? y : y0(+y), d) : o;
  }, d.context = function(y) {
    return arguments.length ? (h = y ?? null, d) : h;
  }, d;
}
function gS(l3, i, c, f, o) {
  l3.moveTo(i, c), l3.bezierCurveTo(i = (i + f) / 2, c, i, o, f, o);
}
function _S(l3, i, c, f, o) {
  l3.moveTo(i, c), l3.bezierCurveTo(i, c = (c + o) / 2, f, c, f, o);
}
function bS() {
  return P0(gS);
}
function SS() {
  return P0(_S);
}
class TS extends Vt.PureComponent {
  constructor() {
    super(...arguments), this.linkRef = null, this.state = { initialStyle: { opacity: 0 } }, this.handleOnClick = (i) => {
      this.props.onClick(this.props.linkData.source, this.props.linkData.target, i);
    }, this.handleOnMouseOver = (i) => {
      this.props.onMouseOver(this.props.linkData.source, this.props.linkData.target, i);
    }, this.handleOnMouseOut = (i) => {
      this.props.onMouseOut(this.props.linkData.source, this.props.linkData.target, i);
    };
  }
  componentDidMount() {
    this.applyOpacity(1, this.props.transitionDuration);
  }
  componentWillLeave(i) {
    this.applyOpacity(0, this.props.transitionDuration, i);
  }
  applyOpacity(i, c, f = () => {
  }) {
    this.props.enableLegacyTransitions ? le(this.linkRef).transition().duration(c).style("opacity", i).on("end", f) : (le(this.linkRef).style("opacity", i), f());
  }
  drawStepPath(i, c) {
    const { source: f, target: o } = i, h = o.y - f.y;
    return c === "horizontal" ? `M${f.y},${f.x} H${f.y + h / 2} V${o.x} H${o.y}` : `M${f.x},${f.y} V${f.y + h / 2} H${o.x} V${o.y}`;
  }
  drawDiagonalPath(i, c) {
    const { source: f, target: o } = i;
    return c === "horizontal" ? bS()({ source: [f.y, f.x], target: [o.y, o.x] }) : SS()({ source: [f.x, f.y], target: [o.x, o.y] });
  }
  drawStraightPath(i, c) {
    const { source: f, target: o } = i;
    return c === "horizontal" ? `M${f.y},${f.x}L${o.y},${o.x}` : `M${f.x},${f.y}L${o.x},${o.y}`;
  }
  drawElbowPath(i, c) {
    return c === "horizontal" ? `M${i.source.y},${i.source.x}V${i.target.x}H${i.target.y}` : `M${i.source.x},${i.source.y}V${i.target.y}H${i.target.x}`;
  }
  drawPath() {
    const { linkData: i, orientation: c, pathFunc: f } = this.props;
    return typeof f == "function" ? f(i, c) : f === "elbow" ? this.drawElbowPath(i, c) : f === "straight" ? this.drawStraightPath(i, c) : f === "step" ? this.drawStepPath(i, c) : this.drawDiagonalPath(i, c);
  }
  getClassNames() {
    const { linkData: i, orientation: c, pathClassFunc: f } = this.props, o = ["rd3t-link"];
    return typeof f == "function" && o.push(f(i, c)), o.join(" ").trim();
  }
  render() {
    const { linkData: i } = this.props;
    return Vt.createElement("path", { ref: (c) => {
      this.linkRef = c;
    }, style: Object.assign({}, this.state.initialStyle), className: this.getClassNames(), d: this.drawPath(), onClick: this.handleOnClick, onMouseOver: this.handleOnMouseOver, onMouseOut: this.handleOnMouseOut, "data-source-id": i.source.id, "data-target-id": i.target.id });
  }
}
const ES = `
/* Tree */
.rd3t-tree-container {
  width: 100%;
  height: 100%;
}

.rd3t-grabbable {
  cursor: move; /* fallback if grab cursor is unsupported */
  cursor: grab;
  cursor: -moz-grab;
  cursor: -webkit-grab;
}
.rd3t-grabbable:active {
    cursor: grabbing;
    cursor: -moz-grabbing;
    cursor: -webkit-grabbing;
}

/* Node */
.rd3t-node {
  cursor: pointer;
  fill: #777;
  stroke: #000;
  stroke-width: 2;
}

.rd3t-leaf-node {
  cursor: pointer;
  fill: transparent;
  stroke: #000;
  stroke-width: 1;
}

.rd3t-label__title {
  fill: #000;
  stroke: none;
  font-weight: bolder;
}

.rd3t-label__attributes {
  fill: #777;
  stroke: none;
  font-weight: bolder;
  font-size: smaller;
}

/* Link */
.rd3t-link {
  fill: none;
  stroke: #000;
}
`;
class Ee extends Vt.Component {
  constructor() {
    super(...arguments), this.state = { dataRef: this.props.data, data: Ee.assignInternalProperties(ae(this.props.data)), d3: Ee.calculateD3Geometry(this.props), isTransitioning: false, isInitialRenderForDataset: true, dataKey: this.props.dataKey }, this.internalState = { targetNode: null, isTransitioning: false }, this.svgInstanceRef = `rd3t-svg-${Lf()}`, this.gInstanceRef = `rd3t-g-${Lf()}`, this.handleNodeToggle = (i) => {
      const c = ae(this.state.data), o = this.findNodesById(i, c, [])[0];
      this.props.collapsible && !this.state.isTransitioning && (o.__rd3t.collapsed ? (Ee.expandNode(o), this.props.shouldCollapseNeighborNodes && this.collapseNeighborNodes(o, c)) : Ee.collapseNode(o), this.props.enableLegacyTransitions ? (this.setState({ data: c, isTransitioning: true }), setTimeout(() => this.setState({ isTransitioning: false }), this.props.transitionDuration + 10)) : this.setState({ data: c }), this.internalState.targetNode = o);
    }, this.handleAddChildrenToNode = (i, c) => {
      const f = ae(this.state.data), o = this.findNodesById(i, f, []);
      if (o.length > 0) {
        const h = o[0], d = h.__rd3t.depth, y = ae(c).map((v) => Ee.assignInternalProperties([v], d + 1));
        h.children.push(...y.flat()), this.setState({ data: f });
      }
    }, this.handleOnNodeClickCb = (i, c) => {
      const { onNodeClick: f } = this.props;
      f && typeof f == "function" && (c.persist(), f(ae(i), c));
    }, this.handleOnLinkClickCb = (i, c, f) => {
      const { onLinkClick: o } = this.props;
      o && typeof o == "function" && (f.persist(), o(ae(i), ae(c), f));
    }, this.handleOnNodeMouseOverCb = (i, c) => {
      const { onNodeMouseOver: f } = this.props;
      f && typeof f == "function" && (c.persist(), f(ae(i), c));
    }, this.handleOnLinkMouseOverCb = (i, c, f) => {
      const { onLinkMouseOver: o } = this.props;
      o && typeof o == "function" && (f.persist(), o(ae(i), ae(c), f));
    }, this.handleOnNodeMouseOutCb = (i, c) => {
      const { onNodeMouseOut: f } = this.props;
      f && typeof f == "function" && (c.persist(), f(ae(i), c));
    }, this.handleOnLinkMouseOutCb = (i, c, f) => {
      const { onLinkMouseOut: o } = this.props;
      o && typeof o == "function" && (f.persist(), o(ae(i), ae(c), f));
    }, this.centerNode = (i) => {
      const { dimensions: c, orientation: f, zoom: o, centeringTransitionDuration: h } = this.props;
      if (c) {
        const d = le(`.${this.gInstanceRef}`), y = le(`.${this.svgInstanceRef}`), v = this.state.d3.scale;
        let p, S;
        f === "horizontal" ? (S = -i.x * v + c.height / 2, p = -i.y * v + c.width / 2) : (p = -i.x * v + c.width / 2, S = -i.y * v + c.height / 2), d.transition().duration(h).attr("transform", "translate(" + p + "," + S + ")scale(" + v + ")"), y.call(jf().transform, er.translate(p, S).scale(o));
      }
    }, this.getNodeClassName = (i, c) => {
      const { rootNodeClassName: f, branchNodeClassName: o, leafNodeClassName: h } = this.props;
      return i != null ? c.children ? o : h : f;
    };
  }
  static getDerivedStateFromProps(i, c) {
    let f = null;
    const o = !i.dataKey || c.dataKey !== i.dataKey;
    i.data !== c.dataRef && o && (f = { dataRef: i.data, data: Ee.assignInternalProperties(ae(i.data)), isInitialRenderForDataset: true, dataKey: i.dataKey });
    const h = Ee.calculateD3Geometry(i);
    return ai(h, c.d3) || (f = f || {}, f.d3 = h), f;
  }
  componentDidMount() {
    this.bindZoomListener(this.props), this.setState({ isInitialRenderForDataset: false });
  }
  componentDidUpdate(i) {
    this.props.data !== i.data && this.setState({ isInitialRenderForDataset: false }), (!ai(this.props.translate, i.translate) || !ai(this.props.scaleExtent, i.scaleExtent) || this.props.zoomable !== i.zoomable || this.props.draggable !== i.draggable || this.props.zoom !== i.zoom || this.props.enableLegacyTransitions !== i.enableLegacyTransitions) && this.bindZoomListener(this.props), typeof this.props.onUpdate == "function" && this.props.onUpdate({ node: this.internalState.targetNode ? ae(this.internalState.targetNode) : null, zoom: this.state.d3.scale, translate: this.state.d3.translate }), this.internalState.targetNode = null;
  }
  setInitialTreeDepth(i, c) {
    i.forEach((f) => {
      f.data.__rd3t.collapsed = f.depth >= c;
    });
  }
  bindZoomListener(i) {
    const { zoomable: c, scaleExtent: f, translate: o, zoom: h, onUpdate: d, hasInteractiveNodes: y } = i, v = le(`.${this.svgInstanceRef}`), p = le(`.${this.gInstanceRef}`);
    v.call(jf().transform, er.translate(o.x, o.y).scale(h)), v.call(jf().scaleExtent(c ? [f.min, f.max] : [h, h]).filter((S) => y ? S.target.classList.contains(this.svgInstanceRef) || S.target.classList.contains(this.gInstanceRef) || S.shiftKey : true).on("zoom", (S) => {
      !this.props.draggable && ["mousemove", "touchmove", "dblclick"].includes(S.sourceEvent.type) || (p.attr("transform", S.transform), typeof d == "function" && (d({ node: null, zoom: S.transform.k, translate: { x: S.transform.x, y: S.transform.y } }), this.state.d3.scale = S.transform.k, this.state.d3.translate = { x: S.transform.x, y: S.transform.y }));
    }));
  }
  static assignInternalProperties(i, c = 0) {
    return (Array.isArray(i) ? i : [i]).map((o) => {
      const h = o;
      return h.__rd3t = { id: null, depth: null, collapsed: false }, h.__rd3t.id = Lf(), h.__rd3t.depth = c, h.children && h.children.length > 0 && (h.children = Ee.assignInternalProperties(h.children, c + 1)), h;
    });
  }
  findNodesById(i, c, f) {
    return f.length > 0 || (f = f.concat(c.filter((o) => o.__rd3t.id === i)), c.forEach((o) => {
      o.children && o.children.length > 0 && (f = this.findNodesById(i, o.children, f));
    })), f;
  }
  findNodesAtDepth(i, c, f) {
    return f = f.concat(c.filter((o) => o.__rd3t.depth === i)), c.forEach((o) => {
      o.children && o.children.length > 0 && (f = this.findNodesAtDepth(i, o.children, f));
    }), f;
  }
  static collapseNode(i) {
    i.__rd3t.collapsed = true, i.children && i.children.length > 0 && i.children.forEach((c) => {
      Ee.collapseNode(c);
    });
  }
  static expandNode(i) {
    i.__rd3t.collapsed = false;
  }
  collapseNeighborNodes(i, c) {
    this.findNodesAtDepth(i.__rd3t.depth, c, []).filter((o) => o.__rd3t.id !== i.__rd3t.id).forEach((o) => Ee.collapseNode(o));
  }
  generateTree() {
    const { initialDepth: i, depthFactor: c, separation: f, nodeSize: o, orientation: h } = this.props, { isInitialRenderForDataset: d } = this.state, v = og().nodeSize(h === "horizontal" ? [o.y, o.x] : [o.x, o.y]).separation((E, z) => E.parent.data.__rd3t.id === z.parent.data.__rd3t.id ? f.siblings : f.nonSiblings)(co(this.state.data[0], (E) => E.__rd3t.collapsed ? null : E.children));
    let p = v.descendants();
    const S = v.links();
    return i !== void 0 && d && this.setInitialTreeDepth(p, i), c && p.forEach((E) => {
      E.y = E.depth * c;
    }), { nodes: p, links: S };
  }
  static calculateD3Geometry(i) {
    let c;
    return i.zoom > i.scaleExtent.max ? c = i.scaleExtent.max : i.zoom < i.scaleExtent.min ? c = i.scaleExtent.min : c = i.zoom, { translate: i.translate, scale: c };
  }
  render() {
    const { nodes: i, links: c } = this.generateTree(), { renderCustomNodeElement: f, orientation: o, pathFunc: h, transitionDuration: d, nodeSize: y, depthFactor: v, initialDepth: p, separation: S, enableLegacyTransitions: E, svgClassName: z, pathClassFunc: w } = this.props, { translate: j, scale: W } = this.state.d3, lt = Object.assign(Object.assign(Object.assign({}, y), S), { depthFactor: v, initialDepth: p });
    return Vt.createElement("div", { className: "rd3t-tree-container rd3t-grabbable" }, Vt.createElement("style", null, ES), Vt.createElement("svg", { className: `rd3t-svg ${this.svgInstanceRef} ${z}`, width: "100%", height: "100%" }, Vt.createElement(cS, { enableLegacyTransitions: E, component: "g", className: `rd3t-g ${this.gInstanceRef}`, transform: `translate(${j.x},${j.y}) scale(${W})` }, c.map((Z, X) => Vt.createElement(TS, { key: "link-" + X, orientation: o, pathFunc: h, pathClassFunc: w, linkData: Z, onClick: this.handleOnLinkClickCb, onMouseOver: this.handleOnLinkMouseOverCb, onMouseOut: this.handleOnLinkMouseOutCb, enableLegacyTransitions: E, transitionDuration: d })), i.map((Z, X) => {
      const { data: G, x: $, y: L, parent: V } = Z;
      return Vt.createElement(sS, { key: "node-" + X, data: G, position: { x: $, y: L }, hierarchyPointNode: Z, parent: V, nodeClassName: this.getNodeClassName(V, G), renderCustomNodeElement: f, nodeSize: y, orientation: o, enableLegacyTransitions: E, transitionDuration: d, onNodeToggle: this.handleNodeToggle, onNodeClick: this.handleOnNodeClickCb, onNodeMouseOver: this.handleOnNodeMouseOverCb, onNodeMouseOut: this.handleOnNodeMouseOutCb, handleAddChildrenToNode: this.handleAddChildrenToNode, subscriptions: lt, centerNode: this.centerNode });
    }))));
  }
}
Ee.defaultProps = { onNodeClick: void 0, onNodeMouseOver: void 0, onNodeMouseOut: void 0, onLinkClick: void 0, onLinkMouseOver: void 0, onLinkMouseOut: void 0, onUpdate: void 0, orientation: "horizontal", translate: { x: 0, y: 0 }, pathFunc: "diagonal", pathClassFunc: void 0, transitionDuration: 500, depthFactor: void 0, collapsible: true, initialDepth: void 0, zoomable: true, draggable: true, zoom: 1, scaleExtent: { min: 0.1, max: 1 }, nodeSize: { x: 140, y: 140 }, separation: { siblings: 1, nonSiblings: 2 }, shouldCollapseNeighborNodes: false, svgClassName: "", rootNodeClassName: "", branchNodeClassName: "", leafNodeClassName: "", renderCustomNodeElement: void 0, enableLegacyTransitions: false, hasInteractiveNodes: false, dimensions: void 0, centeringTransitionDuration: 800, dataKey: void 0 };
const tp = (l3, i) => {
  let c = l3.kind;
  l3.token && (c = l3.token);
  const f = {};
  l3.tag && (f.tag = l3.tag);
  const o = i && l3 === i;
  return { name: c, attributes: f, token: l3.token, kind: l3.kind, nodeSvgShape: { shapeProps: { r: 10, fill: o ? "#facc15" : "var(--pos-noun)", stroke: o ? "#a16207" : "none", strokeWidth: o ? 3 : 0 } }, children: l3.children ? l3.children.map((h) => tp(h, i)) : [] };
}, ep = ({ node: l3, onHover: i, sentenceIndex: c }) => {
  var _a, _b2;
  return l3.token ? bt.jsx("span", { className: `token pos-${(_a = l3.tag) == null ? void 0 : _a.toLowerCase()}`, onMouseEnter: () => i(l3, c), onMouseLeave: () => i(null, c), children: l3.token }) : bt.jsx("span", { className: `constituent kind-${(_b2 = l3.kind) == null ? void 0 : _b2.toLowerCase()}`, children: l3.children.map((f, o) => bt.jsx(ep, { node: f, onHover: i, sentenceIndex: c }, o)) });
}, v0 = ({ tree: l3, mode: i, onHover: c, activeSentenceIndex: f, highlightedNode: o }) => {
  if (i === "text") return bt.jsx("div", { className: "text-display", children: l3.map((h, d) => bt.jsxs("div", { className: "utterance-block", children: [bt.jsxs("span", { className: "utterance-label", children: [d + 1, ". "] }), bt.jsx(ep, { node: h, onHover: c, sentenceIndex: d })] }, d)) });
  if (i === "graph") {
    const h = l3[f];
    if (!h) return null;
    const d = tp(h, o);
    return bt.jsx("div", { style: { width: "100%", height: "100%" }, children: bt.jsx(Ee, { data: d, orientation: "vertical", pathFunc: "step", translate: { x: 300, y: 50 }, nodeSize: { x: 90, y: 100 }, separation: { siblings: 1.2, nonSiblings: 1.5 }, zoomable: true, collapsible: false, rootNodeClassName: "node__root", branchNodeClassName: "node__branch", leafNodeClassName: "node__leaf", renderCustomNodeElement: (y) => zS(y, o, c) }) });
  }
  return null;
}, zS = ({ nodeDatum: l3, toggleNode: i }, c, f) => {
  var _a, _b2;
  const o = !l3.children || l3.children.length === 0, h = l3.name === "Utterance", d = ((_a = l3.nodeSvgShape) == null ? void 0 : _a.shapeProps) || {};
  let y = "#f1f5f9";
  o && (y = "#ffffff"), h && (y = "#e0e7ff");
  const v = (_b2 = l3.attributes) == null ? void 0 : _b2.tag;
  if (v) switch (v) {
    case "Noun":
      y = "#2563eb";
      break;
    case "Verb":
      y = "#db2777";
      break;
    case "Modifier":
      y = "#ca8a04";
      break;
    case "Particle":
      y = "#64748b";
      break;
    case "Preposition":
      y = "#059669";
      break;
    case "Pronoun":
      y = "#9333ea";
      break;
    case "Preverb":
      y = "#e11d48";
      break;
    case "Other":
      y = "#475569";
      break;
  }
  let p = d.stroke, S = d.strokeWidth;
  return bt.jsxs("g", { onMouseEnter: () => f && f(l3), onMouseLeave: () => f && f(null), style: { cursor: "pointer" }, children: [bt.jsx("circle", { r: "15", fill: y, stroke: p !== "none" ? p : v ? "none" : "#94a3b8", strokeWidth: S || 2 }), bt.jsx("text", { fill: "black", strokeWidth: "0", x: "20", dy: "5", style: { fontSize: "14px", fontFamily: "Inter", fontWeight: "500" }, children: l3.name })] });
}, AS = { a: "emphasis, emotion, confirmation, really?, ah!, aha!, oh!, oh my!, yay!", akesi: "reptile, amphibian, dinosaur, frog, snake, monster, newt, amphibious animal", ala: "no, not, zero, nothing, empty", alasa: "gather, hunt, forage, attempt, seek, try, explore, find, chase, collect, pursue, catch", ale: "all, any, plenary, infinite, abundant, universe, everything, all of the universe, all of the world", ali: "all, any, plenary, infinite, abundant, universe, everything, all of the universe, all of the world", anpa: "down, below, bottom, beneath, to lower, to sit, abandon, defeat, beat, deep, enslave", ante: "different, changed, other, adapt, adjust, adaptation, difference", anu: "or", awen: "wait, constant, continue, hold, hesitate, inertia, keep, keep on, protect, preserve, safe, save, stable, store, sustain", e: "(direct object marker)", en: "and (coordinate subject marker)", esun: "market, shop, trade, exchange, trade, buy, sell, business", ijo: "thing, phenomenon, object, entity, material, matter, something, stuff, substance", ike: "bad, negative, offensive, evil, unpleasant, crime, awful, disorder, difficult, danger, issue, problem, vice, ugly, sin, toxic, trouble", ilo: "tool, implement, machine, instrument, utensil, appliance, gadget, device, tech, technology, equipment", insa: "center, content, inside, midst, amid, among, inner, abdomen", jaki: "disgusting, obscene, sickly, filth, ew, dirty, disease, mess, garbage, yucky, waste, pollution", jan: "human, person, somebody, being, character", jelo: "yellow", jo: "have, carry, contain, hold, own, ownership, wear, bring, bear", kala: "fish, marine animal, sea creature, sea food", kalama: "produce a sound, recite, utter, amplify, chime, buzz, jangle, clang, knock, sound, yell", kama: "arriving, coming, future, summoned, event, arrival, future, summoned, to become, to be in the process of, to succeed in", kasi: "plant, vegetation, herb, leaf, grass", ken: "possible, able, allowed, ability, possibility, right, liberty, to be able to, may, permission", kepeken: "the use of, the practice of, using, with the help of, with", kili: "fruit, vegetable, mushroom", kin: "also, too, indeed, really, very", kiwen: "hard object, metal, rock, stone, solid", ko: "clay, clinging form, dough, paste, semi-solid", kon: "air, breath, essence, spirit, gas, vapor, steam, smoke, fog, mist", kule: "colorful, pigmented, painted, colored, to paint, to dye", kulupu: "community, company, group, society, nation, tribe", kute: "ear, hear, listen, obey, to hear, to listen, to obey", la: "(context marker)", lape: "sleeping, resting, restful, to sleep, to rest", laso: "blue, green", lawa: "head, mind, lead, control, to lead, to control, to rule, to govern", len: "cloth, clothing, fabric, textile", lete: "cold, cool, uncooked, to cool, to freeze", li: "(predicate marker)", lili: "little, small, short, few, young, smallness, to shrink", linja: "long and flexible thing, cord, rope, hair, string, wire", lipu: "flat object, book, document, paper, sheet, page, website, record", loje: "red, reddish", lon: "at, in, on, located, real, true, truth, life, existing, present, to be true, to exist, to be real", luka: "arm, hand, five", lukin: "to look, to see, to examine, to seek (preverb), sight, visual, to read, to watch, to observe, eye", lupa: "door, hole, orifice, window", ma: "earth, land, outdoors, world, territory, country", mama: "parent, ancestor, creator, to create, to parent, to take care of", mani: "money, cash, savings, wealth", meli: "woman, female, wife, feminine", mi: "I, me, my", mije: "man, male, husband, masculine", moku: "eat, drink, consume, swallow, consume, edible, food, meal", moli: "dead, dying, to kill", monsi: "back, behind, rear, butt", mu: "(animal noise)", mun: "moon, night sky object, lunar, stellar", musi: "artistic, entertaining, game, art, music, amusing, frivolous, playful, to amuse, to play, to have fun", mute: "quantity, many, a lot, much, more, additional", nanpa: "number", nasa: "weird, unusual, strange, drunk, foolish, crazy, abnormal", nasin: "path, road, street, directive, way, custom, method, doctrine, to guide, to direct, to show the path", nena: "bump, button, hill, mountain, nose, hilly, mountainous, bumpy", ni: "that, this", nimi: "name, word", noka: "foot, leg, bottom, lower part", o: "hey! (vocative or imperative)", oko: "eye", olin: "love, have compassion for, respect, to love, to admire, to respect", ona: "he, she, it, they", open: "begin, start, open, beginning, initial, starting, to start, to open, to turn on, to begin", pakala: "broken, mistake, damaged, harmed, to break, to make mistakes, (generic curse)", pali: "do, take action on, work on, labor, to make", palisa: "long hard thing, branch, rod, stick, long", pan: "bread, grain, cereal, pasta, pizza, corn, rice", pana: "give, send, emit, release, given, sent, released", pi: "of (modifier grouper)", pilin: "heart, feeling, touch, sense, to touch, to think, to feel", pimeja: "black, dark, unlit, shadow", pini: "end, finish, final, completed, past (with tenpo), to end, to finish, to close, to end/stop doing something (preverb)", pipi: "bug, insect", poka: "hip, side, next to, nearby, neighboring, at one's side", poki: "container, bag, bowl, box, to put in a container", pona: "good, positive, simple, correct, peaceful, friendly, to improve, to make better, to fix", pu: "interacting with the official Toki Pona book", sama: "same, similar, each other, sibling, as, like", seli: "fire, warmth, heat, chemical reaction, warm, hot, to heat", selo: "outer form, outer layer, bark, shell, skin, boundary, border", seme: "what? which? (for questions)", sewi: "area above, highest part, sky, god, high, divine, above, sacred", sijelo: "body, physical state, torso, physical, of the body", sike: "round or circular thing, ball, circle, wheel, (with tenpo) year, to make a circle around, to surround", sin: "new, novelty, spice, additional, fresh, extra, to add, to update", sina: "you, yourself, your", sinpin: "face, foremost, front, wall, of the face", sitelen: "image, picture, representation, writing, recorded, to write, to draw, to record", sona: "know, to understand, wisdom, expertise, to know (preverb), information, knowledge", soweli: "animal, beast, land mammal", suli: "big, heavy, large, long, tall, to grow, to become big", suno: "sun, light, light source, to shine, to glow, to burn", supa: "horizontal surface, thing to rest on", suwi: "sweet, fragrant, cute, adorable, candy", tan: "cause, reason, origin, original, to cause, from, because of", taso: "but, however, only", tawa: "movement, moving, to move, to, for, from perspective of, toward", telo: "water, liquid, fluid, wet substance, to water, to clean", tenpo: "time, duration, moment, occasion, temporal", toki: "speech, conversation, language, verbal, conversational, to speak, to talk, to use language, to think", tomo: "home, building, structure, indoor space, room, indoor", tu: "two, to divide, divided", unpa: "sex, sexual, to have sexual relations with", uta: "mouth, lips, oral cavity, jaw", utala: "fight, battle, challenge, compete, struggle, aggressive, warlike, to fight, to battle, to challenge", walo: "white, whitish", wan: "one, part of something, united, married, to unite, to join, to marry", waso: "bird, flying creature, winged animal", wawa: "strength, power, energy, strong, powerful, energetic", weka: "absence, remoteness, absent, away, remote, to remove, to get rid of", wile: "want, need, desire, desired, needed, required, to want, to want to do", utterance: "A complete unit of speech, which may be a sentence, command, or interjection.", sentence: "A complete grammatical thought usually containing a subject and predicate.", sentenceblock: "A block containing the main sentence and any context phrases.", context: "Sets the background context or condition for the main sentence (marked by 'la').", mainclause: "The core part of the sentence expressing the main action or state.", subject: "The person or thing performing the action or being described.", subjectsimple: "A simple subject consisting of minimal words (mi/sina).", subjectgeneral: "A complex subject with a head phrase and optional modifiers.", predicate: "Describes the action performed by the subject or the state of the subject.", predicatecore: "The central part of the predicate, including the head verb/noun and modifiers.", phrase: "A group of words functioning together as a single unit, where the head word is modified by other words.", prepositionalphrase: "A phrase beginning with a preposition indicating location, direction, cause, or manner.", modifier: "A word or phrase that describes or limits the meaning of another word.", vocative: "Addressing someone directly (e.g., 'jan Pona o').", interjection: "An exclamation expressing emotion (e.g., 'a!', 'pakala!').", preverbphrase: "A preverb (like 'wile' or 'sona') that modifies the main verb." };
function xS() {
  const [l3, i] = Ve.useState(false), [c, f] = Ve.useState(`mi wile e ni: sina kama sona e toki pona!
tomo tawa supa mi pi lon sewi li jo e kala linja mute mute!`), [o, h] = Ve.useState(null), [d, y] = Ve.useState(0), [v, p] = Ve.useState(null), [S, E] = Ve.useState(null);
  Ve.useEffect(() => {
    Lv().then(() => i(true));
  }, []);
  const z = () => {
    if (l3) try {
      const j = qv(c);
      h(j), y(0);
    } catch (j) {
      console.error("Parse error", j);
    }
  };
  Ve.useEffect(() => {
    l3 && z();
  }, [l3]);
  const w = S ? AS[S.toLowerCase()] || "No definition found" : null;
  return bt.jsxs("div", { className: "app-container", children: [bt.jsxs("div", { className: "left-pane", children: [bt.jsx("header", { className: "header", children: bt.jsx("h1", { children: "Toki Pona Grammar Visualizer" }) }), bt.jsxs("div", { className: "input-section", children: [bt.jsx("textarea", { className: "input-area", value: c, onChange: (j) => f(j.target.value), spellCheck: "false", placeholder: "Enter toki pona text..." }), bt.jsx("div", { className: "actions", children: bt.jsx("button", { className: "primary-btn", onClick: z, disabled: !l3, children: l3 ? "Analyze" : "Loading..." }) })] }), bt.jsx("div", { className: "text-display-section", children: o && bt.jsx(v0, { tree: o, mode: "text", onHover: (j, W) => {
    p(j), j ? j.token ? E(j.token) : E(j.kind) : E(null), W !== void 0 && y(W);
  } }) })] }), bt.jsxs("div", { className: "right-pane", children: [bt.jsxs("div", { className: "right-pane-header", children: [bt.jsx("h3", { className: "section-title", children: "Analysis & Definitions" }), S ? bt.jsxs("div", { className: "definition-box", children: [bt.jsx("div", { className: "def-word", children: S }), bt.jsx("div", { className: "def-text", children: w })] }) : bt.jsx("div", { className: "definition-placeholder", children: "Hover over words or tree nodes to see definitions." })] }), bt.jsx("div", { className: "tree-container-sticky", children: o && o[d] ? bt.jsx("div", { className: "tree-wrapper", children: bt.jsx(v0, { tree: o, mode: "graph", activeSentenceIndex: d, highlightedNode: v, onHover: (j) => {
    p(j), j ? j.token ? E(j.token) : E(j.kind) : E(null);
  } }) }) : bt.jsx("div", { className: "placeholder-text", children: "Hover over the text to see the grammatical structure." }) })] })] });
}
Uv.createRoot(document.getElementById("root")).render(bt.jsx(Ve.StrictMode, { children: bt.jsx(xS, {}) }));
