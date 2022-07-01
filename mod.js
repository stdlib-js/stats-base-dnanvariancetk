// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=function(){try{return e({},"x",{}),!0}catch(e){return!1}},t=Object.defineProperty,n=Object.prototype,a=n.toString,o=n.__defineGetter__,i=n.__defineSetter__,u=n.__lookupGetter__,l=n.__lookupSetter__;var c=t,_=function(e,r,t){var c,_,f,p;if("object"!=typeof e||null===e||"[object Array]"===a.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===a.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((_="value"in t)&&(u.call(e,r)||l.call(e,r)?(c=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=c):e[r]=t.value),f="get"in t,p="set"in t,_&&(f||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return f&&o&&o.call(e,r,t.get),p&&i&&i.call(e,r,t.set),e},f=r()?c:_;function p(e,r,t,n){var a,o,i,u,l,c,_;if(e<=0)return NaN;if(1===e||0===n)return(l=t[0])==l&&e-r>0?0:NaN;for(o=n<0?(1-e)*n:0,a=0,u=0,c=0,_=0;_<e;_++)(l=t[o])==l&&(a+=l*l,u+=l,c+=1),o+=n;return(i=c-r)<=0?NaN:(a-u/c*u)/i}function b(e,r,t,n,a){var o,i,u,l,c,_,f;if(e<=0)return NaN;if(1===e||0===n)return(c=t[a])==c&&e-r>0?0:NaN;for(i=a,o=0,l=0,_=0,f=0;f<e;f++)(c=t[i])==c&&(o+=c*c,l+=c,_+=1),i+=n;return(u=_-r)<=0?NaN:(o-l/_*l)/u}(function(e,r,t){f(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})})(p,"ndarray",b);export{p as default,b as ndarray};
//# sourceMappingURL=mod.js.map
