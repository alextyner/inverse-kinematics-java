"use strict";
function $rt_cls(cls){return A(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return B(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var result = "";var sz = C(str);var array = $rt_createCharArray(sz);D(str, 0, sz, array, 0);for (var i = 0; i < sz; i = (i + 1) | 0) {result += String.fromCharCode(array.data[i]);}return result;}
function $rt_objcls() { return E; }
function $rt_nullCheck(val) {if (val === null) {$rt_throw(F());}return val;}
function $rt_intern(str) {return G(str);}
function $rt_getThread(){return H();}
function $rt_setThread(t){return I(t);}
var Im=$rt_throw;var Jm=$rt_compare;var Km=$rt_nullCheck;var Lm=$rt_cls;var Mm=$rt_createArray;var Nm=$rt_isInstance;var J=$rt_nativeThread;var Om=$rt_suspending;var P=$rt_resuming;var O=$rt_invalidPointer;var Pm=$rt_s;
function E(){this.pb=null;this.$id$=0;}
function Qm(){var $r=new E();Og($r);return $r;}
function Cm(a){var b;if(a.pb===null){a.pb=Rm();}b=a.pb;if(b.J===null){a.pb.J=H();}else if(a.pb.J!==H()){Im(Sm(Pm(0)));}a=a.pb;a.xc=a.xc+1|0;}
function Tl(a){var b,c;if(Ik(a)==0){b=a.pb;if(b.J===H()){b=a.pb;c=b.xc-1|0;b.xc=c;if(c==0){a.pb.J=null;}Ik(a);return;}}Im(Tm());}
function Ff(a){var b,$p,$z;$p=0;if(P()){var $T=J();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=1;$p=1;case 1:Fk(a,b);if(Om()){break _;}return;default:O();}}J().s(a,b,$p);}
function Fk(a,b){var c,$p,$z;$p=0;if(P()){var $T=J();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.pb===null){a.pb=Rm();}c=a.pb;if(c.J===null){a.pb.J=H();}if(a.pb.J===H()){a=a.pb;a.xc=a.xc+b|0;return;}$p=1;case 1:Ri(a,b);if(Om()){break _;}return;default:O();}}J().s(a,b,c,$p);}
function Ri(a,b){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Vb=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.y=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=Xk(callback);return thread.suspend(function(){try{Sl(a,b,callback);}catch($e){callback.y($rt_exception($e));}});}
function Sl(a,b,c){var d,e;d=H();if(a.pb===null){a.pb=Rm();I(d);a=a.pb;a.xc=a.xc+b|0;Wi(c,null);return;}e=a.pb;if(e.J!==null){Fl(a.pb.hd,Um(d,a,b,c));return;}a.pb.J=d;I(d);a=a.pb;a.xc=a.xc+b|0;Wi(c,null);}
function Bl(a){Kl(a,1);}
function Kl(a,b){var c;if(Ik(a)==0){c=a.pb;if(c.J===H()){c=a.pb;c.xc=c.xc-b|0;if(a.pb.xc>0){return;}a.pb.J=null;if(Bm(a.pb.hd)!=0){Ik(a);}else{Al(Vm(a));}return;}}Im(Tm());}
function Ik($t){var a;if($t.pb===null){return 1;}a=$t.pb;if(a.J===null&&Bm($t.pb.hd)!=0&&Bm($t.pb.xd)!=0){$t.pb=null;return 1;}return 0;}
function Hm(a){var b;a:{if(a.pb!==null){a=a.pb;if(a.J===H()){b=1;break a;}}b=0;}return b;}
function Og($t){return;}
function Of($t){return A($t.constructor);}
function Qj($t){var a,b,c;if(Nm($t,Ab)==0&&$t.constructor.$meta.item===null){Im(Wm());}a=El($t);b=a;c=$rt_nextId();b.$id$=c;return a;}
function Mh($t){var a,b;if(Hm($t)==0){Im(Tm());}a=$t.pb;a=a.xd;while(Bm(a)==0){b=Gm(a);if(b.Sd()==0){Al(b);}}}
function Rl(a){return a;}
function Wl(a){var b;if(Ik(a)==0){b=a.pb;if(b.J===null){if(Bm(a.pb.hd)==0){Tc(Gm(a.pb.hd));}return;}}}
function Gl(a,b,c,d){I(a);b.pb.J=a;a=b.pb;a.xc=a.xc+c|0;Wi(d,null);}
function V(){var a=this;E.call(a);a.Mc=null;a.lb=false;a.Qc=false;}
function Xm(){var $r=new V();Oj($r);return $r;}
function Ym(b){var $r=new V();Dh($r,b);return $r;}
function Oj($t){$t.lb=1;$t.Qc=1;Lh($t);}
function Dh($t,a){$t.lb=1;$t.Qc=1;Lh($t);$t.Mc=a;}
function Lh($t){return $t;}
function N(){V.call(this);}
function Zm(){var $r=new N();Qh($r);return $r;}
function An(b){var $r=new N();Hg($r,b);return $r;}
function Qh($t){Oj($t);}
function Hg($t,a){Dh($t,a);}
function K(){N.call(this);}
function Bn(){var $r=new K();Bi($r);return $r;}
function Cn(b){var $r=new K();Pf($r,b);return $r;}
function Bi($t){Qh($t);}
function Pf($t,a){Hg($t,a);}
function Lb(){K.call(this);}
function Dn(){var $r=new Lb();Vh($r);return $r;}
function Vh($t){Bi($t);}
function Q(){E.call(this);}
function Vl(a){return a;}
function Bb(){E.call(this);}
function Xb(){E.call(this);}
function Ze(){E.call(this);}
function Il(a,b){var c,d,e,f;c=a.data;d=Ol(Cg(Of(a)),b);e=Xl(b,c.length);f=0;while(f<e){d.data[f]=c[f];f=f+1|0;}return d;}
function Ic(){E.call(this);}
function Qb(){E.call(this);}
function Dc(){E.call(this);}
function R(){E.call(this);}
function En(){var $r=new R();Bf($r);return $r;}
function Bf($t){Og($t);}
function Fd(){R.call(this);}
function Fn(){var $r=new Fd();Gh($r);return $r;}
function Gh($t){Bf($t);}
function Y(){E.call(this);}
var Gn=null;var Hn=null;var In=null;function Y_$callClinit(){Y_$callClinit=function(){};
Ti();}
function Sf(){return Long_fromNumber(new Date().getTime());}
function Ti(){Gn=Jn(Fn(),0);Hn=Jn(Kn(),0);In=Ln();}
function Uc(){N.call(this);}
function Wm(){var $r=new Uc();Tg($r);return $r;}
function Tg($t){Qh($t);}
function Qd(){var a=this;E.call(a);a.kd=0.0;a.N=null;a.Ib=null;}
function Mn(b,c,d,e,f,g){var $r=new Qd();Vi($r,b,c,d,e,f,g);return $r;}
function Vi($t,a,b,c,d,e,f){Og($t);$t.N=Nn(b,c,d,e);Si($t,f);$t.Ib=a;}
function Oi($t){return $t.Ib;}
function Si($t,a){$t.kd=a;}
function Fj($t){return $t.kd;}
function Yf($t,a){var b,c,d;b=On($t.N,a);Nh($t.N,Dk(b));c=a.f()-Rh(Jk($t.N));d=a.g()-Gf(Jk($t.N));Pg($t.N,c,d);}
function Dg($t){return $t.N;}
function Gi($t,a){var b,c,d;b="#FFFFFF";a.strokeStyle=b;b=$t.kd;a.lineWidth=b;a.beginPath();c=Rh(Th($t.N));d=Gf(Th($t.N));a.moveTo(c,d);c=Rh(Jk($t.N));d=Gf(Jk($t.N));a.lineTo(c,d);a.stroke();}
function M(){E.call(this);}
function Sd(){E.call(this);}
function Ul(){return window.document;}
function Jc(){E.call(this);}
function Vb(){E.call(this);}
function U(){var a=this;E.call(a);a.db=Long_ZERO;a.A=Long_ZERO;a.K=null;a.T=null;a.yb=null;a.Ac=null;}
var Pn=null;var Qn=null;var Rn=Long_ZERO;var Sn=0;function U_$callClinit(){U_$callClinit=function(){};
Ef();}
function Tn(b){var $r=new U();Ed($r,b);return $r;}
function Un(b){var $r=new U();Nd($r,b);return $r;}
function Vn(b,c){var $r=new U();Oe($r,b,c);return $r;}
function Ed($t,a){U_$callClinit();Oe($t,null,a);}
function Nd($t,a){U_$callClinit();Oe($t,a,null);}
function Oe($t,a,b){var c;U_$callClinit();Og($t);$t.K=Qm();$t.yb=b;$t.Ac=a;c=Rn;Rn=Long_add(c,Long_fromInt(1));$t.db=c;}
function Jh($t){Nl(Wn($t));}
function I(a){U_$callClinit();if(Qn!==a){Qn=a;}Qn.A=Sf();}
function Cj(){U_$callClinit();return Pn;}
function Xe($t){var a,b,$$je,$p,$z;$p=0;if(P()){var $T=J();$p=$T.l();b=$T.l();a=$T.l();$t=$T.l();}_:while(true){switch($p){case 0:if($t.Ac===null){a=$t.K;$p=1;continue _;}a=$t.Ac;$p=2;continue _;case 1:Ff(a);if(Om()){break _;}a:{try{Mh($t.K);Bl(a);}catch($$e){$$je=$$e.$javaException;if($$je){b=$$je;break a;}else {throw $$e;}}return;}Bl(a);Im(b);case 2:Vc(a);if(Om()){break _;}a=$t.K;$p=1;continue _;default:O();}}J().s($t,a,b,$p);}
function H(){U_$callClinit();return Qn;}
function Qc(a){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Vb=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.y=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=Xk(callback);return thread.suspend(function(){try{Nj(a,callback);}catch($e){callback.y($rt_exception($e));}});}
function Nj(a,b){var c,d,e;U_$callClinit();c=H();d=Long_ge(a,Long_fromInt(2147483647))?2147483647:a.lo;e=Xn(c,b);e.nc=Dl(e,d);c.T=e;}
function Ie($t){var a,$$je,$p,$z;$p=0;if(P()){var $T=J();$p=$T.l();a=$T.l();$t=$T.l();}_:while(true){switch($p){case 0:try{Sn=Sn+1|0;I($t);$p=1;continue _;}catch($$e){$$je=$$e.$javaException;if($$je){a=$$je;}else {throw $$e;}}Sn=Sn-1|0;I(Pn);Im(a);case 1:a:{try{Xe($t);if(Om()){break _;}}catch($$e){$$je=$$e.$javaException;if($$je){a=$$je;break a;}else {throw $$e;}}Sn=Sn-1|0;I(Pn);return;}Sn=Sn-1|0;I(Pn);Im(a);default:O();}}J().s($t,a,$p);}
function Rf(a,b){U_$callClinit();a.T=b;return b;}
function Ef(){Pn=Tn(Ci(Pm(1)));Qn=Pn;Rn=Long_fromInt(1);Sn=1;}
function Zb(){E.call(this);}
function Ac(){E.call(this);}
function Md(){E.call(this);}
function Pl(a){return a;}
function Bm(a){return a.length!=0?0:1;}
function Fl(a,b){b=Pl(b);a.push(b);}
function Gm(a){return a.shift();}
function Gb(){E.call(this);}
function Hb(){V.call(this);}
function Yn(b){var $r=new Hb();Cf($r,b);return $r;}
function Cf($t,a){Dh($t,a);}
function X(){Hb.call(this);}
function Zn(b){var $r=new X();Ch($r,b);return $r;}
function Ch($t,a){Cf($t,a);}
function Tb(){E.call(this);}
function Gd(){Lb.call(this);}
function Ao(){var $r=new Gd();Yh($r);return $r;}
function Yh($t){Vh($t);}
function Sb(){R.call(this);this.td=null;}
function Bo(b){var $r=new Sb();Oh($r,b);return $r;}
function Oh($t,a){Bf($t);$t.td=a;}
function T(){E.call(this);}
function L(){E.call(this);this.L=null;}
var Co=null;var Do=null;var Eo=null;var Fo=null;var Go=null;var Ho=null;var Io=null;function L_$callClinit(){L_$callClinit=function(){};
Xf();}
function Jo(){var $r=new L();Ad($r);return $r;}
function Ko(b){var $r=new L();Yd($r,b);return $r;}
function Ad($t){L_$callClinit();Yd($t,16);}
function Yd($t,a){L_$callClinit();Og($t);$t.L=$rt_createCharArray(a);}
function Xf(){var a,b,c,d,e,f,g,h;a=$rt_createFloatArray(6);b=a.data;b[0]=10.0;b[1]=100.0;b[2]=10000.0;b[3]=1.0E8;b[4]=1.00000003E16;b[5]=1.0E32;Co=a;c=$rt_createDoubleArray(9);d=c.data;d[0]=10.0;d[1]=100.0;d[2]=10000.0;d[3]=1.0E8;d[4]=1.0E16;d[5]=1.0E32;d[6]=1.0E64;d[7]=1.0E128;d[8]=1.0E256;Do=c;a=$rt_createFloatArray(6);b=a.data;b[0]=0.1;b[1]=0.01;b[2]=1.0E-4;b[3]=1.0E-8;b[4]=1.0E-16;b[5]=1.0E-32;Eo=a;c=$rt_createDoubleArray(9);d=c.data;d[0]=0.1;d[1]=0.01;d[2]=1.0E-4;d[3]=1.0E-8;d[4]=1.0E-16;d[5]=1.0E-32;d[6]
=1.0E-64;d[7]=1.0E-128;d[8]=1.0E-256;Fo=c;e=$rt_createIntArray(10);f=e.data;f[0]=1;f[1]=10;f[2]=100;f[3]=1000;f[4]=10000;f[5]=100000;f[6]=1000000;f[7]=10000000;f[8]=100000000;f[9]=1000000000;Go=e;g=$rt_createLongArray(19);h=g.data;h[0]=Long_fromInt(1);h[1]=Long_fromInt(10);h[2]=Long_fromInt(100);h[3]=Long_fromInt(1000);h[4]=Long_fromInt(10000);h[5]=Long_fromInt(100000);h[6]=Long_fromInt(1000000);h[7]=Long_fromInt(10000000);h[8]=Long_fromInt(100000000);h[9]=Long_fromInt(1000000000);h[10]=new Long(1410065408, 2);h[11]
=new Long(1215752192, 23);h[12]=new Long(3567587328, 232);h[13]=new Long(1316134912, 2328);h[14]=new Long(276447232, 23283);h[15]=new Long(2764472320, 232830);h[16]=new Long(1874919424, 2328306);h[17]=new Long(1569325056, 23283064);h[18]=new Long(2808348672, 232830643);Ho=g;g=$rt_createLongArray(6);h=g.data;h[0]=Long_fromInt(1);h[1]=Long_fromInt(10);h[2]=Long_fromInt(100);h[3]=Long_fromInt(10000);h[4]=Long_fromInt(100000000);h[5]=new Long(1874919424, 2328306);Io=g;}
function Oc(){E.call(this);}
function Dd(){L.call(this);}
function Lo(){var $r=new Dd();Fh($r);return $r;}
function Fh($t){Ad($t);}
function S(){E.call(this);}
function Ld(){E.call(this);}
function Wd(){E.call(this);this.Zb=null;}
function Wn(b){var $r=new Wd();Nk($r,b);return $r;}
function Nk($t,a){Og($t);$t.Zb=a;}
function Td($t){var a,$p,$z;$p=0;if(P()){var $T=J();$p=$T.l();a=$T.l();$t=$T.l();}_:while(true){switch($p){case 0:a=$t.Zb;$p=1;case 1:Ie(a);if(Om()){break _;}return;default:O();}}J().s($t,a,$p);}
function De(){K.call(this);}
function Mo(){var $r=new De();Ej($r);return $r;}
function Ej($t){Bi($t);}
function Ec(){E.call(this);}
function Ub(){E.call(this);}
function Jb(){E.call(this);}
function Fb(){E.call(this);}
function Gc(){E.call(this);}
function Pb(){var a=this;E.call(a);a.j=0.0;a.l=0.0;}
function No(){var $r=new Pb();Vf($r);return $r;}
function Oo(b,c){var $r=new Pb();Kk($r,b,c);return $r;}
function Vf($t){Og($t);}
function Kk($t,a,b){Og($t);$t.j=a;$t.l=b;}
function Rh($t){return $t.j;}
function Gf($t){return $t.l;}
function Aj($t,a){$t.j=a;}
function Mg($t,a){$t.l=a;}
function Se(){var a=this;Pb.call(a);a.Bc=null;a.k=null;a.p=0.0;a.qb=0.0;}
function On(b,c){var $r=new Se();Jf($r,b,c);return $r;}
function Nn(b,c,d,e){var $r=new Se();Yg($r,b,c,d,e);return $r;}
function Jf($t,a,b){Yg($t,Gg(a),Yi(a),Yl(Em(b.g()-Yi(a),2.0)+Em(b.f()-Gg(a),2.0)),Yk(b.g()-Yi(a),b.f()-Gg(a)));}
function Yg($t,a,b,c,d){Vf($t);$t.Bc=Oo(a,b);$t.p=c;$t.qb=d;$t.k=Oo(a+c*Am(d),b+c*Ql(d));}
function Pg($t,a,b){var c,d;c=Th($t);d=Jk($t);Aj(c,Rh(c)+a);Mg(c,Gf(c)+b);Aj(d,Rh(d)+a);Mg(d,Gf(d)+b);}
function Jk($t){return $t.k;}
function Th($t){return $t.Bc;}
function Gg($t){return Rh($t.Bc);}
function Yi($t){return Gf($t.Bc);}
function Nh($t,a){if($t.qb!==a){$t.qb=a;$t.k=Oo(Rh($t.Bc)+$t.p*Am(a),Gf($t.Bc)+$t.p*Ql(a));}}
function Dk($t){return $t.qb;}
function Fc(){E.call(this);}
function Cb(){E.call(this);}
function Db(){E.call(this);}
function Po(){var $r=new Db();Uk($r);return $r;}
function Uk($t){Og($t);}
function Bg($t){return Kf($t)!=0?0:1;}
function Yb(){E.call(this);}
function Eb(){Db.call(this);this.P=0;}
function Qo(){var $r=new Eb();Ug($r);return $r;}
function Ug($t){Uk($t);}
function Pj($t,a){Ih($t,Kf($t),a);return 1;}
function Vg($t){return Ro($t);}
function Ab(){E.call(this);}
function Pc(){var a=this;Eb.call(a);a.Lb=null;a.w=0;}
function So(){var $r=new Pc();Qi($r);return $r;}
function To(b){var $r=new Pc();Eg($r,b);return $r;}
function Qi($t){Eg($t,10);}
function Eg($t,a){Ug($t);$t.Lb=Mm(E,a);}
function Bj($t,a){if($t.Lb.data.length<a){$t.Lb=Il($t.Lb,$t.Lb.data.length>=1073741823?2147483647:Jl(a,Jl($t.Lb.data.length*2|0,5)));}}
function Kj($t,a){Qg($t,a);return $t.Lb.data[a];}
function Kf($t){return $t.w;}
function Ih($t,a,b){var c;Hk($t,a);Bj($t,$t.w+1|0);c=$t.w;while(c>a){$t.Lb.data[c]=$t.Lb.data[c-1|0];c=c+ -1|0;}$t.Lb.data[a]=b;$t.w=$t.w+1|0;$t.P=$t.P+1|0;}
function Qg($t,a){if(a>=0&&a<$t.w){return;}Im(Dn());}
function Hk($t,a){if(a>=0&&a<=$t.w){return;}Im(Dn());}
function Cc(){E.call(this);}
function Hc(){E.call(this);}
function Me(){E.call(this);}
function Ji($t,a,b){Uo($t,$rt_str(a),Fm(b,"handleEvent"));}
function Di($t,a,b,c){Vo($t,$rt_str(a),Fm(b,"handleEvent"),c?1:0);}
function Wh($t,a){return !!Wo($t,a);}
function Mj($t,a,b){Xo($t,$rt_str(a),Fm(b,"handleEvent"));}
function Ah($t,a){return Yo($t,a);}
function Ei($t){return Zo($t);}
function Kg($t,a,b,c){Ap($t,$rt_str(a),Fm(b,"handleEvent"),c?1:0);}
function Qe(){K.call(this);}
function Tm(){var $r=new Qe();Hf($r);return $r;}
function Hf($t){Bi($t);}
function Kb(){E.call(this);}
function Rb(){var a=this;E.call(a);a.i=null;a.E=0;}
var Bp=null;var Cp=null;function Rb_$callClinit(){Rb_$callClinit=function(){};
Tj();}
function B(b){var $r=new Rb();Vd($r,b);return $r;}
function Vd($t,a){var b,c;Rb_$callClinit();a=a.data;Og($t);b=a.length;$t.i=$rt_createCharArray(b);c=0;while(c<b){$t.i.data[c]=a[c];c=c+1|0;}}
function Mk($t,a){if(a>=0&&a<$t.i.data.length){return $t.i.data[a];}Im(Ao());}
function C($t){return $t.i.data.length;}
function Zh($t){return $t.i.data.length!=0?0:1;}
function D($t,a,b,c,d){var e,f;if(a>=0&&a<=b&&b<=$t.Kb()&&d>=0){c=c.data;if((d+(b-a|0)|0)<=c.length){while(a<b){e=d+1|0;f=a+1|0;c[d]=$t.sc(a);d=e;a=f;}return;}}Im(Dn());}
function Vk($t,a){var b,c;if($t===a){return 1;}if(a instanceof Rb==0){return 0;}b=a;if(C(b)!=C($t)){return 0;}c=0;while(c<C(b)){if(Mk($t,c)!=Mk(b,c)){return 0;}c=c+1|0;}return 1;}
function Bk($t){var a,b,c;if($t.E==0){a=$t.i.data;b=a.length;c=0;while(c<b){$t.E=(31*$t.E|0)+a[c]|0;c=c+1|0;}}return $t.E;}
function Ci(a){Rb_$callClinit();return a;}
function G($t){var a;a=Gk(Cp,$t);if(a!==null){$t=a;}else{Ni(Cp,$t,$t);}return $t;}
function Tj(){Bp=Dp();Cp=Ep();}
function Ye(){K.call(this);}
function Fp(){var $r=new Ye();Uf($r);return $r;}
function Uf($t){Bi($t);}
function Be(){K.call(this);}
function Gp(b){var $r=new Be();Df($r,b);return $r;}
function Df($t,a){Pf($t,a);}
function Wb(){E.call(this);}
function W(){X.call(this);}
function Hp(b){var $r=new W();Uj($r,b);return $r;}
function Uj($t,a){Ch($t,a);}
function He(){W.call(this);}
function Ip(b){var $r=new He();Ui($r,b);return $r;}
function Ui($t,a){Uj($t,a);}
function Z(){var a=this;E.call(a);a.Q=null;a.tc=null;}
var Jp=null;function Z_$callClinit(){Z_$callClinit=function(){};
Fi();}
function Kp(b,c){var $r=new Z();Zd($r,b,c);return $r;}
function Zd($t,a,b){var c,d,e;Z_$callClinit();c=b.data;Og($t);Wj(a);d=c.length;e=0;while(e<d){Wj(c[e]);e=e+1|0;}$t.Q=a;$t.tc=b.Wc();}
function Wj(a){var b,c;Z_$callClinit();if(Zh(a)!=0){Im(Lp(a));}if(Xj(Mk(a,0))==0){Im(Lp(a));}b=1;while(b<C(a)){a:{c=Mk(a,b);switch(c){case 43:case 45:case 46:case 58:case 95:break;default:if(Xj(c)!=0){break a;}else{Im(Lp(a));}}}b=b+1|0;}}
function Xj(a){Z_$callClinit();return !(a>=48&&a<=57)&&!(a>=97&&a<=122)&&a<65&&a>90?0:1;}
function Fi(){Jp=Ep();Ni(Jp,Pm(2),Mp());}
function Pe(){Z.call(this);}
function Mp(){var $r=new Pe();Fg($r);return $r;}
function Fg($t){Zd($t,Pm(2),Mm(Rb,0));}
function Mc(){E.call(this);}
function Re(){var a=this;E.call(a);a.zd=0;a.Ed=0;a.o=0;a.Tb=0;a.ab=null;}
function Ro(b){var $r=new Re();Ag($r,b);return $r;}
function Ag($t,a){$t.ab=a;Og($t);a=$t.ab;$t.Ed=a.P;$t.o=Kf($t.ab);$t.Tb= -1;}
function Ki($t){return $t.zd>=$t.o?0:1;}
function Ij($t){var a,b;Gj($t);$t.Tb=$t.zd;a=$t.ab;b=$t.zd;$t.zd=b+1|0;return Kj(a,b);}
function Gj($t){var a,b;a=$t.Ed;b=$t.ab;if(a>=b.P){return;}Im(Mo());}
function Lc(){E.call(this);}
function Ue(){E.call(this);}
function Hl(a,b,c){a.setAttribute($rt_ustr(b),$rt_ustr(c));return a;}
function Bc(){E.call(this);}
function Id(){E.call(this);}
function Dp(){var $r=new Id();Ph($r);return $r;}
function Ph($t){Og($t);}
function Ud(){N.call(this);}
function Sm(b){var $r=new Ud();Lf($r,b);return $r;}
function Lf($t,a){Hg($t,a);}
function Ae(){E.call(this);}
function Ol(a,b){if(a===null){Im(F());}if(a===Rl(Lm($rt_voidcls()))){Im(Np());}if(b>=0){return Cl(Mf(a),b);}Im(Fp());}
function Cl(a,b){if (a.$meta.primitive) {if (a == $rt_bytecls()) {return $rt_createByteArray(b);}if (a == $rt_shortcls()) {return $rt_createShortArray(b);}if (a == $rt_charcls()) {return $rt_createCharArray(b);}if (a == $rt_intcls()) {return $rt_createIntArray(b);}if (a == $rt_longcls()) {return $rt_createLongArray(b);}if (a == $rt_floatcls()) {return $rt_createFloatArray(b);}if (a == $rt_doublecls()) {return $rt_createDoubleArray(b);}if (a == $rt_booleancls()) {return $rt_createBooleanArray(b);}} else {return $rt_createArray(a, b)}}
function Xd(){E.call(this);}
function Op(){var $r=new Xd();Ig($r);return $r;}
function Ig($t){Og($t);}
function Ck($t,a){return Math.random()*a|0;}
function Ke(){E.call(this);this.nb=null;}
function Pp(){var $r=new Ke();Xg($r);return $r;}
function Xg($t){Og($t);$t.nb=So();}
function Af($t,a,b,c,d,e){var f;if(Bg($t.nb)==0){Im(Qp(Pm(3)));}f=Mn(null,a,b,c,d,e);Pj($t.nb,f);return f;}
function Zf($t,a,b){var c,d;if(Bg($t.nb)!=0){return Af($t,0.0,0.0,a,b,1.0);}c=Jk(Dg(Kj($t.nb,Kf($t.nb)-1|0)));d=Mn(Sj($t),Rh(c),Gf(c),a,b,Fj(Kj($t.nb,0))*Em(1.02,Kf($t.nb)));Pj($t.nb,d);return d;}
function Sj($t){return Bg($t.nb)!=0?null:Kj($t.nb,Kf($t.nb)-1|0);}
function Jg($t,a){var b;b=Vg($t.nb);while(Ki(b)!=0){Gi(Ij(b),a);}}
function Kh($t,a){if(Kf($t.nb)>0){Jj($t,Sj($t),a);}}
function Jj($t,a,b){if(a===null){return;}Yf(a,b);Jj($t,Oi(a),Dg(a));}
function Bd(){K.call(this);}
function F(){var $r=new Bd();Pi($r);return $r;}
function Pi($t){Bi($t);}
function Cd(){var a=this;E.call(a);a.yd=null;a.Z=0.0;a.Dc=0.0;a.Ic=null;}
function Rp(b){var $r=new Cd();Xi($r,b);return $r;}
function Xi($t,a){Og($t);$t.yd=Vl(Pk($t,a,1).getContext("2d"));Hj($t);Wf($t);Ek($t);}
function Ek($t){Jh(Un(Sp($t)));}
function Wk(a){Xi(new Cd,Ul());}
function Pk($t,a,b){var c,d;if(b==0){Im(Gp(Pm(4)));}c=a.body;d=Vl(Hl(a.createElement("canvas"),Pm(5),Pm(6)));a=window.innerWidth;d.width=a;a=window.innerHeight;d.height=a;$t.Z=d.width;$t.Dc=d.height;c.appendChild(d);return d;}
function Sk($t){var a,b,c,d,e,f;a=$t.yd;b="#2A363B";a.fillStyle=b;b=$t.yd;c=0.0;d=0.0;e=$t.Z;f=$t.Dc;b.fillRect(c,d,e,f);}
function Hj($t){Sk($t);$t.Ic=So();}
function Wf($t){var a,b,c,d,e,f,g;a=Op();b=Pp();Af(b,$t.Z/2.0,$t.Dc/2.0,10.0,Zl(180.0),1.0);c=0;while(c<120){Zf(b,25.0,Zl(Ck(a,100)-50|0));c=c+1|0;}Pj($t.Ic,b);d=Pp();Af(d,$t.Z/2.0,$t.Dc/2.0,10.0,Zl(180.0),1.0);c=0;while(c<120){Zf(d,12.0,Zl(Ck(a,100)-50|0));c=c+1|0;}Pj($t.Ic,d);e=Pp();Af(e,$t.Z/2.0,$t.Dc/2.0,10.0,Zl(180.0),1.0);c=0;while(c<120){Zf(e,16.0,Zl(Ck(a,100)-50|0));c=c+1|0;}Pj($t.Ic,e);f=Pp();Af(f,$t.Z/2.0,$t.Dc/2.0,10.0,Zl(180.0),1.0);g=0;while(g<120){Zf(f,22.0,Zl(Ck(a,100)-50|0));g=g+1|0;}Pj($t.Ic,
f);}
function Tk($t,a){var b;b=Vg($t.Ic);while(Ki(b)!=0){Kh(Ij(b),a);Mg(a,Gf(a)+50.0);}}
function Hh($t){var a;Sk($t);a=Vg($t.Ic);while(Ki(a)!=0){Jg(Ij(a),$t.yd);}}
function Yc($t){var a,b,$$je,$p,$z;$p=0;if(P()){var $T=J();$p=$T.l();b=$T.l();a=$T.l();$t=$T.l();}_:while(true){switch($p){case 0:try{a=0.0;b=Long_fromInt(1);$p=1;continue _;}catch($$e){$$je=$$e.$javaException;if($$je&&$$je instanceof Ee){}else {throw $$e;}}return;case 1:try{Qc(b);if(Om()){break _;}Tk($t,Oo($t.Z/2.0+600.0*Em(Am(a),3.0),$t.Dc/2.0+400.0*Em(Ql(a),3.0)));a=a+0.01308996938995747;Hh($t);b=Long_fromInt(1);continue _;}catch($$e){$$je=$$e.$javaException;if($$je&&$$je instanceof Ee){}else {throw $$e;}}return;default:
O();}}J().s($t,a,b,$p);}
function We(){W.call(this);}
function Tp(b){var $r=new We();Sh($r,b);return $r;}
function Sh($t,a){Uj($t,a);}
function Nc(){E.call(this);}
function Sc(){E.call(this);this.Cc=null;}
function Up(b){var $r=new Sc();Rk($r,b);return $r;}
function Rk($t,a){Og($t);$t.Cc=a;}
function Xk(a){return Up(a);}
function Wi($t,a){$t.Cc.Vb(a);}
function Xh($t,a){$t.Cc.y(a);}
function Je(){var a=this;E.call(a);a.hd=null;a.xd=null;a.J=null;a.xc=0;}
function Rm(){var $r=new Je();Ak($r);return $r;}
function Ak($t){Og($t);$t.J=H();$t.hd=[];$t.xd=[];}
function Kc(){E.call(this);}
function Xc(){E.call(this);}
function Ql(a){return Math.sin(a);}
function Am(a){return Math.cos(a);}
function Zl(a){return a*3.141592653589793/180.0;}
function Yl(a){return Math.sqrt(a);}
function Em(a,b){return Math.pow(a,b);}
function Yk(a,b){return Math.atan2(a,b);}
function Xl(a,b){if(a<b){b=a;}return b;}
function Jl(a,b){if(a>b){b=a;}return b;}
function Le(){E.call(this);}
function Fm(a,b){var result={};result[b]=a;return result;}
function Nb(){var a=this;E.call(a);a.bd=null;a.rc=null;}
function Vp(b,c){var $r=new Nb();Rj($r,b,c);return $r;}
function Rj($t,a,b){Og($t);$t.bd=a;$t.rc=b;}
function Jd(){var a=this;Nb.call(a);a.jc=0;a.Tc=null;}
function Wp(b,c){var $r=new Jd();Wg($r,b,c);return $r;}
function Wg($t,a,b){Rj($t,a,null);$t.jc=b;}
function Ge(){var a=this;E.call(a);a.Ob=null;a.Nb=null;a.Jb=0;a.Hb=null;}
function Um(b,c,d,e){var $r=new Ge();Zg($r,b,c,d,e);return $r;}
function Zg($t,a,b,c,d){Og($t);$t.Ob=a;$t.Nb=b;$t.Jb=c;$t.Hb=d;}
function Tc($t){Gl($t.Ob,$t.Nb,$t.Jb,$t.Hb);}
function Ib(){E.call(this);}
function Xp(){var $r=new Ib();Lg($r);return $r;}
function Lg($t){Og($t);}
function Wc(){Ib.call(this);}
function Ln(){var $r=new Wc();Nf($r);return $r;}
function Nf($t){Lg($t);}
function Kd(){E.call(this);this.D=null;}
function Sp(b){var $r=new Kd();Ai($r,b);return $r;}
function Ai($t,a){Og($t);$t.D=a;}
function Vc($t){var a,$p,$z;$p=0;if(P()){var $T=J();$p=$T.l();a=$T.l();$t=$T.l();}_:while(true){switch($p){case 0:a=$t.D;$p=1;case 1:Yc(a);if(Om()){break _;}return;default:O();}}J().s($t,a,$p);}
function Zc(){var a=this;E.call(a);a.wd=null;a.Gb=null;a.qd=false;a.nc=0;}
function Xn(b,c){var $r=new Zc();Ng($r,b,c);return $r;}
function Ng($t,a,b){Og($t);$t.wd=a;$t.Gb=b;}
function Pd($t){if($t.qd==0){Rf($t.wd,null);I($t.wd);Wi($t.Gb,null);}}
function Ob(){E.call(this);}
function Yp(){var $r=new Ob();If($r);return $r;}
function If($t){Og($t);}
function Od(){var a=this;Ob.call(a);a.Pc=0;a.jb=null;a.pc=0;a.Zc=0.0;a.ob=0;}
function Ep(){var $r=new Od();Qf($r);return $r;}
function Zp(b){var $r=new Od();Tf($r,b);return $r;}
function Aq(b,c){var $r=new Od();Sg($r,b,c);return $r;}
function Yj($t,a){return Mm(Jd,a);}
function Qf($t){Tf($t,16);}
function Tf($t,a){Sg($t,a,0.75);}
function Zk(a){var b;if(a>=1073741824){return 1073741824;}if(a==0){return 16;}b=a-1|0;a=b|b>>1;a=a|a>>2;a=a|a>>4;a=a|a>>8;return (a|a>>16)+1|0;}
function Sg($t,a,b){If($t);if(a>=0&&b>0.0){a=Zk(a);$t.Pc=0;$t.jb=Yj($t,a);$t.Zc=b;Li($t);return;}Im(Np());}
function Li($t){$t.ob=$t.jb.data.length*$t.Zc|0;}
function Gk($t,a){var b;b=Hi($t,a);if(b===null){return null;}return b.rc;}
function Hi($t,a){var b,c;if(a===null){b=Zj($t);}else{c=Ml(a);b=Ii($t,a,c&($t.jb.data.length-1|0),c);}return b;}
function Ii($t,a,b,c){var d;d=$t.jb.data[b];while(d!==null){if(d.jc==c){if(Dm(a,d.bd)!=0){break;}}d=d.Tc;}return d;}
function Zj($t){var a;a=$t.jb.data[0];while(a!==null){if(a.bd===null){break;}a=a.Tc;}return a;}
function Ni($t,a,b){return Lj($t,a,b);}
function Lj($t,a,b){var c,d,e,f;if(a===null){c=Zj($t);if(c===null){$t.pc=$t.pc+1|0;c=Uh($t,null,0,0);d=$t.Pc+1|0;$t.Pc=d;if(d>$t.ob){Zi($t);}}}else{d=Ml(a);e=d&($t.jb.data.length-1|0);c=Ii($t,a,e,d);if(c===null){$t.pc=$t.pc+1|0;c=Uh($t,a,e,d);d=$t.Pc+1|0;$t.Pc=d;if(d>$t.ob){Zi($t);}}}f=c.rc;c.rc=b;return f;}
function Uh($t,a,b,c){var d;d=Wp(a,c);d.Tc=$t.jb.data[b];$t.jb.data[b]=d;return d;}
function Dj($t,a){var b,c,d,e,f,g,h;b=Zk(a==0?1:a<<1);c=Yj($t,b);d=0;b=b-1|0;while(d<$t.jb.data.length){e=$t.jb.data[d];$t.jb.data[d]=null;while(e!==null){f=c.data;g=e.jc&b;h=e.Tc;e.Tc=f[g];f[g]=e;e=h;}d=d+1|0;}$t.jb=c;Li($t);}
function Zi($t){Dj($t,$t.jb.data.length);}
function Ml(a){return Bk(a);}
function Dm(a,b){return a!==b&&Vk(a,b)==0?0:1;}
function Hd(){E.call(this);}
function El(a){var copy=new a.constructor();for(var field in a){if(!a.hasOwnProperty(field)){continue;}copy[field]=a[field];}return copy;}
function Nl(a){return window.setTimeout(function(){$rt_threadStarter(Qk)(a);},0);}
function Qk(a){var $p,$z;$p=0;if(P()){var $T=J();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:a.c();if(Om()){break _;}return;default:O();}}J().s(a,$p);}
function Al(a){Dl(a,0);}
function Dl(a,b){return window.setTimeout(function(){Qk(a);},b);}
function Ll(a){return a.$meta.item;}
function Mb(){K.call(this);}
function Np(){var $r=new Mb();Rg($r);return $r;}
function Qp(b){var $r=new Mb();Lk($r,b);return $r;}
function Rg($t){Bi($t);}
function Lk($t,a){Pf($t,a);}
function Ve(){Mb.call(this);this.m=null;}
function Lp(b){var $r=new Ve();Mi($r,b);return $r;}
function Mi($t,a){Rg($t);$t.m=a;}
function Rc(){X.call(this);}
function Fe(){var a=this;Sb.call(a);a.bb=false;a.I=null;a.Bd=null;a.Nc=null;}
function Jn(b,c){var $r=new Fe();Vj($r,b,c);return $r;}
function Vj($t,a,b){Oh($t,a);$t.I=Lo();$t.Bd=$rt_createCharArray(32);$t.bb=b;$t.Nc=Mp();}
function Te(){R.call(this);}
function Kn(){var $r=new Te();Bh($r);return $r;}
function Bh($t){Bf($t);}
function Ee(){N.call(this);}
function Ce(){E.call(this);this.Rb=null;}
function Bq(b){var $r=new Ce();Eh($r,b);return $r;}
function Eh($t,a){var b;Og($t);$t.Rb=a;b=$t;a.classObject=b;}
function A(a){var b;if(a===null){return null;}b=a.classObject;if(b===null){b=Bq(a);}return b;}
function Mf($t){return $t.Rb;}
function Cg($t){return A(Ll($t.Rb));}
function Rd(){E.call(this);this.gd=null;}
function Vm(b){var $r=new Rd();Ok($r,b);return $r;}
function Ok($t,a){Og($t);$t.gd=a;}
function Ne($t){Wl($t.gd);}
$rt_metadata([E,"java.lang.Object",0,[],0,0,["wc",function(){return Ik(this);},"a",function(){Og(this);},"Xb",function(){return Of(this);},"Wc",function(){return Qj(this);},"Wb",function(){Mh(this);}],V,"java.lang.Throwable",E,[],0,0,["a",function(){Oj(this);},"b",function(b){Dh(this,b);},"bc",function(){return Lh(this);}],N,"java.lang.Exception",V,[],0,0,["a",function(){Qh(this);},"b",function(b){Hg(this,b);}],K,"java.lang.RuntimeException",N,[],0,0,["a",function(){Bi(this);},"b",function(b){Pf(this,b);}],Lb,
"java.lang.IndexOutOfBoundsException",K,[],0,0,["a",function(){Vh(this);}],Q,"org.teavm.jso.JSObject",E,[],0,0,[],Bb,"org.teavm.jso.dom.xml.Node",E,[Q],0,0,[],Xb,"org.teavm.jso.dom.xml.Document",E,[Bb],0,0,[],Ze,"java.util.Arrays",E,[],0,0,[],Ic,"java.lang.AutoCloseable",E,[],0,0,[],Qb,"java.io.Closeable",E,[Ic],0,0,[],Dc,"java.io.Flushable",E,[],0,0,[],R,"java.io.OutputStream",E,[Qb,Dc],0,0,["a",function(){Bf(this);}],Fd,"java.lang.ConsoleOutputStreamStdout",R,[],0,0,["a",function(){Gh(this);}],Y,"java.lang.System",
E,[],0,Y_$callClinit,[],Uc,"java.lang.CloneNotSupportedException",N,[],0,0,["a",function(){Tg(this);}],Qd,"tyner.alex.game.components.Segment",E,[],0,0,["V",function(b,c,d,e,f,g){Vi(this,b,c,d,e,f,g);},"rb",function(){return Oi(this);},"S",function(b){Si(this,b);},"fb",function(){return Fj(this);},"t",function(b){Yf(this,b);},"Pb",function(){return Dg(this);},"e",function(b){Gi(this,b);}],M,"org.teavm.jso.dom.events.EventTarget",E,[Q],0,0,[],Sd,"org.teavm.jso.dom.html.HTMLDocument",E,[Xb,M],0,0,[],Jc,"org.teavm.jso.dom.css.ElementCSSInlineStyle",
E,[Q],0,0,[],Vb,"java.lang.Runnable",E,[],0,0,[],U,"java.lang.Thread",E,[Vb],0,U_$callClinit,["b",function(b){Ed(this,b);},"R",function(b){Nd(this,b);},"wb",function(b,c){Oe(this,b,c);},"fd",function(){Jh(this);},"c",function(){Xe(this);},"G",function(){Ie(this);}],Zb,"java.util.Map",E,[],0,0,[],Ac,"org.teavm.jso.dom.events.WheelEventTarget",E,[M],0,0,[],Md,"org.teavm.platform.PlatformQueue",E,[Q],0,0,[],Gb,"java.lang.CharSequence",E,[],0,0,[],Hb,"java.lang.Error",V,[],0,0,["b",function(b){Cf(this,b);}],X,"java.lang.LinkageError",
Hb,[],0,0,["b",function(b){Ch(this,b);}],Tb,"org.teavm.jso.dom.events.LoadEventTarget",E,[M],0,0,[],Gd,"java.lang.StringIndexOutOfBoundsException",Lb,[],0,0,["a",function(){Yh(this);}],Sb,"java.io.FilterOutputStream",R,[],0,0,["ld",function(b){Oh(this,b);}],T,"java.io.Serializable",E,[],0,0,[],L,"java.lang.AbstractStringBuilder",E,[T,Gb],0,L_$callClinit,["a",function(){Ad(this);},"d",function(b){Yd(this,b);}],Oc,"java.lang.Appendable",E,[],0,0,[],Dd,"java.lang.StringBuilder",L,[Oc],0,0,["a",function(){Fh(this);
}],S,"org.teavm.platform.PlatformRunnable",E,[],0,0,[],Ld,"java.lang.Object$NotifyListener",E,[S],0,0,[],Wd,"$$LAMBDA2$$",E,[S],0,0,["B",function(b){Nk(this,b);},"c",function(){Td(this);}],De,"java.util.ConcurrentModificationException",K,[],0,0,["a",function(){Ej(this);}],Ec,"java.lang.reflect.AnnotatedElement",E,[],0,0,[],Ub,"org.teavm.jso.dom.events.FocusEventTarget",E,[M],0,0,[],Jb,"org.teavm.jso.dom.events.MouseEventTarget",E,[M],0,0,[],Fb,"org.teavm.jso.dom.events.KeyboardEventTarget",E,[M],0,0,[],Gc,"org.teavm.jso.browser.WindowEventTarget",
E,[M,Ub,Jb,Fb,Tb],0,0,[],Pb,"tyner.alex.game.util.Point",E,[],0,0,["a",function(){Vf(this);},"fc",function(b,c){Kk(this,b,c);},"f",function(){return Rh(this);},"g",function(){return Gf(this);},"uc",function(b){Aj(this,b);},"dc",function(b){Mg(this,b);}],Se,"tyner.alex.game.util.Vector",Pb,[],0,0,["ed",function(b,c){Jf(this,b,c);},"Jc",function(b,c,d,e){Yg(this,b,c,d,e);},"mc",function(b,c){Pg(this,b,c);},"q",function(){return Jk(this);},"lc",function(){return Th(this);},"f",function(){return Gg(this);},"g",
function(){return Yi(this);},"Dd",function(b){Nh(this,b);},"Hc",function(){return Dk(this);}],Fc,"java.lang.Iterable",E,[],0,0,[],Cb,"java.util.Collection",E,[Fc],0,0,[],Db,"java.util.AbstractCollection",E,[Cb],0,0,["a",function(){Uk(this);},"h",function(){return Bg(this);}],Yb,"java.util.List",E,[Cb],0,0,[],Eb,"java.util.AbstractList",Db,[Yb],0,0,["a",function(){Ug(this);},"Rc",function(b){return Pj(this,b);},"Vc",function(){return Vg(this);}],Ab,"java.lang.Cloneable",E,[],0,0,[],Pc,"java.util.ArrayList",Eb,
[Ab,T],0,0,["a",function(){Qi(this);},"d",function(b){Eg(this,b);},"Fb",function(b){Bj(this,b);},"kc",function(b){return Kj(this,b);},"s",function(){return Kf(this);},"Kc",function(b,c){Ih(this,b,c);},"Ub",function(b){Qg(this,b);},"Gc",function(b){Hk(this,b);}],Cc,"org.teavm.jso.browser.StorageProvider",E,[],0,0,[],Hc,"org.teavm.jso.core.JSArrayReader",E,[Q],0,0,[],Me,"org.teavm.jso.browser.Window",E,[Q,Gc,Cc,Hc],0,0,["ic",function(b,c){return Ji(this,b,c);},"zb",function(b,c,d){return Di(this,b,c,d);},"Eb",
function(b){return Wh(this,b);},"hc",function(b,c){return Mj(this,b,c);},"xb",function(b){return Ah(this,b);},"nd",function(){return Ei(this);},"Ab",function(b,c,d){return Kg(this,b,c,d);}],Qe,"java.lang.IllegalMonitorStateException",K,[],0,0,["a",function(){Hf(this);}],Kb,"java.lang.Comparable",E,[],0,0,[],Rb,"java.lang.String",E,[T,Kb,Gb],0,Rb_$callClinit,["cb",function(b){Vd(this,b);},"sc",function(b){return Mk(this,b);},"Kb",function(){return C(this);},"h",function(){return Zh(this);},"sd",function(b,c,
d,e){D(this,b,c,d,e);},"id",function(b){return Vk(this,b);},"F",function(){return Bk(this);},"u",function(){return G(this);}],Ye,"java.lang.NegativeArraySizeException",K,[],0,0,["a",function(){Uf(this);}],Be,"java.lang.UnsupportedOperationException",K,[],0,0,["b",function(b){Df(this,b);}],Wb,"java.util.Map$Entry",E,[],0,0,[],W,"java.lang.IncompatibleClassChangeError",X,[],0,0,["b",function(b){Uj(this,b);}],He,"java.lang.NoSuchMethodError",W,[],0,0,["b",function(b){Ui(this,b);}],Z,"java.nio.charset.Charset",
E,[Kb],0,Z_$callClinit,["Sc",function(b,c){Zd(this,b,c);}],Pe,"java.nio.charset.impl.UTF8Charset",Z,[],0,0,["a",function(){Fg(this);}],Mc,"java.util.Iterator",E,[],0,0,[],Re,"java.util.AbstractList$1",E,[Mc],0,0,["Lc",function(b){Ag(this,b);},"md",function(){return Ki(this);},"X",function(){return Ij(this);},"C",function(){Gj(this);}],Lc,"org.teavm.jso.dom.xml.Element",E,[Bb],0,0,[],Ue,"org.teavm.jso.dom.html.HTMLElement",E,[Lc,Jc,M,Ub,Jb,Ac,Fb,Tb],0,0,[],Bc,"java.util.Comparator",E,[],0,0,[],Id,"$$LAMBDA1$$",
E,[Bc],0,0,["a",function(){Ph(this);}],Ud,"java.lang.IllegalStateException",N,[],0,0,["b",function(b){Lf(this,b);}],Ae,"java.lang.reflect.Array",E,[],0,0,[],Xd,"java.util.Random",E,[T],0,0,["a",function(){Ig(this);},"U",function(b){return Ck(this,b);}],Ke,"tyner.alex.game.components.Branch",E,[],0,0,["a",function(){Xg(this);},"Bb",function(b,c,d,e,f){return Af(this,b,c,d,e,f);},"mb",function(b,c){return Zf(this,b,c);},"gc",function(){return Sj(this);},"e",function(b){Jg(this,b);},"Ec",function(b){Kh(this,b);
},"Cb",function(b,c){Jj(this,b,c);}],Bd,"java.lang.NullPointerException",K,[],0,0,["a",function(){Pi(this);}],Cd,"tyner.alex.game.ui.Main",E,[],0,0,["Sb",function(b){Xi(this,b);},"Oc",function(){Ek(this);},"Yc",function(b,c){return Pk(this,b,c);},"v",function(){Sk(this);},"n",function(){Hj(this);},"z",function(){Wf(this);},"Y",function(b){Tk(this,b);},"r",function(){Hh(this);},"ib",function(){Yc(this);}],We,"java.lang.NoSuchFieldError",W,[],0,0,["b",function(b){Sh(this,b);}],Nc,"org.teavm.platform.async.AsyncCallback",
E,[],0,0,[],Sc,"org.teavm.platform.plugin.AsyncCallbackWrapper",E,[Nc],0,0,["ud",function(b){Rk(this,b);},"Vb",function(b){Wi(this,b);},"y",function(b){Xh(this,b);}],Je,"java.lang.Object$Monitor",E,[],0,0,["a",function(){Ak(this);}],Kc,"java.lang.ThreadInterruptHandler",E,[],0,0,[],Xc,"java.lang.Math",E,[],0,0,[],Le,"org.teavm.jso.impl.JS",E,[],0,0,[],Nb,"java.util.MapEntry",E,[Wb,Ab],0,0,["Xc",function(b,c){Rj(this,b,c);}],Jd,"java.util.HashMap$HashEntry",Nb,[],0,0,["kb",function(b,c){Wg(this,b,c);}],Ge,"$$LAMBDA4$$",
E,[S],0,0,["zc",function(b,c,d,e){Zg(this,b,c,d,e);},"c",function(){Tc(this);}],Ib,"java.io.InputStream",E,[Qb],0,0,["a",function(){Lg(this);}],Wc,"java.lang.ConsoleInputStream",Ib,[],0,0,["a",function(){Nf(this);}],Kd,"$$LAMBDA0$$",E,[Vb],0,0,["vd",function(b){Ai(this,b);},"c",function(){Vc(this);}],Zc,"java.lang.Thread$SleepHandler",E,[S,Kc],0,0,["qc",function(b,c){Ng(this,b,c);},"c",function(){Pd(this);}],Ob,"java.util.AbstractMap",E,[Zb],0,0,["a",function(){If(this);}],Od,"java.util.HashMap",Ob,[Ab,T],0,
0,["ub",function(b){return Yj(this,b);},"a",function(){Qf(this);},"d",function(b){Tf(this,b);},"H",function(b,c){Sg(this,b,c);},"tb",function(){Li(this);},"Ad",function(b){return Gk(this,b);},"Cd",function(b){return Hi(this,b);},"M",function(b,c,d){return Ii(this,b,c,d);},"ac",function(){return Zj(this);},"jd",function(b,c){return Ni(this,b,c);},"sb",function(b,c){return Lj(this,b,c);},"dd",function(b,c,d){return Uh(this,b,c,d);},"Yb",function(b){Dj(this,b);},"cd",function(){Zi(this);}],Hd,"org.teavm.platform.Platform",
E,[],0,0,[],Mb,"java.lang.IllegalArgumentException",K,[],0,0,["a",function(){Rg(this);},"b",function(b){Lk(this,b);}],Ve,"java.nio.charset.IllegalCharsetNameException",Mb,[],0,0,["b",function(b){Mi(this,b);}],Rc,"java.lang.NoClassDefFoundError",X,[],0,0,[],Fe,"java.io.PrintStream",Sb,[],0,0,["Fd",function(b,c){Vj(this,b,c);}],Te,"java.lang.ConsoleOutputStreamStderr",R,[],0,0,["a",function(){Bh(this);}],Ee,"java.lang.InterruptedException",N,[],0,0,[],Ce,"java.lang.Class",E,[Ec],0,0,["hb",function(b){Eh(this,
b);},"Db",function(){return Mf(this);},"od",function(){return Cg(this);}],Rd,"$$LAMBDA3$$",E,[S],0,0,["oc",function(b){Ok(this,b);},"c",function(){Ne(this);}]]);
$rt_stringPool(["Can\'t enter monitor from another thread synchronously","main","UTF-8","Branch already has a root.","Only support for fullscreen canvases is implemented.","id","canvas"]);
var main=Wk;
(function(){var c;c=Me.prototype;c.removeEventListener=c.ic;c.removeEventListener=c.zb;c.dispatchEvent=c.Eb;c.getLength=c.nd;c.addEventListener=c.hc;c.get=c.xb;c.addEventListener=c.Ab;})();
main = $rt_mainStarter(main);
