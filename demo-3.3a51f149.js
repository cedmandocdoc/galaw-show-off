parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"IsMm":[function(require,module,exports) {
var define;
var global = arguments[3];
var t,e=arguments[3];!function(e,s){"object"==typeof exports&&"undefined"!=typeof module?s(exports):"function"==typeof t&&t.amd?t(["exports"],s):s((e=e||self).agos={})}(this,function(t){"use strict";class e{constructor(t,e){this.source=t,this.project=e}static join(t,s){return t instanceof e?new e(t.source,e=>s(t.project(e))):new e(t,s)}listen(t,e,s,n,i){this.source.listen(t,t=>e(this.project(t)),s,n,i)}}const s=t=>s=>e.join(s,t),n=t=>s(e=>(t(e),e));class i{constructor(t,e){this.source=t,this.predicate=e}static join(t,e){return t instanceof i?new i(t.source,s=>t.predicate(s)&&e(s)):new i(t,e)}listen(t,e,s,n,i){this.source.listen(t,t=>this.predicate(t)&&e(t),s,n,i)}}const c=t=>e=>i.join(e,t),o=Symbol("cancel"),r=()=>{},l=(...t)=>{let e=t[0];for(let s=1,n=t.length;s<n;s++)e=t[s](e);return e};class h{constructor(t){this.source=t,this.next=r}listen(t,e,s,n,i){this.next=(t=>e(t)),this.source.listen(t,e,s,n,i)}}class u{constructor(t){this.source=new h(t),this.run=r}listen(t,e,s,n,i){this.run=(()=>this.source.next([o])),this.source.listen(t,e,s,n,i)}}class a{constructor(t){this.source=t,this.run=r}listen(t,e,s,n,i){const c=new u(i);this.run=(()=>c.run()),this.source.listen(t,e,s,n,c)}}const f=0,p=1,d=2;class j{constructor(t){this.producer=t}listen(t,e,s,n,i){const o=new a(i);let r=f;this.producer(()=>{r===f&&(r=p,t())},t=>{if(r===p)try{e(t)}catch(n){s(n)}},t=>{r===p&&s(t)},t=>{r===p&&(o.run(),n(t),r=d)},c(()=>r===p)(o))}}const w=t=>new j(t),g=()=>w(r);class m{constructor(t,e){this.source=t,this.projects=e}static join(t,e){return t instanceof m?new m(t.source,[...t.projects,...e]):new m(t,e)}listen(t,e,s,i,c){const r=[];let l=!1,h=0;const a=t=>n=>{const c=(0,this.projects[t])(n),o=new u(g());r.push(o),c.listen(()=>h++,t>=this.projects.length-1?e:a(t+1),s,()=>--h<=0&&i(l),o)};this.source.listen(t,0===this.projects.length?e:a(0),s,()=>h<=0&&i(l),n(t=>{if(t[0]===o){l=!0;for(let t=0;t<r.length;t++){r[t].run()}}})(c))}}const k=(...t)=>e=>m.join(e,t),x=()=>{let t=0;const e=new Set,s=new Set,n=new Set,i=new Set;return[{open:()=>{if(0===t){t=1;for(const t of e.values())t();e.clear()}},next:e=>{if(1===t)for(const t of s.values())t(e)},fail:e=>{if(1===t)for(const t of n.values())t(e)},done:e=>{if(1===t){t=2;for(const t of i.values())t(e);s.clear(),n.clear(),i.clear()}}},w((c,l,h,u,a)=>{0===t?e.add(c):1===t&&c(),s.add(l),n.add(h),i.add(u),a.listen(r,t=>{t[0]===o&&(s.delete(l),n.delete(h),i.delete(u),u(!0))},r,r,g())})]};class y{constructor(t,e){this.source=t,this.pipes=e}listen(t,e,s,n,i){const[c,o]=x(),l=new u(i);let h=0,a=!1;for(let u=0;u<this.pipes.length;u++){this.pipes[u](o).listen(r,t=>e([t,u]),t=>s([t,u]),()=>{a&&++h>=this.pipes.length&&l.run()},g())}this.source.listen(()=>{a=!0,t(),c.open()},c.next,c.fail,t=>{a=!1,n(t),c.done(t)},l)}}const v=t=>e=>new y(e,t);class b{constructor(t,e,s){this.source=t,this.accumulator=e,this.seed=s}static join(t,e,s){return new b(t,e,s)}listen(t,e,s,n,i){let c=this.seed;this.source.listen(t,t=>{c=this.accumulator(c,t),e(c)},s,n,i)}}const S=(t,e)=>s=>b.join(s,t,e);class C{constructor(t,e=0,s=1/0){this.source=t,this.start=e,this.end=s}static join(t,e=0,s=1/0){return t instanceof C?new C(t.source,e<0?e:t.start+e,s<t.end?s:t.end):new C(t,e,s)}listen(t,e,s,n,i){if(this.start<0||this.end<0){const c=[];this.source.listen(t,t=>c.push(t),s,t=>{const s=c.slice(this.start,this.end);for(let n=0;n<s.length;n++)e(s[n]);n(t)},i)}else{let c=0;const o=new u(i);this.source.listen(t,t=>{++c>this.start&&e(t),c>=this.end&&o.run()},s,n,o)}}}const I=(t,e)=>s=>C.join(s,t,e),L=t=>w((e,s,n,i,c)=>{const l=[],h=[];c.listen(r,t=>{if(t[0]===o){for(let t=0;t<h.length;t++){h[t].run()}i(!0)}},r,r,g());for(let o=0;o<t.length;o++){const c=t[o],r=new u(g());h[o]=r,c.listen(e,t=>s([t,o]),t=>n([t,o]),()=>{l[o]=!0,l.length===t.length&&i(!1)},r)}});class O{constructor(t,e){this.source=t,this.projects=e}static join(t,e){return t instanceof O?new O(t.source,[...t.projects,...e]):new O(t,e)}listen(t,e,s,i,c){const r=[];let l=!1,h=!1,a=0;const f=t=>n=>{r[t]=r[t]||new u(g());const c=r[t];c.run(),(0,this.projects[t])(n).listen(()=>a++,t>=this.projects.length-1?e:f(t+1),s,()=>--a<=0&&h&&i(l),c)};this.source.listen(t,0===this.projects.length?e:f(0),s,t=>{h=!0,l=t,a<=0&&i(l)},n(t=>{if(t[0]===o)for(let e=0;e<r.length;e++){r[e].run()}})(c))}}class A{constructor(t,e){this.source=t,this.predicate=e}static join(t,e){return t instanceof A?new A(t.source,s=>{const[n,i]=t.predicate(s);return n?e(s):[n,i]}):new A(t,e)}listen(t,e,s,n,i){const c=new u(i);this.source.listen(t,t=>{const[s,n]=this.predicate(t);if(!s)return n&&e(t),c.run();e(t)},s,n,c)}}class M{constructor(t,e){this.source=t,this.tick=e}static join(t,e){return t instanceof M?new M(t.source,(s,n)=>t.tick(()=>e(s,n),n)):new M(t,e)}listen(t,e,s,n,i){let c=!1;this.source.listen(t,t=>{c||(c=!0,this.tick(()=>{e(t),c=!1},t))},s,n,i)}}t.CANCEL=o,t.CancelInterceptor=u,t.NextInterceptor=h,t.TalkbackCancelInterceptor=a,t.chain=k,t.collect=v,t.collectLatest=(t=>e=>c(e=>e.length>=t.length)(S((t,[e,s])=>{const n=[...t];return n[s]=e,n},[])(v(t)(e)))),t.concat=(t=>w((e,s,n,i,c)=>{const l=new u(g());c.listen(r,t=>{t[0]===o&&(l.run(),i(!0))},r,r,g());const h=c=>{t[c].listen(0===c?e:r,s,n,()=>{if(c>=t.length-1)return i(!1);h(c+1)},l)};h(0)})),t.create=w,t.emitter=x,t.empty=(()=>w((t,e,s,n,i)=>{i.listen(r,t=>t[0]===o&&n(!0),r,r,g()),t(),n(!1)})),t.filter=c,t.fromArray=(t=>w((e,s,n,i,c)=>{let l=!1;c.listen(r,t=>{t[0]===o&&(l=!0,i(!0))},r,r,g()),e();for(let o=0;o<t.length&&!l;o++)s([t[o],o]);i(!1)})),t.fromObject=(t=>w((e,s,n,i,c)=>{let l=!1;c.listen(r,t=>{t[0]===o&&(l=!0,i(!0))},r,r,g()),e();const h=Object.keys(t);for(let o=0;o<h.length&&!l;o++){const e=h[o];s([t[e],e])}i(!1)})),t.fromPromise=(t=>w((e,s,n,i,c)=>{e(),t.then(t=>s(t)).catch(t=>n(t)).finally(()=>i(!1)),c.listen(r,t=>t[0]===o&&i(!0),r,r,g())})),t.join=(()=>k(t=>t)),t.last=(()=>I(-1)),t.listen=((t=r,e=r,s=r,n=r,i=g())=>c=>c.listen(t,e,s,n,i)),t.map=s,t.merge=L,t.mergeLatest=(t=>l(L(t),S((t,[e,s])=>(t[s]=e,t),[]),c(e=>e.length>=t.length))),t.multicast=(t=>{let e=!1;const[s,n]=x();return w((i,c,o,r,l)=>{n.listen(i,c,o,r,l),e||(e=!0,t.listen(s.open,s.next,s.fail,s.done,g()))})}),t.never=g,t.of=(t=>w((e,s,n,i,c)=>{c.listen(r,t=>t[0]===o&&i(!0),r,r,g()),e(),s(t),i(!1)})),t.pipe=l,t.reject=(t=>w((e,s,n,i,c)=>{c.listen(r,t=>t[0]===o&&i(!0),r,r,g()),e(),n(t),i(!1)})),t.scan=S,t.skip=(t=>I(t)),t.skipWhile=(t=>c(e=>!t(e))),t.slice=I,t.switchMap=(t=>e=>O.join(e,[t])),t.take=(t=>I(0,t)),t.takeWhile=((t,e=!1)=>s=>A.join(s,s=>[t(s),e])),t.tap=n,t.throttle=(t=>e=>M.join(e,t)),Object.defineProperty(t,"__esModule",{value:!0})});
},{}],"gycy":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.EMITTER_MODE=exports.CLOCK_MODE=exports.clipTime=exports.noop=void 0;var r=function(){};exports.noop=r;var e=function(r,e,o){var t=[0,0];return function(s){var p=s.time,i=s.forward;if(p>=r&&p<=e){var a=p-r;o({time:a,forward:i,progress:a/(e-r)}),t[0]=0,t[1]=0}else p<r&&!t[0]&&!i?(o({time:r,forward:i,progress:0}),t[0]=1,t[1]=0):p>e&&!t[1]&&i&&(o({time:e,forward:i,progress:1}),t[0]=0,t[1]=1)}};exports.clipTime=e;var o=Symbol("CLOCK_MODE");exports.CLOCK_MODE=o;var t=Symbol("EMITTER_MODE");exports.EMITTER_MODE=t;
},{}],"OwJ2":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function n(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var i=function(){function t(){e(this,t),this.queue=1,this.running=!1,this.tasks=new Map}return n(t,[{key:"add",value:function(e){return this.tasks.set(this.queue,e),this.running||(this.running=!0,this.step()),this.queue++}},{key:"delete",value:function(e){this.tasks.delete(e)}},{key:"step",value:function(){var e=this;window.requestAnimationFrame(function(t){e.tasks.forEach(function(e){return e(t)}),e.tasks.size?e.step():e.running=!1})}}]),t}(),s=new i;exports.default=s;
},{}],"sw3L":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.JUMP=exports.REVERSE=exports.PAUSE=exports.PLAY=void 0;var e=require("agos"),r=require("./utils"),t=o(require("./engine"));function o(e){return e&&e.__esModule?e:{default:e}}function n(e,r){return i(e)||a(e,r)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function a(e,r){var t=[],o=!0,n=!1,u=void 0;try{for(var a,i=e[Symbol.iterator]();!(o=(a=i.next()).done)&&(t.push(a.value),!r||t.length!==r);o=!0);}catch(l){n=!0,u=l}finally{try{o||null==i.return||i.return()}finally{if(n)throw u}}return t}function i(e){if(Array.isArray(e))return e}var l=Symbol("play");exports.PLAY=l;var f=Symbol("pause");exports.PAUSE=f;var s=Symbol("reverse");exports.REVERSE=s;var d=Symbol("jump");exports.JUMP=d;var p=(0,e.create)(function(o,u,a,i,p){var c=0,v=0,y=0,x=0,E=!0,m=function(){c||(v=0,c=t.default.add(function(e){v=v||e,u({time:x=E?e-v+y:y-(e-v),forward:E})}))},S=function(){c&&(t.default.delete(c),c=0,v=0,y=x)};o(),p.listen(r.noop,function(r){var o,a=n(r,2),p=a[0],b=a[1];p===l?m():p===f?S():p===s?(v=0,y=x,E=!E,m()):p===d?(v=0,x=o=b,y=o,c||(c=t.default.add(function(e){v=v||e,u({time:x=E?e-v+y:y-(e-v),forward:E}),t.default.delete(c),c=0}))):p===e.CANCEL&&(S(),i(!0))},r.noop,r.noop,(0,e.never)())}),c=p;exports.default=c;
},{"agos":"IsMm","./utils":"gycy","./engine":"OwJ2"}],"D/ta":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("agos"),r=require("./utils"),n=require("./clock");function t(e,r){return o(e)||u(e,r)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function u(e,r){var n=[],t=!0,i=!1,u=void 0;try{for(var o,a=e[Symbol.iterator]();!(t=(o=a.next()).done)&&(n.push(o.value),!r||n.length!==r);t=!0);}catch(p){i=!0,u=p}finally{try{t||null==a.return||a.return()}finally{if(i)throw u}}return n}function o(e){if(Array.isArray(e))return e}var a=function(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},u=i.play,o=void 0===u?(0,e.never)():u,a=i.pause,p=void 0===a?(0,e.never)():a,v=i.reverse,f=void 0===v?(0,e.never)():v,l=i.jump,c=void 0===l?(0,e.never)():l;return(0,e.pipe)((0,e.merge)([(0,e.of)([r.CLOCK_MODE]),(0,e.pipe)(o,(0,e.map)(function(){return[n.PLAY]})),(0,e.pipe)(p,(0,e.map)(function(){return[n.PAUSE]})),(0,e.pipe)(f,(0,e.map)(function(){return[n.REVERSE]})),(0,e.pipe)(c,(0,e.map)(function(e){return[n.JUMP,e]}))]),(0,e.map)(function(e){return t(e,1)[0]}))},p=a;exports.default=p;
},{"agos":"IsMm","./utils":"gycy","./clock":"sw3L"}],"huRx":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("agos"),t=r(require("./engine"));function r(e){return e&&e.__esModule?e:{default:e}}var u=(0,e.throttle)(function(e){var r=t.default.add(function(){e(),t.default.delete(r)})}),d=u;exports.default=d;
},{"agos":"IsMm","./engine":"OwJ2"}],"AYww":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("agos"),t=require("./utils"),r=function(r,n,o){return(0,e.create)(function(i,u,s,a,d){i(),r.addEventListener(n,u,o),d.listen(t.noop,function(t){t[0]===e.CANCEL&&(r.removeEventListener(n,u),a(!0))},t.noop,t.noop,(0,e.never)())})},n=r;exports.default=n;
},{"agos":"IsMm","./utils":"gycy"}],"wQg9":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("agos"),r=u(require("./fromEvent")),t=u(require("./throttleRAF"));function u(e){return e&&e.__esModule?e:{default:e}}var o=function(u,o){return(0,e.pipe)((0,r.default)(u,"mousemove",o),t.default)},a=o;exports.default=a;
},{"agos":"IsMm","./fromEvent":"AYww","./throttleRAF":"huRx"}],"hAHP":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("agos"),r=u(require("./fromEvent")),t=u(require("./throttleRAF"));function u(e){return e&&e.__esModule?e:{default:e}}var o=function(u){return(0,e.pipe)((0,r.default)(u,"mouseup"),t.default)},a=o;exports.default=a;
},{"agos":"IsMm","./fromEvent":"AYww","./throttleRAF":"huRx"}],"XLa7":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("agos"),r=require("./utils"),t=i(require("./throttleRAF")),n=i(require("./fromEvent")),u=i(require("./fromMouseMove")),o=i(require("./fromMouseUp"));function i(e){return e&&e.__esModule?e:{default:e}}function a(e,r){return c(e)||l(e,r)||f()}function f(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function l(e,r){var t=[],n=!0,u=!1,o=void 0;try{for(var i,a=e[Symbol.iterator]();!(n=(i=a.next()).done)&&(t.push(i.value),!r||t.length!==r);n=!0);}catch(f){u=!0,o=f}finally{try{n||null==a.return||a.return()}finally{if(u)throw o}}return t}function c(e){if(Array.isArray(e))return e}var d=function(i){return(0,e.create)(function(f,l,c,d,p){f(),function f(){(0,e.pipe)((0,n.default)(i,"mousedown"),t.default,(0,e.switchMap)(function(r){var t=r.x,n=r.y;return l(["hold"],{x:0,y:0}),(0,e.merge)([(0,e.pipe)((0,u.default)(document),(0,e.map)(function(e){return{x:e.clientX-t,y:e.clientY-n}}),(0,e.map)(function(e){return["drag",e]})),(0,e.pipe)((0,o.default)(document),(0,e.map)(function(e){return{x:e.clientX-t,y:e.clientY-n}}),(0,e.map)(function(e){return["release",e]}))])}),(0,e.takeWhile)(function(e){var r=a(e,1);return"drag"===a(r[0],1)[0]},!0),(0,e.map)(function(e){return e[0]}),(0,e.listen)(r.noop,l,c,function(){return f()},p))}()})},p=d;exports.default=p;
},{"agos":"IsMm","./utils":"gycy","./throttleRAF":"huRx","./fromEvent":"AYww","./fromMouseMove":"wQg9","./fromMouseUp":"hAHP"}],"zvUc":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var r=require("agos"),e=require("./utils"),t=require("./clock");function n(r,e){return i(r)||o(r,e)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function o(r,e){var t=[],n=!0,u=!1,o=void 0;try{for(var i,a=r[Symbol.iterator]();!(n=(i=a.next()).done)&&(t.push(i.value),!e||t.length!==e);n=!0);}catch(l){u=!0,o=l}finally{try{n||null==a.return||a.return()}finally{if(u)throw o}}return t}function i(r){if(Array.isArray(r))return r}var a=function(u){return(0,r.create)(function(o,i,a,l,f){u.listen(o,i,a,l,(0,r.pipe)((0,r.merge)([(0,r.of)([e.CLOCK_MODE]),(0,r.of)([t.PLAY]),f]),(0,r.map)(function(r){return n(r,1)[0]})))})},l=a;exports.default=l;
},{"agos":"IsMm","./utils":"gycy","./clock":"sw3L"}],"mZdF":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("agos"),r=require("./utils"),t=n(require("./clock"));function n(e){return e&&e.__esModule?e:{default:e}}function o(e,r){return a(e)||u(e,r)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function u(e,r){var t=[],n=!0,o=!1,i=void 0;try{for(var u,a=e[Symbol.iterator]();!(n=(u=a.next()).done)&&(t.push(u.value),!r||t.length!==r);n=!0);}catch(l){o=!0,i=l}finally{try{n||null==a.return||a.return()}finally{if(o)throw i}}return t}function a(e){if(Array.isArray(e))return e}var l=function(n){return(0,e.create)(function(i,u,a,l,f){var c=new e.NextInterceptor((0,e.never)());i(),f.listen(r.noop,function(f){var s=o(f,2),v=s[0],d=s[1];if(v===r.CLOCK_MODE)return c.next([e.CANCEL]),void t.default.listen(i,(0,r.clipTime)(0,n,u),a,l,c);if(v===r.EMITTER_MODE){c.next([e.CANCEL]);var p=o((0,e.emitter)(),2),y=p[0];return p[1].listen(i,u,a,l,c),void d(n,y)}c.next([v,d])},r.noop,r.noop,(0,e.never)())})},f=l;exports.default=f;
},{"agos":"IsMm","./utils":"gycy","./clock":"sw3L"}],"P4rz":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("agos"),r=require("./utils"),t=n(require("./clock"));function n(e){return e&&e.__esModule?e:{default:e}}function o(e,r){return a(e)||u(e,r)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function u(e,r){var t=[],n=!0,o=!1,i=void 0;try{for(var u,a=e[Symbol.iterator]();!(n=(u=a.next()).done)&&(t.push(u.value),!r||t.length!==r);n=!0);}catch(l){o=!0,i=l}finally{try{n||null==a.return||a.return()}finally{if(o)throw i}}return t}function a(e){if(Array.isArray(e))return e}var l=function(n,i){return(0,e.create)(function(u,a,l,f,c){var v=0,s=null,p=0,d=new e.NextInterceptor((0,e.never)());n.listen(r.noop,a,l,r.noop,d),d.next([r.EMITTER_MODE,function(e,r){v=e*i,p=e,s=r}]);var x=function(e){var r=e.time,t=e.forward,n=Math.trunc(r/p);if(!(n>=i)&&r>=0&&r<=v){var o=r-p*n;s.next({time:o,forward:t,progress:o/p,alternate:n%2==0?o/p:1-o/p})}},E=function(){return s.open()},y=new e.NextInterceptor((0,e.never)());u(),c.listen(r.noop,function(n){var i=o(n,2),u=i[0],a=i[1];if(u===r.CLOCK_MODE)return y.next([e.CANCEL]),void t.default.listen(E,(0,r.clipTime)(0,v,x),l,f,y);if(u===r.EMITTER_MODE){y.next([e.CANCEL]);var c=o((0,e.emitter)(),2),s=c[0];return c[1].listen(E,x,l,f,y),void a(v,s)}y.next([u,a])},r.noop,r.noop,(0,e.never)())})},f=l;exports.default=f;
},{"agos":"IsMm","./utils":"gycy","./clock":"sw3L"}],"9kJp":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=require("agos"),e=require("./utils"),r=a(require("./clock"));function a(t){return t&&t.__esModule?t:{default:t}}function i(t,e){return s(t)||o(t,e)||n()}function n(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function o(t,e){var r=[],a=!0,i=!1,n=void 0;try{for(var o,s=t[Symbol.iterator]();!(a=(o=s.next()).done)&&(r.push(o.value),!e||r.length!==e);a=!0);}catch(l){i=!0,n=l}finally{try{a||null==s.return||s.return()}finally{if(i)throw n}}return r}function s(t){if(Array.isArray(t))return t}var l=function(t,e){var r=t.mass,a=t.stiffness,i=t.damping,n=t.initialDisplacement,o=t.initialVelocity,s=t.precision,l=void 0===s?.01:s,c=e/1e3,p=i,u=r,f=a,h=n,M=o,v=0,d=0,m=p/Math.sqrt(4*f*u);if(m<1){var x=Math.sqrt(Math.abs(Math.pow(p/u,2)-4*f/u)),y=-(M+h*p/(2*u))/x,w=h;d=Math.exp(-p*c/(2*u))*(w*Math.cos(x*c)+y*Math.sin(x*c)),v=(w*Math.cos(x*c)+y*Math.sin(x*c))*(p/(2*u)*-1)*Math.exp(-1*p*c/(2*u))+(w*x*Math.sin(x*c)+y*x*Math.cos(x*c))*Math.exp(-1*p*c/(2*u))}else if(1===m){var b=-p/(2*u),g=M-h*b,q=h;d=q*Math.exp(b*c)+g*c*Math.exp(b*c),v=q*b*Math.exp(b*c)+g*(Math.exp(b*c)+c*Math.exp(b*c))}else if(m>1){var D=Math.sqrt(Math.abs(Math.pow(p/u,2)-4*f/u)),E=.5*(-p/u+D),C=.5*(-p/u-D),_=(M-E*h)/(C-E),A=h-_;d=A*Math.exp(E*c)+_*Math.exp(C*c),v=A*E*Math.exp(E*c)+_*C*Math.exp(C*c)}return(Math.abs(v)<=l||Math.abs(d)<=l)&&(d=0,v=0),{displacement:d,velocity:v}},c=function(t){var e=t.mass,r=t.stiffness,a=t.damping,i=t.initialDisplacement,n=t.precision,o=void 0===n?.5:n,s=a,c=e,p=r,u=i;if(s/Math.sqrt(4*p*c)<1)return-2*c*Math.log(o/u)/s*1e3;for(var f=0;;){var h=l(t,f+=100/6),M=h.displacement,v=h.velocity;if(0===M&&0===v)break}return f},p=function(a){return(0,t.create)(function(n,o,s,p,u){var f=new t.NextInterceptor((0,t.never)()),h=[0,0];n();var M=function(t){var e=t.time,r=t.forward,i=l(a,e),n=i.displacement,s=i.velocity;if(e>=0&&0!==n&&0!==s){h[0]=0,h[1]=0;var c=Math.abs((e<0?a.initialDisplacement:n)-a.initialDisplacement)/a.initialDisplacement;o({time:e,forward:r,displacement:n,velocity:s,progress:c})}else!r&&!h[0]&&e<0?(h[0]=1,h[1]=0,o({time:e,forward:r,displacement:n,velocity:s,progress:0})):r&&!h[1]&&0===n&&0===s&&(h[0]=0,h[1]=1,o({time:e,forward:r,displacement:n,velocity:s,progress:1}))};u.listen(e.noop,function(o){var l=i(o,2),u=l[0],h=l[1];if(u===e.CLOCK_MODE)return f.next([t.CANCEL]),void r.default.listen(n,M,s,p,f);if(u===e.EMITTER_MODE){f.next([t.CANCEL]);var v=i((0,t.emitter)(),2),d=v[0];return v[1].listen(n,M,s,p,f),void h(c(a),d)}f.next([u,h])},e.noop,e.noop,(0,t.never)())})},u=p;exports.default=u;
},{"agos":"IsMm","./utils":"gycy","./clock":"sw3L"}],"E6JY":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("agos"),t=require("./utils"),r=n(require("./clock"));function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){return a(e)||u(e,t)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function u(e,t){var r=[],n=!0,o=!1,i=void 0;try{for(var u,a=e[Symbol.iterator]();!(n=(u=a.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(c){o=!0,i=c}finally{try{n||null==a.return||a.return()}finally{if(o)throw i}}return r}function a(e){if(Array.isArray(e))return e}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){f(e,t,r[t])})}return e}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l=function(n,i){var u=i.count,a=i.delay;return(0,e.create)(function(i,f,l,v,p){var s=[],d=0;!function r(o){if(!(o>=u)){var i=new e.NextInterceptor((0,e.never)());n(o,u).listen(t.noop,function(e){return f([e,o])},l,t.noop,i),i.next([t.EMITTER_MODE,function(e,n){var i=a(o,u),f=i+e;d=f,s.push(c({},n,{next:(0,t.clipTime)(i,f,function(e){return n.next(e)})})),d=Math.max(d,e),r(o+1)}])}}(0);var y=function(e){for(var t=e.time,r=e.forward,n=0;n<s.length;n++){s[n].next({time:t,forward:r})}},b=function(){for(var e=0;e<s.length;e++){s[e].open()}};i();var x=new e.NextInterceptor((0,e.never)());p.listen(t.noop,function(n){var i=o(n,2),u=i[0],a=i[1];if(u===t.CLOCK_MODE)return x.next([e.CANCEL]),void r.default.listen(b,(0,t.clipTime)(0,d,y),l,v,x);if(u===t.EMITTER_MODE){x.next([e.CANCEL]);var c=o((0,e.emitter)(),2),f=c[0];return c[1].listen(b,y,l,v,x),void a(d,f)}x.next([u,a])},t.noop,t.noop,(0,e.never)())})},v=l;exports.default=v;
},{"agos":"IsMm","./utils":"gycy","./clock":"sw3L"}],"v1Fi":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("agos"),r=require("./utils"),t=n(require("./clock"));function n(e){return e&&e.__esModule?e:{default:e}}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.forEach(function(r){i(e,r,t[r])})}return e}function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function u(e,r){return l(e)||f(e,r)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function f(e,r){var t=[],n=!0,o=!1,i=void 0;try{for(var u,a=e[Symbol.iterator]();!(n=(u=a.next()).done)&&(t.push(u.value),!r||t.length!==r);n=!0);}catch(f){o=!0,i=f}finally{try{n||null==a.return||a.return()}finally{if(o)throw i}}return t}function l(e){if(Array.isArray(e))return e}var c=function(){for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return(0,e.create)(function(n,a,f,l,c){for(var v=[],p=0,s=function(t){var n=new e.NextInterceptor((0,e.never)());i[t].listen(r.noop,a,f,r.noop,n),n.next([r.EMITTER_MODE,function(e,n){v[t]=o({},n,{next:(0,r.clipTime)(0,e,n.next)}),p=Math.max(p,e)}])},y=0;y<i.length;y++)s(y);var d=function(e){for(var r=e.time,t=e.forward,n=0;n<v.length;n++){v[n].next({time:r,forward:t})}},b=function(){for(var e=0;e<v.length;e++){v[e].open()}};n();var x=new e.NextInterceptor((0,e.never)());c.listen(r.noop,function(n){var o=u(n,2),i=o[0],a=o[1];if(i===r.CLOCK_MODE)return x.next([e.CANCEL]),void t.default.listen(b,(0,r.clipTime)(0,p,d),f,l,x);if(i===r.EMITTER_MODE){x.next([e.CANCEL]);var c=u((0,e.emitter)(),2),v=c[0];return c[1].listen(b,d,f,l,x),void a(p,v)}x.next([i,a])},r.noop,r.noop,(0,e.never)())})},v=c;exports.default=v;
},{"agos":"IsMm","./utils":"gycy","./clock":"sw3L"}],"pZf5":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("agos"),r=require("./utils"),t=n(require("./clock"));function n(e){return e&&e.__esModule?e:{default:e}}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.forEach(function(r){i(e,r,t[r])})}return e}function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function u(e,r){return l(e)||f(e,r)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function f(e,r){var t=[],n=!0,o=!1,i=void 0;try{for(var u,a=e[Symbol.iterator]();!(n=(u=a.next()).done)&&(t.push(u.value),!r||t.length!==r);n=!0);}catch(f){o=!0,i=f}finally{try{n||null==a.return||a.return()}finally{if(o)throw i}}return t}function l(e){if(Array.isArray(e))return e}var c=function(){for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return(0,e.create)(function(n,a,f,l,c){for(var v=[],p=0,s=function(t){var n=new e.NextInterceptor((0,e.never)()),u=i[t];"number"==typeof u?p+=u:(u.listen(r.noop,a,f,r.noop,n),n.next([r.EMITTER_MODE,function(e,n){v[t]=o({},n,{next:(0,r.clipTime)(p,p+e,n.next)}),p+=e}]))},y=0;y<i.length;y++)s(y);var d=function(e){for(var r=e.time,t=e.forward,n=0;n<v.length;n++){v[n].next({time:r,forward:t})}},b=function(){for(var e=0;e<v.length;e++){v[e].open()}};n();var x=new e.NextInterceptor((0,e.never)());c.listen(r.noop,function(n){var o=u(n,2),i=o[0],a=o[1];if(i===r.CLOCK_MODE)return x.next([e.CANCEL]),void t.default.listen(b,(0,r.clipTime)(0,p,d),f,l,x);if(i===r.EMITTER_MODE){x.next([e.CANCEL]);var c=u((0,e.emitter)(),2),v=c[0];return c[1].listen(b,d,f,l,x),void a(p,v)}x.next([i,a])},r.noop,r.noop,(0,e.never)())})},v=c;exports.default=v;
},{"agos":"IsMm","./utils":"gycy","./clock":"sw3L"}],"L7b7":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("agos"),r=function(r){return(0,e.map)(function(e){return r(function(r,t){return(t-r)*e+r})})},t=r;exports.default=t;
},{"agos":"IsMm"}],"Prja":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.easeInOutQuint=exports.easeOutQuint=exports.easeInQuint=exports.easeInOutQuart=exports.easeOutQuart=exports.easeInQuart=exports.easeInOutCubic=exports.easeOutCubic=exports.easeInCubic=exports.easeInOutQuad=exports.easeOutQuad=exports.easeInQuad=exports.linear=void 0;var e=function(e){return function(t){return Math.pow(t,e)}},t=function(e){return function(t){return 1-Math.abs(Math.pow(t-1,e))}},r=function(r){return function(a){return a<.5?e(r)(2*a)/2:t(r)(2*a-1)/2+.5}},a=r(1);exports.linear=a;var s=e(2);exports.easeInQuad=s;var u=t(2);exports.easeOutQuad=u;var n=r(2);exports.easeInOutQuad=n;var o=e(3);exports.easeInCubic=o;var p=t(3);exports.easeOutCubic=p;var x=r(3);exports.easeInOutCubic=x;var i=e(4);exports.easeInQuart=i;var Q=t(4);exports.easeOutQuart=Q;var O=r(4);exports.easeInOutQuart=O;var I=e(5);exports.easeInQuint=I;var v=t(5);exports.easeOutQuint=v;var c=r(5);exports.easeInOutQuint=c;
},{}],"Ij92":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e={controller:!0,fromDrag:!0,fromEvent:!0,fromMouseMove:!0,fromMouseUp:!0,autoplay:!0,clip:!0,repeat:!0,spring:!0,stagger:!0,timeline:!0,track:!0,throttleRAF:!0,tween:!0};Object.defineProperty(exports,"controller",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(exports,"fromDrag",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(exports,"fromEvent",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(exports,"fromMouseMove",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(exports,"fromMouseUp",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(exports,"autoplay",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(exports,"clip",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(exports,"repeat",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(exports,"spring",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(exports,"stagger",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(exports,"timeline",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(exports,"track",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(exports,"throttleRAF",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(exports,"tween",{enumerable:!0,get:function(){return b.default}});var r=g(require("./controller")),t=g(require("./fromDrag")),n=g(require("./fromEvent")),u=g(require("./fromMouseMove")),o=g(require("./fromMouseUp")),f=g(require("./autoplay")),i=g(require("./clip")),a=g(require("./repeat")),l=g(require("./spring")),p=g(require("./stagger")),c=g(require("./timeline")),s=g(require("./track")),d=g(require("./throttleRAF")),b=g(require("./tween")),m=require("./easings");function g(e){return e&&e.__esModule?e:{default:e}}Object.keys(m).forEach(function(r){"default"!==r&&"__esModule"!==r&&(Object.prototype.hasOwnProperty.call(e,r)||Object.defineProperty(exports,r,{enumerable:!0,get:function(){return m[r]}}))});
},{"./controller":"D/ta","./fromDrag":"XLa7","./fromEvent":"AYww","./fromMouseMove":"wQg9","./fromMouseUp":"hAHP","./autoplay":"zvUc","./clip":"mZdF","./repeat":"P4rz","./spring":"9kJp","./stagger":"E6JY","./timeline":"v1Fi","./track":"pZf5","./throttleRAF":"huRx","./tween":"L7b7","./easings":"Prja"}],"q2Zo":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.mapTo=exports.subscribe=exports.createSpringSettings=void 0;var t=require("agos"),e=r(require("../galaw/fromEvent"));function r(t){return t&&t.__esModule?t:{default:t}}function n(t,e){return a(t)||o(t,e)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function o(t,e){var r=[],n=!0,i=!1,o=void 0;try{for(var a,u=t[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(l){i=!0,o=l}finally{try{n||null==u.return||u.return()}finally{if(i)throw o}}return r}function a(t){if(Array.isArray(t))return t}function u(t){return s(t)||f(t)||l()}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function f(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function s(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}var c=function(){},p=function(r){var i=r.getElementsByClassName("spring-setting")[0].getElementsByClassName("field"),o=u(i).map(function(t){return t.getElementsByTagName("input")}),a={};return o.forEach(function(r,o){i[o].firstElementChild.firstElementChild.innerHTML=r[0].value,a[r[0].name]=r[0].value,(0,t.pipe)((0,e.default)(r[0],"change"),(0,t.map)(function(t){return[t.target.name,t.target.value]}),m(function(t){var e=n(t,2),r=e[0],u=e[1];a[r]=u,i[o].firstElementChild.firstElementChild.innerHTML=u}))}),function(){return a}};exports.createSpringSettings=p;var m=function(e,r){return"function"==typeof e?(0,t.listen)(c,e,c,c,r):(0,t.listen)(e.open,e.next,e.fail,e.done,r)};exports.subscribe=m;var g=function(e){return(0,t.map)(function(){return e})};exports.mapTo=g;
},{"agos":"IsMm","../galaw/fromEvent":"AYww"}],"Q/Vw":[function(require,module,exports) {
"use strict";var e=require("agos"),t=require("../galaw"),r=require("./utils");function n(e,t){return o(e)||u(e,t)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function u(e,t){var r=[],n=!0,a=!1,u=void 0;try{for(var o,i=e[Symbol.iterator]();!(n=(o=i.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(l){a=!0,u=l}finally{try{n||null==i.return||i.return()}finally{if(a)throw u}}return r}function o(e){if(Array.isArray(e))return e}var i=document.getElementById("demo-3"),l=i.getElementsByClassName("playground")[0],s=l.getElementsByClassName("big-square")[0],c=i.getBoundingClientRect(),m=c.width,f=m-.2*m-s.clientWidth;(0,e.pipe)((0,t.repeat)((0,t.clip)(1e3),1/0),(0,e.map)(function(e){return e.alternate}),(0,e.map)(t.easeInOutQuad),(0,t.tween)(function(e){return[e(0,f),e(0,360)]}),(0,r.subscribe)(function(e){var t=n(e,2),r=t[0],a=t[1];s.style.transform="translateX(".concat(r,"px) rotate(").concat(a,"deg)")},(0,t.controller)({play:(0,t.fromEvent)(l,"mouseenter"),pause:(0,t.fromEvent)(l,"mouseleave")})));
},{"agos":"IsMm","../galaw":"Ij92","./utils":"q2Zo"}]},{},["Q/Vw"], null)
//# sourceMappingURL=/galaw-demos/demo-3.3a51f149.js.map