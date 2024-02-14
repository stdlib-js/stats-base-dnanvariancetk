"use strict";var o=function(e,n){return function(){return n||e((n={exports:{}}).exports,n),n.exports}};var d=o(function(z,N){
function m(e,n,c,u){var s,i,f,v,r,a,t;if(e<=0)return NaN;if(e===1||u===0)return r=c[0],r===r&&e-n>0?0:NaN;for(u<0?i=(1-e)*u:i=0,s=0,v=0,a=0,t=0;t<e;t++)r=c[i],r===r&&(s+=r*r,v+=r,a+=1),i+=u;return f=a-n,f<=0?NaN:(s-v/a*v)/f}N.exports=m
});var x=o(function(A,k){
function R(e,n,c,u,s){var i,f,v,r,a,t,q;if(e<=0)return NaN;if(e===1||u===0)return a=c[s],a===a&&e-n>0?0:NaN;for(f=s,i=0,r=0,t=0,q=0;q<e;q++)a=c[f],a===a&&(i+=a*a,r+=a,t+=1),f+=u;return v=t-n,v<=0?NaN:(i-r/t*r)/v}k.exports=R
});var j=o(function(B,S){
var _=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=d(),E=x();_(y,"ndarray",E);S.exports=y
});var O=require("path").join,b=require('@stdlib/utils-try-require/dist'),g=require('@stdlib/assert-is-error/dist'),h=j(),p,l=b(O(__dirname,"./native.js"));g(l)?p=h:p=l;module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
