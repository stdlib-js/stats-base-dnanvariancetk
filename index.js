// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(e){"use strict";var r,t="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,o=Object.prototype,a=o.toString,i=o.__defineGetter__,l=o.__defineSetter__,u=o.__lookupGetter__,f=o.__lookupSetter__;function c(e,r,t,n){var o,a,i,l,u,f,c;if(e<=0)return NaN;if(1===e||0===n)return(u=t[0])==u&&e-r>0?0:NaN;for(a=n<0?(1-e)*n:0,o=0,l=0,f=0,c=0;c<e;c++)(u=t[a])==u&&(o+=u*u,l+=u,f+=1),a+=n;return(i=f-r)<=0?NaN:(o-l/f*l)/i}function _(e,r,t,n,o){var a,i,l,u,f,c,_;if(e<=0)return NaN;if(1===e||0===n)return(f=t[o])==f&&e-r>0?0:NaN;for(i=o,a=0,u=0,c=0,_=0;_<e;_++)(f=t[i])==f&&(a+=f*f,u+=f,c+=1),i+=n;return(l=c-r)<=0?NaN:(a-u/c*u)/l}r=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?n:function(e,r,t){var n,c,_,p;if("object"!=typeof e||null===e||"[object Array]"===a.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===a.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(u.call(e,r)||f.call(e,r)?(n=e.__proto__,e.__proto__=o,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),_="get"in t,p="set"in t,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&i&&i.call(e,r,t.get),p&&l&&l.call(e,r,t.set),e},r(c,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:_}),e.default=c,e.ndarray=_,Object.defineProperty(e,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((e="undefined"!=typeof globalThis?globalThis:e||self).dnanvariancetk={});
//# sourceMappingURL=index.js.map