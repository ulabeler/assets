/* ! For license information please see 812.dc1c3b4b.js.LICENSE.txt */
(self.webpackChunktrain_vuepress=self.webpackChunktrain_vuepress||[]).push([[812], {262: (e, t, n)=>{
  'use strict'; n.d(t, {Bj: ()=>i, qq: ()=>b, Fl: ()=>Ne, nZ: ()=>l, X3: ()=>Oe, PG: ()=>be, dq: ()=>Pe, Xl: ()=>ke, EB: ()=>a, Jd: ()=>k, WL: ()=>Fe, qj: ()=>me, OT: ()=>ge, iH: ()=>xe, lk: ()=>E, Um: ()=>ve, XI: ()=>Ae, IU: ()=>_e, BK: ()=>ze, j: ()=>S, X$: ()=>P, SU: ()=>Te}); const r=n(577); let o; const s=[]; class i {
    constructor(e=!1) {
      this.active=!0, this.effects=[], this.cleanups=[], !e&&o&&(this.parent=o, this.index=(o.scopes||(o.scopes=[])).push(this)-1);
    }run(e) {
      if (this.active) {
        try {
          return this.on(), e();
        } finally {
          this.off();
        }
      }
    }on() {
      this.active&&(s.push(this), o=this);
    }off() {
      this.active&&(s.pop(), o=s[s.length-1]);
    }stop(e) {
      if (this.active) {
        if (this.effects.forEach(((e)=>e.stop())), this.cleanups.forEach(((e)=>e())), this.scopes&&this.scopes.forEach(((e)=>e.stop(!0))), this.parent&&!e) {
          const e=this.parent.scopes.pop(); e&&e!==this&&(this.parent.scopes[this.index]=e, e.index=this.index);
        } this.active=!1;
      }
    }
  } function l() {
    return o;
  } function a(e) {
    o&&o.cleanups.push(e);
  } const c=(e)=>{
    const t=new Set(e); return t.w=0, t.n=0, t;
  }; const u=(e)=>(e.w&h)>0; const p=(e)=>(e.n&h)>0; const d=new WeakMap; let f=0; let h=1; const m=[]; let v; const g=Symbol(''); const y=Symbol(''); class b {
    constructor(e, t=null, n) {
      this.fn=e, this.scheduler=t, this.active=!0, this.deps=[], function(e, t) {
        (t=t||o)&&t.active&&t.effects.push(e);
      }(this, n);
    }run() {
      if (!this.active) return this.fn(); if (!m.includes(this)) {
        try {
          return m.push(v=this), _.push(O), O=!0, h=1<<++f, f<=30?(({deps: e})=>{
            if (e.length) for (let t=0; t<e.length; t++)e[t].w|=h;
          })(this):w(this), this.fn();
        } finally {
          f<=30&&((e)=>{
            const {deps: t}=e; if (t.length) {
              let n=0; for (let r=0; r<t.length; r++) {
                const o=t[r]; u(o)&&!p(o)?o.delete(e):t[n++]=o, o.w&=~h, o.n&=~h;
              }t.length=n;
            }
          })(this), h=1<<--f, E(), m.pop(); const e=m.length; v=e>0?m[e-1]:void 0;
        }
      }
    }stop() {
      this.active&&(w(this), this.onStop&&this.onStop(), this.active=!1);
    }
  } function w(e) {
    const {deps: t}=e; if (t.length) {
      for (let n=0; n<t.length; n++)t[n].delete(e); t.length=0;
    }
  } let O=!0; const _=[]; function k() {
    _.push(O), O=!1;
  } function E() {
    const e=_.pop(); O=void 0===e||e;
  } function S(e, t, n) {
    if (!C()) return; let r=d.get(e); r||d.set(e, r=new Map); let o=r.get(n); o||r.set(n, o=c()), j(o);
  } function C() {
    return O&&void 0!==v;
  } function j(e, t) {
    let n=!1; f<=30?p(e)||(e.n|=h, n=!u(e)):n=!e.has(v), n&&(e.add(v), v.deps.push(e));
  } function P(e, t, n, o, s, i) {
    const l=d.get(e); if (!l) return; let a=[]; if ('clear'===t)a=[...l.values()]; else if ('length'===n&&(0, r.kJ)(e)) {
      l.forEach(((e, t)=>{
        ('length'===t||t>=o)&&a.push(e);
      }));
    } else {
      switch (void 0!==n&&a.push(l.get(n)), t) {
        case 'add': (0, r.kJ)(e)?(0, r.S0)(n)&&a.push(l.get('length')):(a.push(l.get(g)), (0, r._N)(e)&&a.push(l.get(y))); break; case 'delete': (0, r.kJ)(e)||(a.push(l.get(g)), (0, r._N)(e)&&a.push(l.get(y))); break; case 'set': (0, r._N)(e)&&a.push(l.get(g));
      }
    } if (1===a.length)a[0]&&x(a[0]); else {
      const e=[]; for (const t of a)t&&e.push(...t); x(c(e));
    }
  } function x(e, t) {
    for (const t of (0, r.kJ)(e)?e:[...e])(t!==v||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run());
  } const A=(0, r.fY)('__proto__,__v_isRef,__isVue'); const I=new Set(Object.getOwnPropertyNames(Symbol).map(((e)=>Symbol[e])).filter(r.yk)); const R=H(); const T=H(!1, !0); const L=H(!0); const F=z(); function z() {
    const e={}; return ['includes', 'indexOf', 'lastIndexOf'].forEach(((t)=>{
      e[t]=function(...e) {
        const n=_e(this); for (let e=0, t=this.length; e<t; e++)S(n, 0, e+''); const r=n[t](...e); return -1===r||!1===r?n[t](...e.map(_e)):r;
      };
    })), ['push', 'pop', 'shift', 'unshift', 'splice'].forEach(((t)=>{
      e[t]=function(...e) {
        k(); const n=_e(this)[t].apply(this, e); return E(), n;
      };
    })), e;
  } function H(e=!1, t=!1) {
    return function(n, o, s) {
      if ('__v_isReactive'===o) return !e; if ('__v_isReadonly'===o) return e; if ('__v_raw'===o&&s===(e?t?he:fe:t?de:pe).get(n)) return n; const i=(0, r.kJ)(n); if (!e&&i&&(0, r.RI)(F, o)) return Reflect.get(F, o, s); const l=Reflect.get(n, o, s); return ((0, r.yk)(o)?I.has(o):A(o))?l:(e||S(n, 0, o), t?l:Pe(l)?i&&(0, r.S0)(o)?l:l.value:(0, r.Kn)(l)?e?ge(l):me(l):l);
    };
  } const M=N(); const $=N(!0); function N(e=!1) {
    return function(t, n, o, s) {
      let i=t[n]; if (!e&&!we(o)&&(o=_e(o), i=_e(i), !(0, r.kJ)(t)&&Pe(i)&&!Pe(o))) return i.value=o, !0; const l=(0, r.kJ)(t)&&(0, r.S0)(n)?Number(n)<t.length:(0, r.RI)(t, n); const a=Reflect.set(t, n, o, s); return t===_e(s)&&(l?(0, r.aU)(o, i)&&P(t, 'set', n, o):P(t, 'add', n, o)), a;
    };
  } const D={get: R, set: M, deleteProperty: function(e, t) {
    const n=(0, r.RI)(e, t); const o=(e[t], Reflect.deleteProperty(e, t)); return o&&n&&P(e, 'delete', t, void 0), o;
  }, has: function(e, t) {
    const n=Reflect.has(e, t); return (0, r.yk)(t)&&I.has(t)||S(e, 0, t), n;
  }, ownKeys: function(e) {
    return S(e, 0, (0, r.kJ)(e)?'length':g), Reflect.ownKeys(e);
  }}; const U={get: L, set: (e, t)=>!0, deleteProperty: (e, t)=>!0}; const J=(0, r.l7)({}, D, {get: T, set: $}); const B=(e)=>e; const q=(e)=>Reflect.getPrototypeOf(e); function V(e, t, n=!1, r=!1) {
    const o=_e(e=e.__v_raw); const s=_e(t); t!==s&&!n&&S(o, 0, t), !n&&S(o, 0, s); const {has: i}=q(o); const l=r?B:n?Se:Ee; return i.call(o, t)?l(e.get(t)):i.call(o, s)?l(e.get(s)):void(e!==o&&e.get(t));
  } function W(e, t=!1) {
    const n=this.__v_raw; const r=_e(n); const o=_e(e); return e!==o&&!t&&S(r, 0, e), !t&&S(r, 0, o), e===o?n.has(e):n.has(e)||n.has(o);
  } function G(e, t=!1) {
    return e=e.__v_raw, !t&&S(_e(e), 0, g), Reflect.get(e, 'size', e);
  } function K(e) {
    e=_e(e); const t=_e(this); return q(t).has.call(t, e)||(t.add(e), P(t, 'add', e, e)), this;
  } function Z(e, t) {
    t=_e(t); const n=_e(this); const {has: o, get: s}=q(n); let i=o.call(n, e); i||(e=_e(e), i=o.call(n, e)); const l=s.call(n, e); return n.set(e, t), i?(0, r.aU)(t, l)&&P(n, 'set', e, t):P(n, 'add', e, t), this;
  } function Y(e) {
    const t=_e(this); const {has: n, get: r}=q(t); let o=n.call(t, e); o||(e=_e(e), o=n.call(t, e)), r&&r.call(t, e); const s=t.delete(e); return o&&P(t, 'delete', e, void 0), s;
  } function X() {
    const e=_e(this); const t=0!==e.size; const n=e.clear(); return t&&P(e, 'clear', void 0, void 0), n;
  } function Q(e, t) {
    return function(n, r) {
      const o=this; const s=o.__v_raw; const i=_e(s); const l=t?B:e?Se:Ee; return !e&&S(i, 0, g), s.forEach(((e, t)=>n.call(r, l(e), l(t), o)));
    };
  } function ee(e, t, n) {
    return function(...o) {
      const s=this.__v_raw; const i=_e(s); const l=(0, r._N)(i); const a='entries'===e||e===Symbol.iterator&&l; const c='keys'===e&&l; const u=s[e](...o); const p=n?B:t?Se:Ee; return !t&&S(i, 0, c?y:g), {next() {
        const {value: e, done: t}=u.next(); return t?{value: e, done: t}:{value: a?[p(e[0]), p(e[1])]:p(e), done: t};
      }, [Symbol.iterator]() {
        return this;
      }};
    };
  } function te(e) {
    return function(...t) {
      return 'delete'!==e&&this;
    };
  } function ne() {
    const e={get(e) {
      return V(this, e);
    }, get size() {
      return G(this);
    }, has: W, add: K, set: Z, delete: Y, clear: X, forEach: Q(!1, !1)}; const t={get(e) {
      return V(this, e, !1, !0);
    }, get size() {
      return G(this);
    }, has: W, add: K, set: Z, delete: Y, clear: X, forEach: Q(!1, !0)}; const n={get(e) {
      return V(this, e, !0);
    }, get size() {
      return G(this, !0);
    }, has(e) {
      return W.call(this, e, !0);
    }, add: te('add'), set: te('set'), delete: te('delete'), clear: te('clear'), forEach: Q(!0, !1)}; const r={get(e) {
      return V(this, e, !0, !0);
    }, get size() {
      return G(this, !0);
    }, has(e) {
      return W.call(this, e, !0);
    }, add: te('add'), set: te('set'), delete: te('delete'), clear: te('clear'), forEach: Q(!0, !0)}; return ['keys', 'values', 'entries', Symbol.iterator].forEach(((o)=>{
      e[o]=ee(o, !1, !1), n[o]=ee(o, !0, !1), t[o]=ee(o, !1, !0), r[o]=ee(o, !0, !0);
    })), [e, n, t, r];
  } const [re, oe, se, ie]=ne(); function le(e, t) {
    const n=t?e?ie:se:e?oe:re; return (t, o, s)=>'__v_isReactive'===o?!e:'__v_isReadonly'===o?e:'__v_raw'===o?t:Reflect.get((0, r.RI)(n, o)&&o in t?n:t, o, s);
  } const ae={get: le(!1, !1)}; const ce={get: le(!1, !0)}; const ue={get: le(!0, !1)}; const pe=new WeakMap; const de=new WeakMap; const fe=new WeakMap; const he=new WeakMap; function me(e) {
    return e&&e.__v_isReadonly?e:ye(e, !1, D, ae, pe);
  } function ve(e) {
    return ye(e, !1, J, ce, de);
  } function ge(e) {
    return ye(e, !0, U, ue, fe);
  } function ye(e, t, n, o, s) {
    if (!(0, r.Kn)(e)) return e; if (e.__v_raw&&(!t||!e.__v_isReactive)) return e; const i=s.get(e); if (i) return i; const l=(a=e).__v_skip||!Object.isExtensible(a)?0:function(e) {
      switch (e) {
        case 'Object': case 'Array': return 1; case 'Map': case 'Set': case 'WeakMap': case 'WeakSet': return 2; default: return 0;
      }
    }((0, r.W7)(a)); let a; if (0===l) return e; const c=new Proxy(e, 2===l?o:n); return s.set(e, c), c;
  } function be(e) {
    return we(e)?be(e.__v_raw):!(!e||!e.__v_isReactive);
  } function we(e) {
    return !(!e||!e.__v_isReadonly);
  } function Oe(e) {
    return be(e)||we(e);
  } function _e(e) {
    const t=e&&e.__v_raw; return t?_e(t):e;
  } function ke(e) {
    return (0, r.Nj)(e, '__v_skip', !0), e;
  } const Ee=(e)=>(0, r.Kn)(e)?me(e):e; const Se=(e)=>(0, r.Kn)(e)?ge(e):e; function Ce(e) {
    C()&&((e=_e(e)).dep||(e.dep=c()), j(e.dep));
  } function je(e, t) {
    (e=_e(e)).dep&&x(e.dep);
  } function Pe(e) {
    return Boolean(e&&!0===e.__v_isRef);
  } function xe(e) {
    return Ie(e, !1);
  } function Ae(e) {
    return Ie(e, !0);
  } function Ie(e, t) {
    return Pe(e)?e:new Re(e, t);
  } class Re {
    constructor(e, t) {
      this._shallow=t, this.dep=void 0, this.__v_isRef=!0, this._rawValue=t?e:_e(e), this._value=t?e:Ee(e);
    } get value() {
      return Ce(this), this._value;
    } set value(e) {
      e=this._shallow?e:_e(e), (0, r.aU)(e, this._rawValue)&&(this._rawValue=e, this._value=this._shallow?e:Ee(e), je(this));
    }
  } function Te(e) {
    return Pe(e)?e.value:e;
  } const Le={get: (e, t, n)=>Te(Reflect.get(e, t, n)), set: (e, t, n, r)=>{
    const o=e[t]; return Pe(o)&&!Pe(n)?(o.value=n, !0):Reflect.set(e, t, n, r);
  }}; function Fe(e) {
    return be(e)?e:new Proxy(e, Le);
  } function ze(e) {
    const t=(0, r.kJ)(e)?new Array(e.length):{}; for (const n in e)t[n]=Me(e, n); return t;
  } class He {
    constructor(e, t, n) {
      this._object=e, this._key=t, this._defaultValue=n, this.__v_isRef=!0;
    } get value() {
      const e=this._object[this._key]; return void 0===e?this._defaultValue:e;
    } set value(e) {
      this._object[this._key]=e;
    }
  } function Me(e, t, n) {
    const r=e[t]; return Pe(r)?r:new He(e, t, n);
  } class $e {
    constructor(e, t, n) {
      this._setter=t, this.dep=void 0, this._dirty=!0, this.__v_isRef=!0, this.effect=new b(e, (()=>{
        this._dirty||(this._dirty=!0, je(this));
      })), this.__v_isReadonly=n;
    } get value() {
      const e=_e(this); return Ce(e), e._dirty&&(e._dirty=!1, e._value=e.effect.run()), e._value;
    } set value(e) {
      this._setter(e);
    }
  } function Ne(e, t) {
    let n; let o; const s=(0, r.mf)(e); return s?(n=e, o=r.dG):(n=e.get, o=e.set), new $e(n, o, s||!o);
  }Promise.resolve();
}, 252: (e, t, n)=>{
  'use strict'; n.d(t, {P$: ()=>O, HY: ()=>Fe, $d: ()=>jt, j4: ()=>Ve, kq: ()=>rt, iD: ()=>qe, _: ()=>Xe, Eo: ()=>Pe, uE: ()=>nt, Uk: ()=>tt, Wm: ()=>Qe, RC: ()=>A, aZ: ()=>P, FN: ()=>yt, Q6: ()=>j, h: ()=>nn, f3: ()=>y, dG: ()=>lt, Y3: ()=>Ut, Jd: ()=>J, bv: ()=>N, Ah: ()=>B, ic: ()=>U, wg: ()=>De, JJ: ()=>g, Ko: ()=>ct, WI: ()=>ut, up: ()=>Re, U2: ()=>k, nK: ()=>C, Y8: ()=>b, YP: ()=>Yt, w5: ()=>p, wy: ()=>ge}); const r=n(262); const o=n(577); function s(e, t, ...n) {
    const r=e.vnode.props||o.kT; let s=n; const i=t.startsWith('update:'); const l=i&&t.slice(7); if (l&&l in r) {
      const e=`${'modelValue'===l?'model':l}Modifiers`; const {number: t, trim: i}=r[e]||o.kT; i?s=n.map(((e)=>e.trim())):t&&(s=n.map(o.He));
    } let a; let c=r[a=(0, o.hR)(t)]||r[a=(0, o.hR)((0, o._A)(t))]; !c&&i&&(c=r[a=(0, o.hR)((0, o.rs)(t))]), c&&jt(c, e, 6, s); const u=r[a+'Once']; if (u) {
      if (e.emitted) {
        if (e.emitted[a]) return;
      } else e.emitted={}; e.emitted[a]=!0, jt(u, e, 6, s);
    }
  } function i(e, t, n=!1) {
    const r=t.emitsCache; const s=r.get(e); if (void 0!==s) return s; const l=e.emits; const a={}; let c=!1; if (!(0, o.mf)(e)) {
      const r=(e)=>{
        const n=i(e, t, !0); n&&(c=!0, (0, o.l7)(a, n));
      }; !n&&t.mixins.length&&t.mixins.forEach(r), e.extends&&r(e.extends), e.mixins&&e.mixins.forEach(r);
    } return l||c?((0, o.kJ)(l)?l.forEach(((e)=>a[e]=null)):(0, o.l7)(a, l), r.set(e, a), a):(r.set(e, null), null);
  } function l(e, t) {
    return !(!e||!(0, o.F7)(t))&&(t=t.slice(2).replace(/Once$/, ''), (0, o.RI)(e, t[0].toLowerCase()+t.slice(1))||(0, o.RI)(e, (0, o.rs)(t))||(0, o.RI)(e, t));
  } new Set, new Map; let a=null; let c=null; function u(e) {
    const t=a; return a=e, c=e&&e.type.__scopeId||null, t;
  } function p(e, t=a, n) {
    if (!t) return e; if (e._n) return e; const r=(...n)=>{
      r._d&&Je(-1); const o=u(t); const s=e(...n); return u(o), r._d&&Je(1), s;
    }; return r._n=!0, r._c=!0, r._d=!0, r;
  } function d(e) {
    const {type: t, vnode: n, proxy: r, withProxy: s, props: i, propsOptions: [l], slots: a, attrs: c, emit: p, render: d, renderCache: m, data: v, setupState: g, ctx: y, inheritAttrs: b}=e; let w; let O; const _=u(e); try {
      if (4&n.shapeFlag) {
        const e=s||r; w=ot(d.call(e, e, m, i, g, v, y)), O=c;
      } else {
        const e=t; w=ot(e.length>1?e(i, {attrs: c, slots: a, emit: p}):e(i, null)), O=t.props?c:f(c);
      }
    } catch (t) {
      $e.length=0, Pt(t, e, 1), w=Qe(He);
    } let k=w; if (O&&!1!==b) {
      const e=Object.keys(O); const {shapeFlag: t}=k; e.length&&7&t&&(l&&e.some(o.tR)&&(O=h(O, l)), k=et(k, O));
    } return n.dirs&&(k.dirs=k.dirs?k.dirs.concat(n.dirs):n.dirs), n.transition&&(k.transition=n.transition), w=k, u(_), w;
  } const f=(e)=>{
    let t; for (const n in e)('class'===n||'style'===n||(0, o.F7)(n))&&((t||(t={}))[n]=e[n]); return t;
  }; const h=(e, t)=>{
    const n={}; for (const r in e)(0, o.tR)(r)&&r.slice(9)in t||(n[r]=e[r]); return n;
  }; function m(e, t, n) {
    const r=Object.keys(t); if (r.length!==Object.keys(e).length) return !0; for (let o=0; o<r.length; o++) {
      const s=r[o]; if (t[s]!==e[s]&&!l(n, s)) return !0;
    } return !1;
  } function v(e, t) {
t&&t.pendingBranch?(0, o.kJ)(e)?t.effects.push(...e):t.effects.push(e):qt(e, Ht, zt, Mt);
  } function g(e, t) {
    if (gt) {
      let n=gt.provides; const r=gt.parent&&gt.parent.provides; r===n&&(n=gt.provides=Object.create(r)), n[e]=t;
    }
  } function y(e, t, n=!1) {
    const r=gt||a; if (r) {
      const s=null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides; if (s&&e in s) return s[e]; if (arguments.length>1) return n&&(0, o.mf)(t)?t.call(r.proxy):t;
    }
  } function b() {
    const e={isMounted: !1, isLeaving: !1, isUnmounting: !1, leavingVNodes: new Map}; return N((()=>{
      e.isMounted=!0;
    })), J((()=>{
      e.isUnmounting=!0;
    })), e;
  } const w=[Function, Array]; const O={name: 'BaseTransition', props: {mode: String, appear: Boolean, persisted: Boolean, onBeforeEnter: w, onEnter: w, onAfterEnter: w, onEnterCancelled: w, onBeforeLeave: w, onLeave: w, onAfterLeave: w, onLeaveCancelled: w, onBeforeAppear: w, onAppear: w, onAfterAppear: w, onAppearCancelled: w}, setup(e, {slots: t}) {
    const n=yt(); const o=b(); let s; return ()=>{
      const i=t.default&&j(t.default(), !0); if (!i||!i.length) return; const l=(0, r.IU)(e); const {mode: a}=l; const c=i[0]; if (o.isLeaving) return E(c); const u=S(c); if (!u) return E(c); const p=k(u, l, o, n); C(u, p); const d=n.subTree; const f=d&&S(d); let h=!1; const {getTransitionKey: m}=u.type; if (m) {
        const e=m(); void 0===s?s=e:e!==s&&(s=e, h=!0);
      } if (f&&f.type!==He&&(!Ge(u, f)||h)) {
        const e=k(f, l, o, n); if (C(f, e), 'out-in'===a) {
          return o.isLeaving=!0, e.afterLeave=()=>{
            o.isLeaving=!1, n.update();
          }, E(c);
        } 'in-out'===a&&u.type!==He&&(e.delayLeave=(e, t, n)=>{
          _(o, f)[String(f.key)]=f, e._leaveCb=()=>{
            t(), e._leaveCb=void 0, delete p.delayedLeave;
          }, p.delayedLeave=n;
        });
      } return c;
    };
  }}; function _(e, t) {
    const {leavingVNodes: n}=e; let r=n.get(t.type); return r||(r=Object.create(null), n.set(t.type, r)), r;
  } function k(e, t, n, r) {
    const {appear: o, mode: s, persisted: i=!1, onBeforeEnter: l, onEnter: a, onAfterEnter: c, onEnterCancelled: u, onBeforeLeave: p, onLeave: d, onAfterLeave: f, onLeaveCancelled: h, onBeforeAppear: m, onAppear: v, onAfterAppear: g, onAppearCancelled: y}=t; const b=String(e.key); const w=_(n, e); const O=(e, t)=>{
      e&&jt(e, r, 9, t);
    }; const E={mode: s, persisted: i, beforeEnter(t) {
      let r=l; if (!n.isMounted) {
        if (!o) return; r=m||l;
      }t._leaveCb&&t._leaveCb(!0); const s=w[b]; s&&Ge(e, s)&&s.el._leaveCb&&s.el._leaveCb(), O(r, [t]);
    }, enter(e) {
      let t=a; let r=c; let s=u; if (!n.isMounted) {
        if (!o) return; t=v||a, r=g||c, s=y||u;
      } let i=!1; const l=e._enterCb=(t)=>{
        i||(i=!0, O(t?s:r, [e]), E.delayedLeave&&E.delayedLeave(), e._enterCb=void 0);
      }; t?(t(e, l), t.length<=1&&l()):l();
    }, leave(t, r) {
      const o=String(e.key); if (t._enterCb&&t._enterCb(!0), n.isUnmounting) return r(); O(p, [t]); let s=!1; const i=t._leaveCb=(n)=>{
        s||(s=!0, r(), O(n?h:f, [t]), t._leaveCb=void 0, w[o]===e&&delete w[o]);
      }; w[o]=e, d?(d(t, i), d.length<=1&&i()):i();
    }, clone: (e)=>k(e, t, n, r)}; return E;
  } function E(e) {
    if (R(e)) return (e=et(e)).children=null, e;
  } function S(e) {
    return R(e)?e.children?e.children[0]:void 0:e;
  } function C(e, t) {
6&e.shapeFlag&&e.component?C(e.component.subTree, t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent), e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t;
  } function j(e, t=!1) {
    let n=[]; let r=0; for (let o=0; o<e.length; o++) {
      const s=e[o]; s.type===Fe?(128&s.patchFlag&&r++, n=n.concat(j(s.children, t))):(t||s.type!==He)&&n.push(s);
    } if (r>1) for (let e=0; e<n.length; e++)n[e].patchFlag=-2; return n;
  } function P(e) {
    return (0, o.mf)(e)?{setup: e, name: e.name}:e;
  } const x=(e)=>!!e.type.__asyncLoader; function A(e) {
    (0, o.mf)(e)&&(e={loader: e}); const {loader: t, loadingComponent: n, errorComponent: s, delay: i=200, timeout: l, suspensible: a=!0, onError: c}=e; let u; let p=null; let d=0; const f=()=>{
      let e; return p||(e=p=t().catch(((e)=>{
        if (e=e instanceof Error?e:new Error(String(e)), c) {
          return new Promise(((t, n)=>{
            c(e, (()=>t((d++, p=null, f()))), (()=>n(e)), d+1);
          }));
        } throw e;
      })).then(((t)=>e!==p&&p?p:(t&&(t.__esModule||'Module'===t[Symbol.toStringTag])&&(t=t.default), u=t, t))));
    }; return P({name: 'AsyncComponentWrapper', __asyncLoader: f, get __asyncResolved() {
      return u;
    }, setup() {
      const e=gt; if (u) return ()=>I(u, e); const t=(t)=>{
        p=null, Pt(t, e, 13, !s);
      }; if (a&&e.suspense||_t) return f().then(((t)=>()=>I(t, e))).catch(((e)=>(t(e), ()=>s?Qe(s, {error: e}):null))); const o=(0, r.iH)(!1); const c=(0, r.iH)(); const d=(0, r.iH)(!!i); return i&&setTimeout((()=>{
        d.value=!1;
      }), i), null!=l&&setTimeout((()=>{
        if (!o.value&&!c.value) {
          const e=new Error(`Async component timed out after ${l}ms.`); t(e), c.value=e;
        }
      }), l), f().then((()=>{
        o.value=!0, e.parent&&R(e.parent.vnode)&&Jt(e.parent.update);
      })).catch(((e)=>{
        t(e), c.value=e;
      })), ()=>o.value&&u?I(u, e):c.value&&s?Qe(s, {error: c.value}):n&&!d.value?Qe(n):void 0;
    }});
  } function I(e, {vnode: {ref: t, props: n, children: r}}) {
    const o=Qe(e, n, r); return o.ref=t, o;
  } const R=(e)=>e.type.__isKeepAlive; function T(e, t) {
    F(e, 'a', t);
  } function L(e, t) {
    F(e, 'da', t);
  } function F(e, t, n=gt) {
    const r=e.__wdc||(e.__wdc=()=>{
      let t=n; for (;t;) {
        if (t.isDeactivated) return; t=t.parent;
      } return e();
    }); if (H(t, r, n), n) {
      let e=n.parent; for (;e&&e.parent;)R(e.parent.vnode)&&z(r, t, n, e), e=e.parent;
    }
  } function z(e, t, n, r) {
    const s=H(t, e, r, !0); B((()=>{
      (0, o.Od)(r[t], s);
    }), n);
  } function H(e, t, n=gt, o=!1) {
    if (n) {
      const s=n[e]||(n[e]=[]); const i=t.__weh||(t.__weh=(...o)=>{
        if (n.isUnmounted) return; (0, r.Jd)(), bt(n); const s=jt(t, n, e, o); return wt(), (0, r.lk)(), s;
      }); return o?s.unshift(i):s.push(i), i;
    }
  }RegExp, RegExp; const M=(e)=>(t, n=gt)=>(!_t||'sp'===e)&&H(e, t, n); const $=M('bm'); const N=M('m'); const D=M('bu'); const U=M('u'); const J=M('bum'); const B=M('um'); const q=M('sp'); const V=M('rtg'); const W=M('rtc'); function G(e, t=gt) {
    H('ec', e, t);
  } let K=!0; function Z(e, t, n) {
    jt((0, o.kJ)(e)?e.map(((e)=>e.bind(t.proxy))):e.bind(t.proxy), t, n);
  } function Y(e, t, n, r) {
    const s=r.includes('.')?en(n, r):()=>n[r]; if ((0, o.HD)(e)) {
      const n=t[e]; (0, o.mf)(n)&&Yt(s, n);
    } else if ((0, o.mf)(e))Yt(s, e.bind(n)); else if ((0, o.Kn)(e)) {
      if ((0, o.kJ)(e))e.forEach(((e)=>Y(e, t, n, r))); else {
        const r=(0, o.mf)(e.handler)?e.handler.bind(n):t[e.handler]; (0, o.mf)(r)&&Yt(s, r, e);
      }
    }
  } function X(e) {
    const t=e.type; const {mixins: n, extends: r}=t; const {mixins: o, optionsCache: s, config: {optionMergeStrategies: i}}=e.appContext; const l=s.get(t); let a; return l?a=l:o.length||n||r?(a={}, o.length&&o.forEach(((e)=>Q(a, e, i, !0))), Q(a, t, i)):a=t, s.set(t, a), a;
  } function Q(e, t, n, r=!1) {
    const {mixins: o, extends: s}=t; s&&Q(e, s, n, !0), o&&o.forEach(((t)=>Q(e, t, n, !0))); for (const o in t) {
      if (r&&'expose'===o);else {
        const r=ee[o]||n&&n[o]; e[o]=r?r(e[o], t[o]):t[o];
      }
    } return e;
  } const ee={data: te, props: oe, emits: oe, methods: oe, computed: oe, beforeCreate: re, created: re, beforeMount: re, mounted: re, beforeUpdate: re, updated: re, beforeDestroy: re, beforeUnmount: re, destroyed: re, unmounted: re, activated: re, deactivated: re, errorCaptured: re, serverPrefetch: re, components: oe, directives: oe, watch: function(e, t) {
    if (!e) return t; if (!t) return e; const n=(0, o.l7)(Object.create(null), e); for (const r in t)n[r]=re(e[r], t[r]); return n;
  }, provide: te, inject: function(e, t) {
    return oe(ne(e), ne(t));
  }}; function te(e, t) {
    return t?e?function() {
      return (0, o.l7)((0, o.mf)(e)?e.call(this, this):e, (0, o.mf)(t)?t.call(this, this):t);
    }:t:e;
  } function ne(e) {
    if ((0, o.kJ)(e)) {
      const t={}; for (let n=0; n<e.length; n++)t[e[n]]=e[n]; return t;
    } return e;
  } function re(e, t) {
    return e?[...new Set([].concat(e, t))]:t;
  } function oe(e, t) {
    return e?(0, o.l7)((0, o.l7)(Object.create(null), e), t):t;
  } function se(e, t, n, s) {
    const [i, a]=e.propsOptions; let c; let u=!1; if (t) {
      for (const r in t) {
        if ((0, o.Gg)(r)) continue; const p=t[r]; let d; i&&(0, o.RI)(i, d=(0, o._A)(r))?a&&a.includes(d)?(c||(c={}))[d]=p:n[d]=p:l(e.emitsOptions, r)||r in s&&p===s[r]||(s[r]=p, u=!0);
      }
    } if (a) {
      const t=(0, r.IU)(n); const s=c||o.kT; for (let r=0; r<a.length; r++) {
        const l=a[r]; n[l]=ie(i, t, l, s[l], e, !(0, o.RI)(s, l));
      }
    } return u;
  } function ie(e, t, n, r, s, i) {
    const l=e[n]; if (null!=l) {
      const e=(0, o.RI)(l, 'default'); if (e&&void 0===r) {
        const e=l.default; if (l.type!==Function&&(0, o.mf)(e)) {
          const {propsDefaults: o}=s; n in o?r=o[n]:(bt(s), r=o[n]=e.call(null, t), wt());
        } else r=e;
      }l[0]&&(i&&!e?r=!1:!l[1]||''!==r&&r!==(0, o.rs)(n)||(r=!0));
    } return r;
  } function le(e, t, n=!1) {
    const r=t.propsCache; const s=r.get(e); if (s) return s; const i=e.props; const l={}; const a=[]; let c=!1; if (!(0, o.mf)(e)) {
      const r=(e)=>{
        c=!0; const [n, r]=le(e, t, !0); (0, o.l7)(l, n), r&&a.push(...r);
      }; !n&&t.mixins.length&&t.mixins.forEach(r), e.extends&&r(e.extends), e.mixins&&e.mixins.forEach(r);
    } if (!i&&!c) return r.set(e, o.Z6), o.Z6; if ((0, o.kJ)(i)) {
      for (let e=0; e<i.length; e++) {
        const t=(0, o._A)(i[e]); ae(t)&&(l[t]=o.kT);
      }
    } else if (i) {
      for (const e in i) {
        const t=(0, o._A)(e); if (ae(t)) {
          const n=i[e]; const r=l[t]=(0, o.kJ)(n)||(0, o.mf)(n)?{type: n}:n; if (r) {
            const e=pe(Boolean, r.type); const n=pe(String, r.type); r[0]=e>-1, r[1]=n<0||e<n, (e>-1||(0, o.RI)(r, 'default'))&&a.push(t);
          }
        }
      }
    } const u=[l, a]; return r.set(e, u), u;
  } function ae(e) {
    return '$'!==e[0];
  } function ce(e) {
    const t=e&&e.toString().match(/^\s*function (\w+)/); return t?t[1]:null===e?'null':'';
  } function ue(e, t) {
    return ce(e)===ce(t);
  } function pe(e, t) {
    return (0, o.kJ)(t)?t.findIndex(((t)=>ue(t, e))):(0, o.mf)(t)&&ue(t, e)?0:-1;
  } const de=(e)=>'_'===e[0]||'$stable'===e; const fe=(e)=>(0, o.kJ)(e)?e.map(ot):[ot(e)]; const he=(e, t, n)=>{
    const r=p(((...e)=>fe(t(...e))), n); return r._c=!1, r;
  }; const me=(e, t, n)=>{
    const r=e._ctx; for (const n in e) {
      if (de(n)) continue; const s=e[n]; if ((0, o.mf)(s))t[n]=he(0, s, r); else if (null!=s) {
        const e=fe(s); t[n]=()=>e;
      }
    }
  }; const ve=(e, t)=>{
    const n=fe(t); e.slots.default=()=>n;
  }; function ge(e, t) {
    if (null===a) return e; const n=a.proxy; const r=e.dirs||(e.dirs=[]); for (let e=0; e<t.length; e++) {
      let [s, i, l, a=o.kT]=t[e]; (0, o.mf)(s)&&(s={mounted: s, updated: s}), s.deep&&tn(i), r.push({dir: s, instance: n, value: i, oldValue: void 0, arg: l, modifiers: a});
    } return e;
  } function ye(e, t, n, o) {
    const s=e.dirs; const i=t&&t.dirs; for (let l=0; l<s.length; l++) {
      const a=s[l]; i&&(a.oldValue=i[l].value); const c=a.dir[o]; c&&((0, r.Jd)(), jt(c, n, 8, [e.el, a, e, t]), (0, r.lk)());
    }
  } function be() {
    return {app: null, config: {isNativeTag: o.NO, performance: !1, globalProperties: {}, optionMergeStrategies: {}, errorHandler: void 0, warnHandler: void 0, compilerOptions: {}}, mixins: [], components: {}, directives: {}, provides: Object.create(null), optionsCache: new WeakMap, propsCache: new WeakMap, emitsCache: new WeakMap};
  } let we=0; function Oe(e, t) {
    return function(n, r=null) {
      null==r||(0, o.Kn)(r)||(r=null); const s=be(); const i=new Set; let l=!1; const a=s.app={_uid: we++, _component: n, _props: r, _container: null, _context: s, _instance: null, version: rn, get config() {
        return s.config;
      }, set config(e) {}, use: (e, ...t)=>(i.has(e)||(e&&(0, o.mf)(e.install)?(i.add(e), e.install(a, ...t)):(0, o.mf)(e)&&(i.add(e), e(a, ...t))), a), mixin: (e)=>(s.mixins.includes(e)||s.mixins.push(e), a), component: (e, t)=>t?(s.components[e]=t, a):s.components[e], directive: (e, t)=>t?(s.directives[e]=t, a):s.directives[e], mount(o, i, c) {
        if (!l) {
          const u=Qe(n, r); return u.appContext=s, i&&t?t(u, o):e(u, o, c), l=!0, a._container=o, o.__vue_app__=a, St(u.component)||u.component.proxy;
        }
      }, unmount() {
        l&&(e(null, a._container), delete a._container.__vue_app__);
      }, provide: (e, t)=>(s.provides[e]=t, a)}; return a;
    };
  } function _e(e, t, n, s, i=!1) {
    if ((0, o.kJ)(e)) return void e.forEach(((e, r)=>_e(e, t&&((0, o.kJ)(t)?t[r]:t), n, s, i))); if (x(s)&&!i) return; const l=4&s.shapeFlag?St(s.component)||s.component.proxy:s.el; const a=i?null:l; const {i: c, r: u}=e; const p=t&&t.r; const d=c.refs===o.kT?c.refs={}:c.refs; const f=c.setupState; if (null!=p&&p!==u&&((0, o.HD)(p)?(d[p]=null, (0, o.RI)(f, p)&&(f[p]=null)):(0, r.dq)(p)&&(p.value=null)), (0, o.mf)(u))Ct(u, c, 12, [a, d]); else {
      const t=(0, o.HD)(u); const s=(0, r.dq)(u); if (t||s) {
        const s=()=>{
          if (e.f) {
            const n=t?d[u]:u.value; i?(0, o.kJ)(n)&&(0, o.Od)(n, l):(0, o.kJ)(n)?n.includes(l)||n.push(l):t?d[u]=[l]:(u.value=[l], e.k&&(d[e.k]=u.value));
          } else t?(d[u]=a, (0, o.RI)(f, u)&&(f[u]=a)):(0, r.dq)(u)&&(u.value=a, e.k&&(d[e.k]=a));
        }; a?(s.id=-1, je(s, n)):s();
      }
    }
  } let ke=!1; const Ee=(e)=>/svg/.test(e.namespaceURI)&&'foreignObject'!==e.tagName; const Se=(e)=>8===e.nodeType; function Ce(e) {
    const {mt: t, p: n, o: {patchProp: r, nextSibling: s, parentNode: i, remove: l, insert: a, createComment: c}}=e; const u=(n, r, o, l, a, c=!1)=>{
      const v=Se(n)&&'['===n.data; const g=()=>h(n, r, o, l, a, v); const {type: y, ref: b, shapeFlag: w}=r; const O=n.nodeType; r.el=n; let _=null; switch (y) {
        case ze: 3!==O?_=g():(n.data!==r.children&&(ke=!0, n.data=r.children), _=s(n)); break; case He: _=8!==O||v?g():s(n); break; case Me: if (1===O) {
          _=n; const e=!r.children.length; for (let t=0; t<r.staticCount; t++)e&&(r.children+=_.outerHTML), t===r.staticCount-1&&(r.anchor=_), _=s(_); return _;
        }_=g(); break; case Fe: _=v?f(n, r, o, l, a, c):g(); break; default: if (1&w)_=1!==O||r.type.toLowerCase()!==n.tagName.toLowerCase()?g():p(n, r, o, l, a, c); else if (6&w) {
          r.slotScopeIds=a; const e=i(n); if (t(r, e, null, o, l, Ee(e), c), _=v?m(n):s(n), x(r)) {
            let t; v?(t=Qe(Fe), t.anchor=_?_.previousSibling:e.lastChild):t=3===n.nodeType?tt(''):Qe('div'), t.el=n, r.component.subTree=t;
          }
        } else 64&w?_=8!==O?g():r.type.hydrate(n, r, o, l, a, c, e, d):128&w&&(_=r.type.hydrate(n, r, o, l, Ee(i(n)), a, c, e, u));
      } return null!=b&&_e(b, null, l, r), _;
    }; const p=(e, t, n, s, i, a)=>{
      a=a||!!t.dynamicChildren; const {type: c, props: u, patchFlag: p, shapeFlag: f, dirs: h}=t; const m='input'===c&&h||'option'===c; if (m||-1!==p) {
        if (h&&ye(t, null, n, 'created'), u) if (m||!a||48&p) for (const t in u)(m&&t.endsWith('value')||(0, o.F7)(t)&&!(0, o.Gg)(t))&&r(e, t, null, u[t], !1, void 0, n); else u.onClick&&r(e, 'onClick', null, u.onClick, !1, void 0, n); let c; if ((c=u&&u.onVnodeBeforeMount)&&at(c, n, t), h&&ye(t, null, n, 'beforeMount'), ((c=u&&u.onVnodeMounted)||h)&&v((()=>{
          c&&at(c, n, t), h&&ye(t, null, n, 'mounted');
        }), s), 16&f&&(!u||!u.innerHTML&&!u.textContent)) {
          let r=d(e.firstChild, t, e, n, s, i, a); for (;r;) {
            ke=!0; const e=r; r=r.nextSibling, l(e);
          }
        } else 8&f&&e.textContent!==t.children&&(ke=!0, e.textContent=t.children);
      } return e.nextSibling;
    }; const d=(e, t, r, o, s, i, l)=>{
      l=l||!!t.dynamicChildren; const a=t.children; const c=a.length; for (let t=0; t<c; t++) {
        const c=l?a[t]:a[t]=ot(a[t]); if (e)e=u(e, c, o, s, i, l); else {
          if (c.type===ze&&!c.children) continue; ke=!0, n(null, c, r, null, o, s, Ee(r), i);
        }
      } return e;
    }; const f=(e, t, n, r, o, l)=>{
      const {slotScopeIds: u}=t; u&&(o=o?o.concat(u):u); const p=i(e); const f=d(s(e), t, p, n, r, o, l); return f&&Se(f)&&']'===f.data?s(t.anchor=f):(ke=!0, a(t.anchor=c(']'), p, f), f);
    }; const h=(e, t, r, o, a, c)=>{
      if (ke=!0, t.el=null, c) {
        const t=m(e); for (;;) {
          const n=s(e); if (!n||n===t) break; l(n);
        }
      } const u=s(e); const p=i(e); return l(e), n(null, t, p, u, r, o, Ee(p), a), u;
    }; const m=(e)=>{
      let t=0; for (;e;) {
        if ((e=s(e))&&Se(e)&&('['===e.data&&t++, ']'===e.data)) {
          if (0===t) return s(e); t--;
        }
      } return e;
    }; return [(e, t)=>{
      if (!t.hasChildNodes()) return n(null, e, t), void Wt(); ke=!1, u(t.firstChild, e, null, null, null), Wt(), ke&&console.error('Hydration completed but contains mismatches.');
    }, u];
  } const je=v; function Pe(e) {
    return function(e, t) {
      (0, o.E9)().__VUE__=!0; const {insert: n, remove: a, patchProp: c, createElement: u, createText: p, createComment: f, setText: h, setElementText: v, parentNode: g, nextSibling: y, setScopeId: b=o.dG, cloneNode: w, insertStaticContent: O}=e; const _=(e, t, n, r=null, o=null, s=null, i=!1, l=null, a=!!t.dynamicChildren)=>{
        if (e===t) return; e&&!Ge(e, t)&&(r=Y(e), V(e, o, s, !0), e=null), -2===t.patchFlag&&(a=!1, t.dynamicChildren=null); const {type: c, ref: u, shapeFlag: p}=t; switch (c) {
          case ze: k(e, t, n, r); break; case He: E(e, t, n, r); break; case Me: null==e&&S(t, n, r, i); break; case Fe: z(e, t, n, r, o, s, i, l, a); break; default: 1&p?j(e, t, n, r, o, s, i, l, a):6&p?H(e, t, n, r, o, s, i, l, a):(64&p||128&p)&&c.process(e, t, n, r, o, s, i, l, a, Q);
        }null!=u&&o&&_e(u, e&&e.ref, s, t||e, !t);
      }; const k=(e, t, r, o)=>{
        if (null==e)n(t.el=p(t.children), r, o); else {
          const n=t.el=e.el; t.children!==e.children&&h(n, t.children);
        }
      }; const E=(e, t, r, o)=>{
null==e?n(t.el=f(t.children||''), r, o):t.el=e.el;
      }; const S=(e, t, n, r)=>{
        [e.el, e.anchor]=O(e.children, t, n, r);
      }; const C=({el: e, anchor: t})=>{
        let n; for (;e&&e!==t;)n=y(e), a(e), e=n; a(t);
      }; const j=(e, t, n, r, o, s, i, l, a)=>{
        i=i||'svg'===t.type, null==e?P(t, n, r, o, s, i, l, a):T(e, t, o, s, i, l, a);
      }; const P=(e, t, r, s, i, l, a, p)=>{
        let d; let f; const {type: h, props: m, shapeFlag: g, transition: y, patchFlag: b, dirs: O}=e; if (e.el&&void 0!==w&&-1===b)d=e.el=w(e.el); else {
          if (d=e.el=u(e.type, l, m&&m.is, m), 8&g?v(d, e.children):16&g&&I(e.children, d, null, s, i, l&&'foreignObject'!==h, a, p), O&&ye(e, null, s, 'created'), m) {
            for (const t in m)'value'===t||(0, o.Gg)(t)||c(d, t, null, m[t], l, e.children, s, i, Z); 'value'in m&&c(d, 'value', null, m.value), (f=m.onVnodeBeforeMount)&&at(f, s, e);
          }A(d, e, e.scopeId, a, s);
        }O&&ye(e, null, s, 'beforeMount'); const _=(!i||i&&!i.pendingBranch)&&y&&!y.persisted; _&&y.beforeEnter(d), n(d, t, r), ((f=m&&m.onVnodeMounted)||_||O)&&je((()=>{
          f&&at(f, s, e), _&&y.enter(d), O&&ye(e, null, s, 'mounted');
        }), i);
      }; const A=(e, t, n, r, o)=>{
        if (n&&b(e, n), r) for (let t=0; t<r.length; t++)b(e, r[t]); if (o&&t===o.subTree) {
          const t=o.vnode; A(e, t, t.scopeId, t.slotScopeIds, o.parent);
        }
      }; const I=(e, t, n, r, o, s, i, l, a=0)=>{
        for (let c=a; c<e.length; c++) {
          const a=e[c]=l?st(e[c]):ot(e[c]); _(null, a, t, n, r, o, s, i, l);
        }
      }; const T=(e, t, n, r, s, i, l)=>{
        const a=t.el=e.el; let {patchFlag: u, dynamicChildren: p, dirs: d}=t; u|=16&e.patchFlag; const f=e.props||o.kT; const h=t.props||o.kT; let m; n&&xe(n, !1), (m=h.onVnodeBeforeUpdate)&&at(m, n, t, e), d&&ye(t, e, n, 'beforeUpdate'), n&&xe(n, !0); const g=s&&'foreignObject'!==t.type; if (p?L(e.dynamicChildren, p, a, n, r, g, i):l||U(e, t, a, null, n, r, g, i, !1), u>0) {
          if (16&u)F(a, t, f, h, n, r, s); else if (2&u&&f.class!==h.class&&c(a, 'class', null, h.class, s), 4&u&&c(a, 'style', f.style, h.style, s), 8&u) {
            const o=t.dynamicProps; for (let t=0; t<o.length; t++) {
              const i=o[t]; const l=f[i]; const u=h[i]; u===l&&'value'!==i||c(a, i, l, u, s, e.children, n, r, Z);
            }
          }1&u&&e.children!==t.children&&v(a, t.children);
        } else l||null!=p||F(a, t, f, h, n, r, s); ((m=h.onVnodeUpdated)||d)&&je((()=>{
          m&&at(m, n, t, e), d&&ye(t, e, n, 'updated');
        }), r);
      }; const L=(e, t, n, r, o, s, i)=>{
        for (let l=0; l<t.length; l++) {
          const a=e[l]; const c=t[l]; const u=a.el&&(a.type===Fe||!Ge(a, c)||70&a.shapeFlag)?g(a.el):n; _(a, c, u, null, r, o, s, i, !0);
        }
      }; const F=(e, t, n, r, s, i, l)=>{
        if (n!==r) {
          for (const a in r) {
            if ((0, o.Gg)(a)) continue; const u=r[a]; const p=n[a]; u!==p&&'value'!==a&&c(e, a, p, u, l, t.children, s, i, Z);
          } if (n!==o.kT) for (const a in n)(0, o.Gg)(a)||a in r||c(e, a, n[a], null, l, t.children, s, i, Z); 'value'in r&&c(e, 'value', n.value, r.value);
        }
      }; const z=(e, t, r, o, s, i, l, a, c)=>{
        const u=t.el=e?e.el:p(''); const d=t.anchor=e?e.anchor:p(''); const {patchFlag: f, dynamicChildren: h, slotScopeIds: m}=t; m&&(a=a?a.concat(m):m), null==e?(n(u, r, o), n(d, r, o), I(t.children, r, d, s, i, l, a, c)):f>0&&64&f&&h&&e.dynamicChildren?(L(e.dynamicChildren, h, r, s, i, l, a), (null!=t.key||s&&t===s.subTree)&&Ae(e, t, !0)):U(e, t, r, d, s, i, l, a, c);
      }; const H=(e, t, n, r, o, s, i, l, a)=>{
        t.slotScopeIds=l, null==e?512&t.shapeFlag?o.ctx.activate(t, n, r, i, a):M(t, n, r, o, s, i, a):$(e, t, a);
      }; const M=(e, t, n, l, a, c, u)=>{
        const p=e.component=function(e, t, n) {
          const l=e.type; const a=(t?t.appContext:e.appContext)||mt; const c={uid: vt++, vnode: e, type: l, parent: t, appContext: a, root: null, next: null, subTree: null, effect: null, update: null, scope: new r.Bj(!0), render: null, proxy: null, exposed: null, exposeProxy: null, withProxy: null, provides: t?t.provides:Object.create(a.provides), accessCache: null, renderCache: [], components: null, directives: null, propsOptions: le(l, a), emitsOptions: i(l, a), emit: null, emitted: null, propsDefaults: o.kT, inheritAttrs: l.inheritAttrs, ctx: o.kT, data: o.kT, props: o.kT, attrs: o.kT, slots: o.kT, refs: o.kT, setupState: o.kT, setupContext: null, suspense: n, suspenseId: n?n.pendingId:0, asyncDep: null, asyncResolved: !1, isMounted: !1, isUnmounted: !1, isDeactivated: !1, bc: null, c: null, bm: null, m: null, bu: null, u: null, um: null, bum: null, da: null, a: null, rtg: null, rtc: null, ec: null, sp: null}; return c.ctx={_: c}, c.root=t?t.root:c, c.emit=s.bind(null, c), e.ce&&e.ce(c), c;
        }(e, l, a); if (R(e)&&(p.ctx.renderer=Q), function(e, t=!1) {
          _t=t; const {props: n, children: s}=e.vnode; const i=Ot(e); !function(e, t, n, s=!1) {
            const i={}; const l={}; (0, o.Nj)(l, Ke, 1), e.propsDefaults=Object.create(null), se(e, t, i, l); for (const t in e.propsOptions[0])t in i||(i[t]=void 0); n?e.props=s?i:(0, r.Um)(i):e.type.props?e.props=i:e.props=l, e.attrs=l;
          }(e, n, i, t), ((e, t)=>{
            if (32&e.vnode.shapeFlag) {
              const n=t._; n?(e.slots=(0, r.IU)(t), (0, o.Nj)(t, '_', n)):me(t, e.slots={});
            } else e.slots={}, t&&ve(e, t); (0, o.Nj)(e.slots, Ke, 1);
          })(e, s); const l=i?function(e, t) {
            const n=e.type; e.accessCache=Object.create(null), e.proxy=(0, r.Xl)(new Proxy(e.ctx, ht)); const {setup: s}=n; if (s) {
              const n=e.setupContext=s.length>1?function(e) {
                const t=(t)=>{
                  e.exposed=t||{};
                }; let n; return {get attrs() {
                  return n||(n=function(e) {
                    return new Proxy(e.attrs, {get: (t, n)=>((0, r.j)(e, 'get', '$attrs'), t[n])});
                  }(e));
                }, slots: e.slots, emit: e.emit, expose: t};
              }(e):null; bt(e), (0, r.Jd)(); const i=Ct(s, e, 0, [e.props, n]); if ((0, r.lk)(), wt(), (0, o.tI)(i)) {
                if (i.then(wt, wt), t) {
                  return i.then(((n)=>{
                    kt(e, n, t);
                  })).catch(((t)=>{
                    Pt(t, e, 0);
                  }));
                } e.asyncDep=i;
              } else kt(e, i, t);
            } else Et(e, t);
          }(e, t):void 0; _t=!1;
        }(p), p.asyncDep) {
          if (a&&a.registerDep(p, N), !e.el) {
            const e=p.subTree=Qe(He); E(null, e, t, n);
          }
        } else N(p, e, t, n, a, c, u);
      }; const $=(e, t, n)=>{
        const r=t.component=e.component; if (function(e, t, n) {
          const {props: r, children: o, component: s}=e; const {props: i, children: a, patchFlag: c}=t; const u=s.emitsOptions; if (t.dirs||t.transition) return !0; if (!(n&&c>=0)) return !(!o&&!a||a&&a.$stable)||r!==i&&(r?!i||m(r, i, u):!!i); if (1024&c) return !0; if (16&c) return r?m(r, i, u):!!i; if (8&c) {
            const e=t.dynamicProps; for (let t=0; t<e.length; t++) {
              const n=e[t]; if (i[n]!==r[n]&&!l(u, n)) return !0;
            }
          } return !1;
        }(e, t, n)) {
          if (r.asyncDep&&!r.asyncResolved) return void D(r, t, n); r.next=t, function(e) {
            const t=It.indexOf(e); t>Rt&&It.splice(t, 1);
          }(r.update), r.update();
        } else t.component=e.component, t.el=e.el, r.vnode=t;
      }; const N=(e, t, n, s, i, l, a)=>{
        const c=e.effect=new r.qq((()=>{
          if (e.isMounted) {
            let t; let {next: n, bu: r, u: s, parent: c, vnode: u}=e; const p=n; xe(e, !1), n?(n.el=u.el, D(e, n, a)):n=u, r&&(0, o.ir)(r), (t=n.props&&n.props.onVnodeBeforeUpdate)&&at(t, c, n, u), xe(e, !0); const f=d(e); const h=e.subTree; e.subTree=f, _(h, f, g(h.el), Y(h), e, i, l), n.el=f.el, null===p&&function({vnode: e, parent: t}, n) {
              for (;t&&t.subTree===e;)(e=t.vnode).el=n, t=t.parent;
            }(e, f.el), s&&je(s, i), (t=n.props&&n.props.onVnodeUpdated)&&je((()=>at(t, c, n, u)), i);
          } else {
            let r; const {el: a, props: c}=t; const {bm: u, m: p, parent: f}=e; const h=x(t); if (xe(e, !1), u&&(0, o.ir)(u), !h&&(r=c&&c.onVnodeBeforeMount)&&at(r, f, t), xe(e, !0), a&&te) {
              const n=()=>{
                e.subTree=d(e), te(a, e.subTree, e, i, null);
              }; h?t.type.__asyncLoader().then((()=>!e.isUnmounted&&n())):n();
            } else {
              const r=e.subTree=d(e); _(null, r, n, s, e, i, l), t.el=r.el;
            } if (p&&je(p, i), !h&&(r=c&&c.onVnodeMounted)) {
              const e=t; je((()=>at(r, f, e)), i);
            }256&t.shapeFlag&&e.a&&je(e.a, i), e.isMounted=!0, t=n=s=null;
          }
        }), (()=>Jt(e.update)), e.scope); const u=e.update=c.run.bind(c); u.id=e.uid, xe(e, !0), u();
      }; const D=(e, t, n)=>{
        t.component=e; const s=e.vnode.props; e.vnode=t, e.next=null, function(e, t, n, s) {
          const {props: i, attrs: l, vnode: {patchFlag: a}}=e; const c=(0, r.IU)(i); const [u]=e.propsOptions; let p=!1; if (!(s||a>0)||16&a) {
            let r; se(e, t, i, l)&&(p=!0); for (const s in c)t&&((0, o.RI)(t, s)||(r=(0, o.rs)(s))!==s&&(0, o.RI)(t, r))||(u?!n||void 0===n[s]&&void 0===n[r]||(i[s]=ie(u, c, s, void 0, e, !0)):delete i[s]); if (l!==c) for (const e in l)t&&(0, o.RI)(t, e)||(delete l[e], p=!0);
          } else if (8&a) {
            const n=e.vnode.dynamicProps; for (let r=0; r<n.length; r++) {
              const s=n[r]; const a=t[s]; if (u) {
                if ((0, o.RI)(l, s))a!==l[s]&&(l[s]=a, p=!0); else {
                  const t=(0, o._A)(s); i[t]=ie(u, c, t, a, e, !1);
                }
              } else a!==l[s]&&(l[s]=a, p=!0);
            }
          }p&&(0, r.X$)(e, 'set', '$attrs');
        }(e, t.props, s, n), ((e, t, n)=>{
          const {vnode: r, slots: s}=e; let i=!0; let l=o.kT; if (32&r.shapeFlag) {
            const e=t._; e?n&&1===e?i=!1:((0, o.l7)(s, t), n||1!==e||delete s._):(i=!t.$stable, me(t, s)), l=t;
          } else t&&(ve(e, t), l={default: 1}); if (i) for (const e in s)de(e)||e in l||delete s[e];
        })(e, t.children, n), (0, r.Jd)(), Vt(void 0, e.update), (0, r.lk)();
      }; const U=(e, t, n, r, o, s, i, l, a=!1)=>{
        const c=e&&e.children; const u=e?e.shapeFlag:0; const p=t.children; const {patchFlag: d, shapeFlag: f}=t; if (d>0) {
          if (128&d) return void B(c, p, n, r, o, s, i, l, a); if (256&d) return void J(c, p, n, r, o, s, i, l, a);
        }8&f?(16&u&&Z(c, o, s), p!==c&&v(n, p)):16&u?16&f?B(c, p, n, r, o, s, i, l, a):Z(c, o, s, !0):(8&u&&v(n, ''), 16&f&&I(p, n, r, o, s, i, l, a));
      }; const J=(e, t, n, r, s, i, l, a, c)=>{
        e=e||o.Z6, t=t||o.Z6; const u=e.length; const p=t.length; const d=Math.min(u, p); let f; for (f=0; f<d; f++) {
          const r=t[f]=c?st(t[f]):ot(t[f]); _(e[f], r, n, null, s, i, l, a, c);
        }u>p?Z(e, s, i, !0, !1, d):I(t, n, r, s, i, l, a, c, d);
      }; const B=(e, t, n, r, s, i, l, a, c)=>{
        let u=0; const p=t.length; let d=e.length-1; let f=p-1; for (;u<=d&&u<=f;) {
          const r=e[u]; const o=t[u]=c?st(t[u]):ot(t[u]); if (!Ge(r, o)) break; _(r, o, n, null, s, i, l, a, c), u++;
        } for (;u<=d&&u<=f;) {
          const r=e[d]; const o=t[f]=c?st(t[f]):ot(t[f]); if (!Ge(r, o)) break; _(r, o, n, null, s, i, l, a, c), d--, f--;
        } if (u>d) {
          if (u<=f) {
            const e=f+1; const o=e<p?t[e].el:r; for (;u<=f;)_(null, t[u]=c?st(t[u]):ot(t[u]), n, o, s, i, l, a, c), u++;
          }
        } else if (u>f) for (;u<=d;)V(e[u], s, i, !0), u++; else {
          const h=u; const m=u; const v=new Map; for (u=m; u<=f; u++) {
            const e=t[u]=c?st(t[u]):ot(t[u]); null!=e.key&&v.set(e.key, u);
          } let g; let y=0; const b=f-m+1; let w=!1; let O=0; const k=new Array(b); for (u=0; u<b; u++)k[u]=0; for (u=h; u<=d; u++) {
            const r=e[u]; if (y>=b) {
              V(r, s, i, !0); continue;
            } let o; if (null!=r.key)o=v.get(r.key); else {
              for (g=m; g<=f; g++) {
                if (0===k[g-m]&&Ge(r, t[g])) {
                  o=g; break;
                }
              }
            } void 0===o?V(r, s, i, !0):(k[o-m]=u+1, o>=O?O=o:w=!0, _(r, t[o], n, null, s, i, l, a, c), y++);
          } const E=w?function(e) {
            const t=e.slice(); const n=[0]; let r; let o; let s; let i; let l; const a=e.length; for (r=0; r<a; r++) {
              const a=e[r]; if (0!==a) {
                if (o=n[n.length-1], e[o]<a) {
                  t[r]=o, n.push(r); continue;
                } for (s=0, i=n.length-1; s<i;)l=s+i>>1, e[n[l]]<a?s=l+1:i=l; a<e[n[s]]&&(s>0&&(t[r]=n[s-1]), n[s]=r);
              }
            } for (s=n.length, i=n[s-1]; s-- >0;)n[s]=i, i=t[i]; return n;
          }(k):o.Z6; for (g=E.length-1, u=b-1; u>=0; u--) {
            const e=m+u; const o=t[e]; const d=e+1<p?t[e+1].el:r; 0===k[u]?_(null, o, n, d, s, i, l, a, c):w&&(g<0||u!==E[g]?q(o, n, d, 2):g--);
          }
        }
      }; const q=(e, t, r, o, s=null)=>{
        const {el: i, type: l, transition: a, children: c, shapeFlag: u}=e; if (6&u)q(e.component.subTree, t, r, o); else if (128&u)e.suspense.move(t, r, o); else if (64&u)l.move(e, t, r, Q); else if (l!==Fe) {
          if (l!==Me) {
            if (2!==o&&1&u&&a) {
              if (0===o)a.beforeEnter(i), n(i, t, r), je((()=>a.enter(i)), s); else {
                const {leave: e, delayLeave: o, afterLeave: s}=a; const l=()=>n(i, t, r); const c=()=>{
                  e(i, (()=>{
                    l(), s&&s();
                  }));
                }; o?o(i, l, c):c();
              }
            } else n(i, t, r);
          } else {
            (({el: e, anchor: t}, r, o)=>{
              let s; for (;e&&e!==t;)s=y(e), n(e, r, o), e=s; n(t, r, o);
            })(e, t, r);
          }
        } else {
          n(i, t, r); for (let e=0; e<c.length; e++)q(c[e], t, r, o); n(e.anchor, t, r);
        }
      }; const V=(e, t, n, r=!1, o=!1)=>{
        const {type: s, props: i, ref: l, children: a, dynamicChildren: c, shapeFlag: u, patchFlag: p, dirs: d}=e; if (null!=l&&_e(l, null, n, e, !0), 256&u) return void t.ctx.deactivate(e); const f=1&u&&d; const h=!x(e); let m; if (h&&(m=i&&i.onVnodeBeforeUnmount)&&at(m, t, e), 6&u)K(e.component, n, r); else {
          if (128&u) return void e.suspense.unmount(n, r); f&&ye(e, null, t, 'beforeUnmount'), 64&u?e.type.remove(e, t, n, o, Q, r):c&&(s!==Fe||p>0&&64&p)?Z(c, t, n, !1, !0):(s===Fe&&384&p||!o&&16&u)&&Z(a, t, n), r&&W(e);
        }(h&&(m=i&&i.onVnodeUnmounted)||f)&&je((()=>{
          m&&at(m, t, e), f&&ye(e, null, t, 'unmounted');
        }), n);
      }; const W=(e)=>{
        const {type: t, el: n, anchor: r, transition: o}=e; if (t===Fe) return void G(n, r); if (t===Me) return void C(e); const s=()=>{
          a(n), o&&!o.persisted&&o.afterLeave&&o.afterLeave();
        }; if (1&e.shapeFlag&&o&&!o.persisted) {
          const {leave: t, delayLeave: r}=o; const i=()=>t(n, s); r?r(e.el, s, i):i();
        } else s();
      }; const G=(e, t)=>{
        let n; for (;e!==t;)n=y(e), a(e), e=n; a(t);
      }; const K=(e, t, n)=>{
        const {bum: r, scope: s, update: i, subTree: l, um: a}=e; r&&(0, o.ir)(r), s.stop(), i&&(i.active=!1, V(l, e, t, n)), a&&je(a, t), je((()=>{
          e.isUnmounted=!0;
        }), t), t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--, 0===t.deps&&t.resolve());
      }; const Z=(e, t, n, r=!1, o=!1, s=0)=>{
        for (let i=s; i<e.length; i++)V(e[i], t, n, r, o);
      }; const Y=(e)=>6&e.shapeFlag?Y(e.component.subTree):128&e.shapeFlag?e.suspense.next():y(e.anchor||e.el); const X=(e, t, n)=>{
null==e?t._vnode&&V(t._vnode, null, null, !0):_(t._vnode||null, e, t, null, null, null, n), Wt(), t._vnode=e;
      }; const Q={p: _, um: V, m: q, r: W, mt: M, mc: I, pc: U, pbc: L, n: Y, o: e}; let ee; let te; return t&&([ee, te]=t(Q)), {render: X, hydrate: ee, createApp: Oe(X, ee)};
    }(e, Ce);
  } function xe({effect: e, update: t}, n) {
    e.allowRecurse=t.allowRecurse=n;
  } function Ae(e, t, n=!1) {
    const r=e.children; const s=t.children; if ((0, o.kJ)(r)&&(0, o.kJ)(s)) {
      for (let e=0; e<r.length; e++) {
        const t=r[e]; let o=s[e]; 1&o.shapeFlag&&!o.dynamicChildren&&((o.patchFlag<=0||32===o.patchFlag)&&(o=s[e]=st(s[e]), o.el=t.el), n||Ae(t, o));
      }
    }
  } const Ie='components'; function Re(e, t) {
    return function(e, t, n=!0, r=!1) {
      const s=a||gt; if (s) {
        const n=s.type; if (e===Ie) {
          const e=function(e) {
            return (0, o.mf)(e)&&e.displayName||e.name;
          }(n); if (e&&(e===t||e===(0, o._A)(t)||e===(0, o.kC)((0, o._A)(t)))) return n;
        } const i=Le(s[e]||n[e], t)||Le(s.appContext[e], t); return !i&&r?n:i;
      }
    }(Ie, e, !0, t)||e;
  } const Te=Symbol(); function Le(e, t) {
    return e&&(e[t]||e[(0, o._A)(t)]||e[(0, o.kC)((0, o._A)(t))]);
  } const Fe=Symbol(void 0); const ze=Symbol(void 0); const He=Symbol(void 0); const Me=Symbol(void 0); const $e=[]; let Ne=null; function De(e=!1) {
    $e.push(Ne=e?null:[]);
  } let Ue=1; function Je(e) {
    Ue+=e;
  } function Be(e) {
    return e.dynamicChildren=Ue>0?Ne||o.Z6:null, $e.pop(), Ne=$e[$e.length-1]||null, Ue>0&&Ne&&Ne.push(e), e;
  } function qe(e, t, n, r, o, s) {
    return Be(Xe(e, t, n, r, o, s, !0));
  } function Ve(e, t, n, r, o) {
    return Be(Qe(e, t, n, r, o, !0));
  } function We(e) {
    return !!e&&!0===e.__v_isVNode;
  } function Ge(e, t) {
    return e.type===t.type&&e.key===t.key;
  } const Ke='__vInternal'; const Ze=({key: e})=>null!=e?e:null; const Ye=({ref: e, ref_key: t, ref_for: n})=>null!=e?(0, o.HD)(e)||(0, r.dq)(e)||(0, o.mf)(e)?{i: a, r: e, k: t, f: !!n}:e:null; function Xe(e, t=null, n=null, r=0, s=null, i=(e===Fe?0:1), l=!1, a=!1) {
    const u={__v_isVNode: !0, __v_skip: !0, type: e, props: t, key: t&&Ze(t), ref: t&&Ye(t), scopeId: c, slotScopeIds: null, children: n, component: null, suspense: null, ssContent: null, ssFallback: null, dirs: null, transition: null, el: null, anchor: null, target: null, targetAnchor: null, staticCount: 0, shapeFlag: i, patchFlag: r, dynamicProps: s, dynamicChildren: null, appContext: null}; return a?(it(u, n), 128&i&&e.normalize(u)):n&&(u.shapeFlag|=(0, o.HD)(n)?8:16), Ue>0&&!l&&Ne&&(u.patchFlag>0||6&i)&&32!==u.patchFlag&&Ne.push(u), u;
  } const Qe=function(e, t=null, n=null, s=0, i=null, l=!1) {
    if (e&&e!==Te||(e=He), We(e)) {
      const r=et(e, t, !0); return n&&it(r, n), r;
    } if (a=e, (0, o.mf)(a)&&'__vccOpts'in a&&(e=e.__vccOpts), t) {
      t=function(e) {
        return e?(0, r.X3)(e)||Ke in e?(0, o.l7)({}, e):e:null;
      }(t); let {class: e, style: n}=t; e&&!(0, o.HD)(e)&&(t.class=(0, o.C_)(e)), (0, o.Kn)(n)&&((0, r.X3)(n)&&!(0, o.kJ)(n)&&(n=(0, o.l7)({}, n)), t.style=(0, o.j5)(n));
    } let a; return Xe(e, t, n, s, i, (0, o.HD)(e)?1:((e)=>e.__isSuspense)(e)?128:((e)=>e.__isTeleport)(e)?64:(0, o.Kn)(e)?4:(0, o.mf)(e)?2:0, l, !0);
  }; function et(e, t, n=!1) {
    const {props: r, ref: s, patchFlag: i, children: l}=e; const a=t?lt(r||{}, t):r; return {__v_isVNode: !0, __v_skip: !0, type: e.type, props: a, key: a&&Ze(a), ref: t&&t.ref?n&&s?(0, o.kJ)(s)?s.concat(Ye(t)):[s, Ye(t)]:Ye(t):s, scopeId: e.scopeId, slotScopeIds: e.slotScopeIds, children: l, target: e.target, targetAnchor: e.targetAnchor, staticCount: e.staticCount, shapeFlag: e.shapeFlag, patchFlag: t&&e.type!==Fe?-1===i?16:16|i:i, dynamicProps: e.dynamicProps, dynamicChildren: e.dynamicChildren, appContext: e.appContext, dirs: e.dirs, transition: e.transition, component: e.component, suspense: e.suspense, ssContent: e.ssContent&&et(e.ssContent), ssFallback: e.ssFallback&&et(e.ssFallback), el: e.el, anchor: e.anchor};
  } function tt(e=' ', t=0) {
    return Qe(ze, null, e, t);
  } function nt(e, t) {
    const n=Qe(Me, null, e); return n.staticCount=t, n;
  } function rt(e='', t=!1) {
    return t?(De(), Ve(He, null, e)):Qe(He, null, e);
  } function ot(e) {
    return null==e||'boolean'==typeof e?Qe(He):(0, o.kJ)(e)?Qe(Fe, null, e.slice()):'object'==typeof e?st(e):Qe(ze, null, String(e));
  } function st(e) {
    return null===e.el||e.memo?e:et(e);
  } function it(e, t) {
    let n=0; const {shapeFlag: r}=e; if (null==t)t=null; else if ((0, o.kJ)(t))n=16; else if ('object'==typeof t) {
      if (65&r) {
        const n=t.default; return void(n&&(n._c&&(n._d=!1), it(e, n()), n._c&&(n._d=!0)));
      } {n=32; const r=t._; r||Ke in t?3===r&&a&&(1===a.slots._?t._=1:(t._=2, e.patchFlag|=1024)):t._ctx=a;}
    } else (0, o.mf)(t)?(t={default: t, _ctx: a}, n=32):(t=String(t), 64&r?(n=16, t=[tt(t)]):n=8); e.children=t, e.shapeFlag|=n;
  } function lt(...e) {
    const t={}; for (let n=0; n<e.length; n++) {
      const r=e[n]; for (const e in r) {
        if ('class'===e)t.class!==r.class&&(t.class=(0, o.C_)([t.class, r.class])); else if ('style'===e)t.style=(0, o.j5)([t.style, r.style]); else if ((0, o.F7)(e)) {
          const n=t[e]; const s=r[e]; n===s||(0, o.kJ)(n)&&n.includes(s)||(t[e]=n?[].concat(n, s):s);
        } else ''!==e&&(t[e]=r[e]);
      }
    } return t;
  } function at(e, t, n, r=null) {
    jt(e, t, 7, [n, r]);
  } function ct(e, t, n, r) {
    let s; const i=n&&n[r]; if ((0, o.kJ)(e)||(0, o.HD)(e)) {
      s=new Array(e.length); for (let n=0, r=e.length; n<r; n++)s[n]=t(e[n], n, void 0, i&&i[n]);
    } else if ('number'==typeof e) {
      s=new Array(e); for (let n=0; n<e; n++)s[n]=t(n+1, n, void 0, i&&i[n]);
    } else if ((0, o.Kn)(e)) {
      if (e[Symbol.iterator])s=Array.from(e, ((e, n)=>t(e, n, void 0, i&&i[n]))); else {
        const n=Object.keys(e); s=new Array(n.length); for (let r=0, o=n.length; r<o; r++) {
          const o=n[r]; s[r]=t(e[o], o, r, i&&i[r]);
        }
      }
    } else s=[]; return n&&(n[r]=s), s;
  } function ut(e, t, n={}, r, o) {
    if (a.isCE) return Qe('slot', 'default'===t?null:{name: t}, r&&r()); const s=e[t]; s&&s._c&&(s._d=!1), De(); const i=s&&pt(s(n)); const l=Ve(Fe, {key: n.key||`_${t}`}, i||(r?r():[]), i&&1===e._?64:-2); return !o&&l.scopeId&&(l.slotScopeIds=[l.scopeId+'-s']), s&&s._c&&(s._d=!0), l;
  } function pt(e) {
    return e.some(((e)=>!We(e)||e.type!==He&&!(e.type===Fe&&!pt(e.children))))?e:null;
  } const dt=(e)=>e?Ot(e)?St(e)||e.proxy:dt(e.parent):null; const ft=(0, o.l7)(Object.create(null), {$: (e)=>e, $el: (e)=>e.vnode.el, $data: (e)=>e.data, $props: (e)=>e.props, $attrs: (e)=>e.attrs, $slots: (e)=>e.slots, $refs: (e)=>e.refs, $parent: (e)=>dt(e.parent), $root: (e)=>dt(e.root), $emit: (e)=>e.emit, $options: (e)=>X(e), $forceUpdate: (e)=>()=>Jt(e.update), $nextTick: (e)=>Ut.bind(e.proxy), $watch: (e)=>Qt.bind(e)}); const ht={get({_: e}, t) {
    const {ctx: n, setupState: s, data: i, props: l, accessCache: a, type: c, appContext: u}=e; let p; if ('$'!==t[0]) {
      const r=a[t]; if (void 0!==r) {
        switch (r) {
          case 1: return s[t]; case 2: return i[t]; case 4: return n[t]; case 3: return l[t];
        }
      } else {
        if (s!==o.kT&&(0, o.RI)(s, t)) return a[t]=1, s[t]; if (i!==o.kT&&(0, o.RI)(i, t)) return a[t]=2, i[t]; if ((p=e.propsOptions[0])&&(0, o.RI)(p, t)) return a[t]=3, l[t]; if (n!==o.kT&&(0, o.RI)(n, t)) return a[t]=4, n[t]; K&&(a[t]=0);
      }
    } const d=ft[t]; let f; let h; return d?('$attrs'===t&&(0, r.j)(e, 'get', t), d(e)):(f=c.__cssModules)&&(f=f[t])?f:n!==o.kT&&(0, o.RI)(n, t)?(a[t]=4, n[t]):(h=u.config.globalProperties, (0, o.RI)(h, t)?h[t]:void 0);
  }, set({_: e}, t, n) {
    const {data: r, setupState: s, ctx: i}=e; if (s!==o.kT&&(0, o.RI)(s, t))s[t]=n; else if (r!==o.kT&&(0, o.RI)(r, t))r[t]=n; else if ((0, o.RI)(e.props, t)) return !1; return !('$'===t[0]&&t.slice(1)in e||(i[t]=n, 0));
  }, has({_: {data: e, setupState: t, accessCache: n, ctx: r, appContext: s, propsOptions: i}}, l) {
    let a; return !!n[l]||e!==o.kT&&(0, o.RI)(e, l)||t!==o.kT&&(0, o.RI)(t, l)||(a=i[0])&&(0, o.RI)(a, l)||(0, o.RI)(r, l)||(0, o.RI)(ft, l)||(0, o.RI)(s.config.globalProperties, l);
  }}; const mt=be(); let vt=0; let gt=null; const yt=()=>gt||a; const bt=(e)=>{
    gt=e, e.scope.on();
  }; const wt=()=>{
    gt&&gt.scope.off(), gt=null;
  }; function Ot(e) {
    return 4&e.vnode.shapeFlag;
  } let _t=!1; function kt(e, t, n) {
(0, o.mf)(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:(0, o.Kn)(t)&&(e.setupState=(0, r.WL)(t)), Et(e, n);
  } function Et(e, t, n) {
    const s=e.type; e.render||(e.render=s.render||o.dG), bt(e), (0, r.Jd)(), function(e) {
      const t=X(e); const n=e.proxy; const s=e.ctx; K=!1, t.beforeCreate&&Z(t.beforeCreate, e, 'bc'); const {data: i, computed: l, methods: a, watch: c, provide: u, inject: p, created: d, beforeMount: f, mounted: h, beforeUpdate: m, updated: v, activated: b, deactivated: w, beforeDestroy: O, beforeUnmount: _, destroyed: k, unmounted: E, render: S, renderTracked: C, renderTriggered: j, errorCaptured: P, serverPrefetch: x, expose: A, inheritAttrs: I, components: R, directives: F, filters: z}=t; if (p&&function(e, t, n=o.dG, s=!1) {
        (0, o.kJ)(e)&&(e=ne(e)); for (const n in e) {
          const i=e[n]; let l; l=(0, o.Kn)(i)?'default'in i?y(i.from||n, i.default, !0):y(i.from||n):y(i), (0, r.dq)(l)&&s?Object.defineProperty(t, n, {enumerable: !0, configurable: !0, get: ()=>l.value, set: (e)=>l.value=e}):t[n]=l;
        }
      }(p, s, null, e.appContext.config.unwrapInjectedRef), a) {
        for (const e in a) {
          const t=a[e]; (0, o.mf)(t)&&(s[e]=t.bind(n));
        }
      } if (i) {
        const t=i.call(n, n); (0, o.Kn)(t)&&(e.data=(0, r.qj)(t));
      } if (K=!0, l) {
        for (const e in l) {
          const t=l[e]; const i=(0, o.mf)(t)?t.bind(n, n):(0, o.mf)(t.get)?t.get.bind(n, n):o.dG; const a=!(0, o.mf)(t)&&(0, o.mf)(t.set)?t.set.bind(n):o.dG; const c=(0, r.Fl)({get: i, set: a}); Object.defineProperty(s, e, {enumerable: !0, configurable: !0, get: ()=>c.value, set: (e)=>c.value=e});
        }
      } if (c) for (const e in c)Y(c[e], s, n, e); if (u) {
        const e=(0, o.mf)(u)?u.call(n):u; Reflect.ownKeys(e).forEach(((t)=>{
          g(t, e[t]);
        }));
      } function H(e, t) {
(0, o.kJ)(t)?t.forEach(((t)=>e(t.bind(n)))):t&&e(t.bind(n));
      } if (d&&Z(d, e, 'c'), H($, f), H(N, h), H(D, m), H(U, v), H(T, b), H(L, w), H(G, P), H(W, C), H(V, j), H(J, _), H(B, E), H(q, x), (0, o.kJ)(A)) {
        if (A.length) {
          const t=e.exposed||(e.exposed={}); A.forEach(((e)=>{
            Object.defineProperty(t, e, {get: ()=>n[e], set: (t)=>n[e]=t});
          }));
        } else e.exposed||(e.exposed={});
      } S&&e.render===o.dG&&(e.render=S), null!=I&&(e.inheritAttrs=I), R&&(e.components=R), F&&(e.directives=F);
    }(e), (0, r.lk)(), wt();
  } function St(e) {
    if (e.exposed) return e.exposeProxy||(e.exposeProxy=new Proxy((0, r.WL)((0, r.Xl)(e.exposed)), {get: (t, n)=>n in t?t[n]:n in ft?ft[n](e):void 0}));
  } function Ct(e, t, n, r) {
    let o; try {
      o=r?e(...r):e();
    } catch (e) {
      Pt(e, t, n);
    } return o;
  } function jt(e, t, n, r) {
    if ((0, o.mf)(e)) {
      const s=Ct(e, t, n, r); return s&&(0, o.tI)(s)&&s.catch(((e)=>{
        Pt(e, t, n);
      })), s;
    } const s=[]; for (let o=0; o<e.length; o++)s.push(jt(e[o], t, n, r)); return s;
  } function Pt(e, t, n, r=!0) {
    if (t&&t.vnode, t) {
      let r=t.parent; const o=t.proxy; const s=n; for (;r;) {
        const t=r.ec; if (t) for (let n=0; n<t.length; n++) if (!1===t[n](e, o, s)) return; r=r.parent;
      } const i=t.appContext.config.errorHandler; if (i) return void Ct(i, null, 10, [e, o, s]);
    }!function(e, t, n, r=!0) {
      console.error(e);
    }(e, 0, 0, r);
  } let xt=!1; let At=!1; const It=[]; let Rt=0; const Tt=[]; let Lt=null; let Ft=0; const zt=[]; let Ht=null; let Mt=0; const $t=Promise.resolve(); let Nt=null; let Dt=null; function Ut(e) {
    const t=Nt||$t; return e?t.then(this?e.bind(this):e):t;
  } function Jt(e) {
    It.length&&It.includes(e, xt&&e.allowRecurse?Rt+1:Rt)||e===Dt||(null==e.id?It.push(e):It.splice(function(e) {
      let t=Rt+1; let n=It.length; for (;t<n;) {
        const r=t+n>>>1; Gt(It[r])<e?t=r+1:n=r;
      } return t;
    }(e.id), 0, e), Bt());
  } function Bt() {
    xt||At||(At=!0, Nt=$t.then(Kt));
  } function qt(e, t, n, r) {
(0, o.kJ)(e)?n.push(...e):t&&t.includes(e, e.allowRecurse?r+1:r)||n.push(e), Bt();
  } function Vt(e, t=null) {
    if (Tt.length) {
      for (Dt=t, Lt=[...new Set(Tt)], Tt.length=0, Ft=0; Ft<Lt.length; Ft++)Lt[Ft](); Lt=null, Ft=0, Dt=null, Vt(e, t);
    }
  } function Wt(e) {
    if (zt.length) {
      const e=[...new Set(zt)]; if (zt.length=0, Ht) return void Ht.push(...e); for (Ht=e, Ht.sort(((e, t)=>Gt(e)-Gt(t))), Mt=0; Mt<Ht.length; Mt++)Ht[Mt](); Ht=null, Mt=0;
    }
  } const Gt=(e)=>null==e.id?1/0:e.id; function Kt(e) {
    At=!1, xt=!0, Vt(e), It.sort(((e, t)=>Gt(e)-Gt(t))), o.dG; try {
      for (Rt=0; Rt<It.length; Rt++) {
        const e=It[Rt]; e&&!1!==e.active&&Ct(e, null, 14);
      }
    } finally {
      Rt=0, It.length=0, Wt(), xt=!1, Nt=null, (It.length||Tt.length||zt.length)&&Kt(e);
    }
  } const Zt={}; function Yt(e, t, n) {
    return Xt(e, t, n);
  } function Xt(e, t, {immediate: n, deep: s, flush: i, onTrack: l, onTrigger: a}=o.kT) {
    const c=gt; let u; let p; let d=!1; let f=!1; if ((0, r.dq)(e)?(u=()=>e.value, d=!!e._shallow):(0, r.PG)(e)?(u=()=>e, s=!0):(0, o.kJ)(e)?(f=!0, d=e.some(r.PG), u=()=>e.map(((e)=>(0, r.dq)(e)?e.value:(0, r.PG)(e)?tn(e):(0, o.mf)(e)?Ct(e, c, 2):void 0))):u=(0, o.mf)(e)?t?()=>Ct(e, c, 2):()=>{
      if (!c||!c.isUnmounted) return p&&p(), jt(e, c, 3, [h]);
    }:o.dG, t&&s) {
      const e=u; u=()=>tn(e());
    } let h=(e)=>{
      p=y.onStop=()=>{
        Ct(e, c, 4);
      };
    }; if (_t) return h=o.dG, t?n&&jt(t, c, 3, [u(), f?[]:void 0, h]):u(), o.dG; let m=f?[]:Zt; const v=()=>{
      if (y.active) {
        if (t) {
          const e=y.run(); (s||d||(f?e.some(((e, t)=>(0, o.aU)(e, m[t]))):(0, o.aU)(e, m)))&&(p&&p(), jt(t, c, 3, [e, m===Zt?void 0:m, h]), m=e);
        } else y.run();
      }
    }; let g; v.allowRecurse=!!t, g='sync'===i?v:'post'===i?()=>je(v, c&&c.suspense):()=>{
!c||c.isMounted?function(e) {
  qt(e, Lt, Tt, Ft);
}(v):v();
    }; const y=new r.qq(u, g); return t?n?v():m=y.run():'post'===i?je(y.run.bind(y), c&&c.suspense):y.run(), ()=>{
      y.stop(), c&&c.scope&&(0, o.Od)(c.scope.effects, y);
    };
  } function Qt(e, t, n) {
    const r=this.proxy; const s=(0, o.HD)(e)?e.includes('.')?en(r, e):()=>r[e]:e.bind(r, r); let i; (0, o.mf)(t)?i=t:(i=t.handler, n=t); const l=gt; bt(this); const a=Xt(s, i.bind(r), n); return l?bt(l):wt(), a;
  } function en(e, t) {
    const n=t.split('.'); return ()=>{
      let t=e; for (let e=0; e<n.length&&t; e++)t=t[n[e]]; return t;
    };
  } function tn(e, t) {
    if (!(0, o.Kn)(e)||e.__v_skip) return e; if ((t=t||new Set).has(e)) return e; if (t.add(e), (0, r.dq)(e))tn(e.value, t); else if ((0, o.kJ)(e)) for (let n=0; n<e.length; n++)tn(e[n], t); else if ((0, o.DM)(e)||(0, o._N)(e)) {
      e.forEach(((e)=>{
        tn(e, t);
      }));
    } else if ((0, o.PO)(e)) for (const n in e)tn(e[n], t); return e;
  } function nn(e, t, n) {
    const r=arguments.length; return 2===r?(0, o.Kn)(t)&&!(0, o.kJ)(t)?We(t)?Qe(e, null, [t]):Qe(e, t):Qe(e, null, t):(r>3?n=Array.prototype.slice.call(arguments, 2):3===r&&We(n)&&(n=[n]), Qe(e, t, n));
  }Symbol(''); const rn='3.2.26';
}, 963: (e, t, n)=>{
  'use strict'; n.d(t, {uT: ()=>_, vr: ()=>$, F8: ()=>L}); const r=n(577); const o=n(252); n(262); const s='undefined'!=typeof document?document:null; const i=new Map; const l={insert: (e, t, n)=>{
    t.insertBefore(e, n||null);
  }, remove: (e)=>{
    const t=e.parentNode; t&&t.removeChild(e);
  }, createElement: (e, t, n, r)=>{
    const o=t?s.createElementNS('http://www.w3.org/2000/svg', e):s.createElement(e, n?{is: n}:void 0); return 'select'===e&&r&&null!=r.multiple&&o.setAttribute('multiple', r.multiple), o;
  }, createText: (e)=>s.createTextNode(e), createComment: (e)=>s.createComment(e), setText: (e, t)=>{
    e.nodeValue=t;
  }, setElementText: (e, t)=>{
    e.textContent=t;
  }, parentNode: (e)=>e.parentNode, nextSibling: (e)=>e.nextSibling, querySelector: (e)=>s.querySelector(e), setScopeId(e, t) {
    e.setAttribute(t, '');
  }, cloneNode(e) {
    const t=e.cloneNode(!0); return '_value'in e&&(t._value=e._value), t;
  }, insertStaticContent(e, t, n, r) {
    const o=n?n.previousSibling:t.lastChild; let l=i.get(e); if (!l) {
      const t=s.createElement('template'); if (t.innerHTML=r?`<svg>${e}</svg>`:e, l=t.content, r) {
        const e=l.firstChild; for (;e.firstChild;)l.appendChild(e.firstChild); l.removeChild(e);
      }i.set(e, l);
    } return t.insertBefore(l.cloneNode(!0), n), [o?o.nextSibling:t.firstChild, n?n.previousSibling:t.lastChild];
  }}; const a=/\s*!important$/; function c(e, t, n) {
    if ((0, r.kJ)(n))n.forEach(((n)=>c(e, t, n))); else if (t.startsWith('--'))e.setProperty(t, n); else {
      const o=function(e, t) {
        const n=p[t]; if (n) return n; let o=(0, r._A)(t); if ('filter'!==o&&o in e) return p[t]=o; o=(0, r.kC)(o); for (let n=0; n<u.length; n++) {
          const r=u[n]+o; if (r in e) return p[t]=r;
        } return t;
      }(e, t); a.test(n)?e.setProperty((0, r.rs)(o), n.replace(a, ''), 'important'):e[o]=n;
    }
  } const u=['Webkit', 'Moz', 'ms']; const p={}; const d='http://www.w3.org/1999/xlink'; let f=Date.now; let h=!1; if ('undefined'!=typeof window) {
    f()>document.createEvent('Event').timeStamp&&(f=()=>performance.now()); const e=navigator.userAgent.match(/firefox\/(\d+)/i); h=!!(e&&Number(e[1])<=53);
  } let m=0; const v=Promise.resolve(); const g=()=>{
    m=0;
  }; const y=/(?:Once|Passive|Capture)$/; const b=/^on[a-z]/; 'undefined'!=typeof HTMLElement&&HTMLElement; const w='transition'; const O='animation'; const _=(e, {slots: t})=>(0, o.h)(o.P$, function(e) {
    const t={}; for (const n in e)n in k||(t[n]=e[n]); if (!1===e.css) return t; const {name: n='v', type: o, duration: s, enterFromClass: i=`${n}-enter-from`, enterActiveClass: l=`${n}-enter-active`, enterToClass: a=`${n}-enter-to`, appearFromClass: c=i, appearActiveClass: u=l, appearToClass: p=a, leaveFromClass: d=`${n}-leave-from`, leaveActiveClass: f=`${n}-leave-active`, leaveToClass: h=`${n}-leave-to`}=e; const m=function(e) {
      if (null==e) return null; if ((0, r.Kn)(e)) return [C(e.enter), C(e.leave)]; {const t=C(e); return [t, t];}
    }(s); const v=m&&m[0]; const g=m&&m[1]; const {onBeforeEnter: y, onEnter: b, onEnterCancelled: w, onLeave: O, onLeaveCancelled: _, onBeforeAppear: A=y, onAppear: R=b, onAppearCancelled: T=w}=t; const L=(e, t, n)=>{
      P(e, t?p:a), P(e, t?u:l), n&&n();
    }; const F=(e, t)=>{
      P(e, h), P(e, f), t&&t();
    }; const z=(e)=>(t, n)=>{
      const r=e?R:b; const s=()=>L(t, e, n); E(r, [t, s]), x((()=>{
        P(t, e?c:i), j(t, e?p:a), S(r)||I(t, o, v, s);
      }));
    }; return (0, r.l7)(t, {onBeforeEnter(e) {
      E(y, [e]), j(e, i), j(e, l);
    }, onBeforeAppear(e) {
      E(A, [e]), j(e, c), j(e, u);
    }, onEnter: z(!1), onAppear: z(!0), onLeave(e, t) {
      const n=()=>F(e, t); j(e, d), document.body.offsetHeight, j(e, f), x((()=>{
        P(e, d), j(e, h), S(O)||I(e, o, g, n);
      })), E(O, [e, n]);
    }, onEnterCancelled(e) {
      L(e, !1), E(w, [e]);
    }, onAppearCancelled(e) {
      L(e, !0), E(T, [e]);
    }, onLeaveCancelled(e) {
      F(e), E(_, [e]);
    }});
  }(e), t); _.displayName='Transition'; const k={name: String, type: String, css: {type: Boolean, default: !0}, duration: [String, Number, Object], enterFromClass: String, enterActiveClass: String, enterToClass: String, appearFromClass: String, appearActiveClass: String, appearToClass: String, leaveFromClass: String, leaveActiveClass: String, leaveToClass: String}; const E=(_.props=(0, r.l7)({}, o.P$.props, k), (e, t=[])=>{
(0, r.kJ)(e)?e.forEach(((e)=>e(...t))):e&&e(...t);
  }); const S=(e)=>!!e&&((0, r.kJ)(e)?e.some(((e)=>e.length>1)):e.length>1); function C(e) {
    return (0, r.He)(e);
  } function j(e, t) {
    t.split(/\s+/).forEach(((t)=>t&&e.classList.add(t))), (e._vtc||(e._vtc=new Set)).add(t);
  } function P(e, t) {
    t.split(/\s+/).forEach(((t)=>t&&e.classList.remove(t))); const {_vtc: n}=e; n&&(n.delete(t), n.size||(e._vtc=void 0));
  } function x(e) {
    requestAnimationFrame((()=>{
      requestAnimationFrame(e);
    }));
  } let A=0; function I(e, t, n, r) {
    const o=e._endId=++A; const s=()=>{
      o===e._endId&&r();
    }; if (n) return setTimeout(s, n); const {type: i, timeout: l, propCount: a}=function(e, t) {
      const n=window.getComputedStyle(e); const r=(e)=>(n[e]||'').split(', '); const o=r('transitionDelay'); const s=r('transitionDuration'); const i=R(o, s); const l=r('animationDelay'); const a=r('animationDuration'); const c=R(l, a); let u=null; let p=0; let d=0; return t===w?i>0&&(u=w, p=i, d=s.length):t===O?c>0&&(u=O, p=c, d=a.length):(p=Math.max(i, c), u=p>0?i>c?w:O:null, d=u?u===w?s.length:a.length:0), {type: u, timeout: p, propCount: d, hasTransform: u===w&&/\b(transform|all)(,|$)/.test(n.transitionProperty)};
    }(e, t); if (!i) return r(); const c=i+'end'; let u=0; const p=()=>{
      e.removeEventListener(c, d), s();
    }; const d=(t)=>{
      t.target===e&&++u>=a&&p();
    }; setTimeout((()=>{
      u<a&&p();
    }), l+1), e.addEventListener(c, d);
  } function R(e, t) {
    for (;e.length<t.length;)e=e.concat(e); return Math.max(...t.map(((t, n)=>T(t)+T(e[n]))));
  } function T(e) {
    return 1e3*Number(e.slice(0, -1).replace(',', '.'));
  } new WeakMap, new WeakMap; const L={beforeMount(e, {value: t}, {transition: n}) {
    e._vod='none'===e.style.display?'':e.style.display, n&&t?n.beforeEnter(e):F(e, t);
  }, mounted(e, {value: t}, {transition: n}) {
    n&&t&&n.enter(e);
  }, updated(e, {value: t, oldValue: n}, {transition: r}) {
    !t!=!n&&(r?t?(r.beforeEnter(e), F(e, !0), r.enter(e)):r.leave(e, (()=>{
      F(e, !1);
    })):F(e, t));
  }, beforeUnmount(e, {value: t}) {
    F(e, t);
  }}; function F(e, t) {
    e.style.display=t?e._vod:'none';
  } const z=(0, r.l7)({patchProp: (e, t, n, s, i=!1, l, a, u, p)=>{
'class'===t?function(e, t, n) {
  const r=e._vtc; r&&(t=(t?[t, ...r]:[...r]).join(' ')), null==t?e.removeAttribute('class'):n?e.setAttribute('class', t):e.className=t;
}(e, s, i):'style'===t?function(e, t, n) {
  const o=e.style; const s=(0, r.HD)(n); if (n&&!s) {
    for (const e in n)c(o, e, n[e]); if (t&&!(0, r.HD)(t)) for (const e in t)null==n[e]&&c(o, e, '');
  } else {
    const r=o.display; s?t!==n&&(o.cssText=n):t&&e.removeAttribute('style'), '_vod'in e&&(o.display=r);
  }
}(e, n, s):(0, r.F7)(t)?(0, r.tR)(t)||function(e, t, n, s, i=null) {
  const l=e._vei||(e._vei={}); const a=l[t]; if (s&&a)a.value=s; else {
    const [n, c]=function(e) {
      let t; if (y.test(e)) {
        let n; for (t={}; n=e.match(y);)e=e.slice(0, e.length-n[0].length), t[n[0].toLowerCase()]=!0;
      } return [(0, r.rs)(e.slice(2)), t];
    }(t); if (s) {
      const a=l[t]=function(e, t) {
        const n=(e)=>{
          const s=e.timeStamp||f(); (h||s>=n.attached-1)&&(0, o.$d)(function(e, t) {
            if ((0, r.kJ)(t)) {
              const n=e.stopImmediatePropagation; return e.stopImmediatePropagation=()=>{
                n.call(e), e._stopped=!0;
              }, t.map(((e)=>(t)=>!t._stopped&&e(t)));
            } return t;
          }(e, n.value), t, 5, [e]);
        }; return n.value=e, n.attached=m||(v.then(g), m=f()), n;
      }(s, i); !function(e, t, n, r) {
        e.addEventListener(t, n, r);
      }(e, n, a, c);
    } else {
      a&&(function(e, t, n, r) {
        e.removeEventListener(t, n, r);
      }(e, n, a, c), l[t]=void 0);
    }
  }
}(e, t, 0, s, a):('.'===t[0]?(t=t.slice(1), 1):'^'===t[0]?(t=t.slice(1), 0):function(e, t, n, o) {
  return o?'innerHTML'===t||'textContent'===t||!!(t in e&&b.test(t)&&(0, r.mf)(n)):'spellcheck'!==t&&'draggable'!==t&&('form'!==t&&(('list'!==t||'INPUT'!==e.tagName)&&(('type'!==t||'TEXTAREA'!==e.tagName)&&((!b.test(t)||!(0, r.HD)(n))&&t in e))));
}(e, t, s, i))?function(e, t, n, o, s, i, l) {
  if ('innerHTML'===t||'textContent'===t) return o&&l(o, s, i), void(e[t]=null==n?'':n); if ('value'===t&&'PROGRESS'!==e.tagName&&!e.tagName.includes('-')) {
    e._value=n; const r=null==n?'':n; return e.value===r&&'OPTION'!==e.tagName||(e.value=r), void(null==n&&e.removeAttribute(t));
  } if (''===n||null==n) {
    const o=typeof e[t]; if ('boolean'===o) return void(e[t]=(0, r.yA)(n)); if (null==n&&'string'===o) return e[t]='', void e.removeAttribute(t); if ('number'===o) {
      try {
        e[t]=0;
      } catch (e) {} return void e.removeAttribute(t);
    }
  } try {
    e[t]=n;
  } catch (e) {}
}(e, t, s, l, a, u, p):('true-value'===t?e._trueValue=s:'false-value'===t&&(e._falseValue=s), function(e, t, n, o, s) {
  if (o&&t.startsWith('xlink:'))null==n?e.removeAttributeNS(d, t.slice(6, t.length)):e.setAttributeNS(d, t, n); else {
    const o=(0, r.Pq)(t); null==n||o&&!(0, r.yA)(n)?e.removeAttribute(t):e.setAttribute(t, o?'':n);
  }
}(e, t, s, i));
  }}, l); let H; let M=!1; const $=(...e)=>{
    const t=(H=M?H:(0, o.Eo)(z), M=!0, H).createApp(...e); const {mount: n}=t; return t.mount=(e)=>{
      const t=function(e) {
        if ((0, r.HD)(e)) return document.querySelector(e); return e;
      }(e); if (t) return n(t, !0, t instanceof SVGElement);
    }, t;
  };
}, 577: (e, t, n)=>{
  'use strict'; function r(e, t) {
    const n=Object.create(null); const r=e.split(','); for (let e=0; e<r.length; e++)n[r[e]]=!0; return t?(e)=>!!n[e.toLowerCase()]:(e)=>!!n[e];
  }n.d(t, {Z6: ()=>g, kT: ()=>v, NO: ()=>b, dG: ()=>y, _A: ()=>B, kC: ()=>W, Nj: ()=>Y, l7: ()=>k, E9: ()=>ee, aU: ()=>K, RI: ()=>C, rs: ()=>V, yA: ()=>i, ir: ()=>Z, kJ: ()=>j, mf: ()=>I, e1: ()=>o, S0: ()=>N, _N: ()=>P, tR: ()=>_, Kn: ()=>L, F7: ()=>O, PO: ()=>$, tI: ()=>F, Gg: ()=>D, DM: ()=>x, Pq: ()=>s, HD: ()=>R, yk: ()=>T, WV: ()=>d, hq: ()=>f, fY: ()=>r, C_: ()=>p, j5: ()=>l, Od: ()=>E, zw: ()=>h, hR: ()=>G, He: ()=>X, W7: ()=>M}); const o=r('Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt'); const s=r('itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly'); function i(e) {
    return !!e||''===e;
  } function l(e) {
    if (j(e)) {
      const t={}; for (let n=0; n<e.length; n++) {
        const r=e[n]; const o=R(r)?u(r):l(r); if (o) for (const e in o)t[e]=o[e];
      } return t;
    } return R(e)||L(e)?e:void 0;
  } const a=/;(?![^(]*\))/g; const c=/:(.+)/; function u(e) {
    const t={}; return e.split(a).forEach(((e)=>{
      if (e) {
        const n=e.split(c); n.length>1&&(t[n[0].trim()]=n[1].trim());
      }
    })), t;
  } function p(e) {
    let t=''; if (R(e))t=e; else if (j(e)) {
      for (let n=0; n<e.length; n++) {
        const r=p(e[n]); r&&(t+=r+' ');
      }
    } else if (L(e)) for (const n in e)e[n]&&(t+=n+' '); return t.trim();
  } function d(e, t) {
    if (e===t) return !0; let n=A(e); let r=A(t); if (n||r) return !(!n||!r)&&e.getTime()===t.getTime(); if (n=j(e), r=j(t), n||r) {
      return !(!n||!r)&&function(e, t) {
        if (e.length!==t.length) return !1; let n=!0; for (let r=0; n&&r<e.length; r++)n=d(e[r], t[r]); return n;
      }(e, t);
    } if (n=L(e), r=L(t), n||r) {
      if (!n||!r) return !1; if (Object.keys(e).length!==Object.keys(t).length) return !1; for (const n in e) {
        const r=e.hasOwnProperty(n); const o=t.hasOwnProperty(n); if (r&&!o||!r&&o||!d(e[n], t[n])) return !1;
      }
    } return String(e)===String(t);
  } function f(e, t) {
    return e.findIndex(((e)=>d(e, t)));
  } const h=(e)=>null==e?'':j(e)||L(e)&&(e.toString===z||!I(e.toString))?JSON.stringify(e, m, 2):String(e); const m=(e, t)=>t&&t.__v_isRef?m(e, t.value):P(t)?{[`Map(${t.size})`]: [...t.entries()].reduce(((e, [t, n])=>(e[`${t} =>`]=n, e)), {})}:x(t)?{[`Set(${t.size})`]: [...t.values()]}:!L(t)||j(t)||$(t)?t:String(t); const v={}; const g=[]; const y=()=>{}; const b=()=>!1; const w=/^on[^a-z]/; const O=(e)=>w.test(e); const _=(e)=>e.startsWith('onUpdate:'); const k=Object.assign; const E=(e, t)=>{
    const n=e.indexOf(t); n>-1&&e.splice(n, 1);
  }; const S=Object.prototype.hasOwnProperty; const C=(e, t)=>S.call(e, t); const j=Array.isArray; const P=(e)=>'[object Map]'===H(e); const x=(e)=>'[object Set]'===H(e); const A=(e)=>e instanceof Date; const I=(e)=>'function'==typeof e; const R=(e)=>'string'==typeof e; const T=(e)=>'symbol'==typeof e; const L=(e)=>null!==e&&'object'==typeof e; const F=(e)=>L(e)&&I(e.then)&&I(e.catch); const z=Object.prototype.toString; const H=(e)=>z.call(e); const M=(e)=>H(e).slice(8, -1); const $=(e)=>'[object Object]'===H(e); const N=(e)=>R(e)&&'NaN'!==e&&'-'!==e[0]&&''+parseInt(e, 10)===e; const D=r(',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted'); const U=(e)=>{
    const t=Object.create(null); return (n)=>t[n]||(t[n]=e(n));
  }; const J=/-(\w)/g; const B=U(((e)=>e.replace(J, ((e, t)=>t?t.toUpperCase():'')))); const q=/\B([A-Z])/g; const V=U(((e)=>e.replace(q, '-$1').toLowerCase())); const W=U(((e)=>e.charAt(0).toUpperCase()+e.slice(1))); const G=U(((e)=>e?`on${W(e)}`:'')); const K=(e, t)=>!Object.is(e, t); const Z=(e, t)=>{
    for (let n=0; n<e.length; n++)e[n](t);
  }; const Y=(e, t, n)=>{
    Object.defineProperty(e, t, {configurable: !0, enumerable: !1, value: n});
  }; const X=(e)=>{
    const t=parseFloat(e); return isNaN(t)?e:t;
  }; let Q; const ee=()=>Q||(Q='undefined'!=typeof globalThis?globalThis:'undefined'!=typeof self?self:'undefined'!=typeof window?window:'undefined'!=typeof global?global:{});
}, 698: (e, t, n)=>{
  'use strict'; const r=n(131); const o=n(947); const s=n(611); const i=n(56); const l=n(634); const a=n(480); const c=n(963); const u=n(252); const p=n(119); const d=n(546); const f=n(262); const h=n(447); const m=n(704); const v=c.vr; const g=p.PO; (async ()=>{
    const e=v({name: 'VuepressApp', setup() {
      (0, d.BK)(); for (const e of s.l)e(); return ()=>[(0, u.h)(p.MA), ...o.p.map(((e)=>(0, u.h)(e)))];
    }}); const t=(0, p.p7)({history: g((0, a.U1)(d.HM.value.base)), routes: l.g, scrollBehavior: (e, t, n)=>n||(e.hash?{el: e.hash}:{top: 0})}); t.beforeResolve((async (e, t)=>{
      let n; e.path===t.path&&t!==p.AJ||([d.Xp.value]=await Promise.all([(0, d.C4)(e.name), null===(n=i.b[e.name])||void 0===n?void 0:n.__asyncLoader()]));
    })), ((e, t)=>{
      const n=(0, f.Fl)((()=>(0, d.S)(d.HM.value.locales, t.currentRoute.value.path))); const r=(0, f.Fl)((()=>(0, d.kY)(d.HM.value, n.value))); const o=(0, f.Fl)((()=>(0, d.hN)(d.Xp.value))); const s=(0, f.Fl)((()=>(0, d.lp)(d.Xp.value, r.value))); const i=(0, f.Fl)((()=>(0, d.nl)(s.value, o.value, r.value))); const l=(0, f.Fl)((()=>(0, d.Vo)(d.Xp.value))); e.provide(d.C3, n), e.provide(d.AE, r), e.provide(d.PY, o), e.provide(d.et, s), e.provide(d.VV, i), e.provide(d.b5, l), Object.defineProperties(e.config.globalProperties, {$frontmatter: {get: ()=>o.value}, $headTitle: {get: ()=>s.value}, $lang: {get: ()=>l.value}, $page: {get: ()=>d.Xp.value}, $routeLocale: {get: ()=>n.value}, $site: {get: ()=>d.HM.value}, $siteLocale: {get: ()=>r.value}, $withBase: {get: ()=>h.pJ}});
    })(e, t), ((e)=>{
      e.component('ClientOnly', m.qx), e.component('Content', m.VY), e.component('OutboundLink', m.MS);
    })(e); for (const n of r.g) await n({app: e, router: t, siteData: d.HM}); return e.use(t), {app: e, router: t};
  })().then((({app: e, router: t})=>{
    t.isReady().then((()=>{
      e.mount('#app');
    }));
  }));
}, 802: (e, t, n)=>{
  'use strict'; n.d(t, {Y: ()=>a}); const r=n(150); const o=n(480); const s=n(252); const i=n(262); const l=n(546); const a=(0, s.aZ)({name: 'Vuepress', setup() {
    const e=(0, l.Vi)(); const t=(0, i.Fl)((()=>{
      let t; if (e.value.path) {
        const n=e.value.frontmatter.layout; t=(0, o.HD)(n)?n:'Layout';
      } else t='404'; return r.Z[t]||(0, s.up)(t, !1);
    })); return ()=>(0, s.h)(t.value);
  }});
}, 704: (e, t, n)=>{
  'use strict'; n.d(t, {qx: ()=>s, VY: ()=>a, MS: ()=>u}); const r=n(252); const o=n(262); const s=(0, r.aZ)({setup(e, t) {
    const n=(0, o.iH)(!1); return (0, r.bv)((()=>{
      n.value=!0;
    })), ()=>{
      let e; let r; return n.value?null===(r=(e=t.slots).default)||void 0===r?void 0:r.call(e):null;
    };
  }}); const i=n(56); const l=n(546); const a=(e)=>{
    let t; t=e.pageKey?e.pageKey:(0, l.Vi)().value.key; const n=i.b[t]; return n?(0, r.h)(n):(0, r.h)('div', '404 Not Found');
  }; a.displayName='Content', a.props={pageKey: {type: String, required: !1}}; const c=(0, r.h)('svg', {'class': 'icon outbound', 'xmlns': 'http://www.w3.org/2000/svg', 'aria-hidden': 'true', 'focusable': 'false', 'x': '0px', 'y': '0px', 'viewBox': '0 0 100 100', 'width': '15', 'height': '15'}, [(0, r.h)('path', {fill: 'currentColor', d: 'M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z'}), (0, r.h)('polygon', {fill: 'currentColor', points: '45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9'})]); const u=(e, {slots: t})=>{
    let n; return (0, r.h)('span', [c, null===(n=t.default)||void 0===n?void 0:n.call(t)]);
  }; u.displayName='OutboundLink', n(802);
}, 546: (e, t, n)=>{
  'use strict'; n.d(t, {Xp: ()=>l, PY: ()=>p, VV: ()=>m, et: ()=>g, b5: ()=>b, C4: ()=>c, hN: ()=>f, nl: ()=>v, lp: ()=>y, Vo: ()=>w, S: ()=>k, kY: ()=>x, C3: ()=>O, BK: ()=>R, HM: ()=>S, AE: ()=>j, Vi: ()=>a, I2: ()=>d, I: ()=>_, WF: ()=>C, I5: ()=>P}); const r=n(262); const o=n(706); const s=(0, r.iH)(o.T); const i=(0, r.OT)({key: '', path: '', title: '', lang: '', frontmatter: {}, excerpt: '', headers: []}); const l=(0, r.iH)(i); const a=()=>l; const c=async (e)=>{
    const t=s.value[e]; if (!t) return i; const n=await t(); return null!=n?n:i;
  }; const u=n(252); const p=Symbol(''); const d=()=>{
    const e=(0, u.f3)(p); if (!e) throw new Error('usePageFrontmatter() is called without provider.'); return e;
  }; const f=(e)=>e.frontmatter; const h=n(480); const m=Symbol(''); const v=(e, t, n)=>{
    const r=(0, h.HD)(t.description)?t.description:n.description; const o=[...(0, h.kJ)(t.head)?t.head:[], ...n.head, ['title', {}, e], ['meta', {name: 'description', content: r}]]; return (0, h.H7)(o);
  }; const g=Symbol(''); const y=(e, t)=>`${e.title?`${e.title} | `:''}${t.title}`; const b=Symbol(''); const w=(e)=>e.lang||'en'; const O=Symbol(''); const _=()=>{
    const e=(0, u.f3)(O); if (!e) throw new Error('useRouteLocale() is called without provider.'); return e;
  }; const k=(e, t)=>(0, h.gb)(e, t); const E=n(220); const S=(0, r.iH)(E.H); const C=()=>S; const j=Symbol(''); const P=()=>{
    const e=(0, u.f3)(j); if (!e) throw new Error('useSiteLocaleData() is called without provider.'); return e;
  }; const x=(e, t)=>({...e, ...e.locales[t]}); const A=n(119); const I=Symbol(''); const R=()=>{
    const e=(0, A.yj)(); const t=(()=>{
      const e=(0, u.f3)(m); if (!e) throw new Error('usePageHead() is called without provider.'); return e;
    })(); const n=(()=>{
      const e=(0, u.f3)(b); if (!e) throw new Error('usePageLang() is called without provider.'); return e;
    })(); const o=(0, r.iH)([]); const s=()=>{
      document.documentElement.lang=n.value, o.value.forEach(((e)=>{
        e.parentNode===document.head&&document.head.removeChild(e);
      })), o.value.splice(0, o.value.length), t.value.forEach(((e)=>{
        const t=L(e); null!==t&&(document.head.appendChild(t), o.value.push(t));
      }));
    }; (0, u.JJ)(I, s), (0, u.bv)((()=>{
      t.value.forEach(((e)=>{
        const t=T(e); t&&o.value.push(t);
      })), s(), (0, u.YP)((()=>e.path), (()=>s()));
    }));
  }; const T=([e, t, n=''])=>{
    const r=`head > ${e}${Object.entries(t).map((([e, t])=>(0, h.HD)(t)?`[${e}="${t}"]`:!0===t?`[${e}]`:'')).join('')}`; return Array.from(document.querySelectorAll(r)).find(((e)=>e.innerText===n))||null;
  }; const L=([e, t, n])=>{
    if (!(0, h.HD)(e)) return null; const r=document.createElement(e); return (0, h.PO)(t)&&Object.entries(t).forEach((([e, t])=>{
(0, h.HD)(t)?r.setAttribute(e, t):!0===t&&r.setAttribute(e, '');
    })), (0, h.HD)(n)&&r.appendChild(document.createTextNode(n)), r;
  };
}, 621: (e, t, n)=>{
  'use strict'; n.d(t, {MS: ()=>r.MS, C3: ()=>o.C3, Vi: ()=>o.Vi, I2: ()=>o.I2, I: ()=>o.I, WF: ()=>o.WF, I5: ()=>o.I5, vW: ()=>s.vW, F2: ()=>s.F2, pJ: ()=>s.pJ}), n(698); var r=n(704); var o=n(546); var s=n(447);
}, 447: (e, t, n)=>{
  'use strict'; n.d(t, {vW: ()=>r, F2: ()=>o, pJ: ()=>l}); const r=(e)=>e; const o=(e)=>e; const s=n(480); const i=n(546); const l=(e)=>(0, s.ak)(e)?e:`${(0, i.WF)().value.base}${(0, s.FY)(e)}`;
}, 263: (e, t, n)=>{
  'use strict'; n.d(t, {Z: ()=>a}); const r=n(621); const o=n(938); const s=n(252); const i=n(119); const l=async (e, ...t)=>{
    const {scrollBehavior: n}=e.options; e.options.scrollBehavior=void 0, await e.replace(...t).finally((()=>e.options.scrollBehavior=n));
  }; const a=(0, r.F2)((()=>{
    (({headerLinkSelector: e, headerAnchorSelector: t, delay: n, offset: a=5})=>{
      const c=(0, i.tv)(); const u=(0, r.Vi)(); const p=(0, o.D)((()=>(()=>{
        let n; let r; let o; let s; const i=Array.from(document.querySelectorAll(e)); const u=Array.from(document.querySelectorAll(t)).filter(((e)=>i.some(((t)=>t.hash===e.hash)))); const p=Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop); const d=window.innerHeight+p; const f=Math.max(document.documentElement.scrollHeight, document.body.scrollHeight); const h=Math.abs(f-d)<a; for (let e=0; e<u.length; e++) {
          const t=u[e]; const i=u[e+1]; const d=0===e&&0===p; const f=p>=(null!==(r=null===(n=t.parentElement)||void 0===n?void 0:n.offsetTop)&&void 0!==r?r:0)-a; const m=!i||p<(null!==(s=null===(o=i.parentElement)||void 0===o?void 0:o.offsetTop)&&void 0!==s?s:0)-a; if (!(d||f&&m)) continue; const v=decodeURIComponent(c.currentRoute.value.hash); const g=decodeURIComponent(t.hash); if (v===g) return; if (h) for (let t=e+1; t<u.length; t++) if (v===decodeURIComponent(u[t].hash)) return; return void l(c, {hash: g, force: !0});
        }
      })()), n); (0, s.bv)((()=>{
        p(), window.addEventListener('scroll', p);
      })), (0, s.Jd)((()=>{
        window.removeEventListener('scroll', p);
      })), (0, s.YP)((()=>u.value.path), p);
    })({headerLinkSelector: 'a.sidebar-item', headerAnchorSelector: '.header-anchor', delay: 200, offset: 5});
  }));
}, 187: (e, t, n)=>{
  'use strict'; n.d(t, {Z: ()=>c}); const r=n(938); const o=n(252); const s=n(262); const i=n(963); const l=()=>window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0; const a=()=>window.scrollTo({top: 0, behavior: 'smooth'}); const c=(0, o.aZ)({name: 'BackToTop', setup() {
    const e=(0, s.iH)(0); const t=(0, s.Fl)((()=>e.value>300)); (0, o.bv)((()=>{
      e.value=l(), window.addEventListener('scroll', (0, r.D)((()=>{
        e.value=l();
      }), 100));
    })); const n=(0, o.h)('div', {class: 'back-to-top', onClick: a}); return ()=>(0, o.h)(i.uT, {name: 'back-to-top'}, {default: ()=>t.value?n:null});
  }});
}, 971: (e, t, n)=>{
  'use strict'; n.d(t, {Z: ()=>m}); const r=n(621); const o=Object.assign||function(e) {
    for (let t=1; t<arguments.length; t++) {
      const n=arguments[t]; for (const r in n)Object.prototype.hasOwnProperty.call(n, r)&&(e[r]=n[r]);
    } return e;
  }; const s=function(e) {
    return 'IMG'===e.tagName;
  }; const i=function(e) {
    return e&&1===e.nodeType;
  }; const l=function(e) {
    return '.svg'===(e.currentSrc||e.src).substr(-4).toLowerCase();
  }; const a=function(e) {
    try {
      return Array.isArray(e)?e.filter(s):function(e) {
        return NodeList.prototype.isPrototypeOf(e);
      }(e)?[].slice.call(e).filter(s):i(e)?[e].filter(s):'string'==typeof e?[].slice.call(document.querySelectorAll(e)).filter(s):[];
    } catch (e) {
      throw new TypeError('The provided selector is invalid.\nExpects a CSS selector, a Node element, a NodeList or an array.\nSee: https://github.com/francoischalifour/medium-zoom');
    }
  }; const c=function(e) {
    const t=document.createElement('div'); return t.classList.add('medium-zoom-overlay'), t.style.background=e, t;
  }; const u=function(e) {
    const t=e.getBoundingClientRect(); const n=t.top; const r=t.left; const o=t.width; const s=t.height; const i=e.cloneNode(); const l=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0; const a=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0; return i.removeAttribute('id'), i.style.position='absolute', i.style.top=n+l+'px', i.style.left=r+a+'px', i.style.width=o+'px', i.style.height=s+'px', i.style.transform='', i;
  }; const p=function(e, t) {
    const n=o({bubbles: !1, cancelable: !1, detail: void 0}, t); if ('function'==typeof window.CustomEvent) return new CustomEvent(e, n); const r=document.createEvent('CustomEvent'); return r.initCustomEvent(e, n.bubbles, n.cancelable, n.detail), r;
  }; !function(e, t) {
    void 0===t&&(t={}); const n=t.insertAt; if ('undefined'!=typeof document) {
      const r=document.head||document.getElementsByTagName('head')[0]; const o=document.createElement('style'); o.type='text/css', 'top'===n&&r.firstChild?r.insertBefore(o, r.firstChild):r.appendChild(o), o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e));
    }
  }('.medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}'); const d=function e(t) {
    const n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}; const r=window.Promise||function(e) {
      function t() {}e(t, t);
    }; const s=function(e) {
      const t=e.target; t!==R?-1!==C.indexOf(t)&&_({target: t}):O();
    }; const d=function() {
      if (!P&&I.original) {
        const e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0; Math.abs(x-e)>A.scrollOffset&&setTimeout(O, 150);
      }
    }; const f=function(e) {
      const t=e.key||e.keyCode; 'Escape'!==t&&'Esc'!==t&&27!==t||O();
    }; const h=function() {
      const e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}; const t=e; if (e.background&&(R.style.background=e.background), e.container&&e.container instanceof Object&&(t.container=o({}, A.container, e.container)), e.template) {
        const n=i(e.template)?e.template:document.querySelector(e.template); t.template=n;
      } return A=o({}, A, t), C.forEach((function(e) {
        e.dispatchEvent(p('medium-zoom:update', {detail: {zoom: T}}));
      })), T;
    }; const m=function() {
      const t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}; return e(o({}, A, t));
    }; const v=function() {
      for (var e=arguments.length, t=Array(e), n=0; n<e; n++)t[n]=arguments[n]; const r=t.reduce((function(e, t) {
        return [].concat(e, a(t));
      }), []); return r.filter((function(e) {
        return -1===C.indexOf(e);
      })).forEach((function(e) {
        C.push(e), e.classList.add('medium-zoom-image');
      })), j.forEach((function(e) {
        const t=e.type; const n=e.listener; const o=e.options; r.forEach((function(e) {
          e.addEventListener(t, n, o);
        }));
      })), T;
    }; const g=function() {
      for (var e=arguments.length, t=Array(e), n=0; n<e; n++)t[n]=arguments[n]; I.zoomed&&O(); const r=t.length>0?t.reduce((function(e, t) {
        return [].concat(e, a(t));
      }), []):C; return r.forEach((function(e) {
        e.classList.remove('medium-zoom-image'), e.dispatchEvent(p('medium-zoom:detach', {detail: {zoom: T}}));
      })), C=C.filter((function(e) {
        return -1===r.indexOf(e);
      })), T;
    }; const y=function(e, t) {
      const n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}; return C.forEach((function(r) {
        r.addEventListener('medium-zoom:'+e, t, n);
      })), j.push({type: 'medium-zoom:'+e, listener: t, options: n}), T;
    }; const b=function(e, t) {
      const n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}; return C.forEach((function(r) {
        r.removeEventListener('medium-zoom:'+e, t, n);
      })), j=j.filter((function(n) {
        return !(n.type==='medium-zoom:'+e&&n.listener.toString()===t.toString());
      })), T;
    }; const w=function() {
      const e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}; const t=e.target; const n=function() {
        let e={width: document.documentElement.clientWidth, height: document.documentElement.clientHeight, left: 0, top: 0, right: 0, bottom: 0}; let t=void 0; let n=void 0; if (A.container) {
          if (A.container instanceof Object)t=(e=o({}, e, A.container)).width-e.left-e.right-2*A.margin, n=e.height-e.top-e.bottom-2*A.margin; else {
            const r=(i(A.container)?A.container:document.querySelector(A.container)).getBoundingClientRect(); const s=r.width; const a=r.height; const c=r.left; const u=r.top; e=o({}, e, {width: s, height: a, left: c, top: u});
          }
        }t=t||e.width-2*A.margin, n=n||e.height-2*A.margin; const p=I.zoomedHd||I.original; const d=l(p)?t:p.naturalWidth||t; const f=l(p)?n:p.naturalHeight||n; const h=p.getBoundingClientRect(); const m=h.top; const v=h.left; const g=h.width; const y=h.height; const b=Math.min(d, t)/g; const w=Math.min(f, n)/y; const O=Math.min(b, w); const _='scale('+O+') translate3d('+((t-g)/2-v+A.margin+e.left)/O+'px, '+((n-y)/2-m+A.margin+e.top)/O+'px, 0)'; I.zoomed.style.transform=_, I.zoomedHd&&(I.zoomedHd.style.transform=_);
      }; return new r((function(e) {
        if (t&&-1===C.indexOf(t))e(T); else if (I.zoomed)e(T); else {
          if (t)I.original=t; else {
            if (!(C.length>0)) return void e(T); const r=C; I.original=r[0];
          } if (I.original.dispatchEvent(p('medium-zoom:open', {detail: {zoom: T}})), x=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0, P=!0, I.zoomed=u(I.original), document.body.appendChild(R), A.template) {
            const o=i(A.template)?A.template:document.querySelector(A.template); I.template=document.createElement('div'), I.template.appendChild(o.content.cloneNode(!0)), document.body.appendChild(I.template);
          } if (document.body.appendChild(I.zoomed), window.requestAnimationFrame((function() {
            document.body.classList.add('medium-zoom--opened');
          })), I.original.classList.add('medium-zoom-image--hidden'), I.zoomed.classList.add('medium-zoom-image--opened'), I.zoomed.addEventListener('click', O), I.zoomed.addEventListener('transitionend', (function t() {
            P=!1, I.zoomed.removeEventListener('transitionend', t), I.original.dispatchEvent(p('medium-zoom:opened', {detail: {zoom: T}})), e(T);
          })), I.original.getAttribute('data-zoom-src')) {
            I.zoomedHd=I.zoomed.cloneNode(), I.zoomedHd.removeAttribute('srcset'), I.zoomedHd.removeAttribute('sizes'), I.zoomedHd.src=I.zoomed.getAttribute('data-zoom-src'), I.zoomedHd.onerror=function() {
              clearInterval(s), console.warn('Unable to reach the zoom image target '+I.zoomedHd.src), I.zoomedHd=null, n();
            }; var s=setInterval((function() {
              I.zoomedHd.complete&&(clearInterval(s), I.zoomedHd.classList.add('medium-zoom-image--opened'), I.zoomedHd.addEventListener('click', O), document.body.appendChild(I.zoomedHd), n());
            }), 10);
          } else if (I.original.hasAttribute('srcset')) {
            I.zoomedHd=I.zoomed.cloneNode(), I.zoomedHd.removeAttribute('sizes'), I.zoomedHd.removeAttribute('loading'); var l=I.zoomedHd.addEventListener('load', (function() {
              I.zoomedHd.removeEventListener('load', l), I.zoomedHd.classList.add('medium-zoom-image--opened'), I.zoomedHd.addEventListener('click', O), document.body.appendChild(I.zoomedHd), n();
            }));
          } else n();
        }
      }));
    }; var O=function() {
      return new r((function(e) {
!P&&I.original?(P=!0, document.body.classList.remove('medium-zoom--opened'), I.zoomed.style.transform='', I.zoomedHd&&(I.zoomedHd.style.transform=''), I.template&&(I.template.style.transition='opacity 150ms', I.template.style.opacity=0), I.original.dispatchEvent(p('medium-zoom:close', {detail: {zoom: T}})), I.zoomed.addEventListener('transitionend', (function t() {
  I.original.classList.remove('medium-zoom-image--hidden'), document.body.removeChild(I.zoomed), I.zoomedHd&&document.body.removeChild(I.zoomedHd), document.body.removeChild(R), I.zoomed.classList.remove('medium-zoom-image--opened'), I.template&&document.body.removeChild(I.template), P=!1, I.zoomed.removeEventListener('transitionend', t), I.original.dispatchEvent(p('medium-zoom:closed', {detail: {zoom: T}})), I.original=null, I.zoomed=null, I.zoomedHd=null, I.template=null, e(T);
}))):e(T);
      }));
    }; var _=function() {
      const e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}; const t=e.target; return I.original?O():w({target: t});
    }; const k=function() {
      return A;
    }; const E=function() {
      return C;
    }; const S=function() {
      return I.original;
    }; var C=[]; var j=[]; var P=!1; var x=0; var A=n; var I={original: null, zoomed: null, zoomedHd: null, template: null}; '[object Object]'===Object.prototype.toString.call(t)?A=t:(t||'string'==typeof t)&&v(t), A=o({margin: 0, background: '#fff', scrollOffset: 40, container: null, template: null}, A); var R=c(A.background); document.addEventListener('click', s), document.addEventListener('keyup', f), document.addEventListener('scroll', d), window.addEventListener('resize', O); var T={open: w, close: O, toggle: _, update: h, clone: m, attach: v, detach: g, on: y, off: b, getOptions: k, getImages: E, getZoomedImage: S}; return T;
  }; const f=Symbol('mediumZoom'); const h={}; const m=(0, r.vW)((({app: e, router: t})=>{
    const n=d(h); n.refresh=(e='.theme-default-content > img, .theme-default-content :not(a) > img')=>{
      n.detach(), n.attach(e);
    }, e.provide(f, n), t.afterEach((()=>{
      setTimeout((()=>n.refresh()), 400);
    }));
  }));
}, 243: (e, t, n)=>{
  'use strict'; n.d(t, {Z: ()=>l}); const r=n(621); const o=n(865); const s=n(252); const i=n(119); const l=(0, r.F2)((()=>{
    (0, s.bv)((()=>{
      const e=(0, i.tv)(); const t=new Set; t.add(e.currentRoute.value.path), o.configure({showSpinner: !1}), e.beforeEach(((e)=>{
        t.has(e.path)||o.start();
      })), e.afterEach(((e)=>{
        t.add(e.path), o.done();
      }));
    }));
  }));
}, 598: (e, t, n)=>{
  'use strict'; n.d(t, {Z: ()=>i}); const r=n(621); const o=n(262); const s=n(197); const i=(0, r.vW)((({app: e})=>{
    const t=(0, s.BV)(); const n=e._context.provides[r.C3]; const i=(0, o.Fl)((()=>(0, s.g$)(t.value, n.value))); e.provide(s.ZS, i), Object.defineProperties(e.config.globalProperties, {$theme: {get: ()=>t.value}, $themeLocale: {get: ()=>i.value}});
  }));
}, 197: (e, t, n)=>{
  'use strict'; n.d(t, {g$: ()=>c, ZS: ()=>l, BV: ()=>s, X6: ()=>a}); const r=n(232); const o=(0, n(262).iH)(r.f); const s=()=>o; const i=n(252); const l=Symbol(''); const a=()=>{
    const e=(0, i.f3)(l); if (!e) throw new Error('useThemeLocaleData() is called without provider.'); return e;
  }; const c=(e, t)=>{
    let n; return {...e, ...null===(n=e.locales)||void 0===n?void 0:n[t]};
  };
}, 480: (e, t, n)=>{
  'use strict'; n.d(t, {H7: ()=>o, kJ: ()=>r.kJ, mf: ()=>r.mf, ak: ()=>s, B2: ()=>i, R5: ()=>l, PO: ()=>a, HD: ()=>r.HD, U1: ()=>c, FY: ()=>u, gb: ()=>p}); var r=n(577); const o=(e)=>{
    const t=new Set; const n=[]; return e.forEach(((e)=>{
      const r=(([e, t, n])=>'meta'===e&&t.name?`${e}.${t.name}`:['title', 'base'].includes(e)?e:'template'===e&&t.id?`${e}.${t.id}`:JSON.stringify([e, t, n]))(e); t.has(r)||(t.add(r), n.push(e));
    })), n;
  }; const s=(e)=>/^(https?:)?\/\//.test(e); const i=(e)=>/^mailto:/.test(e); const l=(e)=>/^tel:/.test(e); const a=(e)=>'[object Object]'===Object.prototype.toString.call(e); const c=(e)=>e.replace(/\/$/, ''); const u=(e)=>e.replace(/^\//, ''); const p=(e, t)=>{
    const n=Object.keys(e).sort(((e, t)=>{
      const n=t.split('/').length-e.split('/').length; return 0!==n?n:t.length-e.length;
    })); for (const e of n) if (t.startsWith(e)) return e; return '/';
  };
}, 9: (e, t, n)=>{
  'use strict'; n.d(t, {Z: ()=>m}); const r=n(621); const o=n(252); const s=n(577); const i=(0, o.aZ)({props: {type: {type: String, required: !1, default: 'tip'}, text: {type: String, required: !1, default: ''}, vertical: {type: String, required: !1, default: void 0}}, setup: (e)=>(t, n)=>((0, o.wg)(), (0, o.iD)('span', {class: (0, s.C_)(['badge', e.type]), style: (0, s.j5)({verticalAlign: e.vertical})}, [(0, o.WI)(t.$slots, 'default', {}, (()=>[(0, o.Uk)((0, s.zw)(e.text), 1)]))], 6))}); const l=n(262); const a=(0, o.aZ)({name: 'CodeGroup', setup(e, {slots: t}) {
    const n=(0, l.iH)(-1); const r=(0, l.iH)([]); return ()=>{
      let e; const s=((null===(e=t.default)||void 0===e?void 0:e.call(t))||[]).filter(((e)=>'CodeGroupItem'===e.type.name)).map(((e)=>(null===e.props&&(e.props={}), e))); return 0===s.length?null:(n.value<0||n.value>s.length-1?(n.value=s.findIndex(((e)=>''===e.props.active||!0===e.props.active)), -1===n.value&&(n.value=0)):s.forEach(((e, t)=>{
        e.props.active=t===n.value;
      })), (0, o.h)('div', {class: 'code-group'}, [(0, o.h)('div', {class: 'code-group__nav'}, (0, o.h)('ul', {class: 'code-group__ul'}, s.map(((e, t)=>{
        const s=t===n.value; return (0, o.h)('li', {class: 'code-group__li'}, (0, o.h)('button', {ref: (e)=>{
          e&&(r.value[t]=e);
        }, class: {'code-group__nav-tab': !0, 'code-group__nav-tab-active': s}, ariaPressed: s, ariaExpanded: s, onClick: ()=>n.value=t, onKeydown: (e)=>((e, t)=>{
' '===e.key||'Enter'===e.key?(e.preventDefault(), n.value=t):'ArrowRight'===e.key?(e.preventDefault(), ((e=n.value)=>{
e<r.value.length-1?n.value=e+1:n.value=0, r.value[n.value].focus();
})(t)):'ArrowLeft'===e.key&&(e.preventDefault(), ((e=n.value)=>{
  n.value=e>0?e-1:r.value.length-1, r.value[n.value].focus();
})(t));
        })(e, t)}, e.props.title));
      })))), s]));
    };
  }}); const c=['aria-selected']; const u=(0, o.aZ)({name: 'CodeGroupItem'}); const p=(0, o.aZ)({...u, props: {title: {type: String, required: !0}, active: {type: Boolean, required: !1, default: !1}}, setup: (e)=>(t, n)=>((0, o.wg)(), (0, o.iD)('div', {'class': (0, s.C_)(['code-group-item', {'code-group-item__active': e.active}]), 'aria-selected': e.active}, [(0, o.WI)(t.$slots, 'default')], 10, c))}); const d=n(51); const f={class: 'sr-only'}; const h=(0, o.aZ)({setup(e) {
    const t=(0, d.X6)(); return (e, n)=>((0, o.wg)(), (0, o.j4)((0, l.SU)(r.MS), null, {default: (0, o.w5)((()=>[(0, o._)('span', f, (0, s.zw)((0, l.SU)(t).openInNewWindow), 1)])), _: 1}));
  }}); const m=(0, r.vW)((({app: e, router: t})=>{
    e.component('Badge', i), e.component('CodeGroup', a), e.component('CodeGroupItem', p), delete e._context.components.OutboundLink, e.component('OutboundLink', h), e.component('NavbarSearch', (()=>{
      const t=e.component('Docsearch')||e.component('SearchBox'); return t?(0, o.h)(t):null;
    })); const n=t.options.scrollBehavior; t.options.scrollBehavior=async (...e)=>(await(0, d.P$)().wait(), n(...e));
  }));
}, 866: (e, t, n)=>{
  'use strict'; n.d(t, {Z: ()=>s}); const r=n(621); const o=n(51); const s=(0, r.F2)((()=>{
    (0, o.OX)(), (0, o.fR)();
  }));
}, 51: (e, t, n)=>{
  'use strict'; n.d(t, {OX: ()=>w, fR: ()=>T, vs: ()=>b, sC: ()=>S, P$: ()=>x, VU: ()=>R, X6: ()=>N}); const r=n(262); const o=n(252); function s(e) {
    return !!(0, r.nZ)()&&((0, r.EB)(e), !0);
  } const i='undefined'!=typeof window; const l=(Object.prototype.toString, ()=>{}); const a=(e)=>e(); const c=Object.getOwnPropertySymbols; const u=Object.prototype.hasOwnProperty; const p=Object.prototype.propertyIsEnumerable; Object.defineProperty, Object.defineProperties, Object.getOwnPropertyDescriptors, Object.getOwnPropertySymbols, Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable, Object.defineProperty, Object.defineProperties, Object.getOwnPropertyDescriptors, Object.getOwnPropertySymbols, Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable, Object.defineProperty, Object.getOwnPropertySymbols, Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable, Object.defineProperty, Object.defineProperties, Object.getOwnPropertyDescriptors, Object.getOwnPropertySymbols, Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable, Object.defineProperty, Object.defineProperties, Object.getOwnPropertyDescriptors, Object.getOwnPropertySymbols, Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable, Object.defineProperty, Object.defineProperties, Object.getOwnPropertyDescriptors, Object.getOwnPropertySymbols, Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable, Object.defineProperty, Object.getOwnPropertySymbols, Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable, Object.defineProperty, Object.getOwnPropertySymbols, Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable, Object.getOwnPropertySymbols, Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable; const d=i?window:void 0; i&&window.document, i&&window.navigator, Object.defineProperty, Object.defineProperties, Object.getOwnPropertyDescriptors, Object.getOwnPropertySymbols, Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable, Object.defineProperty, Object.getOwnPropertySymbols, Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable; const f={boolean: {read: (e)=>'true'===e, write: (e)=>String(e)}, object: {read: (e)=>JSON.parse(e), write: (e)=>JSON.stringify(e)}, number: {read: (e)=>Number.parseFloat(e), write: (e)=>String(e)}, any: {read: (e)=>e, write: (e)=>String(e)}, string: {read: (e)=>e, write: (e)=>String(e)}, map: {read: (e)=>new Map(JSON.parse(e)), write: (e)=>JSON.stringify(Array.from(e.entries()))}, set: {read: (e)=>new Set(JSON.parse(e)), write: (e)=>JSON.stringify(Array.from(e.entries()))}}; function h(e, t, n=((e)=>null==(e=d)?void 0:e.localStorage)(), i={}) {
    let h; const {flush: m='pre', deep: v=!0, listenToStorageChanges: g=!0, writeDefaults: y=!0, shallow: b, window: w=d, eventFilter: O, onError: _=((e)=>{
      console.error(e);
    })}=i; const k=(0, r.SU)(t); const E=null==k?'any':k instanceof Set?'set':k instanceof Map?'map':'boolean'==typeof k?'boolean':'string'==typeof k?'string':'object'==typeof k||Array.isArray(k)?'object':Number.isNaN(k)?'any':'number'; const S=(b?r.XI:r.iH)(t); const C=null!=(h=i.serializer)?h:f[E]; function j(t) {
      if (n&&(!t||t.key===e)) {
        try {
          const r=t?t.newValue:n.getItem(e); null==r?(S.value=k, y&&null!==k&&n.setItem(e, C.write(k))):S.value=C.read(r);
        } catch (e) {
          _(e);
        }
      }
    } return j(), w&&g&&function(...e) {
      let t; let n; let i; let a; if ('string'==typeof e[0]?([n, i, a]=e, t=d):[t, n, i, a]=e, !t) return l; let c=l; const u=(0, o.YP)((()=>(0, r.SU)(t)), ((e)=>{
        c(), e&&(e.addEventListener(n, i, a), c=()=>{
          e.removeEventListener(n, i, a), c=l;
        });
      }), {immediate: !0, flush: 'post'}); const p=()=>{
        u(), c();
      }; s(p);
    }(w, 'storage', ((e)=>setTimeout((()=>j(e)), 0))), n&&function(e, t, n={}) {
      const r=n; const {eventFilter: s=a}=r; const i=((e, t)=>{
        const n={}; for (var r in e)u.call(e, r)&&t.indexOf(r)<0&&(n[r]=e[r]); if (null!=e&&c) for (var r of c(e))t.indexOf(r)<0&&p.call(e, r)&&(n[r]=e[r]); return n;
      })(r, ['eventFilter']); return (0, o.YP)(e, (l=s, d=t, function(...e) {
        l((()=>d.apply(this, e)), {fn: d, thisArg: this, args: e});
      }), i); let l; let d;
    }(S, (()=>{
      try {
null==S.value?n.removeItem(e):n.setItem(e, C.write(S.value));
      } catch (e) {
        _(e);
      }
    }), {flush: m, deep: v, eventFilter: O}), S;
  } function m(e) {
    return function(e, t={}) {
      const {window: n=d}=t; if (!n) return (0, r.iH)(!1); const o=n.matchMedia(e); const i=(0, r.iH)(o.matches); const l=(e)=>{
        i.value=e.matches;
      }; return 'addEventListener'in o?o.addEventListener('change', l):o.addListener(l), s((()=>{
'removeEventListener'in o?o.removeEventListener('change', l):o.removeListener(l);
      })), i;
    }('(prefers-color-scheme: dark)', e);
  } let v; let g; Object.defineProperty, Object.defineProperties, Object.getOwnPropertyDescriptors, Object.getOwnPropertySymbols, Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable, Object.defineProperty, Object.defineProperties, Object.getOwnPropertyDescriptors, Object.getOwnPropertySymbols, Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable, Object.defineProperty, Object.defineProperties, Object.getOwnPropertyDescriptors, Object.getOwnPropertySymbols, Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable, Object.getOwnPropertySymbols, Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable, new Map, Object.defineProperty, Object.defineProperties, Object.getOwnPropertyDescriptors, Object.getOwnPropertySymbols, Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable, Object.defineProperty, Object.getOwnPropertySymbols, Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable, Object.getOwnPropertySymbols, Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable, Object.defineProperty, Object.getOwnPropertySymbols, Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable, Object.defineProperty, Object.defineProperties, Object.getOwnPropertyDescriptors, Object.getOwnPropertySymbols, Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable, (g=v||(v={})).UP='UP', g.RIGHT='RIGHT', g.DOWN='DOWN', g.LEFT='LEFT', g.NONE='NONE', Object.defineProperty, Object.getOwnPropertySymbols, Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable, Object.defineProperty, Object.defineProperties, Object.getOwnPropertyDescriptors, Object.getOwnPropertySymbols, Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable, Object.defineProperty, Object.getOwnPropertySymbols, Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable, Object.defineProperty, Object.getOwnPropertySymbols, Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable; const y=Symbol(''); const b=()=>{
    const e=(0, o.f3)(y); if (!e) throw new Error('useDarkMode() is called without provider.'); return e;
  }; const w=()=>{
    const e=N(); const t=m(); const n=h('vuepress-color-scheme', 'auto'); const s=(0, r.Fl)({get: ()=>!!e.value.darkMode&&('auto'===n.value?t.value:'dark'===n.value), set(e) {
e===t.value?n.value='auto':n.value=e?'dark':'light';
    }}); (0, o.JJ)(y, s), O(s);
  }; const O=(e)=>{
    const t=(t=e.value)=>{
      const n=null===window||void 0===window?void 0:window.document.querySelector('html'); null==n||n.classList.toggle('dark', t);
    }; (0, o.bv)((()=>{
      (0, o.YP)(e, t, {immediate: !0});
    })), (0, o.Ah)((()=>t()));
  }; const _=n(480); const k=n(119); const E=(...e)=>{
    const t=(0, k.tv)().resolve(...e); const n=t.matched[t.matched.length-1]; if (!(null==n?void 0:n.redirect)) return t; const {redirect: r}=n; const o=(0, _.mf)(r)?r(t):r; const s=(0, _.HD)(o)?{path: o}:o; return E({hash: t.hash, query: t.query, params: t.params, ...s});
  }; const S=(e)=>{
    const t=E(e); return {text: t.meta.title||e, link: '404'===t.name?e:t.fullPath};
  }; let C=null; let j=null; const P={wait: ()=>C, pending: ()=>{
    C=new Promise(((e)=>j=e));
  }, resolve: ()=>{
    null==j||j(), C=null, j=null;
  }}; const x=()=>P; const A=n(621); const I=Symbol('sidebarItems'); const R=()=>{
    const e=(0, o.f3)(I); if (!e) throw new Error('useSidebarItems() is called without provider.'); return e;
  }; const T=()=>{
    const e=N(); const t=(0, A.I2)(); const n=(0, r.Fl)((()=>L(t.value, e.value))); (0, o.JJ)(I, n);
  }; const L=(e, t)=>{
    let n; let r; let o; let s; const i=null!==(r=null!==(n=e.sidebar)&&void 0!==n?n:t.sidebar)&&void 0!==r?r:'auto'; const l=null!==(s=null!==(o=e.sidebarDepth)&&void 0!==o?o:t.sidebarDepth)&&void 0!==s?s:2; return e.home||!1===i?[]:'auto'===i?z(l):(0, _.kJ)(i)?H(i, l):(0, _.PO)(i)?M(i, l):[];
  }; const F=(e, t)=>t>0?e.map(((e)=>((e, t)=>({text: e.title, link: `#${e.slug}`, children: F(e.children, t)}))(e, t-1))):[]; const z=(e)=>{
    const t=(0, A.Vi)(); return [{text: t.value.title, children: F(t.value.headers, e)}];
  }; const H=(e, t)=>{
    const n=(0, k.yj)(); const r=(0, A.Vi)(); const o=(e)=>{
      let s; let i; if (i=(0, _.HD)(e)?S(e):e, i.children) return {...i, children: i.children.map(((e)=>o(e)))}; if (i.link===n.path) {
        const e=1===(null===(s=r.value.headers[0])||void 0===s?void 0:s.level)?r.value.headers[0].children:r.value.headers; return {...i, children: F(e, t)};
      } return i;
    }; return e.map(((e)=>o(e)));
  }; const M=(e, t)=>{
    let n; const r=(0, k.yj)(); const o=null!==(n=e[(0, _.gb)(e, r.path)])&&void 0!==n?n:[]; return H(o, t);
  }; const $=n(197); const N=()=>(0, $.X6)();
}, 865: function(e, t, n) {
  let r; let o; r=function() {
    let e; let t; const n={version: '0.2.0'}; const r=n.settings={minimum: .08, easing: 'ease', positionUsing: '', speed: 200, trickle: !0, trickleRate: .02, trickleSpeed: 800, showSpinner: !0, barSelector: '[role="bar"]', spinnerSelector: '[role="spinner"]', parent: 'body', template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'}; function o(e, t, n) {
      return e<t?t:e>n?n:e;
    } function s(e) {
      return 100*(-1+e);
    }n.configure=function(e) {
      let t; let n; for (t in e) void 0!==(n=e[t])&&e.hasOwnProperty(t)&&(r[t]=n); return this;
    }, n.status=null, n.set=function(e) {
      const t=n.isStarted(); e=o(e, r.minimum, 1), n.status=1===e?null:e; const a=n.render(!t); const c=a.querySelector(r.barSelector); const u=r.speed; const p=r.easing; return a.offsetWidth, i((function(t) {
        ''===r.positionUsing&&(r.positionUsing=n.getPositioningCSS()), l(c, function(e, t, n) {
          let o; return (o='translate3d'===r.positionUsing?{transform: 'translate3d('+s(e)+'%,0,0)'}:'translate'===r.positionUsing?{transform: 'translate('+s(e)+'%,0)'}:{'margin-left': s(e)+'%'}).transition='all '+t+'ms '+n, o;
        }(e, u, p)), 1===e?(l(a, {transition: 'none', opacity: 1}), a.offsetWidth, setTimeout((function() {
          l(a, {transition: 'all '+u+'ms linear', opacity: 0}), setTimeout((function() {
            n.remove(), t();
          }), u);
        }), u)):setTimeout(t, u);
      })), this;
    }, n.isStarted=function() {
      return 'number'==typeof n.status;
    }, n.start=function() {
      n.status||n.set(0); var e=function() {
        setTimeout((function() {
          n.status&&(n.trickle(), e());
        }), r.trickleSpeed);
      }; return r.trickle&&e(), this;
    }, n.done=function(e) {
      return e||n.status?n.inc(.3+.5*Math.random()).set(1):this;
    }, n.inc=function(e) {
      let t=n.status; return t?('number'!=typeof e&&(e=(1-t)*o(Math.random()*t, .1, .95)), t=o(t+e, 0, .994), n.set(t)):n.start();
    }, n.trickle=function() {
      return n.inc(Math.random()*r.trickleRate);
    }, e=0, t=0, n.promise=function(r) {
      return r&&'resolved'!==r.state()?(0===t&&n.start(), e++, t++, r.always((function() {
0==--t?(e=0, n.done()):n.set((e-t)/e);
      })), this):this;
    }, n.render=function(e) {
      if (n.isRendered()) return document.getElementById('nprogress'); c(document.documentElement, 'nprogress-busy'); const t=document.createElement('div'); t.id='nprogress', t.innerHTML=r.template; let o; const i=t.querySelector(r.barSelector); const a=e?'-100':s(n.status||0); const u=document.querySelector(r.parent); return l(i, {transition: 'all 0 linear', transform: 'translate3d('+a+'%,0,0)'}), r.showSpinner||(o=t.querySelector(r.spinnerSelector))&&d(o), u!=document.body&&c(u, 'nprogress-custom-parent'), u.appendChild(t), t;
    }, n.remove=function() {
      u(document.documentElement, 'nprogress-busy'), u(document.querySelector(r.parent), 'nprogress-custom-parent'); const e=document.getElementById('nprogress'); e&&d(e);
    }, n.isRendered=function() {
      return !!document.getElementById('nprogress');
    }, n.getPositioningCSS=function() {
      const e=document.body.style; const t='WebkitTransform'in e?'Webkit':'MozTransform'in e?'Moz':'msTransform'in e?'ms':'OTransform'in e?'O':''; return t+'Perspective'in e?'translate3d':t+'Transform'in e?'translate':'margin';
    }; var i=function() {
      const e=[]; function t() {
        const n=e.shift(); n&&n(t);
      } return function(n) {
        e.push(n), 1==e.length&&t();
      };
    }(); var l=function() {
      const e=['Webkit', 'O', 'Moz', 'ms']; const t={}; function n(n) {
        return n=n.replace(/^-ms-/, 'ms-').replace(/-([\da-z])/gi, (function(e, t) {
          return t.toUpperCase();
        })), t[n]||(t[n]=function(t) {
          const n=document.body.style; if (t in n) return t; for (var r, o=e.length, s=t.charAt(0).toUpperCase()+t.slice(1); o--;) if ((r=e[o]+s)in n) return r; return t;
        }(n));
      } function r(e, t, r) {
        t=n(t), e.style[t]=r;
      } return function(e, t) {
        let n; let o; const s=arguments; if (2==s.length) for (n in t) void 0!==(o=t[n])&&t.hasOwnProperty(n)&&r(e, n, o); else r(e, s[1], s[2]);
      };
    }(); function a(e, t) {
      return ('string'==typeof e?e:p(e)).indexOf(' '+t+' ')>=0;
    } function c(e, t) {
      const n=p(e); const r=n+t; a(n, t)||(e.className=r.substring(1));
    } function u(e, t) {
      let n; const r=p(e); a(e, t)&&(n=r.replace(' '+t+' ', ' '), e.className=n.substring(1, n.length-1));
    } function p(e) {
      return (' '+(e.className||'')+' ').replace(/\s+/gi, ' ');
    } function d(e) {
      e&&e.parentNode&&e.parentNode.removeChild(e);
    } return n;
  }, void 0===(o=r.call(t, n, t, e))||(e.exports=o);
}, 938: (e, t, n)=>{
  'use strict'; function r(e, t, n) {
    let r; let o; let s; void 0===t&&(t=50), void 0===n&&(n={}); const i=null!=(r=n.isImmediate)&&r; const l=null!=(o=n.callback)&&o; const a=n.maxWait; let c=Date.now(); let u=[]; function p() {
      if (void 0!==a) {
        const e=Date.now()-c; if (e+t>=a) return a-e;
      } return t;
    } const d=function() {
      const t=[].slice.call(arguments); const n=this; return new Promise((function(r, o) {
        const a=i&&void 0===s; if (void 0!==s&&clearTimeout(s), s=setTimeout((function() {
          if (s=void 0, c=Date.now(), !i) {
            const r=e.apply(n, t); l&&l(r), u.forEach((function(e) {
              return (0, e.resolve)(r);
            })), u=[];
          }
        }), p()), a) {
          const d=e.apply(n, t); return l&&l(d), r(d);
        }u.push({resolve: r, reject: o});
      }));
    }; return d.cancel=function(e) {
      void 0!==s&&clearTimeout(s), u.forEach((function(t) {
        return (0, t.reject)(e);
      })), u=[];
    }, d;
  }n.d(t, {D: ()=>r});
}, 119: (e, t, n)=>{
  'use strict'; n.d(t, {MA: ()=>je, AJ: ()=>F, p7: ()=>Pe, PO: ()=>T, yj: ()=>Ie, tv: ()=>Ae}); const r=n(252); const o=n(262); const s='function'==typeof Symbol&&'symbol'==typeof Symbol.toStringTag; const i=(e)=>s?Symbol(e):'_vr_'+e; const l=i('rvlm'); const a=i('rvd'); const c=i('r'); const u=i('rl'); const p=i('rvl'); const d='undefined'!=typeof window; const f=Object.assign; function h(e, t) {
    const n={}; for (const r in t) {
      const o=t[r]; n[r]=Array.isArray(o)?o.map(e):e(o);
    } return n;
  } const m=()=>{}; const v=/\/$/; function g(e, t, n='/') {
    let r; let o={}; let s=''; let i=''; const l=t.indexOf('?'); const a=t.indexOf('#', l>-1?l:0); return l>-1&&(r=t.slice(0, l), s=t.slice(l+1, a>-1?a:t.length), o=e(s)), a>-1&&(r=r||t.slice(0, a), i=t.slice(a, t.length)), r=function(e, t) {
      if (e.startsWith('/')) return e; if (!e) return t; const n=t.split('/'); const r=e.split('/'); let o; let s; let i=n.length-1; for (o=0; o<r.length; o++) {
        if (s=r[o], 1!==i&&'.'!==s) {
          if ('..'!==s) break; i--;
        }
      } return n.slice(0, i).join('/')+'/'+r.slice(o-(o===r.length?1:0)).join('/');
    }(null!=r?r:t, n), {fullPath: r+(s&&'?')+s+i, path: r, query: o, hash: i};
  } function y(e, t) {
    return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||'/':e;
  } function b(e, t) {
    return (e.aliasOf||e)===(t.aliasOf||t);
  } function w(e, t) {
    if (Object.keys(e).length!==Object.keys(t).length) return !1; for (const n in e) if (!O(e[n], t[n])) return !1; return !0;
  } function O(e, t) {
    return Array.isArray(e)?_(e, t):Array.isArray(t)?_(t, e):e===t;
  } function _(e, t) {
    return Array.isArray(t)?e.length===t.length&&e.every(((e, n)=>e===t[n])):1===e.length&&e[0]===t;
  } let k; let E; !function(e) {
    e.pop='pop', e.push='push';
  }(k||(k={})), function(e) {
    e.back='back', e.forward='forward', e.unknown='';
  }(E||(E={})); const S=/^[^#]+#/; function C(e, t) {
    return e.replace(S, '#')+t;
  } const j=()=>({left: window.pageXOffset, top: window.pageYOffset}); function P(e, t) {
    return (history.state?history.state.position-t:-1)+e;
  } const x=new Map; const A=()=>location.protocol+'//'+location.host; function I(e, t) {
    const {pathname: n, search: r, hash: o}=t; const s=e.indexOf('#'); if (s>-1) {
      const t=o.includes(e.slice(s))?e.slice(s).length:1; let n=o.slice(t); return '/'!==n[0]&&(n='/'+n), y(n, '');
    } return y(n, e)+r+o;
  } function R(e, t, n, r=!1, o=!1) {
    return {back: e, current: t, forward: n, replaced: r, position: window.history.length, scroll: o?j():null};
  } function T(e) {
    const t=function(e) {
      const {history: t, location: n}=window; const r={value: I(e, n)}; const o={value: t.state}; function s(r, s, i) {
        const l=e.indexOf('#'); const a=l>-1?(n.host&&document.querySelector('base')?e:e.slice(l))+r:A()+e+r; try {
          t[i?'replaceState':'pushState'](s, '', a), o.value=s;
        } catch (e) {
          console.error(e), n[i?'replace':'assign'](a);
        }
      } return o.value||s(r.value, {back: null, current: r.value, forward: null, position: t.length-1, replaced: !0, scroll: null}, !0), {location: r, state: o, push: function(e, n) {
        const i=f({}, o.value, t.state, {forward: e, scroll: j()}); s(i.current, i, !0), s(e, f({}, R(r.value, e, null), {position: i.position+1}, n), !1), r.value=e;
      }, replace: function(e, n) {
        s(e, f({}, t.state, R(o.value.back, e, o.value.forward, !0), n, {position: o.value.position}), !0), r.value=e;
      }};
    }(e=function(e) {
      if (!e) {
        if (d) {
          const t=document.querySelector('base'); e=(e=t&&t.getAttribute('href')||'/').replace(/^\w+:\/\/[^\/]+/, '');
        } else e='/';
      } return '/'!==e[0]&&'#'!==e[0]&&(e='/'+e), e.replace(v, '');
    }(e)); const n=function(e, t, n, r) {
      const o=[]; let s=[]; let i=null; const l=({state: s})=>{
        const l=I(e, location); const a=n.value; const c=t.value; let u=0; if (s) {
          if (n.value=l, t.value=s, i&&i===a) return void(i=null); u=c?s.position-c.position:0;
        } else r(l); o.forEach(((e)=>{
          e(n.value, a, {delta: u, type: k.pop, direction: u?u>0?E.forward:E.back:E.unknown});
        }));
      }; function a() {
        const {history: e}=window; e.state&&e.replaceState(f({}, e.state, {scroll: j()}), '');
      } return window.addEventListener('popstate', l), window.addEventListener('beforeunload', a), {pauseListeners: function() {
        i=n.value;
      }, listen: function(e) {
        o.push(e); const t=()=>{
          const t=o.indexOf(e); t>-1&&o.splice(t, 1);
        }; return s.push(t), t;
      }, destroy: function() {
        for (const e of s)e(); s=[], window.removeEventListener('popstate', l), window.removeEventListener('beforeunload', a);
      }};
    }(e, t.state, t.location, t.replace); const r=f({location: '', base: e, go: function(e, t=!0) {
      t||n.pauseListeners(), history.go(e);
    }, createHref: C.bind(null, e)}, t, n); return Object.defineProperty(r, 'location', {enumerable: !0, get: ()=>t.location.value}), Object.defineProperty(r, 'state', {enumerable: !0, get: ()=>t.state.value}), r;
  } function L(e) {
    return 'string'==typeof e||'symbol'==typeof e;
  } const F={path: '/', name: void 0, params: {}, query: {}, hash: '', fullPath: '/', matched: [], meta: {}, redirectedFrom: void 0}; const z=i('nf'); let H; function M(e, t) {
    return f(new Error, {type: e, [z]: !0}, t);
  } function $(e, t) {
    return e instanceof Error&&z in e&&(null==t||!!(e.type&t));
  }!function(e) {
    e[e.aborted=4]='aborted', e[e.cancelled=8]='cancelled', e[e.duplicated=16]='duplicated';
  }(H||(H={})); const N='[^/]+?'; const D={sensitive: !1, strict: !1, start: !0, end: !0}; const U=/[.+*?^${}()[\]/\\]/g; function J(e, t) {
    let n=0; for (;n<e.length&&n<t.length;) {
      const r=t[n]-e[n]; if (r) return r; n++;
    } return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0;
  } function B(e, t) {
    let n=0; const r=e.score; const o=t.score; for (;n<r.length&&n<o.length;) {
      const e=J(r[n], o[n]); if (e) return e; n++;
    } return o.length-r.length;
  } const q={type: 0, value: ''}; const V=/[a-zA-Z0-9_]/; function W(e, t, n) {
    const r=function(e, t) {
      const n=f({}, D, t); const r=[]; let o=n.start?'^':''; const s=[]; for (const t of e) {
        const e=t.length?[]:[90]; n.strict&&!t.length&&(o+='/'); for (let r=0; r<t.length; r++) {
          const i=t[r]; let l=40+(n.sensitive?.25:0); if (0===i.type)r||(o+='/'), o+=i.value.replace(U, '\\$&'), l+=40; else if (1===i.type) {
            const {value: e, repeatable: n, optional: a, regexp: c}=i; s.push({name: e, repeatable: n, optional: a}); const u=c||N; if (u!==N) {
              l+=10; try {
                new RegExp(`(${u})`);
              } catch (t) {
                throw new Error(`Invalid custom RegExp for param "${e}" (${u}): `+t.message);
              }
            } let p=n?`((?:${u})(?:/(?:${u}))*)`:`(${u})`; r||(p=a&&t.length<2?`(?:/${p})`:'/'+p), a&&(p+='?'), o+=p, l+=20, a&&(l+=-8), n&&(l+=-20), '.*'===u&&(l+=-50);
          }e.push(l);
        }r.push(e);
      } if (n.strict&&n.end) {
        const e=r.length-1; r[e][r[e].length-1]+=.7000000000000001;
      }n.strict||(o+='/?'), n.end?o+='$':n.strict&&(o+='(?:/|$)'); const i=new RegExp(o, n.sensitive?'':'i'); return {re: i, score: r, keys: s, parse: function(e) {
        const t=e.match(i); const n={}; if (!t) return null; for (let e=1; e<t.length; e++) {
          const r=t[e]||''; const o=s[e-1]; n[o.name]=r&&o.repeatable?r.split('/'):r;
        } return n;
      }, stringify: function(t) {
        let n=''; let r=!1; for (const o of e) {
          r&&n.endsWith('/')||(n+='/'), r=!1; for (const e of o) {
            if (0===e.type)n+=e.value; else if (1===e.type) {
              const {value: s, repeatable: i, optional: l}=e; const a=s in t?t[s]:''; if (Array.isArray(a)&&!i) throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`); const c=Array.isArray(a)?a.join('/'):a; if (!c) {
                if (!l) throw new Error(`Missing required param "${s}"`); o.length<2&&(n.endsWith('/')?n=n.slice(0, -1):r=!0);
              }n+=c;
            }
          }
        } return n;
      }};
    }(function(e) {
      if (!e) return [[]]; if ('/'===e) return [[q]]; if (!e.startsWith('/')) throw new Error(`Invalid path "${e}"`); function t(e) {
        throw new Error(`ERR (${n})/"${c}": ${e}`);
      } let n=0; let r=n; const o=[]; let s; function i() {
        s&&o.push(s), s=[];
      } let l; let a=0; let c=''; let u=''; function p() {
        c&&(0===n?s.push({type: 0, value: c}):1===n||2===n||3===n?(s.length>1&&('*'===l||'+'===l)&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`), s.push({type: 1, value: c, regexp: u, repeatable: '*'===l||'+'===l, optional: '*'===l||'?'===l})):t('Invalid state to consume buffer'), c='');
      } function d() {
        c+=l;
      } for (;a<e.length;) {
        if (l=e[a++], '\\'!==l||2===n) {
          switch (n) {
            case 0: '/'===l?(c&&p(), i()):':'===l?(p(), n=1):d(); break; case 4: d(), n=r; break; case 1: '('===l?n=2:V.test(l)?d():(p(), n=0, '*'!==l&&'?'!==l&&'+'!==l&&a--); break; case 2: ')'===l?'\\'==u[u.length-1]?u=u.slice(0, -1)+l:n=3:u+=l; break; case 3: p(), n=0, '*'!==l&&'?'!==l&&'+'!==l&&a--, u=''; break; default: t('Unknown state');
          }
        } else r=n, n=4;
      } return 2===n&&t(`Unfinished custom RegExp for param "${c}"`), p(), i(), o;
    }(e.path), n); const o=f(r, {record: e, parent: t, children: [], alias: []}); return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o), o;
  } function G(e) {
    const t={}; const n=e.props||!1; if ('component'in e)t.default=n; else for (const r in e.components)t[r]='boolean'==typeof n?n:n[r]; return t;
  } function K(e) {
    for (;e;) {
      if (e.record.aliasOf) return !0; e=e.parent;
    } return !1;
  } function Z(e) {
    return e.reduce(((e, t)=>f(e, t.meta)), {});
  } function Y(e, t) {
    const n={}; for (const r in e)n[r]=r in t?t[r]:e[r]; return n;
  } const X=/#/g; const Q=/&/g; const ee=/\//g; const te=/=/g; const ne=/\?/g; const re=/\+/g; const oe=/%5B/g; const se=/%5D/g; const ie=/%5E/g; const le=/%60/g; const ae=/%7B/g; const ce=/%7C/g; const ue=/%7D/g; const pe=/%20/g; function de(e) {
    return encodeURI(''+e).replace(ce, '|').replace(oe, '[').replace(se, ']');
  } function fe(e) {
    return de(e).replace(re, '%2B').replace(pe, '+').replace(X, '%23').replace(Q, '%26').replace(le, '`').replace(ae, '{').replace(ue, '}').replace(ie, '^');
  } function he(e) {
    return null==e?'':function(e) {
      return de(e).replace(X, '%23').replace(ne, '%3F');
    }(e).replace(ee, '%2F');
  } function me(e) {
    try {
      return decodeURIComponent(''+e);
    } catch (e) {} return ''+e;
  } function ve(e) {
    const t={}; if (''===e||'?'===e) return t; const n=('?'===e[0]?e.slice(1):e).split('&'); for (let e=0; e<n.length; ++e) {
      const r=n[e].replace(re, ' '); const o=r.indexOf('='); const s=me(o<0?r:r.slice(0, o)); const i=o<0?null:me(r.slice(o+1)); if (s in t) {
        let e=t[s]; Array.isArray(e)||(e=t[s]=[e]), e.push(i);
      } else t[s]=i;
    } return t;
  } function ge(e) {
    let t=''; for (let n in e) {
      const r=e[n]; (n=fe(n).replace(te, '%3D'), null!=r)?(Array.isArray(r)?r.map(((e)=>e&&fe(e))):[r&&fe(r)]).forEach(((e)=>{
        void 0!==e&&(t+=(t.length?'&':'')+n, null!=e&&(t+='='+e));
      })):void 0!==r&&(t+=(t.length?'&':'')+n);
    } return t;
  } function ye(e) {
    const t={}; for (const n in e) {
      const r=e[n]; void 0!==r&&(t[n]=Array.isArray(r)?r.map(((e)=>null==e?null:''+e)):null==r?r:''+r);
    } return t;
  } function be() {
    let e=[]; return {add: function(t) {
      return e.push(t), ()=>{
        const n=e.indexOf(t); n>-1&&e.splice(n, 1);
      };
    }, list: ()=>e, reset: function() {
      e=[];
    }};
  } function we(e, t, n, r, o) {
    const s=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]); return ()=>new Promise(((i, l)=>{
      const a=(e)=>{
        let a; !1===e?l(M(4, {from: n, to: t})):e instanceof Error?l(e):'string'==typeof(a=e)||a&&'object'==typeof a?l(M(2, {from: t, to: e})):(s&&r.enterCallbacks[o]===s&&'function'==typeof e&&s.push(e), i());
      }; const c=e.call(r&&r.instances[o], t, n, a); let u=Promise.resolve(c); e.length<3&&(u=u.then(a)), u.catch(((e)=>l(e)));
    }));
  } function Oe(e, t, n, r) {
    const o=[]; for (const l of e) {
      for (const e in l.components) {
        const a=l.components[e]; if ('beforeRouteEnter'===t||l.instances[e]) {
          if ('object'==typeof(i=a)||'displayName'in i||'props'in i||'__vccOpts'in i) {
            const s=(a.__vccOpts||a)[t]; s&&o.push(we(s, n, r, l, e));
          } else {
            const i=a(); o.push((()=>i.then(((o)=>{
              if (!o) return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${l.path}"`)); const i=(a=o).__esModule||s&&'Module'===a[Symbol.toStringTag]?o.default:o; let a; l.components[e]=i; const c=(i.__vccOpts||i)[t]; return c&&we(c, n, r, l, e)();
            }))));
          }
        }
      }
    } let i; return o;
  } function _e(e) {
    const t=(0, r.f3)(c); const n=(0, r.f3)(u); const s=(0, o.Fl)((()=>t.resolve((0, o.SU)(e.to)))); const i=(0, o.Fl)((()=>{
      const {matched: e}=s.value; const {length: t}=e; const r=e[t-1]; const o=n.matched; if (!r||!o.length) return -1; const i=o.findIndex(b.bind(null, r)); if (i>-1) return i; const l=Ee(e[t-2]); return t>1&&Ee(r)===l&&o[o.length-1].path!==l?o.findIndex(b.bind(null, e[t-2])):i;
    })); const l=(0, o.Fl)((()=>i.value>-1&&function(e, t) {
      for (const n in t) {
        const r=t[n]; const o=e[n]; if ('string'==typeof r) {
          if (r!==o) return !1;
        } else if (!Array.isArray(o)||o.length!==r.length||r.some(((e, t)=>e!==o[t]))) return !1;
      } return !0;
    }(n.params, s.value.params))); const a=(0, o.Fl)((()=>i.value>-1&&i.value===n.matched.length-1&&w(n.params, s.value.params))); return {route: s, href: (0, o.Fl)((()=>s.value.href)), isActive: l, isExactActive: a, navigate: function(n={}) {
      return function(e) {
        if (!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.defaultPrevented||void 0!==e.button&&0!==e.button)) {
          if (e.currentTarget&&e.currentTarget.getAttribute) {
            const t=e.currentTarget.getAttribute('target'); if (/\b_blank\b/i.test(t)) return;
          } return e.preventDefault&&e.preventDefault(), !0;
        }
      }(n)?t[(0, o.SU)(e.replace)?'replace':'push']((0, o.SU)(e.to)).catch(m):Promise.resolve();
    }};
  } const ke=(0, r.aZ)({name: 'RouterLink', props: {to: {type: [String, Object], required: !0}, replace: Boolean, activeClass: String, exactActiveClass: String, custom: Boolean, ariaCurrentValue: {type: String, default: 'page'}}, useLink: _e, setup(e, {slots: t}) {
    const n=(0, o.qj)(_e(e)); const {options: s}=(0, r.f3)(c); const i=(0, o.Fl)((()=>({[Se(e.activeClass, s.linkActiveClass, 'router-link-active')]: n.isActive, [Se(e.exactActiveClass, s.linkExactActiveClass, 'router-link-exact-active')]: n.isExactActive}))); return ()=>{
      const o=t.default&&t.default(n); return e.custom?o:(0, r.h)('a', {'aria-current': n.isExactActive?e.ariaCurrentValue:null, 'href': n.href, 'onClick': n.navigate, 'class': i.value}, o);
    };
  }}); function Ee(e) {
    return e?e.aliasOf?e.aliasOf.path:e.path:'';
  } const Se=(e, t, n)=>null!=e?e:null!=t?t:n; function Ce(e, t) {
    if (!e) return null; const n=e(t); return 1===n.length?n[0]:n;
  } const je=(0, r.aZ)({name: 'RouterView', inheritAttrs: !1, props: {name: {type: String, default: 'default'}, route: Object}, setup(e, {attrs: t, slots: n}) {
    const s=(0, r.f3)(p); const i=(0, o.Fl)((()=>e.route||s.value)); const c=(0, r.f3)(a, 0); const u=(0, o.Fl)((()=>i.value.matched[c])); (0, r.JJ)(a, c+1), (0, r.JJ)(l, u), (0, r.JJ)(p, i); const d=(0, o.iH)(); return (0, r.YP)((()=>[d.value, u.value, e.name]), (([e, t, n], [r, o, s])=>{
      t&&(t.instances[n]=e, o&&o!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=o.leaveGuards), t.updateGuards.size||(t.updateGuards=o.updateGuards))), !e||!t||o&&b(t, o)&&r||(t.enterCallbacks[n]||[]).forEach(((t)=>t(e)));
    }), {flush: 'post'}), ()=>{
      const o=i.value; const s=u.value; const l=s&&s.components[e.name]; const a=e.name; if (!l) return Ce(n.default, {Component: l, route: o}); const c=s.props[e.name]; const p=c?!0===c?o.params:'function'==typeof c?c(o):c:null; const h=(0, r.h)(l, f({}, p, t, {onVnodeUnmounted: (e)=>{
        e.component.isUnmounted&&(s.instances[a]=null);
      }, ref: d})); return Ce(n.default, {Component: h, route: o})||h;
    };
  }}); function Pe(e) {
    const t=function(e, t) {
      const n=[]; const r=new Map; function o(e, n, r) {
        const l=!r; const a=function(e) {
          return {path: e.path, redirect: e.redirect, name: e.name, meta: e.meta||{}, aliasOf: void 0, beforeEnter: e.beforeEnter, props: G(e), children: e.children||[], instances: {}, leaveGuards: new Set, updateGuards: new Set, enterCallbacks: {}, components: 'components'in e?e.components||{}:{default: e.component}};
        }(e); a.aliasOf=r&&r.record; const c=Y(t, e); const u=[a]; if ('alias'in e) {
          const t='string'==typeof e.alias?[e.alias]:e.alias; for (const e of t)u.push(f({}, a, {components: r?r.record.components:a.components, path: e, aliasOf: r?r.record:a}));
        } let p; let d; for (const t of u) {
          const {path: u}=t; if (n&&'/'!==u[0]) {
            const e=n.record.path; const r='/'===e[e.length-1]?'':'/'; t.path=n.record.path+(u&&r+u);
          } if (p=W(t, n, c), r?r.alias.push(p):(d=d||p, d!==p&&d.alias.push(p), l&&e.name&&!K(p)&&s(e.name)), 'children'in a) {
            const e=a.children; for (let t=0; t<e.length; t++)o(e[t], p, r&&r.children[t]);
          }r=r||p, i(p);
        } return d?()=>{
          s(d);
        }:m;
      } function s(e) {
        if (L(e)) {
          const t=r.get(e); t&&(r.delete(e), n.splice(n.indexOf(t), 1), t.children.forEach(s), t.alias.forEach(s));
        } else {
          const t=n.indexOf(e); t>-1&&(n.splice(t, 1), e.record.name&&r.delete(e.record.name), e.children.forEach(s), e.alias.forEach(s));
        }
      } function i(e) {
        let t=0; for (;t<n.length&&B(e, n[t])>=0;)t++; n.splice(t, 0, e), e.record.name&&!K(e)&&r.set(e.record.name, e);
      } return t=Y({strict: !1, end: !0, sensitive: !1}, t), e.forEach(((e)=>o(e))), {addRoute: o, resolve: function(e, t) {
        let o; let s; let i; let l={}; if ('name'in e&&e.name) {
          if (o=r.get(e.name), !o) throw M(1, {location: e}); i=o.record.name, l=f(function(e, t) {
            const n={}; for (const r of t)r in e&&(n[r]=e[r]); return n;
          }(t.params, o.keys.filter(((e)=>!e.optional)).map(((e)=>e.name))), e.params), s=o.stringify(l);
        } else if ('path'in e)s=e.path, o=n.find(((e)=>e.re.test(s))), o&&(l=o.parse(s), i=o.record.name); else {
          if (o=t.name?r.get(t.name):n.find(((e)=>e.re.test(t.path))), !o) throw M(1, {location: e, currentLocation: t}); i=o.record.name, l=f({}, t.params, e.params), s=o.stringify(l);
        } const a=[]; let c=o; for (;c;)a.unshift(c.record), c=c.parent; return {name: i, path: s, params: l, matched: a, meta: Z(a)};
      }, removeRoute: s, getRoutes: function() {
        return n;
      }, getRecordMatcher: function(e) {
        return r.get(e);
      }};
    }(e.routes, e); const n=e.parseQuery||ve; const s=e.stringifyQuery||ge; const i=e.history; const l=be(); const a=be(); const v=be(); const y=(0, o.XI)(F); let O=F; d&&e.scrollBehavior&&'scrollRestoration'in history&&(history.scrollRestoration='manual'); const _=h.bind(null, ((e)=>''+e)); const E=h.bind(null, he); const S=h.bind(null, me); function C(e, r) {
      if (r=f({}, r||y.value), 'string'==typeof e) {
        const o=g(n, e, r.path); const s=t.resolve({path: o.path}, r); const l=i.createHref(o.fullPath); return f(o, s, {params: S(s.params), hash: me(o.hash), redirectedFrom: void 0, href: l});
      } let o; if ('path'in e)o=f({}, e, {path: g(n, e.path, r.path).path}); else {
        const t=f({}, e.params); for (const e in t)null==t[e]&&delete t[e]; o=f({}, e, {params: E(e.params)}), r.params=E(r.params);
      } const l=t.resolve(o, r); const a=e.hash||''; l.params=_(S(l.params)); const c=function(e, t) {
        const n=t.query?e(t.query):''; return t.path+(n&&'?')+n+(t.hash||'');
      }(s, f({}, e, {hash: (u=a, de(u).replace(ae, '{').replace(ue, '}').replace(ie, '^')), path: l.path})); let u; const p=i.createHref(c); return f({fullPath: c, hash: a, query: s===ge?ye(e.query):e.query||{}}, l, {redirectedFrom: void 0, href: p});
    } function A(e) {
      return 'string'==typeof e?g(n, e, y.value.path):f({}, e);
    } function I(e, t) {
      if (O!==e) return M(8, {from: t, to: e});
    } function R(e) {
      return z(e);
    } function T(e) {
      const t=e.matched[e.matched.length-1]; if (t&&t.redirect) {
        const {redirect: n}=t; let r='function'==typeof n?n(e):n; return 'string'==typeof r&&(r=r.includes('?')||r.includes('#')?r=A(r):{path: r}, r.params={}), f({query: e.query, hash: e.hash, params: e.params}, r);
      }
    } function z(e, t) {
      const n=O=C(e); const r=y.value; const o=e.state; const i=e.force; const l=!0===e.replace; const a=T(n); if (a) return z(f(A(a), {state: o, force: i, replace: l}), t||n); const c=n; let u; return c.redirectedFrom=t, !i&&function(e, t, n) {
        const r=t.matched.length-1; const o=n.matched.length-1; return r>-1&&r===o&&b(t.matched[r], n.matched[o])&&w(t.params, n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash;
      }(s, r, n)&&(u=M(16, {to: c, from: r}), te(r, r, !0, !1)), (u?Promise.resolve(u):N(c, r)).catch(((e)=>$(e)?e:Q(e, c, r))).then(((e)=>{
        if (e) {
          if ($(e, 2)) return z(f(A(e.to), {state: o, force: i, replace: l}), t||c);
        } else e=U(c, r, !0, l, o); return D(c, r, e), e;
      }));
    } function H(e, t) {
      const n=I(e, t); return n?Promise.reject(n):Promise.resolve();
    } function N(e, t) {
      let n; const [r, o, s]=function(e, t) {
        const n=[]; const r=[]; const o=[]; const s=Math.max(t.matched.length, e.matched.length); for (let i=0; i<s; i++) {
          const s=t.matched[i]; s&&(e.matched.find(((e)=>b(e, s)))?r.push(s):n.push(s)); const l=e.matched[i]; l&&(t.matched.find(((e)=>b(e, l)))||o.push(l));
        } return [n, r, o];
      }(e, t); n=Oe(r.reverse(), 'beforeRouteLeave', e, t); for (const o of r) {
        o.leaveGuards.forEach(((r)=>{
          n.push(we(r, e, t));
        }));
      } const i=H.bind(null, e, t); return n.push(i), xe(n).then((()=>{
        n=[]; for (const r of l.list())n.push(we(r, e, t)); return n.push(i), xe(n);
      })).then((()=>{
        n=Oe(o, 'beforeRouteUpdate', e, t); for (const r of o) {
          r.updateGuards.forEach(((r)=>{
            n.push(we(r, e, t));
          }));
        } return n.push(i), xe(n);
      })).then((()=>{
        n=[]; for (const r of e.matched) if (r.beforeEnter&&!t.matched.includes(r)) if (Array.isArray(r.beforeEnter)) for (const o of r.beforeEnter)n.push(we(o, e, t)); else n.push(we(r.beforeEnter, e, t)); return n.push(i), xe(n);
      })).then((()=>(e.matched.forEach(((e)=>e.enterCallbacks={})), n=Oe(s, 'beforeRouteEnter', e, t), n.push(i), xe(n)))).then((()=>{
        n=[]; for (const r of a.list())n.push(we(r, e, t)); return n.push(i), xe(n);
      })).catch(((e)=>$(e, 8)?e:Promise.reject(e)));
    } function D(e, t, n) {
      for (const r of v.list())r(e, t, n);
    } function U(e, t, n, r, o) {
      const s=I(e, t); if (s) return s; const l=t===F; const a=d?history.state:{}; n&&(r||l?i.replace(e.fullPath, f({scroll: l&&a&&a.scroll}, o)):i.push(e.fullPath, o)), y.value=e, te(e, t, n, l), ee();
    } let J; let q; const V=be(); const X=be(); function Q(e, t, n) {
      ee(e); const r=X.list(); return r.length?r.forEach(((r)=>r(e, t, n))):console.error(e), Promise.reject(e);
    } function ee(e) {
      q||(q=!0, J=i.listen(((e, t, n)=>{
        const r=C(e); const o=T(r); if (o) return void z(f(o, {replace: !0}), r).catch(m); O=r; const s=y.value; let l; let a; d&&(l=P(s.fullPath, n.delta), a=j(), x.set(l, a)), N(r, s).catch(((e)=>$(e, 12)?e:$(e, 2)?(z(e.to, r).then(((e)=>{
          $(e, 20)&&!n.delta&&n.type===k.pop&&i.go(-1, !1);
        })).catch(m), Promise.reject()):(n.delta&&i.go(-n.delta, !1), Q(e, r, s)))).then(((e)=>{
          (e=e||U(r, s, !1))&&(n.delta?i.go(-n.delta, !1):n.type===k.pop&&$(e, 20)&&i.go(-1, !1)), D(r, s, e);
        })).catch(m);
      })), V.list().forEach((([t, n])=>e?n(e):t())), V.reset());
    } function te(t, n, o, s) {
      const {scrollBehavior: i}=e; if (!d||!i) return Promise.resolve(); const l=!o&&function(e) {
        const t=x.get(e); return x.delete(e), t;
      }(P(t.fullPath, 0))||(s||!o)&&history.state&&history.state.scroll||null; return (0, r.Y3)().then((()=>i(t, n, l))).then(((e)=>e&&function(e) {
        let t; if ('el'in e) {
          const n=e.el; const r='string'==typeof n&&n.startsWith('#'); const o='string'==typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n; if (!o) return; t=function(e, t) {
            const n=document.documentElement.getBoundingClientRect(); const r=e.getBoundingClientRect(); return {behavior: t.behavior, left: r.left-n.left-(t.left||0), top: r.top-n.top-(t.top||0)};
          }(o, e);
        } else t=e; 'scrollBehavior'in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset, null!=t.top?t.top:window.pageYOffset);
      }(e))).catch(((e)=>Q(e, t, n)));
    } const ne=(e)=>i.go(e); let re; const oe=new Set; const se={currentRoute: y, addRoute: function(e, n) {
      let r; let o; return L(e)?(r=t.getRecordMatcher(e), o=n):o=e, t.addRoute(o, r);
    }, removeRoute: function(e) {
      const n=t.getRecordMatcher(e); n&&t.removeRoute(n);
    }, hasRoute: function(e) {
      return !!t.getRecordMatcher(e);
    }, getRoutes: function() {
      return t.getRoutes().map(((e)=>e.record));
    }, resolve: C, options: e, push: R, replace: function(e) {
      return R(f(A(e), {replace: !0}));
    }, go: ne, back: ()=>ne(-1), forward: ()=>ne(1), beforeEach: l.add, beforeResolve: a.add, afterEach: v.add, onError: X.add, isReady: function() {
      return q&&y.value!==F?Promise.resolve():new Promise(((e, t)=>{
        V.add([e, t]);
      }));
    }, install(e) {
      e.component('RouterLink', ke), e.component('RouterView', je), e.config.globalProperties.$router=this, Object.defineProperty(e.config.globalProperties, '$route', {enumerable: !0, get: ()=>(0, o.SU)(y)}), d&&!re&&y.value===F&&(re=!0, R(i.location).catch(((e)=>{}))); const t={}; for (const e in F)t[e]=(0, o.Fl)((()=>y.value[e])); e.provide(c, this), e.provide(u, (0, o.qj)(t)), e.provide(p, y); const n=e.unmount; oe.add(e), e.unmount=function() {
        oe.delete(e), oe.size<1&&(O=F, J&&J(), y.value=F, re=!1, q=!1), n();
      };
    }}; return se;
  } function xe(e) {
    return e.reduce(((e, t)=>e.then((()=>t()))), Promise.resolve());
  } function Ae() {
    return (0, r.f3)(c);
  } function Ie() {
    return (0, r.f3)(u);
  }
}}]);
