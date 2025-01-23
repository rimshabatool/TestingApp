(function(){'use strict';var r;function ba(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ca=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function da(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var ea=da(this);function u(a,b){if(b)a:{var c=ea;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&b!=null&&ca(c,a,{configurable:!0,writable:!0,value:b})}}
u("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ca(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(Math.random()*1E9>>>0)+"_",e=0;return b});
u("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=ea[b[c]];typeof d==="function"&&typeof d.prototype[a]!="function"&&ca(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ha(ba(this))}})}return a});
function ha(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
var ka=typeof Object.create=="function"?Object.create:function(a){function b(){}
b.prototype=a;return new b},la=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if(typeof Reflect!="undefined"&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){e===void 0&&(e=c);
e=ka(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),ma;
if(typeof Object.setPrototypeOf=="function")ma=Object.setPrototypeOf;else{var na;a:{var pa={a:!0},qa={};try{qa.__proto__=pa;na=qa.a;break a}catch(a){}na=!1}ma=na?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ra=ma;
function w(a,b){a.prototype=ka(b.prototype);a.prototype.constructor=a;if(ra)ra(a,b);else for(var c in b)if(c!="prototype")if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.za=b.prototype}
function z(a){var b=typeof Symbol!="undefined"&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if(typeof a.length=="number")return{next:ba(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function sa(a){if(!(a instanceof Array)){a=z(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function ta(a){return ua(a,a)}
function ua(a,b){a.raw=b;Object.freeze&&(Object.freeze(a),Object.freeze(b));return a}
function va(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var wa=typeof Object.assign=="function"?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)va(d,e)&&(a[e]=d[e])}return a};
u("Object.assign",function(a){return a||wa});
function xa(){this.A=!1;this.H=null;this.i=void 0;this.h=1;this.u=this.o=0;this.P=this.j=null}
function ya(a){if(a.A)throw new TypeError("Generator is already running");a.A=!0}
xa.prototype.G=function(a){this.i=a};
function za(a,b){a.j={exception:b,md:!0};a.h=a.o||a.u}
xa.prototype.return=function(a){this.j={return:a};this.h=this.u};
xa.prototype.yield=function(a,b){this.h=b;return{value:a}};
xa.prototype.D=function(a){this.h=a};
function Aa(a,b,c){a.o=b;c!=void 0&&(a.u=c)}
function Ba(a){a.o=0;var b=a.j.exception;a.j=null;return b}
function Ca(a){var b=a.P.splice(0)[0];(b=a.j=a.j||b)?b.md?a.h=a.o||a.u:b.D!=void 0&&a.u<b.D?(a.h=b.D,a.j=null):a.h=a.u:a.h=0}
function Da(a){this.h=new xa;this.i=a}
function Ea(a,b){ya(a.h);var c=a.h.H;if(c)return Fa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Ga(a)}
function Fa(a,b,c,d){try{var e=b.call(a.h.H,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.A=!1,e;var f=e.value}catch(g){return a.h.H=null,za(a.h,g),Ga(a)}a.h.H=null;d.call(a.h,f);return Ga(a)}
function Ga(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.A=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,za(a.h,c)}a.h.A=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.md)throw b.exception;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ha(a){this.next=function(b){ya(a.h);a.h.H?b=Fa(a,a.h.H.next,b,a.h.G):(a.h.G(b),b=Ga(a));return b};
this.throw=function(b){ya(a.h);a.h.H?b=Fa(a,a.h.H["throw"],b,a.h.G):(za(a.h,b),b=Ga(a));return b};
this.return=function(b){return Ea(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ia(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function A(a){return Ia(new Ha(new Da(a)))}
function B(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
u("Reflect",function(a){return a?a:{}});
u("Reflect.construct",function(){return la});
u("Reflect.setPrototypeOf",function(a){return a?a:ra?function(b,c){try{return ra(b,c),!0}catch(d){return!1}}:null});
u("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.A=!1;var h=this.o();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(this.h==null){this.h=[];var h=this;this.j(function(){h.u()})}this.h.push(g)};
var e=ea.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.u=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.o(l)}}}this.h=null};
c.prototype.o=function(g){this.j(function(){throw g;})};
b.prototype.o=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.Y),reject:g(this.u)}};
b.prototype.Y=function(g){if(g===this)this.u(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.ia(g);else{a:switch(typeof g){case "object":var h=g!=null;break a;case "function":h=!0;break a;default:h=!1}h?this.X(g):this.H(g)}};
b.prototype.X=function(g){var h=void 0;try{h=g.then}catch(k){this.u(k);return}typeof h=="function"?this.oa(h,g):this.H(g)};
b.prototype.u=function(g){this.G(2,g)};
b.prototype.H=function(g){this.G(1,g)};
b.prototype.G=function(g,h){if(this.h!=0)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;this.h===2&&this.ga();this.P()};
b.prototype.ga=function(){var g=this;e(function(){if(g.U()){var h=ea.console;typeof h!=="undefined"&&h.error(g.j)}},1)};
b.prototype.U=function(){if(this.A)return!1;var g=ea.CustomEvent,h=ea.Event,k=ea.dispatchEvent;if(typeof k==="undefined")return!0;typeof g==="function"?g=new g("unhandledrejection",{cancelable:!0}):typeof h==="function"?g=new h("unhandledrejection",{cancelable:!0}):(g=ea.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.P=function(){if(this.i!=null){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.ia=function(g){var h=this.o();g.Yb(h.resolve,h.reject)};
b.prototype.oa=function(g,h){var k=this.o();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(p,t){return typeof p=="function"?function(v){try{l(p(v))}catch(x){m(x)}}:t}
var l,m,n=new b(function(p,t){l=p;m=t});
this.Yb(k(g,l),k(h,m));return n};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.Yb=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;this.i==null?f.i(k):this.i.push(k);this.A=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=z(g),m=l.next();!m.done;m=l.next())d(m.value).Yb(h,k)})};
b.all=function(g){var h=z(g),k=h.next();return k.done?d([]):new b(function(l,m){function n(v){return function(x){p[v]=x;t--;t==0&&l(p)}}
var p=[],t=0;do p.push(void 0),t++,d(k.value).Yb(n(p.length-1),m),k=h.next();while(!k.done)})};
return b});
u("Object.setPrototypeOf",function(a){return a||ra});
u("Symbol.dispose",function(a){return a?a:Symbol("Symbol.dispose")});
u("globalThis",function(a){return a||ea});
u("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=z(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return l==="object"&&k!==null||l==="function"}
function e(k){if(!va(k,g)){var l=new c;ca(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(m.get(k)!=2||m.get(l)!=3)return!1;m.delete(k);m.set(l,4);return!m.has(k)&&m.get(l)==4}catch(n){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!va(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&va(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&va(k,g)&&va(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&va(k,g)&&va(k[g],this.h)?delete k[g][this.h]:!1};
return b});
u("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h[1];return ha(function(){if(l){for(;l.head!=h[1];)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;l=="object"||l=="function"?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h[0][l];if(m&&va(h[0],l))for(h=0;h<m.length;h++){var n=m[h];if(k!==k&&n.key!==n.key||k===n.key)return{id:l,list:m,index:h,entry:n}}return{id:l,list:m,index:-1,entry:void 0}}
function e(h){this[0]={};this[1]=b();this.size=0;if(h){h=z(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var h=Object.seal({x:4}),k=new a(z([[h,"s"]]));if(k.get(h)!="s"||k.size!=1||k.get({x:4})||k.set({x:4},"t")!=k||k.size!=2)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||m.value[1]!="s")return!1;m=l.next();return m.done||m.value[0].x!=4||m.value[1]!="t"||!l.next().done?!1:!0}catch(n){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=h===0?0:h;var l=d(this,h);l.list||(l.list=this[0][l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this[1],previous:this[1].previous,head:this[1],key:h,value:k},l.list.push(l.entry),this[1].previous.next=l.entry,this[1].previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this[0][h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this[0]={};this[1]=this[1].previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
u("Set",function(a){function b(c){this.h=new Map;if(c){c=z(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var c=Object.seal({x:4}),d=new a(z([c]));if(!d.has(c)||d.size!=1||d.add(c)!=d||d.size!=1||d.add({x:4})!=d||d.size!=2)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||f.value[0].x!=4||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=c===0?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
function Ka(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
u("Array.prototype.entries",function(a){return a?a:function(){return Ka(this,function(b,c){return[b,c]})}});
u("Array.prototype.keys",function(a){return a?a:function(){return Ka(this,function(b){return b})}});
function La(a,b,c){if(a==null)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
u("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=La(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
u("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=La(this,b,"endsWith");b+="";c===void 0&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;e>0&&c>0;)if(d[--c]!=b[--e])return!1;return e<=0}});
u("Number.isFinite",function(a){return a?a:function(b){return typeof b!=="number"?!1:!isNaN(b)&&b!==Infinity&&b!==-Infinity}});
u("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
u("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)va(b,d)&&c.push(b[d]);return c}});
u("Object.is",function(a){return a?a:function(b,c){return b===c?b!==0||1/b===1/c:b!==b&&c!==c}});
u("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(c<0&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
u("String.prototype.includes",function(a){return a?a:function(b,c){return La(this,b,"includes").indexOf(b,c||0)!==-1}});
u("Array.from",function(a){return a?a:function(b,c,d){c=c!=null?c:function(h){return h};
var e=[],f=typeof Symbol!="undefined"&&Symbol.iterator&&b[Symbol.iterator];if(typeof f=="function"){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
u("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)va(b,d)&&c.push([d,b[d]]);return c}});
u("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
u("Number.MIN_SAFE_INTEGER",function(){return-9007199254740991});
u("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
u("Number.isSafeInteger",function(a){return a?a:function(b){return Number.isInteger(b)&&Math.abs(b)<=Number.MAX_SAFE_INTEGER}});
u("Math.trunc",function(a){return a?a:function(b){b=Number(b);if(isNaN(b)||b===Infinity||b===-Infinity||b===0)return b;var c=Math.floor(Math.abs(b));return b<0?-c:c}});
u("Number.isNaN",function(a){return a?a:function(b){return typeof b==="number"&&isNaN(b)}});
u("Array.prototype.values",function(a){return a?a:function(){return Ka(this,function(b,c){return c})}});
u("Math.clz32",function(a){return a?a:function(b){b=Number(b)>>>0;if(b===0)return 32;var c=0;(b&4294901760)===0&&(b<<=16,c+=16);(b&4278190080)===0&&(b<<=8,c+=8);(b&4026531840)===0&&(b<<=4,c+=4);(b&3221225472)===0&&(b<<=2,c+=2);(b&2147483648)===0&&c++;return c}});
u("Math.log10",function(a){return a?a:function(b){return Math.log(b)/Math.LN10}});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var Oa=Oa||{},C=this||self;function D(a,b,c){a=a.split(".");c=c||C;a[0]in c||typeof c.execScript=="undefined"||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||b===void 0?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function E(a,b){a=a.split(".");b=b||C;for(var c=0;c<a.length;c++)if(b=b[a[c]],b==null)return null;return b}
function Pa(a){var b=typeof a;return b!="object"?b:a?Array.isArray(a)?"array":b:"null"}
function Qa(a){var b=Pa(a);return b=="array"||b=="object"&&typeof a.length=="number"}
function Ra(a){var b=typeof a;return b=="object"&&a!=null||b=="function"}
function Sa(a){return Object.prototype.hasOwnProperty.call(a,Ta)&&a[Ta]||(a[Ta]=++Ua)}
var Ta="closure_uid_"+(Math.random()*1E9>>>0),Ua=0;function Va(a,b,c){return a.call.apply(a.bind,arguments)}
function Wa(a,b,c){if(!a)throw Error();if(arguments.length>2){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Xa(a,b,c){Xa=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Va:Wa;return Xa.apply(null,arguments)}
function Ya(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Za(){return Date.now()}
function $a(a){return a}
function ab(a,b){function c(){}
c.prototype=b.prototype;a.za=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
;function cb(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,cb);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));b!==void 0&&(this.cause=b)}
ab(cb,Error);cb.prototype.name="CustomError";var db=(new Date("2024-01-01T00:00:00Z")).getTime();function eb(a){var b=a.url;a=a.Mh;this.i=b;this.A=a;a=/[?&]dsh=1(&|$)/.test(b);this.u=!a&&/[?&]ae=1(&|$)/.test(b);this.H=!a&&/[?&]ae=2(&|$)/.test(b);if((this.h=/[?&]adurl=([^&]*)/.exec(b))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.j=c}this.o=(new Date).getTime()-db}
function fb(a,b){return b?a.h?a.i.slice(0,a.h.index)+b+a.i.slice(a.h.index):a.i+b:a.i}
function gb(a){a=a.A;if(!a)return"";var b="";a.platform&&(b+="&uap="+encodeURIComponent(a.platform));a.platformVersion&&(b+="&uapv="+encodeURIComponent(a.platformVersion));a.uaFullVersion&&(b+="&uafv="+encodeURIComponent(a.uaFullVersion));a.architecture&&(b+="&uaa="+encodeURIComponent(a.architecture));a.model&&(b+="&uam="+encodeURIComponent(a.model));a.bitness&&(b+="&uab="+encodeURIComponent(a.bitness));a.fullVersionList&&(b+="&uafvl="+encodeURIComponent(a.fullVersionList.map(function(c){return encodeURIComponent(c.brand)+
";"+encodeURIComponent(c.version)}).join("|")));
typeof a.wow64!=="undefined"&&(b+="&uaw="+Number(a.wow64));return b}
;var hb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};/*

 Copyright Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
var ib=globalThis.trustedTypes,jb;function kb(){var a=null;if(!ib)return a;try{var b=function(c){return c};
a=ib.createPolicy("goog#html",{createHTML:b,createScript:b,createScriptURL:b})}catch(c){}return a}
function lb(){jb===void 0&&(jb=kb());return jb}
;function mb(a){this.h=a}
mb.prototype.toString=function(){return this.h+""};
function nb(a){var b=lb();return new mb(b?b.createScriptURL(a):a)}
function ob(a){if(a instanceof mb)return a.h;throw Error("");}
;var pb=ta([""]),qb=ua(["\x00"],["\\0"]),rb=ua(["\n"],["\\n"]),sb=ua(["\x00"],["\\u0000"]);function tb(a){return a.toString().indexOf("`")===-1}
tb(function(a){return a(pb)})||tb(function(a){return a(qb)})||tb(function(a){return a(rb)})||tb(function(a){return a(sb)});function ub(a){this.h=a}
ub.prototype.toString=function(){return this.h};
var vb=new ub("about:invalid#zClosurez");function wb(a){this.te=a}
function xb(a){return new wb(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var yb=[xb("data"),xb("http"),xb("https"),xb("mailto"),xb("ftp"),new wb(function(a){return/^[^:]*([/?#]|$)/.test(a)})],zb=/^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;
function Ab(a){if(a instanceof ub)if(a instanceof ub)a=a.h;else throw Error("");else a=zb.test(a)?a:void 0;return a}
;function Bb(a,b){b=Ab(b);b!==void 0&&(a.href=b)}
;function Cb(){this.h=Db[0].toLowerCase()}
Cb.prototype.toString=function(){return this.h};function Eb(a){this.h=a}
Eb.prototype.toString=function(){return this.h+""};function Fb(a){var b="true".toString(),c=[new Cb];if(c.length===0)throw Error("");if(c.map(function(d){if(d instanceof Cb)d=d.h;else throw Error("");return d}).every(function(d){return"data-loaded".indexOf(d)!==0}))throw Error('Attribute "data-loaded" does not match any of the allowed prefixes.');
a.setAttribute("data-loaded",b)}
;function Gb(a,b){throw Error(b===void 0?"unexpected value "+a+"!":b);}
;var Hb="alternate author bookmark canonical cite help icon license modulepreload next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");function Ib(a,b){if(b instanceof mb)a.href=ob(b).toString(),a.rel="stylesheet";else{if(Hb.indexOf("stylesheet")===-1)throw Error('TrustedResourceUrl href attribute required with rel="stylesheet"');b=Ab(b);b!==void 0&&(a.href=b,a.rel="stylesheet")}}
;function Jb(a){a=a===void 0?document:a;var b,c;a=(c=(b="document"in a?a.document:a).querySelector)==null?void 0:c.call(b,"script[nonce]");return a==null?"":a.nonce||a.getAttribute("nonce")||""}
;function Kb(a){this.h=a}
Kb.prototype.toString=function(){return this.h+""};function Lb(a){var b=Jb(a.ownerDocument);b&&a.setAttribute("nonce",b)}
function Mb(a,b){if(b instanceof Kb)b=b.h;else throw Error("");a.textContent=b;Lb(a)}
function Nb(a,b){a.src=ob(b);Lb(a)}
;var Ob=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(typeof a==="string")return typeof b!=="string"||b.length!=1?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Pb=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=typeof a==="string"?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)},Qb=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f=typeof a==="string"?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},Rb=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e=typeof a==="string"?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Sb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
Pb(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function Tb(a,b){a:{for(var c=a.length,d=typeof a==="string"?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return b<0?null:typeof a==="string"?a.charAt(b):a[b]}
function Ub(a,b){b=Ob(a,b);var c;(c=b>=0)&&Array.prototype.splice.call(a,b,1);return c}
function Vb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Qa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function Wb(a,b){a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity=b}
;function Xb(a){var b=E("window.location.href");a==null&&(a='Unknown Error of type "null/undefined"');if(typeof a==="string")return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||C.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Yb(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(c==
null){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Zb[c])c=Zb[c];else{c=String(c);if(!Zb[c]){var f=/function\s+([^\(]+)/m.exec(c);Zb[c]=f?f[1]:"[Anonymous]"}c=Zb[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";typeof a.toString==="function"&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}return{message:a.message,
name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:b}}
function Yb(a,b){b||(b={});b[$b(a)]=!0;var c=a.stack||"",d=a.cause;d&&!b[$b(d)]&&(c+="\nCaused by: ",d.stack&&d.stack.indexOf(d.toString())==0||(c+=typeof d==="string"?d:d.message+"\n"),c+=Yb(d,b));a=a.errors;if(Array.isArray(a)){d=1;var e;for(e=0;e<a.length&&!(d>4);e++)b[$b(a[e])]||(c+="\nInner error "+d++ +": ",a[e].stack&&a[e].stack.indexOf(a[e].toString())==0||(c+=typeof a[e]==="string"?a[e]:a[e].message+"\n"),c+=Yb(a[e],b));e<a.length&&(c+="\n... "+(a.length-e)+" more inner errors")}return c}
function $b(a){var b="";typeof a.toString==="function"&&(b=""+a);return b+a.stack}
var Zb={};function ac(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var bc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function cc(a){return a?decodeURI(a):a}
function dc(a,b){return b.match(bc)[a]||null}
function ec(a){return cc(dc(3,a))}
function fc(a){var b=a.match(bc);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function hc(a){var b=a.indexOf("#");return b<0?a:a.slice(0,b)}
function ic(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)ic(a,String(b[d]),c);else b!=null&&c.push(a+(b===""?"":"="+encodeURIComponent(String(b))))}
function jc(a){var b=[],c;for(c in a)ic(c,a[c],b);return b.join("&")}
function kc(a,b){b=jc(b);if(b){var c=a.indexOf("#");c<0&&(c=a.length);var d=a.indexOf("?");if(d<0||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;b=a[0]+(a[1]?"?"+a[1]:"")+a[2]}else b=a;return b}
function lc(a,b,c,d){for(var e=c.length;(b=a.indexOf(c,b))>=0&&b<d;){var f=a.charCodeAt(b-1);if(f==38||f==63)if(f=a.charCodeAt(b+e),!f||f==61||f==38||f==35)return b;b+=e+1}return-1}
var mc=/#|$/,nc=/[?&]($|#)/;function oc(a,b){for(var c=a.search(mc),d=0,e,f=[];(e=lc(a,d,b,c))>=0;)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.slice(d));return f.join("").replace(nc,"$1")}
;function pc(a){var b=b===void 0?41:b;var c=[];qc(a,rc,6).forEach(function(d){sc(d,2)<=b&&c.push(sc(d,1))});
return c}
function tc(a){var b=b===void 0?41:b;var c=[];qc(a,rc,6).forEach(function(d){sc(d,2)>b&&c.push(sc(d,1))});
return c}
function uc(a){var b=b===void 0?41:b;a=(a==null?void 0:sc(a,1))||0;return a>0&&b>=a}
;function vc(a){a&&typeof a.dispose=="function"&&a.dispose()}
;function wc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Qa(d)?wc.apply(null,d):vc(d)}}
;function F(){this.da=this.da;this.H=this.H}
F.prototype.da=!1;F.prototype.dispose=function(){this.da||(this.da=!0,this.aa())};
F.prototype[Symbol.dispose]=function(){this.dispose()};
function xc(a,b){a.addOnDisposeCallback(Ya(vc,b))}
F.prototype.addOnDisposeCallback=function(a,b){this.da?b!==void 0?a.call(b):a():(this.H||(this.H=[]),b&&(a=a.bind(b)),this.H.push(a))};
F.prototype.aa=function(){if(this.H)for(;this.H.length;)this.H.shift()()};var yc;function zc(){F.apply(this,arguments);this.j=1;this[yc]=this.dispose}
w(zc,F);zc.prototype.share=function(){if(this.da)throw Error("E:AD");this.j++;return this};
zc.prototype.dispose=function(){--this.j||F.prototype.dispose.call(this)};
yc=Symbol.dispose;function Ac(a){return{fieldType:2,fieldName:a}}
function Bc(a){return{fieldType:3,fieldName:a}}
;function Cc(a){this.h=a;a.zc("/client_streamz/bg/frs",Bc("ke"))}
Cc.prototype.record=function(a,b){this.h.record("/client_streamz/bg/frs",a,b)};
function Dc(a){this.h=a;a.zc("/client_streamz/bg/wrl",Bc("mn"),Ac("ac"),Ac("sc"),Bc("rk"),Bc("mk"))}
Dc.prototype.record=function(a,b,c,d,e,f){this.h.record("/client_streamz/bg/wrl",a,b,c,d,e,f)};
function Ec(a){this.i=a;a.Eb("/client_streamz/bg/ec",Bc("en"),Bc("mk"))}
Ec.prototype.h=function(a,b){this.i.Cb("/client_streamz/bg/ec",a,b)};
function Fc(a){this.h=a;a.zc("/client_streamz/bg/el",Bc("en"),Bc("rk"),Bc("mk"))}
Fc.prototype.record=function(a,b,c,d){this.h.record("/client_streamz/bg/el",a,b,c,d)};
function Gc(a){this.i=a;a.Eb("/client_streamz/bg/cec",Ac("ec"),Bc("rk"),Bc("mk"))}
Gc.prototype.h=function(a,b,c){this.i.Cb("/client_streamz/bg/cec",a,b,c)};
function Hc(a){this.i=a;a.Eb("/client_streamz/bg/po/csc",Ac("cs"),Bc("rk"),Bc("mk"))}
Hc.prototype.h=function(a,b,c){this.i.Cb("/client_streamz/bg/po/csc",a,b,c)};
function Ic(a){this.i=a;a.Eb("/client_streamz/bg/po/ctav",Bc("av"),Bc("rk"),Bc("mk"))}
Ic.prototype.h=function(a,b,c){this.i.Cb("/client_streamz/bg/po/ctav",a,b,c)};
function Jc(a){this.i=a;a.Eb("/client_streamz/bg/po/cwsc",Bc("su"),Bc("rk"),Bc("mk"))}
Jc.prototype.h=function(a,b,c){this.i.Cb("/client_streamz/bg/po/cwsc",a,b,c)};function Kc(a){C.setTimeout(function(){throw a;},0)}
;var Lc,Mc=E("CLOSURE_FLAGS"),Nc=Mc&&Mc[610401301];Lc=Nc!=null?Nc:!1;function Oc(){var a=C.navigator;return a&&(a=a.userAgent)?a:""}
var Pc,Qc=C.navigator;Pc=Qc?Qc.userAgentData||null:null;function Rc(a){return Lc?Pc?Pc.brands.some(function(b){return(b=b.brand)&&b.indexOf(a)!=-1}):!1:!1}
function G(a){return Oc().indexOf(a)!=-1}
;function Sc(){return Lc?!!Pc&&Pc.brands.length>0:!1}
function Tc(){return Sc()?!1:G("Opera")}
function Uc(){return G("Firefox")||G("FxiOS")}
function Vc(){return Sc()?Rc("Chromium"):(G("Chrome")||G("CriOS"))&&!(Sc()?0:G("Edge"))||G("Silk")}
;function Wc(){return Lc?!!Pc&&!!Pc.platform:!1}
function Xc(){return G("iPhone")&&!G("iPod")&&!G("iPad")}
;var Yc=Tc(),Zc=Sc()?!1:G("Trident")||G("MSIE"),$c=G("Edge"),ad=G("Gecko")&&!(Oc().toLowerCase().indexOf("webkit")!=-1&&!G("Edge"))&&!(G("Trident")||G("MSIE"))&&!G("Edge"),bd=Oc().toLowerCase().indexOf("webkit")!=-1&&!G("Edge");bd&&G("Mobile");Wc()||G("Macintosh");Wc()||G("Windows");(Wc()?Pc.platform==="Linux":G("Linux"))||Wc()||G("CrOS");var cd=Wc()?Pc.platform==="Android":G("Android");Xc();G("iPad");G("iPod");Xc()||G("iPad")||G("iPod");Oc().toLowerCase().indexOf("kaios");Uc();var dd=Xc()||G("iPod"),ed=G("iPad");!G("Android")||Vc()||Uc()||Tc()||G("Silk");Vc();var fd=G("Safari")&&!(Vc()||(Sc()?0:G("Coast"))||Tc()||(Sc()?0:G("Edge"))||(Sc()?Rc("Microsoft Edge"):G("Edg/"))||(Sc()?Rc("Opera"):G("OPR"))||Uc()||G("Silk")||G("Android"))&&!(Xc()||G("iPad")||G("iPod"));var gd={},hd=null;function id(a,b){Qa(a);b===void 0&&(b=0);jd();b=gd[b];for(var c=Array(Math.floor(a.length/3)),d=b[64]||"",e=0,f=0;e<a.length-2;e+=3){var g=a[e],h=a[e+1],k=a[e+2],l=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[f++]=""+l+g+h+k}l=0;k=d;switch(a.length-e){case 2:l=a[e+1],k=b[(l&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|l>>4]+k+d}return c.join("")}
function kd(a){var b=a.length,c=b*3/4;c%3?c=Math.floor(c):"=.".indexOf(a[b-1])!=-1&&(c="=.".indexOf(a[b-2])!=-1?c-2:c-1);var d=new Uint8Array(c),e=0;ld(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d}
function ld(a,b){function c(k){for(;d<a.length;){var l=a.charAt(d++),m=hd[l];if(m!=null)return m;if(!/^[\s\xa0]*$/.test(l))throw Error("Unknown base64 encoding at char: "+l);}return k}
jd();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(h===64&&e===-1)break;b(e<<2|f>>4);g!=64&&(b(f<<4&240|g>>2),h!=64&&b(g<<6&192|h))}}
function jd(){if(!hd){hd={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;c<5;c++){var d=a.concat(b[c].split(""));gd[c]=d;for(var e=0;e<d.length;e++){var f=d[e];hd[f]===void 0&&(hd[f]=e)}}}}
;var md=typeof Uint8Array!=="undefined",nd=!Zc&&typeof btoa==="function";function od(a){if(!nd)return id(a);for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);return btoa(b)}
var pd=/[-_.]/g,qd={"-":"+",_:"/",".":"="};function rd(a){return qd[a]||""}
function sd(a){return md&&a!=null&&a instanceof Uint8Array}
var td={};function ud(a,b){vd(b);this.h=a;if(a!=null&&a.length===0)throw Error("ByteString should be constructed with non-empty values");}
ud.prototype.sizeBytes=function(){vd(td);var a=this.h;if(a!=null&&!sd(a))if(typeof a==="string")if(nd){pd.test(a)&&(a=a.replace(pd,rd));a=atob(a);for(var b=new Uint8Array(a.length),c=0;c<a.length;c++)b[c]=a.charCodeAt(c);a=b}else a=kd(a);else Pa(a),a=null;return(a=a==null?a:this.h=a)?a.length:0};
var wd;function vd(a){if(a!==td)throw Error("illegal external caller");}
;var xd=void 0;function yd(a){a=Error(a);Wb(a,"warning");return a}
;var zd=typeof Symbol==="function"&&typeof Symbol()==="symbol",Ad=new Set;function Bd(a,b,c,d){c=c===void 0?!1:c;a=typeof Symbol==="function"&&typeof Symbol()==="symbol"?(d===void 0?0:d)&&Symbol.for&&a?Symbol.for(a):a!=null?Symbol(a):Symbol():b;c&&Ad.add(a);return a}
var Cd=Bd("jas",void 0,!0,!0),Dd=Bd(void 0,"2ex"),Ed=Bd(void 0,"1oa",!0),Fd=Bd(void 0,Symbol(),!0);Math.max.apply(Math,sa(Object.values({Zg:1,Xg:2,Wg:4,dh:8,bh:16,ah:32,Cf:64,fh:128,Vg:256,Ug:512,Yg:1024,If:2048,eh:4096,Jf:8192,Df:16384})));var Gd=zd?function(a,b){a[Cd]|=b}:function(a,b){a.cb!==void 0?a.cb|=b:Object.defineProperties(a,{cb:{value:b,
configurable:!0,writable:!0,enumerable:!1}})},I=zd?function(a){return a[Cd]|0}:function(a){return a.cb|0},Hd=zd?function(a,b){a[Cd]=b}:function(a,b){a.cb!==void 0?a.cb=b:Object.defineProperties(a,{cb:{value:b,
configurable:!0,writable:!0,enumerable:!1}})};
function Id(a,b){Hd(b,(a|0)&-30975)}
function Jd(a,b){Hd(b,(a|34)&-30941)}
;function Kd(){return typeof BigInt==="function"}
;function Ld(a){return Array.prototype.slice.call(a)}
;var Md={},Nd={};function Od(a){return!(!a||typeof a!=="object"||a.h!==Nd)}
function Pd(a){return a!==null&&typeof a==="object"&&!Array.isArray(a)&&a.constructor===Object}
function Qd(a){return!Array.isArray(a)||a.length?!1:I(a)&1?!0:!1}
var Rd,Sd=[];Hd(Sd,55);Rd=Object.freeze(Sd);function Td(a){if(a&2)throw Error();}
function Ud(a,b){var c=$a(Fd);(b=c?b[c]:void 0)&&(a[Fd]=Ld(b))}
var Vd=Object.freeze({});function Wd(a){a.th=!0;return a}
;var Xd=Wd(function(a){return typeof a==="number"}),Yd=Wd(function(a){return typeof a==="string"}),Zd=Wd(function(a){return typeof a==="boolean"});
function $d(){var a=ae;return Wd(function(b){for(var c in a)if(b===a[c]&&!/^[0-9]+$/.test(c))return!0;return!1})}
var be=Wd(function(a){return a!=null&&typeof a==="object"&&typeof a.then==="function"});var ce=typeof C.BigInt==="function"&&typeof C.BigInt(0)==="bigint";function de(a){var b=a;if(Yd(b)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(b))throw Error(String(b));}else if(Xd(b)&&!Number.isSafeInteger(b))throw Error(String(b));return ce?BigInt(a):a=Zd(a)?a?"1":"0":Yd(a)?a.trim()||"0":String(a)}
var je=Wd(function(a){return ce?a>=ee&&a<=fe:a[0]==="-"?ge(a,he):ge(a,ie)}),he=Number.MIN_SAFE_INTEGER.toString(),ee=ce?BigInt(Number.MIN_SAFE_INTEGER):void 0,ie=Number.MAX_SAFE_INTEGER.toString(),fe=ce?BigInt(Number.MAX_SAFE_INTEGER):void 0;
function ge(a,b){if(a.length>b.length)return!1;if(a.length<b.length||a===b)return!0;for(var c=0;c<a.length;c++){var d=a[c],e=b[c];if(d>e)return!1;if(d<e)return!0}}
;var ke=0,le=0;function me(a){var b=a>>>0;ke=b;le=(a-b)/4294967296>>>0}
function ne(a){if(a<0){me(0-a);var b=z(oe(ke,le));a=b.next().value;b=b.next().value;ke=a>>>0;le=b>>>0}else me(a)}
function pe(a,b){b>>>=0;a>>>=0;if(b<=2097151)var c=""+(4294967296*b+a);else Kd()?c=""+(BigInt(b)<<BigInt(32)|BigInt(a)):(c=(a>>>24|b<<8)&16777215,b=b>>16&65535,a=(a&16777215)+c*6777216+b*6710656,c+=b*8147497,b*=2,a>=1E7&&(c+=a/1E7>>>0,a%=1E7),c>=1E7&&(b+=c/1E7>>>0,c%=1E7),c=b+qe(c)+qe(a));return c}
function qe(a){a=String(a);return"0000000".slice(a.length)+a}
function re(){var a=ke,b=le;b&2147483648?Kd()?a=""+(BigInt(b|0)<<BigInt(32)|BigInt(a>>>0)):(b=z(oe(a,b)),a=b.next().value,b=b.next().value,a="-"+pe(a,b)):a=pe(a,b);return a}
function oe(a,b){b=~b;a?a=~a+1:b+=1;return[a,b]}
;var se=typeof BigInt==="function"?BigInt.asIntN:void 0,te=Number.isSafeInteger,ue=Number.isFinite,ve=Math.trunc;function we(a){return a.displayName||a.name||"unknown type name"}
function xe(a){if(a!=null&&typeof a!=="boolean")throw Error("Expected boolean but got "+Pa(a)+": "+a);return a}
var ye=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function ze(a){switch(typeof a){case "bigint":return!0;case "number":return ue(a);case "string":return ye.test(a);default:return!1}}
function Ae(a){if(typeof a!=="number")throw yd("int32");if(!ue(a))throw yd("int32");return a|0}
function Be(a){return a==null?a:Ae(a)}
function Ce(a){if(a==null)return a;if(typeof a==="string"&&a)a=+a;else if(typeof a!=="number")return;return ue(a)?a|0:void 0}
function De(a){var b=0;b=b===void 0?0:b;if(!ze(a))throw yd("int64");var c=typeof a;switch(b){case 4096:switch(c){case "string":return Ee(a);case "bigint":return String(se(64,a));default:return Fe(a)}case 8192:switch(c){case "string":return b=ve(Number(a)),te(b)?a=de(b):(b=a.indexOf("."),b!==-1&&(a=a.substring(0,b)),a=Kd()?de(se(64,BigInt(a))):de(Ge(a))),a;case "bigint":return de(se(64,a));default:return te(a)?de(He(a)):de(Fe(a))}case 0:switch(c){case "string":return Ee(a);case "bigint":return de(se(64,
a));default:return He(a)}default:return Gb(b,"Unknown format requested type for int64")}}
function Ie(a){return a==null?a:De(a)}
function Je(a){var b=a.length;return a[0]==="-"?b<20?!0:b===20&&Number(a.substring(0,7))>-922337:b<19?!0:b===19&&Number(a.substring(0,6))<922337}
function Ge(a){a.indexOf(".");if(Je(a))return a;if(a.length<16)ne(Number(a));else if(Kd())a=BigInt(a),ke=Number(a&BigInt(4294967295))>>>0,le=Number(a>>BigInt(32)&BigInt(4294967295));else{var b=+(a[0]==="-");le=ke=0;for(var c=a.length,d=0+b,e=(c-b)%6+b;e<=c;d=e,e+=6)d=Number(a.slice(d,e)),le*=1E6,ke=ke*1E6+d,ke>=4294967296&&(le+=Math.trunc(ke/4294967296),le>>>=0,ke>>>=0);b&&(b=z(oe(ke,le)),a=b.next().value,b=b.next().value,ke=a,le=b)}return re()}
function He(a){ze(a);a=ve(a);if(!te(a)){ne(a);var b=ke,c=le;if(a=c&2147483648)b=~b+1>>>0,c=~c>>>0,b==0&&(c=c+1>>>0);var d=c*4294967296+(b>>>0);b=Number.isSafeInteger(d)?d:pe(b,c);a=typeof b==="number"?a?-b:b:a?"-"+b:b}return a}
function Fe(a){ze(a);a=ve(a);if(te(a))a=String(a);else{var b=String(a);Je(b)?a=b:(ne(a),a=re())}return a}
function Ee(a){ze(a);var b=ve(Number(a));if(te(b))return String(b);b=a.indexOf(".");b!==-1&&(a=a.substring(0,b));return Ge(a)}
function Ke(a){if(a==null)return a;if(typeof a==="bigint")return je(a)?a=Number(a):(a=se(64,a),a=je(a)?Number(a):String(a)),a;if(ze(a))return typeof a==="number"?He(a):Ee(a)}
function Le(a){if(typeof a!=="string")throw Error();return a}
function Me(a){if(a!=null&&typeof a!=="string")throw Error();return a}
function Ne(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+we(b)+" but got "+(a&&we(a.constructor)));}
function Oe(a,b,c){if(a!=null&&typeof a==="object"&&a.Kc===Md)return a;if(Array.isArray(a)){var d=I(a),e=d;e===0&&(e|=c&32);e|=c&2;e!==d&&Hd(a,e);return new b(a)}}
;function Pe(a,b){return Qe(b)}
function Qe(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "bigint":return je(a)?Number(a):String(a);case "boolean":return a?1:0;case "object":if(a)if(Array.isArray(a)){if(Qd(a))return}else{if(sd(a))return od(a);if(a instanceof ud){var b=a.h;return b==null?"":typeof b==="string"?b:a.h=od(b)}}}return a}
;function Re(a,b,c){var d=Ld(a),e=d.length,f=b&256?d[e-1]:void 0;e+=f?-1:0;for(b=b&512?1:0;b<e;b++)d[b]=c(d[b]);if(f){b=d[b]={};for(var g in f)b[g]=c(f[g])}Ud(d,a);return d}
function Se(a,b,c,d,e){if(a!=null){if(Array.isArray(a))a=Qd(a)?void 0:e&&I(a)&2?a:Te(a,b,c,d!==void 0,e);else if(Pd(a)){var f={},g;for(g in a)f[g]=Se(a[g],b,c,d,e);a=f}else a=b(a,d);return a}}
function Te(a,b,c,d,e){var f=d||c?I(a):0;d=d?!!(f&32):void 0;for(var g=Ld(a),h=0;h<g.length;h++)g[h]=Se(g[h],b,c,d,e);c&&(Ud(g,a),c(f,g));return g}
function Ue(a){return a.Kc===Md?a.toJSON():Qe(a)}
function Ve(a){return Te(a,Ue,void 0,void 0,!1)}
;function J(a,b,c){if(a==null){var d=96;c?(a=[c],d|=512):a=[];b&&(d=d&-33521665|(b&1023)<<15)}else{if(!Array.isArray(a))throw Error("narr");d=I(a);if(d&2048)throw Error("farr");if(d&64)return a;d|=64;if(c&&(d|=512,c!==a[0]))throw Error("mid");a:{c=a;var e=c.length;if(e){var f=e-1;if(Pd(c[f])){d|=256;b=f-(d&512?0:-1);if(b>=1024)throw Error("pvtlmt");d=d&-33521665|(b&1023)<<15;break a}}if(b){b=Math.max(b,e-(d&512?0:-1));if(b>1024)throw Error("spvt");d=d&-33521665|(b&1023)<<15}}}Hd(a,d);return a}
;function We(a,b,c){c=c===void 0?Jd:c;if(a!=null){if(md&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=I(a);if(d&2)return a;b&&(b=d===0||!!(d&32)&&!(d&64||!(d&16)));return b?(Hd(a,(d|34)&-12293),a):Te(a,We,d&4?Jd:c,!0,!0)}a.Kc===Md&&(c=a.F,d=I(c),a=d&2?a:new a.constructor(Xe(c,d,!0)));return a}}
function Xe(a,b,c){var d=c||b&2?Jd:Id,e=!!(b&32);a=Re(a,b,function(f){return We(f,e,d)});
Gd(a,32|(c?2:0));return a}
function Ye(a){var b=a.F,c=I(b);return c&2?new a.constructor(Xe(b,c,!1)):a}
;function Ze(a,b){a=a.F;return $e(a,I(a),b)}
function $e(a,b,c,d){if(c===-1)return null;var e=c+(b&512?0:-1),f=a.length-1;if(e>=f&&b&256)return a[f][c];if(d&&b&256&&(b=a[f][c],b!=null)){if(a[e]!=null&&Dd!=null){var g;a=(g=xd)!=null?g:xd={};g=a[Dd]||0;g>=4||(a[Dd]=g+1,g=Error(),Wb(g,"incident"),Kc(g))}return b}if(e<=f)return a[e]}
function L(a,b,c){var d=a.F,e=I(d);Td(e);af(d,e,b,c);return a}
function af(a,b,c,d){var e=b&512?0:-1,f=c+e,g=a.length-1;if(f>=g&&b&256)return a[g][c]=d,b;if(f<=g)return a[f]=d,b&256&&(a=a[g],c in a&&delete a[c]),b;d!==void 0&&(g=b>>15&1023||536870912,c>=g?d!=null&&(f={},a[g+e]=(f[c]=d,f),b|=256,Hd(a,b)):a[f]=d);return b}
function bf(a){return cf(a,df,11,!1)!==void 0}
function ef(a){return!!(2&a)&&!!(4&a)||!!(2048&a)}
function ff(a,b,c){var d=a.F,e=I(d);Td(e);if(b==null)return af(d,e,3),a;if(!Array.isArray(b))throw yd();var f=I(b),g=f,h=ef(f),k=h||Object.isFrozen(b);h||(f=0);k||(b=Ld(b),g=0,f=gf(f,e),f=hf(f,e,!0),k=!1);f|=21;h=4&f?4096&f?4096:8192&f?8192:0:void 0;h=h!=null?h:0;for(var l=0;l<b.length;l++){var m=b[l],n=c(m,h);Object.is(m,n)||(k&&(b=Ld(b),g=0,f=gf(f,e),f=hf(f,e,!0),k=!1),b[l]=n)}f!==g&&(k&&(b=Ld(b),f=gf(f,e),f=hf(f,e,!0)),Hd(b,f));af(d,e,3,b);return a}
function jf(a,b,c,d){a=a.F;var e=I(a);Td(e);if(d==null){var f=kf(a);if(lf(f,a,e,c)===b)f.set(c,0);else return}else{c.includes(b);f=kf(a);var g=lf(f,a,e,c);g!==b&&(g&&(e=af(a,e,g)),f.set(c,b))}af(a,e,b,d)}
function kf(a){if(zd){var b;return(b=a[Ed])!=null?b:a[Ed]=new Map}if(Ed in a)return a[Ed];b=new Map;Object.defineProperty(a,Ed,{value:b});return b}
function lf(a,b,c,d){var e=a.get(d);if(e!=null)return e;for(var f=e=0;f<d.length;f++){var g=d[f];$e(b,c,g)!=null&&(e!==0&&(c=af(b,c,e)),e=g)}a.set(d,e);return e}
function cf(a,b,c,d){a=a.F;var e=I(a);d=$e(a,e,c,d);b=Oe(d,b,e);b!==d&&b!=null&&af(a,e,c,b);return b}
function mf(a,b,c,d){b=cf(a,b,c,d===void 0?!1:d);if(b==null)return b;a=a.F;d=I(a);if(!(d&2)){var e=Ye(b);e!==b&&(b=e,af(a,d,c,b))}return b}
function qc(a,b,c){var d=void 0===Vd?2:4;var e=I(a.F),f=e,g=!(2&e);a=a.F;var h=!!(2&f);e=h?1:d;g&&(g=!h);d=$e(a,f,c);d=Array.isArray(d)?d:Rd;var k=I(d);h=!!(4&k);if(!h){var l=k;l===0&&(l=gf(l,f));k=d;l|=1;var m=f,n=!!(2&l);n&&(m|=2);for(var p=!n,t=!0,v=0,x=0;v<k.length;v++){var y=Oe(k[v],b,m);if(y instanceof b){if(!n){var H=!!(I(y.F)&2);p&&(p=!H);t&&(t=H)}k[x++]=y}}x<v&&(k.length=x);l|=4;l=t?l|16:l&-17;l=p?l|8:l&-9;Hd(k,l);n&&Object.freeze(k);k=l}if(g&&!(8&k||!d.length&&(e===1||e===4&&32&k))){ef(k)&&
(d=Ld(d),k=gf(k,f),f=af(a,f,c,d));b=d;g=k;for(k=0;k<b.length;k++)l=b[k],m=Ye(l),l!==m&&(b[k]=m);g|=8;g=b.length?g&-17:g|16;Hd(b,g);k=g}e===1||e===4&&32&k?ef(k)||(f=k,c=!!(32&k),k|=!d.length||16&k&&(!h||c)?2:2048,k!==f&&Hd(d,k),Object.freeze(d)):(e===2&&ef(k)&&(d=Ld(d),k=gf(k,f),k=hf(k,f,!1),Hd(d,k),f=af(a,f,c,d)),ef(k)||(c=k,k=hf(k,f,!1),k!==c&&Hd(d,k)));return d}
function nf(a,b,c,d){d!=null?Ne(d,b):d=void 0;return L(a,c,d)}
function of(a,b,c,d){var e=a.F,f=I(e);Td(f);if(d==null)return af(e,f,c),a;if(!Array.isArray(d))throw yd();for(var g=I(d),h=g,k=ef(g),l=k||Object.isFrozen(d),m=!0,n=!0,p=0;p<d.length;p++){var t=d[p];Ne(t,b);k||(t=!!(I(t.F)&2),m&&(m=!t),n&&(n=t))}k||(g=m?13:5,g=n?g|16:g&-17);l&&g===h||(d=Ld(d),h=0,g=gf(g,f),g=hf(g,f,!0));g!==h&&Hd(d,g);af(e,f,c,d);return a}
function gf(a,b){a=(2&b?a|2:a&-3)|32;return a&=-2049}
function hf(a,b,c){32&b&&c||(a&=-33);return a}
function pf(a){a=Ze(a,1);var b=b===void 0?!1:b;var c=typeof a;b=a==null?a:c==="bigint"?String(se(64,a)):ze(a)?c==="string"?Ee(a):b?Fe(a):He(a):void 0;return b}
function sc(a,b,c){c=c===void 0?0:c;var d;return(d=Ce(Ze(a,b)))!=null?d:c}
function qf(a,b){var c=c===void 0?"":c;a=Ze(a,b);a=a==null||typeof a==="string"?a:void 0;return a!=null?a:c}
function rf(a){var b=0;b=b===void 0?0:b;a=Ze(a,1);a=a==null?a:ue(a)?a|0:void 0;return a!=null?a:b}
function sf(a,b,c){return L(a,b,Me(c))}
function tf(a,b,c){if(c!=null){if(!ue(c))throw yd("enum");c|=0}return L(a,b,c)}
;function uf(a){return a}
function vf(a){return a}
function wf(a,b,c,d){return xf(a,b,c,d,yf,zf)}
function Af(a,b,c,d){return xf(a,b,c,d,Bf,Cf)}
function xf(a,b,c,d,e,f){if(!c.length&&!d)return 0;for(var g=0,h=0,k=0,l=0,m=0,n=c.length-1;n>=0;n--){var p=c[n];d&&n===c.length-1&&p===d||(l++,p!=null&&k++)}if(d)for(var t in d)n=+t,isNaN(n)||(m+=Df(n),h++,n>g&&(g=n));l=e(l,k)+f(h,g,m);t=k;n=h;p=g;for(var v=m,x=c.length-1;x>=0;x--){var y=c[x];if(!(y==null||d&&x===c.length-1&&y===d)){y=x-b;var H=e(y,t)+f(n,p,v);H<l&&(a=1+y,l=H);n++;t--;v+=Df(y);p=Math.max(p,y)}}b=e(0,0)+f(n,p,v);b<l&&(a=0,l=b);if(d){n=h;p=g;v=m;t=k;for(var K in d)d=+K,isNaN(d)||d>=
1024||(n--,t++,v-=K.length,g=e(d,t)+f(n,p,v),g<l&&(a=1+d,l=g))}return a}
function Cf(a,b,c){return c+a*3+(a>1?a-1:0)}
function Bf(a,b){return(a>1?a-1:0)+(a-b)*4}
function zf(a,b){return a==0?0:9*Math.max(1<<32-Math.clz32(a+a/2-1),4)<=b?a==0?0:a<4?100+(a-1)*16:a<6?148+(a-4)*16:a<12?244+(a-6)*16:a<22?436+(a-12)*19:a<44?820+(a-22)*17:52+32*a:40+4*b}
function yf(a){return 40+4*a}
function Df(a){return a>=100?a>=1E4?Math.ceil(Math.log10(1+a)):a<1E3?3:4:a<10?1:2}
;var Ef;function Ff(a){return a}
var Gf;function M(a,b,c){this.F=J(a,b,c)}
r=M.prototype;r.toJSON=function(){var a=!Gf;try{return a&&(Gf=Ve),Hf(this)}finally{a&&(Gf=void 0)}};
r.serialize=function(a){try{return Gf=Ff,a&&(Ef=a===vf||a!==uf&&a!==wf&&a!==Af?vf:a),JSON.stringify(Hf(this),Pe)}finally{a&&(Ef=void 0),Gf=void 0}};
function If(a,b){if(b==null||b=="")return new a;b=JSON.parse(b);if(!Array.isArray(b))throw Error("dnarr");Gd(b,32);return new a(b)}
r.clone=function(){var a=this.F,b=I(a);return new this.constructor(Xe(a,b,!1))};
r.Kc=Md;r.toString=function(){try{return Gf=Ff,Hf(this).toString()}finally{Gf=void 0}};
function Hf(a){var b=a.F,c=Gf(b);b=c!==b;var d=I(b?a.F:c);if(a=c.length){var e=c[a-1],f=Pd(e);f?a--:e=void 0;var g=d&512?0:-1,h=a-g;d=!!Ef&&!(d&512);var k,l=(k=Ef)!=null?k:vf;k=d?l(h,g,c,e):h;d=(h=d&&h!==k)?Array.prototype.slice.call(c,0,a):c;if(f||h){b:{var m=d;var n=e;var p;f=!1;if(h)for(l=Math.max(0,k+g);l<m.length;l++){var t=m[l],v=l-g;t==null||Qd(t)||Od(t)&&t.size===0||(f=m[l]=void 0,((f=p)!=null?f:p={})[v]=t,f=!0)}if(n)for(var x in n)if(l=+x,isNaN(l))l=void 0,((l=p)!=null?l:p={})[x]=n[x];else if(t=
n[x],Array.isArray(t)&&(Qd(t)||Od(t)&&t.size===0)&&(t=null),t==null&&(f=!0),h&&l<k){f=!0;t=l+g;for(v=m.length;v<=t;v++)m.push(void 0);m[t]=n[l]}else t!=null&&(l=void 0,((l=p)!=null?l:p={})[x]=t);f||(p=n);if(p)for(var y in p){n=p;break b}n=null}m=n==null?e!=null:n!==e}h&&(a=d.length);for(var H;a>0;a--){p=d[a-1];if(!(p==null||Qd(p)||Od(p)&&p.size===0))break;H=!0}if(d!==c||m||H){if(!h&&!b)d=Array.prototype.slice.call(d,0,a);else if(H||m||n)d.length=a;n&&d.push(n)}c=d}return c}
;function Jf(a){return function(b){return If(a,b)}}
;function Kf(a){this.F=J(a)}
w(Kf,M);function Lf(a,b){return ff(a,b,Ae)}
;function Mf(a){this.F=J(a)}
w(Mf,M);var Nf=[1,2,3];function Of(a){this.F=J(a)}
w(Of,M);var Pf=[1,2,3];function Qf(a){this.F=J(a)}
w(Qf,M);function Rf(a){this.F=J(a)}
w(Rf,M);function Sf(a){this.F=J(a)}
w(Sf,M);function Tf(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.indexOf("blob:")===0&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();a.indexOf("//")==0&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");c!=-1&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if(c!=="http"&&c!=="https"&&c!=="chrome-extension"&&
c!=="moz-extension"&&c!=="file"&&c!=="android-app"&&c!=="chrome-search"&&c!=="chrome-untrusted"&&c!=="chrome"&&c!=="app"&&c!=="devtools")throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(d!=-1){var e=b.substring(d+1);b=b.substring(0,d);if(c==="http"&&e!=="80"||c==="https"&&e!=="443")a=":"+e}return c+"://"+b+a}
;function Uf(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(n){for(var p=g,t=0;t<64;t+=4)p[t/4]=n[t]<<24|n[t+1]<<16|n[t+2]<<8|n[t+3];for(t=16;t<80;t++)n=p[t-3]^p[t-8]^p[t-14]^p[t-16],p[t]=(n<<1|n>>>31)&4294967295;n=e[0];var v=e[1],x=e[2],y=e[3],H=e[4];for(t=0;t<80;t++){if(t<40)if(t<20){var K=y^v&(x^y);var fa=1518500249}else K=v^x^y,fa=1859775393;else t<60?(K=v&x|y&(v|x),fa=2400959708):(K=v^x^y,fa=3395469782);K=((n<<5|n>>>27)&4294967295)+K+H+fa+p[t]&4294967295;H=y;y=x;x=(v<<30|v>>>2)&4294967295;v=n;n=K}e[0]=e[0]+n&4294967295;e[1]=e[1]+v&4294967295;
e[2]=e[2]+x&4294967295;e[3]=e[3]+y&4294967295;e[4]=e[4]+H&4294967295}
function c(n,p){if(typeof n==="string"){n=unescape(encodeURIComponent(n));for(var t=[],v=0,x=n.length;v<x;++v)t.push(n.charCodeAt(v));n=t}p||(p=n.length);t=0;if(l==0)for(;t+64<p;)b(n.slice(t,t+64)),t+=64,m+=64;for(;t<p;)if(f[l++]=n[t++],m++,l==64)for(l=0,b(f);t+64<p;)b(n.slice(t,t+64)),t+=64,m+=64}
function d(){var n=[],p=m*8;l<56?c(h,56-l):c(h,64-(l-56));for(var t=63;t>=56;t--)f[t]=p&255,p>>>=8;b(f);for(t=p=0;t<5;t++)for(var v=24;v>=0;v-=8)n[p++]=e[t]>>v&255;return n}
for(var e=[],f=[],g=[],h=[128],k=1;k<64;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,Vd:function(){for(var n=d(),p="",t=0;t<n.length;t++)p+="0123456789ABCDEF".charAt(Math.floor(n[t]/16))+"0123456789ABCDEF".charAt(n[t]%16);return p}}}
;function Vf(a,b,c){var d=String(C.location.href);return d&&a&&b?[b,Wf(Tf(d),a,c||null)].join(" "):null}
function Wf(a,b,c){var d=[],e=[];if((Array.isArray(c)?2:1)==1)return e=[b,a],Pb(d,function(h){e.push(h)}),Xf(e.join(" "));
var f=[],g=[];Pb(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=f.length==0?[c,b,a]:[f.join(":"),c,b,a];Pb(d,function(h){e.push(h)});
a=Xf(e.join(" "));a=[c,a];g.length==0||a.push(g.join(""));return a.join("_")}
function Xf(a){var b=Uf();b.update(a);return b.Vd().toLowerCase()}
;function Yf(a){this.h=a||{cookie:""}}
r=Yf.prototype;r.isEnabled=function(){if(!C.navigator.cookieEnabled)return!1;if(this.h.cookie)return!0;this.set("TESTCOOKIESENABLED","1",{Mb:60});if(this.get("TESTCOOKIESENABLED")!=="1")return!1;this.remove("TESTCOOKIESENABLED");return!0};
r.set=function(a,b,c){var d=!1;if(typeof c==="object"){var e=c.Ne;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Mb}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');h===void 0&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=h<0?"":h==0?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+h*1E3)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(e!=null?";samesite="+
e:"")};
r.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=hb(d[e]);if(f.lastIndexOf(c,0)==0)return f.slice(c.length);if(f==a)return""}return b};
r.remove=function(a,b,c){var d=this.get(a)!==void 0;this.set(a,"",{Mb:0,path:b,domain:c});return d};
r.clear=function(){for(var a=(this.h.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=hb(a[f]),d=e.indexOf("="),d==-1?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;a>=0;a--)this.remove(b[a])};
var Zf=new Yf(typeof document=="undefined"?null:document);function $f(){var a=C.__SAPISID||C.__APISID||C.__3PSAPISID||C.__1PSAPISID||C.__OVERRIDE_SID;if(a)return!0;typeof document!=="undefined"&&(a=new Yf(document),a=a.get("SAPISID")||a.get("APISID")||a.get("__Secure-3PAPISID")||a.get("__Secure-1PAPISID"));return!!a}
function ag(a,b,c,d){(a=C[a])||typeof document==="undefined"||(a=(new Yf(document)).get(b));return a?Vf(a,c,d):null}
function bg(a){var b=Tf(String(C.location.href)),c=[];if($f()){b=b.indexOf("https:")==0||b.indexOf("chrome-extension:")==0||b.indexOf("chrome-untrusted://new-tab-page")==0||b.indexOf("moz-extension:")==0;var d=b?C.__SAPISID:C.__APISID;d||typeof document==="undefined"||(d=new Yf(document),d=d.get(b?"SAPISID":"APISID")||d.get("__Secure-3PAPISID"));(d=d?Vf(d,b?"SAPISIDHASH":"APISIDHASH",a):null)&&c.push(d);b&&((b=ag("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&c.push(b),(a=ag("__3PSAPISID",
"__Secure-3PAPISID","SAPISID3PHASH",a))&&c.push(a))}return c.length==0?null:c.join(" ")}
;function cg(){}
cg.prototype.compress=function(a){var b,c,d,e;return A(function(f){switch(f.h){case 1:return b=new CompressionStream("gzip"),c=(new Response(b.readable)).arrayBuffer(),d=b.writable.getWriter(),f.yield(d.write((new TextEncoder).encode(a)),2);case 2:return f.yield(d.close(),3);case 3:return e=Uint8Array,f.yield(c,4);case 4:return f.return(new e(f.i))}})};
cg.prototype.isSupported=function(a){return a<1024?!1:typeof CompressionStream!=="undefined"};function dg(a){this.F=J(a)}
w(dg,M);function eg(a,b){this.intervalMs=a;this.callback=b;this.enabled=!1;this.h=function(){return Za()};
this.i=this.h()}
eg.prototype.setInterval=function(a){this.intervalMs=a;this.timer&&this.enabled?(this.stop(),this.start()):this.timer&&this.stop()};
eg.prototype.start=function(){var a=this;this.enabled=!0;this.timer||(this.timer=setTimeout(function(){a.tick()},this.intervalMs),this.i=this.h())};
eg.prototype.stop=function(){this.enabled=!1;this.timer&&(clearTimeout(this.timer),this.timer=void 0)};
eg.prototype.tick=function(){var a=this;if(this.enabled){var b=Math.max(this.h()-this.i,0);b<this.intervalMs*.8?this.timer=setTimeout(function(){a.tick()},this.intervalMs-b):(this.timer&&(clearTimeout(this.timer),this.timer=void 0),this.callback(),this.enabled&&(this.stop(),this.start()))}else this.timer=void 0};function fg(a){this.F=J(a)}
w(fg,M);function gg(a){this.F=J(a)}
w(gg,M);function hg(a,b){this.x=a!==void 0?a:0;this.y=b!==void 0?b:0}
r=hg.prototype;r.clone=function(){return new hg(this.x,this.y)};
r.equals=function(a){return a instanceof hg&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
r.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
r.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
r.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
r.scale=function(a,b){this.x*=a;this.y*=typeof b==="number"?b:a;return this};function ig(a,b){this.width=a;this.height=b}
r=ig.prototype;r.clone=function(){return new ig(this.width,this.height)};
r.aspectRatio=function(){return this.width/this.height};
r.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
r.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
r.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
r.scale=function(a,b){this.width*=a;this.height*=typeof b==="number"?b:a;return this};function jg(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function kg(a){var b=lg,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function mg(a){for(var b in a)return!1;return!0}
function ng(a,b){if(a!==null&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function og(a){return a!==null&&"privembed"in a?a.privembed:!1}
function pg(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function qg(a){var b={},c;for(c in a)b[c]=a[c];return b}
function rg(a){if(!a||typeof a!=="object")return a;if(typeof a.clone==="function")return a.clone();if(typeof Map!=="undefined"&&a instanceof Map)return new Map(a);if(typeof Set!=="undefined"&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:typeof ArrayBuffer!=="function"||typeof ArrayBuffer.isView!=="function"||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=rg(a[c]);return b}
var sg="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function tg(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<sg.length;f++)c=sg[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function ug(a,b){this.h=a===vg&&b||""}
ug.prototype.toString=function(){return this.h};
var vg={};new ug(vg,"");"ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR NOBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT".split(" ").concat(["BUTTON",
"INPUT"]);function wg(a){var b=document;return typeof a==="string"?b.getElementById(a):a}
function xg(a){var b=document;a=String(a);b.contentType==="application/xhtml+xml"&&(a=a.toLowerCase());return b.createElement(a)}
function yg(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function zg(a){this.F=J(a)}
w(zg,M);zg.prototype.ec=function(){return rf(this)};function Ag(a){this.F=J(a)}
w(Ag,M);function Bg(a){this.F=J(a)}
w(Bg,M);function Cg(a,b){of(a,Ag,1,b)}
;function df(a){this.F=J(a)}
w(df,M);var Dg=["platform","platformVersion","architecture","model","uaFullVersion"],Eg=new Bg,Fg=null;function Gg(a,b){b=b===void 0?Dg:b;if(!Fg){var c;a=(c=a.navigator)==null?void 0:c.userAgentData;if(!a||typeof a.getHighEntropyValues!=="function"||a.brands&&typeof a.brands.map!=="function")return Promise.reject(Error("UACH unavailable"));c=(a.brands||[]).map(function(e){var f=new Ag;f=sf(f,1,e.brand);return sf(f,2,e.version)});
Cg(L(Eg,2,xe(a.mobile)),c);Fg=a.getHighEntropyValues(b)}var d=new Set(b);return Fg.then(function(e){var f=Eg.clone();d.has("platform")&&sf(f,3,e.platform);d.has("platformVersion")&&sf(f,4,e.platformVersion);d.has("architecture")&&sf(f,5,e.architecture);d.has("model")&&sf(f,6,e.model);d.has("uaFullVersion")&&sf(f,7,e.uaFullVersion);return f}).catch(function(){return Eg.clone()})}
;function Hg(a){this.F=J(a)}
w(Hg,M);function Ig(a){this.F=J(a,4)}
w(Ig,M);function Jg(a){this.F=J(a,36)}
w(Jg,M);function Kg(a){this.F=J(a,19)}
w(Kg,M);Kg.prototype.Pb=function(a){return tf(this,2,a)};function Lg(a,b){this.Ta=b=b===void 0?!1:b;this.i=this.locale=null;this.h=new Kg;Number.isInteger(a)&&this.h.Pb(a);b||(this.locale=document.documentElement.getAttribute("lang"));Mg(this,new Hg)}
Lg.prototype.Pb=function(a){this.h.Pb(a);return this};
function Mg(a,b){nf(a.h,Hg,1,b);rf(b)||tf(b,1,1);a.Ta||(b=Ng(a),qf(b,5)||sf(b,5,a.locale));a.i&&(b=Ng(a),mf(b,Bg,9)||nf(b,Bg,9,a.i))}
function Og(a,b){bf(Pg(a))&&(a=Qg(a),tf(a,1,b))}
function Rg(a,b){bf(Pg(a))&&(a=Qg(a),L(a,2,xe(b)))}
function Pg(a){return mf(a.h,Hg,1)}
function Sg(a){var b=b===void 0?Dg:b;var c=a.Ta?void 0:window;c?Gg(c,b).then(function(d){a.i=d;d=Ng(a);nf(d,Bg,9,a.i);return!0}).catch(function(){return!1}):Promise.resolve(!1)}
function Ng(a){a=Pg(a);var b=mf(a,df,11);b||(b=new df,nf(a,df,11,b));return b}
function Qg(a){a=Ng(a);var b=mf(a,zg,10);b||(b=new zg,L(b,2,xe(!1)),nf(a,zg,10,b));return b}
function Tg(a,b,c,d,e,f,g){c=c===void 0?0:c;e=e===void 0?null:e;f=f===void 0?0:f;g=g===void 0?0:g;d=d===void 0?0:d;if(bf(Pg(a))){var h=Qg(a);L(h,3,Be(d))}bf(Pg(a))&&(d=Qg(a),L(d,4,Be(f)));bf(Pg(a))&&(f=Qg(a),L(f,5,Be(g)));a=a.h.clone();g=Date.now().toString();a=L(a,4,Ie(g));b=b.slice();b=of(a,Jg,3,b);e&&(a=new fg,e=L(a,13,Be(e)),a=new gg,e=nf(a,fg,2,e),a=new Ig,e=nf(a,gg,1,e),e=tf(e,2,9),nf(b,Ig,18,e));c&&L(b,14,Ie(c));return b}
;var Ug=function(){if(!C.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
C.addEventListener("test",c,b);C.removeEventListener("test",c,b)}catch(d){}return a}();function Vg(a){this.h=this.i=this.j=a}
Vg.prototype.reset=function(){this.h=this.i=this.j};
Vg.prototype.getValue=function(){return this.i};function Yg(a){this.F=J(a,8)}
w(Yg,M);var Zg=Jf(Yg);function $g(a){this.F=J(a)}
w($g,M);var ah=new function(){this.ctor=$g;this.isRepeated=0;this.h=mf;this.defaultValue=void 0};function bh(a){F.call(this);var b=this;this.componentId="";this.h=[];this.Oa="";this.pageId=null;this.Pa=this.ga=-1;this.G=this.experimentIds=null;this.X=this.Y=this.A=this.o=0;this.nb=1;this.timeoutMillis=0;this.ia=!1;this.logSource=a.logSource;this.ab=a.ab||function(){};
this.j=new Lg(a.logSource,a.Ta);this.network=a.network||null;this.hb=a.hb||null;this.bufferSize=1E3;this.P=a.nf||null;this.sessionIndex=a.sessionIndex||null;this.Hb=a.Hb||!1;this.logger=null;this.withCredentials=!a.dd;this.Ta=a.Ta||!1;this.U=!this.Ta&&!!window&&!!window.navigator&&window.navigator.sendBeacon!==void 0;this.Da=typeof URLSearchParams!=="undefined"&&!!(new URL(ch())).searchParams&&!!(new URL(ch())).searchParams.set;var c=tf(new Hg,1,1);Mg(this.j,c);this.u=new Vg(1E4);a=dh(this,a.Xc);
this.i=new eg(this.u.getValue(),a);this.oa=new eg(6E5,a);this.Hb||this.oa.start();this.Ta||(document.addEventListener("visibilitychange",function(){document.visibilityState==="hidden"&&b.Cc()}),document.addEventListener("pagehide",this.Cc.bind(this)))}
w(bh,F);function dh(a,b){return a.Da?b?function(){b().then(function(){a.flush()})}:function(){a.flush()}:function(){}}
r=bh.prototype;r.aa=function(){this.Cc();this.i.stop();this.oa.stop();F.prototype.aa.call(this)};
function eh(a){a.P||(a.P=ch());try{return(new URL(a.P)).toString()}catch(b){return(new URL(a.P,window.location.origin)).toString()}}
r.log=function(a){if(this.Da){a=a.clone();var b=this.nb++;a=L(a,21,Ie(b));this.componentId&&sf(a,26,this.componentId);b=a;if(pf(b)==null){var c=Date.now();c=Number.isFinite(c)?c.toString():"0";L(b,1,Ie(c))}Ke(Ze(b,15))==null&&L(b,15,Ie((new Date).getTimezoneOffset()*60));this.experimentIds&&(c=this.experimentIds.clone(),nf(b,dg,16,c));b=this.h.length-this.bufferSize+1;b>0&&(this.h.splice(0,b),this.o+=b);this.h.push(a);this.Hb||this.i.enabled||this.i.start()}};
r.flush=function(a,b){var c=this;if(this.h.length===0)a&&a();else if(this.ia&&this.U)Og(this.j,3),fh(this);else{var d=Date.now();if(this.Pa>d&&this.ga<d)b&&b("throttled");else{this.network&&(typeof this.network.ec==="function"?Og(this.j,this.network.ec()):Og(this.j,0));var e=Tg(this.j,this.h,this.o,this.A,this.hb,this.Y,this.X),f=this.ab();if(f&&this.Oa===f)b&&b("stale-auth-token");else{this.h=[];this.i.enabled&&this.i.stop();this.o=0;d=e.serialize();var g;this.G&&this.G.isSupported(d.length)&&(g=
this.G.compress(d));var h=gh(this,d,f),k=function(n){c.u.reset();c.i.setInterval(c.u.getValue());if(n){var p=null;try{var t=JSON.stringify(JSON.parse(n.replace(")]}'\n","")));p=Zg(t)}catch(y){}if(p){n=Number;var v="-1";v=v===void 0?"0":v;var x;t=(x=pf(p))!=null?x:v;x=n(t);x>0&&(c.ga=Date.now(),c.Pa=c.ga+x);p=ah.ctor?ah.h(p,ah.ctor,175237375,!0):ah.h(p,175237375,null,!0);if(p=p===null?void 0:p)p=sc(p,1,-1),p!==-1&&(c.u=new Vg(p<1?1:p),c.i.setInterval(c.u.getValue()))}}a&&a();c.A=0},l=function(n,p){var t=
qc(e,Jg,3);
var v;var x=(v=Ke(Ze(e,14)))!=null?v:void 0;v=c.u;v.h=Math.min(3E5,v.h*2);v.i=Math.min(3E5,v.h+Math.round(.1*(Math.random()-.5)*2*v.h));c.i.setInterval(c.u.getValue());n===401&&f&&(c.Oa=f);x&&(c.o+=x);p===void 0&&(p=c.isRetryable(n));p&&(c.h=t.concat(c.h),c.Hb||c.i.enabled||c.i.start());b&&b("net-send-failed",n);++c.A},m=function(){c.network&&c.network.send(h,k,l)};
g?g.then(function(n){h.uc["Content-Encoding"]="gzip";h.uc["Content-Type"]="application/binary";h.body=n;h.Qd=2;m()},function(){m()}):m()}}}};
function gh(a,b,c){c=c===void 0?a.ab():c;var d={},e=new URL(eh(a));c&&(d.Authorization=c);a.sessionIndex&&(d["X-Goog-AuthUser"]=a.sessionIndex,e.searchParams.set("authuser",a.sessionIndex));a.pageId&&(Object.defineProperty(d,"X-Goog-PageId",{value:a.pageId}),e.searchParams.set("pageId",a.pageId));return{url:e.toString(),body:b,Qd:1,uc:d,requestType:"POST",withCredentials:a.withCredentials,timeoutMillis:a.timeoutMillis}}
r.Cc=function(){Rg(this.j,!0);this.flush();Rg(this.j,!1)};
function fh(a){hh(a,function(b,c){b=new URL(b);b.searchParams.set("format","json");var d=!1;try{d=window.navigator.sendBeacon(b.toString(),c.serialize())}catch(e){}d||(a.U=!1);return d})}
function hh(a,b){if(a.h.length!==0){var c=new URL(eh(a));c.searchParams.delete("format");var d=a.ab();d&&c.searchParams.set("auth",d);c.searchParams.set("authuser",a.sessionIndex||"0");for(d=0;d<10&&a.h.length;++d){var e=a.h.slice(0,32),f=Tg(a.j,e,a.o,a.A,a.hb,a.Y,a.X);if(!b(c.toString(),f)){++a.A;break}a.o=0;a.A=0;a.Y=0;a.X=0;a.h=a.h.slice(e.length)}a.i.enabled&&a.i.stop()}}
r.isRetryable=function(a){return 500<=a&&a<600||a===401||a===0};
function ch(){return"https://play.google.com/log?format=json&hasfast=true"}
;function ih(){this.Kd=typeof AbortController!=="undefined"}
ih.prototype.send=function(a,b,c){var d=this,e,f,g,h,k,l,m,n,p,t;return A(function(v){switch(v.h){case 1:return f=(e=d.Kd?new AbortController:void 0)?setTimeout(function(){e.abort()},a.timeoutMillis):void 0,Aa(v,2,3),g=Object.assign({},{method:a.requestType,
headers:Object.assign({},a.uc)},a.body&&{body:a.body},a.withCredentials&&{credentials:"include"},{signal:a.timeoutMillis&&e?e.signal:null}),v.yield(fetch(a.url,g),5);case 5:h=v.i;if(h.status!==200){(k=c)==null||k(h.status);v.D(3);break}if((l=b)==null){v.D(7);break}return v.yield(h.text(),8);case 8:l(v.i);case 7:case 3:v.P=[v.j];v.o=0;v.u=0;clearTimeout(f);Ca(v);break;case 2:m=Ba(v);switch((n=m)==null?void 0:n.name){case "AbortError":(p=c)==null||p(408);break;default:(t=c)==null||t(400)}v.D(3)}})};
ih.prototype.ec=function(){return 4};function jh(a,b){F.call(this);this.logSource=a;this.sessionIndex=b;this.Ra="https://play.google.com/log?format=json&hasfast=true";this.i=null;this.o=!1;this.network=null;this.componentId="";this.h=this.hb=null;this.j=!1;this.pageId=null}
w(jh,F);function kh(a,b){a.i=b;return a}
function lh(a,b){a.network=b;return a}
function mh(a,b){a.h=b}
jh.prototype.dd=function(){this.u=!0;return this};
function nh(a){a.network||(a.network=new ih);var b=new bh({logSource:a.logSource,ab:a.ab?a.ab:bg,sessionIndex:a.sessionIndex,nf:a.Ra,Ta:a.o,Hb:!1,dd:a.u,Xc:a.Xc,network:a.network});xc(a,b);if(a.i){var c=a.i,d=Ng(b.j);sf(d,7,c)}Math.random()<.5&&(b.G=new cg);a.componentId&&(b.componentId=a.componentId);a.hb&&(b.hb=a.hb);a.pageId&&(b.pageId=a.pageId);a.h&&((d=a.h)?(b.experimentIds||(b.experimentIds=new dg),c=b.experimentIds,d=d.serialize(),sf(c,4,d)):b.experimentIds&&L(b.experimentIds,4));a.j&&(b.ia=
b.U);Sg(b.j);a.network.Pb&&a.network.Pb(a.logSource);a.network.Ye&&a.network.Ye(b);return b}
;function oh(a,b,c,d,e,f,g){a=a===void 0?-1:a;b=b===void 0?"":b;c=c===void 0?"":c;d=d===void 0?!1:d;e=e===void 0?"":e;F.call(this);this.logSource=a;this.componentId=b;f?b=f:(a=new jh(a,"0"),a.componentId=b,xc(this,a),c!==""&&(a.Ra=c),d&&(a.o=!0),e&&kh(a,e),g&&lh(a,g),b=nh(a));this.h=b}
w(oh,F);
oh.prototype.flush=function(a){var b=a||[];if(b.length){a=new Sf;for(var c=[],d=0;d<b.length;d++){var e=b[d],f=new Rf;f=sf(f,1,e.i);var g=ph(e);f=ff(f,g,Le);g=[];var h=[];for(var k=z(e.h.keys()),l=k.next();!l.done;l=k.next())h.push(l.value.split(","));for(k=0;k<h.length;k++){l=h[k];var m=e.o;for(var n=e.Dc(l)||[],p=[],t=0;t<n.length;t++){var v=n[t],x=v&&v.h;v=new Of;switch(m){case 3:x=Number(x);Number.isFinite(x)&&jf(v,1,Pf,Ie(x));break;case 2:x=Number(x);if(x!=null&&typeof x!=="number")throw Error("Value of float/double field must be a number, found "+typeof x+
": "+x);jf(v,2,Pf,x)}p.push(v)}m=p;for(n=0;n<m.length;n++){p=m[n];t=new Qf;p=nf(t,Of,2,p);t=l;v=[];x=qh(e);for(var y=0;y<x.length;y++){var H=x[y],K=t[y],fa=new Mf;switch(H){case 3:jf(fa,1,Nf,Me(String(K)));break;case 2:H=Number(K);Number.isFinite(H)&&jf(fa,2,Nf,Be(H));break;case 1:jf(fa,3,Nf,xe(K==="true"))}v.push(fa)}of(p,Mf,1,v);g.push(p)}}of(f,Qf,4,g);c.push(f);e.clear()}of(a,Rf,1,c);b=this.h;if(a instanceof Jg)b.log(a);else try{var ja=new Jg,Ja=a.serialize();var bb=sf(ja,8,Ja);b.log(bb)}catch(aa){}this.h.flush()}};function rh(a){this.h=a}
;function sh(a,b,c){this.i=a;this.o=b;this.fields=c||[];this.h=new Map}
function qh(a){return a.fields.map(function(b){return b.fieldType})}
function ph(a){return a.fields.map(function(b){return b.fieldName})}
r=sh.prototype;r.Ld=function(a){var b=B.apply(1,arguments),c=this.Dc(b);c?c.push(new rh(a)):this.wd(a,b)};
r.wd=function(a){var b=this.Wc(B.apply(1,arguments));this.h.set(b,[new rh(a)])};
r.Dc=function(){var a=this.Wc(B.apply(0,arguments));return this.h.has(a)?this.h.get(a):void 0};
r.he=function(){var a=this.Dc(B.apply(0,arguments));return a&&a.length?a[0]:void 0};
r.clear=function(){this.h.clear()};
r.Wc=function(){var a=B.apply(0,arguments);return a?a.join(","):"key"};function th(a,b){sh.call(this,a,3,b)}
w(th,sh);th.prototype.j=function(a){var b=B.apply(1,arguments),c=0,d=this.he(b);d&&(c=d.h);this.wd(c+a,b)};function uh(a,b){sh.call(this,a,2,b)}
w(uh,sh);uh.prototype.record=function(a){this.Ld(a,B.apply(1,arguments))};function vh(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
vh.prototype.stopPropagation=function(){this.j=!0};
vh.prototype.preventDefault=function(){this.defaultPrevented=!0};function wh(a,b){vh.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
ab(wh,vh);
wh.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;b=a.relatedTarget;b||(c=="mouseover"?b=a.fromElement:c=="mouseout"&&(b=a.toElement));this.relatedTarget=b;d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==
void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||(c=="keypress"?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType=a.pointerType;this.state=a.state;this.i=a;a.defaultPrevented&&wh.za.preventDefault.call(this)};
wh.prototype.stopPropagation=function(){wh.za.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
wh.prototype.preventDefault=function(){wh.za.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var xh="closure_listenable_"+(Math.random()*1E6|0);var yh=0;function zh(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.fc=e;this.key=++yh;this.Ob=this.Xb=!1}
function Ah(a){a.Ob=!0;a.listener=null;a.proxy=null;a.src=null;a.fc=null}
;function Bh(a){this.src=a;this.listeners={};this.h=0}
Bh.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=Ch(a,b,d,e);g>-1?(b=a[g],c||(b.Xb=!1)):(b=new zh(b,this.src,f,!!d,e),b.Xb=c,a.push(b));return b};
Bh.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Ch(e,b,c,d);return b>-1?(Ah(e[b]),Array.prototype.splice.call(e,b,1),e.length==0&&(delete this.listeners[a],this.h--),!0):!1};
function Dh(a,b){var c=b.type;c in a.listeners&&Ub(a.listeners[c],b)&&(Ah(b),a.listeners[c].length==0&&(delete a.listeners[c],a.h--))}
function Ch(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Ob&&f.listener==b&&f.capture==!!c&&f.fc==d)return e}return-1}
;var Eh="closure_lm_"+(Math.random()*1E6|0),Fh={},Gh=0;function Hh(a,b,c,d,e){if(d&&d.once)Ih(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Hh(a,b[f],c,d,e);else c=Jh(c),a&&a[xh]?a.listen(b,c,Ra(d)?!!d.capture:!!d,e):Kh(a,b,c,!1,d,e)}
function Kh(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Ra(e)?!!e.capture:!!e,h=Lh(a);h||(a[Eh]=h=new Bh(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=Mh();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Ug||(e=g),e===void 0&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Nh(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Gh++}}
function Mh(){function a(c){return b.call(a.src,a.listener,c)}
var b=Oh;return a}
function Ih(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Ih(a,b[f],c,d,e);else c=Jh(c),a&&a[xh]?a.h.add(String(b),c,!0,Ra(d)?!!d.capture:!!d,e):Kh(a,b,c,!0,d,e)}
function Ph(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Ph(a,b[f],c,d,e);else(d=Ra(d)?!!d.capture:!!d,c=Jh(c),a&&a[xh])?a.h.remove(String(b),c,d,e):a&&(a=Lh(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=Ch(b,c,d,e)),(c=a>-1?b[a]:null)&&Qh(c))}
function Qh(a){if(typeof a!=="number"&&a&&!a.Ob){var b=a.src;if(b&&b[xh])Dh(b.h,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Nh(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Gh--;(c=Lh(b))?(Dh(c,a),c.h==0&&(c.src=null,b[Eh]=null)):Ah(a)}}}
function Nh(a){return a in Fh?Fh[a]:Fh[a]="on"+a}
function Oh(a,b){if(a.Ob)a=!0;else{b=new wh(b,this);var c=a.listener,d=a.fc||a.src;a.Xb&&Qh(a);a=c.call(d,b)}return a}
function Lh(a){a=a[Eh];return a instanceof Bh?a:null}
var Rh="__closure_events_fn_"+(Math.random()*1E9>>>0);function Jh(a){if(typeof a==="function")return a;a[Rh]||(a[Rh]=function(b){return a.handleEvent(b)});
return a[Rh]}
;function Sh(){F.call(this);this.h=new Bh(this);this.oa=this;this.Y=null}
ab(Sh,F);Sh.prototype[xh]=!0;r=Sh.prototype;r.addEventListener=function(a,b,c,d){Hh(this,a,b,c,d)};
r.removeEventListener=function(a,b,c,d){Ph(this,a,b,c,d)};
function Th(a,b){var c=a.Y;if(c){var d=[];for(var e=1;c;c=c.Y)d.push(c),++e}a=a.oa;c=b.type||b;typeof b==="string"?b=new vh(b,a):b instanceof vh?b.target=b.target||a:(e=b,b=new vh(c,a),tg(b,e));e=!0;var f;if(d)for(f=d.length-1;!b.j&&f>=0;f--){var g=b.h=d[f];e=Uh(g,c,!0,b)&&e}b.j||(g=b.h=a,e=Uh(g,c,!0,b)&&e,b.j||(e=Uh(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=Uh(g,c,!1,b)&&e}
r.aa=function(){Sh.za.aa.call(this);this.removeAllListeners();this.Y=null};
r.listen=function(a,b,c,d){return this.h.add(String(a),b,!1,c,d)};
r.removeAllListeners=function(a){if(this.h){var b=this.h;a=a&&a.toString();var c=0,d;for(d in b.listeners)if(!a||d==a){for(var e=b.listeners[d],f=0;f<e.length;f++)++c,Ah(e[f]);delete b.listeners[d];b.h--}b=c}else b=0;return b};
function Uh(a,b,c,d){b=a.h.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Ob&&g.capture==c){var h=g.listener,k=g.fc||g.src;g.Xb&&Dh(a.h,g);e=h.call(k,d)!==!1&&e}}return e&&!d.defaultPrevented}
;var Vh=typeof AsyncContext!=="undefined"&&typeof AsyncContext.Snapshot==="function"?function(a){return a&&AsyncContext.Snapshot.wrap(a)}:function(a){return a};function Wh(a,b){this.j=a;this.o=b;this.i=0;this.h=null}
Wh.prototype.get=function(){if(this.i>0){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function Xh(a,b){a.o(b);a.i<100&&(a.i++,b.next=a.h,a.h=b)}
;function Yh(){this.i=this.h=null}
Yh.prototype.add=function(a,b){var c=Zh.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
Yh.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var Zh=new Wh(function(){return new $h},function(a){return a.reset()});
function $h(){this.next=this.scope=this.h=null}
$h.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
$h.prototype.reset=function(){this.next=this.scope=this.h=null};var ai,bi=!1,ci=new Yh;function di(a,b){ai||ei();bi||(ai(),bi=!0);ci.add(a,b)}
function ei(){var a=Promise.resolve(void 0);ai=function(){a.then(fi)}}
function fi(){for(var a;a=ci.remove();){try{a.h.call(a.scope)}catch(b){Kc(b)}Xh(Zh,a)}bi=!1}
;function gi(){}
function hi(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function ii(a){this.h=0;this.A=void 0;this.o=this.i=this.j=null;this.u=this.H=!1;if(a!=gi)try{var b=this;a.call(void 0,function(c){ji(b,2,c)},function(c){ji(b,3,c)})}catch(c){ji(this,3,c)}}
function ki(){this.next=this.context=this.h=this.i=this.child=null;this.j=!1}
ki.prototype.reset=function(){this.context=this.h=this.i=this.child=null;this.j=!1};
var li=new Wh(function(){return new ki},function(a){a.reset()});
function mi(a,b,c){var d=li.get();d.i=a;d.h=b;d.context=c;return d}
function ni(a){return new ii(function(b,c){c(a)})}
ii.prototype.then=function(a,b,c){return oi(this,Vh(typeof a==="function"?a:null),Vh(typeof b==="function"?b:null),c)};
ii.prototype.$goog_Thenable=!0;function pi(a,b,c,d){qi(a,mi(b||gi,c||null,d))}
r=ii.prototype;r.finally=function(a){var b=this;a=Vh(a);return new Promise(function(c,d){pi(b,function(e){a();c(e)},function(e){a();
d(e)})})};
r.wc=function(a,b){return oi(this,null,Vh(a),b)};
r.catch=ii.prototype.wc;r.cancel=function(a){if(this.h==0){var b=new ri(a);di(function(){si(this,b)},this)}};
function si(a,b){if(a.h==0)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.child==a&&(e=g),!(e&&d>1)));g=g.next)e||(f=g);e&&(c.h==0&&d==1?si(c,b):(f?(d=f,d.next==c.o&&(c.o=d),d.next=d.next.next):ti(c),ui(c,e,3,b)))}a.j=null}else ji(a,3,b)}
function qi(a,b){a.i||a.h!=2&&a.h!=3||vi(a);a.o?a.o.next=b:a.i=b;a.o=b}
function oi(a,b,c,d){var e=mi(null,null,null);e.child=new ii(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.h=c?function(h){try{var k=c.call(d,h);k===void 0&&h instanceof ri?g(h):f(k)}catch(l){g(l)}}:g});
e.child.j=a;qi(a,e);return e.child}
r.lf=function(a){this.h=0;ji(this,2,a)};
r.mf=function(a){this.h=0;ji(this,3,a)};
function ji(a,b,c){if(a.h==0){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.lf,f=a.mf;if(d instanceof ii){pi(d,e,f,a);var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Ra(d))try{var k=d.then;if(typeof k==="function"){wi(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.A=c,a.h=b,a.j=null,vi(a),b!=3||c instanceof ri||xi(a,c))}}
function wi(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function vi(a){a.H||(a.H=!0,di(a.be,a))}
function ti(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.o=null);return b}
r.be=function(){for(var a;a=ti(this);)ui(this,a,this.h,this.A);this.H=!1};
function ui(a,b,c,d){if(c==3&&b.h&&!b.j)for(;a&&a.u;a=a.j)a.u=!1;if(b.child)b.child.j=null,yi(b,c,d);else try{b.j?b.i.call(b.context):yi(b,c,d)}catch(e){zi.call(null,e)}Xh(li,b)}
function yi(a,b,c){b==2?a.i.call(a.context,c):a.h&&a.h.call(a.context,c)}
function xi(a,b){a.u=!0;di(function(){a.u&&zi.call(null,b)})}
var zi=Kc;function ri(a){cb.call(this,a)}
ab(ri,cb);ri.prototype.name="cancel";function Ai(a,b){Sh.call(this);this.j=a||1;this.i=b||C;this.o=Xa(this.hf,this);this.u=Za()}
ab(Ai,Sh);r=Ai.prototype;r.enabled=!1;r.Ca=null;r.setInterval=function(a){this.j=a;this.Ca&&this.enabled?(this.stop(),this.start()):this.Ca&&this.stop()};
r.hf=function(){if(this.enabled){var a=Za()-this.u;a>0&&a<this.j*.8?this.Ca=this.i.setTimeout(this.o,this.j-a):(this.Ca&&(this.i.clearTimeout(this.Ca),this.Ca=null),Th(this,"tick"),this.enabled&&(this.stop(),this.start()))}};
r.start=function(){this.enabled=!0;this.Ca||(this.Ca=this.i.setTimeout(this.o,this.j),this.u=Za())};
r.stop=function(){this.enabled=!1;this.Ca&&(this.i.clearTimeout(this.Ca),this.Ca=null)};
r.aa=function(){Ai.za.aa.call(this);this.stop();delete this.i};function Bi(a){F.call(this);this.G=a;this.j=0;this.o=100;this.u=!1;this.i=new Map;this.A=new Set;this.flushInterval=3E4;this.h=new Ai(this.flushInterval);this.h.listen("tick",this.Rb,!1,this);xc(this,this.h)}
w(Bi,F);r=Bi.prototype;r.sendIsolatedPayload=function(a){this.u=a;this.o=1};
function Ci(a){a.h.enabled||a.h.start();a.j++;a.j>=a.o&&a.Rb()}
r.Rb=function(){var a=this.i.values();a=[].concat(sa(a)).filter(function(b){return b.h.size});
a.length&&this.G.flush(a,this.u);Di(a);this.j=0;this.h.enabled&&this.h.stop()};
r.Eb=function(a){var b=B.apply(1,arguments);this.i.has(a)||this.i.set(a,new th(a,b))};
r.zc=function(a){var b=B.apply(1,arguments);this.i.has(a)||this.i.set(a,new uh(a,b))};
function Ei(a,b){return a.A.has(b)?void 0:a.i.get(b)}
r.Cb=function(a){this.Jd(a,1,B.apply(1,arguments))};
r.Jd=function(a,b){var c=B.apply(2,arguments),d=Ei(this,a);d&&d instanceof th&&(d.j(b,c),Ci(this))};
r.record=function(a,b){var c=B.apply(2,arguments),d=Ei(this,a);d&&d instanceof uh&&(d.record(b,c),Ci(this))};
function Di(a){for(var b=0;b<a.length;b++)a[b].clear()}
;function Fi(){}
Fi.prototype.serialize=function(a){var b=[];Gi(this,a,b);return b.join("")};
function Gi(a,b,c){if(b==null)c.push("null");else{if(typeof b=="object"){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Gi(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],typeof f!="function"&&(c.push(e),Hi(d,c),c.push(":"),Gi(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Hi(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Ii={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},Ji=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Hi(a,b){b.push('"',a.replace(Ji,function(c){var d=Ii[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),Ii[c]=d);return d}),'"')}
;function Ki(){Sh.call(this);this.headers=new Map;this.i=!1;this.K=null;this.o=this.X="";this.j=this.U=this.A=this.P=!1;this.G=0;this.u=null;this.ia="";this.ga=!1}
ab(Ki,Sh);var Li=/^https?$/i,Mi=["POST","PUT"],Ni=[];function Oi(a,b,c,d,e,f,g){var h=new Ki;Ni.push(h);b&&h.listen("complete",b);h.h.add("ready",h.Sd,!0,void 0,void 0);f&&(h.G=Math.max(0,f));g&&(h.ga=g);h.send(a,c,d,e)}
r=Ki.prototype;r.Sd=function(){this.dispose();Ub(Ni,this)};
r.send=function(a,b,c,d){if(this.K)throw Error("[goog.net.XhrIo] Object is active with another request="+this.X+"; newUri="+a);b=b?b.toUpperCase():"GET";this.X=a;this.o="";this.P=!1;this.i=!0;this.K=new XMLHttpRequest;this.K.onreadystatechange=Vh(Xa(this.pd,this));try{this.getStatus(),this.U=!0,this.K.open(b,String(a),!0),this.U=!1}catch(g){this.getStatus();Pi(this,g);return}a=c||"";c=new Map(this.headers);if(d)if(Object.getPrototypeOf(d)===Object.prototype)for(var e in d)c.set(e,d[e]);else if(typeof d.keys===
"function"&&typeof d.get==="function"){e=z(d.keys());for(var f=e.next();!f.done;f=e.next())f=f.value,c.set(f,d.get(f))}else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(function(g){return"content-type"==g.toLowerCase()});
e=C.FormData&&a instanceof C.FormData;!(Ob(Mi,b)>=0)||d||e||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");b=z(c);for(d=b.next();!d.done;d=b.next())c=z(d.value),d=c.next().value,c=c.next().value,this.K.setRequestHeader(d,c);this.ia&&(this.K.responseType=this.ia);"withCredentials"in this.K&&this.K.withCredentials!==this.ga&&(this.K.withCredentials=this.ga);try{this.u&&(clearTimeout(this.u),this.u=null),this.G>0&&(this.getStatus(),this.u=setTimeout(this.kf.bind(this),this.G)),
this.getStatus(),this.A=!0,this.K.send(a),this.A=!1}catch(g){this.getStatus(),Pi(this,g)}};
r.kf=function(){typeof Oa!="undefined"&&this.K&&(this.o="Timed out after "+this.G+"ms, aborting",this.getStatus(),Th(this,"timeout"),this.abort(8))};
function Pi(a,b){a.i=!1;a.K&&(a.j=!0,a.K.abort(),a.j=!1);a.o=b;Qi(a);Ri(a)}
function Qi(a){a.P||(a.P=!0,Th(a,"complete"),Th(a,"error"))}
r.abort=function(){this.K&&this.i&&(this.getStatus(),this.i=!1,this.j=!0,this.K.abort(),this.j=!1,Th(this,"complete"),Th(this,"abort"),Ri(this))};
r.aa=function(){this.K&&(this.i&&(this.i=!1,this.j=!0,this.K.abort(),this.j=!1),Ri(this,!0));Ki.za.aa.call(this)};
r.pd=function(){this.da||(this.U||this.A||this.j?Si(this):this.Ce())};
r.Ce=function(){Si(this)};
function Si(a){if(a.i&&typeof Oa!="undefined")if(a.A&&(a.K?a.K.readyState:0)==4)setTimeout(a.pd.bind(a),0);else if(Th(a,"readystatechange"),a.isComplete()){a.getStatus();a.i=!1;try{if(Ti(a))Th(a,"complete"),Th(a,"success");else{try{var b=(a.K?a.K.readyState:0)>2?a.K.statusText:""}catch(c){b=""}a.o=b+" ["+a.getStatus()+"]";Qi(a)}}finally{Ri(a)}}}
function Ri(a,b){if(a.K){a.u&&(clearTimeout(a.u),a.u=null);var c=a.K;a.K=null;b||Th(a,"ready");try{c.onreadystatechange=null}catch(d){}}}
r.isActive=function(){return!!this.K};
r.isComplete=function(){return(this.K?this.K.readyState:0)==4};
function Ti(a){var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}if(!c){if(b=b===0)a=dc(1,String(a.X)),!a&&C.self&&C.self.location&&(a=C.self.location.protocol.slice(0,-1)),b=!Li.test(a?a.toLowerCase():"");c=b}return c}
r.getStatus=function(){try{return(this.K?this.K.readyState:0)>2?this.K.status:-1}catch(a){return-1}};
r.getLastError=function(){return typeof this.o==="string"?this.o:String(this.o)};function Ui(){}
Ui.prototype.send=function(a,b,c){b=b===void 0?function(){}:b;
c=c===void 0?function(){}:c;
Oi(a.url,function(d){d=d.target;if(Ti(d)){try{var e=d.K?d.K.responseText:""}catch(f){e=""}b(e)}else c(d.getStatus())},a.requestType,a.body,a.uc,a.timeoutMillis,a.withCredentials)};
Ui.prototype.ec=function(){return 1};function Vi(a,b){this.logger=a;this.event=b;this.startTime=Wi()}
Vi.prototype.done=function(){this.logger.Lb(this.event,Wi()-this.startTime)};
function Xi(){zc.apply(this,arguments)}
w(Xi,zc);function Yi(a,b){var c=Wi();b=b();a.Lb("n",Wi()-c);return b}
function Zi(){Xi.apply(this,arguments)}
w(Zi,Xi);r=Zi.prototype;r.Hc=function(){};
r.vb=function(){};
r.Lb=function(){};
r.Ea=function(){};
r.sc=function(){};
r.Bd=function(){};
function $i(a){return{ef:new Cc(a),errorCount:new Gc(a),eventCount:new Ec(a),ae:new Fc(a),Oh:new Dc(a),Qh:new Hc(a),jh:new Ic(a),Ph:new Jc(a)}}
function aj(a,b,c,d,e){a=lh(kh(new jh(1828,"0"),a),new Ui);b.length&&mh(a,Lf(new Kf,b));e!==void 0&&(a.Ra=e);d&&(a.j=!0);var f=new oh(1828,"","",!1,"",nh(a));xc(f,a);var g=new Bi({flush:function(h){try{f.flush(h)}catch(k){c(k)}}});
g.addOnDisposeCallback(function(){setTimeout(function(){try{g.Rb()}finally{f.dispose()}})});
g.o=1E5;g.flushInterval=3E4;g.h.setInterval(3E4);return g}
function bj(a,b){F.call(this);var c=this;this.callback=a;this.i=b;this.h=-b;this.addOnDisposeCallback(function(){return void clearTimeout(c.timer)})}
w(bj,F);function cj(a){if(a.timer===void 0){var b=Math.max(0,a.h+a.i-Wi());a.timer=setTimeout(function(){try{a.callback()}finally{a.h=Wi(),a.timer=void 0}},b)}}
function dj(a,b,c){Xi.call(this);this.metrics=a;this.Fa=b;this.kb=c}
w(dj,Xi);dj.prototype.Hc=function(a){this.metrics.ef.record(a,this.Fa)};
dj.prototype.vb=function(a){this.metrics.eventCount.h(a,this.Fa)};
dj.prototype.Lb=function(a,b){this.metrics.ae.record(b,a,this.kb,this.Fa)};
dj.prototype.Ea=function(a){this.metrics.errorCount.h(a,this.kb,this.Fa)};
function ej(a,b){b=b===void 0?[]:b;var c={Fa:a.Fa||"_",kb:a.kb||"",dc:a.dc||[],jc:a.jc|0,Ra:a.Ra,kc:a.kc||function(){},
Bc:!!a.Bc,Bb:a.Bb||function(e,f){return aj(e,f,c.kc,c.Bc,c.Ra)}};
b=c.Bb("41",c.dc.concat(b));dj.call(this,$i(b),c.Fa,c.kb);var d=this;this.options=c;this.service=b;this.i=!a.Bb;this.h=new bj(function(){return void d.service.Rb()},c.jc);
this.addOnDisposeCallback(function(){d.h.dispose();d.i&&d.service.dispose()})}
w(ej,dj);ej.prototype.Bd=function(a){var b=this;this.h.dispose();this.i&&this.service.dispose();this.service=this.options.Bb("41",this.options.dc.concat(a));this.h=new bj(function(){return void b.service.Rb()},this.options.jc);
this.metrics=$i(this.service)};
ej.prototype.sc=function(){cj(this.h)};
function Wi(){var a,b,c;return(c=(a=globalThis.performance)==null?void 0:(b=a.now)==null?void 0:b.call(a))!=null?c:Date.now()}
;function fj(a){this.F=J(a,0,"bfkj")}
w(fj,M);var gj=function(a){return Wd(function(b){return b instanceof a&&!(I(b.F)&2)})}(fj);function hj(a){this.F=J(a)}
w(hj,M);function rc(a){this.F=J(a)}
w(rc,M);function ij(a){this.F=J(a)}
w(ij,M);var jj=Jf(ij);function kj(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function lj(a,b,c){if(a.disable)return new Zi;var d=b&&uc(mf(b,hj,7))?pc(b):[];if(c)return c.Bd(d),c.share();a={Fa:a.Fa,kb:a.kb,dc:a.ph,jc:a.zh,Bc:uc(b==null?void 0:mf(b,hj,10)),Ra:a.Ra,kc:a.kc,Bb:a.Bb};d=d===void 0?[]:d;return new ej(a,d)}
function mj(a){function b(v,x,y,H){Promise.resolve().then(function(){k.done();h.sc();h.dispose();g.resolve({Nd:v,bf:x,Bh:y,lh:H})})}
function c(v,x,y,H){if(!d.logger.da){var K="k";x?K="h":y&&(K="u");K!=="k"?H!==0&&(d.logger.vb(K),d.logger.Lb(K,v)):d.i<=0?(d.logger.vb(K),d.logger.Lb(K,v),d.i=Math.floor(Math.random()*200)):d.i--}}
F.call(this);var d=this;this.i=Math.floor(Math.random()*200);this.h=new ij;if("challenge"in a&&gj(a.challenge)){var e=qf(a.challenge,4);var f=qf(a.challenge,5);qf(a.challenge,7)&&(this.h=jj(qf(a.challenge,7)))}else e=a.program,f=a.ke;this.addOnDisposeCallback(function(){var v,x,y;return A(function(H){if(H.h==1)return H.yield(d.j,2);v=H.i;x=v.bf;(y=x)==null||y();H.h=0})});
this.logger=lj(a.Ae||{},this.h,a.mh);xc(this,this.logger);var g=new kj;this.j=g.promise;this.logger.vb("t");var h=this.logger.share(),k=new Vi(h,"t");if(!C[f])throw this.logger.Ea(25),Error("EGOU");if(!C[f].a)throw this.logger.Ea(26),Error("ELIU");try{var l=C[f].a;f=[];var m=[];if(uc(mf(this.h,hj,7))){for(var n=pc(this.h),p=0;p<n.length;p++)f.push(n[p]),m.push(1);var t=tc(this.h);for(n=0;n<t.length;n++)f.push(t[n]),m.push(2)}this.o=z(l(e,b,!0,a.Nh,c,[f,m],qf(this.h,5))).next().value;this.af=g.promise.then(function(){})}catch(v){throw this.logger.Ea(28),
v;
}}
w(mj,F);mj.prototype.snapshot=function(a){if(this.da)throw Error("Already disposed");this.logger.vb("n");var b=this.logger.share();return this.j.then(function(c){var d=c.Nd;return new Promise(function(e){var f=new Vi(b,"n");d(function(g){f.done();b.Hc(g.length);b.sc();b.dispose();e(g)},[a.cd,
a.cf,a.qf,a.df])})})};
mj.prototype.yd=function(a){var b=this;if(this.da)throw Error("Already disposed");this.logger.vb("n");var c=Yi(this.logger,function(){return b.o([a.cd,a.cf,a.qf,a.df])});
this.logger.Hc(c.length);this.logger.sc();return c};var nj=window;function oj(a){var b=pj;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function qj(){var a=[];oj(function(b){a.push(b)});
return a}
var pj={rf:"allow-forms",sf:"allow-modals",tf:"allow-orientation-lock",uf:"allow-pointer-lock",vf:"allow-popups",wf:"allow-popups-to-escape-sandbox",xf:"allow-presentation",yf:"allow-same-origin",zf:"allow-scripts",Af:"allow-top-navigation",Bf:"allow-top-navigation-by-user-activation"},rj=hi(function(){return qj()});
function sj(){var a=tj(),b={};Pb(rj(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function tj(){var a=a===void 0?document:a;return a.createElement("iframe")}
;function uj(a){typeof a=="number"&&(a=Math.round(a)+"px");return a}
;var vj=(new Date).getTime();function wj(a){Sh.call(this);var b=this;this.A=this.j=0;this.Ba=a!=null?a:{pa:function(e,f){return setTimeout(e,f)},
qa:function(e){clearTimeout(e)}};
var c,d;this.i=(d=(c=window.navigator)==null?void 0:c.onLine)!=null?d:!0;this.o=function(){return A(function(e){return e.yield(xj(b),0)})};
window.addEventListener("offline",this.o);window.addEventListener("online",this.o);this.A||yj(this)}
w(wj,Sh);function zj(){var a=Aj;wj.h||(wj.h=new wj(a));return wj.h}
wj.prototype.dispose=function(){window.removeEventListener("offline",this.o);window.removeEventListener("online",this.o);this.Ba.qa(this.A);delete wj.h};
wj.prototype.va=function(){return this.i};
function yj(a){a.A=a.Ba.pa(function(){var b;return A(function(c){if(c.h==1)return a.i?((b=window.navigator)==null?0:b.onLine)?c.D(3):c.yield(xj(a),3):c.yield(xj(a),3);yj(a);c.h=0})},3E4)}
function xj(a,b){return a.u?a.u:a.u=new Promise(function(c){var d,e,f,g;return A(function(h){switch(h.h){case 1:return d=window.AbortController?new window.AbortController:void 0,f=(e=d)==null?void 0:e.signal,g=!1,Aa(h,2,3),d&&(a.j=a.Ba.pa(function(){d.abort()},b||2E4)),h.yield(fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:h.P=[h.j];h.o=0;h.u=0;a.u=void 0;a.j&&(a.Ba.qa(a.j),a.j=0);g!==a.i&&(a.i=g,a.i?Th(a,"networkstatus-online"):Th(a,"networkstatus-offline"));c(g);Ca(h);break;case 2:Ba(h),g=!1,h.D(3)}})})}
;function Bj(){this.data=[];this.h=-1}
Bj.prototype.set=function(a,b){b=b===void 0?!0:b;0<=a&&a<52&&Number.isInteger(a)&&this.data[a]!==b&&(this.data[a]=b,this.h=-1)};
Bj.prototype.get=function(a){return!!this.data[a]};
function Cj(a){a.h===-1&&(a.h=a.data.reduce(function(b,c,d){return b+(c?Math.pow(2,d):0)},0));
return a.h}
;function Dj(){this.blockSize=-1}
;function Ej(){this.blockSize=-1;this.blockSize=64;this.h=[];this.u=[];this.H=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.o=this.i=0;this.reset()}
ab(Ej,Dj);Ej.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.o=this.i=0};
function Fj(a,b,c){c||(c=0);var d=a.H;if(typeof b==="string")for(var e=0;e<16;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;e<16;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(b=16;b<80;b++)c=d[b-3]^d[b-8]^d[b-14]^d[b-16],d[b]=(c<<1|c>>>31)&4294967295;b=a.h[0];c=a.h[1];e=a.h[2];for(var f=a.h[3],g=a.h[4],h,k,l=0;l<80;l++)l<40?l<20?(h=f^c&(e^f),k=1518500249):(h=c^e^f,k=1859775393):l<60?(h=c&e|f&(c|e),k=2400959708):(h=c^e^f,k=3395469782),
h=(b<<5|b>>>27)+h+g+k+d[l]&4294967295,g=f,f=e,e=(c<<30|c>>>2)&4294967295,c=b,b=h;a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+e&4294967295;a.h[3]=a.h[3]+f&4294967295;a.h[4]=a.h[4]+g&4294967295}
Ej.prototype.update=function(a,b){if(a!=null){b===void 0&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.u,f=this.i;d<b;){if(f==0)for(;d<=c;)Fj(this,a,d),d+=this.blockSize;if(typeof a==="string")for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Fj(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Fj(this,e);f=0;break}}this.i=f;this.o+=b}};
Ej.prototype.digest=function(){var a=[],b=this.o*8;this.i<56?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;c>=56;c--)this.u[c]=b&255,b/=256;Fj(this,this.u);for(c=b=0;c<5;c++)for(var d=24;d>=0;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function Gj(a){return typeof a.className=="string"?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Hj(a,b){typeof a.className=="string"?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Ij(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:Gj(a).match(/\S+/g)||[],b=Ob(a,b)>=0);return b}
function Jj(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Ij(a,"inverted-hdpi")&&Hj(a,Array.prototype.filter.call(a.classList?a.classList:Gj(a).match(/\S+/g)||[],function(b){return b!="inverted-hdpi"}).join(" "))}
;function Kj(){}
Kj.prototype.next=function(){return Lj};
var Lj={done:!0,value:void 0};Kj.prototype.ob=function(){return this};function Mj(a){if(a instanceof Nj||a instanceof Oj||a instanceof Pj)return a;if(typeof a.next=="function")return new Nj(function(){return a});
if(typeof a[Symbol.iterator]=="function")return new Nj(function(){return a[Symbol.iterator]()});
if(typeof a.ob=="function")return new Nj(function(){return a.ob()});
throw Error("Not an iterator or iterable.");}
function Nj(a){this.h=a}
Nj.prototype.ob=function(){return new Oj(this.h())};
Nj.prototype[Symbol.iterator]=function(){return new Pj(this.h())};
Nj.prototype.i=function(){return new Pj(this.h())};
function Oj(a){this.h=a}
w(Oj,Kj);Oj.prototype.next=function(){return this.h.next()};
Oj.prototype[Symbol.iterator]=function(){return new Pj(this.h)};
Oj.prototype.i=function(){return new Pj(this.h)};
function Pj(a){Nj.call(this,function(){return a});
this.j=a}
w(Pj,Nj);Pj.prototype.next=function(){return this.j.next()};function N(a){F.call(this);this.u=1;this.j=[];this.o=0;this.h=[];this.i={};this.A=!!a}
ab(N,F);r=N.prototype;r.subscribe=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.u;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.u=e+3;d.push(e);return e};
r.unsubscribe=function(a,b,c){if(a=this.i[a]){var d=this.h;if(a=a.find(function(e){return d[e+1]==b&&d[e+2]==c}))return this.Tb(a)}return!1};
r.Tb=function(a){var b=this.h[a];if(b){var c=this.i[b];this.o!=0?(this.j.push(a),this.h[a+1]=function(){}):(c&&Ub(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
r.mb=function(a,b){var c=this.i[a];if(c){var d=Array(arguments.length-1),e=arguments.length,f;for(f=1;f<e;f++)d[f-1]=arguments[f];if(this.A)for(f=0;f<c.length;f++)e=c[f],Qj(this.h[e+1],this.h[e+2],d);else{this.o++;try{for(f=0,e=c.length;f<e&&!this.da;f++){var g=c[f];this.h[g+1].apply(this.h[g+2],d)}}finally{if(this.o--,this.j.length>0&&this.o==0)for(;c=this.j.pop();)this.Tb(c)}}return f!=0}return!1};
function Qj(a,b,c){di(function(){a.apply(b,c)})}
r.clear=function(a){if(a){var b=this.i[a];b&&(b.forEach(this.Tb,this),delete this.i[a])}else this.h.length=0,this.i={}};
r.aa=function(){N.za.aa.call(this);this.clear();this.j.length=0};function Rj(a){this.h=a}
Rj.prototype.set=function(a,b){b===void 0?this.h.remove(a):this.h.set(a,(new Fi).serialize(b))};
Rj.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(b!==null)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Rj.prototype.remove=function(a){this.h.remove(a)};function Sj(a){this.h=a}
ab(Sj,Rj);function Tj(a){this.data=a}
function Uj(a){return a===void 0||a instanceof Tj?a:new Tj(a)}
Sj.prototype.set=function(a,b){Sj.za.set.call(this,a,Uj(b))};
Sj.prototype.i=function(a){a=Sj.za.get.call(this,a);if(a===void 0||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Sj.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,a===void 0)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Vj(a){this.h=a}
ab(Vj,Sj);Vj.prototype.set=function(a,b,c){if(b=Uj(b)){if(c){if(c<Za()){Vj.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Za()}Vj.za.set.call(this,a,b)};
Vj.prototype.i=function(a){var b=Vj.za.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Za()||c&&c>Za())Vj.prototype.remove.call(this,a);else return b}};function Wj(){}
;function Xj(){}
ab(Xj,Wj);Xj.prototype[Symbol.iterator]=function(){return Mj(this.ob(!0)).i()};
Xj.prototype.clear=function(){var a=Array.from(this);a=z(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function Yj(a){this.h=a;this.i=null}
ab(Yj,Xj);r=Yj.prototype;r.isAvailable=function(){var a=this.h;if(a)try{a.setItem("__sak","1");a.removeItem("__sak");var b=!0}catch(c){b=c instanceof DOMException&&(c.name==="QuotaExceededError"||c.code===22||c.code===1014||c.name==="NS_ERROR_DOM_QUOTA_REACHED")&&a&&a.length!==0}else b=!1;return this.i=b};
r.set=function(a,b){Zj(this);try{this.h.setItem(a,b)}catch(c){if(this.h.length==0)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
r.get=function(a){Zj(this);a=this.h.getItem(a);if(typeof a!=="string"&&a!==null)throw"Storage mechanism: Invalid value was encountered";return a};
r.remove=function(a){Zj(this);this.h.removeItem(a)};
r.ob=function(a){Zj(this);var b=0,c=this.h,d=new Kj;d.next=function(){if(b>=c.length)return Lj;var e=c.key(b++);if(a)return{value:e,done:!1};e=c.getItem(e);if(typeof e!=="string")throw"Storage mechanism: Invalid value was encountered";return{value:e,done:!1}};
return d};
r.clear=function(){Zj(this);this.h.clear()};
r.key=function(a){Zj(this);return this.h.key(a)};
function Zj(a){if(a.h==null)throw Error("Storage mechanism: Storage unavailable");var b;((b=a.i)!=null?b:a.isAvailable())||Kc(Error("Storage mechanism: Storage unavailable"))}
;function ak(){var a=null;try{a=C.localStorage||null}catch(b){}Yj.call(this,a)}
ab(ak,Yj);function bk(a,b){this.i=a;this.h=b+"::"}
ab(bk,Xj);bk.prototype.set=function(a,b){this.i.set(this.h+a,b)};
bk.prototype.get=function(a){return this.i.get(this.h+a)};
bk.prototype.remove=function(a){this.i.remove(this.h+a)};
bk.prototype.ob=function(a){var b=this.i[Symbol.iterator](),c=this,d=new Kj;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.h.length)!=c.h;){e=b.next();if(e.done)return e;e=e.value}return{value:a?e.slice(c.h.length):c.i.get(e),done:!1}};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var O={},ck=typeof Uint8Array!=="undefined"&&typeof Uint16Array!=="undefined"&&typeof Int32Array!=="undefined";O.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if(typeof c!=="object")throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
O.Sc=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var dk={pb:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
gd:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},ek={pb:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
gd:function(a){return[].concat.apply([],a)}};
O.Ze=function(){ck?(O.lb=Uint8Array,O.Ha=Uint16Array,O.Id=Int32Array,O.assign(O,dk)):(O.lb=Array,O.Ha=Array,O.Id=Array,O.assign(O,ek))};
O.Ze();var fk=!0;try{new Uint8Array(1)}catch(a){fk=!1}
function gk(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if((f&64512)===55296&&b+1<d){var g=a.charCodeAt(b+1);(g&64512)===56320&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=f<128?1:f<2048?2:f<65536?3:4}var h=new O.lb(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),(f&64512)===55296&&b+1<d&&(g=a.charCodeAt(b+1),(g&64512)===56320&&(f=65536+(f-55296<<10)+(g-56320),b++)),f<128?h[c++]=f:(f<2048?h[c++]=192|f>>>6:(f<65536?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var hk={};hk=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;c!==0;){f=c>2E3?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var ik={},jk,kk=[],lk=0;lk<256;lk++){jk=lk;for(var mk=0;mk<8;mk++)jk=jk&1?3988292384^jk>>>1:jk>>>1;kk[lk]=jk}ik=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^kk[(a^b[d])&255];return a^-1};var nk={};nk={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function ok(a){for(var b=a.length;--b>=0;)a[b]=0}
var pk=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],qk=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],rk=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],sk=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],tk=Array(576);ok(tk);var uk=Array(60);ok(uk);var vk=Array(512);ok(vk);var wk=Array(256);ok(wk);var xk=Array(29);ok(xk);var yk=Array(30);ok(yk);function zk(a,b,c,d,e){this.zd=a;this.ee=b;this.de=c;this.Xd=d;this.ze=e;this.kd=a&&a.length}
var Ak,Bk,Ck;function Dk(a,b){this.ed=a;this.xb=0;this.Wa=b}
function Ek(a,b){a.Z[a.pending++]=b&255;a.Z[a.pending++]=b>>>8&255}
function Fk(a,b,c){a.ha>16-c?(a.na|=b<<a.ha&65535,Ek(a,a.na),a.na=b>>16-a.ha,a.ha+=c-16):(a.na|=b<<a.ha&65535,a.ha+=c)}
function Gk(a,b,c){Fk(a,c[b*2],c[b*2+1])}
function Hk(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(--b>0);return c>>>1}
function Ik(a,b,c){var d=Array(16),e=0,f;for(f=1;f<=15;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[c*2+1],e!==0&&(a[c*2]=Hk(d[e]++,e))}
function Jk(a){var b;for(b=0;b<286;b++)a.ra[b*2]=0;for(b=0;b<30;b++)a.Za[b*2]=0;for(b=0;b<19;b++)a.ja[b*2]=0;a.ra[512]=1;a.Na=a.Ab=0;a.xa=a.matches=0}
function Kk(a){a.ha>8?Ek(a,a.na):a.ha>0&&(a.Z[a.pending++]=a.na);a.na=0;a.ha=0}
function Lk(a,b,c){Kk(a);Ek(a,c);Ek(a,~c);O.pb(a.Z,a.window,b,c,a.pending);a.pending+=c}
function Mk(a,b,c,d){var e=b*2,f=c*2;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function Nk(a,b,c){for(var d=a.ba[c],e=c<<1;e<=a.La;){e<a.La&&Mk(b,a.ba[e+1],a.ba[e],a.depth)&&e++;if(Mk(b,d,a.ba[e],a.depth))break;a.ba[c]=a.ba[e];c=e;e<<=1}a.ba[c]=d}
function Ok(a,b,c){var d=0;if(a.xa!==0){do{var e=a.Z[a.Gb+d*2]<<8|a.Z[a.Gb+d*2+1];var f=a.Z[a.Gc+d];d++;if(e===0)Gk(a,f,b);else{var g=wk[f];Gk(a,g+256+1,b);var h=pk[g];h!==0&&(f-=xk[g],Fk(a,f,h));e--;g=e<256?vk[e]:vk[256+(e>>>7)];Gk(a,g,c);h=qk[g];h!==0&&(e-=yk[g],Fk(a,e,h))}}while(d<a.xa)}Gk(a,256,b)}
function Pk(a,b){var c=b.ed,d=b.Wa.zd,e=b.Wa.kd,f=b.Wa.Xd,g,h=-1;a.La=0;a.sb=573;for(g=0;g<f;g++)c[g*2]!==0?(a.ba[++a.La]=h=g,a.depth[g]=0):c[g*2+1]=0;for(;a.La<2;){var k=a.ba[++a.La]=h<2?++h:0;c[k*2]=1;a.depth[k]=0;a.Na--;e&&(a.Ab-=d[k*2+1])}b.xb=h;for(g=a.La>>1;g>=1;g--)Nk(a,c,g);k=f;do g=a.ba[1],a.ba[1]=a.ba[a.La--],Nk(a,c,1),d=a.ba[1],a.ba[--a.sb]=g,a.ba[--a.sb]=d,c[k*2]=c[g*2]+c[d*2],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[g*2+1]=c[d*2+1]=k,a.ba[1]=k++,Nk(a,c,1);while(a.La>=
2);a.ba[--a.sb]=a.ba[1];g=b.ed;k=b.xb;d=b.Wa.zd;e=b.Wa.kd;f=b.Wa.ee;var l=b.Wa.de,m=b.Wa.ze,n,p=0;for(n=0;n<=15;n++)a.Ia[n]=0;g[a.ba[a.sb]*2+1]=0;for(b=a.sb+1;b<573;b++){var t=a.ba[b];n=g[g[t*2+1]*2+1]+1;n>m&&(n=m,p++);g[t*2+1]=n;if(!(t>k)){a.Ia[n]++;var v=0;t>=l&&(v=f[t-l]);var x=g[t*2];a.Na+=x*(n+v);e&&(a.Ab+=x*(d[t*2+1]+v))}}if(p!==0){do{for(n=m-1;a.Ia[n]===0;)n--;a.Ia[n]--;a.Ia[n+1]+=2;a.Ia[m]--;p-=2}while(p>0);for(n=m;n!==0;n--)for(t=a.Ia[n];t!==0;)d=a.ba[--b],d>k||(g[d*2+1]!==n&&(a.Na+=(n-g[d*
2+1])*g[d*2],g[d*2+1]=n),t--)}Ik(c,h,a.Ia)}
function Qk(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;f===0&&(h=138,k=3);b[(c+1)*2+1]=65535;for(d=0;d<=c;d++){var l=f;f=b[(d+1)*2+1];++g<h&&l===f||(g<k?a.ja[l*2]+=g:l!==0?(l!==e&&a.ja[l*2]++,a.ja[32]++):g<=10?a.ja[34]++:a.ja[36]++,g=0,e=l,f===0?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4))}}
function Rk(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;f===0&&(h=138,k=3);for(d=0;d<=c;d++){var l=f;f=b[(d+1)*2+1];if(!(++g<h&&l===f)){if(g<k){do Gk(a,l,a.ja);while(--g!==0)}else l!==0?(l!==e&&(Gk(a,l,a.ja),g--),Gk(a,16,a.ja),Fk(a,g-3,2)):g<=10?(Gk(a,17,a.ja),Fk(a,g-3,3)):(Gk(a,18,a.ja),Fk(a,g-11,7));g=0;e=l;f===0?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4)}}}
function Sk(a){var b=4093624447,c;for(c=0;c<=31;c++,b>>>=1)if(b&1&&a.ra[c*2]!==0)return 0;if(a.ra[18]!==0||a.ra[20]!==0||a.ra[26]!==0)return 1;for(c=32;c<256;c++)if(a.ra[c*2]!==0)return 1;return 0}
var Tk=!1;function Uk(a,b,c){a.Z[a.Gb+a.xa*2]=b>>>8&255;a.Z[a.Gb+a.xa*2+1]=b&255;a.Z[a.Gc+a.xa]=c&255;a.xa++;b===0?a.ra[c*2]++:(a.matches++,b--,a.ra[(wk[c]+256+1)*2]++,a.Za[(b<256?vk[b]:vk[256+(b>>>7)])*2]++);return a.xa===a.Kb-1}
;function Vk(a,b){a.msg=nk[b];return b}
function Wk(a){for(var b=a.length;--b>=0;)a[b]=0}
function Xk(a){var b=a.state,c=b.pending;c>a.S&&(c=a.S);c!==0&&(O.pb(a.output,b.Z,b.Nb,c,a.yb),a.yb+=c,b.Nb+=c,a.Tc+=c,a.S-=c,b.pending-=c,b.pending===0&&(b.Nb=0))}
function Yk(a,b){var c=a.ta>=0?a.ta:-1,d=a.v-a.ta,e=0;if(a.level>0){a.M.Ac===2&&(a.M.Ac=Sk(a));Pk(a,a.ic);Pk(a,a.ac);Qk(a,a.ra,a.ic.xb);Qk(a,a.Za,a.ac.xb);Pk(a,a.Yc);for(e=18;e>=3&&a.ja[sk[e]*2+1]===0;e--);a.Na+=3*(e+1)+5+5+4;var f=a.Na+3+7>>>3;var g=a.Ab+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&c!==-1)Fk(a,b?1:0,3),Lk(a,c,d);else if(a.strategy===4||g===f)Fk(a,2+(b?1:0),3),Ok(a,tk,uk);else{Fk(a,4+(b?1:0),3);c=a.ic.xb+1;d=a.ac.xb+1;e+=1;Fk(a,c-257,5);Fk(a,d-1,5);Fk(a,e-4,4);for(f=0;f<e;f++)Fk(a,
a.ja[sk[f]*2+1],3);Rk(a,a.ra,c-1);Rk(a,a.Za,d-1);Ok(a,a.ra,a.Za)}Jk(a);b&&Kk(a);a.ta=a.v;Xk(a.M)}
function P(a,b){a.Z[a.pending++]=b}
function Zk(a,b){a.Z[a.pending++]=b>>>8&255;a.Z[a.pending++]=b&255}
function $k(a,b){var c=a.nd,d=a.v,e=a.wa,f=a.od,g=a.v>a.la-262?a.v-(a.la-262):0,h=a.window,k=a.Xa,l=a.Ga,m=a.v+258,n=h[d+e-1],p=h[d+e];a.wa>=a.jd&&(c>>=2);f>a.B&&(f=a.B);do{var t=b;if(h[t+e]===p&&h[t+e-1]===n&&h[t]===h[d]&&h[++t]===h[d+1]){d+=2;for(t++;h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&d<m;);t=258-(m-d);d=m-258;if(t>e){a.wb=b;e=t;if(t>=f)break;n=h[d+e-1];p=h[d+e]}}}while((b=l[b&k])>g&&--c!==0);return e<=
a.B?e:a.B}
function al(a){var b=a.la,c;do{var d=a.Gd-a.B-a.v;if(a.v>=b+(b-262)){O.pb(a.window,a.window,b,b,0);a.wb-=b;a.v-=b;a.ta-=b;var e=c=a.hc;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.Ga[--e],a.Ga[e]=f>=b?f-b:0;while(--c);d+=b}if(a.M.ma===0)break;e=a.M;c=a.window;f=a.v+a.B;var g=e.ma;g>d&&(g=d);g===0?c=0:(e.ma-=g,O.pb(c,e.input,e.gb,g,f),e.state.wrap===1?e.J=hk(e.J,c,g,f):e.state.wrap===2&&(e.J=ik(e.J,c,g,f)),e.gb+=g,e.jb+=g,c=g);a.B+=c;if(a.B+a.sa>=3)for(d=a.v-a.sa,a.R=a.window[d],
a.R=(a.R<<a.Ka^a.window[d+1])&a.Ja;a.sa&&!(a.R=(a.R<<a.Ka^a.window[d+3-1])&a.Ja,a.Ga[d&a.Xa]=a.head[a.R],a.head[a.R]=d,d++,a.sa--,a.B+a.sa<3););}while(a.B<262&&a.M.ma!==0)}
function bl(a,b){for(var c;;){if(a.B<262){al(a);if(a.B<262&&b===0)return 1;if(a.B===0)break}c=0;a.B>=3&&(a.R=(a.R<<a.Ka^a.window[a.v+3-1])&a.Ja,c=a.Ga[a.v&a.Xa]=a.head[a.R],a.head[a.R]=a.v);c!==0&&a.v-c<=a.la-262&&(a.T=$k(a,c));if(a.T>=3)if(c=Uk(a,a.v-a.wb,a.T-3),a.B-=a.T,a.T<=a.Ic&&a.B>=3){a.T--;do a.v++,a.R=(a.R<<a.Ka^a.window[a.v+3-1])&a.Ja,a.Ga[a.v&a.Xa]=a.head[a.R],a.head[a.R]=a.v;while(--a.T!==0);a.v++}else a.v+=a.T,a.T=0,a.R=a.window[a.v],a.R=(a.R<<a.Ka^a.window[a.v+1])&a.Ja;else c=Uk(a,0,
a.window[a.v]),a.B--,a.v++;if(c&&(Yk(a,!1),a.M.S===0))return 1}a.sa=a.v<2?a.v:2;return b===4?(Yk(a,!0),a.M.S===0?3:4):a.xa&&(Yk(a,!1),a.M.S===0)?1:2}
function cl(a,b){for(var c,d;;){if(a.B<262){al(a);if(a.B<262&&b===0)return 1;if(a.B===0)break}c=0;a.B>=3&&(a.R=(a.R<<a.Ka^a.window[a.v+3-1])&a.Ja,c=a.Ga[a.v&a.Xa]=a.head[a.R],a.head[a.R]=a.v);a.wa=a.T;a.rd=a.wb;a.T=2;c!==0&&a.wa<a.Ic&&a.v-c<=a.la-262&&(a.T=$k(a,c),a.T<=5&&(a.strategy===1||a.T===3&&a.v-a.wb>4096)&&(a.T=2));if(a.wa>=3&&a.T<=a.wa){d=a.v+a.B-3;c=Uk(a,a.v-1-a.rd,a.wa-3);a.B-=a.wa-1;a.wa-=2;do++a.v<=d&&(a.R=(a.R<<a.Ka^a.window[a.v+3-1])&a.Ja,a.Ga[a.v&a.Xa]=a.head[a.R],a.head[a.R]=a.v);
while(--a.wa!==0);a.eb=0;a.T=2;a.v++;if(c&&(Yk(a,!1),a.M.S===0))return 1}else if(a.eb){if((c=Uk(a,0,a.window[a.v-1]))&&Yk(a,!1),a.v++,a.B--,a.M.S===0)return 1}else a.eb=1,a.v++,a.B--}a.eb&&(Uk(a,0,a.window[a.v-1]),a.eb=0);a.sa=a.v<2?a.v:2;return b===4?(Yk(a,!0),a.M.S===0?3:4):a.xa&&(Yk(a,!1),a.M.S===0)?1:2}
function dl(a,b){for(var c,d,e,f=a.window;;){if(a.B<=258){al(a);if(a.B<=258&&b===0)return 1;if(a.B===0)break}a.T=0;if(a.B>=3&&a.v>0&&(d=a.v-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.v+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.T=258-(e-d);a.T>a.B&&(a.T=a.B)}a.T>=3?(c=Uk(a,1,a.T-3),a.B-=a.T,a.v+=a.T,a.T=0):(c=Uk(a,0,a.window[a.v]),a.B--,a.v++);if(c&&(Yk(a,!1),a.M.S===0))return 1}a.sa=0;return b===4?(Yk(a,!0),a.M.S===0?3:4):
a.xa&&(Yk(a,!1),a.M.S===0)?1:2}
function el(a,b){for(var c;;){if(a.B===0&&(al(a),a.B===0)){if(b===0)return 1;break}a.T=0;c=Uk(a,0,a.window[a.v]);a.B--;a.v++;if(c&&(Yk(a,!1),a.M.S===0))return 1}a.sa=0;return b===4?(Yk(a,!0),a.M.S===0?3:4):a.xa&&(Yk(a,!1),a.M.S===0)?1:2}
function fl(a,b,c,d,e){this.le=a;this.ye=b;this.Be=c;this.xe=d;this.ge=e}
var gl;gl=[new fl(0,0,0,0,function(a,b){var c=65535;for(c>a.ya-5&&(c=a.ya-5);;){if(a.B<=1){al(a);if(a.B===0&&b===0)return 1;if(a.B===0)break}a.v+=a.B;a.B=0;var d=a.ta+c;if(a.v===0||a.v>=d)if(a.B=a.v-d,a.v=d,Yk(a,!1),a.M.S===0)return 1;if(a.v-a.ta>=a.la-262&&(Yk(a,!1),a.M.S===0))return 1}a.sa=0;if(b===4)return Yk(a,!0),a.M.S===0?3:4;a.v>a.ta&&Yk(a,!1);return 1}),
new fl(4,4,8,4,bl),new fl(4,5,16,8,bl),new fl(4,6,32,32,bl),new fl(4,4,16,16,cl),new fl(8,16,32,32,cl),new fl(8,16,128,128,cl),new fl(8,32,128,256,cl),new fl(32,128,258,1024,cl),new fl(32,258,258,4096,cl)];
function hl(){this.M=null;this.status=0;this.Z=null;this.wrap=this.pending=this.Nb=this.ya=0;this.I=null;this.Aa=0;this.method=8;this.ub=-1;this.Xa=this.Vc=this.la=0;this.window=null;this.Gd=0;this.head=this.Ga=null;this.od=this.jd=this.strategy=this.level=this.Ic=this.nd=this.wa=this.B=this.wb=this.v=this.eb=this.rd=this.T=this.ta=this.Ka=this.Ja=this.Ec=this.hc=this.R=0;this.ra=new O.Ha(1146);this.Za=new O.Ha(122);this.ja=new O.Ha(78);Wk(this.ra);Wk(this.Za);Wk(this.ja);this.Yc=this.ac=this.ic=
null;this.Ia=new O.Ha(16);this.ba=new O.Ha(573);Wk(this.ba);this.sb=this.La=0;this.depth=new O.Ha(573);Wk(this.depth);this.ha=this.na=this.sa=this.matches=this.Ab=this.Na=this.Gb=this.xa=this.Kb=this.Gc=0}
function il(a,b){if(!a||!a.state||b>5||b<0)return a?Vk(a,-2):-2;var c=a.state;if(!a.output||!a.input&&a.ma!==0||c.status===666&&b!==4)return Vk(a,a.S===0?-5:-2);c.M=a;var d=c.ub;c.ub=b;if(c.status===42)if(c.wrap===2)a.J=0,P(c,31),P(c,139),P(c,8),c.I?(P(c,(c.I.text?1:0)+(c.I.Sa?2:0)+(c.I.extra?4:0)+(c.I.name?8:0)+(c.I.comment?16:0)),P(c,c.I.time&255),P(c,c.I.time>>8&255),P(c,c.I.time>>16&255),P(c,c.I.time>>24&255),P(c,c.level===9?2:c.strategy>=2||c.level<2?4:0),P(c,c.I.os&255),c.I.extra&&c.I.extra.length&&
(P(c,c.I.extra.length&255),P(c,c.I.extra.length>>8&255)),c.I.Sa&&(a.J=ik(a.J,c.Z,c.pending,0)),c.Aa=0,c.status=69):(P(c,0),P(c,0),P(c,0),P(c,0),P(c,0),P(c,c.level===9?2:c.strategy>=2||c.level<2?4:0),P(c,3),c.status=113);else{var e=8+(c.Vc-8<<4)<<8;e|=(c.strategy>=2||c.level<2?0:c.level<6?1:c.level===6?2:3)<<6;c.v!==0&&(e|=32);c.status=113;Zk(c,e+(31-e%31));c.v!==0&&(Zk(c,a.J>>>16),Zk(c,a.J&65535));a.J=1}if(c.status===69)if(c.I.extra){for(e=c.pending;c.Aa<(c.I.extra.length&65535)&&(c.pending!==c.ya||
(c.I.Sa&&c.pending>e&&(a.J=ik(a.J,c.Z,c.pending-e,e)),Xk(a),e=c.pending,c.pending!==c.ya));)P(c,c.I.extra[c.Aa]&255),c.Aa++;c.I.Sa&&c.pending>e&&(a.J=ik(a.J,c.Z,c.pending-e,e));c.Aa===c.I.extra.length&&(c.Aa=0,c.status=73)}else c.status=73;if(c.status===73)if(c.I.name){e=c.pending;do{if(c.pending===c.ya&&(c.I.Sa&&c.pending>e&&(a.J=ik(a.J,c.Z,c.pending-e,e)),Xk(a),e=c.pending,c.pending===c.ya)){var f=1;break}f=c.Aa<c.I.name.length?c.I.name.charCodeAt(c.Aa++)&255:0;P(c,f)}while(f!==0);c.I.Sa&&c.pending>
e&&(a.J=ik(a.J,c.Z,c.pending-e,e));f===0&&(c.Aa=0,c.status=91)}else c.status=91;if(c.status===91)if(c.I.comment){e=c.pending;do{if(c.pending===c.ya&&(c.I.Sa&&c.pending>e&&(a.J=ik(a.J,c.Z,c.pending-e,e)),Xk(a),e=c.pending,c.pending===c.ya)){f=1;break}f=c.Aa<c.I.comment.length?c.I.comment.charCodeAt(c.Aa++)&255:0;P(c,f)}while(f!==0);c.I.Sa&&c.pending>e&&(a.J=ik(a.J,c.Z,c.pending-e,e));f===0&&(c.status=103)}else c.status=103;c.status===103&&(c.I.Sa?(c.pending+2>c.ya&&Xk(a),c.pending+2<=c.ya&&(P(c,a.J&
255),P(c,a.J>>8&255),a.J=0,c.status=113)):c.status=113);if(c.pending!==0){if(Xk(a),a.S===0)return c.ub=-1,0}else if(a.ma===0&&(b<<1)-(b>4?9:0)<=(d<<1)-(d>4?9:0)&&b!==4)return Vk(a,-5);if(c.status===666&&a.ma!==0)return Vk(a,-5);if(a.ma!==0||c.B!==0||b!==0&&c.status!==666){d=c.strategy===2?el(c,b):c.strategy===3?dl(c,b):gl[c.level].ge(c,b);if(d===3||d===4)c.status=666;if(d===1||d===3)return a.S===0&&(c.ub=-1),0;if(d===2&&(b===1?(Fk(c,2,3),Gk(c,256,tk),c.ha===16?(Ek(c,c.na),c.na=0,c.ha=0):c.ha>=8&&
(c.Z[c.pending++]=c.na&255,c.na>>=8,c.ha-=8)):b!==5&&(Fk(c,0,3),Lk(c,0,0),b===3&&(Wk(c.head),c.B===0&&(c.v=0,c.ta=0,c.sa=0))),Xk(a),a.S===0))return c.ub=-1,0}if(b!==4)return 0;if(c.wrap<=0)return 1;c.wrap===2?(P(c,a.J&255),P(c,a.J>>8&255),P(c,a.J>>16&255),P(c,a.J>>24&255),P(c,a.jb&255),P(c,a.jb>>8&255),P(c,a.jb>>16&255),P(c,a.jb>>24&255)):(Zk(c,a.J>>>16),Zk(c,a.J&65535));Xk(a);c.wrap>0&&(c.wrap=-c.wrap);return c.pending!==0?0:1}
;var jl={};jl=function(){this.input=null;this.jb=this.ma=this.gb=0;this.output=null;this.Tc=this.S=this.yb=0;this.msg="";this.state=null;this.Ac=2;this.J=0};var kl=Object.prototype.toString;
function ll(a){if(!(this instanceof ll))return new ll(a);a=this.options=O.assign({level:-1,method:8,chunkSize:16384,windowBits:15,memLevel:8,strategy:0,to:""},a||{});a.raw&&a.windowBits>0?a.windowBits=-a.windowBits:a.gzip&&a.windowBits>0&&a.windowBits<16&&(a.windowBits+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.M=new jl;this.M.S=0;var b=this.M;var c=a.level,d=a.method,e=a.windowBits,f=a.memLevel,g=a.strategy;if(b){var h=1;c===-1&&(c=6);e<0?(h=0,e=-e):e>15&&(h=2,e-=16);if(f<1||f>
9||d!==8||e<8||e>15||c<0||c>9||g<0||g>4)b=Vk(b,-2);else{e===8&&(e=9);var k=new hl;b.state=k;k.M=b;k.wrap=h;k.I=null;k.Vc=e;k.la=1<<k.Vc;k.Xa=k.la-1;k.Ec=f+7;k.hc=1<<k.Ec;k.Ja=k.hc-1;k.Ka=~~((k.Ec+3-1)/3);k.window=new O.lb(k.la*2);k.head=new O.Ha(k.hc);k.Ga=new O.Ha(k.la);k.Kb=1<<f+6;k.ya=k.Kb*4;k.Z=new O.lb(k.ya);k.Gb=1*k.Kb;k.Gc=3*k.Kb;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.jb=b.Tc=0;b.Ac=2;c=b.state;c.pending=0;c.Nb=0;c.wrap<0&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.J=c.wrap===2?
0:1;c.ub=0;if(!Tk){d=Array(16);for(f=g=0;f<28;f++)for(xk[f]=g,e=0;e<1<<pk[f];e++)wk[g++]=f;wk[g-1]=f;for(f=g=0;f<16;f++)for(yk[f]=g,e=0;e<1<<qk[f];e++)vk[g++]=f;for(g>>=7;f<30;f++)for(yk[f]=g<<7,e=0;e<1<<qk[f]-7;e++)vk[256+g++]=f;for(e=0;e<=15;e++)d[e]=0;for(e=0;e<=143;)tk[e*2+1]=8,e++,d[8]++;for(;e<=255;)tk[e*2+1]=9,e++,d[9]++;for(;e<=279;)tk[e*2+1]=7,e++,d[7]++;for(;e<=287;)tk[e*2+1]=8,e++,d[8]++;Ik(tk,287,d);for(e=0;e<30;e++)uk[e*2+1]=5,uk[e*2]=Hk(e,5);Ak=new zk(tk,pk,257,286,15);Bk=new zk(uk,
qk,0,30,15);Ck=new zk([],rk,0,19,7);Tk=!0}c.ic=new Dk(c.ra,Ak);c.ac=new Dk(c.Za,Bk);c.Yc=new Dk(c.ja,Ck);c.na=0;c.ha=0;Jk(c);c=0}else c=Vk(b,-2);c===0&&(b=b.state,b.Gd=2*b.la,Wk(b.head),b.Ic=gl[b.level].ye,b.jd=gl[b.level].le,b.od=gl[b.level].Be,b.nd=gl[b.level].xe,b.v=0,b.ta=0,b.B=0,b.sa=0,b.T=b.wa=2,b.eb=0,b.R=0);b=c}}else b=-2;if(b!==0)throw Error(nk[b]);a.header&&(b=this.M)&&b.state&&b.state.wrap===2&&(b.state.I=a.header);if(a.dictionary){var l;typeof a.dictionary==="string"?l=gk(a.dictionary):
kl.call(a.dictionary)==="[object ArrayBuffer]"?l=new Uint8Array(a.dictionary):l=a.dictionary;a=this.M;f=l;g=f.length;if(a&&a.state)if(l=a.state,b=l.wrap,b===2||b===1&&l.status!==42||l.B)b=-2;else{b===1&&(a.J=hk(a.J,f,g,0));l.wrap=0;g>=l.la&&(b===0&&(Wk(l.head),l.v=0,l.ta=0,l.sa=0),c=new O.lb(l.la),O.pb(c,f,g-l.la,l.la,0),f=c,g=l.la);c=a.ma;d=a.gb;e=a.input;a.ma=g;a.gb=0;a.input=f;for(al(l);l.B>=3;){f=l.v;g=l.B-2;do l.R=(l.R<<l.Ka^l.window[f+3-1])&l.Ja,l.Ga[f&l.Xa]=l.head[l.R],l.head[l.R]=f,f++;while(--g);
l.v=f;l.B=2;al(l)}l.v+=l.B;l.ta=l.v;l.sa=l.B;l.B=0;l.T=l.wa=2;l.eb=0;a.gb=d;a.input=e;a.ma=c;l.wrap=b;b=0}else b=-2;if(b!==0)throw Error(nk[b]);this.gh=!0}}
ll.prototype.push=function(a,b){var c=this.M,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:b===!0?4:0;typeof a==="string"?c.input=gk(a):kl.call(a)==="[object ArrayBuffer]"?c.input=new Uint8Array(a):c.input=a;c.gb=0;c.ma=c.input.length;do{c.S===0&&(c.output=new O.lb(d),c.yb=0,c.S=d);a=il(c,e);if(a!==1&&a!==0)return ml(this,a),this.ended=!0,!1;if(c.S===0||c.ma===0&&(e===4||e===2))if(this.options.to==="string"){var f=O.Sc(c.output,c.yb);b=f;f=f.length;if(f<65537&&(b.subarray&&fk||!b.subarray))b=
String.fromCharCode.apply(null,O.Sc(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=O.Sc(c.output,c.yb),this.chunks.push(b)}while((c.ma>0||c.S===0)&&a!==1);if(e===4)return(c=this.M)&&c.state?(d=c.state.status,d!==42&&d!==69&&d!==73&&d!==91&&d!==103&&d!==113&&d!==666?a=Vk(c,-2):(c.state=null,a=d===113?Vk(c,-3):0)):a=-2,ml(this,a),this.ended=!0,a===0;e===2&&(ml(this,0),c.S=0);return!0};
function ml(a,b){b===0&&(a.result=a.options.to==="string"?a.chunks.join(""):O.gd(a.chunks));a.chunks=[];a.err=b;a.msg=a.M.msg}
function nl(a,b){b=b||{};b.gzip=!0;b=new ll(b);b.push(a,!0);if(b.err)throw b.msg||nk[b.err];return b.result}
;function ol(a){if(!a)return null;a=a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue;var b;a?b=nb(a):b=null;return b}
;function pl(a){return nb(a===null?"null":a===void 0?"undefined":a)}
;function ql(a){this.name=a}
;var rl=new ql("rawColdConfigGroup");var sl=new ql("rawHotConfigGroup");function tl(a){this.F=J(a)}
w(tl,M);function ul(a){this.F=J(a)}
w(ul,M);ul.prototype.setTrackingParams=function(a){if(a!=null)if(typeof a==="string")a=a?new ud(a,td):wd||(wd=new ud(null,td));else if(a.constructor!==ud)if(sd(a))a=a.length?new ud(new Uint8Array(a),td):wd||(wd=new ud(null,td));else throw Error();return L(this,1,a)};var vl=new ql("continuationCommand");var wl=new ql("webCommandMetadata");var xl=new ql("signalServiceEndpoint");var yl={Hf:"EMBEDDED_PLAYER_MODE_UNKNOWN",Ef:"EMBEDDED_PLAYER_MODE_DEFAULT",Gf:"EMBEDDED_PLAYER_MODE_PFP",Ff:"EMBEDDED_PLAYER_MODE_PFL"};var zl=new ql("feedbackEndpoint");var ae={Jg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_UNKNOWN",dg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_FOR_TESTING",ug:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_RESUME_TO_HOME_TTL",Bg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_START_TO_SHORTS_ANALYSIS_SLICE",Sf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_DEVICE_LAYER_SLICE",Ig:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_UNIFIED_LAYER_SLICE",Lg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_VISITOR_LAYER_SLICE",Ag:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SHOW_SHEET_COMMAND_HANDLER_BLOCK",
Ng:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WIZ_NEXT_MIGRATED_COMPONENT",Mg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WIZ_NEXT_CHANNEL_NAME_TOOLTIP",xg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATION_LOCK_SUPPORTED",Dg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_THEATER_MODE_ENABLED",Rg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_PIN_SUGGESTION",Qg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_LONG_PRESS_EDU_TOAST",Pg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_AMBIENT",Eg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TIME_WATCHED_PANEL",
zg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SEARCH_FROM_SEARCH_BAR_OVERLAY",Sg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_VOICE_SEARCH_EDU_TOAST",Cg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SUGGESTED_LANGUAGE_SELECTED",Tg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_TRIGGER_SHORTS_PIP",kg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IN_ZP_VOICE_CRASHY_SET",qg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_FAST_SWIPE_SUPPRESSED",pg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_FAST_SWIPE_ALLOWED",sg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_PULL_TO_REFRESH_ATTEMPT",
Og:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_BLOCK_KABUKI",tg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_TALL_SCREEN",rg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_NORMAL_SCREEN",Lf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ACCESSIBILITY_MODE_ENABLED",Kf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ACCESSIBILITY_MODE_DISABLED",Mf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_AUTOPLAY_ENABLED",Nf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_CAST_MATCH_OCCURRED",Vf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_ELIGIBLE",Yf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ENDSCREEN_TRIGGERED",
og:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_POSTPLAY_TRIGGERED",ng:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_POSTPLAY_LACT_THRESHOLD_EXCEEDED",eg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_MATCHED_ON_REMOTE_CONNECTION",gg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHABLE_ON_REMOTE_CONNECTION",fg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_MISATTRIBUTED_ON_REMOTE_CONNECTION",jg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_TV_IS_SIGNED_IN_ON_REMOTE_CONNECTION",Gg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TV_START_TYPE_COLD_ON_REMOTE_CONNECTION",
Hg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TV_START_TYPE_NON_COLD_ON_REMOTE_CONNECTION",mg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ON_REMOTE_CONNECTION",Rf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_VALID",Pf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_INVALID",Qf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_UNDEFINED",Of:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_DEFINED",lg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_LACT_THRESHOLD_EXCEEDED",
yg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROUND_TRIP_HANDLING_ON_REMOTE_CONNECTION",ig:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHED_ON_REMOTE_CONNECTION_BEFORE_APP_RELOAD",hg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHED_ON_REMOTE_CONNECTION_AFTER_APP_RELOAD",Wf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_INELIGIBLE",Fg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TVHTML5_MID_ROLL_THRESHOLD_REACHED",ag:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EXP_COBALT_HTTP3_CONFIG_PENDING",
Zf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EXP_COBALT_HTTP3_CONFIG_ACTIVATED",Xf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_M2_ELIGIBLE",vg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATE_DEVICE_TO_LANDSCAPE",wg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATE_DEVICE_TO_PORTRAIT",Uf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMBEDS_FACEOFF_UI_EVENT",cg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EXP_COBALT_HTTP3_CONFIG_RECEIVED",Tf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ELIGIBLE_TO_SUPPRESS_TRANSPORT_CONTROLS_BUTTONS",
Kg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_USER_HAS_THEATER_MODE_COOKIE_ENABLED"};var Al=new ql("shareEndpoint"),Bl=new ql("shareEntityEndpoint"),Cl=new ql("shareEntityServiceEndpoint"),Dl=new ql("webPlayerShareEntityServiceEndpoint");var El=new ql("playlistEditEndpoint");var Fl=new ql("modifyChannelNotificationPreferenceEndpoint");var Gl=new ql("unsubscribeEndpoint");var Hl=new ql("subscribeEndpoint");function Il(){var a=Jl;E("yt.ads.biscotti.getId_")||D("yt.ads.biscotti.getId_",a)}
function Kl(a){D("yt.ads.biscotti.lastId_",a)}
;function Ll(a,b){b.length>1?a[b[0]]=b[1]:b.length===1&&Object.assign(a,b[0])}
;var Ml=C.window,Nl,Ol,Pl=(Ml==null?void 0:(Nl=Ml.yt)==null?void 0:Nl.config_)||(Ml==null?void 0:(Ol=Ml.ytcfg)==null?void 0:Ol.data_)||{};D("yt.config_",Pl);function Ql(){Ll(Pl,arguments)}
function R(a,b){return a in Pl?Pl[a]:b}
function Rl(a){var b=Pl.EXPERIMENT_FLAGS;return b?b[a]:void 0}
;var Sl=[];function Tl(a){Sl.forEach(function(b){return b(a)})}
function Ul(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Vl(b)}}:a}
function Vl(a){var b=E("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=R("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),Ql("ERRORS",b));Tl(a)}
function Wl(a,b,c,d,e){var f=E("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=R("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),Ql("ERRORS",f))}
;var Xl=/^[\w.]*$/,Yl={q:!0,search_query:!0};function Zl(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(f.length===1&&f[0]||f.length===2)try{var g=$l(f[0]||""),h=$l(f[1]||"");if(g in c){var k=c[g];Array.isArray(k)?Vb(k,h):c[g]=[k,h]}else c[g]=h}catch(p){var l=p,m=f[0],n=String(Zl);l.args=[{key:m,value:f[1],query:a,method:am===n?"unchanged":n}];Yl.hasOwnProperty(m)||Wl(l)}}return c}
var am=String(Zl);function bm(a){var b=[];jg(a,function(c,d){var e=encodeURIComponent(String(d));c=Array.isArray(c)?c:[c];Pb(c,function(f){f==""?b.push(e):b.push(e+"="+encodeURIComponent(String(f)))})});
return b.join("&")}
function cm(a){a.charAt(0)==="?"&&(a=a.substring(1));return Zl(a,"&")}
function dm(a){return a.indexOf("?")!==-1?(a=(a||"").split("#")[0],a=a.split("?",2),cm(a.length>1?a[1]:a[0])):{}}
function em(a,b){return fm(a,b||{},!0)}
function fm(a,b,c){var d=a.split("#",2);a=d[0];d=d.length>1?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=cm(e[1]||"");for(var f in b)!c&&e!==null&&f in e||(e[f]=b[f]);return kc(a,e)+d}
function gm(a){if(!b)var b=window.location.href;var c=dc(1,a),d=ec(a);c&&d?(a=a.match(bc),b=b.match(bc),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?ec(b)===d&&(Number(dc(4,b))||null)===(Number(dc(4,a))||null):!0;return a}
function $l(a){return a&&a.match(Xl)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function hm(a){var b=im;a=a===void 0?E("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=vj;e.flash="0";a:{try{var f=b.h.top.location.href}catch(Ma){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=g===void 0?nj:g;try{var h=g.history.length}catch(Ma){h=0}e.u_his=h;var k;e.u_h=(k=nj.screen)==null?void 0:k.height;var l;e.u_w=(l=nj.screen)==null?void 0:l.width;var m;e.u_ah=(m=nj.screen)==null?void 0:m.availHeight;var n;e.u_aw=
(n=nj.screen)==null?void 0:n.availWidth;var p;e.u_cd=(p=nj.screen)==null?void 0:p.colorDepth}catch(Ma){}h=b.h;try{var t=h.screenX;var v=h.screenY}catch(Ma){}try{var x=h.outerWidth;var y=h.outerHeight}catch(Ma){}try{var H=h.innerWidth;var K=h.innerHeight}catch(Ma){}try{var fa=h.screenLeft;var ja=h.screenTop}catch(Ma){}try{H=h.innerWidth,K=h.innerHeight}catch(Ma){}try{var Ja=h.screen.availWidth;var bb=h.screen.availTop}catch(Ma){}t=[fa,ja,t,v,Ja,bb,x,y,H,K];try{var aa=(b.h.top||window).document,X=aa.compatMode==
"CSS1Compat"?aa.documentElement:aa.body;var oa=(new ig(X.clientWidth,X.clientHeight)).round()}catch(Ma){oa=new ig(-12245933,-12245933)}aa=oa;oa={};var Na=Na===void 0?C:Na;X=new Bj;"SVGElement"in Na&&"createElementNS"in Na.document&&X.set(0);v=sj();v["allow-top-navigation-by-user-activation"]&&X.set(1);v["allow-popups-to-escape-sandbox"]&&X.set(2);Na.crypto&&Na.crypto.subtle&&X.set(3);"TextDecoder"in Na&&"TextEncoder"in Na&&X.set(4);Na=Cj(X);oa.bc=Na;oa.bih=aa.height;oa.biw=aa.width;oa.brdim=t.join();
b=b.i;b=(oa.vis=b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,oa.wgl=!!nj.WebGLRenderingContext,oa);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var im=new function(){var a=window.document;this.h=window;this.i=a};
D("yt.ads_.signals_.getAdSignalsString",function(a){return bm(hm(a))});Za();navigator.userAgent.indexOf(" (CrKey ");var jm="XMLHttpRequest"in C?function(){return new XMLHttpRequest}:null;
function km(){if(!jm)return null;var a=jm();return"open"in a?a:null}
function lm(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function mm(a,b){typeof a==="function"&&(a=Ul(a));return window.setTimeout(a,b)}
;var nm="client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");[].concat(sa(nm),["client_dev_set_cookie"]);function S(a){a=om(a);return typeof a==="string"&&a==="false"?!1:!!a}
function pm(a,b){a=om(a);return a===void 0&&b!==void 0?b:Number(a||0)}
function om(a){return R("EXPERIMENT_FLAGS",{})[a]}
function qm(){for(var a=[],b=R("EXPERIMENTS_FORCED_FLAGS",{}),c=z(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=R("EXPERIMENT_FLAGS",{});d=z(Object.keys(c));for(var e=d.next();!e.done;e=d.next())e=e.value,e.startsWith("force_")&&b[e]===void 0&&a.push({key:e,value:String(c[e])});return a}
;var rm={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},sm="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(sa(nm)),tm=!1;function um(a,b,c,d,e,f,g,h){function k(){(l&&"readyState"in l?l.readyState:0)===4&&b&&Ul(b)(l)}
c=c===void 0?"GET":c;d=d===void 0?"":d;h=h===void 0?!1:h;var l=km();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;S("debug_forward_web_query_parameters")&&(a=wm(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c=c==="POST"&&(window.FormData===void 0||!(d instanceof FormData));if(e=xm(a,e))for(var m in e)l.setRequestHeader(m,e[m]),"content-type"===m.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
if(h&&"setAttributionReporting"in XMLHttpRequest.prototype){a={eventSourceEligible:!0,triggerEligible:!1};try{l.setAttributionReporting(a)}catch(n){Wl(n)}}l.send(d);return l}
function xm(a,b){b=b===void 0?{}:b;var c=gm(a),d=R("INNERTUBE_CLIENT_NAME"),e=S("web_ajax_ignore_global_headers_if_set"),f;for(f in rm){var g=R(rm[f]),h=f==="X-Goog-AuthUser"||f==="X-Goog-PageId";f!=="X-Goog-Visitor-Id"||g||(g=R("VISITOR_DATA"));var k;if(!(k=!g)){if(!(k=c||(ec(a)?!1:!0))){k=a;var l;if(l=S("add_auth_headers_to_remarketing_google_dot_com_ping")&&f==="Authorization"&&(d==="TVHTML5"||d==="TVHTML5_UNPLUGGED"||d==="TVHTML5_SIMPLY"))l=ec(k),l=l!==null?l.split(".").reverse():null,l=l===null?
!1:l[1]==="google"?!0:l[2]==="google"?l[0]==="au"&&l[1]==="com"?!0:l[0]==="uk"&&l[1]==="co"?!0:!1:!1;l&&(k=cc(dc(5,k))||"",k=k.split("/"),k="/"+(k.length>1?k[1]:""),l=k==="/pagead");k=l?!0:!1}k=!k}k||e&&b[f]!==void 0||d==="TVHTML5_UNPLUGGED"&&h||(b[f]=g)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!ec(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!ec(a)){try{var m=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(n){}m&&
(b["X-YouTube-Time-Zone"]=m)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&ec(a)||(b["X-YouTube-Ad-Signals"]=bm(hm()));return b}
function ym(a,b){b.method="POST";b.postParams||(b.postParams={});return zm(a,b)}
function zm(a,b){var c=b.format||"JSON";a=Am(a,b);var d=Bm(a,b),e=!1,f=Cm(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);var l=lm(k),m=null,n=400<=k.status&&k.status<500,p=500<=k.status&&k.status<600;if(l||n||p)m=Dm(a,c,k,b.convertToSafeHtml);l&&(l=Em(c,k,m));m=m||{};n=b.context||C;l?b.onSuccess&&b.onSuccess.call(n,k,m):b.onError&&b.onError.call(n,k,m);b.onFinish&&b.onFinish.call(n,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&d>0){var g=b.onTimeout;var h=mm(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||C,f))},d)}return f}
function Am(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=R("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=em(a,b);return a}
function Bm(a,b){var c=R("XSRF_FIELD_NAME"),d=R("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=R("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||ec(a)&&!b.withCredentials&&ec(a)!==document.location.hostname||b.method!=="POST"||h&&h!=="application/x-www-form-urlencoded"||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(S("ajax_parse_query_data_only_when_filled")&&f&&Object.keys(f).length>0||f)&&typeof e==="string"&&(e=cm(e),tg(e,f),e=b.postBodyFormat&&b.postBodyFormat===
"JSON"?JSON.stringify(e):jc(e));f=e||f&&!mg(f);!tm&&f&&b.method!=="POST"&&(tm=!0,Vl(Error("AJAX request with postData should use POST")));return e}
function Dm(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Wl(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&a.indexOf("json")>=0&&(f.substring(0,5)===")]}'\n"&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Fm(a):null)e={},Pb(a.getElementsByTagName("*"),function(g){e[g.tagName]=Gm(g)})}d&&Hm(e);
return e}
function Hm(a){if(Ra(a))for(var b in a){var c;(c=b==="html_content")||(c=b.length-5,c=c>=0&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b];var e=lb();d=new Eb(e?e.createHTML(d):d);a[c]=d}else Hm(a[b])}}
function Em(a,b,c){if(b&&b.status===204)return!0;switch(a){case "JSON":return!!c;case "XML":return Number(c&&c.return_code)===0;case "RAW":return!0;default:return!!c}}
function Fm(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&a.length>0?a[0]:null:null}
function Gm(a){var b="";Pb(a.childNodes,function(c){b+=c.nodeValue});
return b}
function wm(a){var b=window.location.search,c=ec(a);S("debug_handle_relative_url_for_query_forward_killswitch")||!c&&gm(a)&&(c=document.location.hostname);var d=cc(dc(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=cm(b),f={};Pb(sm,function(g){e[g]&&(f[g]=e[g])});
return fm(a,f||{},!1)}
var Cm=um;var Im=[{Jc:function(a){return"Cannot read property '"+a.key+"'"},
lc:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Jc:function(a){return"Cannot call '"+a.key+"'"},
lc:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Jc:function(a){return a.key+" is not defined"},
lc:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var Km={Va:[],Qa:[{callback:Jm,weight:500}]};function Jm(a){if(a.name==="JavaException")return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function Lm(){this.Qa=[];this.Va=[]}
var Mm;function Nm(){if(!Mm){var a=Mm=new Lm;a.Va.length=0;a.Qa.length=0;Km.Va&&a.Va.push.apply(a.Va,Km.Va);Km.Qa&&a.Qa.push.apply(a.Qa,Km.Qa)}return Mm}
;var Om=new N;function Pm(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=Qm(b);if(e===Infinity)break;var f=e>>3;switch(e&7){case 0:e=Qm(b);if(f===2)return e;break;case 1:if(f===2)return;d+=8;break;case 2:e=Qm(b);if(f===2)return a.substr(d,e);d+=e;break;case 5:if(f===2)return;d+=4;break;default:return}}while(d<c)}
function Qm(a){var b=a(),c=b&127;if(b<128)return c;b=a();c|=(b&127)<<7;if(b<128)return c;b=a();c|=(b&127)<<14;if(b<128)return c;b=a();return b<128?c|(b&127)<<21:Infinity}
;function Rm(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=Sm(d,a[d],b,c),e>500));d++);d=e}else if(typeof a==="object")for(e in a){if(a[e]){var f=e;var g=a[e],h=b,k=c;f=typeof g!=="string"||f!=="clickTrackingParams"&&f!=="trackingParams"?0:(g=Pm(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?Sm(f+".ve",g,h,k):0;d+=f;d+=Sm(e,a[e],b,c);if(d>500)break}}else c[b]=Tm(a),d+=c[b].length;else c[b]=Tm(a),d+=c[b].length;return d}
function Sm(a,b,c,d){c+="."+a;a=Tm(b);d[c]=a;return c.length+a.length}
function Tm(a){try{return(typeof a==="string"?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function Um(a){var b=this;this.i=void 0;this.h=!1;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.i=c});
a.addEventListener("appinstalled",function(){b.h=!0},{once:!0})}
function Vm(){if(!C.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return C.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":C.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":C.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":C.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function Wm(){this.ff=!0}
function Xm(){Wm.h||(Wm.h=new Wm);return Wm.h}
function Ym(a,b){a={};var c=[];"USER_SESSION_ID"in Pl&&c.push({key:"u",value:R("USER_SESSION_ID")});if(c=bg(c))a.Authorization=c,c=b=b==null?void 0:b.sessionIndex,c===void 0&&(c=Number(R("SESSION_INDEX",0)),c=isNaN(c)?0:c),S("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=c.toString()),"INNERTUBE_HOST_OVERRIDE"in Pl||(a["X-Origin"]=window.location.origin),b===void 0&&"DELEGATED_SESSION_ID"in Pl&&(a["X-Goog-PageId"]=R("DELEGATED_SESSION_ID"));return a}
;var Zm={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};function $m(a,b,c,d,e){Zf.set(""+a,b,{Mb:c,path:"/",domain:d===void 0?"youtube.com":d,secure:e===void 0?!1:e})}
function an(a){return Zf.get(""+a,void 0)}
function bn(a,b,c){Zf.remove(""+a,b===void 0?"/":b,c===void 0?"youtube.com":c)}
function cn(){if(S("embeds_web_enable_cookie_detection_fix")){if(!C.navigator.cookieEnabled)return!1}else if(!Zf.isEnabled())return!1;if(Zf.h.cookie)return!0;S("embeds_web_enable_cookie_detection_fix")?Zf.set("TESTCOOKIESENABLED","1",{Mb:60,Ne:"none",secure:!0}):Zf.set("TESTCOOKIESENABLED","1",{Mb:60});if(Zf.get("TESTCOOKIESENABLED")!=="1")return!1;Zf.remove("TESTCOOKIESENABLED");return!0}
;var dn=E("ytglobal.prefsUserPrefsPrefs_")||{};D("ytglobal.prefsUserPrefsPrefs_",dn);function en(){this.h=R("ALT_PREF_COOKIE_NAME","PREF");this.i=R("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=an(this.h);a&&this.parse(a)}
var fn;function gn(){fn||(fn=new en);return fn}
r=en.prototype;r.get=function(a,b){hn(a);jn(a);a=dn[a]!==void 0?dn[a].toString():null;return a!=null?a:b?b:""};
r.set=function(a,b){hn(a);jn(a);if(b==null)throw Error("ExpectedNotNull");dn[a]=b.toString()};
function kn(a){return!!((ln("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
r.remove=function(a){hn(a);jn(a);delete dn[a]};
r.clear=function(){for(var a in dn)delete dn[a]};
function jn(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function hn(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function ln(a){a=dn[a]!==void 0?dn[a].toString():null;return a!=null&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
r.parse=function(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(dn[d]=c.toString())}};var mn={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},nn={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function on(){var a=C.navigator;return a?a.connection:void 0}
function pn(){var a=on();if(a){var b=mn[a.type||"unknown"]||"CONN_UNKNOWN";a=mn[a.effectiveType||"unknown"]||"CONN_UNKNOWN";b==="CONN_CELLULAR_UNKNOWN"&&a!=="CONN_UNKNOWN"&&(b=a);if(b!=="CONN_UNKNOWN")return b;if(a!=="CONN_UNKNOWN")return a}}
function qn(){var a=on();if(a!=null&&a.effectiveType)return nn.hasOwnProperty(a.effectiveType)?nn[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function T(a){var b=B.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(sa(b))}
w(T,Error);function rn(){try{return sn(),!0}catch(a){return!1}}
function sn(a){if(R("DATASYNC_ID")!==void 0)return R("DATASYNC_ID");throw new T("Datasync ID not set",a===void 0?"unknown":a);}
;function tn(){}
function un(a,b){return Aj.Ya(a,0,b)}
tn.prototype.pa=function(a,b){return this.Ya(a,1,b)};
tn.prototype.Db=function(a){var b=E("yt.scheduler.instance.addImmediateJob");b?b(a):a()};var vn=pm("web_emulated_idle_callback_delay",300),wn=1E3/60-3,xn=[8,5,4,3,2,1,0];
function yn(a){a=a===void 0?{}:a;F.call(this);this.i=[];this.j={};this.Y=this.h=0;this.X=this.u=!1;this.P=[];this.U=this.ga=!1;for(var b=z(xn),c=b.next();!c.done;c=b.next())this.i[c.value]=[];this.o=0;this.yc=a.timeout||1;this.G=wn;this.A=0;this.oa=this.De.bind(this);this.xc=this.jf.bind(this);this.Oa=this.Md.bind(this);this.Pa=this.ne.bind(this);this.nb=this.He.bind(this);this.Da=!!window.requestIdleCallback&&!!window.cancelIdleCallback&&!S("disable_scheduler_requestIdleCallback");(this.ia=a.useRaf!==
!1&&!!window.requestAnimationFrame)&&document.addEventListener("visibilitychange",this.oa)}
w(yn,F);r=yn.prototype;r.Db=function(a){var b=Za();zn(this,a);a=Za()-b;this.u||(this.G-=a)};
r.Ya=function(a,b,c){++this.Y;if(b===10)return this.Db(a),this.Y;var d=this.Y;this.j[d]=a;this.u&&!c?this.P.push({id:d,priority:b}):(this.i[b].push(d),this.X||this.u||(this.h!==0&&An(this)!==this.A&&this.stop(),this.start()));return d};
r.qa=function(a){delete this.j[a]};
function Bn(a){a.P.length=0;for(var b=5;b>=0;b--)a.i[b].length=0;a.i[8].length=0;a.j={};a.stop()}
r.isHidden=function(){return!!document.hidden||!1};
function Cn(a){return!a.isHidden()&&a.ia}
function An(a){if(a.i[8].length){if(a.U)return 4;if(Cn(a))return 3}for(var b=5;b>=a.o;b--)if(a.i[b].length>0)return b>0?Cn(a)?3:2:1;return 0}
r.Ea=function(a){var b=E("yt.logging.errors.log");b&&b(a)};
function zn(a,b){try{b()}catch(c){a.Ea(c)}}
function Dn(a){for(var b=z(xn),c=b.next();!c.done;c=b.next())if(a.i[c.value].length)return!0;return!1}
r.ne=function(a){var b=void 0;a&&(b=a.timeRemaining());this.ga=!0;En(this,b);this.ga=!1};
r.jf=function(){En(this)};
r.Md=function(){Fn(this)};
r.He=function(a){this.U=!0;var b=An(this);b===4&&b!==this.A&&(this.stop(),this.start());En(this,void 0,a);this.U=!1};
r.De=function(){this.isHidden()||Fn(this);this.h&&(this.stop(),this.start())};
function Fn(a){a.stop();a.u=!0;for(var b=Za(),c=a.i[8];c.length;){var d=c.shift(),e=a.j[d];delete a.j[d];e&&zn(a,e)}Gn(a);a.u=!1;Dn(a)&&a.start();b=Za()-b;a.G-=b}
function Gn(a){for(var b=0,c=a.P.length;b<c;b++){var d=a.P[b];a.i[d.priority].push(d.id)}a.P.length=0}
function En(a,b,c){a.U&&a.A===4&&a.h||a.stop();a.u=!0;b=Za()+(b||a.G);for(var d=a.i[5];d.length;){var e=d.shift(),f=a.j[e];delete a.j[e];if(f){e=a;try{f(c)}catch(l){e.Ea(l)}}}for(d=a.i[4];d.length;)c=d.shift(),f=a.j[c],delete a.j[c],f&&zn(a,f);d=a.ga?0:1;d=a.o>d?a.o:d;if(!(Za()>=b)){do{a:{c=a;f=d;for(e=3;e>=f;e--)for(var g=c.i[e];g.length;){var h=g.shift(),k=c.j[h];delete c.j[h];if(k){c=k;break a}}c=null}c&&zn(a,c)}while(c&&Za()<b)}a.u=!1;Gn(a);a.G=wn;Dn(a)&&a.start()}
r.start=function(){this.X=!1;if(this.h===0)switch(this.A=An(this),this.A){case 1:var a=this.Pa;this.h=this.Da?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,vn);break;case 2:this.h=window.setTimeout(this.xc,this.yc);break;case 3:this.h=window.requestAnimationFrame(this.nb);break;case 4:this.h=window.setTimeout(this.Oa,0)}};
r.pause=function(){this.stop();this.X=!0};
r.stop=function(){if(this.h){switch(this.A){case 1:var a=this.h;this.Da?window.cancelIdleCallback(a):window.clearTimeout(a);break;case 2:case 4:window.clearTimeout(this.h);break;case 3:window.cancelAnimationFrame(this.h)}this.h=0}};
r.aa=function(){Bn(this);this.stop();this.ia&&document.removeEventListener("visibilitychange",this.oa);F.prototype.aa.call(this)};var Hn=E("yt.scheduler.instance.timerIdMap_")||{},In=pm("kevlar_tuner_scheduler_soft_state_timer_ms",800),Jn=0,Kn=0;function Ln(){var a=E("ytglobal.schedulerInstanceInstance_");if(!a||a.da)a=new yn(R("scheduler")||{}),D("ytglobal.schedulerInstanceInstance_",a);return a}
function Mn(){Nn();var a=E("ytglobal.schedulerInstanceInstance_");a&&(vc(a),D("ytglobal.schedulerInstanceInstance_",null))}
function Nn(){Bn(Ln());for(var a in Hn)Hn.hasOwnProperty(a)&&delete Hn[Number(a)]}
function On(a,b,c){if(!c)return c=c===void 0,-Ln().Ya(a,b,c);var d=window.setTimeout(function(){var e=Ln().Ya(a,b);Hn[d]=e},c);
return d}
function Pn(a){Ln().Db(a)}
function Qn(a){var b=Ln();if(a<0)b.qa(-a);else{var c=Hn[a];c?(b.qa(c),delete Hn[a]):window.clearTimeout(a)}}
function Rn(){Sn()}
function Sn(){window.clearTimeout(Jn);Ln().start()}
function Tn(){Ln().pause();window.clearTimeout(Jn);Jn=window.setTimeout(Rn,In)}
function Un(){window.clearTimeout(Kn);Kn=window.setTimeout(function(){Vn(0)},In)}
function Vn(a){Un();var b=Ln();b.o=a;b.start()}
function Wn(a){Un();var b=Ln();b.o>a&&(b.o=a,b.start())}
function Xn(){window.clearTimeout(Kn);var a=Ln();a.o=0;a.start()}
;function Yn(){tn.apply(this,arguments)}
w(Yn,tn);function Zn(){Yn.h||(Yn.h=new Yn);return Yn.h}
Yn.prototype.Ya=function(a,b,c){c!==void 0&&Number.isNaN(Number(c))&&(c=void 0);var d=E("yt.scheduler.instance.addJob");return d?d(a,b,c):c===void 0?(a(),NaN):mm(a,c||0)};
Yn.prototype.qa=function(a){if(a===void 0||!Number.isNaN(Number(a))){var b=E("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
Yn.prototype.start=function(){var a=E("yt.scheduler.instance.start");a&&a()};
Yn.prototype.pause=function(){var a=E("yt.scheduler.instance.pause");a&&a()};
var Aj=Zn();
S("web_scheduler_auto_init")&&!E("yt.scheduler.initialized")&&(D("yt.scheduler.instance.dispose",Mn),D("yt.scheduler.instance.addJob",On),D("yt.scheduler.instance.addImmediateJob",Pn),D("yt.scheduler.instance.cancelJob",Qn),D("yt.scheduler.instance.cancelAllJobs",Nn),D("yt.scheduler.instance.start",Sn),D("yt.scheduler.instance.pause",Tn),D("yt.scheduler.instance.setPriorityThreshold",Vn),D("yt.scheduler.instance.enablePriorityThreshold",Wn),D("yt.scheduler.instance.clearPriorityThreshold",Xn),D("yt.scheduler.initialized",
!0));function $n(a){var b=new ak;this.h=(a=b.isAvailable()?a?new bk(b,a):b:null)?new Vj(a):null;this.i=document.domain||window.location.hostname}
$n.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+c*1E3);return}catch(f){}var e="";if(d)try{e=escape((new Fi).serialize(b))}catch(f){return}else e=escape(b);$m(a,e,c,this.i)};
$n.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=an(a))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
$n.prototype.remove=function(a){this.h&&this.h.remove(a);bn(a,"/",this.i)};var ao=function(){var a;return function(){a||(a=new $n("ytidb"));return a}}();
function bo(){var a;return(a=ao())==null?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var co=[],eo,fo=!1;function go(){var a={};for(eo=new ho(a.handleError===void 0?io:a.handleError,a.logEvent===void 0?jo:a.logEvent);co.length>0;)switch(a=co.shift(),a.type){case "ERROR":eo.Ea(a.payload);break;case "EVENT":eo.logEvent(a.eventType,a.payload)}}
function ko(a){fo||(eo?eo.Ea(a):(co.push({type:"ERROR",payload:a}),co.length>10&&co.shift()))}
function lo(a,b){fo||(eo?eo.logEvent(a,b):(co.push({type:"EVENT",eventType:a,payload:b}),co.length>10&&co.shift()))}
;function mo(a){if(a.indexOf(":")>=0)throw Error("Database name cannot contain ':'");}
function no(a){return a.substr(0,a.indexOf(":"))||a}
;var oo=dd||ed;function po(a){var b=Oc();return b?b.toLowerCase().indexOf(a)>=0:!1}
;var qo={},ro=(qo.AUTH_INVALID="No user identifier specified.",qo.EXPLICIT_ABORT="Transaction was explicitly aborted.",qo.IDB_NOT_SUPPORTED="IndexedDB is not supported.",qo.MISSING_INDEX="Index not created.",qo.MISSING_OBJECT_STORES="Object stores not created.",qo.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",qo.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",qo.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
qo.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",qo.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",qo.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",qo.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",qo),so={},to=(so.AUTH_INVALID="ERROR",so.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",so.EXPLICIT_ABORT="IGNORED",so.IDB_NOT_SUPPORTED="ERROR",so.MISSING_INDEX=
"WARNING",so.MISSING_OBJECT_STORES="ERROR",so.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",so.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",so.QUOTA_EXCEEDED="WARNING",so.QUOTA_MAYBE_EXCEEDED="WARNING",so.UNKNOWN_ABORT="WARNING",so.INCOMPATIBLE_DB_VERSION="WARNING",so),uo={},vo=(uo.AUTH_INVALID=!1,uo.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,uo.EXPLICIT_ABORT=!1,uo.IDB_NOT_SUPPORTED=!1,uo.MISSING_INDEX=!1,uo.MISSING_OBJECT_STORES=!1,uo.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,uo.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,uo.QUOTA_EXCEEDED=!1,uo.QUOTA_MAYBE_EXCEEDED=!0,uo.UNKNOWN_ABORT=!0,uo.INCOMPATIBLE_DB_VERSION=!1,uo);function wo(a,b,c,d,e){b=b===void 0?{}:b;c=c===void 0?ro[a]:c;d=d===void 0?to[a]:d;e=e===void 0?vo[a]:e;T.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:self.document===void 0,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,wo.prototype)}
w(wo,T);function xo(a,b){wo.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},ro.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,xo.prototype)}
w(xo,wo);function yo(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,yo.prototype)}
w(yo,Error);var zo=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Ao(a,b,c,d){b=no(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof wo)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if(e.name==="QuotaExceededError")return new wo("QUOTA_EXCEEDED",a);if(fd&&e.name==="UnknownError")return new wo("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof yo)return new wo("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if(e.name==="InvalidStateError"&&zo.some(function(f){return e.message.includes(f)}))return new wo("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if(e.name==="AbortError")return new wo("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",qd:e.name})];e.level="WARNING";return e}
function Bo(a,b,c){var d=bo();return new wo("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:d==null?void 0:d.hasSucceededOnce}})}
;function Co(a){if(!a)throw Error();throw a;}
function Do(a){return a}
function Eo(a){this.h=a}
function Fo(a){function b(e){if(d.state.status==="PENDING"){d.state={status:"REJECTED",reason:e};e=z(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if(d.state.status==="PENDING"){d.state={status:"FULFILLED",value:e};e=z(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
Fo.all=function(a){return new Fo(new Eo(function(b,c){var d=[],e=a.length;e===0&&b(d);for(var f={tb:0};f.tb<a.length;f={tb:f.tb},++f.tb)Fo.resolve(a[f.tb]).then(function(g){return function(h){d[g.tb]=h;e--;e===0&&b(d)}}(f)).catch(function(g){c(g)})}))};
Fo.resolve=function(a){return new Fo(new Eo(function(b,c){a instanceof Fo?a.then(b,c):b(a)}))};
Fo.reject=function(a){return new Fo(new Eo(function(b,c){c(a)}))};
Fo.prototype.then=function(a,b){var c=this,d=a!=null?a:Do,e=b!=null?b:Co;return new Fo(new Eo(function(f,g){c.state.status==="PENDING"?(c.h.push(function(){Go(c,c,d,f,g)}),c.i.push(function(){Ho(c,c,e,f,g)})):c.state.status==="FULFILLED"?Go(c,c,d,f,g):c.state.status==="REJECTED"&&Ho(c,c,e,f,g)}))};
Fo.prototype.catch=function(a){return this.then(void 0,a)};
function Go(a,b,c,d,e){try{if(a.state.status!=="FULFILLED")throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof Fo?Io(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Ho(a,b,c,d,e){try{if(a.state.status!=="REJECTED")throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof Fo?Io(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Io(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof Fo?Io(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Jo(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Ko(a){return new Promise(function(b,c){Jo(a,b,c)})}
function Lo(a){return new Fo(new Eo(function(b,c){Jo(a,b,c)}))}
;function Mo(a,b){return new Fo(new Eo(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var No=window,U=No.ytcsi&&No.ytcsi.now?No.ytcsi.now:No.performance&&No.performance.timing&&No.performance.now&&No.performance.timing.navigationStart?function(){return No.performance.timing.navigationStart+No.performance.now()}:function(){return(new Date).getTime()};function Oo(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(U());this.i=!1}
r=Oo.prototype;r.add=function(a,b,c){return Po(this,[a],{mode:"readwrite",ka:!0},function(d){return d.objectStore(a).add(b,c)})};
r.clear=function(a){return Po(this,[a],{mode:"readwrite",ka:!0},function(b){return b.objectStore(a).clear()})};
r.close=function(){this.h.close();var a;((a=this.options)==null?0:a.closed)&&this.options.closed()};
r.count=function(a,b){return Po(this,[a],{mode:"readonly",ka:!0},function(c){return c.objectStore(a).count(b)})};
function Qo(a,b,c){a=a.h.createObjectStore(b,c);return new Ro(a)}
r.delete=function(a,b){return Po(this,[a],{mode:"readwrite",ka:!0},function(c){return c.objectStore(a).delete(b)})};
r.get=function(a,b){return Po(this,[a],{mode:"readonly",ka:!0},function(c){return c.objectStore(a).get(b)})};
function So(a,b,c){return Po(a,[b],{mode:"readwrite",ka:!0},function(d){d=d.objectStore(b);return Lo(d.h.put(c,void 0))})}
r.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function Po(a,b,c,d){var e,f,g,h,k,l,m,n,p,t,v,x;return A(function(y){switch(y.h){case 1:var H={mode:"readonly",ka:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};typeof c==="string"?H.mode=c:Object.assign(H,c);e=H;a.transactionCount++;f=e.ka?3:1;g=0;case 2:if(h){y.D(4);break}g++;k=Math.round(U());Aa(y,5);l=a.h.transaction(b,e.mode);H=y.yield;var K=new To(l);K=Uo(K,d);return H.call(y,K,7);case 7:return m=y.i,n=Math.round(U()),Vo(a,k,n,g,void 0,b.join(),e),y.return(m);case 5:p=Ba(y);t=Math.round(U());v=Ao(p,
a.h.name,b.join(),a.h.version);if((x=v instanceof wo&&!v.h)||g>=f)Vo(a,k,t,g,v,b.join(),e),h=v;y.D(2);break;case 4:return y.return(Promise.reject(h))}})}
function Vo(a,b,c,d,e,f,g){b=c-b;e?(e instanceof wo&&(e.type==="QUOTA_EXCEEDED"||e.type==="QUOTA_MAYBE_EXCEEDED")&&lo("QUOTA_EXCEEDED",{dbName:no(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof wo&&e.type==="UNKNOWN_ABORT"&&(c-=a.j,c<0&&c>=2147483648&&(c=0),lo("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),Wo(a,!1,d,f,b,g.tag),ko(e)):Wo(a,!0,d,f,b,g.tag)}
function Wo(a,b,c,d,e,f){lo("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:f===void 0?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
r.getName=function(){return this.h.name};
function Ro(a){this.h=a}
r=Ro.prototype;r.add=function(a,b){return Lo(this.h.add(a,b))};
r.autoIncrement=function(){return this.h.autoIncrement};
r.clear=function(){return Lo(this.h.clear()).then(function(){})};
function Xo(a,b,c){a.h.createIndex(b,c,{unique:!1})}
r.count=function(a){return Lo(this.h.count(a))};
function Yo(a,b){return Zo(a,{query:b},function(c){return c.delete().then(function(){return $o(c)})}).then(function(){})}
r.delete=function(a){return a instanceof IDBKeyRange?Yo(this,a):Lo(this.h.delete(a))};
r.get=function(a){return Lo(this.h.get(a))};
r.index=function(a){try{return new ap(this.h.index(a))}catch(b){if(b instanceof Error&&b.name==="NotFoundError")throw new yo(a,this.h.name);throw b;}};
r.getName=function(){return this.h.name};
r.keyPath=function(){return this.h.keyPath};
function Zo(a,b,c){a=a.h.openCursor(b.query,b.direction);return bp(a).then(function(d){return Mo(d,c)})}
function To(a){var b=this;this.h=a;this.i=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.aborted){e=wo;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(k===null)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function Uo(a,b){var c=new Promise(function(d,e){try{b(a).then(function(f){d(f)}).catch(e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return z(d).next().value})}
To.prototype.abort=function(){this.h.abort();this.aborted=!0;throw new wo("EXPLICIT_ABORT");};
To.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.i.get(a);b||(b=new Ro(a),this.i.set(a,b));return b};
function ap(a){this.h=a}
r=ap.prototype;r.count=function(a){return Lo(this.h.count(a))};
r.delete=function(a){return cp(this,{query:a},function(b){return b.delete().then(function(){return $o(b)})})};
r.get=function(a){return Lo(this.h.get(a))};
r.keyPath=function(){return this.h.keyPath};
r.unique=function(){return this.h.unique};
function cp(a,b,c){a=a.h.openCursor(b.query===void 0?null:b.query,b.direction===void 0?"next":b.direction);return bp(a).then(function(d){return Mo(d,c)})}
function dp(a,b){this.request=a;this.cursor=b}
function bp(a){return Lo(a).then(function(b){return b?new dp(a,b):null})}
function $o(a){a.cursor.continue(void 0);return bp(a.request)}
dp.prototype.delete=function(){return Lo(this.cursor.delete()).then(function(){})};
dp.prototype.getValue=function(){return this.cursor.value};
dp.prototype.update=function(a){return Lo(this.cursor.update(a))};function ep(a,b,c){return new Promise(function(d,e){function f(){p||(p=new Oo(g.result,{closed:n}));return p}
var g=b!==void 0?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.Pd,k=c.blocking,l=c.gf,m=c.upgrade,n=c.closed,p;g.addEventListener("upgradeneeded",function(t){try{if(t.newVersion===null)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(g.transaction===null)throw Error("Invariant: transaction on IDbOpenDbRequest is null");t.dataLoss&&t.dataLoss!=="none"&&lo("IDB_DATA_CORRUPTED",{reason:t.dataLossMessage||"unknown reason",dbName:no(a)});var v=f(),x=new To(g.transaction);
m&&m(v,function(y){return t.oldVersion<y&&t.newVersion>=y},x);
x.done.catch(function(y){e(y)})}catch(y){e(y)}});
g.addEventListener("success",function(){var t=g.result;k&&t.addEventListener("versionchange",function(){k(f())});
t.addEventListener("close",function(){lo("IDB_UNEXPECTEDLY_CLOSED",{dbName:no(a),dbVersion:t.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function fp(a,b,c){c=c===void 0?{}:c;return ep(a,b,c)}
function gp(a,b){b=b===void 0?{}:b;var c,d,e,f;return A(function(g){if(g.h==1)return Aa(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.Pd)&&c.addEventListener("blocked",function(){e()}),g.yield(Ko(c),4);
if(g.h!=2)g.h=0,g.o=0;else throw f=Ba(g),Ao(f,a,"",-1);})}
;function hp(a,b){this.name=a;this.options=b;this.j=!0;this.u=this.o=0}
hp.prototype.i=function(a,b,c){c=c===void 0?{}:c;return fp(a,b,c)};
hp.prototype.delete=function(a){a=a===void 0?{}:a;return gp(this.name,a)};
function ip(a,b){return new wo("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function jp(a,b){if(!b)throw Bo("openWithToken",no(a.name));return a.open()}
hp.prototype.open=function(){function a(){var f,g,h,k,l,m,n,p,t,v;return A(function(x){switch(x.h){case 1:return g=(f=Error().stack)!=null?f:"",Aa(x,2),x.yield(c.i(c.name,c.options.version,e),4);case 4:for(var y=h=x.i,H=c.options,K=[],fa=z(Object.keys(H.zb)),ja=fa.next();!ja.done;ja=fa.next()){ja=ja.value;var Ja=H.zb[ja],bb=Ja.Ie===void 0?Number.MAX_VALUE:Ja.Ie;!(y.h.version>=Ja.Fb)||y.h.version>=bb||y.h.objectStoreNames.contains(ja)||K.push(ja)}k=K;if(k.length===0){x.D(5);break}l=Object.keys(c.options.zb);
m=h.objectStoreNames();if(c.u<pm("ytidb_reopen_db_retries",0))return c.u++,h.close(),ko(new wo("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:m})),x.return(a());if(!(c.o<pm("ytidb_remake_db_retries",1))){x.D(6);break}c.o++;return x.yield(c.delete(),7);case 7:return ko(new wo("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:m})),x.return(a());case 6:throw new xo(m,l);case 5:return x.return(h);case 2:n=Ba(x);
if(n instanceof DOMException?n.name!=="VersionError":"DOMError"in self&&n instanceof DOMError?n.name!=="VersionError":!(n instanceof Object&&"message"in n)||n.message!=="An attempt was made to open a database using a lower version than the existing version."){x.D(8);break}return x.yield(c.i(c.name,void 0,Object.assign({},e,{upgrade:void 0})),9);case 9:p=x.i;t=p.h.version;if(c.options.version!==void 0&&t>c.options.version+1)throw p.close(),c.j=!1,ip(c,t);return x.return(p);case 8:throw b(),n instanceof
Error&&!S("ytidb_async_stack_killswitch")&&(n.stack=n.stack+"\n"+g.substring(g.indexOf("\n")+1)),Ao(n,c.name,"",(v=c.options.version)!=null?v:-1);}})}
function b(){c.h===d&&(c.h=void 0)}
var c=this;if(!this.j)throw ip(this);if(this.h)return this.h;var d,e={blocking:function(f){f.close()},
closed:b,gf:b,upgrade:this.options.upgrade};return this.h=d=a()};var kp=new hp("YtIdbMeta",{zb:{databases:{Fb:1}},upgrade:function(a,b){b(1)&&Qo(a,"databases",{keyPath:"actualName"})}});
function lp(a,b){var c;return A(function(d){if(d.h==1)return d.yield(jp(kp,b),2);c=d.i;return d.return(Po(c,["databases"],{ka:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return Lo(f.h.put(a,void 0)).then(function(){})})}))})}
function mp(a,b){var c;return A(function(d){if(d.h==1)return a?d.yield(jp(kp,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function np(a,b){var c,d;return A(function(e){return e.h==1?(c=[],e.yield(jp(kp,b),2)):e.h!=3?(d=e.i,e.yield(Po(d,["databases"],{ka:!0,mode:"readonly"},function(f){c.length=0;return Zo(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return $o(g)})}),3)):e.return(c)})}
function op(a){return np(function(b){return b.publicName==="LogsDatabaseV2"&&b.userIdentifier!==void 0},a)}
function pp(a,b,c){return np(function(d){return c?d.userIdentifier!==void 0&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):d.userIdentifier!==void 0&&!a.includes(d.userIdentifier)},b)}
function qp(a){var b,c;return A(function(d){if(d.h==1)return b=sn("YtIdbMeta hasAnyMeta other"),d.yield(np(function(e){return e.userIdentifier!==void 0&&e.userIdentifier!==b},a),2);
c=d.i;return d.return(c.length>0)})}
;var rp,sp=new function(){}(new function(){});
function tp(){var a,b,c,d;return A(function(e){switch(e.h){case 1:a=bo();if((b=a)==null?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=oo)f=/WebKit\/([0-9]+)/.exec(Oc()),f=!!(f&&parseInt(f[1],10)>=600);f&&(f=/WebKit\/([0-9]+)/.exec(Oc()),f=!(f&&parseInt(f[1],10)>=602));if(f||$c)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
Aa(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return e.yield(lp(d,sp),4);case 4:return e.yield(mp("yt-idb-test-do-not-use",sp),5);case 5:return e.return(!0);case 2:return Ba(e),e.return(!1)}})}
function up(){if(rp!==void 0)return rp;fo=!0;return rp=tp().then(function(a){fo=!1;var b;if((b=ao())!=null&&b.h){var c;b={hasSucceededOnce:((c=bo())==null?void 0:c.hasSucceededOnce)||a};var d;(d=ao())==null||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function vp(){return E("ytglobal.idbToken_")||void 0}
function wp(){var a=vp();return a?Promise.resolve(a):up().then(function(b){(b=b?sp:void 0)&&D("ytglobal.idbToken_",b);return b})}
;var xp=0;function yp(a,b){xp||(xp=Aj.pa(function(){var c,d,e,f,g;return A(function(h){switch(h.h){case 1:return h.yield(wp(),2);case 2:c=h.i;if(!c)return h.return();d=!0;Aa(h,3);return h.yield(pp(a,c,b),5);case 5:e=h.i;if(!e.length){d=!1;h.D(6);break}f=e[0];return h.yield(gp(f.actualName),7);case 7:return h.yield(mp(f.actualName,c),6);case 6:h.h=4;h.o=0;break;case 3:g=Ba(h),ko(g),d=!1;case 4:Aj.qa(xp),xp=0,d&&yp(a,b),h.h=0}})}))}
function zp(){var a;return A(function(b){return b.h==1?b.yield(wp(),2):(a=b.i)?b.return(qp(a)):b.return(!1)})}
new kj;function Ap(a){if(!rn())throw a=new wo("AUTH_INVALID",{dbName:a}),ko(a),a;var b=sn();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Bp(a,b,c,d){var e,f,g,h,k,l;return A(function(m){switch(m.h){case 1:return f=(e=Error().stack)!=null?e:"",m.yield(wp(),2);case 2:g=m.i;if(!g)throw h=Bo("openDbImpl",a,b),S("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),ko(h),h;mo(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:Ap(a);Aa(m,3);return m.yield(lp(k,g),5);case 5:return m.yield(fp(k.actualName,b,d),6);case 6:return m.return(m.i);case 3:return l=Ba(m),Aa(m,7),m.yield(mp(k.actualName,
g),9);case 9:m.h=8;m.o=0;break;case 7:Ba(m);case 8:throw l;}})}
function Cp(a,b,c){c=c===void 0?{}:c;return Bp(a,b,!1,c)}
function Dp(a,b,c){c=c===void 0?{}:c;return Bp(a,b,!0,c)}
function Ep(a,b){b=b===void 0?{}:b;var c,d;return A(function(e){if(e.h==1)return e.yield(wp(),2);if(e.h!=3){c=e.i;if(!c)return e.return();mo(a);d=Ap(a);return e.yield(gp(d.actualName,b),3)}return e.yield(mp(d.actualName,c),0)})}
function Fp(a,b,c){a=a.map(function(d){return A(function(e){return e.h==1?e.yield(gp(d.actualName,b),2):e.yield(mp(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function Gp(){var a=a===void 0?{}:a;var b,c;return A(function(d){if(d.h==1)return d.yield(wp(),2);if(d.h!=3){b=d.i;if(!b)return d.return();mo("LogsDatabaseV2");return d.yield(op(b),3)}c=d.i;return d.yield(Fp(c,a,b),0)})}
function Hp(a,b){b=b===void 0?{}:b;var c;return A(function(d){if(d.h==1)return d.yield(wp(),2);if(d.h!=3){c=d.i;if(!c)return d.return();mo(a);return d.yield(gp(a,b),3)}return d.yield(mp(a,c),0)})}
;function Ip(a,b){hp.call(this,a,b);this.options=b;mo(a)}
w(Ip,hp);function Jp(a,b){var c;return function(){c||(c=new Ip(a,b));return c}}
Ip.prototype.i=function(a,b,c){c=c===void 0?{}:c;return(this.options.shared?Dp:Cp)(a,b,Object.assign({},c))};
Ip.prototype.delete=function(a){a=a===void 0?{}:a;return(this.options.shared?Hp:Ep)(this.name,a)};
function Kp(a,b){return Jp(a,b)}
;var Lp={},Mp=Kp("ytGcfConfig",{zb:(Lp.coldConfigStore={Fb:1},Lp.hotConfigStore={Fb:1},Lp),shared:!1,upgrade:function(a,b){b(1)&&(Xo(Qo(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),Xo(Qo(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function Np(a){return jp(Mp(),a)}
function Op(a,b,c){var d,e,f;return A(function(g){switch(g.h){case 1:return d={config:a,hashData:b,timestamp:U()},g.yield(Np(c),2);case 2:return e=g.i,g.yield(e.clear("hotConfigStore"),3);case 3:return g.yield(So(e,"hotConfigStore",d),4);case 4:return f=g.i,g.return(f)}})}
function Pp(a,b,c,d){var e,f,g;return A(function(h){switch(h.h){case 1:return e={config:a,hashData:b,configData:c,timestamp:U()},h.yield(Np(d),2);case 2:return f=h.i,h.yield(f.clear("coldConfigStore"),3);case 3:return h.yield(So(f,"coldConfigStore",e),4);case 4:return g=h.i,h.return(g)}})}
function Qp(a){var b,c;return A(function(d){return d.h==1?d.yield(Np(a),2):d.h!=3?(b=d.i,c=void 0,d.yield(Po(b,["coldConfigStore"],{mode:"readwrite",ka:!0},function(e){return cp(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
function Rp(a){var b,c;return A(function(d){return d.h==1?d.yield(Np(a),2):d.h!=3?(b=d.i,c=void 0,d.yield(Po(b,["hotConfigStore"],{mode:"readwrite",ka:!0},function(e){return cp(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
;function Sp(){F.call(this);this.i=[];this.h=[];var a=E("yt.gcf.config.hotUpdateCallbacks");a?(this.i=[].concat(sa(a)),this.h=a):(this.h=[],D("yt.gcf.config.hotUpdateCallbacks",this.h))}
w(Sp,F);Sp.prototype.aa=function(){for(var a=z(this.i),b=a.next();!b.done;b=a.next()){var c=this.h;b=c.indexOf(b.value);b>=0&&c.splice(b,1)}this.i.length=0;F.prototype.aa.call(this)};function Tp(){this.h=0;this.i=new Sp}
function Up(){var a;return(a=E("yt.gcf.config.hotConfigGroup"))!=null?a:R("RAW_HOT_CONFIG_GROUP")}
function Vp(a,b,c){var d,e,f;return A(function(g){switch(g.h){case 1:if(!S("start_client_gcf")){g.D(0);break}c&&(a.j=c,D("yt.gcf.config.hotConfigGroup",a.j||null));a.o(b);d=vp();if(!d){g.D(3);break}if(c){g.D(4);break}return g.yield(Rp(d),5);case 5:e=g.i,c=(f=e)==null?void 0:f.config;case 4:return g.yield(Op(c,b,d),3);case 3:if(c)for(var h=c,k=z(a.i.h),l=k.next();!l.done;l=k.next())l=l.value,l(h);g.h=0}})}
function Wp(a,b,c){var d,e,f,g;return A(function(h){if(h.h==1){if(!S("start_client_gcf"))return h.D(0);a.coldHashData=b;D("yt.gcf.config.coldHashData",a.coldHashData||null);return(d=vp())?c?h.D(4):h.yield(Qp(d),5):h.D(0)}h.h!=4&&(e=h.i,c=(f=e)==null?void 0:f.config);if(!c)return h.D(0);g=c.configData;return h.yield(Pp(c,b,g,d),0)})}
function Xp(){if(!Tp.h){var a=new Tp;Tp.h=a}a=Tp.h;var b=U()-a.h;if(!(a.h!==0&&b<pm("send_config_hash_timer"))){b=E("yt.gcf.config.coldConfigData");var c=E("yt.gcf.config.hotHashData"),d=E("yt.gcf.config.coldHashData");b&&c&&d&&(a.h=U());return{coldConfigData:b,hotHashData:c,coldHashData:d}}}
Tp.prototype.o=function(a){this.hotHashData=a;D("yt.gcf.config.hotHashData",this.hotHashData||null)};function Yp(){return"INNERTUBE_API_KEY"in Pl&&"INNERTUBE_API_VERSION"in Pl}
function Zp(){return{innertubeApiKey:R("INNERTUBE_API_KEY"),innertubeApiVersion:R("INNERTUBE_API_VERSION"),oe:R("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),ld:R("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),rh:R("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:R("INNERTUBE_CONTEXT_CLIENT_VERSION"),qe:R("INNERTUBE_CONTEXT_HL"),pe:R("INNERTUBE_CONTEXT_GL"),re:R("INNERTUBE_HOST_OVERRIDE")||"",se:!!R("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),sh:!!R("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:R("SERIALIZED_CLIENT_CONFIG_DATA")}}
function $p(a){var b={client:{hl:a.qe,gl:a.pe,clientName:a.ld,clientVersion:a.innertubeContextClientVersion,configInfo:a.oe}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=C.devicePixelRatio;c&&c!=1&&(b.client.screenDensityFloat=String(c));c=R("EXPERIMENTS_TOKEN","");c!==""&&(b.client.experimentsToken=c);c=qm();c.length>0&&(b.request={internalExperimentFlags:c});c=a.ld;if((c==="WEB"||c==="MWEB"||c===1||c===2)&&b){var d;b.client.mainAppWebInfo=(d=b.client.mainAppWebInfo)!=
null?d:{};b.client.mainAppWebInfo.webDisplayMode=Vm()}(d=E("yt.embedded_player.embed_url"))&&b&&(b.thirdParty={embedUrl:d});var e;if(S("web_log_memory_total_kbytes")&&((e=C.navigator)==null?0:e.deviceMemory)){var f;e=(f=C.navigator)==null?void 0:f.deviceMemory;b&&(b.client.memoryTotalKbytes=""+e*1E6)}a.appInstallData&&b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);(a=pn())&&b&&(b.client.connectionType=a);S("web_log_effective_connection_type")&&
(a=qn())&&b&&(b.client.effectiveConnectionType=a);S("start_client_gcf")&&(e=Xp())&&(a=e.coldConfigData,f=e.coldHashData,e=e.hotHashData,b&&(b.client.configInfo=b.client.configInfo||{},a&&(b.client.configInfo.coldConfigData=a),f&&(b.client.configInfo.coldHashData=f),e&&(b.client.configInfo.hotHashData=e)));R("DELEGATED_SESSION_ID")&&!S("pageid_as_header_web")&&(b.user={onBehalfOfUser:R("DELEGATED_SESSION_ID")});!S("fill_delegate_context_in_gel_killswitch")&&(a=R("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&
(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=R("INNERTUBE_CONTEXT");var g;if(S("enable_persistent_device_token")&&(a==null?0:(g=a.client)==null?0:g.rolloutToken)){var h;b.client.rolloutToken=a==null?void 0:(h=a.client)==null?void 0:h.rolloutToken}g=Object;h=g.assign;a=b.client;f={};e=z(Object.entries(cm(R("DEVICE",""))));for(d=e.next();!d.done;d=e.next())c=z(d.value),d=c.next().value,c=c.next().value,d==="cbrand"?f.deviceMake=c:d==="cmodel"?f.deviceModel=c:d==="cbr"?f.browserName=
c:d==="cbrver"?f.browserVersion=c:d==="cos"?f.osName=c:d==="cosver"?f.osVersion=c:d==="cplatform"&&(f.platform=c);b.client=h.call(g,a,f);return b}
function aq(a,b,c){c=c===void 0?{}:c;var d={};R("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":R("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||R("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.authorization||R("AUTHORIZATION");b||(a?b="Bearer "+E("gapi.auth.getToken")().hh:(a=Ym(Xm()),S("pageid_as_header_web")||delete a["X-Goog-PageId"],d=Object.assign({},d,a)));b&&(d.Authorization=b);return d}
;var bq=typeof TextEncoder!=="undefined"?new TextEncoder:null,cq=bq?function(a){return bq.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
e<128?b[c++]=e:(e<2048?b[c++]=e>>6|192:((e&64512)==55296&&d+1<a.length&&(a.charCodeAt(d+1)&64512)==56320?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};function dq(a,b){this.version=a;this.args=b}
dq.prototype.serialize=function(){return{version:this.version,args:this.args}};function eq(a,b){this.topic=a;this.h=b}
eq.prototype.toString=function(){return this.topic};var fq=E("ytPubsub2Pubsub2Instance")||new N;N.prototype.subscribe=N.prototype.subscribe;N.prototype.unsubscribeByKey=N.prototype.Tb;N.prototype.publish=N.prototype.mb;N.prototype.clear=N.prototype.clear;D("ytPubsub2Pubsub2Instance",fq);var gq=E("ytPubsub2Pubsub2SubscribedKeys")||{};D("ytPubsub2Pubsub2SubscribedKeys",gq);var hq=E("ytPubsub2Pubsub2TopicToKeys")||{};D("ytPubsub2Pubsub2TopicToKeys",hq);var iq=E("ytPubsub2Pubsub2IsAsync")||{};D("ytPubsub2Pubsub2IsAsync",iq);
D("ytPubsub2Pubsub2SkipSubKey",null);function jq(a,b){var c=kq();c&&c.publish.call(c,a.toString(),a,b)}
function lq(a){var b=mq,c=kq();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=E("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(gq[d])try{if(f&&b instanceof eq&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.Ed){var l=new h;h.Ed=l.version}var m=h.Ed}catch(y){}if(!m||k.version!=m)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{m=Reflect;var n=m.construct;
var p=k.args,t=p.length;if(t>0){var v=Array(t);for(k=0;k<t;k++)v[k]=p[k];var x=v}else x=[];f=n.call(m,h,x)}catch(y){throw y.message="yt.pubsub2.Data.deserialize(): "+y.message,y;}}catch(y){throw y.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+y.message,y;}a.call(window,f)}catch(y){Vl(y)}},iq[b.toString()]?E("yt.scheduler.instance")?Aj.pa(g):mm(g,0):g())});
gq[d]=!0;hq[b.toString()]||(hq[b.toString()]=[]);hq[b.toString()].push(d);return d}
function nq(){var a=oq,b=lq(function(c){a.apply(void 0,arguments);pq(b)});
return b}
function pq(a){var b=kq();b&&(typeof a==="number"&&(a=[a]),Pb(a,function(c){b.unsubscribeByKey(c);delete gq[c]}))}
function kq(){return E("ytPubsub2Pubsub2Instance")}
;function qq(a,b,c){c=c===void 0?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&jq("meta_logging_csi_event",{timerName:a,Lh:b})}
;var rq=void 0,sq=void 0;function tq(){sq||(sq=ol(R("WORKER_SERIALIZATION_URL")));return sq||void 0}
function uq(){var a=tq();rq||a===void 0||(rq=new Worker(ob(a),void 0));return rq}
;var vq=pm("max_body_size_to_compress",5E5),wq=pm("min_body_size_to_compress",500),xq=!0,yq=0,zq=0,Aq=pm("compression_performance_threshold_lr",250),Bq=pm("slow_compressions_before_abandon_count",4),Cq=!1,Dq=new Map,Eq=1,Fq=!0;function Gq(){if(typeof Worker==="function"&&tq()&&!Cq){var a=function(c){c=c.data;if(c.op==="gzippedGelBatch"){var d=Dq.get(c.key);d&&(Hq(c.gzippedBatch,d.latencyPayload,d.url,d.options,d.sendFn),Dq.delete(c.key))}},b=uq();
b&&(b.addEventListener("message",a),b.onerror=function(){Dq.clear()},Cq=!0)}}
function Iq(a,b,c,d,e){e=e===void 0?!1:e;var f={startTime:U(),ticks:{},infos:{}};if(xq)try{var g=Jq(b);if(g!=null&&(g>vq||g<wq))d(a,c);else{if(S("gzip_gel_with_worker")&&(S("initial_gzip_use_main_thread")&&!Fq||!S("initial_gzip_use_main_thread"))){Cq||Gq();var h=uq();if(h&&!e){Dq.set(Eq,{latencyPayload:f,url:a,options:c,sendFn:d});h.postMessage({op:"gelBatchToGzip",serializedBatch:b,key:Eq});Eq++;return}}var k=nl(cq(b));Hq(k,f,a,c,d)}}catch(l){Wl(l),d(a,c)}else d(a,c)}
function Hq(a,b,c,d,e){Fq=!1;var f=U();b.ticks.gelc=f;zq++;S("disable_compression_due_to_performance_degredation")&&f-b.startTime>=Aq&&(yq++,S("abandon_compression_after_N_slow_zips")?zq===pm("compression_disable_point")&&yq>Bq&&(xq=!1):xq=!1);Kq(b);d.headers||(d.headers={});d.headers["Content-Encoding"]="gzip";d.postBody=a;d.postParams=void 0;e(c,d)}
function Lq(a){var b=b===void 0?!1:b;var c=c===void 0?!1:c;var d=U(),e={startTime:d,ticks:{},infos:{}},f=b?E("yt.logging.gzipForFetch",!1):!0;if(xq&&f){if(!a.body)return a;try{var g=c?a.body:typeof a.body==="string"?a.body:JSON.stringify(a.body);f=g;if(!c&&typeof g==="string"){var h=Jq(g);if(h!=null&&(h>vq||h<wq))return a;c=b?{level:1}:void 0;f=nl(cq(g),c);var k=U();e.ticks.gelc=k;if(b){zq++;if((S("disable_compression_due_to_performance_degredation")||S("disable_compression_due_to_performance_degradation_lr"))&&
k-d>=Aq)if(yq++,S("abandon_compression_after_N_slow_zips")||S("abandon_compression_after_N_slow_zips_lr")){b=yq/zq;var l=Bq/pm("compression_disable_point");zq>0&&zq%pm("compression_disable_point")===0&&b>=l&&(xq=!1)}else xq=!1;Kq(e)}}a.headers=Object.assign({},{"Content-Encoding":"gzip"},a.headers||{});a.body=f;return a}catch(m){return Wl(m),a}}else return a}
function Jq(a){try{return(new Blob(a.split(""))).size}catch(b){return Wl(b),null}}
function Kq(a){S("gel_compression_csi_killswitch")||!S("log_gel_compression_latency")&&!S("log_gel_compression_latency_lr")||qq("gel_compression",a,{sampleRate:.1})}
;function Mq(a){a=Object.assign({},a);delete a.Authorization;var b=bg();if(b){var c=new Ej;c.update(R("INNERTUBE_API_KEY"));c.update(b);a.hash=id(c.digest(),3)}return a}
;var Nq;function Oq(){Nq||(Nq=new $n("yt.innertube"));return Nq}
function Pq(a,b,c,d){if(d)return null;d=Oq().get("nextId",!0)||1;var e=Oq().get("requests",!0)||{};e[d]={method:a,request:b,authState:Mq(c),requestTime:Math.round(U())};Oq().set("nextId",d+1,86400,!0);Oq().set("requests",e,86400,!0);return d}
function Qq(a){var b=Oq().get("requests",!0)||{};delete b[a];Oq().set("requests",b,86400,!0)}
function Rq(a){var b=Oq().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(Math.round(U())-d.requestTime<6E4)){var e=d.authState,f=Mq(aq(!1));pg(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(U())),Sq(a,d.method,e,{}));delete b[c]}}Oq().set("requests",b,86400,!0)}}
;function Tq(a){this.Wb=this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.rb=function(){};
this.now=Date.now;this.Ib=!1;var b;this.Ad=(b=a.Ad)!=null?b:100;var c;this.vd=(c=a.vd)!=null?c:1;var d;this.td=(d=a.td)!=null?d:2592E6;var e;this.sd=(e=a.sd)!=null?e:12E4;var f;this.ud=(f=a.ud)!=null?f:5E3;var g;this.V=(g=a.V)!=null?g:void 0;this.cc=!!a.cc;var h;this.Zb=(h=a.Zb)!=null?h:.1;var k;this.oc=(k=a.oc)!=null?k:10;a.handleError&&(this.handleError=a.handleError);a.rb&&(this.rb=a.rb);a.Ib&&(this.Ib=a.Ib);a.Wb&&(this.Wb=a.Wb);this.W=a.W;this.Ba=a.Ba;this.fa=a.fa;this.ea=a.ea;this.sendFn=a.sendFn;
this.Pc=a.Pc;this.Mc=a.Mc;Uq(this)&&(!this.W||this.W("networkless_logging"))&&Vq(this)}
function Vq(a){Uq(a)&&!a.Ib&&(a.h=!0,a.cc&&Math.random()<=a.Zb&&a.fa.Rd(a.V),Wq(a),a.ea.va()&&a.Sb(),a.ea.listen(a.Pc,a.Sb.bind(a)),a.ea.listen(a.Mc,a.Zc.bind(a)))}
r=Tq.prototype;r.writeThenSend=function(a,b){var c=this;b=b===void 0?{}:b;if(Uq(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.fa.set(d,this.V).then(function(e){d.id=e;c.ea.va()&&Xq(c,d)}).catch(function(e){Xq(c,d);
Yq(c,e)})}else this.sendFn(a,b)};
r.sendThenWrite=function(a,b,c){var d=this;b=b===void 0?{}:b;if(Uq(this)&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.W&&this.W("nwl_skip_retry")&&(e.skipRetry=c);if(this.ea.va()||this.W&&this.W("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return A(function(k){if(k.h==1)return k.yield(d.fa.set(e,d.V).catch(function(l){Yq(d,l)}),2);
f(g,h);k.h=0})}}this.sendFn(a,b,e.skipRetry)}else this.fa.set(e,this.V).catch(function(g){d.sendFn(a,b,e.skipRetry);
Yq(d,g)})}else this.sendFn(a,b,this.W&&this.W("nwl_skip_retry")&&c)};
r.sendAndWrite=function(a,b){var c=this;b=b===void 0?{}:b;if(Uq(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){d.id!==void 0?c.fa.qb(d.id,c.V):e=!0;c.ea.fb&&c.W&&c.W("vss_network_hint")&&c.ea.fb(!0);f(g,h)};
this.sendFn(d.url,d.options,void 0,!0);this.fa.set(d,this.V).then(function(g){d.id=g;e&&c.fa.qb(d.id,c.V)}).catch(function(g){Yq(c,g)})}else this.sendFn(a,b,void 0,!0)};
r.Sb=function(){var a=this;if(!Uq(this))throw Error("IndexedDB is not supported: throttleSend");this.i||(this.i=this.Ba.pa(function(){var b;return A(function(c){if(c.h==1)return c.yield(a.fa.hd("NEW",a.V),2);if(c.h!=3)return b=c.i,b?c.yield(Xq(a,b),3):(a.Zc(),c.return());a.i&&(a.i=0,a.Sb());c.h=0})},this.Ad))};
r.Zc=function(){this.Ba.qa(this.i);this.i=0};
function Xq(a,b){var c;return A(function(d){switch(d.h){case 1:if(!Uq(a))throw Error("IndexedDB is not supported: immediateSend");if(b.id===void 0){d.D(2);break}return d.yield(a.fa.we(b.id,a.V),3);case 3:(c=d.i)||a.rb(Error("The request cannot be found in the database."));case 2:if(Zq(a,b,a.td)){d.D(4);break}a.rb(Error("Networkless Logging: Stored logs request expired age limit"));if(b.id===void 0){d.D(5);break}return d.yield(a.fa.qb(b.id,a.V),5);case 5:return d.return();case 4:b.skipRetry||(b=$q(a,
b));if(!b){d.D(0);break}if(!b.skipRetry||b.id===void 0){d.D(8);break}return d.yield(a.fa.qb(b.id,a.V),8);case 8:a.sendFn(b.url,b.options,!!b.skipRetry),d.h=0}})}
function $q(a,b){if(!Uq(a))throw Error("IndexedDB is not supported: updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k,l;return A(function(m){switch(m.h){case 1:g=ar(f);(h=br(f))&&a.W&&a.W("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.W&&a.W("nwl_consider_error_code")&&g||a.W&&!a.W("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.oc)){m.D(2);break}if(!a.ea.vc){m.D(3);break}return m.yield(a.ea.vc(),3);case 3:if(a.ea.va()){m.D(2);break}c(e,f);if(!a.W||!a.W("nwl_consider_error_code")||((k=b)==null?void 0:k.id)===void 0){m.D(6);
break}return m.yield(a.fa.Qc(b.id,a.V,!1),6);case 6:return m.return();case 2:if(a.W&&a.W("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.oc)return m.return();a.potentialEsfErrorCounter++;if(((l=b)==null?void 0:l.id)===void 0){m.D(8);break}return b.sendCount<a.vd?m.yield(a.fa.Qc(b.id,a.V,!0,h?!1:void 0),12):m.yield(a.fa.qb(b.id,a.V),8);case 12:a.Ba.pa(function(){a.ea.va()&&a.Sb()},a.ud);
case 8:c(e,f),m.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return A(function(h){if(h.h==1)return((g=b)==null?void 0:g.id)===void 0?h.D(2):h.yield(a.fa.qb(b.id,a.V),2);a.ea.fb&&a.W&&a.W("vss_network_hint")&&a.ea.fb(!0);d(e,f);h.h=0})};
return b}
function Zq(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function Wq(a){if(!Uq(a))throw Error("IndexedDB is not supported: retryQueuedRequests");a.fa.hd("QUEUED",a.V).then(function(b){b&&!Zq(a,b,a.sd)?a.Ba.pa(function(){return A(function(c){if(c.h==1)return b.id===void 0?c.D(2):c.yield(a.fa.Qc(b.id,a.V),2);Wq(a);c.h=0})}):a.ea.va()&&a.Sb()})}
function Yq(a,b){a.Hd&&!a.ea.va()?a.Hd(b):a.handleError(b)}
function Uq(a){return!!a.V||a.Wb}
function ar(a){var b;return(a=a==null?void 0:(b=a.error)==null?void 0:b.code)&&a>=400&&a<=599?!1:!0}
function br(a){var b;a=a==null?void 0:(b=a.error)==null?void 0:b.code;return!(a!==400&&a!==415)}
;var cr;
function dr(){if(cr)return cr();var a={};cr=Kp("LogsDatabaseV2",{zb:(a.LogsRequestsStore={Fb:2},a),shared:!1,upgrade:function(b,c,d){c(2)&&Qo(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),Xo(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return cr()}
;function er(a){return jp(dr(),a)}
function fr(a,b){var c,d,e,f;return A(function(g){if(g.h==1)return c={startTime:U(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},g.yield(er(b),2);if(g.h!=3)return d=g.i,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:R("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),g.yield(So(d,"LogsRequestsStore",e),3);f=g.i;c.ticks.tc=U();gr(c);return g.return(f)})}
function hr(a,b){var c,d,e,f,g,h,k,l;return A(function(m){if(m.h==1)return c={startTime:U(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},m.yield(er(b),2);if(m.h!=3)return d=m.i,e=R("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,U()],h=IDBKeyRange.bound(f,g),k="prev",S("use_fifo_for_networkless")&&(k="next"),l=void 0,m.yield(Po(d,["LogsRequestsStore"],{mode:"readwrite",ka:!0},function(n){return cp(n.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:k},
function(p){p.getValue()&&(l=p.getValue(),a==="NEW"&&(l.status="QUEUED",p.update(l)))})}),3);
c.ticks.tc=U();gr(c);return m.return(l)})}
function ir(a,b){var c;return A(function(d){if(d.h==1)return d.yield(er(b),2);c=d.i;return d.return(Po(c,["LogsRequestsStore"],{mode:"readwrite",ka:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",Lo(f.h.put(g,void 0)).then(function(){return g})})}))})}
function jr(a,b,c,d){c=c===void 0?!0:c;var e;return A(function(f){if(f.h==1)return f.yield(er(b),2);e=f.i;return f.return(Po(e,["LogsRequestsStore"],{mode:"readwrite",ka:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(k){return k?(k.status="NEW",c&&(k.sendCount+=1),d!==void 0&&(k.options.compress=d),Lo(h.h.put(k,void 0)).then(function(){return k})):Fo.resolve(void 0)})}))})}
function kr(a,b){var c;return A(function(d){if(d.h==1)return d.yield(er(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function lr(a){var b,c;return A(function(d){if(d.h==1)return d.yield(er(a),2);b=d.i;c=U()-2592E6;return d.yield(Po(b,["LogsRequestsStore"],{mode:"readwrite",ka:!0},function(e){return Zo(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return $o(f)})})}),0)})}
function mr(){A(function(a){return a.yield(Gp(),0)})}
function gr(a){S("nwl_csi_killswitch")||qq("networkless_performance",a,{sampleRate:1})}
;var nr={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,
visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,
spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,
vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrCowatchPartyEvent:492,vrCowatchUserStartOrJoinEvent:504,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,
mbsConnectionInitiated:138,mbsPlaybackInitiated:139,mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,
kidsParentalGateTracking:168,kidsSignedOutSettingsStatus:437,kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,
transactionFlowPaymentSubmitted:460,transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,
ypcPauseFlowSucceeded:190,ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,
ypcFamilyCreateFlowCancelled:259,ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,watchTimeSegment:219,appWidthLayoutError:221,
accountRegistryChange:226,userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,deviceContextEvent:244,templateResolutionException:245,
musicSideloadedPlaylistServiceCalled:246,embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,ytbFileOpened:268,tfliteModelError:269,apiTest:270,
yongleUsbSetup:271,touStrikeInterstitialEvent:272,liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,watchRestoreAttempt:294,liteAccountSignIn:296,
notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,tvhtml5UnexpectedRestart:319,tvhtml5StabilityTraceEvent:478,
tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,voiceLanguageChanged:322,tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,
iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,sliEventBatch:344,postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,
mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,clientHintsPolyfillEvent:364,proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,
mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,startupSignalEvent:384,accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,
clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,playerEvent:410,sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,
mdeQosEvent:510,mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,mdeExporterEvent:497,genericClientExperimentEvent:423,homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,lockModeTimeoutEvent:483,externalVideoShareToYoutubeAttempt:501,parentCodeEvent:502,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,
mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,
cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,producerProjectElementAdded:453,producerProjectElementRemoved:454,producerAppStateChange:509,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,miniAppPlayEvent:469,elementsDebugCounters:470,
fontLoadEvent:471,webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480,cobaltTelemetryEvent:481,crossDevicePlayback:482,channelCreatedWithObakeImage:484,channelEditedWithObakeImage:485,offlineDeleteEvent:486,crossDeviceNotificationTransfer:487,androidIntentEvent:488,unpluggedAmbientInterludesCounterfactualEvent:489,keyPlaysPlayback:490,shortsCreationFallbackEvent:493,vssData:491,
castMatch:494,miniAppPerformanceMetrics:495,userFeedbackEvent:496,kidsGuestSessionMismatch:498,musicSideloadedPlaylistMigrationEvent:499,sleepTimerSessionFinishEvent:500,watchEpPromoConflict:503,innertubeResponseCacheMetrics:505,miniAppAdEvent:506,dataPlanUpsellEvent:507,producerProjectRenamed:508,producerMediaSelectionEvent:511,embedsAutoplayStatusChanged:512,remoteConnectEvent:513,connectedSessionMisattributionEvent:514};var or={},pr=Kp("ServiceWorkerLogsDatabase",{zb:(or.SWHealthLog={Fb:1},or),shared:!0,upgrade:function(a,b){b(1)&&Xo(Qo(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function qr(a){return jp(pr(),a)}
function rr(a){var b,c;A(function(d){if(d.h==1)return d.yield(qr(a),2);b=d.i;c=U()-2592E6;return d.yield(Po(b,["SWHealthLog"],{mode:"readwrite",ka:!0},function(e){return Zo(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return $o(f)})})}),0)})}
function sr(a){var b;return A(function(c){if(c.h==1)return c.yield(qr(a),2);b=c.i;return c.yield(b.clear("SWHealthLog"),0)})}
;var tr={},ur=0;function vr(a){var b=b===void 0?{}:b;var c=new Image,d=""+ur++;tr[d]=c;c.onload=c.onerror=function(){delete tr[d]};
b.Hh&&(c.referrerPolicy="no-referrer");c.src=a}
;var wr;function xr(){wr||(wr=new $n("yt.offline"));return wr}
function yr(a){if(S("offline_error_handling")){var b=xr().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);xr().set("errors",b,2592E3,!0)}}
;function zr(){this.h=new Map;this.i=!1}
function Ar(){if(!zr.h){var a=E("yt.networkRequestMonitor.instance")||new zr;D("yt.networkRequestMonitor.instance",a);zr.h=a}return zr.h}
zr.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
zr.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:a===!1&&this.i?!0:null};
zr.prototype.removeParams=function(a){return a.split("?")[0]};
zr.prototype.removeParams=zr.prototype.removeParams;zr.prototype.isEndpointCFR=zr.prototype.isEndpointCFR;zr.prototype.requestComplete=zr.prototype.requestComplete;zr.getInstance=Ar;function Br(){Sh.call(this);var a=this;this.j=!1;this.i=zj();this.i.listen("networkstatus-online",function(){if(a.j&&S("offline_error_handling")){var b=xr().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new T(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;Vl(d)}xr().set("errors",{},2592E3,!0)}}})}
w(Br,Sh);function Cr(){if(!Br.h){var a=E("yt.networkStatusManager.instance")||new Br;D("yt.networkStatusManager.instance",a);Br.h=a}return Br.h}
r=Br.prototype;r.va=function(){return this.i.va()};
r.fb=function(a){this.i.i=a};
r.je=function(){var a=window.navigator.onLine;return a===void 0?!0:a};
r.Yd=function(){this.j=!0};
r.listen=function(a,b){return this.i.listen(a,b)};
r.vc=function(a){a=xj(this.i,a);a.then(function(b){S("use_cfr_monitor")&&Ar().requestComplete("generate_204",b)});
return a};
Br.prototype.sendNetworkCheckRequest=Br.prototype.vc;Br.prototype.listen=Br.prototype.listen;Br.prototype.enableErrorFlushing=Br.prototype.Yd;Br.prototype.getWindowStatus=Br.prototype.je;Br.prototype.networkStatusHint=Br.prototype.fb;Br.prototype.isNetworkAvailable=Br.prototype.va;Br.getInstance=Cr;function Dr(a){a=a===void 0?{}:a;Sh.call(this);var b=this;this.i=this.u=0;this.j=Cr();var c=E("yt.networkStatusManager.instance.listen").bind(this.j);c&&(a.rateLimit?(this.rateLimit=a.rateLimit,c("networkstatus-online",function(){Er(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Er(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){Th(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Th(b,"publicytnetworkstatus-offline")})))}
w(Dr,Sh);Dr.prototype.va=function(){var a=E("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.j)():!0};
Dr.prototype.fb=function(a){var b=E("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)};
Dr.prototype.vc=function(a){var b=this,c;return A(function(d){c=E("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j);return S("skip_network_check_if_cfr")&&Ar().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.fb(((f=window.navigator)==null?void 0:f.onLine)||!0);e(b.va())})):c?d.return(c(a)):d.return(!0)})};
function Er(a,b){a.rateLimit?a.i?(Aj.qa(a.u),a.u=Aj.pa(function(){a.o!==b&&(Th(a,b),a.o=b,a.i=U())},a.rateLimit-(U()-a.i))):(Th(a,b),a.o=b,a.i=U()):Th(a,b)}
;var Fr;function Gr(){var a=Tq.call;Fr||(Fr=new Dr({xh:!0,oh:!0}));a.call(Tq,this,{fa:{Rd:lr,qb:kr,hd:hr,we:ir,Qc:jr,set:fr},ea:Fr,handleError:function(b,c,d){var e,f=d==null?void 0:(e=d.error)==null?void 0:e.code;if(f===400||f===415){var g;Wl(new T(b.message,c,d==null?void 0:(g=d.error)==null?void 0:g.code),void 0,void 0,void 0,!0)}else Vl(b)},
rb:Wl,sendFn:Hr,now:U,Hd:yr,Ba:Zn(),Pc:"publicytnetworkstatus-online",Mc:"publicytnetworkstatus-offline",cc:!0,Zb:.1,oc:pm("potential_esf_error_limit",10),W:S,Ib:!(rn()&&Ir())});this.j=new kj;S("networkless_immediately_drop_all_requests")&&mr();Hp("LogsDatabaseV2")}
w(Gr,Tq);function Jr(){var a=E("yt.networklessRequestController.instance");a||(a=new Gr,D("yt.networklessRequestController.instance",a),S("networkless_logging")&&wp().then(function(b){a.V=b;Vq(a);a.j.resolve();a.cc&&Math.random()<=a.Zb&&a.V&&rr(a.V);S("networkless_immediately_drop_sw_health_store")&&Kr(a)}));
return a}
Gr.prototype.writeThenSend=function(a,b){b||(b={});b=Pr(a,b);rn()||(this.h=!1);Tq.prototype.writeThenSend.call(this,a,b)};
Gr.prototype.sendThenWrite=function(a,b,c){b||(b={});b=Pr(a,b);rn()||(this.h=!1);Tq.prototype.sendThenWrite.call(this,a,b,c)};
Gr.prototype.sendAndWrite=function(a,b){b||(b={});b=Pr(a,b);rn()||(this.h=!1);Tq.prototype.sendAndWrite.call(this,a,b)};
Gr.prototype.awaitInitialization=function(){return this.j.promise};
function Kr(a){var b;A(function(c){if(!a.V)throw b=Bo("clearSWHealthLogsDb"),b;return c.return(sr(a.V).catch(function(d){a.handleError(d)}))})}
function Hr(a,b,c,d){d=d===void 0?!1:d;b=S("web_fp_via_jspb")?Object.assign({},b):b;S("use_cfr_monitor")&&Qr(a,b);if(S("use_request_time_ms_header"))b.headers&&gm(a)&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(U())));else{var e;if((e=b.postParams)==null?0:e.requestTimeMs)b.postParams.requestTimeMs=Math.round(U())}if(c&&Object.keys(b).length===0){var f=f===void 0?"":f;var g=g===void 0?!1:g;var h=h===void 0?!1:h;if(a)if(f)um(a,void 0,"POST",f,void 0);else if(R("USE_NET_AJAX_FOR_PING_TRANSPORT",
!1)||h)um(a,void 0,"GET","",void 0,void 0,g,h);else{b:{try{var k=new eb({url:a});if(k.u?typeof k.j!=="string"||k.j.length===0?0:{version:3,Wd:k.j,Od:fb(k,"&act=1&ri=1"+gb(k))}:k.H&&{version:4,Wd:fb(k,"&dct=1&suid="+k.o),Od:fb(k,"&act=1&ri=1&suid="+k.o)}){var l=cc(dc(5,a)),m;if(!(m=!l||!l.endsWith("/aclk"))){var n=a.search(mc),p=lc(a,0,"ri",n);if(p<0)var t=null;else{var v=a.indexOf("&",p);if(v<0||v>n)v=n;t=decodeURIComponent(a.slice(p+3,v!==-1?v:0).replace(/\+/g," "))}m=t!=="1"}var x=!m;break b}}catch(H){}x=
!1}if(x){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var y=!0;break b}}catch(H){}y=!1}c=y?!0:!1}else c=!1;c||vr(a)}}else b.compress?b.postBody?(typeof b.postBody!=="string"&&(b.postBody=JSON.stringify(b.postBody)),Iq(a,b.postBody,b,zm,d)):Iq(a,JSON.stringify(b.postParams),b,ym,d):zm(a,b)}
function Pr(a,b){S("use_event_time_ms_header")&&gm(a)&&(b.headers||(b.headers={}),b.headers["X-Goog-Event-Time"]=JSON.stringify(Math.round(U())));return b}
function Qr(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){Ar().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){Ar().requestComplete(a,!0);d(e,f)}}
function Ir(){return ec(document.location.toString())!=="www.youtube-nocookie.com"}
;var Rr=!1,Sr=C.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:Rr};D("ytNetworklessLoggingInitializationOptions",Sr);function Tr(){var a;A(function(b){if(b.h==1)return b.yield(wp(),2);a=b.i;if(!a||!rn()&&!S("nwl_init_require_datasync_id_killswitch")||!Ir())return b.D(0);Rr=!0;Sr.isNwlInitialized=Rr;return b.yield(Jr().awaitInitialization(),0)})}
;function Ur(a){var b=this;this.config_=null;a?this.config_=a:Yp()&&(this.config_=Zp());un(function(){Rq(b)},5E3)}
Ur.prototype.isReady=function(){!this.config_&&Yp()&&(this.config_=Zp());return!!this.config_};
function Sq(a,b,c,d){function e(n){n=n===void 0?!1:n;var p;if(d.retry&&h!="www.youtube-nocookie.com"&&(n||S("skip_ls_gel_retry")||g.headers["Content-Type"]!=="application/json"||(p=Pq(b,c,l,k)),p)){var t=g.onSuccess,v=g.onFetchSuccess;g.onSuccess=function(H,K){Qq(p);t(H,K)};
c.onFetchSuccess=function(H,K){Qq(p);v(H,K)}}try{if(n&&d.retry&&!d.networklessOptions.bypassNetworkless)g.method="POST",d.networklessOptions.writeThenSend?Jr().writeThenSend(m,g):Jr().sendAndWrite(m,g);
else if(d.compress){var x=!d.networklessOptions.writeThenSend;if(g.postBody){var y=g.postBody;typeof y!=="string"&&(y=JSON.stringify(g.postBody));Iq(m,y,g,zm,x)}else Iq(m,JSON.stringify(g.postParams),g,ym,x)}else S("web_all_payloads_via_jspb")?zm(m,g):ym(m,g)}catch(H){if(H.name==="InvalidAccessError")p&&(Qq(p),p=0),Wl(Error("An extension is blocking network request."));else throw H;}p&&un(function(){Rq(a)},5E3)}
!R("VISITOR_DATA")&&b!=="visitor_id"&&Math.random()<.01&&Wl(new T("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new T("innertube xhrclient not ready",b,c,d);Vl(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(n,p){if(d.onSuccess)d.onSuccess(p)},
onFetchSuccess:function(n){if(d.onSuccess)d.onSuccess(n)},
onError:function(n,p){if(d.onError)d.onError(p)},
onFetchError:function(n){if(d.onError)d.onError(n)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.re)&&(h=f);var k=a.config_.se||!1,l=aq(k,h,d);Object.assign(g.headers,l);g.headers.Authorization&&!h&&k&&(g.headers["x-origin"]=window.location.origin);var m=em(""+h+("/youtubei/"+a.config_.innertubeApiVersion+"/"+b),{alt:"json"});(E("ytNetworklessLoggingInitializationOptions")?Sr.isNwlInitialized:Rr)?up().then(function(n){e(n)}):e(!1)}
;var Vr=0,Wr=bd?"webkit":ad?"moz":Zc?"ms":Yc?"o":"";D("ytDomDomGetNextId",E("ytDomDomGetNextId")||function(){return++Vr});var Xr={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Yr(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Xr||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&c.nodeType==3&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else this.type=="mouseover"?d=a.fromElement:this.type=="mouseout"&&(d=a.toElement);this.relatedTarget=d;this.clientX=a.clientX!=void 0?a.clientX:a.pageX;this.clientY=a.clientY!=void 0?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||(this.type=="keypress"?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function Zr(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
Yr.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Yr.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Yr.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var lg=C.ytEventsEventsListeners||{};D("ytEventsEventsListeners",lg);var $r=C.ytEventsEventsCounter||{count:0};D("ytEventsEventsCounter",$r);
function as(a,b,c,d){d=d===void 0?{}:d;a.addEventListener&&(b!="mouseenter"||"onmouseenter"in document?b!="mouseleave"||"onmouseenter"in document?b=="mousewheel"&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return kg(function(e){var f=typeof e[4]==="boolean"&&e[4]==!!d,g=Ra(e[4])&&Ra(d)&&pg(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function bs(a,b,c,d){d=d===void 0?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=as(a,b,c,d);if(e)return e;e=++$r.count+"";var f=!(b!="mouseenter"&&b!="mouseleave"||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new Yr(h);if(!yg(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new Yr(h);
h.currentTarget=a;return c.call(a,h)};
g=Ul(g);a.addEventListener?(b=="mouseenter"&&f?b="mouseover":b=="mouseleave"&&f?b="mouseout":b=="mousewheel"&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),cs()||typeof d==="boolean"?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);lg[e]=[a,b,c,g,d];return e}
function ds(a){a&&(typeof a=="string"&&(a=[a]),Pb(a,function(b){if(b in lg){var c=lg[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?cs()||typeof c==="boolean"?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete lg[b]}}))}
var cs=hi(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});function es(a){this.G=a;this.h=null;this.o=0;this.A=null;this.u=0;this.i=[];for(a=0;a<4;a++)this.i.push(0);this.j=0;this.U=bs(window,"mousemove",Xa(this.X,this));a=Xa(this.P,this);typeof a==="function"&&(a=Ul(a));this.Y=window.setInterval(a,25)}
ab(es,F);es.prototype.X=function(a){a.h===void 0&&Zr(a);var b=a.h;a.i===void 0&&Zr(a);this.h=new hg(b,a.i)};
es.prototype.P=function(){if(this.h){var a=U();if(this.o!=0){var b=this.A,c=this.h,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.o);this.i[this.j]=Math.abs((d-this.u)/this.u)>.5?1:0;for(c=b=0;c<4;c++)b+=this.i[c]||0;b>=3&&this.G();this.u=d}this.o=a;this.A=this.h;this.j=(this.j+1)%4}};
es.prototype.aa=function(){window.clearInterval(this.Y);ds(this.U)};var gs={};
function hs(a){var b=a===void 0?{}:a;a=b.Fe===void 0?!1:b.Fe;b=b.Zd===void 0?!0:b.Zd;if(E("_lact",window)==null){var c=parseInt(R("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;D("_lact",c,window);D("_fact",c,window);c==-1&&is();bs(document,"keydown",is);bs(document,"keyup",is);bs(document,"mousedown",is);bs(document,"mouseup",is);a?bs(window,"touchmove",function(){js("touchmove",200)},{passive:!0}):(bs(window,"resize",function(){js("resize",200)}),b&&bs(window,"scroll",function(){js("scroll",200)}));
new es(function(){js("mouse",100)});
bs(document,"touchstart",is,{passive:!0});bs(document,"touchend",is,{passive:!0})}}
function js(a,b){gs[a]||(gs[a]=!0,Aj.pa(function(){is();gs[a]=!1},b))}
function is(){E("_lact",window)==null&&hs();var a=Date.now();D("_lact",a,window);E("_fact",window)==-1&&D("_fact",a,window);(a=E("ytglobal.ytUtilActivityCallback_"))&&a()}
function ks(){var a=E("_lact",window);return a==null?-1:Math.max(Date.now()-a,0)}
;var ls=C.ytPubsubPubsubInstance||new N,ms=C.ytPubsubPubsubSubscribedKeys||{},ns=C.ytPubsubPubsubTopicToKeys||{},ps=C.ytPubsubPubsubIsSynchronous||{};function qs(a,b){var c=rs();if(c&&b){var d=c.subscribe(a,function(){function e(){ms[d]&&b.apply&&typeof b.apply=="function"&&b.apply(window,f)}
var f=arguments;try{ps[a]?e():mm(e,0)}catch(g){Vl(g)}},void 0);
ms[d]=!0;ns[a]||(ns[a]=[]);ns[a].push(d);return d}return 0}
function ss(a){var b=rs();b&&(typeof a==="number"?a=[a]:typeof a==="string"&&(a=[parseInt(a,10)]),Pb(a,function(c){b.unsubscribeByKey(c);delete ms[c]}))}
function ts(a,b){var c=rs();c&&c.publish.apply(c,arguments)}
function us(a){var b=rs();if(b)if(b.clear(a),a)vs(a);else for(var c in ns)vs(c)}
function rs(){return C.ytPubsubPubsubInstance}
function vs(a){ns[a]&&(a=ns[a],Pb(a,function(b){ms[b]&&delete ms[b]}),a.length=0)}
N.prototype.subscribe=N.prototype.subscribe;N.prototype.unsubscribeByKey=N.prototype.Tb;N.prototype.publish=N.prototype.mb;N.prototype.clear=N.prototype.clear;D("ytPubsubPubsubInstance",ls);D("ytPubsubPubsubTopicToKeys",ns);D("ytPubsubPubsubIsSynchronous",ps);D("ytPubsubPubsubSubscribedKeys",ms);var ws=Symbol("injectionDeps");function xs(a){this.name=a}
xs.prototype.toString=function(){return"InjectionToken("+this.name+")"};
function ys(a){this.key=a}
function zs(){this.i=new Map;this.j=new Map;this.h=new Map}
function As(a,b){a.i.set(b.qc,b);var c=a.j.get(b.qc);if(c)try{c.Gh(a.resolve(b.qc))}catch(d){c.Eh(d)}}
zs.prototype.resolve=function(a){return a instanceof ys?Bs(this,a.key,[],!0):Bs(this,a,[])};
function Bs(a,b,c,d){d=d===void 0?!1:d;if(c.indexOf(b)>-1)throw Error("Deps cycle for: "+b);if(a.h.has(b))return a.h.get(b);if(!a.i.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.i.get(b);c.push(b);if(d.Dd!==void 0)var e=d.Dd;else if(d.pf)e=d[ws]?Cs(a,d[ws],c):[],e=d.pf.apply(d,sa(e));else if(d.Cd){e=d.Cd;var f=e[ws]?Cs(a,e[ws],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(sa(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.Kh||a.h.set(b,e);return e}
function Cs(a,b,c){return b?b.map(function(d){return d instanceof ys?Bs(a,d.key,c,!0):Bs(a,d,c)}):[]}
;var Ds;function Es(){Ds||(Ds=new zs);return Ds}
;var Fs=window;function Gs(){var a,b;return"h5vcc"in Fs&&((a=Fs.h5vcc.traceEvent)==null?0:a.traceBegin)&&((b=Fs.h5vcc.traceEvent)==null?0:b.traceEnd)?1:"performance"in Fs&&Fs.performance.mark&&Fs.performance.measure?2:0}
function Hs(a){var b=Gs();switch(b){case 1:Fs.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:Fs.performance.mark(a+"-start");break;case 0:break;default:Gb(b,"unknown trace type")}}
function Is(a){var b=Gs();switch(b){case 1:Fs.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:b=a+"-start";var c=a+"-end";Fs.performance.mark(c);Fs.performance.measure(a,b,c);break;case 0:break;default:Gb(b,"unknown trace type")}}
;var Js=S("web_enable_lifecycle_monitoring")&&Gs()!==0,Ks=S("web_enable_lifecycle_monitoring");function Ls(a){var b,c;(c=(b=window).onerror)==null||c.call(b,a.message,"",0,0,a)}
;function Ms(a){var b=this;var c=c===void 0?0:c;var d=d===void 0?Zn():d;this.j=c;this.scheduler=d;this.i=new kj;this.h=a;for(a={bb:0};a.bb<this.h.length;a={nc:void 0,bb:a.bb},a.bb++)a.nc=this.h[a.bb],c=function(e){return function(){e.nc.Fc();b.h[e.bb].pc=!0;b.h.every(function(f){return f.pc===!0})&&b.i.resolve()}}(a),d=this.getPriority(a.nc),d=this.scheduler.Ya(c,d),this.h[a.bb]=Object.assign({},a.nc,{Fc:c,
jobId:d})}
function Ns(a){var b=Array.from(a.h.keys()).sort(function(d,e){return a.getPriority(a.h[e])-a.getPriority(a.h[d])});
b=z(b);for(var c=b.next();!c.done;c=b.next())c=a.h[c.value],c.jobId===void 0||c.pc||(a.scheduler.qa(c.jobId),a.scheduler.Ya(c.Fc,10))}
Ms.prototype.cancel=function(){for(var a=z(this.h),b=a.next();!b.done;b=a.next())b=b.value,b.jobId===void 0||b.pc||this.scheduler.qa(b.jobId),b.pc=!0;this.i.resolve()};
Ms.prototype.getPriority=function(a){var b;return(b=a.priority)!=null?b:this.j};function Os(a){this.state=a;this.plugins=[];this.o=void 0;this.A={};Js&&Hs(this.state)}
r=Os.prototype;r.install=function(a){this.plugins.push(a);return this};
r.uninstall=function(){var a=this;B.apply(0,arguments).forEach(function(b){b=a.plugins.indexOf(b);b>-1&&a.plugins.splice(b,1)})};
r.transition=function(a,b){var c=this;Js&&Is(this.state);var d=this.transitions.find(function(f){return Array.isArray(f.from)?f.from.find(function(g){return g===c.state&&f.to===a}):f.from===c.state&&f.to===a});
if(d){this.j&&(Ns(this.j),this.j=void 0);Ps(this,a,b);this.state=a;Js&&Hs(this.state);d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(Qs(this,e),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function Qs(a,b){var c=b.filter(function(e){return Rs(a,e)===10}),d=b.filter(function(e){return Rs(a,e)!==10});
return a.A.Jh?function(){var e=B.apply(0,arguments);return A(function(f){if(f.h==1)return f.yield(a.Le.apply(a,[c].concat(sa(e))),2);a.xd.apply(a,[d].concat(sa(e)));f.h=0})}:function(){var e=B.apply(0,arguments);
a.Me.apply(a,[c].concat(sa(e)));a.xd.apply(a,[d].concat(sa(e)))}}
r.Me=function(a){for(var b=B.apply(1,arguments),c=Zn(),d=z(a),e=d.next(),f={};!e.done;f={Jb:void 0},e=d.next())f.Jb=e.value,c.Db(function(g){return function(){Ss(g.Jb.name);Ts(function(){return g.Jb.callback.apply(g.Jb,sa(b))});
Us(g.Jb.name)}}(f))};
r.Le=function(a){var b=B.apply(1,arguments),c,d,e,f,g;return A(function(h){h.h==1&&(c=Zn(),d=z(a),e=d.next(),f={});if(h.h!=3){if(e.done)return h.D(0);f.Ua=e.value;f.Ub=void 0;g=function(k){return function(){Ss(k.Ua.name);var l=Ts(function(){return k.Ua.callback.apply(k.Ua,sa(b))});
be(l)?k.Ub=S("web_lifecycle_error_handling_killswitch")?l.then(function(){Us(k.Ua.name)}):l.then(function(){Us(k.Ua.name)},function(m){Ls(m);
Us(k.Ua.name)}):Us(k.Ua.name)}}(f);
c.Db(g);return f.Ub?h.yield(f.Ub,3):h.D(3)}f={Ua:void 0,Ub:void 0};e=d.next();return h.D(2)})};
r.xd=function(a){var b=B.apply(1,arguments),c=this,d=a.map(function(e){return{Fc:function(){Ss(e.name);Ts(function(){return e.callback.apply(e,sa(b))});
Us(e.name)},
priority:Rs(c,e)}});
d.length&&(this.j=new Ms(d))};
function Rs(a,b){var c,d;return(d=(c=a.o)!=null?c:b.priority)!=null?d:0}
function Ss(a){Js&&a&&Hs(a)}
function Us(a){Js&&a&&Is(a)}
function Ps(a,b,c){Ks&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to '"+b+"'"),console.log("with message: ",c),console.groupEnd())}
ea.Object.defineProperties(Os.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});
function Ts(a){if(S("web_lifecycle_error_handling_killswitch"))return a();try{return a()}catch(b){Ls(b)}}
;function Vs(a){Os.call(this,a===void 0?"none":a);this.h=null;this.o=10;this.transitions=[{from:"none",to:"application_navigating",action:this.i},{from:"application_navigating",to:"none",action:this.u},{from:"application_navigating",to:"application_navigating",action:function(){}},
{from:"none",to:"none",action:function(){}}]}
var Ws;w(Vs,Os);Vs.prototype.i=function(a,b){var c=this;this.h=un(function(){c.currentState==="application_navigating"&&c.transition("none")},5E3);
a(b==null?void 0:b.event)};
Vs.prototype.u=function(a,b){this.h&&(Aj.qa(this.h),this.h=null);a(b==null?void 0:b.event)};
function Xs(){Ws||(Ws=new Vs);return Ws}
;var Ys=[];D("yt.logging.transport.getScrapedGelPayloads",function(){return Ys});function Zs(){this.store={};this.h={}}
Zs.prototype.storePayload=function(a,b){a=$s(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);S("more_accurate_gel_parser")&&(b=new CustomEvent("TRANSPORTING_NEW_EVENT"),window.dispatchEvent(b));return a};
Zs.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=at(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,sa(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,sa(this.store[b[d]].splice(0,a.sizeLimit))));(a==null?0:a.sizeLimit)&&c.length<(a==null?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,sa(this.smartExtractMatchingEntries(a))));return c};
Zs.prototype.extractMatchingEntries=function(a){a=at(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,sa(this.store[a[c]])),delete this.store[a[c]]);return b};
Zs.prototype.getSequenceCount=function(a){a=at(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=((d=this.store[a[c]])==null?void 0:d.length)||0}return b};
function at(a,b){var c=$s(b);if(a.h[c])return a.h[c];var d=Object.keys(a.store)||[];if(d.length<=1&&$s(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(bt(b.auth,g[0])){var h=b.isJspb;bt(h===void 0?"undefined":h?"true":"false",g[1])&&bt(b.cttAuthInfo,g[2])&&(h=b.tier,h=h===void 0?"undefined":JSON.stringify(h),bt(h,g[3])&&e.push(d[f]))}}return a.h[c]=e}
function bt(a,b){return a===void 0||a==="undefined"?!0:a===b}
Zs.prototype.getSequenceCount=Zs.prototype.getSequenceCount;Zs.prototype.extractMatchingEntries=Zs.prototype.extractMatchingEntries;Zs.prototype.smartExtractMatchingEntries=Zs.prototype.smartExtractMatchingEntries;Zs.prototype.storePayload=Zs.prototype.storePayload;function $s(a){return[a.auth===void 0?"undefined":a.auth,a.isJspb===void 0?"undefined":a.isJspb,a.cttAuthInfo===void 0?"undefined":a.cttAuthInfo,a.tier===void 0?"undefined":a.tier].join("/")}
;function ct(a,b){if(a)return a[b.name]}
;var dt=pm("initial_gel_batch_timeout",2E3),et=pm("gel_queue_timeout_max_ms",6E4),ft=pm("gel_min_batch_size",5),gt=void 0;function ht(){this.o=this.h=this.i=0;this.j=!1}
var jt=new ht,kt=new ht,lt=new ht,mt=new ht,nt,ot=!0,pt=C.ytLoggingTransportTokensToCttTargetIds_||{};D("ytLoggingTransportTokensToCttTargetIds_",pt);var qt={};function rt(){var a=E("yt.logging.ims");a||(a=new Zs,D("yt.logging.ims",a));return a}
function st(a,b){if(a.endpoint==="log_event"){tt();var c=ut(a),d=vt(a.payload)||"";a:{if(S("enable_web_tiered_gel")){var e=nr[d||""];var f,g,h,k=Es().resolve(new ys(Tp))==null?void 0:(f=Up())==null?void 0:(g=f.loggingHotConfig)==null?void 0:(h=g.eventLoggingConfig)==null?void 0:h.payloadPolicies;if(k)for(f=0;f<k.length;f++)if(k[f].payloadNumber===e){e=k[f];break a}}e=void 0}k=200;if(e){if(e.enabled===!1&&!S("web_payload_policy_disabled_killswitch"))return;k=wt(e.tier);if(k===400){xt(a,b);return}}qt[c]=
!0;c={cttAuthInfo:c,isJspb:!1,tier:k};rt().storePayload(c,a.payload);zt(b,c,d==="gelDebuggingEvent")}}
function zt(a,b,c){function d(){At({writeThenSend:!0},void 0,e,b.tier)}
var e=!1;e=e===void 0?!1:e;c=c===void 0?!1:c;a&&(gt=new a);a=pm("tvhtml5_logging_max_batch_ads_fork")||pm("tvhtml5_logging_max_batch")||pm("web_logging_max_batch")||100;var f=U(),g=Bt(e,b.tier),h=g.o;c&&(g.j=!0);c=0;b&&(c=rt().getSequenceCount(b));c>=1E3?d():c>=a?nt||(nt=Ct(function(){d();nt=void 0},0)):f-h>=10&&(Dt(e,b.tier),g.o=f)}
function xt(a,b){if(a.endpoint==="log_event"){S("more_accurate_gel_parser")&&rt().storePayload({isJspb:!1},a.payload);tt();var c=ut(a),d=new Map;d.set(c,[a.payload]);var e=vt(a.payload)||"";b&&(gt=new b);return new ii(function(f,g){gt&&gt.isReady()?Et(d,gt,f,g,{bypassNetworkless:!0},!0,e==="gelDebuggingEvent"):f()})}}
function ut(a){var b="";if(a.dangerousLogToVisitorSession)b="visitorOnlyApprovedKey";else if(a.cttAuthInfo){b=a.cttAuthInfo;var c={};b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId);pt[a.cttAuthInfo.token]=c;b=a.cttAuthInfo.token}return b}
function At(a,b,c,d){a=a===void 0?{}:a;c=c===void 0?!1:c;new ii(function(e,f){var g=Bt(c,d),h=g.j;g.j=!1;Ft(g.i);Ft(g.h);g.h=0;gt&&gt.isReady()?d===void 0&&S("enable_web_tiered_gel")?Gt(e,f,a,b,c,300,h):Gt(e,f,a,b,c,d,h):(Dt(c,d),e())})}
function Gt(a,b,c,d,e,f,g){var h=gt;c=c===void 0?{}:c;e=e===void 0?!1:e;f=f===void 0?200:f;g=g===void 0?!1:g;var k=new Map,l={isJspb:e,cttAuthInfo:d,tier:f};e={isJspb:e,cttAuthInfo:d};if(d!==void 0)f=S("enable_web_tiered_gel")?rt().smartExtractMatchingEntries({keys:[l,e],sizeLimit:1E3}):rt().extractMatchingEntries(e),k.set(d,f);else for(d=z(Object.keys(qt)),l=d.next();!l.done;l=d.next())l=l.value,e=S("enable_web_tiered_gel")?rt().smartExtractMatchingEntries({keys:[{isJspb:!1,cttAuthInfo:l,tier:f},
{isJspb:!1,cttAuthInfo:l}],sizeLimit:1E3}):rt().extractMatchingEntries({isJspb:!1,cttAuthInfo:l}),e.length>0&&k.set(l,e),(S("web_fp_via_jspb_and_json")&&c.writeThenSend||!S("web_fp_via_jspb_and_json"))&&delete qt[l];Et(k,h,a,b,c,!1,g)}
function Dt(a,b){function c(){At({writeThenSend:!0},void 0,a,b)}
a=a===void 0?!1:a;b=b===void 0?200:b;var d=Bt(a,b),e=d===mt||d===lt?5E3:et;S("web_gel_timeout_cap")&&!d.h&&(e=Ct(function(){c()},e),d.h=e);
Ft(d.i);e=R("LOGGING_BATCH_TIMEOUT",pm("web_gel_debounce_ms",1E4));S("shorten_initial_gel_batch_timeout")&&ot&&(e=dt);e=Ct(function(){pm("gel_min_batch_size")>0?rt().getSequenceCount({cttAuthInfo:void 0,isJspb:a,tier:b})>=ft&&c():c()},e);
d.i=e}
function Et(a,b,c,d,e,f,g){e=e===void 0?{}:e;var h=Math.round(U()),k=a.size,l=(g===void 0?0:g)&&S("vss_through_gel_video_stats")?"video_stats":"log_event";a=z(a);var m=a.next();for(g={};!m.done;g={Lc:void 0,batchRequest:void 0,dangerousLogToVisitorSession:void 0,Oc:void 0,Nc:void 0},m=a.next()){var n=z(m.value);m=n.next().value;n=n.next().value;g.batchRequest=rg({context:$p(b.config_||Zp())});if(!Qa(n)&&!S("throw_err_when_logevent_malformed_killswitch")){d();break}g.batchRequest.events=n;(n=pt[m])&&
Ht(g.batchRequest,m,n);delete pt[m];g.dangerousLogToVisitorSession=m==="visitorOnlyApprovedKey";It(g.batchRequest,h,g.dangerousLogToVisitorSession);S("always_send_and_write")&&(e.writeThenSend=!1);g.Oc=function(p){S("start_client_gcf")&&Aj.pa(function(){return A(function(t){return t.yield(Jt(p),0)})});
k--;k||c()};
g.Lc=0;g.Nc=function(p){return function(){p.Lc++;if(e.bypassNetworkless&&p.Lc===1)try{Sq(b,l,p.batchRequest,Kt({writeThenSend:!0},p.dangerousLogToVisitorSession,p.Oc,p.Nc,f)),ot=!1}catch(t){Vl(t),d()}k--;k||c()}}(g);
try{Sq(b,l,g.batchRequest,Kt(e,g.dangerousLogToVisitorSession,g.Oc,g.Nc,f)),ot=!1}catch(p){Vl(p),d()}}}
function Kt(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,networklessOptions:a,dangerousLogToVisitorSession:b,ih:!!e,headers:{},postBodyFormat:"",postBody:"",compress:S("compress_gel")||S("compress_gel_lr")};Lt()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(U())));return a}
function It(a,b,c){Lt()||(a.requestTimeMs=String(b));S("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=R("EVENT_ID"))&&((c=R("BATCH_CLIENT_COUNTER")||0)||(c=Math.floor(Math.random()*65535/2)),c++,c>65535&&(c=1),Ql("BATCH_CLIENT_COUNTER",c),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function Ht(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function tt(){var a;(a=E("yt.logging.transport.enableScrapingForTest"))||(a=om("il_payload_scraping"),a=(a!==void 0?String(a):"")!=="enable_il_payload_scraping");a||(Ys=[],D("yt.logging.transport.enableScrapingForTest",!0),D("yt.logging.transport.scrapedPayloadsForTesting",Ys),D("yt.logging.transport.payloadToScrape","visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(" ")),D("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),
D("yt.logging.transport.scrapeClientEvent",!0))}
function Lt(){return S("use_request_time_ms_header")||S("lr_use_request_time_ms_header")}
function Ct(a,b){return S("transport_use_scheduler")===!1?mm(a,b):S("logging_avoid_blocking_during_navigation")||S("lr_logging_avoid_blocking_during_navigation")?un(function(){if(Xs().currentState==="none")a();else{var c={};Xs().install((c.none={callback:a},c))}},b):un(a,b)}
function Ft(a){S("transport_use_scheduler")?Aj.qa(a):window.clearTimeout(a)}
function Jt(a){var b,c,d,e,f,g,h,k,l,m;return A(function(n){return n.h==1?(d=(b=a)==null?void 0:(c=b.responseContext)==null?void 0:c.globalConfigGroup,e=ct(d,sl),g=(f=d)==null?void 0:f.hotHashData,h=ct(d,rl),l=(k=d)==null?void 0:k.coldHashData,(m=Es().resolve(new ys(Tp)))?g?e?n.yield(Vp(m,g,e),2):n.yield(Vp(m,g),2):n.D(2):n.return()):l?h?n.yield(Wp(m,l,h),0):n.yield(Wp(m,l),0):n.D(0)})}
function Bt(a,b){b=b===void 0?200:b;return a?b===300?mt:kt:b===300?lt:jt}
function vt(a){a=Object.keys(a);a=z(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,nr[b])return b}
function wt(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
;var Mt=C.ytLoggingGelSequenceIdObj_||{};D("ytLoggingGelSequenceIdObj_",Mt);
function Nt(a,b,c,d){d=d===void 0?{}:d;var e={},f=Math.round(d.timestamp||U());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=ks();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};d.sequenceGroup&&!S("web_gel_sequence_info_killswitch")&&(a=e.context,b=d.sequenceGroup,Mt[b]=b in Mt?Mt[b]+1:0,a.sequence={index:Mt[b],groupKey:b},d.endOfSequence&&delete Mt[d.sequenceGroup]);(d.sendIsolatedPayload?xt:st)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},
c)}
;function jo(a,b,c){c=c===void 0?{}:c;var d=Ur;R("ytLoggingEventsDefaultDisabled",!1)&&Ur===Ur&&(d=null);Nt(a,b,d,c)}
;function Ot(a){return a.slice(0,void 0).map(function(b){return b.name}).join(" > ")}
;var Pt=new Set,Qt=0,Rt=0,St=0,Tt=[],Ut=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function io(a){Vt(a)}
function Wt(a){Vt(a,"WARNING")}
function Xt(a){a instanceof Error?Vt(a):(a=Ra(a)?JSON.stringify(a):String(a),a=new T(a),a.name="RejectedPromiseError",Wt(a))}
function Vt(a,b,c,d,e,f,g,h){f=f===void 0?{}:f;f.name=c||R("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||R("INNERTUBE_CONTEXT_CLIENT_VERSION");c=f;b=b===void 0?"ERROR":b;g=g===void 0?!1:g;b=b===void 0?"ERROR":b;g=g===void 0?!1:g;if(a&&(a.hasOwnProperty("level")&&a.level&&(b=a.level),S("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),a.hasOwnProperty("args")&&d.push("Error args: "+
JSON.stringify(a.args)),d.push("File name: "+a.fileName),d.push("Stacktrace: "+a.stack),d=d.join("\n"),window.console.log(d,a)),!(Qt>=5))){d=Tt;var k=Xb(a);e=k.message||"Unknown Error";f=k.name||"UnknownError";var l=k.stack||a.i||"Not available";if(l.startsWith(f+": "+e)){var m=l.split("\n");m.shift();l=m.join("\n")}m=k.lineNumber||"Not available";k=k.fileName||"Not available";var n=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var p=0;p<a.args.length&&!(n=Rm(a.args[p],"params."+p,c,n),
n>=500);p++);else if(a.hasOwnProperty("params")&&a.params){var t=a.params;if(typeof a.params==="object")for(p in t){if(t[p]){var v="params."+p,x=Tm(t[p]);c[v]=x;n+=v.length+x.length;if(n>500)break}}else c.params=Tm(t)}if(d.length)for(p=0;p<d.length&&!(n=Rm(d[p],"params.context."+p,c,n),n>=500);p++);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c["device.vendor"]=navigator.vendor);p={message:e,name:f,lineNumber:m,fileName:k,stack:l,params:c,sampleWeight:1};c=Number(a.columnNumber);isNaN(c)||(p.lineNumber=
p.lineNumber+":"+c);if(a.level==="IGNORED")a=0;else a:{a=Nm();c=z(a.Va);for(d=c.next();!d.done;d=c.next())if(d=d.value,p.message&&p.message.match(d.yh)){a=d.weight;break a}a=z(a.Qa);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.callback(p)){a=c.weight;break a}a=1}p.sampleWeight=a;a=z(Im);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.lc[p.name])for(e=z(c.lc[p.name]),d=e.next();!d.done;d=e.next())if(f=d.value,d=p.message.match(f.regexp)){p.params["params.error.original"]=d[0];e=f.groups;f={};
for(m=0;m<e.length;m++)f[e[m]]=d[m+1],p.params["params.error."+e[m]]=d[m+1];p.message=c.Jc(f);break}p.params||(p.params={});a=Nm();p.params["params.errorServiceSignature"]="msg="+a.Va.length+"&cb="+a.Qa.length;p.params["params.serviceWorker"]="false";C.document&&C.document.querySelectorAll&&(p.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));(new ug(vg,"sample")).constructor!==ug&&(p.params["params.fconst"]="true");window.yterr&&typeof window.yterr==="function"&&
window.yterr(p);if(p.sampleWeight!==0&&!Pt.has(p.message)){if(g&&S("web_enable_error_204"))Yt(b===void 0?"ERROR":b,p);else{b=b===void 0?"ERROR":b;b==="ERROR"?(Om.mb("handleError",p),S("record_app_crashed_web")&&St===0&&p.sampleWeight===1&&(St++,g={appCrashType:"APP_CRASH_TYPE_BREAKPAD"},S("report_client_error_with_app_crash_ks")||(g.systemHealth={crashData:{clientError:{logMessage:{message:p.message}}}}),jo("appCrashed",g)),Rt++):b==="WARNING"&&Om.mb("handleWarning",p);if(S("kevlar_gel_error_routing")){g=
b;h=h===void 0?{}:h;b:{a=z(Ut);for(c=a.next();!c.done;c=a.next())if(po(c.value.toLowerCase())){a=!0;break b}a=!1}if(a)h=void 0;else{c={stackTrace:p.stack};p.fileName&&(c.filename=p.fileName);a=p.lineNumber&&p.lineNumber.split?p.lineNumber.split(":"):[];a.length!==0&&(a.length!==1||isNaN(Number(a[0]))?a.length!==2||isNaN(Number(a[0]))||isNaN(Number(a[1]))||(c.lineNumber=Number(a[0]),c.columnNumber=Number(a[1])):c.lineNumber=Number(a[0]));a={level:"ERROR_LEVEL_UNKNOWN",message:p.message,errorClassName:p.name,
sampleWeight:p.sampleWeight};g==="ERROR"?a.level="ERROR_LEVEL_ERROR":g==="WARNING"&&(a.level="ERROR_LEVEL_WARNNING");c={isObfuscated:!0,browserStackInfo:c};h.pageUrl=window.location.href;h.kvPairs=[];R("FEXP_EXPERIMENTS")&&(h.experimentIds=R("FEXP_EXPERIMENTS"));d=R("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!Rl("web_disable_gel_stp_ecatcher_killswitch")&&d)for(e=z(Object.keys(d)),f=e.next();!f.done;f=e.next())f=f.value,h.kvPairs.push({key:f,value:String(d[f])});if(d=p.params)for(e=z(Object.keys(d)),
f=e.next();!f.done;f=e.next())f=f.value,h.kvPairs.push({key:"client."+f,value:String(d[f])});d=R("SERVER_NAME");e=R("SERVER_VERSION");d&&e&&(h.kvPairs.push({key:"server.name",value:d}),h.kvPairs.push({key:"server.version",value:e}));h={errorMetadata:h,stackTrace:c,logMessage:a}}h&&(jo("clientError",h),(g==="ERROR"||S("errors_flush_gel_always_killswitch"))&&At(void 0,void 0,!1))}S("suppress_error_204_logging")||Yt(b,p)}try{Pt.add(p.message)}catch(y){}Qt++}}}
function Yt(a,b){var c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:R("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);b=z(Object.keys(c));for(var d=b.next();!d.done;d=b.next())d=d.value,a.postParams["client."+d]=c[d];if(c=R("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS"))for(b=z(Object.keys(c)),
d=b.next();!d.done;d=b.next())d=d.value,a.postParams[d]=c[d];c=R("SERVER_NAME");b=R("SERVER_VERSION");c&&b&&(a.postParams["server.name"]=c,a.postParams["server.version"]=b)}zm(R("ECATCHER_REPORT_HOST","")+"/error_204",a)}
function Zt(a){var b=B.apply(1,arguments);a.args||(a.args=[]);a.args.push.apply(a.args,sa(b))}
;function $t(){this.register=new Map}
function au(a){a=z(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.Dh("ABORTED")}
$t.prototype.clear=function(){au(this);this.register.clear()};
var bu=new $t;var cu=Date.now().toString();
function du(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;a<16;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(Math.random()*256)}if(cu)for(a=1,b=0;b<cu.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^cu.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var eu,fu=C.ytLoggingDocDocumentNonce_;fu||(fu=du(),D("ytLoggingDocDocumentNonce_",fu));eu=fu;function gu(a){this.h=a}
r=gu.prototype;r.getAsJson=function(){var a={};this.h.trackingParams!==void 0?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,this.h.veCounter!==void 0&&(a.veCounter=this.h.veCounter),this.h.elementIndex!==void 0&&(a.elementIndex=this.h.elementIndex));this.h.dataElement!==void 0&&(a.dataElement=this.h.dataElement.getAsJson());this.h.youtubeData!==void 0&&(a.youtubeData=this.h.youtubeData);this.h.isCounterfactual&&(a.isCounterfactual=!0);return a};
r.getAsJspb=function(){var a=new ul;this.h.trackingParams!==void 0?a.setTrackingParams(this.h.trackingParams):(this.h.veType!==void 0&&L(a,2,Be(this.h.veType)),this.h.veCounter!==void 0&&L(a,6,Be(this.h.veCounter)),this.h.elementIndex!==void 0&&L(a,3,Be(this.h.elementIndex)),this.h.isCounterfactual&&L(a,5,xe(!0)));if(this.h.dataElement!==void 0){var b=this.h.dataElement.getAsJspb();nf(a,ul,7,b)}this.h.youtubeData!==void 0&&nf(a,tl,8,this.h.jspbYoutubeData);return a};
r.toString=function(){return JSON.stringify(this.getAsJson())};
r.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};
r.getLoggingDirectives=function(){return this.h.loggingDirectives};function hu(a){return R("client-screen-nonce-store",{})[a===void 0?0:a]}
function iu(a,b){b=b===void 0?0:b;var c=R("client-screen-nonce-store");c||(c={},Ql("client-screen-nonce-store",c));c[b]=a}
function ju(a){a=a===void 0?0:a;return a===0?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function ku(a){return R(ju(a===void 0?0:a))}
D("yt_logging_screen.getRootVeType",ku);function lu(){var a=R("csn-to-ctt-auth-info");a||(a={},Ql("csn-to-ctt-auth-info",a));return a}
function mu(){return Object.values(R("client-screen-nonce-store",{})).filter(function(a){return a!==void 0})}
function nu(a){a=hu(a===void 0?0:a);if(!a&&!R("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
D("yt_logging_screen.getCurrentCsn",nu);function ou(a,b,c){var d=lu();(c=nu(c))&&delete d[c];b&&(d[a]=b)}
function pu(a){return lu()[a]}
D("yt_logging_screen.getCttAuthInfo",pu);D("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=c===void 0?0:c;if(a!==hu(c)||b!==R(ju(c)))if(ou(a,d,c),iu(a,c),Ql(ju(c),b),b=function(){setTimeout(function(){a&&jo("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:eu,clientScreenNonce:a})},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()});function qu(){var a=qg(ru),b;return(new ii(function(c,d){a.onSuccess=function(e){lm(e)?c(new su(e)):d(new tu("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new tu("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new tu("Request timed out","net.timeout",e))};
b=zm("//googleads.g.doubleclick.net/pagead/id",a)})).wc(function(c){if(c instanceof ri){var d;
(d=b)==null||d.abort()}return ni(c)})}
function tu(a,b,c){cb.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
w(tu,cb);function su(a){this.xhr=a}
;function uu(){this.h=0;this.i=null}
uu.prototype.then=function(a,b,c){return this.h===1&&a?(a=a.call(c,this.i))&&typeof a.then==="function"?a:vu(a):this.h===2&&b?(a=b.call(c,this.i))&&typeof a.then==="function"?a:wu(a):this};
uu.prototype.getValue=function(){return this.i};
uu.prototype.isRejected=function(){return this.h==2};
uu.prototype.$goog_Thenable=!0;function wu(a){var b=new uu;a=a===void 0?null:a;b.h=2;b.i=a===void 0?null:a;return b}
function vu(a){var b=new uu;a=a===void 0?null:a;b.h=1;b.i=a===void 0?null:a;return b}
;function xu(a,b){var c=c===void 0?{}:c;a={method:b===void 0?"POST":b,mode:gm(a)?"same-origin":"cors",credentials:gm(a)?"same-origin":"include"};b={};for(var d=z(Object.keys(c)),e=d.next();!e.done;e=d.next())e=e.value,c[e]&&(b[e]=c[e]);Object.keys(b).length>0&&(a.headers=b);return a}
;function yu(){return $f()||(dd||ed)&&po("applewebkit")&&!po("version")&&(!po("safari")||po("gsa/"))||cd&&po("version/")?!0:R("EOM_VISITOR_DATA")?!1:!0}
;function zu(a){a:{var b="EMBEDDED_PLAYER_MODE_UNKNOWN";window.location.hostname.includes("youtubeeducation.com")&&(b="EMBEDDED_PLAYER_MODE_PFL");var c=a.raw_embedded_player_response;if(!c&&(a=a.embedded_player_response))try{c=JSON.parse(a)}catch(e){break a}if(c)b:for(var d in yl)if(yl[d]==c.embeddedPlayerMode){b=yl[d];break b}}return b==="EMBEDDED_PLAYER_MODE_PFL"}
;function Au(a){cb.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Bu;this.isTimeout=a instanceof tu&&a.errorCode=="net.timeout";this.isCanceled=a instanceof ri}
w(Au,cb);Au.prototype.name="BiscottiError";function Bu(){cb.call(this,"Biscotti ID is missing from server")}
w(Bu,cb);Bu.prototype.name="BiscottiMissingError";var ru={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Cu=null;function Du(){if(S("disable_biscotti_fetch_entirely_for_all_web_clients"))return Error("Biscotti id fetching has been disabled entirely.");if(!yu())return Error("User has not consented - not fetching biscotti id.");var a=R("PLAYER_VARS",{});if(og(a)=="1")return Error("Biscotti ID is not available in private embed mode");if(zu(a))return Error("Biscotti id fetching has been disabled for pfl.")}
function Jl(){var a=Du();if(a!==void 0)return ni(a);Cu||(Cu=qu().then(Eu).wc(function(b){return Fu(2,b)}));
return Cu}
function Eu(a){a=a.xhr.responseText;if(a.lastIndexOf(")]}'",0)!=0)throw new Bu;a=JSON.parse(a.substr(4));if((a.type||1)>1)throw new Bu;a=a.id;Kl(a);Cu=vu(a);Gu(18E5,2);return a}
function Fu(a,b){b=new Au(b);Kl("");Cu=wu(b);a>0&&Gu(12E4,a-1);throw b;}
function Gu(a,b){mm(function(){qu().then(Eu,function(c){return Fu(b,c)}).wc(gi)},a)}
function Hu(){try{var a=E("yt.ads.biscotti.getId_");return a?a():Jl()}catch(b){return ni(b)}}
;var Db=ta(["data-"]);function Iu(a){a&&(a.dataset?a.dataset[Ju()]="true":Fb(a))}
function Ku(a){return a?a.dataset?a.dataset[Ju()]:a.getAttribute("data-loaded"):null}
var Lu={};function Ju(){return Lu.loaded||(Lu.loaded="loaded".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()}))}
;function Mu(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||qg(b);this.assets=a.assets||{};this.attrs=a.attrs||qg(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
Mu.prototype.clone=function(){var a=new Mu,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];Pa(c)=="object"?a[b]=qg(c):a[b]=c}return a};var Nu=["share/get_share_panel"],Ou=["share/get_web_player_share_panel"],Pu=["feedback"],Qu=["notification/modify_channel_preference"],Ru=["browse/edit_playlist"],Su=["subscription/subscribe"],Tu=["subscription/unsubscribe"];var Uu=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};D("yt.msgs_",Uu);function Vu(a){Ll(Uu,arguments)}
;function Wu(a,b,c){Xu(a,b,c===void 0?null:c)}
function Yu(a){a=Zu(a);var b=document.getElementById(a);b&&(us(a),b.parentNode.removeChild(b))}
function $u(a,b){a&&b&&(a=""+Sa(b),(a=av[a])&&ss(a))}
function Xu(a,b,c){c=c===void 0?null:c;var d=Zu(a),e=document.getElementById(d),f=e&&Ku(e),g=e&&!f;f?b&&b():(b&&(f=qs(d,b),b=""+Sa(b),av[b]=f),g||(e=bv(a,d,function(){Ku(e)||(Iu(e),ts(d),mm(function(){us(d)},0))},c)))}
function bv(a,b,c,d){d=d===void 0?null:d;var e=xg("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Nb(e,pl(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function Zu(a){var b=document.createElement("a");Bb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+ac(a)}
var av={};function cv(a){var b=dv(a),c=document.getElementById(b),d=c&&Ku(c);d||c&&!d||(c=ev(a,b,function(){if(!Ku(c)){Iu(c);ts(b);var e=Ya(us,b);mm(e,0)}}))}
function ev(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=pl(a);Ib(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function dv(a){var b=xg("A");Bb(b,new ub(a));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+ac(a)}
;function fv(a){var b=B.apply(1,arguments);if(!gv(a)||b.some(function(d){return!gv(d)}))throw Error("Only objects may be merged.");
b=z(b);for(var c=b.next();!c.done;c=b.next())hv(a,c.value)}
function hv(a,b){for(var c in b)if(gv(b[c])){if(c in a&&!gv(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});hv(a[c],b[c])}else if(iv(b[c])){if(c in a&&!iv(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);jv(a[c],b[c])}else a[c]=b[c];return a}
function jv(a,b){b=z(b);for(var c=b.next();!c.done;c=b.next())c=c.value,gv(c)?a.push(hv({},c)):iv(c)?a.push(jv([],c)):a.push(c);return a}
function gv(a){return typeof a==="object"&&!Array.isArray(a)}
function iv(a){return typeof a==="object"&&Array.isArray(a)}
;var kv="absolute_experiments app conditional_experiments debugcss debugjs expflag forced_experiments pbj pbjreload sbb spf spfreload sr_bns_address sttick".split(" ");
function lv(a,b){var c=c===void 0?!0:c;var d=R("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=ec(window.location.href);e&&d.push(e);e=ec(a);if(Ob(d,e)>=0||!e&&a.lastIndexOf("/",0)==0)if(d=document.createElement("a"),Bb(d,a),a=d.href)if(a=fc(a),a=hc(a))if(c&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:nu()},b)),f){var f=parseInt(f,10);isFinite(f)&&f>0&&mv(a,b,f)}else mv(a,b)}
function mv(a,b,c){a=nv(a);b=b?jc(b):"";c=c||5;yu()&&$m(a,b,c)}
function nv(a){for(var b=z(kv),c=b.next();!c.done;c=b.next())a=oc(a,c.value);return"ST-"+ac(a).toString(36)}
;function ov(a){dq.call(this,1,arguments);this.csn=a}
w(ov,dq);var mq=new eq("screen-created",ov),pv=[],qv=0,rv=new Map,sv=new Map,tv=new Map;
function uv(a,b,c,d,e){e=e===void 0?!1:e;for(var f=vv({cttAuthInfo:pu(b)||void 0},b),g=z(d),h=g.next();!h.done;h=g.next()){h=h.value;var k=h.getAsJson();(mg(k)||!k.trackingParams&&!k.veType)&&Wt(Error("Child VE logged with no data"));if(S("no_client_ve_attach_unless_shown")){var l=wv(h,b);if(k.veType&&!sv.has(l)&&!tv.has(l)&&!e){if(!S("il_attach_cache_limit")||rv.size<1E3){rv.set(l,[a,b,c,h]);return}S("il_attach_cache_limit")&&rv.size>1E3&&Wt(new T("IL Attach cache exceeded limit"))}h=wv(c,b);rv.has(h)?
xv(c,b):tv.set(h,!0)}}d=d.filter(function(m){m.csn!==b?(m.csn=b,m=!0):m=!1;return m});
c={csn:b,parentVe:c.getAsJson(),childVes:Rb(d,function(m){return m.getAsJson()})};
b==="UNDEFINED_CSN"?yv("visualElementAttached",f,c):a?Nt("visualElementAttached",c,a,f):jo("visualElementAttached",c,f)}
function yv(a,b,c){pv.push({Ee:a,payload:c,uh:void 0,options:b});qv||(qv=nq())}
function oq(a){if(pv){for(var b=z(pv),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,jo(c.Ee,c.payload,c.options));pv.length=0}qv=0}
function wv(a,b){return""+a.getAsJson().veType+a.getAsJson().veCounter+b}
function xv(a,b){a=wv(a,b);rv.has(a)&&(b=rv.get(a)||[],uv(b[0],b[1],b[2],[b[3]],!0),rv.delete(a))}
function vv(a,b){S("log_sequence_info_on_gel_web")&&(a.sequenceGroup=b);return a}
;function zv(){try{return!!self.localStorage}catch(a){return!1}}
;function Av(a){a=a.match(/(.*)::.*::.*/);if(a!==null)return a[1]}
function Bv(a){if(zv()){var b=Object.keys(window.localStorage);b=z(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=Av(c);d===void 0||a.includes(d)||self.localStorage.removeItem(c)}}}
function Cv(){if(!zv())return!1;var a=sn(),b=Object.keys(window.localStorage);b=z(b);for(var c=b.next();!c.done;c=b.next())if(c=Av(c.value),c!==void 0&&c!==a)return!0;return!1}
;function Dv(){var a=!1;try{a=!!window.sessionStorage.getItem("session_logininfo")}catch(b){a=!0}return(R("INNERTUBE_CLIENT_NAME")==="WEB"||R("INNERTUBE_CLIENT_NAME")==="WEB_CREATOR")&&a}
function Ev(a){if(R("LOGGED_IN",!0)&&Dv()){var b=R("VALID_SESSION_TEMPDATA_DOMAINS",[]);var c=ec(window.location.href);c&&b.push(c);c=ec(a);Ob(b,c)>=0||!c&&a.lastIndexOf("/",0)==0?(b=fc(a),(b=hc(b))?(b=nv(b),b=(b=an(b)||null)?cm(b):{}):b=null):b=null;b==null&&(b={});c=b;var d=void 0;Dv()?(d||(d=R("LOGIN_INFO")),d?(c.session_logininfo=d,c=!0):c=!1):c=!1;c&&lv(a,b)}}
;function Fv(a,b,c){b=b===void 0?{}:b;c=c===void 0?!1:c;var d=R("EVENT_ID");d&&(b.ei||(b.ei=d));b&&lv(a,b);if(c)return!1;Ev(a);var e=e===void 0?{}:e;var f=f===void 0?"":f;var g=g===void 0?window:g;a=kc(a,e);Ev(a);f=a+f;var h=h===void 0?yb:h;a:if(h=h===void 0?yb:h,f instanceof ub)h=f;else{for(a=0;a<h.length;++a)if(b=h[a],b instanceof wb&&b.te(f)){h=new ub(f);break a}h=void 0}g=g.location;h=Ab(h||vb);h!==void 0&&(g.href=h);return!0}
;function Gv(a){if(og(R("PLAYER_VARS",{}))!="1"){a&&Il();try{Hu().then(function(){},function(){}),mm(Gv,18E5)}catch(b){Vl(b)}}}
;var Hv=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function Iv(){var a=a===void 0?window.location.href:a;if(S("kevlar_disable_theme_param"))return null;var b=cc(dc(5,a));if(S("enable_dark_theme_only_on_shorts")&&b!=null&&b.startsWith("/shorts/"))return"USER_INTERFACE_THEME_DARK";try{var c=dm(a).theme;return Hv.get(c)||null}catch(d){}return null}
;function Jv(){this.h={};if(this.i=cn()){var a=an("CONSISTENCY");a&&Kv(this,{encryptedTokenJarContents:a})}}
Jv.prototype.handleResponse=function(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");var c,d;b=((c=b.Ma.context)==null?void 0:(d=c.request)==null?void 0:d.consistencyTokenJars)||[];var e;if(a=(e=a.responseContext)==null?void 0:e.consistencyTokenJar){e=z(b);for(c=e.next();!c.done;c=e.next())delete this.h[c.value.encryptedTokenJarContents];Kv(this,a)}};
function Kv(a,b){if(b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,typeof b.expirationSeconds==="string")){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.h[b.encryptedTokenJarContents]},c*1E3);
a.i&&$m("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var Lv=window.location.hostname.split(".").slice(-2).join(".");function Mv(){this.j=-1;var a=R("LOCATION_PLAYABILITY_TOKEN");R("INNERTUBE_CLIENT_NAME")==="TVHTML5"&&(this.h=Nv(this))&&(a=this.h.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.i=void 0)}
var Ov;function Pv(){Ov=E("yt.clientLocationService.instance");Ov||(Ov=new Mv,D("yt.clientLocationService.instance",Ov));return Ov}
r=Mv.prototype;
r.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});if(this.i)a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=Math.floor(this.i.coords.latitude*1E7),a.client.locationInfo.longitudeE7=Math.floor(this.i.coords.longitude*1E7),a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.i.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0;else if(this.o||this.locationPlayabilityToken)a.client.locationPlayabilityToken=this.o||
this.locationPlayabilityToken};
r.handleResponse=function(a){var b;a=(b=a.responseContext)==null?void 0:b.locationPlayabilityToken;a!==void 0&&(this.locationPlayabilityToken=a,this.i=void 0,R("INNERTUBE_CLIENT_NAME")==="TVHTML5"?(this.h=Nv(this))&&this.h.set("yt-location-playability-token",a,15552E3):$m("YT_CL",JSON.stringify({loctok:a}),15552E3,Lv,!0))};
function Nv(a){return a.h===void 0?new $n("yt-client-location"):a.h}
r.clearLocationPlayabilityToken=function(a){a==="TVHTML5"?(this.h=Nv(this))&&this.h.remove("yt-location-playability-token"):bn("YT_CL");this.o=void 0;this.j!==-1&&(clearTimeout(this.j),this.j=-1)};
r.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;R("INNERTUBE_CLIENT_NAME")==="MWEB"&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.i=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
r.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(a==null?0:a.latitude)b.latitudeE7=Math.floor(a.latitude*1E7);if(a==null?0:a.longitude)b.longitudeE7=Math.floor(a.longitude*1E7);if(a==null?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};
r.createLocationInfo=function(a){var b={};a=a.coords;if(a==null?0:a.latitude)b.latitudeE7=Math.floor(a.latitude*1E7);if(a==null?0:a.longitude)b.longitudeE7=Math.floor(a.longitude*1E7);return b};function Qv(a){var b={"Content-Type":"application/json"};R("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=R("EOM_VISITOR_DATA"):R("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=R("VISITOR_DATA"));b["X-Youtube-Bootstrap-Logged-In"]=R("LOGGED_IN",!1);R("DEBUG_SETTINGS_METADATA")&&(b["X-Debug-Settings-Metadata"]=R("DEBUG_SETTINGS_METADATA"));a!=="cors"&&((a=R("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=R("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=R("CHROME_CONNECTED_HEADER"))&&
(b["X-Youtube-Chrome-Connected"]=a),(a=R("DOMAIN_ADMIN_STATE"))&&(b["X-Youtube-Domain-Admin-State"]=a),R("ENABLE_LAVA_HEADER_ON_IT_EXPANSION")&&(a=R("SERIALIZED_LAVA_DEVICE_CONTEXT"))&&(b["X-YouTube-Lava-Device-Context"]=a));return b}
;function Rv(){this.h={}}
Rv.prototype.contains=function(a){return Object.prototype.hasOwnProperty.call(this.h,a)};
Rv.prototype.get=function(a){if(this.contains(a))return this.h[a]};
Rv.prototype.set=function(a,b){this.h[a]=b};
Rv.prototype.remove=function(a){delete this.h[a]};function Sv(){this.mappings=new Rv}
Sv.prototype.getModuleId=function(a){return a.serviceId.getModuleId()};
Sv.prototype.get=function(a){a:{var b=this.mappings.get(a.toString());switch(b.type){case "mapping":a=b.value;break a;case "factory":b=b.value();this.mappings.set(a.toString(),{type:"mapping",value:b});a=b;break a;default:a=Gb(b)}}return a};
new Sv;function Tv(a){return function(){return new a}}
;var Uv={},Vv=(Uv.WEB_UNPLUGGED="^unplugged/",Uv.WEB_UNPLUGGED_ONBOARDING="^unplugged/",Uv.WEB_UNPLUGGED_OPS="^unplugged/",Uv.WEB_UNPLUGGED_PUBLIC="^unplugged/",Uv.WEB_CREATOR="^creator/",Uv.WEB_KIDS="^kids/",Uv.WEB_EXPERIMENTS="^experiments/",Uv.WEB_MUSIC="^music/",Uv.WEB_REMIX="^music/",Uv.WEB_MUSIC_EMBEDDED_PLAYER="^music/",Uv.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",Uv);
function Wv(a){var b=b===void 0?"UNKNOWN_INTERFACE":b;if(a.length===1)return a[0];var c=Vv[b];if(c){c=new RegExp(c);for(var d=z(a),e=d.next();!e.done;e=d.next())if(e=e.value,c.exec(e))return e}var f=[];Object.entries(Vv).forEach(function(g){var h=z(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
c=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
d=z(a);for(e=d.next();!e.done;e=d.next())if(e=e.value,!c.exec(e))return e;return a[0]}
;function Xv(){}
Xv.prototype.u=function(a,b,c){b=b===void 0?{}:b;c=c===void 0?Zm:c;var d=a.clickTrackingParams,e=this.o,f=!1;f=f===void 0?!1:f;e=e===void 0?!1:e;var g=R("INNERTUBE_CONTEXT");if(g){g=rg(g);S("web_no_tracking_params_in_shell_killswitch")||delete g.clickTracking;g.client||(g.client={});var h=g.client;h.clientName==="MWEB"&&h.clientFormFactor!=="AUTOMOTIVE_FORM_FACTOR"&&(h.clientFormFactor=R("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");h.screenWidthPoints=window.innerWidth;h.screenHeightPoints=
window.innerHeight;h.screenPixelDensity=Math.round(window.devicePixelRatio||1);h.screenDensityFloat=window.devicePixelRatio||1;h.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var k=k===void 0?!1:k;gn();var l="USER_INTERFACE_THEME_LIGHT";kn(165)?l="USER_INTERFACE_THEME_DARK":kn(174)?l="USER_INTERFACE_THEME_LIGHT":!S("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(l="USER_INTERFACE_THEME_DARK");
k=k?l:Iv()||l;h.userInterfaceTheme=k;if(!f){if(k=pn())h.connectionType=k;S("web_log_effective_connection_type")&&(k=qn())&&(g.client.effectiveConnectionType=k)}var m;if(S("web_log_memory_total_kbytes")&&((m=C.navigator)==null?0:m.deviceMemory)){var n;m=(n=C.navigator)==null?void 0:n.deviceMemory;g.client.memoryTotalKbytes=""+m*1E6}S("web_gcf_hashes_innertube")&&(k=Xp())&&(n=k.coldConfigData,m=k.coldHashData,k=k.hotHashData,g.client.configInfo=g.client.configInfo||{},n&&(g.client.configInfo.coldConfigData=
n),m&&(g.client.configInfo.coldHashData=m),k&&(g.client.configInfo.hotHashData=k));n=dm(C.location.href);!S("web_populate_internal_geo_killswitch")&&n.internalcountrycode&&(h.internalGeo=n.internalcountrycode);h.clientName==="MWEB"||h.clientName==="WEB"?(h.mainAppWebInfo={graftUrl:C.location.href},S("kevlar_woffle")&&Um.h&&(n=Um.h,h.mainAppWebInfo.pwaInstallabilityStatus=!n.h&&n.i?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),h.mainAppWebInfo.webDisplayMode=Vm(),
h.mainAppWebInfo.isWebNativeShareAvailable=navigator&&navigator.share!==void 0):h.clientName==="TVHTML5"&&(!S("web_lr_app_quality_killswitch")&&(n=R("LIVING_ROOM_APP_QUALITY"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{appQuality:n})),n=R("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{certificationScope:n}));if(!S("web_populate_time_zone_itc_killswitch")){b:{if(typeof Intl!=="undefined")try{var p=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break b}catch(oa){}p=
void 0}p&&(h.timeZone=p)}(p=R("EXPERIMENTS_TOKEN",""))?h.experimentsToken=p:delete h.experimentsToken;p=qm();Jv.h||(Jv.h=new Jv);h=Jv.h.h;n=[];m=0;for(var t in h)n[m++]=h[t];g.request=Object.assign({},g.request,{internalExperimentFlags:p,consistencyTokenJars:n});!S("web_prequest_context_killswitch")&&(t=R("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&(g.request.externalPrequestContext=t);p=gn();t=kn(58);p=p.get("gsml","");g.user=Object.assign({},g.user);t&&(g.user.enableSafetyMode=t);p&&(g.user.lockedSafetyMode=
!0);S("warm_op_csn_cleanup")?e&&(f=nu())&&(g.clientScreenNonce=f):!f&&(f=nu())&&(g.clientScreenNonce=f);d&&(g.clickTracking={clickTrackingParams:d});if(d=E("yt.mdx.remote.remoteClient_"))g.remoteClient=d;Pv().setLocationOnInnerTubeContext(g);try{var v=hm(),x=v.bid;delete v.bid;g.adSignalsInfo={params:[],bid:x};var y=z(Object.entries(v));for(var H=y.next();!H.done;H=y.next()){var K=z(H.value),fa=K.next().value,ja=K.next().value;v=fa;x=ja;d=void 0;(d=g.adSignalsInfo.params)==null||d.push({key:v,value:""+
x})}var Ja,bb;if(((Ja=g.client)==null?void 0:Ja.clientName)==="TVHTML5"||((bb=g.client)==null?void 0:bb.clientName)==="TVHTML5_UNPLUGGED"){var aa=R("INNERTUBE_CONTEXT");aa.adSignalsInfo&&(g.adSignalsInfo.advertisingId=aa.adSignalsInfo.advertisingId,g.adSignalsInfo.advertisingIdSignalType="DEVICE_ID_TYPE_CONNECTED_TV_IFA",g.adSignalsInfo.limitAdTracking=aa.adSignalsInfo.limitAdTracking)}}catch(oa){Vt(oa)}y=g}else Vt(Error("Error: No InnerTubeContext shell provided in ytconfig.")),y={};y={context:y};
if(H=this.i(a)){this.h(y,H,b);var X;b="/youtubei/v1/"+Wv(this.j());(H=(X=ct(a.commandMetadata,wl))==null?void 0:X.apiUrl)&&(b=H);X=b;(b=R("INNERTUBE_HOST_OVERRIDE"))&&(X=String(b)+String(fc(X)));b={};S("json_condensed_response")&&(b.prettyPrint="false");X=fm(X,b||{},!1);a=Object.assign({},{command:a},void 0);a={input:X,ib:xu(X),Ma:y,config:a};a.config.Vb?a.config.Vb.identity=c:a.config.Vb={identity:c};return a}Vt(new T("Error: Failed to create Request from Command.",a))};
ea.Object.defineProperties(Xv.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!1}}});
function Yv(){}
w(Yv,Xv);function Zv(){}
w(Zv,Yv);Zv.prototype.u=function(){return{input:"/getDatasyncIdsEndpoint",ib:xu("/getDatasyncIdsEndpoint","GET"),Ma:{}}};
Zv.prototype.j=function(){return[]};
Zv.prototype.i=function(){};
Zv.prototype.h=function(){};var $v={},aw=($v.GET_DATASYNC_IDS=Tv(Zv),$v);function bw(a){var b;(b=E("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},D("ytcsi."+(a||"")+"data_",b));return b}
function cw(){var a=bw();a.info||(a.info={});return a.info}
function dw(a){a=bw(a);a.metadata||(a.metadata={});return a.metadata}
function ew(a){a=bw(a);a.tick||(a.tick={});return a.tick}
function fw(a){a=bw(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function gw(a){a=fw(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function hw(a){var b=bw(a).nonce;b||(b=du(),bw(a).nonce=b);return b}
;function iw(){var a=E("ytcsi.debug");a||(a=[],D("ytcsi.debug",a),D("ytcsi.reference",{}));return a}
function jw(a){a=a||"";var b=E("ytcsi.reference");b||(iw(),b=E("ytcsi.reference"));if(b[a])return b[a];var c=iw(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
;var V={},kw=(V["analytics.explore"]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",V["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",V["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",V["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",V["asset.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS",V["asset.composition"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION",V["asset.composition_ownership"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_OWNERSHIP",V["asset.composition_policy"]=
"LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_POLICY",V["asset.embeds"]="LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS",V["asset.history"]="LATENCY_ACTION_CREATOR_CMS_ASSET_HISTORY",V["asset.issues"]="LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES",V["asset.licenses"]="LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES",V["asset.metadata"]="LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA",V["asset.ownership"]="LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP",V["asset.policy"]="LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY",V["asset.references"]=
"LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES",V["asset.shares"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SHARES",V["asset.sound_recordings"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS",V["asset_group.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_ASSETS",V["asset_group.campaigns"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CAMPAIGNS",V["asset_group.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CLAIMED_VIDEOS",V["asset_group.metadata"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_METADATA",V["song.analytics"]=
"LATENCY_ACTION_CREATOR_SONG_ANALYTICS",V.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",V["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",V["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",V["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",V["channel.content.promotions"]="LATENCY_ACTION_CREATOR_PROMOTION_LIST",V["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",V["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",V["channel.monetization"]=
"LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",V["channel.music"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",V["channel.music_storefront"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT",V["channel.playlists"]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",V["channel.translations"]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",V["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",V["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",V["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",
V["dialog.video_copyright"]="LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT",V["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",V.owner="LATENCY_ACTION_CREATOR_CMS_DASHBOARD",V["owner.allowlist"]="LATENCY_ACTION_CREATOR_CMS_ALLOWLIST",V["owner.analytics"]="LATENCY_ACTION_CREATOR_CMS_ANALYTICS",V["owner.art_tracks"]="LATENCY_ACTION_CREATOR_CMS_ART_TRACKS",V["owner.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSETS",V["owner.asset_groups"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS",V["owner.bulk"]=
"LATENCY_ACTION_CREATOR_CMS_BULK_HISTORY",V["owner.campaigns"]="LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS",V["owner.channel_invites"]="LATENCY_ACTION_CREATOR_CMS_CHANNEL_INVITES",V["owner.channels"]="LATENCY_ACTION_CREATOR_CMS_CHANNELS",V["owner.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS",V["owner.claims"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",V["owner.claims.manual"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",V["owner.delivery"]="LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY",
V["owner.delivery_templates"]="LATENCY_ACTION_CREATOR_CMS_DELIVERY_TEMPLATES",V["owner.issues"]="LATENCY_ACTION_CREATOR_CMS_ISSUES",V["owner.licenses"]="LATENCY_ACTION_CREATOR_CMS_LICENSES",V["owner.pitch_music"]="LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC",V["owner.policies"]="LATENCY_ACTION_CREATOR_CMS_POLICIES",V["owner.releases"]="LATENCY_ACTION_CREATOR_CMS_RELEASES",V["owner.reports"]="LATENCY_ACTION_CREATOR_CMS_REPORTS",V["owner.videos"]="LATENCY_ACTION_CREATOR_CMS_VIDEOS",V["playlist.videos"]=
"LATENCY_ACTION_CREATOR_PLAYLIST_VIDEO_LIST",V["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",V["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",V["promotion.edit"]="LATENCY_ACTION_CREATOR_PROMOTION_EDIT",V["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",V["video.claims"]="LATENCY_ACTION_CREATOR_VIDEO_CLAIMS",V["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",V["video.copyright"]="LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT",V["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",
V["video.editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",V["video.editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",V["video.live_settings"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS",V["video.live_streaming"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING",V["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",V["video.policy"]="LATENCY_ACTION_CREATOR_VIDEO_POLICY",V["video.rights_management"]="LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT",V["video.translations"]=
"LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",V),W={},lw=(W.auto_search="LATENCY_ACTION_AUTO_SEARCH",W.ad_to_ad="LATENCY_ACTION_AD_TO_AD",W.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",W.app_startup="LATENCY_ACTION_APP_STARTUP",W.browse="LATENCY_ACTION_BROWSE",W.cast_splash="LATENCY_ACTION_CAST_SPLASH",W.channel_activity="LATENCY_ACTION_KIDS_CHANNEL_ACTIVITY",W.channels="LATENCY_ACTION_CHANNELS",W.chips="LATENCY_ACTION_CHIPS",W.commerce_transaction="LATENCY_ACTION_COMMERCE_TRANSACTION",W.direct_playback=
"LATENCY_ACTION_DIRECT_PLAYBACK",W.editor="LATENCY_ACTION_EDITOR",W.embed="LATENCY_ACTION_EMBED",W.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",W.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",W.explore="LATENCY_ACTION_EXPLORE",W.favorites="LATENCY_ACTION_FAVORITES",W.home="LATENCY_ACTION_HOME",W.inboarding="LATENCY_ACTION_INBOARDING",W.library="LATENCY_ACTION_LIBRARY",W.live="LATENCY_ACTION_LIVE",W.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",
W.management="LATENCY_ACTION_MANAGEMENT",W.mini_app="LATENCY_ACTION_MINI_APP_PLAY",W.notification_settings="LATENCY_ACTION_KIDS_NOTIFICATION_SETTINGS",W.onboarding="LATENCY_ACTION_ONBOARDING",W.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",W.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",W.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",W.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",W.prebuffer="LATENCY_ACTION_PREBUFFER",W.prefetch="LATENCY_ACTION_PREFETCH",
W.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",W.profile_switcher="LATENCY_ACTION_LOGIN",W.projects="LATENCY_ACTION_PROJECTS",W.reel_watch="LATENCY_ACTION_REEL_WATCH",W.results="LATENCY_ACTION_RESULTS",W.red="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",W.premium="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",W.privacy_policy="LATENCY_ACTION_KIDS_PRIVACY_POLICY",W.review="LATENCY_ACTION_REVIEW",W.search_overview_answer="LATENCY_ACTION_SEARCH_OVERVIEW_ANSWER",W.search_ui="LATENCY_ACTION_SEARCH_UI",
W.search_suggest="LATENCY_ACTION_SUGGEST",W.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",W.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",W.seek="LATENCY_ACTION_PLAYER_SEEK",W.settings="LATENCY_ACTION_SETTINGS",W.store="LATENCY_ACTION_STORE",W.supervision_dashboard="LATENCY_ACTION_KIDS_SUPERVISION_DASHBOARD",W.tenx="LATENCY_ACTION_TENX",W.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",W.watch="LATENCY_ACTION_WATCH",W.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",W["watch,watch7"]="LATENCY_ACTION_WATCH",
W["watch,watch7_html5"]="LATENCY_ACTION_WATCH",W["watch,watch7ad"]="LATENCY_ACTION_WATCH",W["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",W.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",W.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",W.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",W.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",W.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",W.gel_compression="LATENCY_ACTION_GEL_COMPRESSION",W.gel_jspb_serialize="LATENCY_ACTION_GEL_JSPB_SERIALIZE",
W.attestation_challenge_fetch="LATENCY_ACTION_ATTESTATION_CHALLENGE_FETCH",W);Object.assign(lw,kw);function mw(a,b){dq.call(this,1,arguments);this.timer=b}
w(mw,dq);var nw=new eq("aft-recorded",mw);D("ytLoggingGelSequenceIdObj_",C.ytLoggingGelSequenceIdObj_||{});var ow=C.ytLoggingLatencyUsageStats_||{};D("ytLoggingLatencyUsageStats_",ow);function pw(){this.h=0}
function qw(){pw.h||(pw.h=new pw);return pw.h}
pw.prototype.tick=function(a,b,c,d){rw(this,"tick_"+a+"_"+b)||jo("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c,cttAuthInfo:d})};
pw.prototype.info=function(a,b,c){var d=Object.keys(a).join("");rw(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,jo("latencyActionInfo",a,{cttAuthInfo:c}))};
pw.prototype.jspbInfo=function(){};
pw.prototype.span=function(a,b,c){var d=Object.keys(a).join("");rw(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,jo("latencyActionSpan",a,{cttAuthInfo:c}))};
function rw(a,b){ow[b]=ow[b]||{count:0};var c=ow[b];c.count++;c.time=U();a.h||(a.h=un(function(){var d=U(),e;for(e in ow)ow[e]&&d-ow[e].time>6E4&&delete ow[e];a&&(a.h=0)},5E3));
return c.count>5?(c.count===6&&Math.random()*1E5<1&&(c=new T("CSI data exceeded logging limit with key",b.split("_")),b.indexOf("plev")>=0||Wt(c)),!0):!1}
;var sw=window;function tw(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
function uw(){var a;if(S("csi_use_performance_navigation_timing")||S("csi_use_performance_navigation_timing_tvhtml5")){var b,c,d,e=Y==null?void 0:(a=Y.getEntriesByType)==null?void 0:(b=a.call(Y,"navigation"))==null?void 0:(c=b[0])==null?void 0:(d=c.toJSON)==null?void 0:d.call(c);e?(e.requestStart=vw(e.requestStart),e.responseEnd=vw(e.responseEnd),e.redirectStart=vw(e.redirectStart),e.redirectEnd=vw(e.redirectEnd),e.domainLookupEnd=vw(e.domainLookupEnd),e.connectStart=vw(e.connectStart),e.connectEnd=
vw(e.connectEnd),e.responseStart=vw(e.responseStart),e.secureConnectionStart=vw(e.secureConnectionStart),e.domainLookupStart=vw(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=Y.timing}else a=S("csi_performance_timing_to_object")?JSON.parse(JSON.stringify(Y.timing)):Y.timing;return a}
function vw(a){return Math.round(ww()+a)}
function ww(){return(S("csi_use_time_origin")||S("csi_use_time_origin_tvhtml5"))&&Y.timeOrigin?Math.floor(Y.timeOrigin):Y.timing.navigationStart}
var Y=sw.performance||sw.mozPerformance||sw.msPerformance||sw.webkitPerformance||new tw;var xw=!1,yw=!1,zw={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="preload"][name="player/embed"]':"pej",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",
'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",
'script[name="mobile_blazer_watch_mod"]':"mbwj"};Xa(Y.clearResourceTimings||Y.webkitClearResourceTimings||Y.mozClearResourceTimings||Y.msClearResourceTimings||Y.oClearResourceTimings||gi,Y);function Aw(a,b){if(!S("web_csi_action_sampling_enabled")||!bw(b).actionDisabled){var c=jw(b||"");fv(c.info,a);a.loadType&&(c=a.loadType,dw(b).loadType=c);fv(gw(b),a);c=hw(b);b=bw(b).cttAuthInfo;qw().info(a,c,b)}}
function Bw(){var a,b,c,d;return((d=Es().resolve(new ys(Tp))==null?void 0:(a=Up())==null?void 0:(b=a.loggingHotConfig)==null?void 0:(c=b.csiConfig)==null?void 0:c.debugTicks)!=null?d:[]).map(function(e){return Object.values(e)[0]})}
function Z(a,b,c){if(!S("web_csi_action_sampling_enabled")||!bw(c).actionDisabled){var d=hw(c),e;if(e=S("web_csi_debug_sample_enabled")&&d){(Es().resolve(new ys(Tp))==null?0:Up())&&!yw&&(yw=!0,Z("gcfl",U(),c));var f,g,h;e=(Es().resolve(new ys(Tp))==null?void 0:(f=Up())==null?void 0:(g=f.loggingHotConfig)==null?void 0:(h=g.csiConfig)==null?void 0:h.debugSampleWeight)||0;if(f=e!==0)b:{f=Bw();if(f.length>0)for(g=0;g<f.length;g++)if(a===f[g]){f=!0;break b}f=!1}if(f){for(g=f=0;g<d.length;g++)f=f*31+d.charCodeAt(g),
g<d.length-1&&(f%=0x800000000000);e=f%1E5%e!==0;bw(c).debugTicksExcludedLogged||(f={},f.debugTicksExcluded=e,Aw(f,c));bw(c).debugTicksExcludedLogged=!0}else e=!1}if(!e){if(a[0]!=="_"&&(e=a,f=b,!S("enable_strip_performance_mark_in_prod")&&Y.mark))if(e.startsWith("mark_")||(e="mark_"+e),c&&(e+=" ("+c+")"),f===void 0||S("web_csi_disable_alt_time_performance_mark"))Y.mark(e);else{f=S("csi_use_performance_navigation_timing")||S("csi_use_performance_navigation_timing_tvhtml5")?f-Y.timeOrigin:f-(Y.timeOrigin||
Y.timing.navigationStart);try{Y.mark(e,{startTime:f})}catch(k){}}e=jw(c||"");e.tick[a]=b||U();if(e.callback&&e.callback[a])for(e=z(e.callback[a]),f=e.next();!f.done;f=e.next())f=f.value,f();e=fw(c);e.gelTicks&&(e.gelTicks[a]=!0);f=ew(c);e=b||U();S("log_repeated_ytcsi_ticks")?a in f||(f[a]=e):f[a]=e;f=bw(c).cttAuthInfo;a==="_start"?(a=qw(),rw(a,"baseline_"+d)||jo("latencyActionBaselined",{clientActionNonce:d},{timestamp:b,cttAuthInfo:f})):qw().tick(a,d,b,f);Cw(c);return e}}}
function Dw(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=Wr+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function Ew(){function a(f,g,h){g=g.match("_rid")?g.split("_rid")[0]:g;typeof h==="number"&&(h=JSON.stringify(h));f.requestIds?f.requestIds.push({endpoint:g,id:h}):f.requestIds=[{endpoint:g,id:h}]}
for(var b={},c=z(Object.entries(R("TIMING_INFO",{}))),d=c.next();!d.done;d=c.next()){var e=z(d.value);d=e.next().value;e=e.next().value;switch(d){case "GetBrowse_rid":a(b,d,e);break;case "GetGuide_rid":a(b,d,e);break;case "GetHome_rid":a(b,d,e);break;case "GetPlayer_rid":a(b,d,e);break;case "GetSearch_rid":a(b,d,e);break;case "GetSettings_rid":a(b,d,e);break;case "GetTrending_rid":a(b,d,e);break;case "GetWatchNext_rid":a(b,d,e);break;case "yt_red":b.isRedSubscriber=!!e;break;case "yt_ad":b.isMonetized=
!!e}}return b}
function Fw(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;d==="SCRIPT"?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):d==="LINK"&&(c=a.href);Jb(document)&&a.setAttribute("nonce",Jb(document));return c?(a=Y.getEntriesByName(c))&&a[0]&&(a=a[0],c=ww(),Z("rsf_"+b,c+Math.round(a.fetchStart)),Z("rse_"+b,c+Math.round(a.responseEnd)),a.transferSize!==void 0&&a.transferSize===0)?!0:!1:!1}
function Gw(){var a=window.location.protocol,b=Y.getEntriesByType("resource");b=Qb(b,function(c){return c.name.indexOf(a+"//fonts.gstatic.com/s/")===0});
(b=Sb(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&b.startTime>0&&b.responseEnd>0&&(Z("wffs",vw(b.startTime)),Z("wffe",vw(b.responseEnd)))}
function Hw(a){var b=Iw("aft",a);if(b)return b;b=R((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=b.length,d=0;d<c;d++){var e=Iw(b[d],a);if(e)return e}return NaN}
function Iw(a,b){if(a=ew(b)[a])return typeof a==="number"?a:a[a.length-1]}
function Cw(a){var b=Iw("_start",a),c=Hw(a),d=S("enable_cow_info_csi")||!xw;b&&c&&d&&(jq(nw,new mw(Math.round(c-b),a)),xw=!0)}
function Jw(){if(Y.getEntriesByType){var a=Y.getEntriesByType("paint");if(a=Tb(a,function(c){return c.name==="first-paint"}))return vw(a.startTime)}var b;
S("csi_use_performance_navigation_timing")||S("csi_use_performance_navigation_timing_tvhtml5")?b=Y.getEntriesByType("first-paint")[0].startTime:b=Y.timing.Ah;return b?Math.max(0,b):0}
;function Kw(a,b){Ul(function(){jw("").info.actionType=a;b&&Ql("TIMING_AFT_KEYS",b);Ql("TIMING_ACTION",a);var c=Ew();Object.keys(c).length>0&&Aw(c);c={isNavigation:!0,actionType:lw[R("TIMING_ACTION")]||"LATENCY_ACTION_UNKNOWN"};var d=R("PREVIOUS_ACTION");d&&(c.previousAction=lw[d]||"LATENCY_ACTION_UNKNOWN");if(d=R("CLIENT_PROTOCOL"))c.httpProtocol=d;if(d=R("CLIENT_TRANSPORT"))c.transportProtocol=d;(d=nu())&&d!=="UNDEFINED_CSN"&&(c.clientScreenNonce=d);d=Dw();if(d===1||d===-1)c.isVisible=!0;dw();cw();
c.loadType="cold";d=cw();var e=uw(),f=ww(),g=R("CSI_START_TIMESTAMP_MILLIS",0);g>0&&!S("embeds_web_enable_csi_start_override_killswitch")&&(f=g);f&&(Z("srt",e.responseStart),d.prerender!==1&&Z("_start",f,void 0));d=Jw();d>0&&Z("fpt",d);d=uw();d.isPerformanceNavigationTiming&&Aw({performanceNavigationTiming:!0},void 0);Z("nreqs",d.requestStart,void 0);Z("nress",d.responseStart,void 0);Z("nrese",d.responseEnd,void 0);d.redirectEnd-d.redirectStart>0&&(Z("nrs",d.redirectStart,void 0),Z("nre",d.redirectEnd,
void 0));d.domainLookupEnd-d.domainLookupStart>0&&(Z("ndnss",d.domainLookupStart,void 0),Z("ndnse",d.domainLookupEnd,void 0));d.connectEnd-d.connectStart>0&&(Z("ntcps",d.connectStart,void 0),Z("ntcpe",d.connectEnd,void 0));d.secureConnectionStart>=ww()&&d.connectEnd-d.secureConnectionStart>0&&(Z("nstcps",d.secureConnectionStart,void 0),Z("ntcpe",d.connectEnd,void 0));Y&&"getEntriesByType"in Y&&Gw();d=[];if(document.querySelector&&Y&&Y.getEntriesByName)for(var h in zw)zw.hasOwnProperty(h)&&(e=zw[h],
Fw(h,e)&&d.push(e));if(d.length>0)for(c.resourceInfo=[],h=z(d),d=h.next();!d.done;d=h.next())c.resourceInfo.push({resourceCache:d.value});Aw(c);c=fw();c.preLoggedGelInfos||(c.preLoggedGelInfos=[]);h=c.preLoggedGelInfos;c=gw();d=void 0;for(e=0;e<h.length;e++)if(f=h[e],f.loadType){d=f.loadType;break}if(dw().loadType==="cold"&&(c.loadType==="cold"||d==="cold")){d=ew();e=fw();e=e.gelTicks?e.gelTicks:e.gelTicks={};for(var k in d)if(!(k in e))if(typeof d[k]==="number")Z(k,Iw(k));else if(S("log_repeated_ytcsi_ticks"))for(f=
z(d[k]),g=f.next();!g.done;g=f.next())g=g.value,Z(k.slice(1),g);k={};d=!1;h=z(h);for(e=h.next();!e.done;e=h.next())d=e.value,fv(c,d),fv(k,d),d=!0;d&&Aw(k)}D("ytglobal.timingready_",!0);k=R("TIMING_ACTION");E("ytglobal.timingready_")&&k&&Lw()&&Hw()&&Cw()})()}
function Lw(){return Ul(function(){return Mw()})()}
function Nw(a,b,c){Ul(Aw)(a,b,c===void 0?!1:c)}
function Ow(a,b,c){return Ul(Z)(a,b,c)}
function Mw(){return Ul(function(){return"_start"in ew()})()}
function Pw(){Ul(function(){var a=hw();requestAnimationFrame(function(){setTimeout(function(){a===hw()&&Ow("ol",void 0,void 0)},0)})})()}
var Qw=window;Qw.ytcsi&&(Qw.ytcsi.infoGel=Nw,Qw.ytcsi.tick=Ow);var Rw="tokens consistency mss client_location entities adblock_detection response_received_commands store PLAYER_PRELOAD shorts_prefetch".split(" "),Sw=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse","type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.PlayerResponse"];function Tw(a,b,c,d){this.u=a;this.ea=b;this.o=c;this.j=d;this.i=void 0;this.h=new Map;a.Qb||(a.Qb={});a.Qb=Object.assign({},aw,a.Qb)}
function Uw(a,b,c,d){if(Tw.h!==void 0){if(d=Tw.h,a=[a!==d.u,b!==d.ea,c!==d.o,!1,!1,!1,void 0!==d.i],a.some(function(e){return e}))throw new T("InnerTubeTransportService is already initialized",a);
}else Tw.h=new Tw(a,b,c,d)}
function Vw(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=c===void 0?Zm:c;var d=Ww(a,b);return d?new ii(function(e,f){var g,h,k,l,m;return A(function(n){switch(n.h){case 1:return n.yield(d,2);case 2:g=n.i;h=g.u(b,void 0,c);if(!h){f(new T("Error: Failed to build request for command.",b));n.D(0);break}Ev(h.input);l=((k=h.ib)==null?void 0:k.mode)==="cors"?"cors":void 0;if(a.o.ff){var p=h.config,t;p=p==null?void 0:(t=p.Vb)==null?void 0:t.sessionIndex;t=Ym(0,{sessionIndex:p});m=Object.assign({},
Qv(l),t);n.D(4);break}return n.yield(Xw(h.config,l),5);case 5:m=n.i;case 4:e(Yw(a,h,m)),n.h=0}})}):ni(new T("Error: No request builder found for command.",b))}
function Zw(a,b,c){var d;if(b&&!(b==null?0:(d=b.sequenceMetaData)==null?0:d.skipProcessing)&&a.j){d=z(Rw);for(var e=d.next();!e.done;e=d.next())e=e.value,a.j[e]&&a.j[e].handleResponse(b,c)}}
function Yw(a,b,c){var d=d===void 0?function(){}:d;
var e,f,g,h,k,l,m,n,p,t,v,x,y,H,K,fa,ja,Ja,bb,aa,X,oa,Na,Ma,Wg,Xg,Lr,Mr,Nr,Or;return A(function(ia){switch(ia.h){case 1:ia.D(2);break;case 3:if((e=ia.i)&&!e.isExpired())return ia.return(Promise.resolve(e.h()));case 2:if(!((f=b)==null?0:(g=f.Ma)==null?0:g.context)){ia.D(4);break}h=b.Ma.context;ia.D(5);break;case 5:k=z([]),l=k.next();case 8:if(l.done){ia.D(4);break}m=l.value;return ia.yield(m.Ch(h),9);case 9:l=k.next();ia.D(8);break;case 4:if((n=a.i)==null||!n.Ih(b.input,b.Ma)){ia.D(12);break}return ia.yield(a.i.wh(b.input,
b.Ma),13);case 13:return p=ia.i,Zw(a,p,b),ia.return(p);case 12:return(x=(v=b.config)==null?void 0:v.Fh)&&a.h.has(x)?t=a.h.get(x):(y=JSON.stringify(b.Ma),fa=(K=(H=b.ib)==null?void 0:H.headers)!=null?K:{},b.ib=Object.assign({},b.ib,{headers:Object.assign({},fa,c)}),ja=Object.assign({},b.ib),b.ib.method==="POST"&&(ja=Object.assign({},ja,{body:y})),((Ja=b.config)==null?0:Ja.Je)&&Ow(b.config.Je),bb=function(){return a.ea.fetch(b.input,ja,b.config)},t=bb(),x&&a.h.set(x,t)),ia.yield(t,14);
case 14:if((aa=ia.i)&&"error"in aa&&((X=aa)==null?0:(oa=X.error)==null?0:oa.details))for(Na=aa.error.details,Ma=z(Na),Wg=Ma.next();!Wg.done;Wg=Ma.next())Xg=Wg.value,(Lr=Xg["@type"])&&Sw.indexOf(Lr)>-1&&(delete Xg["@type"],aa=Xg);x&&a.h.has(x)&&a.h.delete(x);((Mr=b.config)==null?0:Mr.Ke)&&Ow(b.config.Ke);if(aa||(Nr=a.i)==null||!Nr.kh(b.input,b.Ma)){ia.D(15);break}return ia.yield(a.i.vh(b.input,b.Ma),16);case 16:aa=ia.i;case 15:return Zw(a,aa,b),((Or=b.config)==null?0:Or.Ge)&&Ow(b.config.Ge),d(),ia.return(aa||
void 0)}})}
function Ww(a,b){a:{a=a.u;var c,d=(c=ct(b,xl))==null?void 0:c.signal;if(d&&a.Qb&&(c=a.Qb[d])){var e=c();break a}var f;if((c=(f=ct(b,vl))==null?void 0:f.request)&&a.Ud&&(f=a.Ud[c])){e=f();break a}for(e in b)if(a.bd[e]&&(b=a.bd[e])){e=b();break a}e=void 0}if(e!==void 0)return Promise.resolve(e)}
function Xw(a,b){var c,d,e,f;return A(function(g){if(g.h==1){e=(c=a)==null?void 0:(d=c.Vb)==null?void 0:d.sessionIndex;var h=g.yield;var k=Ym(0,{sessionIndex:e});if(!(k instanceof ii)){var l=new ii(gi);ji(l,2,k);k=l}return h.call(g,k,2)}f=g.i;return g.return(Promise.resolve(Object.assign({},Qv(b),f)))})}
;var $w=new xs("INNERTUBE_TRANSPORT_TOKEN");function ax(){}
w(ax,Yv);ax.prototype.j=function(){return Su};
ax.prototype.i=function(a){return ct(a,Hl)||void 0};
ax.prototype.h=function(a,b,c){c=c===void 0?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
ea.Object.defineProperties(ax.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});function bx(){}
w(bx,Yv);bx.prototype.j=function(){return Tu};
bx.prototype.i=function(a){return ct(a,Gl)||void 0};
bx.prototype.h=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
ea.Object.defineProperties(bx.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});var cx=new xs("SHARE_CLIENT_PARAMS_PROVIDER_TOKEN");function dx(a){this.H=a}
w(dx,Yv);dx.prototype.j=function(){return Nu};
dx.prototype.i=function(a){return ct(a,Bl)||ct(a,Cl)||ct(a,Al)};
dx.prototype.h=function(a,b){b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);if(b.clientParamIdentifier){var c;if((c=this.H)==null?0:c.h(b.clientParamIdentifier))a.clientParams=this.H.i(b.clientParamIdentifier)}};
dx[ws]=[cx];function ex(){}
w(ex,Yv);ex.prototype.j=function(){return Pu};
ex.prototype.i=function(a){return ct(a,zl)||void 0};
ex.prototype.h=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
ea.Object.defineProperties(ex.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});function fx(){}
w(fx,Yv);fx.prototype.j=function(){return Qu};
fx.prototype.i=function(a){return ct(a,Fl)||void 0};
fx.prototype.h=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function gx(){}
w(gx,Yv);gx.prototype.j=function(){return Ru};
gx.prototype.i=function(a){return ct(a,El)||void 0};
gx.prototype.h=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function hx(){}
w(hx,Yv);hx.prototype.j=function(){return Ou};
hx.prototype.i=function(a){return ct(a,Dl)};
hx.prototype.h=function(a,b,c){c=c===void 0?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};var ix=new xs("FETCH_FN_TOKEN"),jx=new xs("PARSE_FN_TOKEN");function kx(a,b){var c=B.apply(2,arguments);a=a===void 0?0:a;T.call(this,b,c);this.errorType=a;Object.setPrototypeOf(this,this.constructor.prototype)}
w(kx,T);var lx=new xs("NETWORK_SLI_TOKEN");function mx(a,b,c){this.h=a;this.i=b;this.j=c}
mx.prototype.fetch=function(a,b,c){var d=this,e,f,g;return A(function(h){e=nx(d,a,b);g=(f=d.i)!=null?f:fetch;return h.return(g(e).then(function(k){return d.handleResponse(k,c)}).catch(function(k){Wt(k);
if((c==null?0:c.ce)&&k instanceof kx&&k.errorType===1)return Promise.reject(k)}))})};
function nx(a,b,c){if(a.h){var d=cc(dc(5,oc(b,"key")))||"/UNKNOWN_PATH";a.h.start(d)}a=c;S("wug_networking_gzip_request")&&(a=Lq(c));return new window.Request(b,a)}
mx.prototype.handleResponse=function(a,b){var c,d=(c=this.j)!=null?c:JSON.parse;c=a.text().then(function(e){if((b==null?0:b.ue)&&a.ok)return If(b.ue,e);e=e.replace(")]}'","");if((b==null?0:b.ce)&&e)try{var f=d(e)}catch(h){throw new kx(1,"JSON parsing failed after fetch");}var g;return(g=f)!=null?g:d(e)});
a.redirected||a.ok?this.h&&this.h.success():(this.h&&this.h.qh(),c=c.then(function(e){Wt(new T("Error: API fetch failed",a.status,a.url,e));return Object.assign({},e,{errorMetadata:{status:a.status}})}));
return c};
mx[ws]=[new ys(lx),new ys(ix),new ys(jx)];var ox=new xs("NETWORK_MANAGER_TOKEN");var px;function qx(){var a,b,c;return A(function(d){if(d.h==1)return a=Es().resolve($w),a?d.yield(Vw(a),2):(Wt(Error("InnertubeTransportService unavailable in fetchDatasyncIds")),d.return(void 0));if(b=d.i){if(b.errorMetadata)return Wt(Error("Datasync IDs fetch responded with "+b.errorMetadata.status+": "+b.error)),d.return(void 0);c=b.nh;return d.return(c)}Wt(Error("Network request to get Datasync IDs failed."));return d.return(void 0)})}
;function rx(){var a;return(a=R("WEB_PLAYER_CONTEXT_CONFIGS"))==null?void 0:a.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER}
;var sx=C.caches,tx;function ux(a){var b=a.indexOf(":");return b===-1?{qd:a}:{qd:a.substring(0,b),datasyncId:a.substring(b+1)}}
function vx(){return A(function(a){if(tx!==void 0)return a.return(tx);tx=new Promise(function(b){var c;return A(function(d){switch(d.h){case 1:return Aa(d,2),d.yield(sx.open("test-only"),4);case 4:return d.yield(sx.delete("test-only"),5);case 5:d.h=3;d.o=0;break;case 2:if(c=Ba(d),c instanceof Error&&c.name==="SecurityError")return b(!1),d.return();case 3:b("caches"in window),d.h=0}})});
return a.return(tx)})}
function wx(a){var b,c,d,e,f,g,h;A(function(k){if(k.h==1)return k.yield(vx(),2);if(k.h!=3){if(!k.i)return k.return(!1);b=[];return k.yield(sx.keys(),3)}c=k.i;d=z(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=ux(f),h=g.datasyncId,!h||a.includes(h)||b.push(sx.delete(f));return k.return(Promise.all(b).then(function(l){return l.some(function(m){return m})}))})}
function xx(){var a,b,c,d,e,f,g;return A(function(h){if(h.h==1)return h.yield(vx(),2);if(h.h!=3){if(!h.i)return h.return(!1);a=sn("cache contains other");return h.yield(sx.keys(),3)}b=h.i;c=z(b);for(d=c.next();!d.done;d=c.next())if(e=d.value,f=ux(e),(g=f.datasyncId)&&g!==a)return h.return(!0);return h.return(!1)})}
;function yx(){try{return!!self.sessionStorage}catch(a){return!1}}
;function zx(a){a=a.match(/(.*)::.*::.*/);if(a!==null)return a[1]}
function Ax(a){if(yx()){var b=Object.keys(window.sessionStorage);b=z(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=zx(c);d===void 0||a.includes(d)||self.sessionStorage.removeItem(c)}}}
function Bx(){if(!yx())return!1;var a=sn(),b=Object.keys(window.sessionStorage);b=z(b);for(var c=b.next();!c.done;c=b.next())if(c=zx(c.value),c!==void 0&&c!==a)return!0;return!1}
;function Cx(){qx().then(function(a){a&&(yp(a),wx(a),Bv(a),Ax(a))})}
function Dx(){var a=new Dr;Aj.pa(function(){var b,c,d,e,f;return A(function(g){switch(g.h){case 1:if(S("ytidb_clear_optimizations_killswitch")){g.D(2);break}b=sn("clear");if(b.startsWith("V")&&b.endsWith("||")){var h=[b];yp(h);wx(h);Bv(h);Ax(h);return g.return()}c=Cv();d=Bx();return g.yield(xx(),3);case 3:return e=g.i,g.yield(zp(),4);case 4:if(f=g.i,!(c||d||e||f))return g.return();case 2:a.va()?Cx():a.h.add("publicytnetworkstatus-online",Cx,!0,void 0,void 0),g.h=0}})})}
;function Ex(){this.state=1;this.h=null}
r=Ex.prototype;r.initialize=function(a,b,c){if(a.program){var d,e=(d=a.interpreterUrl)!=null?d:null;if(a.interpreterSafeScript){var f=a.interpreterSafeScript;f?((f=f.privateDoNotAccessOrElseSafeScriptWrappedValue)?(d=lb(),f=new Kb(d?d.createScript(f):f)):f=null,d=f):d=null}else d=(f=a.interpreterScript)!=null?f:null;a.interpreterSafeUrl&&(e=ol(a.interpreterSafeUrl).toString());Fx(this,d,e,a.program,b,c)}else Wt(Error("Cannot initialize botguard without program"))};
function Fx(a,b,c,d,e,f){var g=g===void 0?"trayride":g;c?(a.state=2,Wu(c,function(){window[g]?Gx(a,d,g,e):(a.state=3,Yu(c),Wt(new T("Unable to load Botguard","from "+c)))},f)):b?(f=xg("SCRIPT"),b instanceof Kb?Mb(f,b):f.textContent=b,f.nonce=Jb(document),document.head.appendChild(f),document.head.removeChild(f),window[g]?Gx(a,d,g,e):(a.state=4,Wt(new T("Unable to load Botguard from JS")))):Wt(new T("Unable to load VM; no url or JS provided"))}
r.isLoading=function(){return this.state===2};
function Gx(a,b,c,d){a.state=5;try{var e=new mj({program:b,ke:c,Ae:{disable:!S("att_web_record_metrics"),Fa:"aGIf"}});e.af.then(function(){a.state=6;d&&d(b)});
a.Rc(e)}catch(f){a.state=7,f instanceof Error&&Wt(f)}}
r.invoke=function(a){a=a===void 0?{}:a;return this.Uc()?this.Fd({cd:a}):null};
r.dispose=function(){this.Rc(null);this.state=8};
r.Uc=function(){return!!this.h};
r.Fd=function(a){return this.h.yd(a)};
r.Rc=function(a){vc(this.h);this.h=a};var Hx=[],Ix=!1;function Jx(){if(!S("disable_biscotti_fetch_for_ad_blocker_detection")&&!S("disable_biscotti_fetch_entirely_for_all_web_clients")&&yu()){var a=R("PLAYER_VARS",{});if(og(a)!="1"&&!zu(a)){var b=function(){Ix=!0;"google_ad_status"in window?Ql("DCLKSTAT",1):Ql("DCLKSTAT",2)};
try{Wu("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}Hx.push(Aj.pa(function(){if(!(Ix||"google_ad_status"in window)){try{$u("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}Ix=!0;Ql("DCLKSTAT",3)}},5E3))}}}
function Kx(){var a=Number(R("DCLKSTAT",0));return isNaN(a)?0:a}
;function Lx(){var a=E("yt.abuse.playerAttLoader");return a&&["bgvma","bgvmb","bgvmc"].every(function(b){return b in a})?a:null}
;function Mx(){Ex.apply(this,arguments)}
w(Mx,Ex);Mx.prototype.Rc=function(a){var b;(b=Lx())==null||b.bgvma();a?(b={bgvma:a.dispose.bind(a),bgvmb:a.snapshot.bind(a),bgvmc:a.yd.bind(a)},D("yt.abuse.playerAttLoader",b),D("yt.abuse.playerAttLoaderRun",function(c){return a.snapshot(c)})):(D("yt.abuse.playerAttLoader",null),D("yt.abuse.playerAttLoaderRun",null))};
Mx.prototype.Uc=function(){return!!Lx()};
Mx.prototype.Fd=function(a){return Lx().bgvmc(a)};function Nx(a){Os.call(this,a===void 0?"document_active":a);var b=this;this.o=10;this.h=new Map;this.transitions=[{from:"document_active",to:"document_disposed_preventable",action:this.G},{from:"document_active",to:"document_disposed",action:this.u},{from:"document_disposed_preventable",to:"document_disposed",action:this.u},{from:"document_disposed_preventable",to:"flush_logs",action:this.H},{from:"document_disposed_preventable",to:"document_active",action:this.i},{from:"document_disposed",to:"flush_logs",
action:this.H},{from:"document_disposed",to:"document_active",action:this.i},{from:"document_disposed",to:"document_disposed",action:function(){}},
{from:"flush_logs",to:"document_active",action:this.i}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",{event:c})});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",{event:c})})}
w(Nx,Os);Nx.prototype.G=function(a,b){if(!this.h.get("document_disposed_preventable")){a(b==null?void 0:b.event);var c,d;if((b==null?0:(c=b.event)==null?0:c.defaultPrevented)||(b==null?0:(d=b.event)==null?0:d.returnValue)){b.event.returnValue||(b.event.returnValue=!0);b.event.defaultPrevented||b.event.preventDefault();this.h=new Map;this.transition("document_active");return}}this.h.set("document_disposed_preventable",!0);this.h.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
Nx.prototype.u=function(a,b){this.h.get("document_disposed")?this.transition("document_active"):(a(b==null?void 0:b.event),this.h.set("document_disposed",!0),this.transition("flush_logs"))};
Nx.prototype.H=function(a,b){a(b==null?void 0:b.event);this.transition("document_active")};
Nx.prototype.i=function(){this.h=new Map};function Ox(a){Os.call(this,a===void 0?"document_visibility_unknown":a);var b=this;this.transitions=[{from:"document_visibility_unknown",to:"document_visible",action:this.i},{from:"document_visibility_unknown",to:"document_hidden",action:this.h},{from:"document_visibility_unknown",to:"document_foregrounded",action:this.H},{from:"document_visibility_unknown",to:"document_backgrounded",action:this.u},{from:"document_visible",to:"document_hidden",action:this.h},{from:"document_visible",to:"document_foregrounded",
action:this.H},{from:"document_visible",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_hidden",action:this.h},{from:"document_foregrounded",to:"document_foregrounded",action:this.H},{from:"document_hidden",to:"document_visible",action:this.i},{from:"document_hidden",to:"document_backgrounded",action:this.u},{from:"document_hidden",to:"document_hidden",action:this.h},{from:"document_backgrounded",to:"document_hidden",
action:this.h},{from:"document_backgrounded",to:"document_backgrounded",action:this.u},{from:"document_backgrounded",to:"document_visible",action:this.i}];document.addEventListener("visibilitychange",function(c){document.visibilityState==="visible"?b.transition("document_visible",{event:c}):b.transition("document_hidden",{event:c})});
S("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",{event:c})}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",{event:c})}))}
w(Ox,Os);Ox.prototype.i=function(a,b){a(b==null?void 0:b.event);S("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
Ox.prototype.h=function(a,b){a(b==null?void 0:b.event);S("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
Ox.prototype.u=function(a,b){a(b==null?void 0:b.event)};
Ox.prototype.H=function(a,b){a(b==null?void 0:b.event)};function Px(){this.o=new Nx;this.u=new Ox}
Px.prototype.install=function(){var a=B.apply(0,arguments),b=this;a.forEach(function(c){b.o.install(c)});
a.forEach(function(c){b.u.install(c)})};function Qx(){this.o=[];this.i=new Map;this.h=new Map;this.j=new Set}
Qx.prototype.clickCommand=function(a,b,c){var d=a.clickTrackingParams;c=c===void 0?0:c;if(d)if(c=nu(c===void 0?0:c)){a=this.client;d=new gu({trackingParams:d});var e=void 0;if(S("no_client_ve_attach_unless_shown")){var f=wv(d,c);sv.set(f,!0);xv(d,c)}e=e||"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";f=vv({cttAuthInfo:pu(c)||void 0},c);d={csn:c,ve:d.getAsJson(),gestureType:e};b&&(d.clientData=b);c==="UNDEFINED_CSN"?yv("visualElementGestured",f,d):a?Nt("visualElementGestured",d,a,f):jo("visualElementGestured",
d,f);b=!0}else b=!1;else b=!1;return b};
Qx.prototype.stateChanged=function(a,b,c){this.visualElementStateChanged(new gu({trackingParams:a}),b,c===void 0?0:c)};
Qx.prototype.visualElementStateChanged=function(a,b,c){c=c===void 0?0:c;if(c===0&&this.j.has(c))this.o.push([a,b]);else{var d=c;d=d===void 0?0:d;c=nu(d);a||(a=(a=ku(d===void 0?0:d))?new gu({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null);var e=a;c&&e&&(a=this.client,d=vv({cttAuthInfo:pu(c)||void 0},c),b={csn:c,ve:e.getAsJson(),clientData:b},c==="UNDEFINED_CSN"?yv("visualElementStateChanged",d,b):a?Nt("visualElementStateChanged",b,a,d):jo("visualElementStateChanged",b,d))}};
function Rx(a,b){if(b===void 0)for(var c=mu(),d=0;d<c.length;d++)c[d]!==void 0&&Rx(a,c[d]);else a.i.forEach(function(e,f){(f=a.h.get(f))&&uv(a.client,b,f,e)}),a.i.clear(),a.h.clear()}
;function Sx(){Px.call(this);var a={};this.install((a.document_disposed={callback:this.h},a));S("combine_ve_grafts")&&(a={},this.install((a.document_disposed={callback:this.i},a)));a={};this.install((a.flush_logs={callback:this.j},a));S("web_log_cfg_cee_ks")||un(Tx)}
w(Sx,Px);Sx.prototype.j=function(){jo("finalPayload",{csn:nu()})};
Sx.prototype.h=function(){au(bu)};
Sx.prototype.i=function(){var a=Rx;Qx.h||(Qx.h=new Qx);a(Qx.h)};
function Tx(){var a=R("CLIENT_EXPERIMENT_EVENTS");if(a){var b=$d();a=z(a);for(var c=a.next();!c.done;c=a.next())c=c.value,b(c)&&jo("genericClientExperimentEvent",{eventType:c});delete Pl.CLIENT_EXPERIMENT_EVENTS}}
;function Ux(){}
function Vx(){var a=E("ytglobal.storage_");a||(a=new Ux,D("ytglobal.storage_",a));return a}
Ux.prototype.estimate=function(){var a,b,c;return A(function(d){a=navigator;return((b=a.storage)==null?0:b.estimate)?d.return(a.storage.estimate()):((c=a.webkitTemporaryStorage)==null?0:c.queryUsageAndQuota)?d.return(Wx()):d.return()})};
function Wx(){var a=navigator;return new Promise(function(b,c){var d;(d=a.webkitTemporaryStorage)!=null&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
D("ytglobal.storageClass_",Ux);function ho(a,b){var c=this;this.handleError=a;this.h=b;this.i=!1;self.document===void 0||self.addEventListener("beforeunload",function(){c.i=!0});
this.j=Math.random()<=.2}
ho.prototype.Ea=function(a){this.handleError(a)};
ho.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":S("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":S("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":Xx(this,b);break;case "TRANSACTION_ENDED":this.j&&Math.random()<=.1&&this.h("idbTransactionEnded",b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=
Object.assign({},b,{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}};
function Xx(a,b){Vx().estimate().then(function(c){c=Object.assign({},b,{isSw:self.document===void 0,isIframe:self!==self.top,deviceStorageUsageMbytes:Yx(c==null?void 0:c.usage),deviceStorageQuotaMbytes:Yx(c==null?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
function Yx(a){return typeof a==="undefined"?"-1":String(Math.ceil(a/1048576))}
;var Zx={},$x=(Zx["api.invalidparam"]=2,Zx.auth=150,Zx["drm.auth"]=150,Zx["heartbeat.net"]=150,Zx["heartbeat.servererror"]=150,Zx["heartbeat.stop"]=150,Zx["html5.unsupportedads"]=5,Zx["fmt.noneavailable"]=5,Zx["fmt.decode"]=5,Zx["fmt.unplayable"]=5,Zx["html5.missingapi"]=5,Zx["html5.unsupportedlive"]=5,Zx["drm.unavailable"]=5,Zx["mrm.blocked"]=151,Zx["embedder.identity.denied"]=152,Zx);var ay=new Set("endSeconds startSeconds mediaContentUrl suggestedQuality videoId rct rctn playmuted muted_autoplay_duration_mode".split(" "));function by(a){return(a.search("cue")===0||a.search("load")===0)&&a!=="loadModule"}
function cy(a,b,c){if(typeof a==="string")return{videoId:a,startSeconds:b,suggestedQuality:c};b={};c=z(ay);for(var d=c.next();!d.done;d=c.next())d=d.value,a[d]&&(b[d]=a[d]);return b}
function dy(a,b,c,d){if(Ra(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};typeof a==="string"&&a.length===16?b.list="PL"+a:b.playlist=a;return b}
;function ey(a){F.call(this);var b=this;this.api=a;this.X=this.u=!1;this.A=[];this.P={};this.j=[];this.i=[];this.Y=!1;this.sessionId=this.h=null;this.targetOrigin="*";this.U=S("web_player_split_event_bus_iframe");this.o=R("POST_MESSAGE_ORIGIN")||document.location.protocol+"//"+document.location.hostname;this.G=function(c){a:if(!(b.o!=="*"&&c.origin!==b.o||b.h&&c.source!==b.h||typeof c.data!=="string")){try{var d=JSON.parse(c.data)}catch(h){break a}if(d)switch(d.event){case "listening":var e=c.source;
c=c.origin;d=d.id;c!=="null"&&(b.o=b.targetOrigin=c);b.h=e;b.sessionId=d;if(b.u){b.X=!0;b.u=!1;b.sendMessage("initialDelivery",fy(b));b.sendMessage("onReady");e=z(b.A);for(d=e.next();!d.done;d=e.next())gy(b,d.value);b.A=[]}break;case "command":if(e=d.func,d=d.args,e==="addEventListener"&&d)e=d[0],d=c.origin,e==="onReady"?b.api.logApiCall(e+" invocation",d):e==="onError"&&b.Y&&(b.api.logApiCall(e+" invocation",d,b.errorCode),b.errorCode=void 0),b.api.logApiCall(e+" registration",d),b.P[e]||e==="onReady"||
(c=hy(b,e,d),b.i.push({eventType:e,listener:c,origin:d}),b.U?b.api.handleExternalCall("addEventListener",[e,c],d):b.api.addEventListener(e,c),b.P[e]=!0);else if(c=c.origin,b.api.isExternalMethodAvailable(e,c)){d=d||[];if(d.length>0&&by(e)){var f=d;if(Ra(f[0])&&!Array.isArray(f[0]))var g=f[0];else switch(g={},e){case "loadVideoById":case "cueVideoById":g=cy(f[0],f[1]!==void 0?Number(f[1]):void 0,f[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":g=f[0];typeof g==="string"&&(g={mediaContentUrl:g,
startSeconds:f[1]!==void 0?Number(f[1]):void 0,suggestedQuality:f[2]});c:{if((f=g.mediaContentUrl)&&(f=/\/([ve]|embed)\/([^#?]+)/.exec(f))&&f[2]){f=f[2];break c}f=null}g.videoId=f;g=cy(g);break;case "loadPlaylist":case "cuePlaylist":g=dy(f[0],f[1],f[2],f[3])}d.length=1;d[0]=g}b.api.handleExternalCall(e,d,c);by(e)&&iy(b,fy(b))}}}};
jy.addEventListener("message",this.G);if(a=R("WIDGET_ID"))this.sessionId=a;ky(this,"onReady",function(){b.u=!0;var c=b.api.getVideoData();if(!c.isPlayable){b.Y=!0;c=c.errorCode;var d=d===void 0?5:d;b.errorCode=c?$x[c]||d:d;b.sendMessage("onError",Number(b.errorCode))}});
ky(this,"onVideoProgress",this.Ve.bind(this));ky(this,"onVolumeChange",this.We.bind(this));ky(this,"onApiChange",this.Oe.bind(this));ky(this,"onPlaybackQualityChange",this.Se.bind(this));ky(this,"onPlaybackRateChange",this.Te.bind(this));ky(this,"onStateChange",this.Ue.bind(this));ky(this,"onWebglSettingsChanged",this.Xe.bind(this));ky(this,"onCaptionsTrackListChanged",this.Pe.bind(this));ky(this,"captionssettingschanged",this.Qe.bind(this))}
w(ey,F);function iy(a,b){a.sendMessage("infoDelivery",b)}
r=ey.prototype;r.sendMessage=function(a,b){a={event:a,info:b===void 0?null:b};this.X?gy(this,a):this.A.push(a)};
function hy(a,b,c){return function(d){b==="onError"?a.api.logApiCall(b+" invocation",c,d):a.api.logApiCall(b+" invocation",c);a.sendMessage(b,d)}}
function ky(a,b,c){a.j.push({eventType:b,listener:c});a.api.addEventListener(b,c)}
function fy(a){if(!a.api)return null;var b=a.api.getApiInterface();Ub(b,"getVideoData");for(var c={apiInterface:b},d=0,e=b.length;d<e;d++){var f=b[d];if(f.search("get")===0||f.search("is")===0){var g=0;f.search("get")===0?g=3:f.search("is")===0&&(g=2);g=f.charAt(g).toLowerCase()+f.substring(g+1);try{var h=a.api[f]();c[g]=h}catch(k){}}}c.videoData=a.api.getVideoData();c.currentTimeLastUpdated_=Date.now()/1E3;return c}
r.Ue=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());iy(this,a)};
r.Se=function(a){a={playbackQuality:a};this.api.getAvailableQualityLevels&&(a.availableQualityLevels=this.api.getAvailableQualityLevels());this.api.getPreferredQuality&&(a.preferredQuality=this.api.getPreferredQuality());iy(this,a)};
r.Te=function(a){iy(this,{playbackRate:a})};
r.Oe=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);a.join(", ");b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.api.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
r.We=function(){iy(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
r.Ve=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());iy(this,a)};
r.Xe=function(){iy(this,{sphericalProperties:this.api.getSphericalProperties()})};
r.Pe=function(){if(this.api.getCaptionTracks){var a={captionTracks:this.api.getCaptionTracks()};iy(this,a)}};
r.Qe=function(){if(this.api.getSubtitlesUserSettings){var a={subtitlesUserSettings:this.api.getSubtitlesUserSettings()};iy(this,a)}};
function gy(a,b){if(a.h){b.channel="widget";a.sessionId&&(b.id=a.sessionId);try{var c=JSON.stringify(b);a.h.postMessage(c,a.targetOrigin)}catch(d){Wt(d)}}}
r.aa=function(){F.prototype.aa.call(this);jy.removeEventListener("message",this.G);for(var a=0;a<this.j.length;a++){var b=this.j[a];this.api.removeEventListener(b.eventType,b.listener)}this.j=[];for(a=0;a<this.i.length;a++)b=this.i[a],this.U?this.api.handleExternalCall("removeEventListener",[b.eventType,b.listener],b.origin):this.api.removeEventListener(b.eventType,b.listener);this.i=[]};
var jy=window;function ly(a,b,c){F.call(this);var d=this;this.api=a;this.id=b;this.origin=c;this.h={};this.j=S("web_player_split_event_bus_iframe");this.i=function(e){a:if(e.origin===d.origin){var f=e.data;if(typeof f==="string"){try{f=JSON.parse(f)}catch(k){break a}if(f.command){var g=f.command;f=f.data;e=e.origin;if(!d.da){var h=f||{};switch(g){case "addEventListener":typeof h.event==="string"&&d.addListener(h.event,e);break;case "removeEventListener":typeof h.event==="string"&&d.removeListener(h.event,e);break;
default:d.api.isReady()&&d.api.isExternalMethodAvailable(g,e||null)&&(f=my(g,f||{}),f=d.api.handleExternalCall(g,f,e||null),(f=ny(g,f))&&oy(d,g,f))}}}}}};
py.addEventListener("message",this.i);oy(this,"RECEIVING")}
w(ly,F);r=ly.prototype;r.addListener=function(a,b){if(!(a in this.h)){var c=this.Re.bind(this,a);this.h[a]=c;this.addEventListener(a,c,b)}};
r.Re=function(a,b){this.da||oy(this,a,qy(a,b))};
r.removeListener=function(a,b){a in this.h&&(this.removeEventListener(a,this.h[a],b),delete this.h[a])};
r.addEventListener=function(a,b,c){this.j?a==="onReady"?this.api.addEventListener(a,b):this.api.handleExternalCall("addEventListener",[a,b],c||null):this.api.addEventListener(a,b)};
r.removeEventListener=function(a,b,c){this.j?a==="onReady"?this.api.removeEventListener(a,b):this.api.handleExternalCall("removeEventListener",[a,b],c||null):this.api.removeEventListener(a,b)};
function my(a,b){switch(a){case "loadVideoById":return[cy(b)];case "cueVideoById":return[cy(b)];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return[dy(b)];case "cuePlaylist":return[dy(b)];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];
case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function ny(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
function qy(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}if(b!=null)return{value:b}}
function oy(a,b,c){a.da||(b={id:a.id,command:b},c&&(b.data=c),ry.postMessage(JSON.stringify(b),a.origin))}
r.aa=function(){py.removeEventListener("message",this.i);for(var a in this.h)this.h.hasOwnProperty(a)&&this.removeListener(a);F.prototype.aa.call(this)};
var py=window,ry=window.parent;var sy=new Mx;function ty(){return sy.Uc()}
function uy(a){a=a===void 0?{}:a;return sy.invoke(a)}
;function vy(a,b,c,d,e){F.call(this);var f=this;this.A=b;this.webPlayerContextConfig=d;this.xc=e;this.Oa=!1;this.api={};this.ia=this.u=null;this.U=new N;this.h={};this.Y=this.oa=this.elementId=this.Pa=this.config=null;this.X=!1;this.j=this.G=null;this.Da={};this.yc=["onReady"];this.lastError=null;this.nb=NaN;this.P={};this.ga=0;this.i=this.o=a;xc(this,this.U);wy(this);c?this.ga=setTimeout(function(){f.loadNewVideoConfig(c)},0):d&&(xy(this),yy(this))}
w(vy,F);r=vy.prototype;r.getId=function(){return this.A};
r.loadNewVideoConfig=function(a){if(!this.da){this.ga&&(clearTimeout(this.ga),this.ga=0);var b=a||{};b instanceof Mu||(b=new Mu(b));this.config=b;this.setConfig(a);yy(this);this.isReady()&&zy(this)}};
function xy(a){var b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;a.elementId==="video-player"&&(a.elementId=a.A,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.A:a.config.attrs.id=a.A);var c;((c=a.i)==null?void 0:c.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
r.setConfig=function(a){this.Pa=a;this.config=Ay(a);xy(this);if(!this.oa){var b;this.oa=By(this,((b=this.config.args)==null?void 0:b.jsapicallback)||"onYouTubePlayerReady")}this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if((c=this.config)==null?0:c.attrs)a=this.config.attrs,(b=a.width)&&this.i&&(this.i.style.width=uj(Number(b)||b)),(a=a.height)&&this.i&&(this.i.style.height=uj(Number(a)||a))};
function zy(a){if(a.config&&a.config.loaded!==!0)if(a.config.loaded=!0,!a.config.args||a.config.args.autoplay!=="0"&&a.config.args.autoplay!==0&&a.config.args.autoplay!==!1){var b;a.api.loadVideoByPlayerVars((b=a.config.args)!=null?b:null)}else a.api.cueVideoByPlayerVars(a.config.args)}
function Cy(a){var b=!0,c=Dy(a);c&&a.config&&(b=c.dataset.version===Ey(a));return b&&!!E("yt.player.Application.create")}
function yy(a){if(!a.da&&!a.X){var b=Cy(a);if(b&&(Dy(a)?"html5":null)==="html5")a.Y="html5",a.isReady()||Fy(a);else if(Gy(a),a.Y="html5",b&&a.j&&a.o)a.o.appendChild(a.j),Fy(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.G=function(){c=!0;var d=Hy(a,"player_bootstrap_method")?E("yt.player.Application.createAlternate")||E("yt.player.Application.create"):E("yt.player.Application.create");var e=a.config?Ay(a.config):void 0;d&&d(a.o,e,a.webPlayerContextConfig,a.xc);Fy(a)};
a.X=!0;b?a.G():(Wu(Ey(a),a.G),(b=Iy(a))&&cv(b||""),Jy(a)&&!c&&D("yt.player.Application.create",null))}}}
function Dy(a){var b=wg(a.elementId);!b&&a.i&&a.i.querySelector&&(b=a.i.querySelector("#"+a.elementId));return b}
function Fy(a){if(!a.da){var b=Dy(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);if(c){a.X=!1;if(!Hy(a,"html5_remove_not_servable_check_killswitch")){var d;if((b==null?0:b.isNotServable)&&a.config&&(b==null?0:b.isNotServable((d=a.config.args)==null?void 0:d.video_id)))return}Ky(a)}else a.nb=setTimeout(function(){Fy(a)},50)}}
function Ky(a){wy(a);a.Oa=!0;var b=Dy(a);if(b){a.u=Ly(a,b,"addEventListener");a.ia=Ly(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=Ly(a,b,f))}}for(var g in a.h)a.h.hasOwnProperty(g)&&a.u&&a.u(g,a.h[g]);zy(a);a.oa&&a.oa(a.api);a.U.mb("onReady",a.api)}
function Ly(a,b,c){var d=b[c];return function(){var e=B.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){if(c!=="sendAbandonmentPing")throw f.params=c,a.lastError=f,e=new T("PlayerProxy error in method call",{error:f,method:c,playerId:a.A}),e.level="WARNING",e;}}}
function wy(a){a.Oa=!1;if(a.ia)for(var b in a.h)a.h.hasOwnProperty(b)&&a.ia(b,a.h[b]);for(var c in a.P)a.P.hasOwnProperty(c)&&clearTimeout(Number(c));a.P={};a.u=null;a.ia=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.Pa};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
r.isReady=function(){return this.Oa};
r.addEventListener=function(a,b){var c=this,d=By(this,b);d&&(Ob(this.yc,a)>=0||this.h[a]||(b=My(this,a),this.u&&this.u(a,b)),this.U.subscribe(a,d),a==="onReady"&&this.isReady()&&setTimeout(function(){d(c.api)},0))};
r.removeEventListener=function(a,b){this.da||(b=By(this,b))&&this.U.unsubscribe(a,b)};
function By(a,b){var c=b;if(typeof b==="string"){if(a.Da[b])return a.Da[b];c=function(){var d=B.apply(0,arguments),e=E(b);if(e)try{e.apply(C,d)}catch(f){throw d=new T("PlayerProxy error when executing callback",{error:f}),d.level="ERROR",d;}};
a.Da[b]=c}return c?c:null}
function My(a,b){function c(d){function e(){if(!a.da)try{a.U.mb(b,d!=null?d:void 0)}catch(h){var g=new T("PlayerProxy error when creating global callback",{error:h.message,event:b,playerId:a.A,data:d,originalStack:h.stack,componentStack:h.Td});g.level="WARNING";throw g;}}
if(Hy(a,"web_player_publish_events_immediately"))e();else{var f=setTimeout(function(){e();var g=a.P,h=String(f);h in g&&delete g[h]},0);
ng(a.P,String(f))}}
return a.h[b]=c}
r.getPlayerType=function(){return this.Y||(Dy(this)?"html5":null)};
r.getLastError=function(){return this.lastError};
function Gy(a){a.cancel();wy(a);a.Y=null;a.config&&(a.config.loaded=!1);var b=Dy(a);b&&(Cy(a)||!Jy(a)?a.j=b:(b&&b.destroy&&b.destroy(),a.j=null));if(a.o)for(a=a.o;b=a.firstChild;)a.removeChild(b)}
r.cancel=function(){this.G&&$u(Ey(this),this.G);clearTimeout(this.nb);this.X=!1};
r.aa=function(){Gy(this);if(this.j&&this.config&&this.j.destroy)try{this.j.destroy()}catch(b){var a=new T("PlayerProxy error during disposal",{error:b});a.level="ERROR";throw a;}this.Da=null;for(a in this.h)this.h.hasOwnProperty(a)&&delete this.h[a];this.Pa=this.config=this.api=null;delete this.o;delete this.i;F.prototype.aa.call(this)};
function Jy(a){var b,c;a=(b=a.config)==null?void 0:(c=b.args)==null?void 0:c.fflags;return!!a&&a.indexOf("player_destroy_old_version=true")!==-1}
function Ey(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function Iy(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function Hy(a,b){if(a.webPlayerContextConfig)var c=a.webPlayerContextConfig.serializedExperimentFlags;else{var d;if((d=a.config)==null?0:d.args)c=a.config.args.fflags}return(c||"").split("&").includes(b+"=true")}
function Ay(a){for(var b={},c=z(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]=typeof e==="object"?qg(e):e}return b}
;var Ny={},Oy="player_uid_"+(Math.random()*1E9>>>0);function Py(a,b){var c="player",d=!1;d=d===void 0?!0:d;c=typeof c==="string"?wg(c):c;var e=Oy+"_"+Sa(c),f=Ny[e];if(f&&d)return Qy(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new vy(c,e,a,b,void 0);Ny[e]=f;f.addOnDisposeCallback(function(){delete Ny[f.getId()]});
return f.api}
function Qy(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var Ry=null,Sy=null;
function Ty(){Pw();var a=gn(),b=kn(119),c=window.devicePixelRatio>1;if(document.body&&Ij(document.body,"exp-invert-logo"))if(c&&!Ij(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!Ij(d,"inverted-hdpi")){var e=Gj(d);Hj(d,e+(e.length>0?" inverted-hdpi":"inverted-hdpi"))}}else!c&&Ij(document.body,"inverted-hdpi")&&Jj();if(b!=c){b="f"+(Math.floor(119/31)+1);d=ln(b)||0;d=c?d|67108864:d&-67108865;d===0?delete dn[b]:(c=d.toString(16),dn[b]=c.toString());
c=!0;S("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(f in dn)dn.hasOwnProperty(f)&&d.push(f+"="+encodeURIComponent(String(dn[f])));var f=d.join("&");$m(b,f,63072E3,a.i,c)}}
function Uy(){Vy()}
function Wy(){Ow("ep_init_pr");Vy()}
function Vy(){var a=Ry.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function Xy(){Ry&&Ry.sendAbandonmentPing&&Ry.sendAbandonmentPing();R("PL_ATT")&&sy.dispose();for(var a=Aj,b=0,c=Hx.length;b<c;b++)a.qa(Hx[b]);Hx.length=0;Yu("//static.doubleclick.net/instream/ad_status.js");Ix=!1;Ql("DCLKSTAT",0);wc(Sy);Ry&&(Ry.removeEventListener("onVideoDataChange",Uy),Ry.destroy())}
;Ow("ep_init_eps");D("yt.setConfig",Ql);D("yt.config.set",Ql);D("yt.setMsg",Vu);D("yt.msgs.set",Vu);D("yt.logging.errors.log",Vt);
D("writeEmbed",function(){Ow("ep_init_wes");var a=R("PLAYER_CONFIG");if(!a){var b=R("PLAYER_VARS");b&&(a={args:b})}Gv(!0);a.args.ps==="gvn"&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=R("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);Kw("embed",["ol"]);c=rx();if(!c.serializedForcedExperimentIds){var d=dm(window.location.href);d.forced_experiments&&(c.serializedForcedExperimentIds=
d.forced_experiments)}var e;((e=a.args)==null?0:e.autoplay)&&Kw("watch",["pbs","pbu","pbp"]);Ry=Py(a,c);Ry.addEventListener("onVideoDataChange",Uy);Ry.addEventListener("onReady",Wy);a=R("POST_MESSAGE_ID","player");R("ENABLE_JS_API")?Sy=new ey(Ry):R("ENABLE_POST_API")&&typeof a==="string"&&typeof b==="string"&&(Sy=new ly(Ry,a,b));Jx();S("ytidb_create_logger_embed_killswitch")||go();a={};Sx.h||(Sx.h=new Sx);Sx.h.install((a.flush_logs={callback:function(){At()}},a));
Tr();S("ytidb_clear_embedded_player")&&Aj.pa(function(){var f,g;if(!px){var h=Es();As(h,{qc:ox,Cd:mx});var k={bd:{feedbackEndpoint:Tv(ex),modifyChannelNotificationPreferenceEndpoint:Tv(fx),playlistEditEndpoint:Tv(gx),shareEntityEndpoint:Tv(dx),subscribeEndpoint:Tv(ax),unsubscribeEndpoint:Tv(bx),webPlayerShareEntityServiceEndpoint:Tv(hx)}},l=Pv(),m={};l&&(m.client_location=l);f===void 0&&(f=Xm());g===void 0&&(g=h.resolve(ox));Uw(k,g,f,m);As(h,{qc:$w,Dd:Tw.h});px=h.resolve($w)}Dx()});
Ow("ep_init_wee")});
D("yt.abuse.player.botguardInitialized",E("yt.abuse.player.botguardInitialized")||ty);D("yt.abuse.player.invokeBotguard",E("yt.abuse.player.invokeBotguard")||uy);D("yt.abuse.dclkstatus.checkDclkStatus",E("yt.abuse.dclkstatus.checkDclkStatus")||Kx);D("yt.player.exports.navigate",E("yt.player.exports.navigate")||Fv);D("yt.util.activity.init",E("yt.util.activity.init")||hs);D("yt.util.activity.getTimeSinceActive",E("yt.util.activity.getTimeSinceActive")||ks);
D("yt.util.activity.setTimestamp",E("yt.util.activity.setTimestamp")||is);window.addEventListener("load",Ul(function(){Ty()}));
window.addEventListener("pageshow",Ul(function(a){a.persisted||Ty()}));
window.addEventListener("pagehide",Ul(function(a){S("embeds_web_enable_dispose_player_if_page_not_cached_killswitch")?Xy():a.persisted||Xy()}));
window.onerror=function(a,b,c,d,e){var f;b=b===void 0?"Unknown file":b;c=c===void 0?0:c;var g=!1,h=Rl("log_window_onerror_fraction");if(h&&Math.random()<h)g=!0;else{h=document.getElementsByTagName("script");for(var k=0,l=h.length;k<l;k++)if(h[k].src.indexOf("/debug-")>0){g=!0;break}}if(g){g=!1;e?g=!0:(typeof a==="string"?h=a:ErrorEvent&&a instanceof ErrorEvent?(g=!0,h=a.message,b=a.filename,c=a.lineno,d=a.colno):(h="Unknown error",b="Unknown file",c=0),e=new T(h),e.name="UnhandledWindowError",e.message=
h,e.fileName=b,e.lineNumber=c,isNaN(d)?delete e.columnNumber:e.columnNumber=d);if(!S("wiz_enable_component_stack_propagation_killswitch")){a=e;var m;if((m=f)==null||!m.componentStack)if(m=a.Td)f||(f={}),f.componentStack=Ot(m)}f&&Zt(e,f);g?Vt(e):Wt(e)}};
zi=Xt;window.addEventListener("unhandledrejection",function(a){Xt(a.reason)});
Pb(R("ERRORS")||[],function(a){Vt.apply(null,a)});
Ql("ERRORS",[]);Ow("ep_init_epe");}).call(this);
