"use strict";var f=function(r,a){return function(){return a||r((a={exports:{}}).exports,a),a.exports}};var d=f(function(B,y){
function R(r,a,n,i,p){var u,s,q,t,e,v,c;if(r<=0)return NaN;if(r===1||i===0)return e=n[p],e===e&&r-a>0?0:NaN;for(s=p,u=0,t=0,v=0,c=0;c<r;c++)e=n[s],e===e&&(u+=e*e,t+=e,v+=1),s+=i;return q=v-a,q<=0?NaN:(u-t/v*t)/q}y.exports=R
});var x=f(function(C,k){
var S=require('@stdlib/strided-base-stride2offset/dist'),_=d();function E(r,a,n,i){return _(r,a,n,i,S(r,i))}k.exports=E
});var l=f(function(D,m){
var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=x(),b=d();O(j,"ndarray",b);m.exports=j
});var g=require("path").join,h=require('@stdlib/utils-try-require/dist'),w=require('@stdlib/assert-is-error/dist'),z=l(),o,N=h(g(__dirname,"./native.js"));w(N)?o=z:o=N;module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
