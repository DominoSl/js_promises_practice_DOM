parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var n={0:"left",2:"right"},t=document.querySelector(".root"),e=new Promise(function(e,r){t.addEventListener("mousedown",function(t){var r=t.button;"left"===n[r]&&e()}),setTimeout(function(){return r(new Error)},3e3)}),r=new Promise(function(e){t.addEventListener("mousedown",function(t){var r=t.button;"left"!==n[r]&&"right"!==n[r]||e()})}),o=new Promise(function(e){var r={left:!1,right:!1};t.addEventListener("mousedown",function(t){var o=t.button;"left"===n[o]&&(r.left=!0),"right"===n[o]&&(r.right=!0),r.left&&r.right&&e()})});function i(n,e){t.insertAdjacentHTML("beforeend",'\n    <div\n      class = "notification '.concat(n,'"\n      data-qa = "notification"\n    >\n      ').concat(e,"\n    </div>\n  "))}e.then(function(){return i("success","First promise was resolved")}).catch(function(){return i("warning","First promise was rejected")}),r.then(function(){return i("success","Second promise was resolved")}),o.then(function(){return i("success","Third promise was resolved")});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.ce78270e.js.map