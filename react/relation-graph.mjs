(function(){ try {var elementStyle = document.createElement('style'); elementStyle.appendChild(document.createTextNode(".rel-map{background-color:#fff;overflow:hidden;cursor:default;user-select:none}.rel-map-background-norepeat{background-repeat:no-repeat;background-position:right bottom}.rel-nodediv-for-webkit{position:absolute;width:100%;top:0px;left:0px;z-index:1000}.rel-map-canvas{position:relative;top:0px;left:0px;border:0px;z-index:3}svg{height:100%;width:100%}.rel-linediv{position:absolute;z-index:900;width:100%;top:0px;left:0px;--stroke: url(#lineStyle);--markerEnd: url(#arrow-default);--markerStart: url(#start-arrow-default);--markerEndChecked: url(#arrow-checked);--markerStartChecked: url(#start-arrow-checked)}.rel-linediv svg{overflow:visible}.rel-map img{-webkit-user-drag:none;-webkit-user-select:none}.rg-icon{width:19px;height:19px;vertical-align:0px;fill:currentColor;overflow:hidden}.el-icon-remove,.el-icon-circle-plus{cursor:pointer}.rel-node-peel{clear:both;padding:8px;position:absolute;font-size:14px}.rel-node{text-align:center}.rel-node-shape-1{border-radius:5px}.c-node-text{height:100%;width:100%;display:flex;align-items:center;justify-content:center}.rel-node-shape-1 .c-node-text{padding-left:5px;padding-right:5px}.rel-node-shape-0{width:80px;height:80px;border-radius:50%}.rel-node-type-button{border-radius:25px;color:#00f;cursor:pointer}.rel-node-checked,.rel-node-selected{box-shadow:0 0 10px #fd8b37;animation-timing-function:linear;animation:ACTRGNodeInit 2s}.rel-node-vtree-2{transform-origin:0 0;transform:rotate(30deg) translate(0)}.rel-node-vtree{width:130px;height:45px;text-align:left}.c-btn-open-close{position:absolute;height:100%;width:19px;display:flex;align-items:center;justify-content:center;user-select:none;pointer-events:none}.c-btn-open-close span{width:19px;height:19px;display:inline-block;text-align:center;border-radius:15px;color:#fff;cursor:pointer;font-size:19px;line-height:16px;background-size:100% 100%;pointer-events:all}.c-expanded{background-image:url(data:image/svg+xml;%20charset=utf8,%3Csvg%20t=%221606310217820%22%20viewBox=%220%200%201024%201024%22%20version=%221.1%22%20xmlns=%22http://www.w3.org/2000/svg%22%20p-id=%223373%22%20width=%2232%22%20height=%2232%22%3E%3Cpath%20d=%22M853.333333%20480H544V170.666667c0-17.066667-14.933333-32-32-32s-32%2014.933333-32%2032v309.333333H170.666667c-17.066667%200-32%2014.933333-32%2032s14.933333%2032%2032%2032h309.333333V853.333333c0%2017.066667%2014.933333%2032%2032%2032s32-14.933333%2032-32V544H853.333333c17.066667%200%2032-14.933333%2032-32s-14.933333-32-32-32z%22%20p-id=%223374%22%20fill=%22white%22%3E%3C/path%3E%3C/svg%3E)}.c-collapsed{background-image:url(data:image/svg+xml;%20charset=utf8,%3Csvg%20t=%221606310454619%22%20class=%22icon%22%20viewBox=%220%200%201024%201024%22%20version=%221.1%22%20xmlns=%22http://www.w3.org/2000/svg%22%20p-id=%223662%22%20width=%22128%22%20height=%22128%22%3E%3Cpath%20d=%22M853.333333%20554.666667H170.666667c-23.466667%200-42.666667-19.2-42.666667-42.666667s19.2-42.666667%2042.666667-42.666667h682.666666c23.466667%200%2042.666667%2019.2%2042.666667%2042.666667s-19.2%2042.666667-42.666667%2042.666667z%22%20p-id=%223663%22%20fill=%22white%22%3E%3C/path%3E%3C/svg%3E)}.c-expand-positon-left{margin-top:-8px;margin-left:-25px}.c-expand-positon-right{height:100%;width:100%;justify-content:center}.c-expand-positon-right span{margin-top:-18px;margin-right:-18px;margin-left:100%}.c-expand-positon-bottom{height:100%;width:100%;margin-top:7px;margin-left:-8px;align-items:flex-end;justify-content:center}.c-expand-positon-top{height:18px;width:100%;margin-top:-20px;margin-left:-6px;align-items:flex-end;justify-content:center}@keyframes ACTRGNodeInit{0%{box-shadow:0 0 15px #fd8b37}15%{box-shadow:0 0 1px #2e4e8f}30%{box-shadow:0 0 15px #fd8b37}45%{box-shadow:0 0 1px #2e4e8f}60%{box-shadow:0 0 15px #fd8b37}to{box-shadow:0 0 1px #2e4e8f}}.rel-diy-node{padding:0}.c-rg-line-checked{stroke-width:2px;stroke-dasharray:5,5,5;stroke-dashoffset:3px;stroke-linecap:butt;stroke-linejoin:bevel;-moz-transform:rotate(-89deg) translateX(-190px);animation-timing-function:linear;animation:ACTRGLineChecked 10s}.c-rg-line-text{fill:#888;font-size:12px}.c-rg-line{z-index:1000;fill-rule:nonzero}.c-rg-line-tool{stroke-dasharray:5,5,5}.c-rg-line-flash{-moz-transform:rotate(-89deg) translateX(-190px);animation-timing-function:linear;animation:ACTRGLineChecked 10s}@keyframes ACTRGLineInit{0%{stroke-dashoffset:10px;stroke-dasharray:20,20,20}to{stroke-dashoffset:0;stroke-dasharray:0,0,0}}@keyframes ACTRGLineChecked{0%{stroke-dashoffset:352px}to{stroke-dashoffset:0}}.c-setting-panel{--height: 300px;--width: 200px;width:300px;height:200px;position:absolute;margin-left:10px;margin-top:5px;font-size:12px;color:#3a5bb2;padding:60px 10px 10px;overflow:hidden;box-shadow:0 0 5px #999;border-radius:5px;z-index:1000;background-color:#fff;border:#999999 solid 1px}.c-setting-panel-button{height:35px;width:35px;font-size:8px;line-height:35px;text-align:center;border-radius:50%;position:absolute;margin-left:25px;margin-top:20px;background-color:#3a5bb2;color:#fff;cursor:pointer;z-index:1001;box-shadow:0 0 8px #999}.c-setting-panel-button:hover{box-shadow:0 0 20px #ffa20a;border:#ffffff solid 1px;color:#ffa20a;-moz-transform:rotate(-89deg) translateX(-190px);animation-timing-function:linear;animation:flashButton 2s infinite}.c-fixedLayout{position:fixed;top:125px}@keyframes flashButton{0%{box-shadow:0 0 8px #2e4e8f}30%{box-shadow:0 0 20px #ffa20a}to{box-shadow:0 0 8px #2e4e8f}}.c-debug-tools-row{text-align:left}.rg-icon{width:16px;height:16px;vertical-align:-3px;fill:currentColor;overflow:hidden}.c-mini-toolbar{width:44px;position:absolute;margin-top:170px;margin-right:10px;z-index:999;border:#bbbbbb solid 1px;background-color:#fff;box-shadow:0 0 8px #ccc;box-sizing:border-box}.c-fixedLayout{position:fixed;top:100px}.c-mb-button{height:44px;width:42px;margin-top:0;background-color:#fff;border-top:#efefef solid 1px;opacity:1;text-align:center;padding-top:3px;cursor:pointer;color:#999;font-size:18px;float:left;box-sizing:border-box;line-height:21px}.c-mb-button .c-mb-text{display:inline-block;height:14px;width:42px;font-size:12px;line-height:12px;margin-top:24px;margin-left:-28px;position:absolute;color:#262626}.c-mb-button-on{background-color:#2e74b5;border-top:#2E4E8F solid 1px;color:#fff}.c-mb-button:hover{background-color:#2e4e8f;border-top:#2E4E8F solid 1px;color:#fff}.c-mb-button:hover .c-mb-text,.c-mb-button-on .c-mb-text{color:#fff}.c-mb-button .c-mb-child-panel{height:46px;position:absolute;margin-top:-26px;background-color:#fff;display:none;border:#bbbbbb solid 1px;box-shadow:0 0 8px #ccc;box-sizing:border-box}.c-mb-button:hover .c-mb-child-panel{display:block}.c-mb-button .c-mb-button{height:44px;width:42px;margin:0;border:none}.c-mb-button-c .c-mb-text{color:#262626!important}.c-mb-button-c:hover .c-mb-text,.c-mb-button-on .c-mb-text{color:#fff!important}.c-loading-icon{animation:turn 1s linear infinite}@keyframes turn{0%{-webkit-transform:rotate(0deg)}25%{-webkit-transform:rotate(90deg)}50%{-webkit-transform:rotate(180deg)}75%{-webkit-transform:rotate(270deg)}to{-webkit-transform:rotate(360deg)}}")); document.head.appendChild(elementStyle);} catch(e) {console.error('vite-plugin-css-injected-by-js', e);} })();var zt = Object.defineProperty;
var $t = (t, e, o) => e in t ? zt(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o;
var N = (t, e, o) => ($t(t, typeof e != "symbol" ? e + "" : e, o), o);
import ue, { createContext as st, useRef as he, useContext as G, useEffect as ye, useState as at, useImperativeHandle as At } from "react";
import * as Rt from "screenfull";
import ve from "screenfull";
import * as Pt from "html2canvas";
import Ot from "html2canvas";
var xe = { exports: {} }, ae = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var ze, et;
function rt() {
  if (et)
    return ze;
  et = 1;
  var t = Object.getOwnPropertySymbols, e = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
  function n(s) {
    if (s == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(s);
  }
  function i() {
    try {
      if (!Object.assign)
        return !1;
      var s = new String("abc");
      if (s[5] = "de", Object.getOwnPropertyNames(s)[0] === "5")
        return !1;
      for (var l = {}, r = 0; r < 10; r++)
        l["_" + String.fromCharCode(r)] = r;
      var a = Object.getOwnPropertyNames(l).map(function(u) {
        return l[u];
      });
      if (a.join("") !== "0123456789")
        return !1;
      var h = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(u) {
        h[u] = u;
      }), Object.keys(Object.assign({}, h)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return ze = i() ? Object.assign : function(s, l) {
    for (var r, a = n(s), h, u = 1; u < arguments.length; u++) {
      r = Object(arguments[u]);
      for (var d in r)
        e.call(r, d) && (a[d] = r[d]);
      if (t) {
        h = t(r);
        for (var f = 0; f < h.length; f++)
          o.call(r, h[f]) && (a[h[f]] = r[h[f]]);
      }
    }
    return a;
  }, ze;
}
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tt;
function Bt() {
  if (tt)
    return ae;
  tt = 1, rt();
  var t = ue, e = 60103;
  if (ae.Fragment = 60107, typeof Symbol == "function" && Symbol.for) {
    var o = Symbol.for;
    e = o("react.element"), ae.Fragment = o("react.fragment");
  }
  var n = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = Object.prototype.hasOwnProperty, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(r, a, h) {
    var u, d = {}, f = null, g = null;
    h !== void 0 && (f = "" + h), a.key !== void 0 && (f = "" + a.key), a.ref !== void 0 && (g = a.ref);
    for (u in a)
      i.call(a, u) && !s.hasOwnProperty(u) && (d[u] = a[u]);
    if (r && r.defaultProps)
      for (u in a = r.defaultProps, a)
        d[u] === void 0 && (d[u] = a[u]);
    return { $$typeof: e, type: r, key: f, ref: g, props: d, _owner: n.current };
  }
  return ae.jsx = l, ae.jsxs = l, ae;
}
var $e = {};
/** @license React v17.0.2
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ot;
function Dt() {
  return ot || (ot = 1, function(t) {
    process.env.NODE_ENV !== "production" && function() {
      var e = ue, o = rt(), n = 60103, i = 60106;
      t.Fragment = 60107;
      var s = 60108, l = 60114, r = 60109, a = 60110, h = 60112, u = 60113, d = 60120, f = 60115, g = 60116, x = 60121, v = 60122, w = 60117, z = 60129, P = 60131;
      if (typeof Symbol == "function" && Symbol.for) {
        var b = Symbol.for;
        n = b("react.element"), i = b("react.portal"), t.Fragment = b("react.fragment"), s = b("react.strict_mode"), l = b("react.profiler"), r = b("react.provider"), a = b("react.context"), h = b("react.forward_ref"), u = b("react.suspense"), d = b("react.suspense_list"), f = b("react.memo"), g = b("react.lazy"), x = b("react.block"), v = b("react.server.block"), w = b("react.fundamental"), b("react.scope"), b("react.opaque.id"), z = b("react.debug_trace_mode"), b("react.offscreen"), P = b("react.legacy_hidden");
      }
      var S = typeof Symbol == "function" && Symbol.iterator, W = "@@iterator";
      function C(c) {
        if (c === null || typeof c != "object")
          return null;
        var m = S && c[S] || c[W];
        return typeof m == "function" ? m : null;
      }
      var O = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      function T(c) {
        {
          for (var m = arguments.length, y = new Array(m > 1 ? m - 1 : 0), M = 1; M < m; M++)
            y[M - 1] = arguments[M];
          Z("error", c, y);
        }
      }
      function Z(c, m, y) {
        {
          var M = O.ReactDebugCurrentFrame, I = M.getStackAddendum();
          I !== "" && (m += "%s", y = y.concat([I]));
          var j = y.map(function(R) {
            return "" + R;
          });
          j.unshift("Warning: " + m), Function.prototype.apply.call(console[c], console, j);
        }
      }
      var k = !1;
      function E(c) {
        return !!(typeof c == "string" || typeof c == "function" || c === t.Fragment || c === l || c === z || c === s || c === u || c === d || c === P || k || typeof c == "object" && c !== null && (c.$$typeof === g || c.$$typeof === f || c.$$typeof === r || c.$$typeof === a || c.$$typeof === h || c.$$typeof === w || c.$$typeof === x || c[0] === v));
      }
      function D(c, m, y) {
        var M = m.displayName || m.name || "";
        return c.displayName || (M !== "" ? y + "(" + M + ")" : y);
      }
      function V(c) {
        return c.displayName || "Context";
      }
      function A(c) {
        if (c == null)
          return null;
        if (typeof c.tag == "number" && T("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof c == "function")
          return c.displayName || c.name || null;
        if (typeof c == "string")
          return c;
        switch (c) {
          case t.Fragment:
            return "Fragment";
          case i:
            return "Portal";
          case l:
            return "Profiler";
          case s:
            return "StrictMode";
          case u:
            return "Suspense";
          case d:
            return "SuspenseList";
        }
        if (typeof c == "object")
          switch (c.$$typeof) {
            case a:
              var m = c;
              return V(m) + ".Consumer";
            case r:
              var y = c;
              return V(y._context) + ".Provider";
            case h:
              return D(c, c.render, "ForwardRef");
            case f:
              return A(c.type);
            case x:
              return A(c._render);
            case g: {
              var M = c, I = M._payload, j = M._init;
              try {
                return A(j(I));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Y = 0, ne, fe, Oe, Be, De, Ie, je;
      function Te() {
      }
      Te.__reactDisabledLog = !0;
      function ct() {
        {
          if (Y === 0) {
            ne = console.log, fe = console.info, Oe = console.warn, Be = console.error, De = console.group, Ie = console.groupCollapsed, je = console.groupEnd;
            var c = {
              configurable: !0,
              enumerable: !0,
              value: Te,
              writable: !0
            };
            Object.defineProperties(console, {
              info: c,
              log: c,
              warn: c,
              error: c,
              group: c,
              groupCollapsed: c,
              groupEnd: c
            });
          }
          Y++;
        }
      }
      function ht() {
        {
          if (Y--, Y === 0) {
            var c = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: o({}, c, {
                value: ne
              }),
              info: o({}, c, {
                value: fe
              }),
              warn: o({}, c, {
                value: Oe
              }),
              error: o({}, c, {
                value: Be
              }),
              group: o({}, c, {
                value: De
              }),
              groupCollapsed: o({}, c, {
                value: Ie
              }),
              groupEnd: o({}, c, {
                value: je
              })
            });
          }
          Y < 0 && T("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var be = O.ReactCurrentDispatcher, Ce;
      function pe(c, m, y) {
        {
          if (Ce === void 0)
            try {
              throw Error();
            } catch (I) {
              var M = I.stack.trim().match(/\n( *(at )?)/);
              Ce = M && M[1] || "";
            }
          return `
` + Ce + c;
        }
      }
      var Me = !1, _e;
      {
        var dt = typeof WeakMap == "function" ? WeakMap : Map;
        _e = new dt();
      }
      function Fe(c, m) {
        if (!c || Me)
          return "";
        {
          var y = _e.get(c);
          if (y !== void 0)
            return y;
        }
        var M;
        Me = !0;
        var I = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var j;
        j = be.current, be.current = null, ct();
        try {
          if (m) {
            var R = function() {
              throw Error();
            };
            if (Object.defineProperty(R.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(R, []);
              } catch (K) {
                M = K;
              }
              Reflect.construct(c, [], R);
            } else {
              try {
                R.call();
              } catch (K) {
                M = K;
              }
              c.call(R.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (K) {
              M = K;
            }
            c();
          }
        } catch (K) {
          if (K && M && typeof K.stack == "string") {
            for (var $ = K.stack.split(`
`), J = M.stack.split(`
`), F = $.length - 1, H = J.length - 1; F >= 1 && H >= 0 && $[F] !== J[H]; )
              H--;
            for (; F >= 1 && H >= 0; F--, H--)
              if ($[F] !== J[H]) {
                if (F !== 1 || H !== 1)
                  do
                    if (F--, H--, H < 0 || $[F] !== J[H]) {
                      var q = `
` + $[F].replace(" at new ", " at ");
                      return typeof c == "function" && _e.set(c, q), q;
                    }
                  while (F >= 1 && H >= 0);
                break;
              }
          }
        } finally {
          Me = !1, be.current = j, ht(), Error.prepareStackTrace = I;
        }
        var se = c ? c.displayName || c.name : "", Qe = se ? pe(se) : "";
        return typeof c == "function" && _e.set(c, Qe), Qe;
      }
      function He(c, m, y) {
        return Fe(c, !1);
      }
      function ut(c) {
        var m = c.prototype;
        return !!(m && m.isReactComponent);
      }
      function me(c, m, y) {
        if (c == null)
          return "";
        if (typeof c == "function")
          return Fe(c, ut(c));
        if (typeof c == "string")
          return pe(c);
        switch (c) {
          case u:
            return pe("Suspense");
          case d:
            return pe("SuspenseList");
        }
        if (typeof c == "object")
          switch (c.$$typeof) {
            case h:
              return He(c.render);
            case f:
              return me(c.type, m, y);
            case x:
              return He(c._render);
            case g: {
              var M = c, I = M._payload, j = M._init;
              try {
                return me(j(I), m, y);
              } catch {
              }
            }
          }
        return "";
      }
      var We = {}, Ve = O.ReactDebugCurrentFrame;
      function ge(c) {
        if (c) {
          var m = c._owner, y = me(c.type, c._source, m ? m.type : null);
          Ve.setExtraStackFrame(y);
        } else
          Ve.setExtraStackFrame(null);
      }
      function ft(c, m, y, M, I) {
        {
          var j = Function.call.bind(Object.prototype.hasOwnProperty);
          for (var R in c)
            if (j(c, R)) {
              var $ = void 0;
              try {
                if (typeof c[R] != "function") {
                  var J = Error((M || "React class") + ": " + y + " type `" + R + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof c[R] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw J.name = "Invariant Violation", J;
                }
                $ = c[R](m, R, M, y, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (F) {
                $ = F;
              }
              $ && !($ instanceof Error) && (ge(I), T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", M || "React class", y, R, typeof $), ge(null)), $ instanceof Error && !($.message in We) && (We[$.message] = !0, ge(I), T("Failed %s type: %s", y, $.message), ge(null));
            }
        }
      }
      var le = O.ReactCurrentOwner, Se = Object.prototype.hasOwnProperty, pt = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Ge, Ye, Ee;
      Ee = {};
      function _t(c) {
        if (Se.call(c, "ref")) {
          var m = Object.getOwnPropertyDescriptor(c, "ref").get;
          if (m && m.isReactWarning)
            return !1;
        }
        return c.ref !== void 0;
      }
      function mt(c) {
        if (Se.call(c, "key")) {
          var m = Object.getOwnPropertyDescriptor(c, "key").get;
          if (m && m.isReactWarning)
            return !1;
        }
        return c.key !== void 0;
      }
      function gt(c, m) {
        if (typeof c.ref == "string" && le.current && m && le.current.stateNode !== m) {
          var y = A(le.current.type);
          Ee[y] || (T('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', A(le.current.type), c.ref), Ee[y] = !0);
        }
      }
      function vt(c, m) {
        {
          var y = function() {
            Ge || (Ge = !0, T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", m));
          };
          y.isReactWarning = !0, Object.defineProperty(c, "key", {
            get: y,
            configurable: !0
          });
        }
      }
      function yt(c, m) {
        {
          var y = function() {
            Ye || (Ye = !0, T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", m));
          };
          y.isReactWarning = !0, Object.defineProperty(c, "ref", {
            get: y,
            configurable: !0
          });
        }
      }
      var xt = function(c, m, y, M, I, j, R) {
        var $ = {
          $$typeof: n,
          type: c,
          key: m,
          ref: y,
          props: R,
          _owner: j
        };
        return $._store = {}, Object.defineProperty($._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty($, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: M
        }), Object.defineProperty($, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: I
        }), Object.freeze && (Object.freeze($.props), Object.freeze($)), $;
      };
      function wt(c, m, y, M, I) {
        {
          var j, R = {}, $ = null, J = null;
          y !== void 0 && ($ = "" + y), mt(m) && ($ = "" + m.key), _t(m) && (J = m.ref, gt(m, I));
          for (j in m)
            Se.call(m, j) && !pt.hasOwnProperty(j) && (R[j] = m[j]);
          if (c && c.defaultProps) {
            var F = c.defaultProps;
            for (j in F)
              R[j] === void 0 && (R[j] = F[j]);
          }
          if ($ || J) {
            var H = typeof c == "function" ? c.displayName || c.name || "Unknown" : c;
            $ && vt(R, H), J && yt(R, H);
          }
          return xt(c, $, J, I, M, le.current, R);
        }
      }
      var Le = O.ReactCurrentOwner, Je = O.ReactDebugCurrentFrame;
      function ie(c) {
        if (c) {
          var m = c._owner, y = me(c.type, c._source, m ? m.type : null);
          Je.setExtraStackFrame(y);
        } else
          Je.setExtraStackFrame(null);
      }
      var ke;
      ke = !1;
      function Ne(c) {
        return typeof c == "object" && c !== null && c.$$typeof === n;
      }
      function Ze() {
        {
          if (Le.current) {
            var c = A(Le.current.type);
            if (c)
              return `

Check the render method of \`` + c + "`.";
          }
          return "";
        }
      }
      function bt(c) {
        {
          if (c !== void 0) {
            var m = c.fileName.replace(/^.*[\\\/]/, ""), y = c.lineNumber;
            return `

Check your code at ` + m + ":" + y + ".";
          }
          return "";
        }
      }
      var Ue = {};
      function Ct(c) {
        {
          var m = Ze();
          if (!m) {
            var y = typeof c == "string" ? c : c.displayName || c.name;
            y && (m = `

Check the top-level render call using <` + y + ">.");
          }
          return m;
        }
      }
      function Xe(c, m) {
        {
          if (!c._store || c._store.validated || c.key != null)
            return;
          c._store.validated = !0;
          var y = Ct(m);
          if (Ue[y])
            return;
          Ue[y] = !0;
          var M = "";
          c && c._owner && c._owner !== Le.current && (M = " It was passed a child from " + A(c._owner.type) + "."), ie(c), T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', y, M), ie(null);
        }
      }
      function qe(c, m) {
        {
          if (typeof c != "object")
            return;
          if (Array.isArray(c))
            for (var y = 0; y < c.length; y++) {
              var M = c[y];
              Ne(M) && Xe(M, m);
            }
          else if (Ne(c))
            c._store && (c._store.validated = !0);
          else if (c) {
            var I = C(c);
            if (typeof I == "function" && I !== c.entries)
              for (var j = I.call(c), R; !(R = j.next()).done; )
                Ne(R.value) && Xe(R.value, m);
          }
        }
      }
      function Mt(c) {
        {
          var m = c.type;
          if (m == null || typeof m == "string")
            return;
          var y;
          if (typeof m == "function")
            y = m.propTypes;
          else if (typeof m == "object" && (m.$$typeof === h || m.$$typeof === f))
            y = m.propTypes;
          else
            return;
          if (y) {
            var M = A(m);
            ft(y, c.props, "prop", M, c);
          } else if (m.PropTypes !== void 0 && !ke) {
            ke = !0;
            var I = A(m);
            T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", I || "Unknown");
          }
          typeof m.getDefaultProps == "function" && !m.getDefaultProps.isReactClassApproved && T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function St(c) {
        {
          for (var m = Object.keys(c.props), y = 0; y < m.length; y++) {
            var M = m[y];
            if (M !== "children" && M !== "key") {
              ie(c), T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", M), ie(null);
              break;
            }
          }
          c.ref !== null && (ie(c), T("Invalid attribute `ref` supplied to `React.Fragment`."), ie(null));
        }
      }
      function Ke(c, m, y, M, I, j) {
        {
          var R = E(c);
          if (!R) {
            var $ = "";
            (c === void 0 || typeof c == "object" && c !== null && Object.keys(c).length === 0) && ($ += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
            var J = bt(I);
            J ? $ += J : $ += Ze();
            var F;
            c === null ? F = "null" : Array.isArray(c) ? F = "array" : c !== void 0 && c.$$typeof === n ? (F = "<" + (A(c.type) || "Unknown") + " />", $ = " Did you accidentally export a JSX literal instead of a component?") : F = typeof c, T("React.jsx: type is invalid -- expected a string (for built-in demo) or a class/function (for composite demo) but got: %s.%s", F, $);
          }
          var H = wt(c, m, y, I, j);
          if (H == null)
            return H;
          if (R) {
            var q = m.children;
            if (q !== void 0)
              if (M)
                if (Array.isArray(q)) {
                  for (var se = 0; se < q.length; se++)
                    qe(q[se], c);
                  Object.freeze && Object.freeze(q);
                } else
                  T("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
              else
                qe(q, c);
          }
          return c === t.Fragment ? St(H) : Mt(H), H;
        }
      }
      function Et(c, m, y) {
        return Ke(c, m, y, !0);
      }
      function Lt(c, m, y) {
        return Ke(c, m, y, !1);
      }
      var kt = Lt, Nt = Et;
      t.jsx = kt, t.jsxs = Nt;
    }();
  }($e)), $e;
}
(function(t) {
  process.env.NODE_ENV === "production" ? t.exports = Bt() : t.exports = Dt();
})(xe);
const de = xe.exports.Fragment, p = xe.exports.jsx, L = xe.exports.jsxs;
const It = "2.0.20", jt = () => window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width, Tt = () => window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height, Ft = (t) => {
  if (!t)
    return 0;
  let e = 0;
  for (const o of t) {
    const n = o.charCodeAt(0);
    n < 0 || n > 255 ? e += 2 : e++;
  }
  return e;
};
let re = !1;
const Ht = () => {
  try {
    document.createEvent("TouchEvent"), re = !0;
  } catch {
  }
};
Ht();
const _ = (...t) => {
  typeof window < "u" && window.relationGraphDebug && console.log("[relation-graph:debug]", ...t);
}, Wt = () => {
  console.log(
    `%c relation-graph/react %c Version v${It} %c More info: https://github.com/seeksdream/relation-graph %c`,
    "background:#35495e ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff",
    "background:#41b883 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff",
    "background:#fff ; padding: 1px; border-radius: 0 3px 3px 0;  color: #41b883",
    "background:transparent"
  ), Rt || console.error(
    "[relation-graph]Please introduce component screenfull, for example:https://cdnjs.cloudflare.com/ajax/libs/screenfull.js/5.1.0/screenfull.min.js"
  ), Pt || console.error(
    "[relation-graph]Please introduce component html2canvas, for example:https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"
  );
};
(function(t) {
  var e, o, n, i, s, l, r = '<svg><symbol id="icon-iconset0444" viewBox="0 0 1024 1024"><path d="M960 682.666667l-106.666667 0C844.8 569.6 763.733333 42.666667 64 42.666667 51.2 42.666667 42.666667 51.2 42.666667 64c0 12.8 8.533333 21.333333 21.333333 21.333333 219.733333 0 377.6 106.666667 465.066667 315.733333 51.2 123.733333 64 236.8 66.133333 281.6L490.666667 682.666667c-12.8 0-21.333333 8.533333-21.333333 21.333333 0 6.4 2.133333 10.666667 6.4 14.933333l234.666667 256c4.266667 4.266667 8.533333 6.4 14.933333 6.4 6.4 0 10.666667-2.133333 14.933333-6.4l234.666667-256c4.266667-4.266667 6.4-8.533333 6.4-14.933333C981.333333 691.2 972.8 682.666667 960 682.666667zM725.333333 928 539.733333 725.333333 618.666667 725.333333c12.8 0 21.333333-8.533333 21.333333-21.333333l0-21.333333c-4.266667-87.466667-38.4-396.8-273.066667-554.666667C755.2 251.733333 804.266667 588.8 810.666667 682.666667l0 21.333333c0 12.8 8.533333 21.333333 21.333333 21.333333l78.933333 0L725.333333 928z"  ></path></symbol><symbol id="icon-iconset0445" viewBox="0 0 1024 1024"><path d="M974.933333 305.066667l-234.666667-256C736 44.8 731.733333 42.666667 725.333333 42.666667c-6.4 0-10.666667 2.133333-14.933333 6.4l-234.666667 256C471.466667 309.333333 469.333333 313.6 469.333333 320c0 12.8 8.533333 21.333333 21.333333 21.333333l104.533333 0c-2.133333 44.8-14.933333 157.866667-66.133333 281.6C441.6 832 283.733333 938.666667 64 938.666667c-12.8 0-21.333333 8.533333-21.333333 21.333333 0 12.8 8.533333 21.333333 21.333333 21.333333 699.733333 0 780.8-526.933333 789.333333-640l106.666667 0c12.8 0 21.333333-8.533333 21.333333-21.333333C981.333333 313.6 979.2 309.333333 974.933333 305.066667zM832 298.666667c-12.8 0-21.333333 8.533333-21.333333 21.333333l0 21.333333c-6.4 93.866667-55.466667 430.933333-443.733333 554.666667 234.666667-157.866667 268.8-467.2 273.066667-554.666667l0-21.333333c0-12.8-8.533333-21.333333-21.333333-21.333333l-78.933333 0L725.333333 96l185.6 202.666667L832 298.666667z"  ></path></symbol><symbol id="icon-yuanquanfenxiang" viewBox="0 0 1024 1024"><path d="M751.148705 578.773799c-61.987796 0-117.066229 30.121018-151.388942 76.488045L398.287145 536.382317c1.991354-10.171664 3.046383-20.673855 3.046383-31.419594 0-18.776645-3.196809-36.817534-9.058306-53.621245l193.486736-107.492176c31.949666 58.566884 94.104261 98.391914 165.386748 98.391914 103.803157 0 188.254571-84.450391 188.254571-188.254571S854.951863 65.73105 751.148705 65.73105c-103.804181 0-188.255595 84.450391-188.255595 188.254571 0 14.246469 1.600451 28.125571 4.613064 41.4746L368.032074 406.279167c-29.841655-39.193651-76.976162-64.544015-129.927141-64.544015-90.004897 0-163.228595 73.223698-163.228595 163.228595 0 90.003873 73.223698 163.228595 163.228595 163.228595 60.882626 0 114.078175-33.510208 142.134161-83.049484L575.173808 700.16452c-7.925507 20.788465-12.280698 43.325761-12.280698 66.86385 0 103.803157 84.450391 188.254571 188.255595 188.254571 103.803157 0 188.254571-84.450391 188.254571-188.254571S854.951863 578.773799 751.148705 578.773799zM751.148705 116.89636c75.590606 0 137.089261 61.498656 137.089261 137.089261s-61.498656 137.089261-137.089261 137.089261c-75.591629 0-137.090285-61.498656-137.090285-137.089261S675.557076 116.89636 751.148705 116.89636zM238.105956 617.026008c-61.791321 0-112.063285-50.27094-112.063285-112.063285 0-61.791321 50.27094-112.063285 112.063285-112.063285s112.063285 50.27094 112.063285 112.063285C350.168218 566.755068 299.897278 617.026008 238.105956 617.026008zM751.148705 904.117632c-75.591629 0-137.090285-61.498656-137.090285-137.089261s61.498656-137.089261 137.090285-137.089261c75.590606 0 137.089261 61.498656 137.089261 137.089261S826.739311 904.117632 751.148705 904.117632z"  ></path></symbol><symbol id="icon-hj2" viewBox="0 0 1024 1024"><path d="M963.66 256.607c0-0.244 0-0.607-0.126-0.851 0-0.369 0-0.614-0.119-0.978 0-0.369-0.119-0.733-0.119-1.104 0-0.244 0-0.487-0.126-0.725 0-0.369-0.119-0.859-0.244-1.222 0-0.244-0.119-0.369-0.119-0.613-0.126-0.365-0.126-0.852-0.245-1.216 0-0.244-0.126-0.369-0.126-0.613-0.119-0.365-0.244-0.734-0.364-1.222-0.126-0.244-0.126-0.49-0.244-0.609l-0.369-1.095c-0.119-0.245-0.119-0.49-0.244-0.734-0.121-0.369-0.245-0.613-0.365-0.978-0.126-0.244-0.244-0.613-0.369-0.851-0.119-0.244-0.238-0.613-0.364-0.859-0.119-0.364-0.244-0.607-0.364-0.977l-0.371-0.734c-0.119-0.364-0.364-0.725-0.487-0.971-0.119-0.245-0.244-0.371-0.364-0.614-0.244-0.364-0.369-0.733-0.614-1.097-0.119-0.126-0.244-0.369-0.364-0.487l-0.733-1.097c-0.119-0.126-0.244-0.369-0.365-0.487-0.244-0.369-0.487-0.733-0.733-0.978-0.126-0.244-0.244-0.369-0.487-0.613-0.245-0.238-0.49-0.607-0.734-0.851-0.244-0.245-0.487-0.49-0.607-0.734-0.244-0.244-0.369-0.487-0.614-0.733-0.851-0.972-1.829-1.83-2.681-2.682-0.245-0.244-0.49-0.369-0.734-0.614-0.244-0.244-0.487-0.487-0.733-0.607-0.245-0.244-0.614-0.487-0.859-0.733-0.238-0.121-0.364-0.365-0.607-0.49-0.365-0.244-0.734-0.487-0.978-0.733-0.119-0.119-0.364-0.244-0.487-0.365l-1.097-0.733c-0.119-0.119-0.364-0.244-0.487-0.364-0.365-0.244-0.734-0.369-1.097-0.614-0.244-0.119-0.369-0.244-0.613-0.364-0.365-0.126-0.734-0.369-0.972-0.487l-0.734-0.369c-0.369-0.121-0.613-0.245-0.977-0.365-0.244-0.126-0.614-0.244-0.859-0.369-0.244-0.119-0.607-0.238-0.851-0.364-0.365-0.119-0.609-0.244-0.978-0.364-0.244-0.126-0.487-0.126-0.733-0.245l-1.097-0.369c-0.244-0.119-0.487-0.119-0.609-0.244-0.369-0.119-0.733-0.244-1.22-0.364-0.245 0-0.371-0.126-0.614-0.126-0.364-0.119-0.851-0.244-1.216-0.244-0.244 0-0.487-0.121-0.613-0.121-0.364-0.126-0.852-0.126-1.222-0.244-0.244 0-0.482-0.126-0.725-0.126-0.369 0-0.734-0.119-1.104-0.119-0.364 0-0.607 0-0.978-0.126-0.244 0-0.607 0-0.851-0.119h-242.407c-21.604 0-39.062 17.456-39.062 39.062 0 21.604 17.458 39.055 39.062 39.055h146.102l-3.171 3.177-217.27 217.265 0.369 0.369-49.676 49.676-155.87-155.87c-7.694-7.689-17.827-11.472-27.953-11.472-10.13-0.126-20.263 3.659-27.952 11.472l-282.446 282.322c-15.258 15.258-15.258 40.041 0 55.298 15.258 15.258 40.033 15.258 55.291 0l255.108-255.11 155.746 155.751c7.813 7.815 17.945 11.593 28.076 11.474 10.126 0.119 20.382-3.659 28.070-11.474l182.964-182.969c0.734-0.734 1.347-1.342 1.956-2.075l111.564-111.564v146.109c0 21.604 17.451 39.060 39.055 39.060s39.062-17.456 39.062-39.060v-235.085c0-0.244 0.126-0.49 0.126-0.614 0-0.244 0.119-0.487 0.119-0.733 0-0.364 0.119-0.734 0.119-1.097s0-0.607 0.126-0.977c0-0.245 0-0.609 0.119-0.852-0.122-1.466-0.122-2.807-0.122-4.030v0zM963.66 256.607z"  ></path></symbol><symbol id="icon-circleyuanquan" viewBox="0 0 1024 1024"><path d="M150.1184 150.1184C250.2656 50.0736 370.8928 0 512 0c141.1072 0 261.7344 50.0736 361.8816 150.1184C973.9264 250.2656 1024 370.8928 1024 512c0 141.2096-50.0736 261.8368-150.1184 361.8816C773.7344 973.9264 653.1072 1024 512 1024c-141.1072 0-261.7344-50.0736-361.8816-150.1184C50.0736 773.8368 0 653.2096 0 512 0 370.8928 50.0736 250.2656 150.1184 150.1184zM512 41.8816c-85.2992 0-164.1472 20.8896-236.3392 62.7712C203.4688 146.432 146.432 203.4688 104.6528 275.6608 62.7712 347.9552 41.8816 426.7008 41.8816 512c0 129.6384 45.9776 240.4352 137.8304 332.288C271.5648 936.2432 382.3616 982.1184 512 982.1184c129.6384 0 240.4352-45.8752 332.288-137.8304C936.2432 752.4352 982.1184 641.6384 982.1184 512c0-129.6384-45.9776-240.3328-137.8304-332.288C752.4352 87.7568 641.6384 41.8816 512 41.8816zM512 256c-36.1472 0-70.144 7.0656-102.1952 20.8896C377.856 290.9184 349.4912 309.3504 324.9152 332.288c-22.9376 24.576-41.472 52.9408-55.3984 84.8896S248.6272 483.328 248.6272 519.3728c0 36.1472 6.9632 70.144 20.8896 102.1952s32.4608 60.3136 55.3984 84.8896C349.4912 729.4976 377.856 747.9296 409.8048 761.856 441.856 775.7824 475.8528 782.7456 512 782.7456c36.1472 0 70.144-6.9632 102.1952-20.8896C646.144 747.9296 674.5088 729.4976 699.0848 706.4576c22.9376-24.576 41.472-52.9408 55.3984-84.8896s20.8896-66.048 20.8896-102.1952c0-36.0448-6.9632-70.144-20.8896-102.1952S722.0224 356.9664 699.0848 332.288C674.5088 309.3504 646.144 290.9184 614.1952 276.8896 582.144 263.0656 548.1472 256 512 256z"  ></path></symbol><symbol id="icon-bhjlink" viewBox="0 0 1024 1024"><path d="M901.920618 465.785468c-50.993571 0-94.522533 32.698367-110.688942 78.273953L702.244627 544.059421c1.764013-10.590222 2.890616-21.423121 2.890616-32.694527 0-72.177856-40.480145-134.923579-99.898281-166.857822l34.099901-112.776268c8.829281 2.126492 18.1347 3.327588 27.724265 3.327588 64.833817 0 117.472367-52.597848 117.472367-117.589097C784.532727 52.594008 731.894177 0 667.06036 0c-64.911381 0-117.509229 52.594008-117.509229 117.470063 0 49.305587 30.248562 91.349307 73.177745 108.842756l-33.419485 110.692013c-22.548956-9.588797-47.462473-14.807112-73.540224-14.807112-49.18732 0-93.841349 18.658451-127.540374 49.309426L213.348053 196.583401l-1.886119 2.008226c19.940183-21.103648 32.256788-49.588197 32.256788-81.003297 0-64.872983-52.517212-117.470063-117.470063-117.470063-64.913685 0-117.511533 52.59708-117.511533 117.470063 0 65.034255 52.59708 117.592169 117.511533 117.592169 31.412796 0 59.898881-12.358075 80.921125-32.335888l-6.179038 6.056931 174.960609 174.879973c-30.729308 33.66293-49.506025 78.47516-49.506025 127.661712 0 43.008283 14.401627 82.685138 38.593258 114.501114l-149.845117 120.999625c-21.503757-28.044506-55.285722-46.218372-93.357532-46.218372-64.874519 0-117.430897 52.719186-117.430897 117.592169 0 64.833049 52.556378 117.470063 117.430897 117.470063 64.872983 0 117.549163-52.637014 117.549163-117.470063 0-20.541499-5.335813-39.878062-14.602834-56.68956l151.369526-122.203792c34.584487 37.633303 84.29095 61.384123 139.618142 61.384123 28.082136 0 54.602234-6.057699 78.553492-17.091805l52.716114 119.514383c-35.585143 20.222026-59.497236 58.335306-59.497236 102.106945 0 64.912149 52.637014 117.549163 117.592169 117.549163 64.872983 0 117.388659-52.637014 117.388659-117.549163 0-64.833049-52.516444-117.513069-117.388659-117.513069-15.047485 0-29.248673 2.929782-42.446133 7.903885l-52.798286-120.034294c42.807844-24.554878 75.182898-65.518073 88.46253-114.221576l88.222926 0c-1.405374 7.018422-1.96522 14.241123-1.96522 21.743362 0 64.872983 52.557914 117.509997 117.387123 117.509997 64.995089 0 117.596009-52.637014 117.596009-117.509997C1019.508947 518.383316 966.994039 465.785468 901.920618 465.785468L901.920618 465.785468zM901.920618 465.785468"  ></path></symbol><symbol id="icon-lianjie_connecting5" viewBox="0 0 1024 1024"><path d="M801.25952 251.74016l-28.9792-28.99968-150.79424 150.8352-35.1232-35.10272-99.14368 99.16416 99.14368 99.16416 99.16416-99.16416-35.10272-35.1232zM487.19872 476.8768l-29.94176 29.94176-19.61984-19.61984-99.16416 99.16416 35.10272 35.1232-150.8352 150.79424 28.95872 28.95872 150.8352-150.79424 35.10272 35.10272 99.14368-99.14368-19.61984-19.64032 29.96224-29.96224-59.92448-59.92448z m-15.48288 44.4416l15.4624-15.4624 30.98624 30.98624-15.4624 15.44192-30.98624-30.96576z" fill="" ></path></symbol><symbol id="icon-xiazai" viewBox="0 0 1024 1024"><path d="M840.5 900.3h-657c-16.5 0-29.9 13.4-29.9 29.9s13.4 29.9 29.9 29.9h657.1c16.5 0 29.9-13.4 29.9-29.9-0.1-16.6-13.5-29.9-30-29.9zM631.5 123.7V541.8H763.1L512 769.9l-251.2-228h131.7V123.7h239m0-59.7h-239c-33 0-59.7 26.7-59.7 59.7v358.4H183.5c-26.6 0-39.9 32.2-21.1 51l328.5 298.2c5.8 5.8 13.5 8.7 21.1 8.7s15.3-2.9 21.1-8.7l328.5-298.2c18.8-18.8 5.5-51-21.1-51H691.2V123.7c0-33-26.7-59.7-59.7-59.7z"  ></path></symbol><symbol id="icon-ico_reset" viewBox="0 0 1024 1024"><path d="M925.97087933 277.33133334a479.997 479.997 0 1 0 54.33566 255.9984H916.05094133a415.9974 415.9974 0 1 1-64.191599-255.9984h74.047537z"  ></path><path d="M978.64255033 61.01268534L725.33213333 371.09074734h297.59814z"  ></path></symbol><symbol id="icon-fangda" viewBox="0 0 1024 1024"><path d="M768 448a320 320 0 1 0-320 320 320 320 0 0 0 320-320z m64 0A384 384 0 1 1 448 64a384 384 0 0 1 384 384z"  ></path><path d="M681.28 726.72a32 32 0 0 1 45.44-45.44l160 160a32 32 0 0 1-45.44 45.44zM320 480a32 32 0 0 1 0-64h256a32 32 0 0 1 0 64z"  ></path><path d="M480 576a32 32 0 0 1-64 0V320a32 32 0 0 1 64 0z"  ></path></symbol><symbol id="icon-zidong" viewBox="0 0 1024 1024"><path d="M131.3 363.3c-19.2 47.3-28.9 97.3-28.9 148.7 0 51.3 9.7 101.3 28.9 148.7 7 17.2 15.1 33.8 24.3 49.7l15.8-49.1 42.8 13.8-39.8 123.8-42.8-13.9-80.9-26 13.8-42.8 52.3 16.8c-98-168.4-74.8-387.9 69.4-532.1C342.4 44.7 586.9 30.5 759.1 158.3l-32.2 32.2c-25.1-18-52.1-32.9-80.9-44.6-47.3-19.2-97.3-28.9-148.7-28.9-51.3 0-101.3 9.7-148.7 28.9-49 19.9-92.9 49.1-130.6 86.8s-66.9 81.7-86.7 130.6z m828.3-60.2l13.8-42.8-80.9-26-42.8-13.8-39.8 123.8 42.8 13.8 15-46.7c9.8 16.6 18.4 34 25.8 52.1 19.2 47.3 28.9 97.3 28.9 148.7 0 51.3-9.7 101.3-28.9 148.7-19.9 49-49.1 92.9-86.8 130.6C768.9 829 725 858.2 676 878.1c-47.3 19.2-97.3 28.9-148.7 28.9-51.3 0-101.3-9.7-148.7-28.9-28.8-11.7-55.9-26.6-80.9-44.6l-32.2 32.2c126.3 93.7 382.6 147.7 572.9-42.6 145.8-145.8 167.9-368.6 66.1-537.7l55.1 17.7zM474 241.2L295 730.4h64.8l50.5-148.2h195.3l54 148.2h70.3L539.6 241.2H474z m-45.9 288.3L479.8 386c11-30.9 19.4-62.1 25.4-93.4 6.9 26 17.9 59.9 32.8 101.5l48.2 135.5H428.1z" fill="" ></path></symbol><symbol id="icon-quanping" viewBox="0 0 1024 1024"><path d="M795.5 192H581c-19.6 0-35.6 15.7-36 35.3-0.4 20.3 16.4 36.7 36.7 36.7h128.4L581 393.1c-14 14-14 36.9 0 50.9s36.9 14 50.9 0L760 315.9v129c0 19.6 15.8 35.6 35.3 36 20.2 0.4 36.7-16.4 36.7-36.7V228.5c0-20.1-16.3-36.5-36.5-36.5zM442.2 760H313.8L443 630.9c14-14 14-36.9 0-50.9s-36.9-14-50.9 0L264 708.1V579c0-19.6-15.8-35.6-35.3-36-20.2-0.4-36.7 16.4-36.7 36.7v215.6c0 20.3 16.4 36.7 36.7 36.7H443c19.6 0 35.6-15.7 36-35.3 0.3-20.3-16.5-36.7-36.8-36.7z"  ></path><path d="M838 136c27.6 0 50 22.4 50 50v652c0 27.6-22.4 50-50 50H186c-27.6 0-50-22.4-50-50V186c0-27.6 22.4-50 50-50h652m0-72H186c-16.4 0-32.4 3.2-47.5 9.6-14.5 6.1-27.6 14.9-38.8 26.1-11.2 11.2-20 24.2-26.1 38.8-6.4 15.1-9.6 31.1-9.6 47.5v652c0 16.4 3.2 32.4 9.6 47.5 6.1 14.5 14.9 27.6 26.1 38.8 11.2 11.2 24.2 20 38.8 26.1 15.1 6.4 31.1 9.6 47.5 9.6h652c16.4 0 32.4-3.2 47.5-9.6 14.5-6.1 27.6-14.9 38.8-26.1 11.2-11.2 20-24.2 26.1-38.8 6.4-15.1 9.6-31.1 9.6-47.5V186c0-16.4-3.2-32.4-9.6-47.5-6.1-14.5-14.9-27.6-26.1-38.8-11.2-11.2-24.2-20-38.8-26.1-15.1-6.4-31.1-9.6-47.5-9.6z"  ></path></symbol><symbol id="icon-lianjieliu" viewBox="0 0 1024 1024"><path d="M280.224 425.856h348.608a29.536 29.536 0 1 0 0-59.072H280.224c-52.448 0-93.152-34.304-93.152-73.856s40.704-73.856 93.152-73.856h140.128C432.096 258.816 468.448 288 512 288s79.904-29.184 91.648-68.928h178.08a29.536 29.536 0 1 0 0-59.072h-179.584C588.896 122.784 553.728 96 512 96s-76.896 26.784-90.112 64H280.224C197.184 160 128 218.272 128 292.928s69.184 132.928 152.224 132.928z"  ></path><path d="M895.936 415.2A96 96 0 1 0 800 512c30.656 0 57.632-14.624 75.2-36.992 10.56 12.064 16.832 26.56 16.832 41.92 0 39.552-40.704 73.856-93.152 73.856H306.016A95.584 95.584 0 0 0 224 544a95.68 95.68 0 0 0-95.232 88.352C89.888 656.224 64 695.424 64 740.928c0 74.656 69.184 132.928 152.224 132.928h241.728A95.808 95.808 0 0 0 544 928a96 96 0 1 0 0-192 95.904 95.904 0 0 0-94.272 78.752H216.224c-52.448 0-93.152-34.304-93.152-73.856 0-17.504 8.32-33.792 21.76-46.72A95.808 95.808 0 0 0 224 736a95.68 95.68 0 0 0 95.008-86.144h479.84c83.072 0 152.224-58.272 152.224-132.928 0.032-41.536-21.824-77.568-55.136-101.728z"  ></path></symbol><symbol id="icon-shuaxin" viewBox="0 0 1024 1024"><path d="M512 919.552c-224.768 0-407.552-182.784-407.552-407.552 0-8.704 0.512-17.408 1.024-26.112l71.68 4.608c-0.512 7.168-0.512 14.336-0.512 21.504 0 185.344 150.528 335.872 335.872 335.872 86.528 0 168.448-32.768 230.912-92.16l49.152 52.224C716.288 880.128 616.96 919.552 512 919.552zM919.552 512h-71.68c0-11.776-0.512-23.552-2.048-35.328-17.92-171.52-161.28-300.544-334.336-300.544-67.584 0-132.096 19.968-187.904 57.344L284.16 174.08c67.072-45.568 145.92-69.632 227.84-69.632 209.408 0 384 156.672 405.504 365.056 1.536 13.824 2.048 28.16 2.048 42.496z" fill="#707070" ></path><path d="M140.288 290.816L28.16 491.52c-3.072 5.12 1.024 11.776 6.656 11.776H258.56c6.144 0 9.728-6.144 6.656-11.776L153.6 290.816c-3.072-5.632-10.752-5.632-13.312 0zM870.4 675.84L758.272 475.136c-3.072-5.12 1.024-11.776 6.656-11.776h223.744c6.144 0 9.728 6.144 6.656 11.776L883.712 675.84c-2.56 5.12-10.24 5.12-13.312 0zM270.336 202.24a35.84 35.84 0 1 0 71.68 0 35.84 35.84 0 1 0-71.68 0zM728.576 784.896a35.84 35.84 0 1 0 71.68 0 35.84 35.84 0 1 0-71.68 0z" fill="#707070" ></path></symbol><symbol id="icon-resize-" viewBox="0 0 1024 1024"><path d="M410.816 673.514667L230.997333 853.333333H384v85.333334H85.333333V640h85.333334v153.002667l179.818666-179.84 60.330667 60.373333z m-53.632-256L170.666667 230.997333V384H85.333333V85.333333h298.666667v85.333334h-153.002667l186.517334 186.517333-60.330667 60.330667z m234.666667-45.696L793.002667 170.666667H640V85.333333h298.666667v298.666667h-85.333334v-153.002667l-201.152 201.173334-60.330666-60.373334z m67.029333 226.709333L853.333333 793.002667V640h85.333334v298.666667H640v-85.333334h153.002667l-194.474667-194.453333 60.352-60.352z"  ></path></symbol><symbol id="icon-guanxitu" viewBox="0 0 1024 1024"><path d="M209.003789 401.084632l29.749895-44.948211 107.843369 71.464421-29.749895 44.894316zM682.469053 546.600421l-14.551579-51.846737 124.496842-35.031579 14.551579 51.846737zM315.068632 812.840421l-40.367158-35.678316 85.692631-96.902737 40.421053 35.732211zM597.962105 390.251789l-46.672842-26.947368 43.11579-74.64421 46.672842 26.947368zM615.639579 728.764632l41.121684-34.816 83.536842 98.735157-41.121684 34.816z" fill="#444A5C" ></path><path d="M501.221053 765.305263c-118.568421 0-215.578947-97.010526-215.578948-215.578947s97.010526-215.578947 215.578948-215.578948 215.578947 97.010526 215.578947 215.578948-97.010526 215.578947-215.578947 215.578947z m0-377.263158c-91.621053 0-161.684211 70.063158-161.684211 161.684211s70.063158 161.684211 161.684211 161.68421 161.684211-70.063158 161.68421-161.68421-75.452632-161.684211-161.68421-161.684211zM167.073684 452.715789c-59.284211 0-107.789474-48.505263-107.789473-107.789473s48.505263-107.789474 107.789473-107.789474 107.789474 48.505263 107.789474 107.789474-48.505263 107.789474-107.789474 107.789473z m0-161.68421c-32.336842 0-53.894737 21.557895-53.894737 53.894737s21.557895 53.894737 53.894737 53.894737 53.894737-21.557895 53.894737-53.894737-26.947368-53.894737-53.894737-53.894737zM253.305263 948.547368c-59.284211 0-107.789474-48.505263-107.789474-107.789473s48.505263-107.789474 107.789474-107.789474 107.789474 48.505263 107.789474 107.789474-48.505263 107.789474-107.789474 107.789473z m0-161.68421c-32.336842 0-53.894737 21.557895-53.894737 53.894737s21.557895 53.894737 53.894737 53.894737 53.894737-21.557895 53.894737-53.894737-21.557895-53.894737-53.894737-53.894737zM856.926316 576.673684c-59.284211 0-107.789474-48.505263-107.789474-107.789473s48.505263-107.789474 107.789474-107.789474 107.789474 48.505263 107.789473 107.789474-48.505263 107.789474-107.789473 107.789473z m0-161.68421c-32.336842 0-53.894737 21.557895-53.894737 53.894737s21.557895 53.894737 53.894737 53.894736 53.894737-21.557895 53.894737-53.894736-21.557895-53.894737-53.894737-53.894737zM662.905263 350.315789C592.842105 350.315789 528.168421 291.031579 528.168421 215.578947s59.284211-134.736842 134.736842-134.736842 134.736842 59.284211 134.736842 134.736842-59.284211 134.736842-134.736842 134.736842z m0-215.578947c-43.115789 0-80.842105 37.726316-80.842105 80.842105s37.726316 80.842105 80.842105 80.842106 80.842105-37.726316 80.842105-80.842106-32.336842-80.842105-80.842105-80.842105zM749.136842 921.6c-43.115789 0-80.842105-37.726316-80.842105-80.842105s37.726316-80.842105 80.842105-80.842106 80.842105 37.726316 80.842105 80.842106-37.726316 80.842105-80.842105 80.842105z m0-107.789474c-16.168421 0-26.947368 10.778947-26.947368 26.947369s10.778947 26.947368 26.947368 26.947368 26.947368-10.778947 26.947369-26.947368-10.778947-26.947368-26.947369-26.947369z" fill="#444A5C" ></path></symbol><symbol id="icon-tupian" viewBox="0 0 1024 1024"><path d="M938.666667 553.92V768c0 64.8-52.533333 117.333333-117.333334 117.333333H202.666667c-64.8 0-117.333333-52.533333-117.333334-117.333333V256c0-64.8 52.533333-117.333333 117.333334-117.333333h618.666666c64.8 0 117.333333 52.533333 117.333334 117.333333v297.92z m-64-74.624V256a53.333333 53.333333 0 0 0-53.333334-53.333333H202.666667a53.333333 53.333333 0 0 0-53.333334 53.333333v344.48A290.090667 290.090667 0 0 1 192 597.333333a286.88 286.88 0 0 1 183.296 65.845334C427.029333 528.384 556.906667 437.333333 704 437.333333c65.706667 0 126.997333 16.778667 170.666667 41.962667z m0 82.24c-5.333333-8.32-21.130667-21.653333-43.648-32.917333C796.768 511.488 753.045333 501.333333 704 501.333333c-121.770667 0-229.130667 76.266667-270.432 188.693334-2.730667 7.445333-7.402667 20.32-13.994667 38.581333-7.68 21.301333-34.453333 28.106667-51.370666 13.056-16.437333-14.634667-28.554667-25.066667-36.138667-31.146667A222.890667 222.890667 0 0 0 192 661.333333c-14.464 0-28.725333 1.365333-42.666667 4.053334V768a53.333333 53.333333 0 0 0 53.333334 53.333333h618.666666a53.333333 53.333333 0 0 0 53.333334-53.333333V561.525333zM320 480a96 96 0 1 1 0-192 96 96 0 0 1 0 192z m0-64a32 32 0 1 0 0-64 32 32 0 0 0 0 64z"  ></path></symbol><symbol id="icon-juhejiedian" viewBox="0 0 1024 1024"><path d="M533.333333 725.333333a64 64 0 1 1-64 64 64 64 0 0 1 64-64m0-85.333333a149.333333 149.333333 0 1 0 149.333334 149.333333 149.333333 149.333333 0 0 0-149.333334-149.333333z" fill="#666666" ></path><path d="M533.333333 277.333333m-106.666666 0a106.666667 106.666667 0 1 0 213.333333 0 106.666667 106.666667 0 1 0-213.333333 0Z" fill="#666666" ></path><path d="M277.333333 320m-106.666666 0a106.666667 106.666667 0 1 0 213.333333 0 106.666667 106.666667 0 1 0-213.333333 0Z" fill="#666666" ></path><path d="M789.333333 320m-106.666666 0a106.666667 106.666667 0 1 0 213.333333 0 106.666667 106.666667 0 1 0-213.333333 0Z" fill="#666666" ></path><path d="M512 341.333333h42.666667v384h-42.666667z" fill="#666666" ></path><path d="M741.290667 357.504l30.165333 30.165333-225.066667 225.066667-30.165333-30.165333z" fill="#666666" ></path><path d="M558.08 582.016l-30.165333 30.165333-228.693334-228.693333 30.165334-30.165333z" fill="#666666" ></path></symbol><symbol id="icon-ziyuan" viewBox="0 0 1024 1024"><path d="M236.615854 752.86913h-0.484162A241.500139 241.500139 0 0 1 0.538332 527.733676a238.78883 238.78883 0 0 1 64.684079-180.011531 242.081134 242.081134 0 0 1 149.025146-74.367324 298.534454 298.534454 0 0 1 596.003751 25.951097V300.95207a221.262156 221.262156 0 0 1 213.031398 233.075715 222.714643 222.714643 0 0 1-221.262156 209.1581h-3.098639a27.500417 27.500417 0 0 1 0-54.904001h2.711309A167.520145 167.520145 0 0 0 968.378705 531.219644a166.261323 166.261323 0 0 0-166.16449-175.363573 151.058627 151.058627 0 0 0-18.204502 1.065157 27.500417 27.500417 0 0 1-30.211725-30.308558 240.822312 240.822312 0 0 0 1.549319-27.306752 243.727285 243.727285 0 0 0-487.357738 0 27.500417 27.500417 0 0 1-27.403584 27.500417 185.627813 185.627813 0 0 0-185.240484 197.538205A186.30564 186.30564 0 0 0 237.100016 697.965129a27.500417 27.500417 0 0 1-0.484162 54.904001z"  ></path><path d="M513.266174 1021.869686a27.500417 27.500417 0 0 1-27.500417-27.403584v-484.162268a27.500417 27.500417 0 1 1 54.904001 0v484.162268a27.403584 27.403584 0 0 1-27.403584 27.403584z"  ></path><path d="M513.266174 1024a27.500417 27.500417 0 0 1-19.366491-8.037094L342.260061 864.129619a27.500417 27.500417 0 1 1 38.732981-38.732981L513.266174 957.766602l130.530147-130.336483a27.500417 27.500417 0 0 1 38.732981 38.732982L532.632664 1015.962906a27.403584 27.403584 0 0 1-19.36649 8.037094z"  ></path></symbol><symbol id="icon-add-select" viewBox="0 0 1024 1024"><path d="M544 213.333333v266.666667H810.666667v64H544V810.666667h-64V544H213.333333v-64h266.666667V213.333333z"  ></path></symbol><symbol id="icon-sami-select" viewBox="0 0 1024 1024"><path d="M810.666667 480v64H213.333333v-64z"  ></path></symbol><symbol id="icon-icon_shuaxin" viewBox="0 0 1024 1024"><path d="M512 938.666667c-55.371852 0-109.226667-10.903704-159.857778-32.237037-48.924444-20.66963-92.823704-50.251852-130.465185-87.988149-37.736296-37.736296-67.318519-81.635556-87.988148-130.465185-21.428148-50.631111-32.237037-104.391111-32.237037-159.857777s10.903704-109.226667 32.237037-159.857778c20.66963-48.924444 50.251852-92.823704 87.988148-130.465185 37.736296-37.736296 81.635556-67.318519 130.465185-87.988149 50.631111-21.428148 104.391111-32.237037 159.857778-32.237037 63.81037 0 125.060741 14.222222 181.854815 42.382223 54.139259 26.832593 102.684444 66.085926 140.325926 113.682963 7.300741 9.197037 5.783704 22.660741-3.508148 29.961481-9.197037 7.300741-22.660741 5.783704-29.961482-3.508148-70.257778-88.936296-175.502222-139.946667-288.711111-139.946667-202.808889 0-367.881481 165.072593-367.881481 367.881482s165.072593 367.881481 367.881481 367.881481 367.881481-165.072593 367.881481-367.881481c0-11.757037 9.576296-21.333333 21.333334-21.333334S922.548148 516.361481 922.548148 528.118519c0 55.371852-10.903704 109.226667-32.237037 159.857777-20.66963 48.924444-50.251852 92.823704-87.988148 130.465185-37.736296 37.736296-81.635556 67.318519-130.465185 87.988149-50.631111 21.428148-104.485926 32.237037-159.857778 32.237037z"  ></path><path d="M817.398519 308.242963c-11.757037 0-21.333333-9.576296-21.333334-21.333333V106.666667c0-11.757037 9.576296-21.333333 21.333334-21.333334s21.333333 9.576296 21.333333 21.333334v180.242963c0 11.757037-9.481481 21.333333-21.333333 21.333333z"  ></path><path d="M817.398519 308.242963H637.155556c-11.757037 0-21.333333-9.576296-21.333334-21.333333s9.576296-21.333333 21.333334-21.333334h180.242963c11.757037 0 21.333333 9.576296 21.333333 21.333334s-9.481481 21.333333-21.333333 21.333333z"  ></path></symbol><symbol id="icon-lianjiezhong" viewBox="0 0 1024 1024"><path d="M883.396923 298.141538a99.721846 99.721846 0 0 1-142.414769 0 103.187692 103.187692 0 0 1 0-144.423384 99.721846 99.721846 0 0 1 142.414769 0 103.187692 103.187692 0 0 1 0 144.423384zM285.144615 760.438154a87.276308 87.276308 0 0 0-124.652307 0 90.269538 90.269538 0 0 0 0 126.385231c34.422154 34.894769 90.230154 34.894769 124.652307 0a90.269538 90.269538 0 0 0 0-126.424616z m482.579693 108.307692a64.472615 64.472615 0 0 1 0-90.269538 62.345846 62.345846 0 0 1 89.00923 0c24.576 24.930462 24.576 65.378462 0 90.269538a62.345846 62.345846 0 0 1-89.00923 0zM294.006154 298.141538a103.187692 103.187692 0 0 0 0-144.423384 99.721846 99.721846 0 0 0-142.454154 0 103.187692 103.187692 0 0 0 0 144.423384 99.721846 99.721846 0 0 0 142.454154 0z m324.214154-196.01723c0 56.438154-45.095385 102.163692-100.745846 102.163692-55.611077 0-100.706462-45.725538-100.706462-102.163692C416.768 45.725538 461.863385 0 517.474462 0c55.650462 0 100.745846 45.725538 100.745846 102.124308zM517.474462 870.793846c-41.747692 0-75.539692 34.264615-75.539693 76.603077 0 42.299077 33.831385 76.603077 75.539693 76.603077 41.747692 0 75.539692-34.264615 75.539692-76.603077 0-42.299077-33.792-76.603077-75.539692-76.603077z m416.768-294.990769c-27.805538 0-50.333538-22.843077-50.333539-51.042462 0-28.199385 22.528-51.042462 50.333539-51.042461 27.844923 0 50.412308 22.843077 50.372923 51.042461 0 28.199385-22.567385 51.081846-50.372923 51.081847zM201.452308 524.8c0-56.398769-45.095385-102.124308-100.745846-102.124308C45.095385 422.596923 0 468.283077 0 524.760615c0 56.398769 45.095385 102.124308 100.706462 102.124308 55.650462 0 100.745846-45.686154 100.745846-102.124308z"  ></path></symbol><symbol id="icon-loading" viewBox="0 0 1024 1024"><path d="M563.2 819.2a102.4 102.4 0 1 1 0 204.8 102.4 102.4 0 0 1 0-204.8z m-320.4608-153.6a128 128 0 1 1 0 256 128 128 0 0 1 0-256z m592.7936 25.6a102.4 102.4 0 1 1 0 204.8 102.4 102.4 0 0 1 0-204.8zM947.2 477.1328a76.8 76.8 0 1 1 0 153.6 76.8 76.8 0 0 1 0-153.6zM128 307.2a128 128 0 1 1 0 256 128 128 0 0 1 0-256z m782.6432-40.6016a51.2 51.2 0 1 1 0 102.4 51.2 51.2 0 0 1 0-102.4zM409.6 0a153.6 153.6 0 1 1 0 307.2 153.6 153.6 0 0 1 0-307.2z m384 153.6a25.6 25.6 0 1 1 0 51.2 25.6 25.6 0 0 1 0-51.2z" fill="#555555" ></path></symbol><symbol id="icon-tupushujuyuan" viewBox="0 0 1024 1024"><path d="M851.456 588.288c-13.312 0-25.6 2.048-37.888 5.12l-90.112-155.648 55.296-31.744c18.944 17.92 44.032 29.184 72.192 29.184 57.344 0 103.936-46.592 103.936-103.936s-46.592-103.936-103.936-103.936c-57.344 0-103.936 46.592-103.936 103.936 0 5.12 0.512 10.24 1.536 15.36l-58.368 33.792-82.944-143.872c26.112-25.088 41.984-59.904 41.984-98.816 0-75.776-61.44-137.216-137.216-137.216s-137.216 61.44-137.216 137.216c0 38.912 15.872 73.728 41.984 98.816l-84.992 146.944-56.832-32.768c1.024-6.144 2.048-12.8 2.048-19.456 0-57.344-46.592-103.936-103.936-103.936-57.344 0-103.936 46.592-103.936 103.936s46.592 103.936 103.936 103.936c26.624 0 51.2-10.24 69.12-26.624l56.32 32.768-88.064 152.576c-11.776-3.584-24.576-5.12-37.888-5.12-75.776 0-137.216 61.44-137.216 137.216s61.44 137.216 137.216 137.216c64.512 0 118.272-44.544 133.12-103.936h173.056v61.44c-40.96 13.824-70.656 52.736-70.656 98.816 0 57.344 46.592 103.936 103.936 103.936s103.936-46.592 103.936-103.936c0-46.08-29.696-84.48-70.656-98.816v-61.44h173.056c14.848 59.904 69.12 103.936 133.12 103.936 75.776 0 137.216-61.44 137.216-137.216s-61.44-137.728-137.216-137.728z m-410.112-450.048c0-38.912 31.744-70.656 70.656-70.656s70.656 31.744 70.656 70.656c0 13.824-4.096 26.624-10.752 37.376-12.288 19.456-33.28 32.256-57.856 33.28h-5.12c-24.576-1.024-45.568-13.824-57.856-33.28-6.144-10.752-9.728-24.064-9.728-37.376z m32.768 132.096c11.776 3.584 24.576 5.12 37.888 5.12s25.6-2.048 37.888-5.12l82.944 143.872-124.416 72.192-118.784-68.608 84.48-147.456z m-301.568 526.336c-38.912 0-70.656-31.744-70.656-70.656 0-38.912 31.744-70.656 70.656-70.656h2.56c24.576 1.024 45.568 13.824 57.856 33.28 1.024 1.536 1.536 2.56 2.56 4.096 5.12 9.728 8.192 20.992 8.192 33.28 0 11.776-3.072 23.552-8.192 33.28-12.288 22.016-35.84 37.376-62.976 37.376z m133.12-103.936c-6.144-25.6-19.456-48.128-37.888-65.536l88.064-152.576 122.88 70.656v146.944h-173.056z m239.616-151.552l120.832-69.632 90.112 155.648c-18.432 17.408-31.744 39.936-37.888 65.536h-173.056v-151.552z m306.176 255.488c-27.136 0-50.688-15.36-62.464-37.376-5.12-9.728-8.192-21.504-8.192-33.28 0-12.288 3.072-23.552 8.192-33.28 0.512-1.536 1.536-3.072 2.56-4.096 12.288-19.456 33.28-32.768 57.856-33.28h2.56c38.912 0 70.656 31.744 70.656 70.656-0.512 38.912-32.256 70.656-71.168 70.656z"  ></path></symbol><symbol id="icon-jiedian" viewBox="0 0 1024 1024"><path d="M882.1914 744.849921c-60.501005 0-112.097749 38.645092-131.425292 92.560342H244.912146c-80.468136 0-145.955927-62.61964-145.955926-139.570043 0-77.000371 65.487791-139.570043 145.955926-139.570043h136.312143c19.497433 53.585462 70.934281 91.950735 131.205434 91.950735 60.241173 0 111.688014-38.375266 131.205434-91.950735h136.452052C914.210763 558.280171 1023.340425 453.92743 1023.340425 325.660102S914.210763 93.040033 780.077216 93.040033H273.093982c-19.197627-54.165089-70.944274-93.040033-131.595182-93.040033C64.508422 0 1.928757 62.569672 1.928757 139.560049c0 76.950403 62.579665 139.570043 139.570043 139.570043 60.640915 0 112.377569-38.894931 131.585189-93.040033h506.993227c80.468136 0 145.955927 62.61964 145.955927 139.570043 0 77.000371-65.487791 139.570043-145.955927 139.570043H644.414655c-18.887826-54.734722-70.924287-94.139324-131.974938-94.139325-61.090625 0-113.097105 39.394609-131.974938 94.139325H244.912146c-134.133547 0-243.263209 104.352741-243.263209 232.620069 0 128.267328 109.129663 232.620069 243.263209 232.620069h505.524174c19.057717 54.394941 70.9043 93.529717 131.75508 93.529717 76.950403 0 139.570043-62.61964 139.570043-139.570043 0.009994-77.000371-62.61964-139.580036-139.570043-139.580036zM141.428845 207.036558c-37.166045 0-67.376574-30.230515-67.376574-67.376573 0-37.166045 30.210528-67.376574 67.376574-67.376574 37.146058 0 67.376574 30.210528 67.376573 67.376574 0 37.146058-30.230515 67.376574-67.376573 67.376573z m371.000878 236.257725c37.146058 0 67.376574 30.210528 67.376574 67.376574 0 37.146058-30.230515 67.376574-67.376574 67.376573-37.166045 0-67.376574-30.230515-67.376574-67.376573 0.009994-37.176039 30.210528-67.376574 67.376574-67.376574z m369.761677 508.502254c-37.166045 0-67.376574-30.230515-67.376574-67.376573 0-37.166045 30.210528-67.376574 67.376574-67.376574 37.146058 0 67.376574 30.210528 67.376574 67.376574 0 37.146058-30.230515 67.376574-67.376574 67.376573z"  ></path></symbol><symbol id="icon-shitujiedianxianshi" viewBox="0 0 1367 1024"><path d="M1235.403267 512.03593a130.596433 130.596433 0 0 0-42.68749 7.796802l-193.295715-290.430872A149.113837 149.113837 0 1 0 724.647767 149.48464a151.777744 151.777744 0 0 0 37.229729 97.849864l-194.920048 357.873209a220.519548 220.519548 0 0 0-55.162374-8.511508 207.914718 207.914718 0 0 0-114.807909 34.046035L240.401393 443.683967a126.763005 126.763005 0 0 0-75.564005-182.380192 127.737605 127.737605 0 1 0 12.99467 239.816633l157.625345 188.422713A213.307506 213.307506 0 1 0 643.23616 643.282096l190.956674-350.856087a164.187654 164.187654 0 0 0 39.56877 6.172468 143.591102 143.591102 0 0 0 60.555162-12.99467l192.516034 288.026859a121.760057 121.760057 0 0 0-18.582377 64.973349 128.127445 128.127445 0 1 0 127.152844-126.568085zM129.621832 448.362048a68.157044 68.157044 0 1 1 68.157044-68.092071A68.157044 68.157044 0 0 1 129.621832 448.362048z m528.948039 365.670011a145.86517 145.86517 0 1 1-145.86517-145.86517 145.86517 145.86517 0 0 1 145.86517 145.86517z m215.12676-577.937944a87.389155 87.389155 0 1 1 87.389155-87.389155 87.389155 87.389155 0 0 1-87.389155 87.389155z m365.085251 474.305451a68.157044 68.157044 0 1 1 68.222017-68.416937 68.157044 68.157044 0 0 1-68.222017 68.157044z"  ></path></symbol><symbol id="icon-shituxianshiquanbujiedian" viewBox="0 0 1367 1024"><path d="M1235.403267 512.03593a130.596433 130.596433 0 0 0-42.68749 7.796802l-193.295715-290.430872A149.113837 149.113837 0 1 0 724.647767 149.48464a151.777744 151.777744 0 0 0 37.229729 97.849864l-194.920048 357.873209a220.519548 220.519548 0 0 0-55.162374-8.511508 207.914718 207.914718 0 0 0-114.807909 34.046035L240.401393 443.683967a126.763005 126.763005 0 0 0-75.564005-182.380192 127.737605 127.737605 0 1 0 12.99467 239.816633l157.625345 188.422713A213.307506 213.307506 0 1 0 643.23616 643.282096l190.956674-350.856087a164.187654 164.187654 0 0 0 39.56877 6.172468 143.591102 143.591102 0 0 0 60.555162-12.99467l192.516034 288.026859a121.760057 121.760057 0 0 0-18.582377 64.973349 128.127445 128.127445 0 1 0 127.152844-126.568085zM129.621832 448.362048a68.157044 68.157044 0 1 1 68.157044-68.092071A68.157044 68.157044 0 0 1 129.621832 448.362048z m528.948039 365.670011a145.86517 145.86517 0 1 1-145.86517-145.86517 145.86517 145.86517 0 0 1 145.86517 145.86517z m215.12676-577.937944a87.389155 87.389155 0 1 1 87.389155-87.389155 87.389155 87.389155 0 0 1-87.389155 87.389155z m365.085251 474.305451a68.157044 68.157044 0 1 1 68.222017-68.416937 68.157044 68.157044 0 0 1-68.222017 68.157044z"  ></path></symbol><symbol id="icon-suoxiao" viewBox="0 0 1024 1024"><path d="M768 448a320 320 0 1 0-320 320 320 320 0 0 0 320-320z m64 0A384 384 0 1 1 448 64a384 384 0 0 1 384 384z"  ></path><path d="M681.28 726.72a32 32 0 0 1 45.44-45.44l160 160a32 32 0 0 1-45.44 45.44zM288 480a32 32 0 0 1 0-64h320a32 32 0 0 1 0 64z"  ></path></symbol><symbol id="icon-lianjie" viewBox="0 0 1024 1024"><path d="M922.243 97.755c11.49 11.489 11.673 30.002 0.547 41.713l-0.547 0.562-109.119 109.1c57.22 78.348 42.673 195.388-35.778 273.839l-92.83 92.585c-11.572 11.54-30.264 11.653-41.97 0.253l-45.746-44.55-18.089 18.086a29.891 29.891 0 0 1-7.171 5.3l48.764 47.489c11.947 11.638 12.06 30.804 0.248 42.585l-95.875 95.629c-77.416 77.417-192.412 92.603-270.72 38.004L144.04 928.245c-11.676 11.673-30.606 11.673-42.282 0-11.49-11.489-11.673-30.002-0.547-41.713l0.547-0.562 109.677-109.657c-55.981-78.335-41.131-194.413 36.833-272.377l92.831-92.585c11.571-11.54 30.263-11.653 41.969-0.254l42.587 41.474a29.935 29.935 0 0 1 3.678-4.741l0.548-0.562 19.54-19.538-44.11-42.957c-11.828-11.522-12.057-30.422-0.6-42.23l0.351-0.355 95.875-95.63c76.927-76.926 190.96-92.408 269.23-39.03L879.961 97.755c11.676-11.673 30.606-11.673 42.282 0zM362.451 474.49l-71.916 71.727-1.884 1.911c-61.822 63.545-67.916 156.289-16.185 208.02C324.72 808.4 418.82 801.655 482.43 738.044l74.422-74.234-194.401-189.32z m129.807-5.04l-20.096 20.094a30.035 30.035 0 0 1-4.643 3.8l63.25 61.595a29.82 29.82 0 0 1 5.113-7.308l0.547-0.561 17.532-17.531-61.703-60.089z m260.889-198.691c-52.254-52.254-146.353-45.509-209.964 18.102l-74.422 74.234 194.4 189.322 71.939-71.75 1.862-1.888c61.822-63.545 67.916-156.29 16.185-208.02z" fill="#333333" ></path></symbol><symbol id="icon-xiantiao" viewBox="0 0 1024 1024"><path d="M827.076923 157.538462a39.384615 39.384615 0 1 1-14.375385 76.051692L233.590154 812.701538a39.384615 39.384615 0 1 1-22.291692-22.291692L790.409846 211.298462A39.384615 39.384615 0 0 1 827.076923 157.538462z" fill="#333333" ></path></symbol></svg>', a = (a = document.getElementsByTagName("script"))[a.length - 1].getAttribute("data-injectcss");
  if (a && !t.__iconfont__svg__cssinject__) {
    t.__iconfont__svg__cssinject__ = !0;
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (u) {
      console && console.log(u);
    }
  }
  function h() {
    s || (s = !0, n());
  }
  e = function() {
    var u, d, f, g;
    (g = document.createElement("div")).innerHTML = r, r = null, (f = g.getElementsByTagName("svg")[0]) && (f.setAttribute("aria-hidden", "true"), f.style.position = "absolute", f.style.width = 0, f.style.height = 0, f.style.overflow = "hidden", u = f, (d = document.body).firstChild ? (g = u, (f = d.firstChild).parentNode.insertBefore(g, f)) : d.appendChild(u));
  }, document.addEventListener ? ~["complete", "loaded", "interactive"].indexOf(document.readyState) ? setTimeout(e, 0) : (o = function() {
    document.removeEventListener("DOMContentLoaded", o, !1), e();
  }, document.addEventListener("DOMContentLoaded", o, !1)) : document.attachEvent && (n = e, i = t.document, s = !1, (l = function() {
    try {
      i.documentElement.doScroll("left");
    } catch {
      return void setTimeout(l, 50);
    }
    h();
  })(), i.onreadystatechange = function() {
    i.readyState == "complete" && (i.onreadystatechange = null, h());
  });
})(window);
let Q = { x: 0, y: 0 };
const ee = { x: 0, y: 0 }, te = { x: 0, y: 0 };
let Ae, Re;
const nt = (t) => {
  const e = {
    clientX: 0,
    clientY: 0
  };
  if (re) {
    const o = t, n = o.touches || o.targetTouches;
    if (!n)
      throw new Error("error targetTouches");
    e.clientX = n[0].clientX, e.clientY = n[0].clientY;
  } else {
    const o = t;
    e.clientX = o.clientX, e.clientY = o.clientY;
  }
  return e;
}, U = {
  startDrag(t, e, o, n, i = !1) {
    n ? Ae = (s, l, r) => {
      const a = s - te.x, h = l - te.y;
      i && (Q.x = ee.x + (s - te.x), Q.y = ee.y + (l - te.y)), n(
        a,
        h,
        ee,
        te,
        r
      );
    } : Ae = (s, l) => {
      Q.x = ee.x + (s - te.x), Q.y = ee.y + (l - te.y);
    }, Re = o, Q = e, ee.x = Q.x, ee.y = Q.y, _("[canvas]onDragStart...", re, t);
    try {
      const s = nt(t);
      te.x = s.clientX, te.y = s.clientY, re ? (t.preventDefault(), document.body.addEventListener("touchmove", U.onNodeMove), document.body.addEventListener("touchend", U.onNodeDragend)) : (document.body.addEventListener("mousemove", U.onNodeMove), document.body.addEventListener("mouseup", U.onNodeDragend));
    } catch (s) {
      console.error(s.message);
    }
  },
  onNodeMove(t) {
    const e = nt(t);
    Ae(e.clientX, e.clientY, t);
  },
  onNodeDragend(t) {
    re ? (document.body.removeEventListener("touchmove", U.onNodeMove), document.body.removeEventListener("touchend", U.onNodeDragend)) : (document.body.removeEventListener("mousemove", U.onNodeMove), document.body.removeEventListener("mouseup", U.onNodeDragend)), _("Node dragend"), Re && Re(
      Q.x - ee.x,
      Q.y - ee.y,
      t
    );
  },
  getColorId(t) {
    return t = t.replace("#", ""), t = t.replace("(", ""), t = t.replace(")", ""), t = t.replace(/,/, "-"), t;
  }
}, X = st(null), oe = st(null), Vt = ({ nodeProps: t, NodeSlot: e }) => {
  const o = he(), n = G(X), i = G(oe);
  ye(() => (s(), () => {
  }), []);
  const s = () => {
    (t.el.offsetWidth !== o.current.offsetWidth || t.el.offsetHeight !== o.current.offsetHeight) && (n.updateNodeOffsetSize(
      t,
      o.current.offsetWidth,
      o.current.offsetHeight
    ), i());
  }, l = (v) => {
    n.expandOrCollapseNode(t, v);
  }, r = (v) => {
    n.options.disableDragNode || t.disableDrag || U.startDrag(
      v,
      t,
      a,
      (w, z, P) => {
        const b = w / (n.options.canvasZoom / 100) + P.x, S = z / (n.options.canvasZoom / 100) + P.y;
        n.setNodePosition(t, b, S), i();
      }
    );
  }, a = (v, w, z) => {
    if (v === 0 && w === 0) {
      n.onNodeClick(t, z);
      return;
    }
    n.options.isMoveByParentNode && t.lot.childs.forEach((P) => {
      P.x += v, P.y += w;
    }), i();
  }, h = (v) => {
    n.onNodeClick(t, v), i();
  }, u = (v) => v.isShow !== !1 && v.isHide !== !0 && (!v.lot.parent || u(v.lot.parent) === !0), d = t.expanded === !1 ? "c-expanded" : "c-collapsed", f = u(t), g = t.expandHolderPosition && t.expandHolderPosition !== "hide" || n.options.defaultExpandHolderPosition && n.options.defaultExpandHolderPosition !== "hide" && t.lot.childs && t.lot.childs.length > 0, x = !(n.options.hideNodeContentByZoom === !0 && n.options.canvasZoom < 40);
  return /* @__PURE__ */ L(
    "div",
    {
      ref: o,
      style: {
        display: f ? "" : "hidden",
        left: `${t.x}px`,
        top: `${t.y}px`,
        opacity: t.opacity ? t.opacity > 1 ? t.opacity / 100 : t.opacity : 1
      },
      className: "rel-node-peel",
      children: [
        g && /* @__PURE__ */ p(
          "div",
          {
            className: `c-btn-open-close c-expand-positon-${t.expandHolderPosition || n.options.defaultExpandHolderPosition}`,
            children: /* @__PURE__ */ p(
              "span",
              {
                className: d,
                style: {
                  backgroundColor: t.color || n.options.defaultNodeColor
                },
                onClickCapture: (v) => {
                  l(v);
                }
              }
            )
          }
        ),
        t.html ? /* @__PURE__ */ p(
          "div",
          {
            onClick: (v) => {
              h(v);
            },
            onMouseDownCapture: (v) => {
              r(v);
            },
            onTouchStartCapture: (v) => {
              r(v);
            },
            dangerouslySetInnerHTML: { __html: t.html }
          }
        ) : /* @__PURE__ */ p(
          "div",
          {
            className: [
              "rel-node",
              `rel-node-shape-${t.nodeShape === void 0 ? n.options.defaultNodeShape : t.nodeShape}`,
              `rel-node-type-${t.type}`,
              t.id === n.options.checkedNodeId ? "rel-node-checked" : "",
              t.selected ? "rel-node-selected" : "",
              t.styleClass,
              t.innerHTML ? "rel-diy-node" : ""
            ].join(" "),
            style: {
              backgroundColor: t.color === void 0 ? n.options.defaultNodeColor : t.color,
              color: t.fontColor === void 0 ? n.options.defaultNodeFontColor : t.fontColor,
              border: `${t.borderColor || n.options.defaultNodeBorderColor} solid ${t.borderWidth || n.options.defaultNodeBorderWidth}px`,
              width: `${t.width || n.options.defaultNodeWidth}px`,
              height: `${t.height || n.options.defaultNodeHeight}px`
            },
            onClick: (v) => {
              h(v);
            },
            onMouseDownCapture: (v) => {
              r(v);
            },
            onTouchStartCapture: (v) => {
              r(v);
            },
            children: x && /* @__PURE__ */ p(de, { children: e ? /* @__PURE__ */ p(e, { node: t, relationGraph: n }) : /* @__PURE__ */ p(de, { children: t.innerHTML ? /* @__PURE__ */ p("div", { dangerouslySetInnerHTML: { __html: t.innerHTML } }) : /* @__PURE__ */ p(
              "div",
              {
                style: { color: t.fontColor || n.options.defaultNodeFontColor },
                className: "c-node-text",
                children: /* @__PURE__ */ p("span", { dangerouslySetInnerHTML: { __html: t.text } })
              }
            ) }) })
          }
        )
      ]
    }
  );
}, it = 0, B = {
  getRectPoint(t, e, o, n, i, s, l, r) {
    const a = t + i / 2, h = e + s / 2, u = o + l / 2, d = n + r / 2, f = a < u ? 1 : -1, g = h < d ? 1 : -1;
    if (d === h)
      return { x: a + f * i / 2, y: h };
    const x = Math.abs((u - a) / (d - h)), v = i / s;
    let w = 0, z = 0;
    return x < v ? (w = f * s / 2 * x, z = g * s / 2) : (w = f * i / 2, z = g * i / 2 / x), { x: a + w, y: h + z };
  },
  getRectPointBasic(t, e, o, n, i, s, l, r) {
    const a = t + i / 2, h = e + s / 2, u = o + l / 2, d = n + r / 2;
    let f = d === h ? 0 : (u - a) / (d - h);
    f === 0 && (f = (u - a) / (d - h + 1));
    const g = i / r;
    let x = 0, v = 0, w = "1";
    return -1 * g < f && f < g ? (w = "2", h < d ? (x = s / 2 * f, v = s / 2) : (x = -1 * s / 2 * f, v = -1 * s / 2)) : (a < u ? (x = 1 * i / 2, v = 1 * i / 2 / f) : (x = -1 * i / 2, v = -1 * i / 2 / f), w = "3"), { x: a + x, y: h + v, _case: w };
  },
  getRectJoinPoint(t, e, o, n, i, s, l, r) {
    const a = t + i / 2, h = e + s / 2, u = o + l / 2, d = n + r / 2, f = Math.round(
      Math.atan2(d - h, u - a) * 180 / 3.14
    ) + 135;
    return f >= 0 && f < 90 ? { x: t + i / 2, y: e - 5 } : f >= 90 && f < 180 ? { x: t + i + 5, y: e + s / 2 } : f >= 180 && f < 270 ? { x: t + i / 2, y: e + s + 5 } : { x: t - 5, y: e + s / 2 };
  },
  getRectHJoinPoint(t, e, o, n, i, s, l) {
    const r = s / 2;
    return t + i < o ? { x: t + i + 5, y: e + r } : t + i < o + l ? { x: t - 5, y: e + r } : { x: t - 5, y: e + r };
  },
  getRectVJoinPoint(t, e, o, n, i, s, l, r) {
    const a = i / 2;
    return e + s < n ? { y: e + s + 5, x: t + a } : e + s < n + r ? { y: e - 5, x: t + a } : { y: e - 5, x: t + a };
  },
  getBorderPoint(t, e, o, n, i, s, l, r, a) {
    return a === 0 ? this.getCirclePoint(t, e, o, n, i, s, l, r) : this.getRectPoint(t, e, o, n, i, s, l, r);
  },
  getBorderPoint4MultiLine(t, e, o, n, i, s, l, r, a, h, u, d) {
    return a === 0 ? this.getCirclePoint4MultiLine(
      t,
      e,
      o,
      n,
      i,
      s,
      l,
      r,
      h,
      u,
      d
    ) : this.getRectPoint(t, e, o, n, i, s, l, r);
  },
  getCirclePoint(t, e, o, n, i, s, l, r) {
    const a = o + l / 2, h = n + r / 2, u = t + i / 2, d = e + s / 2, f = a - u;
    if (f === 0)
      return { x: u, y: d - s / 2 * (h < d ? 1 : -1) };
    const x = (h - d) / f, v = Math.sqrt(1 / (1 / (i / 2) ** 2 + x ** 2 / (s / 2) ** 2)) * (a < u ? 1 : -1), w = x * v;
    return { x: u - v, y: d - w };
  },
  getCirclePoint4MultiLine(t, e, o, n, i, s, l, r, a, h, u) {
    a && (u = h - u - 1);
    const d = o + l / 2, f = n + r / 2, g = t + i / 2, x = e + s / 2, v = d - g;
    if (v === 0)
      return { x: g, y: x - s / 2 * (f < x ? 1 : -1) };
    const w = 40 / (h + 1) * (u + 1) - 20, z = f - x, P = Math.sqrt(v ** 2 + z ** 2) * w / v, b = z / v, S = i / 2, W = s / 2, C = d < g ? 1 : -1, O = (-1 * S ** 2 * b * P + S * W * Math.sqrt(W ** 2 + b ** 2 * S ** 2 - P ** 2) / C) / (W ** 2 + S ** 2 * b ** 2), T = b * O + P;
    return { x: g - O, y: x - T };
  },
  getCirclePointBasic(t, e, o, n, i, s, l, r, a) {
    const h = t + i / 2, u = e + s / 2, d = o + l / 2, f = n + r / 2, g = d - h, x = f - u, v = Math.sqrt(g * g + x * x), w = v - a, z = w * g / v * -1, P = w * x / v * -1;
    return { x: d + z, y: f + P };
  },
  getCirclePointPlus(t, e, o, n, i, s, l, r) {
    const a = t + i / 2, h = e + s / 2, u = o + l / 2, d = n + r / 2, f = u - a, g = d - h, x = Math.sqrt(f * f + g * g), v = (x - i / 2) * f / x * -1, w = (x - s / 2) * g / x * -1;
    return { x: u + v, y: d + w };
  },
  getOvalPoint(t, e, o, n, i) {
    return {
      x: t + o * Math.sin(
        (it + n * (360 / i) + 0) * Math.PI / 180
      ),
      y: e + o * Math.cos(
        (it + n * (360 / i) + 0) * Math.PI / 180
      ) * -1
    };
  },
  getAngleType(t, e) {
    if (t >= 0 && e >= 0)
      return 1;
    if (t < 0 && e >= 0)
      return 2;
    if (t < 0 && e < 0)
      return 3;
    if (t >= 0 && e < 0)
      return 4;
  },
  getTextAngle(t, e, o, n) {
    let i = Math.atan(Math.abs((n - e) / (o - t))) * 180 / Math.PI;
    return o > t && n > e || (o > t && n < e ? i = -i : o < t && n > e ? i = 180 - i : i = i - 180), Math.abs(i) > 90 && (i = i + 180), Math.round(i);
  },
  getTreePointFromTop(t, e, o, n, i, s) {
    return t ? {
      x: t - 300 + Math.max(600 / ((i === 1 ? 2 : i) - 1), 80) * n,
      y: e + o
    } : {
      x: (s.canvas_width - s.node_width) / 2,
      y: (s.canvas_height - s.node_height) / 2 - 200
    };
  },
  getTreePointFromRight(t, e, o, n, i, s) {
    return t ? {
      x: t - o,
      y: e - 200 + Math.max(400 / ((i === 1 ? 2 : i) - 1), 80) * n
    } : {
      x: (s.canvas_width - s.node_width) / 2 + 300,
      y: (s.canvas_height - s.node_height) / 2
    };
  },
  getTreePointFromBottom(t, e, o, n, i, s) {
    return t ? {
      x: t - 300 + Math.max(600 / ((i === 1 ? 2 : i) - 1), 80) * n,
      y: e - o
    } : {
      x: (s.canvas_width - s.node_width) / 2,
      y: (s.canvas_height - s.node_height) / 2 + 200
    };
  },
  getTreePointFromLeft(t, e, o, n, i, s) {
    return t ? {
      x: t + o,
      y: e - 200 + Math.max(400 / ((i === 1 ? 2 : i) - 1), 80) * n
    } : {
      x: (s.canvas_width - s.node_width) / 2 - 300,
      y: (s.canvas_height - s.node_height) / 2
    };
  },
  analysisNodes(t, e, o, n) {
    e.length > n.max_length && (n.max_length = e.length), o > n.max_deep && (n.max_deep = o);
    const i = {
      level: o,
      all_size: e.length,
      all_strength: 0
    }, s = [];
    e.forEach((r) => {
      r.lot || (r.lot = { childs: [] }), r.lot.eached = !0, r.lot.subling = i, r.lot.level = o, t.push(r);
    });
    let l = 0;
    e.forEach((r) => {
      let a = 0;
      if (r.targetNodes) {
        let h = 0;
        r.targetNodes.forEach((u) => {
          u.lot || (u.lot = { childs: [], eached: !1 }), u.lot.eached || (B.isAllowShowNode(u) ? (u.lot.eached = !0, u.lot.parent = r, u.lot.index_of_parent = h++, r.lot.childs.push(u), s.push(u), a++) : r.lot.childs.push(u));
        });
      }
      r.lot.strength = a > 0 ? a : 1, i.all_strength += r.lot.strength, r.lot.strength_plus = i.all_strength, r.lot.index_of_level = l, r.lot.childs_size = a, l++;
    }), i.all_strength > n.max_strength && (n.max_strength = i.all_strength), s.length > 0 ? this.analysisNodes(
      t,
      s,
      o + 1,
      n
    ) : (t.forEach((r) => {
      r.lot.childs_size && r.lot.childs_size > 0 && (r.lot.strengthWithChilds = 0);
    }), t.forEach((r) => {
      r.lot.childs_size === 0 && (r.lot.strengthWithChilds = 1, this.conductStrengthToParents(r));
    }), this.analysisDataTree([t[0]], 0));
  },
  analysisNodes4Didirectional(t, e, o, n, i) {
    e.length > n.max_length && (n.max_length = e.length), o > n.max_deep && (n.max_deep = o);
    const s = {
      level: o,
      all_size: e.length,
      all_strength: 0
    }, l = [];
    e.forEach((a) => {
      a.lot || (a.lot = { childs: [] }), a.lot.eached = !0, a.lot.subling = s, a.lot.level = o, t.push(a);
    });
    let r = 0;
    e.forEach((a) => {
      let h = 0;
      if (i === 0) {
        let u = 0;
        a.targetNodes.forEach((d) => {
          d.lot || (d.lot = { childs: [], eached: !1 }), d.lot.eached || (B.isAllowShowNode(d) ? (d.lot.eached = !0, d.lot.parent = a, d.lot.index_of_parent = u++, a.lot.childs.push(d), l.push(d), h++) : a.lot.childs.push(d));
        });
      } else if (i === -1) {
        let u = 0;
        a.targetFrom.forEach((d) => {
          d.lot || (d.lot = { childs: [], eached: !1 }), d.lot.eached || (B.isAllowShowNode(d) ? (d.lot.eached = !0, d.lot.parent = a, d.lot.index_of_parent = u++, a.lot.childs.push(d), l.push(d), h++) : a.lot.childs.push(d));
        });
      } else {
        let u = 0;
        a.targetTo.forEach((d) => {
          d.lot || (d.lot = { childs: [], eached: !1 }), d.lot.eached || (B.isAllowShowNode(d) ? (d.lot.eached = !0, d.lot.parent = a, d.lot.index_of_parent = u++, a.lot.childs.push(d), l.push(d), h++) : a.lot.childs.push(d));
        });
      }
      a.lot.strength = h > 0 ? h : 1, s.all_strength += a.lot.strength, a.lot.strength_plus = s.all_strength, a.lot.index_of_level = r, a.lot.childs_size = h, r++;
    }), s.all_strength > n.max_strength && (n.max_strength = s.all_strength), l.length > 0 ? B.analysisNodes4Didirectional(
      t,
      l,
      o + (i === -1 ? -1 : 1),
      n,
      i
    ) : (t.forEach((a) => {
      a.lot.childs_size && a.lot.childs_size > 0 && (a.lot.strengthWithChilds = 0);
    }), t.forEach((a) => {
      a.lot.childs_size === 0 && (a.lot.strengthWithChilds = 1, B.conductStrengthToParents(a));
    }), B.analysisDataTree([t[0]], 0, i));
  },
  conductStrengthToParents(t) {
    t.lot.parent && (t.lot.parent.lot.strengthWithChilds === void 0 && (t.lot.parent.lot.strengthWithChilds = 0), t.lot.parent.lot.strengthWithChilds += 1, this.conductStrengthToParents(t.lot.parent));
  },
  analysisDataTree(t, e, o) {
    o === void 0 && (o = 1);
    const n = [];
    let i = 0;
    t.forEach((s) => {
      (s.lot.level === 0 || o === (s.lot.level && s.lot.level < 0 ? -1 : 1)) && (s.lot.childs_size && s.lot.childs_size > 0 && s.lot.childs.forEach((l) => {
        n.push(l);
      }), s.lot.parent && s.lot.parent.lot.strengthWithChilds_from && i < s.lot.parent.lot.strengthWithChilds_from && (i = s.lot.parent.lot.strengthWithChilds_from), s.lot.strengthWithChilds_from = i, i += s.lot.strengthWithChilds || 0);
    }), n.length > 0 && this.analysisDataTree(n, e + o, o);
  },
  isAllowShowNode(t, e = 0) {
    return t.isShow !== !1 && t.isHide !== !0 && (!t.lot.parent || this.isAllowShowNode(t.lot.parent, e + 1) === !0);
  }
}, Gt = (t, e, o, n) => {
  const i = t - o, s = e - n, l = i ** 2, r = s ** 2, a = l + r;
  return Math.sqrt(a);
}, Yt = ({ link: t, relation: e, relationIndex: o }) => {
  const n = G(X), i = G(oe), s = t.seeks_id === n.options.checkedLineId, l = Ft(e.text) * 10, a = (Gt(
    t.fromNode.x,
    t.fromNode.y,
    t.toNode.x,
    t.toNode.y
  ) - l) / 2, h = (u, d) => {
    n.onLineClick(u, t, d), i();
  };
  return /* @__PURE__ */ L("g", { children: [
    /* @__PURE__ */ p(
      "use",
      {
        xlinkHref: `#${n.options.instanceId}-${t.seeks_id}-${o}`,
        className: ["c-rg-line", s ? "c-rg-line-checked" : ""].join(" "),
        onClickCapture: (u) => {
          h(e, u);
        }
      }
    ),
    /* @__PURE__ */ p(
      "text",
      {
        className: "c-rg-line-text",
        style: {
          fill: s ? n.options.checkedLineColor : e.fontColor ? e.fontColor : e.color ? e.color : void 0
        },
        x: a,
        y: "0",
        onClickCapture: (u) => {
          h(e, u);
        },
        children: /* @__PURE__ */ p(
          "textPath",
          {
            xlinkHref: `#${n.options.instanceId}-${t.seeks_id}-${o}`,
            startOffset: "0",
            textAnchor: "start",
            method: "align",
            spacing: "auto",
            children: e.text
          }
        )
      }
    )
  ] });
}, Jt = ({ link: t, relation: e, relationIndex: o }) => {
  const n = G(X), i = G(oe), s = t.seeks_id === n.options.checkedLineId, { path: l, textPosition: r } = n.createLinePath(
    t,
    e,
    o
  ), a = n.getTextTransform(
    e,
    r.x,
    r.y,
    r.rotate
  ), h = (d, f) => {
    n.onLineClick(d, t, f), i();
  }, u = n.options.defaultShowLineLabel && n.options.canvasZoom > 40;
  return /* @__PURE__ */ L("g", { children: [
    /* @__PURE__ */ p(
      "path",
      {
        d: l,
        className: ["c-rg-line", s ? "c-rg-line-checked" : ""].join(" "),
        stroke: s ? n.options.checkedLineColor : e.color ? e.color : n.options.defaultLineColor,
        style: {
          strokeWidth: `${e.lineWidth ? e.lineWidth : n.options.defaultLineWidth}px`
        },
        markerStart: e.showStartArrow ? n.getArrow(e, t, !0) : "",
        markerEnd: e.showEndArrow ? n.getArrow(e, t, !1) : "",
        fill: "none",
        onClickCapture: (d) => {
          h(e, d);
        }
      }
    ),
    u && /* @__PURE__ */ p("g", { transform: a, children: /* @__PURE__ */ p(
      "text",
      {
        x: "0",
        y: "0",
        style: {
          fill: s ? n.options.checkedLineColor : e.fontColor ? e.fontColor : e.color ? e.color : void 0
        },
        className: "c-rg-line-text",
        onClickCapture: (d) => {
          h(e, d);
        },
        children: e.text
      },
      `t-${e.seeks_id}`
    ) })
  ] });
}, Zt = ({ linkProps: t, LineSlot: e }) => {
  const o = G(X), n = (s) => s.isShow !== !1 && s.isHide !== !0 && (!s.lot.parent || n(s.lot.parent) === !0), i = n(t.fromNode) && n(t.toNode);
  return /* @__PURE__ */ p(de, { children: i && /* @__PURE__ */ p(
    "g",
    {
      className: [
        o.options.checkedLineId == t.seeks_id ? "c-rg-link-checked" : ""
      ].join(" "),
      transform: "translate(0,0)",
      children: t.relations.filter((s) => s.isHide === !1).map(
        (s, l) => /* @__PURE__ */ p(ue.Fragment, { children: e ? /* @__PURE__ */ p(e, { relationGraph: o, link: t, relation: s, relationIndex: l }) : /* @__PURE__ */ p(de, { children: o.options.lineUseTextPath || s.useTextPath ? /* @__PURE__ */ p(
          Yt,
          {
            link: t,
            relation: s,
            relationIndex: l
          },
          `l-${s.seeks_id}`
        ) : /* @__PURE__ */ p(
          Jt,
          {
            link: t,
            relation: s,
            relationIndex: l
          },
          `l-${s.seeks_id}`
        ) }) }, s.seeks_id)
      )
    }
  ) });
}, Ut = ({ link: t, relation: e, relationIndex: o }) => {
  const n = G(X), i = t.seeks_id === n.options.checkedLineId, { path: s } = n.createLinePath(t, e, o);
  return /* @__PURE__ */ p(
    "path",
    {
      id: `${n.options.instanceId}-${t.seeks_id}-${o}`,
      d: s,
      stroke: i ? n.options.checkedLineColor : e.color ? e.color : n.options.defaultLineColor,
      style: {
        strokeWidth: `${e.lineWidth ? e.lineWidth : n.options.defaultLineWidth}px`
      },
      markerStart: e.showStartArrow ? n.getArrow(e, t, !0) : "",
      markerEnd: e.showEndArrow ? n.getArrow(e, t, !1) : "",
      className: [i ? "c-rg-line-checked" : ""].join(" "),
      fill: "none"
    }
  );
}, Xt = (t) => {
  const e = G(X), o = G(oe), n = he(), i = he(), l = (() => ({
    width: `${e.options.canvasSize.width}px`,
    height: `${e.options.canvasSize.height}px`,
    marginLeft: `${e.options.canvasOffset.x}px`,
    marginTop: `${e.options.canvasOffset.y}px`,
    backgroundColor: "transparent",
    transform: `scale(${e.options.canvasZoom / 100},${e.options.canvasZoom / 100})`
  }))();
  ye(() => (_("[RGCanvas mounted]"), r(), e.setCanvasDom(i.current), i.current.parentElement.addEventListener("wheel", a, { passive: !1, capture: !0 }), () => {
    i.current.parentElement.removeEventListener("wheel", a);
  }), []);
  const r = () => {
    n.current.style.setProperty(
      "--stroke",
      `url('#${e.options.instanceId}-lineStyle')`
    ), n.current.style.setProperty(
      "--markerEnd",
      `url('#${e.options.instanceId}-start-arrow-default')`
    ), n.current.style.setProperty(
      "--markerStart",
      `url('#${e.options.instanceId}-arrow-default')`
    ), n.current.style.setProperty(
      "--markerEndChecked",
      `url('#${e.options.instanceId}-arrow-checked')`
    ), n.current.style.setProperty(
      "--markerStartChecked",
      `url('#${e.options.instanceId}-start-arrow-checked')`
    );
  }, a = (g) => {
    if (e.options.disableZoom)
      return !0;
    try {
      g.preventDefault();
    } catch {
    }
    const x = {
      x: g.clientX,
      y: g.clientY
    };
    let v = g.deltaY;
    v === void 0 && (v = g.wheelDelta);
    const w = -1;
    v > 0 ? e.zoom(5 * w, x) : e.zoom(-5 * w, x), o();
  }, h = () => {
    o();
  }, u = (g) => {
    if (e.options.disableDragCanvas)
      return;
    let x, v = !1;
    if (re) {
      let w = null, z = 100;
      x = (P, b, S, W, C) => {
        const O = C.touches || C.targetTouches, T = O[0];
        if (O && O.length > 1) {
          C.preventDefault();
          const Z = O[1];
          w || (w = {
            x: Z.clientX,
            y: Z.clientY
          }, z = e.options.canvasZoom);
          const k = {
            x: T.clientX,
            y: T.clientY
          }, E = {
            x: Z.clientX,
            y: Z.clientY
          }, D = Math.hypot(
            w.x - W.x,
            w.y - W.y
          ), A = Math.hypot(
            E.x - k.x,
            E.y - k.y
          ) / D, Y = z * A;
          e.setZoom(Y);
        } else {
          const Z = T.clientX, k = T.clientY, E = S.x + (Z - W.x), D = S.y + (k - W.y);
          e.setCanvasOffset(E, D);
        }
        o();
      };
    } else
      v = !0, x = () => {
        o();
      };
    U.startDrag(g, e.options.canvasOffset, h, x, v);
  }, d = e.graphData.nodes, f = e.graphData.links;
  return /* @__PURE__ */ p(
    "div",
    {
      style: {
        width: "100%",
        height: "100%",
        backgroundImage: `url(${e.options.backgrounImage})`
      },
      className: [
        "rel-map",
        e.options.layoutClassName,
        e.options.backgrounImageNoRepeat ? "rel-map-background-norepeat" : ""
      ].join(" "),
      onMouseDownCapture: (g) => {
        u(g);
      },
      onTouchStartCapture: (g) => {
        u(g);
      },
      children: /* @__PURE__ */ L(
        "div",
        {
          ref: i,
          style: l,
          className: "rel-map-canvas",
          children: [
            t.canvasPlugSlot && /* @__PURE__ */ p(t.canvasPlugSlot, { relationGraph: e }),
            /* @__PURE__ */ p("div", { ref: n, className: "rel-linediv", style: { overflow: "visible" }, children: /* @__PURE__ */ L(
              "svg",
              {
                style: {
                  width: `${e.options.canvasSize.width}px`,
                  height: `${e.options.canvasSize.height}px`,
                  overflow: "visible"
                },
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                  /* @__PURE__ */ L("defs", { children: [
                    /* @__PURE__ */ L(
                      "linearGradient",
                      {
                        id: `${e.options.instanceId}-lineStyle`,
                        x1: "1",
                        y1: "0",
                        x2: "0",
                        y2: "0",
                        children: [
                          /* @__PURE__ */ p("stop", { offset: "0%", stopColor: "#e52c5c" }),
                          /* @__PURE__ */ p("stop", { offset: "100%", stopColor: "#FD8B37" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ p(
                      "marker",
                      {
                        id: `${e.options.instanceId}-arrow-default`,
                        markerWidth: e.options.defaultLineMarker.markerWidth,
                        markerHeight: e.options.defaultLineMarker.markerHeight,
                        refX: e.options.defaultLineMarker.refX,
                        refY: e.options.defaultLineMarker.refY,
                        markerUnits: "strokeWidth",
                        orient: "auto",
                        viewBox: "0 0 12 12",
                        children: /* @__PURE__ */ p(
                          "path",
                          {
                            style: { fill: e.options.defaultLineColor },
                            d: e.options.defaultLineMarker.data
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ p(
                      "marker",
                      {
                        id: `${e.options.instanceId}-start-arrow-default`,
                        markerWidth: e.options.defaultLineMarker.markerWidth,
                        markerHeight: e.options.defaultLineMarker.markerHeight,
                        refX: e.options.defaultLineMarker.refX,
                        refY: e.options.defaultLineMarker.refY,
                        markerUnits: "strokeWidth",
                        orient: "auto",
                        viewBox: "0 0 12 12",
                        children: /* @__PURE__ */ p(
                          "path",
                          {
                            style: { fill: e.options.defaultLineColor },
                            d: e.options.defaultLineMarker.data,
                            transform: "translate(12,12)rotate(180)"
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ p(
                      "marker",
                      {
                        id: `${e.options.instanceId}-arrow-checked`,
                        markerUnits: "strokeWidth",
                        markerWidth: "12",
                        markerHeight: "12",
                        viewBox: "0 0 12 12",
                        refX: "6",
                        refY: "6",
                        orient: "auto",
                        children: /* @__PURE__ */ p(
                          "path",
                          {
                            style: { fill: e.options.checkedLineColor },
                            d: "M2,2 L10,6 L2,10 L6,6 L2,2"
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ p(
                      "marker",
                      {
                        id: `${e.options.instanceId}-start-arrow-checked`,
                        markerUnits: "strokeWidth",
                        markerWidth: "12",
                        markerHeight: "12",
                        viewBox: "0 0 12 12",
                        refX: "6",
                        refY: "6",
                        orient: "auto",
                        children: /* @__PURE__ */ p(
                          "path",
                          {
                            style: { fill: e.options.checkedLineColor },
                            d: "M2,2 L10,6 L2,10 L6,6 L2,2",
                            transform: "translate(12,12)rotate(180)"
                          }
                        )
                      }
                    ),
                    e.allLineColors.map((g) => /* @__PURE__ */ p(
                      "marker",
                      {
                        id: `${e.options.instanceId}-arrow-${g.id}`,
                        markerWidth: e.options.defaultLineMarker.markerWidth,
                        markerHeight: e.options.defaultLineMarker.markerHeight,
                        refX: e.options.defaultLineMarker.refX,
                        refY: e.options.defaultLineMarker.refY,
                        markerUnits: "strokeWidth",
                        orient: "auto",
                        children: /* @__PURE__ */ p(
                          "path",
                          {
                            fill: e.options.defaultLineMarker.color || g.color,
                            d: e.options.defaultLineMarker.data
                          }
                        )
                      },
                      g.id
                    )),
                    e.allLineColors.map(
                      (g) => /* @__PURE__ */ p(
                        "marker",
                        {
                          id: `${e.options.instanceId}-start-arrow-${g.id}`,
                          markerWidth: e.options.defaultLineMarker.markerWidth,
                          markerHeight: e.options.defaultLineMarker.markerHeight,
                          refX: e.options.defaultLineMarker.refX,
                          refY: e.options.defaultLineMarker.refY,
                          markerUnits: "strokeWidth",
                          orient: "auto",
                          children: /* @__PURE__ */ p(
                            "path",
                            {
                              fill: e.options.defaultLineMarker.color || g.color,
                              d: e.options.defaultLineMarker.data,
                              transform: "translate(12,12)rotate(180)"
                            }
                          )
                        },
                        `start-${g.id}`
                      )
                    ),
                    e.graphData.links.map(
                      (g) => /* @__PURE__ */ p(ue.Fragment, { children: g.relations.filter((x) => e.options.lineUseTextPath || x.useTextPath).map(
                        (x, v) => /* @__PURE__ */ p(
                          Ut,
                          {
                            link: g,
                            relation: x,
                            relationIndex: v
                          },
                          x.seeks_id
                        )
                      ) }, g.seeks_id)
                    )
                  ] }),
                  f.map(
                    (g) => /* @__PURE__ */ p(
                      Zt,
                      {
                        linkProps: g,
                        LineSlot: t.lineSlot
                      },
                      g.seeks_id
                    )
                  )
                ]
              }
            ) }),
            /* @__PURE__ */ p("div", { className: "rel-nodediv rel-nodediv-for-webkit", children: d.map(
              (g) => /* @__PURE__ */ p(
                Vt,
                {
                  nodeProps: g,
                  NodeSlot: t.nodeSlot
                },
                g.seeks_id
              )
            ) })
          ]
        }
      )
    }
  );
}, qt = () => {
  const t = G(X), e = G(oe), [o, n] = at(!1), i = () => {
    n(!o);
  }, s = () => {
    console.log("options:", t.getGraphJsonOptions());
  }, l = () => {
    console.log("data:", t.getGraphJsonData());
  }, r = () => {
    t.enableDebugLog(!t.options.debug), _("debugLog:", t.options.debug), e();
  };
  return /* @__PURE__ */ L("div", { children: [
    /* @__PURE__ */ p("div", { className: "c-setting-panel-button", onClick: () => {
      i();
    }, children: "Debug" }),
    o && /* @__PURE__ */ L("div", { className: "c-setting-panel", children: [
      /* @__PURE__ */ p("div", { className: "c-debug-tools-row", children: /* @__PURE__ */ p("button", { onClick: () => {
        s();
      }, children: "print options in console" }) }),
      /* @__PURE__ */ p("div", { className: "c-debug-tools-row", children: /* @__PURE__ */ p("button", { onClick: () => {
        l();
      }, children: "print json data in console" }) }),
      /* @__PURE__ */ L("div", { className: "c-debug-tools-row", children: [
        "debug log status: ",
        t.options.debug,
        /* @__PURE__ */ L("button", { onClick: () => {
          r();
        }, children: [
          t.options.debug ? "disable" : "enable",
          " debug log"
        ] })
      ] })
    ] })
  ] });
}, Kt = () => /* @__PURE__ */ p("div", { className: "h-full bg-white", children: "not support" });
class Qt {
  constructor(e, o) {
    N(this, "levelDistanceArr", []);
    N(this, "graphOptions");
    N(this, "layoutOptions");
    N(this, "rootNode");
    N(this, "allNodes", []);
    N(this, "__origin_nodes", []);
    this.layoutOptions = e, this.graphOptions = o, _("new SeeksBidirectionalTreeLayouter:", this.layoutOptions), this.layoutOptions.from || (this.layoutOptions.from = "left"), this.layoutOptions.levelDistance && typeof this.layoutOptions.levelDistance == "string" && (this.levelDistanceArr = this.layoutOptions.levelDistance.split(",").map((n) => Number.parseInt(n)));
  }
  refresh() {
    _(
      "SeeksBidirectionalTreeLayouter:refresh:nodes:",
      this.__origin_nodes.length
    ), this.placeNodes(this.__origin_nodes, this.rootNode);
  }
  analysisNodes4Didirectional(e, o, n, i, s) {
    o.length > i.max_length && (i.max_length = o.length), n > i.max_deep && (i.max_deep = n);
    const l = {
      level: n,
      all_size: o.length,
      all_strength: 0
    }, r = [];
    o.forEach((h) => {
      h.lot || (h.lot = { childs: [] }), h.lot.eached = !0, h.lot.subling = l, h.lot.level = n, e.push(h);
    });
    let a = 0;
    o.forEach((h) => {
      let u = 0;
      if (s === -1) {
        let d = 0;
        h.targetFrom.forEach((f) => {
          f.lot || (f.lot = { childs: [], eached: !1 }), f.lot.eached || (B.isAllowShowNode(f) ? (f.lot.eached = !0, f.lot.parent = h, f.lot.index_of_parent = d++, h.lot.childs.push(f), r.push(f), u++) : h.lot.childs.push(f));
        });
      } else {
        let d = 0;
        h.targetTo.forEach((f) => {
          f.lot || (f.lot = { childs: [], eached: !1 }), f.lot.eached || (B.isAllowShowNode(f) ? (f.lot.eached = !0, f.lot.parent = h, f.lot.index_of_parent = d++, h.lot.childs.push(f), r.push(f), u++) : h.lot.childs.push(f));
        });
      }
      h.lot.strength = u > 0 ? u : 1, l.all_strength += h.lot.strength, h.lot.strength_plus = l.all_strength, h.lot.index_of_level = a, h.lot.childs_size = u, a++;
    }), l.all_strength > i.max_strength && (i.max_strength = l.all_strength), r.length > 0 ? this.analysisNodes4Didirectional(
      e,
      r,
      n + s,
      i,
      s
    ) : (e.forEach((h) => {
      h.lot.childs_size && h.lot.childs_size > 0 && (h.lot.strengthWithChilds = 0);
    }), e.forEach((h) => {
      h.lot.childs_size === 0 && (h.lot.strengthWithChilds = 1, B.conductStrengthToParents(h));
    }), B.analysisDataTree([e[0]], 0, s));
  }
  placeNodes(e, o) {
    if (_("SeeksBidirectionalTreeLayouter:placeNodes"), o)
      _("layout by root:", o);
    else {
      console.error("root is null");
      return;
    }
    this.__origin_nodes = e, this.rootNode = o, e.forEach((i) => {
      i.lot.eached = !1, i.lot.notLeafNode = !1, i.lot.childs = [], i.lot.index_of_parent = 0, i.lot.strength = 0, i.lot.strengthWithChilds_from = 0, i.lot.strengthWithChilds = 0, i.lot.placed = !1;
    }), this.allNodes = [];
    let n = {
      max_deep: 1,
      max_length: 1,
      max_strength: 1
    };
    this.analysisNodes4Didirectional(
      this.allNodes,
      [this.rootNode],
      0,
      n,
      -1
    ), this.placeNodesPosition(this.rootNode, this.allNodes, n), this.allNodes = [], n = {
      max_deep: 1,
      max_length: 1,
      max_strength: 1
    }, this.analysisNodes4Didirectional(
      this.allNodes,
      [this.rootNode],
      0,
      n,
      1
    ), this.placeNodesPosition(this.rootNode, this.allNodes, n);
  }
  placeNodesPosition(e, o, n) {
    if (e.fixed !== !0) {
      const l = this.layoutOptions.centerOffset_x || 0, r = this.layoutOptions.centerOffset_y || 0, a = e.el.offsetWidth || e.width || 60, h = e.el.offsetHeight || e.height || 60;
      e.lot.x = -a / 2 + l, e.lot.y = -h / 2 + r, this.layoutOptions.from === "top" ? e.lot.y -= this.graphOptions.viewSize.height / 2 - h - 100 : this.layoutOptions.from === "bottom" ? e.lot.y += this.graphOptions.viewSize.height / 2 - h - 200 : this.layoutOptions.from === "right" ? e.lot.x += this.graphOptions.viewSize.width / 2 - a - 100 : e.lot.x -= this.graphOptions.viewSize.width / 2 - a - 100, _("graph offset:", l, r), _("create rootNode coordinates:", e.lot.x, e.lot.y), e.x = e.lot.x + 0, e.y = e.lot.y + 0;
    } else
      _("\u56FA\u5B9A\u4F4D\u7F6E\u7684rootNode:", e.text, e.x, e.y), e.origin_x === void 0 && (e.origin_x = e.x, e.origin_y = e.y), e.lot.x = e.origin_x, e.lot.y = e.origin_y, e.x = e.lot.x + 0, e.y = e.lot.y + 0, _("\u56FA\u5B9A\u4F4D\u7F6E\u7684rootNode:", e.text, e.x, e.y);
    e.lot.placed = !0, this.placeRelativePosition(e, n), o.forEach((l) => {
      if (l.fixed === !0) {
        l.lot.placed = !0;
        return;
      }
      if (!B.isAllowShowNode(l))
        return;
      const r = l.offset_x || 0, a = l.offset_y || 0;
      l.x = l.lot.x + r, l.y = l.lot.y + a, l.lot.placed = !0;
    });
  }
  placeRelativePosition(e, o) {
    const n = this.graphOptions.viewSize.width, i = this.graphOptions.viewSize.height;
    if (this.layoutOptions.from === "left" || this.layoutOptions.from === "right") {
      const s = this.layoutOptions.min_per_height || 80, l = this.layoutOptions.max_per_height || 400, r = this.layoutOptions.min_per_width || 430, a = this.layoutOptions.max_per_width || 650;
      let h = Math.round(
        (n - 10) / (o.max_deep + 2)
      );
      h < r && (h = r), h > a && (h = a);
      let u = Math.round(
        i / (o.max_strength + 1)
      );
      u < s && (u = s), u > l && (u = l), this.allNodes.forEach((d) => {
        d.fixed !== !0 && d.lot.placed !== !0 && d !== e && (this.layoutOptions.from === "right" ? d.lot.x = e.lot.x - this.getLevelDistance(
          d,
          d.lot.subling.level,
          h
        ) : d.lot.x = e.lot.x + this.getLevelDistance(
          d,
          d.lot.subling.level,
          h
        ));
      }), this.allNodes.forEach((d) => {
        d.fixed !== !0 && d.lot.level !== 0 && (d.lot.y = e.lot.y + u * (o.max_strength / -2 + d.lot.strengthWithChilds_from + d.lot.strengthWithChilds / 2));
      });
    } else {
      const s = this.layoutOptions.min_per_height || 250, l = this.layoutOptions.max_per_height || 400, r = this.layoutOptions.min_per_width || 250, a = this.layoutOptions.max_per_width || 500;
      let h = Math.round(
        (n - 10) / (o.max_strength + 2)
      );
      h < r && (h = r), h > a && (h = a);
      let u = Math.round(
        (i - 10) / (o.max_deep + 2)
      );
      u < s && (u = s), u > l && (u = l), this.allNodes.forEach((d) => {
        d.fixed !== !0 && d.lot.placed !== !0 && d !== e && (this.layoutOptions.from === "bottom" ? d.lot.y = e.lot.y - this.getLevelDistance(
          d,
          d.lot.subling.level,
          u
        ) : d.lot.y = e.lot.y + this.getLevelDistance(
          d,
          d.lot.subling.level,
          u
        ));
      }), this.allNodes.forEach((d) => {
        d.fixed !== !0 && d.lot.level !== 0 && (d.lot.x = e.lot.x + h * (o.max_strength / -2 + d.lot.strengthWithChilds_from + d.lot.strengthWithChilds / 2));
      });
    }
  }
  getLevelDistance(e, o, n) {
    if (this.levelDistanceArr && this.levelDistanceArr.length > 0) {
      let i = 0;
      for (let s = 0; s < o; s++) {
        const l = this.levelDistanceArr[s] || 100;
        i += l;
      }
      return i;
    } else
      return o * n;
  }
}
class we {
  constructor(e, o) {
    N(this, "graphOptions");
    N(this, "layoutOptions");
    N(this, "rootNode");
    N(this, "allNodes", []);
    N(this, "__origin_nodes", []);
    N(this, "layoutTimes", 0);
    N(this, "maxLayoutTimes", 300);
    N(this, "justLayoutSingleNode", !1);
    N(this, "byNode", !0);
    N(this, "byLine", !0);
    this.layoutOptions = e, this.graphOptions = o;
  }
  refresh() {
    this.placeNodes(this.__origin_nodes, this.rootNode);
  }
  placeNodes(e, o) {
    if (!o) {
      _("root is null:", o);
      return;
    }
    _("layout by root:", o), this.__origin_nodes = e, this.rootNode = o;
    let n = 0;
    this.__origin_nodes.forEach((i) => {
      i.lot.placed && n++;
    }), this.analysisNodes(), n === 0 ? this.initNodesPosition() : this.__origin_nodes.forEach((i) => {
      i.lot.placed || (i.x || (i.x = Math.floor(Math.random() * 200) - 100), i.x || (i.y = Math.floor(Math.random() * 200) - 100), i.lot.placed = !0);
    }), _("Start Auto Layout....."), this.autoLayout(!0);
  }
  analysisNodes() {
    this.__origin_nodes.forEach((o) => {
      o.lot.eached = !1, o.lot.notLeafNode = !1, o.lot.childs = [], o.lot.index_of_parent = 0, o.lot.strength = 0, o.lot.placed = !1;
    }), this.allNodes = [];
    const e = {
      max_deep: 1,
      max_length: 1,
      max_strength: 1
    };
    B.analysisNodes4Didirectional(
      this.allNodes,
      [this.rootNode],
      0,
      e,
      0
    );
  }
  initNodesPosition() {
    const e = this.rootNode;
    e.lot.x = -(e.el.offsetWidth || e.width || 60) / 2, e.lot.y = -(e.el.offsetHeight || e.height || 60) / 2, _("root position:", e.lot.x, e.lot.y), _(
      "[layout canvasOffset]",
      this.graphOptions.viewSize,
      this.graphOptions.canvasSize
    ), this.placeRelativePosition(this.rootNode, {
      max_deep: 1,
      max_length: 1,
      max_strength: 1
    }), this.allNodes.forEach((o) => {
      o.fixed !== !0 && (!B.isAllowShowNode(o) || (o.x = o.lot.x || 50, o.y = o.lot.y || 50, o.lot.placed = !0));
    });
  }
  placeRelativePosition(e, o) {
    let n = 80;
    this.allNodes.forEach((i) => {
      if (i.lot.subling && i.lot.subling.level === 1) {
        n = i.lot.subling.all_size * 20 / Math.PI / 2, n < 80 && (n = 80);
        const s = B.getOvalPoint(
          e.lot.x,
          e.lot.y,
          i.lot.subling.level * n,
          i.lot.strength_plus - i.lot.strength / 2,
          i.lot.subling.all_strength
        );
        i.lot.x = s.x, i.lot.y = s.y;
      }
    }), this.allNodes.forEach((i) => {
      if (i.lot.subling && i.lot.subling.level > 1 && i.lot.parent) {
        const s = i.lot.parent.lot.strength_plus - i.lot.parent.lot.strength, r = (i.lot.parent.lot.strength_plus - s) / (i.lot.parent.lot.childs_size + 1) * (i.lot.index_of_parent + 1), a = B.getOvalPoint(
          e.lot.x,
          e.lot.y,
          (i.lot.subling.level - 1) * 80 + n,
          s + r,
          i.lot.parent.lot.subling.all_strength
        );
        i.lot.x = a.x, i.lot.y = a.y;
      }
    });
  }
  autoLayout(e) {
    if (e && (this.layoutTimes = 0), _("this.layoutTimes:", this.layoutTimes), this.layoutTimes > this.maxLayoutTimes) {
      this.graphOptions.autoLayouting = !1;
      return;
    }
    if (this.graphOptions.autoLayouting = !0, this.layoutTimes++, this.__origin_nodes.forEach((o) => {
      o.Fx = 0, o.Fy = 0;
    }), this.byNode)
      for (const o in this.__origin_nodes) {
        const n = this.__origin_nodes[o];
        if (!(this.justLayoutSingleNode && !n.singleNode) && n.lot.placed === !0)
          for (const i in this.__origin_nodes) {
            const s = this.__origin_nodes[i];
            s.lot.placed === !0 && o !== i && this.addGravityByNode(n, s);
          }
      }
    if (this.byLine)
      for (const o in this.__origin_nodes)
        this.__origin_nodes[o].lot.parent && this.addElasticByLine(
          this.__origin_nodes[o].lot.parent,
          this.__origin_nodes[o]
        );
    for (const o in this.__origin_nodes)
      this.applyToNodePosition(this.__origin_nodes[o]);
    window.setTimeout(() => {
      this.autoLayout();
    }, 30);
  }
  stop() {
    this.layoutTimes = 1e3;
  }
  addElasticByLine(e, o) {
    let n = Math.sqrt((e.y - o.y) ** 2 + (e.x - o.x) ** 2);
    n > 1e3 && (n = 1e3);
    const i = n < 30 ? 0 : (n - 30) * 0.05, s = i, l = i, r = (e.x - o.x) / n, a = (e.y - o.y) / n;
    this.addFtoNode(e, r * s * -1, a * s * -1), this.addFtoNode(o, r * l, a * l);
  }
  addGravityByNode(e, o) {
    const n = Math.sqrt(
      (e.y - o.y) ** 2 + (e.x - o.x) ** 2
    ), i = 300;
    let s = n > i ? 0 : (i - n) * 0.03;
    const l = (e.x - o.x) / n, r = (e.y - o.y) / n;
    this.addFtoNode(e, l * s, r * s), this.addFtoNode(o, l * s * -1, r * s * -1);
  }
  getNodeFWeight(e) {
    let o = e.lot.level;
    return o > 7 && (o = 7), o < 0 && (o = 0), (8 - o) / 8;
  }
  addFtoNode(e, o, n) {
    this.justLayoutSingleNode && !e.singleNode || Number.isNaN(o) || Number.isNaN(n) || (o = o / (e.lot.strength || 1), n = n / (e.lot.strength || 1), o > 50 && (o = 50), n > 50 && (n = 50), o < -50 && (o = -50), n < -50 && (n = -50), e.Fx += o, e.Fy += n);
  }
  applyToNodePosition(e) {
    const o = Math.round(e.Fx), n = Math.round(e.Fy);
    e.x = e.x + o, e.y = e.y + n, e.Fx = 0, e.Fy = 0;
  }
}
class eo extends we {
  constructor(o, n) {
    super(o, n);
    N(this, "layoutOptions");
    this.layoutOptions = o;
  }
  refresh() {
    _("SeeksCenterLayouter:refresh"), this.placeNodes(this.__origin_nodes, this.rootNode);
  }
  placeNodes(o, n) {
    if (_("SeeksCenterLayouter:placeNodes"), !n) {
      _("root is null:", n);
      return;
    }
    _("layout by root:", n), this.__origin_nodes = o, this.rootNode = n, o.forEach((s) => {
      s.lot.eached = !1, s.lot.notLeafNode = !1, s.lot.childs = [], s.lot.index_of_parent = 0, s.lot.strength = 0, s.lot.placed = !1;
    }), this.allNodes = [];
    const i = {
      max_deep: 1,
      max_length: 1,
      max_strength: 1
    };
    B.analysisNodes4Didirectional(
      this.allNodes,
      [this.rootNode],
      0,
      i,
      0
    ), n.lot.x = -(n.el.offsetWidth || n.width || 60) / 2, n.lot.y = -(n.el.offsetHeight || n.height || 60) / 2, _("root position:", n.lot.x, n.lot.y), this.placeRelativePosition(this.rootNode, i), this.allNodes.forEach((s) => {
      if (s.fixed === !0 || !B.isAllowShowNode(s))
        return;
      const l = s.offset_x || 0, r = s.offset_y || 0;
      s.x = s.lot.x + l, s.y = s.lot.y + r, s.lot.placed = !0;
    }), _("Start Auto Layout.....");
  }
  placeRelativePosition(o, n) {
    const i = this.layoutOptions.distance_coefficient === void 0 ? 1 : this.layoutOptions.distance_coefficient;
    let s = Math.round(
      (this.graphOptions.viewSize.height + this.graphOptions.viewSize.width) / n.max_deep * 0.2
    ) * i;
    _(
      "analyticResult:",
      n,
      s,
      this.layoutOptions.distance_coefficient
    ), s < 150 * i && (s = 150 * i);
    let l = 0;
    this.allNodes.forEach((a) => {
      if (a.lot.subling && a.lot.subling.level === 1) {
        l = Math.round(
          a.lot.subling.all_size * 50 / Math.PI / 2
        ), l < s && (l = s);
        const h = B.getOvalPoint(
          o.lot.x,
          o.lot.y,
          a.lot.subling.level * l,
          a.lot.strength_plus - a.lot.strength / 2,
          a.lot.subling.all_strength
        );
        a.lot.x = h.x, a.lot.y = h.y;
      }
    });
    const r = Math.round(300 * i);
    this.allNodes.forEach((a) => {
      var h;
      if (a.lot.parent && a.lot.subling && a.lot.subling.level > 1) {
        const u = a.lot.parent.lot.strength_plus - a.lot.parent.lot.strength, f = (a.lot.parent.lot.strength_plus - u) / (a.lot.parent.lot.childs_size + 1) * (a.lot.index_of_parent + 1), g = B.getOvalPoint(
          o.lot.x,
          o.lot.y,
          (a.lot.subling.level - 1) * r + l,
          u + f,
          (h = a.lot.parent.lot.subling) == null ? void 0 : h.all_strength
        );
        a.lot.x = g.x, a.lot.y = g.y;
      }
    });
  }
}
class to extends we {
  constructor(o, n) {
    super(o, n);
    N(this, "__max_deep", 1);
    N(this, "__max_length", 1);
  }
  checkMaxDeepAndLength(o, n) {
    o.length > this.__max_length && (this.__max_length = o.length), n > this.__max_deep && (this.__max_deep = n);
    const i = {
      level: n,
      all_size: o.length,
      all_strength: 0
    }, s = [];
    o.forEach((r) => {
      r.lot || (r.lot = { childs: [] }), r.lot.eached = !0, r.lot.subling = i, this.allNodes.push(r);
    });
    let l = 0;
    o.forEach((r) => {
      let a = 0;
      r.targetNodes && (r.targetNodes.forEach((h) => {
        _("child node::", h.type, h.lot.eached), h.lot || (h.lot = { childs: [], eached: !1 }), h.type === "node" && h.targetNodes.length <= 1 ? h.lot.eached || (h.lot.parent = r, h.lot.index_of_p_childs = a, r.lot.childs.push(h), r.lot.eached = !0, s.push(h), a++) : h.lot.notLeafNode = !0;
      }), r.targetNodes.forEach((h) => {
        h.lot.notLeafNode && (h.lot || (h.lot = { childs: [], eached: !1 }), h.lot.eached || (h.lot.parent = r, h.lot.index_of_p_childs = a, r.lot.childs.push(h), r.lot.eached = !0, s.push(h), a++));
      })), r.lot.strength = a > 0 ? a : 1, i.all_strength += r.lot.strength, r.lot.strength_plus = i.all_strength, r.lot.level_index = l, r.lot.childs_size = a, l++;
    }), s.length > 0 && this.checkMaxDeepAndLength(s, n + 1);
  }
  refresh() {
    this.placeNodes(this.__origin_nodes, this.rootNode);
  }
  placeNodes(o, n) {
    if (n)
      _("layout by root:", n);
    else {
      _("root is null:", n);
      return;
    }
    this.__origin_nodes = o, this.rootNode = n, o.forEach((d) => {
      d.lot.eached = !1, d.lot.notLeafNode = !1, d.lot.childs = [], d.lot.parent = void 0, d.lot.index_of_p_childs = 0, d.lot.strength = 0;
    }), this.allNodes = [], _("max before:", this.__max_deep, this.__max_length), this.checkMaxDeepAndLength([this.rootNode], 0), _("max after:", this.__max_deep, this.__max_length);
    const i = this.graphOptions.viewSize.width, s = this.graphOptions.viewSize.height, l = this.graphOptions.canvasOffset.x, r = this.graphOptions.canvasOffset.y, a = {
      x: i / 2 - l,
      y: s / 2 - r
    };
    a.y > 800 - r && (a.y = 800 - r);
    const h = this.allNodes.length;
    let u = h * 90 / Math.PI / 2;
    u < 200 && (u = 200), u > 800 && (u = 800), this.allNodes.forEach((d, f) => {
      const g = B.getOvalPoint(
        a.x,
        a.y,
        u,
        f,
        h
      );
      d.x = g.x, d.y = g.y;
    }), _("Start Auto Layout.....");
  }
}
class oo {
  constructor(e, o) {
    N(this, "graphOptions");
    N(this, "layoutOptions");
    N(this, "rootNode");
    N(this, "allNodes", []);
    N(this, "__origin_nodes", []);
    this.layoutOptions = e, this.graphOptions = o;
  }
  refresh() {
    this.placeNodes(this.__origin_nodes, this.rootNode);
  }
  placeNodes(e, o) {
    if (!o) {
      _("root is null:", o);
      return;
    }
    _("layout by root:", o), this.__origin_nodes = e, this.rootNode = o, e.forEach((i) => {
      i.lot.eached = !1, i.lot.notLeafNode = !1, i.lot.childs = [], i.lot.index_of_parent = 0, i.lot.strength = 0, i.lot.placed = !1;
    }), this.allNodes = [];
    const n = {
      max_deep: 1,
      max_length: 1,
      max_strength: 1
    };
    B.analysisNodes4Didirectional(
      this.allNodes,
      [this.rootNode],
      0,
      n,
      0
    );
  }
}
const lt = (t, e) => {
  e.layoutClassName = t.layoutClassName, e.layoutLabel = t.label, e.layoutName = t.layoutName, e.layoutDirection = t.layoutDirection, t.useLayoutStyleOptions === !0 && (e.defaultExpandHolderPosition = t.defaultExpandHolderPosition, e.defaultJunctionPoint = t.defaultJunctionPoint, e.defaultNodeColor = t.defaultNodeColor, e.defaultNodeFontColor = t.defaultNodeFontColor, e.defaultNodeBorderColor = t.defaultNodeBorderColor, e.defaultNodeBorderWidth = t.defaultNodeBorderWidth, e.defaultLineColor = t.defaultLineColor, e.defaultLineWidth = t.defaultLineWidth, e.defaultLineShape = t.defaultLineShape, e.defaultNodeShape = t.defaultNodeShape, e.defaultNodeWidth = t.defaultNodeWidth, e.defaultNodeHeight = t.defaultNodeHeight, e.defaultLineMarker = t.defaultLineMarker, e.defaultShowLineLabel = t.defaultShowLineLabel);
  let o;
  return t.layoutName === "SeeksBidirectionalTreeLayouter" || t.layoutName === "tree" ? o = new Qt(t, e) : t.layoutName === "SeeksCenterLayouter" || t.layoutName === "center" ? o = new eo(t, e) : t.layoutName === "SeeksCircleLayouter" || t.layoutName === "circle" ? o = new to(t, e) : t.layoutName === "SeeksForceLayouter" || t.layoutName === "force" ? o = new we(t, e) : (t.layoutName === "SeeksFixedLayouter" || t.layoutName === "fixed") && (o = new oo(t, e)), e.isNeedShowAutoLayoutButton = t.allowAutoLayoutIfSupport !== !1 && o.autoLayout !== void 0, o;
}, no = (t, e) => {
  const o = e.layouter ? e.layouter.__origin_nodes : [], n = e.layouter ? e.layouter.rootNode : void 0;
  let i = t;
  if (typeof t == "string") {
    for (const s in e.layouts)
      if (s === t) {
        i = s;
        break;
      }
  }
  _("[change layout]switchLayout"), e.layouter = lt(i, e), e.layouter && (e.layouter.__origin_nodes = o, e.layouter.rootNode = n);
}, io = () => {
  const t = G(X), e = G(oe), o = () => {
    t.refresh();
  }, n = (a) => {
    _("change layout:", a), no(a, t.options), o(), e();
  }, i = () => {
    t.startAutoLayout();
  }, s = (a) => {
    t.setDefaultLineShape(a), e();
  }, l = (a) => {
    t.setDefaultJunctionPoint(a), e();
  }, r = 106;
  return /* @__PURE__ */ L(
    "div",
    {
      style: {
        marginLeft: `${t.options.viewELSize.width - 50}px`,
        marginTop: `${(t.options.viewELSize.height - 260) / 2}px`
      },
      className: "c-mini-toolbar",
      children: [
        /* @__PURE__ */ L(
          "div",
          {
            className: "c-mb-button",
            style: { marginTop: "0px" },
            onClick: () => {
              t.fullscreen();
            },
            children: [
              /* @__PURE__ */ p("svg", { className: "rg-icon", "aria-hidden": "true", children: /* @__PURE__ */ p("use", { xlinkHref: "#icon-resize-" }) }),
              /* @__PURE__ */ p("span", { className: "c-mb-text", children: t.options.fullscreen ? "\u9000\u51FA" : "\u5168\u5C4F" })
            ]
          }
        ),
        t.options.allowShowZoomMenu && /* @__PURE__ */ L(
          "div",
          {
            className: "c-mb-button",
            onClick: () => {
              t.zoom(20), e();
            },
            children: [
              /* @__PURE__ */ p("svg", { className: "rg-icon", "aria-hidden": "true", children: /* @__PURE__ */ p("use", { xlinkHref: "#icon-fangda" }) }),
              /* @__PURE__ */ p("span", { className: "c-mb-text", children: "\u653E\u5927" })
            ]
          }
        ),
        t.options.allowShowZoomMenu && /* @__PURE__ */ L(
          "div",
          {
            style: {
              float: "left",
              marginTop: "0px",
              height: "20px",
              width: "40px",
              borderTop: "0px",
              borderBottom: "0px",
              color: "#262626",
              fontSize: "10px",
              backgroundColor: "#efefef",
              textAlign: "center",
              lineHeight: "20px"
            },
            children: [
              t.options.canvasZoom,
              "%"
            ]
          }
        ),
        t.options.allowShowZoomMenu && /* @__PURE__ */ L(
          "div",
          {
            className: "c-mb-button",
            style: { marginTop: "0px" },
            onClick: () => {
              t.zoom(-20), e();
            },
            children: [
              /* @__PURE__ */ p("svg", { className: "rg-icon", "aria-hidden": "true", children: /* @__PURE__ */ p("use", { xlinkHref: "#icon-suoxiao" }) }),
              /* @__PURE__ */ p("span", { className: "c-mb-text", children: "\u7F29\u5C0F" })
            ]
          }
        ),
        t.options.layouts.length > 1 && /* @__PURE__ */ L("div", { className: "c-mb-button", children: [
          /* @__PURE__ */ p("svg", { className: "rg-icon", "aria-hidden": "true", children: /* @__PURE__ */ p("use", { xlinkHref: "#icon-yuanquanfenxiang" }) }),
          /* @__PURE__ */ p("span", { className: "c-mb-text", children: "\u5E03\u5C40" }),
          /* @__PURE__ */ p(
            "div",
            {
              style: {
                width: `${t.options.layouts.length * 70 + 6}px`,
                marginLeft: `${t.options.layouts.length * -70 - 5}px`
              },
              className: "c-mb-child-panel",
              children: t.options.layouts.map((a) => /* @__PURE__ */ L(
                "div",
                {
                  className: ["c-mb-button", "c-mb-button-c", t.options.layoutLabel === a.label ? "c-mb-button-on" : ""].join(" "),
                  style: { width: "70px" },
                  onClick: () => {
                    n(a);
                  },
                  children: [
                    /* @__PURE__ */ p("svg", { className: "rg-icon", "aria-hidden": "true", children: /* @__PURE__ */ p("use", { xlinkHref: "#icon-yuanquanfenxiang" }) }),
                    /* @__PURE__ */ p("span", { className: "c-mb-text", children: a.label })
                  ]
                },
                a.label
              ))
            }
          )
        ] }),
        t.options.allowSwitchLineShape && /* @__PURE__ */ L("div", { className: "c-mb-button", children: [
          /* @__PURE__ */ p("svg", { className: "rg-icon", "aria-hidden": "true", children: /* @__PURE__ */ p("use", { xlinkHref: "#icon-hj2" }) }),
          /* @__PURE__ */ p("span", { className: "c-mb-text", children: "\u7EBF\u6761" }),
          /* @__PURE__ */ L("div", { className: "c-mb-child-panel", style: { width: "256px", marginLeft: "-255px" }, children: [
            /* @__PURE__ */ L(
              "div",
              {
                className: ["c-mb-button", "c-mb-button-c", t.options.defaultLineShape === 1 ? "c-mb-button-on" : ""].join(" "),
                style: { width: "50px" },
                onClick: () => {
                  s(1);
                },
                children: [
                  /* @__PURE__ */ p("svg", { className: "rg-icon", "aria-hidden": "true", children: /* @__PURE__ */ p("use", { xlinkHref: "#icon-hj2" }) }),
                  /* @__PURE__ */ p("span", { className: "c-mb-text", children: "\u76F4\u7EBF" })
                ]
              }
            ),
            /* @__PURE__ */ L(
              "div",
              {
                className: ["c-mb-button", "c-mb-button-c", t.options.defaultLineShape === 2 ? "c-mb-button-on" : ""].join(" "),
                style: { width: "50px" },
                onClick: () => {
                  s(2);
                },
                children: [
                  /* @__PURE__ */ p("svg", { className: "rg-icon", "aria-hidden": "true", children: /* @__PURE__ */ p("use", { xlinkHref: "#icon-lianjieliu" }) }),
                  /* @__PURE__ */ p("span", { className: "c-mb-text", children: "\u7B80\u6D01" })
                ]
              }
            ),
            /* @__PURE__ */ L(
              "div",
              {
                className: ["c-mb-button", "c-mb-button-c", t.options.defaultLineShape === 6 ? "c-mb-button-on" : ""].join(" "),
                style: { width: "50px" },
                onClick: () => {
                  s(6);
                },
                children: [
                  /* @__PURE__ */ p("svg", { className: "rg-icon", "aria-hidden": "true", children: /* @__PURE__ */ p("use", { xlinkHref: "#icon-lianjieliu" }) }),
                  /* @__PURE__ */ p("span", { className: "c-mb-text", children: "\u751F\u52A8" })
                ]
              }
            ),
            /* @__PURE__ */ L(
              "div",
              {
                className: ["c-mb-button", "c-mb-button-c", t.options.defaultLineShape === 5 ? "c-mb-button-on" : ""].join(" "),
                style: { width: "50px" },
                onClick: () => {
                  s(5);
                },
                children: [
                  /* @__PURE__ */ p("svg", { className: "rg-icon", "aria-hidden": "true", children: /* @__PURE__ */ p("use", { xlinkHref: "#icon-lianjieliu" }) }),
                  /* @__PURE__ */ p("span", { className: "c-mb-text", children: "\u9C7C\u5C3E" })
                ]
              }
            ),
            /* @__PURE__ */ L(
              "div",
              {
                className: ["c-mb-button", "c-mb-button-c", t.options.defaultLineShape === 4 ? "c-mb-button-on" : ""].join(" "),
                style: { width: "50px" },
                onClick: () => {
                  s(4);
                },
                children: [
                  /* @__PURE__ */ p("svg", { className: "rg-icon", "aria-hidden": "true", children: /* @__PURE__ */ p("use", { xlinkHref: "#icon-hj2" }) }),
                  /* @__PURE__ */ p("span", { className: "c-mb-text", children: "\u6298\u7EBF" })
                ]
              }
            )
          ] })
        ] }),
        t.options.allowSwitchJunctionPoint && /* @__PURE__ */ L(
          "div",
          {
            className: "c-mb-button",
            children: [
              /* @__PURE__ */ p("svg", { className: "rg-icon", "aria-hidden": "true", children: /* @__PURE__ */ p("use", { xlinkHref: "#icon-lianjie_connecting5" }) }),
              /* @__PURE__ */ p("span", { className: "c-mb-text", children: "\u8FDE\u63A5\u70B9" }),
              /* @__PURE__ */ L("div", { className: "c-mb-child-panel", style: { width: "206px", marginLeft: "-205px" }, children: [
                /* @__PURE__ */ L(
                  "div",
                  {
                    className: [
                      "c-mb-button",
                      "c-mb-button-c",
                      t.options.defaultJunctionPoint === "border" ? "c-mb-button-on" : ""
                    ].join(" "),
                    style: { width: "50px" },
                    onClick: () => {
                      l("border");
                    },
                    children: [
                      /* @__PURE__ */ p("svg", { className: "rg-icon", "aria-hidden": "true", children: /* @__PURE__ */ p("use", { xlinkHref: "#icon-lianjie_connecting5" }) }),
                      /* @__PURE__ */ p("span", { className: "c-mb-text", children: "\u8FB9\u7F18" })
                    ]
                  }
                ),
                /* @__PURE__ */ L(
                  "div",
                  {
                    className: [
                      "c-mb-button",
                      "c-mb-button-c",
                      t.options.defaultJunctionPoint === "ltrb" ? "c-mb-button-on" : ""
                    ].join(" "),
                    style: { width: "50px" },
                    onClick: () => {
                      l("ltrb");
                    },
                    children: [
                      /* @__PURE__ */ p("svg", { className: "rg-icon", "aria-hidden": "true", children: /* @__PURE__ */ p("use", { xlinkHref: "#icon-lianjie_connecting5" }) }),
                      /* @__PURE__ */ p("span", { className: "c-mb-text", children: "\u56DB\u70B9" })
                    ]
                  }
                ),
                /* @__PURE__ */ L(
                  "div",
                  {
                    className: [
                      "c-mb-button",
                      "c-mb-button-c",
                      t.options.defaultJunctionPoint === "tb" ? "c-mb-button-on" : ""
                    ].join(" "),
                    style: { width: "50px" },
                    onClick: () => {
                      l("tb");
                    },
                    children: [
                      /* @__PURE__ */ p("svg", { className: "rg-icon", "aria-hidden": "true", children: /* @__PURE__ */ p("use", { xlinkHref: "#icon-lianjie_connecting5" }) }),
                      /* @__PURE__ */ p("span", { className: "c-mb-text", children: "\u4E0A\u4E0B" })
                    ]
                  }
                ),
                /* @__PURE__ */ L(
                  "div",
                  {
                    className: [
                      "c-mb-button",
                      "c-mb-button-c",
                      t.options.defaultJunctionPoint === "lr" ? "c-mb-button-on" : ""
                    ].join(" "),
                    style: { width: "50px" },
                    onClick: () => {
                      l("lr");
                    },
                    children: [
                      /* @__PURE__ */ p("svg", { className: "rg-icon", "aria-hidden": "true", children: /* @__PURE__ */ p("use", { xlinkHref: "#icon-lianjie_connecting5" }) }),
                      /* @__PURE__ */ p("span", { className: "c-mb-text", children: "\u5DE6\u53F3" })
                    ]
                  }
                )
              ] })
            ]
          }
        ),
        t.options.allowAutoLayoutIfSupport && t.options.isNeedShowAutoLayoutButton && /* @__PURE__ */ L(
          "div",
          {
            title: t.options.autoLayouting ? "\u70B9\u51FB\u505C\u6B62\u81EA\u52A8\u5E03\u5C40" : "\u70B9\u51FB\u5F00\u59CB\u81EA\u52A8\u8C03\u6574\u5E03\u5C40",
            className: ["c-mb-button", t.options.autoLayouting ? "c-mb-button-on" : ""].join(" "),
            onClick: () => {
              i();
            },
            children: [
              t.options.autoLayouting ? /* @__PURE__ */ p("svg", { className: "c-loading-icon rg-icon", "aria-hidden": "true", children: /* @__PURE__ */ p("use", { xlinkHref: "#icon-lianjiezhong" }) }) : /* @__PURE__ */ p(
                "svg",
                {
                  className: "rg-icon",
                  "aria-hidden": "true",
                  children: /* @__PURE__ */ p("use", { xlinkHref: "#icon-zidong" })
                }
              ),
              /* @__PURE__ */ p("span", { className: "c-mb-text", children: "\u81EA\u52A8" })
            ]
          }
        ),
        t.options.allowShowRefreshButton && /* @__PURE__ */ L(
          "div",
          {
            className: "c-mb-button",
            onClick: () => {
              o(), e();
            },
            children: [
              /* @__PURE__ */ p("svg", { className: "rg-icon", "aria-hidden": "true", children: /* @__PURE__ */ p("use", { xlinkHref: "#icon-ico_reset" }) }),
              /* @__PURE__ */ p("span", { className: "c-mb-text", children: "\u5237\u65B0" })
            ]
          }
        ),
        t.options.allowShowDownloadButton && /* @__PURE__ */ L(
          "div",
          {
            className: "c-mb-button",
            children: [
              /* @__PURE__ */ p("svg", { className: "rg-icon", "aria-hidden": "true", children: /* @__PURE__ */ p("use", { xlinkHref: "#icon-ziyuan" }) }),
              /* @__PURE__ */ p("span", { className: "c-mb-text", children: "\u4E0B\u8F7D" }),
              /* @__PURE__ */ L(
                "div",
                {
                  style: {
                    width: `${r}px`,
                    marginLeft: `${r * -1}px`
                  },
                  className: "c-mb-child-panel",
                  children: [
                    /* @__PURE__ */ L(
                      "div",
                      {
                        className: "c-mb-button c-mb-button-c",
                        style: { width: "50px" },
                        onClick: () => {
                          t.downloadAsImage("", "png");
                        },
                        children: [
                          /* @__PURE__ */ p("svg", { className: "rg-icon", "aria-hidden": "true", children: /* @__PURE__ */ p("use", { xlinkHref: "#icon-tupian" }) }),
                          /* @__PURE__ */ p("span", { className: "c-mb-text", children: "PNG" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ L(
                      "div",
                      {
                        className: "c-mb-button c-mb-button-c",
                        style: { width: "50px" },
                        onClick: () => {
                          t.downloadAsImage("", "jpg");
                        },
                        children: [
                          /* @__PURE__ */ p("svg", { className: "rg-icon", "aria-hidden": "true", children: /* @__PURE__ */ p("use", { xlinkHref: "#icon-tupian" }) }),
                          /* @__PURE__ */ p("span", { className: "c-mb-text", children: "JPG" })
                        ]
                      }
                    )
                  ]
                }
              )
            ]
          }
        )
      ]
    }
  );
}, so = (t) => {
  const e = G(X), o = G(oe), n = e.graphData.rootNode, i = he();
  ye(() => (Wt(), _("---------------------------graph mounted---------------------------"), e.setDom(i.current), e.ready(), o(), ve.on("change", s), () => {
    ve.off("change", s);
  }), []);
  const s = () => {
    e.fullscreen(ve.isFullscreen);
  };
  return /* @__PURE__ */ L(
    "div",
    {
      ref: i,
      style: { width: "100%", height: "100%", boxSizing: "border-box" },
      children: [
        n && e.options.showDebugPanel && /* @__PURE__ */ p(qt, {}),
        n && e.options.allowShowMiniToolBar === !0 && (t.GraphMiniToolBar ? /* @__PURE__ */ p(t.GraphMiniToolBar, { relationGraph: e }) : /* @__PURE__ */ p(io, {})),
        n && e.options.allowShowMiniView === !0 && (t.GraphMiniView ? /* @__PURE__ */ p(t.GraphMiniView, { relationGraph: e }) : /* @__PURE__ */ p(Kt, {})),
        n && (t.GraphPlug ? /* @__PURE__ */ p(t.GraphPlug, { relationGraph: e }) : /* @__PURE__ */ p("div", { className: "rel-graph-plug" })),
        n && /* @__PURE__ */ p(
          Xt,
          {
            nodeSlot: t.nodeSlot,
            lineSlot: t.lineSlot,
            canvasPlugSlot: t.canvasPlugSlot
          }
        )
      ]
    }
  );
}, ao = X.Provider, ro = oe.Provider, lo = (t) => {
  if (t.from === void 0)
    throw new Error(
      `error,line must has option[from]:${JSON.stringify(t)}`
    );
  if (t.to === void 0)
    throw new Error(
      `error,line must has option[to]:${JSON.stringify(t)}`
    );
  if (typeof t.from != "string")
    throw new TypeError(
      `error line from, must be string:${JSON.stringify(t)}`
    );
  if (typeof t.to != "string")
    throw new TypeError(
      `error line to, must be string:${JSON.stringify(t)}`
    );
  const e = {
    seeks_id: "",
    isReverse: !1,
    from: t.from,
    to: t.to,
    text: t.text !== void 0 ? t.text : "",
    color: t.color !== void 0 ? t.color : void 0,
    fontColor: t.fontColor !== void 0 ? t.fontColor : void 0,
    lineWidth: t.lineWidth !== void 0 ? t.lineWidth : void 0,
    lineShape: t.lineShape !== void 0 ? t.lineShape : void 0,
    styleClass: t.styleClass !== void 0 ? t.styleClass : void 0,
    isHide: t.isHide !== void 0 ? t.isHide : !1,
    arrow: t.arrow !== void 0 ? t.arrow : void 0,
    showStartArrow: t.showStartArrow !== void 0 ? t.showStartArrow : !1,
    disableDefaultClickEffect: t.disableDefaultClickEffect !== void 0 ? t.disableDefaultClickEffect : !1,
    showEndArrow: t.showEndArrow !== void 0 ? t.showEndArrow : !0,
    useTextPath: t.useTextPath !== void 0 ? t.useTextPath : !1,
    isHideArrow: t.isHideArrow !== void 0 ? t.isHideArrow : void 0,
    lineDirection: t.lineDirection !== void 0 ? t.lineDirection : void 0,
    data: t.data !== void 0 ? t.data : {}
  };
  return e.isHideArrow && (e.showEndArrow = !1, e.isHideArrow = !1), e;
}, co = ["arrow", "id", "reverseText", "isReverse"], ho = (t, e) => {
  !t || t.relations.forEach((o) => {
    const n = {};
    Object.keys(o).forEach((i) => {
      co.includes(i) || o[i] !== void 0 && (n[i] = o[i]);
    }), e.push(n);
  });
}, ce = {
  border: "border",
  ltrb: "ltrb",
  tb: "tb",
  lr: "lr"
}, Pe = (t) => {
  const e = {
    instanceId: "SeeksGraph",
    debug: !0,
    showDebugPanel: !1,
    backgrounImage: "",
    downloadImageFileName: "",
    disableZoom: !1,
    disableDragNode: !1,
    moveToCenterWhenRefresh: !1,
    zoomToFitWhenRefresh: !0,
    useAnimationWhenRefresh: !0,
    defaultFocusRootNode: !0,
    disableNodeClickEffect: !1,
    disableLineClickEffect: !1,
    allowShowZoomMenu: !0,
    allowAutoLayoutIfSupport: !0,
    allowShowRefreshButton: !0,
    allowShowDownloadButton: !0,
    backgrounImageNoRepeat: !1,
    allowShowMiniToolBar: !0,
    allowSwitchLineShape: !1,
    allowSwitchJunctionPoint: !1,
    isMoveByParentNode: !1,
    defaultExpandHolderPosition: "hide",
    defaultNodeColor: "#67C23A",
    checkedLineColor: "#FD8B37",
    defaultNodeFontColor: "#ffffff",
    defaultNodeBorderColor: "#90EE90",
    defaultNodeBorderWidth: 5,
    defaultLineColor: "#dddddd",
    defaultLineWidth: 1,
    defaultLineShape: 1,
    defaultNodeShape: 0,
    defaultNodeWidth: void 0,
    defaultNodeHeight: void 0,
    defaultShowLineLabel: !0,
    hideNodeContentByZoom: !1,
    defaultJunctionPoint: "border",
    disableDragCanvas: !1,
    lineUseTextPath: !1,
    viewSize: { width: 300, height: 300 },
    viewELSize: { width: 1300, height: 800, left: 0, top: 100 },
    viewNVInfo: { width: 1300, height: 800, x: 0, y: 100 },
    canvasNVInfo: { width: 1300, height: 800, x: 0, y: 100 },
    defaultLineMarker: {
      markerWidth: 12,
      markerHeight: 12,
      refX: 6,
      refY: 6,
      color: void 0,
      data: "M2,2 L10,6 L2,10 L6,6 L2,2"
    },
    allowShowMiniView: !1,
    allowShowSettingPanel: !1,
    allowShowMiniNameFilter: !0,
    fullscreen: !1,
    checkedNodeId: "",
    checkedLineId: "",
    layouts: [],
    layoutLabel: "",
    layoutName: "tree",
    layoutClassName: "",
    layoutDirection: "h",
    autoLayouting: !1,
    layouter: void 0,
    isNeedShowAutoLayoutButton: !1,
    canvasZoom: 100,
    showSingleNode: !0,
    showNodeLabel: !0,
    showNodeShortLabel: !0,
    canvasSize: {
      width: 2e3,
      height: 2e3
    },
    canvasOffset: {
      x: 25,
      y: 27,
      zoom_buff_x: 0,
      zoom_buff_y: 0
    }
  };
  return t.debug === !0 && _("RGOptions:user instance graphSetting:", t), t && Object.keys(t).forEach((n) => {
    const i = t[n];
    if (typeof i == "object") {
      _("RGOptions:user setting object:", n, i);
      const s = e[n];
      if (s)
        if (s && !Array.isArray(s) && i)
          Object.keys(s).forEach((l) => {
            s[l] = i[l];
          });
        else if (Array.isArray(s)) {
          const l = [];
          i.forEach((r) => {
            r && typeof r == "object" ? l.push(JSON.parse(JSON.stringify(r))) : l.push(r);
          }), e[n] = l;
        } else
          e[n] = i;
      else
        _("ignore option:", n);
    } else
      e[n] = i;
  }), (!e.layouts || e.layouts.length === 0) && (e.layouts = [
    {
      label: "\u4E2D\u5FC3",
      layoutName: "center",
      layoutDirection: "v"
    }
  ]), Array.isArray(e.layouts) || (e.layouts = [e.layouts]), e.layouts.forEach((n) => {
    uo(n, e);
  }), e;
}, uo = (t, e) => {
  if (t.layoutName === "SeeksCenterLayouter" || t.layoutName === "center") {
    t.label === void 0 && (t.label = "\u4E2D\u5FC3"), t.layoutClassName === void 0 && (t.layoutClassName = `seeks-layout-${t.layoutName}`), t.layoutDirection === void 0 && (t.layoutDirection = "h"), t.centerOffset_x === void 0 && (t.centerOffset_x = 0), t.centerOffset_y === void 0 && (t.centerOffset_y = 0);
    const o = t;
    o.distance_coefficient === void 0 && (o.distance_coefficient = 1);
  } else if (t.layoutName === "SeeksBidirectionalTreeLayouter" || t.layoutName === "tree") {
    t.label === void 0 && (t.label = "\u6811\u72B6"), t.layoutClassName === void 0 && (t.layoutClassName = `seeks-layout-${t.layoutName}`), t.layoutDirection === void 0 && (t.layoutDirection = "h"), t.centerOffset_x === void 0 && (t.centerOffset_x = 0), t.centerOffset_y === void 0 && (t.centerOffset_y = 0);
    const o = t;
    o.from === void 0 && (o.from = "top"), o.levelDistance === void 0 && (o.levelDistance = ""), o.min_per_width === void 0 && (o.min_per_width = 30), o.max_per_width === void 0 && (o.max_per_width = 200), o.min_per_height === void 0 && (o.min_per_height = 100), o.max_per_height === void 0 && (o.max_per_height = 500), (o.from === "top" || o.from === "bottom") && (o.layoutDirection = "v", e.defaultJunctionPoint = "tb", _("set layoutDirection=v"), _("set defaultJunctionPoint=tb")), (o.from === "left" || o.from === "right") && (e.defaultJunctionPoint = "lr", _("set defaultJunctionPoint=lr"));
  } else
    (t.layoutName === "fixed" || t.layoutName === "force") && (e.moveToCenterWhenRefresh = !1, e.zoomToFitWhenRefresh = !1);
}, fo = (t) => {
  if (t.id === void 0)
    throw new Error(`Node must has option[id]:${JSON.stringify(t)}`);
  const e = {
    seeks_id: -1,
    id: t.id,
    text: t.text !== void 0 ? t.text : "",
    type: t.type !== void 0 ? t.type : "node",
    isHide: t.isHide !== void 0 ? t.isHide : !1,
    expanded: t.expanded !== void 0 ? t.expanded : !0,
    junctionPoint: t.junctionPoint !== void 0 ? t.junctionPoint : void 0,
    selected: t.selected !== void 0 ? t.selected : !1,
    styleClass: t.styleClass !== void 0 ? t.styleClass : "",
    nodeShape: t.nodeShape !== void 0 ? t.nodeShape : void 0,
    borderWidth: t.borderWidth !== void 0 ? t.borderWidth : void 0,
    borderColor: t.borderColor !== void 0 ? t.borderColor : void 0,
    fontColor: t.fontColor !== void 0 ? t.fontColor : void 0,
    color: t.color !== void 0 ? t.color : void 0,
    opacity: t.opacity !== void 0 ? t.opacity : 1,
    fixed: t.fixed !== void 0 ? t.fixed : !1,
    width: t.width !== void 0 ? t.width : void 0,
    height: t.height !== void 0 ? t.height : void 0,
    x: t.x !== void 0 ? t.x : 0,
    y: t.y !== void 0 ? t.y : 0,
    offset_x: t.offset_x !== void 0 ? t.offset_x : 0,
    offset_y: t.offset_y !== void 0 ? t.offset_y : 0,
    expandHolderPosition: t.expandHolderPosition !== void 0 ? t.expandHolderPosition : void 0,
    innerHTML: t.innerHTML !== void 0 ? t.innerHTML : void 0,
    html: t.html !== void 0 ? t.html : void 0,
    disableDefaultClickEffect: t.disableDefaultClickEffect !== void 0 ? t.disableDefaultClickEffect : void 0,
    disableDrag: t.disableDrag !== void 0 ? t.disableDrag : !1,
    singleNode: !1,
    data: t.data !== void 0 ? t.data : {},
    isShow: !0,
    Fx: 0,
    Fy: 0,
    targetNodes: [],
    targetFrom: [],
    targetTo: [],
    lot: {
      childs: [],
      parent: void 0,
      eached: !1,
      strength: 0
    },
    el: { offsetWidth: 50, offsetHeight: 50 }
  };
  return e.width !== void 0 && (e.el.offsetWidth = e.width), e.height !== void 0 && (e.el.offsetHeight = e.height), e;
}, po = [
  "Fx",
  "Fy",
  "appended",
  "el",
  "targetFrom",
  "targetNodes",
  "targetTo",
  "type",
  "lot",
  "seeks_id"
], _o = (t) => {
  if (!t)
    return;
  const e = {};
  return Object.keys(t).forEach((o) => {
    po.includes(o) || t[o] !== void 0 && (e[o] = t[o]);
  }), e;
};
let mo = 0;
class go {
  constructor(e, o) {
    N(this, "instanceId", "");
    N(this, "options");
    N(this, "listeners");
    this.listeners = o, this.options = Pe(e), this.enableDebugLog(this.options.debug), this.instanceId = `RGIns-${mo++}`, this.options.instanceId = this.instanceId, _("new RelationGraph:", this);
  }
  enableDebugLog(e) {
    this.options.debug = e, window && (window.relationGraphDebug = e);
  }
  refreshNVAnalysisInfo() {
    _("[interface]refreshNVAnalysisInfo");
  }
  resetViewSize() {
    _("[interface]resetViewSize");
  }
  doLayout() {
    _("[interface]doLayout");
  }
}
class vo extends go {
  constructor(o, n) {
    super(o, n);
    N(this, "graphData", {
      rootNode: void 0,
      nodes: [],
      links: []
    });
    N(this, "tmpData", {
      nodes_map: {},
      links_map: {}
    });
    N(this, "seeksNodeIdIndex", 0);
    N(this, "allLineColors", []);
    N(this, "userLayouerClass");
  }
  ready() {
    this.initLayouter(), this.resetViewSize(), this.refreshNVAnalysisInfo();
  }
  setOptions(o, n) {
    this.options = Pe(o), this.enableDebugLog(this.options.debug), this.options.instanceId = this.instanceId, this.initLayouter(), this.resetViewSize(), this.doLayout(), this.resetViewSize(), n && n(this);
  }
  setLayouter(o) {
    _("setLayouterClass::", o), this.userLayouerClass = o;
  }
  initLayouter() {
    if (this.userLayouerClass)
      _("Use user layouter:", this.userLayouerClass), this.options.layouter = this.userLayouerClass;
    else if (this.options.layouts && this.options.layouts.length > 0) {
      const o = this.options.layouts[0];
      _(
        "[change layout]Create default layouter\uFF1A",
        this.options.layoutName
      ), o.layouter ? this.options.layouter = o.layouter : this.options.layouter = lt(
        o,
        this.options
      );
    } else
      _("\u4F60\u9700\u8981\u8BBE\u7F6Elayouts\u6765\u6307\u5B9A\u5F53\u524D\u56FE\u8C31\u53EF\u4EE5\u4F7F\u7528\u7684\u5E03\u5C40\u5668\uFF01");
    _("Layouter instance:", this.options.layouter);
  }
  setJsonData(o, n, i) {
    arguments.length === 2 && typeof n == "function" && (i = n, n = !0), this.graphData.nodes = [], this.graphData.links = [], this.tmpData.nodes_map = {}, this.tmpData.links_map = {}, this.graphData.rootNode = void 0, _("set jsonData:", o);
    const s = o.rootId;
    this.loadGraphJsonData(o), s && (this.graphData.rootNode = this.tmpData.nodes_map[s]), !this.graphData.rootNode && this.graphData.nodes.length > 0 && (this.graphData.rootNode = this.graphData.nodes[0]), this.applyNewDataToCanvas(), n && (_("resetViewSize:", n), this.resetViewSize()), setTimeout(() => {
      this.doLayout(), i && i(this);
    }, 500);
  }
  applyNewDataToCanvas() {
    if (this.graphData.rootNode)
      this.options.defaultFocusRootNode && this.setCheckedNode(this.graphData.rootNode.id);
    else
      throw new Error("\u6CA1\u6709\u8BBE\u7F6E\u6839\u8282\u70B9[rootId]\uFF01\u4E5F\u65E0\u6CD5\u83B7\u53D6\u6839\u8282\u70B9!");
  }
  appendJsonData(o, n, i) {
    arguments.length === 2 && typeof n == "function" && (i = n, n = !0), _("appendData:", o), this.loadGraphJsonData(o), this.applyNewDataToCanvas(), n && this.doLayout(), i && i(this);
  }
  loadNodes(o) {
    o.forEach((n) => {
      let i = fo(n), s = !1;
      this.tmpData.nodes_map[i.id] ? i = this.tmpData.nodes_map[i.id] : s = !0, s && (this.tmpData.nodes_map[i.id] = i, this.graphData.nodes.push(i), i.seeks_id = this.seeksNodeIdIndex++);
    });
  }
  loadLines(o) {
    o.forEach((n) => {
      let i = !1, s, l;
      if (typeof n.from == "object" ? s = n.from : s = this.tmpData.nodes_map[n.from], typeof n.to == "object" ? l = n.to : l = this.tmpData.nodes_map[n.to], !s) {
        console.error("\u627E\u4E0D\u5230from:", n);
        return;
      }
      if (!l) {
        console.error("\u627E\u4E0D\u5230to:", n);
        return;
      }
      const r = `${s.seeks_id}-${l.seeks_id}`, a = `${l.seeks_id}-${s.seeks_id}`, h = lo(n);
      let u, d = !1;
      this.tmpData.links_map[r] ? u = this.tmpData.links_map[r] : this.tmpData.links_map[a] ? (u = this.tmpData.links_map[a], d = !0) : (i = !0, u = {
        seeks_id: r,
        fromNode: s,
        toNode: l,
        appended: !1,
        relations: []
      });
      let f = h.arrow;
      h.isHideArrow || (f = this.getLineArrow(h.color)), s.targetNodes || (s.targetNodes = []), l.targetNodes || (l.targetNodes = []), s.targetNodes.includes(l) || s.targetNodes.push(l), l.targetNodes.includes(s) || l.targetNodes.push(s), s.targetTo.includes(l) || s.targetTo.push(l), l.targetFrom.includes(s) || l.targetFrom.push(s), h.seeks_id = `${u.seeks_id}-${u.relations.length}`, h.isReverse = d, h.arrow = f, u.relations.push(h), i && (this.graphData.links.push(u), this.tmpData.links_map[r] = u, u.appended = !1);
    });
  }
  flatNodeData(o, n, i, s) {
    o.forEach((l) => {
      i.push(l), n && s.push({
        from: n.id,
        to: l.id
      });
      const r = l.children;
      r && r.length > 0 && this.flatNodeData(r, l, i, s);
    });
  }
  loadGraphJsonData(o) {
    if (!o.lines) {
      console.error(
        "[relation-graph] For compatibility with older versionsm, Use jsonData.relations as jsonData.lines, It is recommended that you define your data using"
      );
      return;
    }
    const n = [], i = [];
    this.flatNodeData(o.nodes, null, n, i), o.lines.forEach((s) => {
      i.push(s);
    }), this.loadNodes(n), _("Nodes is initialized"), this.loadLines(i);
  }
  getLineArrow(o, n = !1, i = !1) {
    const s = n ? "start-" : "";
    if (i)
      return `${this.options.instanceId}-${s}arrow-checked`;
    if (o) {
      const l = U.getColorId(o);
      return this.allLineColors.map((r) => r.id).includes(l) || this.allLineColors.push({ id: l, color: o }), `${this.options.instanceId}-${s}arrow-${l}`;
    } else
      return `${this.options.instanceId}-${s}arrow-default`;
  }
  getNodes() {
    return this.graphData.nodes;
  }
  getLinks() {
    return this.graphData.links;
  }
  getGraphJsonData() {
    const o = [], n = [];
    return this.graphData.nodes.forEach((i) => {
      const s = _o(i);
      s && o.push(s);
    }), this.graphData.links.forEach((i) => {
      ho(i, n);
    }), {
      rootId: this.graphData.rootNode ? this.graphData.rootNode.id : "",
      nodes: o,
      lines: n
    };
  }
  getGraphJsonOptions() {
    const o = {}, n = [
      "layouter",
      "autoLayouting",
      "canvasNVInfo",
      "canvasOffset",
      "canvasZoom",
      "fullscreen",
      "instanceId",
      "layoutClassName",
      "layoutDirection",
      "layoutLabel",
      "layoutName",
      "resetViewSize",
      "viewELSize",
      "viewNVInfo",
      "viewSize",
      "canvasSize"
    ];
    return Object.keys(this.options).forEach((i) => {
      n.includes(i) || (o[i] = this.options[i]);
    }), o;
  }
  printGraphJsonData() {
    _("graph options:", JSON.stringify(this.getGraphJsonOptions())), _("graph json data:", JSON.stringify(this.getGraphJsonData()));
  }
  setCheckedNode(o) {
    this.options.checkedNodeId = o;
  }
  setCheckedLine(o) {
    this.options.checkedLineId = o;
  }
  selectNode(o, n) {
    o.selected = n;
  }
  getNodeById(o) {
    for (let n = 0; n < this.graphData.nodes.length; n++)
      if (this.graphData.nodes[n].id === o)
        return this.graphData.nodes[n];
  }
  addNodes(o, n = !1) {
    this.loadNodes(o), n && this.doLayout();
  }
  addLines(o, n = !1) {
    this.loadLines(o), n && this.doLayout();
  }
  removeNodeById(o) {
    let n = 0;
    for (let s = 0; s < this.graphData.links.length; s++) {
      const l = this.graphData.links[s];
      (l.fromNode.id === o || l.toNode.id === o) && (this.graphData.links.splice(s, 1), s--, n++);
    }
    _("\u5220\u9664\u5BF9\u5E94\u7684\u7EBF\u4E2A\u6570\uFF1A", o, n);
    let i = 0;
    for (let s = 0; s < this.graphData.nodes.length; s++)
      if (this.graphData.nodes[s].id === o) {
        const l = this.graphData.nodes[s];
        l.targetNodes.forEach((r) => {
          const a = r.targetNodes.indexOf(l);
          a !== -1 && r.targetNodes.splice(a, 1);
        }), this.graphData.nodes.splice(s, 1), delete this.tmpData.nodes_map[l.id], i++;
        break;
      }
    _("\u5220\u9664\u5BF9\u5E94\u7684\u8282\u70B9\u4E2A\u6570\uFF1A", o, i);
  }
  removeLinkById(o, n) {
    for (let i = 0; i < this.graphData.links.length; i++) {
      const s = this.graphData.links[i];
      (s.fromNode.id === o || s.toNode.id === n) && (this.graphData.links.splice(i, 1), i--);
    }
  }
  setNodePosition(o, n, i) {
    o.x = n, o.y = i;
  }
}
class yo extends vo {
  constructor(o, n) {
    super(o, n);
    N(this, "$dom");
    N(this, "$canvasDom");
  }
  setDom(o) {
    this.$dom = o;
  }
  setCanvasDom(o) {
    this.$canvasDom = o;
  }
  fullscreen(o) {
    o === void 0 ? (this.options.fullscreen = !this.options.fullscreen, ve.toggle(this.$dom).then(() => {
      setTimeout(() => {
        this.refreshNVAnalysisInfo();
      }, 1e3);
    })) : (this.options.fullscreen = o, setTimeout(() => {
      this.refreshNVAnalysisInfo();
    }, 1e3));
  }
}
class xo extends yo {
  constructor(o, n) {
    super(o, n);
    N(this, "zoomCenter_of_newSize", { x: 0, y: 0 });
  }
  zoom(o, n) {
    if (this.options.canvasZoom + o < 10)
      return;
    const i = this.options.canvasZoom + o, s = this.showZoomCenter(o, n);
    if (!s) {
      _("Can not zoom");
      return;
    }
    this.options.canvasOffset.x += s.buff_x, this.options.canvasOffset.y += s.buff_y, this.options.canvasZoom = i, this.refreshNVAnalysisInfo();
  }
  setZoom(o, n) {
    const i = Math.floor(o - this.options.canvasZoom);
    this.zoom(i, n);
  }
  showZoomCenter(o, n) {
    if (!this.$dom)
      return;
    const i = this.options.canvasZoom / 100, s = (this.options.canvasZoom + o) / 100, l = this.analysisByZoom(i, n), r = this.analysisByZoom(s, n), a = s / i, h = 0, u = 0, d = s / i, f = 0, g = 0;
    this.zoomCenter_of_newSize.x = a * l.NMViewBuff.x + u * l.NMViewBuff.y + f, this.zoomCenter_of_newSize.y = h * l.NMViewBuff.x + d * l.NMViewBuff.y + g;
    const x = l.NMViewBuff.x - this.zoomCenter_of_newSize.x, v = l.NMViewBuff.y - this.zoomCenter_of_newSize.y;
    this.zoomCenter_of_newSize.x += l.NMCanvasCenter.x, this.zoomCenter_of_newSize.y += l.NMCanvasCenter.y;
    let w = l.NMCanvasStart.x - l.NMCanvasCenter.x, z = l.NMCanvasStart.y - l.NMCanvasCenter.y, P = a * w + u * z + f, b = h * w + d * z + g;
    return r.NMCanvasStart.x = x + l.NMCanvasCenter.x + P, r.NMCanvasStart.y = x + l.NMCanvasCenter.y + b, w = l.NMCanvasEnd.x - l.NMCanvasCenter.x, z = l.NMCanvasEnd.y - l.NMCanvasCenter.y, P = a * w + u * z + f, b = h * w + d * z + g, r.NMCanvasEnd.x = x + l.NMCanvasCenter.x + P, r.NMCanvasEnd.y = x + l.NMCanvasCenter.y + b, l.NMCanvasOffsetBuff.x = x, l.NMCanvasOffsetBuff.y = v, {
      buff_x: x,
      buff_y: v
    };
  }
  analysisByZoom(o, n) {
    const i = {
      NMViewPosition: { x: 0, y: 0 },
      NMViewCenter: { x: 0, y: 0 },
      NMCanvasCenter: { x: 0, y: 0 },
      NMCanvasStart: { x: 0, y: 0 },
      NMCanvasEnd: { x: 0, y: 0 },
      NMZoomCenter: { x: 0, y: 0 },
      NMViewBuff: { x: 0, y: 0 },
      NMCanvasOffsetBuff: { x: 0, y: 0 },
      NMCanvasSize: { width: 0, height: 0 }
    }, s = jt(), l = Tt(), r = this.$dom.getBoundingClientRect();
    i.NMViewPosition.x = r.left, i.NMViewPosition.y = r.top, r.width + i.NMViewPosition.x > s ? i.NMViewCenter.x = (s - r.left) / 2 : i.NMViewCenter.x = r.width / 2, r.height + i.NMViewPosition.y > l ? i.NMViewCenter.y = (l - r.top) / 2 : i.NMViewCenter.y = r.height / 2;
    const a = this.options.canvasSize.width * o, h = this.options.canvasSize.height * o;
    i.NMCanvasCenter.x = this.options.canvasOffset.x + this.options.canvasSize.width / 2, i.NMCanvasCenter.y = this.options.canvasOffset.y + this.options.canvasSize.height / 2, i.NMCanvasStart.x = i.NMCanvasCenter.x - a / 2, i.NMCanvasStart.y = i.NMCanvasCenter.y - h / 2, i.NMCanvasEnd.x = i.NMCanvasCenter.x + a / 2, i.NMCanvasEnd.y = i.NMCanvasCenter.y + h / 2, i.NMZoomCenter.x = i.NMViewCenter.x, i.NMZoomCenter.y = i.NMViewCenter.y, n && (i.NMZoomCenter.x = n.x - i.NMViewPosition.x, i.NMZoomCenter.y = n.y - i.NMViewPosition.y);
    let u = i.NMViewCenter.x - i.NMCanvasCenter.x, d = i.NMViewCenter.y - i.NMCanvasCenter.y;
    return n && (u = i.NMZoomCenter.x - i.NMCanvasCenter.x, d = i.NMZoomCenter.y - i.NMCanvasCenter.y), i.NMViewBuff.x = u, i.NMViewBuff.y = d, i.NMCanvasSize.width = a, i.NMCanvasSize.height = h, i;
  }
}
class wo extends xo {
  constructor(e, o) {
    super(e, o);
  }
  doLayout() {
    if (!this.options.layouter) {
      _("no layouter");
      return;
    }
    if (!this.graphData.rootNode) {
      _("Cant find rootNode!");
      return;
    }
    _("node size\uFF1A", this.graphData.nodes.length), this.options.layouter.placeNodes(
      this.graphData.nodes,
      this.graphData.rootNode
    );
  }
  refresh(e) {
    this.resetViewSize(), this.options.layouter && this.options.layouter.refresh(), this.playShowEffect(e);
  }
  resetViewSize() {
    !this.options || (_("resetViewSize"), this.$dom ? (this.options.viewSize.width = this.$dom.getBoundingClientRect().width, this.options.viewSize.height = this.$dom.getBoundingClientRect().height, this.options.canvasZoom = 100, this.options.canvasOffset.x = this.options.viewNVInfo.width / 2, this.options.canvasOffset.y = this.options.viewNVInfo.height / 2, this.refreshNVAnalysisInfo()) : _("Graph div dom not ready!"));
  }
  dataUpdated() {
    this.options.canvasOffset.x += 1, this.options.canvasOffset.y += 1, this.options.canvasOffset.x -= 1, this.options.canvasOffset.y -= 1;
  }
  refreshNVAnalysisInfo() {
    if (!this.$dom) {
      console.error("cannot get view size !");
      return;
    }
    const e = {
      NMCanvasCenter: { x: 0, y: 0 }
    }, o = this.$dom.getBoundingClientRect();
    this.options.viewNVInfo.x = o.left, this.options.viewNVInfo.y = o.top, this.options.viewNVInfo.width = o.width, this.options.viewNVInfo.height = o.height;
    const n = this.options.canvasSize.width * (this.options.canvasZoom / 100), i = this.options.canvasSize.height * (this.options.canvasZoom / 100);
    e.NMCanvasCenter.x = this.options.canvasOffset.x + this.options.canvasSize.width / 2, e.NMCanvasCenter.y = this.options.canvasOffset.y + this.options.canvasSize.height / 2, this.options.canvasNVInfo.x = e.NMCanvasCenter.x - n / 2, this.options.canvasNVInfo.y = e.NMCanvasCenter.y - i / 2, this.options.canvasNVInfo.width = n, this.options.canvasNVInfo.height = i, this.options.viewELSize.width = o.width, this.options.viewELSize.height = o.height, this.options.viewELSize.left = o.left, this.options.viewELSize.top = o.top;
  }
  getStuffSize() {
    let e = 9999999, o = 9999999, n = 0, i = 0;
    this.graphData.nodes.forEach((a) => {
      a.x < e && (e = a.x), a.x > n && (n = a.x + a.el.offsetWidth), a.y < o && (o = a.y), a.y > i && (i = a.y + a.el.offsetHeight);
    });
    const s = 100, l = n - e + s, r = i - o + s;
    return {
      width: l,
      height: r,
      minX: e,
      maxX: n,
      minY: o,
      maxY: i
    };
  }
  getNodesCenter() {
    const e = this.getStuffSize();
    _("getStuffSize:", e);
    const o = e.minX + (e.width - 100) / 2, n = e.minY + (e.height - 100) / 2;
    return {
      x: o,
      y: n
    };
  }
  setCanvasCenter(e, o) {
    const n = this.options.viewSize.width / 2, i = this.options.viewSize.height / 2;
    this.setCanvasOffset(n - e, i - o);
  }
  setCanvasOffset(e, o) {
    this.options.canvasOffset.x = e, this.options.canvasOffset.y = o;
  }
  playShowEffect(e) {
    if (this.graphData.nodes.length === 0) {
      _("relation-graph:move to center: data not ready!");
      return;
    }
    if (_(
      "playShowEffect:",
      this.options.moveToCenterWhenRefresh,
      this.options.zoomToFitWhenRefresh
    ), this.options.moveToCenterWhenRefresh)
      if (this.options.useAnimationWhenRefresh) {
        const o = this.getNodesCenter();
        _("center:", o.x, o.y);
        const n = this.options.viewSize.width / 2 - o.x, i = this.options.viewSize.height / 2 - o.y;
        this.animateGoto(n, i, 500, () => {
          this.zoomToFitWhenRefresh(e);
        });
      } else {
        const o = this.getNodesCenter();
        this.setCanvasCenter(o.x, o.y), this.zoomToFitWhenRefresh(e);
      }
    else
      this.zoomToFitWhenRefresh(e);
    if (!this.graphData.rootNode || Number.isNaN(this.graphData.rootNode.x)) {
      _("rootNode.x is NaN, graph is currently hidden?");
      return;
    }
    this.options.layoutName !== "force" && this.placeSingleNode();
  }
  zoomToFitWhenRefresh(e) {
    this.options.zoomToFitWhenRefresh ? this.zoomToFit(e) : e && e(this);
  }
  findChilds(e, o) {
    o.push(e), e.targetNodes.forEach((n) => {
      o.includes(n) || this.findChilds(n, o);
    });
  }
  placeSingleNode() {
    let e = 0;
    const o = [];
    if (this.findChilds(this.graphData.rootNode, o), this.graphData.nodes.forEach((n) => {
      o.includes(n) || (n.x = Math.floor(Math.random() * 200) - 100, n.y = Math.floor(Math.random() * 200) - 100, n.singleNode = !0, n.lot || (n.lot = { childs: [] }), n.lot.placed = !0, e++);
    }), e > 0) {
      _("sigle nodes:", e);
      const n = Pe({}), i = new we(
        { layoutName: "FixSingleNodes" },
        n
      );
      i.__origin_nodes = this.graphData.nodes, i.justLayoutSingleNode = !0, i.byLine = !1, i.maxLayoutTimes = 100, i.autoLayout();
    }
  }
  zoomToFit(e) {
    const o = this.getStuffSize(), n = this.options.viewSize.width / o.width, i = this.options.viewSize.height / o.height, s = Math.min(n, i, 1);
    _("animateToZoom:", {
      stuffSize: o,
      zoomPercent: s,
      zoomPercentX: n,
      zoomPercentY: i,
      viewSize: this.options.viewSize
    }), this.options.useAnimationWhenRefresh ? this.animateToZoom(s * 100, 300, e) : (this.setZoom(s * 100), e && e(this));
  }
  animateGoto(e, o, n, i) {
    _("animateGoto:", e, o);
    const s = e - this.options.canvasOffset.x, l = o - this.options.canvasOffset.y, r = n, a = 5, h = Math.round(s / a), u = Math.round(l / a), d = r / a;
    this.animateStepAction(
      0,
      d,
      a,
      () => {
        this.options.canvasOffset.x += h, this.options.canvasOffset.y += u;
      },
      () => {
        i && i(this);
      }
    );
  }
  animateToZoom(e, o, n) {
    const i = e - this.options.canvasZoom, s = o, l = 5, r = Math.round(i / l), a = s / l;
    _("animateToZoom:", i, r), this.animateStepAction(
      0,
      a,
      l,
      () => {
        this.zoom(r);
      },
      () => {
        this.setZoom(e), n && n(this);
      }
    );
  }
  animateStepAction(e, o, n, i, s) {
    e < n ? (i(e, n), setTimeout(() => {
      this.animateStepAction(
        e + 1,
        o,
        n,
        i,
        s
      );
    }, o)) : s();
  }
  startAutoLayout() {
    this.options.autoLayouting = !this.options.autoLayouting, this.options.layouter && (this.options.autoLayouting ? this.options.layouter.autoLayout ? this.options.layouter.autoLayout(!0) : console.log("\u5F53\u524D\u5E03\u5C40\u4E0D\u652F\u6301\u81EA\u52A8\u5E03\u5C40\uFF01") : this.options.layouter.stop ? this.options.layouter.stop() : console.log("\u5F53\u524D\u5E03\u5C40\u4E0D\u652F\u6301\u81EA\u52A8\u5E03\u5C40stop\uFF01"));
  }
  stopAutoLayout() {
    this.options.autoLayouting = !1, this.options.layouter && (this.options.layouter.stop ? this.options.layouter.stop() : console.log("\u5F53\u524D\u5E03\u5C40\u4E0D\u652F\u6301\u81EA\u52A8\u5E03\u5C40stop\uFF01"));
  }
}
class bo extends wo {
  constructor(e, o) {
    super(e, o);
  }
  setDefaultLineShape(e) {
    this.options.defaultLineShape = e;
  }
  setDefaultJunctionPoint(e) {
    this.options.defaultJunctionPoint = e;
  }
  updateNodeOffsetSize(e, o, n) {
    e.el.offsetWidth = o, e.el.offsetHeight = n;
  }
  onNodeClick(e, o) {
    _("onNodeClick:", e), this.options.disableNodeClickEffect !== !0 && e.disableDefaultClickEffect !== !0 && this.setCheckedNode(e.id), this.listeners["on-node-click"] && this.listeners["on-node-click"](e, o);
  }
  onLineClick(e, o, n) {
    _("onLineClick:", "line:", e, "link:", o), this.options.disableLineClickEffect !== !0 && e.disableDefaultClickEffect !== !0 && (this.setCheckedLine(o.seeks_id), this.selectNode(o.fromNode, !0), this.selectNode(o.toNode, !0), setTimeout(() => {
      this.selectNode(o.fromNode, !1), this.selectNode(o.toNode, !1);
    }, 2e3)), this.listeners["on-line-click"] && this.listeners["on-line-click"](e, o, n);
  }
  expandOrCollapseNode(e, o) {
    e.expanded === !1 ? this.expandNode(e, o) : this.collapseNode(e, o);
  }
  expandNode(e, o) {
    _("onNodeExpand:", e), e.expanded = !0, e.lot.childs.forEach((n) => {
      n.isShow = !0;
    }), this.listeners["on-node-expand"] && this.listeners["on-node-expand"](e, o);
  }
  collapseNode(e, o) {
    _("onNodeCollapse:", e), e.expanded = !1, e.lot.childs.forEach((n) => {
      n.isShow = !1;
    }), this.listeners["on-node-collapse"] && this.listeners["on-node-collapse"](e, o);
  }
  focusRootNode() {
    _("relation-graph:focusRootNode"), this.graphData.rootNode && this.handleSelect(this.graphData.rootNode);
  }
  focusNodeById(e) {
    this.graphData.nodes.forEach((o) => {
      o.id === e && this.handleSelect(o);
    });
  }
  querySearchAsync(e, o) {
    if (_("fetch-suggestions", e), e = e.trim(), e === "")
      return;
    const n = [];
    this.graphData.nodes.forEach((i) => {
      _("fetch:", i.text), i.text.includes(e) && n.push(i);
    }), _("fetched:", n.length), o(n);
  }
  handleSelect(e) {
    _("checked:", e), scrollTo({
      top: this.$dom.offsetTop
    }), this.animateToZoom(100, 300, () => {
      const o = e.width || 50, n = e.height || 50, i = e.x * -1 + this.options.viewSize.width / 2 - o / 2, s = e.y * -1 + this.options.viewSize.height / 2 - n / 2;
      this.animateGoto(i, s, 500, () => {
        this.options.checkedNodeId = e.id, this.refreshNVAnalysisInfo();
      });
    });
  }
}
class Co extends bo {
  constructor(e, o) {
    super(e, o);
  }
  dataURLToBlob(e) {
    const o = e.split(","), n = o[0].match(/:(.*?);/)[1], i = atob(o[1]);
    let s = i.length;
    const l = new Uint8Array(s);
    for (; s--; )
      l[s] = i.charCodeAt(s);
    return new Blob([l], { type: n });
  }
  downloadAsImage(e, o = "png") {
    if (this.listeners["on-image-download"] && this.listeners["on-image-download"](
      this.$canvasDom,
      o
    ) === !1)
      return;
    if (this.graphData.nodes.length === 0)
      throw new Error("\u6CA1\u6709\u8282\u70B9\uFF0C\u6CA1\u6709\u5185\u5BB9\u9700\u8981\u5BFC\u51FA\uFF01");
    o || (o = "png"), e || (e = this.options.downloadImageFileName), e || (e = `SeeksRelationGraph-${(Math.random() * 1e5).toFixed(0)}`), this.options.checkedNodeId = "";
    const n = this.options.canvasZoom;
    this.options.canvasZoom = 100;
    const i = this.$canvasDom, s = i.clientWidth, l = i.clientHeight;
    let r = 999999, a = 999999, h = 0, u = 0;
    const d = 100;
    this.graphData.nodes.forEach((C) => {
      C.x < r && (r = C.x), C.x > h && (h = C.x + C.el.offsetWidth), C.y < a && (a = C.y), C.y > u && (u = C.y + C.el.offsetHeight);
    });
    const f = r - d, g = a - d;
    this.graphData.nodes.forEach((C) => {
      C.x = C.x - f, C.y = C.y - g;
    });
    const x = this.options.canvasOffset.x, v = this.options.canvasOffset.y;
    this.options.canvasOffset.x = d * -1, this.options.canvasOffset.y = d * -1, _("offset:", {
      _origin_offset_x: x,
      _origin_offset_y: v,
      _min_x: r,
      _min_y: a,
      _max_x: h,
      _max_y: u
    });
    const w = h - r + 200 + d * 2, z = u - a + 100 + d * 2, P = window.devicePixelRatio;
    this.options.canvasSize.width = w * P, this.options.canvasSize.height = z * P;
    const b = {
      left: this.$dom.offsetLeft - i.getBoundingClientRect().left,
      top: this.$dom.offsetTop - i.getBoundingClientRect().top,
      canvas_offsetLeft: i.offsetLeft,
      canvas_offsetTop: i.offsetTop,
      canvas_left: i.getBoundingClientRect().left,
      canvas_top: i.getBoundingClientRect().top
    };
    window.scrollTo(0, 0), _("export image:", {
      relationGraphPosition: b,
      orign_width: s,
      orign_height: l,
      _image_width: w,
      _image_height: z,
      _min_x: r,
      _min_y: a,
      _max_x: h,
      _max_y: u,
      devicePixelRatio: window.devicePixelRatio
    });
    const S = document.createElement("canvas");
    S.width = w * P, S.height = z * P, S.style.backgroundColor = getComputedStyle(
      i.parentElement,
      null
    ).backgroundColor, _("canvas.style.backgroundColor:", S.style.backgroundColor), S.style.width = `${w * P}px`, S.style.height = `${z * P}px`, S.getContext("2d").scale(1, 1);
    const W = {
      backgroundColor: S.style.backgroundColor,
      scale: P,
      canvas: S,
      logging: !0,
      width: w,
      height: z,
      useCORS: !0
    };
    setTimeout(() => {
      this.createImage(i, W, o, e, () => {
        this.options.canvasSize.width = s, this.options.canvasSize.height = l, this.options.canvasOffset.x = x, this.options.canvasOffset.y = v, this.options.canvasZoom = n, this.graphData.nodes.forEach((C) => {
          C.x = C.x + f, C.y = C.y + g;
        });
      });
    }, 1e3);
  }
  createImage(e, o, n, i, s) {
    _("html2canvas:", o, n, i), Ot(e, o).then((l) => {
      const r = document.body.appendChild(l);
      r.style.display = "none";
      const a = this.dataURLToBlob(r.toDataURL(`image/${n}`));
      document.body.removeChild(r);
      const h = document.createElement("a");
      h.style.display = "none";
      try {
        window.navigator.msSaveOrOpenBlob ? window.navigator.msSaveOrOpenBlob(a, `${i}.${n}`) : (h.setAttribute("href", URL.createObjectURL(a)), h.setAttribute("download", `${i}.${n}`), document.body.appendChild(h), h.click(), _("click ok!"), URL.revokeObjectURL(a), _("revokeObjectURL ok!"), document.body.removeChild(h), _("removeChild ok!")), s && s();
      } catch (u) {
        _("[SEEKS Graph]Create and download image error:", u);
      }
    });
  }
}
class Mo extends Co {
  constructor(e, o) {
    super(e, o);
  }
  createReturnValue(e, o) {
    return { path: e, textPosition: o };
  }
  createLinePath(e, o, n) {
    const i = e.fromNode, s = e.toNode;
    n || (n = 0);
    const l = o.lineShape || this.options.defaultLineShape || 1, r = o.lineDirection || this.options.layoutDirection || "h";
    let a = i.x, h = i.y, u = s.x, d = s.y;
    const f = { x: 0, y: 0, rotate: 0 };
    if (Number.isNaN(a) || Number.isNaN(h))
      return _("error start node:", i), f.x = 50, f.y = 50, f.rotate = 0, this.createReturnValue("M 0 0 L 100 100", f);
    if (Number.isNaN(u) || Number.isNaN(d))
      return _("error start point:", i), f.x = 50, f.y = 50, f.rotate = 0, this.createReturnValue("M 0 0 L 100 100", f);
    let g = i.el.offsetWidth || i.width || 60, x = i.el.offsetHeight || i.height || 60;
    if (Number.isNaN(g) || Number.isNaN(x))
      return f.x = 50, f.y = 50, f.rotate = 0, this.createReturnValue("M 0 0 L 100 100", f);
    let v = s.el.offsetWidth || s.width || 60, w = s.el.offsetHeight || s.height || 60;
    if (Number.isNaN(v) || Number.isNaN(w))
      return f.x = 50, f.y = 50, f.rotate = 0, this.createReturnValue("M 0 0 L 100 100", f);
    o.isReverse && ([a, h, u, d, g, x, v, w] = [
      u,
      d,
      a,
      h,
      v,
      w,
      g,
      x
    ]);
    const z = [
      a,
      h,
      u,
      d,
      g,
      x,
      v,
      w,
      this.options.defaultNodeShape,
      o.isReverse,
      e.relations.length,
      n
    ], P = [
      u,
      d,
      a,
      h,
      v,
      w,
      g,
      x,
      this.options.defaultNodeShape,
      !o.isReverse,
      e.relations.length,
      n
    ];
    let b, S, W = this.options.defaultJunctionPoint;
    if (W || (W = ce.border), W === ce.border ? (b = B.getBorderPoint4MultiLine(...z), S = B.getBorderPoint4MultiLine(...P)) : W === ce.ltrb ? (b = B.getRectJoinPoint(...z), S = B.getRectJoinPoint(...P)) : W === ce.tb ? (b = B.getRectVJoinPoint(...z), S = B.getRectVJoinPoint(...P)) : W === ce.lr && (b = B.getRectHJoinPoint(...z), S = B.getRectHJoinPoint(...P)), !b || !S)
      return this.createReturnValue(
        "Can not create start and end!",
        f
      );
    const C = b.x, O = b.y, T = S.x, Z = S.y;
    if (Number.isNaN(C) || Number.isNaN(O))
      return console.error("error start point:", i), f.x = 50, f.y = 50, f.rotate = 0, this.createReturnValue("M 0 0 L 100 100", f);
    if (Number.isNaN(T) || Number.isNaN(Z))
      return console.error("error end point:", s), f.x = 50, f.y = 50, f.rotate = 0, this.createReturnValue("M 0 0 L 100 100", f);
    let k = S.x - b.x, E = S.y - b.y, D = S.x > b.x ? 1 : -1;
    r === "v" && (D = S.y > b.y ? 1 : -1);
    let V = "";
    if (l === 4) {
      const A = 60 / (e.relations.length + 1) * (n + 1) - 30;
      r === "v" ? (E = E - (D * 33 + A), f.x = C + k + 5, f.y = O + D * 40 + A, f.rotate = 90, V = `M ${C} ${O} v${D * 33 + A} h${k + A} v${E}`) : o.reverseText === !0 ? (f.x = C + D * 10 - (D < 0 ? 30 : 0), f.y = O - 5, k = k - D * 120, V = `M ${C} ${O} h${D * 120} v${E} h${k}`) : (f.x = C + D * 50 - (D < 0 ? 30 : 0), f.y = O + E - 5 + A, k = k - (D * 33 + A), E = E + D * A, V = `M ${C} ${O} h${D * 33 + A} v${E} h${k}`);
    } else if (l === 2) {
      const A = S.y > b.y ? 1 : -1, Y = Math.abs(k) + Math.abs(E);
      f.x = Math.round(S.x - k / Y * 60 - 20), f.y = Math.round(
        S.y - E / Y * 60 - 20 * A
      );
      const ne = 1 / (e.relations.length + 1) * (n + 1) - 0.5 + 0.5;
      r === "v" ? V = `M${C},${O} c${0},${D * 30} ${k * ne},${D * -10} ${k},${E}` : V = `M${C},${O} c${D * 30},${0} ${D * -10},${E * ne} ${k},${E}`;
    } else if (l === 6) {
      const A = S.y > b.y ? 1 : -1, Y = Math.abs(k) + Math.abs(E);
      f.x = Math.round(S.x - k / Y * 60 - 20), f.y = Math.round(
        S.y - E / Y * 60 - 20 * A
      ), r === "v" ? V = `M${C},${O} c${0},${E / 2} ${k},${E / 2} ${k},${E}` : V = `M${C},${O} c${k / 2},${0} ${k / 2},${E} ${k},${E}`;
    } else if (l === 3) {
      f.x = S.x - D * 63, f.y = S.y + 3;
      const A = 1 / (e.relations.length + 1) * (n + 1) - 0.5 + 0.5;
      r === "v" ? V = `M${C},${O} c${0},${E * A} ${0},${0} ${k},${E}` : V = `M${C},${O} c${D * 30},${0} ${D * -10},${E * A} ${k},${E}`;
    } else if (l === 5) {
      f.x = S.x - D * 63, f.y = S.y + 3;
      const A = 1 / (e.relations.length + 1) * (n + 1) - 0.5 + 0.5;
      r === "v" ? V = `M${C},${O} c${0},${0} ${0},${E * A} ${k},${E}` : V = `M${C},${O} c${0},${0} ${k * A},${0} ${k},${E}`;
    } else {
      const A = B.getAngleType(k, E);
      f.rotate = B.getTextAngle(C, O, T, Z);
      const Y = A === 2 || A === 4 ? -1 : 1, ne = (E === 0 ? -50 : Math.sin(Math.atan(k / E)) * 10 / Math.sin(90)) * Y, fe = k === 0 ? -50 : Math.sin(Math.atan(E / k)) * 10 / Math.sin(90);
      f.x = Math.round(b.x + k / 2 - ne), f.y = Math.round(b.y + E / 2 - fe), Number.isNaN(f.rotate) && (f.rotate = 0), V = `M ${C} ${O} L ${T} ${Z}`;
    }
    return this.createReturnValue(V, f);
  }
  getTextTransform(e, o, n, i) {
    if (Number.isNaN(o) || Number.isNaN(n))
      return "translate(0,0)";
    const s = e.lineShape === void 0 ? this.options.defaultLineShape : e.lineShape;
    return s === 1 || s === 4 ? `translate(${o},${n})rotate(${i || 0})` : `translate(${o},${n})`;
  }
  getArrow(e, o, n = !1) {
    const i = o.seeks_id === this.options.checkedLineId;
    return e.isHideArrow ? "none" : `url('#${this.getLineArrow(
      e.color,
      n,
      i
    )}')`;
  }
}
class So extends Mo {
  constructor(e, o) {
    return super(e, o), this;
  }
}
const Eo = (t, e) => {
  const o = {
    "on-node-click": t.onNodeClick,
    "on-node-expand": t.onNodeExpand,
    "on-node-collapse": t.onNodeCollapse,
    "on-line-click": t.onLineClick,
    "on-image-download": t.onImageDownload
  }, [n, i] = at({ instance: null }), s = he();
  ye(() => {
    const r = t.relationGraphCore || new So(t.options, o);
    s.current = r, l();
  }, []), At(e, () => ({
    getInstance() {
      return s.current;
    },
    setOptions(r, a) {
      s.current.setOptions(r, a), l();
    },
    setJsonData(r, a, h) {
      arguments.length === 2 && typeof a == "function" && (h = a, a = !0), s.current.setJsonData(
        r,
        a,
        (u) => {
          u.playShowEffect(() => {
            l(), h && h(u);
          });
        }
      );
    },
    appendJsonData(r, a, h) {
      arguments.length === 2 && typeof a == "function" && (h = a, a = !0), s.current.appendJsonData(r, a, (u) => {
        l(), h && h(u);
      });
    },
    setLayouter(r) {
      s.current.setLayouter(r), l();
    },
    onGraphResize() {
      s.current.refreshNVAnalysisInfo(), l();
    },
    refresh() {
      s.current.refresh(), l();
    },
    focusRootNode() {
      s.current.focusRootNode(), l();
    },
    focusNodeById(r) {
      s.current.focusNodeById(r), l();
    },
    getNodeById(r) {
      return s.current.getNodeById(r);
    },
    removeNodeById(r) {
      return s.current.removeNodeById(r);
    },
    getNodes() {
      return s.current.getNodes();
    },
    getLinks() {
      return s.current.getLinks();
    },
    getGraphJsonData() {
      return s.current.getGraphJsonData();
    },
    getGraphJsonOptions() {
      return s.current.getGraphJsonOptions();
    },
    updateView() {
      l();
    }
  }), [s.current]);
  const l = (r) => {
    i({ instance: r || s.current });
  };
  return /* @__PURE__ */ p(de, { children: /* @__PURE__ */ p(ao, { value: s.current, children: /* @__PURE__ */ p(ro, { value: l, children: n.instance && /* @__PURE__ */ p(so, { ...t }) }) }) });
}, $o = ue.forwardRef(Eo);
export {
  $o as default
};