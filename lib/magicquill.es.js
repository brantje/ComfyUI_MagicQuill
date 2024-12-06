(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(":root{--svg-filter: #313131;--svg-filter-active: #0095ff;--font-color: #000;--background-color: #fff;--background-color-active: #f0f0f0}[data-theme=dark]{--svg-filter: white;--svg-filter-active: #a5ffff;--font-color: #fff;--background-color: #333;--background-color-active: #7a7a7a}.panel-paint-box{width:100%;height:100%}#prompt-input-box{display:flex;justify-content:center;width:80%;margin-inline:auto}#prompt-input-box #prompt-input{border-radius:1rem;border-style:solid;border-width:1px;width:80%;padding:.2rem 1rem;margin-inline:.3rem;color:var(--font-color);background-color:var(--background-color)}#prompt-input-box #wand-icon{transition:color 1s ease}.blinking{animation:blink .5s infinite alternate}@keyframes blink{0%{opacity:1}to{opacity:.1}}.shining{fill:#ffcd28!important;animation:shine .5s forwards}@keyframes shine{0%{transform:scale(1)}50%{transform:scale(1.5)}to{transform:scale(1)}}#tool-bar{display:flex;width:100%;overflow-x:scroll;scrollbar-width:none;-ms-overflow-style:none}#tool-bar::-webkit-scrollbar{display:none}#essential-tool-box{display:flex}.painter-tool-icon{width:1.5rem;height:1.5rem;margin-inline:.2rem;cursor:pointer;display:flex;align-self:center}.painter-tool-icon svg{width:100%;height:100%;align-self:center;-webkit-user-drag:none;-khtml-user-drag:none;-moz-user-drag:none;-o-user-drag:none}.painter-tool-icon svg:hover{opacity:.8}.painter-tool-icon svg{fill:var(--svg-filter)}.painter-tool-icon svg.active{fill:var(--svg-filter-active)}.painter-tool-icon.disabled{opacity:.3;cursor:not-allowed}#stroke-size-box{display:flex}#stroke-size-box #stroke-width-slider{width:6rem;align-self:center}#stroke-size-box #stroke-width-value{font-size:.8rem;margin-left:.2rem;align-self:center;color:var(--font-color)}#stroke-color{align-self:center;width:3rem;height:1.5rem;padding:0}#stroke-color-transparent{align-self:center;width:3.5rem;height:1.5rem;padding:.2rem;margin-left:.2rem;font-size:.8rem;color:var(--font-color);background-color:var(--background-color);border-radius:1rem;border-style:solid;border-width:1px;border-radius:.2rem;box-sizing:border-box}#painter-history-panel{display:flex}#download-box{margin-left:auto}.side-bar{width:7rem;display:flex;flex-direction:column;justify-content:space-between}.side-bar button{width:24px}.top-bar{width:100%;min-height:5rem;display:flex;flex-direction:column;justify-content:space-evenly}.lower-area{width:100%;height:calc(100% - 7rem);display:flex}.separator{align-self:center;width:1px;height:25px;background-color:var(--border-color);display:inline-block;vertical-align:middle;margin:0 4px}#color-and-alpha-box{display:flex}#output-img-box{position:relative}#output-operation-box{position:absolute;bottom:.5rem;width:80%;left:10%;background:#e3e3e333;padding:.5rem 1rem;box-sizing:border-box;border-radius:.5rem;display:flex;justify-content:space-around}.side-bar .layer-box{display:flex;flex-direction:column;height:calc(100% - 1.5rem)}.layer-item-list{display:flex;flex-direction:column;gap:2px;align-items:center;overflow-y:auto;overflow-x:hidden;padding-block:.5rem;max-height:350px}.layer-operation-box{display:flex;justify-content:space-between;padding-inline:.3rem}.layer-item-container{flex-direction:row;display:flex;justify-content:space-between;align-items:center;width:85%;padding:.05rem .4rem;margin-block:.1rem;box-sizing:border-box;border-radius:.4rem;border:1px solid #737373}.layer-item-container .layer-item{width:80%;font-size:.7rem;color:var(--font-color);cursor:pointer}.layer-item-container:hover{opacity:.8}.layer-item-container.active{background:var(--background-color-active)}.layer-item-container .layer-item-remove{width:20%;border-radius:50%;box-sizing:border-box;padding:2%;cursor:pointer;fill:var(--svg-filter);-webkit-user-drag:none;-khtml-user-drag:none;-moz-user-drag:none;-o-user-drag:none}.layer-item-container .layer-item-remove:hover{opacity:.6}#output-area{width:calc(100% - 7rem);display:flex}#canvas-box{width:50%}#left-box{position:relative}#bg-reminder{position:absolute;width:100%;height:100%;z-index:10;display:flex;cursor:pointer}#bg-reminder-text{color:#fff;text-align:center;display:block;margin:auto;padding:.3rem 1rem;border-radius:1rem}#output-img{background-color:gray;width:100%;height:100%}#loading-status{text-align:center;margin-top:1rem;height:1.5rem}#loading-status svg{width:1.2rem;height:1.2rem;margin:auto;fill:var(--svg-filter)}@-webkit-keyframes rotating{0%{-webkit-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotating{0%{-ms-transform:rotate(0deg);-moz-transform:rotate(0deg);-webkit-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0)}to{-ms-transform:rotate(360deg);-moz-transform:rotate(360deg);-webkit-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}.rotating{-webkit-animation:rotating 2s linear infinite;-moz-animation:rotating 2s linear infinite;-ms-animation:rotating 2s linear infinite;-o-animation:rotating 2s linear infinite;animation:rotating 2s linear infinite}")),document.head.appendChild(e)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
function xs(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Kc = { exports: {} }, Eo = {}, Qc = { exports: {} }, Ee = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hr = Symbol.for("react.element"), Hp = Symbol.for("react.portal"), Wp = Symbol.for("react.fragment"), Yp = Symbol.for("react.strict_mode"), Xp = Symbol.for("react.profiler"), Gp = Symbol.for("react.provider"), Vp = Symbol.for("react.context"), $p = Symbol.for("react.forward_ref"), Zp = Symbol.for("react.suspense"), qp = Symbol.for("react.memo"), Kp = Symbol.for("react.lazy"), _l = Symbol.iterator;
function Qp(e) {
  return e === null || typeof e != "object" ? null : (e = _l && e[_l] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Jc = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, eu = Object.assign, tu = {};
function Ci(e, t, i) {
  this.props = e, this.context = t, this.refs = tu, this.updater = i || Jc;
}
Ci.prototype.isReactComponent = {};
Ci.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Ci.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function nu() {
}
nu.prototype = Ci.prototype;
function ws(e, t, i) {
  this.props = e, this.context = t, this.refs = tu, this.updater = i || Jc;
}
var _s = ws.prototype = new nu();
_s.constructor = ws;
eu(_s, Ci.prototype);
_s.isPureReactComponent = !0;
var Cl = Array.isArray, iu = Object.prototype.hasOwnProperty, Cs = { current: null }, ru = { key: !0, ref: !0, __self: !0, __source: !0 };
function ou(e, t, i) {
  var c, f = {}, m = null, w = null;
  if (t != null) for (c in t.ref !== void 0 && (w = t.ref), t.key !== void 0 && (m = "" + t.key), t) iu.call(t, c) && !ru.hasOwnProperty(c) && (f[c] = t[c]);
  var S = arguments.length - 2;
  if (S === 1) f.children = i;
  else if (1 < S) {
    for (var O = Array(S), z = 0; z < S; z++) O[z] = arguments[z + 2];
    f.children = O;
  }
  if (e && e.defaultProps) for (c in S = e.defaultProps, S) f[c] === void 0 && (f[c] = S[c]);
  return { $$typeof: hr, type: e, key: m, ref: w, props: f, _owner: Cs.current };
}
function Jp(e, t) {
  return { $$typeof: hr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Ss(e) {
  return typeof e == "object" && e !== null && e.$$typeof === hr;
}
function ed(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(i) {
    return t[i];
  });
}
var Sl = /\/+/g;
function Xo(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? ed("" + e.key) : t.toString(36);
}
function Br(e, t, i, c, f) {
  var m = typeof e;
  (m === "undefined" || m === "boolean") && (e = null);
  var w = !1;
  if (e === null) w = !0;
  else switch (m) {
    case "string":
    case "number":
      w = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case hr:
        case Hp:
          w = !0;
      }
  }
  if (w) return w = e, f = f(w), e = c === "" ? "." + Xo(w, 0) : c, Cl(f) ? (i = "", e != null && (i = e.replace(Sl, "$&/") + "/"), Br(f, t, i, "", function(z) {
    return z;
  })) : f != null && (Ss(f) && (f = Jp(f, i + (!f.key || w && w.key === f.key ? "" : ("" + f.key).replace(Sl, "$&/") + "/") + e)), t.push(f)), 1;
  if (w = 0, c = c === "" ? "." : c + ":", Cl(e)) for (var S = 0; S < e.length; S++) {
    m = e[S];
    var O = c + Xo(m, S);
    w += Br(m, t, i, O, f);
  }
  else if (O = Qp(e), typeof O == "function") for (e = O.call(e), S = 0; !(m = e.next()).done; ) m = m.value, O = c + Xo(m, S++), w += Br(m, t, i, O, f);
  else if (m === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return w;
}
function vr(e, t, i) {
  if (e == null) return e;
  var c = [], f = 0;
  return Br(e, c, "", "", function(m) {
    return t.call(i, m, f++);
  }), c;
}
function td(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(i) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = i);
    }, function(i) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = i);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ht = { current: null }, zr = { transition: null }, nd = { ReactCurrentDispatcher: ht, ReactCurrentBatchConfig: zr, ReactCurrentOwner: Cs };
function au() {
  throw Error("act(...) is not supported in production builds of React.");
}
Ee.Children = { map: vr, forEach: function(e, t, i) {
  vr(e, function() {
    t.apply(this, arguments);
  }, i);
}, count: function(e) {
  var t = 0;
  return vr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return vr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Ss(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
Ee.Component = Ci;
Ee.Fragment = Wp;
Ee.Profiler = Xp;
Ee.PureComponent = ws;
Ee.StrictMode = Yp;
Ee.Suspense = Zp;
Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = nd;
Ee.act = au;
Ee.cloneElement = function(e, t, i) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var c = eu({}, e.props), f = e.key, m = e.ref, w = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (m = t.ref, w = Cs.current), t.key !== void 0 && (f = "" + t.key), e.type && e.type.defaultProps) var S = e.type.defaultProps;
    for (O in t) iu.call(t, O) && !ru.hasOwnProperty(O) && (c[O] = t[O] === void 0 && S !== void 0 ? S[O] : t[O]);
  }
  var O = arguments.length - 2;
  if (O === 1) c.children = i;
  else if (1 < O) {
    S = Array(O);
    for (var z = 0; z < O; z++) S[z] = arguments[z + 2];
    c.children = S;
  }
  return { $$typeof: hr, type: e.type, key: f, ref: m, props: c, _owner: w };
};
Ee.createContext = function(e) {
  return e = { $$typeof: Vp, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Gp, _context: e }, e.Consumer = e;
};
Ee.createElement = ou;
Ee.createFactory = function(e) {
  var t = ou.bind(null, e);
  return t.type = e, t;
};
Ee.createRef = function() {
  return { current: null };
};
Ee.forwardRef = function(e) {
  return { $$typeof: $p, render: e };
};
Ee.isValidElement = Ss;
Ee.lazy = function(e) {
  return { $$typeof: Kp, _payload: { _status: -1, _result: e }, _init: td };
};
Ee.memo = function(e, t) {
  return { $$typeof: qp, type: e, compare: t === void 0 ? null : t };
};
Ee.startTransition = function(e) {
  var t = zr.transition;
  zr.transition = {};
  try {
    e();
  } finally {
    zr.transition = t;
  }
};
Ee.unstable_act = au;
Ee.useCallback = function(e, t) {
  return ht.current.useCallback(e, t);
};
Ee.useContext = function(e) {
  return ht.current.useContext(e);
};
Ee.useDebugValue = function() {
};
Ee.useDeferredValue = function(e) {
  return ht.current.useDeferredValue(e);
};
Ee.useEffect = function(e, t) {
  return ht.current.useEffect(e, t);
};
Ee.useId = function() {
  return ht.current.useId();
};
Ee.useImperativeHandle = function(e, t, i) {
  return ht.current.useImperativeHandle(e, t, i);
};
Ee.useInsertionEffect = function(e, t) {
  return ht.current.useInsertionEffect(e, t);
};
Ee.useLayoutEffect = function(e, t) {
  return ht.current.useLayoutEffect(e, t);
};
Ee.useMemo = function(e, t) {
  return ht.current.useMemo(e, t);
};
Ee.useReducer = function(e, t, i) {
  return ht.current.useReducer(e, t, i);
};
Ee.useRef = function(e) {
  return ht.current.useRef(e);
};
Ee.useState = function(e) {
  return ht.current.useState(e);
};
Ee.useSyncExternalStore = function(e, t, i) {
  return ht.current.useSyncExternalStore(e, t, i);
};
Ee.useTransition = function() {
  return ht.current.useTransition();
};
Ee.version = "18.3.1";
Qc.exports = Ee;
var E = Qc.exports;
const su = /* @__PURE__ */ xs(E);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var id = E, rd = Symbol.for("react.element"), od = Symbol.for("react.fragment"), ad = Object.prototype.hasOwnProperty, sd = id.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, ld = { key: !0, ref: !0, __self: !0, __source: !0 };
function lu(e, t, i) {
  var c, f = {}, m = null, w = null;
  i !== void 0 && (m = "" + i), t.key !== void 0 && (m = "" + t.key), t.ref !== void 0 && (w = t.ref);
  for (c in t) ad.call(t, c) && !ld.hasOwnProperty(c) && (f[c] = t[c]);
  if (e && e.defaultProps) for (c in t = e.defaultProps, t) f[c] === void 0 && (f[c] = t[c]);
  return { $$typeof: rd, type: e, key: m, ref: w, props: f, _owner: sd.current };
}
Eo.Fragment = od;
Eo.jsx = lu;
Eo.jsxs = lu;
Kc.exports = Eo;
var ye = Kc.exports, cu = { exports: {} }, bt = {}, uu = { exports: {} }, hu = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  function t(n, r) {
    var a = n.length;
    n.push(r);
    e: for (; 0 < a; ) {
      var h = a - 1 >>> 1, u = n[h];
      if (0 < f(u, r)) n[h] = r, n[a] = u, a = h;
      else break e;
    }
  }
  function i(n) {
    return n.length === 0 ? null : n[0];
  }
  function c(n) {
    if (n.length === 0) return null;
    var r = n[0], a = n.pop();
    if (a !== r) {
      n[0] = a;
      e: for (var h = 0, u = n.length, d = u >>> 1; h < d; ) {
        var g = 2 * (h + 1) - 1, y = n[g], x = g + 1, C = n[x];
        if (0 > f(y, a)) x < u && 0 > f(C, y) ? (n[h] = C, n[x] = a, h = x) : (n[h] = y, n[g] = a, h = g);
        else if (x < u && 0 > f(C, a)) n[h] = C, n[x] = a, h = x;
        else break e;
      }
    }
    return r;
  }
  function f(n, r) {
    var a = n.sortIndex - r.sortIndex;
    return a !== 0 ? a : n.id - r.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var m = performance;
    e.unstable_now = function() {
      return m.now();
    };
  } else {
    var w = Date, S = w.now();
    e.unstable_now = function() {
      return w.now() - S;
    };
  }
  var O = [], z = [], V = 1, K = null, Z = 3, te = !1, ae = !1, ue = !1, Te = typeof setTimeout == "function" ? setTimeout : null, G = typeof clearTimeout == "function" ? clearTimeout : null, N = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function R(n) {
    for (var r = i(z); r !== null; ) {
      if (r.callback === null) c(z);
      else if (r.startTime <= n) c(z), r.sortIndex = r.expirationTime, t(O, r);
      else break;
      r = i(z);
    }
  }
  function J(n) {
    if (ue = !1, R(n), !ae) if (i(O) !== null) ae = !0, l(de);
    else {
      var r = i(z);
      r !== null && p(J, r.startTime - n);
    }
  }
  function de(n, r) {
    ae = !1, ue && (ue = !1, G(v), v = -1), te = !0;
    var a = Z;
    try {
      for (R(r), K = i(O); K !== null && (!(K.expirationTime > r) || n && !Me()); ) {
        var h = K.callback;
        if (typeof h == "function") {
          K.callback = null, Z = K.priorityLevel;
          var u = h(K.expirationTime <= r);
          r = e.unstable_now(), typeof u == "function" ? K.callback = u : K === i(O) && c(O), R(r);
        } else c(O);
        K = i(O);
      }
      if (K !== null) var d = !0;
      else {
        var g = i(z);
        g !== null && p(J, g.startTime - r), d = !1;
      }
      return d;
    } finally {
      K = null, Z = a, te = !1;
    }
  }
  var ge = !1, he = null, v = -1, ke = 5, F = -1;
  function Me() {
    return !(e.unstable_now() - F < ke);
  }
  function qe() {
    if (he !== null) {
      var n = e.unstable_now();
      F = n;
      var r = !0;
      try {
        r = he(!0, n);
      } finally {
        r ? We() : (ge = !1, he = null);
      }
    } else ge = !1;
  }
  var We;
  if (typeof N == "function") We = function() {
    N(qe);
  };
  else if (typeof MessageChannel < "u") {
    var s = new MessageChannel(), o = s.port2;
    s.port1.onmessage = qe, We = function() {
      o.postMessage(null);
    };
  } else We = function() {
    Te(qe, 0);
  };
  function l(n) {
    he = n, ge || (ge = !0, We());
  }
  function p(n, r) {
    v = Te(function() {
      n(e.unstable_now());
    }, r);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(n) {
    n.callback = null;
  }, e.unstable_continueExecution = function() {
    ae || te || (ae = !0, l(de));
  }, e.unstable_forceFrameRate = function(n) {
    0 > n || 125 < n ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ke = 0 < n ? Math.floor(1e3 / n) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return Z;
  }, e.unstable_getFirstCallbackNode = function() {
    return i(O);
  }, e.unstable_next = function(n) {
    switch (Z) {
      case 1:
      case 2:
      case 3:
        var r = 3;
        break;
      default:
        r = Z;
    }
    var a = Z;
    Z = r;
    try {
      return n();
    } finally {
      Z = a;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        n = 3;
    }
    var a = Z;
    Z = n;
    try {
      return r();
    } finally {
      Z = a;
    }
  }, e.unstable_scheduleCallback = function(n, r, a) {
    var h = e.unstable_now();
    switch (typeof a == "object" && a !== null ? (a = a.delay, a = typeof a == "number" && 0 < a ? h + a : h) : a = h, n) {
      case 1:
        var u = -1;
        break;
      case 2:
        u = 250;
        break;
      case 5:
        u = 1073741823;
        break;
      case 4:
        u = 1e4;
        break;
      default:
        u = 5e3;
    }
    return u = a + u, n = { id: V++, callback: r, priorityLevel: n, startTime: a, expirationTime: u, sortIndex: -1 }, a > h ? (n.sortIndex = a, t(z, n), i(O) === null && n === i(z) && (ue ? (G(v), v = -1) : ue = !0, p(J, a - h))) : (n.sortIndex = u, t(O, n), ae || te || (ae = !0, l(de))), n;
  }, e.unstable_shouldYield = Me, e.unstable_wrapCallback = function(n) {
    var r = Z;
    return function() {
      var a = Z;
      Z = r;
      try {
        return n.apply(this, arguments);
      } finally {
        Z = a;
      }
    };
  };
})(hu);
uu.exports = hu;
var cd = uu.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ud = E, St = cd;
function ce(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, i = 1; i < arguments.length; i++) t += "&args[]=" + encodeURIComponent(arguments[i]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var pu = /* @__PURE__ */ new Set(), Vi = {};
function Xn(e, t) {
  fi(e, t), fi(e + "Capture", t);
}
function fi(e, t) {
  for (Vi[e] = t, e = 0; e < t.length; e++) pu.add(t[e]);
}
var rn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), _a = Object.prototype.hasOwnProperty, hd = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, bl = {}, Tl = {};
function pd(e) {
  return _a.call(Tl, e) ? !0 : _a.call(bl, e) ? !1 : hd.test(e) ? Tl[e] = !0 : (bl[e] = !0, !1);
}
function dd(e, t, i, c) {
  if (i !== null && i.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return c ? !1 : i !== null ? !i.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function fd(e, t, i, c) {
  if (t === null || typeof t > "u" || dd(e, t, i, c)) return !0;
  if (c) return !1;
  if (i !== null) switch (i.type) {
    case 3:
      return !t;
    case 4:
      return t === !1;
    case 5:
      return isNaN(t);
    case 6:
      return isNaN(t) || 1 > t;
  }
  return !1;
}
function pt(e, t, i, c, f, m, w) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = c, this.attributeNamespace = f, this.mustUseProperty = i, this.propertyName = e, this.type = t, this.sanitizeURL = m, this.removeEmptyString = w;
}
var it = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  it[e] = new pt(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  it[t] = new pt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  it[e] = new pt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  it[e] = new pt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  it[e] = new pt(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  it[e] = new pt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  it[e] = new pt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  it[e] = new pt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  it[e] = new pt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var bs = /[\-:]([a-z])/g;
function Ts(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    bs,
    Ts
  );
  it[t] = new pt(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(bs, Ts);
  it[t] = new pt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(bs, Ts);
  it[t] = new pt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  it[e] = new pt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
it.xlinkHref = new pt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  it[e] = new pt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Es(e, t, i, c) {
  var f = it.hasOwnProperty(t) ? it[t] : null;
  (f !== null ? f.type !== 0 : c || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (fd(t, i, f, c) && (i = null), c || f === null ? pd(t) && (i === null ? e.removeAttribute(t) : e.setAttribute(t, "" + i)) : f.mustUseProperty ? e[f.propertyName] = i === null ? f.type === 3 ? !1 : "" : i : (t = f.attributeName, c = f.attributeNamespace, i === null ? e.removeAttribute(t) : (f = f.type, i = f === 3 || f === 4 && i === !0 ? "" : "" + i, c ? e.setAttributeNS(c, t, i) : e.setAttribute(t, i))));
}
var ln = ud.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, yr = Symbol.for("react.element"), qn = Symbol.for("react.portal"), Kn = Symbol.for("react.fragment"), ks = Symbol.for("react.strict_mode"), Ca = Symbol.for("react.profiler"), du = Symbol.for("react.provider"), fu = Symbol.for("react.context"), Os = Symbol.for("react.forward_ref"), Sa = Symbol.for("react.suspense"), ba = Symbol.for("react.suspense_list"), Ps = Symbol.for("react.memo"), hn = Symbol.for("react.lazy"), gu = Symbol.for("react.offscreen"), El = Symbol.iterator;
function Ei(e) {
  return e === null || typeof e != "object" ? null : (e = El && e[El] || e["@@iterator"], typeof e == "function" ? e : null);
}
var He = Object.assign, Go;
function Fi(e) {
  if (Go === void 0) try {
    throw Error();
  } catch (i) {
    var t = i.stack.trim().match(/\n( *(at )?)/);
    Go = t && t[1] || "";
  }
  return `
` + Go + e;
}
var Vo = !1;
function $o(e, t) {
  if (!e || Vo) return "";
  Vo = !0;
  var i = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t) if (t = function() {
      throw Error();
    }, Object.defineProperty(t.prototype, "props", { set: function() {
      throw Error();
    } }), typeof Reflect == "object" && Reflect.construct) {
      try {
        Reflect.construct(t, []);
      } catch (z) {
        var c = z;
      }
      Reflect.construct(e, [], t);
    } else {
      try {
        t.call();
      } catch (z) {
        c = z;
      }
      e.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (z) {
        c = z;
      }
      e();
    }
  } catch (z) {
    if (z && c && typeof z.stack == "string") {
      for (var f = z.stack.split(`
`), m = c.stack.split(`
`), w = f.length - 1, S = m.length - 1; 1 <= w && 0 <= S && f[w] !== m[S]; ) S--;
      for (; 1 <= w && 0 <= S; w--, S--) if (f[w] !== m[S]) {
        if (w !== 1 || S !== 1)
          do
            if (w--, S--, 0 > S || f[w] !== m[S]) {
              var O = `
` + f[w].replace(" at new ", " at ");
              return e.displayName && O.includes("<anonymous>") && (O = O.replace("<anonymous>", e.displayName)), O;
            }
          while (1 <= w && 0 <= S);
        break;
      }
    }
  } finally {
    Vo = !1, Error.prepareStackTrace = i;
  }
  return (e = e ? e.displayName || e.name : "") ? Fi(e) : "";
}
function gd(e) {
  switch (e.tag) {
    case 5:
      return Fi(e.type);
    case 16:
      return Fi("Lazy");
    case 13:
      return Fi("Suspense");
    case 19:
      return Fi("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = $o(e.type, !1), e;
    case 11:
      return e = $o(e.type.render, !1), e;
    case 1:
      return e = $o(e.type, !0), e;
    default:
      return "";
  }
}
function Ta(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Kn:
      return "Fragment";
    case qn:
      return "Portal";
    case Ca:
      return "Profiler";
    case ks:
      return "StrictMode";
    case Sa:
      return "Suspense";
    case ba:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case fu:
      return (e.displayName || "Context") + ".Consumer";
    case du:
      return (e._context.displayName || "Context") + ".Provider";
    case Os:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Ps:
      return t = e.displayName || null, t !== null ? t : Ta(e.type) || "Memo";
    case hn:
      t = e._payload, e = e._init;
      try {
        return Ta(e(t));
      } catch {
      }
  }
  return null;
}
function md(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Ta(t);
    case 8:
      return t === ks ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Tn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function mu(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function vd(e) {
  var t = mu(e) ? "checked" : "value", i = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), c = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof i < "u" && typeof i.get == "function" && typeof i.set == "function") {
    var f = i.get, m = i.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return f.call(this);
    }, set: function(w) {
      c = "" + w, m.call(this, w);
    } }), Object.defineProperty(e, t, { enumerable: i.enumerable }), { getValue: function() {
      return c;
    }, setValue: function(w) {
      c = "" + w;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function xr(e) {
  e._valueTracker || (e._valueTracker = vd(e));
}
function vu(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var i = t.getValue(), c = "";
  return e && (c = mu(e) ? e.checked ? "true" : "false" : e.value), e = c, e !== i ? (t.setValue(e), !0) : !1;
}
function qr(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ea(e, t) {
  var i = t.checked;
  return He({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: i ?? e._wrapperState.initialChecked });
}
function kl(e, t) {
  var i = t.defaultValue == null ? "" : t.defaultValue, c = t.checked != null ? t.checked : t.defaultChecked;
  i = Tn(t.value != null ? t.value : i), e._wrapperState = { initialChecked: c, initialValue: i, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function yu(e, t) {
  t = t.checked, t != null && Es(e, "checked", t, !1);
}
function ka(e, t) {
  yu(e, t);
  var i = Tn(t.value), c = t.type;
  if (i != null) c === "number" ? (i === 0 && e.value === "" || e.value != i) && (e.value = "" + i) : e.value !== "" + i && (e.value = "" + i);
  else if (c === "submit" || c === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Oa(e, t.type, i) : t.hasOwnProperty("defaultValue") && Oa(e, t.type, Tn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Ol(e, t, i) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var c = t.type;
    if (!(c !== "submit" && c !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, i || t === e.value || (e.value = t), e.defaultValue = t;
  }
  i = e.name, i !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, i !== "" && (e.name = i);
}
function Oa(e, t, i) {
  (t !== "number" || qr(e.ownerDocument) !== e) && (i == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + i && (e.defaultValue = "" + i));
}
var Li = Array.isArray;
function li(e, t, i, c) {
  if (e = e.options, t) {
    t = {};
    for (var f = 0; f < i.length; f++) t["$" + i[f]] = !0;
    for (i = 0; i < e.length; i++) f = t.hasOwnProperty("$" + e[i].value), e[i].selected !== f && (e[i].selected = f), f && c && (e[i].defaultSelected = !0);
  } else {
    for (i = "" + Tn(i), t = null, f = 0; f < e.length; f++) {
      if (e[f].value === i) {
        e[f].selected = !0, c && (e[f].defaultSelected = !0);
        return;
      }
      t !== null || e[f].disabled || (t = e[f]);
    }
    t !== null && (t.selected = !0);
  }
}
function Pa(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(ce(91));
  return He({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Pl(e, t) {
  var i = t.value;
  if (i == null) {
    if (i = t.children, t = t.defaultValue, i != null) {
      if (t != null) throw Error(ce(92));
      if (Li(i)) {
        if (1 < i.length) throw Error(ce(93));
        i = i[0];
      }
      t = i;
    }
    t == null && (t = ""), i = t;
  }
  e._wrapperState = { initialValue: Tn(i) };
}
function xu(e, t) {
  var i = Tn(t.value), c = Tn(t.defaultValue);
  i != null && (i = "" + i, i !== e.value && (e.value = i), t.defaultValue == null && e.defaultValue !== i && (e.defaultValue = i)), c != null && (e.defaultValue = "" + c);
}
function Ml(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function wu(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ma(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? wu(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var wr, _u = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, i, c, f) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, i, c, f);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (wr = wr || document.createElement("div"), wr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = wr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function $i(e, t) {
  if (t) {
    var i = e.firstChild;
    if (i && i === e.lastChild && i.nodeType === 3) {
      i.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Bi = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, yd = ["Webkit", "ms", "Moz", "O"];
Object.keys(Bi).forEach(function(e) {
  yd.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Bi[t] = Bi[e];
  });
});
function Cu(e, t, i) {
  return t == null || typeof t == "boolean" || t === "" ? "" : i || typeof t != "number" || t === 0 || Bi.hasOwnProperty(e) && Bi[e] ? ("" + t).trim() : t + "px";
}
function Su(e, t) {
  e = e.style;
  for (var i in t) if (t.hasOwnProperty(i)) {
    var c = i.indexOf("--") === 0, f = Cu(i, t[i], c);
    i === "float" && (i = "cssFloat"), c ? e.setProperty(i, f) : e[i] = f;
  }
}
var xd = He({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function ja(e, t) {
  if (t) {
    if (xd[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(ce(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(ce(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(ce(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(ce(62));
  }
}
function Da(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Aa = null;
function Ms(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Fa = null, ci = null, ui = null;
function jl(e) {
  if (e = fr(e)) {
    if (typeof Fa != "function") throw Error(ce(280));
    var t = e.stateNode;
    t && (t = jo(t), Fa(e.stateNode, e.type, t));
  }
}
function bu(e) {
  ci ? ui ? ui.push(e) : ui = [e] : ci = e;
}
function Tu() {
  if (ci) {
    var e = ci, t = ui;
    if (ui = ci = null, jl(e), t) for (e = 0; e < t.length; e++) jl(t[e]);
  }
}
function Eu(e, t) {
  return e(t);
}
function ku() {
}
var Zo = !1;
function Ou(e, t, i) {
  if (Zo) return e(t, i);
  Zo = !0;
  try {
    return Eu(e, t, i);
  } finally {
    Zo = !1, (ci !== null || ui !== null) && (ku(), Tu());
  }
}
function Zi(e, t) {
  var i = e.stateNode;
  if (i === null) return null;
  var c = jo(i);
  if (c === null) return null;
  i = c[t];
  e: switch (t) {
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
      (c = !c.disabled) || (e = e.type, c = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !c;
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (i && typeof i != "function") throw Error(ce(231, t, typeof i));
  return i;
}
var La = !1;
if (rn) try {
  var ki = {};
  Object.defineProperty(ki, "passive", { get: function() {
    La = !0;
  } }), window.addEventListener("test", ki, ki), window.removeEventListener("test", ki, ki);
} catch {
  La = !1;
}
function wd(e, t, i, c, f, m, w, S, O) {
  var z = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(i, z);
  } catch (V) {
    this.onError(V);
  }
}
var zi = !1, Kr = null, Qr = !1, Ra = null, _d = { onError: function(e) {
  zi = !0, Kr = e;
} };
function Cd(e, t, i, c, f, m, w, S, O) {
  zi = !1, Kr = null, wd.apply(_d, arguments);
}
function Sd(e, t, i, c, f, m, w, S, O) {
  if (Cd.apply(this, arguments), zi) {
    if (zi) {
      var z = Kr;
      zi = !1, Kr = null;
    } else throw Error(ce(198));
    Qr || (Qr = !0, Ra = z);
  }
}
function Gn(e) {
  var t = e, i = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do
      t = e, t.flags & 4098 && (i = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? i : null;
}
function Pu(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Dl(e) {
  if (Gn(e) !== e) throw Error(ce(188));
}
function bd(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Gn(e), t === null) throw Error(ce(188));
    return t !== e ? null : e;
  }
  for (var i = e, c = t; ; ) {
    var f = i.return;
    if (f === null) break;
    var m = f.alternate;
    if (m === null) {
      if (c = f.return, c !== null) {
        i = c;
        continue;
      }
      break;
    }
    if (f.child === m.child) {
      for (m = f.child; m; ) {
        if (m === i) return Dl(f), e;
        if (m === c) return Dl(f), t;
        m = m.sibling;
      }
      throw Error(ce(188));
    }
    if (i.return !== c.return) i = f, c = m;
    else {
      for (var w = !1, S = f.child; S; ) {
        if (S === i) {
          w = !0, i = f, c = m;
          break;
        }
        if (S === c) {
          w = !0, c = f, i = m;
          break;
        }
        S = S.sibling;
      }
      if (!w) {
        for (S = m.child; S; ) {
          if (S === i) {
            w = !0, i = m, c = f;
            break;
          }
          if (S === c) {
            w = !0, c = m, i = f;
            break;
          }
          S = S.sibling;
        }
        if (!w) throw Error(ce(189));
      }
    }
    if (i.alternate !== c) throw Error(ce(190));
  }
  if (i.tag !== 3) throw Error(ce(188));
  return i.stateNode.current === i ? e : t;
}
function Mu(e) {
  return e = bd(e), e !== null ? ju(e) : null;
}
function ju(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = ju(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Du = St.unstable_scheduleCallback, Al = St.unstable_cancelCallback, Td = St.unstable_shouldYield, Ed = St.unstable_requestPaint, Ge = St.unstable_now, kd = St.unstable_getCurrentPriorityLevel, js = St.unstable_ImmediatePriority, Au = St.unstable_UserBlockingPriority, Jr = St.unstable_NormalPriority, Od = St.unstable_LowPriority, Fu = St.unstable_IdlePriority, ko = null, $t = null;
function Pd(e) {
  if ($t && typeof $t.onCommitFiberRoot == "function") try {
    $t.onCommitFiberRoot(ko, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Bt = Math.clz32 ? Math.clz32 : Dd, Md = Math.log, jd = Math.LN2;
function Dd(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Md(e) / jd | 0) | 0;
}
var _r = 64, Cr = 4194304;
function Ri(e) {
  switch (e & -e) {
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
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function eo(e, t) {
  var i = e.pendingLanes;
  if (i === 0) return 0;
  var c = 0, f = e.suspendedLanes, m = e.pingedLanes, w = i & 268435455;
  if (w !== 0) {
    var S = w & ~f;
    S !== 0 ? c = Ri(S) : (m &= w, m !== 0 && (c = Ri(m)));
  } else w = i & ~f, w !== 0 ? c = Ri(w) : m !== 0 && (c = Ri(m));
  if (c === 0) return 0;
  if (t !== 0 && t !== c && !(t & f) && (f = c & -c, m = t & -t, f >= m || f === 16 && (m & 4194240) !== 0)) return t;
  if (c & 4 && (c |= i & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= c; 0 < t; ) i = 31 - Bt(t), f = 1 << i, c |= e[i], t &= ~f;
  return c;
}
function Ad(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
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
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Fd(e, t) {
  for (var i = e.suspendedLanes, c = e.pingedLanes, f = e.expirationTimes, m = e.pendingLanes; 0 < m; ) {
    var w = 31 - Bt(m), S = 1 << w, O = f[w];
    O === -1 ? (!(S & i) || S & c) && (f[w] = Ad(S, t)) : O <= t && (e.expiredLanes |= S), m &= ~S;
  }
}
function Ia(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Lu() {
  var e = _r;
  return _r <<= 1, !(_r & 4194240) && (_r = 64), e;
}
function qo(e) {
  for (var t = [], i = 0; 31 > i; i++) t.push(e);
  return t;
}
function pr(e, t, i) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Bt(t), e[t] = i;
}
function Ld(e, t) {
  var i = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var c = e.eventTimes;
  for (e = e.expirationTimes; 0 < i; ) {
    var f = 31 - Bt(i), m = 1 << f;
    t[f] = 0, c[f] = -1, e[f] = -1, i &= ~m;
  }
}
function Ds(e, t) {
  var i = e.entangledLanes |= t;
  for (e = e.entanglements; i; ) {
    var c = 31 - Bt(i), f = 1 << c;
    f & t | e[c] & t && (e[c] |= t), i &= ~f;
  }
}
var je = 0;
function Ru(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Iu, As, Bu, zu, Nu, Ba = !1, Sr = [], vn = null, yn = null, xn = null, qi = /* @__PURE__ */ new Map(), Ki = /* @__PURE__ */ new Map(), dn = [], Rd = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Fl(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      vn = null;
      break;
    case "dragenter":
    case "dragleave":
      yn = null;
      break;
    case "mouseover":
    case "mouseout":
      xn = null;
      break;
    case "pointerover":
    case "pointerout":
      qi.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ki.delete(t.pointerId);
  }
}
function Oi(e, t, i, c, f, m) {
  return e === null || e.nativeEvent !== m ? (e = { blockedOn: t, domEventName: i, eventSystemFlags: c, nativeEvent: m, targetContainers: [f] }, t !== null && (t = fr(t), t !== null && As(t)), e) : (e.eventSystemFlags |= c, t = e.targetContainers, f !== null && t.indexOf(f) === -1 && t.push(f), e);
}
function Id(e, t, i, c, f) {
  switch (t) {
    case "focusin":
      return vn = Oi(vn, e, t, i, c, f), !0;
    case "dragenter":
      return yn = Oi(yn, e, t, i, c, f), !0;
    case "mouseover":
      return xn = Oi(xn, e, t, i, c, f), !0;
    case "pointerover":
      var m = f.pointerId;
      return qi.set(m, Oi(qi.get(m) || null, e, t, i, c, f)), !0;
    case "gotpointercapture":
      return m = f.pointerId, Ki.set(m, Oi(Ki.get(m) || null, e, t, i, c, f)), !0;
  }
  return !1;
}
function Uu(e) {
  var t = Ln(e.target);
  if (t !== null) {
    var i = Gn(t);
    if (i !== null) {
      if (t = i.tag, t === 13) {
        if (t = Pu(i), t !== null) {
          e.blockedOn = t, Nu(e.priority, function() {
            Bu(i);
          });
          return;
        }
      } else if (t === 3 && i.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = i.tag === 3 ? i.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Nr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var i = za(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (i === null) {
      i = e.nativeEvent;
      var c = new i.constructor(i.type, i);
      Aa = c, i.target.dispatchEvent(c), Aa = null;
    } else return t = fr(i), t !== null && As(t), e.blockedOn = i, !1;
    t.shift();
  }
  return !0;
}
function Ll(e, t, i) {
  Nr(e) && i.delete(t);
}
function Bd() {
  Ba = !1, vn !== null && Nr(vn) && (vn = null), yn !== null && Nr(yn) && (yn = null), xn !== null && Nr(xn) && (xn = null), qi.forEach(Ll), Ki.forEach(Ll);
}
function Pi(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Ba || (Ba = !0, St.unstable_scheduleCallback(St.unstable_NormalPriority, Bd)));
}
function Qi(e) {
  function t(f) {
    return Pi(f, e);
  }
  if (0 < Sr.length) {
    Pi(Sr[0], e);
    for (var i = 1; i < Sr.length; i++) {
      var c = Sr[i];
      c.blockedOn === e && (c.blockedOn = null);
    }
  }
  for (vn !== null && Pi(vn, e), yn !== null && Pi(yn, e), xn !== null && Pi(xn, e), qi.forEach(t), Ki.forEach(t), i = 0; i < dn.length; i++) c = dn[i], c.blockedOn === e && (c.blockedOn = null);
  for (; 0 < dn.length && (i = dn[0], i.blockedOn === null); ) Uu(i), i.blockedOn === null && dn.shift();
}
var hi = ln.ReactCurrentBatchConfig, to = !0;
function zd(e, t, i, c) {
  var f = je, m = hi.transition;
  hi.transition = null;
  try {
    je = 1, Fs(e, t, i, c);
  } finally {
    je = f, hi.transition = m;
  }
}
function Nd(e, t, i, c) {
  var f = je, m = hi.transition;
  hi.transition = null;
  try {
    je = 4, Fs(e, t, i, c);
  } finally {
    je = f, hi.transition = m;
  }
}
function Fs(e, t, i, c) {
  if (to) {
    var f = za(e, t, i, c);
    if (f === null) aa(e, t, c, no, i), Fl(e, c);
    else if (Id(f, e, t, i, c)) c.stopPropagation();
    else if (Fl(e, c), t & 4 && -1 < Rd.indexOf(e)) {
      for (; f !== null; ) {
        var m = fr(f);
        if (m !== null && Iu(m), m = za(e, t, i, c), m === null && aa(e, t, c, no, i), m === f) break;
        f = m;
      }
      f !== null && c.stopPropagation();
    } else aa(e, t, c, null, i);
  }
}
var no = null;
function za(e, t, i, c) {
  if (no = null, e = Ms(c), e = Ln(e), e !== null) if (t = Gn(e), t === null) e = null;
  else if (i = t.tag, i === 13) {
    if (e = Pu(t), e !== null) return e;
    e = null;
  } else if (i === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return no = e, null;
}
function Hu(e) {
  switch (e) {
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
      return 1;
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
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (kd()) {
        case js:
          return 1;
        case Au:
          return 4;
        case Jr:
        case Od:
          return 16;
        case Fu:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var gn = null, Ls = null, Ur = null;
function Wu() {
  if (Ur) return Ur;
  var e, t = Ls, i = t.length, c, f = "value" in gn ? gn.value : gn.textContent, m = f.length;
  for (e = 0; e < i && t[e] === f[e]; e++) ;
  var w = i - e;
  for (c = 1; c <= w && t[i - c] === f[m - c]; c++) ;
  return Ur = f.slice(e, 1 < c ? 1 - c : void 0);
}
function Hr(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function br() {
  return !0;
}
function Rl() {
  return !1;
}
function Tt(e) {
  function t(i, c, f, m, w) {
    this._reactName = i, this._targetInst = f, this.type = c, this.nativeEvent = m, this.target = w, this.currentTarget = null;
    for (var S in e) e.hasOwnProperty(S) && (i = e[S], this[S] = i ? i(m) : m[S]);
    return this.isDefaultPrevented = (m.defaultPrevented != null ? m.defaultPrevented : m.returnValue === !1) ? br : Rl, this.isPropagationStopped = Rl, this;
  }
  return He(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var i = this.nativeEvent;
    i && (i.preventDefault ? i.preventDefault() : typeof i.returnValue != "unknown" && (i.returnValue = !1), this.isDefaultPrevented = br);
  }, stopPropagation: function() {
    var i = this.nativeEvent;
    i && (i.stopPropagation ? i.stopPropagation() : typeof i.cancelBubble != "unknown" && (i.cancelBubble = !0), this.isPropagationStopped = br);
  }, persist: function() {
  }, isPersistent: br }), t;
}
var Si = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Rs = Tt(Si), dr = He({}, Si, { view: 0, detail: 0 }), Ud = Tt(dr), Ko, Qo, Mi, Oo = He({}, dr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Is, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Mi && (Mi && e.type === "mousemove" ? (Ko = e.screenX - Mi.screenX, Qo = e.screenY - Mi.screenY) : Qo = Ko = 0, Mi = e), Ko);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Qo;
} }), Il = Tt(Oo), Hd = He({}, Oo, { dataTransfer: 0 }), Wd = Tt(Hd), Yd = He({}, dr, { relatedTarget: 0 }), Jo = Tt(Yd), Xd = He({}, Si, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Gd = Tt(Xd), Vd = He({}, Si, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), $d = Tt(Vd), Zd = He({}, Si, { data: 0 }), Bl = Tt(Zd), qd = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, Kd = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, Qd = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Jd(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Qd[e]) ? !!t[e] : !1;
}
function Is() {
  return Jd;
}
var ef = He({}, dr, { key: function(e) {
  if (e.key) {
    var t = qd[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Hr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Kd[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Is, charCode: function(e) {
  return e.type === "keypress" ? Hr(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Hr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), tf = Tt(ef), nf = He({}, Oo, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), zl = Tt(nf), rf = He({}, dr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Is }), of = Tt(rf), af = He({}, Si, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), sf = Tt(af), lf = He({}, Oo, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), cf = Tt(lf), uf = [9, 13, 27, 32], Bs = rn && "CompositionEvent" in window, Ni = null;
rn && "documentMode" in document && (Ni = document.documentMode);
var hf = rn && "TextEvent" in window && !Ni, Yu = rn && (!Bs || Ni && 8 < Ni && 11 >= Ni), Nl = " ", Ul = !1;
function Xu(e, t) {
  switch (e) {
    case "keyup":
      return uf.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Gu(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Qn = !1;
function pf(e, t) {
  switch (e) {
    case "compositionend":
      return Gu(t);
    case "keypress":
      return t.which !== 32 ? null : (Ul = !0, Nl);
    case "textInput":
      return e = t.data, e === Nl && Ul ? null : e;
    default:
      return null;
  }
}
function df(e, t) {
  if (Qn) return e === "compositionend" || !Bs && Xu(e, t) ? (e = Wu(), Ur = Ls = gn = null, Qn = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Yu && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var ff = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Hl(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!ff[e.type] : t === "textarea";
}
function Vu(e, t, i, c) {
  bu(c), t = io(t, "onChange"), 0 < t.length && (i = new Rs("onChange", "change", null, i, c), e.push({ event: i, listeners: t }));
}
var Ui = null, Ji = null;
function gf(e) {
  rh(e, 0);
}
function Po(e) {
  var t = ti(e);
  if (vu(t)) return e;
}
function mf(e, t) {
  if (e === "change") return t;
}
var $u = !1;
if (rn) {
  var ea;
  if (rn) {
    var ta = "oninput" in document;
    if (!ta) {
      var Wl = document.createElement("div");
      Wl.setAttribute("oninput", "return;"), ta = typeof Wl.oninput == "function";
    }
    ea = ta;
  } else ea = !1;
  $u = ea && (!document.documentMode || 9 < document.documentMode);
}
function Yl() {
  Ui && (Ui.detachEvent("onpropertychange", Zu), Ji = Ui = null);
}
function Zu(e) {
  if (e.propertyName === "value" && Po(Ji)) {
    var t = [];
    Vu(t, Ji, e, Ms(e)), Ou(gf, t);
  }
}
function vf(e, t, i) {
  e === "focusin" ? (Yl(), Ui = t, Ji = i, Ui.attachEvent("onpropertychange", Zu)) : e === "focusout" && Yl();
}
function yf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Po(Ji);
}
function xf(e, t) {
  if (e === "click") return Po(t);
}
function wf(e, t) {
  if (e === "input" || e === "change") return Po(t);
}
function _f(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Nt = typeof Object.is == "function" ? Object.is : _f;
function er(e, t) {
  if (Nt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var i = Object.keys(e), c = Object.keys(t);
  if (i.length !== c.length) return !1;
  for (c = 0; c < i.length; c++) {
    var f = i[c];
    if (!_a.call(t, f) || !Nt(e[f], t[f])) return !1;
  }
  return !0;
}
function Xl(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Gl(e, t) {
  var i = Xl(e);
  e = 0;
  for (var c; i; ) {
    if (i.nodeType === 3) {
      if (c = e + i.textContent.length, e <= t && c >= t) return { node: i, offset: t - e };
      e = c;
    }
    e: {
      for (; i; ) {
        if (i.nextSibling) {
          i = i.nextSibling;
          break e;
        }
        i = i.parentNode;
      }
      i = void 0;
    }
    i = Xl(i);
  }
}
function qu(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? qu(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Ku() {
  for (var e = window, t = qr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var i = typeof t.contentWindow.location.href == "string";
    } catch {
      i = !1;
    }
    if (i) e = t.contentWindow;
    else break;
    t = qr(e.document);
  }
  return t;
}
function zs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Cf(e) {
  var t = Ku(), i = e.focusedElem, c = e.selectionRange;
  if (t !== i && i && i.ownerDocument && qu(i.ownerDocument.documentElement, i)) {
    if (c !== null && zs(i)) {
      if (t = c.start, e = c.end, e === void 0 && (e = t), "selectionStart" in i) i.selectionStart = t, i.selectionEnd = Math.min(e, i.value.length);
      else if (e = (t = i.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var f = i.textContent.length, m = Math.min(c.start, f);
        c = c.end === void 0 ? m : Math.min(c.end, f), !e.extend && m > c && (f = c, c = m, m = f), f = Gl(i, m);
        var w = Gl(
          i,
          c
        );
        f && w && (e.rangeCount !== 1 || e.anchorNode !== f.node || e.anchorOffset !== f.offset || e.focusNode !== w.node || e.focusOffset !== w.offset) && (t = t.createRange(), t.setStart(f.node, f.offset), e.removeAllRanges(), m > c ? (e.addRange(t), e.extend(w.node, w.offset)) : (t.setEnd(w.node, w.offset), e.addRange(t)));
      }
    }
    for (t = [], e = i; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof i.focus == "function" && i.focus(), i = 0; i < t.length; i++) e = t[i], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var Sf = rn && "documentMode" in document && 11 >= document.documentMode, Jn = null, Na = null, Hi = null, Ua = !1;
function Vl(e, t, i) {
  var c = i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
  Ua || Jn == null || Jn !== qr(c) || (c = Jn, "selectionStart" in c && zs(c) ? c = { start: c.selectionStart, end: c.selectionEnd } : (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection(), c = { anchorNode: c.anchorNode, anchorOffset: c.anchorOffset, focusNode: c.focusNode, focusOffset: c.focusOffset }), Hi && er(Hi, c) || (Hi = c, c = io(Na, "onSelect"), 0 < c.length && (t = new Rs("onSelect", "select", null, t, i), e.push({ event: t, listeners: c }), t.target = Jn)));
}
function Tr(e, t) {
  var i = {};
  return i[e.toLowerCase()] = t.toLowerCase(), i["Webkit" + e] = "webkit" + t, i["Moz" + e] = "moz" + t, i;
}
var ei = { animationend: Tr("Animation", "AnimationEnd"), animationiteration: Tr("Animation", "AnimationIteration"), animationstart: Tr("Animation", "AnimationStart"), transitionend: Tr("Transition", "TransitionEnd") }, na = {}, Qu = {};
rn && (Qu = document.createElement("div").style, "AnimationEvent" in window || (delete ei.animationend.animation, delete ei.animationiteration.animation, delete ei.animationstart.animation), "TransitionEvent" in window || delete ei.transitionend.transition);
function Mo(e) {
  if (na[e]) return na[e];
  if (!ei[e]) return e;
  var t = ei[e], i;
  for (i in t) if (t.hasOwnProperty(i) && i in Qu) return na[e] = t[i];
  return e;
}
var Ju = Mo("animationend"), eh = Mo("animationiteration"), th = Mo("animationstart"), nh = Mo("transitionend"), ih = /* @__PURE__ */ new Map(), $l = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function kn(e, t) {
  ih.set(e, t), Xn(t, [e]);
}
for (var ia = 0; ia < $l.length; ia++) {
  var ra = $l[ia], bf = ra.toLowerCase(), Tf = ra[0].toUpperCase() + ra.slice(1);
  kn(bf, "on" + Tf);
}
kn(Ju, "onAnimationEnd");
kn(eh, "onAnimationIteration");
kn(th, "onAnimationStart");
kn("dblclick", "onDoubleClick");
kn("focusin", "onFocus");
kn("focusout", "onBlur");
kn(nh, "onTransitionEnd");
fi("onMouseEnter", ["mouseout", "mouseover"]);
fi("onMouseLeave", ["mouseout", "mouseover"]);
fi("onPointerEnter", ["pointerout", "pointerover"]);
fi("onPointerLeave", ["pointerout", "pointerover"]);
Xn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Xn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Xn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Xn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Xn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Xn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Ii = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Ef = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ii));
function Zl(e, t, i) {
  var c = e.type || "unknown-event";
  e.currentTarget = i, Sd(c, t, void 0, e), e.currentTarget = null;
}
function rh(e, t) {
  t = (t & 4) !== 0;
  for (var i = 0; i < e.length; i++) {
    var c = e[i], f = c.event;
    c = c.listeners;
    e: {
      var m = void 0;
      if (t) for (var w = c.length - 1; 0 <= w; w--) {
        var S = c[w], O = S.instance, z = S.currentTarget;
        if (S = S.listener, O !== m && f.isPropagationStopped()) break e;
        Zl(f, S, z), m = O;
      }
      else for (w = 0; w < c.length; w++) {
        if (S = c[w], O = S.instance, z = S.currentTarget, S = S.listener, O !== m && f.isPropagationStopped()) break e;
        Zl(f, S, z), m = O;
      }
    }
  }
  if (Qr) throw e = Ra, Qr = !1, Ra = null, e;
}
function Le(e, t) {
  var i = t[Ga];
  i === void 0 && (i = t[Ga] = /* @__PURE__ */ new Set());
  var c = e + "__bubble";
  i.has(c) || (oh(t, e, 2, !1), i.add(c));
}
function oa(e, t, i) {
  var c = 0;
  t && (c |= 4), oh(i, e, c, t);
}
var Er = "_reactListening" + Math.random().toString(36).slice(2);
function tr(e) {
  if (!e[Er]) {
    e[Er] = !0, pu.forEach(function(i) {
      i !== "selectionchange" && (Ef.has(i) || oa(i, !1, e), oa(i, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Er] || (t[Er] = !0, oa("selectionchange", !1, t));
  }
}
function oh(e, t, i, c) {
  switch (Hu(t)) {
    case 1:
      var f = zd;
      break;
    case 4:
      f = Nd;
      break;
    default:
      f = Fs;
  }
  i = f.bind(null, t, i, e), f = void 0, !La || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (f = !0), c ? f !== void 0 ? e.addEventListener(t, i, { capture: !0, passive: f }) : e.addEventListener(t, i, !0) : f !== void 0 ? e.addEventListener(t, i, { passive: f }) : e.addEventListener(t, i, !1);
}
function aa(e, t, i, c, f) {
  var m = c;
  if (!(t & 1) && !(t & 2) && c !== null) e: for (; ; ) {
    if (c === null) return;
    var w = c.tag;
    if (w === 3 || w === 4) {
      var S = c.stateNode.containerInfo;
      if (S === f || S.nodeType === 8 && S.parentNode === f) break;
      if (w === 4) for (w = c.return; w !== null; ) {
        var O = w.tag;
        if ((O === 3 || O === 4) && (O = w.stateNode.containerInfo, O === f || O.nodeType === 8 && O.parentNode === f)) return;
        w = w.return;
      }
      for (; S !== null; ) {
        if (w = Ln(S), w === null) return;
        if (O = w.tag, O === 5 || O === 6) {
          c = m = w;
          continue e;
        }
        S = S.parentNode;
      }
    }
    c = c.return;
  }
  Ou(function() {
    var z = m, V = Ms(i), K = [];
    e: {
      var Z = ih.get(e);
      if (Z !== void 0) {
        var te = Rs, ae = e;
        switch (e) {
          case "keypress":
            if (Hr(i) === 0) break e;
          case "keydown":
          case "keyup":
            te = tf;
            break;
          case "focusin":
            ae = "focus", te = Jo;
            break;
          case "focusout":
            ae = "blur", te = Jo;
            break;
          case "beforeblur":
          case "afterblur":
            te = Jo;
            break;
          case "click":
            if (i.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            te = Il;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            te = Wd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            te = of;
            break;
          case Ju:
          case eh:
          case th:
            te = Gd;
            break;
          case nh:
            te = sf;
            break;
          case "scroll":
            te = Ud;
            break;
          case "wheel":
            te = cf;
            break;
          case "copy":
          case "cut":
          case "paste":
            te = $d;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            te = zl;
        }
        var ue = (t & 4) !== 0, Te = !ue && e === "scroll", G = ue ? Z !== null ? Z + "Capture" : null : Z;
        ue = [];
        for (var N = z, R; N !== null; ) {
          R = N;
          var J = R.stateNode;
          if (R.tag === 5 && J !== null && (R = J, G !== null && (J = Zi(N, G), J != null && ue.push(nr(N, J, R)))), Te) break;
          N = N.return;
        }
        0 < ue.length && (Z = new te(Z, ae, null, i, V), K.push({ event: Z, listeners: ue }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (Z = e === "mouseover" || e === "pointerover", te = e === "mouseout" || e === "pointerout", Z && i !== Aa && (ae = i.relatedTarget || i.fromElement) && (Ln(ae) || ae[on])) break e;
        if ((te || Z) && (Z = V.window === V ? V : (Z = V.ownerDocument) ? Z.defaultView || Z.parentWindow : window, te ? (ae = i.relatedTarget || i.toElement, te = z, ae = ae ? Ln(ae) : null, ae !== null && (Te = Gn(ae), ae !== Te || ae.tag !== 5 && ae.tag !== 6) && (ae = null)) : (te = null, ae = z), te !== ae)) {
          if (ue = Il, J = "onMouseLeave", G = "onMouseEnter", N = "mouse", (e === "pointerout" || e === "pointerover") && (ue = zl, J = "onPointerLeave", G = "onPointerEnter", N = "pointer"), Te = te == null ? Z : ti(te), R = ae == null ? Z : ti(ae), Z = new ue(J, N + "leave", te, i, V), Z.target = Te, Z.relatedTarget = R, J = null, Ln(V) === z && (ue = new ue(G, N + "enter", ae, i, V), ue.target = R, ue.relatedTarget = Te, J = ue), Te = J, te && ae) t: {
            for (ue = te, G = ae, N = 0, R = ue; R; R = Zn(R)) N++;
            for (R = 0, J = G; J; J = Zn(J)) R++;
            for (; 0 < N - R; ) ue = Zn(ue), N--;
            for (; 0 < R - N; ) G = Zn(G), R--;
            for (; N--; ) {
              if (ue === G || G !== null && ue === G.alternate) break t;
              ue = Zn(ue), G = Zn(G);
            }
            ue = null;
          }
          else ue = null;
          te !== null && ql(K, Z, te, ue, !1), ae !== null && Te !== null && ql(K, Te, ae, ue, !0);
        }
      }
      e: {
        if (Z = z ? ti(z) : window, te = Z.nodeName && Z.nodeName.toLowerCase(), te === "select" || te === "input" && Z.type === "file") var de = mf;
        else if (Hl(Z)) if ($u) de = wf;
        else {
          de = yf;
          var ge = vf;
        }
        else (te = Z.nodeName) && te.toLowerCase() === "input" && (Z.type === "checkbox" || Z.type === "radio") && (de = xf);
        if (de && (de = de(e, z))) {
          Vu(K, de, i, V);
          break e;
        }
        ge && ge(e, Z, z), e === "focusout" && (ge = Z._wrapperState) && ge.controlled && Z.type === "number" && Oa(Z, "number", Z.value);
      }
      switch (ge = z ? ti(z) : window, e) {
        case "focusin":
          (Hl(ge) || ge.contentEditable === "true") && (Jn = ge, Na = z, Hi = null);
          break;
        case "focusout":
          Hi = Na = Jn = null;
          break;
        case "mousedown":
          Ua = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ua = !1, Vl(K, i, V);
          break;
        case "selectionchange":
          if (Sf) break;
        case "keydown":
        case "keyup":
          Vl(K, i, V);
      }
      var he;
      if (Bs) e: {
        switch (e) {
          case "compositionstart":
            var v = "onCompositionStart";
            break e;
          case "compositionend":
            v = "onCompositionEnd";
            break e;
          case "compositionupdate":
            v = "onCompositionUpdate";
            break e;
        }
        v = void 0;
      }
      else Qn ? Xu(e, i) && (v = "onCompositionEnd") : e === "keydown" && i.keyCode === 229 && (v = "onCompositionStart");
      v && (Yu && i.locale !== "ko" && (Qn || v !== "onCompositionStart" ? v === "onCompositionEnd" && Qn && (he = Wu()) : (gn = V, Ls = "value" in gn ? gn.value : gn.textContent, Qn = !0)), ge = io(z, v), 0 < ge.length && (v = new Bl(v, e, null, i, V), K.push({ event: v, listeners: ge }), he ? v.data = he : (he = Gu(i), he !== null && (v.data = he)))), (he = hf ? pf(e, i) : df(e, i)) && (z = io(z, "onBeforeInput"), 0 < z.length && (V = new Bl("onBeforeInput", "beforeinput", null, i, V), K.push({ event: V, listeners: z }), V.data = he));
    }
    rh(K, t);
  });
}
function nr(e, t, i) {
  return { instance: e, listener: t, currentTarget: i };
}
function io(e, t) {
  for (var i = t + "Capture", c = []; e !== null; ) {
    var f = e, m = f.stateNode;
    f.tag === 5 && m !== null && (f = m, m = Zi(e, i), m != null && c.unshift(nr(e, m, f)), m = Zi(e, t), m != null && c.push(nr(e, m, f))), e = e.return;
  }
  return c;
}
function Zn(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ql(e, t, i, c, f) {
  for (var m = t._reactName, w = []; i !== null && i !== c; ) {
    var S = i, O = S.alternate, z = S.stateNode;
    if (O !== null && O === c) break;
    S.tag === 5 && z !== null && (S = z, f ? (O = Zi(i, m), O != null && w.unshift(nr(i, O, S))) : f || (O = Zi(i, m), O != null && w.push(nr(i, O, S)))), i = i.return;
  }
  w.length !== 0 && e.push({ event: t, listeners: w });
}
var kf = /\r\n?/g, Of = /\u0000|\uFFFD/g;
function Kl(e) {
  return (typeof e == "string" ? e : "" + e).replace(kf, `
`).replace(Of, "");
}
function kr(e, t, i) {
  if (t = Kl(t), Kl(e) !== t && i) throw Error(ce(425));
}
function ro() {
}
var Ha = null, Wa = null;
function Ya(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Xa = typeof setTimeout == "function" ? setTimeout : void 0, Pf = typeof clearTimeout == "function" ? clearTimeout : void 0, Ql = typeof Promise == "function" ? Promise : void 0, Mf = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ql < "u" ? function(e) {
  return Ql.resolve(null).then(e).catch(jf);
} : Xa;
function jf(e) {
  setTimeout(function() {
    throw e;
  });
}
function sa(e, t) {
  var i = t, c = 0;
  do {
    var f = i.nextSibling;
    if (e.removeChild(i), f && f.nodeType === 8) if (i = f.data, i === "/$") {
      if (c === 0) {
        e.removeChild(f), Qi(t);
        return;
      }
      c--;
    } else i !== "$" && i !== "$?" && i !== "$!" || c++;
    i = f;
  } while (i);
  Qi(t);
}
function wn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Jl(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var i = e.data;
      if (i === "$" || i === "$!" || i === "$?") {
        if (t === 0) return e;
        t--;
      } else i === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var bi = Math.random().toString(36).slice(2), Xt = "__reactFiber$" + bi, ir = "__reactProps$" + bi, on = "__reactContainer$" + bi, Ga = "__reactEvents$" + bi, Df = "__reactListeners$" + bi, Af = "__reactHandles$" + bi;
function Ln(e) {
  var t = e[Xt];
  if (t) return t;
  for (var i = e.parentNode; i; ) {
    if (t = i[on] || i[Xt]) {
      if (i = t.alternate, t.child !== null || i !== null && i.child !== null) for (e = Jl(e); e !== null; ) {
        if (i = e[Xt]) return i;
        e = Jl(e);
      }
      return t;
    }
    e = i, i = e.parentNode;
  }
  return null;
}
function fr(e) {
  return e = e[Xt] || e[on], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function ti(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(ce(33));
}
function jo(e) {
  return e[ir] || null;
}
var Va = [], ni = -1;
function On(e) {
  return { current: e };
}
function Re(e) {
  0 > ni || (e.current = Va[ni], Va[ni] = null, ni--);
}
function Fe(e, t) {
  ni++, Va[ni] = e.current, e.current = t;
}
var En = {}, st = On(En), vt = On(!1), Nn = En;
function gi(e, t) {
  var i = e.type.contextTypes;
  if (!i) return En;
  var c = e.stateNode;
  if (c && c.__reactInternalMemoizedUnmaskedChildContext === t) return c.__reactInternalMemoizedMaskedChildContext;
  var f = {}, m;
  for (m in i) f[m] = t[m];
  return c && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = f), f;
}
function yt(e) {
  return e = e.childContextTypes, e != null;
}
function oo() {
  Re(vt), Re(st);
}
function ec(e, t, i) {
  if (st.current !== En) throw Error(ce(168));
  Fe(st, t), Fe(vt, i);
}
function ah(e, t, i) {
  var c = e.stateNode;
  if (t = t.childContextTypes, typeof c.getChildContext != "function") return i;
  c = c.getChildContext();
  for (var f in c) if (!(f in t)) throw Error(ce(108, md(e) || "Unknown", f));
  return He({}, i, c);
}
function ao(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || En, Nn = st.current, Fe(st, e), Fe(vt, vt.current), !0;
}
function tc(e, t, i) {
  var c = e.stateNode;
  if (!c) throw Error(ce(169));
  i ? (e = ah(e, t, Nn), c.__reactInternalMemoizedMergedChildContext = e, Re(vt), Re(st), Fe(st, e)) : Re(vt), Fe(vt, i);
}
var Qt = null, Do = !1, la = !1;
function sh(e) {
  Qt === null ? Qt = [e] : Qt.push(e);
}
function Ff(e) {
  Do = !0, sh(e);
}
function Pn() {
  if (!la && Qt !== null) {
    la = !0;
    var e = 0, t = je;
    try {
      var i = Qt;
      for (je = 1; e < i.length; e++) {
        var c = i[e];
        do
          c = c(!0);
        while (c !== null);
      }
      Qt = null, Do = !1;
    } catch (f) {
      throw Qt !== null && (Qt = Qt.slice(e + 1)), Du(js, Pn), f;
    } finally {
      je = t, la = !1;
    }
  }
  return null;
}
var ii = [], ri = 0, so = null, lo = 0, kt = [], Ot = 0, Un = null, Jt = 1, en = "";
function Dn(e, t) {
  ii[ri++] = lo, ii[ri++] = so, so = e, lo = t;
}
function lh(e, t, i) {
  kt[Ot++] = Jt, kt[Ot++] = en, kt[Ot++] = Un, Un = e;
  var c = Jt;
  e = en;
  var f = 32 - Bt(c) - 1;
  c &= ~(1 << f), i += 1;
  var m = 32 - Bt(t) + f;
  if (30 < m) {
    var w = f - f % 5;
    m = (c & (1 << w) - 1).toString(32), c >>= w, f -= w, Jt = 1 << 32 - Bt(t) + f | i << f | c, en = m + e;
  } else Jt = 1 << m | i << f | c, en = e;
}
function Ns(e) {
  e.return !== null && (Dn(e, 1), lh(e, 1, 0));
}
function Us(e) {
  for (; e === so; ) so = ii[--ri], ii[ri] = null, lo = ii[--ri], ii[ri] = null;
  for (; e === Un; ) Un = kt[--Ot], kt[Ot] = null, en = kt[--Ot], kt[Ot] = null, Jt = kt[--Ot], kt[Ot] = null;
}
var Ct = null, _t = null, Ie = !1, It = null;
function ch(e, t) {
  var i = Pt(5, null, null, 0);
  i.elementType = "DELETED", i.stateNode = t, i.return = e, t = e.deletions, t === null ? (e.deletions = [i], e.flags |= 16) : t.push(i);
}
function nc(e, t) {
  switch (e.tag) {
    case 5:
      var i = e.type;
      return t = t.nodeType !== 1 || i.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ct = e, _t = wn(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ct = e, _t = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (i = Un !== null ? { id: Jt, overflow: en } : null, e.memoizedState = { dehydrated: t, treeContext: i, retryLane: 1073741824 }, i = Pt(18, null, null, 0), i.stateNode = t, i.return = e, e.child = i, Ct = e, _t = null, !0) : !1;
    default:
      return !1;
  }
}
function $a(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Za(e) {
  if (Ie) {
    var t = _t;
    if (t) {
      var i = t;
      if (!nc(e, t)) {
        if ($a(e)) throw Error(ce(418));
        t = wn(i.nextSibling);
        var c = Ct;
        t && nc(e, t) ? ch(c, i) : (e.flags = e.flags & -4097 | 2, Ie = !1, Ct = e);
      }
    } else {
      if ($a(e)) throw Error(ce(418));
      e.flags = e.flags & -4097 | 2, Ie = !1, Ct = e;
    }
  }
}
function ic(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Ct = e;
}
function Or(e) {
  if (e !== Ct) return !1;
  if (!Ie) return ic(e), Ie = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Ya(e.type, e.memoizedProps)), t && (t = _t)) {
    if ($a(e)) throw uh(), Error(ce(418));
    for (; t; ) ch(e, t), t = wn(t.nextSibling);
  }
  if (ic(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(ce(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var i = e.data;
          if (i === "/$") {
            if (t === 0) {
              _t = wn(e.nextSibling);
              break e;
            }
            t--;
          } else i !== "$" && i !== "$!" && i !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      _t = null;
    }
  } else _t = Ct ? wn(e.stateNode.nextSibling) : null;
  return !0;
}
function uh() {
  for (var e = _t; e; ) e = wn(e.nextSibling);
}
function mi() {
  _t = Ct = null, Ie = !1;
}
function Hs(e) {
  It === null ? It = [e] : It.push(e);
}
var Lf = ln.ReactCurrentBatchConfig;
function ji(e, t, i) {
  if (e = i.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (i._owner) {
      if (i = i._owner, i) {
        if (i.tag !== 1) throw Error(ce(309));
        var c = i.stateNode;
      }
      if (!c) throw Error(ce(147, e));
      var f = c, m = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === m ? t.ref : (t = function(w) {
        var S = f.refs;
        w === null ? delete S[m] : S[m] = w;
      }, t._stringRef = m, t);
    }
    if (typeof e != "string") throw Error(ce(284));
    if (!i._owner) throw Error(ce(290, e));
  }
  return e;
}
function Pr(e, t) {
  throw e = Object.prototype.toString.call(t), Error(ce(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function rc(e) {
  var t = e._init;
  return t(e._payload);
}
function hh(e) {
  function t(G, N) {
    if (e) {
      var R = G.deletions;
      R === null ? (G.deletions = [N], G.flags |= 16) : R.push(N);
    }
  }
  function i(G, N) {
    if (!e) return null;
    for (; N !== null; ) t(G, N), N = N.sibling;
    return null;
  }
  function c(G, N) {
    for (G = /* @__PURE__ */ new Map(); N !== null; ) N.key !== null ? G.set(N.key, N) : G.set(N.index, N), N = N.sibling;
    return G;
  }
  function f(G, N) {
    return G = bn(G, N), G.index = 0, G.sibling = null, G;
  }
  function m(G, N, R) {
    return G.index = R, e ? (R = G.alternate, R !== null ? (R = R.index, R < N ? (G.flags |= 2, N) : R) : (G.flags |= 2, N)) : (G.flags |= 1048576, N);
  }
  function w(G) {
    return e && G.alternate === null && (G.flags |= 2), G;
  }
  function S(G, N, R, J) {
    return N === null || N.tag !== 6 ? (N = ga(R, G.mode, J), N.return = G, N) : (N = f(N, R), N.return = G, N);
  }
  function O(G, N, R, J) {
    var de = R.type;
    return de === Kn ? V(G, N, R.props.children, J, R.key) : N !== null && (N.elementType === de || typeof de == "object" && de !== null && de.$$typeof === hn && rc(de) === N.type) ? (J = f(N, R.props), J.ref = ji(G, N, R), J.return = G, J) : (J = Zr(R.type, R.key, R.props, null, G.mode, J), J.ref = ji(G, N, R), J.return = G, J);
  }
  function z(G, N, R, J) {
    return N === null || N.tag !== 4 || N.stateNode.containerInfo !== R.containerInfo || N.stateNode.implementation !== R.implementation ? (N = ma(R, G.mode, J), N.return = G, N) : (N = f(N, R.children || []), N.return = G, N);
  }
  function V(G, N, R, J, de) {
    return N === null || N.tag !== 7 ? (N = zn(R, G.mode, J, de), N.return = G, N) : (N = f(N, R), N.return = G, N);
  }
  function K(G, N, R) {
    if (typeof N == "string" && N !== "" || typeof N == "number") return N = ga("" + N, G.mode, R), N.return = G, N;
    if (typeof N == "object" && N !== null) {
      switch (N.$$typeof) {
        case yr:
          return R = Zr(N.type, N.key, N.props, null, G.mode, R), R.ref = ji(G, null, N), R.return = G, R;
        case qn:
          return N = ma(N, G.mode, R), N.return = G, N;
        case hn:
          var J = N._init;
          return K(G, J(N._payload), R);
      }
      if (Li(N) || Ei(N)) return N = zn(N, G.mode, R, null), N.return = G, N;
      Pr(G, N);
    }
    return null;
  }
  function Z(G, N, R, J) {
    var de = N !== null ? N.key : null;
    if (typeof R == "string" && R !== "" || typeof R == "number") return de !== null ? null : S(G, N, "" + R, J);
    if (typeof R == "object" && R !== null) {
      switch (R.$$typeof) {
        case yr:
          return R.key === de ? O(G, N, R, J) : null;
        case qn:
          return R.key === de ? z(G, N, R, J) : null;
        case hn:
          return de = R._init, Z(
            G,
            N,
            de(R._payload),
            J
          );
      }
      if (Li(R) || Ei(R)) return de !== null ? null : V(G, N, R, J, null);
      Pr(G, R);
    }
    return null;
  }
  function te(G, N, R, J, de) {
    if (typeof J == "string" && J !== "" || typeof J == "number") return G = G.get(R) || null, S(N, G, "" + J, de);
    if (typeof J == "object" && J !== null) {
      switch (J.$$typeof) {
        case yr:
          return G = G.get(J.key === null ? R : J.key) || null, O(N, G, J, de);
        case qn:
          return G = G.get(J.key === null ? R : J.key) || null, z(N, G, J, de);
        case hn:
          var ge = J._init;
          return te(G, N, R, ge(J._payload), de);
      }
      if (Li(J) || Ei(J)) return G = G.get(R) || null, V(N, G, J, de, null);
      Pr(N, J);
    }
    return null;
  }
  function ae(G, N, R, J) {
    for (var de = null, ge = null, he = N, v = N = 0, ke = null; he !== null && v < R.length; v++) {
      he.index > v ? (ke = he, he = null) : ke = he.sibling;
      var F = Z(G, he, R[v], J);
      if (F === null) {
        he === null && (he = ke);
        break;
      }
      e && he && F.alternate === null && t(G, he), N = m(F, N, v), ge === null ? de = F : ge.sibling = F, ge = F, he = ke;
    }
    if (v === R.length) return i(G, he), Ie && Dn(G, v), de;
    if (he === null) {
      for (; v < R.length; v++) he = K(G, R[v], J), he !== null && (N = m(he, N, v), ge === null ? de = he : ge.sibling = he, ge = he);
      return Ie && Dn(G, v), de;
    }
    for (he = c(G, he); v < R.length; v++) ke = te(he, G, v, R[v], J), ke !== null && (e && ke.alternate !== null && he.delete(ke.key === null ? v : ke.key), N = m(ke, N, v), ge === null ? de = ke : ge.sibling = ke, ge = ke);
    return e && he.forEach(function(Me) {
      return t(G, Me);
    }), Ie && Dn(G, v), de;
  }
  function ue(G, N, R, J) {
    var de = Ei(R);
    if (typeof de != "function") throw Error(ce(150));
    if (R = de.call(R), R == null) throw Error(ce(151));
    for (var ge = de = null, he = N, v = N = 0, ke = null, F = R.next(); he !== null && !F.done; v++, F = R.next()) {
      he.index > v ? (ke = he, he = null) : ke = he.sibling;
      var Me = Z(G, he, F.value, J);
      if (Me === null) {
        he === null && (he = ke);
        break;
      }
      e && he && Me.alternate === null && t(G, he), N = m(Me, N, v), ge === null ? de = Me : ge.sibling = Me, ge = Me, he = ke;
    }
    if (F.done) return i(
      G,
      he
    ), Ie && Dn(G, v), de;
    if (he === null) {
      for (; !F.done; v++, F = R.next()) F = K(G, F.value, J), F !== null && (N = m(F, N, v), ge === null ? de = F : ge.sibling = F, ge = F);
      return Ie && Dn(G, v), de;
    }
    for (he = c(G, he); !F.done; v++, F = R.next()) F = te(he, G, v, F.value, J), F !== null && (e && F.alternate !== null && he.delete(F.key === null ? v : F.key), N = m(F, N, v), ge === null ? de = F : ge.sibling = F, ge = F);
    return e && he.forEach(function(qe) {
      return t(G, qe);
    }), Ie && Dn(G, v), de;
  }
  function Te(G, N, R, J) {
    if (typeof R == "object" && R !== null && R.type === Kn && R.key === null && (R = R.props.children), typeof R == "object" && R !== null) {
      switch (R.$$typeof) {
        case yr:
          e: {
            for (var de = R.key, ge = N; ge !== null; ) {
              if (ge.key === de) {
                if (de = R.type, de === Kn) {
                  if (ge.tag === 7) {
                    i(G, ge.sibling), N = f(ge, R.props.children), N.return = G, G = N;
                    break e;
                  }
                } else if (ge.elementType === de || typeof de == "object" && de !== null && de.$$typeof === hn && rc(de) === ge.type) {
                  i(G, ge.sibling), N = f(ge, R.props), N.ref = ji(G, ge, R), N.return = G, G = N;
                  break e;
                }
                i(G, ge);
                break;
              } else t(G, ge);
              ge = ge.sibling;
            }
            R.type === Kn ? (N = zn(R.props.children, G.mode, J, R.key), N.return = G, G = N) : (J = Zr(R.type, R.key, R.props, null, G.mode, J), J.ref = ji(G, N, R), J.return = G, G = J);
          }
          return w(G);
        case qn:
          e: {
            for (ge = R.key; N !== null; ) {
              if (N.key === ge) if (N.tag === 4 && N.stateNode.containerInfo === R.containerInfo && N.stateNode.implementation === R.implementation) {
                i(G, N.sibling), N = f(N, R.children || []), N.return = G, G = N;
                break e;
              } else {
                i(G, N);
                break;
              }
              else t(G, N);
              N = N.sibling;
            }
            N = ma(R, G.mode, J), N.return = G, G = N;
          }
          return w(G);
        case hn:
          return ge = R._init, Te(G, N, ge(R._payload), J);
      }
      if (Li(R)) return ae(G, N, R, J);
      if (Ei(R)) return ue(G, N, R, J);
      Pr(G, R);
    }
    return typeof R == "string" && R !== "" || typeof R == "number" ? (R = "" + R, N !== null && N.tag === 6 ? (i(G, N.sibling), N = f(N, R), N.return = G, G = N) : (i(G, N), N = ga(R, G.mode, J), N.return = G, G = N), w(G)) : i(G, N);
  }
  return Te;
}
var vi = hh(!0), ph = hh(!1), co = On(null), uo = null, oi = null, Ws = null;
function Ys() {
  Ws = oi = uo = null;
}
function Xs(e) {
  var t = co.current;
  Re(co), e._currentValue = t;
}
function qa(e, t, i) {
  for (; e !== null; ) {
    var c = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, c !== null && (c.childLanes |= t)) : c !== null && (c.childLanes & t) !== t && (c.childLanes |= t), e === i) break;
    e = e.return;
  }
}
function pi(e, t) {
  uo = e, Ws = oi = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (mt = !0), e.firstContext = null);
}
function jt(e) {
  var t = e._currentValue;
  if (Ws !== e) if (e = { context: e, memoizedValue: t, next: null }, oi === null) {
    if (uo === null) throw Error(ce(308));
    oi = e, uo.dependencies = { lanes: 0, firstContext: e };
  } else oi = oi.next = e;
  return t;
}
var Rn = null;
function Gs(e) {
  Rn === null ? Rn = [e] : Rn.push(e);
}
function dh(e, t, i, c) {
  var f = t.interleaved;
  return f === null ? (i.next = i, Gs(t)) : (i.next = f.next, f.next = i), t.interleaved = i, an(e, c);
}
function an(e, t) {
  e.lanes |= t;
  var i = e.alternate;
  for (i !== null && (i.lanes |= t), i = e, e = e.return; e !== null; ) e.childLanes |= t, i = e.alternate, i !== null && (i.childLanes |= t), i = e, e = e.return;
  return i.tag === 3 ? i.stateNode : null;
}
var pn = !1;
function Vs(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function fh(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function nn(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function _n(e, t, i) {
  var c = e.updateQueue;
  if (c === null) return null;
  if (c = c.shared, Oe & 2) {
    var f = c.pending;
    return f === null ? t.next = t : (t.next = f.next, f.next = t), c.pending = t, an(e, i);
  }
  return f = c.interleaved, f === null ? (t.next = t, Gs(c)) : (t.next = f.next, f.next = t), c.interleaved = t, an(e, i);
}
function Wr(e, t, i) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (i & 4194240) !== 0)) {
    var c = t.lanes;
    c &= e.pendingLanes, i |= c, t.lanes = i, Ds(e, i);
  }
}
function oc(e, t) {
  var i = e.updateQueue, c = e.alternate;
  if (c !== null && (c = c.updateQueue, i === c)) {
    var f = null, m = null;
    if (i = i.firstBaseUpdate, i !== null) {
      do {
        var w = { eventTime: i.eventTime, lane: i.lane, tag: i.tag, payload: i.payload, callback: i.callback, next: null };
        m === null ? f = m = w : m = m.next = w, i = i.next;
      } while (i !== null);
      m === null ? f = m = t : m = m.next = t;
    } else f = m = t;
    i = { baseState: c.baseState, firstBaseUpdate: f, lastBaseUpdate: m, shared: c.shared, effects: c.effects }, e.updateQueue = i;
    return;
  }
  e = i.lastBaseUpdate, e === null ? i.firstBaseUpdate = t : e.next = t, i.lastBaseUpdate = t;
}
function ho(e, t, i, c) {
  var f = e.updateQueue;
  pn = !1;
  var m = f.firstBaseUpdate, w = f.lastBaseUpdate, S = f.shared.pending;
  if (S !== null) {
    f.shared.pending = null;
    var O = S, z = O.next;
    O.next = null, w === null ? m = z : w.next = z, w = O;
    var V = e.alternate;
    V !== null && (V = V.updateQueue, S = V.lastBaseUpdate, S !== w && (S === null ? V.firstBaseUpdate = z : S.next = z, V.lastBaseUpdate = O));
  }
  if (m !== null) {
    var K = f.baseState;
    w = 0, V = z = O = null, S = m;
    do {
      var Z = S.lane, te = S.eventTime;
      if ((c & Z) === Z) {
        V !== null && (V = V.next = {
          eventTime: te,
          lane: 0,
          tag: S.tag,
          payload: S.payload,
          callback: S.callback,
          next: null
        });
        e: {
          var ae = e, ue = S;
          switch (Z = t, te = i, ue.tag) {
            case 1:
              if (ae = ue.payload, typeof ae == "function") {
                K = ae.call(te, K, Z);
                break e;
              }
              K = ae;
              break e;
            case 3:
              ae.flags = ae.flags & -65537 | 128;
            case 0:
              if (ae = ue.payload, Z = typeof ae == "function" ? ae.call(te, K, Z) : ae, Z == null) break e;
              K = He({}, K, Z);
              break e;
            case 2:
              pn = !0;
          }
        }
        S.callback !== null && S.lane !== 0 && (e.flags |= 64, Z = f.effects, Z === null ? f.effects = [S] : Z.push(S));
      } else te = { eventTime: te, lane: Z, tag: S.tag, payload: S.payload, callback: S.callback, next: null }, V === null ? (z = V = te, O = K) : V = V.next = te, w |= Z;
      if (S = S.next, S === null) {
        if (S = f.shared.pending, S === null) break;
        Z = S, S = Z.next, Z.next = null, f.lastBaseUpdate = Z, f.shared.pending = null;
      }
    } while (!0);
    if (V === null && (O = K), f.baseState = O, f.firstBaseUpdate = z, f.lastBaseUpdate = V, t = f.shared.interleaved, t !== null) {
      f = t;
      do
        w |= f.lane, f = f.next;
      while (f !== t);
    } else m === null && (f.shared.lanes = 0);
    Wn |= w, e.lanes = w, e.memoizedState = K;
  }
}
function ac(e, t, i) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var c = e[t], f = c.callback;
    if (f !== null) {
      if (c.callback = null, c = i, typeof f != "function") throw Error(ce(191, f));
      f.call(c);
    }
  }
}
var gr = {}, Zt = On(gr), rr = On(gr), or = On(gr);
function In(e) {
  if (e === gr) throw Error(ce(174));
  return e;
}
function $s(e, t) {
  switch (Fe(or, t), Fe(rr, e), Fe(Zt, gr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ma(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Ma(t, e);
  }
  Re(Zt), Fe(Zt, t);
}
function yi() {
  Re(Zt), Re(rr), Re(or);
}
function gh(e) {
  In(or.current);
  var t = In(Zt.current), i = Ma(t, e.type);
  t !== i && (Fe(rr, e), Fe(Zt, i));
}
function Zs(e) {
  rr.current === e && (Re(Zt), Re(rr));
}
var Ne = On(0);
function po(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var i = t.memoizedState;
      if (i !== null && (i = i.dehydrated, i === null || i.data === "$?" || i.data === "$!")) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var ca = [];
function qs() {
  for (var e = 0; e < ca.length; e++) ca[e]._workInProgressVersionPrimary = null;
  ca.length = 0;
}
var Yr = ln.ReactCurrentDispatcher, ua = ln.ReactCurrentBatchConfig, Hn = 0, Ue = null, $e = null, Qe = null, fo = !1, Wi = !1, ar = 0, Rf = 0;
function rt() {
  throw Error(ce(321));
}
function Ks(e, t) {
  if (t === null) return !1;
  for (var i = 0; i < t.length && i < e.length; i++) if (!Nt(e[i], t[i])) return !1;
  return !0;
}
function Qs(e, t, i, c, f, m) {
  if (Hn = m, Ue = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Yr.current = e === null || e.memoizedState === null ? Nf : Uf, e = i(c, f), Wi) {
    m = 0;
    do {
      if (Wi = !1, ar = 0, 25 <= m) throw Error(ce(301));
      m += 1, Qe = $e = null, t.updateQueue = null, Yr.current = Hf, e = i(c, f);
    } while (Wi);
  }
  if (Yr.current = go, t = $e !== null && $e.next !== null, Hn = 0, Qe = $e = Ue = null, fo = !1, t) throw Error(ce(300));
  return e;
}
function Js() {
  var e = ar !== 0;
  return ar = 0, e;
}
function Yt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Qe === null ? Ue.memoizedState = Qe = e : Qe = Qe.next = e, Qe;
}
function Dt() {
  if ($e === null) {
    var e = Ue.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = $e.next;
  var t = Qe === null ? Ue.memoizedState : Qe.next;
  if (t !== null) Qe = t, $e = e;
  else {
    if (e === null) throw Error(ce(310));
    $e = e, e = { memoizedState: $e.memoizedState, baseState: $e.baseState, baseQueue: $e.baseQueue, queue: $e.queue, next: null }, Qe === null ? Ue.memoizedState = Qe = e : Qe = Qe.next = e;
  }
  return Qe;
}
function sr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ha(e) {
  var t = Dt(), i = t.queue;
  if (i === null) throw Error(ce(311));
  i.lastRenderedReducer = e;
  var c = $e, f = c.baseQueue, m = i.pending;
  if (m !== null) {
    if (f !== null) {
      var w = f.next;
      f.next = m.next, m.next = w;
    }
    c.baseQueue = f = m, i.pending = null;
  }
  if (f !== null) {
    m = f.next, c = c.baseState;
    var S = w = null, O = null, z = m;
    do {
      var V = z.lane;
      if ((Hn & V) === V) O !== null && (O = O.next = { lane: 0, action: z.action, hasEagerState: z.hasEagerState, eagerState: z.eagerState, next: null }), c = z.hasEagerState ? z.eagerState : e(c, z.action);
      else {
        var K = {
          lane: V,
          action: z.action,
          hasEagerState: z.hasEagerState,
          eagerState: z.eagerState,
          next: null
        };
        O === null ? (S = O = K, w = c) : O = O.next = K, Ue.lanes |= V, Wn |= V;
      }
      z = z.next;
    } while (z !== null && z !== m);
    O === null ? w = c : O.next = S, Nt(c, t.memoizedState) || (mt = !0), t.memoizedState = c, t.baseState = w, t.baseQueue = O, i.lastRenderedState = c;
  }
  if (e = i.interleaved, e !== null) {
    f = e;
    do
      m = f.lane, Ue.lanes |= m, Wn |= m, f = f.next;
    while (f !== e);
  } else f === null && (i.lanes = 0);
  return [t.memoizedState, i.dispatch];
}
function pa(e) {
  var t = Dt(), i = t.queue;
  if (i === null) throw Error(ce(311));
  i.lastRenderedReducer = e;
  var c = i.dispatch, f = i.pending, m = t.memoizedState;
  if (f !== null) {
    i.pending = null;
    var w = f = f.next;
    do
      m = e(m, w.action), w = w.next;
    while (w !== f);
    Nt(m, t.memoizedState) || (mt = !0), t.memoizedState = m, t.baseQueue === null && (t.baseState = m), i.lastRenderedState = m;
  }
  return [m, c];
}
function mh() {
}
function vh(e, t) {
  var i = Ue, c = Dt(), f = t(), m = !Nt(c.memoizedState, f);
  if (m && (c.memoizedState = f, mt = !0), c = c.queue, el(wh.bind(null, i, c, e), [e]), c.getSnapshot !== t || m || Qe !== null && Qe.memoizedState.tag & 1) {
    if (i.flags |= 2048, lr(9, xh.bind(null, i, c, f, t), void 0, null), Je === null) throw Error(ce(349));
    Hn & 30 || yh(i, t, f);
  }
  return f;
}
function yh(e, t, i) {
  e.flags |= 16384, e = { getSnapshot: t, value: i }, t = Ue.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ue.updateQueue = t, t.stores = [e]) : (i = t.stores, i === null ? t.stores = [e] : i.push(e));
}
function xh(e, t, i, c) {
  t.value = i, t.getSnapshot = c, _h(t) && Ch(e);
}
function wh(e, t, i) {
  return i(function() {
    _h(t) && Ch(e);
  });
}
function _h(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var i = t();
    return !Nt(e, i);
  } catch {
    return !0;
  }
}
function Ch(e) {
  var t = an(e, 1);
  t !== null && zt(t, e, 1, -1);
}
function sc(e) {
  var t = Yt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: sr, lastRenderedState: e }, t.queue = e, e = e.dispatch = zf.bind(null, Ue, e), [t.memoizedState, e];
}
function lr(e, t, i, c) {
  return e = { tag: e, create: t, destroy: i, deps: c, next: null }, t = Ue.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ue.updateQueue = t, t.lastEffect = e.next = e) : (i = t.lastEffect, i === null ? t.lastEffect = e.next = e : (c = i.next, i.next = e, e.next = c, t.lastEffect = e)), e;
}
function Sh() {
  return Dt().memoizedState;
}
function Xr(e, t, i, c) {
  var f = Yt();
  Ue.flags |= e, f.memoizedState = lr(1 | t, i, void 0, c === void 0 ? null : c);
}
function Ao(e, t, i, c) {
  var f = Dt();
  c = c === void 0 ? null : c;
  var m = void 0;
  if ($e !== null) {
    var w = $e.memoizedState;
    if (m = w.destroy, c !== null && Ks(c, w.deps)) {
      f.memoizedState = lr(t, i, m, c);
      return;
    }
  }
  Ue.flags |= e, f.memoizedState = lr(1 | t, i, m, c);
}
function lc(e, t) {
  return Xr(8390656, 8, e, t);
}
function el(e, t) {
  return Ao(2048, 8, e, t);
}
function bh(e, t) {
  return Ao(4, 2, e, t);
}
function Th(e, t) {
  return Ao(4, 4, e, t);
}
function Eh(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function kh(e, t, i) {
  return i = i != null ? i.concat([e]) : null, Ao(4, 4, Eh.bind(null, t, e), i);
}
function tl() {
}
function Oh(e, t) {
  var i = Dt();
  t = t === void 0 ? null : t;
  var c = i.memoizedState;
  return c !== null && t !== null && Ks(t, c[1]) ? c[0] : (i.memoizedState = [e, t], e);
}
function Ph(e, t) {
  var i = Dt();
  t = t === void 0 ? null : t;
  var c = i.memoizedState;
  return c !== null && t !== null && Ks(t, c[1]) ? c[0] : (e = e(), i.memoizedState = [e, t], e);
}
function Mh(e, t, i) {
  return Hn & 21 ? (Nt(i, t) || (i = Lu(), Ue.lanes |= i, Wn |= i, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, mt = !0), e.memoizedState = i);
}
function If(e, t) {
  var i = je;
  je = i !== 0 && 4 > i ? i : 4, e(!0);
  var c = ua.transition;
  ua.transition = {};
  try {
    e(!1), t();
  } finally {
    je = i, ua.transition = c;
  }
}
function jh() {
  return Dt().memoizedState;
}
function Bf(e, t, i) {
  var c = Sn(e);
  if (i = { lane: c, action: i, hasEagerState: !1, eagerState: null, next: null }, Dh(e)) Ah(t, i);
  else if (i = dh(e, t, i, c), i !== null) {
    var f = ut();
    zt(i, e, c, f), Fh(i, t, c);
  }
}
function zf(e, t, i) {
  var c = Sn(e), f = { lane: c, action: i, hasEagerState: !1, eagerState: null, next: null };
  if (Dh(e)) Ah(t, f);
  else {
    var m = e.alternate;
    if (e.lanes === 0 && (m === null || m.lanes === 0) && (m = t.lastRenderedReducer, m !== null)) try {
      var w = t.lastRenderedState, S = m(w, i);
      if (f.hasEagerState = !0, f.eagerState = S, Nt(S, w)) {
        var O = t.interleaved;
        O === null ? (f.next = f, Gs(t)) : (f.next = O.next, O.next = f), t.interleaved = f;
        return;
      }
    } catch {
    } finally {
    }
    i = dh(e, t, f, c), i !== null && (f = ut(), zt(i, e, c, f), Fh(i, t, c));
  }
}
function Dh(e) {
  var t = e.alternate;
  return e === Ue || t !== null && t === Ue;
}
function Ah(e, t) {
  Wi = fo = !0;
  var i = e.pending;
  i === null ? t.next = t : (t.next = i.next, i.next = t), e.pending = t;
}
function Fh(e, t, i) {
  if (i & 4194240) {
    var c = t.lanes;
    c &= e.pendingLanes, i |= c, t.lanes = i, Ds(e, i);
  }
}
var go = { readContext: jt, useCallback: rt, useContext: rt, useEffect: rt, useImperativeHandle: rt, useInsertionEffect: rt, useLayoutEffect: rt, useMemo: rt, useReducer: rt, useRef: rt, useState: rt, useDebugValue: rt, useDeferredValue: rt, useTransition: rt, useMutableSource: rt, useSyncExternalStore: rt, useId: rt, unstable_isNewReconciler: !1 }, Nf = { readContext: jt, useCallback: function(e, t) {
  return Yt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: jt, useEffect: lc, useImperativeHandle: function(e, t, i) {
  return i = i != null ? i.concat([e]) : null, Xr(
    4194308,
    4,
    Eh.bind(null, t, e),
    i
  );
}, useLayoutEffect: function(e, t) {
  return Xr(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Xr(4, 2, e, t);
}, useMemo: function(e, t) {
  var i = Yt();
  return t = t === void 0 ? null : t, e = e(), i.memoizedState = [e, t], e;
}, useReducer: function(e, t, i) {
  var c = Yt();
  return t = i !== void 0 ? i(t) : t, c.memoizedState = c.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, c.queue = e, e = e.dispatch = Bf.bind(null, Ue, e), [c.memoizedState, e];
}, useRef: function(e) {
  var t = Yt();
  return e = { current: e }, t.memoizedState = e;
}, useState: sc, useDebugValue: tl, useDeferredValue: function(e) {
  return Yt().memoizedState = e;
}, useTransition: function() {
  var e = sc(!1), t = e[0];
  return e = If.bind(null, e[1]), Yt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, i) {
  var c = Ue, f = Yt();
  if (Ie) {
    if (i === void 0) throw Error(ce(407));
    i = i();
  } else {
    if (i = t(), Je === null) throw Error(ce(349));
    Hn & 30 || yh(c, t, i);
  }
  f.memoizedState = i;
  var m = { value: i, getSnapshot: t };
  return f.queue = m, lc(wh.bind(
    null,
    c,
    m,
    e
  ), [e]), c.flags |= 2048, lr(9, xh.bind(null, c, m, i, t), void 0, null), i;
}, useId: function() {
  var e = Yt(), t = Je.identifierPrefix;
  if (Ie) {
    var i = en, c = Jt;
    i = (c & ~(1 << 32 - Bt(c) - 1)).toString(32) + i, t = ":" + t + "R" + i, i = ar++, 0 < i && (t += "H" + i.toString(32)), t += ":";
  } else i = Rf++, t = ":" + t + "r" + i.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Uf = {
  readContext: jt,
  useCallback: Oh,
  useContext: jt,
  useEffect: el,
  useImperativeHandle: kh,
  useInsertionEffect: bh,
  useLayoutEffect: Th,
  useMemo: Ph,
  useReducer: ha,
  useRef: Sh,
  useState: function() {
    return ha(sr);
  },
  useDebugValue: tl,
  useDeferredValue: function(e) {
    var t = Dt();
    return Mh(t, $e.memoizedState, e);
  },
  useTransition: function() {
    var e = ha(sr)[0], t = Dt().memoizedState;
    return [e, t];
  },
  useMutableSource: mh,
  useSyncExternalStore: vh,
  useId: jh,
  unstable_isNewReconciler: !1
}, Hf = { readContext: jt, useCallback: Oh, useContext: jt, useEffect: el, useImperativeHandle: kh, useInsertionEffect: bh, useLayoutEffect: Th, useMemo: Ph, useReducer: pa, useRef: Sh, useState: function() {
  return pa(sr);
}, useDebugValue: tl, useDeferredValue: function(e) {
  var t = Dt();
  return $e === null ? t.memoizedState = e : Mh(t, $e.memoizedState, e);
}, useTransition: function() {
  var e = pa(sr)[0], t = Dt().memoizedState;
  return [e, t];
}, useMutableSource: mh, useSyncExternalStore: vh, useId: jh, unstable_isNewReconciler: !1 };
function Lt(e, t) {
  if (e && e.defaultProps) {
    t = He({}, t), e = e.defaultProps;
    for (var i in e) t[i] === void 0 && (t[i] = e[i]);
    return t;
  }
  return t;
}
function Ka(e, t, i, c) {
  t = e.memoizedState, i = i(c, t), i = i == null ? t : He({}, t, i), e.memoizedState = i, e.lanes === 0 && (e.updateQueue.baseState = i);
}
var Fo = { isMounted: function(e) {
  return (e = e._reactInternals) ? Gn(e) === e : !1;
}, enqueueSetState: function(e, t, i) {
  e = e._reactInternals;
  var c = ut(), f = Sn(e), m = nn(c, f);
  m.payload = t, i != null && (m.callback = i), t = _n(e, m, f), t !== null && (zt(t, e, f, c), Wr(t, e, f));
}, enqueueReplaceState: function(e, t, i) {
  e = e._reactInternals;
  var c = ut(), f = Sn(e), m = nn(c, f);
  m.tag = 1, m.payload = t, i != null && (m.callback = i), t = _n(e, m, f), t !== null && (zt(t, e, f, c), Wr(t, e, f));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var i = ut(), c = Sn(e), f = nn(i, c);
  f.tag = 2, t != null && (f.callback = t), t = _n(e, f, c), t !== null && (zt(t, e, c, i), Wr(t, e, c));
} };
function cc(e, t, i, c, f, m, w) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(c, m, w) : t.prototype && t.prototype.isPureReactComponent ? !er(i, c) || !er(f, m) : !0;
}
function Lh(e, t, i) {
  var c = !1, f = En, m = t.contextType;
  return typeof m == "object" && m !== null ? m = jt(m) : (f = yt(t) ? Nn : st.current, c = t.contextTypes, m = (c = c != null) ? gi(e, f) : En), t = new t(i, m), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Fo, e.stateNode = t, t._reactInternals = e, c && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = f, e.__reactInternalMemoizedMaskedChildContext = m), t;
}
function uc(e, t, i, c) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(i, c), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(i, c), t.state !== e && Fo.enqueueReplaceState(t, t.state, null);
}
function Qa(e, t, i, c) {
  var f = e.stateNode;
  f.props = i, f.state = e.memoizedState, f.refs = {}, Vs(e);
  var m = t.contextType;
  typeof m == "object" && m !== null ? f.context = jt(m) : (m = yt(t) ? Nn : st.current, f.context = gi(e, m)), f.state = e.memoizedState, m = t.getDerivedStateFromProps, typeof m == "function" && (Ka(e, t, m, i), f.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (t = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), t !== f.state && Fo.enqueueReplaceState(f, f.state, null), ho(e, i, f, c), f.state = e.memoizedState), typeof f.componentDidMount == "function" && (e.flags |= 4194308);
}
function xi(e, t) {
  try {
    var i = "", c = t;
    do
      i += gd(c), c = c.return;
    while (c);
    var f = i;
  } catch (m) {
    f = `
Error generating stack: ` + m.message + `
` + m.stack;
  }
  return { value: e, source: t, stack: f, digest: null };
}
function da(e, t, i) {
  return { value: e, source: null, stack: i ?? null, digest: t ?? null };
}
function Ja(e, t) {
  try {
    console.error(t.value);
  } catch (i) {
    setTimeout(function() {
      throw i;
    });
  }
}
var Wf = typeof WeakMap == "function" ? WeakMap : Map;
function Rh(e, t, i) {
  i = nn(-1, i), i.tag = 3, i.payload = { element: null };
  var c = t.value;
  return i.callback = function() {
    vo || (vo = !0, cs = c), Ja(e, t);
  }, i;
}
function Ih(e, t, i) {
  i = nn(-1, i), i.tag = 3;
  var c = e.type.getDerivedStateFromError;
  if (typeof c == "function") {
    var f = t.value;
    i.payload = function() {
      return c(f);
    }, i.callback = function() {
      Ja(e, t);
    };
  }
  var m = e.stateNode;
  return m !== null && typeof m.componentDidCatch == "function" && (i.callback = function() {
    Ja(e, t), typeof c != "function" && (Cn === null ? Cn = /* @__PURE__ */ new Set([this]) : Cn.add(this));
    var w = t.stack;
    this.componentDidCatch(t.value, { componentStack: w !== null ? w : "" });
  }), i;
}
function hc(e, t, i) {
  var c = e.pingCache;
  if (c === null) {
    c = e.pingCache = new Wf();
    var f = /* @__PURE__ */ new Set();
    c.set(t, f);
  } else f = c.get(t), f === void 0 && (f = /* @__PURE__ */ new Set(), c.set(t, f));
  f.has(i) || (f.add(i), e = ig.bind(null, e, t, i), t.then(e, e));
}
function pc(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function dc(e, t, i, c, f) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = f, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, i.flags |= 131072, i.flags &= -52805, i.tag === 1 && (i.alternate === null ? i.tag = 17 : (t = nn(-1, 1), t.tag = 2, _n(i, t, 1))), i.lanes |= 1), e);
}
var Yf = ln.ReactCurrentOwner, mt = !1;
function ct(e, t, i, c) {
  t.child = e === null ? ph(t, null, i, c) : vi(t, e.child, i, c);
}
function fc(e, t, i, c, f) {
  i = i.render;
  var m = t.ref;
  return pi(t, f), c = Qs(e, t, i, c, m, f), i = Js(), e !== null && !mt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~f, sn(e, t, f)) : (Ie && i && Ns(t), t.flags |= 1, ct(e, t, c, f), t.child);
}
function gc(e, t, i, c, f) {
  if (e === null) {
    var m = i.type;
    return typeof m == "function" && !cl(m) && m.defaultProps === void 0 && i.compare === null && i.defaultProps === void 0 ? (t.tag = 15, t.type = m, Bh(e, t, m, c, f)) : (e = Zr(i.type, null, c, t, t.mode, f), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (m = e.child, !(e.lanes & f)) {
    var w = m.memoizedProps;
    if (i = i.compare, i = i !== null ? i : er, i(w, c) && e.ref === t.ref) return sn(e, t, f);
  }
  return t.flags |= 1, e = bn(m, c), e.ref = t.ref, e.return = t, t.child = e;
}
function Bh(e, t, i, c, f) {
  if (e !== null) {
    var m = e.memoizedProps;
    if (er(m, c) && e.ref === t.ref) if (mt = !1, t.pendingProps = c = m, (e.lanes & f) !== 0) e.flags & 131072 && (mt = !0);
    else return t.lanes = e.lanes, sn(e, t, f);
  }
  return es(e, t, i, c, f);
}
function zh(e, t, i) {
  var c = t.pendingProps, f = c.children, m = e !== null ? e.memoizedState : null;
  if (c.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Fe(si, wt), wt |= i;
  else {
    if (!(i & 1073741824)) return e = m !== null ? m.baseLanes | i : i, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Fe(si, wt), wt |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, c = m !== null ? m.baseLanes : i, Fe(si, wt), wt |= c;
  }
  else m !== null ? (c = m.baseLanes | i, t.memoizedState = null) : c = i, Fe(si, wt), wt |= c;
  return ct(e, t, f, i), t.child;
}
function Nh(e, t) {
  var i = t.ref;
  (e === null && i !== null || e !== null && e.ref !== i) && (t.flags |= 512, t.flags |= 2097152);
}
function es(e, t, i, c, f) {
  var m = yt(i) ? Nn : st.current;
  return m = gi(t, m), pi(t, f), i = Qs(e, t, i, c, m, f), c = Js(), e !== null && !mt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~f, sn(e, t, f)) : (Ie && c && Ns(t), t.flags |= 1, ct(e, t, i, f), t.child);
}
function mc(e, t, i, c, f) {
  if (yt(i)) {
    var m = !0;
    ao(t);
  } else m = !1;
  if (pi(t, f), t.stateNode === null) Gr(e, t), Lh(t, i, c), Qa(t, i, c, f), c = !0;
  else if (e === null) {
    var w = t.stateNode, S = t.memoizedProps;
    w.props = S;
    var O = w.context, z = i.contextType;
    typeof z == "object" && z !== null ? z = jt(z) : (z = yt(i) ? Nn : st.current, z = gi(t, z));
    var V = i.getDerivedStateFromProps, K = typeof V == "function" || typeof w.getSnapshotBeforeUpdate == "function";
    K || typeof w.UNSAFE_componentWillReceiveProps != "function" && typeof w.componentWillReceiveProps != "function" || (S !== c || O !== z) && uc(t, w, c, z), pn = !1;
    var Z = t.memoizedState;
    w.state = Z, ho(t, c, w, f), O = t.memoizedState, S !== c || Z !== O || vt.current || pn ? (typeof V == "function" && (Ka(t, i, V, c), O = t.memoizedState), (S = pn || cc(t, i, S, c, Z, O, z)) ? (K || typeof w.UNSAFE_componentWillMount != "function" && typeof w.componentWillMount != "function" || (typeof w.componentWillMount == "function" && w.componentWillMount(), typeof w.UNSAFE_componentWillMount == "function" && w.UNSAFE_componentWillMount()), typeof w.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof w.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = c, t.memoizedState = O), w.props = c, w.state = O, w.context = z, c = S) : (typeof w.componentDidMount == "function" && (t.flags |= 4194308), c = !1);
  } else {
    w = t.stateNode, fh(e, t), S = t.memoizedProps, z = t.type === t.elementType ? S : Lt(t.type, S), w.props = z, K = t.pendingProps, Z = w.context, O = i.contextType, typeof O == "object" && O !== null ? O = jt(O) : (O = yt(i) ? Nn : st.current, O = gi(t, O));
    var te = i.getDerivedStateFromProps;
    (V = typeof te == "function" || typeof w.getSnapshotBeforeUpdate == "function") || typeof w.UNSAFE_componentWillReceiveProps != "function" && typeof w.componentWillReceiveProps != "function" || (S !== K || Z !== O) && uc(t, w, c, O), pn = !1, Z = t.memoizedState, w.state = Z, ho(t, c, w, f);
    var ae = t.memoizedState;
    S !== K || Z !== ae || vt.current || pn ? (typeof te == "function" && (Ka(t, i, te, c), ae = t.memoizedState), (z = pn || cc(t, i, z, c, Z, ae, O) || !1) ? (V || typeof w.UNSAFE_componentWillUpdate != "function" && typeof w.componentWillUpdate != "function" || (typeof w.componentWillUpdate == "function" && w.componentWillUpdate(c, ae, O), typeof w.UNSAFE_componentWillUpdate == "function" && w.UNSAFE_componentWillUpdate(c, ae, O)), typeof w.componentDidUpdate == "function" && (t.flags |= 4), typeof w.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof w.componentDidUpdate != "function" || S === e.memoizedProps && Z === e.memoizedState || (t.flags |= 4), typeof w.getSnapshotBeforeUpdate != "function" || S === e.memoizedProps && Z === e.memoizedState || (t.flags |= 1024), t.memoizedProps = c, t.memoizedState = ae), w.props = c, w.state = ae, w.context = O, c = z) : (typeof w.componentDidUpdate != "function" || S === e.memoizedProps && Z === e.memoizedState || (t.flags |= 4), typeof w.getSnapshotBeforeUpdate != "function" || S === e.memoizedProps && Z === e.memoizedState || (t.flags |= 1024), c = !1);
  }
  return ts(e, t, i, c, m, f);
}
function ts(e, t, i, c, f, m) {
  Nh(e, t);
  var w = (t.flags & 128) !== 0;
  if (!c && !w) return f && tc(t, i, !1), sn(e, t, m);
  c = t.stateNode, Yf.current = t;
  var S = w && typeof i.getDerivedStateFromError != "function" ? null : c.render();
  return t.flags |= 1, e !== null && w ? (t.child = vi(t, e.child, null, m), t.child = vi(t, null, S, m)) : ct(e, t, S, m), t.memoizedState = c.state, f && tc(t, i, !0), t.child;
}
function Uh(e) {
  var t = e.stateNode;
  t.pendingContext ? ec(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ec(e, t.context, !1), $s(e, t.containerInfo);
}
function vc(e, t, i, c, f) {
  return mi(), Hs(f), t.flags |= 256, ct(e, t, i, c), t.child;
}
var ns = { dehydrated: null, treeContext: null, retryLane: 0 };
function is(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Hh(e, t, i) {
  var c = t.pendingProps, f = Ne.current, m = !1, w = (t.flags & 128) !== 0, S;
  if ((S = w) || (S = e !== null && e.memoizedState === null ? !1 : (f & 2) !== 0), S ? (m = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (f |= 1), Fe(Ne, f & 1), e === null)
    return Za(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (w = c.children, e = c.fallback, m ? (c = t.mode, m = t.child, w = { mode: "hidden", children: w }, !(c & 1) && m !== null ? (m.childLanes = 0, m.pendingProps = w) : m = Io(w, c, 0, null), e = zn(e, c, i, null), m.return = t, e.return = t, m.sibling = e, t.child = m, t.child.memoizedState = is(i), t.memoizedState = ns, e) : nl(t, w));
  if (f = e.memoizedState, f !== null && (S = f.dehydrated, S !== null)) return Xf(e, t, w, c, S, f, i);
  if (m) {
    m = c.fallback, w = t.mode, f = e.child, S = f.sibling;
    var O = { mode: "hidden", children: c.children };
    return !(w & 1) && t.child !== f ? (c = t.child, c.childLanes = 0, c.pendingProps = O, t.deletions = null) : (c = bn(f, O), c.subtreeFlags = f.subtreeFlags & 14680064), S !== null ? m = bn(S, m) : (m = zn(m, w, i, null), m.flags |= 2), m.return = t, c.return = t, c.sibling = m, t.child = c, c = m, m = t.child, w = e.child.memoizedState, w = w === null ? is(i) : { baseLanes: w.baseLanes | i, cachePool: null, transitions: w.transitions }, m.memoizedState = w, m.childLanes = e.childLanes & ~i, t.memoizedState = ns, c;
  }
  return m = e.child, e = m.sibling, c = bn(m, { mode: "visible", children: c.children }), !(t.mode & 1) && (c.lanes = i), c.return = t, c.sibling = null, e !== null && (i = t.deletions, i === null ? (t.deletions = [e], t.flags |= 16) : i.push(e)), t.child = c, t.memoizedState = null, c;
}
function nl(e, t) {
  return t = Io({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Mr(e, t, i, c) {
  return c !== null && Hs(c), vi(t, e.child, null, i), e = nl(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Xf(e, t, i, c, f, m, w) {
  if (i)
    return t.flags & 256 ? (t.flags &= -257, c = da(Error(ce(422))), Mr(e, t, w, c)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (m = c.fallback, f = t.mode, c = Io({ mode: "visible", children: c.children }, f, 0, null), m = zn(m, f, w, null), m.flags |= 2, c.return = t, m.return = t, c.sibling = m, t.child = c, t.mode & 1 && vi(t, e.child, null, w), t.child.memoizedState = is(w), t.memoizedState = ns, m);
  if (!(t.mode & 1)) return Mr(e, t, w, null);
  if (f.data === "$!") {
    if (c = f.nextSibling && f.nextSibling.dataset, c) var S = c.dgst;
    return c = S, m = Error(ce(419)), c = da(m, c, void 0), Mr(e, t, w, c);
  }
  if (S = (w & e.childLanes) !== 0, mt || S) {
    if (c = Je, c !== null) {
      switch (w & -w) {
        case 4:
          f = 2;
          break;
        case 16:
          f = 8;
          break;
        case 64:
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
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          f = 32;
          break;
        case 536870912:
          f = 268435456;
          break;
        default:
          f = 0;
      }
      f = f & (c.suspendedLanes | w) ? 0 : f, f !== 0 && f !== m.retryLane && (m.retryLane = f, an(e, f), zt(c, e, f, -1));
    }
    return ll(), c = da(Error(ce(421))), Mr(e, t, w, c);
  }
  return f.data === "$?" ? (t.flags |= 128, t.child = e.child, t = rg.bind(null, e), f._reactRetry = t, null) : (e = m.treeContext, _t = wn(f.nextSibling), Ct = t, Ie = !0, It = null, e !== null && (kt[Ot++] = Jt, kt[Ot++] = en, kt[Ot++] = Un, Jt = e.id, en = e.overflow, Un = t), t = nl(t, c.children), t.flags |= 4096, t);
}
function yc(e, t, i) {
  e.lanes |= t;
  var c = e.alternate;
  c !== null && (c.lanes |= t), qa(e.return, t, i);
}
function fa(e, t, i, c, f) {
  var m = e.memoizedState;
  m === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: c, tail: i, tailMode: f } : (m.isBackwards = t, m.rendering = null, m.renderingStartTime = 0, m.last = c, m.tail = i, m.tailMode = f);
}
function Wh(e, t, i) {
  var c = t.pendingProps, f = c.revealOrder, m = c.tail;
  if (ct(e, t, c.children, i), c = Ne.current, c & 2) c = c & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && yc(e, i, t);
      else if (e.tag === 19) yc(e, i, t);
      else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break e;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) break e;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    c &= 1;
  }
  if (Fe(Ne, c), !(t.mode & 1)) t.memoizedState = null;
  else switch (f) {
    case "forwards":
      for (i = t.child, f = null; i !== null; ) e = i.alternate, e !== null && po(e) === null && (f = i), i = i.sibling;
      i = f, i === null ? (f = t.child, t.child = null) : (f = i.sibling, i.sibling = null), fa(t, !1, f, i, m);
      break;
    case "backwards":
      for (i = null, f = t.child, t.child = null; f !== null; ) {
        if (e = f.alternate, e !== null && po(e) === null) {
          t.child = f;
          break;
        }
        e = f.sibling, f.sibling = i, i = f, f = e;
      }
      fa(t, !0, i, null, m);
      break;
    case "together":
      fa(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Gr(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function sn(e, t, i) {
  if (e !== null && (t.dependencies = e.dependencies), Wn |= t.lanes, !(i & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(ce(153));
  if (t.child !== null) {
    for (e = t.child, i = bn(e, e.pendingProps), t.child = i, i.return = t; e.sibling !== null; ) e = e.sibling, i = i.sibling = bn(e, e.pendingProps), i.return = t;
    i.sibling = null;
  }
  return t.child;
}
function Gf(e, t, i) {
  switch (t.tag) {
    case 3:
      Uh(t), mi();
      break;
    case 5:
      gh(t);
      break;
    case 1:
      yt(t.type) && ao(t);
      break;
    case 4:
      $s(t, t.stateNode.containerInfo);
      break;
    case 10:
      var c = t.type._context, f = t.memoizedProps.value;
      Fe(co, c._currentValue), c._currentValue = f;
      break;
    case 13:
      if (c = t.memoizedState, c !== null)
        return c.dehydrated !== null ? (Fe(Ne, Ne.current & 1), t.flags |= 128, null) : i & t.child.childLanes ? Hh(e, t, i) : (Fe(Ne, Ne.current & 1), e = sn(e, t, i), e !== null ? e.sibling : null);
      Fe(Ne, Ne.current & 1);
      break;
    case 19:
      if (c = (i & t.childLanes) !== 0, e.flags & 128) {
        if (c) return Wh(e, t, i);
        t.flags |= 128;
      }
      if (f = t.memoizedState, f !== null && (f.rendering = null, f.tail = null, f.lastEffect = null), Fe(Ne, Ne.current), c) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, zh(e, t, i);
  }
  return sn(e, t, i);
}
var Yh, rs, Xh, Gh;
Yh = function(e, t) {
  for (var i = t.child; i !== null; ) {
    if (i.tag === 5 || i.tag === 6) e.appendChild(i.stateNode);
    else if (i.tag !== 4 && i.child !== null) {
      i.child.return = i, i = i.child;
      continue;
    }
    if (i === t) break;
    for (; i.sibling === null; ) {
      if (i.return === null || i.return === t) return;
      i = i.return;
    }
    i.sibling.return = i.return, i = i.sibling;
  }
};
rs = function() {
};
Xh = function(e, t, i, c) {
  var f = e.memoizedProps;
  if (f !== c) {
    e = t.stateNode, In(Zt.current);
    var m = null;
    switch (i) {
      case "input":
        f = Ea(e, f), c = Ea(e, c), m = [];
        break;
      case "select":
        f = He({}, f, { value: void 0 }), c = He({}, c, { value: void 0 }), m = [];
        break;
      case "textarea":
        f = Pa(e, f), c = Pa(e, c), m = [];
        break;
      default:
        typeof f.onClick != "function" && typeof c.onClick == "function" && (e.onclick = ro);
    }
    ja(i, c);
    var w;
    i = null;
    for (z in f) if (!c.hasOwnProperty(z) && f.hasOwnProperty(z) && f[z] != null) if (z === "style") {
      var S = f[z];
      for (w in S) S.hasOwnProperty(w) && (i || (i = {}), i[w] = "");
    } else z !== "dangerouslySetInnerHTML" && z !== "children" && z !== "suppressContentEditableWarning" && z !== "suppressHydrationWarning" && z !== "autoFocus" && (Vi.hasOwnProperty(z) ? m || (m = []) : (m = m || []).push(z, null));
    for (z in c) {
      var O = c[z];
      if (S = f != null ? f[z] : void 0, c.hasOwnProperty(z) && O !== S && (O != null || S != null)) if (z === "style") if (S) {
        for (w in S) !S.hasOwnProperty(w) || O && O.hasOwnProperty(w) || (i || (i = {}), i[w] = "");
        for (w in O) O.hasOwnProperty(w) && S[w] !== O[w] && (i || (i = {}), i[w] = O[w]);
      } else i || (m || (m = []), m.push(
        z,
        i
      )), i = O;
      else z === "dangerouslySetInnerHTML" ? (O = O ? O.__html : void 0, S = S ? S.__html : void 0, O != null && S !== O && (m = m || []).push(z, O)) : z === "children" ? typeof O != "string" && typeof O != "number" || (m = m || []).push(z, "" + O) : z !== "suppressContentEditableWarning" && z !== "suppressHydrationWarning" && (Vi.hasOwnProperty(z) ? (O != null && z === "onScroll" && Le("scroll", e), m || S === O || (m = [])) : (m = m || []).push(z, O));
    }
    i && (m = m || []).push("style", i);
    var z = m;
    (t.updateQueue = z) && (t.flags |= 4);
  }
};
Gh = function(e, t, i, c) {
  i !== c && (t.flags |= 4);
};
function Di(e, t) {
  if (!Ie) switch (e.tailMode) {
    case "hidden":
      t = e.tail;
      for (var i = null; t !== null; ) t.alternate !== null && (i = t), t = t.sibling;
      i === null ? e.tail = null : i.sibling = null;
      break;
    case "collapsed":
      i = e.tail;
      for (var c = null; i !== null; ) i.alternate !== null && (c = i), i = i.sibling;
      c === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : c.sibling = null;
  }
}
function ot(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, i = 0, c = 0;
  if (t) for (var f = e.child; f !== null; ) i |= f.lanes | f.childLanes, c |= f.subtreeFlags & 14680064, c |= f.flags & 14680064, f.return = e, f = f.sibling;
  else for (f = e.child; f !== null; ) i |= f.lanes | f.childLanes, c |= f.subtreeFlags, c |= f.flags, f.return = e, f = f.sibling;
  return e.subtreeFlags |= c, e.childLanes = i, t;
}
function Vf(e, t, i) {
  var c = t.pendingProps;
  switch (Us(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ot(t), null;
    case 1:
      return yt(t.type) && oo(), ot(t), null;
    case 3:
      return c = t.stateNode, yi(), Re(vt), Re(st), qs(), c.pendingContext && (c.context = c.pendingContext, c.pendingContext = null), (e === null || e.child === null) && (Or(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, It !== null && (ps(It), It = null))), rs(e, t), ot(t), null;
    case 5:
      Zs(t);
      var f = In(or.current);
      if (i = t.type, e !== null && t.stateNode != null) Xh(e, t, i, c, f), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!c) {
          if (t.stateNode === null) throw Error(ce(166));
          return ot(t), null;
        }
        if (e = In(Zt.current), Or(t)) {
          c = t.stateNode, i = t.type;
          var m = t.memoizedProps;
          switch (c[Xt] = t, c[ir] = m, e = (t.mode & 1) !== 0, i) {
            case "dialog":
              Le("cancel", c), Le("close", c);
              break;
            case "iframe":
            case "object":
            case "embed":
              Le("load", c);
              break;
            case "video":
            case "audio":
              for (f = 0; f < Ii.length; f++) Le(Ii[f], c);
              break;
            case "source":
              Le("error", c);
              break;
            case "img":
            case "image":
            case "link":
              Le(
                "error",
                c
              ), Le("load", c);
              break;
            case "details":
              Le("toggle", c);
              break;
            case "input":
              kl(c, m), Le("invalid", c);
              break;
            case "select":
              c._wrapperState = { wasMultiple: !!m.multiple }, Le("invalid", c);
              break;
            case "textarea":
              Pl(c, m), Le("invalid", c);
          }
          ja(i, m), f = null;
          for (var w in m) if (m.hasOwnProperty(w)) {
            var S = m[w];
            w === "children" ? typeof S == "string" ? c.textContent !== S && (m.suppressHydrationWarning !== !0 && kr(c.textContent, S, e), f = ["children", S]) : typeof S == "number" && c.textContent !== "" + S && (m.suppressHydrationWarning !== !0 && kr(
              c.textContent,
              S,
              e
            ), f = ["children", "" + S]) : Vi.hasOwnProperty(w) && S != null && w === "onScroll" && Le("scroll", c);
          }
          switch (i) {
            case "input":
              xr(c), Ol(c, m, !0);
              break;
            case "textarea":
              xr(c), Ml(c);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof m.onClick == "function" && (c.onclick = ro);
          }
          c = f, t.updateQueue = c, c !== null && (t.flags |= 4);
        } else {
          w = f.nodeType === 9 ? f : f.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = wu(i)), e === "http://www.w3.org/1999/xhtml" ? i === "script" ? (e = w.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof c.is == "string" ? e = w.createElement(i, { is: c.is }) : (e = w.createElement(i), i === "select" && (w = e, c.multiple ? w.multiple = !0 : c.size && (w.size = c.size))) : e = w.createElementNS(e, i), e[Xt] = t, e[ir] = c, Yh(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (w = Da(i, c), i) {
              case "dialog":
                Le("cancel", e), Le("close", e), f = c;
                break;
              case "iframe":
              case "object":
              case "embed":
                Le("load", e), f = c;
                break;
              case "video":
              case "audio":
                for (f = 0; f < Ii.length; f++) Le(Ii[f], e);
                f = c;
                break;
              case "source":
                Le("error", e), f = c;
                break;
              case "img":
              case "image":
              case "link":
                Le(
                  "error",
                  e
                ), Le("load", e), f = c;
                break;
              case "details":
                Le("toggle", e), f = c;
                break;
              case "input":
                kl(e, c), f = Ea(e, c), Le("invalid", e);
                break;
              case "option":
                f = c;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!c.multiple }, f = He({}, c, { value: void 0 }), Le("invalid", e);
                break;
              case "textarea":
                Pl(e, c), f = Pa(e, c), Le("invalid", e);
                break;
              default:
                f = c;
            }
            ja(i, f), S = f;
            for (m in S) if (S.hasOwnProperty(m)) {
              var O = S[m];
              m === "style" ? Su(e, O) : m === "dangerouslySetInnerHTML" ? (O = O ? O.__html : void 0, O != null && _u(e, O)) : m === "children" ? typeof O == "string" ? (i !== "textarea" || O !== "") && $i(e, O) : typeof O == "number" && $i(e, "" + O) : m !== "suppressContentEditableWarning" && m !== "suppressHydrationWarning" && m !== "autoFocus" && (Vi.hasOwnProperty(m) ? O != null && m === "onScroll" && Le("scroll", e) : O != null && Es(e, m, O, w));
            }
            switch (i) {
              case "input":
                xr(e), Ol(e, c, !1);
                break;
              case "textarea":
                xr(e), Ml(e);
                break;
              case "option":
                c.value != null && e.setAttribute("value", "" + Tn(c.value));
                break;
              case "select":
                e.multiple = !!c.multiple, m = c.value, m != null ? li(e, !!c.multiple, m, !1) : c.defaultValue != null && li(
                  e,
                  !!c.multiple,
                  c.defaultValue,
                  !0
                );
                break;
              default:
                typeof f.onClick == "function" && (e.onclick = ro);
            }
            switch (i) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                c = !!c.autoFocus;
                break e;
              case "img":
                c = !0;
                break e;
              default:
                c = !1;
            }
          }
          c && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return ot(t), null;
    case 6:
      if (e && t.stateNode != null) Gh(e, t, e.memoizedProps, c);
      else {
        if (typeof c != "string" && t.stateNode === null) throw Error(ce(166));
        if (i = In(or.current), In(Zt.current), Or(t)) {
          if (c = t.stateNode, i = t.memoizedProps, c[Xt] = t, (m = c.nodeValue !== i) && (e = Ct, e !== null)) switch (e.tag) {
            case 3:
              kr(c.nodeValue, i, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && kr(c.nodeValue, i, (e.mode & 1) !== 0);
          }
          m && (t.flags |= 4);
        } else c = (i.nodeType === 9 ? i : i.ownerDocument).createTextNode(c), c[Xt] = t, t.stateNode = c;
      }
      return ot(t), null;
    case 13:
      if (Re(Ne), c = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (Ie && _t !== null && t.mode & 1 && !(t.flags & 128)) uh(), mi(), t.flags |= 98560, m = !1;
        else if (m = Or(t), c !== null && c.dehydrated !== null) {
          if (e === null) {
            if (!m) throw Error(ce(318));
            if (m = t.memoizedState, m = m !== null ? m.dehydrated : null, !m) throw Error(ce(317));
            m[Xt] = t;
          } else mi(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          ot(t), m = !1;
        } else It !== null && (ps(It), It = null), m = !0;
        if (!m) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = i, t) : (c = c !== null, c !== (e !== null && e.memoizedState !== null) && c && (t.child.flags |= 8192, t.mode & 1 && (e === null || Ne.current & 1 ? Ze === 0 && (Ze = 3) : ll())), t.updateQueue !== null && (t.flags |= 4), ot(t), null);
    case 4:
      return yi(), rs(e, t), e === null && tr(t.stateNode.containerInfo), ot(t), null;
    case 10:
      return Xs(t.type._context), ot(t), null;
    case 17:
      return yt(t.type) && oo(), ot(t), null;
    case 19:
      if (Re(Ne), m = t.memoizedState, m === null) return ot(t), null;
      if (c = (t.flags & 128) !== 0, w = m.rendering, w === null) if (c) Di(m, !1);
      else {
        if (Ze !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (w = po(e), w !== null) {
            for (t.flags |= 128, Di(m, !1), c = w.updateQueue, c !== null && (t.updateQueue = c, t.flags |= 4), t.subtreeFlags = 0, c = i, i = t.child; i !== null; ) m = i, e = c, m.flags &= 14680066, w = m.alternate, w === null ? (m.childLanes = 0, m.lanes = e, m.child = null, m.subtreeFlags = 0, m.memoizedProps = null, m.memoizedState = null, m.updateQueue = null, m.dependencies = null, m.stateNode = null) : (m.childLanes = w.childLanes, m.lanes = w.lanes, m.child = w.child, m.subtreeFlags = 0, m.deletions = null, m.memoizedProps = w.memoizedProps, m.memoizedState = w.memoizedState, m.updateQueue = w.updateQueue, m.type = w.type, e = w.dependencies, m.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), i = i.sibling;
            return Fe(Ne, Ne.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        m.tail !== null && Ge() > wi && (t.flags |= 128, c = !0, Di(m, !1), t.lanes = 4194304);
      }
      else {
        if (!c) if (e = po(w), e !== null) {
          if (t.flags |= 128, c = !0, i = e.updateQueue, i !== null && (t.updateQueue = i, t.flags |= 4), Di(m, !0), m.tail === null && m.tailMode === "hidden" && !w.alternate && !Ie) return ot(t), null;
        } else 2 * Ge() - m.renderingStartTime > wi && i !== 1073741824 && (t.flags |= 128, c = !0, Di(m, !1), t.lanes = 4194304);
        m.isBackwards ? (w.sibling = t.child, t.child = w) : (i = m.last, i !== null ? i.sibling = w : t.child = w, m.last = w);
      }
      return m.tail !== null ? (t = m.tail, m.rendering = t, m.tail = t.sibling, m.renderingStartTime = Ge(), t.sibling = null, i = Ne.current, Fe(Ne, c ? i & 1 | 2 : i & 1), t) : (ot(t), null);
    case 22:
    case 23:
      return sl(), c = t.memoizedState !== null, e !== null && e.memoizedState !== null !== c && (t.flags |= 8192), c && t.mode & 1 ? wt & 1073741824 && (ot(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ot(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(ce(156, t.tag));
}
function $f(e, t) {
  switch (Us(t), t.tag) {
    case 1:
      return yt(t.type) && oo(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return yi(), Re(vt), Re(st), qs(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Zs(t), null;
    case 13:
      if (Re(Ne), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(ce(340));
        mi();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return Re(Ne), null;
    case 4:
      return yi(), null;
    case 10:
      return Xs(t.type._context), null;
    case 22:
    case 23:
      return sl(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var jr = !1, at = !1, Zf = typeof WeakSet == "function" ? WeakSet : Set, ve = null;
function ai(e, t) {
  var i = e.ref;
  if (i !== null) if (typeof i == "function") try {
    i(null);
  } catch (c) {
    Ye(e, t, c);
  }
  else i.current = null;
}
function os(e, t, i) {
  try {
    i();
  } catch (c) {
    Ye(e, t, c);
  }
}
var xc = !1;
function qf(e, t) {
  if (Ha = to, e = Ku(), zs(e)) {
    if ("selectionStart" in e) var i = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      i = (i = e.ownerDocument) && i.defaultView || window;
      var c = i.getSelection && i.getSelection();
      if (c && c.rangeCount !== 0) {
        i = c.anchorNode;
        var f = c.anchorOffset, m = c.focusNode;
        c = c.focusOffset;
        try {
          i.nodeType, m.nodeType;
        } catch {
          i = null;
          break e;
        }
        var w = 0, S = -1, O = -1, z = 0, V = 0, K = e, Z = null;
        t: for (; ; ) {
          for (var te; K !== i || f !== 0 && K.nodeType !== 3 || (S = w + f), K !== m || c !== 0 && K.nodeType !== 3 || (O = w + c), K.nodeType === 3 && (w += K.nodeValue.length), (te = K.firstChild) !== null; )
            Z = K, K = te;
          for (; ; ) {
            if (K === e) break t;
            if (Z === i && ++z === f && (S = w), Z === m && ++V === c && (O = w), (te = K.nextSibling) !== null) break;
            K = Z, Z = K.parentNode;
          }
          K = te;
        }
        i = S === -1 || O === -1 ? null : { start: S, end: O };
      } else i = null;
    }
    i = i || { start: 0, end: 0 };
  } else i = null;
  for (Wa = { focusedElem: e, selectionRange: i }, to = !1, ve = t; ve !== null; ) if (t = ve, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, ve = e;
  else for (; ve !== null; ) {
    t = ve;
    try {
      var ae = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (ae !== null) {
            var ue = ae.memoizedProps, Te = ae.memoizedState, G = t.stateNode, N = G.getSnapshotBeforeUpdate(t.elementType === t.type ? ue : Lt(t.type, ue), Te);
            G.__reactInternalSnapshotBeforeUpdate = N;
          }
          break;
        case 3:
          var R = t.stateNode.containerInfo;
          R.nodeType === 1 ? R.textContent = "" : R.nodeType === 9 && R.documentElement && R.removeChild(R.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(ce(163));
      }
    } catch (J) {
      Ye(t, t.return, J);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, ve = e;
      break;
    }
    ve = t.return;
  }
  return ae = xc, xc = !1, ae;
}
function Yi(e, t, i) {
  var c = t.updateQueue;
  if (c = c !== null ? c.lastEffect : null, c !== null) {
    var f = c = c.next;
    do {
      if ((f.tag & e) === e) {
        var m = f.destroy;
        f.destroy = void 0, m !== void 0 && os(t, i, m);
      }
      f = f.next;
    } while (f !== c);
  }
}
function Lo(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var i = t = t.next;
    do {
      if ((i.tag & e) === e) {
        var c = i.create;
        i.destroy = c();
      }
      i = i.next;
    } while (i !== t);
  }
}
function as(e) {
  var t = e.ref;
  if (t !== null) {
    var i = e.stateNode;
    switch (e.tag) {
      case 5:
        e = i;
        break;
      default:
        e = i;
    }
    typeof t == "function" ? t(e) : t.current = e;
  }
}
function Vh(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Vh(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Xt], delete t[ir], delete t[Ga], delete t[Df], delete t[Af])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function $h(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function wc(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || $h(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function ss(e, t, i) {
  var c = e.tag;
  if (c === 5 || c === 6) e = e.stateNode, t ? i.nodeType === 8 ? i.parentNode.insertBefore(e, t) : i.insertBefore(e, t) : (i.nodeType === 8 ? (t = i.parentNode, t.insertBefore(e, i)) : (t = i, t.appendChild(e)), i = i._reactRootContainer, i != null || t.onclick !== null || (t.onclick = ro));
  else if (c !== 4 && (e = e.child, e !== null)) for (ss(e, t, i), e = e.sibling; e !== null; ) ss(e, t, i), e = e.sibling;
}
function ls(e, t, i) {
  var c = e.tag;
  if (c === 5 || c === 6) e = e.stateNode, t ? i.insertBefore(e, t) : i.appendChild(e);
  else if (c !== 4 && (e = e.child, e !== null)) for (ls(e, t, i), e = e.sibling; e !== null; ) ls(e, t, i), e = e.sibling;
}
var tt = null, Rt = !1;
function un(e, t, i) {
  for (i = i.child; i !== null; ) Zh(e, t, i), i = i.sibling;
}
function Zh(e, t, i) {
  if ($t && typeof $t.onCommitFiberUnmount == "function") try {
    $t.onCommitFiberUnmount(ko, i);
  } catch {
  }
  switch (i.tag) {
    case 5:
      at || ai(i, t);
    case 6:
      var c = tt, f = Rt;
      tt = null, un(e, t, i), tt = c, Rt = f, tt !== null && (Rt ? (e = tt, i = i.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(i) : e.removeChild(i)) : tt.removeChild(i.stateNode));
      break;
    case 18:
      tt !== null && (Rt ? (e = tt, i = i.stateNode, e.nodeType === 8 ? sa(e.parentNode, i) : e.nodeType === 1 && sa(e, i), Qi(e)) : sa(tt, i.stateNode));
      break;
    case 4:
      c = tt, f = Rt, tt = i.stateNode.containerInfo, Rt = !0, un(e, t, i), tt = c, Rt = f;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!at && (c = i.updateQueue, c !== null && (c = c.lastEffect, c !== null))) {
        f = c = c.next;
        do {
          var m = f, w = m.destroy;
          m = m.tag, w !== void 0 && (m & 2 || m & 4) && os(i, t, w), f = f.next;
        } while (f !== c);
      }
      un(e, t, i);
      break;
    case 1:
      if (!at && (ai(i, t), c = i.stateNode, typeof c.componentWillUnmount == "function")) try {
        c.props = i.memoizedProps, c.state = i.memoizedState, c.componentWillUnmount();
      } catch (S) {
        Ye(i, t, S);
      }
      un(e, t, i);
      break;
    case 21:
      un(e, t, i);
      break;
    case 22:
      i.mode & 1 ? (at = (c = at) || i.memoizedState !== null, un(e, t, i), at = c) : un(e, t, i);
      break;
    default:
      un(e, t, i);
  }
}
function _c(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var i = e.stateNode;
    i === null && (i = e.stateNode = new Zf()), t.forEach(function(c) {
      var f = og.bind(null, e, c);
      i.has(c) || (i.add(c), c.then(f, f));
    });
  }
}
function Ft(e, t) {
  var i = t.deletions;
  if (i !== null) for (var c = 0; c < i.length; c++) {
    var f = i[c];
    try {
      var m = e, w = t, S = w;
      e: for (; S !== null; ) {
        switch (S.tag) {
          case 5:
            tt = S.stateNode, Rt = !1;
            break e;
          case 3:
            tt = S.stateNode.containerInfo, Rt = !0;
            break e;
          case 4:
            tt = S.stateNode.containerInfo, Rt = !0;
            break e;
        }
        S = S.return;
      }
      if (tt === null) throw Error(ce(160));
      Zh(m, w, f), tt = null, Rt = !1;
      var O = f.alternate;
      O !== null && (O.return = null), f.return = null;
    } catch (z) {
      Ye(f, t, z);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) qh(t, e), t = t.sibling;
}
function qh(e, t) {
  var i = e.alternate, c = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Ft(t, e), Ht(e), c & 4) {
        try {
          Yi(3, e, e.return), Lo(3, e);
        } catch (ue) {
          Ye(e, e.return, ue);
        }
        try {
          Yi(5, e, e.return);
        } catch (ue) {
          Ye(e, e.return, ue);
        }
      }
      break;
    case 1:
      Ft(t, e), Ht(e), c & 512 && i !== null && ai(i, i.return);
      break;
    case 5:
      if (Ft(t, e), Ht(e), c & 512 && i !== null && ai(i, i.return), e.flags & 32) {
        var f = e.stateNode;
        try {
          $i(f, "");
        } catch (ue) {
          Ye(e, e.return, ue);
        }
      }
      if (c & 4 && (f = e.stateNode, f != null)) {
        var m = e.memoizedProps, w = i !== null ? i.memoizedProps : m, S = e.type, O = e.updateQueue;
        if (e.updateQueue = null, O !== null) try {
          S === "input" && m.type === "radio" && m.name != null && yu(f, m), Da(S, w);
          var z = Da(S, m);
          for (w = 0; w < O.length; w += 2) {
            var V = O[w], K = O[w + 1];
            V === "style" ? Su(f, K) : V === "dangerouslySetInnerHTML" ? _u(f, K) : V === "children" ? $i(f, K) : Es(f, V, K, z);
          }
          switch (S) {
            case "input":
              ka(f, m);
              break;
            case "textarea":
              xu(f, m);
              break;
            case "select":
              var Z = f._wrapperState.wasMultiple;
              f._wrapperState.wasMultiple = !!m.multiple;
              var te = m.value;
              te != null ? li(f, !!m.multiple, te, !1) : Z !== !!m.multiple && (m.defaultValue != null ? li(
                f,
                !!m.multiple,
                m.defaultValue,
                !0
              ) : li(f, !!m.multiple, m.multiple ? [] : "", !1));
          }
          f[ir] = m;
        } catch (ue) {
          Ye(e, e.return, ue);
        }
      }
      break;
    case 6:
      if (Ft(t, e), Ht(e), c & 4) {
        if (e.stateNode === null) throw Error(ce(162));
        f = e.stateNode, m = e.memoizedProps;
        try {
          f.nodeValue = m;
        } catch (ue) {
          Ye(e, e.return, ue);
        }
      }
      break;
    case 3:
      if (Ft(t, e), Ht(e), c & 4 && i !== null && i.memoizedState.isDehydrated) try {
        Qi(t.containerInfo);
      } catch (ue) {
        Ye(e, e.return, ue);
      }
      break;
    case 4:
      Ft(t, e), Ht(e);
      break;
    case 13:
      Ft(t, e), Ht(e), f = e.child, f.flags & 8192 && (m = f.memoizedState !== null, f.stateNode.isHidden = m, !m || f.alternate !== null && f.alternate.memoizedState !== null || (ol = Ge())), c & 4 && _c(e);
      break;
    case 22:
      if (V = i !== null && i.memoizedState !== null, e.mode & 1 ? (at = (z = at) || V, Ft(t, e), at = z) : Ft(t, e), Ht(e), c & 8192) {
        if (z = e.memoizedState !== null, (e.stateNode.isHidden = z) && !V && e.mode & 1) for (ve = e, V = e.child; V !== null; ) {
          for (K = ve = V; ve !== null; ) {
            switch (Z = ve, te = Z.child, Z.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Yi(4, Z, Z.return);
                break;
              case 1:
                ai(Z, Z.return);
                var ae = Z.stateNode;
                if (typeof ae.componentWillUnmount == "function") {
                  c = Z, i = Z.return;
                  try {
                    t = c, ae.props = t.memoizedProps, ae.state = t.memoizedState, ae.componentWillUnmount();
                  } catch (ue) {
                    Ye(c, i, ue);
                  }
                }
                break;
              case 5:
                ai(Z, Z.return);
                break;
              case 22:
                if (Z.memoizedState !== null) {
                  Sc(K);
                  continue;
                }
            }
            te !== null ? (te.return = Z, ve = te) : Sc(K);
          }
          V = V.sibling;
        }
        e: for (V = null, K = e; ; ) {
          if (K.tag === 5) {
            if (V === null) {
              V = K;
              try {
                f = K.stateNode, z ? (m = f.style, typeof m.setProperty == "function" ? m.setProperty("display", "none", "important") : m.display = "none") : (S = K.stateNode, O = K.memoizedProps.style, w = O != null && O.hasOwnProperty("display") ? O.display : null, S.style.display = Cu("display", w));
              } catch (ue) {
                Ye(e, e.return, ue);
              }
            }
          } else if (K.tag === 6) {
            if (V === null) try {
              K.stateNode.nodeValue = z ? "" : K.memoizedProps;
            } catch (ue) {
              Ye(e, e.return, ue);
            }
          } else if ((K.tag !== 22 && K.tag !== 23 || K.memoizedState === null || K === e) && K.child !== null) {
            K.child.return = K, K = K.child;
            continue;
          }
          if (K === e) break e;
          for (; K.sibling === null; ) {
            if (K.return === null || K.return === e) break e;
            V === K && (V = null), K = K.return;
          }
          V === K && (V = null), K.sibling.return = K.return, K = K.sibling;
        }
      }
      break;
    case 19:
      Ft(t, e), Ht(e), c & 4 && _c(e);
      break;
    case 21:
      break;
    default:
      Ft(
        t,
        e
      ), Ht(e);
  }
}
function Ht(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var i = e.return; i !== null; ) {
          if ($h(i)) {
            var c = i;
            break e;
          }
          i = i.return;
        }
        throw Error(ce(160));
      }
      switch (c.tag) {
        case 5:
          var f = c.stateNode;
          c.flags & 32 && ($i(f, ""), c.flags &= -33);
          var m = wc(e);
          ls(e, m, f);
          break;
        case 3:
        case 4:
          var w = c.stateNode.containerInfo, S = wc(e);
          ss(e, S, w);
          break;
        default:
          throw Error(ce(161));
      }
    } catch (O) {
      Ye(e, e.return, O);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Kf(e, t, i) {
  ve = e, Kh(e);
}
function Kh(e, t, i) {
  for (var c = (e.mode & 1) !== 0; ve !== null; ) {
    var f = ve, m = f.child;
    if (f.tag === 22 && c) {
      var w = f.memoizedState !== null || jr;
      if (!w) {
        var S = f.alternate, O = S !== null && S.memoizedState !== null || at;
        S = jr;
        var z = at;
        if (jr = w, (at = O) && !z) for (ve = f; ve !== null; ) w = ve, O = w.child, w.tag === 22 && w.memoizedState !== null ? bc(f) : O !== null ? (O.return = w, ve = O) : bc(f);
        for (; m !== null; ) ve = m, Kh(m), m = m.sibling;
        ve = f, jr = S, at = z;
      }
      Cc(e);
    } else f.subtreeFlags & 8772 && m !== null ? (m.return = f, ve = m) : Cc(e);
  }
}
function Cc(e) {
  for (; ve !== null; ) {
    var t = ve;
    if (t.flags & 8772) {
      var i = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            at || Lo(5, t);
            break;
          case 1:
            var c = t.stateNode;
            if (t.flags & 4 && !at) if (i === null) c.componentDidMount();
            else {
              var f = t.elementType === t.type ? i.memoizedProps : Lt(t.type, i.memoizedProps);
              c.componentDidUpdate(f, i.memoizedState, c.__reactInternalSnapshotBeforeUpdate);
            }
            var m = t.updateQueue;
            m !== null && ac(t, m, c);
            break;
          case 3:
            var w = t.updateQueue;
            if (w !== null) {
              if (i = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  i = t.child.stateNode;
                  break;
                case 1:
                  i = t.child.stateNode;
              }
              ac(t, w, i);
            }
            break;
          case 5:
            var S = t.stateNode;
            if (i === null && t.flags & 4) {
              i = S;
              var O = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  O.autoFocus && i.focus();
                  break;
                case "img":
                  O.src && (i.src = O.src);
              }
            }
            break;
          case 6:
            break;
          case 4:
            break;
          case 12:
            break;
          case 13:
            if (t.memoizedState === null) {
              var z = t.alternate;
              if (z !== null) {
                var V = z.memoizedState;
                if (V !== null) {
                  var K = V.dehydrated;
                  K !== null && Qi(K);
                }
              }
            }
            break;
          case 19:
          case 17:
          case 21:
          case 22:
          case 23:
          case 25:
            break;
          default:
            throw Error(ce(163));
        }
        at || t.flags & 512 && as(t);
      } catch (Z) {
        Ye(t, t.return, Z);
      }
    }
    if (t === e) {
      ve = null;
      break;
    }
    if (i = t.sibling, i !== null) {
      i.return = t.return, ve = i;
      break;
    }
    ve = t.return;
  }
}
function Sc(e) {
  for (; ve !== null; ) {
    var t = ve;
    if (t === e) {
      ve = null;
      break;
    }
    var i = t.sibling;
    if (i !== null) {
      i.return = t.return, ve = i;
      break;
    }
    ve = t.return;
  }
}
function bc(e) {
  for (; ve !== null; ) {
    var t = ve;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var i = t.return;
          try {
            Lo(4, t);
          } catch (O) {
            Ye(t, i, O);
          }
          break;
        case 1:
          var c = t.stateNode;
          if (typeof c.componentDidMount == "function") {
            var f = t.return;
            try {
              c.componentDidMount();
            } catch (O) {
              Ye(t, f, O);
            }
          }
          var m = t.return;
          try {
            as(t);
          } catch (O) {
            Ye(t, m, O);
          }
          break;
        case 5:
          var w = t.return;
          try {
            as(t);
          } catch (O) {
            Ye(t, w, O);
          }
      }
    } catch (O) {
      Ye(t, t.return, O);
    }
    if (t === e) {
      ve = null;
      break;
    }
    var S = t.sibling;
    if (S !== null) {
      S.return = t.return, ve = S;
      break;
    }
    ve = t.return;
  }
}
var Qf = Math.ceil, mo = ln.ReactCurrentDispatcher, il = ln.ReactCurrentOwner, Mt = ln.ReactCurrentBatchConfig, Oe = 0, Je = null, Ve = null, nt = 0, wt = 0, si = On(0), Ze = 0, cr = null, Wn = 0, Ro = 0, rl = 0, Xi = null, gt = null, ol = 0, wi = 1 / 0, Kt = null, vo = !1, cs = null, Cn = null, Dr = !1, mn = null, yo = 0, Gi = 0, us = null, Vr = -1, $r = 0;
function ut() {
  return Oe & 6 ? Ge() : Vr !== -1 ? Vr : Vr = Ge();
}
function Sn(e) {
  return e.mode & 1 ? Oe & 2 && nt !== 0 ? nt & -nt : Lf.transition !== null ? ($r === 0 && ($r = Lu()), $r) : (e = je, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Hu(e.type)), e) : 1;
}
function zt(e, t, i, c) {
  if (50 < Gi) throw Gi = 0, us = null, Error(ce(185));
  pr(e, i, c), (!(Oe & 2) || e !== Je) && (e === Je && (!(Oe & 2) && (Ro |= i), Ze === 4 && fn(e, nt)), xt(e, c), i === 1 && Oe === 0 && !(t.mode & 1) && (wi = Ge() + 500, Do && Pn()));
}
function xt(e, t) {
  var i = e.callbackNode;
  Fd(e, t);
  var c = eo(e, e === Je ? nt : 0);
  if (c === 0) i !== null && Al(i), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = c & -c, e.callbackPriority !== t) {
    if (i != null && Al(i), t === 1) e.tag === 0 ? Ff(Tc.bind(null, e)) : sh(Tc.bind(null, e)), Mf(function() {
      !(Oe & 6) && Pn();
    }), i = null;
    else {
      switch (Ru(c)) {
        case 1:
          i = js;
          break;
        case 4:
          i = Au;
          break;
        case 16:
          i = Jr;
          break;
        case 536870912:
          i = Fu;
          break;
        default:
          i = Jr;
      }
      i = op(i, Qh.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = i;
  }
}
function Qh(e, t) {
  if (Vr = -1, $r = 0, Oe & 6) throw Error(ce(327));
  var i = e.callbackNode;
  if (di() && e.callbackNode !== i) return null;
  var c = eo(e, e === Je ? nt : 0);
  if (c === 0) return null;
  if (c & 30 || c & e.expiredLanes || t) t = xo(e, c);
  else {
    t = c;
    var f = Oe;
    Oe |= 2;
    var m = ep();
    (Je !== e || nt !== t) && (Kt = null, wi = Ge() + 500, Bn(e, t));
    do
      try {
        tg();
        break;
      } catch (S) {
        Jh(e, S);
      }
    while (!0);
    Ys(), mo.current = m, Oe = f, Ve !== null ? t = 0 : (Je = null, nt = 0, t = Ze);
  }
  if (t !== 0) {
    if (t === 2 && (f = Ia(e), f !== 0 && (c = f, t = hs(e, f))), t === 1) throw i = cr, Bn(e, 0), fn(e, c), xt(e, Ge()), i;
    if (t === 6) fn(e, c);
    else {
      if (f = e.current.alternate, !(c & 30) && !Jf(f) && (t = xo(e, c), t === 2 && (m = Ia(e), m !== 0 && (c = m, t = hs(e, m))), t === 1)) throw i = cr, Bn(e, 0), fn(e, c), xt(e, Ge()), i;
      switch (e.finishedWork = f, e.finishedLanes = c, t) {
        case 0:
        case 1:
          throw Error(ce(345));
        case 2:
          An(e, gt, Kt);
          break;
        case 3:
          if (fn(e, c), (c & 130023424) === c && (t = ol + 500 - Ge(), 10 < t)) {
            if (eo(e, 0) !== 0) break;
            if (f = e.suspendedLanes, (f & c) !== c) {
              ut(), e.pingedLanes |= e.suspendedLanes & f;
              break;
            }
            e.timeoutHandle = Xa(An.bind(null, e, gt, Kt), t);
            break;
          }
          An(e, gt, Kt);
          break;
        case 4:
          if (fn(e, c), (c & 4194240) === c) break;
          for (t = e.eventTimes, f = -1; 0 < c; ) {
            var w = 31 - Bt(c);
            m = 1 << w, w = t[w], w > f && (f = w), c &= ~m;
          }
          if (c = f, c = Ge() - c, c = (120 > c ? 120 : 480 > c ? 480 : 1080 > c ? 1080 : 1920 > c ? 1920 : 3e3 > c ? 3e3 : 4320 > c ? 4320 : 1960 * Qf(c / 1960)) - c, 10 < c) {
            e.timeoutHandle = Xa(An.bind(null, e, gt, Kt), c);
            break;
          }
          An(e, gt, Kt);
          break;
        case 5:
          An(e, gt, Kt);
          break;
        default:
          throw Error(ce(329));
      }
    }
  }
  return xt(e, Ge()), e.callbackNode === i ? Qh.bind(null, e) : null;
}
function hs(e, t) {
  var i = Xi;
  return e.current.memoizedState.isDehydrated && (Bn(e, t).flags |= 256), e = xo(e, t), e !== 2 && (t = gt, gt = i, t !== null && ps(t)), e;
}
function ps(e) {
  gt === null ? gt = e : gt.push.apply(gt, e);
}
function Jf(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var i = t.updateQueue;
      if (i !== null && (i = i.stores, i !== null)) for (var c = 0; c < i.length; c++) {
        var f = i[c], m = f.getSnapshot;
        f = f.value;
        try {
          if (!Nt(m(), f)) return !1;
        } catch {
          return !1;
        }
      }
    }
    if (i = t.child, t.subtreeFlags & 16384 && i !== null) i.return = t, t = i;
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return !0;
}
function fn(e, t) {
  for (t &= ~rl, t &= ~Ro, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var i = 31 - Bt(t), c = 1 << i;
    e[i] = -1, t &= ~c;
  }
}
function Tc(e) {
  if (Oe & 6) throw Error(ce(327));
  di();
  var t = eo(e, 0);
  if (!(t & 1)) return xt(e, Ge()), null;
  var i = xo(e, t);
  if (e.tag !== 0 && i === 2) {
    var c = Ia(e);
    c !== 0 && (t = c, i = hs(e, c));
  }
  if (i === 1) throw i = cr, Bn(e, 0), fn(e, t), xt(e, Ge()), i;
  if (i === 6) throw Error(ce(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, An(e, gt, Kt), xt(e, Ge()), null;
}
function al(e, t) {
  var i = Oe;
  Oe |= 1;
  try {
    return e(t);
  } finally {
    Oe = i, Oe === 0 && (wi = Ge() + 500, Do && Pn());
  }
}
function Yn(e) {
  mn !== null && mn.tag === 0 && !(Oe & 6) && di();
  var t = Oe;
  Oe |= 1;
  var i = Mt.transition, c = je;
  try {
    if (Mt.transition = null, je = 1, e) return e();
  } finally {
    je = c, Mt.transition = i, Oe = t, !(Oe & 6) && Pn();
  }
}
function sl() {
  wt = si.current, Re(si);
}
function Bn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var i = e.timeoutHandle;
  if (i !== -1 && (e.timeoutHandle = -1, Pf(i)), Ve !== null) for (i = Ve.return; i !== null; ) {
    var c = i;
    switch (Us(c), c.tag) {
      case 1:
        c = c.type.childContextTypes, c != null && oo();
        break;
      case 3:
        yi(), Re(vt), Re(st), qs();
        break;
      case 5:
        Zs(c);
        break;
      case 4:
        yi();
        break;
      case 13:
        Re(Ne);
        break;
      case 19:
        Re(Ne);
        break;
      case 10:
        Xs(c.type._context);
        break;
      case 22:
      case 23:
        sl();
    }
    i = i.return;
  }
  if (Je = e, Ve = e = bn(e.current, null), nt = wt = t, Ze = 0, cr = null, rl = Ro = Wn = 0, gt = Xi = null, Rn !== null) {
    for (t = 0; t < Rn.length; t++) if (i = Rn[t], c = i.interleaved, c !== null) {
      i.interleaved = null;
      var f = c.next, m = i.pending;
      if (m !== null) {
        var w = m.next;
        m.next = f, c.next = w;
      }
      i.pending = c;
    }
    Rn = null;
  }
  return e;
}
function Jh(e, t) {
  do {
    var i = Ve;
    try {
      if (Ys(), Yr.current = go, fo) {
        for (var c = Ue.memoizedState; c !== null; ) {
          var f = c.queue;
          f !== null && (f.pending = null), c = c.next;
        }
        fo = !1;
      }
      if (Hn = 0, Qe = $e = Ue = null, Wi = !1, ar = 0, il.current = null, i === null || i.return === null) {
        Ze = 1, cr = t, Ve = null;
        break;
      }
      e: {
        var m = e, w = i.return, S = i, O = t;
        if (t = nt, S.flags |= 32768, O !== null && typeof O == "object" && typeof O.then == "function") {
          var z = O, V = S, K = V.tag;
          if (!(V.mode & 1) && (K === 0 || K === 11 || K === 15)) {
            var Z = V.alternate;
            Z ? (V.updateQueue = Z.updateQueue, V.memoizedState = Z.memoizedState, V.lanes = Z.lanes) : (V.updateQueue = null, V.memoizedState = null);
          }
          var te = pc(w);
          if (te !== null) {
            te.flags &= -257, dc(te, w, S, m, t), te.mode & 1 && hc(m, z, t), t = te, O = z;
            var ae = t.updateQueue;
            if (ae === null) {
              var ue = /* @__PURE__ */ new Set();
              ue.add(O), t.updateQueue = ue;
            } else ae.add(O);
            break e;
          } else {
            if (!(t & 1)) {
              hc(m, z, t), ll();
              break e;
            }
            O = Error(ce(426));
          }
        } else if (Ie && S.mode & 1) {
          var Te = pc(w);
          if (Te !== null) {
            !(Te.flags & 65536) && (Te.flags |= 256), dc(Te, w, S, m, t), Hs(xi(O, S));
            break e;
          }
        }
        m = O = xi(O, S), Ze !== 4 && (Ze = 2), Xi === null ? Xi = [m] : Xi.push(m), m = w;
        do {
          switch (m.tag) {
            case 3:
              m.flags |= 65536, t &= -t, m.lanes |= t;
              var G = Rh(m, O, t);
              oc(m, G);
              break e;
            case 1:
              S = O;
              var N = m.type, R = m.stateNode;
              if (!(m.flags & 128) && (typeof N.getDerivedStateFromError == "function" || R !== null && typeof R.componentDidCatch == "function" && (Cn === null || !Cn.has(R)))) {
                m.flags |= 65536, t &= -t, m.lanes |= t;
                var J = Ih(m, S, t);
                oc(m, J);
                break e;
              }
          }
          m = m.return;
        } while (m !== null);
      }
      np(i);
    } catch (de) {
      t = de, Ve === i && i !== null && (Ve = i = i.return);
      continue;
    }
    break;
  } while (!0);
}
function ep() {
  var e = mo.current;
  return mo.current = go, e === null ? go : e;
}
function ll() {
  (Ze === 0 || Ze === 3 || Ze === 2) && (Ze = 4), Je === null || !(Wn & 268435455) && !(Ro & 268435455) || fn(Je, nt);
}
function xo(e, t) {
  var i = Oe;
  Oe |= 2;
  var c = ep();
  (Je !== e || nt !== t) && (Kt = null, Bn(e, t));
  do
    try {
      eg();
      break;
    } catch (f) {
      Jh(e, f);
    }
  while (!0);
  if (Ys(), Oe = i, mo.current = c, Ve !== null) throw Error(ce(261));
  return Je = null, nt = 0, Ze;
}
function eg() {
  for (; Ve !== null; ) tp(Ve);
}
function tg() {
  for (; Ve !== null && !Td(); ) tp(Ve);
}
function tp(e) {
  var t = rp(e.alternate, e, wt);
  e.memoizedProps = e.pendingProps, t === null ? np(e) : Ve = t, il.current = null;
}
function np(e) {
  var t = e;
  do {
    var i = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (i = $f(i, t), i !== null) {
        i.flags &= 32767, Ve = i;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Ze = 6, Ve = null;
        return;
      }
    } else if (i = Vf(i, t, wt), i !== null) {
      Ve = i;
      return;
    }
    if (t = t.sibling, t !== null) {
      Ve = t;
      return;
    }
    Ve = t = e;
  } while (t !== null);
  Ze === 0 && (Ze = 5);
}
function An(e, t, i) {
  var c = je, f = Mt.transition;
  try {
    Mt.transition = null, je = 1, ng(e, t, i, c);
  } finally {
    Mt.transition = f, je = c;
  }
  return null;
}
function ng(e, t, i, c) {
  do
    di();
  while (mn !== null);
  if (Oe & 6) throw Error(ce(327));
  i = e.finishedWork;
  var f = e.finishedLanes;
  if (i === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, i === e.current) throw Error(ce(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var m = i.lanes | i.childLanes;
  if (Ld(e, m), e === Je && (Ve = Je = null, nt = 0), !(i.subtreeFlags & 2064) && !(i.flags & 2064) || Dr || (Dr = !0, op(Jr, function() {
    return di(), null;
  })), m = (i.flags & 15990) !== 0, i.subtreeFlags & 15990 || m) {
    m = Mt.transition, Mt.transition = null;
    var w = je;
    je = 1;
    var S = Oe;
    Oe |= 4, il.current = null, qf(e, i), qh(i, e), Cf(Wa), to = !!Ha, Wa = Ha = null, e.current = i, Kf(i), Ed(), Oe = S, je = w, Mt.transition = m;
  } else e.current = i;
  if (Dr && (Dr = !1, mn = e, yo = f), m = e.pendingLanes, m === 0 && (Cn = null), Pd(i.stateNode), xt(e, Ge()), t !== null) for (c = e.onRecoverableError, i = 0; i < t.length; i++) f = t[i], c(f.value, { componentStack: f.stack, digest: f.digest });
  if (vo) throw vo = !1, e = cs, cs = null, e;
  return yo & 1 && e.tag !== 0 && di(), m = e.pendingLanes, m & 1 ? e === us ? Gi++ : (Gi = 0, us = e) : Gi = 0, Pn(), null;
}
function di() {
  if (mn !== null) {
    var e = Ru(yo), t = Mt.transition, i = je;
    try {
      if (Mt.transition = null, je = 16 > e ? 16 : e, mn === null) var c = !1;
      else {
        if (e = mn, mn = null, yo = 0, Oe & 6) throw Error(ce(331));
        var f = Oe;
        for (Oe |= 4, ve = e.current; ve !== null; ) {
          var m = ve, w = m.child;
          if (ve.flags & 16) {
            var S = m.deletions;
            if (S !== null) {
              for (var O = 0; O < S.length; O++) {
                var z = S[O];
                for (ve = z; ve !== null; ) {
                  var V = ve;
                  switch (V.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Yi(8, V, m);
                  }
                  var K = V.child;
                  if (K !== null) K.return = V, ve = K;
                  else for (; ve !== null; ) {
                    V = ve;
                    var Z = V.sibling, te = V.return;
                    if (Vh(V), V === z) {
                      ve = null;
                      break;
                    }
                    if (Z !== null) {
                      Z.return = te, ve = Z;
                      break;
                    }
                    ve = te;
                  }
                }
              }
              var ae = m.alternate;
              if (ae !== null) {
                var ue = ae.child;
                if (ue !== null) {
                  ae.child = null;
                  do {
                    var Te = ue.sibling;
                    ue.sibling = null, ue = Te;
                  } while (ue !== null);
                }
              }
              ve = m;
            }
          }
          if (m.subtreeFlags & 2064 && w !== null) w.return = m, ve = w;
          else e: for (; ve !== null; ) {
            if (m = ve, m.flags & 2048) switch (m.tag) {
              case 0:
              case 11:
              case 15:
                Yi(9, m, m.return);
            }
            var G = m.sibling;
            if (G !== null) {
              G.return = m.return, ve = G;
              break e;
            }
            ve = m.return;
          }
        }
        var N = e.current;
        for (ve = N; ve !== null; ) {
          w = ve;
          var R = w.child;
          if (w.subtreeFlags & 2064 && R !== null) R.return = w, ve = R;
          else e: for (w = N; ve !== null; ) {
            if (S = ve, S.flags & 2048) try {
              switch (S.tag) {
                case 0:
                case 11:
                case 15:
                  Lo(9, S);
              }
            } catch (de) {
              Ye(S, S.return, de);
            }
            if (S === w) {
              ve = null;
              break e;
            }
            var J = S.sibling;
            if (J !== null) {
              J.return = S.return, ve = J;
              break e;
            }
            ve = S.return;
          }
        }
        if (Oe = f, Pn(), $t && typeof $t.onPostCommitFiberRoot == "function") try {
          $t.onPostCommitFiberRoot(ko, e);
        } catch {
        }
        c = !0;
      }
      return c;
    } finally {
      je = i, Mt.transition = t;
    }
  }
  return !1;
}
function Ec(e, t, i) {
  t = xi(i, t), t = Rh(e, t, 1), e = _n(e, t, 1), t = ut(), e !== null && (pr(e, 1, t), xt(e, t));
}
function Ye(e, t, i) {
  if (e.tag === 3) Ec(e, e, i);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Ec(t, e, i);
      break;
    } else if (t.tag === 1) {
      var c = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof c.componentDidCatch == "function" && (Cn === null || !Cn.has(c))) {
        e = xi(i, e), e = Ih(t, e, 1), t = _n(t, e, 1), e = ut(), t !== null && (pr(t, 1, e), xt(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function ig(e, t, i) {
  var c = e.pingCache;
  c !== null && c.delete(t), t = ut(), e.pingedLanes |= e.suspendedLanes & i, Je === e && (nt & i) === i && (Ze === 4 || Ze === 3 && (nt & 130023424) === nt && 500 > Ge() - ol ? Bn(e, 0) : rl |= i), xt(e, t);
}
function ip(e, t) {
  t === 0 && (e.mode & 1 ? (t = Cr, Cr <<= 1, !(Cr & 130023424) && (Cr = 4194304)) : t = 1);
  var i = ut();
  e = an(e, t), e !== null && (pr(e, t, i), xt(e, i));
}
function rg(e) {
  var t = e.memoizedState, i = 0;
  t !== null && (i = t.retryLane), ip(e, i);
}
function og(e, t) {
  var i = 0;
  switch (e.tag) {
    case 13:
      var c = e.stateNode, f = e.memoizedState;
      f !== null && (i = f.retryLane);
      break;
    case 19:
      c = e.stateNode;
      break;
    default:
      throw Error(ce(314));
  }
  c !== null && c.delete(t), ip(e, i);
}
var rp;
rp = function(e, t, i) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || vt.current) mt = !0;
  else {
    if (!(e.lanes & i) && !(t.flags & 128)) return mt = !1, Gf(e, t, i);
    mt = !!(e.flags & 131072);
  }
  else mt = !1, Ie && t.flags & 1048576 && lh(t, lo, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var c = t.type;
      Gr(e, t), e = t.pendingProps;
      var f = gi(t, st.current);
      pi(t, i), f = Qs(null, t, c, e, f, i);
      var m = Js();
      return t.flags |= 1, typeof f == "object" && f !== null && typeof f.render == "function" && f.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, yt(c) ? (m = !0, ao(t)) : m = !1, t.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, Vs(t), f.updater = Fo, t.stateNode = f, f._reactInternals = t, Qa(t, c, e, i), t = ts(null, t, c, !0, m, i)) : (t.tag = 0, Ie && m && Ns(t), ct(null, t, f, i), t = t.child), t;
    case 16:
      c = t.elementType;
      e: {
        switch (Gr(e, t), e = t.pendingProps, f = c._init, c = f(c._payload), t.type = c, f = t.tag = sg(c), e = Lt(c, e), f) {
          case 0:
            t = es(null, t, c, e, i);
            break e;
          case 1:
            t = mc(null, t, c, e, i);
            break e;
          case 11:
            t = fc(null, t, c, e, i);
            break e;
          case 14:
            t = gc(null, t, c, Lt(c.type, e), i);
            break e;
        }
        throw Error(ce(
          306,
          c,
          ""
        ));
      }
      return t;
    case 0:
      return c = t.type, f = t.pendingProps, f = t.elementType === c ? f : Lt(c, f), es(e, t, c, f, i);
    case 1:
      return c = t.type, f = t.pendingProps, f = t.elementType === c ? f : Lt(c, f), mc(e, t, c, f, i);
    case 3:
      e: {
        if (Uh(t), e === null) throw Error(ce(387));
        c = t.pendingProps, m = t.memoizedState, f = m.element, fh(e, t), ho(t, c, null, i);
        var w = t.memoizedState;
        if (c = w.element, m.isDehydrated) if (m = { element: c, isDehydrated: !1, cache: w.cache, pendingSuspenseBoundaries: w.pendingSuspenseBoundaries, transitions: w.transitions }, t.updateQueue.baseState = m, t.memoizedState = m, t.flags & 256) {
          f = xi(Error(ce(423)), t), t = vc(e, t, c, i, f);
          break e;
        } else if (c !== f) {
          f = xi(Error(ce(424)), t), t = vc(e, t, c, i, f);
          break e;
        } else for (_t = wn(t.stateNode.containerInfo.firstChild), Ct = t, Ie = !0, It = null, i = ph(t, null, c, i), t.child = i; i; ) i.flags = i.flags & -3 | 4096, i = i.sibling;
        else {
          if (mi(), c === f) {
            t = sn(e, t, i);
            break e;
          }
          ct(e, t, c, i);
        }
        t = t.child;
      }
      return t;
    case 5:
      return gh(t), e === null && Za(t), c = t.type, f = t.pendingProps, m = e !== null ? e.memoizedProps : null, w = f.children, Ya(c, f) ? w = null : m !== null && Ya(c, m) && (t.flags |= 32), Nh(e, t), ct(e, t, w, i), t.child;
    case 6:
      return e === null && Za(t), null;
    case 13:
      return Hh(e, t, i);
    case 4:
      return $s(t, t.stateNode.containerInfo), c = t.pendingProps, e === null ? t.child = vi(t, null, c, i) : ct(e, t, c, i), t.child;
    case 11:
      return c = t.type, f = t.pendingProps, f = t.elementType === c ? f : Lt(c, f), fc(e, t, c, f, i);
    case 7:
      return ct(e, t, t.pendingProps, i), t.child;
    case 8:
      return ct(e, t, t.pendingProps.children, i), t.child;
    case 12:
      return ct(e, t, t.pendingProps.children, i), t.child;
    case 10:
      e: {
        if (c = t.type._context, f = t.pendingProps, m = t.memoizedProps, w = f.value, Fe(co, c._currentValue), c._currentValue = w, m !== null) if (Nt(m.value, w)) {
          if (m.children === f.children && !vt.current) {
            t = sn(e, t, i);
            break e;
          }
        } else for (m = t.child, m !== null && (m.return = t); m !== null; ) {
          var S = m.dependencies;
          if (S !== null) {
            w = m.child;
            for (var O = S.firstContext; O !== null; ) {
              if (O.context === c) {
                if (m.tag === 1) {
                  O = nn(-1, i & -i), O.tag = 2;
                  var z = m.updateQueue;
                  if (z !== null) {
                    z = z.shared;
                    var V = z.pending;
                    V === null ? O.next = O : (O.next = V.next, V.next = O), z.pending = O;
                  }
                }
                m.lanes |= i, O = m.alternate, O !== null && (O.lanes |= i), qa(
                  m.return,
                  i,
                  t
                ), S.lanes |= i;
                break;
              }
              O = O.next;
            }
          } else if (m.tag === 10) w = m.type === t.type ? null : m.child;
          else if (m.tag === 18) {
            if (w = m.return, w === null) throw Error(ce(341));
            w.lanes |= i, S = w.alternate, S !== null && (S.lanes |= i), qa(w, i, t), w = m.sibling;
          } else w = m.child;
          if (w !== null) w.return = m;
          else for (w = m; w !== null; ) {
            if (w === t) {
              w = null;
              break;
            }
            if (m = w.sibling, m !== null) {
              m.return = w.return, w = m;
              break;
            }
            w = w.return;
          }
          m = w;
        }
        ct(e, t, f.children, i), t = t.child;
      }
      return t;
    case 9:
      return f = t.type, c = t.pendingProps.children, pi(t, i), f = jt(f), c = c(f), t.flags |= 1, ct(e, t, c, i), t.child;
    case 14:
      return c = t.type, f = Lt(c, t.pendingProps), f = Lt(c.type, f), gc(e, t, c, f, i);
    case 15:
      return Bh(e, t, t.type, t.pendingProps, i);
    case 17:
      return c = t.type, f = t.pendingProps, f = t.elementType === c ? f : Lt(c, f), Gr(e, t), t.tag = 1, yt(c) ? (e = !0, ao(t)) : e = !1, pi(t, i), Lh(t, c, f), Qa(t, c, f, i), ts(null, t, c, !0, e, i);
    case 19:
      return Wh(e, t, i);
    case 22:
      return zh(e, t, i);
  }
  throw Error(ce(156, t.tag));
};
function op(e, t) {
  return Du(e, t);
}
function ag(e, t, i, c) {
  this.tag = e, this.key = i, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = c, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Pt(e, t, i, c) {
  return new ag(e, t, i, c);
}
function cl(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function sg(e) {
  if (typeof e == "function") return cl(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Os) return 11;
    if (e === Ps) return 14;
  }
  return 2;
}
function bn(e, t) {
  var i = e.alternate;
  return i === null ? (i = Pt(e.tag, t, e.key, e.mode), i.elementType = e.elementType, i.type = e.type, i.stateNode = e.stateNode, i.alternate = e, e.alternate = i) : (i.pendingProps = t, i.type = e.type, i.flags = 0, i.subtreeFlags = 0, i.deletions = null), i.flags = e.flags & 14680064, i.childLanes = e.childLanes, i.lanes = e.lanes, i.child = e.child, i.memoizedProps = e.memoizedProps, i.memoizedState = e.memoizedState, i.updateQueue = e.updateQueue, t = e.dependencies, i.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, i.sibling = e.sibling, i.index = e.index, i.ref = e.ref, i;
}
function Zr(e, t, i, c, f, m) {
  var w = 2;
  if (c = e, typeof e == "function") cl(e) && (w = 1);
  else if (typeof e == "string") w = 5;
  else e: switch (e) {
    case Kn:
      return zn(i.children, f, m, t);
    case ks:
      w = 8, f |= 8;
      break;
    case Ca:
      return e = Pt(12, i, t, f | 2), e.elementType = Ca, e.lanes = m, e;
    case Sa:
      return e = Pt(13, i, t, f), e.elementType = Sa, e.lanes = m, e;
    case ba:
      return e = Pt(19, i, t, f), e.elementType = ba, e.lanes = m, e;
    case gu:
      return Io(i, f, m, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case du:
          w = 10;
          break e;
        case fu:
          w = 9;
          break e;
        case Os:
          w = 11;
          break e;
        case Ps:
          w = 14;
          break e;
        case hn:
          w = 16, c = null;
          break e;
      }
      throw Error(ce(130, e == null ? e : typeof e, ""));
  }
  return t = Pt(w, i, t, f), t.elementType = e, t.type = c, t.lanes = m, t;
}
function zn(e, t, i, c) {
  return e = Pt(7, e, c, t), e.lanes = i, e;
}
function Io(e, t, i, c) {
  return e = Pt(22, e, c, t), e.elementType = gu, e.lanes = i, e.stateNode = { isHidden: !1 }, e;
}
function ga(e, t, i) {
  return e = Pt(6, e, null, t), e.lanes = i, e;
}
function ma(e, t, i) {
  return t = Pt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = i, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function lg(e, t, i, c, f) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = qo(0), this.expirationTimes = qo(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = qo(0), this.identifierPrefix = c, this.onRecoverableError = f, this.mutableSourceEagerHydrationData = null;
}
function ul(e, t, i, c, f, m, w, S, O) {
  return e = new lg(e, t, i, S, O), t === 1 ? (t = 1, m === !0 && (t |= 8)) : t = 0, m = Pt(3, null, null, t), e.current = m, m.stateNode = e, m.memoizedState = { element: c, isDehydrated: i, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Vs(m), e;
}
function cg(e, t, i) {
  var c = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: qn, key: c == null ? null : "" + c, children: e, containerInfo: t, implementation: i };
}
function ap(e) {
  if (!e) return En;
  e = e._reactInternals;
  e: {
    if (Gn(e) !== e || e.tag !== 1) throw Error(ce(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (yt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(ce(171));
  }
  if (e.tag === 1) {
    var i = e.type;
    if (yt(i)) return ah(e, i, t);
  }
  return t;
}
function sp(e, t, i, c, f, m, w, S, O) {
  return e = ul(i, c, !0, e, f, m, w, S, O), e.context = ap(null), i = e.current, c = ut(), f = Sn(i), m = nn(c, f), m.callback = t ?? null, _n(i, m, f), e.current.lanes = f, pr(e, f, c), xt(e, c), e;
}
function Bo(e, t, i, c) {
  var f = t.current, m = ut(), w = Sn(f);
  return i = ap(i), t.context === null ? t.context = i : t.pendingContext = i, t = nn(m, w), t.payload = { element: e }, c = c === void 0 ? null : c, c !== null && (t.callback = c), e = _n(f, t, w), e !== null && (zt(e, f, w, m), Wr(e, f, w)), w;
}
function wo(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function kc(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var i = e.retryLane;
    e.retryLane = i !== 0 && i < t ? i : t;
  }
}
function hl(e, t) {
  kc(e, t), (e = e.alternate) && kc(e, t);
}
function ug() {
  return null;
}
var lp = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function pl(e) {
  this._internalRoot = e;
}
zo.prototype.render = pl.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(ce(409));
  Bo(e, t, null, null);
};
zo.prototype.unmount = pl.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Yn(function() {
      Bo(null, e, null, null);
    }), t[on] = null;
  }
};
function zo(e) {
  this._internalRoot = e;
}
zo.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = zu();
    e = { blockedOn: null, target: e, priority: t };
    for (var i = 0; i < dn.length && t !== 0 && t < dn[i].priority; i++) ;
    dn.splice(i, 0, e), i === 0 && Uu(e);
  }
};
function dl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function No(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Oc() {
}
function hg(e, t, i, c, f) {
  if (f) {
    if (typeof c == "function") {
      var m = c;
      c = function() {
        var z = wo(w);
        m.call(z);
      };
    }
    var w = sp(t, c, e, 0, null, !1, !1, "", Oc);
    return e._reactRootContainer = w, e[on] = w.current, tr(e.nodeType === 8 ? e.parentNode : e), Yn(), w;
  }
  for (; f = e.lastChild; ) e.removeChild(f);
  if (typeof c == "function") {
    var S = c;
    c = function() {
      var z = wo(O);
      S.call(z);
    };
  }
  var O = ul(e, 0, !1, null, null, !1, !1, "", Oc);
  return e._reactRootContainer = O, e[on] = O.current, tr(e.nodeType === 8 ? e.parentNode : e), Yn(function() {
    Bo(t, O, i, c);
  }), O;
}
function Uo(e, t, i, c, f) {
  var m = i._reactRootContainer;
  if (m) {
    var w = m;
    if (typeof f == "function") {
      var S = f;
      f = function() {
        var O = wo(w);
        S.call(O);
      };
    }
    Bo(t, w, e, f);
  } else w = hg(i, t, e, f, c);
  return wo(w);
}
Iu = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var i = Ri(t.pendingLanes);
        i !== 0 && (Ds(t, i | 1), xt(t, Ge()), !(Oe & 6) && (wi = Ge() + 500, Pn()));
      }
      break;
    case 13:
      Yn(function() {
        var c = an(e, 1);
        if (c !== null) {
          var f = ut();
          zt(c, e, 1, f);
        }
      }), hl(e, 1);
  }
};
As = function(e) {
  if (e.tag === 13) {
    var t = an(e, 134217728);
    if (t !== null) {
      var i = ut();
      zt(t, e, 134217728, i);
    }
    hl(e, 134217728);
  }
};
Bu = function(e) {
  if (e.tag === 13) {
    var t = Sn(e), i = an(e, t);
    if (i !== null) {
      var c = ut();
      zt(i, e, t, c);
    }
    hl(e, t);
  }
};
zu = function() {
  return je;
};
Nu = function(e, t) {
  var i = je;
  try {
    return je = e, t();
  } finally {
    je = i;
  }
};
Fa = function(e, t, i) {
  switch (t) {
    case "input":
      if (ka(e, i), t = i.name, i.type === "radio" && t != null) {
        for (i = e; i.parentNode; ) i = i.parentNode;
        for (i = i.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < i.length; t++) {
          var c = i[t];
          if (c !== e && c.form === e.form) {
            var f = jo(c);
            if (!f) throw Error(ce(90));
            vu(c), ka(c, f);
          }
        }
      }
      break;
    case "textarea":
      xu(e, i);
      break;
    case "select":
      t = i.value, t != null && li(e, !!i.multiple, t, !1);
  }
};
Eu = al;
ku = Yn;
var pg = { usingClientEntryPoint: !1, Events: [fr, ti, jo, bu, Tu, al] }, Ai = { findFiberByHostInstance: Ln, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, dg = { bundleType: Ai.bundleType, version: Ai.version, rendererPackageName: Ai.rendererPackageName, rendererConfig: Ai.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ln.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Mu(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Ai.findFiberByHostInstance || ug, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ar = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ar.isDisabled && Ar.supportsFiber) try {
    ko = Ar.inject(dg), $t = Ar;
  } catch {
  }
}
bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = pg;
bt.createPortal = function(e, t) {
  var i = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!dl(t)) throw Error(ce(200));
  return cg(e, t, null, i);
};
bt.createRoot = function(e, t) {
  if (!dl(e)) throw Error(ce(299));
  var i = !1, c = "", f = lp;
  return t != null && (t.unstable_strictMode === !0 && (i = !0), t.identifierPrefix !== void 0 && (c = t.identifierPrefix), t.onRecoverableError !== void 0 && (f = t.onRecoverableError)), t = ul(e, 1, !1, null, null, i, !1, c, f), e[on] = t.current, tr(e.nodeType === 8 ? e.parentNode : e), new pl(t);
};
bt.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(ce(188)) : (e = Object.keys(e).join(","), Error(ce(268, e)));
  return e = Mu(t), e = e === null ? null : e.stateNode, e;
};
bt.flushSync = function(e) {
  return Yn(e);
};
bt.hydrate = function(e, t, i) {
  if (!No(t)) throw Error(ce(200));
  return Uo(null, e, t, !0, i);
};
bt.hydrateRoot = function(e, t, i) {
  if (!dl(e)) throw Error(ce(405));
  var c = i != null && i.hydratedSources || null, f = !1, m = "", w = lp;
  if (i != null && (i.unstable_strictMode === !0 && (f = !0), i.identifierPrefix !== void 0 && (m = i.identifierPrefix), i.onRecoverableError !== void 0 && (w = i.onRecoverableError)), t = sp(t, null, e, 1, i ?? null, f, !1, m, w), e[on] = t.current, tr(e), c) for (e = 0; e < c.length; e++) i = c[e], f = i._getVersion, f = f(i._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [i, f] : t.mutableSourceEagerHydrationData.push(
    i,
    f
  );
  return new zo(t);
};
bt.render = function(e, t, i) {
  if (!No(t)) throw Error(ce(200));
  return Uo(null, e, t, !1, i);
};
bt.unmountComponentAtNode = function(e) {
  if (!No(e)) throw Error(ce(40));
  return e._reactRootContainer ? (Yn(function() {
    Uo(null, null, e, !1, function() {
      e._reactRootContainer = null, e[on] = null;
    });
  }), !0) : !1;
};
bt.unstable_batchedUpdates = al;
bt.unstable_renderSubtreeIntoContainer = function(e, t, i, c) {
  if (!No(i)) throw Error(ce(200));
  if (e == null || e._reactInternals === void 0) throw Error(ce(38));
  return Uo(e, t, i, !1, c);
};
bt.version = "18.3.1-next-f1338f8080-20240426";
function cp() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(cp);
    } catch (e) {
      console.error(e);
    }
}
cp(), cu.exports = bt;
var fg = cu.exports;
const gg = /* @__PURE__ */ xs(fg);
function mg(e, t) {
  return t.forEach(function(i) {
    i && typeof i != "string" && !Array.isArray(i) && Object.keys(i).forEach(function(c) {
      if (c !== "default" && !(c in e)) {
        var f = Object.getOwnPropertyDescriptor(i, c);
        Object.defineProperty(e, c, f.get ? f : { enumerable: !0, get: function() {
          return i[c];
        } });
      }
    });
  }), Object.freeze(e);
}
var Pc = typeof global < "u" ? global : typeof self < "u" ? self : typeof window < "u" ? window : {}, Gt = [], Et = [], vg = typeof Uint8Array < "u" ? Uint8Array : Array, fl = !1;
function up() {
  fl = !0;
  for (var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", t = 0; t < 64; ++t) Gt[t] = e[t], Et[e.charCodeAt(t)] = t;
  Et[45] = 62, Et[95] = 63;
}
function yg(e, t, i) {
  for (var c, f, m = [], w = t; w < i; w += 3) c = (e[w] << 16) + (e[w + 1] << 8) + e[w + 2], m.push(Gt[(f = c) >> 18 & 63] + Gt[f >> 12 & 63] + Gt[f >> 6 & 63] + Gt[63 & f]);
  return m.join("");
}
function Mc(e) {
  var t;
  fl || up();
  for (var i = e.length, c = i % 3, f = "", m = [], w = 16383, S = 0, O = i - c; S < O; S += w) m.push(yg(e, S, S + w > O ? O : S + w));
  return c === 1 ? (t = e[i - 1], f += Gt[t >> 2], f += Gt[t << 4 & 63], f += "==") : c === 2 && (t = (e[i - 2] << 8) + e[i - 1], f += Gt[t >> 10], f += Gt[t >> 4 & 63], f += Gt[t << 2 & 63], f += "="), m.push(f), m.join("");
}
function Fr(e, t, i, c, f) {
  var m, w, S = 8 * f - c - 1, O = (1 << S) - 1, z = O >> 1, V = -7, K = i ? f - 1 : 0, Z = i ? -1 : 1, te = e[t + K];
  for (K += Z, m = te & (1 << -V) - 1, te >>= -V, V += S; V > 0; m = 256 * m + e[t + K], K += Z, V -= 8) ;
  for (w = m & (1 << -V) - 1, m >>= -V, V += c; V > 0; w = 256 * w + e[t + K], K += Z, V -= 8) ;
  if (m === 0) m = 1 - z;
  else {
    if (m === O) return w ? NaN : 1 / 0 * (te ? -1 : 1);
    w += Math.pow(2, c), m -= z;
  }
  return (te ? -1 : 1) * w * Math.pow(2, m - c);
}
function hp(e, t, i, c, f, m) {
  var w, S, O, z = 8 * m - f - 1, V = (1 << z) - 1, K = V >> 1, Z = f === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, te = c ? 0 : m - 1, ae = c ? 1 : -1, ue = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
  for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (S = isNaN(t) ? 1 : 0, w = V) : (w = Math.floor(Math.log(t) / Math.LN2), t * (O = Math.pow(2, -w)) < 1 && (w--, O *= 2), (t += w + K >= 1 ? Z / O : Z * Math.pow(2, 1 - K)) * O >= 2 && (w++, O /= 2), w + K >= V ? (S = 0, w = V) : w + K >= 1 ? (S = (t * O - 1) * Math.pow(2, f), w += K) : (S = t * Math.pow(2, K - 1) * Math.pow(2, f), w = 0)); f >= 8; e[i + te] = 255 & S, te += ae, S /= 256, f -= 8) ;
  for (w = w << f | S, z += f; z > 0; e[i + te] = 255 & w, te += ae, w /= 256, z -= 8) ;
  e[i + te - ae] |= 128 * ue;
}
var xg = {}.toString, pp = Array.isArray || function(e) {
  return xg.call(e) == "[object Array]";
};
function _o() {
  return ne.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
}
function tn(e, t) {
  if (_o() < t) throw new RangeError("Invalid typed array length");
  return ne.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = ne.prototype : (e === null && (e = new ne(t)), e.length = t), e;
}
function ne(e, t, i) {
  if (!(ne.TYPED_ARRAY_SUPPORT || this instanceof ne)) return new ne(e, t, i);
  if (typeof e == "number") {
    if (typeof t == "string") throw new Error("If encoding is specified then the first argument must be a string");
    return ds(this, e);
  }
  return dp(this, e, t, i);
}
function dp(e, t, i, c) {
  if (typeof t == "number") throw new TypeError('"value" argument must not be a number');
  return typeof ArrayBuffer < "u" && t instanceof ArrayBuffer ? function(f, m, w, S) {
    if (m.byteLength, w < 0 || m.byteLength < w) throw new RangeError("'offset' is out of bounds");
    if (m.byteLength < w + (S || 0)) throw new RangeError("'length' is out of bounds");
    return m = w === void 0 && S === void 0 ? new Uint8Array(m) : S === void 0 ? new Uint8Array(m, w) : new Uint8Array(m, w, S), ne.TYPED_ARRAY_SUPPORT ? (f = m).__proto__ = ne.prototype : f = va(f, m), f;
  }(e, t, i, c) : typeof t == "string" ? function(f, m, w) {
    if (typeof w == "string" && w !== "" || (w = "utf8"), !ne.isEncoding(w)) throw new TypeError('"encoding" must be a valid string encoding');
    var S = 0 | gp(m, w);
    f = tn(f, S);
    var O = f.write(m, w);
    return O !== S && (f = f.slice(0, O)), f;
  }(e, t, i) : function(f, m) {
    if (Vt(m)) {
      var w = 0 | gl(m.length);
      return (f = tn(f, w)).length === 0 || m.copy(f, 0, 0, w), f;
    }
    if (m) {
      if (typeof ArrayBuffer < "u" && m.buffer instanceof ArrayBuffer || "length" in m) return typeof m.length != "number" || (S = m.length) != S ? tn(f, 0) : va(f, m);
      if (m.type === "Buffer" && pp(m.data)) return va(f, m.data);
    }
    var S;
    throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
  }(e, t);
}
function fp(e) {
  if (typeof e != "number") throw new TypeError('"size" argument must be a number');
  if (e < 0) throw new RangeError('"size" argument must not be negative');
}
function ds(e, t) {
  if (fp(t), e = tn(e, t < 0 ? 0 : 0 | gl(t)), !ne.TYPED_ARRAY_SUPPORT) for (var i = 0; i < t; ++i) e[i] = 0;
  return e;
}
function va(e, t) {
  var i = t.length < 0 ? 0 : 0 | gl(t.length);
  e = tn(e, i);
  for (var c = 0; c < i; c += 1) e[c] = 255 & t[c];
  return e;
}
function gl(e) {
  if (e >= _o()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + _o().toString(16) + " bytes");
  return 0 | e;
}
function Vt(e) {
  return !(e == null || !e._isBuffer);
}
function gp(e, t) {
  if (Vt(e)) return e.length;
  if (typeof ArrayBuffer < "u" && typeof ArrayBuffer.isView == "function" && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
  typeof e != "string" && (e = "" + e);
  var i = e.length;
  if (i === 0) return 0;
  for (var c = !1; ; ) switch (t) {
    case "ascii":
    case "latin1":
    case "binary":
      return i;
    case "utf8":
    case "utf-8":
    case void 0:
      return Co(e).length;
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
      return 2 * i;
    case "hex":
      return i >>> 1;
    case "base64":
      return xp(e).length;
    default:
      if (c) return Co(e).length;
      t = ("" + t).toLowerCase(), c = !0;
  }
}
function wg(e, t, i) {
  var c = !1;
  if ((t === void 0 || t < 0) && (t = 0), t > this.length || ((i === void 0 || i > this.length) && (i = this.length), i <= 0) || (i >>>= 0) <= (t >>>= 0)) return "";
  for (e || (e = "utf8"); ; ) switch (e) {
    case "hex":
      return Pg(this, t, i);
    case "utf8":
    case "utf-8":
      return vp(this, t, i);
    case "ascii":
      return kg(this, t, i);
    case "latin1":
    case "binary":
      return Og(this, t, i);
    case "base64":
      return Eg(this, t, i);
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
      return Mg(this, t, i);
    default:
      if (c) throw new TypeError("Unknown encoding: " + e);
      e = (e + "").toLowerCase(), c = !0;
  }
}
function jn(e, t, i) {
  var c = e[t];
  e[t] = e[i], e[i] = c;
}
function jc(e, t, i, c, f) {
  if (e.length === 0) return -1;
  if (typeof i == "string" ? (c = i, i = 0) : i > 2147483647 ? i = 2147483647 : i < -2147483648 && (i = -2147483648), i = +i, isNaN(i) && (i = f ? 0 : e.length - 1), i < 0 && (i = e.length + i), i >= e.length) {
    if (f) return -1;
    i = e.length - 1;
  } else if (i < 0) {
    if (!f) return -1;
    i = 0;
  }
  if (typeof t == "string" && (t = ne.from(t, c)), Vt(t)) return t.length === 0 ? -1 : Dc(e, t, i, c, f);
  if (typeof t == "number") return t &= 255, ne.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf == "function" ? f ? Uint8Array.prototype.indexOf.call(e, t, i) : Uint8Array.prototype.lastIndexOf.call(e, t, i) : Dc(e, [t], i, c, f);
  throw new TypeError("val must be string, number or Buffer");
}
function Dc(e, t, i, c, f) {
  var m, w = 1, S = e.length, O = t.length;
  if (c !== void 0 && ((c = String(c).toLowerCase()) === "ucs2" || c === "ucs-2" || c === "utf16le" || c === "utf-16le")) {
    if (e.length < 2 || t.length < 2) return -1;
    w = 2, S /= 2, O /= 2, i /= 2;
  }
  function z(te, ae) {
    return w === 1 ? te[ae] : te.readUInt16BE(ae * w);
  }
  if (f) {
    var V = -1;
    for (m = i; m < S; m++) if (z(e, m) === z(t, V === -1 ? 0 : m - V)) {
      if (V === -1 && (V = m), m - V + 1 === O) return V * w;
    } else V !== -1 && (m -= m - V), V = -1;
  } else for (i + O > S && (i = S - O), m = i; m >= 0; m--) {
    for (var K = !0, Z = 0; Z < O; Z++) if (z(e, m + Z) !== z(t, Z)) {
      K = !1;
      break;
    }
    if (K) return m;
  }
  return -1;
}
function _g(e, t, i, c) {
  i = Number(i) || 0;
  var f = e.length - i;
  c ? (c = Number(c)) > f && (c = f) : c = f;
  var m = t.length;
  if (m % 2 != 0) throw new TypeError("Invalid hex string");
  c > m / 2 && (c = m / 2);
  for (var w = 0; w < c; ++w) {
    var S = parseInt(t.substr(2 * w, 2), 16);
    if (isNaN(S)) return w;
    e[i + w] = S;
  }
  return w;
}
function Cg(e, t, i, c) {
  return Ho(Co(t, e.length - i), e, i, c);
}
function mp(e, t, i, c) {
  return Ho(function(f) {
    for (var m = [], w = 0; w < f.length; ++w) m.push(255 & f.charCodeAt(w));
    return m;
  }(t), e, i, c);
}
function Sg(e, t, i, c) {
  return mp(e, t, i, c);
}
function bg(e, t, i, c) {
  return Ho(xp(t), e, i, c);
}
function Tg(e, t, i, c) {
  return Ho(function(f, m) {
    for (var w, S, O, z = [], V = 0; V < f.length && !((m -= 2) < 0); ++V) S = (w = f.charCodeAt(V)) >> 8, O = w % 256, z.push(O), z.push(S);
    return z;
  }(t, e.length - i), e, i, c);
}
function Eg(e, t, i) {
  return t === 0 && i === e.length ? Mc(e) : Mc(e.slice(t, i));
}
function vp(e, t, i) {
  i = Math.min(e.length, i);
  for (var c = [], f = t; f < i; ) {
    var m, w, S, O, z = e[f], V = null, K = z > 239 ? 4 : z > 223 ? 3 : z > 191 ? 2 : 1;
    if (f + K <= i) switch (K) {
      case 1:
        z < 128 && (V = z);
        break;
      case 2:
        (192 & (m = e[f + 1])) == 128 && (O = (31 & z) << 6 | 63 & m) > 127 && (V = O);
        break;
      case 3:
        m = e[f + 1], w = e[f + 2], (192 & m) == 128 && (192 & w) == 128 && (O = (15 & z) << 12 | (63 & m) << 6 | 63 & w) > 2047 && (O < 55296 || O > 57343) && (V = O);
        break;
      case 4:
        m = e[f + 1], w = e[f + 2], S = e[f + 3], (192 & m) == 128 && (192 & w) == 128 && (192 & S) == 128 && (O = (15 & z) << 18 | (63 & m) << 12 | (63 & w) << 6 | 63 & S) > 65535 && O < 1114112 && (V = O);
    }
    V === null ? (V = 65533, K = 1) : V > 65535 && (V -= 65536, c.push(V >>> 10 & 1023 | 55296), V = 56320 | 1023 & V), c.push(V), f += K;
  }
  return function(Z) {
    var te = Z.length;
    if (te <= Ac) return String.fromCharCode.apply(String, Z);
    for (var ae = "", ue = 0; ue < te; ) ae += String.fromCharCode.apply(String, Z.slice(ue, ue += Ac));
    return ae;
  }(c);
}
ne.TYPED_ARRAY_SUPPORT = Pc.TYPED_ARRAY_SUPPORT === void 0 || Pc.TYPED_ARRAY_SUPPORT, _o(), ne.poolSize = 8192, ne._augment = function(e) {
  return e.__proto__ = ne.prototype, e;
}, ne.from = function(e, t, i) {
  return dp(null, e, t, i);
}, ne.TYPED_ARRAY_SUPPORT && (ne.prototype.__proto__ = Uint8Array.prototype, ne.__proto__ = Uint8Array, typeof Symbol < "u" && Symbol.species && ne[Symbol.species]), ne.alloc = function(e, t, i) {
  return function(c, f, m, w) {
    return fp(f), f <= 0 ? tn(c, f) : m !== void 0 ? typeof w == "string" ? tn(c, f).fill(m, w) : tn(c, f).fill(m) : tn(c, f);
  }(null, e, t, i);
}, ne.allocUnsafe = function(e) {
  return ds(null, e);
}, ne.allocUnsafeSlow = function(e) {
  return ds(null, e);
}, ne.isBuffer = function(e) {
  return e != null && (!!e._isBuffer || Rc(e) || function(t) {
    return typeof t.readFloatLE == "function" && typeof t.slice == "function" && Rc(t.slice(0, 0));
  }(e));
}, ne.compare = function(e, t) {
  if (!Vt(e) || !Vt(t)) throw new TypeError("Arguments must be Buffers");
  if (e === t) return 0;
  for (var i = e.length, c = t.length, f = 0, m = Math.min(i, c); f < m; ++f) if (e[f] !== t[f]) {
    i = e[f], c = t[f];
    break;
  }
  return i < c ? -1 : c < i ? 1 : 0;
}, ne.isEncoding = function(e) {
  switch (String(e).toLowerCase()) {
    case "hex":
    case "utf8":
    case "utf-8":
    case "ascii":
    case "latin1":
    case "binary":
    case "base64":
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
      return !0;
    default:
      return !1;
  }
}, ne.concat = function(e, t) {
  if (!pp(e)) throw new TypeError('"list" argument must be an Array of Buffers');
  if (e.length === 0) return ne.alloc(0);
  var i;
  if (t === void 0) for (t = 0, i = 0; i < e.length; ++i) t += e[i].length;
  var c = ne.allocUnsafe(t), f = 0;
  for (i = 0; i < e.length; ++i) {
    var m = e[i];
    if (!Vt(m)) throw new TypeError('"list" argument must be an Array of Buffers');
    m.copy(c, f), f += m.length;
  }
  return c;
}, ne.byteLength = gp, ne.prototype._isBuffer = !0, ne.prototype.swap16 = function() {
  var e = this.length;
  if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
  for (var t = 0; t < e; t += 2) jn(this, t, t + 1);
  return this;
}, ne.prototype.swap32 = function() {
  var e = this.length;
  if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
  for (var t = 0; t < e; t += 4) jn(this, t, t + 3), jn(this, t + 1, t + 2);
  return this;
}, ne.prototype.swap64 = function() {
  var e = this.length;
  if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
  for (var t = 0; t < e; t += 8) jn(this, t, t + 7), jn(this, t + 1, t + 6), jn(this, t + 2, t + 5), jn(this, t + 3, t + 4);
  return this;
}, ne.prototype.toString = function() {
  var e = 0 | this.length;
  return e === 0 ? "" : arguments.length === 0 ? vp(this, 0, e) : wg.apply(this, arguments);
}, ne.prototype.equals = function(e) {
  if (!Vt(e)) throw new TypeError("Argument must be a Buffer");
  return this === e || ne.compare(this, e) === 0;
}, ne.prototype.inspect = function() {
  var e = "";
  return this.length > 0 && (e = this.toString("hex", 0, 50).match(/.{2}/g).join(" "), this.length > 50 && (e += " ... ")), "<Buffer " + e + ">";
}, ne.prototype.compare = function(e, t, i, c, f) {
  if (!Vt(e)) throw new TypeError("Argument must be a Buffer");
  if (t === void 0 && (t = 0), i === void 0 && (i = e ? e.length : 0), c === void 0 && (c = 0), f === void 0 && (f = this.length), t < 0 || i > e.length || c < 0 || f > this.length) throw new RangeError("out of range index");
  if (c >= f && t >= i) return 0;
  if (c >= f) return -1;
  if (t >= i) return 1;
  if (this === e) return 0;
  for (var m = (f >>>= 0) - (c >>>= 0), w = (i >>>= 0) - (t >>>= 0), S = Math.min(m, w), O = this.slice(c, f), z = e.slice(t, i), V = 0; V < S; ++V) if (O[V] !== z[V]) {
    m = O[V], w = z[V];
    break;
  }
  return m < w ? -1 : w < m ? 1 : 0;
}, ne.prototype.includes = function(e, t, i) {
  return this.indexOf(e, t, i) !== -1;
}, ne.prototype.indexOf = function(e, t, i) {
  return jc(this, e, t, i, !0);
}, ne.prototype.lastIndexOf = function(e, t, i) {
  return jc(this, e, t, i, !1);
}, ne.prototype.write = function(e, t, i, c) {
  if (t === void 0) c = "utf8", i = this.length, t = 0;
  else if (i === void 0 && typeof t == "string") c = t, i = this.length, t = 0;
  else {
    if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
    t |= 0, isFinite(i) ? (i |= 0, c === void 0 && (c = "utf8")) : (c = i, i = void 0);
  }
  var f = this.length - t;
  if ((i === void 0 || i > f) && (i = f), e.length > 0 && (i < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
  c || (c = "utf8");
  for (var m = !1; ; ) switch (c) {
    case "hex":
      return _g(this, e, t, i);
    case "utf8":
    case "utf-8":
      return Cg(this, e, t, i);
    case "ascii":
      return mp(this, e, t, i);
    case "latin1":
    case "binary":
      return Sg(this, e, t, i);
    case "base64":
      return bg(this, e, t, i);
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
      return Tg(this, e, t, i);
    default:
      if (m) throw new TypeError("Unknown encoding: " + c);
      c = ("" + c).toLowerCase(), m = !0;
  }
}, ne.prototype.toJSON = function() {
  return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
};
var Ac = 4096;
function kg(e, t, i) {
  var c = "";
  i = Math.min(e.length, i);
  for (var f = t; f < i; ++f) c += String.fromCharCode(127 & e[f]);
  return c;
}
function Og(e, t, i) {
  var c = "";
  i = Math.min(e.length, i);
  for (var f = t; f < i; ++f) c += String.fromCharCode(e[f]);
  return c;
}
function Pg(e, t, i) {
  var c = e.length;
  (!t || t < 0) && (t = 0), (!i || i < 0 || i > c) && (i = c);
  for (var f = "", m = t; m < i; ++m) f += Dg(e[m]);
  return f;
}
function Mg(e, t, i) {
  for (var c = e.slice(t, i), f = "", m = 0; m < c.length; m += 2) f += String.fromCharCode(c[m] + 256 * c[m + 1]);
  return f;
}
function Ke(e, t, i) {
  if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
  if (e + t > i) throw new RangeError("Trying to access beyond buffer length");
}
function ft(e, t, i, c, f, m) {
  if (!Vt(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
  if (t > f || t < m) throw new RangeError('"value" argument is out of bounds');
  if (i + c > e.length) throw new RangeError("Index out of range");
}
function Lr(e, t, i, c) {
  t < 0 && (t = 65535 + t + 1);
  for (var f = 0, m = Math.min(e.length - i, 2); f < m; ++f) e[i + f] = (t & 255 << 8 * (c ? f : 1 - f)) >>> 8 * (c ? f : 1 - f);
}
function Rr(e, t, i, c) {
  t < 0 && (t = 4294967295 + t + 1);
  for (var f = 0, m = Math.min(e.length - i, 4); f < m; ++f) e[i + f] = t >>> 8 * (c ? f : 3 - f) & 255;
}
function yp(e, t, i, c, f, m) {
  if (i + c > e.length) throw new RangeError("Index out of range");
  if (i < 0) throw new RangeError("Index out of range");
}
function Fc(e, t, i, c, f) {
  return f || yp(e, 0, i, 4), hp(e, t, i, c, 23, 4), i + 4;
}
function Lc(e, t, i, c, f) {
  return f || yp(e, 0, i, 8), hp(e, t, i, c, 52, 8), i + 8;
}
ne.prototype.slice = function(e, t) {
  var i, c = this.length;
  if ((e = ~~e) < 0 ? (e += c) < 0 && (e = 0) : e > c && (e = c), (t = t === void 0 ? c : ~~t) < 0 ? (t += c) < 0 && (t = 0) : t > c && (t = c), t < e && (t = e), ne.TYPED_ARRAY_SUPPORT) (i = this.subarray(e, t)).__proto__ = ne.prototype;
  else {
    var f = t - e;
    i = new ne(f, void 0);
    for (var m = 0; m < f; ++m) i[m] = this[m + e];
  }
  return i;
}, ne.prototype.readUIntLE = function(e, t, i) {
  e |= 0, t |= 0, i || Ke(e, t, this.length);
  for (var c = this[e], f = 1, m = 0; ++m < t && (f *= 256); ) c += this[e + m] * f;
  return c;
}, ne.prototype.readUIntBE = function(e, t, i) {
  e |= 0, t |= 0, i || Ke(e, t, this.length);
  for (var c = this[e + --t], f = 1; t > 0 && (f *= 256); ) c += this[e + --t] * f;
  return c;
}, ne.prototype.readUInt8 = function(e, t) {
  return t || Ke(e, 1, this.length), this[e];
}, ne.prototype.readUInt16LE = function(e, t) {
  return t || Ke(e, 2, this.length), this[e] | this[e + 1] << 8;
}, ne.prototype.readUInt16BE = function(e, t) {
  return t || Ke(e, 2, this.length), this[e] << 8 | this[e + 1];
}, ne.prototype.readUInt32LE = function(e, t) {
  return t || Ke(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3];
}, ne.prototype.readUInt32BE = function(e, t) {
  return t || Ke(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
}, ne.prototype.readIntLE = function(e, t, i) {
  e |= 0, t |= 0, i || Ke(e, t, this.length);
  for (var c = this[e], f = 1, m = 0; ++m < t && (f *= 256); ) c += this[e + m] * f;
  return c >= (f *= 128) && (c -= Math.pow(2, 8 * t)), c;
}, ne.prototype.readIntBE = function(e, t, i) {
  e |= 0, t |= 0, i || Ke(e, t, this.length);
  for (var c = t, f = 1, m = this[e + --c]; c > 0 && (f *= 256); ) m += this[e + --c] * f;
  return m >= (f *= 128) && (m -= Math.pow(2, 8 * t)), m;
}, ne.prototype.readInt8 = function(e, t) {
  return t || Ke(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e];
}, ne.prototype.readInt16LE = function(e, t) {
  t || Ke(e, 2, this.length);
  var i = this[e] | this[e + 1] << 8;
  return 32768 & i ? 4294901760 | i : i;
}, ne.prototype.readInt16BE = function(e, t) {
  t || Ke(e, 2, this.length);
  var i = this[e + 1] | this[e] << 8;
  return 32768 & i ? 4294901760 | i : i;
}, ne.prototype.readInt32LE = function(e, t) {
  return t || Ke(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
}, ne.prototype.readInt32BE = function(e, t) {
  return t || Ke(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
}, ne.prototype.readFloatLE = function(e, t) {
  return t || Ke(e, 4, this.length), Fr(this, e, !0, 23, 4);
}, ne.prototype.readFloatBE = function(e, t) {
  return t || Ke(e, 4, this.length), Fr(this, e, !1, 23, 4);
}, ne.prototype.readDoubleLE = function(e, t) {
  return t || Ke(e, 8, this.length), Fr(this, e, !0, 52, 8);
}, ne.prototype.readDoubleBE = function(e, t) {
  return t || Ke(e, 8, this.length), Fr(this, e, !1, 52, 8);
}, ne.prototype.writeUIntLE = function(e, t, i, c) {
  e = +e, t |= 0, i |= 0, c || ft(this, e, t, i, Math.pow(2, 8 * i) - 1, 0);
  var f = 1, m = 0;
  for (this[t] = 255 & e; ++m < i && (f *= 256); ) this[t + m] = e / f & 255;
  return t + i;
}, ne.prototype.writeUIntBE = function(e, t, i, c) {
  e = +e, t |= 0, i |= 0, c || ft(this, e, t, i, Math.pow(2, 8 * i) - 1, 0);
  var f = i - 1, m = 1;
  for (this[t + f] = 255 & e; --f >= 0 && (m *= 256); ) this[t + f] = e / m & 255;
  return t + i;
}, ne.prototype.writeUInt8 = function(e, t, i) {
  return e = +e, t |= 0, i || ft(this, e, t, 1, 255, 0), ne.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1;
}, ne.prototype.writeUInt16LE = function(e, t, i) {
  return e = +e, t |= 0, i || ft(this, e, t, 2, 65535, 0), ne.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : Lr(this, e, t, !0), t + 2;
}, ne.prototype.writeUInt16BE = function(e, t, i) {
  return e = +e, t |= 0, i || ft(this, e, t, 2, 65535, 0), ne.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : Lr(this, e, t, !1), t + 2;
}, ne.prototype.writeUInt32LE = function(e, t, i) {
  return e = +e, t |= 0, i || ft(this, e, t, 4, 4294967295, 0), ne.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : Rr(this, e, t, !0), t + 4;
}, ne.prototype.writeUInt32BE = function(e, t, i) {
  return e = +e, t |= 0, i || ft(this, e, t, 4, 4294967295, 0), ne.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : Rr(this, e, t, !1), t + 4;
}, ne.prototype.writeIntLE = function(e, t, i, c) {
  if (e = +e, t |= 0, !c) {
    var f = Math.pow(2, 8 * i - 1);
    ft(this, e, t, i, f - 1, -f);
  }
  var m = 0, w = 1, S = 0;
  for (this[t] = 255 & e; ++m < i && (w *= 256); ) e < 0 && S === 0 && this[t + m - 1] !== 0 && (S = 1), this[t + m] = (e / w >> 0) - S & 255;
  return t + i;
}, ne.prototype.writeIntBE = function(e, t, i, c) {
  if (e = +e, t |= 0, !c) {
    var f = Math.pow(2, 8 * i - 1);
    ft(this, e, t, i, f - 1, -f);
  }
  var m = i - 1, w = 1, S = 0;
  for (this[t + m] = 255 & e; --m >= 0 && (w *= 256); ) e < 0 && S === 0 && this[t + m + 1] !== 0 && (S = 1), this[t + m] = (e / w >> 0) - S & 255;
  return t + i;
}, ne.prototype.writeInt8 = function(e, t, i) {
  return e = +e, t |= 0, i || ft(this, e, t, 1, 127, -128), ne.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1;
}, ne.prototype.writeInt16LE = function(e, t, i) {
  return e = +e, t |= 0, i || ft(this, e, t, 2, 32767, -32768), ne.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : Lr(this, e, t, !0), t + 2;
}, ne.prototype.writeInt16BE = function(e, t, i) {
  return e = +e, t |= 0, i || ft(this, e, t, 2, 32767, -32768), ne.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : Lr(this, e, t, !1), t + 2;
}, ne.prototype.writeInt32LE = function(e, t, i) {
  return e = +e, t |= 0, i || ft(this, e, t, 4, 2147483647, -2147483648), ne.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : Rr(this, e, t, !0), t + 4;
}, ne.prototype.writeInt32BE = function(e, t, i) {
  return e = +e, t |= 0, i || ft(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), ne.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : Rr(this, e, t, !1), t + 4;
}, ne.prototype.writeFloatLE = function(e, t, i) {
  return Fc(this, e, t, !0, i);
}, ne.prototype.writeFloatBE = function(e, t, i) {
  return Fc(this, e, t, !1, i);
}, ne.prototype.writeDoubleLE = function(e, t, i) {
  return Lc(this, e, t, !0, i);
}, ne.prototype.writeDoubleBE = function(e, t, i) {
  return Lc(this, e, t, !1, i);
}, ne.prototype.copy = function(e, t, i, c) {
  if (i || (i = 0), c || c === 0 || (c = this.length), t >= e.length && (t = e.length), t || (t = 0), c > 0 && c < i && (c = i), c === i || e.length === 0 || this.length === 0) return 0;
  if (t < 0) throw new RangeError("targetStart out of bounds");
  if (i < 0 || i >= this.length) throw new RangeError("sourceStart out of bounds");
  if (c < 0) throw new RangeError("sourceEnd out of bounds");
  c > this.length && (c = this.length), e.length - t < c - i && (c = e.length - t + i);
  var f, m = c - i;
  if (this === e && i < t && t < c) for (f = m - 1; f >= 0; --f) e[f + t] = this[f + i];
  else if (m < 1e3 || !ne.TYPED_ARRAY_SUPPORT) for (f = 0; f < m; ++f) e[f + t] = this[f + i];
  else Uint8Array.prototype.set.call(e, this.subarray(i, i + m), t);
  return m;
}, ne.prototype.fill = function(e, t, i, c) {
  if (typeof e == "string") {
    if (typeof t == "string" ? (c = t, t = 0, i = this.length) : typeof i == "string" && (c = i, i = this.length), e.length === 1) {
      var f = e.charCodeAt(0);
      f < 256 && (e = f);
    }
    if (c !== void 0 && typeof c != "string") throw new TypeError("encoding must be a string");
    if (typeof c == "string" && !ne.isEncoding(c)) throw new TypeError("Unknown encoding: " + c);
  } else typeof e == "number" && (e &= 255);
  if (t < 0 || this.length < t || this.length < i) throw new RangeError("Out of range index");
  if (i <= t) return this;
  var m;
  if (t >>>= 0, i = i === void 0 ? this.length : i >>> 0, e || (e = 0), typeof e == "number") for (m = t; m < i; ++m) this[m] = e;
  else {
    var w = Vt(e) ? e : Co(new ne(e, c).toString()), S = w.length;
    for (m = 0; m < i - t; ++m) this[m + t] = w[m % S];
  }
  return this;
};
var jg = /[^+\/0-9A-Za-z-_]/g;
function Dg(e) {
  return e < 16 ? "0" + e.toString(16) : e.toString(16);
}
function Co(e, t) {
  var i;
  t = t || 1 / 0;
  for (var c = e.length, f = null, m = [], w = 0; w < c; ++w) {
    if ((i = e.charCodeAt(w)) > 55295 && i < 57344) {
      if (!f) {
        if (i > 56319) {
          (t -= 3) > -1 && m.push(239, 191, 189);
          continue;
        }
        if (w + 1 === c) {
          (t -= 3) > -1 && m.push(239, 191, 189);
          continue;
        }
        f = i;
        continue;
      }
      if (i < 56320) {
        (t -= 3) > -1 && m.push(239, 191, 189), f = i;
        continue;
      }
      i = 65536 + (f - 55296 << 10 | i - 56320);
    } else f && (t -= 3) > -1 && m.push(239, 191, 189);
    if (f = null, i < 128) {
      if ((t -= 1) < 0) break;
      m.push(i);
    } else if (i < 2048) {
      if ((t -= 2) < 0) break;
      m.push(i >> 6 | 192, 63 & i | 128);
    } else if (i < 65536) {
      if ((t -= 3) < 0) break;
      m.push(i >> 12 | 224, i >> 6 & 63 | 128, 63 & i | 128);
    } else {
      if (!(i < 1114112)) throw new Error("Invalid code point");
      if ((t -= 4) < 0) break;
      m.push(i >> 18 | 240, i >> 12 & 63 | 128, i >> 6 & 63 | 128, 63 & i | 128);
    }
  }
  return m;
}
function xp(e) {
  return function(t) {
    var i, c, f, m, w, S;
    fl || up();
    var O = t.length;
    if (O % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
    w = t[O - 2] === "=" ? 2 : t[O - 1] === "=" ? 1 : 0, S = new vg(3 * O / 4 - w), f = w > 0 ? O - 4 : O;
    var z = 0;
    for (i = 0, c = 0; i < f; i += 4, c += 3) m = Et[t.charCodeAt(i)] << 18 | Et[t.charCodeAt(i + 1)] << 12 | Et[t.charCodeAt(i + 2)] << 6 | Et[t.charCodeAt(i + 3)], S[z++] = m >> 16 & 255, S[z++] = m >> 8 & 255, S[z++] = 255 & m;
    return w === 2 ? (m = Et[t.charCodeAt(i)] << 2 | Et[t.charCodeAt(i + 1)] >> 4, S[z++] = 255 & m) : w === 1 && (m = Et[t.charCodeAt(i)] << 10 | Et[t.charCodeAt(i + 1)] << 4 | Et[t.charCodeAt(i + 2)] >> 2, S[z++] = m >> 8 & 255, S[z++] = 255 & m), S;
  }(function(t) {
    if ((t = function(i) {
      return i.trim ? i.trim() : i.replace(/^\s+|\s+$/g, "");
    }(t).replace(jg, "")).length < 2) return "";
    for (; t.length % 4 != 0; ) t += "=";
    return t;
  }(e));
}
function Ho(e, t, i, c) {
  for (var f = 0; f < c && !(f + i >= t.length || f >= e.length); ++f) t[f + i] = e[f];
  return f;
}
function Rc(e) {
  return !!e.constructor && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e);
}
function Ag(e) {
  if (e.__esModule) return e;
  var t = Object.defineProperty({}, "__esModule", { value: !0 });
  return Object.keys(e).forEach(function(i) {
    var c = Object.getOwnPropertyDescriptor(e, i);
    Object.defineProperty(t, i, c.get ? c : { enumerable: !0, get: function() {
      return e[i];
    } });
  }), t;
}
var wp = {}, Ic = {}, ya = Ag(mg({ __proto__: null, default: Ic }, [Ic]));
(function(e) {
  /*! Fabric.js Copyright 2008-2015, Printio (Juriy Zaytsev, Maxim Chernyak) */
  var t, i, c, f, m, w, S, O, z, V, K, Z, te, ae, ue, Te, G, N, R, J, de, ge, he, v = v || { version: "4.6.0" };
  if (e.fabric = v, typeof document < "u" && typeof window < "u") document instanceof (typeof HTMLDocument < "u" ? HTMLDocument : Document) ? v.document = document : v.document = document.implementation.createHTMLDocument(""), v.window = window;
  else {
    var ke = new ya.JSDOM(decodeURIComponent("%3C!DOCTYPE%20html%3E%3Chtml%3E%3Chead%3E%3C%2Fhead%3E%3Cbody%3E%3C%2Fbody%3E%3C%2Fhtml%3E"), { features: { FetchExternalResources: ["img"] }, resources: "usable" }).window;
    v.document = ke.document, v.jsdomImplForWrapper = ya.implForWrapper, v.nodeCanvas = ya.Canvas, v.window = ke, DOMParser = v.window.DOMParser;
  }
  if (v.isTouchSupported = "ontouchstart" in v.window || "ontouchstart" in v.document || v.window && v.window.navigator && v.window.navigator.maxTouchPoints > 0, v.isLikelyNode = ne !== void 0 && typeof window > "u", v.SHARED_ATTRIBUTES = ["display", "transform", "fill", "fill-opacity", "fill-rule", "opacity", "stroke", "stroke-dasharray", "stroke-linecap", "stroke-dashoffset", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "id", "paint-order", "vector-effect", "instantiated_by_use", "clip-path"], v.DPI = 96, v.reNum = "(?:[-+]?(?:\\d+|\\d*\\.\\d+)(?:[eE][-+]?\\d+)?)", v.commaWsp = "(?:\\s+,?\\s*|,\\s*)", v.rePathCommand = /([-+]?((\d+\.\d+)|((\d+)|(\.\d+)))(?:[eE][-+]?\d+)?)/gi, v.reNonWord = /[ \n\.,;!\?\-]/, v.fontPaths = {}, v.iMatrix = [1, 0, 0, 1, 0, 0], v.svgNS = "http://www.w3.org/2000/svg", v.perfLimitSizeTotal = 2097152, v.maxCacheSideLimit = 4096, v.minCacheSideLimit = 256, v.charWidthsCache = {}, v.textureSize = 2048, v.disableStyleCopyPaste = !1, v.enableGLFiltering = !0, v.devicePixelRatio = v.window.devicePixelRatio || v.window.webkitDevicePixelRatio || v.window.mozDevicePixelRatio || 1, v.browserShadowBlurConstant = 1, v.arcToSegmentsCache = {}, v.boundsOfCurveCache = {}, v.cachesBoundsOfCurve = !0, v.forceGLPutImageData = !1, v.initFilterBackend = function() {
    return v.enableGLFiltering && v.isWebglSupported && v.isWebglSupported(v.textureSize) ? (console.log("max texture size: " + v.maxTextureSize), new v.WebglFilterBackend({ tileSize: v.textureSize })) : v.Canvas2dFilterBackend ? new v.Canvas2dFilterBackend() : void 0;
  }, typeof document < "u" && typeof window < "u" && (window.fabric = v), F === void 0) var F = {};
  if (function(s) {
    s.modifyEventListener = !1, s.modifySelectors = !1, s.configure = function(_) {
      isFinite(_.modifyEventListener) && (s.modifyEventListener = _.modifyEventListener), isFinite(_.modifySelectors) && (s.modifySelectors = _.modifySelectors), C === !1 && s.modifyEventListener && b(), M === !1 && s.modifySelectors && P();
    }, s.add = function(_, k, L, H) {
      return l(_, k, L, H, "add");
    }, s.remove = function(_, k, L, H) {
      return l(_, k, L, H, "remove");
    }, s.returnFalse = function(_) {
      return !1;
    }, s.stop = function(_) {
      _ && (_.stopPropagation && _.stopPropagation(), _.cancelBubble = !0, _.cancelBubbleCount = 0);
    }, s.prevent = function(_) {
      _ && (_.preventDefault ? _.preventDefault() : _.preventManipulation ? _.preventManipulation() : _.returnValue = !1);
    }, s.cancel = function(_) {
      s.stop(_), s.prevent(_);
    }, s.blur = function() {
      var _ = document.activeElement;
      if (_) {
        var k = document.activeElement.nodeName;
        k !== "INPUT" && k !== "TEXTAREA" && _.contentEditable !== "true" || _.blur && _.blur();
      }
    }, s.getEventSupport = function(_, k) {
      if (typeof _ == "string" && (k = _, _ = window), (k = "on" + k) in _) return !0;
      if (_.setAttribute || (_ = document.createElement("div")), _.setAttribute && _.removeAttribute) {
        _.setAttribute(k, "");
        var L = typeof _[k] == "function";
        return _[k] !== void 0 && (_[k] = null), _.removeAttribute(k), L;
      }
    };
    var o = function(_) {
      if (!_ || typeof _ != "object") return _;
      var k = new _.constructor();
      for (var L in _) _[L] && typeof _[L] == "object" ? k[L] = o(_[L]) : k[L] = _[L];
      return k;
    }, l = function(_, k, L, H, W, A) {
      if (H = H || {}, String(_) === "[object Object]") {
        var T = _;
        if (_ = T.target, delete T.target, !T.type || !T.listener) {
          for (var D in T) {
            var X = T[D];
            typeof X != "function" && (H[D] = X);
          }
          var $ = {};
          for (var B in T) {
            D = B.split(",");
            var j = T[B], Y = {};
            for (var I in H) Y[I] = H[I];
            if (typeof j == "function") L = j;
            else {
              if (typeof j.listener != "function") continue;
              L = j.listener;
              for (var I in j) typeof j[I] != "function" && (Y[I] = j[I]);
            }
            for (var U = 0; U < D.length; U++) $[B] = F.add(_, D[U], L, Y, W);
          }
          return $;
        }
        for (var B in k = T.type, delete T.type, L = T.listener, delete T.listener, T) H[B] = T[B];
      }
      if (_ && k && L) {
        if (typeof _ == "string" && k === "ready") {
          if (!window.eventjs_stallOnReady) {
            var Q = (/* @__PURE__ */ new Date()).getTime(), ie = H.timeout, ee = H.interval || 1e3 / 60, le = window.setInterval(function() {
              (/* @__PURE__ */ new Date()).getTime() - Q > ie && window.clearInterval(le), document.querySelector(_) && (window.clearInterval(le), setTimeout(L, 1));
            }, ee);
            return;
          }
          k = "load", _ = window;
        }
        if (typeof _ == "string") {
          if ((_ = document.querySelectorAll(_)).length === 0) return n("Missing target on listener!", arguments);
          _.length === 1 && (_ = _[0]);
        }
        var re, se = {};
        if (_.length > 0 && _ !== window) {
          for (var oe = 0, fe = _.length; oe < fe; oe++) (re = l(_[oe], k, L, o(H), W)) && (se[oe] = re);
          return p(se);
        }
        if (typeof k == "string" && ((k = k.toLowerCase()).indexOf(" ") !== -1 ? k = k.split(" ") : k.indexOf(",") !== -1 && (k = k.split(","))), typeof k != "string") {
          if (typeof k.length == "number") for (var pe = 0, _e = k.length; pe < _e; pe++) (re = l(_, k[pe], L, o(H), W)) && (se[k[pe]] = re);
          else for (var B in k) (re = typeof k[B] == "function" ? l(_, B, k[B], o(H), W) : l(_, B, k[B].listener, o(k[B]), W)) && (se[B] = re);
          return p(se);
        }
        if (k.indexOf("on") === 0 && (k = k.substr(2)), typeof _ != "object") return n("Target is not defined!", arguments);
        if (typeof L != "function") return n("Listener is not a function!", arguments);
        var we = H.useCapture || !1, Se = g(_) + "." + g(L) + "." + (we ? 1 : 0);
        if (s.Gesture && s.Gesture._gestureHandlers[k]) {
          if (Se = k + Se, W === "remove") {
            if (!u[Se]) return;
            u[Se].remove(), delete u[Se];
          } else if (W === "add") {
            if (u[Se]) return u[Se].add(), u[Se];
            if (H.useCall && !s.modifyEventListener) {
              var Xe = L;
              L = function(et, dt) {
                for (var lt in dt) et[lt] = dt[lt];
                return Xe.call(_, et);
              };
            }
            H.gesture = k, H.target = _, H.listener = L, H.fromOverwrite = A, u[Se] = s.proxy[k](H);
          }
          return u[Se];
        }
        var De, Pe = h(k);
        for (U = 0; U < Pe.length; U++) if (De = (k = Pe[U]) + "." + Se, W === "remove") {
          if (!u[De]) continue;
          _[x](k, L, we), delete u[De];
        } else if (W === "add") {
          if (u[De]) return u[De];
          _[y](k, L, we), u[De] = { id: De, type: k, target: _, listener: L, remove: function() {
            for (var et = 0; et < Pe.length; et++) s.remove(_, Pe[et], L, H);
          } };
        }
        return u[De];
      }
    }, p = function(_) {
      return { remove: function() {
        for (var k in _) _[k].remove();
      }, add: function() {
        for (var k in _) _[k].add();
      } };
    }, n = function(_, k) {
      typeof console < "u" && console.error !== void 0 && console.error(_, k);
    }, r = { msPointer: ["MSPointerDown", "MSPointerMove", "MSPointerUp"], touch: ["touchstart", "touchmove", "touchend"], mouse: ["mousedown", "mousemove", "mouseup"] }, a = { MSPointerDown: 0, MSPointerMove: 1, MSPointerUp: 2, touchstart: 0, touchmove: 1, touchend: 2, mousedown: 0, mousemove: 1, mouseup: 2 };
    s.supports = {}, window.navigator.msPointerEnabled && (s.supports.msPointer = !0), s.getEventSupport("touchstart") && (s.supports.touch = !0), s.getEventSupport("mousedown") && (s.supports.mouse = !0);
    var h = function(_) {
      var k = document.addEventListener ? "" : "on", L = a[_];
      if (isFinite(L)) {
        var H = [];
        for (var W in s.supports) H.push(k + r[W][L]);
        return H;
      }
      return [k + _];
    }, u = {}, d = 0, g = function(_) {
      return _ === window ? "#window" : _ === document ? "#document" : (_.uniqueID || (_.uniqueID = "e" + d++), _.uniqueID);
    }, y = document.addEventListener ? "addEventListener" : "attachEvent", x = document.removeEventListener ? "removeEventListener" : "detachEvent";
    s.createPointerEvent = function(_, k, L) {
      var H = k.gesture, W = k.target, A = _.changedTouches || s.proxy.getCoords(_);
      if (A.length) {
        var T = A[0];
        k.pointers = L ? [] : A, k.pageX = T.pageX, k.pageY = T.pageY, k.x = k.pageX, k.y = k.pageY;
      }
      var D = document.createEvent("Event");
      for (var X in D.initEvent(H, !0, !0), D.originalEvent = _, k) X !== "target" && (D[X] = k[X]);
      var $ = D.type;
      s.Gesture && s.Gesture._gestureHandlers[$] && k.oldListener.call(W, D, k, !1);
    };
    var C = !1, b = function() {
      if (window.HTMLElement) {
        var _ = function(k) {
          var L = function(H) {
            var W = H + "EventListener", A = k[W];
            k[W] = function(T, D, X) {
              if (s.Gesture && s.Gesture._gestureHandlers[T]) {
                var $ = X;
                typeof X == "object" ? $.useCall = !0 : $ = { useCall: !0, useCapture: X }, l(this, T, D, $, H, !0);
              } else for (var B = h(T), j = 0; j < B.length; j++) A.call(this, B[j], D, X);
            };
          };
          L("add"), L("remove");
        };
        navigator.userAgent.match(/Firefox/) ? (_(HTMLDivElement.prototype), _(HTMLCanvasElement.prototype)) : _(HTMLElement.prototype), _(document), _(window);
      }
    }, M = !1, P = function() {
      var _ = NodeList.prototype;
      _.removeEventListener = function(k, L, H) {
        for (var W = 0, A = this.length; W < A; W++) this[W].removeEventListener(k, L, H);
      }, _.addEventListener = function(k, L, H) {
        for (var W = 0, A = this.length; W < A; W++) this[W].addEventListener(k, L, H);
      };
    };
  }(F), F === void 0 && (F = {}), F.proxy === void 0 && (F.proxy = {}), F.proxy = function(s) {
    s.pointerSetup = function(a, h) {
      a.target = a.target || window, a.doc = a.target.ownerDocument || a.target, a.minFingers = a.minFingers || a.fingers || 1, a.maxFingers = a.maxFingers || a.fingers || 1 / 0, a.position = a.position || "relative", delete a.fingers, (h = h || {}).enabled = !0, h.gesture = a.gesture, h.target = a.target, h.env = a.env, F.modifyEventListener && a.fromOverwrite && (a.oldListener = a.listener, a.listener = F.createPointerEvent);
      var u = 0, d = h.gesture.indexOf("pointer") === 0 && F.modifyEventListener ? "pointer" : "mouse";
      return a.oldListener && (h.oldListener = a.oldListener), h.listener = a.listener, h.proxy = function(g) {
        h.defaultListener = a.listener, a.listener = g, g(a.event, h);
      }, h.add = function() {
        h.enabled !== !0 && (a.onPointerDown && F.add(a.target, d + "down", a.onPointerDown), a.onPointerMove && F.add(a.doc, d + "move", a.onPointerMove), a.onPointerUp && F.add(a.doc, d + "up", a.onPointerUp), h.enabled = !0);
      }, h.remove = function() {
        h.enabled !== !1 && (a.onPointerDown && F.remove(a.target, d + "down", a.onPointerDown), a.onPointerMove && F.remove(a.doc, d + "move", a.onPointerMove), a.onPointerUp && F.remove(a.doc, d + "up", a.onPointerUp), h.reset(), h.enabled = !1);
      }, h.pause = function(g) {
        !a.onPointerMove || g && !g.move || F.remove(a.doc, d + "move", a.onPointerMove), !a.onPointerUp || g && !g.up || F.remove(a.doc, d + "up", a.onPointerUp), u = a.fingers, a.fingers = 0;
      }, h.resume = function(g) {
        !a.onPointerMove || g && !g.move || F.add(a.doc, d + "move", a.onPointerMove), !a.onPointerUp || g && !g.up || F.add(a.doc, d + "up", a.onPointerUp), a.fingers = u;
      }, h.reset = function() {
        a.tracker = {}, a.fingers = 0;
      }, h;
    };
    var o = F.supports;
    F.isMouse = !!o.mouse, F.isMSPointer = !!o.touch, F.isTouch = !!o.msPointer, s.pointerStart = function(a, h, u) {
      var d = (a.type || "mousedown").toUpperCase();
      d.indexOf("MOUSE") === 0 ? (F.isMouse = !0, F.isTouch = !1, F.isMSPointer = !1) : d.indexOf("TOUCH") === 0 ? (F.isMouse = !1, F.isTouch = !0, F.isMSPointer = !1) : d.indexOf("MSPOINTER") === 0 && (F.isMouse = !1, F.isTouch = !1, F.isMSPointer = !0);
      var g = function(H, W) {
        var A = u.bbox, T = x[W] = {};
        switch (u.position) {
          case "absolute":
            T.offsetX = 0, T.offsetY = 0;
            break;
          case "differenceFromLast":
          case "difference":
            T.offsetX = H.pageX, T.offsetY = H.pageY;
            break;
          case "move":
            T.offsetX = H.pageX - A.x1, T.offsetY = H.pageY - A.y1;
            break;
          default:
            T.offsetX = A.x1 - A.scrollLeft, T.offsetY = A.y1 - A.scrollTop;
        }
        var D = H.pageX - T.offsetX, X = H.pageY - T.offsetY;
        T.rotation = 0, T.scale = 1, T.startTime = T.moveTime = (/* @__PURE__ */ new Date()).getTime(), T.move = { x: D, y: X }, T.start = { x: D, y: X }, u.fingers++;
      };
      u.event = a, h.defaultListener && (u.listener = h.defaultListener, delete h.defaultListener);
      for (var y = !u.fingers, x = u.tracker, C = a.changedTouches || s.getCoords(a), b = C.length, M = 0; M < b; M++) {
        var P = C[M], _ = P.identifier || 1 / 0;
        if (u.fingers) {
          if (u.fingers >= u.maxFingers) {
            var k = [];
            for (var _ in u.tracker) k.push(_);
            return h.identifier = k.join(","), y;
          }
          for (var L in x) if (x[L].up) {
            delete x[L], g(P, _), u.cancel = !0;
            break;
          }
          if (x[_]) continue;
          g(P, _);
        } else x = u.tracker = {}, h.bbox = u.bbox = s.getBoundingBox(u.target), u.fingers = 0, u.cancel = !1, g(P, _);
      }
      k = [];
      for (var _ in u.tracker) k.push(_);
      return h.identifier = k.join(","), y;
    }, s.pointerEnd = function(a, h, u, d) {
      for (var g = a.touches || [], y = g.length, x = {}, C = 0; C < y; C++)
        x[(b = g[C].identifier) || 1 / 0] = !0;
      for (var b in u.tracker) {
        var M = u.tracker[b];
        x[b] || M.up || (d && d({ pageX: M.pageX, pageY: M.pageY, changedTouches: [{ pageX: M.pageX, pageY: M.pageY, identifier: b === "Infinity" ? 1 / 0 : b }] }, "up"), M.up = !0, u.fingers--);
      }
      if (u.fingers !== 0) return !1;
      var P = [];
      for (var b in u.gestureFingers = 0, u.tracker) u.gestureFingers++, P.push(b);
      return h.identifier = P.join(","), !0;
    }, s.getCoords = function(a) {
      return a.pageX !== void 0 ? s.getCoords = function(h) {
        return Array({ type: "mouse", x: h.pageX, y: h.pageY, pageX: h.pageX, pageY: h.pageY, identifier: h.pointerId || 1 / 0 });
      } : s.getCoords = function(h) {
        var u = document.documentElement;
        return h = h || window.event, Array({ type: "mouse", x: h.clientX + u.scrollLeft, y: h.clientY + u.scrollTop, pageX: h.clientX + u.scrollLeft, pageY: h.clientY + u.scrollTop, identifier: 1 / 0 });
      }, s.getCoords(a);
    }, s.getCoord = function(a) {
      if ("ontouchstart" in window) {
        var h = 0, u = 0;
        s.getCoord = function(d) {
          var g = d.changedTouches;
          return g && g.length ? { x: h = g[0].pageX, y: u = g[0].pageY } : { x: h, y: u };
        };
      } else a.pageX !== void 0 && a.pageY !== void 0 ? s.getCoord = function(d) {
        return { x: d.pageX, y: d.pageY };
      } : s.getCoord = function(d) {
        var g = document.documentElement;
        return { x: (d = d || window.event).clientX + g.scrollLeft, y: d.clientY + g.scrollTop };
      };
      return s.getCoord(a);
    };
    var l, p, n, r = function(a, h) {
      var u = parseFloat(a.getPropertyValue(h), 10);
      return isFinite(u) ? u : 0;
    };
    return s.getBoundingBox = function(a) {
      a !== window && a !== document || (a = document.body);
      var h = {}, u = a.getBoundingClientRect();
      if (h.width = u.width, h.height = u.height, h.x1 = u.left, h.y1 = u.top, h.scaleX = u.width / a.offsetWidth || 1, h.scaleY = u.height / a.offsetHeight || 1, h.scrollLeft = 0, h.scrollTop = 0, (b = window.getComputedStyle(a)).getPropertyValue("box-sizing") !== "border-box") {
        var d = r(b, "border-left-width"), g = r(b, "border-right-width"), y = r(b, "border-bottom-width"), x = r(b, "border-top-width");
        h.border = [d, g, x, y], h.x1 += d, h.y1 += x, h.width -= g + d, h.height -= y + x;
      }
      h.x2 = h.x1 + h.width, h.y2 = h.y1 + h.height;
      for (var C = (M = b.getPropertyValue("position")) === "fixed" ? a : a.parentNode; C !== null && C !== document.body && C.scrollTop !== void 0; ) {
        var b, M;
        if ((M = (b = window.getComputedStyle(C)).getPropertyValue("position")) !== "absolute") {
          if (M === "fixed") {
            h.scrollTop -= C.parentNode.scrollTop, h.scrollLeft -= C.parentNode.scrollLeft;
            break;
          }
          h.scrollLeft += C.scrollLeft, h.scrollTop += C.scrollTop;
        }
        C = C.parentNode;
      }
      return h.scrollBodyLeft = window.pageXOffset !== void 0 ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft, h.scrollBodyTop = window.pageYOffset !== void 0 ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop, h.scrollLeft -= h.scrollBodyLeft, h.scrollTop -= h.scrollBodyTop, h;
    }, p = navigator.userAgent.toLowerCase(), n = p.indexOf("macintosh") !== -1, l = n && p.indexOf("khtml") !== -1 ? { 91: !0, 93: !0 } : n && p.indexOf("firefox") !== -1 ? { 224: !0 } : { 17: !0 }, (s.metaTrackerReset = function() {
      F.fnKey = s.fnKey = !1, F.metaKey = s.metaKey = !1, F.escKey = s.escKey = !1, F.ctrlKey = s.ctrlKey = !1, F.shiftKey = s.shiftKey = !1, F.altKey = s.altKey = !1;
    })(), s.metaTracker = function(a) {
      var h = a.type === "keydown";
      a.keyCode === 27 && (F.escKey = s.escKey = h), l[a.keyCode] && (F.metaKey = s.metaKey = h), F.ctrlKey = s.ctrlKey = a.ctrlKey, F.shiftKey = s.shiftKey = a.shiftKey, F.altKey = s.altKey = a.altKey;
    }, s;
  }(F.proxy), F === void 0 && (F = {}), F.MutationObserver = (t = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver, i = !t && function() {
    var s = document.createElement("p"), o = !1, l = function() {
      o = !0;
    };
    if (s.addEventListener) s.addEventListener("DOMAttrModified", l, !1);
    else {
      if (!s.attachEvent) return !1;
      s.attachEvent("onDOMAttrModified", l);
    }
    return s.setAttribute("id", "target"), o;
  }(), function(s, o) {
    t ? new t(function(l) {
      l.forEach(function(p) {
        o.call(p.target, p.attributeName);
      });
    }).observe(s, { subtree: !1, attributes: !0 }) : i ? F.add(s, "DOMAttrModified", function(l) {
      o.call(s, l.attrName);
    }) : "onpropertychange" in document.body && F.add(s, "propertychange", function(l) {
      o.call(s, window.event.propertyName);
    });
  }), F === void 0 && (F = {}), F.proxy === void 0 && (F.proxy = {}), F.proxy = ((c = F.proxy).click = function(s) {
    s.gesture = s.gesture || "click", s.maxFingers = s.maxFingers || s.fingers || 1, s.onPointerDown = function(l) {
      c.pointerStart(l, o, s) && F.add(s.target, "mouseup", s.onPointerUp);
    }, s.onPointerUp = function(l) {
      if (c.pointerEnd(l, o, s)) {
        F.remove(s.target, "mouseup", s.onPointerUp);
        var p = (l.changedTouches || c.getCoords(l))[0], n = s.bbox, r = c.getBoundingBox(s.target), a = p.pageY - r.scrollBodyTop, h = p.pageX - r.scrollBodyLeft;
        if (h > n.x1 && a > n.y1 && h < n.x2 && a < n.y2 && n.scrollTop === r.scrollTop) {
          for (var u in s.tracker) break;
          var d = s.tracker[u];
          o.x = d.start.x, o.y = d.start.y, s.listener(l, o);
        }
      }
    };
    var o = c.pointerSetup(s);
    return o.state = "click", F.add(s.target, "mousedown", s.onPointerDown), o;
  }, F.Gesture = F.Gesture || {}, F.Gesture._gestureHandlers = F.Gesture._gestureHandlers || {}, F.Gesture._gestureHandlers.click = c.click, c), F === void 0 && (F = {}), F.proxy === void 0 && (F.proxy = {}), F.proxy = function(s) {
    return s.dbltap = s.dblclick = function(o) {
      o.gesture = o.gesture || "dbltap", o.maxFingers = o.maxFingers || o.fingers || 1;
      var l, p, n, r, a;
      o.onPointerDown = function(u) {
        var d = u.changedTouches || s.getCoords(u);
        l && !p ? (a = d[0], p = (/* @__PURE__ */ new Date()).getTime() - l) : (r = d[0], l = (/* @__PURE__ */ new Date()).getTime(), p = 0, clearTimeout(n), n = setTimeout(function() {
          l = 0;
        }, 700)), s.pointerStart(u, h, o) && (F.add(o.target, "mousemove", o.onPointerMove).listener(u), F.add(o.target, "mouseup", o.onPointerUp));
      }, o.onPointerMove = function(u) {
        if (l && !p) {
          var d = u.changedTouches || s.getCoords(u);
          a = d[0];
        }
        var g = o.bbox, y = a.pageX - g.x1, x = a.pageY - g.y1;
        y > 0 && y < g.width && x > 0 && x < g.height && Math.abs(a.pageX - r.pageX) <= 25 && Math.abs(a.pageY - r.pageY) <= 25 || (F.remove(o.target, "mousemove", o.onPointerMove), clearTimeout(n), l = p = 0);
      }, o.onPointerUp = function(u) {
        if (s.pointerEnd(u, h, o) && (F.remove(o.target, "mousemove", o.onPointerMove), F.remove(o.target, "mouseup", o.onPointerUp)), l && p) {
          if (p <= 700) {
            for (var d in h.state = o.gesture, o.tracker) break;
            var g = o.tracker[d];
            h.x = g.start.x, h.y = g.start.y, o.listener(u, h);
          }
          clearTimeout(n), l = p = 0;
        }
      };
      var h = s.pointerSetup(o);
      return h.state = "dblclick", F.add(o.target, "mousedown", o.onPointerDown), h;
    }, F.Gesture = F.Gesture || {}, F.Gesture._gestureHandlers = F.Gesture._gestureHandlers || {}, F.Gesture._gestureHandlers.dbltap = s.dbltap, F.Gesture._gestureHandlers.dblclick = s.dblclick, s;
  }(F.proxy), F === void 0 && (F = {}), F.proxy === void 0 && (F.proxy = {}), F.proxy = function(s) {
    return s.dragElement = function(o, l) {
      s.drag({ event: l, target: o, position: "move", listener: function(p, n) {
        o.style.left = n.x + "px", o.style.top = n.y + "px", F.prevent(p);
      } });
    }, s.drag = function(o) {
      o.gesture = "drag", o.onPointerDown = function(p) {
        s.pointerStart(p, l, o) && (o.monitor || (F.add(o.doc, "mousemove", o.onPointerMove), F.add(o.doc, "mouseup", o.onPointerUp))), o.onPointerMove(p, "down");
      }, o.onPointerMove = function(p, n) {
        if (!o.tracker) return o.onPointerDown(p);
        o.bbox;
        for (var r = p.changedTouches || s.getCoords(p), a = r.length, h = 0; h < a; h++) {
          var u = r[h], d = u.identifier || 1 / 0, g = o.tracker[d];
          g && (g.pageX = u.pageX, g.pageY = u.pageY, l.state = n || "move", l.identifier = d, l.start = g.start, l.fingers = o.fingers, o.position === "differenceFromLast" ? (l.x = g.pageX - g.offsetX, l.y = g.pageY - g.offsetY, g.offsetX = g.pageX, g.offsetY = g.pageY) : (l.x = g.pageX - g.offsetX, l.y = g.pageY - g.offsetY), o.listener(p, l));
        }
      }, o.onPointerUp = function(p) {
        s.pointerEnd(p, l, o, o.onPointerMove) && (o.monitor || (F.remove(o.doc, "mousemove", o.onPointerMove), F.remove(o.doc, "mouseup", o.onPointerUp)));
      };
      var l = s.pointerSetup(o);
      return o.event ? o.onPointerDown(o.event) : (F.add(o.target, "mousedown", o.onPointerDown), o.monitor && (F.add(o.doc, "mousemove", o.onPointerMove), F.add(o.doc, "mouseup", o.onPointerUp))), l;
    }, F.Gesture = F.Gesture || {}, F.Gesture._gestureHandlers = F.Gesture._gestureHandlers || {}, F.Gesture._gestureHandlers.drag = s.drag, s;
  }(F.proxy), F === void 0 && (F = {}), F.proxy === void 0 && (F.proxy = {}), F.proxy = function(s) {
    var o = Math.PI / 180, l = function(p, n) {
      var r = 0, a = 0, h = 0;
      for (var u in n) {
        var d = n[u];
        d.up || (r += d.move.x, a += d.move.y, h++);
      }
      return p.x = r /= h, p.y = a /= h, p;
    };
    return s.gesture = function(p) {
      p.gesture = p.gesture || "gesture", p.minFingers = p.minFingers || p.fingers || 2, p.onPointerDown = function(r) {
        var a = p.fingers;
        if (s.pointerStart(r, n, p) && (F.add(p.doc, "mousemove", p.onPointerMove), F.add(p.doc, "mouseup", p.onPointerUp)), p.fingers === p.minFingers && a !== p.fingers) {
          n.fingers = p.minFingers, n.scale = 1, n.rotation = 0, n.state = "start";
          var h = "";
          for (var u in p.tracker) h += u;
          n.identifier = parseInt(h), l(n, p.tracker), p.listener(r, n);
        }
      }, p.onPointerMove = function(r, a) {
        for (var h = p.bbox, u = p.tracker, d = (x = r.changedTouches || s.getCoords(r)).length, g = 0; g < d; g++) {
          var y = u[M = (P = x[g]).identifier || 1 / 0];
          y && (y.move.x = P.pageX - h.x1, y.move.y = P.pageY - h.y1);
        }
        if (!(p.fingers < p.minFingers)) {
          var x = [], C = 0, b = 0;
          for (var M in l(n, u), u) {
            var P;
            if (!(P = u[M]).up) {
              var _ = P.start;
              if (!_.distance) {
                var k = _.x - n.x, L = _.y - n.y;
                _.distance = Math.sqrt(k * k + L * L), _.angle = Math.atan2(k, L) / o;
              }
              k = P.move.x - n.x, L = P.move.y - n.y, C += Math.sqrt(k * k + L * L) / _.distance;
              var H = Math.atan2(k, L) / o, W = (_.angle - H + 360) % 360 - 180;
              P.DEG2 = P.DEG1, P.DEG1 = W > 0 ? W : -W, P.DEG2 !== void 0 && (W > 0 ? P.rotation += P.DEG1 - P.DEG2 : P.rotation -= P.DEG1 - P.DEG2, b += P.rotation), x.push(P.move);
            }
          }
          n.touches = x, n.fingers = p.fingers, n.scale = C / p.fingers, n.rotation = b / p.fingers, n.state = "change", p.listener(r, n);
        }
      }, p.onPointerUp = function(r) {
        var a = p.fingers;
        s.pointerEnd(r, n, p) && (F.remove(p.doc, "mousemove", p.onPointerMove), F.remove(p.doc, "mouseup", p.onPointerUp)), a === p.minFingers && p.fingers < p.minFingers && (n.fingers = p.fingers, n.state = "end", p.listener(r, n));
      };
      var n = s.pointerSetup(p);
      return F.add(p.target, "mousedown", p.onPointerDown), n;
    }, F.Gesture = F.Gesture || {}, F.Gesture._gestureHandlers = F.Gesture._gestureHandlers || {}, F.Gesture._gestureHandlers.gesture = s.gesture, s;
  }(F.proxy), F === void 0 && (F = {}), F.proxy === void 0 && (F.proxy = {}), F.proxy = function(s) {
    return s.pointerdown = s.pointermove = s.pointerup = function(o) {
      if (o.gesture = o.gesture || "pointer", !o.target.isPointerEmitter) {
        var l = !0;
        o.onPointerDown = function(n) {
          l = !1, p.gesture = "pointerdown", o.listener(n, p);
        }, o.onPointerMove = function(n) {
          p.gesture = "pointermove", o.listener(n, p, l);
        }, o.onPointerUp = function(n) {
          l = !0, p.gesture = "pointerup", o.listener(n, p, !0);
        };
        var p = s.pointerSetup(o);
        return F.add(o.target, "mousedown", o.onPointerDown), F.add(o.target, "mousemove", o.onPointerMove), F.add(o.doc, "mouseup", o.onPointerUp), o.target.isPointerEmitter = !0, p;
      }
    }, F.Gesture = F.Gesture || {}, F.Gesture._gestureHandlers = F.Gesture._gestureHandlers || {}, F.Gesture._gestureHandlers.pointerdown = s.pointerdown, F.Gesture._gestureHandlers.pointermove = s.pointermove, F.Gesture._gestureHandlers.pointerup = s.pointerup, s;
  }(F.proxy), F === void 0 && (F = {}), F.proxy === void 0 && (F.proxy = {}), F.proxy = function(s) {
    return s.shake = function(o) {
      var l = { gesture: "devicemotion", acceleration: {}, accelerationIncludingGravity: {}, target: o.target, listener: o.listener, remove: function() {
        window.removeEventListener("devicemotion", a, !1);
      } }, p = (/* @__PURE__ */ new Date()).getTime(), n = { x: 0, y: 0, z: 0 }, r = { x: { count: 0, value: 0 }, y: { count: 0, value: 0 }, z: { count: 0, value: 0 } }, a = function(h) {
        var u = 0.8, d = h.accelerationIncludingGravity;
        if (n.x = u * n.x + (1 - u) * d.x, n.y = u * n.y + (1 - u) * d.y, n.z = u * n.z + (1 - u) * d.z, l.accelerationIncludingGravity = n, l.acceleration.x = d.x - n.x, l.acceleration.y = d.y - n.y, l.acceleration.z = d.z - n.z, o.gesture !== "devicemotion") for (var g = (/* @__PURE__ */ new Date()).getTime(), y = 0; y < 3; y++) {
          var x = "xyz"[y], C = l.acceleration[x], b = r[x], M = Math.abs(C);
          if (!(g - p < 1e3) && M > 4) {
            var P = g * C / M, _ = Math.abs(P + b.value);
            b.value && _ < 200 ? (b.value = P, b.count++, b.count === 3 && (o.listener(h, l), p = g, b.value = 0, b.count = 0)) : (b.value = P, b.count = 1);
          }
        }
        else o.listener(h, l);
      };
      if (window.addEventListener) return window.addEventListener("devicemotion", a, !1), l;
    }, F.Gesture = F.Gesture || {}, F.Gesture._gestureHandlers = F.Gesture._gestureHandlers || {}, F.Gesture._gestureHandlers.shake = s.shake, s;
  }(F.proxy), F === void 0 && (F = {}), F.proxy === void 0 && (F.proxy = {}), F.proxy = function(s) {
    var o = Math.PI / 180;
    return s.swipe = function(l) {
      l.snap = l.snap || 90, l.threshold = l.threshold || 1, l.gesture = l.gesture || "swipe", l.onPointerDown = function(n) {
        s.pointerStart(n, p, l) && (F.add(l.doc, "mousemove", l.onPointerMove).listener(n), F.add(l.doc, "mouseup", l.onPointerUp));
      }, l.onPointerMove = function(n) {
        for (var r = n.changedTouches || s.getCoords(n), a = r.length, h = 0; h < a; h++) {
          var u = r[h], d = u.identifier || 1 / 0, g = l.tracker[d];
          g && (g.move.x = u.pageX, g.move.y = u.pageY, g.moveTime = (/* @__PURE__ */ new Date()).getTime());
        }
      }, l.onPointerUp = function(n) {
        if (s.pointerEnd(n, p, l)) {
          var r, a;
          F.remove(l.doc, "mousemove", l.onPointerMove), F.remove(l.doc, "mouseup", l.onPointerUp);
          var h = { x: 0, y: 0 }, u = 0, d = 0, g = 0;
          for (var y in l.tracker) {
            var x = l.tracker[y], C = x.move.x - x.start.x, b = x.move.y - x.start.y;
            u += x.move.x, d += x.move.y, h.x += x.start.x, h.y += x.start.y, g++;
            var M = Math.sqrt(C * C + b * b), P = x.moveTime - x.startTime, _ = Math.atan2(C, b) / o + 180, k = P ? M / P : 0;
            if (a === void 0) a = _, r = k;
            else {
              if (!(Math.abs(_ - a) <= 20)) return;
              a = (a + _) / 2, r = (r + k) / 2;
            }
          }
          var L = l.gestureFingers;
          l.minFingers <= L && l.maxFingers >= L && r > l.threshold && (h.x /= g, h.y /= g, p.start = h, p.x = u / g, p.y = d / g, p.angle = -(((a / l.snap + 0.5 >> 0) * l.snap || 360) - 360), p.velocity = r, p.fingers = L, p.state = "swipe", l.listener(n, p));
        }
      };
      var p = s.pointerSetup(l);
      return F.add(l.target, "mousedown", l.onPointerDown), p;
    }, F.Gesture = F.Gesture || {}, F.Gesture._gestureHandlers = F.Gesture._gestureHandlers || {}, F.Gesture._gestureHandlers.swipe = s.swipe, s;
  }(F.proxy), F === void 0 && (F = {}), F.proxy === void 0 && (F.proxy = {}), F.proxy = function(s) {
    return s.longpress = function(o) {
      return o.gesture = "longpress", s.tap(o);
    }, s.tap = function(o) {
      var l, p;
      o.delay = o.delay || 500, o.timeout = o.timeout || 250, o.driftDeviance = o.driftDeviance || 10, o.gesture = o.gesture || "tap", o.onPointerDown = function(r) {
        if (s.pointerStart(r, n, o)) {
          if (l = (/* @__PURE__ */ new Date()).getTime(), F.add(o.doc, "mousemove", o.onPointerMove).listener(r), F.add(o.doc, "mouseup", o.onPointerUp), o.gesture !== "longpress") return;
          p = setTimeout(function() {
            if (!(r.cancelBubble && ++r.cancelBubbleCount > 1)) {
              var a = 0;
              for (var h in o.tracker) {
                var u = o.tracker[h];
                if (u.end === !0 || o.cancel) return;
                a++;
              }
              o.minFingers <= a && o.maxFingers >= a && (n.state = "start", n.fingers = a, n.x = u.start.x, n.y = u.start.y, o.listener(r, n));
            }
          }, o.delay);
        }
      }, o.onPointerMove = function(r) {
        for (var a = o.bbox, h = r.changedTouches || s.getCoords(r), u = h.length, d = 0; d < u; d++) {
          var g = h[d], y = g.identifier || 1 / 0, x = o.tracker[y];
          if (x) {
            var C = g.pageX - a.x1, b = g.pageY - a.y1, M = C - x.start.x, P = b - x.start.y, _ = Math.sqrt(M * M + P * P);
            if (!(C > 0 && C < a.width && b > 0 && b < a.height && _ <= o.driftDeviance)) return F.remove(o.doc, "mousemove", o.onPointerMove), void (o.cancel = !0);
          }
        }
      }, o.onPointerUp = function(r) {
        if (s.pointerEnd(r, n, o)) {
          if (clearTimeout(p), F.remove(o.doc, "mousemove", o.onPointerMove), F.remove(o.doc, "mouseup", o.onPointerUp), r.cancelBubble && ++r.cancelBubbleCount > 1) return;
          if (o.gesture === "longpress") return void (n.state === "start" && (n.state = "end", o.listener(r, n)));
          if (o.cancel || (/* @__PURE__ */ new Date()).getTime() - l > o.timeout) return;
          var a = o.gestureFingers;
          o.minFingers <= a && o.maxFingers >= a && (n.state = "tap", n.fingers = o.gestureFingers, o.listener(r, n));
        }
      };
      var n = s.pointerSetup(o);
      return F.add(o.target, "mousedown", o.onPointerDown), n;
    }, F.Gesture = F.Gesture || {}, F.Gesture._gestureHandlers = F.Gesture._gestureHandlers || {}, F.Gesture._gestureHandlers.tap = s.tap, F.Gesture._gestureHandlers.longpress = s.longpress, s;
  }(F.proxy), F === void 0 && (F = {}), F.proxy === void 0 && (F.proxy = {}), F.proxy = function(s) {
    return s.wheelPreventElasticBounce = function(o) {
      o && (typeof o == "string" && (o = document.querySelector(o)), F.add(o, "wheel", function(l, p) {
        p.preventElasticBounce(), F.stop(l);
      }));
    }, s.wheel = function(o) {
      var l, p = o.timeout || 150, n = 0, r = { gesture: "wheel", state: "start", wheelDelta: 0, target: o.target, listener: o.listener, preventElasticBounce: function(g) {
        var y = this.target, x = y.scrollTop;
        (x + y.offsetHeight === y.scrollHeight && this.wheelDelta <= 0 || x === 0 && this.wheelDelta >= 0) && F.cancel(g), F.stop(g);
      }, add: function() {
        o.target[h](d, a, !1);
      }, remove: function() {
        o.target[u](d, a, !1);
      } }, a = function(g) {
        g = g || window.event, r.state = n++ ? "change" : "start", r.wheelDelta = g.detail ? -20 * g.detail : g.wheelDelta, o.listener(g, r), clearTimeout(l), l = setTimeout(function() {
          n = 0, r.state = "end", r.wheelDelta = 0, o.listener(g, r);
        }, p);
      }, h = document.addEventListener ? "addEventListener" : "attachEvent", u = document.removeEventListener ? "removeEventListener" : "detachEvent", d = F.getEventSupport("mousewheel") ? "mousewheel" : "DOMMouseScroll";
      return o.target[h](d, a, !1), r;
    }, F.Gesture = F.Gesture || {}, F.Gesture._gestureHandlers = F.Gesture._gestureHandlers || {}, F.Gesture._gestureHandlers.wheel = s.wheel, s;
  }(F.proxy), Me === void 0) var Me = {};
  function qe(s, o) {
    var l = s.canvas, p = o.targetCanvas, n = p.getContext("2d");
    n.translate(0, p.height), n.scale(1, -1);
    var r = l.height - p.height;
    n.drawImage(l, 0, r, p.width, p.height, 0, 0, p.width, p.height);
  }
  function We(s, o) {
    var l = o.targetCanvas.getContext("2d"), p = o.destinationWidth, n = o.destinationHeight, r = p * n * 4, a = new Uint8Array(this.imageBuffer, 0, r), h = new Uint8ClampedArray(this.imageBuffer, 0, r);
    s.readPixels(0, 0, p, n, s.RGBA, s.UNSIGNED_BYTE, a);
    var u = new ImageData(h, p, n);
    l.putImageData(u, 0, 0);
  }
  Me.proxy === void 0 && (Me.proxy = {}), Me.proxy = function(s) {
    return s.orientation = function(o) {
      var l = { gesture: "orientationchange", previous: null, current: window.orientation, target: o.target, listener: o.listener, remove: function() {
        window.removeEventListener("orientationchange", p, !1);
      } }, p = function(n) {
        l.previous = l.current, l.current = window.orientation, l.previous === null || l.previous == l.current || o.listener(n, l);
      };
      return window.DeviceOrientationEvent && window.addEventListener("orientationchange", p, !1), l;
    }, Me.Gesture = Me.Gesture || {}, Me.Gesture._gestureHandlers = Me.Gesture._gestureHandlers || {}, Me.Gesture._gestureHandlers.orientation = s.orientation, s;
  }(Me.proxy), function() {
    function s(l, p) {
      if (this.__eventListeners[l]) {
        var n = this.__eventListeners[l];
        p ? n[n.indexOf(p)] = !1 : v.util.array.fill(n, !1);
      }
    }
    function o(l, p) {
      var n = (function() {
        p.apply(this, arguments), this.off(l, n);
      }).bind(this);
      this.on(l, n);
    }
    v.Observable = { fire: function(l, p) {
      if (!this.__eventListeners) return this;
      var n = this.__eventListeners[l];
      if (!n) return this;
      for (var r = 0, a = n.length; r < a; r++) n[r] && n[r].call(this, p || {});
      return this.__eventListeners[l] = n.filter(function(h) {
        return h !== !1;
      }), this;
    }, on: function(l, p) {
      if (this.__eventListeners || (this.__eventListeners = {}), arguments.length === 1) for (var n in l) this.on(n, l[n]);
      else this.__eventListeners[l] || (this.__eventListeners[l] = []), this.__eventListeners[l].push(p);
      return this;
    }, once: function(l, p) {
      if (arguments.length === 1) for (var n in l) o.call(this, n, l[n]);
      else o.call(this, l, p);
      return this;
    }, off: function(l, p) {
      if (!this.__eventListeners) return this;
      if (arguments.length === 0) for (l in this.__eventListeners) s.call(this, l);
      else if (arguments.length === 1 && typeof arguments[0] == "object") for (var n in l) s.call(this, n, l[n]);
      else s.call(this, l, p);
      return this;
    } };
  }(), v.Collection = { _objects: [], add: function() {
    if (this._objects.push.apply(this._objects, arguments), this._onObjectAdded) for (var s = 0, o = arguments.length; s < o; s++) this._onObjectAdded(arguments[s]);
    return this.renderOnAddRemove && this.requestRenderAll(), this;
  }, insertAt: function(s, o, l) {
    var p = this._objects;
    return l ? p[o] = s : p.splice(o, 0, s), this._onObjectAdded && this._onObjectAdded(s), this.renderOnAddRemove && this.requestRenderAll(), this;
  }, remove: function() {
    for (var s, o = this._objects, l = !1, p = 0, n = arguments.length; p < n; p++) (s = o.indexOf(arguments[p])) !== -1 && (l = !0, o.splice(s, 1), this._onObjectRemoved && this._onObjectRemoved(arguments[p]));
    return this.renderOnAddRemove && l && this.requestRenderAll(), this;
  }, forEachObject: function(s, o) {
    for (var l = this.getObjects(), p = 0, n = l.length; p < n; p++) s.call(o, l[p], p, l);
    return this;
  }, getObjects: function(s) {
    return s === void 0 ? this._objects.concat() : this._objects.filter(function(o) {
      return o.type === s;
    });
  }, item: function(s) {
    return this._objects[s];
  }, isEmpty: function() {
    return this._objects.length === 0;
  }, size: function() {
    return this._objects.length;
  }, contains: function(s, o) {
    return this._objects.indexOf(s) > -1 || !!o && this._objects.some(function(l) {
      return typeof l.contains == "function" && l.contains(s, !0);
    });
  }, complexity: function() {
    return this._objects.reduce(function(s, o) {
      return s += o.complexity ? o.complexity() : 0;
    }, 0);
  } }, v.CommonMethods = { _setOptions: function(s) {
    for (var o in s) this.set(o, s[o]);
  }, _initGradient: function(s, o) {
    !s || !s.colorStops || s instanceof v.Gradient || this.set(o, new v.Gradient(s));
  }, _initPattern: function(s, o, l) {
    !s || !s.source || s instanceof v.Pattern ? l && l() : this.set(o, new v.Pattern(s, l));
  }, _setObject: function(s) {
    for (var o in s) this._set(o, s[o]);
  }, set: function(s, o) {
    return typeof s == "object" ? this._setObject(s) : this._set(s, o), this;
  }, _set: function(s, o) {
    this[s] = o;
  }, toggle: function(s) {
    var o = this.get(s);
    return typeof o == "boolean" && this.set(s, !o), this;
  }, get: function(s) {
    return this[s];
  } }, f = e, m = Math.sqrt, w = Math.atan2, S = Math.pow, O = Math.PI / 180, z = Math.PI / 2, v.util = { cos: function(s) {
    if (s === 0) return 1;
    switch (s < 0 && (s = -s), s / z) {
      case 1:
      case 3:
        return 0;
      case 2:
        return -1;
    }
    return Math.cos(s);
  }, sin: function(s) {
    if (s === 0) return 0;
    var o = 1;
    switch (s < 0 && (o = -1), s / z) {
      case 1:
        return o;
      case 2:
        return 0;
      case 3:
        return -o;
    }
    return Math.sin(s);
  }, removeFromArray: function(s, o) {
    var l = s.indexOf(o);
    return l !== -1 && s.splice(l, 1), s;
  }, getRandomInt: function(s, o) {
    return Math.floor(Math.random() * (o - s + 1)) + s;
  }, degreesToRadians: function(s) {
    return s * O;
  }, radiansToDegrees: function(s) {
    return s / O;
  }, rotatePoint: function(s, o, l) {
    var p = new v.Point(s.x - o.x, s.y - o.y), n = v.util.rotateVector(p, l);
    return new v.Point(n.x, n.y).addEquals(o);
  }, rotateVector: function(s, o) {
    var l = v.util.sin(o), p = v.util.cos(o);
    return { x: s.x * p - s.y * l, y: s.x * l + s.y * p };
  }, transformPoint: function(s, o, l) {
    return l ? new v.Point(o[0] * s.x + o[2] * s.y, o[1] * s.x + o[3] * s.y) : new v.Point(o[0] * s.x + o[2] * s.y + o[4], o[1] * s.x + o[3] * s.y + o[5]);
  }, makeBoundingBoxFromPoints: function(s, o) {
    if (o) for (var l = 0; l < s.length; l++) s[l] = v.util.transformPoint(s[l], o);
    var p = [s[0].x, s[1].x, s[2].x, s[3].x], n = v.util.array.min(p), r = v.util.array.max(p) - n, a = [s[0].y, s[1].y, s[2].y, s[3].y], h = v.util.array.min(a);
    return { left: n, top: h, width: r, height: v.util.array.max(a) - h };
  }, invertTransform: function(s) {
    var o = 1 / (s[0] * s[3] - s[1] * s[2]), l = [o * s[3], -o * s[1], -o * s[2], o * s[0]], p = v.util.transformPoint({ x: s[4], y: s[5] }, l, !0);
    return l[4] = -p.x, l[5] = -p.y, l;
  }, toFixed: function(s, o) {
    return parseFloat(Number(s).toFixed(o));
  }, parseUnit: function(s, o) {
    var l = /\D{0,2}$/.exec(s), p = parseFloat(s);
    switch (o || (o = v.Text.DEFAULT_SVG_FONT_SIZE), l[0]) {
      case "mm":
        return p * v.DPI / 25.4;
      case "cm":
        return p * v.DPI / 2.54;
      case "in":
        return p * v.DPI;
      case "pt":
        return p * v.DPI / 72;
      case "pc":
        return p * v.DPI / 72 * 12;
      case "em":
        return p * o;
      default:
        return p;
    }
  }, falseFunction: function() {
    return !1;
  }, getKlass: function(s, o) {
    return s = v.util.string.camelize(s.charAt(0).toUpperCase() + s.slice(1)), v.util.resolveNamespace(o)[s];
  }, getSvgAttributes: function(s) {
    var o = ["instantiated_by_use", "style", "id", "class"];
    switch (s) {
      case "linearGradient":
        o = o.concat(["x1", "y1", "x2", "y2", "gradientUnits", "gradientTransform"]);
        break;
      case "radialGradient":
        o = o.concat(["gradientUnits", "gradientTransform", "cx", "cy", "r", "fx", "fy", "fr"]);
        break;
      case "stop":
        o = o.concat(["offset", "stop-color", "stop-opacity"]);
    }
    return o;
  }, resolveNamespace: function(s) {
    if (!s) return v;
    var o, l = s.split("."), p = l.length, n = f || v.window;
    for (o = 0; o < p; ++o) n = n[l[o]];
    return n;
  }, loadImage: function(s, o, l, p) {
    if (s) {
      var n = v.util.createImage(), r = function() {
        o && o.call(l, n, !1), n = n.onload = n.onerror = null;
      };
      n.onload = r, n.onerror = function() {
        v.log("Error loading " + n.src), o && o.call(l, null, !0), n = n.onload = n.onerror = null;
      }, s.indexOf("data") !== 0 && p != null && (n.crossOrigin = p), s.substring(0, 14) === "data:image/svg" && (n.onload = null, v.util.loadImageInDom(n, r)), n.src = s;
    } else o && o.call(l, s);
  }, loadImageInDom: function(s, o) {
    var l = v.document.createElement("div");
    l.style.width = l.style.height = "1px", l.style.left = l.style.top = "-100%", l.style.position = "absolute", l.appendChild(s), v.document.querySelector("body").appendChild(l), s.onload = function() {
      o(), l.parentNode.removeChild(l), l = null;
    };
  }, enlivenObjects: function(s, o, l, p) {
    var n = [], r = 0, a = (s = s || []).length;
    function h() {
      ++r === a && o && o(n.filter(function(u) {
        return u;
      }));
    }
    a ? s.forEach(function(u, d) {
      u && u.type ? v.util.getKlass(u.type, l).fromObject(u, function(g, y) {
        y || (n[d] = g), p && p(u, g, y), h();
      }) : h();
    }) : o && o(n);
  }, enlivenPatterns: function(s, o) {
    function l() {
      ++n === r && o && o(p);
    }
    var p = [], n = 0, r = (s = s || []).length;
    r ? s.forEach(function(a, h) {
      a && a.source ? new v.Pattern(a, function(u) {
        p[h] = u, l();
      }) : (p[h] = a, l());
    }) : o && o(p);
  }, groupSVGElements: function(s, o, l) {
    var p;
    return s && s.length === 1 ? s[0] : (o && (o.width && o.height ? o.centerPoint = { x: o.width / 2, y: o.height / 2 } : (delete o.width, delete o.height)), p = new v.Group(s, o), l !== void 0 && (p.sourcePath = l), p);
  }, populateWithProperties: function(s, o, l) {
    if (l && Object.prototype.toString.call(l) === "[object Array]") for (var p = 0, n = l.length; p < n; p++) l[p] in s && (o[l[p]] = s[l[p]]);
  }, drawDashedLine: function(s, o, l, p, n, r) {
    var a = p - o, h = n - l, u = m(a * a + h * h), d = w(h, a), g = r.length, y = 0, x = !0;
    for (s.save(), s.translate(o, l), s.moveTo(0, 0), s.rotate(d), o = 0; u > o; ) (o += r[y++ % g]) > u && (o = u), s[x ? "lineTo" : "moveTo"](o, 0), x = !x;
    s.restore();
  }, createCanvasElement: function() {
    return v.document.createElement("canvas");
  }, copyCanvasElement: function(s) {
    var o = v.util.createCanvasElement();
    return o.width = s.width, o.height = s.height, o.getContext("2d").drawImage(s, 0, 0), o;
  }, toDataURL: function(s, o, l) {
    return s.toDataURL("image/" + o, l);
  }, createImage: function() {
    return v.document.createElement("img");
  }, multiplyTransformMatrices: function(s, o, l) {
    return [s[0] * o[0] + s[2] * o[1], s[1] * o[0] + s[3] * o[1], s[0] * o[2] + s[2] * o[3], s[1] * o[2] + s[3] * o[3], l ? 0 : s[0] * o[4] + s[2] * o[5] + s[4], l ? 0 : s[1] * o[4] + s[3] * o[5] + s[5]];
  }, qrDecompose: function(s) {
    var o = w(s[1], s[0]), l = S(s[0], 2) + S(s[1], 2), p = m(l), n = (s[0] * s[3] - s[2] * s[1]) / p, r = w(s[0] * s[2] + s[1] * s[3], l);
    return { angle: o / O, scaleX: p, scaleY: n, skewX: r / O, skewY: 0, translateX: s[4], translateY: s[5] };
  }, calcRotateMatrix: function(s) {
    if (!s.angle) return v.iMatrix.concat();
    var o = v.util.degreesToRadians(s.angle), l = v.util.cos(o), p = v.util.sin(o);
    return [l, p, -p, l, 0, 0];
  }, calcDimensionsMatrix: function(s) {
    var o = s.scaleX === void 0 ? 1 : s.scaleX, l = s.scaleY === void 0 ? 1 : s.scaleY, p = [s.flipX ? -o : o, 0, 0, s.flipY ? -l : l, 0, 0], n = v.util.multiplyTransformMatrices, r = v.util.degreesToRadians;
    return s.skewX && (p = n(p, [1, 0, Math.tan(r(s.skewX)), 1], !0)), s.skewY && (p = n(p, [1, Math.tan(r(s.skewY)), 0, 1], !0)), p;
  }, composeMatrix: function(s) {
    var o = [1, 0, 0, 1, s.translateX || 0, s.translateY || 0], l = v.util.multiplyTransformMatrices;
    return s.angle && (o = l(o, v.util.calcRotateMatrix(s))), (s.scaleX !== 1 || s.scaleY !== 1 || s.skewX || s.skewY || s.flipX || s.flipY) && (o = l(o, v.util.calcDimensionsMatrix(s))), o;
  }, resetObjectTransform: function(s) {
    s.scaleX = 1, s.scaleY = 1, s.skewX = 0, s.skewY = 0, s.flipX = !1, s.flipY = !1, s.rotate(0);
  }, saveObjectTransform: function(s) {
    return { scaleX: s.scaleX, scaleY: s.scaleY, skewX: s.skewX, skewY: s.skewY, angle: s.angle, left: s.left, flipX: s.flipX, flipY: s.flipY, top: s.top };
  }, isTransparent: function(s, o, l, p) {
    p > 0 && (o > p ? o -= p : o = 0, l > p ? l -= p : l = 0);
    var n, r = !0, a = s.getImageData(o, l, 2 * p || 1, 2 * p || 1), h = a.data.length;
    for (n = 3; n < h && (r = a.data[n] <= 0); n += 4) ;
    return a = null, r;
  }, parsePreserveAspectRatioAttribute: function(s) {
    var o, l = "meet", p = s.split(" ");
    return p && p.length && ((l = p.pop()) !== "meet" && l !== "slice" ? (o = l, l = "meet") : p.length && (o = p.pop())), { meetOrSlice: l, alignX: o !== "none" ? o.slice(1, 4) : "none", alignY: o !== "none" ? o.slice(5, 8) : "none" };
  }, clearFabricFontCache: function(s) {
    (s = (s || "").toLowerCase()) ? v.charWidthsCache[s] && delete v.charWidthsCache[s] : v.charWidthsCache = {};
  }, limitDimsByArea: function(s, o) {
    var l = Math.sqrt(o * s), p = Math.floor(o / l);
    return { x: Math.floor(l), y: p };
  }, capValue: function(s, o, l) {
    return Math.max(s, Math.min(o, l));
  }, findScaleToFit: function(s, o) {
    return Math.min(o.width / s.width, o.height / s.height);
  }, findScaleToCover: function(s, o) {
    return Math.max(o.width / s.width, o.height / s.height);
  }, matrixToSVG: function(s) {
    return "matrix(" + s.map(function(o) {
      return v.util.toFixed(o, v.Object.NUM_FRACTION_DIGITS);
    }).join(" ") + ")";
  }, removeTransformFromObject: function(s, o) {
    var l = v.util.invertTransform(o), p = v.util.multiplyTransformMatrices(l, s.calcOwnMatrix());
    v.util.applyTransformToObject(s, p);
  }, addTransformToObject: function(s, o) {
    v.util.applyTransformToObject(s, v.util.multiplyTransformMatrices(o, s.calcOwnMatrix()));
  }, applyTransformToObject: function(s, o) {
    var l = v.util.qrDecompose(o), p = new v.Point(l.translateX, l.translateY);
    s.flipX = !1, s.flipY = !1, s.set("scaleX", l.scaleX), s.set("scaleY", l.scaleY), s.skewX = l.skewX, s.skewY = l.skewY, s.angle = l.angle, s.setPositionByOrigin(p, "center", "center");
  }, sizeAfterTransform: function(s, o, l) {
    var p = s / 2, n = o / 2, r = [{ x: -p, y: -n }, { x: p, y: -n }, { x: -p, y: n }, { x: p, y: n }], a = v.util.calcDimensionsMatrix(l), h = v.util.makeBoundingBoxFromPoints(r, a);
    return { x: h.width, y: h.height };
  } }, v.util.createAccessors = function(s) {
    var o, l, p, n, r, a = s.prototype;
    for (o = a.stateProperties.length; o--; ) n = "set" + (p = (l = a.stateProperties[o]).charAt(0).toUpperCase() + l.slice(1)), a[r = "get" + p] || (a[r] = new Function('return this.get("' + l + '")')), a[n] || (a[n] = function(h) {
      return new Function("value", 'return this.set("' + h + '", value)');
    }(l));
  }, function() {
    var s = Array.prototype.join, o = { m: 2, l: 2, h: 1, v: 1, c: 6, s: 4, q: 4, t: 2, a: 7 }, l = { m: "l", M: "L" };
    function p(P, _, k, L, H, W, A, T, D, X, $) {
      var B = v.util.cos(P), j = v.util.sin(P), Y = v.util.cos(_), I = v.util.sin(_), U = k * H * Y - L * W * I + A, Q = L * H * Y + k * W * I + T;
      return ["C", X + D * (-k * H * j - L * W * B), $ + D * (-L * H * j + k * W * B), U + D * (k * H * I + L * W * Y), Q + D * (L * H * I - k * W * Y), U, Q];
    }
    function n(P, _, k, L, H, W, A) {
      var T = Math.PI, D = A * T / 180, X = v.util.sin(D), $ = v.util.cos(D), B = 0, j = 0, Y = -$ * P * 0.5 - X * _ * 0.5, I = -$ * _ * 0.5 + X * P * 0.5, U = (k = Math.abs(k)) * k, Q = (L = Math.abs(L)) * L, ie = I * I, ee = Y * Y, le = U * Q - U * ie - Q * ee, re = 0;
      if (le < 0) {
        var se = Math.sqrt(1 - le / (U * Q));
        k *= se, L *= se;
      } else re = (H === W ? -1 : 1) * Math.sqrt(le / (U * ie + Q * ee));
      var oe = re * k * I / L, fe = -re * L * Y / k, pe = $ * oe - X * fe + 0.5 * P, _e = X * oe + $ * fe + 0.5 * _, we = r(1, 0, (Y - oe) / k, (I - fe) / L), Se = r((Y - oe) / k, (I - fe) / L, (-Y - oe) / k, (-I - fe) / L);
      W === 0 && Se > 0 ? Se -= 2 * T : W === 1 && Se < 0 && (Se += 2 * T);
      for (var Xe = Math.ceil(Math.abs(Se / T * 2)), De = [], Pe = Se / Xe, et = 8 / 3 * Math.sin(Pe / 4) * Math.sin(Pe / 4) / Math.sin(Pe / 2), dt = we + Pe, lt = 0; lt < Xe; lt++) De[lt] = p(we, dt, $, X, k, L, pe, _e, et, B, j), B = De[lt][5], j = De[lt][6], we = dt, dt += Pe;
      return De;
    }
    function r(P, _, k, L) {
      var H = Math.atan2(_, P), W = Math.atan2(L, k);
      return W >= H ? W - H : 2 * Math.PI - (H - W);
    }
    function a(P, _, k, L, H, W, A, T) {
      var D;
      if (v.cachesBoundsOfCurve && (D = s.call(arguments), v.boundsOfCurveCache[D])) return v.boundsOfCurveCache[D];
      var X, $, B, j, Y, I, U, Q, ie = Math.sqrt, ee = Math.min, le = Math.max, re = Math.abs, se = [], oe = [[], []];
      $ = 6 * P - 12 * k + 6 * H, X = -3 * P + 9 * k - 9 * H + 3 * A, B = 3 * k - 3 * P;
      for (var fe = 0; fe < 2; ++fe) if (fe > 0 && ($ = 6 * _ - 12 * L + 6 * W, X = -3 * _ + 9 * L - 9 * W + 3 * T, B = 3 * L - 3 * _), re(X) < 1e-12) {
        if (re($) < 1e-12) continue;
        0 < (j = -B / $) && j < 1 && se.push(j);
      } else (U = $ * $ - 4 * B * X) < 0 || (0 < (Y = (-$ + (Q = ie(U))) / (2 * X)) && Y < 1 && se.push(Y), 0 < (I = (-$ - Q) / (2 * X)) && I < 1 && se.push(I));
      for (var pe, _e, we, Se = se.length, Xe = Se; Se--; ) pe = (we = 1 - (j = se[Se])) * we * we * P + 3 * we * we * j * k + 3 * we * j * j * H + j * j * j * A, oe[0][Se] = pe, _e = we * we * we * _ + 3 * we * we * j * L + 3 * we * j * j * W + j * j * j * T, oe[1][Se] = _e;
      oe[0][Xe] = P, oe[1][Xe] = _, oe[0][Xe + 1] = A, oe[1][Xe + 1] = T;
      var De = [{ x: ee.apply(null, oe[0]), y: ee.apply(null, oe[1]) }, { x: le.apply(null, oe[0]), y: le.apply(null, oe[1]) }];
      return v.cachesBoundsOfCurve && (v.boundsOfCurveCache[D] = De), De;
    }
    function h(P, _, k) {
      for (var L = k[1], H = k[2], W = k[3], A = k[4], T = k[5], D = n(k[6] - P, k[7] - _, L, H, A, T, W), X = 0, $ = D.length; X < $; X++) D[X][1] += P, D[X][2] += _, D[X][3] += P, D[X][4] += _, D[X][5] += P, D[X][6] += _;
      return D;
    }
    function u(P, _, k, L) {
      return Math.sqrt((k - P) * (k - P) + (L - _) * (L - _));
    }
    function d(P, _, k, L, H, W, A, T) {
      return function(D) {
        var X, $ = (X = D) * X * X, B = function(I) {
          return 3 * I * I * (1 - I);
        }(D), j = function(I) {
          return 3 * I * (1 - I) * (1 - I);
        }(D), Y = function(I) {
          return (1 - I) * (1 - I) * (1 - I);
        }(D);
        return { x: A * $ + H * B + k * j + P * Y, y: T * $ + W * B + L * j + _ * Y };
      };
    }
    function g(P, _, k, L, H, W, A, T) {
      return function(D) {
        var X = 1 - D, $ = 3 * X * X * (k - P) + 6 * X * D * (H - k) + 3 * D * D * (A - H), B = 3 * X * X * (L - _) + 6 * X * D * (W - L) + 3 * D * D * (T - W);
        return Math.atan2(B, $);
      };
    }
    function y(P, _, k, L, H, W) {
      return function(A) {
        var T, D = (T = A) * T, X = function(B) {
          return 2 * B * (1 - B);
        }(A), $ = function(B) {
          return (1 - B) * (1 - B);
        }(A);
        return { x: H * D + k * X + P * $, y: W * D + L * X + _ * $ };
      };
    }
    function x(P, _, k, L, H, W) {
      return function(A) {
        var T = 1 - A, D = 2 * T * (k - P) + 2 * A * (H - k), X = 2 * T * (L - _) + 2 * A * (W - L);
        return Math.atan2(X, D);
      };
    }
    function C(P, _, k) {
      var L, H, W = { x: _, y: k }, A = 0;
      for (H = 1; H <= 100; H += 1) L = P(H / 100), A += u(W.x, W.y, L.x, L.y), W = L;
      return A;
    }
    function b(P, _) {
      for (var k, L, H, W = 0, A = 0, T = P.iterator, D = { x: P.x, y: P.y }, X = 0.01, $ = P.angleFinder; A < _ && W <= 1 && X > 1e-4; ) k = T(W), H = W, (L = u(D.x, D.y, k.x, k.y)) + A > _ ? W -= X /= 2 : (D = k, W += X, A += L);
      return k.angle = $(H), k;
    }
    function M(P) {
      for (var _, k, L, H, W = 0, A = P.length, T = 0, D = 0, X = 0, $ = 0, B = [], j = 0; j < A; j++) {
        switch (L = { x: T, y: D, command: (_ = P[j])[0] }, _[0]) {
          case "M":
            L.length = 0, X = T = _[1], $ = D = _[2];
            break;
          case "L":
            L.length = u(T, D, _[1], _[2]), T = _[1], D = _[2];
            break;
          case "C":
            k = d(T, D, _[1], _[2], _[3], _[4], _[5], _[6]), H = g(T, D, _[1], _[2], _[3], _[4], _[5], _[6]), L.iterator = k, L.angleFinder = H, L.length = C(k, T, D), T = _[5], D = _[6];
            break;
          case "Q":
            k = y(T, D, _[1], _[2], _[3], _[4]), H = x(T, D, _[1], _[2], _[3], _[4]), L.iterator = k, L.angleFinder = H, L.length = C(k, T, D), T = _[3], D = _[4];
            break;
          case "Z":
          case "z":
            L.destX = X, L.destY = $, L.length = u(T, D, X, $), T = X, D = $;
        }
        W += L.length, B.push(L);
      }
      return B.push({ length: W, x: T, y: D }), B;
    }
    v.util.joinPath = function(P) {
      return P.map(function(_) {
        return _.join(" ");
      }).join(" ");
    }, v.util.parsePath = function(P) {
      var _, k, L, H, W, A = [], T = [], D = v.rePathCommand, X = "[-+]?(?:\\d*\\.\\d+|\\d+\\.?)(?:[eE][-+]?\\d+)?\\s*", $ = "(" + X + ")" + v.commaWsp, B = "([01])" + v.commaWsp + "?", j = new RegExp($ + "?" + $ + "?" + $ + B + B + $ + "?(" + X + ")", "g");
      if (!P || !P.match) return A;
      for (var Y, I = 0, U = (W = P.match(/[mzlhvcsqta][^mzlhvcsqta]*/gi)).length; I < U; I++) {
        H = (_ = W[I]).slice(1).trim(), T.length = 0;
        var Q = _.charAt(0);
        if (Y = [Q], Q.toLowerCase() === "a") for (var ie; ie = j.exec(H); ) for (var ee = 1; ee < ie.length; ee++) T.push(ie[ee]);
        else for (; L = D.exec(H); ) T.push(L[0]);
        ee = 0;
        for (var le = T.length; ee < le; ee++) k = parseFloat(T[ee]), isNaN(k) || Y.push(k);
        var re = o[Q.toLowerCase()], se = l[Q] || Q;
        if (Y.length - 1 > re) for (var oe = 1, fe = Y.length; oe < fe; oe += re) A.push([Q].concat(Y.slice(oe, oe + re))), Q = se;
        else A.push(Y);
      }
      return A;
    }, v.util.makePathSimpler = function(P) {
      var _, k, L, H, W, A, T = 0, D = 0, X = P.length, $ = 0, B = 0, j = [];
      for (k = 0; k < X; ++k) {
        switch (L = !1, (_ = P[k].slice(0))[0]) {
          case "l":
            _[0] = "L", _[1] += T, _[2] += D;
          case "L":
            T = _[1], D = _[2];
            break;
          case "h":
            _[1] += T;
          case "H":
            _[0] = "L", _[2] = D, T = _[1];
            break;
          case "v":
            _[1] += D;
          case "V":
            _[0] = "L", D = _[1], _[1] = T, _[2] = D;
            break;
          case "m":
            _[0] = "M", _[1] += T, _[2] += D;
          case "M":
            T = _[1], D = _[2], $ = _[1], B = _[2];
            break;
          case "c":
            _[0] = "C", _[1] += T, _[2] += D, _[3] += T, _[4] += D, _[5] += T, _[6] += D;
          case "C":
            W = _[3], A = _[4], T = _[5], D = _[6];
            break;
          case "s":
            _[0] = "S", _[1] += T, _[2] += D, _[3] += T, _[4] += D;
          case "S":
            H === "C" ? (W = 2 * T - W, A = 2 * D - A) : (W = T, A = D), T = _[3], D = _[4], _[0] = "C", _[5] = _[3], _[6] = _[4], _[3] = _[1], _[4] = _[2], _[1] = W, _[2] = A, W = _[3], A = _[4];
            break;
          case "q":
            _[0] = "Q", _[1] += T, _[2] += D, _[3] += T, _[4] += D;
          case "Q":
            W = _[1], A = _[2], T = _[3], D = _[4];
            break;
          case "t":
            _[0] = "T", _[1] += T, _[2] += D;
          case "T":
            H === "Q" ? (W = 2 * T - W, A = 2 * D - A) : (W = T, A = D), _[0] = "Q", T = _[1], D = _[2], _[1] = W, _[2] = A, _[3] = T, _[4] = D;
            break;
          case "a":
            _[0] = "A", _[6] += T, _[7] += D;
          case "A":
            L = !0, j = j.concat(h(T, D, _)), T = _[6], D = _[7];
            break;
          case "z":
          case "Z":
            T = $, D = B;
        }
        L || j.push(_), H = _[0];
      }
      return j;
    }, v.util.getSmoothPathFromPoints = function(P, _) {
      var k, L = [], H = new v.Point(P[0].x, P[0].y), W = new v.Point(P[1].x, P[1].y), A = P.length, T = 1, D = 0, X = A > 2;
      for (_ = _ || 0, X && (T = P[2].x < W.x ? -1 : P[2].x === W.x ? 0 : 1, D = P[2].y < W.y ? -1 : P[2].y === W.y ? 0 : 1), L.push(["M", H.x - T * _, H.y - D * _]), k = 1; k < A; k++) {
        if (!H.eq(W)) {
          var $ = H.midPointFrom(W);
          L.push(["Q", H.x, H.y, $.x, $.y]);
        }
        H = P[k], k + 1 < P.length && (W = P[k + 1]);
      }
      return X && (T = H.x > P[k - 2].x ? 1 : H.x === P[k - 2].x ? 0 : -1, D = H.y > P[k - 2].y ? 1 : H.y === P[k - 2].y ? 0 : -1), L.push(["L", H.x + T * _, H.y + D * _]), L;
    }, v.util.getPathSegmentsInfo = M, v.util.getBoundsOfCurve = a, v.util.getPointOnPath = function(P, _, k) {
      k || (k = M(P));
      for (var L = 0; _ - k[L].length > 0 && L < k.length - 2; ) _ -= k[L].length, L++;
      var H, W = k[L], A = _ / W.length, T = W.command, D = P[L];
      switch (T) {
        case "M":
          return { x: W.x, y: W.y, angle: 0 };
        case "Z":
        case "z":
          return (H = new v.Point(W.x, W.y).lerp(new v.Point(W.destX, W.destY), A)).angle = Math.atan2(W.destY - W.y, W.destX - W.x), H;
        case "L":
          return (H = new v.Point(W.x, W.y).lerp(new v.Point(D[1], D[2]), A)).angle = Math.atan2(D[2] - W.y, D[1] - W.x), H;
        case "C":
        case "Q":
          return b(W, _);
      }
    }, v.util.transformPath = function(P, _, k) {
      return k && (_ = v.util.multiplyTransformMatrices(_, [1, 0, 0, 1, -k.x, -k.y])), P.map(function(L) {
        for (var H = L.slice(0), W = {}, A = 1; A < L.length - 1; A += 2) W.x = L[A], W.y = L[A + 1], W = v.util.transformPoint(W, _), H[A] = W.x, H[A + 1] = W.y;
        return H;
      });
    }, v.util.fromArcToBeizers = h, v.util.getBoundsOfArc = function(P, _, k, L, H, W, A, T, D) {
      for (var X, $ = 0, B = 0, j = [], Y = n(T - P, D - _, k, L, W, A, H), I = 0, U = Y.length; I < U; I++) X = a($, B, Y[I][1], Y[I][2], Y[I][3], Y[I][4], Y[I][5], Y[I][6]), j.push({ x: X[0].x + P, y: X[0].y + _ }), j.push({ x: X[1].x + P, y: X[1].y + _ }), $ = Y[I][5], B = Y[I][6];
      return j;
    }, v.util.drawArc = function(P, _, k, L) {
      h(_, k, L = L.slice(0).unshift("X")).forEach(function(H) {
        P.bezierCurveTo.apply(P, H.slice(1));
      });
    };
  }(), function() {
    var s = Array.prototype.slice;
    function o(l, p, n) {
      if (l && l.length !== 0) {
        var r = l.length - 1, a = p ? l[r][p] : l[r];
        if (p) for (; r--; ) n(l[r][p], a) && (a = l[r][p]);
        else for (; r--; ) n(l[r], a) && (a = l[r]);
        return a;
      }
    }
    v.util.array = { fill: function(l, p) {
      for (var n = l.length; n--; ) l[n] = p;
      return l;
    }, invoke: function(l, p) {
      for (var n = s.call(arguments, 2), r = [], a = 0, h = l.length; a < h; a++) r[a] = n.length ? l[a][p].apply(l[a], n) : l[a][p].call(l[a]);
      return r;
    }, min: function(l, p) {
      return o(l, p, function(n, r) {
        return n < r;
      });
    }, max: function(l, p) {
      return o(l, p, function(n, r) {
        return n >= r;
      });
    } };
  }(), function() {
    function s(o, l, p) {
      if (p) if (!v.isLikelyNode && l instanceof Element) o = l;
      else if (l instanceof Array) {
        o = [];
        for (var n = 0, r = l.length; n < r; n++) o[n] = s({}, l[n], p);
      } else if (l && typeof l == "object") for (var a in l) a === "canvas" || a === "group" ? o[a] = null : l.hasOwnProperty(a) && (o[a] = s({}, l[a], p));
      else o = l;
      else for (var a in l) o[a] = l[a];
      return o;
    }
    v.util.object = { extend: s, clone: function(o, l) {
      return s({}, o, l);
    } }, v.util.object.extend(v.util, v.Observable);
  }(), function() {
    function s(o, l) {
      var p = o.charCodeAt(l);
      if (isNaN(p)) return "";
      if (p < 55296 || p > 57343) return o.charAt(l);
      if (55296 <= p && p <= 56319) {
        if (o.length <= l + 1) throw "High surrogate without following low surrogate";
        var n = o.charCodeAt(l + 1);
        if (56320 > n || n > 57343) throw "High surrogate without following low surrogate";
        return o.charAt(l) + o.charAt(l + 1);
      }
      if (l === 0) throw "Low surrogate without preceding high surrogate";
      var r = o.charCodeAt(l - 1);
      if (55296 > r || r > 56319) throw "Low surrogate without preceding high surrogate";
      return !1;
    }
    v.util.string = { camelize: function(o) {
      return o.replace(/-+(.)?/g, function(l, p) {
        return p ? p.toUpperCase() : "";
      });
    }, capitalize: function(o, l) {
      return o.charAt(0).toUpperCase() + (l ? o.slice(1) : o.slice(1).toLowerCase());
    }, escapeXml: function(o) {
      return o.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }, graphemeSplit: function(o) {
      var l, p = 0, n = [];
      for (p = 0; p < o.length; p++) (l = s(o, p)) !== !1 && n.push(l);
      return n;
    } };
  }(), function() {
    var s = Array.prototype.slice, o = function() {
    }, l = function() {
      for (var a in { toString: 1 }) if (a === "toString") return !1;
      return !0;
    }(), p = function(a, h, u) {
      for (var d in h) d in a.prototype && typeof a.prototype[d] == "function" && (h[d] + "").indexOf("callSuper") > -1 ? a.prototype[d] = /* @__PURE__ */ function(g) {
        return function() {
          var y = this.constructor.superclass;
          this.constructor.superclass = u;
          var x = h[g].apply(this, arguments);
          if (this.constructor.superclass = y, g !== "initialize") return x;
        };
      }(d) : a.prototype[d] = h[d], l && (h.toString !== Object.prototype.toString && (a.prototype.toString = h.toString), h.valueOf !== Object.prototype.valueOf && (a.prototype.valueOf = h.valueOf));
    };
    function n() {
    }
    function r(a) {
      for (var h = null, u = this; u.constructor.superclass; ) {
        var d = u.constructor.superclass.prototype[a];
        if (u[a] !== d) {
          h = d;
          break;
        }
        u = u.constructor.superclass.prototype;
      }
      return h ? arguments.length > 1 ? h.apply(this, s.call(arguments, 1)) : h.call(this) : console.log("tried to callSuper " + a + ", method not found in prototype chain", this);
    }
    v.util.createClass = function() {
      var a = null, h = s.call(arguments, 0);
      function u() {
        this.initialize.apply(this, arguments);
      }
      typeof h[0] == "function" && (a = h.shift()), u.superclass = a, u.subclasses = [], a && (n.prototype = a.prototype, u.prototype = new n(), a.subclasses.push(u));
      for (var d = 0, g = h.length; d < g; d++) p(u, h[d], a);
      return u.prototype.initialize || (u.prototype.initialize = o), u.prototype.constructor = u, u.prototype.callSuper = r, u;
    };
  }(), V = !!v.document.createElement("div").attachEvent, K = ["touchstart", "touchmove", "touchend"], v.util.addListener = function(s, o, l, p) {
    s && s.addEventListener(o, l, !V && p);
  }, v.util.removeListener = function(s, o, l, p) {
    s && s.removeEventListener(o, l, !V && p);
  }, v.util.getPointer = function(s) {
    var o = s.target, l = v.util.getScrollLeftTop(o), p = function(n) {
      var r = n.changedTouches;
      return r && r[0] ? r[0] : n;
    }(s);
    return { x: p.clientX + l.left, y: p.clientY + l.top };
  }, v.util.isTouchEvent = function(s) {
    return K.indexOf(s.type) > -1 || s.pointerType === "touch";
  }, Z = v.document.createElement("div"), te = typeof Z.style.opacity == "string", ae = typeof Z.style.filter == "string", ue = /alpha\s*\(\s*opacity\s*=\s*([^\)]+)\)/, Te = function(s) {
    return s;
  }, te ? Te = function(s, o) {
    return s.style.opacity = o, s;
  } : ae && (Te = function(s, o) {
    var l = s.style;
    return s.currentStyle && !s.currentStyle.hasLayout && (l.zoom = 1), ue.test(l.filter) ? (o = o >= 0.9999 ? "" : "alpha(opacity=" + 100 * o + ")", l.filter = l.filter.replace(ue, o)) : l.filter += " alpha(opacity=" + 100 * o + ")", s;
  }), v.util.setStyle = function(s, o) {
    var l = s.style;
    if (!l) return s;
    if (typeof o == "string") return s.style.cssText += ";" + o, o.indexOf("opacity") > -1 ? Te(s, o.match(/opacity:\s*(\d?\.?\d*)/)[1]) : s;
    for (var p in o) p === "opacity" ? Te(s, o[p]) : l[p === "float" || p === "cssFloat" ? l.styleFloat === void 0 ? "cssFloat" : "styleFloat" : p] = o[p];
    return s;
  }, function() {
    var s = Array.prototype.slice, o, l, p, n, r = function(u) {
      return s.call(u, 0);
    };
    try {
      o = r(v.document.childNodes) instanceof Array;
    } catch {
    }
    function a(u, d) {
      var g = v.document.createElement(u);
      for (var y in d) y === "class" ? g.className = d[y] : y === "for" ? g.htmlFor = d[y] : g.setAttribute(y, d[y]);
      return g;
    }
    function h(u) {
      for (var d = 0, g = 0, y = v.document.documentElement, x = v.document.body || { scrollLeft: 0, scrollTop: 0 }; u && (u.parentNode || u.host) && ((u = u.parentNode || u.host) === v.document ? (d = x.scrollLeft || y.scrollLeft || 0, g = x.scrollTop || y.scrollTop || 0) : (d += u.scrollLeft || 0, g += u.scrollTop || 0), u.nodeType !== 1 || u.style.position !== "fixed"); ) ;
      return { left: d, top: g };
    }
    o || (r = function(u) {
      for (var d = new Array(u.length), g = u.length; g--; ) d[g] = u[g];
      return d;
    }), l = v.document.defaultView && v.document.defaultView.getComputedStyle ? function(u, d) {
      var g = v.document.defaultView.getComputedStyle(u, null);
      return g ? g[d] : void 0;
    } : function(u, d) {
      var g = u.style[d];
      return !g && u.currentStyle && (g = u.currentStyle[d]), g;
    }, p = v.document.documentElement.style, n = "userSelect" in p ? "userSelect" : "MozUserSelect" in p ? "MozUserSelect" : "WebkitUserSelect" in p ? "WebkitUserSelect" : "KhtmlUserSelect" in p ? "KhtmlUserSelect" : "", v.util.makeElementUnselectable = function(u) {
      return u.onselectstart !== void 0 && (u.onselectstart = v.util.falseFunction), n ? u.style[n] = "none" : typeof u.unselectable == "string" && (u.unselectable = "on"), u;
    }, v.util.makeElementSelectable = function(u) {
      return u.onselectstart !== void 0 && (u.onselectstart = null), n ? u.style[n] = "" : typeof u.unselectable == "string" && (u.unselectable = ""), u;
    }, v.util.setImageSmoothing = function(u, d) {
      u.imageSmoothingEnabled = u.imageSmoothingEnabled || u.webkitImageSmoothingEnabled || u.mozImageSmoothingEnabled || u.msImageSmoothingEnabled || u.oImageSmoothingEnabled, u.imageSmoothingEnabled = d;
    }, v.util.getById = function(u) {
      return typeof u == "string" ? v.document.getElementById(u) : u;
    }, v.util.toArray = r, v.util.addClass = function(u, d) {
      u && (" " + u.className + " ").indexOf(" " + d + " ") === -1 && (u.className += (u.className ? " " : "") + d);
    }, v.util.makeElement = a, v.util.wrapElement = function(u, d, g) {
      return typeof d == "string" && (d = a(d, g)), u.parentNode && u.parentNode.replaceChild(d, u), d.appendChild(u), d;
    }, v.util.getScrollLeftTop = h, v.util.getElementOffset = function(u) {
      var d, g, y = u && u.ownerDocument, x = { left: 0, top: 0 }, C = { left: 0, top: 0 }, b = { borderLeftWidth: "left", borderTopWidth: "top", paddingLeft: "left", paddingTop: "top" };
      if (!y) return C;
      for (var M in b) C[b[M]] += parseInt(l(u, M), 10) || 0;
      return d = y.documentElement, u.getBoundingClientRect !== void 0 && (x = u.getBoundingClientRect()), g = h(u), { left: x.left + g.left - (d.clientLeft || 0) + C.left, top: x.top + g.top - (d.clientTop || 0) + C.top };
    }, v.util.getNodeCanvas = function(u) {
      var d = v.jsdomImplForWrapper(u);
      return d._canvas || d._image;
    }, v.util.cleanUpJsdomNode = function(u) {
      if (v.isLikelyNode) {
        var d = v.jsdomImplForWrapper(u);
        d && (d._image = null, d._canvas = null, d._currentSrc = null, d._attributes = null, d._classList = null);
      }
    };
  }(), function() {
    function s() {
    }
    v.util.request = function(o, l) {
      l || (l = {});
      var p = l.method ? l.method.toUpperCase() : "GET", n = l.onComplete || function() {
      }, r = new v.window.XMLHttpRequest(), a = l.body || l.parameters;
      return r.onreadystatechange = function() {
        r.readyState === 4 && (n(r), r.onreadystatechange = s);
      }, p === "GET" && (a = null, typeof l.parameters == "string" && (o = function(h, u) {
        return h + (/\?/.test(h) ? "&" : "?") + u;
      }(o, l.parameters))), r.open(p, o, !0), p !== "POST" && p !== "PUT" || r.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), r.send(a), r;
    };
  }(), v.log = console.log, v.warn = console.warn, function() {
    function s() {
      return !1;
    }
    function o(r, a, h, u) {
      return -h * Math.cos(r / u * (Math.PI / 2)) + h + a;
    }
    var l = v.window.requestAnimationFrame || v.window.webkitRequestAnimationFrame || v.window.mozRequestAnimationFrame || v.window.oRequestAnimationFrame || v.window.msRequestAnimationFrame || function(r) {
      return v.window.setTimeout(r, 1e3 / 60);
    }, p = v.window.cancelAnimationFrame || v.window.clearTimeout;
    function n() {
      return l.apply(v.window, arguments);
    }
    v.util.animate = function(r) {
      var a = !1;
      return n(function(h) {
        r || (r = {});
        var u, d = h || +/* @__PURE__ */ new Date(), g = r.duration || 500, y = d + g, x = r.onChange || s, C = r.abort || s, b = r.onComplete || s, M = r.easing || o, P = "startValue" in r ? r.startValue : 0, _ = "endValue" in r ? r.endValue : 100, k = r.byValue || _ - P;
        r.onStart && r.onStart(), function L(H) {
          var W = (u = H || +/* @__PURE__ */ new Date()) > y ? g : u - d, A = W / g, T = M(W, P, k, g), D = Math.abs((T - P) / k);
          if (!a) {
            if (!C(T, D, A)) return u > y ? (x(_, 1, 1), void b(_, 1, 1)) : (x(T, D, A), void n(L));
            b(_, 1, 1);
          }
        }(d);
      }), function() {
        a = !0;
      };
    }, v.util.requestAnimFrame = n, v.util.cancelAnimFrame = function() {
      return p.apply(v.window, arguments);
    };
  }(), function() {
    function s(o, l, p) {
      var n = "rgba(" + parseInt(o[0] + p * (l[0] - o[0]), 10) + "," + parseInt(o[1] + p * (l[1] - o[1]), 10) + "," + parseInt(o[2] + p * (l[2] - o[2]), 10);
      return n += "," + (o && l ? parseFloat(o[3] + p * (l[3] - o[3])) : 1), n += ")";
    }
    v.util.animateColor = function(o, l, p, n) {
      var r = new v.Color(o).getSource(), a = new v.Color(l).getSource(), h = n.onComplete, u = n.onChange;
      return n = n || {}, v.util.animate(v.util.object.extend(n, { duration: p || 500, startValue: r, endValue: a, byValue: a, easing: function(d, g, y, x) {
        return s(g, y, n.colorEasing ? n.colorEasing(d, x) : 1 - Math.cos(d / x * (Math.PI / 2)));
      }, onComplete: function(d, g, y) {
        if (h) return h(s(a, a, 0), g, y);
      }, onChange: function(d, g, y) {
        if (u) {
          if (Array.isArray(d)) return u(s(d, d, 0), g, y);
          u(d, g, y);
        }
      } }));
    };
  }(), function() {
    function s(n, r, a, h) {
      return n < Math.abs(r) ? (n = r, h = a / 4) : h = r === 0 && n === 0 ? a / (2 * Math.PI) * Math.asin(1) : a / (2 * Math.PI) * Math.asin(r / n), { a: n, c: r, p: a, s: h };
    }
    function o(n, r, a) {
      return n.a * Math.pow(2, 10 * (r -= 1)) * Math.sin((r * a - n.s) * (2 * Math.PI) / n.p);
    }
    function l(n, r, a, h) {
      return a - p(h - n, 0, a, h) + r;
    }
    function p(n, r, a, h) {
      return (n /= h) < 1 / 2.75 ? a * (7.5625 * n * n) + r : n < 2 / 2.75 ? a * (7.5625 * (n -= 1.5 / 2.75) * n + 0.75) + r : n < 2.5 / 2.75 ? a * (7.5625 * (n -= 2.25 / 2.75) * n + 0.9375) + r : a * (7.5625 * (n -= 2.625 / 2.75) * n + 0.984375) + r;
    }
    v.util.ease = { easeInQuad: function(n, r, a, h) {
      return a * (n /= h) * n + r;
    }, easeOutQuad: function(n, r, a, h) {
      return -a * (n /= h) * (n - 2) + r;
    }, easeInOutQuad: function(n, r, a, h) {
      return (n /= h / 2) < 1 ? a / 2 * n * n + r : -a / 2 * (--n * (n - 2) - 1) + r;
    }, easeInCubic: function(n, r, a, h) {
      return a * (n /= h) * n * n + r;
    }, easeOutCubic: function(n, r, a, h) {
      return a * ((n = n / h - 1) * n * n + 1) + r;
    }, easeInOutCubic: function(n, r, a, h) {
      return (n /= h / 2) < 1 ? a / 2 * n * n * n + r : a / 2 * ((n -= 2) * n * n + 2) + r;
    }, easeInQuart: function(n, r, a, h) {
      return a * (n /= h) * n * n * n + r;
    }, easeOutQuart: function(n, r, a, h) {
      return -a * ((n = n / h - 1) * n * n * n - 1) + r;
    }, easeInOutQuart: function(n, r, a, h) {
      return (n /= h / 2) < 1 ? a / 2 * n * n * n * n + r : -a / 2 * ((n -= 2) * n * n * n - 2) + r;
    }, easeInQuint: function(n, r, a, h) {
      return a * (n /= h) * n * n * n * n + r;
    }, easeOutQuint: function(n, r, a, h) {
      return a * ((n = n / h - 1) * n * n * n * n + 1) + r;
    }, easeInOutQuint: function(n, r, a, h) {
      return (n /= h / 2) < 1 ? a / 2 * n * n * n * n * n + r : a / 2 * ((n -= 2) * n * n * n * n + 2) + r;
    }, easeInSine: function(n, r, a, h) {
      return -a * Math.cos(n / h * (Math.PI / 2)) + a + r;
    }, easeOutSine: function(n, r, a, h) {
      return a * Math.sin(n / h * (Math.PI / 2)) + r;
    }, easeInOutSine: function(n, r, a, h) {
      return -a / 2 * (Math.cos(Math.PI * n / h) - 1) + r;
    }, easeInExpo: function(n, r, a, h) {
      return n === 0 ? r : a * Math.pow(2, 10 * (n / h - 1)) + r;
    }, easeOutExpo: function(n, r, a, h) {
      return n === h ? r + a : a * (1 - Math.pow(2, -10 * n / h)) + r;
    }, easeInOutExpo: function(n, r, a, h) {
      return n === 0 ? r : n === h ? r + a : (n /= h / 2) < 1 ? a / 2 * Math.pow(2, 10 * (n - 1)) + r : a / 2 * (2 - Math.pow(2, -10 * --n)) + r;
    }, easeInCirc: function(n, r, a, h) {
      return -a * (Math.sqrt(1 - (n /= h) * n) - 1) + r;
    }, easeOutCirc: function(n, r, a, h) {
      return a * Math.sqrt(1 - (n = n / h - 1) * n) + r;
    }, easeInOutCirc: function(n, r, a, h) {
      return (n /= h / 2) < 1 ? -a / 2 * (Math.sqrt(1 - n * n) - 1) + r : a / 2 * (Math.sqrt(1 - (n -= 2) * n) + 1) + r;
    }, easeInElastic: function(n, r, a, h) {
      var u = 0;
      return n === 0 ? r : (n /= h) === 1 ? r + a : (u || (u = 0.3 * h), -o(s(a, a, u, 1.70158), n, h) + r);
    }, easeOutElastic: function(n, r, a, h) {
      var u = 0;
      if (n === 0) return r;
      if ((n /= h) === 1) return r + a;
      u || (u = 0.3 * h);
      var d = s(a, a, u, 1.70158);
      return d.a * Math.pow(2, -10 * n) * Math.sin((n * h - d.s) * (2 * Math.PI) / d.p) + d.c + r;
    }, easeInOutElastic: function(n, r, a, h) {
      var u = 0;
      if (n === 0) return r;
      if ((n /= h / 2) === 2) return r + a;
      u || (u = h * (0.3 * 1.5));
      var d = s(a, a, u, 1.70158);
      return n < 1 ? -0.5 * o(d, n, h) + r : d.a * Math.pow(2, -10 * (n -= 1)) * Math.sin((n * h - d.s) * (2 * Math.PI) / d.p) * 0.5 + d.c + r;
    }, easeInBack: function(n, r, a, h, u) {
      return u === void 0 && (u = 1.70158), a * (n /= h) * n * ((u + 1) * n - u) + r;
    }, easeOutBack: function(n, r, a, h, u) {
      return u === void 0 && (u = 1.70158), a * ((n = n / h - 1) * n * ((u + 1) * n + u) + 1) + r;
    }, easeInOutBack: function(n, r, a, h, u) {
      return u === void 0 && (u = 1.70158), (n /= h / 2) < 1 ? a / 2 * (n * n * ((1 + (u *= 1.525)) * n - u)) + r : a / 2 * ((n -= 2) * n * ((1 + (u *= 1.525)) * n + u) + 2) + r;
    }, easeInBounce: l, easeOutBounce: p, easeInOutBounce: function(n, r, a, h) {
      return n < h / 2 ? 0.5 * l(2 * n, 0, a, h) + r : 0.5 * p(2 * n - h, 0, a, h) + 0.5 * a + r;
    } };
  }(), function(s) {
    var o = s.fabric || (s.fabric = {}), l = o.util.object.extend, p = o.util.object.clone, n = o.util.toFixed, r = o.util.parseUnit, a = o.util.multiplyTransformMatrices, h = { cx: "left", x: "left", r: "radius", cy: "top", y: "top", display: "visible", visibility: "visible", transform: "transformMatrix", "fill-opacity": "fillOpacity", "fill-rule": "fillRule", "font-family": "fontFamily", "font-size": "fontSize", "font-style": "fontStyle", "font-weight": "fontWeight", "letter-spacing": "charSpacing", "paint-order": "paintFirst", "stroke-dasharray": "strokeDashArray", "stroke-dashoffset": "strokeDashOffset", "stroke-linecap": "strokeLineCap", "stroke-linejoin": "strokeLineJoin", "stroke-miterlimit": "strokeMiterLimit", "stroke-opacity": "strokeOpacity", "stroke-width": "strokeWidth", "text-decoration": "textDecoration", "text-anchor": "textAnchor", opacity: "opacity", "clip-path": "clipPath", "clip-rule": "clipRule", "vector-effect": "strokeUniform", "image-rendering": "imageSmoothing" }, u = { stroke: "strokeOpacity", fill: "fillOpacity" }, d = "font-size", g = "clip-path";
    function y(A) {
      return A in h ? h[A] : A;
    }
    function x(A, T, D, X) {
      var $, B = Object.prototype.toString.call(T) === "[object Array]";
      if (A !== "fill" && A !== "stroke" || T !== "none") {
        if (A === "strokeUniform") return T === "non-scaling-stroke";
        if (A === "strokeDashArray") T = T === "none" ? null : T.replace(/,/g, " ").split(/\s+/).map(parseFloat);
        else if (A === "transformMatrix") T = D && D.transformMatrix ? a(D.transformMatrix, o.parseTransformAttribute(T)) : o.parseTransformAttribute(T);
        else if (A === "visible") T = T !== "none" && T !== "hidden", D && D.visible === !1 && (T = !1);
        else if (A === "opacity") T = parseFloat(T), D && D.opacity !== void 0 && (T *= D.opacity);
        else if (A === "textAnchor") T = T === "start" ? "left" : T === "end" ? "right" : "center";
        else if (A === "charSpacing") $ = r(T, X) / X * 1e3;
        else if (A === "paintFirst") {
          var j = T.indexOf("fill"), Y = T.indexOf("stroke");
          T = "fill", (j > -1 && Y > -1 && Y < j || j === -1 && Y > -1) && (T = "stroke");
        } else {
          if (A === "href" || A === "xlink:href" || A === "font") return T;
          if (A === "imageSmoothing") return T === "optimizeQuality";
          $ = B ? T.map(r) : r(T, X);
        }
      } else T = "";
      return !B && isNaN($) ? T : $;
    }
    function C(A) {
      return new RegExp("^(" + A.join("|") + ")\\b", "i");
    }
    function b(A, T) {
      var D, X, $, B, j = [];
      for ($ = 0, B = T.length; $ < B; $++) D = T[$], X = A.getElementsByTagName(D), j = j.concat(Array.prototype.slice.call(X));
      return j;
    }
    function M(A, T) {
      var D, X = !0;
      return (D = P(A, T.pop())) && T.length && (X = function($, B) {
        for (var j, Y = !0; $.parentNode && $.parentNode.nodeType === 1 && B.length; ) Y && (j = B.pop()), Y = P($ = $.parentNode, j);
        return B.length === 0;
      }(A, T)), D && X && T.length === 0;
    }
    function P(A, T) {
      var D, X, $ = A.nodeName, B = A.getAttribute("class"), j = A.getAttribute("id");
      if (D = new RegExp("^" + $, "i"), T = T.replace(D, ""), j && T.length && (D = new RegExp("#" + j + "(?![a-zA-Z\\-]+)", "i"), T = T.replace(D, "")), B && T.length) for (X = (B = B.split(" ")).length; X--; ) D = new RegExp("\\." + B[X] + "(?![a-zA-Z\\-]+)", "i"), T = T.replace(D, "");
      return T.length === 0;
    }
    function _(A, T) {
      var D;
      if (A.getElementById && (D = A.getElementById(T)), D) return D;
      var X, $, B, j = A.getElementsByTagName("*");
      for ($ = 0, B = j.length; $ < B; $++) if (T === (X = j[$]).getAttribute("id")) return X;
    }
    o.svgValidTagNamesRegEx = C(["path", "circle", "polygon", "polyline", "ellipse", "rect", "line", "image", "text"]), o.svgViewBoxElementsRegEx = C(["symbol", "image", "marker", "pattern", "view", "svg"]), o.svgInvalidAncestorsRegEx = C(["pattern", "defs", "symbol", "metadata", "clipPath", "mask", "desc"]), o.svgValidParentsRegEx = C(["symbol", "g", "a", "svg", "clipPath", "defs"]), o.cssRules = {}, o.gradientDefs = {}, o.clipPaths = {}, o.parseTransformAttribute = function() {
      function A(Y, I, U) {
        Y[U] = Math.tan(o.util.degreesToRadians(I[0]));
      }
      var T = o.iMatrix, D = o.reNum, X = o.commaWsp, $ = "(?:" + ("(?:(matrix)\\s*\\(\\s*(" + D + ")" + X + "(" + D + ")" + X + "(" + D + ")" + X + "(" + D + ")" + X + "(" + D + ")" + X + "(" + D + ")\\s*\\))") + "|" + ("(?:(translate)\\s*\\(\\s*(" + D + ")(?:" + X + "(" + D + "))?\\s*\\))") + "|" + ("(?:(scale)\\s*\\(\\s*(" + D + ")(?:" + X + "(" + D + "))?\\s*\\))") + "|" + ("(?:(rotate)\\s*\\(\\s*(" + D + ")(?:" + X + "(" + D + ")" + X + "(" + D + "))?\\s*\\))") + "|" + ("(?:(skewX)\\s*\\(\\s*(" + D + ")\\s*\\))") + "|" + ("(?:(skewY)\\s*\\(\\s*(" + D + ")\\s*\\))") + ")", B = new RegExp("^\\s*(?:" + ("(?:" + $ + "(?:" + X + "*" + $ + ")*)") + "?)\\s*$"), j = new RegExp($, "g");
      return function(Y) {
        var I = T.concat(), U = [];
        if (!Y || Y && !B.test(Y)) return I;
        Y.replace(j, function(ie) {
          var ee = new RegExp($).exec(ie).filter(function(se) {
            return !!se;
          }), le = ee[1], re = ee.slice(2).map(parseFloat);
          switch (le) {
            case "translate":
              (function(se, oe) {
                se[4] = oe[0], oe.length === 2 && (se[5] = oe[1]);
              })(I, re);
              break;
            case "rotate":
              re[0] = o.util.degreesToRadians(re[0]), function(se, oe) {
                var fe = o.util.cos(oe[0]), pe = o.util.sin(oe[0]), _e = 0, we = 0;
                oe.length === 3 && (_e = oe[1], we = oe[2]), se[0] = fe, se[1] = pe, se[2] = -pe, se[3] = fe, se[4] = _e - (fe * _e - pe * we), se[5] = we - (pe * _e + fe * we);
              }(I, re);
              break;
            case "scale":
              (function(se, oe) {
                var fe = oe[0], pe = oe.length === 2 ? oe[1] : oe[0];
                se[0] = fe, se[3] = pe;
              })(I, re);
              break;
            case "skewX":
              A(I, re, 2);
              break;
            case "skewY":
              A(I, re, 1);
              break;
            case "matrix":
              I = re;
          }
          U.push(I.concat()), I = T.concat();
        });
        for (var Q = U[0]; U.length > 1; ) U.shift(), Q = o.util.multiplyTransformMatrices(Q, U[0]);
        return Q;
      };
    }();
    var k = new RegExp("^\\s*(" + o.reNum + "+)\\s*,?\\s*(" + o.reNum + "+)\\s*,?\\s*(" + o.reNum + "+)\\s*,?\\s*(" + o.reNum + "+)\\s*$");
    function L(A) {
      if (!o.svgViewBoxElementsRegEx.test(A.nodeName)) return {};
      var T, D, X, $, B, j, Y = A.getAttribute("viewBox"), I = 1, U = 1, Q = A.getAttribute("width"), ie = A.getAttribute("height"), ee = A.getAttribute("x") || 0, le = A.getAttribute("y") || 0, re = A.getAttribute("preserveAspectRatio") || "", se = !Y || !(Y = Y.match(k)), oe = !Q || !ie || Q === "100%" || ie === "100%", fe = se && oe, pe = {}, _e = "", we = 0, Se = 0;
      if (pe.width = 0, pe.height = 0, pe.toBeParsed = fe, se && (ee || le) && A.parentNode && A.parentNode.nodeName !== "#document" && (_e = " translate(" + r(ee) + " " + r(le) + ") ", B = (A.getAttribute("transform") || "") + _e, A.setAttribute("transform", B), A.removeAttribute("x"), A.removeAttribute("y")), fe) return pe;
      if (se) return pe.width = r(Q), pe.height = r(ie), pe;
      if (T = -parseFloat(Y[1]), D = -parseFloat(Y[2]), X = parseFloat(Y[3]), $ = parseFloat(Y[4]), pe.minX = T, pe.minY = D, pe.viewBoxWidth = X, pe.viewBoxHeight = $, oe ? (pe.width = X, pe.height = $) : (pe.width = r(Q), pe.height = r(ie), I = pe.width / X, U = pe.height / $), (re = o.util.parsePreserveAspectRatioAttribute(re)).alignX !== "none" && (re.meetOrSlice === "meet" && (U = I = I > U ? U : I), re.meetOrSlice === "slice" && (U = I = I > U ? I : U), we = pe.width - X * I, Se = pe.height - $ * I, re.alignX === "Mid" && (we /= 2), re.alignY === "Mid" && (Se /= 2), re.alignX === "Min" && (we = 0), re.alignY === "Min" && (Se = 0)), I === 1 && U === 1 && T === 0 && D === 0 && ee === 0 && le === 0) return pe;
      if ((ee || le) && A.parentNode.nodeName !== "#document" && (_e = " translate(" + r(ee) + " " + r(le) + ") "), B = _e + " matrix(" + I + " 0 0 " + U + " " + (T * I + we) + " " + (D * U + Se) + ") ", A.nodeName === "svg") {
        for (j = A.ownerDocument.createElementNS(o.svgNS, "g"); A.firstChild; ) j.appendChild(A.firstChild);
        A.appendChild(j);
      } else (j = A).removeAttribute("x"), j.removeAttribute("y"), B = j.getAttribute("transform") + B;
      return j.setAttribute("transform", B), pe;
    }
    function H(A, T) {
      var D = "xlink:href", X = _(A, T.getAttribute(D).substr(1));
      if (X && X.getAttribute(D) && H(A, X), ["gradientTransform", "x1", "x2", "y1", "y2", "gradientUnits", "cx", "cy", "r", "fx", "fy"].forEach(function(B) {
        X && !T.hasAttribute(B) && X.hasAttribute(B) && T.setAttribute(B, X.getAttribute(B));
      }), !T.children.length) for (var $ = X.cloneNode(!0); $.firstChild; ) T.appendChild($.firstChild);
      T.removeAttribute(D);
    }
    o.parseSVGDocument = function(A, T, D, X) {
      if (A) {
        (function(ee) {
          for (var le = b(ee, ["use", "svg:use"]), re = 0; le.length && re < le.length; ) {
            var se = le[re], oe = se.getAttribute("xlink:href") || se.getAttribute("href");
            if (oe === null) return;
            var fe, pe, _e, we, Se = oe.substr(1), Xe = se.getAttribute("x") || 0, De = se.getAttribute("y") || 0, Pe = _(ee, Se).cloneNode(!0), et = (Pe.getAttribute("transform") || "") + " translate(" + Xe + ", " + De + ")", dt = le.length, lt = o.svgNS;
            if (L(Pe), /^svg$/i.test(Pe.nodeName)) {
              var Ti = Pe.ownerDocument.createElementNS(lt, "g");
              for (pe = 0, we = (_e = Pe.attributes).length; pe < we; pe++) fe = _e.item(pe), Ti.setAttributeNS(lt, fe.nodeName, fe.nodeValue);
              for (; Pe.firstChild; ) Ti.appendChild(Pe.firstChild);
              Pe = Ti;
            }
            for (pe = 0, we = (_e = se.attributes).length; pe < we; pe++) (fe = _e.item(pe)).nodeName !== "x" && fe.nodeName !== "y" && fe.nodeName !== "xlink:href" && fe.nodeName !== "href" && (fe.nodeName === "transform" ? et = fe.nodeValue + " " + et : Pe.setAttribute(fe.nodeName, fe.nodeValue));
            Pe.setAttribute("transform", et), Pe.setAttribute("instantiated_by_use", "1"), Pe.removeAttribute("id"), se.parentNode.replaceChild(Pe, se), le.length === dt && re++;
          }
        })(A);
        var $, B, j = o.Object.__uid++, Y = L(A), I = o.util.toArray(A.getElementsByTagName("*"));
        if (Y.crossOrigin = X && X.crossOrigin, Y.svgUid = j, I.length === 0 && o.isLikelyNode) {
          var U = [];
          for ($ = 0, B = (I = A.selectNodes('//*[name(.)!="svg"]')).length; $ < B; $++) U[$] = I[$];
          I = U;
        }
        var Q = I.filter(function(ee) {
          return L(ee), o.svgValidTagNamesRegEx.test(ee.nodeName.replace("svg:", "")) && !function(le, re) {
            for (; le && (le = le.parentNode); ) if (le.nodeName && re.test(le.nodeName.replace("svg:", "")) && !le.getAttribute("instantiated_by_use")) return !0;
            return !1;
          }(ee, o.svgInvalidAncestorsRegEx);
        });
        if (!Q || Q && !Q.length) T && T([], {});
        else {
          var ie = {};
          I.filter(function(ee) {
            return ee.nodeName.replace("svg:", "") === "clipPath";
          }).forEach(function(ee) {
            var le = ee.getAttribute("id");
            ie[le] = o.util.toArray(ee.getElementsByTagName("*")).filter(function(re) {
              return o.svgValidTagNamesRegEx.test(re.nodeName.replace("svg:", ""));
            });
          }), o.gradientDefs[j] = o.getGradientDefs(A), o.cssRules[j] = o.getCSSRules(A), o.clipPaths[j] = ie, o.parseElements(Q, function(ee, le) {
            T && (T(ee, Y, le, I), delete o.gradientDefs[j], delete o.cssRules[j], delete o.clipPaths[j]);
          }, p(Y), D, X);
        }
      }
    };
    var W = new RegExp("(normal|italic)?\\s*(normal|small-caps)?\\s*(normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900)?\\s*(" + o.reNum + "(?:px|cm|mm|em|pt|pc|in)*)(?:\\/(normal|" + o.reNum + "))?\\s+(.*)");
    l(o, { parseFontDeclaration: function(A, T) {
      var D = A.match(W);
      if (D) {
        var X = D[1], $ = D[3], B = D[4], j = D[5], Y = D[6];
        X && (T.fontStyle = X), $ && (T.fontWeight = isNaN(parseFloat($)) ? $ : parseFloat($)), B && (T.fontSize = r(B)), Y && (T.fontFamily = Y), j && (T.lineHeight = j === "normal" ? 1 : j);
      }
    }, getGradientDefs: function(A) {
      var T, D = b(A, ["linearGradient", "radialGradient", "svg:linearGradient", "svg:radialGradient"]), X = 0, $ = {};
      for (X = D.length; X--; ) (T = D[X]).getAttribute("xlink:href") && H(A, T), $[T.getAttribute("id")] = T;
      return $;
    }, parseAttributes: function(A, T, D) {
      if (A) {
        var X, $, B, j = {};
        D === void 0 && (D = A.getAttribute("svgUid")), A.parentNode && o.svgValidParentsRegEx.test(A.parentNode.nodeName) && (j = o.parseAttributes(A.parentNode, T, D));
        var Y = T.reduce(function(re, se) {
          return (X = A.getAttribute(se)) && (re[se] = X), re;
        }, {}), I = l(function(re, se) {
          var oe = {};
          for (var fe in o.cssRules[se]) if (M(re, fe.split(" "))) for (var pe in o.cssRules[se][fe]) oe[pe] = o.cssRules[se][fe][pe];
          return oe;
        }(A, D), o.parseStyleAttribute(A));
        Y = l(Y, I), I[g] && A.setAttribute(g, I[g]), $ = B = j.fontSize || o.Text.DEFAULT_SVG_FONT_SIZE, Y[d] && (Y[d] = $ = r(Y[d], B));
        var U, Q, ie = {};
        for (var ee in Y) Q = x(U = y(ee), Y[ee], j, $), ie[U] = Q;
        ie && ie.font && o.parseFontDeclaration(ie.font, ie);
        var le = l(j, ie);
        return o.svgValidParentsRegEx.test(A.nodeName) ? le : function(re) {
          for (var se in u) if (re[u[se]] !== void 0 && re[se] !== "") {
            if (re[se] === void 0) {
              if (!o.Object.prototype[se]) continue;
              re[se] = o.Object.prototype[se];
            }
            if (re[se].indexOf("url(") !== 0) {
              var oe = new o.Color(re[se]);
              re[se] = oe.setAlpha(n(oe.getAlpha() * re[u[se]], 2)).toRgba();
            }
          }
          return re;
        }(le);
      }
    }, parseElements: function(A, T, D, X, $) {
      new o.ElementsParser(A, T, D, X, $).parse();
    }, parseStyleAttribute: function(A) {
      var T = {}, D = A.getAttribute("style");
      return D && (typeof D == "string" ? function(X, $) {
        var B, j;
        X.replace(/;\s*$/, "").split(";").forEach(function(Y) {
          var I = Y.split(":");
          B = I[0].trim().toLowerCase(), j = I[1].trim(), $[B] = j;
        });
      }(D, T) : function(X, $) {
        var B, j;
        for (var Y in X) X[Y] !== void 0 && (B = Y.toLowerCase(), j = X[Y], $[B] = j);
      }(D, T)), T;
    }, parsePointsAttribute: function(A) {
      if (!A) return null;
      var T, D, X = [];
      for (T = 0, D = (A = (A = A.replace(/,/g, " ").trim()).split(/\s+/)).length; T < D; T += 2) X.push({ x: parseFloat(A[T]), y: parseFloat(A[T + 1]) });
      return X;
    }, getCSSRules: function(A) {
      var T, D, X = A.getElementsByTagName("style"), $ = {};
      for (T = 0, D = X.length; T < D; T++) {
        var B = X[T].textContent;
        (B = B.replace(/\/\*[\s\S]*?\*\//g, "")).trim() !== "" && B.match(/[^{]*\{[\s\S]*?\}/g).map(function(j) {
          return j.trim();
        }).forEach(function(j) {
          var Y = j.match(/([\s\S]*?)\s*\{([^}]*)\}/), I = {}, U = Y[2].trim().replace(/;$/, "").split(/\s*;\s*/);
          for (T = 0, D = U.length; T < D; T++) {
            var Q = U[T].split(/\s*:\s*/), ie = Q[0], ee = Q[1];
            I[ie] = ee;
          }
          (j = Y[1]).split(",").forEach(function(le) {
            (le = le.replace(/^svg/i, "").trim()) !== "" && ($[le] ? o.util.object.extend($[le], I) : $[le] = o.util.object.clone(I));
          });
        });
      }
      return $;
    }, loadSVGFromURL: function(A, T, D, X) {
      A = A.replace(/^\n\s*/, "").trim(), new o.util.request(A, { method: "get", onComplete: function($) {
        var B = $.responseXML;
        if (!B || !B.documentElement) return T && T(null), !1;
        o.parseSVGDocument(B.documentElement, function(j, Y, I, U) {
          T && T(j, Y, I, U);
        }, D, X);
      } });
    }, loadSVGFromString: function(A, T, D, X) {
      var $ = new o.window.DOMParser().parseFromString(A.trim(), "text/xml");
      o.parseSVGDocument($.documentElement, function(B, j, Y, I) {
        T(B, j, Y, I);
      }, D, X);
    } });
  }(e), v.ElementsParser = function(s, o, l, p, n, r) {
    this.elements = s, this.callback = o, this.options = l, this.reviver = p, this.svgUid = l && l.svgUid || 0, this.parsingOptions = n, this.regexUrl = /^url\(['"]?#([^'"]+)['"]?\)/g, this.doc = r;
  }, (G = v.ElementsParser.prototype).parse = function() {
    this.instances = new Array(this.elements.length), this.numElements = this.elements.length, this.createObjects();
  }, G.createObjects = function() {
    var s = this;
    this.elements.forEach(function(o, l) {
      o.setAttribute("svgUid", s.svgUid), s.createObject(o, l);
    });
  }, G.findTag = function(s) {
    return v[v.util.string.capitalize(s.tagName.replace("svg:", ""))];
  }, G.createObject = function(s, o) {
    var l = this.findTag(s);
    if (l && l.fromElement) try {
      l.fromElement(s, this.createCallback(o, s), this.options);
    } catch (p) {
      v.log(p);
    }
    else this.checkIfDone();
  }, G.createCallback = function(s, o) {
    var l = this;
    return function(p) {
      var n;
      l.resolveGradient(p, o, "fill"), l.resolveGradient(p, o, "stroke"), p instanceof v.Image && p._originalElement && (n = p.parsePreserveAspectRatioAttribute(o)), p._removeTransformMatrix(n), l.resolveClipPath(p, o), l.reviver && l.reviver(o, p), l.instances[s] = p, l.checkIfDone();
    };
  }, G.extractPropertyDefinition = function(s, o, l) {
    var p = s[o], n = this.regexUrl;
    if (n.test(p)) {
      n.lastIndex = 0;
      var r = n.exec(p)[1];
      return n.lastIndex = 0, v[l][this.svgUid][r];
    }
  }, G.resolveGradient = function(s, o, l) {
    var p = this.extractPropertyDefinition(s, l, "gradientDefs");
    if (p) {
      var n = o.getAttribute(l + "-opacity"), r = v.Gradient.fromElement(p, s, n, this.options);
      s.set(l, r);
    }
  }, G.createClipPathCallback = function(s, o) {
    return function(l) {
      l._removeTransformMatrix(), l.fillRule = l.clipRule, o.push(l);
    };
  }, G.resolveClipPath = function(s, o) {
    var l, p, n, r, a = this.extractPropertyDefinition(s, "clipPath", "clipPaths");
    if (a) {
      n = [], p = v.util.invertTransform(s.calcTransformMatrix());
      for (var h = a[0].parentNode, u = o; u.parentNode && u.getAttribute("clip-path") !== s.clipPath; ) u = u.parentNode;
      u.parentNode.appendChild(h);
      for (var d = 0; d < a.length; d++) l = a[d], this.findTag(l).fromElement(l, this.createClipPathCallback(s, n), this.options);
      a = n.length === 1 ? n[0] : new v.Group(n), r = v.util.multiplyTransformMatrices(p, a.calcTransformMatrix()), a.clipPath && this.resolveClipPath(a, u);
      var g = v.util.qrDecompose(r);
      a.flipX = !1, a.flipY = !1, a.set("scaleX", g.scaleX), a.set("scaleY", g.scaleY), a.angle = g.angle, a.skewX = g.skewX, a.skewY = 0, a.setPositionByOrigin({ x: g.translateX, y: g.translateY }, "center", "center"), s.clipPath = a;
    } else delete s.clipPath;
  }, G.checkIfDone = function() {
    --this.numElements == 0 && (this.instances = this.instances.filter(function(s) {
      return s != null;
    }), this.callback(this.instances, this.elements));
  }, function(s) {
    var o = s.fabric || (s.fabric = {});
    function l(p, n) {
      this.x = p, this.y = n;
    }
    o.Point ? o.warn("fabric.Point is already defined") : (o.Point = l, l.prototype = { type: "point", constructor: l, add: function(p) {
      return new l(this.x + p.x, this.y + p.y);
    }, addEquals: function(p) {
      return this.x += p.x, this.y += p.y, this;
    }, scalarAdd: function(p) {
      return new l(this.x + p, this.y + p);
    }, scalarAddEquals: function(p) {
      return this.x += p, this.y += p, this;
    }, subtract: function(p) {
      return new l(this.x - p.x, this.y - p.y);
    }, subtractEquals: function(p) {
      return this.x -= p.x, this.y -= p.y, this;
    }, scalarSubtract: function(p) {
      return new l(this.x - p, this.y - p);
    }, scalarSubtractEquals: function(p) {
      return this.x -= p, this.y -= p, this;
    }, multiply: function(p) {
      return new l(this.x * p, this.y * p);
    }, multiplyEquals: function(p) {
      return this.x *= p, this.y *= p, this;
    }, divide: function(p) {
      return new l(this.x / p, this.y / p);
    }, divideEquals: function(p) {
      return this.x /= p, this.y /= p, this;
    }, eq: function(p) {
      return this.x === p.x && this.y === p.y;
    }, lt: function(p) {
      return this.x < p.x && this.y < p.y;
    }, lte: function(p) {
      return this.x <= p.x && this.y <= p.y;
    }, gt: function(p) {
      return this.x > p.x && this.y > p.y;
    }, gte: function(p) {
      return this.x >= p.x && this.y >= p.y;
    }, lerp: function(p, n) {
      return n === void 0 && (n = 0.5), n = Math.max(Math.min(1, n), 0), new l(this.x + (p.x - this.x) * n, this.y + (p.y - this.y) * n);
    }, distanceFrom: function(p) {
      var n = this.x - p.x, r = this.y - p.y;
      return Math.sqrt(n * n + r * r);
    }, midPointFrom: function(p) {
      return this.lerp(p);
    }, min: function(p) {
      return new l(Math.min(this.x, p.x), Math.min(this.y, p.y));
    }, max: function(p) {
      return new l(Math.max(this.x, p.x), Math.max(this.y, p.y));
    }, toString: function() {
      return this.x + "," + this.y;
    }, setXY: function(p, n) {
      return this.x = p, this.y = n, this;
    }, setX: function(p) {
      return this.x = p, this;
    }, setY: function(p) {
      return this.y = p, this;
    }, setFromPoint: function(p) {
      return this.x = p.x, this.y = p.y, this;
    }, swap: function(p) {
      var n = this.x, r = this.y;
      this.x = p.x, this.y = p.y, p.x = n, p.y = r;
    }, clone: function() {
      return new l(this.x, this.y);
    } });
  }(e), function(s) {
    var o = s.fabric || (s.fabric = {});
    function l(p) {
      this.status = p, this.points = [];
    }
    o.Intersection ? o.warn("fabric.Intersection is already defined") : (o.Intersection = l, o.Intersection.prototype = { constructor: l, appendPoint: function(p) {
      return this.points.push(p), this;
    }, appendPoints: function(p) {
      return this.points = this.points.concat(p), this;
    } }, o.Intersection.intersectLineLine = function(p, n, r, a) {
      var h, u = (a.x - r.x) * (p.y - r.y) - (a.y - r.y) * (p.x - r.x), d = (n.x - p.x) * (p.y - r.y) - (n.y - p.y) * (p.x - r.x), g = (a.y - r.y) * (n.x - p.x) - (a.x - r.x) * (n.y - p.y);
      if (g !== 0) {
        var y = u / g, x = d / g;
        0 <= y && y <= 1 && 0 <= x && x <= 1 ? (h = new l("Intersection")).appendPoint(new o.Point(p.x + y * (n.x - p.x), p.y + y * (n.y - p.y))) : h = new l();
      } else h = new l(u === 0 || d === 0 ? "Coincident" : "Parallel");
      return h;
    }, o.Intersection.intersectLinePolygon = function(p, n, r) {
      var a, h, u, d, g = new l(), y = r.length;
      for (d = 0; d < y; d++) a = r[d], h = r[(d + 1) % y], u = l.intersectLineLine(p, n, a, h), g.appendPoints(u.points);
      return g.points.length > 0 && (g.status = "Intersection"), g;
    }, o.Intersection.intersectPolygonPolygon = function(p, n) {
      var r, a = new l(), h = p.length;
      for (r = 0; r < h; r++) {
        var u = p[r], d = p[(r + 1) % h], g = l.intersectLinePolygon(u, d, n);
        a.appendPoints(g.points);
      }
      return a.points.length > 0 && (a.status = "Intersection"), a;
    }, o.Intersection.intersectPolygonRectangle = function(p, n, r) {
      var a = n.min(r), h = n.max(r), u = new o.Point(h.x, a.y), d = new o.Point(a.x, h.y), g = l.intersectLinePolygon(a, u, p), y = l.intersectLinePolygon(u, h, p), x = l.intersectLinePolygon(h, d, p), C = l.intersectLinePolygon(d, a, p), b = new l();
      return b.appendPoints(g.points), b.appendPoints(y.points), b.appendPoints(x.points), b.appendPoints(C.points), b.points.length > 0 && (b.status = "Intersection"), b;
    });
  }(e), function(s) {
    var o = s.fabric || (s.fabric = {});
    function l(n) {
      n ? this._tryParsingColor(n) : this.setSource([0, 0, 0, 1]);
    }
    function p(n, r, a) {
      return a < 0 && (a += 1), a > 1 && (a -= 1), a < 1 / 6 ? n + 6 * (r - n) * a : a < 0.5 ? r : a < 2 / 3 ? n + (r - n) * (2 / 3 - a) * 6 : n;
    }
    o.Color ? o.warn("fabric.Color is already defined.") : (o.Color = l, o.Color.prototype = { _tryParsingColor: function(n) {
      var r;
      n in l.colorNameMap && (n = l.colorNameMap[n]), n === "transparent" && (r = [255, 255, 255, 0]), r || (r = l.sourceFromHex(n)), r || (r = l.sourceFromRgb(n)), r || (r = l.sourceFromHsl(n)), r || (r = [0, 0, 0, 1]), r && this.setSource(r);
    }, _rgbToHsl: function(n, r, a) {
      n /= 255, r /= 255, a /= 255;
      var h, u, d, g = o.util.array.max([n, r, a]), y = o.util.array.min([n, r, a]);
      if (d = (g + y) / 2, g === y) h = u = 0;
      else {
        var x = g - y;
        switch (u = d > 0.5 ? x / (2 - g - y) : x / (g + y), g) {
          case n:
            h = (r - a) / x + (r < a ? 6 : 0);
            break;
          case r:
            h = (a - n) / x + 2;
            break;
          case a:
            h = (n - r) / x + 4;
        }
        h /= 6;
      }
      return [Math.round(360 * h), Math.round(100 * u), Math.round(100 * d)];
    }, getSource: function() {
      return this._source;
    }, setSource: function(n) {
      this._source = n;
    }, toRgb: function() {
      var n = this.getSource();
      return "rgb(" + n[0] + "," + n[1] + "," + n[2] + ")";
    }, toRgba: function() {
      var n = this.getSource();
      return "rgba(" + n[0] + "," + n[1] + "," + n[2] + "," + n[3] + ")";
    }, toHsl: function() {
      var n = this.getSource(), r = this._rgbToHsl(n[0], n[1], n[2]);
      return "hsl(" + r[0] + "," + r[1] + "%," + r[2] + "%)";
    }, toHsla: function() {
      var n = this.getSource(), r = this._rgbToHsl(n[0], n[1], n[2]);
      return "hsla(" + r[0] + "," + r[1] + "%," + r[2] + "%," + n[3] + ")";
    }, toHex: function() {
      var n, r, a, h = this.getSource();
      return n = (n = h[0].toString(16)).length === 1 ? "0" + n : n, r = (r = h[1].toString(16)).length === 1 ? "0" + r : r, a = (a = h[2].toString(16)).length === 1 ? "0" + a : a, n.toUpperCase() + r.toUpperCase() + a.toUpperCase();
    }, toHexa: function() {
      var n, r = this.getSource();
      return n = (n = (n = Math.round(255 * r[3])).toString(16)).length === 1 ? "0" + n : n, this.toHex() + n.toUpperCase();
    }, getAlpha: function() {
      return this.getSource()[3];
    }, setAlpha: function(n) {
      var r = this.getSource();
      return r[3] = n, this.setSource(r), this;
    }, toGrayscale: function() {
      var n = this.getSource(), r = parseInt((0.3 * n[0] + 0.59 * n[1] + 0.11 * n[2]).toFixed(0), 10), a = n[3];
      return this.setSource([r, r, r, a]), this;
    }, toBlackWhite: function(n) {
      var r = this.getSource(), a = (0.3 * r[0] + 0.59 * r[1] + 0.11 * r[2]).toFixed(0), h = r[3];
      return n = n || 127, a = Number(a) < Number(n) ? 0 : 255, this.setSource([a, a, a, h]), this;
    }, overlayWith: function(n) {
      n instanceof l || (n = new l(n));
      var r, a = [], h = this.getAlpha(), u = this.getSource(), d = n.getSource();
      for (r = 0; r < 3; r++) a.push(Math.round(0.5 * u[r] + 0.5 * d[r]));
      return a[3] = h, this.setSource(a), this;
    } }, o.Color.reRGBa = /^rgba?\(\s*(\d{1,3}(?:\.\d+)?\%?)\s*,\s*(\d{1,3}(?:\.\d+)?\%?)\s*,\s*(\d{1,3}(?:\.\d+)?\%?)\s*(?:\s*,\s*((?:\d*\.?\d+)?)\s*)?\)$/i, o.Color.reHSLa = /^hsla?\(\s*(\d{1,3})\s*,\s*(\d{1,3}\%)\s*,\s*(\d{1,3}\%)\s*(?:\s*,\s*(\d+(?:\.\d+)?)\s*)?\)$/i, o.Color.reHex = /^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i, o.Color.colorNameMap = { aliceblue: "#F0F8FF", antiquewhite: "#FAEBD7", aqua: "#00FFFF", aquamarine: "#7FFFD4", azure: "#F0FFFF", beige: "#F5F5DC", bisque: "#FFE4C4", black: "#000000", blanchedalmond: "#FFEBCD", blue: "#0000FF", blueviolet: "#8A2BE2", brown: "#A52A2A", burlywood: "#DEB887", cadetblue: "#5F9EA0", chartreuse: "#7FFF00", chocolate: "#D2691E", coral: "#FF7F50", cornflowerblue: "#6495ED", cornsilk: "#FFF8DC", crimson: "#DC143C", cyan: "#00FFFF", darkblue: "#00008B", darkcyan: "#008B8B", darkgoldenrod: "#B8860B", darkgray: "#A9A9A9", darkgrey: "#A9A9A9", darkgreen: "#006400", darkkhaki: "#BDB76B", darkmagenta: "#8B008B", darkolivegreen: "#556B2F", darkorange: "#FF8C00", darkorchid: "#9932CC", darkred: "#8B0000", darksalmon: "#E9967A", darkseagreen: "#8FBC8F", darkslateblue: "#483D8B", darkslategray: "#2F4F4F", darkslategrey: "#2F4F4F", darkturquoise: "#00CED1", darkviolet: "#9400D3", deeppink: "#FF1493", deepskyblue: "#00BFFF", dimgray: "#696969", dimgrey: "#696969", dodgerblue: "#1E90FF", firebrick: "#B22222", floralwhite: "#FFFAF0", forestgreen: "#228B22", fuchsia: "#FF00FF", gainsboro: "#DCDCDC", ghostwhite: "#F8F8FF", gold: "#FFD700", goldenrod: "#DAA520", gray: "#808080", grey: "#808080", green: "#008000", greenyellow: "#ADFF2F", honeydew: "#F0FFF0", hotpink: "#FF69B4", indianred: "#CD5C5C", indigo: "#4B0082", ivory: "#FFFFF0", khaki: "#F0E68C", lavender: "#E6E6FA", lavenderblush: "#FFF0F5", lawngreen: "#7CFC00", lemonchiffon: "#FFFACD", lightblue: "#ADD8E6", lightcoral: "#F08080", lightcyan: "#E0FFFF", lightgoldenrodyellow: "#FAFAD2", lightgray: "#D3D3D3", lightgrey: "#D3D3D3", lightgreen: "#90EE90", lightpink: "#FFB6C1", lightsalmon: "#FFA07A", lightseagreen: "#20B2AA", lightskyblue: "#87CEFA", lightslategray: "#778899", lightslategrey: "#778899", lightsteelblue: "#B0C4DE", lightyellow: "#FFFFE0", lime: "#00FF00", limegreen: "#32CD32", linen: "#FAF0E6", magenta: "#FF00FF", maroon: "#800000", mediumaquamarine: "#66CDAA", mediumblue: "#0000CD", mediumorchid: "#BA55D3", mediumpurple: "#9370DB", mediumseagreen: "#3CB371", mediumslateblue: "#7B68EE", mediumspringgreen: "#00FA9A", mediumturquoise: "#48D1CC", mediumvioletred: "#C71585", midnightblue: "#191970", mintcream: "#F5FFFA", mistyrose: "#FFE4E1", moccasin: "#FFE4B5", navajowhite: "#FFDEAD", navy: "#000080", oldlace: "#FDF5E6", olive: "#808000", olivedrab: "#6B8E23", orange: "#FFA500", orangered: "#FF4500", orchid: "#DA70D6", palegoldenrod: "#EEE8AA", palegreen: "#98FB98", paleturquoise: "#AFEEEE", palevioletred: "#DB7093", papayawhip: "#FFEFD5", peachpuff: "#FFDAB9", peru: "#CD853F", pink: "#FFC0CB", plum: "#DDA0DD", powderblue: "#B0E0E6", purple: "#800080", rebeccapurple: "#663399", red: "#FF0000", rosybrown: "#BC8F8F", royalblue: "#4169E1", saddlebrown: "#8B4513", salmon: "#FA8072", sandybrown: "#F4A460", seagreen: "#2E8B57", seashell: "#FFF5EE", sienna: "#A0522D", silver: "#C0C0C0", skyblue: "#87CEEB", slateblue: "#6A5ACD", slategray: "#708090", slategrey: "#708090", snow: "#FFFAFA", springgreen: "#00FF7F", steelblue: "#4682B4", tan: "#D2B48C", teal: "#008080", thistle: "#D8BFD8", tomato: "#FF6347", turquoise: "#40E0D0", violet: "#EE82EE", wheat: "#F5DEB3", white: "#FFFFFF", whitesmoke: "#F5F5F5", yellow: "#FFFF00", yellowgreen: "#9ACD32" }, o.Color.fromRgb = function(n) {
      return l.fromSource(l.sourceFromRgb(n));
    }, o.Color.sourceFromRgb = function(n) {
      var r = n.match(l.reRGBa);
      if (r) {
        var a = parseInt(r[1], 10) / (/%$/.test(r[1]) ? 100 : 1) * (/%$/.test(r[1]) ? 255 : 1), h = parseInt(r[2], 10) / (/%$/.test(r[2]) ? 100 : 1) * (/%$/.test(r[2]) ? 255 : 1), u = parseInt(r[3], 10) / (/%$/.test(r[3]) ? 100 : 1) * (/%$/.test(r[3]) ? 255 : 1);
        return [parseInt(a, 10), parseInt(h, 10), parseInt(u, 10), r[4] ? parseFloat(r[4]) : 1];
      }
    }, o.Color.fromRgba = l.fromRgb, o.Color.fromHsl = function(n) {
      return l.fromSource(l.sourceFromHsl(n));
    }, o.Color.sourceFromHsl = function(n) {
      var r = n.match(l.reHSLa);
      if (r) {
        var a, h, u, d = (parseFloat(r[1]) % 360 + 360) % 360 / 360, g = parseFloat(r[2]) / (/%$/.test(r[2]) ? 100 : 1), y = parseFloat(r[3]) / (/%$/.test(r[3]) ? 100 : 1);
        if (g === 0) a = h = u = y;
        else {
          var x = y <= 0.5 ? y * (g + 1) : y + g - y * g, C = 2 * y - x;
          a = p(C, x, d + 1 / 3), h = p(C, x, d), u = p(C, x, d - 1 / 3);
        }
        return [Math.round(255 * a), Math.round(255 * h), Math.round(255 * u), r[4] ? parseFloat(r[4]) : 1];
      }
    }, o.Color.fromHsla = l.fromHsl, o.Color.fromHex = function(n) {
      return l.fromSource(l.sourceFromHex(n));
    }, o.Color.sourceFromHex = function(n) {
      if (n.match(l.reHex)) {
        var r = n.slice(n.indexOf("#") + 1), a = r.length === 3 || r.length === 4, h = r.length === 8 || r.length === 4, u = a ? r.charAt(0) + r.charAt(0) : r.substring(0, 2), d = a ? r.charAt(1) + r.charAt(1) : r.substring(2, 4), g = a ? r.charAt(2) + r.charAt(2) : r.substring(4, 6), y = h ? a ? r.charAt(3) + r.charAt(3) : r.substring(6, 8) : "FF";
        return [parseInt(u, 16), parseInt(d, 16), parseInt(g, 16), parseFloat((parseInt(y, 16) / 255).toFixed(2))];
      }
    }, o.Color.fromSource = function(n) {
      var r = new l();
      return r.setSource(n), r;
    });
  }(e), function(s) {
    var o = s.fabric || (s.fabric = {}), l = ["e", "se", "s", "sw", "w", "nw", "n", "ne", "e"], p = ["ns", "nesw", "ew", "nwse"], n = {}, r = "left", a = "top", h = "right", u = "bottom", d = "center", g = { top: u, bottom: a, left: h, right: r, center: d }, y = o.util.radiansToDegrees, x = Math.sign || function(B) {
      return (B > 0) - (B < 0) || +B;
    };
    function C(B, j) {
      var Y = B.angle + y(Math.atan2(j.y, j.x)) + 360;
      return Math.round(Y % 360 / 45);
    }
    function b(B, j) {
      var Y = j.transform.target, I = Y.canvas, U = o.util.object.clone(j);
      U.target = Y, I && I.fire("object:" + B, U), Y.fire(B, j);
    }
    function M(B, j) {
      var Y = j.canvas, I = B[Y.uniScaleKey];
      return Y.uniformScaling && !I || !Y.uniformScaling && I;
    }
    function P(B) {
      return B.originX === d && B.originY === d;
    }
    function _(B, j, Y) {
      var I = B.lockScalingX, U = B.lockScalingY;
      return !(!I || !U) || !(j || !I && !U || !Y) || !(!I || j !== "x") || !(!U || j !== "y");
    }
    function k(B, j, Y, I) {
      return { e: B, transform: j, pointer: { x: Y, y: I } };
    }
    function L(B) {
      return function(j, Y, I, U) {
        var Q = Y.target, ie = Q.getCenterPoint(), ee = Q.translateToOriginPoint(ie, Y.originX, Y.originY), le = B(j, Y, I, U);
        return Q.setPositionByOrigin(ee, Y.originX, Y.originY), le;
      };
    }
    function H(B, j) {
      return function(Y, I, U, Q) {
        var ie = j(Y, I, U, Q);
        return ie && b(B, k(Y, I, U, Q)), ie;
      };
    }
    function W(B, j, Y, I, U) {
      var Q = B.target, ie = Q.controls[B.corner], ee = Q.canvas.getZoom(), le = Q.padding / ee, re = Q.toLocalPoint(new o.Point(I, U), j, Y);
      return re.x >= le && (re.x -= le), re.x <= -le && (re.x += le), re.y >= le && (re.y -= le), re.y <= le && (re.y += le), re.x -= ie.offsetX, re.y -= ie.offsetY, re;
    }
    function A(B) {
      return B.flipX !== B.flipY;
    }
    function T(B, j, Y, I, U) {
      if (B[j] !== 0) {
        var Q = U / B._getTransformedDimensions()[I] * B[Y];
        B.set(Y, Q);
      }
    }
    function D(B, j, Y, I) {
      var U, Q = j.target, ie = Q._getTransformedDimensions(0, Q.skewY), ee = W(j, j.originX, j.originY, Y, I), le = Math.abs(2 * ee.x) - ie.x, re = Q.skewX;
      le < 2 ? U = 0 : (U = y(Math.atan2(le / Q.scaleX, ie.y / Q.scaleY)), j.originX === r && j.originY === u && (U = -U), j.originX === h && j.originY === a && (U = -U), A(Q) && (U = -U));
      var se = re !== U;
      if (se) {
        var oe = Q._getTransformedDimensions().y;
        Q.set("skewX", U), T(Q, "skewY", "scaleY", "y", oe);
      }
      return se;
    }
    function X(B, j, Y, I) {
      var U, Q = j.target, ie = Q._getTransformedDimensions(Q.skewX, 0), ee = W(j, j.originX, j.originY, Y, I), le = Math.abs(2 * ee.y) - ie.y, re = Q.skewY;
      le < 2 ? U = 0 : (U = y(Math.atan2(le / Q.scaleY, ie.x / Q.scaleX)), j.originX === r && j.originY === u && (U = -U), j.originX === h && j.originY === a && (U = -U), A(Q) && (U = -U));
      var se = re !== U;
      if (se) {
        var oe = Q._getTransformedDimensions().x;
        Q.set("skewY", U), T(Q, "skewX", "scaleX", "x", oe);
      }
      return se;
    }
    function $(B, j, Y, I, U) {
      U = U || {};
      var Q, ie, ee, le, re, se, oe = j.target, fe = oe.lockScalingX, pe = oe.lockScalingY, _e = U.by, we = M(B, oe), Se = _(oe, _e, we), Xe = j.gestureScale;
      if (Se) return !1;
      if (Xe) ie = j.scaleX * Xe, ee = j.scaleY * Xe;
      else {
        if (Q = W(j, j.originX, j.originY, Y, I), re = _e !== "y" ? x(Q.x) : 1, se = _e !== "x" ? x(Q.y) : 1, j.signX || (j.signX = re), j.signY || (j.signY = se), oe.lockScalingFlip && (j.signX !== re || j.signY !== se)) return !1;
        if (le = oe._getTransformedDimensions(), we && !_e) {
          var De = Math.abs(Q.x) + Math.abs(Q.y), Pe = j.original, et = De / (Math.abs(le.x * Pe.scaleX / oe.scaleX) + Math.abs(le.y * Pe.scaleY / oe.scaleY));
          ie = Pe.scaleX * et, ee = Pe.scaleY * et;
        } else ie = Math.abs(Q.x * oe.scaleX / le.x), ee = Math.abs(Q.y * oe.scaleY / le.y);
        P(j) && (ie *= 2, ee *= 2), j.signX !== re && _e !== "y" && (j.originX = g[j.originX], ie *= -1, j.signX = re), j.signY !== se && _e !== "x" && (j.originY = g[j.originY], ee *= -1, j.signY = se);
      }
      var dt = oe.scaleX, lt = oe.scaleY;
      return _e ? (_e === "x" && oe.set("scaleX", ie), _e === "y" && oe.set("scaleY", ee)) : (!fe && oe.set("scaleX", ie), !pe && oe.set("scaleY", ee)), dt !== oe.scaleX || lt !== oe.scaleY;
    }
    n.scaleCursorStyleHandler = function(B, j, Y) {
      var I = M(B, Y), U = "";
      if (j.x !== 0 && j.y === 0 ? U = "x" : j.x === 0 && j.y !== 0 && (U = "y"), _(Y, U, I)) return "not-allowed";
      var Q = C(Y, j);
      return l[Q] + "-resize";
    }, n.skewCursorStyleHandler = function(B, j, Y) {
      var I = "not-allowed";
      if (j.x !== 0 && Y.lockSkewingY || j.y !== 0 && Y.lockSkewingX) return I;
      var U = C(Y, j) % 4;
      return p[U] + "-resize";
    }, n.scaleSkewCursorStyleHandler = function(B, j, Y) {
      return B[Y.canvas.altActionKey] ? n.skewCursorStyleHandler(B, j, Y) : n.scaleCursorStyleHandler(B, j, Y);
    }, n.rotationWithSnapping = H("rotating", L(function(B, j, Y, I) {
      var U = j, Q = U.target, ie = Q.translateToOriginPoint(Q.getCenterPoint(), U.originX, U.originY);
      if (Q.lockRotation) return !1;
      var ee, le = Math.atan2(U.ey - ie.y, U.ex - ie.x), re = Math.atan2(I - ie.y, Y - ie.x), se = y(re - le + U.theta);
      if (Q.snapAngle > 0) {
        var oe = Q.snapAngle, fe = Q.snapThreshold || oe, pe = Math.ceil(se / oe) * oe, _e = Math.floor(se / oe) * oe;
        Math.abs(se - _e) < fe ? se = _e : Math.abs(se - pe) < fe && (se = pe);
      }
      return se < 0 && (se = 360 + se), se %= 360, ee = Q.angle !== se, Q.angle = se, ee;
    })), n.scalingEqually = H("scaling", L(function(B, j, Y, I) {
      return $(B, j, Y, I);
    })), n.scalingX = H("scaling", L(function(B, j, Y, I) {
      return $(B, j, Y, I, { by: "x" });
    })), n.scalingY = H("scaling", L(function(B, j, Y, I) {
      return $(B, j, Y, I, { by: "y" });
    })), n.scalingYOrSkewingX = function(B, j, Y, I) {
      return B[j.target.canvas.altActionKey] ? n.skewHandlerX(B, j, Y, I) : n.scalingY(B, j, Y, I);
    }, n.scalingXOrSkewingY = function(B, j, Y, I) {
      return B[j.target.canvas.altActionKey] ? n.skewHandlerY(B, j, Y, I) : n.scalingX(B, j, Y, I);
    }, n.changeWidth = H("resizing", L(function(B, j, Y, I) {
      var U = j.target, Q = W(j, j.originX, j.originY, Y, I), ie = U.strokeWidth / (U.strokeUniform ? U.scaleX : 1), ee = P(j) ? 2 : 1, le = U.width, re = Math.abs(Q.x * ee / U.scaleX) - ie;
      return U.set("width", Math.max(re, 0)), le !== re;
    })), n.skewHandlerX = function(B, j, Y, I) {
      var U, Q = j.target, ie = Q.skewX, ee = j.originY;
      return !Q.lockSkewingX && (ie === 0 ? U = W(j, d, d, Y, I).x > 0 ? r : h : (ie > 0 && (U = ee === a ? r : h), ie < 0 && (U = ee === a ? h : r), A(Q) && (U = U === r ? h : r)), j.originX = U, H("skewing", L(D))(B, j, Y, I));
    }, n.skewHandlerY = function(B, j, Y, I) {
      var U, Q = j.target, ie = Q.skewY, ee = j.originX;
      return !Q.lockSkewingY && (ie === 0 ? U = W(j, d, d, Y, I).y > 0 ? a : u : (ie > 0 && (U = ee === r ? a : u), ie < 0 && (U = ee === r ? u : a), A(Q) && (U = U === a ? u : a)), j.originY = U, H("skewing", L(X))(B, j, Y, I));
    }, n.dragHandler = function(B, j, Y, I) {
      var U = j.target, Q = Y - j.offsetX, ie = I - j.offsetY, ee = !U.get("lockMovementX") && U.left !== Q, le = !U.get("lockMovementY") && U.top !== ie;
      return ee && U.set("left", Q), le && U.set("top", ie), (ee || le) && b("moving", k(B, j, Y, I)), ee || le;
    }, n.scaleOrSkewActionName = function(B, j, Y) {
      var I = B[Y.canvas.altActionKey];
      return j.x === 0 ? I ? "skewX" : "scaleY" : j.y === 0 ? I ? "skewY" : "scaleX" : void 0;
    }, n.rotationStyleHandler = function(B, j, Y) {
      return Y.lockRotation ? "not-allowed" : j.cursorStyle;
    }, n.fireEvent = b, n.wrapWithFixedAnchor = L, n.wrapWithFireEvent = H, n.getLocalPoint = W, o.controlsUtils = n;
  }(e), function(s) {
    var o = s.fabric || (s.fabric = {}), l = o.util.degreesToRadians, p = o.controlsUtils;
    p.renderCircleControl = function(n, r, a, h, u) {
      h = h || {};
      var d, g = this.sizeX || h.cornerSize || u.cornerSize, y = this.sizeY || h.cornerSize || u.cornerSize, x = h.transparentCorners !== void 0 ? h.transparentCorners : u.transparentCorners, C = x ? "stroke" : "fill", b = !x && (h.cornerStrokeColor || u.cornerStrokeColor), M = r, P = a;
      n.save(), n.fillStyle = h.cornerColor || u.cornerColor, n.strokeStyle = h.cornerStrokeColor || u.cornerStrokeColor, g > y ? (d = g, n.scale(1, y / g), P = a * g / y) : y > g ? (d = y, n.scale(g / y, 1), M = r * y / g) : d = g, n.lineWidth = 1, n.beginPath(), n.arc(M, P, d / 2, 0, 2 * Math.PI, !1), n[C](), b && n.stroke(), n.restore();
    }, p.renderSquareControl = function(n, r, a, h, u) {
      h = h || {};
      var d = this.sizeX || h.cornerSize || u.cornerSize, g = this.sizeY || h.cornerSize || u.cornerSize, y = h.transparentCorners !== void 0 ? h.transparentCorners : u.transparentCorners, x = y ? "stroke" : "fill", C = !y && (h.cornerStrokeColor || u.cornerStrokeColor), b = d / 2, M = g / 2;
      n.save(), n.fillStyle = h.cornerColor || u.cornerColor, n.strokeStyle = h.cornerStrokeColor || u.cornerStrokeColor, n.lineWidth = 1, n.translate(r, a), n.rotate(l(u.angle)), n[x + "Rect"](-b, -M, d, g), C && n.strokeRect(-b, -M, d, g), n.restore();
    };
  }(e), function(s) {
    var o = s.fabric || (s.fabric = {});
    o.Control = function(l) {
      for (var p in l) this[p] = l[p];
    }, o.Control.prototype = { visible: !0, actionName: "scale", angle: 0, x: 0, y: 0, offsetX: 0, offsetY: 0, sizeX: null, sizeY: null, touchSizeX: null, touchSizeY: null, cursorStyle: "crosshair", withConnection: !1, actionHandler: function() {
    }, mouseDownHandler: function() {
    }, mouseUpHandler: function() {
    }, getActionHandler: function() {
      return this.actionHandler;
    }, getMouseDownHandler: function() {
      return this.mouseDownHandler;
    }, getMouseUpHandler: function() {
      return this.mouseUpHandler;
    }, cursorStyleHandler: function(l, p) {
      return p.cursorStyle;
    }, getActionName: function(l, p) {
      return p.actionName;
    }, getVisibility: function(l, p) {
      var n = l._controlsVisibility;
      return n && n[p] !== void 0 ? n[p] : this.visible;
    }, setVisibility: function(l) {
      this.visible = l;
    }, positionHandler: function(l, p) {
      return o.util.transformPoint({ x: this.x * l.x + this.offsetX, y: this.y * l.y + this.offsetY }, p);
    }, calcCornerCoords: function(l, p, n, r, a) {
      var h, u, d, g, y = a ? this.touchSizeX : this.sizeX, x = a ? this.touchSizeY : this.sizeY;
      if (y && x && y !== x) {
        var C = Math.atan2(x, y), b = Math.sqrt(y * y + x * x) / 2, M = C - o.util.degreesToRadians(l), P = Math.PI / 2 - C - o.util.degreesToRadians(l);
        h = b * o.util.cos(M), u = b * o.util.sin(M), d = b * o.util.cos(P), g = b * o.util.sin(P);
      } else
        b = 0.7071067812 * (y && x ? y : p), M = o.util.degreesToRadians(45 - l), h = d = b * o.util.cos(M), u = g = b * o.util.sin(M);
      return { tl: { x: n - g, y: r - d }, tr: { x: n + h, y: r - u }, bl: { x: n - h, y: r + u }, br: { x: n + g, y: r + d } };
    }, render: function(l, p, n, r, a) {
      ((r = r || {}).cornerStyle || a.cornerStyle) === "circle" ? o.controlsUtils.renderCircleControl.call(this, l, p, n, r, a) : o.controlsUtils.renderSquareControl.call(this, l, p, n, r, a);
    } };
  }(e), function() {
    function s(l, p) {
      var n, r, a, h, u = l.getAttribute("style"), d = l.getAttribute("offset") || 0;
      if (d = (d = parseFloat(d) / (/%$/.test(d) ? 100 : 1)) < 0 ? 0 : d > 1 ? 1 : d, u) {
        var g = u.split(/\s*;\s*/);
        for (g[g.length - 1] === "" && g.pop(), h = g.length; h--; ) {
          var y = g[h].split(/\s*:\s*/), x = y[0].trim(), C = y[1].trim();
          x === "stop-color" ? n = C : x === "stop-opacity" && (a = C);
        }
      }
      return n || (n = l.getAttribute("stop-color") || "rgb(0,0,0)"), a || (a = l.getAttribute("stop-opacity")), r = (n = new v.Color(n)).getAlpha(), a = isNaN(parseFloat(a)) ? 1 : parseFloat(a), a *= r * p, { offset: d, color: n.toRgb(), opacity: a };
    }
    var o = v.util.object.clone;
    v.Gradient = v.util.createClass({ offsetX: 0, offsetY: 0, gradientTransform: null, gradientUnits: "pixels", type: "linear", initialize: function(l) {
      l || (l = {}), l.coords || (l.coords = {});
      var p, n = this;
      Object.keys(l).forEach(function(r) {
        n[r] = l[r];
      }), this.id ? this.id += "_" + v.Object.__uid++ : this.id = v.Object.__uid++, p = { x1: l.coords.x1 || 0, y1: l.coords.y1 || 0, x2: l.coords.x2 || 0, y2: l.coords.y2 || 0 }, this.type === "radial" && (p.r1 = l.coords.r1 || 0, p.r2 = l.coords.r2 || 0), this.coords = p, this.colorStops = l.colorStops.slice();
    }, addColorStop: function(l) {
      for (var p in l) {
        var n = new v.Color(l[p]);
        this.colorStops.push({ offset: parseFloat(p), color: n.toRgb(), opacity: n.getAlpha() });
      }
      return this;
    }, toObject: function(l) {
      var p = { type: this.type, coords: this.coords, colorStops: this.colorStops, offsetX: this.offsetX, offsetY: this.offsetY, gradientUnits: this.gradientUnits, gradientTransform: this.gradientTransform ? this.gradientTransform.concat() : this.gradientTransform };
      return v.util.populateWithProperties(this, p, l), p;
    }, toSVG: function(l, p) {
      var n, r, a, h, u = o(this.coords, !0), d = (p = p || {}, o(this.colorStops, !0)), g = u.r1 > u.r2, y = this.gradientTransform ? this.gradientTransform.concat() : v.iMatrix.concat(), x = -this.offsetX, C = -this.offsetY, b = !!p.additionalTransform, M = this.gradientUnits === "pixels" ? "userSpaceOnUse" : "objectBoundingBox";
      if (d.sort(function(L, H) {
        return L.offset - H.offset;
      }), M === "objectBoundingBox" ? (x /= l.width, C /= l.height) : (x += l.width / 2, C += l.height / 2), l.type === "path" && this.gradientUnits !== "percentage" && (x -= l.pathOffset.x, C -= l.pathOffset.y), y[4] -= x, y[5] -= C, h = 'id="SVGID_' + this.id + '" gradientUnits="' + M + '"', h += ' gradientTransform="' + (b ? p.additionalTransform + " " : "") + v.util.matrixToSVG(y) + '" ', this.type === "linear" ? a = ["<linearGradient ", h, ' x1="', u.x1, '" y1="', u.y1, '" x2="', u.x2, '" y2="', u.y2, `">
`] : this.type === "radial" && (a = ["<radialGradient ", h, ' cx="', g ? u.x1 : u.x2, '" cy="', g ? u.y1 : u.y2, '" r="', g ? u.r1 : u.r2, '" fx="', g ? u.x2 : u.x1, '" fy="', g ? u.y2 : u.y1, `">
`]), this.type === "radial") {
        if (g) for ((d = d.concat()).reverse(), n = 0, r = d.length; n < r; n++) d[n].offset = 1 - d[n].offset;
        var P = Math.min(u.r1, u.r2);
        if (P > 0) {
          var _ = P / Math.max(u.r1, u.r2);
          for (n = 0, r = d.length; n < r; n++) d[n].offset += _ * (1 - d[n].offset);
        }
      }
      for (n = 0, r = d.length; n < r; n++) {
        var k = d[n];
        a.push("<stop ", 'offset="', 100 * k.offset + "%", '" style="stop-color:', k.color, k.opacity !== void 0 ? ";stop-opacity: " + k.opacity : ";", `"/>
`);
      }
      return a.push(this.type === "linear" ? `</linearGradient>
` : `</radialGradient>
`), a.join("");
    }, toLive: function(l) {
      var p, n, r, a = v.util.object.clone(this.coords);
      if (this.type) {
        for (this.type === "linear" ? p = l.createLinearGradient(a.x1, a.y1, a.x2, a.y2) : this.type === "radial" && (p = l.createRadialGradient(a.x1, a.y1, a.r1, a.x2, a.y2, a.r2)), n = 0, r = this.colorStops.length; n < r; n++) {
          var h = this.colorStops[n].color, u = this.colorStops[n].opacity, d = this.colorStops[n].offset;
          u !== void 0 && (h = new v.Color(h).setAlpha(u).toRgba()), p.addColorStop(d, h);
        }
        return p;
      }
    } }), v.util.object.extend(v.Gradient, { fromElement: function(l, p, n, r) {
      var a = parseFloat(n) / (/%$/.test(n) ? 100 : 1);
      a = a < 0 ? 0 : a > 1 ? 1 : a, isNaN(a) && (a = 1);
      var h, u, d, g, y = l.getElementsByTagName("stop"), x = l.getAttribute("gradientUnits") === "userSpaceOnUse" ? "pixels" : "percentage", C = l.getAttribute("gradientTransform") || "", b = [], M = 0, P = 0;
      for (l.nodeName === "linearGradient" || l.nodeName === "LINEARGRADIENT" ? (h = "linear", u = function(_) {
        return { x1: _.getAttribute("x1") || 0, y1: _.getAttribute("y1") || 0, x2: _.getAttribute("x2") || "100%", y2: _.getAttribute("y2") || 0 };
      }(l)) : (h = "radial", u = function(_) {
        return { x1: _.getAttribute("fx") || _.getAttribute("cx") || "50%", y1: _.getAttribute("fy") || _.getAttribute("cy") || "50%", r1: 0, x2: _.getAttribute("cx") || "50%", y2: _.getAttribute("cy") || "50%", r2: _.getAttribute("r") || "50%" };
      }(l)), d = y.length; d--; ) b.push(s(y[d], a));
      return g = v.parseTransformAttribute(C), function(_, k, L, H) {
        var W, A;
        Object.keys(k).forEach(function(T) {
          (W = k[T]) === "Infinity" ? A = 1 : W === "-Infinity" ? A = 0 : (A = parseFloat(k[T], 10), typeof W == "string" && /^(\d+\.\d+)%|(\d+)%$/.test(W) && (A *= 0.01, H === "pixels" && (T !== "x1" && T !== "x2" && T !== "r2" || (A *= L.viewBoxWidth || L.width), T !== "y1" && T !== "y2" || (A *= L.viewBoxHeight || L.height)))), k[T] = A;
        });
      }(0, u, r, x), x === "pixels" && (M = -p.left, P = -p.top), new v.Gradient({ id: l.getAttribute("id"), type: h, coords: u, colorStops: b, gradientUnits: x, gradientTransform: g, offsetX: M, offsetY: P });
    } });
  }(), N = v.util.toFixed, v.Pattern = v.util.createClass({ repeat: "repeat", offsetX: 0, offsetY: 0, crossOrigin: "", patternTransform: null, initialize: function(s, o) {
    if (s || (s = {}), this.id = v.Object.__uid++, this.setOptions(s), !s.source || s.source && typeof s.source != "string") o && o(this);
    else {
      var l = this;
      this.source = v.util.createImage(), v.util.loadImage(s.source, function(p, n) {
        l.source = p, o && o(l, n);
      }, null, this.crossOrigin);
    }
  }, toObject: function(s) {
    var o, l, p = v.Object.NUM_FRACTION_DIGITS;
    return typeof this.source.src == "string" ? o = this.source.src : typeof this.source == "object" && this.source.toDataURL && (o = this.source.toDataURL()), l = { type: "pattern", source: o, repeat: this.repeat, crossOrigin: this.crossOrigin, offsetX: N(this.offsetX, p), offsetY: N(this.offsetY, p), patternTransform: this.patternTransform ? this.patternTransform.concat() : null }, v.util.populateWithProperties(this, l, s), l;
  }, toSVG: function(s) {
    var o = typeof this.source == "function" ? this.source() : this.source, l = o.width / s.width, p = o.height / s.height, n = this.offsetX / s.width, r = this.offsetY / s.height, a = "";
    return this.repeat !== "repeat-x" && this.repeat !== "no-repeat" || (p = 1, r && (p += Math.abs(r))), this.repeat !== "repeat-y" && this.repeat !== "no-repeat" || (l = 1, n && (l += Math.abs(n))), o.src ? a = o.src : o.toDataURL && (a = o.toDataURL()), '<pattern id="SVGID_' + this.id + '" x="' + n + '" y="' + r + '" width="' + l + '" height="' + p + `">
<image x="0" y="0" width="` + o.width + '" height="' + o.height + '" xlink:href="' + a + `"></image>
</pattern>
`;
  }, setOptions: function(s) {
    for (var o in s) this[o] = s[o];
  }, toLive: function(s) {
    var o = this.source;
    return !o || o.src !== void 0 && (!o.complete || o.naturalWidth === 0 || o.naturalHeight === 0) ? "" : s.createPattern(o, this.repeat);
  } }), function(s) {
    var o = s.fabric || (s.fabric = {}), l = o.util.toFixed;
    o.Shadow ? o.warn("fabric.Shadow is already defined.") : (o.Shadow = o.util.createClass({ color: "rgb(0,0,0)", blur: 0, offsetX: 0, offsetY: 0, affectStroke: !1, includeDefaultValues: !0, nonScaling: !1, initialize: function(p) {
      for (var n in typeof p == "string" && (p = this._parseShadow(p)), p) this[n] = p[n];
      this.id = o.Object.__uid++;
    }, _parseShadow: function(p) {
      var n = p.trim(), r = o.Shadow.reOffsetsAndBlur.exec(n) || [];
      return { color: (n.replace(o.Shadow.reOffsetsAndBlur, "") || "rgb(0,0,0)").trim(), offsetX: parseFloat(r[1], 10) || 0, offsetY: parseFloat(r[2], 10) || 0, blur: parseFloat(r[3], 10) || 0 };
    }, toString: function() {
      return [this.offsetX, this.offsetY, this.blur, this.color].join("px ");
    }, toSVG: function(p) {
      var n = 40, r = 40, a = o.Object.NUM_FRACTION_DIGITS, h = o.util.rotateVector({ x: this.offsetX, y: this.offsetY }, o.util.degreesToRadians(-p.angle)), u = new o.Color(this.color);
      return p.width && p.height && (n = 100 * l((Math.abs(h.x) + this.blur) / p.width, a) + 20, r = 100 * l((Math.abs(h.y) + this.blur) / p.height, a) + 20), p.flipX && (h.x *= -1), p.flipY && (h.y *= -1), '<filter id="SVGID_' + this.id + '" y="-' + r + '%" height="' + (100 + 2 * r) + '%" x="-' + n + '%" width="' + (100 + 2 * n) + `%" >
	<feGaussianBlur in="SourceAlpha" stdDeviation="` + l(this.blur ? this.blur / 2 : 0, a) + `"></feGaussianBlur>
	<feOffset dx="` + l(h.x, a) + '" dy="' + l(h.y, a) + `" result="oBlur" ></feOffset>
	<feFlood flood-color="` + u.toRgb() + '" flood-opacity="' + u.getAlpha() + `"/>
	<feComposite in2="oBlur" operator="in" />
	<feMerge>
		<feMergeNode></feMergeNode>
		<feMergeNode in="SourceGraphic"></feMergeNode>
	</feMerge>
</filter>
`;
    }, toObject: function() {
      if (this.includeDefaultValues) return { color: this.color, blur: this.blur, offsetX: this.offsetX, offsetY: this.offsetY, affectStroke: this.affectStroke, nonScaling: this.nonScaling };
      var p = {}, n = o.Shadow.prototype;
      return ["color", "blur", "offsetX", "offsetY", "affectStroke", "nonScaling"].forEach(function(r) {
        this[r] !== n[r] && (p[r] = this[r]);
      }, this), p;
    } }), o.Shadow.reOffsetsAndBlur = /(?:\s|^)(-?\d+(?:\.\d*)?(?:px)?(?:\s?|$))?(-?\d+(?:\.\d*)?(?:px)?(?:\s?|$))?(\d+(?:\.\d*)?(?:px)?)?(?:\s?|$)(?:$|\s)/);
  }(e), function() {
    if (v.StaticCanvas) v.warn("fabric.StaticCanvas is already defined.");
    else {
      var s = v.util.object.extend, o = v.util.getElementOffset, l = v.util.removeFromArray, p = v.util.toFixed, n = v.util.transformPoint, r = v.util.invertTransform, a = v.util.getNodeCanvas, h = v.util.createCanvasElement, u = new Error("Could not initialize `canvas` element");
      v.StaticCanvas = v.util.createClass(v.CommonMethods, { initialize: function(d, g) {
        g || (g = {}), this.renderAndResetBound = this.renderAndReset.bind(this), this.requestRenderAllBound = this.requestRenderAll.bind(this), this._initStatic(d, g);
      }, backgroundColor: "", backgroundImage: null, overlayColor: "", overlayImage: null, includeDefaultValues: !0, stateful: !1, renderOnAddRemove: !0, controlsAboveOverlay: !1, allowTouchScrolling: !1, imageSmoothingEnabled: !0, viewportTransform: v.iMatrix.concat(), backgroundVpt: !0, overlayVpt: !0, enableRetinaScaling: !0, vptCoords: {}, skipOffscreen: !0, clipPath: void 0, _initStatic: function(d, g) {
        var y = this.requestRenderAllBound;
        this._objects = [], this._createLowerCanvas(d), this._initOptions(g), this.interactive || this._initRetinaScaling(), g.overlayImage && this.setOverlayImage(g.overlayImage, y), g.backgroundImage && this.setBackgroundImage(g.backgroundImage, y), g.backgroundColor && this.setBackgroundColor(g.backgroundColor, y), g.overlayColor && this.setOverlayColor(g.overlayColor, y), this.calcOffset();
      }, _isRetinaScaling: function() {
        return v.devicePixelRatio !== 1 && this.enableRetinaScaling;
      }, getRetinaScaling: function() {
        return this._isRetinaScaling() ? v.devicePixelRatio : 1;
      }, _initRetinaScaling: function() {
        if (this._isRetinaScaling()) {
          var d = v.devicePixelRatio;
          this.__initRetinaScaling(d, this.lowerCanvasEl, this.contextContainer), this.upperCanvasEl && this.__initRetinaScaling(d, this.upperCanvasEl, this.contextTop);
        }
      }, __initRetinaScaling: function(d, g, y) {
        g.setAttribute("width", this.width * d), g.setAttribute("height", this.height * d), y.scale(d, d);
      }, calcOffset: function() {
        return this._offset = o(this.lowerCanvasEl), this;
      }, setOverlayImage: function(d, g, y) {
        return this.__setBgOverlayImage("overlayImage", d, g, y);
      }, setBackgroundImage: function(d, g, y) {
        return this.__setBgOverlayImage("backgroundImage", d, g, y);
      }, setOverlayColor: function(d, g) {
        return this.__setBgOverlayColor("overlayColor", d, g);
      }, setBackgroundColor: function(d, g) {
        return this.__setBgOverlayColor("backgroundColor", d, g);
      }, __setBgOverlayImage: function(d, g, y, x) {
        return typeof g == "string" ? v.util.loadImage(g, function(C, b) {
          if (C) {
            var M = new v.Image(C, x);
            this[d] = M, M.canvas = this;
          }
          y && y(C, b);
        }, this, x && x.crossOrigin) : (x && g.setOptions(x), this[d] = g, g && (g.canvas = this), y && y(g, !1)), this;
      }, __setBgOverlayColor: function(d, g, y) {
        return this[d] = g, this._initGradient(g, d), this._initPattern(g, d, y), this;
      }, _createCanvasElement: function() {
        var d = h();
        if (!d || (d.style || (d.style = {}), d.getContext === void 0)) throw u;
        return d;
      }, _initOptions: function(d) {
        var g = this.lowerCanvasEl;
        this._setOptions(d), this.width = this.width || parseInt(g.width, 10) || 0, this.height = this.height || parseInt(g.height, 10) || 0, this.lowerCanvasEl.style && (g.width = this.width, g.height = this.height, g.style.width = this.width + "px", g.style.height = this.height + "px", this.viewportTransform = this.viewportTransform.slice());
      }, _createLowerCanvas: function(d) {
        d && d.getContext ? this.lowerCanvasEl = d : this.lowerCanvasEl = v.util.getById(d) || this._createCanvasElement(), v.util.addClass(this.lowerCanvasEl, "lower-canvas"), this._originalCanvasStyle = this.lowerCanvasEl.style, this.interactive && this._applyCanvasStyle(this.lowerCanvasEl), this.contextContainer = this.lowerCanvasEl.getContext("2d");
      }, getWidth: function() {
        return this.width;
      }, getHeight: function() {
        return this.height;
      }, setWidth: function(d, g) {
        return this.setDimensions({ width: d }, g);
      }, setHeight: function(d, g) {
        return this.setDimensions({ height: d }, g);
      }, setDimensions: function(d, g) {
        var y;
        for (var x in g = g || {}, d) y = d[x], g.cssOnly || (this._setBackstoreDimension(x, d[x]), y += "px", this.hasLostContext = !0), g.backstoreOnly || this._setCssDimension(x, y);
        return this._isCurrentlyDrawing && this.freeDrawingBrush && this.freeDrawingBrush._setBrushStyles(), this._initRetinaScaling(), this.calcOffset(), g.cssOnly || this.requestRenderAll(), this;
      }, _setBackstoreDimension: function(d, g) {
        return this.lowerCanvasEl[d] = g, this.upperCanvasEl && (this.upperCanvasEl[d] = g), this.cacheCanvasEl && (this.cacheCanvasEl[d] = g), this[d] = g, this;
      }, _setCssDimension: function(d, g) {
        return this.lowerCanvasEl.style[d] = g, this.upperCanvasEl && (this.upperCanvasEl.style[d] = g), this.wrapperEl && (this.wrapperEl.style[d] = g), this;
      }, getZoom: function() {
        return this.viewportTransform[0];
      }, setViewportTransform: function(d) {
        var g, y, x, C = this._activeObject, b = this.backgroundImage, M = this.overlayImage;
        for (this.viewportTransform = d, y = 0, x = this._objects.length; y < x; y++) (g = this._objects[y]).group || g.setCoords(!0);
        return C && C.setCoords(), b && b.setCoords(!0), M && M.setCoords(!0), this.calcViewportBoundaries(), this.renderOnAddRemove && this.requestRenderAll(), this;
      }, zoomToPoint: function(d, g) {
        var y = d, x = this.viewportTransform.slice(0);
        d = n(d, r(this.viewportTransform)), x[0] = g, x[3] = g;
        var C = n(d, x);
        return x[4] += y.x - C.x, x[5] += y.y - C.y, this.setViewportTransform(x);
      }, setZoom: function(d) {
        return this.zoomToPoint(new v.Point(0, 0), d), this;
      }, absolutePan: function(d) {
        var g = this.viewportTransform.slice(0);
        return g[4] = -d.x, g[5] = -d.y, this.setViewportTransform(g);
      }, relativePan: function(d) {
        return this.absolutePan(new v.Point(-d.x - this.viewportTransform[4], -d.y - this.viewportTransform[5]));
      }, getElement: function() {
        return this.lowerCanvasEl;
      }, _onObjectAdded: function(d) {
        this.stateful && d.setupState(), d._set("canvas", this), d.setCoords(), this.fire("object:added", { target: d }), d.fire("added");
      }, _onObjectRemoved: function(d) {
        this.fire("object:removed", { target: d }), d.fire("removed"), delete d.canvas;
      }, clearContext: function(d) {
        return d.clearRect(0, 0, this.width, this.height), this;
      }, getContext: function() {
        return this.contextContainer;
      }, clear: function() {
        return this.remove.apply(this, this.getObjects()), this.backgroundImage = null, this.overlayImage = null, this.backgroundColor = "", this.overlayColor = "", this._hasITextHandlers && (this.off("mouse:up", this._mouseUpITextHandler), this._iTextInstances = null, this._hasITextHandlers = !1), this.clearContext(this.contextContainer), this.fire("canvas:cleared"), this.renderOnAddRemove && this.requestRenderAll(), this;
      }, renderAll: function() {
        var d = this.contextContainer;
        return this.renderCanvas(d, this._objects), this;
      }, renderAndReset: function() {
        this.isRendering = 0, this.renderAll();
      }, requestRenderAll: function() {
        return this.isRendering || (this.isRendering = v.util.requestAnimFrame(this.renderAndResetBound)), this;
      }, calcViewportBoundaries: function() {
        var d = {}, g = this.width, y = this.height, x = r(this.viewportTransform);
        return d.tl = n({ x: 0, y: 0 }, x), d.br = n({ x: g, y }, x), d.tr = new v.Point(d.br.x, d.tl.y), d.bl = new v.Point(d.tl.x, d.br.y), this.vptCoords = d, d;
      }, cancelRequestedRender: function() {
        this.isRendering && (v.util.cancelAnimFrame(this.isRendering), this.isRendering = 0);
      }, renderCanvas: function(d, g) {
        var y = this.viewportTransform, x = this.clipPath;
        this.cancelRequestedRender(), this.calcViewportBoundaries(), this.clearContext(d), v.util.setImageSmoothing(d, this.imageSmoothingEnabled), this.fire("before:render", { ctx: d }), this._renderBackground(d), d.save(), d.transform(y[0], y[1], y[2], y[3], y[4], y[5]), this._renderObjects(d, g), d.restore(), !this.controlsAboveOverlay && this.interactive && this.drawControls(d), x && (x.canvas = this, x.shouldCache(), x._transformDone = !0, x.renderCache({ forClipping: !0 }), this.drawClipPathOnCanvas(d)), this._renderOverlay(d), this.controlsAboveOverlay && this.interactive && this.drawControls(d), this.fire("after:render", { ctx: d });
      }, drawClipPathOnCanvas: function(d) {
        var g = this.viewportTransform, y = this.clipPath;
        d.save(), d.transform(g[0], g[1], g[2], g[3], g[4], g[5]), d.globalCompositeOperation = "destination-in", y.transform(d), d.scale(1 / y.zoomX, 1 / y.zoomY), d.drawImage(y._cacheCanvas, -y.cacheTranslationX, -y.cacheTranslationY), d.restore();
      }, _renderObjects: function(d, g) {
        var y, x;
        for (y = 0, x = g.length; y < x; ++y) g[y] && g[y].render(d);
      }, _renderBackgroundOrOverlay: function(d, g) {
        var y = this[g + "Color"], x = this[g + "Image"], C = this.viewportTransform, b = this[g + "Vpt"];
        if (y || x) {
          if (y) {
            d.save(), d.beginPath(), d.moveTo(0, 0), d.lineTo(this.width, 0), d.lineTo(this.width, this.height), d.lineTo(0, this.height), d.closePath(), d.fillStyle = y.toLive ? y.toLive(d, this) : y, b && d.transform(C[0], C[1], C[2], C[3], C[4], C[5]), d.transform(1, 0, 0, 1, y.offsetX || 0, y.offsetY || 0);
            var M = y.gradientTransform || y.patternTransform;
            M && d.transform(M[0], M[1], M[2], M[3], M[4], M[5]), d.fill(), d.restore();
          }
          x && (d.save(), b && d.transform(C[0], C[1], C[2], C[3], C[4], C[5]), x.render(d), d.restore());
        }
      }, _renderBackground: function(d) {
        this._renderBackgroundOrOverlay(d, "background");
      }, _renderOverlay: function(d) {
        this._renderBackgroundOrOverlay(d, "overlay");
      }, getCenter: function() {
        return { top: this.height / 2, left: this.width / 2 };
      }, centerObjectH: function(d) {
        return this._centerObject(d, new v.Point(this.getCenter().left, d.getCenterPoint().y));
      }, centerObjectV: function(d) {
        return this._centerObject(d, new v.Point(d.getCenterPoint().x, this.getCenter().top));
      }, centerObject: function(d) {
        var g = this.getCenter();
        return this._centerObject(d, new v.Point(g.left, g.top));
      }, viewportCenterObject: function(d) {
        var g = this.getVpCenter();
        return this._centerObject(d, g);
      }, viewportCenterObjectH: function(d) {
        var g = this.getVpCenter();
        return this._centerObject(d, new v.Point(g.x, d.getCenterPoint().y)), this;
      }, viewportCenterObjectV: function(d) {
        var g = this.getVpCenter();
        return this._centerObject(d, new v.Point(d.getCenterPoint().x, g.y));
      }, getVpCenter: function() {
        var d = this.getCenter(), g = r(this.viewportTransform);
        return n({ x: d.left, y: d.top }, g);
      }, _centerObject: function(d, g) {
        return d.setPositionByOrigin(g, "center", "center"), d.setCoords(), this.renderOnAddRemove && this.requestRenderAll(), this;
      }, toDatalessJSON: function(d) {
        return this.toDatalessObject(d);
      }, toObject: function(d) {
        return this._toObjectMethod("toObject", d);
      }, toDatalessObject: function(d) {
        return this._toObjectMethod("toDatalessObject", d);
      }, _toObjectMethod: function(d, g) {
        var y = this.clipPath, x = { version: v.version, objects: this._toObjects(d, g) };
        return y && !y.excludeFromExport && (x.clipPath = this._toObject(this.clipPath, d, g)), s(x, this.__serializeBgOverlay(d, g)), v.util.populateWithProperties(this, x, g), x;
      }, _toObjects: function(d, g) {
        return this._objects.filter(function(y) {
          return !y.excludeFromExport;
        }).map(function(y) {
          return this._toObject(y, d, g);
        }, this);
      }, _toObject: function(d, g, y) {
        var x;
        this.includeDefaultValues || (x = d.includeDefaultValues, d.includeDefaultValues = !1);
        var C = d[g](y);
        return this.includeDefaultValues || (d.includeDefaultValues = x), C;
      }, __serializeBgOverlay: function(d, g) {
        var y = {}, x = this.backgroundImage, C = this.overlayImage, b = this.backgroundColor, M = this.overlayColor;
        return b && b.toObject ? b.excludeFromExport || (y.background = b.toObject(g)) : b && (y.background = b), M && M.toObject ? M.excludeFromExport || (y.overlay = M.toObject(g)) : M && (y.overlay = M), x && !x.excludeFromExport && (y.backgroundImage = this._toObject(x, d, g)), C && !C.excludeFromExport && (y.overlayImage = this._toObject(C, d, g)), y;
      }, svgViewportTransformation: !0, toSVG: function(d, g) {
        d || (d = {}), d.reviver = g;
        var y = [];
        return this._setSVGPreamble(y, d), this._setSVGHeader(y, d), this.clipPath && y.push('<g clip-path="url(#' + this.clipPath.clipPathId + `)" >
`), this._setSVGBgOverlayColor(y, "background"), this._setSVGBgOverlayImage(y, "backgroundImage", g), this._setSVGObjects(y, g), this.clipPath && y.push(`</g>
`), this._setSVGBgOverlayColor(y, "overlay"), this._setSVGBgOverlayImage(y, "overlayImage", g), y.push("</svg>"), y.join("");
      }, _setSVGPreamble: function(d, g) {
        g.suppressPreamble || d.push('<?xml version="1.0" encoding="', g.encoding || "UTF-8", `" standalone="no" ?>
`, '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" ', `"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
`);
      }, _setSVGHeader: function(d, g) {
        var y, x = g.width || this.width, C = g.height || this.height, b = 'viewBox="0 0 ' + this.width + " " + this.height + '" ', M = v.Object.NUM_FRACTION_DIGITS;
        g.viewBox ? b = 'viewBox="' + g.viewBox.x + " " + g.viewBox.y + " " + g.viewBox.width + " " + g.viewBox.height + '" ' : this.svgViewportTransformation && (y = this.viewportTransform, b = 'viewBox="' + p(-y[4] / y[0], M) + " " + p(-y[5] / y[3], M) + " " + p(this.width / y[0], M) + " " + p(this.height / y[3], M) + '" '), d.push("<svg ", 'xmlns="http://www.w3.org/2000/svg" ', 'xmlns:xlink="http://www.w3.org/1999/xlink" ', 'version="1.1" ', 'width="', x, '" ', 'height="', C, '" ', b, `xml:space="preserve">
`, "<desc>Created with Fabric.js ", v.version, `</desc>
`, `<defs>
`, this.createSVGFontFacesMarkup(), this.createSVGRefElementsMarkup(), this.createSVGClipPathMarkup(g), `</defs>
`);
      }, createSVGClipPathMarkup: function(d) {
        var g = this.clipPath;
        return g ? (g.clipPathId = "CLIPPATH_" + v.Object.__uid++, '<clipPath id="' + g.clipPathId + `" >
` + this.clipPath.toClipPathSVG(d.reviver) + `</clipPath>
`) : "";
      }, createSVGRefElementsMarkup: function() {
        var d = this;
        return ["background", "overlay"].map(function(g) {
          var y = d[g + "Color"];
          if (y && y.toLive) {
            var x = d[g + "Vpt"], C = d.viewportTransform, b = { width: d.width / (x ? C[0] : 1), height: d.height / (x ? C[3] : 1) };
            return y.toSVG(b, { additionalTransform: x ? v.util.matrixToSVG(C) : "" });
          }
        }).join("");
      }, createSVGFontFacesMarkup: function() {
        var d, g, y, x, C, b, M, P, _ = "", k = {}, L = v.fontPaths, H = [];
        for (this._objects.forEach(function A(T) {
          H.push(T), T._objects && T._objects.forEach(A);
        }), M = 0, P = H.length; M < P; M++) if (g = (d = H[M]).fontFamily, d.type.indexOf("text") !== -1 && !k[g] && L[g] && (k[g] = !0, d.styles)) for (C in y = d.styles) for (b in x = y[C]) !k[g = x[b].fontFamily] && L[g] && (k[g] = !0);
        for (var W in k) _ += [`		@font-face {
`, "			font-family: '", W, `';
`, "			src: url('", L[W], `');
`, `		}
`].join("");
        return _ && (_ = ['	<style type="text/css">', `<![CDATA[
`, _, "]]>", `</style>
`].join("")), _;
      }, _setSVGObjects: function(d, g) {
        var y, x, C, b = this._objects;
        for (x = 0, C = b.length; x < C; x++) (y = b[x]).excludeFromExport || this._setSVGObject(d, y, g);
      }, _setSVGObject: function(d, g, y) {
        d.push(g.toSVG(y));
      }, _setSVGBgOverlayImage: function(d, g, y) {
        this[g] && !this[g].excludeFromExport && this[g].toSVG && d.push(this[g].toSVG(y));
      }, _setSVGBgOverlayColor: function(d, g) {
        var y = this[g + "Color"], x = this.viewportTransform, C = this.width, b = this.height;
        if (y) if (y.toLive) {
          var M = y.repeat, P = v.util.invertTransform(x), _ = this[g + "Vpt"] ? v.util.matrixToSVG(P) : "";
          d.push('<rect transform="' + _ + " translate(", C / 2, ",", b / 2, ')"', ' x="', y.offsetX - C / 2, '" y="', y.offsetY - b / 2, '" ', 'width="', M === "repeat-y" || M === "no-repeat" ? y.source.width : C, '" height="', M === "repeat-x" || M === "no-repeat" ? y.source.height : b, '" fill="url(#SVGID_' + y.id + ')"', `></rect>
`);
        } else d.push('<rect x="0" y="0" width="100%" height="100%" ', 'fill="', y, '"', `></rect>
`);
      }, sendToBack: function(d) {
        if (!d) return this;
        var g, y, x, C = this._activeObject;
        if (d === C && d.type === "activeSelection") for (g = (x = C._objects).length; g--; ) y = x[g], l(this._objects, y), this._objects.unshift(y);
        else l(this._objects, d), this._objects.unshift(d);
        return this.renderOnAddRemove && this.requestRenderAll(), this;
      }, bringToFront: function(d) {
        if (!d) return this;
        var g, y, x, C = this._activeObject;
        if (d === C && d.type === "activeSelection") for (x = C._objects, g = 0; g < x.length; g++) y = x[g], l(this._objects, y), this._objects.push(y);
        else l(this._objects, d), this._objects.push(d);
        return this.renderOnAddRemove && this.requestRenderAll(), this;
      }, sendBackwards: function(d, g) {
        if (!d) return this;
        var y, x, C, b, M, P = this._activeObject, _ = 0;
        if (d === P && d.type === "activeSelection") for (M = P._objects, y = 0; y < M.length; y++) x = M[y], (C = this._objects.indexOf(x)) > 0 + _ && (b = C - 1, l(this._objects, x), this._objects.splice(b, 0, x)), _++;
        else (C = this._objects.indexOf(d)) !== 0 && (b = this._findNewLowerIndex(d, C, g), l(this._objects, d), this._objects.splice(b, 0, d));
        return this.renderOnAddRemove && this.requestRenderAll(), this;
      }, _findNewLowerIndex: function(d, g, y) {
        var x, C;
        if (y) {
          for (x = g, C = g - 1; C >= 0; --C)
            if (d.intersectsWithObject(this._objects[C]) || d.isContainedWithinObject(this._objects[C]) || this._objects[C].isContainedWithinObject(d)) {
              x = C;
              break;
            }
        } else x = g - 1;
        return x;
      }, bringForward: function(d, g) {
        if (!d) return this;
        var y, x, C, b, M, P = this._activeObject, _ = 0;
        if (d === P && d.type === "activeSelection") for (y = (M = P._objects).length; y--; ) x = M[y], (C = this._objects.indexOf(x)) < this._objects.length - 1 - _ && (b = C + 1, l(this._objects, x), this._objects.splice(b, 0, x)), _++;
        else (C = this._objects.indexOf(d)) !== this._objects.length - 1 && (b = this._findNewUpperIndex(d, C, g), l(this._objects, d), this._objects.splice(b, 0, d));
        return this.renderOnAddRemove && this.requestRenderAll(), this;
      }, _findNewUpperIndex: function(d, g, y) {
        var x, C, b;
        if (y) {
          for (x = g, C = g + 1, b = this._objects.length; C < b; ++C)
            if (d.intersectsWithObject(this._objects[C]) || d.isContainedWithinObject(this._objects[C]) || this._objects[C].isContainedWithinObject(d)) {
              x = C;
              break;
            }
        } else x = g + 1;
        return x;
      }, moveTo: function(d, g) {
        return l(this._objects, d), this._objects.splice(g, 0, d), this.renderOnAddRemove && this.requestRenderAll();
      }, dispose: function() {
        return this.isRendering && (v.util.cancelAnimFrame(this.isRendering), this.isRendering = 0), this.forEachObject(function(d) {
          d.dispose && d.dispose();
        }), this._objects = [], this.backgroundImage && this.backgroundImage.dispose && this.backgroundImage.dispose(), this.backgroundImage = null, this.overlayImage && this.overlayImage.dispose && this.overlayImage.dispose(), this.overlayImage = null, this._iTextInstances = null, this.contextContainer = null, this.lowerCanvasEl.classList.remove("lower-canvas"), this.lowerCanvasEl.style = this._originalCanvasStyle, delete this._originalCanvasStyle, this.lowerCanvasEl.setAttribute("width", this.width), this.lowerCanvasEl.setAttribute("height", this.height), v.util.cleanUpJsdomNode(this.lowerCanvasEl), this.lowerCanvasEl = void 0, this;
      }, toString: function() {
        return "#<fabric.Canvas (" + this.complexity() + "): { objects: " + this._objects.length + " }>";
      } }), s(v.StaticCanvas.prototype, v.Observable), s(v.StaticCanvas.prototype, v.Collection), s(v.StaticCanvas.prototype, v.DataURLExporter), s(v.StaticCanvas, { EMPTY_JSON: '{"objects": [], "background": "white"}', supports: function(d) {
        var g = h();
        if (!g || !g.getContext) return null;
        var y = g.getContext("2d");
        return y && d === "setLineDash" ? y.setLineDash !== void 0 : null;
      } }), v.StaticCanvas.prototype.toJSON = v.StaticCanvas.prototype.toObject, v.isLikelyNode && (v.StaticCanvas.prototype.createPNGStream = function() {
        var d = a(this.lowerCanvasEl);
        return d && d.createPNGStream();
      }, v.StaticCanvas.prototype.createJPEGStream = function(d) {
        var g = a(this.lowerCanvasEl);
        return g && g.createJPEGStream(d);
      });
    }
  }(), v.BaseBrush = v.util.createClass({ color: "rgb(0, 0, 0)", width: 1, shadow: null, strokeLineCap: "round", strokeLineJoin: "round", strokeMiterLimit: 10, strokeDashArray: null, limitedToCanvasSize: !1, _setBrushStyles: function() {
    var s = this.canvas.contextTop;
    s.strokeStyle = this.color, s.lineWidth = this.width, s.lineCap = this.strokeLineCap, s.miterLimit = this.strokeMiterLimit, s.lineJoin = this.strokeLineJoin, s.setLineDash(this.strokeDashArray || []);
  }, _saveAndTransform: function(s) {
    var o = this.canvas.viewportTransform;
    s.save(), s.transform(o[0], o[1], o[2], o[3], o[4], o[5]);
  }, _setShadow: function() {
    if (this.shadow) {
      var s = this.canvas, o = this.shadow, l = s.contextTop, p = s.getZoom();
      s && s._isRetinaScaling() && (p *= v.devicePixelRatio), l.shadowColor = o.color, l.shadowBlur = o.blur * p, l.shadowOffsetX = o.offsetX * p, l.shadowOffsetY = o.offsetY * p;
    }
  }, needsFullRender: function() {
    return new v.Color(this.color).getAlpha() < 1 || !!this.shadow;
  }, _resetShadow: function() {
    var s = this.canvas.contextTop;
    s.shadowColor = "", s.shadowBlur = s.shadowOffsetX = s.shadowOffsetY = 0;
  }, _isOutSideCanvas: function(s) {
    return s.x < 0 || s.x > this.canvas.getWidth() || s.y < 0 || s.y > this.canvas.getHeight();
  } }), v.PencilBrush = v.util.createClass(v.BaseBrush, { decimate: 0.4, initialize: function(s) {
    this.canvas = s, this._points = [];
  }, _drawSegment: function(s, o, l) {
    var p = o.midPointFrom(l);
    return s.quadraticCurveTo(o.x, o.y, p.x, p.y), p;
  }, onMouseDown: function(s, o) {
    this.canvas._isMainEvent(o.e) && (this._prepareForDrawing(s), this._captureDrawingPath(s), this._render());
  }, onMouseMove: function(s, o) {
    if (this.canvas._isMainEvent(o.e) && (this.limitedToCanvasSize !== !0 || !this._isOutSideCanvas(s)) && this._captureDrawingPath(s) && this._points.length > 1) if (this.needsFullRender()) this.canvas.clearContext(this.canvas.contextTop), this._render();
    else {
      var l = this._points, p = l.length, n = this.canvas.contextTop;
      this._saveAndTransform(n), this.oldEnd && (n.beginPath(), n.moveTo(this.oldEnd.x, this.oldEnd.y)), this.oldEnd = this._drawSegment(n, l[p - 2], l[p - 1], !0), n.stroke(), n.restore();
    }
  }, onMouseUp: function(s) {
    return !this.canvas._isMainEvent(s.e) || (this.oldEnd = void 0, this._finalizeAndAddPath(), !1);
  }, _prepareForDrawing: function(s) {
    var o = new v.Point(s.x, s.y);
    this._reset(), this._addPoint(o), this.canvas.contextTop.moveTo(o.x, o.y);
  }, _addPoint: function(s) {
    return !(this._points.length > 1 && s.eq(this._points[this._points.length - 1]) || (this._points.push(s), 0));
  }, _reset: function() {
    this._points = [], this._setBrushStyles(), this._setShadow();
  }, _captureDrawingPath: function(s) {
    var o = new v.Point(s.x, s.y);
    return this._addPoint(o);
  }, _render: function() {
    var s, o, l = this.canvas.contextTop, p = this._points[0], n = this._points[1];
    if (this._saveAndTransform(l), l.beginPath(), this._points.length === 2 && p.x === n.x && p.y === n.y) {
      var r = this.width / 1e3;
      p = new v.Point(p.x, p.y), n = new v.Point(n.x, n.y), p.x -= r, n.x += r;
    }
    for (l.moveTo(p.x, p.y), s = 1, o = this._points.length; s < o; s++) this._drawSegment(l, p, n), p = this._points[s], n = this._points[s + 1];
    l.lineTo(p.x, p.y), l.stroke(), l.restore();
  }, convertPointsToSVGPath: function(s) {
    var o = this.width / 1e3;
    return v.util.getSmoothPathFromPoints(s, o);
  }, _isEmptySVGPath: function(s) {
    return v.util.joinPath(s) === "M 0 0 Q 0 0 0 0 L 0 0";
  }, createPath: function(s) {
    var o = new v.Path(s, { fill: null, stroke: this.color, strokeWidth: this.width, strokeLineCap: this.strokeLineCap, strokeMiterLimit: this.strokeMiterLimit, strokeLineJoin: this.strokeLineJoin, strokeDashArray: this.strokeDashArray });
    return this.shadow && (this.shadow.affectStroke = !0, o.shadow = new v.Shadow(this.shadow)), o;
  }, decimatePoints: function(s, o) {
    if (s.length <= 2) return s;
    var l, p = this.canvas.getZoom(), n = Math.pow(o / p, 2), r = s.length - 1, a = s[0], h = [a];
    for (l = 1; l < r - 1; l++) Math.pow(a.x - s[l].x, 2) + Math.pow(a.y - s[l].y, 2) >= n && (a = s[l], h.push(a));
    return h.push(s[r]), h;
  }, _finalizeAndAddPath: function() {
    this.canvas.contextTop.closePath(), this.decimate && (this._points = this.decimatePoints(this._points, this.decimate));
    var s = this.convertPointsToSVGPath(this._points);
    if (this._isEmptySVGPath(s)) this.canvas.requestRenderAll();
    else {
      var o = this.createPath(s);
      this.canvas.clearContext(this.canvas.contextTop), this.canvas.fire("before:path:created", { path: o }), this.canvas.add(o), this.canvas.requestRenderAll(), o.setCoords(), this._resetShadow(), this.canvas.fire("path:created", { path: o });
    }
  } }), v.CircleBrush = v.util.createClass(v.BaseBrush, { width: 10, initialize: function(s) {
    this.canvas = s, this.points = [];
  }, drawDot: function(s) {
    var o = this.addPoint(s), l = this.canvas.contextTop;
    this._saveAndTransform(l), this.dot(l, o), l.restore();
  }, dot: function(s, o) {
    s.fillStyle = o.fill, s.beginPath(), s.arc(o.x, o.y, o.radius, 0, 2 * Math.PI, !1), s.closePath(), s.fill();
  }, onMouseDown: function(s) {
    this.points.length = 0, this.canvas.clearContext(this.canvas.contextTop), this._setShadow(), this.drawDot(s);
  }, _render: function() {
    var s, o, l = this.canvas.contextTop, p = this.points;
    for (this._saveAndTransform(l), s = 0, o = p.length; s < o; s++) this.dot(l, p[s]);
    l.restore();
  }, onMouseMove: function(s) {
    this.limitedToCanvasSize === !0 && this._isOutSideCanvas(s) || (this.needsFullRender() ? (this.canvas.clearContext(this.canvas.contextTop), this.addPoint(s), this._render()) : this.drawDot(s));
  }, onMouseUp: function() {
    var s, o, l = this.canvas.renderOnAddRemove;
    this.canvas.renderOnAddRemove = !1;
    var p = [];
    for (s = 0, o = this.points.length; s < o; s++) {
      var n = this.points[s], r = new v.Circle({ radius: n.radius, left: n.x, top: n.y, originX: "center", originY: "center", fill: n.fill });
      this.shadow && (r.shadow = new v.Shadow(this.shadow)), p.push(r);
    }
    var a = new v.Group(p);
    a.canvas = this.canvas, this.canvas.fire("before:path:created", { path: a }), this.canvas.add(a), this.canvas.fire("path:created", { path: a }), this.canvas.clearContext(this.canvas.contextTop), this._resetShadow(), this.canvas.renderOnAddRemove = l, this.canvas.requestRenderAll();
  }, addPoint: function(s) {
    var o = new v.Point(s.x, s.y), l = v.util.getRandomInt(Math.max(0, this.width - 20), this.width + 20) / 2, p = new v.Color(this.color).setAlpha(v.util.getRandomInt(0, 100) / 100).toRgba();
    return o.radius = l, o.fill = p, this.points.push(o), o;
  } }), v.SprayBrush = v.util.createClass(v.BaseBrush, { width: 10, density: 20, dotWidth: 1, dotWidthVariance: 1, randomOpacity: !1, optimizeOverlapping: !0, initialize: function(s) {
    this.canvas = s, this.sprayChunks = [];
  }, onMouseDown: function(s) {
    this.sprayChunks.length = 0, this.canvas.clearContext(this.canvas.contextTop), this._setShadow(), this.addSprayChunk(s), this.render(this.sprayChunkPoints);
  }, onMouseMove: function(s) {
    this.limitedToCanvasSize === !0 && this._isOutSideCanvas(s) || (this.addSprayChunk(s), this.render(this.sprayChunkPoints));
  }, onMouseUp: function() {
    var s = this.canvas.renderOnAddRemove;
    this.canvas.renderOnAddRemove = !1;
    for (var o = [], l = 0, p = this.sprayChunks.length; l < p; l++) for (var n = this.sprayChunks[l], r = 0, a = n.length; r < a; r++) {
      var h = new v.Rect({ width: n[r].width, height: n[r].width, left: n[r].x + 1, top: n[r].y + 1, originX: "center", originY: "center", fill: this.color });
      o.push(h);
    }
    this.optimizeOverlapping && (o = this._getOptimizedRects(o));
    var u = new v.Group(o);
    this.shadow && u.set("shadow", new v.Shadow(this.shadow)), this.canvas.fire("before:path:created", { path: u }), this.canvas.add(u), this.canvas.fire("path:created", { path: u }), this.canvas.clearContext(this.canvas.contextTop), this._resetShadow(), this.canvas.renderOnAddRemove = s, this.canvas.requestRenderAll();
  }, _getOptimizedRects: function(s) {
    var o, l, p, n = {};
    for (l = 0, p = s.length; l < p; l++) n[o = s[l].left + "" + s[l].top] || (n[o] = s[l]);
    var r = [];
    for (o in n) r.push(n[o]);
    return r;
  }, render: function(s) {
    var o, l, p = this.canvas.contextTop;
    for (p.fillStyle = this.color, this._saveAndTransform(p), o = 0, l = s.length; o < l; o++) {
      var n = s[o];
      n.opacity !== void 0 && (p.globalAlpha = n.opacity), p.fillRect(n.x, n.y, n.width, n.width);
    }
    p.restore();
  }, _render: function() {
    var s, o, l = this.canvas.contextTop;
    for (l.fillStyle = this.color, this._saveAndTransform(l), s = 0, o = this.sprayChunks.length; s < o; s++) this.render(this.sprayChunks[s]);
    l.restore();
  }, addSprayChunk: function(s) {
    this.sprayChunkPoints = [];
    var o, l, p, n, r = this.width / 2;
    for (n = 0; n < this.density; n++) {
      o = v.util.getRandomInt(s.x - r, s.x + r), l = v.util.getRandomInt(s.y - r, s.y + r), p = this.dotWidthVariance ? v.util.getRandomInt(Math.max(1, this.dotWidth - this.dotWidthVariance), this.dotWidth + this.dotWidthVariance) : this.dotWidth;
      var a = new v.Point(o, l);
      a.width = p, this.randomOpacity && (a.opacity = v.util.getRandomInt(0, 100) / 100), this.sprayChunkPoints.push(a);
    }
    this.sprayChunks.push(this.sprayChunkPoints);
  } }), v.PatternBrush = v.util.createClass(v.PencilBrush, { getPatternSrc: function() {
    var s = v.util.createCanvasElement(), o = s.getContext("2d");
    return s.width = s.height = 25, o.fillStyle = this.color, o.beginPath(), o.arc(10, 10, 10, 0, 2 * Math.PI, !1), o.closePath(), o.fill(), s;
  }, getPatternSrcFunction: function() {
    return String(this.getPatternSrc).replace("this.color", '"' + this.color + '"');
  }, getPattern: function() {
    return this.canvas.contextTop.createPattern(this.source || this.getPatternSrc(), "repeat");
  }, _setBrushStyles: function() {
    this.callSuper("_setBrushStyles"), this.canvas.contextTop.strokeStyle = this.getPattern();
  }, createPath: function(s) {
    var o = this.callSuper("createPath", s), l = o._getLeftTopCoords().scalarAdd(o.strokeWidth / 2);
    return o.stroke = new v.Pattern({ source: this.source || this.getPatternSrcFunction(), offsetX: -l.x, offsetY: -l.y }), o;
  } }), function() {
    var s = v.util.getPointer, o = v.util.degreesToRadians, l = v.util.isTouchEvent;
    for (var p in v.Canvas = v.util.createClass(v.StaticCanvas, { initialize: function(n, r) {
      r || (r = {}), this.renderAndResetBound = this.renderAndReset.bind(this), this.requestRenderAllBound = this.requestRenderAll.bind(this), this._initStatic(n, r), this._initInteractive(), this._createCacheCanvas();
    }, uniformScaling: !0, uniScaleKey: "shiftKey", centeredScaling: !1, centeredRotation: !1, centeredKey: "altKey", altActionKey: "shiftKey", interactive: !0, selection: !0, selectionKey: "shiftKey", altSelectionKey: null, selectionColor: "rgba(100, 100, 255, 0.3)", selectionDashArray: [], selectionBorderColor: "rgba(255, 255, 255, 0.3)", selectionLineWidth: 1, selectionFullyContained: !1, hoverCursor: "move", moveCursor: "move", defaultCursor: "default", freeDrawingCursor: "crosshair", rotationCursor: "crosshair", notAllowedCursor: "not-allowed", containerClass: "canvas-container", perPixelTargetFind: !1, targetFindTolerance: 0, skipTargetFind: !1, isDrawingMode: !1, preserveObjectStacking: !1, snapAngle: 0, snapThreshold: null, stopContextMenu: !1, fireRightClick: !1, fireMiddleClick: !1, targets: [], _hoveredTarget: null, _hoveredTargets: [], _initInteractive: function() {
      this._currentTransform = null, this._groupSelector = null, this._initWrapperElement(), this._createUpperCanvas(), this._initEventListeners(), this._initRetinaScaling(), this.freeDrawingBrush = v.PencilBrush && new v.PencilBrush(this), this.calcOffset();
    }, _chooseObjectsToRender: function() {
      var n, r, a, h = this.getActiveObjects();
      if (h.length > 0 && !this.preserveObjectStacking) {
        r = [], a = [];
        for (var u = 0, d = this._objects.length; u < d; u++) n = this._objects[u], h.indexOf(n) === -1 ? r.push(n) : a.push(n);
        h.length > 1 && (this._activeObject._objects = a), r.push.apply(r, a);
      } else r = this._objects;
      return r;
    }, renderAll: function() {
      !this.contextTopDirty || this._groupSelector || this.isDrawingMode || (this.clearContext(this.contextTop), this.contextTopDirty = !1), this.hasLostContext && this.renderTopLayer(this.contextTop);
      var n = this.contextContainer;
      return this.renderCanvas(n, this._chooseObjectsToRender()), this;
    }, renderTopLayer: function(n) {
      n.save(), this.isDrawingMode && this._isCurrentlyDrawing && (this.freeDrawingBrush && this.freeDrawingBrush._render(), this.contextTopDirty = !0), this.selection && this._groupSelector && (this._drawSelection(n), this.contextTopDirty = !0), n.restore();
    }, renderTop: function() {
      var n = this.contextTop;
      return this.clearContext(n), this.renderTopLayer(n), this.fire("after:render"), this;
    }, _normalizePointer: function(n, r) {
      var a = n.calcTransformMatrix(), h = v.util.invertTransform(a), u = this.restorePointerVpt(r);
      return v.util.transformPoint(u, h);
    }, isTargetTransparent: function(n, r, a) {
      if (n.shouldCache() && n._cacheCanvas && n !== this._activeObject) {
        var h = this._normalizePointer(n, { x: r, y: a }), u = Math.max(n.cacheTranslationX + h.x * n.zoomX, 0), d = Math.max(n.cacheTranslationY + h.y * n.zoomY, 0);
        return v.util.isTransparent(n._cacheContext, Math.round(u), Math.round(d), this.targetFindTolerance);
      }
      var g = this.contextCache, y = n.selectionBackgroundColor, x = this.viewportTransform;
      return n.selectionBackgroundColor = "", this.clearContext(g), g.save(), g.transform(x[0], x[1], x[2], x[3], x[4], x[5]), n.render(g), g.restore(), n.selectionBackgroundColor = y, v.util.isTransparent(g, r, a, this.targetFindTolerance);
    }, _isSelectionKeyPressed: function(n) {
      return Object.prototype.toString.call(this.selectionKey) === "[object Array]" ? !!this.selectionKey.find(function(r) {
        return n[r] === !0;
      }) : n[this.selectionKey];
    }, _shouldClearSelection: function(n, r) {
      var a = this.getActiveObjects(), h = this._activeObject;
      return !r || r && h && a.length > 1 && a.indexOf(r) === -1 && h !== r && !this._isSelectionKeyPressed(n) || r && !r.evented || r && !r.selectable && h && h !== r;
    }, _shouldCenterTransform: function(n, r, a) {
      var h;
      if (n) return r === "scale" || r === "scaleX" || r === "scaleY" || r === "resizing" ? h = this.centeredScaling || n.centeredScaling : r === "rotate" && (h = this.centeredRotation || n.centeredRotation), h ? !a : a;
    }, _getOriginFromCorner: function(n, r) {
      var a = { x: n.originX, y: n.originY };
      return r === "ml" || r === "tl" || r === "bl" ? a.x = "right" : r !== "mr" && r !== "tr" && r !== "br" || (a.x = "left"), r === "tl" || r === "mt" || r === "tr" ? a.y = "bottom" : r !== "bl" && r !== "mb" && r !== "br" || (a.y = "top"), a;
    }, _getActionFromCorner: function(n, r, a, h) {
      if (!r || !n) return "drag";
      var u = h.controls[r];
      return u.getActionName(a, u, h);
    }, _setupCurrentTransform: function(n, r, a) {
      if (r) {
        var h = this.getPointer(n), u = r.__corner, d = r.controls[u], g = a && u ? d.getActionHandler(n, r, d) : v.controlsUtils.dragHandler, y = this._getActionFromCorner(a, u, n, r), x = this._getOriginFromCorner(r, u), C = n[this.centeredKey], b = { target: r, action: y, actionHandler: g, corner: u, scaleX: r.scaleX, scaleY: r.scaleY, skewX: r.skewX, skewY: r.skewY, offsetX: h.x - r.left, offsetY: h.y - r.top, originX: x.x, originY: x.y, ex: h.x, ey: h.y, lastX: h.x, lastY: h.y, theta: o(r.angle), width: r.width * r.scaleX, shiftKey: n.shiftKey, altKey: C, original: v.util.saveObjectTransform(r) };
        this._shouldCenterTransform(r, y, C) && (b.originX = "center", b.originY = "center"), b.original.originX = x.x, b.original.originY = x.y, this._currentTransform = b, this._beforeTransform(n);
      }
    }, setCursor: function(n) {
      this.upperCanvasEl.style.cursor = n;
    }, _drawSelection: function(n) {
      var r = this._groupSelector, a = new v.Point(r.ex, r.ey), h = v.util.transformPoint(a, this.viewportTransform), u = new v.Point(r.ex + r.left, r.ey + r.top), d = v.util.transformPoint(u, this.viewportTransform), g = Math.min(h.x, d.x), y = Math.min(h.y, d.y), x = Math.max(h.x, d.x), C = Math.max(h.y, d.y), b = this.selectionLineWidth / 2;
      this.selectionColor && (n.fillStyle = this.selectionColor, n.fillRect(g, y, x - g, C - y)), this.selectionLineWidth && this.selectionBorderColor && (n.lineWidth = this.selectionLineWidth, n.strokeStyle = this.selectionBorderColor, g += b, y += b, x -= b, C -= b, v.Object.prototype._setLineDash.call(this, n, this.selectionDashArray), n.strokeRect(g, y, x - g, C - y));
    }, findTarget: function(n, r) {
      if (!this.skipTargetFind) {
        var a, h, u = this.getPointer(n, !0), d = this._activeObject, g = this.getActiveObjects(), y = l(n), x = g.length > 1 && !r || g.length === 1;
        if (this.targets = [], x && d._findTargetCorner(u, y) || g.length > 1 && !r && d === this._searchPossibleTargets([d], u)) return d;
        if (g.length === 1 && d === this._searchPossibleTargets([d], u)) {
          if (!this.preserveObjectStacking) return d;
          a = d, h = this.targets, this.targets = [];
        }
        var C = this._searchPossibleTargets(this._objects, u);
        return n[this.altSelectionKey] && C && a && C !== a && (C = a, this.targets = h), C;
      }
    }, _checkTarget: function(n, r, a) {
      if (r && r.visible && r.evented && r.containsPoint(n) && (!this.perPixelTargetFind && !r.perPixelTargetFind || r.isEditing || !this.isTargetTransparent(r, a.x, a.y)))
        return !0;
    }, _searchPossibleTargets: function(n, r) {
      for (var a, h, u = n.length; u--; ) {
        var d = n[u], g = d.group ? this._normalizePointer(d.group, r) : r;
        if (this._checkTarget(g, d, r)) {
          (a = n[u]).subTargetCheck && a instanceof v.Group && (h = this._searchPossibleTargets(a._objects, r)) && this.targets.push(h);
          break;
        }
      }
      return a;
    }, restorePointerVpt: function(n) {
      return v.util.transformPoint(n, v.util.invertTransform(this.viewportTransform));
    }, getPointer: function(n, r) {
      if (this._absolutePointer && !r) return this._absolutePointer;
      if (this._pointer && r) return this._pointer;
      var a, h = s(n), u = this.upperCanvasEl, d = u.getBoundingClientRect(), g = d.width || 0, y = d.height || 0;
      g && y || ("top" in d && "bottom" in d && (y = Math.abs(d.top - d.bottom)), "right" in d && "left" in d && (g = Math.abs(d.right - d.left))), this.calcOffset(), h.x = h.x - this._offset.left, h.y = h.y - this._offset.top, r || (h = this.restorePointerVpt(h));
      var x = this.getRetinaScaling();
      return x !== 1 && (h.x /= x, h.y /= x), a = g === 0 || y === 0 ? { width: 1, height: 1 } : { width: u.width / g, height: u.height / y }, { x: h.x * a.width, y: h.y * a.height };
    }, _createUpperCanvas: function() {
      var n = this.lowerCanvasEl.className.replace(/\s*lower-canvas\s*/, ""), r = this.lowerCanvasEl, a = this.upperCanvasEl;
      a ? a.className = "" : (a = this._createCanvasElement(), this.upperCanvasEl = a), v.util.addClass(a, "upper-canvas " + n), this.wrapperEl.appendChild(a), this._copyCanvasStyle(r, a), this._applyCanvasStyle(a), this.contextTop = a.getContext("2d");
    }, _createCacheCanvas: function() {
      this.cacheCanvasEl = this._createCanvasElement(), this.cacheCanvasEl.setAttribute("width", this.width), this.cacheCanvasEl.setAttribute("height", this.height), this.contextCache = this.cacheCanvasEl.getContext("2d");
    }, _initWrapperElement: function() {
      this.wrapperEl = v.util.wrapElement(this.lowerCanvasEl, "div", { class: this.containerClass }), v.util.setStyle(this.wrapperEl, { width: this.width + "px", height: this.height + "px", position: "relative" }), v.util.makeElementUnselectable(this.wrapperEl);
    }, _applyCanvasStyle: function(n) {
      var r = this.width || n.width, a = this.height || n.height;
      v.util.setStyle(n, { position: "absolute", width: r + "px", height: a + "px", left: 0, top: 0, "touch-action": this.allowTouchScrolling ? "manipulation" : "none", "-ms-touch-action": this.allowTouchScrolling ? "manipulation" : "none" }), n.width = r, n.height = a, v.util.makeElementUnselectable(n);
    }, _copyCanvasStyle: function(n, r) {
      r.style.cssText = n.style.cssText;
    }, getSelectionContext: function() {
      return this.contextTop;
    }, getSelectionElement: function() {
      return this.upperCanvasEl;
    }, getActiveObject: function() {
      return this._activeObject;
    }, getActiveObjects: function() {
      var n = this._activeObject;
      return n ? n.type === "activeSelection" && n._objects ? n._objects.slice(0) : [n] : [];
    }, _onObjectRemoved: function(n) {
      n === this._activeObject && (this.fire("before:selection:cleared", { target: n }), this._discardActiveObject(), this.fire("selection:cleared", { target: n }), n.fire("deselected")), n === this._hoveredTarget && (this._hoveredTarget = null, this._hoveredTargets = []), this.callSuper("_onObjectRemoved", n);
    }, _fireSelectionEvents: function(n, r) {
      var a = !1, h = this.getActiveObjects(), u = [], d = [];
      n.forEach(function(g) {
        h.indexOf(g) === -1 && (a = !0, g.fire("deselected", { e: r, target: g }), d.push(g));
      }), h.forEach(function(g) {
        n.indexOf(g) === -1 && (a = !0, g.fire("selected", { e: r, target: g }), u.push(g));
      }), n.length > 0 && h.length > 0 ? a && this.fire("selection:updated", { e: r, selected: u, deselected: d, updated: u[0] || d[0], target: this._activeObject }) : h.length > 0 ? this.fire("selection:created", { e: r, selected: u, target: this._activeObject }) : n.length > 0 && this.fire("selection:cleared", { e: r, deselected: d });
    }, setActiveObject: function(n, r) {
      var a = this.getActiveObjects();
      return this._setActiveObject(n, r), this._fireSelectionEvents(a, r), this;
    }, _setActiveObject: function(n, r) {
      return this._activeObject !== n && !!this._discardActiveObject(r, n) && !n.onSelect({ e: r }) && (this._activeObject = n, !0);
    }, _discardActiveObject: function(n, r) {
      var a = this._activeObject;
      if (a) {
        if (a.onDeselect({ e: n, object: r })) return !1;
        this._activeObject = null;
      }
      return !0;
    }, discardActiveObject: function(n) {
      var r = this.getActiveObjects(), a = this.getActiveObject();
      return r.length && this.fire("before:selection:cleared", { target: a, e: n }), this._discardActiveObject(n), this._fireSelectionEvents(r, n), this;
    }, dispose: function() {
      var n = this.wrapperEl;
      return this.removeListeners(), n.removeChild(this.upperCanvasEl), n.removeChild(this.lowerCanvasEl), this.contextCache = null, this.contextTop = null, ["upperCanvasEl", "cacheCanvasEl"].forEach((function(r) {
        v.util.cleanUpJsdomNode(this[r]), this[r] = void 0;
      }).bind(this)), n.parentNode && n.parentNode.replaceChild(this.lowerCanvasEl, this.wrapperEl), delete this.wrapperEl, v.StaticCanvas.prototype.dispose.call(this), this;
    }, clear: function() {
      return this.discardActiveObject(), this.clearContext(this.contextTop), this.callSuper("clear");
    }, drawControls: function(n) {
      var r = this._activeObject;
      r && r._renderControls(n);
    }, _toObject: function(n, r, a) {
      var h = this._realizeGroupTransformOnObject(n), u = this.callSuper("_toObject", n, r, a);
      return this._unwindGroupTransformOnObject(n, h), u;
    }, _realizeGroupTransformOnObject: function(n) {
      if (n.group && n.group.type === "activeSelection" && this._activeObject === n.group) {
        var r = {};
        return ["angle", "flipX", "flipY", "left", "scaleX", "scaleY", "skewX", "skewY", "top"].forEach(function(a) {
          r[a] = n[a];
        }), v.util.addTransformToObject(n, this._activeObject.calcOwnMatrix()), r;
      }
      return null;
    }, _unwindGroupTransformOnObject: function(n, r) {
      r && n.set(r);
    }, _setSVGObject: function(n, r, a) {
      var h = this._realizeGroupTransformOnObject(r);
      this.callSuper("_setSVGObject", n, r, a), this._unwindGroupTransformOnObject(r, h);
    }, setViewportTransform: function(n) {
      this.renderOnAddRemove && this._activeObject && this._activeObject.isEditing && this._activeObject.clearContextTop(), v.StaticCanvas.prototype.setViewportTransform.call(this, n);
    } }), v.StaticCanvas) p !== "prototype" && (v.Canvas[p] = v.StaticCanvas[p]);
  }(), function() {
    var s = v.util.addListener, o = v.util.removeListener, l = { passive: !1 };
    function p(n, r) {
      return n.button && n.button === r - 1;
    }
    v.util.object.extend(v.Canvas.prototype, { mainTouchId: null, _initEventListeners: function() {
      this.removeListeners(), this._bindEvents(), this.addOrRemove(s, "add");
    }, _getEventPrefix: function() {
      return this.enablePointerEvents ? "pointer" : "mouse";
    }, addOrRemove: function(n, r) {
      var a = this.upperCanvasEl, h = this._getEventPrefix();
      n(v.window, "resize", this._onResize), n(a, h + "down", this._onMouseDown), n(a, h + "move", this._onMouseMove, l), n(a, h + "out", this._onMouseOut), n(a, h + "enter", this._onMouseEnter), n(a, "wheel", this._onMouseWheel), n(a, "contextmenu", this._onContextMenu), n(a, "dblclick", this._onDoubleClick), n(a, "dragover", this._onDragOver), n(a, "dragenter", this._onDragEnter), n(a, "dragleave", this._onDragLeave), n(a, "drop", this._onDrop), this.enablePointerEvents || n(a, "touchstart", this._onTouchStart, l), F !== void 0 && r in F && (F[r](a, "gesture", this._onGesture), F[r](a, "drag", this._onDrag), F[r](a, "orientation", this._onOrientationChange), F[r](a, "shake", this._onShake), F[r](a, "longpress", this._onLongPress));
    }, removeListeners: function() {
      this.addOrRemove(o, "remove");
      var n = this._getEventPrefix();
      o(v.document, n + "up", this._onMouseUp), o(v.document, "touchend", this._onTouchEnd, l), o(v.document, n + "move", this._onMouseMove, l), o(v.document, "touchmove", this._onMouseMove, l);
    }, _bindEvents: function() {
      this.eventsBound || (this._onMouseDown = this._onMouseDown.bind(this), this._onTouchStart = this._onTouchStart.bind(this), this._onMouseMove = this._onMouseMove.bind(this), this._onMouseUp = this._onMouseUp.bind(this), this._onTouchEnd = this._onTouchEnd.bind(this), this._onResize = this._onResize.bind(this), this._onGesture = this._onGesture.bind(this), this._onDrag = this._onDrag.bind(this), this._onShake = this._onShake.bind(this), this._onLongPress = this._onLongPress.bind(this), this._onOrientationChange = this._onOrientationChange.bind(this), this._onMouseWheel = this._onMouseWheel.bind(this), this._onMouseOut = this._onMouseOut.bind(this), this._onMouseEnter = this._onMouseEnter.bind(this), this._onContextMenu = this._onContextMenu.bind(this), this._onDoubleClick = this._onDoubleClick.bind(this), this._onDragOver = this._onDragOver.bind(this), this._onDragEnter = this._simpleEventHandler.bind(this, "dragenter"), this._onDragLeave = this._simpleEventHandler.bind(this, "dragleave"), this._onDrop = this._simpleEventHandler.bind(this, "drop"), this.eventsBound = !0);
    }, _onGesture: function(n, r) {
      this.__onTransformGesture && this.__onTransformGesture(n, r);
    }, _onDrag: function(n, r) {
      this.__onDrag && this.__onDrag(n, r);
    }, _onMouseWheel: function(n) {
      this.__onMouseWheel(n);
    }, _onMouseOut: function(n) {
      var r = this._hoveredTarget;
      this.fire("mouse:out", { target: r, e: n }), this._hoveredTarget = null, r && r.fire("mouseout", { e: n });
      var a = this;
      this._hoveredTargets.forEach(function(h) {
        a.fire("mouse:out", { target: r, e: n }), h && r.fire("mouseout", { e: n });
      }), this._hoveredTargets = [], this._iTextInstances && this._iTextInstances.forEach(function(h) {
        h.isEditing && h.hiddenTextarea.focus();
      });
    }, _onMouseEnter: function(n) {
      this._currentTransform || this.findTarget(n) || (this.fire("mouse:over", { target: null, e: n }), this._hoveredTarget = null, this._hoveredTargets = []);
    }, _onOrientationChange: function(n, r) {
      this.__onOrientationChange && this.__onOrientationChange(n, r);
    }, _onShake: function(n, r) {
      this.__onShake && this.__onShake(n, r);
    }, _onLongPress: function(n, r) {
      this.__onLongPress && this.__onLongPress(n, r);
    }, _onDragOver: function(n) {
      n.preventDefault();
      var r = this._simpleEventHandler("dragover", n);
      this._fireEnterLeaveEvents(r, n);
    }, _onContextMenu: function(n) {
      return this.stopContextMenu && (n.stopPropagation(), n.preventDefault()), !1;
    }, _onDoubleClick: function(n) {
      this._cacheTransformEventData(n), this._handleEvent(n, "dblclick"), this._resetTransformEventData(n);
    }, getPointerId: function(n) {
      var r = n.changedTouches;
      return r ? r[0] && r[0].identifier : this.enablePointerEvents ? n.pointerId : -1;
    }, _isMainEvent: function(n) {
      return n.isPrimary === !0 || n.isPrimary !== !1 && (n.type === "touchend" && n.touches.length === 0 || !n.changedTouches || n.changedTouches[0].identifier === this.mainTouchId);
    }, _onTouchStart: function(n) {
      n.preventDefault(), this.mainTouchId === null && (this.mainTouchId = this.getPointerId(n)), this.__onMouseDown(n), this._resetTransformEventData();
      var r = this.upperCanvasEl, a = this._getEventPrefix();
      s(v.document, "touchend", this._onTouchEnd, l), s(v.document, "touchmove", this._onMouseMove, l), o(r, a + "down", this._onMouseDown);
    }, _onMouseDown: function(n) {
      this.__onMouseDown(n), this._resetTransformEventData();
      var r = this.upperCanvasEl, a = this._getEventPrefix();
      o(r, a + "move", this._onMouseMove, l), s(v.document, a + "up", this._onMouseUp), s(v.document, a + "move", this._onMouseMove, l);
    }, _onTouchEnd: function(n) {
      if (!(n.touches.length > 0)) {
        this.__onMouseUp(n), this._resetTransformEventData(), this.mainTouchId = null;
        var r = this._getEventPrefix();
        o(v.document, "touchend", this._onTouchEnd, l), o(v.document, "touchmove", this._onMouseMove, l);
        var a = this;
        this._willAddMouseDown && clearTimeout(this._willAddMouseDown), this._willAddMouseDown = setTimeout(function() {
          s(a.upperCanvasEl, r + "down", a._onMouseDown), a._willAddMouseDown = 0;
        }, 400);
      }
    }, _onMouseUp: function(n) {
      this.__onMouseUp(n), this._resetTransformEventData();
      var r = this.upperCanvasEl, a = this._getEventPrefix();
      this._isMainEvent(n) && (o(v.document, a + "up", this._onMouseUp), o(v.document, a + "move", this._onMouseMove, l), s(r, a + "move", this._onMouseMove, l));
    }, _onMouseMove: function(n) {
      !this.allowTouchScrolling && n.preventDefault && n.preventDefault(), this.__onMouseMove(n);
    }, _onResize: function() {
      this.calcOffset();
    }, _shouldRender: function(n) {
      var r = this._activeObject;
      return !!(!!r != !!n || r && n && r !== n) || (r && r.isEditing, !1);
    }, __onMouseUp: function(n) {
      var r, a = this._currentTransform, h = this._groupSelector, u = !1, d = !h || h.left === 0 && h.top === 0;
      if (this._cacheTransformEventData(n), r = this._target, this._handleEvent(n, "up:before"), p(n, 3)) this.fireRightClick && this._handleEvent(n, "up", 3, d);
      else {
        if (p(n, 2)) return this.fireMiddleClick && this._handleEvent(n, "up", 2, d), void this._resetTransformEventData();
        if (this.isDrawingMode && this._isCurrentlyDrawing) this._onMouseUpInDrawingMode(n);
        else if (this._isMainEvent(n)) {
          if (a && (this._finalizeCurrentTransform(n), u = a.actionPerformed), !d) {
            var g = r === this._activeObject;
            this._maybeGroupObjects(n), u || (u = this._shouldRender(r) || !g && r === this._activeObject);
          }
          if (r) {
            if (r.selectable && r !== this._activeObject && r.activeOn === "up") this.setActiveObject(r, n), u = !0;
            else {
              var y = r._findTargetCorner(this.getPointer(n, !0), v.util.isTouchEvent(n)), x = r.controls[y], C = x && x.getMouseUpHandler(n, r, x);
              if (C) {
                var b = this.getPointer(n);
                C(n, a, b.x, b.y);
              }
            }
            r.isMoving = !1;
          }
          this._setCursorFromEvent(n, r), this._handleEvent(n, "up", 1, d), this._groupSelector = null, this._currentTransform = null, r && (r.__corner = 0), u ? this.requestRenderAll() : d || this.renderTop();
        }
      }
    }, _simpleEventHandler: function(n, r) {
      var a = this.findTarget(r), h = this.targets, u = { e: r, target: a, subTargets: h };
      if (this.fire(n, u), a && a.fire(n, u), !h) return a;
      for (var d = 0; d < h.length; d++) h[d].fire(n, u);
      return a;
    }, _handleEvent: function(n, r, a, h) {
      var u = this._target, d = this.targets || [], g = { e: n, target: u, subTargets: d, button: a || 1, isClick: h || !1, pointer: this._pointer, absolutePointer: this._absolutePointer, transform: this._currentTransform };
      r === "up" && (g.currentTarget = this.findTarget(n), g.currentSubTargets = this.targets), this.fire("mouse:" + r, g), u && u.fire("mouse" + r, g);
      for (var y = 0; y < d.length; y++) d[y].fire("mouse" + r, g);
    }, _finalizeCurrentTransform: function(n) {
      var r, a = this._currentTransform, h = a.target, u = { e: n, target: h, transform: a, action: a.action };
      h._scaling && (h._scaling = !1), h.setCoords(), (a.actionPerformed || this.stateful && h.hasStateChanged()) && (a.actionPerformed && (r = this._addEventOptions(u, a), this._fire(r, u)), this._fire("modified", u));
    }, _addEventOptions: function(n, r) {
      var a, h;
      switch (r.action) {
        case "scaleX":
          a = "scaled", h = "x";
          break;
        case "scaleY":
          a = "scaled", h = "y";
          break;
        case "skewX":
          a = "skewed", h = "x";
          break;
        case "skewY":
          a = "skewed", h = "y";
          break;
        case "scale":
          a = "scaled", h = "equally";
          break;
        case "rotate":
          a = "rotated";
          break;
        case "drag":
          a = "moved";
      }
      return n.by = h, a;
    }, _onMouseDownInDrawingMode: function(n) {
      this._isCurrentlyDrawing = !0, this.getActiveObject() && this.discardActiveObject(n).requestRenderAll();
      var r = this.getPointer(n);
      this.freeDrawingBrush.onMouseDown(r, { e: n, pointer: r }), this._handleEvent(n, "down");
    }, _onMouseMoveInDrawingMode: function(n) {
      if (this._isCurrentlyDrawing) {
        var r = this.getPointer(n);
        this.freeDrawingBrush.onMouseMove(r, { e: n, pointer: r });
      }
      this.setCursor(this.freeDrawingCursor), this._handleEvent(n, "move");
    }, _onMouseUpInDrawingMode: function(n) {
      var r = this.getPointer(n);
      this._isCurrentlyDrawing = this.freeDrawingBrush.onMouseUp({ e: n, pointer: r }), this._handleEvent(n, "up");
    }, __onMouseDown: function(n) {
      this._cacheTransformEventData(n), this._handleEvent(n, "down:before");
      var r = this._target;
      if (p(n, 3)) this.fireRightClick && this._handleEvent(n, "down", 3);
      else if (p(n, 2)) this.fireMiddleClick && this._handleEvent(n, "down", 2);
      else if (this.isDrawingMode) this._onMouseDownInDrawingMode(n);
      else if (this._isMainEvent(n) && !this._currentTransform) {
        var a = this._pointer;
        this._previousPointer = a;
        var h = this._shouldRender(r), u = this._shouldGroup(n, r);
        if (this._shouldClearSelection(n, r) ? this.discardActiveObject(n) : u && (this._handleGrouping(n, r), r = this._activeObject), !this.selection || r && (r.selectable || r.isEditing || r === this._activeObject) || (this._groupSelector = { ex: this._absolutePointer.x, ey: this._absolutePointer.y, top: 0, left: 0 }), r) {
          var d = r === this._activeObject;
          r.selectable && r.activeOn === "down" && this.setActiveObject(r, n);
          var g = r._findTargetCorner(this.getPointer(n, !0), v.util.isTouchEvent(n));
          if (r.__corner = g, r === this._activeObject && (g || !u)) {
            this._setupCurrentTransform(n, r, d);
            var y = r.controls[g], x = (a = this.getPointer(n), y && y.getMouseDownHandler(n, r, y));
            x && x(n, this._currentTransform, a.x, a.y);
          }
        }
        this._handleEvent(n, "down"), (h || u) && this.requestRenderAll();
      }
    }, _resetTransformEventData: function() {
      this._target = null, this._pointer = null, this._absolutePointer = null;
    }, _cacheTransformEventData: function(n) {
      this._resetTransformEventData(), this._pointer = this.getPointer(n, !0), this._absolutePointer = this.restorePointerVpt(this._pointer), this._target = this._currentTransform ? this._currentTransform.target : this.findTarget(n) || null;
    }, _beforeTransform: function(n) {
      var r = this._currentTransform;
      this.stateful && r.target.saveState(), this.fire("before:transform", { e: n, transform: r });
    }, __onMouseMove: function(n) {
      var r, a;
      if (this._handleEvent(n, "move:before"), this._cacheTransformEventData(n), this.isDrawingMode) this._onMouseMoveInDrawingMode(n);
      else if (this._isMainEvent(n)) {
        var h = this._groupSelector;
        h ? (a = this._absolutePointer, h.left = a.x - h.ex, h.top = a.y - h.ey, this.renderTop()) : this._currentTransform ? this._transformObject(n) : (r = this.findTarget(n) || null, this._setCursorFromEvent(n, r), this._fireOverOutEvents(r, n)), this._handleEvent(n, "move"), this._resetTransformEventData();
      }
    }, _fireOverOutEvents: function(n, r) {
      var a = this._hoveredTarget, h = this._hoveredTargets, u = this.targets, d = Math.max(h.length, u.length);
      this.fireSyntheticInOutEvents(n, r, { oldTarget: a, evtOut: "mouseout", canvasEvtOut: "mouse:out", evtIn: "mouseover", canvasEvtIn: "mouse:over" });
      for (var g = 0; g < d; g++) this.fireSyntheticInOutEvents(u[g], r, { oldTarget: h[g], evtOut: "mouseout", evtIn: "mouseover" });
      this._hoveredTarget = n, this._hoveredTargets = this.targets.concat();
    }, _fireEnterLeaveEvents: function(n, r) {
      var a = this._draggedoverTarget, h = this._hoveredTargets, u = this.targets, d = Math.max(h.length, u.length);
      this.fireSyntheticInOutEvents(n, r, { oldTarget: a, evtOut: "dragleave", evtIn: "dragenter" });
      for (var g = 0; g < d; g++) this.fireSyntheticInOutEvents(u[g], r, { oldTarget: h[g], evtOut: "dragleave", evtIn: "dragenter" });
      this._draggedoverTarget = n;
    }, fireSyntheticInOutEvents: function(n, r, a) {
      var h, u, d, g = a.oldTarget, y = g !== n, x = a.canvasEvtIn, C = a.canvasEvtOut;
      y && (h = { e: r, target: n, previousTarget: g }, u = { e: r, target: g, nextTarget: n }), d = n && y, g && y && (C && this.fire(C, u), g.fire(a.evtOut, u)), d && (x && this.fire(x, h), n.fire(a.evtIn, h));
    }, __onMouseWheel: function(n) {
      this._cacheTransformEventData(n), this._handleEvent(n, "wheel"), this._resetTransformEventData();
    }, _transformObject: function(n) {
      var r = this.getPointer(n), a = this._currentTransform;
      a.reset = !1, a.shiftKey = n.shiftKey, a.altKey = n[this.centeredKey], this._performTransformAction(n, a, r), a.actionPerformed && this.requestRenderAll();
    }, _performTransformAction: function(n, r, a) {
      var h = a.x, u = a.y, d = r.action, g = !1, y = r.actionHandler;
      y && (g = y(n, r, h, u)), d === "drag" && g && (r.target.isMoving = !0, this.setCursor(r.target.moveCursor || this.moveCursor)), r.actionPerformed = r.actionPerformed || g;
    }, _fire: v.controlsUtils.fireEvent, _setCursorFromEvent: function(n, r) {
      if (!r) return this.setCursor(this.defaultCursor), !1;
      var a = r.hoverCursor || this.hoverCursor, h = this._activeObject && this._activeObject.type === "activeSelection" ? this._activeObject : null, u = (!h || !h.contains(r)) && r._findTargetCorner(this.getPointer(n, !0));
      u ? this.setCursor(this.getCornerCursor(u, r, n)) : (r.subTargetCheck && this.targets.concat().reverse().map(function(d) {
        a = d.hoverCursor || a;
      }), this.setCursor(a));
    }, getCornerCursor: function(n, r, a) {
      var h = r.controls[n];
      return h.cursorStyleHandler(a, h, r);
    } });
  }(), R = Math.min, J = Math.max, v.util.object.extend(v.Canvas.prototype, { _shouldGroup: function(s, o) {
    var l = this._activeObject;
    return l && this._isSelectionKeyPressed(s) && o && o.selectable && this.selection && (l !== o || l.type === "activeSelection") && !o.onSelect({ e: s });
  }, _handleGrouping: function(s, o) {
    var l = this._activeObject;
    l.__corner || (o !== l || (o = this.findTarget(s, !0)) && o.selectable) && (l && l.type === "activeSelection" ? this._updateActiveSelection(o, s) : this._createActiveSelection(o, s));
  }, _updateActiveSelection: function(s, o) {
    var l = this._activeObject, p = l._objects.slice(0);
    l.contains(s) ? (l.removeWithUpdate(s), this._hoveredTarget = s, this._hoveredTargets = this.targets.concat(), l.size() === 1 && this._setActiveObject(l.item(0), o)) : (l.addWithUpdate(s), this._hoveredTarget = l, this._hoveredTargets = this.targets.concat()), this._fireSelectionEvents(p, o);
  }, _createActiveSelection: function(s, o) {
    var l = this.getActiveObjects(), p = this._createGroup(s);
    this._hoveredTarget = p, this._setActiveObject(p, o), this._fireSelectionEvents(l, o);
  }, _createGroup: function(s) {
    var o = this._objects, l = o.indexOf(this._activeObject) < o.indexOf(s) ? [this._activeObject, s] : [s, this._activeObject];
    return this._activeObject.isEditing && this._activeObject.exitEditing(), new v.ActiveSelection(l, { canvas: this });
  }, _groupSelectedObjects: function(s) {
    var o, l = this._collectObjects(s);
    l.length === 1 ? this.setActiveObject(l[0], s) : l.length > 1 && (o = new v.ActiveSelection(l.reverse(), { canvas: this }), this.setActiveObject(o, s));
  }, _collectObjects: function(s) {
    for (var o, l = [], p = this._groupSelector.ex, n = this._groupSelector.ey, r = p + this._groupSelector.left, a = n + this._groupSelector.top, h = new v.Point(R(p, r), R(n, a)), u = new v.Point(J(p, r), J(n, a)), d = !this.selectionFullyContained, g = p === r && n === a, y = this._objects.length; y-- && !((o = this._objects[y]) && o.selectable && o.visible && (d && o.intersectsWithRect(h, u, !0) || o.isContainedWithinRect(h, u, !0) || d && o.containsPoint(h, null, !0) || d && o.containsPoint(u, null, !0)) && (l.push(o), g)); ) ;
    return l.length > 1 && (l = l.filter(function(x) {
      return !x.onSelect({ e: s });
    })), l;
  }, _maybeGroupObjects: function(s) {
    this.selection && this._groupSelector && this._groupSelectedObjects(s), this.setCursor(this.defaultCursor), this._groupSelector = null;
  } }), v.util.object.extend(v.StaticCanvas.prototype, { toDataURL: function(s) {
    s || (s = {});
    var o = s.format || "png", l = s.quality || 1, p = (s.multiplier || 1) * (s.enableRetinaScaling ? this.getRetinaScaling() : 1), n = this.toCanvasElement(p, s);
    return v.util.toDataURL(n, o, l);
  }, toCanvasElement: function(s, o) {
    s = s || 1;
    var l = ((o = o || {}).width || this.width) * s, p = (o.height || this.height) * s, n = this.getZoom(), r = this.width, a = this.height, h = n * s, u = this.viewportTransform, d = (u[4] - (o.left || 0)) * s, g = (u[5] - (o.top || 0)) * s, y = this.interactive, x = [h, 0, 0, h, d, g], C = this.enableRetinaScaling, b = v.util.createCanvasElement(), M = this.contextTop;
    return b.width = l, b.height = p, this.contextTop = null, this.enableRetinaScaling = !1, this.interactive = !1, this.viewportTransform = x, this.width = l, this.height = p, this.calcViewportBoundaries(), this.renderCanvas(b.getContext("2d"), this._objects), this.viewportTransform = u, this.width = r, this.height = a, this.calcViewportBoundaries(), this.interactive = y, this.enableRetinaScaling = C, this.contextTop = M, b;
  } }), v.util.object.extend(v.StaticCanvas.prototype, { loadFromJSON: function(s, o, l) {
    if (s) {
      var p = typeof s == "string" ? JSON.parse(s) : v.util.object.clone(s), n = this, r = p.clipPath, a = this.renderOnAddRemove;
      return this.renderOnAddRemove = !1, delete p.clipPath, this._enlivenObjects(p.objects, function(h) {
        n.clear(), n._setBgOverlay(p, function() {
          r ? n._enlivenObjects([r], function(u) {
            n.clipPath = u[0], n.__setupCanvas.call(n, p, h, a, o);
          }) : n.__setupCanvas.call(n, p, h, a, o);
        });
      }, l), this;
    }
  }, __setupCanvas: function(s, o, l, p) {
    var n = this;
    o.forEach(function(r, a) {
      n.insertAt(r, a);
    }), this.renderOnAddRemove = l, delete s.objects, delete s.backgroundImage, delete s.overlayImage, delete s.background, delete s.overlay, this._setOptions(s), this.renderAll(), p && p();
  }, _setBgOverlay: function(s, o) {
    var l = { backgroundColor: !1, overlayColor: !1, backgroundImage: !1, overlayImage: !1 };
    if (s.backgroundImage || s.overlayImage || s.background || s.overlay) {
      var p = function() {
        l.backgroundImage && l.overlayImage && l.backgroundColor && l.overlayColor && o && o();
      };
      this.__setBgOverlay("backgroundImage", s.backgroundImage, l, p), this.__setBgOverlay("overlayImage", s.overlayImage, l, p), this.__setBgOverlay("backgroundColor", s.background, l, p), this.__setBgOverlay("overlayColor", s.overlay, l, p);
    } else o && o();
  }, __setBgOverlay: function(s, o, l, p) {
    var n = this;
    if (!o) return l[s] = !0, void (p && p());
    s === "backgroundImage" || s === "overlayImage" ? v.util.enlivenObjects([o], function(r) {
      n[s] = r[0], l[s] = !0, p && p();
    }) : this["set" + v.util.string.capitalize(s, !0)](o, function() {
      l[s] = !0, p && p();
    });
  }, _enlivenObjects: function(s, o, l) {
    s && s.length !== 0 ? v.util.enlivenObjects(s, function(p) {
      o && o(p);
    }, null, l) : o && o([]);
  }, _toDataURL: function(s, o) {
    this.clone(function(l) {
      o(l.toDataURL(s));
    });
  }, _toDataURLWithMultiplier: function(s, o, l) {
    this.clone(function(p) {
      l(p.toDataURLWithMultiplier(s, o));
    });
  }, clone: function(s, o) {
    var l = JSON.stringify(this.toJSON(o));
    this.cloneWithoutData(function(p) {
      p.loadFromJSON(l, function() {
        s && s(p);
      });
    });
  }, cloneWithoutData: function(s) {
    var o = v.util.createCanvasElement();
    o.width = this.width, o.height = this.height;
    var l = new v.Canvas(o);
    this.backgroundImage ? (l.setBackgroundImage(this.backgroundImage.src, function() {
      l.renderAll(), s && s(l);
    }), l.backgroundImageOpacity = this.backgroundImageOpacity, l.backgroundImageStretch = this.backgroundImageStretch) : s && s(l);
  } }), de = v.util.degreesToRadians, ge = v.util.radiansToDegrees, v.util.object.extend(v.Canvas.prototype, { __onTransformGesture: function(s, o) {
    if (!this.isDrawingMode && s.touches && s.touches.length === 2 && o.gesture === "gesture") {
      var l = this.findTarget(s);
      l !== void 0 && (this.__gesturesParams = { e: s, self: o, target: l }, this.__gesturesRenderer()), this.fire("touch:gesture", { target: l, e: s, self: o });
    }
  }, __gesturesParams: null, __gesturesRenderer: function() {
    if (this.__gesturesParams !== null && this._currentTransform !== null) {
      var s = this.__gesturesParams.self, o = this._currentTransform, l = this.__gesturesParams.e;
      o.action = "scale", o.originX = o.originY = "center", this._scaleObjectBy(s.scale, l), s.rotation !== 0 && (o.action = "rotate", this._rotateObjectByAngle(s.rotation, l)), this.requestRenderAll(), o.action = "drag";
    }
  }, __onDrag: function(s, o) {
    this.fire("touch:drag", { e: s, self: o });
  }, __onOrientationChange: function(s, o) {
    this.fire("touch:orientation", { e: s, self: o });
  }, __onShake: function(s, o) {
    this.fire("touch:shake", { e: s, self: o });
  }, __onLongPress: function(s, o) {
    this.fire("touch:longpress", { e: s, self: o });
  }, _scaleObjectBy: function(s, o) {
    var l = this._currentTransform, p = l.target;
    return l.gestureScale = s, p._scaling = !0, v.controlsUtils.scalingEqually(o, l, 0, 0);
  }, _rotateObjectByAngle: function(s, o) {
    var l = this._currentTransform;
    l.target.get("lockRotation") || (l.target.rotate(ge(de(s) + l.theta)), this._fire("rotating", { target: l.target, e: o, transform: l }));
  } }), function(s) {
    var o = s.fabric || (s.fabric = {}), l = o.util.object.extend, p = o.util.object.clone, n = o.util.toFixed, r = o.util.string.capitalize, a = o.util.degreesToRadians, h = !o.isLikelyNode;
    o.Object || (o.Object = o.util.createClass(o.CommonMethods, { type: "object", originX: "left", originY: "top", top: 0, left: 0, width: 0, height: 0, scaleX: 1, scaleY: 1, flipX: !1, flipY: !1, opacity: 1, angle: 0, skewX: 0, skewY: 0, cornerSize: 13, touchCornerSize: 24, transparentCorners: !0, hoverCursor: null, moveCursor: null, padding: 0, borderColor: "rgb(178,204,255)", borderDashArray: null, cornerColor: "rgb(178,204,255)", cornerStrokeColor: null, cornerStyle: "rect", cornerDashArray: null, centeredScaling: !1, centeredRotation: !0, fill: "rgb(0,0,0)", fillRule: "nonzero", globalCompositeOperation: "source-over", backgroundColor: "", selectionBackgroundColor: "", stroke: null, strokeWidth: 1, strokeDashArray: null, strokeDashOffset: 0, strokeLineCap: "butt", strokeLineJoin: "miter", strokeMiterLimit: 4, shadow: null, borderOpacityWhenMoving: 0.4, borderScaleFactor: 1, minScaleLimit: 0, selectable: !0, evented: !0, visible: !0, hasControls: !0, hasBorders: !0, perPixelTargetFind: !1, includeDefaultValues: !0, lockMovementX: !1, lockMovementY: !1, lockRotation: !1, lockScalingX: !1, lockScalingY: !1, lockSkewingX: !1, lockSkewingY: !1, lockScalingFlip: !1, excludeFromExport: !1, objectCaching: h, statefullCache: !1, noScaleCache: !0, strokeUniform: !1, dirty: !0, __corner: 0, paintFirst: "fill", activeOn: "down", stateProperties: "top left width height scaleX scaleY flipX flipY originX originY transformMatrix stroke strokeWidth strokeDashArray strokeLineCap strokeDashOffset strokeLineJoin strokeMiterLimit angle opacity fill globalCompositeOperation shadow visible backgroundColor skewX skewY fillRule paintFirst clipPath strokeUniform".split(" "), cacheProperties: "fill stroke strokeWidth strokeDashArray width height paintFirst strokeUniform strokeLineCap strokeDashOffset strokeLineJoin strokeMiterLimit backgroundColor clipPath".split(" "), colorProperties: "fill stroke backgroundColor".split(" "), clipPath: void 0, inverted: !1, absolutePositioned: !1, initialize: function(u) {
      u && this.setOptions(u);
    }, _createCacheCanvas: function() {
      this._cacheProperties = {}, this._cacheCanvas = o.util.createCanvasElement(), this._cacheContext = this._cacheCanvas.getContext("2d"), this._updateCacheCanvas(), this.dirty = !0;
    }, _limitCacheSize: function(u) {
      var d = o.perfLimitSizeTotal, g = u.width, y = u.height, x = o.maxCacheSideLimit, C = o.minCacheSideLimit;
      if (g <= x && y <= x && g * y <= d) return g < C && (u.width = C), y < C && (u.height = C), u;
      var b = g / y, M = o.util.limitDimsByArea(b, d), P = o.util.capValue, _ = P(C, M.x, x), k = P(C, M.y, x);
      return g > _ && (u.zoomX /= g / _, u.width = _, u.capped = !0), y > k && (u.zoomY /= y / k, u.height = k, u.capped = !0), u;
    }, _getCacheCanvasDimensions: function() {
      var u = this.getTotalObjectScaling(), d = this._getTransformedDimensions(0, 0), g = d.x * u.scaleX / this.scaleX, y = d.y * u.scaleY / this.scaleY;
      return { width: g + 2, height: y + 2, zoomX: u.scaleX, zoomY: u.scaleY, x: g, y };
    }, _updateCacheCanvas: function() {
      var u = this.canvas;
      if (this.noScaleCache && u && u._currentTransform) {
        var d = u._currentTransform.target, g = u._currentTransform.action;
        if (this === d && g.slice && g.slice(0, 5) === "scale") return !1;
      }
      var y, x, C = this._cacheCanvas, b = this._limitCacheSize(this._getCacheCanvasDimensions()), M = o.minCacheSideLimit, P = b.width, _ = b.height, k = b.zoomX, L = b.zoomY, H = P !== this.cacheWidth || _ !== this.cacheHeight, W = this.zoomX !== k || this.zoomY !== L, A = H || W, T = 0, D = 0, X = !1;
      if (H) {
        var $ = this._cacheCanvas.width, B = this._cacheCanvas.height, j = P > $ || _ > B;
        X = j || (P < 0.9 * $ || _ < 0.9 * B) && $ > M && B > M, j && !b.capped && (P > M || _ > M) && (T = 0.1 * P, D = 0.1 * _);
      }
      return this instanceof o.Text && this.path && (A = !0, X = !0, T += this.getHeightOfLine(0) * this.zoomX, D += this.getHeightOfLine(0) * this.zoomY), !!A && (X ? (C.width = Math.ceil(P + T), C.height = Math.ceil(_ + D)) : (this._cacheContext.setTransform(1, 0, 0, 1, 0, 0), this._cacheContext.clearRect(0, 0, C.width, C.height)), y = b.x / 2, x = b.y / 2, this.cacheTranslationX = Math.round(C.width / 2 - y) + y, this.cacheTranslationY = Math.round(C.height / 2 - x) + x, this.cacheWidth = P, this.cacheHeight = _, this._cacheContext.translate(this.cacheTranslationX, this.cacheTranslationY), this._cacheContext.scale(k, L), this.zoomX = k, this.zoomY = L, !0);
    }, setOptions: function(u) {
      this._setOptions(u), this._initGradient(u.fill, "fill"), this._initGradient(u.stroke, "stroke"), this._initPattern(u.fill, "fill"), this._initPattern(u.stroke, "stroke");
    }, transform: function(u) {
      var d = this.group && !this.group._transformDone || this.group && this.canvas && u === this.canvas.contextTop, g = this.calcTransformMatrix(!d);
      u.transform(g[0], g[1], g[2], g[3], g[4], g[5]);
    }, toObject: function(u) {
      var d = o.Object.NUM_FRACTION_DIGITS, g = { type: this.type, version: o.version, originX: this.originX, originY: this.originY, left: n(this.left, d), top: n(this.top, d), width: n(this.width, d), height: n(this.height, d), fill: this.fill && this.fill.toObject ? this.fill.toObject() : this.fill, stroke: this.stroke && this.stroke.toObject ? this.stroke.toObject() : this.stroke, strokeWidth: n(this.strokeWidth, d), strokeDashArray: this.strokeDashArray ? this.strokeDashArray.concat() : this.strokeDashArray, strokeLineCap: this.strokeLineCap, strokeDashOffset: this.strokeDashOffset, strokeLineJoin: this.strokeLineJoin, strokeUniform: this.strokeUniform, strokeMiterLimit: n(this.strokeMiterLimit, d), scaleX: n(this.scaleX, d), scaleY: n(this.scaleY, d), angle: n(this.angle, d), flipX: this.flipX, flipY: this.flipY, opacity: n(this.opacity, d), shadow: this.shadow && this.shadow.toObject ? this.shadow.toObject() : this.shadow, visible: this.visible, backgroundColor: this.backgroundColor, fillRule: this.fillRule, paintFirst: this.paintFirst, globalCompositeOperation: this.globalCompositeOperation, skewX: n(this.skewX, d), skewY: n(this.skewY, d) };
      return this.clipPath && !this.clipPath.excludeFromExport && (g.clipPath = this.clipPath.toObject(u), g.clipPath.inverted = this.clipPath.inverted, g.clipPath.absolutePositioned = this.clipPath.absolutePositioned), o.util.populateWithProperties(this, g, u), this.includeDefaultValues || (g = this._removeDefaultValues(g)), g;
    }, toDatalessObject: function(u) {
      return this.toObject(u);
    }, _removeDefaultValues: function(u) {
      var d = o.util.getKlass(u.type).prototype;
      return d.stateProperties.forEach(function(g) {
        g !== "left" && g !== "top" && (u[g] === d[g] && delete u[g], Object.prototype.toString.call(u[g]) === "[object Array]" && Object.prototype.toString.call(d[g]) === "[object Array]" && u[g].length === 0 && d[g].length === 0 && delete u[g]);
      }), u;
    }, toString: function() {
      return "#<fabric." + r(this.type) + ">";
    }, getObjectScaling: function() {
      if (!this.group) return { scaleX: this.scaleX, scaleY: this.scaleY };
      var u = o.util.qrDecompose(this.calcTransformMatrix());
      return { scaleX: Math.abs(u.scaleX), scaleY: Math.abs(u.scaleY) };
    }, getTotalObjectScaling: function() {
      var u = this.getObjectScaling(), d = u.scaleX, g = u.scaleY;
      if (this.canvas) {
        var y = this.canvas.getZoom(), x = this.canvas.getRetinaScaling();
        d *= y * x, g *= y * x;
      }
      return { scaleX: d, scaleY: g };
    }, getObjectOpacity: function() {
      var u = this.opacity;
      return this.group && (u *= this.group.getObjectOpacity()), u;
    }, _set: function(u, d) {
      var g = u === "scaleX" || u === "scaleY", y = this[u] !== d, x = !1;
      return g && (d = this._constrainScale(d)), u === "scaleX" && d < 0 ? (this.flipX = !this.flipX, d *= -1) : u === "scaleY" && d < 0 ? (this.flipY = !this.flipY, d *= -1) : u !== "shadow" || !d || d instanceof o.Shadow ? u === "dirty" && this.group && this.group.set("dirty", d) : d = new o.Shadow(d), this[u] = d, y && (x = this.group && this.group.isOnACache(), this.cacheProperties.indexOf(u) > -1 ? (this.dirty = !0, x && this.group.set("dirty", !0)) : x && this.stateProperties.indexOf(u) > -1 && this.group.set("dirty", !0)), this;
    }, setOnGroup: function() {
    }, getViewportTransform: function() {
      return this.canvas && this.canvas.viewportTransform ? this.canvas.viewportTransform : o.iMatrix.concat();
    }, isNotVisible: function() {
      return this.opacity === 0 || !this.width && !this.height && this.strokeWidth === 0 || !this.visible;
    }, render: function(u) {
      this.isNotVisible() || this.canvas && this.canvas.skipOffscreen && !this.group && !this.isOnScreen() || (u.save(), this._setupCompositeOperation(u), this.drawSelectionBackground(u), this.transform(u), this._setOpacity(u), this._setShadow(u, this), this.shouldCache() ? (this.renderCache(), this.drawCacheOnCanvas(u)) : (this._removeCacheCanvas(), this.dirty = !1, this.drawObject(u), this.objectCaching && this.statefullCache && this.saveState({ propertySet: "cacheProperties" })), u.restore());
    }, renderCache: function(u) {
      u = u || {}, this._cacheCanvas || this._createCacheCanvas(), this.isCacheDirty() && (this.statefullCache && this.saveState({ propertySet: "cacheProperties" }), this.drawObject(this._cacheContext, u.forClipping), this.dirty = !1);
    }, _removeCacheCanvas: function() {
      this._cacheCanvas = null, this.cacheWidth = 0, this.cacheHeight = 0;
    }, hasStroke: function() {
      return this.stroke && this.stroke !== "transparent" && this.strokeWidth !== 0;
    }, hasFill: function() {
      return this.fill && this.fill !== "transparent";
    }, needsItsOwnCache: function() {
      return !(this.paintFirst !== "stroke" || !this.hasFill() || !this.hasStroke() || typeof this.shadow != "object") || !!this.clipPath;
    }, shouldCache: function() {
      return this.ownCaching = this.needsItsOwnCache() || this.objectCaching && (!this.group || !this.group.isOnACache()), this.ownCaching;
    }, willDrawShadow: function() {
      return !!this.shadow && (this.shadow.offsetX !== 0 || this.shadow.offsetY !== 0);
    }, drawClipPathOnCache: function(u) {
      var d = this.clipPath;
      if (u.save(), d.inverted ? u.globalCompositeOperation = "destination-out" : u.globalCompositeOperation = "destination-in", d.absolutePositioned) {
        var g = o.util.invertTransform(this.calcTransformMatrix());
        u.transform(g[0], g[1], g[2], g[3], g[4], g[5]);
      }
      d.transform(u), u.scale(1 / d.zoomX, 1 / d.zoomY), u.drawImage(d._cacheCanvas, -d.cacheTranslationX, -d.cacheTranslationY), u.restore();
    }, drawObject: function(u, d) {
      var g = this.fill, y = this.stroke;
      d ? (this.fill = "black", this.stroke = "", this._setClippingProperties(u)) : this._renderBackground(u), this._render(u), this._drawClipPath(u), this.fill = g, this.stroke = y;
    }, _drawClipPath: function(u) {
      var d = this.clipPath;
      d && (d.canvas = this.canvas, d.shouldCache(), d._transformDone = !0, d.renderCache({ forClipping: !0 }), this.drawClipPathOnCache(u));
    }, drawCacheOnCanvas: function(u) {
      u.scale(1 / this.zoomX, 1 / this.zoomY), u.drawImage(this._cacheCanvas, -this.cacheTranslationX, -this.cacheTranslationY);
    }, isCacheDirty: function(u) {
      if (this.isNotVisible()) return !1;
      if (this._cacheCanvas && !u && this._updateCacheCanvas()) return !0;
      if (this.dirty || this.clipPath && this.clipPath.absolutePositioned || this.statefullCache && this.hasStateChanged("cacheProperties")) {
        if (this._cacheCanvas && !u) {
          var d = this.cacheWidth / this.zoomX, g = this.cacheHeight / this.zoomY;
          this._cacheContext.clearRect(-d / 2, -g / 2, d, g);
        }
        return !0;
      }
      return !1;
    }, _renderBackground: function(u) {
      if (this.backgroundColor) {
        var d = this._getNonTransformedDimensions();
        u.fillStyle = this.backgroundColor, u.fillRect(-d.x / 2, -d.y / 2, d.x, d.y), this._removeShadow(u);
      }
    }, _setOpacity: function(u) {
      this.group && !this.group._transformDone ? u.globalAlpha = this.getObjectOpacity() : u.globalAlpha *= this.opacity;
    }, _setStrokeStyles: function(u, d) {
      var g = d.stroke;
      g && (u.lineWidth = d.strokeWidth, u.lineCap = d.strokeLineCap, u.lineDashOffset = d.strokeDashOffset, u.lineJoin = d.strokeLineJoin, u.miterLimit = d.strokeMiterLimit, g.toLive ? g.gradientUnits === "percentage" || g.gradientTransform || g.patternTransform ? this._applyPatternForTransformedGradient(u, g) : (u.strokeStyle = g.toLive(u, this), this._applyPatternGradientTransform(u, g)) : u.strokeStyle = d.stroke);
    }, _setFillStyles: function(u, d) {
      var g = d.fill;
      g && (g.toLive ? (u.fillStyle = g.toLive(u, this), this._applyPatternGradientTransform(u, d.fill)) : u.fillStyle = g);
    }, _setClippingProperties: function(u) {
      u.globalAlpha = 1, u.strokeStyle = "transparent", u.fillStyle = "#000000";
    }, _setLineDash: function(u, d) {
      d && d.length !== 0 && (1 & d.length && d.push.apply(d, d), u.setLineDash(d));
    }, _renderControls: function(u, d) {
      var g, y, x, C = this.getViewportTransform(), b = this.calcTransformMatrix();
      y = (d = d || {}).hasBorders !== void 0 ? d.hasBorders : this.hasBorders, x = d.hasControls !== void 0 ? d.hasControls : this.hasControls, b = o.util.multiplyTransformMatrices(C, b), g = o.util.qrDecompose(b), u.save(), u.translate(g.translateX, g.translateY), u.lineWidth = 1 * this.borderScaleFactor, this.group || (u.globalAlpha = this.isMoving ? this.borderOpacityWhenMoving : 1), u.rotate(a(g.angle)), d.forActiveSelection || this.group ? y && this.drawBordersInGroup(u, g, d) : y && this.drawBorders(u, d), x && this.drawControls(u, d), u.restore();
    }, _setShadow: function(u) {
      if (this.shadow) {
        var d, g = this.shadow, y = this.canvas, x = y && y.viewportTransform[0] || 1, C = y && y.viewportTransform[3] || 1;
        d = g.nonScaling ? { scaleX: 1, scaleY: 1 } : this.getObjectScaling(), y && y._isRetinaScaling() && (x *= o.devicePixelRatio, C *= o.devicePixelRatio), u.shadowColor = g.color, u.shadowBlur = g.blur * o.browserShadowBlurConstant * (x + C) * (d.scaleX + d.scaleY) / 4, u.shadowOffsetX = g.offsetX * x * d.scaleX, u.shadowOffsetY = g.offsetY * C * d.scaleY;
      }
    }, _removeShadow: function(u) {
      this.shadow && (u.shadowColor = "", u.shadowBlur = u.shadowOffsetX = u.shadowOffsetY = 0);
    }, _applyPatternGradientTransform: function(u, d) {
      if (!d || !d.toLive) return { offsetX: 0, offsetY: 0 };
      var g = d.gradientTransform || d.patternTransform, y = -this.width / 2 + d.offsetX || 0, x = -this.height / 2 + d.offsetY || 0;
      return d.gradientUnits === "percentage" ? u.transform(this.width, 0, 0, this.height, y, x) : u.transform(1, 0, 0, 1, y, x), g && u.transform(g[0], g[1], g[2], g[3], g[4], g[5]), { offsetX: y, offsetY: x };
    }, _renderPaintInOrder: function(u) {
      this.paintFirst === "stroke" ? (this._renderStroke(u), this._renderFill(u)) : (this._renderFill(u), this._renderStroke(u));
    }, _render: function() {
    }, _renderFill: function(u) {
      this.fill && (u.save(), this._setFillStyles(u, this), this.fillRule === "evenodd" ? u.fill("evenodd") : u.fill(), u.restore());
    }, _renderStroke: function(u) {
      if (this.stroke && this.strokeWidth !== 0) {
        if (this.shadow && !this.shadow.affectStroke && this._removeShadow(u), u.save(), this.strokeUniform && this.group) {
          var d = this.getObjectScaling();
          u.scale(1 / d.scaleX, 1 / d.scaleY);
        } else this.strokeUniform && u.scale(1 / this.scaleX, 1 / this.scaleY);
        this._setLineDash(u, this.strokeDashArray), this._setStrokeStyles(u, this), u.stroke(), u.restore();
      }
    }, _applyPatternForTransformedGradient: function(u, d) {
      var g, y = this._limitCacheSize(this._getCacheCanvasDimensions()), x = o.util.createCanvasElement(), C = this.canvas.getRetinaScaling(), b = y.x / this.scaleX / C, M = y.y / this.scaleY / C;
      x.width = b, x.height = M, (g = x.getContext("2d")).beginPath(), g.moveTo(0, 0), g.lineTo(b, 0), g.lineTo(b, M), g.lineTo(0, M), g.closePath(), g.translate(b / 2, M / 2), g.scale(y.zoomX / this.scaleX / C, y.zoomY / this.scaleY / C), this._applyPatternGradientTransform(g, d), g.fillStyle = d.toLive(u), g.fill(), u.translate(-this.width / 2 - this.strokeWidth / 2, -this.height / 2 - this.strokeWidth / 2), u.scale(C * this.scaleX / y.zoomX, C * this.scaleY / y.zoomY), u.strokeStyle = g.createPattern(x, "no-repeat");
    }, _findCenterFromElement: function() {
      return { x: this.left + this.width / 2, y: this.top + this.height / 2 };
    }, _assignTransformMatrixProps: function() {
      if (this.transformMatrix) {
        var u = o.util.qrDecompose(this.transformMatrix);
        this.flipX = !1, this.flipY = !1, this.set("scaleX", u.scaleX), this.set("scaleY", u.scaleY), this.angle = u.angle, this.skewX = u.skewX, this.skewY = 0;
      }
    }, _removeTransformMatrix: function(u) {
      var d = this._findCenterFromElement();
      this.transformMatrix && (this._assignTransformMatrixProps(), d = o.util.transformPoint(d, this.transformMatrix)), this.transformMatrix = null, u && (this.scaleX *= u.scaleX, this.scaleY *= u.scaleY, this.cropX = u.cropX, this.cropY = u.cropY, d.x += u.offsetLeft, d.y += u.offsetTop, this.width = u.width, this.height = u.height), this.setPositionByOrigin(d, "center", "center");
    }, clone: function(u, d) {
      var g = this.toObject(d);
      this.constructor.fromObject ? this.constructor.fromObject(g, u) : o.Object._fromObject("Object", g, u);
    }, cloneAsImage: function(u, d) {
      var g = this.toCanvasElement(d);
      return u && u(new o.Image(g)), this;
    }, toCanvasElement: function(u) {
      u || (u = {});
      var d = o.util, g = d.saveObjectTransform(this), y = this.group, x = this.shadow, C = Math.abs, b = (u.multiplier || 1) * (u.enableRetinaScaling ? o.devicePixelRatio : 1);
      delete this.group, u.withoutTransform && d.resetObjectTransform(this), u.withoutShadow && (this.shadow = null);
      var M, P, _, k, L = o.util.createCanvasElement(), H = this.getBoundingRect(!0, !0), W = this.shadow, A = { x: 0, y: 0 };
      W && (P = W.blur, M = W.nonScaling ? { scaleX: 1, scaleY: 1 } : this.getObjectScaling(), A.x = 2 * Math.round(C(W.offsetX) + P) * C(M.scaleX), A.y = 2 * Math.round(C(W.offsetY) + P) * C(M.scaleY)), _ = H.width + A.x, k = H.height + A.y, L.width = Math.ceil(_), L.height = Math.ceil(k);
      var T = new o.StaticCanvas(L, { enableRetinaScaling: !1, renderOnAddRemove: !1, skipOffscreen: !1 });
      u.format === "jpeg" && (T.backgroundColor = "#fff"), this.setPositionByOrigin(new o.Point(T.width / 2, T.height / 2), "center", "center");
      var D = this.canvas;
      T.add(this);
      var X = T.toCanvasElement(b || 1, u);
      return this.shadow = x, this.set("canvas", D), y && (this.group = y), this.set(g).setCoords(), T._objects = [], T.dispose(), T = null, X;
    }, toDataURL: function(u) {
      return u || (u = {}), o.util.toDataURL(this.toCanvasElement(u), u.format || "png", u.quality || 1);
    }, isType: function(u) {
      return this.type === u;
    }, complexity: function() {
      return 1;
    }, toJSON: function(u) {
      return this.toObject(u);
    }, rotate: function(u) {
      var d = (this.originX !== "center" || this.originY !== "center") && this.centeredRotation;
      return d && this._setOriginToCenter(), this.set("angle", u), d && this._resetOrigin(), this;
    }, centerH: function() {
      return this.canvas && this.canvas.centerObjectH(this), this;
    }, viewportCenterH: function() {
      return this.canvas && this.canvas.viewportCenterObjectH(this), this;
    }, centerV: function() {
      return this.canvas && this.canvas.centerObjectV(this), this;
    }, viewportCenterV: function() {
      return this.canvas && this.canvas.viewportCenterObjectV(this), this;
    }, center: function() {
      return this.canvas && this.canvas.centerObject(this), this;
    }, viewportCenter: function() {
      return this.canvas && this.canvas.viewportCenterObject(this), this;
    }, getLocalPointer: function(u, d) {
      d = d || this.canvas.getPointer(u);
      var g = new o.Point(d.x, d.y), y = this._getLeftTopCoords();
      return this.angle && (g = o.util.rotatePoint(g, y, a(-this.angle))), { x: g.x - y.x, y: g.y - y.y };
    }, _setupCompositeOperation: function(u) {
      this.globalCompositeOperation && (u.globalCompositeOperation = this.globalCompositeOperation);
    } }), o.util.createAccessors && o.util.createAccessors(o.Object), l(o.Object.prototype, o.Observable), o.Object.NUM_FRACTION_DIGITS = 2, o.Object._fromObject = function(u, d, g, y) {
      var x = o[u];
      d = p(d, !0), o.util.enlivenPatterns([d.fill, d.stroke], function(C) {
        C[0] !== void 0 && (d.fill = C[0]), C[1] !== void 0 && (d.stroke = C[1]), o.util.enlivenObjects([d.clipPath], function(b) {
          d.clipPath = b[0];
          var M = y ? new x(d[y], d) : new x(d);
          g && g(M);
        });
      });
    }, o.Object.__uid = 0);
  }(e), function() {
    var s = v.util.degreesToRadians, o = { left: -0.5, center: 0, right: 0.5 }, l = { top: -0.5, center: 0, bottom: 0.5 };
    v.util.object.extend(v.Object.prototype, { translateToGivenOrigin: function(p, n, r, a, h) {
      var u, d, g, y = p.x, x = p.y;
      return typeof n == "string" ? n = o[n] : n -= 0.5, typeof a == "string" ? a = o[a] : a -= 0.5, typeof r == "string" ? r = l[r] : r -= 0.5, typeof h == "string" ? h = l[h] : h -= 0.5, d = h - r, ((u = a - n) || d) && (g = this._getTransformedDimensions(), y = p.x + u * g.x, x = p.y + d * g.y), new v.Point(y, x);
    }, translateToCenterPoint: function(p, n, r) {
      var a = this.translateToGivenOrigin(p, n, r, "center", "center");
      return this.angle ? v.util.rotatePoint(a, p, s(this.angle)) : a;
    }, translateToOriginPoint: function(p, n, r) {
      var a = this.translateToGivenOrigin(p, "center", "center", n, r);
      return this.angle ? v.util.rotatePoint(a, p, s(this.angle)) : a;
    }, getCenterPoint: function() {
      var p = new v.Point(this.left, this.top);
      return this.translateToCenterPoint(p, this.originX, this.originY);
    }, getPointByOrigin: function(p, n) {
      var r = this.getCenterPoint();
      return this.translateToOriginPoint(r, p, n);
    }, toLocalPoint: function(p, n, r) {
      var a, h, u = this.getCenterPoint();
      return a = n !== void 0 && r !== void 0 ? this.translateToGivenOrigin(u, "center", "center", n, r) : new v.Point(this.left, this.top), h = new v.Point(p.x, p.y), this.angle && (h = v.util.rotatePoint(h, u, -s(this.angle))), h.subtractEquals(a);
    }, setPositionByOrigin: function(p, n, r) {
      var a = this.translateToCenterPoint(p, n, r), h = this.translateToOriginPoint(a, this.originX, this.originY);
      this.set("left", h.x), this.set("top", h.y);
    }, adjustPosition: function(p) {
      var n, r, a = s(this.angle), h = this.getScaledWidth(), u = v.util.cos(a) * h, d = v.util.sin(a) * h;
      n = typeof this.originX == "string" ? o[this.originX] : this.originX - 0.5, r = typeof p == "string" ? o[p] : p - 0.5, this.left += u * (r - n), this.top += d * (r - n), this.setCoords(), this.originX = p;
    }, _setOriginToCenter: function() {
      this._originalOriginX = this.originX, this._originalOriginY = this.originY;
      var p = this.getCenterPoint();
      this.originX = "center", this.originY = "center", this.left = p.x, this.top = p.y;
    }, _resetOrigin: function() {
      var p = this.translateToOriginPoint(this.getCenterPoint(), this._originalOriginX, this._originalOriginY);
      this.originX = this._originalOriginX, this.originY = this._originalOriginY, this.left = p.x, this.top = p.y, this._originalOriginX = null, this._originalOriginY = null;
    }, _getLeftTopCoords: function() {
      return this.translateToOriginPoint(this.getCenterPoint(), "left", "top");
    } });
  }(), function() {
    var s = v.util, o = s.degreesToRadians, l = s.multiplyTransformMatrices, p = s.transformPoint;
    s.object.extend(v.Object.prototype, { oCoords: null, aCoords: null, lineCoords: null, ownMatrixCache: null, matrixCache: null, controls: {}, _getCoords: function(n, r) {
      return r ? n ? this.calcACoords() : this.calcLineCoords() : (this.aCoords && this.lineCoords || this.setCoords(!0), n ? this.aCoords : this.lineCoords);
    }, getCoords: function(n, r) {
      return a = this._getCoords(n, r), [new v.Point(a.tl.x, a.tl.y), new v.Point(a.tr.x, a.tr.y), new v.Point(a.br.x, a.br.y), new v.Point(a.bl.x, a.bl.y)];
      var a;
    }, intersectsWithRect: function(n, r, a, h) {
      var u = this.getCoords(a, h);
      return v.Intersection.intersectPolygonRectangle(u, n, r).status === "Intersection";
    }, intersectsWithObject: function(n, r, a) {
      return v.Intersection.intersectPolygonPolygon(this.getCoords(r, a), n.getCoords(r, a)).status === "Intersection" || n.isContainedWithinObject(this, r, a) || this.isContainedWithinObject(n, r, a);
    }, isContainedWithinObject: function(n, r, a) {
      for (var h = this.getCoords(r, a), u = r ? n.aCoords : n.lineCoords, d = 0, g = n._getImageLines(u); d < 4; d++) if (!n.containsPoint(h[d], g)) return !1;
      return !0;
    }, isContainedWithinRect: function(n, r, a, h) {
      var u = this.getBoundingRect(a, h);
      return u.left >= n.x && u.left + u.width <= r.x && u.top >= n.y && u.top + u.height <= r.y;
    }, containsPoint: function(n, r, a, h) {
      var u = this._getCoords(a, h), d = (r = r || this._getImageLines(u), this._findCrossPoints(n, r));
      return d !== 0 && d % 2 == 1;
    }, isOnScreen: function(n) {
      if (!this.canvas) return !1;
      var r = this.canvas.vptCoords.tl, a = this.canvas.vptCoords.br;
      return !!this.getCoords(!0, n).some(function(h) {
        return h.x <= a.x && h.x >= r.x && h.y <= a.y && h.y >= r.y;
      }) || !!this.intersectsWithRect(r, a, !0, n) || this._containsCenterOfCanvas(r, a, n);
    }, _containsCenterOfCanvas: function(n, r, a) {
      var h = { x: (n.x + r.x) / 2, y: (n.y + r.y) / 2 };
      return !!this.containsPoint(h, null, !0, a);
    }, isPartiallyOnScreen: function(n) {
      if (!this.canvas) return !1;
      var r = this.canvas.vptCoords.tl, a = this.canvas.vptCoords.br;
      return !!this.intersectsWithRect(r, a, !0, n) || this.getCoords(!0, n).every(function(h) {
        return (h.x >= a.x || h.x <= r.x) && (h.y >= a.y || h.y <= r.y);
      }) && this._containsCenterOfCanvas(r, a, n);
    }, _getImageLines: function(n) {
      return { topline: { o: n.tl, d: n.tr }, rightline: { o: n.tr, d: n.br }, bottomline: { o: n.br, d: n.bl }, leftline: { o: n.bl, d: n.tl } };
    }, _findCrossPoints: function(n, r) {
      var a, h, u, d = 0;
      for (var g in r) if (!((u = r[g]).o.y < n.y && u.d.y < n.y || u.o.y >= n.y && u.d.y >= n.y || (u.o.x === u.d.x && u.o.x >= n.x ? h = u.o.x : (a = (u.d.y - u.o.y) / (u.d.x - u.o.x), h = -(n.y - 0 * n.x - (u.o.y - a * u.o.x)) / (0 - a)), h >= n.x && (d += 1), d !== 2))) break;
      return d;
    }, getBoundingRect: function(n, r) {
      var a = this.getCoords(n, r);
      return s.makeBoundingBoxFromPoints(a);
    }, getScaledWidth: function() {
      return this._getTransformedDimensions().x;
    }, getScaledHeight: function() {
      return this._getTransformedDimensions().y;
    }, _constrainScale: function(n) {
      return Math.abs(n) < this.minScaleLimit ? n < 0 ? -this.minScaleLimit : this.minScaleLimit : n === 0 ? 1e-4 : n;
    }, scale: function(n) {
      return this._set("scaleX", n), this._set("scaleY", n), this.setCoords();
    }, scaleToWidth: function(n, r) {
      var a = this.getBoundingRect(r).width / this.getScaledWidth();
      return this.scale(n / this.width / a);
    }, scaleToHeight: function(n, r) {
      var a = this.getBoundingRect(r).height / this.getScaledHeight();
      return this.scale(n / this.height / a);
    }, calcCoords: function(n) {
      return n ? this.calcACoords() : this.calcOCoords();
    }, calcLineCoords: function() {
      var n = this.getViewportTransform(), r = this.padding, a = o(this.angle), h = s.cos(a) * r, u = s.sin(a) * r, d = h + u, g = h - u, y = this.calcACoords(), x = { tl: p(y.tl, n), tr: p(y.tr, n), bl: p(y.bl, n), br: p(y.br, n) };
      return r && (x.tl.x -= g, x.tl.y -= d, x.tr.x += d, x.tr.y -= g, x.bl.x -= d, x.bl.y += g, x.br.x += g, x.br.y += d), x;
    }, calcOCoords: function() {
      var n = this._calcRotateMatrix(), r = this._calcTranslateMatrix(), a = this.getViewportTransform(), h = l(a, r), u = l(h, n), d = (u = l(u, [1 / a[0], 0, 0, 1 / a[3], 0, 0]), this._calculateCurrentDimensions()), g = {};
      return this.forEachControl(function(y, x, C) {
        g[x] = y.positionHandler(d, u, C);
      }), g;
    }, calcACoords: function() {
      var n = this._calcRotateMatrix(), r = this._calcTranslateMatrix(), a = l(r, n), h = this._getTransformedDimensions(), u = h.x / 2, d = h.y / 2;
      return { tl: p({ x: -u, y: -d }, a), tr: p({ x: u, y: -d }, a), bl: p({ x: -u, y: d }, a), br: p({ x: u, y: d }, a) };
    }, setCoords: function(n) {
      return this.aCoords = this.calcACoords(), this.lineCoords = this.group ? this.aCoords : this.calcLineCoords(), n || (this.oCoords = this.calcOCoords(), this._setCornerCoords && this._setCornerCoords()), this;
    }, _calcRotateMatrix: function() {
      return s.calcRotateMatrix(this);
    }, _calcTranslateMatrix: function() {
      var n = this.getCenterPoint();
      return [1, 0, 0, 1, n.x, n.y];
    }, transformMatrixKey: function(n) {
      var r = "_", a = "";
      return !n && this.group && (a = this.group.transformMatrixKey(n) + r), a + this.top + r + this.left + r + this.scaleX + r + this.scaleY + r + this.skewX + r + this.skewY + r + this.angle + r + this.originX + r + this.originY + r + this.width + r + this.height + r + this.strokeWidth + this.flipX + this.flipY;
    }, calcTransformMatrix: function(n) {
      var r = this.calcOwnMatrix();
      if (n || !this.group) return r;
      var a = this.transformMatrixKey(n), h = this.matrixCache || (this.matrixCache = {});
      return h.key === a ? h.value : (this.group && (r = l(this.group.calcTransformMatrix(!1), r)), h.key = a, h.value = r, r);
    }, calcOwnMatrix: function() {
      var n = this.transformMatrixKey(!0), r = this.ownMatrixCache || (this.ownMatrixCache = {});
      if (r.key === n) return r.value;
      var a = this._calcTranslateMatrix(), h = { angle: this.angle, translateX: a[4], translateY: a[5], scaleX: this.scaleX, scaleY: this.scaleY, skewX: this.skewX, skewY: this.skewY, flipX: this.flipX, flipY: this.flipY };
      return r.key = n, r.value = s.composeMatrix(h), r.value;
    }, _calcDimensionsTransformMatrix: function(n, r, a) {
      return s.calcDimensionsMatrix({ skewX: n, skewY: r, scaleX: this.scaleX * (a && this.flipX ? -1 : 1), scaleY: this.scaleY * (a && this.flipY ? -1 : 1) });
    }, _getNonTransformedDimensions: function() {
      var n = this.strokeWidth;
      return { x: this.width + n, y: this.height + n };
    }, _getTransformedDimensions: function(n, r) {
      n === void 0 && (n = this.skewX), r === void 0 && (r = this.skewY);
      var a, h, u, d = n === 0 && r === 0;
      if (this.strokeUniform ? (h = this.width, u = this.height) : (h = (a = this._getNonTransformedDimensions()).x, u = a.y), d) return this._finalizeDimensions(h * this.scaleX, u * this.scaleY);
      var g = s.sizeAfterTransform(h, u, { scaleX: this.scaleX, scaleY: this.scaleY, skewX: n, skewY: r });
      return this._finalizeDimensions(g.x, g.y);
    }, _finalizeDimensions: function(n, r) {
      return this.strokeUniform ? { x: n + this.strokeWidth, y: r + this.strokeWidth } : { x: n, y: r };
    }, _calculateCurrentDimensions: function() {
      var n = this.getViewportTransform(), r = this._getTransformedDimensions();
      return p(r, n, !0).scalarAdd(2 * this.padding);
    } });
  }(), v.util.object.extend(v.Object.prototype, { sendToBack: function() {
    return this.group ? v.StaticCanvas.prototype.sendToBack.call(this.group, this) : this.canvas && this.canvas.sendToBack(this), this;
  }, bringToFront: function() {
    return this.group ? v.StaticCanvas.prototype.bringToFront.call(this.group, this) : this.canvas && this.canvas.bringToFront(this), this;
  }, sendBackwards: function(s) {
    return this.group ? v.StaticCanvas.prototype.sendBackwards.call(this.group, this, s) : this.canvas && this.canvas.sendBackwards(this, s), this;
  }, bringForward: function(s) {
    return this.group ? v.StaticCanvas.prototype.bringForward.call(this.group, this, s) : this.canvas && this.canvas.bringForward(this, s), this;
  }, moveTo: function(s) {
    return this.group && this.group.type !== "activeSelection" ? v.StaticCanvas.prototype.moveTo.call(this.group, this, s) : this.canvas && this.canvas.moveTo(this, s), this;
  } }), function() {
    function s(l, p) {
      if (p) {
        if (p.toLive) return l + ": url(#SVGID_" + p.id + "); ";
        var n = new v.Color(p), r = l + ": " + n.toRgb() + "; ", a = n.getAlpha();
        return a !== 1 && (r += l + "-opacity: " + a.toString() + "; "), r;
      }
      return l + ": none; ";
    }
    var o = v.util.toFixed;
    v.util.object.extend(v.Object.prototype, { getSvgStyles: function(l) {
      var p = this.fillRule ? this.fillRule : "nonzero", n = this.strokeWidth ? this.strokeWidth : "0", r = this.strokeDashArray ? this.strokeDashArray.join(" ") : "none", a = this.strokeDashOffset ? this.strokeDashOffset : "0", h = this.strokeLineCap ? this.strokeLineCap : "butt", u = this.strokeLineJoin ? this.strokeLineJoin : "miter", d = this.strokeMiterLimit ? this.strokeMiterLimit : "4", g = this.opacity !== void 0 ? this.opacity : "1", y = this.visible ? "" : " visibility: hidden;", x = l ? "" : this.getSvgFilter(), C = s("fill", this.fill);
      return [s("stroke", this.stroke), "stroke-width: ", n, "; ", "stroke-dasharray: ", r, "; ", "stroke-linecap: ", h, "; ", "stroke-dashoffset: ", a, "; ", "stroke-linejoin: ", u, "; ", "stroke-miterlimit: ", d, "; ", C, "fill-rule: ", p, "; ", "opacity: ", g, ";", x, y].join("");
    }, getSvgSpanStyles: function(l, p) {
      var n = "; ", r = l.fontFamily ? "font-family: " + (l.fontFamily.indexOf("'") === -1 && l.fontFamily.indexOf('"') === -1 ? "'" + l.fontFamily + "'" : l.fontFamily) + n : "", a = l.strokeWidth ? "stroke-width: " + l.strokeWidth + n : "", h = (r = r, l.fontSize ? "font-size: " + l.fontSize + "px" + n : ""), u = l.fontStyle ? "font-style: " + l.fontStyle + n : "", d = l.fontWeight ? "font-weight: " + l.fontWeight + n : "", g = l.fill ? s("fill", l.fill) : "", y = l.stroke ? s("stroke", l.stroke) : "", x = this.getSvgTextDecoration(l);
      return x && (x = "text-decoration: " + x + n), [y, a, r, h, u, d, x, g, l.deltaY ? "baseline-shift: " + -l.deltaY + "; " : "", p ? "white-space: pre; " : ""].join("");
    }, getSvgTextDecoration: function(l) {
      return ["overline", "underline", "line-through"].filter(function(p) {
        return l[p.replace("-", "")];
      }).join(" ");
    }, getSvgFilter: function() {
      return this.shadow ? "filter: url(#SVGID_" + this.shadow.id + ");" : "";
    }, getSvgCommons: function() {
      return [this.id ? 'id="' + this.id + '" ' : "", this.clipPath ? 'clip-path="url(#' + this.clipPath.clipPathId + ')" ' : ""].join("");
    }, getSvgTransform: function(l, p) {
      var n = l ? this.calcTransformMatrix() : this.calcOwnMatrix();
      return 'transform="' + v.util.matrixToSVG(n) + (p || "") + '" ';
    }, _setSVGBg: function(l) {
      if (this.backgroundColor) {
        var p = v.Object.NUM_FRACTION_DIGITS;
        l.push("		<rect ", this._getFillAttributes(this.backgroundColor), ' x="', o(-this.width / 2, p), '" y="', o(-this.height / 2, p), '" width="', o(this.width, p), '" height="', o(this.height, p), `"></rect>
`);
      }
    }, toSVG: function(l) {
      return this._createBaseSVGMarkup(this._toSVG(l), { reviver: l });
    }, toClipPathSVG: function(l) {
      return "	" + this._createBaseClipPathSVGMarkup(this._toSVG(l), { reviver: l });
    }, _createBaseClipPathSVGMarkup: function(l, p) {
      var n = (p = p || {}).reviver, r = p.additionalTransform || "", a = [this.getSvgTransform(!0, r), this.getSvgCommons()].join(""), h = l.indexOf("COMMON_PARTS");
      return l[h] = a, n ? n(l.join("")) : l.join("");
    }, _createBaseSVGMarkup: function(l, p) {
      var n, r, a = (p = p || {}).noStyle, h = p.reviver, u = a ? "" : 'style="' + this.getSvgStyles() + '" ', d = p.withShadow ? 'style="' + this.getSvgFilter() + '" ' : "", g = this.clipPath, y = this.strokeUniform ? 'vector-effect="non-scaling-stroke" ' : "", x = g && g.absolutePositioned, C = this.stroke, b = this.fill, M = this.shadow, P = [], _ = l.indexOf("COMMON_PARTS"), k = p.additionalTransform;
      return g && (g.clipPathId = "CLIPPATH_" + v.Object.__uid++, r = '<clipPath id="' + g.clipPathId + `" >
` + g.toClipPathSVG(h) + `</clipPath>
`), x && P.push("<g ", d, this.getSvgCommons(), ` >
`), P.push("<g ", this.getSvgTransform(!1), x ? "" : d + this.getSvgCommons(), ` >
`), n = [u, y, a ? "" : this.addPaintOrder(), " ", k ? 'transform="' + k + '" ' : ""].join(""), l[_] = n, b && b.toLive && P.push(b.toSVG(this)), C && C.toLive && P.push(C.toSVG(this)), M && P.push(M.toSVG(this)), g && P.push(r), P.push(l.join("")), P.push(`</g>
`), x && P.push(`</g>
`), h ? h(P.join("")) : P.join("");
    }, addPaintOrder: function() {
      return this.paintFirst !== "fill" ? ' paint-order="' + this.paintFirst + '" ' : "";
    } });
  }(), function() {
    var s = v.util.object.extend, o = "stateProperties";
    function l(n, r, a) {
      var h = {};
      a.forEach(function(u) {
        h[u] = n[u];
      }), s(n[r], h, !0);
    }
    function p(n, r, a) {
      if (n === r) return !0;
      if (Array.isArray(n)) {
        if (!Array.isArray(r) || n.length !== r.length) return !1;
        for (var h = 0, u = n.length; h < u; h++) if (!p(n[h], r[h])) return !1;
        return !0;
      }
      if (n && typeof n == "object") {
        var d, g = Object.keys(n);
        if (!r || typeof r != "object" || !a && g.length !== Object.keys(r).length) return !1;
        for (h = 0, u = g.length; h < u; h++) if ((d = g[h]) !== "canvas" && d !== "group" && !p(n[d], r[d])) return !1;
        return !0;
      }
    }
    v.util.object.extend(v.Object.prototype, { hasStateChanged: function(n) {
      var r = "_" + (n = n || o);
      return Object.keys(this[r]).length < this[n].length || !p(this[r], this, !0);
    }, saveState: function(n) {
      var r = n && n.propertySet || o, a = "_" + r;
      return this[a] ? (l(this, a, this[r]), n && n.stateProperties && l(this, a, n.stateProperties), this) : this.setupState(n);
    }, setupState: function(n) {
      var r = (n = n || {}).propertySet || o;
      return n.propertySet = r, this["_" + r] = {}, this.saveState(n), this;
    } });
  }(), function() {
    var s = v.util.degreesToRadians;
    v.util.object.extend(v.Object.prototype, { _findTargetCorner: function(o, l) {
      if (!this.hasControls || this.group || !this.canvas || this.canvas._activeObject !== this) return !1;
      var p, n, r, a = o.x, h = o.y, u = Object.keys(this.oCoords), d = u.length - 1;
      for (this.__corner = 0; d >= 0; d--) if (r = u[d], this.isControlVisible(r) && (n = this._getImageLines(l ? this.oCoords[r].touchCorner : this.oCoords[r].corner), (p = this._findCrossPoints({ x: a, y: h }, n)) !== 0 && p % 2 == 1)) return this.__corner = r, r;
      return !1;
    }, forEachControl: function(o) {
      for (var l in this.controls) o(this.controls[l], l, this);
    }, _setCornerCoords: function() {
      var o = this.oCoords;
      for (var l in o) {
        var p = this.controls[l];
        o[l].corner = p.calcCornerCoords(this.angle, this.cornerSize, o[l].x, o[l].y, !1), o[l].touchCorner = p.calcCornerCoords(this.angle, this.touchCornerSize, o[l].x, o[l].y, !0);
      }
    }, drawSelectionBackground: function(o) {
      if (!this.selectionBackgroundColor || this.canvas && !this.canvas.interactive || this.canvas && this.canvas._activeObject !== this) return this;
      o.save();
      var l = this.getCenterPoint(), p = this._calculateCurrentDimensions(), n = this.canvas.viewportTransform;
      return o.translate(l.x, l.y), o.scale(1 / n[0], 1 / n[3]), o.rotate(s(this.angle)), o.fillStyle = this.selectionBackgroundColor, o.fillRect(-p.x / 2, -p.y / 2, p.x, p.y), o.restore(), this;
    }, drawBorders: function(o, l) {
      l = l || {};
      var p = this._calculateCurrentDimensions(), n = this.borderScaleFactor, r = p.x + n, a = p.y + n, h = l.hasControls !== void 0 ? l.hasControls : this.hasControls, u = !1;
      return o.save(), o.strokeStyle = l.borderColor || this.borderColor, this._setLineDash(o, l.borderDashArray || this.borderDashArray), o.strokeRect(-r / 2, -a / 2, r, a), h && (o.beginPath(), this.forEachControl(function(d, g, y) {
        d.withConnection && d.getVisibility(y, g) && (u = !0, o.moveTo(d.x * r, d.y * a), o.lineTo(d.x * r + d.offsetX, d.y * a + d.offsetY));
      }), u && o.stroke()), o.restore(), this;
    }, drawBordersInGroup: function(o, l, p) {
      p = p || {};
      var n = v.util.sizeAfterTransform(this.width, this.height, l), r = this.strokeWidth, a = this.strokeUniform, h = this.borderScaleFactor, u = n.x + r * (a ? this.canvas.getZoom() : l.scaleX) + h, d = n.y + r * (a ? this.canvas.getZoom() : l.scaleY) + h;
      return o.save(), this._setLineDash(o, p.borderDashArray || this.borderDashArray), o.strokeStyle = p.borderColor || this.borderColor, o.strokeRect(-u / 2, -d / 2, u, d), o.restore(), this;
    }, drawControls: function(o, l) {
      l = l || {}, o.save();
      var p, n, r = this.canvas.getRetinaScaling();
      return o.setTransform(r, 0, 0, r, 0, 0), o.strokeStyle = o.fillStyle = l.cornerColor || this.cornerColor, this.transparentCorners || (o.strokeStyle = l.cornerStrokeColor || this.cornerStrokeColor), this._setLineDash(o, l.cornerDashArray || this.cornerDashArray), this.setCoords(), this.group && (p = this.group.calcTransformMatrix()), this.forEachControl(function(a, h, u) {
        n = u.oCoords[h], a.getVisibility(u, h) && (p && (n = v.util.transformPoint(n, p)), a.render(o, n.x, n.y, l, u));
      }), o.restore(), this;
    }, isControlVisible: function(o) {
      return this.controls[o] && this.controls[o].getVisibility(this, o);
    }, setControlVisible: function(o, l) {
      return this._controlsVisibility || (this._controlsVisibility = {}), this._controlsVisibility[o] = l, this;
    }, setControlsVisibility: function(o) {
      for (var l in o || (o = {}), o) this.setControlVisible(l, o[l]);
      return this;
    }, onDeselect: function() {
    }, onSelect: function() {
    } });
  }(), v.util.object.extend(v.StaticCanvas.prototype, { FX_DURATION: 500, fxCenterObjectH: function(s, o) {
    var l = function() {
    }, p = (o = o || {}).onComplete || l, n = o.onChange || l, r = this;
    return v.util.animate({ startValue: s.left, endValue: this.getCenter().left, duration: this.FX_DURATION, onChange: function(a) {
      s.set("left", a), r.requestRenderAll(), n();
    }, onComplete: function() {
      s.setCoords(), p();
    } }), this;
  }, fxCenterObjectV: function(s, o) {
    var l = function() {
    }, p = (o = o || {}).onComplete || l, n = o.onChange || l, r = this;
    return v.util.animate({ startValue: s.top, endValue: this.getCenter().top, duration: this.FX_DURATION, onChange: function(a) {
      s.set("top", a), r.requestRenderAll(), n();
    }, onComplete: function() {
      s.setCoords(), p();
    } }), this;
  }, fxRemove: function(s, o) {
    var l = function() {
    }, p = (o = o || {}).onComplete || l, n = o.onChange || l, r = this;
    return v.util.animate({ startValue: s.opacity, endValue: 0, duration: this.FX_DURATION, onChange: function(a) {
      s.set("opacity", a), r.requestRenderAll(), n();
    }, onComplete: function() {
      r.remove(s), p();
    } }), this;
  } }), v.util.object.extend(v.Object.prototype, { animate: function() {
    if (arguments[0] && typeof arguments[0] == "object") {
      var s, o, l = [];
      for (s in arguments[0]) l.push(s);
      for (var p = 0, n = l.length; p < n; p++) s = l[p], o = p !== n - 1, this._animate(s, arguments[0][s], arguments[1], o);
    } else this._animate.apply(this, arguments);
    return this;
  }, _animate: function(s, o, l, p) {
    var n, r = this;
    o = o.toString(), l = l ? v.util.object.clone(l) : {}, ~s.indexOf(".") && (n = s.split("."));
    var a = r.colorProperties.indexOf(s) > -1 || n && r.colorProperties.indexOf(n[1]) > -1, h = n ? this.get(n[0])[n[1]] : this.get(s);
    "from" in l || (l.from = h), a || (o = ~o.indexOf("=") ? h + parseFloat(o.replace("=", "")) : parseFloat(o));
    var u = { startValue: l.from, endValue: o, byValue: l.by, easing: l.easing, duration: l.duration, abort: l.abort && function(d, g, y) {
      return l.abort.call(r, d, g, y);
    }, onChange: function(d, g, y) {
      n ? r[n[0]][n[1]] = d : r.set(s, d), p || l.onChange && l.onChange(d, g, y);
    }, onComplete: function(d, g, y) {
      p || (r.setCoords(), l.onComplete && l.onComplete(d, g, y));
    } };
    return a ? v.util.animateColor(u.startValue, u.endValue, u.duration, u) : v.util.animate(u);
  } }), function(s) {
    var o = s.fabric || (s.fabric = {}), l = o.util.object.extend, p = o.util.object.clone, n = { x1: 1, x2: 1, y1: 1, y2: 1 };
    function r(a, h) {
      var u = a.origin, d = a.axis1, g = a.axis2, y = a.dimension, x = h.nearest, C = h.center, b = h.farthest;
      return function() {
        switch (this.get(u)) {
          case x:
            return Math.min(this.get(d), this.get(g));
          case C:
            return Math.min(this.get(d), this.get(g)) + 0.5 * this.get(y);
          case b:
            return Math.max(this.get(d), this.get(g));
        }
      };
    }
    o.Line ? o.warn("fabric.Line is already defined") : (o.Line = o.util.createClass(o.Object, { type: "line", x1: 0, y1: 0, x2: 0, y2: 0, cacheProperties: o.Object.prototype.cacheProperties.concat("x1", "x2", "y1", "y2"), initialize: function(a, h) {
      a || (a = [0, 0, 0, 0]), this.callSuper("initialize", h), this.set("x1", a[0]), this.set("y1", a[1]), this.set("x2", a[2]), this.set("y2", a[3]), this._setWidthHeight(h);
    }, _setWidthHeight: function(a) {
      a || (a = {}), this.width = Math.abs(this.x2 - this.x1), this.height = Math.abs(this.y2 - this.y1), this.left = "left" in a ? a.left : this._getLeftToOriginX(), this.top = "top" in a ? a.top : this._getTopToOriginY();
    }, _set: function(a, h) {
      return this.callSuper("_set", a, h), n[a] !== void 0 && this._setWidthHeight(), this;
    }, _getLeftToOriginX: r({ origin: "originX", axis1: "x1", axis2: "x2", dimension: "width" }, { nearest: "left", center: "center", farthest: "right" }), _getTopToOriginY: r({ origin: "originY", axis1: "y1", axis2: "y2", dimension: "height" }, { nearest: "top", center: "center", farthest: "bottom" }), _render: function(a) {
      a.beginPath();
      var h = this.calcLinePoints();
      a.moveTo(h.x1, h.y1), a.lineTo(h.x2, h.y2), a.lineWidth = this.strokeWidth;
      var u = a.strokeStyle;
      a.strokeStyle = this.stroke || a.fillStyle, this.stroke && this._renderStroke(a), a.strokeStyle = u;
    }, _findCenterFromElement: function() {
      return { x: (this.x1 + this.x2) / 2, y: (this.y1 + this.y2) / 2 };
    }, toObject: function(a) {
      return l(this.callSuper("toObject", a), this.calcLinePoints());
    }, _getNonTransformedDimensions: function() {
      var a = this.callSuper("_getNonTransformedDimensions");
      return this.strokeLineCap === "butt" && (this.width === 0 && (a.y -= this.strokeWidth), this.height === 0 && (a.x -= this.strokeWidth)), a;
    }, calcLinePoints: function() {
      var a = this.x1 <= this.x2 ? -1 : 1, h = this.y1 <= this.y2 ? -1 : 1, u = a * this.width * 0.5, d = h * this.height * 0.5;
      return { x1: u, x2: a * this.width * -0.5, y1: d, y2: h * this.height * -0.5 };
    }, _toSVG: function() {
      var a = this.calcLinePoints();
      return ["<line ", "COMMON_PARTS", 'x1="', a.x1, '" y1="', a.y1, '" x2="', a.x2, '" y2="', a.y2, `" />
`];
    } }), o.Line.ATTRIBUTE_NAMES = o.SHARED_ATTRIBUTES.concat("x1 y1 x2 y2".split(" ")), o.Line.fromElement = function(a, h, u) {
      u = u || {};
      var d = o.parseAttributes(a, o.Line.ATTRIBUTE_NAMES), g = [d.x1 || 0, d.y1 || 0, d.x2 || 0, d.y2 || 0];
      h(new o.Line(g, l(d, u)));
    }, o.Line.fromObject = function(a, h) {
      var u = p(a, !0);
      u.points = [a.x1, a.y1, a.x2, a.y2], o.Object._fromObject("Line", u, function(d) {
        delete d.points, h && h(d);
      }, "points");
    });
  }(e), function(s) {
    var o = s.fabric || (s.fabric = {}), l = Math.PI;
    o.Circle ? o.warn("fabric.Circle is already defined.") : (o.Circle = o.util.createClass(o.Object, { type: "circle", radius: 0, startAngle: 0, endAngle: 2 * l, cacheProperties: o.Object.prototype.cacheProperties.concat("radius", "startAngle", "endAngle"), _set: function(p, n) {
      return this.callSuper("_set", p, n), p === "radius" && this.setRadius(n), this;
    }, toObject: function(p) {
      return this.callSuper("toObject", ["radius", "startAngle", "endAngle"].concat(p));
    }, _toSVG: function() {
      var p, n = (this.endAngle - this.startAngle) % (2 * l);
      if (n === 0) p = ["<circle ", "COMMON_PARTS", 'cx="0" cy="0" ', 'r="', this.radius, `" />
`];
      else {
        var r = o.util.cos(this.startAngle) * this.radius, a = o.util.sin(this.startAngle) * this.radius, h = o.util.cos(this.endAngle) * this.radius, u = o.util.sin(this.endAngle) * this.radius, d = n > l ? "1" : "0";
        p = ['<path d="M ' + r + " " + a, " A " + this.radius + " " + this.radius, " 0 ", +d + " 1", " " + h + " " + u, '" ', "COMMON_PARTS", ` />
`];
      }
      return p;
    }, _render: function(p) {
      p.beginPath(), p.arc(0, 0, this.radius, this.startAngle, this.endAngle, !1), this._renderPaintInOrder(p);
    }, getRadiusX: function() {
      return this.get("radius") * this.get("scaleX");
    }, getRadiusY: function() {
      return this.get("radius") * this.get("scaleY");
    }, setRadius: function(p) {
      return this.radius = p, this.set("width", 2 * p).set("height", 2 * p);
    } }), o.Circle.ATTRIBUTE_NAMES = o.SHARED_ATTRIBUTES.concat("cx cy r".split(" ")), o.Circle.fromElement = function(p, n) {
      var r, a = o.parseAttributes(p, o.Circle.ATTRIBUTE_NAMES);
      if (!("radius" in (r = a) && r.radius >= 0)) throw new Error("value of `r` attribute is required and can not be negative");
      a.left = (a.left || 0) - a.radius, a.top = (a.top || 0) - a.radius, n(new o.Circle(a));
    }, o.Circle.fromObject = function(p, n) {
      o.Object._fromObject("Circle", p, n);
    });
  }(e), function(s) {
    var o = s.fabric || (s.fabric = {});
    o.Triangle ? o.warn("fabric.Triangle is already defined") : (o.Triangle = o.util.createClass(o.Object, { type: "triangle", width: 100, height: 100, _render: function(l) {
      var p = this.width / 2, n = this.height / 2;
      l.beginPath(), l.moveTo(-p, n), l.lineTo(0, -n), l.lineTo(p, n), l.closePath(), this._renderPaintInOrder(l);
    }, _toSVG: function() {
      var l = this.width / 2, p = this.height / 2;
      return ["<polygon ", "COMMON_PARTS", 'points="', [-l + " " + p, "0 " + -p, l + " " + p].join(","), '" />'];
    } }), o.Triangle.fromObject = function(l, p) {
      return o.Object._fromObject("Triangle", l, p);
    });
  }(e), function(s) {
    var o = s.fabric || (s.fabric = {}), l = 2 * Math.PI;
    o.Ellipse ? o.warn("fabric.Ellipse is already defined.") : (o.Ellipse = o.util.createClass(o.Object, { type: "ellipse", rx: 0, ry: 0, cacheProperties: o.Object.prototype.cacheProperties.concat("rx", "ry"), initialize: function(p) {
      this.callSuper("initialize", p), this.set("rx", p && p.rx || 0), this.set("ry", p && p.ry || 0);
    }, _set: function(p, n) {
      switch (this.callSuper("_set", p, n), p) {
        case "rx":
          this.rx = n, this.set("width", 2 * n);
          break;
        case "ry":
          this.ry = n, this.set("height", 2 * n);
      }
      return this;
    }, getRx: function() {
      return this.get("rx") * this.get("scaleX");
    }, getRy: function() {
      return this.get("ry") * this.get("scaleY");
    }, toObject: function(p) {
      return this.callSuper("toObject", ["rx", "ry"].concat(p));
    }, _toSVG: function() {
      return ["<ellipse ", "COMMON_PARTS", 'cx="0" cy="0" ', 'rx="', this.rx, '" ry="', this.ry, `" />
`];
    }, _render: function(p) {
      p.beginPath(), p.save(), p.transform(1, 0, 0, this.ry / this.rx, 0, 0), p.arc(0, 0, this.rx, 0, l, !1), p.restore(), this._renderPaintInOrder(p);
    } }), o.Ellipse.ATTRIBUTE_NAMES = o.SHARED_ATTRIBUTES.concat("cx cy rx ry".split(" ")), o.Ellipse.fromElement = function(p, n) {
      var r = o.parseAttributes(p, o.Ellipse.ATTRIBUTE_NAMES);
      r.left = (r.left || 0) - r.rx, r.top = (r.top || 0) - r.ry, n(new o.Ellipse(r));
    }, o.Ellipse.fromObject = function(p, n) {
      o.Object._fromObject("Ellipse", p, n);
    });
  }(e), function(s) {
    var o = s.fabric || (s.fabric = {}), l = o.util.object.extend;
    o.Rect ? o.warn("fabric.Rect is already defined") : (o.Rect = o.util.createClass(o.Object, { stateProperties: o.Object.prototype.stateProperties.concat("rx", "ry"), type: "rect", rx: 0, ry: 0, cacheProperties: o.Object.prototype.cacheProperties.concat("rx", "ry"), initialize: function(p) {
      this.callSuper("initialize", p), this._initRxRy();
    }, _initRxRy: function() {
      this.rx && !this.ry ? this.ry = this.rx : this.ry && !this.rx && (this.rx = this.ry);
    }, _render: function(p) {
      var n = this.rx ? Math.min(this.rx, this.width / 2) : 0, r = this.ry ? Math.min(this.ry, this.height / 2) : 0, a = this.width, h = this.height, u = -this.width / 2, d = -this.height / 2, g = n !== 0 || r !== 0, y = 0.4477152502;
      p.beginPath(), p.moveTo(u + n, d), p.lineTo(u + a - n, d), g && p.bezierCurveTo(u + a - y * n, d, u + a, d + y * r, u + a, d + r), p.lineTo(u + a, d + h - r), g && p.bezierCurveTo(u + a, d + h - y * r, u + a - y * n, d + h, u + a - n, d + h), p.lineTo(u + n, d + h), g && p.bezierCurveTo(u + y * n, d + h, u, d + h - y * r, u, d + h - r), p.lineTo(u, d + r), g && p.bezierCurveTo(u, d + y * r, u + y * n, d, u + n, d), p.closePath(), this._renderPaintInOrder(p);
    }, toObject: function(p) {
      return this.callSuper("toObject", ["rx", "ry"].concat(p));
    }, _toSVG: function() {
      return ["<rect ", "COMMON_PARTS", 'x="', -this.width / 2, '" y="', -this.height / 2, '" rx="', this.rx, '" ry="', this.ry, '" width="', this.width, '" height="', this.height, `" />
`];
    } }), o.Rect.ATTRIBUTE_NAMES = o.SHARED_ATTRIBUTES.concat("x y rx ry width height".split(" ")), o.Rect.fromElement = function(p, n, r) {
      if (!p) return n(null);
      r = r || {};
      var a = o.parseAttributes(p, o.Rect.ATTRIBUTE_NAMES);
      a.left = a.left || 0, a.top = a.top || 0, a.height = a.height || 0, a.width = a.width || 0;
      var h = new o.Rect(l(r ? o.util.object.clone(r) : {}, a));
      h.visible = h.visible && h.width > 0 && h.height > 0, n(h);
    }, o.Rect.fromObject = function(p, n) {
      return o.Object._fromObject("Rect", p, n);
    });
  }(e), function(s) {
    var o = s.fabric || (s.fabric = {}), l = o.util.object.extend, p = o.util.array.min, n = o.util.array.max, r = o.util.toFixed;
    o.Polyline ? o.warn("fabric.Polyline is already defined") : (o.Polyline = o.util.createClass(o.Object, { type: "polyline", points: null, cacheProperties: o.Object.prototype.cacheProperties.concat("points"), initialize: function(a, h) {
      h = h || {}, this.points = a || [], this.callSuper("initialize", h), this._setPositionDimensions(h);
    }, _setPositionDimensions: function(a) {
      var h, u = this._calcDimensions(a);
      this.width = u.width, this.height = u.height, a.fromSVG || (h = this.translateToGivenOrigin({ x: u.left - this.strokeWidth / 2, y: u.top - this.strokeWidth / 2 }, "left", "top", this.originX, this.originY)), a.left === void 0 && (this.left = a.fromSVG ? u.left : h.x), a.top === void 0 && (this.top = a.fromSVG ? u.top : h.y), this.pathOffset = { x: u.left + this.width / 2, y: u.top + this.height / 2 };
    }, _calcDimensions: function() {
      var a = this.points, h = p(a, "x") || 0, u = p(a, "y") || 0;
      return { left: h, top: u, width: (n(a, "x") || 0) - h, height: (n(a, "y") || 0) - u };
    }, toObject: function(a) {
      return l(this.callSuper("toObject", a), { points: this.points.concat() });
    }, _toSVG: function() {
      for (var a = [], h = this.pathOffset.x, u = this.pathOffset.y, d = o.Object.NUM_FRACTION_DIGITS, g = 0, y = this.points.length; g < y; g++) a.push(r(this.points[g].x - h, d), ",", r(this.points[g].y - u, d), " ");
      return ["<" + this.type + " ", "COMMON_PARTS", 'points="', a.join(""), `" />
`];
    }, commonRender: function(a) {
      var h, u = this.points.length, d = this.pathOffset.x, g = this.pathOffset.y;
      if (!u || isNaN(this.points[u - 1].y)) return !1;
      a.beginPath(), a.moveTo(this.points[0].x - d, this.points[0].y - g);
      for (var y = 0; y < u; y++) h = this.points[y], a.lineTo(h.x - d, h.y - g);
      return !0;
    }, _render: function(a) {
      this.commonRender(a) && this._renderPaintInOrder(a);
    }, complexity: function() {
      return this.get("points").length;
    } }), o.Polyline.ATTRIBUTE_NAMES = o.SHARED_ATTRIBUTES.concat(), o.Polyline.fromElementGenerator = function(a) {
      return function(h, u, d) {
        if (!h) return u(null);
        d || (d = {});
        var g = o.parsePointsAttribute(h.getAttribute("points")), y = o.parseAttributes(h, o[a].ATTRIBUTE_NAMES);
        y.fromSVG = !0, u(new o[a](g, l(y, d)));
      };
    }, o.Polyline.fromElement = o.Polyline.fromElementGenerator("Polyline"), o.Polyline.fromObject = function(a, h) {
      return o.Object._fromObject("Polyline", a, h, "points");
    });
  }(e), function(s) {
    var o = s.fabric || (s.fabric = {});
    o.Polygon ? o.warn("fabric.Polygon is already defined") : (o.Polygon = o.util.createClass(o.Polyline, { type: "polygon", _render: function(l) {
      this.commonRender(l) && (l.closePath(), this._renderPaintInOrder(l));
    } }), o.Polygon.ATTRIBUTE_NAMES = o.SHARED_ATTRIBUTES.concat(), o.Polygon.fromElement = o.Polyline.fromElementGenerator("Polygon"), o.Polygon.fromObject = function(l, p) {
      o.Object._fromObject("Polygon", l, p, "points");
    });
  }(e), function(s) {
    var o = s.fabric || (s.fabric = {}), l = o.util.array.min, p = o.util.array.max, n = o.util.object.extend, r = Object.prototype.toString, a = o.util.toFixed;
    o.Path ? o.warn("fabric.Path is already defined") : (o.Path = o.util.createClass(o.Object, { type: "path", path: null, cacheProperties: o.Object.prototype.cacheProperties.concat("path", "fillRule"), stateProperties: o.Object.prototype.stateProperties.concat("path"), initialize: function(h, u) {
      u = u || {}, this.callSuper("initialize", u), h || (h = []);
      var d = r.call(h) === "[object Array]";
      this.path = o.util.makePathSimpler(d ? h : o.util.parsePath(h)), this.path && o.Polyline.prototype._setPositionDimensions.call(this, u);
    }, _renderPathCommands: function(h) {
      var u, d = 0, g = 0, y = 0, x = 0, C = 0, b = 0, M = -this.pathOffset.x, P = -this.pathOffset.y;
      h.beginPath();
      for (var _ = 0, k = this.path.length; _ < k; ++_) switch ((u = this.path[_])[0]) {
        case "L":
          y = u[1], x = u[2], h.lineTo(y + M, x + P);
          break;
        case "M":
          d = y = u[1], g = x = u[2], h.moveTo(y + M, x + P);
          break;
        case "C":
          y = u[5], x = u[6], C = u[3], b = u[4], h.bezierCurveTo(u[1] + M, u[2] + P, C + M, b + P, y + M, x + P);
          break;
        case "Q":
          h.quadraticCurveTo(u[1] + M, u[2] + P, u[3] + M, u[4] + P), y = u[3], x = u[4], C = u[1], b = u[2];
          break;
        case "z":
        case "Z":
          y = d, x = g, h.closePath();
      }
    }, _render: function(h) {
      this._renderPathCommands(h), this._renderPaintInOrder(h);
    }, toString: function() {
      return "#<fabric.Path (" + this.complexity() + '): { "top": ' + this.top + ', "left": ' + this.left + " }>";
    }, toObject: function(h) {
      return n(this.callSuper("toObject", h), { path: this.path.map(function(u) {
        return u.slice();
      }) });
    }, toDatalessObject: function(h) {
      var u = this.toObject(["sourcePath"].concat(h));
      return u.sourcePath && delete u.path, u;
    }, _toSVG: function() {
      return ["<path ", "COMMON_PARTS", 'd="', o.util.joinPath(this.path), '" stroke-linecap="round" ', `/>
`];
    }, _getOffsetTransform: function() {
      var h = o.Object.NUM_FRACTION_DIGITS;
      return " translate(" + a(-this.pathOffset.x, h) + ", " + a(-this.pathOffset.y, h) + ")";
    }, toClipPathSVG: function(h) {
      var u = this._getOffsetTransform();
      return "	" + this._createBaseClipPathSVGMarkup(this._toSVG(), { reviver: h, additionalTransform: u });
    }, toSVG: function(h) {
      var u = this._getOffsetTransform();
      return this._createBaseSVGMarkup(this._toSVG(), { reviver: h, additionalTransform: u });
    }, complexity: function() {
      return this.path.length;
    }, _calcDimensions: function() {
      for (var h, u, d = [], g = [], y = 0, x = 0, C = 0, b = 0, M = 0, P = this.path.length; M < P; ++M) {
        switch ((h = this.path[M])[0]) {
          case "L":
            C = h[1], b = h[2], u = [];
            break;
          case "M":
            y = C = h[1], x = b = h[2], u = [];
            break;
          case "C":
            u = o.util.getBoundsOfCurve(C, b, h[1], h[2], h[3], h[4], h[5], h[6]), C = h[5], b = h[6];
            break;
          case "Q":
            u = o.util.getBoundsOfCurve(C, b, h[1], h[2], h[1], h[2], h[3], h[4]), C = h[3], b = h[4];
            break;
          case "z":
          case "Z":
            C = y, b = x;
        }
        u.forEach(function(L) {
          d.push(L.x), g.push(L.y);
        }), d.push(C), g.push(b);
      }
      var _ = l(d) || 0, k = l(g) || 0;
      return { left: _, top: k, width: (p(d) || 0) - _, height: (p(g) || 0) - k };
    } }), o.Path.fromObject = function(h, u) {
      if (typeof h.sourcePath == "string") {
        var d = h.sourcePath;
        o.loadSVGFromURL(d, function(g) {
          var y = g[0];
          y.setOptions(h), u && u(y);
        });
      } else o.Object._fromObject("Path", h, u, "path");
    }, o.Path.ATTRIBUTE_NAMES = o.SHARED_ATTRIBUTES.concat(["d"]), o.Path.fromElement = function(h, u, d) {
      var g = o.parseAttributes(h, o.Path.ATTRIBUTE_NAMES);
      g.fromSVG = !0, u(new o.Path(g.d, n(g, d)));
    });
  }(e), function(s) {
    var o = s.fabric || (s.fabric = {}), l = o.util.array.min, p = o.util.array.max;
    o.Group || (o.Group = o.util.createClass(o.Object, o.Collection, { type: "group", strokeWidth: 0, subTargetCheck: !1, cacheProperties: [], useSetOnGroup: !1, initialize: function(n, r, a) {
      r = r || {}, this._objects = [], a && this.callSuper("initialize", r), this._objects = n || [];
      for (var h = this._objects.length; h--; ) this._objects[h].group = this;
      if (a) this._updateObjectsACoords();
      else {
        var u = r && r.centerPoint;
        r.originX !== void 0 && (this.originX = r.originX), r.originY !== void 0 && (this.originY = r.originY), u || this._calcBounds(), this._updateObjectsCoords(u), delete r.centerPoint, this.callSuper("initialize", r);
      }
      this.setCoords();
    }, _updateObjectsACoords: function() {
      for (var n = this._objects.length; n--; ) this._objects[n].setCoords(!0);
    }, _updateObjectsCoords: function(n) {
      n = n || this.getCenterPoint();
      for (var r = this._objects.length; r--; ) this._updateObjectCoords(this._objects[r], n);
    }, _updateObjectCoords: function(n, r) {
      var a = n.left, h = n.top;
      n.set({ left: a - r.x, top: h - r.y }), n.group = this, n.setCoords(!0);
    }, toString: function() {
      return "#<fabric.Group: (" + this.complexity() + ")>";
    }, addWithUpdate: function(n) {
      var r = !!this.group;
      return this._restoreObjectsState(), o.util.resetObjectTransform(this), n && (r && o.util.removeTransformFromObject(n, this.group.calcTransformMatrix()), this._objects.push(n), n.group = this, n._set("canvas", this.canvas)), this._calcBounds(), this._updateObjectsCoords(), this.dirty = !0, r ? this.group.addWithUpdate() : this.setCoords(), this;
    }, removeWithUpdate: function(n) {
      return this._restoreObjectsState(), o.util.resetObjectTransform(this), this.remove(n), this._calcBounds(), this._updateObjectsCoords(), this.setCoords(), this.dirty = !0, this;
    }, _onObjectAdded: function(n) {
      this.dirty = !0, n.group = this, n._set("canvas", this.canvas);
    }, _onObjectRemoved: function(n) {
      this.dirty = !0, delete n.group;
    }, _set: function(n, r) {
      var a = this._objects.length;
      if (this.useSetOnGroup) for (; a--; ) this._objects[a].setOnGroup(n, r);
      if (n === "canvas") for (; a--; ) this._objects[a]._set(n, r);
      o.Object.prototype._set.call(this, n, r);
    }, toObject: function(n) {
      var r = this.includeDefaultValues, a = this._objects.filter(function(u) {
        return !u.excludeFromExport;
      }).map(function(u) {
        var d = u.includeDefaultValues;
        u.includeDefaultValues = r;
        var g = u.toObject(n);
        return u.includeDefaultValues = d, g;
      }), h = o.Object.prototype.toObject.call(this, n);
      return h.objects = a, h;
    }, toDatalessObject: function(n) {
      var r, a = this.sourcePath;
      if (a) r = a;
      else {
        var h = this.includeDefaultValues;
        r = this._objects.map(function(d) {
          var g = d.includeDefaultValues;
          d.includeDefaultValues = h;
          var y = d.toDatalessObject(n);
          return d.includeDefaultValues = g, y;
        });
      }
      var u = o.Object.prototype.toDatalessObject.call(this, n);
      return u.objects = r, u;
    }, render: function(n) {
      this._transformDone = !0, this.callSuper("render", n), this._transformDone = !1;
    }, shouldCache: function() {
      var n = o.Object.prototype.shouldCache.call(this);
      if (n) {
        for (var r = 0, a = this._objects.length; r < a; r++) if (this._objects[r].willDrawShadow()) return this.ownCaching = !1, !1;
      }
      return n;
    }, willDrawShadow: function() {
      if (o.Object.prototype.willDrawShadow.call(this)) return !0;
      for (var n = 0, r = this._objects.length; n < r; n++) if (this._objects[n].willDrawShadow()) return !0;
      return !1;
    }, isOnACache: function() {
      return this.ownCaching || this.group && this.group.isOnACache();
    }, drawObject: function(n) {
      for (var r = 0, a = this._objects.length; r < a; r++) this._objects[r].render(n);
      this._drawClipPath(n);
    }, isCacheDirty: function(n) {
      if (this.callSuper("isCacheDirty", n)) return !0;
      if (!this.statefullCache) return !1;
      for (var r = 0, a = this._objects.length; r < a; r++) if (this._objects[r].isCacheDirty(!0)) {
        if (this._cacheCanvas) {
          var h = this.cacheWidth / this.zoomX, u = this.cacheHeight / this.zoomY;
          this._cacheContext.clearRect(-h / 2, -u / 2, h, u);
        }
        return !0;
      }
      return !1;
    }, _restoreObjectsState: function() {
      var n = this.calcOwnMatrix();
      return this._objects.forEach(function(r) {
        o.util.addTransformToObject(r, n), delete r.group, r.setCoords();
      }), this;
    }, realizeTransform: function(n, r) {
      return o.util.addTransformToObject(n, r), n;
    }, destroy: function() {
      return this._objects.forEach(function(n) {
        n.set("dirty", !0);
      }), this._restoreObjectsState();
    }, toActiveSelection: function() {
      if (this.canvas) {
        var n = this._objects, r = this.canvas;
        this._objects = [];
        var a = this.toObject();
        delete a.objects;
        var h = new o.ActiveSelection([]);
        return h.set(a), h.type = "activeSelection", r.remove(this), n.forEach(function(u) {
          u.group = h, u.dirty = !0, r.add(u);
        }), h.canvas = r, h._objects = n, r._activeObject = h, h.setCoords(), h;
      }
    }, ungroupOnCanvas: function() {
      return this._restoreObjectsState();
    }, setObjectsCoords: function() {
      return this.forEachObject(function(n) {
        n.setCoords(!0);
      }), this;
    }, _calcBounds: function(n) {
      for (var r, a, h, u, d = [], g = [], y = ["tr", "br", "bl", "tl"], x = 0, C = this._objects.length, b = y.length; x < C; ++x) {
        for (h = (r = this._objects[x]).calcACoords(), u = 0; u < b; u++) a = y[u], d.push(h[a].x), g.push(h[a].y);
        r.aCoords = h;
      }
      this._getBounds(d, g, n);
    }, _getBounds: function(n, r, a) {
      var h = new o.Point(l(n), l(r)), u = new o.Point(p(n), p(r)), d = h.y || 0, g = h.x || 0, y = u.x - h.x || 0, x = u.y - h.y || 0;
      this.width = y, this.height = x, a || this.setPositionByOrigin({ x: g, y: d }, "left", "top");
    }, _toSVG: function(n) {
      for (var r = ["<g ", "COMMON_PARTS", ` >
`], a = 0, h = this._objects.length; a < h; a++) r.push("		", this._objects[a].toSVG(n));
      return r.push(`</g>
`), r;
    }, getSvgStyles: function() {
      var n = this.opacity !== void 0 && this.opacity !== 1 ? "opacity: " + this.opacity + ";" : "", r = this.visible ? "" : " visibility: hidden;";
      return [n, this.getSvgFilter(), r].join("");
    }, toClipPathSVG: function(n) {
      for (var r = [], a = 0, h = this._objects.length; a < h; a++) r.push("	", this._objects[a].toClipPathSVG(n));
      return this._createBaseClipPathSVGMarkup(r, { reviver: n });
    } }), o.Group.fromObject = function(n, r) {
      var a = n.objects, h = o.util.object.clone(n, !0);
      delete h.objects, typeof a != "string" ? o.util.enlivenObjects(a, function(u) {
        o.util.enlivenObjects([n.clipPath], function(d) {
          var g = o.util.object.clone(n, !0);
          g.clipPath = d[0], delete g.objects, r && r(new o.Group(u, g, !0));
        });
      }) : o.loadSVGFromURL(a, function(u) {
        var d = o.util.groupSVGElements(u, n, a);
        d.set(h), r && r(d);
      });
    });
  }(e), function(s) {
    var o = s.fabric || (s.fabric = {});
    o.ActiveSelection || (o.ActiveSelection = o.util.createClass(o.Group, { type: "activeSelection", initialize: function(l, p) {
      p = p || {}, this._objects = l || [];
      for (var n = this._objects.length; n--; ) this._objects[n].group = this;
      p.originX && (this.originX = p.originX), p.originY && (this.originY = p.originY), this._calcBounds(), this._updateObjectsCoords(), o.Object.prototype.initialize.call(this, p), this.setCoords();
    }, toGroup: function() {
      var l = this._objects.concat();
      this._objects = [];
      var p = o.Object.prototype.toObject.call(this), n = new o.Group([]);
      if (delete p.type, n.set(p), l.forEach(function(a) {
        a.canvas.remove(a), a.group = n;
      }), n._objects = l, !this.canvas) return n;
      var r = this.canvas;
      return r.add(n), r._activeObject = n, n.setCoords(), n;
    }, onDeselect: function() {
      return this.destroy(), !1;
    }, toString: function() {
      return "#<fabric.ActiveSelection: (" + this.complexity() + ")>";
    }, shouldCache: function() {
      return !1;
    }, isOnACache: function() {
      return !1;
    }, _renderControls: function(l, p, n) {
      l.save(), l.globalAlpha = this.isMoving ? this.borderOpacityWhenMoving : 1, this.callSuper("_renderControls", l, p), (n = n || {}).hasControls === void 0 && (n.hasControls = !1), n.forActiveSelection = !0;
      for (var r = 0, a = this._objects.length; r < a; r++) this._objects[r]._renderControls(l, n);
      l.restore();
    } }), o.ActiveSelection.fromObject = function(l, p) {
      o.util.enlivenObjects(l.objects, function(n) {
        delete l.objects, p && p(new o.ActiveSelection(n, l, !0));
      });
    });
  }(e), function(s) {
    var o = v.util.object.extend;
    s.fabric || (s.fabric = {}), s.fabric.Image ? v.warn("fabric.Image is already defined.") : (v.Image = v.util.createClass(v.Object, { type: "image", strokeWidth: 0, srcFromAttribute: !1, _lastScaleX: 1, _lastScaleY: 1, _filterScalingX: 1, _filterScalingY: 1, minimumScaleTrigger: 0.5, stateProperties: v.Object.prototype.stateProperties.concat("cropX", "cropY"), cacheProperties: v.Object.prototype.cacheProperties.concat("cropX", "cropY"), cacheKey: "", cropX: 0, cropY: 0, imageSmoothing: !0, initialize: function(l, p) {
      p || (p = {}), this.filters = [], this.cacheKey = "texture" + v.Object.__uid++, this.callSuper("initialize", p), this._initElement(l, p);
    }, getElement: function() {
      return this._element || {};
    }, setElement: function(l, p) {
      return this.removeTexture(this.cacheKey), this.removeTexture(this.cacheKey + "_filtered"), this._element = l, this._originalElement = l, this._initConfig(p), this.filters.length !== 0 && this.applyFilters(), this.resizeFilter && this.applyResizeFilters(), this;
    }, removeTexture: function(l) {
      var p = v.filterBackend;
      p && p.evictCachesForKey && p.evictCachesForKey(l);
    }, dispose: function() {
      this.removeTexture(this.cacheKey), this.removeTexture(this.cacheKey + "_filtered"), this._cacheContext = void 0, ["_originalElement", "_element", "_filteredEl", "_cacheCanvas"].forEach((function(l) {
        v.util.cleanUpJsdomNode(this[l]), this[l] = void 0;
      }).bind(this));
    }, getCrossOrigin: function() {
      return this._originalElement && (this._originalElement.crossOrigin || null);
    }, getOriginalSize: function() {
      var l = this.getElement();
      return { width: l.naturalWidth || l.width, height: l.naturalHeight || l.height };
    }, _stroke: function(l) {
      if (this.stroke && this.strokeWidth !== 0) {
        var p = this.width / 2, n = this.height / 2;
        l.beginPath(), l.moveTo(-p, -n), l.lineTo(p, -n), l.lineTo(p, n), l.lineTo(-p, n), l.lineTo(-p, -n), l.closePath();
      }
    }, toObject: function(l) {
      var p = [];
      this.filters.forEach(function(r) {
        r && p.push(r.toObject());
      });
      var n = o(this.callSuper("toObject", ["cropX", "cropY"].concat(l)), { src: this.getSrc(), crossOrigin: this.getCrossOrigin(), filters: p });
      return this.resizeFilter && (n.resizeFilter = this.resizeFilter.toObject()), n;
    }, hasCrop: function() {
      return this.cropX || this.cropY || this.width < this._element.width || this.height < this._element.height;
    }, _toSVG: function() {
      var l, p = [], n = [], r = this._element, a = -this.width / 2, h = -this.height / 2, u = "", d = "";
      if (!r) return [];
      if (this.hasCrop()) {
        var g = v.Object.__uid++;
        p.push('<clipPath id="imageCrop_' + g + `">
`, '	<rect x="' + a + '" y="' + h + '" width="' + this.width + '" height="' + this.height + `" />
`, `</clipPath>
`), u = ' clip-path="url(#imageCrop_' + g + ')" ';
      }
      if (this.imageSmoothing || (d = '" image-rendering="optimizeSpeed'), n.push("	<image ", "COMMON_PARTS", 'xlink:href="', this.getSvgSrc(!0), '" x="', a - this.cropX, '" y="', h - this.cropY, '" width="', r.width || r.naturalWidth, '" height="', r.height || r.height, d, '"', u, `></image>
`), this.stroke || this.strokeDashArray) {
        var y = this.fill;
        this.fill = null, l = ["	<rect ", 'x="', a, '" y="', h, '" width="', this.width, '" height="', this.height, '" style="', this.getSvgStyles(), `"/>
`], this.fill = y;
      }
      return p = this.paintFirst !== "fill" ? p.concat(l, n) : p.concat(n, l);
    }, getSrc: function(l) {
      var p = l ? this._element : this._originalElement;
      return p ? p.toDataURL ? p.toDataURL() : this.srcFromAttribute ? p.getAttribute("src") : p.src : this.src || "";
    }, setSrc: function(l, p, n) {
      return v.util.loadImage(l, function(r, a) {
        this.setElement(r, n), this._setWidthHeight(), p && p(this, a);
      }, this, n && n.crossOrigin), this;
    }, toString: function() {
      return '#<fabric.Image: { src: "' + this.getSrc() + '" }>';
    }, applyResizeFilters: function() {
      var l = this.resizeFilter, p = this.minimumScaleTrigger, n = this.getTotalObjectScaling(), r = n.scaleX, a = n.scaleY, h = this._filteredEl || this._originalElement;
      if (this.group && this.set("dirty", !0), !l || r > p && a > p) return this._element = h, this._filterScalingX = 1, this._filterScalingY = 1, this._lastScaleX = r, void (this._lastScaleY = a);
      v.filterBackend || (v.filterBackend = v.initFilterBackend());
      var u = v.util.createCanvasElement(), d = this._filteredEl ? this.cacheKey + "_filtered" : this.cacheKey, g = h.width, y = h.height;
      u.width = g, u.height = y, this._element = u, this._lastScaleX = l.scaleX = r, this._lastScaleY = l.scaleY = a, v.filterBackend.applyFilters([l], h, g, y, this._element, d), this._filterScalingX = u.width / this._originalElement.width, this._filterScalingY = u.height / this._originalElement.height;
    }, applyFilters: function(l) {
      if (l = (l = l || this.filters || []).filter(function(h) {
        return h && !h.isNeutralState();
      }), this.set("dirty", !0), this.removeTexture(this.cacheKey + "_filtered"), l.length === 0) return this._element = this._originalElement, this._filteredEl = null, this._filterScalingX = 1, this._filterScalingY = 1, this;
      var p = this._originalElement, n = p.naturalWidth || p.width, r = p.naturalHeight || p.height;
      if (this._element === this._originalElement) {
        var a = v.util.createCanvasElement();
        a.width = n, a.height = r, this._element = a, this._filteredEl = a;
      } else this._element = this._filteredEl, this._filteredEl.getContext("2d").clearRect(0, 0, n, r), this._lastScaleX = 1, this._lastScaleY = 1;
      return v.filterBackend || (v.filterBackend = v.initFilterBackend()), v.filterBackend.applyFilters(l, this._originalElement, n, r, this._element, this.cacheKey), this._originalElement.width === this._element.width && this._originalElement.height === this._element.height || (this._filterScalingX = this._element.width / this._originalElement.width, this._filterScalingY = this._element.height / this._originalElement.height), this;
    }, _render: function(l) {
      v.util.setImageSmoothing(l, this.imageSmoothing), this.isMoving !== !0 && this.resizeFilter && this._needsResize() && this.applyResizeFilters(), this._stroke(l), this._renderPaintInOrder(l);
    }, drawCacheOnCanvas: function(l) {
      v.util.setImageSmoothing(l, this.imageSmoothing), v.Object.prototype.drawCacheOnCanvas.call(this, l);
    }, shouldCache: function() {
      return this.needsItsOwnCache();
    }, _renderFill: function(l) {
      var p = this._element;
      if (p) {
        var n = this._filterScalingX, r = this._filterScalingY, a = this.width, h = this.height, u = Math.min, d = Math.max, g = d(this.cropX, 0), y = d(this.cropY, 0), x = p.naturalWidth || p.width, C = p.naturalHeight || p.height, b = g * n, M = y * r, P = u(a * n, x - b), _ = u(h * r, C - M), k = -a / 2, L = -h / 2, H = u(a, x / n - g), W = u(h, C / r - y);
        p && l.drawImage(p, b, M, P, _, k, L, H, W);
      }
    }, _needsResize: function() {
      var l = this.getTotalObjectScaling();
      return l.scaleX !== this._lastScaleX || l.scaleY !== this._lastScaleY;
    }, _resetWidthHeight: function() {
      this.set(this.getOriginalSize());
    }, _initElement: function(l, p) {
      this.setElement(v.util.getById(l), p), v.util.addClass(this.getElement(), v.Image.CSS_CANVAS);
    }, _initConfig: function(l) {
      l || (l = {}), this.setOptions(l), this._setWidthHeight(l);
    }, _initFilters: function(l, p) {
      l && l.length ? v.util.enlivenObjects(l, function(n) {
        p && p(n);
      }, "fabric.Image.filters") : p && p();
    }, _setWidthHeight: function(l) {
      l || (l = {});
      var p = this.getElement();
      this.width = l.width || p.naturalWidth || p.width || 0, this.height = l.height || p.naturalHeight || p.height || 0;
    }, parsePreserveAspectRatioAttribute: function() {
      var l, p = v.util.parsePreserveAspectRatioAttribute(this.preserveAspectRatio || ""), n = this._element.width, r = this._element.height, a = 1, h = 1, u = 0, d = 0, g = 0, y = 0, x = this.width, C = this.height, b = { width: x, height: C };
      return !p || p.alignX === "none" && p.alignY === "none" ? (a = x / n, h = C / r) : (p.meetOrSlice === "meet" && (l = (x - n * (a = h = v.util.findScaleToFit(this._element, b))) / 2, p.alignX === "Min" && (u = -l), p.alignX === "Max" && (u = l), l = (C - r * h) / 2, p.alignY === "Min" && (d = -l), p.alignY === "Max" && (d = l)), p.meetOrSlice === "slice" && (l = n - x / (a = h = v.util.findScaleToCover(this._element, b)), p.alignX === "Mid" && (g = l / 2), p.alignX === "Max" && (g = l), l = r - C / h, p.alignY === "Mid" && (y = l / 2), p.alignY === "Max" && (y = l), n = x / a, r = C / h)), { width: n, height: r, scaleX: a, scaleY: h, offsetLeft: u, offsetTop: d, cropX: g, cropY: y };
    } }), v.Image.CSS_CANVAS = "canvas-img", v.Image.prototype.getSvgSrc = v.Image.prototype.getSrc, v.Image.fromObject = function(l, p) {
      var n = v.util.object.clone(l);
      v.util.loadImage(n.src, function(r, a) {
        a ? p && p(null, !0) : v.Image.prototype._initFilters.call(n, n.filters, function(h) {
          n.filters = h || [], v.Image.prototype._initFilters.call(n, [n.resizeFilter], function(u) {
            n.resizeFilter = u[0], v.util.enlivenObjects([n.clipPath], function(d) {
              n.clipPath = d[0];
              var g = new v.Image(r, n);
              p(g, !1);
            });
          });
        });
      }, null, n.crossOrigin);
    }, v.Image.fromURL = function(l, p, n) {
      v.util.loadImage(l, function(r, a) {
        p && p(new v.Image(r, n), a);
      }, null, n && n.crossOrigin);
    }, v.Image.ATTRIBUTE_NAMES = v.SHARED_ATTRIBUTES.concat("x y width height preserveAspectRatio xlink:href crossOrigin image-rendering".split(" ")), v.Image.fromElement = function(l, p, n) {
      var r = v.parseAttributes(l, v.Image.ATTRIBUTE_NAMES);
      v.Image.fromURL(r["xlink:href"], p, o(n ? v.util.object.clone(n) : {}, r));
    });
  }(e), v.util.object.extend(v.Object.prototype, { _getAngleValueForStraighten: function() {
    var s = this.angle % 360;
    return s > 0 ? 90 * Math.round((s - 1) / 90) : 90 * Math.round(s / 90);
  }, straighten: function() {
    return this.rotate(this._getAngleValueForStraighten()), this;
  }, fxStraighten: function(s) {
    var o = function() {
    }, l = (s = s || {}).onComplete || o, p = s.onChange || o, n = this;
    return v.util.animate({ startValue: this.get("angle"), endValue: this._getAngleValueForStraighten(), duration: this.FX_DURATION, onChange: function(r) {
      n.rotate(r), p();
    }, onComplete: function() {
      n.setCoords(), l();
    } }), this;
  } }), v.util.object.extend(v.StaticCanvas.prototype, { straightenObject: function(s) {
    return s.straighten(), this.requestRenderAll(), this;
  }, fxStraightenObject: function(s) {
    return s.fxStraighten({ onChange: this.requestRenderAllBound }), this;
  } }), function() {
    function s(l, p) {
      var n = "precision " + p + ` float;
void main(){}`, r = l.createShader(l.FRAGMENT_SHADER);
      return l.shaderSource(r, n), l.compileShader(r), !!l.getShaderParameter(r, l.COMPILE_STATUS);
    }
    function o(l) {
      l && l.tileSize && (this.tileSize = l.tileSize), this.setupGLContext(this.tileSize, this.tileSize), this.captureGPUInfo();
    }
    v.isWebglSupported = function(l) {
      if (v.isLikelyNode) return !1;
      l = l || v.WebglFilterBackend.prototype.tileSize;
      var p = document.createElement("canvas"), n = p.getContext("webgl") || p.getContext("experimental-webgl"), r = !1;
      if (n) {
        v.maxTextureSize = n.getParameter(n.MAX_TEXTURE_SIZE), r = v.maxTextureSize >= l;
        for (var a = ["highp", "mediump", "lowp"], h = 0; h < 3; h++) if (s(n, a[h])) {
          v.webGlPrecision = a[h];
          break;
        }
      }
      return this.isSupported = r, r;
    }, v.WebglFilterBackend = o, o.prototype = { tileSize: 2048, resources: {}, setupGLContext: function(l, p) {
      this.dispose(), this.createWebGLCanvas(l, p), this.aPosition = new Float32Array([0, 0, 0, 1, 1, 0, 1, 1]), this.chooseFastestCopyGLTo2DMethod(l, p);
    }, chooseFastestCopyGLTo2DMethod: function(l, p) {
      var n, r = window.performance !== void 0;
      try {
        new ImageData(1, 1), n = !0;
      } catch {
        n = !1;
      }
      var a = typeof ArrayBuffer < "u", h = typeof Uint8ClampedArray < "u";
      if (r && n && a && h) {
        var u = v.util.createCanvasElement(), d = new ArrayBuffer(l * p * 4);
        if (v.forceGLPutImageData) return this.imageBuffer = d, void (this.copyGLTo2D = We);
        var g, y, x = { imageBuffer: d, destinationWidth: l, destinationHeight: p, targetCanvas: u };
        u.width = l, u.height = p, g = window.performance.now(), qe.call(x, this.gl, x), y = window.performance.now() - g, g = window.performance.now(), We.call(x, this.gl, x), y > window.performance.now() - g ? (this.imageBuffer = d, this.copyGLTo2D = We) : this.copyGLTo2D = qe;
      }
    }, createWebGLCanvas: function(l, p) {
      var n = v.util.createCanvasElement();
      n.width = l, n.height = p;
      var r = { alpha: !0, premultipliedAlpha: !1, depth: !1, stencil: !1, antialias: !1 }, a = n.getContext("webgl", r);
      a || (a = n.getContext("experimental-webgl", r)), a && (a.clearColor(0, 0, 0, 0), this.canvas = n, this.gl = a);
    }, applyFilters: function(l, p, n, r, a, h) {
      var u, d = this.gl;
      h && (u = this.getCachedTexture(h, p));
      var g = { originalWidth: p.width || p.originalWidth, originalHeight: p.height || p.originalHeight, sourceWidth: n, sourceHeight: r, destinationWidth: n, destinationHeight: r, context: d, sourceTexture: this.createTexture(d, n, r, !u && p), targetTexture: this.createTexture(d, n, r), originalTexture: u || this.createTexture(d, n, r, !u && p), passes: l.length, webgl: !0, aPosition: this.aPosition, programCache: this.programCache, pass: 0, filterBackend: this, targetCanvas: a }, y = d.createFramebuffer();
      return d.bindFramebuffer(d.FRAMEBUFFER, y), l.forEach(function(x) {
        x && x.applyTo(g);
      }), function(x) {
        var C = x.targetCanvas, b = C.width, M = C.height, P = x.destinationWidth, _ = x.destinationHeight;
        b === P && M === _ || (C.width = P, C.height = _);
      }(g), this.copyGLTo2D(d, g), d.bindTexture(d.TEXTURE_2D, null), d.deleteTexture(g.sourceTexture), d.deleteTexture(g.targetTexture), d.deleteFramebuffer(y), a.getContext("2d").setTransform(1, 0, 0, 1, 0, 0), g;
    }, dispose: function() {
      this.canvas && (this.canvas = null, this.gl = null), this.clearWebGLCaches();
    }, clearWebGLCaches: function() {
      this.programCache = {}, this.textureCache = {};
    }, createTexture: function(l, p, n, r) {
      var a = l.createTexture();
      return l.bindTexture(l.TEXTURE_2D, a), l.texParameteri(l.TEXTURE_2D, l.TEXTURE_MAG_FILTER, l.NEAREST), l.texParameteri(l.TEXTURE_2D, l.TEXTURE_MIN_FILTER, l.NEAREST), l.texParameteri(l.TEXTURE_2D, l.TEXTURE_WRAP_S, l.CLAMP_TO_EDGE), l.texParameteri(l.TEXTURE_2D, l.TEXTURE_WRAP_T, l.CLAMP_TO_EDGE), r ? l.texImage2D(l.TEXTURE_2D, 0, l.RGBA, l.RGBA, l.UNSIGNED_BYTE, r) : l.texImage2D(l.TEXTURE_2D, 0, l.RGBA, p, n, 0, l.RGBA, l.UNSIGNED_BYTE, null), a;
    }, getCachedTexture: function(l, p) {
      if (this.textureCache[l]) return this.textureCache[l];
      var n = this.createTexture(this.gl, p.width, p.height, p);
      return this.textureCache[l] = n, n;
    }, evictCachesForKey: function(l) {
      this.textureCache[l] && (this.gl.deleteTexture(this.textureCache[l]), delete this.textureCache[l]);
    }, copyGLTo2D: qe, captureGPUInfo: function() {
      if (this.gpuInfo) return this.gpuInfo;
      var l = this.gl, p = { renderer: "", vendor: "" };
      if (!l) return p;
      var n = l.getExtension("WEBGL_debug_renderer_info");
      if (n) {
        var r = l.getParameter(n.UNMASKED_RENDERER_WEBGL), a = l.getParameter(n.UNMASKED_VENDOR_WEBGL);
        r && (p.renderer = r.toLowerCase()), a && (p.vendor = a.toLowerCase());
      }
      return this.gpuInfo = p, p;
    } };
  }(), function() {
    var s = function() {
    };
    function o() {
    }
    v.Canvas2dFilterBackend = o, o.prototype = { evictCachesForKey: s, dispose: s, clearWebGLCaches: s, resources: {}, applyFilters: function(l, p, n, r, a) {
      var h = a.getContext("2d");
      h.drawImage(p, 0, 0, n, r);
      var u = { sourceWidth: n, sourceHeight: r, imageData: h.getImageData(0, 0, n, r), originalEl: p, originalImageData: h.getImageData(0, 0, n, r), canvasEl: a, ctx: h, filterBackend: this };
      return l.forEach(function(d) {
        d.applyTo(u);
      }), u.imageData.width === n && u.imageData.height === r || (a.width = u.imageData.width, a.height = u.imageData.height), h.putImageData(u.imageData, 0, 0), u;
    } };
  }(), v.Image = v.Image || {}, v.Image.filters = v.Image.filters || {}, v.Image.filters.BaseFilter = v.util.createClass({ type: "BaseFilter", vertexSource: `attribute vec2 aPosition;
varying vec2 vTexCoord;
void main() {
vTexCoord = aPosition;
gl_Position = vec4(aPosition * 2.0 - 1.0, 0.0, 1.0);
}`, fragmentSource: `precision highp float;
varying vec2 vTexCoord;
uniform sampler2D uTexture;
void main() {
gl_FragColor = texture2D(uTexture, vTexCoord);
}`, initialize: function(s) {
    s && this.setOptions(s);
  }, setOptions: function(s) {
    for (var o in s) this[o] = s[o];
  }, createProgram: function(s, o, l) {
    o = o || this.fragmentSource, l = l || this.vertexSource, v.webGlPrecision !== "highp" && (o = o.replace(/precision highp float/g, "precision " + v.webGlPrecision + " float"));
    var p = s.createShader(s.VERTEX_SHADER);
    if (s.shaderSource(p, l), s.compileShader(p), !s.getShaderParameter(p, s.COMPILE_STATUS)) throw new Error("Vertex shader compile error for " + this.type + ": " + s.getShaderInfoLog(p));
    var n = s.createShader(s.FRAGMENT_SHADER);
    if (s.shaderSource(n, o), s.compileShader(n), !s.getShaderParameter(n, s.COMPILE_STATUS)) throw new Error("Fragment shader compile error for " + this.type + ": " + s.getShaderInfoLog(n));
    var r = s.createProgram();
    if (s.attachShader(r, p), s.attachShader(r, n), s.linkProgram(r), !s.getProgramParameter(r, s.LINK_STATUS)) throw new Error('Shader link error for "${this.type}" ' + s.getProgramInfoLog(r));
    var a = this.getAttributeLocations(s, r), h = this.getUniformLocations(s, r) || {};
    return h.uStepW = s.getUniformLocation(r, "uStepW"), h.uStepH = s.getUniformLocation(r, "uStepH"), { program: r, attributeLocations: a, uniformLocations: h };
  }, getAttributeLocations: function(s, o) {
    return { aPosition: s.getAttribLocation(o, "aPosition") };
  }, getUniformLocations: function() {
    return {};
  }, sendAttributeData: function(s, o, l) {
    var p = o.aPosition, n = s.createBuffer();
    s.bindBuffer(s.ARRAY_BUFFER, n), s.enableVertexAttribArray(p), s.vertexAttribPointer(p, 2, s.FLOAT, !1, 0, 0), s.bufferData(s.ARRAY_BUFFER, l, s.STATIC_DRAW);
  }, _setupFrameBuffer: function(s) {
    var o, l, p = s.context;
    s.passes > 1 ? (o = s.destinationWidth, l = s.destinationHeight, s.sourceWidth === o && s.sourceHeight === l || (p.deleteTexture(s.targetTexture), s.targetTexture = s.filterBackend.createTexture(p, o, l)), p.framebufferTexture2D(p.FRAMEBUFFER, p.COLOR_ATTACHMENT0, p.TEXTURE_2D, s.targetTexture, 0)) : (p.bindFramebuffer(p.FRAMEBUFFER, null), p.finish());
  }, _swapTextures: function(s) {
    s.passes--, s.pass++;
    var o = s.targetTexture;
    s.targetTexture = s.sourceTexture, s.sourceTexture = o;
  }, isNeutralState: function() {
    var s = this.mainParameter, o = v.Image.filters[this.type].prototype;
    if (s) {
      if (Array.isArray(o[s])) {
        for (var l = o[s].length; l--; ) if (this[s][l] !== o[s][l]) return !1;
        return !0;
      }
      return o[s] === this[s];
    }
    return !1;
  }, applyTo: function(s) {
    s.webgl ? (this._setupFrameBuffer(s), this.applyToWebGL(s), this._swapTextures(s)) : this.applyTo2d(s);
  }, retrieveShader: function(s) {
    return s.programCache.hasOwnProperty(this.type) || (s.programCache[this.type] = this.createProgram(s.context)), s.programCache[this.type];
  }, applyToWebGL: function(s) {
    var o = s.context, l = this.retrieveShader(s);
    s.pass === 0 && s.originalTexture ? o.bindTexture(o.TEXTURE_2D, s.originalTexture) : o.bindTexture(o.TEXTURE_2D, s.sourceTexture), o.useProgram(l.program), this.sendAttributeData(o, l.attributeLocations, s.aPosition), o.uniform1f(l.uniformLocations.uStepW, 1 / s.sourceWidth), o.uniform1f(l.uniformLocations.uStepH, 1 / s.sourceHeight), this.sendUniformData(o, l.uniformLocations), o.viewport(0, 0, s.destinationWidth, s.destinationHeight), o.drawArrays(o.TRIANGLE_STRIP, 0, 4);
  }, bindAdditionalTexture: function(s, o, l) {
    s.activeTexture(l), s.bindTexture(s.TEXTURE_2D, o), s.activeTexture(s.TEXTURE0);
  }, unbindAdditionalTexture: function(s, o) {
    s.activeTexture(o), s.bindTexture(s.TEXTURE_2D, null), s.activeTexture(s.TEXTURE0);
  }, getMainParameter: function() {
    return this[this.mainParameter];
  }, setMainParameter: function(s) {
    this[this.mainParameter] = s;
  }, sendUniformData: function() {
  }, createHelpLayer: function(s) {
    if (!s.helpLayer) {
      var o = document.createElement("canvas");
      o.width = s.sourceWidth, o.height = s.sourceHeight, s.helpLayer = o;
    }
  }, toObject: function() {
    var s = { type: this.type }, o = this.mainParameter;
    return o && (s[o] = this[o]), s;
  }, toJSON: function() {
    return this.toObject();
  } }), v.Image.filters.BaseFilter.fromObject = function(s, o) {
    var l = new v.Image.filters[s.type](s);
    return o && o(l), l;
  }, function(s) {
    var o = s.fabric || (s.fabric = {}), l = o.Image.filters, p = o.util.createClass;
    l.ColorMatrix = p(l.BaseFilter, { type: "ColorMatrix", fragmentSource: `precision highp float;
uniform sampler2D uTexture;
varying vec2 vTexCoord;
uniform mat4 uColorMatrix;
uniform vec4 uConstants;
void main() {
vec4 color = texture2D(uTexture, vTexCoord);
color *= uColorMatrix;
color += uConstants;
gl_FragColor = color;
}`, matrix: [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0], mainParameter: "matrix", colorsOnly: !0, initialize: function(n) {
      this.callSuper("initialize", n), this.matrix = this.matrix.slice(0);
    }, applyTo2d: function(n) {
      var r, a, h, u, d, g = n.imageData.data, y = g.length, x = this.matrix, C = this.colorsOnly;
      for (d = 0; d < y; d += 4) r = g[d], a = g[d + 1], h = g[d + 2], C ? (g[d] = r * x[0] + a * x[1] + h * x[2] + 255 * x[4], g[d + 1] = r * x[5] + a * x[6] + h * x[7] + 255 * x[9], g[d + 2] = r * x[10] + a * x[11] + h * x[12] + 255 * x[14]) : (u = g[d + 3], g[d] = r * x[0] + a * x[1] + h * x[2] + u * x[3] + 255 * x[4], g[d + 1] = r * x[5] + a * x[6] + h * x[7] + u * x[8] + 255 * x[9], g[d + 2] = r * x[10] + a * x[11] + h * x[12] + u * x[13] + 255 * x[14], g[d + 3] = r * x[15] + a * x[16] + h * x[17] + u * x[18] + 255 * x[19]);
    }, getUniformLocations: function(n, r) {
      return { uColorMatrix: n.getUniformLocation(r, "uColorMatrix"), uConstants: n.getUniformLocation(r, "uConstants") };
    }, sendUniformData: function(n, r) {
      var a = this.matrix, h = [a[0], a[1], a[2], a[3], a[5], a[6], a[7], a[8], a[10], a[11], a[12], a[13], a[15], a[16], a[17], a[18]], u = [a[4], a[9], a[14], a[19]];
      n.uniformMatrix4fv(r.uColorMatrix, !1, h), n.uniform4fv(r.uConstants, u);
    } }), o.Image.filters.ColorMatrix.fromObject = o.Image.filters.BaseFilter.fromObject;
  }(e), function(s) {
    var o = s.fabric || (s.fabric = {}), l = o.Image.filters, p = o.util.createClass;
    l.Brightness = p(l.BaseFilter, { type: "Brightness", fragmentSource: `precision highp float;
uniform sampler2D uTexture;
uniform float uBrightness;
varying vec2 vTexCoord;
void main() {
vec4 color = texture2D(uTexture, vTexCoord);
color.rgb += uBrightness;
gl_FragColor = color;
}`, brightness: 0, mainParameter: "brightness", applyTo2d: function(n) {
      if (this.brightness !== 0) {
        var r, a = n.imageData.data, h = a.length, u = Math.round(255 * this.brightness);
        for (r = 0; r < h; r += 4) a[r] = a[r] + u, a[r + 1] = a[r + 1] + u, a[r + 2] = a[r + 2] + u;
      }
    }, getUniformLocations: function(n, r) {
      return { uBrightness: n.getUniformLocation(r, "uBrightness") };
    }, sendUniformData: function(n, r) {
      n.uniform1f(r.uBrightness, this.brightness);
    } }), o.Image.filters.Brightness.fromObject = o.Image.filters.BaseFilter.fromObject;
  }(e), function(s) {
    var o = s.fabric || (s.fabric = {}), l = o.util.object.extend, p = o.Image.filters, n = o.util.createClass;
    p.Convolute = n(p.BaseFilter, { type: "Convolute", opaque: !1, matrix: [0, 0, 0, 0, 1, 0, 0, 0, 0], fragmentSource: { Convolute_3_1: `precision highp float;
uniform sampler2D uTexture;
uniform float uMatrix[9];
uniform float uStepW;
uniform float uStepH;
varying vec2 vTexCoord;
void main() {
vec4 color = vec4(0, 0, 0, 0);
for (float h = 0.0; h < 3.0; h+=1.0) {
for (float w = 0.0; w < 3.0; w+=1.0) {
vec2 matrixPos = vec2(uStepW * (w - 1), uStepH * (h - 1));
color += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 3.0 + w)];
}
}
gl_FragColor = color;
}`, Convolute_3_0: `precision highp float;
uniform sampler2D uTexture;
uniform float uMatrix[9];
uniform float uStepW;
uniform float uStepH;
varying vec2 vTexCoord;
void main() {
vec4 color = vec4(0, 0, 0, 1);
for (float h = 0.0; h < 3.0; h+=1.0) {
for (float w = 0.0; w < 3.0; w+=1.0) {
vec2 matrixPos = vec2(uStepW * (w - 1.0), uStepH * (h - 1.0));
color.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 3.0 + w)];
}
}
float alpha = texture2D(uTexture, vTexCoord).a;
gl_FragColor = color;
gl_FragColor.a = alpha;
}`, Convolute_5_1: `precision highp float;
uniform sampler2D uTexture;
uniform float uMatrix[25];
uniform float uStepW;
uniform float uStepH;
varying vec2 vTexCoord;
void main() {
vec4 color = vec4(0, 0, 0, 0);
for (float h = 0.0; h < 5.0; h+=1.0) {
for (float w = 0.0; w < 5.0; w+=1.0) {
vec2 matrixPos = vec2(uStepW * (w - 2.0), uStepH * (h - 2.0));
color += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 5.0 + w)];
}
}
gl_FragColor = color;
}`, Convolute_5_0: `precision highp float;
uniform sampler2D uTexture;
uniform float uMatrix[25];
uniform float uStepW;
uniform float uStepH;
varying vec2 vTexCoord;
void main() {
vec4 color = vec4(0, 0, 0, 1);
for (float h = 0.0; h < 5.0; h+=1.0) {
for (float w = 0.0; w < 5.0; w+=1.0) {
vec2 matrixPos = vec2(uStepW * (w - 2.0), uStepH * (h - 2.0));
color.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 5.0 + w)];
}
}
float alpha = texture2D(uTexture, vTexCoord).a;
gl_FragColor = color;
gl_FragColor.a = alpha;
}`, Convolute_7_1: `precision highp float;
uniform sampler2D uTexture;
uniform float uMatrix[49];
uniform float uStepW;
uniform float uStepH;
varying vec2 vTexCoord;
void main() {
vec4 color = vec4(0, 0, 0, 0);
for (float h = 0.0; h < 7.0; h+=1.0) {
for (float w = 0.0; w < 7.0; w+=1.0) {
vec2 matrixPos = vec2(uStepW * (w - 3.0), uStepH * (h - 3.0));
color += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 7.0 + w)];
}
}
gl_FragColor = color;
}`, Convolute_7_0: `precision highp float;
uniform sampler2D uTexture;
uniform float uMatrix[49];
uniform float uStepW;
uniform float uStepH;
varying vec2 vTexCoord;
void main() {
vec4 color = vec4(0, 0, 0, 1);
for (float h = 0.0; h < 7.0; h+=1.0) {
for (float w = 0.0; w < 7.0; w+=1.0) {
vec2 matrixPos = vec2(uStepW * (w - 3.0), uStepH * (h - 3.0));
color.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 7.0 + w)];
}
}
float alpha = texture2D(uTexture, vTexCoord).a;
gl_FragColor = color;
gl_FragColor.a = alpha;
}`, Convolute_9_1: `precision highp float;
uniform sampler2D uTexture;
uniform float uMatrix[81];
uniform float uStepW;
uniform float uStepH;
varying vec2 vTexCoord;
void main() {
vec4 color = vec4(0, 0, 0, 0);
for (float h = 0.0; h < 9.0; h+=1.0) {
for (float w = 0.0; w < 9.0; w+=1.0) {
vec2 matrixPos = vec2(uStepW * (w - 4.0), uStepH * (h - 4.0));
color += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 9.0 + w)];
}
}
gl_FragColor = color;
}`, Convolute_9_0: `precision highp float;
uniform sampler2D uTexture;
uniform float uMatrix[81];
uniform float uStepW;
uniform float uStepH;
varying vec2 vTexCoord;
void main() {
vec4 color = vec4(0, 0, 0, 1);
for (float h = 0.0; h < 9.0; h+=1.0) {
for (float w = 0.0; w < 9.0; w+=1.0) {
vec2 matrixPos = vec2(uStepW * (w - 4.0), uStepH * (h - 4.0));
color.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 9.0 + w)];
}
}
float alpha = texture2D(uTexture, vTexCoord).a;
gl_FragColor = color;
gl_FragColor.a = alpha;
}` }, retrieveShader: function(r) {
      var a = Math.sqrt(this.matrix.length), h = this.type + "_" + a + "_" + (this.opaque ? 1 : 0), u = this.fragmentSource[h];
      return r.programCache.hasOwnProperty(h) || (r.programCache[h] = this.createProgram(r.context, u)), r.programCache[h];
    }, applyTo2d: function(r) {
      var a, h, u, d, g, y, x, C, b, M, P, _, k, L = r.imageData, H = L.data, W = this.matrix, A = Math.round(Math.sqrt(W.length)), T = Math.floor(A / 2), D = L.width, X = L.height, $ = r.ctx.createImageData(D, X), B = $.data, j = this.opaque ? 1 : 0;
      for (P = 0; P < X; P++) for (M = 0; M < D; M++) {
        for (g = 4 * (P * D + M), a = 0, h = 0, u = 0, d = 0, k = 0; k < A; k++) for (_ = 0; _ < A; _++) y = M + _ - T, (x = P + k - T) < 0 || x >= X || y < 0 || y >= D || (C = 4 * (x * D + y), b = W[k * A + _], a += H[C] * b, h += H[C + 1] * b, u += H[C + 2] * b, j || (d += H[C + 3] * b));
        B[g] = a, B[g + 1] = h, B[g + 2] = u, B[g + 3] = j ? H[g + 3] : d;
      }
      r.imageData = $;
    }, getUniformLocations: function(r, a) {
      return { uMatrix: r.getUniformLocation(a, "uMatrix"), uOpaque: r.getUniformLocation(a, "uOpaque"), uHalfSize: r.getUniformLocation(a, "uHalfSize"), uSize: r.getUniformLocation(a, "uSize") };
    }, sendUniformData: function(r, a) {
      r.uniform1fv(a.uMatrix, this.matrix);
    }, toObject: function() {
      return l(this.callSuper("toObject"), { opaque: this.opaque, matrix: this.matrix });
    } }), o.Image.filters.Convolute.fromObject = o.Image.filters.BaseFilter.fromObject;
  }(e), function(s) {
    var o = s.fabric || (s.fabric = {}), l = o.Image.filters, p = o.util.createClass;
    l.Grayscale = p(l.BaseFilter, { type: "Grayscale", fragmentSource: { average: `precision highp float;
uniform sampler2D uTexture;
varying vec2 vTexCoord;
void main() {
vec4 color = texture2D(uTexture, vTexCoord);
float average = (color.r + color.b + color.g) / 3.0;
gl_FragColor = vec4(average, average, average, color.a);
}`, lightness: `precision highp float;
uniform sampler2D uTexture;
uniform int uMode;
varying vec2 vTexCoord;
void main() {
vec4 col = texture2D(uTexture, vTexCoord);
float average = (max(max(col.r, col.g),col.b) + min(min(col.r, col.g),col.b)) / 2.0;
gl_FragColor = vec4(average, average, average, col.a);
}`, luminosity: `precision highp float;
uniform sampler2D uTexture;
uniform int uMode;
varying vec2 vTexCoord;
void main() {
vec4 col = texture2D(uTexture, vTexCoord);
float average = 0.21 * col.r + 0.72 * col.g + 0.07 * col.b;
gl_FragColor = vec4(average, average, average, col.a);
}` }, mode: "average", mainParameter: "mode", applyTo2d: function(n) {
      var r, a, h = n.imageData.data, u = h.length, d = this.mode;
      for (r = 0; r < u; r += 4) d === "average" ? a = (h[r] + h[r + 1] + h[r + 2]) / 3 : d === "lightness" ? a = (Math.min(h[r], h[r + 1], h[r + 2]) + Math.max(h[r], h[r + 1], h[r + 2])) / 2 : d === "luminosity" && (a = 0.21 * h[r] + 0.72 * h[r + 1] + 0.07 * h[r + 2]), h[r] = a, h[r + 1] = a, h[r + 2] = a;
    }, retrieveShader: function(n) {
      var r = this.type + "_" + this.mode;
      if (!n.programCache.hasOwnProperty(r)) {
        var a = this.fragmentSource[this.mode];
        n.programCache[r] = this.createProgram(n.context, a);
      }
      return n.programCache[r];
    }, getUniformLocations: function(n, r) {
      return { uMode: n.getUniformLocation(r, "uMode") };
    }, sendUniformData: function(n, r) {
      n.uniform1i(r.uMode, 1);
    }, isNeutralState: function() {
      return !1;
    } }), o.Image.filters.Grayscale.fromObject = o.Image.filters.BaseFilter.fromObject;
  }(e), function(s) {
    var o = s.fabric || (s.fabric = {}), l = o.Image.filters, p = o.util.createClass;
    l.Invert = p(l.BaseFilter, { type: "Invert", fragmentSource: `precision highp float;
uniform sampler2D uTexture;
uniform int uInvert;
varying vec2 vTexCoord;
void main() {
vec4 color = texture2D(uTexture, vTexCoord);
if (uInvert == 1) {
gl_FragColor = vec4(1.0 - color.r,1.0 -color.g,1.0 -color.b,color.a);
} else {
gl_FragColor = color;
}
}`, invert: !0, mainParameter: "invert", applyTo2d: function(n) {
      var r, a = n.imageData.data, h = a.length;
      for (r = 0; r < h; r += 4) a[r] = 255 - a[r], a[r + 1] = 255 - a[r + 1], a[r + 2] = 255 - a[r + 2];
    }, isNeutralState: function() {
      return !this.invert;
    }, getUniformLocations: function(n, r) {
      return { uInvert: n.getUniformLocation(r, "uInvert") };
    }, sendUniformData: function(n, r) {
      n.uniform1i(r.uInvert, this.invert);
    } }), o.Image.filters.Invert.fromObject = o.Image.filters.BaseFilter.fromObject;
  }(e), function(s) {
    var o = s.fabric || (s.fabric = {}), l = o.util.object.extend, p = o.Image.filters, n = o.util.createClass;
    p.Noise = n(p.BaseFilter, { type: "Noise", fragmentSource: `precision highp float;
uniform sampler2D uTexture;
uniform float uStepH;
uniform float uNoise;
uniform float uSeed;
varying vec2 vTexCoord;
float rand(vec2 co, float seed, float vScale) {
return fract(sin(dot(co.xy * vScale ,vec2(12.9898 , 78.233))) * 43758.5453 * (seed + 0.01) / 2.0);
}
void main() {
vec4 color = texture2D(uTexture, vTexCoord);
color.rgb += (0.5 - rand(vTexCoord, uSeed, 0.1 / uStepH)) * uNoise;
gl_FragColor = color;
}`, mainParameter: "noise", noise: 0, applyTo2d: function(r) {
      if (this.noise !== 0) {
        var a, h, u = r.imageData.data, d = u.length, g = this.noise;
        for (a = 0, d = u.length; a < d; a += 4) h = (0.5 - Math.random()) * g, u[a] += h, u[a + 1] += h, u[a + 2] += h;
      }
    }, getUniformLocations: function(r, a) {
      return { uNoise: r.getUniformLocation(a, "uNoise"), uSeed: r.getUniformLocation(a, "uSeed") };
    }, sendUniformData: function(r, a) {
      r.uniform1f(a.uNoise, this.noise / 255), r.uniform1f(a.uSeed, Math.random());
    }, toObject: function() {
      return l(this.callSuper("toObject"), { noise: this.noise });
    } }), o.Image.filters.Noise.fromObject = o.Image.filters.BaseFilter.fromObject;
  }(e), function(s) {
    var o = s.fabric || (s.fabric = {}), l = o.Image.filters, p = o.util.createClass;
    l.Pixelate = p(l.BaseFilter, { type: "Pixelate", blocksize: 4, mainParameter: "blocksize", fragmentSource: `precision highp float;
uniform sampler2D uTexture;
uniform float uBlocksize;
uniform float uStepW;
uniform float uStepH;
varying vec2 vTexCoord;
void main() {
float blockW = uBlocksize * uStepW;
float blockH = uBlocksize * uStepW;
int posX = int(vTexCoord.x / blockW);
int posY = int(vTexCoord.y / blockH);
float fposX = float(posX);
float fposY = float(posY);
vec2 squareCoords = vec2(fposX * blockW, fposY * blockH);
vec4 color = texture2D(uTexture, squareCoords);
gl_FragColor = color;
}`, applyTo2d: function(n) {
      var r, a, h, u, d, g, y, x, C, b, M, P = n.imageData, _ = P.data, k = P.height, L = P.width;
      for (a = 0; a < k; a += this.blocksize) for (h = 0; h < L; h += this.blocksize) for (u = _[r = 4 * a * L + 4 * h], d = _[r + 1], g = _[r + 2], y = _[r + 3], b = Math.min(a + this.blocksize, k), M = Math.min(h + this.blocksize, L), x = a; x < b; x++) for (C = h; C < M; C++) _[r = 4 * x * L + 4 * C] = u, _[r + 1] = d, _[r + 2] = g, _[r + 3] = y;
    }, isNeutralState: function() {
      return this.blocksize === 1;
    }, getUniformLocations: function(n, r) {
      return { uBlocksize: n.getUniformLocation(r, "uBlocksize"), uStepW: n.getUniformLocation(r, "uStepW"), uStepH: n.getUniformLocation(r, "uStepH") };
    }, sendUniformData: function(n, r) {
      n.uniform1f(r.uBlocksize, this.blocksize);
    } }), o.Image.filters.Pixelate.fromObject = o.Image.filters.BaseFilter.fromObject;
  }(e), function(s) {
    var o = s.fabric || (s.fabric = {}), l = o.util.object.extend, p = o.Image.filters, n = o.util.createClass;
    p.RemoveColor = n(p.BaseFilter, { type: "RemoveColor", color: "#FFFFFF", fragmentSource: `precision highp float;
uniform sampler2D uTexture;
uniform vec4 uLow;
uniform vec4 uHigh;
varying vec2 vTexCoord;
void main() {
gl_FragColor = texture2D(uTexture, vTexCoord);
if(all(greaterThan(gl_FragColor.rgb,uLow.rgb)) && all(greaterThan(uHigh.rgb,gl_FragColor.rgb))) {
gl_FragColor.a = 0.0;
}
}`, distance: 0.02, useAlpha: !1, applyTo2d: function(r) {
      var a, h, u, d, g = r.imageData.data, y = 255 * this.distance, x = new o.Color(this.color).getSource(), C = [x[0] - y, x[1] - y, x[2] - y], b = [x[0] + y, x[1] + y, x[2] + y];
      for (a = 0; a < g.length; a += 4) h = g[a], u = g[a + 1], d = g[a + 2], h > C[0] && u > C[1] && d > C[2] && h < b[0] && u < b[1] && d < b[2] && (g[a + 3] = 0);
    }, getUniformLocations: function(r, a) {
      return { uLow: r.getUniformLocation(a, "uLow"), uHigh: r.getUniformLocation(a, "uHigh") };
    }, sendUniformData: function(r, a) {
      var h = new o.Color(this.color).getSource(), u = parseFloat(this.distance), d = [0 + h[0] / 255 - u, 0 + h[1] / 255 - u, 0 + h[2] / 255 - u, 1], g = [h[0] / 255 + u, h[1] / 255 + u, h[2] / 255 + u, 1];
      r.uniform4fv(a.uLow, d), r.uniform4fv(a.uHigh, g);
    }, toObject: function() {
      return l(this.callSuper("toObject"), { color: this.color, distance: this.distance });
    } }), o.Image.filters.RemoveColor.fromObject = o.Image.filters.BaseFilter.fromObject;
  }(e), function(s) {
    var o = s.fabric || (s.fabric = {}), l = o.Image.filters, p = o.util.createClass, n = { Brownie: [0.5997, 0.34553, -0.27082, 0, 0.186, -0.0377, 0.86095, 0.15059, 0, -0.1449, 0.24113, -0.07441, 0.44972, 0, -0.02965, 0, 0, 0, 1, 0], Vintage: [0.62793, 0.32021, -0.03965, 0, 0.03784, 0.02578, 0.64411, 0.03259, 0, 0.02926, 0.0466, -0.08512, 0.52416, 0, 0.02023, 0, 0, 0, 1, 0], Kodachrome: [1.12855, -0.39673, -0.03992, 0, 0.24991, -0.16404, 1.08352, -0.05498, 0, 0.09698, -0.16786, -0.56034, 1.60148, 0, 0.13972, 0, 0, 0, 1, 0], Technicolor: [1.91252, -0.85453, -0.09155, 0, 0.04624, -0.30878, 1.76589, -0.10601, 0, -0.27589, -0.2311, -0.75018, 1.84759, 0, 0.12137, 0, 0, 0, 1, 0], Polaroid: [1.438, -0.062, -0.062, 0, 0, -0.122, 1.378, -0.122, 0, 0, -0.016, -0.016, 1.483, 0, 0, 0, 0, 0, 1, 0], Sepia: [0.393, 0.769, 0.189, 0, 0, 0.349, 0.686, 0.168, 0, 0, 0.272, 0.534, 0.131, 0, 0, 0, 0, 0, 1, 0], BlackWhite: [1.5, 1.5, 1.5, 0, -1, 1.5, 1.5, 1.5, 0, -1, 1.5, 1.5, 1.5, 0, -1, 0, 0, 0, 1, 0] };
    for (var r in n) l[r] = p(l.ColorMatrix, { type: r, matrix: n[r], mainParameter: !1, colorsOnly: !0 }), o.Image.filters[r].fromObject = o.Image.filters.BaseFilter.fromObject;
  }(e), function(s) {
    var o = s.fabric, l = o.Image.filters, p = o.util.createClass;
    l.BlendColor = p(l.BaseFilter, { type: "BlendColor", color: "#F95C63", mode: "multiply", alpha: 1, fragmentSource: { multiply: `gl_FragColor.rgb *= uColor.rgb;
`, screen: `gl_FragColor.rgb = 1.0 - (1.0 - gl_FragColor.rgb) * (1.0 - uColor.rgb);
`, add: `gl_FragColor.rgb += uColor.rgb;
`, diff: `gl_FragColor.rgb = abs(gl_FragColor.rgb - uColor.rgb);
`, subtract: `gl_FragColor.rgb -= uColor.rgb;
`, lighten: `gl_FragColor.rgb = max(gl_FragColor.rgb, uColor.rgb);
`, darken: `gl_FragColor.rgb = min(gl_FragColor.rgb, uColor.rgb);
`, exclusion: `gl_FragColor.rgb += uColor.rgb - 2.0 * (uColor.rgb * gl_FragColor.rgb);
`, overlay: `if (uColor.r < 0.5) {
gl_FragColor.r *= 2.0 * uColor.r;
} else {
gl_FragColor.r = 1.0 - 2.0 * (1.0 - gl_FragColor.r) * (1.0 - uColor.r);
}
if (uColor.g < 0.5) {
gl_FragColor.g *= 2.0 * uColor.g;
} else {
gl_FragColor.g = 1.0 - 2.0 * (1.0 - gl_FragColor.g) * (1.0 - uColor.g);
}
if (uColor.b < 0.5) {
gl_FragColor.b *= 2.0 * uColor.b;
} else {
gl_FragColor.b = 1.0 - 2.0 * (1.0 - gl_FragColor.b) * (1.0 - uColor.b);
}
`, tint: `gl_FragColor.rgb *= (1.0 - uColor.a);
gl_FragColor.rgb += uColor.rgb;
` }, buildSource: function(n) {
      return `precision highp float;
uniform sampler2D uTexture;
uniform vec4 uColor;
varying vec2 vTexCoord;
void main() {
vec4 color = texture2D(uTexture, vTexCoord);
gl_FragColor = color;
if (color.a > 0.0) {
` + this.fragmentSource[n] + `}
}`;
    }, retrieveShader: function(n) {
      var r, a = this.type + "_" + this.mode;
      return n.programCache.hasOwnProperty(a) || (r = this.buildSource(this.mode), n.programCache[a] = this.createProgram(n.context, r)), n.programCache[a];
    }, applyTo2d: function(n) {
      var r, a, h, u, d, g, y, x = n.imageData.data, C = x.length, b = 1 - this.alpha;
      r = (y = new o.Color(this.color).getSource())[0] * this.alpha, a = y[1] * this.alpha, h = y[2] * this.alpha;
      for (var M = 0; M < C; M += 4) switch (u = x[M], d = x[M + 1], g = x[M + 2], this.mode) {
        case "multiply":
          x[M] = u * r / 255, x[M + 1] = d * a / 255, x[M + 2] = g * h / 255;
          break;
        case "screen":
          x[M] = 255 - (255 - u) * (255 - r) / 255, x[M + 1] = 255 - (255 - d) * (255 - a) / 255, x[M + 2] = 255 - (255 - g) * (255 - h) / 255;
          break;
        case "add":
          x[M] = u + r, x[M + 1] = d + a, x[M + 2] = g + h;
          break;
        case "diff":
        case "difference":
          x[M] = Math.abs(u - r), x[M + 1] = Math.abs(d - a), x[M + 2] = Math.abs(g - h);
          break;
        case "subtract":
          x[M] = u - r, x[M + 1] = d - a, x[M + 2] = g - h;
          break;
        case "darken":
          x[M] = Math.min(u, r), x[M + 1] = Math.min(d, a), x[M + 2] = Math.min(g, h);
          break;
        case "lighten":
          x[M] = Math.max(u, r), x[M + 1] = Math.max(d, a), x[M + 2] = Math.max(g, h);
          break;
        case "overlay":
          x[M] = r < 128 ? 2 * u * r / 255 : 255 - 2 * (255 - u) * (255 - r) / 255, x[M + 1] = a < 128 ? 2 * d * a / 255 : 255 - 2 * (255 - d) * (255 - a) / 255, x[M + 2] = h < 128 ? 2 * g * h / 255 : 255 - 2 * (255 - g) * (255 - h) / 255;
          break;
        case "exclusion":
          x[M] = r + u - 2 * r * u / 255, x[M + 1] = a + d - 2 * a * d / 255, x[M + 2] = h + g - 2 * h * g / 255;
          break;
        case "tint":
          x[M] = r + u * b, x[M + 1] = a + d * b, x[M + 2] = h + g * b;
      }
    }, getUniformLocations: function(n, r) {
      return { uColor: n.getUniformLocation(r, "uColor") };
    }, sendUniformData: function(n, r) {
      var a = new o.Color(this.color).getSource();
      a[0] = this.alpha * a[0] / 255, a[1] = this.alpha * a[1] / 255, a[2] = this.alpha * a[2] / 255, a[3] = this.alpha, n.uniform4fv(r.uColor, a);
    }, toObject: function() {
      return { type: this.type, color: this.color, mode: this.mode, alpha: this.alpha };
    } }), o.Image.filters.BlendColor.fromObject = o.Image.filters.BaseFilter.fromObject;
  }(e), function(s) {
    var o = s.fabric, l = o.Image.filters, p = o.util.createClass;
    l.BlendImage = p(l.BaseFilter, { type: "BlendImage", image: null, mode: "multiply", alpha: 1, vertexSource: `attribute vec2 aPosition;
varying vec2 vTexCoord;
varying vec2 vTexCoord2;
uniform mat3 uTransformMatrix;
void main() {
vTexCoord = aPosition;
vTexCoord2 = (uTransformMatrix * vec3(aPosition, 1.0)).xy;
gl_Position = vec4(aPosition * 2.0 - 1.0, 0.0, 1.0);
}`, fragmentSource: { multiply: `precision highp float;
uniform sampler2D uTexture;
uniform sampler2D uImage;
uniform vec4 uColor;
varying vec2 vTexCoord;
varying vec2 vTexCoord2;
void main() {
vec4 color = texture2D(uTexture, vTexCoord);
vec4 color2 = texture2D(uImage, vTexCoord2);
color.rgba *= color2.rgba;
gl_FragColor = color;
}`, mask: `precision highp float;
uniform sampler2D uTexture;
uniform sampler2D uImage;
uniform vec4 uColor;
varying vec2 vTexCoord;
varying vec2 vTexCoord2;
void main() {
vec4 color = texture2D(uTexture, vTexCoord);
vec4 color2 = texture2D(uImage, vTexCoord2);
color.a = color2.a;
gl_FragColor = color;
}` }, retrieveShader: function(n) {
      var r = this.type + "_" + this.mode, a = this.fragmentSource[this.mode];
      return n.programCache.hasOwnProperty(r) || (n.programCache[r] = this.createProgram(n.context, a)), n.programCache[r];
    }, applyToWebGL: function(n) {
      var r = n.context, a = this.createTexture(n.filterBackend, this.image);
      this.bindAdditionalTexture(r, a, r.TEXTURE1), this.callSuper("applyToWebGL", n), this.unbindAdditionalTexture(r, r.TEXTURE1);
    }, createTexture: function(n, r) {
      return n.getCachedTexture(r.cacheKey, r._element);
    }, calculateMatrix: function() {
      var n = this.image, r = n._element.width, a = n._element.height;
      return [1 / n.scaleX, 0, 0, 0, 1 / n.scaleY, 0, -n.left / r, -n.top / a, 1];
    }, applyTo2d: function(n) {
      var r, a, h, u, d, g, y, x, C, b, M, P = n.imageData, _ = n.filterBackend.resources, k = P.data, L = k.length, H = P.width, W = P.height, A = this.image;
      _.blendImage || (_.blendImage = o.util.createCanvasElement()), b = (C = _.blendImage).getContext("2d"), C.width !== H || C.height !== W ? (C.width = H, C.height = W) : b.clearRect(0, 0, H, W), b.setTransform(A.scaleX, 0, 0, A.scaleY, A.left, A.top), b.drawImage(A._element, 0, 0, H, W), M = b.getImageData(0, 0, H, W).data;
      for (var T = 0; T < L; T += 4) switch (d = k[T], g = k[T + 1], y = k[T + 2], x = k[T + 3], r = M[T], a = M[T + 1], h = M[T + 2], u = M[T + 3], this.mode) {
        case "multiply":
          k[T] = d * r / 255, k[T + 1] = g * a / 255, k[T + 2] = y * h / 255, k[T + 3] = x * u / 255;
          break;
        case "mask":
          k[T + 3] = u;
      }
    }, getUniformLocations: function(n, r) {
      return { uTransformMatrix: n.getUniformLocation(r, "uTransformMatrix"), uImage: n.getUniformLocation(r, "uImage") };
    }, sendUniformData: function(n, r) {
      var a = this.calculateMatrix();
      n.uniform1i(r.uImage, 1), n.uniformMatrix3fv(r.uTransformMatrix, !1, a);
    }, toObject: function() {
      return { type: this.type, image: this.image && this.image.toObject(), mode: this.mode, alpha: this.alpha };
    } }), o.Image.filters.BlendImage.fromObject = function(n, r) {
      o.Image.fromObject(n.image, function(a) {
        var h = o.util.object.clone(n);
        h.image = a, r(new o.Image.filters.BlendImage(h));
      });
    };
  }(e), function(s) {
    var o = s.fabric || (s.fabric = {}), l = Math.pow, p = Math.floor, n = Math.sqrt, r = Math.abs, a = Math.round, h = Math.sin, u = Math.ceil, d = o.Image.filters, g = o.util.createClass;
    d.Resize = g(d.BaseFilter, { type: "Resize", resizeType: "hermite", scaleX: 1, scaleY: 1, lanczosLobes: 3, getUniformLocations: function(y, x) {
      return { uDelta: y.getUniformLocation(x, "uDelta"), uTaps: y.getUniformLocation(x, "uTaps") };
    }, sendUniformData: function(y, x) {
      y.uniform2fv(x.uDelta, this.horizontal ? [1 / this.width, 0] : [0, 1 / this.height]), y.uniform1fv(x.uTaps, this.taps);
    }, retrieveShader: function(y) {
      var x = this.getFilterWindow(), C = this.type + "_" + x;
      if (!y.programCache.hasOwnProperty(C)) {
        var b = this.generateShader(x);
        y.programCache[C] = this.createProgram(y.context, b);
      }
      return y.programCache[C];
    }, getFilterWindow: function() {
      var y = this.tempScale;
      return Math.ceil(this.lanczosLobes / y);
    }, getTaps: function() {
      for (var y = this.lanczosCreate(this.lanczosLobes), x = this.tempScale, C = this.getFilterWindow(), b = new Array(C), M = 1; M <= C; M++) b[M - 1] = y(M * x);
      return b;
    }, generateShader: function(y) {
      for (var x = new Array(y), C = this.fragmentSourceTOP, b = 1; b <= y; b++) x[b - 1] = b + ".0 * uDelta";
      return C += "uniform float uTaps[" + y + `];
`, C += `void main() {
`, C += `  vec4 color = texture2D(uTexture, vTexCoord);
`, C += `  float sum = 1.0;
`, x.forEach(function(M, P) {
        C += "  color += texture2D(uTexture, vTexCoord + " + M + ") * uTaps[" + P + `];
`, C += "  color += texture2D(uTexture, vTexCoord - " + M + ") * uTaps[" + P + `];
`, C += "  sum += 2.0 * uTaps[" + P + `];
`;
      }), C += `  gl_FragColor = color / sum;
`, C += "}";
    }, fragmentSourceTOP: `precision highp float;
uniform sampler2D uTexture;
uniform vec2 uDelta;
varying vec2 vTexCoord;
`, applyTo: function(y) {
      y.webgl ? (y.passes++, this.width = y.sourceWidth, this.horizontal = !0, this.dW = Math.round(this.width * this.scaleX), this.dH = y.sourceHeight, this.tempScale = this.dW / this.width, this.taps = this.getTaps(), y.destinationWidth = this.dW, this._setupFrameBuffer(y), this.applyToWebGL(y), this._swapTextures(y), y.sourceWidth = y.destinationWidth, this.height = y.sourceHeight, this.horizontal = !1, this.dH = Math.round(this.height * this.scaleY), this.tempScale = this.dH / this.height, this.taps = this.getTaps(), y.destinationHeight = this.dH, this._setupFrameBuffer(y), this.applyToWebGL(y), this._swapTextures(y), y.sourceHeight = y.destinationHeight) : this.applyTo2d(y);
    }, isNeutralState: function() {
      return this.scaleX === 1 && this.scaleY === 1;
    }, lanczosCreate: function(y) {
      return function(x) {
        if (x >= y || x <= -y) return 0;
        if (x < 11920929e-14 && x > -11920929e-14) return 1;
        var C = (x *= Math.PI) / y;
        return h(x) / x * h(C) / C;
      };
    }, applyTo2d: function(y) {
      var x = y.imageData, C = this.scaleX, b = this.scaleY;
      this.rcpScaleX = 1 / C, this.rcpScaleY = 1 / b;
      var M, P = x.width, _ = x.height, k = a(P * C), L = a(_ * b);
      this.resizeType === "sliceHack" ? M = this.sliceByTwo(y, P, _, k, L) : this.resizeType === "hermite" ? M = this.hermiteFastResize(y, P, _, k, L) : this.resizeType === "bilinear" ? M = this.bilinearFiltering(y, P, _, k, L) : this.resizeType === "lanczos" && (M = this.lanczosResize(y, P, _, k, L)), y.imageData = M;
    }, sliceByTwo: function(y, x, C, b, M) {
      var P, _, k = y.imageData, L = 0.5, H = !1, W = !1, A = x * L, T = C * L, D = o.filterBackend.resources, X = 0, $ = 0, B = x, j = 0;
      for (D.sliceByTwo || (D.sliceByTwo = document.createElement("canvas")), ((P = D.sliceByTwo).width < 1.5 * x || P.height < C) && (P.width = 1.5 * x, P.height = C), (_ = P.getContext("2d")).clearRect(0, 0, 1.5 * x, C), _.putImageData(k, 0, 0), b = p(b), M = p(M); !H || !W; ) x = A, C = T, b < p(A * L) ? A = p(A * L) : (A = b, H = !0), M < p(T * L) ? T = p(T * L) : (T = M, W = !0), _.drawImage(P, X, $, x, C, B, j, A, T), X = B, $ = j, j += T;
      return _.getImageData(X, $, b, M);
    }, lanczosResize: function(y, x, C, b, M) {
      var P = y.imageData.data, _ = y.ctx.createImageData(b, M), k = _.data, L = this.lanczosCreate(this.lanczosLobes), H = this.rcpScaleX, W = this.rcpScaleY, A = 2 / this.rcpScaleX, T = 2 / this.rcpScaleY, D = u(H * this.lanczosLobes / 2), X = u(W * this.lanczosLobes / 2), $ = {}, B = {}, j = {};
      return function Y(I) {
        var U, Q, ie, ee, le, re, se, oe, fe, pe, _e;
        for (B.x = (I + 0.5) * H, j.x = p(B.x), U = 0; U < M; U++) {
          for (B.y = (U + 0.5) * W, j.y = p(B.y), le = 0, re = 0, se = 0, oe = 0, fe = 0, Q = j.x - D; Q <= j.x + D; Q++) if (!(Q < 0 || Q >= x)) {
            pe = p(1e3 * r(Q - B.x)), $[pe] || ($[pe] = {});
            for (var we = j.y - X; we <= j.y + X; we++) we < 0 || we >= C || (_e = p(1e3 * r(we - B.y)), $[pe][_e] || ($[pe][_e] = L(n(l(pe * A, 2) + l(_e * T, 2)) / 1e3)), (ie = $[pe][_e]) > 0 && (le += ie, re += ie * P[ee = 4 * (we * x + Q)], se += ie * P[ee + 1], oe += ie * P[ee + 2], fe += ie * P[ee + 3]));
          }
          k[ee = 4 * (U * b + I)] = re / le, k[ee + 1] = se / le, k[ee + 2] = oe / le, k[ee + 3] = fe / le;
        }
        return ++I < b ? Y(I) : _;
      }(0);
    }, bilinearFiltering: function(y, x, C, b, M) {
      var P, _, k, L, H, W, A, T, D, X = 0, $ = this.rcpScaleX, B = this.rcpScaleY, j = 4 * (x - 1), Y = y.imageData.data, I = y.ctx.createImageData(b, M), U = I.data;
      for (k = 0; k < M; k++) for (L = 0; L < b; L++) for (H = $ * L - (P = p($ * L)), W = B * k - (_ = p(B * k)), D = 4 * (_ * x + P), A = 0; A < 4; A++) T = Y[D + A] * (1 - H) * (1 - W) + Y[D + 4 + A] * H * (1 - W) + Y[D + j + A] * W * (1 - H) + Y[D + j + 4 + A] * H * W, U[X++] = T;
      return I;
    }, hermiteFastResize: function(y, x, C, b, M) {
      for (var P = this.rcpScaleX, _ = this.rcpScaleY, k = u(P / 2), L = u(_ / 2), H = y.imageData.data, W = y.ctx.createImageData(b, M), A = W.data, T = 0; T < M; T++) for (var D = 0; D < b; D++) {
        for (var X = 4 * (D + T * b), $ = 0, B = 0, j = 0, Y = 0, I = 0, U = 0, Q = 0, ie = (T + 0.5) * _, ee = p(T * _); ee < (T + 1) * _; ee++) for (var le = r(ie - (ee + 0.5)) / L, re = (D + 0.5) * P, se = le * le, oe = p(D * P); oe < (D + 1) * P; oe++) {
          var fe = r(re - (oe + 0.5)) / k, pe = n(se + fe * fe);
          pe > 1 && pe < -1 || ($ = 2 * pe * pe * pe - 3 * pe * pe + 1) > 0 && (Q += $ * H[(fe = 4 * (oe + ee * x)) + 3], j += $, H[fe + 3] < 255 && ($ = $ * H[fe + 3] / 250), Y += $ * H[fe], I += $ * H[fe + 1], U += $ * H[fe + 2], B += $);
        }
        A[X] = Y / B, A[X + 1] = I / B, A[X + 2] = U / B, A[X + 3] = Q / j;
      }
      return W;
    }, toObject: function() {
      return { type: this.type, scaleX: this.scaleX, scaleY: this.scaleY, resizeType: this.resizeType, lanczosLobes: this.lanczosLobes };
    } }), o.Image.filters.Resize.fromObject = o.Image.filters.BaseFilter.fromObject;
  }(e), function(s) {
    var o = s.fabric || (s.fabric = {}), l = o.Image.filters, p = o.util.createClass;
    l.Contrast = p(l.BaseFilter, { type: "Contrast", fragmentSource: `precision highp float;
uniform sampler2D uTexture;
uniform float uContrast;
varying vec2 vTexCoord;
void main() {
vec4 color = texture2D(uTexture, vTexCoord);
float contrastF = 1.015 * (uContrast + 1.0) / (1.0 * (1.015 - uContrast));
color.rgb = contrastF * (color.rgb - 0.5) + 0.5;
gl_FragColor = color;
}`, contrast: 0, mainParameter: "contrast", applyTo2d: function(n) {
      if (this.contrast !== 0) {
        var r, a = n.imageData.data, h = a.length, u = Math.floor(255 * this.contrast), d = 259 * (u + 255) / (255 * (259 - u));
        for (r = 0; r < h; r += 4) a[r] = d * (a[r] - 128) + 128, a[r + 1] = d * (a[r + 1] - 128) + 128, a[r + 2] = d * (a[r + 2] - 128) + 128;
      }
    }, getUniformLocations: function(n, r) {
      return { uContrast: n.getUniformLocation(r, "uContrast") };
    }, sendUniformData: function(n, r) {
      n.uniform1f(r.uContrast, this.contrast);
    } }), o.Image.filters.Contrast.fromObject = o.Image.filters.BaseFilter.fromObject;
  }(e), function(s) {
    var o = s.fabric || (s.fabric = {}), l = o.Image.filters, p = o.util.createClass;
    l.Saturation = p(l.BaseFilter, { type: "Saturation", fragmentSource: `precision highp float;
uniform sampler2D uTexture;
uniform float uSaturation;
varying vec2 vTexCoord;
void main() {
vec4 color = texture2D(uTexture, vTexCoord);
float rgMax = max(color.r, color.g);
float rgbMax = max(rgMax, color.b);
color.r += rgbMax != color.r ? (rgbMax - color.r) * uSaturation : 0.00;
color.g += rgbMax != color.g ? (rgbMax - color.g) * uSaturation : 0.00;
color.b += rgbMax != color.b ? (rgbMax - color.b) * uSaturation : 0.00;
gl_FragColor = color;
}`, saturation: 0, mainParameter: "saturation", applyTo2d: function(n) {
      if (this.saturation !== 0) {
        var r, a, h = n.imageData.data, u = h.length, d = -this.saturation;
        for (r = 0; r < u; r += 4) a = Math.max(h[r], h[r + 1], h[r + 2]), h[r] += a !== h[r] ? (a - h[r]) * d : 0, h[r + 1] += a !== h[r + 1] ? (a - h[r + 1]) * d : 0, h[r + 2] += a !== h[r + 2] ? (a - h[r + 2]) * d : 0;
      }
    }, getUniformLocations: function(n, r) {
      return { uSaturation: n.getUniformLocation(r, "uSaturation") };
    }, sendUniformData: function(n, r) {
      n.uniform1f(r.uSaturation, -this.saturation);
    } }), o.Image.filters.Saturation.fromObject = o.Image.filters.BaseFilter.fromObject;
  }(e), function(s) {
    var o = s.fabric || (s.fabric = {}), l = o.Image.filters, p = o.util.createClass;
    l.Vibrance = p(l.BaseFilter, { type: "Vibrance", fragmentSource: `precision highp float;
uniform sampler2D uTexture;
uniform float uVibrance;
varying vec2 vTexCoord;
void main() {
vec4 color = texture2D(uTexture, vTexCoord);
float max = max(color.r, max(color.g, color.b));
float avg = (color.r + color.g + color.b) / 3.0;
float amt = (abs(max - avg) * 2.0) * uVibrance;
color.r += max != color.r ? (max - color.r) * amt : 0.00;
color.g += max != color.g ? (max - color.g) * amt : 0.00;
color.b += max != color.b ? (max - color.b) * amt : 0.00;
gl_FragColor = color;
}`, vibrance: 0, mainParameter: "vibrance", applyTo2d: function(n) {
      if (this.vibrance !== 0) {
        var r, a, h, u, d = n.imageData.data, g = d.length, y = -this.vibrance;
        for (r = 0; r < g; r += 4) a = Math.max(d[r], d[r + 1], d[r + 2]), h = (d[r] + d[r + 1] + d[r + 2]) / 3, u = 2 * Math.abs(a - h) / 255 * y, d[r] += a !== d[r] ? (a - d[r]) * u : 0, d[r + 1] += a !== d[r + 1] ? (a - d[r + 1]) * u : 0, d[r + 2] += a !== d[r + 2] ? (a - d[r + 2]) * u : 0;
      }
    }, getUniformLocations: function(n, r) {
      return { uVibrance: n.getUniformLocation(r, "uVibrance") };
    }, sendUniformData: function(n, r) {
      n.uniform1f(r.uVibrance, -this.vibrance);
    } }), o.Image.filters.Vibrance.fromObject = o.Image.filters.BaseFilter.fromObject;
  }(e), function(s) {
    var o = s.fabric || (s.fabric = {}), l = o.Image.filters, p = o.util.createClass;
    l.Blur = p(l.BaseFilter, { type: "Blur", fragmentSource: `precision highp float;
uniform sampler2D uTexture;
uniform vec2 uDelta;
varying vec2 vTexCoord;
const float nSamples = 15.0;
vec3 v3offset = vec3(12.9898, 78.233, 151.7182);
float random(vec3 scale) {
return fract(sin(dot(gl_FragCoord.xyz, scale)) * 43758.5453);
}
void main() {
vec4 color = vec4(0.0);
float total = 0.0;
float offset = random(v3offset);
for (float t = -nSamples; t <= nSamples; t++) {
float percent = (t + offset - 0.5) / nSamples;
float weight = 1.0 - abs(percent);
color += texture2D(uTexture, vTexCoord + uDelta * percent) * weight;
total += weight;
}
gl_FragColor = color / total;
}`, blur: 0, mainParameter: "blur", applyTo: function(n) {
      n.webgl ? (this.aspectRatio = n.sourceWidth / n.sourceHeight, n.passes++, this._setupFrameBuffer(n), this.horizontal = !0, this.applyToWebGL(n), this._swapTextures(n), this._setupFrameBuffer(n), this.horizontal = !1, this.applyToWebGL(n), this._swapTextures(n)) : this.applyTo2d(n);
    }, applyTo2d: function(n) {
      n.imageData = this.simpleBlur(n);
    }, simpleBlur: function(n) {
      var r, a, h = n.filterBackend.resources, u = n.imageData.width, d = n.imageData.height;
      h.blurLayer1 || (h.blurLayer1 = o.util.createCanvasElement(), h.blurLayer2 = o.util.createCanvasElement()), r = h.blurLayer1, a = h.blurLayer2, r.width === u && r.height === d || (a.width = r.width = u, a.height = r.height = d);
      var g, y, x, C, b = r.getContext("2d"), M = a.getContext("2d"), P = 15, _ = 0.06 * this.blur * 0.5;
      for (b.putImageData(n.imageData, 0, 0), M.clearRect(0, 0, u, d), C = -15; C <= P; C++) x = _ * (y = C / P) * u + (g = (Math.random() - 0.5) / 4), M.globalAlpha = 1 - Math.abs(y), M.drawImage(r, x, g), b.drawImage(a, 0, 0), M.globalAlpha = 1, M.clearRect(0, 0, a.width, a.height);
      for (C = -15; C <= P; C++) x = _ * (y = C / P) * d + (g = (Math.random() - 0.5) / 4), M.globalAlpha = 1 - Math.abs(y), M.drawImage(r, g, x), b.drawImage(a, 0, 0), M.globalAlpha = 1, M.clearRect(0, 0, a.width, a.height);
      n.ctx.drawImage(r, 0, 0);
      var k = n.ctx.getImageData(0, 0, r.width, r.height);
      return b.globalAlpha = 1, b.clearRect(0, 0, r.width, r.height), k;
    }, getUniformLocations: function(n, r) {
      return { delta: n.getUniformLocation(r, "uDelta") };
    }, sendUniformData: function(n, r) {
      var a = this.chooseRightDelta();
      n.uniform2fv(r.delta, a);
    }, chooseRightDelta: function() {
      var n, r = 1, a = [0, 0];
      return this.horizontal ? this.aspectRatio > 1 && (r = 1 / this.aspectRatio) : this.aspectRatio < 1 && (r = this.aspectRatio), n = r * this.blur * 0.12, this.horizontal ? a[0] = n : a[1] = n, a;
    } }), l.Blur.fromObject = o.Image.filters.BaseFilter.fromObject;
  }(e), function(s) {
    var o = s.fabric || (s.fabric = {}), l = o.Image.filters, p = o.util.createClass;
    l.Gamma = p(l.BaseFilter, { type: "Gamma", fragmentSource: `precision highp float;
uniform sampler2D uTexture;
uniform vec3 uGamma;
varying vec2 vTexCoord;
void main() {
vec4 color = texture2D(uTexture, vTexCoord);
vec3 correction = (1.0 / uGamma);
color.r = pow(color.r, correction.r);
color.g = pow(color.g, correction.g);
color.b = pow(color.b, correction.b);
gl_FragColor = color;
gl_FragColor.rgb *= color.a;
}`, gamma: [1, 1, 1], mainParameter: "gamma", initialize: function(n) {
      this.gamma = [1, 1, 1], l.BaseFilter.prototype.initialize.call(this, n);
    }, applyTo2d: function(n) {
      var r, a = n.imageData.data, h = this.gamma, u = a.length, d = 1 / h[0], g = 1 / h[1], y = 1 / h[2];
      for (this.rVals || (this.rVals = new Uint8Array(256), this.gVals = new Uint8Array(256), this.bVals = new Uint8Array(256)), r = 0, u = 256; r < u; r++) this.rVals[r] = 255 * Math.pow(r / 255, d), this.gVals[r] = 255 * Math.pow(r / 255, g), this.bVals[r] = 255 * Math.pow(r / 255, y);
      for (r = 0, u = a.length; r < u; r += 4) a[r] = this.rVals[a[r]], a[r + 1] = this.gVals[a[r + 1]], a[r + 2] = this.bVals[a[r + 2]];
    }, getUniformLocations: function(n, r) {
      return { uGamma: n.getUniformLocation(r, "uGamma") };
    }, sendUniformData: function(n, r) {
      n.uniform3fv(r.uGamma, this.gamma);
    } }), o.Image.filters.Gamma.fromObject = o.Image.filters.BaseFilter.fromObject;
  }(e), function(s) {
    var o = s.fabric || (s.fabric = {}), l = o.Image.filters, p = o.util.createClass;
    l.Composed = p(l.BaseFilter, { type: "Composed", subFilters: [], initialize: function(n) {
      this.callSuper("initialize", n), this.subFilters = this.subFilters.slice(0);
    }, applyTo: function(n) {
      n.passes += this.subFilters.length - 1, this.subFilters.forEach(function(r) {
        r.applyTo(n);
      });
    }, toObject: function() {
      return o.util.object.extend(this.callSuper("toObject"), { subFilters: this.subFilters.map(function(n) {
        return n.toObject();
      }) });
    }, isNeutralState: function() {
      return !this.subFilters.some(function(n) {
        return !n.isNeutralState();
      });
    } }), o.Image.filters.Composed.fromObject = function(n, r) {
      var a = (n.subFilters || []).map(function(u) {
        return new o.Image.filters[u.type](u);
      }), h = new o.Image.filters.Composed({ subFilters: a });
      return r && r(h), h;
    };
  }(e), function(s) {
    var o = s.fabric || (s.fabric = {}), l = o.Image.filters, p = o.util.createClass;
    l.HueRotation = p(l.ColorMatrix, { type: "HueRotation", rotation: 0, mainParameter: "rotation", calculateMatrix: function() {
      var n = this.rotation * Math.PI, r = o.util.cos(n), a = o.util.sin(n), h = 1 / 3, u = Math.sqrt(h) * a, d = 1 - r;
      this.matrix = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0], this.matrix[0] = r + d / 3, this.matrix[1] = h * d - u, this.matrix[2] = h * d + u, this.matrix[5] = h * d + u, this.matrix[6] = r + h * d, this.matrix[7] = h * d - u, this.matrix[10] = h * d - u, this.matrix[11] = h * d + u, this.matrix[12] = r + h * d;
    }, isNeutralState: function(n) {
      return this.calculateMatrix(), l.BaseFilter.prototype.isNeutralState.call(this, n);
    }, applyTo: function(n) {
      this.calculateMatrix(), l.BaseFilter.prototype.applyTo.call(this, n);
    } }), o.Image.filters.HueRotation.fromObject = o.Image.filters.BaseFilter.fromObject;
  }(e), function(s) {
    var o = s.fabric || (s.fabric = {}), l = o.util.object.clone;
    if (o.Text) o.warn("fabric.Text is already defined");
    else {
      var p = "fontFamily fontWeight fontSize text underline overline linethrough textAlign fontStyle lineHeight textBackgroundColor charSpacing styles direction path pathStartOffset pathSide".split(" ");
      o.Text = o.util.createClass(o.Object, { _dimensionAffectingProps: ["fontSize", "fontWeight", "fontFamily", "fontStyle", "lineHeight", "text", "charSpacing", "textAlign", "styles", "path", "pathStartOffset", "pathSide"], _reNewline: /\r?\n/, _reSpacesAndTabs: /[ \t\r]/g, _reSpaceAndTab: /[ \t\r]/, _reWords: /\S+/g, type: "text", fontSize: 40, fontWeight: "normal", fontFamily: "Times New Roman", underline: !1, overline: !1, linethrough: !1, textAlign: "left", fontStyle: "normal", lineHeight: 1.16, superscript: { size: 0.6, baseline: -0.35 }, subscript: { size: 0.6, baseline: 0.11 }, textBackgroundColor: "", stateProperties: o.Object.prototype.stateProperties.concat(p), cacheProperties: o.Object.prototype.cacheProperties.concat(p), stroke: null, shadow: null, path: null, pathStartOffset: 0, pathSide: "left", _fontSizeFraction: 0.222, offsets: { underline: 0.1, linethrough: -0.315, overline: -0.88 }, _fontSizeMult: 1.13, charSpacing: 0, styles: null, _measuringContext: null, deltaY: 0, direction: "ltr", _styleProperties: ["stroke", "strokeWidth", "fill", "fontFamily", "fontSize", "fontWeight", "fontStyle", "underline", "overline", "linethrough", "deltaY", "textBackgroundColor"], __charBounds: [], CACHE_FONT_SIZE: 400, MIN_TEXT_WIDTH: 2, initialize: function(n, r) {
        this.styles = r && r.styles || {}, this.text = n, this.__skipDimension = !0, this.callSuper("initialize", r), this.path && this.setPathInfo(), this.__skipDimension = !1, this.initDimensions(), this.setCoords(), this.setupState({ propertySet: "_dimensionAffectingProps" });
      }, setPathInfo: function() {
        var n = this.path;
        n && (n.segmentsInfo = o.util.getPathSegmentsInfo(n.path));
      }, getMeasuringContext: function() {
        return o._measuringContext || (o._measuringContext = this.canvas && this.canvas.contextCache || o.util.createCanvasElement().getContext("2d")), o._measuringContext;
      }, _splitText: function() {
        var n = this._splitTextIntoLines(this.text);
        return this.textLines = n.lines, this._textLines = n.graphemeLines, this._unwrappedTextLines = n._unwrappedLines, this._text = n.graphemeText, n;
      }, initDimensions: function() {
        this.__skipDimension || (this._splitText(), this._clearCache(), this.path ? (this.width = this.path.width, this.height = this.path.height) : (this.width = this.calcTextWidth() || this.cursorWidth || this.MIN_TEXT_WIDTH, this.height = this.calcTextHeight()), this.textAlign.indexOf("justify") !== -1 && this.enlargeSpaces(), this.saveState({ propertySet: "_dimensionAffectingProps" }));
      }, enlargeSpaces: function() {
        for (var n, r, a, h, u, d, g, y = 0, x = this._textLines.length; y < x; y++) if ((this.textAlign === "justify" || y !== x - 1 && !this.isEndOfWrapping(y)) && (h = 0, u = this._textLines[y], (r = this.getLineWidth(y)) < this.width && (g = this.textLines[y].match(this._reSpacesAndTabs)))) {
          a = g.length, n = (this.width - r) / a;
          for (var C = 0, b = u.length; C <= b; C++) d = this.__charBounds[y][C], this._reSpaceAndTab.test(u[C]) ? (d.width += n, d.kernedWidth += n, d.left += h, h += n) : d.left += h;
        }
      }, isEndOfWrapping: function(n) {
        return n === this._textLines.length - 1;
      }, missingNewlineOffset: function() {
        return 1;
      }, toString: function() {
        return "#<fabric.Text (" + this.complexity() + '): { "text": "' + this.text + '", "fontFamily": "' + this.fontFamily + '" }>';
      }, _getCacheCanvasDimensions: function() {
        var n = this.callSuper("_getCacheCanvasDimensions"), r = this.fontSize;
        return n.width += r * n.zoomX, n.height += r * n.zoomY, n;
      }, _render: function(n) {
        var r = this.path;
        r && !r.isNotVisible() && r._render(n), this._setTextStyles(n), this._renderTextLinesBackground(n), this._renderTextDecoration(n, "underline"), this._renderText(n), this._renderTextDecoration(n, "overline"), this._renderTextDecoration(n, "linethrough");
      }, _renderText: function(n) {
        this.paintFirst === "stroke" ? (this._renderTextStroke(n), this._renderTextFill(n)) : (this._renderTextFill(n), this._renderTextStroke(n));
      }, _setTextStyles: function(n, r, a) {
        n.textBaseline = "alphabetic", n.font = this._getFontDeclaration(r, a);
      }, calcTextWidth: function() {
        for (var n = this.getLineWidth(0), r = 1, a = this._textLines.length; r < a; r++) {
          var h = this.getLineWidth(r);
          h > n && (n = h);
        }
        return n;
      }, _renderTextLine: function(n, r, a, h, u, d) {
        this._renderChars(n, r, a, h, u, d);
      }, _renderTextLinesBackground: function(n) {
        if (this.textBackgroundColor || this.styleHas("textBackgroundColor")) {
          for (var r, a, h, u, d, g, y, x = n.fillStyle, C = this._getLeftOffset(), b = this._getTopOffset(), M = 0, P = 0, _ = this.path, k = 0, L = this._textLines.length; k < L; k++) if (r = this.getHeightOfLine(k), this.textBackgroundColor || this.styleHas("textBackgroundColor", k)) {
            h = this._textLines[k], a = this._getLineLeftOffset(k), P = 0, M = 0, u = this.getValueOfPropertyAt(k, 0, "textBackgroundColor");
            for (var H = 0, W = h.length; H < W; H++) d = this.__charBounds[k][H], g = this.getValueOfPropertyAt(k, H, "textBackgroundColor"), _ ? (n.save(), n.translate(d.renderLeft, d.renderTop), n.rotate(d.angle), n.fillStyle = g, g && n.fillRect(-d.width / 2, -r / this.lineHeight * (1 - this._fontSizeFraction), d.width, r / this.lineHeight), n.restore()) : g !== u ? (y = C + a + M, this.direction === "rtl" && (y = this.width - y - P), n.fillStyle = u, u && n.fillRect(y, b, P, r / this.lineHeight), M = d.left, P = d.width, u = g) : P += d.kernedWidth;
            g && !_ && (y = C + a + M, this.direction === "rtl" && (y = this.width - y - P), n.fillStyle = g, n.fillRect(y, b, P, r / this.lineHeight)), b += r;
          } else b += r;
          n.fillStyle = x, this._removeShadow(n);
        }
      }, getFontCache: function(n) {
        var r = n.fontFamily.toLowerCase();
        o.charWidthsCache[r] || (o.charWidthsCache[r] = {});
        var a = o.charWidthsCache[r], h = n.fontStyle.toLowerCase() + "_" + (n.fontWeight + "").toLowerCase();
        return a[h] || (a[h] = {}), a[h];
      }, _measureChar: function(n, r, a, h) {
        var u, d, g, y, x = this.getFontCache(r), C = a + n, b = this._getFontDeclaration(r) === this._getFontDeclaration(h), M = r.fontSize / this.CACHE_FONT_SIZE;
        if (a && x[a] !== void 0 && (g = x[a]), x[n] !== void 0 && (y = u = x[n]), b && x[C] !== void 0 && (y = (d = x[C]) - g), u === void 0 || g === void 0 || d === void 0) {
          var P = this.getMeasuringContext();
          this._setTextStyles(P, r, !0);
        }
        return u === void 0 && (y = u = P.measureText(n).width, x[n] = u), g === void 0 && b && a && (g = P.measureText(a).width, x[a] = g), b && d === void 0 && (d = P.measureText(C).width, x[C] = d, y = d - g), { width: u * M, kernedWidth: y * M };
      }, getHeightOfChar: function(n, r) {
        return this.getValueOfPropertyAt(n, r, "fontSize");
      }, measureLine: function(n) {
        var r = this._measureLine(n);
        return this.charSpacing !== 0 && (r.width -= this._getWidthOfCharSpacing()), r.width < 0 && (r.width = 0), r;
      }, _measureLine: function(n) {
        var r, a, h, u, d, g, y = 0, x = this._textLines[n], C = new Array(x.length), b = 0, M = this.path, P = this.pathSide === "right";
        for (this.__charBounds[n] = C, r = 0; r < x.length; r++) a = x[r], u = this._getGraphemeBox(a, n, r, h), C[r] = u, y += u.kernedWidth, h = a;
        if (C[r] = { left: u ? u.left + u.width : 0, width: 0, kernedWidth: 0, height: this.fontSize }, M) {
          switch (g = M.segmentsInfo[M.segmentsInfo.length - 1].length, (d = o.util.getPointOnPath(M.path, 0, M.segmentsInfo)).x += M.pathOffset.x, d.y += M.pathOffset.y, this.textAlign) {
            case "left":
              b = P ? g - y : 0;
              break;
            case "center":
              b = (g - y) / 2;
              break;
            case "right":
              b = P ? 0 : g - y;
          }
          for (b += this.pathStartOffset * (P ? -1 : 1), r = P ? x.length - 1 : 0; P ? r >= 0 : r < x.length; P ? r-- : r++) u = C[r], b > g ? b %= g : b < 0 && (b += g), this._setGraphemeOnPath(b, u, d), b += u.kernedWidth;
        }
        return { width: y, numOfSpaces: 0 };
      }, _setGraphemeOnPath: function(n, r, a) {
        var h = n + r.kernedWidth / 2, u = this.path, d = o.util.getPointOnPath(u.path, h, u.segmentsInfo);
        r.renderLeft = d.x - a.x, r.renderTop = d.y - a.y, r.angle = d.angle + (this.pathSide === "right" ? Math.PI : 0);
      }, _getGraphemeBox: function(n, r, a, h, u) {
        var d, g = this.getCompleteStyleDeclaration(r, a), y = h ? this.getCompleteStyleDeclaration(r, a - 1) : {}, x = this._measureChar(n, g, h, y), C = x.kernedWidth, b = x.width;
        this.charSpacing !== 0 && (b += d = this._getWidthOfCharSpacing(), C += d);
        var M = { width: b, left: 0, height: g.fontSize, kernedWidth: C, deltaY: g.deltaY };
        if (a > 0 && !u) {
          var P = this.__charBounds[r][a - 1];
          M.left = P.left + P.width + x.kernedWidth - x.width;
        }
        return M;
      }, getHeightOfLine: function(n) {
        if (this.__lineHeights[n]) return this.__lineHeights[n];
        for (var r = this._textLines[n], a = this.getHeightOfChar(n, 0), h = 1, u = r.length; h < u; h++) a = Math.max(this.getHeightOfChar(n, h), a);
        return this.__lineHeights[n] = a * this.lineHeight * this._fontSizeMult;
      }, calcTextHeight: function() {
        for (var n, r = 0, a = 0, h = this._textLines.length; a < h; a++) n = this.getHeightOfLine(a), r += a === h - 1 ? n / this.lineHeight : n;
        return r;
      }, _getLeftOffset: function() {
        return this.direction === "ltr" ? -this.width / 2 : this.width / 2;
      }, _getTopOffset: function() {
        return -this.height / 2;
      }, _renderTextCommon: function(n, r) {
        n.save();
        for (var a = 0, h = this._getLeftOffset(), u = this._getTopOffset(), d = 0, g = this._textLines.length; d < g; d++) {
          var y = this.getHeightOfLine(d), x = y / this.lineHeight, C = this._getLineLeftOffset(d);
          this._renderTextLine(r, n, this._textLines[d], h + C, u + a + x, d), a += y;
        }
        n.restore();
      }, _renderTextFill: function(n) {
        (this.fill || this.styleHas("fill")) && this._renderTextCommon(n, "fillText");
      }, _renderTextStroke: function(n) {
        (this.stroke && this.strokeWidth !== 0 || !this.isEmptyStyles()) && (this.shadow && !this.shadow.affectStroke && this._removeShadow(n), n.save(), this._setLineDash(n, this.strokeDashArray), n.beginPath(), this._renderTextCommon(n, "strokeText"), n.closePath(), n.restore());
      }, _renderChars: function(n, r, a, h, u, d) {
        var g, y, x, C, b, M = this.getHeightOfLine(d), P = this.textAlign.indexOf("justify") !== -1, _ = "", k = 0, L = this.path, H = !P && this.charSpacing === 0 && this.isEmptyStyles(d) && !L, W = this.direction === "ltr", A = this.direction === "ltr" ? 1 : -1;
        if (r.save(), u -= M * this._fontSizeFraction / this.lineHeight, H) return r.canvas.setAttribute("dir", W ? "ltr" : "rtl"), r.direction = W ? "ltr" : "rtl", r.textAlign = W ? "left" : "right", this._renderChar(n, r, d, 0, a.join(""), h, u, M), void r.restore();
        for (var T = 0, D = a.length - 1; T <= D; T++) C = T === D || this.charSpacing || L, _ += a[T], x = this.__charBounds[d][T], k === 0 ? (h += A * (x.kernedWidth - x.width), k += x.width) : k += x.kernedWidth, P && !C && this._reSpaceAndTab.test(a[T]) && (C = !0), C || (g = g || this.getCompleteStyleDeclaration(d, T), y = this.getCompleteStyleDeclaration(d, T + 1), C = this._hasStyleChanged(g, y)), C && (L ? (r.save(), r.translate(x.renderLeft, x.renderTop), r.rotate(x.angle), this._renderChar(n, r, d, T, _, -k / 2, 0, M), r.restore()) : (b = h, r.canvas.setAttribute("dir", W ? "ltr" : "rtl"), r.direction = W ? "ltr" : "rtl", r.textAlign = W ? "left" : "right", this._renderChar(n, r, d, T, _, b, u, M)), _ = "", g = y, h += A * k, k = 0);
        r.restore();
      }, _applyPatternGradientTransformText: function(n) {
        var r, a = o.util.createCanvasElement(), h = this.width + this.strokeWidth, u = this.height + this.strokeWidth;
        return a.width = h, a.height = u, (r = a.getContext("2d")).beginPath(), r.moveTo(0, 0), r.lineTo(h, 0), r.lineTo(h, u), r.lineTo(0, u), r.closePath(), r.translate(h / 2, u / 2), r.fillStyle = n.toLive(r), this._applyPatternGradientTransform(r, n), r.fill(), r.createPattern(a, "no-repeat");
      }, handleFiller: function(n, r, a) {
        var h, u;
        return a.toLive ? a.gradientUnits === "percentage" || a.gradientTransform || a.patternTransform ? (h = -this.width / 2, u = -this.height / 2, n.translate(h, u), n[r] = this._applyPatternGradientTransformText(a), { offsetX: h, offsetY: u }) : (n[r] = a.toLive(n, this), this._applyPatternGradientTransform(n, a)) : (n[r] = a, { offsetX: 0, offsetY: 0 });
      }, _setStrokeStyles: function(n, r) {
        return n.lineWidth = r.strokeWidth, n.lineCap = this.strokeLineCap, n.lineDashOffset = this.strokeDashOffset, n.lineJoin = this.strokeLineJoin, n.miterLimit = this.strokeMiterLimit, this.handleFiller(n, "strokeStyle", r.stroke);
      }, _setFillStyles: function(n, r) {
        return this.handleFiller(n, "fillStyle", r.fill);
      }, _renderChar: function(n, r, a, h, u, d, g) {
        var y, x, C = this._getStyleDeclaration(a, h), b = this.getCompleteStyleDeclaration(a, h), M = n === "fillText" && b.fill, P = n === "strokeText" && b.stroke && b.strokeWidth;
        (P || M) && (r.save(), M && (y = this._setFillStyles(r, b)), P && (x = this._setStrokeStyles(r, b)), r.font = this._getFontDeclaration(b), C && C.textBackgroundColor && this._removeShadow(r), C && C.deltaY && (g += C.deltaY), M && r.fillText(u, d - y.offsetX, g - y.offsetY), P && r.strokeText(u, d - x.offsetX, g - x.offsetY), r.restore());
      }, setSuperscript: function(n, r) {
        return this._setScript(n, r, this.superscript);
      }, setSubscript: function(n, r) {
        return this._setScript(n, r, this.subscript);
      }, _setScript: function(n, r, a) {
        var h = this.get2DCursorLocation(n, !0), u = this.getValueOfPropertyAt(h.lineIndex, h.charIndex, "fontSize"), d = this.getValueOfPropertyAt(h.lineIndex, h.charIndex, "deltaY"), g = { fontSize: u * a.size, deltaY: d + u * a.baseline };
        return this.setSelectionStyles(g, n, r), this;
      }, _hasStyleChanged: function(n, r) {
        return n.fill !== r.fill || n.stroke !== r.stroke || n.strokeWidth !== r.strokeWidth || n.fontSize !== r.fontSize || n.fontFamily !== r.fontFamily || n.fontWeight !== r.fontWeight || n.fontStyle !== r.fontStyle || n.deltaY !== r.deltaY;
      }, _hasStyleChangedForSvg: function(n, r) {
        return this._hasStyleChanged(n, r) || n.overline !== r.overline || n.underline !== r.underline || n.linethrough !== r.linethrough;
      }, _getLineLeftOffset: function(n) {
        var r = this.getLineWidth(n), a = this.width - r, h = this.textAlign, u = this.direction, d = 0, g = this.isEndOfWrapping(n);
        return h === "justify" || h === "justify-center" && !g || h === "justify-right" && !g || h === "justify-left" && !g ? 0 : (h === "center" && (d = a / 2), h === "right" && (d = a), h === "justify-center" && (d = a / 2), h === "justify-right" && (d = a), u === "rtl" && (d -= a), d);
      }, _clearCache: function() {
        this.__lineWidths = [], this.__lineHeights = [], this.__charBounds = [];
      }, _shouldClearDimensionCache: function() {
        var n = this._forceClearCache;
        return n || (n = this.hasStateChanged("_dimensionAffectingProps")), n && (this.dirty = !0, this._forceClearCache = !1), n;
      }, getLineWidth: function(n) {
        return this.__lineWidths[n] ? this.__lineWidths[n] : (r = this._textLines[n] === "" ? 0 : this.measureLine(n).width, this.__lineWidths[n] = r, r);
        var r;
      }, _getWidthOfCharSpacing: function() {
        return this.charSpacing !== 0 ? this.fontSize * this.charSpacing / 1e3 : 0;
      }, getValueOfPropertyAt: function(n, r, a) {
        var h = this._getStyleDeclaration(n, r);
        return h && h[a] !== void 0 ? h[a] : this[a];
      }, _renderTextDecoration: function(n, r) {
        if (this[r] || this.styleHas(r)) {
          for (var a, h, u, d, g, y, x, C, b, M, P, _, k, L, H, W, A = this._getLeftOffset(), T = this._getTopOffset(), D = this.path, X = this._getWidthOfCharSpacing(), $ = this.offsets[r], B = 0, j = this._textLines.length; B < j; B++) if (a = this.getHeightOfLine(B), this[r] || this.styleHas(r, B)) {
            x = this._textLines[B], L = a / this.lineHeight, d = this._getLineLeftOffset(B), M = 0, P = 0, C = this.getValueOfPropertyAt(B, 0, r), W = this.getValueOfPropertyAt(B, 0, "fill"), b = T + L * (1 - this._fontSizeFraction), h = this.getHeightOfChar(B, 0), g = this.getValueOfPropertyAt(B, 0, "deltaY");
            for (var Y = 0, I = x.length; Y < I; Y++) if (_ = this.__charBounds[B][Y], k = this.getValueOfPropertyAt(B, Y, r), H = this.getValueOfPropertyAt(B, Y, "fill"), u = this.getHeightOfChar(B, Y), y = this.getValueOfPropertyAt(B, Y, "deltaY"), D && k && H) n.save(), n.fillStyle = W, n.translate(_.renderLeft, _.renderTop), n.rotate(_.angle), n.fillRect(-_.kernedWidth / 2, $ * u + y, _.kernedWidth, this.fontSize / 15), n.restore();
            else if ((k !== C || H !== W || u !== h || y !== g) && P > 0) {
              var U = A + d + M;
              this.direction === "rtl" && (U = this.width - U - P), C && W && (n.fillStyle = W, n.fillRect(U, b + $ * h + g, P, this.fontSize / 15)), M = _.left, P = _.width, C = k, W = H, h = u, g = y;
            } else P += _.kernedWidth;
            U = A + d + M, this.direction === "rtl" && (U = this.width - U - P), n.fillStyle = H, k && H && n.fillRect(U, b + $ * h + g, P - X, this.fontSize / 15), T += a;
          } else T += a;
          this._removeShadow(n);
        }
      }, _getFontDeclaration: function(n, r) {
        var a = n || this, h = this.fontFamily, u = o.Text.genericFonts.indexOf(h.toLowerCase()) > -1, d = h === void 0 || h.indexOf("'") > -1 || h.indexOf(",") > -1 || h.indexOf('"') > -1 || u ? a.fontFamily : '"' + a.fontFamily + '"';
        return [o.isLikelyNode ? a.fontWeight : a.fontStyle, o.isLikelyNode ? a.fontStyle : a.fontWeight, r ? this.CACHE_FONT_SIZE + "px" : a.fontSize + "px", d].join(" ");
      }, render: function(n) {
        this.visible && (this.canvas && this.canvas.skipOffscreen && !this.group && !this.isOnScreen() || (this._shouldClearDimensionCache() && this.initDimensions(), this.callSuper("render", n)));
      }, _splitTextIntoLines: function(n) {
        for (var r = n.split(this._reNewline), a = new Array(r.length), h = [`
`], u = [], d = 0; d < r.length; d++) a[d] = o.util.string.graphemeSplit(r[d]), u = u.concat(a[d], h);
        return u.pop(), { _unwrappedLines: a, lines: r, graphemeText: u, graphemeLines: a };
      }, toObject: function(n) {
        var r = p.concat(n), a = this.callSuper("toObject", r);
        return a.styles = l(this.styles, !0), a.path && (a.path = this.path.toObject()), a;
      }, set: function(n, r) {
        this.callSuper("set", n, r);
        var a = !1, h = !1;
        if (typeof n == "object") for (var u in n) u === "path" && this.setPathInfo(), a = a || this._dimensionAffectingProps.indexOf(u) !== -1, h = h || u === "path";
        else a = this._dimensionAffectingProps.indexOf(n) !== -1, h = n === "path";
        return h && this.setPathInfo(), a && (this.initDimensions(), this.setCoords()), this;
      }, complexity: function() {
        return 1;
      } }), o.Text.ATTRIBUTE_NAMES = o.SHARED_ATTRIBUTES.concat("x y dx dy font-family font-style font-weight font-size letter-spacing text-decoration text-anchor".split(" ")), o.Text.DEFAULT_SVG_FONT_SIZE = 16, o.Text.fromElement = function(n, r, a) {
        if (!n) return r(null);
        var h = o.parseAttributes(n, o.Text.ATTRIBUTE_NAMES), u = h.textAnchor || "left";
        if ((a = o.util.object.extend(a ? l(a) : {}, h)).top = a.top || 0, a.left = a.left || 0, h.textDecoration) {
          var d = h.textDecoration;
          d.indexOf("underline") !== -1 && (a.underline = !0), d.indexOf("overline") !== -1 && (a.overline = !0), d.indexOf("line-through") !== -1 && (a.linethrough = !0), delete a.textDecoration;
        }
        "dx" in h && (a.left += h.dx), "dy" in h && (a.top += h.dy), "fontSize" in a || (a.fontSize = o.Text.DEFAULT_SVG_FONT_SIZE);
        var g = "";
        "textContent" in n ? g = n.textContent : "firstChild" in n && n.firstChild !== null && "data" in n.firstChild && n.firstChild.data !== null && (g = n.firstChild.data), g = g.replace(/^\s+|\s+$|\n+/g, "").replace(/\s+/g, " ");
        var y = a.strokeWidth;
        a.strokeWidth = 0;
        var x = new o.Text(g, a), C = x.getScaledHeight() / x.height, b = ((x.height + x.strokeWidth) * x.lineHeight - x.height) * C, M = x.getScaledHeight() + b, P = 0;
        u === "center" && (P = x.getScaledWidth() / 2), u === "right" && (P = x.getScaledWidth()), x.set({ left: x.left - P, top: x.top - (M - x.fontSize * (0.07 + x._fontSizeFraction)) / x.lineHeight, strokeWidth: y !== void 0 ? y : 1 }), r(x);
      }, o.Text.fromObject = function(n, r) {
        var a = l(n), h = n.path;
        return delete a.path, o.Object._fromObject("Text", a, function(u) {
          h ? o.Object._fromObject("Path", h, function(d) {
            u.set("path", d), r(u);
          }, "path") : r(u);
        }, "text");
      }, o.Text.genericFonts = ["sans-serif", "serif", "cursive", "fantasy", "monospace"], o.util.createAccessors && o.util.createAccessors(o.Text);
    }
  }(e), v.util.object.extend(v.Text.prototype, { isEmptyStyles: function(s) {
    if (!this.styles || s !== void 0 && !this.styles[s]) return !0;
    var o = s === void 0 ? this.styles : { line: this.styles[s] };
    for (var l in o) for (var p in o[l]) for (var n in o[l][p]) return !1;
    return !0;
  }, styleHas: function(s, o) {
    if (!this.styles || !s || s === "" || o !== void 0 && !this.styles[o]) return !1;
    var l = o === void 0 ? this.styles : { 0: this.styles[o] };
    for (var p in l) for (var n in l[p]) if (l[p][n][s] !== void 0) return !0;
    return !1;
  }, cleanStyle: function(s) {
    if (!this.styles || !s || s === "") return !1;
    var o, l, p = this.styles, n = 0, r = !0, a = 0;
    for (var h in p) {
      for (var u in o = 0, p[h]) {
        var d;
        n++, (d = p[h][u]).hasOwnProperty(s) ? (l ? d[s] !== l && (r = !1) : l = d[s], d[s] === this[s] && delete d[s]) : r = !1, Object.keys(d).length !== 0 ? o++ : delete p[h][u];
      }
      o === 0 && delete p[h];
    }
    for (var g = 0; g < this._textLines.length; g++) a += this._textLines[g].length;
    r && n === a && (this[s] = l, this.removeStyle(s));
  }, removeStyle: function(s) {
    if (this.styles && s && s !== "") {
      var o, l, p, n = this.styles;
      for (l in n) {
        for (p in o = n[l]) delete o[p][s], Object.keys(o[p]).length === 0 && delete o[p];
        Object.keys(o).length === 0 && delete n[l];
      }
    }
  }, _extendStyles: function(s, o) {
    var l = this.get2DCursorLocation(s);
    this._getLineStyle(l.lineIndex) || this._setLineStyle(l.lineIndex), this._getStyleDeclaration(l.lineIndex, l.charIndex) || this._setStyleDeclaration(l.lineIndex, l.charIndex, {}), v.util.object.extend(this._getStyleDeclaration(l.lineIndex, l.charIndex), o);
  }, get2DCursorLocation: function(s, o) {
    s === void 0 && (s = this.selectionStart);
    for (var l = o ? this._unwrappedTextLines : this._textLines, p = l.length, n = 0; n < p; n++) {
      if (s <= l[n].length) return { lineIndex: n, charIndex: s };
      s -= l[n].length + this.missingNewlineOffset(n);
    }
    return { lineIndex: n - 1, charIndex: l[n - 1].length < s ? l[n - 1].length : s };
  }, getSelectionStyles: function(s, o, l) {
    s === void 0 && (s = this.selectionStart || 0), o === void 0 && (o = this.selectionEnd || s);
    for (var p = [], n = s; n < o; n++) p.push(this.getStyleAtPosition(n, l));
    return p;
  }, getStyleAtPosition: function(s, o) {
    var l = this.get2DCursorLocation(s);
    return (o ? this.getCompleteStyleDeclaration(l.lineIndex, l.charIndex) : this._getStyleDeclaration(l.lineIndex, l.charIndex)) || {};
  }, setSelectionStyles: function(s, o, l) {
    o === void 0 && (o = this.selectionStart || 0), l === void 0 && (l = this.selectionEnd || o);
    for (var p = o; p < l; p++) this._extendStyles(p, s);
    return this._forceClearCache = !0, this;
  }, _getStyleDeclaration: function(s, o) {
    var l = this.styles && this.styles[s];
    return l ? l[o] : null;
  }, getCompleteStyleDeclaration: function(s, o) {
    for (var l, p = this._getStyleDeclaration(s, o) || {}, n = {}, r = 0; r < this._styleProperties.length; r++) n[l = this._styleProperties[r]] = p[l] === void 0 ? this[l] : p[l];
    return n;
  }, _setStyleDeclaration: function(s, o, l) {
    this.styles[s][o] = l;
  }, _deleteStyleDeclaration: function(s, o) {
    delete this.styles[s][o];
  }, _getLineStyle: function(s) {
    return !!this.styles[s];
  }, _setLineStyle: function(s) {
    this.styles[s] = {};
  }, _deleteLineStyle: function(s) {
    delete this.styles[s];
  } }), function() {
    function s(o) {
      o.textDecoration && (o.textDecoration.indexOf("underline") > -1 && (o.underline = !0), o.textDecoration.indexOf("line-through") > -1 && (o.linethrough = !0), o.textDecoration.indexOf("overline") > -1 && (o.overline = !0), delete o.textDecoration);
    }
    v.IText = v.util.createClass(v.Text, v.Observable, { type: "i-text", selectionStart: 0, selectionEnd: 0, selectionColor: "rgba(17,119,255,0.3)", isEditing: !1, editable: !0, editingBorderColor: "rgba(102,153,255,0.25)", cursorWidth: 2, cursorColor: "", cursorDelay: 1e3, cursorDuration: 600, caching: !0, hiddenTextareaContainer: null, _reSpace: /\s|\n/, _currentCursorOpacity: 0, _selectionDirection: null, _abortCursorAnimation: !1, __widthOfSpace: [], inCompositionMode: !1, initialize: function(o, l) {
      this.callSuper("initialize", o, l), this.initBehavior();
    }, setSelectionStart: function(o) {
      o = Math.max(o, 0), this._updateAndFire("selectionStart", o);
    }, setSelectionEnd: function(o) {
      o = Math.min(o, this.text.length), this._updateAndFire("selectionEnd", o);
    }, _updateAndFire: function(o, l) {
      this[o] !== l && (this._fireSelectionChanged(), this[o] = l), this._updateTextarea();
    }, _fireSelectionChanged: function() {
      this.fire("selection:changed"), this.canvas && this.canvas.fire("text:selection:changed", { target: this });
    }, initDimensions: function() {
      this.isEditing && this.initDelayedCursor(), this.clearContextTop(), this.callSuper("initDimensions");
    }, render: function(o) {
      this.clearContextTop(), this.callSuper("render", o), this.cursorOffsetCache = {}, this.renderCursorOrSelection();
    }, _render: function(o) {
      this.callSuper("_render", o);
    }, clearContextTop: function(o) {
      if (this.isEditing && this.canvas && this.canvas.contextTop) {
        var l = this.canvas.contextTop, p = this.canvas.viewportTransform;
        l.save(), l.transform(p[0], p[1], p[2], p[3], p[4], p[5]), this.transform(l), this._clearTextArea(l), o || l.restore();
      }
    }, renderCursorOrSelection: function() {
      if (this.isEditing && this.canvas && this.canvas.contextTop) {
        var o = this._getCursorBoundaries(), l = this.canvas.contextTop;
        this.clearContextTop(!0), this.selectionStart === this.selectionEnd ? this.renderCursor(o, l) : this.renderSelection(o, l), l.restore();
      }
    }, _clearTextArea: function(o) {
      var l = this.width + 4, p = this.height + 4;
      o.clearRect(-l / 2, -p / 2, l, p);
    }, _getCursorBoundaries: function(o) {
      o === void 0 && (o = this.selectionStart);
      var l = this._getLeftOffset(), p = this._getTopOffset(), n = this._getCursorBoundariesOffsets(o);
      return { left: l, top: p, leftOffset: n.left, topOffset: n.top };
    }, _getCursorBoundariesOffsets: function(o) {
      if (this.cursorOffsetCache && "top" in this.cursorOffsetCache) return this.cursorOffsetCache;
      var l, p, n, r, a = 0, h = 0, u = this.get2DCursorLocation(o);
      n = u.charIndex, p = u.lineIndex;
      for (var d = 0; d < p; d++) a += this.getHeightOfLine(d);
      l = this._getLineLeftOffset(p);
      var g = this.__charBounds[p][n];
      return g && (h = g.left), this.charSpacing !== 0 && n === this._textLines[p].length && (h -= this._getWidthOfCharSpacing()), r = { top: a, left: l + (h > 0 ? h : 0) }, this.direction === "rtl" && (r.left *= -1), this.cursorOffsetCache = r, this.cursorOffsetCache;
    }, renderCursor: function(o, l) {
      var p = this.get2DCursorLocation(), n = p.lineIndex, r = p.charIndex > 0 ? p.charIndex - 1 : 0, a = this.getValueOfPropertyAt(n, r, "fontSize"), h = this.scaleX * this.canvas.getZoom(), u = this.cursorWidth / h, d = o.topOffset, g = this.getValueOfPropertyAt(n, r, "deltaY");
      d += (1 - this._fontSizeFraction) * this.getHeightOfLine(n) / this.lineHeight - a * (1 - this._fontSizeFraction), this.inCompositionMode && this.renderSelection(o, l), l.fillStyle = this.cursorColor || this.getValueOfPropertyAt(n, r, "fill"), l.globalAlpha = this.__isMousedown ? 1 : this._currentCursorOpacity, l.fillRect(o.left + o.leftOffset - u / 2, d + o.top + g, u, a);
    }, renderSelection: function(o, l) {
      for (var p = this.inCompositionMode ? this.hiddenTextarea.selectionStart : this.selectionStart, n = this.inCompositionMode ? this.hiddenTextarea.selectionEnd : this.selectionEnd, r = this.textAlign.indexOf("justify") !== -1, a = this.get2DCursorLocation(p), h = this.get2DCursorLocation(n), u = a.lineIndex, d = h.lineIndex, g = a.charIndex < 0 ? 0 : a.charIndex, y = h.charIndex < 0 ? 0 : h.charIndex, x = u; x <= d; x++) {
        var C, b = this._getLineLeftOffset(x) || 0, M = this.getHeightOfLine(x), P = 0, _ = 0;
        if (x === u && (P = this.__charBounds[u][g].left), x >= u && x < d) _ = r && !this.isEndOfWrapping(x) ? this.width : this.getLineWidth(x) || 5;
        else if (x === d) if (y === 0) _ = this.__charBounds[d][y].left;
        else {
          var k = this._getWidthOfCharSpacing();
          _ = this.__charBounds[d][y - 1].left + this.__charBounds[d][y - 1].width - k;
        }
        C = M, (this.lineHeight < 1 || x === d && this.lineHeight > 1) && (M /= this.lineHeight);
        var L = o.left + b + P, H = _ - P, W = M, A = 0;
        this.inCompositionMode ? (l.fillStyle = this.compositionColor || "black", W = 1, A = M) : l.fillStyle = this.selectionColor, this.direction === "rtl" && (L = this.width - L - H), l.fillRect(L, o.top + o.topOffset + A, H, W), o.topOffset += C;
      }
    }, getCurrentCharFontSize: function() {
      var o = this._getCurrentCharIndex();
      return this.getValueOfPropertyAt(o.l, o.c, "fontSize");
    }, getCurrentCharColor: function() {
      var o = this._getCurrentCharIndex();
      return this.getValueOfPropertyAt(o.l, o.c, "fill");
    }, _getCurrentCharIndex: function() {
      var o = this.get2DCursorLocation(this.selectionStart, !0), l = o.charIndex > 0 ? o.charIndex - 1 : 0;
      return { l: o.lineIndex, c: l };
    } }), v.IText.fromObject = function(o, l) {
      if (s(o), o.styles) for (var p in o.styles) for (var n in o.styles[p]) s(o.styles[p][n]);
      v.Object._fromObject("IText", o, l, "text");
    };
  }(), he = v.util.object.clone, v.util.object.extend(v.IText.prototype, { initBehavior: function() {
    this.initAddedHandler(), this.initRemovedHandler(), this.initCursorSelectionHandlers(), this.initDoubleClickSimulation(), this.mouseMoveHandler = this.mouseMoveHandler.bind(this);
  }, onDeselect: function() {
    this.isEditing && this.exitEditing(), this.selected = !1;
  }, initAddedHandler: function() {
    var s = this;
    this.on("added", function() {
      var o = s.canvas;
      o && (o._hasITextHandlers || (o._hasITextHandlers = !0, s._initCanvasHandlers(o)), o._iTextInstances = o._iTextInstances || [], o._iTextInstances.push(s));
    });
  }, initRemovedHandler: function() {
    var s = this;
    this.on("removed", function() {
      var o = s.canvas;
      o && (o._iTextInstances = o._iTextInstances || [], v.util.removeFromArray(o._iTextInstances, s), o._iTextInstances.length === 0 && (o._hasITextHandlers = !1, s._removeCanvasHandlers(o)));
    });
  }, _initCanvasHandlers: function(s) {
    s._mouseUpITextHandler = function() {
      s._iTextInstances && s._iTextInstances.forEach(function(o) {
        o.__isMousedown = !1;
      });
    }, s.on("mouse:up", s._mouseUpITextHandler);
  }, _removeCanvasHandlers: function(s) {
    s.off("mouse:up", s._mouseUpITextHandler);
  }, _tick: function() {
    this._currentTickState = this._animateCursor(this, 1, this.cursorDuration, "_onTickComplete");
  }, _animateCursor: function(s, o, l, p) {
    var n;
    return n = { isAborted: !1, abort: function() {
      this.isAborted = !0;
    } }, s.animate("_currentCursorOpacity", o, { duration: l, onComplete: function() {
      n.isAborted || s[p]();
    }, onChange: function() {
      s.canvas && s.selectionStart === s.selectionEnd && s.renderCursorOrSelection();
    }, abort: function() {
      return n.isAborted;
    } }), n;
  }, _onTickComplete: function() {
    var s = this;
    this._cursorTimeout1 && clearTimeout(this._cursorTimeout1), this._cursorTimeout1 = setTimeout(function() {
      s._currentTickCompleteState = s._animateCursor(s, 0, this.cursorDuration / 2, "_tick");
    }, 100);
  }, initDelayedCursor: function(s) {
    var o = this, l = s ? 0 : this.cursorDelay;
    this.abortCursorAnimation(), this._currentCursorOpacity = 1, this._cursorTimeout2 = setTimeout(function() {
      o._tick();
    }, l);
  }, abortCursorAnimation: function() {
    var s = this._currentTickState || this._currentTickCompleteState, o = this.canvas;
    this._currentTickState && this._currentTickState.abort(), this._currentTickCompleteState && this._currentTickCompleteState.abort(), clearTimeout(this._cursorTimeout1), clearTimeout(this._cursorTimeout2), this._currentCursorOpacity = 0, s && o && o.clearContext(o.contextTop || o.contextContainer);
  }, selectAll: function() {
    return this.selectionStart = 0, this.selectionEnd = this._text.length, this._fireSelectionChanged(), this._updateTextarea(), this;
  }, getSelectedText: function() {
    return this._text.slice(this.selectionStart, this.selectionEnd).join("");
  }, findWordBoundaryLeft: function(s) {
    var o = 0, l = s - 1;
    if (this._reSpace.test(this._text[l])) for (; this._reSpace.test(this._text[l]); ) o++, l--;
    for (; /\S/.test(this._text[l]) && l > -1; ) o++, l--;
    return s - o;
  }, findWordBoundaryRight: function(s) {
    var o = 0, l = s;
    if (this._reSpace.test(this._text[l])) for (; this._reSpace.test(this._text[l]); ) o++, l++;
    for (; /\S/.test(this._text[l]) && l < this._text.length; ) o++, l++;
    return s + o;
  }, findLineBoundaryLeft: function(s) {
    for (var o = 0, l = s - 1; !/\n/.test(this._text[l]) && l > -1; ) o++, l--;
    return s - o;
  }, findLineBoundaryRight: function(s) {
    for (var o = 0, l = s; !/\n/.test(this._text[l]) && l < this._text.length; ) o++, l++;
    return s + o;
  }, searchWordBoundary: function(s, o) {
    for (var l = this._text, p = this._reSpace.test(l[s]) ? s - 1 : s, n = l[p], r = v.reNonWord; !r.test(n) && p > 0 && p < l.length; ) n = l[p += o];
    return r.test(n) && (p += o === 1 ? 0 : 1), p;
  }, selectWord: function(s) {
    s = s || this.selectionStart;
    var o = this.searchWordBoundary(s, -1), l = this.searchWordBoundary(s, 1);
    this.selectionStart = o, this.selectionEnd = l, this._fireSelectionChanged(), this._updateTextarea(), this.renderCursorOrSelection();
  }, selectLine: function(s) {
    s = s || this.selectionStart;
    var o = this.findLineBoundaryLeft(s), l = this.findLineBoundaryRight(s);
    return this.selectionStart = o, this.selectionEnd = l, this._fireSelectionChanged(), this._updateTextarea(), this;
  }, enterEditing: function(s) {
    if (!this.isEditing && this.editable) return this.canvas && (this.canvas.calcOffset(), this.exitEditingOnOthers(this.canvas)), this.isEditing = !0, this.initHiddenTextarea(s), this.hiddenTextarea.focus(), this.hiddenTextarea.value = this.text, this._updateTextarea(), this._saveEditingProps(), this._setEditingProps(), this._textBeforeEdit = this.text, this._tick(), this.fire("editing:entered"), this._fireSelectionChanged(), this.canvas ? (this.canvas.fire("text:editing:entered", { target: this }), this.initMouseMoveHandler(), this.canvas.requestRenderAll(), this) : this;
  }, exitEditingOnOthers: function(s) {
    s._iTextInstances && s._iTextInstances.forEach(function(o) {
      o.selected = !1, o.isEditing && o.exitEditing();
    });
  }, initMouseMoveHandler: function() {
    this.canvas.on("mouse:move", this.mouseMoveHandler);
  }, mouseMoveHandler: function(s) {
    if (this.__isMousedown && this.isEditing) {
      var o = this.getSelectionStartFromPointer(s.e), l = this.selectionStart, p = this.selectionEnd;
      (o === this.__selectionStartOnMouseDown && l !== p || l !== o && p !== o) && (o > this.__selectionStartOnMouseDown ? (this.selectionStart = this.__selectionStartOnMouseDown, this.selectionEnd = o) : (this.selectionStart = o, this.selectionEnd = this.__selectionStartOnMouseDown), this.selectionStart === l && this.selectionEnd === p || (this.restartCursorIfNeeded(), this._fireSelectionChanged(), this._updateTextarea(), this.renderCursorOrSelection()));
    }
  }, _setEditingProps: function() {
    this.hoverCursor = "text", this.canvas && (this.canvas.defaultCursor = this.canvas.moveCursor = "text"), this.borderColor = this.editingBorderColor, this.hasControls = this.selectable = !1, this.lockMovementX = this.lockMovementY = !0;
  }, fromStringToGraphemeSelection: function(s, o, l) {
    var p = l.slice(0, s), n = v.util.string.graphemeSplit(p).length;
    if (s === o) return { selectionStart: n, selectionEnd: n };
    var r = l.slice(s, o);
    return { selectionStart: n, selectionEnd: n + v.util.string.graphemeSplit(r).length };
  }, fromGraphemeToStringSelection: function(s, o, l) {
    var p = l.slice(0, s).join("").length;
    return s === o ? { selectionStart: p, selectionEnd: p } : { selectionStart: p, selectionEnd: p + l.slice(s, o).join("").length };
  }, _updateTextarea: function() {
    if (this.cursorOffsetCache = {}, this.hiddenTextarea) {
      if (!this.inCompositionMode) {
        var s = this.fromGraphemeToStringSelection(this.selectionStart, this.selectionEnd, this._text);
        this.hiddenTextarea.selectionStart = s.selectionStart, this.hiddenTextarea.selectionEnd = s.selectionEnd;
      }
      this.updateTextareaPosition();
    }
  }, updateFromTextArea: function() {
    if (this.hiddenTextarea) {
      this.cursorOffsetCache = {}, this.text = this.hiddenTextarea.value, this._shouldClearDimensionCache() && (this.initDimensions(), this.setCoords());
      var s = this.fromStringToGraphemeSelection(this.hiddenTextarea.selectionStart, this.hiddenTextarea.selectionEnd, this.hiddenTextarea.value);
      this.selectionEnd = this.selectionStart = s.selectionEnd, this.inCompositionMode || (this.selectionStart = s.selectionStart), this.updateTextareaPosition();
    }
  }, updateTextareaPosition: function() {
    if (this.selectionStart === this.selectionEnd) {
      var s = this._calcTextareaPosition();
      this.hiddenTextarea.style.left = s.left, this.hiddenTextarea.style.top = s.top;
    }
  }, _calcTextareaPosition: function() {
    if (!this.canvas) return { x: 1, y: 1 };
    var s = this.inCompositionMode ? this.compositionStart : this.selectionStart, o = this._getCursorBoundaries(s), l = this.get2DCursorLocation(s), p = l.lineIndex, n = l.charIndex, r = this.getValueOfPropertyAt(p, n, "fontSize") * this.lineHeight, a = o.leftOffset, h = this.calcTransformMatrix(), u = { x: o.left + a, y: o.top + o.topOffset + r }, d = this.canvas.getRetinaScaling(), g = this.canvas.upperCanvasEl, y = g.width / d, x = g.height / d, C = y - r, b = x - r, M = g.clientWidth / y, P = g.clientHeight / x;
    return u = v.util.transformPoint(u, h), (u = v.util.transformPoint(u, this.canvas.viewportTransform)).x *= M, u.y *= P, u.x < 0 && (u.x = 0), u.x > C && (u.x = C), u.y < 0 && (u.y = 0), u.y > b && (u.y = b), u.x += this.canvas._offset.left, u.y += this.canvas._offset.top, { left: u.x + "px", top: u.y + "px", fontSize: r + "px", charHeight: r };
  }, _saveEditingProps: function() {
    this._savedProps = { hasControls: this.hasControls, borderColor: this.borderColor, lockMovementX: this.lockMovementX, lockMovementY: this.lockMovementY, hoverCursor: this.hoverCursor, selectable: this.selectable, defaultCursor: this.canvas && this.canvas.defaultCursor, moveCursor: this.canvas && this.canvas.moveCursor };
  }, _restoreEditingProps: function() {
    this._savedProps && (this.hoverCursor = this._savedProps.hoverCursor, this.hasControls = this._savedProps.hasControls, this.borderColor = this._savedProps.borderColor, this.selectable = this._savedProps.selectable, this.lockMovementX = this._savedProps.lockMovementX, this.lockMovementY = this._savedProps.lockMovementY, this.canvas && (this.canvas.defaultCursor = this._savedProps.defaultCursor, this.canvas.moveCursor = this._savedProps.moveCursor));
  }, exitEditing: function() {
    var s = this._textBeforeEdit !== this.text, o = this.hiddenTextarea;
    return this.selected = !1, this.isEditing = !1, this.selectionEnd = this.selectionStart, o && (o.blur && o.blur(), o.parentNode && o.parentNode.removeChild(o)), this.hiddenTextarea = null, this.abortCursorAnimation(), this._restoreEditingProps(), this._currentCursorOpacity = 0, this._shouldClearDimensionCache() && (this.initDimensions(), this.setCoords()), this.fire("editing:exited"), s && this.fire("modified"), this.canvas && (this.canvas.off("mouse:move", this.mouseMoveHandler), this.canvas.fire("text:editing:exited", { target: this }), s && this.canvas.fire("object:modified", { target: this })), this;
  }, _removeExtraneousStyles: function() {
    for (var s in this.styles) this._textLines[s] || delete this.styles[s];
  }, removeStyleFromTo: function(s, o) {
    var l, p, n = this.get2DCursorLocation(s, !0), r = this.get2DCursorLocation(o, !0), a = n.lineIndex, h = n.charIndex, u = r.lineIndex, d = r.charIndex;
    if (a !== u) {
      if (this.styles[a]) for (l = h; l < this._unwrappedTextLines[a].length; l++) delete this.styles[a][l];
      if (this.styles[u]) for (l = d; l < this._unwrappedTextLines[u].length; l++) (p = this.styles[u][l]) && (this.styles[a] || (this.styles[a] = {}), this.styles[a][h + l - d] = p);
      for (l = a + 1; l <= u; l++) delete this.styles[l];
      this.shiftLineStyles(u, a - u);
    } else if (this.styles[a]) {
      p = this.styles[a];
      var g, y, x = d - h;
      for (l = h; l < d; l++) delete p[l];
      for (y in this.styles[a]) (g = parseInt(y, 10)) >= d && (p[g - x] = p[y], delete p[y]);
    }
  }, shiftLineStyles: function(s, o) {
    var l = he(this.styles);
    for (var p in this.styles) {
      var n = parseInt(p, 10);
      n > s && (this.styles[n + o] = l[n], l[n - o] || delete this.styles[n]);
    }
  }, restartCursorIfNeeded: function() {
    this._currentTickState && !this._currentTickState.isAborted && this._currentTickCompleteState && !this._currentTickCompleteState.isAborted || this.initDelayedCursor();
  }, insertNewlineStyleObject: function(s, o, l, p) {
    var n, r = {}, a = !1, h = this._unwrappedTextLines[s].length === o;
    for (var u in l || (l = 1), this.shiftLineStyles(s, l), this.styles[s] && (n = this.styles[s][o === 0 ? o : o - 1]), this.styles[s]) {
      var d = parseInt(u, 10);
      d >= o && (a = !0, r[d - o] = this.styles[s][u], h && o === 0 || delete this.styles[s][u]);
    }
    var g = !1;
    for (a && !h && (this.styles[s + l] = r, g = !0), g && l--; l > 0; ) p && p[l - 1] ? this.styles[s + l] = { 0: he(p[l - 1]) } : n ? this.styles[s + l] = { 0: he(n) } : delete this.styles[s + l], l--;
    this._forceClearCache = !0;
  }, insertCharStyleObject: function(s, o, l, p) {
    this.styles || (this.styles = {});
    var n = this.styles[s], r = n ? he(n) : {};
    for (var a in l || (l = 1), r) {
      var h = parseInt(a, 10);
      h >= o && (n[h + l] = r[h], r[h - l] || delete n[h]);
    }
    if (this._forceClearCache = !0, p) for (; l--; ) Object.keys(p[l]).length && (this.styles[s] || (this.styles[s] = {}), this.styles[s][o + l] = he(p[l]));
    else if (n) for (var u = n[o ? o - 1 : 1]; u && l--; ) this.styles[s][o + l] = he(u);
  }, insertNewStyleBlock: function(s, o, l) {
    for (var p = this.get2DCursorLocation(o, !0), n = [0], r = 0, a = 0; a < s.length; a++) s[a] === `
` ? n[++r] = 0 : n[r]++;
    for (n[0] > 0 && (this.insertCharStyleObject(p.lineIndex, p.charIndex, n[0], l), l = l && l.slice(n[0] + 1)), r && this.insertNewlineStyleObject(p.lineIndex, p.charIndex + n[0], r), a = 1; a < r; a++) n[a] > 0 ? this.insertCharStyleObject(p.lineIndex + a, 0, n[a], l) : l && (this.styles[p.lineIndex + a][0] = l[0]), l = l && l.slice(n[a] + 1);
    n[a] > 0 && this.insertCharStyleObject(p.lineIndex + a, 0, n[a], l);
  }, setSelectionStartEndWithShift: function(s, o, l) {
    l <= s ? (o === s ? this._selectionDirection = "left" : this._selectionDirection === "right" && (this._selectionDirection = "left", this.selectionEnd = s), this.selectionStart = l) : l > s && l < o ? this._selectionDirection === "right" ? this.selectionEnd = l : this.selectionStart = l : (o === s ? this._selectionDirection = "right" : this._selectionDirection === "left" && (this._selectionDirection = "right", this.selectionStart = o), this.selectionEnd = l);
  }, setSelectionInBoundaries: function() {
    var s = this.text.length;
    this.selectionStart > s ? this.selectionStart = s : this.selectionStart < 0 && (this.selectionStart = 0), this.selectionEnd > s ? this.selectionEnd = s : this.selectionEnd < 0 && (this.selectionEnd = 0);
  } }), v.util.object.extend(v.IText.prototype, { initDoubleClickSimulation: function() {
    this.__lastClickTime = +/* @__PURE__ */ new Date(), this.__lastLastClickTime = +/* @__PURE__ */ new Date(), this.__lastPointer = {}, this.on("mousedown", this.onMouseDown);
  }, onMouseDown: function(s) {
    if (this.canvas) {
      this.__newClickTime = +/* @__PURE__ */ new Date();
      var o = s.pointer;
      this.isTripleClick(o) && (this.fire("tripleclick", s), this._stopEvent(s.e)), this.__lastLastClickTime = this.__lastClickTime, this.__lastClickTime = this.__newClickTime, this.__lastPointer = o, this.__lastIsEditing = this.isEditing, this.__lastSelected = this.selected;
    }
  }, isTripleClick: function(s) {
    return this.__newClickTime - this.__lastClickTime < 500 && this.__lastClickTime - this.__lastLastClickTime < 500 && this.__lastPointer.x === s.x && this.__lastPointer.y === s.y;
  }, _stopEvent: function(s) {
    s.preventDefault && s.preventDefault(), s.stopPropagation && s.stopPropagation();
  }, initCursorSelectionHandlers: function() {
    this.initMousedownHandler(), this.initMouseupHandler(), this.initClicks();
  }, doubleClickHandler: function(s) {
    this.isEditing && this.selectWord(this.getSelectionStartFromPointer(s.e));
  }, tripleClickHandler: function(s) {
    this.isEditing && this.selectLine(this.getSelectionStartFromPointer(s.e));
  }, initClicks: function() {
    this.on("mousedblclick", this.doubleClickHandler), this.on("tripleclick", this.tripleClickHandler);
  }, _mouseDownHandler: function(s) {
    !this.canvas || !this.editable || s.e.button && s.e.button !== 1 || (this.__isMousedown = !0, this.selected && (this.inCompositionMode = !1, this.setCursorByClick(s.e)), this.isEditing && (this.__selectionStartOnMouseDown = this.selectionStart, this.selectionStart === this.selectionEnd && this.abortCursorAnimation(), this.renderCursorOrSelection()));
  }, _mouseDownHandlerBefore: function(s) {
    !this.canvas || !this.editable || s.e.button && s.e.button !== 1 || (this.selected = this === this.canvas._activeObject);
  }, initMousedownHandler: function() {
    this.on("mousedown", this._mouseDownHandler), this.on("mousedown:before", this._mouseDownHandlerBefore);
  }, initMouseupHandler: function() {
    this.on("mouseup", this.mouseUpHandler);
  }, mouseUpHandler: function(s) {
    if (this.__isMousedown = !1, !(!this.editable || this.group || s.transform && s.transform.actionPerformed || s.e.button && s.e.button !== 1)) {
      if (this.canvas) {
        var o = this.canvas._activeObject;
        if (o && o !== this) return;
      }
      this.__lastSelected && !this.__corner ? (this.selected = !1, this.__lastSelected = !1, this.enterEditing(s.e), this.selectionStart === this.selectionEnd ? this.initDelayedCursor(!0) : this.renderCursorOrSelection()) : this.selected = !0;
    }
  }, setCursorByClick: function(s) {
    var o = this.getSelectionStartFromPointer(s), l = this.selectionStart, p = this.selectionEnd;
    s.shiftKey ? this.setSelectionStartEndWithShift(l, p, o) : (this.selectionStart = o, this.selectionEnd = o), this.isEditing && (this._fireSelectionChanged(), this._updateTextarea());
  }, getSelectionStartFromPointer: function(s) {
    for (var o, l = this.getLocalPointer(s), p = 0, n = 0, r = 0, a = 0, h = 0, u = 0, d = this._textLines.length; u < d && r <= l.y; u++) r += this.getHeightOfLine(u) * this.scaleY, h = u, u > 0 && (a += this._textLines[u - 1].length + this.missingNewlineOffset(u - 1));
    n = this._getLineLeftOffset(h) * this.scaleX, o = this._textLines[h], this.direction === "rtl" && (l.x = this.width * this.scaleX - l.x + n);
    for (var g = 0, y = o.length; g < y && (p = n, (n += this.__charBounds[h][g].kernedWidth * this.scaleX) <= l.x); g++) a++;
    return this._getNewSelectionStartFromOffset(l, p, n, a, y);
  }, _getNewSelectionStartFromOffset: function(s, o, l, p, n) {
    var r = s.x - o, a = l - s.x, h = p + (a > r || a < 0 ? 0 : 1);
    return this.flipX && (h = n - h), h > this._text.length && (h = this._text.length), h;
  } }), v.util.object.extend(v.IText.prototype, { initHiddenTextarea: function() {
    this.hiddenTextarea = v.document.createElement("textarea"), this.hiddenTextarea.setAttribute("autocapitalize", "off"), this.hiddenTextarea.setAttribute("autocorrect", "off"), this.hiddenTextarea.setAttribute("autocomplete", "off"), this.hiddenTextarea.setAttribute("spellcheck", "false"), this.hiddenTextarea.setAttribute("data-fabric-hiddentextarea", ""), this.hiddenTextarea.setAttribute("wrap", "off");
    var s = this._calcTextareaPosition();
    this.hiddenTextarea.style.cssText = "position: absolute; top: " + s.top + "; left: " + s.left + "; z-index: -999; opacity: 0; width: 1px; height: 1px; font-size: 1px; paddingｰtop: " + s.fontSize + ";", this.hiddenTextareaContainer ? this.hiddenTextareaContainer.appendChild(this.hiddenTextarea) : v.document.body.appendChild(this.hiddenTextarea), v.util.addListener(this.hiddenTextarea, "keydown", this.onKeyDown.bind(this)), v.util.addListener(this.hiddenTextarea, "keyup", this.onKeyUp.bind(this)), v.util.addListener(this.hiddenTextarea, "input", this.onInput.bind(this)), v.util.addListener(this.hiddenTextarea, "copy", this.copy.bind(this)), v.util.addListener(this.hiddenTextarea, "cut", this.copy.bind(this)), v.util.addListener(this.hiddenTextarea, "paste", this.paste.bind(this)), v.util.addListener(this.hiddenTextarea, "compositionstart", this.onCompositionStart.bind(this)), v.util.addListener(this.hiddenTextarea, "compositionupdate", this.onCompositionUpdate.bind(this)), v.util.addListener(this.hiddenTextarea, "compositionend", this.onCompositionEnd.bind(this)), !this._clickHandlerInitialized && this.canvas && (v.util.addListener(this.canvas.upperCanvasEl, "click", this.onClick.bind(this)), this._clickHandlerInitialized = !0);
  }, keysMap: { 9: "exitEditing", 27: "exitEditing", 33: "moveCursorUp", 34: "moveCursorDown", 35: "moveCursorRight", 36: "moveCursorLeft", 37: "moveCursorLeft", 38: "moveCursorUp", 39: "moveCursorRight", 40: "moveCursorDown" }, keysMapRtl: { 9: "exitEditing", 27: "exitEditing", 33: "moveCursorUp", 34: "moveCursorDown", 35: "moveCursorLeft", 36: "moveCursorRight", 37: "moveCursorRight", 38: "moveCursorUp", 39: "moveCursorLeft", 40: "moveCursorDown" }, ctrlKeysMapUp: { 67: "copy", 88: "cut" }, ctrlKeysMapDown: { 65: "selectAll" }, onClick: function() {
    this.hiddenTextarea && this.hiddenTextarea.focus();
  }, onKeyDown: function(s) {
    if (this.isEditing) {
      var o = this.direction === "rtl" ? this.keysMapRtl : this.keysMap;
      if (s.keyCode in o) this[o[s.keyCode]](s);
      else {
        if (!(s.keyCode in this.ctrlKeysMapDown) || !s.ctrlKey && !s.metaKey) return;
        this[this.ctrlKeysMapDown[s.keyCode]](s);
      }
      s.stopImmediatePropagation(), s.preventDefault(), s.keyCode >= 33 && s.keyCode <= 40 ? (this.inCompositionMode = !1, this.clearContextTop(), this.renderCursorOrSelection()) : this.canvas && this.canvas.requestRenderAll();
    }
  }, onKeyUp: function(s) {
    !this.isEditing || this._copyDone || this.inCompositionMode ? this._copyDone = !1 : s.keyCode in this.ctrlKeysMapUp && (s.ctrlKey || s.metaKey) && (this[this.ctrlKeysMapUp[s.keyCode]](s), s.stopImmediatePropagation(), s.preventDefault(), this.canvas && this.canvas.requestRenderAll());
  }, onInput: function(s) {
    var o = this.fromPaste;
    if (this.fromPaste = !1, s && s.stopPropagation(), this.isEditing) {
      var l, p, n, r, a, h = this._splitTextIntoLines(this.hiddenTextarea.value).graphemeText, u = this._text.length, d = h.length, g = d - u, y = this.selectionStart, x = this.selectionEnd, C = y !== x;
      if (this.hiddenTextarea.value === "") return this.styles = {}, this.updateFromTextArea(), this.fire("changed"), void (this.canvas && (this.canvas.fire("text:changed", { target: this }), this.canvas.requestRenderAll()));
      var b = this.fromStringToGraphemeSelection(this.hiddenTextarea.selectionStart, this.hiddenTextarea.selectionEnd, this.hiddenTextarea.value), M = y > b.selectionStart;
      C ? (l = this._text.slice(y, x), g += x - y) : d < u && (l = M ? this._text.slice(x + g, x) : this._text.slice(y, y - g)), p = h.slice(b.selectionEnd - g, b.selectionEnd), l && l.length && (p.length && (n = this.getSelectionStyles(y, y + 1, !1), n = p.map(function() {
        return n[0];
      })), C ? (r = y, a = x) : M ? (r = x - l.length, a = x) : (r = x, a = x + l.length), this.removeStyleFromTo(r, a)), p.length && (o && p.join("") === v.copiedText && !v.disableStyleCopyPaste && (n = v.copiedTextStyle), this.insertNewStyleBlock(p, y, n)), this.updateFromTextArea(), this.fire("changed"), this.canvas && (this.canvas.fire("text:changed", { target: this }), this.canvas.requestRenderAll());
    }
  }, onCompositionStart: function() {
    this.inCompositionMode = !0;
  }, onCompositionEnd: function() {
    this.inCompositionMode = !1;
  }, onCompositionUpdate: function(s) {
    this.compositionStart = s.target.selectionStart, this.compositionEnd = s.target.selectionEnd, this.updateTextareaPosition();
  }, copy: function() {
    this.selectionStart !== this.selectionEnd && (v.copiedText = this.getSelectedText(), v.disableStyleCopyPaste ? v.copiedTextStyle = null : v.copiedTextStyle = this.getSelectionStyles(this.selectionStart, this.selectionEnd, !0), this._copyDone = !0);
  }, paste: function() {
    this.fromPaste = !0;
  }, _getClipboardData: function(s) {
    return s && s.clipboardData || v.window.clipboardData;
  }, _getWidthBeforeCursor: function(s, o) {
    var l, p = this._getLineLeftOffset(s);
    return o > 0 && (p += (l = this.__charBounds[s][o - 1]).left + l.width), p;
  }, getDownCursorOffset: function(s, o) {
    var l = this._getSelectionForOffset(s, o), p = this.get2DCursorLocation(l), n = p.lineIndex;
    if (n === this._textLines.length - 1 || s.metaKey || s.keyCode === 34) return this._text.length - l;
    var r = p.charIndex, a = this._getWidthBeforeCursor(n, r), h = this._getIndexOnLine(n + 1, a);
    return this._textLines[n].slice(r).length + h + 1 + this.missingNewlineOffset(n);
  }, _getSelectionForOffset: function(s, o) {
    return s.shiftKey && this.selectionStart !== this.selectionEnd && o ? this.selectionEnd : this.selectionStart;
  }, getUpCursorOffset: function(s, o) {
    var l = this._getSelectionForOffset(s, o), p = this.get2DCursorLocation(l), n = p.lineIndex;
    if (n === 0 || s.metaKey || s.keyCode === 33) return -l;
    var r = p.charIndex, a = this._getWidthBeforeCursor(n, r), h = this._getIndexOnLine(n - 1, a), u = this._textLines[n].slice(0, r), d = this.missingNewlineOffset(n - 1);
    return -this._textLines[n - 1].length + h - u.length + (1 - d);
  }, _getIndexOnLine: function(s, o) {
    for (var l, p, n = this._textLines[s], r = this._getLineLeftOffset(s), a = 0, h = 0, u = n.length; h < u; h++) if ((r += l = this.__charBounds[s][h].width) > o) {
      p = !0;
      var d = r - l, g = r, y = Math.abs(d - o);
      a = Math.abs(g - o) < y ? h : h - 1;
      break;
    }
    return p || (a = n.length - 1), a;
  }, moveCursorDown: function(s) {
    this.selectionStart >= this._text.length && this.selectionEnd >= this._text.length || this._moveCursorUpOrDown("Down", s);
  }, moveCursorUp: function(s) {
    this.selectionStart === 0 && this.selectionEnd === 0 || this._moveCursorUpOrDown("Up", s);
  }, _moveCursorUpOrDown: function(s, o) {
    var l = this["get" + s + "CursorOffset"](o, this._selectionDirection === "right");
    o.shiftKey ? this.moveCursorWithShift(l) : this.moveCursorWithoutShift(l), l !== 0 && (this.setSelectionInBoundaries(), this.abortCursorAnimation(), this._currentCursorOpacity = 1, this.initDelayedCursor(), this._fireSelectionChanged(), this._updateTextarea());
  }, moveCursorWithShift: function(s) {
    var o = this._selectionDirection === "left" ? this.selectionStart + s : this.selectionEnd + s;
    return this.setSelectionStartEndWithShift(this.selectionStart, this.selectionEnd, o), s !== 0;
  }, moveCursorWithoutShift: function(s) {
    return s < 0 ? (this.selectionStart += s, this.selectionEnd = this.selectionStart) : (this.selectionEnd += s, this.selectionStart = this.selectionEnd), s !== 0;
  }, moveCursorLeft: function(s) {
    this.selectionStart === 0 && this.selectionEnd === 0 || this._moveCursorLeftOrRight("Left", s);
  }, _move: function(s, o, l) {
    var p;
    if (s.altKey) p = this["findWordBoundary" + l](this[o]);
    else {
      if (!s.metaKey && s.keyCode !== 35 && s.keyCode !== 36) return this[o] += l === "Left" ? -1 : 1, !0;
      p = this["findLineBoundary" + l](this[o]);
    }
    if (typeof p !== void 0 && this[o] !== p) return this[o] = p, !0;
  }, _moveLeft: function(s, o) {
    return this._move(s, o, "Left");
  }, _moveRight: function(s, o) {
    return this._move(s, o, "Right");
  }, moveCursorLeftWithoutShift: function(s) {
    var o = !0;
    return this._selectionDirection = "left", this.selectionEnd === this.selectionStart && this.selectionStart !== 0 && (o = this._moveLeft(s, "selectionStart")), this.selectionEnd = this.selectionStart, o;
  }, moveCursorLeftWithShift: function(s) {
    return this._selectionDirection === "right" && this.selectionStart !== this.selectionEnd ? this._moveLeft(s, "selectionEnd") : this.selectionStart !== 0 ? (this._selectionDirection = "left", this._moveLeft(s, "selectionStart")) : void 0;
  }, moveCursorRight: function(s) {
    this.selectionStart >= this._text.length && this.selectionEnd >= this._text.length || this._moveCursorLeftOrRight("Right", s);
  }, _moveCursorLeftOrRight: function(s, o) {
    var l = "moveCursor" + s + "With";
    this._currentCursorOpacity = 1, o.shiftKey ? l += "Shift" : l += "outShift", this[l](o) && (this.abortCursorAnimation(), this.initDelayedCursor(), this._fireSelectionChanged(), this._updateTextarea());
  }, moveCursorRightWithShift: function(s) {
    return this._selectionDirection === "left" && this.selectionStart !== this.selectionEnd ? this._moveRight(s, "selectionStart") : this.selectionEnd !== this._text.length ? (this._selectionDirection = "right", this._moveRight(s, "selectionEnd")) : void 0;
  }, moveCursorRightWithoutShift: function(s) {
    var o = !0;
    return this._selectionDirection = "right", this.selectionStart === this.selectionEnd ? (o = this._moveRight(s, "selectionStart"), this.selectionEnd = this.selectionStart) : this.selectionStart = this.selectionEnd, o;
  }, removeChars: function(s, o) {
    o === void 0 && (o = s + 1), this.removeStyleFromTo(s, o), this._text.splice(s, o - s), this.text = this._text.join(""), this.set("dirty", !0), this._shouldClearDimensionCache() && (this.initDimensions(), this.setCoords()), this._removeExtraneousStyles();
  }, insertChars: function(s, o, l, p) {
    p === void 0 && (p = l), p > l && this.removeStyleFromTo(l, p);
    var n = v.util.string.graphemeSplit(s);
    this.insertNewStyleBlock(n, l, o), this._text = [].concat(this._text.slice(0, l), n, this._text.slice(p)), this.text = this._text.join(""), this.set("dirty", !0), this._shouldClearDimensionCache() && (this.initDimensions(), this.setCoords()), this._removeExtraneousStyles();
  } }), function() {
    var s = v.util.toFixed, o = /  +/g;
    v.util.object.extend(v.Text.prototype, { _toSVG: function() {
      var l = this._getSVGLeftTopOffsets(), p = this._getSVGTextAndBg(l.textTop, l.textLeft);
      return this._wrapSVGTextAndBg(p);
    }, toSVG: function(l) {
      return this._createBaseSVGMarkup(this._toSVG(), { reviver: l, noStyle: !0, withShadow: !0 });
    }, _getSVGLeftTopOffsets: function() {
      return { textLeft: -this.width / 2, textTop: -this.height / 2, lineTop: this.getHeightOfLine(0) };
    }, _wrapSVGTextAndBg: function(l) {
      var p = this.getSvgTextDecoration(this);
      return [l.textBgRects.join(""), '		<text xml:space="preserve" ', this.fontFamily ? 'font-family="' + this.fontFamily.replace(/"/g, "'") + '" ' : "", this.fontSize ? 'font-size="' + this.fontSize + '" ' : "", this.fontStyle ? 'font-style="' + this.fontStyle + '" ' : "", this.fontWeight ? 'font-weight="' + this.fontWeight + '" ' : "", p ? 'text-decoration="' + p + '" ' : "", 'style="', this.getSvgStyles(!0), '"', this.addPaintOrder(), " >", l.textSpans.join(""), `</text>
`];
    }, _getSVGTextAndBg: function(l, p) {
      var n, r = [], a = [], h = l;
      this._setSVGBg(a);
      for (var u = 0, d = this._textLines.length; u < d; u++) n = this._getLineLeftOffset(u), (this.textBackgroundColor || this.styleHas("textBackgroundColor", u)) && this._setSVGTextLineBg(a, u, p + n, h), this._setSVGTextLineText(r, u, p + n, h), h += this.getHeightOfLine(u);
      return { textSpans: r, textBgRects: a };
    }, _createTextCharSpan: function(l, p, n, r) {
      var a = l !== l.trim() || l.match(o), h = this.getSvgSpanStyles(p, a), u = h ? 'style="' + h + '"' : "", d = p.deltaY, g = "", y = v.Object.NUM_FRACTION_DIGITS;
      return d && (g = ' dy="' + s(d, y) + '" '), ['<tspan x="', s(n, y), '" y="', s(r, y), '" ', g, u, ">", v.util.string.escapeXml(l), "</tspan>"].join("");
    }, _setSVGTextLineText: function(l, p, n, r) {
      var a, h, u, d, g, y = this.getHeightOfLine(p), x = this.textAlign.indexOf("justify") !== -1, C = "", b = 0, M = this._textLines[p];
      r += y * (1 - this._fontSizeFraction) / this.lineHeight;
      for (var P = 0, _ = M.length - 1; P <= _; P++) g = P === _ || this.charSpacing, C += M[P], u = this.__charBounds[p][P], b === 0 ? (n += u.kernedWidth - u.width, b += u.width) : b += u.kernedWidth, x && !g && this._reSpaceAndTab.test(M[P]) && (g = !0), g || (a = a || this.getCompleteStyleDeclaration(p, P), h = this.getCompleteStyleDeclaration(p, P + 1), g = this._hasStyleChangedForSvg(a, h)), g && (d = this._getStyleDeclaration(p, P) || {}, l.push(this._createTextCharSpan(C, d, n, r)), C = "", a = h, n += b, b = 0);
    }, _pushTextBgRect: function(l, p, n, r, a, h) {
      var u = v.Object.NUM_FRACTION_DIGITS;
      l.push("		<rect ", this._getFillAttributes(p), ' x="', s(n, u), '" y="', s(r, u), '" width="', s(a, u), '" height="', s(h, u), `"></rect>
`);
    }, _setSVGTextLineBg: function(l, p, n, r) {
      for (var a, h, u = this._textLines[p], d = this.getHeightOfLine(p) / this.lineHeight, g = 0, y = 0, x = this.getValueOfPropertyAt(p, 0, "textBackgroundColor"), C = 0, b = u.length; C < b; C++) a = this.__charBounds[p][C], (h = this.getValueOfPropertyAt(p, C, "textBackgroundColor")) !== x ? (x && this._pushTextBgRect(l, x, n + y, r, g, d), y = a.left, g = a.width, x = h) : g += a.kernedWidth;
      h && this._pushTextBgRect(l, h, n + y, r, g, d);
    }, _getFillAttributes: function(l) {
      var p = l && typeof l == "string" ? new v.Color(l) : "";
      return p && p.getSource() && p.getAlpha() !== 1 ? 'opacity="' + p.getAlpha() + '" fill="' + p.setAlpha(1).toRgb() + '"' : 'fill="' + l + '"';
    }, _getSVGLineTopOffset: function(l) {
      for (var p, n = 0, r = 0; r < l; r++) n += this.getHeightOfLine(r);
      return p = this.getHeightOfLine(r), { lineTop: n, offset: (this._fontSizeMult - this._fontSizeFraction) * p / (this.lineHeight * this._fontSizeMult) };
    }, getSvgStyles: function(l) {
      return v.Object.prototype.getSvgStyles.call(this, l) + " white-space: pre;";
    } });
  }(), function(s) {
    var o = s.fabric || (s.fabric = {});
    o.Textbox = o.util.createClass(o.IText, o.Observable, { type: "textbox", minWidth: 20, dynamicMinWidth: 2, __cachedLines: null, lockScalingFlip: !0, noScaleCache: !1, _dimensionAffectingProps: o.Text.prototype._dimensionAffectingProps.concat("width"), _wordJoiners: /[ \t\r]/, splitByGrapheme: !1, initDimensions: function() {
      this.__skipDimension || (this.isEditing && this.initDelayedCursor(), this.clearContextTop(), this._clearCache(), this.dynamicMinWidth = 0, this._styleMap = this._generateStyleMap(this._splitText()), this.dynamicMinWidth > this.width && this._set("width", this.dynamicMinWidth), this.textAlign.indexOf("justify") !== -1 && this.enlargeSpaces(), this.height = this.calcTextHeight(), this.saveState({ propertySet: "_dimensionAffectingProps" }));
    }, _generateStyleMap: function(l) {
      for (var p = 0, n = 0, r = 0, a = {}, h = 0; h < l.graphemeLines.length; h++) l.graphemeText[r] === `
` && h > 0 ? (n = 0, r++, p++) : !this.splitByGrapheme && this._reSpaceAndTab.test(l.graphemeText[r]) && h > 0 && (n++, r++), a[h] = { line: p, offset: n }, r += l.graphemeLines[h].length, n += l.graphemeLines[h].length;
      return a;
    }, styleHas: function(l, p) {
      if (this._styleMap && !this.isWrapping) {
        var n = this._styleMap[p];
        n && (p = n.line);
      }
      return o.Text.prototype.styleHas.call(this, l, p);
    }, isEmptyStyles: function(l) {
      if (!this.styles) return !0;
      var p, n, r = 0, a = !1, h = this._styleMap[l], u = this._styleMap[l + 1];
      for (var d in h && (l = h.line, r = h.offset), u && (a = u.line === l, p = u.offset), n = l === void 0 ? this.styles : { line: this.styles[l] }) for (var g in n[d]) if (g >= r && (!a || g < p)) for (var y in n[d][g]) return !1;
      return !0;
    }, _getStyleDeclaration: function(l, p) {
      if (this._styleMap && !this.isWrapping) {
        var n = this._styleMap[l];
        if (!n) return null;
        l = n.line, p = n.offset + p;
      }
      return this.callSuper("_getStyleDeclaration", l, p);
    }, _setStyleDeclaration: function(l, p, n) {
      var r = this._styleMap[l];
      l = r.line, p = r.offset + p, this.styles[l][p] = n;
    }, _deleteStyleDeclaration: function(l, p) {
      var n = this._styleMap[l];
      l = n.line, p = n.offset + p, delete this.styles[l][p];
    }, _getLineStyle: function(l) {
      var p = this._styleMap[l];
      return !!this.styles[p.line];
    }, _setLineStyle: function(l) {
      var p = this._styleMap[l];
      this.styles[p.line] = {};
    }, _wrapText: function(l, p) {
      var n, r = [];
      for (this.isWrapping = !0, n = 0; n < l.length; n++) r = r.concat(this._wrapLine(l[n], n, p));
      return this.isWrapping = !1, r;
    }, _measureWord: function(l, p, n) {
      var r, a = 0;
      n = n || 0;
      for (var h = 0, u = l.length; h < u; h++)
        a += this._getGraphemeBox(l[h], p, h + n, r, !0).kernedWidth, r = l[h];
      return a;
    }, _wrapLine: function(l, p, n, r) {
      var a = 0, h = this.splitByGrapheme, u = [], d = [], g = h ? o.util.string.graphemeSplit(l) : l.split(this._wordJoiners), y = "", x = 0, C = h ? "" : " ", b = 0, M = 0, P = 0, _ = !0, k = this._getWidthOfCharSpacing();
      r = r || 0, g.length === 0 && g.push([]), n -= r;
      for (var L = 0; L < g.length; L++) y = h ? g[L] : o.util.string.graphemeSplit(g[L]), b = this._measureWord(y, p, x), x += y.length, (a += M + b - k) > n && !_ ? (u.push(d), d = [], a = b, _ = !0) : a += k, _ || h || d.push(C), d = d.concat(y), M = h ? 0 : this._measureWord([C], p, x), x++, _ = !1, b > P && (P = b);
      return L && u.push(d), P + r > this.dynamicMinWidth && (this.dynamicMinWidth = P - k + r), u;
    }, isEndOfWrapping: function(l) {
      return !this._styleMap[l + 1] || this._styleMap[l + 1].line !== this._styleMap[l].line;
    }, missingNewlineOffset: function(l) {
      return this.splitByGrapheme ? this.isEndOfWrapping(l) ? 1 : 0 : 1;
    }, _splitTextIntoLines: function(l) {
      for (var p = o.Text.prototype._splitTextIntoLines.call(this, l), n = this._wrapText(p.lines, this.width), r = new Array(n.length), a = 0; a < n.length; a++) r[a] = n[a].join("");
      return p.lines = r, p.graphemeLines = n, p;
    }, getMinWidth: function() {
      return Math.max(this.minWidth, this.dynamicMinWidth);
    }, _removeExtraneousStyles: function() {
      var l = {};
      for (var p in this._styleMap) this._textLines[p] && (l[this._styleMap[p].line] = 1);
      for (var p in this.styles) l[p] || delete this.styles[p];
    }, toObject: function(l) {
      return this.callSuper("toObject", ["minWidth", "splitByGrapheme"].concat(l));
    } }), o.Textbox.fromObject = function(l, p) {
      return o.Object._fromObject("Textbox", l, p, "text");
    };
  }(e), function() {
    var s = v.controlsUtils, o = s.scaleSkewCursorStyleHandler, l = s.scaleCursorStyleHandler, p = s.scalingEqually, n = s.scalingYOrSkewingX, r = s.scalingXOrSkewingY, a = s.scaleOrSkewActionName, h = v.Object.prototype.controls;
    if (h.ml = new v.Control({ x: -0.5, y: 0, cursorStyleHandler: o, actionHandler: r, getActionName: a }), h.mr = new v.Control({ x: 0.5, y: 0, cursorStyleHandler: o, actionHandler: r, getActionName: a }), h.mb = new v.Control({ x: 0, y: 0.5, cursorStyleHandler: o, actionHandler: n, getActionName: a }), h.mt = new v.Control({ x: 0, y: -0.5, cursorStyleHandler: o, actionHandler: n, getActionName: a }), h.tl = new v.Control({ x: -0.5, y: -0.5, cursorStyleHandler: l, actionHandler: p }), h.tr = new v.Control({ x: 0.5, y: -0.5, cursorStyleHandler: l, actionHandler: p }), h.bl = new v.Control({ x: -0.5, y: 0.5, cursorStyleHandler: l, actionHandler: p }), h.br = new v.Control({ x: 0.5, y: 0.5, cursorStyleHandler: l, actionHandler: p }), h.mtr = new v.Control({ x: 0, y: -0.5, actionHandler: s.rotationWithSnapping, cursorStyleHandler: s.rotationStyleHandler, offsetY: -40, withConnection: !0, actionName: "rotate" }), v.Textbox) {
      var u = v.Textbox.prototype.controls = {};
      u.mtr = h.mtr, u.tr = h.tr, u.br = h.br, u.tl = h.tl, u.bl = h.bl, u.mt = h.mt, u.mb = h.mb, u.mr = new v.Control({ x: 0.5, y: 0, actionHandler: s.changeWidth, cursorStyleHandler: o, actionName: "resizing" }), u.ml = new v.Control({ x: -0.5, y: 0, actionHandler: s.changeWidth, cursorStyleHandler: o, actionName: "resizing" });
    }
  }(), function() {
    var s = v.Object.prototype._set, o = v.Object.prototype.render, l = v.Object.prototype.toObject, p = v.Object.prototype._createBaseSVGMarkup;
    v.util.object.extend(v.Object.prototype, { erasable: !0, getEraser: function() {
      return this.clipPath && this.clipPath.eraser ? this.clipPath : void 0;
    }, getClipPath: function() {
      var h = this.getEraser();
      return h ? h._objects[0].clipPath : this.clipPath;
    }, setClipPath: function(h) {
      var u = this.getEraser();
      (u ? u._objects[0] : this).set("clipPath", h), this.set("dirty", !0);
    }, _updateEraserDimensions: function(h, u) {
      var d = this.getEraser();
      if (d) {
        var g = d._objects[0], y = { width: g.width, height: g.height }, x = this._getNonTransformedDimensions(), C = v.util.object.extend({ width: x.x, height: x.y }, h);
        if (y.width === C.width && y.height === C.height) return;
        var b = new v.Point((y.width - C.width) / 2, (y.height - C.height) / 2);
        d.set(C), d.setPositionByOrigin(new v.Point(0, 0), "center", "center"), g.set(C), d.set("dirty", !0), u || d.getObjects("path").forEach(function(M) {
          M.setPositionByOrigin(M.getCenterPoint().add(b), "center", "center");
        }), this.setCoords();
      }
    }, _set: function(h, u) {
      return s.call(this, h, u), h !== "width" && h !== "height" || this._updateEraserDimensions(), this;
    }, render: function(h) {
      this._updateEraserDimensions(), o.call(this, h);
    }, toObject: function(h) {
      return l.call(this, ["erasable"].concat(h));
    }, eraserToSVG: function(h) {
      var u = this.getEraser();
      if (u) {
        var d = u._objects[0].fill;
        u._objects[0].fill = "white", u.clipPathId = "CLIPPATH_" + v.Object.__uid++;
        var g = ["<defs>", "<mask " + ['id="' + u.clipPathId + '"'].join(" ") + " >", u.toSVG(h.reviver), "</mask>", "</defs>"];
        return u._objects[0].fill = d, g.join(`
`);
      }
      return "";
    }, _createBaseSVGMarkup: function(h, u) {
      var d = this.getEraser();
      if (d) {
        var g = this.eraserToSVG(u);
        this.clipPath = null;
        var y = p.call(this, h, u);
        return this.clipPath = d, [g, y.replace(">", 'mask="url(#' + d.clipPathId + ')" >')].join(`
`);
      }
      return p.call(this, h, u);
    } });
    var n = v.Group.prototype._restoreObjectsState, r = v.Group.prototype.toObject, a = v.Group.prototype._getBounds;
    v.util.object.extend(v.Group.prototype, { _getBounds: function(h, u, d) {
      if (this.eraser) return this.width = this._objects[0].width, void (this.height = this._objects[0].height);
      a.call(this, h, u, d);
    }, _addEraserPathToObjects: function(h) {
      this._objects.forEach(function(u) {
        v.EraserBrush.prototype._addPathToObjectEraser.call(v.EraserBrush.prototype, u, h);
      });
    }, applyEraserToObjects: function() {
      var h = this;
      if (this.getEraser()) {
        var u = h.calcTransformMatrix();
        h.getEraser().clone(function(d) {
          var g = d._objects[0].clipPath;
          h.clipPath = g || void 0, d.getObjects("path").forEach(function(y) {
            var x = v.util.multiplyTransformMatrices(u, y.calcTransformMatrix());
            v.util.applyTransformToObject(y, x), g ? g.clone(function(C) {
              v.EraserBrush.prototype.applyClipPathToPath.call(v.EraserBrush.prototype, y, C, u), h._addEraserPathToObjects(y);
            }) : h._addEraserPathToObjects(y);
          });
        });
      }
    }, _restoreObjectsState: function() {
      return this.erasable === !0 && this.applyEraserToObjects(), n.call(this);
    }, toObject: function(h) {
      return r.call(this, ["eraser"].concat(h));
    } }), v.util.object.extend(v.Canvas.prototype, { isErasing: function() {
      return this.isDrawingMode && this.freeDrawingBrush && this.freeDrawingBrush.type === "eraser" && this.freeDrawingBrush._isErasing;
    }, renderAll: function() {
      if (!this.contextTopDirty || this._groupSelector || this.isDrawingMode || (this.clearContext(this.contextTop), this.contextTopDirty = !1), !this.isErasing()) {
        this.hasLostContext && this.renderTopLayer(this.contextTop);
        var h = this.contextContainer;
        return this.renderCanvas(h, this._chooseObjectsToRender()), this;
      }
      this.freeDrawingBrush._render();
    } }), v.EraserBrush = v.util.createClass(v.PencilBrush, { type: "eraser", _ready: !1, _drawOverlayOnTop: !1, _isErasing: !1, initialize: function(h) {
      this.callSuper("initialize", h), this._renderBound = this._render.bind(this), this.render = this.render.bind(this);
    }, hideObject: function(h) {
      h && (h._originalOpacity = h.opacity, h.set({ opacity: 0 }));
    }, restoreObjectVisibility: function(h) {
      h && h._originalOpacity && (h.set({ opacity: h._originalOpacity }), h._originalOpacity = void 0);
    }, _isErasable: function(h) {
      return h.erasable !== !1;
    }, prepareCanvasBackgroundForLayer: function(h) {
      if (h !== "overlay") {
        var u = this.canvas.backgroundImage, d = h === "top";
        u && this._isErasable(u) === !d && this.hideObject(u);
      }
    }, prepareCanvasOverlayForLayer: function(h) {
      var u = this.canvas, d = u.overlayImage, g = !!u.overlayColor;
      if (u.overlayColor && h !== "overlay" && (this.__overlayColor = u.overlayColor, delete u.overlayColor), h === "bottom") return this.hideObject(d), !1;
      var y = h === "top", x = d && !this._isErasable(d) || g;
      return d && this._isErasable(d) === !y && this.hideObject(d), x;
    }, restoreCanvasDrawables: function() {
      var h = this.canvas;
      this.__overlayColor && (h.overlayColor = this.__overlayColor, delete this.__overlayColor), this.restoreObjectVisibility(h.backgroundImage), this.restoreObjectVisibility(h.overlayImage);
    }, prepareCollectionTraversal: function(h) {
      var u = this;
      h.forEachObject(function(d) {
        d.forEachObject && d.erasable === "deep" ? u.prepareCollectionTraversal(d) : d.erasable && u.hideObject(d);
      });
    }, restoreCollectionTraversal: function(h) {
      var u = this;
      h.forEachObject(function(d) {
        d.forEachObject && d.erasable === "deep" ? u.restoreCollectionTraversal(d) : u.restoreObjectVisibility(d);
      });
    }, prepareCanvasObjectsForLayer: function(h) {
      h === "bottom" && this.prepareCollectionTraversal(this.canvas);
    }, restoreCanvasObjectsFromLayer: function(h) {
      h === "bottom" && this.restoreCollectionTraversal(this.canvas);
    }, prepareCanvasForLayer: function(h) {
      return this.prepareCanvasBackgroundForLayer(h), this.prepareCanvasObjectsForLayer(h), this.prepareCanvasOverlayForLayer(h);
    }, restoreCanvasFromLayer: function(h) {
      this.restoreCanvasDrawables(), this.restoreCanvasObjectsFromLayer(h);
    }, renderBottomLayer: function() {
      var h = this.canvas;
      this.prepareCanvasForLayer("bottom"), h.renderCanvas(h.getContext(), h.getObjects().filter(function(u) {
        return !u.erasable || u.forEachObject;
      })), this.restoreCanvasFromLayer("bottom");
    }, renderTopLayer: function() {
      var h = this.canvas;
      this._drawOverlayOnTop = this.prepareCanvasForLayer("top"), h.renderCanvas(h.contextTop, h.getObjects()), this.callSuper("_render"), this.restoreCanvasFromLayer("top");
    }, renderOverlay: function() {
      this.prepareCanvasForLayer("overlay");
      var h = this.canvas, u = h.contextTop;
      h._renderOverlay(u), this.restoreCanvasFromLayer("overlay");
    }, _saveAndTransform: function(h) {
      this.callSuper("_saveAndTransform", h), h.globalCompositeOperation = "destination-out";
    }, needsFullRender: function() {
      return this.callSuper("needsFullRender") || this._drawOverlayOnTop;
    }, onMouseDown: function(h, u) {
      this.canvas._isMainEvent(u.e) && (this._prepareForDrawing(h), this._captureDrawingPath(h), this._isErasing = !0, this.canvas.fire("erasing:start"), this._ready = !0, this._render());
    }, _render: function() {
      this._ready && (this.isRendering = 1, this.renderBottomLayer(), this.renderTopLayer(), this.renderOverlay(), this.isRendering = 0);
    }, render: function() {
      return !!this._isErasing && (this.isRendering ? this.isRendering = v.util.requestAnimFrame(this._renderBound) : this._render(), !0);
    }, applyClipPathToPath: function(h, u, d) {
      var g = h.calcTransformMatrix(), y = u.calcTransformMatrix(), x = v.util.multiplyTransformMatrices(v.util.invertTransform(g), d);
      return v.util.applyTransformToObject(u, v.util.multiplyTransformMatrices(x, y)), h.clipPath = u, h;
    }, clonePathWithClipPath: function(h, u, d) {
      var g = u.calcTransformMatrix(), y = u.getClipPath(), x = this;
      h.clone(function(C) {
        y.clone(function(b) {
          d(x.applyClipPathToPath(C, b, g));
        });
      });
    }, _addPathToObjectEraser: function(h, u) {
      var d, g = this;
      if (h.forEachObject && h.erasable === "deep") {
        var y = h._objects.filter(function(b) {
          return b.erasable;
        });
        y.length > 0 && h.clipPath ? this.clonePathWithClipPath(u, h, function(b) {
          y.forEach(function(M) {
            g._addPathToObjectEraser(M, b);
          });
        }) : y.length > 0 && y.forEach(function(b) {
          g._addPathToObjectEraser(b, u);
        });
      } else {
        if (h.getEraser()) d = h.clipPath;
        else {
          var x = h._getNonTransformedDimensions(), C = new v.Rect({ fill: "rgb(0,0,0)", width: x.x, height: x.y, clipPath: h.clipPath, originX: "center", originY: "center" });
          d = new v.Group([C], { eraser: !0 });
        }
        u.clone(function(b) {
          b.globalCompositeOperation = "destination-out";
          var M = v.util.multiplyTransformMatrices(v.util.invertTransform(h.calcTransformMatrix()), b.calcTransformMatrix());
          v.util.applyTransformToObject(b, M), d.addWithUpdate(b), h.set({ clipPath: d, dirty: !0 }), h.fire("erasing:end", { path: b }), h.group && Array.isArray(g.__subTargets) && g.__subTargets.push(h);
        });
      }
    }, applyEraserToCanvas: function(h) {
      var u = this.canvas, d = {};
      return ["backgroundImage", "overlayImage"].forEach(function(g) {
        var y = u[g];
        y && y.erasable && (this._addPathToObjectEraser(y, h), d[g] = y);
      }, this), d;
    }, _finalizeAndAddPath: function() {
      var h = this.canvas.contextTop, u = this.canvas;
      h.closePath(), this.decimate && (this._points = this.decimatePoints(this._points, this.decimate)), u.clearContext(u.contextTop), this._isErasing = !1;
      var d = this._points && this._points.length > 1 ? this.convertPointsToSVGPath(this._points) : null;
      if (!d || this._isEmptySVGPath(d)) return u.fire("erasing:end"), void u.requestRenderAll();
      var g = this.createPath(d);
      g.setCoords(), u.fire("before:path:created", { path: g });
      var y = this.applyEraserToCanvas(g), x = this;
      this.__subTargets = [];
      var C = [];
      u.forEachObject(function(b) {
        b.erasable && b.intersectsWithObject(g, !0, !0) && (x._addPathToObjectEraser(b, g), C.push(b));
      }), u.fire("erasing:end", { path: g, targets: C, subTargets: this.__subTargets, drawables: y }), delete this.__subTargets, u.requestRenderAll(), g.setCoords(), this._resetShadow(), u.fire("path:created", { path: g });
    } });
  }();
})(wp);
var qt = wp.fabric;
const Bc = (e, t = 1) => {
  let i = e.match(/[^#]./g);
  return i ? `rgba(${i.map((c) => parseInt(c, 16)).join(", ")}, ${t})` : e;
}, Fg = (e) => function(i, c, f, m, w) {
  var S = this.cornerSize;
  i.save(), i.translate(c, f), i.rotate(fabric.util.degreesToRadians(w.angle)), i.drawImage(e, -S / 2, -S / 2, S, S), i.restore();
}, Lg = ({
  title: e,
  titleId: t,
  ...i
}, c) => /* @__PURE__ */ E.createElement("svg", { t: 1721638678524, className: "icon", viewBox: "0 0 1024 1024", xmlns: "http://www.w3.org/2000/svg", "p-id": 6714, xmlnsXlink: "http://www.w3.org/1999/xlink", ref: c, "aria-labelledby": t, ...i }, e ? /* @__PURE__ */ E.createElement("title", { id: t }, e) : null, /* @__PURE__ */ E.createElement("path", { d: "M955.769524 734.466768c-0.13917 0-4.313236-8.118911-9.275247-18.036795L816.444339 456.344422c-4.962012-9.923-18.093077-18.035772-29.181623-18.030655l-107.787912 0.033769c-11.089569 0.004093-20.163225 9.080819-20.163225 20.174482l0 34.266431c0 11.089569 9.073656 20.170388 20.163225 20.181645l34.267455 0.023536c11.094686 0.002047 24.193005 8.146541 29.116131 18.085914l92.175329 186.263218c4.916986 9.943466-0.128937 18.077727-11.224646 18.077727L677.409772 735.420489c-11.094686 0-20.169365 9.075703-20.169365 20.164249l0 105.501846c0 11.089569-9.074679 20.163225-20.167319 20.163225L383.359666 881.249809c-11.093662 0-20.169365-9.073656-20.169365-20.163225L363.190301 755.585761c0-11.088546-9.074679-20.164249-20.163225-20.164249L193.657116 735.421512c-11.094686 0-16.003486-8.066723-10.918677-17.923208l96.398514-186.870038c5.087878-9.856485 18.319228-17.911952 29.408797-17.906835l33.378202 0.022513c11.095709 0.005117 20.169365-9.063423 20.169365-20.151969l0-33.967626c0-11.095709-9.073656-20.164249-20.169365-20.164249l-107.283422 0.039909c-11.094686 0-24.242124 8.112772-29.226648 18.024515L74.71926 716.616214c-4.978385 9.907651-8.933463 18.014282-8.792247 18.014282 0.14224 0 0.260943 9.074679 0.260943 20.169365l0 183.128831c0 11.094686 9.067516 20.169365 20.162202 20.169365l849.507874 0c11.096732 0 20.169365-9.074679 20.169365-20.169365L956.027397 754.629993C956.020234 743.532237 955.908694 734.466768 955.769524 734.466768L955.769524 734.466768zM326.291926 294.249651l110.674659 0L436.966585 659.44205 585.181231 659.44205 585.181231 294.249651l116.595508 0c11.097756 0 14.150278-6.79373 6.794753-15.093766L524.899286 71.90875c-7.355525-8.299013-19.308765-8.226359-26.567076 0.158612L319.322188 278.997272C312.063877 287.388383 315.20338 294.249651 326.291926 294.249651L326.291926 294.249651zM326.291926 294.249651", "p-id": 6715 })), Rg = E.forwardRef(Lg), Ig = ({
  title: e,
  titleId: t,
  ...i
}, c) => /* @__PURE__ */ E.createElement("svg", { t: 1726464554433, className: "icon", viewBox: "0 0 1024 1024", xmlns: "http://www.w3.org/2000/svg", "p-id": 1550, ref: c, "aria-labelledby": t, ...i }, e ? /* @__PURE__ */ E.createElement("title", { id: t }, e) : null, /* @__PURE__ */ E.createElement("style", null, `
        .small {
        font: 280px sans-serif;
        font-weight: bold;
        }
    `), /* @__PURE__ */ E.createElement("path", { d: "M32.935673 0.998051 32.935673 1023.001949 32.935673 0.998051Z", opacity: 0.3, "p-id": 1551 }), /* @__PURE__ */ E.createElement("path", { d: "M64.873294 0.998051 64.873294 1023.001949 64.873294 0.998051Z", opacity: 1, "p-id": 1552 }), /* @__PURE__ */ E.createElement("path", { d: "M96.810916 0.998051 96.810916 1023.001949 96.810916 0.998051Z", opacity: 0.3, "p-id": 1553 }), /* @__PURE__ */ E.createElement("path", { d: "M128.748538 0.998051 128.748538 1023.001949 128.748538 0.998051Z", opacity: 1, "p-id": 1554 }), /* @__PURE__ */ E.createElement("path", { d: "M160.68616 0.998051 160.68616 1023.001949 160.68616 0.998051Z", opacity: 0.3, "p-id": 1555 }), /* @__PURE__ */ E.createElement("path", { d: "M192.623782 0.998051 192.623782 1023.001949 192.623782 0.998051Z", opacity: 1, "p-id": 1556 }), /* @__PURE__ */ E.createElement("path", { d: "M224.561404 0.998051 224.561404 1023.001949 224.561404 0.998051Z", opacity: 0.3, "p-id": 1557 }), /* @__PURE__ */ E.createElement("path", { d: "M256.499025 0.998051 256.499025 1023.001949 256.499025 0.998051Z", opacity: 1, "p-id": 1558 }), /* @__PURE__ */ E.createElement("path", { d: "M288.436647 0.998051 288.436647 1023.001949 288.436647 0.998051Z", opacity: 0.3, "p-id": 1559 }), /* @__PURE__ */ E.createElement("path", { d: "M320.374269 0.998051 320.374269 1023.001949 320.374269 0.998051Z", opacity: 1, "p-id": 1560 }), /* @__PURE__ */ E.createElement("path", { d: "M352.311891 0.998051 352.311891 1023.001949 352.311891 0.998051Z", opacity: 0.3, "p-id": 1561 }), /* @__PURE__ */ E.createElement("path", { d: "M384.249513 0.998051 384.249513 1023.001949 384.249513 0.998051Z", opacity: 1, "p-id": 1562 }), /* @__PURE__ */ E.createElement("path", { d: "M416.187135 0.998051 416.187135 1023.001949 416.187135 0.998051Z", opacity: 0.3, "p-id": 1563 }), /* @__PURE__ */ E.createElement("path", { d: "M448.124756 0.998051 448.124756 1023.001949 448.124756 0.998051Z", opacity: 1, "p-id": 1564 }), /* @__PURE__ */ E.createElement("path", { d: "M480.062378 0.998051 480.062378 1023.001949 480.062378 0.998051Z", opacity: 0.3, "p-id": 1565 }), /* @__PURE__ */ E.createElement("path", { d: "M512 0.998051 512 1023.001949 512 0.998051Z", opacity: 1, "p-id": 1566 }), /* @__PURE__ */ E.createElement("path", { d: "M543.937622 0.998051 543.937622 1023.001949 543.937622 0.998051Z", opacity: 0.3, "p-id": 1567 }), /* @__PURE__ */ E.createElement("path", { d: "M575.875244 0.998051 575.875244 1023.001949 575.875244 0.998051Z", opacity: 1, "p-id": 1568 }), /* @__PURE__ */ E.createElement("path", { d: "M607.812865 0.998051 607.812865 1023.001949 607.812865 0.998051Z", opacity: 0.3, "p-id": 1569 }), /* @__PURE__ */ E.createElement("path", { d: "M639.750487 0.998051 639.750487 1023.001949 639.750487 0.998051Z", opacity: 1, "p-id": 1570 }), /* @__PURE__ */ E.createElement("path", { d: "M671.688109 0.998051 671.688109 1023.001949 671.688109 0.998051Z", opacity: 0.3, "p-id": 1571 }), /* @__PURE__ */ E.createElement("path", { d: "M703.625731 0.998051 703.625731 1023.001949 703.625731 0.998051Z", opacity: 1, "p-id": 1572 }), /* @__PURE__ */ E.createElement("path", { d: "M735.563353 0.998051 735.563353 1023.001949 735.563353 0.998051Z", opacity: 0.3, "p-id": 1573 }), /* @__PURE__ */ E.createElement("path", { d: "M767.500975 0.998051 767.500975 1023.001949 767.500975 0.998051Z", opacity: 1, "p-id": 1574 }), /* @__PURE__ */ E.createElement("path", { d: "M799.438596 0.998051 799.438596 1023.001949 799.438596 0.998051Z", opacity: 0.3, "p-id": 1575 }), /* @__PURE__ */ E.createElement("path", { d: "M831.376218 0.998051 831.376218 1023.001949 831.376218 0.998051Z", opacity: 1, "p-id": 1576 }), /* @__PURE__ */ E.createElement("path", { d: "M863.31384 0.998051 863.31384 1023.001949 863.31384 0.998051Z", opacity: 0.3, "p-id": 1577 }), /* @__PURE__ */ E.createElement("path", { d: "M895.251462 0.998051 895.251462 1023.001949 895.251462 0.998051Z", opacity: 1, "p-id": 1578 }), /* @__PURE__ */ E.createElement("path", { d: "M927.189084 0.998051 927.189084 1023.001949 927.189084 0.998051Z", opacity: 0.3, "p-id": 1579 }), /* @__PURE__ */ E.createElement("path", { d: "M959.126706 0.998051 959.126706 1023.001949 959.126706 0.998051Z", opacity: 1, "p-id": 1580 }), /* @__PURE__ */ E.createElement("path", { d: "M991.064327 0.998051 991.064327 1023.001949 991.064327 0.998051Z", opacity: 0.3, "p-id": 1581 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 32.935673 1023.001949 32.935673 0.998051 32.935673Z", opacity: 0.3, "p-id": 1582 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 64.873294 1023.001949 64.873294 0.998051 64.873294Z", opacity: 1, "p-id": 1583 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 96.810916 1023.001949 96.810916 0.998051 96.810916Z", opacity: 0.3, "p-id": 1584 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 128.748538 1023.001949 128.748538 0.998051 128.748538Z", opacity: 1, "p-id": 1585 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 160.68616 1023.001949 160.68616 0.998051 160.68616Z", opacity: 0.3, "p-id": 1586 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 192.623782 1023.001949 192.623782 0.998051 192.623782Z", opacity: 1, "p-id": 1587 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 224.561404 1023.001949 224.561404 0.998051 224.561404Z", opacity: 0.3, "p-id": 1588 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 256.499025 1023.001949 256.499025 0.998051 256.499025Z", opacity: 1, "p-id": 1589 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 288.436647 1023.001949 288.436647 0.998051 288.436647Z", opacity: 0.3, "p-id": 1590 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 320.374269 1023.001949 320.374269 0.998051 320.374269Z", opacity: 1, "p-id": 1591 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 352.311891 1023.001949 352.311891 0.998051 352.311891Z", opacity: 0.3, "p-id": 1592 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 384.249513 1023.001949 384.249513 0.998051 384.249513Z", opacity: 1, "p-id": 1593 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 416.187135 1023.001949 416.187135 0.998051 416.187135Z", opacity: 0.3, "p-id": 1594 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 448.124756 1023.001949 448.124756 0.998051 448.124756Z", opacity: 1, "p-id": 1595 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 480.062378 1023.001949 480.062378 0.998051 480.062378Z", opacity: 0.3, "p-id": 1596 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 512 1023.001949 512 0.998051 512Z", opacity: 1, "p-id": 1597 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 543.937622 1023.001949 543.937622 0.998051 543.937622Z", opacity: 0.3, "p-id": 1598 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 575.875244 1023.001949 575.875244 0.998051 575.875244Z", opacity: 1, "p-id": 1599 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 607.812865 1023.001949 607.812865 0.998051 607.812865Z", opacity: 0.3, "p-id": 1600 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 639.750487 1023.001949 639.750487 0.998051 639.750487Z", opacity: 1, "p-id": 1601 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 671.688109 1023.001949 671.688109 0.998051 671.688109Z", opacity: 0.3, "p-id": 1602 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 703.625731 1023.001949 703.625731 0.998051 703.625731Z", opacity: 1, "p-id": 1603 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 735.563353 1023.001949 735.563353 0.998051 735.563353Z", opacity: 0.3, "p-id": 1604 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 767.500975 1023.001949 767.500975 0.998051 767.500975Z", opacity: 1, "p-id": 1605 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 799.438596 1023.001949 799.438596 0.998051 799.438596Z", opacity: 0.3, "p-id": 1606 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 831.376218 1023.001949 831.376218 0.998051 831.376218Z", opacity: 1, "p-id": 1607 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 863.31384 1023.001949 863.31384 0.998051 863.31384Z", opacity: 0.3, "p-id": 1608 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 895.251462 1023.001949 895.251462 0.998051 895.251462Z", opacity: 1, "p-id": 1609 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 927.189084 1023.001949 927.189084 0.998051 927.189084Z", opacity: 0.3, "p-id": 1610 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 959.126706 1023.001949 959.126706 0.998051 959.126706Z", opacity: 1, "p-id": 1611 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 991.064327 1023.001949 991.064327 0.998051 991.064327Z", opacity: 0.3, "p-id": 1612 }), /* @__PURE__ */ E.createElement("path", { d: "M384.249513 586.520452c0 0 203.546448-122.121481 318.144624-73.8817 23.755602-36.197302 47.155899-75.189146 70.065154-114.997396-112.107041-27.466355-260.45929-2.746635-260.45929-2.746635s189.841216-113.89954 306.068211-78.247173c23.304483-42.025918 45.964226-83.478955 67.823532-122.065591-92.59515-6.255782-182.266012 8.687033-182.266012 8.687033s118.915743-71.348647 226.136327-83.435041c33.732117-54.75306 65.042963-97.689201 93.239891-118.835899-559.906433 0-894.253411 638.752437-1022.003899 1022.003899l63.875244 0 191.625731-319.376218c0 0 63.875244 63.875244 255.500975 0 45.385357-15.128452 90.770713-57.140398 135.307727-113.711906-112.396476-28.498339-263.058214-3.393372-263.058214-3.393372z", "p-id": 1613 }), /* @__PURE__ */ E.createElement("text", { x: 440, y: 960, className: "small" }, "RGB")), Bg = E.forwardRef(Ig), zg = ({
  title: e,
  titleId: t,
  ...i
}, c) => /* @__PURE__ */ E.createElement("svg", { t: 1726464554433, className: "icon", viewBox: "0 0 1024 1024", xmlns: "http://www.w3.org/2000/svg", "p-id": 1550, ref: c, "aria-labelledby": t, ...i }, e ? /* @__PURE__ */ E.createElement("title", { id: t }, e) : null, /* @__PURE__ */ E.createElement("path", { d: "M32.935673 0.998051 32.935673 1023.001949 32.935673 0.998051Z", opacity: 0.3, "p-id": 1551 }), /* @__PURE__ */ E.createElement("path", { d: "M64.873294 0.998051 64.873294 1023.001949 64.873294 0.998051Z", opacity: 1, "p-id": 1552 }), /* @__PURE__ */ E.createElement("path", { d: "M96.810916 0.998051 96.810916 1023.001949 96.810916 0.998051Z", opacity: 0.3, "p-id": 1553 }), /* @__PURE__ */ E.createElement("path", { d: "M128.748538 0.998051 128.748538 1023.001949 128.748538 0.998051Z", opacity: 1, "p-id": 1554 }), /* @__PURE__ */ E.createElement("path", { d: "M160.68616 0.998051 160.68616 1023.001949 160.68616 0.998051Z", opacity: 0.3, "p-id": 1555 }), /* @__PURE__ */ E.createElement("path", { d: "M192.623782 0.998051 192.623782 1023.001949 192.623782 0.998051Z", opacity: 1, "p-id": 1556 }), /* @__PURE__ */ E.createElement("path", { d: "M224.561404 0.998051 224.561404 1023.001949 224.561404 0.998051Z", opacity: 0.3, "p-id": 1557 }), /* @__PURE__ */ E.createElement("path", { d: "M256.499025 0.998051 256.499025 1023.001949 256.499025 0.998051Z", opacity: 1, "p-id": 1558 }), /* @__PURE__ */ E.createElement("path", { d: "M288.436647 0.998051 288.436647 1023.001949 288.436647 0.998051Z", opacity: 0.3, "p-id": 1559 }), /* @__PURE__ */ E.createElement("path", { d: "M320.374269 0.998051 320.374269 1023.001949 320.374269 0.998051Z", opacity: 1, "p-id": 1560 }), /* @__PURE__ */ E.createElement("path", { d: "M352.311891 0.998051 352.311891 1023.001949 352.311891 0.998051Z", opacity: 0.3, "p-id": 1561 }), /* @__PURE__ */ E.createElement("path", { d: "M384.249513 0.998051 384.249513 1023.001949 384.249513 0.998051Z", opacity: 1, "p-id": 1562 }), /* @__PURE__ */ E.createElement("path", { d: "M416.187135 0.998051 416.187135 1023.001949 416.187135 0.998051Z", opacity: 0.3, "p-id": 1563 }), /* @__PURE__ */ E.createElement("path", { d: "M448.124756 0.998051 448.124756 1023.001949 448.124756 0.998051Z", opacity: 1, "p-id": 1564 }), /* @__PURE__ */ E.createElement("path", { d: "M480.062378 0.998051 480.062378 1023.001949 480.062378 0.998051Z", opacity: 0.3, "p-id": 1565 }), /* @__PURE__ */ E.createElement("path", { d: "M512 0.998051 512 1023.001949 512 0.998051Z", opacity: 1, "p-id": 1566 }), /* @__PURE__ */ E.createElement("path", { d: "M543.937622 0.998051 543.937622 1023.001949 543.937622 0.998051Z", opacity: 0.3, "p-id": 1567 }), /* @__PURE__ */ E.createElement("path", { d: "M575.875244 0.998051 575.875244 1023.001949 575.875244 0.998051Z", opacity: 1, "p-id": 1568 }), /* @__PURE__ */ E.createElement("path", { d: "M607.812865 0.998051 607.812865 1023.001949 607.812865 0.998051Z", opacity: 0.3, "p-id": 1569 }), /* @__PURE__ */ E.createElement("path", { d: "M639.750487 0.998051 639.750487 1023.001949 639.750487 0.998051Z", opacity: 1, "p-id": 1570 }), /* @__PURE__ */ E.createElement("path", { d: "M671.688109 0.998051 671.688109 1023.001949 671.688109 0.998051Z", opacity: 0.3, "p-id": 1571 }), /* @__PURE__ */ E.createElement("path", { d: "M703.625731 0.998051 703.625731 1023.001949 703.625731 0.998051Z", opacity: 1, "p-id": 1572 }), /* @__PURE__ */ E.createElement("path", { d: "M735.563353 0.998051 735.563353 1023.001949 735.563353 0.998051Z", opacity: 0.3, "p-id": 1573 }), /* @__PURE__ */ E.createElement("path", { d: "M767.500975 0.998051 767.500975 1023.001949 767.500975 0.998051Z", opacity: 1, "p-id": 1574 }), /* @__PURE__ */ E.createElement("path", { d: "M799.438596 0.998051 799.438596 1023.001949 799.438596 0.998051Z", opacity: 0.3, "p-id": 1575 }), /* @__PURE__ */ E.createElement("path", { d: "M831.376218 0.998051 831.376218 1023.001949 831.376218 0.998051Z", opacity: 1, "p-id": 1576 }), /* @__PURE__ */ E.createElement("path", { d: "M863.31384 0.998051 863.31384 1023.001949 863.31384 0.998051Z", opacity: 0.3, "p-id": 1577 }), /* @__PURE__ */ E.createElement("path", { d: "M895.251462 0.998051 895.251462 1023.001949 895.251462 0.998051Z", opacity: 1, "p-id": 1578 }), /* @__PURE__ */ E.createElement("path", { d: "M927.189084 0.998051 927.189084 1023.001949 927.189084 0.998051Z", opacity: 0.3, "p-id": 1579 }), /* @__PURE__ */ E.createElement("path", { d: "M959.126706 0.998051 959.126706 1023.001949 959.126706 0.998051Z", opacity: 1, "p-id": 1580 }), /* @__PURE__ */ E.createElement("path", { d: "M991.064327 0.998051 991.064327 1023.001949 991.064327 0.998051Z", opacity: 0.3, "p-id": 1581 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 32.935673 1023.001949 32.935673 0.998051 32.935673Z", opacity: 0.3, "p-id": 1582 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 64.873294 1023.001949 64.873294 0.998051 64.873294Z", opacity: 1, "p-id": 1583 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 96.810916 1023.001949 96.810916 0.998051 96.810916Z", opacity: 0.3, "p-id": 1584 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 128.748538 1023.001949 128.748538 0.998051 128.748538Z", opacity: 1, "p-id": 1585 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 160.68616 1023.001949 160.68616 0.998051 160.68616Z", opacity: 0.3, "p-id": 1586 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 192.623782 1023.001949 192.623782 0.998051 192.623782Z", opacity: 1, "p-id": 1587 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 224.561404 1023.001949 224.561404 0.998051 224.561404Z", opacity: 0.3, "p-id": 1588 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 256.499025 1023.001949 256.499025 0.998051 256.499025Z", opacity: 1, "p-id": 1589 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 288.436647 1023.001949 288.436647 0.998051 288.436647Z", opacity: 0.3, "p-id": 1590 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 320.374269 1023.001949 320.374269 0.998051 320.374269Z", opacity: 1, "p-id": 1591 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 352.311891 1023.001949 352.311891 0.998051 352.311891Z", opacity: 0.3, "p-id": 1592 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 384.249513 1023.001949 384.249513 0.998051 384.249513Z", opacity: 1, "p-id": 1593 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 416.187135 1023.001949 416.187135 0.998051 416.187135Z", opacity: 0.3, "p-id": 1594 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 448.124756 1023.001949 448.124756 0.998051 448.124756Z", opacity: 1, "p-id": 1595 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 480.062378 1023.001949 480.062378 0.998051 480.062378Z", opacity: 0.3, "p-id": 1596 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 512 1023.001949 512 0.998051 512Z", opacity: 1, "p-id": 1597 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 543.937622 1023.001949 543.937622 0.998051 543.937622Z", opacity: 0.3, "p-id": 1598 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 575.875244 1023.001949 575.875244 0.998051 575.875244Z", opacity: 1, "p-id": 1599 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 607.812865 1023.001949 607.812865 0.998051 607.812865Z", opacity: 0.3, "p-id": 1600 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 639.750487 1023.001949 639.750487 0.998051 639.750487Z", opacity: 1, "p-id": 1601 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 671.688109 1023.001949 671.688109 0.998051 671.688109Z", opacity: 0.3, "p-id": 1602 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 703.625731 1023.001949 703.625731 0.998051 703.625731Z", opacity: 1, "p-id": 1603 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 735.563353 1023.001949 735.563353 0.998051 735.563353Z", opacity: 0.3, "p-id": 1604 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 767.500975 1023.001949 767.500975 0.998051 767.500975Z", opacity: 1, "p-id": 1605 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 799.438596 1023.001949 799.438596 0.998051 799.438596Z", opacity: 0.3, "p-id": 1606 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 831.376218 1023.001949 831.376218 0.998051 831.376218Z", opacity: 1, "p-id": 1607 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 863.31384 1023.001949 863.31384 0.998051 863.31384Z", opacity: 0.3, "p-id": 1608 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 895.251462 1023.001949 895.251462 0.998051 895.251462Z", opacity: 1, "p-id": 1609 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 927.189084 1023.001949 927.189084 0.998051 927.189084Z", opacity: 0.3, "p-id": 1610 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 959.126706 1023.001949 959.126706 0.998051 959.126706Z", opacity: 1, "p-id": 1611 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 991.064327 1023.001949 991.064327 0.998051 991.064327Z", opacity: 0.3, "p-id": 1612 }), /* @__PURE__ */ E.createElement("path", { d: "M384.249513 586.520452c0 0 203.546448-122.121481 318.144624-73.8817 23.755602-36.197302 47.155899-75.189146 70.065154-114.997396-112.107041-27.466355-260.45929-2.746635-260.45929-2.746635s189.841216-113.89954 306.068211-78.247173c23.304483-42.025918 45.964226-83.478955 67.823532-122.065591-92.59515-6.255782-182.266012 8.687033-182.266012 8.687033s118.915743-71.348647 226.136327-83.435041c33.732117-54.75306 65.042963-97.689201 93.239891-118.835899-559.906433 0-894.253411 638.752437-1022.003899 1022.003899l63.875244 0 191.625731-319.376218c0 0 63.875244 63.875244 255.500975 0 45.385357-15.128452 90.770713-57.140398 135.307727-113.711906-112.396476-28.498339-263.058214-3.393372-263.058214-3.393372z", "p-id": 1613 }), /* @__PURE__ */ E.createElement("rect", { x: 770, y: 610, width: 120, height: 360 }), /* @__PURE__ */ E.createElement("rect", { x: 650, y: 730, width: 360, height: 120 })), Ng = E.forwardRef(zg), Ug = ({
  title: e,
  titleId: t,
  ...i
}, c) => /* @__PURE__ */ E.createElement("svg", { t: 1726464554433, className: "icon", viewBox: "0 0 1024 1024", xmlns: "http://www.w3.org/2000/svg", "p-id": 1550, ref: c, "aria-labelledby": t, ...i }, e ? /* @__PURE__ */ E.createElement("title", { id: t }, e) : null, /* @__PURE__ */ E.createElement("path", { d: "M32.935673 0.998051 32.935673 1023.001949 32.935673 0.998051Z", opacity: 0.3, "p-id": 1551 }), /* @__PURE__ */ E.createElement("path", { d: "M64.873294 0.998051 64.873294 1023.001949 64.873294 0.998051Z", opacity: 1, "p-id": 1552 }), /* @__PURE__ */ E.createElement("path", { d: "M96.810916 0.998051 96.810916 1023.001949 96.810916 0.998051Z", opacity: 0.3, "p-id": 1553 }), /* @__PURE__ */ E.createElement("path", { d: "M128.748538 0.998051 128.748538 1023.001949 128.748538 0.998051Z", opacity: 1, "p-id": 1554 }), /* @__PURE__ */ E.createElement("path", { d: "M160.68616 0.998051 160.68616 1023.001949 160.68616 0.998051Z", opacity: 0.3, "p-id": 1555 }), /* @__PURE__ */ E.createElement("path", { d: "M192.623782 0.998051 192.623782 1023.001949 192.623782 0.998051Z", opacity: 1, "p-id": 1556 }), /* @__PURE__ */ E.createElement("path", { d: "M224.561404 0.998051 224.561404 1023.001949 224.561404 0.998051Z", opacity: 0.3, "p-id": 1557 }), /* @__PURE__ */ E.createElement("path", { d: "M256.499025 0.998051 256.499025 1023.001949 256.499025 0.998051Z", opacity: 1, "p-id": 1558 }), /* @__PURE__ */ E.createElement("path", { d: "M288.436647 0.998051 288.436647 1023.001949 288.436647 0.998051Z", opacity: 0.3, "p-id": 1559 }), /* @__PURE__ */ E.createElement("path", { d: "M320.374269 0.998051 320.374269 1023.001949 320.374269 0.998051Z", opacity: 1, "p-id": 1560 }), /* @__PURE__ */ E.createElement("path", { d: "M352.311891 0.998051 352.311891 1023.001949 352.311891 0.998051Z", opacity: 0.3, "p-id": 1561 }), /* @__PURE__ */ E.createElement("path", { d: "M384.249513 0.998051 384.249513 1023.001949 384.249513 0.998051Z", opacity: 1, "p-id": 1562 }), /* @__PURE__ */ E.createElement("path", { d: "M416.187135 0.998051 416.187135 1023.001949 416.187135 0.998051Z", opacity: 0.3, "p-id": 1563 }), /* @__PURE__ */ E.createElement("path", { d: "M448.124756 0.998051 448.124756 1023.001949 448.124756 0.998051Z", opacity: 1, "p-id": 1564 }), /* @__PURE__ */ E.createElement("path", { d: "M480.062378 0.998051 480.062378 1023.001949 480.062378 0.998051Z", opacity: 0.3, "p-id": 1565 }), /* @__PURE__ */ E.createElement("path", { d: "M512 0.998051 512 1023.001949 512 0.998051Z", opacity: 1, "p-id": 1566 }), /* @__PURE__ */ E.createElement("path", { d: "M543.937622 0.998051 543.937622 1023.001949 543.937622 0.998051Z", opacity: 0.3, "p-id": 1567 }), /* @__PURE__ */ E.createElement("path", { d: "M575.875244 0.998051 575.875244 1023.001949 575.875244 0.998051Z", opacity: 1, "p-id": 1568 }), /* @__PURE__ */ E.createElement("path", { d: "M607.812865 0.998051 607.812865 1023.001949 607.812865 0.998051Z", opacity: 0.3, "p-id": 1569 }), /* @__PURE__ */ E.createElement("path", { d: "M639.750487 0.998051 639.750487 1023.001949 639.750487 0.998051Z", opacity: 1, "p-id": 1570 }), /* @__PURE__ */ E.createElement("path", { d: "M671.688109 0.998051 671.688109 1023.001949 671.688109 0.998051Z", opacity: 0.3, "p-id": 1571 }), /* @__PURE__ */ E.createElement("path", { d: "M703.625731 0.998051 703.625731 1023.001949 703.625731 0.998051Z", opacity: 1, "p-id": 1572 }), /* @__PURE__ */ E.createElement("path", { d: "M735.563353 0.998051 735.563353 1023.001949 735.563353 0.998051Z", opacity: 0.3, "p-id": 1573 }), /* @__PURE__ */ E.createElement("path", { d: "M767.500975 0.998051 767.500975 1023.001949 767.500975 0.998051Z", opacity: 1, "p-id": 1574 }), /* @__PURE__ */ E.createElement("path", { d: "M799.438596 0.998051 799.438596 1023.001949 799.438596 0.998051Z", opacity: 0.3, "p-id": 1575 }), /* @__PURE__ */ E.createElement("path", { d: "M831.376218 0.998051 831.376218 1023.001949 831.376218 0.998051Z", opacity: 1, "p-id": 1576 }), /* @__PURE__ */ E.createElement("path", { d: "M863.31384 0.998051 863.31384 1023.001949 863.31384 0.998051Z", opacity: 0.3, "p-id": 1577 }), /* @__PURE__ */ E.createElement("path", { d: "M895.251462 0.998051 895.251462 1023.001949 895.251462 0.998051Z", opacity: 1, "p-id": 1578 }), /* @__PURE__ */ E.createElement("path", { d: "M927.189084 0.998051 927.189084 1023.001949 927.189084 0.998051Z", opacity: 0.3, "p-id": 1579 }), /* @__PURE__ */ E.createElement("path", { d: "M959.126706 0.998051 959.126706 1023.001949 959.126706 0.998051Z", opacity: 1, "p-id": 1580 }), /* @__PURE__ */ E.createElement("path", { d: "M991.064327 0.998051 991.064327 1023.001949 991.064327 0.998051Z", opacity: 0.3, "p-id": 1581 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 32.935673 1023.001949 32.935673 0.998051 32.935673Z", opacity: 0.3, "p-id": 1582 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 64.873294 1023.001949 64.873294 0.998051 64.873294Z", opacity: 1, "p-id": 1583 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 96.810916 1023.001949 96.810916 0.998051 96.810916Z", opacity: 0.3, "p-id": 1584 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 128.748538 1023.001949 128.748538 0.998051 128.748538Z", opacity: 1, "p-id": 1585 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 160.68616 1023.001949 160.68616 0.998051 160.68616Z", opacity: 0.3, "p-id": 1586 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 192.623782 1023.001949 192.623782 0.998051 192.623782Z", opacity: 1, "p-id": 1587 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 224.561404 1023.001949 224.561404 0.998051 224.561404Z", opacity: 0.3, "p-id": 1588 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 256.499025 1023.001949 256.499025 0.998051 256.499025Z", opacity: 1, "p-id": 1589 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 288.436647 1023.001949 288.436647 0.998051 288.436647Z", opacity: 0.3, "p-id": 1590 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 320.374269 1023.001949 320.374269 0.998051 320.374269Z", opacity: 1, "p-id": 1591 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 352.311891 1023.001949 352.311891 0.998051 352.311891Z", opacity: 0.3, "p-id": 1592 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 384.249513 1023.001949 384.249513 0.998051 384.249513Z", opacity: 1, "p-id": 1593 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 416.187135 1023.001949 416.187135 0.998051 416.187135Z", opacity: 0.3, "p-id": 1594 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 448.124756 1023.001949 448.124756 0.998051 448.124756Z", opacity: 1, "p-id": 1595 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 480.062378 1023.001949 480.062378 0.998051 480.062378Z", opacity: 0.3, "p-id": 1596 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 512 1023.001949 512 0.998051 512Z", opacity: 1, "p-id": 1597 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 543.937622 1023.001949 543.937622 0.998051 543.937622Z", opacity: 0.3, "p-id": 1598 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 575.875244 1023.001949 575.875244 0.998051 575.875244Z", opacity: 1, "p-id": 1599 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 607.812865 1023.001949 607.812865 0.998051 607.812865Z", opacity: 0.3, "p-id": 1600 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 639.750487 1023.001949 639.750487 0.998051 639.750487Z", opacity: 1, "p-id": 1601 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 671.688109 1023.001949 671.688109 0.998051 671.688109Z", opacity: 0.3, "p-id": 1602 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 703.625731 1023.001949 703.625731 0.998051 703.625731Z", opacity: 1, "p-id": 1603 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 735.563353 1023.001949 735.563353 0.998051 735.563353Z", opacity: 0.3, "p-id": 1604 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 767.500975 1023.001949 767.500975 0.998051 767.500975Z", opacity: 1, "p-id": 1605 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 799.438596 1023.001949 799.438596 0.998051 799.438596Z", opacity: 0.3, "p-id": 1606 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 831.376218 1023.001949 831.376218 0.998051 831.376218Z", opacity: 1, "p-id": 1607 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 863.31384 1023.001949 863.31384 0.998051 863.31384Z", opacity: 0.3, "p-id": 1608 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 895.251462 1023.001949 895.251462 0.998051 895.251462Z", opacity: 1, "p-id": 1609 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 927.189084 1023.001949 927.189084 0.998051 927.189084Z", opacity: 0.3, "p-id": 1610 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 959.126706 1023.001949 959.126706 0.998051 959.126706Z", opacity: 1, "p-id": 1611 }), /* @__PURE__ */ E.createElement("path", { d: "M0.998051 991.064327 1023.001949 991.064327 0.998051 991.064327Z", opacity: 0.3, "p-id": 1612 }), /* @__PURE__ */ E.createElement("path", { d: "M384.249513 586.520452c0 0 203.546448-122.121481 318.144624-73.8817 23.755602-36.197302 47.155899-75.189146 70.065154-114.997396-112.107041-27.466355-260.45929-2.746635-260.45929-2.746635s189.841216-113.89954 306.068211-78.247173c23.304483-42.025918 45.964226-83.478955 67.823532-122.065591-92.59515-6.255782-182.266012 8.687033-182.266012 8.687033s118.915743-71.348647 226.136327-83.435041c33.732117-54.75306 65.042963-97.689201 93.239891-118.835899-559.906433 0-894.253411 638.752437-1022.003899 1022.003899l63.875244 0 191.625731-319.376218c0 0 63.875244 63.875244 255.500975 0 45.385357-15.128452 90.770713-57.140398 135.307727-113.711906-112.396476-28.498339-263.058214-3.393372-263.058214-3.393372z", "p-id": 1613 }), /* @__PURE__ */ E.createElement("rect", { x: 650, y: 730, width: 360, height: 120 })), Hg = E.forwardRef(Ug), Wg = ({
  title: e,
  titleId: t,
  ...i
}, c) => /* @__PURE__ */ E.createElement("svg", { t: 1720327293062, className: "icon", viewBox: "0 0 1024 1024", xmlns: "http://www.w3.org/2000/svg", "p-id": 2436, xmlnsXlink: "http://www.w3.org/1999/xlink", ref: c, "aria-labelledby": t, ...i }, e ? /* @__PURE__ */ E.createElement("title", { id: t }, e) : null, /* @__PURE__ */ E.createElement("path", { d: "M128 938.666667c-25.6 0-42.666667-17.066667-42.666667-42.666667s17.066667-42.666667 42.666667-42.666667h132.266667l-140.8-140.8c-34.133333-34.133333-34.133333-85.333333 0-119.466666L601.6 110.933333c34.133333-34.133333 85.333333-34.133333 119.466667 0l179.2 179.2c34.133333 34.133333 34.133333 85.333333 0 119.466667L460.8 853.333333H896c25.6 0 42.666667 17.066667 42.666667 42.666667s-17.066667 42.666667-42.666667 42.666667H128z m68.266667-298.666667c-8.533333 8.533333-8.533333 21.333333 0 29.866667l106.666666 106.666666c34.133333 34.133333 85.333333 34.133333 119.466667 0l119.466667-119.466666-179.2-179.2L196.266667 640z", "p-id": 2437 })), Yg = E.forwardRef(Wg), Xg = ({
  title: e,
  titleId: t,
  ...i
}, c) => /* @__PURE__ */ E.createElement("svg", { t: 1721638183200, className: "icon", viewBox: "0 0 1024 1024", xmlns: "http://www.w3.org/2000/svg", "p-id": 1448, xmlnsXlink: "http://www.w3.org/1999/xlink", ref: c, "aria-labelledby": t, ...i }, e ? /* @__PURE__ */ E.createElement("title", { id: t }, e) : null, /* @__PURE__ */ E.createElement("path", { d: "M607.274667 612.992l88.661333 190.122667a21.333333 21.333333 0 0 1-10.325333 28.373333l-77.312 36.053333a21.333333 21.333333 0 0 1-28.373334-10.325333l-90.666666-194.474667-111.488 111.488A21.333333 21.333333 0 0 1 341.333333 759.168V218.88a21.333333 21.333333 0 0 1 35.669334-15.786667l397.056 360.96a21.333333 21.333333 0 0 1-12.714667 37.077334l-154.069333 11.861333z", "p-id": 1449 })), Gg = E.forwardRef(Xg), Vg = ({
  title: e,
  titleId: t,
  ...i
}, c) => /* @__PURE__ */ E.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 576 512", ref: c, "aria-labelledby": t, ...i }, e ? /* @__PURE__ */ E.createElement("title", { id: t }, e) : null, /* @__PURE__ */ E.createElement("path", { d: "M234.7 42.7L197 56.8c-3 1.1-5 4-5 7.2s2 6.1 5 7.2l37.7 14.1L248.8 123c1.1 3 4 5 7.2 5s6.1-2 7.2-5l14.1-37.7L315 71.2c3-1.1 5-4 5-7.2s-2-6.1-5-7.2L277.3 42.7 263.2 5c-1.1-3-4-5-7.2-5s-6.1 2-7.2 5L234.7 42.7zM46.1 395.4c-18.7 18.7-18.7 49.1 0 67.9l34.6 34.6c18.7 18.7 49.1 18.7 67.9 0L529.9 116.5c18.7-18.7 18.7-49.1 0-67.9L495.3 14.1c-18.7-18.7-49.1-18.7-67.9 0L46.1 395.4zM484.6 82.6l-105 105-23.3-23.3 105-105 23.3 23.3zM7.5 117.2C3 118.9 0 123.2 0 128s3 9.1 7.5 10.8L64 160l21.2 56.5c1.7 4.5 6 7.5 10.8 7.5s9.1-3 10.8-7.5L128 160l56.5-21.2c4.5-1.7 7.5-6 7.5-10.8s-3-9.1-7.5-10.8L128 96 106.8 39.5C105.1 35 100.8 32 96 32s-9.1 3-10.8 7.5L64 96 7.5 117.2zm352 256c-4.5 1.7-7.5 6-7.5 10.8s3 9.1 7.5 10.8L416 416l21.2 56.5c1.7 4.5 6 7.5 10.8 7.5s9.1-3 10.8-7.5L480 416l56.5-21.2c4.5-1.7 7.5-6 7.5-10.8s-3-9.1-7.5-10.8L480 352l-21.2-56.5c-1.7-4.5-6-7.5-10.8-7.5s-9.1 3-10.8 7.5L416 352l-56.5 21.2z" })), $g = E.forwardRef(Vg), Zg = ({
  title: e,
  titleId: t,
  ...i
}, c) => /* @__PURE__ */ E.createElement("svg", { t: 1721704033853, className: "icon", viewBox: "0 0 1024 1024", xmlns: "http://www.w3.org/2000/svg", "p-id": 4365, xmlnsXlink: "http://www.w3.org/1999/xlink", ref: c, "aria-labelledby": t, ...i }, e ? /* @__PURE__ */ E.createElement("title", { id: t }, e) : null, /* @__PURE__ */ E.createElement("path", { d: "M512 324.266667V136.533333c0-6.826667-3.413333-13.653333-10.24-13.653333-6.826667-3.413333-13.653333-3.413333-17.066667 0l-477.866666 307.2c-3.413333 3.413333-6.826667 6.826667-6.826667 13.653333s3.413333 10.24 6.826667 13.653334l477.866666 341.333333c6.826667 3.413333 13.653333 3.413333 17.066667 0 6.826667-3.413333 10.24-10.24 10.24-13.653333v-187.733334c249.173333 10.24 474.453333 235.52 477.866667 290.133334 0 10.24 6.826667 17.066667 17.066666 17.066666s17.066667-6.826667 17.066667-17.066666c-3.413333-225.28-170.666667-552.96-512-563.2z", "p-id": 4366 })), qg = E.forwardRef(Zg), Kg = ({
  title: e,
  titleId: t,
  ...i
}, c) => /* @__PURE__ */ E.createElement("svg", { t: 1721704049355, className: "icon", viewBox: "0 0 1024 1024", xmlns: "http://www.w3.org/2000/svg", "p-id": 4547, xmlnsXlink: "http://www.w3.org/1999/xlink", ref: c, "aria-labelledby": t, ...i }, e ? /* @__PURE__ */ E.createElement("title", { id: t }, e) : null, /* @__PURE__ */ E.createElement("path", { d: "M1017.173333 430.08l-477.866666-307.2c-6.826667-3.413333-13.653333-3.413333-17.066667 0-6.826667 3.413333-10.24 6.826667-10.24 13.653333v187.733334C170.666667 334.506667 3.413333 662.186667 0 887.466667v3.413333c0 6.826667 6.826667 13.653333 17.066667 13.653333s17.066667-6.826667 17.066666-17.066666c3.413333-51.2 228.693333-279.893333 477.866667-290.133334V785.066667c0 6.826667 3.413333 13.653333 10.24 13.653333 6.826667 3.413333 13.653333 3.413333 17.066667 0l477.866666-341.333333c3.413333-3.413333 6.826667-10.24 6.826667-13.653334s-3.413333-10.24-6.826667-13.653333z", "p-id": 4548 })), Qg = E.forwardRef(Kg), Jg = ({
  title: e,
  titleId: t,
  ...i
}, c) => /* @__PURE__ */ E.createElement("svg", { t: 1721712684369, className: "icon", viewBox: "0 0 1024 1024", xmlns: "http://www.w3.org/2000/svg", "p-id": 1463, xmlnsXlink: "http://www.w3.org/1999/xlink", ref: c, "aria-labelledby": t, ...i }, e ? /* @__PURE__ */ E.createElement("title", { id: t }, e) : null, /* @__PURE__ */ E.createElement("path", { d: "M369.792 704.32L930.304 128 1024 223.616 369.984 896l-20.288-20.864-0.128 0.128L0 516.8 96.128 423.68l273.664 280.64z", "p-id": 1464 })), e0 = E.forwardRef(Jg), t0 = ({
  title: e,
  titleId: t,
  ...i
}, c) => /* @__PURE__ */ E.createElement("svg", { t: 1721712695744, className: "icon", viewBox: "0 0 1024 1024", xmlns: "http://www.w3.org/2000/svg", "p-id": 4043, xmlnsXlink: "http://www.w3.org/1999/xlink", ref: c, "aria-labelledby": t, ...i }, e ? /* @__PURE__ */ E.createElement("title", { id: t }, e) : null, /* @__PURE__ */ E.createElement("path", { d: "M960 154.24L869.76 64 512 421.76 154.24 64 64 154.24 421.76 512 64 869.76 154.24 960 512 602.24 869.76 960 960 869.76 602.24 512z", "p-id": 4044 })), n0 = E.forwardRef(t0), i0 = ({
  title: e,
  titleId: t,
  ...i
}, c) => /* @__PURE__ */ E.createElement("svg", { t: 1722477182503, className: "icon", viewBox: "0 0 1024 1024", xmlns: "http://www.w3.org/2000/svg", "p-id": 8793, xmlnsXlink: "http://www.w3.org/1999/xlink", ref: c, "aria-labelledby": t, ...i }, e ? /* @__PURE__ */ E.createElement("title", { id: t }, e) : null, /* @__PURE__ */ E.createElement("path", { d: "M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72z", "p-id": 8794 }), /* @__PURE__ */ E.createElement("path", { d: "M864 256H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z", "p-id": 8795 })), zc = E.forwardRef(i0), r0 = ({
  title: e,
  titleId: t,
  ...i
}, c) => /* @__PURE__ */ E.createElement("svg", { t: 1722477192628, className: "icon", viewBox: "0 0 1024 1024", xmlns: "http://www.w3.org/2000/svg", "p-id": 8976, xmlnsXlink: "http://www.w3.org/1999/xlink", ref: c, "aria-labelledby": t, ...i }, e ? /* @__PURE__ */ E.createElement("title", { id: t }, e) : null, /* @__PURE__ */ E.createElement("path", { d: "M942.3 486.4l-0.1-0.1-0.1-0.1c-36.4-76.7-80-138.7-130.7-186L760.7 351c43.7 40.2 81.5 93.7 114.1 160.9C791.5 684.2 673.4 766 512 766c-51.3 0-98.3-8.3-141.2-25.1l-54.7 54.7C374.6 823.8 439.8 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0.1-51.3zM878.3 154.2l-42.4-42.4c-3.1-3.1-8.2-3.1-11.3 0L707.8 228.5C649.4 200.2 584.2 186 512 186c-192.2 0-335.4 100.5-430.2 300.3v0.1c-7.7 16.2-7.7 35.2 0 51.5 36.4 76.7 80 138.7 130.7 186.1L111.8 824.5c-3.1 3.1-3.1 8.2 0 11.3l42.4 42.4c3.1 3.1 8.2 3.1 11.3 0l712.8-712.8c3.1-3 3.1-8.1 0-11.2zM398.9 537.4c-1.9-8.2-2.9-16.7-2.9-25.4 0-61.9 50.1-112 112-112 8.7 0 17.3 1 25.4 2.9L398.9 537.4z m184.5-184.5C560.5 342.1 535 336 508 336c-97.2 0-176 78.8-176 176 0 27 6.1 52.5 16.9 75.4L263.3 673c-43.7-40.2-81.5-93.7-114.1-160.9C232.6 339.8 350.7 258 512 258c51.3 0 98.3 8.3 141.2 25.1l-69.8 69.8z", "p-id": 8977 }), /* @__PURE__ */ E.createElement("path", { d: "M508 624c-6.4 0-12.7-0.5-18.8-1.6l-51.1 51.1c21.4 9.3 45.1 14.4 69.9 14.4 97.2 0 176-78.8 176-176 0-24.8-5.1-48.5-14.4-69.9l-51.1 51.1c1 6.1 1.6 12.4 1.6 18.8C620 573.9 569.9 624 508 624z", "p-id": 8978 })), o0 = E.forwardRef(r0), a0 = ({
  title: e,
  titleId: t,
  ...i
}, c) => /* @__PURE__ */ E.createElement("svg", { t: 1722154899261, className: "icon", viewBox: "0 0 1024 1024", xmlns: "http://www.w3.org/2000/svg", "p-id": 1632, xmlnsXlink: "http://www.w3.org/1999/xlink", ref: c, "aria-labelledby": t, ...i }, e ? /* @__PURE__ */ E.createElement("title", { id: t }, e) : null, /* @__PURE__ */ E.createElement("path", { d: "M512 74.666667c-17.066667 0-32 14.933333-32 32v149.333333c0 17.066667 14.933333 32 32 32s32-14.933333 32-32V106.666667c0-17.066667-14.933333-32-32-32zM693.333333 362.666667c8.533333 0 17.066667-2.133333 23.466667-8.533334l104.533333-104.533333c12.8-12.8 12.8-32 0-44.8-12.8-12.8-32-12.8-44.8 0l-104.533333 104.533333c-12.8 12.8-12.8 32 0 44.8 4.266667 6.4 12.8 8.533333 21.333333 8.533334zM917.333333 480h-149.333333c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32h149.333333c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32zM714.666667 669.866667c-12.8-12.8-32-12.8-44.8 0s-12.8 32 0 44.8l104.533333 104.533333c6.4 6.4 14.933333 8.533333 23.466667 8.533333s17.066667-2.133333 23.466666-8.533333c12.8-12.8 12.8-32 0-44.8l-106.666666-104.533333zM512 736c-17.066667 0-32 14.933333-32 32v149.333333c0 17.066667 14.933333 32 32 32s32-14.933333 32-32v-149.333333c0-17.066667-14.933333-32-32-32zM309.333333 669.866667l-104.533333 104.533333c-12.8 12.8-12.8 32 0 44.8 6.4 6.4 14.933333 8.533333 23.466667 8.533333s17.066667-2.133333 23.466666-8.533333l104.533334-104.533333c12.8-12.8 12.8-32 0-44.8s-36.266667-12.8-46.933334 0zM288 512c0-17.066667-14.933333-32-32-32H106.666667c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32h149.333333c17.066667 0 32-14.933333 32-32zM247.466667 202.666667c-12.8-12.8-32-12.8-44.8 0-12.8 12.8-12.8 32 0 44.8l104.533333 104.533333c6.4 6.4 14.933333 8.533333 23.466667 8.533333s17.066667-2.133333 23.466666-8.533333c12.8-12.8 12.8-32 0-44.8l-106.666666-104.533333z", "p-id": 1633 })), s0 = E.forwardRef(a0), l0 = ({
  title: e,
  titleId: t,
  ...i
}, c) => /* @__PURE__ */ E.createElement("svg", { t: 1732524822270, className: "icon", viewBox: "0 0 1024 1024", xmlns: "http://www.w3.org/2000/svg", "p-id": 5255, width: 200, height: 200, ref: c, "aria-labelledby": t, ...i }, e ? /* @__PURE__ */ E.createElement("title", { id: t }, e) : null, /* @__PURE__ */ E.createElement("path", { d: "M213.333333 810.666667h597.333334a42.666667 42.666667 0 0 1 0 85.333333H213.333333a42.666667 42.666667 0 0 1 0-85.333333z m341.333334-248.533334l138.368-138.325333 60.330666 60.330667L512 725.504l-241.365333-241.365333 60.330666-60.330667L469.333333 562.133333V85.333333h85.333334v476.8z", "p-id": 5256 })), c0 = E.forwardRef(l0);
var _p = { exports: {} }, u0 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", h0 = u0, p0 = h0;
function Cp() {
}
function Sp() {
}
Sp.resetWarningCache = Cp;
var d0 = function() {
  function e(c, f, m, w, S, O) {
    if (O !== p0) {
      var z = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw z.name = "Invariant Violation", z;
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var i = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: Sp,
    resetWarningCache: Cp
  };
  return i.PropTypes = i, i;
};
_p.exports = d0();
var f0 = _p.exports;
const Ae = /* @__PURE__ */ xs(f0);
function Vn(e, t, i, c) {
  function f(m) {
    return m instanceof i ? m : new i(function(w) {
      w(m);
    });
  }
  return new (i || (i = Promise))(function(m, w) {
    function S(V) {
      try {
        z(c.next(V));
      } catch (K) {
        w(K);
      }
    }
    function O(V) {
      try {
        z(c.throw(V));
      } catch (K) {
        w(K);
      }
    }
    function z(V) {
      V.done ? m(V.value) : f(V.value).then(S, O);
    }
    z((c = c.apply(e, t || [])).next());
  });
}
const g0 = /* @__PURE__ */ new Map([
  // https://github.com/guzzle/psr7/blob/2d9260799e713f1c475d3c5fdc3d6561ff7441b2/src/MimeType.php
  ["1km", "application/vnd.1000minds.decision-model+xml"],
  ["3dml", "text/vnd.in3d.3dml"],
  ["3ds", "image/x-3ds"],
  ["3g2", "video/3gpp2"],
  ["3gp", "video/3gp"],
  ["3gpp", "video/3gpp"],
  ["3mf", "model/3mf"],
  ["7z", "application/x-7z-compressed"],
  ["7zip", "application/x-7z-compressed"],
  ["123", "application/vnd.lotus-1-2-3"],
  ["aab", "application/x-authorware-bin"],
  ["aac", "audio/x-acc"],
  ["aam", "application/x-authorware-map"],
  ["aas", "application/x-authorware-seg"],
  ["abw", "application/x-abiword"],
  ["ac", "application/vnd.nokia.n-gage.ac+xml"],
  ["ac3", "audio/ac3"],
  ["acc", "application/vnd.americandynamics.acc"],
  ["ace", "application/x-ace-compressed"],
  ["acu", "application/vnd.acucobol"],
  ["acutc", "application/vnd.acucorp"],
  ["adp", "audio/adpcm"],
  ["aep", "application/vnd.audiograph"],
  ["afm", "application/x-font-type1"],
  ["afp", "application/vnd.ibm.modcap"],
  ["ahead", "application/vnd.ahead.space"],
  ["ai", "application/pdf"],
  ["aif", "audio/x-aiff"],
  ["aifc", "audio/x-aiff"],
  ["aiff", "audio/x-aiff"],
  ["air", "application/vnd.adobe.air-application-installer-package+zip"],
  ["ait", "application/vnd.dvb.ait"],
  ["ami", "application/vnd.amiga.ami"],
  ["amr", "audio/amr"],
  ["apk", "application/vnd.android.package-archive"],
  ["apng", "image/apng"],
  ["appcache", "text/cache-manifest"],
  ["application", "application/x-ms-application"],
  ["apr", "application/vnd.lotus-approach"],
  ["arc", "application/x-freearc"],
  ["arj", "application/x-arj"],
  ["asc", "application/pgp-signature"],
  ["asf", "video/x-ms-asf"],
  ["asm", "text/x-asm"],
  ["aso", "application/vnd.accpac.simply.aso"],
  ["asx", "video/x-ms-asf"],
  ["atc", "application/vnd.acucorp"],
  ["atom", "application/atom+xml"],
  ["atomcat", "application/atomcat+xml"],
  ["atomdeleted", "application/atomdeleted+xml"],
  ["atomsvc", "application/atomsvc+xml"],
  ["atx", "application/vnd.antix.game-component"],
  ["au", "audio/x-au"],
  ["avi", "video/x-msvideo"],
  ["avif", "image/avif"],
  ["aw", "application/applixware"],
  ["azf", "application/vnd.airzip.filesecure.azf"],
  ["azs", "application/vnd.airzip.filesecure.azs"],
  ["azv", "image/vnd.airzip.accelerator.azv"],
  ["azw", "application/vnd.amazon.ebook"],
  ["b16", "image/vnd.pco.b16"],
  ["bat", "application/x-msdownload"],
  ["bcpio", "application/x-bcpio"],
  ["bdf", "application/x-font-bdf"],
  ["bdm", "application/vnd.syncml.dm+wbxml"],
  ["bdoc", "application/x-bdoc"],
  ["bed", "application/vnd.realvnc.bed"],
  ["bh2", "application/vnd.fujitsu.oasysprs"],
  ["bin", "application/octet-stream"],
  ["blb", "application/x-blorb"],
  ["blorb", "application/x-blorb"],
  ["bmi", "application/vnd.bmi"],
  ["bmml", "application/vnd.balsamiq.bmml+xml"],
  ["bmp", "image/bmp"],
  ["book", "application/vnd.framemaker"],
  ["box", "application/vnd.previewsystems.box"],
  ["boz", "application/x-bzip2"],
  ["bpk", "application/octet-stream"],
  ["bpmn", "application/octet-stream"],
  ["bsp", "model/vnd.valve.source.compiled-map"],
  ["btif", "image/prs.btif"],
  ["buffer", "application/octet-stream"],
  ["bz", "application/x-bzip"],
  ["bz2", "application/x-bzip2"],
  ["c", "text/x-c"],
  ["c4d", "application/vnd.clonk.c4group"],
  ["c4f", "application/vnd.clonk.c4group"],
  ["c4g", "application/vnd.clonk.c4group"],
  ["c4p", "application/vnd.clonk.c4group"],
  ["c4u", "application/vnd.clonk.c4group"],
  ["c11amc", "application/vnd.cluetrust.cartomobile-config"],
  ["c11amz", "application/vnd.cluetrust.cartomobile-config-pkg"],
  ["cab", "application/vnd.ms-cab-compressed"],
  ["caf", "audio/x-caf"],
  ["cap", "application/vnd.tcpdump.pcap"],
  ["car", "application/vnd.curl.car"],
  ["cat", "application/vnd.ms-pki.seccat"],
  ["cb7", "application/x-cbr"],
  ["cba", "application/x-cbr"],
  ["cbr", "application/x-cbr"],
  ["cbt", "application/x-cbr"],
  ["cbz", "application/x-cbr"],
  ["cc", "text/x-c"],
  ["cco", "application/x-cocoa"],
  ["cct", "application/x-director"],
  ["ccxml", "application/ccxml+xml"],
  ["cdbcmsg", "application/vnd.contact.cmsg"],
  ["cda", "application/x-cdf"],
  ["cdf", "application/x-netcdf"],
  ["cdfx", "application/cdfx+xml"],
  ["cdkey", "application/vnd.mediastation.cdkey"],
  ["cdmia", "application/cdmi-capability"],
  ["cdmic", "application/cdmi-container"],
  ["cdmid", "application/cdmi-domain"],
  ["cdmio", "application/cdmi-object"],
  ["cdmiq", "application/cdmi-queue"],
  ["cdr", "application/cdr"],
  ["cdx", "chemical/x-cdx"],
  ["cdxml", "application/vnd.chemdraw+xml"],
  ["cdy", "application/vnd.cinderella"],
  ["cer", "application/pkix-cert"],
  ["cfs", "application/x-cfs-compressed"],
  ["cgm", "image/cgm"],
  ["chat", "application/x-chat"],
  ["chm", "application/vnd.ms-htmlhelp"],
  ["chrt", "application/vnd.kde.kchart"],
  ["cif", "chemical/x-cif"],
  ["cii", "application/vnd.anser-web-certificate-issue-initiation"],
  ["cil", "application/vnd.ms-artgalry"],
  ["cjs", "application/node"],
  ["cla", "application/vnd.claymore"],
  ["class", "application/octet-stream"],
  ["clkk", "application/vnd.crick.clicker.keyboard"],
  ["clkp", "application/vnd.crick.clicker.palette"],
  ["clkt", "application/vnd.crick.clicker.template"],
  ["clkw", "application/vnd.crick.clicker.wordbank"],
  ["clkx", "application/vnd.crick.clicker"],
  ["clp", "application/x-msclip"],
  ["cmc", "application/vnd.cosmocaller"],
  ["cmdf", "chemical/x-cmdf"],
  ["cml", "chemical/x-cml"],
  ["cmp", "application/vnd.yellowriver-custom-menu"],
  ["cmx", "image/x-cmx"],
  ["cod", "application/vnd.rim.cod"],
  ["coffee", "text/coffeescript"],
  ["com", "application/x-msdownload"],
  ["conf", "text/plain"],
  ["cpio", "application/x-cpio"],
  ["cpp", "text/x-c"],
  ["cpt", "application/mac-compactpro"],
  ["crd", "application/x-mscardfile"],
  ["crl", "application/pkix-crl"],
  ["crt", "application/x-x509-ca-cert"],
  ["crx", "application/x-chrome-extension"],
  ["cryptonote", "application/vnd.rig.cryptonote"],
  ["csh", "application/x-csh"],
  ["csl", "application/vnd.citationstyles.style+xml"],
  ["csml", "chemical/x-csml"],
  ["csp", "application/vnd.commonspace"],
  ["csr", "application/octet-stream"],
  ["css", "text/css"],
  ["cst", "application/x-director"],
  ["csv", "text/csv"],
  ["cu", "application/cu-seeme"],
  ["curl", "text/vnd.curl"],
  ["cww", "application/prs.cww"],
  ["cxt", "application/x-director"],
  ["cxx", "text/x-c"],
  ["dae", "model/vnd.collada+xml"],
  ["daf", "application/vnd.mobius.daf"],
  ["dart", "application/vnd.dart"],
  ["dataless", "application/vnd.fdsn.seed"],
  ["davmount", "application/davmount+xml"],
  ["dbf", "application/vnd.dbf"],
  ["dbk", "application/docbook+xml"],
  ["dcr", "application/x-director"],
  ["dcurl", "text/vnd.curl.dcurl"],
  ["dd2", "application/vnd.oma.dd2+xml"],
  ["ddd", "application/vnd.fujixerox.ddd"],
  ["ddf", "application/vnd.syncml.dmddf+xml"],
  ["dds", "image/vnd.ms-dds"],
  ["deb", "application/x-debian-package"],
  ["def", "text/plain"],
  ["deploy", "application/octet-stream"],
  ["der", "application/x-x509-ca-cert"],
  ["dfac", "application/vnd.dreamfactory"],
  ["dgc", "application/x-dgc-compressed"],
  ["dic", "text/x-c"],
  ["dir", "application/x-director"],
  ["dis", "application/vnd.mobius.dis"],
  ["disposition-notification", "message/disposition-notification"],
  ["dist", "application/octet-stream"],
  ["distz", "application/octet-stream"],
  ["djv", "image/vnd.djvu"],
  ["djvu", "image/vnd.djvu"],
  ["dll", "application/octet-stream"],
  ["dmg", "application/x-apple-diskimage"],
  ["dmn", "application/octet-stream"],
  ["dmp", "application/vnd.tcpdump.pcap"],
  ["dms", "application/octet-stream"],
  ["dna", "application/vnd.dna"],
  ["doc", "application/msword"],
  ["docm", "application/vnd.ms-word.template.macroEnabled.12"],
  ["docx", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
  ["dot", "application/msword"],
  ["dotm", "application/vnd.ms-word.template.macroEnabled.12"],
  ["dotx", "application/vnd.openxmlformats-officedocument.wordprocessingml.template"],
  ["dp", "application/vnd.osgi.dp"],
  ["dpg", "application/vnd.dpgraph"],
  ["dra", "audio/vnd.dra"],
  ["drle", "image/dicom-rle"],
  ["dsc", "text/prs.lines.tag"],
  ["dssc", "application/dssc+der"],
  ["dtb", "application/x-dtbook+xml"],
  ["dtd", "application/xml-dtd"],
  ["dts", "audio/vnd.dts"],
  ["dtshd", "audio/vnd.dts.hd"],
  ["dump", "application/octet-stream"],
  ["dvb", "video/vnd.dvb.file"],
  ["dvi", "application/x-dvi"],
  ["dwd", "application/atsc-dwd+xml"],
  ["dwf", "model/vnd.dwf"],
  ["dwg", "image/vnd.dwg"],
  ["dxf", "image/vnd.dxf"],
  ["dxp", "application/vnd.spotfire.dxp"],
  ["dxr", "application/x-director"],
  ["ear", "application/java-archive"],
  ["ecelp4800", "audio/vnd.nuera.ecelp4800"],
  ["ecelp7470", "audio/vnd.nuera.ecelp7470"],
  ["ecelp9600", "audio/vnd.nuera.ecelp9600"],
  ["ecma", "application/ecmascript"],
  ["edm", "application/vnd.novadigm.edm"],
  ["edx", "application/vnd.novadigm.edx"],
  ["efif", "application/vnd.picsel"],
  ["ei6", "application/vnd.pg.osasli"],
  ["elc", "application/octet-stream"],
  ["emf", "image/emf"],
  ["eml", "message/rfc822"],
  ["emma", "application/emma+xml"],
  ["emotionml", "application/emotionml+xml"],
  ["emz", "application/x-msmetafile"],
  ["eol", "audio/vnd.digital-winds"],
  ["eot", "application/vnd.ms-fontobject"],
  ["eps", "application/postscript"],
  ["epub", "application/epub+zip"],
  ["es", "application/ecmascript"],
  ["es3", "application/vnd.eszigno3+xml"],
  ["esa", "application/vnd.osgi.subsystem"],
  ["esf", "application/vnd.epson.esf"],
  ["et3", "application/vnd.eszigno3+xml"],
  ["etx", "text/x-setext"],
  ["eva", "application/x-eva"],
  ["evy", "application/x-envoy"],
  ["exe", "application/octet-stream"],
  ["exi", "application/exi"],
  ["exp", "application/express"],
  ["exr", "image/aces"],
  ["ext", "application/vnd.novadigm.ext"],
  ["ez", "application/andrew-inset"],
  ["ez2", "application/vnd.ezpix-album"],
  ["ez3", "application/vnd.ezpix-package"],
  ["f", "text/x-fortran"],
  ["f4v", "video/mp4"],
  ["f77", "text/x-fortran"],
  ["f90", "text/x-fortran"],
  ["fbs", "image/vnd.fastbidsheet"],
  ["fcdt", "application/vnd.adobe.formscentral.fcdt"],
  ["fcs", "application/vnd.isac.fcs"],
  ["fdf", "application/vnd.fdf"],
  ["fdt", "application/fdt+xml"],
  ["fe_launch", "application/vnd.denovo.fcselayout-link"],
  ["fg5", "application/vnd.fujitsu.oasysgp"],
  ["fgd", "application/x-director"],
  ["fh", "image/x-freehand"],
  ["fh4", "image/x-freehand"],
  ["fh5", "image/x-freehand"],
  ["fh7", "image/x-freehand"],
  ["fhc", "image/x-freehand"],
  ["fig", "application/x-xfig"],
  ["fits", "image/fits"],
  ["flac", "audio/x-flac"],
  ["fli", "video/x-fli"],
  ["flo", "application/vnd.micrografx.flo"],
  ["flv", "video/x-flv"],
  ["flw", "application/vnd.kde.kivio"],
  ["flx", "text/vnd.fmi.flexstor"],
  ["fly", "text/vnd.fly"],
  ["fm", "application/vnd.framemaker"],
  ["fnc", "application/vnd.frogans.fnc"],
  ["fo", "application/vnd.software602.filler.form+xml"],
  ["for", "text/x-fortran"],
  ["fpx", "image/vnd.fpx"],
  ["frame", "application/vnd.framemaker"],
  ["fsc", "application/vnd.fsc.weblaunch"],
  ["fst", "image/vnd.fst"],
  ["ftc", "application/vnd.fluxtime.clip"],
  ["fti", "application/vnd.anser-web-funds-transfer-initiation"],
  ["fvt", "video/vnd.fvt"],
  ["fxp", "application/vnd.adobe.fxp"],
  ["fxpl", "application/vnd.adobe.fxp"],
  ["fzs", "application/vnd.fuzzysheet"],
  ["g2w", "application/vnd.geoplan"],
  ["g3", "image/g3fax"],
  ["g3w", "application/vnd.geospace"],
  ["gac", "application/vnd.groove-account"],
  ["gam", "application/x-tads"],
  ["gbr", "application/rpki-ghostbusters"],
  ["gca", "application/x-gca-compressed"],
  ["gdl", "model/vnd.gdl"],
  ["gdoc", "application/vnd.google-apps.document"],
  ["geo", "application/vnd.dynageo"],
  ["geojson", "application/geo+json"],
  ["gex", "application/vnd.geometry-explorer"],
  ["ggb", "application/vnd.geogebra.file"],
  ["ggt", "application/vnd.geogebra.tool"],
  ["ghf", "application/vnd.groove-help"],
  ["gif", "image/gif"],
  ["gim", "application/vnd.groove-identity-message"],
  ["glb", "model/gltf-binary"],
  ["gltf", "model/gltf+json"],
  ["gml", "application/gml+xml"],
  ["gmx", "application/vnd.gmx"],
  ["gnumeric", "application/x-gnumeric"],
  ["gpg", "application/gpg-keys"],
  ["gph", "application/vnd.flographit"],
  ["gpx", "application/gpx+xml"],
  ["gqf", "application/vnd.grafeq"],
  ["gqs", "application/vnd.grafeq"],
  ["gram", "application/srgs"],
  ["gramps", "application/x-gramps-xml"],
  ["gre", "application/vnd.geometry-explorer"],
  ["grv", "application/vnd.groove-injector"],
  ["grxml", "application/srgs+xml"],
  ["gsf", "application/x-font-ghostscript"],
  ["gsheet", "application/vnd.google-apps.spreadsheet"],
  ["gslides", "application/vnd.google-apps.presentation"],
  ["gtar", "application/x-gtar"],
  ["gtm", "application/vnd.groove-tool-message"],
  ["gtw", "model/vnd.gtw"],
  ["gv", "text/vnd.graphviz"],
  ["gxf", "application/gxf"],
  ["gxt", "application/vnd.geonext"],
  ["gz", "application/gzip"],
  ["gzip", "application/gzip"],
  ["h", "text/x-c"],
  ["h261", "video/h261"],
  ["h263", "video/h263"],
  ["h264", "video/h264"],
  ["hal", "application/vnd.hal+xml"],
  ["hbci", "application/vnd.hbci"],
  ["hbs", "text/x-handlebars-template"],
  ["hdd", "application/x-virtualbox-hdd"],
  ["hdf", "application/x-hdf"],
  ["heic", "image/heic"],
  ["heics", "image/heic-sequence"],
  ["heif", "image/heif"],
  ["heifs", "image/heif-sequence"],
  ["hej2", "image/hej2k"],
  ["held", "application/atsc-held+xml"],
  ["hh", "text/x-c"],
  ["hjson", "application/hjson"],
  ["hlp", "application/winhlp"],
  ["hpgl", "application/vnd.hp-hpgl"],
  ["hpid", "application/vnd.hp-hpid"],
  ["hps", "application/vnd.hp-hps"],
  ["hqx", "application/mac-binhex40"],
  ["hsj2", "image/hsj2"],
  ["htc", "text/x-component"],
  ["htke", "application/vnd.kenameaapp"],
  ["htm", "text/html"],
  ["html", "text/html"],
  ["hvd", "application/vnd.yamaha.hv-dic"],
  ["hvp", "application/vnd.yamaha.hv-voice"],
  ["hvs", "application/vnd.yamaha.hv-script"],
  ["i2g", "application/vnd.intergeo"],
  ["icc", "application/vnd.iccprofile"],
  ["ice", "x-conference/x-cooltalk"],
  ["icm", "application/vnd.iccprofile"],
  ["ico", "image/x-icon"],
  ["ics", "text/calendar"],
  ["ief", "image/ief"],
  ["ifb", "text/calendar"],
  ["ifm", "application/vnd.shana.informed.formdata"],
  ["iges", "model/iges"],
  ["igl", "application/vnd.igloader"],
  ["igm", "application/vnd.insors.igm"],
  ["igs", "model/iges"],
  ["igx", "application/vnd.micrografx.igx"],
  ["iif", "application/vnd.shana.informed.interchange"],
  ["img", "application/octet-stream"],
  ["imp", "application/vnd.accpac.simply.imp"],
  ["ims", "application/vnd.ms-ims"],
  ["in", "text/plain"],
  ["ini", "text/plain"],
  ["ink", "application/inkml+xml"],
  ["inkml", "application/inkml+xml"],
  ["install", "application/x-install-instructions"],
  ["iota", "application/vnd.astraea-software.iota"],
  ["ipfix", "application/ipfix"],
  ["ipk", "application/vnd.shana.informed.package"],
  ["irm", "application/vnd.ibm.rights-management"],
  ["irp", "application/vnd.irepository.package+xml"],
  ["iso", "application/x-iso9660-image"],
  ["itp", "application/vnd.shana.informed.formtemplate"],
  ["its", "application/its+xml"],
  ["ivp", "application/vnd.immervision-ivp"],
  ["ivu", "application/vnd.immervision-ivu"],
  ["jad", "text/vnd.sun.j2me.app-descriptor"],
  ["jade", "text/jade"],
  ["jam", "application/vnd.jam"],
  ["jar", "application/java-archive"],
  ["jardiff", "application/x-java-archive-diff"],
  ["java", "text/x-java-source"],
  ["jhc", "image/jphc"],
  ["jisp", "application/vnd.jisp"],
  ["jls", "image/jls"],
  ["jlt", "application/vnd.hp-jlyt"],
  ["jng", "image/x-jng"],
  ["jnlp", "application/x-java-jnlp-file"],
  ["joda", "application/vnd.joost.joda-archive"],
  ["jp2", "image/jp2"],
  ["jpe", "image/jpeg"],
  ["jpeg", "image/jpeg"],
  ["jpf", "image/jpx"],
  ["jpg", "image/jpeg"],
  ["jpg2", "image/jp2"],
  ["jpgm", "video/jpm"],
  ["jpgv", "video/jpeg"],
  ["jph", "image/jph"],
  ["jpm", "video/jpm"],
  ["jpx", "image/jpx"],
  ["js", "application/javascript"],
  ["json", "application/json"],
  ["json5", "application/json5"],
  ["jsonld", "application/ld+json"],
  // https://jsonlines.org/
  ["jsonl", "application/jsonl"],
  ["jsonml", "application/jsonml+json"],
  ["jsx", "text/jsx"],
  ["jxr", "image/jxr"],
  ["jxra", "image/jxra"],
  ["jxrs", "image/jxrs"],
  ["jxs", "image/jxs"],
  ["jxsc", "image/jxsc"],
  ["jxsi", "image/jxsi"],
  ["jxss", "image/jxss"],
  ["kar", "audio/midi"],
  ["karbon", "application/vnd.kde.karbon"],
  ["kdb", "application/octet-stream"],
  ["kdbx", "application/x-keepass2"],
  ["key", "application/x-iwork-keynote-sffkey"],
  ["kfo", "application/vnd.kde.kformula"],
  ["kia", "application/vnd.kidspiration"],
  ["kml", "application/vnd.google-earth.kml+xml"],
  ["kmz", "application/vnd.google-earth.kmz"],
  ["kne", "application/vnd.kinar"],
  ["knp", "application/vnd.kinar"],
  ["kon", "application/vnd.kde.kontour"],
  ["kpr", "application/vnd.kde.kpresenter"],
  ["kpt", "application/vnd.kde.kpresenter"],
  ["kpxx", "application/vnd.ds-keypoint"],
  ["ksp", "application/vnd.kde.kspread"],
  ["ktr", "application/vnd.kahootz"],
  ["ktx", "image/ktx"],
  ["ktx2", "image/ktx2"],
  ["ktz", "application/vnd.kahootz"],
  ["kwd", "application/vnd.kde.kword"],
  ["kwt", "application/vnd.kde.kword"],
  ["lasxml", "application/vnd.las.las+xml"],
  ["latex", "application/x-latex"],
  ["lbd", "application/vnd.llamagraphics.life-balance.desktop"],
  ["lbe", "application/vnd.llamagraphics.life-balance.exchange+xml"],
  ["les", "application/vnd.hhe.lesson-player"],
  ["less", "text/less"],
  ["lgr", "application/lgr+xml"],
  ["lha", "application/octet-stream"],
  ["link66", "application/vnd.route66.link66+xml"],
  ["list", "text/plain"],
  ["list3820", "application/vnd.ibm.modcap"],
  ["listafp", "application/vnd.ibm.modcap"],
  ["litcoffee", "text/coffeescript"],
  ["lnk", "application/x-ms-shortcut"],
  ["log", "text/plain"],
  ["lostxml", "application/lost+xml"],
  ["lrf", "application/octet-stream"],
  ["lrm", "application/vnd.ms-lrm"],
  ["ltf", "application/vnd.frogans.ltf"],
  ["lua", "text/x-lua"],
  ["luac", "application/x-lua-bytecode"],
  ["lvp", "audio/vnd.lucent.voice"],
  ["lwp", "application/vnd.lotus-wordpro"],
  ["lzh", "application/octet-stream"],
  ["m1v", "video/mpeg"],
  ["m2a", "audio/mpeg"],
  ["m2v", "video/mpeg"],
  ["m3a", "audio/mpeg"],
  ["m3u", "text/plain"],
  ["m3u8", "application/vnd.apple.mpegurl"],
  ["m4a", "audio/x-m4a"],
  ["m4p", "application/mp4"],
  ["m4s", "video/iso.segment"],
  ["m4u", "application/vnd.mpegurl"],
  ["m4v", "video/x-m4v"],
  ["m13", "application/x-msmediaview"],
  ["m14", "application/x-msmediaview"],
  ["m21", "application/mp21"],
  ["ma", "application/mathematica"],
  ["mads", "application/mads+xml"],
  ["maei", "application/mmt-aei+xml"],
  ["mag", "application/vnd.ecowin.chart"],
  ["maker", "application/vnd.framemaker"],
  ["man", "text/troff"],
  ["manifest", "text/cache-manifest"],
  ["map", "application/json"],
  ["mar", "application/octet-stream"],
  ["markdown", "text/markdown"],
  ["mathml", "application/mathml+xml"],
  ["mb", "application/mathematica"],
  ["mbk", "application/vnd.mobius.mbk"],
  ["mbox", "application/mbox"],
  ["mc1", "application/vnd.medcalcdata"],
  ["mcd", "application/vnd.mcd"],
  ["mcurl", "text/vnd.curl.mcurl"],
  ["md", "text/markdown"],
  ["mdb", "application/x-msaccess"],
  ["mdi", "image/vnd.ms-modi"],
  ["mdx", "text/mdx"],
  ["me", "text/troff"],
  ["mesh", "model/mesh"],
  ["meta4", "application/metalink4+xml"],
  ["metalink", "application/metalink+xml"],
  ["mets", "application/mets+xml"],
  ["mfm", "application/vnd.mfmp"],
  ["mft", "application/rpki-manifest"],
  ["mgp", "application/vnd.osgeo.mapguide.package"],
  ["mgz", "application/vnd.proteus.magazine"],
  ["mid", "audio/midi"],
  ["midi", "audio/midi"],
  ["mie", "application/x-mie"],
  ["mif", "application/vnd.mif"],
  ["mime", "message/rfc822"],
  ["mj2", "video/mj2"],
  ["mjp2", "video/mj2"],
  ["mjs", "application/javascript"],
  ["mk3d", "video/x-matroska"],
  ["mka", "audio/x-matroska"],
  ["mkd", "text/x-markdown"],
  ["mks", "video/x-matroska"],
  ["mkv", "video/x-matroska"],
  ["mlp", "application/vnd.dolby.mlp"],
  ["mmd", "application/vnd.chipnuts.karaoke-mmd"],
  ["mmf", "application/vnd.smaf"],
  ["mml", "text/mathml"],
  ["mmr", "image/vnd.fujixerox.edmics-mmr"],
  ["mng", "video/x-mng"],
  ["mny", "application/x-msmoney"],
  ["mobi", "application/x-mobipocket-ebook"],
  ["mods", "application/mods+xml"],
  ["mov", "video/quicktime"],
  ["movie", "video/x-sgi-movie"],
  ["mp2", "audio/mpeg"],
  ["mp2a", "audio/mpeg"],
  ["mp3", "audio/mpeg"],
  ["mp4", "video/mp4"],
  ["mp4a", "audio/mp4"],
  ["mp4s", "application/mp4"],
  ["mp4v", "video/mp4"],
  ["mp21", "application/mp21"],
  ["mpc", "application/vnd.mophun.certificate"],
  ["mpd", "application/dash+xml"],
  ["mpe", "video/mpeg"],
  ["mpeg", "video/mpeg"],
  ["mpg", "video/mpeg"],
  ["mpg4", "video/mp4"],
  ["mpga", "audio/mpeg"],
  ["mpkg", "application/vnd.apple.installer+xml"],
  ["mpm", "application/vnd.blueice.multipass"],
  ["mpn", "application/vnd.mophun.application"],
  ["mpp", "application/vnd.ms-project"],
  ["mpt", "application/vnd.ms-project"],
  ["mpy", "application/vnd.ibm.minipay"],
  ["mqy", "application/vnd.mobius.mqy"],
  ["mrc", "application/marc"],
  ["mrcx", "application/marcxml+xml"],
  ["ms", "text/troff"],
  ["mscml", "application/mediaservercontrol+xml"],
  ["mseed", "application/vnd.fdsn.mseed"],
  ["mseq", "application/vnd.mseq"],
  ["msf", "application/vnd.epson.msf"],
  ["msg", "application/vnd.ms-outlook"],
  ["msh", "model/mesh"],
  ["msi", "application/x-msdownload"],
  ["msl", "application/vnd.mobius.msl"],
  ["msm", "application/octet-stream"],
  ["msp", "application/octet-stream"],
  ["msty", "application/vnd.muvee.style"],
  ["mtl", "model/mtl"],
  ["mts", "model/vnd.mts"],
  ["mus", "application/vnd.musician"],
  ["musd", "application/mmt-usd+xml"],
  ["musicxml", "application/vnd.recordare.musicxml+xml"],
  ["mvb", "application/x-msmediaview"],
  ["mvt", "application/vnd.mapbox-vector-tile"],
  ["mwf", "application/vnd.mfer"],
  ["mxf", "application/mxf"],
  ["mxl", "application/vnd.recordare.musicxml"],
  ["mxmf", "audio/mobile-xmf"],
  ["mxml", "application/xv+xml"],
  ["mxs", "application/vnd.triscape.mxs"],
  ["mxu", "video/vnd.mpegurl"],
  ["n-gage", "application/vnd.nokia.n-gage.symbian.install"],
  ["n3", "text/n3"],
  ["nb", "application/mathematica"],
  ["nbp", "application/vnd.wolfram.player"],
  ["nc", "application/x-netcdf"],
  ["ncx", "application/x-dtbncx+xml"],
  ["nfo", "text/x-nfo"],
  ["ngdat", "application/vnd.nokia.n-gage.data"],
  ["nitf", "application/vnd.nitf"],
  ["nlu", "application/vnd.neurolanguage.nlu"],
  ["nml", "application/vnd.enliven"],
  ["nnd", "application/vnd.noblenet-directory"],
  ["nns", "application/vnd.noblenet-sealer"],
  ["nnw", "application/vnd.noblenet-web"],
  ["npx", "image/vnd.net-fpx"],
  ["nq", "application/n-quads"],
  ["nsc", "application/x-conference"],
  ["nsf", "application/vnd.lotus-notes"],
  ["nt", "application/n-triples"],
  ["ntf", "application/vnd.nitf"],
  ["numbers", "application/x-iwork-numbers-sffnumbers"],
  ["nzb", "application/x-nzb"],
  ["oa2", "application/vnd.fujitsu.oasys2"],
  ["oa3", "application/vnd.fujitsu.oasys3"],
  ["oas", "application/vnd.fujitsu.oasys"],
  ["obd", "application/x-msbinder"],
  ["obgx", "application/vnd.openblox.game+xml"],
  ["obj", "model/obj"],
  ["oda", "application/oda"],
  ["odb", "application/vnd.oasis.opendocument.database"],
  ["odc", "application/vnd.oasis.opendocument.chart"],
  ["odf", "application/vnd.oasis.opendocument.formula"],
  ["odft", "application/vnd.oasis.opendocument.formula-template"],
  ["odg", "application/vnd.oasis.opendocument.graphics"],
  ["odi", "application/vnd.oasis.opendocument.image"],
  ["odm", "application/vnd.oasis.opendocument.text-master"],
  ["odp", "application/vnd.oasis.opendocument.presentation"],
  ["ods", "application/vnd.oasis.opendocument.spreadsheet"],
  ["odt", "application/vnd.oasis.opendocument.text"],
  ["oga", "audio/ogg"],
  ["ogex", "model/vnd.opengex"],
  ["ogg", "audio/ogg"],
  ["ogv", "video/ogg"],
  ["ogx", "application/ogg"],
  ["omdoc", "application/omdoc+xml"],
  ["onepkg", "application/onenote"],
  ["onetmp", "application/onenote"],
  ["onetoc", "application/onenote"],
  ["onetoc2", "application/onenote"],
  ["opf", "application/oebps-package+xml"],
  ["opml", "text/x-opml"],
  ["oprc", "application/vnd.palm"],
  ["opus", "audio/ogg"],
  ["org", "text/x-org"],
  ["osf", "application/vnd.yamaha.openscoreformat"],
  ["osfpvg", "application/vnd.yamaha.openscoreformat.osfpvg+xml"],
  ["osm", "application/vnd.openstreetmap.data+xml"],
  ["otc", "application/vnd.oasis.opendocument.chart-template"],
  ["otf", "font/otf"],
  ["otg", "application/vnd.oasis.opendocument.graphics-template"],
  ["oth", "application/vnd.oasis.opendocument.text-web"],
  ["oti", "application/vnd.oasis.opendocument.image-template"],
  ["otp", "application/vnd.oasis.opendocument.presentation-template"],
  ["ots", "application/vnd.oasis.opendocument.spreadsheet-template"],
  ["ott", "application/vnd.oasis.opendocument.text-template"],
  ["ova", "application/x-virtualbox-ova"],
  ["ovf", "application/x-virtualbox-ovf"],
  ["owl", "application/rdf+xml"],
  ["oxps", "application/oxps"],
  ["oxt", "application/vnd.openofficeorg.extension"],
  ["p", "text/x-pascal"],
  ["p7a", "application/x-pkcs7-signature"],
  ["p7b", "application/x-pkcs7-certificates"],
  ["p7c", "application/pkcs7-mime"],
  ["p7m", "application/pkcs7-mime"],
  ["p7r", "application/x-pkcs7-certreqresp"],
  ["p7s", "application/pkcs7-signature"],
  ["p8", "application/pkcs8"],
  ["p10", "application/x-pkcs10"],
  ["p12", "application/x-pkcs12"],
  ["pac", "application/x-ns-proxy-autoconfig"],
  ["pages", "application/x-iwork-pages-sffpages"],
  ["pas", "text/x-pascal"],
  ["paw", "application/vnd.pawaafile"],
  ["pbd", "application/vnd.powerbuilder6"],
  ["pbm", "image/x-portable-bitmap"],
  ["pcap", "application/vnd.tcpdump.pcap"],
  ["pcf", "application/x-font-pcf"],
  ["pcl", "application/vnd.hp-pcl"],
  ["pclxl", "application/vnd.hp-pclxl"],
  ["pct", "image/x-pict"],
  ["pcurl", "application/vnd.curl.pcurl"],
  ["pcx", "image/x-pcx"],
  ["pdb", "application/x-pilot"],
  ["pde", "text/x-processing"],
  ["pdf", "application/pdf"],
  ["pem", "application/x-x509-user-cert"],
  ["pfa", "application/x-font-type1"],
  ["pfb", "application/x-font-type1"],
  ["pfm", "application/x-font-type1"],
  ["pfr", "application/font-tdpfr"],
  ["pfx", "application/x-pkcs12"],
  ["pgm", "image/x-portable-graymap"],
  ["pgn", "application/x-chess-pgn"],
  ["pgp", "application/pgp"],
  ["php", "application/x-httpd-php"],
  ["php3", "application/x-httpd-php"],
  ["php4", "application/x-httpd-php"],
  ["phps", "application/x-httpd-php-source"],
  ["phtml", "application/x-httpd-php"],
  ["pic", "image/x-pict"],
  ["pkg", "application/octet-stream"],
  ["pki", "application/pkixcmp"],
  ["pkipath", "application/pkix-pkipath"],
  ["pkpass", "application/vnd.apple.pkpass"],
  ["pl", "application/x-perl"],
  ["plb", "application/vnd.3gpp.pic-bw-large"],
  ["plc", "application/vnd.mobius.plc"],
  ["plf", "application/vnd.pocketlearn"],
  ["pls", "application/pls+xml"],
  ["pm", "application/x-perl"],
  ["pml", "application/vnd.ctc-posml"],
  ["png", "image/png"],
  ["pnm", "image/x-portable-anymap"],
  ["portpkg", "application/vnd.macports.portpkg"],
  ["pot", "application/vnd.ms-powerpoint"],
  ["potm", "application/vnd.ms-powerpoint.presentation.macroEnabled.12"],
  ["potx", "application/vnd.openxmlformats-officedocument.presentationml.template"],
  ["ppa", "application/vnd.ms-powerpoint"],
  ["ppam", "application/vnd.ms-powerpoint.addin.macroEnabled.12"],
  ["ppd", "application/vnd.cups-ppd"],
  ["ppm", "image/x-portable-pixmap"],
  ["pps", "application/vnd.ms-powerpoint"],
  ["ppsm", "application/vnd.ms-powerpoint.slideshow.macroEnabled.12"],
  ["ppsx", "application/vnd.openxmlformats-officedocument.presentationml.slideshow"],
  ["ppt", "application/powerpoint"],
  ["pptm", "application/vnd.ms-powerpoint.presentation.macroEnabled.12"],
  ["pptx", "application/vnd.openxmlformats-officedocument.presentationml.presentation"],
  ["pqa", "application/vnd.palm"],
  ["prc", "application/x-pilot"],
  ["pre", "application/vnd.lotus-freelance"],
  ["prf", "application/pics-rules"],
  ["provx", "application/provenance+xml"],
  ["ps", "application/postscript"],
  ["psb", "application/vnd.3gpp.pic-bw-small"],
  ["psd", "application/x-photoshop"],
  ["psf", "application/x-font-linux-psf"],
  ["pskcxml", "application/pskc+xml"],
  ["pti", "image/prs.pti"],
  ["ptid", "application/vnd.pvi.ptid1"],
  ["pub", "application/x-mspublisher"],
  ["pvb", "application/vnd.3gpp.pic-bw-var"],
  ["pwn", "application/vnd.3m.post-it-notes"],
  ["pya", "audio/vnd.ms-playready.media.pya"],
  ["pyv", "video/vnd.ms-playready.media.pyv"],
  ["qam", "application/vnd.epson.quickanime"],
  ["qbo", "application/vnd.intu.qbo"],
  ["qfx", "application/vnd.intu.qfx"],
  ["qps", "application/vnd.publishare-delta-tree"],
  ["qt", "video/quicktime"],
  ["qwd", "application/vnd.quark.quarkxpress"],
  ["qwt", "application/vnd.quark.quarkxpress"],
  ["qxb", "application/vnd.quark.quarkxpress"],
  ["qxd", "application/vnd.quark.quarkxpress"],
  ["qxl", "application/vnd.quark.quarkxpress"],
  ["qxt", "application/vnd.quark.quarkxpress"],
  ["ra", "audio/x-realaudio"],
  ["ram", "audio/x-pn-realaudio"],
  ["raml", "application/raml+yaml"],
  ["rapd", "application/route-apd+xml"],
  ["rar", "application/x-rar"],
  ["ras", "image/x-cmu-raster"],
  ["rcprofile", "application/vnd.ipunplugged.rcprofile"],
  ["rdf", "application/rdf+xml"],
  ["rdz", "application/vnd.data-vision.rdz"],
  ["relo", "application/p2p-overlay+xml"],
  ["rep", "application/vnd.businessobjects"],
  ["res", "application/x-dtbresource+xml"],
  ["rgb", "image/x-rgb"],
  ["rif", "application/reginfo+xml"],
  ["rip", "audio/vnd.rip"],
  ["ris", "application/x-research-info-systems"],
  ["rl", "application/resource-lists+xml"],
  ["rlc", "image/vnd.fujixerox.edmics-rlc"],
  ["rld", "application/resource-lists-diff+xml"],
  ["rm", "audio/x-pn-realaudio"],
  ["rmi", "audio/midi"],
  ["rmp", "audio/x-pn-realaudio-plugin"],
  ["rms", "application/vnd.jcp.javame.midlet-rms"],
  ["rmvb", "application/vnd.rn-realmedia-vbr"],
  ["rnc", "application/relax-ng-compact-syntax"],
  ["rng", "application/xml"],
  ["roa", "application/rpki-roa"],
  ["roff", "text/troff"],
  ["rp9", "application/vnd.cloanto.rp9"],
  ["rpm", "audio/x-pn-realaudio-plugin"],
  ["rpss", "application/vnd.nokia.radio-presets"],
  ["rpst", "application/vnd.nokia.radio-preset"],
  ["rq", "application/sparql-query"],
  ["rs", "application/rls-services+xml"],
  ["rsa", "application/x-pkcs7"],
  ["rsat", "application/atsc-rsat+xml"],
  ["rsd", "application/rsd+xml"],
  ["rsheet", "application/urc-ressheet+xml"],
  ["rss", "application/rss+xml"],
  ["rtf", "text/rtf"],
  ["rtx", "text/richtext"],
  ["run", "application/x-makeself"],
  ["rusd", "application/route-usd+xml"],
  ["rv", "video/vnd.rn-realvideo"],
  ["s", "text/x-asm"],
  ["s3m", "audio/s3m"],
  ["saf", "application/vnd.yamaha.smaf-audio"],
  ["sass", "text/x-sass"],
  ["sbml", "application/sbml+xml"],
  ["sc", "application/vnd.ibm.secure-container"],
  ["scd", "application/x-msschedule"],
  ["scm", "application/vnd.lotus-screencam"],
  ["scq", "application/scvp-cv-request"],
  ["scs", "application/scvp-cv-response"],
  ["scss", "text/x-scss"],
  ["scurl", "text/vnd.curl.scurl"],
  ["sda", "application/vnd.stardivision.draw"],
  ["sdc", "application/vnd.stardivision.calc"],
  ["sdd", "application/vnd.stardivision.impress"],
  ["sdkd", "application/vnd.solent.sdkm+xml"],
  ["sdkm", "application/vnd.solent.sdkm+xml"],
  ["sdp", "application/sdp"],
  ["sdw", "application/vnd.stardivision.writer"],
  ["sea", "application/octet-stream"],
  ["see", "application/vnd.seemail"],
  ["seed", "application/vnd.fdsn.seed"],
  ["sema", "application/vnd.sema"],
  ["semd", "application/vnd.semd"],
  ["semf", "application/vnd.semf"],
  ["senmlx", "application/senml+xml"],
  ["sensmlx", "application/sensml+xml"],
  ["ser", "application/java-serialized-object"],
  ["setpay", "application/set-payment-initiation"],
  ["setreg", "application/set-registration-initiation"],
  ["sfd-hdstx", "application/vnd.hydrostatix.sof-data"],
  ["sfs", "application/vnd.spotfire.sfs"],
  ["sfv", "text/x-sfv"],
  ["sgi", "image/sgi"],
  ["sgl", "application/vnd.stardivision.writer-global"],
  ["sgm", "text/sgml"],
  ["sgml", "text/sgml"],
  ["sh", "application/x-sh"],
  ["shar", "application/x-shar"],
  ["shex", "text/shex"],
  ["shf", "application/shf+xml"],
  ["shtml", "text/html"],
  ["sid", "image/x-mrsid-image"],
  ["sieve", "application/sieve"],
  ["sig", "application/pgp-signature"],
  ["sil", "audio/silk"],
  ["silo", "model/mesh"],
  ["sis", "application/vnd.symbian.install"],
  ["sisx", "application/vnd.symbian.install"],
  ["sit", "application/x-stuffit"],
  ["sitx", "application/x-stuffitx"],
  ["siv", "application/sieve"],
  ["skd", "application/vnd.koan"],
  ["skm", "application/vnd.koan"],
  ["skp", "application/vnd.koan"],
  ["skt", "application/vnd.koan"],
  ["sldm", "application/vnd.ms-powerpoint.slide.macroenabled.12"],
  ["sldx", "application/vnd.openxmlformats-officedocument.presentationml.slide"],
  ["slim", "text/slim"],
  ["slm", "text/slim"],
  ["sls", "application/route-s-tsid+xml"],
  ["slt", "application/vnd.epson.salt"],
  ["sm", "application/vnd.stepmania.stepchart"],
  ["smf", "application/vnd.stardivision.math"],
  ["smi", "application/smil"],
  ["smil", "application/smil"],
  ["smv", "video/x-smv"],
  ["smzip", "application/vnd.stepmania.package"],
  ["snd", "audio/basic"],
  ["snf", "application/x-font-snf"],
  ["so", "application/octet-stream"],
  ["spc", "application/x-pkcs7-certificates"],
  ["spdx", "text/spdx"],
  ["spf", "application/vnd.yamaha.smaf-phrase"],
  ["spl", "application/x-futuresplash"],
  ["spot", "text/vnd.in3d.spot"],
  ["spp", "application/scvp-vp-response"],
  ["spq", "application/scvp-vp-request"],
  ["spx", "audio/ogg"],
  ["sql", "application/x-sql"],
  ["src", "application/x-wais-source"],
  ["srt", "application/x-subrip"],
  ["sru", "application/sru+xml"],
  ["srx", "application/sparql-results+xml"],
  ["ssdl", "application/ssdl+xml"],
  ["sse", "application/vnd.kodak-descriptor"],
  ["ssf", "application/vnd.epson.ssf"],
  ["ssml", "application/ssml+xml"],
  ["sst", "application/octet-stream"],
  ["st", "application/vnd.sailingtracker.track"],
  ["stc", "application/vnd.sun.xml.calc.template"],
  ["std", "application/vnd.sun.xml.draw.template"],
  ["stf", "application/vnd.wt.stf"],
  ["sti", "application/vnd.sun.xml.impress.template"],
  ["stk", "application/hyperstudio"],
  ["stl", "model/stl"],
  ["stpx", "model/step+xml"],
  ["stpxz", "model/step-xml+zip"],
  ["stpz", "model/step+zip"],
  ["str", "application/vnd.pg.format"],
  ["stw", "application/vnd.sun.xml.writer.template"],
  ["styl", "text/stylus"],
  ["stylus", "text/stylus"],
  ["sub", "text/vnd.dvb.subtitle"],
  ["sus", "application/vnd.sus-calendar"],
  ["susp", "application/vnd.sus-calendar"],
  ["sv4cpio", "application/x-sv4cpio"],
  ["sv4crc", "application/x-sv4crc"],
  ["svc", "application/vnd.dvb.service"],
  ["svd", "application/vnd.svd"],
  ["svg", "image/svg+xml"],
  ["svgz", "image/svg+xml"],
  ["swa", "application/x-director"],
  ["swf", "application/x-shockwave-flash"],
  ["swi", "application/vnd.aristanetworks.swi"],
  ["swidtag", "application/swid+xml"],
  ["sxc", "application/vnd.sun.xml.calc"],
  ["sxd", "application/vnd.sun.xml.draw"],
  ["sxg", "application/vnd.sun.xml.writer.global"],
  ["sxi", "application/vnd.sun.xml.impress"],
  ["sxm", "application/vnd.sun.xml.math"],
  ["sxw", "application/vnd.sun.xml.writer"],
  ["t", "text/troff"],
  ["t3", "application/x-t3vm-image"],
  ["t38", "image/t38"],
  ["taglet", "application/vnd.mynfc"],
  ["tao", "application/vnd.tao.intent-module-archive"],
  ["tap", "image/vnd.tencent.tap"],
  ["tar", "application/x-tar"],
  ["tcap", "application/vnd.3gpp2.tcap"],
  ["tcl", "application/x-tcl"],
  ["td", "application/urc-targetdesc+xml"],
  ["teacher", "application/vnd.smart.teacher"],
  ["tei", "application/tei+xml"],
  ["teicorpus", "application/tei+xml"],
  ["tex", "application/x-tex"],
  ["texi", "application/x-texinfo"],
  ["texinfo", "application/x-texinfo"],
  ["text", "text/plain"],
  ["tfi", "application/thraud+xml"],
  ["tfm", "application/x-tex-tfm"],
  ["tfx", "image/tiff-fx"],
  ["tga", "image/x-tga"],
  ["tgz", "application/x-tar"],
  ["thmx", "application/vnd.ms-officetheme"],
  ["tif", "image/tiff"],
  ["tiff", "image/tiff"],
  ["tk", "application/x-tcl"],
  ["tmo", "application/vnd.tmobile-livetv"],
  ["toml", "application/toml"],
  ["torrent", "application/x-bittorrent"],
  ["tpl", "application/vnd.groove-tool-template"],
  ["tpt", "application/vnd.trid.tpt"],
  ["tr", "text/troff"],
  ["tra", "application/vnd.trueapp"],
  ["trig", "application/trig"],
  ["trm", "application/x-msterminal"],
  ["ts", "video/mp2t"],
  ["tsd", "application/timestamped-data"],
  ["tsv", "text/tab-separated-values"],
  ["ttc", "font/collection"],
  ["ttf", "font/ttf"],
  ["ttl", "text/turtle"],
  ["ttml", "application/ttml+xml"],
  ["twd", "application/vnd.simtech-mindmapper"],
  ["twds", "application/vnd.simtech-mindmapper"],
  ["txd", "application/vnd.genomatix.tuxedo"],
  ["txf", "application/vnd.mobius.txf"],
  ["txt", "text/plain"],
  ["u8dsn", "message/global-delivery-status"],
  ["u8hdr", "message/global-headers"],
  ["u8mdn", "message/global-disposition-notification"],
  ["u8msg", "message/global"],
  ["u32", "application/x-authorware-bin"],
  ["ubj", "application/ubjson"],
  ["udeb", "application/x-debian-package"],
  ["ufd", "application/vnd.ufdl"],
  ["ufdl", "application/vnd.ufdl"],
  ["ulx", "application/x-glulx"],
  ["umj", "application/vnd.umajin"],
  ["unityweb", "application/vnd.unity"],
  ["uoml", "application/vnd.uoml+xml"],
  ["uri", "text/uri-list"],
  ["uris", "text/uri-list"],
  ["urls", "text/uri-list"],
  ["usdz", "model/vnd.usdz+zip"],
  ["ustar", "application/x-ustar"],
  ["utz", "application/vnd.uiq.theme"],
  ["uu", "text/x-uuencode"],
  ["uva", "audio/vnd.dece.audio"],
  ["uvd", "application/vnd.dece.data"],
  ["uvf", "application/vnd.dece.data"],
  ["uvg", "image/vnd.dece.graphic"],
  ["uvh", "video/vnd.dece.hd"],
  ["uvi", "image/vnd.dece.graphic"],
  ["uvm", "video/vnd.dece.mobile"],
  ["uvp", "video/vnd.dece.pd"],
  ["uvs", "video/vnd.dece.sd"],
  ["uvt", "application/vnd.dece.ttml+xml"],
  ["uvu", "video/vnd.uvvu.mp4"],
  ["uvv", "video/vnd.dece.video"],
  ["uvva", "audio/vnd.dece.audio"],
  ["uvvd", "application/vnd.dece.data"],
  ["uvvf", "application/vnd.dece.data"],
  ["uvvg", "image/vnd.dece.graphic"],
  ["uvvh", "video/vnd.dece.hd"],
  ["uvvi", "image/vnd.dece.graphic"],
  ["uvvm", "video/vnd.dece.mobile"],
  ["uvvp", "video/vnd.dece.pd"],
  ["uvvs", "video/vnd.dece.sd"],
  ["uvvt", "application/vnd.dece.ttml+xml"],
  ["uvvu", "video/vnd.uvvu.mp4"],
  ["uvvv", "video/vnd.dece.video"],
  ["uvvx", "application/vnd.dece.unspecified"],
  ["uvvz", "application/vnd.dece.zip"],
  ["uvx", "application/vnd.dece.unspecified"],
  ["uvz", "application/vnd.dece.zip"],
  ["vbox", "application/x-virtualbox-vbox"],
  ["vbox-extpack", "application/x-virtualbox-vbox-extpack"],
  ["vcard", "text/vcard"],
  ["vcd", "application/x-cdlink"],
  ["vcf", "text/x-vcard"],
  ["vcg", "application/vnd.groove-vcard"],
  ["vcs", "text/x-vcalendar"],
  ["vcx", "application/vnd.vcx"],
  ["vdi", "application/x-virtualbox-vdi"],
  ["vds", "model/vnd.sap.vds"],
  ["vhd", "application/x-virtualbox-vhd"],
  ["vis", "application/vnd.visionary"],
  ["viv", "video/vnd.vivo"],
  ["vlc", "application/videolan"],
  ["vmdk", "application/x-virtualbox-vmdk"],
  ["vob", "video/x-ms-vob"],
  ["vor", "application/vnd.stardivision.writer"],
  ["vox", "application/x-authorware-bin"],
  ["vrml", "model/vrml"],
  ["vsd", "application/vnd.visio"],
  ["vsf", "application/vnd.vsf"],
  ["vss", "application/vnd.visio"],
  ["vst", "application/vnd.visio"],
  ["vsw", "application/vnd.visio"],
  ["vtf", "image/vnd.valve.source.texture"],
  ["vtt", "text/vtt"],
  ["vtu", "model/vnd.vtu"],
  ["vxml", "application/voicexml+xml"],
  ["w3d", "application/x-director"],
  ["wad", "application/x-doom"],
  ["wadl", "application/vnd.sun.wadl+xml"],
  ["war", "application/java-archive"],
  ["wasm", "application/wasm"],
  ["wav", "audio/x-wav"],
  ["wax", "audio/x-ms-wax"],
  ["wbmp", "image/vnd.wap.wbmp"],
  ["wbs", "application/vnd.criticaltools.wbs+xml"],
  ["wbxml", "application/wbxml"],
  ["wcm", "application/vnd.ms-works"],
  ["wdb", "application/vnd.ms-works"],
  ["wdp", "image/vnd.ms-photo"],
  ["weba", "audio/webm"],
  ["webapp", "application/x-web-app-manifest+json"],
  ["webm", "video/webm"],
  ["webmanifest", "application/manifest+json"],
  ["webp", "image/webp"],
  ["wg", "application/vnd.pmi.widget"],
  ["wgt", "application/widget"],
  ["wks", "application/vnd.ms-works"],
  ["wm", "video/x-ms-wm"],
  ["wma", "audio/x-ms-wma"],
  ["wmd", "application/x-ms-wmd"],
  ["wmf", "image/wmf"],
  ["wml", "text/vnd.wap.wml"],
  ["wmlc", "application/wmlc"],
  ["wmls", "text/vnd.wap.wmlscript"],
  ["wmlsc", "application/vnd.wap.wmlscriptc"],
  ["wmv", "video/x-ms-wmv"],
  ["wmx", "video/x-ms-wmx"],
  ["wmz", "application/x-msmetafile"],
  ["woff", "font/woff"],
  ["woff2", "font/woff2"],
  ["word", "application/msword"],
  ["wpd", "application/vnd.wordperfect"],
  ["wpl", "application/vnd.ms-wpl"],
  ["wps", "application/vnd.ms-works"],
  ["wqd", "application/vnd.wqd"],
  ["wri", "application/x-mswrite"],
  ["wrl", "model/vrml"],
  ["wsc", "message/vnd.wfa.wsc"],
  ["wsdl", "application/wsdl+xml"],
  ["wspolicy", "application/wspolicy+xml"],
  ["wtb", "application/vnd.webturbo"],
  ["wvx", "video/x-ms-wvx"],
  ["x3d", "model/x3d+xml"],
  ["x3db", "model/x3d+fastinfoset"],
  ["x3dbz", "model/x3d+binary"],
  ["x3dv", "model/x3d-vrml"],
  ["x3dvz", "model/x3d+vrml"],
  ["x3dz", "model/x3d+xml"],
  ["x32", "application/x-authorware-bin"],
  ["x_b", "model/vnd.parasolid.transmit.binary"],
  ["x_t", "model/vnd.parasolid.transmit.text"],
  ["xaml", "application/xaml+xml"],
  ["xap", "application/x-silverlight-app"],
  ["xar", "application/vnd.xara"],
  ["xav", "application/xcap-att+xml"],
  ["xbap", "application/x-ms-xbap"],
  ["xbd", "application/vnd.fujixerox.docuworks.binder"],
  ["xbm", "image/x-xbitmap"],
  ["xca", "application/xcap-caps+xml"],
  ["xcs", "application/calendar+xml"],
  ["xdf", "application/xcap-diff+xml"],
  ["xdm", "application/vnd.syncml.dm+xml"],
  ["xdp", "application/vnd.adobe.xdp+xml"],
  ["xdssc", "application/dssc+xml"],
  ["xdw", "application/vnd.fujixerox.docuworks"],
  ["xel", "application/xcap-el+xml"],
  ["xenc", "application/xenc+xml"],
  ["xer", "application/patch-ops-error+xml"],
  ["xfdf", "application/vnd.adobe.xfdf"],
  ["xfdl", "application/vnd.xfdl"],
  ["xht", "application/xhtml+xml"],
  ["xhtml", "application/xhtml+xml"],
  ["xhvml", "application/xv+xml"],
  ["xif", "image/vnd.xiff"],
  ["xl", "application/excel"],
  ["xla", "application/vnd.ms-excel"],
  ["xlam", "application/vnd.ms-excel.addin.macroEnabled.12"],
  ["xlc", "application/vnd.ms-excel"],
  ["xlf", "application/xliff+xml"],
  ["xlm", "application/vnd.ms-excel"],
  ["xls", "application/vnd.ms-excel"],
  ["xlsb", "application/vnd.ms-excel.sheet.binary.macroEnabled.12"],
  ["xlsm", "application/vnd.ms-excel.sheet.macroEnabled.12"],
  ["xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],
  ["xlt", "application/vnd.ms-excel"],
  ["xltm", "application/vnd.ms-excel.template.macroEnabled.12"],
  ["xltx", "application/vnd.openxmlformats-officedocument.spreadsheetml.template"],
  ["xlw", "application/vnd.ms-excel"],
  ["xm", "audio/xm"],
  ["xml", "application/xml"],
  ["xns", "application/xcap-ns+xml"],
  ["xo", "application/vnd.olpc-sugar"],
  ["xop", "application/xop+xml"],
  ["xpi", "application/x-xpinstall"],
  ["xpl", "application/xproc+xml"],
  ["xpm", "image/x-xpixmap"],
  ["xpr", "application/vnd.is-xpr"],
  ["xps", "application/vnd.ms-xpsdocument"],
  ["xpw", "application/vnd.intercon.formnet"],
  ["xpx", "application/vnd.intercon.formnet"],
  ["xsd", "application/xml"],
  ["xsl", "application/xml"],
  ["xslt", "application/xslt+xml"],
  ["xsm", "application/vnd.syncml+xml"],
  ["xspf", "application/xspf+xml"],
  ["xul", "application/vnd.mozilla.xul+xml"],
  ["xvm", "application/xv+xml"],
  ["xvml", "application/xv+xml"],
  ["xwd", "image/x-xwindowdump"],
  ["xyz", "chemical/x-xyz"],
  ["xz", "application/x-xz"],
  ["yaml", "text/yaml"],
  ["yang", "application/yang"],
  ["yin", "application/yin+xml"],
  ["yml", "text/yaml"],
  ["ymp", "text/x-suse-ymp"],
  ["z", "application/x-compress"],
  ["z1", "application/x-zmachine"],
  ["z2", "application/x-zmachine"],
  ["z3", "application/x-zmachine"],
  ["z4", "application/x-zmachine"],
  ["z5", "application/x-zmachine"],
  ["z6", "application/x-zmachine"],
  ["z7", "application/x-zmachine"],
  ["z8", "application/x-zmachine"],
  ["zaz", "application/vnd.zzazz.deck+xml"],
  ["zip", "application/zip"],
  ["zir", "application/vnd.zul"],
  ["zirz", "application/vnd.zul"],
  ["zmm", "application/vnd.handheld-entertainment+xml"],
  ["zsh", "text/x-scriptzsh"]
]);
function _i(e, t, i) {
  const c = m0(e), { webkitRelativePath: f } = e, m = typeof t == "string" ? t : typeof f == "string" && f.length > 0 ? f : `./${e.name}`;
  return typeof c.path != "string" && Nc(c, "path", m), Nc(c, "relativePath", m), c;
}
function m0(e) {
  const { name: t } = e;
  if (t && t.lastIndexOf(".") !== -1 && !e.type) {
    const c = t.split(".").pop().toLowerCase(), f = g0.get(c);
    f && Object.defineProperty(e, "type", {
      value: f,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return e;
}
function Nc(e, t, i) {
  Object.defineProperty(e, t, {
    value: i,
    writable: !1,
    configurable: !1,
    enumerable: !0
  });
}
const v0 = [
  // Thumbnail cache files for macOS and Windows
  ".DS_Store",
  // macOs
  "Thumbs.db"
  // Windows
];
function y0(e) {
  return Vn(this, void 0, void 0, function* () {
    return So(e) && x0(e.dataTransfer) ? S0(e.dataTransfer, e.type) : w0(e) ? _0(e) : Array.isArray(e) && e.every((t) => "getFile" in t && typeof t.getFile == "function") ? C0(e) : [];
  });
}
function x0(e) {
  return So(e);
}
function w0(e) {
  return So(e) && So(e.target);
}
function So(e) {
  return typeof e == "object" && e !== null;
}
function _0(e) {
  return fs(e.target.files).map((t) => _i(t));
}
function C0(e) {
  return Vn(this, void 0, void 0, function* () {
    return (yield Promise.all(e.map((i) => i.getFile()))).map((i) => _i(i));
  });
}
function S0(e, t) {
  return Vn(this, void 0, void 0, function* () {
    if (e.items) {
      const i = fs(e.items).filter((f) => f.kind === "file");
      if (t !== "drop")
        return i;
      const c = yield Promise.all(i.map(b0));
      return Uc(bp(c));
    }
    return Uc(fs(e.files).map((i) => _i(i)));
  });
}
function Uc(e) {
  return e.filter((t) => v0.indexOf(t.name) === -1);
}
function fs(e) {
  if (e === null)
    return [];
  const t = [];
  for (let i = 0; i < e.length; i++) {
    const c = e[i];
    t.push(c);
  }
  return t;
}
function b0(e) {
  if (typeof e.webkitGetAsEntry != "function")
    return Hc(e);
  const t = e.webkitGetAsEntry();
  return t && t.isDirectory ? Tp(t) : Hc(e, t);
}
function bp(e) {
  return e.reduce((t, i) => [
    ...t,
    ...Array.isArray(i) ? bp(i) : [i]
  ], []);
}
function Hc(e, t) {
  var i;
  if (typeof e.getAsFileSystemHandle == "function")
    return e.getAsFileSystemHandle().then((m) => Vn(this, void 0, void 0, function* () {
      const w = yield m.getFile();
      return w.handle = m, _i(w);
    }));
  const c = e.getAsFile();
  if (!c)
    return Promise.reject(`${e} is not a File`);
  const f = _i(c, (i = t == null ? void 0 : t.fullPath) !== null && i !== void 0 ? i : void 0);
  return Promise.resolve(f);
}
function T0(e) {
  return Vn(this, void 0, void 0, function* () {
    return e.isDirectory ? Tp(e) : E0(e);
  });
}
function Tp(e) {
  const t = e.createReader();
  return new Promise((i, c) => {
    const f = [];
    function m() {
      t.readEntries((w) => Vn(this, void 0, void 0, function* () {
        if (w.length) {
          const S = Promise.all(w.map(T0));
          f.push(S), m();
        } else
          try {
            const S = yield Promise.all(f);
            i(S);
          } catch (S) {
            c(S);
          }
      }), (w) => {
        c(w);
      });
    }
    m();
  });
}
function E0(e) {
  return Vn(this, void 0, void 0, function* () {
    return new Promise((t, i) => {
      e.file((c) => {
        const f = _i(c, e.fullPath);
        t(f);
      }, (c) => {
        i(c);
      });
    });
  });
}
var xa = function(e, t) {
  if (e && t) {
    var i = Array.isArray(t) ? t : t.split(",");
    if (i.length === 0)
      return !0;
    var c = e.name || "", f = (e.type || "").toLowerCase(), m = f.replace(/\/.*$/, "");
    return i.some(function(w) {
      var S = w.trim().toLowerCase();
      return S.charAt(0) === "." ? c.toLowerCase().endsWith(S) : S.endsWith("/*") ? m === S.replace(/\/.*$/, "") : f === S;
    });
  }
  return !0;
};
function Wc(e) {
  return P0(e) || O0(e) || kp(e) || k0();
}
function k0() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function O0(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function P0(e) {
  if (Array.isArray(e)) return gs(e);
}
function Yc(e, t) {
  var i = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(e);
    t && (c = c.filter(function(f) {
      return Object.getOwnPropertyDescriptor(e, f).enumerable;
    })), i.push.apply(i, c);
  }
  return i;
}
function Xc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var i = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Yc(Object(i), !0).forEach(function(c) {
      Ep(e, c, i[c]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : Yc(Object(i)).forEach(function(c) {
      Object.defineProperty(e, c, Object.getOwnPropertyDescriptor(i, c));
    });
  }
  return e;
}
function Ep(e, t, i) {
  return t in e ? Object.defineProperty(e, t, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = i, e;
}
function ur(e, t) {
  return D0(e) || j0(e, t) || kp(e, t) || M0();
}
function M0() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function kp(e, t) {
  if (e) {
    if (typeof e == "string") return gs(e, t);
    var i = Object.prototype.toString.call(e).slice(8, -1);
    if (i === "Object" && e.constructor && (i = e.constructor.name), i === "Map" || i === "Set") return Array.from(e);
    if (i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return gs(e, t);
  }
}
function gs(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var i = 0, c = new Array(t); i < t; i++)
    c[i] = e[i];
  return c;
}
function j0(e, t) {
  var i = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (i != null) {
    var c = [], f = !0, m = !1, w, S;
    try {
      for (i = i.call(e); !(f = (w = i.next()).done) && (c.push(w.value), !(t && c.length === t)); f = !0)
        ;
    } catch (O) {
      m = !0, S = O;
    } finally {
      try {
        !f && i.return != null && i.return();
      } finally {
        if (m) throw S;
      }
    }
    return c;
  }
}
function D0(e) {
  if (Array.isArray(e)) return e;
}
var A0 = typeof xa == "function" ? xa : xa.default, F0 = "file-invalid-type", L0 = "file-too-large", R0 = "file-too-small", I0 = "too-many-files", B0 = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", i = t.split(","), c = i.length > 1 ? "one of ".concat(i.join(", ")) : i[0];
  return {
    code: F0,
    message: "File type must be ".concat(c)
  };
}, Gc = function(t) {
  return {
    code: L0,
    message: "File is larger than ".concat(t, " ").concat(t === 1 ? "byte" : "bytes")
  };
}, Vc = function(t) {
  return {
    code: R0,
    message: "File is smaller than ".concat(t, " ").concat(t === 1 ? "byte" : "bytes")
  };
}, z0 = {
  code: I0,
  message: "Too many files"
};
function Op(e, t) {
  var i = e.type === "application/x-moz-file" || A0(e, t);
  return [i, i ? null : B0(t)];
}
function Pp(e, t, i) {
  if (Fn(e.size))
    if (Fn(t) && Fn(i)) {
      if (e.size > i) return [!1, Gc(i)];
      if (e.size < t) return [!1, Vc(t)];
    } else {
      if (Fn(t) && e.size < t) return [!1, Vc(t)];
      if (Fn(i) && e.size > i) return [!1, Gc(i)];
    }
  return [!0, null];
}
function Fn(e) {
  return e != null;
}
function N0(e) {
  var t = e.files, i = e.accept, c = e.minSize, f = e.maxSize, m = e.multiple, w = e.maxFiles, S = e.validator;
  return !m && t.length > 1 || m && w >= 1 && t.length > w ? !1 : t.every(function(O) {
    var z = Op(O, i), V = ur(z, 1), K = V[0], Z = Pp(O, c, f), te = ur(Z, 1), ae = te[0], ue = S ? S(O) : null;
    return K && ae && !ue;
  });
}
function bo(e) {
  return typeof e.isPropagationStopped == "function" ? e.isPropagationStopped() : typeof e.cancelBubble < "u" ? e.cancelBubble : !1;
}
function Ir(e) {
  return e.dataTransfer ? Array.prototype.some.call(e.dataTransfer.types, function(t) {
    return t === "Files" || t === "application/x-moz-file";
  }) : !!e.target && !!e.target.files;
}
function $c(e) {
  e.preventDefault();
}
function U0(e) {
  return e.indexOf("MSIE") !== -1 || e.indexOf("Trident/") !== -1;
}
function H0(e) {
  return e.indexOf("Edge/") !== -1;
}
function W0() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.navigator.userAgent;
  return U0(e) || H0(e);
}
function Wt() {
  for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
    t[i] = arguments[i];
  return function(c) {
    for (var f = arguments.length, m = new Array(f > 1 ? f - 1 : 0), w = 1; w < f; w++)
      m[w - 1] = arguments[w];
    return t.some(function(S) {
      return !bo(c) && S && S.apply(void 0, [c].concat(m)), bo(c);
    });
  };
}
function Y0() {
  return "showOpenFilePicker" in window;
}
function X0(e) {
  if (Fn(e)) {
    var t = Object.entries(e).filter(function(i) {
      var c = ur(i, 2), f = c[0], m = c[1], w = !0;
      return Mp(f) || (console.warn('Skipped "'.concat(f, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), w = !1), (!Array.isArray(m) || !m.every(jp)) && (console.warn('Skipped "'.concat(f, '" because an invalid file extension was provided.')), w = !1), w;
    }).reduce(function(i, c) {
      var f = ur(c, 2), m = f[0], w = f[1];
      return Xc(Xc({}, i), {}, Ep({}, m, w));
    }, {});
    return [{
      // description is required due to https://crbug.com/1264708
      description: "Files",
      accept: t
    }];
  }
  return e;
}
function G0(e) {
  if (Fn(e))
    return Object.entries(e).reduce(function(t, i) {
      var c = ur(i, 2), f = c[0], m = c[1];
      return [].concat(Wc(t), [f], Wc(m));
    }, []).filter(function(t) {
      return Mp(t) || jp(t);
    }).join(",");
}
function V0(e) {
  return e instanceof DOMException && (e.name === "AbortError" || e.code === e.ABORT_ERR);
}
function $0(e) {
  return e instanceof DOMException && (e.name === "SecurityError" || e.code === e.SECURITY_ERR);
}
function Mp(e) {
  return e === "audio/*" || e === "video/*" || e === "image/*" || e === "text/*" || e === "application/*" || /\w+\/[-+.\w]+/g.test(e);
}
function jp(e) {
  return /^.*\.[\w]+$/.test(e);
}
var Z0 = ["children"], q0 = ["open"], K0 = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"], Q0 = ["refKey", "onChange", "onClick"];
function J0(e) {
  return nm(e) || tm(e) || Dp(e) || em();
}
function em() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function tm(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function nm(e) {
  if (Array.isArray(e)) return ms(e);
}
function wa(e, t) {
  return om(e) || rm(e, t) || Dp(e, t) || im();
}
function im() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Dp(e, t) {
  if (e) {
    if (typeof e == "string") return ms(e, t);
    var i = Object.prototype.toString.call(e).slice(8, -1);
    if (i === "Object" && e.constructor && (i = e.constructor.name), i === "Map" || i === "Set") return Array.from(e);
    if (i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return ms(e, t);
  }
}
function ms(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var i = 0, c = new Array(t); i < t; i++)
    c[i] = e[i];
  return c;
}
function rm(e, t) {
  var i = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (i != null) {
    var c = [], f = !0, m = !1, w, S;
    try {
      for (i = i.call(e); !(f = (w = i.next()).done) && (c.push(w.value), !(t && c.length === t)); f = !0)
        ;
    } catch (O) {
      m = !0, S = O;
    } finally {
      try {
        !f && i.return != null && i.return();
      } finally {
        if (m) throw S;
      }
    }
    return c;
  }
}
function om(e) {
  if (Array.isArray(e)) return e;
}
function Zc(e, t) {
  var i = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(e);
    t && (c = c.filter(function(f) {
      return Object.getOwnPropertyDescriptor(e, f).enumerable;
    })), i.push.apply(i, c);
  }
  return i;
}
function ze(e) {
  for (var t = 1; t < arguments.length; t++) {
    var i = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Zc(Object(i), !0).forEach(function(c) {
      vs(e, c, i[c]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : Zc(Object(i)).forEach(function(c) {
      Object.defineProperty(e, c, Object.getOwnPropertyDescriptor(i, c));
    });
  }
  return e;
}
function vs(e, t, i) {
  return t in e ? Object.defineProperty(e, t, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = i, e;
}
function To(e, t) {
  if (e == null) return {};
  var i = am(e, t), c, f;
  if (Object.getOwnPropertySymbols) {
    var m = Object.getOwnPropertySymbols(e);
    for (f = 0; f < m.length; f++)
      c = m[f], !(t.indexOf(c) >= 0) && Object.prototype.propertyIsEnumerable.call(e, c) && (i[c] = e[c]);
  }
  return i;
}
function am(e, t) {
  if (e == null) return {};
  var i = {}, c = Object.keys(e), f, m;
  for (m = 0; m < c.length; m++)
    f = c[m], !(t.indexOf(f) >= 0) && (i[f] = e[f]);
  return i;
}
var ml = /* @__PURE__ */ E.forwardRef(function(e, t) {
  var i = e.children, c = To(e, Z0), f = Fp(c), m = f.open, w = To(f, q0);
  return E.useImperativeHandle(t, function() {
    return {
      open: m
    };
  }, [m]), /* @__PURE__ */ su.createElement(E.Fragment, null, i(ze(ze({}, w), {}, {
    open: m
  })));
});
ml.displayName = "Dropzone";
var Ap = {
  disabled: !1,
  getFilesFromEvent: y0,
  maxSize: 1 / 0,
  minSize: 0,
  multiple: !0,
  maxFiles: 0,
  preventDropOnDocument: !0,
  noClick: !1,
  noKeyboard: !1,
  noDrag: !1,
  noDragEventsBubbling: !1,
  validator: null,
  useFsAccessApi: !1,
  autoFocus: !1
};
ml.defaultProps = Ap;
ml.propTypes = {
  /**
   * Render function that exposes the dropzone state and prop getter fns
   *
   * @param {object} params
   * @param {Function} params.getRootProps Returns the props you should apply to the root drop container you render
   * @param {Function} params.getInputProps Returns the props you should apply to hidden file input you render
   * @param {Function} params.open Open the native file selection dialog
   * @param {boolean} params.isFocused Dropzone area is in focus
   * @param {boolean} params.isFileDialogActive File dialog is opened
   * @param {boolean} params.isDragActive Active drag is in progress
   * @param {boolean} params.isDragAccept Dragged files are accepted
   * @param {boolean} params.isDragReject Some dragged files are rejected
   * @param {File[]} params.acceptedFiles Accepted files
   * @param {FileRejection[]} params.fileRejections Rejected files and why they were rejected
   */
  children: Ae.func,
  /**
   * Set accepted file types.
   * Checkout https://developer.mozilla.org/en-US/docs/Web/API/window/showOpenFilePicker types option for more information.
   * Keep in mind that mime type determination is not reliable across platforms. CSV files,
   * for example, are reported as text/plain under macOS but as application/vnd.ms-excel under
   * Windows. In some cases there might not be a mime type set at all (https://github.com/react-dropzone/react-dropzone/issues/276).
   */
  accept: Ae.objectOf(Ae.arrayOf(Ae.string)),
  /**
   * Allow drag 'n' drop (or selection from the file dialog) of multiple files
   */
  multiple: Ae.bool,
  /**
   * If false, allow dropped items to take over the current browser window
   */
  preventDropOnDocument: Ae.bool,
  /**
   * If true, disables click to open the native file selection dialog
   */
  noClick: Ae.bool,
  /**
   * If true, disables SPACE/ENTER to open the native file selection dialog.
   * Note that it also stops tracking the focus state.
   */
  noKeyboard: Ae.bool,
  /**
   * If true, disables drag 'n' drop
   */
  noDrag: Ae.bool,
  /**
   * If true, stops drag event propagation to parents
   */
  noDragEventsBubbling: Ae.bool,
  /**
   * Minimum file size (in bytes)
   */
  minSize: Ae.number,
  /**
   * Maximum file size (in bytes)
   */
  maxSize: Ae.number,
  /**
   * Maximum accepted number of files
   * The default value is 0 which means there is no limitation to how many files are accepted.
   */
  maxFiles: Ae.number,
  /**
   * Enable/disable the dropzone
   */
  disabled: Ae.bool,
  /**
   * Use this to provide a custom file aggregator
   *
   * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
   */
  getFilesFromEvent: Ae.func,
  /**
   * Cb for when closing the file dialog with no selection
   */
  onFileDialogCancel: Ae.func,
  /**
   * Cb for when opening the file dialog
   */
  onFileDialogOpen: Ae.func,
  /**
   * Set to true to use the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API
   * to open the file picker instead of using an `<input type="file">` click event.
   */
  useFsAccessApi: Ae.bool,
  /**
   * Set to true to focus the root element on render
   */
  autoFocus: Ae.bool,
  /**
   * Cb for when the `dragenter` event occurs.
   *
   * @param {DragEvent} event
   */
  onDragEnter: Ae.func,
  /**
   * Cb for when the `dragleave` event occurs
   *
   * @param {DragEvent} event
   */
  onDragLeave: Ae.func,
  /**
   * Cb for when the `dragover` event occurs
   *
   * @param {DragEvent} event
   */
  onDragOver: Ae.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that this callback is invoked after the `getFilesFromEvent` callback is done.
   *
   * Files are accepted or rejected based on the `accept`, `multiple`, `minSize` and `maxSize` props.
   * `accept` must be a valid [MIME type](http://www.iana.org/assignments/media-types/media-types.xhtml) according to [input element specification](https://www.w3.org/wiki/HTML/Elements/input/file) or a valid file extension.
   * If `multiple` is set to false and additional files are dropped,
   * all files besides the first will be rejected.
   * Any file which does not have a size in the [`minSize`, `maxSize`] range, will be rejected as well.
   *
   * Note that the `onDrop` callback will always be invoked regardless if the dropped files were accepted or rejected.
   * If you'd like to react to a specific scenario, use the `onDropAccepted`/`onDropRejected` props.
   *
   * `onDrop` will provide you with an array of [File](https://developer.mozilla.org/en-US/docs/Web/API/File) objects which you can then process and send to a server.
   * For example, with [SuperAgent](https://github.com/visionmedia/superagent) as a http/ajax library:
   *
   * ```js
   * function onDrop(acceptedFiles) {
   *   const req = request.post('/upload')
   *   acceptedFiles.forEach(file => {
   *     req.attach(file.name, file)
   *   })
   *   req.end(callback)
   * }
   * ```
   *
   * @param {File[]} acceptedFiles
   * @param {FileRejection[]} fileRejections
   * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
   */
  onDrop: Ae.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are accepted, this callback is not invoked.
   *
   * @param {File[]} files
   * @param {(DragEvent|Event)} event
   */
  onDropAccepted: Ae.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are rejected, this callback is not invoked.
   *
   * @param {FileRejection[]} fileRejections
   * @param {(DragEvent|Event)} event
   */
  onDropRejected: Ae.func,
  /**
   * Cb for when there's some error from any of the promises.
   *
   * @param {Error} error
   */
  onError: Ae.func,
  /**
   * Custom validation function. It must return null if there's no errors.
   * @param {File} file
   * @returns {FileError|FileError[]|null}
   */
  validator: Ae.func
};
var ys = {
  isFocused: !1,
  isFileDialogActive: !1,
  isDragActive: !1,
  isDragAccept: !1,
  isDragReject: !1,
  acceptedFiles: [],
  fileRejections: []
};
function Fp() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = ze(ze({}, Ap), e), i = t.accept, c = t.disabled, f = t.getFilesFromEvent, m = t.maxSize, w = t.minSize, S = t.multiple, O = t.maxFiles, z = t.onDragEnter, V = t.onDragLeave, K = t.onDragOver, Z = t.onDrop, te = t.onDropAccepted, ae = t.onDropRejected, ue = t.onFileDialogCancel, Te = t.onFileDialogOpen, G = t.useFsAccessApi, N = t.autoFocus, R = t.preventDropOnDocument, J = t.noClick, de = t.noKeyboard, ge = t.noDrag, he = t.noDragEventsBubbling, v = t.onError, ke = t.validator, F = E.useMemo(function() {
    return G0(i);
  }, [i]), Me = E.useMemo(function() {
    return X0(i);
  }, [i]), qe = E.useMemo(function() {
    return typeof Te == "function" ? Te : qc;
  }, [Te]), We = E.useMemo(function() {
    return typeof ue == "function" ? ue : qc;
  }, [ue]), s = E.useRef(null), o = E.useRef(null), l = E.useReducer(sm, ys), p = wa(l, 2), n = p[0], r = p[1], a = n.isFocused, h = n.isFileDialogActive, u = E.useRef(typeof window < "u" && window.isSecureContext && G && Y0()), d = function() {
    !u.current && h && setTimeout(function() {
      if (o.current) {
        var U = o.current.files;
        U.length || (r({
          type: "closeDialog"
        }), We());
      }
    }, 300);
  };
  E.useEffect(function() {
    return window.addEventListener("focus", d, !1), function() {
      window.removeEventListener("focus", d, !1);
    };
  }, [o, h, We, u]);
  var g = E.useRef([]), y = function(U) {
    s.current && s.current.contains(U.target) || (U.preventDefault(), g.current = []);
  };
  E.useEffect(function() {
    return R && (document.addEventListener("dragover", $c, !1), document.addEventListener("drop", y, !1)), function() {
      R && (document.removeEventListener("dragover", $c), document.removeEventListener("drop", y));
    };
  }, [s, R]), E.useEffect(function() {
    return !c && N && s.current && s.current.focus(), function() {
    };
  }, [s, N, c]);
  var x = E.useCallback(function(I) {
    v ? v(I) : console.error(I);
  }, [v]), C = E.useCallback(function(I) {
    I.preventDefault(), I.persist(), $(I), g.current = [].concat(J0(g.current), [I.target]), Ir(I) && Promise.resolve(f(I)).then(function(U) {
      if (!(bo(I) && !he)) {
        var Q = U.length, ie = Q > 0 && N0({
          files: U,
          accept: F,
          minSize: w,
          maxSize: m,
          multiple: S,
          maxFiles: O,
          validator: ke
        }), ee = Q > 0 && !ie;
        r({
          isDragAccept: ie,
          isDragReject: ee,
          isDragActive: !0,
          type: "setDraggedFiles"
        }), z && z(I);
      }
    }).catch(function(U) {
      return x(U);
    });
  }, [f, z, x, he, F, w, m, S, O, ke]), b = E.useCallback(function(I) {
    I.preventDefault(), I.persist(), $(I);
    var U = Ir(I);
    if (U && I.dataTransfer)
      try {
        I.dataTransfer.dropEffect = "copy";
      } catch {
      }
    return U && K && K(I), !1;
  }, [K, he]), M = E.useCallback(function(I) {
    I.preventDefault(), I.persist(), $(I);
    var U = g.current.filter(function(ie) {
      return s.current && s.current.contains(ie);
    }), Q = U.indexOf(I.target);
    Q !== -1 && U.splice(Q, 1), g.current = U, !(U.length > 0) && (r({
      type: "setDraggedFiles",
      isDragActive: !1,
      isDragAccept: !1,
      isDragReject: !1
    }), Ir(I) && V && V(I));
  }, [s, V, he]), P = E.useCallback(function(I, U) {
    var Q = [], ie = [];
    I.forEach(function(ee) {
      var le = Op(ee, F), re = wa(le, 2), se = re[0], oe = re[1], fe = Pp(ee, w, m), pe = wa(fe, 2), _e = pe[0], we = pe[1], Se = ke ? ke(ee) : null;
      if (se && _e && !Se)
        Q.push(ee);
      else {
        var Xe = [oe, we];
        Se && (Xe = Xe.concat(Se)), ie.push({
          file: ee,
          errors: Xe.filter(function(De) {
            return De;
          })
        });
      }
    }), (!S && Q.length > 1 || S && O >= 1 && Q.length > O) && (Q.forEach(function(ee) {
      ie.push({
        file: ee,
        errors: [z0]
      });
    }), Q.splice(0)), r({
      acceptedFiles: Q,
      fileRejections: ie,
      isDragReject: ie.length > 0,
      type: "setFiles"
    }), Z && Z(Q, ie, U), ie.length > 0 && ae && ae(ie, U), Q.length > 0 && te && te(Q, U);
  }, [r, S, F, w, m, O, Z, te, ae, ke]), _ = E.useCallback(function(I) {
    I.preventDefault(), I.persist(), $(I), g.current = [], Ir(I) && Promise.resolve(f(I)).then(function(U) {
      bo(I) && !he || P(U, I);
    }).catch(function(U) {
      return x(U);
    }), r({
      type: "reset"
    });
  }, [f, P, x, he]), k = E.useCallback(function() {
    if (u.current) {
      r({
        type: "openDialog"
      }), qe();
      var I = {
        multiple: S,
        types: Me
      };
      window.showOpenFilePicker(I).then(function(U) {
        return f(U);
      }).then(function(U) {
        P(U, null), r({
          type: "closeDialog"
        });
      }).catch(function(U) {
        V0(U) ? (We(U), r({
          type: "closeDialog"
        })) : $0(U) ? (u.current = !1, o.current ? (o.current.value = null, o.current.click()) : x(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))) : x(U);
      });
      return;
    }
    o.current && (r({
      type: "openDialog"
    }), qe(), o.current.value = null, o.current.click());
  }, [r, qe, We, G, P, x, Me, S]), L = E.useCallback(function(I) {
    !s.current || !s.current.isEqualNode(I.target) || (I.key === " " || I.key === "Enter" || I.keyCode === 32 || I.keyCode === 13) && (I.preventDefault(), k());
  }, [s, k]), H = E.useCallback(function() {
    r({
      type: "focus"
    });
  }, []), W = E.useCallback(function() {
    r({
      type: "blur"
    });
  }, []), A = E.useCallback(function() {
    J || (W0() ? setTimeout(k, 0) : k());
  }, [J, k]), T = function(U) {
    return c ? null : U;
  }, D = function(U) {
    return de ? null : T(U);
  }, X = function(U) {
    return ge ? null : T(U);
  }, $ = function(U) {
    he && U.stopPropagation();
  }, B = E.useMemo(function() {
    return function() {
      var I = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, U = I.refKey, Q = U === void 0 ? "ref" : U, ie = I.role, ee = I.onKeyDown, le = I.onFocus, re = I.onBlur, se = I.onClick, oe = I.onDragEnter, fe = I.onDragOver, pe = I.onDragLeave, _e = I.onDrop, we = To(I, K0);
      return ze(ze(vs({
        onKeyDown: D(Wt(ee, L)),
        onFocus: D(Wt(le, H)),
        onBlur: D(Wt(re, W)),
        onClick: T(Wt(se, A)),
        onDragEnter: X(Wt(oe, C)),
        onDragOver: X(Wt(fe, b)),
        onDragLeave: X(Wt(pe, M)),
        onDrop: X(Wt(_e, _)),
        role: typeof ie == "string" && ie !== "" ? ie : "presentation"
      }, Q, s), !c && !de ? {
        tabIndex: 0
      } : {}), we);
    };
  }, [s, L, H, W, A, C, b, M, _, de, ge, c]), j = E.useCallback(function(I) {
    I.stopPropagation();
  }, []), Y = E.useMemo(function() {
    return function() {
      var I = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, U = I.refKey, Q = U === void 0 ? "ref" : U, ie = I.onChange, ee = I.onClick, le = To(I, Q0), re = vs({
        accept: F,
        multiple: S,
        type: "file",
        style: {
          border: 0,
          clip: "rect(0, 0, 0, 0)",
          clipPath: "inset(50%)",
          height: "1px",
          margin: "0 -1px -1px 0",
          overflow: "hidden",
          padding: 0,
          position: "absolute",
          width: "1px",
          whiteSpace: "nowrap"
        },
        onChange: T(Wt(ie, _)),
        onClick: T(Wt(ee, j)),
        tabIndex: -1
      }, Q, o);
      return ze(ze({}, re), le);
    };
  }, [o, i, S, _, c]);
  return ze(ze({}, n), {}, {
    isFocused: a && !c,
    getRootProps: B,
    getInputProps: Y,
    rootRef: s,
    inputRef: o,
    open: T(k)
  });
}
function sm(e, t) {
  switch (t.type) {
    case "focus":
      return ze(ze({}, e), {}, {
        isFocused: !0
      });
    case "blur":
      return ze(ze({}, e), {}, {
        isFocused: !1
      });
    case "openDialog":
      return ze(ze({}, ys), {}, {
        isFileDialogActive: !0
      });
    case "closeDialog":
      return ze(ze({}, e), {}, {
        isFileDialogActive: !1
      });
    case "setDraggedFiles":
      return ze(ze({}, e), {}, {
        isDragActive: t.isDragActive,
        isDragAccept: t.isDragAccept,
        isDragReject: t.isDragReject
      });
    case "setFiles":
      return ze(ze({}, e), {}, {
        acceptedFiles: t.acceptedFiles,
        fileRejections: t.fileRejections,
        isDragReject: t.isDragReject
      });
    case "reset":
      return ze({}, ys);
    default:
      return e;
  }
}
function qc() {
}
const lm = "data:image/svg+xml,%3Csvg version='1.1' id='Ebene_1' x='0px' y='0px' width='595.275px' height='595.275px' viewBox='200 215 230 470' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3C/defs%3E%3Crect x='125.3' y='264.6' width='350.378' height='349.569' style='fill: rgb(237, 0, 0); stroke: rgb(197, 2, 2);' rx='58.194' ry='58.194'%3E%3C/rect%3E%3Cg%3E%3Crect x='267.162' y='307.978' transform='matrix(0.7071 -0.7071 0.7071 0.7071 -222.6202 340.6915)' style='fill:white;' width='65.545' height='262.18' rx='32.772' ry='32.772'%3E%3C/rect%3E%3Crect x='266.988' y='308.153' transform='matrix(0.7071 0.7071 -0.7071 0.7071 398.3889 -83.3116)' style='fill:white;' width='65.544' height='262.179' rx='32.772' ry='32.772'%3E%3C/rect%3E%3C/g%3E%3C/svg%3E", cm = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", um = [{ title: "Load", icon: Rg, disabledInMode: null }, { title: "Add Edge Brush", icon: Ng, disabledInMode: "COLOR" }, { title: "Remove Edge Brush", icon: Hg, disabledInMode: "COLOR" }, { title: "Brush", icon: Bg, disabledInMode: "EDGE" }, { title: "Erase", icon: Yg, disabledInMode: null }, { title: "Select", icon: Gg, disabledInMode: null }], hm = E.forwardRef(({
  theme: e = "system",
  autoAdaptToPhone: t = !0,
  changeDimensionCallBack: i,
  uploadImgCallBack: c,
  uploadOriginalImgCallBack: f,
  uploadAddEdgeMaskCallBack: m,
  uploadRemoveEdgeMaskCallBack: w,
  uploadColoredImgCallBack: S,
  uploadTotalMaskCallBack: O,
  uploadBackgroundImgCallBack: z,
  guessPromptCallBack: V,
  updatePromptCallBack: K
}, Z) => {
  E.useEffect(() => {
    if ((e === "dark" || e === "light") && document.body.setAttribute("data-theme", e), e === "system") {
      const q = window.matchMedia(
        "(prefers-color-scheme: dark)"
      );
      q.matches && document.body.setAttribute("data-theme", "dark"), q.addEventListener("change", (me) => document.body.setAttribute("data-theme", me.matches ? "dark" : "light"));
    }
  }, [e]);
  const te = E.useRef(0), ae = E.useRef(null), ue = E.useRef(null), Te = E.useRef(null), G = E.useRef(null), N = E.useRef(null), R = E.useRef(null), J = E.useRef(null), de = E.useRef(null), ge = E.useRef(null), he = E.useRef(null), [v, ke] = E.useState(!1), [F, Me] = E.useState("Brush"), qe = E.useRef(F), [We, s] = E.useState({
    Brush: 5,
    Erase: 5,
    "Add Edge Brush": 5,
    "Remove Edge Brush": 5
  }), o = E.useRef({
    add_edge: !1,
    remove_edge: !1,
    color: !1
  }), [l, p] = E.useState(150), [n, r] = E.useState(5), [a, h] = E.useState("#FFFFFF"), [u, d] = E.useState(1), [g, y] = E.useState(""), [x, C] = E.useState(!0), b = E.useRef(x);
  E.useEffect(() => {
    b.current = x;
  }, [x]);
  const [M, P] = E.useState(0), _ = E.useRef(M);
  E.useEffect(() => {
    _.current = M;
  }, [M]);
  const [k, L] = E.useState(!1), H = E.useRef(k);
  E.useEffect(() => {
    H.current = k;
  }, [k]);
  const [W, A] = E.useState([]), T = E.useRef([]), D = E.useRef([]), [X, $] = E.useState(!1), [B, j] = E.useState(!1), [Y, I] = E.useState(!1);
  E.useEffect(() => {
    console.log(F), !(!R.current || !R.current.lowerCanvasEl) && (F === "Select" || F === "Load" || (qe.current = F, r(We[F]), R.current.freeDrawingBrush.width = We[F], F === "Brush" && (R.current.freeDrawingBrush.color = Bc(
      a,
      u
    )), ie()));
  }, [F]);
  const U = (q, me) => {
    var xe = me.target, Ce = xe.canvas;
    xe._objects ? (Ce.remove(...xe._objects), Ce.discardActiveObject()) : Ce.remove(xe), Ce.requestRenderAll(), Mn(), Ut(), fe();
  }, Q = (q) => {
    const me = Math.min(R.current.width, R.current.height), xe = document.createElement("img");
    xe.src = lm, q.hasOwnProperty("controls") || (q.cornerSize = me / 30, q.controls.removeControl = new qt.Control({
      x: 0.5,
      y: -0.5,
      offsetY: -16,
      offsetX: 16,
      cursorStyle: "pointer",
      mouseUpHandler: U.bind(void 0),
      render: Fg(xe),
      cornerSize: me / 25
    }));
  }, ie = () => {
    let q = R.current.freeDrawingBrush.width;
    R.current.lowerCanvasEl.clientWidth && (q = q * R.current.lowerCanvasEl.clientWidth / R.current.getWidth());
    const me = R.current.freeDrawingBrush.color, xe = qe.current;
    let Ce;
    xe === "Brush" ? Ce = `
      <svg
        height="${q}"
        viewBox="0 0 ${q * 2} ${q * 2}"
        width="${q}"
        xmlns="http://www.w3.org/2000/svg"
      >
      <circle
        cx="50%"
        cy="50%"
        r="${q}"
        fill="${me}"
        opacity="0.7"
      />
      </svg>
    ` : Ce = `
      <svg
        height="${q}"
        viewBox="0 0 ${q * 2} ${q * 2}"
        width="${q}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="50%"
          cy="50%"
          r="${q}"
          fill="#ffffff"
          opacity="0.7"
        />
        <circle
          cx="50%"
          cy="50%"
          r="${q * 0.9}"
          fill="#000000"
          opacity="0.7"
        />
      </svg>
    `;
    const be = `data:image/svg+xml;base64,${window.btoa(Ce)}`;
    R.current.freeDrawingCursor = `url(${be}) ${q / 2} ${q / 2}, crosshair`;
  }, ee = (q, me) => {
    const xe = ae.current.clientWidth <= 600 && t;
    J.current.style.flexDirection = xe ? "column" : "row", console.log(ae.current.style), (!q || !me) && (q = J.current.clientWidth, xe || (q /= 2), me = q), R.current.setWidth(q), R.current.setHeight(me);
    let Ce;
    xe ? Ce = J.current.clientWidth : Ce = J.current.clientWidth / 2;
    const be = me / q * Ce;
    N.current.children[0].style.width = Ce + "px", N.current.children[0].style.height = be + "px", N.current.children[0].children[0].style.width = Ce + "px", N.current.children[0].children[0].style.height = be + "px", N.current.children[0].children[1].style.width = Ce + "px", N.current.children[0].children[1].style.height = be + "px", de.current.style.width = Ce + "px", de.current.style.height = be + "px", Te.current.style.height = xe ? be * 2 : be + "px";
    const Be = be + ue.current.clientHeight, cn = ue.current.clientWidth;
    i({ height: Be, width: cn }), le();
  }, le = () => {
    const q = Math.min(R.current.width, R.current.height);
    if (q === 0)
      return;
    const me = Math.floor(q * 0.1), xe = Math.floor(me / 5) * 5, Ce = Math.max(25, Math.min(xe, 150));
    p(Ce);
    const be = Math.floor(xe / 5 / 3) * 5;
    r(be), Object.keys(We).forEach((Be) => We[Be] = be), s(We);
  }, re = async (q) => {
    const me = await new Promise((xe) => qt.Image.fromURL(q, xe));
    R.current.clear(), Wo(null), pe(), vl(), me.set({ erasable: !1 }), R.current.setBackgroundImage(
      me,
      () => {
        R.current.renderAll(), Mn(!0);
      }
    ), Ut(), ee(me.width, me.height), fe();
  }, se = () => {
    let q = !H.current;
    R.current.discardActiveObject(), R.current.getObjects().forEach((me) => {
      me.set("visible", !q);
    }), L(q), R.current.renderAll();
  }, oe = () => {
    T.current.length > 1 ? $(!0) : $(!1), D.current.length > 0 ? j(!0) : j(!1);
  }, fe = () => {
    const q = R.current.toJSON(["brushType"]);
    T.current.push(q), D.current = [], oe();
  }, pe = () => {
    T.current = [], D.current = [], oe();
  }, _e = (q) => {
    console.log(q);
    let me = q, xe = new FileReader();
    xe.onload = (Ce) => {
      I(!1);
      let be = Ce.target.result;
      we(be);
    }, xe.readAsDataURL(me);
  }, we = async (q) => {
    mr(!0);
    const me = await z(q);
    me && re(me), mr(!1);
  }, Se = () => {
    if (T.current.length > 1) {
      const q = T.current.pop();
      D.current.push(q);
      const me = T.current[T.current.length - 1];
      R.current.loadFromJSON(me, () => {
        R.current.renderAll(), Mn(), Ut();
      });
    }
    oe();
  }, Xe = () => {
    if (D.current.length > 0) {
      const q = D.current.pop();
      T.current.push(q), R.current.loadFromJSON(q, () => {
        R.current.renderAll(), Mn(), Ut();
      });
    }
    oe();
  }, De = () => new Promise(
    (q) => R.current.clone(q, ["enableRetinaScaling", "brushType"])
  ), Pe = async () => {
    const q = await De();
    return q.setHeight(R.current.height), q.setWidth(R.current.width), q.renderAll(), new Promise((me) => q.lowerCanvasEl.toBlob(me, "image/png"));
  }, et = async () => {
    const q = await De();
    return q.setHeight(R.current.height), q.setWidth(R.current.width), q.remove(...q.getObjects()), q.renderAll(), new Promise((me) => q.lowerCanvasEl.toBlob(me, "image/png"));
  }, dt = async (q = "all") => {
    const me = await De();
    return me.setHeight(R.current.height), me.setWidth(R.current.width), me.getObjects().forEach((xe) => {
      xe.type === "path" && (q === "Add Edge Brush" || q === "Remove Edge Brush") && xe.set("visible", xe.brushType === q), xe.fill && xe.set("fill", "rgb(0,0,0)"), xe.stroke && xe.set("stroke", "rgb(0,0,0)"), xe.set("globalCompositeOperation", "destination-out");
    }), me.setBackgroundImage(null), me.setBackgroundColor("black"), me.renderAll(), new Promise((xe) => me.lowerCanvasEl.toBlob(xe, "image/png"));
  }, lt = async () => {
    const q = await De();
    return q.setHeight(R.current.height), q.setWidth(R.current.width), q.remove(...q.getObjects().filter((me) => ["Add Edge Brush", "Remove Edge Brush"].includes(me.brushType))), q.renderAll(), new Promise((me) => q.lowerCanvasEl.toBlob(me, "image/png"));
  }, Ti = () => {
    const q = R.current.getObjects().filter((Be) => Be.type === "path" && Be.brushType === "Add Edge Brush"), me = R.current.getObjects().filter((Be) => Be.type === "path" && Be.brushType === "Remove Edge Brush"), xe = R.current.getObjects().filter((Be) => Be.type === "path" && Be.brushType !== "Add Edge Brush" && Be.brushType !== "Remove Edge Brush"), Ce = {
      add_edge: q.length > 0,
      remove_edge: me.length > 0,
      color: xe.length > 0
    }, be = {
      add_edge: o.current.add_edge || Ce.add_edge,
      remove_edge: o.current.remove_edge || Ce.remove_edge,
      color: o.current.color || Ce.color
    };
    return o.current = be, be;
  }, vl = () => {
    y(""), K("");
  }, Lp = (q) => {
    y(q), K(q);
  }, Rp = E.useCallback(async () => {
    if (b.current)
      try {
        he.current.classList.remove("shining"), he.current.classList.add("blinking");
        const q = await V();
        he.current.classList.remove("blinking"), !q.error && q.prompt && q.prompt !== "" ? q.prompt != g && (he.current.classList.add("shining"), setTimeout(() => he.current.classList.remove("shining"), 1500), y(q.prompt)) : vl();
      } catch (q) {
        console.log(q);
      }
  }, [x]), mr = (q) => {
    q === !0 ? _.current = _.current + 1 : _.current = Math.max(0, _.current - 1), P(_.current);
  }, [$n, Wo] = E.useState(null);
  E.useImperativeHandle(Z, () => ({
    updateGeneratedImg(q) {
      Wo("data:image/png;base64," + q);
    }
  }));
  const Ip = () => {
    re($n);
  }, { getRootProps: Bp, getInputProps: zp } = Fp({
    onDrop: (q) => {
      !q || q.length < 1 || _e(q[0]);
    },
    accept: { "image/*": [] }
  }), Mn = async (q = !1) => {
    H.current && se(), mr(!0);
    try {
      const me = await Pe(), xe = await c(me);
      if (q) {
        const Be = await et();
        await f(Be);
      }
      const Ce = Ti();
      if (Ce.add_edge || q) {
        const Be = await dt("Add Edge Brush");
        await m(Be);
      }
      if (Ce.remove_edge || q) {
        const Be = await dt("Remove Edge Brush");
        await w(Be);
      }
      if (Ce.color || q) {
        const Be = await lt();
        await S(Be);
      }
      (Ce.add_edge || Ce.color) && !q && (R.current.getObjects().length === 0 ? y("") : await Rp());
      const be = await dt();
      await O(be);
    } catch (me) {
      console.error("Error in uploadPaintFile:", me), alert("An error occurred while uploading the file.");
    } finally {
      mr(!1);
    }
  }, Np = () => {
    R.current.discardActiveObject(), R.current.remove(...R.current.getObjects()), R.current.renderAll(), Mn(), fe(), Ut();
  }, yl = (q) => {
    if (R.current.discardActiveObject(), q !== "Load" && Me(q), q.includes("Brush")) {
      if (q === "Brush")
        R.current.freeDrawingBrush = new qt.PencilBrush(R.current);
      else if (q === "Add Edge Brush" || q === "Remove Edge Brush") {
        const me = q === "Add Edge Brush", xe = new qt.PatternBrush(R.current);
        xe.getPatternSrc = function() {
          const cn = qt.document.createElement("canvas");
          cn.width = cn.height = 15;
          const At = cn.getContext("2d");
          return At.fillStyle = me ? "white" : "black", At.fillRect(0, 0, 15, 15), new qt.Rect({
            width: 10,
            height: 10 / 3,
            fill: me ? "black" : "white",
            left: 5 / 2,
            top: (15 - 10 / 3) / 2
          }).render(At), me && new qt.Rect({
            width: 3.3333333333333335,
            height: 10,
            fill: "black",
            left: 5.833333333333333,
            top: 2.5
          }).render(At), cn;
        }, xe.source = xe.getPatternSrc(), R.current.freeDrawingBrush = xe;
      }
      R.current.isDrawingMode = !0;
    } else q === "Erase" ? (R.current.freeDrawingBrush = new qt.EraserBrush(R.current), R.current.isDrawingMode = !0) : q === "Select" ? R.current.isDrawingMode = !1 : q === "Load" && ge.current.click();
  }, Ut = () => {
    let q = [], me = !1, xe = !1;
    const Ce = R.current.getObjects().map((be, Be) => {
      const cn = be.type;
      let At;
      cn === "path" && (be.brushType === "Add Edge Brush" ? (At = "+ edge", me = !0) : be.brushType === "Remove Edge Brush" ? (At = "- edge", me = !0) : (At = "color", xe = !0));
      let xl = q.filter((Yo) => Yo === At).length + 1;
      const wl = At + ` ${xl}`;
      return q.unshift(At), {
        name: wl,
        setActiveFunc: () => {
          R.current.discardActiveObject(), Q(be), R.current.setActiveObject(be), R.current.renderAll();
        },
        removeFunc: (Yo) => {
          U(null, { target: be }), Yo.stopPropagation();
        },
        isActive: R.current.getActiveObjects().includes(be)
      };
    });
    ke(me ? "EDGE" : xe ? "COLOR" : "NONE"), A(Ce.reverse());
  };
  E.useEffect(() => {
    if (J.current && G.current) {
      const xe = new qt.Canvas(G.current, {
        isDrawingMode: !0,
        backgroundColor: "transparent",
        enablePointerEvents: !0,
        enableRetinaScaling: !1,
        fireRightClick: !0,
        fireMiddleClick: !0,
        stopContextMenu: !0
      });
      xe.backgroundColor = "#000000", xe.on({
        "selection:created": (Ce) => {
          Me("Select"), R.current.isDrawingMode = !1, Ut();
        },
        "selection:updated": (Ce) => {
          Ut();
        },
        "selection:cleared": (Ce) => {
          Me("Select"), Ut();
        },
        "object:modified": (Ce) => {
          Mn(), fe(), Ut();
        },
        "mouse:up": (Ce) => {
          R.current.getActiveObjects().forEach((be) => {
            Q(be);
          }), R.current.isDrawingMode && (Mn(), fe());
        },
        "path:created": ({ path: Ce }) => {
          Ce.brushType = qe.current, qe.current === "Remove Edge Brush" && R.current.getObjects().forEach((be) => {
            be.type === "path" && be.brushType === "Remove Edge Brush" || Ce.sendBackwards();
          }), Ut();
        }
      }), R.current = xe, ee(null, null), I(!0), yl("Add Edge Brush"), fe();
    }
    const q = (xe) => {
      for (let Ce of xe) {
        let be = Ce.contentRect.width;
        be !== te.current && (te.current = be, !R.current.width || !R.current.height ? ee(be, be) : ee(R.current.width, R.current.height));
      }
    }, me = new ResizeObserver(q);
    return ae.current && me.observe(ae.current), () => {
      ae.current && me.unobserve(ae.current), R.current && R.current.dispose();
    };
  }, []), E.useEffect(() => {
    R.current && (R.current.freeDrawingBrush.color = Bc(
      a,
      u
    ), ie());
  }, [a, u]), E.useEffect(() => {
    R.current && (R.current.freeDrawingBrush.width = Number(n), We[F] = Number(n), s(We), ie());
  }, [n]);
  const Up = () => {
    let q = document.createElement("a");
    $n ? q.href = $n : q.href = R.current.toDataURL({
      format: "png",
      quality: 0.8
    }), q.download = "magicquill.png", q.click();
  };
  return /* @__PURE__ */ ye.jsxs("div", { style: { height: "100%", width: "100%" }, ref: ae, children: [
    /* @__PURE__ */ ye.jsxs("div", { className: "top-bar", ref: ue, children: [
      /* @__PURE__ */ ye.jsxs("div", { id: "prompt-input-box", children: [
        /* @__PURE__ */ ye.jsx("div", { className: "painter-tool-icon", children: /* @__PURE__ */ ye.jsx(
          $g,
          {
            id: "wand-icon",
            ref: he,
            className: x ? "active" : "",
            title: "Guess prompt: " + (x ? "on" : "off"),
            onClick: () => C(!x)
          }
        ) }),
        /* @__PURE__ */ ye.jsx("input", { id: "prompt-input", placeholder: "Brush your canvas to tell us what you'd like to create!", onChange: (q) => Lp(q.target.value), value: g })
      ] }),
      /* @__PURE__ */ ye.jsxs("div", { id: "tool-bar", children: [
        /* @__PURE__ */ ye.jsxs("div", { id: "essential-tool-box", children: [
          /* @__PURE__ */ ye.jsx("input", { type: "file", accept: "image/jpeg,image/png,image/webp", hidden: !0, ref: ge, onChange: (q) => _e(q.target.files[0]) }),
          um.map((q) => {
            const me = q.icon;
            return /* @__PURE__ */ ye.jsx(
              "div",
              {
                className: "painter-tool-icon" + (v === q.disabledInMode ? " disabled" : ""),
                title: q.title,
                onClick: () => {
                  q.disabledInMode !== v && yl(q.title);
                },
                children: /* @__PURE__ */ ye.jsx(me, { className: F === q.title ? "active" : "" })
              },
              q.title
            );
          })
        ] }),
        /* @__PURE__ */ ye.jsxs("div", { id: "stroke-size-box", children: [
          /* @__PURE__ */ ye.jsx("div", { className: "separator" }),
          /* @__PURE__ */ ye.jsx("input", { type: "range", id: "stroke-width-slider", min: "1", max: l, value: n, step: "1", title: "Stroke width", onChange: (q) => r(q.target.value) }),
          /* @__PURE__ */ ye.jsx("div", { id: "stroke-width-value", children: n })
        ] }),
        /* @__PURE__ */ ye.jsxs("div", { id: "color-and-alpha-box", children: [
          /* @__PURE__ */ ye.jsx("div", { className: "separator" }),
          F === "Brush" && /* @__PURE__ */ ye.jsxs(ye.Fragment, { children: [
            /* @__PURE__ */ ye.jsx("input", { id: "stroke-color", type: "color", value: a, title: "Stroke color", onChange: (q) => h(q.target.value) }),
            /* @__PURE__ */ ye.jsx("input", { id: "stroke-color-transparent", type: "number", max: "1.0", min: "0.1", step: "0.05", value: u, title: "Stroke alpha value", onChange: (q) => d(q.target.value) })
          ] }),
          /* @__PURE__ */ ye.jsxs("div", { id: "painter-history-panel", children: [
            /* @__PURE__ */ ye.jsx("div", { className: "separator" }),
            /* @__PURE__ */ ye.jsx("div", { className: "painter-tool-icon" + (X ? "" : " disabled"), title: "Undo", children: /* @__PURE__ */ ye.jsx(qg, { title: "Undo", onClick: () => Se() }) }),
            /* @__PURE__ */ ye.jsx("div", { className: "painter-tool-icon" + (B ? "" : " disabled"), title: "Redo", children: /* @__PURE__ */ ye.jsx(Qg, { title: "Redo", onClick: () => Xe() }) })
          ] })
        ] }),
        /* @__PURE__ */ ye.jsx("div", { id: "download-box", children: /* @__PURE__ */ ye.jsx("div", { className: "painter-tool-icon", children: /* @__PURE__ */ ye.jsx(c0, { title: "Download", onClick: () => Up() }) }) })
      ] })
    ] }),
    /* @__PURE__ */ ye.jsxs("div", { className: "lower-area", ref: Te, children: [
      /* @__PURE__ */ ye.jsxs("div", { className: "side-bar", children: [
        /* @__PURE__ */ ye.jsxs("div", { className: "layer-box", children: [
          /* @__PURE__ */ ye.jsxs("div", { className: "layer-operation-box", children: [
            /* @__PURE__ */ ye.jsx("div", { className: "painter-tool-icon", title: "Remove All", id: "layer-remove-button", children: /* @__PURE__ */ ye.jsx(zc, { title: "Remove All", onClick: () => Np() }) }),
            /* @__PURE__ */ ye.jsx("div", { className: "painter-tool-icon", title: "Hide All", id: "layer-hide-button", onClick: () => se(), children: /* @__PURE__ */ ye.jsx(o0, { className: k ? "active" : "", title: "Hide All" }) })
          ] }),
          /* @__PURE__ */ ye.jsx("div", { className: "layer-item-list", children: W.map((q) => /* @__PURE__ */ ye.jsxs("div", { className: "layer-item-container" + (q.isActive ? " active" : ""), onClick: () => q.setActiveFunc(), children: [
            /* @__PURE__ */ ye.jsx("div", { className: "layer-item", children: q.name }),
            /* @__PURE__ */ ye.jsx(zc, { className: "layer-item-remove", title: "Remove", onClick: (me) => q.removeFunc(me) })
          ] }, q.name)) })
        ] }),
        /* @__PURE__ */ ye.jsx("div", { id: "loading-status", hidden: M === 0, children: /* @__PURE__ */ ye.jsx(s0, { className: "rotating" }) })
      ] }),
      /* @__PURE__ */ ye.jsxs("div", { id: "output-area", ref: J, children: [
        /* @__PURE__ */ ye.jsxs("div", { id: "left-box", children: [
          Y && /* @__PURE__ */ ye.jsxs("div", { ...Bp({ id: "bg-reminder" }), children: [
            /* @__PURE__ */ ye.jsx("input", { ...zp() }),
            /* @__PURE__ */ ye.jsx("p", { id: "bg-reminder-text", children: "Upload or drop an image here" })
          ] }),
          /* @__PURE__ */ ye.jsx("div", { id: "canvas-box", ref: N, children: /* @__PURE__ */ ye.jsx("canvas", { ref: G }) })
        ] }),
        /* @__PURE__ */ ye.jsxs("div", { id: "output-img-box", ref: de, children: [
          $n && /* @__PURE__ */ ye.jsxs("div", { id: "output-operation-box", children: [
            /* @__PURE__ */ ye.jsx("div", { className: "painter-tool-icon", title: "Accept", onClick: () => Ip(), children: /* @__PURE__ */ ye.jsx(e0, { title: "Accept", style: { fill: "#507B58" } }) }),
            /* @__PURE__ */ ye.jsx("div", { className: "painter-tool-icon", title: "Discard", onClick: () => Wo(null), children: /* @__PURE__ */ ye.jsx(n0, { title: "Discard", style: { fill: "#AB3131" } }) })
          ] }),
          /* @__PURE__ */ ye.jsx("img", { id: "output-img", src: $n || cm })
        ] })
      ] })
    ] })
  ] });
}), pm = (e, t) => {
  console.log(e, t, "embedMagicQuill");
  const i = Math.random().toString(36).substring(7);
  if (!e)
    throw "DOM element not found.";
  const c = su.createRef();
  return window.updateGeneratedImg || (window.updateGeneratedImg = {}), window.updateGeneratedImg[i] = (f) => {
    c.current && c.current.updateGeneratedImg(f);
  }, gg.render(
    // <React.StrictMode>
    /* @__PURE__ */ ye.jsx(hm, { ...t, ref: c }),
    // </React.StrictMode>,
    e
  ), i;
};
export {
  pm as embedMagicQuill
};
