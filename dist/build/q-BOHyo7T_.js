import{u as C,v as b}from"./q-B910zlbq.js";import{f as O}from"./q-B910zlbq.js";import{t as g,p as c,k as m,l as f,m as n,n as w,r as R,o as _,q as E,v as I}from"./q-BGkfqzoE.js";import{c as L,m as x,r as N}from"./q-DFrZ8mSL.js";import"./q-uemlvruI.js";const q=async(a,s)=>{const[v,p,i,u]=C(),{type:r="link",forceReload:l=a===void 0,replaceState:d=!1,scroll:y=!0}=typeof s=="object"?s:{forceReload:s};n.navCount++;const t=i.value.dest,e=a===void 0?t:typeof a=="number"?a:g(a,u.url);if(c.$cbs$&&(l||typeof e=="number"||!m(e,t)||!f(e,t))){const o=n.navCount,S=await Promise.all([...c.$cbs$.values()].map(h=>h(e)));if(o!==n.navCount||S.some(Boolean)){o===n.navCount&&r==="popstate"&&history.pushState(null,"",t);return}}if(typeof e=="number"){history.go(e);return}if(!f(e,t)){location.href=e.href;return}if(!l&&m(e,t)){{r==="link"&&e.href!==location.href&&history.pushState(null,"",e);const o=document.getElementById(w)??document.documentElement;R(r,e,new URL(location.href),o,_()),r==="popstate"&&(window._qCityScrollEnabled=!0)}return}return i.value={type:r,dest:e,forceReload:l,replaceState:d,scroll:y},E(e,b()),I(N,x,L,e.pathname),v.value=void 0,u.isNavigating=!0,new Promise(o=>{p.r=o})};export{O as _hW,q as s_aww2BzpANGM};
