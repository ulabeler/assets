(()=>{
  'use strict'; let e; let r; let t; const a={}; const o={}; function n(e) {
    const r=o[e]; if (void 0!==r) return r.exports; const t=o[e]={exports: {}}; return a[e].call(t.exports, t, t.exports, n), t.exports;
  }n.m=a, e=[], n.O=(r, t, a, o)=>{
    if (!t) {
      let i=1/0; for (d=0; d<e.length; d++) {
        for (var [t, a, o]=e[d], s=!0, l=0; l<t.length; l++)(!1&o||i>=o)&&Object.keys(n.O).every(((e)=>n.O[e](t[l])))?t.splice(l--, 1):(s=!1, o<i&&(i=o)); if (s) {
          e.splice(d--, 1); const u=a(); void 0!==u&&(r=u);
        }
      } return r;
    }o=o||0; for (var d=e.length; d>0&&e[d-1][2]>o; d--)e[d]=e[d-1]; e[d]=[t, a, o];
  }, n.d=(e, r)=>{
    for (const t in r)n.o(r, t)&&!n.o(e, t)&&Object.defineProperty(e, t, {enumerable: !0, get: r[t]});
  }, n.f={}, n.e=(e)=>Promise.all(Object.keys(n.f).reduce(((r, t)=>(n.f[t](e, r), r)), [])), n.u=(e)=>'assets/js/'+({88: 'v-3706649a', 509: 'v-8daa1a0e', 831: 'v-3dfe8e0c'}[e]||e)+'.'+{88: '71a9a591', 293: '6e87e570', 491: 'a1a28fc8', 509: 'd0faa4ce', 831: '22dc3e0b'}[e]+'.js', n.miniCssF=(e)=>{}, n.o=(e, r)=>Object.prototype.hasOwnProperty.call(e, r), r={}, t='train-vuepress:', n.l=(e, a, o, i)=>{
    if (r[e])r[e].push(a); else {
      let s; let l; if (void 0!==o) {
        for (let u=document.getElementsByTagName('script'), d=0; d<u.length; d++) {
          const c=u[d]; if (c.getAttribute('src')==e||c.getAttribute('data-webpack')==t+o) {
            s=c; break;
          }
        }
      }s||(l=!0, (s=document.createElement('script')).charset='utf-8', s.timeout=120, n.nc&&s.setAttribute('nonce', n.nc), s.setAttribute('data-webpack', t+o), s.src=e), r[e]=[a]; const f=(t, a)=>{
        s.onerror=s.onload=null, clearTimeout(p); const o=r[e]; if (delete r[e], s.parentNode&&s.parentNode.removeChild(s), o&&o.forEach(((e)=>e(a))), t) return t(a);
      }; var p=setTimeout(f.bind(null, void 0, {type: 'timeout', target: s}), 12e4); s.onerror=f.bind(null, s.onerror), s.onload=f.bind(null, s.onload), l&&document.head.appendChild(s);
    }
  }, n.r=(e)=>{
    'undefined'!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e, Symbol.toStringTag, {value: 'Module'}), Object.defineProperty(e, '__esModule', {value: !0});
  }, n.p='/', (()=>{
    const e={523: 0, 460: 0}; n.f.j=(r, t)=>{
      let a=n.o(e, r)?e[r]:void 0; if (0!==a) {
        if (a)t.push(a[2]); else if (/^(460|523)$/.test(r))e[r]=0; else {
          const o=new Promise(((t, o)=>a=e[r]=[t, o])); t.push(a[2]=o); const i=n.p+n.u(r); const s=new Error; n.l(i, ((t)=>{
            if (n.o(e, r)&&(0!==(a=e[r])&&(e[r]=void 0), a)) {
              const o=t&&('load'===t.type?'missing':t.type); const i=t&&t.target&&t.target.src; s.message='Loading chunk '+r+' failed.\n('+o+': '+i+')', s.name='ChunkLoadError', s.type=o, s.request=i, a[1](s);
            }
          }), 'chunk-'+r, r);
        }
      }
    }, n.O.j=(r)=>0===e[r]; const r=(r, t)=>{
      let a; let o; const [i, s, l]=t; let u=0; if (i.some(((r)=>0!==e[r]))) {
        for (a in s)n.o(s, a)&&(n.m[a]=s[a]); if (l) var d=l(n);
      } for (r&&r(t); u<i.length; u++)o=i[u], n.o(e, o)&&e[o]&&e[o][0](), e[i[u]]=0; return n.O(d);
    }; const t=self.webpackChunktrain_vuepress=self.webpackChunktrain_vuepress||[]; t.forEach(r.bind(null, 0)), t.push=r.bind(null, t.push.bind(t));
  })();
})();
