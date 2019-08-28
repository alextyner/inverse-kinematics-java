"use strict";
function $rt_cls(cls){return A(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return B(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var result = "";var sz = C(str);var array = $rt_createCharArray(sz);D(str, 0, sz, array, 0);for (var i = 0; i < sz; i = (i + 1) | 0) {result += String.fromCharCode(array.data[i]);}return result;}
function $rt_objcls() { return E; }
function $rt_nullCheck(val) {if (val === null) {$rt_throw(F());}return val;}
function $rt_intern(str) {return G(str);}
function $rt_getThread(){return H();}
function $rt_setThread(t){return I(t);}
var Ln=$rt_throw;var Mn=$rt_compare;var Nn=$rt_nullCheck;var On=$rt_cls;var Pn=$rt_createArray;var Qn=$rt_isInstance;var J=$rt_nativeThread;var Rn=$rt_suspending;var N=$rt_resuming;var L=$rt_invalidPointer;var Sn=$rt_s;
function E(){this.Gb=null;this.$id$=0;}
function Tn(){var $r=new E();Eh($r);return $r;}
function Fn(a){var b;if(a.Gb===null){b=new Oe;U_$callClinit();b.Z=Un;b.Cd=[];b.Sd=[];a.Gb=b;}b=a.Gb;if(b.Z===null){b=a.Gb;U_$callClinit();b.Z=Un;}else{b=a.Gb.Z;U_$callClinit();if(b!==Un){b=new Xd;a=Sn(0);b.Db=1;b.kd=1;b.hd=a;Ln(b);}}a=a.Gb;a.Rc=a.Rc+1|0;}
function Xm(a){var b,c;if(Jl(a)==0){b=a.Gb;b=b.Z;U_$callClinit();if(b===Un){b=a.Gb;c=b.Rc-1|0;b.Rc=c;if(c==0){a.Gb.Z=null;}Jl(a);return;}}a=new We;a.Db=1;a.kd=1;Ln(a);}
function Pf(a){var b,$p,$z;$p=0;if(N()){var $T=J();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=1;$p=1;case 1:El(a,b);if(Rn()){break _;}return;default:L();}}J().s(a,b,$p);}
function El(a,b){var c,$p,$z;$p=0;if(N()){var $T=J();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.Gb===null){c=new Oe;U_$callClinit();c.Z=Un;c.Cd=[];c.Sd=[];a.Gb=c;}c=a.Gb;if(c.Z===null){c=a.Gb;U_$callClinit();c.Z=Un;}c=a.Gb.Z;U_$callClinit();if(c===Un){a=a.Gb;a.Rc=a.Rc+b|0;return;}$p=1;case 1:Mj(a,b);if(Rn()){break _;}return;default:L();}}J().s(a,b,c,$p);}
function Mj(a,b){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.lc=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.I=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=Am(callback);return thread.suspend(function(){try{Wm(a,b,callback);}catch($e){callback.I($rt_exception($e));}});}
function Wm(a,b,c){var d,e,f;U_$callClinit();d=Un;if(a.Gb===null){e=new Oe;e.Z=Un;e.Cd=[];e.Sd=[];a.Gb=e;if(Un!==d){Un=d;}Un.L=Dg();a=a.Gb;a.Rc=a.Rc+b|0;c.Wc.lc(null);return;}f=a.Gb;if(f.Z!==null){f=a.Gb.Cd;e=new Ve;e.S=d;e.R=a;e.Q=b;e.P=c;f.push(e);return;}a.Gb.Z=d;if(Un!==d){Un=d;}Un.L=Dg();a=a.Gb;a.Rc=a.Rc+b|0;a=null;c.Wc.lc(a);}
function Em(a){Om(a,1);}
function Om(a,b){var c;if(Jl(a)==0){c=a.Gb;c=c.Z;U_$callClinit();if(c===Un){c=a.Gb;c.Rc=c.Rc-b|0;if(a.Gb.Rc>0){return;}a.Gb.Z=null;if(En(a.Gb.Cd)!=0){Jl(a);}else{c=new Af;c.Hc=a;Gm(c,0);}return;}}a=new We;a.Db=1;a.kd=1;Ln(a);}
function Jl($t){var a;if($t.Gb===null){return 1;}a=$t.Gb;if(a.Z===null&&En($t.Gb.Cd)!=0&&En($t.Gb.Sd)!=0){$t.Gb=null;return 1;}return 0;}
function Kn(a){var b;a:{if(a.Gb!==null){a=a.Gb;a=a.Z;U_$callClinit();if(a===Un){b=1;break a;}}b=0;}return b;}
function Eh($t){return;}
function Zf($t){var a,b;a=$t.constructor;if(a===null){b=null;}else{b=a.classObject;if(b===null){b=new Fe;b.hc=a;a.classObject=b;}}return b;}
function Nk($t){var a;if(Qn($t,Cb)==0&&$t.constructor.$meta.item===null){a=new Yc;a.Db=1;a.kd=1;Ln(a);}a=Im($t);a.$id$=$rt_nextId();return a;}
function Fi($t){var a,b,c;a:{if($t.Gb!==null){a=$t.Gb;a=a.Z;U_$callClinit();if(a===Un){b=1;break a;}}b=0;}if(b==0){a=new We;a.Db=1;a.kd=1;Ln(a);}a=$t.Gb;a=a.Sd;while(En(a)==0){c=a.shift();if(c.ne()==0){Gm(c,0);}}}
function Vm(a){return a;}
function An(a){var b,c,d;if(Jl(a)==0){b=a.Gb;if(b.Z===null){if(En(a.Gb.Cd)==0){a=a.Gb.Cd.shift();b=a.S;c=a.R;d=a.Q;a=a.P;U_$callClinit();if(Un!==b){Un=b;}Un.L=Dg();c.Gb.Z=b;b=c.Gb;b.Rc=b.Rc+d|0;a.Wc.lc(null);}return;}}}
function Km(a,b,c,d){U_$callClinit();if(Un!==a){Un=a;}Un.L=Dg();b.Gb.Z=a;a=b.Gb;a.Rc=a.Rc+c|0;a=null;d.Wc.lc(a);}
function V(){var a=this;E.call(a);a.hd=null;a.Db=false;a.kd=false;}
function Vn(){var $r=new V();Lk($r);return $r;}
function Wn(b){var $r=new V();Vh($r,b);return $r;}
function Lk($t){$t.Db=1;$t.kd=1;}
function Vh($t,a){$t.Db=1;$t.kd=1;$t.hd=a;}
function Ei($t){return $t;}
function P(){V.call(this);}
function Xn(){var $r=new P();Ii($r);return $r;}
function Yn(b){var $r=new P();Vg($r,b);return $r;}
function Ii($t){$t.Db=1;$t.kd=1;}
function Vg($t,a){$t.Db=1;$t.kd=1;$t.hd=a;}
function K(){P.call(this);}
function Zn(){var $r=new K();Vi($r);return $r;}
function Ao(b){var $r=new K();Ag($r,b);return $r;}
function Vi($t){$t.Db=1;$t.kd=1;}
function Ag($t,a){$t.Db=1;$t.kd=1;$t.hd=a;}
function Ob(){K.call(this);}
function Bo(){var $r=new Ob();Oi($r);return $r;}
function Oi($t){$t.Db=1;$t.kd=1;}
function Q(){E.call(this);}
function Zm(a){return a;}
function Eb(){E.call(this);}
function Bc(){E.call(this);}
function If(){E.call(this);}
function Mm(a,b){var c,d,e,f,g,h,i;c=a.constructor;if(c===null){d=null;}else{d=c.classObject;if(d===null){d=new Fe;d.hc=c;c.classObject=d;}}e=d.hc.$meta.item;if(e===null){d=null;}else{d=e.classObject;if(d===null){d=new Fe;d.hc=e;e.classObject=d;}}f=a.data;g=Sm(d,b);h=f.length;if(b<h){h=b;}i=0;while(i<h){g.data[i]=f[i];i=i+1|0;}return g;}
function Mc(){E.call(this);}
function Tb(){E.call(this);}
function Hc(){E.call(this);}
function R(){E.call(this);}
function Co(){var $r=new R();Kf($r);return $r;}
function Kf($t){}
function Id(){R.call(this);}
function Do(){var $r=new Id();Zh($r);return $r;}
function Zh($t){}
function Z(){E.call(this);}
var Eo=null;var Fo=null;var Go=null;function Z_$callClinit(){Z_$callClinit=function(){};
Pj();}
function Dg(){return Long_fromNumber(new Date().getTime());}
function Pj(){var a,b,c,d,e,f,g;a=new Ke;b=new Id;c=0;a.Od=b;b=new Fd;M_$callClinit();b.bb=$rt_createCharArray(16);a.Y=b;a.Yd=$rt_createCharArray(32);a.tb=c;b=new Ue;d=Sn(1);e=Pn(Vb,0);f=e.data;Bb_$callClinit();Uk(d);c=f.length;g=0;while(g<c){Uk(f[g]);g=g+1|0;}b.gb=d;b.Nc=e.rd();a.id=b;Eo=a;a=new Ke;b=new Ze;c=0;a.Od=b;b=new Fd;b.bb=$rt_createCharArray(16);a.Y=b;a.Yd=$rt_createCharArray(32);a.tb=c;b=new Ue;d=Sn(1);e=Pn(Vb,0);f=e.data;Uk(d);c=f.length;g=0;while(g<c){Uk(f[g]);g=g+1|0;}b.gb=d;b.Nc=e.rd();a.id=
b;Fo=a;a=new Zc;Go=a;}
function Yc(){P.call(this);}
function Ho(){var $r=new Yc();Jh($r);return $r;}
function Jh($t){$t.Db=1;$t.kd=1;}
function Ud(){var a=this;E.call(a);a.Fd=0.0;a.db=null;a.ac=null;}
function Io(b,c,d,e,f,g){var $r=new Ud();Sj($r,b,c,d,e,f,g);return $r;}
function Sj($t,a,b,c,d,e,f){var g,h;g=new Ye;h=new Sb;h.q=b;h.s=c;g.Vc=h;g.y=d;g.Hb=e;h=new Sb;b=b+d*Dn(e);c=c+d*Um(e);h.q=b;h.s=c;g.r=h;$t.db=g;$t.Fd=f;$t.ac=a;}
function Ij($t){return $t.ac;}
function Nj($t,a){$t.Fd=a;}
function Bk($t){return $t.Fd;}
function Mg($t,a){var b,c,d;b=Jo($t.db,a);Gi($t.db,b.Hb);c=a.i()-$t.db.r.q;d=a.k()-$t.db.r.s;Fh($t.db,c,d);}
function Qg($t){return $t.db;}
function Aj($t,a){var b,c,d;b="#FFFFFF";a.strokeStyle=b;b=$t.Fd;a.lineWidth=b;a.beginPath();c=$t.db.Vc.q;d=$t.db.Vc.s;a.moveTo(c,d);d=$t.db.r.q;c=$t.db.r.s;a.lineTo(d,c);a.stroke();}
function O(){E.call(this);}
function Wd(){E.call(this);}
function Ym(){return window.document;}
function Nc(){E.call(this);}
function Db(){E.call(this);}
function U(){var a=this;E.call(a);a.vb=Long_ZERO;a.L=Long_ZERO;a.ab=null;a.jb=null;a.Pb=null;a.Uc=null;}
var Ko=null;var Un=null;var Lo=Long_ZERO;var Mo=0;function U_$callClinit(){U_$callClinit=function(){};
Nf();}
function No(b){var $r=new U();Hd($r,b);return $r;}
function Oo(b){var $r=new U();Rd($r,b);return $r;}
function Po(b,c){var $r=new U();Se($r,b,c);return $r;}
function Hd($t,a){var b,c;U_$callClinit();b=null;$t.ab=new E;$t.Pb=a;$t.Uc=b;c=Lo;Lo=Long_add(c,Long_fromInt(1));$t.vb=c;}
function Rd($t,a){var b,c;U_$callClinit();b=null;$t.ab=new E;$t.Pb=b;$t.Uc=a;c=Lo;Lo=Long_add(c,Long_fromInt(1));$t.vb=c;}
function Se($t,a,b){var c;U_$callClinit();$t.ab=new E;$t.Pb=b;$t.Uc=a;c=Lo;Lo=Long_add(c,Long_fromInt(1));$t.vb=c;}
function Ci($t){var a;a=new Le;a.ec=$t;Rm(a);}
function I(a){U_$callClinit();if(Un!==a){Un=a;}Un.L=Dg();}
function Yj(){U_$callClinit();return Ko;}
function Gf($t){var a,b,$$je,$p,$z;$p=0;if(N()){var $T=J();$p=$T.l();b=$T.l();a=$T.l();$t=$T.l();}_:while(true){switch($p){case 0:if($t.Uc===null){a=$t.ab;$p=1;continue _;}a=$t.Uc;$p=2;continue _;case 1:Pf(a);if(Rn()){break _;}a:{try{Fi($t.ab);Em(a);}catch($$e){$$je=$$e.$javaException;if($$je){b=$$je;break a;}else {throw $$e;}}return;}Em(a);Ln(b);case 2:a.c();if(Rn()){break _;}a=$t.ab;$p=1;continue _;default:L();}}J().s($t,a,b,$p);}
function H(){U_$callClinit();return Un;}
function Uc(a){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.lc=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.I=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=Am(callback);return thread.suspend(function(){try{Kk(a,callback);}catch($e){callback.I($rt_exception($e));}});}
function Kk(a,b){var c,d,e;U_$callClinit();c=Un;d=Long_ge(a,Long_fromInt(2147483647))?2147483647:a.lo;e=new Bd;e.Rd=c;e.Zb=b;e.Ec=Gm(e,d);c.jb=e;}
function Ne($t){var a,b,$$je,$p,$z;$p=0;if(N()){var $T=J();$p=$T.l();b=$T.l();a=$T.l();$t=$T.l();}_:while(true){switch($p){case 0:try{Mo=Mo+1|0;I($t);$p=1;continue _;}catch($$e){$$je=$$e.$javaException;if($$je){a=$$je;}else {throw $$e;}}Mo=Mo-1|0;b=Ko;if(Un!==b){Un=b;}Un.L=Dg();Ln(a);case 1:a:{try{Gf($t);if(Rn()){break _;}}catch($$e){$$je=$$e.$javaException;if($$je){a=$$je;break a;}else {throw $$e;}}Mo=Mo-1|0;a=Ko;if(Un!==a){Un=a;}Un.L=Dg();return;}Mo=Mo-1|0;b=Ko;if(Un!==b){Un=b;}Un.L=Dg();Ln(a);default:L();}}J().s($t,
a,b,$p);}
function Cg(a,b){U_$callClinit();a.jb=b;return b;}
function Nf(){var a,b,c,d;a=new U;b=Sn(2);Vb_$callClinit();c=b;b=null;a.ab=new E;a.Pb=c;a.Uc=b;d=Lo;Lo=Long_add(d,Long_fromInt(1));a.vb=d;Ko=a;Un=Ko;Lo=Long_fromInt(1);Mo=1;}
function Dc(){E.call(this);}
function Ec(){E.call(this);}
function Qd(){E.call(this);}
function Tm(a){return a;}
function En(a){return a.length!=0?0:1;}
function Jm(a,b){var c;c=b;a.push(c);}
function Jn(a){return a.shift();}
function Jb(){E.call(this);}
function Kb(){V.call(this);}
function Qo(b){var $r=new Kb();Lf($r,b);return $r;}
function Lf($t,a){$t.Db=1;$t.kd=1;$t.hd=a;}
function X(){Kb.call(this);}
function Ro(b){var $r=new X();Uh($r,b);return $r;}
function Uh($t,a){$t.Db=1;$t.kd=1;$t.hd=a;}
function Xb(){E.call(this);}
function Jd(){Ob.call(this);}
function So(){var $r=new Jd();Si($r);return $r;}
function Si($t){$t.Db=1;$t.kd=1;}
function Wb(){R.call(this);this.Od=null;}
function To(b){var $r=new Wb();Hi($r,b);return $r;}
function Hi($t,a){$t.Od=a;}
function T(){E.call(this);}
function Zb(){E.call(this);}
var Uo=null;function Zb_$callClinit(){Zb_$callClinit=function(){};
Hk();}
function Hk(){var $$je;Y_$callClinit();Uo=$rt_createIntArray(Vo.rd().data.length);a:{b:{try{Uo.data[Wh(Wo)]=1;}catch($$e){$$je=$$e.$javaException;if($$je&&$$je instanceof Ff){break b;}else {throw $$e;}}break a;}}c:{d:{try{Uo.data[Wh(Xo)]=2;}catch($$e){$$je=$$e.$javaException;if($$je&&$$je instanceof Ff){break d;}else {throw $$e;}}break c;}}e:{f:{try{Uo.data[Wh(Yo)]=3;}catch($$e){$$je=$$e.$javaException;if($$je&&$$je instanceof Ff){break f;}else {throw $$e;}}break e;}}}
function S(){E.call(this);}
function Af(){E.call(this);this.Hc=null;}
function Zo(b){var $r=new Af();Yf($r,b);return $r;}
function Yf($t,a){$t.Hc=a;}
function He($t){var a,b,c,d;a=$t.Hc;if(Jl(a)==0){b=a.Gb;if(b.Z===null&&En(a.Gb.Cd)==0){a=a.Gb.Cd.shift();b=a.S;c=a.R;d=a.Q;a=a.P;U_$callClinit();if(Un!==b){Un=b;}Un.L=Dg();c.Gb.Z=b;b=c.Gb;b.Rc=b.Rc+d|0;a.Wc.lc(null);}}}
function M(){E.call(this);this.bb=null;}
var Ap=null;var Bp=null;var Cp=null;var Dp=null;var Ep=null;var Fp=null;var Gp=null;function M_$callClinit(){M_$callClinit=function(){};
Lg();}
function Hp(){var $r=new M();Cd($r);return $r;}
function Ip(b){var $r=new M();Ae($r,b);return $r;}
function Cd($t){var a;M_$callClinit();a=16;$t.bb=$rt_createCharArray(a);}
function Ae($t,a){M_$callClinit();$t.bb=$rt_createCharArray(a);}
function Lg(){var a,b,c,d,e,f,g,h;a=$rt_createFloatArray(6);b=a.data;b[0]=10.0;b[1]=100.0;b[2]=10000.0;b[3]=1.0E8;b[4]=1.00000003E16;b[5]=1.0E32;Ap=a;c=$rt_createDoubleArray(9);d=c.data;d[0]=10.0;d[1]=100.0;d[2]=10000.0;d[3]=1.0E8;d[4]=1.0E16;d[5]=1.0E32;d[6]=1.0E64;d[7]=1.0E128;d[8]=1.0E256;Bp=c;a=$rt_createFloatArray(6);b=a.data;b[0]=0.1;b[1]=0.01;b[2]=1.0E-4;b[3]=1.0E-8;b[4]=1.0E-16;b[5]=1.0E-32;Cp=a;c=$rt_createDoubleArray(9);d=c.data;d[0]=0.1;d[1]=0.01;d[2]=1.0E-4;d[3]=1.0E-8;d[4]=1.0E-16;d[5]=1.0E-32;d[6]
=1.0E-64;d[7]=1.0E-128;d[8]=1.0E-256;Dp=c;e=$rt_createIntArray(10);f=e.data;f[0]=1;f[1]=10;f[2]=100;f[3]=1000;f[4]=10000;f[5]=100000;f[6]=1000000;f[7]=10000000;f[8]=100000000;f[9]=1000000000;Ep=e;g=$rt_createLongArray(19);h=g.data;h[0]=Long_fromInt(1);h[1]=Long_fromInt(10);h[2]=Long_fromInt(100);h[3]=Long_fromInt(1000);h[4]=Long_fromInt(10000);h[5]=Long_fromInt(100000);h[6]=Long_fromInt(1000000);h[7]=Long_fromInt(10000000);h[8]=Long_fromInt(100000000);h[9]=Long_fromInt(1000000000);h[10]=new Long(1410065408, 2);h[11]
=new Long(1215752192, 23);h[12]=new Long(3567587328, 232);h[13]=new Long(1316134912, 2328);h[14]=new Long(276447232, 23283);h[15]=new Long(2764472320, 232830);h[16]=new Long(1874919424, 2328306);h[17]=new Long(1569325056, 23283064);h[18]=new Long(2808348672, 232830643);Fp=g;g=$rt_createLongArray(6);h=g.data;h[0]=Long_fromInt(1);h[1]=Long_fromInt(10);h[2]=Long_fromInt(100);h[3]=Long_fromInt(10000);h[4]=Long_fromInt(100000000);h[5]=new Long(1874919424, 2328306);Gp=g;}
function Sc(){E.call(this);}
function Fd(){M.call(this);}
function Jp(){var $r=new Fd();Yh($r);return $r;}
function Yh($t){var a;M_$callClinit();a=16;$t.bb=$rt_createCharArray(a);}
function Od(){E.call(this);}
function Nb(){E.call(this);}
function Zd(){E.call(this);this.qc=null;}
function Kp(b){var $r=new Zd();Jg($r,b);return $r;}
function Jg($t,a){$t.qc=a;}
function Sh($t,a){var b,c,d,e;a=a;b=$t.qc;b.oc=0;b.oc=1;c=new U;d=new Ee;d.Zd=b;d.Wd=a;U_$callClinit();a=null;c.ab=new E;c.Pb=a;c.Uc=d;e=Lo;Lo=Long_add(e,Long_fromInt(1));c.vb=e;a=new Le;a.ec=c;Rm(a);}
function Rk($t,a){var b,c,d,e;b=$t.qc;b.oc=0;b.oc=1;c=new U;d=new Ee;d.Zd=b;d.Wd=a;U_$callClinit();a=null;c.ab=new E;c.Pb=a;c.Uc=d;e=Lo;Lo=Long_add(e,Long_fromInt(1));c.vb=e;a=new Le;a.ec=c;Rm(a);}
function Il($t,a){var b,c,d,e;a=a;b=$t.qc;b.oc=0;b.oc=1;c=new U;d=new Ee;d.Zd=b;d.Wd=a;U_$callClinit();a=null;c.ab=new E;c.Pb=a;c.Uc=d;e=Lo;Lo=Long_add(e,Long_fromInt(1));c.vb=e;a=new Le;a.ec=c;Rm(a);}
function Ge(){K.call(this);}
function Lp(){var $r=new Ge();Ak($r);return $r;}
function Ak($t){$t.Db=1;$t.kd=1;}
function Ic(){E.call(this);}
function Yb(){E.call(this);}
function Mb(){E.call(this);}
function Ib(){E.call(this);}
function Kc(){E.call(this);}
function Sb(){var a=this;E.call(a);a.q=0.0;a.s=0.0;}
function Mp(){var $r=new Sb();Ig($r);return $r;}
function Np(b,c){var $r=new Sb();Ml($r,b,c);return $r;}
function Ig($t){}
function Ml($t,a,b){$t.q=a;$t.s=b;}
function Ji($t){return $t.q;}
function Qf($t){return $t.s;}
function Wj($t,a){$t.q=a;}
function Ch($t,a){$t.s=a;}
function Ye(){var a=this;Sb.call(a);a.Vc=null;a.r=null;a.y=0.0;a.Hb=0.0;}
function Jo(b,c){var $r=new Ye();Tf($r,b,c);return $r;}
function Op(b,c,d,e){var $r=new Ye();Nh($r,b,c,d,e);return $r;}
function Tf($t,a,b){Nh($t,a.i(),a.k(),Cn(Hn(b.k()-a.k(),2.0)+Hn(b.i()-a.i(),2.0)),Bm(b.k()-a.k(),b.i()-a.i()));}
function Nh($t,a,b,c,d){var e;e=new Sb;e.q=a;e.s=b;$t.Vc=e;$t.y=c;$t.Hb=d;e=new Sb;a=a+c*Dn(d);b=b+c*Um(d);e.q=a;e.s=b;$t.r=e;}
function Fh($t,a,b){var c,d;c=$t.Vc;d=$t.r;c.q=c.q+a;c.s=c.s+b;d.q=d.q+a;d.s=d.s+b;}
function Kl($t){return $t.r;}
function Mi($t){return $t.Vc;}
function Ug($t){return $t.Vc.q;}
function Uj($t){return $t.Vc.s;}
function Gi($t,a){var b,c;if($t.Hb!==a){$t.Hb=a;b=new Sb;c=$t.Vc.q+$t.y*Dn(a);a=$t.Vc.s+$t.y*Um(a);b.q=c;b.s=a;$t.r=b;}}
function Fl($t,a){var b,c;if($t.y!==a){$t.y=a;b=new Sb;c=$t.Vc.q+a*Dn($t.Hb);a=$t.Vc.s+a*Um($t.Hb);b.q=c;b.s=a;$t.r=b;}}
function Bh($t){return $t.y;}
function Dl($t){return $t.Hb;}
function Jc(){E.call(this);}
function Fb(){E.call(this);}
function Gb(){E.call(this);}
function Pp(){var $r=new Gb();Xl($r);return $r;}
function Xl($t){}
function Og($t){return $t.F!=0?0:1;}
function Cc(){E.call(this);}
function Hb(){Gb.call(this);this.fb=0;}
function Qp(){var $r=new Hb();Kh($r);return $r;}
function Kh($t){}
function Mk($t,a){Bi($t,$t.F,a);return 1;}
function Lh($t){var a;a=new Xe;a.rb=$t;a.de=a.rb.fb;a.x=a.rb.F;a.jc= -1;return a;}
function Cb(){E.call(this);}
function Tc(){var a=this;Hb.call(a);a.cc=null;a.F=0;}
function Rp(){var $r=new Tc();Kj($r);return $r;}
function Sp(b){var $r=new Tc();Sg($r,b);return $r;}
function Kj($t){var a;a=10;$t.cc=Pn(E,a);}
function Sg($t,a){$t.cc=Pn(E,a);}
function Xj($t,a){var b,c;if($t.cc.data.length<a){if($t.cc.data.length>=1073741823){b=2147483647;}else{c=$t.cc.data.length*2|0;b=5;if(c>b){b=c;}if(a>b){b=a;}}$t.cc=Mm($t.cc,b);}}
function Gk($t,a){var b;if(a>=0&&a<$t.F){return $t.cc.data[a];}b=new Ob;b.Db=1;b.kd=1;Ln(b);}
function Uf($t){return $t.F;}
function Bi($t,a,b){var c;if(a>=0&&a<=$t.F){Xj($t,$t.F+1|0);c=$t.F;while(c>a){$t.cc.data[c]=$t.cc.data[c-1|0];c=c+ -1|0;}$t.cc.data[a]=b;$t.F=$t.F+1|0;$t.fb=$t.fb+1|0;return;}b=new Ob;b.Db=1;b.kd=1;Ln(b);}
function Gh($t,a){var b;if(a>=0&&a<$t.F){return;}b=new Ob;b.Db=1;b.kd=1;Ln(b);}
function Hl($t,a){var b;if(a>=0&&a<=$t.F){return;}b=new Ob;b.Db=1;b.kd=1;Ln(b);}
function Gc(){E.call(this);}
function Lc(){E.call(this);}
function Re(){E.call(this);}
function Dj($t,a,b){Tp($t,$rt_str(a),In(b,"handleEvent"));}
function Xi($t,a,b,c){Up($t,$rt_str(a),In(b,"handleEvent"),c?1:0);}
function Qi($t,a){return !!Vp($t,a);}
function Jk($t,a,b){Wp($t,$rt_str(a),In(b,"handleEvent"));}
function Qh($t,a){return Xp($t,a);}
function Yi($t){return Yp($t);}
function Yg($t,a,b,c){Zp($t,$rt_str(a),In(b,"handleEvent"),c?1:0);}
function We(){K.call(this);}
function Aq(){var $r=new We();Rf($r);return $r;}
function Rf($t){$t.Db=1;$t.kd=1;}
function Ab(){E.call(this);}
function Vb(){var a=this;E.call(a);a.o=null;a.U=0;}
var Bq=null;var Cq=null;function Vb_$callClinit(){Vb_$callClinit=function(){};
Qk();}
function B(b){var $r=new Vb();Yd($r,b);return $r;}
function Yd($t,a){var b,c;Vb_$callClinit();a=a.data;b=a.length;$t.o=$rt_createCharArray(b);c=0;while(c<b){$t.o.data[c]=a[c];c=c+1|0;}}
function Pl($t,a){var b;if(a>=0&&a<$t.o.data.length){return $t.o.data[a];}b=new Jd;b.Db=1;b.kd=1;Ln(b);}
function C($t){return $t.o.data.length;}
function Ti($t){return $t.o.data.length!=0?0:1;}
function D($t,a,b,c,d){var e,f,g;if(a>=0&&a<=b&&b<=$t.bc()&&d>=0){c=c.data;if((d+(b-a|0)|0)<=c.length){while(a<b){e=d+1|0;f=a+1|0;c[d]=$t.Mc(a);d=e;a=f;}return;}}g=new Ob;g.Db=1;g.kd=1;Ln(g);}
function Yl($t,a){var b,c;if($t===a){return 1;}if(a instanceof Vb==0){return 0;}b=a;if(b.o.data.length!=$t.o.data.length){return 0;}c=0;while(c<b.o.data.length){if(Pl($t,c)!=Pl(b,c)){return 0;}c=c+1|0;}return 1;}
function Cl($t){var a,b,c;if($t.U==0){a=$t.o.data;b=a.length;c=0;while(c<b){$t.U=(31*$t.U|0)+a[c]|0;c=c+1|0;}}return $t.U;}
function Wi(a){Vb_$callClinit();return a;}
function G($t){var a,b,c,d;a=Cq;if($t===null){a=Zk(a);}else{if($t.U==0){b=$t.o.data;c=b.length;d=0;while(d<c){$t.U=(31*$t.U|0)+b[d]|0;d=d+1|0;}}d=$t.U;a=Cj(a,$t,d&(a.Bb.data.length-1|0),d);}if(a===null){a=null;}else{a=a.Kc;}a=a;if(a!==null){$t=a;}else{Ik(Cq,$t,$t);}return $t;}
function Qk(){var a,b,c;a=new Vd;Bq=a;a=new Sd;b=16;c=0.75;b=Cm(b);a.jd=0;a.Bb=Pn(Md,b);a.ud=c;a.Fb=a.Bb.data.length*a.ud|0;Cq=a;}
function Hf(){K.call(this);}
function Dq(){var $r=new Hf();Fg($r);return $r;}
function Fg($t){$t.Db=1;$t.kd=1;}
function De(){K.call(this);}
function Eq(b){var $r=new De();Mf($r,b);return $r;}
function Mf($t,a){$t.Db=1;$t.kd=1;$t.hd=a;}
function Ac(){E.call(this);}
function W(){X.call(this);}
function Fq(b){var $r=new W();Sk($r,b);return $r;}
function Sk($t,a){$t.Db=1;$t.kd=1;$t.hd=a;}
function Me(){W.call(this);}
function Gq(b){var $r=new Me();Rj($r,b);return $r;}
function Rj($t,a){$t.Db=1;$t.kd=1;$t.hd=a;}
function Bb(){var a=this;E.call(a);a.gb=null;a.Nc=null;}
var Hq=null;function Bb_$callClinit(){Bb_$callClinit=function(){};
Zi();}
function Iq(b,c){var $r=new Bb();Be($r,b,c);return $r;}
function Be($t,a,b){var c,d,e;Bb_$callClinit();c=b.data;Uk(a);d=c.length;e=0;while(e<d){Uk(c[e]);e=e+1|0;}$t.gb=a;$t.Nc=b.rd();}
function Uk(a){var b,c,d;Bb_$callClinit();if((a.o.data.length!=0?0:1)!=0){b=new Ef;b.Db=1;b.kd=1;b.u=a;Ln(b);}if(Wk(Pl(a,0))==0){b=new Ef;b.Db=1;b.kd=1;b.u=a;Ln(b);}c=1;while(c<a.o.data.length){a:{d=Pl(a,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(Wk(d)!=0){break a;}else{b=new Ef;b.Db=1;b.kd=1;b.u=a;Ln(b);}}}c=c+1|0;}}
function Wk(a){Bb_$callClinit();return !(a>=48&&a<=57)&&!(a>=97&&a<=122)&&a<65&&a>90?0:1;}
function Zi(){var a,b,c,d,e,f,g,h,i;a=new Sd;b=16;c=0.75;b=Cm(b);a.jd=0;a.Bb=Pn(Md,b);a.ud=c;a.Fb=a.Bb.data.length*a.ud|0;Hq=a;d=Hq;e=Sn(1);a=new Ue;f=Sn(1);g=Pn(Vb,0);h=g.data;Uk(f);b=h.length;i=0;while(i<b){Uk(h[i]);i=i+1|0;}a.gb=f;a.Nc=g.rd();Ik(d,e,a);}
function Ue(){Bb.call(this);}
function Jq(){var $r=new Ue();Tg($r);return $r;}
function Tg($t){var a,b,c,d,e;a=Sn(1);b=Pn(Vb,0);c=b.data;Bb_$callClinit();Uk(a);d=c.length;e=0;while(e<d){Uk(c[e]);e=e+1|0;}$t.gb=a;$t.Nc=b.rd();}
function Qc(){E.call(this);}
function Xe(){var a=this;E.call(a);a.Ud=0;a.de=0;a.x=0;a.jc=0;a.rb=null;}
function Kq(b){var $r=new Xe();Ng($r,b);return $r;}
function Ng($t,a){$t.rb=a;a=$t.rb;$t.de=a.fb;$t.x=$t.rb.F;$t.jc= -1;}
function Ej($t){return $t.Ud>=$t.x?0:1;}
function Ek($t){var a,b,c;a=$t.de;b=$t.rb;if(a<b.fb){b=new Ge;b.Db=1;b.kd=1;Ln(b);}$t.jc=$t.Ud;b=$t.rb;c=$t.Ud;$t.Ud=c+1|0;if(c>=0&&c<b.F){return b.cc.data[c];}b=new Ob;b.Db=1;b.kd=1;Ln(b);}
function Ck($t){var a,b;a=$t.de;b=$t.rb;if(a>=b.fb){return;}b=new Ge;b.Db=1;b.kd=1;Ln(b);}
function Pc(){E.call(this);}
function Bf(){E.call(this);}
function Lm(a,b,c){a.setAttribute($rt_ustr(b),$rt_ustr(c));return a;}
function Ee(){var a=this;E.call(a);a.Zd=null;a.Wd=null;}
function Lq(b,c){var $r=new Ee();Wl($r,b,c);return $r;}
function Wl($t,a,b){$t.Zd=a;$t.Wd=b;}
function Pd($t){var a,b,$p,$z;$p=0;if(N()){var $T=J();$p=$T.l();b=$T.l();a=$T.l();$t=$T.l();}_:while(true){switch($p){case 0:a=$t.Zd;b=$t.Wd;$p=1;case 1:Gd(a,b);if(Rn()){break _;}return;default:L();}}J().s($t,a,b,$p);}
function Ld(){E.call(this);this.sb=null;}
function Mq(b){var $r=new Ld();Vk($r,b);return $r;}
function Vk($t,a){$t.sb=a;}
function Df($t){var a,$p,$z;$p=0;if(N()){var $T=J();$p=$T.l();a=$T.l();$t=$T.l();}_:while(true){switch($p){case 0:a=$t.sb;$p=1;case 1:Te(a);if(Rn()){break _;}return;default:L();}}J().s($t,a,$p);}
function Xd(){P.call(this);}
function Nq(b){var $r=new Xd();Vf($r,b);return $r;}
function Vf($t,a){$t.Db=1;$t.kd=1;$t.hd=a;}
function Ce(){E.call(this);}
function Sm(a,b){var c;if(a===null){a=new Dd;a.Db=1;a.kd=1;Ln(a);}c=On($rt_voidcls());if(a===c){a=new Pb;a.Db=1;a.kd=1;Ln(a);}if(b>=0){return Fm(a.hc,b);}a=new Hf;a.Db=1;a.kd=1;Ln(a);}
function Fm(a,b){if (a.$meta.primitive) {if (a == $rt_bytecls()) {return $rt_createByteArray(b);}if (a == $rt_shortcls()) {return $rt_createShortArray(b);}if (a == $rt_charcls()) {return $rt_createCharArray(b);}if (a == $rt_intcls()) {return $rt_createIntArray(b);}if (a == $rt_longcls()) {return $rt_createLongArray(b);}if (a == $rt_floatcls()) {return $rt_createFloatArray(b);}if (a == $rt_doublecls()) {return $rt_createDoubleArray(b);}if (a == $rt_booleancls()) {return $rt_createBooleanArray(b);}} else {return $rt_createArray(a, b)}}
function Pe(){E.call(this);this.Eb=null;}
function Oq(b,c,d,e){var $r=new Pe();Oj($r,b,c,d,e);return $r;}
function Oj($t,a,b,c,d){var e,f,g,h,i,j,k;e=new Tc;f=10;e.cc=Pn(E,f);$t.Eb=e;g=0.0;if(($t.Eb.F!=0?0:1)==0){e=new Pb;h=Sn(3);e.Db=1;e.kd=1;e.hd=h;Ln(e);}h=new Ud;e=null;i=new Ye;j=new Sb;j.q=a;j.s=b;i.Vc=j;i.y=c;i.Hb=g;j=new Sb;k=a+c*Dn(g);a=b+c*Um(g);j.q=k;j.s=a;i.r=j;h.db=i;h.Fd=d;h.ac=e;e=$t.Eb;Bi(e,e.F,h);}
function Jf($t,a,b,c,d,e){var f,g,h,i;if(($t.Eb.F!=0?0:1)==0){f=new Pb;g=Sn(3);f.Db=1;f.kd=1;f.hd=g;Ln(f);}h=new Ud;g=null;i=new Ye;f=new Sb;f.q=a;f.s=b;i.Vc=f;i.y=c;i.Hb=d;f=new Sb;a=a+c*Dn(d);b=b+c*Um(d);f.q=a;f.s=b;i.r=f;h.db=i;h.Fd=e;h.ac=g;f=$t.Eb;Bi(f,f.F,h);return h;}
function Pi($t){var a,b;a=$t.Eb;b=0;if(b<a.F){return Gg($t,a.cc.data[b].db.y,0.0);}a=new Ob;a.Db=1;a.kd=1;Ln(a);}
function Gg($t,a,b){var c,d,e,f,g,h,i,j;if(($t.Eb.F!=0?0:1)!=0){return Jf($t,0.0,0.0,a,b,1.0);}c=$t.Eb;d=$t.Eb.F-1|0;if(d>=0&&d<c.F){c=c.cc.data[d].db.r;e=new Ud;f=Pk($t);g=c.q;h=c.s;c=$t.Eb;d=0;if(d>=c.F){c=new Ob;c.Db=1;c.kd=1;Ln(c);}i=c.cc.data[d].Fd*Hn(1.02,$t.Eb.F);c=new Ye;j=new Sb;j.q=g;j.s=h;c.Vc=j;c.y=a;c.Hb=b;j=new Sb;g=g+a*Dn(b);a=h+a*Um(b);j.q=g;j.s=a;c.r=j;e.db=c;e.Fd=i;e.ac=f;c=$t.Eb;Bi(c,c.F,e);return e;}c=new Ob;c.Db=1;c.kd=1;Ln(c);}
function Oh($t){var a,b;if(($t.Eb.F!=0?0:1)!=0){a=null;}else{a=$t.Eb;b=0;if(b>=a.F){a=new Ob;a.Db=1;a.kd=1;Ln(a);}a=a.cc.data[b];}return a;}
function Pk($t){var a,b;a=$t.Eb.F!=0?0:1;a:{if(a!=0){b=null;}else{b=$t.Eb;a=$t.Eb.F-1|0;if(a<0){break a;}if(a>=b.F){break a;}b=b.cc.data[a];}return b;}b=new Ob;b.Db=1;b.kd=1;Ln(b);}
function Wg($t,a){var b,c,d,e,f;b=$t.Eb;c=0;d=b.fb;e=b.F;a:{while((c>=e?0:1)!=0){if(d<b.fb){a=new Ge;a.Db=1;a.kd=1;Ln(a);}f=c+1|0;if(c<0){break a;}if(c>=b.F){break a;}Aj(b.cc.data[c],a);c=f;}return;}a=new Ob;a.Db=1;a.kd=1;Ei(a);Ln(a);}
function Di($t,a){var b,c,d;if($t.Eb.F>0){if(($t.Eb.F!=0?0:1)!=0){b=null;}else{b=$t.Eb;c=$t.Eb.F-1|0;if(c>=0&&c<b.F){b=b.cc.data[c];}else{a=new Ob;a.Db=1;a.kd=1;Ei(a);Ln(a);}}if(b!==null){Mg(b,a);d=b.ac;a=b.db;if(d!==null){Mg(d,a);b=d.ac;a=d.db;if(b!==null){Mg(b,a);d=b.ac;a=b.db;if(d!==null){Mg(d,a);b=d.ac;a=d.db;if(b!==null){Mg(b,a);d=b.ac;a=b.db;if(d!==null){Mg(d,a);b=d.ac;a=d.db;if(b!==null){Mg(b,a);Fk($t,Ij(b),Qg(b));}}}}}}}}}
function Fk($t,a,b){var c;if(a===null){return;}Mg(a,b);b=a.ac;a=a.db;if(b!==null){Mg(b,a);c=b.ac;a=b.db;if(c!==null){Mg(c,a);b=c.ac;a=c.db;if(b!==null){Mg(b,a);c=b.ac;a=b.db;if(c!==null){Mg(c,a);b=c.ac;a=c.db;if(b!==null){Mg(b,a);c=b.ac;a=b.db;if(c!==null){Mg(c,a);b=c.ac;a=c.db;if(b!==null){Mg(b,a);Fk($t,Ij(b),Qg(b));}}}}}}}}
function Dd(){K.call(this);}
function F(){var $r=new Dd();Jj($r);return $r;}
function Jj($t){$t.Db=1;$t.kd=1;}
function Ed(){var a=this;E.call(a);a.Td=null;a.qb=0.0;a.Xc=0.0;a.dd=null;a.oc=false;}
function Pq(b,c){var $r=new Ed();Ll($r,b,c);return $r;}
function Ll($t,a,b){var c,d,e;a:{$t.oc=0;c=Ql($t,a,1);a=c.getContext("2d");$t.Td=a;Tl($t);a=new Tc;d=10;a.cc=Pn(E,d);$t.dd=a;Kg($t);Zb_$callClinit();switch(Uo.data[b.T]){case 1:break;case 2:a=new U;b=new Ld;b.sb=$t;U_$callClinit();c=null;a.ab=new E;a.Pb=c;a.Uc=b;e=Lo;Lo=Long_add(e,Long_fromInt(1));a.vb=e;b=new Le;b.ec=a;Rm(b);break a;case 3:Qj($t,c);break a;default:break a;}Rg($t,c);}}
function Qj($t,a){var b,c;b=Sn(4);c=new Zd;c.qc=$t;a.addEventListener($rt_ustr(b),Hm(c,"handleEvent"));}
function Ah($t){var a,b,c,d;a=new U;b=new Ld;b.sb=$t;U_$callClinit();c=null;a.ab=new E;a.Pb=c;a.Uc=b;d=Lo;Lo=Long_add(d,Long_fromInt(1));a.vb=d;b=new Le;b.ec=a;Rm(b);}
function Rg($t,a){var b,c;b=Sn(5);c=new Nd;c.O=$t;a.addEventListener($rt_ustr(b),Hm(c,"handleEvent"));}
function Zl(a){var b,c;b=new Ed;c=window.document;Y_$callClinit();Ll(b,c,Wo);}
function Ql($t,a,b){var c,d,e;if(b==0){a=new De;c=Sn(6);a.Db=1;a.kd=1;a.hd=c;Ln(a);}d=a.body;e=a.createElement("canvas");c=Sn(7);a=Sn(8);e.setAttribute($rt_ustr(c),$rt_ustr(a));c=e;a=window.innerWidth;c.width=a;a=window.innerHeight;c.height=a;$t.qb=c.width;$t.Xc=c.height;d.appendChild(c);return c;}
function Tl($t){var a,b,c,d,e,f;a=$t.Td;b="#2A363B";a.fillStyle=b;b=$t.Td;c=0.0;d=0.0;e=$t.qb;f=$t.Xc;b.fillRect(c,d,e,f);}
function Dk($t){var a,b;Tl($t);a=new Tc;b=10;a.cc=Pn(E,b);$t.dd=a;}
function Kg($t){var a,b,c,d,e,f,g,h,i,j,k,l;a=new Pe;b=$t.qb/2.0;c=$t.Xc/2.0;d=10.0;e=0.5;f=new Tc;g=10;f.cc=Pn(E,g);a.Eb=f;h=0.0;if((a.Eb.F!=0?0:1)==0){a=new Pb;f=Sn(3);a.Db=1;a.kd=1;a.hd=f;Ln(a);}i=new Ud;f=null;j=new Ye;k=new Sb;k.q=b;k.s=c;j.Vc=k;j.y=d;j.Hb=h;k=new Sb;b=b+d*Dn(h);c=c+d*Um(h);k.q=b;k.s=c;j.r=k;i.db=j;i.Fd=e;i.ac=f;f=a.Eb;Bi(f,f.F,i);g=0;while(g<120){f=a.Eb;l=0;if(l>=f.F){a=new Ob;a.Db=1;a.kd=1;Ei(a);Ln(a);}Gg(a,f.cc.data[l].db.y,0.0);g=g+1|0;}f=$t.dd;Bi(f,f.F,a);}
function Vl($t,a){var b,c,d,e,f,g,h,i;b=$t.dd;c=0;d=b.fb;e=b.F;a:{b:{while((c>=e?0:1)!=0){if(d<b.fb){a=new Ge;a.Db=1;a.kd=1;Ln(a);}f=c+1|0;if(c<0){break a;}if(c>=b.F){break a;}g=b.cc.data[c];if(g.Eb.F>0){if((g.Eb.F!=0?0:1)!=0){h=null;}else{h=g.Eb;c=g.Eb.F-1|0;if(c<0){break b;}if(c>=h.F){break b;}h=h.cc.data[c];}if(h!==null){Mg(h,a);i=h.ac;h=h.db;if(i!==null){Mg(i,h);h=i.ac;i=i.db;if(h!==null){Mg(h,i);i=h.ac;h=h.db;if(i!==null){Mg(i,h);h=i.ac;i=i.db;if(h!==null){Mg(h,i);i=h.ac;h=h.db;if(i!==null){Mg(i,h);Fk(g,
Ij(i),Qg(i));}}}}}}}c=f;}return;}a=new Ob;Lk(a);Ln(a);}a=new Ob;a.Db=1;a.kd=1;Ei(a);Ln(a);}
function Ai($t){var a,b,c,d,e;Tl($t);a=$t.dd;b=0;c=a.fb;d=a.F;a:{while((b>=d?0:1)!=0){if(c<a.fb){a=new Ge;a.Db=1;a.kd=1;Ln(a);}e=b+1|0;if(b<0){break a;}if(b>=a.F){break a;}Wg(a.cc.data[b],$t.Td);b=e;}return;}a=new Ob;a.Db=1;a.kd=1;Ei(a);Ln(a);}
function Xk($t,a){var b,c,d;b=new Sb;c=a.clientX;d=a.clientY;b.q=c;b.s=d;Vl($t,b);Ai($t);}
function Te($t){var a,b,c,d,e,f,g,$$je,$p,$z;$p=0;if(N()){var $T=J();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();$t=$T.l();}_:while(true){switch($p){case 0:try{a=100.0;b=1.0;c=1.0;d=Long_fromInt(1);$p=1;continue _;}catch($$e){$$je=$$e.$javaException;if($$je&&$$je instanceof Ie){}else {throw $$e;}}return;case 1:try{Uc(d);if(Rn()){break _;}e=$t.qb/2.0;f=b*a;g=c*a*a;Vl($t,Np(e+(f+Um(g))*Dn(a),$t.Xc/2.0+(f+Um(g))*Um(a)));a=a+0.006544984694978735;Ai($t);d=Long_fromInt(1);continue _;}
catch($$e){$$je=$$e.$javaException;if($$je&&$$je instanceof Ie){}else {throw $$e;}}return;default:L();}}J().s($t,a,b,c,d,e,f,g,$p);}
function Bl($t,a){var b,c,d;$t.oc=0;$t.oc=1;b=new U;c=new Ee;c.Zd=$t;c.Wd=a;U_$callClinit();a=null;b.ab=new E;b.Pb=a;b.Uc=c;d=Lo;Lo=Long_add(d,Long_fromInt(1));b.vb=d;a=new Le;a.ec=b;Rm(a);}
function Gd($t,a){var b,c,d,e,f,g,h,$$je,$p,$z;$p=0;if(N()){var $T=J();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();$t=$T.l();}_:while(true){switch($p){case 0:b=$t.dd;c=0;if(c>=b.F){a=new Ob;a.Db=1;a.kd=1;Ln(a);}b=b.cc.data[c];if((b.Eb.F!=0?0:1)!=0){b=null;}else{b=b.Eb;c=0;if(c>=b.F){a=new Ob;a.Db=1;a.kd=1;Ei(a);Ln(a);}b=b.cc.data[c];}d=b.db.Vc;b=new Sb;e=a.clientX;f=a.clientY;b.q=e;b.s=f;a:{b:{c:{try{if($t.oc!=0){break c;}}catch($$e){$$je=$$e.$javaException;if($$je&&$$je instanceof Ie)
{break b;}else {throw $$e;}}break a;}try{g=Long_fromInt(1);$p=1;continue _;}catch($$e){$$je=$$e.$javaException;if($$je&&$$je instanceof Ie){}else {throw $$e;}}}}return;case 1:d:{e:{try{Uc(g);if(Rn()){break _;}h=Jo(d,b);Fl(h,15.0);Vl($t,Kl(h));Ai($t);f:{try{if($t.oc!=0){break f;}}catch($$e){$$je=$$e.$javaException;if($$je&&$$je instanceof Ie){break e;}else {throw $$e;}}break d;}}catch($$e){$$je=$$e.$javaException;if($$je&&$$je instanceof Ie){break e;}else {throw $$e;}}try{g=Long_fromInt(1);continue _;}catch($$e)
{$$je=$$e.$javaException;if($$je&&$$je instanceof Ie){}else {throw $$e;}}}}return;default:L();}}J().s($t,a,b,c,d,e,f,g,h,$p);}
function Ff(){W.call(this);}
function Qq(b){var $r=new Ff();Ki($r,b);return $r;}
function Ki($t,a){$t.Db=1;$t.kd=1;$t.hd=a;}
function Rc(){E.call(this);}
function Wc(){E.call(this);this.Wc=null;}
function Rq(b){var $r=new Wc();Sl($r,b);return $r;}
function Sl($t,a){$t.Wc=a;}
function Am(a){var b;b=new Wc;b.Wc=a;return b;}
function Tj($t,a){$t.Wc.lc(a);}
function Ri($t,a){$t.Wc.I(a);}
function Ub(){var a=this;E.call(a);a.w=null;a.T=0;}
function Sq(b,c){var $r=new Ub();Ul($r,b,c);return $r;}
function Ul($t,a,b){$t.w=a;$t.T=b;}
function Wh($t){return $t.T;}
function Oe(){var a=this;E.call(a);a.Cd=null;a.Sd=null;a.Z=null;a.Rc=0;}
function Tq(){var $r=new Oe();Al($r);return $r;}
function Al($t){U_$callClinit();$t.Z=Un;$t.Cd=[];$t.Sd=[];}
function Oc(){E.call(this);}
function Ad(){E.call(this);}
function Um(a){return Math.sin(a);}
function Dn(a){return Math.cos(a);}
function Cn(a){return Math.sqrt(a);}
function Hn(a,b){return Math.pow(a,b);}
function Bm(a,b){return Math.atan2(a,b);}
function Bn(a,b){if(a<b){b=a;}return b;}
function Nm(a,b){if(a>b){b=a;}return b;}
function Qe(){E.call(this);}
function Hm(a,b){var name='jso$functor$'+b;if(!a[name]){var fn=function(){return a[b].apply(a,arguments);};a[name]=function(){return fn;};}return a[name]();}
function In(a,b){var result={};result[b]=a;return result;}
function Y(){Ub.call(this);}
var Wo=null;var Xo=null;var Yo=null;var Vo=null;function Y_$callClinit(){Y_$callClinit=function(){};
Rh();}
function Uq(b,c){var $r=new Y();Cf($r,b,c);return $r;}
function Hg(){Y_$callClinit();return Vo.rd();}
function Cf($t,a,b){Y_$callClinit();$t.w=a;$t.T=b;}
function Rh(){var a,b,c,d,e;a=new Y;b=Sn(9);c=0;a.w=b;a.T=c;Wo=a;a=new Y;b=Sn(10);c=1;a.w=b;a.T=c;Xo=a;a=new Y;b=Sn(11);c=2;a.w=b;a.T=c;Yo=a;d=Pn(Y,3);e=d.data;e[0]=Wo;e[1]=Xo;e[2]=Yo;Vo=d;}
function Qb(){var a=this;E.call(a);a.wd=null;a.Kc=null;}
function Vq(b,c){var $r=new Qb();Ok($r,b,c);return $r;}
function Ok($t,a,b){$t.wd=a;$t.Kc=b;}
function Md(){var a=this;Qb.call(a);a.Ac=0;a.nd=null;}
function Wq(b,c){var $r=new Md();Mh($r,b,c);return $r;}
function Mh($t,a,b){var c;c=null;$t.wd=a;$t.Kc=c;$t.Ac=b;}
function Le(){E.call(this);this.ec=null;}
function Xq(b){var $r=new Le();Li($r,b);return $r;}
function Li($t,a){$t.ec=a;}
function Xc($t){var a,b,$$je,$p,$z;$p=0;if(N()){var $T=J();$p=$T.l();b=$T.l();a=$T.l();$t=$T.l();}_:while(true){switch($p){case 0:a=$t.ec;try{Mo=Mo+1|0;I(a);$p=1;continue _;}catch($$e){$$je=$$e.$javaException;if($$je){a=$$je;}else {throw $$e;}}Mo=Mo-1|0;b=Ko;U_$callClinit();if(Un!==b){Un=b;}Un.L=Dg();Ln(a);case 1:a:{try{Gf(a);if(Rn()){break _;}}catch($$e){$$je=$$e.$javaException;if($$je){a=$$je;break a;}else {throw $$e;}}Mo=Mo-1|0;a=Ko;if(Un!==a){Un=a;}Un.L=Dg();return;}Mo=Mo-1|0;b=Ko;U_$callClinit();if(Un!==
b){Un=b;}Un.L=Dg();Ln(a);default:L();}}J().s($t,a,b,$p);}
function Lb(){E.call(this);}
function Yq(){var $r=new Lb();Zg($r);return $r;}
function Zg($t){}
function Zc(){Lb.call(this);}
function Zq(){var $r=new Zc();Xf($r);return $r;}
function Xf($t){}
function Nd(){E.call(this);this.O=null;}
function Ar(b){var $r=new Nd();Ui($r,b);return $r;}
function Ui($t,a){$t.O=a;}
function Of($t,a){var b,c,d,e;a=a;b=$t.O;c=new Sb;d=a.clientX;e=a.clientY;c.q=d;c.s=e;Vl(b,c);Ai(b);}
function Ph($t,a){var b,c,d,e;b=$t.O;c=new Sb;d=a.clientX;e=a.clientY;c.q=d;c.s=e;Vl(b,c);Ai(b);}
function Xg($t,a){var b,c,d,e;a=a;b=$t.O;c=new Sb;d=a.clientX;e=a.clientY;c.q=d;c.s=e;Vl(b,c);Ai(b);}
function Bd(){var a=this;E.call(a);a.Rd=null;a.Zb=null;a.Ld=false;a.Ec=0;}
function Br(b,c){var $r=new Bd();Dh($r,b,c);return $r;}
function Dh($t,a,b){$t.Rd=a;$t.Zb=b;}
function Td($t){var a,b;if($t.Ld==0){a=$t.Rd;b=null;U_$callClinit();a.jb=b;b=$t.Rd;if(Un!==b){Un=b;}Un.L=Dg();$t.Zb.Wc.lc(null);}}
function Rb(){E.call(this);}
function Cr(){var $r=new Rb();Sf($r);return $r;}
function Sf($t){}
function Sd(){var a=this;Rb.call(a);a.jd=0;a.Bb=null;a.Gc=0;a.ud=0.0;a.Fb=0;}
function Dr(){var $r=new Sd();Bg($r);return $r;}
function Er(b){var $r=new Sd();Eg($r,b);return $r;}
function Fr(b,c){var $r=new Sd();Ih($r,b,c);return $r;}
function Yk($t,a){return Pn(Md,a);}
function Bg($t){var a,b;a=16;b=0.75;a=Cm(a);$t.jd=0;$t.Bb=Pn(Md,a);$t.ud=b;$t.Fb=$t.Bb.data.length*$t.ud|0;}
function Eg($t,a){var b,c;b=0.75;if(a<0){c=new Pb;c.Db=1;c.kd=1;Ln(c);}a=Cm(a);$t.jd=0;$t.Bb=Pn(Md,a);$t.ud=b;$t.Fb=$t.Bb.data.length*$t.ud|0;}
function Cm(a){var b;if(a>=1073741824){return 1073741824;}if(a==0){return 16;}b=a-1|0;a=b|b>>1;a=a|a>>2;a=a|a>>4;a=a|a>>8;return (a|a>>16)+1|0;}
function Ih($t,a,b){var c;if(a>=0&&b>0.0){a=Cm(a);$t.jd=0;$t.Bb=Pn(Md,a);$t.ud=b;$t.Fb=$t.Bb.data.length*$t.ud|0;return;}c=new Pb;c.Db=1;c.kd=1;Ln(c);}
function Fj($t){$t.Fb=$t.Bb.data.length*$t.ud|0;}
function Gl($t,a){var b,c,d,e,f;if(a===null){b=Zk($t);}else{if(a.U==0){c=a.o.data;d=c.length;e=0;while(e<d){a.U=(31*a.U|0)+c[e]|0;e=e+1|0;}}f=a.U;b=Cj($t,a,f&($t.Bb.data.length-1|0),f);}if(b===null){return null;}return b.Kc;}
function Bj($t,a){var b,c,d,e,f;if(a===null){b=Zk($t);}else{if(a.U==0){c=a.o.data;d=c.length;e=0;while(e<d){a.U=(31*a.U|0)+c[e]|0;e=e+1|0;}}f=a.U;b=Cj($t,a,f&($t.Bb.data.length-1|0),f);}return b;}
function Cj($t,a,b,c){var d,e;d=$t.Bb.data[b];while(d!==null){if(d.Ac==c){e=d.wd;if((a!==e&&Yl(a,e)==0?0:1)!=0){break;}}d=d.nd;}return d;}
function Zk($t){var a;a=$t.Bb.data[0];while(a!==null){if(a.wd===null){break;}a=a.nd;}return a;}
function Hj($t,a,b){return Ik($t,a,b);}
function Ik($t,a,b){var c,d,e,f,g;if(a===null){c=Zk($t);if(c===null){$t.Gc=$t.Gc+1|0;d=null;e=0;f=0;c=new Md;a=null;c.wd=d;c.Kc=a;c.Ac=f;c.nd=$t.Bb.data[e];$t.Bb.data[e]=c;e=$t.jd+1|0;$t.jd=e;if(e>$t.Fb){Zj($t,$t.Bb.data.length);}}}else{if(a.U==0){g=a.o.data;e=g.length;f=0;while(f<e){a.U=(31*a.U|0)+g[f]|0;f=f+1|0;}}e=a.U;f=e&($t.Bb.data.length-1|0);c=Cj($t,a,f,e);if(c===null){$t.Gc=$t.Gc+1|0;c=new Md;d=null;c.wd=a;c.Kc=d;c.Ac=e;c.nd=$t.Bb.data[f];$t.Bb.data[f]=c;e=$t.jd+1|0;$t.jd=e;if(e>$t.Fb){Zj($t,$t.Bb.data.length);}}}d
=c.Kc;c.Kc=b;return d;}
function Ni($t,a,b,c){var d,e;d=new Md;e=null;d.wd=a;d.Kc=e;d.Ac=c;d.nd=$t.Bb.data[b];$t.Bb.data[b]=d;return d;}
function Zj($t,a){var b,c,d,e,f,g,h;b=Cm(a==0?1:a<<1);c=Pn(Md,b);d=c.data;e=0;b=b-1|0;while(e<$t.Bb.data.length){f=$t.Bb.data[e];$t.Bb.data[e]=null;while(f!==null){g=f.Ac&b;h=f.nd;f.nd=d[g];d[g]=f;f=h;}e=e+1|0;}$t.Bb=c;$t.Fb=$t.Bb.data.length*$t.ud|0;}
function Vj($t){Zj($t,$t.Bb.data.length);}
function Qm(a){var b,c,d;if(a.U==0){b=a.o.data;c=b.length;d=0;while(d<c){a.U=(31*a.U|0)+b[d]|0;d=d+1|0;}}return a.U;}
function Gn(a,b){return a!==b&&Yl(a,b)==0?0:1;}
function Kd(){E.call(this);}
function Im(a){var copy=new a.constructor();for(var field in a){if(!a.hasOwnProperty(field)){continue;}copy[field]=a[field];}return copy;}
function Rm(a){return window.setTimeout(function(){$rt_threadStarter(Rl)(a);},0);}
function Rl(a){var $p,$z;$p=0;if(N()){var $T=J();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:a.c();if(Rn()){break _;}return;default:L();}}J().s(a,$p);}
function Dm(a){Gm(a,0);}
function Gm(a,b){return window.setTimeout(function(){Rl(a);},b);}
function Pm(a){return a.$meta.item;}
function Pb(){K.call(this);}
function Gr(){var $r=new Pb();Hh($r);return $r;}
function Hr(b){var $r=new Pb();Nl($r,b);return $r;}
function Hh($t){$t.Db=1;$t.kd=1;}
function Nl($t,a){$t.Db=1;$t.kd=1;$t.hd=a;}
function Ef(){Pb.call(this);this.u=null;}
function Ir(b){var $r=new Ef();Gj($r,b);return $r;}
function Gj($t,a){$t.Db=1;$t.kd=1;$t.u=a;}
function Vc(){X.call(this);}
function Ke(){var a=this;Wb.call(a);a.tb=false;a.Y=null;a.Yd=null;a.id=null;}
function Jr(b,c){var $r=new Ke();Tk($r,b,c);return $r;}
function Tk($t,a,b){var c,d,e,f,g;$t.Od=a;a=new Fd;M_$callClinit();a.bb=$rt_createCharArray(16);$t.Y=a;$t.Yd=$rt_createCharArray(32);$t.tb=b;a=new Ue;c=Sn(1);d=Pn(Vb,0);e=d.data;Bb_$callClinit();Uk(c);f=e.length;g=0;while(g<f){Uk(e[g]);g=g+1|0;}a.gb=c;a.Nc=d.rd();$t.id=a;}
function Ve(){var a=this;E.call(a);a.S=null;a.R=null;a.Q=0;a.P=null;}
function Kr(b,c,d,e){var $r=new Ve();Lj($r,b,c,d,e);return $r;}
function Lj($t,a,b,c,d){$t.S=a;$t.R=b;$t.Q=c;$t.P=d;}
function Je($t){var a,b,c,d;a=$t.S;b=$t.R;c=$t.Q;d=$t.P;U_$callClinit();if(Un!==a){Un=a;}Un.L=Dg();b.Gb.Z=a;a=b.Gb;a.Rc=a.Rc+c|0;a=null;d.Wc.lc(a);}
function Ze(){R.call(this);}
function Lr(){var $r=new Ze();Th($r);return $r;}
function Th($t){}
function Ie(){P.call(this);}
function Fe(){E.call(this);this.hc=null;}
function Mr(b){var $r=new Fe();Xh($r,b);return $r;}
function Xh($t,a){var b;$t.hc=a;b=$t;a.classObject=b;}
function A(a){var b;if(a===null){return null;}b=a.classObject;if(b===null){b=new Fe;b.hc=a;a.classObject=b;}return b;}
function Wf($t){return $t.hc;}
function Pg($t){var a,b;a=$t.hc;b=a.$meta.item;if(b===null){a=null;}else{a=b.classObject;if(a===null){a=new Fe;a.hc=b;b.classObject=a;}}return a;}
function Fc(){E.call(this);}
function Vd(){E.call(this);}
function Nr(){var $r=new Vd();Ol($r);return $r;}
function Ol($t){}
$rt_metadata([E,"java.lang.Object",0,[],0,0,["Qc",function(){return Jl(this);},"a",function(){Eh(this);},"nc",function(){return Zf(this);},"rd",function(){return Nk(this);},"mc",function(){Fi(this);}],V,"java.lang.Throwable",E,[],0,0,["a",function(){Lk(this);},"b",function(b){Vh(this,b);},"sc",function(){return Ei(this);}],P,"java.lang.Exception",V,[],0,0,["a",function(){Ii(this);},"b",function(b){Vg(this,b);}],K,"java.lang.RuntimeException",P,[],0,0,["a",function(){Vi(this);},"b",function(b){Ag(this,b);}],Ob,
"java.lang.IndexOutOfBoundsException",K,[],0,0,["a",function(){Oi(this);}],Q,"org.teavm.jso.JSObject",E,[],0,0,[],Eb,"org.teavm.jso.dom.xml.Node",E,[Q],0,0,[],Bc,"org.teavm.jso.dom.xml.Document",E,[Eb],0,0,[],If,"java.util.Arrays",E,[],0,0,[],Mc,"java.lang.AutoCloseable",E,[],0,0,[],Tb,"java.io.Closeable",E,[Mc],0,0,[],Hc,"java.io.Flushable",E,[],0,0,[],R,"java.io.OutputStream",E,[Tb,Hc],0,0,["a",function(){Kf(this);}],Id,"java.lang.ConsoleOutputStreamStdout",R,[],0,0,["a",function(){Zh(this);}],Z,"java.lang.System",
E,[],0,Z_$callClinit,[],Yc,"java.lang.CloneNotSupportedException",P,[],0,0,["a",function(){Jh(this);}],Ud,"tyner.alex.game.components.Segment",E,[],0,0,["lb",function(b,c,d,e,f,g){Sj(this,b,c,d,e,f,g);},"Ib",function(){return Ij(this);},"ib",function(b){Nj(this,b);},"xb",function(){return Bk(this);},"C",function(b){Mg(this,b);},"fc",function(){return Qg(this);},"g",function(b){Aj(this,b);}],O,"org.teavm.jso.dom.events.EventTarget",E,[Q],0,0,[],Wd,"org.teavm.jso.dom.html.HTMLDocument",E,[Bc,O],0,0,[],Nc,"org.teavm.jso.dom.css.ElementCSSInlineStyle",
E,[Q],0,0,[],Db,"java.lang.Runnable",E,[],0,0,[],U,"java.lang.Thread",E,[Db],0,U_$callClinit,["b",function(b){Hd(this,b);},"hb",function(b){Rd(this,b);},"Nb",function(b,c){Se(this,b,c);},"Bd",function(){Ci(this);},"c",function(){Gf(this);},"W",function(){Ne(this);}],Dc,"java.util.Map",E,[],0,0,[],Ec,"org.teavm.jso.dom.events.WheelEventTarget",E,[O],0,0,[],Qd,"org.teavm.platform.PlatformQueue",E,[Q],0,0,[],Jb,"java.lang.CharSequence",E,[],0,0,[],Kb,"java.lang.Error",V,[],0,0,["b",function(b){Lf(this,b);}],X,
"java.lang.LinkageError",Kb,[],0,0,["b",function(b){Uh(this,b);}],Xb,"org.teavm.jso.dom.events.LoadEventTarget",E,[O],0,0,[],Jd,"java.lang.StringIndexOutOfBoundsException",Ob,[],0,0,["a",function(){Si(this);}],Wb,"java.io.FilterOutputStream",R,[],0,0,["Gd",function(b){Hi(this,b);}],T,"java.io.Serializable",E,[],0,0,[],Zb,"tyner.alex.game.ui.Main$1",E,[],0,Zb_$callClinit,[],S,"org.teavm.platform.PlatformRunnable",E,[],0,0,[],Af,"$$LAMBDA6$$",E,[S],0,0,["Fc",function(b){Yf(this,b);},"c",function(){He(this);}],M,
"java.lang.AbstractStringBuilder",E,[T,Jb],0,M_$callClinit,["a",function(){Cd(this);},"d",function(b){Ae(this,b);}],Sc,"java.lang.Appendable",E,[],0,0,[],Fd,"java.lang.StringBuilder",M,[Sc],0,0,["a",function(){Yh(this);}],Od,"java.lang.Object$NotifyListener",E,[S],0,0,[],Nb,"org.teavm.jso.dom.events.EventListener",E,[Q],0,0,[],Zd,"$$LAMBDA2$$",E,[Nb],0,0,["e",function(b){Jg(this,b);},"j",function(b){Sh(this,b);},"h",function(b){Rk(this,b);},"m",function(b){return Il(this,b);}],Ge,"java.util.ConcurrentModificationException",
K,[],0,0,["a",function(){Ak(this);}],Ic,"java.lang.reflect.AnnotatedElement",E,[],0,0,[],Yb,"org.teavm.jso.dom.events.FocusEventTarget",E,[O],0,0,[],Mb,"org.teavm.jso.dom.events.MouseEventTarget",E,[O],0,0,[],Ib,"org.teavm.jso.dom.events.KeyboardEventTarget",E,[O],0,0,[],Kc,"org.teavm.jso.browser.WindowEventTarget",E,[O,Yb,Mb,Ib,Xb],0,0,[],Sb,"tyner.alex.game.util.Point",E,[],0,0,["a",function(){Ig(this);},"wc",function(b,c){Ml(this,b,c);},"i",function(){return Ji(this);},"k",function(){return Qf(this);},"Oc",
function(b){Wj(this,b);},"uc",function(b){Ch(this,b);}],Ye,"tyner.alex.game.util.Vector",Sb,[],0,0,["Ad",function(b,c){Tf(this,b,c);},"l",function(b,c,d,e){Nh(this,b,c,d,e);},"Dc",function(b,c){Fh(this,b,c);},"z",function(){return Kl(this);},"Cc",function(){return Mi(this);},"i",function(){return Ug(this);},"k",function(){return Uj(this);},"ce",function(b){Gi(this,b);},"kb",function(b){Fl(this,b);},"ed",function(){return Bh(this);},"cd",function(){return Dl(this);}],Jc,"java.lang.Iterable",E,[],0,0,[],Fb,"java.util.Collection",
E,[Jc],0,0,[],Gb,"java.util.AbstractCollection",E,[Fb],0,0,["a",function(){Xl(this);},"n",function(){return Og(this);}],Cc,"java.util.List",E,[Fb],0,0,[],Hb,"java.util.AbstractList",Gb,[Cc],0,0,["a",function(){Kh(this);},"ld",function(b){return Mk(this,b);},"qd",function(){return Lh(this);}],Cb,"java.lang.Cloneable",E,[],0,0,[],Tc,"java.util.ArrayList",Hb,[Cb,T],0,0,["a",function(){Kj(this);},"d",function(b){Sg(this,b);},"Yb",function(b){Xj(this,b);},"Bc",function(b){return Gk(this,b);},"B",function(){return Uf(this);
},"fd",function(b,c){Bi(this,b,c);},"kc",function(b){Gh(this,b);},"bd",function(b){Hl(this,b);}],Gc,"org.teavm.jso.browser.StorageProvider",E,[],0,0,[],Lc,"org.teavm.jso.core.JSArrayReader",E,[Q],0,0,[],Re,"org.teavm.jso.browser.Window",E,[Q,Kc,Gc,Lc],0,0,["zc",function(b,c){return Dj(this,b,c);},"Qb",function(b,c,d){return Xi(this,b,c,d);},"Xb",function(b){return Qi(this,b);},"yc",function(b,c){return Jk(this,b,c);},"Ob",function(b){return Qh(this,b);},"Id",function(){return Yi(this);},"Sb",function(b,c,d)
{return Yg(this,b,c,d);}],We,"java.lang.IllegalMonitorStateException",K,[],0,0,["a",function(){Rf(this);}],Ab,"java.lang.Comparable",E,[],0,0,[],Vb,"java.lang.String",E,[T,Ab,Jb],0,Vb_$callClinit,["ub",function(b){Yd(this,b);},"Mc",function(b){return Pl(this,b);},"bc",function(){return C(this);},"n",function(){return Ti(this);},"Nd",function(b,c,d,e){D(this,b,c,d,e);},"Dd",function(b){return Yl(this,b);},"V",function(){return Cl(this);},"D",function(){return G(this);}],Hf,"java.lang.NegativeArraySizeException",
K,[],0,0,["a",function(){Fg(this);}],De,"java.lang.UnsupportedOperationException",K,[],0,0,["b",function(b){Mf(this,b);}],Ac,"java.util.Map$Entry",E,[],0,0,[],W,"java.lang.IncompatibleClassChangeError",X,[],0,0,["b",function(b){Sk(this,b);}],Me,"java.lang.NoSuchMethodError",W,[],0,0,["b",function(b){Rj(this,b);}],Bb,"java.nio.charset.Charset",E,[Ab],0,Bb_$callClinit,["md",function(b,c){Be(this,b,c);}],Ue,"java.nio.charset.impl.UTF8Charset",Bb,[],0,0,["a",function(){Tg(this);}],Qc,"java.util.Iterator",E,[],0,
0,[],Xe,"java.util.AbstractList$1",E,[Qc],0,0,["gd",function(b){Ng(this,b);},"Hd",function(){return Ej(this);},"nb",function(){return Ek(this);},"N",function(){Ck(this);}],Pc,"org.teavm.jso.dom.xml.Element",E,[Eb],0,0,[],Bf,"org.teavm.jso.dom.html.HTMLElement",E,[Pc,Nc,O,Yb,Mb,Ec,Ib,Xb],0,0,[],Ee,"$$LAMBDA5$$",E,[Db],0,0,["Lc",function(b,c){Wl(this,b,c);},"c",function(){Pd(this);}],Ld,"$$LAMBDA1$$",E,[Db],0,0,["e",function(b){Vk(this,b);},"c",function(){Df(this);}],Xd,"java.lang.IllegalStateException",P,[],
0,0,["b",function(b){Vf(this,b);}],Ce,"java.lang.reflect.Array",E,[],0,0,[],Pe,"tyner.alex.game.components.Branch",E,[],0,0,["l",function(b,c,d,e){Oj(this,b,c,d,e);},"Tb",function(b,c,d,e,f){return Jf(this,b,c,d,e,f);},"yd",function(){return Pi(this);},"Ub",function(b,c){return Gg(this,b,c);},"H",function(){return Oh(this);},"xc",function(){return Pk(this);},"g",function(b){Wg(this,b);},"Yc",function(b){Di(this,b);},"Vb",function(b,c){Fk(this,b,c);}],Dd,"java.lang.NullPointerException",K,[],0,0,["a",function()
{Jj(this);}],Ed,"tyner.alex.game.ui.Main",E,[],0,0,["be",function(b,c){Ll(this,b,c);},"od",function(b){Qj(this,b);},"Vd",function(){Ah(this);},"zb",function(b){Rg(this,b);},"td",function(b,c){return Ql(this,b,c);},"E",function(){Tl(this);},"v",function(){Dk(this);},"J",function(){Kg(this);},"ob",function(b){Vl(this,b);},"A",function(){Ai(this);},"ee",function(b){Xk(this,b);},"t",function(){Te(this);},"Pd",function(b){Bl(this,b);},"K",function(b){Gd(this,b);}],Ff,"java.lang.NoSuchFieldError",W,[],0,0,["b",function(b)
{Ki(this,b);}],Rc,"org.teavm.platform.async.AsyncCallback",E,[],0,0,[],Wc,"org.teavm.platform.plugin.AsyncCallbackWrapper",E,[Rc],0,0,["Qd",function(b){Sl(this,b);},"lc",function(b){Tj(this,b);},"I",function(b){Ri(this,b);}],Ub,"java.lang.Enum",E,[Ab,T],0,0,["f",function(b,c){Ul(this,b,c);},"Rb",function(){return Wh(this);}],Oe,"java.lang.Object$Monitor",E,[],0,0,["a",function(){Al(this);}],Oc,"java.lang.ThreadInterruptHandler",E,[],0,0,[],Ad,"java.lang.Math",E,[],0,0,[],Qe,"org.teavm.jso.impl.JS",E,[],0,0,
[],Y,"tyner.alex.game.ui.Main$motion",Ub,[],1,Y_$callClinit,["f",function(b,c){Cf(this,b,c);}],Qb,"java.util.MapEntry",E,[Ac,Cb],0,0,["sd",function(b,c){Ok(this,b,c);}],Md,"java.util.HashMap$HashEntry",Qb,[],0,0,["Cb",function(b,c){Mh(this,b,c);}],Le,"$$LAMBDA4$$",E,[S],0,0,["M",function(b){Li(this,b);},"c",function(){Xc(this);}],Lb,"java.io.InputStream",E,[Tb],0,0,["a",function(){Zg(this);}],Zc,"java.lang.ConsoleInputStream",Lb,[],0,0,["a",function(){Xf(this);}],Nd,"$$LAMBDA0$$",E,[Nb],0,0,["e",function(b)
{Ui(this,b);},"j",function(b){Of(this,b);},"h",function(b){Ph(this,b);},"m",function(b){return Xg(this,b);}],Bd,"java.lang.Thread$SleepHandler",E,[S,Oc],0,0,["Jc",function(b,c){Dh(this,b,c);},"c",function(){Td(this);}],Rb,"java.util.AbstractMap",E,[Dc],0,0,["a",function(){Sf(this);}],Sd,"java.util.HashMap",Rb,[Cb,T],0,0,["Lb",function(b){return Yk(this,b);},"a",function(){Bg(this);},"d",function(b){Eg(this,b);},"X",function(b,c){Ih(this,b,c);},"Kb",function(){Fj(this);},"Xd",function(b){return Gl(this,b);},
"ae",function(b){return Bj(this,b);},"cb",function(b,c,d){return Cj(this,b,c,d);},"rc",function(){return Zk(this);},"Ed",function(b,c){return Hj(this,b,c);},"Jb",function(b,c){return Ik(this,b,c);},"zd",function(b,c,d){return Ni(this,b,c,d);},"pc",function(b){Zj(this,b);},"xd",function(){Vj(this);}],Kd,"org.teavm.platform.Platform",E,[],0,0,[],Pb,"java.lang.IllegalArgumentException",K,[],0,0,["a",function(){Hh(this);},"b",function(b){Nl(this,b);}],Ef,"java.nio.charset.IllegalCharsetNameException",Pb,[],0,0,
["b",function(b){Gj(this,b);}],Vc,"java.lang.NoClassDefFoundError",X,[],0,0,[],Ke,"java.io.PrintStream",Wb,[],0,0,["fe",function(b,c){Tk(this,b,c);}],Ve,"$$LAMBDA7$$",E,[S],0,0,["Tc",function(b,c,d,e){Lj(this,b,c,d,e);},"c",function(){Je(this);}],Ze,"java.lang.ConsoleOutputStreamStderr",R,[],0,0,["a",function(){Th(this);}],Ie,"java.lang.InterruptedException",P,[],0,0,[],Fe,"java.lang.Class",E,[Ic],0,0,["Ab",function(b){Xh(this,b);},"Wb",function(){return Wf(this);},"Jd",function(){return Pg(this);}],Fc,"java.util.Comparator",
E,[],0,0,[],Vd,"$$LAMBDA3$$",E,[Fc],0,0,["a",function(){Ol(this);}]]);
$rt_stringPool(["Can\'t enter monitor from another thread synchronously","UTF-8","main","Branch already has a root.","click","mousemove","Only support for fullscreen canvases is implemented.","id","canvas","FOLLOW_MOUSE","FOLLOW_EQUATIONS","FOLLOW_CLICKS"]);
var main=Zl;
(function(){var c;c=Zd.prototype;c.handleEvent=c.m;c=Re.prototype;c.removeEventListener=c.zc;c.removeEventListener=c.Qb;c.dispatchEvent=c.Xb;c.getLength=c.Id;c.addEventListener=c.yc;c.get=c.Ob;c.addEventListener=c.Sb;c=Nd.prototype;c.handleEvent=c.m;})();
main = $rt_mainStarter(main);
