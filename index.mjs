// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";function n(r,n,e,a){var t,i,N,f,u,o,d;if(r<=0)return NaN;if(1===r||0===a)return(u=e[0])==u&&r-n>0?0:NaN;for(i=a<0?(1-r)*a:0,t=0,f=0,o=0,d=0;d<r;d++)(u=e[i])==u&&(t+=u*u,f+=u,o+=1),i+=a;return(N=o-n)<=0?NaN:(t-f/o*f)/N}function e(r,n,e,a,t){var i,N,f,u,o,d,s;if(r<=0)return NaN;if(1===r||0===a)return(o=e[t])==o&&r-n>0?0:NaN;for(N=t,i=0,u=0,d=0,s=0;s<r;s++)(o=e[N])==o&&(i+=o*o,u+=o,d+=1),N+=a;return(f=d-n)<=0?NaN:(i-u/d*u)/f}r(n,"ndarray",e);export{n as default,e as ndarray};
//# sourceMappingURL=index.mjs.map
