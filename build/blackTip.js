!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.blackTip=t():e.blackTip=t()}(this,function(){return function(e){function t(g){if(n[g])return n[g].exports;var i=n[g]={i:g,l:!1,exports:{}};return e[g].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,g){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:g})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";function g(){return++c}function i(e){this.defaults={text:"",type:"default",time:1500,mask:!1,zIndex:999,complete:null},this.timer=null,this._init(e)}var o="_blackTip_",c=0;i.prototype._init=function(e){if(this.eleId=g(),"object"==typeof e){for(var t in e)e.hasOwnProperty(t)&&(this.defaults[t]=e[t]);document.getElementById(o+"style")||this._insertStyle(),this._createDom(),this.timer=setTimeout(function(){this.hide(),"function"==typeof this.defaults.complete&&this.defaults.complete()}.bind(this),this.defaults.time)}},i.prototype.set=function(){switch(this.defaults.type){case"default":this.icon.style.display="none";break;case"info":this.icon.innerText="!";break;case"success":this.icon.innerText="√";break;case"loading":this.icon.className+=" loading";break;default:this.icon.style.display="none"}this.defaults.text?this.text.innerText=this.defaults.text:this.text.display="none",this.show()},i.prototype.show=function(){this.state=1,document.body.appendChild(this.blackTip)},i.prototype.hide=function(){this.blackTip.style.display="none",this.state=0},i.prototype.remove=function(){document.body.removeChild(this.blackTip),console.log(window[o+this.eleId]);try{delete window[o+this.eleId]}catch(e){}console.info(window[o+this.eleId]),this.timer=null,clearTimeout(this.timer)},i.prototype._createDom=function(){this.blackTip=window[o+this.eleId]=document.createElement("div",o+this.eleId),this.state=1,this.blackTip.className=o,this.icon=document.createElement("div"),this.icon.className="icon",this.text=document.createElement("p"),this.text.className="text",this.blackTip.appendChild(this.icon),this.blackTip.appendChild(this.text),this.set()},i.prototype._insertStyle=function(){this.style=document.createElement("style"),this.style.id=o+"style",this.style.innerText="._blackTip_{z-index:100;position:fixed;min-width:25%;max-width:60%;background:rgba(7,17,27,.8);color:#fff;padding:16px;font-size:14px;top:30%;left:50%;border-radius:5px;line-height:18px;text-align:center;word-break:break-all;-moz-transform:translateZ(0) translateX(-50%) translateY(-50%);-webkit-transform:translateZ(0) translateX(-50%) translateY(-50%);transform:translateZ(0) translateX(-50%) translateY(-50%)}._blackTip_ .icon{display:inline-block;height:40px;line-height:40px;width:40px;margin:10px 10px 16px 10px;text-align:center;border-radius:50%;font-size:30px;color:rgba(7,17,27,.8);background-color:#fff;background-repeat:no-repeat;background-position:center;background-size:cover}._blackTip_ .icon.loading{background-color:transparent;-webkit-animation:loading 1s steps(12,end) infinite;animation:loading 1s steps(12,end) infinite;background:transparent url(data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iciIgd2lkdGg9JzEyMHB4JyBoZWlnaHQ9JzEyMHB4JyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj4KICAgIDxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSJub25lIiBjbGFzcz0iYmsiPjwvcmVjdD4KICAgIDxyZWN0IHg9JzQ2LjUnIHk9JzQwJyB3aWR0aD0nNycgaGVpZ2h0PScyMCcgcng9JzUnIHJ5PSc1JyBmaWxsPScjRTlFOUU5JwogICAgICAgICAgdHJhbnNmb3JtPSdyb3RhdGUoMCA1MCA1MCkgdHJhbnNsYXRlKDAgLTMwKSc+CiAgICA8L3JlY3Q+CiAgICA8cmVjdCB4PSc0Ni41JyB5PSc0MCcgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHJ4PSc1JyByeT0nNScgZmlsbD0nIzk4OTY5NycKICAgICAgICAgIHRyYW5zZm9ybT0ncm90YXRlKDMwIDUwIDUwKSB0cmFuc2xhdGUoMCAtMzApJz4KICAgICAgICAgICAgICAgICByZXBlYXRDb3VudD0naW5kZWZpbml0ZScvPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyM5Qjk5OUEnCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSg2MCA1MCA1MCkgdHJhbnNsYXRlKDAgLTMwKSc+CiAgICAgICAgICAgICAgICAgcmVwZWF0Q291bnQ9J2luZGVmaW5pdGUnLz4KICAgIDwvcmVjdD4KICAgIDxyZWN0IHg9JzQ2LjUnIHk9JzQwJyB3aWR0aD0nNycgaGVpZ2h0PScyMCcgcng9JzUnIHJ5PSc1JyBmaWxsPScjQTNBMUEyJwogICAgICAgICAgdHJhbnNmb3JtPSdyb3RhdGUoOTAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNBQkE5QUEnCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSgxMjAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNCMkIyQjInCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSgxNTAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNCQUI4QjknCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSgxODAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNDMkMwQzEnCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSgyMTAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNDQkNCQ0InCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSgyNDAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNEMkQyRDInCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSgyNzAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNEQURBREEnCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSgzMDAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNFMkUyRTInCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSgzMzAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0Pgo8L3N2Zz4=);background-size:cover;background-position:center;background-repeat:no-repeat}@keyframes loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@-webkit-keyframes loading{0%{-webkit-transform:rotate(0)}100%{-webkit-transform:rotate(360deg)}}",document.head.appendChild(this.style)},e.exports=function(e){return new i(e)}}])});