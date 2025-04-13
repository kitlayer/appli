/* Qwik Service Worker */
const appBundles=[["../service-worker.js",[]],["q--mZSCFVG.js",[4],["Lu7yaNlFQWA"]],["q-8l71IfTN.js",[6],["ScE8eseirUA"]],["q-B1wvQk0C.js",[32,46],["1raneLGffO8"]],["q-B910zlbq.js",[]],["q-BF4vex-C.js",[4],["DFZepFKS6Vo"]],["q-BGkfqzoE.js",[2,3,13,58]],["q-BHCUbTaL.js",[30]],["q-BHKYutjT.js",[],["ckiTvQne6UA"]],["q-BJD0PEpF.js",[4],["US0pTyQnOdc"]],["q-BKN8xPsQ.js",[36,43]],["q-BOHyo7T_.js",[6,39],["aww2BzpANGM"]],["q-BPjkv9Qg.js",[4],["QslK0uY0Y10"]],["q-BRBr7aun.js",[],["9KRx0IOCHt8"]],["q-BRgJsbQ7.js",[38]],["q-BcmC6_pn.js",[4],["N26RLdG0oBg"]],["q-Bds_4f49.js",[4],["zpHcJzYZ88E"]],["q-BhrAkcVU.js",[4],["3lmg2y8vy0Q"]],["q-BqgBvJx-.js",[60,1,5,17,26,27,41,56],["HPqdzZkjZGU"]],["q-Bu5ESFGd.js",[6],["WfTOxT4IrdA"]],["q-BvFe7zkK.js",[60,23,31],["6AavtHtSbJQ"]],["q-Bxw2WUHl.js",[4],["o4MGJRcrhyk"]],["q-Bzvm90ae.js",[4],["loVOywvE4YY"]],["q-C4c_ZIdW.js",[4],["iRY7uItVvaA"]],["q-CAaSLYwh.js",[4],["8593yEVpMn4"]],["q-CAxYocCk.js",[55]],["q-CBNEyn6f.js",[4],["mYmtHiz5kmc"]],["q-CE-eK2Vj.js",[4],["DHf6wtmjLIU"]],["q-CERTxPOJ.js",[60,40,51],["TRQ0lYwJfP0"]],["q-CGbuNfDP.js",[6],["qGVD1Sz413o"]],["q-CINRczAf.js",[10,18,22],["zTsQE9UrlF0"]],["q-CTxtmPAS.js",[4],["6sEJLrp1A5o"]],["q-CZ0nJOO6.js",[4],["FdQ8zERN4uM"]],["q-C_K8s2MJ.js",[4],["26Zk9LevwR4"]],["q-CjiQYsvc.js",[6,16,44],["pWsmcogutG8"]],["q-ClEyzndU.js",[6,8,24],["JhU0LKqNL6E"]],["q-CzHv3Hl8.js",[4],["b8tpYh4hJio"]],["q-DCZm3Er2.js",[6,54],["MiPVFWJLcMo"]],["q-DDFqIGrV.js",[12,35,49],["VKFlAWJuVm8"]],["q-DFrZ8mSL.js",[60]],["q-DKMQdFqR.js",[4],["7HKWZIVpMCY"]],["q-DKpg1m0a.js",[4],["VAAY1UqjVyc"]],["q-DLQXr_Uc.js",[],["K4gvalEGCME"]],["q-DOsi_dth.js",[10],["O3AtCNgJJ5w"]],["q-D_F2byDY.js",[4],["xe8duyQ5aaU"]],["q-DaCpyThn.js",[4],["0dieTVGTeKc"]],["q-DhQsrMMK.js",[6],["zPJUEsxZLIA"]],["q-DprzxR-g.js",[57]],["q-DqCrtHOQ.js",[4],["A5SCimyrjAE"]],["q-Dy_xRw-B.js",[4],["x3KawJdSBqo"]],["q-FY-lGNUR.js",[60]],["q-HijRNfEw.js",[4],["HX9TLAq21t8"]],["q-JmMp9x8v.js",[60,9],["bmV0oH7tsks"]],["q-YNhZ_UX0.js",[6,39],["Ysfvd0zsHZc"]],["q-ZlgEAgWc.js",[4],["PmWjL2RrvZM"]],["q-kToc5P8b.js",[59],["tntnak2DhJ8"]],["q-nFM11qhh.js",[4],["WUbHPVfxmBI"]],["q-nlOfV-CX.js",[20,21,28,45],["B0lqk5IDDy4"]],["q-ppwJBnLl.js",[11,29,42,53],["p1yCGpFL1xE"]],["q-tFWSGLFj.js",[6],["0vphQYqOdZI"]],["q-uemlvruI.js",[]]];
const libraryBundleIds=[39];
const linkBundles=[[/^\/$/,[14,38,47,57]],[/^\/template\/?$/,[14,38,7,30]]];
const p=(t,e)=>e.filter(n=>!t.some(c=>n.endsWith(c[0]))),q=(t,e)=>!!e&&!B(e),B=t=>{const e=t.headers.get("Cache-Control")||"";return e.includes("no-cache")||e.includes("max-age=0")},N=(t,e)=>t.some(n=>e.endsWith("/"+n[0])),W=(t,e)=>t.find(n=>n[0]===e),g=(t,e)=>e.map(n=>t[n]?t[n][0]:null),w=(t,e)=>e.map(n=>t.get(n)).filter(n=>n!=null),C=t=>{const e=new Map;for(const n of t){const c=n[2];if(c)for(const o of c)e.set(o,n[0])}return e},k=(t,e,n,c)=>new Promise((o,a)=>{const s=c.url,r=n.get(s);if(r)r.push([o,a]);else{const l=f=>{const i=n.get(s);if(i){n.delete(s);for(const[d]of i)d(f.clone())}else o(f.clone())},u=f=>{const i=n.get(s);if(i){n.delete(s);for(const[d,U]of i)U(f)}else a(f)};n.set(s,[[o,a]]),t.match(s).then(f=>{if(q(c,f))l(f);else return e(c).then(async i=>{i.ok&&await t.put(s,i.clone()),l(i)})}).catch(f=>t.match(s).then(i=>{i?l(i):u(f)}))}}),y="QwikBuild",b=new Set,A=new Map,h=[],m=(t,e,n,c,o,a=!1)=>{Array.isArray(o)&&v(o,t,c,a),L(e,n)};function v(t,e,n,c){for(const o of t)try{const a=W(e,o);if(a){const s=g(e,a[1]),r=new URL(o,n).href,l=h.indexOf(r);l>-1?c&&(h.splice(l,1),h.unshift(r)):(c?h.unshift(r):h.push(r),v(s,e,n,c))}}catch(a){console.error(a)}}function L(t,e){for(;h.length>0&&A.size<6;){const n=h.shift();if(!b.has(n)){const c=new Request(n);b.add(n),k(t,e,A,c).catch(()=>{b.delete(n)}).finally(()=>L(t,e))}}}const E=(t,e,n,c,o,a,s)=>{try{m(t,c,o,a,g(t,e))}catch(r){console.error(r)}for(const r of s)try{for(const l of n){const[u,f]=l;if(u.test(r)){m(t,c,o,a,g(t,f));break}}}catch(l){console.error(l)}},T=(t,e,n,c)=>{try{const{baseUrl:o,requestedBundleName:a}=x(c);m(t,e,n,o,[a],!0)}catch(o){console.error(o)}};function x(t){const e=t.href.split("/"),n=e[e.length-1];return e[e.length-1]="",{baseUrl:new URL(e.join("/")),requestedBundleName:n}}const P=(t,e,n,c)=>{const o=t.fetch.bind(t),a=C(e);t.addEventListener("activate",s=>{(async()=>{try{s.waitUntil(t.caches.keys().then(i=>Promise.all(i.map(d=>{if(d!==y)return caches.delete(d)}))));const r=await t.caches.open(y),u=(await r.keys()).map(i=>i.url),f=p(e,u);await Promise.all(f.map(i=>r.delete(i)))}catch(r){console.error(r)}})()}),t.addEventListener("message",async({data:s})=>{if(s.type==="qprefetch"&&typeof s.base=="string"){const r=await t.caches.open(y),l=new URL(s.base,t.origin);Array.isArray(s.links)&&E(e,n,c,r,o,l,s.links),Array.isArray(s.bundles)&&m(e,r,o,l,s.bundles),Array.isArray(s.symbols)&&m(e,r,o,l,w(a,s.symbols))}}),t.addEventListener("fetch",s=>{const r=s.request;if(r.method==="GET"){const l=new URL(r.url);N(e,l.pathname)&&s.respondWith(t.caches.open(y).then(u=>(T(e,u,o,l),k(u,o,A,r))))}})},Q=()=>{typeof self<"u"&&typeof appBundles<"u"&&P(self,appBundles,libraryBundleIds,linkBundles)};Q();addEventListener("install",()=>self.skipWaiting());addEventListener("activate",()=>self.clients.claim());
