parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"IsMm":[function(require,module,exports) {
var define;
var global = arguments[3];
var t,e=arguments[3];!function(e,s){"object"==typeof exports&&"undefined"!=typeof module?s(exports):"function"==typeof t&&t.amd?t(["exports"],s):s((e=e||self).agos={})}(this,function(t){"use strict";class e{constructor(t,e){this.source=t,this.project=e}static join(t,s){return t instanceof e?new e(t.source,e=>s(t.project(e))):new e(t,s)}listen(t,e,s,n,i){this.source.listen(t,t=>e(this.project(t)),s,n,i)}}const s=t=>s=>e.join(s,t),n=t=>s(e=>(t(e),e));class i{constructor(t,e){this.source=t,this.predicate=e}static join(t,e){return t instanceof i?new i(t.source,s=>t.predicate(s)&&e(s)):new i(t,e)}listen(t,e,s,n,i){this.source.listen(t,t=>this.predicate(t)&&e(t),s,n,i)}}const c=t=>e=>i.join(e,t),o=Symbol("cancel"),r=()=>{},l=(...t)=>{let e=t[0];for(let s=1,n=t.length;s<n;s++)e=t[s](e);return e};class h{constructor(t){this.source=t,this.next=r}listen(t,e,s,n,i){this.next=(t=>e(t)),this.source.listen(t,e,s,n,i)}}class u{constructor(t){this.source=new h(t),this.run=r}listen(t,e,s,n,i){this.run=(()=>this.source.next([o])),this.source.listen(t,e,s,n,i)}}class a{constructor(t){this.source=t,this.run=r}listen(t,e,s,n,i){const c=new u(i);this.run=(()=>c.run()),this.source.listen(t,e,s,n,c)}}const f=0,p=1,d=2;class j{constructor(t){this.producer=t}listen(t,e,s,n,i){const o=new a(i);let r=f;this.producer(()=>{r===f&&(r=p,t())},t=>{if(r===p)try{e(t)}catch(n){s(n)}},t=>{r===p&&s(t)},t=>{r===p&&(o.run(),n(t),r=d)},c(()=>r===p)(o))}}const w=t=>new j(t),g=()=>w(r);class m{constructor(t,e){this.source=t,this.projects=e}static join(t,e){return t instanceof m?new m(t.source,[...t.projects,...e]):new m(t,e)}listen(t,e,s,i,c){const r=[];let l=!1,h=0;const a=t=>n=>{const c=(0,this.projects[t])(n),o=new u(g());r.push(o),c.listen(()=>h++,t>=this.projects.length-1?e:a(t+1),s,()=>--h<=0&&i(l),o)};this.source.listen(t,0===this.projects.length?e:a(0),s,()=>h<=0&&i(l),n(t=>{if(t[0]===o){l=!0;for(let t=0;t<r.length;t++){r[t].run()}}})(c))}}const k=(...t)=>e=>m.join(e,t),x=()=>{let t=0;const e=new Set,s=new Set,n=new Set,i=new Set;return[{open:()=>{if(0===t){t=1;for(const t of e.values())t();e.clear()}},next:e=>{if(1===t)for(const t of s.values())t(e)},fail:e=>{if(1===t)for(const t of n.values())t(e)},done:e=>{if(1===t){t=2;for(const t of i.values())t(e);s.clear(),n.clear(),i.clear()}}},w((c,l,h,u,a)=>{0===t?e.add(c):1===t&&c(),s.add(l),n.add(h),i.add(u),a.listen(r,t=>{t[0]===o&&(s.delete(l),n.delete(h),i.delete(u),u(!0))},r,r,g())})]};class y{constructor(t,e){this.source=t,this.pipes=e}listen(t,e,s,n,i){const[c,o]=x(),l=new u(i);let h=0,a=!1;for(let u=0;u<this.pipes.length;u++){this.pipes[u](o).listen(r,t=>e([t,u]),t=>s([t,u]),()=>{a&&++h>=this.pipes.length&&l.run()},g())}this.source.listen(()=>{a=!0,t(),c.open()},c.next,c.fail,t=>{a=!1,n(t),c.done(t)},l)}}const v=t=>e=>new y(e,t);class b{constructor(t,e,s){this.source=t,this.accumulator=e,this.seed=s}static join(t,e,s){return new b(t,e,s)}listen(t,e,s,n,i){let c=this.seed;this.source.listen(t,t=>{c=this.accumulator(c,t),e(c)},s,n,i)}}const S=(t,e)=>s=>b.join(s,t,e);class C{constructor(t,e=0,s=1/0){this.source=t,this.start=e,this.end=s}static join(t,e=0,s=1/0){return t instanceof C?new C(t.source,e<0?e:t.start+e,s<t.end?s:t.end):new C(t,e,s)}listen(t,e,s,n,i){if(this.start<0||this.end<0){const c=[];this.source.listen(t,t=>c.push(t),s,t=>{const s=c.slice(this.start,this.end);for(let n=0;n<s.length;n++)e(s[n]);n(t)},i)}else{let c=0;const o=new u(i);this.source.listen(t,t=>{++c>this.start&&e(t),c>=this.end&&o.run()},s,n,o)}}}const I=(t,e)=>s=>C.join(s,t,e),L=t=>w((e,s,n,i,c)=>{const l=[],h=[];c.listen(r,t=>{if(t[0]===o){for(let t=0;t<h.length;t++){h[t].run()}i(!0)}},r,r,g());for(let o=0;o<t.length;o++){const c=t[o],r=new u(g());h[o]=r,c.listen(e,t=>s([t,o]),t=>n([t,o]),()=>{l[o]=!0,l.length===t.length&&i(!1)},r)}});class O{constructor(t,e){this.source=t,this.projects=e}static join(t,e){return t instanceof O?new O(t.source,[...t.projects,...e]):new O(t,e)}listen(t,e,s,i,c){const r=[];let l=!1,h=!1,a=0;const f=t=>n=>{r[t]=r[t]||new u(g());const c=r[t];c.run(),(0,this.projects[t])(n).listen(()=>a++,t>=this.projects.length-1?e:f(t+1),s,()=>--a<=0&&h&&i(l),c)};this.source.listen(t,0===this.projects.length?e:f(0),s,t=>{h=!0,l=t,a<=0&&i(l)},n(t=>{if(t[0]===o)for(let e=0;e<r.length;e++){r[e].run()}})(c))}}class A{constructor(t,e){this.source=t,this.predicate=e}static join(t,e){return t instanceof A?new A(t.source,s=>{const[n,i]=t.predicate(s);return n?e(s):[n,i]}):new A(t,e)}listen(t,e,s,n,i){const c=new u(i);this.source.listen(t,t=>{const[s,n]=this.predicate(t);if(!s)return n&&e(t),c.run();e(t)},s,n,c)}}class M{constructor(t,e){this.source=t,this.tick=e}static join(t,e){return t instanceof M?new M(t.source,(s,n)=>t.tick(()=>e(s,n),n)):new M(t,e)}listen(t,e,s,n,i){let c=!1;this.source.listen(t,t=>{c||(c=!0,this.tick(()=>{e(t),c=!1},t))},s,n,i)}}t.CANCEL=o,t.CancelInterceptor=u,t.NextInterceptor=h,t.TalkbackCancelInterceptor=a,t.chain=k,t.collect=v,t.collectLatest=(t=>e=>c(e=>e.length>=t.length)(S((t,[e,s])=>{const n=[...t];return n[s]=e,n},[])(v(t)(e)))),t.concat=(t=>w((e,s,n,i,c)=>{const l=new u(g());c.listen(r,t=>{t[0]===o&&(l.run(),i(!0))},r,r,g());const h=c=>{t[c].listen(0===c?e:r,s,n,()=>{if(c>=t.length-1)return i(!1);h(c+1)},l)};h(0)})),t.create=w,t.emitter=x,t.empty=(()=>w((t,e,s,n,i)=>{i.listen(r,t=>t[0]===o&&n(!0),r,r,g()),t(),n(!1)})),t.filter=c,t.fromArray=(t=>w((e,s,n,i,c)=>{let l=!1;c.listen(r,t=>{t[0]===o&&(l=!0,i(!0))},r,r,g()),e();for(let o=0;o<t.length&&!l;o++)s([t[o],o]);i(!1)})),t.fromObject=(t=>w((e,s,n,i,c)=>{let l=!1;c.listen(r,t=>{t[0]===o&&(l=!0,i(!0))},r,r,g()),e();const h=Object.keys(t);for(let o=0;o<h.length&&!l;o++){const e=h[o];s([t[e],e])}i(!1)})),t.fromPromise=(t=>w((e,s,n,i,c)=>{e(),t.then(t=>s(t)).catch(t=>n(t)).finally(()=>i(!1)),c.listen(r,t=>t[0]===o&&i(!0),r,r,g())})),t.join=(()=>k(t=>t)),t.last=(()=>I(-1)),t.listen=((t=r,e=r,s=r,n=r,i=g())=>c=>c.listen(t,e,s,n,i)),t.map=s,t.merge=L,t.mergeLatest=(t=>l(L(t),S((t,[e,s])=>(t[s]=e,t),[]),c(e=>e.length>=t.length))),t.multicast=(t=>{let e=!1;const[s,n]=x();return w((i,c,o,r,l)=>{n.listen(i,c,o,r,l),e||(e=!0,t.listen(s.open,s.next,s.fail,s.done,g()))})}),t.never=g,t.of=(t=>w((e,s,n,i,c)=>{c.listen(r,t=>t[0]===o&&i(!0),r,r,g()),e(),s(t),i(!1)})),t.pipe=l,t.reject=(t=>w((e,s,n,i,c)=>{c.listen(r,t=>t[0]===o&&i(!0),r,r,g()),e(),n(t),i(!1)})),t.scan=S,t.skip=(t=>I(t)),t.skipWhile=(t=>c(e=>!t(e))),t.slice=I,t.switchMap=(t=>e=>O.join(e,[t])),t.take=(t=>I(0,t)),t.takeWhile=((t,e=!1)=>s=>A.join(s,s=>[t(s),e])),t.tap=n,t.throttle=(t=>e=>M.join(e,t)),Object.defineProperty(t,"__esModule",{value:!0})});
},{}],"L7b7":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("agos"),r=function(r){return(0,e.map)(function(e){return r(function(r,t){return(t-r)*e+r})})},t=r;exports.default=t;
},{"agos":"IsMm"}],"gycy":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.subscribe=exports.EMITTER_MODE=exports.CLOCK_MODE=exports.clipTime=exports.prop=exports.noop=void 0;var r=require("agos"),e=function(){};exports.noop=e;var o=function(r){return function(e){return e[r]}};exports.prop=o;var t=function(r,e,o){var t=[0,0];return function(s){var p=s.time,n=s.forward;if(p>=r&&p<=e){var i=p-r;o({time:i,forward:n,progress:i/(e-r)}),t[0]=0,t[1]=0}else p<r&&!t[0]&&!n?(o({time:r,forward:n,progress:0}),t[0]=1,t[1]=0):p>e&&!t[1]&&n&&(o({time:e,forward:n,progress:1}),t[0]=0,t[1]=1)}};exports.clipTime=t;var s=Symbol("CLOCK_MODE");exports.CLOCK_MODE=s;var p=Symbol("EMITTER_MODE");exports.EMITTER_MODE=p;var n=function(o,t){return"function"==typeof o?(0,r.listen)(e,o,e,e,t):(0,r.listen)(o.open,o.next,o.fail,o.done,t)};exports.subscribe=n;
},{"agos":"IsMm"}],"OwJ2":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function n(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var i=function(){function t(){e(this,t),this.queue=0,this.running=!1,this.tasks=new Map}return n(t,[{key:"add",value:function(e){return this.tasks.set(this.queue,e),this.running||(this.running=!0,this.step()),this.queue++}},{key:"delete",value:function(e){this.tasks.delete(e)}},{key:"step",value:function(){var e=this;window.requestAnimationFrame(function(t){e.tasks.forEach(function(e){return e(t)}),e.tasks.size?e.step():e.running=!1})}}]),t}(),s=new i;exports.default=s;
},{}],"sw3L":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.JUMP=exports.REVERSE=exports.PAUSE=exports.PLAY=void 0;var e=require("agos"),r=require("./utils"),t=o(require("./engine"));function o(e){return e&&e.__esModule?e:{default:e}}function n(e,r){return i(e)||a(e,r)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function a(e,r){var t=[],o=!0,n=!1,u=void 0;try{for(var a,i=e[Symbol.iterator]();!(o=(a=i.next()).done)&&(t.push(a.value),!r||t.length!==r);o=!0);}catch(l){n=!0,u=l}finally{try{o||null==i.return||i.return()}finally{if(n)throw u}}return t}function i(e){if(Array.isArray(e))return e}var l=Symbol("play");exports.PLAY=l;var f=Symbol("pause");exports.PAUSE=f;var s=Symbol("reverse");exports.REVERSE=s;var d=Symbol("jump");exports.JUMP=d;var p=(0,e.create)(function(o,u,a,i,p){var c=0,v=0,y=0,x=0,E=!0,m=function(){c||(v=0,c=t.default.add(function(e){v=v||e,u({time:x=E?e-v+y:y-(e-v),forward:E})}))},S=function(){c&&(t.default.delete(c),c=0,v=0,y=x)};o(),m(),p.listen(r.noop,function(r){var o,a=n(r,2),p=a[0],b=a[1];p===l?m():p===f?S():p===s?(v=0,y=x,E=!E,m()):p===d?(v=0,x=o=b,y=o,c||(c=t.default.add(function(e){v=v||e,u({time:x=E?e-v+y:y-(e-v),forward:E}),t.default.delete(c),c=0}))):p===e.CANCEL&&(S(),i(!0))},r.noop,r.noop,(0,e.never)())}),c=p;exports.default=c;
},{"agos":"IsMm","./utils":"gycy","./engine":"OwJ2"}],"9kJp":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=require("agos"),e=require("./utils"),r=a(require("./clock"));function a(t){return t&&t.__esModule?t:{default:t}}function i(t,e){return s(t)||o(t,e)||n()}function n(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function o(t,e){var r=[],a=!0,i=!1,n=void 0;try{for(var o,s=t[Symbol.iterator]();!(a=(o=s.next()).done)&&(r.push(o.value),!e||r.length!==e);a=!0);}catch(l){i=!0,n=l}finally{try{a||null==s.return||s.return()}finally{if(i)throw n}}return r}function s(t){if(Array.isArray(t))return t}var l=function(t,e){var r=t.mass,a=t.stiffness,i=t.damping,n=t.initialDisplacement,o=t.initialVelocity,s=t.precision,l=void 0===s?.01:s,c=e/1e3,p=i,u=r,f=a,h=n,M=o,v=0,d=0,m=p/Math.sqrt(4*f*u);if(m<1){var x=Math.sqrt(Math.abs(Math.pow(p/u,2)-4*f/u)),y=-(M+h*p/(2*u))/x,w=h;d=Math.exp(-p*c/(2*u))*(w*Math.cos(x*c)+y*Math.sin(x*c)),v=(w*Math.cos(x*c)+y*Math.sin(x*c))*(p/(2*u)*-1)*Math.exp(-1*p*c/(2*u))+(w*x*Math.sin(x*c)+y*x*Math.cos(x*c))*Math.exp(-1*p*c/(2*u))}else if(1===m){var b=-p/(2*u),g=M-h*b,q=h;d=q*Math.exp(b*c)+g*c*Math.exp(b*c),v=q*b*Math.exp(b*c)+g*(Math.exp(b*c)+c*Math.exp(b*c))}else if(m>1){var D=Math.sqrt(Math.abs(Math.pow(p/u,2)-4*f/u)),E=.5*(-p/u+D),C=.5*(-p/u-D),_=(M-E*h)/(C-E),A=h-_;d=A*Math.exp(E*c)+_*Math.exp(C*c),v=A*E*Math.exp(E*c)+_*C*Math.exp(C*c)}return(Math.abs(v)<=l||Math.abs(d)<=l)&&(d=0,v=0),{displacement:d,velocity:v}},c=function(t){var e=t.mass,r=t.stiffness,a=t.damping,i=t.initialDisplacement,n=t.precision,o=void 0===n?.5:n,s=a,c=e,p=r,u=i;if(s/Math.sqrt(4*p*c)<1)return-2*c*Math.log(o/u)/s*1e3;for(var f=0;;){var h=l(t,f+=100/6),M=h.displacement,v=h.velocity;if(0===M&&0===v)break}return f},p=function(a){return(0,t.create)(function(n,o,s,p,u){var f=new t.NextInterceptor((0,t.never)()),h=[0,0];n();var M=function(t){var e=t.time,r=t.forward,i=l(a,e),n=i.displacement,s=i.velocity;if(e>=0&&0!==n&&0!==s){h[0]=0,h[1]=0;var c=Math.abs((e<0?a.initialDisplacement:n)-a.initialDisplacement)/a.initialDisplacement;o({time:e,forward:r,displacement:n,velocity:s,progress:c})}else!r&&!h[0]&&e<0?(h[0]=1,h[1]=0,o({time:e,forward:r,displacement:n,velocity:s,progress:0})):r&&!h[1]&&0===n&&0===s&&(h[0]=0,h[1]=1,o({time:e,forward:r,displacement:n,velocity:s,progress:1}))};u.listen(e.noop,function(o){var l=i(o,2),u=l[0],h=l[1];if(u===e.CLOCK_MODE)return f.next([t.CANCEL]),void r.default.listen(n,M,s,p,f);if(u===e.EMITTER_MODE){f.next([t.CANCEL]);var v=i((0,t.emitter)(),2),d=v[0];return v[1].listen(n,M,s,p,f),void h(c(a),d)}f.next([u,h])},e.noop,e.noop,(0,t.never)())})},u=p;exports.default=u;
},{"agos":"IsMm","./utils":"gycy","./clock":"sw3L"}],"zvUc":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var r=require("agos"),e=require("./utils"),t=require("./clock");function n(r,e){return i(r)||o(r,e)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function o(r,e){var t=[],n=!0,u=!1,o=void 0;try{for(var i,a=r[Symbol.iterator]();!(n=(i=a.next()).done)&&(t.push(i.value),!e||t.length!==e);n=!0);}catch(l){u=!0,o=l}finally{try{n||null==a.return||a.return()}finally{if(u)throw o}}return t}function i(r){if(Array.isArray(r))return r}var a=function(u){return(0,r.create)(function(o,i,a,l,f){u.listen(o,i,a,l,(0,r.pipe)((0,r.merge)([(0,r.of)([e.CLOCK_MODE]),(0,r.of)([t.PLAY]),f]),(0,r.map)(function(r){return n(r,1)[0]})))})},l=a;exports.default=l;
},{"agos":"IsMm","./utils":"gycy","./clock":"sw3L"}],"AYww":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("agos"),t=require("./utils"),r=function(r,n,o){return(0,e.create)(function(i,u,s,a,d){i(),r.addEventListener(n,u,o),d.listen(t.noop,function(t){t[0]===e.CANCEL&&(r.removeEventListener(n,u),a(!0))},t.noop,t.noop,(0,e.never)())})},n=r;exports.default=n;
},{"agos":"IsMm","./utils":"gycy"}],"huRx":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("agos"),t=r(require("./engine"));function r(e){return e&&e.__esModule?e:{default:e}}var u=(0,e.throttle)(function(e){var r=t.default.add(function(){e(),t.default.delete(r)})}),d=u;exports.default=d;
},{"agos":"IsMm","./engine":"OwJ2"}],"wQg9":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("agos"),r=u(require("./fromEvent")),t=u(require("./throttleRAF"));function u(e){return e&&e.__esModule?e:{default:e}}var o=function(u,o){return(0,e.pipe)((0,r.default)(u,"mousemove",o),t.default)},a=o;exports.default=a;
},{"agos":"IsMm","./fromEvent":"AYww","./throttleRAF":"huRx"}],"q2Zo":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.createSpringSettings=void 0;var e=require("agos"),t=n(require("../galaw/fromEvent")),r=require("../galaw/utils");function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t){return o(e)||u(e,t)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function u(e,t){var r=[],n=!0,i=!1,a=void 0;try{for(var u,o=e[Symbol.iterator]();!(n=(u=o.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(l){i=!0,a=l}finally{try{n||null==o.return||o.return()}finally{if(i)throw a}}return r}function o(e){if(Array.isArray(e))return e}function l(e){return c(e)||s(e)||f()}function f(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function s(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function c(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}var g=function(n){var a=n.getElementsByClassName("spring-setting")[0].getElementsByClassName("field"),u=l(a).map(function(e){return e.getElementsByTagName("input")}),o={};return u.forEach(function(n,u){a[u].firstElementChild.firstElementChild.innerHTML=n[0].value,o[n[0].name]=n[0].value,(0,e.pipe)((0,t.default)(n[0],"change"),(0,e.map)(function(e){return[e.target.name,e.target.value]}),(0,r.subscribe)(function(e){var t=i(e,2),r=t[0],n=t[1];o[r]=n,a[u].firstElementChild.firstElementChild.innerHTML=n}))}),function(){return o}};exports.createSpringSettings=g;
},{"agos":"IsMm","../galaw/fromEvent":"AYww","../galaw/utils":"gycy"}],"MjjH":[function(require,module,exports) {
"use strict";var e=require("agos"),t=o(require("../galaw/tween")),n=o(require("../galaw/spring")),r=o(require("../galaw/autoplay")),a=o(require("../galaw/fromMouseMove")),i=require("../galaw/utils"),u=require("./utils");function o(e){return e&&e.__esModule?e:{default:e}}function l(e,t){return f(e)||s(e,t)||c()}function c(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function s(e,t){var n=[],r=!0,a=!1,i=void 0;try{for(var u,o=e[Symbol.iterator]();!(r=(u=o.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(l){a=!0,i=l}finally{try{r||null==o.return||o.return()}finally{if(a)throw i}}return n}function f(e){if(Array.isArray(e))return e}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){y(e,t,n[t])})}return e}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g=document.getElementById("demo-2"),d=g.getElementsByClassName("playground")[0],m=d.getElementsByClassName("big-square")[0],v=(0,u.createSpringSettings)(g),b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100;return(0,e.pipe)((0,n.default)(p({mass:50,stiffness:3e3,damping:350,initialDisplacement:t,initialVelocity:0},v())),(0,e.map)(function(e){return Math.abs(e.displacement-t)/t}))},w={x:d.clientWidth/2,y:d.clientHeight/2},h=d.getBoundingClientRect(),x=h.top,O=h.left,q={x:0,y:0};(0,e.pipe)((0,a.default)(d),(0,e.map)(function(e){return{x:e.clientX-O-w.x,y:e.clientY-x-w.y}}),(0,e.switchMap)(function(n){var a=n.x,i=n.y,u=q.x,o=q.y;return(0,r.default)((0,e.pipe)(b(),(0,e.collectLatest)([(0,t.default)(function(e){return e(u,a)}),(0,t.default)(function(e){return e(o,i)})]),(0,e.tap)(function(e){var t=l(e,2),n=t[0],r=t[1];q.x=n,q.y=r})))}),(0,e.map)(function(e){var t=l(e,2),n=t[0],r=t[1];return[n/w.x,r/w.y]}),(0,e.tap)(console.log),(0,e.map)(function(e){var t=l(e,2),n=t[0],r=t[1];return{transform:"perspective(600px) translate(".concat(25*n,"px, ").concat(25*r,"px)  rotateX(").concat(-25*r,"deg) rotateY(").concat(25*n,"deg) scale(").concat(.5*Math.abs(n)+1,")")}}),(0,e.listen)(i.noop,function(e){return Object.assign(m.style,e)}));
},{"agos":"IsMm","../galaw/tween":"L7b7","../galaw/spring":"9kJp","../galaw/autoplay":"zvUc","../galaw/fromMouseMove":"wQg9","../galaw/utils":"gycy","./utils":"q2Zo"}]},{},["MjjH"], null)
//# sourceMappingURL=/galaw-demos/demo-2.31015627.js.map