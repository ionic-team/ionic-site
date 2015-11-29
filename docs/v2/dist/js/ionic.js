/*!
  * https://github.com/paulmillr/es6-shim
  * @license es6-shim Copyright 2013-2015 by Paul Miller (http://paulmillr.com)
  *   and contributors,  MIT License
  * es6-shim: v0.33.6
  * see https://github.com/paulmillr/es6-shim/blob/0.33.3/LICENSE
  * Details and documentation:
  * https://github.com/paulmillr/es6-shim/
  */
(function(e,t){if(typeof define==="function"&&define.amd){define(t)}else if(typeof exports==="object"){module.exports=t()}else{e.returnExports=t()}})(this,function(){"use strict";var e=Function.call.bind(Function.apply);var t=Function.call.bind(Function.call);var r=Array.isArray;var n=function notThunker(t){return function notThunk(){return!e(t,this,arguments)}};var o=function(e){try{e();return false}catch(t){return true}};var i=function valueOrFalseIfThrows(e){try{return e()}catch(t){return false}};var a=n(o);var u=function(){return!o(function(){Object.defineProperty({},"x",{get:function(){}})})};var s=!!Object.defineProperty&&u();var f=function foo(){}.name==="foo";var c=Function.call.bind(Array.prototype.forEach);var l=Function.call.bind(Array.prototype.reduce);var p=Function.call.bind(Array.prototype.filter);var v=Function.call.bind(Array.prototype.every);var y=function createDataProperty(e,t,r){if(s){Object.defineProperty(e,t,{configurable:true,enumerable:true,writable:true,value:r})}else{e[t]=r}};var h=function createDataPropertyOrThrow(e,t,r){y(e,t,r);if(!oe.SameValue(e[t],r)){throw new TypeError("property is nonconfigurable")}};var g=function(e,t,r,n){if(!n&&t in e){return}if(s){Object.defineProperty(e,t,{configurable:true,enumerable:false,writable:true,value:r})}else{e[t]=r}};var b=function(e,t){c(Object.keys(t),function(r){var n=t[r];g(e,r,n,false)})};var d=Object.create||function(e,t){var r=function Prototype(){};r.prototype=e;var n=new r;if(typeof t!=="undefined"){Object.keys(t).forEach(function(e){V.defineByDescriptor(n,e,t[e])})}return n};var m=function(e,t){if(!Object.setPrototypeOf){return false}return i(function(){var r=function Subclass(t){var r=new e(t);Object.setPrototypeOf(r,Subclass.prototype);return r};Object.setPrototypeOf(r,e);r.prototype=d(e.prototype,{constructor:{value:r}});return t(r)})};var O=function(){return String.prototype.startsWith&&o(function(){"/a/".startsWith(/a/)})};var w=function(){return String.prototype.startsWith&&"abc".startsWith("a",Infinity)===false}();var j=function(){if(typeof self!=="undefined"){return self}if(typeof window!=="undefined"){return window}if(typeof global!=="undefined"){return global}throw new Error("unable to locate global object")};var S=j();var T=S.isFinite;var I=function(){return this===null}.call(null);var E=O()&&w;var M=Function.call.bind(String.prototype.indexOf);var P=Function.call.bind(Object.prototype.toString);var x=Function.call.bind(Array.prototype.concat);var N=Function.call.bind(String.prototype.slice);var C=Function.call.bind(Array.prototype.push);var A=Function.apply.bind(Array.prototype.push);var _=Function.call.bind(Array.prototype.shift);var k=Math.max;var R=Math.min;var F=Math.floor;var D=Math.abs;var z=Math.log;var L=Math.sqrt;var q=Function.call.bind(Object.prototype.hasOwnProperty);var G;var W=function(){};var H=S.Symbol||{};var B=H.species||"@@species";var V={getter:function(e,t,r){if(!s){throw new TypeError("getters require true ES5 support")}Object.defineProperty(e,t,{configurable:true,enumerable:false,get:r})},proxy:function(e,t,r){if(!s){throw new TypeError("getters require true ES5 support")}var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,{configurable:n.configurable,enumerable:n.enumerable,get:function getKey(){return e[t]},set:function setKey(r){e[t]=r}})},redefine:function(e,t,r){if(s){var n=Object.getOwnPropertyDescriptor(e,t);n.value=r;Object.defineProperty(e,t,n)}else{e[t]=r}},defineByDescriptor:function(e,t,r){if(s){Object.defineProperty(e,t,r)}else if("value"in r){e[t]=r.value}},preserveToString:function(e,t){g(e,"toString",t.toString.bind(t),true)}};var $=function wrapConstructor(e,t,r){V.preserveToString(t,e);if(Object.setPrototypeOf){Object.setPrototypeOf(e,t)}c(Object.getOwnPropertyNames(e),function(n){if(n in W||r[n]){return}V.proxy(e,n,t)});t.prototype=e.prototype;V.redefine(e.prototype,"constructor",t)};var J=function(){return this};var U=function(e){if(s&&!q(e,B)){V.getter(e,B,J)}};var K={primitive:function(e){return e===null||typeof e!=="function"&&typeof e!=="object"},object:function(e){return e!==null&&typeof e==="object"},string:function(e){return P(e)==="[object String]"},regex:function(e){return P(e)==="[object RegExp]"},symbol:function(e){return typeof S.Symbol==="function"&&typeof e==="symbol"}};var X=Number.isNaN||function isNaN(e){return e!==e};var Z=Number.isFinite||function isFinite(e){return typeof e==="number"&&T(e)};var Q=function overrideNative(e,t,r){var n=e[t];g(e,t,r,true);V.preserveToString(e[t],n)};var Y=K.symbol(H.iterator)?H.iterator:"_es6-shim iterator_";if(S.Set&&typeof(new S.Set)["@@iterator"]==="function"){Y="@@iterator"}var ee=function(e,t){var r=t||function iterator(){return this};g(e,Y,r);if(!e[Y]&&K.symbol(Y)){e[Y]=r}};var te=function isArguments(e){return P(e)==="[object Arguments]"};var re=function isArguments(e){return e!==null&&typeof e==="object"&&typeof e.length==="number"&&e.length>=0&&P(e)!=="[object Array]"&&P(e.callee)==="[object Function]"};var ne=te(arguments)?te:re;var oe={Call:function Call(t,r){var n=arguments.length>2?arguments[2]:[];if(!oe.IsCallable(t)){throw new TypeError(t+" is not a function")}return e(t,r,n)},RequireObjectCoercible:function(e,t){if(e==null){throw new TypeError(t||"Cannot call method on "+e)}},TypeIsObject:function(e){return e!=null&&Object(e)===e},ToObject:function(e,t){oe.RequireObjectCoercible(e,t);return Object(e)},IsCallable:function(e){return typeof e==="function"&&P(e)==="[object Function]"},IsConstructor:function(e){return oe.IsCallable(e)},ToInt32:function(e){return oe.ToNumber(e)>>0},ToUint32:function(e){return oe.ToNumber(e)>>>0},ToNumber:function(e){if(P(e)==="[object Symbol]"){throw new TypeError("Cannot convert a Symbol value to a number")}return+e},ToInteger:function(e){var t=oe.ToNumber(e);if(X(t)){return 0}if(t===0||!Z(t)){return t}return(t>0?1:-1)*F(D(t))},ToLength:function(e){var t=oe.ToInteger(e);if(t<=0){return 0}if(t>Number.MAX_SAFE_INTEGER){return Number.MAX_SAFE_INTEGER}return t},SameValue:function(e,t){if(e===t){if(e===0){return 1/e===1/t}return true}return X(e)&&X(t)},SameValueZero:function(e,t){return e===t||X(e)&&X(t)},IsIterable:function(e){return oe.TypeIsObject(e)&&(typeof e[Y]!=="undefined"||ne(e))},GetIterator:function(e){if(ne(e)){return new G(e,"value")}var r=oe.GetMethod(e,Y);if(!oe.IsCallable(r)){throw new TypeError("value is not an iterable")}var n=t(r,e);if(!oe.TypeIsObject(n)){throw new TypeError("bad iterator")}return n},GetMethod:function(e,t){var r=oe.ToObject(e)[t];if(r===void 0||r===null){return void 0}if(!oe.IsCallable(r)){throw new TypeError("Method not callable: "+t)}return r},IteratorComplete:function(e){return!!e.done},IteratorClose:function(e,r){var n=oe.GetMethod(e,"return");if(n===void 0){return}var o,i;try{o=t(n,e)}catch(a){i=a}if(r){return}if(i){throw i}if(!oe.TypeIsObject(o)){throw new TypeError("Iterator's return method returned a non-object.")}},IteratorNext:function(e){var t=arguments.length>1?e.next(arguments[1]):e.next();if(!oe.TypeIsObject(t)){throw new TypeError("bad iterator")}return t},IteratorStep:function(e){var t=oe.IteratorNext(e);var r=oe.IteratorComplete(t);return r?false:t},Construct:function(e,t,r,n){if(r===void 0){r=e}if(!n){return dr.construct(e,t,r)}var o=r.prototype;if(!oe.TypeIsObject(o)){o=Object.prototype}var i=d(o);var a=oe.Call(e,i,t);return oe.TypeIsObject(a)?a:i},SpeciesConstructor:function(e,t){var r=e.constructor;if(r===void 0){return t}if(!oe.TypeIsObject(r)){throw new TypeError("Bad constructor")}var n=r[B];if(n===void 0||n===null){return t}if(!oe.IsConstructor(n)){throw new TypeError("Bad @@species")}return n},CreateHTML:function(e,t,r,n){var o=String(e);var i="<"+t;if(r!==""){var a=String(n);var u=a.replace(/"/g,"&quot;");i+=" "+r+'="'+u+'"'}var s=i+">";var f=s+o;return f+"</"+t+">"}};var ie=function(e,t,r,n){if(!oe.TypeIsObject(e)){throw new TypeError("Constructor requires `new`: "+t.name)}var o=t.prototype;if(!oe.TypeIsObject(o)){o=r}e=d(o);for(var i in n){if(q(n,i)){var a=n[i];g(e,i,a,true)}}return e};if(String.fromCodePoint&&String.fromCodePoint.length!==1){var ae=String.fromCodePoint;Q(String,"fromCodePoint",function fromCodePoint(t){return e(ae,this,arguments)})}var ue={fromCodePoint:function fromCodePoint(e){var t=[];var r;for(var n=0,o=arguments.length;n<o;n++){r=Number(arguments[n]);if(!oe.SameValue(r,oe.ToInteger(r))||r<0||r>1114111){throw new RangeError("Invalid code point "+r)}if(r<65536){C(t,String.fromCharCode(r))}else{r-=65536;C(t,String.fromCharCode((r>>10)+55296));C(t,String.fromCharCode(r%1024+56320))}}return t.join("")},raw:function raw(e){var t=oe.ToObject(e,"bad callSite");var r=oe.ToObject(t.raw,"bad raw value");var n=r.length;var o=oe.ToLength(n);if(o<=0){return""}var i=[];var a=0;var u,s,f,c;while(a<o){u=String(a);f=String(r[u]);C(i,f);if(a+1>=o){break}s=a+1<arguments.length?arguments[a+1]:"";c=String(s);C(i,c);a++}return i.join("")}};b(String,ue);if(String.raw({raw:{0:"x",1:"y",length:2}})!=="xy"){Q(String,"raw",ue.raw)}var se=function repeat(e,t){if(t<1){return""}if(t%2){return repeat(e,t-1)+e}var r=repeat(e,t/2);return r+r};var fe=Infinity;var ce={repeat:function repeat(e){oe.RequireObjectCoercible(this);var t=String(this);var r=oe.ToInteger(e);if(r<0||r>=fe){throw new RangeError("repeat count must be less than infinity and not overflow maximum string size")}return se(t,r)},startsWith:function startsWith(e){oe.RequireObjectCoercible(this);var t=String(this);if(K.regex(e)){throw new TypeError('Cannot call method "startsWith" with a regex')}var r=String(e);var n=arguments.length>1?arguments[1]:void 0;var o=k(oe.ToInteger(n),0);return N(t,o,o+r.length)===r},endsWith:function endsWith(e){oe.RequireObjectCoercible(this);var t=String(this);if(K.regex(e)){throw new TypeError('Cannot call method "endsWith" with a regex')}var r=String(e);var n=t.length;var o=arguments.length>1?arguments[1]:void 0;var i=typeof o==="undefined"?n:oe.ToInteger(o);var a=R(k(i,0),n);return N(t,a-r.length,a)===r},includes:function includes(e){if(K.regex(e)){throw new TypeError('"includes" does not accept a RegExp')}var t;if(arguments.length>1){t=arguments[1]}return M(this,e,t)!==-1},codePointAt:function codePointAt(e){oe.RequireObjectCoercible(this);var t=String(this);var r=oe.ToInteger(e);var n=t.length;if(r>=0&&r<n){var o=t.charCodeAt(r);var i=r+1===n;if(o<55296||o>56319||i){return o}var a=t.charCodeAt(r+1);if(a<56320||a>57343){return o}return(o-55296)*1024+(a-56320)+65536}}};b(String.prototype,ce);if("a".includes("a",Infinity)!==false){Q(String.prototype,"includes",ce.includes)}var le="\x85".trim().length!==1;if(le){delete String.prototype.trim;var pe=["	\n\f\r \xa0\u1680\u180e\u2000\u2001\u2002\u2003","\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028","\u2029\ufeff"].join("");var ve=new RegExp("(^["+pe+"]+)|(["+pe+"]+$)","g");b(String.prototype,{trim:function trim(){if(typeof this==="undefined"||this===null){throw new TypeError("can't convert "+this+" to object")}return String(this).replace(ve,"")}})}var ye=function(e){oe.RequireObjectCoercible(e);this._s=String(e);this._i=0};ye.prototype.next=function(){var e=this._s,t=this._i;if(typeof e==="undefined"||t>=e.length){this._s=void 0;return{value:void 0,done:true}}var r=e.charCodeAt(t),n,o;if(r<55296||r>56319||t+1===e.length){o=1}else{n=e.charCodeAt(t+1);o=n<56320||n>57343?1:2}this._i=t+o;return{value:e.substr(t,o),done:false}};ee(ye.prototype);ee(String.prototype,function(){return new ye(this)});if(!E){Q(String.prototype,"startsWith",ce.startsWith);Q(String.prototype,"endsWith",ce.endsWith)}var he={from:function from(e){var r=this;var n=arguments.length>1?arguments[1]:void 0;var o,i;if(n===void 0){o=false}else{if(!oe.IsCallable(n)){throw new TypeError("Array.from: when provided, the second argument must be a function")}i=arguments.length>2?arguments[2]:void 0;o=true}var a=ne(e)||oe.GetMethod(e,Y);var u,s,f;if(a!==void 0){s=oe.IsConstructor(r)?Object(new r):[];var c=oe.GetIterator(e);var l,p;f=0;while(true){l=oe.IteratorStep(c);if(l===false){break}p=l.value;try{if(o){p=i!==undefined?t(n,i,p,f):n(p,f)}s[f]=p}catch(v){oe.IteratorClose(c,true);throw v}f+=1}u=f}else{var y=oe.ToObject(e);u=oe.ToLength(y.length);s=oe.IsConstructor(r)?Object(new r(u)):new Array(u);var h;for(f=0;f<u;++f){h=y[f];if(o){h=i!==undefined?t(n,i,h,f):n(h,f)}s[f]=h}}s.length=u;return s},of:function of(){var e=arguments.length;var t=this;var n=r(t)||!oe.IsCallable(t)?new Array(e):oe.Construct(t,[e]);for(var o=0;o<e;++o){h(n,o,arguments[o])}n.length=e;return n}};b(Array,he);U(Array);var ge=function(e){return{value:e,done:arguments.length===0}};G=function(e,t){this.i=0;this.array=e;this.kind=t};b(G.prototype,{next:function(){var e=this.i,t=this.array;if(!(this instanceof G)){throw new TypeError("Not an ArrayIterator")}if(typeof t!=="undefined"){var r=oe.ToLength(t.length);for(;e<r;e++){var n=this.kind;var o;if(n==="key"){o=e}else if(n==="value"){o=t[e]}else if(n==="entry"){o=[e,t[e]]}this.i=e+1;return{value:o,done:false}}}this.array=void 0;return{value:void 0,done:true}}});ee(G.prototype);var be=function(e,t){b(this,{object:e,array:de(e),kind:t})};var de=function getAllKeys(e){var t=[];for(var r in e){C(t,r)}return t};b(be.prototype,{next:function next(){var e;var t=this.array;if(!(this instanceof be)){throw new TypeError("Not an ObjectIterator")}while(t.length>0){e=_(t);if(!(e in this.object)){continue}if(this.kind==="key"){return ge(e)}else if(this.kind==="value"){return ge(this.object[e])}else{return ge([e,this.object[e]])}}return ge()}});ee(be.prototype);var me=Array.of===he.of||function(){var e=function Foo(e){this.length=e};e.prototype=[];var t=Array.of.apply(e,[1,2]);return t instanceof e&&t.length===2}();if(!me){Q(Array,"of",he.of)}var Oe={copyWithin:function copyWithin(e,t){var r=arguments[2];var n=oe.ToObject(this);var o=oe.ToLength(n.length);var i=oe.ToInteger(e);var a=oe.ToInteger(t);var u=i<0?k(o+i,0):R(i,o);var s=a<0?k(o+a,0):R(a,o);r=typeof r==="undefined"?o:oe.ToInteger(r);var f=r<0?k(o+r,0):R(r,o);var c=R(f-s,o-u);var l=1;if(s<u&&u<s+c){l=-1;s+=c-1;u+=c-1}while(c>0){if(q(n,s)){n[u]=n[s]}else{delete n[s]}s+=l;u+=l;c-=1}return n},fill:function fill(e){var t=arguments.length>1?arguments[1]:void 0;var r=arguments.length>2?arguments[2]:void 0;var n=oe.ToObject(this);var o=oe.ToLength(n.length);t=oe.ToInteger(typeof t==="undefined"?0:t);r=oe.ToInteger(typeof r==="undefined"?o:r);var i=t<0?k(o+t,0):R(t,o);var a=r<0?o+r:r;for(var u=i;u<o&&u<a;++u){n[u]=e}return n},find:function find(e){var r=oe.ToObject(this);var n=oe.ToLength(r.length);if(!oe.IsCallable(e)){throw new TypeError("Array#find: predicate must be a function")}var o=arguments.length>1?arguments[1]:null;for(var i=0,a;i<n;i++){a=r[i];if(o){if(t(e,o,a,i,r)){return a}}else if(e(a,i,r)){return a}}},findIndex:function findIndex(e){var r=oe.ToObject(this);var n=oe.ToLength(r.length);if(!oe.IsCallable(e)){throw new TypeError("Array#findIndex: predicate must be a function")}var o=arguments.length>1?arguments[1]:null;for(var i=0;i<n;i++){if(o){if(t(e,o,r[i],i,r)){return i}}else if(e(r[i],i,r)){return i}}return-1},keys:function keys(){return new G(this,"key")},values:function values(){return new G(this,"value")},entries:function entries(){return new G(this,"entry")}};if(Array.prototype.keys&&!oe.IsCallable([1].keys().next)){delete Array.prototype.keys}if(Array.prototype.entries&&!oe.IsCallable([1].entries().next)){delete Array.prototype.entries}if(Array.prototype.keys&&Array.prototype.entries&&!Array.prototype.values&&Array.prototype[Y]){b(Array.prototype,{values:Array.prototype[Y]});if(K.symbol(H.unscopables)){Array.prototype[H.unscopables].values=true}}if(f&&Array.prototype.values&&Array.prototype.values.name!=="values"){var we=Array.prototype.values;Q(Array.prototype,"values",function values(){return t(we,this)});g(Array.prototype,Y,Array.prototype.values,true)}b(Array.prototype,Oe);ee(Array.prototype,function(){return this.values()});if(Object.getPrototypeOf){ee(Object.getPrototypeOf([].values()))}var je=function(){return i(function(){return Array.from({length:-1}).length===0})}();var Se=function(){var e=Array.from([0].entries());return e.length===1&&r(e[0])&&e[0][0]===0&&e[0][1]===0}();if(!je||!Se){Q(Array,"from",he.from)}var Te=function(){return i(function(){return Array.from([0],undefined)})}();if(!Te){var Ie=Array.from;Q(Array,"from",function from(r){if(arguments.length>0&&typeof arguments[1]!=="undefined"){return e(Ie,this,arguments)}else{return t(Ie,this,r)}})}var Ee=function(e,r){var n={length:-1};n[r?(-1>>>0)-1:0]=true;return i(function(){t(e,n,function(){throw new RangeError("should not reach here")},[])})};if(!Ee(Array.prototype.forEach)){var Me=Array.prototype.forEach;Q(Array.prototype,"forEach",function forEach(t){return e(Me,this.length>=0?this:[],arguments)},true)}if(!Ee(Array.prototype.map)){var Pe=Array.prototype.map;Q(Array.prototype,"map",function map(t){return e(Pe,this.length>=0?this:[],arguments)},true)}if(!Ee(Array.prototype.filter)){var xe=Array.prototype.filter;Q(Array.prototype,"filter",function filter(t){return e(xe,this.length>=0?this:[],arguments)},true)}if(!Ee(Array.prototype.some)){var Ne=Array.prototype.some;Q(Array.prototype,"some",function some(t){return e(Ne,this.length>=0?this:[],arguments)},true)}if(!Ee(Array.prototype.every)){var Ce=Array.prototype.every;Q(Array.prototype,"every",function every(t){return e(Ce,this.length>=0?this:[],arguments)},true)}if(!Ee(Array.prototype.reduce)){var Ae=Array.prototype.reduce;Q(Array.prototype,"reduce",function reduce(t){return e(Ae,this.length>=0?this:[],arguments)},true)}if(!Ee(Array.prototype.reduceRight,true)){var _e=Array.prototype.reduceRight;Q(Array.prototype,"reduceRight",function reduceRight(t){return e(_e,this.length>=0?this:[],arguments)},true)}if(Number("0o10")!==8||Number("0b10")!==2){var ke=Number;var Re=/^0b/i;var Fe=/^0o/i;var De=Re.test.bind(Re);var ze=Fe.test.bind(Fe);var Le=function(e){var t;if(typeof e.valueOf==="function"){t=e.valueOf();if(K.primitive(t)){return t}}if(typeof e.toString==="function"){t=e.toString();if(K.primitive(t)){return t}}throw new TypeError("No default value")};var qe=function(){return function Number(e){var t=K.primitive(e)?e:Le(e,"number");if(typeof t==="string"){if(De(t)){t=parseInt(N(t,2),2)}else if(ze(t)){t=parseInt(N(t,2),8)}}if(this instanceof Number){return new ke(t)}return ke(t)}}();$(ke,qe,{});Number=qe;V.redefine(S,"Number",qe)}var Ge=Math.pow(2,53)-1;b(Number,{MAX_SAFE_INTEGER:Ge,MIN_SAFE_INTEGER:-Ge,EPSILON:2.220446049250313e-16,parseInt:S.parseInt,parseFloat:S.parseFloat,isFinite:Z,isInteger:function isInteger(e){return Z(e)&&oe.ToInteger(e)===e},isSafeInteger:function isSafeInteger(e){return Number.isInteger(e)&&D(e)<=Number.MAX_SAFE_INTEGER},isNaN:X});g(Number,"parseInt",S.parseInt,Number.parseInt!==S.parseInt);if(![,1].find(function(e,t){return t===0})){Q(Array.prototype,"find",Oe.find)}if([,1].findIndex(function(e,t){return t===0})!==0){Q(Array.prototype,"findIndex",Oe.findIndex)}var We=Function.bind.call(Function.bind,Object.prototype.propertyIsEnumerable);var He=function sliceArgs(){var e=Number(this);var t=arguments.length;var r=t-e;var n=new Array(r<0?0:r);for(var o=e;o<t;++o){n[o-e]=arguments[o]}return n};var Be=function assignTo(e){return function assignToSource(t,r){t[r]=e[r];return t}};var Ve=function(e,t){var r=Object.keys(Object(t));var n;if(oe.IsCallable(Object.getOwnPropertySymbols)){n=p(Object.getOwnPropertySymbols(Object(t)),We(t))}return l(x(r,n||[]),Be(t),e)};var $e={assign:function(t,r){var n=oe.ToObject(t,"Cannot convert undefined or null to object");return l(e(He,1,arguments),Ve,n)},is:function is(e,t){return oe.SameValue(e,t)}};var Je=Object.assign&&Object.preventExtensions&&function(){var e=Object.preventExtensions({1:2});try{Object.assign(e,"xy")}catch(t){return e[1]==="y"}}();if(Je){Q(Object,"assign",$e.assign)}b(Object,$e);if(s){var Ue={setPrototypeOf:function(e,r){var n;var o=function(e,t){if(!oe.TypeIsObject(e)){throw new TypeError("cannot set prototype on a non-object")}if(!(t===null||oe.TypeIsObject(t))){throw new TypeError("can only set prototype to an object or null"+t)}};var i=function(e,r){o(e,r);t(n,e,r);return e};try{n=e.getOwnPropertyDescriptor(e.prototype,r).set;t(n,{},null)}catch(a){if(e.prototype!=={}[r]){return}n=function(e){this[r]=e};i.polyfill=i(i({},null),e.prototype)instanceof e}return i}(Object,"__proto__")};b(Object,Ue)}if(Object.setPrototypeOf&&Object.getPrototypeOf&&Object.getPrototypeOf(Object.setPrototypeOf({},null))!==null&&Object.getPrototypeOf(Object.create(null))===null){(function(){var e=Object.create(null);var t=Object.getPrototypeOf,r=Object.setPrototypeOf;Object.getPrototypeOf=function(r){var n=t(r);return n===e?null:n};Object.setPrototypeOf=function(t,n){var o=n===null?e:n;return r(t,o)};Object.setPrototypeOf.polyfill=false})()}var Ke=!o(function(){Object.keys("foo")});if(!Ke){var Xe=Object.keys;Q(Object,"keys",function keys(e){return Xe(oe.ToObject(e))})}if(Object.getOwnPropertyNames){var Ze=!o(function(){Object.getOwnPropertyNames("foo")});if(!Ze){var Qe=typeof window==="object"?Object.getOwnPropertyNames(window):[];var Ye=Object.getOwnPropertyNames;Q(Object,"getOwnPropertyNames",function getOwnPropertyNames(e){var t=oe.ToObject(e);if(P(t)==="[object Window]"){try{return Ye(t)}catch(r){return x([],Qe)}}return Ye(t)})}}if(Object.getOwnPropertyDescriptor){var et=!o(function(){Object.getOwnPropertyDescriptor("foo","bar")});if(!et){var tt=Object.getOwnPropertyDescriptor;Q(Object,"getOwnPropertyDescriptor",function getOwnPropertyDescriptor(e,t){return tt(oe.ToObject(e),t)})}}if(Object.seal){var rt=!o(function(){Object.seal("foo")});if(!rt){var nt=Object.seal;Q(Object,"seal",function seal(e){if(!K.object(e)){return e}return nt(e)})}}if(Object.isSealed){var ot=!o(function(){Object.isSealed("foo")});if(!ot){var it=Object.isSealed;Q(Object,"isSealed",function isSealed(e){if(!K.object(e)){return true}return it(e)})}}if(Object.freeze){var at=!o(function(){Object.freeze("foo")});if(!at){var ut=Object.freeze;Q(Object,"freeze",function freeze(e){if(!K.object(e)){return e}return ut(e)})}}if(Object.isFrozen){var st=!o(function(){Object.isFrozen("foo")});if(!st){var ft=Object.isFrozen;Q(Object,"isFrozen",function isFrozen(e){if(!K.object(e)){return true}return ft(e)})}}if(Object.preventExtensions){var ct=!o(function(){Object.preventExtensions("foo")});if(!ct){var lt=Object.preventExtensions;Q(Object,"preventExtensions",function preventExtensions(e){if(!K.object(e)){return e}return lt(e)})}}if(Object.isExtensible){var pt=!o(function(){Object.isExtensible("foo")});if(!pt){var vt=Object.isExtensible;Q(Object,"isExtensible",function isExtensible(e){if(!K.object(e)){return false}return vt(e)})}}if(Object.getPrototypeOf){var yt=!o(function(){Object.getPrototypeOf("foo")});if(!yt){var ht=Object.getPrototypeOf;Q(Object,"getPrototypeOf",function getPrototypeOf(e){return ht(oe.ToObject(e))})}}if(!RegExp.prototype.flags&&s){var gt=function flags(){if(!oe.TypeIsObject(this)){throw new TypeError("Method called on incompatible type: must be an object.")}var e="";if(this.global){e+="g"}if(this.ignoreCase){e+="i"}if(this.multiline){e+="m"}if(this.unicode){e+="u"}if(this.sticky){e+="y"}return e};V.getter(RegExp.prototype,"flags",gt)}var bt=i(function(){return String(new RegExp(/a/g,"i"))==="/a/i"});if(!bt&&s){var dt=RegExp;var mt=function RegExp(e,t){var r=this instanceof RegExp;if(!r&&(K.regex(e)||e&&e.constructor===RegExp)){return e}if(K.regex(e)&&K.string(t)){return new RegExp(e.source,t)}return new dt(e,t)};$(dt,mt,{$input:true});RegExp=mt;V.redefine(S,"RegExp",mt)}if(s){var Ot={input:"$_",lastMatch:"$&",lastParen:"$+",leftContext:"$`",rightContext:"$'"};c(Object.keys(Ot),function(e){if(e in RegExp&&!(Ot[e]in RegExp)){V.getter(RegExp,Ot[e],function get(){return RegExp[e]})}})}U(RegExp);var wt=1/Number.EPSILON;var jt=function roundTiesToEven(e){return e+wt-wt};var St=Math.pow(2,-23);var Tt=Math.pow(2,127)*(2-St);var It=Math.pow(2,-126);var Et=Number.prototype.clz;delete Number.prototype.clz;var Mt={acosh:function acosh(e){var t=Number(e);if(Number.isNaN(t)||e<1){return NaN}if(t===1){return 0}if(t===Infinity){return t}return z(t/Math.E+L(t+1)*L(t-1)/Math.E)+1},asinh:function asinh(e){var t=Number(e);if(t===0||!T(t)){return t}return t<0?-Math.asinh(-t):z(t+L(t*t+1))},atanh:function atanh(e){var t=Number(e);if(Number.isNaN(t)||t<-1||t>1){return NaN}if(t===-1){return-Infinity}if(t===1){return Infinity}if(t===0){return t}return.5*z((1+t)/(1-t))},cbrt:function cbrt(e){var t=Number(e);if(t===0){return t}var r=t<0,n;if(r){t=-t}if(t===Infinity){n=Infinity}else{n=Math.exp(z(t)/3);n=(t/(n*n)+2*n)/3}return r?-n:n},clz32:function clz32(e){var r=Number(e);var n=oe.ToUint32(r);if(n===0){return 32}return Et?t(Et,n):31-F(z(n+.5)*Math.LOG2E)},cosh:function cosh(e){var t=Number(e);if(t===0){return 1}if(Number.isNaN(t)){return NaN}if(!T(t)){return Infinity}if(t<0){t=-t}if(t>21){return Math.exp(t)/2}return(Math.exp(t)+Math.exp(-t))/2},expm1:function expm1(e){var t=Number(e);if(t===-Infinity){return-1}if(!T(t)||t===0){return t}if(D(t)>.5){return Math.exp(t)-1}var r=t;var n=0;var o=1;while(n+r!==n){n+=r;o+=1;r*=t/o}return n},hypot:function hypot(e,t){var r=0;var n=0;for(var o=0;o<arguments.length;++o){var i=D(Number(arguments[o]));if(n<i){r*=n/i*(n/i);r+=1;n=i}else{r+=i>0?i/n*(i/n):i}}return n===Infinity?Infinity:n*L(r)},log2:function log2(e){return z(e)*Math.LOG2E},log10:function log10(e){return z(e)*Math.LOG10E},log1p:function log1p(e){var t=Number(e);if(t<-1||Number.isNaN(t)){return NaN}if(t===0||t===Infinity){return t}if(t===-1){return-Infinity}return 1+t-1===0?t:t*(z(1+t)/(1+t-1))},sign:function sign(e){var t=Number(e);if(t===0){return t}if(Number.isNaN(t)){return t}return t<0?-1:1},sinh:function sinh(e){var t=Number(e);if(!T(t)||t===0){return t}if(D(t)<1){return(Math.expm1(t)-Math.expm1(-t))/2}return(Math.exp(t-1)-Math.exp(-t-1))*Math.E/2},tanh:function tanh(e){var t=Number(e);if(Number.isNaN(t)||t===0){return t}if(t===Infinity){return 1}if(t===-Infinity){return-1}var r=Math.expm1(t);var n=Math.expm1(-t);if(r===Infinity){return 1}if(n===Infinity){return-1}return(r-n)/(Math.exp(t)+Math.exp(-t))},trunc:function trunc(e){var t=Number(e);return t<0?-F(-t):F(t)},imul:function imul(e,t){var r=oe.ToUint32(e);var n=oe.ToUint32(t);var o=r>>>16&65535;var i=r&65535;var a=n>>>16&65535;var u=n&65535;return i*u+(o*u+i*a<<16>>>0)|0},fround:function fround(e){var t=Number(e);if(t===0||t===Infinity||t===-Infinity||X(t)){return t}var r=Math.sign(t);var n=D(t);if(n<It){return r*jt(n/It/St)*It*St}var o=(1+St/Number.EPSILON)*n;var i=o-(o-n);if(i>Tt||X(i)){return r*Infinity}return r*i}};b(Math,Mt);g(Math,"log1p",Mt.log1p,Math.log1p(-1e-17)!==-1e-17);g(Math,"asinh",Mt.asinh,Math.asinh(-1e7)!==-Math.asinh(1e7));g(Math,"tanh",Mt.tanh,Math.tanh(-2e-17)!==-2e-17);g(Math,"acosh",Mt.acosh,Math.acosh(Number.MAX_VALUE)===Infinity);g(Math,"cbrt",Mt.cbrt,Math.abs(1-Math.cbrt(1e-300)/1e-100)/Number.EPSILON>8);g(Math,"sinh",Mt.sinh,Math.sinh(-2e-17)!==-2e-17);var Pt=Math.expm1(10);g(Math,"expm1",Mt.expm1,Pt>22025.465794806718||Pt<22025.465794806718);var xt=Math.round;var Nt=Math.round(.5-Number.EPSILON/4)===0&&Math.round(-.5+Number.EPSILON/3.99)===1;var Ct=wt+1;var At=2*wt-1;var _t=[Ct,At].every(function(e){return Math.round(e)===e});g(Math,"round",function round(e){var t=F(e);var r=t===-1?-0:t+1;return e-t<.5?t:r},!Nt||!_t);V.preserveToString(Math.round,xt);var kt=Math.imul;if(Math.imul(4294967295,5)!==-5){Math.imul=Mt.imul;V.preserveToString(Math.imul,kt)}if(Math.imul.length!==2){Q(Math,"imul",function imul(t,r){return e(kt,Math,arguments)})}var Rt=function(){var e=S.setTimeout;if(typeof e!=="function"){return}oe.IsPromise=function(e){if(!oe.TypeIsObject(e)){return false}if(typeof e._promise==="undefined"){return false}return true};var r=function(e){if(!oe.IsConstructor(e)){throw new TypeError("Bad promise constructor")}var t=this;var r=function(e,r){if(t.resolve!==void 0||t.reject!==void 0){throw new TypeError("Bad Promise implementation!")}t.resolve=e;t.reject=r};t.promise=new e(r);if(!(oe.IsCallable(t.resolve)&&oe.IsCallable(t.reject))){throw new TypeError("Bad promise constructor")}};var n;if(typeof window!=="undefined"&&oe.IsCallable(window.postMessage)){n=function(){var e=[];var t="zero-timeout-message";var r=function(r){C(e,r);window.postMessage(t,"*")};var n=function(r){if(r.source===window&&r.data===t){r.stopPropagation();if(e.length===0){return}var n=_(e);n()}};window.addEventListener("message",n,true);return r}}var o=function(){var e=S.Promise;return e&&e.resolve&&function(t){return e.resolve().then(t)}};var i=oe.IsCallable(S.setImmediate)?S.setImmediate.bind(S):typeof process==="object"&&process.nextTick?process.nextTick:o()||(oe.IsCallable(n)?n():function(t){e(t,0)});var a=1;var u=2;var s=3;var f=4;var l=5;var p=function(e,t){var r=e.capabilities;var n=e.handler;var o,i=false,s;if(n===a){o=t}else if(n===u){o=t;i=true}else{try{o=n(t)}catch(f){o=f;i=true}}s=i?r.reject:r.resolve;s(o)};var v=function(e,t){c(e,function(e){i(function(){p(e,t)})})};var y=function(e,t){var r=e._promise;var n=r.fulfillReactions;r.result=t;r.fulfillReactions=void 0;r.rejectReactions=void 0;r.state=f;v(n,t)};var h=function(e,t){var r=e._promise;var n=r.rejectReactions;r.result=t;r.fulfillReactions=void 0;r.rejectReactions=void 0;r.state=l;v(n,t)};var g=function(e){var t=false;var r=function(r){var n;if(t){return}t=true;if(r===e){return h(e,new TypeError("Self resolution"))}if(!oe.TypeIsObject(r)){return y(e,r)}try{n=r.then}catch(o){return h(e,o)}if(!oe.IsCallable(n)){return y(e,r)}i(function(){d(e,r,n)})};var n=function(r){if(t){return}t=true;return h(e,r)};return{resolve:r,reject:n}};var d=function(e,r,n){var o=g(e);var i=o.resolve;var a=o.reject;try{t(n,r,i,a)}catch(u){a(u)}};var m=function(e){if(!oe.TypeIsObject(e)){throw new TypeError("Promise is not object")}var t=e[B];if(t!==void 0&&t!==null){return t}return e};var O=function Promise(e){if(!(this instanceof Promise)){throw new TypeError('Constructor Promise requires "new"')}if(this&&this._promise){throw new TypeError("Bad construction")}if(!oe.IsCallable(e)){throw new TypeError("not a valid resolver")}var t=ie(this,Promise,w,{_promise:{result:void 0,state:s,fulfillReactions:[],rejectReactions:[]}});var r=g(t);var n=r.reject;try{e(r.resolve,n)}catch(o){n(o)}return t};var w=O.prototype;var j=function(e,t,r,n){var o=false;return function(i){if(o){return}o=true;t[e]=i;if(--n.count===0){var a=r.resolve;a(t)}}};var T=function(e,t,r){var n=e.iterator;var o=[],i={count:1},a,u;var s=0;while(true){try{a=oe.IteratorStep(n);if(a===false){e.done=true;break}u=a.value}catch(f){e.done=true;throw f}o[s]=void 0;var c=t.resolve(u);var l=j(s,o,r,i);i.count++;c.then(l,r.reject);s+=1}if(--i.count===0){var p=r.resolve;p(o)}return r.promise};var I=function(e,t,r){var n=e.iterator,o,i,a;while(true){try{o=oe.IteratorStep(n);if(o===false){e.done=true;break}i=o.value}catch(u){e.done=true;throw u}a=t.resolve(i);a.then(r.resolve,r.reject)}return r.promise};b(O,{all:function all(e){var t=m(this);var n=new r(t);var o,i;try{o=oe.GetIterator(e);i={iterator:o,done:false};return T(i,t,n)}catch(a){if(i&&!i.done){try{oe.IteratorClose(o,true)}catch(u){a=u}}var s=n.reject;s(a);return n.promise}},race:function race(e){var t=m(this);var n=new r(t);var o,i;try{o=oe.GetIterator(e);i={iterator:o,done:false};return I(i,t,n)}catch(a){if(i&&!i.done){try{oe.IteratorClose(o,true)}catch(u){a=u}}var s=n.reject;s(a);return n.promise}},reject:function reject(e){var t=this;var n=new r(t);var o=n.reject;o(e);return n.promise},resolve:function resolve(e){var t=this;if(oe.IsPromise(e)){var n=e.constructor;if(n===t){return e}}var o=new r(t);var i=o.resolve;i(e);return o.promise}});b(w,{"catch":function(e){return this.then(void 0,e)},then:function then(e,t){var n=this;if(!oe.IsPromise(n)){throw new TypeError("not a promise")}var o=oe.SpeciesConstructor(n,O);var c=new r(o);if(!oe.IsCallable(e)){e=a}if(!oe.IsCallable(t)){t=u}var v={capabilities:c,handler:e};var y={capabilities:c,handler:t};var h=n._promise,g;if(h.state===s){
C(h.fulfillReactions,v);C(h.rejectReactions,y)}else if(h.state===f){g=h.result;i(function(){p(v,g)})}else if(h.state===l){g=h.result;i(function(){p(y,g)})}else{throw new TypeError("unexpected Promise state")}return c.promise}});return O}();if(S.Promise){delete S.Promise.accept;delete S.Promise.defer;delete S.Promise.prototype.chain}if(typeof Rt==="function"){b(S,{Promise:Rt});var Ft=m(S.Promise,function(e){return e.resolve(42).then(function(){})instanceof e});var Dt=!o(function(){S.Promise.reject(42).then(null,5).then(null,W)});var zt=o(function(){S.Promise.call(3,W)});var Lt=function(e){var t=e.resolve(5);t.constructor={};var r=e.resolve(t);return t===r}(S.Promise);if(!Ft||!Dt||!zt||Lt){Promise=Rt;Q(S,"Promise",Rt)}U(Promise)}var qt=function(e){var t=Object.keys(l(e,function(e,t){e[t]=true;return e},{}));return e.join(":")===t.join(":")};var Gt=qt(["z","a","bb"]);var Wt=qt(["z",1,"a","3",2]);if(s){var Ht=function fastkey(e){if(!Gt){return null}var t=typeof e;if(t==="undefined"||e===null){return"^"+String(e)}else if(t==="string"){return"$"+e}else if(t==="number"){if(!Wt){return"n"+e}return e}else if(t==="boolean"){return"b"+e}return null};var Bt=function emptyObject(){return Object.create?Object.create(null):{}};var Vt=function addIterableToMap(e,n,o){if(r(o)||K.string(o)){c(o,function(e){n.set(e[0],e[1])})}else if(o instanceof e){t(e.prototype.forEach,o,function(e,t){n.set(t,e)})}else{var i,a;if(o!==null&&typeof o!=="undefined"){a=n.set;if(!oe.IsCallable(a)){throw new TypeError("bad map")}i=oe.GetIterator(o)}if(typeof i!=="undefined"){while(true){var u=oe.IteratorStep(i);if(u===false){break}var s=u.value;try{if(!oe.TypeIsObject(s)){throw new TypeError("expected iterable of pairs")}t(a,n,s[0],s[1])}catch(f){oe.IteratorClose(i,true);throw f}}}}};var $t=function addIterableToSet(e,n,o){if(r(o)||K.string(o)){c(o,function(e){n.add(e)})}else if(o instanceof e){t(e.prototype.forEach,o,function(e){n.add(e)})}else{var i,a;if(o!==null&&typeof o!=="undefined"){a=n.add;if(!oe.IsCallable(a)){throw new TypeError("bad set")}i=oe.GetIterator(o)}if(typeof i!=="undefined"){while(true){var u=oe.IteratorStep(i);if(u===false){break}var s=u.value;try{t(a,n,s)}catch(f){oe.IteratorClose(i,true);throw f}}}}};var Jt={Map:function(){var e={};var r=function MapEntry(e,t){this.key=e;this.value=t;this.next=null;this.prev=null};r.prototype.isRemoved=function isRemoved(){return this.key===e};var n=function isMap(e){return!!e._es6map};var o=function requireMapSlot(e,t){if(!oe.TypeIsObject(e)||!n(e)){throw new TypeError("Method Map.prototype."+t+" called on incompatible receiver "+String(e))}};var i=function MapIterator(e,t){o(e,"[[MapIterator]]");this.head=e._head;this.i=this.head;this.kind=t};i.prototype={next:function next(){var e=this.i,t=this.kind,r=this.head,n;if(typeof this.i==="undefined"){return{value:void 0,done:true}}while(e.isRemoved()&&e!==r){e=e.prev}while(e.next!==r){e=e.next;if(!e.isRemoved()){if(t==="key"){n=e.key}else if(t==="value"){n=e.value}else{n=[e.key,e.value]}this.i=e;return{value:n,done:false}}}this.i=void 0;return{value:void 0,done:true}}};ee(i.prototype);var a=function Map(){if(!(this instanceof Map)){throw new TypeError('Constructor Map requires "new"')}if(this&&this._es6map){throw new TypeError("Bad construction")}var e=ie(this,Map,u,{_es6map:true,_head:null,_storage:Bt(),_size:0});var t=new r(null,null);t.next=t.prev=t;e._head=t;if(arguments.length>0){Vt(Map,e,arguments[0])}return e};var u=a.prototype;V.getter(u,"size",function(){if(typeof this._size==="undefined"){throw new TypeError("size method called on incompatible Map")}return this._size});b(u,{get:function get(e){o(this,"get");var t=Ht(e);if(t!==null){var r=this._storage[t];if(r){return r.value}else{return}}var n=this._head,i=n;while((i=i.next)!==n){if(oe.SameValueZero(i.key,e)){return i.value}}},has:function has(e){o(this,"has");var t=Ht(e);if(t!==null){return typeof this._storage[t]!=="undefined"}var r=this._head,n=r;while((n=n.next)!==r){if(oe.SameValueZero(n.key,e)){return true}}return false},set:function set(e,t){o(this,"set");var n=this._head,i=n,a;var u=Ht(e);if(u!==null){if(typeof this._storage[u]!=="undefined"){this._storage[u].value=t;return this}else{a=this._storage[u]=new r(e,t);i=n.prev}}while((i=i.next)!==n){if(oe.SameValueZero(i.key,e)){i.value=t;return this}}a=a||new r(e,t);if(oe.SameValue(-0,e)){a.key=+0}a.next=this._head;a.prev=this._head.prev;a.prev.next=a;a.next.prev=a;this._size+=1;return this},"delete":function(t){o(this,"delete");var r=this._head,n=r;var i=Ht(t);if(i!==null){if(typeof this._storage[i]==="undefined"){return false}n=this._storage[i].prev;delete this._storage[i]}while((n=n.next)!==r){if(oe.SameValueZero(n.key,t)){n.key=n.value=e;n.prev.next=n.next;n.next.prev=n.prev;this._size-=1;return true}}return false},clear:function clear(){o(this,"clear");this._size=0;this._storage=Bt();var t=this._head,r=t,n=r.next;while((r=n)!==t){r.key=r.value=e;n=r.next;r.next=r.prev=t}t.next=t.prev=t},keys:function keys(){o(this,"keys");return new i(this,"key")},values:function values(){o(this,"values");return new i(this,"value")},entries:function entries(){o(this,"entries");return new i(this,"key+value")},forEach:function forEach(e){o(this,"forEach");var r=arguments.length>1?arguments[1]:null;var n=this.entries();for(var i=n.next();!i.done;i=n.next()){if(r){t(e,r,i.value[1],i.value[0],this)}else{e(i.value[1],i.value[0],this)}}}});ee(u,u.entries);return a}(),Set:function(){var e=function isSet(e){return e._es6set&&typeof e._storage!=="undefined"};var r=function requireSetSlot(t,r){if(!oe.TypeIsObject(t)||!e(t)){throw new TypeError("Set.prototype."+r+" called on incompatible receiver "+String(t))}};var n=function Set(){if(!(this instanceof Set)){throw new TypeError('Constructor Set requires "new"')}if(this&&this._es6set){throw new TypeError("Bad construction")}var e=ie(this,Set,o,{_es6set:true,"[[SetData]]":null,_storage:Bt()});if(!e._es6set){throw new TypeError("bad set")}if(arguments.length>0){$t(Set,e,arguments[0])}return e};var o=n.prototype;var i=function ensureMap(e){if(!e["[[SetData]]"]){var t=e["[[SetData]]"]=new Jt.Map;c(Object.keys(e._storage),function(e){if(e==="^null"){e=null}else if(e==="^undefined"){e=void 0}else{var r=e.charAt(0);if(r==="$"){e=N(e,1)}else if(r==="n"){e=+N(e,1)}else if(r==="b"){e=e==="btrue"}else{e=+e}}t.set(e,e)});e._storage=null}};V.getter(n.prototype,"size",function(){r(this,"size");i(this);return this["[[SetData]]"].size});b(n.prototype,{has:function has(e){r(this,"has");var t;if(this._storage&&(t=Ht(e))!==null){return!!this._storage[t]}i(this);return this["[[SetData]]"].has(e)},add:function add(e){r(this,"add");var t;if(this._storage&&(t=Ht(e))!==null){this._storage[t]=true;return this}i(this);this["[[SetData]]"].set(e,e);return this},"delete":function(e){r(this,"delete");var t;if(this._storage&&(t=Ht(e))!==null){var n=q(this._storage,t);return delete this._storage[t]&&n}i(this);return this["[[SetData]]"]["delete"](e)},clear:function clear(){r(this,"clear");if(this._storage){this._storage=Bt()}else{this["[[SetData]]"].clear()}},values:function values(){r(this,"values");i(this);return this["[[SetData]]"].values()},entries:function entries(){r(this,"entries");i(this);return this["[[SetData]]"].entries()},forEach:function forEach(e){r(this,"forEach");var n=arguments.length>1?arguments[1]:null;var o=this;i(o);this["[[SetData]]"].forEach(function(r,i){if(n){t(e,n,i,i,o)}else{e(i,i,o)}})}});g(n.prototype,"keys",n.prototype.values,true);ee(n.prototype,n.prototype.values);return n}()};if(S.Map||S.Set){var Ut=i(function(){return new Map([[1,2]]).get(1)===2});if(!Ut){var Kt=S.Map;S.Map=function Map(){if(!(this instanceof Map)){throw new TypeError('Constructor Map requires "new"')}var e=new Kt;if(arguments.length>0){Vt(Map,e,arguments[0])}Object.setPrototypeOf(e,S.Map.prototype);g(e,"constructor",Map,true);return e};S.Map.prototype=d(Kt.prototype);V.preserveToString(S.Map,Kt)}var Xt=new Map;var Zt=function(e){e["delete"](0);e["delete"](-0);e.set(0,3);e.get(-0,4);return e.get(0)===3&&e.get(-0)===4}(Xt);var Qt=Xt.set(1,2)===Xt;if(!Zt||!Qt){var Yt=Map.prototype.set;Q(Map.prototype,"set",function set(e,r){t(Yt,this,e===0?0:e,r);return this})}if(!Zt){var er=Map.prototype.get;var tr=Map.prototype.has;b(Map.prototype,{get:function get(e){return t(er,this,e===0?0:e)},has:function has(e){return t(tr,this,e===0?0:e)}},true);V.preserveToString(Map.prototype.get,er);V.preserveToString(Map.prototype.has,tr)}var rr=new Set;var nr=function(e){e["delete"](0);e.add(-0);return!e.has(0)}(rr);var or=rr.add(1)===rr;if(!nr||!or){var ir=Set.prototype.add;Set.prototype.add=function add(e){t(ir,this,e===0?0:e);return this};V.preserveToString(Set.prototype.add,ir)}if(!nr){var ar=Set.prototype.has;Set.prototype.has=function has(e){return t(ar,this,e===0?0:e)};V.preserveToString(Set.prototype.has,ar);var ur=Set.prototype["delete"];Set.prototype["delete"]=function SetDelete(e){return t(ur,this,e===0?0:e)};V.preserveToString(Set.prototype["delete"],ur)}var sr=m(S.Map,function(e){var t=new e([]);t.set(42,42);return t instanceof e});var fr=Object.setPrototypeOf&&!sr;var cr=function(){try{return!(S.Map()instanceof S.Map)}catch(e){return e instanceof TypeError}}();if(S.Map.length!==0||fr||!cr){var lr=S.Map;S.Map=function Map(){if(!(this instanceof Map)){throw new TypeError('Constructor Map requires "new"')}var e=new lr;if(arguments.length>0){Vt(Map,e,arguments[0])}Object.setPrototypeOf(e,Map.prototype);g(e,"constructor",Map,true);return e};S.Map.prototype=lr.prototype;V.preserveToString(S.Map,lr)}var pr=m(S.Set,function(e){var t=new e([]);t.add(42,42);return t instanceof e});var vr=Object.setPrototypeOf&&!pr;var yr=function(){try{return!(S.Set()instanceof S.Set)}catch(e){return e instanceof TypeError}}();if(S.Set.length!==0||vr||!yr){var hr=S.Set;S.Set=function Set(){if(!(this instanceof Set)){throw new TypeError('Constructor Set requires "new"')}var e=new hr;if(arguments.length>0){$t(Set,e,arguments[0])}Object.setPrototypeOf(e,Set.prototype);g(e,"constructor",Set,true);return e};S.Set.prototype=hr.prototype;V.preserveToString(S.Set,hr)}var gr=!i(function(){return(new Map).keys().next().done});if(typeof S.Map.prototype.clear!=="function"||(new S.Set).size!==0||(new S.Map).size!==0||typeof S.Map.prototype.keys!=="function"||typeof S.Set.prototype.keys!=="function"||typeof S.Map.prototype.forEach!=="function"||typeof S.Set.prototype.forEach!=="function"||a(S.Map)||a(S.Set)||typeof(new S.Map).keys().next!=="function"||gr||!sr){delete S.Map;delete S.Set;b(S,{Map:Jt.Map,Set:Jt.Set},true)}if(S.Set.prototype.keys!==S.Set.prototype.values){g(S.Set.prototype,"keys",S.Set.prototype.values,true)}ee(Object.getPrototypeOf((new S.Map).keys()));ee(Object.getPrototypeOf((new S.Set).keys()));if(f&&S.Set.prototype.has.name!=="has"){var br=S.Set.prototype.has;Q(S.Set.prototype,"has",function has(e){return t(br,this,e)})}}b(S,Jt);U(S.Map);U(S.Set)}if(!S.Reflect){g(S,"Reflect",{})}var dr=S.Reflect;var mr=function throwUnlessTargetIsObject(e){if(!oe.TypeIsObject(e)){throw new TypeError("target must be an object")}};var Or={apply:function apply(){return e(oe.Call,null,arguments)},construct:function construct(e,t){if(!oe.IsConstructor(e)){throw new TypeError("First argument must be a constructor.")}var r=arguments.length<3?e:arguments[2];if(!oe.IsConstructor(r)){throw new TypeError("new.target must be a constructor.")}return oe.Construct(e,t,r,"internal")},deleteProperty:function deleteProperty(e,t){mr(e);if(s){var r=Object.getOwnPropertyDescriptor(e,t);if(r&&!r.configurable){return false}}return delete e[t]},enumerate:function enumerate(e){mr(e);return new be(e,"key")},has:function has(e,t){mr(e);return t in e}};if(Object.getOwnPropertyNames){Object.assign(Or,{ownKeys:function ownKeys(e){mr(e);var t=Object.getOwnPropertyNames(e);if(oe.IsCallable(Object.getOwnPropertySymbols)){A(t,Object.getOwnPropertySymbols(e))}return t}})}var wr=function ConvertExceptionToBoolean(e){return!o(e)};if(Object.preventExtensions){Object.assign(Or,{isExtensible:function isExtensible(e){mr(e);return Object.isExtensible(e)},preventExtensions:function preventExtensions(e){mr(e);return wr(function(){Object.preventExtensions(e)})}})}if(s){var jr=function get(e,r,n){var o=Object.getOwnPropertyDescriptor(e,r);if(!o){var i=Object.getPrototypeOf(e);if(i===null){return undefined}return jr(i,r,n)}if("value"in o){return o.value}if(o.get){return t(o.get,n)}return undefined};var Sr=function set(e,r,n,o){var i=Object.getOwnPropertyDescriptor(e,r);if(!i){var a=Object.getPrototypeOf(e);if(a!==null){return Sr(a,r,n,o)}i={value:void 0,writable:true,enumerable:true,configurable:true}}if("value"in i){if(!i.writable){return false}if(!oe.TypeIsObject(o)){return false}var u=Object.getOwnPropertyDescriptor(o,r);if(u){return dr.defineProperty(o,r,{value:n})}else{return dr.defineProperty(o,r,{value:n,writable:true,enumerable:true,configurable:true})}}if(i.set){t(i.set,o,n);return true}return false};Object.assign(Or,{defineProperty:function defineProperty(e,t,r){mr(e);return wr(function(){Object.defineProperty(e,t,r)})},getOwnPropertyDescriptor:function getOwnPropertyDescriptor(e,t){mr(e);return Object.getOwnPropertyDescriptor(e,t)},get:function get(e,t){mr(e);var r=arguments.length>2?arguments[2]:e;return jr(e,t,r)},set:function set(e,t,r){mr(e);var n=arguments.length>3?arguments[3]:e;return Sr(e,t,r,n)}})}if(Object.getPrototypeOf){var Tr=Object.getPrototypeOf;Or.getPrototypeOf=function getPrototypeOf(e){mr(e);return Tr(e)}}if(Object.setPrototypeOf&&Or.getPrototypeOf){var Ir=function(e,t){while(t){if(e===t){return true}t=Or.getPrototypeOf(t)}return false};Object.assign(Or,{setPrototypeOf:function setPrototypeOf(e,t){mr(e);if(t!==null&&!oe.TypeIsObject(t)){throw new TypeError("proto must be an object or null")}if(t===dr.getPrototypeOf(e)){return true}if(dr.isExtensible&&!dr.isExtensible(e)){return false}if(Ir(e,t)){return false}Object.setPrototypeOf(e,t);return true}})}var Er=function(e,t){if(!oe.IsCallable(S.Reflect[e])){g(S.Reflect,e,t)}else{var r=i(function(){S.Reflect[e](1);S.Reflect[e](NaN);S.Reflect[e](true);return true});if(r){Q(S.Reflect,e,t)}}};Object.keys(Or).forEach(function(e){Er(e,Or[e])});if(f&&S.Reflect.getPrototypeOf.name!=="getPrototypeOf"){var Mr=S.Reflect.getPrototypeOf;Q(S.Reflect,"getPrototypeOf",function getPrototypeOf(e){return t(Mr,S.Reflect,e)})}if(S.Reflect.setPrototypeOf){if(i(function(){S.Reflect.setPrototypeOf(1,{});return true})){Q(S.Reflect,"setPrototypeOf",Or.setPrototypeOf)}}if(S.Reflect.defineProperty){if(!i(function(){var e=!S.Reflect.defineProperty(1,"test",{value:1});var t=typeof Object.preventExtensions!=="function"||!S.Reflect.defineProperty(Object.preventExtensions({}),"test",{});return e&&t})){Q(S.Reflect,"defineProperty",Or.defineProperty)}}if(S.Reflect.construct){if(!i(function(){var e=function F(){};return S.Reflect.construct(function(){},[],e)instanceof e})){Q(S.Reflect,"construct",Or.construct)}}if(String(new Date(NaN))!=="Invalid Date"){var Pr=Date.prototype.toString;var xr=function toString(){var e=+this;if(e!==e){return"Invalid Date"}return t(Pr,this)};Q(Date.prototype,"toString",xr)}var Nr={anchor:function anchor(e){return oe.CreateHTML(this,"a","name",e)},big:function big(){return oe.CreateHTML(this,"big","","")},blink:function blink(){return oe.CreateHTML(this,"blink","","")},bold:function bold(){return oe.CreateHTML(this,"b","","")},fixed:function fixed(){return oe.CreateHTML(this,"tt","","")},fontcolor:function fontcolor(e){return oe.CreateHTML(this,"font","color",e)},fontsize:function fontsize(e){return oe.CreateHTML(this,"font","size",e)},italics:function italics(){return oe.CreateHTML(this,"i","","")},link:function link(e){return oe.CreateHTML(this,"a","href",e)},small:function small(){return oe.CreateHTML(this,"small","","")},strike:function strike(){return oe.CreateHTML(this,"strike","","")},sub:function sub(){return oe.CreateHTML(this,"sub","","")},sup:function sub(){return oe.CreateHTML(this,"sup","","")}};c(Object.keys(Nr),function(e){var r=String.prototype[e];var n=false;if(oe.IsCallable(r)){var o=t(r,"",' " ');var i=x([],o.match(/"/g)).length;n=o!==o.toLowerCase()||i>2}else{n=true}if(n){Q(String.prototype,e,Nr[e])}});var Cr=function(){if(!K.symbol(H.iterator)){return false}var e=typeof JSON==="object"&&typeof JSON.stringify==="function"?JSON.stringify:null;if(!e){return false}if(typeof e(H())!=="undefined"){return true}if(e([H()])!=="[null]"){return true}var t={a:H()};t[H()]=true;if(e(t)!=="{}"){return true}return false}();var Ar=i(function(){if(!K.symbol(H.iterator)){return true}return JSON.stringify(Object(H()))==="{}"&&JSON.stringify([Object(H())])==="[{}]"});if(Cr||!Ar){var _r=JSON.stringify;Q(JSON,"stringify",function stringify(e){if(typeof e==="symbol"){return}var n;if(arguments.length>1){n=arguments[1]}var o=[e];if(!r(n)){var i=oe.IsCallable(n)?n:null;var a=function(e,r){var o=n?t(n,this,e,r):r;if(typeof o!=="symbol"){if(K.symbol(o)){return Be({})(o)}else{return o}}};o.push(a)}else{o.push(n)}if(arguments.length>2){o.push(arguments[2])}return _r.apply(this,o)})}return S});
//# sourceMappingURL=es6-shim.map

System.register('ionic/components', ['ionic/components/app/app', 'ionic/components/app/id', 'ionic/components/action-sheet/action-sheet', 'ionic/components/blur/blur', 'ionic/components/button/button', 'ionic/components/checkbox/checkbox', 'ionic/components/content/content', 'ionic/components/icon/icon', 'ionic/components/item/item', 'ionic/components/item/item-sliding', 'ionic/components/menu/menu', 'ionic/components/menu/menu-types', 'ionic/components/menu/menu-toggle', 'ionic/components/menu/menu-close', 'ionic/components/text-input/text-input', 'ionic/components/text-input/label', 'ionic/components/list/list', 'ionic/components/show-hide-when/show-hide-when', 'ionic/components/modal/modal', 'ionic/components/nav/nav', 'ionic/components/nav/nav-controller', 'ionic/components/nav/view-controller', 'ionic/components/nav/nav-push', 'ionic/components/nav/nav-router', 'ionic/components/navbar/navbar', 'ionic/components/overlay/overlay', 'ionic/components/popup/popup', 'ionic/components/slides/slides', 'ionic/components/radio/radio', 'ionic/components/scroll/scroll', 'ionic/components/scroll/pull-to-refresh', 'ionic/components/searchbar/searchbar', 'ionic/components/segment/segment', 'ionic/components/switch/switch', 'ionic/components/tabs/tabs', 'ionic/components/tabs/tab', 'ionic/components/tap-click/tap-click', 'ionic/components/toolbar/toolbar'], function (_export) {
  'use strict';

  return {
    setters: [function (_ionicComponentsAppApp) {
      for (var _key in _ionicComponentsAppApp) {
        if (_key !== 'default') _export(_key, _ionicComponentsAppApp[_key]);
      }
    }, function (_ionicComponentsAppId) {
      for (var _key2 in _ionicComponentsAppId) {
        if (_key2 !== 'default') _export(_key2, _ionicComponentsAppId[_key2]);
      }
    }, function (_ionicComponentsActionSheetActionSheet) {
      for (var _key3 in _ionicComponentsActionSheetActionSheet) {
        if (_key3 !== 'default') _export(_key3, _ionicComponentsActionSheetActionSheet[_key3]);
      }
    }, function (_ionicComponentsBlurBlur) {
      for (var _key4 in _ionicComponentsBlurBlur) {
        if (_key4 !== 'default') _export(_key4, _ionicComponentsBlurBlur[_key4]);
      }
    }, function (_ionicComponentsButtonButton) {
      for (var _key5 in _ionicComponentsButtonButton) {
        if (_key5 !== 'default') _export(_key5, _ionicComponentsButtonButton[_key5]);
      }
    }, function (_ionicComponentsCheckboxCheckbox) {
      for (var _key6 in _ionicComponentsCheckboxCheckbox) {
        if (_key6 !== 'default') _export(_key6, _ionicComponentsCheckboxCheckbox[_key6]);
      }
    }, function (_ionicComponentsContentContent) {
      for (var _key7 in _ionicComponentsContentContent) {
        if (_key7 !== 'default') _export(_key7, _ionicComponentsContentContent[_key7]);
      }
    }, function (_ionicComponentsIconIcon) {
      for (var _key8 in _ionicComponentsIconIcon) {
        if (_key8 !== 'default') _export(_key8, _ionicComponentsIconIcon[_key8]);
      }
    }, function (_ionicComponentsItemItem) {
      for (var _key9 in _ionicComponentsItemItem) {
        if (_key9 !== 'default') _export(_key9, _ionicComponentsItemItem[_key9]);
      }
    }, function (_ionicComponentsItemItemSliding) {
      for (var _key10 in _ionicComponentsItemItemSliding) {
        if (_key10 !== 'default') _export(_key10, _ionicComponentsItemItemSliding[_key10]);
      }
    }, function (_ionicComponentsMenuMenu) {
      for (var _key11 in _ionicComponentsMenuMenu) {
        if (_key11 !== 'default') _export(_key11, _ionicComponentsMenuMenu[_key11]);
      }
    }, function (_ionicComponentsMenuMenuTypes) {
      for (var _key12 in _ionicComponentsMenuMenuTypes) {
        if (_key12 !== 'default') _export(_key12, _ionicComponentsMenuMenuTypes[_key12]);
      }
    }, function (_ionicComponentsMenuMenuToggle) {
      for (var _key13 in _ionicComponentsMenuMenuToggle) {
        if (_key13 !== 'default') _export(_key13, _ionicComponentsMenuMenuToggle[_key13]);
      }
    }, function (_ionicComponentsMenuMenuClose) {
      for (var _key14 in _ionicComponentsMenuMenuClose) {
        if (_key14 !== 'default') _export(_key14, _ionicComponentsMenuMenuClose[_key14]);
      }
    }, function (_ionicComponentsTextInputTextInput) {
      for (var _key15 in _ionicComponentsTextInputTextInput) {
        if (_key15 !== 'default') _export(_key15, _ionicComponentsTextInputTextInput[_key15]);
      }
    }, function (_ionicComponentsTextInputLabel) {
      for (var _key16 in _ionicComponentsTextInputLabel) {
        if (_key16 !== 'default') _export(_key16, _ionicComponentsTextInputLabel[_key16]);
      }
    }, function (_ionicComponentsListList) {
      for (var _key17 in _ionicComponentsListList) {
        if (_key17 !== 'default') _export(_key17, _ionicComponentsListList[_key17]);
      }
    }, function (_ionicComponentsShowHideWhenShowHideWhen) {
      for (var _key18 in _ionicComponentsShowHideWhenShowHideWhen) {
        if (_key18 !== 'default') _export(_key18, _ionicComponentsShowHideWhenShowHideWhen[_key18]);
      }
    }, function (_ionicComponentsModalModal) {
      for (var _key19 in _ionicComponentsModalModal) {
        if (_key19 !== 'default') _export(_key19, _ionicComponentsModalModal[_key19]);
      }
    }, function (_ionicComponentsNavNav) {
      for (var _key20 in _ionicComponentsNavNav) {
        if (_key20 !== 'default') _export(_key20, _ionicComponentsNavNav[_key20]);
      }
    }, function (_ionicComponentsNavNavController) {
      for (var _key21 in _ionicComponentsNavNavController) {
        if (_key21 !== 'default') _export(_key21, _ionicComponentsNavNavController[_key21]);
      }
    }, function (_ionicComponentsNavViewController) {
      for (var _key22 in _ionicComponentsNavViewController) {
        if (_key22 !== 'default') _export(_key22, _ionicComponentsNavViewController[_key22]);
      }
    }, function (_ionicComponentsNavNavPush) {
      for (var _key23 in _ionicComponentsNavNavPush) {
        if (_key23 !== 'default') _export(_key23, _ionicComponentsNavNavPush[_key23]);
      }
    }, function (_ionicComponentsNavNavRouter) {
      for (var _key24 in _ionicComponentsNavNavRouter) {
        if (_key24 !== 'default') _export(_key24, _ionicComponentsNavNavRouter[_key24]);
      }
    }, function (_ionicComponentsNavbarNavbar) {
      for (var _key25 in _ionicComponentsNavbarNavbar) {
        if (_key25 !== 'default') _export(_key25, _ionicComponentsNavbarNavbar[_key25]);
      }
    }, function (_ionicComponentsOverlayOverlay) {
      for (var _key26 in _ionicComponentsOverlayOverlay) {
        if (_key26 !== 'default') _export(_key26, _ionicComponentsOverlayOverlay[_key26]);
      }
    }, function (_ionicComponentsPopupPopup) {
      for (var _key27 in _ionicComponentsPopupPopup) {
        if (_key27 !== 'default') _export(_key27, _ionicComponentsPopupPopup[_key27]);
      }
    }, function (_ionicComponentsSlidesSlides) {
      for (var _key28 in _ionicComponentsSlidesSlides) {
        if (_key28 !== 'default') _export(_key28, _ionicComponentsSlidesSlides[_key28]);
      }
    }, function (_ionicComponentsRadioRadio) {
      for (var _key29 in _ionicComponentsRadioRadio) {
        if (_key29 !== 'default') _export(_key29, _ionicComponentsRadioRadio[_key29]);
      }
    }, function (_ionicComponentsScrollScroll) {
      for (var _key30 in _ionicComponentsScrollScroll) {
        if (_key30 !== 'default') _export(_key30, _ionicComponentsScrollScroll[_key30]);
      }
    }, function (_ionicComponentsScrollPullToRefresh) {
      for (var _key31 in _ionicComponentsScrollPullToRefresh) {
        if (_key31 !== 'default') _export(_key31, _ionicComponentsScrollPullToRefresh[_key31]);
      }
    }, function (_ionicComponentsSearchbarSearchbar) {
      for (var _key32 in _ionicComponentsSearchbarSearchbar) {
        if (_key32 !== 'default') _export(_key32, _ionicComponentsSearchbarSearchbar[_key32]);
      }
    }, function (_ionicComponentsSegmentSegment) {
      for (var _key33 in _ionicComponentsSegmentSegment) {
        if (_key33 !== 'default') _export(_key33, _ionicComponentsSegmentSegment[_key33]);
      }
    }, function (_ionicComponentsSwitchSwitch) {
      for (var _key34 in _ionicComponentsSwitchSwitch) {
        if (_key34 !== 'default') _export(_key34, _ionicComponentsSwitchSwitch[_key34]);
      }
    }, function (_ionicComponentsTabsTabs) {
      for (var _key35 in _ionicComponentsTabsTabs) {
        if (_key35 !== 'default') _export(_key35, _ionicComponentsTabsTabs[_key35]);
      }
    }, function (_ionicComponentsTabsTab) {
      for (var _key36 in _ionicComponentsTabsTab) {
        if (_key36 !== 'default') _export(_key36, _ionicComponentsTabsTab[_key36]);
      }
    }, function (_ionicComponentsTapClickTapClick) {
      for (var _key37 in _ionicComponentsTapClickTapClick) {
        if (_key37 !== 'default') _export(_key37, _ionicComponentsTapClickTapClick[_key37]);
      }
    }, function (_ionicComponentsToolbarToolbar) {
      for (var _key38 in _ionicComponentsToolbarToolbar) {
        if (_key38 !== 'default') _export(_key38, _ionicComponentsToolbarToolbar[_key38]);
      }
    }],
    execute: function () {}
  };
});
System.register('ionic/ionic', ['./config/bootstrap', './config/config', './config/modes', './config/decorators', './config/directives', './components', './platform/platform', './platform/registry', './platform/storage', './util/click-block', './util/events', './util/keyboard', './animations/animation', './animations/builtins', './animations/ios-transition', './animations/md-transition', './translation/translate', './translation/translate_pipe'], function (_export) {
  'use strict';

  return {
    setters: [function (_configBootstrap) {
      for (var _key in _configBootstrap) {
        if (_key !== 'default') _export(_key, _configBootstrap[_key]);
      }
    }, function (_configConfig) {
      for (var _key2 in _configConfig) {
        if (_key2 !== 'default') _export(_key2, _configConfig[_key2]);
      }
    }, function (_configModes) {
      for (var _key3 in _configModes) {
        if (_key3 !== 'default') _export(_key3, _configModes[_key3]);
      }
    }, function (_configDecorators) {
      for (var _key4 in _configDecorators) {
        if (_key4 !== 'default') _export(_key4, _configDecorators[_key4]);
      }
    }, function (_configDirectives) {
      for (var _key5 in _configDirectives) {
        if (_key5 !== 'default') _export(_key5, _configDirectives[_key5]);
      }
    }, function (_components) {
      for (var _key6 in _components) {
        if (_key6 !== 'default') _export(_key6, _components[_key6]);
      }
    }, function (_platformPlatform) {
      for (var _key7 in _platformPlatform) {
        if (_key7 !== 'default') _export(_key7, _platformPlatform[_key7]);
      }
    }, function (_platformRegistry) {
      for (var _key8 in _platformRegistry) {
        if (_key8 !== 'default') _export(_key8, _platformRegistry[_key8]);
      }
    }, function (_platformStorage) {
      for (var _key9 in _platformStorage) {
        if (_key9 !== 'default') _export(_key9, _platformStorage[_key9]);
      }
    }, function (_utilClickBlock) {
      for (var _key10 in _utilClickBlock) {
        if (_key10 !== 'default') _export(_key10, _utilClickBlock[_key10]);
      }
    }, function (_utilEvents) {
      for (var _key11 in _utilEvents) {
        if (_key11 !== 'default') _export(_key11, _utilEvents[_key11]);
      }
    }, function (_utilKeyboard) {
      for (var _key12 in _utilKeyboard) {
        if (_key12 !== 'default') _export(_key12, _utilKeyboard[_key12]);
      }
    }, function (_animationsAnimation) {
      for (var _key13 in _animationsAnimation) {
        if (_key13 !== 'default') _export(_key13, _animationsAnimation[_key13]);
      }
    }, function (_animationsBuiltins) {
      for (var _key14 in _animationsBuiltins) {
        if (_key14 !== 'default') _export(_key14, _animationsBuiltins[_key14]);
      }
    }, function (_animationsIosTransition) {
      for (var _key15 in _animationsIosTransition) {
        if (_key15 !== 'default') _export(_key15, _animationsIosTransition[_key15]);
      }
    }, function (_animationsMdTransition) {
      for (var _key16 in _animationsMdTransition) {
        if (_key16 !== 'default') _export(_key16, _animationsMdTransition[_key16]);
      }
    }, function (_translationTranslate) {
      for (var _key17 in _translationTranslate) {
        if (_key17 !== 'default') _export(_key17, _translationTranslate[_key17]);
      }
    }, function (_translationTranslate_pipe) {
      for (var _key18 in _translationTranslate_pipe) {
        if (_key18 !== 'default') _export(_key18, _translationTranslate_pipe[_key18]);
      }
    }],
    execute: function () {}
  };
});
System.register('ionic/util', ['ionic/util/dom', 'ionic/util/util'], function (_export) {
  'use strict';

  var domUtil, dom;
  return {
    setters: [function (_ionicUtilDom) {
      domUtil = _ionicUtilDom;
    }, function (_ionicUtilUtil) {
      for (var _key in _ionicUtilUtil) {
        if (_key !== 'default') _export(_key, _ionicUtilUtil[_key]);
      }
    }],
    execute: function () {
      dom = domUtil;

      _export('dom', dom);
    }
  };
});
System.register('ionic/animations/animation', ['../util/dom', '../util/util'], function (_export) {
    /**
      Animation Steps/Process
      -----------------------
      1) Construct animation (doesn't start)
      2) Client play()'s animation, returns promise
      3) Add before classes to elements
      4) Remove before classes from elements
      5) Elements staged in "from" effect w/ inline styles
      6) Call onReady()
      7) Wait for RENDER_DELAY milliseconds (give browser time to render)
      8) Call onPlay()
      8) Run from/to animation on elements
      9) Animations finish async
     10) Set inline styles w/ the "to" effects on elements
     11) Add after classes to elements
     12) Remove after classes from elements
     13) Call onFinish()
     14) Resolve play()'s promise
    **/
    'use strict';

    var CSS, rafFrames, extend, Animation, Animate, TRANSFORMS, ANIMATE_PROPERTIES, CUBIC_BEZIERS, EASING_FN, AnimationRegistry;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function insertEffects(effects, fromEffect, toEffect, easingConfig) {
        easingConfig.opts = easingConfig.opts || {};
        var increment = easingConfig.opts.increment || 0.04;
        var easingFn = EASING_FN[easingConfig.name];
        var pos = undefined,
            tweenEffect = undefined,
            addEffect = undefined,
            property = undefined,
            toProperty = undefined,
            fromValue = undefined,
            diffValue = undefined;
        for (pos = increment; pos <= 1 - increment; pos += increment) {
            tweenEffect = {};
            addEffect = false;
            for (property in toEffect) {
                toProperty = toEffect[property];
                if (toProperty.tween) {
                    fromValue = fromEffect[property].num;
                    diffValue = toProperty.num - fromValue;
                    tweenEffect[property] = {
                        value: roundValue(easingFn(pos, easingConfig.opts) * diffValue + fromValue) + toProperty.unit
                    };
                    addEffect = true;
                }
            }
            if (addEffect) {
                effects.push(convertProperties(tweenEffect));
            }
        }
    }
    function parseEffect(inputEffect) {
        var val = undefined,
            r = undefined,
            num = undefined,
            property = undefined;
        var outputEffect = {};
        for (property in inputEffect) {
            val = inputEffect[property];
            r = val.toString().match(/(^-?\d*\.?\d*)(.*)/);
            num = parseFloat(r[1]);
            outputEffect[property] = {
                value: val,
                num: num,
                unit: r[0] != r[2] ? r[2] : '',
                tween: !isNaN(num) && ANIMATE_PROPERTIES.indexOf(property) > -1
            };
        }
        return outputEffect;
    }
    function convertProperties(inputEffect) {
        var outputEffect = {};
        var transforms = [];
        var value = undefined,
            property = undefined;
        for (property in inputEffect) {
            value = inputEffect[property].value;
            if (TRANSFORMS.indexOf(property) > -1) {
                transforms.push(property + '(' + value + ')');
            } else {
                outputEffect[property] = value;
            }
        }
        if (transforms.length) {
            transforms.push('translateZ(0px)');
            outputEffect.transform = transforms.join(' ');
        }
        return outputEffect;
    }
    function inlineStyle(ele, effect) {
        if (ele && effect) {
            var transforms = [];
            var value = undefined,
                property = undefined;
            for (property in effect) {
                value = effect[property].value;
                if (TRANSFORMS.indexOf(property) > -1) {
                    transforms.push(property + '(' + value + ')');
                } else {
                    ele.style[property] = value;
                }
            }
            if (transforms.length) {
                transforms.push('translateZ(0px)');
                ele.style[CSS.transform] = transforms.join(' ');
            }
        }
    }
    function roundValue(val) {
        return Math.round(val * 10000) / 10000;
    }

    function parallel(tasks, done) {
        var l = tasks.length;
        if (!l) {
            done && done();
            return;
        }
        var completed = 0;
        function taskCompleted() {
            completed++;
            if (completed === l) {
                done && done();
            }
        }
        for (var i = 0; i < l; i++) {
            tasks[i](taskCompleted);
        }
    }
    return {
        setters: [function (_utilDom) {
            CSS = _utilDom.CSS;
            rafFrames = _utilDom.rafFrames;
        }, function (_utilUtil) {
            extend = _utilUtil.extend;
        }],
        execute: function () {
            Animation = (function () {
                function Animation(ele) {
                    var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

                    _classCallCheck(this, Animation);

                    this.reset();
                    this._opts = extend({
                        renderDelay: 16
                    }, opts);
                    this.elements(ele);
                    if (!document.documentElement.animate) {
                        console.error('Web Animations polyfill missing');
                    }
                }

                _createClass(Animation, [{
                    key: 'reset',
                    value: function reset() {
                        this._el = [];
                        this._chld = [];
                        this._ani = [];
                        this._bfAdd = [];
                        this._bfSty = {};
                        this._bfRmv = [];
                        this._afAdd = [];
                        this._afRmv = [];
                        this._readys = [];
                        this._plays = [];
                        this._finishes = [];
                    }
                }, {
                    key: 'elements',
                    value: function elements(ele) {
                        if (ele) {
                            if (typeof ele === 'string') {
                                // string query selector
                                ele = document.querySelectorAll(ele);
                            }
                            if (ele.length) {
                                // array of elements
                                for (var i = 0; i < ele.length; i++) {
                                    this.addElement(ele[i]);
                                }
                            } else {
                                // single element
                                this.addElement(ele);
                            }
                        }
                        return this;
                    }
                }, {
                    key: 'addElement',
                    value: function addElement(ele) {
                        // ensure only HTML Element nodes
                        if (ele) {
                            if (ele.nativeElement) {
                                // angular ElementRef
                                ele = ele.nativeElement;
                            }
                            if (ele.nodeType === 1) {
                                this._el.push(ele);
                            }
                        }
                    }
                }, {
                    key: 'parent',
                    value: function parent(parentAnimation) {
                        this._parent = parentAnimation;
                        return this;
                    }
                }, {
                    key: 'add',
                    value: function add(childAnimations) {
                        var _childAnimations = Array.isArray(childAnimations) ? childAnimations : arguments;
                        for (var i = 0; i < _childAnimations.length; i++) {
                            _childAnimations[i].parent(this);
                            this._chld.push(_childAnimations[i]);
                        }
                        return this;
                    }
                }, {
                    key: 'duration',
                    value: function duration(value) {
                        if (arguments.length) {
                            this._duration = value;
                            return this;
                        }
                        return this._duration || this._parent && this._parent.duration() || 0;
                    }
                }, {
                    key: 'clearDuration',
                    value: function clearDuration() {
                        this._duration = null;
                        for (var i = 0, l = this._chld.length; i < l; i++) {
                            this._chld[i].clearDuration();
                        }
                    }
                }, {
                    key: 'easing',
                    value: function easing(name, opts) {
                        if (arguments.length) {
                            this._easing = {
                                name: name,
                                opts: opts
                            };
                            return this;
                        }
                        return this._easing || this._parent && this._parent.easing();
                    }
                }, {
                    key: 'playbackRate',
                    value: function playbackRate(value) {
                        if (arguments.length) {
                            this._rate = value;
                            var i = undefined;
                            for (i = 0; i < this._chld.length; i++) {
                                this._chld[i].playbackRate(value);
                            }
                            for (i = 0; i < this._ani.length; i++) {
                                this._ani[i].playbackRate(value);
                            }
                            return this;
                        }
                        return typeof this._rate !== 'undefined' ? this._rate : this._parent && this._parent.playbackRate();
                    }
                }, {
                    key: 'reverse',
                    value: function reverse() {
                        return this.playbackRate(-1);
                    }
                }, {
                    key: 'forward',
                    value: function forward() {
                        return this.playbackRate(1);
                    }
                }, {
                    key: 'from',
                    value: function from(property, value) {
                        if (!this._from) {
                            this._from = {};
                        }
                        this._from[property] = value;
                        return this;
                    }
                }, {
                    key: 'to',
                    value: function to(property, value) {
                        if (!this._to) {
                            this._to = {};
                        }
                        this._to[property] = value;
                        return this;
                    }
                }, {
                    key: 'fromTo',
                    value: function fromTo(property, from, to) {
                        return this.from(property, from).to(property, to);
                    }
                }, {
                    key: 'fadeIn',
                    value: function fadeIn() {
                        return this.fromTo('opacity', 0.001, 1);
                    }
                }, {
                    key: 'fadeOut',
                    value: function fadeOut() {
                        return this.fromTo('opacity', 0.999, 0);
                    }
                }, {
                    key: 'play',
                    value: function play(done) {
                        var self = this;
                        // the actual play() method which may or may not start async
                        function beginPlay(beginPlayDone) {
                            var tasks = [];
                            self._chld.forEach(function (childAnimation) {
                                tasks.push(function (taskDone) {
                                    childAnimation.play(taskDone);
                                });
                            });
                            self._ani.forEach(function (animation) {
                                tasks.push(function (taskDone) {
                                    animation.play(taskDone);
                                });
                            });
                            parallel(tasks, beginPlayDone);
                        }
                        if (!self._parent) {
                            var kickoff = function kickoff() {
                                // synchronously call all onPlay()'s before play()
                                self._onPlay();
                                beginPlay(function () {
                                    self._onFinish();
                                    done();
                                });
                            };

                            // this is the top level animation and is in full control
                            // of when the async play() should actually kick off
                            // stage all animations and child animations at their starting point
                            self.stage();
                            var promise = undefined;
                            if (!done) {
                                promise = new Promise(function (res) {
                                    done = res;
                                });
                            }

                            if (self._duration > 16 && self._opts.renderDelay > 0) {
                                // begin each animation when everything is rendered in their starting point
                                // give the browser some time to render everything in place before starting
                                rafFrames(self._opts.renderDelay / 16, kickoff);
                            } else {
                                // no need to render everything in there place before animating in
                                // just kick it off immediately to render them in their "to" locations
                                kickoff();
                            }
                            return promise;
                        }
                        // this is a child animation, it is told exactly when to
                        // start by the top level animation
                        beginPlay(done);
                    }
                }, {
                    key: 'stage',
                    value: function stage() {
                        // before the RENDER_DELAY
                        // before the animations have started
                        if (!this._isStaged) {
                            this._isStaged = true;
                            var i = undefined,
                                p = undefined,
                                l = undefined,
                                j = undefined,
                                ele = undefined,
                                animation = undefined;
                            for (i = 0, l = this._chld.length; i < l; i++) {
                                this._chld[i].stage();
                            }
                            for (i = 0; i < this._el.length; i++) {
                                ele = this._el[i];
                                for (j = 0; j < this._bfAdd.length; j++) {
                                    ele.classList.add(this._bfAdd[j]);
                                }
                                for (p in this._bfSty) {
                                    ele.style[p] = this._bfSty[p];
                                }
                                for (j = 0; j < this._bfRmv.length; j++) {
                                    ele.classList.remove(this._bfRmv[j]);
                                }
                            }
                            if (this._to) {
                                // only animate the elements if there are defined "to" effects
                                for (i = 0; i < this._el.length; i++) {
                                    animation = new Animate(this._el[i], this._from, this._to, this.duration(), this.easing(), this.playbackRate());
                                    if (animation.shouldAnimate) {
                                        this._ani.push(animation);
                                    }
                                }
                            }
                            for (i = 0; i < this._readys.length; i++) {
                                this._readys[i](this);
                            }
                        }
                    }
                }, {
                    key: '_onPlay',
                    value: function _onPlay() {
                        // after the RENDER_DELAY
                        // before the animations have started
                        var i = undefined;
                        this._isFinished = false;
                        for (i = 0; i < this._chld.length; i++) {
                            this._chld[i]._onPlay();
                        }
                        for (i = 0; i < this._plays.length; i++) {
                            this._plays[i](this);
                        }
                    }
                }, {
                    key: '_onFinish',
                    value: function _onFinish() {
                        // after the animations have finished
                        if (!this._isFinished && !this.isProgress) {
                            this._isFinished = true;
                            var i = undefined,
                                j = undefined,
                                ele = undefined;
                            for (i = 0; i < this._chld.length; i++) {
                                this._chld[i]._onFinish();
                            }
                            if (this.playbackRate() < 0) {
                                // reverse direction
                                for (i = 0; i < this._el.length; i++) {
                                    ele = this._el[i];
                                    for (j = 0; j < this._bfAdd.length; j++) {
                                        ele.classList.remove(this._bfAdd[j]);
                                    }
                                    for (j = 0; j < this._bfRmv.length; j++) {
                                        ele.classList.add(this._bfRmv[j]);
                                    }
                                }
                            } else {
                                // normal direction
                                for (i = 0; i < this._el.length; i++) {
                                    ele = this._el[i];
                                    for (j = 0; j < this._afAdd.length; j++) {
                                        ele.classList.add(this._afAdd[j]);
                                    }
                                    for (j = 0; j < this._afRmv.length; j++) {
                                        ele.classList.remove(this._afRmv[j]);
                                    }
                                }
                            }
                            for (i = 0; i < this._finishes.length; i++) {
                                this._finishes[i](this);
                            }
                        }
                    }
                }, {
                    key: 'pause',
                    value: function pause() {
                        var i = undefined;
                        for (i = 0; i < this._chld.length; i++) {
                            this._chld[i].pause();
                        }
                        for (i = 0; i < this._ani.length; i++) {
                            this._ani[i].pause();
                        }
                    }
                }, {
                    key: 'progressStart',
                    value: function progressStart() {
                        this.isProgress = true;
                        for (var i = 0; i < this._chld.length; i++) {
                            this._chld[i].progressStart();
                        }
                        this.duration(1000);
                        this.play();
                        this.pause();
                    }
                }, {
                    key: 'progress',
                    value: function progress(value) {
                        value = Math.min(1, Math.max(0, value));
                        this.isProgress = true;
                        var i = undefined;
                        for (i = 0; i < this._chld.length; i++) {
                            this._chld[i].progress(value);
                        }
                        for (i = 0; i < this._ani.length; i++) {
                            this._ani[i].progress(value);
                        }
                    }

                    /**
                     * Get the current time of the first animation
                     * in the list. To get a specific time of an animation, call
                     * subAnimationInstance.getCurrentTime()
                     */
                }, {
                    key: 'getCurrentTime',
                    value: function getCurrentTime() {
                        if (this._chld.length > 0) {
                            return this._chld[0].getCurrentTime();
                        }
                        if (this._ani.length > 0) {
                            return this._ani[0].getCurrentTime();
                        }
                        return 0;
                    }
                }, {
                    key: 'progressEnd',
                    value: function progressEnd(shouldComplete) {
                        var rate = arguments.length <= 1 || arguments[1] === undefined ? 3 : arguments[1];

                        var promises = [];
                        this.isProgress = false;
                        for (var i = 0; i < this._chld.length; i++) {
                            promises.push(this._chld[i].progressEnd(shouldComplete));
                        }
                        this._ani.forEach(function (animation) {
                            if (shouldComplete) {
                                animation.playbackRate(rate);
                            } else {
                                animation.playbackRate(rate * -1);
                            }
                            promises.push(new Promise(function (resolve) {
                                animation.play(resolve);
                            }));
                        });
                        return Promise.all(promises);
                    }
                }, {
                    key: 'onReady',
                    value: function onReady(fn, clear) {
                        if (clear) {
                            this._readys = [];
                        }
                        this._readys.push(fn);
                        return this;
                    }
                }, {
                    key: 'onPlay',
                    value: function onPlay(fn, clear) {
                        if (clear) {
                            this._plays = [];
                        }
                        this._plays.push(fn);
                        return this;
                    }
                }, {
                    key: 'onFinish',
                    value: function onFinish(fn, clear) {
                        if (clear) {
                            this._finishes = [];
                        }
                        this._finishes.push(fn);
                        return this;
                    }
                }, {
                    key: 'clone',
                    value: function clone() {
                        function copy(dest, src) {
                            // undo what stage() may have already done
                            extend(dest, src);
                            dest._isFinished = dest._isStaged = dest.isProgress = false;
                            dest._chld = [];
                            dest._ani = [];
                            for (var i = 0; i < src._chld.length; i++) {
                                dest.add(copy(new Animation(), src._chld[i]));
                            }
                            return dest;
                        }
                        return copy(new Animation(), this);
                    }
                }, {
                    key: 'dispose',
                    value: function dispose(removeElement) {
                        var i = undefined;
                        for (i = 0; i < this._chld.length; i++) {
                            this._chld[i].dispose(removeElement);
                        }
                        for (i = 0; i < this._ani.length; i++) {
                            this._ani[i].dispose(removeElement);
                        }
                        if (removeElement) {
                            for (i = 0; i < this._el.length; i++) {
                                this._el[i].parentNode && this._el[i].parentNode.removeChild(this._el[i]);
                            }
                        }
                        this.reset();
                    }

                    /*
                     STATIC CLASSES
                     */
                }, {
                    key: 'before',
                    get: function get() {
                        var _this = this;

                        return {
                            addClass: function addClass(className) {
                                _this._bfAdd.push(className);
                                return _this;
                            },
                            removeClass: function removeClass(className) {
                                _this._bfRmv.push(className);
                                return _this;
                            },
                            setStyles: function setStyles(styles) {
                                _this._bfSty = styles;
                                return _this;
                            }
                        };
                    }
                }, {
                    key: 'after',
                    get: function get() {
                        var _this2 = this;

                        return {
                            addClass: function addClass(className) {
                                _this2._afAdd.push(className);
                                return _this2;
                            },
                            removeClass: function removeClass(className) {
                                _this2._afRmv.push(className);
                                return _this2;
                            }
                        };
                    }
                }], [{
                    key: 'create',
                    value: function create(element, name) {
                        var AnimationClass = AnimationRegistry[name];
                        if (!AnimationClass) {
                            // couldn't find an animation by the given name
                            // fallback to just the base Animation class
                            AnimationClass = Animation;
                        }
                        return new AnimationClass(element);
                    }
                }, {
                    key: 'createTransition',
                    value: function createTransition(enteringView, leavingView) {
                        var opts = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

                        var name = opts.animation || 'ios-transition';
                        var TransitionClass = AnimationRegistry[name];
                        if (!TransitionClass) {
                            TransitionClass = Animation;
                        }
                        return new TransitionClass(enteringView, leavingView, opts);
                    }
                }, {
                    key: 'register',
                    value: function register(name, AnimationClass) {
                        AnimationRegistry[name] = AnimationClass;
                    }
                }]);

                return Animation;
            })();

            _export('Animation', Animation);

            Animate = (function () {
                function Animate(ele, fromEffect, toEffect, duration, easingConfig, playbackRate) {
                    _classCallCheck(this, Animate);

                    // https://w3c.github.io/web-animations/
                    // not using the direct API methods because they're still in flux
                    // however, element.animate() seems locked in and uses the latest
                    // and correct API methods under the hood, so really doesn't matter
                    if (!fromEffect) {
                        return console.error(ele.tagName, 'animation fromEffect required, toEffect:', toEffect);
                    }
                    this.toEffect = parseEffect(toEffect);
                    this.shouldAnimate = duration > 32;
                    if (!this.shouldAnimate) {
                        return inlineStyle(ele, this.toEffect);
                    }
                    this.ele = ele;
                    // stage where the element will start from
                    this.fromEffect = parseEffect(fromEffect);
                    inlineStyle(ele, this.fromEffect);
                    this.duration = duration;
                    this.rate = typeof playbackRate !== 'undefined' ? playbackRate : 1;
                    this.easing = easingConfig && easingConfig.name || 'linear';
                    this.effects = [convertProperties(this.fromEffect)];
                    if (this.easing in EASING_FN) {
                        insertEffects(this.effects, this.fromEffect, this.toEffect, easingConfig);
                    } else if (this.easing in CUBIC_BEZIERS) {
                        this.easing = 'cubic-bezier(' + CUBIC_BEZIERS[this.easing] + ')';
                    }
                    this.effects.push(convertProperties(this.toEffect));
                }

                _createClass(Animate, [{
                    key: 'play',
                    value: function play(done) {
                        var self = this;
                        if (self.ani) {
                            self.ani.play();
                        } else {
                            // https://developers.google.com/web/updates/2014/05/Web-Animations---element-animate-is-now-in-Chrome-36
                            // https://w3c.github.io/web-animations/
                            // Future versions will use "new window.Animation" rather than "element.animate()"
                            self.ani = self.ele.animate(self.effects, {
                                duration: self.duration || 0,
                                easing: self.easing,
                                playbackRate: self.rate // old way of setting playbackRate, but still necessary
                            });
                            self.ani.playbackRate = self.rate;
                        }
                        self.ani.onfinish = function () {
                            // lock in where the element will stop at
                            // if the playbackRate is negative then it needs to return
                            // to its "from" effects
                            if (self.ani) {
                                inlineStyle(self.ele, self.rate < 0 ? self.fromEffect : self.toEffect);
                                self.ani = self.ani.onfinish = null;
                                done && done();
                            }
                        };
                    }
                }, {
                    key: 'pause',
                    value: function pause() {
                        this.ani && this.ani.pause();
                    }
                }, {
                    key: 'progress',
                    value: function progress(value) {
                        if (this.ani) {
                            // passed a number between 0 and 1
                            if (this.ani.playState !== 'paused') {
                                this.ani.pause();
                            }
                            // don't let the progress finish the animation
                            // leave it off JUST before it's finished
                            value = Math.min(0.999, Math.max(0.001, value));
                            this.ani.currentTime = this.duration * value;
                        }
                    }
                }, {
                    key: 'getCurrentTime',
                    value: function getCurrentTime() {
                        return this.ani && this.ani.currentTime || 0;
                    }
                }, {
                    key: 'playbackRate',
                    value: function playbackRate(value) {
                        this.rate = value;
                        if (this.ani) {
                            this.ani.playbackRate = value;
                        }
                    }
                }, {
                    key: 'dispose',
                    value: function dispose() {
                        this.ele = this.ani = this.effects = this.toEffect = null;
                    }
                }]);

                return Animate;
            })();

            TRANSFORMS = ['translateX', 'translateY', 'translateZ', 'scale', 'scaleX', 'scaleY', 'scaleZ', 'rotate', 'rotateX', 'rotateY', 'rotateZ', 'skewX', 'skewY', 'perspective'];
            ANIMATE_PROPERTIES = TRANSFORMS.concat('opacity');

            // Robert Penner's Easing Functions
            // http://robertpenner.com/easing/
            CUBIC_BEZIERS = {
                // default browser suppored easing
                // ease
                // ease-in
                // ease-out
                // ease-in-out
                // Cubic
                'ease-in-cubic': '0.55,0.055,0.675,0.19',
                'ease-out-cubic': '0.215,0.61,0.355,1',
                'ease-in-Out-cubic': '0.645,0.045,0.355,1',
                // Circ
                'ease-in-circ': '0.6,0.04,0.98,0.335',
                'ease-out-circ': '0.075,0.82,0.165,1',
                'ease-in-out-circ': '0.785,0.135,0.15,0.86',
                // Expo
                'ease-in-expo': '0.95,0.05,0.795,0.035',
                'ease-out-expo': '0.19,1,0.22,1',
                'ease-in-out-expo': '1,0,0,1',
                // Quad
                'ease-in-quad': '0.55,0.085,0.68,0.53',
                'ease-out-quad': '0.25,0.46,0.45,0.94',
                'ease-in-out-quad': '0.455,0.03,0.515,0.955',
                // Quart
                'ease-in-quart': '0.895,0.03,0.685,0.22',
                'ease-out-quart': '0.165,0.84,0.44,1',
                'ease-in-out-quart': '0.77,0,0.175,1',
                // Quint
                'ease-in-quint': '0.755,0.05,0.855,0.06',
                'ease-out-quint': '0.23,1,0.32,1',
                'ease-in-out-quint': '0.86,0,0.07,1',
                // Sine
                'ease-in-sine': '0.47,0,0.745,0.715',
                'ease-out-sine': '0.39,0.575,0.565,1',
                'ease-in-out-sine': '0.445,0.05,0.55,0.95',
                // Back
                'ease-in-back': '0.6,-0.28,0.735,0.045',
                'ease-out-back': '0.175,0.885,0.32,1.275',
                'ease-in-out-back': '0.68,-0.55,0.265,1.55'
            };
            EASING_FN = {
                'elastic': function elastic(pos) {
                    return -1 * Math.pow(4, -8 * pos) * Math.sin((pos * 6 - 1) * (2 * Math.PI) / 2) + 1;
                },
                'swing-from-to': function swingFromTo(pos, opts) {
                    var s = opts.s || 1.70158;
                    return (pos /= 0.5) < 1 ? 0.5 * (pos * pos * (((s *= 1.525) + 1) * pos - s)) : 0.5 * ((pos -= 2) * pos * (((s *= 1.525) + 1) * pos + s) + 2);
                },
                'swing-from': function swingFrom(pos, opts) {
                    var s = opts.s || 1.70158;
                    return pos * pos * ((s + 1) * pos - s);
                },
                'swing-to': function swingTo(pos, opts) {
                    var s = opts.s || 1.70158;
                    return (pos -= 1) * pos * ((s + 1) * pos + s) + 1;
                },
                'bounce': function bounce(pos) {
                    if (pos < 1 / 2.75) {
                        return 7.5625 * pos * pos;
                    } else if (pos < 2 / 2.75) {
                        return 7.5625 * (pos -= 1.5 / 2.75) * pos + 0.75;
                    } else if (pos < 2.5 / 2.75) {
                        return 7.5625 * (pos -= 2.25 / 2.75) * pos + 0.9375;
                    }
                    return 7.5625 * (pos -= 2.625 / 2.75) * pos + 0.984375;
                },
                'bounce-past': function bouncePast(pos) {
                    if (pos < 1 / 2.75) {
                        return 7.5625 * pos * pos;
                    } else if (pos < 2 / 2.75) {
                        return 2 - (7.5625 * (pos -= 1.5 / 2.75) * pos + 0.75);
                    } else if (pos < 2.5 / 2.75) {
                        return 2 - (7.5625 * (pos -= 2.25 / 2.75) * pos + 0.9375);
                    }
                    return 2 - (7.5625 * (pos -= 2.625 / 2.75) * pos + 0.984375);
                },
                'ease-out-bounce': function easeOutBounce(pos) {
                    if (pos < 1 / 2.75) {
                        return 7.5625 * pos * pos;
                    } else if (pos < 2 / 2.75) {
                        return 7.5625 * (pos -= 1.5 / 2.75) * pos + 0.75;
                    } else if (pos < 2.5 / 2.75) {
                        return 7.5625 * (pos -= 2.25 / 2.75) * pos + 0.9375;
                    }
                    return 7.5625 * (pos -= 2.625 / 2.75) * pos + 0.984375;
                },
                'ease-from-to': function easeFromTo(pos) {
                    if ((pos /= 0.5) < 1) return 0.5 * Math.pow(pos, 4);
                    return -0.5 * ((pos -= 2) * Math.pow(pos, 3) - 2);
                },
                'ease-from': function easeFrom(pos, opts) {
                    return Math.pow(pos, opts.s || 4);
                },
                'ease-to': function easeTo(pos, opts) {
                    return Math.pow(pos, opts.s || 0.25);
                },
                /*
                 * scripty2, Thomas Fuchs (MIT Licence)
                 * https://raw.github.com/madrobby/scripty2/master/src/effects/transitions/transitions.js
                 */
                'spring': function spring(pos, opts) {
                    var damping = opts.damping || 4.5;
                    var elasticity = opts.elasticity || 6;
                    return 1 - Math.cos(pos * damping * Math.PI) * Math.exp(-pos * elasticity);
                },
                'sinusoidal': function sinusoidal(pos) {
                    return -Math.cos(pos * Math.PI) / 2 + 0.5;
                }
            };
            AnimationRegistry = {};
        }
    };
});
System.register('ionic/animations/builtins', ['./animation'], function (_export) {
    'use strict';

    var Animation, SlideIn, SlideOut, FadeIn, FadeOut;

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    return {
        setters: [function (_animation) {
            Animation = _animation.Animation;
        }],
        execute: function () {
            SlideIn = (function (_Animation) {
                _inherits(SlideIn, _Animation);

                function SlideIn(element) {
                    _classCallCheck(this, SlideIn);

                    _get(Object.getPrototypeOf(SlideIn.prototype), 'constructor', this).call(this, element);
                    this.easing('cubic-bezier(0.1,0.7,0.1,1)').duration(400).fromTo('translateY', '100%', '0%');
                }

                return SlideIn;
            })(Animation);

            Animation.register('slide-in', SlideIn);

            SlideOut = (function (_Animation2) {
                _inherits(SlideOut, _Animation2);

                function SlideOut(element) {
                    _classCallCheck(this, SlideOut);

                    _get(Object.getPrototypeOf(SlideOut.prototype), 'constructor', this).call(this, element);
                    this.easing('ease-out').duration(250).fromTo('translateY', '0%', '100%');
                }

                return SlideOut;
            })(Animation);

            Animation.register('slide-out', SlideOut);

            FadeIn = (function (_Animation3) {
                _inherits(FadeIn, _Animation3);

                function FadeIn(element) {
                    _classCallCheck(this, FadeIn);

                    _get(Object.getPrototypeOf(FadeIn.prototype), 'constructor', this).call(this, element);
                    this.easing('ease-in').duration(400).fadeIn();
                }

                return FadeIn;
            })(Animation);

            Animation.register('fade-in', FadeIn);

            FadeOut = (function (_Animation4) {
                _inherits(FadeOut, _Animation4);

                function FadeOut(element) {
                    _classCallCheck(this, FadeOut);

                    _get(Object.getPrototypeOf(FadeOut.prototype), 'constructor', this).call(this, element);
                    this.easing('ease-out').duration(250).fadeOut();
                }

                return FadeOut;
            })(Animation);

            Animation.register('fade-out', FadeOut);
        }
    };
});
System.register('ionic/animations/ios-transition', ['./animation'], function (_export) {
    'use strict';

    var Animation, DURATION, EASING, OPACITY, TRANSLATEX, OFF_RIGHT, OFF_LEFT, CENTER, OFF_OPACITY, SHOW_BACK_BTN_CSS, IOSTransition;

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    return {
        setters: [function (_animation) {
            Animation = _animation.Animation;
        }],
        execute: function () {
            DURATION = 550;
            EASING = 'cubic-bezier(0.36,0.66,0.04,1)';
            OPACITY = 'opacity';
            TRANSLATEX = 'translateX';
            OFF_RIGHT = '99.5%';
            OFF_LEFT = '-33%';
            CENTER = '0%';
            OFF_OPACITY = 0.8;
            SHOW_BACK_BTN_CSS = 'show-back-button';

            IOSTransition = (function (_Animation) {
                _inherits(IOSTransition, _Animation);

                function IOSTransition(enteringView, leavingView, opts) {
                    _classCallCheck(this, IOSTransition);

                    _get(Object.getPrototypeOf(IOSTransition.prototype), 'constructor', this).call(this, null, opts);
                    this.duration(DURATION);
                    this.easing(EASING);
                    // what direction is the transition going
                    var backDirection = opts.direction === 'back';
                    // do they have navbars?
                    var enteringHasNavbar = enteringView.hasNavbar();
                    var leavingHasNavbar = leavingView && leavingView.hasNavbar();
                    var enteringPage = new Animation(enteringView.pageRef());
                    enteringPage.before.addClass('show-page');
                    this.add(enteringPage);
                    // entering content
                    var enteringContent = new Animation(enteringView.contentRef());
                    this.add(enteringContent);
                    if (backDirection) {
                        // entering content, back direction
                        enteringContent.fromTo(TRANSLATEX, OFF_LEFT, CENTER).fromTo(OPACITY, OFF_OPACITY, 1);
                    } else {
                        // entering content, forward direction
                        enteringContent.fromTo(TRANSLATEX, OFF_RIGHT, CENTER).fromTo(OPACITY, 1, 1);
                    }
                    if (enteringHasNavbar) {
                        // entering page has a navbar
                        var enteringNavBar = new Animation(enteringView.navbarRef());
                        this.add(enteringNavBar);
                        var enteringTitle = new Animation(enteringView.titleRef());
                        var enteringNavbarItems = new Animation(enteringView.navbarItemRefs());
                        var enteringNavbarBg = new Animation(enteringView.navbarBgRef());
                        var enteringBackButton = new Animation(enteringView.backBtnRef());
                        enteringNavBar.add(enteringTitle).add(enteringNavbarItems).add(enteringNavbarBg).add(enteringBackButton);
                        enteringNavBar.before.addClass('show-navbar');
                        enteringTitle.fadeIn();
                        enteringNavbarItems.fadeIn();
                        // set properties depending on direction
                        if (backDirection) {
                            // entering navbar, back direction
                            enteringTitle.fromTo(TRANSLATEX, OFF_LEFT, CENTER);
                            if (enteringView.enableBack()) {
                                // back direction, entering page has a back button
                                enteringBackButton.before.addClass(SHOW_BACK_BTN_CSS).fadeIn();
                            }
                        } else {
                            // entering navbar, forward direction
                            enteringTitle.fromTo(TRANSLATEX, OFF_RIGHT, CENTER);
                            if (leavingHasNavbar) {
                                // entering navbar, forward direction, and there's a leaving navbar
                                // should just fade in, no sliding
                                enteringNavbarBg.fromTo(TRANSLATEX, CENTER, CENTER).fadeIn();
                            } else {
                                // entering navbar, forward direction, and there's no leaving navbar
                                // should just slide in, no fading in
                                enteringNavbarBg.fromTo(TRANSLATEX, OFF_RIGHT, CENTER).fromTo(OPACITY, 1, 1);
                            }
                            if (enteringView.enableBack()) {
                                // forward direction, entering page has a back button
                                enteringBackButton.before.addClass(SHOW_BACK_BTN_CSS).fadeIn();
                                var enteringBackBtnText = new Animation(enteringView.backBtnTextRef());
                                enteringBackBtnText.fromTo(TRANSLATEX, '100px', '0px');
                                enteringNavBar.add(enteringBackBtnText);
                            } else {
                                enteringBackButton.before.removeClass(SHOW_BACK_BTN_CSS);
                            }
                        }
                    }
                    // setup leaving view
                    if (leavingView) {
                        // leaving content
                        var leavingContent = new Animation(leavingView.contentRef());
                        this.add(leavingContent);
                        if (backDirection) {
                            // leaving content, back direction
                            leavingContent.fromTo(TRANSLATEX, CENTER, '100%').fromTo(OPACITY, 1, 1);
                        } else {
                            // leaving content, forward direction
                            leavingContent.fromTo(TRANSLATEX, CENTER, OFF_LEFT).fromTo(OPACITY, 1, OFF_OPACITY);
                        }
                        if (leavingHasNavbar) {
                            // leaving page has a navbar
                            var leavingNavBar = new Animation(leavingView.navbarRef());
                            var leavingBackButton = new Animation(leavingView.backBtnRef());
                            var leavingTitle = new Animation(leavingView.titleRef());
                            var leavingNavbarItems = new Animation(leavingView.navbarItemRefs());
                            var leavingNavbarBg = new Animation(leavingView.navbarBgRef());
                            leavingNavBar.add(leavingBackButton).add(leavingTitle).add(leavingNavbarItems).add(leavingNavbarBg);
                            this.add(leavingNavBar);
                            // fade out leaving navbar items
                            leavingBackButton.fadeOut();
                            leavingTitle.fadeOut();
                            leavingNavbarItems.fadeOut();
                            if (backDirection) {
                                // leaving navbar, back direction
                                leavingTitle.fromTo(TRANSLATEX, CENTER, '100%');
                                if (enteringHasNavbar) {
                                    // leaving navbar, back direction, and there's an entering navbar
                                    // should just fade out, no sliding
                                    leavingNavbarBg.fromTo(TRANSLATEX, CENTER, CENTER).fadeOut();
                                } else {
                                    // leaving navbar, back direction, and there's no entering navbar
                                    // should just slide out, no fading out
                                    leavingNavbarBg.fromTo(TRANSLATEX, CENTER, '100%').fromTo(OPACITY, 1, 1);
                                }
                                var leavingBackBtnText = new Animation(leavingView.backBtnTextRef());
                                leavingBackBtnText.fromTo(TRANSLATEX, CENTER, 300 + 'px');
                                leavingNavBar.add(leavingBackBtnText);
                            } else {
                                // leaving navbar, forward direction
                                leavingTitle.fromTo(TRANSLATEX, CENTER, OFF_LEFT);
                            }
                        }
                    }
                }

                return IOSTransition;
            })(Animation);

            Animation.register('ios-transition', IOSTransition);
        }
    };
});
System.register('ionic/animations/md-transition', ['./animation'], function (_export) {
    'use strict';

    var Animation, TRANSLATEY, OFF_BOTTOM, CENTER, SHOW_BACK_BTN_CSS, MDTransition;

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    return {
        setters: [function (_animation) {
            Animation = _animation.Animation;
        }],
        execute: function () {
            TRANSLATEY = 'translateY';
            OFF_BOTTOM = '40px';
            CENTER = '0px';
            SHOW_BACK_BTN_CSS = 'show-back-button';

            MDTransition = (function (_Animation) {
                _inherits(MDTransition, _Animation);

                function MDTransition(enteringView, leavingView, opts) {
                    _classCallCheck(this, MDTransition);

                    _get(Object.getPrototypeOf(MDTransition.prototype), 'constructor', this).call(this, null, opts);
                    // what direction is the transition going
                    var backDirection = opts.direction === 'back';
                    // do they have navbars?
                    var enteringHasNavbar = enteringView.hasNavbar();
                    var leavingHasNavbar = leavingView && leavingView.hasNavbar();
                    // entering content item moves in bottom to center
                    var enteringPage = new Animation(enteringView.pageRef());
                    enteringPage.before.addClass('show-page');
                    this.add(enteringPage);
                    if (backDirection) {
                        this.duration(200).easing('cubic-bezier(0.47,0,0.745,0.715)');
                        enteringPage.fromTo(TRANSLATEY, CENTER, CENTER);
                    } else {
                        this.duration(280).easing('cubic-bezier(0.36,0.66,0.04,1)');
                        enteringPage.fromTo(TRANSLATEY, OFF_BOTTOM, CENTER).fadeIn();
                    }
                    if (enteringHasNavbar) {
                        var enteringNavBar = new Animation(enteringView.navbarRef());
                        this.add(enteringNavBar);
                        enteringNavBar.before.addClass('show-navbar');
                        var enteringBackButton = new Animation(enteringView.backBtnRef());
                        this.add(enteringBackButton);
                        if (enteringView.enableBack()) {
                            enteringBackButton.before.addClass(SHOW_BACK_BTN_CSS);
                        } else {
                            enteringBackButton.before.removeClass(SHOW_BACK_BTN_CSS);
                        }
                    }
                    // setup leaving view
                    if (leavingView && backDirection) {
                        // leaving content
                        this.duration(200).easing('cubic-bezier(0.47,0,0.745,0.715)');
                        var leavingPage = new Animation(leavingView.pageRef());
                        this.add(leavingPage.fromTo(TRANSLATEY, CENTER, OFF_BOTTOM).fadeOut());
                    }
                }

                return MDTransition;
            })(Animation);

            Animation.register('md-transition', MDTransition);
        }
    };
});
System.register('ionic/animations/scroll-to', ['../util/dom'], function (_export) {
    'use strict';

    var raf, ScrollTo;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    // decelerating to zero velocity
    function easeOutCubic(t) {
        return --t * t * t + 1;
    }
    return {
        setters: [function (_utilDom) {
            raf = _utilDom.raf;
        }],
        execute: function () {
            ScrollTo = (function () {
                function ScrollTo(ele, x, y, duration) {
                    _classCallCheck(this, ScrollTo);

                    if (typeof ele === 'string') {
                        // string query selector
                        ele = document.querySelector(ele);
                    }
                    if (ele) {
                        if (ele.nativeElement) {
                            // angular ElementRef
                            ele = ele.nativeElement;
                        }
                        if (ele.nodeType === 1) {
                            this._el = ele;
                        }
                    }
                }

                _createClass(ScrollTo, [{
                    key: 'start',
                    value: function start(x, y, duration, tolerance) {
                        // scroll animation loop w/ easing
                        // credit https://gist.github.com/dezinezync/5487119
                        var self = this;
                        if (!self._el) {
                            // invalid element
                            return Promise.resolve();
                        }
                        x = x || 0;
                        y = y || 0;
                        tolerance = tolerance || 0;
                        var ele = self._el;
                        var fromY = ele.scrollTop;
                        var fromX = ele.scrollLeft;
                        var xDistance = Math.abs(x - fromX);
                        var yDistance = Math.abs(y - fromY);
                        if (yDistance <= tolerance && xDistance <= tolerance) {
                            // prevent scrolling if already close to there
                            this._el = ele = null;
                            return Promise.resolve();
                        }
                        return new Promise(function (resolve, reject) {
                            var start = undefined;
                            // start scroll loop
                            self.isPlaying = true;
                            // chill out for a frame first
                            raf(function () {
                                start = Date.now();
                                raf(step);
                            });
                            // scroll loop
                            function step() {
                                var time = Math.min(1, (Date.now() - start) / duration);
                                // where .5 would be 50% of time on a linear scale easedT gives a
                                // fraction based on the easing method
                                var easedT = easeOutCubic(time);
                                if (fromY != y) {
                                    ele.scrollTop = parseInt(easedT * (y - fromY) + fromY, 10);
                                }
                                if (fromX != x) {
                                    ele.scrollLeft = parseInt(easedT * (x - fromX) + fromX, 10);
                                }
                                if (time < 1 && self.isPlaying) {
                                    raf(step);
                                } else if (!self.isPlaying) {
                                    // stopped
                                    this._el = ele = null;
                                    reject();
                                } else {
                                    // done
                                    this._el = ele = null;
                                    resolve();
                                }
                            }
                        });
                    }
                }, {
                    key: 'stop',
                    value: function stop() {
                        this.isPlaying = false;
                    }
                }, {
                    key: 'dispose',
                    value: function dispose() {
                        this.stop();
                        this._el = null;
                    }
                }]);

                return ScrollTo;
            })();

            _export('ScrollTo', ScrollTo);
        }
    };
});
System.register('ionic/components/ion', ['ionic/util/dom'], function (_export) {
    /**
     * Base class for all Ionic components. Exposes some common functionality
     * that all Ionic components need, such as accessing underlying native elements and
     * sending/receiving app-level events.
     */
    'use strict';

    var dom, Ion;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_ionicUtilDom) {
            dom = _ionicUtilDom;
        }],
        execute: function () {
            Ion = (function () {
                function Ion(elementRef, config) {
                    _classCallCheck(this, Ion);

                    this.elementRef = elementRef;
                    this.config = config;
                }

                _createClass(Ion, [{
                    key: 'onInit',
                    value: function onInit() {
                        var cls = this.constructor;
                        if (cls.defaultInputs && this.config) {
                            for (var prop in cls.defaultInputs) {
                                // Priority:
                                // ---------
                                // 1) Value set from within constructor
                                // 2) Value set from the host element's attribute
                                // 3) Value set by the users global config
                                // 4) Value set by the default mode/platform config
                                // 5) Value set from the component's default
                                if (this[prop]) {
                                    // this property has already been set on the instance
                                    // could be from the user setting the element's attribute
                                    // or from the user setting it within the constructor
                                    continue;
                                }
                                // get the property values from a global user/platform config
                                var configVal = this.config.get(prop);
                                if (configVal) {
                                    this[prop] = configVal;
                                    continue;
                                }
                                // wasn't set yet, so go with property's default value
                                this[prop] = cls.defaultInputs[prop];
                            }
                        }
                    }
                }, {
                    key: 'getElementRef',
                    value: function getElementRef() {
                        return this.elementRef;
                    }
                }, {
                    key: 'getNativeElement',
                    value: function getNativeElement() {
                        return this.elementRef.nativeElement;
                    }
                }, {
                    key: 'getDimensions',
                    value: function getDimensions() {
                        return dom.getDimensions(this);
                    }
                }, {
                    key: 'width',
                    value: function width() {
                        return dom.getDimensions(this).width;
                    }
                }, {
                    key: 'height',
                    value: function height() {
                        return dom.getDimensions(this).height;
                    }
                }]);

                return Ion;
            })();

            _export('Ion', Ion);
        }
    };
});
System.register('ionic/config/bootstrap', ['angular2/angular2', 'angular2/router', 'angular2/http', '../components/app/app', './config', '../platform/platform', '../components/overlay/overlay-controller', '../util/form', '../util/keyboard', '../components/action-sheet/action-sheet', '../components/modal/modal', '../components/popup/popup', '../util/events', '../components/nav/nav-registry', '../translation/translate', '../util/feature-detect', '../components/tap-click/tap-click', '../util/dom'], function (_export) {
    'use strict';

    var provide, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy, HTTP_PROVIDERS, IonicApp, Config, Platform, OverlayController, Form, Keyboard, ActionSheet, Modal, Popup, Events, NavRegistry, Translate, FeatureDetect, initTapClick, dom;

    _export('ionicProviders', ionicProviders);

    function ionicProviders() {
        var args = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        var platform = new Platform();
        var navRegistry = new NavRegistry(args.pages);
        var config = args.config;
        if (!(config instanceof Config)) {
            config = new Config(config);
        }
        platform.url(window.location.href);
        platform.userAgent(window.navigator.userAgent);
        platform.navigatorPlatform(window.navigator.platform);
        platform.load();
        config.setPlatform(platform);
        var app = new IonicApp(config);
        var events = new Events();
        initTapClick(window, document, app, config);
        var featureDetect = new FeatureDetect();
        setupDom(window, document, config, platform, featureDetect);
        bindEvents(window, document, platform, events);
        // prepare the ready promise to fire....when ready
        platform.prepareReady(config);
        return [provide(IonicApp, { useValue: app }), provide(Config, { useValue: config }), provide(Platform, { useValue: platform }), provide(FeatureDetect, { useValue: featureDetect }), provide(Events, { useValue: events }), provide(NavRegistry, { useValue: navRegistry }), Form, Keyboard, OverlayController, ActionSheet, Modal, Popup, Translate, ROUTER_PROVIDERS, provide(LocationStrategy, { useClass: HashLocationStrategy }), HTTP_PROVIDERS];
    }

    function setupDom(window, document, config, platform, featureDetect) {
        var bodyEle = document.body;
        if (!bodyEle) {
            return dom.ready(function () {
                applyBodyCss(document, config, platform);
            });
        }
        var versions = platform.versions();
        platform.platforms().forEach(function (platformName) {
            // platform-ios
            var platformClass = 'platform-' + platformName;
            bodyEle.classList.add(platformClass);
            var platformVersion = versions[platformName];
            if (platformVersion) {
                // platform-ios9
                platformClass += platformVersion.major;
                bodyEle.classList.add(platformClass);
                // platform-ios9_3
                bodyEle.classList.add(platformClass + '_' + platformVersion.minor);
            }
        });
        // set the mode class name
        // ios/md
        bodyEle.classList.add(config.get('mode'));
        // touch devices should not use :hover CSS pseudo
        // enable :hover CSS when the "hoverCSS" setting is not false
        if (config.get('hoverCSS') !== false) {
            bodyEle.classList.add('enable-hover');
        }
        // run feature detection tests
        featureDetect.run(window, document);
    }
    /**
     * Bind some global events and publish on the 'app' channel
     */
    function bindEvents(window, document, platform, events) {
        window.addEventListener('online', function (ev) {
            events.publish('app:online', ev);
        }, false);
        window.addEventListener('offline', function (ev) {
            events.publish('app:offline', ev);
        }, false);
        window.addEventListener('orientationchange', function (ev) {
            events.publish('app:rotated', ev);
        });
        // When that status taps, we respond
        window.addEventListener('statusTap', function (ev) {
            // TODO: Make this more better
            var el = document.elementFromPoint(platform.width() / 2, platform.height() / 2);
            if (!el) {
                return;
            }
            var content = dom.closest(el, 'scroll-content');
            if (content) {
                var scrollTo = new ScrollTo(content);
                scrollTo.start(0, 0, 300, 0);
            }
        });
        // start listening for resizes XXms after the app starts
        setTimeout(function () {
            window.addEventListener('resize', function () {
                platform.windowResize();
            });
        }, 2000);
    }
    return {
        setters: [function (_angular2Angular2) {
            provide = _angular2Angular2.provide;
        }, function (_angular2Router) {
            ROUTER_PROVIDERS = _angular2Router.ROUTER_PROVIDERS;
            LocationStrategy = _angular2Router.LocationStrategy;
            HashLocationStrategy = _angular2Router.HashLocationStrategy;
        }, function (_angular2Http) {
            HTTP_PROVIDERS = _angular2Http.HTTP_PROVIDERS;
        }, function (_componentsAppApp) {
            IonicApp = _componentsAppApp.IonicApp;
        }, function (_config) {
            Config = _config.Config;
        }, function (_platformPlatform) {
            Platform = _platformPlatform.Platform;
        }, function (_componentsOverlayOverlayController) {
            OverlayController = _componentsOverlayOverlayController.OverlayController;
        }, function (_utilForm) {
            Form = _utilForm.Form;
        }, function (_utilKeyboard) {
            Keyboard = _utilKeyboard.Keyboard;
        }, function (_componentsActionSheetActionSheet) {
            ActionSheet = _componentsActionSheetActionSheet.ActionSheet;
        }, function (_componentsModalModal) {
            Modal = _componentsModalModal.Modal;
        }, function (_componentsPopupPopup) {
            Popup = _componentsPopupPopup.Popup;
        }, function (_utilEvents) {
            Events = _utilEvents.Events;
        }, function (_componentsNavNavRegistry) {
            NavRegistry = _componentsNavNavRegistry.NavRegistry;
        }, function (_translationTranslate) {
            Translate = _translationTranslate.Translate;
        }, function (_utilFeatureDetect) {
            FeatureDetect = _utilFeatureDetect.FeatureDetect;
        }, function (_componentsTapClickTapClick) {
            initTapClick = _componentsTapClickTapClick.initTapClick;
        }, function (_utilDom) {
            dom = _utilDom;
        }],
        execute: function () {}
    };
});
System.register('ionic/config/config', ['../platform/platform', '../util/util'], function (_export) {
    /**
    * @ngdoc service
    * @name Config
    * @module ionic
    * @description
    * Config allows you to set the modes of your components
    */

    /**
     * Config lets you change multiple or a single value in an apps mode configuration. Things such as tab placement, icon changes, and view animations can be set here.
     *
     * ```ts
     * @App({
     *   template: `<ion-nav [root]="root"></ion-nav>`
     *   config: {
     *     backButtonText: 'Go Back',
     *     iconMode: 'ios',
     *     modalEnter: 'modal-slide-in',
     *     modalLeave: 'modal-slide-out',
     *     tabbarPlacement: 'bottom',
     *     pageTransition: 'ios',
     *   }
     * })
     * ```
     *
     * Config can be overwritting at multiple levels, allowing deeper configuration. Taking the example from earlier, we can override any setting we want based on a platform.
     * ```ts
     * @App({
     *   template: `<ion-nav [root]="root"></ion-nav>`
     *   config: {
     *     tabbarPlacement: 'bottom',
     *     platforms: {
     *      ios: {
     *        tabbarPlacement: 'top',
     *      }
     *     }
     *   }
     * })
     * ```
     *
     * We could also configure these values at a component level. Take `tabbarPlacement`, we can configure this as a property on our `ion-tabs`.
     *
     * ```html
     * <ion-tabs tabbar-placement="top">
     *    <ion-tab tab-title="Dash" tab-icon="pulse" [root]="tabRoot"></ion-tab>
     *  </ion-tabs>
     * ```
     *
     * The property will override anything else set in the apps.
     *
     * The last way we could configure is through URL query strings. This is useful for testing while in the browser.
     * Simply add `?ionic<PROPERTYNAME>=<value>` to the url.
     *
     * ```
     * http://localhost:8100/?ionicTabbarPlacement=bottom
     * ```
    **/
    'use strict';

    var Platform, isObject, isDefined, isFunction, isArray, Config, modeConfigs;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_platformPlatform) {
            Platform = _platformPlatform.Platform;
        }, function (_utilUtil) {
            isObject = _utilUtil.isObject;
            isDefined = _utilUtil.isDefined;
            isFunction = _utilUtil.isFunction;
            isArray = _utilUtil.isArray;
        }],
        execute: function () {
            Config = (function () {
                function Config(config) {
                    _classCallCheck(this, Config);

                    this._s = config && isObject(config) && !isArray(config) ? config : {};
                    this._c = {}; // cached values
                }

                /**
                 * For setting and getting multiple config values
                 */
                /**
                 * @private
                 * @name settings()
                 * @description
                 */

                _createClass(Config, [{
                    key: 'settings',
                    value: function settings() {
                        var args = arguments;
                        switch (args.length) {
                            case 0:
                                return this._s;
                            case 1:
                                // settings({...})
                                this._s = args[0];
                                this._c = {}; // clear cache
                                break;
                            case 2:
                                // settings('ios', {...})
                                this._s.platforms = this._s.platforms || {};
                                this._s.platforms[args[0]] = args[1];
                                this._c = {}; // clear cache
                                break;
                        }
                        return this;
                    }

                    /**
                    * For setting a single config values
                    */
                    /**
                     * @private
                     * @name set()
                     * @description
                     */
                }, {
                    key: 'set',
                    value: function set() {
                        var args = arguments;
                        var arg0 = args[0];
                        var arg1 = args[1];
                        switch (args.length) {
                            case 2:
                                // set('key', 'value') = set key/value pair
                                // arg1 = value
                                this._s[arg0] = arg1;
                                delete this._c[arg0]; // clear cache
                                break;
                            case 3:
                                // setting('ios', 'key', 'value') = set key/value pair for platform
                                // arg0 = platform
                                // arg1 = key
                                // arg2 = value
                                this._s.platforms = this._s.platforms || {};
                                this._s.platforms[arg0] = this._s.platforms[arg0] || {};
                                this._s.platforms[arg0][arg1] = args[2];
                                delete this._c[arg1]; // clear cache
                                break;
                        }
                        return this;
                    }

                    /**
                     * For getting a single config values
                     */
                    /**
                     * @private
                     * @name get()
                     * @description
                     */
                }, {
                    key: 'get',
                    value: function get(key) {
                        if (!isDefined(this._c[key])) {
                            // if the value was already set this will all be skipped
                            // if there was no user config then it'll check each of
                            // the user config's platforms, which already contains
                            // settings from default platform configs
                            var userPlatformValue = undefined;
                            var userDefaultValue = this._s[key];
                            var userPlatformModeValue = undefined;
                            var userDefaultModeValue = undefined;
                            var platformValue = undefined;
                            var platformModeValue = undefined;
                            var configObj = null;
                            if (this._platform) {
                                var queryStringValue = this._platform.query('ionic' + key.toLowerCase());
                                if (isDefined(queryStringValue)) {
                                    return this._c[key] = queryStringValue === 'true' ? true : queryStringValue === 'false' ? false : queryStringValue;
                                }
                                // check the platform settings object for this value
                                // loop though each of the active platforms
                                // array of active platforms, which also knows the hierarchy,
                                // with the last one the most important
                                var activePlatformKeys = this._platform.platforms();
                                // loop through all of the active platforms we're on
                                for (var i = 0, l = activePlatformKeys.length; i < l; i++) {
                                    // get user defined platform values
                                    if (this._s.platforms) {
                                        configObj = this._s.platforms[activePlatformKeys[i]];
                                        if (configObj) {
                                            if (isDefined(configObj[key])) {
                                                userPlatformValue = configObj[key];
                                            }
                                            configObj = Config.getModeConfig(configObj.mode);
                                            if (configObj && isDefined(configObj[key])) {
                                                userPlatformModeValue = configObj[key];
                                            }
                                        }
                                    }
                                    // get default platform's setting
                                    configObj = Platform.get(activePlatformKeys[i]);
                                    if (configObj && configObj.settings) {
                                        if (isDefined(configObj.settings[key])) {
                                            // found a setting for this platform
                                            platformValue = configObj.settings[key];
                                        }
                                        configObj = Config.getModeConfig(configObj.settings.mode);
                                        if (configObj && isDefined(configObj[key])) {
                                            // found setting for this platform's mode
                                            platformModeValue = configObj[key];
                                        }
                                    }
                                }
                            }
                            configObj = Config.getModeConfig(this._s.mode);
                            if (configObj && isDefined(configObj[key])) {
                                userDefaultModeValue = configObj[key];
                            }
                            // cache the value
                            this._c[key] = isDefined(userPlatformValue) ? userPlatformValue : isDefined(userDefaultValue) ? userDefaultValue : isDefined(userPlatformModeValue) ? userPlatformModeValue : isDefined(userDefaultModeValue) ? userDefaultModeValue : isDefined(platformValue) ? platformValue : isDefined(platformModeValue) ? platformModeValue : null;
                        }
                        // return key's value
                        // either it came directly from the user config
                        // or it was from the users platform configs
                        // or it was from the default platform configs
                        // in that order
                        if (isFunction(this._c[key])) {
                            return this._c[key](this._platform);
                        }
                        return this._c[key];
                    }

                    /**
                     * @private
                     */
                }, {
                    key: 'setPlatform',
                    value: function setPlatform(platform) {
                        this._platform = platform;
                    }
                }], [{
                    key: 'setModeConfig',
                    value: function setModeConfig(mode, config) {
                        modeConfigs[mode] = config;
                    }
                }, {
                    key: 'getModeConfig',
                    value: function getModeConfig(mode) {
                        return modeConfigs[mode] || null;
                    }
                }]);

                return Config;
            })();

            _export('Config', Config);

            modeConfigs = {};
        }
    };
});
System.register('ionic/config/decorators', ['angular2/angular2', 'ionic/util', './bootstrap', './directives'], function (_export) {
    /**
     * _For more information on how pages are created, see the [NavController API
     * reference](../../components/nav/NavController/#creating_pages)._
     *
     * The Page decorator indicates that the decorated class is an Ionic
     * navigation component, meaning it can be navigated to using a NavController.
     *
     * Pages have all [IONIC_DIRECTIVES](../IONIC_DIRECTIVES/), which include
     * all Ionic components and directives, as well as Angular's [CORE_DIRECTIVES](https://angular.io/docs/js/latest/api/core/CORE_DIRECTIVES-const.html)
     * and [FORM_DIRECTIVES](https://angular.io/docs/js/latest/api/core/FORM_DIRECTIVES-const.html),
     * already provided to them, so you only need to supply custom components and
     * directives to your pages:
     *
     * ```ts
     * @Page({
     *   template: `
     *     <ion-checkbox my-custom-dir>
     *     </ion-checkbox>`
     *   directives: [MyCustomDirective]
     * })
     * class MyPage {}
     * ```
     * Here [Checkbox](../../../components/checkbox/Checkbox/) will load because
     * it is in IONIC_DIRECTIVES, so there is no need to add it to the `directives`
     * array.
     *
     * For custom components that use Ionic components, you will need to include
     * IONIC_DIRECTIVES in the `directives` array:
     *
     * ```ts
     * import {IONIC_DIRECTIVES} from 'ionic/ionic';
     * @Component({
     *   selector: 'my-component'
     *   template: `<div class="my-style">
     *   						  <ion-checkbox></ion-checkbox>
     *   						</div>`,
     *   directives: [IONIC_DIRECTIVES]
     * })
     * class MyCustomCheckbox {}
     *```
     * Alternatively, you could:
     * ```ts
     * import {Checkbox, Icon} from 'ionic/ionic'
     * ```
     * along with any other components and add them individually:
     * ```
     * @Component({
     *   ...
     *   directives: [Checkbox, Icon]
     * })
     * ```
     * However, using IONIC_DIRECTIVES will always *Just Work* with no
     * performance overhead, so there is really no reason to not always use it.
     *
     * Pages have their content automatically wrapped in `<ion-view>`, so although
     * you may see these tags if you inspect your markup, you don't need to include
     * them in your templates.
     */
    'use strict';

    var Component, bootstrap, util, ionicProviders, IONIC_DIRECTIVES;

    /**
     * @private
     */

    _export('Page', Page);

    /**
     * @private
     */

    _export('ConfigComponent', ConfigComponent);

    _export('App', App);

    /**
     * TODO
     */

    function Page() {
        var config = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        return function (cls) {
            config.selector = 'ion-page';
            config.directives = config.directives ? config.directives.concat(IONIC_DIRECTIVES) : IONIC_DIRECTIVES;
            config.host = config.host || {};
            config.host['[hidden]'] = '_hidden';
            config.host['[class.tab-subpage]'] = '_tabSubPage';
            var annotations = Reflect.getMetadata('annotations', cls) || [];
            annotations.push(new Component(config));
            Reflect.defineMetadata('annotations', annotations, cls);
            return cls;
        };
    }

    function ConfigComponent(config) {
        return function (cls) {
            var annotations = Reflect.getMetadata('annotations', cls) || [];
            annotations.push(new Component(appendConfig(cls, config)));
            Reflect.defineMetadata('annotations', annotations, cls);
            return cls;
        };
    }

    function appendConfig(cls, config) {
        config.host = config.host || {};
        cls.defaultInputs = config.defaultInputs || {};
        config.inputs = config.inputs || [];
        for (var prop in cls.defaultInputs) {
            // add the property to the component "inputs"
            config.inputs.push(prop);
            // set the component "hostProperties", so the instance's
            // input value will be used to set the element's attribute
            config.host['[attr.' + util.pascalCaseToDashCase(prop) + ']'] = prop;
        }
        cls.delegates = config.delegates;
        return config;
    }
    function App() {
        var args = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        return function (cls) {
            // get current annotations
            var annotations = Reflect.getMetadata('annotations', cls) || [];
            args.selector = 'ion-app';
            // auto add Ionic directives
            args.directives = args.directives ? args.directives.concat(IONIC_DIRECTIVES) : IONIC_DIRECTIVES;
            // if no template was provided, default so it has a root <ion-nav>
            if (!args.templateUrl && !args.template) {
                args.template = '<ion-nav></ion-nav>';
            }
            // create @Component
            annotations.push(new Component(args));
            // redefine with added annotations
            Reflect.defineMetadata('annotations', annotations, cls);
            console.time('bootstrap');
            bootstrap(cls, ionicProviders(args)).then(function () {
                console.timeEnd('bootstrap');
            });
            return cls;
        };
    }

    return {
        setters: [function (_angular2Angular2) {
            Component = _angular2Angular2.Component;
            bootstrap = _angular2Angular2.bootstrap;
        }, function (_ionicUtil) {
            util = _ionicUtil;
        }, function (_bootstrap) {
            ionicProviders = _bootstrap.ionicProviders;
        }, function (_directives) {
            IONIC_DIRECTIVES = _directives.IONIC_DIRECTIVES;
        }],
        execute: function () {}
    };
});
System.register('ionic/config/directives', ['angular2/angular2', '../components/overlay/overlay', '../components/menu/menu', '../components/menu/menu-toggle', '../components/menu/menu-close', '../components/button/button', '../components/blur/blur', '../components/content/content', '../components/scroll/scroll', '../components/scroll/pull-to-refresh', '../components/slides/slides', '../components/tabs/tabs', '../components/tabs/tab', '../components/list/list', '../components/item/item', '../components/item/item-sliding', '../components/toolbar/toolbar', '../components/icon/icon', '../components/checkbox/checkbox', '../components/switch/switch', '../components/text-input/text-input', '../components/text-input/label', '../components/segment/segment', '../components/radio/radio', '../components/searchbar/searchbar', '../components/nav/nav', '../components/nav/nav-push', '../components/nav/nav-router', '../components/navbar/navbar', '../components/app/id', '../components/show-hide-when/show-hide-when'], function (_export) {
    /**
     * The core Ionic directives as well as Angular's CORE_DIRECTIVES and
     * FORM_DIRECTIVES.  Automatically available in every [@Page](../Page/) template.
     */
    'use strict';

    var CORE_DIRECTIVES, FORM_DIRECTIVES, OverlayNav, Menu, MenuToggle, MenuClose, Button, Blur, Content, Scroll, Refresher, Slides, Slide, SlideLazy, Tabs, Tab, List, ListHeader, Item, ItemSliding, Toolbar, ToolbarTitle, ToolbarItem, Icon, Checkbox, Switch, TextInput, TextInputElement, Label, Segment, SegmentButton, RadioGroup, RadioButton, SearchBar, Nav, NavPush, NavPop, NavRouter, NavbarTemplate, Navbar, IdRef, ShowWhen, HideWhen, IONIC_DIRECTIVES;
    return {
        setters: [function (_angular2Angular2) {
            CORE_DIRECTIVES = _angular2Angular2.CORE_DIRECTIVES;
            FORM_DIRECTIVES = _angular2Angular2.FORM_DIRECTIVES;
        }, function (_componentsOverlayOverlay) {
            OverlayNav = _componentsOverlayOverlay.OverlayNav;
        }, function (_componentsMenuMenu) {
            Menu = _componentsMenuMenu.Menu;
        }, function (_componentsMenuMenuToggle) {
            MenuToggle = _componentsMenuMenuToggle.MenuToggle;
        }, function (_componentsMenuMenuClose) {
            MenuClose = _componentsMenuMenuClose.MenuClose;
        }, function (_componentsButtonButton) {
            Button = _componentsButtonButton.Button;
        }, function (_componentsBlurBlur) {
            Blur = _componentsBlurBlur.Blur;
        }, function (_componentsContentContent) {
            Content = _componentsContentContent.Content;
        }, function (_componentsScrollScroll) {
            Scroll = _componentsScrollScroll.Scroll;
        }, function (_componentsScrollPullToRefresh) {
            Refresher = _componentsScrollPullToRefresh.Refresher;
        }, function (_componentsSlidesSlides) {
            Slides = _componentsSlidesSlides.Slides;
            Slide = _componentsSlidesSlides.Slide;
            SlideLazy = _componentsSlidesSlides.SlideLazy;
        }, function (_componentsTabsTabs) {
            Tabs = _componentsTabsTabs.Tabs;
        }, function (_componentsTabsTab) {
            Tab = _componentsTabsTab.Tab;
        }, function (_componentsListList) {
            List = _componentsListList.List;
            ListHeader = _componentsListList.ListHeader;
        }, function (_componentsItemItem) {
            Item = _componentsItemItem.Item;
        }, function (_componentsItemItemSliding) {
            ItemSliding = _componentsItemItemSliding.ItemSliding;
        }, function (_componentsToolbarToolbar) {
            Toolbar = _componentsToolbarToolbar.Toolbar;
            ToolbarTitle = _componentsToolbarToolbar.ToolbarTitle;
            ToolbarItem = _componentsToolbarToolbar.ToolbarItem;
        }, function (_componentsIconIcon) {
            Icon = _componentsIconIcon.Icon;
        }, function (_componentsCheckboxCheckbox) {
            Checkbox = _componentsCheckboxCheckbox.Checkbox;
        }, function (_componentsSwitchSwitch) {
            Switch = _componentsSwitchSwitch.Switch;
        }, function (_componentsTextInputTextInput) {
            TextInput = _componentsTextInputTextInput.TextInput;
            TextInputElement = _componentsTextInputTextInput.TextInputElement;
        }, function (_componentsTextInputLabel) {
            Label = _componentsTextInputLabel.Label;
        }, function (_componentsSegmentSegment) {
            Segment = _componentsSegmentSegment.Segment;
            SegmentButton = _componentsSegmentSegment.SegmentButton;
        }, function (_componentsRadioRadio) {
            RadioGroup = _componentsRadioRadio.RadioGroup;
            RadioButton = _componentsRadioRadio.RadioButton;
        }, function (_componentsSearchbarSearchbar) {
            SearchBar = _componentsSearchbarSearchbar.SearchBar;
        }, function (_componentsNavNav) {
            Nav = _componentsNavNav.Nav;
        }, function (_componentsNavNavPush) {
            NavPush = _componentsNavNavPush.NavPush;
            NavPop = _componentsNavNavPush.NavPop;
        }, function (_componentsNavNavRouter) {
            NavRouter = _componentsNavNavRouter.NavRouter;
        }, function (_componentsNavbarNavbar) {
            NavbarTemplate = _componentsNavbarNavbar.NavbarTemplate;
            Navbar = _componentsNavbarNavbar.Navbar;
        }, function (_componentsAppId) {
            IdRef = _componentsAppId.IdRef;
        }, function (_componentsShowHideWhenShowHideWhen) {
            ShowWhen = _componentsShowHideWhenShowHideWhen.ShowWhen;
            HideWhen = _componentsShowHideWhenShowHideWhen.HideWhen;
        }],
        execute: function () {
            IONIC_DIRECTIVES = [
            // Angular
            CORE_DIRECTIVES, FORM_DIRECTIVES,
            // Content
            OverlayNav, Menu, MenuToggle, MenuClose, Button, Blur, Content, Scroll, Refresher,
            // Lists
            List, ListHeader, Item, ItemSliding,
            // Slides
            Slides, Slide, SlideLazy,
            // Tabs
            Tabs, Tab,
            // Toolbar
            Toolbar, ToolbarTitle, ToolbarItem,
            // Media
            Icon,
            // Forms
            SearchBar, Segment, SegmentButton, Checkbox, RadioGroup, RadioButton, Switch, TextInput, TextInputElement, Label,
            // Nav
            Nav, NavbarTemplate, Navbar, NavPush, NavPop, NavRouter, IdRef, ShowWhen, HideWhen];

            _export('IONIC_DIRECTIVES', IONIC_DIRECTIVES);
        }
    };
});
System.register('ionic/config/modes', ['./config'], function (_export) {
    // iOS Mode Settings
    'use strict';

    var Config;
    return {
        setters: [function (_config) {
            Config = _config.Config;
        }],
        execute: function () {
            Config.setModeConfig('ios', {
                activator: 'highlight',
                actionSheetEnter: 'action-sheet-slide-in',
                actionSheetLeave: 'action-sheet-slide-out',
                actionSheetCancelIcon: '',
                actionSheetDestructiveIcon: '',
                backButtonText: 'Back',
                backButtonIcon: 'ion-ios-arrow-back',
                iconMode: 'ios',
                menuType: 'reveal',
                modalEnter: 'modal-slide-in',
                modalLeave: 'modal-slide-out',
                pageTransition: 'ios-transition',
                pageTransitionDelay: 16,
                popupEnter: 'popup-pop-in',
                popupLeave: 'popup-pop-out',
                tabbarPlacement: 'bottom'
            });
            // Material Design Mode Settings
            Config.setModeConfig('md', {
                activator: 'ripple',
                actionSheetEnter: 'action-sheet-md-slide-in',
                actionSheetLeave: 'action-sheet-md-slide-out',
                actionSheetCancelIcon: 'ion-md-close',
                actionSheetDestructiveIcon: 'ion-md-trash',
                backButtonText: '',
                backButtonIcon: 'ion-md-arrow-back',
                iconMode: 'md',
                menuType: 'overlay',
                modalEnter: 'modal-md-slide-in',
                modalLeave: 'modal-md-slide-out',
                pageTransition: 'md-transition',
                pageTransitionDelay: 120,
                popupEnter: 'popup-md-pop-in',
                popupLeave: 'popup-md-pop-out',
                tabbarHighlight: true,
                tabbarPlacement: 'top',
                tabSubPages: true
            });
        }
    };
});
System.register('ionic/gestures/drag-gesture', ['ionic/gestures/gesture', 'ionic/util'], function (_export) {
    'use strict';

    var Gesture, util, DragGesture;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    return {
        setters: [function (_ionicGesturesGesture) {
            Gesture = _ionicGesturesGesture.Gesture;
        }, function (_ionicUtil) {
            util = _ionicUtil;
        }],
        execute: function () {
            DragGesture = (function (_Gesture) {
                _inherits(DragGesture, _Gesture);

                function DragGesture(element) {
                    var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

                    _classCallCheck(this, DragGesture);

                    util.defaults(opts, {});
                    _get(Object.getPrototypeOf(DragGesture.prototype), 'constructor', this).call(this, element, opts);
                }

                _createClass(DragGesture, [{
                    key: 'listen',
                    value: function listen() {
                        var _this = this;

                        _get(Object.getPrototypeOf(DragGesture.prototype), 'listen', this).call(this);
                        this.on('panstart', function (ev) {
                            if (_this.onDragStart(ev) !== false) {
                                _this.dragging = true;
                            }
                        });
                        this.on('panmove', function (ev) {
                            if (!_this.dragging) return;
                            if (_this.onDrag(ev) === false) {
                                _this.dragging = false;
                            }
                        });
                        this.on('panend', function (ev) {
                            if (!_this.dragging) return;
                            _this.onDragEnd(ev);
                            _this.dragging = false;
                        });
                        this.hammertime.get('pan').set(this._options);
                    }
                }, {
                    key: 'onDrag',
                    value: function onDrag() {}
                }, {
                    key: 'onDragStart',
                    value: function onDragStart() {}
                }, {
                    key: 'onDragEnd',
                    value: function onDragEnd() {}
                }]);

                return DragGesture;
            })(Gesture);

            _export('DragGesture', DragGesture);
        }
    };
});
System.register('ionic/gestures/gesture', ['ionic/util', 'ionic/gestures/hammer'], function (_export) {
    /**
     * A gesture recognizer class.
     *
     * TODO(mlynch): Re-enable the DOM event simulation that was causing issues (or verify hammer does this already, it might);
     */
    'use strict';

    var util, Hammer, Gesture;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_ionicUtil) {
            util = _ionicUtil;
        }, function (_ionicGesturesHammer) {
            Hammer = _ionicGesturesHammer.Hammer;
        }],
        execute: function () {
            Gesture = (function () {
                function Gesture(element) {
                    var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

                    _classCallCheck(this, Gesture);

                    util.defaults(opts, {
                        domEvents: true
                    });
                    this.element = element;
                    // Map 'x' or 'y' string to hammerjs opts
                    this.direction = opts.direction || 'x';
                    opts.direction = this.direction === 'x' ? Hammer.DIRECTION_HORIZONTAL : Hammer.DIRECTION_VERTICAL;
                    this._options = opts;
                    this._callbacks = {};
                }

                _createClass(Gesture, [{
                    key: 'options',
                    value: function options() {
                        var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

                        util.extend(this._options, opts);
                    }
                }, {
                    key: 'on',
                    value: function on(type, cb) {
                        if (type == 'pinch' || type == 'rotate') {
                            this.hammertime.get('pinch').set({ enable: true });
                        }
                        this.hammertime.on(type, cb);
                        (this._callbacks[type] || (this._callbacks[type] = [])).push(cb);
                    }
                }, {
                    key: 'off',
                    value: function off(type, cb) {
                        this.hammertime.off(type, this._callbacks[type] ? cb : null);
                    }
                }, {
                    key: 'listen',
                    value: function listen() {
                        this.hammertime = Hammer(this.element, this._options);
                    }
                }, {
                    key: 'unlisten',
                    value: function unlisten() {
                        if (this.hammertime) {
                            for (var type in this._callbacks) {
                                for (var i = 0; i < this._callbacks[type].length; i++) {
                                    this.hammertime.off(type, this._callbacks[type]);
                                }
                            }
                            this.hammertime.destroy();
                            this.hammertime = null;
                            this._callbacks = {};
                        }
                    }
                }, {
                    key: 'destroy',
                    value: function destroy() {
                        this.unlisten();
                    }
                }]);

                return Gesture;
            })();

            _export('Gesture', Gesture);
        }
    };
});
System.register('ionic/gestures/hammer', [], function (_export) {
    /*! Hammer.JS - v2.0.4 - 2014-09-28
     * http://hammerjs.github.io/
     *
     * Copyright (c) 2014 Jorik Tangelder;
     * Licensed under the MIT license */
    //(function(window, document, exportName, undefined) {
    //'use strict';
    'use strict';

    var VENDOR_PREFIXES, TEST_ELEMENT, TYPE_FUNCTION, round, abs, now, _uniqueId, MOBILE_REGEX, SUPPORT_TOUCH, SUPPORT_POINTER_EVENTS, SUPPORT_ONLY_TOUCH, INPUT_TYPE_TOUCH, INPUT_TYPE_PEN, INPUT_TYPE_MOUSE, INPUT_TYPE_KINECT, COMPUTE_INTERVAL, INPUT_START, INPUT_MOVE, INPUT_END, INPUT_CANCEL, DIRECTION_NONE, DIRECTION_LEFT, DIRECTION_RIGHT, DIRECTION_UP, DIRECTION_DOWN, DIRECTION_HORIZONTAL, DIRECTION_VERTICAL, DIRECTION_ALL, PROPS_XY, PROPS_CLIENT_XY, MOUSE_INPUT_MAP, MOUSE_ELEMENT_EVENTS, MOUSE_WINDOW_EVENTS, POINTER_INPUT_MAP, IE10_POINTER_TYPE_ENUM, POINTER_ELEMENT_EVENTS, POINTER_WINDOW_EVENTS, SINGLE_TOUCH_INPUT_MAP, SINGLE_TOUCH_TARGET_EVENTS, SINGLE_TOUCH_WINDOW_EVENTS, TOUCH_INPUT_MAP, TOUCH_TARGET_EVENTS, PREFIXED_TOUCH_ACTION, NATIVE_TOUCH_ACTION, TOUCH_ACTION_COMPUTE, TOUCH_ACTION_AUTO, TOUCH_ACTION_MANIPULATION, TOUCH_ACTION_NONE, TOUCH_ACTION_PAN_X, TOUCH_ACTION_PAN_Y, STATE_POSSIBLE, STATE_BEGAN, STATE_CHANGED, STATE_ENDED, STATE_RECOGNIZED, STATE_CANCELLED, STATE_FAILED, STOP, FORCED_STOP;

    /**
     * set a timeout with a given scope
     * @param {Function} fn
     * @param {Number} timeout
     * @param {Object} context
     * @returns {number}
     */
    function setTimeoutContext(fn, timeout, context) {
        return setTimeout(bindFn(fn, context), timeout);
    }
    /**
     * if the argument is an array, we want to execute the fn on each entry
     * if it aint an array we don't want to do a thing.
     * this is used by all the methods that accept a single and array argument.
     * @param {*|Array} arg
     * @param {String} fn
     * @param {Object} [context]
     * @returns {Boolean}
     */
    function invokeArrayArg(arg, fn, context) {
        if (Array.isArray(arg)) {
            each(arg, context[fn], context);
            return true;
        }
        return false;
    }
    /**
     * walk objects and arrays
     * @param {Object} obj
     * @param {Function} iterator
     * @param {Object} context
     */
    function each(obj, iterator, context) {
        var i;
        if (!obj) {
            return;
        }
        if (obj.forEach) {
            obj.forEach(iterator, context);
        } else if (obj.length !== undefined) {
            i = 0;
            while (i < obj.length) {
                iterator.call(context, obj[i], i, obj);
                i++;
            }
        } else {
            for (i in obj) {
                obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
            }
        }
    }
    /**
     * extend object.
     * means that properties in dest will be overwritten by the ones in src.
     * @param {Object} dest
     * @param {Object} src
     * @param {Boolean} [merge]
     * @returns {Object} dest
     */
    function extend(dest, src, merge) {
        var keys = Object.keys(src);
        var i = 0;
        while (i < keys.length) {
            if (!merge || merge && dest[keys[i]] === undefined) {
                dest[keys[i]] = src[keys[i]];
            }
            i++;
        }
        return dest;
    }
    /**
     * merge the values from src in the dest.
     * means that properties that exist in dest will not be overwritten by src
     * @param {Object} dest
     * @param {Object} src
     * @returns {Object} dest
     */
    function merge(dest, src) {
        return extend(dest, src, true);
    }
    /**
     * simple class inheritance
     * @param {Function} child
     * @param {Function} base
     * @param {Object} [properties]
     */
    function inherit(child, base, properties) {
        var baseP = base.prototype,
            childP;
        childP = child.prototype = Object.create(baseP);
        childP.constructor = child;
        childP._super = baseP;
        if (properties) {
            extend(childP, properties);
        }
    }
    /**
     * simple function bind
     * @param {Function} fn
     * @param {Object} context
     * @returns {Function}
     */
    function bindFn(fn, context) {
        return function boundFn() {
            return fn.apply(context, arguments);
        };
    }
    /**
     * let a boolean value also be a function that must return a boolean
     * this first item in args will be used as the context
     * @param {Boolean|Function} val
     * @param {Array} [args]
     * @returns {Boolean}
     */
    function boolOrFn(val, args) {
        if (typeof val == TYPE_FUNCTION) {
            return val.apply(args ? args[0] || undefined : undefined, args);
        }
        return val;
    }
    /**
     * use the val2 when val1 is undefined
     * @param {*} val1
     * @param {*} val2
     * @returns {*}
     */
    function ifUndefined(val1, val2) {
        return val1 === undefined ? val2 : val1;
    }
    /**
     * addEventListener with multiple events at once
     * @param {EventTarget} target
     * @param {String} types
     * @param {Function} handler
     */
    function addEventListeners(target, types, handler) {
        each(splitStr(types), function (type) {
            //console.debug('hammer addEventListener', type, target.tagName);
            target.addEventListener(type, handler, false);
        });
    }
    /**
     * removeEventListener with multiple events at once
     * @param {EventTarget} target
     * @param {String} types
     * @param {Function} handler
     */
    function removeEventListeners(target, types, handler) {
        each(splitStr(types), function (type) {
            //console.debug('hammer removeEventListener', type, target.tagName);
            target.removeEventListener(type, handler, false);
        });
    }
    /**
     * find if a node is in the given parent
     * @method hasParent
     * @param {HTMLElement} node
     * @param {HTMLElement} parent
     * @return {Boolean} found
     */
    function hasParent(node, parent) {
        while (node) {
            if (node == parent) {
                return true;
            }
            node = node.parentNode;
        }
        return false;
    }
    /**
     * small indexOf wrapper
     * @param {String} str
     * @param {String} find
     * @returns {Boolean} found
     */
    function inStr(str, find) {
        return str.indexOf(find) > -1;
    }
    /**
     * split string on whitespace
     * @param {String} str
     * @returns {Array} words
     */
    function splitStr(str) {
        return str.trim().split(/\s+/g);
    }
    /**
     * find if a array contains the object using indexOf or a simple polyFill
     * @param {Array} src
     * @param {String} find
     * @param {String} [findByKey]
     * @return {Boolean|Number} false when not found, or the index
     */
    function inArray(src, find, findByKey) {
        if (src.indexOf && !findByKey) {
            return src.indexOf(find);
        } else {
            var i = 0;
            while (i < src.length) {
                if (findByKey && src[i][findByKey] == find || !findByKey && src[i] === find) {
                    return i;
                }
                i++;
            }
            return -1;
        }
    }
    /**
     * convert array-like objects to real arrays
     * @param {Object} obj
     * @returns {Array}
     */
    function toArray(obj) {
        return Array.prototype.slice.call(obj, 0);
    }
    /**
     * unique array with objects based on a key (like 'id') or just by the array's value
     * @param {Array} src [{id:1},{id:2},{id:1}]
     * @param {String} [key]
     * @param {Boolean} [sort=False]
     * @returns {Array} [{id:1},{id:2}]
     */
    function uniqueArray(src, key, sort) {
        var results = [];
        var values = [];
        var i = 0;
        while (i < src.length) {
            var val = key ? src[i][key] : src[i];
            if (inArray(values, val) < 0) {
                results.push(src[i]);
            }
            values[i] = val;
            i++;
        }
        if (sort) {
            if (!key) {
                results = results.sort();
            } else {
                results = results.sort(function sortUniqueArray(a, b) {
                    return a[key] > b[key];
                });
            }
        }
        return results;
    }
    /**
     * get the prefixed property
     * @param {Object} obj
     * @param {String} property
     * @returns {String|Undefined} prefixed
     */
    function prefixed(obj, property) {
        var prefix, prop;
        var camelProp = property[0].toUpperCase() + property.slice(1);
        var i = 0;
        while (i < VENDOR_PREFIXES.length) {
            prefix = VENDOR_PREFIXES[i];
            prop = prefix ? prefix + camelProp : property;
            if (prop in obj) {
                return prop;
            }
            i++;
        }
        return undefined;
    }
    /**
     * get a unique id
     * @returns {number} uniqueId
     */

    function uniqueId() {
        return _uniqueId++;
    }
    /**
     * get the window object of an element
     * @param {HTMLElement} element
     * @returns {DocumentView|Window}
     */
    function getWindowForElement(element) {
        var doc = element.ownerDocument;
        return doc.defaultView || doc.parentWindow;
    }

    /**
     * create new input type manager
     * @param {Manager} manager
     * @param {Function} callback
     * @returns {Input}
     * @constructor
     */
    function Input(manager, callback) {
        var self = this;
        this.manager = manager;
        this.callback = callback;
        this.element = manager.element;
        this.target = manager.options.inputTarget;
        // smaller wrapper around the handler, for the scope and the enabled state of the manager,
        // so when disabled the input events are completely bypassed.
        this.domHandler = function (ev) {
            if (boolOrFn(manager.options.enable, [manager])) {
                self.handler(ev);
            }
        };
        this.init();
    }

    /**
     * create new input type manager
     * called by the Manager constructor
     * @param {Hammer} manager
     * @returns {Input}
     */
    function createInputInstance(manager) {
        var Type;
        var inputClass = manager.options.inputClass;
        if (inputClass) {
            Type = inputClass;
        } else if (SUPPORT_POINTER_EVENTS) {
            Type = PointerEventInput;
        } else if (SUPPORT_ONLY_TOUCH) {
            Type = TouchInput;
        } else if (!SUPPORT_TOUCH) {
            Type = MouseInput;
        } else {
            Type = TouchMouseInput;
        }
        return new Type(manager, inputHandler);
    }
    /**
     * handle input events
     * @param {Manager} manager
     * @param {String} eventType
     * @param {Object} input
     */
    function inputHandler(manager, eventType, input) {
        var pointersLen = input.pointers.length;
        var changedPointersLen = input.changedPointers.length;
        var isFirst = eventType & INPUT_START && pointersLen - changedPointersLen === 0;
        var isFinal = eventType & (INPUT_END | INPUT_CANCEL) && pointersLen - changedPointersLen === 0;
        input.isFirst = !!isFirst;
        input.isFinal = !!isFinal;
        if (isFirst) {
            manager.session = {};
        }
        // source event is the normalized value of the domEvents
        // like 'touchstart, mouseup, pointerdown'
        input.eventType = eventType;
        // compute scale, rotation etc
        computeInputData(manager, input);
        // emit secret event
        manager.emit('hammer.input', input);
        manager.recognize(input);
        manager.session.prevInput = input;
    }
    /**
     * extend the data with some usable properties like scale, rotate, velocity etc
     * @param {Object} manager
     * @param {Object} input
     */
    function computeInputData(manager, input) {
        var session = manager.session;
        var pointers = input.pointers;
        var pointersLength = pointers.length;
        // store the first input to calculate the distance and direction
        if (!session.firstInput) {
            session.firstInput = simpleCloneInputData(input);
        }
        // to compute scale and rotation we need to store the multiple touches
        if (pointersLength > 1 && !session.firstMultiple) {
            session.firstMultiple = simpleCloneInputData(input);
        } else if (pointersLength === 1) {
            session.firstMultiple = false;
        }
        var firstInput = session.firstInput;
        var firstMultiple = session.firstMultiple;
        var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;
        var center = input.center = getCenter(pointers);
        input.timeStamp = now();
        input.deltaTime = input.timeStamp - firstInput.timeStamp;
        input.angle = getAngle(offsetCenter, center);
        input.distance = getDistance(offsetCenter, center);
        computeDeltaXY(session, input);
        input.offsetDirection = getDirection(input.deltaX, input.deltaY);
        input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
        input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;
        computeIntervalInputData(session, input);
        // find the correct target
        var target = manager.element;
        if (hasParent(input.srcEvent.target, target)) {
            target = input.srcEvent.target;
        }
        input.target = target;
    }
    function computeDeltaXY(session, input) {
        var center = input.center;
        var offset = session.offsetDelta || {};
        var prevDelta = session.prevDelta || {};
        var prevInput = session.prevInput || {};
        if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
            prevDelta = session.prevDelta = {
                x: prevInput.deltaX || 0,
                y: prevInput.deltaY || 0
            };
            offset = session.offsetDelta = {
                x: center.x,
                y: center.y
            };
        }
        input.deltaX = prevDelta.x + (center.x - offset.x);
        input.deltaY = prevDelta.y + (center.y - offset.y);
    }
    /**
     * velocity is calculated every x ms
     * @param {Object} session
     * @param {Object} input
     */
    function computeIntervalInputData(session, input) {
        var last = session.lastInterval || input,
            deltaTime = input.timeStamp - last.timeStamp,
            velocity,
            velocityX,
            velocityY,
            direction;
        if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
            var deltaX = last.deltaX - input.deltaX;
            var deltaY = last.deltaY - input.deltaY;
            var v = getVelocity(deltaTime, deltaX, deltaY);
            velocityX = v.x;
            velocityY = v.y;
            velocity = abs(v.x) > abs(v.y) ? v.x : v.y;
            direction = getDirection(deltaX, deltaY);
            session.lastInterval = input;
        } else {
            // use latest velocity info if it doesn't overtake a minimum period
            velocity = last.velocity;
            velocityX = last.velocityX;
            velocityY = last.velocityY;
            direction = last.direction;
        }
        input.velocity = velocity;
        input.velocityX = velocityX;
        input.velocityY = velocityY;
        input.direction = direction;
    }
    /**
     * create a simple clone from the input used for storage of firstInput and firstMultiple
     * @param {Object} input
     * @returns {Object} clonedInputData
     */
    function simpleCloneInputData(input) {
        // make a simple copy of the pointers because we will get a reference if we don't
        // we only need clientXY for the calculations
        var pointers = [];
        var i = 0;
        while (i < input.pointers.length) {
            pointers[i] = {
                clientX: round(input.pointers[i].clientX),
                clientY: round(input.pointers[i].clientY)
            };
            i++;
        }
        return {
            timeStamp: now(),
            pointers: pointers,
            center: getCenter(pointers),
            deltaX: input.deltaX,
            deltaY: input.deltaY
        };
    }
    /**
     * get the center of all the pointers
     * @param {Array} pointers
     * @return {Object} center contains `x` and `y` properties
     */
    function getCenter(pointers) {
        var pointersLength = pointers.length;
        // no need to loop when only one touch
        if (pointersLength === 1) {
            return {
                x: round(pointers[0].clientX),
                y: round(pointers[0].clientY)
            };
        }
        var x = 0,
            y = 0,
            i = 0;
        while (i < pointersLength) {
            x += pointers[i].clientX;
            y += pointers[i].clientY;
            i++;
        }
        return {
            x: round(x / pointersLength),
            y: round(y / pointersLength)
        };
    }
    /**
     * calculate the velocity between two points. unit is in px per ms.
     * @param {Number} deltaTime
     * @param {Number} x
     * @param {Number} y
     * @return {Object} velocity `x` and `y`
     */
    function getVelocity(deltaTime, x, y) {
        return {
            x: x / deltaTime || 0,
            y: y / deltaTime || 0
        };
    }
    /**
     * get the direction between two points
     * @param {Number} x
     * @param {Number} y
     * @return {Number} direction
     */
    function getDirection(x, y) {
        if (x === y) {
            return DIRECTION_NONE;
        }
        if (abs(x) >= abs(y)) {
            return x > 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
        }
        return y > 0 ? DIRECTION_UP : DIRECTION_DOWN;
    }
    /**
     * calculate the absolute distance between two points
     * @param {Object} p1 {x, y}
     * @param {Object} p2 {x, y}
     * @param {Array} [props] containing x and y keys
     * @return {Number} distance
     */
    function getDistance(p1, p2, props) {
        if (!props) {
            props = PROPS_XY;
        }
        var x = p2[props[0]] - p1[props[0]],
            y = p2[props[1]] - p1[props[1]];
        return Math.sqrt(x * x + y * y);
    }
    /**
     * calculate the angle between two coordinates
     * @param {Object} p1
     * @param {Object} p2
     * @param {Array} [props] containing x and y keys
     * @return {Number} angle
     */
    function getAngle(p1, p2, props) {
        if (!props) {
            props = PROPS_XY;
        }
        var x = p2[props[0]] - p1[props[0]],
            y = p2[props[1]] - p1[props[1]];
        return Math.atan2(y, x) * 180 / Math.PI;
    }
    /**
     * calculate the rotation degrees between two pointersets
     * @param {Array} start array of pointers
     * @param {Array} end array of pointers
     * @return {Number} rotation
     */
    function getRotation(start, end) {
        return getAngle(end[1], end[0], PROPS_CLIENT_XY) - getAngle(start[1], start[0], PROPS_CLIENT_XY);
    }
    /**
     * calculate the scale factor between two pointersets
     * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
     * @param {Array} start array of pointers
     * @param {Array} end array of pointers
     * @return {Number} scale
     */
    function getScale(start, end) {
        return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
    }

    /**
     * Mouse events input
     * @constructor
     * @extends Input
     */
    function MouseInput() {
        this.evEl = MOUSE_ELEMENT_EVENTS;
        this.evWin = MOUSE_WINDOW_EVENTS;
        this.allow = true; // used by Input.TouchMouse to disable mouse events
        this.pressed = false; // mousedown state
        Input.apply(this, arguments);
    }

    /**
     * Pointer events input
     * @constructor
     * @extends Input
     */
    function PointerEventInput() {
        this.evEl = POINTER_ELEMENT_EVENTS;
        this.evWin = POINTER_WINDOW_EVENTS;
        Input.apply(this, arguments);
        this.store = this.manager.session.pointerEvents = [];
    }

    /**
     * Touch events input
     * @constructor
     * @extends Input
     */
    function SingleTouchInput() {
        this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
        this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
        this.started = false;
        Input.apply(this, arguments);
    }

    /**
     * @this {TouchInput}
     * @param {Object} ev
     * @param {Number} type flag
     * @returns {undefined|Array} [all, changed]
     */
    function normalizeSingleTouches(ev, type) {
        var all = toArray(ev.touches);
        var changed = toArray(ev.changedTouches);
        if (type & (INPUT_END | INPUT_CANCEL)) {
            all = uniqueArray(all.concat(changed), 'identifier', true);
        }
        return [all, changed];
    }

    /**
     * Multi-user touch events input
     * @constructor
     * @extends Input
     */
    function TouchInput() {
        this.evTarget = TOUCH_TARGET_EVENTS;
        this.targetIds = {};
        Input.apply(this, arguments);
    }

    /**
     * @this {TouchInput}
     * @param {Object} ev
     * @param {Number} type flag
     * @returns {undefined|Array} [all, changed]
     */
    function getTouches(ev, type) {
        var allTouches = toArray(ev.touches);
        var targetIds = this.targetIds;
        // when there is only one touch, the process can be simplified
        if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
            targetIds[allTouches[0].identifier] = true;
            return [allTouches, allTouches];
        }
        var i,
            targetTouches,
            changedTouches = toArray(ev.changedTouches),
            changedTargetTouches = [],
            target = this.target;
        // get target touches from touches
        targetTouches = allTouches.filter(function (touch) {
            return hasParent(touch.target, target);
        });
        // collect touches
        if (type === INPUT_START) {
            i = 0;
            while (i < targetTouches.length) {
                targetIds[targetTouches[i].identifier] = true;
                i++;
            }
        }
        // filter changed touches to only contain touches that exist in the collected target ids
        i = 0;
        while (i < changedTouches.length) {
            if (targetIds[changedTouches[i].identifier]) {
                changedTargetTouches.push(changedTouches[i]);
            }
            // cleanup removed touches
            if (type & (INPUT_END | INPUT_CANCEL)) {
                delete targetIds[changedTouches[i].identifier];
            }
            i++;
        }
        if (!changedTargetTouches.length) {
            return;
        }
        return [
        // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
        uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true), changedTargetTouches];
    }
    /**
     * Combined touch and mouse input
     *
     * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
     * This because touch devices also emit mouse events while doing a touch.
     *
     * @constructor
     * @extends Input
     */
    function TouchMouseInput() {
        Input.apply(this, arguments);
        var handler = bindFn(this.handler, this);
        this.touch = new TouchInput(this.manager, handler);
        this.mouse = new MouseInput(this.manager, handler);
    }

    /**
     * Touch Action
     * sets the touchAction property or uses the js alternative
     * @param {Manager} manager
     * @param {String} value
     * @constructor
     */
    function TouchAction(manager, value) {
        this.manager = manager;
        this.set(value);
    }

    /**
     * when the touchActions are collected they are not a valid value, so we need to clean things up. *
     * @param {String} actions
     * @returns {*}
     */
    function cleanTouchActions(actions) {
        // none
        if (inStr(actions, TOUCH_ACTION_NONE)) {
            return TOUCH_ACTION_NONE;
        }
        var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
        var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);
        // pan-x and pan-y can be combined
        if (hasPanX && hasPanY) {
            return TOUCH_ACTION_PAN_X + ' ' + TOUCH_ACTION_PAN_Y;
        }
        // pan-x OR pan-y
        if (hasPanX || hasPanY) {
            return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
        }
        // manipulation
        if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
            return TOUCH_ACTION_MANIPULATION;
        }
        return TOUCH_ACTION_AUTO;
    }
    /**
     * Recognizer flow explained; *
     * All recognizers have the initial state of POSSIBLE when a input session starts.
     * The definition of a input session is from the first input until the last input, with all it's movement in it. *
     * Example session for mouse-input: mousedown -> mousemove -> mouseup
     *
     * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
     * which determines with state it should be.
     *
     * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
     * POSSIBLE to give it another change on the next cycle.
     *
     *               Possible
     *                  |
     *            +-----+---------------+
     *            |                     |
     *      +-----+-----+               |
     *      |           |               |
     *   Failed      Cancelled          |
     *                          +-------+------+
     *                          |              |
     *                      Recognized       Began
     *                                         |
     *                                      Changed
     *                                         |
     *                                  Ended/Recognized
     */

    /**
     * Recognizer
     * Every recognizer needs to extend from this class.
     * @constructor
     * @param {Object} options
     */
    function Recognizer(options) {
        this.id = uniqueId();
        this.manager = null;
        this.options = merge(options || {}, this.defaults);
        // default is enable true
        this.options.enable = ifUndefined(this.options.enable, true);
        this.state = STATE_POSSIBLE;
        this.simultaneous = {};
        this.requireFail = [];
    }

    /**
     * get a usable string, used as event postfix
     * @param {Const} state
     * @returns {String} state
     */
    function stateStr(state) {
        if (state & STATE_CANCELLED) {
            return 'cancel';
        } else if (state & STATE_ENDED) {
            return 'end';
        } else if (state & STATE_CHANGED) {
            return 'move';
        } else if (state & STATE_BEGAN) {
            return 'start';
        }
        return '';
    }
    /**
     * direction cons to string
     * @param {Const} direction
     * @returns {String}
     */
    function directionStr(direction) {
        if (direction == DIRECTION_DOWN) {
            return 'down';
        } else if (direction == DIRECTION_UP) {
            return 'up';
        } else if (direction == DIRECTION_LEFT) {
            return 'left';
        } else if (direction == DIRECTION_RIGHT) {
            return 'right';
        }
        return '';
    }
    /**
     * get a recognizer by name if it is bound to a manager
     * @param {Recognizer|String} otherRecognizer
     * @param {Recognizer} recognizer
     * @returns {Recognizer}
     */
    function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
        var manager = recognizer.manager;
        if (manager) {
            return manager.get(otherRecognizer);
        }
        return otherRecognizer;
    }
    /**
     * This recognizer is just used as a base for the simple attribute recognizers.
     * @constructor
     * @extends Recognizer
     */
    function AttrRecognizer() {
        Recognizer.apply(this, arguments);
    }

    /**
     * Pan
     * Recognized when the pointer is down and moved in the allowed direction.
     * @constructor
     * @extends AttrRecognizer
     */
    function PanRecognizer() {
        AttrRecognizer.apply(this, arguments);
        this.pX = null;
        this.pY = null;
    }

    /**
     * Pinch
     * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
     * @constructor
     * @extends AttrRecognizer
     */
    function PinchRecognizer() {
        AttrRecognizer.apply(this, arguments);
    }

    /**
     * Press
     * Recognized when the pointer is down for x ms without any movement.
     * @constructor
     * @extends Recognizer
     */
    function PressRecognizer() {
        Recognizer.apply(this, arguments);
        this._timer = null;
        this._input = null;
    }

    /**
     * Rotate
     * Recognized when two or more pointer are moving in a circular motion.
     * @constructor
     * @extends AttrRecognizer
     */
    function RotateRecognizer() {
        AttrRecognizer.apply(this, arguments);
    }

    /**
     * Swipe
     * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
     * @constructor
     * @extends AttrRecognizer
     */
    function SwipeRecognizer() {
        AttrRecognizer.apply(this, arguments);
    }

    /**
     * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
     * between the given interval and position. The delay option can be used to recognize multi-taps without firing
     * a single tap.
     *
     * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
     * multi-taps being recognized.
     * @constructor
     * @extends Recognizer
     */
    function TapRecognizer() {
        Recognizer.apply(this, arguments);
        // previous time and center,
        // used for tap counting
        this.pTime = false;
        this.pCenter = false;
        this._timer = null;
        this._input = null;
        this.count = 0;
    }

    /**
     * Simple way to create an manager with a default set of recognizers.
     * @param {HTMLElement} element
     * @param {Object} [options]
     * @constructor
     */
    function Hammer(element, options) {
        options = options || {};
        options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
        return new Manager(element, options);
    }
    /**
     * @const {string}
     */

    /**
     * Manager
     * @param {HTMLElement} element
     * @param {Object} [options]
     * @constructor
     */
    function Manager(element, options) {
        options = options || {};
        this.options = merge(options, Hammer.defaults);
        this.options.inputTarget = this.options.inputTarget || element;
        this.handlers = {};
        this.session = {};
        this.recognizers = [];
        this.element = element;
        this.input = createInputInstance(this);
        this.touchAction = new TouchAction(this, this.options.touchAction);
        toggleCssProps(this, true);
        each(options.recognizers, function (item) {
            var recognizer = this.add(new item[0](item[1]));
            item[2] && recognizer.recognizeWith(item[2]);
            item[3] && recognizer.requireFailure(item[3]);
        }, this);
    }

    /**
     * add/remove the css properties as defined in manager.options.cssProps
     * @param {Manager} manager
     * @param {Boolean} add
     */
    function toggleCssProps(manager, add) {
        var element = manager.element;
        each(manager.options.cssProps, function (value, name) {
            element.style[prefixed(element.style, name)] = add ? value : '';
        });
    }
    /**
     * trigger dom event
     * @param {String} event
     * @param {Object} data
     */
    function triggerDomEvent(event, data) {
        var gestureEvent = document.createEvent('Event');
        gestureEvent.initEvent(event, true, true);
        gestureEvent.gesture = data;
        data.target.dispatchEvent(gestureEvent);
    }
    return {
        setters: [],
        execute: function () {
            VENDOR_PREFIXES = ['', 'webkit', 'moz', 'MS', 'ms', 'o'];
            TEST_ELEMENT = document.createElement('div');
            TYPE_FUNCTION = 'function';
            round = Math.round;
            abs = Math.abs;
            now = Date.now;
            _uniqueId = 1;
            MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;
            SUPPORT_TOUCH = 'ontouchstart' in window;
            SUPPORT_POINTER_EVENTS = prefixed(window, 'PointerEvent') !== undefined;
            SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);
            INPUT_TYPE_TOUCH = 'touch';
            INPUT_TYPE_PEN = 'pen';
            INPUT_TYPE_MOUSE = 'mouse';
            INPUT_TYPE_KINECT = 'kinect';
            COMPUTE_INTERVAL = 25;
            INPUT_START = 1;
            INPUT_MOVE = 2;
            INPUT_END = 4;
            INPUT_CANCEL = 8;
            DIRECTION_NONE = 1;
            DIRECTION_LEFT = 2;
            DIRECTION_RIGHT = 4;
            DIRECTION_UP = 8;
            DIRECTION_DOWN = 16;
            DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
            DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
            DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;
            PROPS_XY = ['x', 'y'];
            PROPS_CLIENT_XY = ['clientX', 'clientY'];
            Input.prototype = {
                /**
                 * should handle the inputEvent data and trigger the callback
                 * @virtual
                 */
                handler: function handler() {},
                /**
                 * bind the events
                 */
                init: function init() {
                    //console.debug('hammer Input init')
                    this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
                    this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
                    this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
                },
                /**
                 * unbind the events
                 */
                destroy: function destroy() {
                    this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
                    this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
                    this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
                }
            };MOUSE_INPUT_MAP = {
                mousedown: INPUT_START,
                mousemove: INPUT_MOVE,
                mouseup: INPUT_END
            };
            MOUSE_ELEMENT_EVENTS = 'mousedown';
            MOUSE_WINDOW_EVENTS = 'mousemove mouseup';
            inherit(MouseInput, Input, {
                /**
                 * handle mouse events
                 * @param {Object} ev
                 */
                handler: function MEhandler(ev) {
                    var eventType = MOUSE_INPUT_MAP[ev.type];
                    // on start we want to have the left mouse button down
                    if (eventType & INPUT_START && ev.button === 0) {
                        this.pressed = true;
                    }
                    if (eventType & INPUT_MOVE && ev.which !== 1) {
                        eventType = INPUT_END;
                    }
                    // mouse must be down, and mouse events are allowed (see the TouchMouse input)
                    if (!this.pressed || !this.allow) {
                        return;
                    }
                    if (eventType & INPUT_END) {
                        this.pressed = false;
                    }
                    this.callback(this.manager, eventType, {
                        pointers: [ev],
                        changedPointers: [ev],
                        pointerType: INPUT_TYPE_MOUSE,
                        srcEvent: ev
                    });
                }
            });
            POINTER_INPUT_MAP = {
                pointerdown: INPUT_START,
                pointermove: INPUT_MOVE,
                pointerup: INPUT_END,
                pointercancel: INPUT_CANCEL,
                pointerout: INPUT_CANCEL
            };

            // in IE10 the pointer types is defined as an enum
            IE10_POINTER_TYPE_ENUM = {
                2: INPUT_TYPE_TOUCH,
                3: INPUT_TYPE_PEN,
                4: INPUT_TYPE_MOUSE,
                5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816
            };
            POINTER_ELEMENT_EVENTS = 'pointerdown';
            POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel';

            // IE10 has prefixed support, and case-sensitive
            if (window.MSPointerEvent) {
                POINTER_ELEMENT_EVENTS = 'MSPointerDown';
                POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
            }inherit(PointerEventInput, Input, {
                /**
                 * handle mouse events
                 * @param {Object} ev
                 */
                handler: function PEhandler(ev) {
                    var store = this.store;
                    var removePointer = false;
                    var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
                    var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
                    var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;
                    var isTouch = pointerType == INPUT_TYPE_TOUCH;
                    // get index of the event in the store
                    var storeIndex = inArray(store, ev.pointerId, 'pointerId');
                    // start and mouse must be down
                    if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
                        if (storeIndex < 0) {
                            store.push(ev);
                            storeIndex = store.length - 1;
                        }
                    } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
                        removePointer = true;
                    }
                    // it not found, so the pointer hasn't been down (so it's probably a hover)
                    if (storeIndex < 0) {
                        return;
                    }
                    // update the event in the store
                    store[storeIndex] = ev;
                    this.callback(this.manager, eventType, {
                        pointers: store,
                        changedPointers: [ev],
                        pointerType: pointerType,
                        srcEvent: ev
                    });
                    if (removePointer) {
                        // remove from the store
                        store.splice(storeIndex, 1);
                    }
                }
            });
            SINGLE_TOUCH_INPUT_MAP = {
                touchstart: INPUT_START,
                touchmove: INPUT_MOVE,
                touchend: INPUT_END,
                touchcancel: INPUT_CANCEL
            };
            SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
            SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';
            inherit(SingleTouchInput, Input, {
                handler: function TEhandler(ev) {
                    var type = SINGLE_TOUCH_INPUT_MAP[ev.type];
                    // should we handle the touch events?
                    if (type === INPUT_START) {
                        this.started = true;
                    }
                    if (!this.started) {
                        return;
                    }
                    var touches = normalizeSingleTouches.call(this, ev, type);
                    // when done, reset the started state
                    if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
                        this.started = false;
                    }
                    this.callback(this.manager, type, {
                        pointers: touches[0],
                        changedPointers: touches[1],
                        pointerType: INPUT_TYPE_TOUCH,
                        srcEvent: ev
                    });
                }
            });TOUCH_INPUT_MAP = {
                touchstart: INPUT_START,
                touchmove: INPUT_MOVE,
                touchend: INPUT_END,
                touchcancel: INPUT_CANCEL
            };
            TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';
            inherit(TouchInput, Input, {
                handler: function MTEhandler(ev) {
                    var type = TOUCH_INPUT_MAP[ev.type];
                    var touches = getTouches.call(this, ev, type);
                    if (!touches) {
                        return;
                    }
                    this.callback(this.manager, type, {
                        pointers: touches[0],
                        changedPointers: touches[1],
                        pointerType: INPUT_TYPE_TOUCH,
                        srcEvent: ev
                    });
                }
            });inherit(TouchMouseInput, Input, {
                /**
                 * handle mouse and touch events
                 * @param {Hammer} manager
                 * @param {String} inputEvent
                 * @param {Object} inputData
                 */
                handler: function TMEhandler(manager, inputEvent, inputData) {
                    var isTouch = inputData.pointerType == INPUT_TYPE_TOUCH,
                        isMouse = inputData.pointerType == INPUT_TYPE_MOUSE;
                    // when we're in a touch event, so  block all upcoming mouse events
                    // most mobile browser also emit mouseevents, right after touchstart
                    if (isTouch) {
                        this.mouse.allow = false;
                    } else if (isMouse && !this.mouse.allow) {
                        return;
                    }
                    // reset the allowMouse when we're done
                    if (inputEvent & (INPUT_END | INPUT_CANCEL)) {
                        this.mouse.allow = true;
                    }
                    this.callback(manager, inputEvent, inputData);
                },
                /**
                 * remove the event listeners
                 */
                destroy: function destroy() {
                    this.touch.destroy();
                    this.mouse.destroy();
                }
            });
            PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
            NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;

            // magical touchAction value
            TOUCH_ACTION_COMPUTE = 'compute';
            TOUCH_ACTION_AUTO = 'auto';
            TOUCH_ACTION_MANIPULATION = 'manipulation';
            // not implemented
            TOUCH_ACTION_NONE = 'none';
            TOUCH_ACTION_PAN_X = 'pan-x';
            TOUCH_ACTION_PAN_Y = 'pan-y';
            TouchAction.prototype = {
                /**
                 * set the touchAction value on the element or enable the polyfill
                 * @param {String} value
                 */
                set: function set(value) {
                    // find out the touch-action by the event handlers
                    if (value == TOUCH_ACTION_COMPUTE) {
                        value = this.compute();
                    }
                    if (NATIVE_TOUCH_ACTION) {
                        this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
                    }
                    this.actions = value.toLowerCase().trim();
                },
                /**
                 * just re-set the touchAction value
                 */
                update: function update() {
                    this.set(this.manager.options.touchAction);
                },
                /**
                 * compute the value for the touchAction property based on the recognizer's settings
                 * @returns {String} value
                 */
                compute: function compute() {
                    var actions = [];
                    each(this.manager.recognizers, function (recognizer) {
                        if (boolOrFn(recognizer.options.enable, [recognizer])) {
                            actions = actions.concat(recognizer.getTouchAction());
                        }
                    });
                    return cleanTouchActions(actions.join(' '));
                },
                /**
                 * this method is called on each input cycle and provides the preventing of the browser behavior
                 * @param {Object} input
                 */
                preventDefaults: function preventDefaults(input) {
                    // not needed with native support for the touchAction property
                    if (NATIVE_TOUCH_ACTION) {
                        return;
                    }
                    var srcEvent = input.srcEvent;
                    var direction = input.offsetDirection;
                    // if the touch action did prevented once this session
                    if (this.manager.session.prevented) {
                        srcEvent.preventDefault();
                        return;
                    }
                    var actions = this.actions;
                    var hasNone = inStr(actions, TOUCH_ACTION_NONE);
                    var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);
                    var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
                    if (hasNone || hasPanY && direction & DIRECTION_HORIZONTAL || hasPanX && direction & DIRECTION_VERTICAL) {
                        return this.preventSrc(srcEvent);
                    }
                },
                /**
                 * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
                 * @param {Object} srcEvent
                 */
                preventSrc: function preventSrc(srcEvent) {
                    this.manager.session.prevented = true;
                    srcEvent.preventDefault();
                }
            };STATE_POSSIBLE = 1;
            STATE_BEGAN = 2;
            STATE_CHANGED = 4;
            STATE_ENDED = 8;
            STATE_RECOGNIZED = STATE_ENDED;
            STATE_CANCELLED = 16;
            STATE_FAILED = 32;
            Recognizer.prototype = {
                /**
                 * @virtual
                 * @type {Object}
                 */
                defaults: {},
                /**
                 * set options
                 * @param {Object} options
                 * @return {Recognizer}
                 */
                set: function set(options) {
                    extend(this.options, options);
                    // also update the touchAction, in case something changed about the directions/enabled state
                    this.manager && this.manager.touchAction.update();
                    return this;
                },
                /**
                 * recognize simultaneous with an other recognizer.
                 * @param {Recognizer} otherRecognizer
                 * @returns {Recognizer} this
                 */
                recognizeWith: function recognizeWith(otherRecognizer) {
                    if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
                        return this;
                    }
                    var simultaneous = this.simultaneous;
                    otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
                    if (!simultaneous[otherRecognizer.id]) {
                        simultaneous[otherRecognizer.id] = otherRecognizer;
                        otherRecognizer.recognizeWith(this);
                    }
                    return this;
                },
                /**
                 * drop the simultaneous link. it doesnt remove the link on the other recognizer.
                 * @param {Recognizer} otherRecognizer
                 * @returns {Recognizer} this
                 */
                dropRecognizeWith: function dropRecognizeWith(otherRecognizer) {
                    if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
                        return this;
                    }
                    otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
                    delete this.simultaneous[otherRecognizer.id];
                    return this;
                },
                /**
                 * recognizer can only run when an other is failing
                 * @param {Recognizer} otherRecognizer
                 * @returns {Recognizer} this
                 */
                requireFailure: function requireFailure(otherRecognizer) {
                    if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
                        return this;
                    }
                    var requireFail = this.requireFail;
                    otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
                    if (inArray(requireFail, otherRecognizer) === -1) {
                        requireFail.push(otherRecognizer);
                        otherRecognizer.requireFailure(this);
                    }
                    return this;
                },
                /**
                 * drop the requireFailure link. it does not remove the link on the other recognizer.
                 * @param {Recognizer} otherRecognizer
                 * @returns {Recognizer} this
                 */
                dropRequireFailure: function dropRequireFailure(otherRecognizer) {
                    if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
                        return this;
                    }
                    otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
                    var index = inArray(this.requireFail, otherRecognizer);
                    if (index > -1) {
                        this.requireFail.splice(index, 1);
                    }
                    return this;
                },
                /**
                 * has require failures boolean
                 * @returns {boolean}
                 */
                hasRequireFailures: function hasRequireFailures() {
                    return this.requireFail.length > 0;
                },
                /**
                 * if the recognizer can recognize simultaneous with an other recognizer
                 * @param {Recognizer} otherRecognizer
                 * @returns {Boolean}
                 */
                canRecognizeWith: function canRecognizeWith(otherRecognizer) {
                    return !!this.simultaneous[otherRecognizer.id];
                },
                /**
                 * You should use `tryEmit` instead of `emit` directly to check
                 * that all the needed recognizers has failed before emitting.
                 * @param {Object} input
                 */
                emit: function emit(input) {
                    var self = this;
                    var state = this.state;
                    function emit(withState) {
                        self.manager.emit(self.options.event + (withState ? stateStr(state) : ''), input);
                    }
                    // 'panstart' and 'panmove'
                    if (state < STATE_ENDED) {
                        emit(true);
                    }
                    emit(); // simple 'eventName' events
                    // panend and pancancel
                    if (state >= STATE_ENDED) {
                        emit(true);
                    }
                },
                /**
                 * Check that all the require failure recognizers has failed,
                 * if true, it emits a gesture event,
                 * otherwise, setup the state to FAILED.
                 * @param {Object} input
                 */
                tryEmit: function tryEmit(input) {
                    if (this.canEmit()) {
                        return this.emit(input);
                    }
                    // it's failing anyway
                    this.state = STATE_FAILED;
                },
                /**
                 * can we emit?
                 * @returns {boolean}
                 */
                canEmit: function canEmit() {
                    var i = 0;
                    while (i < this.requireFail.length) {
                        if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
                            return false;
                        }
                        i++;
                    }
                    return true;
                },
                /**
                 * update the recognizer
                 * @param {Object} inputData
                 */
                recognize: function recognize(inputData) {
                    // make a new copy of the inputData
                    // so we can change the inputData without messing up the other recognizers
                    var inputDataClone = extend({}, inputData);
                    // is is enabled and allow recognizing?
                    if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
                        this.reset();
                        this.state = STATE_FAILED;
                        return;
                    }
                    // reset when we've reached the end
                    if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
                        this.state = STATE_POSSIBLE;
                    }
                    this.state = this.process(inputDataClone);
                    // the recognizer has recognized a gesture
                    // so trigger an event
                    if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
                        this.tryEmit(inputDataClone);
                    }
                },
                /**
                 * return the state of the recognizer
                 * the actual recognizing happens in this method
                 * @virtual
                 * @param {Object} inputData
                 * @returns {Const} STATE
                 */
                process: function process(inputData) {},
                /**
                 * return the preferred touch-action
                 * @virtual
                 * @returns {Array}
                 */
                getTouchAction: function getTouchAction() {},
                /**
                 * called when the gesture isn't allowed to recognize
                 * like when another is being recognized or it is disabled
                 * @virtual
                 */
                reset: function reset() {}
            };inherit(AttrRecognizer, Recognizer, {
                /**
                 * @namespace
                 * @memberof AttrRecognizer
                 */
                defaults: {
                    /**
                     * @type {Number}
                     * @default 1
                     */
                    pointers: 1
                },
                /**
                 * Used to check if it the recognizer receives valid input, like input.distance > 10.
                 * @memberof AttrRecognizer
                 * @param {Object} input
                 * @returns {Boolean} recognized
                 */
                attrTest: function attrTest(input) {
                    var optionPointers = this.options.pointers;
                    return optionPointers === 0 || input.pointers.length === optionPointers;
                },
                /**
                 * Process the input and return the state for the recognizer
                 * @memberof AttrRecognizer
                 * @param {Object} input
                 * @returns {*} State
                 */
                process: function process(input) {
                    var state = this.state;
                    var eventType = input.eventType;
                    var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
                    var isValid = this.attrTest(input);
                    // on cancel input and we've recognized before, return STATE_CANCELLED
                    if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
                        return state | STATE_CANCELLED;
                    } else if (isRecognized || isValid) {
                        if (eventType & INPUT_END) {
                            return state | STATE_ENDED;
                        } else if (!(state & STATE_BEGAN)) {
                            return STATE_BEGAN;
                        }
                        return state | STATE_CHANGED;
                    }
                    return STATE_FAILED;
                }
            });inherit(PanRecognizer, AttrRecognizer, {
                /**
                 * @namespace
                 * @memberof PanRecognizer
                 */
                defaults: {
                    event: 'pan',
                    threshold: 10,
                    pointers: 1,
                    direction: DIRECTION_ALL
                },
                getTouchAction: function getTouchAction() {
                    var direction = this.options.direction;
                    var actions = [];
                    if (direction & DIRECTION_HORIZONTAL) {
                        actions.push(TOUCH_ACTION_PAN_Y);
                    }
                    if (direction & DIRECTION_VERTICAL) {
                        actions.push(TOUCH_ACTION_PAN_X);
                    }
                    return actions;
                },
                directionTest: function directionTest(input) {
                    var options = this.options;
                    var hasMoved = true;
                    var distance = input.distance;
                    var direction = input.direction;
                    var x = input.deltaX;
                    var y = input.deltaY;
                    // lock to axis?
                    if (!(direction & options.direction)) {
                        if (options.direction & DIRECTION_HORIZONTAL) {
                            direction = x === 0 ? DIRECTION_NONE : x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
                            hasMoved = x != this.pX;
                            distance = Math.abs(input.deltaX);
                        } else {
                            direction = y === 0 ? DIRECTION_NONE : y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
                            hasMoved = y != this.pY;
                            distance = Math.abs(input.deltaY);
                        }
                    }
                    input.direction = direction;
                    return hasMoved && distance > options.threshold && direction & options.direction;
                },
                attrTest: function attrTest(input) {
                    return AttrRecognizer.prototype.attrTest.call(this, input) && (this.state & STATE_BEGAN || !(this.state & STATE_BEGAN) && this.directionTest(input));
                },
                emit: function emit(input) {
                    this.pX = input.deltaX;
                    this.pY = input.deltaY;
                    var direction = directionStr(input.direction);
                    if (direction) {
                        this.manager.emit(this.options.event + direction, input);
                    }
                    this._super.emit.call(this, input);
                }
            });inherit(PinchRecognizer, AttrRecognizer, {
                /**
                 * @namespace
                 * @memberof PinchRecognizer
                 */
                defaults: {
                    event: 'pinch',
                    threshold: 0,
                    pointers: 2
                },
                getTouchAction: function getTouchAction() {
                    return [TOUCH_ACTION_NONE];
                },
                attrTest: function attrTest(input) {
                    return this._super.attrTest.call(this, input) && (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
                },
                emit: function emit(input) {
                    this._super.emit.call(this, input);
                    if (input.scale !== 1) {
                        var inOut = input.scale < 1 ? 'in' : 'out';
                        this.manager.emit(this.options.event + inOut, input);
                    }
                }
            });inherit(PressRecognizer, Recognizer, {
                /**
                 * @namespace
                 * @memberof PressRecognizer
                 */
                defaults: {
                    event: 'press',
                    pointers: 1,
                    time: 500,
                    threshold: 5 // a minimal movement is ok, but keep it low
                },
                getTouchAction: function getTouchAction() {
                    return [TOUCH_ACTION_AUTO];
                },
                process: function process(input) {
                    var options = this.options;
                    var validPointers = input.pointers.length === options.pointers;
                    var validMovement = input.distance < options.threshold;
                    var validTime = input.deltaTime > options.time;
                    this._input = input;
                    // we only allow little movement
                    // and we've reached an end event, so a tap is possible
                    if (!validMovement || !validPointers || input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime) {
                        this.reset();
                    } else if (input.eventType & INPUT_START) {
                        this.reset();
                        this._timer = setTimeoutContext(function () {
                            this.state = STATE_RECOGNIZED;
                            this.tryEmit();
                        }, options.time, this);
                    } else if (input.eventType & INPUT_END) {
                        return STATE_RECOGNIZED;
                    }
                    return STATE_FAILED;
                },
                reset: function reset() {
                    clearTimeout(this._timer);
                },
                emit: function emit(input) {
                    if (this.state !== STATE_RECOGNIZED) {
                        return;
                    }
                    if (input && input.eventType & INPUT_END) {
                        this.manager.emit(this.options.event + 'up', input);
                    } else {
                        this._input.timeStamp = now();
                        this.manager.emit(this.options.event, this._input);
                    }
                }
            });inherit(RotateRecognizer, AttrRecognizer, {
                /**
                 * @namespace
                 * @memberof RotateRecognizer
                 */
                defaults: {
                    event: 'rotate',
                    threshold: 0,
                    pointers: 2
                },
                getTouchAction: function getTouchAction() {
                    return [TOUCH_ACTION_NONE];
                },
                attrTest: function attrTest(input) {
                    return this._super.attrTest.call(this, input) && (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
                }
            });inherit(SwipeRecognizer, AttrRecognizer, {
                /**
                 * @namespace
                 * @memberof SwipeRecognizer
                 */
                defaults: {
                    event: 'swipe',
                    threshold: 10,
                    velocity: 0.65,
                    direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
                    pointers: 1
                },
                getTouchAction: function getTouchAction() {
                    return PanRecognizer.prototype.getTouchAction.call(this);
                },
                attrTest: function attrTest(input) {
                    var direction = this.options.direction;
                    var velocity;
                    if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
                        velocity = input.velocity;
                    } else if (direction & DIRECTION_HORIZONTAL) {
                        velocity = input.velocityX;
                    } else if (direction & DIRECTION_VERTICAL) {
                        velocity = input.velocityY;
                    }
                    return this._super.attrTest.call(this, input) && direction & input.direction && input.distance > this.options.threshold && abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
                },
                emit: function emit(input) {
                    var direction = directionStr(input.direction);
                    if (direction) {
                        this.manager.emit(this.options.event + direction, input);
                    }
                    this.manager.emit(this.options.event, input);
                }
            });inherit(TapRecognizer, Recognizer, {
                /**
                 * @namespace
                 * @memberof PinchRecognizer
                 */
                defaults: {
                    event: 'tap',
                    pointers: 1,
                    taps: 1,
                    interval: 300,
                    time: 250,
                    threshold: 2,
                    posThreshold: 10 // a multi-tap can be a bit off the initial position
                },
                getTouchAction: function getTouchAction() {
                    return [TOUCH_ACTION_MANIPULATION];
                },
                process: function process(input) {
                    var options = this.options;
                    var validPointers = input.pointers.length === options.pointers;
                    var validMovement = input.distance < options.threshold;
                    var validTouchTime = input.deltaTime < options.time;
                    this.reset();
                    if (input.eventType & INPUT_START && this.count === 0) {
                        return this.failTimeout();
                    }
                    // we only allow little movement
                    // and we've reached an end event, so a tap is possible
                    if (validMovement && validTouchTime && validPointers) {
                        if (input.eventType != INPUT_END) {
                            return this.failTimeout();
                        }
                        var validInterval = this.pTime ? input.timeStamp - this.pTime < options.interval : true;
                        var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;
                        this.pTime = input.timeStamp;
                        this.pCenter = input.center;
                        if (!validMultiTap || !validInterval) {
                            this.count = 1;
                        } else {
                            this.count += 1;
                        }
                        this._input = input;
                        // if tap count matches we have recognized it,
                        // else it has began recognizing...
                        var tapCount = this.count % options.taps;
                        if (tapCount === 0) {
                            // no failing requirements, immediately trigger the tap event
                            // or wait as long as the multitap interval to trigger
                            if (!this.hasRequireFailures()) {
                                return STATE_RECOGNIZED;
                            } else {
                                this._timer = setTimeoutContext(function () {
                                    this.state = STATE_RECOGNIZED;
                                    this.tryEmit();
                                }, options.interval, this);
                                return STATE_BEGAN;
                            }
                        }
                    }
                    return STATE_FAILED;
                },
                failTimeout: function failTimeout() {
                    this._timer = setTimeoutContext(function () {
                        this.state = STATE_FAILED;
                    }, this.options.interval, this);
                    return STATE_FAILED;
                },
                reset: function reset() {
                    clearTimeout(this._timer);
                },
                emit: function emit() {
                    if (this.state == STATE_RECOGNIZED) {
                        this._input.tapCount = this.count;
                        this.manager.emit(this.options.event, this._input);
                    }
                }
            });Hammer.VERSION = '2.0.4';
            /**
             * default settings
             * @namespace
             */
            Hammer.defaults = {
                /**
                 * set if DOM events are being triggered.
                 * But this is slower and unused by simple implementations, so disabled by default.
                 * @type {Boolean}
                 * @default false
                 */
                domEvents: false,
                /**
                 * The value for the touchAction property/fallback.
                 * When set to `compute` it will magically set the correct value based on the added recognizers.
                 * @type {String}
                 * @default compute
                 */
                touchAction: TOUCH_ACTION_COMPUTE,
                /**
                 * @type {Boolean}
                 * @default true
                 */
                enable: true,
                /**
                 * EXPERIMENTAL FEATURE -- can be removed/changed
                 * Change the parent input target element.
                 * If Null, then it is being set the to main element.
                 * @type {Null|EventTarget}
                 * @default null
                 */
                inputTarget: null,
                /**
                 * force an input class
                 * @type {Null|Function}
                 * @default null
                 */
                inputClass: null,
                /**
                 * Default recognizer setup when calling `Hammer()`
                 * When creating a new Manager these will be skipped.
                 * @type {Array}
                 */
                preset: [
                // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
                [RotateRecognizer, { enable: false }], [PinchRecognizer, { enable: false }, ['rotate']], [SwipeRecognizer, { direction: DIRECTION_HORIZONTAL }], [PanRecognizer, { direction: DIRECTION_HORIZONTAL }, ['swipe']], [TapRecognizer], [TapRecognizer, { event: 'doubletap', taps: 2 }, ['tap']], [PressRecognizer]],
                /**
                 * Some CSS properties can be used to improve the working of Hammer.
                 * Add them to this method and they will be set when creating a new Manager.
                 * @namespace
                 */
                cssProps: {
                    /**
                     * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
                     * @type {String}
                     * @default 'none'
                     */
                    userSelect: 'none',
                    /**
                     * Disable the Windows Phone grippers when pressing an element.
                     * @type {String}
                     * @default 'none'
                     */
                    touchSelect: 'none',
                    /**
                     * Disables the default callout shown when you touch and hold a touch target.
                     * On iOS, when you touch and hold a touch target such as a link, Safari displays
                     * a callout containing information about the link. This property allows you to disable that callout.
                     * @type {String}
                     * @default 'none'
                     */
                    touchCallout: 'none',
                    /**
                     * Specifies whether zooming is enabled. Used by IE10>
                     * @type {String}
                     * @default 'none'
                     */
                    contentZooming: 'none',
                    /**
                     * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
                     * @type {String}
                     * @default 'none'
                     */
                    userDrag: 'none',
                    /**
                     * Overrides the highlight color shown when the user taps a link or a JavaScript
                     * clickable element in iOS. This property obeys the alpha value, if specified.
                     * @type {String}
                     * @default 'rgba(0,0,0,0)'
                     */
                    tapHighlightColor: 'rgba(0,0,0,0)'
                }
            };
            STOP = 1;
            FORCED_STOP = 2;
            Manager.prototype = {
                /**
                 * set options
                 * @param {Object} options
                 * @returns {Manager}
                 */
                set: function set(options) {
                    extend(this.options, options);
                    // Options that need a little more setup
                    if (options.touchAction) {
                        this.touchAction.update();
                    }
                    if (options.inputTarget) {
                        // Clean up existing event listeners and reinitialize
                        this.input.destroy();
                        this.input.target = options.inputTarget;
                        this.input.init();
                    }
                    return this;
                },
                /**
                 * stop recognizing for this session.
                 * This session will be discarded, when a new [input]start event is fired.
                 * When forced, the recognizer cycle is stopped immediately.
                 * @param {Boolean} [force]
                 */
                stop: function stop(force) {
                    this.session.stopped = force ? FORCED_STOP : STOP;
                },
                /**
                 * run the recognizers!
                 * called by the inputHandler function on every movement of the pointers (touches)
                 * it walks through all the recognizers and tries to detect the gesture that is being made
                 * @param {Object} inputData
                 */
                recognize: function recognize(inputData) {
                    var session = this.session;
                    if (session.stopped) {
                        return;
                    }
                    // run the touch-action polyfill
                    this.touchAction.preventDefaults(inputData);
                    var recognizer;
                    var recognizers = this.recognizers;
                    // this holds the recognizer that is being recognized.
                    // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
                    // if no recognizer is detecting a thing, it is set to `null`
                    var curRecognizer = session.curRecognizer;
                    // reset when the last recognizer is recognized
                    // or when we're in a new session
                    if (!curRecognizer || curRecognizer && curRecognizer.state & STATE_RECOGNIZED) {
                        curRecognizer = session.curRecognizer = null;
                    }
                    var i = 0;
                    while (i < recognizers.length) {
                        recognizer = recognizers[i];
                        // find out if we are allowed try to recognize the input for this one.
                        // 1.   allow if the session is NOT forced stopped (see the .stop() method)
                        // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
                        //      that is being recognized.
                        // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
                        //      this can be setup with the `recognizeWith()` method on the recognizer.
                        if (session.stopped !== FORCED_STOP && (!curRecognizer || recognizer == curRecognizer || recognizer.canRecognizeWith(curRecognizer))) {
                            recognizer.recognize(inputData);
                        } else {
                            recognizer.reset();
                        }
                        // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
                        // current active recognizer. but only if we don't already have an active recognizer
                        if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
                            curRecognizer = session.curRecognizer = recognizer;
                        }
                        i++;
                    }
                },
                /**
                 * get a recognizer by its event name.
                 * @param {Recognizer|String} recognizer
                 * @returns {Recognizer|Null}
                 */
                get: function get(recognizer) {
                    if (recognizer instanceof Recognizer) {
                        return recognizer;
                    }
                    var recognizers = this.recognizers;
                    for (var i = 0; i < recognizers.length; i++) {
                        if (recognizers[i].options.event == recognizer) {
                            return recognizers[i];
                        }
                    }
                    return null;
                },
                /**
                 * add a recognizer to the manager
                 * existing recognizers with the same event name will be removed
                 * @param {Recognizer} recognizer
                 * @returns {Recognizer|Manager}
                 */
                add: function add(recognizer) {
                    if (invokeArrayArg(recognizer, 'add', this)) {
                        return this;
                    }
                    // remove existing
                    var existing = this.get(recognizer.options.event);
                    if (existing) {
                        this.remove(existing);
                    }
                    this.recognizers.push(recognizer);
                    recognizer.manager = this;
                    this.touchAction.update();
                    return recognizer;
                },
                /**
                 * remove a recognizer by name or instance
                 * @param {Recognizer|String} recognizer
                 * @returns {Manager}
                 */
                remove: function remove(recognizer) {
                    if (invokeArrayArg(recognizer, 'remove', this)) {
                        return this;
                    }
                    var recognizers = this.recognizers;
                    recognizer = this.get(recognizer);
                    recognizers.splice(inArray(recognizers, recognizer), 1);
                    this.touchAction.update();
                    return this;
                },
                /**
                 * bind event
                 * @param {String} events
                 * @param {Function} handler
                 * @returns {EventEmitter} this
                 */
                on: function on(events, handler) {
                    var handlers = this.handlers;
                    each(splitStr(events), function (event) {
                        handlers[event] = handlers[event] || [];
                        handlers[event].push(handler);
                    });
                    return this;
                },
                /**
                 * unbind event, leave emit blank to remove all handlers
                 * @param {String} events
                 * @param {Function} [handler]
                 * @returns {EventEmitter} this
                 */
                off: function off(events, handler) {
                    var handlers = this.handlers;
                    each(splitStr(events), function (event) {
                        if (!handler) {
                            delete handlers[event];
                        } else {
                            handlers[event].splice(inArray(handlers[event], handler), 1);
                        }
                    });
                    return this;
                },
                /**
                 * emit event to the listeners
                 * @param {String} event
                 * @param {Object} data
                 */
                emit: function emit(event, data) {
                    // we also want to trigger dom events
                    if (this.options.domEvents) {
                        triggerDomEvent(event, data);
                    }
                    // no handlers, so skip it all
                    var handlers = this.handlers[event] && this.handlers[event].slice();
                    if (!handlers || !handlers.length) {
                        return;
                    }
                    data.type = event;
                    data.preventDefault = function () {
                        data.srcEvent.preventDefault();
                    };
                    var i = 0;
                    while (i < handlers.length) {
                        handlers[i](data);
                        i++;
                    }
                },
                /**
                 * destroy the manager and unbinds all events
                 * it doesn't unbind dom events, that is the user own responsibility
                 */
                destroy: function destroy() {
                    this.element && toggleCssProps(this, false);
                    this.handlers = {};
                    this.session = {};
                    this.input.destroy();
                    this.element = null;
                }
            };extend(Hammer, {
                INPUT_START: INPUT_START,
                INPUT_MOVE: INPUT_MOVE,
                INPUT_END: INPUT_END,
                INPUT_CANCEL: INPUT_CANCEL,
                STATE_POSSIBLE: STATE_POSSIBLE,
                STATE_BEGAN: STATE_BEGAN,
                STATE_CHANGED: STATE_CHANGED,
                STATE_ENDED: STATE_ENDED,
                STATE_RECOGNIZED: STATE_RECOGNIZED,
                STATE_CANCELLED: STATE_CANCELLED,
                STATE_FAILED: STATE_FAILED,
                DIRECTION_NONE: DIRECTION_NONE,
                DIRECTION_LEFT: DIRECTION_LEFT,
                DIRECTION_RIGHT: DIRECTION_RIGHT,
                DIRECTION_UP: DIRECTION_UP,
                DIRECTION_DOWN: DIRECTION_DOWN,
                DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
                DIRECTION_VERTICAL: DIRECTION_VERTICAL,
                DIRECTION_ALL: DIRECTION_ALL,
                Manager: Manager,
                Input: Input,
                TouchAction: TouchAction,
                TouchInput: TouchInput,
                MouseInput: MouseInput,
                PointerEventInput: PointerEventInput,
                TouchMouseInput: TouchMouseInput,
                SingleTouchInput: SingleTouchInput,
                Recognizer: Recognizer,
                AttrRecognizer: AttrRecognizer,
                Tap: TapRecognizer,
                Pan: PanRecognizer,
                Swipe: SwipeRecognizer,
                Pinch: PinchRecognizer,
                Rotate: RotateRecognizer,
                Press: PressRecognizer,
                on: addEventListeners,
                off: removeEventListeners,
                each: each,
                merge: merge,
                extend: extend,
                inherit: inherit,
                bindFn: bindFn,
                prefixed: prefixed
            });
            /*
            if (typeof define == TYPE_FUNCTION && define.amd) {
                define(function() {
                    return Hammer;
                });
            } else if (typeof module != 'undefined' && module.exports) {
                module.exports = Hammer;
            } else {
                window[exportName] = Hammer;
            }
            */

            _export('Hammer', Hammer);

            //})(window, document, 'Hammer');
        }
    };
});
System.register('ionic/gestures/slide-edge-gesture', ['ionic/gestures/slide-gesture', '../util/util', '../util/dom'], function (_export) {
    'use strict';

    var SlideGesture, defaults, windowDimensions, SlideEdgeGesture;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    return {
        setters: [function (_ionicGesturesSlideGesture) {
            SlideGesture = _ionicGesturesSlideGesture.SlideGesture;
        }, function (_utilUtil) {
            defaults = _utilUtil.defaults;
        }, function (_utilDom) {
            windowDimensions = _utilDom.windowDimensions;
        }],
        execute: function () {
            SlideEdgeGesture = (function (_SlideGesture) {
                _inherits(SlideEdgeGesture, _SlideGesture);

                function SlideEdgeGesture(element) {
                    var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

                    _classCallCheck(this, SlideEdgeGesture);

                    defaults(opts, {
                        edge: 'left',
                        threshold: 50
                    });
                    _get(Object.getPrototypeOf(SlideEdgeGesture.prototype), 'constructor', this).call(this, element, opts);
                    // Can check corners through use of eg 'left top'
                    this.edges = opts.edge.split(' ');
                    this.threshold = opts.threshold;
                }

                _createClass(SlideEdgeGesture, [{
                    key: 'canStart',
                    value: function canStart(ev) {
                        var _this = this;

                        this._d = this.getContainerDimensions();
                        return this.edges.every(function (edge) {
                            return _this._checkEdge(edge, ev.center);
                        });
                    }
                }, {
                    key: 'getContainerDimensions',
                    value: function getContainerDimensions() {
                        return {
                            left: 0,
                            top: 0,
                            width: windowDimensions().width,
                            height: windowDimensions().height
                        };
                    }
                }, {
                    key: '_checkEdge',
                    value: function _checkEdge(edge, pos) {
                        switch (edge) {
                            case 'left':
                                return pos.x <= this._d.left + this.threshold;
                            case 'right':
                                return pos.x >= this._d.width - this.threshold;
                            case 'top':
                                return pos.y <= this._d.top + this.threshold;
                            case 'bottom':
                                return pos.y >= this._d.height - this.threshold;
                        }
                    }
                }]);

                return SlideEdgeGesture;
            })(SlideGesture);

            _export('SlideEdgeGesture', SlideEdgeGesture);
        }
    };
});
System.register('ionic/gestures/slide-gesture', ['ionic/gestures/drag-gesture', 'ionic/util'], function (_export) {
    'use strict';

    var DragGesture, util, SlideGesture;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    return {
        setters: [function (_ionicGesturesDragGesture) {
            DragGesture = _ionicGesturesDragGesture.DragGesture;
        }, function (_ionicUtil) {
            util = _ionicUtil;
        }],
        execute: function () {
            SlideGesture = (function (_DragGesture) {
                _inherits(SlideGesture, _DragGesture);

                function SlideGesture(element) {
                    var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

                    _classCallCheck(this, SlideGesture);

                    _get(Object.getPrototypeOf(SlideGesture.prototype), 'constructor', this).call(this, element, opts);
                    this.element = element;
                }

                /*
                 * Get the min and max for the slide. pageX/pageY.
                 * Only called on dragstart.
                 */

                _createClass(SlideGesture, [{
                    key: 'getSlideBoundaries',
                    value: function getSlideBoundaries(slide, ev) {
                        return {
                            min: 0,
                            max: this.element.offsetWidth
                        };
                    }

                    /*
                     * Get the element's pos when the drag starts.
                     * For example, an open side menu starts at 100% and a closed
                     * sidemenu starts at 0%.
                     */
                }, {
                    key: 'getElementStartPos',
                    value: function getElementStartPos(slide, ev) {
                        return 0;
                    }
                }, {
                    key: 'canStart',
                    value: function canStart() {
                        return true;
                    }
                }, {
                    key: 'onDragStart',
                    value: function onDragStart(ev) {
                        var _this = this;

                        if (!this.canStart(ev)) return false;
                        this.slide = {};
                        var promise = this.onSlideBeforeStart(this.slide, ev) || Promise.resolve();
                        promise.then(function () {
                            var _getSlideBoundaries = _this.getSlideBoundaries(_this.slide, ev);

                            var min = _getSlideBoundaries.min;
                            var max = _getSlideBoundaries.max;

                            _this.slide.min = min;
                            _this.slide.max = max;
                            _this.slide.elementStartPos = _this.getElementStartPos(_this.slide, ev);
                            _this.slide.pointerStartPos = ev.center[_this.direction];
                            _this.slide.started = true;
                            _this.onSlideStart(_this.slide, ev);
                        })['catch'](function () {
                            _this.slide = null;
                        });
                    }
                }, {
                    key: 'onDrag',
                    value: function onDrag(ev) {
                        if (!this.slide || !this.slide.started) return;
                        this.slide.pos = ev.center[this.direction];
                        this.slide.distance = util.clamp(this.slide.min, this.slide.pos - this.slide.pointerStartPos + this.slide.elementStartPos, this.slide.max);
                        this.slide.delta = this.slide.pos - this.slide.pointerStartPos;
                        this.onSlide(this.slide, ev);
                    }
                }, {
                    key: 'onDragEnd',
                    value: function onDragEnd(ev) {
                        if (!this.slide || !this.slide.started) return;
                        this.onSlideEnd(this.slide, ev);
                        this.slide = null;
                    }
                }, {
                    key: 'onSlideBeforeStart',
                    value: function onSlideBeforeStart() {}
                }, {
                    key: 'onSlideStart',
                    value: function onSlideStart() {}
                }, {
                    key: 'onSlide',
                    value: function onSlide() {}
                }, {
                    key: 'onSlideEnd',
                    value: function onSlideEnd() {}
                }]);

                return SlideGesture;
            })(DragGesture);

            _export('SlideGesture', SlideGesture);
        }
    };
});
System.register('ionic/platform/platform', ['../util/util', '../util/dom'], function (_export) {
    /**
    +* @ngdoc service
    +* @name platform
    +* @module ionic
    +* @description
    +* Platform returns the availble information about your current platform
    +*/

    /**
     * TODO
     */
    'use strict';

    var util, dom, Platform, PlatformNode, platformRegistry, platformDefault;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function insertSuperset(platformNode) {
        var supersetPlaformName = platformNode.superset();
        if (supersetPlaformName) {
            // add a platform in between two exist platforms
            // so we can build the correct hierarchy of active platforms
            var supersetPlatform = new PlatformNode(supersetPlaformName);
            supersetPlatform.parent(platformNode.parent());
            supersetPlatform.child(platformNode);
            if (supersetPlatform.parent()) {
                supersetPlatform.parent().child(supersetPlatform);
            }
            platformNode.parent(supersetPlatform);
        }
    }
    return {
        setters: [function (_utilUtil) {
            util = _utilUtil;
        }, function (_utilDom) {
            dom = _utilDom;
        }],
        execute: function () {
            Platform = (function () {
                function Platform() {
                    var _this = this;

                    var platforms = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

                    _classCallCheck(this, Platform);

                    this._platforms = platforms;
                    this._versions = {};
                    this._onResizes = [];
                    this._readyPromise = new Promise(function (res) {
                        _this._readyResolve = res;
                    });
                }

                // Methods
                // **********************************************
                /**
                 * @param {string} platformName
                 * @returns {bool} returns true/false based on platform you place
                 * @description
                 * Depending on the platform name, isPlatform will return true or flase
                 *
                 * ```
                 * import {Platform} 'ionic/ionic';
                 * export MyClass {
                 *    constructor(platform: Platform){
                 *      this.platform = platform;
                 *      if(this.platform.is('ios'){
                 *        // what ever you need to do for
                 *        // if the platfomr is ios
                 *      }
                 *    }
                 * }
                 * ```
                 */

                _createClass(Platform, [{
                    key: 'is',
                    value: function is(platformName) {
                        return this._platforms.indexOf(platformName) > -1;
                    }

                    /**
                     * @returns {array} the array of platforms
                     * @description
                     * Depending on what device you are on, `platforms` can return multiple values.
                     * Each possible value is a hierarchy of platforms. For example, on an iPhone,
                     * it would return mobile, ios, and iphone.
                     *
                     * ```
                     * import {Platform} 'ionic/ionic';
                     * export MyClass {
                     *    constructor(platform: Platform){
                     *      this.platform = platform;
                     *      console.log(this.platform.platforms());
                     *      // This will return an array of all the availble platforms
                     *      // From if your on mobile, to mobile os, and device name
                     *    }
                     * }
                     * ```
                     */
                }, {
                    key: 'platforms',
                    value: function platforms() {
                        // get the array of active platforms, which also knows the hierarchy,
                        // with the last one the most important
                        return this._platforms;
                    }

                    /**
                     * @param {string} optional platformName
                     * @returns {object} An object with various platform info
                     * - `{object=} `cordova`
                     * - `{object=}` `platformOS` {str: "9.1", num: 9.1, major: 9, minor: 1}
                     * - `{object=} `deviceName` Returns the name of the device
                     * - `{object=}` `device platform` R
                     * @description
                     * Returns an object conta
                     *
                     * ```
                     * import {Platform} 'ionic/ionic';
                     * export MyClass {
                     *    constructor(platform: Platform){
                     *      this.platform = platform;
                     *      console.log(this.platform.versions());
                     *      // or pass in a platform name
                     *      console.log(this.platform.versions('ios'));
                     *    }
                     * }
                     * ```
                     *
                     */
                }, {
                    key: 'versions',
                    value: function versions(platformName) {
                        if (arguments.length) {
                            // get a specific platform's version
                            return this._versions[platformName];
                        }
                        // get all the platforms that have a valid parsed version
                        return this._versions;
                    }
                }, {
                    key: 'version',
                    value: function version() {
                        for (var platformName in this._versions) {
                            if (this._versions[platformName]) {
                                return this._versions[platformName];
                            }
                        }
                        return {};
                    }

                    /**
                     * @returns {promise}
                     * @description
                     * Returns a promise when the platform is ready and native functionality can be called
                     *
                     * ```
                     * import {Platform} 'ionic/ionic';
                     * export MyClass {
                     *    constructor(platform: Platform){
                     *      this.platform = platform;
                     *      this.platform.ready().then(() => {
                     *        console.log('Platform ready');
                     *        // The platform is now ready, execute any native code you want
                     *       });
                     *    }
                     * }
                     * ```
                     */
                }, {
                    key: 'ready',
                    value: function ready() {
                        return this._readyPromise;
                    }

                    /**
                     * @private
                     * TODO
                     * @param {TODO} config  TODO
                     * @returns {TODO} TODO
                     */
                }, {
                    key: 'prepareReady',
                    value: function prepareReady(config) {
                        var self = this;
                        function resolve() {
                            self._readyResolve(config);
                        }
                        if (this._engineReady) {
                            // the engine provide a ready promise, use this instead
                            this._engineReady(resolve);
                        } else {
                            // there is no custom ready method from the engine
                            // use the default dom ready
                            dom.ready(resolve);
                        }
                    }

                    // Methods meant to be overridden by the engine
                    // **********************************************
                    // Provided NOOP methods so they do not error when
                    // called by engines (the browser) doesn't provide them
                }, {
                    key: 'on',
                    value: function on() {}
                }, {
                    key: 'onHardwareBackButton',
                    value: function onHardwareBackButton() {}
                }, {
                    key: 'registerBackButtonAction',
                    value: function registerBackButtonAction() {}
                }, {
                    key: 'exitApp',
                    value: function exitApp() {}
                }, {
                    key: 'fullScreen',
                    value: function fullScreen() {}
                }, {
                    key: 'showStatusBar',
                    value: function showStatusBar() {}

                    // Getter/Setter Methods
                    // **********************************************
                }, {
                    key: 'url',
                    value: function url(val) {
                        if (arguments.length) {
                            this._url = val;
                            this._qs = util.getQuerystring(val);
                        }
                        return this._url;
                    }
                }, {
                    key: 'query',
                    value: function query(key) {
                        return (this._qs || {})[key];
                    }
                }, {
                    key: 'userAgent',
                    value: function userAgent(val) {
                        if (arguments.length) {
                            this._ua = val;
                        }
                        return this._ua || '';
                    }
                }, {
                    key: 'navigatorPlatform',
                    value: function navigatorPlatform(val) {
                        if (arguments.length) {
                            this._bPlt = (val || '').toLowerCase();
                        }
                        return this._bPlt || '';
                    }
                }, {
                    key: 'width',
                    value: function width() {
                        return dom.windowDimensions().width;
                    }
                }, {
                    key: 'height',
                    value: function height() {
                        return dom.windowDimensions().height;
                    }
                }, {
                    key: 'isPortrait',
                    value: function isPortrait() {
                        return this.width() < this.height();
                    }
                }, {
                    key: 'isLandscape',
                    value: function isLandscape() {
                        return !this.isPortrait();
                    }
                }, {
                    key: 'windowResize',
                    value: function windowResize() {
                        var self = this;
                        clearTimeout(self._resizeTimer);
                        self._resizeTimer = setTimeout(function () {
                            dom.flushDimensionCache();
                            for (var i = 0; i < self._onResizes.length; i++) {
                                try {
                                    self._onResizes[i]();
                                } catch (e) {
                                    console.error(e);
                                }
                            }
                        }, 500);
                    }
                }, {
                    key: 'onResize',
                    value: function onResize(cb) {
                        this._onResizes.push(cb);
                    }

                    // Platform Registry
                    // **********************************************
                    /**
                     * TODO
                     * @param {TODO} platformConfig  TODO
                     */
                }, {
                    key: 'testQuery',

                    /**
                     * TODO
                     * @param {TODO} queryValue  TODO
                     * @returns {boolean} TODO
                     */
                    value: function testQuery(queryValue, queryTestValue) {
                        var valueSplit = queryValue.toLowerCase().split(';');
                        return valueSplit.indexOf(queryTestValue) > -1;
                    }

                    /**
                     * TODO
                     * @param {TODO} userAgentExpression  TODO
                     * @returns {boolean} TODO
                     */
                }, {
                    key: 'testUserAgent',
                    value: function testUserAgent(userAgentExpression) {
                        var rgx = new RegExp(userAgentExpression, 'i');
                        return rgx.test(this._ua || '');
                    }

                    /**
                     * TODO
                     * @param {TODO} userAgentExpression  TODO
                     * @returns {Object} TODO
                     */
                }, {
                    key: 'matchUserAgentVersion',
                    value: function matchUserAgentVersion(userAgentExpression) {
                        if (this._ua && userAgentExpression) {
                            var val = this._ua.match(userAgentExpression);
                            if (val) {
                                return {
                                    major: val[1],
                                    minor: val[2]
                                };
                            }
                        }
                    }

                    /**
                     * TODO
                     * @param {TODO} queryValue  TODO
                     * @param {TODO} userAgentExpression  TODO
                     * @returns {boolean} TODO
                     */
                }, {
                    key: 'isPlatform',
                    value: function isPlatform(queryTestValue, userAgentExpression) {
                        if (!userAgentExpression) {
                            userAgentExpression = queryTestValue;
                        }
                        var queryValue = this.query('ionicplatform');
                        if (queryValue) {
                            return this.testQuery(queryValue, queryTestValue);
                        }
                        return this.testUserAgent(userAgentExpression);
                    }

                    /**
                     * TODO
                     * @param {TODO} config  TODO
                     */
                }, {
                    key: 'load',
                    value: function load(platformOverride) {
                        var rootPlatformNode = null;
                        var engineNode = null;
                        var self = this;
                        this.platformOverride = platformOverride;
                        // figure out the most specific platform and active engine
                        var tmpPlatform = null;
                        for (var platformName in platformRegistry) {
                            tmpPlatform = this.matchPlatform(platformName);
                            if (tmpPlatform) {
                                // we found a platform match!
                                // check if its more specific than the one we already have
                                if (tmpPlatform.isEngine) {
                                    // because it matched then this should be the active engine
                                    // you cannot have more than one active engine
                                    engineNode = tmpPlatform;
                                } else if (!rootPlatformNode || tmpPlatform.depth > rootPlatformNode.depth) {
                                    // only find the root node for platforms that are not engines
                                    // set this node as the root since we either don't already
                                    // have one, or this one is more specific that the current one
                                    rootPlatformNode = tmpPlatform;
                                }
                            }
                        }
                        if (!rootPlatformNode) {
                            rootPlatformNode = new PlatformNode(platformDefault);
                        }
                        // build a Platform instance filled with the
                        // hierarchy of active platforms and settings
                        if (rootPlatformNode) {
                            // check if we found an engine node (cordova/node-webkit/etc)
                            if (engineNode) {
                                // add the engine to the first in the platform hierarchy
                                // the original rootPlatformNode now becomes a child
                                // of the engineNode, which is not the new root
                                engineNode.child(rootPlatformNode);
                                rootPlatformNode.parent(engineNode);
                                rootPlatformNode = engineNode;
                                // add any events which the engine would provide
                                // for example, Cordova provides its own ready event
                                var engineMethods = engineNode.methods();
                                engineMethods._engineReady = engineMethods.ready;
                                delete engineMethods.ready;
                                util.extend(this, engineMethods);
                            }
                            var platformNode = rootPlatformNode;
                            while (platformNode) {
                                insertSuperset(platformNode);
                                platformNode = platformNode.child();
                            }
                            // make sure the root noot is actually the root
                            // incase a node was inserted before the root
                            platformNode = rootPlatformNode.parent();
                            while (platformNode) {
                                rootPlatformNode = platformNode;
                                platformNode = platformNode.parent();
                            }
                            platformNode = rootPlatformNode;
                            while (platformNode) {
                                // set the array of active platforms with
                                // the last one in the array the most important
                                this._platforms.push(platformNode.name());
                                // get the platforms version if a version parser was provided
                                this._versions[platformNode.name()] = platformNode.version(this);
                                // go to the next platform child
                                platformNode = platformNode.child();
                            }
                        }
                    }

                    /**
                     * TODO
                     * @param {TODO} platformName  TODO
                     * @returns {TODO} TODO
                     */
                }, {
                    key: 'matchPlatform',
                    value: function matchPlatform(platformName) {
                        // build a PlatformNode and assign config data to it
                        // use it's getRoot method to build up its hierarchy
                        // depending on which platforms match
                        var platformNode = new PlatformNode(platformName);
                        var rootNode = platformNode.getRoot(this, 0);
                        if (rootNode) {
                            rootNode.depth = 0;
                            var childPlatform = rootNode.child();
                            while (childPlatform) {
                                rootNode.depth++;
                                childPlatform = childPlatform.child();
                            }
                        }
                        return rootNode;
                    }
                }], [{
                    key: 'register',
                    value: function register(platformConfig) {
                        platformRegistry[platformConfig.name] = platformConfig;
                    }
                }, {
                    key: 'registry',
                    value: function registry() {
                        return platformRegistry;
                    }

                    /**
                     * TODO
                     * @param {TODO} platformName  TODO
                     * @returns {string} TODO
                     */
                }, {
                    key: 'get',
                    value: function get(platformName) {
                        return platformRegistry[platformName] || {};
                    }
                }, {
                    key: 'setDefault',
                    value: function setDefault(platformName) {
                        platformDefault = platformName;
                    }
                }]);

                return Platform;
            })();

            _export('Platform', Platform);

            PlatformNode = (function () {
                function PlatformNode(platformName) {
                    _classCallCheck(this, PlatformNode);

                    this.c = Platform.get(platformName);
                    this.isEngine = this.c.isEngine;
                }

                _createClass(PlatformNode, [{
                    key: 'name',
                    value: function name() {
                        return this.c.name;
                    }
                }, {
                    key: 'settings',
                    value: function settings() {
                        return this.c.settings || {};
                    }
                }, {
                    key: 'superset',
                    value: function superset() {
                        return this.c.superset;
                    }
                }, {
                    key: 'methods',
                    value: function methods() {
                        return this.c.methods || {};
                    }
                }, {
                    key: 'parent',
                    value: function parent(val) {
                        if (arguments.length) {
                            this._parent = val;
                        }
                        return this._parent;
                    }
                }, {
                    key: 'child',
                    value: function child(val) {
                        if (arguments.length) {
                            this._child = val;
                        }
                        return this._child;
                    }
                }, {
                    key: 'isMatch',
                    value: function isMatch(p) {
                        if (p.platformOverride && !this.isEngine) {
                            return p.platformOverride === this.c.name;
                        } else if (!this.c.isMatch) {
                            return false;
                        }
                        return this.c.isMatch(p);
                    }
                }, {
                    key: 'version',
                    value: function version(p) {
                        if (this.c.versionParser) {
                            var v = this.c.versionParser(p);
                            if (v) {
                                var str = v.major + '.' + v.minor;
                                return {
                                    str: str,
                                    num: parseFloat(str),
                                    major: parseInt(v.major, 10),
                                    minor: parseInt(v.minor, 10)
                                };
                            }
                        }
                    }
                }, {
                    key: 'getRoot',
                    value: function getRoot(p) {
                        if (this.isMatch(p)) {
                            var parents = this.getSubsetParents(this.name());
                            if (!parents.length) {
                                return this;
                            }
                            var platform = null;
                            var rootPlatform = null;
                            for (var i = 0; i < parents.length; i++) {
                                platform = new PlatformNode(parents[i]);
                                platform.child(this);
                                rootPlatform = platform.getRoot(p);
                                if (rootPlatform) {
                                    this.parent(platform);
                                    return rootPlatform;
                                }
                            }
                        }
                        return null;
                    }
                }, {
                    key: 'getSubsetParents',
                    value: function getSubsetParents(subsetPlatformName) {
                        var platformRegistry = Platform.registry();
                        var parentPlatformNames = [];
                        var platform = null;
                        for (var platformName in platformRegistry) {
                            platform = platformRegistry[platformName];
                            if (platform.subsets && platform.subsets.indexOf(subsetPlatformName) > -1) {
                                parentPlatformNames.push(platformName);
                            }
                        }
                        return parentPlatformNames;
                    }
                }]);

                return PlatformNode;
            })();

            platformRegistry = {};
            platformDefault = null;
        }
    };
});
System.register('ionic/platform/registry', ['./platform', '../util/dom'], function (_export) {
    'use strict';

    var Platform, windowLoad;

    function isIOSDevice(p) {
        // shortcut function to be reused internally
        // checks navigator.platform to see if it's an actual iOS device
        // this does not use the user-agent string because it is often spoofed
        // an actual iPad will return true, a chrome dev tools iPad will return false
        return (/iphone|ipad|ipod/i.test(p.navigatorPlatform())
        );
    }
    return {
        setters: [function (_platform) {
            Platform = _platform.Platform;
        }, function (_utilDom) {
            windowLoad = _utilDom.windowLoad;
        }],
        execute: function () {
            Platform.register({
                name: 'core',
                settings: {
                    mode: 'ios',
                    keyboardHeight: 290
                }
            });
            Platform.setDefault('core');
            Platform.register({
                name: 'mobile'
            });
            Platform.register({
                name: 'phablet',
                isMatch: function isMatch(p) {
                    var smallest = Math.min(p.width(), p.height());
                    var largest = Math.max(p.width(), p.height());
                    return smallest > 390 && smallest < 520 && largest > 620 && largest < 800;
                }
            });
            Platform.register({
                name: 'tablet',
                isMatch: function isMatch(p) {
                    var smallest = Math.min(p.width(), p.height());
                    var largest = Math.max(p.width(), p.height());
                    return smallest > 460 && smallest < 820 && largest > 780 && largest < 1400;
                }
            });
            Platform.register({
                name: 'android',
                superset: 'mobile',
                subsets: ['phablet', 'tablet'],
                settings: {
                    activator: function activator(p) {
                        return p.version().major < 5 && p.navigatorPlatform().indexOf('linux') > -1 ? 'none' : 'ripple';
                    },
                    hoverCSS: false,
                    keyboardHeight: 300,
                    mode: 'md',
                    scrollAssist: true
                },
                isMatch: function isMatch(p) {
                    return p.isPlatform('android', 'android|silk');
                },
                versionParser: function versionParser(p) {
                    return p.matchUserAgentVersion(/Android (\d+).(\d+)?/);
                }
            });
            Platform.register({
                name: 'ios',
                superset: 'mobile',
                subsets: ['ipad', 'iphone'],
                settings: {
                    clickBlock: true,
                    hoverCSS: false,
                    keyboardHeight: 300,
                    mode: 'ios',
                    scrollAssist: isIOSDevice,
                    swipeBackEnabled: isIOSDevice,
                    swipeBackThreshold: 40,
                    tapPolyfill: isIOSDevice
                },
                isMatch: function isMatch(p) {
                    return p.isPlatform('ios', 'iphone|ipad|ipod');
                },
                versionParser: function versionParser(p) {
                    return p.matchUserAgentVersion(/OS (\d+)_(\d+)?/);
                }
            });
            Platform.register({
                name: 'ipad',
                superset: 'tablet',
                settings: {
                    keyboardHeight: 500
                },
                isMatch: function isMatch(p) {
                    return p.isPlatform('ipad');
                }
            });
            Platform.register({
                name: 'iphone',
                subsets: ['phablet'],
                isMatch: function isMatch(p) {
                    return p.isPlatform('iphone');
                }
            });
            Platform.register({
                name: 'windowsphone',
                superset: 'mobile',
                subsets: ['phablet', 'tablet'],
                settings: {
                    mode: 'md'
                },
                isMatch: function isMatch(p) {
                    return p.isPlatform('windowsphone', 'windows phone');
                },
                versionParser: function versionParser(p) {
                    return p.matchUserAgentVersion(/Windows Phone (\d+).(\d+)?/);
                }
            });
            Platform.register({
                name: 'cordova',
                isEngine: true,
                methods: {
                    ready: function ready(resolve) {
                        function isReady() {
                            document.removeEventListener('deviceready', isReady);
                            resolve();
                        }
                        windowLoad(function () {
                            document.addEventListener('deviceready', isReady);
                        });
                    }
                },
                isMatch: function isMatch() {
                    return !!(window.cordova || window.PhoneGap || window.phonegap);
                }
            });
        }
    };
});
System.register('ionic/platform/storage', ['./storage/storage', './storage/local-storage', './storage/sql'], function (_export) {
  'use strict';

  return {
    setters: [function (_storageStorage) {
      for (var _key in _storageStorage) {
        if (_key !== 'default') _export(_key, _storageStorage[_key]);
      }
    }, function (_storageLocalStorage) {
      for (var _key2 in _storageLocalStorage) {
        if (_key2 !== 'default') _export(_key2, _storageLocalStorage[_key2]);
      }
    }, function (_storageSql) {
      for (var _key3 in _storageSql) {
        if (_key3 !== 'default') _export(_key3, _storageSql[_key3]);
      }
    }],
    execute: function () {}
  };
});
System.register("ionic/translation/translate", ["angular2/angular2"], function (_export) {
    /**
     * Provide multi-language and i18n support in your app. Translate works by
     * mapping full strings to language translated ones. That means that you don't need
     * to provide strings for your default language, just new languages.
     *
     * @usage
     * ```js
     * Translate.translations({
     *   'de': {
     *     'Welcome to MyApp': 'Willkommen auf'
     *   }
     * })
     *
     * Changing the default language:
     *
     * Translate.setLanguage('de');
     * ```
     *
     * Usage in a template:
     *
     * ```js
     * <span>{{ 'Welcome to MyApp' | translate }}
     * ```
     */
    "use strict";

    var Injectable, __decorate, __metadata, Translate;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_angular2Angular2) {
            Injectable = _angular2Angular2.Injectable;
        }],
        execute: function () {
            __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
                switch (arguments.length) {
                    case 2:
                        return decorators.reduceRight(function (o, d) {
                            return d && d(o) || o;
                        }, target);
                    case 3:
                        return decorators.reduceRight(function (o, d) {
                            return d && d(target, key), void 0;
                        }, void 0);
                    case 4:
                        return decorators.reduceRight(function (o, d) {
                            return d && d(target, key, o) || o;
                        }, desc);
                }
            };

            __metadata = undefined && undefined.__metadata || function (k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };

            Translate = (function () {
                function Translate() {
                    _classCallCheck(this, Translate);

                    this._transMap = {};
                }

                _createClass(Translate, [{
                    key: "translations",
                    value: function translations(lang, map) {
                        this._transMap[lang] = map;
                    }
                }, {
                    key: "setLanguage",
                    value: function setLanguage(lang) {
                        this._language = lang;
                    }
                }, {
                    key: "getTranslations",
                    value: function getTranslations(lang) {
                        return this._transMap[lang];
                    }
                }, {
                    key: "translate",
                    value: function translate(key, lang) {
                        // If the language isn't specified and we have no overridden one, return the string passed.
                        if (!lang && !this._language) {
                            return key;
                        }
                        var setLanguage = lang || this._language;
                        var map = this.getTranslations(setLanguage);
                        if (!map) {
                            console.warn('I18N: No translation for key', key, 'using language', setLanguage);
                            return '';
                        }
                        return this._getTranslation(map, key);
                    }
                }, {
                    key: "_getTranslation",
                    value: function _getTranslation(map, key) {
                        return map && map[key] || '';
                    }
                }]);

                return Translate;
            })();

            _export("Translate", Translate);

            _export("Translate", Translate = __decorate([Injectable(), __metadata('design:paramtypes', [])], Translate));
        }
    };
});
System.register("ionic/translation/translate_pipe", ["angular2/angular2", "./translate"], function (_export) {
    /**
     * The Translate pipe makes it easy to translate strings.
     *
     * @usage
     * Translate using the current language or language set through Translate.setLanguage
     * {{ 'Please enter your location' | translate }}
     *
     * Translate using a specific language
     * {{ 'Please enter your location' | translate:"de" }}
     */
    "use strict";

    var Injectable, Pipe, Translate, __decorate, __metadata, TranslatePipe, _a;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_angular2Angular2) {
            Injectable = _angular2Angular2.Injectable;
            Pipe = _angular2Angular2.Pipe;
        }, function (_translate) {
            Translate = _translate.Translate;
        }],
        execute: function () {
            __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
                switch (arguments.length) {
                    case 2:
                        return decorators.reduceRight(function (o, d) {
                            return d && d(o) || o;
                        }, target);
                    case 3:
                        return decorators.reduceRight(function (o, d) {
                            return d && d(target, key), void 0;
                        }, void 0);
                    case 4:
                        return decorators.reduceRight(function (o, d) {
                            return d && d(target, key, o) || o;
                        }, desc);
                }
            };

            __metadata = undefined && undefined.__metadata || function (k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };

            TranslatePipe = (function () {
                function TranslatePipe(translate) {
                    _classCallCheck(this, TranslatePipe);

                    this.translate = translate;
                }

                _createClass(TranslatePipe, [{
                    key: "transform",
                    value: function transform(value, args) {
                        var lang = undefined;
                        if (args.length > 0) {
                            lang = args[0];
                        }
                        return this.translate.translate(value, lang);
                    }
                }, {
                    key: "supports",
                    value: function supports(obj) {
                        return true;
                    }
                }]);

                return TranslatePipe;
            })();

            _export("TranslatePipe", TranslatePipe);

            _export("TranslatePipe", TranslatePipe = __decorate([Pipe({ name: 'translate' }), Injectable(), __metadata('design:paramtypes', [typeof (_a = typeof Translate !== 'undefined' && Translate) === 'function' && _a || Object])], TranslatePipe));
        }
    };
});
System.register('ionic/util/click-block', [], function (_export) {
    'use strict';

    var CSS_CLICK_BLOCK, DEFAULT_EXPIRE, cbEle, fallbackTimerId, isShowing, ClickBlock;

    function disableInput(ev) {
        ev.preventDefault();
        ev.stopPropagation();
    }
    function show(expire) {
        clearTimeout(fallbackTimerId);
        fallbackTimerId = setTimeout(hide, expire || DEFAULT_EXPIRE);
        if (!isShowing) {
            isShowing = true;
            if (cbEle) {
                cbEle.classList.add(CSS_CLICK_BLOCK);
            } else {
                cbEle = document.createElement('div');
                cbEle.className = 'click-block ' + CSS_CLICK_BLOCK;
                document.body.appendChild(cbEle);
            }
            cbEle.addEventListener('touchmove', disableInput);
        }
    }
    function hide() {
        clearTimeout(fallbackTimerId);
        if (isShowing) {
            cbEle.classList.remove(CSS_CLICK_BLOCK);
            isShowing = false;
            cbEle.removeEventListener('touchmove', disableInput);
        }
    }
    return {
        setters: [],
        execute: function () {
            CSS_CLICK_BLOCK = 'click-block-active';
            DEFAULT_EXPIRE = 330;
            cbEle = undefined;
            fallbackTimerId = undefined;
            isShowing = false;

            ClickBlock = function ClickBlock(shouldShow, expire) {
                (shouldShow ? show : hide)(expire);
            };

            _export('ClickBlock', ClickBlock);
        }
    };
});
System.register('ionic/util/dom', [], function (_export) {
    'use strict';

    var nativeRaf, nativeCancelRaf, _raf, rafCancel, CSS, matchesFn, dimensionCache, dimensionIds;

    _export('raf', raf);

    _export('rafPromise', rafPromise);

    _export('rafFrames', rafFrames);

    _export('transitionEnd', transitionEnd);

    _export('animationStart', animationStart);

    _export('animationEnd', animationEnd);

    _export('ready', ready);

    _export('windowLoad', windowLoad);

    _export('pointerCoord', pointerCoord);

    _export('hasPointerMoved', hasPointerMoved);

    _export('isActive', isActive);

    _export('hasFocus', hasFocus);

    _export('isTextInput', isTextInput);

    _export('hasFocusedTextInput', hasFocusedTextInput);

    _export('closest', closest);

    /**
     * Get the element offsetWidth and offsetHeight. Values are cached
     * to reduce DOM reads. Cache is cleared on a window resize.
     * @param {TODO} ele  TODO
     */

    _export('removeElement', removeElement);

    _export('getDimensions', getDimensions);

    _export('windowDimensions', windowDimensions);

    _export('flushDimensionCache', flushDimensionCache);

    _export('parentOffsetEl', parentOffsetEl);

    /**
    * Get the current coordinates of the element, relative to the document.
    * Read-only equivalent of [jQuery's offset function](http://api.jquery.com/offset/).
    * @param {element} element The element to get the offset of.
    * @returns {object} Returns an object containing the properties top, left, width and height.
    */

    _export('position', position);

    _export('offset', offset);

    function raf(callback) {
        //console.log('raf', callback.toString().replace(/\s/g, '').replace('function', '').substring(0, 50));
        _raf(callback);
    }

    function rafPromise() {
        return new Promise(function (resolve) {
            return raf(resolve);
        });
    }

    function rafFrames(framesToWait, callback) {
        framesToWait = Math.ceil(framesToWait);
        if (framesToWait < 2) {
            raf(callback);
        } else {
            setTimeout(function () {
                raf(callback);
            }, (framesToWait - 1) * 17);
        }
    }

    function transitionEnd(el) {
        return cssPromise(el, CSS.transitionEnd);
    }

    function animationStart(el, animationName) {
        return cssPromise(el, CSS.animationStart, animationName);
    }

    function animationEnd(el, animationName) {
        return cssPromise(el, CSS.animationEnd, animationName);
    }

    function cssPromise(el, eventNames, animationName) {
        return new Promise(function (resolve) {
            eventNames.split(' ').forEach(function (eventName) {
                el.addEventListener(eventName, onEvent);
            });
            function onEvent(ev) {
                if (ev.animationName && animationName) {
                    // do not resolve if a bubbled up ev.animationName
                    // is not the same as the passed in animationName arg
                    if (ev.animationName !== animationName) {
                        return;
                    }
                } else if (ev.target !== el) {
                    // do not resolve if the event's target element is not
                    // the same as the element the listener was added to
                    return;
                }
                ev.stopPropagation();
                eventNames.split(' ').forEach(function (eventName) {
                    el.removeEventListener(eventName, onEvent);
                });
                resolve(ev);
            }
        });
    }

    function ready(callback) {
        var promise = null;
        if (!callback) {
            // a callback wasn't provided, so let's return a promise instead
            promise = new Promise(function (resolve) {
                callback = resolve;
            });
        }
        if (document.readyState === 'complete' || document.readyState === 'interactive') {
            callback();
        } else {
            (function () {
                var completed = function completed() {
                    document.removeEventListener('DOMContentLoaded', completed, false);
                    window.removeEventListener('load', completed, false);
                    callback();
                };

                document.addEventListener('DOMContentLoaded', completed, false);
                window.addEventListener('load', completed, false);
            })();
        }
        return promise;
    }

    function windowLoad(callback) {
        var promise = null;
        if (!callback) {
            // a callback wasn't provided, so let's return a promise instead
            promise = new Promise(function (resolve) {
                callback = resolve;
            });
        }
        if (document.readyState === 'complete') {
            callback();
        } else {
            (function () {
                var completed = function completed() {
                    window.removeEventListener('load', completed, false);
                    callback();
                };

                window.addEventListener('load', completed, false);
            })();
        }
        return promise;
    }

    function pointerCoord(ev) {
        // get coordinates for either a mouse click
        // or a touch depending on the given event
        var c = { x: 0, y: 0 };
        if (ev) {
            var touches = ev.touches && ev.touches.length ? ev.touches : [ev];
            var e = ev.changedTouches && ev.changedTouches[0] || touches[0];
            if (e) {
                c.x = e.clientX || e.pageX || 0;
                c.y = e.clientY || e.pageY || 0;
            }
        }
        return c;
    }

    function hasPointerMoved(threshold, startCoord, endCoord) {
        return startCoord && endCoord && (Math.abs(startCoord.x - endCoord.x) > threshold || Math.abs(startCoord.y - endCoord.y) > threshold);
    }

    function isActive(ele) {
        return !!(ele && document.activeElement === ele);
    }

    function hasFocus(ele) {
        return isActive(ele) && ele.parentElement.querySelector(':focus') === ele;
    }

    function isTextInput(ele) {
        return !!ele && (ele.tagName == 'TEXTAREA' || ele.contentEditable === 'true' || ele.tagName == 'INPUT' && !/^(radio|checkbox|range|file|submit|reset|color|image|button)$/i.test(ele.type));
    }

    function hasFocusedTextInput() {
        var ele = document.activeElement;
        if (isTextInput(ele)) {
            return ele.parentElement.querySelector(':focus') === ele;
        }
        return false;
    }

    function closest(ele, selector, checkSelf) {
        if (ele && matchesFn) {
            // traverse parents
            ele = checkSelf ? ele : ele.parentElement;
            while (ele !== null) {
                if (ele[matchesFn](selector)) {
                    return ele;
                }
                ele = ele.parentElement;
            }
        }
        return null;
    }

    function removeElement(ele) {
        ele && ele.parentNode && ele.parentNode.removeChild(ele);
    }

    function getDimensions(ion, ele) {
        if (!ion._dimId) {
            ion._dimId = ++dimensionIds;
            if (ion._dimId % 1000 === 0) {
                // periodically flush dimensions
                flushDimensionCache();
            }
        }
        var dimensions = dimensionCache[ion._dimId];
        if (!dimensions) {
            var _ele = ion.getNativeElement();
            // make sure we got good values before caching
            if (_ele.offsetWidth && _ele.offsetHeight) {
                dimensions = dimensionCache[ion._dimId] = {
                    width: _ele.offsetWidth,
                    height: _ele.offsetHeight,
                    left: _ele.offsetLeft,
                    top: _ele.offsetTop
                };
            } else {
                // do not cache bad values
                return { width: 0, height: 0, left: 0, top: 0 };
            }
        }
        return dimensions;
    }

    function windowDimensions() {
        if (!dimensionCache.win) {
            // make sure we got good values before caching
            if (window.innerWidth && window.innerHeight) {
                dimensionCache.win = {
                    width: window.innerWidth,
                    height: window.innerHeight
                };
            } else {
                // do not cache bad values
                return { width: 0, height: 0 };
            }
        }
        return dimensionCache.win;
    }

    function flushDimensionCache() {
        dimensionCache = {};
    }

    function isStaticPositioned(element) {
        return (element.style.position || 'static') === 'static';
    }
    /**
     * returns the closest, non-statically positioned parentOffset of a given element
     * @param element
     */

    function parentOffsetEl(element) {
        var offsetParent = element.offsetParent || document;
        while (offsetParent && offsetParent !== document && isStaticPositioned(offsetParent)) {
            offsetParent = offsetParent.offsetParent;
        }
        return offsetParent || document;
    }

    /**
     * Get the current coordinates of the element, relative to the offset parent.
     * Read-only equivalent of [jQuery's position function](http://api.jquery.com/position/).
     * @param {element} element The element to get the position of.
     * @returns {object} Returns an object containing the properties top, left, width and height.
     */

    function position(element) {
        var elBCR = offset(element);
        var offsetParentBCR = { top: 0, left: 0 };
        var offsetParentEl = parentOffsetEl(element);
        if (offsetParentEl != document) {
            offsetParentBCR = offset(offsetParentEl);
            offsetParentBCR.top += offsetParentEl.clientTop - offsetParentEl.scrollTop;
            offsetParentBCR.left += offsetParentEl.clientLeft - offsetParentEl.scrollLeft;
        }
        var boundingClientRect = element.getBoundingClientRect();
        return {
            width: boundingClientRect.width || element.offsetWidth,
            height: boundingClientRect.height || element.offsetHeight,
            top: elBCR.top - offsetParentBCR.top,
            left: elBCR.left - offsetParentBCR.left
        };
    }

    function offset(element) {
        var boundingClientRect = element.getBoundingClientRect();
        return {
            width: boundingClientRect.width || element.offsetWidth,
            height: boundingClientRect.height || element.offsetHeight,
            top: boundingClientRect.top + (window.pageYOffset || document.documentElement.scrollTop),
            left: boundingClientRect.left + (window.pageXOffset || document.documentElement.scrollLeft)
        };
    }

    return {
        setters: [],
        execute: function () {
            nativeRaf = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
            nativeCancelRaf = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.webkitCancelRequestAnimationFrame;

            _raf = nativeRaf || function (callback) {
                var timeCurrent = new Date().getTime(),
                    timeDelta = undefined;
                /* Dynamically set delay on a per-tick basis to match 60fps. */
                /* Technique by Erik Moller. MIT license: https://gist.github.com/paulirish/1579671 */
                timeDelta = Math.max(0, 16 - (timeCurrent - timeLast));
                timeLast = timeCurrent + timeDelta;
                return setTimeout(function () {
                    callback(timeCurrent + timeDelta);
                }, timeDelta);
            };

            rafCancel = nativeRaf ? nativeCancelRaf : function (id) {
                return window.cancelTimeout(id);
            };

            _export('rafCancel', rafCancel);

            CSS = {};

            _export('CSS', CSS);

            (function () {
                // transform
                var i,
                    keys = ['webkitTransform', 'transform', '-webkit-transform', 'webkit-transform', '-moz-transform', 'moz-transform', 'MozTransform', 'mozTransform', 'msTransform'];
                for (i = 0; i < keys.length; i++) {
                    if (document.documentElement.style[keys[i]] !== undefined) {
                        CSS.transform = keys[i];
                        break;
                    }
                }
                // transition
                keys = ['webkitTransition', 'mozTransition', 'msTransition', 'transition'];
                for (i = 0; i < keys.length; i++) {
                    if (document.documentElement.style[keys[i]] !== undefined) {
                        CSS.transition = keys[i];
                        break;
                    }
                }
                // The only prefix we care about is webkit for transitions.
                var isWebkit = CSS.transition.indexOf('webkit') > -1;
                CSS.prefix = isWebkit ? '-webkit-' : '';
                // transition duration
                CSS.transitionDuration = (isWebkit ? '-webkit-' : '') + 'transition-duration';
                // To be sure transitionend works everywhere, include *both* the webkit and non-webkit events
                CSS.transitionEnd = (isWebkit ? 'webkitTransitionEnd ' : '') + 'transitionend';
            })();
            if (window.onanimationend === undefined && window.onwebkitanimationend !== undefined) {
                CSS.animation = 'WebkitAnimation';
                CSS.animationStart = 'webkitAnimationStart animationstart';
                CSS.animationEnd = 'webkitAnimationEnd animationend';
            } else {
                CSS.animation = 'animation';
                CSS.animationStart = 'animationstart';
                CSS.animationEnd = 'animationend';
            }
            matchesFn = undefined;

            ['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector'].some(function (fn) {
                if (typeof document.documentElement[fn] == 'function') {
                    matchesFn = fn;
                }
            });
            dimensionCache = {};
            dimensionIds = 0;

            ;
        }
    };
});
System.register("ionic/util/events", ["angular2/angular2"], function (_export) {
    /**
     * Events is a pub/sub style event system for sending and responding to application-level
     * events across your app.
     */
    "use strict";

    var Injectable, __decorate, __metadata, Events;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_angular2Angular2) {
            Injectable = _angular2Angular2.Injectable;
        }],
        execute: function () {
            __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
                switch (arguments.length) {
                    case 2:
                        return decorators.reduceRight(function (o, d) {
                            return d && d(o) || o;
                        }, target);
                    case 3:
                        return decorators.reduceRight(function (o, d) {
                            return d && d(target, key), void 0;
                        }, void 0);
                    case 4:
                        return decorators.reduceRight(function (o, d) {
                            return d && d(target, key, o) || o;
                        }, desc);
                }
            };

            __metadata = undefined && undefined.__metadata || function (k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };

            Events = (function () {
                function Events() {
                    _classCallCheck(this, Events);

                    this.channels = [];
                }

                /**
                 * Subscribe to an event topic. Events that get posted to that topic
                 * will trigger the provided handler.
                 *
                 * @param topic the topic to subscribe to
                 * @param handler the event handler
                 */

                _createClass(Events, [{
                    key: "subscribe",
                    value: function subscribe(topic) {
                        var _this = this;

                        if (!this.channels[topic]) {
                            this.channels[topic] = [];
                        }

                        for (var _len = arguments.length, handlers = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                            handlers[_key - 1] = arguments[_key];
                        }

                        handlers.forEach(function (handler) {
                            _this.channels[topic].push(handler);
                        });
                    }

                    /**
                     * Unsubscribe from the given topic. Your handler will
                     * no longer receive events published to this topic.
                     *
                     * @param topic the topic to unsubscribe from
                     * @param handler the event handler
                     *
                     * @return true if a handler was removed
                     */
                }, {
                    key: "unsubscribe",
                    value: function unsubscribe(topic, handler) {
                        var t = this.channels[topic];
                        if (!t) {
                            // Wasn't found, wasn't removed
                            return false;
                        }
                        if (!handler) {
                            // Remove all handlers for this topic
                            delete this.channels[topic];
                            return true;
                        }
                        // We need to find and remove a specific handler
                        var i = t.indexOf(handler);
                        if (i < 0) {
                            // Wasn't found, wasn't removed
                            return false;
                        }
                        t.splice(i, 1);
                        // If the channel is empty now, remove it from the channel map
                        if (!t.length) {
                            delete this.channels[topic];
                        }
                        return true;
                    }

                    /**
                     * Publish an event to the given topic.
                     *
                     * @param topic the topic to publish to
                     * @param eventData the data to send as the event
                     */
                }, {
                    key: "publish",
                    value: function publish(topic) {
                        for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                            args[_key2 - 1] = arguments[_key2];
                        }

                        var t = this.channels[topic];
                        if (!t) {
                            return null;
                        }
                        var responses = [];
                        t.forEach(function (handler) {
                            responses.push(handler(args));
                        });
                        return responses;
                    }
                }]);

                return Events;
            })();

            _export("Events", Events);

            _export("Events", Events = __decorate([Injectable(), __metadata('design:paramtypes', [])], Events));
        }
    };
});
System.register('ionic/util/feature-detect', [], function (_export) {
    'use strict';

    var FeatureDetect, featureDetects;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [],
        execute: function () {
            FeatureDetect = (function () {
                function FeatureDetect() {
                    _classCallCheck(this, FeatureDetect);
                }

                _createClass(FeatureDetect, [{
                    key: 'run',
                    value: function run(window, document) {
                        this._results = {};
                        for (var _name in featureDetects) {
                            this._results[_name] = featureDetects[_name](window, document, document.body);
                        }
                    }
                }, {
                    key: 'has',
                    value: function has(featureName) {
                        return !!this._results[featureName];
                    }
                }], [{
                    key: 'add',
                    value: function add(name, fn) {
                        featureDetects[name] = fn;
                    }
                }]);

                return FeatureDetect;
            })();

            _export('FeatureDetect', FeatureDetect);

            featureDetects = {};

            // FeatureDetect.add('sticky', function(window, document) {
            //   // css position sticky
            //   let ele = document.createElement('div');
            //   ele.style.cssText = 'position:-webkit-sticky;position:sticky';
            //   return ele.style.position.indexOf('sticky') > -1;
            // });
            FeatureDetect.add('hairlines', function (window, document, body) {
                /**
                * Hairline Shim
                * Add the "hairline" CSS class name to the body tag
                * if the browser supports subpixels.
                */
                var canDo = false;
                if (window.devicePixelRatio >= 2) {
                    var hairlineEle = document.createElement('div');
                    hairlineEle.style.border = '.5px solid transparent';
                    body.appendChild(hairlineEle);
                    if (hairlineEle.offsetHeight === 1) {
                        body.classList.add('hairlines');
                        canDo = true;
                    }
                    body.removeChild(hairlineEle);
                }
                return canDo;
            });
        }
    };
});
System.register("ionic/util/form", ["angular2/angular2"], function (_export) {
    /**
     * The Input component is used to focus text input elements.
     *
     * @usage
     * ```html
     * <ion-input>
     *   <ion-label>Name</ion-label>
     *   <input value="Name" type="text">
     * </ion-input>
     * ```
     */
    "use strict";

    var Injectable, __decorate, __metadata, Form;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_angular2Angular2) {
            Injectable = _angular2Angular2.Injectable;
        }],
        execute: function () {
            __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
                switch (arguments.length) {
                    case 2:
                        return decorators.reduceRight(function (o, d) {
                            return d && d(o) || o;
                        }, target);
                    case 3:
                        return decorators.reduceRight(function (o, d) {
                            return d && d(target, key), void 0;
                        }, void 0);
                    case 4:
                        return decorators.reduceRight(function (o, d) {
                            return d && d(target, key, o) || o;
                        }, desc);
                }
            };

            __metadata = undefined && undefined.__metadata || function (k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };

            Form = (function () {
                function Form() {
                    _classCallCheck(this, Form);

                    this._inputs = [];
                    this._focused = null;
                    this.focusCtrl(document);
                }

                _createClass(Form, [{
                    key: "register",
                    value: function register(input) {
                        this._inputs.push(input);
                    }
                }, {
                    key: "deregister",
                    value: function deregister(input) {
                        var index = this._inputs.indexOf(input);
                        if (index > -1) {
                            this._inputs.splice(index, 1);
                        }
                        if (input === this._focused) {
                            this._focused = null;
                        }
                    }
                }, {
                    key: "focusCtrl",
                    value: function focusCtrl(document) {
                        // raw DOM fun
                        var focusCtrl = document.createElement('focus-ctrl');
                        focusCtrl.setAttribute('aria-hidden', true);
                        this._blur = document.createElement('button');
                        this._blur.tabIndex = -1;
                        focusCtrl.appendChild(this._blur);
                        document.body.appendChild(focusCtrl);
                    }
                }, {
                    key: "focusOut",
                    value: function focusOut() {
                        console.debug('focusOut');
                        this._blur.focus();
                    }
                }, {
                    key: "setAsFocused",
                    value: function setAsFocused(input) {
                        this._focused = input;
                    }

                    /**
                     * Focuses the next input element, if it exists.
                     */
                }, {
                    key: "focusNext",
                    value: function focusNext(currentInput) {
                        console.debug('focusNext');
                        var index = this._inputs.indexOf(currentInput);
                        if (index > -1 && index + 1 < this._inputs.length) {
                            var nextInput = this._inputs[index + 1];
                            if (nextInput !== this._focused) {
                                return nextInput.initFocus();
                            }
                        }
                        index = this._inputs.indexOf(this._focused);
                        if (index > 0) {
                            var previousInput = this._inputs[index - 1];
                            if (previousInput) {
                                previousInput.initFocus();
                            }
                        }
                    }
                }]);

                return Form;
            })();

            _export("Form", Form);

            _export("Form", Form = __decorate([Injectable(), __metadata('design:paramtypes', [])], Form));
        }
    };
});
System.register("ionic/util/keyboard", ["angular2/angular2", "../config/config", "./form", "./dom"], function (_export) {
    "use strict";

    var Injectable, NgZone, Config, Form, hasFocusedTextInput, raf, rafFrames, __decorate, __metadata, Keyboard, KEYBOARD_CLOSE_POLLING, _a, _b, _c;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_angular2Angular2) {
            Injectable = _angular2Angular2.Injectable;
            NgZone = _angular2Angular2.NgZone;
        }, function (_configConfig) {
            Config = _configConfig.Config;
        }, function (_form) {
            Form = _form.Form;
        }, function (_dom) {
            hasFocusedTextInput = _dom.hasFocusedTextInput;
            raf = _dom.raf;
            rafFrames = _dom.rafFrames;
        }],
        execute: function () {
            __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
                switch (arguments.length) {
                    case 2:
                        return decorators.reduceRight(function (o, d) {
                            return d && d(o) || o;
                        }, target);
                    case 3:
                        return decorators.reduceRight(function (o, d) {
                            return d && d(target, key), void 0;
                        }, void 0);
                    case 4:
                        return decorators.reduceRight(function (o, d) {
                            return d && d(target, key, o) || o;
                        }, desc);
                }
            };

            __metadata = undefined && undefined.__metadata || function (k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };

            Keyboard = (function () {
                function Keyboard(config, form, zone) {
                    var _this = this;

                    _classCallCheck(this, Keyboard);

                    this.form = form;
                    this.zone = zone;
                    zone.runOutsideAngular(function () {
                        _this.focusOutline(config.get('focusOutline'), document);
                    });
                }

                _createClass(Keyboard, [{
                    key: "isOpen",
                    value: function isOpen() {
                        return hasFocusedTextInput();
                    }
                }, {
                    key: "onClose",
                    value: function onClose(callback) {
                        var pollingInternval = arguments.length <= 1 || arguments[1] === undefined ? KEYBOARD_CLOSE_POLLING : arguments[1];

                        var self = this;
                        var promise = null;
                        if (!callback) {
                            // a callback wasn't provided, so let's return a promise instead
                            promise = new Promise(function (resolve) {
                                callback = resolve;
                            });
                        }
                        self.zone.runOutsideAngular(function () {
                            function checkKeyboard() {
                                if (!self.isOpen()) {
                                    rafFrames(30, function () {
                                        self.zone.run(function () {
                                            console.debug('keyboard closed');
                                            callback();
                                        });
                                    });
                                } else {
                                    setTimeout(checkKeyboard, pollingInternval);
                                }
                            }
                            setTimeout(checkKeyboard, pollingInternval);
                        });
                        return promise;
                    }
                }, {
                    key: "close",
                    value: function close() {
                        var _this2 = this;

                        raf(function () {
                            if (hasFocusedTextInput()) {
                                // only focus out when a text input has focus
                                _this2.form.focusOut();
                            }
                        });
                    }
                }, {
                    key: "focusOutline",
                    value: function focusOutline(setting, document) {
                        /* Focus Outline
                         * --------------------------------------------------
                         * By default, when a keydown event happens from a tab key, then
                         * the 'focus-outline' css class is added to the body element
                         * so focusable elements have an outline. On a mousedown or
                         * touchstart event, then the 'focus-outline' css class is removed.
                         *
                         * Config default overrides:
                         * focusOutline: true     - Always add the focus-outline
                         * focusOutline: false    - Do not add the focus-outline
                         */
                        var self = this;
                        var isKeyInputEnabled = false;
                        function cssClass() {
                            raf(function () {
                                document.body.classList[isKeyInputEnabled ? 'add' : 'remove']('focus-outline');
                            });
                        }
                        if (setting === true) {
                            isKeyInputEnabled = true;
                            return cssClass();
                        } else if (setting === false) {
                            return;
                        }
                        // default is to add the focus-outline when the tab key is used
                        function keyDown(ev) {
                            if (!isKeyInputEnabled && ev.keyCode == 9) {
                                isKeyInputEnabled = true;
                                enableKeyInput();
                            }
                        }
                        function pointerDown() {
                            isKeyInputEnabled = false;
                            enableKeyInput();
                        }
                        function enableKeyInput() {
                            cssClass();
                            self.zone.runOutsideAngular(function () {
                                document.removeEventListener('mousedown', pointerDown);
                                document.removeEventListener('touchstart', pointerDown);
                                if (isKeyInputEnabled) {
                                    document.addEventListener('mousedown', pointerDown);
                                    document.addEventListener('touchstart', pointerDown);
                                }
                            });
                        }
                        document.addEventListener('keydown', keyDown);
                    }
                }]);

                return Keyboard;
            })();

            _export("Keyboard", Keyboard);

            _export("Keyboard", Keyboard = __decorate([Injectable(), __metadata('design:paramtypes', [typeof (_a = typeof Config !== 'undefined' && Config) === 'function' && _a || Object, typeof (_b = typeof Form !== 'undefined' && Form) === 'function' && _b || Object, typeof (_c = typeof NgZone !== 'undefined' && NgZone) === 'function' && _c || Object])], Keyboard));
            KEYBOARD_CLOSE_POLLING = 150;
        }
    };
});
System.register('ionic/util/util', [], function (_export) {
    // Simple noop function
    'use strict';

    var isBoolean, isString, isNumber, isFunction, isDefined, isUndefined, isBlank, isObject, isArray, isTrueProperty, uid, array;

    _export('noop', noop);

    /**
     * Extend the destination with an arbitrary number of other objects.
     * @param dst the destination
     * @param ... the param objects
     */

    _export('clamp', clamp);

    /**
     * Do a deep extend (merge).
     * @param dst the destination
     * @param ... the param objects
     */

    _export('extend', extend);

    _export('merge', merge);

    /**
     * Apply default arguments if they don't exist in
     * the first object.
     * @param the destination to apply defaults to.
     */

    _export('debounce', debounce);

    _export('defaults', defaults);

    _export('pascalCaseToDashCase', pascalCaseToDashCase);

    _export('nextUid', nextUid);

    /**
     * Throttle the given fun, only allowing it to be
     * called at most every `wait` ms.
     */

    _export('getQuerystring', getQuerystring);

    _export('throttle', throttle);

    function noop() {}

    /**
     * Given a min and max, restrict the given number
     * to the range.
     * @param min the minimum
     * @param n the value
     * @param max the maximum
     */

    function clamp(min, n, max) {
        return Math.max(min, Math.min(n, max));
    }

    function extend(dst) {
        return _baseExtend(dst, [].slice.call(arguments, 1), false);
    }

    function merge(dst) {
        return _baseExtend(dst, [].slice.call(arguments, 1), true);
    }

    function _baseExtend(dst, objs, deep) {
        for (var i = 0, ii = objs.length; i < ii; ++i) {
            var obj = objs[i];
            if (!obj || !isObject(obj) && !isFunction(obj)) continue;
            var keys = Object.keys(obj);
            for (var j = 0, jj = keys.length; j < jj; j++) {
                var key = keys[j];
                var src = obj[key];
                if (deep && isObject(src)) {
                    if (!isObject(dst[key])) dst[key] = isArray(src) ? [] : {};
                    _baseExtend(dst[key], [src], true);
                } else {
                    dst[key] = src;
                }
            }
        }
        return dst;
    }

    function debounce(func, wait, immediate) {
        var timeout, args, context, timestamp, result;
        return function () {
            context = this;
            args = arguments;
            timestamp = new Date();
            var later = function later() {
                var last = new Date() - timestamp;
                if (last < wait) {
                    timeout = setTimeout(later, wait - last);
                } else {
                    timeout = null;
                    if (!immediate) result = func.apply(context, args);
                }
            };
            var callNow = immediate && !timeout;
            if (!timeout) {
                timeout = setTimeout(later, wait);
            }
            if (callNow) result = func.apply(context, args);
            return result;
        };
    }

    function defaults(dest) {
        for (var i = arguments.length - 1; i >= 1; i--) {
            var source = arguments[i] || {};
            for (var key in source) {
                if (source.hasOwnProperty(key) && !dest.hasOwnProperty(key)) {
                    dest[key] = source[key];
                }
            }
        }
        return dest;
    }

    /**
     * Convert a string in the format thisIsAString to a slug format this-is-a-string
     */

    function pascalCaseToDashCase() {
        var str = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

        return str.charAt(0).toLowerCase() + str.substring(1).replace(/[A-Z]/g, function (match) {
            return '-' + match.toLowerCase();
        });
    }

    function nextUid() {
        return ++uid;
    }

    /**
     * Grab the query string param value for the given key.
     * @param key the key to look for
     */

    function getQuerystring(url, key) {
        var queryParams = {};
        if (url) {
            var startIndex = url.indexOf('?');
            if (startIndex !== -1) {
                var queries = url.slice(startIndex + 1).split('&');
                queries.forEach(function (param) {
                    var split = param.split('=');
                    queryParams[split[0].toLowerCase()] = split[1].split('#')[0];
                });
            }
            if (key) {
                return queryParams[key] || '';
            }
        }
        return queryParams;
    }

    function throttle(func, wait, options) {
        var context, args, result;
        var timeout = null;
        var previous = 0;
        options || (options = {});
        var later = function later() {
            previous = options.leading === false ? 0 : Date.now();
            timeout = null;
            result = func.apply(context, args);
        };
        return function () {
            var now = Date.now();
            if (!previous && options.leading === false) previous = now;
            var remaining = wait - (now - previous);
            context = this;
            args = arguments;
            if (remaining <= 0) {
                clearTimeout(timeout);
                timeout = null;
                previous = now;
                result = func.apply(context, args);
            } else if (!timeout && options.trailing !== false) {
                timeout = setTimeout(later, remaining);
            }
            return result;
        };
    }

    return {
        setters: [],
        execute: function () {
            ;
            isBoolean = function isBoolean(val) {
                return typeof val === 'boolean';
            };

            _export('isBoolean', isBoolean);

            isString = function isString(val) {
                return typeof val === 'string';
            };

            _export('isString', isString);

            isNumber = function isNumber(val) {
                return typeof val === 'number';
            };

            _export('isNumber', isNumber);

            isFunction = function isFunction(val) {
                return typeof val === 'function';
            };

            _export('isFunction', isFunction);

            isDefined = function isDefined(val) {
                return typeof val !== 'undefined';
            };

            _export('isDefined', isDefined);

            isUndefined = function isUndefined(val) {
                return typeof val === 'undefined';
            };

            _export('isUndefined', isUndefined);

            isBlank = function isBlank(val) {
                return val === undefined || val === null;
            };

            _export('isBlank', isBlank);

            isObject = function isObject(val) {
                return typeof val === 'object';
            };

            _export('isObject', isObject);

            isArray = Array.isArray;

            _export('isArray', isArray);

            isTrueProperty = function isTrueProperty(val) {
                return typeof val !== 'undefined' && val !== "false";
            };

            _export('isTrueProperty', isTrueProperty);

            uid = 0;
            array = {
                find: function find(arr, cb) {
                    for (var i = 0, ii = arr.length; i < ii; i++) {
                        if (cb(arr[i], i)) return arr[i];
                    }
                },
                remove: function remove(arr, itemOrIndex) {
                    var index = -1;
                    if (isNumber(itemOrIndex)) {
                        index = itemOrIndex;
                    } else {
                        index = arr.indexOf(itemOrIndex);
                    }
                    if (index < 0) {
                        return false;
                    }
                    arr.splice(index, 1);
                    return true;
                }
            };

            _export('array', array);
        }
    };
});
System.register("ionic/components/action-sheet/action-sheet", ["angular2/angular2", "../overlay/overlay-controller", "../../config/config", "../icon/icon", "../../animations/animation", "../nav/nav-controller", "../../util/util"], function (_export) {
    /**
     * @name ActionSheet
     * @description
     * The Action Sheet is a slide-up pane that lets the user choose from a set of options. Dangerous options are made obvious.
     *
     * There are easy ways to cancel out of the action sheet, such as tapping the backdrop or even hitting escape on the keyboard for desktop testing.
     *
     * @usage
     * ```ts
     * openMenu() {
     *
     *   this.actionSheet.open({
     *     buttons: [
     *       { text: 'Share This' },
     *       { text: 'Move' }
     *     ],
     *     destructiveText: 'Delete',
     *     titleText: 'Modify your album',
     *     cancelText: 'Cancel',
     *     cancel: function() {
     *       console.log('Canceled');
     *     },
     *     destructiveButtonClicked: () => {
     *       console.log('Destructive clicked');
     *     },
     *     buttonClicked: function(index) {
     *       console.log('Button clicked', index);
     *       if(index == 1) { return false; }
     *       return true;
     *     }
     *
     *   }).then(actionSheetRef => {
     *     this.actionSheetRef = actionSheetRef;
     *   });
     *
     * }
     * ```
     */
    "use strict";

    var Component, Injectable, Renderer, NgFor, NgIf, OverlayController, Config, Icon, Animation, NavParams, extend, __decorate, __metadata, ActionSheetCmp, ActionSheet, OVERLAY_TYPE, ActionSheetSlideIn, ActionSheetSlideOut, ActionSheetMdSlideIn, ActionSheetMdSlideOut, _a, _b, _c, _d;

    var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_angular2Angular2) {
            Component = _angular2Angular2.Component;
            Injectable = _angular2Angular2.Injectable;
            Renderer = _angular2Angular2.Renderer;
            NgFor = _angular2Angular2.NgFor;
            NgIf = _angular2Angular2.NgIf;
        }, function (_overlayOverlayController) {
            OverlayController = _overlayOverlayController.OverlayController;
        }, function (_configConfig) {
            Config = _configConfig.Config;
        }, function (_iconIcon) {
            Icon = _iconIcon.Icon;
        }, function (_animationsAnimation) {
            Animation = _animationsAnimation.Animation;
        }, function (_navNavController) {
            NavParams = _navNavController.NavParams;
        }, function (_utilUtil) {
            extend = _utilUtil.extend;
        }],
        execute: function () {
            __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
                switch (arguments.length) {
                    case 2:
                        return decorators.reduceRight(function (o, d) {
                            return d && d(o) || o;
                        }, target);
                    case 3:
                        return decorators.reduceRight(function (o, d) {
                            return d && d(target, key), void 0;
                        }, void 0);
                    case 4:
                        return decorators.reduceRight(function (o, d) {
                            return d && d(target, key, o) || o;
                        }, desc);
                }
            };

            __metadata = undefined && undefined.__metadata || function (k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };

            ActionSheetCmp = (function () {
                function ActionSheetCmp(params, renderer) {
                    _classCallCheck(this, ActionSheetCmp);

                    this.d = params.data;
                    if (this.d.cssClass) {
                        renderer.setElementClass(elementRef, this.d.cssClass, true);
                    }
                }

                _createClass(ActionSheetCmp, [{
                    key: "cancel",
                    value: function cancel() {
                        this.d.cancel && this.d.cancel();
                        return this.close();
                    }
                }, {
                    key: "destructive",
                    value: function destructive() {
                        if (this.d.destructiveButtonClicked()) {
                            return this.close();
                        }
                    }
                }, {
                    key: "buttonClicked",
                    value: function buttonClicked(index) {
                        if (this.d.buttonClicked(index)) {
                            return this.close();
                        }
                    }
                }]);

                return ActionSheetCmp;
            })();

            ActionSheetCmp = __decorate([Component({
                selector: 'ion-action-sheet',
                template: '<backdrop (click)="cancel()" tappable disable-activated></backdrop>' + '<action-sheet-wrapper>' + '<div class="action-sheet-container">' + '<div class="action-sheet-group action-sheet-options">' + '<div class="action-sheet-title" *ng-if="d.titleText">{{d.titleText}}</div>' + '<button (click)="buttonClicked(i)" *ng-for="#b of d.buttons; #i=index" class="action-sheet-option disable-hover">' + '<icon [name]="b.icon" *ng-if="b.icon"></icon> ' + '{{b.text}}' + '</button>' + '<button *ng-if="d.destructiveText" (click)="destructive()" class="action-sheet-destructive disable-hover">' + '<icon [name]="d.destructiveIcon" *ng-if="d.destructiveIcon"></icon> ' + '{{d.destructiveText}}</button>' + '</div>' + '<div class="action-sheet-group action-sheet-cancel" *ng-if="d.cancelText">' + '<button (click)="cancel()" class="disable-hover">' + '<icon [name]="d.cancelIcon" *ng-if="d.cancelIcon"></icon> ' + '{{d.cancelText}}</button>' + '</div>' + '</div>' + '</action-sheet-wrapper>',
                host: {
                    'role': 'dialog'
                },
                directives: [NgFor, NgIf, Icon]
            }), __metadata('design:paramtypes', [typeof (_a = typeof NavParams !== 'undefined' && NavParams) === 'function' && _a || Object, typeof (_b = typeof Renderer !== 'undefined' && Renderer) === 'function' && _b || Object])], ActionSheetCmp);

            ActionSheet = (function () {
                function ActionSheet(ctrl, config) {
                    _classCallCheck(this, ActionSheet);

                    this.ctrl = ctrl;
                    this.config = config;
                }

                /**
                 * Create and open a new Action Sheet. This is the
                 * public API, and most often you will only use ActionSheet.open()
                 *
                 * @param {Object} [opts={}]  TODO
                 * @return {Promise} Promise that resolves when the action sheet is open.
                 */

                _createClass(ActionSheet, [{
                    key: "open",
                    value: function open() {
                        var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

                        opts = extend({
                            pageType: OVERLAY_TYPE,
                            enterAnimation: this.config.get('actionSheetEnter'),
                            leaveAnimation: this.config.get('actionSheetLeave'),
                            cancelIcon: this.config.get('actionSheetCancelIcon'),
                            destructiveIcon: this.config.get('actionSheetDestructiveIcon')
                        }, opts);
                        return this.ctrl.open(ActionSheetCmp, opts, opts);
                    }

                    /**
                     * TODO
                     * @returns {TODO} TODO
                     */
                }, {
                    key: "get",
                    value: function get(handle) {
                        if (handle) {
                            return this.ctrl.getByHandle(handle);
                        }
                        return this.ctrl.getByType(OVERLAY_TYPE);
                    }
                }]);

                return ActionSheet;
            })();

            _export("ActionSheet", ActionSheet);

            _export("ActionSheet", ActionSheet = __decorate([Injectable(), __metadata('design:paramtypes', [typeof (_c = typeof OverlayController !== 'undefined' && OverlayController) === 'function' && _c || Object, typeof (_d = typeof Config !== 'undefined' && Config) === 'function' && _d || Object])], ActionSheet));
            OVERLAY_TYPE = 'action-sheet';

            ActionSheetSlideIn = (function (_Animation) {
                _inherits(ActionSheetSlideIn, _Animation);

                function ActionSheetSlideIn(enteringView, leavingView, opts) {
                    _classCallCheck(this, ActionSheetSlideIn);

                    _get(Object.getPrototypeOf(ActionSheetSlideIn.prototype), "constructor", this).call(this, null, opts);
                    var ele = enteringView.pageRef().nativeElement;
                    var backdrop = new Animation(ele.querySelector('backdrop'));
                    var wrapper = new Animation(ele.querySelector('action-sheet-wrapper'));
                    backdrop.fromTo('opacity', 0.01, 0.4);
                    wrapper.fromTo('translateY', '100%', '0%');
                    this.easing('cubic-bezier(.36,.66,.04,1)').duration(400).add([backdrop, wrapper]);
                }

                return ActionSheetSlideIn;
            })(Animation);

            Animation.register('action-sheet-slide-in', ActionSheetSlideIn);

            ActionSheetSlideOut = (function (_Animation2) {
                _inherits(ActionSheetSlideOut, _Animation2);

                function ActionSheetSlideOut(enteringView, leavingView, opts) {
                    _classCallCheck(this, ActionSheetSlideOut);

                    _get(Object.getPrototypeOf(ActionSheetSlideOut.prototype), "constructor", this).call(this, null, opts);
                    var ele = leavingView.pageRef().nativeElement;
                    var backdrop = new Animation(ele.querySelector('backdrop'));
                    var wrapper = new Animation(ele.querySelector('action-sheet-wrapper'));
                    backdrop.fromTo('opacity', 0.4, 0);
                    wrapper.fromTo('translateY', '0%', '100%');
                    this.easing('cubic-bezier(.36,.66,.04,1)').duration(300).add([backdrop, wrapper]);
                }

                return ActionSheetSlideOut;
            })(Animation);

            Animation.register('action-sheet-slide-out', ActionSheetSlideOut);

            ActionSheetMdSlideIn = (function (_Animation3) {
                _inherits(ActionSheetMdSlideIn, _Animation3);

                function ActionSheetMdSlideIn(enteringView, leavingView, opts) {
                    _classCallCheck(this, ActionSheetMdSlideIn);

                    _get(Object.getPrototypeOf(ActionSheetMdSlideIn.prototype), "constructor", this).call(this, null, opts);
                    var ele = enteringView.pageRef().nativeElement;
                    var backdrop = new Animation(ele.querySelector('backdrop'));
                    var wrapper = new Animation(ele.querySelector('action-sheet-wrapper'));
                    backdrop.fromTo('opacity', 0.01, 0.26);
                    wrapper.fromTo('translateY', '100%', '0%');
                    this.easing('cubic-bezier(.36,.66,.04,1)').duration(450).add([backdrop, wrapper]);
                }

                return ActionSheetMdSlideIn;
            })(Animation);

            Animation.register('action-sheet-md-slide-in', ActionSheetMdSlideIn);

            ActionSheetMdSlideOut = (function (_Animation4) {
                _inherits(ActionSheetMdSlideOut, _Animation4);

                function ActionSheetMdSlideOut(enteringView, leavingView, opts) {
                    _classCallCheck(this, ActionSheetMdSlideOut);

                    _get(Object.getPrototypeOf(ActionSheetMdSlideOut.prototype), "constructor", this).call(this, null, opts);
                    var ele = leavingView.pageRef().nativeElement;
                    var backdrop = new Animation(ele.querySelector('backdrop'));
                    var wrapper = new Animation(ele.querySelector('action-sheet-wrapper'));
                    backdrop.fromTo('opacity', 0.26, 0);
                    wrapper.fromTo('translateY', '0%', '100%');
                    this.easing('cubic-bezier(.36,.66,.04,1)').duration(450).add([backdrop, wrapper]);
                }

                return ActionSheetMdSlideOut;
            })(Animation);

            Animation.register('action-sheet-md-slide-out', ActionSheetMdSlideOut);
        }
    };
});
System.register('ionic/components/app/app', ['angular2/angular2', '../../util/dom', '../../util/click-block'], function (_export) {
    /**
     * Component registry service.  For more information on registering
     * components see the [IdRef API reference](../id/IdRef/).
     */
    'use strict';

    var Title, rafFrames, ClickBlock, IonicApp;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_angular2Angular2) {
            Title = _angular2Angular2.Title;
        }, function (_utilDom) {
            rafFrames = _utilDom.rafFrames;
        }, function (_utilClickBlock) {
            ClickBlock = _utilClickBlock.ClickBlock;
        }],
        execute: function () {
            IonicApp = (function () {
                function IonicApp(config) {
                    _classCallCheck(this, IonicApp);

                    this._config = config;
                    this._titleSrv = new Title();
                    this._title = '';
                    this._disTime = 0;
                    // Our component registry map
                    this.components = {};
                }

                /**
                 * Sets the document title.
                 * @param {string} val  Value to set the document title to.
                 */

                _createClass(IonicApp, [{
                    key: 'setTitle',
                    value: function setTitle(val) {
                        var self = this;
                        if (val !== self._title) {
                            var setAppTitle = function setAppTitle() {
                                self._titleSrv.setTitle(self._title);
                            };

                            self._title = val;

                            rafFrames(4, setAppTitle);
                        }
                    }

                    /**
                     * Sets if the app is currently enabled or not, meaning if it's
                     * available to accept new user commands. For example, this is set to `false`
                     * while views transition, a modal slides up, an action-sheet
                     * slides up, etc. After the transition completes it is set back to `true`.
                     * @param {bool} isEnabled
                     * @param {bool} fallback  When `isEnabled` is set to `false`, this argument
                     * is used to set the maximum number of milliseconds that app will wait until
                     * it will automatically enable the app again. It's basically a fallback incase
                     * something goes wrong during a transition and the app wasn't re-enabled correctly.
                     */
                }, {
                    key: 'setEnabled',
                    value: function setEnabled(isEnabled) {
                        var fallback = arguments.length <= 1 || arguments[1] === undefined ? 700 : arguments[1];

                        this._disTime = isEnabled ? 0 : Date.now() + fallback;
                        if (this._config.get('clickBlock')) {
                            ClickBlock(!isEnabled, fallback + 100);
                        }
                    }

                    /**
                     * Boolean if the app is actively enabled or not.
                     * @return {bool}
                     */
                }, {
                    key: 'isEnabled',
                    value: function isEnabled() {
                        return this._disTime < Date.now();
                    }

                    /**
                     * Register a known component with a key, for easy lookups later.
                     * @param {TODO} id  The id to use to register the component
                     * @param {TODO} component  The component to register
                     */
                }, {
                    key: 'register',
                    value: function register(id, component) {
                        if (this.components[id] && this.components[id] !== component) {}
                        this.components[id] = component;
                    }

                    /**
                     * Unregister a known component with a key.
                     * @param {TODO} id  The id to use to unregister
                     */
                }, {
                    key: 'unregister',
                    value: function unregister(id) {
                        delete this.components[id];
                    }

                    /**
                     * Get a registered component with the given type (returns the first)
                     * @param {Object} cls the type to search for
                     * @return the matching component, or undefined if none was found
                     */
                }, {
                    key: 'getRegisteredComponent',
                    value: function getRegisteredComponent(cls) {
                        var _iteratorNormalCompletion = true;
                        var _didIteratorError = false;
                        var _iteratorError = undefined;

                        try {
                            for (var _iterator = this.components[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                var component = _step.value;

                                if (component instanceof cls) {
                                    return component;
                                }
                            }
                        } catch (err) {
                            _didIteratorError = true;
                            _iteratorError = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion && _iterator['return']) {
                                    _iterator['return']();
                                }
                            } finally {
                                if (_didIteratorError) {
                                    throw _iteratorError;
                                }
                            }
                        }
                    }

                    /**
                     * Get the component for the given key.
                     * @param {TODO} key  TODO
                     * @return {TODO} TODO
                     */
                }, {
                    key: 'getComponent',
                    value: function getComponent(id) {
                        return this.components[id];
                    }
                }]);

                return IonicApp;
            })();

            _export('IonicApp', IonicApp);
        }
    };
});
System.register("ionic/components/app/id", ["angular2/angular2", "./app"], function (_export) {
    /**
     * IdRef is an easy way to identify unique components in an app and access them
     * no matter where in the UI heirarchy you are. For example, this makes toggling
     * a global side menu feasible from any place in the application.
     *
     * See the [Menu section](http://localhost:4000/docs/v2/components/#menus) of
     * the Component docs for an example of how Menus rely on ID's.
     *
     * To give any component an ID, simply set its `id` property:
     * ```html
     * <ion-checkbox id="myCheckbox"></ion-checkbox>
     * ```
     *
     * To get a reference to the registered component, inject the [IonicApp](../app/IonicApp/)
     * service:
     * ```ts
     * constructor(app: IonicApp) {
     *   var checkbox = app.getComponent("myCheckbox");
     *   if (checkbox.checked) console.log('checkbox is checked');
     * }
     * ```
     *
     * *NOTE:* It is not recommended to use ID's across Pages, as there is often no
     * guarantee that the registered component has not been destroyed if its Page
     * has been navigated away from.
     */
    "use strict";

    var AppViewManager, ElementRef, Directive, Renderer, IonicApp, __decorate, __metadata, IdRef, Attr, _a, _b, _c, _d, _e;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_angular2Angular2) {
            AppViewManager = _angular2Angular2.AppViewManager;
            ElementRef = _angular2Angular2.ElementRef;
            Directive = _angular2Angular2.Directive;
            Renderer = _angular2Angular2.Renderer;
        }, function (_app) {
            IonicApp = _app.IonicApp;
        }],
        execute: function () {
            __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
                switch (arguments.length) {
                    case 2:
                        return decorators.reduceRight(function (o, d) {
                            return d && d(o) || o;
                        }, target);
                    case 3:
                        return decorators.reduceRight(function (o, d) {
                            return d && d(target, key), void 0;
                        }, void 0);
                    case 4:
                        return decorators.reduceRight(function (o, d) {
                            return d && d(target, key, o) || o;
                        }, desc);
                }
            };

            __metadata = undefined && undefined.__metadata || function (k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };

            IdRef = (function () {
                function IdRef(app, elementRef, appViewManager) {
                    _classCallCheck(this, IdRef);

                    this.app = app;
                    this.elementRef = elementRef;
                    this.appViewManager = appViewManager;
                    // Grab the component this directive is attached to
                    this.component = appViewManager.getComponent(elementRef);
                }

                /**
                 * @private
                 */

                _createClass(IdRef, [{
                    key: "onInit",
                    value: function onInit() {
                        this.app.register(this.id, this.component);
                    }

                    /**
                     * @private
                     */
                }, {
                    key: "onDestroy",
                    value: function onDestroy() {
                        this.app.unregister(this.id);
                    }
                }]);

                return IdRef;
            })();

            _export("IdRef", IdRef);

            _export("IdRef", IdRef = __decorate([Directive({
                selector: '[id]',
                inputs: ['id']
            }), __metadata('design:paramtypes', [typeof (_a = typeof IonicApp !== 'undefined' && IonicApp) === 'function' && _a || Object, typeof (_b = typeof ElementRef !== 'undefined' && ElementRef) === 'function' && _b || Object, typeof (_c = typeof AppViewManager !== 'undefined' && AppViewManager) === 'function' && _c || Object])], IdRef));

            Attr = (function () {
                function Attr(renderer, elementRef) {
                    _classCallCheck(this, Attr);

                    this.renderer = renderer;
                    this.elementRef = elementRef;
                }

                /**
                 * @private
                 */

                _createClass(Attr, [{
                    key: "onInit",
                    value: function onInit() {
                        this.renderer.setElementAttribute(this.elementRef, this.attr, '');
                    }
                }]);

                return Attr;
            })();

            _export("Attr", Attr);

            _export("Attr", Attr = __decorate([Directive({
                selector: '[attr]',
                inputs: ['attr']
            }), __metadata('design:paramtypes', [typeof (_d = typeof Renderer !== 'undefined' && Renderer) === 'function' && _d || Object, typeof (_e = typeof ElementRef !== 'undefined' && ElementRef) === 'function' && _e || Object])], Attr));
        }
    };
});
System.register("ionic/components/blur/blur", ["angular2/angular2"], function (_export) {
    "use strict";

    var Directive, Renderer, ElementRef, __decorate, __metadata, Blur, _a, _b;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_angular2Angular2) {
            Directive = _angular2Angular2.Directive;
            Renderer = _angular2Angular2.Renderer;
            ElementRef = _angular2Angular2.ElementRef;
        }],
        execute: function () {
            __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
                switch (arguments.length) {
                    case 2:
                        return decorators.reduceRight(function (o, d) {
                            return d && d(o) || o;
                        }, target);
                    case 3:
                        return decorators.reduceRight(function (o, d) {
                            return d && d(target, key), void 0;
                        }, void 0);
                    case 4:
                        return decorators.reduceRight(function (o, d) {
                            return d && d(target, key, o) || o;
                        }, desc);
                }
            };

            __metadata = undefined && undefined.__metadata || function (k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };

            Blur = function Blur(elementRef, renderer) {
                _classCallCheck(this, Blur);

                this.elementRef = elementRef;
                this.renderer = renderer;
                renderer.setElementStyle(elementRef, '-webkit-backdrop-filter', 'blur(10px)');
            };

            _export("Blur", Blur);

            _export("Blur", Blur = __decorate([Directive({
                selector: '[ion-blur]'
            }), __metadata('design:paramtypes', [typeof (_a = typeof ElementRef !== 'undefined' && ElementRef) === 'function' && _a || Object, typeof (_b = typeof Renderer !== 'undefined' && Renderer) === 'function' && _b || Object])], Blur));
        }
    };
});
System.register("ionic/components/button/button", ["angular2/angular2", "../../config/config"], function (_export) {
    /**
     * TODO
     */
    "use strict";

    var Directive, ElementRef, Renderer, Attribute, Config, __decorate, __metadata, __param, Button, TEXT, ICON, _a, _b, _c;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_angular2Angular2) {
            Directive = _angular2Angular2.Directive;
            ElementRef = _angular2Angular2.ElementRef;
            Renderer = _angular2Angular2.Renderer;
            Attribute = _angular2Angular2.Attribute;
        }, function (_configConfig) {
            Config = _configConfig.Config;
        }],
        execute: function () {
            __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
                switch (arguments.length) {
                    case 2:
                        return decorators.reduceRight(function (o, d) {
                            return d && d(o) || o;
                        }, target);
                    case 3:
                        return decorators.reduceRight(function (o, d) {
                            return d && d(target, key), void 0;
                        }, void 0);
                    case 4:
                        return decorators.reduceRight(function (o, d) {
                            return d && d(target, key, o) || o;
                        }, desc);
                }
            };

            __metadata = undefined && undefined.__metadata || function (k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };

            __param = undefined && undefined.__param || function (paramIndex, decorator) {
                return function (target, key) {
                    decorator(target, key, paramIndex);
                };
            };

            Button = function Button(config, elementRef, renderer, type) {
                _classCallCheck(this, Button);

                var element = elementRef.nativeElement;
                if (config.get('hoverCSS') === false) {
                    renderer.setElementClass(elementRef, 'disable-hover', true);
                }
                if (element.hasAttribute('ion-item')) {
                    // no need to put on these icon classes for an ion-item
                    return;
                }
                if (type) {
                    renderer.setElementAttribute(elementRef, type, '');
                }
                // figure out if and where the icon lives in the button
                var childNodes = element.childNodes;
                var childNode = undefined;
                var nodes = [];
                for (var i = 0, l = childNodes.length; i < l; i++) {
                    childNode = childNodes[i];
                    if (childNode.nodeType === 3) {
                        // text node
                        if (childNode.textContent.trim() !== '') {
                            nodes.push(TEXT);
                        }
                    } else if (childNode.nodeType === 1) {
                        if (childNode.nodeName === 'ICON') {
                            // icon element node
                            nodes.push(ICON);
                        } else {
                            // element other than an <icon>
                            nodes.push(TEXT);
                        }
                    }
                }
                if (nodes.length > 1) {
                    if (nodes[0] === ICON && nodes[1] === TEXT) {
                        element.classList.add('icon-left');
                    } else if (nodes[0] === TEXT && nodes[1] === ICON) {
                        element.classList.add('icon-right');
                    }
                } else if (nodes.length === 1 && nodes[0] === ICON) {
                    element.classList.add('icon-only');
                }
            };

            _export("Button", Button);

            _export("Button", Button = __decorate([Directive({
                selector: 'button,[button]'
            }), __param(3, Attribute('type')), __metadata('design:paramtypes', [typeof (_a = typeof Config !== 'undefined' && Config) === 'function' && _a || Object, typeof (_b = typeof ElementRef !== 'undefined' && ElementRef) === 'function' && _b || Object, typeof (_c = typeof Renderer !== 'undefined' && Renderer) === 'function' && _c || Object, String])], Button));
            TEXT = 1;
            ICON = 2;
        }
    };
});
System.register("ionic/components/checkbox/checkbox", ["angular2/angular2", "../../util/form"], function (_export) {
    /**
     * The checkbox is no different than the HTML checkbox input, except it's styled differently
     *
     * See the [Angular 2 Docs](https://angular.io/docs/js/latest/api/core/Form-interface.html) for more info on forms and input.
     *
     * @usage
     * ```html
     * <ion-checkbox checked="true" value="isChecked" ng-control="htmlCtrl">
     *   HTML5
     * </ion-checkbox>
     * ```
     */
    "use strict";

    var Component, Optional, NgControl, ElementRef, Form, __decorate, __metadata, __param, Checkbox, _a, _b, _c;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_angular2Angular2) {
            Component = _angular2Angular2.Component;
            Optional = _angular2Angular2.Optional;
            NgControl = _angular2Angular2.NgControl;
            ElementRef = _angular2Angular2.ElementRef;
        }, function (_utilForm) {
            Form = _utilForm.Form;
        }],
        execute: function () {
            __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
                switch (arguments.length) {
                    case 2:
                        return decorators.reduceRight(function (o, d) {
                            return d && d(o) || o;
                        }, target);
                    case 3:
                        return decorators.reduceRight(function (o, d) {
                            return d && d(target, key), void 0;
                        }, void 0);
                    case 4:
                        return decorators.reduceRight(function (o, d) {
                            return d && d(target, key, o) || o;
                        }, desc);
                }
            };

            __metadata = undefined && undefined.__metadata || function (k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };

            __param = undefined && undefined.__param || function (paramIndex, decorator) {
                return function (target, key) {
                    decorator(target, key, paramIndex);
                };
            };

            Checkbox = (function () {
                function Checkbox(form, ngControl, elementRef) {
                    _classCallCheck(this, Checkbox);

                    this.form = form;
                    form.register(this);
                    this.onChange = function (_) {};
                    this.onTouched = function (_) {};
                    this.ngControl = ngControl;
                    if (ngControl) ngControl.valueAccessor = this;
                }

                _createClass(Checkbox, [{
                    key: "onInit",
                    value: function onInit() {
                        this.labelId = 'label-' + this.inputId;
                    }

                    /**
                     * Toggle the checked state of the checkbox. Calls onChange to pass the
                     * updated checked state to the model (Control).
                     */
                }, {
                    key: "toggle",
                    value: function toggle() {
                        this.checked = !this.checked;
                        this.onChange(this.checked);
                    }

                    /**
                     * @private
                     * Click event handler to toggle the checkbox checked state.
                     * @param {MouseEvent} ev  The click event.
                     */
                }, {
                    key: "click",
                    value: function click(ev) {
                        ev.preventDefault();
                        ev.stopPropagation();
                        this.toggle();
                    }

                    /**
                     * @private
                     * Angular2 Forms API method called by the model (Control) on change to update
                     * the checked value.
                     * https://github.com/angular/angular/blob/master/modules/angular2/src/forms/directives/shared.ts#L34
                     */
                }, {
                    key: "writeValue",
                    value: function writeValue(value) {
                        this.checked = value;
                    }

                    /**
                     * @private
                     * Angular2 Forms API method called by the view (NgControl) to register the
                     * onChange event handler that updates the model (Control).
                     * https://github.com/angular/angular/blob/master/modules/angular2/src/forms/directives/shared.ts#L27
                     * @param {Function} fn  the onChange event handler.
                     */
                }, {
                    key: "registerOnChange",
                    value: function registerOnChange(fn) {
                        this.onChange = fn;
                    }

                    /**
                     * @private
                     * Angular2 Forms API method called by the the view (NgControl) to register
                     * the onTouched event handler that marks model (Control) as touched.
                     * @param {Function} fn  onTouched event handler.
                     */
                }, {
                    key: "registerOnTouched",
                    value: function registerOnTouched(fn) {
                        this.onTouched = fn;
                    }

                    /**
                     * @private
                     */
                }, {
                    key: "onDestroy",
                    value: function onDestroy() {
                        this.form.deregister(this);
                    }
                }]);

                return Checkbox;
            })();

            _export("Checkbox", Checkbox);

            _export("Checkbox", Checkbox = __decorate([Component({
                selector: 'ion-checkbox',
                inputs: ['value', 'checked', 'disabled', 'id'],
                host: {
                    'role': 'checkbox',
                    'tappable': 'true',
                    '[attr.tab-index]': 'tabIndex',
                    '[attr.aria-checked]': 'checked',
                    '[attr.aria-disabled]': 'disabled',
                    '[attr.aria-labelledby]': 'labelId',
                    '(click)': 'click($event)',
                    'class': 'item'
                },
                template: '<div class="item-inner">' + '<media-checkbox disable-activated>' + '<checkbox-icon></checkbox-icon>' + '</media-checkbox>' + '<ion-item-content id="{{labelId}}">' + '<ng-content></ng-content>' + '</ion-item-content>' + '</div>'
            }), __param(1, Optional()), __metadata('design:paramtypes', [typeof (_a = typeof Form !== 'undefined' && Form) === 'function' && _a || Object, typeof (_b = typeof NgControl !== 'undefined' && NgControl) === 'function' && _b || Object, typeof (_c = typeof ElementRef !== 'undefined' && ElementRef) === 'function' && _c || Object])], Checkbox));
        }
    };
});
System.register("ionic/components/content/content", ["angular2/angular2", "../ion", "../../config/config", "../../util/dom", "../../util/keyboard", "../nav/view-controller", "../../animations/scroll-to"], function (_export) {
    /**
     * The Content component provides an easy to use content area that can be configured to use Ionic's custom Scroll View, or the built in overflow scrolling of the browser.
     *
     * While we recommend using the custom Scroll features in Ionic in most cases, sometimes (for performance reasons) only the browser's native overflow scrolling will suffice, and so we've made it easy to toggle between the Ionic scroll implementation and overflow scrolling.
     *
     * You can implement pull-to-refresh with the [Refresher](../../scroll/Refresher) component.
     *
     * @usage
     * ```html
     * <ion-content>
     *   Add your content here!
     * </ion-content>
     * ```
     *
     */
    "use strict";

    var Component, ElementRef, Optional, NgZone, Ion, Config, raf, Keyboard, ViewController, ScrollTo, __decorate, __metadata, __param, Content, _a, _b, _c, _d, _e;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    return {
        setters: [function (_angular2Angular2) {
            Component = _angular2Angular2.Component;
            ElementRef = _angular2Angular2.ElementRef;
            Optional = _angular2Angular2.Optional;
            NgZone = _angular2Angular2.NgZone;
        }, function (_ion) {
            Ion = _ion.Ion;
        }, function (_configConfig) {
            Config = _configConfig.Config;
        }, function (_utilDom) {
            raf = _utilDom.raf;
        }, function (_utilKeyboard) {
            Keyboard = _utilKeyboard.Keyboard;
        }, function (_navViewController) {
            ViewController = _navViewController.ViewController;
        }, function (_animationsScrollTo) {
            ScrollTo = _animationsScrollTo.ScrollTo;
        }],
        execute: function () {
            __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
                switch (arguments.length) {
                    case 2:
                        return decorators.reduceRight(function (o, d) {
                            return d && d(o) || o;
                        }, target);
                    case 3:
                        return decorators.reduceRight(function (o, d) {
                            return d && d(target, key), void 0;
                        }, void 0);
                    case 4:
                        return decorators.reduceRight(function (o, d) {
                            return d && d(target, key, o) || o;
                        }, desc);
                }
            };

            __metadata = undefined && undefined.__metadata || function (k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };

            __param = undefined && undefined.__param || function (paramIndex, decorator) {
                return function (target, key) {
                    decorator(target, key, paramIndex);
                };
            };

            Content = (function (_Ion) {
                _inherits(Content, _Ion);

                /**
                 * @param {ElementRef} elementRef  A reference to the component's DOM element.
                 * @param {Config} config  The config object to change content's default settings.
                 */

                function Content(elementRef, config, keyboard, viewCtrl, _zone) {
                    _classCallCheck(this, Content);

                    _get(Object.getPrototypeOf(Content.prototype), "constructor", this).call(this, elementRef, config);
                    this._zone = _zone;
                    this.scrollPadding = 0;
                    this.keyboard = keyboard;
                    if (viewCtrl) {
                        viewCtrl.setContent(this);
                        viewCtrl.setContentRef(elementRef);
                    }
                }

                /**
                 * @private
                 */

                _createClass(Content, [{
                    key: "onInit",
                    value: function onInit() {
                        _get(Object.getPrototypeOf(Content.prototype), "onInit", this).call(this);
                        this.scrollElement = this.getNativeElement().children[0];
                    }

                    /**
                     * Adds the specified scroll handler to the content' scroll element.
                     * @param {Function} handler  The scroll event handler.
                     * @returns {Function} A function that removes the scroll handler.
                     */
                }, {
                    key: "addScrollEventListener",
                    value: function addScrollEventListener(handler) {
                        var _this = this;

                        if (!this.scrollElement) {
                            return;
                        }
                        // ensure we're not creating duplicates
                        this.scrollElement.removeEventListener('scroll', handler);
                        this.scrollElement.addEventListener('scroll', handler);
                        return function () {
                            _this.scrollElement.removeEventListener('scroll', handler);
                        };
                    }
                }, {
                    key: "onScrollEnd",
                    value: function onScrollEnd(callback) {
                        var lastScrollTop = null;
                        var framesUnchanged = 0;
                        var scrollElement = this.scrollElement;
                        function next() {
                            var currentScrollTop = scrollElement.scrollTop;
                            if (lastScrollTop !== null) {
                                if (Math.round(lastScrollTop) === Math.round(currentScrollTop)) {
                                    framesUnchanged++;
                                } else {
                                    framesUnchanged = 0;
                                }
                                if (framesUnchanged > 9) {
                                    return callback();
                                }
                            }
                            lastScrollTop = currentScrollTop;
                            raf(function () {
                                raf(next);
                            });
                        }
                        setTimeout(next, 100);
                    }

                    /**
                     * Adds the specified touchmove handler to the content's scroll element.
                     * @param {Function} handler  The touchmove handler.
                     * @returns {Function} A function that removes the touchmove handler.
                     */
                }, {
                    key: "addTouchMoveListener",
                    value: function addTouchMoveListener(handler) {
                        var _this2 = this;

                        if (!this.scrollElement) {
                            return;
                        }
                        // ensure we're not creating duplicates
                        this.scrollElement.removeEventListener('touchmove', handler);
                        this.scrollElement.addEventListener('touchmove', handler);
                        return function () {
                            _this2.scrollElement.removeEventListener('touchmove', handler);
                        };
                    }

                    /**
                     * Scroll to the specified position.
                     * @param {TODO} x  The x-value to scroll to.
                     * @param {TODO} y  The y-value to scroll to.
                     * @param {Number} duration  Duration of the scroll animation.
                     * @param {TODO} tolerance  TODO
                     * @returns {TODO} TODO
                     */
                }, {
                    key: "scrollTo",
                    value: function scrollTo(x, y, duration, tolerance) {
                        if (this._scrollTo) {
                            this._scrollTo.dispose();
                        }
                        this._scrollTo = new ScrollTo(this.scrollElement);
                        return this._scrollTo.start(x, y, duration, tolerance);
                    }
                }, {
                    key: "scrollToTop",
                    value: function scrollToTop() {
                        if (this._scrollTo) {
                            this._scrollTo.dispose();
                        }
                        this._scrollTo = new ScrollTo(this.scrollElement);
                        return this._scrollTo.start(0, 0, 300, 0);
                    }

                    /**
                     * @private
                     * Returns the content and scroll elements' dimensions.
                     * @returns {Object} dimensions  The content and scroll elements' dimensions
                     * {Number} dimensions.contentHeight  content offsetHeight
                     * {Number} dimensions.contentTop  content offsetTop
                     * {Number} dimensions.contentBottom  content offsetTop+offsetHeight
                     * {Number} dimensions.contentWidth  content offsetWidth
                     * {Number} dimensions.contentLeft  content offsetLeft
                     * {Number} dimensions.contentRight  content offsetLeft + offsetWidth
                     * {Number} dimensions.scrollHeight  scroll scrollHeight
                     * {Number} dimensions.scrollTop  scroll scrollTop
                     * {Number} dimensions.scrollBottom  scroll scrollTop + scrollHeight
                     * {Number} dimensions.scrollWidth  scroll scrollWidth
                     * {Number} dimensions.scrollLeft  scroll scrollLeft
                     * {Number} dimensions.scrollRight  scroll scrollLeft + scrollWidth
                     */
                }, {
                    key: "getDimensions",
                    value: function getDimensions() {
                        var scrollElement = this.scrollElement;
                        var parentElement = scrollElement.parentElement;
                        return {
                            contentHeight: parentElement.offsetHeight,
                            contentTop: parentElement.offsetTop,
                            contentBottom: parentElement.offsetTop + parentElement.offsetHeight,
                            contentWidth: parentElement.offsetWidth,
                            contentLeft: parentElement.offsetLeft,
                            contentRight: parentElement.offsetLeft + parentElement.offsetWidth,
                            scrollHeight: scrollElement.scrollHeight,
                            scrollTop: scrollElement.scrollTop,
                            scrollBottom: scrollElement.scrollTop + scrollElement.scrollHeight,
                            scrollWidth: scrollElement.scrollWidth,
                            scrollLeft: scrollElement.scrollLeft,
                            scrollRight: scrollElement.scrollLeft + scrollElement.scrollWidth
                        };
                    }

                    /**
                     * @private
                     * Adds padding to the bottom of the scroll element when the keyboard is open
                     * so content below the keyboard can be scrolled into view.
                     */
                }, {
                    key: "addScrollPadding",
                    value: function addScrollPadding(newScrollPadding) {
                        if (newScrollPadding > this.scrollPadding) {
                            console.debug('addScrollPadding', newScrollPadding);
                            this.scrollPadding = newScrollPadding;
                            this.scrollElement.style.paddingBottom = newScrollPadding + 'px';
                        }
                    }
                }]);

                return Content;
            })(Ion);

            _export("Content", Content);

            _export("Content", Content = __decorate([Component({
                selector: 'ion-content',
                template: '<scroll-content>' + '<ng-content></ng-content>' + '</scroll-content>'
            }), __param(3, Optional()), __metadata('design:paramtypes', [typeof (_a = typeof ElementRef !== 'undefined' && ElementRef) === 'function' && _a || Object, typeof (_b = typeof Config !== 'undefined' && Config) === 'function' && _b || Object, typeof (_c = typeof Keyboard !== 'undefined' && Keyboard) === 'function' && _c || Object, typeof (_d = typeof ViewController !== 'undefined' && ViewController) === 'function' && _d || Object, typeof (_e = typeof NgZone !== 'undefined' && NgZone) === 'function' && _e || Object])], Content));
        }
    };
});
System.register("ionic/components/icon/icon", ["angular2/angular2", "../../config/config"], function (_export) {
    "use strict";

    var Directive, ElementRef, Renderer, Config, __decorate, __metadata, Icon, _a, _b, _c;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_angular2Angular2) {
            Directive = _angular2Angular2.Directive;
            ElementRef = _angular2Angular2.ElementRef;
            Renderer = _angular2Angular2.Renderer;
        }, function (_configConfig) {
            Config = _configConfig.Config;
        }],
        execute: function () {
            __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
                switch (arguments.length) {
                    case 2:
                        return decorators.reduceRight(function (o, d) {
                            return d && d(o) || o;
                        }, target);
                    case 3:
                        return decorators.reduceRight(function (o, d) {
                            return d && d(target, key), void 0;
                        }, void 0);
                    case 4:
                        return decorators.reduceRight(function (o, d) {
                            return d && d(target, key, o) || o;
                        }, desc);
                }
            };

            __metadata = undefined && undefined.__metadata || function (k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };

            Icon = (function () {
                function Icon(elementRef, config, renderer) {
                    _classCallCheck(this, Icon);

                    this.elementRef = elementRef;
                    this.renderer = renderer;
                    this.config = config;
                    this.mode = config.get('iconMode');
                }

                /**
                 * @private
                 */

                _createClass(Icon, [{
                    key: "onInit",
                    value: function onInit() {
                        var ele = this.elementRef.nativeElement;
                        if (this.mode == 'ios' && this.ios) {
                            this.name = this.ios;
                        } else if (this.mode == 'md' && this.md) {
                            this.name = this.md;
                        } else if (!this.name) {
                            // looping through native dom attributes, eww
                            // https://github.com/angular/angular/issues/3961
                            for (var i = 0, l = ele.attributes.length; i < l; i++) {
                                if (ele.attributes[i].value === '' && /_|item-|is-active|large|small|class/.test(ele.attributes[i].name) !== true) {
                                    this.name = ele.attributes[i].name;
                                    break;
                                }
                            }
                        }
                        if (!this.name) return;
                        if (!/^ion-/.test(this.name)) {
                            // not an exact icon being used
                            // add mode specific prefix
                            this.name = 'ion-' + this.mode + '-' + this.name;
                        }
                        this.update();
                    }
                }, {
                    key: "update",

                    /**
                     * @private
                     */
                    value: function update() {
                        if (this.name && this.mode == 'ios') {
                            if (this.isActive) {
                                if (/-outline/.test(this.name)) {
                                    this.name = this.name.replace('-outline', '');
                                }
                            } else if (!/-outline/.test(this.name)) {
                                this.name += '-outline';
                            }
                        }
                        if (this._name !== this.name) {
                            if (this._name) {
                                this.renderer.setElementClass(this.elementRef, this._name, false);
                            }
                            this._name = this.name;
                            this.renderer.setElementClass(this.elementRef, this.name, true);
                            this.renderer.setElementAttribute(this.elementRef, 'aria-label', this.name.replace('ion-', '').replace('ios-', '').replace('md-', '').replace('-', ' '));
                        }
                    }
                }, {
                    key: "isActive",
                    get: function get() {
                        return this._isActive === undefined || this._isActive === true || this._isActive === 'true';
                    },

                    /**
                     * @private
                     */
                    set: function set(val) {
                        this._isActive = val;
                        this.update();
                    }
                }]);

                return Icon;
            })();

            _export("Icon", Icon);

            _export("Icon", Icon = __decorate([Directive({
                selector: 'icon',
                inputs: ['name', 'ios', 'md', 'isActive'],
                host: {
                    'role': 'img'
                }
            }), __metadata('design:paramtypes', [typeof (_a = typeof ElementRef !== 'undefined' && ElementRef) === 'function' && _a || Object, typeof (_b = typeof Config !== 'undefined' && Config) === 'function' && _b || Object, typeof (_c = typeof Renderer !== 'undefined' && Renderer) === 'function' && _c || Object])], Icon));
        }
    };
});
System.register('ionic/components/item/item-sliding-gesture', ['ionic/gestures/hammer', 'ionic/gestures/drag-gesture', 'ionic/util/dom'], function (_export) {
    'use strict';

    var Hammer, DragGesture, CSS, raf, closest, ItemSlidingGesture, DRAG_THRESHOLD;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    function isItemActive(ele, isActive) {
        ele.classList[isActive ? 'add' : 'remove']('active-slide');
        ele.classList[isActive ? 'add' : 'remove']('active-options');
    }
    function preventDefault(ev) {
        ev.preventDefault();
    }
    function getItemConatiner(ele) {
        return closest(ele, 'ion-item-sliding', true);
    }
    function isFromOptionButtons(ele) {
        return !!closest(ele, 'ion-item-options', true);
    }
    function getOptionsWidth(itemContainerEle) {
        var optsEle = itemContainerEle.querySelector('ion-item-options');
        if (optsEle) {
            return optsEle.offsetWidth;
        }
    }
    function isActive(itemContainerEle) {
        return itemContainerEle.classList.contains('active-slide');
    }
    return {
        setters: [function (_ionicGesturesHammer) {
            Hammer = _ionicGesturesHammer.Hammer;
        }, function (_ionicGesturesDragGesture) {
            DragGesture = _ionicGesturesDragGesture.DragGesture;
        }, function (_ionicUtilDom) {
            CSS = _ionicUtilDom.CSS;
            raf = _ionicUtilDom.raf;
            closest = _ionicUtilDom.closest;
        }],
        execute: function () {
            ItemSlidingGesture = (function (_DragGesture) {
                _inherits(ItemSlidingGesture, _DragGesture);

                function ItemSlidingGesture(list, listEle) {
                    var _this = this;

                    _classCallCheck(this, ItemSlidingGesture);

                    _get(Object.getPrototypeOf(ItemSlidingGesture.prototype), 'constructor', this).call(this, listEle, {
                        direction: 'x',
                        threshold: DRAG_THRESHOLD
                    });
                    this.data = {};
                    this.openItems = 0;
                    this.list = list;
                    this.listEle = listEle;
                    this.canDrag = true;
                    this.listen();
                    this.tap = function (ev) {
                        if (!isFromOptionButtons(ev.target)) {
                            var didClose = _this.closeOpened();
                            if (didClose) {
                                preventDefault(ev);
                            }
                        }
                    };
                    this.mouseOut = function (ev) {
                        _this.onDragEnd(ev);
                    };
                }

                _createClass(ItemSlidingGesture, [{
                    key: 'onDragStart',
                    value: function onDragStart(ev) {
                        var itemContainerEle = getItemConatiner(ev.target);
                        if (!itemContainerEle) return;
                        this.closeOpened(itemContainerEle);
                        var openAmout = this.getOpenAmount(itemContainerEle);
                        var itemData = this.get(itemContainerEle);
                        this.preventDrag = openAmout > 0;
                        if (this.preventDrag) {
                            this.closeOpened();
                            return preventDefault(ev);
                        }
                        itemContainerEle.classList.add('active-slide');
                        this.set(itemContainerEle, 'offsetX', openAmout);
                        this.set(itemContainerEle, 'startX', ev.center[this.direction]);
                        if (ev.srcEvent.type.indexOf('mouse') > -1) {
                            ev.target.addEventListener('mouseout', this.mouseOut);
                        }
                        this.dragEnded = false;
                    }
                }, {
                    key: 'onDrag',
                    value: function onDrag(ev) {
                        var _this2 = this;

                        if (this.dragEnded || this.preventDrag || Math.abs(ev.deltaY) > 30) {
                            this.preventDrag = true;
                            return;
                        }
                        var itemContainerEle = getItemConatiner(ev.target);
                        if (!itemContainerEle || !isActive(itemContainerEle)) return;
                        var itemData = this.get(itemContainerEle);
                        if (!itemData.optsWidth) {
                            itemData.optsWidth = getOptionsWidth(itemContainerEle);
                            if (!itemData.optsWidth) return;
                        }
                        var x = ev.center[this.direction];
                        var delta = x - itemData.startX;
                        var newX = Math.max(0, itemData.offsetX - delta);
                        if (newX > itemData.optsWidth) {
                            // Calculate the new X position, capped at the top of the buttons
                            newX = -Math.min(-itemData.optsWidth, -itemData.optsWidth + (delta + itemData.optsWidth) * 0.4);
                        }
                        raf(function () {
                            if (!_this2.dragEnded && !_this2.preventDrag) {
                                isItemActive(itemContainerEle, true);
                                _this2.open(itemContainerEle, newX, false);
                            }
                        });
                    }
                }, {
                    key: 'onDragEnd',
                    value: function onDragEnd(ev) {
                        var _this3 = this;

                        this.preventDrag = false;
                        this.dragEnded = true;
                        var itemContainerEle = getItemConatiner(ev.target);
                        if (!itemContainerEle || !isActive(itemContainerEle)) return;
                        // If we are currently dragging, we want to snap back into place
                        // The final resting point X will be the width of the exposed buttons
                        var itemData = this.get(itemContainerEle);
                        var restingPoint = itemData.optsWidth;
                        // Check if the drag didn't clear the buttons mid-point
                        // and we aren't moving fast enough to swipe open
                        if (this.getOpenAmount(itemContainerEle) < restingPoint / 2) {
                            // If we are going left but too slow, or going right, go back to resting
                            if (ev.direction & Hammer.DIRECTION_RIGHT || Math.abs(ev.velocityX) < 0.3) {
                                restingPoint = 0;
                            }
                        }
                        ev.target.removeEventListener('mouseout', this.mouseOut);
                        raf(function () {
                            _this3.open(itemContainerEle, restingPoint, true);
                        });
                    }
                }, {
                    key: 'closeOpened',
                    value: function closeOpened(doNotCloseEle) {
                        var didClose = false;
                        if (this.openItems) {
                            var openItemElements = this.listEle.querySelectorAll('.active-slide');
                            for (var i = 0; i < openItemElements.length; i++) {
                                if (openItemElements[i] !== doNotCloseEle) {
                                    this.open(openItemElements[i], 0, true);
                                    didClose = true;
                                }
                            }
                        }
                        return didClose;
                    }
                }, {
                    key: 'open',
                    value: function open(itemContainerEle, openAmount, isFinal) {
                        var _this4 = this;

                        var slidingEle = itemContainerEle.querySelector('ion-item,[ion-item]');
                        if (!slidingEle) return;
                        this.set(itemContainerEle, 'openAmount', openAmount);
                        clearTimeout(this.get(itemContainerEle).timerId);
                        if (openAmount) {
                            this.openItems++;
                        } else {
                            var timerId = setTimeout(function () {
                                if (slidingEle.style[CSS.transform] === '') {
                                    isItemActive(itemContainerEle, false);
                                    _this4.openItems--;
                                }
                            }, 400);
                            this.set(itemContainerEle, 'timerId', timerId);
                        }
                        slidingEle.style[CSS.transition] = isFinal ? '' : 'none';
                        slidingEle.style[CSS.transform] = openAmount ? 'translate3d(' + -openAmount + 'px,0,0)' : '';
                        if (isFinal) {
                            if (openAmount) {
                                isItemActive(itemContainerEle, true);
                                this.on('tap', this.tap);
                            } else {
                                this.off('tap', this.tap);
                            }
                            this.enableScroll(!openAmount);
                        }
                    }
                }, {
                    key: 'getOpenAmount',
                    value: function getOpenAmount(itemContainerEle) {
                        return this.get(itemContainerEle).openAmount || 0;
                    }
                }, {
                    key: 'get',
                    value: function get(itemContainerEle) {
                        return this.data[itemContainerEle && itemContainerEle.$ionSlide] || {};
                    }
                }, {
                    key: 'set',
                    value: function set(itemContainerEle, key, value) {
                        if (!this.data[itemContainerEle.$ionSlide]) {
                            this.data[itemContainerEle.$ionSlide] = {};
                        }
                        this.data[itemContainerEle.$ionSlide][key] = value;
                    }
                }, {
                    key: 'enableScroll',
                    value: function enableScroll(shouldEnable) {
                        var scrollContentEle = closest(this.listEle, 'scroll-content');
                        if (scrollContentEle) {
                            scrollContentEle[shouldEnable ? 'removeEventListener' : 'addEventListener']('touchstart', preventDefault);
                        }
                    }
                }, {
                    key: 'unlisten',
                    value: function unlisten() {
                        _get(Object.getPrototypeOf(ItemSlidingGesture.prototype), 'unlisten', this).call(this);
                        this.listEle = null;
                    }
                }]);

                return ItemSlidingGesture;
            })(DragGesture);

            _export('ItemSlidingGesture', ItemSlidingGesture);

            DRAG_THRESHOLD = 20;
        }
    };
});
System.register("ionic/components/item/item-sliding", ["angular2/angular2", "../list/list"], function (_export) {
    /**
     * @description
     * Creates a list-item that can easily be swiped,
     * deleted, reordered, edited, and more.
     *
     * @usage
     * ```html
     * <ion-list>
     *   <ion-item-sliding *ng-for="#item of items">
     *     <ion-item (click)="itemTapped(item)">
     *       {{item.title}}
     *     </ion-item>
     *     <ion-item-options>
     *       <button (click)="favorite(item)">Favorite</button>
     *       <button (click)="share(item)">Share</button>
     *     </ion-item-options>
     *   </ion-item>
     * </ion-list>
     * ```
     */
    "use strict";

    var Component, ElementRef, Optional, List, __decorate, __metadata, __param, ItemSliding, slideIds, _a, _b;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_angular2Angular2) {
            Component = _angular2Angular2.Component;
            ElementRef = _angular2Angular2.ElementRef;
            Optional = _angular2Angular2.Optional;
        }, function (_listList) {
            List = _listList.List;
        }],
        execute: function () {
            __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
                switch (arguments.length) {
                    case 2:
                        return decorators.reduceRight(function (o, d) {
                            return d && d(o) || o;
                        }, target);
                    case 3:
                        return decorators.reduceRight(function (o, d) {
                            return d && d(target, key), void 0;
                        }, void 0);
                    case 4:
                        return decorators.reduceRight(function (o, d) {
                            return d && d(target, key, o) || o;
                        }, desc);
                }
            };

            __metadata = undefined && undefined.__metadata || function (k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };

            __param = undefined && undefined.__param || function (paramIndex, decorator) {
                return function (target, key) {
                    decorator(target, key, paramIndex);
                };
            };

            ItemSliding = (function () {
                function ItemSliding(list, elementRef) {
                    _classCallCheck(this, ItemSliding);

                    this.list = list;
                    list.enableSlidingItems(true);
                    elementRef.nativeElement.$ionSlide = ++slideIds;
                }

                _createClass(ItemSliding, [{
                    key: "close",
                    value: function close() {
                        this.list.closeSlidingItems();
                    }
                }]);

                return ItemSliding;
            })();

            _export("ItemSliding", ItemSliding);

            _export("ItemSliding", ItemSliding = __decorate([Component({
                selector: 'ion-item-sliding',
                template: '<ng-content select="ion-item,[ion-item]"></ng-content>' + '<ng-content select="ion-item-options"></ng-content>'
            }), __param(0, Optional()), __metadata('design:paramtypes', [typeof (_a = typeof List !== 'undefined' && List) === 'function' && _a || Object, typeof (_b = typeof ElementRef !== 'undefined' && ElementRef) === 'function' && _b || Object])], ItemSliding));
            slideIds = 0;
        }
    };
});
System.register("ionic/components/item/item", ["angular2/angular2"], function (_export) {
    /**
     * Creates a list-item that can easily be swiped, deleted, reordered, edited, and more.
     *
     * There are three common ways to use an item:
     * - Use `<ion-item>` for something that is only non-clickable text.
     * - Use `<button ion-item>` for something that can be clicked/tapped. Typically this element will also have a `(click)` handler.
     * - Use `<a ion-item>` for when the item needs to contain a `href`.
     *
     * By default, `<button ion-item>` and `<a ion-item>` will receive a right arrow icon on iOS to signal that tapping the item will reveal more information.
     * To hide this icon, add the `detail-none` attribute to the item (eg: `<button ion-item detail-none>`). To add the icon when it is not displayed by default,
     * add the `detail-push` attribute (eg: `<ion-item detail-push>`).
     *
     * To break an item up into multiple columns, add multiple `<ion-item-content>` components inside of the item. By default,
     * this component will automatically be added inside of an `<ion-item>`, giving it a single column.
     *
     *
     * @usage
     * ```html
     *
     * <ion-list>
     *
     *   // default item
     *   <ion-item>
     *     {{item.title}}
     *   </ion-item>
     *
     *   // multiple item-content containers
     *   <ion-item>
     *     <ion-item-content>First Column</ion-item-content>
     *     <ion-item-content>Second Column</ion-item-content>
     *     <ion-item-content>Third Column</ion-item-content>
     *   </ion-item>
     *
     * </ion-list>
     *
     *  ```
     */
    "use strict";

    var Component, __decorate, __metadata, Item;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_angular2Angular2) {
            Component = _angular2Angular2.Component;
        }],
        execute: function () {
            __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
                switch (arguments.length) {
                    case 2:
                        return decorators.reduceRight(function (o, d) {
                            return d && d(o) || o;
                        }, target);
                    case 3:
                        return decorators.reduceRight(function (o, d) {
                            return d && d(target, key), void 0;
                        }, void 0);
                    case 4:
                        return decorators.reduceRight(function (o, d) {
                            return d && d(target, key, o) || o;
                        }, desc);
                }
            };

            __metadata = undefined && undefined.__metadata || function (k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };

            Item = function Item() {
                _classCallCheck(this, Item);
            };

            _export("Item", Item);

            _export("Item", Item = __decorate([Component({
                selector: 'ion-item,[ion-item]',
                template: '<ng-content select="[item-left]"></ng-content>' + '<div class="item-inner">' + '<ng-content select="ion-item-content"></ng-content>' + '<ion-item-content cnt>' + '<ng-content></ng-content>' + '</ion-item-content>' + '<ng-content select="[item-right]"></ng-content>' + '</div>',
                host: {
                    'class': 'item'
                }
            }), __metadata('design:paramtypes', [])], Item));
        }
    };
});