!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}new(function(){function e(t){var n=t.selector,r=t.targetDate;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.timerRef=document.querySelector(n),this.daysRef=document.querySelector('span[data-value="days"]'),this.hoursRef=document.querySelector('span[data-value="hours"]'),this.minsRef=document.querySelector('span[data-value="mins"]'),this.secsRef=document.querySelector('span[data-value="secs"]'),this.targetDate=r}var t,r,a;return t=e,(r=[{key:"start",value:function(){var e=this;this.updateClockface(),setInterval((function(){e.updateClockface()}),1e3)}},{key:"updateClockface",value:function(){var e=Date.now(),t=new Date(this.targetDate)-e,n=this.setTime(t),r=n.days,a=n.hours,o=n.mins,u=n.secs;this.daysRef.textContent=r,this.hoursRef.textContent=a,this.minsRef.textContent=o,this.secsRef.textContent=u}},{key:"setTime",value:function(e){return{days:this.pad(Math.floor(e/864e5)),hours:this.pad(Math.floor(e%864e5/36e5)),mins:this.pad(Math.floor(e%36e5/6e4)),secs:this.pad(Math.floor(e%6e4/1e3))}}},{key:"pad",value:function(e){return String(e).padStart(2,"0")}}])&&n(t.prototype,r),a&&n(t,a),e}())({selector:"#timer-1",targetDate:new Date("Dec 31, 2020")}).start()},function(e,t,n){"use strict";n.r(t);n(0),n(1);var r={notificationRef:document.querySelector(".js-alert"),timerRef:document.querySelector("#timer-1"),daysRef:document.querySelector('span[data-value="days"]'),hoursRef:document.querySelector('span[data-value="hours"]'),minsRef:document.querySelector('span[data-value="mins"]'),secsRef:document.querySelector('span[data-value="secs"]')}.notificationRef,a=null;function o(){r.classList.remove("is-visible")}r.classList.add("is-visible"),a=setTimeout(o,3e3),r.addEventListener("click",(function(){o(),clearTimeout(a)}))}]);
//# sourceMappingURL=main.bundle.js.map