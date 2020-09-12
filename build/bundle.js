var app=function(){"use strict";function t(){}const e=t=>t;function n(t){return t()}function o(){return Object.create(null)}function s(t){t.forEach(n)}function i(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}const r="undefined"!=typeof window;let c=r?()=>window.performance.now():()=>Date.now(),a=r?t=>requestAnimationFrame(t):t;const u=new Set;function f(t){u.forEach(e=>{e.c(t)||(u.delete(e),e.f())}),0!==u.size&&a(f)}function d(t){let e;return 0===u.size&&a(f),{promise:new Promise(n=>{u.add(e={c:t,f:n})}),abort(){u.delete(e)}}}function p(t,e){t.appendChild(e)}function m(t,e,n){t.insertBefore(e,n||null)}function h(t){t.parentNode.removeChild(t)}function g(t){return document.createElement(t)}function y(t){return document.createTextNode(t)}function v(){return y(" ")}function $(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function _(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const k=new Set;let b,w=0;function j(t,e,n,o,s,i,l,r=0){const c=16.666/o;let a="{\n";for(let t=0;t<=1;t+=c){const o=e+(n-e)*i(t);a+=100*t+`%{${l(o,1-o)}}\n`}const u=a+`100% {${l(n,1-n)}}\n}`,f=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${r}`,d=t.ownerDocument;k.add(d);const p=d.__svelte_stylesheet||(d.__svelte_stylesheet=d.head.appendChild(g("style")).sheet),m=d.__svelte_rules||(d.__svelte_rules={});m[f]||(m[f]=!0,p.insertRule(`@keyframes ${f} ${u}`,p.cssRules.length));const h=t.style.animation||"";return t.style.animation=`${h?h+", ":""}${f} ${o}ms linear ${s}ms 1 both`,w+=1,f}function x(t,e){const n=(t.style.animation||"").split(", "),o=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),s=n.length-o.length;s&&(t.style.animation=o.join(", "),w-=s,w||a(()=>{w||(k.forEach(t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}}),k.clear())}))}function C(t){b=t}const E=[],O=[],B=[],L=[],A=Promise.resolve();let S=!1;function T(t){B.push(t)}let q=!1;const J=new Set;function M(){if(!q){q=!0;do{for(let t=0;t<E.length;t+=1){const e=E[t];C(e),N(e.$$)}for(C(null),E.length=0;O.length;)O.pop()();for(let t=0;t<B.length;t+=1){const e=B[t];J.has(e)||(J.add(e),e())}B.length=0}while(E.length);for(;L.length;)L.pop()();S=!1,q=!1,J.clear()}}function N(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(T)}}let R;function z(){return R||(R=Promise.resolve(),R.then(()=>{R=null})),R}function D(t,e,n){t.dispatchEvent(function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(`${e?"intro":"outro"}${n}`))}const P=new Set;let G;function F(t,e){t&&t.i&&(P.delete(t),t.i(e))}function H(t,e,n,o){if(t&&t.o){if(P.has(t))return;P.add(t),G.c.push(()=>{P.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}const I={duration:0};function W(n,o,s){let l,r,a=o(n,s),u=!1,f=0;function p(){l&&x(n,l)}function m(){const{delay:o=0,duration:s=300,easing:i=e,tick:m=t,css:h}=a||I;h&&(l=j(n,0,1,s,o,i,h,f++)),m(0,1);const g=c()+o,y=g+s;r&&r.abort(),u=!0,T(()=>D(n,!0,"start")),r=d(t=>{if(u){if(t>=y)return m(1,0),D(n,!0,"end"),p(),u=!1;if(t>=g){const e=i((t-g)/s);m(e,1-e)}}return u})}let h=!1;return{start(){h||(x(n),i(a)?(a=a(),z().then(m)):m())},invalidate(){h=!1},end(){u&&(p(),u=!1)}}}function K(t,e,o){const{fragment:l,on_mount:r,on_destroy:c,after_update:a}=t.$$;l&&l.m(e,o),T(()=>{const e=r.map(n).filter(i);c?c.push(...e):s(e),t.$$.on_mount=[]}),a.forEach(T)}function Q(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function U(t,e){-1===t.$$.dirty[0]&&(E.push(t),S||(S=!0,A.then(M)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function V(e,n,i,l,r,c,a=[-1]){const u=b;C(e);const f=n.props||{},d=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:r,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:o(),dirty:a,skip_bound:!1};let p=!1;if(d.ctx=i?i(e,f,(t,n,...o)=>{const s=o.length?o[0]:n;return d.ctx&&r(d.ctx[t],d.ctx[t]=s)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](s),p&&U(e,t)),n}):[],d.update(),p=!0,s(d.before_update),d.fragment=!!l&&l(d.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);d.fragment&&d.fragment.l(t),t.forEach(h)}else d.fragment&&d.fragment.c();n.intro&&F(e.$$.fragment),K(e,n.target,n.anchor),M()}C(u)}class X{$destroy(){Q(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Y={"Gilbert Bui":{"portfolio:":"",linkedin:"",angellist:"",email:""},"Marquis Bentley":{"portfolio:":"",linkedin:"",angellist:"",email:""},"Julie Bock":{"portfolio:":"",linkedin:"",angellist:"",email:""},"John Lam":{"portfolio:":"",linkedin:"",angellist:"",email:""},"Chris Oney":{"portfolio:":"",linkedin:"",angellist:"",email:""}};function Z(t){const e=t-1;return e*e*e+1}function tt(t,{delay:e=0,duration:n=400,easing:o=Z,x:s=0,y:i=0,opacity:l=0}){const r=getComputedStyle(t),c=+r.opacity,a="none"===r.transform?"":r.transform,u=c*(1-l);return{delay:e,duration:n,easing:o,css:(t,e)=>`\n\t\t\ttransform: ${a} translate(${(1-t)*s}px, ${(1-t)*i}px);\n\t\t\topacity: ${c-u*e}`}}function et(n){let o,l,r,a,u,f,y,$,k,b,w,C,E,O,B,L,A,S,q;return{c(){o=g("div"),l=g("a"),r=g("span"),u=v(),f=g("a"),y=g("span"),k=v(),b=g("a"),w=g("span"),E=v(),O=g("a"),B=g("span"),_(r,"class","fas fa-smile link-icon svelte-1nv50s6"),_(l,"href",a=Y[n[0]].portfolio),_(y,"class","fab fa-linkedin link-icon svelte-1nv50s6"),_(f,"href",$=Y[n[0]].linkedin),_(w,"class","fab fa-angellist link-icon svelte-1nv50s6"),_(b,"href",C=Y[n[0]].angellist),_(B,"class","fas fa-envelope link-icon svelte-1nv50s6"),_(O,"href",L="mailto:"+Y[n[0]].portfolio),_(o,"class","linkbar-container svelte-1nv50s6")},m(t,e){m(t,o,e),p(o,l),p(l,r),p(o,u),p(o,f),p(f,y),p(o,k),p(o,b),p(b,w),p(o,E),p(o,O),p(O,B),q=!0},p(t,[e]){(!q||1&e&&a!==(a=Y[t[0]].portfolio))&&_(l,"href",a),(!q||1&e&&$!==($=Y[t[0]].linkedin))&&_(f,"href",$),(!q||1&e&&C!==(C=Y[t[0]].angellist))&&_(b,"href",C),(!q||1&e&&L!==(L="mailto:"+Y[t[0]].portfolio))&&_(O,"href",L)},i(t){q||(T(()=>{S&&S.end(1),A||(A=W(o,tt,{x:100,duration:400})),A.start()}),q=!0)},o(n){A&&A.invalidate(),S=function(n,o,l){let r,a=o(n,l),u=!0;const f=G;function p(){const{delay:o=0,duration:i=300,easing:l=e,tick:p=t,css:m}=a||I;m&&(r=j(n,1,0,i,o,l,m));const h=c()+o,g=h+i;T(()=>D(n,!1,"start")),d(t=>{if(u){if(t>=g)return p(0,1),D(n,!1,"end"),--f.r||s(f.c),!1;if(t>=h){const e=l((t-h)/i);p(1-e,e)}}return u})}return f.r+=1,i(a)?z().then(()=>{a=a(),p()}):p(),{end(t){t&&a.tick&&a.tick(1,0),u&&(r&&x(n,r),u=!1)}}}(o,tt,{x:100,duration:400}),q=!1},d(t){t&&h(o),t&&S&&S.end()}}}function nt(t,e,n){let{name:o}=e;return t.$$set=t=>{"name"in t&&n(0,o=t.name)},[o]}class ot extends X{constructor(t){super(),V(this,t,nt,et,l,{name:0})}}function st(t,e,n){const o=t.slice();return o[5]=e[n],o[7]=n,o}function it(t){let e,n,o,s,i,l,r,c,a,u=t[5]+"";function f(...e){return t[4](t[7],...e)}return{c(){e=g("div"),n=g("span"),o=y(u),s=v(),i=g("img"),r=v(),_(i,"class","profile-pic svelte-1fyh6ju"),i.src!==(l="images/empty.png")&&_(i,"src","images/empty.png"),_(i,"alt",""),_(e,"class","prof-top svelte-1fyh6ju")},m(t,l){m(t,e,l),p(e,n),p(n,o),p(e,s),p(e,i),p(e,r),c||(a=$(e,"click",f),c=!0)},p(e,n){t=e},d(t){t&&h(e),c=!1,a()}}}function lt(t){let e,n,o,s,i,l,r,c,a,u=t[5]+"";function f(...e){return t[3](t[7],...e)}return{c(){e=g("div"),n=g("span"),o=y(u),s=v(),i=g("img"),r=v(),_(i,"class","profile-pic selected svelte-1fyh6ju"),i.src!==(l="images/close.png")&&_(i,"src","images/close.png"),_(i,"alt",""),_(e,"class","prof-top svelte-1fyh6ju")},m(t,l){m(t,e,l),p(e,n),p(n,o),p(e,s),p(e,i),p(e,r),c||(a=$(e,"click",f),c=!0)},p(e,n){t=e},d(t){t&&h(e),c=!1,a()}}}function rt(t){let e;function n(t,e){return t[0]===t[7]?lt:it}let o=n(t),s=o(t);return{c(){s.c(),e=y("")},m(t,n){s.m(t,n),m(t,e,n)},p(t,i){o===(o=n(t))&&s?s.p(t,i):(s.d(1),s=o(t),s&&(s.c(),s.m(e.parentNode,e)))},d(t){s.d(t),t&&h(e)}}}function ct(t){let e,n;return e=new ot({props:{name:t[1][t[0]]}}),{c(){var t;(t=e.$$.fragment)&&t.c()},m(t,o){K(e,t,o),n=!0},p(t,n){const o={};1&n&&(o.name=t[1][t[0]]),e.$set(o)},i(t){n||(F(e.$$.fragment,t),n=!0)},o(t){H(e.$$.fragment,t),n=!1},d(t){Q(e,t)}}}function at(e){let n,o;return{c(){n=g("div"),n.innerHTML='<img class="clock svelte-1fyh6ju" src="images/broken-clock.png" alt=""/> \n\t\t\t<p class="apology-title svelte-1fyh6ju">Oops, something&#39;s gone wrong</p> \n\t\t\t<p class="apology-body svelte-1fyh6ju">This site uses free dynos, so we may have hit the limit for the month on this project.\n\t\t\t\tWe apologize for the inconvenience, and hope you&#39;ll be able to see it soon!\n\t\t\t\tIn the meantime, why don&#39;t you take a look at some of the links up above?</p>',_(n,"class","bottom svelte-1fyh6ju")},m(t,e){m(t,n,e)},p:t,i(t){o||T(()=>{o=W(n,dt,{}),o.start()})},o:t,d(t){t&&h(n)}}}function ut(e){let n,o,s,i,l,r,c,a,u,f=e[1][e[0]]+"";return{c(){n=g("div"),o=g("img"),i=v(),l=g("p"),r=y(f),c=v(),a=g("p"),a.textContent="This is just taking up space right now",_(o,"class","profile-pic big svelte-1fyh6ju"),o.src!==(s="images/"+e[1][e[0]].toLowerCase().split(" ").join("-")+".png")&&_(o,"src",s),_(o,"alt",""),_(l,"class","apology-title svelte-1fyh6ju"),_(a,"class","apology-body svelte-1fyh6ju"),_(n,"class","bottom svelte-1fyh6ju")},m(t,e){m(t,n,e),p(n,o),p(n,i),p(n,l),p(l,r),p(n,c),p(n,a)},p(t,e){1&e&&o.src!==(s="images/"+t[1][t[0]].toLowerCase().split(" ").join("-")+".png")&&_(o,"src",s),1&e&&f!==(f=t[1][t[0]]+"")&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(r,f)},i(t){u||T(()=>{u=W(n,dt,{}),u.start()})},o:t,d(t){t&&h(n)}}}function ft(t){let e,n,o,i,l,r,c,a,u,f,d=t[1],y=[];for(let e=0;e<d.length;e+=1)y[e]=rt(st(t,d,e));let $=t[0]>-1&&ct(t);function k(t,e){return t[0]>-1?ut:at}let b=k(t),w=b(t);return{c(){e=g("link"),n=g("script"),i=v(),l=g("main"),r=g("div"),c=g("div");for(let t=0;t<y.length;t+=1)y[t].c();a=v(),$&&$.c(),u=v(),w.c(),_(e,"rel","stylesheet"),_(e,"href","reset.css"),n.src!==(o="https://kit.fontawesome.com/a229c5b13d.js")&&_(n,"src","https://kit.fontawesome.com/a229c5b13d.js"),_(n,"crossorigin","anonymous"),_(c,"class","header-links svelte-1fyh6ju"),_(r,"class","top svelte-1fyh6ju"),_(l,"class","svelte-1fyh6ju")},m(t,o){p(document.head,e),p(document.head,n),m(t,i,o),m(t,l,o),p(l,r),p(r,c);for(let t=0;t<y.length;t+=1)y[t].m(c,null);p(r,a),$&&$.m(r,null),p(l,u),w.m(l,null),f=!0},p(t,[e]){if(7&e){let n;for(d=t[1],n=0;n<d.length;n+=1){const o=st(t,d,n);y[n]?y[n].p(o,e):(y[n]=rt(o),y[n].c(),y[n].m(c,null))}for(;n<y.length;n+=1)y[n].d(1);y.length=d.length}t[0]>-1?$?($.p(t,e),1&e&&F($,1)):($=ct(t),$.c(),F($,1),$.m(r,null)):$&&(G={r:0,c:[],p:G},H($,1,1,()=>{$=null}),G.r||s(G.c),G=G.p),b===(b=k(t))&&w?w.p(t,e):(w.d(1),w=b(t),w&&(w.c(),F(w,1),w.m(l,null)))},i(t){f||(F($),F(w),f=!0)},o(t){H($),f=!1},d(t){h(e),h(n),t&&h(i),t&&h(l),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(y,t),$&&$.d(),w.d()}}}function dt(t,{delay:e=400,duration:n=400}){const o=+getComputedStyle(t).opacity;return{delay:e,duration:n,css:t=>"opacity: "+t*o}}function pt(t,e,n){let o=-1;function s(t,e){t.preventDefault(),n(0,o=o===e?-1:e)}console.log(o);return[o,["Gilbert Bui","Marquis Bentley","Julie Bock","John Lam","Chris Oney"],s,(t,e)=>s(e,t),(t,e)=>s(e,t)]}return new class extends X{constructor(t){super(),V(this,t,pt,ft,l,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
