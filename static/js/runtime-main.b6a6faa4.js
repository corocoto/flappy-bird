!function(e){function t(t){for(var n,o,l=t[0],c=t[1],p=t[2],f=t[3]||[],s=0,h=[];s<l.length;s++)o=l[s],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&h.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(d&&d(t),i.push.apply(i,f);h.length;)h.shift()();return u.push.apply(u,p||[]),r()}function r(){for(var e,t=0;t<u.length;t++){for(var r=u[t],n=!0,o=1;o<r.length;o++){var p=r[o];0!==a[p]&&(n=!1)}n&&(u.splice(t--,1),e=c(c.s=r[0]))}return 0===u.length&&(i.forEach((function(e){if(void 0===a[e]){a[e]=null;var t=document.createElement("link");c.nc&&t.setAttribute("nonce",c.nc),t.rel="prefetch",t.as="script",t.href=l(e),document.head.appendChild(t)}})),i.length=0),e}var n={},o={3:0},a={3:0},u=[],i=[];function l(e){return c.p+"static/js/"+({0:"AboutComponent",1:"SceneComponent"}[e]||e)+"."+{0:"5d233b3a",1:"247d5359"}[e]+".chunk.js"}function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[];o[e]?t.push(o[e]):0!==o[e]&&{0:1,1:1}[e]&&t.push(o[e]=new Promise((function(t,r){for(var n="static/css/"+({0:"AboutComponent",1:"SceneComponent"}[e]||e)+"."+{0:"f50e0704",1:"22ed1280"}[e]+".chunk.css",a=c.p+n,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var l=(f=u[i]).getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(l===n||l===a))return t()}var p=document.getElementsByTagName("style");for(i=0;i<p.length;i++){var f;if((l=(f=p[i]).getAttribute("data-href"))===n||l===a)return t()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css";s.onerror=s.onload=function(n){if(s.onerror=s.onload=null,"load"===n.type)t();else{var u=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.href||a,l=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=u,l.request=i,delete o[e],s.parentNode.removeChild(s),r(l)}},s.href=a,document.head.appendChild(s)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=n);var u,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=l(e);var p=new Error;u=function(t){i.onerror=i.onload=null,clearTimeout(f);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",p.name="ChunkLoadError",p.type=n,p.request=o,r[1](p)}a[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:i})}),12e4);i.onerror=i.onload=u,document.head.appendChild(i)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/flappy-bird/",c.oe=function(e){throw console.error(e),e};var p=this["webpackJsonpflappy-bird"]=this["webpackJsonpflappy-bird"]||[],f=p.push.bind(p);p.push=t,p=p.slice();for(var s=0;s<p.length;s++)t(p[s]);var d=f;r()}([]);
//# sourceMappingURL=runtime-main.b6a6faa4.js.map