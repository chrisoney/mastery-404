var app=function(){"use strict";function t(){}const e=t=>t;function n(t){return t()}function o(){return Object.create(null)}function i(t){t.forEach(n)}function s(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}const r="undefined"!=typeof window;let a=r?()=>window.performance.now():()=>Date.now(),c=r?t=>requestAnimationFrame(t):t;const u=new Set;function f(t){u.forEach(e=>{e.c(t)||(u.delete(e),e.f())}),0!==u.size&&c(f)}function d(t){let e;return 0===u.size&&c(f),{promise:new Promise(n=>{u.add(e={c:t,f:n})}),abort(){u.delete(e)}}}function m(t,e){t.appendChild(e)}function p(t,e,n){t.insertBefore(e,n||null)}function h(t){t.parentNode.removeChild(t)}function g(t){return document.createElement(t)}function y(t){return document.createTextNode(t)}function v(){return y(" ")}function b(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function w(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}const k=new Set;let _,x=0;function z(t,e,n,o,i,s,l,r=0){const a=16.666/o;let c="{\n";for(let t=0;t<=1;t+=a){const o=e+(n-e)*s(t);c+=100*t+`%{${l(o,1-o)}}\n`}const u=c+`100% {${l(n,1-n)}}\n}`,f=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${r}`,d=t.ownerDocument;k.add(d);const m=d.__svelte_stylesheet||(d.__svelte_stylesheet=d.head.appendChild(g("style")).sheet),p=d.__svelte_rules||(d.__svelte_rules={});p[f]||(p[f]=!0,m.insertRule(`@keyframes ${f} ${u}`,m.cssRules.length));const h=t.style.animation||"";return t.style.animation=`${h?h+", ":""}${f} ${o}ms linear ${i}ms 1 both`,x+=1,f}function j(t,e){const n=(t.style.animation||"").split(", "),o=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),i=n.length-o.length;i&&(t.style.animation=o.join(", "),x-=i,x||c(()=>{x||(k.forEach(t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}}),k.clear())}))}function C(t){_=t}const E=[],I=[],S=[],R=[],q=Promise.resolve();let L=!1;function O(t){S.push(t)}let B=!1;const A=new Set;function J(){if(!B){B=!0;do{for(let t=0;t<E.length;t+=1){const e=E[t];C(e),M(e.$$)}for(C(null),E.length=0;I.length;)I.pop()();for(let t=0;t<S.length;t+=1){const e=S[t];A.has(e)||(A.add(e),e())}S.length=0}while(E.length);for(;R.length;)R.pop()();L=!1,B=!1,A.clear()}}function M(t){if(null!==t.fragment){t.update(),i(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(O)}}let N;function T(){return N||(N=Promise.resolve(),N.then(()=>{N=null})),N}function W(t,e,n){t.dispatchEvent(function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(`${e?"intro":"outro"}${n}`))}const D=new Set;let F;function P(t,e){t&&t.i&&(D.delete(t),t.i(e))}function G(t,e,n,o){if(t&&t.o){if(D.has(t))return;D.add(t),F.c.push(()=>{D.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}const H={duration:0};function Y(n,o,i){let l,r,c=o(n,i),u=!1,f=0;function m(){l&&j(n,l)}function p(){const{delay:o=0,duration:i=300,easing:s=e,tick:p=t,css:h}=c||H;h&&(l=z(n,0,1,i,o,s,h,f++)),p(0,1);const g=a()+o,y=g+i;r&&r.abort(),u=!0,O(()=>W(n,!0,"start")),r=d(t=>{if(u){if(t>=y)return p(1,0),W(n,!0,"end"),m(),u=!1;if(t>=g){const e=s((t-g)/i);p(e,1-e)}}return u})}let h=!1;return{start(){h||(j(n),s(c)?(c=c(),T().then(p)):p())},invalidate(){h=!1},end(){u&&(m(),u=!1)}}}function K(t,e,o){const{fragment:l,on_mount:r,on_destroy:a,after_update:c}=t.$$;l&&l.m(e,o),O(()=>{const e=r.map(n).filter(s);a?a.push(...e):i(e),t.$$.on_mount=[]}),c.forEach(O)}function Q(t,e){const n=t.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function U(t,e){-1===t.$$.dirty[0]&&(E.push(t),L||(L=!0,q.then(J)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function V(e,n,s,l,r,a,c=[-1]){const u=_;C(e);const f=n.props||{},d=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:r,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:o(),dirty:c,skip_bound:!1};let m=!1;if(d.ctx=s?s(e,f,(t,n,...o)=>{const i=o.length?o[0]:n;return d.ctx&&r(d.ctx[t],d.ctx[t]=i)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](i),m&&U(e,t)),n}):[],d.update(),m=!0,i(d.before_update),d.fragment=!!l&&l(d.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);d.fragment&&d.fragment.l(t),t.forEach(h)}else d.fragment&&d.fragment.c();n.intro&&P(e.$$.fragment),K(e,n.target,n.anchor),J()}C(u)}class X{$destroy(){Q(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Z={"Gilbert Bui":{description:"",portfolio:"",linkedin:"",angellist:"",email:""},"Marquis Bentley":{description:"I am a software engineer with expertise in JavaScript, React, Redux and Ruby on Rails. I love learning new technology and challenging myself to think both logically and creatively.  </br> When I'm not programming I am likely playing basketball, reading a book or exploring my creativity through photography, music or writing!",portfolio:"https://www.marquisbentley.com/",github:"https://github.com/codedbyq",linkedin:"https://www.linkedin.com/in/marquisbentley/",angellist:"https://angel.co/u/marquisbentley",email:"mailto:marquisbentley@gmail.com"},"Julie Bock":{description:"",portfolio:"",linkedin:"",angellist:"",email:""},"John Lam":{description:"I'm an SF based Full-Stack Software Engineer with a passion for user-focused app development. I'm currently enjoying JavaScript and React, but have an affinity for all languages. I'm a problem solver! You can catch me searching for solutions with a coffee in hand. When I'm not programming (rarely), I'm running in the great outdoors while listening to a podcast, or doing yoga while listening to a podcast, or walking my dog while... you get the idea! I have a deep curiosity for learning and exploring new things. Reach out and lets grab some coffee!",portfolio:"https://jlamb916.github.io/",github:"https://github.com/jlamb916",linkedin:"https://www.linkedin.com/in/johnlam916/",angellist:"https://angel.co/u/john-lam-17",email:"mailto:johnlamll916@gmail.com"},"Chris Oney":{description:"Software development is something I'm very passionate about. Combining my programming skills and creativity is extremely fulfilling. When I'm not coding the day away I enjoy tabletop games, reading, and learning new skills of all types.",portfolio:"http://www.chrisoney.com",github:"https://github.com/chrisoney",linkedin:"https://www.linkedin.com/in/christopher-oney-317b84132/",angellist:"https://angel.co/u/christopher-oney",email:"mailto:christopher.oney@yahoo.com"}};function tt(t){const e=t-1;return e*e*e+1}function et(t,{delay:e=0,duration:n=400,easing:o=tt,x:i=0,y:s=0,opacity:l=0}){const r=getComputedStyle(t),a=+r.opacity,c="none"===r.transform?"":r.transform,u=a*(1-l);return{delay:e,duration:n,easing:o,css:(t,e)=>`\n\t\t\ttransform: ${c} translate(${(1-t)*i}px, ${(1-t)*s}px);\n\t\t\topacity: ${a-u*e}`}}function nt(n){let o,l,r,c,u,f,y,b,$,k,_,x,C,E,I,S,R,q,L,B,A,J,M,N,D,P,G,K,Q,U,V;return{c(){o=g("div"),l=g("a"),r=g("span"),u=v(),f=g("div"),y=v(),b=g("a"),$=g("span"),_=v(),x=g("div"),C=v(),E=g("a"),I=g("span"),R=v(),q=g("div"),L=v(),B=g("a"),A=g("span"),M=v(),N=g("div"),D=v(),P=g("a"),G=g("span"),w(r,"class","fas fa-smile link-icon svelte-152mwy2"),w(l,"href",c=Z[n[0]].portfolio),w(f,"class","border-line svelte-152mwy2"),w($,"class","fab fa-github link-icon svelte-152mwy2"),w(b,"href",k=Z[n[0]].github),w(x,"class","border-line svelte-152mwy2"),w(I,"class","fab fa-linkedin link-icon svelte-152mwy2"),w(E,"href",S=Z[n[0]].linkedin),w(q,"class","border-line svelte-152mwy2"),w(A,"class","fab fa-angellist link-icon svelte-152mwy2"),w(B,"href",J=Z[n[0]].angellist),w(N,"class","border-line svelte-152mwy2"),w(G,"class","fas fa-envelope last link-icon svelte-152mwy2"),w(P,"href",K=Z[n[0]].email),w(o,"class","linkbar-container svelte-152mwy2")},m(t,e){p(t,o,e),m(o,l),m(l,r),m(o,u),m(o,f),m(o,y),m(o,b),m(b,$),m(o,_),m(o,x),m(o,C),m(o,E),m(E,I),m(o,R),m(o,q),m(o,L),m(o,B),m(B,A),m(o,M),m(o,N),m(o,D),m(o,P),m(P,G),V=!0},p(t,[e]){(!V||1&e&&c!==(c=Z[t[0]].portfolio))&&w(l,"href",c),(!V||1&e&&k!==(k=Z[t[0]].github))&&w(b,"href",k),(!V||1&e&&S!==(S=Z[t[0]].linkedin))&&w(E,"href",S),(!V||1&e&&J!==(J=Z[t[0]].angellist))&&w(B,"href",J),(!V||1&e&&K!==(K=Z[t[0]].email))&&w(P,"href",K)},i(t){V||(O(()=>{U&&U.end(1),Q||(Q=Y(o,et,{x:-100,duration:400})),Q.start()}),V=!0)},o(n){Q&&Q.invalidate(),U=function(n,o,l){let r,c=o(n,l),u=!0;const f=F;function m(){const{delay:o=0,duration:s=300,easing:l=e,tick:m=t,css:p}=c||H;p&&(r=z(n,1,0,s,o,l,p));const h=a()+o,g=h+s;O(()=>W(n,!1,"start")),d(t=>{if(u){if(t>=g)return m(0,1),W(n,!1,"end"),--f.r||i(f.c),!1;if(t>=h){const e=l((t-h)/s);m(1-e,e)}}return u})}return f.r+=1,s(c)?T().then(()=>{c=c(),m()}):m(),{end(t){t&&c.tick&&c.tick(1,0),u&&(r&&j(n,r),u=!1)}}}(o,et,{x:100,duration:400}),V=!1},d(t){t&&h(o),t&&U&&U.end()}}}function ot(t,e,n){let{name:o}=e;return t.$$set=t=>{"name"in t&&n(0,o=t.name)},[o]}class it extends X{constructor(t){super(),V(this,t,ot,nt,l,{name:0})}}function st(t,e,n){const o=t.slice();return o[5]=e[n],o[7]=n,o}function lt(t){let e,n,o,i,s,l,r,a,c,u=t[5]+"";function f(...e){return t[4](t[7],...e)}return{c(){e=g("div"),n=g("span"),o=y(u),i=v(),s=g("img"),r=v(),w(s,"class","profile-pic svelte-1u0u2zf"),s.src!==(l="images/"+t[1][t[7]].toLowerCase().split(" ").join("-")+".png")&&w(s,"src",l),w(s,"alt",""),w(e,"class","prof-top svelte-1u0u2zf")},m(t,l){p(t,e,l),m(e,n),m(n,o),m(e,i),m(e,s),m(e,r),a||(c=b(e,"click",f),a=!0)},p(e,n){t=e},d(t){t&&h(e),a=!1,c()}}}function rt(t){let e,n,o,i,s,l,r,a,c,u=t[5]+"";function f(...e){return t[3](t[7],...e)}return{c(){e=g("div"),n=g("span"),o=y(u),i=v(),s=g("img"),r=v(),w(s,"class","profile-pic selected svelte-1u0u2zf"),s.src!==(l="images/close.png")&&w(s,"src","images/close.png"),w(s,"alt",""),w(e,"class","prof-top svelte-1u0u2zf")},m(t,l){p(t,e,l),m(e,n),m(n,o),m(e,i),m(e,s),m(e,r),a||(c=b(e,"click",f),a=!0)},p(e,n){t=e},d(t){t&&h(e),a=!1,c()}}}function at(t){let e;function n(t,e){return t[0]===t[7]?rt:lt}let o=n(t),i=o(t);return{c(){i.c(),e=y("")},m(t,n){i.m(t,n),p(t,e,n)},p(t,s){o===(o=n(t))&&i?i.p(t,s):(i.d(1),i=o(t),i&&(i.c(),i.m(e.parentNode,e)))},d(t){i.d(t),t&&h(e)}}}function ct(t){let e,n;return e=new it({props:{name:t[1][t[0]]}}),{c(){var t;(t=e.$$.fragment)&&t.c()},m(t,o){K(e,t,o),n=!0},p(t,n){const o={};1&n&&(o.name=t[1][t[0]]),e.$set(o)},i(t){n||(P(e.$$.fragment,t),n=!0)},o(t){G(e.$$.fragment,t),n=!1},d(t){Q(e,t)}}}function ut(e){let n,o;return{c(){n=g("div"),n.innerHTML='<img class="clock svelte-1u0u2zf" src="images/broken-clock.png" alt=""/> \n\t\t\t<p class="apology-title svelte-1u0u2zf">Oops, something&#39;s gone wrong</p> \n\t\t\t<p class="apology-body svelte-1u0u2zf">This site uses free dynos, so we may have hit the limit for the month on this project.\n\t\t\t\tWe apologize for the inconvenience, and hope you&#39;ll be able to see it soon!\n\t\t\t\tIn the meantime, why don&#39;t you take a look at some of the links up above?</p>',w(n,"class","bottom svelte-1u0u2zf")},m(t,e){p(t,n,e)},p:t,i(t){o||O(()=>{o=Y(n,mt,{}),o.start()})},o:t,d(t){t&&h(n)}}}function ft(e){let n,o,i,s,l,r,a,c,u,f,d=e[1][e[0]]+"",b=Z[e[1][e[0]]].description+"";return{c(){n=g("div"),o=g("img"),s=v(),l=g("p"),r=y(d),a=v(),c=g("p"),u=y(b),w(o,"class","profile-pic big svelte-1u0u2zf"),o.src!==(i="images/"+e[1][e[0]].toLowerCase().split(" ").join("-")+".png")&&w(o,"src",i),w(o,"alt",""),w(l,"class","apology-title svelte-1u0u2zf"),w(c,"class","apology-body svelte-1u0u2zf"),w(n,"class","bottom svelte-1u0u2zf")},m(t,e){p(t,n,e),m(n,o),m(n,s),m(n,l),m(l,r),m(n,a),m(n,c),m(c,u)},p(t,e){1&e&&o.src!==(i="images/"+t[1][t[0]].toLowerCase().split(" ").join("-")+".png")&&w(o,"src",i),1&e&&d!==(d=t[1][t[0]]+"")&&$(r,d),1&e&&b!==(b=Z[t[1][t[0]]].description+"")&&$(u,b)},i(t){f||O(()=>{f=Y(n,mt,{}),f.start()})},o:t,d(t){t&&h(n)}}}function dt(t){let e,n,o,s,l,r,a,c,u,f,d,y=t[1],b=[];for(let e=0;e<y.length;e+=1)b[e]=at(st(t,y,e));let $=t[0]>-1&&ct(t);function k(t,e){return t[0]>-1?ft:ut}let _=k(t),x=_(t);return{c(){e=g("link"),n=g("link"),o=g("script"),l=v(),r=g("main"),a=g("div"),c=g("div");for(let t=0;t<b.length;t+=1)b[t].c();u=v(),$&&$.c(),f=v(),x.c(),w(e,"rel","stylesheet"),w(e,"href","reset.css"),w(n,"href","https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap"),w(n,"rel","stylesheet"),o.src!==(s="https://kit.fontawesome.com/a229c5b13d.js")&&w(o,"src","https://kit.fontawesome.com/a229c5b13d.js"),w(o,"crossorigin","anonymous"),w(c,"class","header-links svelte-1u0u2zf"),w(a,"class","top svelte-1u0u2zf"),w(r,"class","svelte-1u0u2zf")},m(t,i){m(document.head,e),m(document.head,n),m(document.head,o),p(t,l,i),p(t,r,i),m(r,a),m(a,c);for(let t=0;t<b.length;t+=1)b[t].m(c,null);m(a,u),$&&$.m(a,null),m(r,f),x.m(r,null),d=!0},p(t,[e]){if(7&e){let n;for(y=t[1],n=0;n<y.length;n+=1){const o=st(t,y,n);b[n]?b[n].p(o,e):(b[n]=at(o),b[n].c(),b[n].m(c,null))}for(;n<b.length;n+=1)b[n].d(1);b.length=y.length}t[0]>-1?$?($.p(t,e),1&e&&P($,1)):($=ct(t),$.c(),P($,1),$.m(a,null)):$&&(F={r:0,c:[],p:F},G($,1,1,()=>{$=null}),F.r||i(F.c),F=F.p),_===(_=k(t))&&x?x.p(t,e):(x.d(1),x=_(t),x&&(x.c(),P(x,1),x.m(r,null)))},i(t){d||(P($),P(x),d=!0)},o(t){G($),d=!1},d(t){h(e),h(n),h(o),t&&h(l),t&&h(r),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(b,t),$&&$.d(),x.d()}}}function mt(t,{delay:e=400,duration:n=400}){const o=+getComputedStyle(t).opacity;return{delay:e,duration:n,css:t=>"opacity: "+t*o}}function pt(t,e,n){let o=-1;function i(t,e){t.preventDefault(),n(0,o=o===e?-1:e)}console.log(o);return[o,["Gilbert Bui","Marquis Bentley","Julie Bock","John Lam","Chris Oney"],i,(t,e)=>i(e,t),(t,e)=>i(e,t)]}return new class extends X{constructor(t){super(),V(this,t,pt,dt,l,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
