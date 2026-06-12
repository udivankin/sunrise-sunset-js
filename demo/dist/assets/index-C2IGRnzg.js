(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function Oi(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function ip(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}var $n={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ka={duration:.5,overwrite:!1,delay:0},Sf,sn,Pt,ai=1e8,Et=1/ai,Qc=Math.PI*2,Zm=Qc/4,Hm=0,rp=Math.sqrt,km=Math.cos,zm=Math.sin,nn=function(e){return typeof e=="string"},Dt=function(e){return typeof e=="function"},Ji=function(e){return typeof e=="number"},_f=function(e){return typeof e>"u"},Xi=function(e){return typeof e=="object"},Vn=function(e){return e!==!1},Tf=function(){return typeof window<"u"},vo=function(e){return Dt(e)||nn(e)},sp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},dn=Array.isArray,$m=/random\([^)]+\)/g,Km=/,\s*/g,oh=/(?:-?\.?\d|\.)+/gi,ap=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Is=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,tc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,op=/[+-]=-?[.\d]+/,Qm=/[^,'"\[\]\s]+/gi,Jm=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,It,Ti,Jc,gf,Kn={},Al={},lp,cp=function(e){return(Al=Qs(e,Kn))&&Rn},Wf=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Qa=function(e,t){return!t&&console.warn(e)},up=function(e,t){return e&&(Kn[e]=t)&&Al&&(Al[e]=t)||Kn},Ja=function(){return 0},qm={suppressEvents:!0,isStart:!0,kill:!1},pl={suppressEvents:!0,kill:!1},jm={suppressEvents:!0},Mf={},mr=[],qc={},fp,Gn={},nc={},lh=30,Yl=[],Uf="",vf=function(e){var t=e[0],n,r;if(Xi(t)||Dt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=Yl.length;r--&&!Yl[r].targetTest(t););n=Yl[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new Cp(e[r],n)))||e.splice(r,1);return e},Kr=function(e){return e._gsap||vf(oi(e))[0]._gsap},hp=function(e,t,n){return(n=e[t])&&Dt(n)?e[t]():_f(n)&&e.getAttribute&&e.getAttribute(t)||n},An=function(e,t){return(e=e.split(",")).forEach(t)||e},Ft=function(e){return Math.round(e*1e5)/1e5||0},Rt=function(e){return Math.round(e*1e7)/1e7||0},Ns=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},e0=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},bl=function(){var e=mr.length,t=mr.slice(0),n,r;for(qc={},mr.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},xf=function(e){return!!(e._initted||e._startAt||e.add)},dp=function(e,t,n,r){mr.length&&!sn&&bl(),e.render(t,n,!!(sn&&t<0&&xf(e))),mr.length&&!sn&&bl()},pp=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Qm).length<2?t:nn(e)?e.trim():e},Yp=function(e){return e},Qn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},t0=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},Qs=function(e,t){for(var n in t)e[n]=t[n];return e},ch=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Xi(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},Pl=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},Ca=function(e){var t=e.parent||It,n=e.keyframes?t0(dn(e.keyframes)):Qn;if(Vn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},n0=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},mp=function(e,t,n,r,s){var a=e[r],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=a,t.parent=t._dp=e,t},Zl=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Wr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Qr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},i0=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},jc=function(e,t,n,r){return e._startAt&&(sn?e._startAt.revert(pl):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},r0=function i(e){return!e||e._ts&&i(e.parent)},uh=function(e){return e._repeat?Js(e._tTime,e=e.duration()+e._rDelay)*e:0},Js=function(e,t){var n=Math.floor(e=Rt(e/t));return e&&n===e?n-1:n},Xl=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Hl=function(e){return e._end=Rt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Et)||0))},kl=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Rt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Hl(e),n._dirty||Qr(n,e)),e},Sp=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Xl(e.rawTime(),t),(!t._dur||Yo(0,t.totalDuration(),n)-t._tTime>Et)&&t.render(n,!0)),Qr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Et}},Ui=function(e,t,n,r){return t.parent&&Wr(t),t._start=Rt((Ji(n)?n:n||e!==It?ti(e,n,t):e._time)+t._delay),t._end=Rt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),mp(e,t,"_first","_last",e._sort?"_start":0),eu(t)||(e._recent=t),r||Sp(e,t),e._ts<0&&kl(e,e._tTime),e},_p=function(e,t){return(Kn.ScrollTrigger||Wf("scrollTrigger",t))&&Kn.ScrollTrigger.create(t,e)},Tp=function(e,t,n,r,s){if(yf(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!sn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&fp!==Zn.frame)return mr.push(e),e._lazy=[s,r],1},s0=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},eu=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},a0=function(e,t,n,r){var s=e.ratio,a=t<0||!t&&(!e._start&&s0(e)&&!(!e._initted&&eu(e))||(e._ts<0||e._dp._ts<0)&&!eu(e))?0:1,o=e._rDelay,l=0,c,u,f;if(o&&e._repeat&&(l=Yo(0,e._tDur,t),u=Js(l,o),e._yoyo&&u&1&&(a=1-a),u!==Js(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||sn||r||e._zTime===Et||!t&&e._zTime){if(!e._initted&&Tp(e,t,r,n,l))return;for(f=e._zTime,e._zTime=t||(n?Et:0),n||(n=t&&!f),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&jc(e,t,n,!0),e._onUpdate&&!n&&kn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&kn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Wr(e,1),!n&&!sn&&(kn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},o0=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},qs=function(e,t,n,r){var s=e._repeat,a=Rt(t)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Rt(a*(s+1)+e._rDelay*s):a,o>0&&!r&&kl(e,e._tTime=e._tDur*o),e.parent&&Hl(e),n||Qr(e.parent,e),e},fh=function(e){return e instanceof yn?Qr(e):qs(e,e._dur)},l0={_start:0,endTime:Ja,totalDuration:Ja},ti=function i(e,t,n){var r=e.labels,s=e._recent||l0,a=e.duration()>=ai?s.endTime(!1):e._dur,o,l,c;return nn(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in r||(r[t]=a),r[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(dn(n)?n[0]:n).totalDuration()),o>1?i(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},Ra=function(e,t,n){var r=Ji(t[1]),s=(r?2:1)+(e<2?0:1),a=t[s],o,l;if(r&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Vn(l.vars.inherit)&&l.parent;a.immediateRender=Vn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new kt(t[0],a,t[s+1])},yr=function(e,t){return e||e===0?t(e):t},Yo=function(e,t,n){return n<e?e:n>t?t:n},fn=function(e,t){return!nn(e)||!(t=Jm.exec(e))?"":t[1]},c0=function(e,t,n){return yr(n,function(r){return Yo(e,t,r)})},tu=[].slice,gp=function(e,t){return e&&Xi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Xi(e[0]))&&!e.nodeType&&e!==Ti},u0=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var s;return nn(r)&&!t||gp(r,1)?(s=n).push.apply(s,oi(r)):n.push(r)})||n},oi=function(e,t,n){return Pt&&!t&&Pt.selector?Pt.selector(e):nn(e)&&!n&&(Jc||!js())?tu.call((t||gf).querySelectorAll(e),0):dn(e)?u0(e,n):gp(e)?tu.call(e,0):e?[e]:[]},nu=function(e){return e=oi(e)[0]||Qa("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return oi(t,n.querySelectorAll?n:n===e?Qa("Invalid scope")||gf.createElement("div"):e)}},Wp=function(e){return e.sort(function(){return .5-Math.random()})},Mp=function(e){if(Dt(e))return e;var t=Xi(e)?e:{each:e},n=Jr(t.ease),r=t.from||0,s=parseFloat(t.base)||0,a={},o=r>0&&r<1,l=isNaN(r)||o,c=t.axis,u=r,f=r;return nn(r)?u=f={center:.5,edges:.5,end:1}[r]||0:!o&&l&&(u=r[0],f=r[1]),function(d,h,S){var m=(S||t).length,Y=a[m],p,v,x,_,E,y,U,b,g;if(!Y){if(g=t.grid==="auto"?0:(t.grid||[1,ai])[1],!g){for(U=-ai;U<(U=S[g++].getBoundingClientRect().left)&&g<m;);g<m&&g--}for(Y=a[m]=[],p=l?Math.min(g,m)*u-.5:r%g,v=g===ai?0:l?m*f/g-.5:r/g|0,U=0,b=ai,y=0;y<m;y++)x=y%g-p,_=v-(y/g|0),Y[y]=E=c?Math.abs(c==="y"?_:x):rp(x*x+_*_),E>U&&(U=E),E<b&&(b=E);r==="random"&&Wp(Y),Y.max=U-b,Y.min=b,Y.v=m=(parseFloat(t.amount)||parseFloat(t.each)*(g>m?m-1:c?c==="y"?m/g:g:Math.max(g,m/g))||0)*(r==="edges"?-1:1),Y.b=m<0?s-m:s,Y.u=fn(t.amount||t.each)||0,n=n&&m<0?U0(n):n}return m=(Y[d]-Y.min)/Y.max||0,Rt(Y.b+(n?n(m):m)*Y.v)+Y.u}},iu=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=Rt(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(Ji(n)?0:fn(n))}},Up=function(e,t){var n=dn(e),r,s;return!n&&Xi(e)&&(r=n=e.radius||ai,e.values?(e=oi(e.values),(s=!Ji(e[0]))&&(r*=r)):e=iu(e.increment)),yr(t,n?Dt(e)?function(a){return s=e(a),Math.abs(s-a)<=r?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=ai,u=0,f=e.length,d,h;f--;)s?(d=e[f].x-o,h=e[f].y-l,d=d*d+h*h):d=Math.abs(e[f]-o),d<c&&(c=d,u=f);return u=!r||c<=r?e[u]:a,s||u===a||Ji(a)?u:u+fn(a)}:iu(e))},vp=function(e,t,n,r){return yr(dn(e)?!t:n===!0?!!(n=0):!r,function(){return dn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},f0=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(s,a){return a(s)},r)}},h0=function(e,t){return function(n){return e(parseFloat(n))+(t||fn(n))}},d0=function(e,t,n){return Ep(e,t,0,1,n)},xp=function(e,t,n){return yr(n,function(r){return e[~~t(r)]})},p0=function i(e,t,n){var r=t-e;return dn(e)?xp(e,i(0,e.length),t):yr(n,function(s){return(r+(s-e)%r)%r+e})},Y0=function i(e,t,n){var r=t-e,s=r*2;return dn(e)?xp(e,i(0,e.length-1),t):yr(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>r?s-a:a)})},qa=function(e){return e.replace($m,function(t){var n=t.indexOf("[")+1,r=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(Km);return vp(n?r:+r[0],n?0:+r[1],+r[2]||1e-5)})},Ep=function(e,t,n,r,s){var a=t-e,o=r-n;return yr(s,function(l){return n+((l-e)/a*o||0)})},m0=function i(e,t,n,r){var s=isNaN(e+t)?0:function(h){return(1-h)*e+h*t};if(!s){var a=nn(e),o={},l,c,u,f,d;if(n===!0&&(r=1)&&(n=null),a)e={p:e},t={p:t};else if(dn(e)&&!dn(t)){for(u=[],f=e.length,d=f-2,c=1;c<f;c++)u.push(i(e[c-1],e[c]));f--,s=function(S){S*=f;var m=Math.min(d,~~S);return u[m](S-m)},n=t}else r||(e=Qs(dn(e)?[]:{},e));if(!u){for(l in t)Ef.call(o,e,l,"get",t[l]);s=function(S){return bf(S,o)||(a?e.p:e)}}}return yr(n,s)},hh=function(e,t,n){var r=e.labels,s=ai,a,o,l;for(a in r)o=r[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},kn=function(e,t,n){var r=e.vars,s=r[t],a=Pt,o=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,n&&mr.length&&bl(),o&&(Pt=o),u=l?s.apply(c,l):s.call(c),Pt=a,u},xa=function(e){return Wr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!sn),e.progress()<1&&kn(e,"onInterrupt"),e},ws,yp=[],Vp=function(e){if(e)if(e=!e.name&&e.default||e,Tf()||e.headless){var t=e.name,n=Dt(e),r=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Ja,render:bf,add:Ef,kill:C0,modifier:X0,rawVars:0},a={targetTest:0,get:0,getSetter:Af,aliases:{},register:0};if(js(),e!==r){if(Gn[t])return;Qn(r,Qn(Pl(e,s),a)),Qs(r.prototype,Qs(s,Pl(e,a))),Gn[r.prop=t]=r,e.targetTest&&(Yl.push(r),Mf[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}up(t,r),e.register&&e.register(Rn,r,bn)}else yp.push(e)},xt=255,Ea={aqua:[0,xt,xt],lime:[0,xt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,xt],navy:[0,0,128],white:[xt,xt,xt],olive:[128,128,0],yellow:[xt,xt,0],orange:[xt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[xt,0,0],pink:[xt,192,203],cyan:[0,xt,xt],transparent:[xt,xt,xt,0]},ic=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*xt+.5|0},Ap=function(e,t,n){var r=e?Ji(e)?[e>>16,e>>8&xt,e&xt]:0:Ea.black,s,a,o,l,c,u,f,d,h,S;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ea[e])r=Ea[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&xt,r&xt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&xt,e&xt]}else if(e.substr(0,3)==="hsl"){if(r=S=e.match(oh),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,r.length>3&&(r[3]*=1),r[0]=ic(l+1/3,s,a),r[1]=ic(l,s,a),r[2]=ic(l-1/3,s,a);else if(~e.indexOf("="))return r=e.match(ap),n&&r.length<4&&(r[3]=1),r}else r=e.match(oh)||Ea.transparent;r=r.map(Number)}return t&&!S&&(s=r[0]/xt,a=r[1]/xt,o=r[2]/xt,f=Math.max(s,a,o),d=Math.min(s,a,o),u=(f+d)/2,f===d?l=c=0:(h=f-d,c=u>.5?h/(2-f-d):h/(f+d),l=f===s?(a-o)/h+(a<o?6:0):f===a?(o-s)/h+2:(s-a)/h+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},bp=function(e){var t=[],n=[],r=-1;return e.split(Sr).forEach(function(s){var a=s.match(Is)||[];t.push.apply(t,a),n.push(r+=a.length+1)}),t.c=n,t},dh=function(e,t,n){var r="",s=(e+r).match(Sr),a=t?"hsla(":"rgba(",o=0,l,c,u,f;if(!s)return e;if(s=s.map(function(d){return(d=Ap(d,t,1))&&a+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=bp(e),l=n.c,l.join(r)!==u.c.join(r)))for(c=e.replace(Sr,"1").split(Is),f=c.length-1;o<f;o++)r+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(Sr),f=c.length-1;o<f;o++)r+=c[o]+s[o];return r+c[f]},Sr=(function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ea)i+="|"+e+"\\b";return new RegExp(i+")","gi")})(),S0=/hsl[a]?\(/,Pp=function(e){var t=e.join(" "),n;if(Sr.lastIndex=0,Sr.test(t))return n=S0.test(t),e[1]=dh(e[1],n),e[0]=dh(e[0],n,bp(e[1])),!0},ja,Zn=(function(){var i=Date.now,e=500,t=33,n=i(),r=n,s=1e3/240,a=s,o=[],l,c,u,f,d,h,S=function m(Y){var p=i()-r,v=Y===!0,x,_,E,y;if((p>e||p<0)&&(n+=p-t),r+=p,E=r-n,x=E-a,(x>0||v)&&(y=++f.frame,d=E-f.time*1e3,f.time=E=E/1e3,a+=x+(x>=s?4:s-x),_=1),v||(l=c(m)),_)for(h=0;h<o.length;h++)o[h](E,d,y,Y)};return f={time:0,frame:0,tick:function(){S(!0)},deltaRatio:function(Y){return d/(1e3/(Y||60))},wake:function(){lp&&(!Jc&&Tf()&&(Ti=Jc=window,gf=Ti.document||{},Kn.gsap=Rn,(Ti.gsapVersions||(Ti.gsapVersions=[])).push(Rn.version),cp(Al||Ti.GreenSockGlobals||!Ti.gsap&&Ti||{}),yp.forEach(Vp)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(Y){return setTimeout(Y,a-f.time*1e3+1|0)},ja=1,S(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),ja=0,c=Ja},lagSmoothing:function(Y,p){e=Y||1/0,t=Math.min(p||33,e)},fps:function(Y){s=1e3/(Y||240),a=f.time*1e3+s},add:function(Y,p,v){var x=p?function(_,E,y,U){Y(_,E,y,U),f.remove(x)}:Y;return f.remove(Y),o[v?"unshift":"push"](x),js(),x},remove:function(Y,p){~(p=o.indexOf(Y))&&o.splice(p,1)&&h>=p&&h--},_listeners:o},f})(),js=function(){return!ja&&Zn.wake()},lt={},_0=/^[\d.\-M][\d.\-,\s]/,T0=/["']/g,g0=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[r]=isNaN(c)?c.replace(T0,"").trim():+c,r=l.substr(o+1).trim();return t},W0=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},M0=function(e){var t=(e+"").split("("),n=lt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[g0(t[1])]:W0(e).split(",").map(pp)):lt._CE&&_0.test(e)?lt._CE("",e):n},U0=function(e){return function(t){return 1-e(1-t)}},Jr=function(e,t){return e&&(Dt(e)?e:lt[e]||M0(e))||t},cs=function(e,t,n,r){n===void 0&&(n=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:r},a;return An(e,function(o){lt[o]=Kn[o]=s,lt[a=o.toLowerCase()]=n;for(var l in s)lt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=lt[o+"."+l]=s[l]}),s},Xp=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},rc=function i(e,t,n){var r=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/Qc*(Math.asin(1/r)||0),o=function(u){return u===1?1:r*Math.pow(2,-10*u)*zm((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:Xp(o);return s=Qc/s,l.config=function(c,u){return i(e,c,u)},l},sc=function i(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},r=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Xp(n);return r.config=function(s){return i(e,s)},r};An("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;cs(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});lt.Linear.easeNone=lt.none=lt.Linear.easeIn;cs("Elastic",rc("in"),rc("out"),rc());(function(i,e){var t=1/e,n=2*t,r=2.5*t,s=function(o){return o<t?i*o*o:o<n?i*Math.pow(o-1.5/e,2)+.75:o<r?i*(o-=2.25/e)*o+.9375:i*Math.pow(o-2.625/e,2)+.984375};cs("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);cs("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});cs("Circ",function(i){return-(rp(1-i*i)-1)});cs("Sine",function(i){return i===1?1:-km(i*Zm)+1});cs("Back",sc("in"),sc("out"),sc());lt.SteppedEase=lt.steps=Kn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),s=t?1:0,a=1-Et;return function(o){return((r*Yo(0,a,o)|0)+s)*n}}};Ka.ease=lt["quad.out"];An("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return Uf+=i+","+i+"Params,"});var Cp=function(e,t){this.id=Hm++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:hp,this.set=t?t.getSetter:Af},eo=(function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,qs(this,+t.duration,1,1),this.data=t.data,Pt&&(this._ctx=Pt,Pt.data.push(this)),ja||Zn.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,qs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(js(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(kl(this,n),!s._dp||s.parent||Sp(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ui(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Et||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),dp(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+uh(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+uh(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?Js(this._tTime,s)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-Et?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Xl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Et?0:this._rts,this.totalTime(Yo(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),Hl(this),i0(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(js(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Et&&(this._tTime-=Et)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Rt(n);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Ui(r,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Vn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Xl(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=jm);var r=sn;return sn=n,xf(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),sn=r,this},e.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,fh(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,fh(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(ti(this,n),Vn(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,Vn(r)),this._dur||(this._zTime=-Et),this},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Et:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Et,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-Et)},e.eventCallback=function(n,r,s){var a=this.vars;return arguments.length>1?(r?(a[n]=r,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete a[n],this):a[n]},e.then=function(n){var r=this,s=r._prom;return new Promise(function(a){var o=Dt(n)?n:Yp,l=function(){var u=r.then;r.then=null,s&&s(),Dt(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=u),a(o),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){xa(this)},i})();Qn(eo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Et,_prom:0,_ps:!1,_rts:1});var yn=(function(i){ip(e,i);function e(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Vn(n.sortChildren),It&&Ui(n.parent||It,Oi(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&_p(Oi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,a){return Ra(0,arguments,this),this},t.from=function(r,s,a){return Ra(1,arguments,this),this},t.fromTo=function(r,s,a,o){return Ra(2,arguments,this),this},t.set=function(r,s,a){return s.duration=0,s.parent=this,Ca(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new kt(r,s,ti(this,a),1),this},t.call=function(r,s,a){return Ui(this,kt.delayedCall(0,r,s),a)},t.staggerTo=function(r,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new kt(r,a,ti(this,l)),this},t.staggerFrom=function(r,s,a,o,l,c,u){return a.runBackwards=1,Ca(a).immediateRender=Vn(a.immediateRender),this.staggerTo(r,s,a,o,l,c,u)},t.staggerFromTo=function(r,s,a,o,l,c,u,f){return o.startAt=a,Ca(o).immediateRender=Vn(o.immediateRender),this.staggerTo(r,s,o,l,c,u,f)},t.render=function(r,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:Rt(r),f=this._zTime<0!=r<0&&(this._initted||!c),d,h,S,m,Y,p,v,x,_,E,y,U;if(this!==It&&u>l&&r>=0&&(u=l),u!==this._tTime||a||f){if(o!==this._time&&c&&(u+=this._time-o,r+=this._time-o),d=u,_=this._start,x=this._ts,p=!x,f&&(c||(o=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(y=this._yoyo,Y=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(Y*100+r,s,a);if(d=Rt(u%Y),u===l?(m=this._repeat,d=c):(E=Rt(u/Y),m=~~E,m&&m===E&&(d=c,m--),d>c&&(d=c)),E=Js(this._tTime,Y),!o&&this._tTime&&E!==m&&this._tTime-E*Y-this._dur<=0&&(E=m),y&&m&1&&(d=c-d,U=1),m!==E&&!this._lock){var b=y&&E&1,g=b===(y&&m&1);if(m<E&&(b=!b),o=b?0:u%c?c:u,this._lock=1,this.render(o||(U?0:Rt(m*Y)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&kn(this,"onRepeat"),this.vars.repeatRefresh&&!U&&(this.invalidate()._lock=1,E=m),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,g&&(this._lock=2,o=b?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!U&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=o0(this,Rt(o),Rt(d)),v&&(u-=d-(d=v._start))),this._tTime=u,this._time=d,this._act=!!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,o=0),!o&&u&&c&&!s&&!E&&(kn(this,"onStart"),this._tTime!==u))return this;if(d>=o&&r>=0)for(h=this._first;h;){if(S=h._next,(h._act||d>=h._start)&&h._ts&&v!==h){if(h.parent!==this)return this.render(r,s,a);if(h.render(h._ts>0?(d-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(d-h._start)*h._ts,s,a),d!==this._time||!this._ts&&!p){v=0,S&&(u+=this._zTime=-Et);break}}h=S}else{h=this._last;for(var T=r<0?r:d;h;){if(S=h._prev,(h._act||T<=h._end)&&h._ts&&v!==h){if(h.parent!==this)return this.render(r,s,a);if(h.render(h._ts>0?(T-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(T-h._start)*h._ts,s,a||sn&&xf(h)),d!==this._time||!this._ts&&!p){v=0,S&&(u+=this._zTime=T?-Et:Et);break}}h=S}}if(v&&!s&&(this.pause(),v.render(d>=o?0:-Et)._zTime=d>=o?1:-1,this._ts))return this._start=_,Hl(this),this.render(r,s,a);this._onUpdate&&!s&&kn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(_===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Wr(this,1),!s&&!(r<0&&!o)&&(u||o||!l)&&(kn(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var a=this;if(Ji(s)||(s=ti(this,s,r)),!(r instanceof eo)){if(dn(r))return r.forEach(function(o){return a.add(o,s)}),this;if(nn(r))return this.addLabel(r,s);if(Dt(r))r=kt.delayedCall(0,r);else return this}return this!==r?Ui(this,r,s):this},t.getChildren=function(r,s,a,o){r===void 0&&(r=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-ai);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof kt?s&&l.push(c):(a&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===r)return s[a]},t.remove=function(r){return nn(r)?this.removeLabel(r):Dt(r)?this.killTweensOf(r):(r.parent===this&&Zl(this,r),r===this._recent&&(this._recent=this._last),Qr(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Rt(Zn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=ti(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,a){var o=kt.delayedCall(0,s||Ja,a);return o.data="isPause",this._hasPause=1,Ui(this,o,ti(this,r))},t.removePause=function(r){var s=this._first;for(r=ti(this,r);s;)s._start===r&&s.data==="isPause"&&Wr(s),s=s._next},t.killTweensOf=function(r,s,a){for(var o=this.getTweensOf(r,a),l=o.length;l--;)fr!==o[l]&&o[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var a=[],o=oi(r),l=this._first,c=Ji(s),u;l;)l instanceof kt?e0(l._targets,o)&&(c?(!fr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(r,s){s=s||{};var a=this,o=ti(a,r),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,d=l.immediateRender,h,S=kt.to(a,Qn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||Et,onStart:function(){if(a.pause(),!h){var Y=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());S._dur!==Y&&qs(S,Y,0,1).render(S._time,!0,!0),h=1}u&&u.apply(S,f||[])}},s));return d?S.render(0):S},t.tweenFromTo=function(r,s,a){return this.tweenTo(s,Qn({startAt:{time:ti(this,r)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),hh(this,ti(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),hh(this,ti(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Et)},t.shiftChildren=function(r,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(r=Rt(r);o;)o._start>=a&&(o._start+=r,o._end+=r),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=r);return Qr(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Qr(this)},t.totalDuration=function(r){var s=0,a=this,o=a._last,l=ai,c,u,f;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-r:r));if(a._dirty){for(f=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Ui(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!f&&!a._dp||f&&f.smoothChildTiming)&&(a._start+=Rt(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;qs(a,a===It&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(r){if(It._ts&&(dp(It,Xl(r,It)),fp=Zn.frame),Zn.frame>=lh){lh+=$n.autoSleep||120;var s=It._first;if((!s||!s._ts)&&$n.autoSleep&&Zn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Zn.sleep()}}},e})(eo);Qn(yn.prototype,{_lock:0,_hasPause:0,_forcing:0});var v0=function(e,t,n,r,s,a,o){var l=new bn(this._pt,e,t,0,1,Np,null,s),c=0,u=0,f,d,h,S,m,Y,p,v;for(l.b=n,l.e=r,n+="",r+="",(p=~r.indexOf("random("))&&(r=qa(r)),a&&(v=[n,r],a(v,e,t),n=v[0],r=v[1]),d=n.match(tc)||[];f=tc.exec(r);)S=f[0],m=r.substring(c,f.index),h?h=(h+1)%5:m.substr(-5)==="rgba("&&(h=1),S!==d[u++]&&(Y=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:m||u===1?m:",",s:Y,c:S.charAt(1)==="="?Ns(Y,S)-Y:parseFloat(S)-Y,m:h&&h<4?Math.round:0},c=tc.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=o,(op.test(r)||p)&&(l.e=0),this._pt=l,l},Ef=function(e,t,n,r,s,a,o,l,c,u){Dt(r)&&(r=r(s||0,e,a));var f=e[t],d=n!=="get"?n:Dt(f)?c?e[t.indexOf("set")||!Dt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,h=Dt(f)?c?A0:Lp:Vf,S;if(nn(r)&&(~r.indexOf("random(")&&(r=qa(r)),r.charAt(1)==="="&&(S=Ns(d,r)+(fn(d)||0),(S||S===0)&&(r=S))),!u||d!==r||ru)return!isNaN(d*r)&&r!==""?(S=new bn(this._pt,e,t,+d||0,r-(d||0),typeof f=="boolean"?P0:Dp,0,h),c&&(S.fp=c),o&&S.modifier(o,this,e),this._pt=S):(!f&&!(t in e)&&Wf(t,r),v0.call(this,e,t,d,r,h,l||$n.stringFilter,c))},x0=function(e,t,n,r,s){if(Dt(e)&&(e=Ia(e,s,t,n,r)),!Xi(e)||e.style&&e.nodeType||dn(e)||sp(e))return nn(e)?Ia(e,s,t,n,r):e;var a={},o;for(o in e)a[o]=Ia(e[o],s,t,n,r);return a},Rp=function(e,t,n,r,s,a){var o,l,c,u;if(Gn[e]&&(o=new Gn[e]).init(s,o.rawVars?t[e]:x0(t[e],r,s,a,n),n,r,a)!==!1&&(n._pt=l=new bn(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==ws))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},fr,ru,yf=function i(e,t,n){var r=e.vars,s=r.ease,a=r.startAt,o=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,f=r.yoyoEase,d=r.keyframes,h=r.autoRevert,S=e._dur,m=e._startAt,Y=e._targets,p=e.parent,v=p&&p.data==="nested"?p.vars.targets:Y,x=e._overwrite==="auto"&&!Sf,_=e.timeline,E=r.easeReverse||f,y,U,b,g,T,C,R,O,Z,B,H,G,N;if(_&&(!d||!s)&&(s="none"),e._ease=Jr(s,Ka.ease),e._rEase=E&&(Jr(E)||e._ease),e._from=!_&&!!r.runBackwards,e._from&&(e.ratio=1),!_||d&&!r.stagger){if(O=Y[0]?Kr(Y[0]).harness:0,G=O&&r[O.prop],y=Pl(r,Mf),m&&(m._zTime<0&&m.progress(1),t<0&&u&&o&&!h?m.render(-1,!0):m.revert(u&&S?pl:qm),m._lazy=0),a){if(Wr(e._startAt=kt.set(Y,Qn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!m&&Vn(l),startAt:null,delay:0,onUpdate:c&&function(){return kn(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(sn||!o&&!h)&&e._startAt.revert(pl),o&&S&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&S&&!m){if(t&&(o=!1),b=Qn({overwrite:!1,data:"isFromStart",lazy:o&&!m&&Vn(l),immediateRender:o,stagger:0,parent:p},y),G&&(b[O.prop]=G),Wr(e._startAt=kt.set(Y,b)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(sn?e._startAt.revert(pl):e._startAt.render(-1,!0)),e._zTime=t,!o)i(e._startAt,Et,Et);else if(!t)return}for(e._pt=e._ptCache=0,l=S&&Vn(l)||l&&!S,U=0;U<Y.length;U++){if(T=Y[U],R=T._gsap||vf(Y)[U]._gsap,e._ptLookup[U]=B={},qc[R.id]&&mr.length&&bl(),H=v===Y?U:v.indexOf(T),O&&(Z=new O).init(T,G||y,e,H,v)!==!1&&(e._pt=g=new bn(e._pt,T,Z.name,0,1,Z.render,Z,0,Z.priority),Z._props.forEach(function(ne){B[ne]=g}),Z.priority&&(C=1)),!O||G)for(b in y)Gn[b]&&(Z=Rp(b,y,e,H,T,v))?Z.priority&&(C=1):B[b]=g=Ef.call(e,T,b,"get",y[b],H,v,0,r.stringFilter);e._op&&e._op[U]&&e.kill(T,e._op[U]),x&&e._pt&&(fr=e,It.killTweensOf(T,B,e.globalTime(t)),N=!e.parent,fr=0),e._pt&&l&&(qc[R.id]=1)}C&&Op(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!N,d&&t<=0&&_.render(ai,!0,!0)},E0=function(e,t,n,r,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,d,h;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,h=e._targets.length;h--;){if(u=d[h][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return ru=1,e.vars[t]="+=0",yf(e,o),ru=0,l?Qa(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(h=c.length;h--;)f=c[h],u=f._pt||f,u.s=(r||r===0)&&!s?r:u.s+(r||0)+a*u.c,u.c=n-u.s,f.e&&(f.e=Ft(n)+fn(f.e)),f.b&&(f.b=u.s+fn(f.b))},y0=function(e,t){var n=e[0]?Kr(e[0]).harness:0,r=n&&n.aliases,s,a,o,l;if(!r)return t;s=Qs({},t);for(a in r)if(a in s)for(l=r[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},V0=function(e,t,n,r){var s=t.ease||r||"power1.inOut",a,o;if(dn(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},Ia=function(e,t,n,r,s){return Dt(e)?e.call(t,n,r,s):nn(e)&&~e.indexOf("random(")?qa(e):e},Ip=Uf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",wp={};An(Ip+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return wp[i]=1});var kt=(function(i){ip(e,i);function e(n,r,s,a){var o;typeof r=="number"&&(s.duration=r,r=s,s=null),o=i.call(this,a?r:Ca(r))||this;var l=o.vars,c=l.duration,u=l.delay,f=l.immediateRender,d=l.stagger,h=l.overwrite,S=l.keyframes,m=l.defaults,Y=l.scrollTrigger,p=r.parent||It,v=(dn(n)||sp(n)?Ji(n[0]):"length"in r)?[n]:oi(n),x,_,E,y,U,b,g,T;if(o._targets=v.length?vf(v):Qa("GSAP target "+n+" not found. https://gsap.com",!$n.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=h,S||d||vo(c)||vo(u)){r=o.vars;var C=r.easeReverse||r.yoyoEase;if(x=o.timeline=new yn({data:"nested",defaults:m||{},targets:p&&p.data==="nested"?p.vars.targets:v}),x.kill(),x.parent=x._dp=Oi(o),x._start=0,d||vo(c)||vo(u)){if(y=v.length,g=d&&Mp(d),Xi(d))for(U in d)~Ip.indexOf(U)&&(T||(T={}),T[U]=d[U]);for(_=0;_<y;_++)E=Pl(r,wp),E.stagger=0,C&&(E.easeReverse=C),T&&Qs(E,T),b=v[_],E.duration=+Ia(c,Oi(o),_,b,v),E.delay=(+Ia(u,Oi(o),_,b,v)||0)-o._delay,!d&&y===1&&E.delay&&(o._delay=u=E.delay,o._start+=u,E.delay=0),x.to(b,E,g?g(_,b,v):0),x._ease=lt.none;x.duration()?c=u=0:o.timeline=0}else if(S){Ca(Qn(x.vars.defaults,{ease:"none"})),x._ease=Jr(S.ease||r.ease||"none");var R=0,O,Z,B;if(dn(S))S.forEach(function(H){return x.to(v,H,">")}),x.duration();else{E={};for(U in S)U==="ease"||U==="easeEach"||V0(U,S[U],E,S.easeEach);for(U in E)for(O=E[U].sort(function(H,G){return H.t-G.t}),R=0,_=0;_<O.length;_++)Z=O[_],B={ease:Z.e,duration:(Z.t-(_?O[_-1].t:0))/100*c},B[U]=Z.v,x.to(v,B,R),R+=B.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||o.duration(c=x.duration())}else o.timeline=0;return h===!0&&!Sf&&(fr=Oi(o),It.killTweensOf(v),fr=0),Ui(p,Oi(o),s),r.reversed&&o.reverse(),r.paused&&o.paused(!0),(f||!c&&!S&&o._start===Rt(p._time)&&Vn(f)&&r0(Oi(o))&&p.data!=="nested")&&(o._tTime=-Et,o.render(Math.max(0,-u)||0)),Y&&_p(Oi(o),Y),o}var t=e.prototype;return t.render=function(r,s,a){var o=this._time,l=this._tDur,c=this._dur,u=r<0,f=r>l-Et&&!u?l:r<Et?0:r,d,h,S,m,Y,p,v,x;if(!c)a0(this,r,s,a);else if(f!==this._tTime||!r||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(d=f,x=this.timeline,this._repeat){if(m=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(m*100+r,s,a);if(d=Rt(f%m),f===l?(S=this._repeat,d=c):(Y=Rt(f/m),S=~~Y,S&&S===Y?(d=c,S--):d>c&&(d=c)),p=this._yoyo&&S&1,p&&(d=c-d),Y=Js(this._tTime,m),d===o&&!a&&this._initted&&S===Y)return this._tTime=f,this;S!==Y&&this.vars.repeatRefresh&&!p&&!this._lock&&d!==m&&this._initted&&(this._lock=a=1,this.render(Rt(m*S),!0).invalidate()._lock=0)}if(!this._initted){if(Tp(this,u?r:d,a,s,f))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&S!==Y))return this;if(c!==this._dur)return this.render(r,s,a)}if(this._rEase){var _=d<o;if(_!==this._inv){var E=_?o:c-o;this._inv=_,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=E?(_?-1:1)/E:0,this._invScale=_?-this.ratio:1-this.ratio,this._invEase=_?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((d-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(d/c);if(this._from&&(this.ratio=v=1-v),this._tTime=f,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&f&&!s&&!Y&&(kn(this,"onStart"),this._tTime!==f))return this;for(h=this._pt;h;)h.r(v,h.d),h=h._next;x&&x.render(r<0?r:x._dur*x._ease(d/this._dur),s,a)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&jc(this,r,s,a),kn(this,"onUpdate")),this._repeat&&S!==Y&&this.vars.onRepeat&&!s&&this.parent&&kn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&jc(this,r,!0,!0),(r||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Wr(this,1),!s&&!(u&&!o)&&(f||o||p)&&(kn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,a,o,l){ja||Zn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||yf(this,c),u=this._ease(c/this._dur),E0(this,r,s,a,o,u,c,l)?this.resetTo(r,s,a,o,1):(kl(this,0),this.parent||mp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?xa(this):this.scrollTrigger&&this.scrollTrigger.kill(!!sn),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,fr&&fr.vars.overwrite!==!0)._first||xa(this),this.parent&&a!==this.timeline.totalDuration()&&qs(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=r?oi(r):o,c=this._ptLookup,u=this._pt,f,d,h,S,m,Y,p;if((!s||s==="all")&&n0(o,l))return s==="all"&&(this._pt=0),xa(this);for(f=this._op=this._op||[],s!=="all"&&(nn(s)&&(m={},An(s,function(v){return m[v]=1}),s=m),s=y0(o,s)),p=o.length;p--;)if(~l.indexOf(o[p])){d=c[p],s==="all"?(f[p]=s,S=d,h={}):(h=f[p]=f[p]||{},S=s);for(m in S)Y=d&&d[m],Y&&((!("kill"in Y.d)||Y.d.kill(m)===!0)&&Zl(this,Y,"_pt"),delete d[m]),h!=="all"&&(h[m]=1)}return this._initted&&!this._pt&&u&&xa(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Ra(1,arguments)},e.delayedCall=function(r,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(r,s,a){return Ra(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,a){return It.killTweensOf(r,s,a)},e})(eo);Qn(kt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});An("staggerTo,staggerFrom,staggerFromTo",function(i){kt[i]=function(){var e=new yn,t=tu.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var Vf=function(e,t,n){return e[t]=n},Lp=function(e,t,n){return e[t](n)},A0=function(e,t,n,r){return e[t](r.fp,n)},b0=function(e,t,n){return e.setAttribute(t,n)},Af=function(e,t){return Dt(e[t])?Lp:_f(e[t])&&e.setAttribute?b0:Vf},Dp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},P0=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Np=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},bf=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},X0=function(e,t,n,r){for(var s=this._pt,a;s;)a=s._next,s.p===r&&s.modifier(e,t,n),s=a},C0=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Zl(this,t,"_pt"):t.dep||(n=1),t=r;return!n},R0=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},Op=function(e){for(var t=e._pt,n,r,s,a;t;){for(n=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:a)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:a=t,t=n}e._pt=s},bn=(function(){function i(t,n,r,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=r,this.r=o||Dp,this.d=l||this,this.set=c||Vf,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=R0,this.m=n,this.mt=s,this.tween=r},i})();An(Uf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(i){return Mf[i]=1});Kn.TweenMax=Kn.TweenLite=kt;Kn.TimelineLite=Kn.TimelineMax=yn;It=new yn({sortChildren:!1,defaults:Ka,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});$n.stringFilter=Pp;var qr=[],ml={},I0=[],ph=0,w0=0,ac=function(e){return(ml[e]||I0).map(function(t){return t()})},su=function(){var e=Date.now(),t=[];e-ph>2&&(ac("matchMediaInit"),qr.forEach(function(n){var r=n.queries,s=n.conditions,a,o,l,c;for(o in r)a=Ti.matchMedia(r[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),ac("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),ph=e,ac("matchMedia"))},Fp=(function(){function i(t,n){this.selector=n&&nu(n),this.data=[],this._r=[],this.isReverted=!1,this.id=w0++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,r,s){Dt(n)&&(s=r,r=n,n=Dt);var a=this,o=function(){var c=Pt,u=a.selector,f;return c&&c!==a&&c.data.push(a),s&&(a.selector=nu(s)),Pt=a,f=r.apply(a,arguments),Dt(f)&&a._r.push(f),Pt=c,a.selector=u,a.isReverted=!1,f};return a.last=o,n===Dt?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var r=Pt;Pt=null,n(this),Pt=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof kt&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof yn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof kt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),r)for(var a=qr.length;a--;)qr[a].id===this.id&&qr.splice(a,1)},e.revert=function(n){this.kill(n||{})},i})(),L0=(function(){function i(t){this.contexts=[],this.scope=t,Pt&&Pt.data.push(this)}var e=i.prototype;return e.add=function(n,r,s){Xi(n)||(n={matches:n});var a=new Fp(0,s||this.scope),o=a.conditions={},l,c,u;Pt&&!a.selector&&(a.selector=Pt.selector),this.contexts.push(a),r=a.add("onMatch",r),a.queries=n;for(c in n)c==="all"?u=1:(l=Ti.matchMedia(n[c]),l&&(qr.indexOf(a)<0&&qr.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(su):l.addEventListener("change",su)));return u&&r(a,function(f){return a.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i})(),Cl={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return Vp(r)})},timeline:function(e){return new yn(e)},getTweensOf:function(e,t){return It.getTweensOf(e,t)},getProperty:function(e,t,n,r){nn(e)&&(e=oi(e)[0]);var s=Kr(e||{}).get,a=n?Yp:pp;return n==="native"&&(n=""),e&&(t?a((Gn[t]&&Gn[t].get||s)(e,t,n,r)):function(o,l,c){return a((Gn[o]&&Gn[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=oi(e),e.length>1){var r=e.map(function(u){return Rn.quickSetter(u,t,n)}),s=r.length;return function(u){for(var f=s;f--;)r[f](u)}}e=e[0]||{};var a=Gn[t],o=Kr(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var f=new a;ws._pt=0,f.init(e,n?u+n:u,ws,0,[e]),f.render(1,f),ws._pt&&bf(1,ws)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var r,s=Rn.to(e,Qn((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return It.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Jr(e.ease,Ka.ease)),ch(Ka,e||{})},config:function(e){return ch($n,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,s=e.defaults,a=e.extendTimeline;(r||"").split(",").forEach(function(o){return o&&!Gn[o]&&!Kn[o]&&Qa(t+" effect requires "+o+" plugin.")}),nc[t]=function(o,l,c){return n(oi(o),Qn(l||{},s),c)},a&&(yn.prototype[t]=function(o,l,c){return this.add(nc[t](o,Xi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){lt[e]=Jr(t)},parseEase:function(e,t){return arguments.length?Jr(e,t):lt},getById:function(e){return It.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new yn(e),r,s;for(n.smoothChildTiming=Vn(e.smoothChildTiming),It.remove(n),n._dp=0,n._time=n._tTime=It._time,r=It._first;r;)s=r._next,(t||!(!r._dur&&r instanceof kt&&r.vars.onComplete===r._targets[0]))&&Ui(n,r,r._start-r._delay),r=s;return Ui(It,n,0),n},context:function(e,t){return e?new Fp(e,t):Pt},matchMedia:function(e){return new L0(e)},matchMediaRefresh:function(){return qr.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||su()},addEventListener:function(e,t){var n=ml[e]||(ml[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=ml[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:p0,wrapYoyo:Y0,distribute:Mp,random:vp,snap:Up,normalize:d0,getUnit:fn,clamp:c0,splitColor:Ap,toArray:oi,selector:nu,mapRange:Ep,pipe:f0,unitize:h0,interpolate:m0,shuffle:Wp},install:cp,effects:nc,ticker:Zn,updateRoot:yn.updateRoot,plugins:Gn,globalTimeline:It,core:{PropTween:bn,globals:up,Tween:kt,Timeline:yn,Animation:eo,getCache:Kr,_removeLinkedListItem:Zl,reverting:function(){return sn},context:function(e){return e&&Pt&&(Pt.data.push(e),e._ctx=Pt),Pt},suppressOverwrites:function(e){return Sf=e}}};An("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return Cl[i]=kt[i]});Zn.add(yn.updateRoot);ws=Cl.to({},{duration:0});var D0=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},N0=function(e,t){var n=e._targets,r,s,a;for(r in t)for(s=n.length;s--;)a=e._ptLookup[s][r],a&&(a=a.d)&&(a._pt&&(a=D0(a,r)),a&&a.modifier&&a.modifier(t[r],e,n[s],r))},oc=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,a){a._onInit=function(o){var l,c;if(nn(s)&&(l={},An(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}N0(o,s)}}}},Rn=Cl.registerPlugin({name:"attr",init:function(e,t,n,r,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],r,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)sn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},oc("roundProps",iu),oc("modifiers"),oc("snap",Up))||Cl;kt.version=yn.version=Rn.version="3.15.0";lp=1;Tf()&&js();lt.Power0;lt.Power1;lt.Power2;lt.Power3;lt.Power4;lt.Linear;lt.Quad;lt.Cubic;lt.Quart;lt.Quint;lt.Strong;lt.Elastic;lt.Back;lt.SteppedEase;lt.Bounce;lt.Sine;lt.Expo;lt.Circ;var Yh,hr,Os,Pf,Zr,mh,Xf,O0=function(){return typeof window<"u"},qi={},Lr=180/Math.PI,Fs=Math.PI/180,hs=Math.atan2,Sh=1e8,Cf=/([A-Z])/g,F0=/(left|right|width|margin|padding|x)/i,G0=/[\s,\(]\S/,xi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},au=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},B0=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Z0=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},H0=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},k0=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Gp=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Bp=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},z0=function(e,t,n){return e.style[t]=n},$0=function(e,t,n){return e.style.setProperty(t,n)},K0=function(e,t,n){return e._gsap[t]=n},Q0=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},J0=function(e,t,n,r,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},q0=function(e,t,n,r,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},wt="transform",Pn=wt+"Origin",j0=function i(e,t){var n=this,r=this.target,s=r.style,a=r._gsap;if(e in qi&&s){if(this.tfm=this.tfm||{},e!=="transform")e=xi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=Gi(r,o)}):this.tfm[e]=a.x?a[e]:Gi(r,e),e===Pn&&(this.tfm.zOrigin=a.zOrigin);else return xi.transform.split(",").forEach(function(o){return i.call(n,o,t)});if(this.props.indexOf(wt)>=0)return;a.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Pn,t,"")),e=wt}(s||t)&&this.props.push(e,t,s[e])},Zp=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},eS=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Cf,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Xf(),(!s||!s.isStart)&&!n[wt]&&(Zp(n),r.zOrigin&&n[Pn]&&(n[Pn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Hp=function(e,t){var n={target:e,props:[],revert:eS,save:j0};return e._gsap||Rn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return n.save(r)}),n},kp,ou=function(e,t){var n=hr.createElementNS?hr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):hr.createElement(e);return n&&n.style?n:hr.createElement(e)},zn=function i(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Cf,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&i(e,ea(t)||t,1)||""},_h="O,Moz,ms,Ms,Webkit".split(","),ea=function(e,t,n){var r=t||Zr,s=r.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(_h[a]+e in s););return a<0?null:(a===3?"ms":a>=0?_h[a]:"")+e},lu=function(){O0()&&window.document&&(Yh=window,hr=Yh.document,Os=hr.documentElement,Zr=ou("div")||{style:{}},ou("div"),wt=ea(wt),Pn=wt+"Origin",Zr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",kp=!!ea("perspective"),Xf=Rn.core.reverting,Pf=1)},Th=function(e){var t=e.ownerSVGElement,n=ou("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",n.appendChild(r),Os.appendChild(n);try{s=r.getBBox()}catch{}return n.removeChild(r),Os.removeChild(n),s},gh=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},zp=function(e){var t,n;try{t=e.getBBox()}catch{t=Th(e),n=1}return t&&(t.width||t.height)||n||(t=Th(e)),t&&!t.width&&!t.x&&!t.y?{x:+gh(e,["x","cx","x1"])||0,y:+gh(e,["y","cy","y1"])||0,width:0,height:0}:t},$p=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&zp(e))},Mr=function(e,t){if(t){var n=e.style,r;t in qi&&t!==Pn&&(t=wt),n.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(r==="--"?t:t.replace(Cf,"-$1").toLowerCase())):n.removeAttribute(t)}},dr=function(e,t,n,r,s,a){var o=new bn(e._pt,t,n,0,1,a?Bp:Gp);return e._pt=o,o.b=r,o.e=s,e._props.push(n),o},Wh={deg:1,rad:1,turn:1},tS={grid:1,flex:1},Ur=function i(e,t,n,r){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Zr.style,l=F0.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,d=r==="px",h=r==="%",S,m,Y,p;if(r===a||!s||Wh[r]||Wh[a])return s;if(a!=="px"&&!d&&(s=i(e,t,n,"px")),p=e.getCTM&&$p(e),(h||a==="%")&&(qi[t]||~t.indexOf("adius")))return S=p?e.getBBox()[l?"width":"height"]:e[u],Ft(h?s/S*f:s/100*S);if(o[l?"width":"height"]=f+(d?a:r),m=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(m=(e.ownerSVGElement||{}).parentNode),(!m||m===hr||!m.appendChild)&&(m=hr.body),Y=m._gsap,Y&&h&&Y.width&&l&&Y.time===Zn.time&&!Y.uncache)return Ft(s/Y.width*f);if(h&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=f+r,S=e[u],v?e.style[t]=v:Mr(e,t)}else(h||a==="%")&&!tS[zn(m,"display")]&&(o.position=zn(e,"position")),m===e&&(o.position="static"),m.appendChild(Zr),S=Zr[u],m.removeChild(Zr),o.position="absolute";return l&&h&&(Y=Kr(m),Y.time=Zn.time,Y.width=m[u]),Ft(d?S*s/f:S&&s?f/S*s:0)},Gi=function(e,t,n,r){var s;return Pf||lu(),t in xi&&t!=="transform"&&(t=xi[t],~t.indexOf(",")&&(t=t.split(",")[0])),qi[t]&&t!=="transform"?(s=no(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Il(zn(e,Pn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Rl[t]&&Rl[t](e,t,n)||zn(e,t)||hp(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Ur(e,t,s,n)+n:s},nS=function(e,t,n,r){if(!n||n==="none"){var s=ea(t,e,1),a=s&&zn(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=zn(e,"borderTopColor"))}var o=new bn(this._pt,e.style,t,0,1,Np),l=0,c=0,u,f,d,h,S,m,Y,p,v,x,_,E;if(o.b=n,o.e=r,n+="",r+="",r.substring(0,6)==="var(--"&&(r=zn(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(m=e.style[t],e.style[t]=r,r=zn(e,t)||r,m?e.style[t]=m:Mr(e,t)),u=[n,r],Pp(u),n=u[0],r=u[1],d=n.match(Is)||[],E=r.match(Is)||[],E.length){for(;f=Is.exec(r);)Y=f[0],v=r.substring(l,f.index),S?S=(S+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(S=1),Y!==(m=d[c++]||"")&&(h=parseFloat(m)||0,_=m.substr((h+"").length),Y.charAt(1)==="="&&(Y=Ns(h,Y)+_),p=parseFloat(Y),x=Y.substr((p+"").length),l=Is.lastIndex-x.length,x||(x=x||$n.units[t]||_,l===r.length&&(r+=x,o.e+=x)),_!==x&&(h=Ur(e,t,m,x)||0),o._pt={_next:o._pt,p:v||c===1?v:",",s:h,c:p-h,m:S&&S<4||t==="zIndex"?Math.round:0});o.c=l<r.length?r.substring(l,r.length):""}else o.r=t==="display"&&r==="none"?Bp:Gp;return op.test(r)&&(o.e=0),this._pt=o,o},Mh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},iS=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=Mh[n]||n,t[1]=Mh[r]||r,t.join(" ")},rS=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],qi[o]&&(l=1,o=o==="transformOrigin"?Pn:wt),Mr(n,o);l&&(Mr(n,wt),a&&(a.svg&&n.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",no(n,1),a.uncache=1,Zp(r)))}},Rl={clearProps:function(e,t,n,r,s){if(s.data!=="isFromStart"){var a=e._pt=new bn(e._pt,t,n,0,0,rS);return a.u=r,a.pr=-10,a.tween=s,e._props.push(n),1}}},to=[1,0,0,1,0,0],Kp={},Qp=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Uh=function(e){var t=zn(e,wt);return Qp(t)?to:t.substr(7).match(ap).map(Ft)},Rf=function(e,t){var n=e._gsap||Kr(e),r=e.style,s=Uh(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?to:s):(s===to&&!e.offsetParent&&e!==Os&&!n.svg&&(l=r.display,r.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,Os.appendChild(e)),s=Uh(e),l?r.display=l:Mr(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Os.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},cu=function(e,t,n,r,s,a){var o=e._gsap,l=s||Rf(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,f=o.xOffset||0,d=o.yOffset||0,h=l[0],S=l[1],m=l[2],Y=l[3],p=l[4],v=l[5],x=t.split(" "),_=parseFloat(x[0])||0,E=parseFloat(x[1])||0,y,U,b,g;n?l!==to&&(U=h*Y-S*m)&&(b=_*(Y/U)+E*(-m/U)+(m*v-Y*p)/U,g=_*(-S/U)+E*(h/U)-(h*v-S*p)/U,_=b,E=g):(y=zp(e),_=y.x+(~x[0].indexOf("%")?_/100*y.width:_),E=y.y+(~(x[1]||x[0]).indexOf("%")?E/100*y.height:E)),r||r!==!1&&o.smooth?(p=_-c,v=E-u,o.xOffset=f+(p*h+v*m)-p,o.yOffset=d+(p*S+v*Y)-v):o.xOffset=o.yOffset=0,o.xOrigin=_,o.yOrigin=E,o.smooth=!!r,o.origin=t,o.originIsAbsolute=!!n,e.style[Pn]="0px 0px",a&&(dr(a,o,"xOrigin",c,_),dr(a,o,"yOrigin",u,E),dr(a,o,"xOffset",f,o.xOffset),dr(a,o,"yOffset",d,o.yOffset)),e.setAttribute("data-svg-origin",_+" "+E)},no=function(e,t){var n=e._gsap||new Cp(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=zn(e,Pn)||"0",u,f,d,h,S,m,Y,p,v,x,_,E,y,U,b,g,T,C,R,O,Z,B,H,G,N,ne,P,fe,Le,tt,He,Ze;return u=f=d=m=Y=p=v=x=_=0,h=S=1,n.svg=!!(e.getCTM&&$p(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[wt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[wt]!=="none"?l[wt]:"")),r.scale=r.rotate=r.translate="none"),U=Rf(e,n.svg),n.svg&&(n.uncache?(N=e.getBBox(),c=n.xOrigin-N.x+"px "+(n.yOrigin-N.y)+"px",G=""):G=!t&&e.getAttribute("data-svg-origin"),cu(e,G||c,!!G||n.originIsAbsolute,n.smooth!==!1,U)),E=n.xOrigin||0,y=n.yOrigin||0,U!==to&&(C=U[0],R=U[1],O=U[2],Z=U[3],u=B=U[4],f=H=U[5],U.length===6?(h=Math.sqrt(C*C+R*R),S=Math.sqrt(Z*Z+O*O),m=C||R?hs(R,C)*Lr:0,v=O||Z?hs(O,Z)*Lr+m:0,v&&(S*=Math.abs(Math.cos(v*Fs))),n.svg&&(u-=E-(E*C+y*O),f-=y-(E*R+y*Z))):(Ze=U[6],tt=U[7],P=U[8],fe=U[9],Le=U[10],He=U[11],u=U[12],f=U[13],d=U[14],b=hs(Ze,Le),Y=b*Lr,b&&(g=Math.cos(-b),T=Math.sin(-b),G=B*g+P*T,N=H*g+fe*T,ne=Ze*g+Le*T,P=B*-T+P*g,fe=H*-T+fe*g,Le=Ze*-T+Le*g,He=tt*-T+He*g,B=G,H=N,Ze=ne),b=hs(-O,Le),p=b*Lr,b&&(g=Math.cos(-b),T=Math.sin(-b),G=C*g-P*T,N=R*g-fe*T,ne=O*g-Le*T,He=Z*T+He*g,C=G,R=N,O=ne),b=hs(R,C),m=b*Lr,b&&(g=Math.cos(b),T=Math.sin(b),G=C*g+R*T,N=B*g+H*T,R=R*g-C*T,H=H*g-B*T,C=G,B=N),Y&&Math.abs(Y)+Math.abs(m)>359.9&&(Y=m=0,p=180-p),h=Ft(Math.sqrt(C*C+R*R+O*O)),S=Ft(Math.sqrt(H*H+Ze*Ze)),b=hs(B,H),v=Math.abs(b)>2e-4?b*Lr:0,_=He?1/(He<0?-He:He):0),n.svg&&(G=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Qp(zn(e,wt)),G&&e.setAttribute("transform",G))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(h*=-1,v+=m<=0?180:-180,m+=m<=0?180:-180):(S*=-1,v+=v<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=Ft(h),n.scaleY=Ft(S),n.rotation=Ft(m)+o,n.rotationX=Ft(Y)+o,n.rotationY=Ft(p)+o,n.skewX=v+o,n.skewY=x+o,n.transformPerspective=_+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(r[Pn]=Il(c)),n.xOffset=n.yOffset=0,n.force3D=$n.force3D,n.renderTransform=n.svg?aS:kp?Jp:sS,n.uncache=0,n},Il=function(e){return(e=e.split(" "))[0]+" "+e[1]},lc=function(e,t,n){var r=fn(t);return Ft(parseFloat(t)+parseFloat(Ur(e,"x",n+"px",r)))+r},sS=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Jp(e,t)},Ar="0deg",Ya="0px",br=") ",Jp=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,d=n.skewX,h=n.skewY,S=n.scaleX,m=n.scaleY,Y=n.transformPerspective,p=n.force3D,v=n.target,x=n.zOrigin,_="",E=p==="auto"&&e&&e!==1||p===!0;if(x&&(f!==Ar||u!==Ar)){var y=parseFloat(u)*Fs,U=Math.sin(y),b=Math.cos(y),g;y=parseFloat(f)*Fs,g=Math.cos(y),a=lc(v,a,U*g*-x),o=lc(v,o,-Math.sin(y)*-x),l=lc(v,l,b*g*-x+x)}Y!==Ya&&(_+="perspective("+Y+br),(r||s)&&(_+="translate("+r+"%, "+s+"%) "),(E||a!==Ya||o!==Ya||l!==Ya)&&(_+=l!==Ya||E?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+br),c!==Ar&&(_+="rotate("+c+br),u!==Ar&&(_+="rotateY("+u+br),f!==Ar&&(_+="rotateX("+f+br),(d!==Ar||h!==Ar)&&(_+="skew("+d+", "+h+br),(S!==1||m!==1)&&(_+="scale("+S+", "+m+br),v.style[wt]=_||"translate(0, 0)"},aS=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,d=n.scaleY,h=n.target,S=n.xOrigin,m=n.yOrigin,Y=n.xOffset,p=n.yOffset,v=n.forceCSS,x=parseFloat(a),_=parseFloat(o),E,y,U,b,g;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Fs,c*=Fs,E=Math.cos(l)*f,y=Math.sin(l)*f,U=Math.sin(l-c)*-d,b=Math.cos(l-c)*d,c&&(u*=Fs,g=Math.tan(c-u),g=Math.sqrt(1+g*g),U*=g,b*=g,u&&(g=Math.tan(u),g=Math.sqrt(1+g*g),E*=g,y*=g)),E=Ft(E),y=Ft(y),U=Ft(U),b=Ft(b)):(E=f,b=d,y=U=0),(x&&!~(a+"").indexOf("px")||_&&!~(o+"").indexOf("px"))&&(x=Ur(h,"x",a,"px"),_=Ur(h,"y",o,"px")),(S||m||Y||p)&&(x=Ft(x+S-(S*E+m*U)+Y),_=Ft(_+m-(S*y+m*b)+p)),(r||s)&&(g=h.getBBox(),x=Ft(x+r/100*g.width),_=Ft(_+s/100*g.height)),g="matrix("+E+","+y+","+U+","+b+","+x+","+_+")",h.setAttribute("transform",g),v&&(h.style[wt]=g)},oS=function(e,t,n,r,s){var a=360,o=nn(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Lr:1),c=l-r,u=r+c+"deg",f,d;return o&&(f=s.split("_")[1],f==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),f==="cw"&&c<0?c=(c+a*Sh)%a-~~(c/a)*a:f==="ccw"&&c>0&&(c=(c-a*Sh)%a-~~(c/a)*a)),e._pt=d=new bn(e._pt,t,n,r,c,B0),d.e=u,d.u="deg",e._props.push(n),d},vh=function(e,t){for(var n in t)e[n]=t[n];return e},lS=function(e,t,n){var r=vh({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,f,d,h,S;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[wt]=t,o=no(n,1),Mr(n,wt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[wt],a[wt]=t,o=no(n,1),a[wt]=c);for(l in qi)c=r[l],u=o[l],c!==u&&s.indexOf(l)<0&&(h=fn(c),S=fn(u),f=h!==S?Ur(n,l,c,S):parseFloat(c),d=parseFloat(u),e._pt=new bn(e._pt,o,l,f,d-f,au),e._pt.u=S||0,e._props.push(l));vh(o,r)};An("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",r="Bottom",s="Left",a=(e<3?[t,n,r,s]:[t+s,t+n,r+n,r+s]).map(function(o){return e<2?i+o:"border"+o+i});Rl[e>1?"border"+i:i]=function(o,l,c,u,f){var d,h;if(arguments.length<4)return d=a.map(function(S){return Gi(o,S,c)}),h=d.join(" "),h.split(d[0]).length===5?d[0]:h;d=(u+"").split(" "),h={},a.forEach(function(S,m){return h[S]=d[m]=d[m]||d[(m-1)/2|0]}),o.init(l,h,f)}});var qp={name:"css",register:lu,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,f,d,h,S,m,Y,p,v,x,_,E,y,U,b,g;Pf||lu(),this.styles=this.styles||Hp(e),b=this.styles.props,this.tween=n;for(m in t)if(m!=="autoRound"&&(u=t[m],!(Gn[m]&&Rp(m,t,n,r,e,s)))){if(h=typeof u,S=Rl[m],h==="function"&&(u=u.call(n,r,e,s),h=typeof u),h==="string"&&~u.indexOf("random(")&&(u=qa(u)),S)S(this,e,m,u,n)&&(U=1);else if(m.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(m)+"").trim(),u+="",Sr.lastIndex=0,Sr.test(c)||(Y=fn(c),p=fn(u),p?Y!==p&&(c=Ur(e,m,c,p)+p):Y&&(u+=Y)),this.add(o,"setProperty",c,u,r,s,0,0,m),a.push(m),b.push(m,0,o[m]);else if(h!=="undefined"){if(l&&m in l?(c=typeof l[m]=="function"?l[m].call(n,r,e,s):l[m],nn(c)&&~c.indexOf("random(")&&(c=qa(c)),fn(c+"")||c==="auto"||(c+=$n.units[m]||fn(Gi(e,m))||""),(c+"").charAt(1)==="="&&(c=Gi(e,m))):c=Gi(e,m),d=parseFloat(c),v=h==="string"&&u.charAt(1)==="="&&u.substr(0,2),v&&(u=u.substr(2)),f=parseFloat(u),m in xi&&(m==="autoAlpha"&&(d===1&&Gi(e,"visibility")==="hidden"&&f&&(d=0),b.push("visibility",0,o.visibility),dr(this,o,"visibility",d?"inherit":"hidden",f?"inherit":"hidden",!f)),m!=="scale"&&m!=="transform"&&(m=xi[m],~m.indexOf(",")&&(m=m.split(",")[0]))),x=m in qi,x){if(this.styles.save(m),g=u,h==="string"&&u.substring(0,6)==="var(--"){if(u=zn(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var T=e.style.perspective;e.style.perspective=u,u=zn(e,"perspective"),T?e.style.perspective=T:Mr(e,"perspective")}f=parseFloat(u)}if(_||(E=e._gsap,E.renderTransform&&!t.parseTransform||no(e,t.parseTransform),y=t.smoothOrigin!==!1&&E.smooth,_=this._pt=new bn(this._pt,o,wt,0,1,E.renderTransform,E,0,-1),_.dep=1),m==="scale")this._pt=new bn(this._pt,E,"scaleY",E.scaleY,(v?Ns(E.scaleY,v+f):f)-E.scaleY||0,au),this._pt.u=0,a.push("scaleY",m),m+="X";else if(m==="transformOrigin"){b.push(Pn,0,o[Pn]),u=iS(u),E.svg?cu(e,u,0,y,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==E.zOrigin&&dr(this,E,"zOrigin",E.zOrigin,p),dr(this,o,m,Il(c),Il(u)));continue}else if(m==="svgOrigin"){cu(e,u,1,y,0,this);continue}else if(m in Kp){oS(this,E,m,d,v?Ns(d,v+u):u);continue}else if(m==="smoothOrigin"){dr(this,E,"smooth",E.smooth,u);continue}else if(m==="force3D"){E[m]=u;continue}else if(m==="transform"){lS(this,u,e);continue}}else m in o||(m=ea(m)||m);if(x||(f||f===0)&&(d||d===0)&&!G0.test(u)&&m in o)Y=(c+"").substr((d+"").length),f||(f=0),p=fn(u)||(m in $n.units?$n.units[m]:Y),Y!==p&&(d=Ur(e,m,c,p)),this._pt=new bn(this._pt,x?E:o,m,d,(v?Ns(d,v+f):f)-d,!x&&(p==="px"||m==="zIndex")&&t.autoRound!==!1?k0:au),this._pt.u=p||0,x&&g!==u?(this._pt.b=c,this._pt.e=g,this._pt.r=H0):Y!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=Z0);else if(m in o)nS.call(this,e,m,c,v?v+u:u);else if(m in e)this.add(e,m,c||e[m],v?v+u:u,r,s);else if(m!=="parseTransform"){Wf(m,u);continue}x||(m in o?b.push(m,0,o[m]):typeof e[m]=="function"?b.push(m,2,e[m]()):b.push(m,1,c||e[m])),a.push(m)}}U&&Op(this)},render:function(e,t){if(t.tween._time||!Xf())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Gi,aliases:xi,getSetter:function(e,t,n){var r=xi[t];return r&&r.indexOf(",")<0&&(t=r),t in qi&&t!==Pn&&(e._gsap.x||Gi(e,"x"))?n&&mh===n?t==="scale"?Q0:K0:(mh=n||{})&&(t==="scale"?J0:q0):e.style&&!_f(e.style[t])?z0:~t.indexOf("-")?$0:Af(e,t)},core:{_removeProperty:Mr,_getMatrix:Rf}};Rn.utils.checkPrefix=ea;Rn.core.getStyleSaver=Hp;(function(i,e,t,n){var r=An(i+","+e+","+t,function(s){qi[s]=1});An(e,function(s){$n.units[s]="deg",Kp[s]=1}),xi[r[13]]=i+","+e,An(n,function(s){var a=s.split(":");xi[a[1]]=r[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");An("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){$n.units[i]="px"});Rn.registerPlugin(qp);var la=Rn.registerPlugin(qp)||Rn;la.core.Tween;function cS(i,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,n.key,n)}}function uS(i,e,t){return e&&cS(i.prototype,e),i}var rn,Sl,Hn,pr,Yr,Gs,jp,Dr,Bs,eY,zi,di,tY,nY=function(){return rn||typeof window<"u"&&(rn=window.gsap)&&rn.registerPlugin&&rn},iY=1,Ls=[],rt=[],bi=[],wa=Date.now,uu=function(e,t){return t},fS=function(){var e=Bs.core,t=e.bridge||{},n=e._scrollers,r=e._proxies;n.push.apply(n,rt),r.push.apply(r,bi),rt=n,bi=r,uu=function(a,o){return t[a](o)}},_r=function(e,t){return~bi.indexOf(e)&&bi[bi.indexOf(e)+1][t]},La=function(e){return!!~eY.indexOf(e)},Sn=function(e,t,n,r,s){return e.addEventListener(t,n,{passive:r!==!1,capture:!!s})},mn=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},xo="scrollLeft",Eo="scrollTop",fu=function(){return zi&&zi.isPressed||rt.cache++},wl=function(e,t){var n=function r(s){if(s||s===0){iY&&(Hn.history.scrollRestoration="manual");var a=zi&&zi.isPressed;s=r.v=Math.round(s)||(zi&&zi.iOS?1:0),e(s),r.cacheID=rt.cache,a&&uu("ss",s)}else(t||rt.cache!==r.cacheID||uu("ref"))&&(r.cacheID=rt.cache,r.v=e());return r.v+r.offset};return n.offset=0,e&&n},Un={s:xo,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:wl(function(i){return arguments.length?Hn.scrollTo(i,Qt.sc()):Hn.pageXOffset||pr[xo]||Yr[xo]||Gs[xo]||0})},Qt={s:Eo,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Un,sc:wl(function(i){return arguments.length?Hn.scrollTo(Un.sc(),i):Hn.pageYOffset||pr[Eo]||Yr[Eo]||Gs[Eo]||0})},En=function(e,t){return(t&&t._ctx&&t._ctx.selector||rn.utils.toArray)(e)[0]||(typeof e=="string"&&rn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},hS=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},vr=function(e,t){var n=t.s,r=t.sc;La(e)&&(e=pr.scrollingElement||Yr);var s=rt.indexOf(e),a=r===Qt.sc?1:2;!~s&&(s=rt.push(e)-1),rt[s+a]||Sn(e,"scroll",fu);var o=rt[s+a],l=o||(rt[s+a]=wl(_r(e,n),!0)||(La(e)?r:wl(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=rn.getProperty(e,"scrollBehavior")==="smooth"),l},hu=function(e,t,n){var r=e,s=e,a=wa(),o=a,l=t||50,c=Math.max(500,l*3),u=function(S,m){var Y=wa();m||Y-a>l?(s=r,r=S,o=a,a=Y):n?r+=S:r=s+(S-s)/(Y-o)*(a-o)},f=function(){s=r=n?0:r,o=a=0},d=function(S){var m=o,Y=s,p=wa();return(S||S===0)&&S!==r&&u(S),a===o||p-o>c?0:(r+(n?Y:-Y))/((n?p:a)-m)*1e3};return{update:u,reset:f,getVelocity:d}},ma=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},xh=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},rY=function(){Bs=rn.core.globals().ScrollTrigger,Bs&&Bs.core&&fS()},sY=function(e){return rn=e||nY(),!Sl&&rn&&typeof document<"u"&&document.body&&(Hn=window,pr=document,Yr=pr.documentElement,Gs=pr.body,eY=[Hn,pr,Yr,Gs],rn.utils.clamp,tY=rn.core.context||function(){},Dr="onpointerenter"in Gs?"pointer":"mouse",jp=Bt.isTouch=Hn.matchMedia&&Hn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Hn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,di=Bt.eventTypes=("ontouchstart"in Yr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Yr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return iY=0},500),Sl=1),Bs||rY(),Sl};Un.op=Qt;rt.cache=0;var Bt=(function(){function i(t){this.init(t)}var e=i.prototype;return e.init=function(n){Sl||sY(rn)||console.warn("Please gsap.registerPlugin(Observer)"),Bs||rY();var r=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,f=n.onStop,d=n.onStopDelay,h=n.ignore,S=n.wheelSpeed,m=n.event,Y=n.onDragStart,p=n.onDragEnd,v=n.onDrag,x=n.onPress,_=n.onRelease,E=n.onRight,y=n.onLeft,U=n.onUp,b=n.onDown,g=n.onChangeX,T=n.onChangeY,C=n.onChange,R=n.onToggleX,O=n.onToggleY,Z=n.onHover,B=n.onHoverEnd,H=n.onMove,G=n.ignoreCheck,N=n.isNormalizer,ne=n.onGestureStart,P=n.onGestureEnd,fe=n.onWheel,Le=n.onEnable,tt=n.onDisable,He=n.onClick,Ze=n.scrollSpeed,K=n.capture,q=n.allowClicks,de=n.lockAxis,Ve=n.onLockAxis;this.target=o=En(o)||Yr,this.vars=n,h&&(h=rn.utils.toArray(h)),r=r||1e-9,s=s||0,S=S||1,Ze=Ze||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Hn.getComputedStyle(Gs).lineHeight)||22);var ve,Fe,ft,A,ke,Ce,Ae,I=this,nt=0,_e=0,Ge=n.passive||!u&&n.passive!==!1,Ke=vr(o,Un),Yt=vr(o,Qt),V=Ke(),W=Yt(),D=~a.indexOf("touch")&&!~a.indexOf("pointer")&&di[0]==="pointerdown",Q=La(o),J=o.ownerDocument||pr,$=[0,0,0],Te=[0,0,0],se=0,xe=function(){return se=wa()},he=function(be,$e){return(I.event=be)&&h&&hS(be.target,h)||$e&&D&&be.pointerType!=="touch"||G&&G(be,$e)},re=function(){I._vx.reset(),I._vy.reset(),Fe.pause(),f&&f(I)},ue=function(){var be=I.deltaX=xh($),$e=I.deltaY=xh(Te),pe=Math.abs(be)>=r,Ne=Math.abs($e)>=r;C&&(pe||Ne)&&C(I,be,$e,$,Te),pe&&(E&&I.deltaX>0&&E(I),y&&I.deltaX<0&&y(I),g&&g(I),R&&I.deltaX<0!=nt<0&&R(I),nt=I.deltaX,$[0]=$[1]=$[2]=0),Ne&&(b&&I.deltaY>0&&b(I),U&&I.deltaY<0&&U(I),T&&T(I),O&&I.deltaY<0!=_e<0&&O(I),_e=I.deltaY,Te[0]=Te[1]=Te[2]=0),(A||ft)&&(H&&H(I),ft&&(Y&&ft===1&&Y(I),v&&v(I),ft=0),A=!1),Ce&&!(Ce=!1)&&Ve&&Ve(I),ke&&(fe(I),ke=!1),ve=0},Ie=function(be,$e,pe){$[pe]+=be,Te[pe]+=$e,I._vx.update(be),I._vy.update($e),c?ve||(ve=requestAnimationFrame(ue)):ue()},Ee=function(be,$e){de&&!Ae&&(I.axis=Ae=Math.abs(be)>Math.abs($e)?"x":"y",Ce=!0),Ae!=="y"&&($[2]+=be,I._vx.update(be,!0)),Ae!=="x"&&(Te[2]+=$e,I._vy.update($e,!0)),c?ve||(ve=requestAnimationFrame(ue)):ue()},ce=function(be){if(!he(be,1)){be=ma(be,u);var $e=be.clientX,pe=be.clientY,Ne=$e-I.x,Re=pe-I.y,ze=I.isDragging;I.x=$e,I.y=pe,(ze||(Ne||Re)&&(Math.abs(I.startX-$e)>=s||Math.abs(I.startY-pe)>=s))&&(ft||(ft=ze?2:1),ze||(I.isDragging=!0),Ee(Ne,Re))}},Be=I.onPress=function(Se){he(Se,1)||Se&&Se.button||(I.axis=Ae=null,Fe.pause(),I.isPressed=!0,Se=ma(Se),nt=_e=0,I.startX=I.x=Se.clientX,I.startY=I.y=Se.clientY,I._vx.reset(),I._vy.reset(),Sn(N?o:J,di[1],ce,Ge,!0),I.deltaX=I.deltaY=0,x&&x(I))},X=I.onRelease=function(Se){if(!he(Se,1)){mn(N?o:J,di[1],ce,!0);var be=!isNaN(I.y-I.startY),$e=I.isDragging,pe=$e&&(Math.abs(I.x-I.startX)>3||Math.abs(I.y-I.startY)>3),Ne=ma(Se);!pe&&be&&(I._vx.reset(),I._vy.reset(),u&&q&&rn.delayedCall(.08,function(){if(wa()-se>300&&!Se.defaultPrevented){if(Se.target.click)Se.target.click();else if(J.createEvent){var Re=J.createEvent("MouseEvents");Re.initMouseEvent("click",!0,!0,Hn,1,Ne.screenX,Ne.screenY,Ne.clientX,Ne.clientY,!1,!1,!1,!1,0,null),Se.target.dispatchEvent(Re)}}})),I.isDragging=I.isGesturing=I.isPressed=!1,f&&$e&&!N&&Fe.restart(!0),ft&&ue(),p&&$e&&p(I),_&&_(I,pe)}},ie=function(be){return be.touches&&be.touches.length>1&&(I.isGesturing=!0)&&ne(be,I.isDragging)},ae=function(){return(I.isGesturing=!1)||P(I)},Ye=function(be){if(!he(be)){var $e=Ke(),pe=Yt();Ie(($e-V)*Ze,(pe-W)*Ze,1),V=$e,W=pe,f&&Fe.restart(!0)}},te=function(be){if(!he(be)){be=ma(be,u),fe&&(ke=!0);var $e=(be.deltaMode===1?l:be.deltaMode===2?Hn.innerHeight:1)*S;Ie(be.deltaX*$e,be.deltaY*$e,0),f&&!N&&Fe.restart(!0)}},j=function(be){if(!he(be)){var $e=be.clientX,pe=be.clientY,Ne=$e-I.x,Re=pe-I.y;I.x=$e,I.y=pe,A=!0,f&&Fe.restart(!0),(Ne||Re)&&Ee(Ne,Re)}},We=function(be){I.event=be,Z(I)},De=function(be){I.event=be,B(I)},ht=function(be){return he(be)||ma(be,u)&&He(I)};Fe=I._dc=rn.delayedCall(d||.25,re).pause(),I.deltaX=I.deltaY=0,I._vx=hu(0,50,!0),I._vy=hu(0,50,!0),I.scrollX=Ke,I.scrollY=Yt,I.isDragging=I.isGesturing=I.isPressed=!1,tY(this),I.enable=function(Se){return I.isEnabled||(Sn(Q?J:o,"scroll",fu),a.indexOf("scroll")>=0&&Sn(Q?J:o,"scroll",Ye,Ge,K),a.indexOf("wheel")>=0&&Sn(o,"wheel",te,Ge,K),(a.indexOf("touch")>=0&&jp||a.indexOf("pointer")>=0)&&(Sn(o,di[0],Be,Ge,K),Sn(J,di[2],X),Sn(J,di[3],X),q&&Sn(o,"click",xe,!0,!0),He&&Sn(o,"click",ht),ne&&Sn(J,"gesturestart",ie),P&&Sn(J,"gestureend",ae),Z&&Sn(o,Dr+"enter",We),B&&Sn(o,Dr+"leave",De),H&&Sn(o,Dr+"move",j)),I.isEnabled=!0,I.isDragging=I.isGesturing=I.isPressed=A=ft=!1,I._vx.reset(),I._vy.reset(),V=Ke(),W=Yt(),Se&&Se.type&&Be(Se),Le&&Le(I)),I},I.disable=function(){I.isEnabled&&(Ls.filter(function(Se){return Se!==I&&La(Se.target)}).length||mn(Q?J:o,"scroll",fu),I.isPressed&&(I._vx.reset(),I._vy.reset(),mn(N?o:J,di[1],ce,!0)),mn(Q?J:o,"scroll",Ye,K),mn(o,"wheel",te,K),mn(o,di[0],Be,K),mn(J,di[2],X),mn(J,di[3],X),mn(o,"click",xe,!0),mn(o,"click",ht),mn(J,"gesturestart",ie),mn(J,"gestureend",ae),mn(o,Dr+"enter",We),mn(o,Dr+"leave",De),mn(o,Dr+"move",j),I.isEnabled=I.isPressed=I.isDragging=!1,tt&&tt(I))},I.kill=I.revert=function(){I.disable();var Se=Ls.indexOf(I);Se>=0&&Ls.splice(Se,1),zi===I&&(zi=0)},Ls.push(I),N&&La(o)&&(zi=I),I.enable(m)},uS(i,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),i})();Bt.version="3.15.0";Bt.create=function(i){return new Bt(i)};Bt.register=sY;Bt.getAll=function(){return Ls.slice()};Bt.getById=function(i){return Ls.filter(function(e){return e.vars.id===i})[0]};nY()&&rn.registerPlugin(Bt);var Ue,Ps,it,Tt,Bn,mt,If,Ll,io,Da,ya,yo,ln,zl,du,Wn,Eh,yh,Xs,aY,cc,oY,gn,pu,lY,cY,cr,Yu,wf,Zs,Lf,Na,mu,uc,Vo=1,un=Date.now,fc=un(),li=0,Va=0,Vh=function(e,t,n){var r=Fn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},Ah=function(e,t){return t&&(!Fn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},dS=function i(){return Va&&requestAnimationFrame(i)},bh=function(){return zl=1},Ph=function(){return zl=0},gi=function(e){return e},Aa=function(e){return Math.round(e*1e5)/1e5||0},uY=function(){return typeof window<"u"},fY=function(){return Ue||uY()&&(Ue=window.gsap)&&Ue.registerPlugin&&Ue},rs=function(e){return!!~If.indexOf(e)},hY=function(e){return(e==="Height"?Lf:it["inner"+e])||Bn["client"+e]||mt["client"+e]},dY=function(e){return _r(e,"getBoundingClientRect")||(rs(e)?function(){return Ml.width=it.innerWidth,Ml.height=Lf,Ml}:function(){return Bi(e)})},pS=function(e,t,n){var r=n.d,s=n.d2,a=n.a;return(a=_r(e,"getBoundingClientRect"))?function(){return a()[r]}:function(){return(t?hY(s):e["client"+s])||0}},YS=function(e,t){return!t||~bi.indexOf(e)?dY(e):function(){return Ml}},Ei=function(e,t){var n=t.s,r=t.d2,s=t.d,a=t.a;return Math.max(0,(n="scroll"+r)&&(a=_r(e,n))?a()-dY(e)()[s]:rs(e)?(Bn[n]||mt[n])-hY(r):e[n]-e["offset"+r])},Ao=function(e,t){for(var n=0;n<Xs.length;n+=3)(!t||~t.indexOf(Xs[n+1]))&&e(Xs[n],Xs[n+1],Xs[n+2])},Fn=function(e){return typeof e=="string"},hn=function(e){return typeof e=="function"},ba=function(e){return typeof e=="number"},Nr=function(e){return typeof e=="object"},Sa=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},ds=function(e,t,n){if(e.enabled){var r=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);r&&r.totalTime&&(e.callbackAnimation=r)}},ps=Math.abs,pY="left",YY="top",Df="right",Nf="bottom",jr="width",es="height",Oa="Right",Fa="Left",Ga="Top",Ba="Bottom",Ht="padding",ii="margin",ta="Width",Of="Height",Kt="px",ri=function(e){return it.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},mS=function(e){var t=ri(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Xh=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Bi=function(e,t){var n=t&&ri(e)[du]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ue.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),r},Dl=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},mY=function(e){var t=[],n=e.labels,r=e.duration(),s;for(s in n)t.push(n[s]/r);return t},SS=function(e){return function(t){return Ue.utils.snap(mY(e),t)}},Ff=function(e){var t=Ue.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return n?function(r,s,a){a===void 0&&(a=.001);var o;if(!s)return t(r);if(s>0){for(r-=a,o=0;o<n.length;o++)if(n[o]>=r)return n[o];return n[o-1]}else for(o=n.length,r+=a;o--;)if(n[o]<=r)return n[o];return n[0]}:function(r,s,a){a===void 0&&(a=.001);var o=t(r);return!s||Math.abs(o-r)<a||o-r<0==s<0?o:t(s<0?r-e:r+e)}},_S=function(e){return function(t,n){return Ff(mY(e))(t,n.direction)}},bo=function(e,t,n,r){return n.split(",").forEach(function(s){return e(t,s,r)})},tn=function(e,t,n,r,s){return e.addEventListener(t,n,{passive:!r,capture:!!s})},en=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},Po=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Ch={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Xo={toggleActions:"play",anticipatePin:0},Nl={top:0,left:0,center:.5,bottom:1,right:1},_l=function(e,t){if(Fn(e)){var n=e.indexOf("="),r=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(r*=t/100),e=e.substr(0,n-1)),e=r+(e in Nl?Nl[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Co=function(e,t,n,r,s,a,o,l){var c=s.startColor,u=s.endColor,f=s.fontSize,d=s.indent,h=s.fontWeight,S=Tt.createElement("div"),m=rs(n)||_r(n,"pinType")==="fixed",Y=e.indexOf("scroller")!==-1,p=m?mt:n.tagName==="IFRAME"?n.contentDocument.body:n,v=e.indexOf("start")!==-1,x=v?c:u,_="border-color:"+x+";font-size:"+f+";color:"+x+";font-weight:"+h+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return _+="position:"+((Y||l)&&m?"fixed;":"absolute;"),(Y||l||!m)&&(_+=(r===Qt?Df:Nf)+":"+(a+parseFloat(d))+"px;"),o&&(_+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),S._isStart=v,S.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),S.style.cssText=_,S.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(S,p.children[0]):p.appendChild(S),S._offset=S["offset"+r.op.d2],Tl(S,0,r,v),S},Tl=function(e,t,n,r){var s={display:"block"},a=n[r?"os2":"p2"],o=n[r?"p2":"os2"];e._isFlipped=r,s[n.a+"Percent"]=r?-100:0,s[n.a]=r?"1px":0,s["border"+a+ta]=1,s["border"+o+ta]=0,s[n.p]=t+"px",Ue.set(e,s)},et=[],Su={},ro,Rh=function(){return un()-li>34&&(ro||(ro=requestAnimationFrame(Ki)))},Ys=function(){(!gn||!gn.isPressed||gn.startX>mt.clientWidth)&&(rt.cache++,gn?ro||(ro=requestAnimationFrame(Ki)):Ki(),li||as("scrollStart"),li=un())},hc=function(){cY=it.innerWidth,lY=it.innerHeight},Pa=function(e){rt.cache++,(e===!0||!ln&&!oY&&!Tt.fullscreenElement&&!Tt.webkitFullscreenElement&&(!pu||cY!==it.innerWidth||Math.abs(it.innerHeight-lY)>it.innerHeight*.25))&&Ll.restart(!0)},ss={},TS=[],SY=function i(){return en(at,"scrollEnd",i)||Hr(!0)},as=function(e){return ss[e]&&ss[e].map(function(t){return t()})||TS},On=[],_Y=function(e){for(var t=0;t<On.length;t+=5)(!e||On[t+4]&&On[t+4].query===e)&&(On[t].style.cssText=On[t+1],On[t].getBBox&&On[t].setAttribute("transform",On[t+2]||""),On[t+3].uncache=1)},TY=function(){return rt.forEach(function(e){return hn(e)&&++e.cacheID&&(e.rec=e())})},Gf=function(e,t){var n;for(Wn=0;Wn<et.length;Wn++)n=et[Wn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Na=!0,t&&_Y(t),t||as("revert")},gY=function(e,t){rt.cache++,(t||!Mn)&&rt.forEach(function(n){return hn(n)&&n.cacheID++&&(n.rec=0)}),Fn(e)&&(it.history.scrollRestoration=wf=e)},Mn,ts=0,Ih,gS=function(){if(Ih!==ts){var e=Ih=ts;requestAnimationFrame(function(){return e===ts&&Hr(!0)})}},WY=function(){mt.appendChild(Zs),Lf=!gn&&Zs.offsetHeight||it.innerHeight,mt.removeChild(Zs)},wh=function(e){return io(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Hr=function(e,t){if(Bn=Tt.documentElement,mt=Tt.body,If=[it,Tt,Bn,mt],li&&!e&&!Na){tn(at,"scrollEnd",SY);return}WY(),Mn=at.isRefreshing=!0,Na||TY();var n=as("refreshInit");aY&&at.sort(),t||Gf(),rt.forEach(function(r){hn(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),et.slice(0).forEach(function(r){return r.refresh()}),Na=!1,et.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",a=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-a),r.refresh()}}),mu=1,wh(!0),et.forEach(function(r){var s=Ei(r.scroller,r._dir),a=r.vars.end==="max"||r._endClamp&&r.end>s,o=r._startClamp&&r.start>=s;(a||o)&&r.setPositions(o?s-1:r.start,a?Math.max(o?s:r.start+1,s):r.end,!0)}),wh(!1),mu=0,n.forEach(function(r){return r&&r.render&&r.render(-1)}),rt.forEach(function(r){hn(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),gY(wf,1),Ll.pause(),ts++,Mn=2,Ki(2),et.forEach(function(r){return hn(r.vars.onRefresh)&&r.vars.onRefresh(r)}),Mn=at.isRefreshing=!1,as("refresh")},_u=0,gl=1,Za,Ki=function(e){if(e===2||!Mn&&!Na){at.isUpdating=!0,Za&&Za.update(0);var t=et.length,n=un(),r=n-fc>=50,s=t&&et[0].scroll();if(gl=_u>s?-1:1,Mn||(_u=s),r&&(li&&!zl&&n-li>200&&(li=0,as("scrollEnd")),ya=fc,fc=n),gl<0){for(Wn=t;Wn-- >0;)et[Wn]&&et[Wn].update(0,r);gl=1}else for(Wn=0;Wn<t;Wn++)et[Wn]&&et[Wn].update(0,r);at.isUpdating=!1}ro=0},Tu=[pY,YY,Nf,Df,ii+Ba,ii+Oa,ii+Ga,ii+Fa,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Wl=Tu.concat([jr,es,"boxSizing","max"+ta,"max"+Of,"position",ii,Ht,Ht+Ga,Ht+Oa,Ht+Ba,Ht+Fa]),WS=function(e,t,n){Hs(n);var r=e._gsap;if(r.spacerIsNative)Hs(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},dc=function(e,t,n,r){if(!e._gsap.swappedIn){for(var s=Tu.length,a=t.style,o=e.style,l;s--;)l=Tu[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[Nf]=o[Df]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[jr]=Dl(e,Un)+Kt,a[es]=Dl(e,Qt)+Kt,a[Ht]=o[ii]=o[YY]=o[pY]="0",Hs(r),o[jr]=o["max"+ta]=n[jr],o[es]=o["max"+Of]=n[es],o[Ht]=n[Ht],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},MS=/([A-Z])/g,Hs=function(e){if(e){var t=e.t.style,n=e.length,r=0,s,a;for((e.t._gsap||Ue.core.getCache(e.t)).uncache=1;r<n;r+=2)a=e[r+1],s=e[r],a?t[s]=a:t[s]&&t.removeProperty(s.replace(MS,"-$1").toLowerCase())}},Ro=function(e){for(var t=Wl.length,n=e.style,r=[],s=0;s<t;s++)r.push(Wl[s],n[Wl[s]]);return r.t=e,r},US=function(e,t,n){for(var r=[],s=e.length,a=n?8:0,o;a<s;a+=2)o=e[a],r.push(o,o in t?t[o]:e[a+1]);return r.t=e.t,r},Ml={left:0,top:0},Lh=function(e,t,n,r,s,a,o,l,c,u,f,d,h,S){hn(e)&&(e=e(l)),Fn(e)&&e.substr(0,3)==="max"&&(e=d+(e.charAt(4)==="="?_l("0"+e.substr(3),n):0));var m=h?h.time():0,Y,p,v;if(h&&h.seek(0),isNaN(e)||(e=+e),ba(e))h&&(e=Ue.utils.mapRange(h.scrollTrigger.start,h.scrollTrigger.end,0,d,e)),o&&Tl(o,n,r,!0);else{hn(t)&&(t=t(l));var x=(e||"0").split(" "),_,E,y,U;v=En(t,l)||mt,_=Bi(v)||{},(!_||!_.left&&!_.top)&&ri(v).display==="none"&&(U=v.style.display,v.style.display="block",_=Bi(v),U?v.style.display=U:v.style.removeProperty("display")),E=_l(x[0],_[r.d]),y=_l(x[1]||"0",n),e=_[r.p]-c[r.p]-u+E+s-y,o&&Tl(o,y,r,n-y<20||o._isStart&&y>20),n-=n-y}if(S&&(l[S]=e||-.001,e<0&&(e=0)),a){var b=e+n,g=a._isStart;Y="scroll"+r.d2,Tl(a,b,r,g&&b>20||!g&&(f?Math.max(mt[Y],Bn[Y]):a.parentNode[Y])<=b+1),f&&(c=Bi(o),f&&(a.style[r.op.p]=c[r.op.p]-r.op.m-a._offset+Kt))}return h&&v&&(Y=Bi(v),h.seek(d),p=Bi(v),h._caScrollDist=Y[r.p]-p[r.p],e=e/h._caScrollDist*d),h&&h.seek(m),h?e:Math.round(e)},vS=/(webkit|moz|length|cssText|inset)/i,Dh=function(e,t,n,r){if(e.parentNode!==t){var s=e.style,a,o;if(t===mt){e._stOrig=s.cssText,o=ri(e);for(a in o)!+a&&!vS.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=r}else s.cssText=e._stOrig;Ue.core.getCache(e).uncache=1,t.appendChild(e)}},MY=function(e,t,n){var r=t,s=r;return function(a){var o=Math.round(e());return o!==r&&o!==s&&Math.abs(o-r)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=r,r=Math.round(a),r}},Io=function(e,t,n){var r={};r[t.p]="+="+n,Ue.set(e,r)},Nh=function(e,t){var n=vr(e,t),r="_scroll"+t.p2,s=function a(o,l,c,u,f){var d=a.tween,h=l.onComplete,S={};c=c||n();var m=MY(n,c,function(){d.kill(),a.tween=0});return f=u&&f||0,u=u||o-c,d&&d.kill(),l[r]=o,l.inherit=!1,l.modifiers=S,S[r]=function(){return m(c+u*d.ratio+f*d.ratio*d.ratio)},l.onUpdate=function(){rt.cache++,a.tween&&Ki()},l.onComplete=function(){a.tween=0,h&&h.call(d)},d=a.tween=Ue.to(e,l),d};return e[r]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},tn(e,"wheel",n.wheelHandler),at.isTouch&&tn(e,"touchmove",n.wheelHandler),s},at=(function(){function i(t,n){Ps||i.register(Ue)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Yu(this),this.init(t,n)}var e=i.prototype;return e.init=function(n,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Va){this.update=this.refresh=this.kill=gi;return}n=Xh(Fn(n)||ba(n)||n.nodeType?{trigger:n}:n,Xo);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,f=s.scrub,d=s.trigger,h=s.pin,S=s.pinSpacing,m=s.invalidateOnRefresh,Y=s.anticipatePin,p=s.onScrubComplete,v=s.onSnapComplete,x=s.once,_=s.snap,E=s.pinReparent,y=s.pinSpacer,U=s.containerAnimation,b=s.fastScrollEnd,g=s.preventOverlaps,T=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Un:Qt,C=!f&&f!==0,R=En(n.scroller||it),O=Ue.core.getCache(R),Z=rs(R),B=("pinType"in n?n.pinType:_r(R,"pinType")||Z&&"fixed")==="fixed",H=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],G=C&&n.toggleActions.split(" "),N="markers"in n?n.markers:Xo.markers,ne=Z?0:parseFloat(ri(R)["border"+T.p2+ta])||0,P=this,fe=n.onRefreshInit&&function(){return n.onRefreshInit(P)},Le=pS(R,Z,T),tt=YS(R,Z),He=0,Ze=0,K=0,q=vr(R,T),de,Ve,ve,Fe,ft,A,ke,Ce,Ae,I,nt,_e,Ge,Ke,Yt,V,W,D,Q,J,$,Te,se,xe,he,re,ue,Ie,Ee,ce,Be,X,ie,ae,Ye,te,j,We,De;if(P._startClamp=P._endClamp=!1,P._dir=T,Y*=45,P.scroller=R,P.scroll=U?U.time.bind(U):q,Fe=q(),P.vars=n,r=r||n.animation,"refreshPriority"in n&&(aY=1,n.refreshPriority===-9999&&(Za=P)),O.tweenScroll=O.tweenScroll||{top:Nh(R,Qt),left:Nh(R,Un)},P.tweenTo=de=O.tweenScroll[T.p],P.scrubDuration=function(pe){ie=ba(pe)&&pe,ie?X?X.duration(pe):X=Ue.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ie,paused:!0,onComplete:function(){return p&&p(P)}}):(X&&X.progress(1).kill(),X=0)},r&&(r.vars.lazy=!1,r._initted&&!P.isReverted||r.vars.immediateRender!==!1&&n.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),P.animation=r.pause(),r.scrollTrigger=P,P.scrubDuration(f),ce=0,l||(l=r.vars.id)),_&&((!Nr(_)||_.push)&&(_={snapTo:_}),"scrollBehavior"in mt.style&&Ue.set(Z?[mt,Bn]:R,{scrollBehavior:"auto"}),rt.forEach(function(pe){return hn(pe)&&pe.target===(Z?Tt.scrollingElement||Bn:R)&&(pe.smooth=!1)}),ve=hn(_.snapTo)?_.snapTo:_.snapTo==="labels"?SS(r):_.snapTo==="labelsDirectional"?_S(r):_.directional!==!1?function(pe,Ne){return Ff(_.snapTo)(pe,un()-Ze<500?0:Ne.direction)}:Ue.utils.snap(_.snapTo),ae=_.duration||{min:.1,max:2},ae=Nr(ae)?Da(ae.min,ae.max):Da(ae,ae),Ye=Ue.delayedCall(_.delay||ie/2||.1,function(){var pe=q(),Ne=un()-Ze<500,Re=de.tween;if((Ne||Math.abs(P.getVelocity())<10)&&!Re&&!zl&&He!==pe){var ze=(pe-A)/Ke,Nt=r&&!C?r.totalProgress():ze,qe=Ne?0:(Nt-Be)/(un()-ya)*1e3||0,bt=Ue.utils.clamp(-ze,1-ze,ps(qe/2)*qe/.185),Ot=ze+(_.inertia===!1?0:bt),yt,Ut,_t=_,In=_t.onStart,Vt=_t.onInterrupt,pn=_t.onComplete;if(yt=ve(Ot,P),ba(yt)||(yt=Ot),Ut=Math.max(0,Math.round(A+yt*Ke)),pe<=ke&&pe>=A&&Ut!==pe){if(Re&&!Re._initted&&Re.data<=ps(Ut-pe))return;_.inertia===!1&&(bt=yt-ze),de(Ut,{duration:ae(ps(Math.max(ps(Ot-Nt),ps(yt-Nt))*.185/qe/.05||0)),ease:_.ease||"power3",data:ps(Ut-pe),onInterrupt:function(){return Ye.restart(!0)&&Vt&&ds(P,Vt)},onComplete:function(){P.update(),He=q(),r&&!C&&(X?X.resetTo("totalProgress",yt,r._tTime/r._tDur):r.progress(yt)),ce=Be=r&&!C?r.totalProgress():P.progress,v&&v(P),pn&&ds(P,pn)}},pe,bt*Ke,Ut-pe-bt*Ke),In&&ds(P,In,de.tween)}}else P.isActive&&He!==pe&&Ye.restart(!0)}).pause()),l&&(Su[l]=P),d=P.trigger=En(d||h!==!0&&h),De=d&&d._gsap&&d._gsap.stRevert,De&&(De=De(P)),h=h===!0?d:En(h),Fn(o)&&(o={targets:d,className:o}),h&&(S===!1||S===ii||(S=!S&&h.parentNode&&h.parentNode.style&&ri(h.parentNode).display==="flex"?!1:Ht),P.pin=h,Ve=Ue.core.getCache(h),Ve.spacer?Yt=Ve.pinState:(y&&(y=En(y),y&&!y.nodeType&&(y=y.current||y.nativeElement),Ve.spacerIsNative=!!y,y&&(Ve.spacerState=Ro(y))),Ve.spacer=D=y||Tt.createElement("div"),D.classList.add("pin-spacer"),l&&D.classList.add("pin-spacer-"+l),Ve.pinState=Yt=Ro(h)),n.force3D!==!1&&Ue.set(h,{force3D:!0}),P.spacer=D=Ve.spacer,Ee=ri(h),xe=Ee[S+T.os2],J=Ue.getProperty(h),$=Ue.quickSetter(h,T.a,Kt),dc(h,D,Ee),W=Ro(h)),N){_e=Nr(N)?Xh(N,Ch):Ch,I=Co("scroller-start",l,R,T,_e,0),nt=Co("scroller-end",l,R,T,_e,0,I),Q=I["offset"+T.op.d2];var ht=En(_r(R,"content")||R);Ce=this.markerStart=Co("start",l,ht,T,_e,Q,0,U),Ae=this.markerEnd=Co("end",l,ht,T,_e,Q,0,U),U&&(We=Ue.quickSetter([Ce,Ae],T.a,Kt)),!B&&!(bi.length&&_r(R,"fixedMarkers")===!0)&&(mS(Z?mt:R),Ue.set([I,nt],{force3D:!0}),re=Ue.quickSetter(I,T.a,Kt),Ie=Ue.quickSetter(nt,T.a,Kt))}if(U){var Se=U.vars.onUpdate,be=U.vars.onUpdateParams;U.eventCallback("onUpdate",function(){P.update(0,0,1),Se&&Se.apply(U,be||[])})}if(P.previous=function(){return et[et.indexOf(P)-1]},P.next=function(){return et[et.indexOf(P)+1]},P.revert=function(pe,Ne){if(!Ne)return P.kill(!0);var Re=pe!==!1||!P.enabled,ze=ln;Re!==P.isReverted&&(Re&&(te=Math.max(q(),P.scroll.rec||0),K=P.progress,j=r&&r.progress()),Ce&&[Ce,Ae,I,nt].forEach(function(Nt){return Nt.style.display=Re?"none":"block"}),Re&&(ln=P,P.update(Re)),h&&(!E||!P.isActive)&&(Re?WS(h,D,Yt):dc(h,D,ri(h),he)),Re||P.update(Re),ln=ze,P.isReverted=Re)},P.refresh=function(pe,Ne,Re,ze){if(!((ln||!P.enabled)&&!Ne)){if(h&&pe&&li){tn(i,"scrollEnd",SY);return}!Mn&&fe&&fe(P),ln=P,de.tween&&!Re&&(de.tween.kill(),de.tween=0),X&&X.pause(),m&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(st){return st.vars.immediateRender&&st.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var Nt=Le(),qe=tt(),bt=U?U.duration():Ei(R,T),Ot=Ke<=.01||!Ke,yt=0,Ut=ze||0,_t=Nr(Re)?Re.end:n.end,In=n.endTrigger||d,Vt=Nr(Re)?Re.start:n.start||(n.start===0||!d?0:h?"0 0":"0 100%"),pn=P.pinnedContainer=n.pinnedContainer&&En(n.pinnedContainer,P),Jn=d&&Math.max(0,et.indexOf(P))||0,$t=Jn,M,w,F,z,L,ee,le,Me,ge,we,Xe,Pe,Qe;for(N&&Nr(Re)&&(Pe=Ue.getProperty(I,T.p),Qe=Ue.getProperty(nt,T.p));$t-- >0;)ee=et[$t],ee.end||ee.refresh(0,1)||(ln=P),le=ee.pin,le&&(le===d||le===h||le===pn)&&!ee.isReverted&&(we||(we=[]),we.unshift(ee),ee.revert(!0,!0)),ee!==et[$t]&&(Jn--,$t--);for(hn(Vt)&&(Vt=Vt(P)),Vt=Vh(Vt,"start",P),A=Lh(Vt,d,Nt,T,q(),Ce,I,P,qe,ne,B,bt,U,P._startClamp&&"_startClamp")||(h?-.001:0),hn(_t)&&(_t=_t(P)),Fn(_t)&&!_t.indexOf("+=")&&(~_t.indexOf(" ")?_t=(Fn(Vt)?Vt.split(" ")[0]:"")+_t:(yt=_l(_t.substr(2),Nt),_t=Fn(Vt)?Vt:(U?Ue.utils.mapRange(0,U.duration(),U.scrollTrigger.start,U.scrollTrigger.end,A):A)+yt,In=d)),_t=Vh(_t,"end",P),ke=Math.max(A,Lh(_t||(In?"100% 0":bt),In,Nt,T,q()+yt,Ae,nt,P,qe,ne,B,bt,U,P._endClamp&&"_endClamp"))||-.001,yt=0,$t=Jn;$t--;)ee=et[$t]||{},le=ee.pin,le&&ee.start-ee._pinPush<=A&&!U&&ee.end>0&&(M=ee.end-(P._startClamp?Math.max(0,ee.start):ee.start),(le===d&&ee.start-ee._pinPush<A||le===pn)&&isNaN(Vt)&&(yt+=M*(1-ee.progress)),le===h&&(Ut+=M));if(A+=yt,ke+=yt,P._startClamp&&(P._startClamp+=yt),P._endClamp&&!Mn&&(P._endClamp=ke||-.001,ke=Math.min(ke,Ei(R,T))),Ke=ke-A||(A-=.01)&&.001,Ot&&(K=Ue.utils.clamp(0,1,Ue.utils.normalize(A,ke,te))),P._pinPush=Ut,Ce&&yt&&(M={},M[T.a]="+="+yt,pn&&(M[T.p]="-="+q()),Ue.set([Ce,Ae],M)),h&&!(mu&&P.end>=Ei(R,T)))M=ri(h),z=T===Qt,F=q(),Te=parseFloat(J(T.a))+Ut,!bt&&ke>1&&(Xe=(Z?Tt.scrollingElement||Bn:R).style,Xe={style:Xe,value:Xe["overflow"+T.a.toUpperCase()]},Z&&ri(mt)["overflow"+T.a.toUpperCase()]!=="scroll"&&(Xe.style["overflow"+T.a.toUpperCase()]="scroll")),dc(h,D,M),W=Ro(h),w=Bi(h,!0),Me=B&&vr(R,z?Un:Qt)(),S?(he=[S+T.os2,Ke+Ut+Kt],he.t=D,$t=S===Ht?Dl(h,T)+Ke+Ut:0,$t&&(he.push(T.d,$t+Kt),D.style.flexBasis!=="auto"&&(D.style.flexBasis=$t+Kt)),Hs(he),pn&&et.forEach(function(st){st.pin===pn&&st.vars.pinSpacing!==!1&&(st._subPinOffset=!0)}),B&&q(te)):($t=Dl(h,T),$t&&D.style.flexBasis!=="auto"&&(D.style.flexBasis=$t+Kt)),B&&(L={top:w.top+(z?F-A:Me)+Kt,left:w.left+(z?Me:F-A)+Kt,boxSizing:"border-box",position:"fixed"},L[jr]=L["max"+ta]=Math.ceil(w.width)+Kt,L[es]=L["max"+Of]=Math.ceil(w.height)+Kt,L[ii]=L[ii+Ga]=L[ii+Oa]=L[ii+Ba]=L[ii+Fa]="0",L[Ht]=M[Ht],L[Ht+Ga]=M[Ht+Ga],L[Ht+Oa]=M[Ht+Oa],L[Ht+Ba]=M[Ht+Ba],L[Ht+Fa]=M[Ht+Fa],V=US(Yt,L,E),Mn&&q(0)),r?(ge=r._initted,cc(1),r.render(r.duration(),!0,!0),se=J(T.a)-Te+Ke+Ut,ue=Math.abs(Ke-se)>1,B&&ue&&V.splice(V.length-2,2),r.render(0,!0,!0),ge||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),cc(0)):se=Ke,Xe&&(Xe.value?Xe.style["overflow"+T.a.toUpperCase()]=Xe.value:Xe.style.removeProperty("overflow-"+T.a));else if(d&&q()&&!U)for(w=d.parentNode;w&&w!==mt;)w._pinOffset&&(A-=w._pinOffset,ke-=w._pinOffset),w=w.parentNode;we&&we.forEach(function(st){return st.revert(!1,!0)}),P.start=A,P.end=ke,Fe=ft=Mn?te:q(),!U&&!Mn&&(Fe<te&&q(te),P.scroll.rec=0),P.revert(!1,!0),Ze=un(),Ye&&(He=-1,Ye.restart(!0)),ln=0,r&&C&&(r._initted||j)&&r.progress()!==j&&r.progress(j||0,!0).render(r.time(),!0,!0),(Ot||K!==P.progress||U||m||r&&!r._initted)&&(r&&!C&&(r._initted||K||r.vars.immediateRender!==!1)&&r.totalProgress(U&&A<-.001&&!K?Ue.utils.normalize(A,ke,0):K,!0),P.progress=Ot||(Fe-A)/Ke===K?0:K),h&&S&&(D._pinOffset=Math.round(P.progress*se)),X&&X.invalidate(),isNaN(Pe)||(Pe-=Ue.getProperty(I,T.p),Qe-=Ue.getProperty(nt,T.p),Io(I,T,Pe),Io(Ce,T,Pe-(ze||0)),Io(nt,T,Qe),Io(Ae,T,Qe-(ze||0))),Ot&&!Mn&&P.update(),u&&!Mn&&!Ge&&(Ge=!0,u(P),Ge=!1)}},P.getVelocity=function(){return(q()-ft)/(un()-ya)*1e3||0},P.endAnimation=function(){Sa(P.callbackAnimation),r&&(X?X.progress(1):r.paused()?C||Sa(r,P.direction<0,1):Sa(r,r.reversed()))},P.labelToScroll=function(pe){return r&&r.labels&&(A||P.refresh()||A)+r.labels[pe]/r.duration()*Ke||0},P.getTrailing=function(pe){var Ne=et.indexOf(P),Re=P.direction>0?et.slice(0,Ne).reverse():et.slice(Ne+1);return(Fn(pe)?Re.filter(function(ze){return ze.vars.preventOverlaps===pe}):Re).filter(function(ze){return P.direction>0?ze.end<=A:ze.start>=ke})},P.update=function(pe,Ne,Re){if(!(U&&!Re&&!pe)){var ze=Mn===!0?te:P.scroll(),Nt=pe?0:(ze-A)/Ke,qe=Nt<0?0:Nt>1?1:Nt||0,bt=P.progress,Ot,yt,Ut,_t,In,Vt,pn,Jn;if(Ne&&(ft=Fe,Fe=U?q():ze,_&&(Be=ce,ce=r&&!C?r.totalProgress():qe)),Y&&h&&!ln&&!Vo&&li&&(!qe&&A<ze+(ze-ft)/(un()-ya)*Y?qe=1e-4:qe===1&&ke>ze+(ze-ft)/(un()-ya)*Y&&(qe=.9999)),qe!==bt&&P.enabled){if(Ot=P.isActive=!!qe&&qe<1,yt=!!bt&&bt<1,Vt=Ot!==yt,In=Vt||!!qe!=!!bt,P.direction=qe>bt?1:-1,P.progress=qe,In&&!ln&&(Ut=qe&&!bt?0:qe===1?1:bt===1?2:3,C&&(_t=!Vt&&G[Ut+1]!=="none"&&G[Ut+1]||G[Ut],Jn=r&&(_t==="complete"||_t==="reset"||_t in r))),g&&(Vt||Jn)&&(Jn||f||!r)&&(hn(g)?g(P):P.getTrailing(g).forEach(function(F){return F.endAnimation()})),C||(X&&!ln&&!Vo?(X._dp._time-X._start!==X._time&&X.render(X._dp._time-X._start),X.resetTo?X.resetTo("totalProgress",qe,r._tTime/r._tDur):(X.vars.totalProgress=qe,X.invalidate().restart())):r&&r.totalProgress(qe,!!(ln&&(Ze||pe)))),h){if(pe&&S&&(D.style[S+T.os2]=xe),!B)$(Aa(Te+se*qe));else if(In){if(pn=!pe&&qe>bt&&ke+1>ze&&ze+1>=Ei(R,T),E)if(!pe&&(Ot||pn)){var $t=Bi(h,!0),M=ze-A;Dh(h,mt,$t.top+(T===Qt?M:0)+Kt,$t.left+(T===Qt?0:M)+Kt)}else Dh(h,D);Hs(Ot||pn?V:W),ue&&qe<1&&Ot||$(Te+(qe===1&&!pn?se:0))}}_&&!de.tween&&!ln&&!Vo&&Ye.restart(!0),o&&(Vt||x&&qe&&(qe<1||!uc))&&io(o.targets).forEach(function(F){return F.classList[Ot||x?"add":"remove"](o.className)}),a&&!C&&!pe&&a(P),In&&!ln?(C&&(Jn&&(_t==="complete"?r.pause().totalProgress(1):_t==="reset"?r.restart(!0).pause():_t==="restart"?r.restart(!0):r[_t]()),a&&a(P)),(Vt||!uc)&&(c&&Vt&&ds(P,c),H[Ut]&&ds(P,H[Ut]),x&&(qe===1?P.kill(!1,1):H[Ut]=0),Vt||(Ut=qe===1?1:3,H[Ut]&&ds(P,H[Ut]))),b&&!Ot&&Math.abs(P.getVelocity())>(ba(b)?b:2500)&&(Sa(P.callbackAnimation),X?X.progress(1):Sa(r,_t==="reverse"?1:!qe,1))):C&&a&&!ln&&a(P)}if(Ie){var w=U?ze/U.duration()*(U._caScrollDist||0):ze;re(w+(I._isFlipped?1:0)),Ie(w)}We&&We(-ze/U.duration()*(U._caScrollDist||0))}},P.enable=function(pe,Ne){P.enabled||(P.enabled=!0,tn(R,"resize",Pa),Z||tn(R,"scroll",Ys),fe&&tn(i,"refreshInit",fe),pe!==!1&&(P.progress=K=0,Fe=ft=He=q()),Ne!==!1&&P.refresh())},P.getTween=function(pe){return pe&&de?de.tween:X},P.setPositions=function(pe,Ne,Re,ze){if(U){var Nt=U.scrollTrigger,qe=U.duration(),bt=Nt.end-Nt.start;pe=Nt.start+bt*pe/qe,Ne=Nt.start+bt*Ne/qe}P.refresh(!1,!1,{start:Ah(pe,Re&&!!P._startClamp),end:Ah(Ne,Re&&!!P._endClamp)},ze),P.update()},P.adjustPinSpacing=function(pe){if(he&&pe){var Ne=he.indexOf(T.d)+1;he[Ne]=parseFloat(he[Ne])+pe+Kt,he[1]=parseFloat(he[1])+pe+Kt,Hs(he)}},P.disable=function(pe,Ne){if(pe!==!1&&P.revert(!0,!0),P.enabled&&(P.enabled=P.isActive=!1,Ne||X&&X.pause(),te=0,Ve&&(Ve.uncache=1),fe&&en(i,"refreshInit",fe),Ye&&(Ye.pause(),de.tween&&de.tween.kill()&&(de.tween=0)),!Z)){for(var Re=et.length;Re--;)if(et[Re].scroller===R&&et[Re]!==P)return;en(R,"resize",Pa),Z||en(R,"scroll",Ys)}},P.kill=function(pe,Ne){P.disable(pe,Ne),X&&!Ne&&X.kill(),l&&delete Su[l];var Re=et.indexOf(P);Re>=0&&et.splice(Re,1),Re===Wn&&gl>0&&Wn--,Re=0,et.forEach(function(ze){return ze.scroller===P.scroller&&(Re=1)}),Re||Mn||(P.scroll.rec=0),r&&(r.scrollTrigger=null,pe&&r.revert({kill:!1}),Ne||r.kill()),Ce&&[Ce,Ae,I,nt].forEach(function(ze){return ze.parentNode&&ze.parentNode.removeChild(ze)}),Za===P&&(Za=0),h&&(Ve&&(Ve.uncache=1),Re=0,et.forEach(function(ze){return ze.pin===h&&Re++}),Re||(Ve.spacer=0)),n.onKill&&n.onKill(P)},et.push(P),P.enable(!1,!1),De&&De(P),r&&r.add&&!Ke){var $e=P.update;P.update=function(){P.update=$e,rt.cache++,A||ke||P.refresh()},Ue.delayedCall(.01,P.update),Ke=.01,A=ke=0}else P.refresh();h&&gS()},i.register=function(n){return Ps||(Ue=n||fY(),uY()&&window.document&&i.enable(),Ps=Va),Ps},i.defaults=function(n){if(n)for(var r in n)Xo[r]=n[r];return Xo},i.disable=function(n,r){Va=0,et.forEach(function(a){return a[r?"kill":"disable"](n)}),en(it,"wheel",Ys),en(Tt,"scroll",Ys),clearInterval(yo),en(Tt,"touchcancel",gi),en(mt,"touchstart",gi),bo(en,Tt,"pointerdown,touchstart,mousedown",bh),bo(en,Tt,"pointerup,touchend,mouseup",Ph),Ll.kill(),Ao(en);for(var s=0;s<rt.length;s+=3)Po(en,rt[s],rt[s+1]),Po(en,rt[s],rt[s+2])},i.enable=function(){if(it=window,Tt=document,Bn=Tt.documentElement,mt=Tt.body,Ue){if(io=Ue.utils.toArray,Da=Ue.utils.clamp,Yu=Ue.core.context||gi,cc=Ue.core.suppressOverwrites||gi,wf=it.history.scrollRestoration||"auto",_u=it.pageYOffset||0,Ue.core.globals("ScrollTrigger",i),mt){Va=1,Zs=document.createElement("div"),Zs.style.height="100vh",Zs.style.position="absolute",WY(),dS(),Bt.register(Ue),i.isTouch=Bt.isTouch,cr=Bt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),pu=Bt.isTouch===1,tn(it,"wheel",Ys),If=[it,Tt,Bn,mt],Ue.matchMedia?(i.matchMedia=function(u){var f=Ue.matchMedia(),d;for(d in u)f.add(d,u[d]);return f},Ue.addEventListener("matchMediaInit",function(){TY(),Gf()}),Ue.addEventListener("matchMediaRevert",function(){return _Y()}),Ue.addEventListener("matchMedia",function(){Hr(0,1),as("matchMedia")}),Ue.matchMedia().add("(orientation: portrait)",function(){return hc(),hc})):console.warn("Requires GSAP 3.11.0 or later"),hc(),tn(Tt,"scroll",Ys);var n=mt.hasAttribute("style"),r=mt.style,s=r.borderTopStyle,a=Ue.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",o=Bi(mt),Qt.m=Math.round(o.top+Qt.sc())||0,Un.m=Math.round(o.left+Un.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),n||(mt.setAttribute("style",""),mt.removeAttribute("style")),yo=setInterval(Rh,250),Ue.delayedCall(.5,function(){return Vo=0}),tn(Tt,"touchcancel",gi),tn(mt,"touchstart",gi),bo(tn,Tt,"pointerdown,touchstart,mousedown",bh),bo(tn,Tt,"pointerup,touchend,mouseup",Ph),du=Ue.utils.checkPrefix("transform"),Wl.push(du),Ps=un(),Ll=Ue.delayedCall(.2,Hr).pause(),Xs=[Tt,"visibilitychange",function(){var u=it.innerWidth,f=it.innerHeight;Tt.hidden?(Eh=u,yh=f):(Eh!==u||yh!==f)&&Pa()},Tt,"DOMContentLoaded",Hr,it,"load",Hr,it,"resize",Pa],Ao(tn),et.forEach(function(u){return u.enable(0,1)}),l=0;l<rt.length;l+=3)Po(en,rt[l],rt[l+1]),Po(en,rt[l],rt[l+2])}else if(Tt){var c=function u(){i.enable(),Tt.removeEventListener("DOMContentLoaded",u)};Tt.addEventListener("DOMContentLoaded",c)}}},i.config=function(n){"limitCallbacks"in n&&(uc=!!n.limitCallbacks);var r=n.syncInterval;r&&clearInterval(yo)||(yo=r)&&setInterval(Rh,r),"ignoreMobileResize"in n&&(pu=i.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Ao(en)||Ao(tn,n.autoRefreshEvents||"none"),oY=(n.autoRefreshEvents+"").indexOf("resize")===-1)},i.scrollerProxy=function(n,r){var s=En(n),a=rt.indexOf(s),o=rs(s);~a&&rt.splice(a,o?6:2),r&&(o?bi.unshift(it,r,mt,r,Bn,r):bi.unshift(s,r))},i.clearMatchMedia=function(n){et.forEach(function(r){return r._ctx&&r._ctx.query===n&&r._ctx.kill(!0,!0)})},i.isInViewport=function(n,r,s){var a=(Fn(n)?En(n):n).getBoundingClientRect(),o=a[s?jr:es]*r||0;return s?a.right-o>0&&a.left+o<it.innerWidth:a.bottom-o>0&&a.top+o<it.innerHeight},i.positionInViewport=function(n,r,s){Fn(n)&&(n=En(n));var a=n.getBoundingClientRect(),o=a[s?jr:es],l=r==null?o/2:r in Nl?Nl[r]*o:~r.indexOf("%")?parseFloat(r)*o/100:parseFloat(r)||0;return s?(a.left+l)/it.innerWidth:(a.top+l)/it.innerHeight},i.killAll=function(n){if(et.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var r=ss.killAll||[];ss={},r.forEach(function(s){return s()})}},i})();at.version="3.15.0";at.saveStyles=function(i){return i?io(i).forEach(function(e){if(e&&e.style){var t=On.indexOf(e);t>=0&&On.splice(t,5),On.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ue.core.getCache(e),Yu())}}):On};at.revert=function(i,e){return Gf(!i,e)};at.create=function(i,e){return new at(i,e)};at.refresh=function(i){return i?Pa(!0):(Ps||at.register())&&Hr(!0)};at.update=function(i){return++rt.cache&&Ki(i===!0?2:0)};at.clearScrollMemory=gY;at.maxScroll=function(i,e){return Ei(i,e?Un:Qt)};at.getScrollFunc=function(i,e){return vr(En(i),e?Un:Qt)};at.getById=function(i){return Su[i]};at.getAll=function(){return et.filter(function(i){return i.vars.id!=="ScrollSmoother"})};at.isScrolling=function(){return!!li};at.snapDirectional=Ff;at.addEventListener=function(i,e){var t=ss[i]||(ss[i]=[]);~t.indexOf(e)||t.push(e)};at.removeEventListener=function(i,e){var t=ss[i],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};at.batch=function(i,e){var t=[],n={},r=e.interval||.016,s=e.batchMax||1e9,a=function(c,u){var f=[],d=[],h=Ue.delayedCall(r,function(){u(f,d),f=[],d=[]}).pause();return function(S){f.length||h.restart(!0),f.push(S.trigger),d.push(S),s<=f.length&&h.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&hn(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return hn(s)&&(s=s(),tn(at,"refresh",function(){return s=e.batchMax()})),io(i).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,t.push(at.create(c))}),t};var Oh=function(e,t,n,r){return t>r?e(r):t<0&&e(0),n>r?(r-t)/(n-t):n<0?t/(t-n):1},pc=function i(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Bt.isTouch?" pinch-zoom":""):"none",e===Bn&&i(mt,t)},wo={auto:1,scroll:1},xS=function(e){var t=e.event,n=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,a=s._gsap||Ue.core.getCache(s),o=un(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==mt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(wo[(l=ri(s)).overflowY]||wo[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!rs(s)&&(wo[(l=ri(s)).overflowY]||wo[l.overflowX]),a._isScrollT=o}(a._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},UY=function(e,t,n,r){return Bt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&xS,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return n&&tn(Tt,Bt.eventTypes[0],Gh,!1,!0)},onDisable:function(){return en(Tt,Bt.eventTypes[0],Gh,!0)}})},ES=/(input|label|select|textarea)/i,Fh,Gh=function(e){var t=ES.test(e.target.tagName);(t||Fh)&&(e._gsapAllow=!0,Fh=t)},yS=function(e){Nr(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,a=t.onRelease,o,l,c=En(e.target)||Bn,u=Ue.core.globals().ScrollSmoother,f=u&&u.get(),d=cr&&(e.content&&En(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),h=vr(c,Qt),S=vr(c,Un),m=1,Y=(Bt.isTouch&&it.visualViewport?it.visualViewport.scale*it.visualViewport.width:it.outerWidth)/it.innerWidth,p=0,v=hn(r)?function(){return r(o)}:function(){return r||2.8},x,_,E=UY(c,e.type,!0,s),y=function(){return _=!1},U=gi,b=gi,g=function(){l=Ei(c,Qt),b=Da(cr?1:0,l),n&&(U=Da(0,Ei(c,Un))),x=ts},T=function(){d._gsap.y=Aa(parseFloat(d._gsap.y)+h.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",h.offset=h.cacheID=0},C=function(){if(_){requestAnimationFrame(y);var N=Aa(o.deltaY/2),ne=b(h.v-N);if(d&&ne!==h.v+h.offset){h.offset=ne-h.v;var P=Aa((parseFloat(d&&d._gsap.y)||0)-h.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",d._gsap.y=P+"px",h.cacheID=rt.cache,Ki()}return!0}h.offset&&T(),_=!0},R,O,Z,B,H=function(){g(),R.isActive()&&R.vars.scrollY>l&&(h()>l?R.progress(1)&&h(l):R.resetTo("scrollY",l))};return d&&Ue.set(d,{y:"+=0"}),e.ignoreCheck=function(G){return cr&&G.type==="touchmove"&&C()||m>1.05&&G.type!=="touchstart"||o.isGesturing||G.touches&&G.touches.length>1},e.onPress=function(){_=!1;var G=m;m=Aa((it.visualViewport&&it.visualViewport.scale||1)/Y),R.pause(),G!==m&&pc(c,m>1.01?!0:n?!1:"x"),O=S(),Z=h(),g(),x=ts},e.onRelease=e.onGestureStart=function(G,N){if(h.offset&&T(),!N)B.restart(!0);else{rt.cache++;var ne=v(),P,fe;n&&(P=S(),fe=P+ne*.05*-G.velocityX/.227,ne*=Oh(S,P,fe,Ei(c,Un)),R.vars.scrollX=U(fe)),P=h(),fe=P+ne*.05*-G.velocityY/.227,ne*=Oh(h,P,fe,Ei(c,Qt)),R.vars.scrollY=b(fe),R.invalidate().duration(ne).play(.01),(cr&&R.vars.scrollY>=l||P>=l-1)&&Ue.to({},{onUpdate:H,duration:ne})}a&&a(G)},e.onWheel=function(){R._ts&&R.pause(),un()-p>1e3&&(x=0,p=un())},e.onChange=function(G,N,ne,P,fe){if(ts!==x&&g(),N&&n&&S(U(P[2]===N?O+(G.startX-G.x):S()+N-P[1])),ne){h.offset&&T();var Le=fe[2]===ne,tt=Le?Z+G.startY-G.y:h()+ne-fe[1],He=b(tt);Le&&tt!==He&&(Z+=He-tt),h(He)}(ne||N)&&Ki()},e.onEnable=function(){pc(c,n?!1:"x"),at.addEventListener("refresh",H),tn(it,"resize",H),h.smooth&&(h.target.style.scrollBehavior="auto",h.smooth=S.smooth=!1),E.enable()},e.onDisable=function(){pc(c,!0),en(it,"resize",H),at.removeEventListener("refresh",H),E.kill()},e.lockAxis=e.lockAxis!==!1,o=new Bt(e),o.iOS=cr,cr&&!h()&&h(1),cr&&Ue.ticker.add(gi),B=o._dc,R=Ue.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:MY(h,h(),function(){return R.pause()})},onUpdate:Ki,onComplete:B.vars.onComplete}),o};at.sort=function(i){if(hn(i))return et.sort(i);var e=it.pageYOffset||0;return at.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+it.innerHeight}),et.sort(i||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};at.observe=function(i){return new Bt(i)};at.normalizeScroll=function(i){if(typeof i>"u")return gn;if(i===!0&&gn)return gn.enable();if(i===!1){gn&&gn.kill(),gn=i;return}var e=i instanceof Bt?i:yS(i);return gn&&gn.target===e.target&&gn.kill(),rs(e.target)&&(gn=e),e};at.core={_getVelocityProp:hu,_inputObserver:UY,_scrollers:rt,_proxies:bi,bridge:{ss:function(){li||as("scrollStart"),li=un()},ref:function(){return ln}}};fY()&&Ue.registerPlugin(at);function VS(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Yc={exports:{}},Bh;function AS(){return Bh||(Bh=1,(function(i){function e(t,n){var r="XIXHXHXGXGXQXQXPXPXOXOXN##U6U6UW#$U%U%U%U%U%XFXEXEXRXRXVXVXWXWXXXXXYXYXZXZY#Y#Y$Y$Y%Y%XSXSXTXTXUXIXHXHXGXGXQXQVAVA#%#&V'#'U6#(#)U%U%U%U%U%#*U%XEXEVLVLVLVLYGYGYGYG#+W=W=W=W=W=W=Y$X+X+X+X+X+XTXUVPUQ#,T*T*#-VAVA#.#/#0#1#2U6U6UWU%U%U%U%U%#3VLVLXEYH#4#5#6YGYGYG#7X.#8W=W=W=#9X,X,#:#;#<#=#>VPVP#?#@#AT*T*#B#C#D#E#F#GV'#H#I#JUWU%U%U%U%X6X6#K#LYH#M#N#O#PYG#Q#R#SX.#T#UW=W=#V#WX,#X#Y#Z$#$$$%$&T)$'$(T*T*$)$*$+TW$,$-$.$/$0$1$2$3U%U%XJXJXF$4$5$6$7$8$9$:YG$;$<$=$>$?$@$A$BW3$C$D$E$F$G$HW8$IT)T)T)XHXGXGXQV=$J$K$L$M$N$O$P$Q$R$SV2XKXJXJXFY4$T$U$V$W$X$Y$Z%#%$%%VN%&%'%(%)%*%+%,%-%.%/%0W8XTT)XIXHXHXGXGXQXQU>%1%2%3TL%4%5%6%7U-XKXKX0X0XF%8%9%:%;%<%=%>%?%@%A%B%C%DX(%E%F%GWU%H%I%J%KXSXTXTXUXIXHXHXGXGXQXQU>%L%M%NTL%OUPXMX1XLXKXKXJX0X5%P%QS0%R%S%T%U%V%W%X%Y%Z&#WUWUWUWUWU&$&%X%XSXSXTXTXU&&ZDZDXGXGXQXQXP&'&(&)&*&+&,UOXLXLXKXKXJXJ&-&.&/S0&0T&&1&2WQ&3&4&5&6&7&8&9&:&;&<&=X%X%XSX%XTXTXUXIZDZDZDXGXQXQXPUI&>&?&@&A&B&C&DXLXKXKXJX3&E&F&G&H&I&J&K&L&M&N&OWEW<W<&P&Q&R&S&T&UY%X%ZUXSXTZYXUXIXHXHXGXGXQXQXPXPXOXO&V&W&X&Y&Z'#XKXKXJX3'$'%'&'''(')'*'+','-VMXXW<'.XZ'/'0'1'2WDZPZ9'3'4ZH'5XUXIXHZEZEXGXQXQXPXPXOXOZ@'6'7'8'9':';XKXJXJXF'<'='>'?'@'A'B'C'DXXXXZ1W'XZ'E'F'G'H'I'JW5Z9'K'L'MZWZ<Z<XHZEXGXQXQXPXPXOXOZ@'N'O'PUB'Q'R'S'TXJXFXFXESQ'U'V'W'X'YXWZ0XX'ZXYXZXZW4(#($(%W5(&ZS('ZB((()(*(+ZTZE(,(-XQXPXPXOXOXNU=U=(.(/(0(1(2(3XJXFX8XEXESN(4(5(6(7(8Z2XXZ+XYXZZ-Y#(9(:(;(<(=(>(?ZB(@(A(BZLZT(CZV(DXQXPXPXOXOXNXNU=(E(F(G(H(IXJXJXFXFX8XE(J(K(L(M(NZ*(OZ2XYXYXZXZY#Y#XCXC(P(QX;X;ZN(RZ>(SXHXHZVZVZA(TZQXPZ:XOXNXNV,(U(V(WV.V.XJXJXFXFXEXET((X(Y(ZZ*Z*XXXXXYXYXZXZY#Y#XCXC)#)$)%)&XT)'XUZ6XHXHXGXGXQXQXPXPXOXOXNXNV,)()))*V.XKXJXJXFX8XEXEXRSE)+SEXWXWXXXXXYXYXZXZY#Y#XC),)-).)/XDXAZ6Z6Z8XHXHXGXGXQXQXPXPXOXOXNXNV,)0)1T.XKXKXJXJXFX8XEXEXRXRXVXVXWXWXXXXXYZ/XZXZY#Y#Y$Y$Y%)2)3XDXTZ6Z6XIXHXHXGXGXQXQXPXPXOXOXNXN)4)5)6X9XKXKXJXJXFXFXEXEXRXRXVSESEZ/Z/XXZ/XYXZXZY#Y#Y$Y$Y%Y%XSXSXTZ6Z6XIXHXHXGXGXQXQXPXPXOXOXNXNV&)7)8X9XKX7X7X7XFXFXEXEXRXRXVXVXWXWXXXXXYXYXZXZY#Y#Y$Y$Y%Y%XSXSVEZ6XUXIXHXHXGXGXQXQXPXPXOXOXNXNVHVH)9):T9T9XJXJXFXFXEXEXRXRVIVIVIVI);VFVFVC)<VKVBVBVBVDVDVDVDVD)=VGXUXIXHXHXGXGXQXQXPXPXOXOXNXNVHVHT9T9T9T9)>VH)?Y&)@VJVJVJ)AVIVIVI)BVFVF)C)DVK)E)F)G)H)I)J)K)L)MVGVGVGVGVGVGXGXQXQXPXPXOXOXNXNVHVHT9T9T9T9)NVH)OY&)PVJVJVJ)QVIVIVI)RVFVF)S)TVKVKVK)UXCXCXCXCXC)VVGVGVGVGVGVGVGVGVGVGVGVGVGVGVG)W)X)Y)Z*#*$*%*&*'*(*)***+*,*-*.*/*0*1*2*3*4*5*6*7*8*9*:*;*<*=*>*?VGVGXNXNV'*?XLXLUWU%*>TF*?TFTFV'TFV'V'*>V'*?U6*?V8V8*?U%V8*@U%U%U%*@XYW=YGXYXHT*UQT*XQXQ*>*?VAVA*?*@*@TF*ATFTF*ATFTF*AV'TFTFV'*A*B*C*CTRV/XFVLVLYH*CYHYH*C*DXVXV*DYGYGX.YG*D*DW=X.*EW=*E*F*GX,X+X,*GX+X+X+*G*G*HWWWW*HWWWWWWXTXTWW*HVPVPVPUQ*GUQUQUQUQT*UQT**FV>*GV>*GVAV>*HVAVA*HVAVA*HVAVA*H*IVAVATFV'VAV'V'*HV'*IU6U6U6*IU6U6*IU6X6XFXFX4XEXEX4Y@YH*GYH*HYUYUYU*H*HY7Y7*I*IYGYGYGYGYG*IYGYGYG*I*J*J*KX.X.X.X.*K*L*LW=*MW=*MX,*N*OX,X,*OX,X,*OX,*P*P*QW;*R*RWW*SWB*S*TWBWB*T*UWB*VVPVPW8*VVPVP*VVPUQUQT)UQ*UT*UQT**U*VXQV0*VV=*WV=*W*XV=*Y*YV)*ZV)V)V?*ZV?V?*ZV?V?V'*ZV;+#U6+#U6V;V;+#V;V;+#U&+$U&XLXLU&V2Y@Y@XF+#Y@Y@+#Y@XEYHY@+#+#+$+%+&YU+&+'+(+(+)+*++YGYG++YG+++,+-+.+.X.+/X.X.X.+/+0X.+0+1+2+2+3+4+5+5+6+7+8W=W=W=+8+8+9W3W3W3+9+:W%X,X,+:+;X,+;X,X+X+X+X++;X+WBWRXSWB+:XSW8W8W8W8T)V=+9+:+;+;+<+=+>+>V)TTTTV)V?+>+?V?V?TL+?V;V;+?+@+@V;V;V;V;V;V;+@V;+@+A+B+BV2+CV2+C+DYIYI+D+EYI+F+F+G+H+I+I+J+K+L+L+M+N+O+O+P+Q+R+R+S+T+U+U+V+W+X+X+Y+ZVR+Z,#,$,%VN,%VNVN,%,&,'X(,',(,)W2X',),*X',*,+X'X',+,,W&,-,-,.WUWU,.,/,0,1X+,1X+,2WRXSWRX)WW,1,2WW,2,3U>,4,4TTTTTTTT,4TTTL,4,5,6,7,7,8UPUP,8UPUPUP,8U-XLXLXF,8XFY>,8,9,:YB,:,;YBYB,;,<YMYM,<,=YM,>,>,?,@,A,A,BY9Y9,B,CY9,D,D,E,F,G,G,HVS,I,I,J,K,L,L,M,N,O,O,P,QX(X(,QWUWU,Q,RWUWU,R,SWUWUWU,SWU,T,TX+,UY%X+X%X%X%,TX)XSXSU>,T,U,V,VTT,W,X,XTL,YTLTL,YTL,ZXF,ZXFS:,Z-#S:-$-$-%-&-'YMY*T&T&Y*-&-'S9-'-(S9-)-)-*-+-,-,X#--X#---.X#X#-.-/-0-1-1-2-3-4-4-5-6-7WUWTWUWT-6X%X%X%ZJZDXIZDV:-5XPUF-5-6UF-7-7-8-9-:TLTL-:UHTL-:UH-;-;UO-<UOXFX2XFSA-;-<-=SZS0S0-=->->T&-?-@-@S9-AS9S9-AS9-B-B-CWQ-DX#-D-E-F-FW9-GW9-G-H-IW<W<-IW<W<-I-JW<-K-K-L-M-N-NWU-O-PWUWU-PWUWUWU-P-QWUX%-QX%UI-QUIXO-Q-RUIUIUIUHUI-R-RU.-SV7-S-T-U-V-VV--W-XV<T+-X-YXF-YX3-Z-ZSZ.#SZ.#S2.$S2.$.%S2SY.%SYSYSYSX.%SXSX.%SH.&SH.&SHSH.'.'WQ.(.)WQWQ.)VM.)WE.*WEW<.*W<XZ.*X-X-X-.*.+.,.-.-WU..././WXWU.0.0Y$WDY$XN.0XNXN.0UAXNTNTDTDUV.0TD.0.1TITI.1TI.2T?XLU,XLXF.1XFS5.1.2.3.4.4.5.6.7.7.8.9SK.9.:SK.;.;SX.<.=SHSH.=.>SH.>.?S/.?.@S/.A.A.BSUSUW<W<W<.BW<.BW<.C.C.D.E.F.FW0W0W0W0WD.FWDZCXSZ9Z9XSXSZ9ZRZHZH.DZHTNXNZ@XN.CTD.DTDTD.DTD.ETI.E.F.G.G.H.I.J.JXKT@T@SB.JXFXFS-.JXEXE.JSKXET%.JS@.K.L.L.M.NSJ.N.O.P.QSF.Q.R.SS/.SSWSU.SSUSUXWW<.SXZW4.S.TW4.UW4W4W4.U.U.V.WWCWD.WWC.XY%ZP.X.YZ9ZRXSZRZRZFXTXTZHZHXTZWZ@U=XNU=.U.V.WU=.W.X.Y.Z.ZV+/#V+T@/#T@/$U#U#U#/$XJURU#URSL/#SL/$/$/%/&/'/'/(SO/)/)/*S>S>/*/+/,XWXYZ1Z+Z+W4/+W4/,/,WC/-WCWCW5WC/-W5/-W5/.ZSZ7ZS/.ZKZWXTXTZWZWZ?Z?Z?Z=ZZ/,/,ZT/-ZTZEXGZVZVZIZIZVZV/+/,U=/-/-/.U</////0TPTP/0/1/2/3/3/4T=/5/5XJT=XJSN/5SNSNSO/5/6/7/7S>/8/9S>Z.SR/9Z0Z0/9Z*/9W4Y#Y#/9WCY$Y$WC/9XCXC/9/:/;X>/;/<X>X;/<ZSX;XSZS/<ZSZSZBXT/<ZBXUZ?XUZ>Z>ZX/;ZXZVZV/;ZVZVZVZV/;U=/;U=/<U<U</</=/=/>/?/@/@V./AV.V./AV.V.XR/AXRT(/ASNT(/B/B/CSC/D/D/E/FSRSRZ*XWZ*XXZ2Z4Z2/DX>/EX>X>X;/EX;Z;Z;ZN/EZXZXZ6XIZAZQXQXQXMV,V,/C/C/D/ET0/E/F/G/HT(/H/I/J/J/KSE/L/LSR/MXV/MX>/NX:X>X;X:/NX;X;/N/OX;XS/OXSZNZNZMXTV,/NV,/O/O/P/Q/R/R/S/T/USE/USESEXC/UXCXC/UX:Y%X:X:/UX:/VXDXD/V/W/W/X/YT/T5/Y/ZT5Y%/ZY%Y%/Z0#X@X@XMV,XMV&/Z0#0$0%0%XLT4X9V&0%XMV&T90%XLXLV&V&T9T90$T9T9T9XXXX0$VFXZXZVCVKXTXT0#VGXJXJ0#VHXF0#VH0$0$SE0%SE0%VI0&VI0&VF0'VF0'VC0(VCVCVKVCVK0'0(VKVK0(0)VKVK0)0*0+XC0+0,XCXC0,0-XCXC0-0.XCXC0.0/XCXC0/00XCXC00VG01VG01VH02VHVH02VH0303SE04SE04VI05VI05VF06VF06VC07VCVCVKVCVK06XC07XC07VG08VG08VHVGVGVHVHVGVGT9T9VGVGT9T9VGVGT9T9VGVGT9T9VGVG03VHVGVGVHVHVGVGVH02VGVGY&Y&VGVG01SEVGVGVJVJVGVGVJVJVGVGVJVJVGVG0.VIVGVGVIVIVGVGVIVIVGVGVIVIVGVG0+VFVGVGVFVFVGVGVFVFVGVG0)VCVGVGVCVKVGVGVKVKVGVGVKVKVGVGVKVKVGVG0%XCVGVGXCXCVGVGXCXCVGVGXCXCVGVGXCXCVGVGXCXCVGVG/XVGVGVGXNXNV'U6XOXOVATFVATFVATFV'U6V'U6V'U6V'U6U6U6U6V8UWUWU%U%V8U%V8U%U%U%U%TRT*V>T*V>V>VAV>VAVAVATFTFVAVATFTFVATFVATFVATFTFTFV'V'TFTFV'V'TFTFV'U6V'U6V'V'TFV'V'U6V'U6TRTRU%TRYHYHYUYUYHYH/BY7YHYHY7YG/AYGYGYGYGX./AX.X.W=X.X.X.W=X.X.W=X,W=X,W=W=W=X,W=X,X,X,X,X+X,X+X+X+X+WWX+X+X+WWX+X+WWWWX+XSWWWWWWVPVPVPVPVPVPUQT*V>T*V>T*V>T*V>V>VAV>V>V>VAV>V>VAVAV>VATFTFVAVATFTFVAVATFTFVATFV'U6T<T<V'U6V'U6U6U6U6V;U6U6V;V;YHYH/)YUYUYU/)YUYU/)/*/+YUY7/+Y7Y7Y7/+/,YGYG/,YGYGYGYG/,YGYGYGX.YGYGX.X.YGYGX.X./)X.X.X.X.X.X./)X.X./)X.W=W=X.W=X.W=X.W=W=X,W=X,W=W3W3W3X,X,W3X,X,X,X,/$X+X+X,W;X,/#X,W;X+X+W;W;WWWWW;X)W;X)X+X+WWWWX)WWX)WBX+X+WWWWWWWBWWWWWBWBWWVPWBWBVPVPWBW8WBW8W8W8W8VPW8W8VPVPW8VPUQT*XHXHT*V@XQXQV=U8U8V0.LV=V0V=V0V0V=V=TZTZV=V=TZTZTSTSV=TSV=V=TWV)TWV)TWV)TW.GV).GV).HV'V'V?V'V'U6V'U6V;U6V;V;V;V;U6V;V;U6V;V;UWV;V;V;V;V;U&U&Y4.AY4Y4.AY@.B.CXEXEY'.CYH.C.D.E.EYU.FYU.F.GY,Y,.G.HY,.I.I.JYU.K.K.LZ&Z&.L.MZ&Z&.MYV.N.O.O.P.QYG.Q.R.S.T.T.UYEYE.UYG.V.WYGY=YG.W.W.X.Y.Z.Z/#/$/%YG/%/&/'/'X./(/)/)X./*X.X.X./*WOX.X.WOVNX.X.WIWI/(/)VNVNWIWIVNVN/(X&/)/*X&X&/*X&/*WHVN/+WHWHVY/+X&X&X&/+X&W=X&W=/*/+/,/-WG/-/.//W=//W=W=W=W=//W3W=W=W3W3W3X,W%W%W3W3W3W%W%X,W%/,X,X,/,X,X,X+X+X+X+WRX+WRWBWBW8W8V=V=/)V=V=U>XPU>/(U>U>U>V=/(/)/*TWTW/*/+U>U>U>/+TTTTU>TTTWV)TWV)TT/)TTTTTLTL/)TL/)TLTL/*/*TU/+/,V;V;/,/-V;U6V;V;V;/,/-/.V;TBV;TB/-UKUK/.U-U-U-/.TB/.V2V2V2V2U$UJ/-Y@Y@/.Y@Y@/./////0YI/1/1/2/3/4YI/4YI/5Y,Y,/5Y,Y,/5/6/7/7/8/9/:/:/;/</=/=Z&/>/?Z&Z&/?/@/@/A/B/C/C/D/E/F/F/G/HY</H/IY<Y</I/JY/Y//J/KY//L/L/MY<Y</MYG/N/OY<Y<Y</O/O/P/Q/RYGYG/R/S/S/T/UZ%/U/VYGYG/V/WYGYG/WYQZ%/X/X/YWJWJ/Y/ZYG0#VTVTVT0#0#X.WJVR0#0$VRVRVTVR0$0%X.WOVRWOWOVNWOWOVRVRWPWPVNVNWPWPVY/YVNVNVYVYVNVNVYW=VYVYVNVN/WX(W=W=W2W2W=W=W2W2W2W2X(W2W3W3X'X'W2X'X'X'W3W3/RX'/RW%W%W%W%W%W&W&W%W%/Q/RW&WUWUWU/QWUWUWUWUWUWU/QX,X,/QX,/QX+X+X+WU/QWUWU/QWU/R/SX+WRX+WRX+WRX+/RWWW8WWWWX)WWX)X)U>/PU>U>TETE/P/QU>/QU>TT/QTT/RTT/RTLTLTLTL/RTL/STUTU/S/TTL/TTL/U/UUP/VUPV;/V/W/X/X/YUPUP/YUPUPUP/YU-XLXLYBYBYB/YYBYB/YYBYB/YYB/Z/ZYB0#YBYIYI0#0$YI0$YIYI0$YM0%0&0&0'YMYM0'0(0)0*0*0+0,0-0-0.Y*Y*0.0/000101020304Y*04Y*05Y9Y905Y9XVYRY9Y9YR04Y9Y9YG04Y905YGYG0506Y906Y907YGYG0708VQVQVWVQ0708090:VWVW0:XWVQVQVSVQWSWSWS09VSVS090:WSWP0:WSWPWPWSVNVS09VS0:WS0:0;0<0<VN0=0>VNVN0>0?0?0@0A0B0B0CW,W,VNVN0C0DVNX(X(X(0CX(X(X(X(W2WUWUX'X'WUWUX'X'WUX'X'X'X'0@X'WU0@WUWUWUWU0@0@0AWM0BWU0B0C0DWMWM0DWTX%0DX%X%0D0E0F0GU>0GXPV:0GUYV:U/0GTT0H0IUY0I0J0KTTTTUU0KTT0KTTTLTT0KTLTL0KUP0LUP0LUP0MUPXFY>XFS:0L0MS:S:YB0M0N0OS:0OS0S00OT'0PT'YM0PT'YC0PT'S0T&0PT&T&T&0P0QY*XVT&T&T&S9Y9Y9XV0P0P0Q0R0S0S0T0UVO0U0VW(0W0W0XVUVUVOVUWQ0XVUVUWQVU0WX#0XX#0X0YVU0Z0ZX#X#X#X#0ZX#X#0ZVS1#1$1$1%W7W7W7W71%W7W7W7W71%1%1&W71'1'1(1)1*1*1+W9W9W91+W91,X(X(W9W<X(WUWUWU1*W<W<W<WUWUW<WUWTWT1)1*V:1*UFUFU/U/1*U/TM1*TM1+UFULUF1+1+UE1,1-1-TL1.1/ULUL1/UI1/1011UL11XNULXN11UPXNUPXNUPU.U.UPUPUP10UP1011UOX2S:1112S:S:SA12SASASASZSZS0SZS2S0S0S2S0S0T&S0T&S0T&S0S0T&T&SYT&T&1,T&S9T&S9T&S91+1,1-WQS91-S9S91-1.WQWQ1.X#1/X#1/10WQWQX#X#10X#1011W+1212X#WEWE12W9X#13X#W9WEXXW9W9W9121213W<W<W913W<W<13W:W<1414WU1516WUWU16171718W<19WUWU19W<W<WU19X-191:1;W<1;X-X-X-WUWUX-WU1:WU1;WUWUWUWU1;WUWU1;WUWUWU1;1<WU1<WU1=1=1>WXX%UF1>XOUI1>UIUIUIUI1>UIUIUI1>UIU*UH1>1?TH1?TAU*V7U.U.TKTKU.UOU.U.XMXMV7TDU71<U7XMUOU'U.UZUZ1;XMXMV-1;XMXMV%1;XLTI1;T,UN1<1<SASASZXFSZS=1<SASZSZSZSZSZS=SZSZS2SZS2SZS2SZS2S0S0S2S2S0S0S017S0SYSYSYSXT&SXSXT&SHSXSHSXSHSXSH13SHSHSHSHSHSH1313WQSHWQ13WQS1S1WQ1314VMWQWQVMVMWQWQWQWEWEWEVMWEW<11W<XZW)11XZX-X-111213X*VXX*X*12VX13VX1314VX15VX15VX1616W0X*17WUWUW0WU16WUY$Y$Y$WDWUWD15WDWDWD15U*XNXN1516TYUAUVTDUVTDXMXM1516TD16TD17XL17TIU(TI17TITIS=17S=18S=18S5S<S2S2S218S<S<18SBS<1819S<S2S2S21919T#T#T#191:S-S-T#1:1;S.1;SYT#SY1;SY1<SK1<T$1=1>SYSYSK1>SYSXSK1>SK1>1?S@SXSX1?SX1?SXSX1@SXSXS3S3SHSHS3SFSH1>SFSFSH1>SHS/SHSFSFSF1=1>S/S/1>VM1?1@S/SUS/S/VMVMVMSUVMVMSUSU1=W'1>W'W<XZW<X-XZX-W<VXX-VXX-1<1<1=1>WK1>VXVXVXWKWKVXW0WK1=WK1>WDWDW0Y$ZHZGZHZGUVUVTDXMXMTDU+U+TD1:TDTDTDTDTDUBTIU,TITCTITIUBUBTCTCUBTCU,16U,UXUXUXUXTJU,U,TCV+UXTJV+T@XKXK13XKSV13SVSV13S.14S.1415S.XESK1516S@SQS@SL16S@S@SLS7S3S3S315S3S3SJS3S@S7S714S3S314SOSFSFSO1414SOSOSOSOSOSO14S/S/SFS/13SG14SGSGSW14SWS/S/S/SUS/SUSUSUW<W4W4W4VX11W4W>11W>W>W>11W>1213W4W?13WLY$W?1314W?WD14W?W?WCWLWCWD13WCWCWCWCWCW5W5ZPW5W5ZPY%W5W5U+U+1011U+U+11U=U=11U=U=TDTDU=U=TDUBTDUBU=U=U=TXTXUBTXUBUBV+UBUBUBV+UBV+T@U#T@U#1*U#1+U#U#U#1+U#SL1+S7S71+1,1-1.S71.S7SJSJSJSJSO1-SJSNSJ1-SOSJSOSJSOSOSOSO1,SO1-SO1-SOSO1-SG1.S>1.SWS>1/SWSW1/SWSUSUSWXW1.1/S>S>1/WLWLWLW4WLW4W4WLWLWL1.WLWCW4W4WCW5WCW5W5Y%W5ZSW5ZSW5ZSZ7Z7Z7ZBZZXIZZZ5Z=XHZOXHZOXHZ5ZO1&V*U=U=V*TXV*1&U=U<U=U<UB1%U<V$V$UBV$TPV$1$U<U<UBV+TPTPV+V+TPTPT@T@TPT-T-U#T-U#TPT-TPV.T-0W0XT=U#U#T=T=0W0X0Y0ZT=0ZT=T=0Z1#U@U@SNSNSN1#SOSOSOSPSNSPSPSP0Y0ZSPSP0Z1#SPSPSP1#SP1$1$SR1%SRZ.Z.XWZ3Z3Z*Z3Z*W4W4Z,Y#W40ZY$Y$WCW*WCW*W5W5Y%X>W5Y%X>Y%Y%X>XCX>Y%W5X>Y%W5ZSY%X;ZSZSX;XSZBZBZSXSZBZBZ;Z;Z>Z>Z>ZXZTXGXGZVZVZVZVZAU=U<0NU<V,0NV,0OU<U<U<0OU<T;0OT;TPTPU<TGTPTPTGTGT;0MT;TGTGTG0MTG0MV.V.V.0MV.0NV.0NT=0OT=SNSNT(T(SNSN0NT(T(SCT(SCSPSPSC0MSP0M0NSDSDSD0N0OSDSRSDSD0NSRSRSRSD0N0OSRXCX>XCX>XCX>XCX>X>0MX>X>Z;XTZNZNV,T/0L0MT10MT50N0NT;T0T00N0O0P0QT;T;0Q0R0R0S0TV.T0T;T00T0T0U0VV.T(SCT(SCT(T(T(SET(SESESESCSCSC0S0SSESESESESE0S0TSESR0TSR0TSESESEXCX>XCX>XCX:XCX:X:X;X:XDX;X;XDXDX;X;XD0PX;X;0P0Q0QT60R0S0ST30T0UT2T0T70UT0T0T00UT70UT5T50U0V0WT.T00W0X0Y0YV.UM0Z0Z1#T.T.UMUMT.XL0ZSESESEXCXCXCX?0YX:X?Y%X:XDX:0YX:0YX:0ZXDXDXB0ZXDXD0ZXDV,V,V,0Z0ZT5T5T5V,0ZV,V,T.T.0ZT.T/0ZT/T/X:0ZY%Y%XBXBX=0ZXBXBX@X@V,0YV,T40Y0ZT4T4V&T4V&V&T4T40YT40YT/T4T4V&T9V&V&XLX9T9XLT9T9V&T9VIVFVIVFVDVGVDVGXJXJT9VHXFXFVHY&VHY&VHY&Y&SEY&SEY&SEY&SEVJVIVJVIVJVIVJVIVIVFVIVFVIVFVIVFVFVCVFVCVFVCVFVCVBVBVKVKVBVBVKVKVBVBVKVKVBVBVKVKVBVBVKXCVBVBXCXCVKXCVKXCVDVDXCXCVDVDXCXCVDVDXCXCVDVDXCXCVDVDXCXCVDVDXCXCVDVDXCXCVDVDXCXCVDVDXCXCVDVDXCXCVDVGXCVGXCVGXCVGT9VHT9VHT9VHT9VHVHY&VHY&VHY&VHY&Y&SEY&SEY&SEY&SEVJVIVJVIVJVIVJVIVIVFVIVFVIVFVIVFVFVCVFVCVFVCVFVCVKXCVKXCVKXCVKXCXCVGXCVGXCVGXCVGXMVHVGVHT9VHT9VHVHY&VHY&Y&SEY&SEVJVIVJVIVIVFVIVFVFVCVFVCVKXCVKXCXCVGXCVGYHYH/U/VYHYH/VYGYGX.YGYGYHYHYH/UYH/UYHYU/UY7Y7Y7XRY7/UYDY7Y7/UY7YU/UY7Y7Y7Y7/U/VY7/VYGYGYGYG/VYGYGYG/VY=YGX.X.X.X.X./U/VX.X.X&X&X,X,/UW3X,W;X,X,V=V=U8V=TWV)TWV)V)V?V)V?V)/QV)V)Y4Y4Y4/QY@Y@/QY@/Q/RY4Y4Y8/RY@Y@Y'Y,Y'/RYHYHYH/RYHY3Y3Y3Y3/QY3Y3/QYUYUYUYUYUY3YUY3Y3/P/QY3Y3/Q/RY3/RY3Y3YUYU/R/SY,/SY,/TYUYDYUYUYDY7YVYV/R/SYL/T/TYUY3Z&YUXRZ&Z&XRY;/SY;/SZ$Y;/TY7/TYVYVYLYLYL/TYL/TYLYL/T/UYVYG/UYGYGYG/UYGYL/VZ$Z$/VZ$Z$Z$Z$/V/V/WZ&/X/X/YYEYE/YYEYEYE/YYEYEYEYGYGYEYGYE/XYEYEYGYG/XYG/XY=/YYG/YY=Y=Y=Y=Y=Y=/YY=Y=YGY=Y=YN/XYNYGYGYG/XYGYGYG/XYG/XYGYGYXYXYX/X/X/Y/Z0#0#0$YNYNYN0$YN0%Y=X.0%X.YN0%0&0'X.X.0'X.0'0(0)0*0*X.X.X.X.0*X.WOX.X.VNVNX.WIVN0)0)0*0+X&WIX&WIWHX&X&WHWHX&X&WHX&WHWHWIWHWH0'VN0(0(WHVYVYX&X&X&0(WH0(WHWH0(WG0)WGWH0)VYVYVY0)VYVY0)0*W=W=0*WGVYWGWGW=WGW=W=0)W=W30)W3W3W3X,X,WUWUX,X,WUWUV=V=0'0(0(U>U>U>TWTWV=TWV=V=0'0(V=V=0(TOTWTW0(TWTWTWTW0(U>U>U>0(TLTL0(US0(TLTTTL0(TLTLTLTL0(TLTL0(V;TUTU0(TUTLTL0(TU0)0*TU0*TUTU0*V;TU0+V;V;UP0+V;UPV;UPUP0*UP0+V;V;UKUKUKU-UKU-U-0)U-U-U&V20)V2Y4Y4XEY@Y@Y@YIYIY@0'YI0(Y@Y@YIYIY@Y@Y@0'Y@Y'0'0(YI0(YIYIY'Y'0(0)0)0*0+Y,0+0,YIYI0,Y,0-0.YIYIYI0.0.0/YI00Y,Y,00Y,Y,000102Y,02Y,0303YK04YK04Y,0506Y,Y,06070708YM09090:YMYMY,0:0;0<0<0=Z#Z#YM0=YMYM0=0>0?0@Z&Z&0@Z&YK0@0A0B0B0C0D0EZ&Z&0E0FZ&Z&0F0GZ#0GZ#0H0HY-0I0J0J0K0L0M0MY00N0O0O0PY0Y00P0QY00R0R0S0TY+0TY/0UY/0U0VZ&0W0W0XY<Y<0X0YY<Y<0YYEY<Y<YEYEY<Y<0X0YY/Y/Y<0YY/Y/0Y0ZY/1#1#Y<Y21$1$1%1&1'1'1(1)Y<1)Y<Y<Y<YGYGY<1)Y<1)Y<Y<1)1*Y<Y<Y<1*YRYRY<1*1+1,1,Y<Z(1-1-1.YRYRZ(1.YRYG1.1/Y<Y<YGYG1/YGYG1/101111121314Z%Z%YGZ%Y<Y<131414YGYGYGYG14YG15Z%1516YG16YQ171818YQWJWJYQ18YQWJ18X.WJWJ1819YGYGWJWJY)19Y)Y)YGY)VTVTVQVQX.X.17WJX.X.X.17X.X.17X.1718VQVQ18VQVQVQVYVY18VYX(X(18X(X'18X'X'W3W318W%18W%WU1919WUWUWUW%WUWUWUWU18WUWU18X,WUWUX,X+X+X+WUX+WUWUX+X+WUWUWUWU15WU15X+16X+WRWRX%16U>TETETETETEU>U>TETETTTT13TTTTTTTETTTETETETE12TT12TLTLTLTL12TLTUTLTUTL12TUTU12TUTU121314141516U016171819U019U01:U01:1;UPV;V;V;1;1;V;1<UP1<1=UPUPV;V;1=1>V;1>UPUP1>UPUPUP1>U-XLU-YBYB1>1?YBYB1?1@YIYI1@YI1@1AYBYB1AYB1BYB1BYBYBYB1B1CYBYB1C1DYBYBYI1DYI1E1EYM1FYMYIYIYI1F1FYM1GYMYMYMYM1GZ'Z'YMZ'1F1GZ'Z'YPYP1GYPZ'Z'YMYM1F1GYMYJ1GY+YPY+Y+1GY+1H1H1I1J1KY+1K1LYSYWYWY*Y*1K1LY*Y*1LY/1M1NY/Y/1N1OYTYT1O1PYTYT1PYT1P1Q1R1SY/Y/1SXVYTYT1SY9YTXVY9Y9Y*1RY*Y*Y*Y*Y*1R1RY91SY9YRYGXVXVYGYG1RYGWZWZY9Y9WZWZWZ1QWZ1QWZWZ1QX/1R1SY91SY91T1TYG1UWZYGYG1U1V1VVW1W1XVWVWVW1X1X1YX#X#1Y1ZX#X#1ZXW2#X#2#2$VSVSVSVSX#2$VSVS2$2%WSWS2%WSWSWS2%2&VS2&VSVSWSWYWS2&2&2'VSVSWSWSVSWS2&VN2'VNVNVNVN2'VNVN2'2(2(2)2*W#2*2+W#W#WY2+2,2-2-2.2/2020W,21W,W,W,21W7212223W#W#W#W#X(22W#W#W#W#22W#W#W#W#X(X(X'X'WUWUX'WUWUWUWUWUWU2/WU2/20WM20WMWMWMWMWM2021WU21WUWUWUWU21WM2122WMWM22WT23WTX%X)X%X)U>U>U>2222TTUYUYU>22U>U>UYUY22UYU>U>2223U>U>2324TT24UYTTUY24UYUYUY24UY25UY25UYUYU/25U/U/2526U/U/26TTTMUUTTTLTLTLTLTL25TL2526TL272728TLUPTL28TL29TL29TL2:2:YBYB2;YBYB2;YBYBYBS0S02:2;S:S:2;S02<S0S0S0S:S0S0T'2;T'2;T'2<T'YMYMYCYCT'T'S0T'2:T&T&T&Y*2:Y*2;Y9Y92;2<2<2=WFWFY9Y92=Y9Y92=2>2?2?W(WFVZW(W(2?W(XV2?W62@2@W(2A2B2B2CS9W62CY9W(W(2C2DW(W(W(2DW(2E2E2F2GVU2GVUVUVUWQ2GWQWQ2GX#2H2IVU2I2JX#VU2JVUVUX#X#2JX#2JX#VU2KX#2KX#X#X#2KX#X#2K2LX#2MX#W72MW72MW7W7W7VS2MW7W7W72MW7W7X#2MX#X#W7W7W7W9W72LW7W72LW7W7W7W7W72L2MW,W,2MW9W7W9W9W92LW9W9W9W9W9W9W<W7W7W72K2KW92LW92L2MW92NW92N2O2PW<W<2PW<WT2PWTX%2PX%X%X%V:U/V:V:UFU/UFUFTMUUTMTMTMTMTM2MUFULUFUF2LTLTMUETM2L2M2NUEULULULTLTL2MTLUL2MULULTLTL2MTLULUIULUIULUL2LULUL2LULUL2LULUIUL2LXNUEXN2LUPXNXNUPUOUPUOUPUOUPUOUPU.U.U.X2SASASAS:S:SASASAS0SASZ2FS9T&S9S9VO2F2GVOWQWQWQS9WQS9S9WQWQS9WQVUVUWQWQW@2CWQ2DX#X#WQX#WQWQWQ2CWQ2CWQWQ2CWN2D2EX#X#2EX#WNX#W+W+X#2DW+2EW+2EW+WE2EX#2FXXX#2FX#2GX#W9X#W92FW<W<W<W92FW92G2GW<W<W<W9W<W9W9W<2FW<2GW<2GW<W<W:WUW:W:W:W:W<W<W:W:2EW:2EW:W:2FW<X$2F2GW<W<W<2G2G2H2IW)2IW)W<W)X$X$2IW<W<W<W<2IW<W<W)2IW<W<2IW<W)2IW)2JW<X-W<X-X-WU2IWU2IWUX-X-WUWUWU2IWUWUVXWUWUWUWU2HWUWU2HWUWUWU2HWUWUWXY$WXWUWX2GWXWXY$2GX%UFUFUF2GUFUI2GUIUI2GUIUIUHUHUIU*UHTH2FTHUH2FUHTHUH2FU*TAU7UZU7U7UZV-XMV-V-V%XMXM2CV<V5V52CV1U;2DU)U)TVUDXFSAXF2C2CS=S=S=S0SYSYSYS92BSHSHSHS1SHS1XWWQSHWQSHSHS1S1WQWQVM2?WQ2?VMVMW<W)W<W)W)X-2>X-WUWUX-X*X-X-VXVX2<X*VXVXVXVXX-VXX-2;X-VXX*2;VXVXVXX*VX2;VX2;VXVXWUWUVXVXVXVXY#WU29VXX*VX29W0X*W0WU29WUWUWXWXWXWDUI28XNXNU*V7TYTYV7V72728TI28TITITQU;28TITDTITITITITI27TIUDUDV6V4V#V#26TIS=S=262727S=S5S5S=S2S=S2S2S2S<S2XF25XFSBS<S2S<S-SBS<24SVS2T#S2T#S2S2S2T#S2S2S-S-T#T#21T#S.21S.S.S-S.S-21SYSY21SYSYSYSY2121SKSKSK21T$SMT$S.21S.SMT$SKT$SK20SKSKSKSKS@SK2020S@21SXSK21SKS@SXSX21SX21SX22SXSXSXSXS3SHSHSHSFSHS1SHS/S/2/S/S/2/S1S/S/S1VMS1S1S/2.S/S?VMVM2.XWW<W<2.W'W<W'W'W'VXVX2-Y#VXVXVXWK2,VXWKWKVX2,VXVXX-2,X-VXX*W0WKW0WKW0W0W0TITITD2*U,XLU,UXTJXKTJT@SV2(SVSV2(S.S-S.2(S.XES.2(2)2*2+2+SK2,SKSKSKS@S@SKS@2+2,SQSQSLSLS3S3S32+S7SJS7SJ2*S3SOSOSFSF2*SOSOSOSJSOSOSOSO2)SOSGSO2)2)SGSGSGSG2)2*SWVXVXW>2*VXVXVXW>W>W>2)W>W42)W4W42)W4W4W4WL2)WLWLY$W$W?2)2)W?W?W?W?W?WC2)WDWDWDWCXMU+U=U+U+U+2'U+U+U+2'U=U=U+U=U=T@U#T@2&T-U#T-U#U#U#U#2%SLS7SLS7S72$2%2&S7S7SJ2&SN2&XRSN2&SNSNSNS7SJSJSJ2%SJSJSJSJSJSJSOSO2$SO2%2%2&SO2'SOS8SO2'SGSG2'S>2'S>S8S>2'SW2(2)S>SWS>S>SWSW2(SWS>SWS>S>SWXW2'XWWLWLW4WLWLWC2&WCU=V*U=U=V*V*V*U<UBUBUB2$V$V$V$2$T-T=T-T=2#V.V.V.U#V(2#T=V(V(T=2#2#T=T=T=T=2#T=U@T=2#T=T=2#2$2%2&V(V(2&XJSNSNSN2&SO2&SP2'SPSP2'SOSOS>SPSPS>S>2&S>SPSPSP2&2&2'SR2(S6SRS6SRS6SR2'S6WCWC2'WCU=U=2'2(2(U<V,U<V,U<V,U<U<U<2'U<U<U<2'T;2'TGTGTGTGTG2'TG2'V.V.V.TGV.TG2'2'V.V.V.T=T=V.2'V.T=V.V.2&SNT(T(SPSPSC2&SPSPSPSDSPSDSDSDSC2$SCSCSDSDSC2$SRS6SR2$2$SRSDSRSDSD2$SDX>X;X>X;V,V,V,T6T2T2T6T2T1T5T1T51XT5T5T5T51XT5T5T/T/T/1XT8T01XT0T21XT2T21XT0T/T0T0T0T01X1XT;1YT;1YTGT;TGTGV.V.V.T;T;T;1XT0T0T01XT;T01X1YT0V.V.V.1XV.V.V.SC1XSE1YSC1YSCSESE1YSE1Z1ZSESSSESESESE1ZSESTSESEX;X;XDXDX;X;XDXD1W1XXDXDV,T6V,T6V,T6V,T31VT3T3T3V,T3V,T3V,T3T51UT3T31UT51UT01VT0T0T0T01VT7T0T71VT01V1WT.1WT.T.T.1WT.T.T.1W1X1YUMT01Y1Z2#2#UMUMUM2#V.UM2$2$2%UMV.T.2%T.T.2%UMT.2&SE2&SESEXCXCX?2&2&XDXDXDXB2&XBXBXBXB2&XB2&2'XBXB2'XBXBXBV,2'V,2(2(T5T5T5V,T5V,T/T.T.2'T.T5T5T/T/2&XBXBXBX=XSX@X@V,2%V,T4T/T/T42%T/T/2%2&T4T4V&T4T/T/T4T4YU2$YUYU2$Y72%Y7YHYH2%2&YHYHYHYUYUYUYH2%YUY7Y7Y7YUYDYUYDYDY7YDY7YUY7Y7Y7Y7Y7Y71YY7Y7YGYGY7Y7YGYGYGYGY7YG1VY=Y=Y=1V1WX&X&X&1WX&X&X,X,X,W3V?V?V)V?Y4Y4Y41U1UY@Y@1V1V1WY4Y4Y@Y@Y4Y4Y8Y8Y@Y@1U1V1W1XYH1XYUYUY3YUY3Y3YHYU1WYUY,1WY,Y,1WY3Y,1XY3Y31XY,Y3Y3Y31X1XYUY31YYUYUY,Y,Y3Y3Y,Y3Z&Z&1WZ&1WZ&1X1YXRYVYLYLYVYVYLYLYLYLYL1WYUYUY3YUZ&Y;Z&Z&Z$1UZ$Z$Y;Z$Y;Y;Y7Y7YVYVYLYL1SYLYL1SYLYLYVYGYVYVYGYGYV1RYGYG1RYGYVYVYLYLYLYGYLYLZ$Z$Y;Z$Z$Z$Z$YEZ&1NZ&Z&Z$Z$1NYE1NYEZ&YEZ$1NYEYE1NYEYEYEYLYLZ$YEYEYGYEYEYEYGYE1LYEYGYGYG1KY=Y=Y=Y=Y=YGYGYGYGY=1JY=Y=Y=1JY=Y=Y=1JYGYGYG1JYGYGYX1JYGYX1JYX1J1KYQYN1K1LYGYGYN1LYGYGYGYGYG1LYGYGYG1LYXYX1LYNYXYN1LYNYNYNYN1LYNX.X.X.Y=Y=1KYNYNX.YNYNYNYN1J1KYN1KYN1LX.X.1LX.1LYGYGYGYN1LYG1MYGYGYG1MX.X.1MX.X.1MX.X.X.1MX.WOVN1MVNVNX.X.X.1MX.X.X&X&X.1LX&X&WHWH1LWHVYVYVN1LVYWHVYVYX&X&X&WGX&WHWHWHWGWG1IWGWHWGWHWGWHVYVYVYVY1GVYVYWGWGWGW=W=W=1FW=WGWG1FWGW=1FW=W3W=W=1FW3V=V=V=1FV=V=1F1GV=1GU>U>V=V=U>U>V=V=U>1FV=V=1FU>TWTWTTTTTWTWTTTTU>TEU>1DTT1DTTTT1D1ETLTL1ETLTLTLTL1ETLTLV;1EV;V;1ETU1F1GTUTUUGTU1FUG1G1HTUTUTLTLTU1GTUTU1GV;TUV;V;V;TUTU1FUKUPUKUP1FUPUKUP1FUPUPU-U-U-1FTBTBTBV2Y@Y@Y61E1EY6YI1FY@Y@1FYIYI1FYI1G1G1H1IY.YI1IYIYI1I1JY.Y.1J1KY.Y.Y'Y'1K1L1L1M1NY,1N1O1P1Q1QY.YI1RY.Y.1RY.Y.Y,1R1S1S1TYIYI1TY,1U1V1V1WZ)Z)YI1W1X1Y1YZ)1ZZ)1Z2#2$2%Y,Y,2%2&Y,2&Y,2'Y,Y,Y,2'Y,2'2(2)2)2*2+YKY,YKY,Y,2*YKYKYKYKYKY,YK2)Y,2*Y,2*2+Z)Z)2+2,Z)Z)2,2-2.Z#2.Y,Z#2/Z)Z)Z)2/Z)Z)2/20YM20YMYMZ)20212222YMYMYMY,Y,Y,2222232425Z#25Z#Z#25Z#Z#Z#2526Z#Z#2627YMYM2728292:2:2;Y?Y?2;2<Z'Z'Y?Y?Z'Z'Z&Z&2;2<YKZ&YKYKYKYKYK2;YKYK2;2<2<Z&YKYKZ&Z&2<2=YKYK2=2>YK2>2?Y-2?2@Y-Y-Z&Z&Y-Y-2?2@Y-Y-2@Z&Y-Y-Z#2@Z#Z#Z#2@2A2B2BY-2C2DY02DY0Y02D2EY0Y0Y?2EY?Y?2E2FZ'Z'2F2GZ'Z'Z'Z'2G2HY0Y0Y02HZ'Z'Z'2HZ'2H2I2JY-Y-2J2KY-2K2L2M2M2NY0Y02N2OY0Y0Y0Y/2OY/Y0Y02O2PY0Y02P2Q2QY+2RY+Y02RY/2SY/Y/Y+2SZ&2SZ&Z&2SYEYEYE2SY<Z&2TYEYE2TY<YEYEY<Y<Z&Z&2SY<2SY<Y<Y<YEYEY<YEYYYY2RYYYYY<2R2SY<Y<Y<2SY<Y<Y/Y/Y<2RY2Y2Y2Y2Y/2RY<Y<2R2S2SY<Y22TY2Y2Y22TY22TY<Y<2TY<2U2VY<Y<2VY/YEYEYE2VYEYEY<Y<2U2VY<Y<YGY<Y<Y<YGYGY<Y<Y<2TY<Y<2T2UY<Y<2UY<Y<Y<Y<Y<Y<2UY<Y<2U2VY<2VY<Y<2VZ(Z(Z(Y<Y<Z(Y<Z(Y<Z(Y<Y<Y<2TY<Z(Z(Y<Z(Z(Y<XVXVYGYGY<2RYGYGY<YGY<2QY<YGYGYGYGYQYGYG2PZ%2P2QZ%Z%YQ2QYQYQ2QYQYQYQYQYQZ%2QYQYQZ%Z%Y<2PY<Y<2PYGYGYGY<2P2Q2R2RZ%Z%Z%YG2RYGYGZ%Z%Z%YG2QYGYGYG2QYQYQYQYQYQ2Q2RYQYQ2RYQZ%WJ2RWJYNYNYQYQYNYNYN2Q2Q2RYGY)Y)WJY)Y)Y)VTY)Y)WJ2PWJWJX.X.VRVR2OX.VRX.VTVTVT2OVTVT2O2PVTVT2PVQVYVYVNVNX(X(2OX(2O2PX'X'2PW%W%W%W%W%W&W%2O2PWUWUW%W%2PWUWU2PWUWU2PX,X,X,WUWUWUX+WUWUWUX+2NX+X+X+WRWRX%X%2MTT2NTTTT2NTTTTTTTTTT2NTLTUTLTU2M2NTL2O2OTUU0U0TUTU2O2PTU2PUPUP2PV;UPUPTLTLTLU0TLU0U0U0TL2NTL2OTLU0TL2OU0U0U5U0TL2NTLTL2NU22OTLU0UPU0UPU02NU02OU0UPUPUP2N2OUPUPV;V;V;2O2OV;V;V;V;UPUPUPV;V;V;UPV;2MUPUPV;V;UPUPV;V;UPUP2KUPUPUP2KUPUPUPUPUKUPUKYB2JY>Y>Y>2JY>Y>2J2KY>Y>YBYB2KYBYIYI2KYIYB2KYBYBYIYIYBYBY>2JY>2KY>2KY>YBY>2KY>YBYIYIYBYBYIYIYB2JYIYI2J2KYIYI2K2L2LYM2M2NYI2NYIYIYMYM2NYM2NYMYIXRYIYIYI2N2NYMYIYMYIYMYIXR2MYMYMYMZ'2MZ'Z'YPYP2MYPYPYPZ'2MZ'2MZ'Z'2M2N2O2P2P2Q2R2SY/Y/Y+Y+Y+2RY+Y+YJYJYJ2RYJ2RYW2SYJ2SXRYWYWYWYW2SY+Y+2SY+2S2TYSYS2T2UYWY*2UY*Y*Y*2UY/Y/Y/2U2V2WYTY/Y/YTYTY/2VYTYT2V2WYTYTYSYTYSYTYTYTYTY*YTYT2UYTY/Y/2UY/Y/Y/2UY/2UYTYTYTYT2UYTYT2U2VYTYT2VY92WY9Y*Y*Y*Y9Y*2VY*Y*Y*Y9Y9Y92UY9Y*Y*YGYGYG2UWZWZY9WZYGYGWZWZY92SY92TY92TY9Y92T2U2VX#2VX#X#X#Y9X#Y9X#YGYGWZYGWZWZ2TWZYGYG2TYGYG2TYGVWX/VWX/VWX/X/2SX/VWVWX/VWVWVW2RVW2R2SX#X#2S2TX#X#2TX#X#X#X#VWX#2TVWVW2TVWX#VWX#X#WSWSVSVSWSWS2R2SVSVSX#X#VSVS2RVSVSVS2RVS2RWS2SWSVS2SVSVSWSWSVSWSVS2RVSVSWSWYWS2R2R2SVS2TWSWS2TWSVNVN2TVNWP2TWPVNVNVNVN2TVNVN2TWYWYW#W#W#2SVNW#W#VNVNW#W#W#W#2R2SVNW#W#W#W#2RW#W#2R2S2TWYWYWY2T2U2U2V2WW,WY2W2X2Y2Y2Z3#3$3$3%W#3&3&3'W#W#W,3'WS3(WS3(WSW,W,W,3(W,3(3)3*3+3+3,3-3.3.3/W#W#3/30W#W#VNVNW#W#3/WUWMWMWUWU3/WMWU3/30WMWU30WMWMWMWMWM30303132WTWUWUWU32WUWUWU32WU32WMWM32X+WMX+WMWMWM323233WTWTU>U>U>33U>TTU>UYU>32U>3333UYUYUYU>33XPV:3334V:V:V:34V:V:V:34V:U/TTTT34TT34TTUYUYTTTTUYTTUYTTUY33UYTTUYTTUYUYU/32UYUYU/U/UYTT31U/3132UUUU32TLTLTLTL32TLTLUPUP3233TLUPTLUPTLTLTL3232UPUPUPUPUP32UP32UP33UP33UPTLUPTLUPUPUP32YBYBYBYBYBS:3232YB33S:S:33S:S:S:S0S:33S0S033S033S0S0S0S033S034S0S0S034S034T'T'T'T&34T&Y9Y93435Y*35Y*Y*35Y9Y*XV35Y9Y*Y9WFW-WFWFW-34WF35Y9Y9W-W-Y9Y93435Y935363737W(W(W(W-W-37WF3738393:VZVZ3:3;3;3<3=W/3=W(3>W(3>3?VOVOW(W(VOVOW.3>S93?3?3@W63AY9Y93A3BY9Y9Y9W(Y93AW(W(W(W(W(3AW(3AVUVU3AY9W(W(3A3BVUVU3BVUVUVU3B3CVUVUWQVUWQWQX#X#3BX#3BX#VU3CX#X#3CX#3CX#X#X#VU3C3D3E3EX#3FX#3FX#VU3GVUVUVU3G3GX#3H3IVSX#X#X#3HVSX#X#VSVSVS3HVSVS3HVS3HVSX#VSX#X#X#W7VSVSW7W73F3GW7W7W73GW7W7W7W7X#3GW,3GW7W73GW7W7W7W7W7W73GW7W73G3HW7W93HW9W7W9W9W9W73GW7W7W73G3H3I3IW9W9W9W93IW93J3JW<3KW<W93KW9W9W93K3L3MW93MW93N3NW<W<W<W<W<3NW<WTWTWT3NWTY%X%Y%TMTMULULUU3LUUUUULUEUL3LTM3LTMUL3LULULULUE3LULUEUETLUE3LTLTLUE3LULUL3LUL3L3MUEUEUIULUI3M3MTLUEUETL3MXNUPT&S9T&3MS9S9S93M3MWQWQWQW@3MW@W@W@W@WQ3MWQWQWQ3MWQ3MWQWQVVWN3MWNWNWNWQWNWNWNW+W+X#X#WEX#X#3JW+3KW+W+W+WE3J3KWEWEWEX#3KX#3KXXWEWE3KW7X#3LX#3LX#X#W9W9W9W<W9W9W93KW9W<W<W<3JW<W<W<W<W<3JW:3JW:W<W<W<W:W<W<3I3JW<W<W:3JW:W:W:W:3JW:W<W<3JW<X$X$W<W<W<W<W<3IW)W)3I3J3JW<W)W)3J3K3LW)3L3MW<W)X$X$W<W<W<W<W<X-W)3KW)W)3KW<W)W<W)W)3KW<W)W<W)W)X-WUWUWU3IWUX-X-WUWUVXVXWUWUWU3HWUWU3HWUWUWU3HWUWUWXWXWXWXY$WXX%UFUFT>3FUFUFUIUIUI3EUIUIUH3EUH3FUHUH3FTHTH3FTHTAV%3FV%V5T+T+T+3FV3T,3FT,XFSASA3FSZSZ3FS=S9S9SHSH3EWQVMVMWQWQVMVM3DX-W)X-X-3DVXVXVXVXX-VXX*X*3C3DVX3DVXVXVX3DVXVXVXVXX*VXW0W0X*W03B3CWUWUUI3CUIU*TYV7TYV7V7V7V7UAT:T:3AT:3ATQTITITDTDTD3A3AV#TITIS=S=3AS4S=3A3B3CS=S=S=3CS<S<XFSBSBSBSBSVS-T#S-S-T#3@S.S.3@S.S.S.T#SYT#T#SYSYSKSKSYSKSKSKSMT#SM3=SMT$SMT$SYSKSKSKSK3;SKS@SKS@SKS@3:S@S@S@SKS@SKS@39SXSXSXSXSX39SX39SXSXSXS1S1S/S/S1S1S/S/S1S1S?S?S?S?36SUW<W<W<W'35VXVXVXVXVXWKWKVXWKVXWKX-VXX-VXTITITD3232S-S-S-S-S-S-S.S-S-S-S.S.30S.31SMSMSM31S.31S.S.313233SMT$T$T$33T$33T$XESKSKXRSQS@S@SQS@S331S3S3S3S331S331SOSOSOSOSOSO3131SG32SGSOSO32SGSGSWSWSW3132SGSWW>VXW>W>W>W>W431W431W4W4W>31W432W?W?WLW?W?31W?W?Y$W?W$31W?W?WCWCU+U+U=U+U+U+U+U=U#U#3.U#U#U#U#3.S7S7S73.S73.XRSNSNSJ3.SJ3.SJSJSJ3.SJSNSN3.SJSNSNS7S73.SJSOSGSO3.SO3.3/SISOSOSO3/SISISI3/S8S83/S8SOS>SOS>3.S>SISISI3.3/3030SWSWSWS>30S>S>30SWS>SWSWSW30SW30S>S>S>30WCWCWCUB30V$V$V$V$V$30V.30V.V.V(V(T=30V(V(30U@T=30T=T=30U@T=U@T=U@T=T=V(U#3/V(3/U#V(V(V(V(3/V(V(V(V(U@3.V(U@U@SN3.SNSOSOSO3.SOSP3.SPSP3.SO3/30S>S>SP30SPS6S6S6SPSPSP3/S6S6S63/SR3/SR30S630SRSRW4WCW4WCU=U=U=3/U=V,V,V,V,U<V,V,U<U<3-T5U<U<T5T53,TGTGTGTGTGTG3,TPTP3,V.TGV.3,V.TG3,TGV.V.T=T=T=SNSNT(T(SD3*SCSDSCSDSCSDSDSDSE3)S6S63)SRSD3)SDSDSDSD3)SDT53)T5T5T5T;T53)T/3)T/T/T83)T8T0T/T/T2T/T/T03(3)T0T0T03)T;T;3)T;3)3*T;T;T;3*T;TGT;3*T;T0T03*3+V.3+T0T0T0T0T0V.V.T0V.3*V.SC3*3+SESCSESESESCSCSC3*SESESE3*3*SSSSSSSESESSSSSESE3)ST3)XDXDXDXD3)XDXDT3T6T3T3T53(T53)T3T33)3*3*3+T73,T7T0T7T0T0T0T03+T0T0T5T5T0T03*T.T0T.T5T.T03)T.T.T5T.T5T.T03(3)UMUM3)UMUM3)UM3*UMT03*T03+T0T03+T0T03+T0UM3+UMUMUMV.V.V.3+V.V.UMUMUMV.UMUMV.V.3)V.3)UMT.T.UMUM3)UMUMUMT.T.3(SSSESEXCX:X?X:X:3'X:XDXD3'XBXBX:XB3'XBXDXD3'XBXDXDXBXBXD3&XB3'V,T5V,T5V,T5V,T5T5T5V,T5T5T.T53$3$XBX:XBV,V,V,T/T43#T4T43#T4T4T4T43#T4T4Y7Y73#3$Y7Y73$Y73$Y7Y7Y7YHYH3$YGYHYH3$3%YHYUYUYUY7Y7YGYGYGY=Y=Y=2Z3#X.X&3#3$X&X&3$X.X&X&Y43$3%Y@Y4Y43%Y@Y@Y@3%Y@Y@Y43%Y4Y43%Y4Y4Y'3%Y'Y'3%Y,3&Y,Y'Y'Y'3&3&Y,3'Y,YH3'YUYUYHYH3'YHY3Y3Y,Y,Y3Y3Y,3&Y,3&Y,Y,3&Y,Y,Y,Y3Y3Y,Y,Y33%Y3Y33%YUYUYUY,Z&Y,Z&Y,3$3%3&3&Z&Y,Y,Z&Z&3&Z&YLYL3&3'YLZ$Z$Z$YLYL3&YLYVYV3&3'YV3'YVYG3'YGYGYGZ&Z$Z&Z&Z&YEZ&YEZ&YEZ&Z&Z$Z$YEYEYEZ$YEYEYE2ZYEYE2Z3#YGYGY=YGY=Y=Y=Y=YNYNYNYN2YYN2YYGYXYXYGYGYXYXYG2XYGYGYXYNYX2XYNYN2XYNYG2XYGYG2XYNYGYGYNYN2XYGYGYGYNYNYGYGYG2WYXYNYNYNYN2VYNYNYN2V2WX.Y=Y=YNYNYN2VYNYG2VYNYNYNYNYN2VX.2VX.YNYNX.X.2VX.YNYGYGYGYN2UX.X.2UX.X.X.YGYGYG2U2UX.2VX.2VYGX.2WX.X.2WX.WIWIVNWIX.X.2V2WX.X&X&X&WHWHWHVYVYVYVNVYWHWGWHWHWGWGVYWG2RW=W=W=WGWGVYWG2QW=W3W3W=W32QW3V=2QV=U>2Q2RU>U>2RV=U>U>U>U>2RU>2RV=U>U>V=V=U>U>2QTETETETLTLTTTTUT2PUTUTTLTLUTTLV?2OTLTLTLTUTL2OV;V;2O2PTUTUUGTUTL2OTLTLUG2OTLTL2OUGTLUGTLTLTL2OUGTU2OTLV;V;TU2OV;V;2OV;UKUK2OUKUPUK2OUKUPUKUP2O2OU$U$U$Y6YIY6YIY6Y6Y62NY:Y:YIYIY@2MY@YIY.Y.2MY.2MY.YI2NY.2NY.Y.2NY'2O2PY.Y.2P2Q2Q2RYI2SY'Y'2S2T2T2UY.Y.2U2VY.Y.Y'Y'2V2WY'2WY'2X2X2Y2ZY,2Z3#Y'3$3$Y,3%Y,3%Y,Y,Y,Y'Y'3%3&3&Y,3'Y,3'3(3)3*Y,Y,3*Y,Y.Y.3*3+Y.Y.YIYI3*Y.YI3+Y.YA3+3,Y,Y,YAY,3+3,YIYI3,3-YIYIY,Y,3-Y,3-3.YIYI3.YIYIYIYIYIYI3.YIYIZ)YIYIZ)Z)3-YI3-YI3.3.YI3/YIZ)Z)3/Z)YIZ)YI3/YI3/YI3030YM31YMYIYI3132YMYM32YM3233YIYI33Y,343535Z&36Z&36Z&37Z&Y,Y,3738Y,Y,Y,38Y,3839YK393:YKYKY,Y,Y,YKY,39YKYK39YKY,YK39YKYKYKYI39YI3:3:Y,3;Y,3;3<3=3>3>3?3@Z)3@3AZ)Z)3A3BZ)Z)3BY,3C3DY,Y,Z#Y,3CZ#Z)Z)Y,Y,Y,Z#Z#Z#Z#3B3BYM3CYMZ)Z)YM3CZ)YM3CYM3CYMYMYMZ)Z)3C3D3DYMYMYM3D3EYMYMZ)YM3EYM3E3FY,3GY,Y,Y,3GY,Y,Z#Z#Z#Z#Z#YMZ#Z#YMYMY,3DZ#Z#Y,3D3EZ#YKYKZ#Z#YKZ#Z#Z#YMZ#YMYMZ#Z#YMYMZ#Z#YMYMZ#Z#3@3AYMY?YM3AY?Y?3AY?Z#Z#3AZ#Z#Z#Z#Y?YM3@3A3B3BY?3C3DYKZ&YKYKZ&Z&3CZ&YKYKZ#YKYKYK3BYKYKYK3B3CZ&Z&YKYK3B3CYKYK3CZ&3D3EYKYK3E3FYKYK3FY-YKYKY-Y-YK3EY-Y-Z&Z&Y-Y-3DZ&Y-Y-Z&Z&Y-Y-Z&Z&Y-Y-Z&Z&Y-Y-Z#3AZ#Z#3A3BZ#Y0Z#Z#Z#3B3BY03CY03CY-Y-Y-3CY-3D3EY-Y-3EY-Y03EY0Y03E3FY0Y03F3GY0Y03GZ#Y?Y?3G3HY?3I3IY03JY0Y?Y?Y?Z'3IZ'Z'Z'Z'Z'YPZ'Z'Z'YPYPY0Y03GY0Z'Z'YPZ'Y0Z'Z'Z'Z'Z'3E3FZ'Z'Z'3FY-Y-3FY03FY0Y0Y0Y-Y-Y-3F3FY0Y0Y03FY0Y0Y0Y-Y-Y0Y0Y-Y-Y0Y0Y-Y-3D3E3E3F3G3HY03H3IY/Y0Y0Y03IY03IY03J3JY0Y+Y+Y03J3K3LZ'Y+Z'Y+Z'Y+Z'3KY0Y03KY/3KY/Y/Y/Y/Y/Y+3KZ&YEZ&3KYEYE3KYEZ&Y<Z&Y<Y<Y<Z&Y<YE3IY<Y<Z&Z&Z&3IZ&Z&Z&Y<YYYYY03HYYYYY/3HYYYY3HYYY<Y<Y/Y/Y<Y<3GY<3GY2Y/Y/3GY<Y2Y2Y<Y<Y23G3GY<3HY<Y<Y<3HY<Y23HY2Y2Y23HY23IY2Y23IY23IY<Y/Y/3I3J3KY/3KY/Y/Y/YEY<Y<Y<3JYEY<Y<YEY<Y<Y<Y<YGY<Y<YGYGY<Y<3GYG3HY<YGYGYG3HY<Y<Y<3HY<Y<Y<Z(Y<Y<Z(Z(Y<Y<3F3GY<Z(3GZ(Y<Y<YRYRYGY<Y<Y<Y<YGY<3EYG3EZ%Z%YGYG3EYGYQYQZ%YQ3D3EYQYQ3EYQYQYQ3EZ%Z%Z%Y<Y<Y<YG3D3EYGYGYGYG3EYGY<Y<Y<3E3EYGYGYGYG3EZ%Z%YGZ%YGYGZ%Z%YGYGYG3CYQYQZ%YQZ%YQYQYQYQZ%YQYQ3AYQZ%Z%WJWJ3@X.X.X.Z%Z%Y)Y)3?3@Y)Y)WJ3@WJWJX.X.3@X.VTVTVT3@VTVT3@VQVT3@VQVQ3@VQVQVQ3@X(3AX(W3W33AX'W3W33AX'W3W%W%W%3@3AWUWU3AWUWUWUW%W%W%WUWUX,WU3@X,X,3@X,WUWUWU3@U>TTU>3@U>3@U>TTTETETTTTTTTLTLTLTUTUTU3>TUTUTU3>3>U0U1U0TUTU3>3?TUTUTU3?TUV;3?V;TUTU3?3@TU3@3AUP3AU0TLU03AU03BU03BU53CU5TLU3TLTLU5U5TL3BTL3BTLTLUPUP3BUP3BUPUPUPU9U9U93B3B3C3D3EV;UP3EUP3EV;3FV;3F3G3H3IV;V;3I3J3JUPUPUPYB3J3KY>YBYBY>3KYBYB3KY>YBYBY>Y>Y>3JY>3K3KYI3LYBYBYIYBYBY>YBY>YBY>YBY>YBYBYBY>YBYBYB3HYB3H3IYBYB3IYI3JYBYIYI3JYB3J3KYBYBYIYBYBYB3J3KYIYIYIYMYIYIYMYM3JYMYIYIYI3JYMYM3JYM3JYM3KYMYIYIYI3KYIYMYIYI3J3KYMYMZ'YPZ'Z'Z'YPZ'3JYPYP3JYPZ'3JZ'Z'YPYP3J3KYPYJYPYJZ'3JZ'Z'3JYJZ'YJZ'3JYP3K3KY+3LY+YP3LYPYPY+Y+YPY+Y+3KY+3LYJYJ3LYWY+Y+3LY+Y+Y+3L3M3MYW3NYWYW3NYWYWY+Y+3NYSY+3NYSYS3NYSYSYSYSYSYWYSYSYS3M3NYSYSY*Y*Y/Y/3MY/YT3MYTYT3MY/YTYTYTYTY+Y+Y/Y/YT3LY/Y/3LY/3L3M3NYTYTYTY*Y*Y/Y/Y/3MY/Y/3MY/YT3MYTYTYTY/YTYTY/Y/YT3LY/Y/3LY/YTYTYT3LY*3LY*3MY*3MY*Y*Y9Y9Y*Y93LWZWZWZWZX/3LX/Y9X/X/X/X/X/Y93KX/X/3K3LX/X/3LX/Y9Y9Y93LX#X#Y9X#WZWZWZVWVWYGVW3JYGYGYGVWX/X/3IVW3IVWX#X#3IVWX#X#VWVW3IVWX/X/VWX/3HVWX/X#VWX#X#X#VWVW3GVWVWVW3GVWWSWSVS3GWSWS3GWSVSVSX#X#VSVS3FVSWSWS3FWSVSWSVS3F3FWSVSWSVS3FVSVSWS3FWS3GWSWSVS3GWSWS3GWSVS3GVSVS3GWSVSVSVNVNWP3G3GVNVNVNVNVN3G3H3HWY3IWYVNVN3I3JW#W#3J3KW#W#3KW#3K3LW#W#VNVN3L3M3MWYWYWYVNWYWYWY3L3MW,W,WYWY3M3N3N3OWYWY3O3PW,W,WYW,3PW,WYWYWY3PW,3PW,W,3PW,W,W,WYWY3P3QWY3QWYWYW,3Q3R3S3SWYWY3T3T3UW#W#3UW,W#W#W#W#W,W,W,3T3U3V3V3WW#3XW,W,3XW,WSW,3XW,3XW,WSWSW,W,3XW,3XWYWYWY3X3YWYWYWYWY3YWYWYWYWY3Y3YW#WY3ZW#W#3Z4#4#4$4%W#4%4&W#W#W#4&W#W#4&4'W#W#VNVN4'4(VNVN4(4)WUWUWU4)WUWUWUWM4(4)4*WMWU4*WUWM4*WMWMWMWM4*WTWTWMWMWM4*4*4+WTWT4+WTWTWTWU4+WUWUWUWM4+WM4+WUWMWMWUWU4+X+WMWMWM4+WT4+WTWT4+WTWTWT4+UYU>UYU>UYU>4+4+4,U>UYUYUYU>UYU>U>V:V:U>U>4*4+U>U>V:V:4*4+V:V:4+4,4-UY4-TTTTTTUYTTUYTT4,TTUYTT4,U/U/U/4,U/U/U/UU4,UUUU4,TT4-TT4-TLTLTLTL4-TLTLTL4-TLU:4-UPU:UPTL4-TLUPTLUP4-UPUPUP4-UPUPUP4-4.TLUP4.UP4.UPTLUPYBYB4.YBYBYBS:S:YBYBYB4-YB4-S:S:S:S:S:4-4-4.S:4/S0S04/S04/S0S:S0S0T'S0S0S0T'S0T'S0S0S0T'S0T'T'T'T'T&T'T&4*Y9Y9Y9Y9Y94*Y9Y*4*Y*Y*Y*Y9Y*XVY9Y9Y94)W-W-4)W-4)4*WFWFY9Y9W(W(Y9Y94)Y9Y9Y9Y94)W(4)W(W(Y9W(W(W(W(W(4(W(4(WFWFWFVZ4(VZVZ4(4)VZVZVZVZVZ4)VZVZ4)W(W6VZW6W6VZ4(W6W6W6W6W64(W6W64(4)W64)W64*VZ4*4+W(4+W(W6W(4+4,VO4-W(W(4-W(W6W6W.4-4-W6W6W6W6W6W6W/4,W/W/VOW6VOW64,Y9Y9W(W(4+Y9W(W(Y9Y9Y94+W(4+W(W(W(VU4+VUY9Y94+Y9Y9Y9W(4+Y9Y9VUVU4*VUVUVUY9Y9VU4*Y9Y94*VUX#X#4*X#VUX#VU4*X#X#VUVUX#X#VUX#4(X#VUX#4(X#X#X#VU4(VU4)4)X#4*X#X#X#VUX#4)X#VUVUX#X#VU4)VUX#VUVUVUX#VUVUVUX#VUX#VU4&4'VU4'X#4(X#X#VSX#X#VSVS4'4(VSVS4(4)4)4*X#VSVSVSVSW7VSVSW7W74(WS4)4*X#W7X#X#4)W,4*4+4+W7W7W7W7W74+W9W7W7W9W9W74*W9W9W9W9W7W9W7W7W74)4)4*W7W74*4+4,W9W7W9W9W94+W9W9W9W94+W9W9W94+W9W9W<W<4+W<W<W<W9W<4*W<4+W9W<W<4+W<W9W9W94+W<W<4+W<W9W9W94+W94+W9W<W9W<W<W<W9W<W<W<WTWTWTX%TLTL4(TLUEUEULUETMTMTM4'TM4'TM4(UETLUE4(UE4(UEUETLTL4(TLULUL4(UI4(4)UEUETLTLUE4)UIULUIULTLTL4(UETL4(UPUPS9S9T&S9S94'S9WQ4'WQWQWQ4'4(W@VU4(WQWQWQWQVV4(VV4(VVWQVVVVWNWNWNW+WEW+4'W+4'W+W+W+4'W+WE4'WEWEWE4'W+W+W+4'W+4(WEW7W74(W9W9W94(W94(W9X#W9W9W9W94(W9W<4(W<W<W<W<4(W<4(W<W<W<4(W<W<4(W:W<W:4(WUW:W:W:W:4(W<W<4(W<W)W<4(W<W<W<4(W<W<W)W)W<W)W)W<W)W)W<W<4&W)4&4'W)W)W)W)4'W)W<4'W<W<4'W)W<W)W<W<W)W)W<W<W)W)4%4&4'4(X-WUX-4(WUWU4(4)WUWU4)WUWUWU4)4*UFUF4*UIULUL4*UIUHTH4*TH4*THTHTHUHTHTHTHTHTHTA4)V5V<V54)4)4*4+4,V3V3V3T,SA4+SASZSZSZS=4+WQWQ4+WQW)W)W)X-4*X*VXVXX*X*VX4*X*X*4*VXX*X*4*4+VXX*4+X*WU4+4,WU4,W14-4.4.U*UIU*T:T:TI4.TQTQTITI4-TITDTIV#V#TITIS4S4S44,S=S=4,S4S44,S=S=S4S=S=S=S=S=S5S54*4+S.S.S-S.4+S.SMT$SMT$S@4*S@S@SKS@SKS@4)SXSXSXS@SX4)SXS@4)SXS@4)SUSUSUX-VXX-VXTDTDTD4(S-S-SVS-S.SM4'SM4'SM4(SMSMT$SMT$S.SMS.S.SMSM4&4'SM4'4(4)S.SMS.S.T$T$T$4(T$4(T$T$S3S3S34(S3S3S34(SFSFSOSFSO4'SOSGSGSG4'SG4'SGSOSGSOSOSOSGSGSGSG4&4&SW4'SWW>W>W4W4W>W>W4W>W>W>4%4&4&4'W4W4W?W$W?W?W$W?4&W$U#U#T-4&U#U#V(U#S7S7SNS7S7S7S7SNSNSJSNSJSJ3ZSJSJ3ZSJ4#4$SJSJSNSN4#4$4%SJ4%SG4&SGSGSGSG4&SO4&4'SISO4'SO4(SI4(SISI4(S8SOS8SGSG4(SISISISI4(4(S8S84)S>4)S>S>SGSWSGSWSWSWS>4(SWSW4(SW4(SWS>SWSWS>S>S>WLWC4'WCUBV$V$V$V$4&V$TPV.T-V.V.V(V(4%4&V(V(4&4'4'4(T=T=T=4(T=T=V(U#V(V(U#U#U#4'V(V(U@4'V(V(4'V(SNSOSNSO4&SOSPSO4&SOSPSPSOSOSPSOSPSPSP4%SOSOSPSOS>S>SP4$SP4$SPSPS6S64$S64$S6SR4%SR4%SRSRS6S64%S6U=4%V,V,4%T1T1T5U<U<U<4%TGTG4%TGTPTPTP4%TGTGV.V.TG4$TGV.4$SPSDSDSESDSESES64#SRS6SD4#SDSDSDSD4#SE4#T1T5T5T04#T0T0T8T8T/T8T8T0T8T0T/3YT/T/3YT0T/T0T0T0T03YT;T;T03YT03YT0T03YT;T;T;3YTGT;TG3Y3ZT;4#4#V.V.V.4#V.V.V.T;4#T0T04#V.V.V.SCSC4#SESCSCSC4#SCSESESESESE3Z4#SE4#SE4$SESTSTSTX;X;X;XD3Z4#XDXDT3T34#T34#4$T5T54$T3T54%T3T34%T3T74%T7T7T0T04%T0T7T0T7T04$4%T.T.4%T0T.T.T04%T.T.4%V.4&UMT0UMT0UMV.V.4%4&T0UM4&UM4&UMUMUMT0T0T04&T04&T0T04&T0T.4'T0T0T0UMUMUM4&UMV.V.4&4'V.V.4'V.T0T0T.T.4&UMT.UM4&SSSESSX<X<XDX<XDXD4%XDX:XBX:XBXB4$XBXBXDXD4$4%4%XBXBXBT54%T5T5X:XBX:XB4$4%T4T44%4&T4T4T44&T4T4YU4&YUYU4&4'YU4(Y7Y74(Y74(4)Y7Y7YHYGYGYGYHYHYGYGYHYHYGYGX.4&X.X.4&X.X&X&X.X.4&4'X.X.X&X&X.X.X&4&Y44&Y@Y@Y44&Y@Y@Y44&Y@Y@Y@Y@4&Y@Y44&Y4Y4Y@Y@4&Y@Y'4&Y'Y'Y,Y,Y'Y,Y'Y,Y'Y,4$Y'Y,Y,Y'Y,4$Y,4$Y,Y,Y,YHYUYUYUYHYH4#4$Y3Y3Y34$Y,4$Y,Y,4$Y,Y,Y,4$YUY34%Y3YUY3Y3Y,Z&Y,Z&Y,Y,Y,4#4#Z&4$Z&4$Z&Y,Y,Z&Z&4$Z&4$4%Z$Z$YLYLZ$Z$YLYLZ$Z$YL4#YLYL4#YV4$YVYVYGYVYVYGYG4#YGYEYGYEYEY=Y=YGYGY=Y=YGYGY=YNY=Y=YGYGYGYXYXYXYGYXYXYNYXYXYNYN3TYNYGY=YGYGY=Y=YGYGYNYGYGYGYGYGYGYNYXYNYNYNYNX.3OX.YN3OYNX.YNYNYN3OYNYN3O3PYNYN3P3Q3QX.YNYNX.X.3QX.3QX.X.X.YG3QYGYGYG3QYG3RYGYG3RX.3RX.X.X.3R3SYGYG3SYGX.X.3SX.WOWOX.3SX.X.3S3TX&X&3T3UW=W=W=W=W=3U3UW3W3W3V=V=V=3UV=V=3UV=V=V=V=3UV=V=3UV=V=U>V=U>V=V=3T3UU>TETETEUT3TUTUTV?V?3T3UUGUG3UUGV;V9V;3UV93U3VV;UGUGTLTLTUTUUGUG3TUG3UTLTL3UTLTL3UTU3VTLV;V;TUTUV;V;3UTUUKUK3U3VUPUPUP3VUK3VUPUPU-U$U$U$Y6Y6Y6Y:Y@Y@Y@YIYIY.YI3SYI3SYIYIYIY.YIYIY.Y'Y.Y.Y'Y'3QY'Y.Y'Y.Y.3PY.Y.Y.Y.3P3Q3R3R3SYI3TY.3TYIYIY.Y.3T3UYI3UYIYI3UY'Y.Y.3U3VY.Y.Y'Y'3V3W3WY'Y.Y.3WY'Y.3XY'Y'3X3Y3Y3ZY.Y.3Z4#Y.Y.Y'Y'Y'4#4#4$Y'4%Y'Y'4%4&Y'Y'4&Y,Y,Y,4&Y,Y'4&Y'Y'Y'4&Y'Y'4&4'4(Y,4(Y,Y,Y,4(Y,Y,Y,Y'4(4)4*Y'Y'4*4+Y'4+Y'4,4,4-4.4/4/Y,40Y,Y.40414242Y,Y'434344Y.Y.Y'44Y.Y.Y,Y,44Y,YI44YIYI4445YIYI4546YIY.Y.Y.YIYIY.YAY.45YAYA45YAY.45464747YA4849YAYA49YA49Y,4:Y,Y,Y,4:4;YI4;YIYI4;4<YIYI4<Y,YIYIYIYIYIZ)Z)Z)Z)4;YIYIYI4;YI4;YIYI4;4<4=4>4>YIYIYIZ)Z)4>4?Z)Z)YIYIYI4>YMYMYIYMYI4>4>YMYMYMYMYM4>YMYI4>4?YMYIYMYMYM4>YMYMYMY,Y,YIYIY,Y,YI4=Y,Y,4=Y,YI4=4>4?4?Y,Y,Y,4?Z&4@Z&Y,4@Y,4AY,4A4BZ&Y,4BY,Y,Y,Y,YKYKY,YK4AYKY,Y,Y,4A4A4BYKYK4BYKYKYK4BY,4CY,Y,4C4D4EY,Y,Y,YKYKYKY,Y,Y,YKYKYK4B4C4DY,4DY,Y,Y,YIY,4DY,4DY,4EY,4EY,4F4GY,Y,4GY,4G4HZ)Z)4H4IZ)Z)Y,Y,Y,4IY,Y,4IY,4IZ)Z)Z)Z)4IZ)4J4J4KZ)4LY,Y,4LZ)Y,Y,4LZ)Y,Y,4LY,Z)4LZ)Z)4LZ#4MZ#Z)4MZ)4NZ#Z#4NYMZ)Z)Z)YM4MYMYMYM4M4NYMZ)Z)4N4OYM4O4PYMYMZ)4PZ)Z)4PYMYMYM4PZ)YMYMYMZ)YMYMYMYM4OYM4O4PYMYMY,4PY,4Q4Q4RZ#Z#Z#Z#4RZ#Y,Z#Z#Z#4QZ#Y,Y,Y,Y,4Q4RY,Y,Y,4RZ#Z#YMY?Z#Z#Y?4QYM4QYM4RY?Y?4RY?Z#Z#4RZ#YM4RYMYMYMYMYMZ'YMYMZ'4Q4QY?4R4SYM4SY?Y?4SY?Y?Y?Z&Z&YKYKYKYK4RYKYKYK4R4SYKYK4SYKZ&Z&4S4TZ&Z&YK4TZ&Z&4T4UYK4UYKYK4UZ&4V4WYKYKYK4W4WYK4X4YYKYKY-Y-YKY-4XY-Z&Z&Y-Y-Z#4WZ#Z#4W4X4Y4Z4ZZ#Y0Y0Z#4Z5#Y0Z#Y0Y0Y0Z#Y0Y0Y04YY-Z#Y-4YY-Z#4ZZ#4ZZ#5#5#5$Y0Y0Y-Y-Y05$5$5%Y0Y0Y-5%Y0Y05%5&Y0Y05&5'Y0Y05'5(Y0Y0Z#Z#Z#5(Z#Y?5(Y?Y?Y0Y?Y?Y?Y?Y?Z'Y0Y05&Y05&Y0Z'Z'Y?5&Z'Z'Y0Y05&Y0Z'5&Z'YP5&Z'YPYPZ'Z'YP5&Y0Y05&Y0Y-Y-5&Y-Y-Y0Y0Y0Y-Y-5%Y05%5&Y0Y0Y0Y-Y0Y0Y-Y-Y0Y0Y-5$Y-5%5%YYYYYY5%5&5'Y0YYYY5'YYY0Y/5'Y/Y05'Y0Y/Y0Y0Y0Y+Y0Y0Y05&5&Y+Y+Y+Y0Y05&Y0Y0Y05&Y0Y+Y/Y+5&Y/Y/5&Y/Z'Z'Z'Y+Y05%Y0Y0Y0Y/Y/Y/Y+Y/5$Y/Z&YEZ&Z&YEYEZ&5#YEYE5#5$Z&Z&Z&Y<Y0YY5#Y/Y/5#Y/Y/5#YYY/Y/5#5$Y2Y2Y2Y2Y/5$Y25$Y25%Y2Y<Y2Y2Y2Y<Y2Y<Y2Y<Y2Y2Y2Y<4Z5#Y25#Y2Y2Y25#Y25$Y25$Y2Y2Y2Y2Y25$Y/5$Y/Y/Y<Y<Y<5$Y<Y<5$Y/Y/5$Y/Y/Y<5$Y/Y/YEYEY<Y<YGYG5#YGY<5#Y<Y<5#5$Y<Y<Y<YRYRYR5#5$Z(Z(5$5%Z(Z(5%Z(Z(Z(5%YGY<YGYGYGZ%Z%YGYG5$YGYGYGYQYQYGYGYQYQYGYGYQYG4YZ%Z%Z%Y<Y<YGYGY<YGYGYG4WYG4X4YY<Y<Y<4YY<YG4YYGYGYG4YYGYGYGYQYQYQYQ4XYQYNX.X.X.Z%Z%Y)Y)4VY)Y)Y)X.4VWJWJX.X.X.4VVTVT4V4WVTVTVQVQVTVTVQ4VVTVT4VVQX(X(4VX(4VX(X(X(X'4VX'X'4VX'X'X'WU4VWUWU4V4WWUWUW%W%4W4XWUX,WU4XX,X,4XX,WUX+X+X+U>TT4WTT4WTTU>TTTUTU4WTUTUTUTU4WTL4WTLTLTUTU4WTUTUTU4WTUTU4W4XV;4X4YV;V;TUTUTU4YTUTU4Y4Z4ZV;TUV;TUTU4ZUPTLU0TLU0TLU0TLU0TLU0TLU0TLU5TL4W4WU5U5TLTLU4TL4WTL4WTLTLUPUP4WUP4WUPUPUPU9U9U9UPU94VU9U9UPUP4VUPU9U9UPUPU9UPUPUPV;UPV;4T4TV;4UV;4UV;4VV;V;4VV;V;UPUP4VUPV;V;UPUP4UUPUPUPV;V;V;4UV;V;4UUP4UUPUPUPYBYB4UY>4UY>Y>Y>YBYBY>Y>YBYBY>Y>YBYB4SYB4SYBYBYBYBYI4SYI4S4TYBYBYBYB4TYBY(4TY(Y(4TYIYBYBYIYI4T4U4UYIYBYBYBYIYBYBYIYI4T4UYIYI4U4VYI4VYIYIYMYMYIYIYM4UYIYIYI4UYIYIYMYMYIYIYIYM4TYM4TYMYIYMYIYIYIYMYM4SYM4T4TYM4UYMYPYPZ'YPYPYPZ'YP4SYPZ'YPZ'YPZ'Z'YPYP4RYPZ'4RZ'Z'Z'YPZ'4RZ'Y+YPYPYPYPYP4QY+Y+YPY+4PY+Y+Y+YP4PYPY+Y+Y+Y+YTY+YTY+Y+YJYJYJYWYJY+Y+Y+YWY+YWYWY+Y+YWY+YJYWYJYWYJYWYJYWYWYS4H4IY+Y+YS4IY+YSYSYSYSY+YSYSYSYSY*Y*YSYSY*Y*4EY/4F4GYT4GYTY/4GY/Y/Y/Y/Y/YT4GY/Y/4GY/Y/Y/Y/4GY/Y/4GYTY/4GYTYTY/Y/Y/4GY/Y/4GY/YT4GYTYTY/Y/YTYTY/Y/YTYTYTY9Y9Y94DY94EY9Y*Y9Y9Y9Y*4DY*4EYGYGYG4EX/X/Y9X/Y94DY9Y94DY9Y9Y9Y9X/Y9Y9X/X/4CX/Y9X#4C4DVWYGVWVWVWVW4CVWVWVW4C4D4DVWX#X#VWVW4D4EX/VW4EVWVWVWX#X#VWVW4DVW4DWSVSVSWSWSVSVSVSVS4CVS4CWS4DWSWSWSVSWS4CWSVSWSVSWSVS4CWSWSWSWYWS4BWSWSWSWSVSVSWSWSVS4AVS4AVS4BWSWS4BWSVNVN4B4CWPVNVNVNVN4BVN4C4C4DWYWYVNVNVN4D4DWYWYWYVNVNW#W#VNVNW#W#W#W#W#4BW#W#4B4CW#W#WY4CW#4CW#W#VNVN4C4DVNWYVNWY4CWYWYWY4CWYWYWYWYWYWY4CWYWY4CWY4C4DW,W,4D4EW,W,WYWY4E4FWY4FW,W,4F4GW,W,4G4HW,W,WYW,W,W,WYWYWYW,WY4FW,W,4FW,W,W,WYW,W,W,WYWYW,WY4D4EWYWYW,4E4F4GW,WY4G4HWYWY4HWY4HWYWYWYWYWY4H4IW,W,W,4IW,W,4I4JW,W,W#W#WYWY4I4JW#4JW#W#4JW#W#W#4JWY4KW#4KW#4LW#4L4M4N4OW,W,WSWSWSW,WSW,4M4NWSWSW,W,W,4NW#4NWYWYWY4NWYWYW#4N4O4PWYWY4PWYWY4P4QW#W#W#W#4Q4Q4RWYWYW#W#4R4SW#W#4S4TWYWYWY4TWYWY4TWY4TWYW#W#4T4U4V4W4W4XW#W#4X4YW#4ZWY4Z5#W#5#W#W#W#W#5#W#W#5#W#W#W#W#5#W#W#5#W#W#W#WUWU5#5$WUWUWU5$WUWM5$WMWU5$WMWMWU5$WUWMWUWU5$WMWMWMWT5$WM5$WTWTWM5$5%5&WMWMWTWTWMWT5%5&WUX+WU5&WU5&WMWMWUWU5&WMWUWUWUX+WMWT5%WTWM5%WTWTWM5%5&WTU>UYU>UYUYUY5%UYU>5%U>U>5%UYUYUY5%5&V:V:5&V:V:V:U>U>V:5&U>U>5&5'U>5'V:UY5'UYUYUY5'UYU/U/5'5(5)5*UYTTUYTT5)5*U/U/5*5+U/U/5+5,UU5-TTTT5-TT5-TTUUUU5-TLTTTLUPUPTLUPTLTLU:U:U:UPU:U:TL5*UPUPTLUPUPUPTLUP5)UPTLUPTLTLUPUP5(UPTLTLTL5(TL5(TLTL5(YBY>YBYBYB5(YBYBS:5(S:5(S:S:S:S:S0S:5(S0S05(S0S:S0S:S:S0S05'S05'S0S:S0Y9Y9Y*Y*Y9Y9Y*Y*Y*Y9Y*Y*Y9Y9Y9Y*W-W-5#5$WF5$WFWFW-W-WFWFY9Y95#W(Y95#W(W(Y9Y9W(Y94ZW(W(W(W-4ZWFWF4Z5#VZVZ5#5$VZVZ5$5%VZW(VZVZVZ5%VZVZ5%W(VZ5%VZW6W6W6W6W/5$5%W/W/W6W6W6VOW6W/5$W/W6W/W6W6VZW(VZW(VZVZ4Z5#W65#W6W6W6W(VOVOW(W(VO4ZVO4ZVOVO4Z5#VOVO5#W65$W6W.5$S9W6W6W/5$W/5$VO5%VOY9Y9Y9W(Y9Y9W(5$W(W(W(5$W(5$VUVUY9Y95$Y9Y95$VUVUW(VUW(VUVU5#VUVU5#VUVUVU5#X#5$X#X#X#VUX#VUX#VUX#VUVU4Z5#VUVUVU5#VU5#VUVUVUX#5#X#5#X#VUX#VUVUVU5#5#5$VUVU5$5%VU5&VUVU5&VUX#X#5&X#VUX#VU5&VSVSX#5&VSVS5&X#VSVSX#5&VSVS5&VSX#5&X#X#5&VSVSVSWSWSW7WSW75%W7W75%W7W7W7W,W,5%W,W75%W7W75%W,5&W7W7W75&W75&W95'W95'W95(W9W7W9W7W9W75'W7W75'W9W7W9W7W7W75'W7W7W75'W75'5(5)5)W95*W9W9W<W95*W95*W9W9W9W<5*W<W9W<W9W<W9W<W9W95(W<W9W<W95(W95)W<W<5)W<W9W95)5*5*W<W9W<TLTL5*5+TMTMULTMULUL5*UL5*ULTMUL5*TL5+TL5+TL5,5-TLTLUETLUI5,UIUI5,TLUE5-TLTL5-TLUE5-UE5.TLTL5.UETL5.UPUPS9S9S9WQ5-WQWQWQVU5-W@VU5-X#VUVUW@5-WQWQWQWQWQVVWQVVWQVVW+WEW+WEW+WEW+5*W+5*W+5+5+WE5,WEWEWE5,W+5,W+W+W+W+W+W+WEX#W9X#W9W9W95*W95*W9X#X#W9W9W9W<W9W9W9W<W<W<W<5(W<5(W<W:W<W:W<5(W:W:5(W:WUWUW:5(5(5)W<W<W<W<W)W<W<W<W<W)W)W)W<W)W<W<W)W<W<W<W)W)W<W)W)W)W)W)W<W<W<4ZW<W<4ZW)W<W)W)W)W)4Z4ZW<5#W<W)5#W)W)5#W<5$W<WUWU5$5%WUWU5%5&WUWU5&5'WUWU5'WUWUWU5'WX5'WUWXWUT>T>T>5'5'5(UIUIUHTHUHTHUHTHUHTH5&THTATAV<V<V5V5T+T+T+5%T+T+5%UCUCU?U?U?5$V1V1V1SASZ5$SZSZSZS=S=WQWQWQVMX-X-4ZX-X*4ZVX5#X*5#5$VXVX5$VX5%X*X*5%X*VX5%VXVXWU5%WUWU5%5&5'5(5(W1W1W1W1W1WUWUW1W1WUWUUIUIUIU*T:T:TITITD5$TD5%S4S45%S4S=S4S4S4S45$S4S4T#T#S.S.T#T#S.S.S-S-S-S.S@4YS@S@4YSX4ZSXS@4ZS@S@4Z5#S@S@S?S?S?SUTDTI4ZTIS.SMS.SMS.SMS.SMS.SMS.S.4WSMS.4XSMSM4XSM4XT$SMT$SM4XSMSM4XT$T$T$T$4XT$4YT$4YT$4Z4Z5#SJSJS3S35#5$SO5$SOSGSGSG5$SGSO5$SOSOSG5$SGSWSGSGSGSW5#SWSWSWW>W>5#5$W>W>5$5%5%WVWVWVWVWV5%5&W$5&W?W?5&U#5'U#SJS75'S7SNSNSJSJSJSJSNSJSJSJSJSNS75$S75%5%5&SJSJS7SJSJSJSOSG5%5&5&SGSOSGSGSGSISGSOSO5%SISO5%SOSISOSI5%SI5%SISOSOSISISIS8SO5$SOS8SGSGSG5$SIS>SIS>5#5$S8S8S85$S8S85$S>S>S>SWSWS>5$SWSW5$SWS>S>5$SWWLWCWCWCV$5#V$TPT=V(V(V(V(V(4ZV(T=V(T=4ZV(U@U@U@V(4YT=T=4YT=T=T=4YU@T=T=U#V(V(V(V(V(U@U@V(V(U@U@4VSOSPSPSOSPSPSPSP4USPSPS>S>SP4U4US6SPSPS6S64US64US6SRS6S6S6SR4USR4USRSR4US64V4WU=V,V,V,4VT1T1T1U<4VTGTGTGTG4VTGTPTP4VTPTGTGTG4V4VSPSDSPS6S6S64VSDSDSD4V4VSESESET1T1T5T1T0T;T0T0T/4TT/T/4TT0T/T0T0T0T04TT0T;T04TT04TT0T04TT;4UT;4UTGT;TGT;T;T;4UV.V.4UV.4UV.T0T0T04UT0V.T0T04U4VT;T;4V4WT04WV.V.SCSCSCSESCSCSC4VSE4VSSSS4VSSSSSSSESE4VSS4VSSSSSSX;4VXDXD4VXDXDXDT3T3T5T3T54UT5T5T3T34UT5T3T3T54U4U4VT5T5T3T34VT5T0T0T7T0T0T04U4VT04VT0T.4V4WT.4XT0T0T.T.4WT.T.T.T0T04WV.4WUMUMUMUMV.UM4WV.V.4WV.T0T0T04W4WUMT0UMT04WT0T0T04WT04XT0T04XT0T0T0T.4XUMUM4XUMV.V.V.4XV.V.4XV.4XUMUMUMUMUMT.4XSESSSE4XXDXD4X4YXB4YXBXBXDXD4Y4ZXDXD4ZXBXB4ZXBXB4ZT.T5T54Z5#T4T4T/T/T4T4T/4ZT4T44ZT/T4T4T/4ZT4T4YUY7YU4ZY7Y7YUYUY7Y74YY7YU4YYUYU4YY7YUYUYUYUYUY7YU4XY7Y7X.X.X.4XX.X.4X4YX&4YX&X&4YX&X&X&4Y4ZX&X&Y4Y44Z5#5#5$5%Y@5%5&Y@Y@Y@Y@5&5'5'Y4Y4Y4Y@Y@5'5(Y,Y,5(Y,Y'Y'Y,Y,5'Y,5(Y,5(Y,5)Y,YHYH5)5*YHYH5*YHY3Y3Y,Y,Y35)Y,Y,5)Y,Y,Y,YUYUY3YUY3YUY35(Y,Y,Y,Z&Y,Z&Y,Z&5&Z&Z&Z&Y,Z&Y,5&Y,5&Y,Z&YLYLZ$Z$YLYLZ$5%YV5%YLYLYVYV5%YV5%YLYLYL5%5&5'YG5'5(YXYNYNX.X.X.YN5'YNX.YNYNYN5'YNYN5'5(YNYN5(YNYNYN5(5)5)X.5*X.X.X.YNYNX.X.5)X.YNYN5)X.5)5*YGYGYGYGYG5*YG5*YGX.YGYGYG5*5*X.X.X.YG5*X.X.YGYGX.YGYGYGX.5)X.X.WO5)X.X.X.X&5(5)X&X&5)X&X&X&WGWGW=5)5)WGW=W=W35)W3W3W=W=W=W3V=V=V=5(V=V=5(V=V=V=V=5(V=V=5(5)V=V=V=5)V=V=5)V=5)TLUT5*5*5+V?TL5+TLTLTL5+UG5,5-5-V9V;5.5.V;V;V;5.5/V;V;UGUG5/UG5/50TLTLTLUGTL50UGUG50TU50TLTLTL5051TUTUUKUKUK51UKUK51UKUPUKUPUKUKUK50UKY.Y.YI50YI50YIYIY.Y'Y.50Y'Y'Y.Y.Y.Y.5/505051YIYI51YIYIYIY.Y.5152Y.Y.52Y.5253YI54Y.Y.Y.545455YIYI55Y.56Y.56Y.YIYIY'Y'56Y'Y'Y'56575758Y.Y.Y'Y'5859Y'Y.595:Y'Y'Y.Y'Y'Y'Y'Y.Y.Y'Y.Y.57Y.Y.Y.Y.Y'Y.57Y.57Y.Y.Y'Y'57Y.Y'57Y.Y.57Y'5859Y'Y'Y,Y,Y'58Y'Y'Y,Y,Y'Y,Y'57Y'Y'Y'57Y,Y,5758Y,Y,Y'Y'Y,Y,Y,Y,57Y,Y'Y,Y'Y'Y,56Y'57Y'Y'Y'57Y'5758Y,Y'Y,Y,Y,Y,Y,57Y,57Y,Y,Y,Y'57Y'Y'5758Y,Y,58Y,Y,Y,58Y.Y.Y.Y'58Y.59Y'Y'Y'59Y'59Y'5:Y'5:Y'Y'Y,Y,5:Y,Y'Y'Y'5:Y,Y,5:Y,5:5;Y,Y,5;Y,5<Y,5<Y'5=Y'Y.5=5>5?5?Y'Y'Y'5?Y'5@5A5A5BY'5C5C5DY.5EY'Y'5EY'5E5FY'Y,Y,Y,Y.Y,Y.Y.YIYIY.Y.YI5DY.Y.5DY.Y.5DYIYIYIY.YIY.Y.YAY.5CYAYA5CYAY.Y.Y.5CYI5CYIYI5C5DYIYI5DYAYAYAYAYA5D5EYAYAYA5EYAYA5EYIYAYA5E5F5FY,YAY,YI5FYI5GY,Y,5GY,5GY,YIYI5G5H5IYI5I5JYIYIY,Y,5J5KZ)Z)YIYIYI5JZ)Z)Z)5JYIYI5J5K5LZ)5L5MYIYI5MZ)Z)5NZ)YI5N5O5O5PYIYIZ)Z)YIYIZ)Z)YIYIYIYIYMYMYIYMYI5MZ)Z)YMYMYMYM5LYMYIYI5L5MYIYMYIYI5LYMYMYMY,5LYIYIY,Y,5LY,YI5L5M5NYIYI5NY,5NY,Y,Y,5NY,Y,Y,Y,Z&5NZ&5NZ&5OZ&Y,Z&5OZ&5OZ&Y,Y,Y,5OY,5PY,Y,Y,Z&5OZ&5PZ&5PYKYKYKY,Y,Y,5PY,Y,YKYKY,Y,YKYKY,YKYKYKY,Y,5MY,YKY,YKYKY,5L5MZ&Y,5MY,5N5NZ&Z&Z&YIYIYI5NYI5N5OY,YI5OYI5P5P5Q5RY,YIYIYI5RYI5RYIYIYIY,5RY,5RY,YIY,5RY,YI5SY,Y,5SY,Y,Y,Y,5S5SZ)Z)Z)5S5TZ)Z)5T5UZ)Z)Z)5UZ)Z)Y,Y,Y,5UY,Y,5UY,5U5VZ)Z)Z)Y,Z)Z)5UZ)Z)Z)Y,Y,5UY,Y,Y,5UY,Z)Y,Z)Z)Y,Z)Z)Z)5S5TZ)Z)Y,Y,Z)Y,Y,Y,Z)5SY,Y,Z#Z#5RZ#5SZ#Z)Z#Z)5S5SZ#5TYZZ#Z#Z#YMZ)Z)Z)YMZ)Z)YMYMZ)Z)YMZ)Z)Z)Z)YMZ)Z)Z)5O5OZ)5P5QZ)YM5QYMZ)Z)Z)5Q5QYM5RYMYM5RYMYMZ)5RYMYMZ)Z)Z)5RZ)YM5RYMY,Y,Y,5R5RZ#Z#Z#Y,Y,Z#Z#5QZ#Z#Z#Y,Z#Y,5QY,5QY,Z#Y,Y,Y,5QY,Y,5QZ#Y,Y,Y,Z#Y?Z#Y?Y?YMYMYMY?5NY?5O5PY?Y?5PY?Z#Z#Y?Y?YMYMYM5OY?Y?Z'5O5OY?Y?Y?5O5PYMYMY?Y?5P5QYMYM5QYM5QY?5R5SYKYKZ#YKYKYKYKZ#YKYKZ#5QYKYK5QYKZ&Z&YKYKZ&YKYKYKZ&Z&YK5OZ&Z&5O5PZ&Z&5PZ&YK5PYKYK5PZ&YK5QYK5QYKYKZ&Z&5QZ&YKYKYKY-YKYKYK5P5PY-Y-Y-5PY-Y-Y-YKY-Y-Y-YK5OZ#Z#Z#Z#Z#5OZ#Z#5OY0Z#Y0Z#Z#Y0Y0Z#Z#Z#Z#5MZ#Z#Z#5MZ#Z#5MY0Y05MYKZ#YKZ#5MZ#5N5N5OZ#5PZ#5PZ#5QZ#5QZ#Y05QY-Y0Y0Y-Y-Y0Y0Y-Y-Y05PY05PY0Y0Y-Y-Y0Y0Y-Y-Y0Y0Y-Y-Y05NY-Y-5N5OY-Y-5O5PY-5PY0Y05PY-Y0Y05P5QY0Y0Z#5QY?Y?Z#5Q5R5SY0Y05SY05SY0Y?Y?Y?Y?Y?5SY0Y05SY0Z'Z'5S5TZ'Z'5TZ'5TZ'YP5UY0Y05UY0Y-Y-5U5VY05VY0Y0Y-Y0Y0Y05UY0Y0Y0Y-Y-Y-5UY-YYYYYYY-YY5TYYY-Y-Y-5TYYYY5T5U5U5VY0Y0YYYYY0YYY0Y/Y/Y/Y0Y/Y/Y/Y0Y0Y05SY05SY+Y+Y0Y05SY0Y0Y0Y05SY+Y/Y+Y+Y/Y/5R5SY05SY0Y/Y+Y+Y+Y/5RYEZ&5SY<5SY<Y<5SY<Y<Y<Y0Y/Y/Y/YYYYY/5RYYYY5RY/Y<Y<Y2Y2Y<Y<5QY<5QY2Y/Y2Y<Y<Y2Y2Y25PY2Y2Y2Y<Y2Y2Y<Y<Y2Y<5NY<5OY<Y<Y<Y25OY25OY25PY25PY2Y<Y2Y2Y<Y<5OY<5PY<Y<5PY<Y/5PY<Y/Y/5PY/Y/Y/Y<5PY/Y/YGYGY<5P5PYGY<YGYGYGY<Y<YGYGY<Y<Y<Y<Z(Z(Y<5MZ(Z(5MZ(Z(Z(5M5NZ(Z(Y<Y<Z(Z(YGYG5M5NYGYGZ%Z%YQZ%Z%Z%YGYGY<YGY<5K5L5MYGYG5MYGY<YGYGYGY<YG5LYGYGYGYG5LYQYQZ%Z%Z%Z%5KY)X.X.WJWJX.X.VRVRVTVTVQVQVTVTVQVQVT5GVQVQ5GVQVQVQVNX(VN5G5G5HX(X(5HW3X'X'W35H5I5JW%W%WUWUW%W%WU5IW%W%5IW%WUW%WUWUW%W%WUWUWU5GWUWU5G5HWUWUU>U>U>5H5H5IU>U>TUTU5I5JTUTU5J5KTL5KTL5LTUTU5L5MTUTU5M5NTUTU5N5OTU5OTU5PTUTU5PV;TUV;V;V;TUTUTU5OTUTU5O5PTUTU5P5QTU5QTU5RTUTU5RUPTLU55RU5TLU5U5U5TLU4TLU4TL5PTLTLU0UP5PUP5PUPU0UPU9UPU95P5PUPU9U95PUP5QUPTUTUTU5QTU5Q5RV;5RV;5SV;5SV;V;V;5SUPV;V;5SUPV;5TV;UPUPUPV;V;V;5SV;UP5SUPUP5SUPUP5S5TY>Y>YB5T5UY>Y>Y>Y>5U5UYBYBYBYBYBYB5UYB5UYBYB5UYIYBYBY>YB5UYBY(5UY(Y(YIYIY(Y(YI5T5U5VYIYI5VYIYB5VYBYBYIYI5V5WYIYIYBYBYIYI5V5WYIYI5WYIYIYMYIYMYMYM5VYMYIYI5V5WYIYM5WYM5WYMYIYMYMYMYM5WYM5WYMYMYMYM5W5X5X5YYMYM5Y5ZZ'6#6#YPZ'6$6$YPZ'Z'6$YJZ'6%YPYPYP6%YPYPYPY+YPY+YPY+YW6#YW6$6$YSYSYSY+Y+YSYSY/Y/6#Y/Y+6#Y+Y+6#6$Y+Y+YTYT6$Y/YTY/Y/Y/YTY/YTYTY/Y/5Z6#Y/Y/6#6$6$YTYTYT6$YTYTYTY/Y/Y/6$Y/Y/YT6$6$YTYTYT6$Y96%Y9Y*6%Y*6&Y*Y*Y*Y9Y*Y9Y*Y9YGWZYGWZX/X/Y9Y9X/X/Y9Y9X/X/Y9X/Y9Y95X5YX#X#5YX#VWVW5YVWVWVWX#X#5XVWX#X#X#5XX#X#VWVWX#X#VWVW5W5XX/X/5XVWVWVW5X5YWSWSVSVSX#VSX#X#5WWSVSVSVSVSVSWS5VWS5WWSVSWSVSVSWSWS5VW,5VWSVS5WWSWS5WWSVS5WVSVS5WWSVSVSWP5WWPWPVNVNWP5WVNVNVN5WWY5WWYWY5W5X5YWY5Y5ZWYWYVNWYWYWY5Y5ZWYWYW#W#W#5ZW#W#5Z6#6#WYWYWY6#W#WYW#VNVN6#6$W#6$W#W#VNVNW#W#6#6$WYWYVNVNWYWYWYWYWY6#WYWY6#W,W,6#W,W,WYWYW,W,WYWYW,W,WYWYW,W,WY5XWY5Y5YW,W,W,WYWYWY5YWYWY5YWYWYWYW,5YWY5Y5Z6#6#W,6$W,WYWYWY6$WYWYW,W,W#W#WY6#W#W#6#WYW,W,W,6#W,6#W,WY6#6$WYWYW,WYW,W,WYWY6#6$WYWY6$WY6$WYWYWYWYWYWY6$WYWYWY6$W,W,W,W#W,W,W#W#5Z6#W#W#W,6#W,W,6#6$6%W#W#W,W#6%W,W,6%6&WYWY6&W,6&W#W#W#6&W#6'W#6'W#WYW#WYWYW#6'W#W#6'W#W#6'W#W#6'W#W#W#WS6'WSWS6'W,WSWSW,6'W7W7W#6'W#WY6'W#WYW#W#W#6'6(WY6(WYWY6(6)WYWYWYWY6)WYWYWYWYW#WYWY6(6)W#W#6)6*WY6*WYWYW#W#6*W#W#6*WYWY6*W#WYWYW#W#6*6+W#W#WYWYWYWYWYW#WYWYW#WYWYWYW#6(WYWYWY6(WYWY6(6)WY6)6*6+6+W#W#W#6+6,W#W#6,W#W#W#6,WYW#6-6-WY6.W#W#6.W#W#WYWYW#W#6-W#W#W#6-6.W#W#W#6.W#W#6.6/W#W#VNVN6/60VNW#60W#WU60WUWM60WUWMWMWU6061WM61WMWMWM61WM62WMWUWMWUWMWU61WMWM61WMWT6262WT63WTWMWMWM63WM63WTWT63WTWTWTWM63646565WTWTWTWUX+WUX+WUWUWU6464WMWMWMWM64WMWMWMWM64WMWMWM64WTWT64WTWT64UY65UYU>65U>6666UYUYUYU>66V:V:6667V:V:6768V:V:U>68V:V:6869V:V:696:V:V:U>U>6:6;U>UY6;UY6;UY6<6=TTTTUYUYTTTT6<TTUY6<TTTT6<TTTTTTUYUYU/6<UYUY6<6=UYUYU/6=UYUY6=U/TTTT6=6>TTTT6>TT6>6?UUUU6?TTUU6@UU6@UUUUTTTLTTTLTLUPTLUPTLUPTLUPUPUPUP6=TLTLTL6=TLUPTLUPY>6<Y>6=YBYBY5Y5S:S:6<6=S:S:S:6=S:6=S:S:S0S06=S0S:S0S:S:S:S0S:S0W-W-6;6<W-W-6<W-6<W-WFWF6<6=W(W(Y9Y9Y96=Y9Y96=Y96=W-WF6>W(W(VZVZ6=W(VZVZ6=W(VZVZW(W(VZVZVZW(VZ6<W(W(6<W(VZ6<6=W(VZW(W(W(VZW66<W6W6W6W/W/W6W6W/W66:W6W6W6VZVZVZW6VZW(W6W(6869W66:W(W(6:6;VO6;VOVOW(W(VOVOW(W(VOW(69W6W.W.69W6W6W669W6W.W6696:W/W/W6VO6:VO6:VOVOVOY9Y9W(6:W(W(W(6:W(6:VUVUY9Y96:W(Y9Y96:VUVU6:VUVU6:Y9VUVUX#X#VUX#VUX#VUX#VU68VUX#68X#X#X#VUVUVU68VU68VUVU68X#X#X#68X#VUX#VU68VU69X#X#69X#X#X#696:VU6:VUVUX#X#6:X#6:6;VUVUVUVUW@6;6;X#VU6<X#X#6<X#VSVSX#X#VSVSX#X#VS6:X#6;VSVS6;VSX#6;X#X#6;VSVSVS6;6<W76=WSWS6=W7W,W,W76=6=6>W76?W,W,6?W,6?6@W7W76@W76AW76AW96B6CW76CW7W7W7W7W76CW7W9W9W9W76BW7W76B6CW76DW7W7W7W96CW7W9W96CW9W9W9W7W7W76CW9W96CW9W9W96CW9W7W9W7W9W9W<W9W9W96AW9W9W9W96A6B6BW<W9W<W96BW9W9W9W96B6C6CW<W<W<W9W9W96CW9W96CW<W96CW9W<UUTLUUUUTLTL6BTLTMUL6BULULUL6BULTLTL6BTL6BTLUEUETL6BUE6CUE6CUEUE6CTL6DTLUIULUIUITLTLUE6C6CTLUEUETLTLUEUETLTL6B6CUE6CUEUE6CTLUEUE6CTL6DUPS9WQS9WQVU6CVUVU6CX#VUVUW@WQWQWQW+WEW+W+W+W+W+6AW+6AW+W+W+WE6AWE6A6BW+W+6B6CW+W+WE6CW+W+W9W9X#6CX#6CX#X#W<W<W<6CW<6CW<W:W:W:W<W<W:W:6BW:W:6BW:W:W:W:W<W:W:W:W:W<W)W)W<W<W)W)W<W<W)W)W)6>W)6>W)6?W)W<6?W<W)6?W)W)6?W<W<W<W)W<W)W<WUWUWUX-6=X-X-X-WUWUWU6=WUWU6=6>WUWU6>W1WUWUW1W1WUWUW1WUWU6<6=WXWUWUWXWXT>T>T>6<UI6<UIUI6<UIUIUI6<6=TATAT+6=UC6>UCUC6>UCU?UCU?V1SASZ6=SZX-6=6>VXX*X*6>6?VX6?VXX*X*X*6?VX6?6@6AVXX*X*VX6AVX6AVXVX6AX*6BX*VXVXVX6BWUWUWU6BWU6BWU6CWUWUWAWUWU6BWUWU6BWUWUWU6B6CW1W1TD6CTD6DTDTITDTIS4S4S=S=S46BS4S4SXSXS@6BSXSX6BSXS@SXS@SX6ASXS@S@S@6AS@S@6ASX6BSXTDTDTD6BS.SMS.6B6B6CS.S.6CSM6DSM6DT$SMSMSMSMSM6DSMSM6DT$T$SKT$6D6DSK6ESK6ESK6FSKSKSK6FSKS3S3S36FS3S36FSJS3S36F6G6GSO6HSO6HSGSGSGSGSGSO6H6HSG6I6JSGSGSG6JSGSWSWSWW>W>W>6IW>6I6J6K6KW>6L6MW>W>6MWVW>WV6MWVWVWVWVW4WVW4W4W46KW$6LW$U#U#T-U#T-6KT-T-SJ6KSJ6LS7S7S76LS7SJSJSJS7S76KSJS7S7SJSJSOSOSO6J6JSGSGSGSO6JSOSOSOSISISISO6ISOSISOSISO6ISO6ISOSI6IS86JS86JSISISIS8SIS8S8SI6ISIS8S86IS8S>6I6JS>S>S>SWS>6JSWSW6JSWS>6JS>S>6JTP6KTPV(V(V(6KT=V(T=6KV(V(V(6K6K6LT=T=6LU@T=T=6LSO6M6NSP6NSPSP6N6OSP6PSP6PSPSPS6S66PS6SRS6S6S6S6S6S66OS66O6PSRS6S6S66P6PSRSRSRSRS6SRSR6O6PT1T1U<6PTGTGT;TG6PTGTPTP6PV.TGV.TGV.SPSP6O6PS66PS6S6SRSR6PSRSE6PSESET/6PT/T/6PT06QT0T06QT06R6RT;6S6TT06TT0T0T;T;6T6UT06UT0T;6UTGT;6VT;6VT;T;V.V.6VV.6V6W6XT0T06X6YV.T0T0T06Y6YV.6ZV.T;6ZT0T06ZT;7#T;T07#V.V.SCSESCSESESESS6Z6ZSESSSSSESESE6Z6ZSSSSSSX;6ZXDXD6ZXDXDXDT3T36Z7#T57#T5T5T5T3T5T5T56ZT57#T3T3T37#7#T5T5T5T0T0T07#T0T07#T0T07#T.T.7#T0T.7$T0T07$T0T.T0T.7$T0T0T0T.T0T07#7$7$7%UMUMUM7%UMUM7%V.7&7'7'UM7(UMT07(T0UMT0UMT07(T0UM7(UM7(UMT0UMT0T07(T07(T.T.T.7(UM7)UMV.7)UMUMV.V.7)V.UM7)UMUMUMUMT.UMSE7(SE7)XDXDXB7)7)XD7*7+7+7,XBXBXDXDXB7,XDXD7,XDXDXD7,XDXB7,XBXB7,7-T5T5T/T/T4T4T/T/T4T4T/T/T4T4T/T/T4T4T/T/T4T47(YUYUYUY7Y77(Y7Y7Y7YU7(Y7Y77(Y7YUY7YUY7X.X.X.X&7&7'X&X&X.X.X&X&7&7'X&X&7'X&X&X&X.X.7'7(X.X.X.7(Y4Y4Y@7(7(Y@7)Y@Y4Y4Y47)Y47)Y@Y@7)Y@Y@Y@Y4Y47)Y@Y4Y4Y@Y@Y@Y@Y4Y4Y@Y@7'Y@7'7(Y4Y4Y47(Y4Y47(Y4Y4Y4Y'Y,Y'Y'Y'Y'Y'7'Y'7'Y'Y,Y'Y,Y'Y,Y'Y,Y,Y,YH7%YUYU7%YUYUYUYHYHYUYHY3Y37$Y,Y,7$Y,Y,Y3YUY3Y3Y,Y,7#Z&Y,7#7$Z&7$Z&Y,7%7%YLZ$Z$YVYVYLYLYLYV7$YVYL7$YLYLYV7$YVYV7$YG7%YGYV7%YVYG7%7&YXYXYNYN7&YNYN7&7'X.YN7'YNYG7'7(YGYG7(7)YGYG7)YNYNYNX.7)X.X.YNYNX.X.YNYNYN7(7(X.X.X.YNX.7(X.YNX.X.X.X.YGYGYGYGX.YGYGYG7%YG7&YG7&YGX.YGYGYGX.YG7%X.X.YGYGX.7%X.YGX.YGX.X.WOX.X.X.X.7#X.X.7#X&X.X&X&X&WGW=W=W=WGWG6Y6ZW=W=W3W=V=V=U>U>V=V=U>U>V=V=U>U>V=V=U>U>V=V=U>U>V=V=U>U>V=V=U>U>6RTLUT6S6STLTLTLV?V?V?6SV?V?6STLV?V?TLTLUGUGTL6RTL6RTLTLUGUGTLUGV;V9V;V9V96PV;V;V;V;6PV;V9V96P6QV9V9V9V;TL6P6QUG6QUGTLTLUGUGTLTLUGUGTL6PUGUGUG6P6P6QTLTLV;6QTUTUV;V;TUTUUKUK6P6QUKUK6QUKUKUKUPUKY.Y.6PY.YI6PYIYI6PY'Y.Y'Y.Y.Y.6PY.Y.6PYIY.Y.YIYIY.Y.6O6P6PYIYIYI6P6QYIYI6Q6RYIYIY.Y.6RY.YI6RYIYIY.Y.YIY.6QY.YIY.Y.Y.YIYIYI6PYIYI6P6QYIYIY.Y.6QY.YI6QYI6RYIY.YIY.Y.6QY.6RY'Y'Y.Y.Y'6QY.Y.Y'Y'Y'6QY'6QY.Y.Y.6Q6RY.6R6SY.Y.Y'Y'Y.Y.Y'Y.Y.Y.Y'Y'Y.Y.6PY'Y.Y'Y'Y'6PY'6PY.Y.Y.Y'Y'6PY.Y'Y'6PY'Y.6PY.6QY'Y'6QY'Y'Y'Y'6QY'Y,Y'Y'Y,Y'Y,6PY'Y'6P6QY'Y'6QY'Y,Y,Y'6QY,Y,Y'Y,Y'6PY'Y'Y'Y'Y'Y,Y'Y'Y,6OY'6OY,Y,Y,Y,6OY,6OY,6PY,Y'Y,Y'Y'Y'6OY,Y,6OY,Y,Y,Y,Y'Y,Y,Y.Y'Y.Y.Y'Y'6MY'Y.6M6NY'Y'Y'Y'Y,Y'Y,Y'6MY'Y'6MY,Y'Y,Y'6M6MY,6NY,Y'Y'Y'6N6NY,Y,Y,Y'Y'Y'6N6NY,Y,Y,Y,Y,6NY'6N6OY,Y,Y.Y.Y.Y'Y.Y'6NY'Y.6NY.6OY.Y.6O6P6P6QY'Y'6QY'Y'Y'Y'Y'6Q6R6RY,Y'6SY,Y,6SY,Y'6SY'6TY,Y,6TY,Y'6TY'6U6UY'Y.6VY'Y'6VY'6VY'6W6X6XY'Y.Y.Y'6XY'Y,6X6YY,Y,YI6YYIYIY.Y.6YY.Y.6YYIYIY.YAY.Y.YAYA6XYAY.Y.Y.6XY.Y.YIYI6W6XYIYI6X6YYI6Z6Z7#Y.7$7$7%YIYI7%7&YIYIYAYA7&7'YAYA7'YIYAYAYA7'YAY,Y,Y,YA7&YAY,Y,Y,7&Y,YI7&YIYIY,Y,7&Y,YI7&YI7'Y,7'Y,7(YI7(YIYIYI7(YIYIYI7(YIYI7(Y,YIYI7(Y,7)7*7*7+YIYIYIYI7+7,7,7-YIYIYIZ)YIYIZ)Z)7,Z)YI7,YIZ)Z)Z)Z)7,Z)YIYIYI7+Z)7,Z)Z)Z)Z)7,Z)7,YIYI7,YIYIYIZ)Z)YIYI7+YIYIYIYIYMYIYIYMYM7*YMYIYIYM7*YIYIYMYMYMYIYMYMY,Y,Y,7(7(Y,YIYIYI7(YIY,YIYIYI7(7(Y,Y,Y,YIYI7(YIYIY,YIY,7'Y,Y,Y,Y,Z&7'Z&7'Z&Y,Z&Y,7'Y,Y,Y,7'Y,7(Y,Z&Y,Y,7'Z&7(Z&7(Z&Z&Z&Z&Z&7(Z&7(Z&Y,Y,Y,YKYKYKY,Y,Y,7'Y,Y,YK7'Y,7'Y,Z&Y,Y,Y,7'Y,Y,Y,7'7'Z&7(7)7)Z&7*Z&YIYIYI7*YIYIYIY,YIYI7)Y,YI7)7*Y,7*Y,7+Y,YI7+YIY,7+Y,Y,Y,YIY,Y,Y,7*Y,7+Y,7+Y,YIYIYIYIYI7+YI7+YIY,7+Y,YI7,7,Y,YI7-Y,Y,7-7.Y,Y,Y,7.YI7.Z)Z)Z)7.Z)7/Y,Y,7/70Y,Y,Z)Z)7/Z)Z)Z)Y,7/Z)Z)Y,7/Z)Z)7/Y,Z)Z)Y,Y,Z)Z)7.7/Z)Z)Z)Z)Y,Y,Z)Z)7.Z)Y,Y,Z)Z)Y,Y,Z)7-Y,Y,7-Z)7-Z#Z)7.Z)7.Z)7/Z)Z)7/Z#Z#Z#7/Z#7/YZYZYZ7/YZ70YZ70YMZ)Z)Z)Z)70Z)YMZ)7071Z)Z)71Z)Z)YM71YMZ)Z)Z)YMZ)Z)70YM70YMYMYMYMZ)YM70Z)YM70YMZ)Z)YMYMZ)Z)7/70Y,7071Z#Y,71Z#Z#7172Z#Z#Y,72Y,7373Z#Z#Z#7374Y,Z#74Z#Z#Z#YMY?74Y?74Y?YMYMY?74YMYM7475YM76YM76YM77Y?Y?Z'77YM7778Y?78Y?YMYMY?Y?YM78YM78YMYM78Y?YM79YMYM797:7:Y?YM7;YMYMYM7;7;Y?Y?Y?YKYKZ#Z#YKYKZ#YKYKZ&YKYKZ&Z&78Z&Z&Z&7879Z&Z&797:7:7;YKYK7;YKYKYK7;Z&7<Z&7<Z&YK7=Z&Z&YK7=YKYKYK7=YK7=Y-Y-Y-7=Y-Y-YKYKZ#Z#Z#Z#Z#7<7<Y07=Y07=7>Y0Y0Z#Z#7>Z#Z#7>7?Y0YKYKZ#YKY-Y-7>Y-Z#Y-Z#Z#7=Y-Z#Z#Y-Y-7=Y-Z#7=Z#Y-Z#Y-Z#Z#Z#Z#Z#7<Z#7<Z#Y0Y-Y-Z#Y07;Y-Y0Y-Y-Y-Y07;Y07;Y0Y07;7<Y0Y07<7=Y0Y07=Y-Y0Y07=Y0Y0Y0Y-Y-7=Y-Y-Y-7=Y-Y-Y-Y-7=Y-7=Y0Y0Z#Z#7=Z#Y?Y?7=Y?7=7>Y?Y?Z#7>Y?Y?Y?Y07>Y07>Y0Y?Y?Y?Y?Z'7>7>Y07?7@Z'Z'Z'7@Z'Z'YP7@Z'Z'YPZ'Z'Z'Z'7?7?Z'YPZ'Y-Y-Y-7?Y-Y-Y-Y07>7?Y0Y0Y07?Y0Y07?7@Y0Y0Y-Y-Y-7@Y-7@YYYYY-7@Y-7AYYYY7A7BYYYY7BYYY-Y-Y0Y07A7BY0Y0Y0Y07B7CY07CY+Y+Y0Y07CY0Y0Y0Y07CY/Y/Y+Y+Y/Y/7BY/Y07BY0Y/YEYEZ&Z&Z&7AZ&YEYE7AY<Y<YEYEY<Y<YYYYYY7@YYYY7@7A7AY<Y2Y27AY2Y/Y2Y<Y<Y2Y2Y<Y<Y2Y<Y27?Y2Y<Y<Y<Y2Y<Y2Y<Y2Y<Y2Y<7=Y<7=Y<Y2Y<7=Y<Y/7>Y/7>Y/Y/7>7?Y<Y/Y<Y<Y/Y/7>Y/Y/Y/Y<Y<Y/Y/YGYG7=7>YGYGY<Y<Y<Y<7=Y<Y<Y<Y<Z(Y<Y<Z(Z(Y<Y<Z(Z(Y<7:Y<Y<7:YGY<Y<7:YG7;YGYGYGY<Y<YGYG7:7;YGYGY<YGY<YG7:YGYGYGYG7:Z%Y)Y)Y)VT79VQVQ797:VQVQVNX(VNX(VNVN797:7:X(X(X(X'W3X'W3W3W3W379W379X'X'79X'X'X'797:WUWUW%W%WUW%797:WUWU7:X,WUWUX,X,WU7:U>TTU>7:U>U>U>TTU>79TTTTTUTUTLTLTUTUTLTLTUTUU0U07677U0U0TLU077U07778TLTL78TUU0U0TUTUU0U07778U0U0TUTUU0U0TUTU7778TUTUV;V;TU77TU7878V;79V;797:V;V;TUTUTU7:TUTU7:7;TUTU7;7<TUTU7<7=TUTU7=7>7>V;7?V;7?V;V;V;TUTUUPUP7>U57?U5U4U4TLU4U0UPU0UPU0UPU0UPUPUPU97<U97<U9U9V;7<V;7=V;7=V;7>TUTUTU7>7>V;7?V;TU7?TU7@TUV;TUV;7?V;TUV;TUV;TUV;V;7>V;7?UPUP7?7@7@UP7AUPV;V;V;UP7@UPUPUPV;UPUPUPYB7?YBY>7?YBY>Y>YBYB7?Y>YB7?Y>Y>Y>YB7?YBY>7?Y>YBYBYBYBYIYB7>YBYBYIYIYBYIY>YBYBYBYIYIY(Y(YIYIYI7;YIYIYBYBYIYB7:YI7:YIYIYIYBYIYBYIYIYIYBYBYIYIYBYBYIYIYBYIYIYI7677YIYI77YIYMYMYI77YI77YI78YIYIYFYIYMYM77YM77YMYIYMYMYMYM77YM77YMYMYMYM77YO77YMYOYMYOYO777878YMYMYM78YPZ'Z'YPYP78YP78YPZ'YPYPYPZ'YPYPYPZ'77Z'YPZ'Z'Z'YJZ'7676YJZ'YJYP76YPY+YWYWYW76YSYSYWYSYW7576YS76Y/Y+7777Y/Y+Y+Y/Y/Y+Y+Y/Y/Y+Y/YT7576Y/76Y/YTYTY/Y/YTYTY/Y/Y/7575YTYTYTY/Y/757676YTYTYTY/Y/76Y/YTY/YTYT75YTYTYTY9Y975Y9Y*Y9Y*Y*Y*Y*Y*74Y*74Y*Y*Y9Y9Y9X#Y973X#X#73X#X#X#VWVWX#73VW7374X#74VWX#VWX#74X#X#7475X#X#X/VWX/X/VWVWVW74VWVW7475VSWSVS75VSVSVS75VS75VSVS75WSWSW,WSWS75WSWSWSVSWSWSWS74757576VSVSWSWSVSWSWPVNWPWP74VNWP75VNVN75WY75WYWYWYVNVN7576VN76WYWY76WYWYWYVNVN7677VN77WYWY7778WYWYVNWYWYWYW#77W#WYWY77WYWY7778WYWYW#WYWYWYW#WYWYWYVNVNW#W#VNVN75VNW#VNW#W#VNVNVN7474WY75WYWY75W,W,75WYW,W,WYWYW,W,WYWYWY74WY74WYWYWYWYW,W,WYWY7374WYWY74W,WYWYW,W,WYWYWY73WYWY7374WYWY747575WYW,W,WY75WY76WYWYW,W,W#W#WY75W#W#75WYW,W,7576W,W,W,7676WYWYWY76WYWYWYW,76W,W,76WYW,W,WYWYW,WYWYWY75WYWYWYWY75WYWYW#W#W,W,W#W#73W#W#W#7374W,W,7475W,W,75W,W,W,W,W,W#W#W#W#W#74W#W,74W,W,W,W,W#WYWY73WYW,W,W,W#WYWYW#W#71W#W#W#7172WYWYW#727374WYWYWYW#W#WYWYWY72WYWYWYWS72WS73W,W,73WSW,W,7374W#WYW#WYWY73WYW#W#W#W#73W#W#WYW#WY72WYWY72WYWYWYWYW#WYWYWYWY7172WYWY72W#72W#W#W#W#W#WYWYW#W#71W#W#W#717272W#WYWYW#W#W#72W#W#727373W#WY747475WYWYWYWYW#WYWYWYWY74WYWYWY74WY7475W#WYWYWY757576W#W#7677W#W#77W#W#W#WYWYWY77WY7778W#78W#W#W#WYWYW#WYWYWYW#W#WYWY767777W#W#W#W#77W#W#WY7778W#WY78WY7979W#7:W#VNVNW#W#VNVNW#W#VNVNW#78W#78W#W#78VNW#W#VNW#W#W#WUWUWU77WUWU77WUWUWUWU77WUWU77WM77WMWMWMWMWM77WMWUWMWMWMWU76WMWMWMWMWT76WT76WTWTWMWMWM767677WTWTWMWMWM77WM7778WT78WTWTWTWMWMWM78WM78WTWT78WTWTWT78WTWTWTWU78WMWMWUWM7879WM79WM7:WMWMWM7:WMWM7:7;WT7;WTWTU>UYU>UYU>7:U>7;U>U>U>7;U>7;U>U>U>UYUYUYU>U>7:7;U>U>7;V:U>U>V:V:U>U>V:V:U>79V:V:U>U>79V:U>U>V:V:U>U>V:V:U>77V:V:77U>V:V:U>77UYUY77U>UYUY7778UYUYV:UYV:78V:UY78U/UYUY7879UYUYUYTTUYUYTTTT77TTTTTTUY77U/U/7778U/U/78U/U/U/U/78U/U/7879U/U/TTTTUUUUTTTTUUUUTTTT77TTUU77UUUUUU77UUUU77TTUU78TTTT78TTUUTTUUUUUPUP77UPTLUP77UP77YBY>YBY>YBY>777778S:79797:S:S:S:7:7;S;S0S07;7<7<S0S:S:W-W-7<7=W-7=7>WFW-W-7>W-WFW-WFWFY9Y9W(7=7=W(W(W(Y9Y9W(7=Y9Y97=Y9W-W-WFW-W-W-WFWFW(W(7;7<W(W(7<7=VZ7=VZW(7=W(W(W(VZVZVZW(VZVZVZW(VZW6VZW6W6W6W6W/W679W6W6W(W(79W(79W(W6W(VO79VOVOW(W(79W(VOW(VOW(W6W6W.78W.W.78W6W.W.W.W6W6W6W/W/W6W/W/W/W6W6W675W6VOW6VO7475W(W(W(VUW(VUW(74W(VU74W(W(W(Y9Y9Y974VU74VUVUY9Y9VUY9X#73X#X#7374X#X#VUVU747575X#VUVU75X#76X#X#X#VUX#VU7576X#X#X#VUX#X#X#7576X#X#X#76X#X#VUVUX#X#VU7575X#VUX#VUX#VUVU7475VUVUVUVUW@W@X#X#74X#X#X#VUX#VU73VU74VSVSX#VSX#73X#X#VSVS73VSX#X#X#7373VSVSVSW773W7W773WSW7WSW773W7W77374W7W77475W77676W,W777W,W,77W,77W,W778W,W,78W,W778W7W778W,W7W,W7W7W,W7W,W7W,W,W7W9W7W9W775W7W7W9W975W975W9W7W7W775W9W97576W7W7W9W9W7W7W9W975W975W9W7W9W7W775W975W9W9W9W7W9W7W974W9W9W9W7W9W7W773W<W<W<W9W9W97373W<W<W<73W<W9W9W9W<W9W9W9W9W972W972W<W<W9W<W<W<W9W9W971W9W9W9W<W970W9W970TLUU71TM7172UL72UL737474TLUE75UE75UEUETLTL75TL75TLUE76UETLUE76TLTL76TL76TLTLTLTLTLUE767677UE78UE78UEUE78TL79TLUE79UEUE797:UEUETLUPTL7:TL7:UPUP7:X#VUVUX#X#7:7;W+W+W+7;W+WEW+W+7:WE7;WEWEWE7;7<WEWE7<7=WEWE7=W+WEW+W+W+WE7<WEW+W9W97<W9X#7<X#W9W<7<W<7=W<W:W<W:7<W:W<W<7<WUW:7=W)W<W)7=W<W<7=W<7=W<W<W<W<W<7=W<W)7=W)7>7>W<W<W<WU7>7?7@WUWUWU7@WUWUWU7@WU7@W1W17@W1W1W1WUWUWUWXWUWXWXWX7>UIUIUIULUL7>7?UL7?7@UITHTHTATATHTHTATHT+T+UCUCUCUCUC7=UCUC7=UCSA7=SASZX-X-X-7=7=VXVXVX7=X*VXVXX*X*7=X*7=X*X*X*X*X*7=X*X*X*X*7=X*X*7=7>X*VXX*VXX*X*VXX*VX7<VXVXX*X*7<X*VX7<VX7=VXX*VXX*WUW1WUW1WUWUWU7;WU7;WU7<WU7<WUWUWAWA7<WAWU7<W1W17<W1W1W17<TI7=TI7=TITDTI7=S4S4S4SX7=S@7>7>SXS@7?S@7?S@S@S@7?S@S@SXSX7?SXS@7?S@S@TD7?TD7@S.SMS.S.S.SMS.S.SMSM7>7?SMSM7?SMS.SMS.SMSM7>SMSMSMSMSM7>7>7?T$T$T$SK7?SKT$7?T$7@T$7@T$7AT$7A7BSKT$SKSKSK7ASKT$SKS3S37A7BS3S3SJSJS3S3S37A7AS3SO7BS3SOS3SO7ASOSOSOSO7A7BSG7BSGSOSOSOSGSOSGSO7ASOSO7ASOSOSOSGSGSWSWW>W>W>WVW>W>W>7?WV7?WVWV7?WVWVWVW>W>7?W>WV7?WVWVW>W>7?7@W>W>WVWVW>WVW>WVW$W$W$W?W$W?W?W?7<U#T-U#SJSJSJ7<SJ7<SJSJS7S77<7=S77=7>SJSOSOSO7>SGSG7>SGSO7>SOSG7>SISISISISI7>SISISISOSISOS8SOS8SOS8SOS8SG7;SG7<SISISIS8S8S8S8S>SISIS>S>SISIS>S>S>78S>S>78SWS>79S>S>S>SWV$TPV$78V$TPV$TPV(V(V(7777U@T=78V(V(T=T=V(V(77T=V(7778T=U@U@78U@SPSOSP78SP78SPSP78SOSPSPSP78SPSPS>S>SPSPS>S>77S>SP77SPSPSPS6SPSPS6S6SRS6S6S6S6SRSRSR74SR7475SRSRS6S67576S676SRSRU<U<U<76U<U<76U<U<TGTGTGT;TGT;TG747576V.SD76SDSDSPSP76SPS6S6S676SRSR76SRSESDSESET/75T/7676T077T077T0T/T0T0T0T077T077T0T0T0T;T077T077T0T0T;T;77T;T0T;T0T07677T0T0T;T;77T;T077T0T;T;77T;78T;TGT;T;T;T;T;7777V.78V.78V.797:V.V.7:V.T0T0T;T0T0T079V.79V.V.V.T0T079V.T0T0T0V.78V.V.V.T;T;7879T;T;79T;T079T0T0T0T079V.SESESSSSSESESESSSESE7778SE78SESSX;X;7879X;X;797:T57:T5T5T3T37:7;7;7<T5T5T5T3T5T3T5T3T5T5T3T37:T3T57:T5T5T0T0T7T7T0T0T7T7T0T.T.T.T.T0T.T.7677T.T.T0T077T0T.77T.T.UMUMT0UMV.V.UMV.T075T0UMUMV.UMUMUMV.UM74V.V.74V.UM74UMUMV.V.UMV.T0UMT0UM72UM73UM7374UMUM74UMT075T0T0T0UMT0UMT0T073T.T.T.T0T073T073UMT0UMT0UM73UMV.V.UM7373V.UM747475UMUMSSSSSE75SESSSSSS74XBXBXBXDXD74XD7475XBXB75XD76XD76XDXBXBXDXBXBXBXDXDXB75XDXD7576XDXD76XD7677XBXB7778T5T5T.T.T5T.YUY7YUYUYUY7YUYUY7Y7YUYUY7Y7YUY7X.X.X&X&X.X.X&X&X&X.X&X&X.X.X&X&X.X&X&X&X.X.X&X&X.X.X&X&X.X.X.X&Y4Y4Y@Y@Y4Y@Y4Y@Y4Y@Y@Y@Y4Y4Y@Y@Y4Y4Y@Y@Y4Y@Y@Y@Y4Y@Y@Y@Y4Y@Y4Y4Y@Y@Y4Y4Y@Y@Y4Y4Y4Y@Y4Y4Y@Y@Y4Y4Y'Y,Y'Y,Y'Y,Y'Y,YHYHYUYUYHYHYUYUY3Y3Y,Y,Y,Y3Y,Y,Y,Y,Y,Z&Z&Z&Y,Z&Y,Y,Y,Z&Z&Z&Y,Z&Z&Z&Y,Z&YLYLZ$Z$YLYVYLYVYVYVYLYLYVYGYVYVYGYGYVYGYVYVYVYGYVYVYVYGYNYNYXYXYNYNYXYNYXYXYXYNYNYNX.X.YNYNYNX.YNYGYNYNYGYNYGYGYNYNYGYGYGYNYGYGYNYNYGYGYNYNYNYGYNYNX.X.YNX.X.X.YNYNX.X.YNX.YNX.YGYGYGX.YGX.YGX.YGYGYGX.YGYGX.X.X.YGX.YGX.X.X.X&X.X&X&X&WGWGW=W=WGWGW=W=UTTLUTUTUTTLUTUTUTTLUTTLV?V?V?TLV?V?TLTLUGUGTLUGTLUGTLTLV9V;V9V;V9V9V9V;V9V9V;V;V9V9V;V;TLUGUGUGTLUGUGUGUGUGTLUGUGUGTLUGUGUGUGTUUGUGTLTLUGTUTLTLV;V;TUV;UKUKUKUPUKUKUPUPUKUKUPUPY.Y.YIY.Y.Y.YIY.Y.Y'Y.Y.Y.Y.YIYIY.YIYIYIY.Y.YIYIY.Y.YIYIY.YIYIYIY.Y.YIY.Y.Y.Y.YIY.Y.YIYIY.Y.YIY.Y.Y.YIY.Y.Y.YIY.YIYIYIY.Y.Y.YIYIY.Y.YIYIY.Y.YIY.Y.Y.YIYIY.Y.YIY.YIY.YIY.Y'Y'Y.Y'Y.Y'Y.Y'Y'Y'Y.Y.Y'Y'Y.Y.Y'Y.Y.Y.Y'Y'Y.Y.Y'Y.Y.Y.Y'Y'Y.Y.Y'Y'Y.Y.Y'Y'Y.Y'Y.Y'Y.Y'Y.Y'Y.Y.Y'Y'Y.Y.Y.Y'Y.Y.Y.Y'Y.Y'Y.Y'Y.Y.Y'Y'Y.Y'Y'Y'Y,Y,Y,Y'Y,Y,Y'Y'Y,Y,Y'Y'Y,Y,Y'Y'Y,Y,Y,Y,Y'Y'Y'Y,Y'Y,Y'Y'Y,Y,Y'Y'Y'Y,Y,Y,Y'Y'Y'Y,Y'Y'Y'Y,Y,Y,Y'Y'Y,Y,Y'Y'Y,Y,Y'Y'Y.Y.Y.Y'Y'Y'Y.Y'Y.Y.Y'Y,Y'Y'Y'Y'Y'Y,Y'Y,Y'Y'Y,Y,Y'Y,Y'Y,Y'Y,Y'Y'Y,Y,Y'Y,Y'Y,Y'Y,Y,Y,Y'Y,Y,Y,Y,Y'Y'Y'Y'Y'Y,Y,Y'Y,Y,Y,Y.Y.Y.Y'Y.Y'Y.Y.Y.Y.Y.Y'Y.Y.Y.Y'Y.Y'Y'Y'Y.Y'Y.Y'Y.Y'Y'Y'Y'Y'Y.Y'Y'Y'Y'Y,Y'Y,Y,Y,Y'Y,Y'Y'Y'Y,Y'Y,Y,Y,Y,Y'Y'Y,Y,Y,Y'Y,Y'Y'Y,Y,Y'Y,Y'Y,Y'Y,Y'Y,Y'Y,Y.Y'Y.Y'Y'Y'Y.Y.Y'Y'Y.Y'Y.Y'Y.Y'Y'Y'Y.Y.Y'Y'Y.Y.Y'Y'Y'Y.Y'Y'Y'Y,Y'Y,Y,Y,Y'Y,Y,Y,Y.Y.YIYIYIY.YIYIY.Y.YIYIY.Y.Y.YAY.YAY.Y.Y.Y.Y.YIY.Y.YIYIY.Y.YIYAY.YAYAYAYIYAYIYAYAYAY.Y.YAYAY.YAY.YAY.YAYAYAYIYIYAYAYIYIYAYAYIYIYAYAYIYAYAYAYAYIYAYAYIYAYAYAYIYIYAY,YAY,YAY,YAY,Y,Y,YIYIYIY,YIYIYIY,YIY,YIY,YIY,Y,Y,YIYIY,YIY,Y,Y,Y,Y,YIY,YIYIYIY,YIYIYIY,Y,YIYIY,Y,YIYIY,Y,YIY,YIY,YIYIY,YIYIYIYIY,YIYIY,Y,YIY,YIYIYIZ)YIYIZ)Z)Z)Z)Z)YIZ)Z)Z)YIYIZ)Z)Z)YIZ)YIZ)Z)Z)Z)YIYIZ)YIZ)YIYIZ)Z)Z)Z)Z)YIZ)Z)Z)YIZ)YIYIYIZ)Z)YIYIYIYMYIYMYMYIYMYMY,Y,YIY,Y,Y,YIYIYIY,YIYIYIY,YIY,YIY,Y,Y,YIYIY,Y,Y,Y,YIY,Y,Z&Z&Z&Y,Z&Y,Z&Y,Z&Y,Z&Y,Z&Y,Z&Y,Y,Y,Z&Y,Y,Y,Z&Y,Z&Z&Z&Z&Z&Y,Z&Y,Z&Y,Z&Y,Z&Y,Y,Y,Z&Y,Z&YKY,YKYKY,Z&Z&Z&Y,Z&Z&Z&Y,Y,Y,Z&Y,Y,Y,Z&Z&Z&YKYKZ&Z&YKYKY,Y,Y,Z&Y,Z&Z&Z&YIYIYIY,YIY,Y,Y,YIY,Y,Y,YIY,YIY,YIY,YIY,YIY,YIY,YIYIYIY,YIY,Y,Y,YIY,YIY,YIY,YIY,YIY,YIY,YIYIYIY,YIY,Y,Y,YIY,YIY,Y,Y,YIY,YIY,YIY,Y,Y,Z)Y,Y,Y,Y,Z)Y,Y,Z)Z)Y,Y,Z)Y,YIYIZ)Z)Z)Z)Y,Y,Z)Y,Z)Z)Y,Y,Z)Z)Y,Z)Z)Z)Y,Z)Z)Z)Y,Y,Y,Z)Y,Y,Y,Z)Y,Y,Z)Y,Y,Y,Y,Z)Y,Y,Z)Z)Z)Z)Y1Y1Y,Y,Z)Z)Y,Y,Z)Z)Z)Z#Z)Z#Z#Z#Z)Z#Z)Z#Z)Z#Z)Z#Z)Z#Z)Z#Z#Z#YZZ#YZZ#Z)YZYZYZYZYZZ)YZZ)YZZ)Z)Z)Z)YMZ)YMZ)YMYMYMZ)YMYMZ)Z)YMYMZ)Z)YMYMZ)YMZ)YMZ)Z)Z)YMZ)YMYMYMYMZ)YMYMZ)Z)Z)YMZ)Z)YMYMZ)YMYMYMY,Y,Y,Z#Y,Y,Y,Z#Y,Y,Z#Z#Y,Y,Y,Z#Y,Y,Z#Z#Y,Z#Y,Y,Y,Z#Z#Z#Y,Z#Z#Z#Y,Y,Y,Z#Y,Y,Z#Z#Y,Z#Z#Z#YMY?Y?Y?YMY?YMYMY?Y?Y?YMY?Y?YMYMY?Y?YMY?YMY?YMY?YMYMYMY?YMY?YMYMZ'Y?Z'Z'YMY?Y?Y?YMY?Y?Y?Y?Y?YMYMYMY?YMYMYMY?YMYMY?Y?YMYMYMY?YMYMYMYMY?Y?YMYMY?YMY?Y?YMY?Y?Y?YMYMYMY?Y?Y?YMYMYMY?Z&Z&YKZ&Z&Z&YKYKZ&Z&YKYKZ&Z&YKYKZ&Z&YKZ&YKZ&YKYKZ&Z&YKYKZ&Z&YKYKYKYKYKZ&Z&Z&YKZ&YKZ&YKYKZ&Z&YKZ&Z&Z&YKYKYKYKY-YKYKYKYKY-Y-YKY-Y-Z#Z#Y0Y0Z#Z#Z#Y0Z#Y0Y0Y0Z#Z#Y0Y0Z#Z#Y0Y0Z#Z#Y0Y0Z#Y0Z#Y0Z#Y0Y0Y0Z#Y-Z#Y-Z#Y-Z#Z#Z#Y-Z#Z#Z#Y-Y-Y-Z#Z#Z#Y0Z#Z#Z#Y0Y0Y-Y0Y0Y0Y-Y0Y0Y0Y-Y0Y0Y-Y-Y0Y0Y-Y-Y0Y0Y-Y-Y0Y0Y-Y-Y0Y0Y-Y-Y-Y0Y-Y-Y0Y0Y-Y-Y0Y-Y-Y-Y-Y0Y-Y-Y0Y0Y-Y0Y0Y0Z#Z#Z#Y?Y?Y?Z#Z#Z#Z#Y?Y?Z#Z#Y?Y?Z#Y?Z#Y?Y?Y0Y0Y0Y0Y0Y?Y0Y?Z'Z'Z'Y0Z'Z'Z'Z'Y0Y0Y0Y0Y0Z'Y0Z'Z'Z'YPYPZ'YPYPYPYPYPZ'Z'Z'YPYPY-Y-Y0Y0Y-Y-Y-Y0Y-Y-Y0Y0Y0Y-Y0Y0Y-Y-Y0Y0Y-Y0Y0Y0Y-Y-Y-YYY-Y-YYYYY-YYY-YYY-YYY-Y-YYYYY0Y0YYY0Y0Y0Y0YYY0Y0Y-Y-Y0Y0Y-Y0Y0Y0Y0Y0Y0Y+Y0Y0Y+Y+Y0Y+Y+Y+Y0Y0Y+Y+Y0Y0Y0Y/Y+Y/Y+Y+Y0Y0Y0Y/YEYEZ&YEYEYEY<Y<YYYYY/Y/YYYYY/Y/YYY/Y/Y/Y<Y<Y2Y2Y2Y2Y/Y2Y2Y<Y2Y2Y2Y<Y<Y<Y2Y<Y2Y<Y<Y<Y/Y/Y/Y<Y/Y<Y/Y<Y/Y/Y<Y<Y<Y/Y<Y<Y/Y/Y<Y/Y/Y/Y<YGY<Y<YGYGY<YGY<Y<Z(Z(YGYGY<Y<YGYGY<YGY<YGY<YGY<Y<Y<YGYGYGY<YGYGYGY<Y<YGYGY<YGYGYGZ%Z%VTVTVTVQVTVTVQVQVTVQVQVQVNVNX(X(VNX(X(X(VNVNVNX(W3W3W3X'W3W3X'X'W3W3X'X'W%W%WUWUW%W%WUW%WUX,WUWUX,X,WUWUX,X,WUWUWUX,WUX,U>TTU>TTU>TTTTTTTUTUU0U0TUTUU0U0TLU0TLU0TLU0TLTLU0U0TLTLTUTUU0U0TUTUU0U0TUTUU0U0TUTUTUV;TUTUV;V;TUTUTUV;TUV;V;V;TUV;TUV;TUV;TUV;TUTUTUV;TUTUV;V;TUTUTUUPTUTUUPUPTUTUUPUPTUTUUPUPTUTUUPUPTUTUUPUPTUTUUPUPTUTUUPUPTUTUUPUPTUV;TUV;TUV;TUV;TUTUTUV;TLTLTLU5TLU5U5U5UPUPU9U9UPUPU9U9V;UPV;UPV;UPV;UPV;UPV;V;V;V;V;UPTUV;V;V;TUV;TUV;TUTUTUV;TUTUTUV;TUV;V;V;TUTUTUV;V;UPV;UPUPUPV;V;UPUPV;V;UPUPV;UPV;UPV;UPV;UPV;UPV;V;UPUPYBYBYBY>YBYBY>Y>YBYBYBY>YBYBYBY>Y>YBYBYBY>YBYBYBYIYIYBYBYIYIYIYBYBYIYBYIYIYIYBYIYIYIYBYBYIYIYBYBYIYIYBYBYMYMYIYMYIYIYIYFYFYFYIYFYMYMYIYMYIYMYIYMYMYMYMYOYMYOYMYOYMYMYOYOYMYMYOYOYOYOYMYMYOYOYMYMYOYOYOYMYPYPZ'Z'YPYPZ'YPZ'YPZ'Z'YPYPZ'YPZ'YJZ'YJYJYJZ'YJYPY+Y+Y+YWYWYSYSYWYSYWYSYWYSYSYSY/Y/Y+Y/Y/Y/Y+Y/Y+Y/Y+Y+YTYTY/Y/YTYTYTY/Y/Y/YTYTY/YTYTYTY/Y/YTYTY/Y/Y/YTY/YTYTYTY/YTYTYTY/Y/Y/YTY/YTYTYTY9Y9Y*Y9Y*Y9Y*Y*Y*Y*Y*Y9Y9Y9X#X#Y9X#X#X#VWVWX#VWVWVWVWX#VWVWX#X#VWVWX#X#VWVWX#X#VWVWX#X#VWVWX#X#VWVWX#X#VWVWX#X#VWVWX#X#WSWSVSVSVSWSVSWSVSWSVSWSWSWSWSW,WSWSVSVSVSWSVSVSWSWSVSWSVSWSVSVSWSWSVSWSVNVNWPVNVNVNWPWPVNVNVNWYVNWYWYWYVNVNVNWYVNWYWYWYVNVNVNWYVNWYVNVNWYVNWYWYVNVNWYWYVNVNWYWYVNVNWYWYVNVNWYWYW#WYWYWYWYW#WYWYW#W#WYWYW#WYWYWYVNVNW#VNVNVNWYWYVNWYVNWYVNWYWYWYWYWYW,W,WYWYW,WYWYWYWYW,W,W,WYW,WYWYW,W,WYWYW,W,WYW,W,W,WYW,WYWYWYWYW,W,WYWYW,W,WYWYW,W,WYWYW,W,WYWYW,W,W,W,WYW,W,W,WYW,W#W#WYWYW#WYWYWYW,W,W,WYW,WYWYWYW,WYWYWYW,W,W,WYW,WYWYWYWYWYW,W,WYWYW,W,WYWYW,WYWYWYW#W#W,W,W#W#W,WYW,W,WYWYW,W,WYWYW,W,WYW,W,W,W,WYW,W,W#W#W#W,W#W,W,W,WYWYWYW,W#WYW#WYW#W#WYWYW#W#WYW#W#WYW#WYW#WYW#W#WYWYW#WYWYW#WYWYWSWSWSW,W,W,WSWSW,W,WSWSW,W,W7W7W,W,W7W7WYW#WYW#W#W#WYWYWYW#WYWYW#WYWYWYWYW#W#W#W#WYW#WYWYWYWYW#WYWYW#W#WYW#WYWYWYW#WYWYW#W#WYW#WYW#WYWYW#W#WYWYW#W#WYWYW#W#WYWYW#W#WYW#WYW#WYWYW#W#W#WYW#WYWYWYWYWYWYW#WYWYW#W#WYWYW#W#WYWYW#W#WYW#WYW#WYWYWYW#WYWYW#W#WYWYW#WYW#W#WYW#WYW#W#W#WYWYWYW#WYWYW#W#WYW#W#W#WYWYW#W#WYWYWYW#WYWYW#W#WYW#WYW#WYWYW#W#WYW#W#W#WYW#W#W#W#W#WYWYWYWYW#W#W#W#WYWYWYWYW#W#W#VNW#W#VNVNW#W#VNVNW#VNWUWUWMWMWMWMWMWUWUWUWUWMWUWUWUWMWUWUWUWMWUWMWUWUWUWUWMWMWMWMWTWTWMWMWTWTWMWTWMWTWMWMWMWTWMWTWTWTWMWMWTWMWMWMWTWTWMWTWTWTWMWMWTWTWMWTWTWTWMWMWMWTWMWMWTWTWMWTWTWTWUWUWMWMWUWMWMWMWMWUWMWMWMWTWMWMWMWTWMWTWMWMWTWMWMWMWMWTWMWMWTWTWMWTWTWTUYUYU>UYU>UYU>UYU>UYUYUYU>UYU>U>U>U>V:V:U>U>V:V:U>U>V:V:U>U>V:V:U>U>V:V:U>U>U>V:U>U>V:V:U>U>UYUYU>U>UYUYU>U>UYUYU>UYUYUYV:UYV:UYV:V:U/U/U/UYU/U/UYUYU/U/UYUYUYTTUYUYU/U/UYUYU/U/UYUYU/U/UYUYU/U/UYUYU/U/UYUYU/U/UYUYU/U/TTTTUUTTTTUUUUUUUUTTUUUUTTTTUUTTTTTTUUTTUUTTUUUUUPUPTLUPTLTLUPUPY>YBY>YBY>YBY>YBS:S;S:S;S:S:S;S;S;S;S:S:S:S:S;S:S:S:S;S:S:S:S;S:S:S;S:S:S:S0S:S:S0S0S:S0S0S0S:S0W-W-WFWFW-WFWFWFW-W-W-WFWFW-WFWFWFW-WFW-Y9Y9W(W(Y9Y9Y9W(W(Y9W(W(W(Y9W(W(W(W(VZVZW(W(VZW(W(W(W(VZW(W(VZW(VZVZW(VZVZW(VZW(W6W(W6W6W6W(W6W(W6W(W6W6VOW(VOW(W(W(VOW(W6W6W.W6W.W.W.W6W6W6W6VOY9Y9W(Y9Y9Y9W(W(W(W(W(VUY9Y9W(W(Y9VUY9VUY9Y9VUY9X#VUX#X#VUVUX#X#VUVUX#X#VUVUVUX#VUX#X#X#X#X#VUX#VUVUVUX#X#X#VUX#VUVUVUX#VUVUX#X#VUX#VUVUX#X#VUX#X#VUVUVUVUX#VUVUVUX#VUX#X#X#X#VUX#X#VUVUVUX#VUVUVUX#VUX#VUX#VUX#X#VSX#X#VSVSX#VSX#X#X#VSX#VSVSVSW7WSW7W7WSWSW7WSWSWSW7WSWSWSWSW7WSWSW7W7W7W,W7W7W,W,W7W,W7W,W7W7W,W,W7W,W7W,W7W7W,W,W7W,W7W,W7W7W7W,W7W7W,W,W7W,W7W,W7W7W,W,W7W,W7W9W7W7W7W9W7W9W7W9W7W7W7W9W9W9W9W9W7W7W9W9W7W9W9W9W7W9W7W9W7W9W7W7W7W9W7W7W7W9W7W9W9W9W9W9W9W<W9W9W<W<W9W9W9W<W9W<W9W<W9W<W<W<W9W9W9W<W9W9W9W<W9W<W9W<TLTLUUTLTLTLUUTLTMULTMULTMTMTMULULULTMULTMULTMTMULULTMULUETLUEUEUETLUETLTLTLUETLTLTLUETLUETLUEUEUETLTLTLTLTLUEUETLTLUETLUETLTLTLUETLUETLTLTLUEUETLTLUETLUETLUEUETLTLUETLTLTLUETLUETLUEUEUETLUEUETLTLUEUETLTLUETLTLUPTLUPTLUPUPUPX#X#VUVUX#X#VUVUX#X#VUX#W+W+W+WEW+W+W+WEW+WEWEWEW+WEW+W+WEWEW+WEWEWEW+W+WEWEW+W+WEW+WEW+W+W+WEW+X#W9X#X#X#W9W9W9W<W<W<W:W<W:W:W:W<W:W<W:WUWUW:W:W:WUW:W:W)W<W)W)W)W<W)W<W)W)W)W<W<W<W)W)W)W)W)W<W)W<W)W<W)W)W<W)WUX-X-X-WUWUX-X-WUX-X-X-WUWUW1WUWUW1W1W1WUWUWUW1WUW1W1W1T>UIUIUIUIULUIUIULULUIULULULUIUIULUIULUIUCUCU?U?UCUCU?U?SASZSASZX-X-X-VXX-VXX-VXX*X*VXVXVXX*VXX*VXX*VXX*X*X*X*VXX*X*X*VXX*X*VXVXX*VXVXVXVXX*VXVXVXX*VXVXX*X*VXX*VXX*VXX*WUWUWUWAWUWAWAWAWUWAWUWAWUWUWUWAWAWAWUWAWUWUWUW1WUW1W1W1TDTITITITITITDTITDTITDTDS4S=S4S4SXSXSXS@SXSXS@S@SXSXS@S@SXSXS@SXSXSXS@SXSXSXS@S@S@SXS@S@S@SXS@SXTDTITDTITDTITDTISMSMS.S.SMSMS.S.SMSMS.S.SMT$SMSMSMT$SMSMSMSMSMT$SMSMT$T$T$T$T$SKT$T$T$SKT$SKT$SKT$SKT$SKT$SKT$T$T$SKSKSKT$SKT$SKT$SKT$SKS3SJSJSJSJS3SJSJS3SOS3SOS3S3SOSOSOS3SOSOS3SOS3SOSOSGSGSGSOSOSOSGSOSGSOSOSOSGSOSOSGSGSOSOW>W>WVWVW>W>WVWVW>WVWVWVW>W>WVW>WVW>WVWVWVW>WVWVW>WVWVWVT-U#T-U#SJS7SJS7SJS7SJSJS7S7S7SJS7S7SJSJS7S7S7SJS7S7SJSJSOSGSOSGSOSGSGSGSOSGSOSGSOSOSOSISISISOSISGSGSGSISGSISGSIS>SWS>S>SWSWS>SWSWSWS>S>V$TPTPTPV(V(V(T=T=V(T=T=T=U@T=T=V(V(T=T=V(T=T=T=V(V(T=T=U@U@T=T=SOSOSPSOSPSOSPSPSOSOSOSPSOSPSPSPS>S>SPS>SPS>SPSPS6S6S6SRSRS6SRSRS6S6S6SRS6S6S6SRS6S6SRSRS6S6SRSRU<U<U<T1U<U<T1U<TPTPTPV.TPTPV.V.TPV.V.V.SPSPSDSPSDSPSDSPS6SRS6S6SDSRSDSRT/T/T0T0T/T0T/T/T/T/T0T0T0T0T/T0T/T0T/T0T0T0T;T;T0T;T0T0T;T;T0T;T0T;T0T0T0T;T0T;T0T;T0T0T;T;T0T;T;T;T0T;T;T;T0T;TGTGT;TGT;TGT;T;T;V.T;T;V.V.T;V.T;V.T;V.T;V.T;V.T;V.T;T0V.V.T0T0V.V.T0V.T0T0V.V.T0V.V.V.T0T0T0V.T0V.V.V.T;T;T0T0T;T;T0T0T;T;T0T;T;T;T0T;T0V.V.V.SESESESSSESSSSSSSESSSESSX;XDXDXDXDX;XDXDX;X;XDXDX;XDXDXDT3T3T5T3T5T3T5T5T3T3T5T3T3T3T5T3T3T3T5T5T3T3T5T5T3T3T5T5T.T0T.T.T0T0T.T0T.T0T.T.T.T0T.T.UMUMT0UMUMV.UMUMV.UMUMUMV.V.UMV.T0UMT0UMT0T0T0UMT0T0T0UMT0UMUMUMT0UMT0T0T0UMT0T0T0T0T.T.T.T0T.T.T0UMT0UMT0UMUMUMUMV.UMV.V.V.UMUMUMV.UMUMUMV.UMUMV.V.UMUMSESSSSSSXDXDXBXBXDXDXBXDXBXDXBXDXDXDXBXDXDXDXBXDXBXDXBXBXDXDXBXDXBXDXBXBXDXDXBXBXDXDXBXDXDXDXBXDXBXDXBXBXDXDXBXBT5T.T5T5T.T.T5T5",s=["Africa/Abidjan","Africa/Accra","Africa/Addis_Ababa","Africa/Algiers","Africa/Asmara","Africa/Bamako","Africa/Bangui","Africa/Banjul","Africa/Bissau","Africa/Blantyre","Africa/Brazzaville","Africa/Bujumbura","Africa/Cairo","Africa/Casablanca","Africa/Ceuta","Africa/Conakry","Africa/Dakar","Africa/Dar_es_Salaam","Africa/Djibouti","Africa/Douala","Africa/El_Aaiun","Africa/Freetown","Africa/Gaborone","Africa/Harare","Africa/Johannesburg","Africa/Juba","Africa/Kampala","Africa/Khartoum","Africa/Kigali","Africa/Kinshasa","Africa/Lagos","Africa/Libreville","Africa/Lome","Africa/Luanda","Africa/Lubumbashi","Africa/Lusaka","Africa/Malabo","Africa/Maputo","Africa/Maseru","Africa/Mbabane","Africa/Mogadishu","Africa/Monrovia","Africa/Nairobi","Africa/Ndjamena","Africa/Niamey","Africa/Nouakchott","Africa/Ouagadougou","Africa/Porto-Novo","Africa/Sao_Tome","Africa/Tripoli","Africa/Tunis","Africa/Windhoek","America/Adak","America/Anchorage","America/Anguilla","America/Antigua","America/Araguaina","America/Argentina/Buenos_Aires","America/Argentina/Catamarca","America/Argentina/Cordoba","America/Argentina/Jujuy","America/Argentina/La_Rioja","America/Argentina/Mendoza","America/Argentina/Rio_Gallegos","America/Argentina/Salta","America/Argentina/San_Juan","America/Argentina/San_Luis","America/Argentina/Tucuman","America/Argentina/Ushuaia","America/Aruba","America/Asuncion","America/Atikokan","America/Bahia","America/Bahia_Banderas","America/Barbados","America/Belem","America/Belize","America/Blanc-Sablon","America/Boa_Vista","America/Bogota","America/Boise","America/Cambridge_Bay","America/Campo_Grande","America/Cancun","America/Caracas","America/Cayenne","America/Cayman","America/Chicago","America/Chihuahua","America/Costa_Rica","America/Creston","America/Cuiaba","America/Curacao","America/Danmarkshavn","America/Dawson_Creek","America/Denver","America/Detroit","America/Dominica","America/Edmonton","America/Eirunepe","America/El_Salvador","America/Fort_Nelson","America/Fortaleza","America/Glace_Bay","America/Godthab","America/Goose_Bay","America/Grand_Turk","America/Grenada","America/Guadeloupe","America/Guatemala","America/Guayaquil","America/Guyana","America/Halifax","America/Havana","America/Hermosillo","America/Indiana/Indianapolis","America/Indiana/Knox","America/Indiana/Marengo","America/Indiana/Petersburg","America/Indiana/Tell_City","America/Indiana/Vincennes","America/Iqaluit","America/Jamaica","America/Juneau","America/Kentucky/Louisville","America/Kentucky/Monticello","America/Kralendijk","America/La_Paz","America/Lima","America/Los_Angeles","America/Lower_Princes","America/Maceio","America/Managua","America/Manaus","America/Marigot","America/Martinique","America/Matamoros","America/Mazatlan","America/Menominee","America/Merida","America/Mexico_City","America/Miquelon","America/Moncton","America/Monterrey","America/Montevideo","America/Montserrat","America/Nassau","America/New_York","America/Nome","America/Noronha","America/North_Dakota/Beulah","America/North_Dakota/New_Salem","America/Ojinaga","America/Panama","America/Pangnirtung","America/Paramaribo","America/Phoenix","America/Port-au-Prince","America/Port_of_Spain","America/Porto_Velho","America/Puerto_Rico","America/Punta_Arenas","America/Rankin_Inlet","America/Recife","America/Regina","America/Rio_Branco","America/Santarem","America/Santiago","America/Santo_Domingo","America/Sao_Paulo","America/Scoresbysund","America/Sitka","America/St_Barthelemy","America/St_Johns","America/St_Kitts","America/St_Lucia","America/St_Thomas","America/St_Vincent","America/Tegucigalpa","America/Thule","America/Thunder_Bay","America/Tijuana","America/Toronto","America/Tortola","America/Vancouver","America/Whitehorse","America/Winnipeg","America/Yakutat","America/Yellowknife","Antarctica/Casey","Antarctica/Davis","Antarctica/DumontDUrville","Antarctica/Macquarie","Antarctica/Mawson","Antarctica/McMurdo","Antarctica/Rothera","Antarctica/Syowa","Antarctica/Troll","Antarctica/Vostok","Arctic/Longyearbyen","Asia/Aden","Asia/Almaty","Asia/Amman","Asia/Anadyr","Asia/Aqtau","Asia/Aqtobe","Asia/Ashgabat","Asia/Atyrau","Asia/Baghdad","Asia/Bahrain","Asia/Baku","Asia/Bangkok","Asia/Barnaul","Asia/Beirut","Asia/Bishkek","Asia/Brunei","Asia/Chita","Asia/Choibalsan","Asia/Colombo","Asia/Damascus","Asia/Dhaka","Asia/Dili","Asia/Dubai","Asia/Dushanbe","Asia/Famagusta","Asia/Gaza","Asia/Hebron","Asia/Ho_Chi_Minh","Asia/Hong_Kong","Asia/Hovd","Asia/Irkutsk","Asia/Jakarta","Asia/Jayapura","Asia/Jerusalem","Asia/Kabul","Asia/Kamchatka","Asia/Karachi","Asia/Kathmandu","Asia/Khandyga","Asia/Kolkata","Asia/Krasnoyarsk","Asia/Kuala_Lumpur","Asia/Kuching","Asia/Kuwait","Asia/Macau","Asia/Magadan","Asia/Makassar","Asia/Manila","Asia/Muscat","Asia/Nicosia","Asia/Novokuznetsk","Asia/Novosibirsk","Asia/Omsk","Asia/Oral","Asia/Phnom_Penh","Asia/Pontianak","Asia/Pyongyang","Asia/Qatar","Asia/Qostanay","Asia/Qyzylorda","Asia/Riyadh","Asia/Sakhalin","Asia/Samarkand","Asia/Seoul","Asia/Shanghai","Asia/Singapore","Asia/Srednekolymsk","Asia/Taipei","Asia/Tashkent","Asia/Tbilisi","Asia/Tehran","Asia/Thimphu","Asia/Tokyo","Asia/Tomsk","Asia/Ulaanbaatar","Asia/Urumqi","Asia/Ust-Nera","Asia/Vientiane","Asia/Vladivostok","Asia/Yakutsk","Asia/Yangon","Asia/Yekaterinburg","Asia/Yerevan","Atlantic/Azores","Atlantic/Bermuda","Atlantic/Canary","Atlantic/Cape_Verde","Atlantic/Faroe","Atlantic/Madeira","Atlantic/Reykjavik","Atlantic/South_Georgia","Atlantic/St_Helena","Atlantic/Stanley","Australia/Adelaide","Australia/Brisbane","Australia/Broken_Hill","Australia/Currie","Australia/Darwin","Australia/Eucla","Australia/Hobart","Australia/Lord_Howe","Australia/Melbourne","Australia/Perth","Australia/Sydney","Etc/GMT","Etc/GMT+1","Etc/GMT+10","Etc/GMT+11","Etc/GMT+12","Etc/GMT+2","Etc/GMT+3","Etc/GMT+4","Etc/GMT+5","Etc/GMT+6","Etc/GMT+7","Etc/GMT+8","Etc/GMT+9","Etc/GMT-1","Etc/GMT-10","Etc/GMT-11","Etc/GMT-12","Etc/GMT-2","Etc/GMT-3","Etc/GMT-4","Etc/GMT-5","Etc/GMT-6","Etc/GMT-7","Etc/GMT-8","Etc/GMT-9","Etc/UTC","Europe/Amsterdam","Europe/Andorra","Europe/Astrakhan","Europe/Athens","Europe/Belgrade","Europe/Berlin","Europe/Bratislava","Europe/Brussels","Europe/Bucharest","Europe/Budapest","Europe/Busingen","Europe/Chisinau","Europe/Copenhagen","Europe/Dublin","Europe/Gibraltar","Europe/Guernsey","Europe/Helsinki","Europe/Isle_of_Man","Europe/Istanbul","Europe/Jersey","Europe/Kaliningrad","Europe/Kiev","Europe/Kirov","Europe/Lisbon","Europe/Ljubljana","Europe/London","Europe/Luxembourg","Europe/Madrid","Europe/Malta","Europe/Mariehamn","Europe/Minsk","Europe/Monaco","Europe/Moscow","Europe/Oslo","Europe/Paris","Europe/Podgorica","Europe/Prague","Europe/Riga","Europe/Rome","Europe/Samara","Europe/San_Marino","Europe/Sarajevo","Europe/Saratov","Europe/Simferopol","Europe/Skopje","Europe/Sofia","Europe/Stockholm","Europe/Tallinn","Europe/Tirane","Europe/Ulyanovsk","Europe/Uzhgorod","Europe/Vaduz","Europe/Vienna","Europe/Vilnius","Europe/Volgograd","Europe/Warsaw","Europe/Zagreb","Europe/Zaporozhye","Europe/Zurich","Indian/Antananarivo","Indian/Chagos","Indian/Christmas","Indian/Cocos","Indian/Comoro","Indian/Kerguelen","Indian/Mahe","Indian/Maldives","Indian/Mauritius","Indian/Mayotte","Indian/Reunion","Pacific/Apia","Pacific/Auckland","Pacific/Bougainville","Pacific/Chatham","Pacific/Chuuk","Pacific/Easter","Pacific/Efate","Pacific/Enderbury","Pacific/Fakaofo","Pacific/Fiji","Pacific/Funafuti","Pacific/Galapagos","Pacific/Gambier","Pacific/Guadalcanal","Pacific/Guam","Pacific/Honolulu","Pacific/Kiritimati","Pacific/Kosrae","Pacific/Kwajalein","Pacific/Majuro","Pacific/Marquesas","Pacific/Midway","Pacific/Nauru","Pacific/Niue","Pacific/Norfolk","Pacific/Noumea","Pacific/Pago_Pago","Pacific/Palau","Pacific/Pitcairn","Pacific/Pohnpei","Pacific/Port_Moresby","Pacific/Rarotonga","Pacific/Saipan","Pacific/Tahiti","Pacific/Tarawa","Pacific/Tongatapu","Pacific/Wake","Pacific/Wallis"];if(n=+n,!(-90<=(t=+t)&&t<=90&&-180<=n&&n<=180))throw new RangeError("invalid coordinates");if(90<=t)return"Etc/GMT";var a=-1,o=48*(180+n)/360.00000000000006,l=24*(90-t)/180.00000000000003,c=0|o,u=0|l,f=96*u+2*c;for(f=56*r.charCodeAt(f)+r.charCodeAt(f+1)-1995;f+s.length<3136;)f=56*r.charCodeAt(f=8*(a=a+f+1)+4*(u=0|(l=2*(l-u)%2))+2*(c=0|(o=2*(o-c)%2))+2304)+r.charCodeAt(f+1)-1995;return s[f+s.length-3136]}i.exports=e})(Yc)),Yc.exports}var bS=AS();const vY=VS(bS),xY=Math.PI,EY=.26667,yY=.5667,Zh=6,Hh=2,kh=5,PS=63,XS=[64,34,20,7,3,1],CS=[5,2],RS=[40,10,6,2,1],IS=0,wS=1,LS=2,DS=5,NS=0,OS=1,FS=2,GS=3,BS=96,ZS=102,HS=108,kS=84,zS=94,Fi=-99999,$S=[[[175347046,0,0],[3341656,4.6692568,6283.07585],[34894,4.6261,12566.1517],[3497,2.7441,5753.3849],[3418,2.8289,3.5231],[3136,3.6277,77713.7715],[2676,4.4181,7860.4194],[2343,6.1352,3930.2097],[1324,.7425,11506.7698],[1273,2.0371,529.691],[1199,1.1096,1577.3435],[990,5.233,5884.927],[902,2.045,26.298],[857,3.508,398.149],[780,1.179,5223.694],[753,2.533,5507.553],[505,4.583,18849.228],[492,4.205,775.523],[357,2.92,.067],[317,5.849,11790.629],[284,1.899,796.298],[271,.315,10977.079],[243,.345,5486.778],[206,4.806,2544.314],[205,1.869,5573.143],[202,2.458,6069.777],[156,.833,213.299],[132,3.411,2942.463],[126,1.083,20.775],[115,.645,.98],[103,.636,4694.003],[102,.976,15720.839],[102,4.267,7.114],[99,6.21,2146.17],[98,.68,155.42],[86,5.98,161000.69],[85,1.3,6275.96],[85,3.67,71430.7],[80,1.81,17260.15],[79,3.04,12036.46],[75,1.76,5088.63],[74,3.5,3154.69],[74,4.68,801.82],[70,.83,9437.76],[62,3.98,8827.39],[61,1.82,7084.9],[57,2.78,6286.6],[56,4.39,14143.5],[56,3.47,6279.55],[52,.19,12139.55],[52,1.33,1748.02],[51,.28,5856.48],[49,.49,1194.45],[41,5.37,8429.24],[41,2.4,19651.05],[39,6.17,10447.39],[37,6.04,10213.29],[37,2.57,1059.38],[36,1.71,2352.87],[36,1.78,6812.77],[33,.59,17789.85],[30,.44,83996.85],[30,2.74,1349.87],[25,3.16,4690.48]],[[628331966747,0,0],[206059,2.678235,6283.07585],[4303,2.6351,12566.1517],[425,1.59,3.523],[119,5.796,26.298],[109,2.966,1577.344],[93,2.59,18849.23],[72,1.14,529.69],[68,1.87,398.15],[67,4.41,5507.55],[59,2.89,5223.69],[56,2.17,155.42],[45,.4,796.3],[36,.47,775.52],[29,2.65,7.11],[21,5.34,.98],[19,1.85,5486.78],[19,4.97,213.3],[17,2.99,6275.96],[16,.03,2544.31],[16,1.43,2146.17],[15,1.21,10977.08],[12,2.83,1748.02],[12,3.26,5088.63],[12,5.27,1194.45],[12,2.08,4694],[11,.77,553.57],[10,1.3,6286.6],[10,4.24,1349.87],[9,2.7,242.73],[9,5.64,951.72],[8,5.3,2352.87],[6,2.65,9437.76],[6,4.67,4690.48]],[[52919,0,0],[8720,1.0721,6283.0758],[309,.867,12566.152],[27,.05,3.52],[16,5.19,26.3],[16,3.68,155.42],[10,.76,18849.23],[9,2.06,77713.77],[7,.83,775.52],[5,4.66,1577.34],[4,1.03,7.11],[4,3.44,5573.14],[3,5.14,796.3],[3,6.05,5507.55],[3,1.19,242.73],[3,6.12,529.69],[3,.31,398.15],[3,2.28,553.57],[2,4.38,5223.69],[2,3.75,.98]],[[289,5.844,6283.076],[35,0,0],[17,5.49,12566.15],[3,5.2,155.42],[1,4.72,3.52],[1,5.3,18849.23],[1,5.97,242.73]],[[114,3.142,0],[8,4.13,6283.08],[1,3.84,12566.15]],[[1,3.14,0]]],KS=[[[280,3.199,84334.662],[102,5.422,5507.553],[80,3.88,5223.69],[44,3.7,2352.87],[32,4,1577.34]],[[9,3.9,5507.55],[6,1.73,5223.69]]],QS=[[[100013989,0,0],[1670700,3.0984635,6283.07585],[13956,3.05525,12566.1517],[3084,5.1985,77713.7715],[1628,1.1739,5753.3849],[1576,2.8469,7860.4194],[925,5.453,11506.77],[542,4.564,3930.21],[472,3.661,5884.927],[346,.964,5507.553],[329,5.9,5223.694],[307,.299,5573.143],[243,4.273,11790.629],[212,5.847,1577.344],[186,5.022,10977.079],[175,3.012,18849.228],[110,5.055,5486.778],[98,.89,6069.78],[86,5.69,15720.84],[86,1.27,161000.69],[65,.27,17260.15],[63,.92,529.69],[57,2.01,83996.85],[56,5.24,71430.7],[49,3.25,2544.31],[47,2.58,775.52],[45,5.54,9437.76],[43,6.01,6275.96],[39,5.36,4694],[38,2.39,8827.39],[37,.83,19651.05],[37,4.9,12139.55],[36,1.67,12036.46],[35,1.84,2942.46],[33,.24,7084.9],[32,.18,5088.63],[32,1.78,398.15],[28,1.21,6286.6],[28,1.9,6279.55],[26,4.59,10447.39]],[[103019,1.10749,6283.07585],[1721,1.0644,12566.1517],[702,3.142,0],[32,1.02,18849.23],[31,2.84,5507.55],[25,1.32,5223.69],[18,1.42,1577.34],[10,5.91,10977.08],[9,1.42,6275.96],[9,.27,5486.78]],[[4359,5.7846,6283.0758],[124,5.579,12566.152],[12,3.14,0],[9,3.63,77713.77],[6,1.87,5573.14],[3,5.47,18849.23]],[[145,4.273,6283.076],[7,3.92,12566.15]],[[4,2.56,6283.08]]],JS=[[0,0,0,0,1],[-2,0,0,2,2],[0,0,0,2,2],[0,0,0,0,2],[0,1,0,0,0],[0,0,1,0,0],[-2,1,0,2,2],[0,0,0,2,1],[0,0,1,2,2],[-2,-1,0,2,2],[-2,0,1,0,0],[-2,0,0,2,1],[0,0,-1,2,2],[2,0,0,0,0],[0,0,1,0,1],[2,0,-1,2,2],[0,0,-1,0,1],[0,0,1,2,1],[-2,0,2,0,0],[0,0,-2,2,1],[2,0,0,2,2],[0,0,2,2,2],[0,0,2,0,0],[-2,0,1,2,2],[0,0,0,2,0],[-2,0,0,2,0],[0,0,-1,2,1],[0,2,0,0,0],[2,0,-1,0,1],[-2,2,0,2,2],[0,1,0,0,1],[-2,0,1,0,1],[0,-1,0,0,1],[0,0,2,-2,0],[2,0,-1,2,1],[2,0,1,2,2],[0,1,0,2,2],[-2,1,1,0,0],[0,-1,0,2,2],[2,0,0,2,1],[2,0,1,0,0],[-2,0,2,2,2],[-2,0,1,2,1],[2,0,-2,0,1],[2,0,0,0,1],[0,-1,1,0,0],[-2,-1,0,2,1],[-2,0,0,0,1],[0,0,2,2,1],[-2,0,2,0,1],[-2,1,0,2,1],[0,0,1,-2,0],[-1,0,1,0,0],[-2,1,0,0,0],[1,0,0,0,0],[0,0,1,2,0],[0,0,-2,2,2],[-1,-1,1,0,0],[0,1,1,0,0],[0,-1,1,2,2],[2,-1,-1,2,2],[0,0,3,2,2],[2,-1,0,2,2]],Lo=[[-171996,-174.2,92025,8.9],[-13187,-1.6,5736,-3.1],[-2274,-.2,977,-.5],[2062,.2,-895,.5],[1426,-3.4,54,-.1],[712,.1,-7,0],[-517,1.2,224,-.6],[-386,-.4,200,0],[-301,0,129,-.1],[217,-.5,-95,.3],[-158,0,0,0],[129,.1,-70,0],[123,0,-53,0],[63,0,0,0],[63,.1,-33,0],[-59,0,26,0],[-58,-.1,32,0],[-51,0,27,0],[48,0,0,0],[46,0,-24,0],[-38,0,16,0],[-31,0,13,0],[29,0,0,0],[29,0,-12,0],[26,0,0,0],[-22,0,0,0],[21,0,-10,0],[17,-.1,0,0],[16,0,-8,0],[-16,.1,7,0],[-15,0,9,0],[-13,0,7,0],[-12,0,6,0],[11,0,0,0],[-10,0,5,0],[-8,0,3,0],[7,0,-3,0],[-7,0,0,0],[-7,0,3,0],[-7,0,3,0],[6,0,0,0],[6,0,-3,0],[6,0,-3,0],[-6,0,3,0],[-6,0,3,0],[5,0,0,0],[-5,0,3,0],[-5,0,3,0],[-5,0,3,0],[4,0,0,0],[4,0,0,0],[4,0,0,0],[-4,0,0,0],[-4,0,0,0],[-4,0,0,0],[3,0,0,0],[-3,0,0,0],[-3,0,0,0],[-3,0,0,0],[-3,0,0,0],[-3,0,0,0],[-3,0,0,0],[-3,0,0,0]];function ct(i){return xY/180*i}function ci(i){return 180/xY*i}function us(i){let e=i/360;return e=360*(e-Math.floor(e)),e<0&&(e+=360),e}function qS(i){let e=i/180;return e=180*(e-Math.floor(e)),e<0&&(e+=180),e}function jS(i){let e=i/360;return e=360*(e-Math.floor(e)),e<-180?e+=360:e>180&&(e-=360),e}function ks(i){let e=i-Math.floor(i);return e<0&&(e+=1),e}function mo(i,e,t,n,r){return((i*r+e)*r+t)*r+n}function e_(i){let e=i;return e<-20?e+=1440:e>20&&(e-=1440),e}function mc(i,e){return 24*ks(i+e/24)}function zh(i,e,t,n,r){if(!isFinite(n))return new Date(NaN);const s=Date.UTC(i,e-1,t,0,0,0,0),a=Math.round((n-r)*36e5);return new Date(s+a)}var kr=(i=>(i[i.SPA_ZA=0]="SPA_ZA",i[i.SPA_ZA_INC=1]="SPA_ZA_INC",i[i.SPA_ZA_RTS=2]="SPA_ZA_RTS",i[i.SPA_ALL=3]="SPA_ALL",i))(kr||{}),Zi=(i=>(i[i.JD_MINUS=0]="JD_MINUS",i[i.JD_ZERO=1]="JD_ZERO",i[i.JD_PLUS=2]="JD_PLUS",i[i.JD_COUNT=3]="JD_COUNT",i))(Zi||{}),cn=(i=>(i[i.SUN_TRANSIT=0]="SUN_TRANSIT",i[i.SUN_RISE=1]="SUN_RISE",i[i.SUN_SET=2]="SUN_SET",i[i.SUN_COUNT=3]="SUN_COUNT",i))(cn||{});const $h=new Map;function t_(i){let e=$h.get(i);return e||(e=new Intl.DateTimeFormat("en-US",{timeZone:i,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"}),$h.set(i,e)),e}function n_(i,e){const t=new Map;for(const n of e.formatToParts(i))n.type!=="literal"&&t.set(n.type,n.value);return{year:parseInt(t.get("year")??"0",10),month:parseInt(t.get("month")??"0",10),day:parseInt(t.get("day")??"0",10),hour:parseInt(t.get("hour")??"0",10),minute:parseInt(t.get("minute")??"0",10),second:parseInt(t.get("second")??"0",10)+i.getUTCMilliseconds()/1e3}}function i_(i,e){const t=Math.floor(e.second),n=Math.round((e.second-t)*1e3);return(Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,t,n)-i.getTime())/36e5}function VY(i,e,t,n,r,s,a,o){let l=i,c=e;const u=t+(n-o+(r+(s+a)/60)/60)/24;c<3&&(c+=12,l--);let f=Math.floor(365.25*(l+4716))+Math.floor(30.6001*(c+1))+u-1524.5;if(f>2299160){const d=Math.floor(l/100);f+=2-d+Math.floor(d/4)}return f}function AY(i){return(i-2451545)/36525}function bY(i,e){return i+e/86400}function PY(i){return(i-2451545)/36525}function XY(i){return i/10}function r_(i){return{year:i.getFullYear(),month:i.getMonth()+1,day:i.getDate(),hour:i.getHours(),minute:i.getMinutes(),second:i.getSeconds()+i.getMilliseconds()/1e3,timezone:-i.getTimezoneOffset()/60}}function s_(i,e){const t=new Date(i.getTime()+e*36e5);return{year:t.getUTCFullYear(),month:t.getUTCMonth()+1,day:t.getUTCDate(),hour:t.getUTCHours(),minute:t.getUTCMinutes(),second:t.getUTCSeconds()+t.getUTCMilliseconds()/1e3}}function a_(i,e){return n_(i,t_(e))}function o_(i,e,t){if(e!==void 0)return{...s_(i,e),timezone:e};if(t)try{const n=a_(i,t);return{...n,timezone:i_(i,n)}}catch{}return r_(i)}function Bf(i,e,t){let n=0;for(let r=0;r<e;r++)n+=i[r][IS]*Math.cos(i[r][wS]+i[r][LS]*t);return n}function Zf(i,e,t){let n=0;for(let r=0;r<e;r++)n+=i[r]*Math.pow(t,r);return n/=1e8,n}function CY(i){const e=[];for(let t=0;t<Zh;t++)e[t]=Bf($S[t],XS[t],i);return us(ci(Zf(e,Zh,i)))}function RY(i){const e=[];for(let t=0;t<Hh;t++)e[t]=Bf(KS[t],CS[t],i);return ci(Zf(e,Hh,i))}function IY(i){const e=[];for(let t=0;t<kh;t++)e[t]=Bf(QS[t],RS[t],i);return Zf(e,kh,i)}function wY(i){let e=i+180;return e>=360&&(e-=360),e}function LY(i){return-i}function DY(i){return-20.4898/(3600*i)}function NY(i,e,t){return i+e+t}function OY(i,e,t){const n=ct(i),r=ct(e);return us(ci(Math.atan2(Math.sin(n)*Math.cos(r)-Math.tan(ct(t))*Math.sin(r),Math.cos(n))))}function FY(i,e,t){const n=ct(i),r=ct(e);return ci(Math.asin(Math.sin(n)*Math.cos(r)+Math.cos(n)*Math.sin(r)*Math.sin(ct(t))))}function l_(i){return us(280.4664567+i*(360007.6982779+i*(.03032028+i*(1/49931+i*(-1/15300+i*(-1/2e6))))))}function c_(i){return 8.794/(3600*i)}function GY(i){return mo(1/189474,-.0019142,445267.11148,297.85036,i)}function BY(i){return mo(-1/3e5,-1603e-7,35999.05034,357.52772,i)}function ZY(i){return mo(1/56250,.0086972,477198.867398,134.96298,i)}function HY(i){return mo(1/327270,-.0036825,483202.017538,93.27191,i)}function kY(i){return mo(1/45e4,.0020708,-1934.136261,125.04452,i)}function u_(i,e){let t=0;for(let n=0;n<DS;n++)t+=e[n]*JS[i][n];return t}function zY(i,e){let t=0,n=0;for(let r=0;r<PS;r++){const s=ct(u_(r,e));t+=(Lo[r][NS]+i*Lo[r][OS])*Math.sin(s),n+=(Lo[r][FS]+i*Lo[r][GS])*Math.cos(s)}return{delPsi:t/36e6,delEpsilon:n/36e6}}function $Y(i){const e=i/10;return 84381.448+e*(-4680.93+e*(-1.55+e*(1999.25+e*(-51.38+e*(-249.67+e*(-39.05+e*(7.12+e*(27.87+e*(5.79+e*2.45)))))))))}function KY(i,e){return i+e/3600}function QY(i,e){return us(280.46061837+360.98564736629*(i-2451545)+e*e*(387933e-9-e/3871e4))}function JY(i,e,t){return i+e*Math.cos(ct(t))}function f_(i,e,t){return us(i+e-t)}function h_(i,e,t,n,r){const s=ct(i),a=ct(t),o=ct(n),l=ct(r),c=Math.atan(.99664719*Math.tan(s)),u=.99664719*Math.sin(c)+e*Math.sin(s)/6378140,f=Math.cos(c)+e*Math.cos(s)/6378140,d=Math.atan2(-f*Math.sin(a)*Math.sin(o),Math.cos(l)-f*Math.sin(a)*Math.cos(o)),h=ci(Math.atan2((Math.sin(l)-u*Math.sin(a))*Math.cos(d),Math.cos(l)-f*Math.sin(a)*Math.cos(o)));return{deltaAlpha:ci(d),deltaPrime:h}}function d_(i,e){return i+e}function p_(i,e){return i-e}function Y_(i,e,t){const n=ct(i),r=ct(e);return ci(Math.asin(Math.sin(n)*Math.sin(r)+Math.cos(n)*Math.cos(r)*Math.cos(ct(t))))}function m_(i,e,t,n){let r=0;return n>=-1*(EY+t)&&(r=i/1010*(283/(273+e))*(1.02/(60*Math.tan(ct(n+10.3/(n+5.11)))))),r}function S_(i,e){return i+e}function __(i){return 90-i}function T_(i,e,t){const n=ct(i),r=ct(e);return us(ci(Math.atan2(Math.sin(n),Math.cos(n)*Math.sin(r)-Math.tan(ct(t))*Math.cos(r))))}function g_(i){return us(i+180)}function W_(i,e,t,n){const r=ct(i),s=ct(n);return ci(Math.acos(Math.cos(r)*Math.cos(s)+Math.sin(s)*Math.sin(r)*Math.cos(ct(e-t))))}function M_(i,e,t){const n=ct(i),r=ct(e),s=(Math.sin(ct(t))-Math.sin(n)*Math.sin(r))/(Math.cos(n)*Math.cos(r));return Math.abs(s)<=1?qS(ci(Math.acos(s))):Fi}function U_(i,e,t){return(i-e-t)/360}function v_(i,e){const t=e/360;i[cn.SUN_RISE]=ks(i[cn.SUN_TRANSIT]-t),i[cn.SUN_SET]=ks(i[cn.SUN_TRANSIT]+t),i[cn.SUN_TRANSIT]=ks(i[cn.SUN_TRANSIT])}function Kh(i,e){let t=i[Zi.JD_ZERO]-i[Zi.JD_MINUS],n=i[Zi.JD_PLUS]-i[Zi.JD_ZERO];return Math.abs(t)>=2&&(t=ks(t)),Math.abs(n)>=2&&(n=ks(n)),i[Zi.JD_ZERO]+e*(t+n+(n-t)*e)/2}function x_(i,e,t){const n=ct(i),r=ct(e);return ci(Math.asin(Math.sin(n)*Math.sin(r)+Math.cos(n)*Math.cos(r)*Math.cos(ct(t))))}function Qh(i,e,t,n,r,s,a){return i[a]+(e[a]-s)/(360*Math.cos(ct(t[a]))*Math.cos(ct(n))*Math.sin(ct(r[a])))}function E_(i,e,t,n){return e_(4*(i-.0057183-e+t*Math.cos(ct(n))))}function y_(i,e){const t=-1*(EY+i.atmosphericRefraction),n=VY(i.year,i.month,i.day,0,0,0,0,0),s=e(n,i.deltaT).nu,a=l_(i.jme),o=E_(a,i.alpha,i.delPsi,i.epsilon),l=[],c=[];for(let U=0;U<Zi.JD_COUNT;U++){const b=e(n+U-1,i.deltaT);l[U]=b.alpha,c[U]=b.delta}const u=[];u[cn.SUN_TRANSIT]=U_(l[Zi.JD_ZERO],i.longitude,s);const f=M_(i.latitude,c[Zi.JD_ZERO],t);if(f===Fi)return{sunrise:Fi,suntransit:Fi,sunset:Fi,srha:Fi,ssha:Fi,sta:Fi,eot:o};v_(u,f);const d=[],h=[],S=[],m=[],Y=[];for(let U=0;U<cn.SUN_COUNT;U++){d[U]=s+360.985647*u[U];const b=u[U]+i.deltaT/86400;S[U]=Kh(l,b),m[U]=Kh(c,b),h[U]=jS(d[U]+i.longitude-S[U]),Y[U]=x_(i.latitude,m[U],h[U])}const p=h[cn.SUN_RISE],v=h[cn.SUN_SET],x=Y[cn.SUN_TRANSIT],_=mc(u[cn.SUN_TRANSIT]-h[cn.SUN_TRANSIT]/360,i.timezone),E=mc(Qh(u,Y,m,i.latitude,h,t,cn.SUN_RISE),i.timezone),y=mc(Qh(u,Y,m,i.latitude,h,t,cn.SUN_SET),i.timezone);return{sunrise:E,suntransit:_,sunset:y,srha:p,ssha:v,sta:x,eot:o}}function _a(i,e,t,n){const r=ct(i),s=ct(e),a=ct(n),o=(Math.cos(a)-Math.sin(r)*Math.sin(s))/(Math.cos(r)*Math.cos(s));if(o<-1||o>1)return{sunrise:null,sunset:null};const l=ci(Math.acos(o))/15;return{sunrise:t-l,sunset:t+l}}function V_(){return{year:0,month:0,day:0,hour:0,minute:0,second:0,deltaUt1:0,deltaT:67,timezone:0,longitude:0,latitude:0,elevation:0,pressure:1013,temperature:15,slope:0,azimuthRotation:0,atmosphericRefraction:yY,timezoneId:"",function:kr.SPA_ALL,jd:0,jc:0,jde:0,jce:0,jme:0,l:0,b:0,r:0,theta:0,beta:0,x0:0,x1:0,x2:0,x3:0,x4:0,delPsi:0,delEpsilon:0,epsilon0:0,epsilon:0,delTau:0,lamda:0,nu0:0,nu:0,alpha:0,delta:0,h:0,xi:0,delAlpha:0,deltaPrime:0,alphaPrime:0,hPrime:0,e0:0,delE:0,e:0,eot:0,srha:0,ssha:0,sta:0,zenith:0,azimuthAstro:0,azimuth:0,incidence:0,suntransit:0,sunrise:0,sunset:0}}function A_(i){return i.year<-2e3||i.year>6e3?1:i.month<1||i.month>12?2:i.day<1||i.day>31?3:i.hour<0||i.hour>24?4:i.minute<0||i.minute>59?5:i.second<0||i.second>=60?6:i.pressure<0||i.pressure>5e3?12:i.temperature<=-273||i.temperature>6e3?13:i.deltaUt1<=-1||i.deltaUt1>=1?17:i.hour===24&&i.minute>0?5:i.hour===24&&i.second>0?6:Math.abs(i.deltaT)>8e3?7:Math.abs(i.timezone)>18?8:Math.abs(i.longitude)>180?9:Math.abs(i.latitude)>90?10:Math.abs(i.atmosphericRefraction)>5?16:i.elevation<-65e5?11:0}function b_(i){i.jc=AY(i.jd),i.jde=bY(i.jd,i.deltaT),i.jce=PY(i.jde),i.jme=XY(i.jce),i.l=CY(i.jme),i.b=RY(i.jme),i.r=IY(i.jme),i.theta=wY(i.l),i.beta=LY(i.b),i.x0=GY(i.jce),i.x1=BY(i.jce),i.x2=ZY(i.jce),i.x3=HY(i.jce),i.x4=kY(i.jce);const e=[i.x0,i.x1,i.x2,i.x3,i.x4],t=zY(i.jce,e);i.delPsi=t.delPsi,i.delEpsilon=t.delEpsilon,i.epsilon0=$Y(i.jme),i.epsilon=KY(i.delEpsilon,i.epsilon0),i.delTau=DY(i.r),i.lamda=NY(i.theta,i.delPsi,i.delTau),i.nu0=QY(i.jd,i.jc),i.nu=JY(i.nu0,i.delPsi,i.epsilon),i.alpha=OY(i.lamda,i.epsilon,i.beta),i.delta=FY(i.beta,i.epsilon,i.lamda)}function P_(i,e){const t=AY(i),n=bY(i,e),r=PY(n),s=XY(r),a=CY(s),o=RY(s),l=IY(s),c=wY(a),u=LY(o),f=GY(r),d=BY(r),h=ZY(r),S=HY(r),m=kY(r),p=zY(r,[f,d,h,S,m]),v=$Y(s),x=KY(p.delEpsilon,v),_=DY(l),E=NY(c,p.delPsi,_),y=QY(i,t),U=JY(y,p.delPsi,x),b=OY(E,x,u),g=FY(u,x,E);return{alpha:b,delta:g,nu:U}}function qY(i){const e=A_(i);if(e!==0)return e;i.jd=VY(i.year,i.month,i.day,i.hour,i.minute,i.second,i.deltaUt1,i.timezone),b_(i),i.h=f_(i.nu,i.longitude,i.alpha),i.xi=c_(i.r);const t=h_(i.latitude,i.elevation,i.xi,i.h,i.delta);if(i.delAlpha=t.deltaAlpha,i.deltaPrime=t.deltaPrime,i.alphaPrime=d_(i.alpha,i.delAlpha),i.hPrime=p_(i.h,i.delAlpha),i.e0=Y_(i.latitude,i.deltaPrime,i.hPrime),i.delE=m_(i.pressure,i.temperature,i.atmosphericRefraction,i.e0),i.e=S_(i.e0,i.delE),i.zenith=__(i.e),i.azimuthAstro=T_(i.hPrime,i.latitude,i.deltaPrime),i.azimuth=g_(i.azimuthAstro),(i.function===kr.SPA_ZA_INC||i.function===kr.SPA_ALL)&&(i.incidence=W_(i.zenith,i.azimuthAstro,i.azimuthRotation,i.slope)),i.function===kr.SPA_ZA_RTS||i.function===kr.SPA_ALL){const n=y_(i,P_);i.sunrise=n.sunrise,i.suntransit=n.suntransit,i.sunset=n.sunset,i.srha=n.srha,i.ssha=n.ssha,i.sta=n.sta,i.eot=n.eot}return 0}function jY(i,e,t,n={}){const r=V_(),s=o_(i,n.timezone,n.timezoneId);return r.year=s.year,r.month=s.month,r.day=s.day,r.hour=s.hour,r.minute=s.minute,r.second=s.second,r.timezone=s.timezone,r.timezoneId=n.timezoneId??"",r.latitude=e,r.longitude=t,r.elevation=n.elevation??0,r.pressure=n.pressure??1013,r.temperature=n.temperature??15,r.deltaUt1=n.deltaUt1??0,r.deltaT=n.deltaT??67,r.slope=n.slope??0,r.azimuthRotation=n.azimuthRotation??0,r.atmosphericRefraction=n.atmosphericRefraction??yY,r.function=kr.SPA_ALL,r}function Jh(i){return i!==Fi&&isFinite(i)&&i>=0}function Hf(i,e,t=new Date,n){const r=jY(t,i,e,n);return qY(r)!==0?null:{zenith:r.zenith,azimuth:r.azimuth,azimuthAstro:r.azimuthAstro,elevation:r.e,rightAscension:r.alpha,declination:r.delta,hourAngle:r.h}}function X_(i,e,t=new Date,n){const r=jY(t,i,e,n);if(qY(r)!==0)return{sunrise:null,sunset:null,solarNoon:null,twilight:null};const a=l=>Jh(l)?zh(r.year,r.month,r.day,l,r.timezone):null;let o=null;if(Jh(r.suntransit)){const l=_a(i,r.delta,r.suntransit,BS),c=_a(i,r.delta,r.suntransit,ZS),u=_a(i,r.delta,r.suntransit,HS),f=_a(i,r.delta,r.suntransit,kS),d=_a(i,r.delta,r.suntransit,zS),h=S=>S===null||!isFinite(S)?null:zh(r.year,r.month,r.day,S,r.timezone);o={civilDawn:h(l.sunrise),civilDusk:h(l.sunset),nauticalDawn:h(c.sunrise),nauticalDusk:h(c.sunset),astronomicalDawn:h(u.sunrise),astronomicalDusk:h(u.sunset),goldenHour:{morning:{start:h(r.sunrise),end:h(f.sunrise)},evening:{start:h(f.sunset),end:h(r.sunset)}},blueHour:{morning:{start:h(d.sunrise),end:h(r.sunrise)},evening:{start:h(r.sunset),end:h(d.sunset)}}}}return{sunrise:a(r.sunrise),sunset:a(r.sunset),solarNoon:a(r.suntransit),twilight:o}}const kf="180",C_=0,qh=1,R_=2,em=1,I_=2,Ni=3,xr=0,vn=1,Hi=2,Tr=0,zs=1,gu=2,jh=3,ed=4,w_=5,Gr=100,L_=101,D_=102,N_=103,O_=104,F_=200,G_=201,B_=202,Z_=203,Wu=204,Mu=205,H_=206,k_=207,z_=208,$_=209,K_=210,Q_=211,J_=212,q_=213,j_=214,Uu=0,vu=1,xu=2,na=3,Eu=4,yu=5,Vu=6,Au=7,tm=0,eT=1,tT=2,gr=0,nT=1,iT=2,rT=3,nm=4,sT=5,aT=6,oT=7,im=300,ia=301,ra=302,bu=303,Pu=304,$l=306,Xu=1e3,zr=1001,Cu=1002,mi=1003,lT=1004,Do=1005,yi=1006,Sc=1007,$r=1008,ji=1009,rm=1010,sm=1011,so=1012,zf=1013,os=1014,$i=1015,So=1016,$f=1017,Kf=1018,ao=1020,am=35902,om=35899,lm=1021,cm=1022,Yi=1023,oo=1026,lo=1027,um=1028,Qf=1029,fm=1030,Jf=1031,qf=1033,Ul=33776,vl=33777,xl=33778,El=33779,Ru=35840,Iu=35841,wu=35842,Lu=35843,Du=36196,Nu=37492,Ou=37496,Fu=37808,Gu=37809,Bu=37810,Zu=37811,Hu=37812,ku=37813,zu=37814,$u=37815,Ku=37816,Qu=37817,Ju=37818,qu=37819,ju=37820,ef=37821,tf=36492,nf=36494,rf=36495,sf=36283,af=36284,of=36285,lf=36286,cT=3200,uT=3201,fT=0,hT=1,ur="",ni="srgb",sa="srgb-linear",Ol="linear",Wt="srgb",ms=7680,td=519,dT=512,pT=513,YT=514,hm=515,mT=516,ST=517,_T=518,TT=519,nd=35044,id="300 es",Vi=2e3,Fl=2001;class ca{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let rd=1234567;const Ha=Math.PI/180,co=180/Math.PI;function ua(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]+"-"+an[e&255]+an[e>>8&255]+"-"+an[e>>16&15|64]+an[e>>24&255]+"-"+an[t&63|128]+an[t>>8&255]+"-"+an[t>>16&255]+an[t>>24&255]+an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]).toLowerCase()}function ot(i,e,t){return Math.max(e,Math.min(t,i))}function jf(i,e){return(i%e+e)%e}function gT(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function WT(i,e,t){return i!==e?(t-i)/(e-i):0}function ka(i,e,t){return(1-t)*i+t*e}function MT(i,e,t,n){return ka(i,e,1-Math.exp(-t*n))}function UT(i,e=1){return e-Math.abs(jf(i,e*2)-e)}function vT(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function xT(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function ET(i,e){return i+Math.floor(Math.random()*(e-i+1))}function yT(i,e){return i+Math.random()*(e-i)}function VT(i){return i*(.5-Math.random())}function AT(i){i!==void 0&&(rd=i);let e=rd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function bT(i){return i*Ha}function PT(i){return i*co}function XT(i){return(i&i-1)===0&&i!==0}function CT(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function RT(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function IT(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),u=a((e+n)/2),f=s((e-n)/2),d=a((e-n)/2),h=s((n-e)/2),S=a((n-e)/2);switch(r){case"XYX":i.set(o*u,l*f,l*d,o*c);break;case"YZY":i.set(l*d,o*u,l*f,o*c);break;case"ZXZ":i.set(l*f,l*d,o*u,o*c);break;case"XZX":i.set(o*u,l*S,l*h,o*c);break;case"YXY":i.set(l*h,o*u,l*S,o*c);break;case"ZYZ":i.set(l*S,l*h,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Cs(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function _n(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const eh={DEG2RAD:Ha,RAD2DEG:co,generateUUID:ua,clamp:ot,euclideanModulo:jf,mapLinear:gT,inverseLerp:WT,lerp:ka,damp:MT,pingpong:UT,smoothstep:vT,smootherstep:xT,randInt:ET,randFloat:yT,randFloatSpread:VT,seededRandom:AT,degToRad:bT,radToDeg:PT,isPowerOfTwo:XT,ceilPowerOfTwo:CT,floorPowerOfTwo:RT,setQuaternionFromProperEuler:IT,normalize:_n,denormalize:Cs};class Mt{constructor(e=0,t=0){Mt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class _o{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],u=n[r+2],f=n[r+3];const d=s[a+0],h=s[a+1],S=s[a+2],m=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=h,e[t+2]=S,e[t+3]=m;return}if(f!==m||l!==d||c!==h||u!==S){let Y=1-o;const p=l*d+c*h+u*S+f*m,v=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const E=Math.sqrt(x),y=Math.atan2(E,p*v);Y=Math.sin(Y*y)/E,o=Math.sin(o*y)/E}const _=o*v;if(l=l*Y+d*_,c=c*Y+h*_,u=u*Y+S*_,f=f*Y+m*_,Y===1-o){const E=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=E,c*=E,u*=E,f*=E}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],u=n[r+3],f=s[a],d=s[a+1],h=s[a+2],S=s[a+3];return e[t]=o*S+u*f+l*h-c*d,e[t+1]=l*S+u*d+c*f-o*h,e[t+2]=c*S+u*h+o*d-l*f,e[t+3]=u*S-o*f-l*d-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(r/2),f=o(s/2),d=l(n/2),h=l(r/2),S=l(s/2);switch(a){case"XYZ":this._x=d*u*f+c*h*S,this._y=c*h*f-d*u*S,this._z=c*u*S+d*h*f,this._w=c*u*f-d*h*S;break;case"YXZ":this._x=d*u*f+c*h*S,this._y=c*h*f-d*u*S,this._z=c*u*S-d*h*f,this._w=c*u*f+d*h*S;break;case"ZXY":this._x=d*u*f-c*h*S,this._y=c*h*f+d*u*S,this._z=c*u*S+d*h*f,this._w=c*u*f-d*h*S;break;case"ZYX":this._x=d*u*f-c*h*S,this._y=c*h*f+d*u*S,this._z=c*u*S-d*h*f,this._w=c*u*f+d*h*S;break;case"YZX":this._x=d*u*f+c*h*S,this._y=c*h*f+d*u*S,this._z=c*u*S-d*h*f,this._w=c*u*f-d*h*S;break;case"XZY":this._x=d*u*f-c*h*S,this._y=c*h*f-d*u*S,this._z=c*u*S+d*h*f,this._w=c*u*f+d*h*S;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=n+o+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(a-r)*h}else if(n>o&&n>f){const h=2*Math.sqrt(1+n-o-f);this._w=(u-l)/h,this._x=.25*h,this._y=(r+a)/h,this._z=(s+c)/h}else if(o>f){const h=2*Math.sqrt(1+o-n-f);this._w=(s-c)/h,this._x=(r+a)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+f-n-o);this._w=(a-r)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ot(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-r*o,this._w=a*u-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const h=1-t;return this._w=h*a+t*this._w,this._x=h*n+t*this._x,this._y=h*r+t*this._y,this._z=h*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*f+this._w*d,this._x=n*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,n=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(sd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(sd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),u=2*(o*t-s*r),f=2*(s*n-a*t);return this.x=t+l*c+a*f-o*u,this.y=n+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return _c.copy(this).projectOnVector(e),this.sub(_c)}reflect(e){return this.sub(_c.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _c=new k,sd=new _o;class Je{constructor(e,t,n,r,s,a,o,l,c){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],d=n[2],h=n[5],S=n[8],m=r[0],Y=r[3],p=r[6],v=r[1],x=r[4],_=r[7],E=r[2],y=r[5],U=r[8];return s[0]=a*m+o*v+l*E,s[3]=a*Y+o*x+l*y,s[6]=a*p+o*_+l*U,s[1]=c*m+u*v+f*E,s[4]=c*Y+u*x+f*y,s[7]=c*p+u*_+f*U,s[2]=d*m+h*v+S*E,s[5]=d*Y+h*x+S*y,s[8]=d*p+h*_+S*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,d=o*l-u*s,h=c*s-a*l,S=t*f+n*d+r*h;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/S;return e[0]=f*m,e[1]=(r*c-u*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(u*t-r*l)*m,e[5]=(r*s-o*t)*m,e[6]=h*m,e[7]=(n*l-c*t)*m,e[8]=(a*t-n*s)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Tc.makeScale(e,t)),this}rotate(e){return this.premultiply(Tc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Tc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Tc=new Je;function dm(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Gl(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function wT(){const i=Gl("canvas");return i.style.display="block",i}const ad={};function uo(i){i in ad||(ad[i]=!0,console.warn(i))}function LT(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const od=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ld=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function DT(){const i={enabled:!0,workingColorSpace:sa,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Wt&&(r.r=Qi(r.r),r.g=Qi(r.g),r.b=Qi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Wt&&(r.r=$s(r.r),r.g=$s(r.g),r.b=$s(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ur?Ol:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return uo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return uo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[sa]:{primaries:e,whitePoint:n,transfer:Ol,toXYZ:od,fromXYZ:ld,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ni},outputColorSpaceConfig:{drawingBufferColorSpace:ni}},[ni]:{primaries:e,whitePoint:n,transfer:Wt,toXYZ:od,fromXYZ:ld,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ni}}}),i}const pt=DT();function Qi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function $s(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ss;class NT{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ss===void 0&&(Ss=Gl("canvas")),Ss.width=e.width,Ss.height=e.height;const r=Ss.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Ss}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Gl("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Qi(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Qi(t[n]/255)*255):t[n]=Qi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let OT=0;class th{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:OT++}),this.uuid=ua(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(gc(r[a].image)):s.push(gc(r[a]))}else s=gc(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function gc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?NT.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let FT=0;const Wc=new k;class Xn extends ca{constructor(e=Xn.DEFAULT_IMAGE,t=Xn.DEFAULT_MAPPING,n=zr,r=zr,s=yi,a=$r,o=Yi,l=ji,c=Xn.DEFAULT_ANISOTROPY,u=ur){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:FT++}),this.uuid=ua(),this.name="",this.source=new th(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Wc).x}get height(){return this.source.getSize(Wc).y}get depth(){return this.source.getSize(Wc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==im)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xu:e.x=e.x-Math.floor(e.x);break;case zr:e.x=e.x<0?0:1;break;case Cu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xu:e.y=e.y-Math.floor(e.y);break;case zr:e.y=e.y<0?0:1;break;case Cu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=im;Xn.DEFAULT_ANISOTROPY=1;class Gt{constructor(e=0,t=0,n=0,r=1){Gt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],h=l[5],S=l[9],m=l[2],Y=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-m)<.01&&Math.abs(S-Y)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+m)<.1&&Math.abs(S+Y)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,_=(h+1)/2,E=(p+1)/2,y=(u+d)/4,U=(f+m)/4,b=(S+Y)/4;return x>_&&x>E?x<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(x),r=y/n,s=U/n):_>E?_<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),n=y/r,s=b/r):E<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),n=U/s,r=b/s),this.set(n,r,s,t),this}let v=Math.sqrt((Y-S)*(Y-S)+(f-m)*(f-m)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(Y-S)/v,this.y=(f-m)/v,this.z=(d-u)/v,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this.w=ot(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this.w=ot(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class GT extends ca{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Gt(0,0,e,t),this.scissorTest=!1,this.viewport=new Gt(0,0,e,t);const r={width:e,height:t,depth:n.depth},s=new Xn(r);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:yi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new th(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ls extends GT{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class pm extends Xn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=mi,this.minFilter=mi,this.wrapR=zr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class BT extends Xn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=mi,this.minFilter=mi,this.wrapR=zr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class To{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ui.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ui.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ui.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ui):ui.fromBufferAttribute(s,a),ui.applyMatrix4(e.matrixWorld),this.expandByPoint(ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),No.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),No.copy(n.boundingBox)),No.applyMatrix4(e.matrixWorld),this.union(No)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ui),ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ta),Oo.subVectors(this.max,Ta),_s.subVectors(e.a,Ta),Ts.subVectors(e.b,Ta),gs.subVectors(e.c,Ta),ir.subVectors(Ts,_s),rr.subVectors(gs,Ts),Pr.subVectors(_s,gs);let t=[0,-ir.z,ir.y,0,-rr.z,rr.y,0,-Pr.z,Pr.y,ir.z,0,-ir.x,rr.z,0,-rr.x,Pr.z,0,-Pr.x,-ir.y,ir.x,0,-rr.y,rr.x,0,-Pr.y,Pr.x,0];return!Mc(t,_s,Ts,gs,Oo)||(t=[1,0,0,0,1,0,0,0,1],!Mc(t,_s,Ts,gs,Oo))?!1:(Fo.crossVectors(ir,rr),t=[Fo.x,Fo.y,Fo.z],Mc(t,_s,Ts,gs,Oo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ci=[new k,new k,new k,new k,new k,new k,new k,new k],ui=new k,No=new To,_s=new k,Ts=new k,gs=new k,ir=new k,rr=new k,Pr=new k,Ta=new k,Oo=new k,Fo=new k,Xr=new k;function Mc(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Xr.fromArray(i,s);const o=r.x*Math.abs(Xr.x)+r.y*Math.abs(Xr.y)+r.z*Math.abs(Xr.z),l=e.dot(Xr),c=t.dot(Xr),u=n.dot(Xr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const ZT=new To,ga=new k,Uc=new k;class Kl{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):ZT.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ga.subVectors(e,this.center);const t=ga.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(ga,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Uc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ga.copy(e.center).add(Uc)),this.expandByPoint(ga.copy(e.center).sub(Uc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ri=new k,vc=new k,Go=new k,sr=new k,xc=new k,Bo=new k,Ec=new k;class Ym{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ri)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ri.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ri.copy(this.origin).addScaledVector(this.direction,t),Ri.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){vc.copy(e).add(t).multiplyScalar(.5),Go.copy(t).sub(e).normalize(),sr.copy(this.origin).sub(vc);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Go),o=sr.dot(this.direction),l=-sr.dot(Go),c=sr.lengthSq(),u=Math.abs(1-a*a);let f,d,h,S;if(u>0)if(f=a*l-o,d=a*o-l,S=s*u,f>=0)if(d>=-S)if(d<=S){const m=1/u;f*=m,d*=m,h=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;else d<=-S?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c):d<=S?(f=0,d=Math.min(Math.max(-s,-l),s),h=d*(d+2*l)+c):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(vc).addScaledVector(Go,d),h}intersectSphere(e,t){Ri.subVectors(e.center,this.origin);const n=Ri.dot(this.direction),r=Ri.dot(Ri)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Ri)!==null}intersectTriangle(e,t,n,r,s){xc.subVectors(t,e),Bo.subVectors(n,e),Ec.crossVectors(xc,Bo);let a=this.direction.dot(Ec),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;sr.subVectors(this.origin,e);const l=o*this.direction.dot(Bo.crossVectors(sr,Bo));if(l<0)return null;const c=o*this.direction.dot(xc.cross(sr));if(c<0||l+c>a)return null;const u=-o*sr.dot(Ec);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class zt{constructor(e,t,n,r,s,a,o,l,c,u,f,d,h,S,m,Y){zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,u,f,d,h,S,m,Y)}set(e,t,n,r,s,a,o,l,c,u,f,d,h,S,m,Y){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=d,p[3]=h,p[7]=S,p[11]=m,p[15]=Y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new zt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Ws.setFromMatrixColumn(e,0).length(),s=1/Ws.setFromMatrixColumn(e,1).length(),a=1/Ws.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*u,h=a*f,S=o*u,m=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=h+S*c,t[5]=d-m*c,t[9]=-o*l,t[2]=m-d*c,t[6]=S+h*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,h=l*f,S=c*u,m=c*f;t[0]=d+m*o,t[4]=S*o-h,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=h*o-S,t[6]=m+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,h=l*f,S=c*u,m=c*f;t[0]=d-m*o,t[4]=-a*f,t[8]=S+h*o,t[1]=h+S*o,t[5]=a*u,t[9]=m-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,h=a*f,S=o*u,m=o*f;t[0]=l*u,t[4]=S*c-h,t[8]=d*c+m,t[1]=l*f,t[5]=m*c+d,t[9]=h*c-S,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,h=a*c,S=o*l,m=o*c;t[0]=l*u,t[4]=m-d*f,t[8]=S*f+h,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=h*f+S,t[10]=d-m*f}else if(e.order==="XZY"){const d=a*l,h=a*c,S=o*l,m=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+m,t[5]=a*u,t[9]=h*f-S,t[2]=S*f-h,t[6]=o*u,t[10]=m*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(HT,e,kT)}lookAt(e,t,n){const r=this.elements;return Dn.subVectors(e,t),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),ar.crossVectors(n,Dn),ar.lengthSq()===0&&(Math.abs(n.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),ar.crossVectors(n,Dn)),ar.normalize(),Zo.crossVectors(Dn,ar),r[0]=ar.x,r[4]=Zo.x,r[8]=Dn.x,r[1]=ar.y,r[5]=Zo.y,r[9]=Dn.y,r[2]=ar.z,r[6]=Zo.z,r[10]=Dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],d=n[9],h=n[13],S=n[2],m=n[6],Y=n[10],p=n[14],v=n[3],x=n[7],_=n[11],E=n[15],y=r[0],U=r[4],b=r[8],g=r[12],T=r[1],C=r[5],R=r[9],O=r[13],Z=r[2],B=r[6],H=r[10],G=r[14],N=r[3],ne=r[7],P=r[11],fe=r[15];return s[0]=a*y+o*T+l*Z+c*N,s[4]=a*U+o*C+l*B+c*ne,s[8]=a*b+o*R+l*H+c*P,s[12]=a*g+o*O+l*G+c*fe,s[1]=u*y+f*T+d*Z+h*N,s[5]=u*U+f*C+d*B+h*ne,s[9]=u*b+f*R+d*H+h*P,s[13]=u*g+f*O+d*G+h*fe,s[2]=S*y+m*T+Y*Z+p*N,s[6]=S*U+m*C+Y*B+p*ne,s[10]=S*b+m*R+Y*H+p*P,s[14]=S*g+m*O+Y*G+p*fe,s[3]=v*y+x*T+_*Z+E*N,s[7]=v*U+x*C+_*B+E*ne,s[11]=v*b+x*R+_*H+E*P,s[15]=v*g+x*O+_*G+E*fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],h=e[14],S=e[3],m=e[7],Y=e[11],p=e[15];return S*(+s*l*f-r*c*f-s*o*d+n*c*d+r*o*h-n*l*h)+m*(+t*l*h-t*c*d+s*a*d-r*a*h+r*c*u-s*l*u)+Y*(+t*c*f-t*o*h-s*a*f+n*a*h+s*o*u-n*c*u)+p*(-r*o*u-t*l*f+t*o*d+r*a*f-n*a*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],h=e[11],S=e[12],m=e[13],Y=e[14],p=e[15],v=f*Y*c-m*d*c+m*l*h-o*Y*h-f*l*p+o*d*p,x=S*d*c-u*Y*c-S*l*h+a*Y*h+u*l*p-a*d*p,_=u*m*c-S*f*c+S*o*h-a*m*h-u*o*p+a*f*p,E=S*f*l-u*m*l-S*o*d+a*m*d+u*o*Y-a*f*Y,y=t*v+n*x+r*_+s*E;if(y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/y;return e[0]=v*U,e[1]=(m*d*s-f*Y*s-m*r*h+n*Y*h+f*r*p-n*d*p)*U,e[2]=(o*Y*s-m*l*s+m*r*c-n*Y*c-o*r*p+n*l*p)*U,e[3]=(f*l*s-o*d*s-f*r*c+n*d*c+o*r*h-n*l*h)*U,e[4]=x*U,e[5]=(u*Y*s-S*d*s+S*r*h-t*Y*h-u*r*p+t*d*p)*U,e[6]=(S*l*s-a*Y*s-S*r*c+t*Y*c+a*r*p-t*l*p)*U,e[7]=(a*d*s-u*l*s+u*r*c-t*d*c-a*r*h+t*l*h)*U,e[8]=_*U,e[9]=(S*f*s-u*m*s-S*n*h+t*m*h+u*n*p-t*f*p)*U,e[10]=(a*m*s-S*o*s+S*n*c-t*m*c-a*n*p+t*o*p)*U,e[11]=(u*o*s-a*f*s-u*n*c+t*f*c+a*n*h-t*o*h)*U,e[12]=E*U,e[13]=(u*m*r-S*f*r+S*n*d-t*m*d-u*n*Y+t*f*Y)*U,e[14]=(S*o*r-a*m*r-S*n*l+t*m*l+a*n*Y-t*o*Y)*U,e[15]=(a*f*r-u*o*r+u*n*l-t*f*l-a*n*d+t*o*d)*U,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+n,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,d=s*c,h=s*u,S=s*f,m=a*u,Y=a*f,p=o*f,v=l*c,x=l*u,_=l*f,E=n.x,y=n.y,U=n.z;return r[0]=(1-(m+p))*E,r[1]=(h+_)*E,r[2]=(S-x)*E,r[3]=0,r[4]=(h-_)*y,r[5]=(1-(d+p))*y,r[6]=(Y+v)*y,r[7]=0,r[8]=(S+x)*U,r[9]=(Y-v)*U,r[10]=(1-(d+m))*U,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Ws.set(r[0],r[1],r[2]).length();const a=Ws.set(r[4],r[5],r[6]).length(),o=Ws.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],fi.copy(this);const c=1/s,u=1/a,f=1/o;return fi.elements[0]*=c,fi.elements[1]*=c,fi.elements[2]*=c,fi.elements[4]*=u,fi.elements[5]*=u,fi.elements[6]*=u,fi.elements[8]*=f,fi.elements[9]*=f,fi.elements[10]*=f,t.setFromRotationMatrix(fi),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=Vi,l=!1){const c=this.elements,u=2*s/(t-e),f=2*s/(n-r),d=(t+e)/(t-e),h=(n+r)/(n-r);let S,m;if(l)S=s/(a-s),m=a*s/(a-s);else if(o===Vi)S=-(a+s)/(a-s),m=-2*a*s/(a-s);else if(o===Fl)S=-a/(a-s),m=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=S,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=Vi,l=!1){const c=this.elements,u=2/(t-e),f=2/(n-r),d=-(t+e)/(t-e),h=-(n+r)/(n-r);let S,m;if(l)S=1/(a-s),m=a/(a-s);else if(o===Vi)S=-2/(a-s),m=-(a+s)/(a-s);else if(o===Fl)S=-1/(a-s),m=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=S,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ws=new k,fi=new zt,HT=new k(0,0,0),kT=new k(1,1,1),ar=new k,Zo=new k,Dn=new k,cd=new zt,ud=new _o;class er{constructor(e=0,t=0,n=0,r=er.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ot(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(ot(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ot(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return cd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(cd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ud.setFromEuler(this),this.setFromQuaternion(ud,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}er.DEFAULT_ORDER="XYZ";class mm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let zT=0;const fd=new k,Ms=new _o,Ii=new zt,Ho=new k,Wa=new k,$T=new k,KT=new _o,hd=new k(1,0,0),dd=new k(0,1,0),pd=new k(0,0,1),Yd={type:"added"},QT={type:"removed"},Us={type:"childadded",child:null},yc={type:"childremoved",child:null};class Cn extends ca{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zT++}),this.uuid=ua(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Cn.DEFAULT_UP.clone();const e=new k,t=new er,n=new _o,r=new k(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new zt},normalMatrix:{value:new Je}}),this.matrix=new zt,this.matrixWorld=new zt,this.matrixAutoUpdate=Cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ms.setFromAxisAngle(e,t),this.quaternion.multiply(Ms),this}rotateOnWorldAxis(e,t){return Ms.setFromAxisAngle(e,t),this.quaternion.premultiply(Ms),this}rotateX(e){return this.rotateOnAxis(hd,e)}rotateY(e){return this.rotateOnAxis(dd,e)}rotateZ(e){return this.rotateOnAxis(pd,e)}translateOnAxis(e,t){return fd.copy(e).applyQuaternion(this.quaternion),this.position.add(fd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(hd,e)}translateY(e){return this.translateOnAxis(dd,e)}translateZ(e){return this.translateOnAxis(pd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ho.copy(e):Ho.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Wa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(Wa,Ho,this.up):Ii.lookAt(Ho,Wa,this.up),this.quaternion.setFromRotationMatrix(Ii),r&&(Ii.extractRotation(r.matrixWorld),Ms.setFromRotationMatrix(Ii),this.quaternion.premultiply(Ms.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yd),Us.child=e,this.dispatchEvent(Us),Us.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(QT),yc.child=e,this.dispatchEvent(yc),yc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yd),Us.child=e,this.dispatchEvent(Us),Us.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wa,e,$T),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wa,KT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),h=a(e.animations),S=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),h.length>0&&(n.animations=h),S.length>0&&(n.nodes=S)}return n.object=r,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Cn.DEFAULT_UP=new k(0,1,0);Cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hi=new k,wi=new k,Vc=new k,Li=new k,vs=new k,xs=new k,md=new k,Ac=new k,bc=new k,Pc=new k,Xc=new Gt,Cc=new Gt,Rc=new Gt;class pi{constructor(e=new k,t=new k,n=new k){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),hi.subVectors(e,t),r.cross(hi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){hi.subVectors(r,t),wi.subVectors(n,t),Vc.subVectors(e,t);const a=hi.dot(hi),o=hi.dot(wi),l=hi.dot(Vc),c=wi.dot(wi),u=wi.dot(Vc),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,h=(c*l-o*u)*d,S=(a*u-o*l)*d;return s.set(1-h-S,S,h)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Li)===null?!1:Li.x>=0&&Li.y>=0&&Li.x+Li.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,Li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Li.x),l.addScaledVector(a,Li.y),l.addScaledVector(o,Li.z),l)}static getInterpolatedAttribute(e,t,n,r,s,a){return Xc.setScalar(0),Cc.setScalar(0),Rc.setScalar(0),Xc.fromBufferAttribute(e,t),Cc.fromBufferAttribute(e,n),Rc.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Xc,s.x),a.addScaledVector(Cc,s.y),a.addScaledVector(Rc,s.z),a}static isFrontFacing(e,t,n,r){return hi.subVectors(n,t),wi.subVectors(e,t),hi.cross(wi).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hi.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),hi.cross(wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return pi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return pi.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return pi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;vs.subVectors(r,n),xs.subVectors(s,n),Ac.subVectors(e,n);const l=vs.dot(Ac),c=xs.dot(Ac);if(l<=0&&c<=0)return t.copy(n);bc.subVectors(e,r);const u=vs.dot(bc),f=xs.dot(bc);if(u>=0&&f<=u)return t.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(vs,a);Pc.subVectors(e,s);const h=vs.dot(Pc),S=xs.dot(Pc);if(S>=0&&h<=S)return t.copy(s);const m=h*c-l*S;if(m<=0&&c>=0&&S<=0)return o=c/(c-S),t.copy(n).addScaledVector(xs,o);const Y=u*S-h*f;if(Y<=0&&f-u>=0&&h-S>=0)return md.subVectors(s,r),o=(f-u)/(f-u+(h-S)),t.copy(r).addScaledVector(md,o);const p=1/(Y+m+d);return a=m*p,o=d*p,t.copy(n).addScaledVector(vs,a).addScaledVector(xs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Sm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},or={h:0,s:0,l:0},ko={h:0,s:0,l:0};function Ic(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class gt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ni){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,pt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=pt.workingColorSpace){if(e=jf(e,1),t=ot(t,0,1),n=ot(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Ic(a,s,e+1/3),this.g=Ic(a,s,e),this.b=Ic(a,s,e-1/3)}return pt.colorSpaceToWorking(this,r),this}setStyle(e,t=ni){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ni){const n=Sm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qi(e.r),this.g=Qi(e.g),this.b=Qi(e.b),this}copyLinearToSRGB(e){return this.r=$s(e.r),this.g=$s(e.g),this.b=$s(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ni){return pt.workingToColorSpace(on.copy(this),e),Math.round(ot(on.r*255,0,255))*65536+Math.round(ot(on.g*255,0,255))*256+Math.round(ot(on.b*255,0,255))}getHexString(e=ni){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.workingToColorSpace(on.copy(this),t);const n=on.r,r=on.g,s=on.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=pt.workingColorSpace){return pt.workingToColorSpace(on.copy(this),t),e.r=on.r,e.g=on.g,e.b=on.b,e}getStyle(e=ni){pt.workingToColorSpace(on.copy(this),e);const t=on.r,n=on.g,r=on.b;return e!==ni?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(or),this.setHSL(or.h+e,or.s+t,or.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(or),e.getHSL(ko);const n=ka(or.h,ko.h,t),r=ka(or.s,ko.s,t),s=ka(or.l,ko.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const on=new gt;gt.NAMES=Sm;let JT=0;class go extends ca{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:JT++}),this.uuid=ua(),this.name="",this.type="Material",this.blending=zs,this.side=xr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wu,this.blendDst=Mu,this.blendEquation=Gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new gt(0,0,0),this.blendAlpha=0,this.depthFunc=na,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=td,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ms,this.stencilZFail=ms,this.stencilZPass=ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==zs&&(n.blending=this.blending),this.side!==xr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Wu&&(n.blendSrc=this.blendSrc),this.blendDst!==Mu&&(n.blendDst=this.blendDst),this.blendEquation!==Gr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==na&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==td&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ms&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ms&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ms&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class _m extends go{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new er,this.combine=tm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Zt=new k,zo=new Mt;let qT=0;class Si{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qT++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=nd,this.updateRanges=[],this.gpuType=$i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)zo.fromBufferAttribute(this,t),zo.applyMatrix3(e),this.setXY(t,zo.x,zo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Cs(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=_n(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Cs(t,this.array)),t}setX(e,t){return this.normalized&&(t=_n(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Cs(t,this.array)),t}setY(e,t){return this.normalized&&(t=_n(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Cs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_n(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Cs(t,this.array)),t}setW(e,t){return this.normalized&&(t=_n(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=_n(t,this.array),n=_n(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=_n(t,this.array),n=_n(n,this.array),r=_n(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=_n(t,this.array),n=_n(n,this.array),r=_n(r,this.array),s=_n(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==nd&&(e.usage=this.usage),e}}class Tm extends Si{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class gm extends Si{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ns extends Si{constructor(e,t,n){super(new Float32Array(e),t,n)}}let jT=0;const ei=new zt,wc=new Cn,Es=new k,Nn=new To,Ma=new To,jt=new k;class nr extends ca{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jT++}),this.uuid=ua(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(dm(e)?gm:Tm)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Je().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ei.makeRotationFromQuaternion(e),this.applyMatrix4(ei),this}rotateX(e){return ei.makeRotationX(e),this.applyMatrix4(ei),this}rotateY(e){return ei.makeRotationY(e),this.applyMatrix4(ei),this}rotateZ(e){return ei.makeRotationZ(e),this.applyMatrix4(ei),this}translate(e,t,n){return ei.makeTranslation(e,t,n),this.applyMatrix4(ei),this}scale(e,t,n){return ei.makeScale(e,t,n),this.applyMatrix4(ei),this}lookAt(e){return wc.lookAt(e),wc.updateMatrix(),this.applyMatrix4(wc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ns(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new To);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Nn.setFromBufferAttribute(s),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const n=this.boundingSphere.center;if(Nn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Ma.setFromBufferAttribute(o),this.morphTargetsRelative?(jt.addVectors(Nn.min,Ma.min),Nn.expandByPoint(jt),jt.addVectors(Nn.max,Ma.max),Nn.expandByPoint(jt)):(Nn.expandByPoint(Ma.min),Nn.expandByPoint(Ma.max))}Nn.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)jt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(jt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)jt.fromBufferAttribute(o,c),l&&(Es.fromBufferAttribute(e,c),jt.add(Es)),r=Math.max(r,n.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Si(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let b=0;b<n.count;b++)o[b]=new k,l[b]=new k;const c=new k,u=new k,f=new k,d=new Mt,h=new Mt,S=new Mt,m=new k,Y=new k;function p(b,g,T){c.fromBufferAttribute(n,b),u.fromBufferAttribute(n,g),f.fromBufferAttribute(n,T),d.fromBufferAttribute(s,b),h.fromBufferAttribute(s,g),S.fromBufferAttribute(s,T),u.sub(c),f.sub(c),h.sub(d),S.sub(d);const C=1/(h.x*S.y-S.x*h.y);isFinite(C)&&(m.copy(u).multiplyScalar(S.y).addScaledVector(f,-h.y).multiplyScalar(C),Y.copy(f).multiplyScalar(h.x).addScaledVector(u,-S.x).multiplyScalar(C),o[b].add(m),o[g].add(m),o[T].add(m),l[b].add(Y),l[g].add(Y),l[T].add(Y))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let b=0,g=v.length;b<g;++b){const T=v[b],C=T.start,R=T.count;for(let O=C,Z=C+R;O<Z;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const x=new k,_=new k,E=new k,y=new k;function U(b){E.fromBufferAttribute(r,b),y.copy(E);const g=o[b];x.copy(g),x.sub(E.multiplyScalar(E.dot(g))).normalize(),_.crossVectors(y,g);const C=_.dot(l[b])<0?-1:1;a.setXYZW(b,x.x,x.y,x.z,C)}for(let b=0,g=v.length;b<g;++b){const T=v[b],C=T.start,R=T.count;for(let O=C,Z=C+R;O<Z;O+=3)U(e.getX(O+0)),U(e.getX(O+1)),U(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Si(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,h=n.count;d<h;d++)n.setXYZ(d,0,0,0);const r=new k,s=new k,a=new k,o=new k,l=new k,c=new k,u=new k,f=new k;if(e)for(let d=0,h=e.count;d<h;d+=3){const S=e.getX(d+0),m=e.getX(d+1),Y=e.getX(d+2);r.fromBufferAttribute(t,S),s.fromBufferAttribute(t,m),a.fromBufferAttribute(t,Y),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(n,S),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,Y),o.add(u),l.add(u),c.add(u),n.setXYZ(S,o.x,o.y,o.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(Y,c.x,c.y,c.z)}else for(let d=0,h=t.count;d<h;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)jt.fromBufferAttribute(e,t),jt.normalize(),e.setXYZ(t,jt.x,jt.y,jt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u);let h=0,S=0;for(let m=0,Y=l.length;m<Y;m++){o.isInterleavedBufferAttribute?h=l[m]*o.data.stride+o.offset:h=l[m]*u;for(let p=0;p<u;p++)d[S++]=c[h++]}return new Si(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new nr,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const d=c[u],h=e(d,n);l.push(h)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const h=c[f];u.push(h.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Sd=new zt,Cr=new Ym,$o=new Kl,_d=new k,Ko=new k,Qo=new k,Jo=new k,Lc=new k,qo=new k,Td=new k,jo=new k;class Ai extends Cn{constructor(e=new nr,t=new _m){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){qo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(Lc.fromBufferAttribute(f,e),a?qo.addScaledVector(Lc,u):qo.addScaledVector(Lc.sub(t),u))}t.add(qo)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$o.copy(n.boundingSphere),$o.applyMatrix4(s),Cr.copy(e.ray).recast(e.near),!($o.containsPoint(Cr.origin)===!1&&(Cr.intersectSphere($o,_d)===null||Cr.origin.distanceToSquared(_d)>(e.far-e.near)**2))&&(Sd.copy(s).invert(),Cr.copy(e.ray).applyMatrix4(Sd),!(n.boundingBox!==null&&Cr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Cr)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(a))for(let S=0,m=d.length;S<m;S++){const Y=d[S],p=a[Y.materialIndex],v=Math.max(Y.start,h.start),x=Math.min(o.count,Math.min(Y.start+Y.count,h.start+h.count));for(let _=v,E=x;_<E;_+=3){const y=o.getX(_),U=o.getX(_+1),b=o.getX(_+2);r=el(this,p,e,n,c,u,f,y,U,b),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=Y.materialIndex,t.push(r))}}else{const S=Math.max(0,h.start),m=Math.min(o.count,h.start+h.count);for(let Y=S,p=m;Y<p;Y+=3){const v=o.getX(Y),x=o.getX(Y+1),_=o.getX(Y+2);r=el(this,a,e,n,c,u,f,v,x,_),r&&(r.faceIndex=Math.floor(Y/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let S=0,m=d.length;S<m;S++){const Y=d[S],p=a[Y.materialIndex],v=Math.max(Y.start,h.start),x=Math.min(l.count,Math.min(Y.start+Y.count,h.start+h.count));for(let _=v,E=x;_<E;_+=3){const y=_,U=_+1,b=_+2;r=el(this,p,e,n,c,u,f,y,U,b),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=Y.materialIndex,t.push(r))}}else{const S=Math.max(0,h.start),m=Math.min(l.count,h.start+h.count);for(let Y=S,p=m;Y<p;Y+=3){const v=Y,x=Y+1,_=Y+2;r=el(this,a,e,n,c,u,f,v,x,_),r&&(r.faceIndex=Math.floor(Y/3),t.push(r))}}}}function eg(i,e,t,n,r,s,a,o){let l;if(e.side===vn?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===xr,o),l===null)return null;jo.copy(o),jo.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(jo);return c<t.near||c>t.far?null:{distance:c,point:jo.clone(),object:i}}function el(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,Ko),i.getVertexPosition(l,Qo),i.getVertexPosition(c,Jo);const u=eg(i,e,t,n,Ko,Qo,Jo,Td);if(u){const f=new k;pi.getBarycoord(Td,Ko,Qo,Jo,f),r&&(u.uv=pi.getInterpolatedAttribute(r,o,l,c,f,new Mt)),s&&(u.uv1=pi.getInterpolatedAttribute(s,o,l,c,f,new Mt)),a&&(u.normal=pi.getInterpolatedAttribute(a,o,l,c,f,new k),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new k,materialIndex:0};pi.getNormal(Ko,Qo,Jo,d.normal),u.face=d,u.barycoord=f}return u}class fa extends nr{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let d=0,h=0;S("z","y","x",-1,-1,n,t,e,a,s,0),S("z","y","x",1,-1,n,t,-e,a,s,1),S("x","z","y",1,1,e,n,t,r,a,2),S("x","z","y",1,-1,e,n,-t,r,a,3),S("x","y","z",1,-1,e,t,n,r,s,4),S("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new ns(c,3)),this.setAttribute("normal",new ns(u,3)),this.setAttribute("uv",new ns(f,2));function S(m,Y,p,v,x,_,E,y,U,b,g){const T=_/U,C=E/b,R=_/2,O=E/2,Z=y/2,B=U+1,H=b+1;let G=0,N=0;const ne=new k;for(let P=0;P<H;P++){const fe=P*C-O;for(let Le=0;Le<B;Le++){const tt=Le*T-R;ne[m]=tt*v,ne[Y]=fe*x,ne[p]=Z,c.push(ne.x,ne.y,ne.z),ne[m]=0,ne[Y]=0,ne[p]=y>0?1:-1,u.push(ne.x,ne.y,ne.z),f.push(Le/U),f.push(1-P/b),G+=1}}for(let P=0;P<b;P++)for(let fe=0;fe<U;fe++){const Le=d+fe+B*P,tt=d+fe+B*(P+1),He=d+(fe+1)+B*(P+1),Ze=d+(fe+1)+B*P;l.push(Le,tt,Ze),l.push(tt,He,Ze),N+=6}o.addGroup(h,N,g),h+=N,d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function aa(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Tn(i){const e={};for(let t=0;t<i.length;t++){const n=aa(i[t]);for(const r in n)e[r]=n[r]}return e}function tg(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Wm(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:pt.workingColorSpace}const Mm={clone:aa,merge:Tn};var ng=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ig=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class tr extends go{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ng,this.fragmentShader=ig,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=aa(e.uniforms),this.uniformsGroups=tg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Um extends Cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new zt,this.projectionMatrix=new zt,this.projectionMatrixInverse=new zt,this.coordinateSystem=Vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const lr=new k,gd=new Mt,Wd=new Mt;class si extends Um{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=co*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ha*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return co*2*Math.atan(Math.tan(Ha*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){lr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(lr.x,lr.y).multiplyScalar(-e/lr.z),lr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(lr.x,lr.y).multiplyScalar(-e/lr.z)}getViewSize(e,t){return this.getViewBounds(e,gd,Wd),t.subVectors(Wd,gd)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ha*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ys=-90,Vs=1;class rg extends Cn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new si(ys,Vs,e,t);r.layers=this.layers,this.add(r);const s=new si(ys,Vs,e,t);s.layers=this.layers,this.add(s);const a=new si(ys,Vs,e,t);a.layers=this.layers,this.add(a);const o=new si(ys,Vs,e,t);o.layers=this.layers,this.add(o);const l=new si(ys,Vs,e,t);l.layers=this.layers,this.add(l);const c=new si(ys,Vs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Vi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Fl)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),S=e.xr.enabled;e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(f,d,h),e.xr.enabled=S,n.texture.needsPMREMUpdate=!0}}class vm extends Xn{constructor(e=[],t=ia,n,r,s,a,o,l,c,u){super(e,t,n,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class sg extends ls{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new vm(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new fa(5,5,5),s=new tr({name:"CubemapFromEquirect",uniforms:aa(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:vn,blending:Tr});s.uniforms.tEquirect.value=t;const a=new Ai(r,s),o=t.minFilter;return t.minFilter===$r&&(t.minFilter=yi),new rg(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}class tl extends Cn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ag={type:"move"};class Dc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const m of e.hand.values()){const Y=t.getJointPose(m,n),p=this._getHandJoint(c,m);Y!==null&&(p.matrix.fromArray(Y.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=Y.radius),p.visible=Y!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,S=.005;c.inputState.pinching&&d>h+S?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=h-S&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ag)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new tl;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class og extends Cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new er,this.environmentIntensity=1,this.environmentRotation=new er,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Nc=new k,lg=new k,cg=new Je;class Or{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Nc.subVectors(n,t).cross(lg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Nc),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||cg.getNormalMatrix(e),r=this.coplanarPoint(Nc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Rr=new Kl,ug=new Mt(.5,.5),nl=new k;class xm{constructor(e=new Or,t=new Or,n=new Or,r=new Or,s=new Or,a=new Or){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Vi,n=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],f=s[5],d=s[6],h=s[7],S=s[8],m=s[9],Y=s[10],p=s[11],v=s[12],x=s[13],_=s[14],E=s[15];if(r[0].setComponents(c-a,h-u,p-S,E-v).normalize(),r[1].setComponents(c+a,h+u,p+S,E+v).normalize(),r[2].setComponents(c+o,h+f,p+m,E+x).normalize(),r[3].setComponents(c-o,h-f,p-m,E-x).normalize(),n)r[4].setComponents(l,d,Y,_).normalize(),r[5].setComponents(c-l,h-d,p-Y,E-_).normalize();else if(r[4].setComponents(c-l,h-d,p-Y,E-_).normalize(),t===Vi)r[5].setComponents(c+l,h+d,p+Y,E+_).normalize();else if(t===Fl)r[5].setComponents(l,d,Y,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Rr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Rr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Rr)}intersectsSprite(e){Rr.center.set(0,0,0);const t=ug.distanceTo(e.center);return Rr.radius=.7071067811865476+t,Rr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Rr)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(nl.x=r.normal.x>0?e.max.x:e.min.x,nl.y=r.normal.y>0?e.max.y:e.min.y,nl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(nl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Em extends go{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new gt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Md=new zt,cf=new Ym,il=new Kl,rl=new k;class fg extends Cn{constructor(e=new nr,t=new Em){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),il.copy(n.boundingSphere),il.applyMatrix4(r),il.radius+=s,e.ray.intersectsSphere(il)===!1)return;Md.copy(r).invert(),cf.copy(e.ray).applyMatrix4(Md);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),h=Math.min(c.count,a.start+a.count);for(let S=d,m=h;S<m;S++){const Y=c.getX(S);rl.fromBufferAttribute(f,Y),Ud(rl,Y,l,r,e,t,this)}}else{const d=Math.max(0,a.start),h=Math.min(f.count,a.start+a.count);for(let S=d,m=h;S<m;S++)rl.fromBufferAttribute(f,S),Ud(rl,S,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ud(i,e,t,n,r,s,a){const o=cf.distanceSqToPoint(i);if(o<t){const l=new k;cf.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class ym extends Xn{constructor(e,t,n=os,r,s,a,o=mi,l=mi,c,u=oo,f=1){if(u!==oo&&u!==lo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:f};super(d,r,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new th(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Vm extends Xn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ql extends nr{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,u=l+1,f=e/o,d=t/l,h=[],S=[],m=[],Y=[];for(let p=0;p<u;p++){const v=p*d-a;for(let x=0;x<c;x++){const _=x*f-s;S.push(_,-v,0),m.push(0,0,1),Y.push(x/o),Y.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<o;v++){const x=v+c*p,_=v+c*(p+1),E=v+1+c*(p+1),y=v+1+c*p;h.push(x,_,y),h.push(_,E,y)}this.setIndex(h),this.setAttribute("position",new ns(S,3)),this.setAttribute("normal",new ns(m,3)),this.setAttribute("uv",new ns(Y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ql(e.width,e.height,e.widthSegments,e.heightSegments)}}class hg extends go{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class dg extends go{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class pg extends Um{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Yg extends si{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function vd(i,e,t,n){const r=mg(n);switch(t){case lm:return i*e;case um:return i*e/r.components*r.byteLength;case Qf:return i*e/r.components*r.byteLength;case fm:return i*e*2/r.components*r.byteLength;case Jf:return i*e*2/r.components*r.byteLength;case cm:return i*e*3/r.components*r.byteLength;case Yi:return i*e*4/r.components*r.byteLength;case qf:return i*e*4/r.components*r.byteLength;case Ul:case vl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case xl:case El:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Iu:case Lu:return Math.max(i,16)*Math.max(e,8)/4;case Ru:case wu:return Math.max(i,8)*Math.max(e,8)/2;case Du:case Nu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ou:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Fu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Gu:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Bu:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Zu:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Hu:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ku:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case zu:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case $u:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ku:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Qu:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ju:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case qu:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ju:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ef:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case tf:case nf:case rf:return Math.ceil(i/4)*Math.ceil(e/4)*16;case sf:case af:return Math.ceil(i/4)*Math.ceil(e/4)*8;case of:case lf:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function mg(i){switch(i){case ji:case rm:return{byteLength:1,components:1};case so:case sm:case So:return{byteLength:2,components:1};case $f:case Kf:return{byteLength:2,components:4};case os:case zf:case $i:return{byteLength:4,components:1};case am:case om:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kf);function Am(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Sg(i){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),o.onUploadCallback();let h;if(c instanceof Float32Array)h=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?h=i.HALF_FLOAT:h=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=i.SHORT;else if(c instanceof Uint32Array)h=i.UNSIGNED_INT;else if(c instanceof Int32Array)h=i.INT;else if(c instanceof Int8Array)h=i.BYTE;else if(c instanceof Uint8Array)h=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const u=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,u);else{f.sort((h,S)=>h.start-S.start);let d=0;for(let h=1;h<f.length;h++){const S=f[d],m=f[h];m.start<=S.start+S.count+1?S.count=Math.max(S.count,m.start+m.count-S.start):(++d,f[d]=m)}f.length=d+1;for(let h=0,S=f.length;h<S;h++){const m=f[h];i.bufferSubData(c,m.start*u.BYTES_PER_ELEMENT,u,m.start,m.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var _g=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tg=`#ifdef USE_ALPHAHASH
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
#endif`,gg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ug=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vg=`#ifdef USE_AOMAP
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
#endif`,xg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Eg=`#ifdef USE_BATCHING
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
#endif`,yg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ag=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Pg=`#ifdef USE_IRIDESCENCE
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
#endif`,Xg=`#ifdef USE_BUMPMAP
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
#endif`,Cg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Rg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ig=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Dg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ng=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Og=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Fg=`#define PI 3.141592653589793
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
} // validated`,Gg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Bg=`vec3 transformedNormal = objectNormal;
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
#endif`,Zg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$g="gl_FragColor = linearToOutputTexel( gl_FragColor );",Kg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qg=`#ifdef USE_ENVMAP
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
#endif`,Jg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qg=`#ifdef USE_ENVMAP
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
#endif`,jg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,eW=`#ifdef USE_ENVMAP
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
#endif`,tW=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nW=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,iW=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rW=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sW=`#ifdef USE_GRADIENTMAP
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
}`,aW=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,oW=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lW=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cW=`uniform bool receiveShadow;
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
#endif`,uW=`#ifdef USE_ENVMAP
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
#endif`,fW=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hW=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dW=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pW=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,YW=`PhysicalMaterial material;
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
#endif`,mW=`struct PhysicalMaterial {
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
}`,SW=`
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
#endif`,_W=`#if defined( RE_IndirectDiffuse )
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
#endif`,TW=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gW=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,WW=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,MW=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,UW=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vW=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xW=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,EW=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,yW=`#if defined( USE_POINTS_UV )
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
#endif`,VW=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,AW=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bW=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,PW=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,XW=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,CW=`#ifdef USE_MORPHTARGETS
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
#endif`,RW=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,IW=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,wW=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,LW=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,DW=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,NW=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,OW=`#ifdef USE_NORMALMAP
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
#endif`,FW=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,GW=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,BW=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ZW=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,HW=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kW=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,zW=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$W=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,KW=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,QW=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,JW=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qW=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jW=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,eM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,nM=`float getShadowMask() {
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
}`,iM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rM=`#ifdef USE_SKINNING
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
#endif`,sM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,aM=`#ifdef USE_SKINNING
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
#endif`,oM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,fM=`#ifdef USE_TRANSMISSION
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
#endif`,hM=`#ifdef USE_TRANSMISSION
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
#endif`,dM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,YM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const SM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_M=`uniform sampler2D t2D;
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
}`,TM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,WM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,MM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UM=`#include <common>
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
}`,vM=`#if DEPTH_PACKING == 3200
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
}`,xM=`#define DISTANCE
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
}`,EM=`#define DISTANCE
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
}`,yM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,VM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AM=`uniform float scale;
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
}`,bM=`uniform vec3 diffuse;
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
}`,PM=`#include <common>
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
}`,XM=`uniform vec3 diffuse;
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
}`,CM=`#define LAMBERT
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
}`,RM=`#define LAMBERT
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
}`,IM=`#define MATCAP
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
}`,wM=`#define MATCAP
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
}`,LM=`#define NORMAL
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
}`,DM=`#define NORMAL
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
}`,NM=`#define PHONG
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
}`,OM=`#define PHONG
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
}`,FM=`#define STANDARD
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
}`,GM=`#define STANDARD
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
}`,BM=`#define TOON
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
}`,ZM=`#define TOON
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
}`,HM=`uniform float size;
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
}`,kM=`uniform vec3 diffuse;
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
}`,zM=`#include <common>
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
}`,$M=`uniform vec3 color;
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
}`,KM=`uniform float rotation;
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
}`,QM=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:_g,alphahash_pars_fragment:Tg,alphamap_fragment:gg,alphamap_pars_fragment:Wg,alphatest_fragment:Mg,alphatest_pars_fragment:Ug,aomap_fragment:vg,aomap_pars_fragment:xg,batching_pars_vertex:Eg,batching_vertex:yg,begin_vertex:Vg,beginnormal_vertex:Ag,bsdfs:bg,iridescence_fragment:Pg,bumpmap_pars_fragment:Xg,clipping_planes_fragment:Cg,clipping_planes_pars_fragment:Rg,clipping_planes_pars_vertex:Ig,clipping_planes_vertex:wg,color_fragment:Lg,color_pars_fragment:Dg,color_pars_vertex:Ng,color_vertex:Og,common:Fg,cube_uv_reflection_fragment:Gg,defaultnormal_vertex:Bg,displacementmap_pars_vertex:Zg,displacementmap_vertex:Hg,emissivemap_fragment:kg,emissivemap_pars_fragment:zg,colorspace_fragment:$g,colorspace_pars_fragment:Kg,envmap_fragment:Qg,envmap_common_pars_fragment:Jg,envmap_pars_fragment:qg,envmap_pars_vertex:jg,envmap_physical_pars_fragment:uW,envmap_vertex:eW,fog_vertex:tW,fog_pars_vertex:nW,fog_fragment:iW,fog_pars_fragment:rW,gradientmap_pars_fragment:sW,lightmap_pars_fragment:aW,lights_lambert_fragment:oW,lights_lambert_pars_fragment:lW,lights_pars_begin:cW,lights_toon_fragment:fW,lights_toon_pars_fragment:hW,lights_phong_fragment:dW,lights_phong_pars_fragment:pW,lights_physical_fragment:YW,lights_physical_pars_fragment:mW,lights_fragment_begin:SW,lights_fragment_maps:_W,lights_fragment_end:TW,logdepthbuf_fragment:gW,logdepthbuf_pars_fragment:WW,logdepthbuf_pars_vertex:MW,logdepthbuf_vertex:UW,map_fragment:vW,map_pars_fragment:xW,map_particle_fragment:EW,map_particle_pars_fragment:yW,metalnessmap_fragment:VW,metalnessmap_pars_fragment:AW,morphinstance_vertex:bW,morphcolor_vertex:PW,morphnormal_vertex:XW,morphtarget_pars_vertex:CW,morphtarget_vertex:RW,normal_fragment_begin:IW,normal_fragment_maps:wW,normal_pars_fragment:LW,normal_pars_vertex:DW,normal_vertex:NW,normalmap_pars_fragment:OW,clearcoat_normal_fragment_begin:FW,clearcoat_normal_fragment_maps:GW,clearcoat_pars_fragment:BW,iridescence_pars_fragment:ZW,opaque_fragment:HW,packing:kW,premultiplied_alpha_fragment:zW,project_vertex:$W,dithering_fragment:KW,dithering_pars_fragment:QW,roughnessmap_fragment:JW,roughnessmap_pars_fragment:qW,shadowmap_pars_fragment:jW,shadowmap_pars_vertex:eM,shadowmap_vertex:tM,shadowmask_pars_fragment:nM,skinbase_vertex:iM,skinning_pars_vertex:rM,skinning_vertex:sM,skinnormal_vertex:aM,specularmap_fragment:oM,specularmap_pars_fragment:lM,tonemapping_fragment:cM,tonemapping_pars_fragment:uM,transmission_fragment:fM,transmission_pars_fragment:hM,uv_pars_fragment:dM,uv_pars_vertex:pM,uv_vertex:YM,worldpos_vertex:mM,background_vert:SM,background_frag:_M,backgroundCube_vert:TM,backgroundCube_frag:gM,cube_vert:WM,cube_frag:MM,depth_vert:UM,depth_frag:vM,distanceRGBA_vert:xM,distanceRGBA_frag:EM,equirect_vert:yM,equirect_frag:VM,linedashed_vert:AM,linedashed_frag:bM,meshbasic_vert:PM,meshbasic_frag:XM,meshlambert_vert:CM,meshlambert_frag:RM,meshmatcap_vert:IM,meshmatcap_frag:wM,meshnormal_vert:LM,meshnormal_frag:DM,meshphong_vert:NM,meshphong_frag:OM,meshphysical_vert:FM,meshphysical_frag:GM,meshtoon_vert:BM,meshtoon_frag:ZM,points_vert:HM,points_frag:kM,shadow_vert:zM,shadow_frag:$M,sprite_vert:KM,sprite_frag:QM},me={common:{diffuse:{value:new gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new gt(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},Wi={basic:{uniforms:Tn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:Tn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new gt(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:Tn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new gt(0)},specular:{value:new gt(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:Tn([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:Tn([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new gt(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:Tn([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:Tn([me.points,me.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:Tn([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:Tn([me.common,me.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:Tn([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:Tn([me.sprite,me.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:Tn([me.common,me.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:Tn([me.lights,me.fog,{color:{value:new gt(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};Wi.physical={uniforms:Tn([Wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new gt(0)},specularColor:{value:new gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const sl={r:0,b:0,g:0},Ir=new er,JM=new zt;function qM(i,e,t,n,r,s,a){const o=new gt(0);let l=s===!0?0:1,c,u,f=null,d=0,h=null;function S(x){let _=x.isScene===!0?x.background:null;return _&&_.isTexture&&(_=(x.backgroundBlurriness>0?t:e).get(_)),_}function m(x){let _=!1;const E=S(x);E===null?p(o,l):E&&E.isColor&&(p(E,1),_=!0);const y=i.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,a):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function Y(x,_){const E=S(_);E&&(E.isCubeTexture||E.mapping===$l)?(u===void 0&&(u=new Ai(new fa(1,1,1),new tr({name:"BackgroundCubeMaterial",uniforms:aa(Wi.backgroundCube.uniforms),vertexShader:Wi.backgroundCube.vertexShader,fragmentShader:Wi.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(y,U,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Ir.copy(_.backgroundRotation),Ir.x*=-1,Ir.y*=-1,Ir.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Ir.y*=-1,Ir.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(JM.makeRotationFromEuler(Ir)),u.material.toneMapped=pt.getTransfer(E.colorSpace)!==Wt,(f!==E||d!==E.version||h!==i.toneMapping)&&(u.material.needsUpdate=!0,f=E,d=E.version,h=i.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Ai(new Ql(2,2),new tr({name:"BackgroundMaterial",uniforms:aa(Wi.background.uniforms),vertexShader:Wi.background.vertexShader,fragmentShader:Wi.background.fragmentShader,side:xr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=pt.getTransfer(E.colorSpace)!==Wt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(f!==E||d!==E.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,f=E,d=E.version,h=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,_){x.getRGB(sl,Wm(i)),n.buffers.color.setClear(sl.r,sl.g,sl.b,_,a)}function v(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,_=1){o.set(x),l=_,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(o,l)},render:m,addToRenderList:Y,dispose:v}}function jM(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,a=!1;function o(T,C,R,O,Z){let B=!1;const H=f(O,R,C);s!==H&&(s=H,c(s.object)),B=h(T,O,R,Z),B&&S(T,O,R,Z),Z!==null&&e.update(Z,i.ELEMENT_ARRAY_BUFFER),(B||a)&&(a=!1,_(T,C,R,O),Z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function l(){return i.createVertexArray()}function c(T){return i.bindVertexArray(T)}function u(T){return i.deleteVertexArray(T)}function f(T,C,R){const O=R.wireframe===!0;let Z=n[T.id];Z===void 0&&(Z={},n[T.id]=Z);let B=Z[C.id];B===void 0&&(B={},Z[C.id]=B);let H=B[O];return H===void 0&&(H=d(l()),B[O]=H),H}function d(T){const C=[],R=[],O=[];for(let Z=0;Z<t;Z++)C[Z]=0,R[Z]=0,O[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:R,attributeDivisors:O,object:T,attributes:{},index:null}}function h(T,C,R,O){const Z=s.attributes,B=C.attributes;let H=0;const G=R.getAttributes();for(const N in G)if(G[N].location>=0){const P=Z[N];let fe=B[N];if(fe===void 0&&(N==="instanceMatrix"&&T.instanceMatrix&&(fe=T.instanceMatrix),N==="instanceColor"&&T.instanceColor&&(fe=T.instanceColor)),P===void 0||P.attribute!==fe||fe&&P.data!==fe.data)return!0;H++}return s.attributesNum!==H||s.index!==O}function S(T,C,R,O){const Z={},B=C.attributes;let H=0;const G=R.getAttributes();for(const N in G)if(G[N].location>=0){let P=B[N];P===void 0&&(N==="instanceMatrix"&&T.instanceMatrix&&(P=T.instanceMatrix),N==="instanceColor"&&T.instanceColor&&(P=T.instanceColor));const fe={};fe.attribute=P,P&&P.data&&(fe.data=P.data),Z[N]=fe,H++}s.attributes=Z,s.attributesNum=H,s.index=O}function m(){const T=s.newAttributes;for(let C=0,R=T.length;C<R;C++)T[C]=0}function Y(T){p(T,0)}function p(T,C){const R=s.newAttributes,O=s.enabledAttributes,Z=s.attributeDivisors;R[T]=1,O[T]===0&&(i.enableVertexAttribArray(T),O[T]=1),Z[T]!==C&&(i.vertexAttribDivisor(T,C),Z[T]=C)}function v(){const T=s.newAttributes,C=s.enabledAttributes;for(let R=0,O=C.length;R<O;R++)C[R]!==T[R]&&(i.disableVertexAttribArray(R),C[R]=0)}function x(T,C,R,O,Z,B,H){H===!0?i.vertexAttribIPointer(T,C,R,Z,B):i.vertexAttribPointer(T,C,R,O,Z,B)}function _(T,C,R,O){m();const Z=O.attributes,B=R.getAttributes(),H=C.defaultAttributeValues;for(const G in B){const N=B[G];if(N.location>=0){let ne=Z[G];if(ne===void 0&&(G==="instanceMatrix"&&T.instanceMatrix&&(ne=T.instanceMatrix),G==="instanceColor"&&T.instanceColor&&(ne=T.instanceColor)),ne!==void 0){const P=ne.normalized,fe=ne.itemSize,Le=e.get(ne);if(Le===void 0)continue;const tt=Le.buffer,He=Le.type,Ze=Le.bytesPerElement,K=He===i.INT||He===i.UNSIGNED_INT||ne.gpuType===zf;if(ne.isInterleavedBufferAttribute){const q=ne.data,de=q.stride,Ve=ne.offset;if(q.isInstancedInterleavedBuffer){for(let ve=0;ve<N.locationSize;ve++)p(N.location+ve,q.meshPerAttribute);T.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let ve=0;ve<N.locationSize;ve++)Y(N.location+ve);i.bindBuffer(i.ARRAY_BUFFER,tt);for(let ve=0;ve<N.locationSize;ve++)x(N.location+ve,fe/N.locationSize,He,P,de*Ze,(Ve+fe/N.locationSize*ve)*Ze,K)}else{if(ne.isInstancedBufferAttribute){for(let q=0;q<N.locationSize;q++)p(N.location+q,ne.meshPerAttribute);T.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let q=0;q<N.locationSize;q++)Y(N.location+q);i.bindBuffer(i.ARRAY_BUFFER,tt);for(let q=0;q<N.locationSize;q++)x(N.location+q,fe/N.locationSize,He,P,fe*Ze,fe/N.locationSize*q*Ze,K)}}else if(H!==void 0){const P=H[G];if(P!==void 0)switch(P.length){case 2:i.vertexAttrib2fv(N.location,P);break;case 3:i.vertexAttrib3fv(N.location,P);break;case 4:i.vertexAttrib4fv(N.location,P);break;default:i.vertexAttrib1fv(N.location,P)}}}}v()}function E(){b();for(const T in n){const C=n[T];for(const R in C){const O=C[R];for(const Z in O)u(O[Z].object),delete O[Z];delete C[R]}delete n[T]}}function y(T){if(n[T.id]===void 0)return;const C=n[T.id];for(const R in C){const O=C[R];for(const Z in O)u(O[Z].object),delete O[Z];delete C[R]}delete n[T.id]}function U(T){for(const C in n){const R=n[C];if(R[T.id]===void 0)continue;const O=R[T.id];for(const Z in O)u(O[Z].object),delete O[Z];delete R[T.id]}}function b(){g(),a=!0,s!==r&&(s=r,c(s.object))}function g(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:b,resetDefaultState:g,dispose:E,releaseStatesOfGeometry:y,releaseStatesOfProgram:U,initAttributes:m,enableAttribute:Y,disableUnusedAttributes:v}}function eU(i,e,t){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,f){f!==0&&(i.drawArraysInstanced(n,c,u,f),t.update(u,n,f))}function o(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,f);let h=0;for(let S=0;S<f;S++)h+=u[S];t.update(h,n,1)}function l(c,u,f,d){if(f===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let S=0;S<c.length;S++)a(c[S],u[S],d[S]);else{h.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,f);let S=0;for(let m=0;m<f;m++)S+=u[m]*d[m];t.update(S,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function tU(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(U){return!(U!==Yi&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(U){const b=U===So&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==ji&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==$i&&!b)}function l(U){if(U==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),Y=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=S>0,y=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:h,maxVertexTextures:S,maxTextureSize:m,maxCubemapSize:Y,maxAttributes:p,maxVertexUniforms:v,maxVaryings:x,maxFragmentUniforms:_,vertexTextures:E,maxSamples:y}}function nU(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new Or,o=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||n!==0||r;return r=d,n=f.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,h){const S=f.clippingPlanes,m=f.clipIntersection,Y=f.clipShadows,p=i.get(f);if(!r||S===null||S.length===0||s&&!Y)s?u(null):c();else{const v=s?0:n,x=v*4;let _=p.clippingState||null;l.value=_,_=u(S,d,x,h);for(let E=0;E!==x;++E)_[E]=t[E];p.clippingState=_,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,d,h,S){const m=f!==null?f.length:0;let Y=null;if(m!==0){if(Y=l.value,S!==!0||Y===null){const p=h+m*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(Y===null||Y.length<p)&&(Y=new Float32Array(p));for(let x=0,_=h;x!==m;++x,_+=4)a.copy(f[x]).applyMatrix4(v,o),a.normal.toArray(Y,_),Y[_+3]=a.constant}l.value=Y,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,Y}}function iU(i){let e=new WeakMap;function t(a,o){return o===bu?a.mapping=ia:o===Pu&&(a.mapping=ra),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===bu||o===Pu)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new sg(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Ds=4,xd=[.125,.215,.35,.446,.526,.582],Br=20,Oc=new pg,Ed=new gt;let Fc=null,Gc=0,Bc=0,Zc=!1;const Fr=(1+Math.sqrt(5))/2,As=1/Fr,yd=[new k(-Fr,As,0),new k(Fr,As,0),new k(-As,0,Fr),new k(As,0,Fr),new k(0,Fr,-As),new k(0,Fr,As),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)],rU=new k;class Vd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=rU}=s;Fc=this._renderer.getRenderTarget(),Gc=this._renderer.getActiveCubeFace(),Bc=this._renderer.getActiveMipmapLevel(),Zc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Fc,Gc,Bc),this._renderer.xr.enabled=Zc,e.scissorTest=!1,al(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ia||e.mapping===ra?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fc=this._renderer.getRenderTarget(),Gc=this._renderer.getActiveCubeFace(),Bc=this._renderer.getActiveMipmapLevel(),Zc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:yi,minFilter:yi,generateMipmaps:!1,type:So,format:Yi,colorSpace:sa,depthBuffer:!1},r=Ad(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ad(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sU(s)),this._blurMaterial=aU(s,e,t)}return r}_compileMaterial(e){const t=new Ai(this._lodPlanes[0],e);this._renderer.compile(t,Oc)}_sceneToCubeUV(e,t,n,r,s){const l=new si(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(Ed),f.toneMapping=gr,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null));const m=new _m({name:"PMREM.Background",side:vn,depthWrite:!1,depthTest:!1}),Y=new Ai(new fa,m);let p=!1;const v=e.background;v?v.isColor&&(m.color.copy(v),e.background=null,p=!0):(m.color.copy(Ed),p=!0);for(let x=0;x<6;x++){const _=x%3;_===0?(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[x],s.y,s.z)):_===1?(l.up.set(0,0,c[x]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[x],s.z)):(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[x]));const E=this._cubeSize;al(r,_*E,x>2?E:0,E,E),f.setRenderTarget(r),p&&f.render(Y,l),f.render(e,l)}Y.geometry.dispose(),Y.material.dispose(),f.toneMapping=h,f.autoClear=d,e.background=v}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===ia||e.mapping===ra;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bd());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Ai(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;al(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Oc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=yd[(r-s-1)%yd.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Ai(this._lodPlanes[r],c),d=c.uniforms,h=this._sizeLods[n]-1,S=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*Br-1),m=s/S,Y=isFinite(s)?1+Math.floor(u*m):Br;Y>Br&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${Y} samples when the maximum is set to ${Br}`);const p=[];let v=0;for(let U=0;U<Br;++U){const b=U/m,g=Math.exp(-b*b/2);p.push(g),U===0?v+=g:U<Y&&(v+=2*g)}for(let U=0;U<p.length;U++)p[U]=p[U]/v;d.envMap.value=e.texture,d.samples.value=Y,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=S,d.mipInt.value=x-n;const _=this._sizeLods[r],E=3*_*(r>x-Ds?r-x+Ds:0),y=4*(this._cubeSize-_);al(t,E,y,3*_,2*_),l.setRenderTarget(t),l.render(f,Oc)}}function sU(i){const e=[],t=[],n=[];let r=i;const s=i-Ds+1+xd.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>i-Ds?l=xd[a-i+Ds-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,S=6,m=3,Y=2,p=1,v=new Float32Array(m*S*h),x=new Float32Array(Y*S*h),_=new Float32Array(p*S*h);for(let y=0;y<h;y++){const U=y%3*2/3-1,b=y>2?0:-1,g=[U,b,0,U+2/3,b,0,U+2/3,b+1,0,U,b,0,U+2/3,b+1,0,U,b+1,0];v.set(g,m*S*y),x.set(d,Y*S*y);const T=[y,y,y,y,y,y];_.set(T,p*S*y)}const E=new nr;E.setAttribute("position",new Si(v,m)),E.setAttribute("uv",new Si(x,Y)),E.setAttribute("faceIndex",new Si(_,p)),e.push(E),r>Ds&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ad(i,e,t){const n=new ls(i,e,t);return n.texture.mapping=$l,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function al(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function aU(i,e,t){const n=new Float32Array(Br),r=new k(0,1,0);return new tr({name:"SphericalGaussianBlur",defines:{n:Br,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:nh(),fragmentShader:`

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
		`,blending:Tr,depthTest:!1,depthWrite:!1})}function bd(){return new tr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nh(),fragmentShader:`

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
		`,blending:Tr,depthTest:!1,depthWrite:!1})}function Pd(){return new tr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Tr,depthTest:!1,depthWrite:!1})}function nh(){return`

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
	`}function oU(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===bu||l===Pu,u=l===ia||l===ra;if(c||u){let f=e.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Vd(i)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const h=o.image;return c&&h&&h.height>0||u&&h&&r(h)?(t===null&&(t=new Vd(i)),f=c?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function lU(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&uo("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function cU(i,e,t,n){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const S in d.attributes)e.remove(d.attributes[S]);d.removeEventListener("dispose",a),delete r[d.id];const h=s.get(d);h&&(e.remove(h),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const h in d)e.update(d[h],i.ARRAY_BUFFER)}function c(f){const d=[],h=f.index,S=f.attributes.position;let m=0;if(h!==null){const v=h.array;m=h.version;for(let x=0,_=v.length;x<_;x+=3){const E=v[x+0],y=v[x+1],U=v[x+2];d.push(E,y,y,U,U,E)}}else if(S!==void 0){const v=S.array;m=S.version;for(let x=0,_=v.length/3-1;x<_;x+=3){const E=x+0,y=x+1,U=x+2;d.push(E,y,y,U,U,E)}}else return;const Y=new(dm(d)?gm:Tm)(d,1);Y.version=m;const p=s.get(f);p&&e.remove(p),s.set(f,Y)}function u(f){const d=s.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function uU(i,e,t){let n;function r(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,h){i.drawElements(n,h,s,d*a),t.update(h,n,1)}function c(d,h,S){S!==0&&(i.drawElementsInstanced(n,h,s,d*a,S),t.update(h,n,S))}function u(d,h,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,d,0,S);let Y=0;for(let p=0;p<S;p++)Y+=h[p];t.update(Y,n,1)}function f(d,h,S,m){if(S===0)return;const Y=e.get("WEBGL_multi_draw");if(Y===null)for(let p=0;p<d.length;p++)c(d[p]/a,h[p],m[p]);else{Y.multiDrawElementsInstancedWEBGL(n,h,0,s,d,0,m,0,S);let p=0;for(let v=0;v<S;v++)p+=h[v]*m[v];t.update(p,n,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function fU(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function hU(i,e,t){const n=new WeakMap,r=new Gt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==f){let T=function(){b.dispose(),n.delete(o),o.removeEventListener("dispose",T)};var h=T;d!==void 0&&d.texture.dispose();const S=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,Y=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let _=0;S===!0&&(_=1),m===!0&&(_=2),Y===!0&&(_=3);let E=o.attributes.position.count*_,y=1;E>e.maxTextureSize&&(y=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const U=new Float32Array(E*y*4*f),b=new pm(U,E,y,f);b.type=$i,b.needsUpdate=!0;const g=_*4;for(let C=0;C<f;C++){const R=p[C],O=v[C],Z=x[C],B=E*y*4*C;for(let H=0;H<R.count;H++){const G=H*g;S===!0&&(r.fromBufferAttribute(R,H),U[B+G+0]=r.x,U[B+G+1]=r.y,U[B+G+2]=r.z,U[B+G+3]=0),m===!0&&(r.fromBufferAttribute(O,H),U[B+G+4]=r.x,U[B+G+5]=r.y,U[B+G+6]=r.z,U[B+G+7]=0),Y===!0&&(r.fromBufferAttribute(Z,H),U[B+G+8]=r.x,U[B+G+9]=r.y,U[B+G+10]=r.z,U[B+G+11]=Z.itemSize===4?r.w:1)}}d={count:f,texture:b,size:new Mt(E,y)},n.set(o,d),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let S=0;for(let Y=0;Y<c.length;Y++)S+=c[Y];const m=o.morphTargetsRelative?1:1-S;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function dU(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const bm=new Xn,Xd=new ym(1,1),Pm=new pm,Xm=new BT,Cm=new vm,Cd=[],Rd=[],Id=new Float32Array(16),wd=new Float32Array(9),Ld=new Float32Array(4);function ha(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Cd[r];if(s===void 0&&(s=new Float32Array(r),Cd[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function Jt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function qt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Jl(i,e){let t=Rd[e];t===void 0&&(t=new Int32Array(e),Rd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function pU(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function YU(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;i.uniform2fv(this.addr,e),qt(t,e)}}function mU(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Jt(t,e))return;i.uniform3fv(this.addr,e),qt(t,e)}}function SU(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;i.uniform4fv(this.addr,e),qt(t,e)}}function _U(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Jt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),qt(t,e)}else{if(Jt(t,n))return;Ld.set(n),i.uniformMatrix2fv(this.addr,!1,Ld),qt(t,n)}}function TU(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Jt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),qt(t,e)}else{if(Jt(t,n))return;wd.set(n),i.uniformMatrix3fv(this.addr,!1,wd),qt(t,n)}}function gU(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Jt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),qt(t,e)}else{if(Jt(t,n))return;Id.set(n),i.uniformMatrix4fv(this.addr,!1,Id),qt(t,n)}}function WU(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function MU(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;i.uniform2iv(this.addr,e),qt(t,e)}}function UU(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;i.uniform3iv(this.addr,e),qt(t,e)}}function vU(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;i.uniform4iv(this.addr,e),qt(t,e)}}function xU(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function EU(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;i.uniform2uiv(this.addr,e),qt(t,e)}}function yU(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;i.uniform3uiv(this.addr,e),qt(t,e)}}function VU(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;i.uniform4uiv(this.addr,e),qt(t,e)}}function AU(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Xd.compareFunction=hm,s=Xd):s=bm,t.setTexture2D(e||s,r)}function bU(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Xm,r)}function PU(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Cm,r)}function XU(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Pm,r)}function CU(i){switch(i){case 5126:return pU;case 35664:return YU;case 35665:return mU;case 35666:return SU;case 35674:return _U;case 35675:return TU;case 35676:return gU;case 5124:case 35670:return WU;case 35667:case 35671:return MU;case 35668:case 35672:return UU;case 35669:case 35673:return vU;case 5125:return xU;case 36294:return EU;case 36295:return yU;case 36296:return VU;case 35678:case 36198:case 36298:case 36306:case 35682:return AU;case 35679:case 36299:case 36307:return bU;case 35680:case 36300:case 36308:case 36293:return PU;case 36289:case 36303:case 36311:case 36292:return XU}}function RU(i,e){i.uniform1fv(this.addr,e)}function IU(i,e){const t=ha(e,this.size,2);i.uniform2fv(this.addr,t)}function wU(i,e){const t=ha(e,this.size,3);i.uniform3fv(this.addr,t)}function LU(i,e){const t=ha(e,this.size,4);i.uniform4fv(this.addr,t)}function DU(i,e){const t=ha(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function NU(i,e){const t=ha(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function OU(i,e){const t=ha(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function FU(i,e){i.uniform1iv(this.addr,e)}function GU(i,e){i.uniform2iv(this.addr,e)}function BU(i,e){i.uniform3iv(this.addr,e)}function ZU(i,e){i.uniform4iv(this.addr,e)}function HU(i,e){i.uniform1uiv(this.addr,e)}function kU(i,e){i.uniform2uiv(this.addr,e)}function zU(i,e){i.uniform3uiv(this.addr,e)}function $U(i,e){i.uniform4uiv(this.addr,e)}function KU(i,e,t){const n=this.cache,r=e.length,s=Jl(t,r);Jt(n,s)||(i.uniform1iv(this.addr,s),qt(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||bm,s[a])}function QU(i,e,t){const n=this.cache,r=e.length,s=Jl(t,r);Jt(n,s)||(i.uniform1iv(this.addr,s),qt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Xm,s[a])}function JU(i,e,t){const n=this.cache,r=e.length,s=Jl(t,r);Jt(n,s)||(i.uniform1iv(this.addr,s),qt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Cm,s[a])}function qU(i,e,t){const n=this.cache,r=e.length,s=Jl(t,r);Jt(n,s)||(i.uniform1iv(this.addr,s),qt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Pm,s[a])}function jU(i){switch(i){case 5126:return RU;case 35664:return IU;case 35665:return wU;case 35666:return LU;case 35674:return DU;case 35675:return NU;case 35676:return OU;case 5124:case 35670:return FU;case 35667:case 35671:return GU;case 35668:case 35672:return BU;case 35669:case 35673:return ZU;case 5125:return HU;case 36294:return kU;case 36295:return zU;case 36296:return $U;case 35678:case 36198:case 36298:case 36306:case 35682:return KU;case 35679:case 36299:case 36307:return QU;case 35680:case 36300:case 36308:case 36293:return JU;case 36289:case 36303:case 36311:case 36292:return qU}}class ev{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=CU(t.type)}}class tv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=jU(t.type)}}class nv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const Hc=/(\w+)(\])?(\[|\.)?/g;function Dd(i,e){i.seq.push(e),i.map[e.id]=e}function iv(i,e,t){const n=i.name,r=n.length;for(Hc.lastIndex=0;;){const s=Hc.exec(n),a=Hc.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Dd(t,c===void 0?new ev(o,i,e):new tv(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new nv(o),Dd(t,f)),t=f}}}class yl{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);iv(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function Nd(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const rv=37297;let sv=0;function av(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Od=new Je;function ov(i){pt._getMatrix(Od,pt.workingColorSpace,i);const e=`mat3( ${Od.elements.map(t=>t.toFixed(4))} )`;switch(pt.getTransfer(i)){case Ol:return[e,"LinearTransferOETF"];case Wt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Fd(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+av(i.getShaderSource(e),o)}else return s}function lv(i,e){const t=ov(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function cv(i,e){let t;switch(e){case nT:t="Linear";break;case iT:t="Reinhard";break;case rT:t="Cineon";break;case nm:t="ACESFilmic";break;case aT:t="AgX";break;case oT:t="Neutral";break;case sT:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ol=new k;function uv(){pt.getLuminanceCoefficients(ol);const i=ol.x.toFixed(4),e=ol.y.toFixed(4),t=ol.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xa).join(`
`)}function hv(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function dv(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Xa(i){return i!==""}function Gd(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const pv=/^[ \t]*#include +<([\w\d./]+)>/gm;function uf(i){return i.replace(pv,mv)}const Yv=new Map;function mv(i,e){let t=je[e];if(t===void 0){const n=Yv.get(e);if(n!==void 0)t=je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return uf(t)}const Sv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zd(i){return i.replace(Sv,_v)}function _v(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Hd(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Tv(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===em?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===I_?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ni&&(e="SHADOWMAP_TYPE_VSM"),e}function gv(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ia:case ra:e="ENVMAP_TYPE_CUBE";break;case $l:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Wv(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===ra&&(e="ENVMAP_MODE_REFRACTION"),e}function Mv(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case tm:e="ENVMAP_BLENDING_MULTIPLY";break;case eT:e="ENVMAP_BLENDING_MIX";break;case tT:e="ENVMAP_BLENDING_ADD";break}return e}function Uv(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function vv(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Tv(t),c=gv(t),u=Wv(t),f=Mv(t),d=Uv(t),h=fv(t),S=hv(s),m=r.createProgram();let Y,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(Y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(Xa).join(`
`),Y.length>0&&(Y+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(Xa).join(`
`),p.length>0&&(p+=`
`)):(Y=[Hd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xa).join(`
`),p=[Hd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gr?"#define TONE_MAPPING":"",t.toneMapping!==gr?je.tonemapping_pars_fragment:"",t.toneMapping!==gr?cv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,lv("linearToOutputTexel",t.outputColorSpace),uv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xa).join(`
`)),a=uf(a),a=Gd(a,t),a=Bd(a,t),o=uf(o),o=Gd(o,t),o=Bd(o,t),a=Zd(a),o=Zd(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,Y=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+Y,p=["#define varying in",t.glslVersion===id?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===id?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=v+Y+a,_=v+p+o,E=Nd(r,r.VERTEX_SHADER,x),y=Nd(r,r.FRAGMENT_SHADER,_);r.attachShader(m,E),r.attachShader(m,y),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function U(C){if(i.debug.checkShaderErrors){const R=r.getProgramInfoLog(m)||"",O=r.getShaderInfoLog(E)||"",Z=r.getShaderInfoLog(y)||"",B=R.trim(),H=O.trim(),G=Z.trim();let N=!0,ne=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(N=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,m,E,y);else{const P=Fd(r,E,"vertex"),fe=Fd(r,y,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+B+`
`+P+`
`+fe)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(H===""||G==="")&&(ne=!1);ne&&(C.diagnostics={runnable:N,programLog:B,vertexShader:{log:H,prefix:Y},fragmentShader:{log:G,prefix:p}})}r.deleteShader(E),r.deleteShader(y),b=new yl(r,m),g=dv(r,m)}let b;this.getUniforms=function(){return b===void 0&&U(this),b};let g;this.getAttributes=function(){return g===void 0&&U(this),g};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(m,rv)),T},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=sv++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=E,this.fragmentShader=y,this}let xv=0;class Ev{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new yv(e),t.set(e,n)),n}}class yv{constructor(e){this.id=xv++,this.code=e,this.usedTimes=0}}function Vv(i,e,t,n,r,s,a){const o=new mm,l=new Ev,c=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let h=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(g){return c.add(g),g===0?"uv":`uv${g}`}function Y(g,T,C,R,O){const Z=R.fog,B=O.geometry,H=g.isMeshStandardMaterial?R.environment:null,G=(g.isMeshStandardMaterial?t:e).get(g.envMap||H),N=G&&G.mapping===$l?G.image.height:null,ne=S[g.type];g.precision!==null&&(h=r.getMaxPrecision(g.precision),h!==g.precision&&console.warn("THREE.WebGLProgram.getParameters:",g.precision,"not supported, using",h,"instead."));const P=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,fe=P!==void 0?P.length:0;let Le=0;B.morphAttributes.position!==void 0&&(Le=1),B.morphAttributes.normal!==void 0&&(Le=2),B.morphAttributes.color!==void 0&&(Le=3);let tt,He,Ze,K;if(ne){const Se=Wi[ne];tt=Se.vertexShader,He=Se.fragmentShader}else tt=g.vertexShader,He=g.fragmentShader,l.update(g),Ze=l.getVertexShaderID(g),K=l.getFragmentShaderID(g);const q=i.getRenderTarget(),de=i.state.buffers.depth.getReversed(),Ve=O.isInstancedMesh===!0,ve=O.isBatchedMesh===!0,Fe=!!g.map,ft=!!g.matcap,A=!!G,ke=!!g.aoMap,Ce=!!g.lightMap,Ae=!!g.bumpMap,I=!!g.normalMap,nt=!!g.displacementMap,_e=!!g.emissiveMap,Ge=!!g.metalnessMap,Ke=!!g.roughnessMap,Yt=g.anisotropy>0,V=g.clearcoat>0,W=g.dispersion>0,D=g.iridescence>0,Q=g.sheen>0,J=g.transmission>0,$=Yt&&!!g.anisotropyMap,Te=V&&!!g.clearcoatMap,se=V&&!!g.clearcoatNormalMap,xe=V&&!!g.clearcoatRoughnessMap,he=D&&!!g.iridescenceMap,re=D&&!!g.iridescenceThicknessMap,ue=Q&&!!g.sheenColorMap,Ie=Q&&!!g.sheenRoughnessMap,Ee=!!g.specularMap,ce=!!g.specularColorMap,Be=!!g.specularIntensityMap,X=J&&!!g.transmissionMap,ie=J&&!!g.thicknessMap,ae=!!g.gradientMap,Ye=!!g.alphaMap,te=g.alphaTest>0,j=!!g.alphaHash,We=!!g.extensions;let De=gr;g.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(De=i.toneMapping);const ht={shaderID:ne,shaderType:g.type,shaderName:g.name,vertexShader:tt,fragmentShader:He,defines:g.defines,customVertexShaderID:Ze,customFragmentShaderID:K,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:h,batching:ve,batchingColor:ve&&O._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&O.instanceColor!==null,instancingMorph:Ve&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:q===null?i.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:sa,alphaToCoverage:!!g.alphaToCoverage,map:Fe,matcap:ft,envMap:A,envMapMode:A&&G.mapping,envMapCubeUVHeight:N,aoMap:ke,lightMap:Ce,bumpMap:Ae,normalMap:I,displacementMap:d&&nt,emissiveMap:_e,normalMapObjectSpace:I&&g.normalMapType===hT,normalMapTangentSpace:I&&g.normalMapType===fT,metalnessMap:Ge,roughnessMap:Ke,anisotropy:Yt,anisotropyMap:$,clearcoat:V,clearcoatMap:Te,clearcoatNormalMap:se,clearcoatRoughnessMap:xe,dispersion:W,iridescence:D,iridescenceMap:he,iridescenceThicknessMap:re,sheen:Q,sheenColorMap:ue,sheenRoughnessMap:Ie,specularMap:Ee,specularColorMap:ce,specularIntensityMap:Be,transmission:J,transmissionMap:X,thicknessMap:ie,gradientMap:ae,opaque:g.transparent===!1&&g.blending===zs&&g.alphaToCoverage===!1,alphaMap:Ye,alphaTest:te,alphaHash:j,combine:g.combine,mapUv:Fe&&m(g.map.channel),aoMapUv:ke&&m(g.aoMap.channel),lightMapUv:Ce&&m(g.lightMap.channel),bumpMapUv:Ae&&m(g.bumpMap.channel),normalMapUv:I&&m(g.normalMap.channel),displacementMapUv:nt&&m(g.displacementMap.channel),emissiveMapUv:_e&&m(g.emissiveMap.channel),metalnessMapUv:Ge&&m(g.metalnessMap.channel),roughnessMapUv:Ke&&m(g.roughnessMap.channel),anisotropyMapUv:$&&m(g.anisotropyMap.channel),clearcoatMapUv:Te&&m(g.clearcoatMap.channel),clearcoatNormalMapUv:se&&m(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&m(g.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&m(g.iridescenceMap.channel),iridescenceThicknessMapUv:re&&m(g.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&m(g.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&m(g.sheenRoughnessMap.channel),specularMapUv:Ee&&m(g.specularMap.channel),specularColorMapUv:ce&&m(g.specularColorMap.channel),specularIntensityMapUv:Be&&m(g.specularIntensityMap.channel),transmissionMapUv:X&&m(g.transmissionMap.channel),thicknessMapUv:ie&&m(g.thicknessMap.channel),alphaMapUv:Ye&&m(g.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(I||Yt),vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!B.attributes.uv&&(Fe||Ye),fog:!!Z,useFog:g.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:g.flatShading===!0&&g.wireframe===!1,sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:de,skinning:O.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:Le,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:De,decodeVideoTexture:Fe&&g.map.isVideoTexture===!0&&pt.getTransfer(g.map.colorSpace)===Wt,decodeVideoTextureEmissive:_e&&g.emissiveMap.isVideoTexture===!0&&pt.getTransfer(g.emissiveMap.colorSpace)===Wt,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Hi,flipSided:g.side===vn,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:We&&g.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(We&&g.extensions.multiDraw===!0||ve)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return ht.vertexUv1s=c.has(1),ht.vertexUv2s=c.has(2),ht.vertexUv3s=c.has(3),c.clear(),ht}function p(g){const T=[];if(g.shaderID?T.push(g.shaderID):(T.push(g.customVertexShaderID),T.push(g.customFragmentShaderID)),g.defines!==void 0)for(const C in g.defines)T.push(C),T.push(g.defines[C]);return g.isRawShaderMaterial===!1&&(v(T,g),x(T,g),T.push(i.outputColorSpace)),T.push(g.customProgramCacheKey),T.join()}function v(g,T){g.push(T.precision),g.push(T.outputColorSpace),g.push(T.envMapMode),g.push(T.envMapCubeUVHeight),g.push(T.mapUv),g.push(T.alphaMapUv),g.push(T.lightMapUv),g.push(T.aoMapUv),g.push(T.bumpMapUv),g.push(T.normalMapUv),g.push(T.displacementMapUv),g.push(T.emissiveMapUv),g.push(T.metalnessMapUv),g.push(T.roughnessMapUv),g.push(T.anisotropyMapUv),g.push(T.clearcoatMapUv),g.push(T.clearcoatNormalMapUv),g.push(T.clearcoatRoughnessMapUv),g.push(T.iridescenceMapUv),g.push(T.iridescenceThicknessMapUv),g.push(T.sheenColorMapUv),g.push(T.sheenRoughnessMapUv),g.push(T.specularMapUv),g.push(T.specularColorMapUv),g.push(T.specularIntensityMapUv),g.push(T.transmissionMapUv),g.push(T.thicknessMapUv),g.push(T.combine),g.push(T.fogExp2),g.push(T.sizeAttenuation),g.push(T.morphTargetsCount),g.push(T.morphAttributeCount),g.push(T.numDirLights),g.push(T.numPointLights),g.push(T.numSpotLights),g.push(T.numSpotLightMaps),g.push(T.numHemiLights),g.push(T.numRectAreaLights),g.push(T.numDirLightShadows),g.push(T.numPointLightShadows),g.push(T.numSpotLightShadows),g.push(T.numSpotLightShadowsWithMaps),g.push(T.numLightProbes),g.push(T.shadowMapType),g.push(T.toneMapping),g.push(T.numClippingPlanes),g.push(T.numClipIntersection),g.push(T.depthPacking)}function x(g,T){o.disableAll(),T.supportsVertexTextures&&o.enable(0),T.instancing&&o.enable(1),T.instancingColor&&o.enable(2),T.instancingMorph&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),T.batching&&o.enable(19),T.dispersion&&o.enable(20),T.batchingColor&&o.enable(21),T.gradientMap&&o.enable(22),g.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),g.push(o.mask)}function _(g){const T=S[g.type];let C;if(T){const R=Wi[T];C=Mm.clone(R.uniforms)}else C=g.uniforms;return C}function E(g,T){let C;for(let R=0,O=u.length;R<O;R++){const Z=u[R];if(Z.cacheKey===T){C=Z,++C.usedTimes;break}}return C===void 0&&(C=new vv(i,T,g,s),u.push(C)),C}function y(g){if(--g.usedTimes===0){const T=u.indexOf(g);u[T]=u[u.length-1],u.pop(),g.destroy()}}function U(g){l.remove(g)}function b(){l.dispose()}return{getParameters:Y,getProgramCacheKey:p,getUniforms:_,acquireProgram:E,releaseProgram:y,releaseShaderCache:U,programs:u,dispose:b}}function Av(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function bv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function kd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function zd(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(f,d,h,S,m,Y){let p=i[e];return p===void 0?(p={id:f.id,object:f,geometry:d,material:h,groupOrder:S,renderOrder:f.renderOrder,z:m,group:Y},i[e]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=h,p.groupOrder=S,p.renderOrder=f.renderOrder,p.z=m,p.group=Y),e++,p}function o(f,d,h,S,m,Y){const p=a(f,d,h,S,m,Y);h.transmission>0?n.push(p):h.transparent===!0?r.push(p):t.push(p)}function l(f,d,h,S,m,Y){const p=a(f,d,h,S,m,Y);h.transmission>0?n.unshift(p):h.transparent===!0?r.unshift(p):t.unshift(p)}function c(f,d){t.length>1&&t.sort(f||bv),n.length>1&&n.sort(d||kd),r.length>1&&r.sort(d||kd)}function u(){for(let f=e,d=i.length;f<d;f++){const h=i[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function Pv(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new zd,i.set(n,[a])):r>=s.length?(a=new zd,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Xv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new gt};break;case"SpotLight":t={position:new k,direction:new k,color:new gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new gt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new gt,groundColor:new gt};break;case"RectAreaLight":t={color:new gt,position:new k,halfWidth:new k,halfHeight:new k};break}return i[e.id]=t,t}}}function Cv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Rv=0;function Iv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function wv(i){const e=new Xv,t=Cv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new k);const r=new k,s=new zt,a=new zt;function o(c){let u=0,f=0,d=0;for(let g=0;g<9;g++)n.probe[g].set(0,0,0);let h=0,S=0,m=0,Y=0,p=0,v=0,x=0,_=0,E=0,y=0,U=0;c.sort(Iv);for(let g=0,T=c.length;g<T;g++){const C=c[g],R=C.color,O=C.intensity,Z=C.distance,B=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=R.r*O,f+=R.g*O,d+=R.b*O;else if(C.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(C.sh.coefficients[H],O);U++}else if(C.isDirectionalLight){const H=e.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const G=C.shadow,N=t.get(C);N.shadowIntensity=G.intensity,N.shadowBias=G.bias,N.shadowNormalBias=G.normalBias,N.shadowRadius=G.radius,N.shadowMapSize=G.mapSize,n.directionalShadow[h]=N,n.directionalShadowMap[h]=B,n.directionalShadowMatrix[h]=C.shadow.matrix,v++}n.directional[h]=H,h++}else if(C.isSpotLight){const H=e.get(C);H.position.setFromMatrixPosition(C.matrixWorld),H.color.copy(R).multiplyScalar(O),H.distance=Z,H.coneCos=Math.cos(C.angle),H.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),H.decay=C.decay,n.spot[m]=H;const G=C.shadow;if(C.map&&(n.spotLightMap[E]=C.map,E++,G.updateMatrices(C),C.castShadow&&y++),n.spotLightMatrix[m]=G.matrix,C.castShadow){const N=t.get(C);N.shadowIntensity=G.intensity,N.shadowBias=G.bias,N.shadowNormalBias=G.normalBias,N.shadowRadius=G.radius,N.shadowMapSize=G.mapSize,n.spotShadow[m]=N,n.spotShadowMap[m]=B,_++}m++}else if(C.isRectAreaLight){const H=e.get(C);H.color.copy(R).multiplyScalar(O),H.halfWidth.set(C.width*.5,0,0),H.halfHeight.set(0,C.height*.5,0),n.rectArea[Y]=H,Y++}else if(C.isPointLight){const H=e.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),H.distance=C.distance,H.decay=C.decay,C.castShadow){const G=C.shadow,N=t.get(C);N.shadowIntensity=G.intensity,N.shadowBias=G.bias,N.shadowNormalBias=G.normalBias,N.shadowRadius=G.radius,N.shadowMapSize=G.mapSize,N.shadowCameraNear=G.camera.near,N.shadowCameraFar=G.camera.far,n.pointShadow[S]=N,n.pointShadowMap[S]=B,n.pointShadowMatrix[S]=C.shadow.matrix,x++}n.point[S]=H,S++}else if(C.isHemisphereLight){const H=e.get(C);H.skyColor.copy(C.color).multiplyScalar(O),H.groundColor.copy(C.groundColor).multiplyScalar(O),n.hemi[p]=H,p++}}Y>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=me.LTC_FLOAT_1,n.rectAreaLTC2=me.LTC_FLOAT_2):(n.rectAreaLTC1=me.LTC_HALF_1,n.rectAreaLTC2=me.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=d;const b=n.hash;(b.directionalLength!==h||b.pointLength!==S||b.spotLength!==m||b.rectAreaLength!==Y||b.hemiLength!==p||b.numDirectionalShadows!==v||b.numPointShadows!==x||b.numSpotShadows!==_||b.numSpotMaps!==E||b.numLightProbes!==U)&&(n.directional.length=h,n.spot.length=m,n.rectArea.length=Y,n.point.length=S,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=_+E-y,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=y,n.numLightProbes=U,b.directionalLength=h,b.pointLength=S,b.spotLength=m,b.rectAreaLength=Y,b.hemiLength=p,b.numDirectionalShadows=v,b.numPointShadows=x,b.numSpotShadows=_,b.numSpotMaps=E,b.numLightProbes=U,n.version=Rv++)}function l(c,u){let f=0,d=0,h=0,S=0,m=0;const Y=u.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){const x=c[p];if(x.isDirectionalLight){const _=n.directional[f];_.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(Y),f++}else if(x.isSpotLight){const _=n.spot[h];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(Y),_.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(Y),h++}else if(x.isRectAreaLight){const _=n.rectArea[S];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(Y),a.identity(),s.copy(x.matrixWorld),s.premultiply(Y),a.extractRotation(s),_.halfWidth.set(x.width*.5,0,0),_.halfHeight.set(0,x.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),S++}else if(x.isPointLight){const _=n.point[d];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(Y),d++}else if(x.isHemisphereLight){const _=n.hemi[m];_.direction.setFromMatrixPosition(x.matrixWorld),_.direction.transformDirection(Y),m++}}}return{setup:o,setupView:l,state:n}}function $d(i){const e=new wv(i),t=[],n=[];function r(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Lv(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new $d(i),e.set(r,[o])):s>=a.length?(o=new $d(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Dv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Nv=`uniform sampler2D shadow_pass;
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
}`;function Ov(i,e,t){let n=new xm;const r=new Mt,s=new Mt,a=new Gt,o=new hg({depthPacking:uT}),l=new dg,c={},u=t.maxTextureSize,f={[xr]:vn,[vn]:xr,[Hi]:Hi},d=new tr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:Dv,fragmentShader:Nv}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const S=new nr;S.setAttribute("position",new Si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Ai(S,d),Y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=em;let p=this.type;this.render=function(y,U,b){if(Y.enabled===!1||Y.autoUpdate===!1&&Y.needsUpdate===!1||y.length===0)return;const g=i.getRenderTarget(),T=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),R=i.state;R.setBlending(Tr),R.buffers.depth.getReversed()===!0?R.buffers.color.setClear(0,0,0,0):R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);const O=p!==Ni&&this.type===Ni,Z=p===Ni&&this.type!==Ni;for(let B=0,H=y.length;B<H;B++){const G=y[B],N=G.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const ne=N.getFrameExtents();if(r.multiply(ne),s.copy(N.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ne.x),r.x=s.x*ne.x,N.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ne.y),r.y=s.y*ne.y,N.mapSize.y=s.y)),N.map===null||O===!0||Z===!0){const fe=this.type!==Ni?{minFilter:mi,magFilter:mi}:{};N.map!==null&&N.map.dispose(),N.map=new ls(r.x,r.y,fe),N.map.texture.name=G.name+".shadowMap",N.camera.updateProjectionMatrix()}i.setRenderTarget(N.map),i.clear();const P=N.getViewportCount();for(let fe=0;fe<P;fe++){const Le=N.getViewport(fe);a.set(s.x*Le.x,s.y*Le.y,s.x*Le.z,s.y*Le.w),R.viewport(a),N.updateMatrices(G,fe),n=N.getFrustum(),_(U,b,N.camera,G,this.type)}N.isPointLightShadow!==!0&&this.type===Ni&&v(N,b),N.needsUpdate=!1}p=this.type,Y.needsUpdate=!1,i.setRenderTarget(g,T,C)};function v(y,U){const b=e.update(m);d.defines.VSM_SAMPLES!==y.blurSamples&&(d.defines.VSM_SAMPLES=y.blurSamples,h.defines.VSM_SAMPLES=y.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new ls(r.x,r.y)),d.uniforms.shadow_pass.value=y.map.texture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,i.setRenderTarget(y.mapPass),i.clear(),i.renderBufferDirect(U,null,b,d,m,null),h.uniforms.shadow_pass.value=y.mapPass.texture,h.uniforms.resolution.value=y.mapSize,h.uniforms.radius.value=y.radius,i.setRenderTarget(y.map),i.clear(),i.renderBufferDirect(U,null,b,h,m,null)}function x(y,U,b,g){let T=null;const C=b.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(C!==void 0)T=C;else if(T=b.isPointLight===!0?l:o,i.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const R=T.uuid,O=U.uuid;let Z=c[R];Z===void 0&&(Z={},c[R]=Z);let B=Z[O];B===void 0&&(B=T.clone(),Z[O]=B,U.addEventListener("dispose",E)),T=B}if(T.visible=U.visible,T.wireframe=U.wireframe,g===Ni?T.side=U.shadowSide!==null?U.shadowSide:U.side:T.side=U.shadowSide!==null?U.shadowSide:f[U.side],T.alphaMap=U.alphaMap,T.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,T.map=U.map,T.clipShadows=U.clipShadows,T.clippingPlanes=U.clippingPlanes,T.clipIntersection=U.clipIntersection,T.displacementMap=U.displacementMap,T.displacementScale=U.displacementScale,T.displacementBias=U.displacementBias,T.wireframeLinewidth=U.wireframeLinewidth,T.linewidth=U.linewidth,b.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const R=i.properties.get(T);R.light=b}return T}function _(y,U,b,g,T){if(y.visible===!1)return;if(y.layers.test(U.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&T===Ni)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,y.matrixWorld);const O=e.update(y),Z=y.material;if(Array.isArray(Z)){const B=O.groups;for(let H=0,G=B.length;H<G;H++){const N=B[H],ne=Z[N.materialIndex];if(ne&&ne.visible){const P=x(y,ne,g,T);y.onBeforeShadow(i,y,U,b,O,P,N),i.renderBufferDirect(b,null,O,P,y,N),y.onAfterShadow(i,y,U,b,O,P,N)}}}else if(Z.visible){const B=x(y,Z,g,T);y.onBeforeShadow(i,y,U,b,O,B,null),i.renderBufferDirect(b,null,O,B,y,null),y.onAfterShadow(i,y,U,b,O,B,null)}}const R=y.children;for(let O=0,Z=R.length;O<Z;O++)_(R[O],U,b,g,T)}function E(y){y.target.removeEventListener("dispose",E);for(const b in c){const g=c[b],T=y.target.uuid;T in g&&(g[T].dispose(),delete g[T])}}}const Fv={[Uu]:vu,[xu]:Vu,[Eu]:Au,[na]:yu,[vu]:Uu,[Vu]:xu,[Au]:Eu,[yu]:na};function Gv(i,e){function t(){let X=!1;const ie=new Gt;let ae=null;const Ye=new Gt(0,0,0,0);return{setMask:function(te){ae!==te&&!X&&(i.colorMask(te,te,te,te),ae=te)},setLocked:function(te){X=te},setClear:function(te,j,We,De,ht){ht===!0&&(te*=De,j*=De,We*=De),ie.set(te,j,We,De),Ye.equals(ie)===!1&&(i.clearColor(te,j,We,De),Ye.copy(ie))},reset:function(){X=!1,ae=null,Ye.set(-1,0,0,0)}}}function n(){let X=!1,ie=!1,ae=null,Ye=null,te=null;return{setReversed:function(j){if(ie!==j){const We=e.get("EXT_clip_control");j?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT),ie=j;const De=te;te=null,this.setClear(De)}},getReversed:function(){return ie},setTest:function(j){j?q(i.DEPTH_TEST):de(i.DEPTH_TEST)},setMask:function(j){ae!==j&&!X&&(i.depthMask(j),ae=j)},setFunc:function(j){if(ie&&(j=Fv[j]),Ye!==j){switch(j){case Uu:i.depthFunc(i.NEVER);break;case vu:i.depthFunc(i.ALWAYS);break;case xu:i.depthFunc(i.LESS);break;case na:i.depthFunc(i.LEQUAL);break;case Eu:i.depthFunc(i.EQUAL);break;case yu:i.depthFunc(i.GEQUAL);break;case Vu:i.depthFunc(i.GREATER);break;case Au:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ye=j}},setLocked:function(j){X=j},setClear:function(j){te!==j&&(ie&&(j=1-j),i.clearDepth(j),te=j)},reset:function(){X=!1,ae=null,Ye=null,te=null,ie=!1}}}function r(){let X=!1,ie=null,ae=null,Ye=null,te=null,j=null,We=null,De=null,ht=null;return{setTest:function(Se){X||(Se?q(i.STENCIL_TEST):de(i.STENCIL_TEST))},setMask:function(Se){ie!==Se&&!X&&(i.stencilMask(Se),ie=Se)},setFunc:function(Se,be,$e){(ae!==Se||Ye!==be||te!==$e)&&(i.stencilFunc(Se,be,$e),ae=Se,Ye=be,te=$e)},setOp:function(Se,be,$e){(j!==Se||We!==be||De!==$e)&&(i.stencilOp(Se,be,$e),j=Se,We=be,De=$e)},setLocked:function(Se){X=Se},setClear:function(Se){ht!==Se&&(i.clearStencil(Se),ht=Se)},reset:function(){X=!1,ie=null,ae=null,Ye=null,te=null,j=null,We=null,De=null,ht=null}}}const s=new t,a=new n,o=new r,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,h=[],S=null,m=!1,Y=null,p=null,v=null,x=null,_=null,E=null,y=null,U=new gt(0,0,0),b=0,g=!1,T=null,C=null,R=null,O=null,Z=null;const B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,G=0;const N=i.getParameter(i.VERSION);N.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(N)[1]),H=G>=1):N.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),H=G>=2);let ne=null,P={};const fe=i.getParameter(i.SCISSOR_BOX),Le=i.getParameter(i.VIEWPORT),tt=new Gt().fromArray(fe),He=new Gt().fromArray(Le);function Ze(X,ie,ae,Ye){const te=new Uint8Array(4),j=i.createTexture();i.bindTexture(X,j),i.texParameteri(X,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(X,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let We=0;We<ae;We++)X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?i.texImage3D(ie,0,i.RGBA,1,1,Ye,0,i.RGBA,i.UNSIGNED_BYTE,te):i.texImage2D(ie+We,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,te);return j}const K={};K[i.TEXTURE_2D]=Ze(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=Ze(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=Ze(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=Ze(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),q(i.DEPTH_TEST),a.setFunc(na),Ae(!1),I(qh),q(i.CULL_FACE),ke(Tr);function q(X){u[X]!==!0&&(i.enable(X),u[X]=!0)}function de(X){u[X]!==!1&&(i.disable(X),u[X]=!1)}function Ve(X,ie){return f[X]!==ie?(i.bindFramebuffer(X,ie),f[X]=ie,X===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=ie),X===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=ie),!0):!1}function ve(X,ie){let ae=h,Ye=!1;if(X){ae=d.get(ie),ae===void 0&&(ae=[],d.set(ie,ae));const te=X.textures;if(ae.length!==te.length||ae[0]!==i.COLOR_ATTACHMENT0){for(let j=0,We=te.length;j<We;j++)ae[j]=i.COLOR_ATTACHMENT0+j;ae.length=te.length,Ye=!0}}else ae[0]!==i.BACK&&(ae[0]=i.BACK,Ye=!0);Ye&&i.drawBuffers(ae)}function Fe(X){return S!==X?(i.useProgram(X),S=X,!0):!1}const ft={[Gr]:i.FUNC_ADD,[L_]:i.FUNC_SUBTRACT,[D_]:i.FUNC_REVERSE_SUBTRACT};ft[N_]=i.MIN,ft[O_]=i.MAX;const A={[F_]:i.ZERO,[G_]:i.ONE,[B_]:i.SRC_COLOR,[Wu]:i.SRC_ALPHA,[K_]:i.SRC_ALPHA_SATURATE,[z_]:i.DST_COLOR,[H_]:i.DST_ALPHA,[Z_]:i.ONE_MINUS_SRC_COLOR,[Mu]:i.ONE_MINUS_SRC_ALPHA,[$_]:i.ONE_MINUS_DST_COLOR,[k_]:i.ONE_MINUS_DST_ALPHA,[Q_]:i.CONSTANT_COLOR,[J_]:i.ONE_MINUS_CONSTANT_COLOR,[q_]:i.CONSTANT_ALPHA,[j_]:i.ONE_MINUS_CONSTANT_ALPHA};function ke(X,ie,ae,Ye,te,j,We,De,ht,Se){if(X===Tr){m===!0&&(de(i.BLEND),m=!1);return}if(m===!1&&(q(i.BLEND),m=!0),X!==w_){if(X!==Y||Se!==g){if((p!==Gr||_!==Gr)&&(i.blendEquation(i.FUNC_ADD),p=Gr,_=Gr),Se)switch(X){case zs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gu:i.blendFunc(i.ONE,i.ONE);break;case jh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ed:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case zs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gu:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case jh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ed:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}v=null,x=null,E=null,y=null,U.set(0,0,0),b=0,Y=X,g=Se}return}te=te||ie,j=j||ae,We=We||Ye,(ie!==p||te!==_)&&(i.blendEquationSeparate(ft[ie],ft[te]),p=ie,_=te),(ae!==v||Ye!==x||j!==E||We!==y)&&(i.blendFuncSeparate(A[ae],A[Ye],A[j],A[We]),v=ae,x=Ye,E=j,y=We),(De.equals(U)===!1||ht!==b)&&(i.blendColor(De.r,De.g,De.b,ht),U.copy(De),b=ht),Y=X,g=!1}function Ce(X,ie){X.side===Hi?de(i.CULL_FACE):q(i.CULL_FACE);let ae=X.side===vn;ie&&(ae=!ae),Ae(ae),X.blending===zs&&X.transparent===!1?ke(Tr):ke(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),a.setFunc(X.depthFunc),a.setTest(X.depthTest),a.setMask(X.depthWrite),s.setMask(X.colorWrite);const Ye=X.stencilWrite;o.setTest(Ye),Ye&&(o.setMask(X.stencilWriteMask),o.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),o.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),_e(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?q(i.SAMPLE_ALPHA_TO_COVERAGE):de(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(X){T!==X&&(X?i.frontFace(i.CW):i.frontFace(i.CCW),T=X)}function I(X){X!==C_?(q(i.CULL_FACE),X!==C&&(X===qh?i.cullFace(i.BACK):X===R_?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):de(i.CULL_FACE),C=X}function nt(X){X!==R&&(H&&i.lineWidth(X),R=X)}function _e(X,ie,ae){X?(q(i.POLYGON_OFFSET_FILL),(O!==ie||Z!==ae)&&(i.polygonOffset(ie,ae),O=ie,Z=ae)):de(i.POLYGON_OFFSET_FILL)}function Ge(X){X?q(i.SCISSOR_TEST):de(i.SCISSOR_TEST)}function Ke(X){X===void 0&&(X=i.TEXTURE0+B-1),ne!==X&&(i.activeTexture(X),ne=X)}function Yt(X,ie,ae){ae===void 0&&(ne===null?ae=i.TEXTURE0+B-1:ae=ne);let Ye=P[ae];Ye===void 0&&(Ye={type:void 0,texture:void 0},P[ae]=Ye),(Ye.type!==X||Ye.texture!==ie)&&(ne!==ae&&(i.activeTexture(ae),ne=ae),i.bindTexture(X,ie||K[X]),Ye.type=X,Ye.texture=ie)}function V(){const X=P[ne];X!==void 0&&X.type!==void 0&&(i.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function W(){try{i.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function D(){try{i.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Q(){try{i.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function J(){try{i.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function $(){try{i.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Te(){try{i.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function se(){try{i.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function xe(){try{i.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function he(){try{i.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function re(){try{i.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ue(X){tt.equals(X)===!1&&(i.scissor(X.x,X.y,X.z,X.w),tt.copy(X))}function Ie(X){He.equals(X)===!1&&(i.viewport(X.x,X.y,X.z,X.w),He.copy(X))}function Ee(X,ie){let ae=c.get(ie);ae===void 0&&(ae=new WeakMap,c.set(ie,ae));let Ye=ae.get(X);Ye===void 0&&(Ye=i.getUniformBlockIndex(ie,X.name),ae.set(X,Ye))}function ce(X,ie){const Ye=c.get(ie).get(X);l.get(ie)!==Ye&&(i.uniformBlockBinding(ie,Ye,X.__bindingPointIndex),l.set(ie,Ye))}function Be(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ne=null,P={},f={},d=new WeakMap,h=[],S=null,m=!1,Y=null,p=null,v=null,x=null,_=null,E=null,y=null,U=new gt(0,0,0),b=0,g=!1,T=null,C=null,R=null,O=null,Z=null,tt.set(0,0,i.canvas.width,i.canvas.height),He.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:q,disable:de,bindFramebuffer:Ve,drawBuffers:ve,useProgram:Fe,setBlending:ke,setMaterial:Ce,setFlipSided:Ae,setCullFace:I,setLineWidth:nt,setPolygonOffset:_e,setScissorTest:Ge,activeTexture:Ke,bindTexture:Yt,unbindTexture:V,compressedTexImage2D:W,compressedTexImage3D:D,texImage2D:he,texImage3D:re,updateUBOMapping:Ee,uniformBlockBinding:ce,texStorage2D:se,texStorage3D:xe,texSubImage2D:Q,texSubImage3D:J,compressedTexSubImage2D:$,compressedTexSubImage3D:Te,scissor:ue,viewport:Ie,reset:Be}}function Bv(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Mt,u=new WeakMap;let f;const d=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(V,W){return h?new OffscreenCanvas(V,W):Gl("canvas")}function m(V,W,D){let Q=1;const J=Yt(V);if((J.width>D||J.height>D)&&(Q=D/Math.max(J.width,J.height)),Q<1)if(typeof HTMLImageElement<"u"&&V instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&V instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&V instanceof ImageBitmap||typeof VideoFrame<"u"&&V instanceof VideoFrame){const $=Math.floor(Q*J.width),Te=Math.floor(Q*J.height);f===void 0&&(f=S($,Te));const se=W?S($,Te):f;return se.width=$,se.height=Te,se.getContext("2d").drawImage(V,0,0,$,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+$+"x"+Te+")."),se}else return"data"in V&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),V;return V}function Y(V){return V.generateMipmaps}function p(V){i.generateMipmap(V)}function v(V){return V.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:V.isWebGL3DRenderTarget?i.TEXTURE_3D:V.isWebGLArrayRenderTarget||V.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(V,W,D,Q,J=!1){if(V!==null){if(i[V]!==void 0)return i[V];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+V+"'")}let $=W;if(W===i.RED&&(D===i.FLOAT&&($=i.R32F),D===i.HALF_FLOAT&&($=i.R16F),D===i.UNSIGNED_BYTE&&($=i.R8)),W===i.RED_INTEGER&&(D===i.UNSIGNED_BYTE&&($=i.R8UI),D===i.UNSIGNED_SHORT&&($=i.R16UI),D===i.UNSIGNED_INT&&($=i.R32UI),D===i.BYTE&&($=i.R8I),D===i.SHORT&&($=i.R16I),D===i.INT&&($=i.R32I)),W===i.RG&&(D===i.FLOAT&&($=i.RG32F),D===i.HALF_FLOAT&&($=i.RG16F),D===i.UNSIGNED_BYTE&&($=i.RG8)),W===i.RG_INTEGER&&(D===i.UNSIGNED_BYTE&&($=i.RG8UI),D===i.UNSIGNED_SHORT&&($=i.RG16UI),D===i.UNSIGNED_INT&&($=i.RG32UI),D===i.BYTE&&($=i.RG8I),D===i.SHORT&&($=i.RG16I),D===i.INT&&($=i.RG32I)),W===i.RGB_INTEGER&&(D===i.UNSIGNED_BYTE&&($=i.RGB8UI),D===i.UNSIGNED_SHORT&&($=i.RGB16UI),D===i.UNSIGNED_INT&&($=i.RGB32UI),D===i.BYTE&&($=i.RGB8I),D===i.SHORT&&($=i.RGB16I),D===i.INT&&($=i.RGB32I)),W===i.RGBA_INTEGER&&(D===i.UNSIGNED_BYTE&&($=i.RGBA8UI),D===i.UNSIGNED_SHORT&&($=i.RGBA16UI),D===i.UNSIGNED_INT&&($=i.RGBA32UI),D===i.BYTE&&($=i.RGBA8I),D===i.SHORT&&($=i.RGBA16I),D===i.INT&&($=i.RGBA32I)),W===i.RGB&&(D===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),D===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),W===i.RGBA){const Te=J?Ol:pt.getTransfer(Q);D===i.FLOAT&&($=i.RGBA32F),D===i.HALF_FLOAT&&($=i.RGBA16F),D===i.UNSIGNED_BYTE&&($=Te===Wt?i.SRGB8_ALPHA8:i.RGBA8),D===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),D===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function _(V,W){let D;return V?W===null||W===os||W===ao?D=i.DEPTH24_STENCIL8:W===$i?D=i.DEPTH32F_STENCIL8:W===so&&(D=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):W===null||W===os||W===ao?D=i.DEPTH_COMPONENT24:W===$i?D=i.DEPTH_COMPONENT32F:W===so&&(D=i.DEPTH_COMPONENT16),D}function E(V,W){return Y(V)===!0||V.isFramebufferTexture&&V.minFilter!==mi&&V.minFilter!==yi?Math.log2(Math.max(W.width,W.height))+1:V.mipmaps!==void 0&&V.mipmaps.length>0?V.mipmaps.length:V.isCompressedTexture&&Array.isArray(V.image)?W.mipmaps.length:1}function y(V){const W=V.target;W.removeEventListener("dispose",y),b(W),W.isVideoTexture&&u.delete(W)}function U(V){const W=V.target;W.removeEventListener("dispose",U),T(W)}function b(V){const W=n.get(V);if(W.__webglInit===void 0)return;const D=V.source,Q=d.get(D);if(Q){const J=Q[W.__cacheKey];J.usedTimes--,J.usedTimes===0&&g(V),Object.keys(Q).length===0&&d.delete(D)}n.remove(V)}function g(V){const W=n.get(V);i.deleteTexture(W.__webglTexture);const D=V.source,Q=d.get(D);delete Q[W.__cacheKey],a.memory.textures--}function T(V){const W=n.get(V);if(V.depthTexture&&(V.depthTexture.dispose(),n.remove(V.depthTexture)),V.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(W.__webglFramebuffer[Q]))for(let J=0;J<W.__webglFramebuffer[Q].length;J++)i.deleteFramebuffer(W.__webglFramebuffer[Q][J]);else i.deleteFramebuffer(W.__webglFramebuffer[Q]);W.__webglDepthbuffer&&i.deleteRenderbuffer(W.__webglDepthbuffer[Q])}else{if(Array.isArray(W.__webglFramebuffer))for(let Q=0;Q<W.__webglFramebuffer.length;Q++)i.deleteFramebuffer(W.__webglFramebuffer[Q]);else i.deleteFramebuffer(W.__webglFramebuffer);if(W.__webglDepthbuffer&&i.deleteRenderbuffer(W.__webglDepthbuffer),W.__webglMultisampledFramebuffer&&i.deleteFramebuffer(W.__webglMultisampledFramebuffer),W.__webglColorRenderbuffer)for(let Q=0;Q<W.__webglColorRenderbuffer.length;Q++)W.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(W.__webglColorRenderbuffer[Q]);W.__webglDepthRenderbuffer&&i.deleteRenderbuffer(W.__webglDepthRenderbuffer)}const D=V.textures;for(let Q=0,J=D.length;Q<J;Q++){const $=n.get(D[Q]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),a.memory.textures--),n.remove(D[Q])}n.remove(V)}let C=0;function R(){C=0}function O(){const V=C;return V>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+V+" texture units while this GPU supports only "+r.maxTextures),C+=1,V}function Z(V){const W=[];return W.push(V.wrapS),W.push(V.wrapT),W.push(V.wrapR||0),W.push(V.magFilter),W.push(V.minFilter),W.push(V.anisotropy),W.push(V.internalFormat),W.push(V.format),W.push(V.type),W.push(V.generateMipmaps),W.push(V.premultiplyAlpha),W.push(V.flipY),W.push(V.unpackAlignment),W.push(V.colorSpace),W.join()}function B(V,W){const D=n.get(V);if(V.isVideoTexture&&Ge(V),V.isRenderTargetTexture===!1&&V.isExternalTexture!==!0&&V.version>0&&D.__version!==V.version){const Q=V.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(D,V,W);return}}else V.isExternalTexture&&(D.__webglTexture=V.sourceTexture?V.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,D.__webglTexture,i.TEXTURE0+W)}function H(V,W){const D=n.get(V);if(V.isRenderTargetTexture===!1&&V.version>0&&D.__version!==V.version){K(D,V,W);return}t.bindTexture(i.TEXTURE_2D_ARRAY,D.__webglTexture,i.TEXTURE0+W)}function G(V,W){const D=n.get(V);if(V.isRenderTargetTexture===!1&&V.version>0&&D.__version!==V.version){K(D,V,W);return}t.bindTexture(i.TEXTURE_3D,D.__webglTexture,i.TEXTURE0+W)}function N(V,W){const D=n.get(V);if(V.version>0&&D.__version!==V.version){q(D,V,W);return}t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+W)}const ne={[Xu]:i.REPEAT,[zr]:i.CLAMP_TO_EDGE,[Cu]:i.MIRRORED_REPEAT},P={[mi]:i.NEAREST,[lT]:i.NEAREST_MIPMAP_NEAREST,[Do]:i.NEAREST_MIPMAP_LINEAR,[yi]:i.LINEAR,[Sc]:i.LINEAR_MIPMAP_NEAREST,[$r]:i.LINEAR_MIPMAP_LINEAR},fe={[dT]:i.NEVER,[TT]:i.ALWAYS,[pT]:i.LESS,[hm]:i.LEQUAL,[YT]:i.EQUAL,[_T]:i.GEQUAL,[mT]:i.GREATER,[ST]:i.NOTEQUAL};function Le(V,W){if(W.type===$i&&e.has("OES_texture_float_linear")===!1&&(W.magFilter===yi||W.magFilter===Sc||W.magFilter===Do||W.magFilter===$r||W.minFilter===yi||W.minFilter===Sc||W.minFilter===Do||W.minFilter===$r)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(V,i.TEXTURE_WRAP_S,ne[W.wrapS]),i.texParameteri(V,i.TEXTURE_WRAP_T,ne[W.wrapT]),(V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY)&&i.texParameteri(V,i.TEXTURE_WRAP_R,ne[W.wrapR]),i.texParameteri(V,i.TEXTURE_MAG_FILTER,P[W.magFilter]),i.texParameteri(V,i.TEXTURE_MIN_FILTER,P[W.minFilter]),W.compareFunction&&(i.texParameteri(V,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(V,i.TEXTURE_COMPARE_FUNC,fe[W.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(W.magFilter===mi||W.minFilter!==Do&&W.minFilter!==$r||W.type===$i&&e.has("OES_texture_float_linear")===!1)return;if(W.anisotropy>1||n.get(W).__currentAnisotropy){const D=e.get("EXT_texture_filter_anisotropic");i.texParameterf(V,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(W.anisotropy,r.getMaxAnisotropy())),n.get(W).__currentAnisotropy=W.anisotropy}}}function tt(V,W){let D=!1;V.__webglInit===void 0&&(V.__webglInit=!0,W.addEventListener("dispose",y));const Q=W.source;let J=d.get(Q);J===void 0&&(J={},d.set(Q,J));const $=Z(W);if($!==V.__cacheKey){J[$]===void 0&&(J[$]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,D=!0),J[$].usedTimes++;const Te=J[V.__cacheKey];Te!==void 0&&(J[V.__cacheKey].usedTimes--,Te.usedTimes===0&&g(W)),V.__cacheKey=$,V.__webglTexture=J[$].texture}return D}function He(V,W,D){return Math.floor(Math.floor(V/D)/W)}function Ze(V,W,D,Q){const $=V.updateRanges;if($.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,W.width,W.height,D,Q,W.data);else{$.sort((re,ue)=>re.start-ue.start);let Te=0;for(let re=1;re<$.length;re++){const ue=$[Te],Ie=$[re],Ee=ue.start+ue.count,ce=He(Ie.start,W.width,4),Be=He(ue.start,W.width,4);Ie.start<=Ee+1&&ce===Be&&He(Ie.start+Ie.count-1,W.width,4)===ce?ue.count=Math.max(ue.count,Ie.start+Ie.count-ue.start):(++Te,$[Te]=Ie)}$.length=Te+1;const se=i.getParameter(i.UNPACK_ROW_LENGTH),xe=i.getParameter(i.UNPACK_SKIP_PIXELS),he=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,W.width);for(let re=0,ue=$.length;re<ue;re++){const Ie=$[re],Ee=Math.floor(Ie.start/4),ce=Math.ceil(Ie.count/4),Be=Ee%W.width,X=Math.floor(Ee/W.width),ie=ce,ae=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Be),i.pixelStorei(i.UNPACK_SKIP_ROWS,X),t.texSubImage2D(i.TEXTURE_2D,0,Be,X,ie,ae,D,Q,W.data)}V.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,se),i.pixelStorei(i.UNPACK_SKIP_PIXELS,xe),i.pixelStorei(i.UNPACK_SKIP_ROWS,he)}}function K(V,W,D){let Q=i.TEXTURE_2D;(W.isDataArrayTexture||W.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),W.isData3DTexture&&(Q=i.TEXTURE_3D);const J=tt(V,W),$=W.source;t.bindTexture(Q,V.__webglTexture,i.TEXTURE0+D);const Te=n.get($);if($.version!==Te.__version||J===!0){t.activeTexture(i.TEXTURE0+D);const se=pt.getPrimaries(pt.workingColorSpace),xe=W.colorSpace===ur?null:pt.getPrimaries(W.colorSpace),he=W.colorSpace===ur||se===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,W.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,W.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);let re=m(W.image,!1,r.maxTextureSize);re=Ke(W,re);const ue=s.convert(W.format,W.colorSpace),Ie=s.convert(W.type);let Ee=x(W.internalFormat,ue,Ie,W.colorSpace,W.isVideoTexture);Le(Q,W);let ce;const Be=W.mipmaps,X=W.isVideoTexture!==!0,ie=Te.__version===void 0||J===!0,ae=$.dataReady,Ye=E(W,re);if(W.isDepthTexture)Ee=_(W.format===lo,W.type),ie&&(X?t.texStorage2D(i.TEXTURE_2D,1,Ee,re.width,re.height):t.texImage2D(i.TEXTURE_2D,0,Ee,re.width,re.height,0,ue,Ie,null));else if(W.isDataTexture)if(Be.length>0){X&&ie&&t.texStorage2D(i.TEXTURE_2D,Ye,Ee,Be[0].width,Be[0].height);for(let te=0,j=Be.length;te<j;te++)ce=Be[te],X?ae&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,ce.width,ce.height,ue,Ie,ce.data):t.texImage2D(i.TEXTURE_2D,te,Ee,ce.width,ce.height,0,ue,Ie,ce.data);W.generateMipmaps=!1}else X?(ie&&t.texStorage2D(i.TEXTURE_2D,Ye,Ee,re.width,re.height),ae&&Ze(W,re,ue,Ie)):t.texImage2D(i.TEXTURE_2D,0,Ee,re.width,re.height,0,ue,Ie,re.data);else if(W.isCompressedTexture)if(W.isCompressedArrayTexture){X&&ie&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ye,Ee,Be[0].width,Be[0].height,re.depth);for(let te=0,j=Be.length;te<j;te++)if(ce=Be[te],W.format!==Yi)if(ue!==null)if(X){if(ae)if(W.layerUpdates.size>0){const We=vd(ce.width,ce.height,W.format,W.type);for(const De of W.layerUpdates){const ht=ce.data.subarray(De*We/ce.data.BYTES_PER_ELEMENT,(De+1)*We/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,De,ce.width,ce.height,1,ue,ht)}W.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,ce.width,ce.height,re.depth,ue,ce.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,te,Ee,ce.width,ce.height,re.depth,0,ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?ae&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,ce.width,ce.height,re.depth,ue,Ie,ce.data):t.texImage3D(i.TEXTURE_2D_ARRAY,te,Ee,ce.width,ce.height,re.depth,0,ue,Ie,ce.data)}else{X&&ie&&t.texStorage2D(i.TEXTURE_2D,Ye,Ee,Be[0].width,Be[0].height);for(let te=0,j=Be.length;te<j;te++)ce=Be[te],W.format!==Yi?ue!==null?X?ae&&t.compressedTexSubImage2D(i.TEXTURE_2D,te,0,0,ce.width,ce.height,ue,ce.data):t.compressedTexImage2D(i.TEXTURE_2D,te,Ee,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?ae&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,ce.width,ce.height,ue,Ie,ce.data):t.texImage2D(i.TEXTURE_2D,te,Ee,ce.width,ce.height,0,ue,Ie,ce.data)}else if(W.isDataArrayTexture)if(X){if(ie&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ye,Ee,re.width,re.height,re.depth),ae)if(W.layerUpdates.size>0){const te=vd(re.width,re.height,W.format,W.type);for(const j of W.layerUpdates){const We=re.data.subarray(j*te/re.data.BYTES_PER_ELEMENT,(j+1)*te/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,j,re.width,re.height,1,ue,Ie,We)}W.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,ue,Ie,re.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ee,re.width,re.height,re.depth,0,ue,Ie,re.data);else if(W.isData3DTexture)X?(ie&&t.texStorage3D(i.TEXTURE_3D,Ye,Ee,re.width,re.height,re.depth),ae&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,ue,Ie,re.data)):t.texImage3D(i.TEXTURE_3D,0,Ee,re.width,re.height,re.depth,0,ue,Ie,re.data);else if(W.isFramebufferTexture){if(ie)if(X)t.texStorage2D(i.TEXTURE_2D,Ye,Ee,re.width,re.height);else{let te=re.width,j=re.height;for(let We=0;We<Ye;We++)t.texImage2D(i.TEXTURE_2D,We,Ee,te,j,0,ue,Ie,null),te>>=1,j>>=1}}else if(Be.length>0){if(X&&ie){const te=Yt(Be[0]);t.texStorage2D(i.TEXTURE_2D,Ye,Ee,te.width,te.height)}for(let te=0,j=Be.length;te<j;te++)ce=Be[te],X?ae&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,ue,Ie,ce):t.texImage2D(i.TEXTURE_2D,te,Ee,ue,Ie,ce);W.generateMipmaps=!1}else if(X){if(ie){const te=Yt(re);t.texStorage2D(i.TEXTURE_2D,Ye,Ee,te.width,te.height)}ae&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue,Ie,re)}else t.texImage2D(i.TEXTURE_2D,0,Ee,ue,Ie,re);Y(W)&&p(Q),Te.__version=$.version,W.onUpdate&&W.onUpdate(W)}V.__version=W.version}function q(V,W,D){if(W.image.length!==6)return;const Q=tt(V,W),J=W.source;t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+D);const $=n.get(J);if(J.version!==$.__version||Q===!0){t.activeTexture(i.TEXTURE0+D);const Te=pt.getPrimaries(pt.workingColorSpace),se=W.colorSpace===ur?null:pt.getPrimaries(W.colorSpace),xe=W.colorSpace===ur||Te===se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,W.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,W.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const he=W.isCompressedTexture||W.image[0].isCompressedTexture,re=W.image[0]&&W.image[0].isDataTexture,ue=[];for(let j=0;j<6;j++)!he&&!re?ue[j]=m(W.image[j],!0,r.maxCubemapSize):ue[j]=re?W.image[j].image:W.image[j],ue[j]=Ke(W,ue[j]);const Ie=ue[0],Ee=s.convert(W.format,W.colorSpace),ce=s.convert(W.type),Be=x(W.internalFormat,Ee,ce,W.colorSpace),X=W.isVideoTexture!==!0,ie=$.__version===void 0||Q===!0,ae=J.dataReady;let Ye=E(W,Ie);Le(i.TEXTURE_CUBE_MAP,W);let te;if(he){X&&ie&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ye,Be,Ie.width,Ie.height);for(let j=0;j<6;j++){te=ue[j].mipmaps;for(let We=0;We<te.length;We++){const De=te[We];W.format!==Yi?Ee!==null?X?ae&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,We,0,0,De.width,De.height,Ee,De.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,We,Be,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,We,0,0,De.width,De.height,Ee,ce,De.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,We,Be,De.width,De.height,0,Ee,ce,De.data)}}}else{if(te=W.mipmaps,X&&ie){te.length>0&&Ye++;const j=Yt(ue[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ye,Be,j.width,j.height)}for(let j=0;j<6;j++)if(re){X?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ue[j].width,ue[j].height,Ee,ce,ue[j].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Be,ue[j].width,ue[j].height,0,Ee,ce,ue[j].data);for(let We=0;We<te.length;We++){const ht=te[We].image[j].image;X?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,We+1,0,0,ht.width,ht.height,Ee,ce,ht.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,We+1,Be,ht.width,ht.height,0,Ee,ce,ht.data)}}else{X?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Ee,ce,ue[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Be,Ee,ce,ue[j]);for(let We=0;We<te.length;We++){const De=te[We];X?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,We+1,0,0,Ee,ce,De.image[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,We+1,Be,Ee,ce,De.image[j])}}}Y(W)&&p(i.TEXTURE_CUBE_MAP),$.__version=J.version,W.onUpdate&&W.onUpdate(W)}V.__version=W.version}function de(V,W,D,Q,J,$){const Te=s.convert(D.format,D.colorSpace),se=s.convert(D.type),xe=x(D.internalFormat,Te,se,D.colorSpace),he=n.get(W),re=n.get(D);if(re.__renderTarget=W,!he.__hasExternalTextures){const ue=Math.max(1,W.width>>$),Ie=Math.max(1,W.height>>$);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?t.texImage3D(J,$,xe,ue,Ie,W.depth,0,Te,se,null):t.texImage2D(J,$,xe,ue,Ie,0,Te,se,null)}t.bindFramebuffer(i.FRAMEBUFFER,V),_e(W)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,J,re.__webglTexture,0,nt(W)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,J,re.__webglTexture,$),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ve(V,W,D){if(i.bindRenderbuffer(i.RENDERBUFFER,V),W.depthBuffer){const Q=W.depthTexture,J=Q&&Q.isDepthTexture?Q.type:null,$=_(W.stencilBuffer,J),Te=W.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=nt(W);_e(W)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,se,$,W.width,W.height):D?i.renderbufferStorageMultisample(i.RENDERBUFFER,se,$,W.width,W.height):i.renderbufferStorage(i.RENDERBUFFER,$,W.width,W.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Te,i.RENDERBUFFER,V)}else{const Q=W.textures;for(let J=0;J<Q.length;J++){const $=Q[J],Te=s.convert($.format,$.colorSpace),se=s.convert($.type),xe=x($.internalFormat,Te,se,$.colorSpace),he=nt(W);D&&_e(W)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,he,xe,W.width,W.height):_e(W)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he,xe,W.width,W.height):i.renderbufferStorage(i.RENDERBUFFER,xe,W.width,W.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ve(V,W){if(W&&W.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,V),!(W.depthTexture&&W.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(W.depthTexture);Q.__renderTarget=W,(!Q.__webglTexture||W.depthTexture.image.width!==W.width||W.depthTexture.image.height!==W.height)&&(W.depthTexture.image.width=W.width,W.depthTexture.image.height=W.height,W.depthTexture.needsUpdate=!0),B(W.depthTexture,0);const J=Q.__webglTexture,$=nt(W);if(W.depthTexture.format===oo)_e(W)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(W.depthTexture.format===lo)_e(W)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Fe(V){const W=n.get(V),D=V.isWebGLCubeRenderTarget===!0;if(W.__boundDepthTexture!==V.depthTexture){const Q=V.depthTexture;if(W.__depthDisposeCallback&&W.__depthDisposeCallback(),Q){const J=()=>{delete W.__boundDepthTexture,delete W.__depthDisposeCallback,Q.removeEventListener("dispose",J)};Q.addEventListener("dispose",J),W.__depthDisposeCallback=J}W.__boundDepthTexture=Q}if(V.depthTexture&&!W.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");const Q=V.texture.mipmaps;Q&&Q.length>0?ve(W.__webglFramebuffer[0],V):ve(W.__webglFramebuffer,V)}else if(D){W.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(i.FRAMEBUFFER,W.__webglFramebuffer[Q]),W.__webglDepthbuffer[Q]===void 0)W.__webglDepthbuffer[Q]=i.createRenderbuffer(),Ve(W.__webglDepthbuffer[Q],V,!1);else{const J=V.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=W.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,$)}}else{const Q=V.texture.mipmaps;if(Q&&Q.length>0?t.bindFramebuffer(i.FRAMEBUFFER,W.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,W.__webglFramebuffer),W.__webglDepthbuffer===void 0)W.__webglDepthbuffer=i.createRenderbuffer(),Ve(W.__webglDepthbuffer,V,!1);else{const J=V.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=W.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,$)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ft(V,W,D){const Q=n.get(V);W!==void 0&&de(Q.__webglFramebuffer,V,V.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),D!==void 0&&Fe(V)}function A(V){const W=V.texture,D=n.get(V),Q=n.get(W);V.addEventListener("dispose",U);const J=V.textures,$=V.isWebGLCubeRenderTarget===!0,Te=J.length>1;if(Te||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=W.version,a.memory.textures++),$){D.__webglFramebuffer=[];for(let se=0;se<6;se++)if(W.mipmaps&&W.mipmaps.length>0){D.__webglFramebuffer[se]=[];for(let xe=0;xe<W.mipmaps.length;xe++)D.__webglFramebuffer[se][xe]=i.createFramebuffer()}else D.__webglFramebuffer[se]=i.createFramebuffer()}else{if(W.mipmaps&&W.mipmaps.length>0){D.__webglFramebuffer=[];for(let se=0;se<W.mipmaps.length;se++)D.__webglFramebuffer[se]=i.createFramebuffer()}else D.__webglFramebuffer=i.createFramebuffer();if(Te)for(let se=0,xe=J.length;se<xe;se++){const he=n.get(J[se]);he.__webglTexture===void 0&&(he.__webglTexture=i.createTexture(),a.memory.textures++)}if(V.samples>0&&_e(V)===!1){D.__webglMultisampledFramebuffer=i.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let se=0;se<J.length;se++){const xe=J[se];D.__webglColorRenderbuffer[se]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,D.__webglColorRenderbuffer[se]);const he=s.convert(xe.format,xe.colorSpace),re=s.convert(xe.type),ue=x(xe.internalFormat,he,re,xe.colorSpace,V.isXRRenderTarget===!0),Ie=nt(V);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie,ue,V.width,V.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.RENDERBUFFER,D.__webglColorRenderbuffer[se])}i.bindRenderbuffer(i.RENDERBUFFER,null),V.depthBuffer&&(D.__webglDepthRenderbuffer=i.createRenderbuffer(),Ve(D.__webglDepthRenderbuffer,V,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),Le(i.TEXTURE_CUBE_MAP,W);for(let se=0;se<6;se++)if(W.mipmaps&&W.mipmaps.length>0)for(let xe=0;xe<W.mipmaps.length;xe++)de(D.__webglFramebuffer[se][xe],V,W,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,xe);else de(D.__webglFramebuffer[se],V,W,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);Y(W)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let se=0,xe=J.length;se<xe;se++){const he=J[se],re=n.get(he);let ue=i.TEXTURE_2D;(V.isWebGL3DRenderTarget||V.isWebGLArrayRenderTarget)&&(ue=V.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ue,re.__webglTexture),Le(ue,he),de(D.__webglFramebuffer,V,he,i.COLOR_ATTACHMENT0+se,ue,0),Y(he)&&p(ue)}t.unbindTexture()}else{let se=i.TEXTURE_2D;if((V.isWebGL3DRenderTarget||V.isWebGLArrayRenderTarget)&&(se=V.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(se,Q.__webglTexture),Le(se,W),W.mipmaps&&W.mipmaps.length>0)for(let xe=0;xe<W.mipmaps.length;xe++)de(D.__webglFramebuffer[xe],V,W,i.COLOR_ATTACHMENT0,se,xe);else de(D.__webglFramebuffer,V,W,i.COLOR_ATTACHMENT0,se,0);Y(W)&&p(se),t.unbindTexture()}V.depthBuffer&&Fe(V)}function ke(V){const W=V.textures;for(let D=0,Q=W.length;D<Q;D++){const J=W[D];if(Y(J)){const $=v(V),Te=n.get(J).__webglTexture;t.bindTexture($,Te),p($),t.unbindTexture()}}}const Ce=[],Ae=[];function I(V){if(V.samples>0){if(_e(V)===!1){const W=V.textures,D=V.width,Q=V.height;let J=i.COLOR_BUFFER_BIT;const $=V.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Te=n.get(V),se=W.length>1;if(se)for(let he=0;he<W.length;he++)t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer);const xe=V.texture.mipmaps;xe&&xe.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let he=0;he<W.length;he++){if(V.resolveDepthBuffer&&(V.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),V.stencilBuffer&&V.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),se){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Te.__webglColorRenderbuffer[he]);const re=n.get(W[he]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,re,0)}i.blitFramebuffer(0,0,D,Q,0,0,D,Q,J,i.NEAREST),l===!0&&(Ce.length=0,Ae.length=0,Ce.push(i.COLOR_ATTACHMENT0+he),V.depthBuffer&&V.resolveDepthBuffer===!1&&(Ce.push($),Ae.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ae)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ce))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),se)for(let he=0;he<W.length;he++){t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,Te.__webglColorRenderbuffer[he]);const re=n.get(W[he]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,re,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(V.depthBuffer&&V.resolveDepthBuffer===!1&&l){const W=V.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[W])}}}function nt(V){return Math.min(r.maxSamples,V.samples)}function _e(V){const W=n.get(V);return V.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&W.__useRenderToTexture!==!1}function Ge(V){const W=a.render.frame;u.get(V)!==W&&(u.set(V,W),V.update())}function Ke(V,W){const D=V.colorSpace,Q=V.format,J=V.type;return V.isCompressedTexture===!0||V.isVideoTexture===!0||D!==sa&&D!==ur&&(pt.getTransfer(D)===Wt?(Q!==Yi||J!==ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),W}function Yt(V){return typeof HTMLImageElement<"u"&&V instanceof HTMLImageElement?(c.width=V.naturalWidth||V.width,c.height=V.naturalHeight||V.height):typeof VideoFrame<"u"&&V instanceof VideoFrame?(c.width=V.displayWidth,c.height=V.displayHeight):(c.width=V.width,c.height=V.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=R,this.setTexture2D=B,this.setTexture2DArray=H,this.setTexture3D=G,this.setTextureCube=N,this.rebindTextures=ft,this.setupRenderTarget=A,this.updateRenderTargetMipmap=ke,this.updateMultisampleRenderTarget=I,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=de,this.useMultisampledRTT=_e}function Zv(i,e){function t(n,r=ur){let s;const a=pt.getTransfer(r);if(n===ji)return i.UNSIGNED_BYTE;if(n===$f)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Kf)return i.UNSIGNED_SHORT_5_5_5_1;if(n===am)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===om)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===rm)return i.BYTE;if(n===sm)return i.SHORT;if(n===so)return i.UNSIGNED_SHORT;if(n===zf)return i.INT;if(n===os)return i.UNSIGNED_INT;if(n===$i)return i.FLOAT;if(n===So)return i.HALF_FLOAT;if(n===lm)return i.ALPHA;if(n===cm)return i.RGB;if(n===Yi)return i.RGBA;if(n===oo)return i.DEPTH_COMPONENT;if(n===lo)return i.DEPTH_STENCIL;if(n===um)return i.RED;if(n===Qf)return i.RED_INTEGER;if(n===fm)return i.RG;if(n===Jf)return i.RG_INTEGER;if(n===qf)return i.RGBA_INTEGER;if(n===Ul||n===vl||n===xl||n===El)if(a===Wt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ul)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===vl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===xl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===El)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ul)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===vl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===xl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===El)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ru||n===Iu||n===wu||n===Lu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ru)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Iu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===wu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Lu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Du||n===Nu||n===Ou)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Du||n===Nu)return a===Wt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ou)return a===Wt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Fu||n===Gu||n===Bu||n===Zu||n===Hu||n===ku||n===zu||n===$u||n===Ku||n===Qu||n===Ju||n===qu||n===ju||n===ef)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Fu)return a===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Gu)return a===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Bu)return a===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Zu)return a===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Hu)return a===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ku)return a===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===zu)return a===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===$u)return a===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ku)return a===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Qu)return a===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ju)return a===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===qu)return a===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ju)return a===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ef)return a===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===tf||n===nf||n===rf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===tf)return a===Wt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===nf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===rf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===sf||n===af||n===of||n===lf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===sf)return s.COMPRESSED_RED_RGTC1_EXT;if(n===af)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===of)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===lf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ao?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Hv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kv=`
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

}`;class zv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Vm(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new tr({vertexShader:Hv,fragmentShader:kv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ai(new Ql(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $v extends ca{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,d=null,h=null,S=null;const m=typeof XRWebGLBinding<"u",Y=new zv,p={},v=t.getContextAttributes();let x=null,_=null;const E=[],y=[],U=new Mt;let b=null;const g=new si;g.viewport=new Gt;const T=new si;T.viewport=new Gt;const C=[g,T],R=new Yg;let O=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let q=E[K];return q===void 0&&(q=new Dc,E[K]=q),q.getTargetRaySpace()},this.getControllerGrip=function(K){let q=E[K];return q===void 0&&(q=new Dc,E[K]=q),q.getGripSpace()},this.getHand=function(K){let q=E[K];return q===void 0&&(q=new Dc,E[K]=q),q.getHandSpace()};function B(K){const q=y.indexOf(K.inputSource);if(q===-1)return;const de=E[q];de!==void 0&&(de.update(K.inputSource,K.frame,c||a),de.dispatchEvent({type:K.type,data:K.inputSource}))}function H(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",G);for(let K=0;K<E.length;K++){const q=y[K];q!==null&&(y[K]=null,E[K].disconnect(q))}O=null,Z=null,Y.reset();for(const K in p)delete p[K];e.setRenderTarget(x),h=null,d=null,f=null,r=null,_=null,Ze.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f===null&&m&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return S},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(x=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",H),r.addEventListener("inputsourceschange",G),v.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(U),m&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,Ve=null,ve=null;v.depth&&(ve=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=v.stencil?lo:oo,Ve=v.stencil?ao:os);const Fe={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(Fe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new ls(d.textureWidth,d.textureHeight,{format:Yi,type:ji,depthTexture:new ym(d.textureWidth,d.textureHeight,Ve,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const de={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,de),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),_=new ls(h.framebufferWidth,h.framebufferHeight,{format:Yi,type:ji,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Ze.setContext(r),Ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return Y.getDepthTexture()};function G(K){for(let q=0;q<K.removed.length;q++){const de=K.removed[q],Ve=y.indexOf(de);Ve>=0&&(y[Ve]=null,E[Ve].disconnect(de))}for(let q=0;q<K.added.length;q++){const de=K.added[q];let Ve=y.indexOf(de);if(Ve===-1){for(let Fe=0;Fe<E.length;Fe++)if(Fe>=y.length){y.push(de),Ve=Fe;break}else if(y[Fe]===null){y[Fe]=de,Ve=Fe;break}if(Ve===-1)break}const ve=E[Ve];ve&&ve.connect(de)}}const N=new k,ne=new k;function P(K,q,de){N.setFromMatrixPosition(q.matrixWorld),ne.setFromMatrixPosition(de.matrixWorld);const Ve=N.distanceTo(ne),ve=q.projectionMatrix.elements,Fe=de.projectionMatrix.elements,ft=ve[14]/(ve[10]-1),A=ve[14]/(ve[10]+1),ke=(ve[9]+1)/ve[5],Ce=(ve[9]-1)/ve[5],Ae=(ve[8]-1)/ve[0],I=(Fe[8]+1)/Fe[0],nt=ft*Ae,_e=ft*I,Ge=Ve/(-Ae+I),Ke=Ge*-Ae;if(q.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Ke),K.translateZ(Ge),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),ve[10]===-1)K.projectionMatrix.copy(q.projectionMatrix),K.projectionMatrixInverse.copy(q.projectionMatrixInverse);else{const Yt=ft+Ge,V=A+Ge,W=nt-Ke,D=_e+(Ve-Ke),Q=ke*A/V*Yt,J=Ce*A/V*Yt;K.projectionMatrix.makePerspective(W,D,Q,J,Yt,V),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function fe(K,q){q===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(q.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let q=K.near,de=K.far;Y.texture!==null&&(Y.depthNear>0&&(q=Y.depthNear),Y.depthFar>0&&(de=Y.depthFar)),R.near=T.near=g.near=q,R.far=T.far=g.far=de,(O!==R.near||Z!==R.far)&&(r.updateRenderState({depthNear:R.near,depthFar:R.far}),O=R.near,Z=R.far),R.layers.mask=K.layers.mask|6,g.layers.mask=R.layers.mask&3,T.layers.mask=R.layers.mask&5;const Ve=K.parent,ve=R.cameras;fe(R,Ve);for(let Fe=0;Fe<ve.length;Fe++)fe(ve[Fe],Ve);ve.length===2?P(R,g,T):R.projectionMatrix.copy(g.projectionMatrix),Le(K,R,Ve)};function Le(K,q,de){de===null?K.matrix.copy(q.matrixWorld):(K.matrix.copy(de.matrixWorld),K.matrix.invert(),K.matrix.multiply(q.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(q.projectionMatrix),K.projectionMatrixInverse.copy(q.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=co*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=K)},this.hasDepthSensing=function(){return Y.texture!==null},this.getDepthSensingMesh=function(){return Y.getMesh(R)},this.getCameraTexture=function(K){return p[K]};let tt=null;function He(K,q){if(u=q.getViewerPose(c||a),S=q,u!==null){const de=u.views;h!==null&&(e.setRenderTargetFramebuffer(_,h.framebuffer),e.setRenderTarget(_));let Ve=!1;de.length!==R.cameras.length&&(R.cameras.length=0,Ve=!0);for(let A=0;A<de.length;A++){const ke=de[A];let Ce=null;if(h!==null)Ce=h.getViewport(ke);else{const I=f.getViewSubImage(d,ke);Ce=I.viewport,A===0&&(e.setRenderTargetTextures(_,I.colorTexture,I.depthStencilTexture),e.setRenderTarget(_))}let Ae=C[A];Ae===void 0&&(Ae=new si,Ae.layers.enable(A),Ae.viewport=new Gt,C[A]=Ae),Ae.matrix.fromArray(ke.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(ke.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),A===0&&(R.matrix.copy(Ae.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),Ve===!0&&R.cameras.push(Ae)}const ve=r.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&m){f=n.getBinding();const A=f.getDepthInformation(de[0]);A&&A.isValid&&A.texture&&Y.init(A,r.renderState)}if(ve&&ve.includes("camera-access")&&m){e.state.unbindTexture(),f=n.getBinding();for(let A=0;A<de.length;A++){const ke=de[A].camera;if(ke){let Ce=p[ke];Ce||(Ce=new Vm,p[ke]=Ce);const Ae=f.getCameraImage(ke);Ce.sourceTexture=Ae}}}}for(let de=0;de<E.length;de++){const Ve=y[de],ve=E[de];Ve!==null&&ve!==void 0&&ve.update(Ve,q,c||a)}tt&&tt(K,q),q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:q}),S=null}const Ze=new Am;Ze.setAnimationLoop(He),this.setAnimationLoop=function(K){tt=K},this.dispose=function(){}}}const wr=new er,Kv=new zt;function Qv(i,e){function t(Y,p){Y.matrixAutoUpdate===!0&&Y.updateMatrix(),p.value.copy(Y.matrix)}function n(Y,p){p.color.getRGB(Y.fogColor.value,Wm(i)),p.isFog?(Y.fogNear.value=p.near,Y.fogFar.value=p.far):p.isFogExp2&&(Y.fogDensity.value=p.density)}function r(Y,p,v,x,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(Y,p):p.isMeshToonMaterial?(s(Y,p),f(Y,p)):p.isMeshPhongMaterial?(s(Y,p),u(Y,p)):p.isMeshStandardMaterial?(s(Y,p),d(Y,p),p.isMeshPhysicalMaterial&&h(Y,p,_)):p.isMeshMatcapMaterial?(s(Y,p),S(Y,p)):p.isMeshDepthMaterial?s(Y,p):p.isMeshDistanceMaterial?(s(Y,p),m(Y,p)):p.isMeshNormalMaterial?s(Y,p):p.isLineBasicMaterial?(a(Y,p),p.isLineDashedMaterial&&o(Y,p)):p.isPointsMaterial?l(Y,p,v,x):p.isSpriteMaterial?c(Y,p):p.isShadowMaterial?(Y.color.value.copy(p.color),Y.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(Y,p){Y.opacity.value=p.opacity,p.color&&Y.diffuse.value.copy(p.color),p.emissive&&Y.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(Y.map.value=p.map,t(p.map,Y.mapTransform)),p.alphaMap&&(Y.alphaMap.value=p.alphaMap,t(p.alphaMap,Y.alphaMapTransform)),p.bumpMap&&(Y.bumpMap.value=p.bumpMap,t(p.bumpMap,Y.bumpMapTransform),Y.bumpScale.value=p.bumpScale,p.side===vn&&(Y.bumpScale.value*=-1)),p.normalMap&&(Y.normalMap.value=p.normalMap,t(p.normalMap,Y.normalMapTransform),Y.normalScale.value.copy(p.normalScale),p.side===vn&&Y.normalScale.value.negate()),p.displacementMap&&(Y.displacementMap.value=p.displacementMap,t(p.displacementMap,Y.displacementMapTransform),Y.displacementScale.value=p.displacementScale,Y.displacementBias.value=p.displacementBias),p.emissiveMap&&(Y.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,Y.emissiveMapTransform)),p.specularMap&&(Y.specularMap.value=p.specularMap,t(p.specularMap,Y.specularMapTransform)),p.alphaTest>0&&(Y.alphaTest.value=p.alphaTest);const v=e.get(p),x=v.envMap,_=v.envMapRotation;x&&(Y.envMap.value=x,wr.copy(_),wr.x*=-1,wr.y*=-1,wr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(wr.y*=-1,wr.z*=-1),Y.envMapRotation.value.setFromMatrix4(Kv.makeRotationFromEuler(wr)),Y.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,Y.reflectivity.value=p.reflectivity,Y.ior.value=p.ior,Y.refractionRatio.value=p.refractionRatio),p.lightMap&&(Y.lightMap.value=p.lightMap,Y.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,Y.lightMapTransform)),p.aoMap&&(Y.aoMap.value=p.aoMap,Y.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,Y.aoMapTransform))}function a(Y,p){Y.diffuse.value.copy(p.color),Y.opacity.value=p.opacity,p.map&&(Y.map.value=p.map,t(p.map,Y.mapTransform))}function o(Y,p){Y.dashSize.value=p.dashSize,Y.totalSize.value=p.dashSize+p.gapSize,Y.scale.value=p.scale}function l(Y,p,v,x){Y.diffuse.value.copy(p.color),Y.opacity.value=p.opacity,Y.size.value=p.size*v,Y.scale.value=x*.5,p.map&&(Y.map.value=p.map,t(p.map,Y.uvTransform)),p.alphaMap&&(Y.alphaMap.value=p.alphaMap,t(p.alphaMap,Y.alphaMapTransform)),p.alphaTest>0&&(Y.alphaTest.value=p.alphaTest)}function c(Y,p){Y.diffuse.value.copy(p.color),Y.opacity.value=p.opacity,Y.rotation.value=p.rotation,p.map&&(Y.map.value=p.map,t(p.map,Y.mapTransform)),p.alphaMap&&(Y.alphaMap.value=p.alphaMap,t(p.alphaMap,Y.alphaMapTransform)),p.alphaTest>0&&(Y.alphaTest.value=p.alphaTest)}function u(Y,p){Y.specular.value.copy(p.specular),Y.shininess.value=Math.max(p.shininess,1e-4)}function f(Y,p){p.gradientMap&&(Y.gradientMap.value=p.gradientMap)}function d(Y,p){Y.metalness.value=p.metalness,p.metalnessMap&&(Y.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,Y.metalnessMapTransform)),Y.roughness.value=p.roughness,p.roughnessMap&&(Y.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,Y.roughnessMapTransform)),p.envMap&&(Y.envMapIntensity.value=p.envMapIntensity)}function h(Y,p,v){Y.ior.value=p.ior,p.sheen>0&&(Y.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),Y.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(Y.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,Y.sheenColorMapTransform)),p.sheenRoughnessMap&&(Y.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,Y.sheenRoughnessMapTransform))),p.clearcoat>0&&(Y.clearcoat.value=p.clearcoat,Y.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(Y.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,Y.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(Y.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,Y.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(Y.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,Y.clearcoatNormalMapTransform),Y.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===vn&&Y.clearcoatNormalScale.value.negate())),p.dispersion>0&&(Y.dispersion.value=p.dispersion),p.iridescence>0&&(Y.iridescence.value=p.iridescence,Y.iridescenceIOR.value=p.iridescenceIOR,Y.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],Y.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(Y.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,Y.iridescenceMapTransform)),p.iridescenceThicknessMap&&(Y.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,Y.iridescenceThicknessMapTransform))),p.transmission>0&&(Y.transmission.value=p.transmission,Y.transmissionSamplerMap.value=v.texture,Y.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(Y.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,Y.transmissionMapTransform)),Y.thickness.value=p.thickness,p.thicknessMap&&(Y.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,Y.thicknessMapTransform)),Y.attenuationDistance.value=p.attenuationDistance,Y.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(Y.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(Y.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,Y.anisotropyMapTransform))),Y.specularIntensity.value=p.specularIntensity,Y.specularColor.value.copy(p.specularColor),p.specularColorMap&&(Y.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,Y.specularColorMapTransform)),p.specularIntensityMap&&(Y.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,Y.specularIntensityMapTransform))}function S(Y,p){p.matcap&&(Y.matcap.value=p.matcap)}function m(Y,p){const v=e.get(p).light;Y.referencePosition.value.setFromMatrixPosition(v.matrixWorld),Y.nearDistance.value=v.shadow.camera.near,Y.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Jv(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,x){const _=x.program;n.uniformBlockBinding(v,_)}function c(v,x){let _=r[v.id];_===void 0&&(S(v),_=u(v),r[v.id]=_,v.addEventListener("dispose",Y));const E=x.program;n.updateUBOMapping(v,E);const y=e.render.frame;s[v.id]!==y&&(d(v),s[v.id]=y)}function u(v){const x=f();v.__bindingPointIndex=x;const _=i.createBuffer(),E=v.__size,y=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,E,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,_),_}function f(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const x=r[v.id],_=v.uniforms,E=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let y=0,U=_.length;y<U;y++){const b=Array.isArray(_[y])?_[y]:[_[y]];for(let g=0,T=b.length;g<T;g++){const C=b[g];if(h(C,y,g,E)===!0){const R=C.__offset,O=Array.isArray(C.value)?C.value:[C.value];let Z=0;for(let B=0;B<O.length;B++){const H=O[B],G=m(H);typeof H=="number"||typeof H=="boolean"?(C.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,R+Z,C.__data)):H.isMatrix3?(C.__data[0]=H.elements[0],C.__data[1]=H.elements[1],C.__data[2]=H.elements[2],C.__data[3]=0,C.__data[4]=H.elements[3],C.__data[5]=H.elements[4],C.__data[6]=H.elements[5],C.__data[7]=0,C.__data[8]=H.elements[6],C.__data[9]=H.elements[7],C.__data[10]=H.elements[8],C.__data[11]=0):(H.toArray(C.__data,Z),Z+=G.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,R,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(v,x,_,E){const y=v.value,U=x+"_"+_;if(E[U]===void 0)return typeof y=="number"||typeof y=="boolean"?E[U]=y:E[U]=y.clone(),!0;{const b=E[U];if(typeof y=="number"||typeof y=="boolean"){if(b!==y)return E[U]=y,!0}else if(b.equals(y)===!1)return b.copy(y),!0}return!1}function S(v){const x=v.uniforms;let _=0;const E=16;for(let U=0,b=x.length;U<b;U++){const g=Array.isArray(x[U])?x[U]:[x[U]];for(let T=0,C=g.length;T<C;T++){const R=g[T],O=Array.isArray(R.value)?R.value:[R.value];for(let Z=0,B=O.length;Z<B;Z++){const H=O[Z],G=m(H),N=_%E,ne=N%G.boundary,P=N+ne;_+=ne,P!==0&&E-P<G.storage&&(_+=E-P),R.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=_,_+=G.storage}}}const y=_%E;return y>0&&(_+=E-y),v.__size=_,v.__cache={},this}function m(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function Y(v){const x=v.target;x.removeEventListener("dispose",Y);const _=a.indexOf(x.__bindingPointIndex);a.splice(_,1),i.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function p(){for(const v in r)i.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:l,update:c,dispose:p}}class qv{constructor(e={}){const{canvas:t=wT(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=a;const S=new Uint32Array(4),m=new Int32Array(4);let Y=null,p=null;const v=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=gr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const _=this;let E=!1;this._outputColorSpace=ni;let y=0,U=0,b=null,g=-1,T=null;const C=new Gt,R=new Gt;let O=null;const Z=new gt(0);let B=0,H=t.width,G=t.height,N=1,ne=null,P=null;const fe=new Gt(0,0,H,G),Le=new Gt(0,0,H,G);let tt=!1;const He=new xm;let Ze=!1,K=!1;const q=new zt,de=new k,Ve=new Gt,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Fe=!1;function ft(){return b===null?N:1}let A=n;function ke(M,w){return t.getContext(M,w)}try{const M={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${kf}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",Ye,!1),t.addEventListener("webglcontextcreationerror",te,!1),A===null){const w="webgl2";if(A=ke(w,M),A===null)throw ke(w)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Ce,Ae,I,nt,_e,Ge,Ke,Yt,V,W,D,Q,J,$,Te,se,xe,he,re,ue,Ie,Ee,ce,Be;function X(){Ce=new lU(A),Ce.init(),Ee=new Zv(A,Ce),Ae=new tU(A,Ce,e,Ee),I=new Gv(A,Ce),Ae.reversedDepthBuffer&&d&&I.buffers.depth.setReversed(!0),nt=new fU(A),_e=new Av,Ge=new Bv(A,Ce,I,_e,Ae,Ee,nt),Ke=new iU(_),Yt=new oU(_),V=new Sg(A),ce=new jM(A,V),W=new cU(A,V,nt,ce),D=new dU(A,W,V,nt),re=new hU(A,Ae,Ge),se=new nU(_e),Q=new Vv(_,Ke,Yt,Ce,Ae,ce,se),J=new Qv(_,_e),$=new Pv,Te=new Lv(Ce),he=new qM(_,Ke,Yt,I,D,h,l),xe=new Ov(_,D,Ae),Be=new Jv(A,nt,Ae,I),ue=new eU(A,Ce,nt),Ie=new uU(A,Ce,nt),nt.programs=Q.programs,_.capabilities=Ae,_.extensions=Ce,_.properties=_e,_.renderLists=$,_.shadowMap=xe,_.state=I,_.info=nt}X();const ie=new $v(_,A);this.xr=ie,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const M=Ce.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Ce.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(M){M!==void 0&&(N=M,this.setSize(H,G,!1))},this.getSize=function(M){return M.set(H,G)},this.setSize=function(M,w,F=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=M,G=w,t.width=Math.floor(M*N),t.height=Math.floor(w*N),F===!0&&(t.style.width=M+"px",t.style.height=w+"px"),this.setViewport(0,0,M,w)},this.getDrawingBufferSize=function(M){return M.set(H*N,G*N).floor()},this.setDrawingBufferSize=function(M,w,F){H=M,G=w,N=F,t.width=Math.floor(M*F),t.height=Math.floor(w*F),this.setViewport(0,0,M,w)},this.getCurrentViewport=function(M){return M.copy(C)},this.getViewport=function(M){return M.copy(fe)},this.setViewport=function(M,w,F,z){M.isVector4?fe.set(M.x,M.y,M.z,M.w):fe.set(M,w,F,z),I.viewport(C.copy(fe).multiplyScalar(N).round())},this.getScissor=function(M){return M.copy(Le)},this.setScissor=function(M,w,F,z){M.isVector4?Le.set(M.x,M.y,M.z,M.w):Le.set(M,w,F,z),I.scissor(R.copy(Le).multiplyScalar(N).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(M){I.setScissorTest(tt=M)},this.setOpaqueSort=function(M){ne=M},this.setTransparentSort=function(M){P=M},this.getClearColor=function(M){return M.copy(he.getClearColor())},this.setClearColor=function(){he.setClearColor(...arguments)},this.getClearAlpha=function(){return he.getClearAlpha()},this.setClearAlpha=function(){he.setClearAlpha(...arguments)},this.clear=function(M=!0,w=!0,F=!0){let z=0;if(M){let L=!1;if(b!==null){const ee=b.texture.format;L=ee===qf||ee===Jf||ee===Qf}if(L){const ee=b.texture.type,le=ee===ji||ee===os||ee===so||ee===ao||ee===$f||ee===Kf,Me=he.getClearColor(),ge=he.getClearAlpha(),we=Me.r,Xe=Me.g,Pe=Me.b;le?(S[0]=we,S[1]=Xe,S[2]=Pe,S[3]=ge,A.clearBufferuiv(A.COLOR,0,S)):(m[0]=we,m[1]=Xe,m[2]=Pe,m[3]=ge,A.clearBufferiv(A.COLOR,0,m))}else z|=A.COLOR_BUFFER_BIT}w&&(z|=A.DEPTH_BUFFER_BIT),F&&(z|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",Ye,!1),t.removeEventListener("webglcontextcreationerror",te,!1),he.dispose(),$.dispose(),Te.dispose(),_e.dispose(),Ke.dispose(),Yt.dispose(),D.dispose(),ce.dispose(),Be.dispose(),Q.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",$e),ie.removeEventListener("sessionend",pe),Ne.stop()};function ae(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function Ye(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const M=nt.autoReset,w=xe.enabled,F=xe.autoUpdate,z=xe.needsUpdate,L=xe.type;X(),nt.autoReset=M,xe.enabled=w,xe.autoUpdate=F,xe.needsUpdate=z,xe.type=L}function te(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function j(M){const w=M.target;w.removeEventListener("dispose",j),We(w)}function We(M){De(M),_e.remove(M)}function De(M){const w=_e.get(M).programs;w!==void 0&&(w.forEach(function(F){Q.releaseProgram(F)}),M.isShaderMaterial&&Q.releaseShaderCache(M))}this.renderBufferDirect=function(M,w,F,z,L,ee){w===null&&(w=ve);const le=L.isMesh&&L.matrixWorld.determinant()<0,Me=_t(M,w,F,z,L);I.setMaterial(z,le);let ge=F.index,we=1;if(z.wireframe===!0){if(ge=W.getWireframeAttribute(F),ge===void 0)return;we=2}const Xe=F.drawRange,Pe=F.attributes.position;let Qe=Xe.start*we,st=(Xe.start+Xe.count)*we;ee!==null&&(Qe=Math.max(Qe,ee.start*we),st=Math.min(st,(ee.start+ee.count)*we)),ge!==null?(Qe=Math.max(Qe,0),st=Math.min(st,ge.count)):Pe!=null&&(Qe=Math.max(Qe,0),st=Math.min(st,Pe.count));const Lt=st-Qe;if(Lt<0||Lt===1/0)return;ce.setup(L,z,Me,F,ge);let At,vt=ue;if(ge!==null&&(At=V.get(ge),vt=Ie,vt.setIndex(At)),L.isMesh)z.wireframe===!0?(I.setLineWidth(z.wireframeLinewidth*ft()),vt.setMode(A.LINES)):vt.setMode(A.TRIANGLES);else if(L.isLine){let Oe=z.linewidth;Oe===void 0&&(Oe=1),I.setLineWidth(Oe*ft()),L.isLineSegments?vt.setMode(A.LINES):L.isLineLoop?vt.setMode(A.LINE_LOOP):vt.setMode(A.LINE_STRIP)}else L.isPoints?vt.setMode(A.POINTS):L.isSprite&&vt.setMode(A.TRIANGLES);if(L.isBatchedMesh)if(L._multiDrawInstances!==null)uo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),vt.renderMultiDrawInstances(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount,L._multiDrawInstances);else if(Ce.get("WEBGL_multi_draw"))vt.renderMultiDraw(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount);else{const Oe=L._multiDrawStarts,Xt=L._multiDrawCounts,dt=L._multiDrawCount,wn=ge?V.get(ge).bytesPerElement:1,fs=_e.get(z).currentProgram.getUniforms();for(let Ln=0;Ln<dt;Ln++)fs.setValue(A,"_gl_DrawID",Ln),vt.render(Oe[Ln]/wn,Xt[Ln])}else if(L.isInstancedMesh)vt.renderInstances(Qe,Lt,L.count);else if(F.isInstancedBufferGeometry){const Oe=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,Xt=Math.min(F.instanceCount,Oe);vt.renderInstances(Qe,Lt,Xt)}else vt.render(Qe,Lt)};function ht(M,w,F){M.transparent===!0&&M.side===Hi&&M.forceSinglePass===!1?(M.side=vn,M.needsUpdate=!0,Ot(M,w,F),M.side=xr,M.needsUpdate=!0,Ot(M,w,F),M.side=Hi):Ot(M,w,F)}this.compile=function(M,w,F=null){F===null&&(F=M),p=Te.get(F),p.init(w),x.push(p),F.traverseVisible(function(L){L.isLight&&L.layers.test(w.layers)&&(p.pushLight(L),L.castShadow&&p.pushShadow(L))}),M!==F&&M.traverseVisible(function(L){L.isLight&&L.layers.test(w.layers)&&(p.pushLight(L),L.castShadow&&p.pushShadow(L))}),p.setupLights();const z=new Set;return M.traverse(function(L){if(!(L.isMesh||L.isPoints||L.isLine||L.isSprite))return;const ee=L.material;if(ee)if(Array.isArray(ee))for(let le=0;le<ee.length;le++){const Me=ee[le];ht(Me,F,L),z.add(Me)}else ht(ee,F,L),z.add(ee)}),p=x.pop(),z},this.compileAsync=function(M,w,F=null){const z=this.compile(M,w,F);return new Promise(L=>{function ee(){if(z.forEach(function(le){_e.get(le).currentProgram.isReady()&&z.delete(le)}),z.size===0){L(M);return}setTimeout(ee,10)}Ce.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let Se=null;function be(M){Se&&Se(M)}function $e(){Ne.stop()}function pe(){Ne.start()}const Ne=new Am;Ne.setAnimationLoop(be),typeof self<"u"&&Ne.setContext(self),this.setAnimationLoop=function(M){Se=M,ie.setAnimationLoop(M),M===null?Ne.stop():Ne.start()},ie.addEventListener("sessionstart",$e),ie.addEventListener("sessionend",pe),this.render=function(M,w){if(w!==void 0&&w.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),w.parent===null&&w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(w),w=ie.getCamera()),M.isScene===!0&&M.onBeforeRender(_,M,w,b),p=Te.get(M,x.length),p.init(w),x.push(p),q.multiplyMatrices(w.projectionMatrix,w.matrixWorldInverse),He.setFromProjectionMatrix(q,Vi,w.reversedDepth),K=this.localClippingEnabled,Ze=se.init(this.clippingPlanes,K),Y=$.get(M,v.length),Y.init(),v.push(Y),ie.enabled===!0&&ie.isPresenting===!0){const ee=_.xr.getDepthSensingMesh();ee!==null&&Re(ee,w,-1/0,_.sortObjects)}Re(M,w,0,_.sortObjects),Y.finish(),_.sortObjects===!0&&Y.sort(ne,P),Fe=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,Fe&&he.addToRenderList(Y,M),this.info.render.frame++,Ze===!0&&se.beginShadows();const F=p.state.shadowsArray;xe.render(F,M,w),Ze===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=Y.opaque,L=Y.transmissive;if(p.setupLights(),w.isArrayCamera){const ee=w.cameras;if(L.length>0)for(let le=0,Me=ee.length;le<Me;le++){const ge=ee[le];Nt(z,L,M,ge)}Fe&&he.render(M);for(let le=0,Me=ee.length;le<Me;le++){const ge=ee[le];ze(Y,M,ge,ge.viewport)}}else L.length>0&&Nt(z,L,M,w),Fe&&he.render(M),ze(Y,M,w);b!==null&&U===0&&(Ge.updateMultisampleRenderTarget(b),Ge.updateRenderTargetMipmap(b)),M.isScene===!0&&M.onAfterRender(_,M,w),ce.resetDefaultState(),g=-1,T=null,x.pop(),x.length>0?(p=x[x.length-1],Ze===!0&&se.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?Y=v[v.length-1]:Y=null};function Re(M,w,F,z){if(M.visible===!1)return;if(M.layers.test(w.layers)){if(M.isGroup)F=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(w);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||He.intersectsSprite(M)){z&&Ve.setFromMatrixPosition(M.matrixWorld).applyMatrix4(q);const le=D.update(M),Me=M.material;Me.visible&&Y.push(M,le,Me,F,Ve.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||He.intersectsObject(M))){const le=D.update(M),Me=M.material;if(z&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ve.copy(M.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),Ve.copy(le.boundingSphere.center)),Ve.applyMatrix4(M.matrixWorld).applyMatrix4(q)),Array.isArray(Me)){const ge=le.groups;for(let we=0,Xe=ge.length;we<Xe;we++){const Pe=ge[we],Qe=Me[Pe.materialIndex];Qe&&Qe.visible&&Y.push(M,le,Qe,F,Ve.z,Pe)}}else Me.visible&&Y.push(M,le,Me,F,Ve.z,null)}}const ee=M.children;for(let le=0,Me=ee.length;le<Me;le++)Re(ee[le],w,F,z)}function ze(M,w,F,z){const L=M.opaque,ee=M.transmissive,le=M.transparent;p.setupLightsView(F),Ze===!0&&se.setGlobalState(_.clippingPlanes,F),z&&I.viewport(C.copy(z)),L.length>0&&qe(L,w,F),ee.length>0&&qe(ee,w,F),le.length>0&&qe(le,w,F),I.buffers.depth.setTest(!0),I.buffers.depth.setMask(!0),I.buffers.color.setMask(!0),I.setPolygonOffset(!1)}function Nt(M,w,F,z){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[z.id]===void 0&&(p.state.transmissionRenderTarget[z.id]=new ls(1,1,{generateMipmaps:!0,type:Ce.has("EXT_color_buffer_half_float")||Ce.has("EXT_color_buffer_float")?So:ji,minFilter:$r,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:pt.workingColorSpace}));const ee=p.state.transmissionRenderTarget[z.id],le=z.viewport||C;ee.setSize(le.z*_.transmissionResolutionScale,le.w*_.transmissionResolutionScale);const Me=_.getRenderTarget(),ge=_.getActiveCubeFace(),we=_.getActiveMipmapLevel();_.setRenderTarget(ee),_.getClearColor(Z),B=_.getClearAlpha(),B<1&&_.setClearColor(16777215,.5),_.clear(),Fe&&he.render(F);const Xe=_.toneMapping;_.toneMapping=gr;const Pe=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),p.setupLightsView(z),Ze===!0&&se.setGlobalState(_.clippingPlanes,z),qe(M,F,z),Ge.updateMultisampleRenderTarget(ee),Ge.updateRenderTargetMipmap(ee),Ce.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let st=0,Lt=w.length;st<Lt;st++){const At=w[st],vt=At.object,Oe=At.geometry,Xt=At.material,dt=At.group;if(Xt.side===Hi&&vt.layers.test(z.layers)){const wn=Xt.side;Xt.side=vn,Xt.needsUpdate=!0,bt(vt,F,z,Oe,Xt,dt),Xt.side=wn,Xt.needsUpdate=!0,Qe=!0}}Qe===!0&&(Ge.updateMultisampleRenderTarget(ee),Ge.updateRenderTargetMipmap(ee))}_.setRenderTarget(Me,ge,we),_.setClearColor(Z,B),Pe!==void 0&&(z.viewport=Pe),_.toneMapping=Xe}function qe(M,w,F){const z=w.isScene===!0?w.overrideMaterial:null;for(let L=0,ee=M.length;L<ee;L++){const le=M[L],Me=le.object,ge=le.geometry,we=le.group;let Xe=le.material;Xe.allowOverride===!0&&z!==null&&(Xe=z),Me.layers.test(F.layers)&&bt(Me,w,F,ge,Xe,we)}}function bt(M,w,F,z,L,ee){M.onBeforeRender(_,w,F,z,L,ee),M.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),L.onBeforeRender(_,w,F,z,M,ee),L.transparent===!0&&L.side===Hi&&L.forceSinglePass===!1?(L.side=vn,L.needsUpdate=!0,_.renderBufferDirect(F,w,z,L,M,ee),L.side=xr,L.needsUpdate=!0,_.renderBufferDirect(F,w,z,L,M,ee),L.side=Hi):_.renderBufferDirect(F,w,z,L,M,ee),M.onAfterRender(_,w,F,z,L,ee)}function Ot(M,w,F){w.isScene!==!0&&(w=ve);const z=_e.get(M),L=p.state.lights,ee=p.state.shadowsArray,le=L.state.version,Me=Q.getParameters(M,L.state,ee,w,F),ge=Q.getProgramCacheKey(Me);let we=z.programs;z.environment=M.isMeshStandardMaterial?w.environment:null,z.fog=w.fog,z.envMap=(M.isMeshStandardMaterial?Yt:Ke).get(M.envMap||z.environment),z.envMapRotation=z.environment!==null&&M.envMap===null?w.environmentRotation:M.envMapRotation,we===void 0&&(M.addEventListener("dispose",j),we=new Map,z.programs=we);let Xe=we.get(ge);if(Xe!==void 0){if(z.currentProgram===Xe&&z.lightsStateVersion===le)return Ut(M,Me),Xe}else Me.uniforms=Q.getUniforms(M),M.onBeforeCompile(Me,_),Xe=Q.acquireProgram(Me,ge),we.set(ge,Xe),z.uniforms=Me.uniforms;const Pe=z.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Pe.clippingPlanes=se.uniform),Ut(M,Me),z.needsLights=Vt(M),z.lightsStateVersion=le,z.needsLights&&(Pe.ambientLightColor.value=L.state.ambient,Pe.lightProbe.value=L.state.probe,Pe.directionalLights.value=L.state.directional,Pe.directionalLightShadows.value=L.state.directionalShadow,Pe.spotLights.value=L.state.spot,Pe.spotLightShadows.value=L.state.spotShadow,Pe.rectAreaLights.value=L.state.rectArea,Pe.ltc_1.value=L.state.rectAreaLTC1,Pe.ltc_2.value=L.state.rectAreaLTC2,Pe.pointLights.value=L.state.point,Pe.pointLightShadows.value=L.state.pointShadow,Pe.hemisphereLights.value=L.state.hemi,Pe.directionalShadowMap.value=L.state.directionalShadowMap,Pe.directionalShadowMatrix.value=L.state.directionalShadowMatrix,Pe.spotShadowMap.value=L.state.spotShadowMap,Pe.spotLightMatrix.value=L.state.spotLightMatrix,Pe.spotLightMap.value=L.state.spotLightMap,Pe.pointShadowMap.value=L.state.pointShadowMap,Pe.pointShadowMatrix.value=L.state.pointShadowMatrix),z.currentProgram=Xe,z.uniformsList=null,Xe}function yt(M){if(M.uniformsList===null){const w=M.currentProgram.getUniforms();M.uniformsList=yl.seqWithValue(w.seq,M.uniforms)}return M.uniformsList}function Ut(M,w){const F=_e.get(M);F.outputColorSpace=w.outputColorSpace,F.batching=w.batching,F.batchingColor=w.batchingColor,F.instancing=w.instancing,F.instancingColor=w.instancingColor,F.instancingMorph=w.instancingMorph,F.skinning=w.skinning,F.morphTargets=w.morphTargets,F.morphNormals=w.morphNormals,F.morphColors=w.morphColors,F.morphTargetsCount=w.morphTargetsCount,F.numClippingPlanes=w.numClippingPlanes,F.numIntersection=w.numClipIntersection,F.vertexAlphas=w.vertexAlphas,F.vertexTangents=w.vertexTangents,F.toneMapping=w.toneMapping}function _t(M,w,F,z,L){w.isScene!==!0&&(w=ve),Ge.resetTextureUnits();const ee=w.fog,le=z.isMeshStandardMaterial?w.environment:null,Me=b===null?_.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:sa,ge=(z.isMeshStandardMaterial?Yt:Ke).get(z.envMap||le),we=z.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Xe=!!F.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Pe=!!F.morphAttributes.position,Qe=!!F.morphAttributes.normal,st=!!F.morphAttributes.color;let Lt=gr;z.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Lt=_.toneMapping);const At=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,vt=At!==void 0?At.length:0,Oe=_e.get(z),Xt=p.state.lights;if(Ze===!0&&(K===!0||M!==T)){const Yn=M===T&&z.id===g;se.setState(z,M,Yn)}let dt=!1;z.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==Xt.state.version||Oe.outputColorSpace!==Me||L.isBatchedMesh&&Oe.batching===!1||!L.isBatchedMesh&&Oe.batching===!0||L.isBatchedMesh&&Oe.batchingColor===!0&&L.colorTexture===null||L.isBatchedMesh&&Oe.batchingColor===!1&&L.colorTexture!==null||L.isInstancedMesh&&Oe.instancing===!1||!L.isInstancedMesh&&Oe.instancing===!0||L.isSkinnedMesh&&Oe.skinning===!1||!L.isSkinnedMesh&&Oe.skinning===!0||L.isInstancedMesh&&Oe.instancingColor===!0&&L.instanceColor===null||L.isInstancedMesh&&Oe.instancingColor===!1&&L.instanceColor!==null||L.isInstancedMesh&&Oe.instancingMorph===!0&&L.morphTexture===null||L.isInstancedMesh&&Oe.instancingMorph===!1&&L.morphTexture!==null||Oe.envMap!==ge||z.fog===!0&&Oe.fog!==ee||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==se.numPlanes||Oe.numIntersection!==se.numIntersection)||Oe.vertexAlphas!==we||Oe.vertexTangents!==Xe||Oe.morphTargets!==Pe||Oe.morphNormals!==Qe||Oe.morphColors!==st||Oe.toneMapping!==Lt||Oe.morphTargetsCount!==vt)&&(dt=!0):(dt=!0,Oe.__version=z.version);let wn=Oe.currentProgram;dt===!0&&(wn=Ot(z,w,L));let fs=!1,Ln=!1,pa=!1;const Ct=wn.getUniforms(),qn=Oe.uniforms;if(I.useProgram(wn.program)&&(fs=!0,Ln=!0,pa=!0),z.id!==g&&(g=z.id,Ln=!0),fs||T!==M){I.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),Ct.setValue(A,"projectionMatrix",M.projectionMatrix),Ct.setValue(A,"viewMatrix",M.matrixWorldInverse);const xn=Ct.map.cameraPosition;xn!==void 0&&xn.setValue(A,de.setFromMatrixPosition(M.matrixWorld)),Ae.logarithmicDepthBuffer&&Ct.setValue(A,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Ct.setValue(A,"isOrthographic",M.isOrthographicCamera===!0),T!==M&&(T=M,Ln=!0,pa=!0)}if(L.isSkinnedMesh){Ct.setOptional(A,L,"bindMatrix"),Ct.setOptional(A,L,"bindMatrixInverse");const Yn=L.skeleton;Yn&&(Yn.boneTexture===null&&Yn.computeBoneTexture(),Ct.setValue(A,"boneTexture",Yn.boneTexture,Ge))}L.isBatchedMesh&&(Ct.setOptional(A,L,"batchingTexture"),Ct.setValue(A,"batchingTexture",L._matricesTexture,Ge),Ct.setOptional(A,L,"batchingIdTexture"),Ct.setValue(A,"batchingIdTexture",L._indirectTexture,Ge),Ct.setOptional(A,L,"batchingColorTexture"),L._colorsTexture!==null&&Ct.setValue(A,"batchingColorTexture",L._colorsTexture,Ge));const jn=F.morphAttributes;if((jn.position!==void 0||jn.normal!==void 0||jn.color!==void 0)&&re.update(L,F,wn),(Ln||Oe.receiveShadow!==L.receiveShadow)&&(Oe.receiveShadow=L.receiveShadow,Ct.setValue(A,"receiveShadow",L.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(qn.envMap.value=ge,qn.flipEnvMap.value=ge.isCubeTexture&&ge.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&w.environment!==null&&(qn.envMapIntensity.value=w.environmentIntensity),Ln&&(Ct.setValue(A,"toneMappingExposure",_.toneMappingExposure),Oe.needsLights&&In(qn,pa),ee&&z.fog===!0&&J.refreshFogUniforms(qn,ee),J.refreshMaterialUniforms(qn,z,N,G,p.state.transmissionRenderTarget[M.id]),yl.upload(A,yt(Oe),qn,Ge)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(yl.upload(A,yt(Oe),qn,Ge),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Ct.setValue(A,"center",L.center),Ct.setValue(A,"modelViewMatrix",L.modelViewMatrix),Ct.setValue(A,"normalMatrix",L.normalMatrix),Ct.setValue(A,"modelMatrix",L.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Yn=z.uniformsGroups;for(let xn=0,ec=Yn.length;xn<ec;xn++){const Vr=Yn[xn];Be.update(Vr,wn),Be.bind(Vr,wn)}}return wn}function In(M,w){M.ambientLightColor.needsUpdate=w,M.lightProbe.needsUpdate=w,M.directionalLights.needsUpdate=w,M.directionalLightShadows.needsUpdate=w,M.pointLights.needsUpdate=w,M.pointLightShadows.needsUpdate=w,M.spotLights.needsUpdate=w,M.spotLightShadows.needsUpdate=w,M.rectAreaLights.needsUpdate=w,M.hemisphereLights.needsUpdate=w}function Vt(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(M,w,F){const z=_e.get(M);z.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),_e.get(M.texture).__webglTexture=w,_e.get(M.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:F,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,w){const F=_e.get(M);F.__webglFramebuffer=w,F.__useDefaultFramebuffer=w===void 0};const pn=A.createFramebuffer();this.setRenderTarget=function(M,w=0,F=0){b=M,y=w,U=F;let z=!0,L=null,ee=!1,le=!1;if(M){const ge=_e.get(M);if(ge.__useDefaultFramebuffer!==void 0)I.bindFramebuffer(A.FRAMEBUFFER,null),z=!1;else if(ge.__webglFramebuffer===void 0)Ge.setupRenderTarget(M);else if(ge.__hasExternalTextures)Ge.rebindTextures(M,_e.get(M.texture).__webglTexture,_e.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Pe=M.depthTexture;if(ge.__boundDepthTexture!==Pe){if(Pe!==null&&_e.has(Pe)&&(M.width!==Pe.image.width||M.height!==Pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ge.setupDepthRenderbuffer(M)}}const we=M.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(le=!0);const Xe=_e.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Xe[w])?L=Xe[w][F]:L=Xe[w],ee=!0):M.samples>0&&Ge.useMultisampledRTT(M)===!1?L=_e.get(M).__webglMultisampledFramebuffer:Array.isArray(Xe)?L=Xe[F]:L=Xe,C.copy(M.viewport),R.copy(M.scissor),O=M.scissorTest}else C.copy(fe).multiplyScalar(N).floor(),R.copy(Le).multiplyScalar(N).floor(),O=tt;if(F!==0&&(L=pn),I.bindFramebuffer(A.FRAMEBUFFER,L)&&z&&I.drawBuffers(M,L),I.viewport(C),I.scissor(R),I.setScissorTest(O),ee){const ge=_e.get(M.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+w,ge.__webglTexture,F)}else if(le){const ge=w;for(let we=0;we<M.textures.length;we++){const Xe=_e.get(M.textures[we]);A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+we,Xe.__webglTexture,F,ge)}}else if(M!==null&&F!==0){const ge=_e.get(M.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,ge.__webglTexture,F)}g=-1},this.readRenderTargetPixels=function(M,w,F,z,L,ee,le,Me=0){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=_e.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&le!==void 0&&(ge=ge[le]),ge){I.bindFramebuffer(A.FRAMEBUFFER,ge);try{const we=M.textures[Me],Xe=we.format,Pe=we.type;if(!Ae.textureFormatReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ae.textureTypeReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}w>=0&&w<=M.width-z&&F>=0&&F<=M.height-L&&(M.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+Me),A.readPixels(w,F,z,L,Ee.convert(Xe),Ee.convert(Pe),ee))}finally{const we=b!==null?_e.get(b).__webglFramebuffer:null;I.bindFramebuffer(A.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(M,w,F,z,L,ee,le,Me=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=_e.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&le!==void 0&&(ge=ge[le]),ge)if(w>=0&&w<=M.width-z&&F>=0&&F<=M.height-L){I.bindFramebuffer(A.FRAMEBUFFER,ge);const we=M.textures[Me],Xe=we.format,Pe=we.type;if(!Ae.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ae.textureTypeReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qe=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,Qe),A.bufferData(A.PIXEL_PACK_BUFFER,ee.byteLength,A.STREAM_READ),M.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+Me),A.readPixels(w,F,z,L,Ee.convert(Xe),Ee.convert(Pe),0);const st=b!==null?_e.get(b).__webglFramebuffer:null;I.bindFramebuffer(A.FRAMEBUFFER,st);const Lt=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await LT(A,Lt,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,Qe),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,ee),A.deleteBuffer(Qe),A.deleteSync(Lt),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,w=null,F=0){const z=Math.pow(2,-F),L=Math.floor(M.image.width*z),ee=Math.floor(M.image.height*z),le=w!==null?w.x:0,Me=w!==null?w.y:0;Ge.setTexture2D(M,0),A.copyTexSubImage2D(A.TEXTURE_2D,F,0,0,le,Me,L,ee),I.unbindTexture()};const Jn=A.createFramebuffer(),$t=A.createFramebuffer();this.copyTextureToTexture=function(M,w,F=null,z=null,L=0,ee=null){ee===null&&(L!==0?(uo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ee=L,L=0):ee=0);let le,Me,ge,we,Xe,Pe,Qe,st,Lt;const At=M.isCompressedTexture?M.mipmaps[ee]:M.image;if(F!==null)le=F.max.x-F.min.x,Me=F.max.y-F.min.y,ge=F.isBox3?F.max.z-F.min.z:1,we=F.min.x,Xe=F.min.y,Pe=F.isBox3?F.min.z:0;else{const jn=Math.pow(2,-L);le=Math.floor(At.width*jn),Me=Math.floor(At.height*jn),M.isDataArrayTexture?ge=At.depth:M.isData3DTexture?ge=Math.floor(At.depth*jn):ge=1,we=0,Xe=0,Pe=0}z!==null?(Qe=z.x,st=z.y,Lt=z.z):(Qe=0,st=0,Lt=0);const vt=Ee.convert(w.format),Oe=Ee.convert(w.type);let Xt;w.isData3DTexture?(Ge.setTexture3D(w,0),Xt=A.TEXTURE_3D):w.isDataArrayTexture||w.isCompressedArrayTexture?(Ge.setTexture2DArray(w,0),Xt=A.TEXTURE_2D_ARRAY):(Ge.setTexture2D(w,0),Xt=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,w.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,w.unpackAlignment);const dt=A.getParameter(A.UNPACK_ROW_LENGTH),wn=A.getParameter(A.UNPACK_IMAGE_HEIGHT),fs=A.getParameter(A.UNPACK_SKIP_PIXELS),Ln=A.getParameter(A.UNPACK_SKIP_ROWS),pa=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,At.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,At.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,we),A.pixelStorei(A.UNPACK_SKIP_ROWS,Xe),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Pe);const Ct=M.isDataArrayTexture||M.isData3DTexture,qn=w.isDataArrayTexture||w.isData3DTexture;if(M.isDepthTexture){const jn=_e.get(M),Yn=_e.get(w),xn=_e.get(jn.__renderTarget),ec=_e.get(Yn.__renderTarget);I.bindFramebuffer(A.READ_FRAMEBUFFER,xn.__webglFramebuffer),I.bindFramebuffer(A.DRAW_FRAMEBUFFER,ec.__webglFramebuffer);for(let Vr=0;Vr<ge;Vr++)Ct&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,_e.get(M).__webglTexture,L,Pe+Vr),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,_e.get(w).__webglTexture,ee,Lt+Vr)),A.blitFramebuffer(we,Xe,le,Me,Qe,st,le,Me,A.DEPTH_BUFFER_BIT,A.NEAREST);I.bindFramebuffer(A.READ_FRAMEBUFFER,null),I.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(L!==0||M.isRenderTargetTexture||_e.has(M)){const jn=_e.get(M),Yn=_e.get(w);I.bindFramebuffer(A.READ_FRAMEBUFFER,Jn),I.bindFramebuffer(A.DRAW_FRAMEBUFFER,$t);for(let xn=0;xn<ge;xn++)Ct?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,jn.__webglTexture,L,Pe+xn):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,jn.__webglTexture,L),qn?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Yn.__webglTexture,ee,Lt+xn):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Yn.__webglTexture,ee),L!==0?A.blitFramebuffer(we,Xe,le,Me,Qe,st,le,Me,A.COLOR_BUFFER_BIT,A.NEAREST):qn?A.copyTexSubImage3D(Xt,ee,Qe,st,Lt+xn,we,Xe,le,Me):A.copyTexSubImage2D(Xt,ee,Qe,st,we,Xe,le,Me);I.bindFramebuffer(A.READ_FRAMEBUFFER,null),I.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else qn?M.isDataTexture||M.isData3DTexture?A.texSubImage3D(Xt,ee,Qe,st,Lt,le,Me,ge,vt,Oe,At.data):w.isCompressedArrayTexture?A.compressedTexSubImage3D(Xt,ee,Qe,st,Lt,le,Me,ge,vt,At.data):A.texSubImage3D(Xt,ee,Qe,st,Lt,le,Me,ge,vt,Oe,At):M.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,ee,Qe,st,le,Me,vt,Oe,At.data):M.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,ee,Qe,st,At.width,At.height,vt,At.data):A.texSubImage2D(A.TEXTURE_2D,ee,Qe,st,le,Me,vt,Oe,At);A.pixelStorei(A.UNPACK_ROW_LENGTH,dt),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,wn),A.pixelStorei(A.UNPACK_SKIP_PIXELS,fs),A.pixelStorei(A.UNPACK_SKIP_ROWS,Ln),A.pixelStorei(A.UNPACK_SKIP_IMAGES,pa),ee===0&&w.generateMipmaps&&A.generateMipmap(Xt),I.unbindTexture()},this.initRenderTarget=function(M){_e.get(M).__webglFramebuffer===void 0&&Ge.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Ge.setTextureCube(M,0):M.isData3DTexture?Ge.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Ge.setTexture2DArray(M,0):Ge.setTexture2D(M,0),I.unbindTexture()},this.resetState=function(){y=0,U=0,b=null,I.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=pt._getUnpackColorSpace()}}class ql extends Ai{constructor(){const e=ql.SkyShader,t=new tr({name:e.name,uniforms:Mm.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:vn,depthWrite:!1});super(new fa(1,1,1),t),this.isSky=!0}}ql.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new k},up:{value:new k(0,1,0)}},vertexShader:`
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

		}`};const kc=eh.degToRad,Ua=eh.clamp;function Kd(i,e,t){let n=(e-i)%(Math.PI*2);return n>Math.PI&&(n-=Math.PI*2),n<-Math.PI&&(n+=Math.PI*2),i+n*t}function Qd(i,e,t){const r=new Float32Array(i*3);for(let o=0;o<i;o++){let l=0,c=-1,u=0,f=2;for(;f>1||c<.015;)l=Math.random()*2-1,c=Math.random()*2-1,u=Math.random()*2-1,f=l*l+c*c+u*u;const d=Math.sqrt(f)||1;r[o*3]=l/d*4e5,r[o*3+1]=c/d*4e5,r[o*3+2]=u/d*4e5}const s=new nr;s.setAttribute("position",new Si(r,3));const a=new Em({color:t,size:e,sizeAttenuation:!1,transparent:!0,opacity:0,depthWrite:!1,blending:gu});return new fg(s,a)}class jv{constructor(e){this.canvas=e,this.renderer=new qv({canvas:e,antialias:!1,powerPreference:"high-performance"}),this.renderer.toneMapping=nm,this.renderer.toneMappingExposure=.5,this.camera=new si(62,1,100,2e6),this.camera.position.set(0,80,0),this.sky.scale.setScalar(45e4),this.scene.add(this.sky),this.starsSmall=Qd(1100,1.5,11451903),this.starsBig=Qd(220,2.6,15134207),this.scene.add(this.starsSmall,this.starsBig);const t=e.parentElement??document.body;new ResizeObserver(()=>this.resize()).observe(t),this.resize(),requestAnimationFrame(this.tick)}canvas;renderer;scene=new og;camera;sky=new ql;sunDir=new k;starsSmall;starsBig;targetElev=NaN;targetTheta=NaN;elev=NaN;theta=NaN;needsRender=!0;ready=!1;onFrame;setSun(e,t){this.targetElev=e,this.targetTheta=kc(t),isNaN(this.elev)&&(this.elev=this.targetElev,this.theta=this.targetTheta),this.needsRender=!0}apply(){const e=this.elev;this.sunDir.setFromSphericalCoords(1,kc(90-e),this.theta);const t=this.sky.material.uniforms;t.sunPosition.value.copy(this.sunDir);const n=Ua((e-10)/25,0,1),r=kc(15+n*10);this.camera.lookAt(Math.sin(this.theta)*2e3,this.camera.position.y+2e3*Math.tan(r),Math.cos(this.theta)*2e3);const s=Ua(1-Math.abs(e)/12,0,1);t.rayleigh.value=1.2+s*2.5,t.mieCoefficient.value=.0022+s*.0058,t.mieDirectionalG.value=.85,t.turbidity.value=2+s*6;const a=Ua((e+9)/18,0,1),o=Ua((e-12)/30,0,1);this.renderer.toneMappingExposure=.07+Math.pow(a,1.25)*.48-o*.12;const l=Ua((-e-3)/9,0,1);this.starsSmall.material.opacity=l*.75,this.starsBig.material.opacity=l*.95}tick=()=>{if(!isNaN(this.elev)){const e=this.targetElev-this.elev,t=Math.abs(Kd(this.theta,this.targetTheta,1)-this.theta);if((Math.abs(e)>.002||t>4e-4)&&(this.elev+=e*.14,this.theta=Kd(this.theta,this.targetTheta,.14),this.needsRender=!0),this.starsBig.material.opacity>.01&&(this.starsSmall.rotation.y+=12e-5,this.starsBig.rotation.y+=12e-5,this.needsRender=!0),this.needsRender){this.apply(),this.renderer.render(this.scene,this.camera),this.needsRender=!1,this.ready||(this.ready=!0,this.canvas.classList.add("ready"));const r=(eh.radToDeg(this.theta)%360+360)%360;this.onFrame?.(r,this.elev)}}requestAnimationFrame(this.tick)};resize(){const e=this.canvas.parentElement??document.body,t=e.clientWidth||1,n=e.clientHeight||1;this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.75)),this.renderer.setSize(t,n,!1),this.camera.aspect=t/n,this.camera.fov=t<n?78:62,this.camera.updateProjectionMatrix(),this.needsRender=!0}}const Jd=new Map;function ex(i){let e=Jd.get(i);return e||(e=new Intl.DateTimeFormat("en-US",{timeZone:i,hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}),Jd.set(i,e)),e}function ih(i,e){const t={};for(const n of ex(i).formatToParts(e))n.type!=="literal"&&(t[n.type]=Number(n.value));return t}function ff(i,e){const t=ih(i,e);return Date.UTC(t.year,t.month-1,t.day,t.hour,t.minute,t.second)-Math.floor(e.getTime()/1e3)*1e3}function Wo(i,e,t,n,r=0){const s=Date.UTC(e,t-1,n)+r*36e5;let a=ff(i,new Date(s));return a=ff(i,new Date(s-a)),new Date(s-a)}function jl(i,e){const t=ih(i,e);return{y:t.year,m:t.month,d:t.day}}function Mo(i,e){const t=ih(i,e);return t.hour+t.minute/60+t.second/3600}function tx(i,e){const t=Math.round(ff(i,e)/6e4),n=t<0?"−":"+",r=Math.abs(t),s=String(Math.floor(r/60)).padStart(2,"0"),a=String(r%60).padStart(2,"0");return`UTC${n}${s}:${a}`}function hf(i,e){const t=new Date(Date.UTC(i.y,i.m-1,i.d+e));return{y:t.getUTCFullYear(),m:t.getUTCMonth()+1,d:t.getUTCDate()}}function rh(i,e){return i.y===e.y&&i.m===e.m&&i.d===e.d}const vi={night:"#0a0f26",astro:"#101a3e",nautical:"#1e2d63",civil:"#48549b",day:"#f2c14e"},is="#ff9233",fo="#6386ff",Rs={night:"Night",astro:"Astronomical twilight",nautical:"Nautical twilight",civil:"Civil twilight",day:"Daylight"};function df(i,e,t,n){const r=Wo(n,t.y,t.m,t.d,12),s={timezoneId:n},a=X_(i,e,r,s),o=a.twilight,l=p=>p&&!isNaN(p.getTime())?Mo(n,p):null,u=[{d:o?.astronomicalDawn??null,before:"night",after:"astro"},{d:o?.nauticalDawn??null,before:"astro",after:"nautical"},{d:o?.civilDawn??null,before:"nautical",after:"civil"},{d:a.sunrise,before:"civil",after:"day"},{d:a.sunset,before:"day",after:"civil"},{d:o?.civilDusk??null,before:"civil",after:"nautical"},{d:o?.nauticalDusk??null,before:"nautical",after:"astro"},{d:o?.astronomicalDusk??null,before:"astro",after:"night"}].map(p=>({t:l(p.d),before:p.before,after:p.after})).filter(p=>p.t!==null).sort((p,v)=>p.t-v.t),d=Hf(i,e,a.solarNoon??r,s)?.elevation??-90,h=[];if(u.length===0){const p=d>-.833?"day":d>-6?"civil":d>-12?"nautical":d>-18?"astro":"night";h.push({phase:p,start:0,end:24})}else{let p=u[0].before,v=0;for(const x of u)x.t>v&&h.push({phase:p,start:v,end:x.t}),p=x.after,v=Math.max(v,x.t);v<24&&h.push({phase:p,start:v,end:24})}const S=p=>({start:l(p?.start),end:l(p?.end)}),m=!a.sunrise&&!a.sunset?d>-.833?"day":"night":null,Y=a.sunrise&&a.sunset?a.sunset.getTime()-a.sunrise.getTime():m==="day"?864e5:m==="night"?0:null;return{ymd:t,tz:n,lat:i,lng:e,sunrise:a.sunrise,sunset:a.sunset,solarNoon:a.solarNoon,twilight:o,sunriseH:l(a.sunrise),sunsetH:l(a.sunset),noonH:l(a.solarNoon),segments:h,golden:{morning:S(o?.goldenHour?.morning),evening:S(o?.goldenHour?.evening)},blue:{morning:S(o?.blueHour?.morning),evening:S(o?.blueHour?.evening)},dayLengthMs:Y,polar:m,noonElevation:d}}const ll=(i,e)=>e.start!==null&&e.end!==null&&e.start<=e.end&&i>=e.start&&i<=e.end;function Rm(i,e){if(ll(e,i.golden.morning)||ll(e,i.golden.evening))return{id:"golden",label:"Golden hour",color:is};if(ll(e,i.blue.morning)||ll(e,i.blue.evening))return{id:"blue",label:"Blue hour",color:fo};const n=(i.segments.find(s=>e>=s.start&&e<s.end)??i.segments[i.segments.length-1])?.phase??"night",r=n==="day"?is:n==="night"?"#8d9bce":nx(vi[n]);return{id:n,label:Rs[n],color:r}}function nx(i){const e=parseInt(i.slice(1),16),t=a=>Math.min(255,Math.round(a+(255-a)*.45)),n=t(e>>16&255),r=t(e>>8&255),s=t(e&255);return`rgb(${n}, ${r}, ${s})`}const Mi=180,bs=128,va=30,ix=152,rx=7,zc=104;function _i(i,e){const t=(e-12)/24*Math.PI*2;return[Mi+i*Math.sin(t),Mi-i*Math.cos(t)]}function Im(i,e,t,n,r,s=1){if(t-e>=23.999)return`<circle cx="${Mi}" cy="${Mi}" r="${i}" fill="none" stroke="${n}" stroke-width="${r}" opacity="${s}"/>`;const[a,o]=_i(i,e),[l,c]=_i(i,t),u=t-e>12?1:0;return`<path d="M ${a.toFixed(2)} ${o.toFixed(2)} A ${i} ${i} 0 ${u} 1 ${l.toFixed(2)} ${c.toFixed(2)}" fill="none" stroke="${n}" stroke-width="${r}" opacity="${s}"/>`}function cl(i,e){return i.start===null||i.end===null||i.end<=i.start?"":Im(ix,i.start,i.end,e,rx,.95)}function sx(i,e,t){const n=[];n.push(`<defs>
        <filter id="dialGlow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="5" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
    </defs>`);for(const l of e.segments)n.push(Im(bs,l.start,l.end,vi[l.phase],va));for(const l of[e.sunriseH,e.sunsetH]){if(l===null)continue;const[c,u]=_i(bs-va/2,l),[f,d]=_i(bs+va/2,l);n.push(`<line x1="${c}" y1="${u}" x2="${f}" y2="${d}" stroke="rgba(255,255,255,0.9)" stroke-width="1.4"/>`)}n.push(cl(e.blue.morning,fo)),n.push(cl(e.blue.evening,fo)),n.push(cl(e.golden.morning,is)),n.push(cl(e.golden.evening,is));for(let l=0;l<24;l++){const c=l%6===0,[u,f]=_i(zc,l),[d,h]=_i(zc-(c?9:5),l);if(n.push(`<line x1="${u.toFixed(1)}" y1="${f.toFixed(1)}" x2="${d.toFixed(1)}" y2="${h.toFixed(1)}" stroke="rgba(244,241,234,${c?.5:.18})" stroke-width="${c?1.5:1}"/>`),c){const[S,m]=_i(zc-22,l);n.push(`<text x="${S.toFixed(1)}" y="${m.toFixed(1)}" text-anchor="middle" dominant-baseline="central" fill="rgba(244,241,234,0.45)" font-size="11" font-family="inherit">${String(l).padStart(2,"0")}</text>`)}}if(t.nowH!==null){const[l,c]=_i(bs+va/2+11,t.nowH);n.push(`<circle cx="${l.toFixed(1)}" cy="${c.toFixed(1)}" r="3" fill="#fff" opacity="0.9"><title>now</title></circle>`)}const[r,s]=_i(bs-va/2-12,t.hours),[a,o]=_i(bs,t.hours);n.push(`<line x1="${Mi}" y1="${Mi}" x2="${r.toFixed(1)}" y2="${s.toFixed(1)}" stroke="rgba(242,193,78,0.65)" stroke-width="1.6"/>`),n.push(`<circle cx="${a.toFixed(1)}" cy="${o.toFixed(1)}" r="8" fill="#f2c14e" filter="url(#dialGlow)"/>`),n.push(`<circle cx="${a.toFixed(1)}" cy="${o.toFixed(1)}" r="3" fill="#0a0d1c"/>`),n.push(`<text x="${Mi}" y="${Mi-6}" text-anchor="middle" fill="#f4f1ea" font-size="46" font-family="'Instrument Serif', serif">${t.timeLabel}</text>`),n.push(`<text x="${Mi}" y="${Mi+26}" text-anchor="middle" fill="${t.phase.color}" font-size="10.5" letter-spacing="3.2" font-family="inherit">${t.phase.label.toUpperCase()}</text>`),i.innerHTML=n.join("")}function ax(i,e){let t=!1;const n=r=>{const s=i.getBoundingClientRect(),a=r.clientX-(s.left+s.width/2),o=r.clientY-(s.top+s.height/2);return(Math.atan2(a,-o)/(Math.PI*2)*24+12+24)%24};i.addEventListener("pointerdown",r=>{t=!0,i.setPointerCapture(r.pointerId),e(n(r))}),i.addEventListener("pointermove",r=>{t&&e(n(r))}),i.addEventListener("pointerup",()=>{t=!1}),i.addEventListener("pointercancel",()=>{t=!1})}const ox=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],lx="rgba(255, 146, 51, 0.6)",Di=Math.PI*2;function cx(i){return(Date.UTC(i+1,0,1)-Date.UTC(i,0,1))/864e5}class ux{constructor(e,t){this.canvas=e,this.onSelect=t,this.ctx=e.getContext("2d"),new ResizeObserver(()=>this.queueDraw()).observe(e),this.attachPointer()}canvas;onSelect;ctx;days=[];total=365;year=0;selected=null;today=null;job=0;cache=new Map;drawQueued=!1;load(e,t,n,r,s){this.year=r,this.today=s,this.total=cx(r);const a=`${e.toFixed(4)},${t.toFixed(4)},${n},${r}`,o=this.cache.get(a);if(o){this.days=o,this.job++,this.queueDraw();return}const l=++this.job,c=new Array(this.total).fill(null);this.days=c;let u=0;const f=()=>{if(l!==this.job)return;const d=Math.min(u+14,this.total);for(;u<d;u++){const h=new Date(Date.UTC(r,0,1+u));c[u]=df(e,t,{y:h.getUTCFullYear(),m:h.getUTCMonth()+1,d:h.getUTCDate()},n)}if(this.queueDraw(),u<this.total)setTimeout(f,0);else{if(this.cache.size>8){const h=this.cache.keys().next().value;h&&this.cache.delete(h)}this.cache.set(a,c)}};f()}setSelected(e){this.selected=e,this.queueDraw()}queueDraw(){this.drawQueued||(this.drawQueued=!0,requestAnimationFrame(()=>{this.drawQueued=!1,this.draw()}))}geom(){const e=this.canvas.clientWidth,t=this.canvas.clientHeight,n=Math.min(e,t)/2,r=n-34,s=Math.max(48,n*.34);return{w:e,h:t,cx:e/2,cy:t/2,r0:s,r1:r}}angleOf(e){return-Math.PI/2+e/this.total*Di}dayIndexOf(e){return(Date.UTC(e.y,e.m-1,e.d)-Date.UTC(this.year,0,1))/864e5}draw(){const{canvas:e,ctx:t}=this,n=this.geom();if(n.w<10||n.h<10)return;const r=Math.min(window.devicePixelRatio||1,2);(e.width!==Math.round(n.w*r)||e.height!==Math.round(n.h*r))&&(e.width=Math.round(n.w*r),e.height=Math.round(n.h*r)),t.setTransform(r,0,0,r,0,0),t.clearRect(0,0,n.w,n.h);const s=u=>n.r0+u/24*(n.r1-n.r0),a=Math.max(.002,Di/this.total/3);for(let u=0;u<this.total;u++){const f=this.days[u];if(!f)continue;const d=this.angleOf(u),h=this.angleOf(u+1)+a;for(const S of f.segments){const m=s(S.start),Y=s(S.end);t.strokeStyle=vi[S.phase],t.lineWidth=Y-m,t.beginPath(),t.arc(n.cx,n.cy,(m+Y)/2,d,h),t.stroke()}t.strokeStyle=lx;for(const S of[f.golden.morning,f.golden.evening]){if(S.start===null||S.end===null||S.end<=S.start)continue;const m=s(S.start),Y=Math.max(s(S.end),m+1);t.lineWidth=Y-m,t.beginPath(),t.arc(n.cx,n.cy,(m+Y)/2,d,h),t.stroke()}}for(const u of[6,12,18])t.strokeStyle="rgba(255,255,255,0.06)",t.lineWidth=1,t.beginPath(),t.arc(n.cx,n.cy,s(u),0,Di),t.stroke();for(const u of[n.r0-1,n.r1+1])t.strokeStyle="rgba(255,255,255,0.1)",t.lineWidth=1,t.beginPath(),t.arc(n.cx,n.cy,u,0,Di),t.stroke();t.font='9px "Space Grotesk", sans-serif',t.textAlign="center",t.textBaseline="middle",t.fillStyle="rgba(244,241,234,0.42)";for(const u of[6,12,18])t.fillText(String(u).padStart(2,"0"),n.cx,n.cy-s(u));const o=Date.UTC(this.year,0,1),l=(u,f)=>(Date.UTC(this.year,u,f)-o)/864e5;t.font='10.5px "Space Grotesk", sans-serif';for(let u=0;u<12;u++){const f=this.angleOf(l(u,1));t.strokeStyle="rgba(5,7,15,0.55)",t.lineWidth=1,t.beginPath(),t.moveTo(n.cx+Math.cos(f)*n.r0,n.cy+Math.sin(f)*n.r0),t.lineTo(n.cx+Math.cos(f)*n.r1,n.cy+Math.sin(f)*n.r1),t.stroke();const d=this.angleOf(l(u,15)),h=n.r1+17;t.fillStyle="rgba(244,241,234,0.5)",t.fillText(ox[u],n.cx+Math.cos(d)*h,n.cy+Math.sin(d)*h)}t.save(),t.setLineDash([2,5]),t.strokeStyle="rgba(255,255,255,0.22)";for(const[u,f]of[[2,20],[5,21],[8,22],[11,21]]){const d=this.angleOf(l(u,f)+.5);t.beginPath(),t.moveTo(n.cx+Math.cos(d)*n.r0,n.cy+Math.sin(d)*n.r0),t.lineTo(n.cx+Math.cos(d)*(n.r1+6),n.cy+Math.sin(d)*(n.r1+6)),t.stroke()}if(t.restore(),this.today&&this.today.y===this.year){const u=this.angleOf(this.dayIndexOf(this.today)+.5);t.fillStyle="#f2c14e",t.beginPath(),t.arc(n.cx+Math.cos(u)*(n.r1+8),n.cy+Math.sin(u)*(n.r1+8),3,0,Di),t.fill()}let c=null;if(this.selected&&this.selected.y===this.year){const u=this.dayIndexOf(this.selected);c=this.days[u]??null;const f=this.angleOf(u+.5);t.save(),t.strokeStyle="rgba(255,255,255,0.95)",t.lineWidth=1.4,t.shadowColor="rgba(255,255,255,0.8)",t.shadowBlur=7,t.beginPath(),t.moveTo(n.cx+Math.cos(f)*(n.r0-4),n.cy+Math.sin(f)*(n.r0-4)),t.lineTo(n.cx+Math.cos(f)*(n.r1+5),n.cy+Math.sin(f)*(n.r1+5)),t.stroke(),t.restore(),t.fillStyle="#fff",t.beginPath(),t.arc(n.cx+Math.cos(f)*(n.r1+5),n.cy+Math.sin(f)*(n.r1+5),2.6,0,Di),t.fill()}this.drawCenter(n,c)}drawCenter(e,t){const{ctx:n}=this;if(n.textAlign="center",n.textBaseline="middle",!t){this.selected&&(n.fillStyle="rgba(244,241,234,0.4)",n.font='11px "Space Grotesk", sans-serif',n.fillText("computing…",e.cx,e.cy));return}const r=Wo(t.tz,t.ymd.y,t.ymd.m,t.ymd.d,12),s=new Intl.DateTimeFormat("en-US",{timeZone:t.tz,weekday:"short",month:"short",day:"numeric",year:"numeric"}).format(r).toUpperCase();n.fillStyle="rgba(244,241,234,0.55)",n.font='500 10px "Space Grotesk", sans-serif',n.fillText(s,e.cx,e.cy-30);const a=t.dayLengthMs===null?"—":`${Math.floor(t.dayLengthMs/36e5)}h ${String(Math.round(t.dayLengthMs/6e4)%60).padStart(2,"0")}m`;n.fillStyle="#f2c14e",n.font=`${Math.round(Math.min(30,e.r0*.42))}px "Instrument Serif", serif`,n.fillText(a,e.cx,e.cy-2),n.fillStyle="rgba(244,241,234,0.45)",n.font='10px "Space Grotesk", sans-serif',n.fillText("of daylight",e.cx,e.cy+20);const o=c=>{if(c===null)return"—";const u=Math.floor(c*60);return`${String(Math.floor(u/60)).padStart(2,"0")}:${String(u%60).padStart(2,"0")}`};n.fillStyle="rgba(244,241,234,0.7)",n.font='11px "Space Grotesk", sans-serif';const l=t.polar==="day"?"midnight sun":t.polar==="night"?"polar night":`↑ ${o(t.sunriseH)}   ↓ ${o(t.sunsetH)}`;n.fillText(l,e.cx,e.cy+40)}attachPointer(){let e=!1;const t=n=>{const r=this.geom(),s=this.canvas.getBoundingClientRect(),a=n.clientX-s.left-r.cx,o=n.clientY-s.top-r.cy,l=Math.hypot(a,o);if(l<r.r0-14||l>r.r1+30)return!1;const c=(Math.atan2(o,a)+Math.PI/2+Di)%Di,u=Math.max(0,Math.min(this.total-1,Math.floor(c/Di*this.total))),f=new Date(Date.UTC(this.year,0,1+u)),d={y:f.getUTCFullYear(),m:f.getUTCMonth()+1,d:f.getUTCDate()};return(!this.selected||!rh(this.selected,d))&&this.onSelect(d),!0};this.canvas.addEventListener("pointerdown",n=>{t(n)&&(e=!0,this.canvas.setPointerCapture(n.pointerId))}),this.canvas.addEventListener("pointermove",n=>{e&&t(n)}),this.canvas.addEventListener("pointerup",()=>{e=!1}),this.canvas.addEventListener("pointercancel",()=>{e=!1})}}const oa=[{label:"London",lat:51.5074,lng:-.1278},{label:"San Francisco",lat:37.7749,lng:-122.4194},{label:"Tokyo",lat:35.6762,lng:139.6503},{label:"Nairobi",lat:-1.2921,lng:36.8219},{label:"Sydney",lat:-33.8688,lng:151.2093},{label:"Reykjavík",lat:64.1466,lng:-21.9426},{label:"Longyearbyen",lat:78.2232,lng:15.6267},{label:"Ushuaia",lat:-54.8019,lng:-68.303}];la.registerPlugin(at);const ut=i=>document.querySelector(i),Er=(i,e,t)=>Math.min(t,Math.max(e,i)),Bl=window.matchMedia("(prefers-reduced-motion: reduce)").matches;function ho(i){const e=Math.floor(Er(i,0,24)*60)%1440;return`${String(Math.floor(e/60)).padStart(2,"0")}:${String(e%60).padStart(2,"0")}`}function fx(i,e){return!e||isNaN(e.getTime())?"—":new Intl.DateTimeFormat("en-GB",{timeZone:i,hour:"2-digit",minute:"2-digit",hourCycle:"h23"}).format(e)}function hx(i,e,t=!1){const n=Wo(i,e.y,e.m,e.d,12);return new Intl.DateTimeFormat("en-US",{timeZone:i,weekday:t?"long":"short",month:t?"long":"short",day:"numeric",year:"numeric"}).format(n)}function wm(i){if(i===null)return"—";const e=Math.round(i/6e4);return`${Math.floor(e/60)}h ${String(e%60).padStart(2,"0")}m`}function dx(i){const e=Math.round(i/1e3),t=e<0?"−":"+",n=Math.abs(e);return`${t}${Math.floor(n/60)}m ${String(n%60).padStart(2,"0")}s`}const px=["N","NE","E","SE","S","SW","W","NW"],Lm=i=>px[Math.round((i%360+360)%360/45)%8],po="ssjs-demo-prefs",qd="ssjs-demo-geo";function Yx(){try{const i=JSON.parse(localStorage.getItem(po)||"");if(typeof i.lat=="number"&&typeof i.lng=="number")return i}catch{}return{...oa[0],label:oa[0].label}}const Pi=Yx(),da=new URLSearchParams(location.search),ul=parseFloat(da.get("lat")??""),fl=parseFloat(da.get("lng")??"");!isNaN(ul)&&!isNaN(fl)&&(Pi.lat=Er(ul,-90,90),Pi.lng=Er(fl,-180,180),Pi.label=`${Math.abs(ul).toFixed(2)}°${ul>=0?"N":"S"}, ${Math.abs(fl).toFixed(2)}°${fl>=0?"E":"W"}`);const $c=vY(Pi.lat,Pi.lng),hl=/^(\d{4})-(\d{2})-(\d{2})$/.exec(da.get("date")??""),pf=parseFloat(da.get("t")??"");da.has("shot")&&document.documentElement.classList.add("shot");const oe={lat:Pi.lat,lng:Pi.lng,tz:$c,label:Pi.label,date:hl?{y:Number(hl[1]),m:Number(hl[2]),d:Number(hl[3])}:jl($c,new Date),hours:isNaN(pf)?Mo($c,new Date):Er(pf,0,24)};let St,Yf;const ye={bigTime:ut("#bigTime"),phaseLabel:ut("#phaseLabel"),dateText:ut("#dateText"),dateInput:ut("#dateInput"),tzText:ut("#tzText"),locBtn:ut("#locBtn"),polarBadge:ut("#polarBadge"),statElev:ut("#statElev"),statAz:ut("#statAz"),statDayLen:ut("#statDayLen"),scrubber:ut("#scrubber"),scrubTrack:ut("#scrubTrack"),scrubMarkers:ut("#scrubMarkers"),playhead:ut("#playhead"),playBtn:ut("#playBtn"),playIcon:document.getElementById("playIcon"),nowBtn:ut("#nowBtn"),locPanel:ut("#locPanel"),locClose:ut("#locClose"),presetChips:ut("#presetChips"),latInput:ut("#latInput"),lngInput:ut("#lngInput"),applyLoc:ut("#applyLoc"),geoBtn:ut("#geoBtn"),dial:document.getElementById("dial"),cards:ut("#cards"),yearCanvas:ut("#yearCanvas"),legend:ut("#legend"),copyBtn:ut("#copyBtn")},Dm=new jv(ut("#sky")),jd=ut("#hero"),mx=ut(".mountains"),Sx=ut(".m-back"),_x=ut(".m-front");let Nm=null;function Tx(){const i=document.getElementById("compass"),e=['<circle cx="50" cy="50" r="45" fill="rgba(8, 11, 24, 0.38)" stroke="rgba(255,255,255,0.22)" stroke-width="1"/>'];for(let n=0;n<360;n+=30){if(n%90===0)continue;const r=n*Math.PI/180,s=50+Math.sin(r)*40.5,a=50-Math.cos(r)*40.5,o=50+Math.sin(r)*45,l=50-Math.cos(r)*45;e.push(`<line x1="${s.toFixed(1)}" y1="${a.toFixed(1)}" x2="${o.toFixed(1)}" y2="${l.toFixed(1)}" stroke="rgba(255,255,255,0.3)" stroke-width="1"/>`)}const t=[["N",50,16,"#f2c14e"],["E",84,50,"rgba(244,241,234,0.65)"],["S",50,84,"rgba(244,241,234,0.65)"],["W",16,50,"rgba(244,241,234,0.65)"]];for(const[n,r,s,a]of t)e.push(`<text x="${r}" y="${s}" text-anchor="middle" dominant-baseline="central" font-size="9.5" font-weight="500" fill="${a}">${n}</text>`);e.push('<g id="compassNeedle"><line x1="50" y1="50" x2="50" y2="26" stroke="rgba(242,193,78,0.9)" stroke-width="1.6"/><circle cx="50" cy="26" r="4.4" fill="#f2c14e"/></g>'),e.push('<circle cx="50" cy="50" r="2.2" fill="rgba(244,241,234,0.85)"/>'),i.innerHTML=e.join(""),Nm=i.querySelector("#compassNeedle")}const ep=(i,e)=>(i%e+e)%e;function gx(i){const e=mx.clientWidth;if(!e)return;const t=i/360*2*e;_x.style.transform=`translate3d(${-ep(t,e).toFixed(1)}px,0,0)`,Sx.style.transform=`translate3d(${-ep(t*.85,e).toFixed(1)}px,0,0)`}let dl=!1;function Wx(i){!dl&&i>7?(dl=!0,jd.classList.add("day-ui")):dl&&i<5.5&&(dl=!1,jd.classList.remove("day-ui"))}Dm.onFrame=(i,e)=>{gx(i),Nm?.setAttribute("transform",`rotate(${i.toFixed(2)} 50 50)`),Wx(e)};function Mx(i){const e=ho(i);ye.bigTime.dataset.v!==e&&(ye.bigTime.dataset.v=e,ye.bigTime.innerHTML=e.split("").map(t=>`<span${t===":"?' class="colon"':""}>${t}</span>`).join(""))}function Ux(){const i=[];for(const a of St.segments){const o=vi[a.phase];i.push(`${o} ${a.start/24*100}%`,`${o} ${a.end/24*100}%`)}const e=`linear-gradient(to right, ${i.join(", ")})`,t=["rgba(255,146,51,0) 0%"];for(const a of[St.golden.morning,St.golden.evening]){if(a.start===null||a.end===null||a.end<=a.start)continue;const o=a.start/24*100,l=a.end/24*100;t.push(`rgba(255,146,51,0) ${o}%`,`rgba(255,146,51,0.75) ${o}%`,`rgba(255,146,51,0.75) ${l}%`,`rgba(255,146,51,0) ${l}%`)}t.push("rgba(255,146,51,0) 100%");const n=`linear-gradient(to right, ${t.join(", ")})`;ye.scrubTrack.style.background=`${n}, ${e}`;const r=[],s=(a,o)=>{if(a===null)return;const l=a/24*100;r.push(`<div class="scrub-marker" style="left:${l}%"></div>`),o&&r.push(`<div class="scrub-mlabel" style="left:${l}%">${o}</div>`)};s(St.sunriseH,St.sunriseH!==null?`↑ ${ho(St.sunriseH)}`:""),s(St.noonH,""),s(St.sunsetH,St.sunsetH!==null?`↓ ${ho(St.sunsetH)}`:""),ye.scrubMarkers.innerHTML=r.join("")}function tp(i){if(!i)return"";const e=Hf(oe.lat,oe.lng,i,{timezoneId:oe.tz});return e?`az ${e.azimuth.toFixed(0)}° ${Lm(e.azimuth)}`:""}function vx(){const i=St.twilight,e=o=>fx(oe.tz,o??null),t=(o,l)=>o&&l?`${e(o)} – ${e(l)}`:"—",n=o=>o?Mo(oe.tz,o):null,r=o=>vi[o],s=St.dayLengthMs!==null&&Yf.dayLengthMs!==null?`${dx(St.dayLengthMs-Yf.dayLengthMs)} vs yesterday`:"",a=[{key:"ad",label:"Astro dawn",value:e(i?.astronomicalDawn),sub:"sun at −18°",dot:r("astro"),jump:n(i?.astronomicalDawn)},{key:"nd",label:"Nautical dawn",value:e(i?.nauticalDawn),sub:"sun at −12°",dot:r("nautical"),jump:n(i?.nauticalDawn)},{key:"cd",label:"Civil dawn",value:e(i?.civilDawn),sub:"sun at −6°",dot:r("civil"),jump:n(i?.civilDawn)},{key:"bm",label:"Blue hour · am",value:t(i?.blueHour?.morning.start,i?.blueHour?.morning.end),sub:"before sunrise",dot:fo,jump:n(i?.blueHour?.morning.start)},{key:"sr",label:"Sunrise",value:e(St.sunrise),sub:tp(St.sunrise),dot:r("day"),jump:St.sunriseH},{key:"gm",label:"Golden hour · am",value:t(i?.goldenHour?.morning.start,i?.goldenHour?.morning.end),sub:"after sunrise",dot:is,jump:n(i?.goldenHour?.morning.start)},{key:"noon",label:"Solar noon",value:e(St.solarNoon),sub:`max elevation ${St.noonElevation.toFixed(1)}°`,dot:"#fff",jump:St.noonH},{key:"ge",label:"Golden hour · pm",value:t(i?.goldenHour?.evening.start,i?.goldenHour?.evening.end),sub:"before sunset",dot:is,jump:n(i?.goldenHour?.evening.start)},{key:"ss",label:"Sunset",value:e(St.sunset),sub:tp(St.sunset),dot:r("day"),jump:St.sunsetH},{key:"be",label:"Blue hour · pm",value:t(i?.blueHour?.evening.start,i?.blueHour?.evening.end),sub:"after sunset",dot:fo,jump:n(i?.blueHour?.evening.start)},{key:"cdk",label:"Civil dusk",value:e(i?.civilDusk),sub:"sun at −6°",dot:r("civil"),jump:n(i?.civilDusk)},{key:"ndk",label:"Nautical dusk",value:e(i?.nauticalDusk),sub:"sun at −12°",dot:r("nautical"),jump:n(i?.nauticalDusk)},{key:"adk",label:"Astro dusk",value:e(i?.astronomicalDusk),sub:"sun at −18°",dot:r("astro"),jump:n(i?.astronomicalDusk)},{key:"len",label:"Day length",value:wm(St.dayLengthMs),sub:s,dot:is,jump:null}];ye.cards.innerHTML=a.map(o=>`<button class="card" data-jump="${o.jump??""}">
                <span class="card-k"><span class="dot" style="background:${o.dot}"></span>${o.label}</span>
                <span class="card-v">${o.value}</span>
                <span class="card-s">${o.sub||"&nbsp;"}</span>
            </button>`).join(""),Bl||la.fromTo(ye.cards.children,{autoAlpha:.4,y:5},{autoAlpha:1,y:0,duration:.35,stagger:.012,ease:"power2.out",overwrite:!0})}let Kc=!1;function xx(){const i=Rm(St,oe.hours),e=jl(oe.tz,new Date),t=rh(e,oe.date)?Mo(oe.tz,new Date):null;sx(ye.dial,St,{hours:oe.hours,timeLabel:ho(oe.hours),phase:i,nowH:t})}function Ex(){Kc||(Kc=!0,requestAnimationFrame(()=>{Kc=!1,xx()}))}function Om(){const i=oe.hours,e=Wo(oe.tz,oe.date.y,oe.date.m,oe.date.d,i),t=Hf(oe.lat,oe.lng,e,{timezoneId:oe.tz});t&&(Dm.setSun(t.elevation,t.azimuth),ye.statElev.textContent=`${t.elevation.toFixed(1)}°`,ye.statAz.textContent=`${t.azimuth.toFixed(0)}° ${Lm(t.azimuth)}`),Mx(i);const n=Rm(St,i);ye.phaseLabel.textContent=n.label,ye.phaseLabel.style.setProperty("--phase-color",n.color),ye.playhead.style.left=`${Er(i,0,24)/24*100}%`,ye.scrubber.setAttribute("aria-valuenow",i.toFixed(2)),ye.scrubber.setAttribute("aria-valuetext",`${ho(i)}, ${n.label}`),Ex()}function sh(){St=df(oe.lat,oe.lng,oe.date,oe.tz),Yf=df(oe.lat,oe.lng,hf(oe.date,-1),oe.tz),ye.dateText.textContent=hx(oe.tz,oe.date),ye.dateInput.value=`${oe.date.y}-${String(oe.date.m).padStart(2,"0")}-${String(oe.date.d).padStart(2,"0")}`,ye.locBtn.textContent=oe.label,ye.tzText.textContent=`${tx(oe.tz,Wo(oe.tz,oe.date.y,oe.date.m,oe.date.d,12))}`,ye.statDayLen.textContent=wm(St.dayLengthMs),St.polar?(ye.polarBadge.hidden=!1,ye.polarBadge.textContent=St.polar==="day"?"☀ Polar day — the sun never sets":"☾ Polar night — the sun never rises"):ye.polarBadge.hidden=!0,Ux(),vx(),Om()}let mf,np="";function ah(){const i=`${oe.lat.toFixed(4)},${oe.lng.toFixed(4)},${oe.tz},${oe.date.y}`;i!==np&&(np=i,mf.load(oe.lat,oe.lng,oe.tz,oe.date.y,jl(oe.tz,new Date))),mf.setSelected(oe.date)}function ki(i,e=!0){e&&Uo(),oe.hours=Er(i,0,24),Om()}function Ks(i){oe.date=i,sh(),ah()}function Vl(i,e,t){oe.lat=Er(i,-90,90),oe.lng=Er(e,-180,180),oe.tz=vY(oe.lat,oe.lng),oe.label=t??`${Math.abs(i).toFixed(2)}°${i>=0?"N":"S"}, ${Math.abs(e).toFixed(2)}°${e>=0?"E":"W"}`,ye.latInput.value=oe.lat.toFixed(4),ye.lngInput.value=oe.lng.toFixed(4),Bm(),localStorage.setItem(po,JSON.stringify({lat:oe.lat,lng:oe.lng,label:oe.label})),sh(),ah(),t||yx(oe.lat,oe.lng)}async function yx(i,e){const t=`${i.toFixed(2)},${e.toFixed(2)}`;let n={};try{n=JSON.parse(localStorage.getItem(qd)||"{}")}catch{}if(n[t]){oe.label=n[t],ye.locBtn.textContent=oe.label;return}try{const a=(await(await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${i}&lon=${e}&zoom=10`,{headers:{"Accept-Language":"en"}})).json()).address??{},o=a.city||a.town||a.village||a.county||a.state||"",l=(a.country_code||"").toUpperCase(),c=[o,l].filter(Boolean).join(", ");if(c&&i===oe.lat&&e===oe.lng){oe.label=c,ye.locBtn.textContent=c;const u=Object.keys(n);u.length>50&&delete n[u[0]],n[t]=c,localStorage.setItem(qd,JSON.stringify(n)),localStorage.setItem(po,JSON.stringify({lat:oe.lat,lng:oe.lng,label:c}))}}catch{}}let za=null,$a=null;const Vx=2.2;function Fm(i){ye.playIcon.setAttribute("d",i?"M6 4 H10 V20 H6 Z M14 4 H18 V20 H14 Z":"M7 4 L20 12 L7 20 Z"),ye.playBtn.setAttribute("aria-label",i?"Pause":"Play the day")}function Uo(){$a&&($a.kill(),$a=null),za&&(za.kill(),za=null,Fm(!1))}function Ax(){Uo(),Fm(!0);const i={h:oe.hours>=23.99?0:oe.hours},e=t=>{i.h=t,za=la.to(i,{h:24,duration:(24-t)/Vx,ease:"none",onUpdate:()=>ki(i.h,!1),onComplete:()=>e(0)})};e(i.h)}function Gm(){Uo();const i=new Date,e=jl(oe.tz,i);rh(e,oe.date)||Ks(e),ki(Mo(oe.tz,i),!1)}function Bm(){for(const i of Array.from(ye.presetChips.children)){const e=oa[Number(i.dataset.i)];i.classList.toggle("active",Math.abs(e.lat-oe.lat)<.01&&Math.abs(e.lng-oe.lng)<.01)}}function bx(){let i=!1;const e=r=>{const s=ye.scrubber.getBoundingClientRect();ki((r.clientX-s.left)/s.width*24)};ye.scrubber.addEventListener("pointerdown",r=>{i=!0,ye.scrubber.setPointerCapture(r.pointerId),e(r)}),ye.scrubber.addEventListener("pointermove",r=>{i&&e(r)}),ye.scrubber.addEventListener("pointerup",()=>{i=!1}),ye.scrubber.addEventListener("pointercancel",()=>{i=!1}),ye.scrubber.addEventListener("keydown",r=>{const s=r.shiftKey?1:.25;r.key==="ArrowLeft"&&(ki(oe.hours-s),r.preventDefault()),r.key==="ArrowRight"&&(ki(oe.hours+s),r.preventDefault())}),ye.playBtn.addEventListener("click",()=>za?Uo():Ax()),ye.nowBtn.addEventListener("click",Gm),ut("#datePrev").addEventListener("click",()=>Ks(hf(oe.date,-1))),ut("#dateNext").addEventListener("click",()=>Ks(hf(oe.date,1))),ye.dateInput.addEventListener("change",()=>{const[r,s,a]=ye.dateInput.value.split("-").map(Number);r&&s&&a&&Ks({y:r,m:s,d:a})}),ye.presetChips.innerHTML=oa.map((r,s)=>`<button class="chip" data-i="${s}">${r.label}</button>`).join(""),ye.presetChips.addEventListener("click",r=>{const s=r.target.closest(".chip");if(!s)return;const a=oa[Number(s.dataset.i)];Vl(a.lat,a.lng,a.label)});const t=r=>{ye.locPanel.classList.toggle("open",r),ye.locBtn.setAttribute("aria-expanded",String(r))};ye.locBtn.addEventListener("click",r=>{r.stopPropagation(),t(!ye.locPanel.classList.contains("open"))}),ye.locClose.addEventListener("click",()=>t(!1)),document.addEventListener("pointerdown",r=>{!ye.locPanel.contains(r.target)&&r.target!==ye.locBtn&&t(!1)}),ye.applyLoc.addEventListener("click",()=>{const r=parseFloat(ye.latInput.value),s=parseFloat(ye.lngInput.value);!isNaN(r)&&!isNaN(s)&&Vl(r,s)}),ye.geoBtn.addEventListener("click",()=>{navigator.geolocation?.getCurrentPosition(r=>Vl(r.coords.latitude,r.coords.longitude),()=>{ye.geoBtn.textContent="⌖ Location unavailable"})}),ax(ye.dial,r=>ki(r)),ye.cards.addEventListener("click",r=>{const s=r.target.closest(".card");!s||s.dataset.jump===""||(ki(Number(s.dataset.jump)),window.innerWidth<860&&window.scrollTo({top:0,behavior:Bl?"auto":"smooth"}))}),ye.copyBtn.addEventListener("click",async()=>{try{await navigator.clipboard.writeText("npm install sunrise-sunset-js"),ye.copyBtn.textContent="✓",setTimeout(()=>{ye.copyBtn.textContent="⧉"},1500)}catch{}});const n=[[vi.day,Rs.day],["rgba(255,146,51,0.8)","Golden hour"],[vi.civil,Rs.civil],[vi.nautical,Rs.nautical],[vi.astro,Rs.astro],[vi.night,Rs.night]];if(ye.legend.innerHTML=n.map(([r,s])=>`<span class="lg"><span class="sw" style="background:${r}"></span>${s}</span>`).join(""),!Bl&&!da.has("shot"))for(const r of Array.from(document.querySelectorAll(".reveal")))la.from(r,{y:36,autoAlpha:0,duration:.9,ease:"power3.out",scrollTrigger:{trigger:r,start:"top 88%"}})}mf=new ux(ye.yearCanvas,i=>{Uo(),Ks(i)});ye.latInput.value=oe.lat.toFixed(4);ye.lngInput.value=oe.lng.toFixed(4);Tx();bx();sh();ah();Bm();Pi.label===oa[0].label&&!localStorage.getItem(po)&&localStorage.setItem(po,JSON.stringify(Pi));Object.assign(window,{__demo:{setHours:ki,setDate:Ks,setLocation:Vl,goNow:Gm,state:oe}});if(!Bl&&isNaN(pf)){const i=oe.hours,e=Math.max(0,i-(i>7?7:2));if(i-e>.2){const t={h:e};$a=la.to(t,{h:i,duration:3,ease:"power2.inOut",onUpdate:()=>ki(t.h,!1),onComplete:()=>{$a=null}})}}
