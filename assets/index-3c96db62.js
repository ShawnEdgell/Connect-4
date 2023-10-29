var ce=Object.defineProperty;var fe=(e,t,n)=>t in e?ce(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var U=(e,t,n)=>(fe(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();function P(){}function ne(e){return e()}function V(){return Object.create(null)}function D(e){e.forEach(ne)}function le(e){return typeof e=="function"}function se(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function ue(e){return Object.keys(e).length===0}function L(e,t){e.appendChild(t)}function v(e,t,n){e.insertBefore(t,n||null)}function g(e){e.parentNode&&e.parentNode.removeChild(e)}function re(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function $(e){return document.createElement(e)}function B(e){return document.createTextNode(e)}function x(){return B(" ")}function de(){return B("")}function oe(e,t,n,l){return e.addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)}function w(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ae(e){return Array.from(e.childNodes)}function he(e,t){t=""+t,e.data!==t&&(e.data=t)}let K;function R(e){K=e}const N=[],z=[];let S=[];const J=[],me=Promise.resolve();let Y=!1;function pe(){Y||(Y=!0,me.then(ie))}function H(e){S.push(e)}const W=new Set;let M=0;function ie(){if(M!==0)return;const e=K;do{try{for(;M<N.length;){const t=N[M];M++,R(t),_e(t.$$)}}catch(t){throw N.length=0,M=0,t}for(R(null),N.length=0,M=0;z.length;)z.pop()();for(let t=0;t<S.length;t+=1){const n=S[t];W.has(n)||(W.add(n),n())}S.length=0}while(N.length);for(;J.length;)J.pop()();Y=!1,W.clear(),R(e)}function _e(e){if(e.fragment!==null){e.update(),D(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(H)}}function ye(e){const t=[],n=[];S.forEach(l=>e.indexOf(l)===-1?t.push(l):n.push(l)),n.forEach(l=>l()),S=t}const ge=new Set;function be(e,t){e&&e.i&&(ge.delete(e),e.i(t))}function T(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function ve(e,t,n){const{fragment:l,after_update:o}=e.$$;l&&l.m(t,n),H(()=>{const r=e.$$.on_mount.map(ne).filter(le);e.$$.on_destroy?e.$$.on_destroy.push(...r):D(r),e.$$.on_mount=[]}),o.forEach(H)}function we(e,t){const n=e.$$;n.fragment!==null&&(ye(n.after_update),D(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function $e(e,t){e.$$.dirty[0]===-1&&(N.push(e),pe(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ke(e,t,n,l,o,r,c=null,i=[-1]){const h=K;R(e);const f=e.$$={fragment:null,ctx:[],props:r,update:P,not_equal:o,bound:V(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(h?h.$$.context:[])),callbacks:V(),dirty:i,skip_bound:!1,root:t.target||h.$$.root};c&&c(f.root);let y=!1;if(f.ctx=n?n(e,t.props||{},(b,C,...k)=>{const A=k.length?k[0]:C;return f.ctx&&o(f.ctx[b],f.ctx[b]=A)&&(!f.skip_bound&&f.bound[b]&&f.bound[b](A),y&&$e(e,b)),C}):[],f.update(),y=!0,D(f.before_update),f.fragment=l?l(f.ctx):!1,t.target){if(t.hydrate){const b=ae(t.target);f.fragment&&f.fragment.l(b),b.forEach(g)}else f.fragment&&f.fragment.c();t.intro&&be(e.$$.fragment),ve(e,t.target,t.anchor),ie()}R(h)}class Ae{constructor(){U(this,"$$");U(this,"$$set")}$destroy(){we(this,1),this.$destroy=P}$on(t,n){if(!le(n))return P;const l=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return l.push(n),()=>{const o=l.indexOf(n);o!==-1&&l.splice(o,1)}}$set(t){this.$$set&&!ue(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Ee="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Ee);function Q(e,t,n){const l=e.slice();return l[13]=t[n],l[15]=n,l}function X(e,t,n){const l=e.slice();return l[16]=t[n],l[18]=n,l}function Oe(e){let t;return{c(){t=$("span"),t.textContent=`${q}`},m(n,l){v(n,t,l)},p:P,d(n){n&&g(t)}}}function Ce(e){let t;return{c(){t=$("span"),t.textContent=`${O}`},m(n,l){v(n,t,l)},p:P,d(n){n&&g(t)}}}function Z(e){let t,n,l,o;function r(f,y){if(f[16][f[15]]===O)return Ce;if(f[16][f[15]]===q)return Oe}let c=r(e),i=c&&c(e);function h(){return e[6](e[15])}return{c(){t=$("button"),i&&i.c(),w(t,"class","connect4-cell"),t.disabled=n=e[16][e[15]]!==null||e[2]},m(f,y){v(f,t,y),i&&i.m(t,null),l||(o=oe(t,"click",h),l=!0)},p(f,y){e=f,c===(c=r(e))&&i?i.p(e,y):(i&&i.d(1),i=c&&c(e),i&&(i.c(),i.m(t,null))),y&5&&n!==(n=e[16][e[15]]!==null||e[2])&&(t.disabled=n)},d(f){f&&g(t),i&&i.d(),l=!1,o()}}}function ee(e){let t,n,l=T(e[0]),o=[];for(let r=0;r<l.length;r+=1)o[r]=Z(X(e,l,r));return{c(){t=$("div");for(let r=0;r<o.length;r+=1)o[r].c();n=x(),w(t,"class","connect4-row")},m(r,c){v(r,t,c);for(let i=0;i<o.length;i+=1)o[i]&&o[i].m(t,null);L(t,n)},p(r,c){if(c&21){l=T(r[0]);let i;for(i=0;i<l.length;i+=1){const h=X(r,l,i);o[i]?o[i].p(h,c):(o[i]=Z(h),o[i].c(),o[i].m(t,n))}for(;i<o.length;i+=1)o[i].d(1);o.length=l.length}},d(r){r&&g(t),re(o,r)}}}function te(e){let t;function n(r,c){return r[1]===O?Pe:Le}let l=n(e),o=l(e);return{c(){o.c(),t=de()},m(r,c){o.m(r,c),v(r,t,c)},p(r,c){l!==(l=n(r))&&(o.d(1),o=l(r),o&&(o.c(),o.m(t.parentNode,t)))},d(r){r&&g(t),o.d(r)}}}function Le(e){let t;return{c(){t=B("Player 2's turn (🔴)")},m(n,l){v(n,t,l)},d(n){n&&g(t)}}}function Pe(e){let t;return{c(){t=B("Player 1's turn (⚫️)")},m(n,l){v(n,t,l)},d(n){n&&g(t)}}}function Me(e){let t,n,l,o,r,c,i,h,f,y,b,C,k,A,I,u,d=T(Array(j)),m=[];for(let s=0;s<d.length;s+=1)m[s]=ee(Q(e,d,s));let p=!e[2]&&te(e);return{c(){t=$("div"),t.innerHTML="<h1>Connect Four</h1> <p>Connect 4 pieces in a row to win!</p>",n=x(),l=$("div"),o=$("div");for(let s=0;s<m.length;s+=1)m[s].c();r=x(),c=$("div"),p&&p.c(),i=x(),h=$("div"),f=$("div"),y=$("p"),b=B(e[3]),C=x(),k=$("button"),k.textContent="New Game",w(t,"class","header"),w(o,"class","connect4-board"),w(l,"class","board-container"),w(c,"class","player-label"),w(y,"class","game-over-message"),w(k,"class","new-game-button"),w(f,"class","modal-content"),w(h,"class","modal"),w(h,"style",A=e[2]?"display: flex;":"display: none;")},m(s,_){v(s,t,_),v(s,n,_),v(s,l,_),L(l,o);for(let a=0;a<m.length;a+=1)m[a]&&m[a].m(o,null);v(s,r,_),v(s,c,_),p&&p.m(c,null),v(s,i,_),v(s,h,_),L(h,f),L(f,y),L(y,b),L(f,C),L(f,k),I||(u=oe(k,"click",e[5]),I=!0)},p(s,[_]){if(_&21){d=T(Array(j));let a;for(a=0;a<d.length;a+=1){const E=Q(s,d,a);m[a]?m[a].p(E,_):(m[a]=ee(E),m[a].c(),m[a].m(o,null))}for(;a<m.length;a+=1)m[a].d(1);m.length=d.length}s[2]?p&&(p.d(1),p=null):p?p.p(s,_):(p=te(s),p.c(),p.m(c,null)),_&8&&he(b,s[3]),_&4&&A!==(A=s[2]?"display: flex;":"display: none;")&&w(h,"style",A)},i:P,o:P,d(s){s&&(g(t),g(n),g(l),g(r),g(c),g(i),g(h)),re(m,s),p&&p.d(),I=!1,u()}}}const G=6,j=7,O="⚫️",q="🔴";function Ne(e,t,n){let l,o,r=Array.from({length:G},()=>Array(j).fill(null)),c=O;function i(u){return[[0,1],[1,0],[1,1],[1,-1]].some(([m,p])=>r.some((s,_)=>r[0].some((a,E)=>h(_,E,m,p,u))))}function h(u,d,m,p,s){return Array(4).fill(0).every((_,a)=>{const E=u+a*m,F=d+a*p;return E>=0&&E<G&&F>=0&&F<j&&r[E][F]===s})}function f(u){const d=y(u);d!==-1&&(n(0,r[d][u]=c,r),l||C())}function y(u){for(let d=G-1;d>=0;d--)if(r[d][u]===null)return d;return-1}function b(){n(0,r=Array.from({length:G},()=>Array(j).fill(null))),n(1,c=O)}function C(){n(1,c=c===O?q:O),c===q&&setTimeout(k,500)}function k(){const u=A();if(!u.length)return;const d=u[Math.floor(Math.random()*u.length)];f(d)}function A(){return r[0].map((u,d)=>u===null?d:null).filter(u=>u!==null)}const I=u=>f(u);return e.$$.update=()=>{e.$$.dirty&3&&n(2,l=i(c)||r.flat().every(u=>u)),e.$$.dirty&6&&n(3,o=l?i(c)?`Player ${c===O?1:2} wins!`:"It's a draw!":"")},[r,c,l,o,f,b,I]}class Se extends Ae{constructor(t){super(),ke(this,t,Ne,Me,se,{})}}new Se({target:document.getElementById("app")});window.addEventListener("DOMContentLoaded",e=>{if(window.matchMedia("(max-width: 767px)").matches){let t=document.querySelector("#viewport");t.content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"}});
