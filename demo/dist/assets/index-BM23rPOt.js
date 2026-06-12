(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function Ni(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function jd(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var $n={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},za={duration:.5,overwrite:!1,delay:0},mf,sn,Pt,ai=1e8,Et=1/ai,kc=Math.PI*2,Dm=kc/4,Nm=0,ep=Math.sqrt,Om=Math.cos,Fm=Math.sin,nn=function(e){return typeof e=="string"},Dt=function(e){return typeof e=="function"},Qi=function(e){return typeof e=="number"},Sf=function(e){return typeof e>"u"},Xi=function(e){return typeof e=="object"},yn=function(e){return e!==!1},_f=function(){return typeof window<"u"},go=function(e){return Dt(e)||nn(e)},tp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},dn=Array.isArray,Gm=/random\([^)]+\)/g,Bm=/,\s*/g,rh=/(?:-?\.?\d|\.)+/gi,np=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Is=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ql=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,ip=/[+-]=-?[.\d]+/,Zm=/[^,'"\[\]\s]+/gi,Hm=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,It,Ti,$c,Tf,Kn={},El={},rp,sp=function(e){return(El=Qs(e,Kn))&&Rn},gf=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ka=function(e,t){return!t&&console.warn(e)},ap=function(e,t){return e&&(Kn[e]=t)&&El&&(El[e]=t)||Kn},$a=function(){return 0},zm={suppressEvents:!0,isStart:!0,kill:!1},ul={suppressEvents:!0,kill:!1},km={suppressEvents:!0},Wf={},Yr=[],Kc={},op,Gn={},jl={},sh=30,fl=[],Uf="",Mf=function(e){var t=e[0],n,i;if(Xi(t)||Dt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=fl.length;i--&&!fl[i].targetTest(t););n=fl[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Ap(e[i],n)))||e.splice(i,1);return e},Kr=function(e){return e._gsap||Mf(oi(e))[0]._gsap},lp=function(e,t,n){return(n=e[t])&&Dt(n)?e[t]():Sf(n)&&e.getAttribute&&e.getAttribute(t)||n},An=function(e,t){return(e=e.split(",")).forEach(t)||e},Ft=function(e){return Math.round(e*1e5)/1e5||0},Rt=function(e){return Math.round(e*1e7)/1e7||0},Ns=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},$m=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Vl=function(){var e=Yr.length,t=Yr.slice(0),n,i;for(Kc={},Yr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},vf=function(e){return!!(e._initted||e._startAt||e.add)},cp=function(e,t,n,i){Yr.length&&!sn&&Vl(),e.render(t,n,!!(sn&&t<0&&vf(e))),Yr.length&&!sn&&Vl()},up=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Zm).length<2?t:nn(e)?e.trim():e},fp=function(e){return e},Qn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Km=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Qs=function(e,t){for(var n in t)e[n]=t[n];return e},ah=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Xi(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},yl=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Pa=function(e){var t=e.parent||It,n=e.keyframes?Km(dn(e.keyframes)):Qn;if(yn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Qm=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},hp=function(e,t,n,i,s){var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},Ol=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Wr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Qr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Jm=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Qc=function(e,t,n,i){return e._startAt&&(sn?e._startAt.revert(ul):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},qm=function r(e){return!e||e._ts&&r(e.parent)},oh=function(e){return e._repeat?Js(e._tTime,e=e.duration()+e._rDelay)*e:0},Js=function(e,t){var n=Math.floor(e=Rt(e/t));return e&&n===e?n-1:n},Al=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Fl=function(e){return e._end=Rt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Et)||0))},Gl=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Rt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Fl(e),n._dirty||Qr(n,e)),e},dp=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Al(e.rawTime(),t),(!t._dur||co(0,t.totalDuration(),n)-t._tTime>Et)&&t.render(n,!0)),Qr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Et}},Mi=function(e,t,n,i){return t.parent&&Wr(t),t._start=Rt((Qi(n)?n:n||e!==It?ti(e,n,t):e._time)+t._delay),t._end=Rt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),hp(e,t,"_first","_last",e._sort?"_start":0),Jc(t)||(e._recent=t),i||dp(e,t),e._ts<0&&Gl(e,e._tTime),e},pp=function(e,t){return(Kn.ScrollTrigger||gf("scrollTrigger",t))&&Kn.ScrollTrigger.create(t,e)},Yp=function(e,t,n,i,s){if(Ef(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!sn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&op!==Zn.frame)return Yr.push(e),e._lazy=[s,i],1},jm=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Jc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},e0=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&jm(e)&&!(!e._initted&&Jc(e))||(e._ts<0||e._dp._ts<0)&&!Jc(e))?0:1,o=e._rDelay,l=0,c,u,f;if(o&&e._repeat&&(l=co(0,e._tDur,t),u=Js(l,o),e._yoyo&&u&1&&(a=1-a),u!==Js(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||sn||i||e._zTime===Et||!t&&e._zTime){if(!e._initted&&Yp(e,t,i,n,l))return;for(f=e._zTime,e._zTime=t||(n?Et:0),n||(n=t&&!f),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Qc(e,t,n,!0),e._onUpdate&&!n&&zn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&zn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Wr(e,1),!n&&!sn&&(zn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},t0=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},qs=function(e,t,n,i){var s=e._repeat,a=Rt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Rt(a*(s+1)+e._rDelay*s):a,o>0&&!i&&Gl(e,e._tTime=e._tDur*o),e.parent&&Fl(e),n||Qr(e.parent,e),e},lh=function(e){return e instanceof Vn?Qr(e):qs(e,e._dur)},n0={_start:0,endTime:$a,totalDuration:$a},ti=function r(e,t,n){var i=e.labels,s=e._recent||n0,a=e.duration()>=ai?s.endTime(!1):e._dur,o,l,c;return nn(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(dn(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},Xa=function(e,t,n){var i=Qi(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=yn(l.vars.inherit)&&l.parent;a.immediateRender=yn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new zt(t[0],a,t[s+1])},Vr=function(e,t){return e||e===0?t(e):t},co=function(e,t,n){return n<e?e:n>t?t:n},fn=function(e,t){return!nn(e)||!(t=Hm.exec(e))?"":t[1]},i0=function(e,t,n){return Vr(n,function(i){return co(e,t,i)})},qc=[].slice,mp=function(e,t){return e&&Xi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Xi(e[0]))&&!e.nodeType&&e!==Ti},r0=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return nn(i)&&!t||mp(i,1)?(s=n).push.apply(s,oi(i)):n.push(i)})||n},oi=function(e,t,n){return Pt&&!t&&Pt.selector?Pt.selector(e):nn(e)&&!n&&($c||!js())?qc.call((t||Tf).querySelectorAll(e),0):dn(e)?r0(e,n):mp(e)?qc.call(e,0):e?[e]:[]},jc=function(e){return e=oi(e)[0]||ka("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return oi(t,n.querySelectorAll?n:n===e?ka("Invalid scope")||Tf.createElement("div"):e)}},Sp=function(e){return e.sort(function(){return .5-Math.random()})},_p=function(e){if(Dt(e))return e;var t=Xi(e)?e:{each:e},n=Jr(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,f=i;return nn(i)?u=f={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],f=i[1]),function(d,h,S){var m=(S||t).length,Y=a[m],p,v,x,_,E,V,M,b,g;if(!Y){if(g=t.grid==="auto"?0:(t.grid||[1,ai])[1],!g){for(M=-ai;M<(M=S[g++].getBoundingClientRect().left)&&g<m;);g<m&&g--}for(Y=a[m]=[],p=l?Math.min(g,m)*u-.5:i%g,v=g===ai?0:l?m*f/g-.5:i/g|0,M=0,b=ai,V=0;V<m;V++)x=V%g-p,_=v-(V/g|0),Y[V]=E=c?Math.abs(c==="y"?_:x):ep(x*x+_*_),E>M&&(M=E),E<b&&(b=E);i==="random"&&Sp(Y),Y.max=M-b,Y.min=b,Y.v=m=(parseFloat(t.amount)||parseFloat(t.each)*(g>m?m-1:c?c==="y"?m/g:g:Math.max(g,m/g))||0)*(i==="edges"?-1:1),Y.b=m<0?s-m:s,Y.u=fn(t.amount||t.each)||0,n=n&&m<0?S0(n):n}return m=(Y[d]-Y.min)/Y.max||0,Rt(Y.b+(n?n(m):m)*Y.v)+Y.u}},eu=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Rt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Qi(n)?0:fn(n))}},Tp=function(e,t){var n=dn(e),i,s;return!n&&Xi(e)&&(i=n=e.radius||ai,e.values?(e=oi(e.values),(s=!Qi(e[0]))&&(i*=i)):e=eu(e.increment)),Vr(t,n?Dt(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=ai,u=0,f=e.length,d,h;f--;)s?(d=e[f].x-o,h=e[f].y-l,d=d*d+h*h):d=Math.abs(e[f]-o),d<c&&(c=d,u=f);return u=!i||c<=i?e[u]:a,s||u===a||Qi(a)?u:u+fn(a)}:eu(e))},gp=function(e,t,n,i){return Vr(dn(e)?!t:n===!0?!!(n=0):!i,function(){return dn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},s0=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},a0=function(e,t){return function(n){return e(parseFloat(n))+(t||fn(n))}},o0=function(e,t,n){return Up(e,t,0,1,n)},Wp=function(e,t,n){return Vr(n,function(i){return e[~~t(i)]})},l0=function r(e,t,n){var i=t-e;return dn(e)?Wp(e,r(0,e.length),t):Vr(n,function(s){return(i+(s-e)%i)%i+e})},c0=function r(e,t,n){var i=t-e,s=i*2;return dn(e)?Wp(e,r(0,e.length-1),t):Vr(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},Ka=function(e){return e.replace(Gm,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(Bm);return gp(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Up=function(e,t,n,i,s){var a=t-e,o=i-n;return Vr(s,function(l){return n+((l-e)/a*o||0)})},u0=function r(e,t,n,i){var s=isNaN(e+t)?0:function(h){return(1-h)*e+h*t};if(!s){var a=nn(e),o={},l,c,u,f,d;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(dn(e)&&!dn(t)){for(u=[],f=e.length,d=f-2,c=1;c<f;c++)u.push(r(e[c-1],e[c]));f--,s=function(S){S*=f;var m=Math.min(d,~~S);return u[m](S-m)},n=t}else i||(e=Qs(dn(e)?[]:{},e));if(!u){for(l in t)xf.call(o,e,l,"get",t[l]);s=function(S){return Af(S,o)||(a?e.p:e)}}}return Vr(n,s)},ch=function(e,t,n){var i=e.labels,s=ai,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},zn=function(e,t,n){var i=e.vars,s=i[t],a=Pt,o=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&Yr.length&&Vl(),o&&(Pt=o),u=l?s.apply(c,l):s.call(c),Pt=a,u},Ma=function(e){return Wr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!sn),e.progress()<1&&zn(e,"onInterrupt"),e},ws,Mp=[],vp=function(e){if(e)if(e=!e.name&&e.default||e,_f()||e.headless){var t=e.name,n=Dt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:$a,render:Af,add:xf,kill:V0,modifier:E0,rawVars:0},a={targetTest:0,get:0,getSetter:yf,aliases:{},register:0};if(js(),e!==i){if(Gn[t])return;Qn(i,Qn(yl(e,s),a)),Qs(i.prototype,Qs(s,yl(e,a))),Gn[i.prop=t]=i,e.targetTest&&(fl.push(i),Wf[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}ap(t,i),e.register&&e.register(Rn,i,bn)}else Mp.push(e)},xt=255,va={aqua:[0,xt,xt],lime:[0,xt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,xt],navy:[0,0,128],white:[xt,xt,xt],olive:[128,128,0],yellow:[xt,xt,0],orange:[xt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[xt,0,0],pink:[xt,192,203],cyan:[0,xt,xt],transparent:[xt,xt,xt,0]},ec=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*xt+.5|0},xp=function(e,t,n){var i=e?Qi(e)?[e>>16,e>>8&xt,e&xt]:0:va.black,s,a,o,l,c,u,f,d,h,S;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),va[e])i=va[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&xt,i&xt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&xt,e&xt]}else if(e.substr(0,3)==="hsl"){if(i=S=e.match(rh),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=ec(l+1/3,s,a),i[1]=ec(l,s,a),i[2]=ec(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(np),n&&i.length<4&&(i[3]=1),i}else i=e.match(rh)||va.transparent;i=i.map(Number)}return t&&!S&&(s=i[0]/xt,a=i[1]/xt,o=i[2]/xt,f=Math.max(s,a,o),d=Math.min(s,a,o),u=(f+d)/2,f===d?l=c=0:(h=f-d,c=u>.5?h/(2-f-d):h/(f+d),l=f===s?(a-o)/h+(a<o?6:0):f===a?(o-s)/h+2:(s-a)/h+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Ep=function(e){var t=[],n=[],i=-1;return e.split(mr).forEach(function(s){var a=s.match(Is)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},uh=function(e,t,n){var i="",s=(e+i).match(mr),a=t?"hsla(":"rgba(",o=0,l,c,u,f;if(!s)return e;if(s=s.map(function(d){return(d=xp(d,t,1))&&a+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=Ep(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(mr,"1").split(Is),f=c.length-1;o<f;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(mr),f=c.length-1;o<f;o++)i+=c[o]+s[o];return i+c[f]},mr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in va)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),f0=/hsl[a]?\(/,Vp=function(e){var t=e.join(" "),n;if(mr.lastIndex=0,mr.test(t))return n=f0.test(t),e[1]=uh(e[1],n),e[0]=uh(e[0],n,Ep(e[1])),!0},Qa,Zn=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,f,d,h,S=function m(Y){var p=r()-i,v=Y===!0,x,_,E,V;if((p>e||p<0)&&(n+=p-t),i+=p,E=i-n,x=E-a,(x>0||v)&&(V=++f.frame,d=E-f.time*1e3,f.time=E=E/1e3,a+=x+(x>=s?4:s-x),_=1),v||(l=c(m)),_)for(h=0;h<o.length;h++)o[h](E,d,V,Y)};return f={time:0,frame:0,tick:function(){S(!0)},deltaRatio:function(Y){return d/(1e3/(Y||60))},wake:function(){rp&&(!$c&&_f()&&(Ti=$c=window,Tf=Ti.document||{},Kn.gsap=Rn,(Ti.gsapVersions||(Ti.gsapVersions=[])).push(Rn.version),sp(El||Ti.GreenSockGlobals||!Ti.gsap&&Ti||{}),Mp.forEach(vp)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(Y){return setTimeout(Y,a-f.time*1e3+1|0)},Qa=1,S(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Qa=0,c=$a},lagSmoothing:function(Y,p){e=Y||1/0,t=Math.min(p||33,e)},fps:function(Y){s=1e3/(Y||240),a=f.time*1e3+s},add:function(Y,p,v){var x=p?function(_,E,V,M){Y(_,E,V,M),f.remove(x)}:Y;return f.remove(Y),o[v?"unshift":"push"](x),js(),x},remove:function(Y,p){~(p=o.indexOf(Y))&&o.splice(p,1)&&h>=p&&h--},_listeners:o},f})(),js=function(){return!Qa&&Zn.wake()},ct={},h0=/^[\d.\-M][\d.\-,\s]/,d0=/["']/g,p0=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(d0,"").trim():+c,i=l.substr(o+1).trim();return t},Y0=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},m0=function(e){var t=(e+"").split("("),n=ct[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[p0(t[1])]:Y0(e).split(",").map(up)):ct._CE&&h0.test(e)?ct._CE("",e):n},S0=function(e){return function(t){return 1-e(1-t)}},Jr=function(e,t){return e&&(Dt(e)?e:ct[e]||m0(e))||t},us=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return An(e,function(o){ct[o]=Kn[o]=s,ct[a=o.toLowerCase()]=n;for(var l in s)ct[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ct[o+"."+l]=s[l]}),s},yp=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},tc=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/kc*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*Fm((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:yp(o);return s=kc/s,l.config=function(c,u){return r(e,c,u)},l},nc=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:yp(n);return i.config=function(s){return r(e,s)},i};An("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;us(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ct.Linear.easeNone=ct.none=ct.Linear.easeIn;us("Elastic",tc("in"),tc("out"),tc());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};us("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);us("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});us("Circ",function(r){return-(ep(1-r*r)-1)});us("Sine",function(r){return r===1?1:-Om(r*Dm)+1});us("Back",nc("in"),nc("out"),nc());ct.SteppedEase=ct.steps=Kn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-Et;return function(o){return((i*co(0,a,o)|0)+s)*n}}};za.ease=ct["quad.out"];An("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Uf+=r+","+r+"Params,"});var Ap=function(e,t){this.id=Nm++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:lp,this.set=t?t.getSetter:yf},Ja=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,qs(this,+t.duration,1,1),this.data=t.data,Pt&&(this._ctx=Pt,Pt.data.push(this)),Qa||Zn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,qs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(js(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Gl(this,n),!s._dp||s.parent||dp(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Mi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Et||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),cp(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+oh(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+oh(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Js(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Et?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Al(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Et?0:this._rts,this.totalTime(co(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),Fl(this),Jm(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(js(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Et&&(this._tTime-=Et)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Rt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Mi(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(yn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Al(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=km);var i=sn;return sn=n,vf(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),sn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,lh(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,lh(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(ti(this,n),yn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,yn(i)),this._dur||(this._zTime=-Et),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Et:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Et,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Et)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=Dt(n)?n:fp,l=function(){var u=i.then;i.then=null,s&&s(),Dt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=u),a(o),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){Ma(this)},r})();Qn(Ja.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Et,_prom:0,_ps:!1,_rts:1});var Vn=(function(r){jd(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=yn(n.sortChildren),It&&Mi(n.parent||It,Ni(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&pp(Ni(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return Xa(0,arguments,this),this},t.from=function(i,s,a){return Xa(1,arguments,this),this},t.fromTo=function(i,s,a,o){return Xa(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,Pa(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new zt(i,s,ti(this,a),1),this},t.call=function(i,s,a){return Mi(this,zt.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new zt(i,a,ti(this,l)),this},t.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,Pa(a).immediateRender=yn(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},t.staggerFromTo=function(i,s,a,o,l,c,u,f){return o.startAt=a,Pa(o).immediateRender=yn(o.immediateRender),this.staggerTo(i,s,o,l,c,u,f)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Rt(i),f=this._zTime<0!=i<0&&(this._initted||!c),d,h,S,m,Y,p,v,x,_,E,V,M;if(this!==It&&u>l&&i>=0&&(u=l),u!==this._tTime||a||f){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),d=u,_=this._start,x=this._ts,p=!x,f&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(V=this._yoyo,Y=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(Y*100+i,s,a);if(d=Rt(u%Y),u===l?(m=this._repeat,d=c):(E=Rt(u/Y),m=~~E,m&&m===E&&(d=c,m--),d>c&&(d=c)),E=Js(this._tTime,Y),!o&&this._tTime&&E!==m&&this._tTime-E*Y-this._dur<=0&&(E=m),V&&m&1&&(d=c-d,M=1),m!==E&&!this._lock){var b=V&&E&1,g=b===(V&&m&1);if(m<E&&(b=!b),o=b?0:u%c?c:u,this._lock=1,this.render(o||(M?0:Rt(m*Y)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&zn(this,"onRepeat"),this.vars.repeatRefresh&&!M&&(this.invalidate()._lock=1,E=m),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,g&&(this._lock=2,o=b?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!M&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=t0(this,Rt(o),Rt(d)),v&&(u-=d-(d=v._start))),this._tTime=u,this._time=d,this._act=!!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&c&&!s&&!E&&(zn(this,"onStart"),this._tTime!==u))return this;if(d>=o&&i>=0)for(h=this._first;h;){if(S=h._next,(h._act||d>=h._start)&&h._ts&&v!==h){if(h.parent!==this)return this.render(i,s,a);if(h.render(h._ts>0?(d-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(d-h._start)*h._ts,s,a),d!==this._time||!this._ts&&!p){v=0,S&&(u+=this._zTime=-Et);break}}h=S}else{h=this._last;for(var T=i<0?i:d;h;){if(S=h._prev,(h._act||T<=h._end)&&h._ts&&v!==h){if(h.parent!==this)return this.render(i,s,a);if(h.render(h._ts>0?(T-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(T-h._start)*h._ts,s,a||sn&&vf(h)),d!==this._time||!this._ts&&!p){v=0,S&&(u+=this._zTime=T?-Et:Et);break}}h=S}}if(v&&!s&&(this.pause(),v.render(d>=o?0:-Et)._zTime=d>=o?1:-1,this._ts))return this._start=_,Fl(this),this.render(i,s,a);this._onUpdate&&!s&&zn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(_===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Wr(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(zn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(Qi(s)||(s=ti(this,s,i)),!(i instanceof Ja)){if(dn(i))return i.forEach(function(o){return a.add(o,s)}),this;if(nn(i))return this.addLabel(i,s);if(Dt(i))i=zt.delayedCall(0,i);else return this}return this!==i?Mi(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-ai);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof zt?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return nn(i)?this.removeLabel(i):Dt(i)?this.killTweensOf(i):(i.parent===this&&Ol(this,i),i===this._recent&&(this._recent=this._last),Qr(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Rt(Zn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=ti(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=zt.delayedCall(0,s||$a,a);return o.data="isPause",this._hasPause=1,Mi(this,o,ti(this,i))},t.removePause=function(i){var s=this._first;for(i=ti(this,i);s;)s._start===i&&s.data==="isPause"&&Wr(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)ur!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=oi(i),l=this._first,c=Qi(s),u;l;)l instanceof zt?$m(l._targets,o)&&(c?(!ur||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=ti(a,i),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,d=l.immediateRender,h,S=zt.to(a,Qn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||Et,onStart:function(){if(a.pause(),!h){var Y=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());S._dur!==Y&&qs(S,Y,0,1).render(S._time,!0,!0),h=1}u&&u.apply(S,f||[])}},s));return d?S.render(0):S},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,Qn({startAt:{time:ti(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),ch(this,ti(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),ch(this,ti(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Et)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=Rt(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return Qr(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Qr(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=ai,c,u,f;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(f=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Mi(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!f&&!a._dp||f&&f.smoothChildTiming)&&(a._start+=Rt(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;qs(a,a===It&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(It._ts&&(cp(It,Al(i,It)),op=Zn.frame),Zn.frame>=sh){sh+=$n.autoSleep||120;var s=It._first;if((!s||!s._ts)&&$n.autoSleep&&Zn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Zn.sleep()}}},e})(Ja);Qn(Vn.prototype,{_lock:0,_hasPause:0,_forcing:0});var _0=function(e,t,n,i,s,a,o){var l=new bn(this._pt,e,t,0,1,Ip,null,s),c=0,u=0,f,d,h,S,m,Y,p,v;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Ka(i)),a&&(v=[n,i],a(v,e,t),n=v[0],i=v[1]),d=n.match(ql)||[];f=ql.exec(i);)S=f[0],m=i.substring(c,f.index),h?h=(h+1)%5:m.substr(-5)==="rgba("&&(h=1),S!==d[u++]&&(Y=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:m||u===1?m:",",s:Y,c:S.charAt(1)==="="?Ns(Y,S)-Y:parseFloat(S)-Y,m:h&&h<4?Math.round:0},c=ql.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(ip.test(i)||p)&&(l.e=0),this._pt=l,l},xf=function(e,t,n,i,s,a,o,l,c,u){Dt(i)&&(i=i(s||0,e,a));var f=e[t],d=n!=="get"?n:Dt(f)?c?e[t.indexOf("set")||!Dt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,h=Dt(f)?c?M0:Cp:Vf,S;if(nn(i)&&(~i.indexOf("random(")&&(i=Ka(i)),i.charAt(1)==="="&&(S=Ns(d,i)+(fn(d)||0),(S||S===0)&&(i=S))),!u||d!==i||tu)return!isNaN(d*i)&&i!==""?(S=new bn(this._pt,e,t,+d||0,i-(d||0),typeof f=="boolean"?x0:Rp,0,h),c&&(S.fp=c),o&&S.modifier(o,this,e),this._pt=S):(!f&&!(t in e)&&gf(t,i),_0.call(this,e,t,d,i,h,l||$n.stringFilter,c))},T0=function(e,t,n,i,s){if(Dt(e)&&(e=Ca(e,s,t,n,i)),!Xi(e)||e.style&&e.nodeType||dn(e)||tp(e))return nn(e)?Ca(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=Ca(e[o],s,t,n,i);return a},bp=function(e,t,n,i,s,a){var o,l,c,u;if(Gn[e]&&(o=new Gn[e]).init(s,o.rawVars?t[e]:T0(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new bn(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==ws))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},ur,tu,Ef=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,f=i.yoyoEase,d=i.keyframes,h=i.autoRevert,S=e._dur,m=e._startAt,Y=e._targets,p=e.parent,v=p&&p.data==="nested"?p.vars.targets:Y,x=e._overwrite==="auto"&&!mf,_=e.timeline,E=i.easeReverse||f,V,M,b,g,T,C,R,O,Z,B,H,G,N;if(_&&(!d||!s)&&(s="none"),e._ease=Jr(s,za.ease),e._rEase=E&&(Jr(E)||e._ease),e._from=!_&&!!i.runBackwards,e._from&&(e.ratio=1),!_||d&&!i.stagger){if(O=Y[0]?Kr(Y[0]).harness:0,G=O&&i[O.prop],V=yl(i,Wf),m&&(m._zTime<0&&m.progress(1),t<0&&u&&o&&!h?m.render(-1,!0):m.revert(u&&S?ul:zm),m._lazy=0),a){if(Wr(e._startAt=zt.set(Y,Qn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!m&&yn(l),startAt:null,delay:0,onUpdate:c&&function(){return zn(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(sn||!o&&!h)&&e._startAt.revert(ul),o&&S&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&S&&!m){if(t&&(o=!1),b=Qn({overwrite:!1,data:"isFromStart",lazy:o&&!m&&yn(l),immediateRender:o,stagger:0,parent:p},V),G&&(b[O.prop]=G),Wr(e._startAt=zt.set(Y,b)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(sn?e._startAt.revert(ul):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,Et,Et);else if(!t)return}for(e._pt=e._ptCache=0,l=S&&yn(l)||l&&!S,M=0;M<Y.length;M++){if(T=Y[M],R=T._gsap||Mf(Y)[M]._gsap,e._ptLookup[M]=B={},Kc[R.id]&&Yr.length&&Vl(),H=v===Y?M:v.indexOf(T),O&&(Z=new O).init(T,G||V,e,H,v)!==!1&&(e._pt=g=new bn(e._pt,T,Z.name,0,1,Z.render,Z,0,Z.priority),Z._props.forEach(function(ne){B[ne]=g}),Z.priority&&(C=1)),!O||G)for(b in V)Gn[b]&&(Z=bp(b,V,e,H,T,v))?Z.priority&&(C=1):B[b]=g=xf.call(e,T,b,"get",V[b],H,v,0,i.stringFilter);e._op&&e._op[M]&&e.kill(T,e._op[M]),x&&e._pt&&(ur=e,It.killTweensOf(T,B,e.globalTime(t)),N=!e.parent,ur=0),e._pt&&l&&(Kc[R.id]=1)}C&&wp(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!N,d&&t<=0&&_.render(ai,!0,!0)},g0=function(e,t,n,i,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,d,h;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,h=e._targets.length;h--;){if(u=d[h][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return tu=1,e.vars[t]="+=0",Ef(e,o),tu=0,l?ka(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(h=c.length;h--;)f=c[h],u=f._pt||f,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,f.e&&(f.e=Ft(n)+fn(f.e)),f.b&&(f.b=u.s+fn(f.b))},W0=function(e,t){var n=e[0]?Kr(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=Qs({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},U0=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(dn(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},Ca=function(e,t,n,i,s){return Dt(e)?e.call(t,n,i,s):nn(e)&&~e.indexOf("random(")?Ka(e):e},Pp=Uf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Xp={};An(Pp+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Xp[r]=1});var zt=(function(r){jd(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:Pa(i))||this;var l=o.vars,c=l.duration,u=l.delay,f=l.immediateRender,d=l.stagger,h=l.overwrite,S=l.keyframes,m=l.defaults,Y=l.scrollTrigger,p=i.parent||It,v=(dn(n)||tp(n)?Qi(n[0]):"length"in i)?[n]:oi(n),x,_,E,V,M,b,g,T;if(o._targets=v.length?Mf(v):ka("GSAP target "+n+" not found. https://gsap.com",!$n.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=h,S||d||go(c)||go(u)){i=o.vars;var C=i.easeReverse||i.yoyoEase;if(x=o.timeline=new Vn({data:"nested",defaults:m||{},targets:p&&p.data==="nested"?p.vars.targets:v}),x.kill(),x.parent=x._dp=Ni(o),x._start=0,d||go(c)||go(u)){if(V=v.length,g=d&&_p(d),Xi(d))for(M in d)~Pp.indexOf(M)&&(T||(T={}),T[M]=d[M]);for(_=0;_<V;_++)E=yl(i,Xp),E.stagger=0,C&&(E.easeReverse=C),T&&Qs(E,T),b=v[_],E.duration=+Ca(c,Ni(o),_,b,v),E.delay=(+Ca(u,Ni(o),_,b,v)||0)-o._delay,!d&&V===1&&E.delay&&(o._delay=u=E.delay,o._start+=u,E.delay=0),x.to(b,E,g?g(_,b,v):0),x._ease=ct.none;x.duration()?c=u=0:o.timeline=0}else if(S){Pa(Qn(x.vars.defaults,{ease:"none"})),x._ease=Jr(S.ease||i.ease||"none");var R=0,O,Z,B;if(dn(S))S.forEach(function(H){return x.to(v,H,">")}),x.duration();else{E={};for(M in S)M==="ease"||M==="easeEach"||U0(M,S[M],E,S.easeEach);for(M in E)for(O=E[M].sort(function(H,G){return H.t-G.t}),R=0,_=0;_<O.length;_++)Z=O[_],B={ease:Z.e,duration:(Z.t-(_?O[_-1].t:0))/100*c},B[M]=Z.v,x.to(v,B,R),R+=B.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||o.duration(c=x.duration())}else o.timeline=0;return h===!0&&!mf&&(ur=Ni(o),It.killTweensOf(v),ur=0),Mi(p,Ni(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(f||!c&&!S&&o._start===Rt(p._time)&&yn(f)&&qm(Ni(o))&&p.data!=="nested")&&(o._tTime=-Et,o.render(Math.max(0,-u)||0)),Y&&pp(Ni(o),Y),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,f=i>l-Et&&!u?l:i<Et?0:i,d,h,S,m,Y,p,v,x;if(!c)e0(this,i,s,a);else if(f!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(d=f,x=this.timeline,this._repeat){if(m=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(m*100+i,s,a);if(d=Rt(f%m),f===l?(S=this._repeat,d=c):(Y=Rt(f/m),S=~~Y,S&&S===Y?(d=c,S--):d>c&&(d=c)),p=this._yoyo&&S&1,p&&(d=c-d),Y=Js(this._tTime,m),d===o&&!a&&this._initted&&S===Y)return this._tTime=f,this;S!==Y&&this.vars.repeatRefresh&&!p&&!this._lock&&d!==m&&this._initted&&(this._lock=a=1,this.render(Rt(m*S),!0).invalidate()._lock=0)}if(!this._initted){if(Yp(this,u?i:d,a,s,f))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&S!==Y))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._rEase){var _=d<o;if(_!==this._inv){var E=_?o:c-o;this._inv=_,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=E?(_?-1:1)/E:0,this._invScale=_?-this.ratio:1-this.ratio,this._invEase=_?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((d-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(d/c);if(this._from&&(this.ratio=v=1-v),this._tTime=f,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&f&&!s&&!Y&&(zn(this,"onStart"),this._tTime!==f))return this;for(h=this._pt;h;)h.r(v,h.d),h=h._next;x&&x.render(i<0?i:x._dur*x._ease(d/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Qc(this,i,s,a),zn(this,"onUpdate")),this._repeat&&S!==Y&&this.vars.onRepeat&&!s&&this.parent&&zn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&Qc(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Wr(this,1),!s&&!(u&&!o)&&(f||o||p)&&(zn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o,l){Qa||Zn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Ef(this,c),u=this._ease(c/this._dur),g0(this,i,s,a,o,u,c,l)?this.resetTo(i,s,a,o,1):(Gl(this,0),this.parent||hp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Ma(this):this.scrollTrigger&&this.scrollTrigger.kill(!!sn),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,ur&&ur.vars.overwrite!==!0)._first||Ma(this),this.parent&&a!==this.timeline.totalDuration()&&qs(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?oi(i):o,c=this._ptLookup,u=this._pt,f,d,h,S,m,Y,p;if((!s||s==="all")&&Qm(o,l))return s==="all"&&(this._pt=0),Ma(this);for(f=this._op=this._op||[],s!=="all"&&(nn(s)&&(m={},An(s,function(v){return m[v]=1}),s=m),s=W0(o,s)),p=o.length;p--;)if(~l.indexOf(o[p])){d=c[p],s==="all"?(f[p]=s,S=d,h={}):(h=f[p]=f[p]||{},S=s);for(m in S)Y=d&&d[m],Y&&((!("kill"in Y.d)||Y.d.kill(m)===!0)&&Ol(this,Y,"_pt"),delete d[m]),h!=="all"&&(h[m]=1)}return this._initted&&!this._pt&&u&&Ma(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Xa(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return Xa(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return It.killTweensOf(i,s,a)},e})(Ja);Qn(zt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});An("staggerTo,staggerFrom,staggerFromTo",function(r){zt[r]=function(){var e=new Vn,t=qc.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Vf=function(e,t,n){return e[t]=n},Cp=function(e,t,n){return e[t](n)},M0=function(e,t,n,i){return e[t](i.fp,n)},v0=function(e,t,n){return e.setAttribute(t,n)},yf=function(e,t){return Dt(e[t])?Cp:Sf(e[t])&&e.setAttribute?v0:Vf},Rp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},x0=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Ip=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Af=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},E0=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},V0=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Ol(this,t,"_pt"):t.dep||(n=1),t=i;return!n},y0=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},wp=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},bn=(function(){function r(t,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||Rp,this.d=l||this,this.set=c||Vf,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=y0,this.m=n,this.mt=s,this.tween=i},r})();An(Uf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return Wf[r]=1});Kn.TweenMax=Kn.TweenLite=zt;Kn.TimelineLite=Kn.TimelineMax=Vn;It=new Vn({sortChildren:!1,defaults:za,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});$n.stringFilter=Vp;var qr=[],hl={},A0=[],fh=0,b0=0,ic=function(e){return(hl[e]||A0).map(function(t){return t()})},nu=function(){var e=Date.now(),t=[];e-fh>2&&(ic("matchMediaInit"),qr.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=Ti.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),ic("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),fh=e,ic("matchMedia"))},Lp=(function(){function r(t,n){this.selector=n&&jc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=b0++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Dt(n)&&(s=i,i=n,n=Dt);var a=this,o=function(){var c=Pt,u=a.selector,f;return c&&c!==a&&c.data.push(a),s&&(a.selector=jc(s)),Pt=a,f=i.apply(a,arguments),Dt(f)&&a._r.push(f),Pt=c,a.selector=u,a.isReverted=!1,f};return a.last=o,n===Dt?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=Pt;Pt=null,n(this),Pt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof zt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Vn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof zt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=qr.length;a--;)qr[a].id===this.id&&qr.splice(a,1)},e.revert=function(n){this.kill(n||{})},r})(),P0=(function(){function r(t){this.contexts=[],this.scope=t,Pt&&Pt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Xi(n)||(n={matches:n});var a=new Lp(0,s||this.scope),o=a.conditions={},l,c,u;Pt&&!a.selector&&(a.selector=Pt.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=Ti.matchMedia(n[c]),l&&(qr.indexOf(a)<0&&qr.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(nu):l.addEventListener("change",nu)));return u&&i(a,function(f){return a.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),bl={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return vp(i)})},timeline:function(e){return new Vn(e)},getTweensOf:function(e,t){return It.getTweensOf(e,t)},getProperty:function(e,t,n,i){nn(e)&&(e=oi(e)[0]);var s=Kr(e||{}).get,a=n?fp:up;return n==="native"&&(n=""),e&&(t?a((Gn[t]&&Gn[t].get||s)(e,t,n,i)):function(o,l,c){return a((Gn[o]&&Gn[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=oi(e),e.length>1){var i=e.map(function(u){return Rn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var f=s;f--;)i[f](u)}}e=e[0]||{};var a=Gn[t],o=Kr(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var f=new a;ws._pt=0,f.init(e,n?u+n:u,ws,0,[e]),f.render(1,f),ws._pt&&Af(1,ws)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,s=Rn.to(e,Qn((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return It.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Jr(e.ease,za.ease)),ah(za,e||{})},config:function(e){return ah($n,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Gn[o]&&!Kn[o]&&ka(t+" effect requires "+o+" plugin.")}),jl[t]=function(o,l,c){return n(oi(o),Qn(l||{},s),c)},a&&(Vn.prototype[t]=function(o,l,c){return this.add(jl[t](o,Xi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ct[e]=Jr(t)},parseEase:function(e,t){return arguments.length?Jr(e,t):ct},getById:function(e){return It.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Vn(e),i,s;for(n.smoothChildTiming=yn(e.smoothChildTiming),It.remove(n),n._dp=0,n._time=n._tTime=It._time,i=It._first;i;)s=i._next,(t||!(!i._dur&&i instanceof zt&&i.vars.onComplete===i._targets[0]))&&Mi(n,i,i._start-i._delay),i=s;return Mi(It,n,0),n},context:function(e,t){return e?new Lp(e,t):Pt},matchMedia:function(e){return new P0(e)},matchMediaRefresh:function(){return qr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||nu()},addEventListener:function(e,t){var n=hl[e]||(hl[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=hl[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:l0,wrapYoyo:c0,distribute:_p,random:gp,snap:Tp,normalize:o0,getUnit:fn,clamp:i0,splitColor:xp,toArray:oi,selector:jc,mapRange:Up,pipe:s0,unitize:a0,interpolate:u0,shuffle:Sp},install:sp,effects:jl,ticker:Zn,updateRoot:Vn.updateRoot,plugins:Gn,globalTimeline:It,core:{PropTween:bn,globals:ap,Tween:zt,Timeline:Vn,Animation:Ja,getCache:Kr,_removeLinkedListItem:Ol,reverting:function(){return sn},context:function(e){return e&&Pt&&(Pt.data.push(e),e._ctx=Pt),Pt},suppressOverwrites:function(e){return mf=e}}};An("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return bl[r]=zt[r]});Zn.add(Vn.updateRoot);ws=bl.to({},{duration:0});var X0=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},C0=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=X0(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},rc=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(nn(s)&&(l={},An(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}C0(o,s)}}}},Rn=bl.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)sn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},rc("roundProps",eu),rc("modifiers"),rc("snap",Tp))||bl;zt.version=Vn.version=Rn.version="3.15.0";rp=1;_f()&&js();ct.Power0;ct.Power1;ct.Power2;ct.Power3;ct.Power4;ct.Linear;ct.Quad;ct.Cubic;ct.Quart;ct.Quint;ct.Strong;ct.Elastic;ct.Back;ct.SteppedEase;ct.Bounce;ct.Sine;ct.Expo;ct.Circ;var hh,fr,Os,bf,Zr,dh,Pf,R0=function(){return typeof window<"u"},Ji={},Lr=180/Math.PI,Fs=Math.PI/180,ds=Math.atan2,ph=1e8,Xf=/([A-Z])/g,I0=/(left|right|width|margin|padding|x)/i,w0=/[\s,\(]\S/,xi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},iu=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},L0=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},D0=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},N0=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},O0=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Dp=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Np=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},F0=function(e,t,n){return e.style[t]=n},G0=function(e,t,n){return e.style.setProperty(t,n)},B0=function(e,t,n){return e._gsap[t]=n},Z0=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},H0=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},z0=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},wt="transform",Pn=wt+"Origin",k0=function r(e,t){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in Ji&&s){if(this.tfm=this.tfm||{},e!=="transform")e=xi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=Fi(i,o)}):this.tfm[e]=a.x?a[e]:Fi(i,e),e===Pn&&(this.tfm.zOrigin=a.zOrigin);else return xi.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(wt)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Pn,t,"")),e=wt}(s||t)&&this.props.push(e,t,s[e])},Op=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},$0=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Xf,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Pf(),(!s||!s.isStart)&&!n[wt]&&(Op(n),i.zOrigin&&n[Pn]&&(n[Pn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Fp=function(e,t){var n={target:e,props:[],revert:$0,save:k0};return e._gsap||Rn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Gp,ru=function(e,t){var n=fr.createElementNS?fr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):fr.createElement(e);return n&&n.style?n:fr.createElement(e)},kn=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Xf,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,ea(t)||t,1)||""},Yh="O,Moz,ms,Ms,Webkit".split(","),ea=function(e,t,n){var i=t||Zr,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Yh[a]+e in s););return a<0?null:(a===3?"ms":a>=0?Yh[a]:"")+e},su=function(){R0()&&window.document&&(hh=window,fr=hh.document,Os=fr.documentElement,Zr=ru("div")||{style:{}},ru("div"),wt=ea(wt),Pn=wt+"Origin",Zr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Gp=!!ea("perspective"),Pf=Rn.core.reverting,bf=1)},mh=function(e){var t=e.ownerSVGElement,n=ru("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Os.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Os.removeChild(n),s},Sh=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Bp=function(e){var t,n;try{t=e.getBBox()}catch{t=mh(e),n=1}return t&&(t.width||t.height)||n||(t=mh(e)),t&&!t.width&&!t.x&&!t.y?{x:+Sh(e,["x","cx","x1"])||0,y:+Sh(e,["y","cy","y1"])||0,width:0,height:0}:t},Zp=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Bp(e))},Ur=function(e,t){if(t){var n=e.style,i;t in Ji&&t!==Pn&&(t=wt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Xf,"-$1").toLowerCase())):n.removeAttribute(t)}},hr=function(e,t,n,i,s,a){var o=new bn(e._pt,t,n,0,1,a?Np:Dp);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},_h={deg:1,rad:1,turn:1},K0={grid:1,flex:1},Mr=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Zr.style,l=I0.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,d=i==="px",h=i==="%",S,m,Y,p;if(i===a||!s||_h[i]||_h[a])return s;if(a!=="px"&&!d&&(s=r(e,t,n,"px")),p=e.getCTM&&Zp(e),(h||a==="%")&&(Ji[t]||~t.indexOf("adius")))return S=p?e.getBBox()[l?"width":"height"]:e[u],Ft(h?s/S*f:s/100*S);if(o[l?"width":"height"]=f+(d?a:i),m=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(m=(e.ownerSVGElement||{}).parentNode),(!m||m===fr||!m.appendChild)&&(m=fr.body),Y=m._gsap,Y&&h&&Y.width&&l&&Y.time===Zn.time&&!Y.uncache)return Ft(s/Y.width*f);if(h&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=f+i,S=e[u],v?e.style[t]=v:Ur(e,t)}else(h||a==="%")&&!K0[kn(m,"display")]&&(o.position=kn(e,"position")),m===e&&(o.position="static"),m.appendChild(Zr),S=Zr[u],m.removeChild(Zr),o.position="absolute";return l&&h&&(Y=Kr(m),Y.time=Zn.time,Y.width=m[u]),Ft(d?S*s/f:S&&s?f/S*s:0)},Fi=function(e,t,n,i){var s;return bf||su(),t in xi&&t!=="transform"&&(t=xi[t],~t.indexOf(",")&&(t=t.split(",")[0])),Ji[t]&&t!=="transform"?(s=ja(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Xl(kn(e,Pn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Pl[t]&&Pl[t](e,t,n)||kn(e,t)||lp(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Mr(e,t,s,n)+n:s},Q0=function(e,t,n,i){if(!n||n==="none"){var s=ea(t,e,1),a=s&&kn(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=kn(e,"borderTopColor"))}var o=new bn(this._pt,e.style,t,0,1,Ip),l=0,c=0,u,f,d,h,S,m,Y,p,v,x,_,E;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=kn(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(m=e.style[t],e.style[t]=i,i=kn(e,t)||i,m?e.style[t]=m:Ur(e,t)),u=[n,i],Vp(u),n=u[0],i=u[1],d=n.match(Is)||[],E=i.match(Is)||[],E.length){for(;f=Is.exec(i);)Y=f[0],v=i.substring(l,f.index),S?S=(S+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(S=1),Y!==(m=d[c++]||"")&&(h=parseFloat(m)||0,_=m.substr((h+"").length),Y.charAt(1)==="="&&(Y=Ns(h,Y)+_),p=parseFloat(Y),x=Y.substr((p+"").length),l=Is.lastIndex-x.length,x||(x=x||$n.units[t]||_,l===i.length&&(i+=x,o.e+=x)),_!==x&&(h=Mr(e,t,m,x)||0),o._pt={_next:o._pt,p:v||c===1?v:",",s:h,c:p-h,m:S&&S<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?Np:Dp;return ip.test(i)&&(o.e=0),this._pt=o,o},Th={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},J0=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Th[n]||n,t[1]=Th[i]||i,t.join(" ")},q0=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],Ji[o]&&(l=1,o=o==="transformOrigin"?Pn:wt),Ur(n,o);l&&(Ur(n,wt),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",ja(n,1),a.uncache=1,Op(i)))}},Pl={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new bn(e._pt,t,n,0,0,q0);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},qa=[1,0,0,1,0,0],Hp={},zp=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},gh=function(e){var t=kn(e,wt);return zp(t)?qa:t.substr(7).match(np).map(Ft)},Cf=function(e,t){var n=e._gsap||Kr(e),i=e.style,s=gh(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?qa:s):(s===qa&&!e.offsetParent&&e!==Os&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,Os.appendChild(e)),s=gh(e),l?i.display=l:Ur(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Os.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},au=function(e,t,n,i,s,a){var o=e._gsap,l=s||Cf(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,f=o.xOffset||0,d=o.yOffset||0,h=l[0],S=l[1],m=l[2],Y=l[3],p=l[4],v=l[5],x=t.split(" "),_=parseFloat(x[0])||0,E=parseFloat(x[1])||0,V,M,b,g;n?l!==qa&&(M=h*Y-S*m)&&(b=_*(Y/M)+E*(-m/M)+(m*v-Y*p)/M,g=_*(-S/M)+E*(h/M)-(h*v-S*p)/M,_=b,E=g):(V=Bp(e),_=V.x+(~x[0].indexOf("%")?_/100*V.width:_),E=V.y+(~(x[1]||x[0]).indexOf("%")?E/100*V.height:E)),i||i!==!1&&o.smooth?(p=_-c,v=E-u,o.xOffset=f+(p*h+v*m)-p,o.yOffset=d+(p*S+v*Y)-v):o.xOffset=o.yOffset=0,o.xOrigin=_,o.yOrigin=E,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[Pn]="0px 0px",a&&(hr(a,o,"xOrigin",c,_),hr(a,o,"yOrigin",u,E),hr(a,o,"xOffset",f,o.xOffset),hr(a,o,"yOffset",d,o.yOffset)),e.setAttribute("data-svg-origin",_+" "+E)},ja=function(e,t){var n=e._gsap||new Ap(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=kn(e,Pn)||"0",u,f,d,h,S,m,Y,p,v,x,_,E,V,M,b,g,T,C,R,O,Z,B,H,G,N,ne,P,fe,Le,tt,He,Ze;return u=f=d=m=Y=p=v=x=_=0,h=S=1,n.svg=!!(e.getCTM&&Zp(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[wt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[wt]!=="none"?l[wt]:"")),i.scale=i.rotate=i.translate="none"),M=Cf(e,n.svg),n.svg&&(n.uncache?(N=e.getBBox(),c=n.xOrigin-N.x+"px "+(n.yOrigin-N.y)+"px",G=""):G=!t&&e.getAttribute("data-svg-origin"),au(e,G||c,!!G||n.originIsAbsolute,n.smooth!==!1,M)),E=n.xOrigin||0,V=n.yOrigin||0,M!==qa&&(C=M[0],R=M[1],O=M[2],Z=M[3],u=B=M[4],f=H=M[5],M.length===6?(h=Math.sqrt(C*C+R*R),S=Math.sqrt(Z*Z+O*O),m=C||R?ds(R,C)*Lr:0,v=O||Z?ds(O,Z)*Lr+m:0,v&&(S*=Math.abs(Math.cos(v*Fs))),n.svg&&(u-=E-(E*C+V*O),f-=V-(E*R+V*Z))):(Ze=M[6],tt=M[7],P=M[8],fe=M[9],Le=M[10],He=M[11],u=M[12],f=M[13],d=M[14],b=ds(Ze,Le),Y=b*Lr,b&&(g=Math.cos(-b),T=Math.sin(-b),G=B*g+P*T,N=H*g+fe*T,ne=Ze*g+Le*T,P=B*-T+P*g,fe=H*-T+fe*g,Le=Ze*-T+Le*g,He=tt*-T+He*g,B=G,H=N,Ze=ne),b=ds(-O,Le),p=b*Lr,b&&(g=Math.cos(-b),T=Math.sin(-b),G=C*g-P*T,N=R*g-fe*T,ne=O*g-Le*T,He=Z*T+He*g,C=G,R=N,O=ne),b=ds(R,C),m=b*Lr,b&&(g=Math.cos(b),T=Math.sin(b),G=C*g+R*T,N=B*g+H*T,R=R*g-C*T,H=H*g-B*T,C=G,B=N),Y&&Math.abs(Y)+Math.abs(m)>359.9&&(Y=m=0,p=180-p),h=Ft(Math.sqrt(C*C+R*R+O*O)),S=Ft(Math.sqrt(H*H+Ze*Ze)),b=ds(B,H),v=Math.abs(b)>2e-4?b*Lr:0,_=He?1/(He<0?-He:He):0),n.svg&&(G=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!zp(kn(e,wt)),G&&e.setAttribute("transform",G))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(h*=-1,v+=m<=0?180:-180,m+=m<=0?180:-180):(S*=-1,v+=v<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=Ft(h),n.scaleY=Ft(S),n.rotation=Ft(m)+o,n.rotationX=Ft(Y)+o,n.rotationY=Ft(p)+o,n.skewX=v+o,n.skewY=x+o,n.transformPerspective=_+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Pn]=Xl(c)),n.xOffset=n.yOffset=0,n.force3D=$n.force3D,n.renderTransform=n.svg?eS:Gp?kp:j0,n.uncache=0,n},Xl=function(e){return(e=e.split(" "))[0]+" "+e[1]},sc=function(e,t,n){var i=fn(t);return Ft(parseFloat(t)+parseFloat(Mr(e,"x",n+"px",i)))+i},j0=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,kp(e,t)},Ar="0deg",ha="0px",br=") ",kp=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,d=n.skewX,h=n.skewY,S=n.scaleX,m=n.scaleY,Y=n.transformPerspective,p=n.force3D,v=n.target,x=n.zOrigin,_="",E=p==="auto"&&e&&e!==1||p===!0;if(x&&(f!==Ar||u!==Ar)){var V=parseFloat(u)*Fs,M=Math.sin(V),b=Math.cos(V),g;V=parseFloat(f)*Fs,g=Math.cos(V),a=sc(v,a,M*g*-x),o=sc(v,o,-Math.sin(V)*-x),l=sc(v,l,b*g*-x+x)}Y!==ha&&(_+="perspective("+Y+br),(i||s)&&(_+="translate("+i+"%, "+s+"%) "),(E||a!==ha||o!==ha||l!==ha)&&(_+=l!==ha||E?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+br),c!==Ar&&(_+="rotate("+c+br),u!==Ar&&(_+="rotateY("+u+br),f!==Ar&&(_+="rotateX("+f+br),(d!==Ar||h!==Ar)&&(_+="skew("+d+", "+h+br),(S!==1||m!==1)&&(_+="scale("+S+", "+m+br),v.style[wt]=_||"translate(0, 0)"},eS=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,d=n.scaleY,h=n.target,S=n.xOrigin,m=n.yOrigin,Y=n.xOffset,p=n.yOffset,v=n.forceCSS,x=parseFloat(a),_=parseFloat(o),E,V,M,b,g;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Fs,c*=Fs,E=Math.cos(l)*f,V=Math.sin(l)*f,M=Math.sin(l-c)*-d,b=Math.cos(l-c)*d,c&&(u*=Fs,g=Math.tan(c-u),g=Math.sqrt(1+g*g),M*=g,b*=g,u&&(g=Math.tan(u),g=Math.sqrt(1+g*g),E*=g,V*=g)),E=Ft(E),V=Ft(V),M=Ft(M),b=Ft(b)):(E=f,b=d,V=M=0),(x&&!~(a+"").indexOf("px")||_&&!~(o+"").indexOf("px"))&&(x=Mr(h,"x",a,"px"),_=Mr(h,"y",o,"px")),(S||m||Y||p)&&(x=Ft(x+S-(S*E+m*M)+Y),_=Ft(_+m-(S*V+m*b)+p)),(i||s)&&(g=h.getBBox(),x=Ft(x+i/100*g.width),_=Ft(_+s/100*g.height)),g="matrix("+E+","+V+","+M+","+b+","+x+","+_+")",h.setAttribute("transform",g),v&&(h.style[wt]=g)},tS=function(e,t,n,i,s){var a=360,o=nn(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Lr:1),c=l-i,u=i+c+"deg",f,d;return o&&(f=s.split("_")[1],f==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),f==="cw"&&c<0?c=(c+a*ph)%a-~~(c/a)*a:f==="ccw"&&c>0&&(c=(c-a*ph)%a-~~(c/a)*a)),e._pt=d=new bn(e._pt,t,n,i,c,L0),d.e=u,d.u="deg",e._props.push(n),d},Wh=function(e,t){for(var n in t)e[n]=t[n];return e},nS=function(e,t,n){var i=Wh({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,f,d,h,S;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[wt]=t,o=ja(n,1),Ur(n,wt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[wt],a[wt]=t,o=ja(n,1),a[wt]=c);for(l in Ji)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(h=fn(c),S=fn(u),f=h!==S?Mr(n,l,c,S):parseFloat(c),d=parseFloat(u),e._pt=new bn(e._pt,o,l,f,d-f,iu),e._pt.u=S||0,e._props.push(l));Wh(o,i)};An("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});Pl[e>1?"border"+r:r]=function(o,l,c,u,f){var d,h;if(arguments.length<4)return d=a.map(function(S){return Fi(o,S,c)}),h=d.join(" "),h.split(d[0]).length===5?d[0]:h;d=(u+"").split(" "),h={},a.forEach(function(S,m){return h[S]=d[m]=d[m]||d[(m-1)/2|0]}),o.init(l,h,f)}});var $p={name:"css",register:su,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,f,d,h,S,m,Y,p,v,x,_,E,V,M,b,g;bf||su(),this.styles=this.styles||Fp(e),b=this.styles.props,this.tween=n;for(m in t)if(m!=="autoRound"&&(u=t[m],!(Gn[m]&&bp(m,t,n,i,e,s)))){if(h=typeof u,S=Pl[m],h==="function"&&(u=u.call(n,i,e,s),h=typeof u),h==="string"&&~u.indexOf("random(")&&(u=Ka(u)),S)S(this,e,m,u,n)&&(M=1);else if(m.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(m)+"").trim(),u+="",mr.lastIndex=0,mr.test(c)||(Y=fn(c),p=fn(u),p?Y!==p&&(c=Mr(e,m,c,p)+p):Y&&(u+=Y)),this.add(o,"setProperty",c,u,i,s,0,0,m),a.push(m),b.push(m,0,o[m]);else if(h!=="undefined"){if(l&&m in l?(c=typeof l[m]=="function"?l[m].call(n,i,e,s):l[m],nn(c)&&~c.indexOf("random(")&&(c=Ka(c)),fn(c+"")||c==="auto"||(c+=$n.units[m]||fn(Fi(e,m))||""),(c+"").charAt(1)==="="&&(c=Fi(e,m))):c=Fi(e,m),d=parseFloat(c),v=h==="string"&&u.charAt(1)==="="&&u.substr(0,2),v&&(u=u.substr(2)),f=parseFloat(u),m in xi&&(m==="autoAlpha"&&(d===1&&Fi(e,"visibility")==="hidden"&&f&&(d=0),b.push("visibility",0,o.visibility),hr(this,o,"visibility",d?"inherit":"hidden",f?"inherit":"hidden",!f)),m!=="scale"&&m!=="transform"&&(m=xi[m],~m.indexOf(",")&&(m=m.split(",")[0]))),x=m in Ji,x){if(this.styles.save(m),g=u,h==="string"&&u.substring(0,6)==="var(--"){if(u=kn(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var T=e.style.perspective;e.style.perspective=u,u=kn(e,"perspective"),T?e.style.perspective=T:Ur(e,"perspective")}f=parseFloat(u)}if(_||(E=e._gsap,E.renderTransform&&!t.parseTransform||ja(e,t.parseTransform),V=t.smoothOrigin!==!1&&E.smooth,_=this._pt=new bn(this._pt,o,wt,0,1,E.renderTransform,E,0,-1),_.dep=1),m==="scale")this._pt=new bn(this._pt,E,"scaleY",E.scaleY,(v?Ns(E.scaleY,v+f):f)-E.scaleY||0,iu),this._pt.u=0,a.push("scaleY",m),m+="X";else if(m==="transformOrigin"){b.push(Pn,0,o[Pn]),u=J0(u),E.svg?au(e,u,0,V,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==E.zOrigin&&hr(this,E,"zOrigin",E.zOrigin,p),hr(this,o,m,Xl(c),Xl(u)));continue}else if(m==="svgOrigin"){au(e,u,1,V,0,this);continue}else if(m in Hp){tS(this,E,m,d,v?Ns(d,v+u):u);continue}else if(m==="smoothOrigin"){hr(this,E,"smooth",E.smooth,u);continue}else if(m==="force3D"){E[m]=u;continue}else if(m==="transform"){nS(this,u,e);continue}}else m in o||(m=ea(m)||m);if(x||(f||f===0)&&(d||d===0)&&!w0.test(u)&&m in o)Y=(c+"").substr((d+"").length),f||(f=0),p=fn(u)||(m in $n.units?$n.units[m]:Y),Y!==p&&(d=Mr(e,m,c,p)),this._pt=new bn(this._pt,x?E:o,m,d,(v?Ns(d,v+f):f)-d,!x&&(p==="px"||m==="zIndex")&&t.autoRound!==!1?O0:iu),this._pt.u=p||0,x&&g!==u?(this._pt.b=c,this._pt.e=g,this._pt.r=N0):Y!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=D0);else if(m in o)Q0.call(this,e,m,c,v?v+u:u);else if(m in e)this.add(e,m,c||e[m],v?v+u:u,i,s);else if(m!=="parseTransform"){gf(m,u);continue}x||(m in o?b.push(m,0,o[m]):typeof e[m]=="function"?b.push(m,2,e[m]()):b.push(m,1,c||e[m])),a.push(m)}}M&&wp(this)},render:function(e,t){if(t.tween._time||!Pf())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Fi,aliases:xi,getSetter:function(e,t,n){var i=xi[t];return i&&i.indexOf(",")<0&&(t=i),t in Ji&&t!==Pn&&(e._gsap.x||Fi(e,"x"))?n&&dh===n?t==="scale"?Z0:B0:(dh=n||{})&&(t==="scale"?H0:z0):e.style&&!Sf(e.style[t])?F0:~t.indexOf("-")?G0:yf(e,t)},core:{_removeProperty:Ur,_getMatrix:Cf}};Rn.utils.checkPrefix=ea;Rn.core.getStyleSaver=Fp;(function(r,e,t,n){var i=An(r+","+e+","+t,function(s){Ji[s]=1});An(e,function(s){$n.units[s]="deg",Hp[s]=1}),xi[i[13]]=r+","+e,An(n,function(s){var a=s.split(":");xi[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");An("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){$n.units[r]="px"});Rn.registerPlugin($p);var Sr=Rn.registerPlugin($p)||Rn;Sr.core.Tween;function iS(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function rS(r,e,t){return e&&iS(r.prototype,e),r}var rn,dl,Hn,dr,pr,Gs,Kp,Dr,Bs,Qp,zi,di,Jp,qp=function(){return rn||typeof window<"u"&&(rn=window.gsap)&&rn.registerPlugin&&rn},jp=1,Ls=[],rt=[],bi=[],Ra=Date.now,ou=function(e,t){return t},sS=function(){var e=Bs.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,rt),i.push.apply(i,bi),rt=n,bi=i,ou=function(a,o){return t[a](o)}},_r=function(e,t){return~bi.indexOf(e)&&bi[bi.indexOf(e)+1][t]},Ia=function(e){return!!~Qp.indexOf(e)},Sn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},mn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Wo="scrollLeft",Uo="scrollTop",lu=function(){return zi&&zi.isPressed||rt.cache++},Cl=function(e,t){var n=function i(s){if(s||s===0){jp&&(Hn.history.scrollRestoration="manual");var a=zi&&zi.isPressed;s=i.v=Math.round(s)||(zi&&zi.iOS?1:0),e(s),i.cacheID=rt.cache,a&&ou("ss",s)}else(t||rt.cache!==i.cacheID||ou("ref"))&&(i.cacheID=rt.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Un={s:Wo,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Cl(function(r){return arguments.length?Hn.scrollTo(r,Qt.sc()):Hn.pageXOffset||dr[Wo]||pr[Wo]||Gs[Wo]||0})},Qt={s:Uo,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Un,sc:Cl(function(r){return arguments.length?Hn.scrollTo(Un.sc(),r):Hn.pageYOffset||dr[Uo]||pr[Uo]||Gs[Uo]||0})},En=function(e,t){return(t&&t._ctx&&t._ctx.selector||rn.utils.toArray)(e)[0]||(typeof e=="string"&&rn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},aS=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},vr=function(e,t){var n=t.s,i=t.sc;Ia(e)&&(e=dr.scrollingElement||pr);var s=rt.indexOf(e),a=i===Qt.sc?1:2;!~s&&(s=rt.push(e)-1),rt[s+a]||Sn(e,"scroll",lu);var o=rt[s+a],l=o||(rt[s+a]=Cl(_r(e,n),!0)||(Ia(e)?i:Cl(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=rn.getProperty(e,"scrollBehavior")==="smooth"),l},cu=function(e,t,n){var i=e,s=e,a=Ra(),o=a,l=t||50,c=Math.max(500,l*3),u=function(S,m){var Y=Ra();m||Y-a>l?(s=i,i=S,o=a,a=Y):n?i+=S:i=s+(S-s)/(Y-o)*(a-o)},f=function(){s=i=n?0:i,o=a=0},d=function(S){var m=o,Y=s,p=Ra();return(S||S===0)&&S!==i&&u(S),a===o||p-o>c?0:(i+(n?Y:-Y))/((n?p:a)-m)*1e3};return{update:u,reset:f,getVelocity:d}},da=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Uh=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},eY=function(){Bs=rn.core.globals().ScrollTrigger,Bs&&Bs.core&&sS()},tY=function(e){return rn=e||qp(),!dl&&rn&&typeof document<"u"&&document.body&&(Hn=window,dr=document,pr=dr.documentElement,Gs=dr.body,Qp=[Hn,dr,pr,Gs],rn.utils.clamp,Jp=rn.core.context||function(){},Dr="onpointerenter"in Gs?"pointer":"mouse",Kp=Bt.isTouch=Hn.matchMedia&&Hn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Hn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,di=Bt.eventTypes=("ontouchstart"in pr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in pr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return jp=0},500),dl=1),Bs||eY(),dl};Un.op=Qt;rt.cache=0;var Bt=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){dl||tY(rn)||console.warn("Please gsap.registerPlugin(Observer)"),Bs||eY();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,f=n.onStop,d=n.onStopDelay,h=n.ignore,S=n.wheelSpeed,m=n.event,Y=n.onDragStart,p=n.onDragEnd,v=n.onDrag,x=n.onPress,_=n.onRelease,E=n.onRight,V=n.onLeft,M=n.onUp,b=n.onDown,g=n.onChangeX,T=n.onChangeY,C=n.onChange,R=n.onToggleX,O=n.onToggleY,Z=n.onHover,B=n.onHoverEnd,H=n.onMove,G=n.ignoreCheck,N=n.isNormalizer,ne=n.onGestureStart,P=n.onGestureEnd,fe=n.onWheel,Le=n.onEnable,tt=n.onDisable,He=n.onClick,Ze=n.scrollSpeed,K=n.capture,q=n.allowClicks,de=n.lockAxis,ye=n.onLockAxis;this.target=o=En(o)||pr,this.vars=n,h&&(h=rn.utils.toArray(h)),i=i||1e-9,s=s||0,S=S||1,Ze=Ze||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Hn.getComputedStyle(Gs).lineHeight)||22);var xe,Fe,ft,A,ze,Ce,Ae,I=this,nt=0,_e=0,Ge=n.passive||!u&&n.passive!==!1,Ke=vr(o,Un),mt=vr(o,Qt),y=Ke(),W=mt(),D=~a.indexOf("touch")&&!~a.indexOf("pointer")&&di[0]==="pointerdown",Q=Ia(o),J=o.ownerDocument||dr,$=[0,0,0],Te=[0,0,0],se=0,Ee=function(){return se=Ra()},he=function(be,$e){return(I.event=be)&&h&&aS(be.target,h)||$e&&D&&be.pointerType!=="touch"||G&&G(be,$e)},re=function(){I._vx.reset(),I._vy.reset(),Fe.pause(),f&&f(I)},ue=function(){var be=I.deltaX=Uh($),$e=I.deltaY=Uh(Te),pe=Math.abs(be)>=i,Ne=Math.abs($e)>=i;C&&(pe||Ne)&&C(I,be,$e,$,Te),pe&&(E&&I.deltaX>0&&E(I),V&&I.deltaX<0&&V(I),g&&g(I),R&&I.deltaX<0!=nt<0&&R(I),nt=I.deltaX,$[0]=$[1]=$[2]=0),Ne&&(b&&I.deltaY>0&&b(I),M&&I.deltaY<0&&M(I),T&&T(I),O&&I.deltaY<0!=_e<0&&O(I),_e=I.deltaY,Te[0]=Te[1]=Te[2]=0),(A||ft)&&(H&&H(I),ft&&(Y&&ft===1&&Y(I),v&&v(I),ft=0),A=!1),Ce&&!(Ce=!1)&&ye&&ye(I),ze&&(fe(I),ze=!1),xe=0},Ie=function(be,$e,pe){$[pe]+=be,Te[pe]+=$e,I._vx.update(be),I._vy.update($e),c?xe||(xe=requestAnimationFrame(ue)):ue()},Ve=function(be,$e){de&&!Ae&&(I.axis=Ae=Math.abs(be)>Math.abs($e)?"x":"y",Ce=!0),Ae!=="y"&&($[2]+=be,I._vx.update(be,!0)),Ae!=="x"&&(Te[2]+=$e,I._vy.update($e,!0)),c?xe||(xe=requestAnimationFrame(ue)):ue()},ce=function(be){if(!he(be,1)){be=da(be,u);var $e=be.clientX,pe=be.clientY,Ne=$e-I.x,Re=pe-I.y,ke=I.isDragging;I.x=$e,I.y=pe,(ke||(Ne||Re)&&(Math.abs(I.startX-$e)>=s||Math.abs(I.startY-pe)>=s))&&(ft||(ft=ke?2:1),ke||(I.isDragging=!0),Ve(Ne,Re))}},Be=I.onPress=function(Se){he(Se,1)||Se&&Se.button||(I.axis=Ae=null,Fe.pause(),I.isPressed=!0,Se=da(Se),nt=_e=0,I.startX=I.x=Se.clientX,I.startY=I.y=Se.clientY,I._vx.reset(),I._vy.reset(),Sn(N?o:J,di[1],ce,Ge,!0),I.deltaX=I.deltaY=0,x&&x(I))},X=I.onRelease=function(Se){if(!he(Se,1)){mn(N?o:J,di[1],ce,!0);var be=!isNaN(I.y-I.startY),$e=I.isDragging,pe=$e&&(Math.abs(I.x-I.startX)>3||Math.abs(I.y-I.startY)>3),Ne=da(Se);!pe&&be&&(I._vx.reset(),I._vy.reset(),u&&q&&rn.delayedCall(.08,function(){if(Ra()-se>300&&!Se.defaultPrevented){if(Se.target.click)Se.target.click();else if(J.createEvent){var Re=J.createEvent("MouseEvents");Re.initMouseEvent("click",!0,!0,Hn,1,Ne.screenX,Ne.screenY,Ne.clientX,Ne.clientY,!1,!1,!1,!1,0,null),Se.target.dispatchEvent(Re)}}})),I.isDragging=I.isGesturing=I.isPressed=!1,f&&$e&&!N&&Fe.restart(!0),ft&&ue(),p&&$e&&p(I),_&&_(I,pe)}},ie=function(be){return be.touches&&be.touches.length>1&&(I.isGesturing=!0)&&ne(be,I.isDragging)},ae=function(){return(I.isGesturing=!1)||P(I)},Ye=function(be){if(!he(be)){var $e=Ke(),pe=mt();Ie(($e-y)*Ze,(pe-W)*Ze,1),y=$e,W=pe,f&&Fe.restart(!0)}},te=function(be){if(!he(be)){be=da(be,u),fe&&(ze=!0);var $e=(be.deltaMode===1?l:be.deltaMode===2?Hn.innerHeight:1)*S;Ie(be.deltaX*$e,be.deltaY*$e,0),f&&!N&&Fe.restart(!0)}},j=function(be){if(!he(be)){var $e=be.clientX,pe=be.clientY,Ne=$e-I.x,Re=pe-I.y;I.x=$e,I.y=pe,A=!0,f&&Fe.restart(!0),(Ne||Re)&&Ve(Ne,Re)}},We=function(be){I.event=be,Z(I)},De=function(be){I.event=be,B(I)},ht=function(be){return he(be)||da(be,u)&&He(I)};Fe=I._dc=rn.delayedCall(d||.25,re).pause(),I.deltaX=I.deltaY=0,I._vx=cu(0,50,!0),I._vy=cu(0,50,!0),I.scrollX=Ke,I.scrollY=mt,I.isDragging=I.isGesturing=I.isPressed=!1,Jp(this),I.enable=function(Se){return I.isEnabled||(Sn(Q?J:o,"scroll",lu),a.indexOf("scroll")>=0&&Sn(Q?J:o,"scroll",Ye,Ge,K),a.indexOf("wheel")>=0&&Sn(o,"wheel",te,Ge,K),(a.indexOf("touch")>=0&&Kp||a.indexOf("pointer")>=0)&&(Sn(o,di[0],Be,Ge,K),Sn(J,di[2],X),Sn(J,di[3],X),q&&Sn(o,"click",Ee,!0,!0),He&&Sn(o,"click",ht),ne&&Sn(J,"gesturestart",ie),P&&Sn(J,"gestureend",ae),Z&&Sn(o,Dr+"enter",We),B&&Sn(o,Dr+"leave",De),H&&Sn(o,Dr+"move",j)),I.isEnabled=!0,I.isDragging=I.isGesturing=I.isPressed=A=ft=!1,I._vx.reset(),I._vy.reset(),y=Ke(),W=mt(),Se&&Se.type&&Be(Se),Le&&Le(I)),I},I.disable=function(){I.isEnabled&&(Ls.filter(function(Se){return Se!==I&&Ia(Se.target)}).length||mn(Q?J:o,"scroll",lu),I.isPressed&&(I._vx.reset(),I._vy.reset(),mn(N?o:J,di[1],ce,!0)),mn(Q?J:o,"scroll",Ye,K),mn(o,"wheel",te,K),mn(o,di[0],Be,K),mn(J,di[2],X),mn(J,di[3],X),mn(o,"click",Ee,!0),mn(o,"click",ht),mn(J,"gesturestart",ie),mn(J,"gestureend",ae),mn(o,Dr+"enter",We),mn(o,Dr+"leave",De),mn(o,Dr+"move",j),I.isEnabled=I.isPressed=I.isDragging=!1,tt&&tt(I))},I.kill=I.revert=function(){I.disable();var Se=Ls.indexOf(I);Se>=0&&Ls.splice(Se,1),zi===I&&(zi=0)},Ls.push(I),N&&Ia(o)&&(zi=I),I.enable(m)},rS(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();Bt.version="3.15.0";Bt.create=function(r){return new Bt(r)};Bt.register=tY;Bt.getAll=function(){return Ls.slice()};Bt.getById=function(r){return Ls.filter(function(e){return e.vars.id===r})[0]};qp()&&rn.registerPlugin(Bt);var Me,Xs,it,Tt,Bn,St,Rf,Rl,eo,wa,xa,Mo,ln,Bl,uu,gn,Mh,vh,Cs,nY,ac,iY,Tn,fu,rY,sY,lr,hu,If,Zs,wf,La,du,oc,vo=1,un=Date.now,lc=un(),li=0,Ea=0,xh=function(e,t,n){var i=Fn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Eh=function(e,t){return t&&(!Fn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},oS=function r(){return Ea&&requestAnimationFrame(r)},Vh=function(){return Bl=1},yh=function(){return Bl=0},gi=function(e){return e},Va=function(e){return Math.round(e*1e5)/1e5||0},aY=function(){return typeof window<"u"},oY=function(){return Me||aY()&&(Me=window.gsap)&&Me.registerPlugin&&Me},rs=function(e){return!!~Rf.indexOf(e)},lY=function(e){return(e==="Height"?wf:it["inner"+e])||Bn["client"+e]||St["client"+e]},cY=function(e){return _r(e,"getBoundingClientRect")||(rs(e)?function(){return _l.width=it.innerWidth,_l.height=wf,_l}:function(){return Gi(e)})},lS=function(e,t,n){var i=n.d,s=n.d2,a=n.a;return(a=_r(e,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(t?lY(s):e["client"+s])||0}},cS=function(e,t){return!t||~bi.indexOf(e)?cY(e):function(){return _l}},Ei=function(e,t){var n=t.s,i=t.d2,s=t.d,a=t.a;return Math.max(0,(n="scroll"+i)&&(a=_r(e,n))?a()-cY(e)()[s]:rs(e)?(Bn[n]||St[n])-lY(i):e[n]-e["offset"+i])},xo=function(e,t){for(var n=0;n<Cs.length;n+=3)(!t||~t.indexOf(Cs[n+1]))&&e(Cs[n],Cs[n+1],Cs[n+2])},Fn=function(e){return typeof e=="string"},hn=function(e){return typeof e=="function"},ya=function(e){return typeof e=="number"},Nr=function(e){return typeof e=="object"},pa=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},ps=function(e,t,n){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);i&&i.totalTime&&(e.callbackAnimation=i)}},Ys=Math.abs,uY="left",fY="top",Lf="right",Df="bottom",jr="width",es="height",Da="Right",Na="Left",Oa="Top",Fa="Bottom",Ht="padding",ii="margin",ta="Width",Nf="Height",Kt="px",ri=function(e){return it.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},uS=function(e){var t=ri(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Ah=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Gi=function(e,t){var n=t&&ri(e)[uu]!=="matrix(1, 0, 0, 1, 0, 0)"&&Me.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},Il=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},hY=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},fS=function(e){return function(t){return Me.utils.snap(hY(e),t)}},Of=function(e){var t=Me.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return t(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=t(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:t(s<0?i-e:i+e)}},hS=function(e){return function(t,n){return Of(hY(e))(t,n.direction)}},Eo=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},tn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},en=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Vo=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},bh={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},yo={toggleActions:"play",anticipatePin:0},wl={top:0,left:0,center:.5,bottom:1,right:1},pl=function(e,t){if(Fn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in wl?wl[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Ao=function(e,t,n,i,s,a,o,l){var c=s.startColor,u=s.endColor,f=s.fontSize,d=s.indent,h=s.fontWeight,S=Tt.createElement("div"),m=rs(n)||_r(n,"pinType")==="fixed",Y=e.indexOf("scroller")!==-1,p=m?St:n.tagName==="IFRAME"?n.contentDocument.body:n,v=e.indexOf("start")!==-1,x=v?c:u,_="border-color:"+x+";font-size:"+f+";color:"+x+";font-weight:"+h+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return _+="position:"+((Y||l)&&m?"fixed;":"absolute;"),(Y||l||!m)&&(_+=(i===Qt?Lf:Df)+":"+(a+parseFloat(d))+"px;"),o&&(_+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),S._isStart=v,S.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),S.style.cssText=_,S.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(S,p.children[0]):p.appendChild(S),S._offset=S["offset"+i.op.d2],Yl(S,0,i,v),S},Yl=function(e,t,n,i){var s={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+a+ta]=1,s["border"+o+ta]=0,s[n.p]=t+"px",Me.set(e,s)},et=[],pu={},to,Ph=function(){return un()-li>34&&(to||(to=requestAnimationFrame($i)))},ms=function(){(!Tn||!Tn.isPressed||Tn.startX>St.clientWidth)&&(rt.cache++,Tn?to||(to=requestAnimationFrame($i)):$i(),li||as("scrollStart"),li=un())},cc=function(){sY=it.innerWidth,rY=it.innerHeight},Aa=function(e){rt.cache++,(e===!0||!ln&&!iY&&!Tt.fullscreenElement&&!Tt.webkitFullscreenElement&&(!fu||sY!==it.innerWidth||Math.abs(it.innerHeight-rY)>it.innerHeight*.25))&&Rl.restart(!0)},ss={},dS=[],dY=function r(){return en(at,"scrollEnd",r)||Hr(!0)},as=function(e){return ss[e]&&ss[e].map(function(t){return t()})||dS},On=[],pY=function(e){for(var t=0;t<On.length;t+=5)(!e||On[t+4]&&On[t+4].query===e)&&(On[t].style.cssText=On[t+1],On[t].getBBox&&On[t].setAttribute("transform",On[t+2]||""),On[t+3].uncache=1)},YY=function(){return rt.forEach(function(e){return hn(e)&&++e.cacheID&&(e.rec=e())})},Ff=function(e,t){var n;for(gn=0;gn<et.length;gn++)n=et[gn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));La=!0,t&&pY(t),t||as("revert")},mY=function(e,t){rt.cache++,(t||!Wn)&&rt.forEach(function(n){return hn(n)&&n.cacheID++&&(n.rec=0)}),Fn(e)&&(it.history.scrollRestoration=If=e)},Wn,ts=0,Xh,pS=function(){if(Xh!==ts){var e=Xh=ts;requestAnimationFrame(function(){return e===ts&&Hr(!0)})}},SY=function(){St.appendChild(Zs),wf=!Tn&&Zs.offsetHeight||it.innerHeight,St.removeChild(Zs)},Ch=function(e){return eo(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Hr=function(e,t){if(Bn=Tt.documentElement,St=Tt.body,Rf=[it,Tt,Bn,St],li&&!e&&!La){tn(at,"scrollEnd",dY);return}SY(),Wn=at.isRefreshing=!0,La||YY();var n=as("refreshInit");nY&&at.sort(),t||Ff(),rt.forEach(function(i){hn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),et.slice(0).forEach(function(i){return i.refresh()}),La=!1,et.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-a),i.refresh()}}),du=1,Ch(!0),et.forEach(function(i){var s=Ei(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>s,o=i._startClamp&&i.start>=s;(a||o)&&i.setPositions(o?s-1:i.start,a?Math.max(o?s:i.start+1,s):i.end,!0)}),Ch(!1),du=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),rt.forEach(function(i){hn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),mY(If,1),Rl.pause(),ts++,Wn=2,$i(2),et.forEach(function(i){return hn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Wn=at.isRefreshing=!1,as("refresh")},Yu=0,ml=1,Ga,$i=function(e){if(e===2||!Wn&&!La){at.isUpdating=!0,Ga&&Ga.update(0);var t=et.length,n=un(),i=n-lc>=50,s=t&&et[0].scroll();if(ml=Yu>s?-1:1,Wn||(Yu=s),i&&(li&&!Bl&&n-li>200&&(li=0,as("scrollEnd")),xa=lc,lc=n),ml<0){for(gn=t;gn-- >0;)et[gn]&&et[gn].update(0,i);ml=1}else for(gn=0;gn<t;gn++)et[gn]&&et[gn].update(0,i);at.isUpdating=!1}to=0},mu=[uY,fY,Df,Lf,ii+Fa,ii+Da,ii+Oa,ii+Na,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Sl=mu.concat([jr,es,"boxSizing","max"+ta,"max"+Nf,"position",ii,Ht,Ht+Oa,Ht+Da,Ht+Fa,Ht+Na]),YS=function(e,t,n){Hs(n);var i=e._gsap;if(i.spacerIsNative)Hs(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},uc=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=mu.length,a=t.style,o=e.style,l;s--;)l=mu[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[Df]=o[Lf]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[jr]=Il(e,Un)+Kt,a[es]=Il(e,Qt)+Kt,a[Ht]=o[ii]=o[fY]=o[uY]="0",Hs(i),o[jr]=o["max"+ta]=n[jr],o[es]=o["max"+Nf]=n[es],o[Ht]=n[Ht],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},mS=/([A-Z])/g,Hs=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,a;for((e.t._gsap||Me.core.getCache(e.t)).uncache=1;i<n;i+=2)a=e[i+1],s=e[i],a?t[s]=a:t[s]&&t.removeProperty(s.replace(mS,"-$1").toLowerCase())}},bo=function(e){for(var t=Sl.length,n=e.style,i=[],s=0;s<t;s++)i.push(Sl[s],n[Sl[s]]);return i.t=e,i},SS=function(e,t,n){for(var i=[],s=e.length,a=n?8:0,o;a<s;a+=2)o=e[a],i.push(o,o in t?t[o]:e[a+1]);return i.t=e.t,i},_l={left:0,top:0},Rh=function(e,t,n,i,s,a,o,l,c,u,f,d,h,S){hn(e)&&(e=e(l)),Fn(e)&&e.substr(0,3)==="max"&&(e=d+(e.charAt(4)==="="?pl("0"+e.substr(3),n):0));var m=h?h.time():0,Y,p,v;if(h&&h.seek(0),isNaN(e)||(e=+e),ya(e))h&&(e=Me.utils.mapRange(h.scrollTrigger.start,h.scrollTrigger.end,0,d,e)),o&&Yl(o,n,i,!0);else{hn(t)&&(t=t(l));var x=(e||"0").split(" "),_,E,V,M;v=En(t,l)||St,_=Gi(v)||{},(!_||!_.left&&!_.top)&&ri(v).display==="none"&&(M=v.style.display,v.style.display="block",_=Gi(v),M?v.style.display=M:v.style.removeProperty("display")),E=pl(x[0],_[i.d]),V=pl(x[1]||"0",n),e=_[i.p]-c[i.p]-u+E+s-V,o&&Yl(o,V,i,n-V<20||o._isStart&&V>20),n-=n-V}if(S&&(l[S]=e||-.001,e<0&&(e=0)),a){var b=e+n,g=a._isStart;Y="scroll"+i.d2,Yl(a,b,i,g&&b>20||!g&&(f?Math.max(St[Y],Bn[Y]):a.parentNode[Y])<=b+1),f&&(c=Gi(o),f&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+Kt))}return h&&v&&(Y=Gi(v),h.seek(d),p=Gi(v),h._caScrollDist=Y[i.p]-p[i.p],e=e/h._caScrollDist*d),h&&h.seek(m),h?e:Math.round(e)},_S=/(webkit|moz|length|cssText|inset)/i,Ih=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,a,o;if(t===St){e._stOrig=s.cssText,o=ri(e);for(a in o)!+a&&!_S.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=e._stOrig;Me.core.getCache(e).uncache=1,t.appendChild(e)}},_Y=function(e,t,n){var i=t,s=i;return function(a){var o=Math.round(e());return o!==i&&o!==s&&Math.abs(o-i)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=i,i=Math.round(a),i}},Po=function(e,t,n){var i={};i[t.p]="+="+n,Me.set(e,i)},wh=function(e,t){var n=vr(e,t),i="_scroll"+t.p2,s=function a(o,l,c,u,f){var d=a.tween,h=l.onComplete,S={};c=c||n();var m=_Y(n,c,function(){d.kill(),a.tween=0});return f=u&&f||0,u=u||o-c,d&&d.kill(),l[i]=o,l.inherit=!1,l.modifiers=S,S[i]=function(){return m(c+u*d.ratio+f*d.ratio*d.ratio)},l.onUpdate=function(){rt.cache++,a.tween&&$i()},l.onComplete=function(){a.tween=0,h&&h.call(d)},d=a.tween=Me.to(e,l),d};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},tn(e,"wheel",n.wheelHandler),at.isTouch&&tn(e,"touchmove",n.wheelHandler),s},at=(function(){function r(t,n){Xs||r.register(Me)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),hu(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ea){this.update=this.refresh=this.kill=gi;return}n=Ah(Fn(n)||ya(n)||n.nodeType?{trigger:n}:n,yo);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,f=s.scrub,d=s.trigger,h=s.pin,S=s.pinSpacing,m=s.invalidateOnRefresh,Y=s.anticipatePin,p=s.onScrubComplete,v=s.onSnapComplete,x=s.once,_=s.snap,E=s.pinReparent,V=s.pinSpacer,M=s.containerAnimation,b=s.fastScrollEnd,g=s.preventOverlaps,T=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Un:Qt,C=!f&&f!==0,R=En(n.scroller||it),O=Me.core.getCache(R),Z=rs(R),B=("pinType"in n?n.pinType:_r(R,"pinType")||Z&&"fixed")==="fixed",H=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],G=C&&n.toggleActions.split(" "),N="markers"in n?n.markers:yo.markers,ne=Z?0:parseFloat(ri(R)["border"+T.p2+ta])||0,P=this,fe=n.onRefreshInit&&function(){return n.onRefreshInit(P)},Le=lS(R,Z,T),tt=cS(R,Z),He=0,Ze=0,K=0,q=vr(R,T),de,ye,xe,Fe,ft,A,ze,Ce,Ae,I,nt,_e,Ge,Ke,mt,y,W,D,Q,J,$,Te,se,Ee,he,re,ue,Ie,Ve,ce,Be,X,ie,ae,Ye,te,j,We,De;if(P._startClamp=P._endClamp=!1,P._dir=T,Y*=45,P.scroller=R,P.scroll=M?M.time.bind(M):q,Fe=q(),P.vars=n,i=i||n.animation,"refreshPriority"in n&&(nY=1,n.refreshPriority===-9999&&(Ga=P)),O.tweenScroll=O.tweenScroll||{top:wh(R,Qt),left:wh(R,Un)},P.tweenTo=de=O.tweenScroll[T.p],P.scrubDuration=function(pe){ie=ya(pe)&&pe,ie?X?X.duration(pe):X=Me.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ie,paused:!0,onComplete:function(){return p&&p(P)}}):(X&&X.progress(1).kill(),X=0)},i&&(i.vars.lazy=!1,i._initted&&!P.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),P.animation=i.pause(),i.scrollTrigger=P,P.scrubDuration(f),ce=0,l||(l=i.vars.id)),_&&((!Nr(_)||_.push)&&(_={snapTo:_}),"scrollBehavior"in St.style&&Me.set(Z?[St,Bn]:R,{scrollBehavior:"auto"}),rt.forEach(function(pe){return hn(pe)&&pe.target===(Z?Tt.scrollingElement||Bn:R)&&(pe.smooth=!1)}),xe=hn(_.snapTo)?_.snapTo:_.snapTo==="labels"?fS(i):_.snapTo==="labelsDirectional"?hS(i):_.directional!==!1?function(pe,Ne){return Of(_.snapTo)(pe,un()-Ze<500?0:Ne.direction)}:Me.utils.snap(_.snapTo),ae=_.duration||{min:.1,max:2},ae=Nr(ae)?wa(ae.min,ae.max):wa(ae,ae),Ye=Me.delayedCall(_.delay||ie/2||.1,function(){var pe=q(),Ne=un()-Ze<500,Re=de.tween;if((Ne||Math.abs(P.getVelocity())<10)&&!Re&&!Bl&&He!==pe){var ke=(pe-A)/Ke,Nt=i&&!C?i.totalProgress():ke,qe=Ne?0:(Nt-Be)/(un()-xa)*1e3||0,bt=Me.utils.clamp(-ke,1-ke,Ys(qe/2)*qe/.185),Ot=ke+(_.inertia===!1?0:bt),Vt,Mt,_t=_,In=_t.onStart,yt=_t.onInterrupt,pn=_t.onComplete;if(Vt=xe(Ot,P),ya(Vt)||(Vt=Ot),Mt=Math.max(0,Math.round(A+Vt*Ke)),pe<=ze&&pe>=A&&Mt!==pe){if(Re&&!Re._initted&&Re.data<=Ys(Mt-pe))return;_.inertia===!1&&(bt=Vt-ke),de(Mt,{duration:ae(Ys(Math.max(Ys(Ot-Nt),Ys(Vt-Nt))*.185/qe/.05||0)),ease:_.ease||"power3",data:Ys(Mt-pe),onInterrupt:function(){return Ye.restart(!0)&&yt&&ps(P,yt)},onComplete:function(){P.update(),He=q(),i&&!C&&(X?X.resetTo("totalProgress",Vt,i._tTime/i._tDur):i.progress(Vt)),ce=Be=i&&!C?i.totalProgress():P.progress,v&&v(P),pn&&ps(P,pn)}},pe,bt*Ke,Mt-pe-bt*Ke),In&&ps(P,In,de.tween)}}else P.isActive&&He!==pe&&Ye.restart(!0)}).pause()),l&&(pu[l]=P),d=P.trigger=En(d||h!==!0&&h),De=d&&d._gsap&&d._gsap.stRevert,De&&(De=De(P)),h=h===!0?d:En(h),Fn(o)&&(o={targets:d,className:o}),h&&(S===!1||S===ii||(S=!S&&h.parentNode&&h.parentNode.style&&ri(h.parentNode).display==="flex"?!1:Ht),P.pin=h,ye=Me.core.getCache(h),ye.spacer?mt=ye.pinState:(V&&(V=En(V),V&&!V.nodeType&&(V=V.current||V.nativeElement),ye.spacerIsNative=!!V,V&&(ye.spacerState=bo(V))),ye.spacer=D=V||Tt.createElement("div"),D.classList.add("pin-spacer"),l&&D.classList.add("pin-spacer-"+l),ye.pinState=mt=bo(h)),n.force3D!==!1&&Me.set(h,{force3D:!0}),P.spacer=D=ye.spacer,Ve=ri(h),Ee=Ve[S+T.os2],J=Me.getProperty(h),$=Me.quickSetter(h,T.a,Kt),uc(h,D,Ve),W=bo(h)),N){_e=Nr(N)?Ah(N,bh):bh,I=Ao("scroller-start",l,R,T,_e,0),nt=Ao("scroller-end",l,R,T,_e,0,I),Q=I["offset"+T.op.d2];var ht=En(_r(R,"content")||R);Ce=this.markerStart=Ao("start",l,ht,T,_e,Q,0,M),Ae=this.markerEnd=Ao("end",l,ht,T,_e,Q,0,M),M&&(We=Me.quickSetter([Ce,Ae],T.a,Kt)),!B&&!(bi.length&&_r(R,"fixedMarkers")===!0)&&(uS(Z?St:R),Me.set([I,nt],{force3D:!0}),re=Me.quickSetter(I,T.a,Kt),Ie=Me.quickSetter(nt,T.a,Kt))}if(M){var Se=M.vars.onUpdate,be=M.vars.onUpdateParams;M.eventCallback("onUpdate",function(){P.update(0,0,1),Se&&Se.apply(M,be||[])})}if(P.previous=function(){return et[et.indexOf(P)-1]},P.next=function(){return et[et.indexOf(P)+1]},P.revert=function(pe,Ne){if(!Ne)return P.kill(!0);var Re=pe!==!1||!P.enabled,ke=ln;Re!==P.isReverted&&(Re&&(te=Math.max(q(),P.scroll.rec||0),K=P.progress,j=i&&i.progress()),Ce&&[Ce,Ae,I,nt].forEach(function(Nt){return Nt.style.display=Re?"none":"block"}),Re&&(ln=P,P.update(Re)),h&&(!E||!P.isActive)&&(Re?YS(h,D,mt):uc(h,D,ri(h),he)),Re||P.update(Re),ln=ke,P.isReverted=Re)},P.refresh=function(pe,Ne,Re,ke){if(!((ln||!P.enabled)&&!Ne)){if(h&&pe&&li){tn(r,"scrollEnd",dY);return}!Wn&&fe&&fe(P),ln=P,de.tween&&!Re&&(de.tween.kill(),de.tween=0),X&&X.pause(),m&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(st){return st.vars.immediateRender&&st.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var Nt=Le(),qe=tt(),bt=M?M.duration():Ei(R,T),Ot=Ke<=.01||!Ke,Vt=0,Mt=ke||0,_t=Nr(Re)?Re.end:n.end,In=n.endTrigger||d,yt=Nr(Re)?Re.start:n.start||(n.start===0||!d?0:h?"0 0":"0 100%"),pn=P.pinnedContainer=n.pinnedContainer&&En(n.pinnedContainer,P),Jn=d&&Math.max(0,et.indexOf(P))||0,$t=Jn,U,w,F,k,L,ee,le,Ue,ge,we,Xe,Pe,Qe;for(N&&Nr(Re)&&(Pe=Me.getProperty(I,T.p),Qe=Me.getProperty(nt,T.p));$t-- >0;)ee=et[$t],ee.end||ee.refresh(0,1)||(ln=P),le=ee.pin,le&&(le===d||le===h||le===pn)&&!ee.isReverted&&(we||(we=[]),we.unshift(ee),ee.revert(!0,!0)),ee!==et[$t]&&(Jn--,$t--);for(hn(yt)&&(yt=yt(P)),yt=xh(yt,"start",P),A=Rh(yt,d,Nt,T,q(),Ce,I,P,qe,ne,B,bt,M,P._startClamp&&"_startClamp")||(h?-.001:0),hn(_t)&&(_t=_t(P)),Fn(_t)&&!_t.indexOf("+=")&&(~_t.indexOf(" ")?_t=(Fn(yt)?yt.split(" ")[0]:"")+_t:(Vt=pl(_t.substr(2),Nt),_t=Fn(yt)?yt:(M?Me.utils.mapRange(0,M.duration(),M.scrollTrigger.start,M.scrollTrigger.end,A):A)+Vt,In=d)),_t=xh(_t,"end",P),ze=Math.max(A,Rh(_t||(In?"100% 0":bt),In,Nt,T,q()+Vt,Ae,nt,P,qe,ne,B,bt,M,P._endClamp&&"_endClamp"))||-.001,Vt=0,$t=Jn;$t--;)ee=et[$t]||{},le=ee.pin,le&&ee.start-ee._pinPush<=A&&!M&&ee.end>0&&(U=ee.end-(P._startClamp?Math.max(0,ee.start):ee.start),(le===d&&ee.start-ee._pinPush<A||le===pn)&&isNaN(yt)&&(Vt+=U*(1-ee.progress)),le===h&&(Mt+=U));if(A+=Vt,ze+=Vt,P._startClamp&&(P._startClamp+=Vt),P._endClamp&&!Wn&&(P._endClamp=ze||-.001,ze=Math.min(ze,Ei(R,T))),Ke=ze-A||(A-=.01)&&.001,Ot&&(K=Me.utils.clamp(0,1,Me.utils.normalize(A,ze,te))),P._pinPush=Mt,Ce&&Vt&&(U={},U[T.a]="+="+Vt,pn&&(U[T.p]="-="+q()),Me.set([Ce,Ae],U)),h&&!(du&&P.end>=Ei(R,T)))U=ri(h),k=T===Qt,F=q(),Te=parseFloat(J(T.a))+Mt,!bt&&ze>1&&(Xe=(Z?Tt.scrollingElement||Bn:R).style,Xe={style:Xe,value:Xe["overflow"+T.a.toUpperCase()]},Z&&ri(St)["overflow"+T.a.toUpperCase()]!=="scroll"&&(Xe.style["overflow"+T.a.toUpperCase()]="scroll")),uc(h,D,U),W=bo(h),w=Gi(h,!0),Ue=B&&vr(R,k?Un:Qt)(),S?(he=[S+T.os2,Ke+Mt+Kt],he.t=D,$t=S===Ht?Il(h,T)+Ke+Mt:0,$t&&(he.push(T.d,$t+Kt),D.style.flexBasis!=="auto"&&(D.style.flexBasis=$t+Kt)),Hs(he),pn&&et.forEach(function(st){st.pin===pn&&st.vars.pinSpacing!==!1&&(st._subPinOffset=!0)}),B&&q(te)):($t=Il(h,T),$t&&D.style.flexBasis!=="auto"&&(D.style.flexBasis=$t+Kt)),B&&(L={top:w.top+(k?F-A:Ue)+Kt,left:w.left+(k?Ue:F-A)+Kt,boxSizing:"border-box",position:"fixed"},L[jr]=L["max"+ta]=Math.ceil(w.width)+Kt,L[es]=L["max"+Nf]=Math.ceil(w.height)+Kt,L[ii]=L[ii+Oa]=L[ii+Da]=L[ii+Fa]=L[ii+Na]="0",L[Ht]=U[Ht],L[Ht+Oa]=U[Ht+Oa],L[Ht+Da]=U[Ht+Da],L[Ht+Fa]=U[Ht+Fa],L[Ht+Na]=U[Ht+Na],y=SS(mt,L,E),Wn&&q(0)),i?(ge=i._initted,ac(1),i.render(i.duration(),!0,!0),se=J(T.a)-Te+Ke+Mt,ue=Math.abs(Ke-se)>1,B&&ue&&y.splice(y.length-2,2),i.render(0,!0,!0),ge||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),ac(0)):se=Ke,Xe&&(Xe.value?Xe.style["overflow"+T.a.toUpperCase()]=Xe.value:Xe.style.removeProperty("overflow-"+T.a));else if(d&&q()&&!M)for(w=d.parentNode;w&&w!==St;)w._pinOffset&&(A-=w._pinOffset,ze-=w._pinOffset),w=w.parentNode;we&&we.forEach(function(st){return st.revert(!1,!0)}),P.start=A,P.end=ze,Fe=ft=Wn?te:q(),!M&&!Wn&&(Fe<te&&q(te),P.scroll.rec=0),P.revert(!1,!0),Ze=un(),Ye&&(He=-1,Ye.restart(!0)),ln=0,i&&C&&(i._initted||j)&&i.progress()!==j&&i.progress(j||0,!0).render(i.time(),!0,!0),(Ot||K!==P.progress||M||m||i&&!i._initted)&&(i&&!C&&(i._initted||K||i.vars.immediateRender!==!1)&&i.totalProgress(M&&A<-.001&&!K?Me.utils.normalize(A,ze,0):K,!0),P.progress=Ot||(Fe-A)/Ke===K?0:K),h&&S&&(D._pinOffset=Math.round(P.progress*se)),X&&X.invalidate(),isNaN(Pe)||(Pe-=Me.getProperty(I,T.p),Qe-=Me.getProperty(nt,T.p),Po(I,T,Pe),Po(Ce,T,Pe-(ke||0)),Po(nt,T,Qe),Po(Ae,T,Qe-(ke||0))),Ot&&!Wn&&P.update(),u&&!Wn&&!Ge&&(Ge=!0,u(P),Ge=!1)}},P.getVelocity=function(){return(q()-ft)/(un()-xa)*1e3||0},P.endAnimation=function(){pa(P.callbackAnimation),i&&(X?X.progress(1):i.paused()?C||pa(i,P.direction<0,1):pa(i,i.reversed()))},P.labelToScroll=function(pe){return i&&i.labels&&(A||P.refresh()||A)+i.labels[pe]/i.duration()*Ke||0},P.getTrailing=function(pe){var Ne=et.indexOf(P),Re=P.direction>0?et.slice(0,Ne).reverse():et.slice(Ne+1);return(Fn(pe)?Re.filter(function(ke){return ke.vars.preventOverlaps===pe}):Re).filter(function(ke){return P.direction>0?ke.end<=A:ke.start>=ze})},P.update=function(pe,Ne,Re){if(!(M&&!Re&&!pe)){var ke=Wn===!0?te:P.scroll(),Nt=pe?0:(ke-A)/Ke,qe=Nt<0?0:Nt>1?1:Nt||0,bt=P.progress,Ot,Vt,Mt,_t,In,yt,pn,Jn;if(Ne&&(ft=Fe,Fe=M?q():ke,_&&(Be=ce,ce=i&&!C?i.totalProgress():qe)),Y&&h&&!ln&&!vo&&li&&(!qe&&A<ke+(ke-ft)/(un()-xa)*Y?qe=1e-4:qe===1&&ze>ke+(ke-ft)/(un()-xa)*Y&&(qe=.9999)),qe!==bt&&P.enabled){if(Ot=P.isActive=!!qe&&qe<1,Vt=!!bt&&bt<1,yt=Ot!==Vt,In=yt||!!qe!=!!bt,P.direction=qe>bt?1:-1,P.progress=qe,In&&!ln&&(Mt=qe&&!bt?0:qe===1?1:bt===1?2:3,C&&(_t=!yt&&G[Mt+1]!=="none"&&G[Mt+1]||G[Mt],Jn=i&&(_t==="complete"||_t==="reset"||_t in i))),g&&(yt||Jn)&&(Jn||f||!i)&&(hn(g)?g(P):P.getTrailing(g).forEach(function(F){return F.endAnimation()})),C||(X&&!ln&&!vo?(X._dp._time-X._start!==X._time&&X.render(X._dp._time-X._start),X.resetTo?X.resetTo("totalProgress",qe,i._tTime/i._tDur):(X.vars.totalProgress=qe,X.invalidate().restart())):i&&i.totalProgress(qe,!!(ln&&(Ze||pe)))),h){if(pe&&S&&(D.style[S+T.os2]=Ee),!B)$(Va(Te+se*qe));else if(In){if(pn=!pe&&qe>bt&&ze+1>ke&&ke+1>=Ei(R,T),E)if(!pe&&(Ot||pn)){var $t=Gi(h,!0),U=ke-A;Ih(h,St,$t.top+(T===Qt?U:0)+Kt,$t.left+(T===Qt?0:U)+Kt)}else Ih(h,D);Hs(Ot||pn?y:W),ue&&qe<1&&Ot||$(Te+(qe===1&&!pn?se:0))}}_&&!de.tween&&!ln&&!vo&&Ye.restart(!0),o&&(yt||x&&qe&&(qe<1||!oc))&&eo(o.targets).forEach(function(F){return F.classList[Ot||x?"add":"remove"](o.className)}),a&&!C&&!pe&&a(P),In&&!ln?(C&&(Jn&&(_t==="complete"?i.pause().totalProgress(1):_t==="reset"?i.restart(!0).pause():_t==="restart"?i.restart(!0):i[_t]()),a&&a(P)),(yt||!oc)&&(c&&yt&&ps(P,c),H[Mt]&&ps(P,H[Mt]),x&&(qe===1?P.kill(!1,1):H[Mt]=0),yt||(Mt=qe===1?1:3,H[Mt]&&ps(P,H[Mt]))),b&&!Ot&&Math.abs(P.getVelocity())>(ya(b)?b:2500)&&(pa(P.callbackAnimation),X?X.progress(1):pa(i,_t==="reverse"?1:!qe,1))):C&&a&&!ln&&a(P)}if(Ie){var w=M?ke/M.duration()*(M._caScrollDist||0):ke;re(w+(I._isFlipped?1:0)),Ie(w)}We&&We(-ke/M.duration()*(M._caScrollDist||0))}},P.enable=function(pe,Ne){P.enabled||(P.enabled=!0,tn(R,"resize",Aa),Z||tn(R,"scroll",ms),fe&&tn(r,"refreshInit",fe),pe!==!1&&(P.progress=K=0,Fe=ft=He=q()),Ne!==!1&&P.refresh())},P.getTween=function(pe){return pe&&de?de.tween:X},P.setPositions=function(pe,Ne,Re,ke){if(M){var Nt=M.scrollTrigger,qe=M.duration(),bt=Nt.end-Nt.start;pe=Nt.start+bt*pe/qe,Ne=Nt.start+bt*Ne/qe}P.refresh(!1,!1,{start:Eh(pe,Re&&!!P._startClamp),end:Eh(Ne,Re&&!!P._endClamp)},ke),P.update()},P.adjustPinSpacing=function(pe){if(he&&pe){var Ne=he.indexOf(T.d)+1;he[Ne]=parseFloat(he[Ne])+pe+Kt,he[1]=parseFloat(he[1])+pe+Kt,Hs(he)}},P.disable=function(pe,Ne){if(pe!==!1&&P.revert(!0,!0),P.enabled&&(P.enabled=P.isActive=!1,Ne||X&&X.pause(),te=0,ye&&(ye.uncache=1),fe&&en(r,"refreshInit",fe),Ye&&(Ye.pause(),de.tween&&de.tween.kill()&&(de.tween=0)),!Z)){for(var Re=et.length;Re--;)if(et[Re].scroller===R&&et[Re]!==P)return;en(R,"resize",Aa),Z||en(R,"scroll",ms)}},P.kill=function(pe,Ne){P.disable(pe,Ne),X&&!Ne&&X.kill(),l&&delete pu[l];var Re=et.indexOf(P);Re>=0&&et.splice(Re,1),Re===gn&&ml>0&&gn--,Re=0,et.forEach(function(ke){return ke.scroller===P.scroller&&(Re=1)}),Re||Wn||(P.scroll.rec=0),i&&(i.scrollTrigger=null,pe&&i.revert({kill:!1}),Ne||i.kill()),Ce&&[Ce,Ae,I,nt].forEach(function(ke){return ke.parentNode&&ke.parentNode.removeChild(ke)}),Ga===P&&(Ga=0),h&&(ye&&(ye.uncache=1),Re=0,et.forEach(function(ke){return ke.pin===h&&Re++}),Re||(ye.spacer=0)),n.onKill&&n.onKill(P)},et.push(P),P.enable(!1,!1),De&&De(P),i&&i.add&&!Ke){var $e=P.update;P.update=function(){P.update=$e,rt.cache++,A||ze||P.refresh()},Me.delayedCall(.01,P.update),Ke=.01,A=ze=0}else P.refresh();h&&pS()},r.register=function(n){return Xs||(Me=n||oY(),aY()&&window.document&&r.enable(),Xs=Ea),Xs},r.defaults=function(n){if(n)for(var i in n)yo[i]=n[i];return yo},r.disable=function(n,i){Ea=0,et.forEach(function(a){return a[i?"kill":"disable"](n)}),en(it,"wheel",ms),en(Tt,"scroll",ms),clearInterval(Mo),en(Tt,"touchcancel",gi),en(St,"touchstart",gi),Eo(en,Tt,"pointerdown,touchstart,mousedown",Vh),Eo(en,Tt,"pointerup,touchend,mouseup",yh),Rl.kill(),xo(en);for(var s=0;s<rt.length;s+=3)Vo(en,rt[s],rt[s+1]),Vo(en,rt[s],rt[s+2])},r.enable=function(){if(it=window,Tt=document,Bn=Tt.documentElement,St=Tt.body,Me){if(eo=Me.utils.toArray,wa=Me.utils.clamp,hu=Me.core.context||gi,ac=Me.core.suppressOverwrites||gi,If=it.history.scrollRestoration||"auto",Yu=it.pageYOffset||0,Me.core.globals("ScrollTrigger",r),St){Ea=1,Zs=document.createElement("div"),Zs.style.height="100vh",Zs.style.position="absolute",SY(),oS(),Bt.register(Me),r.isTouch=Bt.isTouch,lr=Bt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),fu=Bt.isTouch===1,tn(it,"wheel",ms),Rf=[it,Tt,Bn,St],Me.matchMedia?(r.matchMedia=function(u){var f=Me.matchMedia(),d;for(d in u)f.add(d,u[d]);return f},Me.addEventListener("matchMediaInit",function(){YY(),Ff()}),Me.addEventListener("matchMediaRevert",function(){return pY()}),Me.addEventListener("matchMedia",function(){Hr(0,1),as("matchMedia")}),Me.matchMedia().add("(orientation: portrait)",function(){return cc(),cc})):console.warn("Requires GSAP 3.11.0 or later"),cc(),tn(Tt,"scroll",ms);var n=St.hasAttribute("style"),i=St.style,s=i.borderTopStyle,a=Me.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=Gi(St),Qt.m=Math.round(o.top+Qt.sc())||0,Un.m=Math.round(o.left+Un.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(St.setAttribute("style",""),St.removeAttribute("style")),Mo=setInterval(Ph,250),Me.delayedCall(.5,function(){return vo=0}),tn(Tt,"touchcancel",gi),tn(St,"touchstart",gi),Eo(tn,Tt,"pointerdown,touchstart,mousedown",Vh),Eo(tn,Tt,"pointerup,touchend,mouseup",yh),uu=Me.utils.checkPrefix("transform"),Sl.push(uu),Xs=un(),Rl=Me.delayedCall(.2,Hr).pause(),Cs=[Tt,"visibilitychange",function(){var u=it.innerWidth,f=it.innerHeight;Tt.hidden?(Mh=u,vh=f):(Mh!==u||vh!==f)&&Aa()},Tt,"DOMContentLoaded",Hr,it,"load",Hr,it,"resize",Aa],xo(tn),et.forEach(function(u){return u.enable(0,1)}),l=0;l<rt.length;l+=3)Vo(en,rt[l],rt[l+1]),Vo(en,rt[l],rt[l+2])}else if(Tt){var c=function u(){r.enable(),Tt.removeEventListener("DOMContentLoaded",u)};Tt.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(oc=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Mo)||(Mo=i)&&setInterval(Ph,i),"ignoreMobileResize"in n&&(fu=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(xo(en)||xo(tn,n.autoRefreshEvents||"none"),iY=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=En(n),a=rt.indexOf(s),o=rs(s);~a&&rt.splice(a,o?6:2),i&&(o?bi.unshift(it,i,St,i,Bn,i):bi.unshift(s,i))},r.clearMatchMedia=function(n){et.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=(Fn(n)?En(n):n).getBoundingClientRect(),o=a[s?jr:es]*i||0;return s?a.right-o>0&&a.left+o<it.innerWidth:a.bottom-o>0&&a.top+o<it.innerHeight},r.positionInViewport=function(n,i,s){Fn(n)&&(n=En(n));var a=n.getBoundingClientRect(),o=a[s?jr:es],l=i==null?o/2:i in wl?wl[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+l)/it.innerWidth:(a.top+l)/it.innerHeight},r.killAll=function(n){if(et.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=ss.killAll||[];ss={},i.forEach(function(s){return s()})}},r})();at.version="3.15.0";at.saveStyles=function(r){return r?eo(r).forEach(function(e){if(e&&e.style){var t=On.indexOf(e);t>=0&&On.splice(t,5),On.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Me.core.getCache(e),hu())}}):On};at.revert=function(r,e){return Ff(!r,e)};at.create=function(r,e){return new at(r,e)};at.refresh=function(r){return r?Aa(!0):(Xs||at.register())&&Hr(!0)};at.update=function(r){return++rt.cache&&$i(r===!0?2:0)};at.clearScrollMemory=mY;at.maxScroll=function(r,e){return Ei(r,e?Un:Qt)};at.getScrollFunc=function(r,e){return vr(En(r),e?Un:Qt)};at.getById=function(r){return pu[r]};at.getAll=function(){return et.filter(function(r){return r.vars.id!=="ScrollSmoother"})};at.isScrolling=function(){return!!li};at.snapDirectional=Of;at.addEventListener=function(r,e){var t=ss[r]||(ss[r]=[]);~t.indexOf(e)||t.push(e)};at.removeEventListener=function(r,e){var t=ss[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};at.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,a=function(c,u){var f=[],d=[],h=Me.delayedCall(i,function(){u(f,d),f=[],d=[]}).pause();return function(S){f.length||h.restart(!0),f.push(S.trigger),d.push(S),s<=f.length&&h.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&hn(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return hn(s)&&(s=s(),tn(at,"refresh",function(){return s=e.batchMax()})),eo(r).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,t.push(at.create(c))}),t};var Lh=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},fc=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Bt.isTouch?" pinch-zoom":""):"none",e===Bn&&r(St,t)},Xo={auto:1,scroll:1},TS=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,a=s._gsap||Me.core.getCache(s),o=un(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==St&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Xo[(l=ri(s)).overflowY]||Xo[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!rs(s)&&(Xo[(l=ri(s)).overflowY]||Xo[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},TY=function(e,t,n,i){return Bt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&TS,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&tn(Tt,Bt.eventTypes[0],Nh,!1,!0)},onDisable:function(){return en(Tt,Bt.eventTypes[0],Nh,!0)}})},gS=/(input|label|select|textarea)/i,Dh,Nh=function(e){var t=gS.test(e.target.tagName);(t||Dh)&&(e._gsapAllow=!0,Dh=t)},WS=function(e){Nr(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,a=t.onRelease,o,l,c=En(e.target)||Bn,u=Me.core.globals().ScrollSmoother,f=u&&u.get(),d=lr&&(e.content&&En(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),h=vr(c,Qt),S=vr(c,Un),m=1,Y=(Bt.isTouch&&it.visualViewport?it.visualViewport.scale*it.visualViewport.width:it.outerWidth)/it.innerWidth,p=0,v=hn(i)?function(){return i(o)}:function(){return i||2.8},x,_,E=TY(c,e.type,!0,s),V=function(){return _=!1},M=gi,b=gi,g=function(){l=Ei(c,Qt),b=wa(lr?1:0,l),n&&(M=wa(0,Ei(c,Un))),x=ts},T=function(){d._gsap.y=Va(parseFloat(d._gsap.y)+h.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",h.offset=h.cacheID=0},C=function(){if(_){requestAnimationFrame(V);var N=Va(o.deltaY/2),ne=b(h.v-N);if(d&&ne!==h.v+h.offset){h.offset=ne-h.v;var P=Va((parseFloat(d&&d._gsap.y)||0)-h.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",d._gsap.y=P+"px",h.cacheID=rt.cache,$i()}return!0}h.offset&&T(),_=!0},R,O,Z,B,H=function(){g(),R.isActive()&&R.vars.scrollY>l&&(h()>l?R.progress(1)&&h(l):R.resetTo("scrollY",l))};return d&&Me.set(d,{y:"+=0"}),e.ignoreCheck=function(G){return lr&&G.type==="touchmove"&&C()||m>1.05&&G.type!=="touchstart"||o.isGesturing||G.touches&&G.touches.length>1},e.onPress=function(){_=!1;var G=m;m=Va((it.visualViewport&&it.visualViewport.scale||1)/Y),R.pause(),G!==m&&fc(c,m>1.01?!0:n?!1:"x"),O=S(),Z=h(),g(),x=ts},e.onRelease=e.onGestureStart=function(G,N){if(h.offset&&T(),!N)B.restart(!0);else{rt.cache++;var ne=v(),P,fe;n&&(P=S(),fe=P+ne*.05*-G.velocityX/.227,ne*=Lh(S,P,fe,Ei(c,Un)),R.vars.scrollX=M(fe)),P=h(),fe=P+ne*.05*-G.velocityY/.227,ne*=Lh(h,P,fe,Ei(c,Qt)),R.vars.scrollY=b(fe),R.invalidate().duration(ne).play(.01),(lr&&R.vars.scrollY>=l||P>=l-1)&&Me.to({},{onUpdate:H,duration:ne})}a&&a(G)},e.onWheel=function(){R._ts&&R.pause(),un()-p>1e3&&(x=0,p=un())},e.onChange=function(G,N,ne,P,fe){if(ts!==x&&g(),N&&n&&S(M(P[2]===N?O+(G.startX-G.x):S()+N-P[1])),ne){h.offset&&T();var Le=fe[2]===ne,tt=Le?Z+G.startY-G.y:h()+ne-fe[1],He=b(tt);Le&&tt!==He&&(Z+=He-tt),h(He)}(ne||N)&&$i()},e.onEnable=function(){fc(c,n?!1:"x"),at.addEventListener("refresh",H),tn(it,"resize",H),h.smooth&&(h.target.style.scrollBehavior="auto",h.smooth=S.smooth=!1),E.enable()},e.onDisable=function(){fc(c,!0),en(it,"resize",H),at.removeEventListener("refresh",H),E.kill()},e.lockAxis=e.lockAxis!==!1,o=new Bt(e),o.iOS=lr,lr&&!h()&&h(1),lr&&Me.ticker.add(gi),B=o._dc,R=Me.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:_Y(h,h(),function(){return R.pause()})},onUpdate:$i,onComplete:B.vars.onComplete}),o};at.sort=function(r){if(hn(r))return et.sort(r);var e=it.pageYOffset||0;return at.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+it.innerHeight}),et.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};at.observe=function(r){return new Bt(r)};at.normalizeScroll=function(r){if(typeof r>"u")return Tn;if(r===!0&&Tn)return Tn.enable();if(r===!1){Tn&&Tn.kill(),Tn=r;return}var e=r instanceof Bt?r:WS(r);return Tn&&Tn.target===e.target&&Tn.kill(),rs(e.target)&&(Tn=e),e};at.core={_getVelocityProp:cu,_inputObserver:TY,_scrollers:rt,_proxies:bi,bridge:{ss:function(){li||as("scrollStart"),li=un()},ref:function(){return ln}}};oY()&&Me.registerPlugin(at);function US(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var hc={exports:{}},Oh;function MS(){return Oh||(Oh=1,(function(r){function e(t,n){var i="XIXHXHXGXGXQXQXPXPXOXOXN##U6U6UW#$U%U%U%U%U%XFXEXEXRXRXVXVXWXWXXXXXYXYXZXZY#Y#Y$Y$Y%Y%XSXSXTXTXUXIXHXHXGXGXQXQVAVA#%#&V'#'U6#(#)U%U%U%U%U%#*U%XEXEVLVLVLVLYGYGYGYG#+W=W=W=W=W=W=Y$X+X+X+X+X+XTXUVPUQ#,T*T*#-VAVA#.#/#0#1#2U6U6UWU%U%U%U%U%#3VLVLXEYH#4#5#6YGYGYG#7X.#8W=W=W=#9X,X,#:#;#<#=#>VPVP#?#@#AT*T*#B#C#D#E#F#GV'#H#I#JUWU%U%U%U%X6X6#K#LYH#M#N#O#PYG#Q#R#SX.#T#UW=W=#V#WX,#X#Y#Z$#$$$%$&T)$'$(T*T*$)$*$+TW$,$-$.$/$0$1$2$3U%U%XJXJXF$4$5$6$7$8$9$:YG$;$<$=$>$?$@$A$BW3$C$D$E$F$G$HW8$IT)T)T)XHXGXGXQV=$J$K$L$M$N$O$P$Q$R$SV2XKXJXJXFY4$T$U$V$W$X$Y$Z%#%$%%VN%&%'%(%)%*%+%,%-%.%/%0W8XTT)XIXHXHXGXGXQXQU>%1%2%3TL%4%5%6%7U-XKXKX0X0XF%8%9%:%;%<%=%>%?%@%A%B%C%DX(%E%F%GWU%H%I%J%KXSXTXTXUXIXHXHXGXGXQXQU>%L%M%NTL%OUPXMX1XLXKXKXJX0X5%P%QS0%R%S%T%U%V%W%X%Y%Z&#WUWUWUWUWU&$&%X%XSXSXTXTXU&&ZDZDXGXGXQXQXP&'&(&)&*&+&,UOXLXLXKXKXJXJ&-&.&/S0&0T&&1&2WQ&3&4&5&6&7&8&9&:&;&<&=X%X%XSX%XTXTXUXIZDZDZDXGXQXQXPUI&>&?&@&A&B&C&DXLXKXKXJX3&E&F&G&H&I&J&K&L&M&N&OWEW<W<&P&Q&R&S&T&UY%X%ZUXSXTZYXUXIXHXHXGXGXQXQXPXPXOXO&V&W&X&Y&Z'#XKXKXJX3'$'%'&'''(')'*'+','-VMXXW<'.XZ'/'0'1'2WDZPZ9'3'4ZH'5XUXIXHZEZEXGXQXQXPXPXOXOZ@'6'7'8'9':';XKXJXJXF'<'='>'?'@'A'B'C'DXXXXZ1W'XZ'E'F'G'H'I'JW5Z9'K'L'MZWZ<Z<XHZEXGXQXQXPXPXOXOZ@'N'O'PUB'Q'R'S'TXJXFXFXESQ'U'V'W'X'YXWZ0XX'ZXYXZXZW4(#($(%W5(&ZS('ZB((()(*(+ZTZE(,(-XQXPXPXOXOXNU=U=(.(/(0(1(2(3XJXFX8XEXESN(4(5(6(7(8Z2XXZ+XYXZZ-Y#(9(:(;(<(=(>(?ZB(@(A(BZLZT(CZV(DXQXPXPXOXOXNXNU=(E(F(G(H(IXJXJXFXFX8XE(J(K(L(M(NZ*(OZ2XYXYXZXZY#Y#XCXC(P(QX;X;ZN(RZ>(SXHXHZVZVZA(TZQXPZ:XOXNXNV,(U(V(WV.V.XJXJXFXFXEXET((X(Y(ZZ*Z*XXXXXYXYXZXZY#Y#XCXC)#)$)%)&XT)'XUZ6XHXHXGXGXQXQXPXPXOXOXNXNV,)()))*V.XKXJXJXFX8XEXEXRSE)+SEXWXWXXXXXYXYXZXZY#Y#XC),)-).)/XDXAZ6Z6Z8XHXHXGXGXQXQXPXPXOXOXNXNV,)0)1T.XKXKXJXJXFX8XEXEXRXRXVXVXWXWXXXXXYZ/XZXZY#Y#Y$Y$Y%)2)3XDXTZ6Z6XIXHXHXGXGXQXQXPXPXOXOXNXN)4)5)6X9XKXKXJXJXFXFXEXEXRXRXVSESEZ/Z/XXZ/XYXZXZY#Y#Y$Y$Y%Y%XSXSXTZ6Z6XIXHXHXGXGXQXQXPXPXOXOXNXNV&)7)8X9XKX7X7X7XFXFXEXEXRXRXVXVXWXWXXXXXYXYXZXZY#Y#Y$Y$Y%Y%XSXSVEZ6XUXIXHXHXGXGXQXQXPXPXOXOXNXNVHVH)9):T9T9XJXJXFXFXEXEXRXRVIVIVIVI);VFVFVC)<VKVBVBVBVDVDVDVDVD)=VGXUXIXHXHXGXGXQXQXPXPXOXOXNXNVHVHT9T9T9T9)>VH)?Y&)@VJVJVJ)AVIVIVI)BVFVF)C)DVK)E)F)G)H)I)J)K)L)MVGVGVGVGVGVGXGXQXQXPXPXOXOXNXNVHVHT9T9T9T9)NVH)OY&)PVJVJVJ)QVIVIVI)RVFVF)S)TVKVKVK)UXCXCXCXCXC)VVGVGVGVGVGVGVGVGVGVGVGVGVGVGVG)W)X)Y)Z*#*$*%*&*'*(*)***+*,*-*.*/*0*1*2*3*4*5*6*7*8*9*:*;*<*=*>*?VGVGXNXNV'*?XLXLUWU%*>TF*?TFTFV'TFV'V'*>V'*?U6*?V8V8*?U%V8*@U%U%U%*@XYW=YGXYXHT*UQT*XQXQ*>*?VAVA*?*@*@TF*ATFTF*ATFTF*AV'TFTFV'*A*B*C*CTRV/XFVLVLYH*CYHYH*C*DXVXV*DYGYGX.YG*D*DW=X.*EW=*E*F*GX,X+X,*GX+X+X+*G*G*HWWWW*HWWWWWWXTXTWW*HVPVPVPUQ*GUQUQUQUQT*UQT**FV>*GV>*GVAV>*HVAVA*HVAVA*HVAVA*H*IVAVATFV'VAV'V'*HV'*IU6U6U6*IU6U6*IU6X6XFXFX4XEXEX4Y@YH*GYH*HYUYUYU*H*HY7Y7*I*IYGYGYGYGYG*IYGYGYG*I*J*J*KX.X.X.X.*K*L*LW=*MW=*MX,*N*OX,X,*OX,X,*OX,*P*P*QW;*R*RWW*SWB*S*TWBWB*T*UWB*VVPVPW8*VVPVP*VVPUQUQT)UQ*UT*UQT**U*VXQV0*VV=*WV=*W*XV=*Y*YV)*ZV)V)V?*ZV?V?*ZV?V?V'*ZV;+#U6+#U6V;V;+#V;V;+#U&+$U&XLXLU&V2Y@Y@XF+#Y@Y@+#Y@XEYHY@+#+#+$+%+&YU+&+'+(+(+)+*++YGYG++YG+++,+-+.+.X.+/X.X.X.+/+0X.+0+1+2+2+3+4+5+5+6+7+8W=W=W=+8+8+9W3W3W3+9+:W%X,X,+:+;X,+;X,X+X+X+X++;X+WBWRXSWB+:XSW8W8W8W8T)V=+9+:+;+;+<+=+>+>V)TTTTV)V?+>+?V?V?TL+?V;V;+?+@+@V;V;V;V;V;V;+@V;+@+A+B+BV2+CV2+C+DYIYI+D+EYI+F+F+G+H+I+I+J+K+L+L+M+N+O+O+P+Q+R+R+S+T+U+U+V+W+X+X+Y+ZVR+Z,#,$,%VN,%VNVN,%,&,'X(,',(,)W2X',),*X',*,+X'X',+,,W&,-,-,.WUWU,.,/,0,1X+,1X+,2WRXSWRX)WW,1,2WW,2,3U>,4,4TTTTTTTT,4TTTL,4,5,6,7,7,8UPUP,8UPUPUP,8U-XLXLXF,8XFY>,8,9,:YB,:,;YBYB,;,<YMYM,<,=YM,>,>,?,@,A,A,BY9Y9,B,CY9,D,D,E,F,G,G,HVS,I,I,J,K,L,L,M,N,O,O,P,QX(X(,QWUWU,Q,RWUWU,R,SWUWUWU,SWU,T,TX+,UY%X+X%X%X%,TX)XSXSU>,T,U,V,VTT,W,X,XTL,YTLTL,YTL,ZXF,ZXFS:,Z-#S:-$-$-%-&-'YMY*T&T&Y*-&-'S9-'-(S9-)-)-*-+-,-,X#--X#---.X#X#-.-/-0-1-1-2-3-4-4-5-6-7WUWTWUWT-6X%X%X%ZJZDXIZDV:-5XPUF-5-6UF-7-7-8-9-:TLTL-:UHTL-:UH-;-;UO-<UOXFX2XFSA-;-<-=SZS0S0-=->->T&-?-@-@S9-AS9S9-AS9-B-B-CWQ-DX#-D-E-F-FW9-GW9-G-H-IW<W<-IW<W<-I-JW<-K-K-L-M-N-NWU-O-PWUWU-PWUWUWU-P-QWUX%-QX%UI-QUIXO-Q-RUIUIUIUHUI-R-RU.-SV7-S-T-U-V-VV--W-XV<T+-X-YXF-YX3-Z-ZSZ.#SZ.#S2.$S2.$.%S2SY.%SYSYSYSX.%SXSX.%SH.&SH.&SHSH.'.'WQ.(.)WQWQ.)VM.)WE.*WEW<.*W<XZ.*X-X-X-.*.+.,.-.-WU..././WXWU.0.0Y$WDY$XN.0XNXN.0UAXNTNTDTDUV.0TD.0.1TITI.1TI.2T?XLU,XLXF.1XFS5.1.2.3.4.4.5.6.7.7.8.9SK.9.:SK.;.;SX.<.=SHSH.=.>SH.>.?S/.?.@S/.A.A.BSUSUW<W<W<.BW<.BW<.C.C.D.E.F.FW0W0W0W0WD.FWDZCXSZ9Z9XSXSZ9ZRZHZH.DZHTNXNZ@XN.CTD.DTDTD.DTD.ETI.E.F.G.G.H.I.J.JXKT@T@SB.JXFXFS-.JXEXE.JSKXET%.JS@.K.L.L.M.NSJ.N.O.P.QSF.Q.R.SS/.SSWSU.SSUSUXWW<.SXZW4.S.TW4.UW4W4W4.U.U.V.WWCWD.WWC.XY%ZP.X.YZ9ZRXSZRZRZFXTXTZHZHXTZWZ@U=XNU=.U.V.WU=.W.X.Y.Z.ZV+/#V+T@/#T@/$U#U#U#/$XJURU#URSL/#SL/$/$/%/&/'/'/(SO/)/)/*S>S>/*/+/,XWXYZ1Z+Z+W4/+W4/,/,WC/-WCWCW5WC/-W5/-W5/.ZSZ7ZS/.ZKZWXTXTZWZWZ?Z?Z?Z=ZZ/,/,ZT/-ZTZEXGZVZVZIZIZVZV/+/,U=/-/-/.U</////0TPTP/0/1/2/3/3/4T=/5/5XJT=XJSN/5SNSNSO/5/6/7/7S>/8/9S>Z.SR/9Z0Z0/9Z*/9W4Y#Y#/9WCY$Y$WC/9XCXC/9/:/;X>/;/<X>X;/<ZSX;XSZS/<ZSZSZBXT/<ZBXUZ?XUZ>Z>ZX/;ZXZVZV/;ZVZVZVZV/;U=/;U=/<U<U</</=/=/>/?/@/@V./AV.V./AV.V.XR/AXRT(/ASNT(/B/B/CSC/D/D/E/FSRSRZ*XWZ*XXZ2Z4Z2/DX>/EX>X>X;/EX;Z;Z;ZN/EZXZXZ6XIZAZQXQXQXMV,V,/C/C/D/ET0/E/F/G/HT(/H/I/J/J/KSE/L/LSR/MXV/MX>/NX:X>X;X:/NX;X;/N/OX;XS/OXSZNZNZMXTV,/NV,/O/O/P/Q/R/R/S/T/USE/USESEXC/UXCXC/UX:Y%X:X:/UX:/VXDXD/V/W/W/X/YT/T5/Y/ZT5Y%/ZY%Y%/Z0#X@X@XMV,XMV&/Z0#0$0%0%XLT4X9V&0%XMV&T90%XLXLV&V&T9T90$T9T9T9XXXX0$VFXZXZVCVKXTXT0#VGXJXJ0#VHXF0#VH0$0$SE0%SE0%VI0&VI0&VF0'VF0'VC0(VCVCVKVCVK0'0(VKVK0(0)VKVK0)0*0+XC0+0,XCXC0,0-XCXC0-0.XCXC0.0/XCXC0/00XCXC00VG01VG01VH02VHVH02VH0303SE04SE04VI05VI05VF06VF06VC07VCVCVKVCVK06XC07XC07VG08VG08VHVGVGVHVHVGVGT9T9VGVGT9T9VGVGT9T9VGVGT9T9VGVG03VHVGVGVHVHVGVGVH02VGVGY&Y&VGVG01SEVGVGVJVJVGVGVJVJVGVGVJVJVGVG0.VIVGVGVIVIVGVGVIVIVGVGVIVIVGVG0+VFVGVGVFVFVGVGVFVFVGVG0)VCVGVGVCVKVGVGVKVKVGVGVKVKVGVGVKVKVGVG0%XCVGVGXCXCVGVGXCXCVGVGXCXCVGVGXCXCVGVGXCXCVGVG/XVGVGVGXNXNV'U6XOXOVATFVATFVATFV'U6V'U6V'U6V'U6U6U6U6V8UWUWU%U%V8U%V8U%U%U%U%TRT*V>T*V>V>VAV>VAVAVATFTFVAVATFTFVATFVATFVATFTFTFV'V'TFTFV'V'TFTFV'U6V'U6V'V'TFV'V'U6V'U6TRTRU%TRYHYHYUYUYHYH/BY7YHYHY7YG/AYGYGYGYGX./AX.X.W=X.X.X.W=X.X.W=X,W=X,W=W=W=X,W=X,X,X,X,X+X,X+X+X+X+WWX+X+X+WWX+X+WWWWX+XSWWWWWWVPVPVPVPVPVPUQT*V>T*V>T*V>T*V>V>VAV>V>V>VAV>V>VAVAV>VATFTFVAVATFTFVAVATFTFVATFV'U6T<T<V'U6V'U6U6U6U6V;U6U6V;V;YHYH/)YUYUYU/)YUYU/)/*/+YUY7/+Y7Y7Y7/+/,YGYG/,YGYGYGYG/,YGYGYGX.YGYGX.X.YGYGX.X./)X.X.X.X.X.X./)X.X./)X.W=W=X.W=X.W=X.W=W=X,W=X,W=W3W3W3X,X,W3X,X,X,X,/$X+X+X,W;X,/#X,W;X+X+W;W;WWWWW;X)W;X)X+X+WWWWX)WWX)WBX+X+WWWWWWWBWWWWWBWBWWVPWBWBVPVPWBW8WBW8W8W8W8VPW8W8VPVPW8VPUQT*XHXHT*V@XQXQV=U8U8V0.LV=V0V=V0V0V=V=TZTZV=V=TZTZTSTSV=TSV=V=TWV)TWV)TWV)TW.GV).GV).HV'V'V?V'V'U6V'U6V;U6V;V;V;V;U6V;V;U6V;V;UWV;V;V;V;V;U&U&Y4.AY4Y4.AY@.B.CXEXEY'.CYH.C.D.E.EYU.FYU.F.GY,Y,.G.HY,.I.I.JYU.K.K.LZ&Z&.L.MZ&Z&.MYV.N.O.O.P.QYG.Q.R.S.T.T.UYEYE.UYG.V.WYGY=YG.W.W.X.Y.Z.Z/#/$/%YG/%/&/'/'X./(/)/)X./*X.X.X./*WOX.X.WOVNX.X.WIWI/(/)VNVNWIWIVNVN/(X&/)/*X&X&/*X&/*WHVN/+WHWHVY/+X&X&X&/+X&W=X&W=/*/+/,/-WG/-/.//W=//W=W=W=W=//W3W=W=W3W3W3X,W%W%W3W3W3W%W%X,W%/,X,X,/,X,X,X+X+X+X+WRX+WRWBWBW8W8V=V=/)V=V=U>XPU>/(U>U>U>V=/(/)/*TWTW/*/+U>U>U>/+TTTTU>TTTWV)TWV)TT/)TTTTTLTL/)TL/)TLTL/*/*TU/+/,V;V;/,/-V;U6V;V;V;/,/-/.V;TBV;TB/-UKUK/.U-U-U-/.TB/.V2V2V2V2U$UJ/-Y@Y@/.Y@Y@/./////0YI/1/1/2/3/4YI/4YI/5Y,Y,/5Y,Y,/5/6/7/7/8/9/:/:/;/</=/=Z&/>/?Z&Z&/?/@/@/A/B/C/C/D/E/F/F/G/HY</H/IY<Y</I/JY/Y//J/KY//L/L/MY<Y</MYG/N/OY<Y<Y</O/O/P/Q/RYGYG/R/S/S/T/UZ%/U/VYGYG/V/WYGYG/WYQZ%/X/X/YWJWJ/Y/ZYG0#VTVTVT0#0#X.WJVR0#0$VRVRVTVR0$0%X.WOVRWOWOVNWOWOVRVRWPWPVNVNWPWPVY/YVNVNVYVYVNVNVYW=VYVYVNVN/WX(W=W=W2W2W=W=W2W2W2W2X(W2W3W3X'X'W2X'X'X'W3W3/RX'/RW%W%W%W%W%W&W&W%W%/Q/RW&WUWUWU/QWUWUWUWUWUWU/QX,X,/QX,/QX+X+X+WU/QWUWU/QWU/R/SX+WRX+WRX+WRX+/RWWW8WWWWX)WWX)X)U>/PU>U>TETE/P/QU>/QU>TT/QTT/RTT/RTLTLTLTL/RTL/STUTU/S/TTL/TTL/U/UUP/VUPV;/V/W/X/X/YUPUP/YUPUPUP/YU-XLXLYBYBYB/YYBYB/YYBYB/YYB/Z/ZYB0#YBYIYI0#0$YI0$YIYI0$YM0%0&0&0'YMYM0'0(0)0*0*0+0,0-0-0.Y*Y*0.0/000101020304Y*04Y*05Y9Y905Y9XVYRY9Y9YR04Y9Y9YG04Y905YGYG0506Y906Y907YGYG0708VQVQVWVQ0708090:VWVW0:XWVQVQVSVQWSWSWS09VSVS090:WSWP0:WSWPWPWSVNVS09VS0:WS0:0;0<0<VN0=0>VNVN0>0?0?0@0A0B0B0CW,W,VNVN0C0DVNX(X(X(0CX(X(X(X(W2WUWUX'X'WUWUX'X'WUX'X'X'X'0@X'WU0@WUWUWUWU0@0@0AWM0BWU0B0C0DWMWM0DWTX%0DX%X%0D0E0F0GU>0GXPV:0GUYV:U/0GTT0H0IUY0I0J0KTTTTUU0KTT0KTTTLTT0KTLTL0KUP0LUP0LUP0MUPXFY>XFS:0L0MS:S:YB0M0N0OS:0OS0S00OT'0PT'YM0PT'YC0PT'S0T&0PT&T&T&0P0QY*XVT&T&T&S9Y9Y9XV0P0P0Q0R0S0S0T0UVO0U0VW(0W0W0XVUVUVOVUWQ0XVUVUWQVU0WX#0XX#0X0YVU0Z0ZX#X#X#X#0ZX#X#0ZVS1#1$1$1%W7W7W7W71%W7W7W7W71%1%1&W71'1'1(1)1*1*1+W9W9W91+W91,X(X(W9W<X(WUWUWU1*W<W<W<WUWUW<WUWTWT1)1*V:1*UFUFU/U/1*U/TM1*TM1+UFULUF1+1+UE1,1-1-TL1.1/ULUL1/UI1/1011UL11XNULXN11UPXNUPXNUPU.U.UPUPUP10UP1011UOX2S:1112S:S:SA12SASASASZSZS0SZS2S0S0S2S0S0T&S0T&S0T&S0S0T&T&SYT&T&1,T&S9T&S9T&S91+1,1-WQS91-S9S91-1.WQWQ1.X#1/X#1/10WQWQX#X#10X#1011W+1212X#WEWE12W9X#13X#W9WEXXW9W9W9121213W<W<W913W<W<13W:W<1414WU1516WUWU16171718W<19WUWU19W<W<WU19X-191:1;W<1;X-X-X-WUWUX-WU1:WU1;WUWUWUWU1;WUWU1;WUWUWU1;1<WU1<WU1=1=1>WXX%UF1>XOUI1>UIUIUIUI1>UIUIUI1>UIU*UH1>1?TH1?TAU*V7U.U.TKTKU.UOU.U.XMXMV7TDU71<U7XMUOU'U.UZUZ1;XMXMV-1;XMXMV%1;XLTI1;T,UN1<1<SASASZXFSZS=1<SASZSZSZSZSZS=SZSZS2SZS2SZS2SZS2S0S0S2S2S0S0S017S0SYSYSYSXT&SXSXT&SHSXSHSXSHSXSH13SHSHSHSHSHSH1313WQSHWQ13WQS1S1WQ1314VMWQWQVMVMWQWQWQWEWEWEVMWEW<11W<XZW)11XZX-X-111213X*VXX*X*12VX13VX1314VX15VX15VX1616W0X*17WUWUW0WU16WUY$Y$Y$WDWUWD15WDWDWD15U*XNXN1516TYUAUVTDUVTDXMXM1516TD16TD17XL17TIU(TI17TITIS=17S=18S=18S5S<S2S2S218S<S<18SBS<1819S<S2S2S21919T#T#T#191:S-S-T#1:1;S.1;SYT#SY1;SY1<SK1<T$1=1>SYSYSK1>SYSXSK1>SK1>1?S@SXSX1?SX1?SXSX1@SXSXS3S3SHSHS3SFSH1>SFSFSH1>SHS/SHSFSFSF1=1>S/S/1>VM1?1@S/SUS/S/VMVMVMSUVMVMSUSU1=W'1>W'W<XZW<X-XZX-W<VXX-VXX-1<1<1=1>WK1>VXVXVXWKWKVXW0WK1=WK1>WDWDW0Y$ZHZGZHZGUVUVTDXMXMTDU+U+TD1:TDTDTDTDTDUBTIU,TITCTITIUBUBTCTCUBTCU,16U,UXUXUXUXTJU,U,TCV+UXTJV+T@XKXK13XKSV13SVSV13S.14S.1415S.XESK1516S@SQS@SL16S@S@SLS7S3S3S315S3S3SJS3S@S7S714S3S314SOSFSFSO1414SOSOSOSOSOSO14S/S/SFS/13SG14SGSGSW14SWS/S/S/SUS/SUSUSUW<W4W4W4VX11W4W>11W>W>W>11W>1213W4W?13WLY$W?1314W?WD14W?W?WCWLWCWD13WCWCWCWCWCW5W5ZPW5W5ZPY%W5W5U+U+1011U+U+11U=U=11U=U=TDTDU=U=TDUBTDUBU=U=U=TXTXUBTXUBUBV+UBUBUBV+UBV+T@U#T@U#1*U#1+U#U#U#1+U#SL1+S7S71+1,1-1.S71.S7SJSJSJSJSO1-SJSNSJ1-SOSJSOSJSOSOSOSO1,SO1-SO1-SOSO1-SG1.S>1.SWS>1/SWSW1/SWSUSUSWXW1.1/S>S>1/WLWLWLW4WLW4W4WLWLWL1.WLWCW4W4WCW5WCW5W5Y%W5ZSW5ZSW5ZSZ7Z7Z7ZBZZXIZZZ5Z=XHZOXHZOXHZ5ZO1&V*U=U=V*TXV*1&U=U<U=U<UB1%U<V$V$UBV$TPV$1$U<U<UBV+TPTPV+V+TPTPT@T@TPT-T-U#T-U#TPT-TPV.T-0W0XT=U#U#T=T=0W0X0Y0ZT=0ZT=T=0Z1#U@U@SNSNSN1#SOSOSOSPSNSPSPSP0Y0ZSPSP0Z1#SPSPSP1#SP1$1$SR1%SRZ.Z.XWZ3Z3Z*Z3Z*W4W4Z,Y#W40ZY$Y$WCW*WCW*W5W5Y%X>W5Y%X>Y%Y%X>XCX>Y%W5X>Y%W5ZSY%X;ZSZSX;XSZBZBZSXSZBZBZ;Z;Z>Z>Z>ZXZTXGXGZVZVZVZVZAU=U<0NU<V,0NV,0OU<U<U<0OU<T;0OT;TPTPU<TGTPTPTGTGT;0MT;TGTGTG0MTG0MV.V.V.0MV.0NV.0NT=0OT=SNSNT(T(SNSN0NT(T(SCT(SCSPSPSC0MSP0M0NSDSDSD0N0OSDSRSDSD0NSRSRSRSD0N0OSRXCX>XCX>XCX>XCX>X>0MX>X>Z;XTZNZNV,T/0L0MT10MT50N0NT;T0T00N0O0P0QT;T;0Q0R0R0S0TV.T0T;T00T0T0U0VV.T(SCT(SCT(T(T(SET(SESESESCSCSC0S0SSESESESESE0S0TSESR0TSR0TSESESEXCX>XCX>XCX:XCX:X:X;X:XDX;X;XDXDX;X;XD0PX;X;0P0Q0QT60R0S0ST30T0UT2T0T70UT0T0T00UT70UT5T50U0V0WT.T00W0X0Y0YV.UM0Z0Z1#T.T.UMUMT.XL0ZSESESEXCXCXCX?0YX:X?Y%X:XDX:0YX:0YX:0ZXDXDXB0ZXDXD0ZXDV,V,V,0Z0ZT5T5T5V,0ZV,V,T.T.0ZT.T/0ZT/T/X:0ZY%Y%XBXBX=0ZXBXBX@X@V,0YV,T40Y0ZT4T4V&T4V&V&T4T40YT40YT/T4T4V&T9V&V&XLX9T9XLT9T9V&T9VIVFVIVFVDVGVDVGXJXJT9VHXFXFVHY&VHY&VHY&Y&SEY&SEY&SEY&SEVJVIVJVIVJVIVJVIVIVFVIVFVIVFVIVFVFVCVFVCVFVCVFVCVBVBVKVKVBVBVKVKVBVBVKVKVBVBVKVKVBVBVKXCVBVBXCXCVKXCVKXCVDVDXCXCVDVDXCXCVDVDXCXCVDVDXCXCVDVDXCXCVDVDXCXCVDVDXCXCVDVDXCXCVDVDXCXCVDVDXCXCVDVGXCVGXCVGXCVGT9VHT9VHT9VHT9VHVHY&VHY&VHY&VHY&Y&SEY&SEY&SEY&SEVJVIVJVIVJVIVJVIVIVFVIVFVIVFVIVFVFVCVFVCVFVCVFVCVKXCVKXCVKXCVKXCXCVGXCVGXCVGXCVGXMVHVGVHT9VHT9VHVHY&VHY&Y&SEY&SEVJVIVJVIVIVFVIVFVFVCVFVCVKXCVKXCXCVGXCVGYHYH/U/VYHYH/VYGYGX.YGYGYHYHYH/UYH/UYHYU/UY7Y7Y7XRY7/UYDY7Y7/UY7YU/UY7Y7Y7Y7/U/VY7/VYGYGYGYG/VYGYGYG/VY=YGX.X.X.X.X./U/VX.X.X&X&X,X,/UW3X,W;X,X,V=V=U8V=TWV)TWV)V)V?V)V?V)/QV)V)Y4Y4Y4/QY@Y@/QY@/Q/RY4Y4Y8/RY@Y@Y'Y,Y'/RYHYHYH/RYHY3Y3Y3Y3/QY3Y3/QYUYUYUYUYUY3YUY3Y3/P/QY3Y3/Q/RY3/RY3Y3YUYU/R/SY,/SY,/TYUYDYUYUYDY7YVYV/R/SYL/T/TYUY3Z&YUXRZ&Z&XRY;/SY;/SZ$Y;/TY7/TYVYVYLYLYL/TYL/TYLYL/T/UYVYG/UYGYGYG/UYGYL/VZ$Z$/VZ$Z$Z$Z$/V/V/WZ&/X/X/YYEYE/YYEYEYE/YYEYEYEYGYGYEYGYE/XYEYEYGYG/XYG/XY=/YYG/YY=Y=Y=Y=Y=Y=/YY=Y=YGY=Y=YN/XYNYGYGYG/XYGYGYG/XYG/XYGYGYXYXYX/X/X/Y/Z0#0#0$YNYNYN0$YN0%Y=X.0%X.YN0%0&0'X.X.0'X.0'0(0)0*0*X.X.X.X.0*X.WOX.X.VNVNX.WIVN0)0)0*0+X&WIX&WIWHX&X&WHWHX&X&WHX&WHWHWIWHWH0'VN0(0(WHVYVYX&X&X&0(WH0(WHWH0(WG0)WGWH0)VYVYVY0)VYVY0)0*W=W=0*WGVYWGWGW=WGW=W=0)W=W30)W3W3W3X,X,WUWUX,X,WUWUV=V=0'0(0(U>U>U>TWTWV=TWV=V=0'0(V=V=0(TOTWTW0(TWTWTWTW0(U>U>U>0(TLTL0(US0(TLTTTL0(TLTLTLTL0(TLTL0(V;TUTU0(TUTLTL0(TU0)0*TU0*TUTU0*V;TU0+V;V;UP0+V;UPV;UPUP0*UP0+V;V;UKUKUKU-UKU-U-0)U-U-U&V20)V2Y4Y4XEY@Y@Y@YIYIY@0'YI0(Y@Y@YIYIY@Y@Y@0'Y@Y'0'0(YI0(YIYIY'Y'0(0)0)0*0+Y,0+0,YIYI0,Y,0-0.YIYIYI0.0.0/YI00Y,Y,00Y,Y,000102Y,02Y,0303YK04YK04Y,0506Y,Y,06070708YM09090:YMYMY,0:0;0<0<0=Z#Z#YM0=YMYM0=0>0?0@Z&Z&0@Z&YK0@0A0B0B0C0D0EZ&Z&0E0FZ&Z&0F0GZ#0GZ#0H0HY-0I0J0J0K0L0M0MY00N0O0O0PY0Y00P0QY00R0R0S0TY+0TY/0UY/0U0VZ&0W0W0XY<Y<0X0YY<Y<0YYEY<Y<YEYEY<Y<0X0YY/Y/Y<0YY/Y/0Y0ZY/1#1#Y<Y21$1$1%1&1'1'1(1)Y<1)Y<Y<Y<YGYGY<1)Y<1)Y<Y<1)1*Y<Y<Y<1*YRYRY<1*1+1,1,Y<Z(1-1-1.YRYRZ(1.YRYG1.1/Y<Y<YGYG1/YGYG1/101111121314Z%Z%YGZ%Y<Y<131414YGYGYGYG14YG15Z%1516YG16YQ171818YQWJWJYQ18YQWJ18X.WJWJ1819YGYGWJWJY)19Y)Y)YGY)VTVTVQVQX.X.17WJX.X.X.17X.X.17X.1718VQVQ18VQVQVQVYVY18VYX(X(18X(X'18X'X'W3W318W%18W%WU1919WUWUWUW%WUWUWUWU18WUWU18X,WUWUX,X+X+X+WUX+WUWUX+X+WUWUWUWU15WU15X+16X+WRWRX%16U>TETETETETEU>U>TETETTTT13TTTTTTTETTTETETETE12TT12TLTLTLTL12TLTUTLTUTL12TUTU12TUTU121314141516U016171819U019U01:U01:1;UPV;V;V;1;1;V;1<UP1<1=UPUPV;V;1=1>V;1>UPUP1>UPUPUP1>U-XLU-YBYB1>1?YBYB1?1@YIYI1@YI1@1AYBYB1AYB1BYB1BYBYBYB1B1CYBYB1C1DYBYBYI1DYI1E1EYM1FYMYIYIYI1F1FYM1GYMYMYMYM1GZ'Z'YMZ'1F1GZ'Z'YPYP1GYPZ'Z'YMYM1F1GYMYJ1GY+YPY+Y+1GY+1H1H1I1J1KY+1K1LYSYWYWY*Y*1K1LY*Y*1LY/1M1NY/Y/1N1OYTYT1O1PYTYT1PYT1P1Q1R1SY/Y/1SXVYTYT1SY9YTXVY9Y9Y*1RY*Y*Y*Y*Y*1R1RY91SY9YRYGXVXVYGYG1RYGWZWZY9Y9WZWZWZ1QWZ1QWZWZ1QX/1R1SY91SY91T1TYG1UWZYGYG1U1V1VVW1W1XVWVWVW1X1X1YX#X#1Y1ZX#X#1ZXW2#X#2#2$VSVSVSVSX#2$VSVS2$2%WSWS2%WSWSWS2%2&VS2&VSVSWSWYWS2&2&2'VSVSWSWSVSWS2&VN2'VNVNVNVN2'VNVN2'2(2(2)2*W#2*2+W#W#WY2+2,2-2-2.2/2020W,21W,W,W,21W7212223W#W#W#W#X(22W#W#W#W#22W#W#W#W#X(X(X'X'WUWUX'WUWUWUWUWUWU2/WU2/20WM20WMWMWMWMWM2021WU21WUWUWUWU21WM2122WMWM22WT23WTX%X)X%X)U>U>U>2222TTUYUYU>22U>U>UYUY22UYU>U>2223U>U>2324TT24UYTTUY24UYUYUY24UY25UY25UYUYU/25U/U/2526U/U/26TTTMUUTTTLTLTLTLTL25TL2526TL272728TLUPTL28TL29TL29TL2:2:YBYB2;YBYB2;YBYBYBS0S02:2;S:S:2;S02<S0S0S0S:S0S0T'2;T'2;T'2<T'YMYMYCYCT'T'S0T'2:T&T&T&Y*2:Y*2;Y9Y92;2<2<2=WFWFY9Y92=Y9Y92=2>2?2?W(WFVZW(W(2?W(XV2?W62@2@W(2A2B2B2CS9W62CY9W(W(2C2DW(W(W(2DW(2E2E2F2GVU2GVUVUVUWQ2GWQWQ2GX#2H2IVU2I2JX#VU2JVUVUX#X#2JX#2JX#VU2KX#2KX#X#X#2KX#X#2K2LX#2MX#W72MW72MW7W7W7VS2MW7W7W72MW7W7X#2MX#X#W7W7W7W9W72LW7W72LW7W7W7W7W72L2MW,W,2MW9W7W9W9W92LW9W9W9W9W9W9W<W7W7W72K2KW92LW92L2MW92NW92N2O2PW<W<2PW<WT2PWTX%2PX%X%X%V:U/V:V:UFU/UFUFTMUUTMTMTMTMTM2MUFULUFUF2LTLTMUETM2L2M2NUEULULULTLTL2MTLUL2MULULTLTL2MTLULUIULUIULUL2LULUL2LULUL2LULUIUL2LXNUEXN2LUPXNXNUPUOUPUOUPUOUPUOUPU.U.U.X2SASASAS:S:SASASAS0SASZ2FS9T&S9S9VO2F2GVOWQWQWQS9WQS9S9WQWQS9WQVUVUWQWQW@2CWQ2DX#X#WQX#WQWQWQ2CWQ2CWQWQ2CWN2D2EX#X#2EX#WNX#W+W+X#2DW+2EW+2EW+WE2EX#2FXXX#2FX#2GX#W9X#W92FW<W<W<W92FW92G2GW<W<W<W9W<W9W9W<2FW<2GW<2GW<W<W:WUW:W:W:W:W<W<W:W:2EW:2EW:W:2FW<X$2F2GW<W<W<2G2G2H2IW)2IW)W<W)X$X$2IW<W<W<W<2IW<W<W)2IW<W<2IW<W)2IW)2JW<X-W<X-X-WU2IWU2IWUX-X-WUWUWU2IWUWUVXWUWUWUWU2HWUWU2HWUWUWU2HWUWUWXY$WXWUWX2GWXWXY$2GX%UFUFUF2GUFUI2GUIUI2GUIUIUHUHUIU*UHTH2FTHUH2FUHTHUH2FU*TAU7UZU7U7UZV-XMV-V-V%XMXM2CV<V5V52CV1U;2DU)U)TVUDXFSAXF2C2CS=S=S=S0SYSYSYS92BSHSHSHS1SHS1XWWQSHWQSHSHS1S1WQWQVM2?WQ2?VMVMW<W)W<W)W)X-2>X-WUWUX-X*X-X-VXVX2<X*VXVXVXVXX-VXX-2;X-VXX*2;VXVXVXX*VX2;VX2;VXVXWUWUVXVXVXVXY#WU29VXX*VX29W0X*W0WU29WUWUWXWXWXWDUI28XNXNU*V7TYTYV7V72728TI28TITITQU;28TITDTITITITITI27TIUDUDV6V4V#V#26TIS=S=262727S=S5S5S=S2S=S2S2S2S<S2XF25XFSBS<S2S<S-SBS<24SVS2T#S2T#S2S2S2T#S2S2S-S-T#T#21T#S.21S.S.S-S.S-21SYSY21SYSYSYSY2121SKSKSK21T$SMT$S.21S.SMT$SKT$SK20SKSKSKSKS@SK2020S@21SXSK21SKS@SXSX21SX21SX22SXSXSXSXS3SHSHSHSFSHS1SHS/S/2/S/S/2/S1S/S/S1VMS1S1S/2.S/S?VMVM2.XWW<W<2.W'W<W'W'W'VXVX2-Y#VXVXVXWK2,VXWKWKVX2,VXVXX-2,X-VXX*W0WKW0WKW0W0W0TITITD2*U,XLU,UXTJXKTJT@SV2(SVSV2(S.S-S.2(S.XES.2(2)2*2+2+SK2,SKSKSKS@S@SKS@2+2,SQSQSLSLS3S3S32+S7SJS7SJ2*S3SOSOSFSF2*SOSOSOSJSOSOSOSO2)SOSGSO2)2)SGSGSGSG2)2*SWVXVXW>2*VXVXVXW>W>W>2)W>W42)W4W42)W4W4W4WL2)WLWLY$W$W?2)2)W?W?W?W?W?WC2)WDWDWDWCXMU+U=U+U+U+2'U+U+U+2'U=U=U+U=U=T@U#T@2&T-U#T-U#U#U#U#2%SLS7SLS7S72$2%2&S7S7SJ2&SN2&XRSN2&SNSNSNS7SJSJSJ2%SJSJSJSJSJSJSOSO2$SO2%2%2&SO2'SOS8SO2'SGSG2'S>2'S>S8S>2'SW2(2)S>SWS>S>SWSW2(SWS>SWS>S>SWXW2'XWWLWLW4WLWLWC2&WCU=V*U=U=V*V*V*U<UBUBUB2$V$V$V$2$T-T=T-T=2#V.V.V.U#V(2#T=V(V(T=2#2#T=T=T=T=2#T=U@T=2#T=T=2#2$2%2&V(V(2&XJSNSNSN2&SO2&SP2'SPSP2'SOSOS>SPSPS>S>2&S>SPSPSP2&2&2'SR2(S6SRS6SRS6SR2'S6WCWC2'WCU=U=2'2(2(U<V,U<V,U<V,U<U<U<2'U<U<U<2'T;2'TGTGTGTGTG2'TG2'V.V.V.TGV.TG2'2'V.V.V.T=T=V.2'V.T=V.V.2&SNT(T(SPSPSC2&SPSPSPSDSPSDSDSDSC2$SCSCSDSDSC2$SRS6SR2$2$SRSDSRSDSD2$SDX>X;X>X;V,V,V,T6T2T2T6T2T1T5T1T51XT5T5T5T51XT5T5T/T/T/1XT8T01XT0T21XT2T21XT0T/T0T0T0T01X1XT;1YT;1YTGT;TGTGV.V.V.T;T;T;1XT0T0T01XT;T01X1YT0V.V.V.1XV.V.V.SC1XSE1YSC1YSCSESE1YSE1Z1ZSESSSESESESE1ZSESTSESEX;X;XDXDX;X;XDXD1W1XXDXDV,T6V,T6V,T6V,T31VT3T3T3V,T3V,T3V,T3T51UT3T31UT51UT01VT0T0T0T01VT7T0T71VT01V1WT.1WT.T.T.1WT.T.T.1W1X1YUMT01Y1Z2#2#UMUMUM2#V.UM2$2$2%UMV.T.2%T.T.2%UMT.2&SE2&SESEXCXCX?2&2&XDXDXDXB2&XBXBXBXB2&XB2&2'XBXB2'XBXBXBV,2'V,2(2(T5T5T5V,T5V,T/T.T.2'T.T5T5T/T/2&XBXBXBX=XSX@X@V,2%V,T4T/T/T42%T/T/2%2&T4T4V&T4T/T/T4T4YU2$YUYU2$Y72%Y7YHYH2%2&YHYHYHYUYUYUYH2%YUY7Y7Y7YUYDYUYDYDY7YDY7YUY7Y7Y7Y7Y7Y71YY7Y7YGYGY7Y7YGYGYGYGY7YG1VY=Y=Y=1V1WX&X&X&1WX&X&X,X,X,W3V?V?V)V?Y4Y4Y41U1UY@Y@1V1V1WY4Y4Y@Y@Y4Y4Y8Y8Y@Y@1U1V1W1XYH1XYUYUY3YUY3Y3YHYU1WYUY,1WY,Y,1WY3Y,1XY3Y31XY,Y3Y3Y31X1XYUY31YYUYUY,Y,Y3Y3Y,Y3Z&Z&1WZ&1WZ&1X1YXRYVYLYLYVYVYLYLYLYLYL1WYUYUY3YUZ&Y;Z&Z&Z$1UZ$Z$Y;Z$Y;Y;Y7Y7YVYVYLYL1SYLYL1SYLYLYVYGYVYVYGYGYV1RYGYG1RYGYVYVYLYLYLYGYLYLZ$Z$Y;Z$Z$Z$Z$YEZ&1NZ&Z&Z$Z$1NYE1NYEZ&YEZ$1NYEYE1NYEYEYEYLYLZ$YEYEYGYEYEYEYGYE1LYEYGYGYG1KY=Y=Y=Y=Y=YGYGYGYGY=1JY=Y=Y=1JY=Y=Y=1JYGYGYG1JYGYGYX1JYGYX1JYX1J1KYQYN1K1LYGYGYN1LYGYGYGYGYG1LYGYGYG1LYXYX1LYNYXYN1LYNYNYNYN1LYNX.X.X.Y=Y=1KYNYNX.YNYNYNYN1J1KYN1KYN1LX.X.1LX.1LYGYGYGYN1LYG1MYGYGYG1MX.X.1MX.X.1MX.X.X.1MX.WOVN1MVNVNX.X.X.1MX.X.X&X&X.1LX&X&WHWH1LWHVYVYVN1LVYWHVYVYX&X&X&WGX&WHWHWHWGWG1IWGWHWGWHWGWHVYVYVYVY1GVYVYWGWGWGW=W=W=1FW=WGWG1FWGW=1FW=W3W=W=1FW3V=V=V=1FV=V=1F1GV=1GU>U>V=V=U>U>V=V=U>1FV=V=1FU>TWTWTTTTTWTWTTTTU>TEU>1DTT1DTTTT1D1ETLTL1ETLTLTLTL1ETLTLV;1EV;V;1ETU1F1GTUTUUGTU1FUG1G1HTUTUTLTLTU1GTUTU1GV;TUV;V;V;TUTU1FUKUPUKUP1FUPUKUP1FUPUPU-U-U-1FTBTBTBV2Y@Y@Y61E1EY6YI1FY@Y@1FYIYI1FYI1G1G1H1IY.YI1IYIYI1I1JY.Y.1J1KY.Y.Y'Y'1K1L1L1M1NY,1N1O1P1Q1QY.YI1RY.Y.1RY.Y.Y,1R1S1S1TYIYI1TY,1U1V1V1WZ)Z)YI1W1X1Y1YZ)1ZZ)1Z2#2$2%Y,Y,2%2&Y,2&Y,2'Y,Y,Y,2'Y,2'2(2)2)2*2+YKY,YKY,Y,2*YKYKYKYKYKY,YK2)Y,2*Y,2*2+Z)Z)2+2,Z)Z)2,2-2.Z#2.Y,Z#2/Z)Z)Z)2/Z)Z)2/20YM20YMYMZ)20212222YMYMYMY,Y,Y,2222232425Z#25Z#Z#25Z#Z#Z#2526Z#Z#2627YMYM2728292:2:2;Y?Y?2;2<Z'Z'Y?Y?Z'Z'Z&Z&2;2<YKZ&YKYKYKYKYK2;YKYK2;2<2<Z&YKYKZ&Z&2<2=YKYK2=2>YK2>2?Y-2?2@Y-Y-Z&Z&Y-Y-2?2@Y-Y-2@Z&Y-Y-Z#2@Z#Z#Z#2@2A2B2BY-2C2DY02DY0Y02D2EY0Y0Y?2EY?Y?2E2FZ'Z'2F2GZ'Z'Z'Z'2G2HY0Y0Y02HZ'Z'Z'2HZ'2H2I2JY-Y-2J2KY-2K2L2M2M2NY0Y02N2OY0Y0Y0Y/2OY/Y0Y02O2PY0Y02P2Q2QY+2RY+Y02RY/2SY/Y/Y+2SZ&2SZ&Z&2SYEYEYE2SY<Z&2TYEYE2TY<YEYEY<Y<Z&Z&2SY<2SY<Y<Y<YEYEY<YEYYYY2RYYYYY<2R2SY<Y<Y<2SY<Y<Y/Y/Y<2RY2Y2Y2Y2Y/2RY<Y<2R2S2SY<Y22TY2Y2Y22TY22TY<Y<2TY<2U2VY<Y<2VY/YEYEYE2VYEYEY<Y<2U2VY<Y<YGY<Y<Y<YGYGY<Y<Y<2TY<Y<2T2UY<Y<2UY<Y<Y<Y<Y<Y<2UY<Y<2U2VY<2VY<Y<2VZ(Z(Z(Y<Y<Z(Y<Z(Y<Z(Y<Y<Y<2TY<Z(Z(Y<Z(Z(Y<XVXVYGYGY<2RYGYGY<YGY<2QY<YGYGYGYGYQYGYG2PZ%2P2QZ%Z%YQ2QYQYQ2QYQYQYQYQYQZ%2QYQYQZ%Z%Y<2PY<Y<2PYGYGYGY<2P2Q2R2RZ%Z%Z%YG2RYGYGZ%Z%Z%YG2QYGYGYG2QYQYQYQYQYQ2Q2RYQYQ2RYQZ%WJ2RWJYNYNYQYQYNYNYN2Q2Q2RYGY)Y)WJY)Y)Y)VTY)Y)WJ2PWJWJX.X.VRVR2OX.VRX.VTVTVT2OVTVT2O2PVTVT2PVQVYVYVNVNX(X(2OX(2O2PX'X'2PW%W%W%W%W%W&W%2O2PWUWUW%W%2PWUWU2PWUWU2PX,X,X,WUWUWUX+WUWUWUX+2NX+X+X+WRWRX%X%2MTT2NTTTT2NTTTTTTTTTT2NTLTUTLTU2M2NTL2O2OTUU0U0TUTU2O2PTU2PUPUP2PV;UPUPTLTLTLU0TLU0U0U0TL2NTL2OTLU0TL2OU0U0U5U0TL2NTLTL2NU22OTLU0UPU0UPU02NU02OU0UPUPUP2N2OUPUPV;V;V;2O2OV;V;V;V;UPUPUPV;V;V;UPV;2MUPUPV;V;UPUPV;V;UPUP2KUPUPUP2KUPUPUPUPUKUPUKYB2JY>Y>Y>2JY>Y>2J2KY>Y>YBYB2KYBYIYI2KYIYB2KYBYBYIYIYBYBY>2JY>2KY>2KY>YBY>2KY>YBYIYIYBYBYIYIYB2JYIYI2J2KYIYI2K2L2LYM2M2NYI2NYIYIYMYM2NYM2NYMYIXRYIYIYI2N2NYMYIYMYIYMYIXR2MYMYMYMZ'2MZ'Z'YPYP2MYPYPYPZ'2MZ'2MZ'Z'2M2N2O2P2P2Q2R2SY/Y/Y+Y+Y+2RY+Y+YJYJYJ2RYJ2RYW2SYJ2SXRYWYWYWYW2SY+Y+2SY+2S2TYSYS2T2UYWY*2UY*Y*Y*2UY/Y/Y/2U2V2WYTY/Y/YTYTY/2VYTYT2V2WYTYTYSYTYSYTYTYTYTY*YTYT2UYTY/Y/2UY/Y/Y/2UY/2UYTYTYTYT2UYTYT2U2VYTYT2VY92WY9Y*Y*Y*Y9Y*2VY*Y*Y*Y9Y9Y92UY9Y*Y*YGYGYG2UWZWZY9WZYGYGWZWZY92SY92TY92TY9Y92T2U2VX#2VX#X#X#Y9X#Y9X#YGYGWZYGWZWZ2TWZYGYG2TYGYG2TYGVWX/VWX/VWX/X/2SX/VWVWX/VWVWVW2RVW2R2SX#X#2S2TX#X#2TX#X#X#X#VWX#2TVWVW2TVWX#VWX#X#WSWSVSVSWSWS2R2SVSVSX#X#VSVS2RVSVSVS2RVS2RWS2SWSVS2SVSVSWSWSVSWSVS2RVSVSWSWYWS2R2R2SVS2TWSWS2TWSVNVN2TVNWP2TWPVNVNVNVN2TVNVN2TWYWYW#W#W#2SVNW#W#VNVNW#W#W#W#2R2SVNW#W#W#W#2RW#W#2R2S2TWYWYWY2T2U2U2V2WW,WY2W2X2Y2Y2Z3#3$3$3%W#3&3&3'W#W#W,3'WS3(WS3(WSW,W,W,3(W,3(3)3*3+3+3,3-3.3.3/W#W#3/30W#W#VNVNW#W#3/WUWMWMWUWU3/WMWU3/30WMWU30WMWMWMWMWM30303132WTWUWUWU32WUWUWU32WU32WMWM32X+WMX+WMWMWM323233WTWTU>U>U>33U>TTU>UYU>32U>3333UYUYUYU>33XPV:3334V:V:V:34V:V:V:34V:U/TTTT34TT34TTUYUYTTTTUYTTUYTTUY33UYTTUYTTUYUYU/32UYUYU/U/UYTT31U/3132UUUU32TLTLTLTL32TLTLUPUP3233TLUPTLUPTLTLTL3232UPUPUPUPUP32UP32UP33UP33UPTLUPTLUPUPUP32YBYBYBYBYBS:3232YB33S:S:33S:S:S:S0S:33S0S033S033S0S0S0S033S034S0S0S034S034T'T'T'T&34T&Y9Y93435Y*35Y*Y*35Y9Y*XV35Y9Y*Y9WFW-WFWFW-34WF35Y9Y9W-W-Y9Y93435Y935363737W(W(W(W-W-37WF3738393:VZVZ3:3;3;3<3=W/3=W(3>W(3>3?VOVOW(W(VOVOW.3>S93?3?3@W63AY9Y93A3BY9Y9Y9W(Y93AW(W(W(W(W(3AW(3AVUVU3AY9W(W(3A3BVUVU3BVUVUVU3B3CVUVUWQVUWQWQX#X#3BX#3BX#VU3CX#X#3CX#3CX#X#X#VU3C3D3E3EX#3FX#3FX#VU3GVUVUVU3G3GX#3H3IVSX#X#X#3HVSX#X#VSVSVS3HVSVS3HVS3HVSX#VSX#X#X#W7VSVSW7W73F3GW7W7W73GW7W7W7W7X#3GW,3GW7W73GW7W7W7W7W7W73GW7W73G3HW7W93HW9W7W9W9W9W73GW7W7W73G3H3I3IW9W9W9W93IW93J3JW<3KW<W93KW9W9W93K3L3MW93MW93N3NW<W<W<W<W<3NW<WTWTWT3NWTY%X%Y%TMTMULULUU3LUUUUULUEUL3LTM3LTMUL3LULULULUE3LULUEUETLUE3LTLTLUE3LULUL3LUL3L3MUEUEUIULUI3M3MTLUEUETL3MXNUPT&S9T&3MS9S9S93M3MWQWQWQW@3MW@W@W@W@WQ3MWQWQWQ3MWQ3MWQWQVVWN3MWNWNWNWQWNWNWNW+W+X#X#WEX#X#3JW+3KW+W+W+WE3J3KWEWEWEX#3KX#3KXXWEWE3KW7X#3LX#3LX#X#W9W9W9W<W9W9W93KW9W<W<W<3JW<W<W<W<W<3JW:3JW:W<W<W<W:W<W<3I3JW<W<W:3JW:W:W:W:3JW:W<W<3JW<X$X$W<W<W<W<W<3IW)W)3I3J3JW<W)W)3J3K3LW)3L3MW<W)X$X$W<W<W<W<W<X-W)3KW)W)3KW<W)W<W)W)3KW<W)W<W)W)X-WUWUWU3IWUX-X-WUWUVXVXWUWUWU3HWUWU3HWUWUWU3HWUWUWXWXWXWXY$WXX%UFUFT>3FUFUFUIUIUI3EUIUIUH3EUH3FUHUH3FTHTH3FTHTAV%3FV%V5T+T+T+3FV3T,3FT,XFSASA3FSZSZ3FS=S9S9SHSH3EWQVMVMWQWQVMVM3DX-W)X-X-3DVXVXVXVXX-VXX*X*3C3DVX3DVXVXVX3DVXVXVXVXX*VXW0W0X*W03B3CWUWUUI3CUIU*TYV7TYV7V7V7V7UAT:T:3AT:3ATQTITITDTDTD3A3AV#TITIS=S=3AS4S=3A3B3CS=S=S=3CS<S<XFSBSBSBSBSVS-T#S-S-T#3@S.S.3@S.S.S.T#SYT#T#SYSYSKSKSYSKSKSKSMT#SM3=SMT$SMT$SYSKSKSKSK3;SKS@SKS@SKS@3:S@S@S@SKS@SKS@39SXSXSXSXSX39SX39SXSXSXS1S1S/S/S1S1S/S/S1S1S?S?S?S?36SUW<W<W<W'35VXVXVXVXVXWKWKVXWKVXWKX-VXX-VXTITITD3232S-S-S-S-S-S-S.S-S-S-S.S.30S.31SMSMSM31S.31S.S.313233SMT$T$T$33T$33T$XESKSKXRSQS@S@SQS@S331S3S3S3S331S331SOSOSOSOSOSO3131SG32SGSOSO32SGSGSWSWSW3132SGSWW>VXW>W>W>W>W431W431W4W4W>31W432W?W?WLW?W?31W?W?Y$W?W$31W?W?WCWCU+U+U=U+U+U+U+U=U#U#3.U#U#U#U#3.S7S7S73.S73.XRSNSNSJ3.SJ3.SJSJSJ3.SJSNSN3.SJSNSNS7S73.SJSOSGSO3.SO3.3/SISOSOSO3/SISISI3/S8S83/S8SOS>SOS>3.S>SISISI3.3/3030SWSWSWS>30S>S>30SWS>SWSWSW30SW30S>S>S>30WCWCWCUB30V$V$V$V$V$30V.30V.V.V(V(T=30V(V(30U@T=30T=T=30U@T=U@T=U@T=T=V(U#3/V(3/U#V(V(V(V(3/V(V(V(V(U@3.V(U@U@SN3.SNSOSOSO3.SOSP3.SPSP3.SO3/30S>S>SP30SPS6S6S6SPSPSP3/S6S6S63/SR3/SR30S630SRSRW4WCW4WCU=U=U=3/U=V,V,V,V,U<V,V,U<U<3-T5U<U<T5T53,TGTGTGTGTGTG3,TPTP3,V.TGV.3,V.TG3,TGV.V.T=T=T=SNSNT(T(SD3*SCSDSCSDSCSDSDSDSE3)S6S63)SRSD3)SDSDSDSD3)SDT53)T5T5T5T;T53)T/3)T/T/T83)T8T0T/T/T2T/T/T03(3)T0T0T03)T;T;3)T;3)3*T;T;T;3*T;TGT;3*T;T0T03*3+V.3+T0T0T0T0T0V.V.T0V.3*V.SC3*3+SESCSESESESCSCSC3*SESESE3*3*SSSSSSSESESSSSSESE3)ST3)XDXDXDXD3)XDXDT3T6T3T3T53(T53)T3T33)3*3*3+T73,T7T0T7T0T0T0T03+T0T0T5T5T0T03*T.T0T.T5T.T03)T.T.T5T.T5T.T03(3)UMUM3)UMUM3)UM3*UMT03*T03+T0T03+T0T03+T0UM3+UMUMUMV.V.V.3+V.V.UMUMUMV.UMUMV.V.3)V.3)UMT.T.UMUM3)UMUMUMT.T.3(SSSESEXCX:X?X:X:3'X:XDXD3'XBXBX:XB3'XBXDXD3'XBXDXDXBXBXD3&XB3'V,T5V,T5V,T5V,T5T5T5V,T5T5T.T53$3$XBX:XBV,V,V,T/T43#T4T43#T4T4T4T43#T4T4Y7Y73#3$Y7Y73$Y73$Y7Y7Y7YHYH3$YGYHYH3$3%YHYUYUYUY7Y7YGYGYGY=Y=Y=2Z3#X.X&3#3$X&X&3$X.X&X&Y43$3%Y@Y4Y43%Y@Y@Y@3%Y@Y@Y43%Y4Y43%Y4Y4Y'3%Y'Y'3%Y,3&Y,Y'Y'Y'3&3&Y,3'Y,YH3'YUYUYHYH3'YHY3Y3Y,Y,Y3Y3Y,3&Y,3&Y,Y,3&Y,Y,Y,Y3Y3Y,Y,Y33%Y3Y33%YUYUYUY,Z&Y,Z&Y,3$3%3&3&Z&Y,Y,Z&Z&3&Z&YLYL3&3'YLZ$Z$Z$YLYL3&YLYVYV3&3'YV3'YVYG3'YGYGYGZ&Z$Z&Z&Z&YEZ&YEZ&YEZ&Z&Z$Z$YEYEYEZ$YEYEYE2ZYEYE2Z3#YGYGY=YGY=Y=Y=Y=YNYNYNYN2YYN2YYGYXYXYGYGYXYXYG2XYGYGYXYNYX2XYNYN2XYNYG2XYGYG2XYNYGYGYNYN2XYGYGYGYNYNYGYGYG2WYXYNYNYNYN2VYNYNYN2V2WX.Y=Y=YNYNYN2VYNYG2VYNYNYNYNYN2VX.2VX.YNYNX.X.2VX.YNYGYGYGYN2UX.X.2UX.X.X.YGYGYG2U2UX.2VX.2VYGX.2WX.X.2WX.WIWIVNWIX.X.2V2WX.X&X&X&WHWHWHVYVYVYVNVYWHWGWHWHWGWGVYWG2RW=W=W=WGWGVYWG2QW=W3W3W=W32QW3V=2QV=U>2Q2RU>U>2RV=U>U>U>U>2RU>2RV=U>U>V=V=U>U>2QTETETETLTLTTTTUT2PUTUTTLTLUTTLV?2OTLTLTLTUTL2OV;V;2O2PTUTUUGTUTL2OTLTLUG2OTLTL2OUGTLUGTLTLTL2OUGTU2OTLV;V;TU2OV;V;2OV;UKUK2OUKUPUK2OUKUPUKUP2O2OU$U$U$Y6YIY6YIY6Y6Y62NY:Y:YIYIY@2MY@YIY.Y.2MY.2MY.YI2NY.2NY.Y.2NY'2O2PY.Y.2P2Q2Q2RYI2SY'Y'2S2T2T2UY.Y.2U2VY.Y.Y'Y'2V2WY'2WY'2X2X2Y2ZY,2Z3#Y'3$3$Y,3%Y,3%Y,Y,Y,Y'Y'3%3&3&Y,3'Y,3'3(3)3*Y,Y,3*Y,Y.Y.3*3+Y.Y.YIYI3*Y.YI3+Y.YA3+3,Y,Y,YAY,3+3,YIYI3,3-YIYIY,Y,3-Y,3-3.YIYI3.YIYIYIYIYIYI3.YIYIZ)YIYIZ)Z)3-YI3-YI3.3.YI3/YIZ)Z)3/Z)YIZ)YI3/YI3/YI3030YM31YMYIYI3132YMYM32YM3233YIYI33Y,343535Z&36Z&36Z&37Z&Y,Y,3738Y,Y,Y,38Y,3839YK393:YKYKY,Y,Y,YKY,39YKYK39YKY,YK39YKYKYKYI39YI3:3:Y,3;Y,3;3<3=3>3>3?3@Z)3@3AZ)Z)3A3BZ)Z)3BY,3C3DY,Y,Z#Y,3CZ#Z)Z)Y,Y,Y,Z#Z#Z#Z#3B3BYM3CYMZ)Z)YM3CZ)YM3CYM3CYMYMYMZ)Z)3C3D3DYMYMYM3D3EYMYMZ)YM3EYM3E3FY,3GY,Y,Y,3GY,Y,Z#Z#Z#Z#Z#YMZ#Z#YMYMY,3DZ#Z#Y,3D3EZ#YKYKZ#Z#YKZ#Z#Z#YMZ#YMYMZ#Z#YMYMZ#Z#YMYMZ#Z#3@3AYMY?YM3AY?Y?3AY?Z#Z#3AZ#Z#Z#Z#Y?YM3@3A3B3BY?3C3DYKZ&YKYKZ&Z&3CZ&YKYKZ#YKYKYK3BYKYKYK3B3CZ&Z&YKYK3B3CYKYK3CZ&3D3EYKYK3E3FYKYK3FY-YKYKY-Y-YK3EY-Y-Z&Z&Y-Y-3DZ&Y-Y-Z&Z&Y-Y-Z&Z&Y-Y-Z&Z&Y-Y-Z#3AZ#Z#3A3BZ#Y0Z#Z#Z#3B3BY03CY03CY-Y-Y-3CY-3D3EY-Y-3EY-Y03EY0Y03E3FY0Y03F3GY0Y03GZ#Y?Y?3G3HY?3I3IY03JY0Y?Y?Y?Z'3IZ'Z'Z'Z'Z'YPZ'Z'Z'YPYPY0Y03GY0Z'Z'YPZ'Y0Z'Z'Z'Z'Z'3E3FZ'Z'Z'3FY-Y-3FY03FY0Y0Y0Y-Y-Y-3F3FY0Y0Y03FY0Y0Y0Y-Y-Y0Y0Y-Y-Y0Y0Y-Y-3D3E3E3F3G3HY03H3IY/Y0Y0Y03IY03IY03J3JY0Y+Y+Y03J3K3LZ'Y+Z'Y+Z'Y+Z'3KY0Y03KY/3KY/Y/Y/Y/Y/Y+3KZ&YEZ&3KYEYE3KYEZ&Y<Z&Y<Y<Y<Z&Y<YE3IY<Y<Z&Z&Z&3IZ&Z&Z&Y<YYYYY03HYYYYY/3HYYYY3HYYY<Y<Y/Y/Y<Y<3GY<3GY2Y/Y/3GY<Y2Y2Y<Y<Y23G3GY<3HY<Y<Y<3HY<Y23HY2Y2Y23HY23IY2Y23IY23IY<Y/Y/3I3J3KY/3KY/Y/Y/YEY<Y<Y<3JYEY<Y<YEY<Y<Y<Y<YGY<Y<YGYGY<Y<3GYG3HY<YGYGYG3HY<Y<Y<3HY<Y<Y<Z(Y<Y<Z(Z(Y<Y<3F3GY<Z(3GZ(Y<Y<YRYRYGY<Y<Y<Y<YGY<3EYG3EZ%Z%YGYG3EYGYQYQZ%YQ3D3EYQYQ3EYQYQYQ3EZ%Z%Z%Y<Y<Y<YG3D3EYGYGYGYG3EYGY<Y<Y<3E3EYGYGYGYG3EZ%Z%YGZ%YGYGZ%Z%YGYGYG3CYQYQZ%YQZ%YQYQYQYQZ%YQYQ3AYQZ%Z%WJWJ3@X.X.X.Z%Z%Y)Y)3?3@Y)Y)WJ3@WJWJX.X.3@X.VTVTVT3@VTVT3@VQVT3@VQVQ3@VQVQVQ3@X(3AX(W3W33AX'W3W33AX'W3W%W%W%3@3AWUWU3AWUWUWUW%W%W%WUWUX,WU3@X,X,3@X,WUWUWU3@U>TTU>3@U>3@U>TTTETETTTTTTTLTLTLTUTUTU3>TUTUTU3>3>U0U1U0TUTU3>3?TUTUTU3?TUV;3?V;TUTU3?3@TU3@3AUP3AU0TLU03AU03BU03BU53CU5TLU3TLTLU5U5TL3BTL3BTLTLUPUP3BUP3BUPUPUPU9U9U93B3B3C3D3EV;UP3EUP3EV;3FV;3F3G3H3IV;V;3I3J3JUPUPUPYB3J3KY>YBYBY>3KYBYB3KY>YBYBY>Y>Y>3JY>3K3KYI3LYBYBYIYBYBY>YBY>YBY>YBY>YBYBYBY>YBYBYB3HYB3H3IYBYB3IYI3JYBYIYI3JYB3J3KYBYBYIYBYBYB3J3KYIYIYIYMYIYIYMYM3JYMYIYIYI3JYMYM3JYM3JYM3KYMYIYIYI3KYIYMYIYI3J3KYMYMZ'YPZ'Z'Z'YPZ'3JYPYP3JYPZ'3JZ'Z'YPYP3J3KYPYJYPYJZ'3JZ'Z'3JYJZ'YJZ'3JYP3K3KY+3LY+YP3LYPYPY+Y+YPY+Y+3KY+3LYJYJ3LYWY+Y+3LY+Y+Y+3L3M3MYW3NYWYW3NYWYWY+Y+3NYSY+3NYSYS3NYSYSYSYSYSYWYSYSYS3M3NYSYSY*Y*Y/Y/3MY/YT3MYTYT3MY/YTYTYTYTY+Y+Y/Y/YT3LY/Y/3LY/3L3M3NYTYTYTY*Y*Y/Y/Y/3MY/Y/3MY/YT3MYTYTYTY/YTYTY/Y/YT3LY/Y/3LY/YTYTYT3LY*3LY*3MY*3MY*Y*Y9Y9Y*Y93LWZWZWZWZX/3LX/Y9X/X/X/X/X/Y93KX/X/3K3LX/X/3LX/Y9Y9Y93LX#X#Y9X#WZWZWZVWVWYGVW3JYGYGYGVWX/X/3IVW3IVWX#X#3IVWX#X#VWVW3IVWX/X/VWX/3HVWX/X#VWX#X#X#VWVW3GVWVWVW3GVWWSWSVS3GWSWS3GWSVSVSX#X#VSVS3FVSWSWS3FWSVSWSVS3F3FWSVSWSVS3FVSVSWS3FWS3GWSWSVS3GWSWS3GWSVS3GVSVS3GWSVSVSVNVNWP3G3GVNVNVNVNVN3G3H3HWY3IWYVNVN3I3JW#W#3J3KW#W#3KW#3K3LW#W#VNVN3L3M3MWYWYWYVNWYWYWY3L3MW,W,WYWY3M3N3N3OWYWY3O3PW,W,WYW,3PW,WYWYWY3PW,3PW,W,3PW,W,W,WYWY3P3QWY3QWYWYW,3Q3R3S3SWYWY3T3T3UW#W#3UW,W#W#W#W#W,W,W,3T3U3V3V3WW#3XW,W,3XW,WSW,3XW,3XW,WSWSW,W,3XW,3XWYWYWY3X3YWYWYWYWY3YWYWYWYWY3Y3YW#WY3ZW#W#3Z4#4#4$4%W#4%4&W#W#W#4&W#W#4&4'W#W#VNVN4'4(VNVN4(4)WUWUWU4)WUWUWUWM4(4)4*WMWU4*WUWM4*WMWMWMWM4*WTWTWMWMWM4*4*4+WTWT4+WTWTWTWU4+WUWUWUWM4+WM4+WUWMWMWUWU4+X+WMWMWM4+WT4+WTWT4+WTWTWT4+UYU>UYU>UYU>4+4+4,U>UYUYUYU>UYU>U>V:V:U>U>4*4+U>U>V:V:4*4+V:V:4+4,4-UY4-TTTTTTUYTTUYTT4,TTUYTT4,U/U/U/4,U/U/U/UU4,UUUU4,TT4-TT4-TLTLTLTL4-TLTLTL4-TLU:4-UPU:UPTL4-TLUPTLUP4-UPUPUP4-UPUPUP4-4.TLUP4.UP4.UPTLUPYBYB4.YBYBYBS:S:YBYBYB4-YB4-S:S:S:S:S:4-4-4.S:4/S0S04/S04/S0S:S0S0T'S0S0S0T'S0T'S0S0S0T'S0T'T'T'T'T&T'T&4*Y9Y9Y9Y9Y94*Y9Y*4*Y*Y*Y*Y9Y*XVY9Y9Y94)W-W-4)W-4)4*WFWFY9Y9W(W(Y9Y94)Y9Y9Y9Y94)W(4)W(W(Y9W(W(W(W(W(4(W(4(WFWFWFVZ4(VZVZ4(4)VZVZVZVZVZ4)VZVZ4)W(W6VZW6W6VZ4(W6W6W6W6W64(W6W64(4)W64)W64*VZ4*4+W(4+W(W6W(4+4,VO4-W(W(4-W(W6W6W.4-4-W6W6W6W6W6W6W/4,W/W/VOW6VOW64,Y9Y9W(W(4+Y9W(W(Y9Y9Y94+W(4+W(W(W(VU4+VUY9Y94+Y9Y9Y9W(4+Y9Y9VUVU4*VUVUVUY9Y9VU4*Y9Y94*VUX#X#4*X#VUX#VU4*X#X#VUVUX#X#VUX#4(X#VUX#4(X#X#X#VU4(VU4)4)X#4*X#X#X#VUX#4)X#VUVUX#X#VU4)VUX#VUVUVUX#VUVUVUX#VUX#VU4&4'VU4'X#4(X#X#VSX#X#VSVS4'4(VSVS4(4)4)4*X#VSVSVSVSW7VSVSW7W74(WS4)4*X#W7X#X#4)W,4*4+4+W7W7W7W7W74+W9W7W7W9W9W74*W9W9W9W9W7W9W7W7W74)4)4*W7W74*4+4,W9W7W9W9W94+W9W9W9W94+W9W9W94+W9W9W<W<4+W<W<W<W9W<4*W<4+W9W<W<4+W<W9W9W94+W<W<4+W<W9W9W94+W94+W9W<W9W<W<W<W9W<W<W<WTWTWTX%TLTL4(TLUEUEULUETMTMTM4'TM4'TM4(UETLUE4(UE4(UEUETLTL4(TLULUL4(UI4(4)UEUETLTLUE4)UIULUIULTLTL4(UETL4(UPUPS9S9T&S9S94'S9WQ4'WQWQWQ4'4(W@VU4(WQWQWQWQVV4(VV4(VVWQVVVVWNWNWNW+WEW+4'W+4'W+W+W+4'W+WE4'WEWEWE4'W+W+W+4'W+4(WEW7W74(W9W9W94(W94(W9X#W9W9W9W94(W9W<4(W<W<W<W<4(W<4(W<W<W<4(W<W<4(W:W<W:4(WUW:W:W:W:4(W<W<4(W<W)W<4(W<W<W<4(W<W<W)W)W<W)W)W<W)W)W<W<4&W)4&4'W)W)W)W)4'W)W<4'W<W<4'W)W<W)W<W<W)W)W<W<W)W)4%4&4'4(X-WUX-4(WUWU4(4)WUWU4)WUWUWU4)4*UFUF4*UIULUL4*UIUHTH4*TH4*THTHTHUHTHTHTHTHTHTA4)V5V<V54)4)4*4+4,V3V3V3T,SA4+SASZSZSZS=4+WQWQ4+WQW)W)W)X-4*X*VXVXX*X*VX4*X*X*4*VXX*X*4*4+VXX*4+X*WU4+4,WU4,W14-4.4.U*UIU*T:T:TI4.TQTQTITI4-TITDTIV#V#TITIS4S4S44,S=S=4,S4S44,S=S=S4S=S=S=S=S=S5S54*4+S.S.S-S.4+S.SMT$SMT$S@4*S@S@SKS@SKS@4)SXSXSXS@SX4)SXS@4)SXS@4)SUSUSUX-VXX-VXTDTDTD4(S-S-SVS-S.SM4'SM4'SM4(SMSMT$SMT$S.SMS.S.SMSM4&4'SM4'4(4)S.SMS.S.T$T$T$4(T$4(T$T$S3S3S34(S3S3S34(SFSFSOSFSO4'SOSGSGSG4'SG4'SGSOSGSOSOSOSGSGSGSG4&4&SW4'SWW>W>W4W4W>W>W4W>W>W>4%4&4&4'W4W4W?W$W?W?W$W?4&W$U#U#T-4&U#U#V(U#S7S7SNS7S7S7S7SNSNSJSNSJSJ3ZSJSJ3ZSJ4#4$SJSJSNSN4#4$4%SJ4%SG4&SGSGSGSG4&SO4&4'SISO4'SO4(SI4(SISI4(S8SOS8SGSG4(SISISISI4(4(S8S84)S>4)S>S>SGSWSGSWSWSWS>4(SWSW4(SW4(SWS>SWSWS>S>S>WLWC4'WCUBV$V$V$V$4&V$TPV.T-V.V.V(V(4%4&V(V(4&4'4'4(T=T=T=4(T=T=V(U#V(V(U#U#U#4'V(V(U@4'V(V(4'V(SNSOSNSO4&SOSPSO4&SOSPSPSOSOSPSOSPSPSP4%SOSOSPSOS>S>SP4$SP4$SPSPS6S64$S64$S6SR4%SR4%SRSRS6S64%S6U=4%V,V,4%T1T1T5U<U<U<4%TGTG4%TGTPTPTP4%TGTGV.V.TG4$TGV.4$SPSDSDSESDSESES64#SRS6SD4#SDSDSDSD4#SE4#T1T5T5T04#T0T0T8T8T/T8T8T0T8T0T/3YT/T/3YT0T/T0T0T0T03YT;T;T03YT03YT0T03YT;T;T;3YTGT;TG3Y3ZT;4#4#V.V.V.4#V.V.V.T;4#T0T04#V.V.V.SCSC4#SESCSCSC4#SCSESESESESE3Z4#SE4#SE4$SESTSTSTX;X;X;XD3Z4#XDXDT3T34#T34#4$T5T54$T3T54%T3T34%T3T74%T7T7T0T04%T0T7T0T7T04$4%T.T.4%T0T.T.T04%T.T.4%V.4&UMT0UMT0UMV.V.4%4&T0UM4&UM4&UMUMUMT0T0T04&T04&T0T04&T0T.4'T0T0T0UMUMUM4&UMV.V.4&4'V.V.4'V.T0T0T.T.4&UMT.UM4&SSSESSX<X<XDX<XDXD4%XDX:XBX:XBXB4$XBXBXDXD4$4%4%XBXBXBT54%T5T5X:XBX:XB4$4%T4T44%4&T4T4T44&T4T4YU4&YUYU4&4'YU4(Y7Y74(Y74(4)Y7Y7YHYGYGYGYHYHYGYGYHYHYGYGX.4&X.X.4&X.X&X&X.X.4&4'X.X.X&X&X.X.X&4&Y44&Y@Y@Y44&Y@Y@Y44&Y@Y@Y@Y@4&Y@Y44&Y4Y4Y@Y@4&Y@Y'4&Y'Y'Y,Y,Y'Y,Y'Y,Y'Y,4$Y'Y,Y,Y'Y,4$Y,4$Y,Y,Y,YHYUYUYUYHYH4#4$Y3Y3Y34$Y,4$Y,Y,4$Y,Y,Y,4$YUY34%Y3YUY3Y3Y,Z&Y,Z&Y,Y,Y,4#4#Z&4$Z&4$Z&Y,Y,Z&Z&4$Z&4$4%Z$Z$YLYLZ$Z$YLYLZ$Z$YL4#YLYL4#YV4$YVYVYGYVYVYGYG4#YGYEYGYEYEY=Y=YGYGY=Y=YGYGY=YNY=Y=YGYGYGYXYXYXYGYXYXYNYXYXYNYN3TYNYGY=YGYGY=Y=YGYGYNYGYGYGYGYGYGYNYXYNYNYNYNX.3OX.YN3OYNX.YNYNYN3OYNYN3O3PYNYN3P3Q3QX.YNYNX.X.3QX.3QX.X.X.YG3QYGYGYG3QYG3RYGYG3RX.3RX.X.X.3R3SYGYG3SYGX.X.3SX.WOWOX.3SX.X.3S3TX&X&3T3UW=W=W=W=W=3U3UW3W3W3V=V=V=3UV=V=3UV=V=V=V=3UV=V=3UV=V=U>V=U>V=V=3T3UU>TETETEUT3TUTUTV?V?3T3UUGUG3UUGV;V9V;3UV93U3VV;UGUGTLTLTUTUUGUG3TUG3UTLTL3UTLTL3UTU3VTLV;V;TUTUV;V;3UTUUKUK3U3VUPUPUP3VUK3VUPUPU-U$U$U$Y6Y6Y6Y:Y@Y@Y@YIYIY.YI3SYI3SYIYIYIY.YIYIY.Y'Y.Y.Y'Y'3QY'Y.Y'Y.Y.3PY.Y.Y.Y.3P3Q3R3R3SYI3TY.3TYIYIY.Y.3T3UYI3UYIYI3UY'Y.Y.3U3VY.Y.Y'Y'3V3W3WY'Y.Y.3WY'Y.3XY'Y'3X3Y3Y3ZY.Y.3Z4#Y.Y.Y'Y'Y'4#4#4$Y'4%Y'Y'4%4&Y'Y'4&Y,Y,Y,4&Y,Y'4&Y'Y'Y'4&Y'Y'4&4'4(Y,4(Y,Y,Y,4(Y,Y,Y,Y'4(4)4*Y'Y'4*4+Y'4+Y'4,4,4-4.4/4/Y,40Y,Y.40414242Y,Y'434344Y.Y.Y'44Y.Y.Y,Y,44Y,YI44YIYI4445YIYI4546YIY.Y.Y.YIYIY.YAY.45YAYA45YAY.45464747YA4849YAYA49YA49Y,4:Y,Y,Y,4:4;YI4;YIYI4;4<YIYI4<Y,YIYIYIYIYIZ)Z)Z)Z)4;YIYIYI4;YI4;YIYI4;4<4=4>4>YIYIYIZ)Z)4>4?Z)Z)YIYIYI4>YMYMYIYMYI4>4>YMYMYMYMYM4>YMYI4>4?YMYIYMYMYM4>YMYMYMY,Y,YIYIY,Y,YI4=Y,Y,4=Y,YI4=4>4?4?Y,Y,Y,4?Z&4@Z&Y,4@Y,4AY,4A4BZ&Y,4BY,Y,Y,Y,YKYKY,YK4AYKY,Y,Y,4A4A4BYKYK4BYKYKYK4BY,4CY,Y,4C4D4EY,Y,Y,YKYKYKY,Y,Y,YKYKYK4B4C4DY,4DY,Y,Y,YIY,4DY,4DY,4EY,4EY,4F4GY,Y,4GY,4G4HZ)Z)4H4IZ)Z)Y,Y,Y,4IY,Y,4IY,4IZ)Z)Z)Z)4IZ)4J4J4KZ)4LY,Y,4LZ)Y,Y,4LZ)Y,Y,4LY,Z)4LZ)Z)4LZ#4MZ#Z)4MZ)4NZ#Z#4NYMZ)Z)Z)YM4MYMYMYM4M4NYMZ)Z)4N4OYM4O4PYMYMZ)4PZ)Z)4PYMYMYM4PZ)YMYMYMZ)YMYMYMYM4OYM4O4PYMYMY,4PY,4Q4Q4RZ#Z#Z#Z#4RZ#Y,Z#Z#Z#4QZ#Y,Y,Y,Y,4Q4RY,Y,Y,4RZ#Z#YMY?Z#Z#Y?4QYM4QYM4RY?Y?4RY?Z#Z#4RZ#YM4RYMYMYMYMYMZ'YMYMZ'4Q4QY?4R4SYM4SY?Y?4SY?Y?Y?Z&Z&YKYKYKYK4RYKYKYK4R4SYKYK4SYKZ&Z&4S4TZ&Z&YK4TZ&Z&4T4UYK4UYKYK4UZ&4V4WYKYKYK4W4WYK4X4YYKYKY-Y-YKY-4XY-Z&Z&Y-Y-Z#4WZ#Z#4W4X4Y4Z4ZZ#Y0Y0Z#4Z5#Y0Z#Y0Y0Y0Z#Y0Y0Y04YY-Z#Y-4YY-Z#4ZZ#4ZZ#5#5#5$Y0Y0Y-Y-Y05$5$5%Y0Y0Y-5%Y0Y05%5&Y0Y05&5'Y0Y05'5(Y0Y0Z#Z#Z#5(Z#Y?5(Y?Y?Y0Y?Y?Y?Y?Y?Z'Y0Y05&Y05&Y0Z'Z'Y?5&Z'Z'Y0Y05&Y0Z'5&Z'YP5&Z'YPYPZ'Z'YP5&Y0Y05&Y0Y-Y-5&Y-Y-Y0Y0Y0Y-Y-5%Y05%5&Y0Y0Y0Y-Y0Y0Y-Y-Y0Y0Y-5$Y-5%5%YYYYYY5%5&5'Y0YYYY5'YYY0Y/5'Y/Y05'Y0Y/Y0Y0Y0Y+Y0Y0Y05&5&Y+Y+Y+Y0Y05&Y0Y0Y05&Y0Y+Y/Y+5&Y/Y/5&Y/Z'Z'Z'Y+Y05%Y0Y0Y0Y/Y/Y/Y+Y/5$Y/Z&YEZ&Z&YEYEZ&5#YEYE5#5$Z&Z&Z&Y<Y0YY5#Y/Y/5#Y/Y/5#YYY/Y/5#5$Y2Y2Y2Y2Y/5$Y25$Y25%Y2Y<Y2Y2Y2Y<Y2Y<Y2Y<Y2Y2Y2Y<4Z5#Y25#Y2Y2Y25#Y25$Y25$Y2Y2Y2Y2Y25$Y/5$Y/Y/Y<Y<Y<5$Y<Y<5$Y/Y/5$Y/Y/Y<5$Y/Y/YEYEY<Y<YGYG5#YGY<5#Y<Y<5#5$Y<Y<Y<YRYRYR5#5$Z(Z(5$5%Z(Z(5%Z(Z(Z(5%YGY<YGYGYGZ%Z%YGYG5$YGYGYGYQYQYGYGYQYQYGYGYQYG4YZ%Z%Z%Y<Y<YGYGY<YGYGYG4WYG4X4YY<Y<Y<4YY<YG4YYGYGYG4YYGYGYGYQYQYQYQ4XYQYNX.X.X.Z%Z%Y)Y)4VY)Y)Y)X.4VWJWJX.X.X.4VVTVT4V4WVTVTVQVQVTVTVQ4VVTVT4VVQX(X(4VX(4VX(X(X(X'4VX'X'4VX'X'X'WU4VWUWU4V4WWUWUW%W%4W4XWUX,WU4XX,X,4XX,WUX+X+X+U>TT4WTT4WTTU>TTTUTU4WTUTUTUTU4WTL4WTLTLTUTU4WTUTUTU4WTUTU4W4XV;4X4YV;V;TUTUTU4YTUTU4Y4Z4ZV;TUV;TUTU4ZUPTLU0TLU0TLU0TLU0TLU0TLU0TLU5TL4W4WU5U5TLTLU4TL4WTL4WTLTLUPUP4WUP4WUPUPUPU9U9U9UPU94VU9U9UPUP4VUPU9U9UPUPU9UPUPUPV;UPV;4T4TV;4UV;4UV;4VV;V;4VV;V;UPUP4VUPV;V;UPUP4UUPUPUPV;V;V;4UV;V;4UUP4UUPUPUPYBYB4UY>4UY>Y>Y>YBYBY>Y>YBYBY>Y>YBYB4SYB4SYBYBYBYBYI4SYI4S4TYBYBYBYB4TYBY(4TY(Y(4TYIYBYBYIYI4T4U4UYIYBYBYBYIYBYBYIYI4T4UYIYI4U4VYI4VYIYIYMYMYIYIYM4UYIYIYI4UYIYIYMYMYIYIYIYM4TYM4TYMYIYMYIYIYIYMYM4SYM4T4TYM4UYMYPYPZ'YPYPYPZ'YP4SYPZ'YPZ'YPZ'Z'YPYP4RYPZ'4RZ'Z'Z'YPZ'4RZ'Y+YPYPYPYPYP4QY+Y+YPY+4PY+Y+Y+YP4PYPY+Y+Y+Y+YTY+YTY+Y+YJYJYJYWYJY+Y+Y+YWY+YWYWY+Y+YWY+YJYWYJYWYJYWYJYWYWYS4H4IY+Y+YS4IY+YSYSYSYSY+YSYSYSYSY*Y*YSYSY*Y*4EY/4F4GYT4GYTY/4GY/Y/Y/Y/Y/YT4GY/Y/4GY/Y/Y/Y/4GY/Y/4GYTY/4GYTYTY/Y/Y/4GY/Y/4GY/YT4GYTYTY/Y/YTYTY/Y/YTYTYTY9Y9Y94DY94EY9Y*Y9Y9Y9Y*4DY*4EYGYGYG4EX/X/Y9X/Y94DY9Y94DY9Y9Y9Y9X/Y9Y9X/X/4CX/Y9X#4C4DVWYGVWVWVWVW4CVWVWVW4C4D4DVWX#X#VWVW4D4EX/VW4EVWVWVWX#X#VWVW4DVW4DWSVSVSWSWSVSVSVSVS4CVS4CWS4DWSWSWSVSWS4CWSVSWSVSWSVS4CWSWSWSWYWS4BWSWSWSWSVSVSWSWSVS4AVS4AVS4BWSWS4BWSVNVN4B4CWPVNVNVNVN4BVN4C4C4DWYWYVNVNVN4D4DWYWYWYVNVNW#W#VNVNW#W#W#W#W#4BW#W#4B4CW#W#WY4CW#4CW#W#VNVN4C4DVNWYVNWY4CWYWYWY4CWYWYWYWYWYWY4CWYWY4CWY4C4DW,W,4D4EW,W,WYWY4E4FWY4FW,W,4F4GW,W,4G4HW,W,WYW,W,W,WYWYWYW,WY4FW,W,4FW,W,W,WYW,W,W,WYWYW,WY4D4EWYWYW,4E4F4GW,WY4G4HWYWY4HWY4HWYWYWYWYWY4H4IW,W,W,4IW,W,4I4JW,W,W#W#WYWY4I4JW#4JW#W#4JW#W#W#4JWY4KW#4KW#4LW#4L4M4N4OW,W,WSWSWSW,WSW,4M4NWSWSW,W,W,4NW#4NWYWYWY4NWYWYW#4N4O4PWYWY4PWYWY4P4QW#W#W#W#4Q4Q4RWYWYW#W#4R4SW#W#4S4TWYWYWY4TWYWY4TWY4TWYW#W#4T4U4V4W4W4XW#W#4X4YW#4ZWY4Z5#W#5#W#W#W#W#5#W#W#5#W#W#W#W#5#W#W#5#W#W#W#WUWU5#5$WUWUWU5$WUWM5$WMWU5$WMWMWU5$WUWMWUWU5$WMWMWMWT5$WM5$WTWTWM5$5%5&WMWMWTWTWMWT5%5&WUX+WU5&WU5&WMWMWUWU5&WMWUWUWUX+WMWT5%WTWM5%WTWTWM5%5&WTU>UYU>UYUYUY5%UYU>5%U>U>5%UYUYUY5%5&V:V:5&V:V:V:U>U>V:5&U>U>5&5'U>5'V:UY5'UYUYUY5'UYU/U/5'5(5)5*UYTTUYTT5)5*U/U/5*5+U/U/5+5,UU5-TTTT5-TT5-TTUUUU5-TLTTTLUPUPTLUPTLTLU:U:U:UPU:U:TL5*UPUPTLUPUPUPTLUP5)UPTLUPTLTLUPUP5(UPTLTLTL5(TL5(TLTL5(YBY>YBYBYB5(YBYBS:5(S:5(S:S:S:S:S0S:5(S0S05(S0S:S0S:S:S0S05'S05'S0S:S0Y9Y9Y*Y*Y9Y9Y*Y*Y*Y9Y*Y*Y9Y9Y9Y*W-W-5#5$WF5$WFWFW-W-WFWFY9Y95#W(Y95#W(W(Y9Y9W(Y94ZW(W(W(W-4ZWFWF4Z5#VZVZ5#5$VZVZ5$5%VZW(VZVZVZ5%VZVZ5%W(VZ5%VZW6W6W6W6W/5$5%W/W/W6W6W6VOW6W/5$W/W6W/W6W6VZW(VZW(VZVZ4Z5#W65#W6W6W6W(VOVOW(W(VO4ZVO4ZVOVO4Z5#VOVO5#W65$W6W.5$S9W6W6W/5$W/5$VO5%VOY9Y9Y9W(Y9Y9W(5$W(W(W(5$W(5$VUVUY9Y95$Y9Y95$VUVUW(VUW(VUVU5#VUVU5#VUVUVU5#X#5$X#X#X#VUX#VUX#VUX#VUVU4Z5#VUVUVU5#VU5#VUVUVUX#5#X#5#X#VUX#VUVUVU5#5#5$VUVU5$5%VU5&VUVU5&VUX#X#5&X#VUX#VU5&VSVSX#5&VSVS5&X#VSVSX#5&VSVS5&VSX#5&X#X#5&VSVSVSWSWSW7WSW75%W7W75%W7W7W7W,W,5%W,W75%W7W75%W,5&W7W7W75&W75&W95'W95'W95(W9W7W9W7W9W75'W7W75'W9W7W9W7W7W75'W7W7W75'W75'5(5)5)W95*W9W9W<W95*W95*W9W9W9W<5*W<W9W<W9W<W9W<W9W95(W<W9W<W95(W95)W<W<5)W<W9W95)5*5*W<W9W<TLTL5*5+TMTMULTMULUL5*UL5*ULTMUL5*TL5+TL5+TL5,5-TLTLUETLUI5,UIUI5,TLUE5-TLTL5-TLUE5-UE5.TLTL5.UETL5.UPUPS9S9S9WQ5-WQWQWQVU5-W@VU5-X#VUVUW@5-WQWQWQWQWQVVWQVVWQVVW+WEW+WEW+WEW+5*W+5*W+5+5+WE5,WEWEWE5,W+5,W+W+W+W+W+W+WEX#W9X#W9W9W95*W95*W9X#X#W9W9W9W<W9W9W9W<W<W<W<5(W<5(W<W:W<W:W<5(W:W:5(W:WUWUW:5(5(5)W<W<W<W<W)W<W<W<W<W)W)W)W<W)W<W<W)W<W<W<W)W)W<W)W)W)W)W)W<W<W<4ZW<W<4ZW)W<W)W)W)W)4Z4ZW<5#W<W)5#W)W)5#W<5$W<WUWU5$5%WUWU5%5&WUWU5&5'WUWU5'WUWUWU5'WX5'WUWXWUT>T>T>5'5'5(UIUIUHTHUHTHUHTHUHTH5&THTATAV<V<V5V5T+T+T+5%T+T+5%UCUCU?U?U?5$V1V1V1SASZ5$SZSZSZS=S=WQWQWQVMX-X-4ZX-X*4ZVX5#X*5#5$VXVX5$VX5%X*X*5%X*VX5%VXVXWU5%WUWU5%5&5'5(5(W1W1W1W1W1WUWUW1W1WUWUUIUIUIU*T:T:TITITD5$TD5%S4S45%S4S=S4S4S4S45$S4S4T#T#S.S.T#T#S.S.S-S-S-S.S@4YS@S@4YSX4ZSXS@4ZS@S@4Z5#S@S@S?S?S?SUTDTI4ZTIS.SMS.SMS.SMS.SMS.SMS.S.4WSMS.4XSMSM4XSM4XT$SMT$SM4XSMSM4XT$T$T$T$4XT$4YT$4YT$4Z4Z5#SJSJS3S35#5$SO5$SOSGSGSG5$SGSO5$SOSOSG5$SGSWSGSGSGSW5#SWSWSWW>W>5#5$W>W>5$5%5%WVWVWVWVWV5%5&W$5&W?W?5&U#5'U#SJS75'S7SNSNSJSJSJSJSNSJSJSJSJSNS75$S75%5%5&SJSJS7SJSJSJSOSG5%5&5&SGSOSGSGSGSISGSOSO5%SISO5%SOSISOSI5%SI5%SISOSOSISISIS8SO5$SOS8SGSGSG5$SIS>SIS>5#5$S8S8S85$S8S85$S>S>S>SWSWS>5$SWSW5$SWS>S>5$SWWLWCWCWCV$5#V$TPT=V(V(V(V(V(4ZV(T=V(T=4ZV(U@U@U@V(4YT=T=4YT=T=T=4YU@T=T=U#V(V(V(V(V(U@U@V(V(U@U@4VSOSPSPSOSPSPSPSP4USPSPS>S>SP4U4US6SPSPS6S64US64US6SRS6S6S6SR4USR4USRSR4US64V4WU=V,V,V,4VT1T1T1U<4VTGTGTGTG4VTGTPTP4VTPTGTGTG4V4VSPSDSPS6S6S64VSDSDSD4V4VSESESET1T1T5T1T0T;T0T0T/4TT/T/4TT0T/T0T0T0T04TT0T;T04TT04TT0T04TT;4UT;4UTGT;TGT;T;T;4UV.V.4UV.4UV.T0T0T04UT0V.T0T04U4VT;T;4V4WT04WV.V.SCSCSCSESCSCSC4VSE4VSSSS4VSSSSSSSESE4VSS4VSSSSSSX;4VXDXD4VXDXDXDT3T3T5T3T54UT5T5T3T34UT5T3T3T54U4U4VT5T5T3T34VT5T0T0T7T0T0T04U4VT04VT0T.4V4WT.4XT0T0T.T.4WT.T.T.T0T04WV.4WUMUMUMUMV.UM4WV.V.4WV.T0T0T04W4WUMT0UMT04WT0T0T04WT04XT0T04XT0T0T0T.4XUMUM4XUMV.V.V.4XV.V.4XV.4XUMUMUMUMUMT.4XSESSSE4XXDXD4X4YXB4YXBXBXDXD4Y4ZXDXD4ZXBXB4ZXBXB4ZT.T5T54Z5#T4T4T/T/T4T4T/4ZT4T44ZT/T4T4T/4ZT4T4YUY7YU4ZY7Y7YUYUY7Y74YY7YU4YYUYU4YY7YUYUYUYUYUY7YU4XY7Y7X.X.X.4XX.X.4X4YX&4YX&X&4YX&X&X&4Y4ZX&X&Y4Y44Z5#5#5$5%Y@5%5&Y@Y@Y@Y@5&5'5'Y4Y4Y4Y@Y@5'5(Y,Y,5(Y,Y'Y'Y,Y,5'Y,5(Y,5(Y,5)Y,YHYH5)5*YHYH5*YHY3Y3Y,Y,Y35)Y,Y,5)Y,Y,Y,YUYUY3YUY3YUY35(Y,Y,Y,Z&Y,Z&Y,Z&5&Z&Z&Z&Y,Z&Y,5&Y,5&Y,Z&YLYLZ$Z$YLYLZ$5%YV5%YLYLYVYV5%YV5%YLYLYL5%5&5'YG5'5(YXYNYNX.X.X.YN5'YNX.YNYNYN5'YNYN5'5(YNYN5(YNYNYN5(5)5)X.5*X.X.X.YNYNX.X.5)X.YNYN5)X.5)5*YGYGYGYGYG5*YG5*YGX.YGYGYG5*5*X.X.X.YG5*X.X.YGYGX.YGYGYGX.5)X.X.WO5)X.X.X.X&5(5)X&X&5)X&X&X&WGWGW=5)5)WGW=W=W35)W3W3W=W=W=W3V=V=V=5(V=V=5(V=V=V=V=5(V=V=5(5)V=V=V=5)V=V=5)V=5)TLUT5*5*5+V?TL5+TLTLTL5+UG5,5-5-V9V;5.5.V;V;V;5.5/V;V;UGUG5/UG5/50TLTLTLUGTL50UGUG50TU50TLTLTL5051TUTUUKUKUK51UKUK51UKUPUKUPUKUKUK50UKY.Y.YI50YI50YIYIY.Y'Y.50Y'Y'Y.Y.Y.Y.5/505051YIYI51YIYIYIY.Y.5152Y.Y.52Y.5253YI54Y.Y.Y.545455YIYI55Y.56Y.56Y.YIYIY'Y'56Y'Y'Y'56575758Y.Y.Y'Y'5859Y'Y.595:Y'Y'Y.Y'Y'Y'Y'Y.Y.Y'Y.Y.57Y.Y.Y.Y.Y'Y.57Y.57Y.Y.Y'Y'57Y.Y'57Y.Y.57Y'5859Y'Y'Y,Y,Y'58Y'Y'Y,Y,Y'Y,Y'57Y'Y'Y'57Y,Y,5758Y,Y,Y'Y'Y,Y,Y,Y,57Y,Y'Y,Y'Y'Y,56Y'57Y'Y'Y'57Y'5758Y,Y'Y,Y,Y,Y,Y,57Y,57Y,Y,Y,Y'57Y'Y'5758Y,Y,58Y,Y,Y,58Y.Y.Y.Y'58Y.59Y'Y'Y'59Y'59Y'5:Y'5:Y'Y'Y,Y,5:Y,Y'Y'Y'5:Y,Y,5:Y,5:5;Y,Y,5;Y,5<Y,5<Y'5=Y'Y.5=5>5?5?Y'Y'Y'5?Y'5@5A5A5BY'5C5C5DY.5EY'Y'5EY'5E5FY'Y,Y,Y,Y.Y,Y.Y.YIYIY.Y.YI5DY.Y.5DY.Y.5DYIYIYIY.YIY.Y.YAY.5CYAYA5CYAY.Y.Y.5CYI5CYIYI5C5DYIYI5DYAYAYAYAYA5D5EYAYAYA5EYAYA5EYIYAYA5E5F5FY,YAY,YI5FYI5GY,Y,5GY,5GY,YIYI5G5H5IYI5I5JYIYIY,Y,5J5KZ)Z)YIYIYI5JZ)Z)Z)5JYIYI5J5K5LZ)5L5MYIYI5MZ)Z)5NZ)YI5N5O5O5PYIYIZ)Z)YIYIZ)Z)YIYIYIYIYMYMYIYMYI5MZ)Z)YMYMYMYM5LYMYIYI5L5MYIYMYIYI5LYMYMYMY,5LYIYIY,Y,5LY,YI5L5M5NYIYI5NY,5NY,Y,Y,5NY,Y,Y,Y,Z&5NZ&5NZ&5OZ&Y,Z&5OZ&5OZ&Y,Y,Y,5OY,5PY,Y,Y,Z&5OZ&5PZ&5PYKYKYKY,Y,Y,5PY,Y,YKYKY,Y,YKYKY,YKYKYKY,Y,5MY,YKY,YKYKY,5L5MZ&Y,5MY,5N5NZ&Z&Z&YIYIYI5NYI5N5OY,YI5OYI5P5P5Q5RY,YIYIYI5RYI5RYIYIYIY,5RY,5RY,YIY,5RY,YI5SY,Y,5SY,Y,Y,Y,5S5SZ)Z)Z)5S5TZ)Z)5T5UZ)Z)Z)5UZ)Z)Y,Y,Y,5UY,Y,5UY,5U5VZ)Z)Z)Y,Z)Z)5UZ)Z)Z)Y,Y,5UY,Y,Y,5UY,Z)Y,Z)Z)Y,Z)Z)Z)5S5TZ)Z)Y,Y,Z)Y,Y,Y,Z)5SY,Y,Z#Z#5RZ#5SZ#Z)Z#Z)5S5SZ#5TYZZ#Z#Z#YMZ)Z)Z)YMZ)Z)YMYMZ)Z)YMZ)Z)Z)Z)YMZ)Z)Z)5O5OZ)5P5QZ)YM5QYMZ)Z)Z)5Q5QYM5RYMYM5RYMYMZ)5RYMYMZ)Z)Z)5RZ)YM5RYMY,Y,Y,5R5RZ#Z#Z#Y,Y,Z#Z#5QZ#Z#Z#Y,Z#Y,5QY,5QY,Z#Y,Y,Y,5QY,Y,5QZ#Y,Y,Y,Z#Y?Z#Y?Y?YMYMYMY?5NY?5O5PY?Y?5PY?Z#Z#Y?Y?YMYMYM5OY?Y?Z'5O5OY?Y?Y?5O5PYMYMY?Y?5P5QYMYM5QYM5QY?5R5SYKYKZ#YKYKYKYKZ#YKYKZ#5QYKYK5QYKZ&Z&YKYKZ&YKYKYKZ&Z&YK5OZ&Z&5O5PZ&Z&5PZ&YK5PYKYK5PZ&YK5QYK5QYKYKZ&Z&5QZ&YKYKYKY-YKYKYK5P5PY-Y-Y-5PY-Y-Y-YKY-Y-Y-YK5OZ#Z#Z#Z#Z#5OZ#Z#5OY0Z#Y0Z#Z#Y0Y0Z#Z#Z#Z#5MZ#Z#Z#5MZ#Z#5MY0Y05MYKZ#YKZ#5MZ#5N5N5OZ#5PZ#5PZ#5QZ#5QZ#Y05QY-Y0Y0Y-Y-Y0Y0Y-Y-Y05PY05PY0Y0Y-Y-Y0Y0Y-Y-Y0Y0Y-Y-Y05NY-Y-5N5OY-Y-5O5PY-5PY0Y05PY-Y0Y05P5QY0Y0Z#5QY?Y?Z#5Q5R5SY0Y05SY05SY0Y?Y?Y?Y?Y?5SY0Y05SY0Z'Z'5S5TZ'Z'5TZ'5TZ'YP5UY0Y05UY0Y-Y-5U5VY05VY0Y0Y-Y0Y0Y05UY0Y0Y0Y-Y-Y-5UY-YYYYYYY-YY5TYYY-Y-Y-5TYYYY5T5U5U5VY0Y0YYYYY0YYY0Y/Y/Y/Y0Y/Y/Y/Y0Y0Y05SY05SY+Y+Y0Y05SY0Y0Y0Y05SY+Y/Y+Y+Y/Y/5R5SY05SY0Y/Y+Y+Y+Y/5RYEZ&5SY<5SY<Y<5SY<Y<Y<Y0Y/Y/Y/YYYYY/5RYYYY5RY/Y<Y<Y2Y2Y<Y<5QY<5QY2Y/Y2Y<Y<Y2Y2Y25PY2Y2Y2Y<Y2Y2Y<Y<Y2Y<5NY<5OY<Y<Y<Y25OY25OY25PY25PY2Y<Y2Y2Y<Y<5OY<5PY<Y<5PY<Y/5PY<Y/Y/5PY/Y/Y/Y<5PY/Y/YGYGY<5P5PYGY<YGYGYGY<Y<YGYGY<Y<Y<Y<Z(Z(Y<5MZ(Z(5MZ(Z(Z(5M5NZ(Z(Y<Y<Z(Z(YGYG5M5NYGYGZ%Z%YQZ%Z%Z%YGYGY<YGY<5K5L5MYGYG5MYGY<YGYGYGY<YG5LYGYGYGYG5LYQYQZ%Z%Z%Z%5KY)X.X.WJWJX.X.VRVRVTVTVQVQVTVTVQVQVT5GVQVQ5GVQVQVQVNX(VN5G5G5HX(X(5HW3X'X'W35H5I5JW%W%WUWUW%W%WU5IW%W%5IW%WUW%WUWUW%W%WUWUWU5GWUWU5G5HWUWUU>U>U>5H5H5IU>U>TUTU5I5JTUTU5J5KTL5KTL5LTUTU5L5MTUTU5M5NTUTU5N5OTU5OTU5PTUTU5PV;TUV;V;V;TUTUTU5OTUTU5O5PTUTU5P5QTU5QTU5RTUTU5RUPTLU55RU5TLU5U5U5TLU4TLU4TL5PTLTLU0UP5PUP5PUPU0UPU9UPU95P5PUPU9U95PUP5QUPTUTUTU5QTU5Q5RV;5RV;5SV;5SV;V;V;5SUPV;V;5SUPV;5TV;UPUPUPV;V;V;5SV;UP5SUPUP5SUPUP5S5TY>Y>YB5T5UY>Y>Y>Y>5U5UYBYBYBYBYBYB5UYB5UYBYB5UYIYBYBY>YB5UYBY(5UY(Y(YIYIY(Y(YI5T5U5VYIYI5VYIYB5VYBYBYIYI5V5WYIYIYBYBYIYI5V5WYIYI5WYIYIYMYIYMYMYM5VYMYIYI5V5WYIYM5WYM5WYMYIYMYMYMYM5WYM5WYMYMYMYM5W5X5X5YYMYM5Y5ZZ'6#6#YPZ'6$6$YPZ'Z'6$YJZ'6%YPYPYP6%YPYPYPY+YPY+YPY+YW6#YW6$6$YSYSYSY+Y+YSYSY/Y/6#Y/Y+6#Y+Y+6#6$Y+Y+YTYT6$Y/YTY/Y/Y/YTY/YTYTY/Y/5Z6#Y/Y/6#6$6$YTYTYT6$YTYTYTY/Y/Y/6$Y/Y/YT6$6$YTYTYT6$Y96%Y9Y*6%Y*6&Y*Y*Y*Y9Y*Y9Y*Y9YGWZYGWZX/X/Y9Y9X/X/Y9Y9X/X/Y9X/Y9Y95X5YX#X#5YX#VWVW5YVWVWVWX#X#5XVWX#X#X#5XX#X#VWVWX#X#VWVW5W5XX/X/5XVWVWVW5X5YWSWSVSVSX#VSX#X#5WWSVSVSVSVSVSWS5VWS5WWSVSWSVSVSWSWS5VW,5VWSVS5WWSWS5WWSVS5WVSVS5WWSVSVSWP5WWPWPVNVNWP5WVNVNVN5WWY5WWYWY5W5X5YWY5Y5ZWYWYVNWYWYWY5Y5ZWYWYW#W#W#5ZW#W#5Z6#6#WYWYWY6#W#WYW#VNVN6#6$W#6$W#W#VNVNW#W#6#6$WYWYVNVNWYWYWYWYWY6#WYWY6#W,W,6#W,W,WYWYW,W,WYWYW,W,WYWYW,W,WY5XWY5Y5YW,W,W,WYWYWY5YWYWY5YWYWYWYW,5YWY5Y5Z6#6#W,6$W,WYWYWY6$WYWYW,W,W#W#WY6#W#W#6#WYW,W,W,6#W,6#W,WY6#6$WYWYW,WYW,W,WYWY6#6$WYWY6$WY6$WYWYWYWYWYWY6$WYWYWY6$W,W,W,W#W,W,W#W#5Z6#W#W#W,6#W,W,6#6$6%W#W#W,W#6%W,W,6%6&WYWY6&W,6&W#W#W#6&W#6'W#6'W#WYW#WYWYW#6'W#W#6'W#W#6'W#W#6'W#W#W#WS6'WSWS6'W,WSWSW,6'W7W7W#6'W#WY6'W#WYW#W#W#6'6(WY6(WYWY6(6)WYWYWYWY6)WYWYWYWYW#WYWY6(6)W#W#6)6*WY6*WYWYW#W#6*W#W#6*WYWY6*W#WYWYW#W#6*6+W#W#WYWYWYWYWYW#WYWYW#WYWYWYW#6(WYWYWY6(WYWY6(6)WY6)6*6+6+W#W#W#6+6,W#W#6,W#W#W#6,WYW#6-6-WY6.W#W#6.W#W#WYWYW#W#6-W#W#W#6-6.W#W#W#6.W#W#6.6/W#W#VNVN6/60VNW#60W#WU60WUWM60WUWMWMWU6061WM61WMWMWM61WM62WMWUWMWUWMWU61WMWM61WMWT6262WT63WTWMWMWM63WM63WTWT63WTWTWTWM63646565WTWTWTWUX+WUX+WUWUWU6464WMWMWMWM64WMWMWMWM64WMWMWM64WTWT64WTWT64UY65UYU>65U>6666UYUYUYU>66V:V:6667V:V:6768V:V:U>68V:V:6869V:V:696:V:V:U>U>6:6;U>UY6;UY6;UY6<6=TTTTUYUYTTTT6<TTUY6<TTTT6<TTTTTTUYUYU/6<UYUY6<6=UYUYU/6=UYUY6=U/TTTT6=6>TTTT6>TT6>6?UUUU6?TTUU6@UU6@UUUUTTTLTTTLTLUPTLUPTLUPTLUPUPUPUP6=TLTLTL6=TLUPTLUPY>6<Y>6=YBYBY5Y5S:S:6<6=S:S:S:6=S:6=S:S:S0S06=S0S:S0S:S:S:S0S:S0W-W-6;6<W-W-6<W-6<W-WFWF6<6=W(W(Y9Y9Y96=Y9Y96=Y96=W-WF6>W(W(VZVZ6=W(VZVZ6=W(VZVZW(W(VZVZVZW(VZ6<W(W(6<W(VZ6<6=W(VZW(W(W(VZW66<W6W6W6W/W/W6W6W/W66:W6W6W6VZVZVZW6VZW(W6W(6869W66:W(W(6:6;VO6;VOVOW(W(VOVOW(W(VOW(69W6W.W.69W6W6W669W6W.W6696:W/W/W6VO6:VO6:VOVOVOY9Y9W(6:W(W(W(6:W(6:VUVUY9Y96:W(Y9Y96:VUVU6:VUVU6:Y9VUVUX#X#VUX#VUX#VUX#VU68VUX#68X#X#X#VUVUVU68VU68VUVU68X#X#X#68X#VUX#VU68VU69X#X#69X#X#X#696:VU6:VUVUX#X#6:X#6:6;VUVUVUVUW@6;6;X#VU6<X#X#6<X#VSVSX#X#VSVSX#X#VS6:X#6;VSVS6;VSX#6;X#X#6;VSVSVS6;6<W76=WSWS6=W7W,W,W76=6=6>W76?W,W,6?W,6?6@W7W76@W76AW76AW96B6CW76CW7W7W7W7W76CW7W9W9W9W76BW7W76B6CW76DW7W7W7W96CW7W9W96CW9W9W9W7W7W76CW9W96CW9W9W96CW9W7W9W7W9W9W<W9W9W96AW9W9W9W96A6B6BW<W9W<W96BW9W9W9W96B6C6CW<W<W<W9W9W96CW9W96CW<W96CW9W<UUTLUUUUTLTL6BTLTMUL6BULULUL6BULTLTL6BTL6BTLUEUETL6BUE6CUE6CUEUE6CTL6DTLUIULUIUITLTLUE6C6CTLUEUETLTLUEUETLTL6B6CUE6CUEUE6CTLUEUE6CTL6DUPS9WQS9WQVU6CVUVU6CX#VUVUW@WQWQWQW+WEW+W+W+W+W+6AW+6AW+W+W+WE6AWE6A6BW+W+6B6CW+W+WE6CW+W+W9W9X#6CX#6CX#X#W<W<W<6CW<6CW<W:W:W:W<W<W:W:6BW:W:6BW:W:W:W:W<W:W:W:W:W<W)W)W<W<W)W)W<W<W)W)W)6>W)6>W)6?W)W<6?W<W)6?W)W)6?W<W<W<W)W<W)W<WUWUWUX-6=X-X-X-WUWUWU6=WUWU6=6>WUWU6>W1WUWUW1W1WUWUW1WUWU6<6=WXWUWUWXWXT>T>T>6<UI6<UIUI6<UIUIUI6<6=TATAT+6=UC6>UCUC6>UCU?UCU?V1SASZ6=SZX-6=6>VXX*X*6>6?VX6?VXX*X*X*6?VX6?6@6AVXX*X*VX6AVX6AVXVX6AX*6BX*VXVXVX6BWUWUWU6BWU6BWU6CWUWUWAWUWU6BWUWU6BWUWUWU6B6CW1W1TD6CTD6DTDTITDTIS4S4S=S=S46BS4S4SXSXS@6BSXSX6BSXS@SXS@SX6ASXS@S@S@6AS@S@6ASX6BSXTDTDTD6BS.SMS.6B6B6CS.S.6CSM6DSM6DT$SMSMSMSMSM6DSMSM6DT$T$SKT$6D6DSK6ESK6ESK6FSKSKSK6FSKS3S3S36FS3S36FSJS3S36F6G6GSO6HSO6HSGSGSGSGSGSO6H6HSG6I6JSGSGSG6JSGSWSWSWW>W>W>6IW>6I6J6K6KW>6L6MW>W>6MWVW>WV6MWVWVWVWVW4WVW4W4W46KW$6LW$U#U#T-U#T-6KT-T-SJ6KSJ6LS7S7S76LS7SJSJSJS7S76KSJS7S7SJSJSOSOSO6J6JSGSGSGSO6JSOSOSOSISISISO6ISOSISOSISO6ISO6ISOSI6IS86JS86JSISISIS8SIS8S8SI6ISIS8S86IS8S>6I6JS>S>S>SWS>6JSWSW6JSWS>6JS>S>6JTP6KTPV(V(V(6KT=V(T=6KV(V(V(6K6K6LT=T=6LU@T=T=6LSO6M6NSP6NSPSP6N6OSP6PSP6PSPSPS6S66PS6SRS6S6S6S6S6S66OS66O6PSRS6S6S66P6PSRSRSRSRS6SRSR6O6PT1T1U<6PTGTGT;TG6PTGTPTP6PV.TGV.TGV.SPSP6O6PS66PS6S6SRSR6PSRSE6PSESET/6PT/T/6PT06QT0T06QT06R6RT;6S6TT06TT0T0T;T;6T6UT06UT0T;6UTGT;6VT;6VT;T;V.V.6VV.6V6W6XT0T06X6YV.T0T0T06Y6YV.6ZV.T;6ZT0T06ZT;7#T;T07#V.V.SCSESCSESESESS6Z6ZSESSSSSESESE6Z6ZSSSSSSX;6ZXDXD6ZXDXDXDT3T36Z7#T57#T5T5T5T3T5T5T56ZT57#T3T3T37#7#T5T5T5T0T0T07#T0T07#T0T07#T.T.7#T0T.7$T0T07$T0T.T0T.7$T0T0T0T.T0T07#7$7$7%UMUMUM7%UMUM7%V.7&7'7'UM7(UMT07(T0UMT0UMT07(T0UM7(UM7(UMT0UMT0T07(T07(T.T.T.7(UM7)UMV.7)UMUMV.V.7)V.UM7)UMUMUMUMT.UMSE7(SE7)XDXDXB7)7)XD7*7+7+7,XBXBXDXDXB7,XDXD7,XDXDXD7,XDXB7,XBXB7,7-T5T5T/T/T4T4T/T/T4T4T/T/T4T4T/T/T4T4T/T/T4T47(YUYUYUY7Y77(Y7Y7Y7YU7(Y7Y77(Y7YUY7YUY7X.X.X.X&7&7'X&X&X.X.X&X&7&7'X&X&7'X&X&X&X.X.7'7(X.X.X.7(Y4Y4Y@7(7(Y@7)Y@Y4Y4Y47)Y47)Y@Y@7)Y@Y@Y@Y4Y47)Y@Y4Y4Y@Y@Y@Y@Y4Y4Y@Y@7'Y@7'7(Y4Y4Y47(Y4Y47(Y4Y4Y4Y'Y,Y'Y'Y'Y'Y'7'Y'7'Y'Y,Y'Y,Y'Y,Y'Y,Y,Y,YH7%YUYU7%YUYUYUYHYHYUYHY3Y37$Y,Y,7$Y,Y,Y3YUY3Y3Y,Y,7#Z&Y,7#7$Z&7$Z&Y,7%7%YLZ$Z$YVYVYLYLYLYV7$YVYL7$YLYLYV7$YVYV7$YG7%YGYV7%YVYG7%7&YXYXYNYN7&YNYN7&7'X.YN7'YNYG7'7(YGYG7(7)YGYG7)YNYNYNX.7)X.X.YNYNX.X.YNYNYN7(7(X.X.X.YNX.7(X.YNX.X.X.X.YGYGYGYGX.YGYGYG7%YG7&YG7&YGX.YGYGYGX.YG7%X.X.YGYGX.7%X.YGX.YGX.X.WOX.X.X.X.7#X.X.7#X&X.X&X&X&WGW=W=W=WGWG6Y6ZW=W=W3W=V=V=U>U>V=V=U>U>V=V=U>U>V=V=U>U>V=V=U>U>V=V=U>U>V=V=U>U>6RTLUT6S6STLTLTLV?V?V?6SV?V?6STLV?V?TLTLUGUGTL6RTL6RTLTLUGUGTLUGV;V9V;V9V96PV;V;V;V;6PV;V9V96P6QV9V9V9V;TL6P6QUG6QUGTLTLUGUGTLTLUGUGTL6PUGUGUG6P6P6QTLTLV;6QTUTUV;V;TUTUUKUK6P6QUKUK6QUKUKUKUPUKY.Y.6PY.YI6PYIYI6PY'Y.Y'Y.Y.Y.6PY.Y.6PYIY.Y.YIYIY.Y.6O6P6PYIYIYI6P6QYIYI6Q6RYIYIY.Y.6RY.YI6RYIYIY.Y.YIY.6QY.YIY.Y.Y.YIYIYI6PYIYI6P6QYIYIY.Y.6QY.YI6QYI6RYIY.YIY.Y.6QY.6RY'Y'Y.Y.Y'6QY.Y.Y'Y'Y'6QY'6QY.Y.Y.6Q6RY.6R6SY.Y.Y'Y'Y.Y.Y'Y.Y.Y.Y'Y'Y.Y.6PY'Y.Y'Y'Y'6PY'6PY.Y.Y.Y'Y'6PY.Y'Y'6PY'Y.6PY.6QY'Y'6QY'Y'Y'Y'6QY'Y,Y'Y'Y,Y'Y,6PY'Y'6P6QY'Y'6QY'Y,Y,Y'6QY,Y,Y'Y,Y'6PY'Y'Y'Y'Y'Y,Y'Y'Y,6OY'6OY,Y,Y,Y,6OY,6OY,6PY,Y'Y,Y'Y'Y'6OY,Y,6OY,Y,Y,Y,Y'Y,Y,Y.Y'Y.Y.Y'Y'6MY'Y.6M6NY'Y'Y'Y'Y,Y'Y,Y'6MY'Y'6MY,Y'Y,Y'6M6MY,6NY,Y'Y'Y'6N6NY,Y,Y,Y'Y'Y'6N6NY,Y,Y,Y,Y,6NY'6N6OY,Y,Y.Y.Y.Y'Y.Y'6NY'Y.6NY.6OY.Y.6O6P6P6QY'Y'6QY'Y'Y'Y'Y'6Q6R6RY,Y'6SY,Y,6SY,Y'6SY'6TY,Y,6TY,Y'6TY'6U6UY'Y.6VY'Y'6VY'6VY'6W6X6XY'Y.Y.Y'6XY'Y,6X6YY,Y,YI6YYIYIY.Y.6YY.Y.6YYIYIY.YAY.Y.YAYA6XYAY.Y.Y.6XY.Y.YIYI6W6XYIYI6X6YYI6Z6Z7#Y.7$7$7%YIYI7%7&YIYIYAYA7&7'YAYA7'YIYAYAYA7'YAY,Y,Y,YA7&YAY,Y,Y,7&Y,YI7&YIYIY,Y,7&Y,YI7&YI7'Y,7'Y,7(YI7(YIYIYI7(YIYIYI7(YIYI7(Y,YIYI7(Y,7)7*7*7+YIYIYIYI7+7,7,7-YIYIYIZ)YIYIZ)Z)7,Z)YI7,YIZ)Z)Z)Z)7,Z)YIYIYI7+Z)7,Z)Z)Z)Z)7,Z)7,YIYI7,YIYIYIZ)Z)YIYI7+YIYIYIYIYMYIYIYMYM7*YMYIYIYM7*YIYIYMYMYMYIYMYMY,Y,Y,7(7(Y,YIYIYI7(YIY,YIYIYI7(7(Y,Y,Y,YIYI7(YIYIY,YIY,7'Y,Y,Y,Y,Z&7'Z&7'Z&Y,Z&Y,7'Y,Y,Y,7'Y,7(Y,Z&Y,Y,7'Z&7(Z&7(Z&Z&Z&Z&Z&7(Z&7(Z&Y,Y,Y,YKYKYKY,Y,Y,7'Y,Y,YK7'Y,7'Y,Z&Y,Y,Y,7'Y,Y,Y,7'7'Z&7(7)7)Z&7*Z&YIYIYI7*YIYIYIY,YIYI7)Y,YI7)7*Y,7*Y,7+Y,YI7+YIY,7+Y,Y,Y,YIY,Y,Y,7*Y,7+Y,7+Y,YIYIYIYIYI7+YI7+YIY,7+Y,YI7,7,Y,YI7-Y,Y,7-7.Y,Y,Y,7.YI7.Z)Z)Z)7.Z)7/Y,Y,7/70Y,Y,Z)Z)7/Z)Z)Z)Y,7/Z)Z)Y,7/Z)Z)7/Y,Z)Z)Y,Y,Z)Z)7.7/Z)Z)Z)Z)Y,Y,Z)Z)7.Z)Y,Y,Z)Z)Y,Y,Z)7-Y,Y,7-Z)7-Z#Z)7.Z)7.Z)7/Z)Z)7/Z#Z#Z#7/Z#7/YZYZYZ7/YZ70YZ70YMZ)Z)Z)Z)70Z)YMZ)7071Z)Z)71Z)Z)YM71YMZ)Z)Z)YMZ)Z)70YM70YMYMYMYMZ)YM70Z)YM70YMZ)Z)YMYMZ)Z)7/70Y,7071Z#Y,71Z#Z#7172Z#Z#Y,72Y,7373Z#Z#Z#7374Y,Z#74Z#Z#Z#YMY?74Y?74Y?YMYMY?74YMYM7475YM76YM76YM77Y?Y?Z'77YM7778Y?78Y?YMYMY?Y?YM78YM78YMYM78Y?YM79YMYM797:7:Y?YM7;YMYMYM7;7;Y?Y?Y?YKYKZ#Z#YKYKZ#YKYKZ&YKYKZ&Z&78Z&Z&Z&7879Z&Z&797:7:7;YKYK7;YKYKYK7;Z&7<Z&7<Z&YK7=Z&Z&YK7=YKYKYK7=YK7=Y-Y-Y-7=Y-Y-YKYKZ#Z#Z#Z#Z#7<7<Y07=Y07=7>Y0Y0Z#Z#7>Z#Z#7>7?Y0YKYKZ#YKY-Y-7>Y-Z#Y-Z#Z#7=Y-Z#Z#Y-Y-7=Y-Z#7=Z#Y-Z#Y-Z#Z#Z#Z#Z#7<Z#7<Z#Y0Y-Y-Z#Y07;Y-Y0Y-Y-Y-Y07;Y07;Y0Y07;7<Y0Y07<7=Y0Y07=Y-Y0Y07=Y0Y0Y0Y-Y-7=Y-Y-Y-7=Y-Y-Y-Y-7=Y-7=Y0Y0Z#Z#7=Z#Y?Y?7=Y?7=7>Y?Y?Z#7>Y?Y?Y?Y07>Y07>Y0Y?Y?Y?Y?Z'7>7>Y07?7@Z'Z'Z'7@Z'Z'YP7@Z'Z'YPZ'Z'Z'Z'7?7?Z'YPZ'Y-Y-Y-7?Y-Y-Y-Y07>7?Y0Y0Y07?Y0Y07?7@Y0Y0Y-Y-Y-7@Y-7@YYYYY-7@Y-7AYYYY7A7BYYYY7BYYY-Y-Y0Y07A7BY0Y0Y0Y07B7CY07CY+Y+Y0Y07CY0Y0Y0Y07CY/Y/Y+Y+Y/Y/7BY/Y07BY0Y/YEYEZ&Z&Z&7AZ&YEYE7AY<Y<YEYEY<Y<YYYYYY7@YYYY7@7A7AY<Y2Y27AY2Y/Y2Y<Y<Y2Y2Y<Y<Y2Y<Y27?Y2Y<Y<Y<Y2Y<Y2Y<Y2Y<Y2Y<7=Y<7=Y<Y2Y<7=Y<Y/7>Y/7>Y/Y/7>7?Y<Y/Y<Y<Y/Y/7>Y/Y/Y/Y<Y<Y/Y/YGYG7=7>YGYGY<Y<Y<Y<7=Y<Y<Y<Y<Z(Y<Y<Z(Z(Y<Y<Z(Z(Y<7:Y<Y<7:YGY<Y<7:YG7;YGYGYGY<Y<YGYG7:7;YGYGY<YGY<YG7:YGYGYGYG7:Z%Y)Y)Y)VT79VQVQ797:VQVQVNX(VNX(VNVN797:7:X(X(X(X'W3X'W3W3W3W379W379X'X'79X'X'X'797:WUWUW%W%WUW%797:WUWU7:X,WUWUX,X,WU7:U>TTU>7:U>U>U>TTU>79TTTTTUTUTLTLTUTUTLTLTUTUU0U07677U0U0TLU077U07778TLTL78TUU0U0TUTUU0U07778U0U0TUTUU0U0TUTU7778TUTUV;V;TU77TU7878V;79V;797:V;V;TUTUTU7:TUTU7:7;TUTU7;7<TUTU7<7=TUTU7=7>7>V;7?V;7?V;V;V;TUTUUPUP7>U57?U5U4U4TLU4U0UPU0UPU0UPU0UPUPUPU97<U97<U9U9V;7<V;7=V;7=V;7>TUTUTU7>7>V;7?V;TU7?TU7@TUV;TUV;7?V;TUV;TUV;TUV;V;7>V;7?UPUP7?7@7@UP7AUPV;V;V;UP7@UPUPUPV;UPUPUPYB7?YBY>7?YBY>Y>YBYB7?Y>YB7?Y>Y>Y>YB7?YBY>7?Y>YBYBYBYBYIYB7>YBYBYIYIYBYIY>YBYBYBYIYIY(Y(YIYIYI7;YIYIYBYBYIYB7:YI7:YIYIYIYBYIYBYIYIYIYBYBYIYIYBYBYIYIYBYIYIYI7677YIYI77YIYMYMYI77YI77YI78YIYIYFYIYMYM77YM77YMYIYMYMYMYM77YM77YMYMYMYM77YO77YMYOYMYOYO777878YMYMYM78YPZ'Z'YPYP78YP78YPZ'YPYPYPZ'YPYPYPZ'77Z'YPZ'Z'Z'YJZ'7676YJZ'YJYP76YPY+YWYWYW76YSYSYWYSYW7576YS76Y/Y+7777Y/Y+Y+Y/Y/Y+Y+Y/Y/Y+Y/YT7576Y/76Y/YTYTY/Y/YTYTY/Y/Y/7575YTYTYTY/Y/757676YTYTYTY/Y/76Y/YTY/YTYT75YTYTYTY9Y975Y9Y*Y9Y*Y*Y*Y*Y*74Y*74Y*Y*Y9Y9Y9X#Y973X#X#73X#X#X#VWVWX#73VW7374X#74VWX#VWX#74X#X#7475X#X#X/VWX/X/VWVWVW74VWVW7475VSWSVS75VSVSVS75VS75VSVS75WSWSW,WSWS75WSWSWSVSWSWSWS74757576VSVSWSWSVSWSWPVNWPWP74VNWP75VNVN75WY75WYWYWYVNVN7576VN76WYWY76WYWYWYVNVN7677VN77WYWY7778WYWYVNWYWYWYW#77W#WYWY77WYWY7778WYWYW#WYWYWYW#WYWYWYVNVNW#W#VNVN75VNW#VNW#W#VNVNVN7474WY75WYWY75W,W,75WYW,W,WYWYW,W,WYWYWY74WY74WYWYWYWYW,W,WYWY7374WYWY74W,WYWYW,W,WYWYWY73WYWY7374WYWY747575WYW,W,WY75WY76WYWYW,W,W#W#WY75W#W#75WYW,W,7576W,W,W,7676WYWYWY76WYWYWYW,76W,W,76WYW,W,WYWYW,WYWYWY75WYWYWYWY75WYWYW#W#W,W,W#W#73W#W#W#7374W,W,7475W,W,75W,W,W,W,W,W#W#W#W#W#74W#W,74W,W,W,W,W#WYWY73WYW,W,W,W#WYWYW#W#71W#W#W#7172WYWYW#727374WYWYWYW#W#WYWYWY72WYWYWYWS72WS73W,W,73WSW,W,7374W#WYW#WYWY73WYW#W#W#W#73W#W#WYW#WY72WYWY72WYWYWYWYW#WYWYWYWY7172WYWY72W#72W#W#W#W#W#WYWYW#W#71W#W#W#717272W#WYWYW#W#W#72W#W#727373W#WY747475WYWYWYWYW#WYWYWYWY74WYWYWY74WY7475W#WYWYWY757576W#W#7677W#W#77W#W#W#WYWYWY77WY7778W#78W#W#W#WYWYW#WYWYWYW#W#WYWY767777W#W#W#W#77W#W#WY7778W#WY78WY7979W#7:W#VNVNW#W#VNVNW#W#VNVNW#78W#78W#W#78VNW#W#VNW#W#W#WUWUWU77WUWU77WUWUWUWU77WUWU77WM77WMWMWMWMWM77WMWUWMWMWMWU76WMWMWMWMWT76WT76WTWTWMWMWM767677WTWTWMWMWM77WM7778WT78WTWTWTWMWMWM78WM78WTWT78WTWTWT78WTWTWTWU78WMWMWUWM7879WM79WM7:WMWMWM7:WMWM7:7;WT7;WTWTU>UYU>UYU>7:U>7;U>U>U>7;U>7;U>U>U>UYUYUYU>U>7:7;U>U>7;V:U>U>V:V:U>U>V:V:U>79V:V:U>U>79V:U>U>V:V:U>U>V:V:U>77V:V:77U>V:V:U>77UYUY77U>UYUY7778UYUYV:UYV:78V:UY78U/UYUY7879UYUYUYTTUYUYTTTT77TTTTTTUY77U/U/7778U/U/78U/U/U/U/78U/U/7879U/U/TTTTUUUUTTTTUUUUTTTT77TTUU77UUUUUU77UUUU77TTUU78TTTT78TTUUTTUUUUUPUP77UPTLUP77UP77YBY>YBY>YBY>777778S:79797:S:S:S:7:7;S;S0S07;7<7<S0S:S:W-W-7<7=W-7=7>WFW-W-7>W-WFW-WFWFY9Y9W(7=7=W(W(W(Y9Y9W(7=Y9Y97=Y9W-W-WFW-W-W-WFWFW(W(7;7<W(W(7<7=VZ7=VZW(7=W(W(W(VZVZVZW(VZVZVZW(VZW6VZW6W6W6W6W/W679W6W6W(W(79W(79W(W6W(VO79VOVOW(W(79W(VOW(VOW(W6W6W.78W.W.78W6W.W.W.W6W6W6W/W/W6W/W/W/W6W6W675W6VOW6VO7475W(W(W(VUW(VUW(74W(VU74W(W(W(Y9Y9Y974VU74VUVUY9Y9VUY9X#73X#X#7374X#X#VUVU747575X#VUVU75X#76X#X#X#VUX#VU7576X#X#X#VUX#X#X#7576X#X#X#76X#X#VUVUX#X#VU7575X#VUX#VUX#VUVU7475VUVUVUVUW@W@X#X#74X#X#X#VUX#VU73VU74VSVSX#VSX#73X#X#VSVS73VSX#X#X#7373VSVSVSW773W7W773WSW7WSW773W7W77374W7W77475W77676W,W777W,W,77W,77W,W778W,W,78W,W778W7W778W,W7W,W7W7W,W7W,W7W,W,W7W9W7W9W775W7W7W9W975W975W9W7W7W775W9W97576W7W7W9W9W7W7W9W975W975W9W7W9W7W775W975W9W9W9W7W9W7W974W9W9W9W7W9W7W773W<W<W<W9W9W97373W<W<W<73W<W9W9W9W<W9W9W9W9W972W972W<W<W9W<W<W<W9W9W971W9W9W9W<W970W9W970TLUU71TM7172UL72UL737474TLUE75UE75UEUETLTL75TL75TLUE76UETLUE76TLTL76TL76TLTLTLTLTLUE767677UE78UE78UEUE78TL79TLUE79UEUE797:UEUETLUPTL7:TL7:UPUP7:X#VUVUX#X#7:7;W+W+W+7;W+WEW+W+7:WE7;WEWEWE7;7<WEWE7<7=WEWE7=W+WEW+W+W+WE7<WEW+W9W97<W9X#7<X#W9W<7<W<7=W<W:W<W:7<W:W<W<7<WUW:7=W)W<W)7=W<W<7=W<7=W<W<W<W<W<7=W<W)7=W)7>7>W<W<W<WU7>7?7@WUWUWU7@WUWUWU7@WU7@W1W17@W1W1W1WUWUWUWXWUWXWXWX7>UIUIUIULUL7>7?UL7?7@UITHTHTATATHTHTATHT+T+UCUCUCUCUC7=UCUC7=UCSA7=SASZX-X-X-7=7=VXVXVX7=X*VXVXX*X*7=X*7=X*X*X*X*X*7=X*X*X*X*7=X*X*7=7>X*VXX*VXX*X*VXX*VX7<VXVXX*X*7<X*VX7<VX7=VXX*VXX*WUW1WUW1WUWUWU7;WU7;WU7<WU7<WUWUWAWA7<WAWU7<W1W17<W1W1W17<TI7=TI7=TITDTI7=S4S4S4SX7=S@7>7>SXS@7?S@7?S@S@S@7?S@S@SXSX7?SXS@7?S@S@TD7?TD7@S.SMS.S.S.SMS.S.SMSM7>7?SMSM7?SMS.SMS.SMSM7>SMSMSMSMSM7>7>7?T$T$T$SK7?SKT$7?T$7@T$7@T$7AT$7A7BSKT$SKSKSK7ASKT$SKS3S37A7BS3S3SJSJS3S3S37A7AS3SO7BS3SOS3SO7ASOSOSOSO7A7BSG7BSGSOSOSOSGSOSGSO7ASOSO7ASOSOSOSGSGSWSWW>W>W>WVW>W>W>7?WV7?WVWV7?WVWVWVW>W>7?W>WV7?WVWVW>W>7?7@W>W>WVWVW>WVW>WVW$W$W$W?W$W?W?W?7<U#T-U#SJSJSJ7<SJ7<SJSJS7S77<7=S77=7>SJSOSOSO7>SGSG7>SGSO7>SOSG7>SISISISISI7>SISISISOSISOS8SOS8SOS8SOS8SG7;SG7<SISISIS8S8S8S8S>SISIS>S>SISIS>S>S>78S>S>78SWS>79S>S>S>SWV$TPV$78V$TPV$TPV(V(V(7777U@T=78V(V(T=T=V(V(77T=V(7778T=U@U@78U@SPSOSP78SP78SPSP78SOSPSPSP78SPSPS>S>SPSPS>S>77S>SP77SPSPSPS6SPSPS6S6SRS6S6S6S6SRSRSR74SR7475SRSRS6S67576S676SRSRU<U<U<76U<U<76U<U<TGTGTGT;TGT;TG747576V.SD76SDSDSPSP76SPS6S6S676SRSR76SRSESDSESET/75T/7676T077T077T0T/T0T0T0T077T077T0T0T0T;T077T077T0T0T;T;77T;T0T;T0T07677T0T0T;T;77T;T077T0T;T;77T;78T;TGT;T;T;T;T;7777V.78V.78V.797:V.V.7:V.T0T0T;T0T0T079V.79V.V.V.T0T079V.T0T0T0V.78V.V.V.T;T;7879T;T;79T;T079T0T0T0T079V.SESESSSSSESESESSSESE7778SE78SESSX;X;7879X;X;797:T57:T5T5T3T37:7;7;7<T5T5T5T3T5T3T5T3T5T5T3T37:T3T57:T5T5T0T0T7T7T0T0T7T7T0T.T.T.T.T0T.T.7677T.T.T0T077T0T.77T.T.UMUMT0UMV.V.UMV.T075T0UMUMV.UMUMUMV.UM74V.V.74V.UM74UMUMV.V.UMV.T0UMT0UM72UM73UM7374UMUM74UMT075T0T0T0UMT0UMT0T073T.T.T.T0T073T073UMT0UMT0UM73UMV.V.UM7373V.UM747475UMUMSSSSSE75SESSSSSS74XBXBXBXDXD74XD7475XBXB75XD76XD76XDXBXBXDXBXBXBXDXDXB75XDXD7576XDXD76XD7677XBXB7778T5T5T.T.T5T.YUY7YUYUYUY7YUYUY7Y7YUYUY7Y7YUY7X.X.X&X&X.X.X&X&X&X.X&X&X.X.X&X&X.X&X&X&X.X.X&X&X.X.X&X&X.X.X.X&Y4Y4Y@Y@Y4Y@Y4Y@Y4Y@Y@Y@Y4Y4Y@Y@Y4Y4Y@Y@Y4Y@Y@Y@Y4Y@Y@Y@Y4Y@Y4Y4Y@Y@Y4Y4Y@Y@Y4Y4Y4Y@Y4Y4Y@Y@Y4Y4Y'Y,Y'Y,Y'Y,Y'Y,YHYHYUYUYHYHYUYUY3Y3Y,Y,Y,Y3Y,Y,Y,Y,Y,Z&Z&Z&Y,Z&Y,Y,Y,Z&Z&Z&Y,Z&Z&Z&Y,Z&YLYLZ$Z$YLYVYLYVYVYVYLYLYVYGYVYVYGYGYVYGYVYVYVYGYVYVYVYGYNYNYXYXYNYNYXYNYXYXYXYNYNYNX.X.YNYNYNX.YNYGYNYNYGYNYGYGYNYNYGYGYGYNYGYGYNYNYGYGYNYNYNYGYNYNX.X.YNX.X.X.YNYNX.X.YNX.YNX.YGYGYGX.YGX.YGX.YGYGYGX.YGYGX.X.X.YGX.YGX.X.X.X&X.X&X&X&WGWGW=W=WGWGW=W=UTTLUTUTUTTLUTUTUTTLUTTLV?V?V?TLV?V?TLTLUGUGTLUGTLUGTLTLV9V;V9V;V9V9V9V;V9V9V;V;V9V9V;V;TLUGUGUGTLUGUGUGUGUGTLUGUGUGTLUGUGUGUGTUUGUGTLTLUGTUTLTLV;V;TUV;UKUKUKUPUKUKUPUPUKUKUPUPY.Y.YIY.Y.Y.YIY.Y.Y'Y.Y.Y.Y.YIYIY.YIYIYIY.Y.YIYIY.Y.YIYIY.YIYIYIY.Y.YIY.Y.Y.Y.YIY.Y.YIYIY.Y.YIY.Y.Y.YIY.Y.Y.YIY.YIYIYIY.Y.Y.YIYIY.Y.YIYIY.Y.YIY.Y.Y.YIYIY.Y.YIY.YIY.YIY.Y'Y'Y.Y'Y.Y'Y.Y'Y'Y'Y.Y.Y'Y'Y.Y.Y'Y.Y.Y.Y'Y'Y.Y.Y'Y.Y.Y.Y'Y'Y.Y.Y'Y'Y.Y.Y'Y'Y.Y'Y.Y'Y.Y'Y.Y'Y.Y.Y'Y'Y.Y.Y.Y'Y.Y.Y.Y'Y.Y'Y.Y'Y.Y.Y'Y'Y.Y'Y'Y'Y,Y,Y,Y'Y,Y,Y'Y'Y,Y,Y'Y'Y,Y,Y'Y'Y,Y,Y,Y,Y'Y'Y'Y,Y'Y,Y'Y'Y,Y,Y'Y'Y'Y,Y,Y,Y'Y'Y'Y,Y'Y'Y'Y,Y,Y,Y'Y'Y,Y,Y'Y'Y,Y,Y'Y'Y.Y.Y.Y'Y'Y'Y.Y'Y.Y.Y'Y,Y'Y'Y'Y'Y'Y,Y'Y,Y'Y'Y,Y,Y'Y,Y'Y,Y'Y,Y'Y'Y,Y,Y'Y,Y'Y,Y'Y,Y,Y,Y'Y,Y,Y,Y,Y'Y'Y'Y'Y'Y,Y,Y'Y,Y,Y,Y.Y.Y.Y'Y.Y'Y.Y.Y.Y.Y.Y'Y.Y.Y.Y'Y.Y'Y'Y'Y.Y'Y.Y'Y.Y'Y'Y'Y'Y'Y.Y'Y'Y'Y'Y,Y'Y,Y,Y,Y'Y,Y'Y'Y'Y,Y'Y,Y,Y,Y,Y'Y'Y,Y,Y,Y'Y,Y'Y'Y,Y,Y'Y,Y'Y,Y'Y,Y'Y,Y'Y,Y.Y'Y.Y'Y'Y'Y.Y.Y'Y'Y.Y'Y.Y'Y.Y'Y'Y'Y.Y.Y'Y'Y.Y.Y'Y'Y'Y.Y'Y'Y'Y,Y'Y,Y,Y,Y'Y,Y,Y,Y.Y.YIYIYIY.YIYIY.Y.YIYIY.Y.Y.YAY.YAY.Y.Y.Y.Y.YIY.Y.YIYIY.Y.YIYAY.YAYAYAYIYAYIYAYAYAY.Y.YAYAY.YAY.YAY.YAYAYAYIYIYAYAYIYIYAYAYIYIYAYAYIYAYAYAYAYIYAYAYIYAYAYAYIYIYAY,YAY,YAY,YAY,Y,Y,YIYIYIY,YIYIYIY,YIY,YIY,YIY,Y,Y,YIYIY,YIY,Y,Y,Y,Y,YIY,YIYIYIY,YIYIYIY,Y,YIYIY,Y,YIYIY,Y,YIY,YIY,YIYIY,YIYIYIYIY,YIYIY,Y,YIY,YIYIYIZ)YIYIZ)Z)Z)Z)Z)YIZ)Z)Z)YIYIZ)Z)Z)YIZ)YIZ)Z)Z)Z)YIYIZ)YIZ)YIYIZ)Z)Z)Z)Z)YIZ)Z)Z)YIZ)YIYIYIZ)Z)YIYIYIYMYIYMYMYIYMYMY,Y,YIY,Y,Y,YIYIYIY,YIYIYIY,YIY,YIY,Y,Y,YIYIY,Y,Y,Y,YIY,Y,Z&Z&Z&Y,Z&Y,Z&Y,Z&Y,Z&Y,Z&Y,Z&Y,Y,Y,Z&Y,Y,Y,Z&Y,Z&Z&Z&Z&Z&Y,Z&Y,Z&Y,Z&Y,Z&Y,Y,Y,Z&Y,Z&YKY,YKYKY,Z&Z&Z&Y,Z&Z&Z&Y,Y,Y,Z&Y,Y,Y,Z&Z&Z&YKYKZ&Z&YKYKY,Y,Y,Z&Y,Z&Z&Z&YIYIYIY,YIY,Y,Y,YIY,Y,Y,YIY,YIY,YIY,YIY,YIY,YIY,YIYIYIY,YIY,Y,Y,YIY,YIY,YIY,YIY,YIY,YIY,YIYIYIY,YIY,Y,Y,YIY,YIY,Y,Y,YIY,YIY,YIY,Y,Y,Z)Y,Y,Y,Y,Z)Y,Y,Z)Z)Y,Y,Z)Y,YIYIZ)Z)Z)Z)Y,Y,Z)Y,Z)Z)Y,Y,Z)Z)Y,Z)Z)Z)Y,Z)Z)Z)Y,Y,Y,Z)Y,Y,Y,Z)Y,Y,Z)Y,Y,Y,Y,Z)Y,Y,Z)Z)Z)Z)Y1Y1Y,Y,Z)Z)Y,Y,Z)Z)Z)Z#Z)Z#Z#Z#Z)Z#Z)Z#Z)Z#Z)Z#Z)Z#Z)Z#Z#Z#YZZ#YZZ#Z)YZYZYZYZYZZ)YZZ)YZZ)Z)Z)Z)YMZ)YMZ)YMYMYMZ)YMYMZ)Z)YMYMZ)Z)YMYMZ)YMZ)YMZ)Z)Z)YMZ)YMYMYMYMZ)YMYMZ)Z)Z)YMZ)Z)YMYMZ)YMYMYMY,Y,Y,Z#Y,Y,Y,Z#Y,Y,Z#Z#Y,Y,Y,Z#Y,Y,Z#Z#Y,Z#Y,Y,Y,Z#Z#Z#Y,Z#Z#Z#Y,Y,Y,Z#Y,Y,Z#Z#Y,Z#Z#Z#YMY?Y?Y?YMY?YMYMY?Y?Y?YMY?Y?YMYMY?Y?YMY?YMY?YMY?YMYMYMY?YMY?YMYMZ'Y?Z'Z'YMY?Y?Y?YMY?Y?Y?Y?Y?YMYMYMY?YMYMYMY?YMYMY?Y?YMYMYMY?YMYMYMYMY?Y?YMYMY?YMY?Y?YMY?Y?Y?YMYMYMY?Y?Y?YMYMYMY?Z&Z&YKZ&Z&Z&YKYKZ&Z&YKYKZ&Z&YKYKZ&Z&YKZ&YKZ&YKYKZ&Z&YKYKZ&Z&YKYKYKYKYKZ&Z&Z&YKZ&YKZ&YKYKZ&Z&YKZ&Z&Z&YKYKYKYKY-YKYKYKYKY-Y-YKY-Y-Z#Z#Y0Y0Z#Z#Z#Y0Z#Y0Y0Y0Z#Z#Y0Y0Z#Z#Y0Y0Z#Z#Y0Y0Z#Y0Z#Y0Z#Y0Y0Y0Z#Y-Z#Y-Z#Y-Z#Z#Z#Y-Z#Z#Z#Y-Y-Y-Z#Z#Z#Y0Z#Z#Z#Y0Y0Y-Y0Y0Y0Y-Y0Y0Y0Y-Y0Y0Y-Y-Y0Y0Y-Y-Y0Y0Y-Y-Y0Y0Y-Y-Y0Y0Y-Y-Y-Y0Y-Y-Y0Y0Y-Y-Y0Y-Y-Y-Y-Y0Y-Y-Y0Y0Y-Y0Y0Y0Z#Z#Z#Y?Y?Y?Z#Z#Z#Z#Y?Y?Z#Z#Y?Y?Z#Y?Z#Y?Y?Y0Y0Y0Y0Y0Y?Y0Y?Z'Z'Z'Y0Z'Z'Z'Z'Y0Y0Y0Y0Y0Z'Y0Z'Z'Z'YPYPZ'YPYPYPYPYPZ'Z'Z'YPYPY-Y-Y0Y0Y-Y-Y-Y0Y-Y-Y0Y0Y0Y-Y0Y0Y-Y-Y0Y0Y-Y0Y0Y0Y-Y-Y-YYY-Y-YYYYY-YYY-YYY-YYY-Y-YYYYY0Y0YYY0Y0Y0Y0YYY0Y0Y-Y-Y0Y0Y-Y0Y0Y0Y0Y0Y0Y+Y0Y0Y+Y+Y0Y+Y+Y+Y0Y0Y+Y+Y0Y0Y0Y/Y+Y/Y+Y+Y0Y0Y0Y/YEYEZ&YEYEYEY<Y<YYYYY/Y/YYYYY/Y/YYY/Y/Y/Y<Y<Y2Y2Y2Y2Y/Y2Y2Y<Y2Y2Y2Y<Y<Y<Y2Y<Y2Y<Y<Y<Y/Y/Y/Y<Y/Y<Y/Y<Y/Y/Y<Y<Y<Y/Y<Y<Y/Y/Y<Y/Y/Y/Y<YGY<Y<YGYGY<YGY<Y<Z(Z(YGYGY<Y<YGYGY<YGY<YGY<YGY<Y<Y<YGYGYGY<YGYGYGY<Y<YGYGY<YGYGYGZ%Z%VTVTVTVQVTVTVQVQVTVQVQVQVNVNX(X(VNX(X(X(VNVNVNX(W3W3W3X'W3W3X'X'W3W3X'X'W%W%WUWUW%W%WUW%WUX,WUWUX,X,WUWUX,X,WUWUWUX,WUX,U>TTU>TTU>TTTTTTTUTUU0U0TUTUU0U0TLU0TLU0TLU0TLTLU0U0TLTLTUTUU0U0TUTUU0U0TUTUU0U0TUTUTUV;TUTUV;V;TUTUTUV;TUV;V;V;TUV;TUV;TUV;TUV;TUTUTUV;TUTUV;V;TUTUTUUPTUTUUPUPTUTUUPUPTUTUUPUPTUTUUPUPTUTUUPUPTUTUUPUPTUTUUPUPTUTUUPUPTUV;TUV;TUV;TUV;TUTUTUV;TLTLTLU5TLU5U5U5UPUPU9U9UPUPU9U9V;UPV;UPV;UPV;UPV;UPV;V;V;V;V;UPTUV;V;V;TUV;TUV;TUTUTUV;TUTUTUV;TUV;V;V;TUTUTUV;V;UPV;UPUPUPV;V;UPUPV;V;UPUPV;UPV;UPV;UPV;UPV;UPV;V;UPUPYBYBYBY>YBYBY>Y>YBYBYBY>YBYBYBY>Y>YBYBYBY>YBYBYBYIYIYBYBYIYIYIYBYBYIYBYIYIYIYBYIYIYIYBYBYIYIYBYBYIYIYBYBYMYMYIYMYIYIYIYFYFYFYIYFYMYMYIYMYIYMYIYMYMYMYMYOYMYOYMYOYMYMYOYOYMYMYOYOYOYOYMYMYOYOYMYMYOYOYOYMYPYPZ'Z'YPYPZ'YPZ'YPZ'Z'YPYPZ'YPZ'YJZ'YJYJYJZ'YJYPY+Y+Y+YWYWYSYSYWYSYWYSYWYSYSYSY/Y/Y+Y/Y/Y/Y+Y/Y+Y/Y+Y+YTYTY/Y/YTYTYTY/Y/Y/YTYTY/YTYTYTY/Y/YTYTY/Y/Y/YTY/YTYTYTY/YTYTYTY/Y/Y/YTY/YTYTYTY9Y9Y*Y9Y*Y9Y*Y*Y*Y*Y*Y9Y9Y9X#X#Y9X#X#X#VWVWX#VWVWVWVWX#VWVWX#X#VWVWX#X#VWVWX#X#VWVWX#X#VWVWX#X#VWVWX#X#VWVWX#X#VWVWX#X#WSWSVSVSVSWSVSWSVSWSVSWSWSWSWSW,WSWSVSVSVSWSVSVSWSWSVSWSVSWSVSVSWSWSVSWSVNVNWPVNVNVNWPWPVNVNVNWYVNWYWYWYVNVNVNWYVNWYWYWYVNVNVNWYVNWYVNVNWYVNWYWYVNVNWYWYVNVNWYWYVNVNWYWYVNVNWYWYW#WYWYWYWYW#WYWYW#W#WYWYW#WYWYWYVNVNW#VNVNVNWYWYVNWYVNWYVNWYWYWYWYWYW,W,WYWYW,WYWYWYWYW,W,W,WYW,WYWYW,W,WYWYW,W,WYW,W,W,WYW,WYWYWYWYW,W,WYWYW,W,WYWYW,W,WYWYW,W,WYWYW,W,W,W,WYW,W,W,WYW,W#W#WYWYW#WYWYWYW,W,W,WYW,WYWYWYW,WYWYWYW,W,W,WYW,WYWYWYWYWYW,W,WYWYW,W,WYWYW,WYWYWYW#W#W,W,W#W#W,WYW,W,WYWYW,W,WYWYW,W,WYW,W,W,W,WYW,W,W#W#W#W,W#W,W,W,WYWYWYW,W#WYW#WYW#W#WYWYW#W#WYW#W#WYW#WYW#WYW#W#WYWYW#WYWYW#WYWYWSWSWSW,W,W,WSWSW,W,WSWSW,W,W7W7W,W,W7W7WYW#WYW#W#W#WYWYWYW#WYWYW#WYWYWYWYW#W#W#W#WYW#WYWYWYWYW#WYWYW#W#WYW#WYWYWYW#WYWYW#W#WYW#WYW#WYWYW#W#WYWYW#W#WYWYW#W#WYWYW#W#WYW#WYW#WYWYW#W#W#WYW#WYWYWYWYWYWYW#WYWYW#W#WYWYW#W#WYWYW#W#WYW#WYW#WYWYWYW#WYWYW#W#WYWYW#WYW#W#WYW#WYW#W#W#WYWYWYW#WYWYW#W#WYW#W#W#WYWYW#W#WYWYWYW#WYWYW#W#WYW#WYW#WYWYW#W#WYW#W#W#WYW#W#W#W#W#WYWYWYWYW#W#W#W#WYWYWYWYW#W#W#VNW#W#VNVNW#W#VNVNW#VNWUWUWMWMWMWMWMWUWUWUWUWMWUWUWUWMWUWUWUWMWUWMWUWUWUWUWMWMWMWMWTWTWMWMWTWTWMWTWMWTWMWMWMWTWMWTWTWTWMWMWTWMWMWMWTWTWMWTWTWTWMWMWTWTWMWTWTWTWMWMWMWTWMWMWTWTWMWTWTWTWUWUWMWMWUWMWMWMWMWUWMWMWMWTWMWMWMWTWMWTWMWMWTWMWMWMWMWTWMWMWTWTWMWTWTWTUYUYU>UYU>UYU>UYU>UYUYUYU>UYU>U>U>U>V:V:U>U>V:V:U>U>V:V:U>U>V:V:U>U>V:V:U>U>U>V:U>U>V:V:U>U>UYUYU>U>UYUYU>U>UYUYU>UYUYUYV:UYV:UYV:V:U/U/U/UYU/U/UYUYU/U/UYUYUYTTUYUYU/U/UYUYU/U/UYUYU/U/UYUYU/U/UYUYU/U/UYUYU/U/UYUYU/U/TTTTUUTTTTUUUUUUUUTTUUUUTTTTUUTTTTTTUUTTUUTTUUUUUPUPTLUPTLTLUPUPY>YBY>YBY>YBY>YBS:S;S:S;S:S:S;S;S;S;S:S:S:S:S;S:S:S:S;S:S:S:S;S:S:S;S:S:S:S0S:S:S0S0S:S0S0S0S:S0W-W-WFWFW-WFWFWFW-W-W-WFWFW-WFWFWFW-WFW-Y9Y9W(W(Y9Y9Y9W(W(Y9W(W(W(Y9W(W(W(W(VZVZW(W(VZW(W(W(W(VZW(W(VZW(VZVZW(VZVZW(VZW(W6W(W6W6W6W(W6W(W6W(W6W6VOW(VOW(W(W(VOW(W6W6W.W6W.W.W.W6W6W6W6VOY9Y9W(Y9Y9Y9W(W(W(W(W(VUY9Y9W(W(Y9VUY9VUY9Y9VUY9X#VUX#X#VUVUX#X#VUVUX#X#VUVUVUX#VUX#X#X#X#X#VUX#VUVUVUX#X#X#VUX#VUVUVUX#VUVUX#X#VUX#VUVUX#X#VUX#X#VUVUVUVUX#VUVUVUX#VUX#X#X#X#VUX#X#VUVUVUX#VUVUVUX#VUX#VUX#VUX#X#VSX#X#VSVSX#VSX#X#X#VSX#VSVSVSW7WSW7W7WSWSW7WSWSWSW7WSWSWSWSW7WSWSW7W7W7W,W7W7W,W,W7W,W7W,W7W7W,W,W7W,W7W,W7W7W,W,W7W,W7W,W7W7W7W,W7W7W,W,W7W,W7W,W7W7W,W,W7W,W7W9W7W7W7W9W7W9W7W9W7W7W7W9W9W9W9W9W7W7W9W9W7W9W9W9W7W9W7W9W7W9W7W7W7W9W7W7W7W9W7W9W9W9W9W9W9W<W9W9W<W<W9W9W9W<W9W<W9W<W9W<W<W<W9W9W9W<W9W9W9W<W9W<W9W<TLTLUUTLTLTLUUTLTMULTMULTMTMTMULULULTMULTMULTMTMULULTMULUETLUEUEUETLUETLTLTLUETLTLTLUETLUETLUEUEUETLTLTLTLTLUEUETLTLUETLUETLTLTLUETLUETLTLTLUEUETLTLUETLUETLUEUETLTLUETLTLTLUETLUETLUEUEUETLUEUETLTLUEUETLTLUETLTLUPTLUPTLUPUPUPX#X#VUVUX#X#VUVUX#X#VUX#W+W+W+WEW+W+W+WEW+WEWEWEW+WEW+W+WEWEW+WEWEWEW+W+WEWEW+W+WEW+WEW+W+W+WEW+X#W9X#X#X#W9W9W9W<W<W<W:W<W:W:W:W<W:W<W:WUWUW:W:W:WUW:W:W)W<W)W)W)W<W)W<W)W)W)W<W<W<W)W)W)W)W)W<W)W<W)W<W)W)W<W)WUX-X-X-WUWUX-X-WUX-X-X-WUWUW1WUWUW1W1W1WUWUWUW1WUW1W1W1T>UIUIUIUIULUIUIULULUIULULULUIUIULUIULUIUCUCU?U?UCUCU?U?SASZSASZX-X-X-VXX-VXX-VXX*X*VXVXVXX*VXX*VXX*VXX*X*X*X*VXX*X*X*VXX*X*VXVXX*VXVXVXVXX*VXVXVXX*VXVXX*X*VXX*VXX*VXX*WUWUWUWAWUWAWAWAWUWAWUWAWUWUWUWAWAWAWUWAWUWUWUW1WUW1W1W1TDTITITITITITDTITDTITDTDS4S=S4S4SXSXSXS@SXSXS@S@SXSXS@S@SXSXS@SXSXSXS@SXSXSXS@S@S@SXS@S@S@SXS@SXTDTITDTITDTITDTISMSMS.S.SMSMS.S.SMSMS.S.SMT$SMSMSMT$SMSMSMSMSMT$SMSMT$T$T$T$T$SKT$T$T$SKT$SKT$SKT$SKT$SKT$SKT$T$T$SKSKSKT$SKT$SKT$SKT$SKS3SJSJSJSJS3SJSJS3SOS3SOS3S3SOSOSOS3SOSOS3SOS3SOSOSGSGSGSOSOSOSGSOSGSOSOSOSGSOSOSGSGSOSOW>W>WVWVW>W>WVWVW>WVWVWVW>W>WVW>WVW>WVWVWVW>WVWVW>WVWVWVT-U#T-U#SJS7SJS7SJS7SJSJS7S7S7SJS7S7SJSJS7S7S7SJS7S7SJSJSOSGSOSGSOSGSGSGSOSGSOSGSOSOSOSISISISOSISGSGSGSISGSISGSIS>SWS>S>SWSWS>SWSWSWS>S>V$TPTPTPV(V(V(T=T=V(T=T=T=U@T=T=V(V(T=T=V(T=T=T=V(V(T=T=U@U@T=T=SOSOSPSOSPSOSPSPSOSOSOSPSOSPSPSPS>S>SPS>SPS>SPSPS6S6S6SRSRS6SRSRS6S6S6SRS6S6S6SRS6S6SRSRS6S6SRSRU<U<U<T1U<U<T1U<TPTPTPV.TPTPV.V.TPV.V.V.SPSPSDSPSDSPSDSPS6SRS6S6SDSRSDSRT/T/T0T0T/T0T/T/T/T/T0T0T0T0T/T0T/T0T/T0T0T0T;T;T0T;T0T0T;T;T0T;T0T;T0T0T0T;T0T;T0T;T0T0T;T;T0T;T;T;T0T;T;T;T0T;TGTGT;TGT;TGT;T;T;V.T;T;V.V.T;V.T;V.T;V.T;V.T;V.T;V.T;T0V.V.T0T0V.V.T0V.T0T0V.V.T0V.V.V.T0T0T0V.T0V.V.V.T;T;T0T0T;T;T0T0T;T;T0T;T;T;T0T;T0V.V.V.SESESESSSESSSSSSSESSSESSX;XDXDXDXDX;XDXDX;X;XDXDX;XDXDXDT3T3T5T3T5T3T5T5T3T3T5T3T3T3T5T3T3T3T5T5T3T3T5T5T3T3T5T5T.T0T.T.T0T0T.T0T.T0T.T.T.T0T.T.UMUMT0UMUMV.UMUMV.UMUMUMV.V.UMV.T0UMT0UMT0T0T0UMT0T0T0UMT0UMUMUMT0UMT0T0T0UMT0T0T0T0T.T.T.T0T.T.T0UMT0UMT0UMUMUMUMV.UMV.V.V.UMUMUMV.UMUMUMV.UMUMV.V.UMUMSESSSSSSXDXDXBXBXDXDXBXDXBXDXBXDXDXDXBXDXDXDXBXDXBXDXBXBXDXDXBXDXBXDXBXBXDXDXBXBXDXDXBXDXDXDXBXDXBXDXBXBXDXDXBXBT5T.T5T5T.T.T5T5",s=["Africa/Abidjan","Africa/Accra","Africa/Addis_Ababa","Africa/Algiers","Africa/Asmara","Africa/Bamako","Africa/Bangui","Africa/Banjul","Africa/Bissau","Africa/Blantyre","Africa/Brazzaville","Africa/Bujumbura","Africa/Cairo","Africa/Casablanca","Africa/Ceuta","Africa/Conakry","Africa/Dakar","Africa/Dar_es_Salaam","Africa/Djibouti","Africa/Douala","Africa/El_Aaiun","Africa/Freetown","Africa/Gaborone","Africa/Harare","Africa/Johannesburg","Africa/Juba","Africa/Kampala","Africa/Khartoum","Africa/Kigali","Africa/Kinshasa","Africa/Lagos","Africa/Libreville","Africa/Lome","Africa/Luanda","Africa/Lubumbashi","Africa/Lusaka","Africa/Malabo","Africa/Maputo","Africa/Maseru","Africa/Mbabane","Africa/Mogadishu","Africa/Monrovia","Africa/Nairobi","Africa/Ndjamena","Africa/Niamey","Africa/Nouakchott","Africa/Ouagadougou","Africa/Porto-Novo","Africa/Sao_Tome","Africa/Tripoli","Africa/Tunis","Africa/Windhoek","America/Adak","America/Anchorage","America/Anguilla","America/Antigua","America/Araguaina","America/Argentina/Buenos_Aires","America/Argentina/Catamarca","America/Argentina/Cordoba","America/Argentina/Jujuy","America/Argentina/La_Rioja","America/Argentina/Mendoza","America/Argentina/Rio_Gallegos","America/Argentina/Salta","America/Argentina/San_Juan","America/Argentina/San_Luis","America/Argentina/Tucuman","America/Argentina/Ushuaia","America/Aruba","America/Asuncion","America/Atikokan","America/Bahia","America/Bahia_Banderas","America/Barbados","America/Belem","America/Belize","America/Blanc-Sablon","America/Boa_Vista","America/Bogota","America/Boise","America/Cambridge_Bay","America/Campo_Grande","America/Cancun","America/Caracas","America/Cayenne","America/Cayman","America/Chicago","America/Chihuahua","America/Costa_Rica","America/Creston","America/Cuiaba","America/Curacao","America/Danmarkshavn","America/Dawson_Creek","America/Denver","America/Detroit","America/Dominica","America/Edmonton","America/Eirunepe","America/El_Salvador","America/Fort_Nelson","America/Fortaleza","America/Glace_Bay","America/Godthab","America/Goose_Bay","America/Grand_Turk","America/Grenada","America/Guadeloupe","America/Guatemala","America/Guayaquil","America/Guyana","America/Halifax","America/Havana","America/Hermosillo","America/Indiana/Indianapolis","America/Indiana/Knox","America/Indiana/Marengo","America/Indiana/Petersburg","America/Indiana/Tell_City","America/Indiana/Vincennes","America/Iqaluit","America/Jamaica","America/Juneau","America/Kentucky/Louisville","America/Kentucky/Monticello","America/Kralendijk","America/La_Paz","America/Lima","America/Los_Angeles","America/Lower_Princes","America/Maceio","America/Managua","America/Manaus","America/Marigot","America/Martinique","America/Matamoros","America/Mazatlan","America/Menominee","America/Merida","America/Mexico_City","America/Miquelon","America/Moncton","America/Monterrey","America/Montevideo","America/Montserrat","America/Nassau","America/New_York","America/Nome","America/Noronha","America/North_Dakota/Beulah","America/North_Dakota/New_Salem","America/Ojinaga","America/Panama","America/Pangnirtung","America/Paramaribo","America/Phoenix","America/Port-au-Prince","America/Port_of_Spain","America/Porto_Velho","America/Puerto_Rico","America/Punta_Arenas","America/Rankin_Inlet","America/Recife","America/Regina","America/Rio_Branco","America/Santarem","America/Santiago","America/Santo_Domingo","America/Sao_Paulo","America/Scoresbysund","America/Sitka","America/St_Barthelemy","America/St_Johns","America/St_Kitts","America/St_Lucia","America/St_Thomas","America/St_Vincent","America/Tegucigalpa","America/Thule","America/Thunder_Bay","America/Tijuana","America/Toronto","America/Tortola","America/Vancouver","America/Whitehorse","America/Winnipeg","America/Yakutat","America/Yellowknife","Antarctica/Casey","Antarctica/Davis","Antarctica/DumontDUrville","Antarctica/Macquarie","Antarctica/Mawson","Antarctica/McMurdo","Antarctica/Rothera","Antarctica/Syowa","Antarctica/Troll","Antarctica/Vostok","Arctic/Longyearbyen","Asia/Aden","Asia/Almaty","Asia/Amman","Asia/Anadyr","Asia/Aqtau","Asia/Aqtobe","Asia/Ashgabat","Asia/Atyrau","Asia/Baghdad","Asia/Bahrain","Asia/Baku","Asia/Bangkok","Asia/Barnaul","Asia/Beirut","Asia/Bishkek","Asia/Brunei","Asia/Chita","Asia/Choibalsan","Asia/Colombo","Asia/Damascus","Asia/Dhaka","Asia/Dili","Asia/Dubai","Asia/Dushanbe","Asia/Famagusta","Asia/Gaza","Asia/Hebron","Asia/Ho_Chi_Minh","Asia/Hong_Kong","Asia/Hovd","Asia/Irkutsk","Asia/Jakarta","Asia/Jayapura","Asia/Jerusalem","Asia/Kabul","Asia/Kamchatka","Asia/Karachi","Asia/Kathmandu","Asia/Khandyga","Asia/Kolkata","Asia/Krasnoyarsk","Asia/Kuala_Lumpur","Asia/Kuching","Asia/Kuwait","Asia/Macau","Asia/Magadan","Asia/Makassar","Asia/Manila","Asia/Muscat","Asia/Nicosia","Asia/Novokuznetsk","Asia/Novosibirsk","Asia/Omsk","Asia/Oral","Asia/Phnom_Penh","Asia/Pontianak","Asia/Pyongyang","Asia/Qatar","Asia/Qostanay","Asia/Qyzylorda","Asia/Riyadh","Asia/Sakhalin","Asia/Samarkand","Asia/Seoul","Asia/Shanghai","Asia/Singapore","Asia/Srednekolymsk","Asia/Taipei","Asia/Tashkent","Asia/Tbilisi","Asia/Tehran","Asia/Thimphu","Asia/Tokyo","Asia/Tomsk","Asia/Ulaanbaatar","Asia/Urumqi","Asia/Ust-Nera","Asia/Vientiane","Asia/Vladivostok","Asia/Yakutsk","Asia/Yangon","Asia/Yekaterinburg","Asia/Yerevan","Atlantic/Azores","Atlantic/Bermuda","Atlantic/Canary","Atlantic/Cape_Verde","Atlantic/Faroe","Atlantic/Madeira","Atlantic/Reykjavik","Atlantic/South_Georgia","Atlantic/St_Helena","Atlantic/Stanley","Australia/Adelaide","Australia/Brisbane","Australia/Broken_Hill","Australia/Currie","Australia/Darwin","Australia/Eucla","Australia/Hobart","Australia/Lord_Howe","Australia/Melbourne","Australia/Perth","Australia/Sydney","Etc/GMT","Etc/GMT+1","Etc/GMT+10","Etc/GMT+11","Etc/GMT+12","Etc/GMT+2","Etc/GMT+3","Etc/GMT+4","Etc/GMT+5","Etc/GMT+6","Etc/GMT+7","Etc/GMT+8","Etc/GMT+9","Etc/GMT-1","Etc/GMT-10","Etc/GMT-11","Etc/GMT-12","Etc/GMT-2","Etc/GMT-3","Etc/GMT-4","Etc/GMT-5","Etc/GMT-6","Etc/GMT-7","Etc/GMT-8","Etc/GMT-9","Etc/UTC","Europe/Amsterdam","Europe/Andorra","Europe/Astrakhan","Europe/Athens","Europe/Belgrade","Europe/Berlin","Europe/Bratislava","Europe/Brussels","Europe/Bucharest","Europe/Budapest","Europe/Busingen","Europe/Chisinau","Europe/Copenhagen","Europe/Dublin","Europe/Gibraltar","Europe/Guernsey","Europe/Helsinki","Europe/Isle_of_Man","Europe/Istanbul","Europe/Jersey","Europe/Kaliningrad","Europe/Kiev","Europe/Kirov","Europe/Lisbon","Europe/Ljubljana","Europe/London","Europe/Luxembourg","Europe/Madrid","Europe/Malta","Europe/Mariehamn","Europe/Minsk","Europe/Monaco","Europe/Moscow","Europe/Oslo","Europe/Paris","Europe/Podgorica","Europe/Prague","Europe/Riga","Europe/Rome","Europe/Samara","Europe/San_Marino","Europe/Sarajevo","Europe/Saratov","Europe/Simferopol","Europe/Skopje","Europe/Sofia","Europe/Stockholm","Europe/Tallinn","Europe/Tirane","Europe/Ulyanovsk","Europe/Uzhgorod","Europe/Vaduz","Europe/Vienna","Europe/Vilnius","Europe/Volgograd","Europe/Warsaw","Europe/Zagreb","Europe/Zaporozhye","Europe/Zurich","Indian/Antananarivo","Indian/Chagos","Indian/Christmas","Indian/Cocos","Indian/Comoro","Indian/Kerguelen","Indian/Mahe","Indian/Maldives","Indian/Mauritius","Indian/Mayotte","Indian/Reunion","Pacific/Apia","Pacific/Auckland","Pacific/Bougainville","Pacific/Chatham","Pacific/Chuuk","Pacific/Easter","Pacific/Efate","Pacific/Enderbury","Pacific/Fakaofo","Pacific/Fiji","Pacific/Funafuti","Pacific/Galapagos","Pacific/Gambier","Pacific/Guadalcanal","Pacific/Guam","Pacific/Honolulu","Pacific/Kiritimati","Pacific/Kosrae","Pacific/Kwajalein","Pacific/Majuro","Pacific/Marquesas","Pacific/Midway","Pacific/Nauru","Pacific/Niue","Pacific/Norfolk","Pacific/Noumea","Pacific/Pago_Pago","Pacific/Palau","Pacific/Pitcairn","Pacific/Pohnpei","Pacific/Port_Moresby","Pacific/Rarotonga","Pacific/Saipan","Pacific/Tahiti","Pacific/Tarawa","Pacific/Tongatapu","Pacific/Wake","Pacific/Wallis"];if(n=+n,!(-90<=(t=+t)&&t<=90&&-180<=n&&n<=180))throw new RangeError("invalid coordinates");if(90<=t)return"Etc/GMT";var a=-1,o=48*(180+n)/360.00000000000006,l=24*(90-t)/180.00000000000003,c=0|o,u=0|l,f=96*u+2*c;for(f=56*i.charCodeAt(f)+i.charCodeAt(f+1)-1995;f+s.length<3136;)f=56*i.charCodeAt(f=8*(a=a+f+1)+4*(u=0|(l=2*(l-u)%2))+2*(c=0|(o=2*(o-c)%2))+2304)+i.charCodeAt(f+1)-1995;return s[f+s.length-3136]}r.exports=e})(hc)),hc.exports}var vS=MS();const gY=US(vS),WY=Math.PI,UY=.26667,MY=.5667,Fh=6,Gh=2,Bh=5,xS=63,ES=[64,34,20,7,3,1],VS=[5,2],yS=[40,10,6,2,1],AS=0,bS=1,PS=2,XS=5,CS=0,RS=1,IS=2,wS=3,LS=96,DS=102,NS=108,OS=84,FS=94,Oi=-99999,GS=[[[175347046,0,0],[3341656,4.6692568,6283.07585],[34894,4.6261,12566.1517],[3497,2.7441,5753.3849],[3418,2.8289,3.5231],[3136,3.6277,77713.7715],[2676,4.4181,7860.4194],[2343,6.1352,3930.2097],[1324,.7425,11506.7698],[1273,2.0371,529.691],[1199,1.1096,1577.3435],[990,5.233,5884.927],[902,2.045,26.298],[857,3.508,398.149],[780,1.179,5223.694],[753,2.533,5507.553],[505,4.583,18849.228],[492,4.205,775.523],[357,2.92,.067],[317,5.849,11790.629],[284,1.899,796.298],[271,.315,10977.079],[243,.345,5486.778],[206,4.806,2544.314],[205,1.869,5573.143],[202,2.458,6069.777],[156,.833,213.299],[132,3.411,2942.463],[126,1.083,20.775],[115,.645,.98],[103,.636,4694.003],[102,.976,15720.839],[102,4.267,7.114],[99,6.21,2146.17],[98,.68,155.42],[86,5.98,161000.69],[85,1.3,6275.96],[85,3.67,71430.7],[80,1.81,17260.15],[79,3.04,12036.46],[75,1.76,5088.63],[74,3.5,3154.69],[74,4.68,801.82],[70,.83,9437.76],[62,3.98,8827.39],[61,1.82,7084.9],[57,2.78,6286.6],[56,4.39,14143.5],[56,3.47,6279.55],[52,.19,12139.55],[52,1.33,1748.02],[51,.28,5856.48],[49,.49,1194.45],[41,5.37,8429.24],[41,2.4,19651.05],[39,6.17,10447.39],[37,6.04,10213.29],[37,2.57,1059.38],[36,1.71,2352.87],[36,1.78,6812.77],[33,.59,17789.85],[30,.44,83996.85],[30,2.74,1349.87],[25,3.16,4690.48]],[[628331966747,0,0],[206059,2.678235,6283.07585],[4303,2.6351,12566.1517],[425,1.59,3.523],[119,5.796,26.298],[109,2.966,1577.344],[93,2.59,18849.23],[72,1.14,529.69],[68,1.87,398.15],[67,4.41,5507.55],[59,2.89,5223.69],[56,2.17,155.42],[45,.4,796.3],[36,.47,775.52],[29,2.65,7.11],[21,5.34,.98],[19,1.85,5486.78],[19,4.97,213.3],[17,2.99,6275.96],[16,.03,2544.31],[16,1.43,2146.17],[15,1.21,10977.08],[12,2.83,1748.02],[12,3.26,5088.63],[12,5.27,1194.45],[12,2.08,4694],[11,.77,553.57],[10,1.3,6286.6],[10,4.24,1349.87],[9,2.7,242.73],[9,5.64,951.72],[8,5.3,2352.87],[6,2.65,9437.76],[6,4.67,4690.48]],[[52919,0,0],[8720,1.0721,6283.0758],[309,.867,12566.152],[27,.05,3.52],[16,5.19,26.3],[16,3.68,155.42],[10,.76,18849.23],[9,2.06,77713.77],[7,.83,775.52],[5,4.66,1577.34],[4,1.03,7.11],[4,3.44,5573.14],[3,5.14,796.3],[3,6.05,5507.55],[3,1.19,242.73],[3,6.12,529.69],[3,.31,398.15],[3,2.28,553.57],[2,4.38,5223.69],[2,3.75,.98]],[[289,5.844,6283.076],[35,0,0],[17,5.49,12566.15],[3,5.2,155.42],[1,4.72,3.52],[1,5.3,18849.23],[1,5.97,242.73]],[[114,3.142,0],[8,4.13,6283.08],[1,3.84,12566.15]],[[1,3.14,0]]],BS=[[[280,3.199,84334.662],[102,5.422,5507.553],[80,3.88,5223.69],[44,3.7,2352.87],[32,4,1577.34]],[[9,3.9,5507.55],[6,1.73,5223.69]]],ZS=[[[100013989,0,0],[1670700,3.0984635,6283.07585],[13956,3.05525,12566.1517],[3084,5.1985,77713.7715],[1628,1.1739,5753.3849],[1576,2.8469,7860.4194],[925,5.453,11506.77],[542,4.564,3930.21],[472,3.661,5884.927],[346,.964,5507.553],[329,5.9,5223.694],[307,.299,5573.143],[243,4.273,11790.629],[212,5.847,1577.344],[186,5.022,10977.079],[175,3.012,18849.228],[110,5.055,5486.778],[98,.89,6069.78],[86,5.69,15720.84],[86,1.27,161000.69],[65,.27,17260.15],[63,.92,529.69],[57,2.01,83996.85],[56,5.24,71430.7],[49,3.25,2544.31],[47,2.58,775.52],[45,5.54,9437.76],[43,6.01,6275.96],[39,5.36,4694],[38,2.39,8827.39],[37,.83,19651.05],[37,4.9,12139.55],[36,1.67,12036.46],[35,1.84,2942.46],[33,.24,7084.9],[32,.18,5088.63],[32,1.78,398.15],[28,1.21,6286.6],[28,1.9,6279.55],[26,4.59,10447.39]],[[103019,1.10749,6283.07585],[1721,1.0644,12566.1517],[702,3.142,0],[32,1.02,18849.23],[31,2.84,5507.55],[25,1.32,5223.69],[18,1.42,1577.34],[10,5.91,10977.08],[9,1.42,6275.96],[9,.27,5486.78]],[[4359,5.7846,6283.0758],[124,5.579,12566.152],[12,3.14,0],[9,3.63,77713.77],[6,1.87,5573.14],[3,5.47,18849.23]],[[145,4.273,6283.076],[7,3.92,12566.15]],[[4,2.56,6283.08]]],HS=[[0,0,0,0,1],[-2,0,0,2,2],[0,0,0,2,2],[0,0,0,0,2],[0,1,0,0,0],[0,0,1,0,0],[-2,1,0,2,2],[0,0,0,2,1],[0,0,1,2,2],[-2,-1,0,2,2],[-2,0,1,0,0],[-2,0,0,2,1],[0,0,-1,2,2],[2,0,0,0,0],[0,0,1,0,1],[2,0,-1,2,2],[0,0,-1,0,1],[0,0,1,2,1],[-2,0,2,0,0],[0,0,-2,2,1],[2,0,0,2,2],[0,0,2,2,2],[0,0,2,0,0],[-2,0,1,2,2],[0,0,0,2,0],[-2,0,0,2,0],[0,0,-1,2,1],[0,2,0,0,0],[2,0,-1,0,1],[-2,2,0,2,2],[0,1,0,0,1],[-2,0,1,0,1],[0,-1,0,0,1],[0,0,2,-2,0],[2,0,-1,2,1],[2,0,1,2,2],[0,1,0,2,2],[-2,1,1,0,0],[0,-1,0,2,2],[2,0,0,2,1],[2,0,1,0,0],[-2,0,2,2,2],[-2,0,1,2,1],[2,0,-2,0,1],[2,0,0,0,1],[0,-1,1,0,0],[-2,-1,0,2,1],[-2,0,0,0,1],[0,0,2,2,1],[-2,0,2,0,1],[-2,1,0,2,1],[0,0,1,-2,0],[-1,0,1,0,0],[-2,1,0,0,0],[1,0,0,0,0],[0,0,1,2,0],[0,0,-2,2,2],[-1,-1,1,0,0],[0,1,1,0,0],[0,-1,1,2,2],[2,-1,-1,2,2],[0,0,3,2,2],[2,-1,0,2,2]],Co=[[-171996,-174.2,92025,8.9],[-13187,-1.6,5736,-3.1],[-2274,-.2,977,-.5],[2062,.2,-895,.5],[1426,-3.4,54,-.1],[712,.1,-7,0],[-517,1.2,224,-.6],[-386,-.4,200,0],[-301,0,129,-.1],[217,-.5,-95,.3],[-158,0,0,0],[129,.1,-70,0],[123,0,-53,0],[63,0,0,0],[63,.1,-33,0],[-59,0,26,0],[-58,-.1,32,0],[-51,0,27,0],[48,0,0,0],[46,0,-24,0],[-38,0,16,0],[-31,0,13,0],[29,0,0,0],[29,0,-12,0],[26,0,0,0],[-22,0,0,0],[21,0,-10,0],[17,-.1,0,0],[16,0,-8,0],[-16,.1,7,0],[-15,0,9,0],[-13,0,7,0],[-12,0,6,0],[11,0,0,0],[-10,0,5,0],[-8,0,3,0],[7,0,-3,0],[-7,0,0,0],[-7,0,3,0],[-7,0,3,0],[6,0,0,0],[6,0,-3,0],[6,0,-3,0],[-6,0,3,0],[-6,0,3,0],[5,0,0,0],[-5,0,3,0],[-5,0,3,0],[-5,0,3,0],[4,0,0,0],[4,0,0,0],[4,0,0,0],[-4,0,0,0],[-4,0,0,0],[-4,0,0,0],[3,0,0,0],[-3,0,0,0],[-3,0,0,0],[-3,0,0,0],[-3,0,0,0],[-3,0,0,0],[-3,0,0,0],[-3,0,0,0]];function ut(r){return WY/180*r}function ci(r){return 180/WY*r}function fs(r){let e=r/360;return e=360*(e-Math.floor(e)),e<0&&(e+=360),e}function zS(r){let e=r/180;return e=180*(e-Math.floor(e)),e<0&&(e+=180),e}function kS(r){let e=r/360;return e=360*(e-Math.floor(e)),e<-180?e+=360:e>180&&(e-=360),e}function zs(r){let e=r-Math.floor(r);return e<0&&(e+=1),e}function uo(r,e,t,n,i){return((r*i+e)*i+t)*i+n}function $S(r){let e=r;return e<-20?e+=1440:e>20&&(e-=1440),e}function dc(r,e){return 24*zs(r+e/24)}function Zh(r,e,t,n,i){if(!isFinite(n))return new Date(NaN);const s=Date.UTC(r,e-1,t,0,0,0,0),a=Math.round((n-i)*36e5);return new Date(s+a)}var zr=(r=>(r[r.SPA_ZA=0]="SPA_ZA",r[r.SPA_ZA_INC=1]="SPA_ZA_INC",r[r.SPA_ZA_RTS=2]="SPA_ZA_RTS",r[r.SPA_ALL=3]="SPA_ALL",r))(zr||{}),Bi=(r=>(r[r.JD_MINUS=0]="JD_MINUS",r[r.JD_ZERO=1]="JD_ZERO",r[r.JD_PLUS=2]="JD_PLUS",r[r.JD_COUNT=3]="JD_COUNT",r))(Bi||{}),cn=(r=>(r[r.SUN_TRANSIT=0]="SUN_TRANSIT",r[r.SUN_RISE=1]="SUN_RISE",r[r.SUN_SET=2]="SUN_SET",r[r.SUN_COUNT=3]="SUN_COUNT",r))(cn||{});const Hh=new Map;function KS(r){let e=Hh.get(r);return e||(e=new Intl.DateTimeFormat("en-US",{timeZone:r,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"}),Hh.set(r,e)),e}function QS(r,e){const t=new Map;for(const n of e.formatToParts(r))n.type!=="literal"&&t.set(n.type,n.value);return{year:parseInt(t.get("year")??"0",10),month:parseInt(t.get("month")??"0",10),day:parseInt(t.get("day")??"0",10),hour:parseInt(t.get("hour")??"0",10),minute:parseInt(t.get("minute")??"0",10),second:parseInt(t.get("second")??"0",10)+r.getUTCMilliseconds()/1e3}}function JS(r,e){const t=Math.floor(e.second),n=Math.round((e.second-t)*1e3);return(Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,t,n)-r.getTime())/36e5}function vY(r,e,t,n,i,s,a,o){let l=r,c=e;const u=t+(n-o+(i+(s+a)/60)/60)/24;c<3&&(c+=12,l--);let f=Math.floor(365.25*(l+4716))+Math.floor(30.6001*(c+1))+u-1524.5;if(f>2299160){const d=Math.floor(l/100);f+=2-d+Math.floor(d/4)}return f}function xY(r){return(r-2451545)/36525}function EY(r,e){return r+e/86400}function VY(r){return(r-2451545)/36525}function yY(r){return r/10}function qS(r){return{year:r.getFullYear(),month:r.getMonth()+1,day:r.getDate(),hour:r.getHours(),minute:r.getMinutes(),second:r.getSeconds()+r.getMilliseconds()/1e3,timezone:-r.getTimezoneOffset()/60}}function jS(r,e){const t=new Date(r.getTime()+e*36e5);return{year:t.getUTCFullYear(),month:t.getUTCMonth()+1,day:t.getUTCDate(),hour:t.getUTCHours(),minute:t.getUTCMinutes(),second:t.getUTCSeconds()+t.getUTCMilliseconds()/1e3}}function e_(r,e){return QS(r,KS(e))}function t_(r,e,t){if(e!==void 0)return{...jS(r,e),timezone:e};if(t)try{const n=e_(r,t);return{...n,timezone:JS(r,n)}}catch{}return qS(r)}function Gf(r,e,t){let n=0;for(let i=0;i<e;i++)n+=r[i][AS]*Math.cos(r[i][bS]+r[i][PS]*t);return n}function Bf(r,e,t){let n=0;for(let i=0;i<e;i++)n+=r[i]*Math.pow(t,i);return n/=1e8,n}function AY(r){const e=[];for(let t=0;t<Fh;t++)e[t]=Gf(GS[t],ES[t],r);return fs(ci(Bf(e,Fh,r)))}function bY(r){const e=[];for(let t=0;t<Gh;t++)e[t]=Gf(BS[t],VS[t],r);return ci(Bf(e,Gh,r))}function PY(r){const e=[];for(let t=0;t<Bh;t++)e[t]=Gf(ZS[t],yS[t],r);return Bf(e,Bh,r)}function XY(r){let e=r+180;return e>=360&&(e-=360),e}function CY(r){return-r}function RY(r){return-20.4898/(3600*r)}function IY(r,e,t){return r+e+t}function wY(r,e,t){const n=ut(r),i=ut(e);return fs(ci(Math.atan2(Math.sin(n)*Math.cos(i)-Math.tan(ut(t))*Math.sin(i),Math.cos(n))))}function LY(r,e,t){const n=ut(r),i=ut(e);return ci(Math.asin(Math.sin(n)*Math.cos(i)+Math.cos(n)*Math.sin(i)*Math.sin(ut(t))))}function n_(r){return fs(280.4664567+r*(360007.6982779+r*(.03032028+r*(1/49931+r*(-1/15300+r*(-1/2e6))))))}function i_(r){return 8.794/(3600*r)}function DY(r){return uo(1/189474,-.0019142,445267.11148,297.85036,r)}function NY(r){return uo(-1/3e5,-1603e-7,35999.05034,357.52772,r)}function OY(r){return uo(1/56250,.0086972,477198.867398,134.96298,r)}function FY(r){return uo(1/327270,-.0036825,483202.017538,93.27191,r)}function GY(r){return uo(1/45e4,.0020708,-1934.136261,125.04452,r)}function r_(r,e){let t=0;for(let n=0;n<XS;n++)t+=e[n]*HS[r][n];return t}function BY(r,e){let t=0,n=0;for(let i=0;i<xS;i++){const s=ut(r_(i,e));t+=(Co[i][CS]+r*Co[i][RS])*Math.sin(s),n+=(Co[i][IS]+r*Co[i][wS])*Math.cos(s)}return{delPsi:t/36e6,delEpsilon:n/36e6}}function ZY(r){const e=r/10;return 84381.448+e*(-4680.93+e*(-1.55+e*(1999.25+e*(-51.38+e*(-249.67+e*(-39.05+e*(7.12+e*(27.87+e*(5.79+e*2.45)))))))))}function HY(r,e){return r+e/3600}function zY(r,e){return fs(280.46061837+360.98564736629*(r-2451545)+e*e*(387933e-9-e/3871e4))}function kY(r,e,t){return r+e*Math.cos(ut(t))}function s_(r,e,t){return fs(r+e-t)}function a_(r,e,t,n,i){const s=ut(r),a=ut(t),o=ut(n),l=ut(i),c=Math.atan(.99664719*Math.tan(s)),u=.99664719*Math.sin(c)+e*Math.sin(s)/6378140,f=Math.cos(c)+e*Math.cos(s)/6378140,d=Math.atan2(-f*Math.sin(a)*Math.sin(o),Math.cos(l)-f*Math.sin(a)*Math.cos(o)),h=ci(Math.atan2((Math.sin(l)-u*Math.sin(a))*Math.cos(d),Math.cos(l)-f*Math.sin(a)*Math.cos(o)));return{deltaAlpha:ci(d),deltaPrime:h}}function o_(r,e){return r+e}function l_(r,e){return r-e}function c_(r,e,t){const n=ut(r),i=ut(e);return ci(Math.asin(Math.sin(n)*Math.sin(i)+Math.cos(n)*Math.cos(i)*Math.cos(ut(t))))}function u_(r,e,t,n){let i=0;return n>=-1*(UY+t)&&(i=r/1010*(283/(273+e))*(1.02/(60*Math.tan(ut(n+10.3/(n+5.11)))))),i}function f_(r,e){return r+e}function h_(r){return 90-r}function d_(r,e,t){const n=ut(r),i=ut(e);return fs(ci(Math.atan2(Math.sin(n),Math.cos(n)*Math.sin(i)-Math.tan(ut(t))*Math.cos(i))))}function p_(r){return fs(r+180)}function Y_(r,e,t,n){const i=ut(r),s=ut(n);return ci(Math.acos(Math.cos(i)*Math.cos(s)+Math.sin(s)*Math.sin(i)*Math.cos(ut(e-t))))}function m_(r,e,t){const n=ut(r),i=ut(e),s=(Math.sin(ut(t))-Math.sin(n)*Math.sin(i))/(Math.cos(n)*Math.cos(i));return Math.abs(s)<=1?zS(ci(Math.acos(s))):Oi}function S_(r,e,t){return(r-e-t)/360}function __(r,e){const t=e/360;r[cn.SUN_RISE]=zs(r[cn.SUN_TRANSIT]-t),r[cn.SUN_SET]=zs(r[cn.SUN_TRANSIT]+t),r[cn.SUN_TRANSIT]=zs(r[cn.SUN_TRANSIT])}function zh(r,e){let t=r[Bi.JD_ZERO]-r[Bi.JD_MINUS],n=r[Bi.JD_PLUS]-r[Bi.JD_ZERO];return Math.abs(t)>=2&&(t=zs(t)),Math.abs(n)>=2&&(n=zs(n)),r[Bi.JD_ZERO]+e*(t+n+(n-t)*e)/2}function T_(r,e,t){const n=ut(r),i=ut(e);return ci(Math.asin(Math.sin(n)*Math.sin(i)+Math.cos(n)*Math.cos(i)*Math.cos(ut(t))))}function kh(r,e,t,n,i,s,a){return r[a]+(e[a]-s)/(360*Math.cos(ut(t[a]))*Math.cos(ut(n))*Math.sin(ut(i[a])))}function g_(r,e,t,n){return $S(4*(r-.0057183-e+t*Math.cos(ut(n))))}function W_(r,e){const t=-1*(UY+r.atmosphericRefraction),n=vY(r.year,r.month,r.day,0,0,0,0,0),s=e(n,r.deltaT).nu,a=n_(r.jme),o=g_(a,r.alpha,r.delPsi,r.epsilon),l=[],c=[];for(let M=0;M<Bi.JD_COUNT;M++){const b=e(n+M-1,r.deltaT);l[M]=b.alpha,c[M]=b.delta}const u=[];u[cn.SUN_TRANSIT]=S_(l[Bi.JD_ZERO],r.longitude,s);const f=m_(r.latitude,c[Bi.JD_ZERO],t);if(f===Oi)return{sunrise:Oi,suntransit:Oi,sunset:Oi,srha:Oi,ssha:Oi,sta:Oi,eot:o};__(u,f);const d=[],h=[],S=[],m=[],Y=[];for(let M=0;M<cn.SUN_COUNT;M++){d[M]=s+360.985647*u[M];const b=u[M]+r.deltaT/86400;S[M]=zh(l,b),m[M]=zh(c,b),h[M]=kS(d[M]+r.longitude-S[M]),Y[M]=T_(r.latitude,m[M],h[M])}const p=h[cn.SUN_RISE],v=h[cn.SUN_SET],x=Y[cn.SUN_TRANSIT],_=dc(u[cn.SUN_TRANSIT]-h[cn.SUN_TRANSIT]/360,r.timezone),E=dc(kh(u,Y,m,r.latitude,h,t,cn.SUN_RISE),r.timezone),V=dc(kh(u,Y,m,r.latitude,h,t,cn.SUN_SET),r.timezone);return{sunrise:E,suntransit:_,sunset:V,srha:p,ssha:v,sta:x,eot:o}}function Ya(r,e,t,n){const i=ut(r),s=ut(e),a=ut(n),o=(Math.cos(a)-Math.sin(i)*Math.sin(s))/(Math.cos(i)*Math.cos(s));if(o<-1||o>1)return{sunrise:null,sunset:null};const l=ci(Math.acos(o))/15;return{sunrise:t-l,sunset:t+l}}function U_(){return{year:0,month:0,day:0,hour:0,minute:0,second:0,deltaUt1:0,deltaT:67,timezone:0,longitude:0,latitude:0,elevation:0,pressure:1013,temperature:15,slope:0,azimuthRotation:0,atmosphericRefraction:MY,timezoneId:"",function:zr.SPA_ALL,jd:0,jc:0,jde:0,jce:0,jme:0,l:0,b:0,r:0,theta:0,beta:0,x0:0,x1:0,x2:0,x3:0,x4:0,delPsi:0,delEpsilon:0,epsilon0:0,epsilon:0,delTau:0,lamda:0,nu0:0,nu:0,alpha:0,delta:0,h:0,xi:0,delAlpha:0,deltaPrime:0,alphaPrime:0,hPrime:0,e0:0,delE:0,e:0,eot:0,srha:0,ssha:0,sta:0,zenith:0,azimuthAstro:0,azimuth:0,incidence:0,suntransit:0,sunrise:0,sunset:0}}function M_(r){return r.year<-2e3||r.year>6e3?1:r.month<1||r.month>12?2:r.day<1||r.day>31?3:r.hour<0||r.hour>24?4:r.minute<0||r.minute>59?5:r.second<0||r.second>=60?6:r.pressure<0||r.pressure>5e3?12:r.temperature<=-273||r.temperature>6e3?13:r.deltaUt1<=-1||r.deltaUt1>=1?17:r.hour===24&&r.minute>0?5:r.hour===24&&r.second>0?6:Math.abs(r.deltaT)>8e3?7:Math.abs(r.timezone)>18?8:Math.abs(r.longitude)>180?9:Math.abs(r.latitude)>90?10:Math.abs(r.atmosphericRefraction)>5?16:r.elevation<-65e5?11:0}function v_(r){r.jc=xY(r.jd),r.jde=EY(r.jd,r.deltaT),r.jce=VY(r.jde),r.jme=yY(r.jce),r.l=AY(r.jme),r.b=bY(r.jme),r.r=PY(r.jme),r.theta=XY(r.l),r.beta=CY(r.b),r.x0=DY(r.jce),r.x1=NY(r.jce),r.x2=OY(r.jce),r.x3=FY(r.jce),r.x4=GY(r.jce);const e=[r.x0,r.x1,r.x2,r.x3,r.x4],t=BY(r.jce,e);r.delPsi=t.delPsi,r.delEpsilon=t.delEpsilon,r.epsilon0=ZY(r.jme),r.epsilon=HY(r.delEpsilon,r.epsilon0),r.delTau=RY(r.r),r.lamda=IY(r.theta,r.delPsi,r.delTau),r.nu0=zY(r.jd,r.jc),r.nu=kY(r.nu0,r.delPsi,r.epsilon),r.alpha=wY(r.lamda,r.epsilon,r.beta),r.delta=LY(r.beta,r.epsilon,r.lamda)}function x_(r,e){const t=xY(r),n=EY(r,e),i=VY(n),s=yY(i),a=AY(s),o=bY(s),l=PY(s),c=XY(a),u=CY(o),f=DY(i),d=NY(i),h=OY(i),S=FY(i),m=GY(i),p=BY(i,[f,d,h,S,m]),v=ZY(s),x=HY(p.delEpsilon,v),_=RY(l),E=IY(c,p.delPsi,_),V=zY(r,t),M=kY(V,p.delPsi,x),b=wY(E,x,u),g=LY(u,x,E);return{alpha:b,delta:g,nu:M}}function $Y(r){const e=M_(r);if(e!==0)return e;r.jd=vY(r.year,r.month,r.day,r.hour,r.minute,r.second,r.deltaUt1,r.timezone),v_(r),r.h=s_(r.nu,r.longitude,r.alpha),r.xi=i_(r.r);const t=a_(r.latitude,r.elevation,r.xi,r.h,r.delta);if(r.delAlpha=t.deltaAlpha,r.deltaPrime=t.deltaPrime,r.alphaPrime=o_(r.alpha,r.delAlpha),r.hPrime=l_(r.h,r.delAlpha),r.e0=c_(r.latitude,r.deltaPrime,r.hPrime),r.delE=u_(r.pressure,r.temperature,r.atmosphericRefraction,r.e0),r.e=f_(r.e0,r.delE),r.zenith=h_(r.e),r.azimuthAstro=d_(r.hPrime,r.latitude,r.deltaPrime),r.azimuth=p_(r.azimuthAstro),(r.function===zr.SPA_ZA_INC||r.function===zr.SPA_ALL)&&(r.incidence=Y_(r.zenith,r.azimuthAstro,r.azimuthRotation,r.slope)),r.function===zr.SPA_ZA_RTS||r.function===zr.SPA_ALL){const n=W_(r,x_);r.sunrise=n.sunrise,r.suntransit=n.suntransit,r.sunset=n.sunset,r.srha=n.srha,r.ssha=n.ssha,r.sta=n.sta,r.eot=n.eot}return 0}function KY(r,e,t,n={}){const i=U_(),s=t_(r,n.timezone,n.timezoneId);return i.year=s.year,i.month=s.month,i.day=s.day,i.hour=s.hour,i.minute=s.minute,i.second=s.second,i.timezone=s.timezone,i.timezoneId=n.timezoneId??"",i.latitude=e,i.longitude=t,i.elevation=n.elevation??0,i.pressure=n.pressure??1013,i.temperature=n.temperature??15,i.deltaUt1=n.deltaUt1??0,i.deltaT=n.deltaT??67,i.slope=n.slope??0,i.azimuthRotation=n.azimuthRotation??0,i.atmosphericRefraction=n.atmosphericRefraction??MY,i.function=zr.SPA_ALL,i}function $h(r){return r!==Oi&&isFinite(r)&&r>=0}function Zf(r,e,t=new Date,n){const i=KY(t,r,e,n);return $Y(i)!==0?null:{zenith:i.zenith,azimuth:i.azimuth,azimuthAstro:i.azimuthAstro,elevation:i.e,rightAscension:i.alpha,declination:i.delta,hourAngle:i.h}}function E_(r,e,t=new Date,n){const i=KY(t,r,e,n);if($Y(i)!==0)return{sunrise:null,sunset:null,solarNoon:null,twilight:null};const a=l=>$h(l)?Zh(i.year,i.month,i.day,l,i.timezone):null;let o=null;if($h(i.suntransit)){const l=Ya(r,i.delta,i.suntransit,LS),c=Ya(r,i.delta,i.suntransit,DS),u=Ya(r,i.delta,i.suntransit,NS),f=Ya(r,i.delta,i.suntransit,OS),d=Ya(r,i.delta,i.suntransit,FS),h=S=>S===null||!isFinite(S)?null:Zh(i.year,i.month,i.day,S,i.timezone);o={civilDawn:h(l.sunrise),civilDusk:h(l.sunset),nauticalDawn:h(c.sunrise),nauticalDusk:h(c.sunset),astronomicalDawn:h(u.sunrise),astronomicalDusk:h(u.sunset),goldenHour:{morning:{start:h(i.sunrise),end:h(f.sunrise)},evening:{start:h(f.sunset),end:h(i.sunset)}},blueHour:{morning:{start:h(d.sunrise),end:h(i.sunrise)},evening:{start:h(i.sunset),end:h(d.sunset)}}}}return{sunrise:a(i.sunrise),sunset:a(i.sunset),solarNoon:a(i.suntransit),twilight:o}}const Hf="180",V_=0,Kh=1,y_=2,QY=1,A_=2,Di=3,xr=0,Mn=1,Zi=2,Tr=0,ks=1,Su=2,Qh=3,Jh=4,b_=5,Gr=100,P_=101,X_=102,C_=103,R_=104,I_=200,w_=201,L_=202,D_=203,_u=204,Tu=205,N_=206,O_=207,F_=208,G_=209,B_=210,Z_=211,H_=212,z_=213,k_=214,gu=0,Wu=1,Uu=2,na=3,Mu=4,vu=5,xu=6,Eu=7,JY=0,$_=1,K_=2,gr=0,Q_=1,J_=2,q_=3,qY=4,j_=5,eT=6,tT=7,jY=300,ia=301,ra=302,Vu=303,yu=304,Zl=306,Au=1e3,kr=1001,bu=1002,mi=1003,nT=1004,Ro=1005,Vi=1006,pc=1007,$r=1008,qi=1009,em=1010,tm=1011,no=1012,zf=1013,os=1014,ki=1015,fo=1016,kf=1017,$f=1018,io=1020,nm=35902,im=35899,rm=1021,sm=1022,Yi=1023,ro=1026,so=1027,am=1028,Kf=1029,om=1030,Qf=1031,Jf=1033,Tl=33776,gl=33777,Wl=33778,Ul=33779,Pu=35840,Xu=35841,Cu=35842,Ru=35843,Iu=36196,wu=37492,Lu=37496,Du=37808,Nu=37809,Ou=37810,Fu=37811,Gu=37812,Bu=37813,Zu=37814,Hu=37815,zu=37816,ku=37817,$u=37818,Ku=37819,Qu=37820,Ju=37821,qu=36492,ju=36494,ef=36495,tf=36283,nf=36284,rf=36285,sf=36286,iT=3200,rT=3201,sT=0,aT=1,cr="",ni="srgb",sa="srgb-linear",Ll="linear",Wt="srgb",Ss=7680,qh=519,oT=512,lT=513,cT=514,lm=515,uT=516,fT=517,hT=518,dT=519,jh=35044,ed="300 es",yi=2e3,Dl=2001;class la{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ml=Math.PI/180,af=180/Math.PI;function ho(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(an[r&255]+an[r>>8&255]+an[r>>16&255]+an[r>>24&255]+"-"+an[e&255]+an[e>>8&255]+"-"+an[e>>16&15|64]+an[e>>24&255]+"-"+an[t&63|128]+an[t>>8&255]+"-"+an[t>>16&255]+an[t>>24&255]+an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]).toLowerCase()}function ot(r,e,t){return Math.max(e,Math.min(t,r))}function pT(r,e){return(r%e+e)%e}function Yc(r,e,t){return(1-t)*r+t*e}function YT(r){return r*Ml}function ma(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function xn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const cm={clamp:ot,degToRad:YT};class Ut{constructor(e=0,t=0){Ut.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class po{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3];const d=s[a+0],h=s[a+1],S=s[a+2],m=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=h,e[t+2]=S,e[t+3]=m;return}if(f!==m||l!==d||c!==h||u!==S){let Y=1-o;const p=l*d+c*h+u*S+f*m,v=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const E=Math.sqrt(x),V=Math.atan2(E,p*v);Y=Math.sin(Y*V)/E,o=Math.sin(o*V)/E}const _=o*v;if(l=l*Y+d*_,c=c*Y+h*_,u=u*Y+S*_,f=f*Y+m*_,Y===1-o){const E=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=E,c*=E,u*=E,f*=E}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=s[a],d=s[a+1],h=s[a+2],S=s[a+3];return e[t]=o*S+u*f+l*h-c*d,e[t+1]=l*S+u*d+c*f-o*h,e[t+2]=c*S+u*h+o*d-l*f,e[t+3]=u*S-o*f-l*d-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),f=o(s/2),d=l(n/2),h=l(i/2),S=l(s/2);switch(a){case"XYZ":this._x=d*u*f+c*h*S,this._y=c*h*f-d*u*S,this._z=c*u*S+d*h*f,this._w=c*u*f-d*h*S;break;case"YXZ":this._x=d*u*f+c*h*S,this._y=c*h*f-d*u*S,this._z=c*u*S-d*h*f,this._w=c*u*f+d*h*S;break;case"ZXY":this._x=d*u*f-c*h*S,this._y=c*h*f+d*u*S,this._z=c*u*S+d*h*f,this._w=c*u*f-d*h*S;break;case"ZYX":this._x=d*u*f-c*h*S,this._y=c*h*f+d*u*S,this._z=c*u*S-d*h*f,this._w=c*u*f+d*h*S;break;case"YZX":this._x=d*u*f+c*h*S,this._y=c*h*f+d*u*S,this._z=c*u*S-d*h*f,this._w=c*u*f-d*h*S;break;case"XZY":this._x=d*u*f-c*h*S,this._y=c*h*f-d*u*S,this._z=c*u*S+d*h*f,this._w=c*u*f+d*h*S;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=n+o+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(a-i)*h}else if(n>o&&n>f){const h=2*Math.sqrt(1+n-o-f);this._w=(u-l)/h,this._x=.25*h,this._y=(i+a)/h,this._z=(s+c)/h}else if(o>f){const h=2*Math.sqrt(1+o-n-f);this._w=(s-c)/h,this._x=(i+a)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+f-n-o);this._w=(a-i)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ot(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const h=1-t;return this._w=h*a+t*this._w,this._x=h*n+t*this._x,this._y=h*i+t*this._y,this._z=h*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*f+this._w*d,this._x=n*f+this._x*d,this._y=i*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,n=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(td.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(td.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-s*i),f=2*(s*n-a*t);return this.x=t+l*c+a*f-o*u,this.y=n+l*u+o*c-s*f,this.z=i+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return mc.copy(this).projectOnVector(e),this.sub(mc)}reflect(e){return this.sub(mc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const mc=new z,td=new po;class Je{constructor(e,t,n,i,s,a,o,l,c){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],d=n[2],h=n[5],S=n[8],m=i[0],Y=i[3],p=i[6],v=i[1],x=i[4],_=i[7],E=i[2],V=i[5],M=i[8];return s[0]=a*m+o*v+l*E,s[3]=a*Y+o*x+l*V,s[6]=a*p+o*_+l*M,s[1]=c*m+u*v+f*E,s[4]=c*Y+u*x+f*V,s[7]=c*p+u*_+f*M,s[2]=d*m+h*v+S*E,s[5]=d*Y+h*x+S*V,s[8]=d*p+h*_+S*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,d=o*l-u*s,h=c*s-a*l,S=t*f+n*d+i*h;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/S;return e[0]=f*m,e[1]=(i*c-u*n)*m,e[2]=(o*n-i*a)*m,e[3]=d*m,e[4]=(u*t-i*l)*m,e[5]=(i*s-o*t)*m,e[6]=h*m,e[7]=(n*l-c*t)*m,e[8]=(a*t-n*s)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Sc.makeScale(e,t)),this}rotate(e){return this.premultiply(Sc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Sc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Sc=new Je;function um(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Nl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function mT(){const r=Nl("canvas");return r.style.display="block",r}const nd={};function ao(r){r in nd||(nd[r]=!0,console.warn(r))}function ST(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const id=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rd=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _T(){const r={enabled:!0,workingColorSpace:sa,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Wt&&(i.r=Ki(i.r),i.g=Ki(i.g),i.b=Ki(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Wt&&(i.r=$s(i.r),i.g=$s(i.g),i.b=$s(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===cr?Ll:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return ao("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return ao("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[sa]:{primaries:e,whitePoint:n,transfer:Ll,toXYZ:id,fromXYZ:rd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ni},outputColorSpaceConfig:{drawingBufferColorSpace:ni}},[ni]:{primaries:e,whitePoint:n,transfer:Wt,toXYZ:id,fromXYZ:rd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ni}}}),r}const Yt=_T();function Ki(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function $s(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let _s;class TT{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{_s===void 0&&(_s=Nl("canvas")),_s.width=e.width,_s.height=e.height;const i=_s.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=_s}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Nl("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Ki(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ki(t[n]/255)*255):t[n]=Ki(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let gT=0;class qf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gT++}),this.uuid=ho(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(_c(i[a].image)):s.push(_c(i[a]))}else s=_c(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function _c(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?TT.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let WT=0;const Tc=new z;class Xn extends la{constructor(e=Xn.DEFAULT_IMAGE,t=Xn.DEFAULT_MAPPING,n=kr,i=kr,s=Vi,a=$r,o=Yi,l=qi,c=Xn.DEFAULT_ANISOTROPY,u=cr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:WT++}),this.uuid=ho(),this.name="",this.source=new qf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ut(0,0),this.repeat=new Ut(1,1),this.center=new Ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Tc).x}get height(){return this.source.getSize(Tc).y}get depth(){return this.source.getSize(Tc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jY)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Au:e.x=e.x-Math.floor(e.x);break;case kr:e.x=e.x<0?0:1;break;case bu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Au:e.y=e.y-Math.floor(e.y);break;case kr:e.y=e.y<0?0:1;break;case bu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=jY;Xn.DEFAULT_ANISOTROPY=1;class Gt{constructor(e=0,t=0,n=0,i=1){Gt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],h=l[5],S=l[9],m=l[2],Y=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-m)<.01&&Math.abs(S-Y)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+m)<.1&&Math.abs(S+Y)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,_=(h+1)/2,E=(p+1)/2,V=(u+d)/4,M=(f+m)/4,b=(S+Y)/4;return x>_&&x>E?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=V/n,s=M/n):_>E?_<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(_),n=V/i,s=b/i):E<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(E),n=M/s,i=b/s),this.set(n,i,s,t),this}let v=Math.sqrt((Y-S)*(Y-S)+(f-m)*(f-m)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(Y-S)/v,this.y=(f-m)/v,this.z=(d-u)/v,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this.w=ot(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this.w=ot(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class UT extends la{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Gt(0,0,e,t),this.scissorTest=!1,this.viewport=new Gt(0,0,e,t);const i={width:e,height:t,depth:n.depth},s=new Xn(i);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Vi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new qf(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ls extends UT{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class fm extends Xn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=mi,this.minFilter=mi,this.wrapR=kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class MT extends Xn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=mi,this.minFilter=mi,this.wrapR=kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yo{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ui.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ui.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ui.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ui):ui.fromBufferAttribute(s,a),ui.applyMatrix4(e.matrixWorld),this.expandByPoint(ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Io.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Io.copy(n.boundingBox)),Io.applyMatrix4(e.matrixWorld),this.union(Io)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ui),ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Sa),wo.subVectors(this.max,Sa),Ts.subVectors(e.a,Sa),gs.subVectors(e.b,Sa),Ws.subVectors(e.c,Sa),nr.subVectors(gs,Ts),ir.subVectors(Ws,gs),Pr.subVectors(Ts,Ws);let t=[0,-nr.z,nr.y,0,-ir.z,ir.y,0,-Pr.z,Pr.y,nr.z,0,-nr.x,ir.z,0,-ir.x,Pr.z,0,-Pr.x,-nr.y,nr.x,0,-ir.y,ir.x,0,-Pr.y,Pr.x,0];return!gc(t,Ts,gs,Ws,wo)||(t=[1,0,0,0,1,0,0,0,1],!gc(t,Ts,gs,Ws,wo))?!1:(Lo.crossVectors(nr,ir),t=[Lo.x,Lo.y,Lo.z],gc(t,Ts,gs,Ws,wo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ci=[new z,new z,new z,new z,new z,new z,new z,new z],ui=new z,Io=new Yo,Ts=new z,gs=new z,Ws=new z,nr=new z,ir=new z,Pr=new z,Sa=new z,wo=new z,Lo=new z,Xr=new z;function gc(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Xr.fromArray(r,s);const o=i.x*Math.abs(Xr.x)+i.y*Math.abs(Xr.y)+i.z*Math.abs(Xr.z),l=e.dot(Xr),c=t.dot(Xr),u=n.dot(Xr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const vT=new Yo,_a=new z,Wc=new z;class Hl{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):vT.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_a.subVectors(e,this.center);const t=_a.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(_a,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_a.copy(e.center).add(Wc)),this.expandByPoint(_a.copy(e.center).sub(Wc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ri=new z,Uc=new z,Do=new z,rr=new z,Mc=new z,No=new z,vc=new z;class hm{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ri)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ri.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ri.copy(this.origin).addScaledVector(this.direction,t),Ri.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Uc.copy(e).add(t).multiplyScalar(.5),Do.copy(t).sub(e).normalize(),rr.copy(this.origin).sub(Uc);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Do),o=rr.dot(this.direction),l=-rr.dot(Do),c=rr.lengthSq(),u=Math.abs(1-a*a);let f,d,h,S;if(u>0)if(f=a*l-o,d=a*o-l,S=s*u,f>=0)if(d>=-S)if(d<=S){const m=1/u;f*=m,d*=m,h=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;else d<=-S?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c):d<=S?(f=0,d=Math.min(Math.max(-s,-l),s),h=d*(d+2*l)+c):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(Uc).addScaledVector(Do,d),h}intersectSphere(e,t){Ri.subVectors(e.center,this.origin);const n=Ri.dot(this.direction),i=Ri.dot(Ri)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ri)!==null}intersectTriangle(e,t,n,i,s){Mc.subVectors(t,e),No.subVectors(n,e),vc.crossVectors(Mc,No);let a=this.direction.dot(vc),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;rr.subVectors(this.origin,e);const l=o*this.direction.dot(No.crossVectors(rr,No));if(l<0)return null;const c=o*this.direction.dot(Mc.cross(rr));if(c<0||l+c>a)return null;const u=-o*rr.dot(vc);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class kt{constructor(e,t,n,i,s,a,o,l,c,u,f,d,h,S,m,Y){kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,u,f,d,h,S,m,Y)}set(e,t,n,i,s,a,o,l,c,u,f,d,h,S,m,Y){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=d,p[3]=h,p[7]=S,p[11]=m,p[15]=Y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new kt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Us.setFromMatrixColumn(e,0).length(),s=1/Us.setFromMatrixColumn(e,1).length(),a=1/Us.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*u,h=a*f,S=o*u,m=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=h+S*c,t[5]=d-m*c,t[9]=-o*l,t[2]=m-d*c,t[6]=S+h*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,h=l*f,S=c*u,m=c*f;t[0]=d+m*o,t[4]=S*o-h,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=h*o-S,t[6]=m+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,h=l*f,S=c*u,m=c*f;t[0]=d-m*o,t[4]=-a*f,t[8]=S+h*o,t[1]=h+S*o,t[5]=a*u,t[9]=m-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,h=a*f,S=o*u,m=o*f;t[0]=l*u,t[4]=S*c-h,t[8]=d*c+m,t[1]=l*f,t[5]=m*c+d,t[9]=h*c-S,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,h=a*c,S=o*l,m=o*c;t[0]=l*u,t[4]=m-d*f,t[8]=S*f+h,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=h*f+S,t[10]=d-m*f}else if(e.order==="XZY"){const d=a*l,h=a*c,S=o*l,m=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+m,t[5]=a*u,t[9]=h*f-S,t[2]=S*f-h,t[6]=o*u,t[10]=m*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xT,e,ET)}lookAt(e,t,n){const i=this.elements;return Dn.subVectors(e,t),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),sr.crossVectors(n,Dn),sr.lengthSq()===0&&(Math.abs(n.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),sr.crossVectors(n,Dn)),sr.normalize(),Oo.crossVectors(Dn,sr),i[0]=sr.x,i[4]=Oo.x,i[8]=Dn.x,i[1]=sr.y,i[5]=Oo.y,i[9]=Dn.y,i[2]=sr.z,i[6]=Oo.z,i[10]=Dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],d=n[9],h=n[13],S=n[2],m=n[6],Y=n[10],p=n[14],v=n[3],x=n[7],_=n[11],E=n[15],V=i[0],M=i[4],b=i[8],g=i[12],T=i[1],C=i[5],R=i[9],O=i[13],Z=i[2],B=i[6],H=i[10],G=i[14],N=i[3],ne=i[7],P=i[11],fe=i[15];return s[0]=a*V+o*T+l*Z+c*N,s[4]=a*M+o*C+l*B+c*ne,s[8]=a*b+o*R+l*H+c*P,s[12]=a*g+o*O+l*G+c*fe,s[1]=u*V+f*T+d*Z+h*N,s[5]=u*M+f*C+d*B+h*ne,s[9]=u*b+f*R+d*H+h*P,s[13]=u*g+f*O+d*G+h*fe,s[2]=S*V+m*T+Y*Z+p*N,s[6]=S*M+m*C+Y*B+p*ne,s[10]=S*b+m*R+Y*H+p*P,s[14]=S*g+m*O+Y*G+p*fe,s[3]=v*V+x*T+_*Z+E*N,s[7]=v*M+x*C+_*B+E*ne,s[11]=v*b+x*R+_*H+E*P,s[15]=v*g+x*O+_*G+E*fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],h=e[14],S=e[3],m=e[7],Y=e[11],p=e[15];return S*(+s*l*f-i*c*f-s*o*d+n*c*d+i*o*h-n*l*h)+m*(+t*l*h-t*c*d+s*a*d-i*a*h+i*c*u-s*l*u)+Y*(+t*c*f-t*o*h-s*a*f+n*a*h+s*o*u-n*c*u)+p*(-i*o*u-t*l*f+t*o*d+i*a*f-n*a*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],h=e[11],S=e[12],m=e[13],Y=e[14],p=e[15],v=f*Y*c-m*d*c+m*l*h-o*Y*h-f*l*p+o*d*p,x=S*d*c-u*Y*c-S*l*h+a*Y*h+u*l*p-a*d*p,_=u*m*c-S*f*c+S*o*h-a*m*h-u*o*p+a*f*p,E=S*f*l-u*m*l-S*o*d+a*m*d+u*o*Y-a*f*Y,V=t*v+n*x+i*_+s*E;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/V;return e[0]=v*M,e[1]=(m*d*s-f*Y*s-m*i*h+n*Y*h+f*i*p-n*d*p)*M,e[2]=(o*Y*s-m*l*s+m*i*c-n*Y*c-o*i*p+n*l*p)*M,e[3]=(f*l*s-o*d*s-f*i*c+n*d*c+o*i*h-n*l*h)*M,e[4]=x*M,e[5]=(u*Y*s-S*d*s+S*i*h-t*Y*h-u*i*p+t*d*p)*M,e[6]=(S*l*s-a*Y*s-S*i*c+t*Y*c+a*i*p-t*l*p)*M,e[7]=(a*d*s-u*l*s+u*i*c-t*d*c-a*i*h+t*l*h)*M,e[8]=_*M,e[9]=(S*f*s-u*m*s-S*n*h+t*m*h+u*n*p-t*f*p)*M,e[10]=(a*m*s-S*o*s+S*n*c-t*m*c-a*n*p+t*o*p)*M,e[11]=(u*o*s-a*f*s-u*n*c+t*f*c+a*n*h-t*o*h)*M,e[12]=E*M,e[13]=(u*m*i-S*f*i+S*n*d-t*m*d-u*n*Y+t*f*Y)*M,e[14]=(S*o*i-a*m*i-S*n*l+t*m*l+a*n*Y-t*o*Y)*M,e[15]=(a*f*i-u*o*i+u*n*l-t*f*l-a*n*d+t*o*d)*M,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,d=s*c,h=s*u,S=s*f,m=a*u,Y=a*f,p=o*f,v=l*c,x=l*u,_=l*f,E=n.x,V=n.y,M=n.z;return i[0]=(1-(m+p))*E,i[1]=(h+_)*E,i[2]=(S-x)*E,i[3]=0,i[4]=(h-_)*V,i[5]=(1-(d+p))*V,i[6]=(Y+v)*V,i[7]=0,i[8]=(S+x)*M,i[9]=(Y-v)*M,i[10]=(1-(d+m))*M,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Us.set(i[0],i[1],i[2]).length();const a=Us.set(i[4],i[5],i[6]).length(),o=Us.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],fi.copy(this);const c=1/s,u=1/a,f=1/o;return fi.elements[0]*=c,fi.elements[1]*=c,fi.elements[2]*=c,fi.elements[4]*=u,fi.elements[5]*=u,fi.elements[6]*=u,fi.elements[8]*=f,fi.elements[9]*=f,fi.elements[10]*=f,t.setFromRotationMatrix(fi),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=yi,l=!1){const c=this.elements,u=2*s/(t-e),f=2*s/(n-i),d=(t+e)/(t-e),h=(n+i)/(n-i);let S,m;if(l)S=s/(a-s),m=a*s/(a-s);else if(o===yi)S=-(a+s)/(a-s),m=-2*a*s/(a-s);else if(o===Dl)S=-a/(a-s),m=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=S,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=yi,l=!1){const c=this.elements,u=2/(t-e),f=2/(n-i),d=-(t+e)/(t-e),h=-(n+i)/(n-i);let S,m;if(l)S=1/(a-s),m=a/(a-s);else if(o===yi)S=-2/(a-s),m=-(a+s)/(a-s);else if(o===Dl)S=-1/(a-s),m=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=S,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Us=new z,fi=new kt,xT=new z(0,0,0),ET=new z(1,1,1),sr=new z,Oo=new z,Dn=new z,sd=new kt,ad=new po;class ji{constructor(e=0,t=0,n=0,i=ji.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],f=i[2],d=i[6],h=i[10];switch(t){case"XYZ":this._y=Math.asin(ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ot(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(ot(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ot(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return sd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ad.setFromEuler(this),this.setFromQuaternion(ad,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ji.DEFAULT_ORDER="XYZ";class dm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let VT=0;const od=new z,Ms=new po,Ii=new kt,Fo=new z,Ta=new z,yT=new z,AT=new po,ld=new z(1,0,0),cd=new z(0,1,0),ud=new z(0,0,1),fd={type:"added"},bT={type:"removed"},vs={type:"childadded",child:null},xc={type:"childremoved",child:null};class Cn extends la{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:VT++}),this.uuid=ho(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Cn.DEFAULT_UP.clone();const e=new z,t=new ji,n=new po,i=new z(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new kt},normalMatrix:{value:new Je}}),this.matrix=new kt,this.matrixWorld=new kt,this.matrixAutoUpdate=Cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ms.setFromAxisAngle(e,t),this.quaternion.multiply(Ms),this}rotateOnWorldAxis(e,t){return Ms.setFromAxisAngle(e,t),this.quaternion.premultiply(Ms),this}rotateX(e){return this.rotateOnAxis(ld,e)}rotateY(e){return this.rotateOnAxis(cd,e)}rotateZ(e){return this.rotateOnAxis(ud,e)}translateOnAxis(e,t){return od.copy(e).applyQuaternion(this.quaternion),this.position.add(od.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ld,e)}translateY(e){return this.translateOnAxis(cd,e)}translateZ(e){return this.translateOnAxis(ud,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Fo.copy(e):Fo.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ta.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(Ta,Fo,this.up):Ii.lookAt(Fo,Ta,this.up),this.quaternion.setFromRotationMatrix(Ii),i&&(Ii.extractRotation(i.matrixWorld),Ms.setFromRotationMatrix(Ii),this.quaternion.premultiply(Ms.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(fd),vs.child=e,this.dispatchEvent(vs),vs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(bT),xc.child=e,this.dispatchEvent(xc),xc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(fd),vs.child=e,this.dispatchEvent(vs),vs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ta,e,yT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ta,AT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),h=a(e.animations),S=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),h.length>0&&(n.animations=h),S.length>0&&(n.nodes=S)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Cn.DEFAULT_UP=new z(0,1,0);Cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hi=new z,wi=new z,Ec=new z,Li=new z,xs=new z,Es=new z,hd=new z,Vc=new z,yc=new z,Ac=new z,bc=new Gt,Pc=new Gt,Xc=new Gt;class pi{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),hi.subVectors(e,t),i.cross(hi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){hi.subVectors(i,t),wi.subVectors(n,t),Ec.subVectors(e,t);const a=hi.dot(hi),o=hi.dot(wi),l=hi.dot(Ec),c=wi.dot(wi),u=wi.dot(Ec),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,h=(c*l-o*u)*d,S=(a*u-o*l)*d;return s.set(1-h-S,S,h)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Li)===null?!1:Li.x>=0&&Li.y>=0&&Li.x+Li.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Li.x),l.addScaledVector(a,Li.y),l.addScaledVector(o,Li.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return bc.setScalar(0),Pc.setScalar(0),Xc.setScalar(0),bc.fromBufferAttribute(e,t),Pc.fromBufferAttribute(e,n),Xc.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(bc,s.x),a.addScaledVector(Pc,s.y),a.addScaledVector(Xc,s.z),a}static isFrontFacing(e,t,n,i){return hi.subVectors(n,t),wi.subVectors(e,t),hi.cross(wi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hi.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),hi.cross(wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return pi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return pi.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return pi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;xs.subVectors(i,n),Es.subVectors(s,n),Vc.subVectors(e,n);const l=xs.dot(Vc),c=Es.dot(Vc);if(l<=0&&c<=0)return t.copy(n);yc.subVectors(e,i);const u=xs.dot(yc),f=Es.dot(yc);if(u>=0&&f<=u)return t.copy(i);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(xs,a);Ac.subVectors(e,s);const h=xs.dot(Ac),S=Es.dot(Ac);if(S>=0&&h<=S)return t.copy(s);const m=h*c-l*S;if(m<=0&&c>=0&&S<=0)return o=c/(c-S),t.copy(n).addScaledVector(Es,o);const Y=u*S-h*f;if(Y<=0&&f-u>=0&&h-S>=0)return hd.subVectors(s,i),o=(f-u)/(f-u+(h-S)),t.copy(i).addScaledVector(hd,o);const p=1/(Y+m+d);return a=m*p,o=d*p,t.copy(n).addScaledVector(xs,a).addScaledVector(Es,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const pm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ar={h:0,s:0,l:0},Go={h:0,s:0,l:0};function Cc(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class gt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ni){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Yt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Yt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Yt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Yt.workingColorSpace){if(e=pT(e,1),t=ot(t,0,1),n=ot(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Cc(a,s,e+1/3),this.g=Cc(a,s,e),this.b=Cc(a,s,e-1/3)}return Yt.colorSpaceToWorking(this,i),this}setStyle(e,t=ni){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ni){const n=pm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ki(e.r),this.g=Ki(e.g),this.b=Ki(e.b),this}copyLinearToSRGB(e){return this.r=$s(e.r),this.g=$s(e.g),this.b=$s(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ni){return Yt.workingToColorSpace(on.copy(this),e),Math.round(ot(on.r*255,0,255))*65536+Math.round(ot(on.g*255,0,255))*256+Math.round(ot(on.b*255,0,255))}getHexString(e=ni){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Yt.workingColorSpace){Yt.workingToColorSpace(on.copy(this),t);const n=on.r,i=on.g,s=on.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Yt.workingColorSpace){return Yt.workingToColorSpace(on.copy(this),t),e.r=on.r,e.g=on.g,e.b=on.b,e}getStyle(e=ni){Yt.workingToColorSpace(on.copy(this),e);const t=on.r,n=on.g,i=on.b;return e!==ni?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ar),this.setHSL(ar.h+e,ar.s+t,ar.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ar),e.getHSL(Go);const n=Yc(ar.h,Go.h,t),i=Yc(ar.s,Go.s,t),s=Yc(ar.l,Go.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const on=new gt;gt.NAMES=pm;let PT=0;class mo extends la{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:PT++}),this.uuid=ho(),this.name="",this.type="Material",this.blending=ks,this.side=xr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_u,this.blendDst=Tu,this.blendEquation=Gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new gt(0,0,0),this.blendAlpha=0,this.depthFunc=na,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ss,this.stencilZFail=Ss,this.stencilZPass=Ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ks&&(n.blending=this.blending),this.side!==xr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==_u&&(n.blendSrc=this.blendSrc),this.blendDst!==Tu&&(n.blendDst=this.blendDst),this.blendEquation!==Gr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==na&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ss&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ss&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ss&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ym extends mo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ji,this.combine=JY,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Zt=new z,Bo=new Ut;let XT=0;class Si{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:XT++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=jh,this.updateRanges=[],this.gpuType=ki,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Bo.fromBufferAttribute(this,t),Bo.applyMatrix3(e),this.setXY(t,Bo.x,Bo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ma(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=xn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ma(t,this.array)),t}setX(e,t){return this.normalized&&(t=xn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ma(t,this.array)),t}setY(e,t){return this.normalized&&(t=xn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ma(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ma(t,this.array)),t}setW(e,t){return this.normalized&&(t=xn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=xn(t,this.array),n=xn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=xn(t,this.array),n=xn(n,this.array),i=xn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=xn(t,this.array),n=xn(n,this.array),i=xn(i,this.array),s=xn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==jh&&(e.usage=this.usage),e}}class mm extends Si{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Sm extends Si{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ns extends Si{constructor(e,t,n){super(new Float32Array(e),t,n)}}let CT=0;const ei=new kt,Rc=new Cn,Vs=new z,Nn=new Yo,ga=new Yo,jt=new z;class tr extends la{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:CT++}),this.uuid=ho(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(um(e)?Sm:mm)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Je().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ei.makeRotationFromQuaternion(e),this.applyMatrix4(ei),this}rotateX(e){return ei.makeRotationX(e),this.applyMatrix4(ei),this}rotateY(e){return ei.makeRotationY(e),this.applyMatrix4(ei),this}rotateZ(e){return ei.makeRotationZ(e),this.applyMatrix4(ei),this}translate(e,t,n){return ei.makeTranslation(e,t,n),this.applyMatrix4(ei),this}scale(e,t,n){return ei.makeScale(e,t,n),this.applyMatrix4(ei),this}lookAt(e){return Rc.lookAt(e),Rc.updateMatrix(),this.applyMatrix4(Rc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vs).negate(),this.translate(Vs.x,Vs.y,Vs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ns(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Nn.setFromBufferAttribute(s),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const n=this.boundingSphere.center;if(Nn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];ga.setFromBufferAttribute(o),this.morphTargetsRelative?(jt.addVectors(Nn.min,ga.min),Nn.expandByPoint(jt),jt.addVectors(Nn.max,ga.max),Nn.expandByPoint(jt)):(Nn.expandByPoint(ga.min),Nn.expandByPoint(ga.max))}Nn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)jt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(jt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)jt.fromBufferAttribute(o,c),l&&(Vs.fromBufferAttribute(e,c),jt.add(Vs)),i=Math.max(i,n.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Si(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let b=0;b<n.count;b++)o[b]=new z,l[b]=new z;const c=new z,u=new z,f=new z,d=new Ut,h=new Ut,S=new Ut,m=new z,Y=new z;function p(b,g,T){c.fromBufferAttribute(n,b),u.fromBufferAttribute(n,g),f.fromBufferAttribute(n,T),d.fromBufferAttribute(s,b),h.fromBufferAttribute(s,g),S.fromBufferAttribute(s,T),u.sub(c),f.sub(c),h.sub(d),S.sub(d);const C=1/(h.x*S.y-S.x*h.y);isFinite(C)&&(m.copy(u).multiplyScalar(S.y).addScaledVector(f,-h.y).multiplyScalar(C),Y.copy(f).multiplyScalar(h.x).addScaledVector(u,-S.x).multiplyScalar(C),o[b].add(m),o[g].add(m),o[T].add(m),l[b].add(Y),l[g].add(Y),l[T].add(Y))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let b=0,g=v.length;b<g;++b){const T=v[b],C=T.start,R=T.count;for(let O=C,Z=C+R;O<Z;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const x=new z,_=new z,E=new z,V=new z;function M(b){E.fromBufferAttribute(i,b),V.copy(E);const g=o[b];x.copy(g),x.sub(E.multiplyScalar(E.dot(g))).normalize(),_.crossVectors(V,g);const C=_.dot(l[b])<0?-1:1;a.setXYZW(b,x.x,x.y,x.z,C)}for(let b=0,g=v.length;b<g;++b){const T=v[b],C=T.start,R=T.count;for(let O=C,Z=C+R;O<Z;O+=3)M(e.getX(O+0)),M(e.getX(O+1)),M(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Si(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,h=n.count;d<h;d++)n.setXYZ(d,0,0,0);const i=new z,s=new z,a=new z,o=new z,l=new z,c=new z,u=new z,f=new z;if(e)for(let d=0,h=e.count;d<h;d+=3){const S=e.getX(d+0),m=e.getX(d+1),Y=e.getX(d+2);i.fromBufferAttribute(t,S),s.fromBufferAttribute(t,m),a.fromBufferAttribute(t,Y),u.subVectors(a,s),f.subVectors(i,s),u.cross(f),o.fromBufferAttribute(n,S),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,Y),o.add(u),l.add(u),c.add(u),n.setXYZ(S,o.x,o.y,o.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(Y,c.x,c.y,c.z)}else for(let d=0,h=t.count;d<h;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),f.subVectors(i,s),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)jt.fromBufferAttribute(e,t),jt.normalize(),e.setXYZ(t,jt.x,jt.y,jt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u);let h=0,S=0;for(let m=0,Y=l.length;m<Y;m++){o.isInterleavedBufferAttribute?h=l[m]*o.data.stride+o.offset:h=l[m]*u;for(let p=0;p<u;p++)d[S++]=c[h++]}return new Si(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new tr,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const d=c[u],h=e(d,n);l.push(h)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const h=c[f];u.push(h.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const dd=new kt,Cr=new hm,Zo=new Hl,pd=new z,Ho=new z,zo=new z,ko=new z,Ic=new z,$o=new z,Yd=new z,Ko=new z;class Ai extends Cn{constructor(e=new tr,t=new Ym){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){$o.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(Ic.fromBufferAttribute(f,e),a?$o.addScaledVector(Ic,u):$o.addScaledVector(Ic.sub(t),u))}t.add($o)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Zo.copy(n.boundingSphere),Zo.applyMatrix4(s),Cr.copy(e.ray).recast(e.near),!(Zo.containsPoint(Cr.origin)===!1&&(Cr.intersectSphere(Zo,pd)===null||Cr.origin.distanceToSquared(pd)>(e.far-e.near)**2))&&(dd.copy(s).invert(),Cr.copy(e.ray).applyMatrix4(dd),!(n.boundingBox!==null&&Cr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Cr)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(a))for(let S=0,m=d.length;S<m;S++){const Y=d[S],p=a[Y.materialIndex],v=Math.max(Y.start,h.start),x=Math.min(o.count,Math.min(Y.start+Y.count,h.start+h.count));for(let _=v,E=x;_<E;_+=3){const V=o.getX(_),M=o.getX(_+1),b=o.getX(_+2);i=Qo(this,p,e,n,c,u,f,V,M,b),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=Y.materialIndex,t.push(i))}}else{const S=Math.max(0,h.start),m=Math.min(o.count,h.start+h.count);for(let Y=S,p=m;Y<p;Y+=3){const v=o.getX(Y),x=o.getX(Y+1),_=o.getX(Y+2);i=Qo(this,a,e,n,c,u,f,v,x,_),i&&(i.faceIndex=Math.floor(Y/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let S=0,m=d.length;S<m;S++){const Y=d[S],p=a[Y.materialIndex],v=Math.max(Y.start,h.start),x=Math.min(l.count,Math.min(Y.start+Y.count,h.start+h.count));for(let _=v,E=x;_<E;_+=3){const V=_,M=_+1,b=_+2;i=Qo(this,p,e,n,c,u,f,V,M,b),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=Y.materialIndex,t.push(i))}}else{const S=Math.max(0,h.start),m=Math.min(l.count,h.start+h.count);for(let Y=S,p=m;Y<p;Y+=3){const v=Y,x=Y+1,_=Y+2;i=Qo(this,a,e,n,c,u,f,v,x,_),i&&(i.faceIndex=Math.floor(Y/3),t.push(i))}}}}function RT(r,e,t,n,i,s,a,o){let l;if(e.side===Mn?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===xr,o),l===null)return null;Ko.copy(o),Ko.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Ko);return c<t.near||c>t.far?null:{distance:c,point:Ko.clone(),object:r}}function Qo(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,Ho),r.getVertexPosition(l,zo),r.getVertexPosition(c,ko);const u=RT(r,e,t,n,Ho,zo,ko,Yd);if(u){const f=new z;pi.getBarycoord(Yd,Ho,zo,ko,f),i&&(u.uv=pi.getInterpolatedAttribute(i,o,l,c,f,new Ut)),s&&(u.uv1=pi.getInterpolatedAttribute(s,o,l,c,f,new Ut)),a&&(u.normal=pi.getInterpolatedAttribute(a,o,l,c,f,new z),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new z,materialIndex:0};pi.getNormal(Ho,zo,ko,d.normal),u.face=d,u.barycoord=f}return u}class ca extends tr{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let d=0,h=0;S("z","y","x",-1,-1,n,t,e,a,s,0),S("z","y","x",1,-1,n,t,-e,a,s,1),S("x","z","y",1,1,e,n,t,i,a,2),S("x","z","y",1,-1,e,n,-t,i,a,3),S("x","y","z",1,-1,e,t,n,i,s,4),S("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new ns(c,3)),this.setAttribute("normal",new ns(u,3)),this.setAttribute("uv",new ns(f,2));function S(m,Y,p,v,x,_,E,V,M,b,g){const T=_/M,C=E/b,R=_/2,O=E/2,Z=V/2,B=M+1,H=b+1;let G=0,N=0;const ne=new z;for(let P=0;P<H;P++){const fe=P*C-O;for(let Le=0;Le<B;Le++){const tt=Le*T-R;ne[m]=tt*v,ne[Y]=fe*x,ne[p]=Z,c.push(ne.x,ne.y,ne.z),ne[m]=0,ne[Y]=0,ne[p]=V>0?1:-1,u.push(ne.x,ne.y,ne.z),f.push(Le/M),f.push(1-P/b),G+=1}}for(let P=0;P<b;P++)for(let fe=0;fe<M;fe++){const Le=d+fe+B*P,tt=d+fe+B*(P+1),He=d+(fe+1)+B*(P+1),Ze=d+(fe+1)+B*P;l.push(Le,tt,Ze),l.push(tt,He,Ze),N+=6}o.addGroup(h,N,g),h+=N,d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ca(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function aa(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function _n(r){const e={};for(let t=0;t<r.length;t++){const n=aa(r[t]);for(const i in n)e[i]=n[i]}return e}function IT(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function _m(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Yt.workingColorSpace}const Tm={clone:aa,merge:_n};var wT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,LT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class er extends mo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wT,this.fragmentShader=LT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=aa(e.uniforms),this.uniformsGroups=IT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class gm extends Cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new kt,this.projectionMatrix=new kt,this.projectionMatrixInverse=new kt,this.coordinateSystem=yi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const or=new z,md=new Ut,Sd=new Ut;class si extends gm{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=af*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ml*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return af*2*Math.atan(Math.tan(Ml*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){or.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(or.x,or.y).multiplyScalar(-e/or.z),or.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(or.x,or.y).multiplyScalar(-e/or.z)}getViewSize(e,t){return this.getViewBounds(e,md,Sd),t.subVectors(Sd,md)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ml*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ys=-90,As=1;class DT extends Cn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new si(ys,As,e,t);i.layers=this.layers,this.add(i);const s=new si(ys,As,e,t);s.layers=this.layers,this.add(s);const a=new si(ys,As,e,t);a.layers=this.layers,this.add(a);const o=new si(ys,As,e,t);o.layers=this.layers,this.add(o);const l=new si(ys,As,e,t);l.layers=this.layers,this.add(l);const c=new si(ys,As,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===yi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Dl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),S=e.xr.enabled;e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(f,d,h),e.xr.enabled=S,n.texture.needsPMREMUpdate=!0}}class Wm extends Xn{constructor(e=[],t=ia,n,i,s,a,o,l,c,u){super(e,t,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class NT extends ls{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Wm(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ca(5,5,5),s=new er({name:"CubemapFromEquirect",uniforms:aa(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Mn,blending:Tr});s.uniforms.tEquirect.value=t;const a=new Ai(i,s),o=t.minFilter;return t.minFilter===$r&&(t.minFilter=Vi),new DT(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}class Jo extends Cn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const OT={type:"move"};class wc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const m of e.hand.values()){const Y=t.getJointPose(m,n),p=this._getHandJoint(c,m);Y!==null&&(p.matrix.fromArray(Y.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=Y.radius),p.visible=Y!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,S=.005;c.inputState.pinching&&d>h+S?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=h-S&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(OT)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Jo;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class FT extends Cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ji,this.environmentIntensity=1,this.environmentRotation=new ji,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Lc=new z,GT=new z,BT=new Je;class Or{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Lc.subVectors(n,t).cross(GT.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Lc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||BT.getNormalMatrix(e),i=this.coplanarPoint(Lc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Rr=new Hl,ZT=new Ut(.5,.5),qo=new z;class Um{constructor(e=new Or,t=new Or,n=new Or,i=new Or,s=new Or,a=new Or){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=yi,n=!1){const i=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],f=s[5],d=s[6],h=s[7],S=s[8],m=s[9],Y=s[10],p=s[11],v=s[12],x=s[13],_=s[14],E=s[15];if(i[0].setComponents(c-a,h-u,p-S,E-v).normalize(),i[1].setComponents(c+a,h+u,p+S,E+v).normalize(),i[2].setComponents(c+o,h+f,p+m,E+x).normalize(),i[3].setComponents(c-o,h-f,p-m,E-x).normalize(),n)i[4].setComponents(l,d,Y,_).normalize(),i[5].setComponents(c-l,h-d,p-Y,E-_).normalize();else if(i[4].setComponents(c-l,h-d,p-Y,E-_).normalize(),t===yi)i[5].setComponents(c+l,h+d,p+Y,E+_).normalize();else if(t===Dl)i[5].setComponents(l,d,Y,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Rr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Rr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Rr)}intersectsSprite(e){Rr.center.set(0,0,0);const t=ZT.distanceTo(e.center);return Rr.radius=.7071067811865476+t,Rr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Rr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(qo.x=i.normal.x>0?e.max.x:e.min.x,qo.y=i.normal.y>0?e.max.y:e.min.y,qo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(qo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Mm extends mo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new gt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const _d=new kt,of=new hm,jo=new Hl,el=new z;class HT extends Cn{constructor(e=new tr,t=new Mm){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),jo.copy(n.boundingSphere),jo.applyMatrix4(i),jo.radius+=s,e.ray.intersectsSphere(jo)===!1)return;_d.copy(i).invert(),of.copy(e.ray).applyMatrix4(_d);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),h=Math.min(c.count,a.start+a.count);for(let S=d,m=h;S<m;S++){const Y=c.getX(S);el.fromBufferAttribute(f,Y),Td(el,Y,l,i,e,t,this)}}else{const d=Math.max(0,a.start),h=Math.min(f.count,a.start+a.count);for(let S=d,m=h;S<m;S++)el.fromBufferAttribute(f,S),Td(el,S,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Td(r,e,t,n,i,s,a){const o=of.distanceSqToPoint(r);if(o<t){const l=new z;of.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class vm extends Xn{constructor(e,t,n=os,i,s,a,o=mi,l=mi,c,u=ro,f=1){if(u!==ro&&u!==so)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:f};super(d,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new qf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class xm extends Xn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class zl extends tr{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,f=e/o,d=t/l,h=[],S=[],m=[],Y=[];for(let p=0;p<u;p++){const v=p*d-a;for(let x=0;x<c;x++){const _=x*f-s;S.push(_,-v,0),m.push(0,0,1),Y.push(x/o),Y.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<o;v++){const x=v+c*p,_=v+c*(p+1),E=v+1+c*(p+1),V=v+1+c*p;h.push(x,_,V),h.push(_,E,V)}this.setIndex(h),this.setAttribute("position",new ns(S,3)),this.setAttribute("normal",new ns(m,3)),this.setAttribute("uv",new ns(Y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zl(e.width,e.height,e.widthSegments,e.heightSegments)}}class zT extends mo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=iT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class kT extends mo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class $T extends gm{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class KT extends si{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function gd(r,e,t,n){const i=QT(n);switch(t){case rm:return r*e;case am:return r*e/i.components*i.byteLength;case Kf:return r*e/i.components*i.byteLength;case om:return r*e*2/i.components*i.byteLength;case Qf:return r*e*2/i.components*i.byteLength;case sm:return r*e*3/i.components*i.byteLength;case Yi:return r*e*4/i.components*i.byteLength;case Jf:return r*e*4/i.components*i.byteLength;case Tl:case gl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Wl:case Ul:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Xu:case Ru:return Math.max(r,16)*Math.max(e,8)/4;case Pu:case Cu:return Math.max(r,8)*Math.max(e,8)/2;case Iu:case wu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Lu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Du:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Nu:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Ou:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Fu:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Gu:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Bu:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Zu:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Hu:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case zu:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case ku:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case $u:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Ku:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Qu:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Ju:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case qu:case ju:case ef:return Math.ceil(r/4)*Math.ceil(e/4)*16;case tf:case nf:return Math.ceil(r/4)*Math.ceil(e/4)*8;case rf:case sf:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function QT(r){switch(r){case qi:case em:return{byteLength:1,components:1};case no:case tm:case fo:return{byteLength:2,components:1};case kf:case $f:return{byteLength:2,components:4};case os:case zf:case ki:return{byteLength:4,components:1};case nm:case im:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hf);function Em(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function JT(r){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,u),o.onUploadCallback();let h;if(c instanceof Float32Array)h=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?h=r.HALF_FLOAT:h=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=r.SHORT;else if(c instanceof Uint32Array)h=r.UNSIGNED_INT;else if(c instanceof Int32Array)h=r.INT;else if(c instanceof Int8Array)h=r.BYTE;else if(c instanceof Uint8Array)h=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const u=l.array,f=l.updateRanges;if(r.bindBuffer(c,o),f.length===0)r.bufferSubData(c,0,u);else{f.sort((h,S)=>h.start-S.start);let d=0;for(let h=1;h<f.length;h++){const S=f[d],m=f[h];m.start<=S.start+S.count+1?S.count=Math.max(S.count,m.start+m.count-S.start):(++d,f[d]=m)}f.length=d+1;for(let h=0,S=f.length;h<S;h++){const m=f[h];r.bufferSubData(c,m.start*u.BYTES_PER_ELEMENT,u,m.start,m.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var qT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,eg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ng=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ig=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,sg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ag=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,og=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ug=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,fg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,hg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,dg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,pg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_g=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Tg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,gg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Wg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ug=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Mg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,vg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Eg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ag=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Pg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Xg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Cg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ig=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ng=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Og=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Zg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Hg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$g=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Qg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Jg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,qg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,jg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,eW=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tW=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nW=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iW=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rW=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sW=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,aW=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,oW=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lW=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cW=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uW=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fW=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hW=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dW=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,pW=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,YW=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,mW=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,SW=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_W=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,TW=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gW=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,WW=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,UW=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,MW=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vW=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xW=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,EW=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,VW=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yW=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,AW=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bW=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,PW=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,XW=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,CW=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,RW=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,IW=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,wW=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,LW=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,DW=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,NW=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,OW=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,FW=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,GW=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,BW=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ZW=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,HW=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,zW=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,kW=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$W=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,KW=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,QW=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const JW=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qW=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jW=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eU=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tU=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nU=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iU=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,rU=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,sU=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,aU=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,oU=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lU=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cU=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,uU=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fU=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,hU=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dU=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pU=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YU=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,mU=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SU=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,_U=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,TU=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gU=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WU=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,UU=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MU=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vU=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xU=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,EU=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,VU=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yU=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,AU=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bU=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,je={alphahash_fragment:qT,alphahash_pars_fragment:jT,alphamap_fragment:eg,alphamap_pars_fragment:tg,alphatest_fragment:ng,alphatest_pars_fragment:ig,aomap_fragment:rg,aomap_pars_fragment:sg,batching_pars_vertex:ag,batching_vertex:og,begin_vertex:lg,beginnormal_vertex:cg,bsdfs:ug,iridescence_fragment:fg,bumpmap_pars_fragment:hg,clipping_planes_fragment:dg,clipping_planes_pars_fragment:pg,clipping_planes_pars_vertex:Yg,clipping_planes_vertex:mg,color_fragment:Sg,color_pars_fragment:_g,color_pars_vertex:Tg,color_vertex:gg,common:Wg,cube_uv_reflection_fragment:Ug,defaultnormal_vertex:Mg,displacementmap_pars_vertex:vg,displacementmap_vertex:xg,emissivemap_fragment:Eg,emissivemap_pars_fragment:Vg,colorspace_fragment:yg,colorspace_pars_fragment:Ag,envmap_fragment:bg,envmap_common_pars_fragment:Pg,envmap_pars_fragment:Xg,envmap_pars_vertex:Cg,envmap_physical_pars_fragment:Zg,envmap_vertex:Rg,fog_vertex:Ig,fog_pars_vertex:wg,fog_fragment:Lg,fog_pars_fragment:Dg,gradientmap_pars_fragment:Ng,lightmap_pars_fragment:Og,lights_lambert_fragment:Fg,lights_lambert_pars_fragment:Gg,lights_pars_begin:Bg,lights_toon_fragment:Hg,lights_toon_pars_fragment:zg,lights_phong_fragment:kg,lights_phong_pars_fragment:$g,lights_physical_fragment:Kg,lights_physical_pars_fragment:Qg,lights_fragment_begin:Jg,lights_fragment_maps:qg,lights_fragment_end:jg,logdepthbuf_fragment:eW,logdepthbuf_pars_fragment:tW,logdepthbuf_pars_vertex:nW,logdepthbuf_vertex:iW,map_fragment:rW,map_pars_fragment:sW,map_particle_fragment:aW,map_particle_pars_fragment:oW,metalnessmap_fragment:lW,metalnessmap_pars_fragment:cW,morphinstance_vertex:uW,morphcolor_vertex:fW,morphnormal_vertex:hW,morphtarget_pars_vertex:dW,morphtarget_vertex:pW,normal_fragment_begin:YW,normal_fragment_maps:mW,normal_pars_fragment:SW,normal_pars_vertex:_W,normal_vertex:TW,normalmap_pars_fragment:gW,clearcoat_normal_fragment_begin:WW,clearcoat_normal_fragment_maps:UW,clearcoat_pars_fragment:MW,iridescence_pars_fragment:vW,opaque_fragment:xW,packing:EW,premultiplied_alpha_fragment:VW,project_vertex:yW,dithering_fragment:AW,dithering_pars_fragment:bW,roughnessmap_fragment:PW,roughnessmap_pars_fragment:XW,shadowmap_pars_fragment:CW,shadowmap_pars_vertex:RW,shadowmap_vertex:IW,shadowmask_pars_fragment:wW,skinbase_vertex:LW,skinning_pars_vertex:DW,skinning_vertex:NW,skinnormal_vertex:OW,specularmap_fragment:FW,specularmap_pars_fragment:GW,tonemapping_fragment:BW,tonemapping_pars_fragment:ZW,transmission_fragment:HW,transmission_pars_fragment:zW,uv_pars_fragment:kW,uv_pars_vertex:$W,uv_vertex:KW,worldpos_vertex:QW,background_vert:JW,background_frag:qW,backgroundCube_vert:jW,backgroundCube_frag:eU,cube_vert:tU,cube_frag:nU,depth_vert:iU,depth_frag:rU,distanceRGBA_vert:sU,distanceRGBA_frag:aU,equirect_vert:oU,equirect_frag:lU,linedashed_vert:cU,linedashed_frag:uU,meshbasic_vert:fU,meshbasic_frag:hU,meshlambert_vert:dU,meshlambert_frag:pU,meshmatcap_vert:YU,meshmatcap_frag:mU,meshnormal_vert:SU,meshnormal_frag:_U,meshphong_vert:TU,meshphong_frag:gU,meshphysical_vert:WU,meshphysical_frag:UU,meshtoon_vert:MU,meshtoon_frag:vU,points_vert:xU,points_frag:EU,shadow_vert:VU,shadow_frag:yU,sprite_vert:AU,sprite_frag:bU},me={common:{diffuse:{value:new gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new Ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new gt(16777215)},opacity:{value:1},center:{value:new Ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},Wi={basic:{uniforms:_n([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:_n([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new gt(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:_n([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new gt(0)},specular:{value:new gt(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:_n([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:_n([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new gt(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:_n([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:_n([me.points,me.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:_n([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:_n([me.common,me.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:_n([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:_n([me.sprite,me.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:_n([me.common,me.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:_n([me.lights,me.fog,{color:{value:new gt(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};Wi.physical={uniforms:_n([Wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new Ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new Ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new gt(0)},specularColor:{value:new gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new Ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const tl={r:0,b:0,g:0},Ir=new ji,PU=new kt;function XU(r,e,t,n,i,s,a){const o=new gt(0);let l=s===!0?0:1,c,u,f=null,d=0,h=null;function S(x){let _=x.isScene===!0?x.background:null;return _&&_.isTexture&&(_=(x.backgroundBlurriness>0?t:e).get(_)),_}function m(x){let _=!1;const E=S(x);E===null?p(o,l):E&&E.isColor&&(p(E,1),_=!0);const V=r.xr.getEnvironmentBlendMode();V==="additive"?n.buffers.color.setClear(0,0,0,1,a):V==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function Y(x,_){const E=S(_);E&&(E.isCubeTexture||E.mapping===Zl)?(u===void 0&&(u=new Ai(new ca(1,1,1),new er({name:"BackgroundCubeMaterial",uniforms:aa(Wi.backgroundCube.uniforms),vertexShader:Wi.backgroundCube.vertexShader,fragmentShader:Wi.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(V,M,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Ir.copy(_.backgroundRotation),Ir.x*=-1,Ir.y*=-1,Ir.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Ir.y*=-1,Ir.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(PU.makeRotationFromEuler(Ir)),u.material.toneMapped=Yt.getTransfer(E.colorSpace)!==Wt,(f!==E||d!==E.version||h!==r.toneMapping)&&(u.material.needsUpdate=!0,f=E,d=E.version,h=r.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Ai(new zl(2,2),new er({name:"BackgroundMaterial",uniforms:aa(Wi.background.uniforms),vertexShader:Wi.background.vertexShader,fragmentShader:Wi.background.fragmentShader,side:xr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=Yt.getTransfer(E.colorSpace)!==Wt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(f!==E||d!==E.version||h!==r.toneMapping)&&(c.material.needsUpdate=!0,f=E,d=E.version,h=r.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,_){x.getRGB(tl,_m(r)),n.buffers.color.setClear(tl.r,tl.g,tl.b,_,a)}function v(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,_=1){o.set(x),l=_,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(o,l)},render:m,addToRenderList:Y,dispose:v}}function CU(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,a=!1;function o(T,C,R,O,Z){let B=!1;const H=f(O,R,C);s!==H&&(s=H,c(s.object)),B=h(T,O,R,Z),B&&S(T,O,R,Z),Z!==null&&e.update(Z,r.ELEMENT_ARRAY_BUFFER),(B||a)&&(a=!1,_(T,C,R,O),Z!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function l(){return r.createVertexArray()}function c(T){return r.bindVertexArray(T)}function u(T){return r.deleteVertexArray(T)}function f(T,C,R){const O=R.wireframe===!0;let Z=n[T.id];Z===void 0&&(Z={},n[T.id]=Z);let B=Z[C.id];B===void 0&&(B={},Z[C.id]=B);let H=B[O];return H===void 0&&(H=d(l()),B[O]=H),H}function d(T){const C=[],R=[],O=[];for(let Z=0;Z<t;Z++)C[Z]=0,R[Z]=0,O[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:R,attributeDivisors:O,object:T,attributes:{},index:null}}function h(T,C,R,O){const Z=s.attributes,B=C.attributes;let H=0;const G=R.getAttributes();for(const N in G)if(G[N].location>=0){const P=Z[N];let fe=B[N];if(fe===void 0&&(N==="instanceMatrix"&&T.instanceMatrix&&(fe=T.instanceMatrix),N==="instanceColor"&&T.instanceColor&&(fe=T.instanceColor)),P===void 0||P.attribute!==fe||fe&&P.data!==fe.data)return!0;H++}return s.attributesNum!==H||s.index!==O}function S(T,C,R,O){const Z={},B=C.attributes;let H=0;const G=R.getAttributes();for(const N in G)if(G[N].location>=0){let P=B[N];P===void 0&&(N==="instanceMatrix"&&T.instanceMatrix&&(P=T.instanceMatrix),N==="instanceColor"&&T.instanceColor&&(P=T.instanceColor));const fe={};fe.attribute=P,P&&P.data&&(fe.data=P.data),Z[N]=fe,H++}s.attributes=Z,s.attributesNum=H,s.index=O}function m(){const T=s.newAttributes;for(let C=0,R=T.length;C<R;C++)T[C]=0}function Y(T){p(T,0)}function p(T,C){const R=s.newAttributes,O=s.enabledAttributes,Z=s.attributeDivisors;R[T]=1,O[T]===0&&(r.enableVertexAttribArray(T),O[T]=1),Z[T]!==C&&(r.vertexAttribDivisor(T,C),Z[T]=C)}function v(){const T=s.newAttributes,C=s.enabledAttributes;for(let R=0,O=C.length;R<O;R++)C[R]!==T[R]&&(r.disableVertexAttribArray(R),C[R]=0)}function x(T,C,R,O,Z,B,H){H===!0?r.vertexAttribIPointer(T,C,R,Z,B):r.vertexAttribPointer(T,C,R,O,Z,B)}function _(T,C,R,O){m();const Z=O.attributes,B=R.getAttributes(),H=C.defaultAttributeValues;for(const G in B){const N=B[G];if(N.location>=0){let ne=Z[G];if(ne===void 0&&(G==="instanceMatrix"&&T.instanceMatrix&&(ne=T.instanceMatrix),G==="instanceColor"&&T.instanceColor&&(ne=T.instanceColor)),ne!==void 0){const P=ne.normalized,fe=ne.itemSize,Le=e.get(ne);if(Le===void 0)continue;const tt=Le.buffer,He=Le.type,Ze=Le.bytesPerElement,K=He===r.INT||He===r.UNSIGNED_INT||ne.gpuType===zf;if(ne.isInterleavedBufferAttribute){const q=ne.data,de=q.stride,ye=ne.offset;if(q.isInstancedInterleavedBuffer){for(let xe=0;xe<N.locationSize;xe++)p(N.location+xe,q.meshPerAttribute);T.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let xe=0;xe<N.locationSize;xe++)Y(N.location+xe);r.bindBuffer(r.ARRAY_BUFFER,tt);for(let xe=0;xe<N.locationSize;xe++)x(N.location+xe,fe/N.locationSize,He,P,de*Ze,(ye+fe/N.locationSize*xe)*Ze,K)}else{if(ne.isInstancedBufferAttribute){for(let q=0;q<N.locationSize;q++)p(N.location+q,ne.meshPerAttribute);T.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let q=0;q<N.locationSize;q++)Y(N.location+q);r.bindBuffer(r.ARRAY_BUFFER,tt);for(let q=0;q<N.locationSize;q++)x(N.location+q,fe/N.locationSize,He,P,fe*Ze,fe/N.locationSize*q*Ze,K)}}else if(H!==void 0){const P=H[G];if(P!==void 0)switch(P.length){case 2:r.vertexAttrib2fv(N.location,P);break;case 3:r.vertexAttrib3fv(N.location,P);break;case 4:r.vertexAttrib4fv(N.location,P);break;default:r.vertexAttrib1fv(N.location,P)}}}}v()}function E(){b();for(const T in n){const C=n[T];for(const R in C){const O=C[R];for(const Z in O)u(O[Z].object),delete O[Z];delete C[R]}delete n[T]}}function V(T){if(n[T.id]===void 0)return;const C=n[T.id];for(const R in C){const O=C[R];for(const Z in O)u(O[Z].object),delete O[Z];delete C[R]}delete n[T.id]}function M(T){for(const C in n){const R=n[C];if(R[T.id]===void 0)continue;const O=R[T.id];for(const Z in O)u(O[Z].object),delete O[Z];delete R[T.id]}}function b(){g(),a=!0,s!==i&&(s=i,c(s.object))}function g(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:b,resetDefaultState:g,dispose:E,releaseStatesOfGeometry:V,releaseStatesOfProgram:M,initAttributes:m,enableAttribute:Y,disableUnusedAttributes:v}}function RU(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,f){f!==0&&(r.drawArraysInstanced(n,c,u,f),t.update(u,n,f))}function o(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,f);let h=0;for(let S=0;S<f;S++)h+=u[S];t.update(h,n,1)}function l(c,u,f,d){if(f===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let S=0;S<c.length;S++)a(c[S],u[S],d[S]);else{h.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,f);let S=0;for(let m=0;m<f;m++)S+=u[m]*d[m];t.update(S,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function IU(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(M){return!(M!==Yi&&n.convert(M)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(M){const b=M===fo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(M!==qi&&n.convert(M)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&M!==ki&&!b)}function l(M){if(M==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),S=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_TEXTURE_SIZE),Y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),x=r.getParameter(r.MAX_VARYING_VECTORS),_=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),E=S>0,V=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:h,maxVertexTextures:S,maxTextureSize:m,maxCubemapSize:Y,maxAttributes:p,maxVertexUniforms:v,maxVaryings:x,maxFragmentUniforms:_,vertexTextures:E,maxSamples:V}}function wU(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Or,o=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||n!==0||i;return i=d,n=f.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,h){const S=f.clippingPlanes,m=f.clipIntersection,Y=f.clipShadows,p=r.get(f);if(!i||S===null||S.length===0||s&&!Y)s?u(null):c();else{const v=s?0:n,x=v*4;let _=p.clippingState||null;l.value=_,_=u(S,d,x,h);for(let E=0;E!==x;++E)_[E]=t[E];p.clippingState=_,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,d,h,S){const m=f!==null?f.length:0;let Y=null;if(m!==0){if(Y=l.value,S!==!0||Y===null){const p=h+m*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(Y===null||Y.length<p)&&(Y=new Float32Array(p));for(let x=0,_=h;x!==m;++x,_+=4)a.copy(f[x]).applyMatrix4(v,o),a.normal.toArray(Y,_),Y[_+3]=a.constant}l.value=Y,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,Y}}function LU(r){let e=new WeakMap;function t(a,o){return o===Vu?a.mapping=ia:o===yu&&(a.mapping=ra),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Vu||o===yu)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new NT(l.height);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Ds=4,Wd=[.125,.215,.35,.446,.526,.582],Br=20,Dc=new $T,Ud=new gt;let Nc=null,Oc=0,Fc=0,Gc=!1;const Fr=(1+Math.sqrt(5))/2,bs=1/Fr,Md=[new z(-Fr,bs,0),new z(Fr,bs,0),new z(-bs,0,Fr),new z(bs,0,Fr),new z(0,Fr,-bs),new z(0,Fr,bs),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)],DU=new z;class vd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,s={}){const{size:a=256,position:o=DU}=s;Nc=this._renderer.getRenderTarget(),Oc=this._renderer.getActiveCubeFace(),Fc=this._renderer.getActiveMipmapLevel(),Gc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ed(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Nc,Oc,Fc),this._renderer.xr.enabled=Gc,e.scissorTest=!1,nl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ia||e.mapping===ra?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nc=this._renderer.getRenderTarget(),Oc=this._renderer.getActiveCubeFace(),Fc=this._renderer.getActiveMipmapLevel(),Gc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Vi,minFilter:Vi,generateMipmaps:!1,type:fo,format:Yi,colorSpace:sa,depthBuffer:!1},i=xd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xd(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=NU(s)),this._blurMaterial=OU(s,e,t)}return i}_compileMaterial(e){const t=new Ai(this._lodPlanes[0],e);this._renderer.compile(t,Dc)}_sceneToCubeUV(e,t,n,i,s){const l=new si(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(Ud),f.toneMapping=gr,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(i),f.clearDepth(),f.setRenderTarget(null));const m=new Ym({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1}),Y=new Ai(new ca,m);let p=!1;const v=e.background;v?v.isColor&&(m.color.copy(v),e.background=null,p=!0):(m.color.copy(Ud),p=!0);for(let x=0;x<6;x++){const _=x%3;_===0?(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[x],s.y,s.z)):_===1?(l.up.set(0,0,c[x]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[x],s.z)):(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[x]));const E=this._cubeSize;nl(i,_*E,x>2?E:0,E,E),f.setRenderTarget(i),p&&f.render(Y,l),f.render(e,l)}Y.geometry.dispose(),Y.material.dispose(),f.toneMapping=h,f.autoClear=d,e.background=v}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ia||e.mapping===ra;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ed());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new Ai(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;nl(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Dc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Md[(i-s-1)%Md.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Ai(this._lodPlanes[i],c),d=c.uniforms,h=this._sizeLods[n]-1,S=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*Br-1),m=s/S,Y=isFinite(s)?1+Math.floor(u*m):Br;Y>Br&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${Y} samples when the maximum is set to ${Br}`);const p=[];let v=0;for(let M=0;M<Br;++M){const b=M/m,g=Math.exp(-b*b/2);p.push(g),M===0?v+=g:M<Y&&(v+=2*g)}for(let M=0;M<p.length;M++)p[M]=p[M]/v;d.envMap.value=e.texture,d.samples.value=Y,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=S,d.mipInt.value=x-n;const _=this._sizeLods[i],E=3*_*(i>x-Ds?i-x+Ds:0),V=4*(this._cubeSize-_);nl(t,E,V,3*_,2*_),l.setRenderTarget(t),l.render(f,Dc)}}function NU(r){const e=[],t=[],n=[];let i=r;const s=r-Ds+1+Wd.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>r-Ds?l=Wd[a-r+Ds-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,S=6,m=3,Y=2,p=1,v=new Float32Array(m*S*h),x=new Float32Array(Y*S*h),_=new Float32Array(p*S*h);for(let V=0;V<h;V++){const M=V%3*2/3-1,b=V>2?0:-1,g=[M,b,0,M+2/3,b,0,M+2/3,b+1,0,M,b,0,M+2/3,b+1,0,M,b+1,0];v.set(g,m*S*V),x.set(d,Y*S*V);const T=[V,V,V,V,V,V];_.set(T,p*S*V)}const E=new tr;E.setAttribute("position",new Si(v,m)),E.setAttribute("uv",new Si(x,Y)),E.setAttribute("faceIndex",new Si(_,p)),e.push(E),i>Ds&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function xd(r,e,t){const n=new ls(r,e,t);return n.texture.mapping=Zl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function nl(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function OU(r,e,t){const n=new Float32Array(Br),i=new z(0,1,0);return new er({name:"SphericalGaussianBlur",defines:{n:Br,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:jf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Tr,depthTest:!1,depthWrite:!1})}function Ed(){return new er({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Tr,depthTest:!1,depthWrite:!1})}function Vd(){return new er({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Tr,depthTest:!1,depthWrite:!1})}function jf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function FU(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Vu||l===yu,u=l===ia||l===ra;if(c||u){let f=e.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new vd(r)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const h=o.image;return c&&h&&h.height>0||u&&h&&i(h)?(t===null&&(t=new vd(r)),f=c?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function GU(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&ao("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function BU(r,e,t,n){const i={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const S in d.attributes)e.remove(d.attributes[S]);d.removeEventListener("dispose",a),delete i[d.id];const h=s.get(d);h&&(e.remove(h),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const h in d)e.update(d[h],r.ARRAY_BUFFER)}function c(f){const d=[],h=f.index,S=f.attributes.position;let m=0;if(h!==null){const v=h.array;m=h.version;for(let x=0,_=v.length;x<_;x+=3){const E=v[x+0],V=v[x+1],M=v[x+2];d.push(E,V,V,M,M,E)}}else if(S!==void 0){const v=S.array;m=S.version;for(let x=0,_=v.length/3-1;x<_;x+=3){const E=x+0,V=x+1,M=x+2;d.push(E,V,V,M,M,E)}}else return;const Y=new(um(d)?Sm:mm)(d,1);Y.version=m;const p=s.get(f);p&&e.remove(p),s.set(f,Y)}function u(f){const d=s.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function ZU(r,e,t){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,h){r.drawElements(n,h,s,d*a),t.update(h,n,1)}function c(d,h,S){S!==0&&(r.drawElementsInstanced(n,h,s,d*a,S),t.update(h,n,S))}function u(d,h,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,d,0,S);let Y=0;for(let p=0;p<S;p++)Y+=h[p];t.update(Y,n,1)}function f(d,h,S,m){if(S===0)return;const Y=e.get("WEBGL_multi_draw");if(Y===null)for(let p=0;p<d.length;p++)c(d[p]/a,h[p],m[p]);else{Y.multiDrawElementsInstancedWEBGL(n,h,0,s,d,0,m,0,S);let p=0;for(let v=0;v<S;v++)p+=h[v]*m[v];t.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function HU(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function zU(r,e,t){const n=new WeakMap,i=new Gt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==f){let T=function(){b.dispose(),n.delete(o),o.removeEventListener("dispose",T)};var h=T;d!==void 0&&d.texture.dispose();const S=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,Y=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let _=0;S===!0&&(_=1),m===!0&&(_=2),Y===!0&&(_=3);let E=o.attributes.position.count*_,V=1;E>e.maxTextureSize&&(V=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const M=new Float32Array(E*V*4*f),b=new fm(M,E,V,f);b.type=ki,b.needsUpdate=!0;const g=_*4;for(let C=0;C<f;C++){const R=p[C],O=v[C],Z=x[C],B=E*V*4*C;for(let H=0;H<R.count;H++){const G=H*g;S===!0&&(i.fromBufferAttribute(R,H),M[B+G+0]=i.x,M[B+G+1]=i.y,M[B+G+2]=i.z,M[B+G+3]=0),m===!0&&(i.fromBufferAttribute(O,H),M[B+G+4]=i.x,M[B+G+5]=i.y,M[B+G+6]=i.z,M[B+G+7]=0),Y===!0&&(i.fromBufferAttribute(Z,H),M[B+G+8]=i.x,M[B+G+9]=i.y,M[B+G+10]=i.z,M[B+G+11]=Z.itemSize===4?i.w:1)}}d={count:f,texture:b,size:new Ut(E,V)},n.set(o,d),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let S=0;for(let Y=0;Y<c.length;Y++)S+=c[Y];const m=o.morphTargetsRelative?1:1-S;l.getUniforms().setValue(r,"morphTargetBaseInfluence",m),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function kU(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);if(i.get(f)!==c&&(e.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return f}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const Vm=new Xn,yd=new vm(1,1),ym=new fm,Am=new MT,bm=new Wm,Ad=[],bd=[],Pd=new Float32Array(16),Xd=new Float32Array(9),Cd=new Float32Array(4);function ua(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Ad[i];if(s===void 0&&(s=new Float32Array(i),Ad[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Jt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function qt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function kl(r,e){let t=bd[e];t===void 0&&(t=new Int32Array(e),bd[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function $U(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function KU(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;r.uniform2fv(this.addr,e),qt(t,e)}}function QU(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Jt(t,e))return;r.uniform3fv(this.addr,e),qt(t,e)}}function JU(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;r.uniform4fv(this.addr,e),qt(t,e)}}function qU(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Jt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),qt(t,e)}else{if(Jt(t,n))return;Cd.set(n),r.uniformMatrix2fv(this.addr,!1,Cd),qt(t,n)}}function jU(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Jt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),qt(t,e)}else{if(Jt(t,n))return;Xd.set(n),r.uniformMatrix3fv(this.addr,!1,Xd),qt(t,n)}}function eM(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Jt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),qt(t,e)}else{if(Jt(t,n))return;Pd.set(n),r.uniformMatrix4fv(this.addr,!1,Pd),qt(t,n)}}function tM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function nM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;r.uniform2iv(this.addr,e),qt(t,e)}}function iM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;r.uniform3iv(this.addr,e),qt(t,e)}}function rM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;r.uniform4iv(this.addr,e),qt(t,e)}}function sM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function aM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;r.uniform2uiv(this.addr,e),qt(t,e)}}function oM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;r.uniform3uiv(this.addr,e),qt(t,e)}}function lM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;r.uniform4uiv(this.addr,e),qt(t,e)}}function cM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(yd.compareFunction=lm,s=yd):s=Vm,t.setTexture2D(e||s,i)}function uM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Am,i)}function fM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||bm,i)}function hM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||ym,i)}function dM(r){switch(r){case 5126:return $U;case 35664:return KU;case 35665:return QU;case 35666:return JU;case 35674:return qU;case 35675:return jU;case 35676:return eM;case 5124:case 35670:return tM;case 35667:case 35671:return nM;case 35668:case 35672:return iM;case 35669:case 35673:return rM;case 5125:return sM;case 36294:return aM;case 36295:return oM;case 36296:return lM;case 35678:case 36198:case 36298:case 36306:case 35682:return cM;case 35679:case 36299:case 36307:return uM;case 35680:case 36300:case 36308:case 36293:return fM;case 36289:case 36303:case 36311:case 36292:return hM}}function pM(r,e){r.uniform1fv(this.addr,e)}function YM(r,e){const t=ua(e,this.size,2);r.uniform2fv(this.addr,t)}function mM(r,e){const t=ua(e,this.size,3);r.uniform3fv(this.addr,t)}function SM(r,e){const t=ua(e,this.size,4);r.uniform4fv(this.addr,t)}function _M(r,e){const t=ua(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function TM(r,e){const t=ua(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function gM(r,e){const t=ua(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function WM(r,e){r.uniform1iv(this.addr,e)}function UM(r,e){r.uniform2iv(this.addr,e)}function MM(r,e){r.uniform3iv(this.addr,e)}function vM(r,e){r.uniform4iv(this.addr,e)}function xM(r,e){r.uniform1uiv(this.addr,e)}function EM(r,e){r.uniform2uiv(this.addr,e)}function VM(r,e){r.uniform3uiv(this.addr,e)}function yM(r,e){r.uniform4uiv(this.addr,e)}function AM(r,e,t){const n=this.cache,i=e.length,s=kl(t,i);Jt(n,s)||(r.uniform1iv(this.addr,s),qt(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Vm,s[a])}function bM(r,e,t){const n=this.cache,i=e.length,s=kl(t,i);Jt(n,s)||(r.uniform1iv(this.addr,s),qt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Am,s[a])}function PM(r,e,t){const n=this.cache,i=e.length,s=kl(t,i);Jt(n,s)||(r.uniform1iv(this.addr,s),qt(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||bm,s[a])}function XM(r,e,t){const n=this.cache,i=e.length,s=kl(t,i);Jt(n,s)||(r.uniform1iv(this.addr,s),qt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||ym,s[a])}function CM(r){switch(r){case 5126:return pM;case 35664:return YM;case 35665:return mM;case 35666:return SM;case 35674:return _M;case 35675:return TM;case 35676:return gM;case 5124:case 35670:return WM;case 35667:case 35671:return UM;case 35668:case 35672:return MM;case 35669:case 35673:return vM;case 5125:return xM;case 36294:return EM;case 36295:return VM;case 36296:return yM;case 35678:case 36198:case 36298:case 36306:case 35682:return AM;case 35679:case 36299:case 36307:return bM;case 35680:case 36300:case 36308:case 36293:return PM;case 36289:case 36303:case 36311:case 36292:return XM}}class RM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=dM(t.type)}}class IM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=CM(t.type)}}class wM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const Bc=/(\w+)(\])?(\[|\.)?/g;function Rd(r,e){r.seq.push(e),r.map[e.id]=e}function LM(r,e,t){const n=r.name,i=n.length;for(Bc.lastIndex=0;;){const s=Bc.exec(n),a=Bc.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Rd(t,c===void 0?new RM(o,r,e):new IM(o,r,e));break}else{let f=t.map[o];f===void 0&&(f=new wM(o),Rd(t,f)),t=f}}}class vl{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);LM(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Id(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const DM=37297;let NM=0;function OM(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const wd=new Je;function FM(r){Yt._getMatrix(wd,Yt.workingColorSpace,r);const e=`mat3( ${wd.elements.map(t=>t.toFixed(4))} )`;switch(Yt.getTransfer(r)){case Ll:return[e,"LinearTransferOETF"];case Wt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Ld(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+OM(r.getShaderSource(e),o)}else return s}function GM(r,e){const t=FM(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function BM(r,e){let t;switch(e){case Q_:t="Linear";break;case J_:t="Reinhard";break;case q_:t="Cineon";break;case qY:t="ACESFilmic";break;case eT:t="AgX";break;case tT:t="Neutral";break;case j_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const il=new z;function ZM(){Yt.getLuminanceCoefficients(il);const r=il.x.toFixed(4),e=il.y.toFixed(4),t=il.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function HM(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ba).join(`
`)}function zM(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function kM(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function ba(r){return r!==""}function Dd(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nd(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $M=/^[ \t]*#include +<([\w\d./]+)>/gm;function lf(r){return r.replace($M,QM)}const KM=new Map;function QM(r,e){let t=je[e];if(t===void 0){const n=KM.get(e);if(n!==void 0)t=je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return lf(t)}const JM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Od(r){return r.replace(JM,qM)}function qM(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Fd(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function jM(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===QY?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===A_?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Di&&(e="SHADOWMAP_TYPE_VSM"),e}function ev(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ia:case ra:e="ENVMAP_TYPE_CUBE";break;case Zl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function tv(r){let e="ENVMAP_MODE_REFLECTION";return r.envMap&&r.envMapMode===ra&&(e="ENVMAP_MODE_REFRACTION"),e}function nv(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case JY:e="ENVMAP_BLENDING_MULTIPLY";break;case $_:e="ENVMAP_BLENDING_MIX";break;case K_:e="ENVMAP_BLENDING_ADD";break}return e}function iv(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function rv(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=jM(t),c=ev(t),u=tv(t),f=nv(t),d=iv(t),h=HM(t),S=zM(s),m=i.createProgram();let Y,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(Y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(ba).join(`
`),Y.length>0&&(Y+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(ba).join(`
`),p.length>0&&(p+=`
`)):(Y=[Fd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ba).join(`
`),p=[Fd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gr?"#define TONE_MAPPING":"",t.toneMapping!==gr?je.tonemapping_pars_fragment:"",t.toneMapping!==gr?BM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,GM("linearToOutputTexel",t.outputColorSpace),ZM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ba).join(`
`)),a=lf(a),a=Dd(a,t),a=Nd(a,t),o=lf(o),o=Dd(o,t),o=Nd(o,t),a=Od(a),o=Od(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,Y=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+Y,p=["#define varying in",t.glslVersion===ed?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ed?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=v+Y+a,_=v+p+o,E=Id(i,i.VERTEX_SHADER,x),V=Id(i,i.FRAGMENT_SHADER,_);i.attachShader(m,E),i.attachShader(m,V),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function M(C){if(r.debug.checkShaderErrors){const R=i.getProgramInfoLog(m)||"",O=i.getShaderInfoLog(E)||"",Z=i.getShaderInfoLog(V)||"",B=R.trim(),H=O.trim(),G=Z.trim();let N=!0,ne=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(N=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,m,E,V);else{const P=Ld(i,E,"vertex"),fe=Ld(i,V,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+B+`
`+P+`
`+fe)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(H===""||G==="")&&(ne=!1);ne&&(C.diagnostics={runnable:N,programLog:B,vertexShader:{log:H,prefix:Y},fragmentShader:{log:G,prefix:p}})}i.deleteShader(E),i.deleteShader(V),b=new vl(i,m),g=kM(i,m)}let b;this.getUniforms=function(){return b===void 0&&M(this),b};let g;this.getAttributes=function(){return g===void 0&&M(this),g};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(m,DM)),T},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=NM++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=E,this.fragmentShader=V,this}let sv=0;class av{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new ov(e),t.set(e,n)),n}}class ov{constructor(e){this.id=sv++,this.code=e,this.usedTimes=0}}function lv(r,e,t,n,i,s,a){const o=new dm,l=new av,c=new Set,u=[],f=i.logarithmicDepthBuffer,d=i.vertexTextures;let h=i.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(g){return c.add(g),g===0?"uv":`uv${g}`}function Y(g,T,C,R,O){const Z=R.fog,B=O.geometry,H=g.isMeshStandardMaterial?R.environment:null,G=(g.isMeshStandardMaterial?t:e).get(g.envMap||H),N=G&&G.mapping===Zl?G.image.height:null,ne=S[g.type];g.precision!==null&&(h=i.getMaxPrecision(g.precision),h!==g.precision&&console.warn("THREE.WebGLProgram.getParameters:",g.precision,"not supported, using",h,"instead."));const P=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,fe=P!==void 0?P.length:0;let Le=0;B.morphAttributes.position!==void 0&&(Le=1),B.morphAttributes.normal!==void 0&&(Le=2),B.morphAttributes.color!==void 0&&(Le=3);let tt,He,Ze,K;if(ne){const Se=Wi[ne];tt=Se.vertexShader,He=Se.fragmentShader}else tt=g.vertexShader,He=g.fragmentShader,l.update(g),Ze=l.getVertexShaderID(g),K=l.getFragmentShaderID(g);const q=r.getRenderTarget(),de=r.state.buffers.depth.getReversed(),ye=O.isInstancedMesh===!0,xe=O.isBatchedMesh===!0,Fe=!!g.map,ft=!!g.matcap,A=!!G,ze=!!g.aoMap,Ce=!!g.lightMap,Ae=!!g.bumpMap,I=!!g.normalMap,nt=!!g.displacementMap,_e=!!g.emissiveMap,Ge=!!g.metalnessMap,Ke=!!g.roughnessMap,mt=g.anisotropy>0,y=g.clearcoat>0,W=g.dispersion>0,D=g.iridescence>0,Q=g.sheen>0,J=g.transmission>0,$=mt&&!!g.anisotropyMap,Te=y&&!!g.clearcoatMap,se=y&&!!g.clearcoatNormalMap,Ee=y&&!!g.clearcoatRoughnessMap,he=D&&!!g.iridescenceMap,re=D&&!!g.iridescenceThicknessMap,ue=Q&&!!g.sheenColorMap,Ie=Q&&!!g.sheenRoughnessMap,Ve=!!g.specularMap,ce=!!g.specularColorMap,Be=!!g.specularIntensityMap,X=J&&!!g.transmissionMap,ie=J&&!!g.thicknessMap,ae=!!g.gradientMap,Ye=!!g.alphaMap,te=g.alphaTest>0,j=!!g.alphaHash,We=!!g.extensions;let De=gr;g.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(De=r.toneMapping);const ht={shaderID:ne,shaderType:g.type,shaderName:g.name,vertexShader:tt,fragmentShader:He,defines:g.defines,customVertexShaderID:Ze,customFragmentShaderID:K,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:h,batching:xe,batchingColor:xe&&O._colorsTexture!==null,instancing:ye,instancingColor:ye&&O.instanceColor!==null,instancingMorph:ye&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:q===null?r.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:sa,alphaToCoverage:!!g.alphaToCoverage,map:Fe,matcap:ft,envMap:A,envMapMode:A&&G.mapping,envMapCubeUVHeight:N,aoMap:ze,lightMap:Ce,bumpMap:Ae,normalMap:I,displacementMap:d&&nt,emissiveMap:_e,normalMapObjectSpace:I&&g.normalMapType===aT,normalMapTangentSpace:I&&g.normalMapType===sT,metalnessMap:Ge,roughnessMap:Ke,anisotropy:mt,anisotropyMap:$,clearcoat:y,clearcoatMap:Te,clearcoatNormalMap:se,clearcoatRoughnessMap:Ee,dispersion:W,iridescence:D,iridescenceMap:he,iridescenceThicknessMap:re,sheen:Q,sheenColorMap:ue,sheenRoughnessMap:Ie,specularMap:Ve,specularColorMap:ce,specularIntensityMap:Be,transmission:J,transmissionMap:X,thicknessMap:ie,gradientMap:ae,opaque:g.transparent===!1&&g.blending===ks&&g.alphaToCoverage===!1,alphaMap:Ye,alphaTest:te,alphaHash:j,combine:g.combine,mapUv:Fe&&m(g.map.channel),aoMapUv:ze&&m(g.aoMap.channel),lightMapUv:Ce&&m(g.lightMap.channel),bumpMapUv:Ae&&m(g.bumpMap.channel),normalMapUv:I&&m(g.normalMap.channel),displacementMapUv:nt&&m(g.displacementMap.channel),emissiveMapUv:_e&&m(g.emissiveMap.channel),metalnessMapUv:Ge&&m(g.metalnessMap.channel),roughnessMapUv:Ke&&m(g.roughnessMap.channel),anisotropyMapUv:$&&m(g.anisotropyMap.channel),clearcoatMapUv:Te&&m(g.clearcoatMap.channel),clearcoatNormalMapUv:se&&m(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&m(g.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&m(g.iridescenceMap.channel),iridescenceThicknessMapUv:re&&m(g.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&m(g.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&m(g.sheenRoughnessMap.channel),specularMapUv:Ve&&m(g.specularMap.channel),specularColorMapUv:ce&&m(g.specularColorMap.channel),specularIntensityMapUv:Be&&m(g.specularIntensityMap.channel),transmissionMapUv:X&&m(g.transmissionMap.channel),thicknessMapUv:ie&&m(g.thicknessMap.channel),alphaMapUv:Ye&&m(g.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(I||mt),vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!B.attributes.uv&&(Fe||Ye),fog:!!Z,useFog:g.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:g.flatShading===!0&&g.wireframe===!1,sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:de,skinning:O.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:Le,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:g.dithering,shadowMapEnabled:r.shadowMap.enabled&&C.length>0,shadowMapType:r.shadowMap.type,toneMapping:De,decodeVideoTexture:Fe&&g.map.isVideoTexture===!0&&Yt.getTransfer(g.map.colorSpace)===Wt,decodeVideoTextureEmissive:_e&&g.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(g.emissiveMap.colorSpace)===Wt,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Zi,flipSided:g.side===Mn,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:We&&g.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(We&&g.extensions.multiDraw===!0||xe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return ht.vertexUv1s=c.has(1),ht.vertexUv2s=c.has(2),ht.vertexUv3s=c.has(3),c.clear(),ht}function p(g){const T=[];if(g.shaderID?T.push(g.shaderID):(T.push(g.customVertexShaderID),T.push(g.customFragmentShaderID)),g.defines!==void 0)for(const C in g.defines)T.push(C),T.push(g.defines[C]);return g.isRawShaderMaterial===!1&&(v(T,g),x(T,g),T.push(r.outputColorSpace)),T.push(g.customProgramCacheKey),T.join()}function v(g,T){g.push(T.precision),g.push(T.outputColorSpace),g.push(T.envMapMode),g.push(T.envMapCubeUVHeight),g.push(T.mapUv),g.push(T.alphaMapUv),g.push(T.lightMapUv),g.push(T.aoMapUv),g.push(T.bumpMapUv),g.push(T.normalMapUv),g.push(T.displacementMapUv),g.push(T.emissiveMapUv),g.push(T.metalnessMapUv),g.push(T.roughnessMapUv),g.push(T.anisotropyMapUv),g.push(T.clearcoatMapUv),g.push(T.clearcoatNormalMapUv),g.push(T.clearcoatRoughnessMapUv),g.push(T.iridescenceMapUv),g.push(T.iridescenceThicknessMapUv),g.push(T.sheenColorMapUv),g.push(T.sheenRoughnessMapUv),g.push(T.specularMapUv),g.push(T.specularColorMapUv),g.push(T.specularIntensityMapUv),g.push(T.transmissionMapUv),g.push(T.thicknessMapUv),g.push(T.combine),g.push(T.fogExp2),g.push(T.sizeAttenuation),g.push(T.morphTargetsCount),g.push(T.morphAttributeCount),g.push(T.numDirLights),g.push(T.numPointLights),g.push(T.numSpotLights),g.push(T.numSpotLightMaps),g.push(T.numHemiLights),g.push(T.numRectAreaLights),g.push(T.numDirLightShadows),g.push(T.numPointLightShadows),g.push(T.numSpotLightShadows),g.push(T.numSpotLightShadowsWithMaps),g.push(T.numLightProbes),g.push(T.shadowMapType),g.push(T.toneMapping),g.push(T.numClippingPlanes),g.push(T.numClipIntersection),g.push(T.depthPacking)}function x(g,T){o.disableAll(),T.supportsVertexTextures&&o.enable(0),T.instancing&&o.enable(1),T.instancingColor&&o.enable(2),T.instancingMorph&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),T.batching&&o.enable(19),T.dispersion&&o.enable(20),T.batchingColor&&o.enable(21),T.gradientMap&&o.enable(22),g.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),g.push(o.mask)}function _(g){const T=S[g.type];let C;if(T){const R=Wi[T];C=Tm.clone(R.uniforms)}else C=g.uniforms;return C}function E(g,T){let C;for(let R=0,O=u.length;R<O;R++){const Z=u[R];if(Z.cacheKey===T){C=Z,++C.usedTimes;break}}return C===void 0&&(C=new rv(r,T,g,s),u.push(C)),C}function V(g){if(--g.usedTimes===0){const T=u.indexOf(g);u[T]=u[u.length-1],u.pop(),g.destroy()}}function M(g){l.remove(g)}function b(){l.dispose()}return{getParameters:Y,getProgramCacheKey:p,getUniforms:_,acquireProgram:E,releaseProgram:V,releaseShaderCache:M,programs:u,dispose:b}}function cv(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function uv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Gd(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Bd(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(f,d,h,S,m,Y){let p=r[e];return p===void 0?(p={id:f.id,object:f,geometry:d,material:h,groupOrder:S,renderOrder:f.renderOrder,z:m,group:Y},r[e]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=h,p.groupOrder=S,p.renderOrder=f.renderOrder,p.z=m,p.group=Y),e++,p}function o(f,d,h,S,m,Y){const p=a(f,d,h,S,m,Y);h.transmission>0?n.push(p):h.transparent===!0?i.push(p):t.push(p)}function l(f,d,h,S,m,Y){const p=a(f,d,h,S,m,Y);h.transmission>0?n.unshift(p):h.transparent===!0?i.unshift(p):t.unshift(p)}function c(f,d){t.length>1&&t.sort(f||uv),n.length>1&&n.sort(d||Gd),i.length>1&&i.sort(d||Gd)}function u(){for(let f=e,d=r.length;f<d;f++){const h=r[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function fv(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new Bd,r.set(n,[a])):i>=s.length?(a=new Bd,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function hv(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new gt};break;case"SpotLight":t={position:new z,direction:new z,color:new gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new gt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new gt,groundColor:new gt};break;case"RectAreaLight":t={color:new gt,position:new z,halfWidth:new z,halfHeight:new z};break}return r[e.id]=t,t}}}function dv(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let pv=0;function Yv(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function mv(r){const e=new hv,t=dv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);const i=new z,s=new kt,a=new kt;function o(c){let u=0,f=0,d=0;for(let g=0;g<9;g++)n.probe[g].set(0,0,0);let h=0,S=0,m=0,Y=0,p=0,v=0,x=0,_=0,E=0,V=0,M=0;c.sort(Yv);for(let g=0,T=c.length;g<T;g++){const C=c[g],R=C.color,O=C.intensity,Z=C.distance,B=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=R.r*O,f+=R.g*O,d+=R.b*O;else if(C.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(C.sh.coefficients[H],O);M++}else if(C.isDirectionalLight){const H=e.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const G=C.shadow,N=t.get(C);N.shadowIntensity=G.intensity,N.shadowBias=G.bias,N.shadowNormalBias=G.normalBias,N.shadowRadius=G.radius,N.shadowMapSize=G.mapSize,n.directionalShadow[h]=N,n.directionalShadowMap[h]=B,n.directionalShadowMatrix[h]=C.shadow.matrix,v++}n.directional[h]=H,h++}else if(C.isSpotLight){const H=e.get(C);H.position.setFromMatrixPosition(C.matrixWorld),H.color.copy(R).multiplyScalar(O),H.distance=Z,H.coneCos=Math.cos(C.angle),H.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),H.decay=C.decay,n.spot[m]=H;const G=C.shadow;if(C.map&&(n.spotLightMap[E]=C.map,E++,G.updateMatrices(C),C.castShadow&&V++),n.spotLightMatrix[m]=G.matrix,C.castShadow){const N=t.get(C);N.shadowIntensity=G.intensity,N.shadowBias=G.bias,N.shadowNormalBias=G.normalBias,N.shadowRadius=G.radius,N.shadowMapSize=G.mapSize,n.spotShadow[m]=N,n.spotShadowMap[m]=B,_++}m++}else if(C.isRectAreaLight){const H=e.get(C);H.color.copy(R).multiplyScalar(O),H.halfWidth.set(C.width*.5,0,0),H.halfHeight.set(0,C.height*.5,0),n.rectArea[Y]=H,Y++}else if(C.isPointLight){const H=e.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),H.distance=C.distance,H.decay=C.decay,C.castShadow){const G=C.shadow,N=t.get(C);N.shadowIntensity=G.intensity,N.shadowBias=G.bias,N.shadowNormalBias=G.normalBias,N.shadowRadius=G.radius,N.shadowMapSize=G.mapSize,N.shadowCameraNear=G.camera.near,N.shadowCameraFar=G.camera.far,n.pointShadow[S]=N,n.pointShadowMap[S]=B,n.pointShadowMatrix[S]=C.shadow.matrix,x++}n.point[S]=H,S++}else if(C.isHemisphereLight){const H=e.get(C);H.skyColor.copy(C.color).multiplyScalar(O),H.groundColor.copy(C.groundColor).multiplyScalar(O),n.hemi[p]=H,p++}}Y>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=me.LTC_FLOAT_1,n.rectAreaLTC2=me.LTC_FLOAT_2):(n.rectAreaLTC1=me.LTC_HALF_1,n.rectAreaLTC2=me.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=d;const b=n.hash;(b.directionalLength!==h||b.pointLength!==S||b.spotLength!==m||b.rectAreaLength!==Y||b.hemiLength!==p||b.numDirectionalShadows!==v||b.numPointShadows!==x||b.numSpotShadows!==_||b.numSpotMaps!==E||b.numLightProbes!==M)&&(n.directional.length=h,n.spot.length=m,n.rectArea.length=Y,n.point.length=S,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=_+E-V,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=V,n.numLightProbes=M,b.directionalLength=h,b.pointLength=S,b.spotLength=m,b.rectAreaLength=Y,b.hemiLength=p,b.numDirectionalShadows=v,b.numPointShadows=x,b.numSpotShadows=_,b.numSpotMaps=E,b.numLightProbes=M,n.version=pv++)}function l(c,u){let f=0,d=0,h=0,S=0,m=0;const Y=u.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){const x=c[p];if(x.isDirectionalLight){const _=n.directional[f];_.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(Y),f++}else if(x.isSpotLight){const _=n.spot[h];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(Y),_.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(Y),h++}else if(x.isRectAreaLight){const _=n.rectArea[S];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(Y),a.identity(),s.copy(x.matrixWorld),s.premultiply(Y),a.extractRotation(s),_.halfWidth.set(x.width*.5,0,0),_.halfHeight.set(0,x.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),S++}else if(x.isPointLight){const _=n.point[d];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(Y),d++}else if(x.isHemisphereLight){const _=n.hemi[m];_.direction.setFromMatrixPosition(x.matrixWorld),_.direction.transformDirection(Y),m++}}}return{setup:o,setupView:l,state:n}}function Zd(r){const e=new mv(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Sv(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new Zd(r),e.set(i,[o])):s>=a.length?(o=new Zd(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const _v=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Tv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function gv(r,e,t){let n=new Um;const i=new Ut,s=new Ut,a=new Gt,o=new zT({depthPacking:rT}),l=new kT,c={},u=t.maxTextureSize,f={[xr]:Mn,[Mn]:xr,[Zi]:Zi},d=new er({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ut},radius:{value:4}},vertexShader:_v,fragmentShader:Tv}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const S=new tr;S.setAttribute("position",new Si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Ai(S,d),Y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=QY;let p=this.type;this.render=function(V,M,b){if(Y.enabled===!1||Y.autoUpdate===!1&&Y.needsUpdate===!1||V.length===0)return;const g=r.getRenderTarget(),T=r.getActiveCubeFace(),C=r.getActiveMipmapLevel(),R=r.state;R.setBlending(Tr),R.buffers.depth.getReversed()===!0?R.buffers.color.setClear(0,0,0,0):R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);const O=p!==Di&&this.type===Di,Z=p===Di&&this.type!==Di;for(let B=0,H=V.length;B<H;B++){const G=V[B],N=G.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;i.copy(N.mapSize);const ne=N.getFrameExtents();if(i.multiply(ne),s.copy(N.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/ne.x),i.x=s.x*ne.x,N.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/ne.y),i.y=s.y*ne.y,N.mapSize.y=s.y)),N.map===null||O===!0||Z===!0){const fe=this.type!==Di?{minFilter:mi,magFilter:mi}:{};N.map!==null&&N.map.dispose(),N.map=new ls(i.x,i.y,fe),N.map.texture.name=G.name+".shadowMap",N.camera.updateProjectionMatrix()}r.setRenderTarget(N.map),r.clear();const P=N.getViewportCount();for(let fe=0;fe<P;fe++){const Le=N.getViewport(fe);a.set(s.x*Le.x,s.y*Le.y,s.x*Le.z,s.y*Le.w),R.viewport(a),N.updateMatrices(G,fe),n=N.getFrustum(),_(M,b,N.camera,G,this.type)}N.isPointLightShadow!==!0&&this.type===Di&&v(N,b),N.needsUpdate=!1}p=this.type,Y.needsUpdate=!1,r.setRenderTarget(g,T,C)};function v(V,M){const b=e.update(m);d.defines.VSM_SAMPLES!==V.blurSamples&&(d.defines.VSM_SAMPLES=V.blurSamples,h.defines.VSM_SAMPLES=V.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),V.mapPass===null&&(V.mapPass=new ls(i.x,i.y)),d.uniforms.shadow_pass.value=V.map.texture,d.uniforms.resolution.value=V.mapSize,d.uniforms.radius.value=V.radius,r.setRenderTarget(V.mapPass),r.clear(),r.renderBufferDirect(M,null,b,d,m,null),h.uniforms.shadow_pass.value=V.mapPass.texture,h.uniforms.resolution.value=V.mapSize,h.uniforms.radius.value=V.radius,r.setRenderTarget(V.map),r.clear(),r.renderBufferDirect(M,null,b,h,m,null)}function x(V,M,b,g){let T=null;const C=b.isPointLight===!0?V.customDistanceMaterial:V.customDepthMaterial;if(C!==void 0)T=C;else if(T=b.isPointLight===!0?l:o,r.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0||M.alphaToCoverage===!0){const R=T.uuid,O=M.uuid;let Z=c[R];Z===void 0&&(Z={},c[R]=Z);let B=Z[O];B===void 0&&(B=T.clone(),Z[O]=B,M.addEventListener("dispose",E)),T=B}if(T.visible=M.visible,T.wireframe=M.wireframe,g===Di?T.side=M.shadowSide!==null?M.shadowSide:M.side:T.side=M.shadowSide!==null?M.shadowSide:f[M.side],T.alphaMap=M.alphaMap,T.alphaTest=M.alphaToCoverage===!0?.5:M.alphaTest,T.map=M.map,T.clipShadows=M.clipShadows,T.clippingPlanes=M.clippingPlanes,T.clipIntersection=M.clipIntersection,T.displacementMap=M.displacementMap,T.displacementScale=M.displacementScale,T.displacementBias=M.displacementBias,T.wireframeLinewidth=M.wireframeLinewidth,T.linewidth=M.linewidth,b.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const R=r.properties.get(T);R.light=b}return T}function _(V,M,b,g,T){if(V.visible===!1)return;if(V.layers.test(M.layers)&&(V.isMesh||V.isLine||V.isPoints)&&(V.castShadow||V.receiveShadow&&T===Di)&&(!V.frustumCulled||n.intersectsObject(V))){V.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,V.matrixWorld);const O=e.update(V),Z=V.material;if(Array.isArray(Z)){const B=O.groups;for(let H=0,G=B.length;H<G;H++){const N=B[H],ne=Z[N.materialIndex];if(ne&&ne.visible){const P=x(V,ne,g,T);V.onBeforeShadow(r,V,M,b,O,P,N),r.renderBufferDirect(b,null,O,P,V,N),V.onAfterShadow(r,V,M,b,O,P,N)}}}else if(Z.visible){const B=x(V,Z,g,T);V.onBeforeShadow(r,V,M,b,O,B,null),r.renderBufferDirect(b,null,O,B,V,null),V.onAfterShadow(r,V,M,b,O,B,null)}}const R=V.children;for(let O=0,Z=R.length;O<Z;O++)_(R[O],M,b,g,T)}function E(V){V.target.removeEventListener("dispose",E);for(const b in c){const g=c[b],T=V.target.uuid;T in g&&(g[T].dispose(),delete g[T])}}}const Wv={[gu]:Wu,[Uu]:xu,[Mu]:Eu,[na]:vu,[Wu]:gu,[xu]:Uu,[Eu]:Mu,[vu]:na};function Uv(r,e){function t(){let X=!1;const ie=new Gt;let ae=null;const Ye=new Gt(0,0,0,0);return{setMask:function(te){ae!==te&&!X&&(r.colorMask(te,te,te,te),ae=te)},setLocked:function(te){X=te},setClear:function(te,j,We,De,ht){ht===!0&&(te*=De,j*=De,We*=De),ie.set(te,j,We,De),Ye.equals(ie)===!1&&(r.clearColor(te,j,We,De),Ye.copy(ie))},reset:function(){X=!1,ae=null,Ye.set(-1,0,0,0)}}}function n(){let X=!1,ie=!1,ae=null,Ye=null,te=null;return{setReversed:function(j){if(ie!==j){const We=e.get("EXT_clip_control");j?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT),ie=j;const De=te;te=null,this.setClear(De)}},getReversed:function(){return ie},setTest:function(j){j?q(r.DEPTH_TEST):de(r.DEPTH_TEST)},setMask:function(j){ae!==j&&!X&&(r.depthMask(j),ae=j)},setFunc:function(j){if(ie&&(j=Wv[j]),Ye!==j){switch(j){case gu:r.depthFunc(r.NEVER);break;case Wu:r.depthFunc(r.ALWAYS);break;case Uu:r.depthFunc(r.LESS);break;case na:r.depthFunc(r.LEQUAL);break;case Mu:r.depthFunc(r.EQUAL);break;case vu:r.depthFunc(r.GEQUAL);break;case xu:r.depthFunc(r.GREATER);break;case Eu:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ye=j}},setLocked:function(j){X=j},setClear:function(j){te!==j&&(ie&&(j=1-j),r.clearDepth(j),te=j)},reset:function(){X=!1,ae=null,Ye=null,te=null,ie=!1}}}function i(){let X=!1,ie=null,ae=null,Ye=null,te=null,j=null,We=null,De=null,ht=null;return{setTest:function(Se){X||(Se?q(r.STENCIL_TEST):de(r.STENCIL_TEST))},setMask:function(Se){ie!==Se&&!X&&(r.stencilMask(Se),ie=Se)},setFunc:function(Se,be,$e){(ae!==Se||Ye!==be||te!==$e)&&(r.stencilFunc(Se,be,$e),ae=Se,Ye=be,te=$e)},setOp:function(Se,be,$e){(j!==Se||We!==be||De!==$e)&&(r.stencilOp(Se,be,$e),j=Se,We=be,De=$e)},setLocked:function(Se){X=Se},setClear:function(Se){ht!==Se&&(r.clearStencil(Se),ht=Se)},reset:function(){X=!1,ie=null,ae=null,Ye=null,te=null,j=null,We=null,De=null,ht=null}}}const s=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,h=[],S=null,m=!1,Y=null,p=null,v=null,x=null,_=null,E=null,V=null,M=new gt(0,0,0),b=0,g=!1,T=null,C=null,R=null,O=null,Z=null;const B=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,G=0;const N=r.getParameter(r.VERSION);N.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(N)[1]),H=G>=1):N.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),H=G>=2);let ne=null,P={};const fe=r.getParameter(r.SCISSOR_BOX),Le=r.getParameter(r.VIEWPORT),tt=new Gt().fromArray(fe),He=new Gt().fromArray(Le);function Ze(X,ie,ae,Ye){const te=new Uint8Array(4),j=r.createTexture();r.bindTexture(X,j),r.texParameteri(X,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(X,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let We=0;We<ae;We++)X===r.TEXTURE_3D||X===r.TEXTURE_2D_ARRAY?r.texImage3D(ie,0,r.RGBA,1,1,Ye,0,r.RGBA,r.UNSIGNED_BYTE,te):r.texImage2D(ie+We,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,te);return j}const K={};K[r.TEXTURE_2D]=Ze(r.TEXTURE_2D,r.TEXTURE_2D,1),K[r.TEXTURE_CUBE_MAP]=Ze(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[r.TEXTURE_2D_ARRAY]=Ze(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),K[r.TEXTURE_3D]=Ze(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),q(r.DEPTH_TEST),a.setFunc(na),Ae(!1),I(Kh),q(r.CULL_FACE),ze(Tr);function q(X){u[X]!==!0&&(r.enable(X),u[X]=!0)}function de(X){u[X]!==!1&&(r.disable(X),u[X]=!1)}function ye(X,ie){return f[X]!==ie?(r.bindFramebuffer(X,ie),f[X]=ie,X===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=ie),X===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=ie),!0):!1}function xe(X,ie){let ae=h,Ye=!1;if(X){ae=d.get(ie),ae===void 0&&(ae=[],d.set(ie,ae));const te=X.textures;if(ae.length!==te.length||ae[0]!==r.COLOR_ATTACHMENT0){for(let j=0,We=te.length;j<We;j++)ae[j]=r.COLOR_ATTACHMENT0+j;ae.length=te.length,Ye=!0}}else ae[0]!==r.BACK&&(ae[0]=r.BACK,Ye=!0);Ye&&r.drawBuffers(ae)}function Fe(X){return S!==X?(r.useProgram(X),S=X,!0):!1}const ft={[Gr]:r.FUNC_ADD,[P_]:r.FUNC_SUBTRACT,[X_]:r.FUNC_REVERSE_SUBTRACT};ft[C_]=r.MIN,ft[R_]=r.MAX;const A={[I_]:r.ZERO,[w_]:r.ONE,[L_]:r.SRC_COLOR,[_u]:r.SRC_ALPHA,[B_]:r.SRC_ALPHA_SATURATE,[F_]:r.DST_COLOR,[N_]:r.DST_ALPHA,[D_]:r.ONE_MINUS_SRC_COLOR,[Tu]:r.ONE_MINUS_SRC_ALPHA,[G_]:r.ONE_MINUS_DST_COLOR,[O_]:r.ONE_MINUS_DST_ALPHA,[Z_]:r.CONSTANT_COLOR,[H_]:r.ONE_MINUS_CONSTANT_COLOR,[z_]:r.CONSTANT_ALPHA,[k_]:r.ONE_MINUS_CONSTANT_ALPHA};function ze(X,ie,ae,Ye,te,j,We,De,ht,Se){if(X===Tr){m===!0&&(de(r.BLEND),m=!1);return}if(m===!1&&(q(r.BLEND),m=!0),X!==b_){if(X!==Y||Se!==g){if((p!==Gr||_!==Gr)&&(r.blendEquation(r.FUNC_ADD),p=Gr,_=Gr),Se)switch(X){case ks:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Su:r.blendFunc(r.ONE,r.ONE);break;case Qh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Jh:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case ks:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Su:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Qh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Jh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}v=null,x=null,E=null,V=null,M.set(0,0,0),b=0,Y=X,g=Se}return}te=te||ie,j=j||ae,We=We||Ye,(ie!==p||te!==_)&&(r.blendEquationSeparate(ft[ie],ft[te]),p=ie,_=te),(ae!==v||Ye!==x||j!==E||We!==V)&&(r.blendFuncSeparate(A[ae],A[Ye],A[j],A[We]),v=ae,x=Ye,E=j,V=We),(De.equals(M)===!1||ht!==b)&&(r.blendColor(De.r,De.g,De.b,ht),M.copy(De),b=ht),Y=X,g=!1}function Ce(X,ie){X.side===Zi?de(r.CULL_FACE):q(r.CULL_FACE);let ae=X.side===Mn;ie&&(ae=!ae),Ae(ae),X.blending===ks&&X.transparent===!1?ze(Tr):ze(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),a.setFunc(X.depthFunc),a.setTest(X.depthTest),a.setMask(X.depthWrite),s.setMask(X.colorWrite);const Ye=X.stencilWrite;o.setTest(Ye),Ye&&(o.setMask(X.stencilWriteMask),o.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),o.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),_e(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?q(r.SAMPLE_ALPHA_TO_COVERAGE):de(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(X){T!==X&&(X?r.frontFace(r.CW):r.frontFace(r.CCW),T=X)}function I(X){X!==V_?(q(r.CULL_FACE),X!==C&&(X===Kh?r.cullFace(r.BACK):X===y_?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):de(r.CULL_FACE),C=X}function nt(X){X!==R&&(H&&r.lineWidth(X),R=X)}function _e(X,ie,ae){X?(q(r.POLYGON_OFFSET_FILL),(O!==ie||Z!==ae)&&(r.polygonOffset(ie,ae),O=ie,Z=ae)):de(r.POLYGON_OFFSET_FILL)}function Ge(X){X?q(r.SCISSOR_TEST):de(r.SCISSOR_TEST)}function Ke(X){X===void 0&&(X=r.TEXTURE0+B-1),ne!==X&&(r.activeTexture(X),ne=X)}function mt(X,ie,ae){ae===void 0&&(ne===null?ae=r.TEXTURE0+B-1:ae=ne);let Ye=P[ae];Ye===void 0&&(Ye={type:void 0,texture:void 0},P[ae]=Ye),(Ye.type!==X||Ye.texture!==ie)&&(ne!==ae&&(r.activeTexture(ae),ne=ae),r.bindTexture(X,ie||K[X]),Ye.type=X,Ye.texture=ie)}function y(){const X=P[ne];X!==void 0&&X.type!==void 0&&(r.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function W(){try{r.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function D(){try{r.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Q(){try{r.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function J(){try{r.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function $(){try{r.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Te(){try{r.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function se(){try{r.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ee(){try{r.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function he(){try{r.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function re(){try{r.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ue(X){tt.equals(X)===!1&&(r.scissor(X.x,X.y,X.z,X.w),tt.copy(X))}function Ie(X){He.equals(X)===!1&&(r.viewport(X.x,X.y,X.z,X.w),He.copy(X))}function Ve(X,ie){let ae=c.get(ie);ae===void 0&&(ae=new WeakMap,c.set(ie,ae));let Ye=ae.get(X);Ye===void 0&&(Ye=r.getUniformBlockIndex(ie,X.name),ae.set(X,Ye))}function ce(X,ie){const Ye=c.get(ie).get(X);l.get(ie)!==Ye&&(r.uniformBlockBinding(ie,Ye,X.__bindingPointIndex),l.set(ie,Ye))}function Be(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},ne=null,P={},f={},d=new WeakMap,h=[],S=null,m=!1,Y=null,p=null,v=null,x=null,_=null,E=null,V=null,M=new gt(0,0,0),b=0,g=!1,T=null,C=null,R=null,O=null,Z=null,tt.set(0,0,r.canvas.width,r.canvas.height),He.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:q,disable:de,bindFramebuffer:ye,drawBuffers:xe,useProgram:Fe,setBlending:ze,setMaterial:Ce,setFlipSided:Ae,setCullFace:I,setLineWidth:nt,setPolygonOffset:_e,setScissorTest:Ge,activeTexture:Ke,bindTexture:mt,unbindTexture:y,compressedTexImage2D:W,compressedTexImage3D:D,texImage2D:he,texImage3D:re,updateUBOMapping:Ve,uniformBlockBinding:ce,texStorage2D:se,texStorage3D:Ee,texSubImage2D:Q,texSubImage3D:J,compressedTexSubImage2D:$,compressedTexSubImage3D:Te,scissor:ue,viewport:Ie,reset:Be}}function Mv(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ut,u=new WeakMap;let f;const d=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(y,W){return h?new OffscreenCanvas(y,W):Nl("canvas")}function m(y,W,D){let Q=1;const J=mt(y);if((J.width>D||J.height>D)&&(Q=D/Math.max(J.width,J.height)),Q<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const $=Math.floor(Q*J.width),Te=Math.floor(Q*J.height);f===void 0&&(f=S($,Te));const se=W?S($,Te):f;return se.width=$,se.height=Te,se.getContext("2d").drawImage(y,0,0,$,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+$+"x"+Te+")."),se}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),y;return y}function Y(y){return y.generateMipmaps}function p(y){r.generateMipmap(y)}function v(y){return y.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?r.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function x(y,W,D,Q,J=!1){if(y!==null){if(r[y]!==void 0)return r[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let $=W;if(W===r.RED&&(D===r.FLOAT&&($=r.R32F),D===r.HALF_FLOAT&&($=r.R16F),D===r.UNSIGNED_BYTE&&($=r.R8)),W===r.RED_INTEGER&&(D===r.UNSIGNED_BYTE&&($=r.R8UI),D===r.UNSIGNED_SHORT&&($=r.R16UI),D===r.UNSIGNED_INT&&($=r.R32UI),D===r.BYTE&&($=r.R8I),D===r.SHORT&&($=r.R16I),D===r.INT&&($=r.R32I)),W===r.RG&&(D===r.FLOAT&&($=r.RG32F),D===r.HALF_FLOAT&&($=r.RG16F),D===r.UNSIGNED_BYTE&&($=r.RG8)),W===r.RG_INTEGER&&(D===r.UNSIGNED_BYTE&&($=r.RG8UI),D===r.UNSIGNED_SHORT&&($=r.RG16UI),D===r.UNSIGNED_INT&&($=r.RG32UI),D===r.BYTE&&($=r.RG8I),D===r.SHORT&&($=r.RG16I),D===r.INT&&($=r.RG32I)),W===r.RGB_INTEGER&&(D===r.UNSIGNED_BYTE&&($=r.RGB8UI),D===r.UNSIGNED_SHORT&&($=r.RGB16UI),D===r.UNSIGNED_INT&&($=r.RGB32UI),D===r.BYTE&&($=r.RGB8I),D===r.SHORT&&($=r.RGB16I),D===r.INT&&($=r.RGB32I)),W===r.RGBA_INTEGER&&(D===r.UNSIGNED_BYTE&&($=r.RGBA8UI),D===r.UNSIGNED_SHORT&&($=r.RGBA16UI),D===r.UNSIGNED_INT&&($=r.RGBA32UI),D===r.BYTE&&($=r.RGBA8I),D===r.SHORT&&($=r.RGBA16I),D===r.INT&&($=r.RGBA32I)),W===r.RGB&&(D===r.UNSIGNED_INT_5_9_9_9_REV&&($=r.RGB9_E5),D===r.UNSIGNED_INT_10F_11F_11F_REV&&($=r.R11F_G11F_B10F)),W===r.RGBA){const Te=J?Ll:Yt.getTransfer(Q);D===r.FLOAT&&($=r.RGBA32F),D===r.HALF_FLOAT&&($=r.RGBA16F),D===r.UNSIGNED_BYTE&&($=Te===Wt?r.SRGB8_ALPHA8:r.RGBA8),D===r.UNSIGNED_SHORT_4_4_4_4&&($=r.RGBA4),D===r.UNSIGNED_SHORT_5_5_5_1&&($=r.RGB5_A1)}return($===r.R16F||$===r.R32F||$===r.RG16F||$===r.RG32F||$===r.RGBA16F||$===r.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function _(y,W){let D;return y?W===null||W===os||W===io?D=r.DEPTH24_STENCIL8:W===ki?D=r.DEPTH32F_STENCIL8:W===no&&(D=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):W===null||W===os||W===io?D=r.DEPTH_COMPONENT24:W===ki?D=r.DEPTH_COMPONENT32F:W===no&&(D=r.DEPTH_COMPONENT16),D}function E(y,W){return Y(y)===!0||y.isFramebufferTexture&&y.minFilter!==mi&&y.minFilter!==Vi?Math.log2(Math.max(W.width,W.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?W.mipmaps.length:1}function V(y){const W=y.target;W.removeEventListener("dispose",V),b(W),W.isVideoTexture&&u.delete(W)}function M(y){const W=y.target;W.removeEventListener("dispose",M),T(W)}function b(y){const W=n.get(y);if(W.__webglInit===void 0)return;const D=y.source,Q=d.get(D);if(Q){const J=Q[W.__cacheKey];J.usedTimes--,J.usedTimes===0&&g(y),Object.keys(Q).length===0&&d.delete(D)}n.remove(y)}function g(y){const W=n.get(y);r.deleteTexture(W.__webglTexture);const D=y.source,Q=d.get(D);delete Q[W.__cacheKey],a.memory.textures--}function T(y){const W=n.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),n.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(W.__webglFramebuffer[Q]))for(let J=0;J<W.__webglFramebuffer[Q].length;J++)r.deleteFramebuffer(W.__webglFramebuffer[Q][J]);else r.deleteFramebuffer(W.__webglFramebuffer[Q]);W.__webglDepthbuffer&&r.deleteRenderbuffer(W.__webglDepthbuffer[Q])}else{if(Array.isArray(W.__webglFramebuffer))for(let Q=0;Q<W.__webglFramebuffer.length;Q++)r.deleteFramebuffer(W.__webglFramebuffer[Q]);else r.deleteFramebuffer(W.__webglFramebuffer);if(W.__webglDepthbuffer&&r.deleteRenderbuffer(W.__webglDepthbuffer),W.__webglMultisampledFramebuffer&&r.deleteFramebuffer(W.__webglMultisampledFramebuffer),W.__webglColorRenderbuffer)for(let Q=0;Q<W.__webglColorRenderbuffer.length;Q++)W.__webglColorRenderbuffer[Q]&&r.deleteRenderbuffer(W.__webglColorRenderbuffer[Q]);W.__webglDepthRenderbuffer&&r.deleteRenderbuffer(W.__webglDepthRenderbuffer)}const D=y.textures;for(let Q=0,J=D.length;Q<J;Q++){const $=n.get(D[Q]);$.__webglTexture&&(r.deleteTexture($.__webglTexture),a.memory.textures--),n.remove(D[Q])}n.remove(y)}let C=0;function R(){C=0}function O(){const y=C;return y>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+i.maxTextures),C+=1,y}function Z(y){const W=[];return W.push(y.wrapS),W.push(y.wrapT),W.push(y.wrapR||0),W.push(y.magFilter),W.push(y.minFilter),W.push(y.anisotropy),W.push(y.internalFormat),W.push(y.format),W.push(y.type),W.push(y.generateMipmaps),W.push(y.premultiplyAlpha),W.push(y.flipY),W.push(y.unpackAlignment),W.push(y.colorSpace),W.join()}function B(y,W){const D=n.get(y);if(y.isVideoTexture&&Ge(y),y.isRenderTargetTexture===!1&&y.isExternalTexture!==!0&&y.version>0&&D.__version!==y.version){const Q=y.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(D,y,W);return}}else y.isExternalTexture&&(D.__webglTexture=y.sourceTexture?y.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,D.__webglTexture,r.TEXTURE0+W)}function H(y,W){const D=n.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&D.__version!==y.version){K(D,y,W);return}t.bindTexture(r.TEXTURE_2D_ARRAY,D.__webglTexture,r.TEXTURE0+W)}function G(y,W){const D=n.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&D.__version!==y.version){K(D,y,W);return}t.bindTexture(r.TEXTURE_3D,D.__webglTexture,r.TEXTURE0+W)}function N(y,W){const D=n.get(y);if(y.version>0&&D.__version!==y.version){q(D,y,W);return}t.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+W)}const ne={[Au]:r.REPEAT,[kr]:r.CLAMP_TO_EDGE,[bu]:r.MIRRORED_REPEAT},P={[mi]:r.NEAREST,[nT]:r.NEAREST_MIPMAP_NEAREST,[Ro]:r.NEAREST_MIPMAP_LINEAR,[Vi]:r.LINEAR,[pc]:r.LINEAR_MIPMAP_NEAREST,[$r]:r.LINEAR_MIPMAP_LINEAR},fe={[oT]:r.NEVER,[dT]:r.ALWAYS,[lT]:r.LESS,[lm]:r.LEQUAL,[cT]:r.EQUAL,[hT]:r.GEQUAL,[uT]:r.GREATER,[fT]:r.NOTEQUAL};function Le(y,W){if(W.type===ki&&e.has("OES_texture_float_linear")===!1&&(W.magFilter===Vi||W.magFilter===pc||W.magFilter===Ro||W.magFilter===$r||W.minFilter===Vi||W.minFilter===pc||W.minFilter===Ro||W.minFilter===$r)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(y,r.TEXTURE_WRAP_S,ne[W.wrapS]),r.texParameteri(y,r.TEXTURE_WRAP_T,ne[W.wrapT]),(y===r.TEXTURE_3D||y===r.TEXTURE_2D_ARRAY)&&r.texParameteri(y,r.TEXTURE_WRAP_R,ne[W.wrapR]),r.texParameteri(y,r.TEXTURE_MAG_FILTER,P[W.magFilter]),r.texParameteri(y,r.TEXTURE_MIN_FILTER,P[W.minFilter]),W.compareFunction&&(r.texParameteri(y,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(y,r.TEXTURE_COMPARE_FUNC,fe[W.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(W.magFilter===mi||W.minFilter!==Ro&&W.minFilter!==$r||W.type===ki&&e.has("OES_texture_float_linear")===!1)return;if(W.anisotropy>1||n.get(W).__currentAnisotropy){const D=e.get("EXT_texture_filter_anisotropic");r.texParameterf(y,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(W.anisotropy,i.getMaxAnisotropy())),n.get(W).__currentAnisotropy=W.anisotropy}}}function tt(y,W){let D=!1;y.__webglInit===void 0&&(y.__webglInit=!0,W.addEventListener("dispose",V));const Q=W.source;let J=d.get(Q);J===void 0&&(J={},d.set(Q,J));const $=Z(W);if($!==y.__cacheKey){J[$]===void 0&&(J[$]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,D=!0),J[$].usedTimes++;const Te=J[y.__cacheKey];Te!==void 0&&(J[y.__cacheKey].usedTimes--,Te.usedTimes===0&&g(W)),y.__cacheKey=$,y.__webglTexture=J[$].texture}return D}function He(y,W,D){return Math.floor(Math.floor(y/D)/W)}function Ze(y,W,D,Q){const $=y.updateRanges;if($.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,W.width,W.height,D,Q,W.data);else{$.sort((re,ue)=>re.start-ue.start);let Te=0;for(let re=1;re<$.length;re++){const ue=$[Te],Ie=$[re],Ve=ue.start+ue.count,ce=He(Ie.start,W.width,4),Be=He(ue.start,W.width,4);Ie.start<=Ve+1&&ce===Be&&He(Ie.start+Ie.count-1,W.width,4)===ce?ue.count=Math.max(ue.count,Ie.start+Ie.count-ue.start):(++Te,$[Te]=Ie)}$.length=Te+1;const se=r.getParameter(r.UNPACK_ROW_LENGTH),Ee=r.getParameter(r.UNPACK_SKIP_PIXELS),he=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,W.width);for(let re=0,ue=$.length;re<ue;re++){const Ie=$[re],Ve=Math.floor(Ie.start/4),ce=Math.ceil(Ie.count/4),Be=Ve%W.width,X=Math.floor(Ve/W.width),ie=ce,ae=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Be),r.pixelStorei(r.UNPACK_SKIP_ROWS,X),t.texSubImage2D(r.TEXTURE_2D,0,Be,X,ie,ae,D,Q,W.data)}y.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,se),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ee),r.pixelStorei(r.UNPACK_SKIP_ROWS,he)}}function K(y,W,D){let Q=r.TEXTURE_2D;(W.isDataArrayTexture||W.isCompressedArrayTexture)&&(Q=r.TEXTURE_2D_ARRAY),W.isData3DTexture&&(Q=r.TEXTURE_3D);const J=tt(y,W),$=W.source;t.bindTexture(Q,y.__webglTexture,r.TEXTURE0+D);const Te=n.get($);if($.version!==Te.__version||J===!0){t.activeTexture(r.TEXTURE0+D);const se=Yt.getPrimaries(Yt.workingColorSpace),Ee=W.colorSpace===cr?null:Yt.getPrimaries(W.colorSpace),he=W.colorSpace===cr||se===Ee?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,W.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,W.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);let re=m(W.image,!1,i.maxTextureSize);re=Ke(W,re);const ue=s.convert(W.format,W.colorSpace),Ie=s.convert(W.type);let Ve=x(W.internalFormat,ue,Ie,W.colorSpace,W.isVideoTexture);Le(Q,W);let ce;const Be=W.mipmaps,X=W.isVideoTexture!==!0,ie=Te.__version===void 0||J===!0,ae=$.dataReady,Ye=E(W,re);if(W.isDepthTexture)Ve=_(W.format===so,W.type),ie&&(X?t.texStorage2D(r.TEXTURE_2D,1,Ve,re.width,re.height):t.texImage2D(r.TEXTURE_2D,0,Ve,re.width,re.height,0,ue,Ie,null));else if(W.isDataTexture)if(Be.length>0){X&&ie&&t.texStorage2D(r.TEXTURE_2D,Ye,Ve,Be[0].width,Be[0].height);for(let te=0,j=Be.length;te<j;te++)ce=Be[te],X?ae&&t.texSubImage2D(r.TEXTURE_2D,te,0,0,ce.width,ce.height,ue,Ie,ce.data):t.texImage2D(r.TEXTURE_2D,te,Ve,ce.width,ce.height,0,ue,Ie,ce.data);W.generateMipmaps=!1}else X?(ie&&t.texStorage2D(r.TEXTURE_2D,Ye,Ve,re.width,re.height),ae&&Ze(W,re,ue,Ie)):t.texImage2D(r.TEXTURE_2D,0,Ve,re.width,re.height,0,ue,Ie,re.data);else if(W.isCompressedTexture)if(W.isCompressedArrayTexture){X&&ie&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ye,Ve,Be[0].width,Be[0].height,re.depth);for(let te=0,j=Be.length;te<j;te++)if(ce=Be[te],W.format!==Yi)if(ue!==null)if(X){if(ae)if(W.layerUpdates.size>0){const We=gd(ce.width,ce.height,W.format,W.type);for(const De of W.layerUpdates){const ht=ce.data.subarray(De*We/ce.data.BYTES_PER_ELEMENT,(De+1)*We/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,te,0,0,De,ce.width,ce.height,1,ue,ht)}W.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,te,0,0,0,ce.width,ce.height,re.depth,ue,ce.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,te,Ve,ce.width,ce.height,re.depth,0,ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?ae&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,te,0,0,0,ce.width,ce.height,re.depth,ue,Ie,ce.data):t.texImage3D(r.TEXTURE_2D_ARRAY,te,Ve,ce.width,ce.height,re.depth,0,ue,Ie,ce.data)}else{X&&ie&&t.texStorage2D(r.TEXTURE_2D,Ye,Ve,Be[0].width,Be[0].height);for(let te=0,j=Be.length;te<j;te++)ce=Be[te],W.format!==Yi?ue!==null?X?ae&&t.compressedTexSubImage2D(r.TEXTURE_2D,te,0,0,ce.width,ce.height,ue,ce.data):t.compressedTexImage2D(r.TEXTURE_2D,te,Ve,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?ae&&t.texSubImage2D(r.TEXTURE_2D,te,0,0,ce.width,ce.height,ue,Ie,ce.data):t.texImage2D(r.TEXTURE_2D,te,Ve,ce.width,ce.height,0,ue,Ie,ce.data)}else if(W.isDataArrayTexture)if(X){if(ie&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ye,Ve,re.width,re.height,re.depth),ae)if(W.layerUpdates.size>0){const te=gd(re.width,re.height,W.format,W.type);for(const j of W.layerUpdates){const We=re.data.subarray(j*te/re.data.BYTES_PER_ELEMENT,(j+1)*te/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,j,re.width,re.height,1,ue,Ie,We)}W.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,ue,Ie,re.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ve,re.width,re.height,re.depth,0,ue,Ie,re.data);else if(W.isData3DTexture)X?(ie&&t.texStorage3D(r.TEXTURE_3D,Ye,Ve,re.width,re.height,re.depth),ae&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,ue,Ie,re.data)):t.texImage3D(r.TEXTURE_3D,0,Ve,re.width,re.height,re.depth,0,ue,Ie,re.data);else if(W.isFramebufferTexture){if(ie)if(X)t.texStorage2D(r.TEXTURE_2D,Ye,Ve,re.width,re.height);else{let te=re.width,j=re.height;for(let We=0;We<Ye;We++)t.texImage2D(r.TEXTURE_2D,We,Ve,te,j,0,ue,Ie,null),te>>=1,j>>=1}}else if(Be.length>0){if(X&&ie){const te=mt(Be[0]);t.texStorage2D(r.TEXTURE_2D,Ye,Ve,te.width,te.height)}for(let te=0,j=Be.length;te<j;te++)ce=Be[te],X?ae&&t.texSubImage2D(r.TEXTURE_2D,te,0,0,ue,Ie,ce):t.texImage2D(r.TEXTURE_2D,te,Ve,ue,Ie,ce);W.generateMipmaps=!1}else if(X){if(ie){const te=mt(re);t.texStorage2D(r.TEXTURE_2D,Ye,Ve,te.width,te.height)}ae&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ue,Ie,re)}else t.texImage2D(r.TEXTURE_2D,0,Ve,ue,Ie,re);Y(W)&&p(Q),Te.__version=$.version,W.onUpdate&&W.onUpdate(W)}y.__version=W.version}function q(y,W,D){if(W.image.length!==6)return;const Q=tt(y,W),J=W.source;t.bindTexture(r.TEXTURE_CUBE_MAP,y.__webglTexture,r.TEXTURE0+D);const $=n.get(J);if(J.version!==$.__version||Q===!0){t.activeTexture(r.TEXTURE0+D);const Te=Yt.getPrimaries(Yt.workingColorSpace),se=W.colorSpace===cr?null:Yt.getPrimaries(W.colorSpace),Ee=W.colorSpace===cr||Te===se?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,W.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,W.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const he=W.isCompressedTexture||W.image[0].isCompressedTexture,re=W.image[0]&&W.image[0].isDataTexture,ue=[];for(let j=0;j<6;j++)!he&&!re?ue[j]=m(W.image[j],!0,i.maxCubemapSize):ue[j]=re?W.image[j].image:W.image[j],ue[j]=Ke(W,ue[j]);const Ie=ue[0],Ve=s.convert(W.format,W.colorSpace),ce=s.convert(W.type),Be=x(W.internalFormat,Ve,ce,W.colorSpace),X=W.isVideoTexture!==!0,ie=$.__version===void 0||Q===!0,ae=J.dataReady;let Ye=E(W,Ie);Le(r.TEXTURE_CUBE_MAP,W);let te;if(he){X&&ie&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Ye,Be,Ie.width,Ie.height);for(let j=0;j<6;j++){te=ue[j].mipmaps;for(let We=0;We<te.length;We++){const De=te[We];W.format!==Yi?Ve!==null?X?ae&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,We,0,0,De.width,De.height,Ve,De.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,We,Be,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?ae&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,We,0,0,De.width,De.height,Ve,ce,De.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,We,Be,De.width,De.height,0,Ve,ce,De.data)}}}else{if(te=W.mipmaps,X&&ie){te.length>0&&Ye++;const j=mt(ue[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Ye,Be,j.width,j.height)}for(let j=0;j<6;j++)if(re){X?ae&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ue[j].width,ue[j].height,Ve,ce,ue[j].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Be,ue[j].width,ue[j].height,0,Ve,ce,ue[j].data);for(let We=0;We<te.length;We++){const ht=te[We].image[j].image;X?ae&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,We+1,0,0,ht.width,ht.height,Ve,ce,ht.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,We+1,Be,ht.width,ht.height,0,Ve,ce,ht.data)}}else{X?ae&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Ve,ce,ue[j]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Be,Ve,ce,ue[j]);for(let We=0;We<te.length;We++){const De=te[We];X?ae&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,We+1,0,0,Ve,ce,De.image[j]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,We+1,Be,Ve,ce,De.image[j])}}}Y(W)&&p(r.TEXTURE_CUBE_MAP),$.__version=J.version,W.onUpdate&&W.onUpdate(W)}y.__version=W.version}function de(y,W,D,Q,J,$){const Te=s.convert(D.format,D.colorSpace),se=s.convert(D.type),Ee=x(D.internalFormat,Te,se,D.colorSpace),he=n.get(W),re=n.get(D);if(re.__renderTarget=W,!he.__hasExternalTextures){const ue=Math.max(1,W.width>>$),Ie=Math.max(1,W.height>>$);J===r.TEXTURE_3D||J===r.TEXTURE_2D_ARRAY?t.texImage3D(J,$,Ee,ue,Ie,W.depth,0,Te,se,null):t.texImage2D(J,$,Ee,ue,Ie,0,Te,se,null)}t.bindFramebuffer(r.FRAMEBUFFER,y),_e(W)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Q,J,re.__webglTexture,0,nt(W)):(J===r.TEXTURE_2D||J>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Q,J,re.__webglTexture,$),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ye(y,W,D){if(r.bindRenderbuffer(r.RENDERBUFFER,y),W.depthBuffer){const Q=W.depthTexture,J=Q&&Q.isDepthTexture?Q.type:null,$=_(W.stencilBuffer,J),Te=W.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,se=nt(W);_e(W)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,se,$,W.width,W.height):D?r.renderbufferStorageMultisample(r.RENDERBUFFER,se,$,W.width,W.height):r.renderbufferStorage(r.RENDERBUFFER,$,W.width,W.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Te,r.RENDERBUFFER,y)}else{const Q=W.textures;for(let J=0;J<Q.length;J++){const $=Q[J],Te=s.convert($.format,$.colorSpace),se=s.convert($.type),Ee=x($.internalFormat,Te,se,$.colorSpace),he=nt(W);D&&_e(W)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,he,Ee,W.width,W.height):_e(W)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,he,Ee,W.width,W.height):r.renderbufferStorage(r.RENDERBUFFER,Ee,W.width,W.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function xe(y,W){if(W&&W.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,y),!(W.depthTexture&&W.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(W.depthTexture);Q.__renderTarget=W,(!Q.__webglTexture||W.depthTexture.image.width!==W.width||W.depthTexture.image.height!==W.height)&&(W.depthTexture.image.width=W.width,W.depthTexture.image.height=W.height,W.depthTexture.needsUpdate=!0),B(W.depthTexture,0);const J=Q.__webglTexture,$=nt(W);if(W.depthTexture.format===ro)_e(W)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0,$):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0);else if(W.depthTexture.format===so)_e(W)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0,$):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Fe(y){const W=n.get(y),D=y.isWebGLCubeRenderTarget===!0;if(W.__boundDepthTexture!==y.depthTexture){const Q=y.depthTexture;if(W.__depthDisposeCallback&&W.__depthDisposeCallback(),Q){const J=()=>{delete W.__boundDepthTexture,delete W.__depthDisposeCallback,Q.removeEventListener("dispose",J)};Q.addEventListener("dispose",J),W.__depthDisposeCallback=J}W.__boundDepthTexture=Q}if(y.depthTexture&&!W.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");const Q=y.texture.mipmaps;Q&&Q.length>0?xe(W.__webglFramebuffer[0],y):xe(W.__webglFramebuffer,y)}else if(D){W.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(r.FRAMEBUFFER,W.__webglFramebuffer[Q]),W.__webglDepthbuffer[Q]===void 0)W.__webglDepthbuffer[Q]=r.createRenderbuffer(),ye(W.__webglDepthbuffer[Q],y,!1);else{const J=y.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$=W.__webglDepthbuffer[Q];r.bindRenderbuffer(r.RENDERBUFFER,$),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,$)}}else{const Q=y.texture.mipmaps;if(Q&&Q.length>0?t.bindFramebuffer(r.FRAMEBUFFER,W.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,W.__webglFramebuffer),W.__webglDepthbuffer===void 0)W.__webglDepthbuffer=r.createRenderbuffer(),ye(W.__webglDepthbuffer,y,!1);else{const J=y.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$=W.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,$),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,$)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function ft(y,W,D){const Q=n.get(y);W!==void 0&&de(Q.__webglFramebuffer,y,y.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),D!==void 0&&Fe(y)}function A(y){const W=y.texture,D=n.get(y),Q=n.get(W);y.addEventListener("dispose",M);const J=y.textures,$=y.isWebGLCubeRenderTarget===!0,Te=J.length>1;if(Te||(Q.__webglTexture===void 0&&(Q.__webglTexture=r.createTexture()),Q.__version=W.version,a.memory.textures++),$){D.__webglFramebuffer=[];for(let se=0;se<6;se++)if(W.mipmaps&&W.mipmaps.length>0){D.__webglFramebuffer[se]=[];for(let Ee=0;Ee<W.mipmaps.length;Ee++)D.__webglFramebuffer[se][Ee]=r.createFramebuffer()}else D.__webglFramebuffer[se]=r.createFramebuffer()}else{if(W.mipmaps&&W.mipmaps.length>0){D.__webglFramebuffer=[];for(let se=0;se<W.mipmaps.length;se++)D.__webglFramebuffer[se]=r.createFramebuffer()}else D.__webglFramebuffer=r.createFramebuffer();if(Te)for(let se=0,Ee=J.length;se<Ee;se++){const he=n.get(J[se]);he.__webglTexture===void 0&&(he.__webglTexture=r.createTexture(),a.memory.textures++)}if(y.samples>0&&_e(y)===!1){D.__webglMultisampledFramebuffer=r.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let se=0;se<J.length;se++){const Ee=J[se];D.__webglColorRenderbuffer[se]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,D.__webglColorRenderbuffer[se]);const he=s.convert(Ee.format,Ee.colorSpace),re=s.convert(Ee.type),ue=x(Ee.internalFormat,he,re,Ee.colorSpace,y.isXRRenderTarget===!0),Ie=nt(y);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ie,ue,y.width,y.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+se,r.RENDERBUFFER,D.__webglColorRenderbuffer[se])}r.bindRenderbuffer(r.RENDERBUFFER,null),y.depthBuffer&&(D.__webglDepthRenderbuffer=r.createRenderbuffer(),ye(D.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if($){t.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture),Le(r.TEXTURE_CUBE_MAP,W);for(let se=0;se<6;se++)if(W.mipmaps&&W.mipmaps.length>0)for(let Ee=0;Ee<W.mipmaps.length;Ee++)de(D.__webglFramebuffer[se][Ee],y,W,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ee);else de(D.__webglFramebuffer[se],y,W,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);Y(W)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let se=0,Ee=J.length;se<Ee;se++){const he=J[se],re=n.get(he);let ue=r.TEXTURE_2D;(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(ue=y.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ue,re.__webglTexture),Le(ue,he),de(D.__webglFramebuffer,y,he,r.COLOR_ATTACHMENT0+se,ue,0),Y(he)&&p(ue)}t.unbindTexture()}else{let se=r.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(se=y.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(se,Q.__webglTexture),Le(se,W),W.mipmaps&&W.mipmaps.length>0)for(let Ee=0;Ee<W.mipmaps.length;Ee++)de(D.__webglFramebuffer[Ee],y,W,r.COLOR_ATTACHMENT0,se,Ee);else de(D.__webglFramebuffer,y,W,r.COLOR_ATTACHMENT0,se,0);Y(W)&&p(se),t.unbindTexture()}y.depthBuffer&&Fe(y)}function ze(y){const W=y.textures;for(let D=0,Q=W.length;D<Q;D++){const J=W[D];if(Y(J)){const $=v(y),Te=n.get(J).__webglTexture;t.bindTexture($,Te),p($),t.unbindTexture()}}}const Ce=[],Ae=[];function I(y){if(y.samples>0){if(_e(y)===!1){const W=y.textures,D=y.width,Q=y.height;let J=r.COLOR_BUFFER_BIT;const $=y.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Te=n.get(y),se=W.length>1;if(se)for(let he=0;he<W.length;he++)t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer);const Ee=y.texture.mipmaps;Ee&&Ee.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let he=0;he<W.length;he++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(J|=r.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(J|=r.STENCIL_BUFFER_BIT)),se){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Te.__webglColorRenderbuffer[he]);const re=n.get(W[he]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,re,0)}r.blitFramebuffer(0,0,D,Q,0,0,D,Q,J,r.NEAREST),l===!0&&(Ce.length=0,Ae.length=0,Ce.push(r.COLOR_ATTACHMENT0+he),y.depthBuffer&&y.resolveDepthBuffer===!1&&(Ce.push($),Ae.push($),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Ae)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ce))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),se)for(let he=0;he<W.length;he++){t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.RENDERBUFFER,Te.__webglColorRenderbuffer[he]);const re=n.get(W[he]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.TEXTURE_2D,re,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){const W=y.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[W])}}}function nt(y){return Math.min(i.maxSamples,y.samples)}function _e(y){const W=n.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&W.__useRenderToTexture!==!1}function Ge(y){const W=a.render.frame;u.get(y)!==W&&(u.set(y,W),y.update())}function Ke(y,W){const D=y.colorSpace,Q=y.format,J=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||D!==sa&&D!==cr&&(Yt.getTransfer(D)===Wt?(Q!==Yi||J!==qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),W}function mt(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=R,this.setTexture2D=B,this.setTexture2DArray=H,this.setTexture3D=G,this.setTextureCube=N,this.rebindTextures=ft,this.setupRenderTarget=A,this.updateRenderTargetMipmap=ze,this.updateMultisampleRenderTarget=I,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=de,this.useMultisampledRTT=_e}function vv(r,e){function t(n,i=cr){let s;const a=Yt.getTransfer(i);if(n===qi)return r.UNSIGNED_BYTE;if(n===kf)return r.UNSIGNED_SHORT_4_4_4_4;if(n===$f)return r.UNSIGNED_SHORT_5_5_5_1;if(n===nm)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===im)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===em)return r.BYTE;if(n===tm)return r.SHORT;if(n===no)return r.UNSIGNED_SHORT;if(n===zf)return r.INT;if(n===os)return r.UNSIGNED_INT;if(n===ki)return r.FLOAT;if(n===fo)return r.HALF_FLOAT;if(n===rm)return r.ALPHA;if(n===sm)return r.RGB;if(n===Yi)return r.RGBA;if(n===ro)return r.DEPTH_COMPONENT;if(n===so)return r.DEPTH_STENCIL;if(n===am)return r.RED;if(n===Kf)return r.RED_INTEGER;if(n===om)return r.RG;if(n===Qf)return r.RG_INTEGER;if(n===Jf)return r.RGBA_INTEGER;if(n===Tl||n===gl||n===Wl||n===Ul)if(a===Wt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Tl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===gl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Wl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ul)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Tl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===gl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Wl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ul)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Pu||n===Xu||n===Cu||n===Ru)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Pu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Xu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Cu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ru)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Iu||n===wu||n===Lu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Iu||n===wu)return a===Wt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Lu)return a===Wt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Du||n===Nu||n===Ou||n===Fu||n===Gu||n===Bu||n===Zu||n===Hu||n===zu||n===ku||n===$u||n===Ku||n===Qu||n===Ju)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Du)return a===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Nu)return a===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ou)return a===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Fu)return a===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Gu)return a===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Bu)return a===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Zu)return a===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Hu)return a===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===zu)return a===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ku)return a===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===$u)return a===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ku)return a===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Qu)return a===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ju)return a===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===qu||n===ju||n===ef)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===qu)return a===Wt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ju)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ef)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===tf||n===nf||n===rf||n===sf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===tf)return s.COMPRESSED_RED_RGTC1_EXT;if(n===nf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===rf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===sf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===io?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const xv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ev=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Vv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new xm(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new er({vertexShader:xv,fragmentShader:Ev,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ai(new zl(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class yv extends la{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,d=null,h=null,S=null;const m=typeof XRWebGLBinding<"u",Y=new Vv,p={},v=t.getContextAttributes();let x=null,_=null;const E=[],V=[],M=new Ut;let b=null;const g=new si;g.viewport=new Gt;const T=new si;T.viewport=new Gt;const C=[g,T],R=new KT;let O=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let q=E[K];return q===void 0&&(q=new wc,E[K]=q),q.getTargetRaySpace()},this.getControllerGrip=function(K){let q=E[K];return q===void 0&&(q=new wc,E[K]=q),q.getGripSpace()},this.getHand=function(K){let q=E[K];return q===void 0&&(q=new wc,E[K]=q),q.getHandSpace()};function B(K){const q=V.indexOf(K.inputSource);if(q===-1)return;const de=E[q];de!==void 0&&(de.update(K.inputSource,K.frame,c||a),de.dispatchEvent({type:K.type,data:K.inputSource}))}function H(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",G);for(let K=0;K<E.length;K++){const q=V[K];q!==null&&(V[K]=null,E[K].disconnect(q))}O=null,Z=null,Y.reset();for(const K in p)delete p[K];e.setRenderTarget(x),h=null,d=null,f=null,i=null,_=null,Ze.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(M.width,M.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f===null&&m&&(f=new XRWebGLBinding(i,t)),f},this.getFrame=function(){return S},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(x=e.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",H),i.addEventListener("inputsourceschange",G),v.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(M),m&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,ye=null,xe=null;v.depth&&(xe=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=v.stencil?so:ro,ye=v.stencil?io:os);const Fe={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(Fe),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new ls(d.textureWidth,d.textureHeight,{format:Yi,type:qi,depthTexture:new vm(d.textureWidth,d.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const de={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(i,t,de),i.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),_=new ls(h.framebufferWidth,h.framebufferHeight,{format:Yi,type:qi,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Ze.setContext(i),Ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return Y.getDepthTexture()};function G(K){for(let q=0;q<K.removed.length;q++){const de=K.removed[q],ye=V.indexOf(de);ye>=0&&(V[ye]=null,E[ye].disconnect(de))}for(let q=0;q<K.added.length;q++){const de=K.added[q];let ye=V.indexOf(de);if(ye===-1){for(let Fe=0;Fe<E.length;Fe++)if(Fe>=V.length){V.push(de),ye=Fe;break}else if(V[Fe]===null){V[Fe]=de,ye=Fe;break}if(ye===-1)break}const xe=E[ye];xe&&xe.connect(de)}}const N=new z,ne=new z;function P(K,q,de){N.setFromMatrixPosition(q.matrixWorld),ne.setFromMatrixPosition(de.matrixWorld);const ye=N.distanceTo(ne),xe=q.projectionMatrix.elements,Fe=de.projectionMatrix.elements,ft=xe[14]/(xe[10]-1),A=xe[14]/(xe[10]+1),ze=(xe[9]+1)/xe[5],Ce=(xe[9]-1)/xe[5],Ae=(xe[8]-1)/xe[0],I=(Fe[8]+1)/Fe[0],nt=ft*Ae,_e=ft*I,Ge=ye/(-Ae+I),Ke=Ge*-Ae;if(q.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Ke),K.translateZ(Ge),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),xe[10]===-1)K.projectionMatrix.copy(q.projectionMatrix),K.projectionMatrixInverse.copy(q.projectionMatrixInverse);else{const mt=ft+Ge,y=A+Ge,W=nt-Ke,D=_e+(ye-Ke),Q=ze*A/y*mt,J=Ce*A/y*mt;K.projectionMatrix.makePerspective(W,D,Q,J,mt,y),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function fe(K,q){q===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(q.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let q=K.near,de=K.far;Y.texture!==null&&(Y.depthNear>0&&(q=Y.depthNear),Y.depthFar>0&&(de=Y.depthFar)),R.near=T.near=g.near=q,R.far=T.far=g.far=de,(O!==R.near||Z!==R.far)&&(i.updateRenderState({depthNear:R.near,depthFar:R.far}),O=R.near,Z=R.far),R.layers.mask=K.layers.mask|6,g.layers.mask=R.layers.mask&3,T.layers.mask=R.layers.mask&5;const ye=K.parent,xe=R.cameras;fe(R,ye);for(let Fe=0;Fe<xe.length;Fe++)fe(xe[Fe],ye);xe.length===2?P(R,g,T):R.projectionMatrix.copy(g.projectionMatrix),Le(K,R,ye)};function Le(K,q,de){de===null?K.matrix.copy(q.matrixWorld):(K.matrix.copy(de.matrixWorld),K.matrix.invert(),K.matrix.multiply(q.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(q.projectionMatrix),K.projectionMatrixInverse.copy(q.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=af*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=K)},this.hasDepthSensing=function(){return Y.texture!==null},this.getDepthSensingMesh=function(){return Y.getMesh(R)},this.getCameraTexture=function(K){return p[K]};let tt=null;function He(K,q){if(u=q.getViewerPose(c||a),S=q,u!==null){const de=u.views;h!==null&&(e.setRenderTargetFramebuffer(_,h.framebuffer),e.setRenderTarget(_));let ye=!1;de.length!==R.cameras.length&&(R.cameras.length=0,ye=!0);for(let A=0;A<de.length;A++){const ze=de[A];let Ce=null;if(h!==null)Ce=h.getViewport(ze);else{const I=f.getViewSubImage(d,ze);Ce=I.viewport,A===0&&(e.setRenderTargetTextures(_,I.colorTexture,I.depthStencilTexture),e.setRenderTarget(_))}let Ae=C[A];Ae===void 0&&(Ae=new si,Ae.layers.enable(A),Ae.viewport=new Gt,C[A]=Ae),Ae.matrix.fromArray(ze.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(ze.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),A===0&&(R.matrix.copy(Ae.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),ye===!0&&R.cameras.push(Ae)}const xe=i.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&m){f=n.getBinding();const A=f.getDepthInformation(de[0]);A&&A.isValid&&A.texture&&Y.init(A,i.renderState)}if(xe&&xe.includes("camera-access")&&m){e.state.unbindTexture(),f=n.getBinding();for(let A=0;A<de.length;A++){const ze=de[A].camera;if(ze){let Ce=p[ze];Ce||(Ce=new xm,p[ze]=Ce);const Ae=f.getCameraImage(ze);Ce.sourceTexture=Ae}}}}for(let de=0;de<E.length;de++){const ye=V[de],xe=E[de];ye!==null&&xe!==void 0&&xe.update(ye,q,c||a)}tt&&tt(K,q),q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:q}),S=null}const Ze=new Em;Ze.setAnimationLoop(He),this.setAnimationLoop=function(K){tt=K},this.dispose=function(){}}}const wr=new ji,Av=new kt;function bv(r,e){function t(Y,p){Y.matrixAutoUpdate===!0&&Y.updateMatrix(),p.value.copy(Y.matrix)}function n(Y,p){p.color.getRGB(Y.fogColor.value,_m(r)),p.isFog?(Y.fogNear.value=p.near,Y.fogFar.value=p.far):p.isFogExp2&&(Y.fogDensity.value=p.density)}function i(Y,p,v,x,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(Y,p):p.isMeshToonMaterial?(s(Y,p),f(Y,p)):p.isMeshPhongMaterial?(s(Y,p),u(Y,p)):p.isMeshStandardMaterial?(s(Y,p),d(Y,p),p.isMeshPhysicalMaterial&&h(Y,p,_)):p.isMeshMatcapMaterial?(s(Y,p),S(Y,p)):p.isMeshDepthMaterial?s(Y,p):p.isMeshDistanceMaterial?(s(Y,p),m(Y,p)):p.isMeshNormalMaterial?s(Y,p):p.isLineBasicMaterial?(a(Y,p),p.isLineDashedMaterial&&o(Y,p)):p.isPointsMaterial?l(Y,p,v,x):p.isSpriteMaterial?c(Y,p):p.isShadowMaterial?(Y.color.value.copy(p.color),Y.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(Y,p){Y.opacity.value=p.opacity,p.color&&Y.diffuse.value.copy(p.color),p.emissive&&Y.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(Y.map.value=p.map,t(p.map,Y.mapTransform)),p.alphaMap&&(Y.alphaMap.value=p.alphaMap,t(p.alphaMap,Y.alphaMapTransform)),p.bumpMap&&(Y.bumpMap.value=p.bumpMap,t(p.bumpMap,Y.bumpMapTransform),Y.bumpScale.value=p.bumpScale,p.side===Mn&&(Y.bumpScale.value*=-1)),p.normalMap&&(Y.normalMap.value=p.normalMap,t(p.normalMap,Y.normalMapTransform),Y.normalScale.value.copy(p.normalScale),p.side===Mn&&Y.normalScale.value.negate()),p.displacementMap&&(Y.displacementMap.value=p.displacementMap,t(p.displacementMap,Y.displacementMapTransform),Y.displacementScale.value=p.displacementScale,Y.displacementBias.value=p.displacementBias),p.emissiveMap&&(Y.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,Y.emissiveMapTransform)),p.specularMap&&(Y.specularMap.value=p.specularMap,t(p.specularMap,Y.specularMapTransform)),p.alphaTest>0&&(Y.alphaTest.value=p.alphaTest);const v=e.get(p),x=v.envMap,_=v.envMapRotation;x&&(Y.envMap.value=x,wr.copy(_),wr.x*=-1,wr.y*=-1,wr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(wr.y*=-1,wr.z*=-1),Y.envMapRotation.value.setFromMatrix4(Av.makeRotationFromEuler(wr)),Y.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,Y.reflectivity.value=p.reflectivity,Y.ior.value=p.ior,Y.refractionRatio.value=p.refractionRatio),p.lightMap&&(Y.lightMap.value=p.lightMap,Y.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,Y.lightMapTransform)),p.aoMap&&(Y.aoMap.value=p.aoMap,Y.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,Y.aoMapTransform))}function a(Y,p){Y.diffuse.value.copy(p.color),Y.opacity.value=p.opacity,p.map&&(Y.map.value=p.map,t(p.map,Y.mapTransform))}function o(Y,p){Y.dashSize.value=p.dashSize,Y.totalSize.value=p.dashSize+p.gapSize,Y.scale.value=p.scale}function l(Y,p,v,x){Y.diffuse.value.copy(p.color),Y.opacity.value=p.opacity,Y.size.value=p.size*v,Y.scale.value=x*.5,p.map&&(Y.map.value=p.map,t(p.map,Y.uvTransform)),p.alphaMap&&(Y.alphaMap.value=p.alphaMap,t(p.alphaMap,Y.alphaMapTransform)),p.alphaTest>0&&(Y.alphaTest.value=p.alphaTest)}function c(Y,p){Y.diffuse.value.copy(p.color),Y.opacity.value=p.opacity,Y.rotation.value=p.rotation,p.map&&(Y.map.value=p.map,t(p.map,Y.mapTransform)),p.alphaMap&&(Y.alphaMap.value=p.alphaMap,t(p.alphaMap,Y.alphaMapTransform)),p.alphaTest>0&&(Y.alphaTest.value=p.alphaTest)}function u(Y,p){Y.specular.value.copy(p.specular),Y.shininess.value=Math.max(p.shininess,1e-4)}function f(Y,p){p.gradientMap&&(Y.gradientMap.value=p.gradientMap)}function d(Y,p){Y.metalness.value=p.metalness,p.metalnessMap&&(Y.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,Y.metalnessMapTransform)),Y.roughness.value=p.roughness,p.roughnessMap&&(Y.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,Y.roughnessMapTransform)),p.envMap&&(Y.envMapIntensity.value=p.envMapIntensity)}function h(Y,p,v){Y.ior.value=p.ior,p.sheen>0&&(Y.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),Y.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(Y.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,Y.sheenColorMapTransform)),p.sheenRoughnessMap&&(Y.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,Y.sheenRoughnessMapTransform))),p.clearcoat>0&&(Y.clearcoat.value=p.clearcoat,Y.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(Y.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,Y.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(Y.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,Y.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(Y.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,Y.clearcoatNormalMapTransform),Y.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Mn&&Y.clearcoatNormalScale.value.negate())),p.dispersion>0&&(Y.dispersion.value=p.dispersion),p.iridescence>0&&(Y.iridescence.value=p.iridescence,Y.iridescenceIOR.value=p.iridescenceIOR,Y.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],Y.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(Y.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,Y.iridescenceMapTransform)),p.iridescenceThicknessMap&&(Y.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,Y.iridescenceThicknessMapTransform))),p.transmission>0&&(Y.transmission.value=p.transmission,Y.transmissionSamplerMap.value=v.texture,Y.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(Y.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,Y.transmissionMapTransform)),Y.thickness.value=p.thickness,p.thicknessMap&&(Y.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,Y.thicknessMapTransform)),Y.attenuationDistance.value=p.attenuationDistance,Y.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(Y.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(Y.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,Y.anisotropyMapTransform))),Y.specularIntensity.value=p.specularIntensity,Y.specularColor.value.copy(p.specularColor),p.specularColorMap&&(Y.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,Y.specularColorMapTransform)),p.specularIntensityMap&&(Y.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,Y.specularIntensityMapTransform))}function S(Y,p){p.matcap&&(Y.matcap.value=p.matcap)}function m(Y,p){const v=e.get(p).light;Y.referencePosition.value.setFromMatrixPosition(v.matrixWorld),Y.nearDistance.value=v.shadow.camera.near,Y.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Pv(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,x){const _=x.program;n.uniformBlockBinding(v,_)}function c(v,x){let _=i[v.id];_===void 0&&(S(v),_=u(v),i[v.id]=_,v.addEventListener("dispose",Y));const E=x.program;n.updateUBOMapping(v,E);const V=e.render.frame;s[v.id]!==V&&(d(v),s[v.id]=V)}function u(v){const x=f();v.__bindingPointIndex=x;const _=r.createBuffer(),E=v.__size,V=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,_),r.bufferData(r.UNIFORM_BUFFER,E,V),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,_),_}function f(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const x=i[v.id],_=v.uniforms,E=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let V=0,M=_.length;V<M;V++){const b=Array.isArray(_[V])?_[V]:[_[V]];for(let g=0,T=b.length;g<T;g++){const C=b[g];if(h(C,V,g,E)===!0){const R=C.__offset,O=Array.isArray(C.value)?C.value:[C.value];let Z=0;for(let B=0;B<O.length;B++){const H=O[B],G=m(H);typeof H=="number"||typeof H=="boolean"?(C.__data[0]=H,r.bufferSubData(r.UNIFORM_BUFFER,R+Z,C.__data)):H.isMatrix3?(C.__data[0]=H.elements[0],C.__data[1]=H.elements[1],C.__data[2]=H.elements[2],C.__data[3]=0,C.__data[4]=H.elements[3],C.__data[5]=H.elements[4],C.__data[6]=H.elements[5],C.__data[7]=0,C.__data[8]=H.elements[6],C.__data[9]=H.elements[7],C.__data[10]=H.elements[8],C.__data[11]=0):(H.toArray(C.__data,Z),Z+=G.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,R,C.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function h(v,x,_,E){const V=v.value,M=x+"_"+_;if(E[M]===void 0)return typeof V=="number"||typeof V=="boolean"?E[M]=V:E[M]=V.clone(),!0;{const b=E[M];if(typeof V=="number"||typeof V=="boolean"){if(b!==V)return E[M]=V,!0}else if(b.equals(V)===!1)return b.copy(V),!0}return!1}function S(v){const x=v.uniforms;let _=0;const E=16;for(let M=0,b=x.length;M<b;M++){const g=Array.isArray(x[M])?x[M]:[x[M]];for(let T=0,C=g.length;T<C;T++){const R=g[T],O=Array.isArray(R.value)?R.value:[R.value];for(let Z=0,B=O.length;Z<B;Z++){const H=O[Z],G=m(H),N=_%E,ne=N%G.boundary,P=N+ne;_+=ne,P!==0&&E-P<G.storage&&(_+=E-P),R.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=_,_+=G.storage}}}const V=_%E;return V>0&&(_+=E-V),v.__size=_,v.__cache={},this}function m(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function Y(v){const x=v.target;x.removeEventListener("dispose",Y);const _=a.indexOf(x.__bindingPointIndex);a.splice(_,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function p(){for(const v in i)r.deleteBuffer(i[v]);a=[],i={},s={}}return{bind:l,update:c,dispose:p}}class Xv{constructor(e={}){const{canvas:t=mT(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=a;const S=new Uint32Array(4),m=new Int32Array(4);let Y=null,p=null;const v=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=gr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const _=this;let E=!1;this._outputColorSpace=ni;let V=0,M=0,b=null,g=-1,T=null;const C=new Gt,R=new Gt;let O=null;const Z=new gt(0);let B=0,H=t.width,G=t.height,N=1,ne=null,P=null;const fe=new Gt(0,0,H,G),Le=new Gt(0,0,H,G);let tt=!1;const He=new Um;let Ze=!1,K=!1;const q=new kt,de=new z,ye=new Gt,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Fe=!1;function ft(){return b===null?N:1}let A=n;function ze(U,w){return t.getContext(U,w)}try{const U={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Hf}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",Ye,!1),t.addEventListener("webglcontextcreationerror",te,!1),A===null){const w="webgl2";if(A=ze(w,U),A===null)throw ze(w)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(U){throw console.error("THREE.WebGLRenderer: "+U.message),U}let Ce,Ae,I,nt,_e,Ge,Ke,mt,y,W,D,Q,J,$,Te,se,Ee,he,re,ue,Ie,Ve,ce,Be;function X(){Ce=new GU(A),Ce.init(),Ve=new vv(A,Ce),Ae=new IU(A,Ce,e,Ve),I=new Uv(A,Ce),Ae.reversedDepthBuffer&&d&&I.buffers.depth.setReversed(!0),nt=new HU(A),_e=new cv,Ge=new Mv(A,Ce,I,_e,Ae,Ve,nt),Ke=new LU(_),mt=new FU(_),y=new JT(A),ce=new CU(A,y),W=new BU(A,y,nt,ce),D=new kU(A,W,y,nt),re=new zU(A,Ae,Ge),se=new wU(_e),Q=new lv(_,Ke,mt,Ce,Ae,ce,se),J=new bv(_,_e),$=new fv,Te=new Sv(Ce),he=new XU(_,Ke,mt,I,D,h,l),Ee=new gv(_,D,Ae),Be=new Pv(A,nt,Ae,I),ue=new RU(A,Ce,nt),Ie=new ZU(A,Ce,nt),nt.programs=Q.programs,_.capabilities=Ae,_.extensions=Ce,_.properties=_e,_.renderLists=$,_.shadowMap=Ee,_.state=I,_.info=nt}X();const ie=new yv(_,A);this.xr=ie,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const U=Ce.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){const U=Ce.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(U){U!==void 0&&(N=U,this.setSize(H,G,!1))},this.getSize=function(U){return U.set(H,G)},this.setSize=function(U,w,F=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=U,G=w,t.width=Math.floor(U*N),t.height=Math.floor(w*N),F===!0&&(t.style.width=U+"px",t.style.height=w+"px"),this.setViewport(0,0,U,w)},this.getDrawingBufferSize=function(U){return U.set(H*N,G*N).floor()},this.setDrawingBufferSize=function(U,w,F){H=U,G=w,N=F,t.width=Math.floor(U*F),t.height=Math.floor(w*F),this.setViewport(0,0,U,w)},this.getCurrentViewport=function(U){return U.copy(C)},this.getViewport=function(U){return U.copy(fe)},this.setViewport=function(U,w,F,k){U.isVector4?fe.set(U.x,U.y,U.z,U.w):fe.set(U,w,F,k),I.viewport(C.copy(fe).multiplyScalar(N).round())},this.getScissor=function(U){return U.copy(Le)},this.setScissor=function(U,w,F,k){U.isVector4?Le.set(U.x,U.y,U.z,U.w):Le.set(U,w,F,k),I.scissor(R.copy(Le).multiplyScalar(N).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(U){I.setScissorTest(tt=U)},this.setOpaqueSort=function(U){ne=U},this.setTransparentSort=function(U){P=U},this.getClearColor=function(U){return U.copy(he.getClearColor())},this.setClearColor=function(){he.setClearColor(...arguments)},this.getClearAlpha=function(){return he.getClearAlpha()},this.setClearAlpha=function(){he.setClearAlpha(...arguments)},this.clear=function(U=!0,w=!0,F=!0){let k=0;if(U){let L=!1;if(b!==null){const ee=b.texture.format;L=ee===Jf||ee===Qf||ee===Kf}if(L){const ee=b.texture.type,le=ee===qi||ee===os||ee===no||ee===io||ee===kf||ee===$f,Ue=he.getClearColor(),ge=he.getClearAlpha(),we=Ue.r,Xe=Ue.g,Pe=Ue.b;le?(S[0]=we,S[1]=Xe,S[2]=Pe,S[3]=ge,A.clearBufferuiv(A.COLOR,0,S)):(m[0]=we,m[1]=Xe,m[2]=Pe,m[3]=ge,A.clearBufferiv(A.COLOR,0,m))}else k|=A.COLOR_BUFFER_BIT}w&&(k|=A.DEPTH_BUFFER_BIT),F&&(k|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",Ye,!1),t.removeEventListener("webglcontextcreationerror",te,!1),he.dispose(),$.dispose(),Te.dispose(),_e.dispose(),Ke.dispose(),mt.dispose(),D.dispose(),ce.dispose(),Be.dispose(),Q.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",$e),ie.removeEventListener("sessionend",pe),Ne.stop()};function ae(U){U.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function Ye(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const U=nt.autoReset,w=Ee.enabled,F=Ee.autoUpdate,k=Ee.needsUpdate,L=Ee.type;X(),nt.autoReset=U,Ee.enabled=w,Ee.autoUpdate=F,Ee.needsUpdate=k,Ee.type=L}function te(U){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function j(U){const w=U.target;w.removeEventListener("dispose",j),We(w)}function We(U){De(U),_e.remove(U)}function De(U){const w=_e.get(U).programs;w!==void 0&&(w.forEach(function(F){Q.releaseProgram(F)}),U.isShaderMaterial&&Q.releaseShaderCache(U))}this.renderBufferDirect=function(U,w,F,k,L,ee){w===null&&(w=xe);const le=L.isMesh&&L.matrixWorld.determinant()<0,Ue=_t(U,w,F,k,L);I.setMaterial(k,le);let ge=F.index,we=1;if(k.wireframe===!0){if(ge=W.getWireframeAttribute(F),ge===void 0)return;we=2}const Xe=F.drawRange,Pe=F.attributes.position;let Qe=Xe.start*we,st=(Xe.start+Xe.count)*we;ee!==null&&(Qe=Math.max(Qe,ee.start*we),st=Math.min(st,(ee.start+ee.count)*we)),ge!==null?(Qe=Math.max(Qe,0),st=Math.min(st,ge.count)):Pe!=null&&(Qe=Math.max(Qe,0),st=Math.min(st,Pe.count));const Lt=st-Qe;if(Lt<0||Lt===1/0)return;ce.setup(L,k,Ue,F,ge);let At,vt=ue;if(ge!==null&&(At=y.get(ge),vt=Ie,vt.setIndex(At)),L.isMesh)k.wireframe===!0?(I.setLineWidth(k.wireframeLinewidth*ft()),vt.setMode(A.LINES)):vt.setMode(A.TRIANGLES);else if(L.isLine){let Oe=k.linewidth;Oe===void 0&&(Oe=1),I.setLineWidth(Oe*ft()),L.isLineSegments?vt.setMode(A.LINES):L.isLineLoop?vt.setMode(A.LINE_LOOP):vt.setMode(A.LINE_STRIP)}else L.isPoints?vt.setMode(A.POINTS):L.isSprite&&vt.setMode(A.TRIANGLES);if(L.isBatchedMesh)if(L._multiDrawInstances!==null)ao("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),vt.renderMultiDrawInstances(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount,L._multiDrawInstances);else if(Ce.get("WEBGL_multi_draw"))vt.renderMultiDraw(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount);else{const Oe=L._multiDrawStarts,Xt=L._multiDrawCounts,dt=L._multiDrawCount,wn=ge?y.get(ge).bytesPerElement:1,hs=_e.get(k).currentProgram.getUniforms();for(let Ln=0;Ln<dt;Ln++)hs.setValue(A,"_gl_DrawID",Ln),vt.render(Oe[Ln]/wn,Xt[Ln])}else if(L.isInstancedMesh)vt.renderInstances(Qe,Lt,L.count);else if(F.isInstancedBufferGeometry){const Oe=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,Xt=Math.min(F.instanceCount,Oe);vt.renderInstances(Qe,Lt,Xt)}else vt.render(Qe,Lt)};function ht(U,w,F){U.transparent===!0&&U.side===Zi&&U.forceSinglePass===!1?(U.side=Mn,U.needsUpdate=!0,Ot(U,w,F),U.side=xr,U.needsUpdate=!0,Ot(U,w,F),U.side=Zi):Ot(U,w,F)}this.compile=function(U,w,F=null){F===null&&(F=U),p=Te.get(F),p.init(w),x.push(p),F.traverseVisible(function(L){L.isLight&&L.layers.test(w.layers)&&(p.pushLight(L),L.castShadow&&p.pushShadow(L))}),U!==F&&U.traverseVisible(function(L){L.isLight&&L.layers.test(w.layers)&&(p.pushLight(L),L.castShadow&&p.pushShadow(L))}),p.setupLights();const k=new Set;return U.traverse(function(L){if(!(L.isMesh||L.isPoints||L.isLine||L.isSprite))return;const ee=L.material;if(ee)if(Array.isArray(ee))for(let le=0;le<ee.length;le++){const Ue=ee[le];ht(Ue,F,L),k.add(Ue)}else ht(ee,F,L),k.add(ee)}),p=x.pop(),k},this.compileAsync=function(U,w,F=null){const k=this.compile(U,w,F);return new Promise(L=>{function ee(){if(k.forEach(function(le){_e.get(le).currentProgram.isReady()&&k.delete(le)}),k.size===0){L(U);return}setTimeout(ee,10)}Ce.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let Se=null;function be(U){Se&&Se(U)}function $e(){Ne.stop()}function pe(){Ne.start()}const Ne=new Em;Ne.setAnimationLoop(be),typeof self<"u"&&Ne.setContext(self),this.setAnimationLoop=function(U){Se=U,ie.setAnimationLoop(U),U===null?Ne.stop():Ne.start()},ie.addEventListener("sessionstart",$e),ie.addEventListener("sessionend",pe),this.render=function(U,w){if(w!==void 0&&w.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),w.parent===null&&w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(w),w=ie.getCamera()),U.isScene===!0&&U.onBeforeRender(_,U,w,b),p=Te.get(U,x.length),p.init(w),x.push(p),q.multiplyMatrices(w.projectionMatrix,w.matrixWorldInverse),He.setFromProjectionMatrix(q,yi,w.reversedDepth),K=this.localClippingEnabled,Ze=se.init(this.clippingPlanes,K),Y=$.get(U,v.length),Y.init(),v.push(Y),ie.enabled===!0&&ie.isPresenting===!0){const ee=_.xr.getDepthSensingMesh();ee!==null&&Re(ee,w,-1/0,_.sortObjects)}Re(U,w,0,_.sortObjects),Y.finish(),_.sortObjects===!0&&Y.sort(ne,P),Fe=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,Fe&&he.addToRenderList(Y,U),this.info.render.frame++,Ze===!0&&se.beginShadows();const F=p.state.shadowsArray;Ee.render(F,U,w),Ze===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=Y.opaque,L=Y.transmissive;if(p.setupLights(),w.isArrayCamera){const ee=w.cameras;if(L.length>0)for(let le=0,Ue=ee.length;le<Ue;le++){const ge=ee[le];Nt(k,L,U,ge)}Fe&&he.render(U);for(let le=0,Ue=ee.length;le<Ue;le++){const ge=ee[le];ke(Y,U,ge,ge.viewport)}}else L.length>0&&Nt(k,L,U,w),Fe&&he.render(U),ke(Y,U,w);b!==null&&M===0&&(Ge.updateMultisampleRenderTarget(b),Ge.updateRenderTargetMipmap(b)),U.isScene===!0&&U.onAfterRender(_,U,w),ce.resetDefaultState(),g=-1,T=null,x.pop(),x.length>0?(p=x[x.length-1],Ze===!0&&se.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?Y=v[v.length-1]:Y=null};function Re(U,w,F,k){if(U.visible===!1)return;if(U.layers.test(w.layers)){if(U.isGroup)F=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(w);else if(U.isLight)p.pushLight(U),U.castShadow&&p.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||He.intersectsSprite(U)){k&&ye.setFromMatrixPosition(U.matrixWorld).applyMatrix4(q);const le=D.update(U),Ue=U.material;Ue.visible&&Y.push(U,le,Ue,F,ye.z,null)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||He.intersectsObject(U))){const le=D.update(U),Ue=U.material;if(k&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),ye.copy(U.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),ye.copy(le.boundingSphere.center)),ye.applyMatrix4(U.matrixWorld).applyMatrix4(q)),Array.isArray(Ue)){const ge=le.groups;for(let we=0,Xe=ge.length;we<Xe;we++){const Pe=ge[we],Qe=Ue[Pe.materialIndex];Qe&&Qe.visible&&Y.push(U,le,Qe,F,ye.z,Pe)}}else Ue.visible&&Y.push(U,le,Ue,F,ye.z,null)}}const ee=U.children;for(let le=0,Ue=ee.length;le<Ue;le++)Re(ee[le],w,F,k)}function ke(U,w,F,k){const L=U.opaque,ee=U.transmissive,le=U.transparent;p.setupLightsView(F),Ze===!0&&se.setGlobalState(_.clippingPlanes,F),k&&I.viewport(C.copy(k)),L.length>0&&qe(L,w,F),ee.length>0&&qe(ee,w,F),le.length>0&&qe(le,w,F),I.buffers.depth.setTest(!0),I.buffers.depth.setMask(!0),I.buffers.color.setMask(!0),I.setPolygonOffset(!1)}function Nt(U,w,F,k){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[k.id]===void 0&&(p.state.transmissionRenderTarget[k.id]=new ls(1,1,{generateMipmaps:!0,type:Ce.has("EXT_color_buffer_half_float")||Ce.has("EXT_color_buffer_float")?fo:qi,minFilter:$r,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Yt.workingColorSpace}));const ee=p.state.transmissionRenderTarget[k.id],le=k.viewport||C;ee.setSize(le.z*_.transmissionResolutionScale,le.w*_.transmissionResolutionScale);const Ue=_.getRenderTarget(),ge=_.getActiveCubeFace(),we=_.getActiveMipmapLevel();_.setRenderTarget(ee),_.getClearColor(Z),B=_.getClearAlpha(),B<1&&_.setClearColor(16777215,.5),_.clear(),Fe&&he.render(F);const Xe=_.toneMapping;_.toneMapping=gr;const Pe=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),p.setupLightsView(k),Ze===!0&&se.setGlobalState(_.clippingPlanes,k),qe(U,F,k),Ge.updateMultisampleRenderTarget(ee),Ge.updateRenderTargetMipmap(ee),Ce.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let st=0,Lt=w.length;st<Lt;st++){const At=w[st],vt=At.object,Oe=At.geometry,Xt=At.material,dt=At.group;if(Xt.side===Zi&&vt.layers.test(k.layers)){const wn=Xt.side;Xt.side=Mn,Xt.needsUpdate=!0,bt(vt,F,k,Oe,Xt,dt),Xt.side=wn,Xt.needsUpdate=!0,Qe=!0}}Qe===!0&&(Ge.updateMultisampleRenderTarget(ee),Ge.updateRenderTargetMipmap(ee))}_.setRenderTarget(Ue,ge,we),_.setClearColor(Z,B),Pe!==void 0&&(k.viewport=Pe),_.toneMapping=Xe}function qe(U,w,F){const k=w.isScene===!0?w.overrideMaterial:null;for(let L=0,ee=U.length;L<ee;L++){const le=U[L],Ue=le.object,ge=le.geometry,we=le.group;let Xe=le.material;Xe.allowOverride===!0&&k!==null&&(Xe=k),Ue.layers.test(F.layers)&&bt(Ue,w,F,ge,Xe,we)}}function bt(U,w,F,k,L,ee){U.onBeforeRender(_,w,F,k,L,ee),U.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),L.onBeforeRender(_,w,F,k,U,ee),L.transparent===!0&&L.side===Zi&&L.forceSinglePass===!1?(L.side=Mn,L.needsUpdate=!0,_.renderBufferDirect(F,w,k,L,U,ee),L.side=xr,L.needsUpdate=!0,_.renderBufferDirect(F,w,k,L,U,ee),L.side=Zi):_.renderBufferDirect(F,w,k,L,U,ee),U.onAfterRender(_,w,F,k,L,ee)}function Ot(U,w,F){w.isScene!==!0&&(w=xe);const k=_e.get(U),L=p.state.lights,ee=p.state.shadowsArray,le=L.state.version,Ue=Q.getParameters(U,L.state,ee,w,F),ge=Q.getProgramCacheKey(Ue);let we=k.programs;k.environment=U.isMeshStandardMaterial?w.environment:null,k.fog=w.fog,k.envMap=(U.isMeshStandardMaterial?mt:Ke).get(U.envMap||k.environment),k.envMapRotation=k.environment!==null&&U.envMap===null?w.environmentRotation:U.envMapRotation,we===void 0&&(U.addEventListener("dispose",j),we=new Map,k.programs=we);let Xe=we.get(ge);if(Xe!==void 0){if(k.currentProgram===Xe&&k.lightsStateVersion===le)return Mt(U,Ue),Xe}else Ue.uniforms=Q.getUniforms(U),U.onBeforeCompile(Ue,_),Xe=Q.acquireProgram(Ue,ge),we.set(ge,Xe),k.uniforms=Ue.uniforms;const Pe=k.uniforms;return(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(Pe.clippingPlanes=se.uniform),Mt(U,Ue),k.needsLights=yt(U),k.lightsStateVersion=le,k.needsLights&&(Pe.ambientLightColor.value=L.state.ambient,Pe.lightProbe.value=L.state.probe,Pe.directionalLights.value=L.state.directional,Pe.directionalLightShadows.value=L.state.directionalShadow,Pe.spotLights.value=L.state.spot,Pe.spotLightShadows.value=L.state.spotShadow,Pe.rectAreaLights.value=L.state.rectArea,Pe.ltc_1.value=L.state.rectAreaLTC1,Pe.ltc_2.value=L.state.rectAreaLTC2,Pe.pointLights.value=L.state.point,Pe.pointLightShadows.value=L.state.pointShadow,Pe.hemisphereLights.value=L.state.hemi,Pe.directionalShadowMap.value=L.state.directionalShadowMap,Pe.directionalShadowMatrix.value=L.state.directionalShadowMatrix,Pe.spotShadowMap.value=L.state.spotShadowMap,Pe.spotLightMatrix.value=L.state.spotLightMatrix,Pe.spotLightMap.value=L.state.spotLightMap,Pe.pointShadowMap.value=L.state.pointShadowMap,Pe.pointShadowMatrix.value=L.state.pointShadowMatrix),k.currentProgram=Xe,k.uniformsList=null,Xe}function Vt(U){if(U.uniformsList===null){const w=U.currentProgram.getUniforms();U.uniformsList=vl.seqWithValue(w.seq,U.uniforms)}return U.uniformsList}function Mt(U,w){const F=_e.get(U);F.outputColorSpace=w.outputColorSpace,F.batching=w.batching,F.batchingColor=w.batchingColor,F.instancing=w.instancing,F.instancingColor=w.instancingColor,F.instancingMorph=w.instancingMorph,F.skinning=w.skinning,F.morphTargets=w.morphTargets,F.morphNormals=w.morphNormals,F.morphColors=w.morphColors,F.morphTargetsCount=w.morphTargetsCount,F.numClippingPlanes=w.numClippingPlanes,F.numIntersection=w.numClipIntersection,F.vertexAlphas=w.vertexAlphas,F.vertexTangents=w.vertexTangents,F.toneMapping=w.toneMapping}function _t(U,w,F,k,L){w.isScene!==!0&&(w=xe),Ge.resetTextureUnits();const ee=w.fog,le=k.isMeshStandardMaterial?w.environment:null,Ue=b===null?_.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:sa,ge=(k.isMeshStandardMaterial?mt:Ke).get(k.envMap||le),we=k.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Xe=!!F.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Pe=!!F.morphAttributes.position,Qe=!!F.morphAttributes.normal,st=!!F.morphAttributes.color;let Lt=gr;k.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Lt=_.toneMapping);const At=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,vt=At!==void 0?At.length:0,Oe=_e.get(k),Xt=p.state.lights;if(Ze===!0&&(K===!0||U!==T)){const Yn=U===T&&k.id===g;se.setState(k,U,Yn)}let dt=!1;k.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==Xt.state.version||Oe.outputColorSpace!==Ue||L.isBatchedMesh&&Oe.batching===!1||!L.isBatchedMesh&&Oe.batching===!0||L.isBatchedMesh&&Oe.batchingColor===!0&&L.colorTexture===null||L.isBatchedMesh&&Oe.batchingColor===!1&&L.colorTexture!==null||L.isInstancedMesh&&Oe.instancing===!1||!L.isInstancedMesh&&Oe.instancing===!0||L.isSkinnedMesh&&Oe.skinning===!1||!L.isSkinnedMesh&&Oe.skinning===!0||L.isInstancedMesh&&Oe.instancingColor===!0&&L.instanceColor===null||L.isInstancedMesh&&Oe.instancingColor===!1&&L.instanceColor!==null||L.isInstancedMesh&&Oe.instancingMorph===!0&&L.morphTexture===null||L.isInstancedMesh&&Oe.instancingMorph===!1&&L.morphTexture!==null||Oe.envMap!==ge||k.fog===!0&&Oe.fog!==ee||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==se.numPlanes||Oe.numIntersection!==se.numIntersection)||Oe.vertexAlphas!==we||Oe.vertexTangents!==Xe||Oe.morphTargets!==Pe||Oe.morphNormals!==Qe||Oe.morphColors!==st||Oe.toneMapping!==Lt||Oe.morphTargetsCount!==vt)&&(dt=!0):(dt=!0,Oe.__version=k.version);let wn=Oe.currentProgram;dt===!0&&(wn=Ot(k,w,L));let hs=!1,Ln=!1,fa=!1;const Ct=wn.getUniforms(),qn=Oe.uniforms;if(I.useProgram(wn.program)&&(hs=!0,Ln=!0,fa=!0),k.id!==g&&(g=k.id,Ln=!0),hs||T!==U){I.buffers.depth.getReversed()&&U.reversedDepth!==!0&&(U._reversedDepth=!0,U.updateProjectionMatrix()),Ct.setValue(A,"projectionMatrix",U.projectionMatrix),Ct.setValue(A,"viewMatrix",U.matrixWorldInverse);const vn=Ct.map.cameraPosition;vn!==void 0&&vn.setValue(A,de.setFromMatrixPosition(U.matrixWorld)),Ae.logarithmicDepthBuffer&&Ct.setValue(A,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Ct.setValue(A,"isOrthographic",U.isOrthographicCamera===!0),T!==U&&(T=U,Ln=!0,fa=!0)}if(L.isSkinnedMesh){Ct.setOptional(A,L,"bindMatrix"),Ct.setOptional(A,L,"bindMatrixInverse");const Yn=L.skeleton;Yn&&(Yn.boneTexture===null&&Yn.computeBoneTexture(),Ct.setValue(A,"boneTexture",Yn.boneTexture,Ge))}L.isBatchedMesh&&(Ct.setOptional(A,L,"batchingTexture"),Ct.setValue(A,"batchingTexture",L._matricesTexture,Ge),Ct.setOptional(A,L,"batchingIdTexture"),Ct.setValue(A,"batchingIdTexture",L._indirectTexture,Ge),Ct.setOptional(A,L,"batchingColorTexture"),L._colorsTexture!==null&&Ct.setValue(A,"batchingColorTexture",L._colorsTexture,Ge));const jn=F.morphAttributes;if((jn.position!==void 0||jn.normal!==void 0||jn.color!==void 0)&&re.update(L,F,wn),(Ln||Oe.receiveShadow!==L.receiveShadow)&&(Oe.receiveShadow=L.receiveShadow,Ct.setValue(A,"receiveShadow",L.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(qn.envMap.value=ge,qn.flipEnvMap.value=ge.isCubeTexture&&ge.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&w.environment!==null&&(qn.envMapIntensity.value=w.environmentIntensity),Ln&&(Ct.setValue(A,"toneMappingExposure",_.toneMappingExposure),Oe.needsLights&&In(qn,fa),ee&&k.fog===!0&&J.refreshFogUniforms(qn,ee),J.refreshMaterialUniforms(qn,k,N,G,p.state.transmissionRenderTarget[U.id]),vl.upload(A,Vt(Oe),qn,Ge)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(vl.upload(A,Vt(Oe),qn,Ge),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Ct.setValue(A,"center",L.center),Ct.setValue(A,"modelViewMatrix",L.modelViewMatrix),Ct.setValue(A,"normalMatrix",L.normalMatrix),Ct.setValue(A,"modelMatrix",L.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Yn=k.uniformsGroups;for(let vn=0,Jl=Yn.length;vn<Jl;vn++){const yr=Yn[vn];Be.update(yr,wn),Be.bind(yr,wn)}}return wn}function In(U,w){U.ambientLightColor.needsUpdate=w,U.lightProbe.needsUpdate=w,U.directionalLights.needsUpdate=w,U.directionalLightShadows.needsUpdate=w,U.pointLights.needsUpdate=w,U.pointLightShadows.needsUpdate=w,U.spotLights.needsUpdate=w,U.spotLightShadows.needsUpdate=w,U.rectAreaLights.needsUpdate=w,U.hemisphereLights.needsUpdate=w}function yt(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(U,w,F){const k=_e.get(U);k.__autoAllocateDepthBuffer=U.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),_e.get(U.texture).__webglTexture=w,_e.get(U.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:F,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(U,w){const F=_e.get(U);F.__webglFramebuffer=w,F.__useDefaultFramebuffer=w===void 0};const pn=A.createFramebuffer();this.setRenderTarget=function(U,w=0,F=0){b=U,V=w,M=F;let k=!0,L=null,ee=!1,le=!1;if(U){const ge=_e.get(U);if(ge.__useDefaultFramebuffer!==void 0)I.bindFramebuffer(A.FRAMEBUFFER,null),k=!1;else if(ge.__webglFramebuffer===void 0)Ge.setupRenderTarget(U);else if(ge.__hasExternalTextures)Ge.rebindTextures(U,_e.get(U.texture).__webglTexture,_e.get(U.depthTexture).__webglTexture);else if(U.depthBuffer){const Pe=U.depthTexture;if(ge.__boundDepthTexture!==Pe){if(Pe!==null&&_e.has(Pe)&&(U.width!==Pe.image.width||U.height!==Pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ge.setupDepthRenderbuffer(U)}}const we=U.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(le=!0);const Xe=_e.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(Array.isArray(Xe[w])?L=Xe[w][F]:L=Xe[w],ee=!0):U.samples>0&&Ge.useMultisampledRTT(U)===!1?L=_e.get(U).__webglMultisampledFramebuffer:Array.isArray(Xe)?L=Xe[F]:L=Xe,C.copy(U.viewport),R.copy(U.scissor),O=U.scissorTest}else C.copy(fe).multiplyScalar(N).floor(),R.copy(Le).multiplyScalar(N).floor(),O=tt;if(F!==0&&(L=pn),I.bindFramebuffer(A.FRAMEBUFFER,L)&&k&&I.drawBuffers(U,L),I.viewport(C),I.scissor(R),I.setScissorTest(O),ee){const ge=_e.get(U.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+w,ge.__webglTexture,F)}else if(le){const ge=w;for(let we=0;we<U.textures.length;we++){const Xe=_e.get(U.textures[we]);A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+we,Xe.__webglTexture,F,ge)}}else if(U!==null&&F!==0){const ge=_e.get(U.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,ge.__webglTexture,F)}g=-1},this.readRenderTargetPixels=function(U,w,F,k,L,ee,le,Ue=0){if(!(U&&U.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=_e.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&le!==void 0&&(ge=ge[le]),ge){I.bindFramebuffer(A.FRAMEBUFFER,ge);try{const we=U.textures[Ue],Xe=we.format,Pe=we.type;if(!Ae.textureFormatReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ae.textureTypeReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}w>=0&&w<=U.width-k&&F>=0&&F<=U.height-L&&(U.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+Ue),A.readPixels(w,F,k,L,Ve.convert(Xe),Ve.convert(Pe),ee))}finally{const we=b!==null?_e.get(b).__webglFramebuffer:null;I.bindFramebuffer(A.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(U,w,F,k,L,ee,le,Ue=0){if(!(U&&U.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=_e.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&le!==void 0&&(ge=ge[le]),ge)if(w>=0&&w<=U.width-k&&F>=0&&F<=U.height-L){I.bindFramebuffer(A.FRAMEBUFFER,ge);const we=U.textures[Ue],Xe=we.format,Pe=we.type;if(!Ae.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ae.textureTypeReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qe=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,Qe),A.bufferData(A.PIXEL_PACK_BUFFER,ee.byteLength,A.STREAM_READ),U.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+Ue),A.readPixels(w,F,k,L,Ve.convert(Xe),Ve.convert(Pe),0);const st=b!==null?_e.get(b).__webglFramebuffer:null;I.bindFramebuffer(A.FRAMEBUFFER,st);const Lt=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await ST(A,Lt,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,Qe),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,ee),A.deleteBuffer(Qe),A.deleteSync(Lt),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(U,w=null,F=0){const k=Math.pow(2,-F),L=Math.floor(U.image.width*k),ee=Math.floor(U.image.height*k),le=w!==null?w.x:0,Ue=w!==null?w.y:0;Ge.setTexture2D(U,0),A.copyTexSubImage2D(A.TEXTURE_2D,F,0,0,le,Ue,L,ee),I.unbindTexture()};const Jn=A.createFramebuffer(),$t=A.createFramebuffer();this.copyTextureToTexture=function(U,w,F=null,k=null,L=0,ee=null){ee===null&&(L!==0?(ao("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ee=L,L=0):ee=0);let le,Ue,ge,we,Xe,Pe,Qe,st,Lt;const At=U.isCompressedTexture?U.mipmaps[ee]:U.image;if(F!==null)le=F.max.x-F.min.x,Ue=F.max.y-F.min.y,ge=F.isBox3?F.max.z-F.min.z:1,we=F.min.x,Xe=F.min.y,Pe=F.isBox3?F.min.z:0;else{const jn=Math.pow(2,-L);le=Math.floor(At.width*jn),Ue=Math.floor(At.height*jn),U.isDataArrayTexture?ge=At.depth:U.isData3DTexture?ge=Math.floor(At.depth*jn):ge=1,we=0,Xe=0,Pe=0}k!==null?(Qe=k.x,st=k.y,Lt=k.z):(Qe=0,st=0,Lt=0);const vt=Ve.convert(w.format),Oe=Ve.convert(w.type);let Xt;w.isData3DTexture?(Ge.setTexture3D(w,0),Xt=A.TEXTURE_3D):w.isDataArrayTexture||w.isCompressedArrayTexture?(Ge.setTexture2DArray(w,0),Xt=A.TEXTURE_2D_ARRAY):(Ge.setTexture2D(w,0),Xt=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,w.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,w.unpackAlignment);const dt=A.getParameter(A.UNPACK_ROW_LENGTH),wn=A.getParameter(A.UNPACK_IMAGE_HEIGHT),hs=A.getParameter(A.UNPACK_SKIP_PIXELS),Ln=A.getParameter(A.UNPACK_SKIP_ROWS),fa=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,At.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,At.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,we),A.pixelStorei(A.UNPACK_SKIP_ROWS,Xe),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Pe);const Ct=U.isDataArrayTexture||U.isData3DTexture,qn=w.isDataArrayTexture||w.isData3DTexture;if(U.isDepthTexture){const jn=_e.get(U),Yn=_e.get(w),vn=_e.get(jn.__renderTarget),Jl=_e.get(Yn.__renderTarget);I.bindFramebuffer(A.READ_FRAMEBUFFER,vn.__webglFramebuffer),I.bindFramebuffer(A.DRAW_FRAMEBUFFER,Jl.__webglFramebuffer);for(let yr=0;yr<ge;yr++)Ct&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,_e.get(U).__webglTexture,L,Pe+yr),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,_e.get(w).__webglTexture,ee,Lt+yr)),A.blitFramebuffer(we,Xe,le,Ue,Qe,st,le,Ue,A.DEPTH_BUFFER_BIT,A.NEAREST);I.bindFramebuffer(A.READ_FRAMEBUFFER,null),I.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(L!==0||U.isRenderTargetTexture||_e.has(U)){const jn=_e.get(U),Yn=_e.get(w);I.bindFramebuffer(A.READ_FRAMEBUFFER,Jn),I.bindFramebuffer(A.DRAW_FRAMEBUFFER,$t);for(let vn=0;vn<ge;vn++)Ct?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,jn.__webglTexture,L,Pe+vn):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,jn.__webglTexture,L),qn?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Yn.__webglTexture,ee,Lt+vn):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Yn.__webglTexture,ee),L!==0?A.blitFramebuffer(we,Xe,le,Ue,Qe,st,le,Ue,A.COLOR_BUFFER_BIT,A.NEAREST):qn?A.copyTexSubImage3D(Xt,ee,Qe,st,Lt+vn,we,Xe,le,Ue):A.copyTexSubImage2D(Xt,ee,Qe,st,we,Xe,le,Ue);I.bindFramebuffer(A.READ_FRAMEBUFFER,null),I.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else qn?U.isDataTexture||U.isData3DTexture?A.texSubImage3D(Xt,ee,Qe,st,Lt,le,Ue,ge,vt,Oe,At.data):w.isCompressedArrayTexture?A.compressedTexSubImage3D(Xt,ee,Qe,st,Lt,le,Ue,ge,vt,At.data):A.texSubImage3D(Xt,ee,Qe,st,Lt,le,Ue,ge,vt,Oe,At):U.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,ee,Qe,st,le,Ue,vt,Oe,At.data):U.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,ee,Qe,st,At.width,At.height,vt,At.data):A.texSubImage2D(A.TEXTURE_2D,ee,Qe,st,le,Ue,vt,Oe,At);A.pixelStorei(A.UNPACK_ROW_LENGTH,dt),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,wn),A.pixelStorei(A.UNPACK_SKIP_PIXELS,hs),A.pixelStorei(A.UNPACK_SKIP_ROWS,Ln),A.pixelStorei(A.UNPACK_SKIP_IMAGES,fa),ee===0&&w.generateMipmaps&&A.generateMipmap(Xt),I.unbindTexture()},this.initRenderTarget=function(U){_e.get(U).__webglFramebuffer===void 0&&Ge.setupRenderTarget(U)},this.initTexture=function(U){U.isCubeTexture?Ge.setTextureCube(U,0):U.isData3DTexture?Ge.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?Ge.setTexture2DArray(U,0):Ge.setTexture2D(U,0),I.unbindTexture()},this.resetState=function(){V=0,M=0,b=null,I.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Yt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Yt._getUnpackColorSpace()}}class $l extends Ai{constructor(){const e=$l.SkyShader,t=new er({name:e.name,uniforms:Tm.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:Mn,depthWrite:!1});super(new ca(1,1,1),t),this.isSky=!0}}$l.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new z},up:{value:new z(0,1,0)}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calculation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorption + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};const rl=cm.degToRad,Wa=cm.clamp;function Hd(r,e,t){let n=(e-r)%(Math.PI*2);return n>Math.PI&&(n-=Math.PI*2),n<-Math.PI&&(n+=Math.PI*2),r+n*t}function zd(r,e,t){const i=new Float32Array(r*3);for(let o=0;o<r;o++){let l=0,c=-1,u=0,f=2;for(;f>1||c<.015;)l=Math.random()*2-1,c=Math.random()*2-1,u=Math.random()*2-1,f=l*l+c*c+u*u;const d=Math.sqrt(f)||1;i[o*3]=l/d*4e5,i[o*3+1]=c/d*4e5,i[o*3+2]=u/d*4e5}const s=new tr;s.setAttribute("position",new Si(i,3));const a=new Mm({color:t,size:e,sizeAttenuation:!1,transparent:!0,opacity:0,depthWrite:!1,blending:Su});return new HT(s,a)}class Cv{constructor(e){this.canvas=e,this.renderer=new Xv({canvas:e,antialias:!1,powerPreference:"high-performance"}),this.renderer.toneMapping=qY,this.renderer.toneMappingExposure=.5,this.camera=new si(62,1,100,2e6),this.camera.position.set(0,80,0),this.sky.scale.setScalar(45e4),this.scene.add(this.sky),this.starsSmall=zd(1100,1.5,11451903),this.starsBig=zd(220,2.6,15134207),this.scene.add(this.starsSmall,this.starsBig);const t=e.parentElement??document.body;new ResizeObserver(()=>this.resize()).observe(t),this.resize(),requestAnimationFrame(this.tick)}canvas;renderer;scene=new FT;camera;sky=new $l;sunDir=new z;starsSmall;starsBig;targetElev=NaN;targetTheta=NaN;elev=NaN;theta=NaN;needsRender=!0;ready=!1;setSun(e,t){this.targetElev=e,this.targetTheta=rl(t),isNaN(this.elev)&&(this.elev=this.targetElev,this.theta=this.targetTheta),this.needsRender=!0}apply(){const e=this.elev;this.sunDir.setFromSphericalCoords(1,rl(90-e),this.theta);const t=this.sky.material.uniforms;t.sunPosition.value.copy(this.sunDir);const n=Wa((e-10)/25,0,1),i=this.theta+n*rl(60),s=rl(15+n*22);this.camera.lookAt(Math.sin(i)*2e3,this.camera.position.y+2e3*Math.tan(s),Math.cos(i)*2e3);const a=Wa(1-Math.abs(e)/12,0,1);t.rayleigh.value=1.2+a*2.5,t.mieCoefficient.value=.0022+a*.0058,t.mieDirectionalG.value=.85,t.turbidity.value=2+a*6;const o=Wa((e+9)/18,0,1),l=Wa((e-12)/30,0,1);this.renderer.toneMappingExposure=.07+Math.pow(o,1.25)*.48-l*.12;const c=Wa((-e-3)/9,0,1);this.starsSmall.material.opacity=c*.75,this.starsBig.material.opacity=c*.95}tick=()=>{if(!isNaN(this.elev)){const e=this.targetElev-this.elev,t=Math.abs(Hd(this.theta,this.targetTheta,1)-this.theta);(Math.abs(e)>.002||t>4e-4)&&(this.elev+=e*.14,this.theta=Hd(this.theta,this.targetTheta,.14),this.needsRender=!0),this.starsBig.material.opacity>.01&&(this.starsSmall.rotation.y+=12e-5,this.starsBig.rotation.y+=12e-5,this.needsRender=!0),this.needsRender&&(this.apply(),this.renderer.render(this.scene,this.camera),this.needsRender=!1,this.ready||(this.ready=!0,this.canvas.classList.add("ready")))}requestAnimationFrame(this.tick)};resize(){const e=this.canvas.parentElement??document.body,t=e.clientWidth||1,n=e.clientHeight||1;this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.75)),this.renderer.setSize(t,n,!1),this.camera.aspect=t/n,this.camera.fov=t<n?78:62,this.camera.updateProjectionMatrix(),this.needsRender=!0}}const kd=new Map;function Rv(r){let e=kd.get(r);return e||(e=new Intl.DateTimeFormat("en-US",{timeZone:r,hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}),kd.set(r,e)),e}function eh(r,e){const t={};for(const n of Rv(r).formatToParts(e))n.type!=="literal"&&(t[n.type]=Number(n.value));return t}function cf(r,e){const t=eh(r,e);return Date.UTC(t.year,t.month-1,t.day,t.hour,t.minute,t.second)-Math.floor(e.getTime()/1e3)*1e3}function Kl(r,e,t,n,i=0){const s=Date.UTC(e,t-1,n)+i*36e5;let a=cf(r,new Date(s));return a=cf(r,new Date(s-a)),new Date(s-a)}function Ql(r,e){const t=eh(r,e);return{y:t.year,m:t.month,d:t.day}}function So(r,e){const t=eh(r,e);return t.hour+t.minute/60+t.second/3600}function Iv(r,e){const t=Math.round(cf(r,e)/6e4),n=t<0?"−":"+",i=Math.abs(t),s=String(Math.floor(i/60)).padStart(2,"0"),a=String(i%60).padStart(2,"0");return`UTC${n}${s}:${a}`}function uf(r,e){const t=new Date(Date.UTC(r.y,r.m-1,r.d+e));return{y:t.getUTCFullYear(),m:t.getUTCMonth()+1,d:t.getUTCDate()}}function th(r,e){return r.y===e.y&&r.m===e.m&&r.d===e.d}const vi={night:"#070b1d",astro:"#101a3e",nautical:"#1e2d63",civil:"#48549b",day:"#f2c14e"},is="#ff9233",oo="#6386ff",Rs={night:"Night",astro:"Astronomical twilight",nautical:"Nautical twilight",civil:"Civil twilight",day:"Daylight"};function ff(r,e,t,n){const i=Kl(n,t.y,t.m,t.d,12),s={timezoneId:n},a=E_(r,e,i,s),o=a.twilight,l=p=>p&&!isNaN(p.getTime())?So(n,p):null,u=[{d:o?.astronomicalDawn??null,before:"night",after:"astro"},{d:o?.nauticalDawn??null,before:"astro",after:"nautical"},{d:o?.civilDawn??null,before:"nautical",after:"civil"},{d:a.sunrise,before:"civil",after:"day"},{d:a.sunset,before:"day",after:"civil"},{d:o?.civilDusk??null,before:"civil",after:"nautical"},{d:o?.nauticalDusk??null,before:"nautical",after:"astro"},{d:o?.astronomicalDusk??null,before:"astro",after:"night"}].map(p=>({t:l(p.d),before:p.before,after:p.after})).filter(p=>p.t!==null).sort((p,v)=>p.t-v.t),d=Zf(r,e,a.solarNoon??i,s)?.elevation??-90,h=[];if(u.length===0){const p=d>-.833?"day":d>-6?"civil":d>-12?"nautical":d>-18?"astro":"night";h.push({phase:p,start:0,end:24})}else{let p=u[0].before,v=0;for(const x of u)x.t>v&&h.push({phase:p,start:v,end:x.t}),p=x.after,v=Math.max(v,x.t);v<24&&h.push({phase:p,start:v,end:24})}const S=p=>({start:l(p?.start),end:l(p?.end)}),m=!a.sunrise&&!a.sunset?d>-.833?"day":"night":null,Y=a.sunrise&&a.sunset?a.sunset.getTime()-a.sunrise.getTime():m==="day"?864e5:m==="night"?0:null;return{ymd:t,tz:n,lat:r,lng:e,sunrise:a.sunrise,sunset:a.sunset,solarNoon:a.solarNoon,twilight:o,sunriseH:l(a.sunrise),sunsetH:l(a.sunset),noonH:l(a.solarNoon),segments:h,golden:{morning:S(o?.goldenHour?.morning),evening:S(o?.goldenHour?.evening)},blue:{morning:S(o?.blueHour?.morning),evening:S(o?.blueHour?.evening)},dayLengthMs:Y,polar:m,noonElevation:d}}const sl=(r,e)=>e.start!==null&&e.end!==null&&e.start<=e.end&&r>=e.start&&r<=e.end;function Pm(r,e){if(sl(e,r.golden.morning)||sl(e,r.golden.evening))return{id:"golden",label:"Golden hour",color:is};if(sl(e,r.blue.morning)||sl(e,r.blue.evening))return{id:"blue",label:"Blue hour",color:oo};const n=(r.segments.find(s=>e>=s.start&&e<s.end)??r.segments[r.segments.length-1])?.phase??"night",i=n==="day"?is:n==="night"?"#8d9bce":wv(vi[n]);return{id:n,label:Rs[n],color:i}}function wv(r){const e=parseInt(r.slice(1),16),t=a=>Math.min(255,Math.round(a+(255-a)*.45)),n=t(e>>16&255),i=t(e>>8&255),s=t(e&255);return`rgb(${n}, ${i}, ${s})`}const Ui=180,Ps=128,Ua=30,Lv=152,Dv=7,Zc=104;function _i(r,e){const t=(e-12)/24*Math.PI*2;return[Ui+r*Math.sin(t),Ui-r*Math.cos(t)]}function Xm(r,e,t,n,i,s=1){if(t-e>=23.999)return`<circle cx="${Ui}" cy="${Ui}" r="${r}" fill="none" stroke="${n}" stroke-width="${i}" opacity="${s}"/>`;const[a,o]=_i(r,e),[l,c]=_i(r,t),u=t-e>12?1:0;return`<path d="M ${a.toFixed(2)} ${o.toFixed(2)} A ${r} ${r} 0 ${u} 1 ${l.toFixed(2)} ${c.toFixed(2)}" fill="none" stroke="${n}" stroke-width="${i}" opacity="${s}"/>`}function al(r,e){return r.start===null||r.end===null||r.end<=r.start?"":Xm(Lv,r.start,r.end,e,Dv,.95)}function Nv(r,e,t){const n=[];n.push(`<defs>
        <filter id="dialGlow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="5" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
    </defs>`);for(const l of e.segments)n.push(Xm(Ps,l.start,l.end,vi[l.phase],Ua));for(const l of[e.sunriseH,e.sunsetH]){if(l===null)continue;const[c,u]=_i(Ps-Ua/2,l),[f,d]=_i(Ps+Ua/2,l);n.push(`<line x1="${c}" y1="${u}" x2="${f}" y2="${d}" stroke="rgba(255,255,255,0.9)" stroke-width="1.4"/>`)}n.push(al(e.blue.morning,oo)),n.push(al(e.blue.evening,oo)),n.push(al(e.golden.morning,is)),n.push(al(e.golden.evening,is));for(let l=0;l<24;l++){const c=l%6===0,[u,f]=_i(Zc,l),[d,h]=_i(Zc-(c?9:5),l);if(n.push(`<line x1="${u.toFixed(1)}" y1="${f.toFixed(1)}" x2="${d.toFixed(1)}" y2="${h.toFixed(1)}" stroke="rgba(244,241,234,${c?.5:.18})" stroke-width="${c?1.5:1}"/>`),c){const[S,m]=_i(Zc-22,l);n.push(`<text x="${S.toFixed(1)}" y="${m.toFixed(1)}" text-anchor="middle" dominant-baseline="central" fill="rgba(244,241,234,0.45)" font-size="11" font-family="inherit">${String(l).padStart(2,"0")}</text>`)}}if(t.nowH!==null){const[l,c]=_i(Ps+Ua/2+11,t.nowH);n.push(`<circle cx="${l.toFixed(1)}" cy="${c.toFixed(1)}" r="3" fill="#fff" opacity="0.9"><title>now</title></circle>`)}const[i,s]=_i(Ps-Ua/2-12,t.hours),[a,o]=_i(Ps,t.hours);n.push(`<line x1="${Ui}" y1="${Ui}" x2="${i.toFixed(1)}" y2="${s.toFixed(1)}" stroke="rgba(242,193,78,0.65)" stroke-width="1.6"/>`),n.push(`<circle cx="${a.toFixed(1)}" cy="${o.toFixed(1)}" r="8" fill="#f2c14e" filter="url(#dialGlow)"/>`),n.push(`<circle cx="${a.toFixed(1)}" cy="${o.toFixed(1)}" r="3" fill="#0a0d1c"/>`),n.push(`<text x="${Ui}" y="${Ui-6}" text-anchor="middle" fill="#f4f1ea" font-size="46" font-family="'Instrument Serif', serif">${t.timeLabel}</text>`),n.push(`<text x="${Ui}" y="${Ui+26}" text-anchor="middle" fill="${t.phase.color}" font-size="10.5" letter-spacing="3.2" font-family="inherit">${t.phase.label.toUpperCase()}</text>`),r.innerHTML=n.join("")}function Ov(r,e){let t=!1;const n=i=>{const s=r.getBoundingClientRect(),a=i.clientX-(s.left+s.width/2),o=i.clientY-(s.top+s.height/2);return(Math.atan2(a,-o)/(Math.PI*2)*24+12+24)%24};r.addEventListener("pointerdown",i=>{t=!0,r.setPointerCapture(i.pointerId),e(n(i))}),r.addEventListener("pointermove",i=>{t&&e(n(i))}),r.addEventListener("pointerup",()=>{t=!1}),r.addEventListener("pointercancel",()=>{t=!1})}const $d=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Fv="rgba(255, 146, 51, 0.55)";function Gv(r){return(Date.UTC(r+1,0,1)-Date.UTC(r,0,1))/864e5}class Bv{constructor(e,t){this.canvas=e,this.onSelect=t,this.ctx=e.getContext("2d"),new ResizeObserver(()=>this.queueDraw()).observe(e),this.attachPointer()}canvas;onSelect;ctx;days=[];total=365;year=0;selected=null;today=null;job=0;cache=new Map;drawQueued=!1;load(e,t,n,i,s){this.year=i,this.today=s,this.total=Gv(i);const a=`${e.toFixed(4)},${t.toFixed(4)},${n},${i}`,o=this.cache.get(a);if(o){this.days=o,this.job++,this.queueDraw();return}const l=++this.job,c=new Array(this.total).fill(null);this.days=c;let u=0;const f=()=>{if(l!==this.job)return;const d=Math.min(u+14,this.total);for(;u<d;u++){const h=new Date(Date.UTC(i,0,1+u));c[u]=ff(e,t,{y:h.getUTCFullYear(),m:h.getUTCMonth()+1,d:h.getUTCDate()},n)}if(this.queueDraw(),u<this.total)setTimeout(f,0);else{if(this.cache.size>8){const h=this.cache.keys().next().value;h&&this.cache.delete(h)}this.cache.set(a,c)}};f()}setSelected(e){this.selected=e,this.queueDraw()}queueDraw(){this.drawQueued||(this.drawQueued=!0,requestAnimationFrame(()=>{this.drawQueued=!1,this.draw()}))}layout(){const e=this.canvas.clientWidth,t=this.canvas.clientHeight,n=e<560,i=n?30:40,s=n?6:12,a=16,o=26;return{w:e,h:t,ml:i,mr:s,mt:a,mb:o,pw:e-i-s,ph:t-a-o,narrow:n}}dayX(e,t){return t.ml+e/this.total*t.pw}draw(){const{canvas:e,ctx:t}=this,n=this.layout();if(n.w<10||n.h<10)return;const i=Math.min(window.devicePixelRatio||1,2);(e.width!==Math.round(n.w*i)||e.height!==Math.round(n.h*i))&&(e.width=Math.round(n.w*i),e.height=Math.round(n.h*i)),t.setTransform(i,0,0,i,0,0),t.clearRect(0,0,n.w,n.h);const s=l=>n.mt+l/24*n.ph,a=n.pw/this.total+.7;t.fillStyle="rgba(255,255,255,0.02)",t.fillRect(n.ml,n.mt,n.pw,n.ph);for(let l=0;l<this.total;l++){const c=this.days[l];if(!c)continue;const u=this.dayX(l,n);for(const f of c.segments)t.fillStyle=vi[f.phase],t.fillRect(u,s(f.start),a,s(f.end)-s(f.start));t.fillStyle=Fv;for(const f of[c.golden.morning,c.golden.evening])f.start!==null&&f.end!==null&&f.end>f.start&&t.fillRect(u,s(f.start),a,Math.max(1,s(f.end)-s(f.start)))}t.font='10px "Space Grotesk", sans-serif',t.textAlign="right",t.textBaseline="middle";for(let l=0;l<=24;l+=6){const c=s(l);t.strokeStyle="rgba(255,255,255,0.07)",t.beginPath(),t.moveTo(n.ml,c),t.lineTo(n.w-n.mr,c),t.stroke(),t.fillStyle="rgba(244,241,234,0.4)",t.fillText(String(l).padStart(2,"0"),n.ml-7,c)}t.textAlign="center",t.textBaseline="alphabetic";const o=Date.UTC(this.year,0,1);for(let l=0;l<12;l++){const c=(Date.UTC(this.year,l,1)-o)/864e5,u=(Date.UTC(this.year,l+1,1)-o)/864e5,f=this.dayX(c,n);l>0&&(t.strokeStyle="rgba(255,255,255,0.06)",t.beginPath(),t.moveTo(f,n.mt),t.lineTo(f,n.mt+n.ph),t.stroke()),t.fillStyle="rgba(244,241,234,0.45)";const d=this.dayX((c+u)/2,n),h=n.narrow?$d[l][0]:$d[l];t.fillText(h,d,n.h-9)}if(!n.narrow){t.save(),t.setLineDash([2,5]),t.strokeStyle="rgba(255,255,255,0.22)",t.fillStyle="rgba(244,241,234,0.4)",t.font='9px "Space Grotesk", sans-serif';const l=[[2,20,"EQUINOX"],[5,21,"SOLSTICE"],[8,22,"EQUINOX"],[11,21,"SOLSTICE"]];for(const[c,u,f]of l){const d=(Date.UTC(this.year,c,u)-o)/864e5,h=this.dayX(d,n)+a/2;t.beginPath(),t.moveTo(h,n.mt),t.lineTo(h,n.mt+n.ph),t.stroke(),t.fillText(f,h,n.mt-4)}t.restore()}if(this.today&&this.today.y===this.year){const l=(Date.UTC(this.today.y,this.today.m-1,this.today.d)-o)/864e5,c=this.dayX(l,n)+a/2;t.fillStyle="#f2c14e",t.beginPath(),t.moveTo(c-4,n.mt+n.ph+9),t.lineTo(c+4,n.mt+n.ph+9),t.lineTo(c,n.mt+n.ph+2),t.closePath(),t.fill()}if(this.selected&&this.selected.y===this.year){const l=(Date.UTC(this.selected.y,this.selected.m-1,this.selected.d)-o)/864e5,c=this.dayX(l,n)+a/2;t.save(),t.strokeStyle="rgba(255,255,255,0.95)",t.lineWidth=1.2,t.shadowColor="rgba(255,255,255,0.7)",t.shadowBlur=6,t.beginPath(),t.moveTo(c,n.mt-3),t.lineTo(c,n.mt+n.ph+3),t.stroke(),t.restore(),t.fillStyle="#fff",t.beginPath(),t.arc(c,n.mt-3,2.6,0,Math.PI*2),t.fill()}}attachPointer(){let e=!1;const t=n=>{const i=this.layout(),s=this.canvas.getBoundingClientRect(),a=n.clientX-s.left,o=Math.round((a-i.ml)/i.pw*this.total-.5),l=Math.max(0,Math.min(this.total-1,o)),c=new Date(Date.UTC(this.year,0,1+l)),u={y:c.getUTCFullYear(),m:c.getUTCMonth()+1,d:c.getUTCDate()};(!this.selected||!th(this.selected,u))&&this.onSelect(u)};this.canvas.addEventListener("pointerdown",n=>{e=!0,this.canvas.setPointerCapture(n.pointerId),t(n)}),this.canvas.addEventListener("pointermove",n=>{e&&t(n)}),this.canvas.addEventListener("pointerup",()=>{e=!1}),this.canvas.addEventListener("pointercancel",()=>{e=!1})}}const oa=[{label:"London",lat:51.5074,lng:-.1278},{label:"San Francisco",lat:37.7749,lng:-122.4194},{label:"Tokyo",lat:35.6762,lng:139.6503},{label:"Nairobi",lat:-1.2921,lng:36.8219},{label:"Sydney",lat:-33.8688,lng:151.2093},{label:"Reykjavík",lat:64.1466,lng:-21.9426},{label:"Longyearbyen",lat:78.2232,lng:15.6267},{label:"Ushuaia",lat:-54.8019,lng:-68.303}];Sr.registerPlugin(at);const pt=r=>document.querySelector(r),Er=(r,e,t)=>Math.min(t,Math.max(e,r)),Ba=window.matchMedia("(prefers-reduced-motion: reduce)").matches;function cs(r){const e=Math.floor(Er(r,0,24)*60)%1440;return`${String(Math.floor(e/60)).padStart(2,"0")}:${String(e%60).padStart(2,"0")}`}function Zv(r,e){return!e||isNaN(e.getTime())?"—":new Intl.DateTimeFormat("en-GB",{timeZone:r,hour:"2-digit",minute:"2-digit",hourCycle:"h23"}).format(e)}function Kd(r,e,t=!1){const n=Kl(r,e.y,e.m,e.d,12);return new Intl.DateTimeFormat("en-US",{timeZone:r,weekday:t?"long":"short",month:t?"long":"short",day:"numeric",year:"numeric"}).format(n)}function hf(r){if(r===null)return"—";const e=Math.round(r/6e4);return`${Math.floor(e/60)}h ${String(e%60).padStart(2,"0")}m`}function Hv(r){const e=Math.round(r/1e3),t=e<0?"−":"+",n=Math.abs(e);return`${t}${Math.floor(n/60)}m ${String(n%60).padStart(2,"0")}s`}const zv=["N","NE","E","SE","S","SW","W","NW"],Cm=r=>zv[Math.round((r%360+360)%360/45)%8],lo="ssjs-demo-prefs",Qd="ssjs-demo-geo";function kv(){try{const r=JSON.parse(localStorage.getItem(lo)||"");if(typeof r.lat=="number"&&typeof r.lng=="number")return r}catch{}return{...oa[0],label:oa[0].label}}const Pi=kv(),_o=new URLSearchParams(location.search),ol=parseFloat(_o.get("lat")??""),ll=parseFloat(_o.get("lng")??"");!isNaN(ol)&&!isNaN(ll)&&(Pi.lat=Er(ol,-90,90),Pi.lng=Er(ll,-180,180),Pi.label=`${Math.abs(ol).toFixed(2)}°${ol>=0?"N":"S"}, ${Math.abs(ll).toFixed(2)}°${ll>=0?"E":"W"}`);const Hc=gY(Pi.lat,Pi.lng),cl=/^(\d{4})-(\d{2})-(\d{2})$/.exec(_o.get("date")??""),df=parseFloat(_o.get("t")??"");_o.has("shot")&&document.documentElement.classList.add("shot");const oe={lat:Pi.lat,lng:Pi.lng,tz:Hc,label:Pi.label,date:cl?{y:Number(cl[1]),m:Number(cl[2]),d:Number(cl[3])}:Ql(Hc,new Date),hours:isNaN(df)?So(Hc,new Date):Er(df,0,24)};let lt,pf;const ve={bigTime:pt("#bigTime"),phaseLabel:pt("#phaseLabel"),dateText:pt("#dateText"),dateInput:pt("#dateInput"),tzText:pt("#tzText"),locBtn:pt("#locBtn"),polarBadge:pt("#polarBadge"),statElev:pt("#statElev"),statAz:pt("#statAz"),statDayLen:pt("#statDayLen"),scrubber:pt("#scrubber"),scrubTrack:pt("#scrubTrack"),scrubMarkers:pt("#scrubMarkers"),playhead:pt("#playhead"),playBtn:pt("#playBtn"),playIcon:document.getElementById("playIcon"),nowBtn:pt("#nowBtn"),locPanel:pt("#locPanel"),locClose:pt("#locClose"),presetChips:pt("#presetChips"),latInput:pt("#latInput"),lngInput:pt("#lngInput"),applyLoc:pt("#applyLoc"),geoBtn:pt("#geoBtn"),dial:document.getElementById("dial"),cards:pt("#cards"),yearCanvas:pt("#yearCanvas"),yearReadout:pt("#yearReadout"),legend:pt("#legend"),copyBtn:pt("#copyBtn")},$v=new Cv(pt("#sky"));function Kv(r){const e=cs(r);ve.bigTime.dataset.v!==e&&(ve.bigTime.dataset.v=e,ve.bigTime.innerHTML=e.split("").map(t=>`<span${t===":"?' class="colon"':""}>${t}</span>`).join(""))}function Qv(){const r=[];for(const a of lt.segments){const o=vi[a.phase];r.push(`${o} ${a.start/24*100}%`,`${o} ${a.end/24*100}%`)}const e=`linear-gradient(to right, ${r.join(", ")})`,t=["rgba(255,146,51,0) 0%"];for(const a of[lt.golden.morning,lt.golden.evening]){if(a.start===null||a.end===null||a.end<=a.start)continue;const o=a.start/24*100,l=a.end/24*100;t.push(`rgba(255,146,51,0) ${o}%`,`rgba(255,146,51,0.75) ${o}%`,`rgba(255,146,51,0.75) ${l}%`,`rgba(255,146,51,0) ${l}%`)}t.push("rgba(255,146,51,0) 100%");const n=`linear-gradient(to right, ${t.join(", ")})`;ve.scrubTrack.style.background=`${n}, ${e}`;const i=[],s=(a,o)=>{if(a===null)return;const l=a/24*100;i.push(`<div class="scrub-marker" style="left:${l}%"></div>`),o&&i.push(`<div class="scrub-mlabel" style="left:${l}%">${o}</div>`)};s(lt.sunriseH,lt.sunriseH!==null?`↑ ${cs(lt.sunriseH)}`:""),s(lt.noonH,""),s(lt.sunsetH,lt.sunsetH!==null?`↓ ${cs(lt.sunsetH)}`:""),ve.scrubMarkers.innerHTML=i.join("")}function Jd(r){if(!r)return"";const e=Zf(oe.lat,oe.lng,r,{timezoneId:oe.tz});return e?`az ${e.azimuth.toFixed(0)}° ${Cm(e.azimuth)}`:""}function Jv(){const r=lt.twilight,e=o=>Zv(oe.tz,o??null),t=(o,l)=>o&&l?`${e(o)} – ${e(l)}`:"—",n=o=>o?So(oe.tz,o):null,i=o=>vi[o],s=lt.dayLengthMs!==null&&pf.dayLengthMs!==null?`${Hv(lt.dayLengthMs-pf.dayLengthMs)} vs yesterday`:"",a=[{key:"ad",label:"Astro dawn",value:e(r?.astronomicalDawn),sub:"sun at −18°",dot:i("astro"),jump:n(r?.astronomicalDawn)},{key:"nd",label:"Nautical dawn",value:e(r?.nauticalDawn),sub:"sun at −12°",dot:i("nautical"),jump:n(r?.nauticalDawn)},{key:"cd",label:"Civil dawn",value:e(r?.civilDawn),sub:"sun at −6°",dot:i("civil"),jump:n(r?.civilDawn)},{key:"bm",label:"Blue hour · am",value:t(r?.blueHour?.morning.start,r?.blueHour?.morning.end),sub:"before sunrise",dot:oo,jump:n(r?.blueHour?.morning.start)},{key:"sr",label:"Sunrise",value:e(lt.sunrise),sub:Jd(lt.sunrise),dot:i("day"),jump:lt.sunriseH},{key:"gm",label:"Golden hour · am",value:t(r?.goldenHour?.morning.start,r?.goldenHour?.morning.end),sub:"after sunrise",dot:is,jump:n(r?.goldenHour?.morning.start)},{key:"noon",label:"Solar noon",value:e(lt.solarNoon),sub:`max elevation ${lt.noonElevation.toFixed(1)}°`,dot:"#fff",jump:lt.noonH},{key:"ge",label:"Golden hour · pm",value:t(r?.goldenHour?.evening.start,r?.goldenHour?.evening.end),sub:"before sunset",dot:is,jump:n(r?.goldenHour?.evening.start)},{key:"ss",label:"Sunset",value:e(lt.sunset),sub:Jd(lt.sunset),dot:i("day"),jump:lt.sunsetH},{key:"be",label:"Blue hour · pm",value:t(r?.blueHour?.evening.start,r?.blueHour?.evening.end),sub:"after sunset",dot:oo,jump:n(r?.blueHour?.evening.start)},{key:"cdk",label:"Civil dusk",value:e(r?.civilDusk),sub:"sun at −6°",dot:i("civil"),jump:n(r?.civilDusk)},{key:"ndk",label:"Nautical dusk",value:e(r?.nauticalDusk),sub:"sun at −12°",dot:i("nautical"),jump:n(r?.nauticalDusk)},{key:"adk",label:"Astro dusk",value:e(r?.astronomicalDusk),sub:"sun at −18°",dot:i("astro"),jump:n(r?.astronomicalDusk)},{key:"len",label:"Day length",value:hf(lt.dayLengthMs),sub:s,dot:is,jump:null}];ve.cards.innerHTML=a.map(o=>`<button class="card" data-jump="${o.jump??""}">
                <span class="card-k"><span class="dot" style="background:${o.dot}"></span>${o.label}</span>
                <span class="card-v">${o.value}</span>
                <span class="card-s">${o.sub||"&nbsp;"}</span>
            </button>`).join(""),Ba||Sr.fromTo(ve.cards.children,{autoAlpha:.4,y:5},{autoAlpha:1,y:0,duration:.35,stagger:.012,ease:"power2.out",overwrite:!0})}let zc=!1;function qv(){const r=Pm(lt,oe.hours),e=Ql(oe.tz,new Date),t=th(e,oe.date)?So(oe.tz,new Date):null;Nv(ve.dial,lt,{hours:oe.hours,timeLabel:cs(oe.hours),phase:r,nowH:t})}function jv(){zc||(zc=!0,requestAnimationFrame(()=>{zc=!1,qv()}))}function Rm(){const r=oe.hours,e=Kl(oe.tz,oe.date.y,oe.date.m,oe.date.d,r),t=Zf(oe.lat,oe.lng,e,{timezoneId:oe.tz});t&&($v.setSun(t.elevation,t.azimuth),ve.statElev.textContent=`${t.elevation.toFixed(1)}°`,ve.statAz.textContent=`${t.azimuth.toFixed(0)}° ${Cm(t.azimuth)}`),Kv(r);const n=Pm(lt,r);ve.phaseLabel.textContent=n.label,ve.phaseLabel.style.color=n.color,ve.playhead.style.left=`${Er(r,0,24)/24*100}%`,ve.scrubber.setAttribute("aria-valuenow",r.toFixed(2)),ve.scrubber.setAttribute("aria-valuetext",`${cs(r)}, ${n.label}`),jv()}function nh(){lt=ff(oe.lat,oe.lng,oe.date,oe.tz),pf=ff(oe.lat,oe.lng,uf(oe.date,-1),oe.tz),ve.dateText.textContent=Kd(oe.tz,oe.date),ve.dateInput.value=`${oe.date.y}-${String(oe.date.m).padStart(2,"0")}-${String(oe.date.d).padStart(2,"0")}`,ve.locBtn.textContent=oe.label,ve.tzText.textContent=`${Iv(oe.tz,Kl(oe.tz,oe.date.y,oe.date.m,oe.date.d,12))}`,ve.statDayLen.textContent=hf(lt.dayLengthMs),lt.polar?(ve.polarBadge.hidden=!1,ve.polarBadge.textContent=lt.polar==="day"?"☀ Polar day — the sun never sets":"☾ Polar night — the sun never rises"):ve.polarBadge.hidden=!0,Qv(),Jv(),ve.yearReadout.innerHTML=`<b>${Kd(oe.tz,oe.date,!0)}</b> — ${hf(lt.dayLengthMs)} of daylight`+(lt.sunriseH!==null&&lt.sunsetH!==null?` · ↑ ${cs(lt.sunriseH)} ↓ ${cs(lt.sunsetH)}`:""),Rm()}let Yf,qd="";function ih(){const r=`${oe.lat.toFixed(4)},${oe.lng.toFixed(4)},${oe.tz},${oe.date.y}`;r!==qd&&(qd=r,Yf.load(oe.lat,oe.lng,oe.tz,oe.date.y,Ql(oe.tz,new Date))),Yf.setSelected(oe.date)}function Hi(r,e=!0){e&&To(),oe.hours=Er(r,0,24),Rm()}function Ks(r){oe.date=r,nh(),ih()}function xl(r,e,t){oe.lat=Er(r,-90,90),oe.lng=Er(e,-180,180),oe.tz=gY(oe.lat,oe.lng),oe.label=t??`${Math.abs(r).toFixed(2)}°${r>=0?"N":"S"}, ${Math.abs(e).toFixed(2)}°${e>=0?"E":"W"}`,ve.latInput.value=oe.lat.toFixed(4),ve.lngInput.value=oe.lng.toFixed(4),Lm(),localStorage.setItem(lo,JSON.stringify({lat:oe.lat,lng:oe.lng,label:oe.label})),nh(),ih(),t||ex(oe.lat,oe.lng)}async function ex(r,e){const t=`${r.toFixed(2)},${e.toFixed(2)}`;let n={};try{n=JSON.parse(localStorage.getItem(Qd)||"{}")}catch{}if(n[t]){oe.label=n[t],ve.locBtn.textContent=oe.label;return}try{const a=(await(await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${r}&lon=${e}&zoom=10`,{headers:{"Accept-Language":"en"}})).json()).address??{},o=a.city||a.town||a.village||a.county||a.state||"",l=(a.country_code||"").toUpperCase(),c=[o,l].filter(Boolean).join(", ");if(c&&r===oe.lat&&e===oe.lng){oe.label=c,ve.locBtn.textContent=c;const u=Object.keys(n);u.length>50&&delete n[u[0]],n[t]=c,localStorage.setItem(Qd,JSON.stringify(n)),localStorage.setItem(lo,JSON.stringify({lat:oe.lat,lng:oe.lng,label:c}))}}catch{}}let Za=null,Ha=null;const tx=2.2;function Im(r){ve.playIcon.setAttribute("d",r?"M6 4 H10 V20 H6 Z M14 4 H18 V20 H14 Z":"M7 4 L20 12 L7 20 Z"),ve.playBtn.setAttribute("aria-label",r?"Pause":"Play the day")}function To(){Ha&&(Ha.kill(),Ha=null),Za&&(Za.kill(),Za=null,Im(!1))}function nx(){To(),Im(!0);const r={h:oe.hours>=23.99?0:oe.hours},e=t=>{r.h=t,Za=Sr.to(r,{h:24,duration:(24-t)/tx,ease:"none",onUpdate:()=>Hi(r.h,!1),onComplete:()=>e(0)})};e(r.h)}function wm(){To();const r=new Date,e=Ql(oe.tz,r);th(e,oe.date)||Ks(e),Hi(So(oe.tz,r),!1)}function Lm(){for(const r of Array.from(ve.presetChips.children)){const e=oa[Number(r.dataset.i)];r.classList.toggle("active",Math.abs(e.lat-oe.lat)<.01&&Math.abs(e.lng-oe.lng)<.01)}}function ix(){let r=!1;const e=i=>{const s=ve.scrubber.getBoundingClientRect();Hi((i.clientX-s.left)/s.width*24)};ve.scrubber.addEventListener("pointerdown",i=>{r=!0,ve.scrubber.setPointerCapture(i.pointerId),e(i)}),ve.scrubber.addEventListener("pointermove",i=>{r&&e(i)}),ve.scrubber.addEventListener("pointerup",()=>{r=!1}),ve.scrubber.addEventListener("pointercancel",()=>{r=!1}),ve.scrubber.addEventListener("keydown",i=>{const s=i.shiftKey?1:.25;i.key==="ArrowLeft"&&(Hi(oe.hours-s),i.preventDefault()),i.key==="ArrowRight"&&(Hi(oe.hours+s),i.preventDefault())}),ve.playBtn.addEventListener("click",()=>Za?To():nx()),ve.nowBtn.addEventListener("click",wm),pt("#datePrev").addEventListener("click",()=>Ks(uf(oe.date,-1))),pt("#dateNext").addEventListener("click",()=>Ks(uf(oe.date,1))),ve.dateInput.addEventListener("change",()=>{const[i,s,a]=ve.dateInput.value.split("-").map(Number);i&&s&&a&&Ks({y:i,m:s,d:a})}),ve.presetChips.innerHTML=oa.map((i,s)=>`<button class="chip" data-i="${s}">${i.label}</button>`).join(""),ve.presetChips.addEventListener("click",i=>{const s=i.target.closest(".chip");if(!s)return;const a=oa[Number(s.dataset.i)];xl(a.lat,a.lng,a.label)});const t=i=>{ve.locPanel.classList.toggle("open",i),ve.locBtn.setAttribute("aria-expanded",String(i))};ve.locBtn.addEventListener("click",i=>{i.stopPropagation(),t(!ve.locPanel.classList.contains("open"))}),ve.locClose.addEventListener("click",()=>t(!1)),document.addEventListener("pointerdown",i=>{!ve.locPanel.contains(i.target)&&i.target!==ve.locBtn&&t(!1)}),ve.applyLoc.addEventListener("click",()=>{const i=parseFloat(ve.latInput.value),s=parseFloat(ve.lngInput.value);!isNaN(i)&&!isNaN(s)&&xl(i,s)}),ve.geoBtn.addEventListener("click",()=>{navigator.geolocation?.getCurrentPosition(i=>xl(i.coords.latitude,i.coords.longitude),()=>{ve.geoBtn.textContent="⌖ Location unavailable"})}),Ov(ve.dial,i=>Hi(i)),ve.cards.addEventListener("click",i=>{const s=i.target.closest(".card");!s||s.dataset.jump===""||(Hi(Number(s.dataset.jump)),window.innerWidth<860&&window.scrollTo({top:0,behavior:Ba?"auto":"smooth"}))}),ve.copyBtn.addEventListener("click",async()=>{try{await navigator.clipboard.writeText("npm install sunrise-sunset-js"),ve.copyBtn.textContent="✓",setTimeout(()=>{ve.copyBtn.textContent="⧉"},1500)}catch{}});const n=[[vi.day,Rs.day],["rgba(255,146,51,0.8)","Golden hour"],[vi.civil,Rs.civil],[vi.nautical,Rs.nautical],[vi.astro,Rs.astro],[vi.night,Rs.night]];if(ve.legend.innerHTML=n.map(([i,s])=>`<span class="lg"><span class="sw" style="background:${i}"></span>${s}</span>`).join(""),!Ba&&window.matchMedia("(pointer: fine)").matches){const i=Sr.quickTo(".m-back","x",{duration:.8,ease:"power2.out"}),s=Sr.quickTo(".m-front","x",{duration:.6,ease:"power2.out"});pt("#hero").addEventListener("pointermove",a=>{const o=a.clientX/window.innerWidth-.5;i(o*-14),s(o*-26)})}if(!Ba)for(const i of Array.from(document.querySelectorAll(".reveal")))Sr.from(i,{y:36,autoAlpha:0,duration:.9,ease:"power3.out",scrollTrigger:{trigger:i,start:"top 88%"}})}Yf=new Bv(ve.yearCanvas,r=>{To(),Ks(r)});ve.latInput.value=oe.lat.toFixed(4);ve.lngInput.value=oe.lng.toFixed(4);ix();nh();ih();Lm();Pi.label===oa[0].label&&!localStorage.getItem(lo)&&localStorage.setItem(lo,JSON.stringify(Pi));Object.assign(window,{__demo:{setHours:Hi,setDate:Ks,setLocation:xl,goNow:wm,state:oe}});if(!Ba&&isNaN(df)){const r=oe.hours,e=Math.max(0,r-(r>7?7:2));if(r-e>.2){const t={h:e};Ha=Sr.to(t,{h:r,duration:3,ease:"power2.inOut",onUpdate:()=>Hi(t.h,!1),onComplete:()=>{Ha=null}})}}
