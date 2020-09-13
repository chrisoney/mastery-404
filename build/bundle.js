var app=function(){"use strict";function t(){}const e=t=>t;function n(t){return t()}function o(){return Object.create(null)}function i(t){t.forEach(n)}function s(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}const r="undefined"!=typeof window;let a=r?()=>window.performance.now():()=>Date.now(),c=r?t=>requestAnimationFrame(t):t;const u=new Set;function f(t){u.forEach(e=>{e.c(t)||(u.delete(e),e.f())}),0!==u.size&&c(f)}function d(t){let e;return 0===u.size&&c(f),{promise:new Promise(n=>{u.add(e={c:t,f:n})}),abort(){u.delete(e)}}}function m(t,e){t.appendChild(e)}function p(t,e,n){t.insertBefore(e,n||null)}function h(t){t.parentNode.removeChild(t)}function g(t){return document.createElement(t)}function y(t){return document.createTextNode(t)}function b(){return y(" ")}function v(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function w(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const $=new Set;let k,_=0;function q(t,e,n,o,i,s,l,r=0){const a=16.666/o;let c="{\n";for(let t=0;t<=1;t+=a){const o=e+(n-e)*s(t);c+=100*t+`%{${l(o,1-o)}}\n`}const u=c+`100% {${l(n,1-n)}}\n}`,f=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${r}`,d=t.ownerDocument;$.add(d);const m=d.__svelte_stylesheet||(d.__svelte_stylesheet=d.head.appendChild(g("style")).sheet),p=d.__svelte_rules||(d.__svelte_rules={});p[f]||(p[f]=!0,m.insertRule(`@keyframes ${f} ${u}`,m.cssRules.length));const h=t.style.animation||"";return t.style.animation=`${h?h+", ":""}${f} ${o}ms linear ${i}ms 1 both`,_+=1,f}function x(t,e){const n=(t.style.animation||"").split(", "),o=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),i=n.length-o.length;i&&(t.style.animation=o.join(", "),_-=i,_||c(()=>{_||($.forEach(t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}}),$.clear())}))}function j(t){k=t}const C=[],E=[],I=[],S=[],R=Promise.resolve();let L=!1;function O(t){I.push(t)}let B=!1;const A=new Set;function J(){if(!B){B=!0;do{for(let t=0;t<C.length;t+=1){const e=C[t];j(e),M(e.$$)}for(j(null),C.length=0;E.length;)E.pop()();for(let t=0;t<I.length;t+=1){const e=I[t];A.has(e)||(A.add(e),e())}I.length=0}while(C.length);for(;S.length;)S.pop()();L=!1,B=!1,A.clear()}}function M(t){if(null!==t.fragment){t.update(),i(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(O)}}let T;function N(){return T||(T=Promise.resolve(),T.then(()=>{T=null})),T}function W(t,e,n){t.dispatchEvent(function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(`${e?"intro":"outro"}${n}`))}const z=new Set;let D;function F(t,e){t&&t.i&&(z.delete(t),t.i(e))}function H(t,e,n,o){if(t&&t.o){if(z.has(t))return;z.add(t),D.c.push(()=>{z.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}const P={duration:0};function G(n,o,i){let l,r,c=o(n,i),u=!1,f=0;function m(){l&&x(n,l)}function p(){const{delay:o=0,duration:i=300,easing:s=e,tick:p=t,css:h}=c||P;h&&(l=q(n,0,1,i,o,s,h,f++)),p(0,1);const g=a()+o,y=g+i;r&&r.abort(),u=!0,O(()=>W(n,!0,"start")),r=d(t=>{if(u){if(t>=y)return p(1,0),W(n,!0,"end"),m(),u=!1;if(t>=g){const e=s((t-g)/i);p(e,1-e)}}return u})}let h=!1;return{start(){h||(x(n),s(c)?(c=c(),N().then(p)):p())},invalidate(){h=!1},end(){u&&(m(),u=!1)}}}function Y(t,e,o){const{fragment:l,on_mount:r,on_destroy:a,after_update:c}=t.$$;l&&l.m(e,o),O(()=>{const e=r.map(n).filter(s);a?a.push(...e):i(e),t.$$.on_mount=[]}),c.forEach(O)}function K(t,e){const n=t.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Q(t,e){-1===t.$$.dirty[0]&&(C.push(t),L||(L=!0,R.then(J)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function U(e,n,s,l,r,a,c=[-1]){const u=k;j(e);const f=n.props||{},d=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:r,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:o(),dirty:c,skip_bound:!1};let m=!1;if(d.ctx=s?s(e,f,(t,n,...o)=>{const i=o.length?o[0]:n;return d.ctx&&r(d.ctx[t],d.ctx[t]=i)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](i),m&&Q(e,t)),n}):[],d.update(),m=!0,i(d.before_update),d.fragment=!!l&&l(d.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);d.fragment&&d.fragment.l(t),t.forEach(h)}else d.fragment&&d.fragment.c();n.intro&&F(e.$$.fragment),Y(e,n.target,n.anchor),J()}j(u)}class V{$destroy(){K(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const X={"Gilbert Bui":{description:"",portfolio:"",linkedin:"",angellist:"",email:""},"Marquis Bentley":{description:"I am a software engineer with expertise in JavaScript, React, Redux and Ruby on Rails. I love learning new technology and challenging myself to think both logically and creatively.  <br /> When I'm not programming I am likely playing basketball, reading a book or exploring my creativity through photography, music or writing!",portfolio:"https://www.marquisbentley.com/",github:"https://github.com/codedbyq",linkedin:"https://www.linkedin.com/in/marquisbentley/",angellist:"https://angel.co/u/marquisbentley",email:"mailto:marquisbentley@gmail.com"},"Julie Bock":{description:"",portfolio:"",linkedin:"",angellist:"",email:""},"John Lam":{description:"I'm an SF based Full-Stack Software Engineer with a passion for user-focused app development. I'm currently enjoying JavaScript and React, but have an affinity for all languages. I'm a problem solver! You can catch me searching for solutions with a coffee in hand. When I'm not programming (rarely), I'm running in the great outdoors while listening to a podcast, or doing yoga while listening to a podcast, or walking my dog while... you get the idea! I have a deep curiosity for learning and exploring new things. Reach out and lets grab some coffee!",portfolio:"https://jlamb916.github.io/",github:"https://github.com/jlamb916",linkedin:"https://www.linkedin.com/in/johnlam916/",angellist:"https://angel.co/u/john-lam-17",email:"mailto:johnlamll916@gmail.com"},"Chris Oney":{description:"Software development is something I'm very passionate about. Combining my programming skills and creativity is extremely fulfilling. <br /> When I'm not coding the day away I enjoy tabletop games, reading, and learning new skills of all types.",portfolio:"http://www.chrisoney.com",github:"https://github.com/chrisoney",linkedin:"https://www.linkedin.com/in/christopher-oney-317b84132/",angellist:"https://angel.co/u/christopher-oney",email:"mailto:christopher.oney@yahoo.com"}};function Z(t){const e=t-1;return e*e*e+1}function tt(t,{delay:e=0,duration:n=400,easing:o=Z,x:i=0,y:s=0,opacity:l=0}){const r=getComputedStyle(t),a=+r.opacity,c="none"===r.transform?"":r.transform,u=a*(1-l);return{delay:e,duration:n,easing:o,css:(t,e)=>`\n\t\t\ttransform: ${c} translate(${(1-t)*i}px, ${(1-t)*s}px);\n\t\t\topacity: ${a-u*e}`}}function et(n){let o,l,r,c,u,f,y,v,$,k,_,j,C,E,I,S,R,L,B,A,J,M,T,z,F,H,Y,K,Q,U,V;return{c(){o=g("div"),l=g("a"),r=g("span"),u=b(),f=g("div"),y=b(),v=g("a"),$=g("span"),_=b(),j=g("div"),C=b(),E=g("a"),I=g("span"),R=b(),L=g("div"),B=b(),A=g("a"),J=g("span"),T=b(),z=g("div"),F=b(),H=g("a"),Y=g("span"),w(r,"class","fas fa-smile link-icon svelte-152mwy2"),w(l,"href",c=X[n[0]].portfolio),w(f,"class","border-line svelte-152mwy2"),w($,"class","fab fa-github link-icon svelte-152mwy2"),w(v,"href",k=X[n[0]].github),w(j,"class","border-line svelte-152mwy2"),w(I,"class","fab fa-linkedin link-icon svelte-152mwy2"),w(E,"href",S=X[n[0]].linkedin),w(L,"class","border-line svelte-152mwy2"),w(J,"class","fab fa-angellist link-icon svelte-152mwy2"),w(A,"href",M=X[n[0]].angellist),w(z,"class","border-line svelte-152mwy2"),w(Y,"class","fas fa-envelope last link-icon svelte-152mwy2"),w(H,"href",K=X[n[0]].email),w(o,"class","linkbar-container svelte-152mwy2")},m(t,e){p(t,o,e),m(o,l),m(l,r),m(o,u),m(o,f),m(o,y),m(o,v),m(v,$),m(o,_),m(o,j),m(o,C),m(o,E),m(E,I),m(o,R),m(o,L),m(o,B),m(o,A),m(A,J),m(o,T),m(o,z),m(o,F),m(o,H),m(H,Y),V=!0},p(t,[e]){(!V||1&e&&c!==(c=X[t[0]].portfolio))&&w(l,"href",c),(!V||1&e&&k!==(k=X[t[0]].github))&&w(v,"href",k),(!V||1&e&&S!==(S=X[t[0]].linkedin))&&w(E,"href",S),(!V||1&e&&M!==(M=X[t[0]].angellist))&&w(A,"href",M),(!V||1&e&&K!==(K=X[t[0]].email))&&w(H,"href",K)},i(t){V||(O(()=>{U&&U.end(1),Q||(Q=G(o,tt,{x:-100,duration:400})),Q.start()}),V=!0)},o(n){Q&&Q.invalidate(),U=function(n,o,l){let r,c=o(n,l),u=!0;const f=D;function m(){const{delay:o=0,duration:s=300,easing:l=e,tick:m=t,css:p}=c||P;p&&(r=q(n,1,0,s,o,l,p));const h=a()+o,g=h+s;O(()=>W(n,!1,"start")),d(t=>{if(u){if(t>=g)return m(0,1),W(n,!1,"end"),--f.r||i(f.c),!1;if(t>=h){const e=l((t-h)/s);m(1-e,e)}}return u})}return f.r+=1,s(c)?N().then(()=>{c=c(),m()}):m(),{end(t){t&&c.tick&&c.tick(1,0),u&&(r&&x(n,r),u=!1)}}}(o,tt,{x:100,duration:400}),V=!1},d(t){t&&h(o),t&&U&&U.end()}}}function nt(t,e,n){let{name:o}=e;return t.$$set=t=>{"name"in t&&n(0,o=t.name)},[o]}class ot extends V{constructor(t){super(),U(this,t,nt,et,l,{name:0})}}function it(t,e,n){const o=t.slice();return o[5]=e[n],o[7]=n,o}function st(t){let e,n,o,i,s,l,r,a,c,u=t[5]+"";function f(...e){return t[4](t[7],...e)}return{c(){e=g("div"),n=g("span"),o=y(u),i=b(),s=g("img"),r=b(),w(s,"class","profile-pic svelte-1a8qftq"),s.src!==(l="images/"+t[1][t[7]].toLowerCase().split(" ").join("-")+".png")&&w(s,"src",l),w(s,"alt",""),w(e,"class","prof-top svelte-1a8qftq")},m(t,l){p(t,e,l),m(e,n),m(n,o),m(e,i),m(e,s),m(e,r),a||(c=v(e,"click",f),a=!0)},p(e,n){t=e},d(t){t&&h(e),a=!1,c()}}}function lt(t){let e,n,o,i,s,l,r,a,c,u=t[5]+"";function f(...e){return t[3](t[7],...e)}return{c(){e=g("div"),n=g("span"),o=y(u),i=b(),s=g("img"),r=b(),w(s,"class","profile-pic selected svelte-1a8qftq"),s.src!==(l="images/close.png")&&w(s,"src","images/close.png"),w(s,"alt",""),w(e,"class","prof-top svelte-1a8qftq")},m(t,l){p(t,e,l),m(e,n),m(n,o),m(e,i),m(e,s),m(e,r),a||(c=v(e,"click",f),a=!0)},p(e,n){t=e},d(t){t&&h(e),a=!1,c()}}}function rt(t){let e;function n(t,e){return t[0]===t[7]?lt:st}let o=n(t),i=o(t);return{c(){i.c(),e=y("")},m(t,n){i.m(t,n),p(t,e,n)},p(t,s){o===(o=n(t))&&i?i.p(t,s):(i.d(1),i=o(t),i&&(i.c(),i.m(e.parentNode,e)))},d(t){i.d(t),t&&h(e)}}}function at(t){let e,n;return e=new ot({props:{name:t[1][t[0]]}}),{c(){var t;(t=e.$$.fragment)&&t.c()},m(t,o){Y(e,t,o),n=!0},p(t,n){const o={};1&n&&(o.name=t[1][t[0]]),e.$set(o)},i(t){n||(F(e.$$.fragment,t),n=!0)},o(t){H(e.$$.fragment,t),n=!1},d(t){K(e,t)}}}function ct(e){let n,o;return{c(){n=g("div"),n.innerHTML='<img class="clock svelte-1a8qftq" src="images/broken-clock.png" alt=""/> \n\t\t\t<p class="apology-title svelte-1a8qftq">Oops, something&#39;s gone wrong</p> \n\t\t\t<p class="apology-body svelte-1a8qftq">This site uses free dynos, so we may have hit the limit for the month on this project.\n\t\t\t\tWe apologize for the inconvenience, and hope you&#39;ll be able to see it soon!\n\t\t\t\tIn the meantime, why don&#39;t you take a look at some of the links up above?</p>',w(n,"class","bottom svelte-1a8qftq")},m(t,e){p(t,n,e)},p:t,i(t){o||O(()=>{o=G(n,dt,{}),o.start()})},o:t,d(t){t&&h(n)}}}function ut(e){let n,o,i,s,l,r,a,c,u,f=e[1][e[0]]+"",d=X[e[1][e[0]]].description+"";return{c(){n=g("div"),o=g("img"),s=b(),l=g("p"),r=y(f),a=b(),c=g("p"),w(o,"class","profile-pic big svelte-1a8qftq"),o.src!==(i="images/"+e[1][e[0]].toLowerCase().split(" ").join("-")+".png")&&w(o,"src",i),w(o,"alt",""),w(l,"class","apology-title svelte-1a8qftq"),w(c,"class","apology-body svelte-1a8qftq"),w(n,"class","bottom svelte-1a8qftq")},m(t,e){p(t,n,e),m(n,o),m(n,s),m(n,l),m(l,r),m(n,a),m(n,c),c.innerHTML=d},p(t,e){1&e&&o.src!==(i="images/"+t[1][t[0]].toLowerCase().split(" ").join("-")+".png")&&w(o,"src",i),1&e&&f!==(f=t[1][t[0]]+"")&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(r,f),1&e&&d!==(d=X[t[1][t[0]]].description+"")&&(c.innerHTML=d)},i(t){u||O(()=>{u=G(n,dt,{}),u.start()})},o:t,d(t){t&&h(n)}}}function ft(t){let e,n,o,s,l,r,a,c,u,f,d,y=t[1],v=[];for(let e=0;e<y.length;e+=1)v[e]=rt(it(t,y,e));let $=t[0]>-1&&at(t);function k(t,e){return t[0]>-1?ut:ct}let _=k(t),q=_(t);return{c(){e=g("link"),n=g("link"),o=g("script"),l=b(),r=g("main"),a=g("div"),c=g("div");for(let t=0;t<v.length;t+=1)v[t].c();u=b(),$&&$.c(),f=b(),q.c(),w(e,"rel","stylesheet"),w(e,"href","reset.css"),w(n,"href","https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap"),w(n,"rel","stylesheet"),o.src!==(s="https://kit.fontawesome.com/a229c5b13d.js")&&w(o,"src","https://kit.fontawesome.com/a229c5b13d.js"),w(o,"crossorigin","anonymous"),w(c,"class","header-links svelte-1a8qftq"),w(a,"class","top svelte-1a8qftq"),w(r,"class","svelte-1a8qftq")},m(t,i){m(document.head,e),m(document.head,n),m(document.head,o),p(t,l,i),p(t,r,i),m(r,a),m(a,c);for(let t=0;t<v.length;t+=1)v[t].m(c,null);m(a,u),$&&$.m(a,null),m(r,f),q.m(r,null),d=!0},p(t,[e]){if(7&e){let n;for(y=t[1],n=0;n<y.length;n+=1){const o=it(t,y,n);v[n]?v[n].p(o,e):(v[n]=rt(o),v[n].c(),v[n].m(c,null))}for(;n<v.length;n+=1)v[n].d(1);v.length=y.length}t[0]>-1?$?($.p(t,e),1&e&&F($,1)):($=at(t),$.c(),F($,1),$.m(a,null)):$&&(D={r:0,c:[],p:D},H($,1,1,()=>{$=null}),D.r||i(D.c),D=D.p),_===(_=k(t))&&q?q.p(t,e):(q.d(1),q=_(t),q&&(q.c(),F(q,1),q.m(r,null)))},i(t){d||(F($),F(q),d=!0)},o(t){H($),d=!1},d(t){h(e),h(n),h(o),t&&h(l),t&&h(r),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(v,t),$&&$.d(),q.d()}}}function dt(t,{delay:e=400,duration:n=400}){const o=+getComputedStyle(t).opacity;return{delay:e,duration:n,css:t=>"opacity: "+t*o}}function mt(t,e,n){let o=-1;function i(t,e){t.preventDefault(),n(0,o=o===e?-1:e)}console.log(o);return[o,["Gilbert Bui","Marquis Bentley","Julie Bock","John Lam","Chris Oney"],i,(t,e)=>i(e,t),(t,e)=>i(e,t)]}return new class extends V{constructor(t){super(),U(this,t,mt,ft,l,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
